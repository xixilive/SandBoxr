import {toInteger} from "../../utils/native";

export default function (env) {
	let objectFactory = env.objectFactory;

	let numberClass = env.global.getValue("Number");
	numberClass.define("isNaN", objectFactory.createBuiltInFunction(function (value) {
		if (!value || value.className !== "Number") {
			return objectFactory.createPrimitive(false);
		}

		return objectFactory.createPrimitive(isNaN(value.toNative()));
	}, 1, "Number.isNaN"));

	numberClass.define("isInteger", objectFactory.createBuiltInFunction(function* (value) {
		if (!value || value.className !== "Number") {
			return objectFactory.createPrimitive(false);
		}

		let nativeValue = value.toNative();
		if (isNaN(nativeValue) || !isFinite(nativeValue)) {
			return objectFactory.createPrimitive(false);
		}

		let intValue = yield toInteger(env, value);
		return objectFactory.createPrimitive(nativeValue === intValue);
	}, 1, "Number.isInteger"));
}