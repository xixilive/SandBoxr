import * as contracts from "./utils/contracts";

function validateAssignment (left, strict) {
	if (strict && left.type === "Identifier") {
		contracts.assertIsValidName(left.name, true);
	}
}

const rules = {
	AssignmentExpression (node, strict) {
		validateAssignment(node.left, strict);
	},

	CatchClause (node, strict) {
		contracts.assertIsValidName(node.param.name, strict);
	},

	Identifier (node, strict) {
		contracts.assertIsValidIdentifier(node.name, strict);
	},

	FunctionDeclaration (node, strict) {
		contracts.assertIsValidName(node.id.name, strict);
		contracts.assertAreValidArguments(node.params, strict);
	},

	FunctionExpression (node, strict) {
		if (node.id) {
			contracts.assertIsValidName(node.id.name, strict);
		}

		contracts.assertAreValidArguments(node.params, strict);
	},

	Literal (node, strict) {
		if (strict && node.raw) {
			if (contracts.isOctalLiteral(node.raw, node.value)) {
				throw SyntaxError("Octal literals are not allowed in strict mode.");
			}
		}
	},

	UpdateExpression (node, strict) {
		validateAssignment(node.argument, strict);
	},

	VariableDeclarator (node, strict) {
		contracts.assertIsValidName(node.id.name, strict);
	},

	WithStatement (node, strict) {
		if (strict) {
			throw SyntaxError("Strict mode code may not include a with statement");
		}
	}
};

export default rules;
