import * as contracts from "../utils/contracts";

export default function ThisExpression (context) {
	let thisArg = context.env.getThisBinding();
	if (contracts.isNullOrUndefined(thisArg) && !context.env.isStrict()) {
		thisArg = context.env.global;
	}

	return context.result(thisArg);
}
