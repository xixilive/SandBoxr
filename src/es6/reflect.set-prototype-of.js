import {assertIsObject} from "../utils/contracts";
import {NULL} from "../types/primitive-type";

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

	return target.setPrototype(proto);
}

export default function ($target, env, factory) {
	$target.define("setPrototypeOf", factory.createBuiltInFunction(function (target, proto) {
		assertIsObject(target, "Reflect.setPrototypeOf");

		if (proto !== NULL && proto.type !== "object") {
			throw TypeError("The prototype must be an object or null");
		}

		return factory.createPrimitive(setPrototype(target, proto));
	}, 2, "Reflect.setPrototypeOf"));
}