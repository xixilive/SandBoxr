import {ObjectType} from "./object-type";

export class MapType extends ObjectType {
	constructor () {
		super();
		this.className = "Map";
		this.data = [];
	}

	// init (env) {
	// 	super.init(...arguments);
	// 	let self = this;

	// 	let getter = function () {
	// 		return env.objectFactory.createPrimitive(self.data.filter(e => e).length);
	// 	};

	// 	let getterFunc = env.objectFactory.createGetter(getter, "size");

	// 	this.defineOwnProperty("size", {
	// 		getter: getter,
	// 		get: getterFunc
	// 	});
	// }
}