import StringIterator from "./string-iterator";
import SparseIterator from "./sparse-iterator";
import ArrayIterator from "./array-iterator";
import IterableIterator from "./iterable-iterator";
import {SymbolType} from "../types/symbol-type";
import {toLength,toBoolean} from "../utils/native";
import {exhaust as x} from "../utils/async";
import {execute as exec} from "../utils/func";
import {UNDEFINED} from "../types/primitive-type";
import "../polyfills";

const SPARE_ARRAY_DENSITY = 0.8;

function arrayIsSparse (arr, length) {
	let ownPropertyCount = Object.keys(arr.properties).length;

	// this is just to roughly estimate how dense the array is
	let density = (ownPropertyCount - 1) / length;
	return density < SPARE_ARRAY_DENSITY;
}

function* executeIterator (env, it) {
	let done = false;
	let next = it.getValue("next");

	while (!done) {
		let result = yield* exec(env, next, [], it, next);
		let returnValue;

		if (result.hasProperty("value")) {
			let entry = result.getValue("value");
			let key = entry.getValue(0);
			let value = entry.getValue(1);

			returnValue = {key, value};
		}

		done = toBoolean(result.getValue("done"));
		yield {done, value: returnValue};
	}
}

const iterate = {
	*getIterator (env, obj) {
		let iteratorKey = SymbolType.getByKey("iterator");
		let iterator = obj.getProperty(iteratorKey);
		if (iterator) {
			let fn = iterator.getValue();
			let it = yield exec(env, fn, [], obj, fn);
			return executeIterator(env, it);
		}

		let length = yield toLength(env, obj);
		return this.forward(env, obj, 0, length);
	},

	forward (env, obj, lo, hi) {
		// string will never be dense
		if (obj.className === "String") {
			return StringIterator.create(env.objectFactory, obj, lo);
		}

		if (arrayIsSparse(obj, hi)) {
			return SparseIterator.create(obj, lo, hi - 1);
		}

		return ArrayIterator.create(obj, lo, hi);
	},

	reverse (env, obj, hi, lo = 0) {
		if (obj.className === "String") {
			return StringIterator.create(env.objectFactory, obj, hi, true);
		}

		if (arrayIsSparse(obj, hi)) {
			return SparseIterator.create(obj, lo, hi, true);
		}

		return ArrayIterator.create(obj, lo, hi, true);
	}
};

export default iterate;
