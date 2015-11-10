import {toLength,toArray,toString} from "../../utils/native";
import {isNullOrUndefined} from "../../utils/contracts";
import {exhaust as x} from "../../utils/async";
import {UNDEFINED} from "../../types/primitive-type";

export default function ($target, env, factory) {
	$target.define("sort", factory.createBuiltInFunction(function* (compareFunction) {
		let arr = this.node;
		let length = yield toLength(arr);
		let i = 0;

		let comparer;
		if (isNullOrUndefined(compareFunction)) {
			comparer = function defaultComparer (a, b) {
				a = x(toString(a));
				b = x(toString(b));

				if (a < b) {
					return -1;
				}

				if (a > b) {
					return 1;
				}

				return 0;
			};
		} else {
			comparer = function (a, b) {
				let result = x(compareFunction.call(UNDEFINED, [a, b]));
				if (result) {
					return result.toNative();
				}

				return undefined;
			};
		}

		// to array, run the wrapped comparer, then re-assign indexes
		let sortedArray = (yield toArray(arr, length))
			// undefined positions are handled by the underlying sort algorithm, so replace them with the raw primitive value
			.map(el => { return el.isPrimitive && el.value === undefined ? undefined : el; })
			.sort(comparer);

		while (i < length) {
			if (i in sortedArray) {
				arr.setValue(i, sortedArray[i]);
			} else {
				arr.deleteProperty(i, false);
			}

			i++;
		}

		return arr;
	}, 1, "Array.prototype.sort"));
}