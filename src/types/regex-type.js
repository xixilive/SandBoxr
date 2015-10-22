import {ObjectType} from "./object-type";

export class RegexType extends ObjectType {
	constructor (value) {
		super();
		this.source = value;
		this.className = "RegExp";
	}

	init (env) {
		super.init(...arguments);
		let source = this.source;
		let objectFactory = env.objectFactory;

		// lastIndex is settable, all others are read-only attributes
		this.defineOwnProperty("lastIndex", { value: objectFactory.createPrimitive(this.source.lastIndex), writable: true });

		["source", "global", "ignoreCase", "multiline"].forEach(key => {
			let getter = function () { return objectFactory.createPrimitive(source[key]); };
			let getterFunc = objectFactory.createGetter(getter, key);

			this.defineOwnProperty(key, {
				getter: getter,
				get: getterFunc,
				configurable: true
			});
		});

		// this.defineOwnProperty("source", { value: objectFactory.createPrimitive(this.source.source) });
		// this.defineOwnProperty("global", { value: objectFactory.createPrimitive(this.source.global) });
		// this.defineOwnProperty("ignoreCase", { value: objectFactory.createPrimitive(this.source.ignoreCase) });
		// this.defineOwnProperty("multiline", { value: objectFactory.createPrimitive(this.source.multiline) });
	}

	toNative () {
		return this.source;
	}
}
