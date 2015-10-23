import {UNDEFINED} from "../types/primitive-type";
import {SymbolType} from "../types/symbol-type";
import {isUndefined,isConstructor,assertIsFunction} from "../utils/contracts";
import {toLength} from "../utils/native";
import iterate from "../iterators/";

export default function ($target, env, factory) {
	let iteratorKey = SymbolType.getByKey("iterator");

	function* createArray (ctor, source) {
		if (ctor === $target || !isConstructor(ctor)) {
			return factory.createArray();
		}

		let args = [];
		let hasIterator = source.has(iteratorKey);

		if (!hasIterator) {
			let length = yield toLength(source);
			args.push(length);
		}

		return yield ctor.construct(ctor, args);
	}

	$target.define("from", factory.createBuiltInFunction(function* (items, mapFn, thisArg) {
		thisArg = thisArg || UNDEFINED;

		let mapper;
		if (isUndefined(mapFn)) {
			mapper = function (v) { return v; };
		} else {
			assertIsFunction(mapFn, "mapFn");
			mapper = function* (v, i) {
				return yield mapFn.call(thisArg, [v, factory.createPrimitive(i)]);
			};
		}

		let arr = yield createArray(this.node, items);
		let it = iterate.getIterator(env, items);
		let index = 0;
		let done = false;

		while (!done) {
			try {
				let current;
				({done, value: current} = it.next());

				if (!done) {
					let value = yield mapper(current.value || UNDEFINED, index);
					arr.setValue(index++, value);
				}
			} catch (err) {
				if ("return" in it) {
					it.return();
				}

				throw err;
			}
		}

		arr.setValue("length", factory.createPrimitive(index), true, env);
		return arr;
	}, 1, "Array.from"));
}