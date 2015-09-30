import ArrayExpression from "./array-expression";
import AssignmentExpression from "./assignment-expression";
import BinaryExpression from "./binary-expression";
import BlockStatement from "./block-statement";
import BreakStatement from "./interrupt-statement";
import CallExpression from "./call-expression";
import ConditionalExpression from "./if-statement";
import DebuggerStatement from "./debugger-statement";
import DoWhileStatement from "./do-while-statement.js";
import EmptyStatement from "./empty-statement";
import ExpressionStatement from "./expression-statement";
import ForStatement from "./for-statement";
import ForInStatement from "./for-in-statement";
import FunctionDeclaration from "./function-declaration";
import FunctionExpression from "./function-expression";
import Identifier from "./identifier";
import LabeledStatement from "./labeled-statement";
import Literal from "./literal";
import LogicalExpression from "./logical-expression";
import MemberExpression from "./member-expression";
import MetaProperty from "./meta-property";
import ObjectExpression from "./object-expression";
import ReturnStatement from "./return-statement";
import SequenceExpression from "./sequence-expression";
import SwitchStatement from "./switch-statement";
import TaggedTemplateExpression from "./tagged-template-expression";
import TemplateLiteral from "./template-literal";
import ThisExpression from "./this-expression";
import ThrowStatement from "./throw-statement";
import TryStatement from "./try-statement";
import UnaryExpression from "./unary-expression";
import UpdateExpression from "./update-expression";
import VariableDeclaration from "./variable-declaration";
import VariableDeclarator from "./variable-declarator";
import WithStatement from "./with-statement";

const visitors = {
	ArrayExpression,
	AssignmentExpression,
	BinaryExpression,
	BlockStatement,
	BreakStatement,
	CallExpression,
	ConditionalExpression,
	DebuggerStatement,
	DoWhileStatement,
	EmptyStatement,
	ExpressionStatement,
	ForStatement,
	ForInStatement,
	FunctionDeclaration,
	FunctionExpression,
	Identifier,
	LabeledStatement,
	Literal,
	LogicalExpression,
	MemberExpression,
	MetaProperty,
	ObjectExpression,
	ReturnStatement,
	SequenceExpression,
	SwitchStatement,
	TaggedTemplateExpression,
	TemplateLiteral,
	ThisExpression,
	ThrowStatement,
	TryStatement,
	UnaryExpression,
	UpdateExpression,
	VariableDeclaration,
	VariableDeclarator,
	WithStatement,

	ArrowFunctionExpression: FunctionExpression,
	ContinueStatement: BreakStatement,
	IfStatement: ConditionalExpression,
	NewExpression: CallExpression,
	Program: BlockStatement,
	WhileStatement: DoWhileStatement
};

export default {
	*visit (context) {
		if (!(context.node.type in visitors)) {
			throw new TypeError("No handler defined for: " + context.node.type);
		}

		return yield visitors[context.node.type](context);
	}
};
