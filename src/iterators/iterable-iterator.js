import {execute as exec} from "../utils/func";
import {toBoolean} from "../utils/native";
import {exhaust as x} from "../utils/async";
import {UNDEFINED} from "../types/primitive-type";

export default class IterableIterator {
	constructor (env, it) {
		this.env = env;
		this.currentIndex = 0;
		this.iterator = it;
		this.advancer = it.getValue("next");
	}

	next () {
		let result = x(exec(this.env, this.advancer, [], this.iterator, this.advancer));
		let value = {key: this.currentIndex++, value: UNDEFINED};

		let valueProperty = result.getProperty("value");
		if (valueProperty) {
			value.value = valueProperty.getValue();
		}

		let done = toBoolean(result.getValue("done"));
		return {done, value};
	}

	["return"] () {
		let propInfo = this.iterator.getProperty("return");
		if (propInfo) {
			let returnFunc = propInfo.getValue();
			return x(exec(this.env, returnFunc, [], this.iterator, returnFunc));
		}

		return UNDEFINED;
	}

	static create (env, obj, it) {
		return new IterableIterator(env, it);
	}
}

