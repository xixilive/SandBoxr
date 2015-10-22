import {toString,toPrimitive,toNumber} from "../utils/native";
import * as contracts from "../utils/contracts";
import {Reference} from "../env/reference";
import {UNDEFINED} from "../types/primitive-type";

export default function (env) {
	let globalObject = env.global;
	let objectFactory = env.objectFactory;
	let options = env.options;

	globalObject.define("Infinity", objectFactory.createPrimitive(Infinity), { configurable: false, writable: false });
	globalObject.define("NaN", objectFactory.createPrimitive(NaN), { configurable: false, writable: false });

	["parseFloat", "decodeURI", "encodeURI", "decodeURIComponent", "encodeURIComponent", "escape", "unescape"].forEach(name => {
		globalObject.define(name, objectFactory.createBuiltInFunction(function* (value) {
			let stringValue = yield toString(value);
			return objectFactory.createPrimitive(global[name](stringValue));
		}, 1, name));
	});

	globalObject.define("parseInt", objectFactory.createBuiltInFunction(function* (value, radix) {
		let stringValue = yield toString(value);
		radix = yield toPrimitive(radix, "number");

		return objectFactory.createPrimitive(parseInt(stringValue, radix));
	}, 2, "parseInt"));

	globalObject.define("isNaN", objectFactory.createBuiltInFunction(function* (value) {
		let numberValue = yield toNumber(value);
		return objectFactory.createPrimitive(isNaN(numberValue));
	}, 1, "isNaN"));

	globalObject.define("isFinite", objectFactory.createBuiltInFunction(function* (value) {
		let numberValue = yield toNumber(value);
		return objectFactory.createPrimitive(isFinite(numberValue));
	}, 1, "isFinite"));

	if (options.parser) {
		let evalFunc = objectFactory.createBuiltInFunction(function* (code) {
			if (!code) {
				return UNDEFINED;
			}

			if (code.type !== "string") {
				return code;
			}

			let directCall = this.callee instanceof Reference && this.callee.base === globalObject;
			let ast;

			try {
				ast = options.parser(code.value);
			} catch (err) {
				if (err instanceof SyntaxError && /assigning to rvalue/i.test(err.message)) {
					// hack because acorn throws syntax error
					throw new ReferenceError("Invalid left-hand side in assignment");
				}

				throw err;
			}

			let strictScope = env.isStrict();
			let strictCode = strictScope || contracts.isStrictNode(ast.body);
			let currentGlobal = env.current.scope.parent === env.globalScope.scope;
			let scope;

			// use the same scope unless this is an "indirect" call
			// in which case we use the global scope
			if (directCall) {
				if (strictCode) {
					let thisArg;
					if (strictScope) {
						thisArg = currentGlobal ? globalObject : UNDEFINED;
					} else {
						thisArg = env.getThisBinding() || globalObject;
					}

					scope = env.createScope(thisArg);
				} else {
					scope = env.setScope(env.current.scope.parent);
				}
			} else {
				scope = env.setScope(env.globalScope.scope);
				if (strictCode) {
					scope = env.createScope(globalObject);
				}
			}

			let executionResult = yield scope.use(function* () {
				return yield env.createExecutionContext(ast).execute();
			});

			return executionResult && executionResult.result ? executionResult.result.getValue() : UNDEFINED;
		}, 1, "eval");

		globalObject.define("eval", evalFunc);
	}
}
