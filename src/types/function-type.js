var ObjectType = require("./object-type");
var PropertyDescriptor = require("./property-descriptor");
var contracts = require("../utils/contracts");

function FunctionType (node) {
	ObjectType.call(this);
	this.type = "function";
	this.className = "Function";
	this.native = false;
	this.node = node;

	this.parentScope = null;
	this.boundThis = null;
}

FunctionType.prototype = Object.create(ObjectType.prototype);
FunctionType.prototype.constructor = FunctionType;

FunctionType.prototype.init = function (objectFactory, proto, descriptor) {
	// set length property from the number of parameters
	this.defineOwnProperty("length", {
		value: objectFactory.createPrimitive(this.node.params.length),
		configurable: false,
		enumerable: false,
		writable: false
	});

	// functions have a prototype
	proto = proto || objectFactory.createObject();
	proto.properties.constructor = new PropertyDescriptor(this, { configurable: true, enumerable: false, writable: true, value: this });
	this.defineOwnProperty("prototype", { value: proto, configurable: false, enumerable: false, writable: true });
};

FunctionType.prototype.getProperty = function (name) {
	var prop = ObjectType.prototype.getProperty.apply(this, arguments);
	if (!prop && name !== "prototype") {
		// since a function instance is itself a function look at our own prototype
		var proto = this.getProperty("prototype");
		return proto && proto.getValue().getProperty(name);
	}

	return prop;
};

FunctionType.prototype.bindThis = function (thisArg) {
	this.boundThis = thisArg;
};

FunctionType.prototype.bindScope = function (scope) {
	this.parentScope = scope;
};

FunctionType.prototype.createScope = function (env, thisArg) {
	// if a parent scope is defined we need to limit the scope to that scope
	var priorScope = env.current;
	if (this.parentScope) {
		env.current = this.parentScope;
	}

	var args = Array.prototype.slice.call(arguments, 1);
	if (this.boundThis) {
		args[0] = this.boundThis;
	}

	var scope = env.createScope.apply(env, args);
	if (!this.native) {
		scope.init(this.node.body);
	}

	return {
		exitScope: function () {
			scope.exitScope();
			env.current = priorScope;
		}
	};
};

FunctionType.prototype.hasInstance = function (obj) {
	if (obj === this) {
		// object obviously isn't an instance in this case
		return false;
	}

	var visited = [];
	var current = obj;

	var proto = this.getProperty("prototype").getValue();
	if (contracts.isNullOrUndefined(proto) || !contracts.isObject(proto)) {
		throw new TypeError("Function has non-object prototype in instanceof check");
	}

	while (current) {
		if (visited.indexOf(current) >= 0) {
			return false;
		}

		if (current === proto) {
			return true;
		}

		// keep a stack to avoid circular reference
		visited.push(current);
		current = current.getPrototype();
	}

	return false;
};

module.exports = FunctionType;
