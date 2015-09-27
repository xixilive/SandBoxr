import {ObjectType} from "./object-type";

export class IteratorType extends ObjectType {
	constructor (source) {
		super();

		this.source = source;
		this.position = 0;
		this.className = "Iterator";
	}

	next () {
		if (this.position >= this.source.length) {
			return { done: true };
		}

		return {
			value: this.source[this.position++],
			done: false
		};
	}
}
