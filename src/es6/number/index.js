import {toInteger,toPrimitive} from "../../utils/native";

export default function (env) {
	const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;

	let objectFactory = env.objectFactory;

	function isNumber (value) {
		return value && value.type === "number";
	}

	let numberClass = env.global.getValue("Number");

	numberClass.define("isNaN", objectFactory.createBuiltInFunction(function (value) {
		if (!isNumber(value)) {
			return objectFactory.createPrimitive(false);
		}

		return objectFactory.createPrimitive(isNaN(value.toNative()));
	}, 1, "Number.isNaN"));

	numberClass.define("isFinite", objectFactory.createBuiltInFunction(function (value) {
		if (!isNumber(value)) {
			return objectFactory.createPrimitive(false);
		}

		let numberValue = value.toNative();
		if (isNaN(numberValue) || !isFinite(numberValue)) {
			return objectFactory.createPrimitive(false);
		}

		return objectFactory.createPrimitive(true);
	}, 1, "Number.isFinite"));

	numberClass.define("isInteger", objectFactory.createBuiltInFunction(function* (value) {
		if (!isNumber(value)) {
			return objectFactory.createPrimitive(false);
		}

		let numberValue = value.toNative();
		if (isNaN(numberValue) || !isFinite(numberValue)) {
			return objectFactory.createPrimitive(false);
		}

		let intValue = yield toInteger(env, value);
		return objectFactory.createPrimitive(numberValue === intValue);
	}, 1, "Number.isInteger"));

	numberClass.define("isSafeInteger", objectFactory.createBuiltInFunction(function* (value) {
		if (!isNumber(value)) {
			return objectFactory.createPrimitive(false);
		}

		let numberValue = value.toNative();
		if (isNaN(numberValue) || !isFinite(numberValue)) {
			return objectFactory.createPrimitive(false);
		}

		let intValue = yield toInteger(env, value);
		if (intValue !== numberValue) {
			return objectFactory.createPrimitive(false);
		}

		return objectFactory.createPrimitive(Math.abs(numberValue) <= MAX_SAFE_INTEGER);
	}, 1, "Number.isSafeInteger"));

	numberClass.define("parseFloat", objectFactory.createBuiltInFunction(function* (value) {
		let stringValue = yield toString(env, value);
		return objectFactory.createPrimitive(parseFloat(stringValue));
	}, 1, "Number.parseFloat"));

	numberClass.define("parseInt", objectFactory.createBuiltInFunction(function* (value, radix) {
		let stringValue = yield toString(env, value);
		radix = yield toPrimitive(env, radix, "number");
		return objectFactory.createPrimitive(parseInt(stringValue, radix));
	}, 2, "Number.parseInt"));

	// constants
	let frozen = {configurable: false, enumerable: false, writable: false};
	numberClass.define("EPSILON", objectFactory.createPrimitive(Number.EPSILON || 2.220446049250313e-16), frozen);
	numberClass.define("MAX_SAFE_INTEGER", objectFactory.createPrimitive(MAX_SAFE_INTEGER), frozen);
	numberClass.define("MIN_SAFE_INTEGER", objectFactory.createPrimitive(MIN_SAFE_INTEGER), frozen);

	// prototypes in ES6 cannot be coerced into primitives
	let proto = numberClass.getValue("prototype");
	proto.className = "Object";
}