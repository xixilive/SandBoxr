import {PropertyDescriptor} from "./property-descriptor";

function isSymbol (key) {
	return key && typeof key !== "string" && key.isSymbol;
}

function getPropertySource (key) {
	return isSymbol(key) ? "symbols" : "properties";
}

export class ObjectType {
	constructor () {
		this.isPrimitive = false;
		this.type = "object";
		this.className = "Object";
		this.extensible = true;
		this.properties = Object.create(null);
		this.symbols = Object.create(null);

		this.version = 0;
		this.primitiveHint = "number";
	}

	init (objectFactory, proto, descriptor) { }

	getPrototype () {
		return this.proto;
	}

	setPrototype (proto) {
		this.proto = proto;
		this.version++;
	}

	getProperty (key) {
		let source = getPropertySource(key);
		key = String(key);

		let current = this;
		while (current) {
			if (key in current[source]) {
				return current[source][key].bind(this);
			}

			current = current.getPrototype();
		}

		return undefined;
	}

	getOwnProperty (key) {
		return this[getPropertySource(key)][String(key)];
	}

	getOwnPropertyNames () {
		return Object.keys(this.properties);
	}

	hasProperty (key) {
		return !!this.getProperty(key);
	}

	hasOwnProperty (key) {
		return String(key) in this[getPropertySource(key)];
	}

	putValue (key, value, throwOnError, env) {
		if (this.isPrimitive) {
			return;
		}

		let descriptor = this.getProperty(key);
		if (descriptor) {
			if (!descriptor.canSetValue()) {
				if (throwOnError) {
					throw new TypeError(`Cannot assign to read only property '${key}' of %s`);
				}

				return;
			}

			if (descriptor.dataProperty && !this.hasOwnProperty(key)) {
				this[getPropertySource(key)][String(key)] = new PropertyDescriptor(this, {
					value: value,
					configurable: descriptor.configurable,
					enumerable: descriptor.enumerable,
					writable: descriptor.writable
				}, key);

				this.version++;
			} else {
				descriptor.setValue(value);
			}
		} else {
			this.defineOwnProperty(key, { value: value, configurable: true, enumerable: true, writable: true }, throwOnError, env);
		}
	}

	defineOwnProperty (key, descriptor, throwOnError, env) {
		if (this.isPrimitive) {
			if (throwOnError) {
				throw new TypeError(`Cannot define property: ${key}, object is not extensible`);
			}

			return false;
		}

		let current = this.getOwnProperty(key);
		if (current) {
			if (current.canUpdate(descriptor)) {
				current.update(descriptor);
				return true;
			}

			if (throwOnError) {
				throw new TypeError(`Cannot redefine property: ${key}`);
			}

			return false;
		} else if (!this.extensible) {
			if (throwOnError) {
				throw new TypeError(`Cannot define property: ${key}, object is not extensible`);
			}

			return false;
		}

		this[getPropertySource(key)][String(key)] = new PropertyDescriptor(this, descriptor, key);
		this.version++;
		return true;
	}

	deleteProperty (key, throwOnError) {
		if (this.isPrimitive) {
			return false;
		}

		let source = getPropertySource(key);
		key = String(key);

		if (key in this[source]) {
			if (!this[source][key].configurable) {
				if (throwOnError) {
					throw new TypeError(`Cannot delete property: ${key}`);
				}

				return false;
			}
		}

		this.version++;
		return delete this[source][key];
	}

	define (key, value, { configurable = true, enumerable = false, writable = true, getter, get, setter, set } = {}) {
		// this method is intended for external usage only - it provides a way to define
		// methods and properties and overwrite any existing properties even if they are
		// not configurable

		let descriptor;
		if (getter || setter) {
			descriptor = { getter, get, setter, set, configurable, enumerable };
		}	else {
			descriptor = { value, configurable, enumerable, writable };
		}

		this[getPropertySource(key)][String(key)] = new PropertyDescriptor(this, descriptor, key);
		this.version++;
	}

	remove (key) {
		// this method is intended for external usage only - it provides a way to remove
		// properties even if they are not normally able to be deleted
		delete this[getPropertySource(key)][String(key)];
		this.version++;
	}

	getValue (key) {
		if (arguments.length > 0) {
			return this.getProperty(key).getValue();
		}

		return this;
	}

	freeze () {
		for (let prop in this.properties) {
			if (this.properties[prop].dataProperty) {
				this.defineOwnProperty(prop, { writable: false, configurable: false }, true);
			} else {
				this.defineOwnProperty(prop, { configurable: false }, true);
			}
		}

		this.preventExtensions();
	}

	preventExtensions () {
		this.extensible = false;
	}

	seal () {
		for (let prop in this.properties) {
			this.defineOwnProperty(prop, { configurable: false }, true);
		}

		this.preventExtensions();
	}

	equals (obj) {
		if (this.isPrimitive && obj.isPrimitive) {
			return this.value === obj.value;
		}

		return this === obj;
	}

	toNative () {
		let unwrapped = {};
		let current = this;

		while (current) {
			for (let name in current.properties) {
				if (current.properties[name].enumerable && !(name in unwrapped)) {
					unwrapped[name] = current.getValue(name).toNative();
				}
			}

			current = current.getPrototype();
		}

		return unwrapped;
	}
}
