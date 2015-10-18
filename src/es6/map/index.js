import * as contracts from "../../utils/contracts";
import {UNDEFINED} from "../../types/primitive-type";
import {each} from "../../utils/async";
import {toLength} from "../../utils/native";
import iterate from "../../iterators/";
import {execute as exec} from "../../utils/func";

export default function (env) {
	function assertIsMap (obj, methodName) {
		contracts.assertIsObject(obj, methodName);

		if (!("mapData" in obj)) {
			throw new TypeError(`Method ${methodName} called on incompatible receiver ${obj.className}`);
		}
	}

	function findIndex (obj, key) {
		for (let i = 0, ln = obj.mapData.length; i < ln; i++) {
			let current = obj.mapData[i];
			if (env.ops.areSameOrZero(key, current.key)) {
				return i;
			}
		}

		return -1;
	}

	let objectFactory = env.objectFactory;
	let proto = objectFactory.createObject();

	let mapClass = objectFactory.createFunction(function* (iterable) {
		if (!this.isNew) {
			throw new TypeError("Constructor Map requires 'new'");
		}

		let obj = objectFactory.create("Map");

		if (iterable) {
			contracts.assertIsObject(iterable, "Map");

			let length = yield toLength(env, iterable);
			let setter = obj.getValue("set");

			contracts.assertIsFunction(setter, "set");
			let callee = setter.node || setter;

			for (let entry of iterate.forward(env, iterable, 0, length)) {
				let key = entry.value.getValue("0");
				let value = entry.value.getValue("1");

				yield exec(env, setter, [key, value], obj, callee);
			}
		}

		return obj;
	}, proto);

	proto.define("clear", objectFactory.createBuiltInFunction(function () {
		assertIsMap(this.node, "Map.prototype.clear");
		this.node.mapData = [];
		return UNDEFINED;
	}, 0, "Map.prototype.clear"));

	proto.define("delete", objectFactory.createBuiltInFunction(function (key) {
		assertIsMap(this.node, "Map.prototype.delete");
		let index = findIndex(this.node, key);
		if (index >= 0) {
			this.node.mapData.splice(index, 1);
			return objectFactory.createPrimitive(true);
		}

		return objectFactory.createPrimitive(false);
	}, 1, "Map.prototype.delete"));

	proto.define("forEach", objectFactory.createBuiltInFunction(function* (callback, thisArg) {
		assertIsMap(this.node, "Map.prototype.forEach");
		contracts.assertIsFunction(callback, "callback");

		let m = this.node;
		thisArg = thisArg || UNDEFINED;

		yield each(this.node.mapData, function* (e) {
			let scope = env.createScope(thisArg);
			scope.init(callback.node.body);

			let args = [e.key, e.value, m];
			scope.loadArgs(callback.node.params, args, callback);

			return yield scope.use(function* () {
				return yield env.createExecutionContext(callback.node.body, callback.node).execute();
			});
		});
	}, 1, "Map.prototype.forEach"));

	proto.define("set", objectFactory.createBuiltInFunction(function (key, value) {
		assertIsMap(this.node, "Map.prototype.set");

		let index = findIndex(this.node, key);
		if (index >= 0) {
			this.node.mapData[index].value = value;
			return this.node;
		}

		this.node.mapData.push({ key, value });
		return this.node;
	}, 2, "Map.prototype.set"));

	proto.define("get", objectFactory.createBuiltInFunction(function (key) {
		assertIsMap(this.node, "Map.prototype.get");

		let index = findIndex(this.node, key);
		if (index >= 0) {
			return this.node.mapData[index].value;
		}

		return UNDEFINED;
	}, 1, "Map.prototype.get"));

	proto.define("has", objectFactory.createBuiltInFunction(function (key) {
		assertIsMap(this.node, "Map.prototype.has");
		return objectFactory.createPrimitive(findIndex(this.node, key) >= 0);
	}, 1, "Map.prototype.has"));

	env.global.define("Map", mapClass);
}
