import {UNDEFINED} from "../../types/primitive-type";
import {executeCallback} from "../../ecma-5.1/array/";
import {toLength,toObject,toBoolean,toInteger} from "../../utils/native";
import iterate from "../../iterators/";
import {construct, execute as exec} from "../../utils/func";
import arrayIterator from "./iterator";
import * as contracts from "../../utils/contracts";
import {SymbolType} from "../../types/symbol-type";

export default function (env) {
	let objectFactory = env.objectFactory;
	let arrayClass = env.global.getValue("Array");
	let proto = arrayClass.getValue("prototype");
	let iteratorKey = SymbolType.getByKey("iterator");

	function normalizeIndex (index, length) {
		if (index < 0) {
			return Math.max(length + index, 0);
		}

		return Math.min(index, length);
	}

	function* createArray (ctor, source) {
		if (ctor === arrayClass || !contracts.isConstructor(ctor)) {
			return objectFactory.createArray();
		}

		let args = [];
		let hasIterator = source.has(iteratorKey);

		if (!hasIterator) {
			let length = yield toLength(env, source);
			args.push(length);
		}

		return yield construct(env, ctor, args);
	}

	arrayClass.define("from", objectFactory.createBuiltInFunction(function* (items, mapFn, thisArg) {
		thisArg = thisArg || UNDEFINED;

		let mapper;
		if (contracts.isUndefined(mapFn)) {
			mapper = function (v) { return v; };
		} else {
			contracts.assertIsFunction(mapFn, "mapFn");
			mapper = function* (v, i) {
				return yield exec(env, mapFn, [v, objectFactory.createPrimitive(i)], thisArg, mapFn);
			};
		}

		let target = yield createArray(this.node, items);
		let it = iterate.getIterator(env, items);
		let index = 0;
		let done = false;

		while (!done) {
			try {
				let current;
				({done, value: current} = it.next());

				if (!done) {
					let value = yield mapper(current.value || UNDEFINED, index);
					target.putValue(index++, value, true, env);
				}
			} catch (err) {
				if ("return" in it) {
					it.return();
				}

				throw err;
			}
		}

		target.putValue("length", objectFactory.createPrimitive(index), true, env);
		return target;
	}, 1, "Array.from"));

	arrayClass.define("of", objectFactory.createBuiltInFunction(function* (...items) {
		if (this.node === arrayClass || !contracts.isConstructor(this.node)) {
			return objectFactory.createArray(items);
		}

		let length = items.length;
		let lengthValue = objectFactory.createPrimitive(length);
		let arr = yield construct(env, this.node, [lengthValue]);
		let i = 0;

		while (i < length) {
			arr.defineOwnProperty(i, {value: items[i], configurable: true, enumerable: true, writable: true}, true, env);
			i++;
		}

		arr.putValue("length", lengthValue, true, env);
		return arr;
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
		let final = contracts.isUndefined(end) ? length : (yield toInteger(env, end));

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
		contracts.assertIsFunction(predicate, "predicate");

		// for some reason the spec for the find methods calls empty array slots
		// how that is useful, beats me
		let i = 0;
		while (i < length) {
			let propInfo = arr.getProperty(i);
			let value = propInfo ? propInfo.getValue() : UNDEFINED;
			let passed = toBoolean(yield executeCallback(env, predicate, {key: i, value}, thisArg, arr));
			if (passed) {
				return value;
			}

			i++;
		}

		return UNDEFINED;
	}, 1, "Array.prototype.find"));

	proto.define("findIndex", objectFactory.createBuiltInFunction(function* (predicate, thisArg) {
		let arr = toObject(env, this.node);
		let length = yield toLength(env, arr);
		contracts.assertIsFunction(predicate, "predicate");

		let i = 0;
		while (i < length) {
			let propInfo = arr.getProperty(i);
			let value = propInfo ? propInfo.getValue() : UNDEFINED;
			let passed = toBoolean(yield executeCallback(env, predicate, {key: i, value}, thisArg, arr));
			if (passed) {
				return objectFactory.createPrimitive(i);
			}

			i++;
		}

		return objectFactory.createPrimitive(-1);
	}, 1, "Array.prototype.findIndex"));

	arrayIterator(env, proto);
}
