import {tryExecute as tryExec} from "../../utils/func";
import iterate from "../../iterators";
import {each} from "../../utils/async";

export default function (env) {
	function assertIsSet (obj, methodName) {
		if (!("setData" in obj)) {
			throw new TypeError(`Method ${methodName} called on incompatible receiver ${obj.className}`);
		}
	}

	let globalObject = env.global;
	let objectFactory = env.objectFactory;
	let proto = objectFactory.createObject();

	let setClass = objectFactory.createFunction(function* (iterable) {
		if (!this.isNew) {
			throw new TypeError("Constructor Set requires 'new'");
		}

		let obj = objectFactory.create("Set");

		if (iterable) {
			let length = iterable.getValue("length").toNative();
			for (let entry of iterate.forward(env, iterable, 0, length)) {
				if ((yield tryExec(env, obj, "add", [entry.value])) === false) {
					throw new TypeError("Property 'add' of object #<Set> is not a function");
				}
			}
		}

		return obj;
	}, proto, { name: "Set" });

	proto.define("add", objectFactory.createBuiltInFunction(function (value) {
		assertIsSet(this.node, "Set.prototype.add");

		if (this.node.setData.every(e => !env.ops.areSameOrZero(e, value))) {
			this.node.setData.push(value);
		}

		return this.node;
	}, 1, "Set.prototype.add"));

	proto.define("delete", objectFactory.createBuiltInFunction(function (value) {
		assertIsSet(this.node, "Set.prototype.delete");

		let entries = this.node.setData;
		let index = entries.length;

		while (index--) {
			if (env.ops.areSameOrZero(entries[index], value)) {
				entries.splice(index, 1);
				return objectFactory.createPrimitive(true);
			}
		}

		return objectFactory.createPrimitive(false);
	}, 1, "Set.prototype.delete"));

	proto.define("has", objectFactory.createBuiltInFunction(function (value) {
		assertIsSet(this.node, "Set.prototype.has");
		let has = this.node.setData.some(e => env.ops.areSameOrZero(e, value));
		return objectFactory.createPrimitive(has);
	}, 1, "Set.prototype.has"));

	proto.define("clear", objectFactory.createBuiltInFunction(function () {
		assertIsSet(this.node, "Set.prototype.clear");
		this.node.setData = [];
	}, 0, "Set.prototype.clear"));

	proto.define("forEach", objectFactory.createBuiltInFunction(function* (callback, thisArg) {
		assertIsSet(this.node, "Set.prototype.forEach");

		let s = this.node;

		yield each(this.node.setData, function* (e) {
			let scope = env.createScope(thisArg);
			scope.init(callback.node.body);

			let args = [e, e, s];
			scope.loadArgs(callback.node.params, args, callback);

			return yield scope.use(function* () {
				return yield env.createExecutionContext(callback.node.body, callback.node).execute();
			});
		});
	}, 1, "Set.prototype.forEach"));

	proto.define("values", objectFactory.createBuiltInFunction(function () {
		assertIsSet(this.node, "Set.prototype.values");
		return objectFactory.createIterator(this.node.values());
	}, 0, "Set.prototype.values"));


	proto.define("keys", objectFactory.createBuiltInFunction(function () {
		assertIsSet(this.node, "Set.prototype.keys");
		return objectFactory.createIterator(this.node.keys());
	}, 0, "Set.prototype.keys"));

	globalObject.define("Set", setClass);
}
