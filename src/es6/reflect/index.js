import {execute as exec} from "../../utils/func";
import {toArray,toPropertyKey} from "../../utils/native";
import * as contracts from "../../utils/contracts";
import {NULL,UNDEFINED} from "../../types/primitive-type";
import {defineProperty,getOwnPropertyDescriptor} from "../../es5/object/";

export function setPrototype (target, proto) {
	// check whether prototype chain already includes object
	let targetProto = target.getPrototype();
	if (targetProto === proto) {
		return true;
	}

	if (!target.extensible) {
		return false;
	}

	let current = proto;
	while (current) {
		if (current === target) {
			return false;
		}

		current = current.getPrototype();
	}

	target.setPrototype(proto);
	return true;
}

export default function (env) {
	let objectFactory = env.objectFactory;
	let globalObject = env.global;

	let reflectClass = objectFactory.createObject();
	reflectClass.define("apply", objectFactory.createBuiltInFunction(function* (target, thisArg, argsArray) {
		contracts.assertIsFunction(target, "target");
		if (argsArray) {
			contracts.assertIsObject(argsArray, "Reflect.apply");
		}

		let args = yield toArray(env, argsArray);
		let callee = target.native ? target : target.node;
		return yield exec(env, target, args, thisArg, callee);
	}, 3, "Reflect.apply"));

	reflectClass.define("construct", objectFactory.createBuiltInFunction(function* (target, argsArray, newTarget) {
		contracts.assertIsFunction(target, "target");
		if (argsArray) {
			contracts.assertIsObject(argsArray, "Reflect.construct");
		}

		let args = yield toArray(env, argsArray);
		let callee = target.node || target;
		let proto = newTarget || target;

		let obj = objectFactory.createObject(proto);
		return yield exec(env, target, args, obj, callee, true);
	}, 2, "Reflect.construct"));

	reflectClass.define("defineProperty", objectFactory.createBuiltInFunction(function* (target, propertyKey, descriptor) {
		contracts.assertIsObject(target, "Reflect.defineProperty");
		let key = yield toPropertyKey(env, propertyKey);
		return objectFactory.createPrimitive(yield defineProperty(env, target, key, descriptor, false));
	}, 3, "Reflect.defineProperty"));

	reflectClass.define("deleteProperty", objectFactory.createBuiltInFunction(function* (target, propertyKey) {
		contracts.assertIsObject(target, "Reflect.deleteProperty");
		let key = yield toPropertyKey(env, propertyKey);
		return objectFactory.createPrimitive(target.deleteProperty(key, false));
	}, 2, "Reflect.deleteProperty"));

	reflectClass.define("get", objectFactory.createBuiltInFunction(function* (target, propertyKey, receiver) {
		contracts.assertIsObject(target, "Reflect.get");
		let key = yield toPropertyKey(env, propertyKey);

		let property = target.getProperty(key);
		if (property) {
			property.bind(receiver || target);
			return property.getValue();
		}

		return UNDEFINED;
	}, 2, "Reflect.get"));

	reflectClass.define("getOwnPropertyDescriptor", objectFactory.createBuiltInFunction(function* (target, propertyKey) {
		contracts.assertIsObject(target, "Reflect.getOwnPropertyDescriptor");
		return yield getOwnPropertyDescriptor(env, target, propertyKey);
	}, 2, "Reflect.getOwnPropertyDescriptor"));

	reflectClass.define("getPrototypeOf", objectFactory.createBuiltInFunction(function (target) {
		contracts.assertIsObject(target, "Reflect.getPrototypeOf");
		return target.getPrototype();
	}, 1, "Reflect.getPrototypeOf"));

	reflectClass.define("has", objectFactory.createBuiltInFunction(function* (target, propertyKey) {
		contracts.assertIsObject(target, "Reflect.has");
		let key = yield toPropertyKey(env, propertyKey);
		return objectFactory.createPrimitive(target.has(key));
	}, 2, "Reflect.has"));

	reflectClass.define("isExtensible", objectFactory.createBuiltInFunction(function (target) {
		contracts.assertIsObject(target, "Reflect.isExtensible");
		return objectFactory.createPrimitive(target.extensible);
	}, 1, "Reflect.isExtensible"));

	reflectClass.define("ownKeys", objectFactory.createBuiltInFunction(function (target) {
		contracts.assertIsObject(target, "Reflect.ownKeys");

		let arr = objectFactory.create("Array");
		let index = 0;

		for (let key in target.properties) {
			let value = objectFactory.createPrimitive(key);
			arr.defineOwnProperty(index++, { configurable: true, enumerable: true, writable: true, value }, false, env);
		}

		for (let key in target.symbols) {
			arr.defineOwnProperty(index++, { configurable: true, enumberable: true, writable: true, value: target.symbols[key].key }, false, env);
		}

		return arr;
	}, 1, "Reflect.ownKeys"));

	reflectClass.define("preventExtensions", objectFactory.createBuiltInFunction(function (target) {
		contracts.assertIsObject(target, "Reflect.preventExtensions");
		target.preventExtensions();
		return objectFactory.createPrimitive(true);
	}, 1, "Reflect.preventExtensions"));

	reflectClass.define("set", objectFactory.createBuiltInFunction(function* (target, propertyKey, value, receiver) {
		contracts.assertIsObject(target, "Reflect.set");
		let key = yield toPropertyKey(env, propertyKey);
		receiver = receiver || target;

		let descriptor = target.getProperty(key);
		if (descriptor) {
			if (target !== receiver && receiver.owns(key)) {
				let receiverDescriptor = receiver.getProperty(key);
				if (!receiverDescriptor.dataProperty) {
					return objectFactory.createPrimitive(false);
				}
			}

			if (!descriptor.dataProperty) {
				descriptor.bind(receiver);
				descriptor.setValue(value);
				return objectFactory.createPrimitive(true);
			}

			if (!receiver.owns(key)) {
				return objectFactory.createPrimitive(receiver.defineOwnProperty(key, {
					value: value,
					configurable: true,
					enumerable: true,
					writable: true
				}, false, env));
			}

			if (!descriptor.canUpdate({ value })) {
				return objectFactory.createPrimitive(false);
			}

			receiver.putValue(key, value, false, env);
			return objectFactory.createPrimitive(true);
		}

		let result = receiver.defineOwnProperty(key, {
			value: value,
			configurable: true,
			enumerable: true,
			writable: true
		}, false, env);

		return objectFactory.createPrimitive(result);
	}, 3, "Reflect.set"));

	reflectClass.define("setPrototypeOf", objectFactory.createBuiltInFunction(function (target, proto) {
		contracts.assertIsObject(target, "Reflect.setPrototypeOf");
		if (proto !== NULL && proto.type !== "object") {
			throw new TypeError("The prototype must be an object or null");
		}

		return objectFactory.createPrimitive(setPrototype(target, proto));
	}, 2, "Reflect.setPrototypeOf"));

	globalObject.define("Reflect", reflectClass);
}
