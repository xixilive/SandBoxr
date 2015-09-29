import {UNDEFINED} from "../types/primitive-type";
import {each} from "../utils/async";
import {toString} from "../utils/native";

function* assign (context, leftNode, rightValue) {
	switch (leftNode.type) {
		case "Identifier":
		case "MemberExpression":
			let left = (yield context.create(leftNode).execute()).result;
			left.setValue(rightValue);
			break;

		case "ArrayPattern":
			yield destructureArray(context, leftNode, rightValue);
			break;

		case "ObjectPattern":
			yield destructureObject(context, leftNode, rightValue);
			break;

		case "AssignmentPattern":
			yield handleDefault(context, leftNode, rightValue);
			break;

		default:
			throw new Error(leftNode.type + " not implemented");
	}

	return rightValue;
}

function* handleDefault (context, left, rightValue) {
	if (rightValue === UNDEFINED) {
		let defaultValue = (yield context.create(left.right).execute());
		rightValue = defaultValue.result.getValue();
	}

	yield assign(context, left.left, rightValue);
}

function* destructureArray (context, pattern, arr) {
	yield each(pattern.elements, function* (current, index) {
		let propInfo = arr.getProperty(index);
		let value = propInfo ? propInfo.getValue() : UNDEFINED;

		yield assign(context, current, value);
	});
}

function* getObjectKey (context, keyNode) {
	if (keyNode.computed) {
		let key = (yield context.create(keyNode).execute()).result.getValue();
		if (key.isSymbol) {
			return key;
		}

		return yield toString(context.env, key);
	}

	return keyNode.name;
}

function* destructureObject (context, pattern, obj) {
	yield each(pattern.properties, function* (current) {
		let key = yield getObjectKey(context, current.key);
		let propInfo = obj.getProperty(key);
		let value = propInfo ? propInfo.getValue() : UNDEFINED;

		yield assign(context, current.value, value);
	});
}

export default function* AssignmentExpression (context) {
	let right = (yield context.create(context.node.right).execute()).result;
	let rightValue = right.getValue();

	if (context.node.operator === "=") {
		yield assign(context, context.node.left, rightValue);
	} else {
		let left = (yield context.create(context.node.left).execute()).result;

		// remove equals
		let op = context.node.operator.slice(0, -1);

		let nativeValue = yield context.env.ops[op](left.getValue(), right.getValue());
		left.setValue(context.env.objectFactory.createPrimitive(nativeValue));
	}

	return context.result(rightValue);
}
