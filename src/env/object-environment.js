import {PropertyReference} from "./property-reference";

export class ObjectEnvironment {
	constructor (parent, obj, thisArg, env, strict) {
		this.parent = parent && parent.scope;
		this.object = obj;
		this.thisBinding = thisArg || obj;
		this.env = env;
		this.strict = strict;
	}

	getReference (key, unqualified) {
		let ref = new PropertyReference(key, this.object, this.env);
		ref.unqualified = unqualified;
		return ref;
	}

	has (key) {
		return this.parent ? this.parent.has(key) : this.owns(key);
	}

	owns (key) {
		return this.object.has(key);
	}

	getVariable (key) {
		return this.object.getProperty(key);
	}

	deleteVariable (key) {
		return this.object.deleteProperty(key, false);
	}

	createVariable (key, immutable) {
		if (this.parent) {
			return this.parent.createVariable(...arguments);
		}

		this.object.defineOwnProperty(key, {
			value: undefined,
			configurable: immutable,
			enumerable: true,
			writable: true
		}, this.env.isStrict());

		return this.object.getProperty(key);
	}

	setValue (key, value, throwOnError) {
		if (this.parent && !this.object.has(key)) {
			this.parent.setValue(...arguments);
		} else {
			this.object.setValue(key, value, throwOnError);
		}
	}

	getValue (key, throwOnError) {
		if (!this.owns(key)) {
			if (throwOnError) {
				throw ReferenceError(`${key} is not defined.`);
			}

			return undefined;
		}

		return this.object.getValue(key);
	}

	getThisBinding () {
		return this.thisBinding;
	}
}
