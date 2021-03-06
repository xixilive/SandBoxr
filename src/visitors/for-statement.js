import {toBoolean} from "../utils/native";

function* shouldContinue (context) {
	if (!context.node.test) {
		return true;
	}

	return toBoolean((yield context.create(context.node.test).execute()).result.getValue());
}

export default function* ForStatement (context) {
	if (context.node.init) {
		yield context.create(context.node.init).execute();
	}

	let result, priorResult;
	while (yield shouldContinue(context)) {
		result = yield context.create(context.node.body).execute();
		if (result && result.shouldBreak(context, true, priorResult)) {
			return result;
		}

		if (context.node.update) {
			yield context.create(context.node.update).execute();
		}

		priorResult = result;
	}

	return result;
}
