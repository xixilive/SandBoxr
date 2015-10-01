import {UNDEFINED} from "../types/primitive-type";
import EstreeWalker from "../estree-walker";
import {visit as hoister} from "./hoister";
import * as contracts from "../utils/contracts";
import rules from "../syntax-rules";

function validateSyntax (root) {
	for (let node of EstreeWalker.create(root)) {
		if (node.type in rules) {
			rules[node.type](node, true);
		}
	}
}

export class Scope {
	constructor (env, scope) {
		env.globalScope = env.globalScope || this;

		this.scope = scope;
		this.env = env;
		this.priorScope = (env.current || env.globalScope).scope;
	}

	/**
	 * Initializes the scope by validating the function body and hoisting variables.
	 * @param {AST} node - The node to be executed.
	 * @returns {void}
	 */
	init (node) {
		if (!node) {
			return;
		}

		let env = this.env;
		this.scope.strict = contracts.isStrictNode(node.body);

		let strict = this.scope.strict || env.isStrict();
		if (strict && node.type === "Program") {
			validateSyntax(node);
		}

		hoister(node, decl => {
			let name = decl.name || decl.id.name;
			contracts.assertIsValidParameterName(name, strict);

			let value = UNDEFINED;
			if (decl.type === "FunctionDeclaration") {
				// functions can be used before they are defined
				let strictFunc = strict || contracts.isStrictNode(decl.body.body);
				value = env.objectFactory.createFunction(decl, undefined, { strict: strictFunc });
				value.bindScope(this);
			} else if (this.scope.hasProperty(name)) {
				return;
			}

			let newVar = env.createVariable(name, true);
			newVar.setValue(value);
		});
	}

	/**
	 * Loads the arguments into the scope and creates the special `arguments` object.
	 * @param {AST[]} params - The parameter identifiers
	 * @param {ObjectType[]} args - The argument values
	 * @param {FunctionType} callee - The function
	 * @returns {void}
	 */
	*loadArgs (params, args, callee) {
		let env = this.env;
		let scope = this.scope;

		let strict = env.isStrict() || callee.isStrict();
		let hasArgsObject = !callee.arrow;

		let argumentList;
		if (hasArgsObject) {
			argumentList = env.objectFactory.createArguments(args, callee, strict);
			scope.createVariable("arguments");
			scope.putValue("arguments", argumentList);
		}

		let paramLength = 0;
		if (params) {
			// only map parameters if we have simple parameters
			let shouldMap = hasArgsObject && !callee.isStrict() && params.every(p => p.type === "Identifier");

			for (let i = 0, ln = params.length; i < ln; i++) {
				let param = params[i];

				let value, name;
				if (param.type === "RestElement") {
					let argsLength = args.length;
					let rest = env.objectFactory.createArray();
					let restIndex = 0;

					while (paramLength < argsLength) {
						rest.putValue(restIndex++, args[paramLength++] || UNDEFINED, true, env);
					}

					name = param.argument.name;
					value = rest;
				} else if (param.type === "AssignmentPattern") {
					name = param.left.name;
					value = args[paramLength++];

					if (!value || value === UNDEFINED) {
						let rightValue = (yield env.createExecutionContext(param.right).execute()).result;
						value = rightValue && rightValue.getValue();
					}
				} else {
					name = param.name;

					if (shouldMap && !scope.hasProperty(name)) {
						let descriptor = scope.createVariable(name);
						if (args.length > paramLength) {
							argumentList.mapProperty(paramLength, descriptor);
						}
					}

					value = args[paramLength++];
				}

				contracts.assertIsValidParameterName(name, strict);
				scope.putValue(name, value || UNDEFINED, true, env);
			}
		}

		if (hasArgsObject) {
			// just set value if additional, unnamed arguments are passed in
			let i = callee.isStrict() ? 0 : paramLength;
			let length = args.length;

			for (; i < length; i++) {
				argumentList.defineOwnProperty(i, {
					value: args[i],
					configurable: true,
					enumerable: true,
					writable: true
				});
			}

			argumentList.defineOwnProperty("length", {
				value: env.objectFactory.createPrimitive(length),
				configurable: true,
				writable: true
			});
		}
	}

	/**
	 * Runs the passed in function and exits the scope when the function completes,
	 * returning the environment back to the previos state.
	 * @param {Function} inner - The function to execute.
	 * @returns {Iterator} The function results
	 */
	*use (inner) {
		try {
			let result = yield inner();
			this.exit();
			return result;
		} catch (err) {
			this.exit();
			throw err;
		}
	}

	/**
	 * Exits the scope, returning the environment to it's previous state.
	 * (Typically you would call `use` which handles exiting the scope itself.)
	 * @returns {void}
	 */
	exit () {
		this.env.setScope(this.priorScope);
	}
}
