import {UNDEFINED} from "../../types/primitive-type";
import {SymbolType} from "../../types/symbol-type";
import * as contracts from "../../utils/contracts";
import {toString} from "../../utils/native";

export default function (env, proto) {
	let objectFactory = env.objectFactory;

	let iteratorProto = objectFactory.createObject();
	iteratorProto.className = "String Iterator";

	iteratorProto.define("next", objectFactory.createBuiltInFunction(function () {
		let result = this.node.advance();
		if (result.value) {
			return result.value;
		}

		let obj = objectFactory.createObject();
		obj.define("done", objectFactory.createPrimitive(result.done));
		return obj;
	}, 0, "StringIterator.prototype.next"));

	function* getIterator (value) {
		let length = value.length;
		let done = false;
		let index = 0;

		while (!done) {
			let value = UNDEFINED;

			if (index < length) {
				done = true;
			}	else {
				value = objectFactory.createPrimitive(value[index]);
			}

			yield objectFactory.createIteratorResult({value,done});
			index++;
		}
	}

	let iteratorKey = SymbolType.getByKey("iterator");
	proto.define(iteratorKey, objectFactory.createBuiltInFunction(function* () {
		contracts.assertIsNotNullOrUndefined(this.node, "String.protoype[Symbol.iterator]");
		let stringValue = yield toString(this.node);
		let it = getIterator(stringValue);
		return objectFactory.createIterator(it, iteratorProto);
	}, 0, "[Symbol.iterator]"));
}