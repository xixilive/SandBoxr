import {execute as exec} from "../utils/func";
import {toBoolean} from "../utils/native";
import * as contracts from "../utils/contracts";

function* iterate (env, obj, iterator) {
	let next = iterator.getValue("next");
	contracts.assertIsFunction(next, "next");

	let callee = next.node || next;
	let index = 0;

	while (true) {
		let result = yield exec(env, next, [], obj, callee);
		let done = toBoolean(result.getValue("done"));
		if (done) {
			break;
		}

		yield { value: result.getValue("value"), key: index++ };
	}
}

export default {
	create (env, obj, iterator) {
		return iterate(env, obj, iterator);
	}
};
