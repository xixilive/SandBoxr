import * as contracts from "../../utils/contracts";
import {toString,toInteger,toNumber,toObject,toLength} from "../../utils/native";
import {map} from "../../utils/async";
import {UNDEFINED} from "../../types/primitive-type";
import stringIterator from "./iterator";

export default function (env) {
	let objectFactory = env.objectFactory;
	let stringClass = env.global.getValue("String");
	let proto = stringClass.getValue("prototype");

	stringClass.define("fromCodePoint", objectFactory.createBuiltInFunction(function* (...codePoints) {
		let args = yield map(codePoints, function* (cp) { return yield toNumber(env, cp); });
		return objectFactory.createPrimitive(String.fromCodePoint(...args));
	}, 1, "String.fromCodePoint"));

	stringClass.define("raw", objectFactory.createBuiltInFunction(function* (template, ...substitutions) {
		let numberOfSubstitutions = substitutions.length;
		let cooked = toObject(env, template, true);
		let raw = toObject(env, cooked.getValue("raw"), true);
		let literalSegments = yield toLength(env, raw);

		if (literalSegments <= 0) {
			return objectFactory.createPrimitive("");
		}

		let stringElements = [];
		let nextIndex = 0;

		while (nextIndex < literalSegments) {
			let nextSegment = yield toString(env, raw.getValue(nextIndex));
			stringElements.push(nextSegment);

			if (nextIndex + 1 === literalSegments) {
				break;
			}

			let next = "";
			if (nextIndex < numberOfSubstitutions) {
				next = yield toString(env, substitutions[nextIndex]);
			}

			stringElements.push(next);
			nextIndex++;
		}

		return objectFactory.createPrimitive(stringElements.join(""));
	}, 1, "String.raw"));

	proto.define("codePointAt", objectFactory.createBuiltInFunction(function* (pos) {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.codePointAt");
		let stringValue = yield toString(env, this.node);
		let position = yield toInteger(env, pos);

		if (position < 0 || position >= stringValue.length) {
			return UNDEFINED;
		}

		return objectFactory.createPrimitive(stringValue.codePointAt(position));
	}, 1, "String.prototype.codePointAt"));

	function stringIncludes (source, search, start, end) {
		if (!search) {
			return true;
		}

		if (start < 0 || end > source.length) {
			return false;
		}

		return source.substring(start, end) === search;
	}

	proto.define("endsWith", objectFactory.createBuiltInFunction(function* (searchString, endPosition) {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.endsWith");
		let stringValue = yield toString(env, this.node);
		if (contracts.isRegExp(searchString)) {
			throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
		}

		let searchValue = yield toString(env, searchString);
		let end = stringValue.length;
		if (!contracts.isUndefined(endPosition)) {
			end = yield toInteger(env, endPosition);
		}

		end = Math.min(Math.max(end, 0), stringValue.length);
		return objectFactory.createPrimitive(stringIncludes(stringValue, searchValue, end - searchValue.length, end));
	}, 1, "String.prototype.endsWith"));

	proto.define("startsWith", objectFactory.createBuiltInFunction(function* (searchString, startPosition) {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.startsWith");
		let stringValue = yield toString(env, this.node);
		if (contracts.isRegExp(searchString)) {
			throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
		}

		let searchValue = yield toString(env, searchString);
		let start = yield toInteger(env, startPosition);
		return objectFactory.createPrimitive(stringIncludes(stringValue, searchValue, start, start + searchValue.length));
	}, 1, "String.prototype.startsWith"));

	proto.define("includes", objectFactory.createBuiltInFunction(function* (searchString, position) {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.includes");
		let stringValue = yield toString(env, this.node);
		if (contracts.isRegExp(searchString)) {
			throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
		}

		let searchValue = yield toString(env, searchString);
		let length = stringValue.length;

		let start = yield toInteger(env, position);
		start = Math.min(Math.max(start, 0), length);

		let end = start + searchValue.length;
		let result = false;

		do {
			if (stringIncludes(stringValue, searchValue, start++, end++)) {
				result = true;
				break;
			}
		} while (end <= length)

		return objectFactory.createPrimitive(result);
	}, 1, "String.prototype.includes"));

	proto.define("repeat", objectFactory.createBuiltInFunction(function* (count) {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.repeat");
		let stringValue = yield toString(env, this.node);
		let countValue = yield toInteger(env, count);
		if (countValue < 0 || !isFinite(countValue)) {
			throw new RangeError("Invalid count value");
		}

		let returnValue = "";
		if (countValue > 0 && stringValue) {
			if (countValue === 1) {
				returnValue = stringValue;
			} else {
				while (countValue > 0) {
					returnValue += stringValue;
					countValue--;
				}
			}
		}

		return objectFactory.createPrimitive(returnValue);
	}, 1, "String.prototype.repeat"));

	proto.define("normalize", objectFactory.createBuiltInFunction(function* (form) {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.normalize");
		let stringValue = yield toString(env, this.node);

		let formValue = "NFC";
		if (!contracts.isUndefined(form)) {
			// valid forms
			formValue = yield toString(env, form);

			if (!(/^NFK?(?:C|D)$/).test(formValue)) {
				throw new RangeError();
			}
		}

		return objectFactory.createPrimitive(stringValue.normalize(formValue));
	}, 0, "String.prototype.normalize"));

	stringIterator(env, proto);
}
