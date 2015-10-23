import * as contracts from "../utils/contracts";

export default function (objectClass, env, factory) {
	objectClass.define("setPrototypeOf", factory.createBuiltInFunction(function (target, proto) {
		contracts.assertIsNotNullOrUndefined(target, "setPrototypeOf");
		if (!contracts.isObject(proto) && !contracts.isNull(proto)) {
			throw new TypeError("Object prototype may only be an Object or null");
		}

		if (contracts.isObject(target) && !setPrototype(target, proto)) {
			throw new TypeError(`${target.className} is not extensible`);
		}

		return target;
	}, 2, "Object.setPrototypeOf"));
}
