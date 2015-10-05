import {UNDEFINED} from "../../types/primitive-type";
import {executeCallback} from "../../ecma-5.1/array/";
import {toLength,toObject,toBoolean,toInteger} from "../../utils/native";
import iterate from "../../iterators/";
import * as contracts from "../../utils/contracts";
import {construct} from "../../utils/func";
import arrayIterator from "./iterator";

export default function (env) {
	let objectFactory = env.objectFactory;
	let arrayClass = env.global.getValue("Array");
	let proto = arrayClass.getValue("prototype");

	function normalizeIndex (index, length) {
		if (index < 0) {
			return Math.max(length + index, 0);
		}

		return Math.min(index, length);
	}

	arrayClass.define("from", objectFactory.createBuiltInFunction(function* (items, mapFn, thisArg) {
		let arr;

		if (this.node.type === "function" && this.node.className !== "Array") {
			arr = yield construct(env, this.node, []);
		} else {
			arr = objectFactory.createArray();
		}

		let index = 0;
		let it = yield iterate.getIterator(env, arr);

		for (let entry of it) {
			let value = entry.value;
			if (mapFn) {
				value = yield executeCallback(env, mapFn, entry, thisArg, items);
			}

			arr.putValue(index++, value, true, env);
		}

		return arr;
	}, 1, "Array.from"));

	arrayClass.define("of", objectFactory.createBuiltInFunction(function (...items) {
		return objectFactory.createArray(items);
	}, 0, "Array.of"));

	proto.define("copyWithin", objectFactory.createBuiltInFunction(function* (target, start, end) {
		let arr = toObject(env, this.node);
		let length = yield toLength(env, arr);
		let to = normalizeIndex(yield toInteger(env, target), length);
		let from = normalizeIndex(yield toInteger(env, start), length);
		let final = contracts.isUndefined(end) ? length : normalizeIndex(yield toInteger(env, end), length);

		let count = Math.min(final - from, length - to);
		let dir = 1;

		if (from < to && to < from + count) {
			dir = -1;
			from = from + count - 1;
			to = to + count - 1;
		}

		while (count > 0) {
			let current = arr.getProperty(from);
			if (current) {
				arr.putValue(to, current.getValue(), true, env);
			} else {
				arr.deleteProperty(to);
			}

			from += dir;
			to += dir;
			count--;
		}

		return arr;
	}, 2, "Array.prototype.copyWithin"));

	proto.define("fill", objectFactory.createBuiltInFunction(function* (value, start, end) {
		let arr = toObject(env, this.node);
		let length = yield toLength(env, arr);
		let k = start ? (yield toInteger(env, start)) : 0;
		let final = end ? (yield toInteger(env, end)) : length;

		k = normalizeIndex(k, length);
		final = normalizeIndex(final, length);

		while (k < final) {
			arr.putValue(k++, value, true, env);
		}

		return arr;
	}, 1, "Array.prototype.fill"));

	proto.define("find", objectFactory.createBuiltInFunction(function* (predicate, thisArg) {
		let arr = toObject(env, this.node);
		let length = yield toLength(env, arr);

		for (let entry of iterate.forward(env, arr, 0, length)) {
			let passed = toBoolean(yield executeCallback(env, predicate, entry, thisArg, arr));
			if (passed) {
				return entry.value;
			}
		}

		return UNDEFINED;
	}, 1, "Array.prototype.find"));

	proto.define("findIndex", objectFactory.createBuiltInFunction(function* (predicate, thisArg) {
		let arr = toObject(env, this.node);
		let length = yield toLength(env, arr);

		for (let entry of iterate.forward(env, arr, 0, length)) {
			let passed = toBoolean(yield executeCallback(env, predicate, entry, thisArg, arr));
			if (passed) {
				return objectFactory.createPrimitive(entry.key);
			}
		}

		return objectFactory.createPrimitive(-1);
	}, 1, "Array.prototype.findIndex"));

	arrayIterator(env, proto);
}
