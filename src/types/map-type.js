import {ObjectType} from "./object-type";

export class MapType extends ObjectType {
	constructor () {
		super();
		this.mapData = [];
	}

	init (objectFactory) {
		let self = this;

		this.defineOwnProperty("size", {
			getter () {
				return objectFactory.createPrimitive(self.mapData.length);
			},
			get () {}
		});
	}
}