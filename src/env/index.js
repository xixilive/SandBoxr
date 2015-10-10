import {UNDEFINED} from "../types/primitive-type";
import {ExecutionContext} from "../execution-context";
import {DeclarativeEnvironment} from "./declarative-environment";
import {ObjectEnvironment} from "./object-environment";
import {Reference} from "./reference";
import ecma5 from "../ecma-5.1";
import ecma6 from "../ecma-6";
import operators from "../utils/operators";
import * as contracts from "../utils/contracts";
import {Scope} from "./scope";

let defaultOptions = {
	allowDebugger: false,
	useStrict: false,
	ecmaVersion: 5
};

export class Environment {
	init (options = defaultOptions) {
		// clear state in case of re-init
		this.current = null;
		this.globalScope = null;

		this.options = Object.assign({}, defaultOptions, options);
		(options.ecmaVersion === 6 ? ecma6 : ecma5)(this);

		// todo: improve this
		this.ops = Object.assign(operators, options.operators);
		this.ops.env = this;

		this.objectFactory.init();

		if (options.exclude && options.exclude.length > 0) {
			options.exclude.forEach(name => {
				let segments = name.split(".");
				let parent = this.global;

				while (segments.length > 1) {
					parent = parent.getValue(segments.shift());

					// api not defined - assume user error?
					if (!parent) {
						return;
					}
				}

				parent.remove(segments.shift());
			});
		}
	}

	/**
	 * Gets a reference from the environment
	 * @param {String} key - The key of the property
	 * @returns {Reference} The reference.
	 */
	getReference (key) {
		let scope = this.current && this.current.scope;
		while (scope) {
			if (scope.owns(key)) {
				return scope.getReference(key, true);
			}

			scope = scope.parent;
		}

		return new Reference(key, undefined, this);
	}

	getValue (key) {
		return this.getReference(key).getValue();
	}

	putValue (key, value, strict) {
		this.current.scope.putValue(key, value, strict);
	}

	has (key) {
		return this.current.scope.has(key);
	}

	deleteVariable (key) {
		this.current.scope.deleteVariable(key);
	}

	/**
	 * Declares a variable within the current scope.
	 * @param {String} key - the key of the variable.
	 * @param {Boolean} [immutable] - whether the variable is immutable or not.
	 * @returns {PropertyDescriptor} The property descriptor for the new variabble.
	 */
	createVariable (key, immutable) {
		contracts.assertIsValidIdentifier(key, this.isStrict());
		return this.current.scope.createVariable(key, !immutable);
	}

	/**
	 * Indicates whether the current lexical scope is in strict mode.
	 * @returns {Boolean} true if in strict mode; false otherwise.
	 */
	isStrict () {
		if (this.options.useStrict) {
			return true;
		}

		let scope = this.current && this.current.scope;
		while (scope) {
			if (scope.strict) {
				return true;
			}

			scope = scope.parent;
		}

		return false;
	}

	/**
	 * Gets the current `this` object for the environment.
	 * @returns {ObjectType} The `this` object for the current scope.
	 */
	getThisBinding () {
		let thisArg = this.current.scope.getThisBinding();
		if (thisArg) {
			return thisArg;
		}

		if (this.isStrict()) {
			return UNDEFINED;
		}

		return this.global;
	}

	createExecutionContext (node, callee, isNew) {
		return new ExecutionContext(this, node, callee, isNew);
	}

	/**
	 * Creates a new declarative scope.
	 * @param {ObjectType} [thisArg] - The `this` binding for the new scope.
	 * @returns {Scope} The new scope.
	 */
	createScope (thisArg) {
		return this.setScope(new DeclarativeEnvironment(this.current, thisArg, this));
	}

	/**
	 * Creates a new scope based on the provided object. This is used for the `with`
	 * statement, as well as the global scope.
	 * @param {ObjectType} obj - The object to bind the scope to.
	 * @param {ObjectType} [thisArg] - The `this` binding for the new scope.
	 * @returns {Scope} The new scope.
	 */
	createObjectScope (obj, thisArg) {
		return this.setScope(new ObjectEnvironment(this.current, obj, thisArg, this));
	}

	/**
	 * Sets the current scope.
	 * @param {Environment} scope - Sets the current environment.
	 * @returns {Scope} The created scope.
	 */
	setScope (scope) {
		return this.current = new Scope(this, scope);
	}
}
