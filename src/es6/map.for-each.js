import {UNDEFINED} from "../types/primitive-type";
import {assertIsMap,assertIsFunction} from "../utils/contracts";
import {each} from "../utils/async";

export default function ($target, env, factory) {
	$target.define("forEach", factory.createBuiltInFunction(function* (callback, thisArg) {
		assertIsMap(this.node, "Map.prototype.forEach");
		assertIsFunction(callback, "callback");

		let m = this.node;
		thisArg = thisArg || UNDEFINED;

		yield each(this.node.data, function* (e) {
			let args = [e.key, e.value, m];
			yield callback.call(thisArg, args);
		});
	}, 1, "Map.prototype.forEach"));
}