import {ObjectType} from "../../types/object-type";
import {UNDEFINED,NULL} from "../../types/primitive-type";
import {toString,toBoolean,toObject,toPropertyKey} from "../../utils/native";
import * as contracts from "../../utils/contracts";
import {execute as exec} from "../../utils/func";

export function* defineProperty (env, obj, key, descriptor, throwOnError = true) {
	if (!contracts.isObject(descriptor)) {
		let stringValue = yield toString(descriptor);
		throw new TypeError(`Property description must be an object: ${stringValue}`);
	}

	let options = {};

	if (descriptor) {
		let hasValue = descriptor.has("value");
		let hasGetter = descriptor.has("get");
		let hasSetter = descriptor.has("set");

		if ((hasValue || descriptor.has("writable")) && (hasGetter || hasSetter)) {
			throw new TypeError("Invalid property. A property cannot both have accessors and be writable or have a value");
		}

		["writable", "enumerable", "configurable"].forEach(function (prop) {
			if (descriptor.has(prop)) {
				let attrValue = descriptor.getValue(prop);
				options[prop] = toBoolean(attrValue);
			}
		});

		let currentScope = env.current.scope;

		// we only keep a copy of the original getter/setter for use with `getOwnPropertyDescriptor`
		if (hasGetter) {
			let getter = descriptor.getValue("get") || UNDEFINED;
			if (getter.isPrimitive && getter.value === undefined) {
				options.get = options.getter = undefined;
			} else {
				if (getter.className !== "Function") {
					let stringValue = yield toString(getter);
					throw new TypeError(`Getter must be a function: ${stringValue}`);
				}

				options.get = getter;
				options.getter = function* () {
					let scope = env.setScope(currentScope);
					let thisArg = getter.isStrict() ? this : toObject(env, this);

					return yield scope.use(function* () {
						return yield getter.call(thisArg, []) || UNDEFINED;
						// let getResult = yield call(env, getter, getter.node.params, [], thisArg, getter.node);
						// return getResult && getResult.exit ? getResult.result.getValue() : UNDEFINED;
					});
				};
			}
		}

		if (hasSetter) {
			let setter = descriptor.getValue("set") || UNDEFINED;
			if (setter.isPrimitive && setter.value === undefined) {
				options.set = options.setter = undefined;
			} else {
				if (setter.className !== "Function") {
					let stringValue = yield toString(setter);
					throw new TypeError(`Setter must be a function: ${stringValue}`);
				}

				options.set = setter;
				options.setter = function* (value) {
					let scope = env.setScope(currentScope);
					let thisArg = setter.isStrict() ? this : toObject(env, this);

					return yield scope.use(function* () {
						yield exec(env, setter, [value], thisArg, setter.node);
						return UNDEFINED;
					});
				};
			}
		}

		if (hasValue) {
			options.value = descriptor.getValue("value") || UNDEFINED;
		}
	}

	return obj.defineOwnProperty(key, options, throwOnError, env);
}

export function* getOwnPropertyDescriptor (env, target, propertyKey) {
	let key = yield toPropertyKey(propertyKey);
	let descriptor = target.getOwnProperty(key);

	if (descriptor) {
		let result = env.objectFactory.createObject();
		if (descriptor.dataProperty) {
			result.setValue("value", descriptor.value, false, env);
			result.setValue("writable", env.objectFactory.createPrimitive(descriptor.writable), false, env);
		} else {
			result.setValue("get", descriptor.get || UNDEFINED, false, env);
			result.setValue("set", descriptor.set || UNDEFINED, false, env);
		}

		result.setValue("enumerable", env.objectFactory.createPrimitive(descriptor.enumerable), false, env);
		result.setValue("configurable", env.objectFactory.createPrimitive(descriptor.configurable), false,env );
		return result;
	}

	return UNDEFINED;
}

