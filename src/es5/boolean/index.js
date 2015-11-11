import {toBoolean,primitiveToObject} from "../../utils/native";

import $toString from "./boolean.to-string";
import $valueOf from "./boolean.value-of";

export default function booleanApi (env) {
	const { global: globalObject, objectFactory } = env;

	let proto = objectFactory.createObject();
	proto.className = "Boolean";
	proto.value = false;

	let booleanClass = objectFactory.createFunction(function (obj) {
		let booleanValue = toBoolean(obj);

		// called as new
		if (this.isNew) {
			return primitiveToObject(env, booleanValue);
		}

		return objectFactory.create("Boolean", booleanValue);
	}, proto, { configurable: false, enumerable: false, writable: false });

	$toString(proto, env, objectFactory);
	$valueOf(proto, env, objectFactory);

	globalObject.define("Boolean", booleanClass);
}
