import {UNDEFINED} from "../types/primitive-type";
import {SymbolType} from "../types/symbol-type";
import {toObject} from "../utils/native";
import {assertIsMap} from "../utils/contracts";

export default function ($target, env, factory) {
	function createIteratorValue (entry, kind) {
		if (kind === "key") {
			return entry.key;
		}

		if (kind === "value") {
			return entry.value;
		}

		return factory.createArray([entry.key, entry.value]);
	}

	function* getIterator (obj, kind) {
		let done = false;
		let index = 0;

		while (!done) {
			let value;

			while (index < obj.data.length) {
				let current = obj.data[index++];
				if (current) {
					value = createIteratorValue(current, kind);
					break;
				}
			}

			done = !value;
			yield factory.createIteratorResult({ value, done });
		}
	}

	let proto = factory.createObject();
	proto.define(SymbolType.getByKey("toStringTag"), factory.createPrimitive("Map Iterator"), { writable: false });

	$target.define("keys", factory.createBuiltInFunction(function () {
		assertIsMap(this.node, "Map.prototype.keys");
		let it = getIterator(this.node, "key");
		return factory.createIterator(it, proto);
	}, 0, "Map.prototype.keys"));

	$target.define("values", factory.createBuiltInFunction(function () {
		assertIsMap(this.node, "Map.prototype.values");
		let it = getIterator(this.node, "value");
		return factory.createIterator(it, proto);
	}, 0, "Map.prototype.values"));

	let iteratorFunc = factory.createBuiltInFunction(function () {
		assertIsMap(this.node, "Map.prototype.entries");
		let it = getIterator(this.node);
		return factory.createIterator(it, proto);
	}, 0, "Map.prototype.entries");


	$target.define("entries", iteratorFunc);

	let iteratorKey = SymbolType.getByKey("iterator");
	$target.define(iteratorKey, iteratorFunc);
}
