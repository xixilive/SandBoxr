import {UNDEFINED} from "../../types/primitive-type";
import {SymbolType} from "../../types/symbol-type";
import {exhaust as x} from "../../utils/async";
import {toLength} from "../../utils/native";

export default function (env, proto) {
	let objectFactory = env.objectFactory;

	let iteratorProto = objectFactory.createObject();
	iteratorProto.className = "Array Iterator";
	
	iteratorProto.define("next", objectFactory.createBuiltInFunction(function () {
		return this.node.advance().value;
	}, 0, "ArrayIterator.prototype.next"));

	function createIteratorValue (arr, index, kind) {
		let key;
		if (kind !== "value") {
			key = objectFactory.createPrimitive(index);
			if (kind === "key") {
				return key;
			}
		}

		let propInfo = arr.getProperty(index);
		let value = UNDEFINED;

		if (propInfo) {
			value = propInfo.getValue();
		}

		if (kind === "value") {
			return value;
		}

		return objectFactory.createArray([key, value]);
	}

	function* getIterator (arr, kind) {
		let done = false;
		let index = 0;

		while (!done) {
			let length = x(toLength(env, arr));
			let value = UNDEFINED;

			if (index >= length) {
				done = true;
			} else {
				value = createIteratorValue(arr, index, kind);
			}

			let result = objectFactory.createObject();
			result.define("done", objectFactory.createPrimitive(done));
			result.define("value", value);
			yield result;

			index++;
		}
	}

	proto.define("values", objectFactory.createBuiltInFunction(function () {
		let it = getIterator(this.node, "value");
		return objectFactory.createIterator(it, iteratorProto);
	}, 0, "Array.prototype.values"));

	proto.define("keys", objectFactory.createBuiltInFunction(function () {
		let it = getIterator(this.node, "key");
		return objectFactory.createIterator(it, iteratorProto);
	}, 0, "Array.prototype.keys"));

	proto.define("entries", objectFactory.createBuiltInFunction(function* () {
		let it = getIterator(this.node);
		return objectFactory.createIterator(it, iteratorProto);
	}, 0, "Array.prototype.entries"));

	let stringTagKey = SymbolType.getByKey("toStringTag");
	iteratorProto.define(stringTagKey, objectFactory.createPrimitive("Array Iterator"), { writable: false });

	let iteratorKey = SymbolType.getByKey("iterator");
	proto.define(iteratorKey, objectFactory.createBuiltInFunction(function () {
		let it = getIterator(this.node, "value");
		return objectFactory.createIterator(it, iteratorProto);
	}, 0, "Array.prototype.entries"));
}