import {each} from "../utils/async";

function* executeStatements (context, statements) {
	let result;

	yield each(statements, function* (statement, i, all, abort) {
		result = yield context.create(statement).execute();
		if (result && result.isCancelled()) {
			abort();
		}
	});

	return result;
}

export default function* SwitchStatement (context) {
	let testValue = (yield context.create(context.node.discriminant).execute()).result.getValue();
	let passed = false;
	let value, defaultCase;

	for (let current of context.node.cases) {
		if (!passed) {
			if (current.test) {
				let caseValue = (yield context.create(current.test).execute()).result.getValue();
				if (!context.env.ops.areSame(caseValue, testValue)) {
					continue;
				}
			} else {
				// default might not be the last case
				defaultCase = current;
				continue;
			}
		}

		passed = true;
		value = yield executeStatements(context, current.consequent);
		if (value && value.isCancelled()) {
			value.cancel = false;
			return value;
		}
	}

	if (!passed && defaultCase && defaultCase.consequent) {
		value = yield executeStatements(context, defaultCase.consequent);
		value.cancel = false;
		return value;
	}

	return value;
}
