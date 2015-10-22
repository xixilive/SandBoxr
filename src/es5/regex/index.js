import {NULL} from "../../types/primitive-type";
import {toString,toInt32,toNativeFunction} from "../../utils/native";
import * as contracts from "../../utils/contracts";

export default function regexApi (env) {
	const globalObject = env.global;
	const objectFactory = env.objectFactory;

	let proto = objectFactory.createObject();
	proto.className = "RegExp";

	let regexClass = objectFactory.createFunction(function* (pattern, flags) {
		if (pattern && pattern.className === "RegExp") {
			if (contracts.isUndefined(flags)) {
				return pattern;
			}

			throw new TypeError("Cannot supply flags when constructing one RegExp from another");
		}

		let patternString = contracts.isUndefined(pattern) ? "" : (yield toString(pattern));
		flags = contracts.isUndefined(flags) ? "" : (yield toString(flags));

		return objectFactory.create("RegExp", new RegExp(patternString, flags));
	}, proto, { configurable: false, enumerable: false, writable: false });

	proto.define("test", objectFactory.createBuiltInFunction(function* (str) {
		let stringValue = yield toString(str);

		this.node.source.lastIndex = yield toInt32(this.node.getValue("lastIndex"));
		let testValue = this.node.source.test(stringValue);
		this.node.setValue("lastIndex", objectFactory.createPrimitive(this.node.source.lastIndex), true, env);

		return objectFactory.createPrimitive(testValue);
	}, 1, "RegExp.prototype.test"));

	proto.define("exec", objectFactory.createBuiltInFunction(function* (str) {
		let stringValue = yield toString(str);

		// update underlying regex in case the index was manually updated
		this.node.source.lastIndex = yield toInt32(this.node.getValue("lastIndex"));

		// get match from underlying regex
		let match = this.node.source.exec(stringValue);

		// update the last index from the underlying regex
		this.node.setValue("lastIndex", objectFactory.createPrimitive(this.node.source.lastIndex), true, env);

		if (match) {
			let arr = objectFactory.create("Array");
			for (let i = 0, ln = match.length; i < ln; i++) {
				arr.setValue(i, objectFactory.createPrimitive(match[i]), true, env);
			}

			// extra properties are added to the array
			arr.setValue("index", objectFactory.createPrimitive(match.index), false, env);
			arr.setValue("input", objectFactory.createPrimitive(match.input), false, env);
			return arr;
		}

		return NULL;
	}, 1, "RegExp.prototype.exec"));

	proto.define("toString", objectFactory.createBuiltInFunction(function () {
		return objectFactory.createPrimitive(String(this.node.source));
	}, 0, "RegExp.prototype.toString"));

	proto.define("compile", toNativeFunction(env, RegExp.prototype.compile, "RegExp.prototype.compile"));
	proto.defineOwnProperty("lastIndex", { value: objectFactory.createPrimitive(0), writable: true });

	// ["global", "ignoreCase", "multiline", "source"].forEach(name => {
	// 	proto.defineOwnProperty(name, { value: objectFactory.createPrimitive(RegExp.prototype[name]) });
	// });

	["source", "global", "ignoreCase", "multiline"].forEach(key => {
		let source = RegExp.prototype;
		let getter = function () { return objectFactory.createPrimitive(source[key]); };
		let getterFunc = objectFactory.createGetter(getter, key);

		proto.defineOwnProperty(key, {
			getter: getter,
			get: getterFunc,
			configurable: true
		});
	});

	globalObject.define("RegExp", regexClass);
}
