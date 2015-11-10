import {toObject,toLength} from "../../utils/native";
import {isSpreadable} from "./array-helpers";

export default function ($target, env, factory) {
	$target.define("concat", factory.createBuiltInFunction(function* (...arrays) {
		let newArray = factory.create("Array");

		// add "this" array to bunch
		arrays.unshift(toObject(env, this.node));

		let current, index = 0, i;
		while (arrays.length > 0) {
			current = arrays.shift();

			if (isSpreadable(current)) {
				let length = yield toLength(current);
				for (i = 0; i < length; i++) {
					if (current.has(i)) {
						newArray.setValue(index, current.getValue(i));
					}

					index++;
				}
			} else {
				newArray.setValue(index++, current);
			}
		}

		newArray.setValue("length", factory.createPrimitive(index));
		return newArray;
	}, 1, "Array.prototype.concat"));
}