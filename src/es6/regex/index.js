import {SymbolType} from "../../types/symbol-type";
import {exhaust as x} from "../../utils/async";
import {UNDEFINED} from "../../types/primitive-type";
import {toString} from "../../utils/native";
import * as contracts from "../../utils/contracts";

export default function (env) {
	let objectFactory = env.objectFactory;
	let regexClass = env.global.getValue("RegExp");
	let proto = regexClass.getValue("prototype");

	let replaceKey = SymbolType.getByKey("replace");
	proto.define(replaceKey, objectFactory.createBuiltInFunction(function* (value, replaceValue) {
		let stringValue = yield toString(value);
		let replacer;

		if (contracts.isFunction(replaceValue)) {
			replacer = function (...args) {
				let thisArg = replaceValue.strict || env.isStrict() ? UNDEFINED : env.global;
				let mappedArgs = args.map(arg => objectFactory.createPrimitive(arg));
				let result = x(replaceValue.call(thisArg, mappedArgs));
				return result ? x(toString(result)) : undefined;
			};
		} else {
			replacer = yield toString(replaceValue);
		}

		return objectFactory.createPrimitive(stringValue.replace(this.node.source, replacer));
	}, 2, "RegExp.prototype[Symbol.replace]"));
}