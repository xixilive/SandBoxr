import {UNDEFINED} from "../../types/primitive-type";
import {toObject,toPropertyKey} from "../../utils/native";
import * as contracts from "../../utils/contracts";
import {getOwnPropertyDescriptor} from "../../ecma-5.1/object/";
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

	// objectClass.define("getPrototypeOf", objectFactory.createBuiltInFunction(function (obj) {
	// 	let o = toObject(env, obj, true);
	// 	return o.getPrototype();
	// }, 1, "Object.getPrototypeOf"));

	// objectClass.define("getOwnPropertyDescriptor", objectFactory.createBuiltInFunction(function* (obj, key) {
	// 	let o = toObject(env, obj, true);
	// 	return yield getOwnPropertyDescriptor(env, o, key);
	// }, 2, "Object.getOwnPropertyDescriptor"));
}
