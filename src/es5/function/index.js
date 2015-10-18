import {NativeFunctionType} from "../../types/native-function-type";
import {UNDEFINED} from "../../types/primitive-type";
import * as contracts from "../../utils/contracts";
import {execute as exec} from "../../utils/func";
import {toString,toObject,toArray} from "../../utils/native";
import {map} from "../../utils/async";

function defineThis (env, fn, thisArg) {
	if (fn.builtIn || fn.isStrict()) {
		return thisArg || UNDEFINED;
	}

	if (contracts.isNullOrUndefined(thisArg)) {
		return env.global;
	}

	return toObject(env, thisArg);
}

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
						throw new SyntaxError("Unexpected token null");
					}

					return contracts.isUndefined(arg) ? "" : (yield toString(env, arg));
				}))
				// the spec allows parameters to be comma-delimited, so we will join and split again comma
				.join(",");
			}

			let bodyString = yield toString(env, body);
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

					if (!thisArg) {
						thisArg = strict ? UNDEFINED : globalObject;
					}
				}

				this.env.createVariable("$this").setValue(thisArg);

				let $args = this.env.objectFactory.createArray(arguments);
				this.env.createVariable("$args").setValue($args);

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

		funcInstance.putValue("constructor", funcClass);
		return funcInstance;
	};

	// the prototype of a function is actually callable and evaluates as a function
	let proto = new NativeFunctionType(function () {
		if (this.isNew) {
			return this.raise(new TypeError("Function.protoype is not a constructor"));
		}

		return UNDEFINED;
	});

	funcCtor.nativeLength = 1;
	funcClass = objectFactory.createFunction(funcCtor, proto, frozen);
	funcClass.putValue("constructor", funcClass);

	globalObject.define("Function", funcClass);

	proto.define("length", objectFactory.createPrimitive(0), { writable: false });

	if (env.options.ecmaVersion > 5) {
		proto.define("name", objectFactory.createPrimitive(""), { writable: false });
	}

	// function itself is a function
	funcClass.setPrototype(proto);

	proto.define("toString", objectFactory.createBuiltInFunction(function () {
		if (this.node.native) {
			return objectFactory.createPrimitive("function () { [native code] }");
		}

		return objectFactory.createPrimitive("function () { [user code] }");
	}, 0, "Function.prototype.toString"));

	proto.define("call", objectFactory.createBuiltInFunction(function* (thisArg, ...args) {
		let callee = this.node.native ? this.node : this.node.node;
		thisArg = defineThis(env, this.node, thisArg);
		this.node.bindThis(thisArg);

		return yield* exec(env, this.node, args, thisArg, callee);
	}, 1, "Function.prototype.call"));

	proto.define("apply", objectFactory.createBuiltInFunction(function* (thisArg, argsArray) {
		if (argsArray) {
			if (argsArray.className !== "Arguments" && argsArray.className !== "Array" && argsArray.className !== "Function") {
				return this.raise(new TypeError("Arguments list was wrong type"));
			}
		}

		let args = yield toArray(env, argsArray);
		let callee = this.node.native ? this.node : this.node.node;
		thisArg = defineThis(env, this.node, thisArg);
		this.node.bindThis(thisArg);

		return yield* exec(env, this.node, args, thisArg, callee);
	}, 2, "Function.prototype.apply"));

	proto.define("bind", objectFactory.createBuiltInFunction(function* (thisArg, ...args) {
		let fn = this.node;
		let callee = fn.native ? fn : fn.node;
		let params = callee.params || [];
		thisArg = defineThis(env, this.node, thisArg);

		let nativeFunc = function* (...additionalArgs) {
			let mergedArgs = args.concat(additionalArgs);
			return yield* exec(env, fn, mergedArgs, thisArg, callee, this.isNew);
		};

		nativeFunc.nativeLength = Math.max(params.length - args.length, 0);
		nativeFunc.strict = env.isStrict() || !fn.native && contracts.isStrictNode(fn.node.body.body);

		let boundFunc = objectFactory.createFunction(nativeFunc, null);
		boundFunc.bindScope(this.env.current);
		boundFunc.bindThis(thisArg);

		if (!nativeFunc.strict) {
			boundFunc.remove("caller");
			boundFunc.remove("arguments");

			// these will be added in strict mode, but should always be here for bound functions
			let thrower = objectFactory.createThrower("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
			boundFunc.defineOwnProperty("caller", thrower);
			boundFunc.defineOwnProperty("arguments", thrower);
		}

		return boundFunc;
	}, 1, "Function.prototype.bind"));

	let thrower = function () {
		if (this.isStrict()) {
			throw new TypeError("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
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
		configurable: false
	};

	proto.defineOwnProperty("caller", prop, false, env);
	proto.defineOwnProperty("callee", prop, false, env);
	proto.defineOwnProperty("arguments", prop, false, env);
}
