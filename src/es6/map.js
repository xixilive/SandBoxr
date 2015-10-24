import {assertIsObject,assertIsFunction} from "../utils/contracts";
import {toLength} from "../utils/native";
import iterate from "../iterators/";

import $clear from "./map.clear";
import $delete from "./map.delete";
import $forEach from "./map.for-each";
import $get from "./map.get";
import $has from "./map.has";
import $set from "./map.set";

export default function ($global, env, factory) {
	let proto = factory.createObject();

	let mapClass = factory.createFunction(function* (iterable) {
		if (!this.isNew) {
			throw TypeError("Constructor Map requires 'new'");
		}

		let obj = factory.create("Map");

		if (iterable) {
			assertIsObject(iterable, "Map");

			let length = yield toLength(iterable);
			let setter = obj.getValue("set");

			assertIsFunction(setter, "set");

			for (let entry of iterate.forward(env, iterable, 0, length)) {
				let key = entry.value.getValue("0");
				let value = entry.value.getValue("1");
				yield setter.call(obj, [key, value]);
			}
		}

		return obj;
	}, proto, { name: "Map" });

	$clear(proto, env, factory);
	$delete(proto, env, factory);
	$forEach(proto, env, factory);
	$get(proto, env, factory);
	$has(proto, env, factory);
	$set(proto, env, factory);

	$global.define("Map", mapClass);
}
