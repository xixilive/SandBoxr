import {toString} from "../../utils/native";
import {SymbolType} from "../../types/symbol-type";
import {UNDEFINED} from "../../types/primitive-type";

export default function (env) {
	let frozen = { configurable: false, enumerable: false, writable: false };
	let objectFactory = env.objectFactory;

	let symbolClass = objectFactory.createFunction(function* (desc) {
		if (this.isNew) {
			throw new TypeError("Symbol is not a constructor");
		}

		let descString = yield toString(env, desc);
		return objectFactory.create("Symbol", descString);
	});

	symbolClass.define("for", objectFactory.createBuiltInFunction(function* (key) {
		let keyString = yield toString(env, key);
		
		let instance = SymbolType.getByKey(keyString);
		if (instance) {
			return instance;
		}

		return objectFactory.create("Symbol", keyString);
	}, 1, "Symbol.for"));

	symbolClass.define("keyFor", objectFactory.createBuiltInFunction(function (sym) {
		return SymbolType.getByInstance(sym) || UNDEFINED;
	}, 1, "Symbol.keyFor"));

	let proto = symbolClass.getValue("prototype");
	proto.define("toString", objectFactory.createBuiltInFunction(function () {
		let stringValue = `Symbol(${this.node.description})`;
		return objectFactory.createPrimitive(stringValue);
	}));

	function createKnownSymbol (key) {
		let sym = objectFactory.create("Symbol", "@@" + key);

		// add to global registry
		SymbolType.add(key, sym);

		symbolClass.define(key, sym, frozen);
		return sym;
	}

	createKnownSymbol("hasInstance");
	createKnownSymbol("isConcatSpreadable");
	createKnownSymbol("iterator");
	createKnownSymbol("replace");
	createKnownSymbol("species");

	let toStringTagSymbol = createKnownSymbol("toStringTag");
	proto.define(toStringTagSymbol, objectFactory.createPrimitive("Symbol"), { writable: false });

	env.global.define("Symbol", symbolClass);
}
