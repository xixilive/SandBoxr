var convert = require("../utils/convert");
var func = require("../utils/func");
var types = require("../utils/types");

var methods = ["parse"];
var primitives = {
	"String": true,
	"Number": true,
	"Boolean": true,
	"Date": true
};

function repeat (what, count) {
	return Array(count + 1).join(what);
}

function formatValues (values, gap, depth) {
	if (values.length === 0) {
		return "";
	}
	
	if (!gap) {
		return values.join(",");
	}
	
	var indent = "\n" + repeat(gap, depth);
	var joinedValues = values.join(indent + ",");
	
	// remove indent on closing
	return indent + joinedValues + "\n" + repeat(gap, depth - 1);
}

function serialize (env, stack, obj, replacer, gap, depth) {
	if (!obj) {
		return serializePrimitive();
	}
	
	if (obj.isPrimitive || obj.className in primitives) {
		return serializePrimitive(obj.value);
	}
	
	if (obj.className === "Function") {
		return undefined;
	}
	
	var jsonString = func.callMethod(env, obj, "toJSON", []);		
	if (jsonString) {
		return serializePrimitive(jsonString.value);
	}
	
	if (stack.indexOf(obj) >= 0) {
		throw new TypeError("Converting circular structure to JSON");
	}
	
	depth++;
	stack.push(obj);
	
	var jsonResult;
	if (obj.className === "Array") {
		jsonResult = serializeArray(env, stack, obj, replacer);
	} else {
		jsonResult = serializeObject(env, stack, obj, replacer, gap, depth);
	}
	
	depth--;
	stack.pop();
	return jsonResult;
}

function serializeObject (env, stack, obj, replacer, gap, depth) {
	var colon = gap ? ": " : ":";
	var values = [];
	var value;
	
	for (var prop in obj.properties) {
		if (obj.properties[prop].enumerable) {
			value = replacer(obj, prop, obj.getProperty(prop).getValue());
			if (!types.isNullOrUndefined(value)) {
				values.push(serializePrimitive(prop) + colon + serialize(env, stack, value, replacer, gap, depth));
			}
		}
	}
	
	return "{" + formatValues(values, gap, depth, gap, depth) + "}";
}

function serializeArray (env, stack, arr, replacer, gap, depth) {
	var length = arr.getProperty("length").getValue().value;
	var values = [];
	var value;

	for (var i = 0; i < length; i++) {
		value = undefined;
		if (arr.hasProperty(i)) {
			value = replacer(arr, String(i), arr.getProperty(i).getValue());
		}
		
		if (types.isNullOrUndefined(value)) {
			// undefined positions are replaced with null
			values.push("null");
		} else {
			values.push(serialize(env, stack, value, replacer));	
		}
	}

	return "[" + formatValues(values, gap, depth) + "]";
}

function serializePrimitive (value) {
	return JSON.stringify(value);
}

function createReplacer (context, replacer) {
	if (replacer) {
		if (replacer.className === "Function") {
			return function (holder, key, value) {
				var args = [context.env.objectFactory.createPrimitive(key), value];
				var params = replacer.native ? [] : replacer.node.params;
				var callee = replacer.native ? replacer : replacer.node;
				
				return func.executeFunction(context, replacer, params, args, holder, callee);
			};
		}
		
		if (replacer.className === "Array") {
			var keys = convert.toArray(replacer).map(function (arg) {
				if (arg.className === "String") {
					return convert.toString(context.env, arg);
				}
				
				if (arg.className === "Number") {
					return String(convert.toNumber(context.env, arg));
				}
				
				return undefined;
			});
			
			return function (holder, key, value) {
				// allow empty key - this will be from the root
				if (!key || keys.indexOf(key) >= 0) {
					return value;
				}
				
				return undefined;
			};
		}
	}
	
	return function (holder, key, value) { return value; };
}

function getSpacer (env, spacer) {
	if (spacer) {
		if (spacer.className === "Number") {
			var count = Math.floor(convert.toNumber(env, spacer));
			count = Math.max(Math.min(10, count), 0);
			
			if (count > 0) {
				return repeat(" ", count);
			}
			
			return "";
		}
		
		if (spacer.className === "String") {
			var gap = convert.toString(env, spacer);
			return gap.substr(0, 10);
		}
	}
	
	return "";
}

module.exports = function (env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;
	var jsonClass = objectFactory.createObject();
	jsonClass.className = "JSON";

	jsonClass.define("stringify", objectFactory.createBuiltInFunction(function (obj, replacer, spacer) {
		replacer = createReplacer(this, replacer);
		spacer = getSpacer(env, spacer);
		
		// run at the top value
		obj = replacer(obj, "", obj);
		if (types.isUndefined(obj)) {
			return env.global.getProperty("undefined").getValue();
		}
		
		var stack = [];
		return objectFactory.createPrimitive(serialize(env, stack, obj, replacer, spacer, 0));
	}, 3, "JSON.stringify"));
	
	methods.forEach(function (name) {
		jsonClass.define(name, convert.toNativeFunction(env, JSON[name], "JSON." + name));
	});

	globalObject.define("JSON", jsonClass);
};
