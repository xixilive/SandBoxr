import {UNDEFINED} from "../types/primitive-type";

export function* execute (env, fn, params, args, thisArg, callee, isNew) {
	let scope = fn.createScope(env, thisArg, false);
	let returnResult;

	if (isNew) {
		returnResult = thisArg;
	}

	scope.loadArgs(params, args, fn);
	scope.init(fn.node && fn.node.body);

	returnResult = yield scope.use(function* () {
		if (fn.native) {
			return yield fn.nativeFunction.apply(env.createExecutionContext(thisArg, callee, isNew), args) || returnResult;
		}

		let executionResult = yield env.createExecutionContext(fn.node.body, callee, isNew).execute();
		if (executionResult && executionResult.exit && executionResult.result) {
			if (!isNew || !executionResult.result.isPrimitive) {
				return executionResult.result;
			}
		}

		return returnResult;
	});

	return returnResult || UNDEFINED;
}

export function* call (env, fn, params, args, thisArg, callee) {
	let scope = fn.createScope(env, thisArg, false);
	scope.loadArgs(params, args, fn);
	scope.init(fn.node && fn.node.body);

	return yield scope.use(function* () {
		if (fn.native) {
			return yield fn.nativeFunction.apply(env.createExecutionContext(thisArg, callee), args);
		}

		return yield env.createExecutionContext(fn.node.body, callee).execute();
	});
}

export function* tryExecute (env, obj, name, args = []) {
	let fn = obj.getProperty(name);
	if (!fn) {
		return false;
	}

	fn = fn.getValue();

	if (fn && fn.className === "Function") {
		let scope = fn.createScope(env, obj);
		scope.loadArgs(fn.node && fn.node.params, args, fn);
		scope.init(fn.node && fn.node.body);

		let executionResult = yield scope.use(function* () {
			if (fn.native) {
				return yield fn.nativeFunction.apply(env.createExecutionContext(obj, obj), args);
			}

			let result = yield env.createExecutionContext(fn.node.body, fn.node).execute();
			return result && result.result;
		});

		return executionResult ? executionResult.getValue() : UNDEFINED;
	}

	return false;
}
