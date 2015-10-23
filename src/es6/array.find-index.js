import * as contracts from "../utils/contracts";
import {toObject,toLength,toBoolean} from "../utils/native";
import {UNDEFINED} from "../types/primitive-type";
import {executeCallback} from "./array-helpers";

export default function ($target, env, factory) {
	$target.define("findIndex", factory.createBuiltInFunction(function* (predicate, thisArg) {
		let arr = toObject(this.node);
		let length = yield toLength(arr);

		contracts.assertIsFunction(predicate, "predicate");

		let i = 0;
		while (i < length) {
			let propInfo = arr.getProperty(i);
			let value = propInfo ? propInfo.getValue() : UNDEFINED;
			let passed = toBoolean(yield executeCallback(env, predicate, {key: i, value}, thisArg, arr));
			if (passed) {
				return factory.createPrimitive(i);
			}

			i++;
		}

		return factory.createPrimitive(-1);
	}, 1, "Array.prototype.findIndex"));
}