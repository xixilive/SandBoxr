import {Reference} from "./reference";
import {PrimitiveType} from "../types/primitive-type";

/**
 * An object which represents a reference to an object's property.
 */
export class PropertyReference extends Reference {
	constructor (key, object, env) {
		super(key, object, env);
		this.isPropertyReference = true;
	}

	/**
	 * Returns the value of the reference. If the reference is unresolved,
	 * a ReferenceError will be thrown.
	 * @returns {ObjectType} The value.
	 */
	getValue () {
		let prop = this.base.getProperty(this.key);
		return prop && prop.getValue() || new PrimitiveType();
	}

	/**
	 * Sets the value of the underlying property or value.
	 * @param {ObjectType} value - The value to assign.
	 * @returns {Boolean} The result of the value assignment.
	 */
	setValue (value) {
		if (this.base.hasProperty(this.key)) {
			this.base.putValue(this.key, value, this.strict, this.env);
		} else {
			this.base.defineOwnProperty(this.key, { value: value, configurable: true, enumerable: true, writable: true }, this.strict, this.env);
		}
	}

	/**
	 * Deletes the underlying reference.
	 * @returns {Boolean} The result of the delete operation.
	 */
	["delete"] () {
		return this.base.deleteProperty(this.key, this.env.isStrict());
	}

	/**
	 * Indicates whether the reference is resolved or not.
	 * @returns {Boolean} true if resolves; false otherwise.
	 */
	isUnresolved () {
		return false;
	}
}
