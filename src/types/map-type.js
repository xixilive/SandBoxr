import {ObjectType} from "./object-type";

export class MapType extends ObjectType {
	constructor () {
		super();
		this.mapData = [];
	}

	init (env) {
		super.init(...arguments);
		let self = this;

		this.defineOwnProperty("size", {
			getter () {
				return env.objectFactory.createPrimitive(self.mapData.length);
			},
			get () {}
		});
	}
}