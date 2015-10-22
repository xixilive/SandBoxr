import {UNDEFINED,NULL} from "../../types/primitive-type";
import {toString,toInteger,toUInt32,toPrimitive,primitiveToObject} from "../../utils/native";
import * as contracts from "../../utils/contracts";
import {execute as exec} from "../../utils/func";
import {exhaust as x, map} from "../../utils/async";
import {SymbolType} from "../../types/symbol-type";

const protoMethods = ["charAt", "charCodeAt", "indexOf", "lastIndexOf", "localeCompare", "substr", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase"];
const slice = Array.prototype.slice;

export default function stringApi (env) {
	const globalObject = env.global;
	const objectFactory = env.objectFactory;

	function* getString (value, isNew) {
		if (!value) {
			return "";
		}

		if (!isNew && value.isSymbol) {
			return `Symbol(${value.description})`;
		}

		return yield toString(value.getValue());
	}

	function getMethod (obj, key) {
		let propInfo = obj.getProperty(key);
		if (!propInfo) {
			return null;
		}

		let method = propInfo.getValue();
		if (method.type !== "function") {
			throw new TypeError(`${key} is not a method`);
		}

		return method;
	}

	let proto = objectFactory.createObject();

	// prototype can be coerced into an empty string
	proto.value = "";
	proto.className = "String";
	proto.defineOwnProperty("length", { value: objectFactory.createPrimitive(0) });

	let stringClass = objectFactory.createFunction(function* (value) {
		let stringValue = yield getString(value, this.isNew);

		// called as new
		if (this.isNew) {
			return primitiveToObject(env, stringValue);
		}

		return objectFactory.createPrimitive(stringValue);
	}, proto, { configurable: false, enumerable: false, writable: false });

	proto.define("search", objectFactory.createBuiltInFunction(function* (regex) {
		let stringValue = yield toString(this.node);
		let underlyingRegex;

		if (regex) {
			if (regex.className === "RegExp") {
				underlyingRegex = regex.source;
			} else {
				underlyingRegex = new RegExp(yield toString(regex));
			}
		}

		return objectFactory.createPrimitive(stringValue.search(underlyingRegex));
	}, 1, "String.prototype.search"));

	proto.define("substring", objectFactory.createBuiltInFunction(function* (start, end) {
		contracts.assertIsNotConstructor(this, "substring");

		let value = yield toPrimitive(this.node, "string");
		let length = value.length;

		start = yield toInteger(start);
		end = contracts.isNullOrUndefined(end) ? length : (yield toInteger(end));

		return objectFactory.createPrimitive(value.substring(start, end));
	}, 2, "String.prototype.substring"));

	protoMethods.forEach(name => {
		let fn = String.prototype[name];
		if (fn) {
			proto.define(name, objectFactory.createBuiltInFunction(function* () {
				let stringValue = yield toString(this.node);
				let args = yield* map(arguments, function* (arg) { return yield toPrimitive(arg); });

				return objectFactory.createPrimitive(String.prototype[name].apply(stringValue, args));
			}, String.prototype[name].length, "String.prototype." + name));
		}
	});

	stringClass.define("fromCharCode", objectFactory.createBuiltInFunction(function* (...charCodes) {
		let args = yield* map(charCodes, function* (arg) { return yield toPrimitive(arg); });
		return objectFactory.createPrimitive(String.fromCharCode.apply(null, args));
	}, 1, "String.fromCharCode"));

	proto.define("slice", objectFactory.createBuiltInFunction(function* (start, end) {
		let stringValue = yield toString(this.node);
		let startValue = yield toInteger(start);
		let endValue;

		if (!contracts.isNullOrUndefined(end)) {
			endValue = yield toInteger(end);
		}

		return objectFactory.createPrimitive(stringValue.slice(startValue, endValue));
	}, 2, "String.prototype.slice"));

	proto.define("split", objectFactory.createBuiltInFunction(function* (separator, limit) {
		let stringValue = yield toString(this.node);
		separator = separator && separator.getValue();
		limit = limit && limit.getValue();
		let limitValue = contracts.isUndefined(limit) ? undefined : (yield toUInt32(env, limit));

		let arr = objectFactory.create("Array");
		if (contracts.isUndefined(separator)) {
			arr.setValue(0, objectFactory.createPrimitive(stringValue));
		} else {
			let separatorValue;
			if (separator.className === "RegExp") {
				separatorValue = separator.source;
			} else {
				separatorValue = yield toString(separator);
			}

			let result = stringValue.split(separatorValue, limitValue);
			result.forEach(function (value, index) {
				arr.setValue(index, objectFactory.createPrimitive(value));
			});
		}

		return arr;
	}, 2, "String.prototype.split"));

	proto.define("replace", objectFactory.createBuiltInFunction(function* (regexOrSubstr, substrOrFn) {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.replace");

		let replaceKey = SymbolType.getByKey("replace");
		if (replaceKey && !contracts.isNullOrUndefined(regexOrSubstr)) {
			let replaceMethod = getMethod(regexOrSubstr, replaceKey);
			if (replaceMethod) {
				return yield replaceMethod.call(regexOrSubstr, [this.node, substrOrFn]);
			}
		}

		let stringValue = yield toString(this.node);

		let matcher;
		if (regexOrSubstr && regexOrSubstr.className === "RegExp") {
			matcher = regexOrSubstr.source;
		} else {
			matcher = yield toString(regexOrSubstr);
		}

		let replacer;
		if (substrOrFn && substrOrFn.type === "function") {
			let callee = substrOrFn.native ? substrOrFn : substrOrFn.node;

			replacer = function () {
				let thisArg = substrOrFn.isStrict() || substrOrFn.isStrict() ? UNDEFINED : globalObject;
				let args = slice.call(arguments).map(arg => objectFactory.createPrimitive(arg));
				let replacedValue = x(exec(env, substrOrFn, args, thisArg, callee));
				return replacedValue ? x(toString(replacedValue)) : undefined;
			};
		} else {
			replacer = yield toString(substrOrFn);
		}

		return objectFactory.createPrimitive(stringValue.replace(matcher, replacer));
	}, 2, "String.prototype.replace"));

	proto.define("match", objectFactory.createBuiltInFunction(function* (regex) {
		let stringValue = yield toString(this.node);
		let actualRegex;

		if (regex && regex.className === "RegExp") {
			actualRegex = regex.source;
		} else if (regex) {
			actualRegex = new RegExp(yield toPrimitive(regex));
		}

		let match = stringValue.match(actualRegex);
		if (match) {
			let matches = objectFactory.create("Array");

			match.forEach(function (value, index) {
				matches.setValue(index, objectFactory.createPrimitive(value), false, env);
			});

			matches.setValue("index", objectFactory.createPrimitive(match.index), false, env);
			matches.setValue("input", objectFactory.createPrimitive(match.input), false, env);
			return matches;
		}

		return NULL;
	}, 1, "String.prototype.match"));

	proto.define("concat", objectFactory.createBuiltInFunction(function* (...args) {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.concat");

		let stringValue = yield toString(this.node);
		let values = [stringValue];
		values = values.concat(yield map(args, function* (arg) { return yield toString(arg); }));
		return objectFactory.createPrimitive(values.join(""));
	}, 1, "String.prototype.concat"));

	proto.define("trim", objectFactory.createBuiltInFunction(function* () {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.trim");

		let stringValue = yield toPrimitive(this.node, "string");
		return objectFactory.createPrimitive(stringValue.trim());
	}, 0, "String.prototype.trim"));

	proto.define("toString", objectFactory.createBuiltInFunction(function () {
		contracts.assertIsNotGeneric(this.node, "String", "String.prototype.toString");
		return objectFactory.createPrimitive(this.node.value);
	}, 0, "String.prototype.toString"));

	proto.define("valueOf", objectFactory.createBuiltInFunction(function () {
		contracts.assertIsNotGeneric(this.node, "String", "String.prototype.valueOf");
		return objectFactory.createPrimitive(this.node.value);
	}, 0, "String.prototype.valueOf"));

	globalObject.define("String", stringClass);
}
