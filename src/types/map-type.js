import {ObjectType} from "./object-type";

export class MapType extends ObjectType {
	constructor () {
		super();
		this.className = "Map";
		this.data = [];
	}

	init (env) {
		super.init(...arguments);
		let self = this;

		this.defineOwnProperty("size", {
			getter () {
				return env.objectFactory.createPrimitive(self.data.length);
			},
			get () {}
		});
	}
}