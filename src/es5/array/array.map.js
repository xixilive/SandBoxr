import {toLength,toObject} from "../../utils/native";
import {assertIsFunction,assertIsNotNullOrUndefined} from "../../utils/contracts";
import iterate from "../../iterators/";
import {executeCallback} from "./array-helpers";

export default function ($target, env, factory) {
	$target.define("map", factory.createBuiltInFunction(function* (callback, thisArg) {
		let arr = toObject(env, this.node);
		let length = yield toLength(arr);

		assertIsNotNullOrUndefined(arr, "Array.prototype.map");
		assertIsFunction(callback, arr);

		let newArray = factory.create("Array");
		newArray.setValue("length", factory.createPrimitive(length));

		for (let entry of iterate.forward(arr, 0, length)) {
			let value = yield executeCallback(env, callback, entry, thisArg, arr);
			newArray.setIndex(entry.key, value);
		}

		return newArray;
	}, 1, "Array.prototype.map"));
}