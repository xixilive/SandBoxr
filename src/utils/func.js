import {UNDEFINED} from "../types/primitive-type";

export function* execute (env, fn, args, thisArg, callee, isNew) {
	callee = callee || fn;
	let returnResult = yield fn[isNew ? "construct" : "call"](thisArg, args, callee);

	// // let f = fn.node || fn;
	// // let params = f.params || [];

	// let scope = env.createExecutionScope(fn, thisArg);
	// // let returnResult;

	// // if (isNew) {
	// // 	returnResult = thisArg;
	// // }

	// // yield scope.loadArgs(params, args, fn);
	// // scope.init(fn.node && fn.node.body);

	// let returnResult = yield scope.use(function* () {
	// 	return yield fn[isNew ? "construct" : "call"](env, thisArg, args, callee);

	// 	// if (fn.native) {
	// 	// 	return yield fn.nativeFunction.apply(env.createExecutionContext(thisArg, callee, isNew), args) || returnResult;
	// 	// }

	// 	// let executionResult = yield env.createExecutionContext(fn.node.body, callee, isNew).execute();
	// 	// let shouldReturn = fn.arrow || (executionResult && executionResult.exit);

	// 	// if (shouldReturn && executionResult.result) {
	// 	// 	if (!isNew || !executionResult.result.isPrimitive) {
	// 	// 		return executionResult.result;
	// 	// 	}
	// 	// }

	// 	// return returnResult;
	// });

	return returnResult || UNDEFINED;
}

export function* construct (env, fn, args = []) {
	let callee = fn.node || fn;
	return yield execute(env, fn, args, null, callee, true);
}

export function* call (env, fn, params, args, thisArg, callee) {
	return yield fn.call(thisArg, args, callee);
	// let scope = env.createExecutionScope(fn, thisArg);
	// yield scope.loadArgs(params, args, fn);
	// scope.init(fn.node && fn.node.body);

	// return yield scope.use(function* () {
	// 	return yield fn.call(env, thisArg, args, callee);
	// 	// if (fn.native) {
	// 	// 	return yield fn.nativeFunction.apply(env.createExecutionContext(thisArg, callee), args);
	// 	// }

	// 	// return yield env.createExecutionContext(fn.node.body, callee).execute();
	// });
}

export function* tryExecute (obj, name, args = []) {
	let fn = obj.getProperty(name);
	if (!fn) {
		return false;
	}

	fn = fn.getValue();

	if (fn && fn.className === "Function") {
		let executionResult = yield fn.call(obj, args, fn);
		// let scope = env.createExecutionScope(fn, obj);
		// yield scope.loadArgs(fn.node && fn.node.params, args, fn);
		// scope.init(fn.node && fn.node.body);

		// let executionResult = yield scope.use(function* () {
		// 	return yield fn.call(env, obj, args, fn);
		// 	// if (fn.native) {
		// 	// 	return yield fn.nativeFunction.apply(env.createExecutionContext(obj, obj), args);
		// 	// }

		// 	// let result = yield env.createExecutionContext(fn.node.body, fn.node).execute();
		// 	// return result && result.result;
		// });

		return executionResult ? executionResult.getValue() : UNDEFINED;
	}

	return false;
}