export default function objectApi (env) {
	const globalObject = env.global;
	const objectFactory = env.objectFactory;

	function confirmObject (obj, methodName) {
		if (contracts.isObject(obj)) {
			return true;
		}

		if (env.options.ecmaVersion > 5) {
			return false;
		}

		throw new TypeError(`${methodName} called on non-object`);
	}

	let proto = new ObjectType();
	let objectClass = objectFactory.createFunction(function (value) {
		if (value) {
			if (value.isPrimitive) {
				if (value.value == null) {
					return objectFactory.createObject();
				}

				let objectWrapper = objectFactory.createPrimitive(value.value);
				objectWrapper.type = "object";
				objectWrapper.isPrimitive = false;
				return objectWrapper;
			}

			if (value.isSymbol) {
				// should return a new symbol instance
				return objectFactory.create("Symbol", value.description);
			}

			// if an object is passed in just return
			return value;
		}

		return objectFactory.createObject();
	}, proto, { configurable: false, enumerable: false, writable: false });

	proto.define("hasOwnProperty", objectFactory.createBuiltInFunction(function* (key) {
		contracts.assertIsNotNullOrUndefined(this.node, "Object.prototype.hasOwnProperty");
		let k = yield toPropertyKey(key);
		return objectFactory.createPrimitive(this.node.owns(k));
	}, 1, "Object.prototype.hasOwnProperty"));

	proto.define("valueOf", objectFactory.createBuiltInFunction(function () {
		return toObject(env, this.node, true);
	}, 0, "Object.prototype.valueOf"));

	let toStringFunc = objectFactory.createBuiltInFunction(function () {
		let className = this.node ? this.node.className : "Undefined";
		return objectFactory.createPrimitive(`[object ${className}]`);
	}, 0, "Object.prototype.toString");

	// Object.prototype.toString === Object.prototype.toLocaleString
	proto.define("toString", toStringFunc);
	proto.define("toLocaleString", toStringFunc);

	proto.define("isPrototypeOf", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsNotNullOrUndefined(this.node, "Object.isPrototypeOf");

		let current = obj;
		while (current) {
			if (this.node === current) {
				return objectFactory.createPrimitive(true);
			}

			current = current.getPrototype();
		}

		return objectFactory.createPrimitive(false);
	}, 1, "Object.isPrototypeOf"));

	proto.define("propertyIsEnumerable", objectFactory.createBuiltInFunction(function* (key) {
		contracts.assertIsNotNullOrUndefined(this.node,  "Object.propertyIsEnumerable");

		let k = yield toPropertyKey(key);
		let descriptor = this.node.getOwnProperty(k);
		return objectFactory.createPrimitive(!!(descriptor && descriptor.enumerable));
	}, 1, "Object.propertyIsEnumerable"));

	objectClass.define("create", objectFactory.createBuiltInFunction(function* (parent, descriptors) {
		if (parent && parent.isPrimitive && parent.value !== null) {
			let stringValue = yield toString(parent);
			return this.raise(new TypeError(`Object prototype may only be an Object or null: ${stringValue}`));
		}

		if (descriptors && descriptors.isPrimitive && descriptors.value === null) {
			return this.raise(new TypeError("Cannot convert null or undefined to object"));
		}

		let obj = objectFactory.createObject();

		if (parent) {
			obj.setPrototype(parent);
		}

		if (descriptors) {
			for (let prop in descriptors.properties) {
				if (descriptors.properties[prop].enumerable) {
					yield defineProperty(env, obj, prop, descriptors.getValue(prop));
				}
			}
		}

		return obj;
	}, 2, "Object.create"));

	objectClass.define("defineProperty", objectFactory.createBuiltInFunction(function* (obj, propertyKey, descriptor) {
		contracts.assertIsObject(obj, "Object.defineProperty");
		let key = yield toPropertyKey(propertyKey);
		yield defineProperty(env, obj, key, descriptor);
		return obj;
	}, 3, "Object.defineProperty"));

	objectClass.define("defineProperties", objectFactory.createBuiltInFunction(function* (obj, descriptors) {
		contracts.assertIsObject(obj, "Object.defineProperties");
		contracts.assertArgIsNotNullOrUndefined(descriptors);

		for (let prop in descriptors.properties) {
			if (descriptors.properties[prop].enumerable) {
				yield defineProperty(env, obj, prop, descriptors.getValue(prop));
			}
		}

		return obj;
	}, 2, "Object.defineProperties"));

	objectClass.define("getOwnPropertyDescriptor", objectFactory.createBuiltInFunction(function* (obj, key) {
		contracts.assertIsNotNullOrUndefined(obj, "Object.getOwnPropertyDescriptor");
		return yield getOwnPropertyDescriptor(env, obj, key);
	}, 2, "Object.getOwnPropertyDescriptor"));

	objectClass.define("keys", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj);

		let arr = objectFactory.create("Array");
		let index = 0;

		obj.getOwnPropertyKeys().forEach(key => {
			if (typeof key === "string") {
				let propInfo = obj.getProperty(key);
				if (propInfo && propInfo.enumerable) {
					arr.setValue(index++, objectFactory.createPrimitive(key));
				}
			}
		});

		return arr;
	}, 1, "Object.keys"));

	objectClass.define("getOwnPropertyNames", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj, "Object.getOwnPropertyNames");

		let arr = objectFactory.create("Array");
		obj.getOwnPropertyKeys().forEach(function (name, index) {
			arr.setValue(index, objectFactory.createPrimitive(name));
		});

		return arr;
	}, 1, "Object.getOwnPropertyNames"));

	objectClass.define("getPrototypeOf", objectFactory.createBuiltInFunction(function (obj) {
		if (!confirmObject(obj, "Object.getPrototypeOf")) {
			obj = toObject(env, obj, true);
		}

		let objProto = obj.getPrototype();
		return objProto || NULL;
	}, 1, "Object.getPrototypeOf"));

	objectClass.define("freeze", objectFactory.createBuiltInFunction(function (obj) {
		if (confirmObject(obj, "Object.freeze")) {
			obj.freeze();
		}

		return obj;
	}, 1, "Object.freeze"));

	objectClass.define("isFrozen", objectFactory.createBuiltInFunction(function (obj) {
		if (!confirmObject(obj, "Object.isFrozen")) {
			return objectFactory.createPrimitive(true);
		}

		if (obj.isPrimitive) {
			return objectFactory.createPrimitive(true);
		}

		if (!obj.extensible) {
			for (let prop in obj.properties) {
				if (obj.properties[prop].writable || obj.properties[prop].configurable) {
					return objectFactory.createPrimitive(false);
				}
			}
		}

		return objectFactory.createPrimitive(!obj.extensible);
	}, 1, "Object.isFrozen"));

	objectClass.define("preventExtensions", objectFactory.createBuiltInFunction(function (obj) {
		if (confirmObject(obj, "Object.preventExtensions")) {
			obj.preventExtensions();
		}

		return obj;
	}, 1, "Object.preventExtensions"));

	objectClass.define("isExtensible", objectFactory.createBuiltInFunction(function (obj) {
		if (!confirmObject(obj, "Object.isExtensible")) {
			return objectFactory.createPrimitive(false);
		}

		return objectFactory.createPrimitive(obj.isExtensible());
	}, 1, "Object.isExtensible"));

	objectClass.define("seal", objectFactory.createBuiltInFunction(function (obj) {
		if (confirmObject(obj, "Object.seal")) {
			obj.seal();
		}

		return obj;
	}, 1, "Object.seal"));

	objectClass.define("isSealed", objectFactory.createBuiltInFunction(function (obj) {
		if (!confirmObject(obj, "Object.isSealed")) {
			return objectFactory.createPrimitive(true);
		}

		if (!obj.extensible) {
			for (let prop in obj.properties) {
				if (obj.properties[prop].configurable) {
					return objectFactory.createPrimitive(false);
				}
			}
		}

		return objectFactory.createPrimitive(!obj.extensible);
	}, 1, "Object.isSealed"));

	// function is an object - make sure that it is in the prototype chain
	globalObject.getValue("Function").getPrototype().setPrototype(proto);
	globalObject.define("Object", objectClass);
}