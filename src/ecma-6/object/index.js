import {UNDEFINED} from "../../types/primitive-type";
import {toObject} from "../../utils/native";
import * as contracts from "../../utils/contracts";
import {setPrototype} from "../reflect/";
import {SymbolType} from "../../types/symbol-type";

export default function (env) {
	let objectFactory = env.objectFactory;
	let objectClass = env.global.getValue("Object");

	objectClass.define("is", objectFactory.createBuiltInFunction(function (a, b) {
		let result = env.ops.areSame(a || UNDEFINED, b || UNDEFINED);
		return objectFactory.createPrimitive(result);
	}, 2, "Object.is"));

	objectClass.define("assign", objectFactory.createBuiltInFunction(function (target, ...sources) {
		let to = toObject(env, target, true);

		sources.forEach(next => {
			if (!contracts.isNullOrUndefined(next)) {
				let source = toObject(env, next);
				for (let key in source.properties) {
					if (source.properties[key].enumerable) {
						to.putValue(key, source.getValue(key), true, env);
					}
				}
			}
		});

		return to;
	}, 2, "Object.assign"));


	objectClass.define("getOwnPropertyNames", objectFactory.createBuiltInFunction(function (obj) {
		let o = toObject(env, obj, true);
		let keys = o.getOwnPropertyKeys().map(k => objectFactory.createPrimitive(k));
		return objectFactory.createArray(keys);
	}, 1, "Object.getOwnPropertyNames"));


	objectClass.define("getOwnPropertySymbols", objectFactory.createBuiltInFunction(function (obj) {
		let o = toObject(env, obj, true);
		let keys = o.getOwnPropertyKeys("Symbol");
		return objectFactory.createArray(keys);
	}, 1, "Object.getOwnPropertySymbols"));

	objectClass.define("keys", objectFactory.createBuiltInFunction(function (obj) {
		let o = toObject(env, obj, true);
		let keys = [];
		for (let key in o.properties) {
			if (o.properties[key].enumerable) {
				keys.push(objectFactory.createPrimitive(key));
			}
		}

		return objectFactory.createArray(keys);
	}, 1, "Object.keys"));

	objectClass.define("setPrototypeOf", objectFactory.createBuiltInFunction(function (target, proto) {
		contracts.assertIsNotNullOrUndefined(target, "setPrototypeOf");
		if (!contracts.isObject(proto) && !contracts.isNull(proto)) {
			throw new TypeError("Object prototype may only be an Object or null");
		}

		if (contracts.isObject(target) && !setPrototype(target, proto)) {
			throw new TypeError(`${target.className} is not extensible`);
		}

		return target;
	}, 2, "Object.setPrototypeOf"));

	let proto = objectClass.getValue("prototype");
	let stringTagKey = SymbolType.getByKey("toStringTag");

	function objectToString (obj) {
		let tag = obj.className;

		if (!contracts.isNullOrUndefined(obj)) {
			let tagProperty = obj.getProperty(stringTagKey);
			if (tagProperty) {
				let tagValue = tagProperty.getValue();
				if (tagValue && tagValue.type === "string") {
					tag = tagValue.toNative();
				}
			}
		}

		return objectFactory.createPrimitive(`[object ${tag}]`);
	};

	proto.define("toString", objectFactory.createBuiltInFunction(function () { return objectToString(this.node); }, 0, "Object.prototype.toString"));

	proto.define("toLocaleString", objectFactory.createBuiltInFunction(function () {
		contracts.assertIsNotNullOrUndefined(this.node, "Object.prototype.toLocaleString");
		return objectToString(this.node);
	}, 0, "Object.prototype.toLocaleString"));
}
