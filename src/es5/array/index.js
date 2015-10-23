import {UNDEFINED} from "../../types/primitive-type";
import * as contracts from "../../utils/contracts";
import {tryExecute as tryExec} from "../../utils/func";
import {toLength,toString,toPrimitive,toInteger,toBoolean,toObject,toArray} from "../../utils/native";
import iterate from "../../iterators";
import {exhaust as x} from "../../utils/async";
import {SymbolType} from "../../types/symbol-type";

export function getStartIndex (index, length) {
	if (index < 0) {
		return Math.max(length - Math.abs(index), 0);
	}

	return Math.min(index || 0, length);
}

export function getEndIndex (index, length) {
	if (index < 0) {
		return Math.max(length + index, 0);
	}

	return Math.min(index, length);
}

export function* executeCallback (env, callback, entry, thisArg, arr) {
	if (!thisArg) {
		thisArg = callback.isStrict() ? UNDEFINED : env.global;
	}

	let scope = env.createExecutionScope(callback, thisArg);
	scope.init(callback.node.body);

	let args = [entry.value, env.objectFactory.createPrimitive(entry.key), arr];
	yield scope.loadArgs(callback.node.params, args, callback);

	return yield scope.use(function* () {
		let executionResult = yield env.createExecutionContext(callback.node.body, callback.node).execute();
		if (executionResult && executionResult.exit) {
			return executionResult.result || UNDEFINED;
		}

		return UNDEFINED;
	});
}

