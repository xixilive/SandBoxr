import {NativeFunctionType} from "../../types/native-function-type";
import {UNDEFINED} from "../../types/primitive-type";
import * as contracts from "../../utils/contracts";
import {toString} from "../../utils/native";
import {map} from "../../utils/async";

import $apply from "./function.apply";
import $bind from "./function.bind";
import $call from "./function.call";
import $toString from "./function.to-string";

const frozen = { configurable: false, enumerable: false, writable: false };

export default function functionApi (env) {
	const options = env.options;
	const globalObject = env.global;
	const objectFactory = env.objectFactory;

	let funcClass;

	let funcCtor = function* (...args) {
		let funcInstance;

		if (options.parser && args.length > 0) {
			let body = args.pop();
			let params = "";

			if (args.length > 0) {
				params = (yield map(args, function* (arg, index) {
					if (contracts.isNull(arg)) {
						throw SyntaxError("Unexpected token null");
					}

					return contracts.isUndefined(arg) ? "" : (yield toString(arg));
				}))
				// the spec allows parameters to be comma-delimited, so we will join and split again comma
				.join(",");
			}

			let bodyString = yield toString(body);
			let ast = options.parser(`(function(${params}){${bodyString}}).apply($this,$args);`);
			let callee = ast.body[0].expression.callee.object;
			let userNode = callee.body.body;
			let strict = contracts.isStrictNode(userNode);

			let wrappedFunc = function* () {
				let thisArg;
				if (this.isNew) {
					thisArg = objectFactory.createObject(funcInstance);
				} else {
					thisArg = this.node;

					if (!strict && contracts.isUndefined(thisArg)) {
						thisArg = globalObject;
					}
				}

				env.createVariable("$this").setValue(thisArg);

				let $args = objectFactory.createArray(arguments);
				env.createVariable("$args").setValue($args);

				let executionResult = yield env.createExecutionContext(ast).execute();
				if (this.isNew) {
					return thisArg;
				}

				return executionResult && executionResult.result || UNDEFINED;
			};

			wrappedFunc.nativeLength = callee.params.length;
			wrappedFunc.strict = strict;
			funcInstance = objectFactory.createFunction(wrappedFunc, undefined, { strict });
			funcInstance.bindScope(env.globalScope);
		} else {
			funcInstance = objectFactory.createFunction(function () {});
		}

		funcInstance.setValue("constructor", funcClass);
		return funcInstance;
	};

	// the prototype of a function is actually callable and evaluates as a function
	let proto = new NativeFunctionType(function () {
		if (this.isNew) {
			throw TypeError("Function.protoype is not a constructor");
		}

		return UNDEFINED;
	});

	proto[Symbol.for("env")] = env;

	funcCtor.nativeLength = 1;
	funcClass = objectFactory.createFunction(funcCtor, proto, frozen);
	funcClass.setValue("constructor", funcClass);

	globalObject.define("Function", funcClass);

	proto.define("length", objectFactory.createPrimitive(0), { writable: false });
	proto.define("name", objectFactory.createPrimitive(""), { writable: false });

	// function itself is a function
	funcClass.setPrototype(proto);

	$apply(proto, env, objectFactory);
	$bind(proto, env, objectFactory);
	$call(proto, env, objectFactory);
	$toString(proto, env, objectFactory);

	let thrower = function () {
		if (this.isStrict()) {
			throw TypeError("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
		}

		return undefined;
	};

	let throwerFunc = objectFactory.createBuiltInFunction(thrower);

	let prop = {
		get: throwerFunc,
		getter: thrower,
		set: throwerFunc,
		setter: thrower,
		enumerable: false,
		configurable: true
	};

	proto.defineOwnProperty("caller", prop);
	proto.defineOwnProperty("callee", prop);
	proto.defineOwnProperty("arguments", prop);
}
