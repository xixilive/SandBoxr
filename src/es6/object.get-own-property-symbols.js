import * as contracts from "../utils/contracts";

export default function (target, env, factory) {
	target.define("getOwnPropertySymbols", factory.createBuiltInFunction(function (obj) {
		contracts.assertIsNotNullOrUndefined(obj, "Object.getOwnPropertySymbols");
		let keys = [];

		obj.getOwnPropertyKeys("Symbol").forEach(key => {
			if (key && key.isSymbol) {
				keys.push(key);
			}
		});

		return factory.createArray(keys);
	}, 1, "Object.getOwnPropertySymbols"));
}