export default function arrayApi (env) {
	const globalObject = env.global;
	const objectFactory = env.objectFactory;

	function* executeAccumulator (callback, priorValue, entry, arr) {
		let scope = env.createExecutionScope(callback);
		scope.init(callback.node.body);

		let args = [priorValue || UNDEFINED, entry.value || UNDEFINED, objectFactory.createPrimitive(entry.key), arr];
		yield scope.loadArgs(callback.node.params, args, callback);

		return yield scope.use(function* () {
			let executionResult = yield env.createExecutionContext(callback.node.body, callback.node).execute();
			if (executionResult && executionResult.exit) {
				return executionResult.result || UNDEFINED;
			}

			return UNDEFINED;
		});
	}

	function createIndexProperty (value) {
		return {
			value: value,
			configurable: true,
			enumerable: true,
			writable: true
		};
	}

	let proto = objectFactory.createObject();
	proto.className = "Array";
	proto.define("length", objectFactory.createPrimitive(0), { configurable: false, enumerable: false, writable: true });

	let arrayClass = objectFactory.createFunction(function (length) {
		let newArray = objectFactory.create("Array");

		if (arguments.length > 0) {
			if (arguments.length === 1 && length.type === "number") {
				contracts.assertIsValidArrayLength(arguments[0].value);
				newArray.setValue("length", length);
			} else {
				for (let i = 0, ln = arguments.length; i < ln; i++) {
					newArray.defineOwnProperty(i, createIndexProperty(arguments[i]), false, env);
				}
			}
		}

		return newArray;
	}, proto, { configurable: false, enumerable: false, writable: false });

	arrayClass.define("isArray", objectFactory.createBuiltInFunction(function (obj) {
		return objectFactory.createPrimitive(!!(obj && obj.className === "Array"));
	}, 1, "Array.isArray"));

	proto.define("push", objectFactory.createBuiltInFunction(function* (...items) {
		let start = yield toLength(this.node);
		let i = 0;

		for (let length = items.length; i < length; i++) {
			this.node.defineOwnProperty(start + i, createIndexProperty(items[i]));
		}

		let newLength = objectFactory.createPrimitive(start + i);
		this.node.setValue("length", newLength);
		return newLength;
	}, 1, "Array.prototype.push"));

	proto.define("pop", objectFactory.createBuiltInFunction(function* () {
		let obj;
		let i = yield toLength(this.node);

		if (i > 0) {
			i--;

			if (this.node.has(i)) {
				obj = this.node.getValue(i);
				this.node.deleteProperty(i, true);
			}
		}

		this.node.setValue("length", objectFactory.createPrimitive(i));
		return obj || UNDEFINED;
	}, 0, "Array.prototype.pop"));

	proto.define("shift", objectFactory.createBuiltInFunction(function* () {
		let obj;
		let length = yield toLength(this.node);
		let i = 0;

		if (length > 0) {
			if (this.node.has(i)) {
				obj = this.node.getValue(i);
				this.node.deleteProperty(i);
			}

			while (++i < length) {
				if (this.node.has(i)) {
					this.node.setValue(i - 1, this.node.getValue(i));
				} else {
					this.node.deleteProperty(i);
				}
			}

			this.node.deleteProperty(length - 1);
		}

		this.node.setValue("length", objectFactory.createPrimitive(length === 0 ? 0 : --length));
		return obj || UNDEFINED;
	}, 0, "Array.prototype.shift"));

	proto.define("unshift", objectFactory.createBuiltInFunction(function* (...items) {
		let length = yield toLength(this.node);
		let argCount = items.length;
		let i = length;
		let toIndex, fromIndex;

		while (i > 0) {
			fromIndex = i - 1;
			toIndex = i + argCount - 1;

			if (this.node.has(fromIndex)) {
				this.node.setValue(toIndex, this.node.getValue(fromIndex));
			} else {
				this.node.deleteProperty(toIndex, true);
			}

			i--;
		}

		for (i = 0; i < argCount; i++) {
			this.node.setValue(i, items[i]);
		}

		let newLength = objectFactory.createPrimitive(argCount + length);
		this.node.setValue("length", newLength);
		return newLength;
	}, 1, "Array.prototype.unshift"));

	proto.define("slice", objectFactory.createBuiltInFunction(function* (begin, end) {
		let source = this.node;
		let length = yield toLength(this.node);
		begin = begin ? (yield toInteger(begin)) : 0;

		if (!end || end.type === "undefined") {
			end = length;
		} else {
			end = yield toInteger(end);
		}

		let arr = objectFactory.create("Array");
		let index = 0;

		begin = getStartIndex(begin, length);
		end = getEndIndex(end, length);

		for (let i = begin; i < end; i++) {
			arr.defineOwnProperty(index++, createIndexProperty(source.getValue(i)));
		}

		return arr;
	}, 2, "Array.prototype.slice"));

	proto.define("splice", objectFactory.createBuiltInFunction(function* (start, deleteCount, ...elements) {
		let length = yield toLength(this.node);

		start = yield toInteger(start);
		if (start < 0) {
			start = Math.max(length + start, 0);
		} else {
			start = Math.min(start, length);
		}

		deleteCount = yield toInteger(deleteCount);
		if (deleteCount < 0) {
			deleteCount = 0;
		} else {
			deleteCount = Math.min(Math.max(deleteCount, 0), length - start);
		}

		let removed = objectFactory.create("Array");

		let k = 0;
		while (k < deleteCount) {
			if (this.node.has(k + start)) {
				removed.defineOwnProperty(k, createIndexProperty(this.node.getValue(k + start)));
			}

			k++;
		}

		let newCount = elements.length;
		if (newCount < deleteCount) {
			k = start;

			while (k < length - deleteCount) {
				if (this.node.has(k + deleteCount)) {
					this.node.setValue(k + newCount, this.node.getValue(k + deleteCount));
				} else {
					this.node.deleteProperty(k + deleteCount);
				}

				k++;
			}

			k = length;
			while (k > length - deleteCount + newCount) {
				this.node.deleteProperty(--k);
			}
		} else if (newCount > deleteCount) {
			k = length - start;
			while (k > start) {
				if (this.node.has(k + deleteCount - 1)) {
					this.node.setValue(k + newCount - 1, this.node.getValue(k + deleteCount - 1));
				} else {
					this.node.deleteProperty(k + newCount - 1);
				}

				k--;
			}
		}

		k = start;
		for (let i = 0; i < newCount; i++) {
			this.node.setValue(k, elements[i]);
			k++;
		}

		this.node.setValue("length", objectFactory.createPrimitive(length - deleteCount + newCount));
		return removed;
	}, 2, "Array.prototype.splice"));

	function isSpreadable (obj) {
		if (!contracts.isObject(obj)) {
			return false;
		}

		let key = SymbolType.getByKey("isConcatSpreadable");
		let propInfo = obj.getProperty(key);
		if (propInfo) {
			let spreadable = propInfo.getValue();
			if (!contracts.isUndefined(spreadable)) {
				return toBoolean(spreadable);
			}
		}

		return obj.className === "Array";
	}

	proto.define("concat", objectFactory.createBuiltInFunction(function* (...arrays) {
		let newArray = objectFactory.create("Array");

		// add "this" array to bunch
		arrays.unshift(toObject(env, this.node));

		let current, index = 0, i;
		while (arrays.length > 0) {
			current = arrays.shift();

			if (isSpreadable(current)) {
				let length = yield toLength(current);
				for (i = 0; i < length; i++) {
					if (current.has(i)) {
						newArray.defineOwnProperty(index, createIndexProperty(current.getValue(i)));
					}

					index++;
				}
			} else {
				newArray.defineOwnProperty(index++, createIndexProperty(current));
			}
		}

		newArray.setValue("length", objectFactory.createPrimitive(index));
		return newArray;
	}, 1, "Array.prototype.concat"));

	function* join (separator) {
		let length = yield toLength(this.node);
		separator = arguments.length === 0 || separator === UNDEFINED ? "," : (yield toPrimitive(separator, "string"));
		let stringValues = [];
		let stringValue;

		for (let i = 0; i < length; i++) {
			stringValue = "";
			if (this.node.has(i)) {
				stringValue = this.node.getValue(i);
				if (contracts.isNullOrUndefined(stringValue)) {
					stringValue = "";
				} else {
					stringValue = yield toString(stringValue);
				}
			}

			stringValues.push(stringValue);
		}

		return objectFactory.createPrimitive(stringValues.join(separator));
	}

	proto.define("join", objectFactory.createBuiltInFunction(join, 1, "Array.prototype.join"));

	proto.define("indexOf", objectFactory.createBuiltInFunction(function* (searchElement, fromIndex) {
		searchElement = searchElement || UNDEFINED;
		let length = yield toLength(this.node);
		let index = arguments.length === 1 ? 0 : (yield toInteger(fromIndex));
		const notFound = objectFactory.createPrimitive(-1);

		if (length === 0 || index >= length) {
			return notFound;
		}

		index = getStartIndex(index, length);

		for (let {key, value} of iterate.forward(env, this.node, index, length)) {
			if (env.ops.areSame(searchElement, value || UNDEFINED)) {
				return objectFactory.createPrimitive(key);
			}
		}

		return notFound;
	}, 1, "Array.prototype.indexOf"));

	proto.define("lastIndexOf", objectFactory.createBuiltInFunction(function* (searchElement, fromIndex) {
		searchElement = searchElement || UNDEFINED;
		let length = yield toLength(this.node);
		let index = arguments.length === 1 ? length - 1 : (yield toInteger(fromIndex));

		if (index < 0) {
			index = length - Math.abs(index);
		}

		for (let {key, value} of iterate.reverse(env, this.node, index)) {
			if (env.ops.areSame(searchElement, value || UNDEFINED)) {
				return objectFactory.createPrimitive(key);
			}
		}

		return objectFactory.createPrimitive(-1);
	}, 1, "Array.prototype.lastIndexOf"));

	proto.define("forEach", objectFactory.createBuiltInFunction(function* (callback, thisArg) {
		let arr = toObject(env, this.node);
		let length = yield toLength(arr);
		contracts.assertIsFunction(callback, arr);

		for (let entry of iterate.forward(env, arr, 0, length)) {
			yield executeCallback(env, callback, entry, thisArg, arr);
		}
	}, 1, "Array.prototype.forEach"));

	proto.define("map", objectFactory.createBuiltInFunction(function* (callback, thisArg) {
		let arr = toObject(env, this.node);
		let length = yield toLength(arr);
		contracts.assertIsNotNullOrUndefined(arr, "Array.prototype.map");
		contracts.assertIsFunction(callback, arr);

		let newArray = objectFactory.create("Array");
		newArray.setValue("length", objectFactory.createPrimitive(length));

		for (let entry of iterate.forward(env, arr, 0, length)) {
			let value = yield executeCallback(env, callback, entry, thisArg, arr);
			newArray.defineOwnProperty(entry.key, createIndexProperty(value));
		}

		return newArray;
	}, 1, "Array.prototype.map"));

	proto.define("filter", objectFactory.createBuiltInFunction(function* (callback, thisArg) {
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.filter");
		let arr = toObject(env, this.node);
		let length = yield toLength(arr);
		contracts.assertIsFunction(callback, arr);

		let newArray = objectFactory.create("Array");
		let index = 0;

		for (let entry of iterate.forward(env, arr, 0, length)) {
			let passed = toBoolean(yield executeCallback(env, callback, entry, thisArg, arr));
			if (passed) {
				newArray.defineOwnProperty(index++, createIndexProperty(entry.value));
			}
		}

		return newArray;
	}, 1, "Array.prototype.filter"));

	proto.define("every", objectFactory.createBuiltInFunction(function* (callback, thisArg) {
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.every");
		let arr = toObject(env, this.node);
		let length = yield toLength(arr);
		contracts.assertIsFunction(callback, arr);

		for (let entry of iterate.forward(env, arr, 0, length)) {
			let passed = toBoolean(yield executeCallback(env, callback, entry, thisArg, arr));
			if (!passed) {
				return objectFactory.createPrimitive(false);
			}
		}

		return objectFactory.createPrimitive(true);
	}, 1, "Array.prototype.every"));

	proto.define("some", objectFactory.createBuiltInFunction(function* (callback, thisArg) {
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.some");
		let arr = toObject(env, this.node);
		let length = yield toLength(this.node);
		contracts.assertIsFunction(callback, this.node);

		for (let entry of iterate.forward(env, arr, 0, length)) {
			let passed = toBoolean(yield executeCallback(env, callback, entry, thisArg, arr));
			if (passed) {
				return objectFactory.createPrimitive(true);
			}
		}

		return objectFactory.createPrimitive(false);
	}, 1, "Array.prototype.some"));

	proto.define("reduce", objectFactory.createBuiltInFunction(function* (callback, initialValue) {
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.reduce");
		let arr = toObject(env, this.node);
		let length = yield toLength(arr);
		contracts.assertIsFunction(callback, arr);

		let hasInitialValue = false;
		let value;

		if (arguments.length > 1) {
			value = initialValue;
			hasInitialValue = true;
		}

		let hasElements = false;
		if (length > 0) {
			for (let entry of iterate.forward(env, arr, 0, length)) {
				if (!hasElements) {
					hasElements = true;

					if (!hasInitialValue) {
						value = entry.value;
						continue;
					}
				}

				value = yield executeAccumulator(callback, value, entry, arr);
			}
		}

		if (!hasElements && !hasInitialValue) {
			return this.raise(new TypeError("Reduce of empty array with no initial value"));
		}

		return value;
	}, 1, "Array.prototype.reduce"));

	proto.define("reduceRight", objectFactory.createBuiltInFunction(function* (callback, initialValue) {
		let length = yield toLength(this.node);
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.reduceRight");
		let arr = toObject(env, this.node);
		contracts.assertIsFunction(callback, arr);

		let accumulator;
		let hasInitialValue = false;

		if (arguments.length > 1) {
			accumulator = initialValue;
			hasInitialValue = true;
		}

		let hasElements = false;
		if (length > 0) {
			for (let entry of iterate.reverse(env, arr, length - 1)) {
				if (!hasElements) {
					hasElements = true;

					if (!hasInitialValue) {
						accumulator = entry.value;
						continue;
					}
				}

				accumulator = yield executeAccumulator(callback, accumulator, entry, arr);
			}
		}

		if (!hasElements && !hasInitialValue) {
			return this.raise(new TypeError("Reduce of empty array with no initial value"));
		}

		return accumulator;
	}, 1, "Array.prototype.reduceRight"));

	proto.define("reverse", objectFactory.createBuiltInFunction(function* () {
		let length = yield toLength(this.node);
		let middle = Math.floor(length / 2);
		let lower = 0;
		let upper, upperValue, lowerValue;

		while (lower !== middle) {
			upper = length - lower - 1;
			lowerValue = this.node.has(lower) && this.node.getValue(lower);
			upperValue = this.node.has(upper) && this.node.getValue(upper);

			if (upperValue) {
				this.node.setValue(lower, upperValue);
			}

			if (lowerValue) {
				this.node.setValue(upper, lowerValue);
			}

			if (upperValue && !lowerValue) {
				this.node.deleteProperty(upper);
			} else if (lowerValue && !upperValue) {
				this.node.deleteProperty(lower);
			}

			lower++;
		}

		return this.node;
	}, 0, "Array.prototype.reverse"));

	proto.define("sort", objectFactory.createBuiltInFunction(function* (compareFunction) {
		let executionContext = this;
		let arr = this.node;
		let length = yield toLength(arr);
		let i = 0;

		let comparer;
		if (contracts.isNullOrUndefined(compareFunction)) {
			comparer = function defaultComparer (a, b) {
				a = x(toString(a));
				b = x(toString(b));

				if (a < b) {
					return -1;
				}

				if (a > b) {
					return 1;
				}

				return 0;
			};
		} else {
			comparer = function (a, b) {
				let scope = env.createScope(UNDEFINED);
				scope.init(compareFunction.node.body);

				x(scope.loadArgs(compareFunction.node.params, [a, b], compareFunction));
				let executionResult = x(scope.use(function () {
					return x(executionContext.create(compareFunction.node.body, compareFunction.node).execute());
				}));

				if (executionResult && executionResult.exit && executionResult.result) {
					return executionResult.result.getValue().toNative();
				}

				return undefined;
			};
		}

		// to array, run the wrapped comparer, then re-assign indexes
		let sortedArray = (yield toArray(arr, length))
			// undefined positions are handled by the underlying sort algorithm, so replace them with the raw primitive value
			.map(el => { return el.isPrimitive && el.value === undefined ? undefined : el; })
			.sort(comparer);

		while (i < length) {
			if (i in sortedArray) {
				arr.setValue(i, sortedArray[i], false, env);
			} else {
				arr.deleteProperty(i, false);
			}

			i++;
		}

		return arr;
	}, 1, "Array.prototype.sort"));

	proto.define("toLocaleString", objectFactory.createBuiltInFunction(function* () {
		let length = yield toLength(this.node);
		let arr = new Array(length);
		let i = 0;
		let current;

		while (i < length) {
			if (this.node.has(i)) {
				current = this.node.getValue(i);

				if (contracts.isNullOrUndefined(current)) {
					arr[i] = "";
				} else {
					arr[i] = yield toString(yield tryExec(current, "toLocaleString"));
				}
			}

			i++;
		}

		return objectFactory.createPrimitive(arr.join());
	}, 0, "Array.prototype.toLocaleString"));

	// todo: this is a bit hacky - toString will call join if available per spec,
	// but will call Object..toString if not
	proto.define("toString", objectFactory.createBuiltInFunction(join, 0, "Array.prototype.toString"));
	globalObject.define("Array", arrayClass);
}
