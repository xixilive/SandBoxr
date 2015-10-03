import {UNDEFINED} from "../types/primitive-type";
import {each} from "./async";
import {toString} from "./native";

export function* declare (env, leftNode, rightValue) {
	if (leftNode.type === "Identifier") {
		let left = env.createVariable(leftNode.name);
		left.setValue(rightValue);
	} else {
		yield destructure(env, leftNode, rightValue, declare);
	}

	return rightValue;
}

export function* assign (env, leftNode, rightValue) {
	switch (leftNode.type) {
		case "Identifier":
		case "MemberExpression":
			let left = (yield env.createExecutionContext(leftNode).execute()).result;
			left.setValue(rightValue);
			break;

		default:
			yield destructure(env, leftNode, rightValue, assign);
	}

	return rightValue;
}

function* destructure (env, leftNode, rightValue, cb) {
	switch (leftNode.type) {
		case "ArrayPattern":
			yield destructureArray(env, leftNode, rightValue, cb);
			break;

		case "ObjectPattern":
			yield destructureObject(env, leftNode, rightValue, cb);
			break;

		case "AssignmentPattern":
			yield handleDefault(env, leftNode, rightValue, cb);
			break;

		default:
			throw new Error(`${leftNode.type} not implemented`);
	}
}

function* handleDefault (env, left, rightValue, cb) {
	if (rightValue === UNDEFINED) {
		let defaultValue = (yield env.createExecutionContext(left.right).execute());
		rightValue = defaultValue.result.getValue();
	}

	yield cb(env, left.left, rightValue);
}

function* destructureArray (env, pattern, arr, cb) {
	yield each(pattern.elements, function* (current, index) {
		let propInfo = arr.getProperty(index);
		let value = propInfo ? propInfo.getValue() : UNDEFINED;

		yield cb(env, current, value);
	});
}

function* getObjectKey (env, keyNode) {
	if (keyNode.computed) {
		let key = (yield env.createExecutionContext(keyNode).execute()).result.getValue();
		if (key.isSymbol) {
			return key;
		}

		return yield toString(env, key);
	}

	return keyNode.name;
}

function* destructureObject (env, pattern, obj, cb) {
	yield each(pattern.properties, function* (current) {
		let key = yield getObjectKey(env, current.key);
		let propInfo = obj.getProperty(key);
		let value = propInfo ? propInfo.getValue() : UNDEFINED;

		yield cb(env, current.value, value);
	});
}
