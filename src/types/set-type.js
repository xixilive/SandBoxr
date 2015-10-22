import {ObjectType} from "./object-type";

export class SetType extends ObjectType {
	constructor () {
		super();
		this.setData = [];
	}

	init (env) {
		super.init(...arguments);
		let self = this;

		this.defineOwnProperty("size", {
			getter () {
				return env.objectFactory.createPrimitive(self.setData.length);
			},
			get () {}
		});
	}

	values () {
		return this.setData;
	}

	keys () {
		return this.setData;
	}
}