var convert = require("../utils/convert");

module.exports = function LogicalExpression (context) {
	var left = context.create(context.node.left).execute();
	var passed = convert.toBoolean(left.result.getValue());

	if (passed && context.node.operator === "||") {
		return left;
	}

	if (!passed && context.node.operator === "&&") {
		return left;
	}

	return context.create(context.node.right).execute();
};