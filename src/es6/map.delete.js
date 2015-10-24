import {assertIsMap} from "../utils/contracts";
import {findIndex} from "./collection-helpers";

export default function ($target, env, factory) {
	$target.define("delete", factory.createBuiltInFunction(function (key) {
		assertIsMap(this.node, "Map.prototype.delete");
		
		let index = findIndex(this.node, key);
		if (index >= 0) {
			this.node.data.splice(index, 1);
			return factory.createPrimitive(true);
		}

		return factory.createPrimitive(false);
	}, 1, "Map.prototype.delete"));
}
