import ecma5 from "../ecma-5.1/";
import numberAPI from "./number/";
import arrayAPI from "./array/";
import symbolAPI from "./symbol/";
import setAPI from "./set/";
import mapAPI from "./map/";
import reflectAPI from "./reflect/";
import {SymbolType} from "../types/symbol-type";

export default function (env) {
	ecma5(env);
	symbolAPI(env);

	let objectFactory = env.objectFactory;
	let globalObject = env.global;

	let boolProto = env.global.getValue("Boolean").getValue("prototype");
	boolProto.className = "Object";

	numberAPI(env);
	arrayAPI(env);
	setAPI(env);
	mapAPI(env);

	// setup class symbols
	let stringTagKey = SymbolType.getByKey("toStringTag");
	let speciesKey = SymbolType.getByKey("species");
	["Function", "Number", "Boolean", "Object", "Array", "String", "Date", "RegExp", "JSON"].forEach(typeName => {
		let ctor = globalObject.getValue(typeName);
		ctor.define(stringTagKey, objectFactory.createPrimitive(typeName), { writable: false });

		let speciesGetter = function () { return ctor; };
		let speciesGetterFunc = objectFactory.createGetter(speciesGetter, "[Symbol.species]");
		ctor.define(speciesKey, null, { getter: speciesGetter, get: speciesGetterFunc });
	});

	let funcProto = env.global.getValue("Function").getValue("prototype");

	let thrower = function () {
		throw new TypeError("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
	};

	let throwerFunc = objectFactory.createBuiltInFunction(thrower);
	let prop = {
		get: throwerFunc,
		getter: thrower,
		set: throwerFunc,
		setter: thrower,
		enumerable: false,
		configurable: false
	};

	funcProto.define("caller", null, prop);
	funcProto.define("arguments", null, prop);

	reflectAPI(env);
}
