import PrimitiveType from "./primitive-type";
import FunctionType from "./function-type";
import NativeFunctionType from "./native-function-type";
import RegexType from "./regex-type";
import ObjectType from "./object-type";
import ArrayType from "./array-type";
import StringType from "./string-type";
import DateType from "./date-type";
import ErrorType from "./error-type";
import ArgumentType from "./argument-type";
import * as contracts from "../utils/contracts";

var parentless = {
	"Undefined": true,
	"Null": true,
	"Function": true
};

var orphans = Object.create(null);

function setOrphans (scope) {
	var parent;

	for (var typeName in orphans) {
		parent = scope.getValue(typeName);
		if (parent) {
			orphans[typeName].forEach(function (child) {
				child.setPrototype(parent.getValue("prototype"));
			});

			delete orphans[typeName];
		}
	}

	orphans = Object.create(null);
}

function setProto (typeName, instance, env) {
	if (typeName in parentless) {
		return;
	}

	var parent = env.getReference(typeName);
	if (!parent.isUnresolved()) {
		instance.setPrototype(parent.getValue().getProperty("prototype").getValue());
		return;
	}

	// during initialization it is possible for objects to be created
	// before the types have been registered - add a registry of items
	// and these can be filled in when the type is registered
	orphans[typeName] = orphans[typeName] || [];
	orphans[typeName].push(instance);
}

export default function ObjectFactory (env) {
	this.env = env;
}

ObjectFactory.prototype = {
	constructor: ObjectFactory,

	init: function () {
		setOrphans(this.env);
	},

	createPrimitive: function (value) {
		return this.create(contracts.getType(value), value);
	},

	create: function (typeName, value) {
		var instance;

		switch (typeName) {
			case "String":
				instance = new StringType(value);
				break;

			case "Number":
			case "Boolean":
			case "Null":
			case "Undefined":
				instance = new PrimitiveType(value);
				break;

			case "Date":
				instance = new DateType(value);
				break;

			case "RegExp":
				instance = new RegexType(value);
				break;

			case "Array":
				instance = new ArrayType();
				break;

			case "Error":
				instance = new ErrorType(value);

				if (value) {
					typeName = value.name || typeName;
					instance.defineOwnProperty("message", {
						value: this.createPrimitive(value.message),
						configurable: true,
						enumerable: false,
						writable: true
					});
				}

				break;

			default:
				throw new Error("Not a primitive: " + value);
		}

		instance.init(this);
		setProto(typeName, instance, this.env);
		return instance;
	},

	createObject: function (parent) {
		var instance = new ObjectType();

		if (parent !== null) {
			if (parent) {
				instance.setPrototype(parent && parent.getProperty("prototype").getValue());
			} else {
				setProto("Object", instance, this.env);
			}
		}

		instance.init(this);
		return instance;
	},

	createArguments: function (args, callee, strict) {
		var instance = new ArgumentType();
		var objectClass = this.env.global.getValue("Object");

		instance.init(this, objectClass, objectClass.proto);
		instance.setPrototype(objectClass.getValue("prototype"));

		if (strict) {
			let thrower = function () {
				throw new TypeError("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
			};
			
			instance.defineOwnProperty("callee", {
				configurable: false,
				enumerable: false,
				get: thrower,
				getter: thrower,
				set: thrower,
				setter: thrower
			});
			
			instance.defineOwnProperty("caller", {
				configurable: false,
				enumerable: false,
				get: thrower,
				getter: thrower,
				set: thrower,
				setter: thrower
			});
		} else {
			instance.defineOwnProperty("callee", { 
				configurable: true, 
				enumerable: false,
				value: callee,
				writable: true
			});
		}
		
		return instance;
	},

	createFunction: function (fnOrNode, proto, descriptor) {
		var instance;

		if (typeof fnOrNode === "function") {
			instance = new NativeFunctionType(fnOrNode);
		} else {
			instance = new FunctionType(fnOrNode);
		}

		instance.init(this, proto, descriptor);

		var functionClass = this.env.getReference("Function");
		if (functionClass && !functionClass.isUnresolved()) {
			instance.setPrototype(functionClass.getValue().getProperty("prototype").getValue());
		}

		return instance;
	},

	createBuiltInFunction: function (fn, length, methodName) {
		var instance = new NativeFunctionType(function () {
			if (this.isNew) {
				throw new TypeError(methodName + " is not a constructor");
			}

			return fn.apply(this, arguments);
		});

		instance.setPrototype(this.env.getValue("Function").getProperty("prototype").getValue());
		instance.builtIn = true;
		instance.defineOwnProperty("length", { value: this.createPrimitive(length), configurable: false, enumerable: false, writable: false });
		return instance;
	}
};

module.exports = ObjectFactory;
