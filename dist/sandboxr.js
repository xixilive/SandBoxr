(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SandBoxr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

require("./polyfills");

var _env = require("./env");

var _env2 = _interopRequireDefault(_env);

var _executionContext = require("./execution-context");

var _executionContext2 = _interopRequireDefault(_executionContext);

var _utilsAsync = require("./utils/async");

var SandBoxr = (function () {
	function SandBoxr(ast) {
		var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		_classCallCheck(this, SandBoxr);

		this.ast = ast;
		this.config = config;
	}

	_createClass(SandBoxr, [{
		key: "execute",
		value: function execute(env) {
			if (!env) {
				env = SandBoxr.createEnvironment();
				env.init(this.config);
			}

			this.env = env;
			var response = undefined;

			try {
				response = new _executionContext2["default"](env, this.ast).execute();
			} catch (err) {
				return _Promise.reject(err);
			}

			// convert to promise
			return (0, _utilsAsync.promisify)(response).then(function (r) {
				return r && r.result;
			});
		}
	}], [{
		key: "createEnvironment",
		value: function createEnvironment() {
			return new _env2["default"]();
		}
	}, {
		key: "create",
		value: function create(ast, config) {
			return new SandBoxr(ast, config);
		}
	}]);

	return SandBoxr;
})();

exports["default"] = SandBoxr;
module.exports = exports["default"];
},{"./env":181,"./execution-context":187,"./polyfills":194,"./utils/async":208,"babel-runtime/core-js/promise":10,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/interop-require-default":18}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":27}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/math/sign"), __esModule: true };
},{"core-js/library/fn/math/sign":28}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":29}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":30}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":31}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":32}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":33}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":34}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":35}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":36}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":37}],13:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],14:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":6}],15:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = function (obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":6}],16:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;
    if (object === null) object = Function.prototype;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":7}],17:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":5,"babel-runtime/core-js/object/set-prototype-of":9}],18:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],19:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
};

exports.__esModule = true;
},{}],20:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  delete g.regeneratorRuntime;
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./runtime":21}],21:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = _Object$create((outerFn || Generator).prototype);

    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = _Object$create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function (unwrapped) {
        // When a yielded Promise is resolved, its final value becomes
        // the .value of the Promise<{value,done}> result for the
        // current iteration. If the Promise is rejected, however, the
        // result for this iteration will be rejected with the same
        // reason. Note that rejections of yielded Promises are not
        // thrown back into the generator function, as is the case
        // when an awaited Promise is rejected. This difference in
        // behavior between yield and await is important, because it
        // allows the consumer to decide what to do with the yielded
        // rejection (swallow it and continue, manually .throw it back
        // into the generator, abandon iteration, whatever). With
        // await, by contrast, there is no opportunity to examine the
        // rejection reason outside the generator function, so the
        // only option is to throw it from the await expression, and
        // let the generator function handle the exception.
        result.value = unwrapped;
        return result;
      });
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      var enqueueResult =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(function () {
        return invoke(method, arg);
      }) : new _Promise(function (resolve) {
        resolve(invoke(method, arg));
      });

      // Avoid propagating enqueueResult failures to Promises returned by
      // later invocations of the iterator.
      previousPromise = enqueueResult["catch"](function (ignored) {});

      return enqueueResult;
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":22,"babel-runtime/core-js/object/create":5,"babel-runtime/core-js/promise":10,"babel-runtime/core-js/symbol":11,"babel-runtime/core-js/symbol/iterator":12}],22:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],23:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":109,"../modules/es6.object.to-string":160,"../modules/es6.promise":161,"../modules/es6.string.iterator":162,"../modules/web.dom.iterable":165}],24:[function(require,module,exports){
require('../modules/es6.symbol');
module.exports = require('../modules/$.core').Symbol;
},{"../modules/$.core":109,"../modules/es6.symbol":164}],25:[function(require,module,exports){
require('../../modules/es6.math.sign');
module.exports = require('../../modules/$.core').Math.sign;
},{"../../modules/$.core":109,"../../modules/es6.math.sign":159}],26:[function(require,module,exports){
require('../../modules/es6.string.repeat');
module.exports = require('../../modules/$.core').String.repeat;
},{"../../modules/$.core":109,"../../modules/es6.string.repeat":163}],27:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":93,"../modules/es6.string.iterator":102,"../modules/web.dom.iterable":104}],28:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"../../modules/$.core":43,"../../modules/es6.math.sign":95,"dup":25}],29:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":43,"../../modules/es6.object.assign":96}],30:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":67}],31:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":67}],32:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-descriptor');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":67,"../../modules/es6.object.get-own-property-descriptor":97}],33:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":43,"../../modules/es6.object.keys":98}],34:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":43,"../../modules/es6.object.set-prototype-of":99}],35:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"../modules/$.core":43,"../modules/es6.object.to-string":100,"../modules/es6.promise":101,"../modules/es6.string.iterator":102,"../modules/web.dom.iterable":104,"dup":23}],36:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":43,"../../modules/es6.symbol":103}],37:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":91,"../../modules/es6.string.iterator":102,"../../modules/web.dom.iterable":104}],38:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],39:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":59}],40:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var toObject = require('./$.to-object')
  , IObject  = require('./$.iobject')
  , enumKeys = require('./$.enum-keys');
/* eslint-disable no-unused-vars */
module.exports = Object.assign || function assign(target, source){
/* eslint-enable no-unused-vars */
  var T = toObject(target)
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = IObject(arguments[i++])
      , keys   = enumKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$.enum-keys":48,"./$.iobject":57,"./$.to-object":88}],41:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":42,"./$.wks":91}],42:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],43:[function(require,module,exports){
var core = module.exports = {};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],44:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.a-function":38}],45:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , PROTOTYPE = 'prototype';
var ctx = function(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
};
var $def = function(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && typeof target[key] != 'function')exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp[PROTOTYPE] = C[PROTOTYPE];
    }(out);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
module.exports = $def;
},{"./$.core":43,"./$.global":52}],46:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],47:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":52,"./$.is-object":59}],48:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":67}],49:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],50:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":39,"./$.ctx":44,"./$.is-array-iter":58,"./$.iter-call":61,"./$.to-length":87,"./core.get-iterator-method":92}],51:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toString  = {}.toString
  , toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":67,"./$.to-iobject":86}],52:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var UNDEFINED = 'undefined';
var global = module.exports = typeof window != UNDEFINED && window.Math == Math
  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],53:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],54:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.support-desc') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":67,"./$.property-desc":73,"./$.support-desc":82}],55:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":52}],56:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],57:[function(require,module,exports){
// indexed object, fallback for non-array-like ES3 strings
var cof = require('./$.cof');
module.exports = 0 in Object('z') ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":42}],58:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./$.iterators')
  , ITERATOR  = require('./$.wks')('iterator');
module.exports = function(it){
  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
};
},{"./$.iterators":66,"./$.wks":91}],59:[function(require,module,exports){
// http://jsperf.com/core-js-isobject
module.exports = function(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
};
},{}],60:[function(require,module,exports){
// Safari has buggy iterators w/o `next`
module.exports = 'keys' in [] && !('next' in [].keys());
},{}],61:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":39}],62:[function(require,module,exports){
'use strict';
var $ = require('./$')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: require('./$.property-desc')(1,next)});
  require('./$.tag')(Constructor, NAME + ' Iterator');
};
},{"./$":67,"./$.hide":54,"./$.property-desc":73,"./$.tag":83,"./$.wks":91}],63:[function(require,module,exports){
'use strict';
var LIBRARY         = require('./$.library')
  , $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , hide            = require('./$.hide')
  , has             = require('./$.has')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , Iterators       = require('./$.iterators')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values';
var returnThis = function(){ return this; };
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  require('./$.iter-create')(Constructor, NAME, next);
  var createMethod = function(kind){
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = require('./$').getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    require('./$.tag')(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
  }
  // Define iterator
  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$redef(proto, key, methods[key]);
    } else $def($def.P + $def.F * require('./$.iter-buggy'), NAME, methods);
  }
};
},{"./$":67,"./$.def":45,"./$.has":53,"./$.hide":54,"./$.iter-buggy":60,"./$.iter-create":62,"./$.iterators":66,"./$.library":69,"./$.redef":74,"./$.tag":83,"./$.wks":91}],64:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":91}],65:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],66:[function(require,module,exports){
module.exports = {};
},{}],67:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],68:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":67,"./$.to-iobject":86}],69:[function(require,module,exports){
module.exports = true;
},{}],70:[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , isNode    = require('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    if(domain)domain.enter();
    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
}

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":42,"./$.global":52,"./$.task":84}],71:[function(require,module,exports){
var $redef = require('./$.redef');
module.exports = function(target, src){
  for(var key in src)$redef(target, key, src[key]);
  return target;
};
},{"./$.redef":74}],72:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
module.exports = function(KEY, exec){
  var $def = require('./$.def')
    , fn   = (require('./$.core').Object || {})[KEY] || Object[KEY]
    , exp  = {};
  exp[KEY] = exec(fn);
  $def($def.S + $def.F * require('./$.fails')(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":43,"./$.def":45,"./$.fails":49}],73:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],74:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":54}],75:[function(require,module,exports){
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],76:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
    ? function(buggy, set){
        try {
          set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
          set({}, []);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }()
    : undefined),
  check: check
};
},{"./$":67,"./$.an-object":39,"./$.ctx":44,"./$.is-object":59}],77:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":52}],78:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
},{}],79:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if(require('./$.support-desc') && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":67,"./$.support-desc":82,"./$.wks":91}],80:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],81:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":46,"./$.to-integer":85}],82:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":49}],83:[function(require,module,exports){
var has  = require('./$.has')
  , hide = require('./$.hide')
  , TAG  = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
};
},{"./$.has":53,"./$.hide":54,"./$.wks":91}],84:[function(require,module,exports){
'use strict';
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScript){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":42,"./$.ctx":44,"./$.dom-create":47,"./$.global":52,"./$.html":55,"./$.invoke":56}],85:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],86:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":46,"./$.iobject":57}],87:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":85}],88:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":46}],89:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],90:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],91:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || require('./$.uid'))('Symbol.' + name));
};
},{"./$.global":52,"./$.shared":77,"./$.uid":89}],92:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};
},{"./$.classof":41,"./$.core":43,"./$.iterators":66,"./$.wks":91}],93:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":39,"./$.core":43,"./core.get-iterator-method":92}],94:[function(require,module,exports){
'use strict';
var setUnscope = require('./$.unscope')
  , step       = require('./$.iter-step')
  , Iterators  = require('./$.iterators')
  , toIObject  = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$.iter-define":63,"./$.iter-step":65,"./$.iterators":66,"./$.to-iobject":86,"./$.unscope":90}],95:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $def = require('./$.def');

$def($def.S, 'Math', {sign: require('./$.sign')});
},{"./$.def":45,"./$.sign":78}],96:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":40,"./$.def":45}],97:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./$.to-iobject');

require('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":72,"./$.to-iobject":86}],98:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":72,"./$.to-object":88}],99:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $def = require('./$.def');
$def($def.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.def":45,"./$.set-proto":76}],100:[function(require,module,exports){

},{}],101:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $def       = require('./$.def')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same')
  , species    = require('./$.species')
  , SPECIES    = require('./$.wks')('species')
  , RECORD     = require('./$.uid')('record')
  , asap       = require('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var useNative = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.support-desc')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var isPromise = function(it){
  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
};
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(react){
      var cb = ok ? react.ok : react.fail
        , ret, then;
      try {
        if(cb){
          if(!ok)record.h = true;
          ret = cb === true ? value : cb(value);
          if(ret === react.P){
            react.rej(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(ret)){
            then.call(ret, react.res, react.rej);
          } else react.res(ret);
        } else react.rej(value);
      } catch(err){
        react.rej(err);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      asap(function(){
        if(isUnhandled(record.p)){
          if(isNode){
            process.emit('unhandledRejection', value, record.p);
          } else if(global.console && console.error){
            console.error('Unhandled promise rejection', value);
          }
        }
        record.a = undefined;
      });
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise[RECORD]
    , chain  = record.a || record.c
    , i      = 0
    , react;
  if(record.h)return false;
  while(chain.length > i){
    react = chain[i++];
    if(react.fail || !isUnhandled(react.P))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!useNative){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    this[RECORD] = record;
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.mix')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var S = anObject(anObject(this).constructor)[SPECIES];
      var react = {
        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
        fail: typeof onRejected == 'function'  ? onRejected  : false
      };
      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
        react.res = aFunction(res);
        react.rej = aFunction(rej);
      });
      var record = this[RECORD];
      record.c.push(react);
      if(record.a)record.a.push(react);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

// export
$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
require('./$.tag')(P, PROMISE);
species(P);
species(Wrapper = require('./$.core')[PROMISE]);

// statics
$def($def.S + $def.F * !useNative, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    return new this(function(res, rej){ rej(r); });
  }
});
$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    return isPromise(x) && sameConstructor(x.constructor, this)
      ? x : new this(function(res){ res(x); });
  }
});
$def($def.S + $def.F * !(useNative && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(res, rej){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || res(results);
        }, rej);
      });
      else res(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C = getConstructor(this);
    return new C(function(res, rej){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(res, rej);
      });
    });
  }
});
},{"./$":67,"./$.a-function":38,"./$.an-object":39,"./$.classof":41,"./$.core":43,"./$.ctx":44,"./$.def":45,"./$.for-of":50,"./$.global":52,"./$.is-object":59,"./$.iter-detect":64,"./$.library":69,"./$.microtask":70,"./$.mix":71,"./$.same":75,"./$.set-proto":76,"./$.species":79,"./$.strict-new":80,"./$.support-desc":82,"./$.tag":83,"./$.uid":89,"./$.wks":91}],102:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":63,"./$.string-at":81}],103:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , SUPPORT_DESC   = require('./$.support-desc')
  , $def           = require('./$.def')
  , $redef         = require('./$.redef')
  , shared         = require('./$.shared')
  , setTag         = require('./$.tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

var setSymbolDesc = SUPPORT_DESC ? function(){ // fallback for old Android
  try {
    return _create(setDesc({}, HIDDEN, {
      get: function(){
        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
      }
    }))[HIDDEN] || setDesc;
  } catch(e){
    return function(it, key, D){
      var protoDesc = getDesc(ObjectProto, key);
      if(protoDesc)delete ObjectProto[key];
      setDesc(it, key, D);
      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
    };
  }
}() : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments[0]));
  };
  $redef($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(SUPPORT_DESC && !require('./$.library')){
    $redef(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

// MS Edge converts symbols to JSON as '{}'
if(!useNative || require('./$.fails')(function(){
  return JSON.stringify([$Symbol()]) != '[null]';
}))$redef($Symbol.prototype, 'toJSON', function toJSON(){ /* return undefined */ });

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
    'species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), function(it){
    var sym = wks(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  }
);

setter = true;

$def($def.G + $def.W, {Symbol: $Symbol});

$def($def.S, 'Symbol', symbolStatics);

$def($def.S + $def.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setTag(global.JSON, 'JSON', true);
},{"./$":67,"./$.an-object":39,"./$.def":45,"./$.enum-keys":48,"./$.fails":49,"./$.get-names":51,"./$.global":52,"./$.has":53,"./$.keyof":68,"./$.library":69,"./$.property-desc":73,"./$.redef":74,"./$.shared":77,"./$.support-desc":82,"./$.tag":83,"./$.to-iobject":86,"./$.uid":89,"./$.wks":91}],104:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":66,"./es6.array.iterator":94}],105:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"dup":38}],106:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"./$.is-object":125,"dup":39}],107:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"./$.cof":108,"./$.wks":156,"dup":41}],108:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],109:[function(require,module,exports){
arguments[4][43][0].apply(exports,arguments)
},{"dup":43}],110:[function(require,module,exports){
arguments[4][44][0].apply(exports,arguments)
},{"./$.a-function":105,"dup":44}],111:[function(require,module,exports){
var global     = require('./$.global')
  , core       = require('./$.core')
  , hide       = require('./$.hide')
  , $redef     = require('./$.redef')
  , PROTOTYPE  = 'prototype';
var ctx = function(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
};
var $def = function(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    if(type & $def.B && own)exp = ctx(out, global);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target && !own)$redef(target, key, out);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
global.core = core;
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
module.exports = $def;
},{"./$.core":109,"./$.global":118,"./$.hide":120,"./$.redef":139}],112:[function(require,module,exports){
arguments[4][46][0].apply(exports,arguments)
},{"dup":46}],113:[function(require,module,exports){
arguments[4][47][0].apply(exports,arguments)
},{"./$.global":118,"./$.is-object":125,"dup":47}],114:[function(require,module,exports){
arguments[4][48][0].apply(exports,arguments)
},{"./$":133,"dup":48}],115:[function(require,module,exports){
arguments[4][49][0].apply(exports,arguments)
},{"dup":49}],116:[function(require,module,exports){
arguments[4][50][0].apply(exports,arguments)
},{"./$.an-object":106,"./$.ctx":110,"./$.is-array-iter":124,"./$.iter-call":127,"./$.to-length":153,"./core.get-iterator-method":157,"dup":50}],117:[function(require,module,exports){
arguments[4][51][0].apply(exports,arguments)
},{"./$":133,"./$.to-iobject":152,"dup":51}],118:[function(require,module,exports){
arguments[4][52][0].apply(exports,arguments)
},{"dup":52}],119:[function(require,module,exports){
arguments[4][53][0].apply(exports,arguments)
},{"dup":53}],120:[function(require,module,exports){
arguments[4][54][0].apply(exports,arguments)
},{"./$":133,"./$.property-desc":138,"./$.support-desc":148,"dup":54}],121:[function(require,module,exports){
arguments[4][55][0].apply(exports,arguments)
},{"./$.global":118,"dup":55}],122:[function(require,module,exports){
arguments[4][56][0].apply(exports,arguments)
},{"dup":56}],123:[function(require,module,exports){
arguments[4][57][0].apply(exports,arguments)
},{"./$.cof":108,"dup":57}],124:[function(require,module,exports){
arguments[4][58][0].apply(exports,arguments)
},{"./$.iterators":132,"./$.wks":156,"dup":58}],125:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"dup":59}],126:[function(require,module,exports){
arguments[4][60][0].apply(exports,arguments)
},{"dup":60}],127:[function(require,module,exports){
arguments[4][61][0].apply(exports,arguments)
},{"./$.an-object":106,"dup":61}],128:[function(require,module,exports){
arguments[4][62][0].apply(exports,arguments)
},{"./$":133,"./$.hide":120,"./$.property-desc":138,"./$.tag":149,"./$.wks":156,"dup":62}],129:[function(require,module,exports){
arguments[4][63][0].apply(exports,arguments)
},{"./$":133,"./$.def":111,"./$.has":119,"./$.hide":120,"./$.iter-buggy":126,"./$.iter-create":128,"./$.iterators":132,"./$.library":135,"./$.redef":139,"./$.tag":149,"./$.wks":156,"dup":63}],130:[function(require,module,exports){
arguments[4][64][0].apply(exports,arguments)
},{"./$.wks":156,"dup":64}],131:[function(require,module,exports){
arguments[4][65][0].apply(exports,arguments)
},{"dup":65}],132:[function(require,module,exports){
arguments[4][66][0].apply(exports,arguments)
},{"dup":66}],133:[function(require,module,exports){
arguments[4][67][0].apply(exports,arguments)
},{"dup":67}],134:[function(require,module,exports){
arguments[4][68][0].apply(exports,arguments)
},{"./$":133,"./$.to-iobject":152,"dup":68}],135:[function(require,module,exports){
module.exports = false;
},{}],136:[function(require,module,exports){
arguments[4][70][0].apply(exports,arguments)
},{"./$.cof":108,"./$.global":118,"./$.task":150,"dup":70}],137:[function(require,module,exports){
arguments[4][71][0].apply(exports,arguments)
},{"./$.redef":139,"dup":71}],138:[function(require,module,exports){
arguments[4][73][0].apply(exports,arguments)
},{"dup":73}],139:[function(require,module,exports){
// add fake Function#toString
// for correct work wrapped methods / constructors with methods like LoDash isNative
var global    = require('./$.global')
  , hide      = require('./$.hide')
  , SRC       = require('./$.uid')('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

require('./$.core').inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  if(typeof val == 'function'){
    hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if(!('name' in val))val.name = key;
  }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe)delete O[key];
    hide(O, key, val);
  }
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
},{"./$.core":109,"./$.global":118,"./$.hide":120,"./$.uid":154}],140:[function(require,module,exports){
arguments[4][75][0].apply(exports,arguments)
},{"dup":75}],141:[function(require,module,exports){
arguments[4][76][0].apply(exports,arguments)
},{"./$":133,"./$.an-object":106,"./$.ctx":110,"./$.is-object":125,"dup":76}],142:[function(require,module,exports){
arguments[4][77][0].apply(exports,arguments)
},{"./$.global":118,"dup":77}],143:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"dup":78}],144:[function(require,module,exports){
arguments[4][79][0].apply(exports,arguments)
},{"./$":133,"./$.support-desc":148,"./$.wks":156,"dup":79}],145:[function(require,module,exports){
arguments[4][80][0].apply(exports,arguments)
},{"dup":80}],146:[function(require,module,exports){
arguments[4][81][0].apply(exports,arguments)
},{"./$.defined":112,"./$.to-integer":151,"dup":81}],147:[function(require,module,exports){
'use strict';
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};
},{"./$.defined":112,"./$.to-integer":151}],148:[function(require,module,exports){
arguments[4][82][0].apply(exports,arguments)
},{"./$.fails":115,"dup":82}],149:[function(require,module,exports){
arguments[4][83][0].apply(exports,arguments)
},{"./$.has":119,"./$.hide":120,"./$.wks":156,"dup":83}],150:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"./$.cof":108,"./$.ctx":110,"./$.dom-create":113,"./$.global":118,"./$.html":121,"./$.invoke":122,"dup":84}],151:[function(require,module,exports){
arguments[4][85][0].apply(exports,arguments)
},{"dup":85}],152:[function(require,module,exports){
arguments[4][86][0].apply(exports,arguments)
},{"./$.defined":112,"./$.iobject":123,"dup":86}],153:[function(require,module,exports){
arguments[4][87][0].apply(exports,arguments)
},{"./$.to-integer":151,"dup":87}],154:[function(require,module,exports){
arguments[4][89][0].apply(exports,arguments)
},{"dup":89}],155:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./$.wks')('unscopables');
if(!(UNSCOPABLES in []))require('./$.hide')(Array.prototype, UNSCOPABLES, {});
module.exports = function(key){
  [][UNSCOPABLES][key] = true;
};
},{"./$.hide":120,"./$.wks":156}],156:[function(require,module,exports){
arguments[4][91][0].apply(exports,arguments)
},{"./$.global":118,"./$.shared":142,"./$.uid":154,"dup":91}],157:[function(require,module,exports){
arguments[4][92][0].apply(exports,arguments)
},{"./$.classof":107,"./$.core":109,"./$.iterators":132,"./$.wks":156,"dup":92}],158:[function(require,module,exports){
arguments[4][94][0].apply(exports,arguments)
},{"./$.iter-define":129,"./$.iter-step":131,"./$.iterators":132,"./$.to-iobject":152,"./$.unscope":155,"dup":94}],159:[function(require,module,exports){
arguments[4][95][0].apply(exports,arguments)
},{"./$.def":111,"./$.sign":143,"dup":95}],160:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./$.classof')
  , test    = {};
test[require('./$.wks')('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  require('./$.redef')(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}
},{"./$.classof":107,"./$.redef":139,"./$.wks":156}],161:[function(require,module,exports){
arguments[4][101][0].apply(exports,arguments)
},{"./$":133,"./$.a-function":105,"./$.an-object":106,"./$.classof":107,"./$.core":109,"./$.ctx":110,"./$.def":111,"./$.for-of":116,"./$.global":118,"./$.is-object":125,"./$.iter-detect":130,"./$.library":135,"./$.microtask":136,"./$.mix":137,"./$.same":140,"./$.set-proto":141,"./$.species":144,"./$.strict-new":145,"./$.support-desc":148,"./$.tag":149,"./$.uid":154,"./$.wks":156,"dup":101}],162:[function(require,module,exports){
arguments[4][102][0].apply(exports,arguments)
},{"./$.iter-define":129,"./$.string-at":146,"dup":102}],163:[function(require,module,exports){
var $def = require('./$.def');

$def($def.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./$.string-repeat')
});
},{"./$.def":111,"./$.string-repeat":147}],164:[function(require,module,exports){
arguments[4][103][0].apply(exports,arguments)
},{"./$":133,"./$.an-object":106,"./$.def":111,"./$.enum-keys":114,"./$.fails":115,"./$.get-names":117,"./$.global":118,"./$.has":119,"./$.keyof":134,"./$.library":135,"./$.property-desc":138,"./$.redef":139,"./$.shared":142,"./$.support-desc":148,"./$.tag":149,"./$.to-iobject":152,"./$.uid":154,"./$.wks":156,"dup":103}],165:[function(require,module,exports){
require('./es6.array.iterator');
var global      = require('./$.global')
  , hide        = require('./$.hide')
  , Iterators   = require('./$.iterators')
  , ITERATOR    = require('./$.wks')('iterator')
  , NL          = global.NodeList
  , HTC         = global.HTMLCollection
  , NLProto     = NL && NL.prototype
  , HTCProto    = HTC && HTC.prototype
  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
if(NL && !(ITERATOR in NLProto))hide(NLProto, ITERATOR, ArrayValues);
if(HTC && !(ITERATOR in HTCProto))hide(HTCProto, ITERATOR, ArrayValues);
},{"./$.global":118,"./$.hide":120,"./$.iterators":132,"./$.wks":156,"./es6.array.iterator":158}],166:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = arrayApi;

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _utilsFunc = require("../utils/func");

var func = _interopRequireWildcard(_utilsFunc);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _iterators = require("../iterators");

var _iterators2 = _interopRequireDefault(_iterators);

function getStartIndex(index, length) {
	if (index < 0) {
		return Math.max(length - Math.abs(index), 0);
	}

	return Math.min(index || 0, length);
}

function getEndIndex(index, length) {
	if (index < 0) {
		return Math.max(length + index, 0);
	}

	return Math.min(index, length);
}

function getLength(env, source) {
	if (source.hasProperty("length")) {
		return convert.toUInt32(env, source.getValue("length"));
	}

	return 0;
}

function arrayApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;
	var undef = globalObject.getValue("undefined");

	function executeCallback(callback, entry, thisArg, arr) {
		if (!thisArg) {
			thisArg = callback.isStrict() ? undef : env.global;
		}

		var scope = env.createScope(thisArg);
		scope.init(callback.node.body);

		var args = [entry.value, objectFactory.createPrimitive(entry.index), arr];
		scope.loadArgs(callback.node.params, args, callback);

		return scope.use(function () {
			var executionResult = env.createExecutionContext(callback.node.body, callback.node).execute();
			return executionResult ? executionResult.result : undef;
		});
	}

	function executeAccumulator(callback, priorValue, entry, arr) {
		var scope = env.createScope();
		scope.init(callback.node.body);

		var args = [priorValue || undef, entry.value || undef, objectFactory.createPrimitive(entry.index), arr];
		scope.loadArgs(callback.node.params, args, callback);

		return scope.use(function () {
			var executionResult = env.createExecutionContext(callback.node.body, callback.node).execute();
			return executionResult ? executionResult.result : undef;
		});
	}

	function createIndexProperty(value) {
		return {
			value: value,
			configurable: true,
			enumerable: true,
			writable: true
		};
	}

	var arrayClass = objectFactory.createFunction(function (length) {
		var newArray = objectFactory.create("Array");

		if (arguments.length > 0) {
			if (arguments.length === 1 && length.type === "number") {
				contracts.assertIsValidArrayLength(arguments[0].value);
				newArray.putValue("length", length, false, env);
			} else {
				for (var i = 0, ln = arguments.length; i < ln; i++) {
					newArray.defineOwnProperty(i, createIndexProperty(arguments[i]), false, env);
				}
			}
		}

		return newArray;
	}, null, { configurable: false, enumerable: false, writable: false });

	var proto = arrayClass.getValue("prototype");
	proto.className = "Array";
	proto.define("length", objectFactory.createPrimitive(0), { configurable: false, enumerable: false, writable: true });

	arrayClass.define("isArray", objectFactory.createBuiltInFunction(function (obj) {
		return objectFactory.createPrimitive(!!(obj && obj.className === "Array"));
	}, 1, "Array.isArray"));

	proto.define("push", objectFactory.createBuiltInFunction(function () {
		var start = getLength(env, this.node);
		var i = 0;

		for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
			items[_key] = arguments[_key];
		}

		for (var _length = items.length; i < _length; i++) {
			this.node.defineOwnProperty(start + i, createIndexProperty(items[i]), true, env);
		}

		var newLength = objectFactory.createPrimitive(start + i);
		this.node.putValue("length", newLength, true, env);
		return newLength;
	}, 1, "Array.prototype.push"));

	proto.define("pop", objectFactory.createBuiltInFunction(function () {
		var obj = undefined;
		var i = getLength(env, this.node);

		if (i > 0) {
			i--;

			if (this.node.hasProperty(i)) {
				obj = this.node.getValue(i);
				this.node.deleteProperty(i, true);
			}
		}

		this.node.putValue("length", objectFactory.createPrimitive(i), true, env);
		return obj || undef;
	}, 0, "Array.prototype.pop"));

	proto.define("shift", objectFactory.createBuiltInFunction(function () {
		var obj = undefined;
		var length = getLength(env, this.node);
		var i = 0;

		if (length > 0) {
			if (this.node.hasProperty(i)) {
				obj = this.node.getValue(i);
				this.node.deleteProperty(i);
			}

			while (++i < length) {
				if (this.node.hasProperty(i)) {
					this.node.putValue(i - 1, this.node.getValue(i), true, env);
				} else {
					this.node.deleteProperty(i);
				}
			}

			this.node.deleteProperty(length - 1);
		}

		this.node.putValue("length", objectFactory.createPrimitive(length === 0 ? 0 : --length), true, env);
		return obj || undef;
	}, 0, "Array.prototype.shift"));

	proto.define("unshift", objectFactory.createBuiltInFunction(function () {
		var length = getLength(env, this.node);

		for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			items[_key2] = arguments[_key2];
		}

		var argCount = items.length;
		var i = length;
		var toIndex = undefined,
		    fromIndex = undefined;

		while (i > 0) {
			fromIndex = i - 1;
			toIndex = i + argCount - 1;

			if (this.node.hasProperty(fromIndex)) {
				this.node.putValue(toIndex, this.node.getValue(fromIndex), true, env);
			} else {
				this.node.deleteProperty(toIndex, true);
			}

			i--;
		}

		for (i = 0; i < argCount; i++) {
			this.node.putValue(i, items[i], true, env);
		}

		var newLength = objectFactory.createPrimitive(argCount + length);
		this.node.putValue("length", newLength, true, env);
		return newLength;
	}, 1, "Array.prototype.unshift"));

	proto.define("slice", objectFactory.createBuiltInFunction(function (begin, end) {
		var source = this.node;
		var length = getLength(env, this.node);
		begin = begin ? convert.toInteger(env, begin) : 0;

		if (!end || end.type === "undefined") {
			end = length;
		} else {
			end = convert.toInteger(env, end);
		}

		var arr = objectFactory.create("Array");
		var index = 0;

		begin = getStartIndex(begin, length);
		end = getEndIndex(end, length);

		for (var i = begin; i < end; i++) {
			arr.defineOwnProperty(index++, createIndexProperty(source.getValue(i)), true, env);
		}

		return arr;
	}, 2, "Array.prototype.slice"));

	proto.define("splice", objectFactory.createBuiltInFunction(function (start, deleteCount) {
		var length = getLength(env, this.node);

		start = convert.toInteger(env, start);
		if (start < 0) {
			start = Math.max(length + start, 0);
		} else {
			start = Math.min(start, length);
		}

		deleteCount = convert.toInteger(env, deleteCount);
		if (deleteCount < 0) {
			deleteCount = 0;
		} else {
			deleteCount = Math.min(Math.max(deleteCount, 0), length - start);
		}

		var removed = objectFactory.create("Array");

		var k = 0;
		while (k < deleteCount) {
			if (this.node.hasProperty(k + start)) {
				removed.defineOwnProperty(k, createIndexProperty(this.node.getValue(k + start)), true, env);
			}

			k++;
		}

		for (var _len3 = arguments.length, elements = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
			elements[_key3 - 2] = arguments[_key3];
		}

		var newCount = elements.length;
		if (newCount < deleteCount) {
			k = start;

			while (k < length - deleteCount) {
				if (this.node.hasProperty(k + deleteCount)) {
					this.node.putValue(k + newCount, this.node.getValue(k + deleteCount));
				} else {
					this.node.deleteProperty(k + deleteCount);
				}

				k++;
			}

			k = length;
			while (k > length - deleteCount + newCount) {
				this.node.deleteProperty(--k);
			}
		} else if (newCount > deleteCount) {
			k = length - start;
			while (k > start) {
				if (this.node.hasProperty(k + deleteCount - 1)) {
					this.node.putValue(k + newCount - 1, this.node.getValue(k + deleteCount - 1), true, env);
				} else {
					this.node.deleteProperty(k + newCount - 1);
				}

				k--;
			}
		}

		k = start;
		for (var i = 0; i < newCount; i++) {
			this.node.putValue(k, elements[i], true, env);
			k++;
		}

		this.node.putValue("length", objectFactory.createPrimitive(length - deleteCount + newCount), true, env);
		return removed;
	}, 2, "Array.prototype.splice"));

	proto.define("concat", objectFactory.createBuiltInFunction(function () {
		var newArray = objectFactory.create("Array");

		// add "this" array to bunch

		for (var _len4 = arguments.length, arrays = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			arrays[_key4] = arguments[_key4];
		}

		arrays.unshift(convert.toObject(env, this.node));

		var current = undefined,
		    index = 0,
		    i = undefined,
		    length = undefined;
		while (arrays.length > 0) {
			current = arrays.shift();

			if (current.className === "Array") {
				for (i = 0, length = current.getValue("length").unwrap(); i < length; i++) {
					if (current.hasProperty(i)) {
						newArray.defineOwnProperty(index, createIndexProperty(current.getValue(i)), true, env);
					}

					index++;
				}
			} else {
				newArray.defineOwnProperty(index++, createIndexProperty(current), true, env);
			}
		}

		newArray.putValue("length", objectFactory.createPrimitive(index), true, env);
		return newArray;
	}, 1, "Array.prototype.concat"));

	function join(separator) {
		var length = getLength(env, this.node);
		separator = arguments.length === 0 || separator === undef ? "," : convert.toPrimitive(env, separator, "string");
		var stringValues = [];
		var stringValue = undefined;

		for (var i = 0; i < length; i++) {
			stringValue = "";
			if (this.node.hasProperty(i)) {
				stringValue = this.node.getValue(i);
				if (contracts.isNullOrUndefined(stringValue)) {
					stringValue = "";
				} else {
					stringValue = convert.toString(env, stringValue);
				}
			}

			stringValues.push(stringValue);
		}

		return objectFactory.createPrimitive(stringValues.join(separator));
	}

	proto.define("join", objectFactory.createBuiltInFunction(join, 1, "Array.prototype.join"));

	proto.define("indexOf", objectFactory.createBuiltInFunction(function (searchElement, fromIndex) {
		searchElement = searchElement || undef;
		var length = getLength(env, this.node);
		var index = arguments.length === 1 ? 0 : convert.toInteger(env, fromIndex);
		var notFound = objectFactory.createPrimitive(-1);

		if (length === 0 || index >= length) {
			return notFound;
		}

		index = getStartIndex(index, length);

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = _getIterator(_iterators2["default"].forward(env, this.node, index, length)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var entry = _step.value;

				if (searchElement.equals(entry.value || undef)) {
					return objectFactory.createPrimitive(entry.index);
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return notFound;
	}, 1, "Array.prototype.indexOf"));

	proto.define("lastIndexOf", objectFactory.createBuiltInFunction(function (searchElement, fromIndex) {
		searchElement = searchElement || undef;
		var length = getLength(env, this.node);
		var index = arguments.length === 1 ? length - 1 : convert.toInteger(env, fromIndex);

		if (index < 0) {
			index = length - Math.abs(index);
		}

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = _getIterator(_iterators2["default"].reverse(env, this.node, index)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var entry = _step2.value;

				if (searchElement.equals(entry.value || undef)) {
					return objectFactory.createPrimitive(entry.index);
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
					_iterator2["return"]();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return objectFactory.createPrimitive(-1);
	}, 1, "Array.prototype.lastIndexOf"));

	proto.define("forEach", objectFactory.createBuiltInFunction(function (callback, thisArg) {
		var arr = convert.toObject(env, this.node);
		var length = getLength(env, arr);
		contracts.assertIsFunction(callback, arr);

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = _getIterator(_iterators2["default"].forward(env, arr, 0, length)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var entry = _step3.value;

				executeCallback(callback, entry, thisArg, arr);
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
					_iterator3["return"]();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}
	}, 1, "Array.prototype.forEach"));

	proto.define("map", objectFactory.createBuiltInFunction(function (callback, thisArg) {
		var arr = convert.toObject(env, this.node);
		var length = getLength(env, arr);
		contracts.assertIsNotNullOrUndefined(arr, "Array.prototype.map");
		contracts.assertIsFunction(callback, arr);

		var newArray = objectFactory.create("Array");
		newArray.putValue("length", objectFactory.createPrimitive(length), true, env);

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = _getIterator(_iterators2["default"].forward(env, arr, 0, length)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var entry = _step4.value;

				var value = executeCallback(callback, entry, thisArg, arr);
				newArray.defineOwnProperty(entry.index, createIndexProperty(value), true, env);
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
					_iterator4["return"]();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		return newArray;
	}, 1, "Array.prototype.map"));

	proto.define("filter", objectFactory.createBuiltInFunction(function (callback, thisArg) {
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.filter");
		var arr = convert.toObject(env, this.node);
		var length = getLength(env, arr);
		contracts.assertIsFunction(callback, arr);

		var newArray = objectFactory.create("Array");
		var index = 0;

		var _iteratorNormalCompletion5 = true;
		var _didIteratorError5 = false;
		var _iteratorError5 = undefined;

		try {
			for (var _iterator5 = _getIterator(_iterators2["default"].forward(env, arr, 0, length)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
				var entry = _step5.value;

				var passed = convert.toBoolean(executeCallback(callback, entry, thisArg, arr));
				if (passed) {
					newArray.defineOwnProperty(index++, createIndexProperty(entry.value), true, env);
				}
			}
		} catch (err) {
			_didIteratorError5 = true;
			_iteratorError5 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
					_iterator5["return"]();
				}
			} finally {
				if (_didIteratorError5) {
					throw _iteratorError5;
				}
			}
		}

		return newArray;
	}, 1, "Array.prototype.filter"));

	proto.define("every", objectFactory.createBuiltInFunction(function (callback, thisArg) {
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.every");
		var arr = convert.toObject(env, this.node);
		var length = getLength(env, arr);
		contracts.assertIsFunction(callback, arr);

		var _iteratorNormalCompletion6 = true;
		var _didIteratorError6 = false;
		var _iteratorError6 = undefined;

		try {
			for (var _iterator6 = _getIterator(_iterators2["default"].forward(env, arr, 0, length)), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
				var entry = _step6.value;

				var passed = convert.toBoolean(executeCallback(callback, entry, thisArg, arr));
				if (!passed) {
					return objectFactory.createPrimitive(false);
				}
			}
		} catch (err) {
			_didIteratorError6 = true;
			_iteratorError6 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
					_iterator6["return"]();
				}
			} finally {
				if (_didIteratorError6) {
					throw _iteratorError6;
				}
			}
		}

		return objectFactory.createPrimitive(true);
	}, 1, "Array.prototype.every"));

	proto.define("some", objectFactory.createBuiltInFunction(function (callback, thisArg) {
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.some");
		var arr = convert.toObject(env, this.node);
		var length = getLength(env, this.node);
		contracts.assertIsFunction(callback, this.node);

		var _iteratorNormalCompletion7 = true;
		var _didIteratorError7 = false;
		var _iteratorError7 = undefined;

		try {
			for (var _iterator7 = _getIterator(_iterators2["default"].forward(env, arr, 0, length)), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
				var entry = _step7.value;

				var passed = convert.toBoolean(executeCallback(callback, entry, thisArg, arr));
				if (passed) {
					return objectFactory.createPrimitive(true);
				}
			}
		} catch (err) {
			_didIteratorError7 = true;
			_iteratorError7 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
					_iterator7["return"]();
				}
			} finally {
				if (_didIteratorError7) {
					throw _iteratorError7;
				}
			}
		}

		return objectFactory.createPrimitive(false);
	}, 1, "Array.prototype.some"));

	proto.define("reduce", objectFactory.createBuiltInFunction(function (callback, initialValue) {
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.reduce");
		var arr = convert.toObject(env, this.node);
		var length = getLength(env, arr);
		contracts.assertIsFunction(callback, arr);

		var hasInitialValue = false;
		var value = undefined;

		if (arguments.length > 1) {
			value = initialValue;
			hasInitialValue = true;
		}

		var hasElements = false;
		if (length > 0) {
			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = _getIterator(_iterators2["default"].forward(env, arr, 0, length)), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var entry = _step8.value;

					if (!hasElements) {
						hasElements = true;

						if (!hasInitialValue) {
							value = entry.value;
							continue;
						}
					}

					value = executeAccumulator(callback, value, entry, arr);
				}
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
						_iterator8["return"]();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}
		}

		if (!hasElements && !hasInitialValue) {
			throw new TypeError("Reduce of empty array with no initial value");
		}

		return value;
	}, 1, "Array.prototype.reduce"));

	proto.define("reduceRight", objectFactory.createBuiltInFunction(function (callback, initialValue) {
		var length = getLength(env, this.node);
		contracts.assertIsNotNullOrUndefined(this.node, "Array.prototype.reduceRight");
		var arr = convert.toObject(env, this.node);
		contracts.assertIsFunction(callback, arr);

		var accumulator = undefined;
		var hasInitialValue = false;

		if (arguments.length > 1) {
			accumulator = initialValue;
			hasInitialValue = true;
		}

		var hasElements = false;
		if (length > 0) {
			var _iteratorNormalCompletion9 = true;
			var _didIteratorError9 = false;
			var _iteratorError9 = undefined;

			try {
				for (var _iterator9 = _getIterator(_iterators2["default"].reverse(env, arr, length - 1)), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
					var entry = _step9.value;

					if (!hasElements) {
						hasElements = true;

						if (!hasInitialValue) {
							accumulator = entry.value;
							continue;
						}
					}

					accumulator = executeAccumulator(callback, accumulator, entry, arr);
				}
			} catch (err) {
				_didIteratorError9 = true;
				_iteratorError9 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
						_iterator9["return"]();
					}
				} finally {
					if (_didIteratorError9) {
						throw _iteratorError9;
					}
				}
			}
		}

		if (!hasElements && !hasInitialValue) {
			throw new TypeError("Reduce of empty array with no initial value");
		}

		return accumulator;
	}, 1, "Array.prototype.reduceRight"));

	proto.define("reverse", objectFactory.createBuiltInFunction(function () {
		var length = getLength(env, this.node);
		var middle = Math.floor(length / 2);
		var lower = 0;
		var upper = undefined,
		    upperValue = undefined,
		    lowerValue = undefined;

		while (lower !== middle) {
			upper = length - lower - 1;
			lowerValue = this.node.hasProperty(lower) && this.node.getValue(lower);
			upperValue = this.node.hasProperty(upper) && this.node.getValue(upper);

			if (upperValue) {
				this.node.putValue(lower, upperValue, true, env);
			}

			if (lowerValue) {
				this.node.putValue(upper, lowerValue, true, env);
			}

			if (upperValue && !lowerValue) {
				this.node.deleteProperty(upper);
			} else if (lowerValue && !upperValue) {
				this.node.deleteProperty(lower);
			}

			lower++;
		}

		return this.node;
	}, 0, "Array.prototype.reverse"));

	proto.define("sort", objectFactory.createBuiltInFunction(function (compareFunction) {
		var executionContext = this;
		var arr = this.node;
		var length = getLength(env, arr);
		var i = 0;

		var comparer = undefined;
		if (contracts.isNullOrUndefined(compareFunction)) {
			comparer = function defaultComparer(a, b) {
				a = convert.toString(env, a);
				b = convert.toString(env, b);

				if (a < b) {
					return -1;
				}

				if (a > b) {
					return 1;
				}

				return 0;
			};
		} else {
			comparer = function (a, b) {
				var scope = env.createScope(undef);
				scope.init(compareFunction.node.body);

				scope.loadArgs(compareFunction.node.params, [a, b], compareFunction);
				var executionResult = scope.use(function () {
					return executionContext.create(compareFunction.node.body, compareFunction.node).execute();
				});

				if (executionResult && executionResult.exit && executionResult.result) {
					return executionResult.result.getValue().value;
				}

				return undefined;
			};
		}

		// convert to array, run the wrapped comparer, then re-assign indexes
		var sortedArray = convert.toArray(arr, length)
		// undefined positions are handled by the underlying sort algorithm, so replace them with the raw primitive value
		.map(function (el) {
			return el.isPrimitive && el.value === undefined ? undefined : el;
		}).sort(comparer);

		while (i < length) {
			if (i in sortedArray) {
				arr.putValue(i, sortedArray[i], false, env);
			} else {
				arr.deleteProperty(i, false);
			}

			i++;
		}

		return arr;
	}, 1, "Array.prototype.sort"));

	proto.define("toLocaleString", objectFactory.createBuiltInFunction(function () {
		var length = getLength(env, this.node);
		var arr = new Array(length);
		var i = 0;
		var current = undefined;

		while (i < length) {
			if (this.node.hasProperty(i)) {
				current = this.node.getValue(i);

				if (contracts.isNullOrUndefined(current)) {
					arr[i] = "";
				} else {
					arr[i] = convert.toString(env, func.tryCallMethod(env, current, "toLocaleString"));
				}
			}

			i++;
		}

		return objectFactory.createPrimitive(arr.join());
	}, 0, "Array.prototype.toLocaleString"));

	// todo: this is a bit hacky - toString will call join if available per spec,
	// but will call Object..toString if not
	proto.define("toString", objectFactory.createBuiltInFunction(join, 0, "Array.prototype.toString"));
	globalObject.define("Array", arrayClass);
}

module.exports = exports["default"];
},{"../iterators":190,"../utils/contracts":210,"../utils/convert":211,"../utils/func":212,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],167:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = booleanApi;

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

function booleanApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var booleanClass = objectFactory.createFunction(function (obj) {
		var booleanValue = convert.toBoolean(obj);

		// called as new
		if (this.isNew) {
			return convert.primitiveToObject(env, booleanValue);
		}

		return objectFactory.create("Boolean", booleanValue);
	}, null, { configurable: false, enumerable: false, writable: false });

	var proto = booleanClass.getValue("prototype");
	proto.className = "Boolean";
	proto.value = false;

	proto.define("toString", objectFactory.createBuiltInFunction(function () {
		contracts.assertIsNotGeneric(this.node, "Boolean", "Boolean.prototype.toString");
		return objectFactory.createPrimitive(String(this.node.value));
	}, 0, "Boolean.prototype.toString"));

	proto.define("valueOf", objectFactory.createBuiltInFunction(function () {
		contracts.assertIsNotGeneric(this.node, "Boolean", "Boolean.prototype.valueOf");
		return objectFactory.createPrimitive(this.node.value);
	}, 0, "Boolean.prototype.valueOf"));

	globalObject.define("Boolean", booleanClass);
}

module.exports = exports["default"];
},{"../utils/contracts":210,"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19}],168:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = consoleApi;

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var methods = ["log", "info", "error"];

function consoleApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;
	var consoleClass = objectFactory.createObject();

	methods.forEach(function (name) {
		consoleClass.define(name, objectFactory.createBuiltInFunction(function (message) {
			var stringValue = convert.toString(env, message);
			console[name](stringValue);
		}, 1, "console." + name));
	});

	globalObject.define("console", consoleClass);
}

module.exports = exports["default"];
},{"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19}],169:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = dateApi;

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var staticMethods = ["now"];
var protoMethods = ["getDate", "getDay", "getFullYear", "getHours", "getMilliseconds", "getMinutes", "getMonth", "getMilliseconds", "getMinutes", "getMonth", "getSeconds", "getTime", "getTimezoneOffset", "getUTCDay", "getUTCDate", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCMonth", "getUTCSeconds", "getYear", "toDateString", "toGMTString", "toISOString", "toJSON", "toLocaleString", "toLocaleDateString", "toLocaleTimeString", "toString", "toTimeString", "toUTCString"];
var setters = ["setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear"];
var slice = Array.prototype.slice;

function dateApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var dateClass = objectFactory.createFunction(function (p1, p2, p3, p4, p5, p6, p7) {
		var dateValue = undefined,
		    args = undefined;

		if (arguments.length === 0) {
			args = [];
		} else if (arguments.length === 1) {
			if (p1.isPrimitive) {
				args = [p1.value];
			} else {
				var primitiveValue = convert.toPrimitive(env, p1);
				if (typeof primitiveValue !== "string") {
					primitiveValue = convert.toNumber(env, p1);
				}

				args = [primitiveValue];
			}
		} else {
			args = slice.call(arguments).map(function (arg) {
				return convert.toPrimitive(env, arg, "number");
			});
		}

		if (this.isNew) {
			switch (args.length) {
				case 0:
					dateValue = new Date();
					break;

				case 1:
					dateValue = new Date(args[0]);
					break;

				default:
					var i = args.length;
					while (i < 7) {
						// default day to 1, all others to 0
						args[i++] = i === 3 ? 1 : 0;
					}

					dateValue = new Date(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
					break;
			}

			return objectFactory.create("Date", dateValue);
		}

		dateValue = Date.apply(null, args);
		return objectFactory.createPrimitive(dateValue);
	}, null, { configurable: false, enumerable: false, writable: false });

	dateClass.define("parse", objectFactory.createBuiltInFunction(function (value) {
		var stringValue = convert.toPrimitive(env, value, "string");
		var dateValue = Date.parse(stringValue);
		return objectFactory.createPrimitive(dateValue);
	}, 1, "Date.prototype.parse"));

	dateClass.define("UTC", objectFactory.createBuiltInFunction(function (p1, p2, p3, p4, p5, p6, p7) {
		var args = slice.call(arguments).map(function (arg) {
			return convert.toPrimitive(env, arg, "number");
		});
		return objectFactory.createPrimitive(Date.UTC.apply(null, args));
	}, 7, "Date.prototype.UTC"));

	var proto = dateClass.getValue("prototype");
	proto.className = "Date";
	proto.value = new Date(Date.prototype);

	staticMethods.forEach(function (name) {
		dateClass.define(name, convert.toNativeFunction(env, Date[name], "Date." + name));
	});

	protoMethods.forEach(function (name) {
		proto.define(name, convert.toNativeFunction(env, Date.prototype[name], "Date.prototype." + name));
	});

	setters.forEach(function (name) {
		function setter() {
			var args = slice.call(arguments).map(function (arg) {
				return convert.toPrimitive(env, arg);
			});
			Date.prototype[name].apply(this.node.value, args);
		}

		proto.define(name, objectFactory.createBuiltInFunction(setter, Date.prototype[name].length, "Date.prototype." + name));
	});

	proto.define("valueOf", objectFactory.createBuiltInFunction(function () {
		return objectFactory.createPrimitive(this.node.value.valueOf());
	}, 0, "Date.prototype.valueOf"));

	globalObject.define("Date", dateClass);
}

module.exports = exports["default"];
},{"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19}],170:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = errorApi;

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var errorTypes = ["TypeError", "ReferenceError", "SyntaxError", "RangeError", "URIError", "EvalError"];

function createError(objectFactory, message, name) {
	var options = null;
	if (name) {
		options = { name: name };
	}

	var obj = objectFactory.create("Error", options);

	if (!contracts.isNullOrUndefined(message)) {
		obj.defineOwnProperty("message", { value: message, configurable: true, enumerable: false, writable: true }, false);
	}

	return obj;
}

function errorApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var errorClass = objectFactory.createFunction(function (message) {
		return createError(objectFactory, message);
	}, null, { configurable: false, enumerable: false, writable: false });

	var proto = errorClass.getValue("prototype");
	proto.className = "Error";
	proto.define("name", objectFactory.createPrimitive("Error"));
	proto.define("message", objectFactory.createPrimitive(""));

	proto.define("toString", objectFactory.createBuiltInFunction(function () {
		var name = this.node.getValue("name");
		var msg = undefined;

		if (this.node.hasProperty("message")) {
			msg = convert.toString(env, this.node.getValue("message"));
		}

		name = name && convert.toString(env, name);
		if (name && msg) {
			return objectFactory.create("String", name + ": " + msg);
		}

		return objectFactory.create("String", name || msg);
	}, 0, "Error.prototype.toString"));

	globalObject.define("Error", errorClass);

	errorTypes.forEach(function (type) {
		var errClass = objectFactory.createFunction(function (message) {
			return createError(objectFactory, message, type);
		}, null, { configurable: false, enumerable: false, writable: false });

		var typeProto = errClass.getValue("prototype");
		typeProto.define("name", objectFactory.createPrimitive(type));

		// add to prototype chain to represent inheritance
		typeProto.setPrototype(proto);

		globalObject.define(type, errClass);
	});
}

module.exports = exports["default"];
},{"../utils/contracts":210,"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19}],171:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = functionApi;

var _typesNativeFunctionType = require("../types/native-function-type");

var _typesNativeFunctionType2 = _interopRequireDefault(_typesNativeFunctionType);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _utilsFunc = require("../utils/func");

var func = _interopRequireWildcard(_utilsFunc);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

function defineThis(env, fn, thisArg) {
	if (fn.builtIn || fn.isStrict()) {
		return thisArg || env.global.getValue("undefined");
	}

	if (contracts.isNullOrUndefined(thisArg)) {
		return env.global;
	}

	return convert.toObject(env, thisArg);
}

var frozen = { configurable: false, enumerable: false, writable: false };

function functionApi(env) {
	var options = env.options;
	var globalObject = env.global;
	var undef = env.global.getValue("undefined");
	var objectFactory = env.objectFactory;

	var funcClass = undefined;

	var funcCtor = function funcCtor() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var funcInstance = undefined;

		if (options.parser && args.length > 0) {
			(function () {
				var body = args.pop();

				if (args.length > 0) {
					args = args.map(function (arg, index) {
						if (contracts.isNull(arg)) {
							throw new SyntaxError("Unexpected token null");
						}

						return contracts.isUndefined(arg) ? "" : convert.toString(env, arg);
					})
					// the spec allows parameters to be comma-delimited, so we will join and split again comma
					.join(",").split(/\s*,\s*/g);
				}

				var ast = options.parser("(function(){" + convert.toString(env, body) + "}).apply(this,arguments);");
				var userNode = ast.body[0].expression.callee.object.body.body;
				var strict = contracts.isStrictNode(userNode);

				var params = args.map(function (arg) {
					return {
						type: "Identifier",
						name: arg.trim()
					};
				});

				contracts.assertAreValidArguments(params, strict);
				var callee = {
					type: "FunctionDeclaration",
					params: params,
					body: ast
				};

				var fn = objectFactory.createFunction(callee);
				var wrappedFunc = function wrappedFunc() {
					var thisArg = undefined;
					if (this.isNew) {
						thisArg = objectFactory.createObject(funcInstance);
					} else {
						thisArg = this.node;

						if (!thisArg) {
							thisArg = strict ? undef : globalObject;
						}
					}

					var executionResult = func.getFunctionResult(env, fn, params, arguments, thisArg, callee);

					if (this.isNew) {
						return thisArg;
					}

					return executionResult && executionResult.result || undef;
				};

				wrappedFunc.nativeLength = callee.params.length;
				wrappedFunc.strict = strict;
				funcInstance = objectFactory.createFunction(wrappedFunc, null, null, strict);
				funcInstance.bindScope(env.globalScope);
			})();
		} else {
			funcInstance = objectFactory.createFunction(function () {});
		}

		funcInstance.putValue("constructor", funcClass);
		return funcInstance;
	};

	// the prototype of a function is actually callable and evaluates as a function
	var proto = new _typesNativeFunctionType2["default"](function () {});

	funcCtor.nativeLength = 1;
	funcClass = objectFactory.createFunction(funcCtor, proto, frozen);
	funcClass.putValue("constructor", funcClass);

	globalObject.define("Function", funcClass);

	proto.define("length", objectFactory.createPrimitive(0), frozen);

	// function itself is a function
	funcClass.setPrototype(proto);

	proto.define("toString", objectFactory.createBuiltInFunction(function () {
		if (this.node.native) {
			return objectFactory.createPrimitive("function () { [native code] }");
		}

		return objectFactory.createPrimitive("function () { [user code] }");
	}, 0, "Function.prototype.toString"));

	proto.define("call", objectFactory.createBuiltInFunction(function (thisArg) {
		var params = this.node.native ? [] : this.node.node.params;
		var callee = this.node.native ? this.node : this.node.node;
		thisArg = defineThis(env, this.node, thisArg);
		this.node.bindThis(thisArg);

		for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			args[_key2 - 1] = arguments[_key2];
		}

		return func.executeFunction(env, this.node, params, args, thisArg, callee);
	}, 1, "Function.prototype.call"));

	proto.define("apply", objectFactory.createBuiltInFunction(function (thisArg, argsArray) {
		if (argsArray) {
			if (argsArray.className !== "Arguments" && argsArray.className !== "Array" && argsArray.className !== "Function") {
				throw new TypeError("Arguments list was wrong type");
			}
		}

		var args = convert.toArray(argsArray);
		var params = this.node.native ? [] : this.node.node.params;
		var callee = this.node.native ? this.node : this.node.node;
		thisArg = defineThis(env, this.node, thisArg);
		this.node.bindThis(thisArg);

		return func.executeFunction(env, this.node, params, args, thisArg, callee);
	}, 2, "Function.prototype.apply"));

	proto.define("bind", objectFactory.createBuiltInFunction(function (thisArg) {
		for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
			args[_key3 - 1] = arguments[_key3];
		}

		var fn = this.node;
		var params = fn.native ? [] : fn.node.params;
		var callee = fn.native ? fn : fn.node;
		thisArg = defineThis(env, this.node, thisArg);

		var nativeFunc = function nativeFunc() {
			for (var _len4 = arguments.length, additionalArgs = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				additionalArgs[_key4] = arguments[_key4];
			}

			var mergedArgs = args.concat(additionalArgs);
			return func.executeFunction(env, fn, params, mergedArgs, thisArg, callee, this.isNew);
		};

		nativeFunc.nativeLength = Math.max(params.length - args.length, 0);
		nativeFunc.strict = env.isStrict() || !fn.native && contracts.isStrictNode(fn.node.body.body);

		var boundFunc = objectFactory.createFunction(nativeFunc);
		boundFunc.bindScope(this.env.current);
		boundFunc.bindThis(thisArg);

		if (!nativeFunc.strict) {
			boundFunc.remove("caller");
			boundFunc.remove("arguments");

			// these will be added in strict mode, but should always be here for bound functions
			var thrower = objectFactory.createThrower("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
			boundFunc.defineOwnProperty("caller", thrower);
			boundFunc.defineOwnProperty("arguments", thrower);
		}

		return boundFunc;
	}, 1, "Function.prototype.bind"));
}

module.exports = exports["default"];
},{"../types/native-function-type":201,"../utils/contracts":210,"../utils/convert":211,"../utils/func":212,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],172:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ecma51;

var _typesPrimitiveType = require("../types/primitive-type");

var _typesPrimitiveType2 = _interopRequireDefault(_typesPrimitiveType);

var _typesObjectFactory = require("../types/object-factory");

var _typesObjectFactory2 = _interopRequireDefault(_typesObjectFactory);

var _envReference = require("../env/reference");

var _envReference2 = _interopRequireDefault(_envReference);

var _numberApi = require("./number-api");

var _numberApi2 = _interopRequireDefault(_numberApi);

var _stringApi = require("./string-api");

var _stringApi2 = _interopRequireDefault(_stringApi);

var _functionApi = require("./function-api");

var _functionApi2 = _interopRequireDefault(_functionApi);

var _objectApi = require("./object-api");

var _objectApi2 = _interopRequireDefault(_objectApi);

var _booleanApi = require("./boolean-api");

var _booleanApi2 = _interopRequireDefault(_booleanApi);

var _dateApi = require("./date-api");

var _dateApi2 = _interopRequireDefault(_dateApi);

var _arrayApi = require("./array-api");

var _arrayApi2 = _interopRequireDefault(_arrayApi);

var _mathApi = require("./math-api");

var _mathApi2 = _interopRequireDefault(_mathApi);

var _regexApi = require("./regex-api");

var _regexApi2 = _interopRequireDefault(_regexApi);

var _errorApi = require("./error-api");

var _errorApi2 = _interopRequireDefault(_errorApi);

var _jsonApi = require("./json-api");

var _jsonApi2 = _interopRequireDefault(_jsonApi);

var _consoleApi = require("./console-api");

var _consoleApi2 = _interopRequireDefault(_consoleApi);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var frozen = { configurable: false, enumerable: false, writable: false };

function ecma51(env) {
	var options = env.options;
	var objectFactory = env.objectFactory = new _typesObjectFactory2["default"](env);
	var globalObject = env.global = objectFactory.createObject();

	env.createObjectScope(globalObject);

	var undefinedClass = new _typesPrimitiveType2["default"]();
	globalObject.define("undefined", undefinedClass, frozen);

	var nullClass = new _typesPrimitiveType2["default"](null);
	globalObject.define("null", nullClass, frozen);

	globalObject.define("Infinity", objectFactory.createPrimitive(Infinity), frozen);
	globalObject.define("NaN", objectFactory.createPrimitive(NaN), frozen);

	// todo: node vs browser - do we care?
	globalObject.define("window", globalObject, frozen);

	(0, _functionApi2["default"])(env, options);
	(0, _objectApi2["default"])(env, options);
	(0, _arrayApi2["default"])(env, options);
	(0, _booleanApi2["default"])(env, options);
	(0, _numberApi2["default"])(env, options);
	(0, _stringApi2["default"])(env, options);
	(0, _dateApi2["default"])(env, options);
	(0, _regexApi2["default"])(env, options);
	(0, _mathApi2["default"])(env, options);
	(0, _errorApi2["default"])(env, options);
	(0, _jsonApi2["default"])(env, options);
	(0, _consoleApi2["default"])(env, options);

	["parseFloat", "decodeURI", "encodeURI", "decodeURIComponent", "encodeURIComponent", "escape", "unescape"].forEach(function (name) {
		globalObject.define(name, objectFactory.createBuiltInFunction(function (value) {
			var stringValue = convert.toString(env, value);
			return objectFactory.createPrimitive(global[name](stringValue));
		}, 1, name));
	});

	["isNaN", "isFinite"].forEach(function (name) {
		globalObject.define(name, convert.toNativeFunction(env, global[name], name));
	});

	globalObject.define("parseInt", objectFactory.createBuiltInFunction(function (value, radix) {
		var stringValue = convert.toString(env, value);
		radix = convert.toPrimitive(env, radix, "number");

		return objectFactory.createPrimitive(parseInt(stringValue, radix));
	}, 2, "parseInt"));

	if (options.parser) {
		var evalFunc = objectFactory.createBuiltInFunction(function (code) {
			var _this = this;

			if (!code) {
				return undefinedClass;
			}

			if (code.type !== "string") {
				return code;
			}

			var directCall = this.callee instanceof _envReference2["default"] && this.callee.base === globalObject;
			var ast = undefined;

			try {
				ast = options.parser(code.value);
			} catch (err) {
				if (err instanceof SyntaxError && /assigning to rvalue/i.test(err.message)) {
					// hack because acorn throws syntax error
					throw new ReferenceError("Invalid left-hand side in assignment");
				}

				throw err;
			}

			var strictScope = env.isStrict();
			var strictCode = strictScope || contracts.isStrictNode(ast.body);
			var currentGlobal = env.current.scope.parent === env.globalScope.scope;
			var scope = undefined;

			// use the same scope unless this is an "indirect" call
			// in which case we use the global scope
			if (directCall) {
				if (strictCode) {
					var thisArg = undefined;
					if (strictScope) {
						thisArg = currentGlobal ? globalObject : undefinedClass;
					} else {
						thisArg = env.getThisBinding() || globalObject;
					}

					scope = env.createScope(thisArg);
				} else {
					scope = env.setScope(env.current.scope.parent);
				}
			} else {
				scope = env.setScope(env.globalScope.scope);
				if (strictCode) {
					scope = env.createScope(globalObject);
				}
			}

			var executionResult = scope.use(function () {
				return _this.create(ast).execute();
			});

			return executionResult && executionResult.result ? executionResult.result.getValue() : undefinedClass;
		}, 1, "eval");

		globalObject.define("eval", evalFunc);
	}

	objectFactory.init();

	if (options.exclude && options.exclude.length > 0) {
		options.exclude.forEach(function (name) {
			var segments = name.split(".");
			var parent = globalObject;

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

module.exports = exports["default"];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../env/reference":184,"../types/object-factory":202,"../types/primitive-type":204,"../utils/contracts":210,"../utils/convert":211,"./array-api":166,"./boolean-api":167,"./console-api":168,"./date-api":169,"./error-api":170,"./function-api":171,"./json-api":173,"./math-api":174,"./number-api":175,"./object-api":176,"./regex-api":177,"./string-api":178,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],173:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = jsonApi;

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _utilsFunc = require("../utils/func");

var func = _interopRequireWildcard(_utilsFunc);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var primitives = {
	"String": true,
	"Number": true,
	"Boolean": true,
	"Date": true
};

function formatValues(values, gap, depth) {
	if (values.length === 0) {
		return "";
	}

	if (!gap) {
		return values.join(",");
	}

	var indent = "\n" + gap.repeat(depth);
	var joinedValues = values.join(indent + ",");

	// remove indent on closing
	return indent + joinedValues + "\n" + gap.repeat(depth - 1);
}

function serializePrimitive(value) {
	return JSON.stringify(value);
}

function serializeObject(env, stack, obj, replacer, gap, depth) {
	var colon = gap ? ": " : ":";
	var values = [];
	var value = undefined;

	for (var prop in obj.properties) {
		if (obj.properties[prop].enumerable) {
			value = replacer(obj, prop, obj.getValue(prop));
			if (!contracts.isNullOrUndefined(value)) {
				values.push(serializePrimitive(prop) + colon + serialize(env, stack, value, replacer, gap, depth));
			}
		}
	}

	return "{" + formatValues(values, gap, depth, gap, depth) + "}";
}

function serializeArray(env, stack, arr, replacer, gap, depth) {
	var length = arr.getValue("length").unwrap();
	var values = [];

	for (var i = 0; i < length; i++) {
		var value = undefined;
		if (arr.hasProperty(i)) {
			value = replacer(arr, String(i), arr.getValue(i));
		}

		if (contracts.isNullOrUndefined(value)) {
			// undefined positions are replaced with null
			values.push("null");
		} else {
			values.push(serialize(env, stack, value, replacer));
		}
	}

	return "[" + formatValues(values, gap, depth) + "]";
}

function serialize(env, stack, obj, replacer, gap, depth) {
	if (!obj) {
		return serializePrimitive();
	}

	if (obj.isPrimitive || obj.className in primitives) {
		return serializePrimitive(obj.value);
	}

	if (obj.className === "Function") {
		return undefined;
	}

	var jsonString = func.tryCallMethod(env, obj, "toJSON");
	if (jsonString) {
		return serializePrimitive(jsonString.value);
	}

	if (stack.indexOf(obj) >= 0) {
		throw new TypeError("Converting circular structure to JSON");
	}

	depth++;
	stack.push(obj);

	var jsonResult = undefined;
	if (obj.className === "Array") {
		jsonResult = serializeArray(env, stack, obj, replacer);
	} else {
		jsonResult = serializeObject(env, stack, obj, replacer, gap, depth);
	}

	depth--;
	stack.pop();
	return jsonResult;
}

function createReplacer(env, replacer) {
	if (replacer) {
		if (replacer.className === "Function") {
			return function (holder, key, value) {
				var args = [env.objectFactory.createPrimitive(key), value];
				var params = replacer.native ? [] : replacer.node.params;
				var callee = replacer.native ? replacer : replacer.node;

				return func.executeFunction(env, replacer, params, args, holder, callee);
			};
		}

		if (replacer.className === "Array") {
			var _ret = (function () {
				var keys = convert.toArray(replacer).map(function (arg) {
					if (arg.className === "String") {
						return convert.toString(env, arg);
					}

					if (arg.className === "Number") {
						return String(convert.toNumber(env, arg));
					}

					return undefined;
				});

				return {
					v: function (holder, key, value) {
						// allow empty key - this will be from the root
						if (!key || keys.indexOf(key) >= 0) {
							return value;
						}

						return undefined;
					}
				};
			})();

			if (typeof _ret === "object") return _ret.v;
		}
	}

	return function (holder, key, value) {
		return value;
	};
}

function getSpacer(env, spacer) {
	if (spacer) {
		if (spacer.className === "Number") {
			var count = Math.floor(convert.toNumber(env, spacer));
			count = Math.max(Math.min(10, count), 0);

			if (count > 0) {
				return " ".repeat(count);
			}

			return "";
		}

		if (spacer.className === "String") {
			var gap = convert.toString(env, spacer);
			return gap.substr(0, 10);
		}
	}

	return "";
}

function deserialize(env, value, reviver) {
	var objectFactory = env.objectFactory;
	var valueType = contracts.getType(value);
	switch (valueType) {
		// these are the only types supported by JSON.parse - sad face...
		case "Undefined":
		case "Null":
		case "String":
		case "Number":
		case "Boolean":
			return objectFactory.create(valueType, value);

		case "Array":
			var arr = objectFactory.create("Array");
			value.forEach(function (element, index) {
				var elementValue = reviver(arr, String(index), deserialize(env, element, reviver));
				if (!contracts.isUndefined(elementValue)) {
					arr.defineOwnProperty(index, { value: deserialize(env, element), configurable: true, enumerable: true, writable: true }, true, env);
				}
			});

			return arr;

		default:
			var obj = objectFactory.createObject();
			var propValue = undefined;

			for (var prop in value) {
				if (value.hasOwnProperty(prop)) {
					propValue = reviver(obj, prop, deserialize(env, value[prop], reviver));
					if (!contracts.isUndefined(propValue)) {
						obj.defineOwnProperty(prop, { value: propValue, configurable: true, enumerable: true, writable: true }, true, env);
					}
				}
			}

			return obj;
	}
}

function createReviver(env, reviver) {
	if (reviver && reviver.className === "Function") {
		return function (holder, key, value) {
			var args = [env.objectFactory.createPrimitive(key), value];
			var params = reviver.native ? [] : reviver.node.params;
			var callee = reviver.native ? reviver : reviver.node;

			return func.executeFunction(env, reviver, params, args, holder, callee);
		};
	}

	return function (holder, key, value) {
		return value;
	};
}

function jsonApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;
	var undef = env.global.getValue("undefined");

	var jsonClass = objectFactory.createObject();
	jsonClass.className = "JSON";

	jsonClass.define("stringify", objectFactory.createBuiltInFunction(function (obj, replacer, spacer) {
		replacer = createReplacer(env, replacer);
		spacer = getSpacer(env, spacer);

		// run at the top value
		obj = replacer(obj, "", obj);
		if (contracts.isUndefined(obj)) {
			return undef;
		}

		var stack = [];
		return objectFactory.createPrimitive(serialize(env, stack, obj, replacer, spacer, 0));
	}, 3, "JSON.stringify"));

	jsonClass.define("parse", objectFactory.createBuiltInFunction(function (str, reviver) {
		reviver = createReviver(env, reviver);

		var stringValue = convert.toString(env, str);
		var parsedObject = JSON.parse(stringValue);
		var deserializedObject = deserialize(env, parsedObject, reviver);

		return reviver(deserializedObject, "", deserializedObject) || undef;
	}, 2, "JSON.parse"));

	globalObject.define("JSON", jsonClass);
}

module.exports = exports["default"];
},{"../utils/contracts":210,"../utils/convert":211,"../utils/func":212,"babel-runtime/helpers/interop-require-wildcard":19}],174:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = mathApi;

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var constants = ["E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"];
var methods = ["abs", "acos", "asin", "atan", "atan2", "ceil", "cos", "exp", "floor", "log", "max", "min", "pow", "random", "round", "sin", "sqrt", "tan"];

function mathApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var mathClass = objectFactory.createObject();
	mathClass.className = "Math";

	constants.forEach(function (name) {
		mathClass.define(name, objectFactory.createPrimitive(Math[name]), { configurable: false, enumerable: false, writable: false });
	});

	methods.forEach(function (name) {
		mathClass.define(name, convert.toNativeFunction(env, Math[name], "Math." + name));
	});

	globalObject.define("Math", mathClass);
}

module.exports = exports["default"];
},{"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19}],175:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = numberApi;

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var constants = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];
var protoMethods = ["toExponential", "toPrecision", "toLocaleString"];

function numberApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var numberClass = objectFactory.createFunction(function (obj) {
		var numberValue = Number(convert.toPrimitive(env, obj, "number"));

		if (this.isNew) {
			return convert.primitiveToObject(env, numberValue);
		}

		return objectFactory.create("Number", numberValue);
	}, null, { configurable: false, enumerable: false, writable: false });

	var proto = numberClass.getValue("prototype");
	proto.className = "Number";
	proto.value = 0;

	proto.define("toString", objectFactory.createBuiltInFunction(function (radix) {
		contracts.assertIsNotGeneric(this.node, "Number", "Number.prototype.toString");

		var radixValue = 10;
		if (radix) {
			radixValue = convert.toPrimitive(env, radix, "number");
			if (radixValue < 2 || radixValue > 36) {
				throw new RangeError("toString() radix argument must be between 2 and 36");
			}
		}

		return objectFactory.createPrimitive(this.node.value == null ? "0" : this.node.value.toString(radixValue));
	}, 1, "Number.prototype.toString"));

	proto.define("toFixed", objectFactory.createBuiltInFunction(function (fractionDigits) {
		contracts.assertIsNotGeneric(this.node, "Number", "Number.prototype.toFixed");

		var digits = 0;
		if (fractionDigits) {
			digits = convert.toNumber(env, fractionDigits);
		}

		return objectFactory.createPrimitive(Number.prototype.toFixed.call(this.node.value, digits));
	}, 1, "Number.prototype.toFixed"));

	proto.define("valueOf", objectFactory.createBuiltInFunction(function () {
		contracts.assertIsNotGeneric(this.node, "Number", "Number.prototype.valueOf");
		return objectFactory.createPrimitive(this.node.value == null ? 0 : this.node.value);
	}, 0, "Number.prototype.valueOf"));

	constants.forEach(function (name) {
		numberClass.define(name, objectFactory.createPrimitive(Number[name]), { configurable: false, enumerable: false, writable: false });
	});

	protoMethods.forEach(function (name) {
		var fn = Number.prototype[name];
		if (fn) {
			(function () {
				var methodName = "Number.prototype." + name;
				proto.define(name, objectFactory.createBuiltInFunction(function () {
					contracts.assertIsNotGeneric(this.node, "Number", methodName);
					return objectFactory.createPrimitive(fn.call(this.node.value));
				}, fn.length, methodName));
			})();
		}
	});

	globalObject.define("Number", numberClass);
}

module.exports = exports["default"];
},{"../utils/contracts":210,"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19}],176:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = objectApi;

var _typesObjectType = require("../types/object-type");

var _typesObjectType2 = _interopRequireDefault(_typesObjectType);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _utilsFunc = require("../utils/func");

var func = _interopRequireWildcard(_utilsFunc);

function isObject(obj) {
	if (!obj) {
		return false;
	}

	if (obj.isPrimitive) {
		return obj.value && obj.type === "object";
	}

	return true;
}

function defineProperty(env, obj, name, descriptor) {
	if (!isObject(descriptor)) {
		throw new TypeError("Property description must be an object: " + convert.toString(env, descriptor));
	}

	var undef = env.global.getValue("undefined");
	var options = {};

	if (descriptor) {
		(function () {
			var hasValue = descriptor.hasProperty("value");
			var hasGetter = descriptor.hasProperty("get");
			var hasSetter = descriptor.hasProperty("set");

			if ((hasValue || descriptor.hasProperty("writable")) && (hasGetter || hasSetter)) {
				throw new TypeError("Invalid property. A property cannot both have accessors and be writable or have a value");
			}

			["writable", "enumerable", "configurable"].forEach(function (prop) {
				if (descriptor.hasProperty(prop)) {
					var attrValue = descriptor.getValue(prop);
					options[prop] = convert.toBoolean(attrValue);
				}
			});

			var currentScope = env.current.scope;

			// we only keep a copy of the original getter/setter for use with `getOwnPropertyDescriptor`
			if (hasGetter) {
				(function () {
					var getter = descriptor.getValue("get") || undef;
					if (getter.isPrimitive && getter.value === undefined) {
						options.get = options.getter = undefined;
					} else {
						if (getter.className !== "Function") {
							throw new TypeError("Getter must be a function: " + convert.toString(env, getter));
						}

						options.get = getter;
						options.getter = function () {
							var scope = env.setScope(currentScope);
							var thisArg = getter.isStrict() ? this : convert.toObject(env, this);

							return scope.use(function () {
								var getResult = func.getFunctionResult(env, getter, getter.node.params, [], thisArg, getter.node);
								return getResult && getResult.exit ? getResult.result.getValue() : undef;
							});
						};
					}
				})();
			}

			if (hasSetter) {
				(function () {
					var setter = descriptor.getValue("set") || undef;
					if (setter.isPrimitive && setter.value === undefined) {
						options.set = options.setter = undefined;
					} else {
						if (setter.className !== "Function") {
							throw new TypeError("Setter must be a function: " + convert.toString(env, setter));
						}

						options.set = setter;
						options.setter = function () {
							var _arguments = arguments;

							var scope = env.setScope(currentScope);
							var thisArg = setter.isStrict() ? this : convert.toObject(env, this);

							return scope.use(function () {
								func.executeFunction(env, setter, setter.node.params, _arguments, thisArg, setter.node);
								return undef;
							});
						};
					}
				})();
			}

			if (hasValue) {
				options.value = descriptor.getValue("value") || undef;
			}
		})();
	}

	obj.defineOwnProperty(name, options, true, env);
}

function objectApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;
	var undef = globalObject.getValue("undefined");

	var proto = new _typesObjectType2["default"]();
	var objectClass = objectFactory.createFunction(function (value) {
		if (value) {
			if (value.isPrimitive) {
				if (value.value == null) {
					return objectFactory.createObject();
				}

				var objectWrapper = objectFactory.createPrimitive(value.value);
				objectWrapper.type = "object";
				objectWrapper.isPrimitive = false;
				return objectWrapper;
			}

			// if an object is passed in just return
			return value;
		}

		return objectFactory.createObject();
	}, proto, { configurable: false, enumerable: false, writable: false });

	proto.define("hasOwnProperty", objectFactory.createBuiltInFunction(function (name) {
		name = convert.toString(env, name);
		return objectFactory.createPrimitive(name in this.node.properties);
	}, 1, "Object.prototype.hasOwnProperty"));

	proto.define("valueOf", objectFactory.createBuiltInFunction(function () {
		return convert.toObject(env, this.node);
	}, 0, "Object.prototype.valueOf"));

	var toStringFunc = objectFactory.createBuiltInFunction(function () {
		var className = this.node ? this.node.className : "Undefined";
		return objectFactory.createPrimitive("[object " + className + "]");
	}, 0, "Object.prototype.toString");

	// Object.prototype.toString === Object.prototype.toLocaleString
	proto.define("toString", toStringFunc);
	proto.define("toLocaleString", toStringFunc);

	proto.define("isPrototypeOf", objectFactory.createBuiltInFunction(function (obj) {
		var current = obj;
		while (current) {
			if (this.node === current) {
				return objectFactory.createPrimitive(true);
			}

			current = current.getPrototype();
		}

		return objectFactory.createPrimitive(false);
	}, 1, "Object.isPrototypeOf"));

	proto.define("propertyIsEnumerable", objectFactory.createBuiltInFunction(function (name) {
		name = convert.toString(env, name);
		var descriptor = this.node.getOwnProperty(name);
		return objectFactory.createPrimitive(!!(descriptor && descriptor.enumerable));
	}, 1, "Object.propertyIsEnumerable"));

	objectClass.define("create", objectFactory.createBuiltInFunction(function (parent, descriptors) {
		if (parent && parent.isPrimitive && parent.value !== null) {
			throw new TypeError("Object prototype may only be an Object or null:" + convert.toString(env, parent));
		}

		if (descriptors && descriptors.isPrimitive && descriptors.value === null) {
			throw new TypeError("Cannot convert null or undefined to object");
		}

		var obj = objectFactory.createObject();

		if (parent) {
			obj.setPrototype(parent);
		}

		if (descriptors) {
			for (var prop in descriptors.properties) {
				if (descriptors.properties[prop].enumerable) {
					defineProperty(env, obj, prop, descriptors.getValue(prop));
				}
			}
		}

		return obj;
	}, 2, "Object.create"));

	objectClass.define("defineProperty", objectFactory.createBuiltInFunction(function (obj, prop, descriptor) {
		contracts.assertIsObject(obj, "Object.defineProperty");

		defineProperty(env, obj, convert.toString(env, prop), descriptor);
		return obj;
	}, 3, "Object.defineProperty"));

	objectClass.define("defineProperties", objectFactory.createBuiltInFunction(function (obj, descriptors) {
		contracts.assertIsObject(obj, "Object.defineProperties");
		contracts.assertArgIsNotNullOrUndefined(descriptors);

		for (var prop in descriptors.properties) {
			if (descriptors.properties[prop].enumerable) {
				defineProperty(env, obj, prop, descriptors.getValue(prop));
			}
		}

		return obj;
	}, 2, "Object.defineProperties"));

	objectClass.define("getOwnPropertyDescriptor", objectFactory.createBuiltInFunction(function (obj, prop) {
		contracts.assertIsObject(obj, "Object.getOwnPropertyDescriptor");

		prop = convert.toString(env, prop);

		if (obj.hasOwnProperty(prop)) {
			var descriptor = obj.getProperty(prop);

			var result = objectFactory.createObject();
			result.putValue("configurable", objectFactory.createPrimitive(descriptor.configurable), false, env);
			result.putValue("enumerable", objectFactory.createPrimitive(descriptor.enumerable), false, env);

			if (descriptor.dataProperty) {
				result.putValue("value", descriptor.value, false, env);
				result.putValue("writable", objectFactory.createPrimitive(descriptor.writable), false, env);
			} else {
				result.putValue("get", descriptor.get || undef, false, env);
				result.putValue("set", descriptor.set || undef, false, env);
			}

			return result;
		}

		return undef;
	}, 2, "Object.getOwnPropertyDescriptor"));

	objectClass.define("keys", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj);

		var arr = objectFactory.create("Array");
		var index = 0;

		for (var _name in obj.properties) {
			if (obj.properties[_name].enumerable) {
				var value = objectFactory.createPrimitive(_name);
				arr.defineOwnProperty(index++, { configurable: true, enumerable: true, writable: true, value: value }, false, env);
			}
		}

		return arr;
	}, 1, "Object.keys"));

	objectClass.define("getOwnPropertyNames", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj, "Object.getOwnPropertyNames");

		var arr = objectFactory.create("Array");
		obj.getOwnPropertyNames().forEach(function (name, index) {
			arr.putValue(index, objectFactory.createPrimitive(name), true, env);
		});

		return arr;
	}, 1, "Object.getOwnPropertyNames"));

	objectClass.define("getPrototypeOf", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj, "Object.getPrototypeOf");

		var objProto = obj.getPrototype();
		return objProto || env.global.getValue("null");
	}, 1, "Object.getPrototypeOf"));

	objectClass.define("freeze", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj, "Object.freeze");
		obj.freeze();
		return obj;
	}, 1, "Object.freeze"));

	objectClass.define("isFrozen", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj, "Object.isFrozen");

		if (obj.isPrimitive) {
			return objectFactory.createPrimitive(true);
		}

		if (!obj.extensible) {
			for (var prop in obj.properties) {
				if (obj.properties[prop].writable || obj.properties[prop].configurable) {
					return objectFactory.createPrimitive(false);
				}
			}
		}

		return objectFactory.createPrimitive(!obj.extensible);
	}, 1, "Object.isFrozen"));

	objectClass.define("preventExtensions", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj, "Object.preventExtensions");

		obj.preventExtensions();
		return obj;
	}, 1, "Object.preventExtensions"));

	objectClass.define("isExtensible", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj, "Object.isExtensible");

		return objectFactory.createPrimitive(obj.extensible);
	}, 1, "Object.isExtensible"));

	objectClass.define("seal", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj, "Object.seal");

		obj.seal();
		return obj;
	}, 1, "Object.seal"));

	objectClass.define("isSealed", objectFactory.createBuiltInFunction(function (obj) {
		contracts.assertIsObject(obj, "Object.isSealed");

		if (!obj.extensible) {
			for (var prop in obj.properties) {
				if (obj.properties[prop].configurable) {
					return objectFactory.createPrimitive(false);
				}
			}
		}

		return objectFactory.createPrimitive(!obj.extensible);
	}, 1, "Object.isSealed"));

	// function is an object - make sure that it is in the prototype chain
	globalObject.getValue("Function").getPrototype().setPrototype(proto);
	globalObject.define("Object", objectClass);
}

module.exports = exports["default"];
},{"../types/object-type":203,"../utils/contracts":210,"../utils/convert":211,"../utils/func":212,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],177:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = regexApi;

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

function regexApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var regexClass = objectFactory.createFunction(function (pattern, flags) {
		if (pattern && pattern.className === "RegExp") {
			if (!contracts.isUndefined(flags)) {
				throw new TypeError("Cannot supply flags when constructing one RegExp from another");
			}

			return pattern;
		}

		var patternString = contracts.isUndefined(pattern) ? "" : convert.toString(env, pattern);
		flags = contracts.isUndefined(flags) ? "" : convert.toString(env, flags);

		return objectFactory.create("RegExp", new RegExp(patternString, flags));
	}, null, { configurable: false, enumerable: false, writable: false });

	var proto = regexClass.getValue("prototype");
	proto.className = "RegExp";

	proto.define("test", objectFactory.createBuiltInFunction(function (str) {
		var stringValue = convert.toString(env, str);

		this.node.source.lastIndex = convert.toInt32(env, this.node.getValue("lastIndex"));
		var testValue = this.node.source.test(stringValue);
		this.node.putValue("lastIndex", objectFactory.createPrimitive(this.node.source.lastIndex), true, env);

		return objectFactory.createPrimitive(testValue);
	}, 1, "RegExp.prototype.test"));

	proto.define("exec", objectFactory.createBuiltInFunction(function (str) {
		var stringValue = convert.toString(env, str);

		// update underlying regex in case the index was manually updated
		this.node.source.lastIndex = convert.toInt32(env, this.node.getValue("lastIndex"));

		// get match from underlying regex
		var match = this.node.source.exec(stringValue);

		// update the last index from the underlying regex
		this.node.putValue("lastIndex", objectFactory.createPrimitive(this.node.source.lastIndex), true, env);

		if (match) {
			var arr = objectFactory.create("Array");
			for (var i = 0, ln = match.length; i < ln; i++) {
				arr.putValue(i, objectFactory.createPrimitive(match[i]), true, env);
			}

			// extra properties are added to the array
			arr.putValue("index", objectFactory.createPrimitive(match.index), false, env);
			arr.putValue("input", objectFactory.createPrimitive(match.input), false, env);
			return arr;
		}

		return this.env.global.getValue("null");
	}, 1, "RegExp.prototype.exec"));

	proto.define("toString", objectFactory.createBuiltInFunction(function () {
		return objectFactory.createPrimitive(String(this.node.source));
	}, 0, "RegExp.prototype.toString"));

	proto.define("compile", convert.toNativeFunction(env, RegExp.prototype.compile, "RegExp.prototype.compile"));
	proto.defineOwnProperty("lastIndex", { value: objectFactory.createPrimitive(0), writable: true });

	["global", "ignoreCase", "multiline", "source"].forEach(function (name) {
		proto.defineOwnProperty(name, { value: objectFactory.createPrimitive(RegExp.prototype[name]) });
	});

	globalObject.define("RegExp", regexClass);
}

module.exports = exports["default"];
},{"../utils/contracts":210,"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19}],178:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = stringApi;

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _utilsFunc = require("../utils/func");

var func = _interopRequireWildcard(_utilsFunc);

var protoMethods = ["charAt", "charCodeAt", "concat", "indexOf", "lastIndexOf", "localeCompare", "substr", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase"];
var slice = Array.prototype.slice;

function stringApi(env) {
	var globalObject = env.global;
	var undef = globalObject.getValue("undefined");
	var objectFactory = env.objectFactory;

	var stringClass = objectFactory.createFunction(function (value) {
		var stringValue = value ? convert.toString(env, value.getValue()) : "";

		// called as new
		if (this.isNew) {
			return convert.primitiveToObject(env, stringValue);
		}

		return objectFactory.createPrimitive(stringValue);
	}, null, { configurable: false, enumerable: false, writable: false });

	var proto = stringClass.getValue("prototype");

	// prototype can be coerced into an empty string
	proto.value = "";
	proto.className = "String";
	proto.defineOwnProperty("length", { value: objectFactory.createPrimitive(0) });

	proto.define("search", objectFactory.createBuiltInFunction(function (regex) {
		var stringValue = convert.toString(env, this.node);
		var underlyingRegex = undefined;

		if (regex) {
			if (regex.className === "RegExp") {
				underlyingRegex = regex.source;
			} else {
				underlyingRegex = new RegExp(convert.toString(env, regex));
			}
		}

		return objectFactory.createPrimitive(stringValue.search(underlyingRegex));
	}, 1, "String.prototype.search"));

	proto.define("substring", objectFactory.createBuiltInFunction(function (start, end) {
		contracts.assertIsNotConstructor(this, "substring");

		var value = convert.toPrimitive(env, this.node, "string");
		var length = value.length;

		start = convert.toInteger(env, start);
		end = contracts.isNullOrUndefined(end) ? length : convert.toInteger(env, end);

		return objectFactory.createPrimitive(value.substring(start, end));
	}, 2, "String.prototype.substring"));

	protoMethods.forEach(function (name) {
		var fn = String.prototype[name];
		if (fn) {
			proto.define(name, objectFactory.createBuiltInFunction(function () {
				var stringValue = convert.toString(env, this.node);
				var args = slice.call(arguments).map(function (arg) {
					return convert.toPrimitive(env, arg);
				});
				return objectFactory.createPrimitive(String.prototype[name].apply(stringValue, args));
			}, String.prototype[name].length, "String.prototype." + name));
		}
	});

	stringClass.define("fromCharCode", objectFactory.createBuiltInFunction(function () {
		for (var _len = arguments.length, charCodes = Array(_len), _key = 0; _key < _len; _key++) {
			charCodes[_key] = arguments[_key];
		}

		var args = charCodes.map(function (arg) {
			return convert.toPrimitive(env, arg);
		});
		return objectFactory.createPrimitive(String.fromCharCode.apply(null, args));
	}, 1, "String.fromCharCode"));

	proto.define("slice", objectFactory.createBuiltInFunction(function (start, end) {
		var stringValue = convert.toString(env, this.node);
		var startValue = convert.toInteger(env, start);
		var endValue = undefined;

		if (!contracts.isNullOrUndefined(end)) {
			endValue = convert.toInteger(env, end);
		}

		return objectFactory.createPrimitive(stringValue.slice(startValue, endValue));
	}, 2, "String.prototype.slice"));

	proto.define("split", objectFactory.createBuiltInFunction(function (separator, limit) {
		var stringValue = convert.toString(env, this.node);
		separator = separator && separator.getValue();
		limit = limit && limit.getValue();
		var limitValue = contracts.isUndefined(limit) ? undefined : convert.toUInt32(env, limit);

		var arr = objectFactory.create("Array");
		if (contracts.isUndefined(separator)) {
			arr.putValue(0, objectFactory.createPrimitive(stringValue), false, env);
		} else {
			var separatorValue = undefined;
			if (separator.className === "RegExp") {
				separatorValue = separator.source;
			} else {
				separatorValue = convert.toString(env, separator);
			}

			var result = stringValue.split(separatorValue, limitValue);
			result.forEach(function (value, index) {
				arr.putValue(index, objectFactory.createPrimitive(value), false, env);
			});
		}

		return arr;
	}, 2, "String.prototype.split"));

	proto.define("replace", objectFactory.createBuiltInFunction(function (regexOrSubstr, substrOrFn) {
		var stringValue = convert.toString(env, this.node);

		var matcher = undefined;
		if (regexOrSubstr && regexOrSubstr.className === "RegExp") {
			matcher = regexOrSubstr.source;
		} else {
			matcher = convert.toString(env, regexOrSubstr);
		}

		var replacer = undefined;
		if (substrOrFn && substrOrFn.type === "function") {
			(function () {
				var callee = substrOrFn.native ? substrOrFn : substrOrFn.node;
				var params = callee.params || [];

				replacer = function () {
					var thisArg = substrOrFn.isStrict() || substrOrFn.isStrict() ? undef : globalObject;
					var args = slice.call(arguments).map(function (arg) {
						return objectFactory.createPrimitive(arg);
					});
					var replacedValue = func.executeFunction(env, substrOrFn, params, args, thisArg, callee);
					return replacedValue ? convert.toString(env, replacedValue) : undefined;
				};
			})();
		} else {
			replacer = convert.toString(env, substrOrFn);
		}

		return objectFactory.createPrimitive(stringValue.replace(matcher, replacer));
	}, 2, "String.prototype.replace"));

	proto.define("match", objectFactory.createBuiltInFunction(function (regex) {
		var stringValue = convert.toString(env, this.node);
		var actualRegex = undefined;

		if (regex && regex.className === "RegExp") {
			actualRegex = regex.source;
		} else if (regex) {
			actualRegex = new RegExp(convert.toPrimitive(env, regex));
		}

		var match = stringValue.match(actualRegex);
		if (match) {
			var _ret2 = (function () {
				var matches = objectFactory.create("Array");

				match.forEach(function (value, index) {
					matches.putValue(index, objectFactory.createPrimitive(value), false, env);
				});

				matches.putValue("index", objectFactory.createPrimitive(match.index), false, env);
				matches.putValue("input", objectFactory.createPrimitive(match.input), false, env);
				return {
					v: matches
				};
			})();

			if (typeof _ret2 === "object") return _ret2.v;
		}

		return globalObject.getValue("null");
	}, 1, "String.prototype.match"));

	proto.define("trim", objectFactory.createBuiltInFunction(function () {
		contracts.assertIsNotNullOrUndefined(this.node, "String.prototype.trim");

		var stringValue = convert.toPrimitive(env, this.node, "string");
		return objectFactory.createPrimitive(stringValue.trim());
	}, 0, "String.prototype.trim"));

	proto.define("toString", objectFactory.createBuiltInFunction(function () {
		contracts.assertIsNotGeneric(this.node, "String", "String.prototype.toString");
		return objectFactory.createPrimitive(this.node.value);
	}, 0, "String.prototype.toString"));

	proto.define("valueOf", objectFactory.createBuiltInFunction(function () {
		contracts.assertIsNotGeneric(this.node, "String", "String.prototype.valueOf");
		return objectFactory.createPrimitive(this.node.value);
	}, 0, "String.prototype.valueOf"));

	globalObject.define("String", stringClass);
}

module.exports = exports["default"];
},{"../utils/contracts":210,"../utils/convert":211,"../utils/func":212,"babel-runtime/helpers/interop-require-wildcard":19}],179:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reference = require("./reference");

var _reference2 = _interopRequireDefault(_reference);

var _typesPropertyDescriptor = require("../types/property-descriptor");

var _typesPropertyDescriptor2 = _interopRequireDefault(_typesPropertyDescriptor);

var DeclarativeEnvironment = (function () {
	function DeclarativeEnvironment(parent, thisArg, env) {
		_classCallCheck(this, DeclarativeEnvironment);

		this.properties = _Object$create(null);
		this.parent = parent && parent.scope;
		this.strict = parent.strict;
		this.thisBinding = thisArg;
		this.env = env;
	}

	_createClass(DeclarativeEnvironment, [{
		key: "getReference",
		value: function getReference(name) {
			var ref = new _reference2["default"](name, this, this.env);
			ref.unqualified = true;
			return ref;
		}
	}, {
		key: "hasProperty",
		value: function hasProperty(name) {
			return name in this.properties;
		}
	}, {
		key: "hasOwnProperty",
		value: function hasOwnProperty(name) {
			return this.hasProperty(name);
		}
	}, {
		key: "deleteVariable",
		value: function deleteVariable(name) {
			if (!this.hasProperty(name)) {
				return true;
			}

			if (!this.properties[name].configurable) {
				return false;
			}

			delete this.properties[name];
			return true;
		}
	}, {
		key: "createVariable",
		value: function createVariable(name) {
			if (this.hasProperty(name)) {
				return this.properties[name];
			}

			return this.properties[name] = new _typesPropertyDescriptor2["default"](this, {
				value: undefined,
				configurable: false,
				enumerable: true,
				writable: true
			});
		}
	}, {
		key: "putValue",
		value: function putValue(name, value, throwOnError) {
			if (this.hasProperty(name)) {
				if (!this.properties[name].writable) {
					if (throwOnError) {
						throw new TypeError("Cannot write to immutable binding: " + name);
					}

					return;
				}

				this.properties[name].setValue(value);
			} else {
				this.parent.putValue.apply(this.parent, arguments);
			}
		}
	}, {
		key: "getValue",
		value: function getValue(name, throwOnError) {
			if (this.hasProperty(name)) {
				if (!this.properties[name].value) {
					if (throwOnError) {
						throw new ReferenceError(name + " is not defined");
					}

					return undefined;
				}

				return this.properties[name].getValue();
			}
		}
	}, {
		key: "getThisBinding",
		value: function getThisBinding() {
			return this.thisBinding;
		}
	}]);

	return DeclarativeEnvironment;
})();

exports["default"] = DeclarativeEnvironment;
module.exports = exports["default"];
},{"../types/property-descriptor":205,"./reference":184,"babel-runtime/core-js/object/create":5,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/interop-require-default":18}],180:[function(require,module,exports){
// todo: switch to estree-walker
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.visit = visit;

function visit(node, callback) {
	if (!node) {
		return;
	}

	if (Array.isArray(node)) {
		node.forEach(function (n) {
			return visit(n, callback);
		});
		return;
	}

	switch (node.type) {
		case "Program":
		case "BlockStatement":
			visit(node.body, callback);
			break;

		case "CatchClause":
			visit(node.body, callback);
			break;

		case "DoWhileStatement":
		case "WhileStatement":
			visit(node.test, callback);
			visit(node.body, callback);
			break;

		case "ExpressionStatement":
			visit(node.expression, callback);
			break;

		case "ForStatement":
			visit(node.init, callback);
			visit(node.body, callback);
			break;

		case "ForInStatement":
			visit(node.left, callback);
			visit(node.body, callback);
			break;

		case "IfStatement":
			// do not scan `test`
			visit(node.consequent, callback);
			visit(node.alternate, callback);
			break;

		case "LabeledStatement":
			visit(node.body, callback);
			break;

		case "SwitchStatement":
			visit(node.discriminant, callback);
			break;

		case "SwitchCase":
			visit(node.consequent, callback);
			break;

		case "TryStatement":
			visit(node.block, callback);
			visit(node.handler, callback);
			visit(node.finalizer, callback);
			break;

		case "VariableDeclaration":
			visit(node.declarations, callback);
			break;

		case "FunctionDeclaration":
		case "VariableDeclarator":
			callback(node);
			break;

		default:
		// ignore all other nodes
	}
}

;
},{}],181:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _executionContext = require("../execution-context");

var _executionContext2 = _interopRequireDefault(_executionContext);

var _declarativeEnvironment = require("./declarative-environment");

var _declarativeEnvironment2 = _interopRequireDefault(_declarativeEnvironment);

var _objectEnvironment = require("./object-environment");

var _objectEnvironment2 = _interopRequireDefault(_objectEnvironment);

var _reference = require("./reference");

var _reference2 = _interopRequireDefault(_reference);

var _ecma51 = require("../ecma-5.1");

var _ecma512 = _interopRequireDefault(_ecma51);

var _utilsComparers = require("../utils/comparers");

var _utilsComparers2 = _interopRequireDefault(_utilsComparers);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _scope = require("./scope");

var _scope2 = _interopRequireDefault(_scope);

var defaultOptions = {
	allowDebugger: false,
	useStrict: false
};

var Environment = (function () {
	function Environment() {
		_classCallCheck(this, Environment);
	}

	_createClass(Environment, [{
		key: "init",
		value: function init() {
			var options = arguments.length <= 0 || arguments[0] === undefined ? defaultOptions : arguments[0];

			// clear state in case of re-init
			this.current = null;
			this.globalScope = null;

			this.options = _Object$assign(this.options || {}, defaultOptions, options);
			(0, _ecma512["default"])(this);

			// todo: improve this
			this.ops = _Object$assign(_utilsComparers2["default"], options.comparers);
		}
	}, {
		key: "evaluate",
		value: function evaluate(left, right, operator) {
			// todo: improve this - why do we need this here?
			return this.ops[operator](this, left, right);
		}
	}, {
		key: "getReference",
		value: function getReference(name) {
			var scope = this.current && this.current.scope;
			while (scope) {
				if (scope.hasOwnProperty(name)) {
					return scope.getReference(name, true);
				}

				scope = scope.parent;
			}

			return new _reference2["default"](name, undefined, this);
		}
	}, {
		key: "getValue",
		value: function getValue(name) {
			return this.getReference(name).getValue();
		}
	}, {
		key: "putValue",
		value: function putValue(name, value, strict) {
			this.current.scope.putValue(name, value, strict);
		}
	}, {
		key: "hasProperty",
		value: function hasProperty(name) {
			return this.current.scope.hasProperty(name);
		}
	}, {
		key: "deleteVariable",
		value: function deleteVariable(name) {
			this.current.scope.deleteVariable(name);
		}
	}, {
		key: "createVariable",
		value: function createVariable(name, immutable) {
			contracts.assertIsValidIdentifier(name, this.isStrict());
			return this.current.scope.createVariable(name, !immutable);
		}
	}, {
		key: "isStrict",
		value: function isStrict() {
			if (this.options.useStrict) {
				return true;
			}

			var scope = this.current && this.current.scope;
			while (scope) {
				if (scope.strict) {
					return true;
				}

				scope = scope.parent;
			}

			return false;
		}
	}, {
		key: "getThisBinding",
		value: function getThisBinding() {
			var thisArg = this.current.scope.getThisBinding();
			if (thisArg) {
				return thisArg;
			}

			if (this.isStrict()) {
				return this.global.getValue("undefined");
			}

			return this.global;
		}
	}, {
		key: "createExecutionContext",
		value: function createExecutionContext(node, callee, isNew) {
			return new _executionContext2["default"](this, node, callee, isNew);
		}
	}, {
		key: "createScope",
		value: function createScope(thisArg) {
			return this.setScope(new _declarativeEnvironment2["default"](this.current, thisArg, this));
		}
	}, {
		key: "createObjectScope",
		value: function createObjectScope(obj, thisArg) {
			return this.setScope(new _objectEnvironment2["default"](this.current, obj, thisArg, this));
		}
	}, {
		key: "setScope",
		value: function setScope(scope) {
			return this.current = new _scope2["default"](this, scope);
		}
	}]);

	return Environment;
})();

exports["default"] = Environment;
module.exports = exports["default"];
},{"../ecma-5.1":172,"../execution-context":187,"../utils/comparers":209,"../utils/contracts":210,"./declarative-environment":179,"./object-environment":182,"./reference":184,"./scope":185,"babel-runtime/core-js/object/assign":4,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],182:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propertyReference = require("./property-reference");

var _propertyReference2 = _interopRequireDefault(_propertyReference);

var ObjectEnvironment = (function () {
	function ObjectEnvironment(parent, obj, thisArg, env) {
		_classCallCheck(this, ObjectEnvironment);

		this.parent = parent && parent.scope;
		this.strict = parent && parent.strict;
		this.object = obj;
		this.thisBinding = thisArg || obj;
		this.env = env;
	}

	_createClass(ObjectEnvironment, [{
		key: "getReference",
		value: function getReference(name, unqualified) {
			var ref = new _propertyReference2["default"](name, this.object, this.env);
			ref.unqualified = unqualified;
			return ref;
		}
	}, {
		key: "hasProperty",
		value: function hasProperty(name) {
			return this.parent ? this.parent.hasProperty(name) : this.hasOwnProperty(name);
		}
	}, {
		key: "hasOwnProperty",
		value: function hasOwnProperty(name) {
			return this.object.hasProperty(name);
		}
	}, {
		key: "getVariable",
		value: function getVariable(name) {
			return this.object.getProperty(name);
		}
	}, {
		key: "deleteVariable",
		value: function deleteVariable(name) {
			return this.object.deleteProperty(name, false);
		}
	}, {
		key: "createVariable",
		value: function createVariable(name, immutable) {
			if (this.parent) {
				return this.parent.createVariable.apply(this.parent, arguments);
			} else {
				this.object.defineOwnProperty(name, {
					value: undefined,
					configurable: immutable,
					enumerable: true,
					writable: true
				}, this.env.isStrict());

				return this.object.getProperty(name);
			}
		}
	}, {
		key: "putValue",
		value: function putValue(name, value, throwOnError) {
			if (this.parent && !this.object.hasProperty(name)) {
				this.parent.putValue.apply(this.parent, arguments);
			} else {
				this.object.putValue(name, value, throwOnError);
			}
		}
	}, {
		key: "getValue",
		value: function getValue(name, throwOnError) {
			if (!this.hasOwnProperty(name)) {
				if (throwOnError) {
					throw new ReferenceError(name + " is not defined.");
				}

				return undefined;
			}

			return this.object.getValue(name);
		}
	}, {
		key: "getThisBinding",
		value: function getThisBinding() {
			return this.thisBinding;
		}
	}]);

	return ObjectEnvironment;
})();

exports["default"] = ObjectEnvironment;
module.exports = exports["default"];
},{"./property-reference":183,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/interop-require-default":18}],183:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reference = require("./reference");

var _reference2 = _interopRequireDefault(_reference);

var _typesPrimitiveType = require("../types/primitive-type");

var _typesPrimitiveType2 = _interopRequireDefault(_typesPrimitiveType);

var PropertyReference = (function (_Reference) {
	_inherits(PropertyReference, _Reference);

	function PropertyReference(name, object, env) {
		_classCallCheck(this, PropertyReference);

		_get(Object.getPrototypeOf(PropertyReference.prototype), "constructor", this).call(this, name, object, env);
		this.isPropertyReference = true;
	}

	_createClass(PropertyReference, [{
		key: "getValue",
		value: function getValue() {
			var prop = this.base.getProperty(this.name);
			return prop && prop.getValue() || new _typesPrimitiveType2["default"]();
		}
	}, {
		key: "setValue",
		value: function setValue(value) {
			if (this.base.hasProperty(this.name)) {
				this.base.putValue(this.name, value, this.strict, this.env);
			} else {
				this.base.defineOwnProperty(this.name, { value: value, configurable: true, enumerable: true, writable: true }, this.strict, this.env);
			}
		}
	}, {
		key: "deleteBinding",
		value: function deleteBinding(name) {
			return this.base.deleteProperty(name, this.env.isStrict());
		}
	}, {
		key: "isUnresolved",
		value: function isUnresolved() {
			return false;
		}
	}]);

	return PropertyReference;
})(_reference2["default"]);

exports["default"] = PropertyReference;
module.exports = exports["default"];
},{"../types/primitive-type":204,"./reference":184,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18}],184:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var Reference = (function () {
	function Reference(name, base, env) {
		_classCallCheck(this, Reference);

		this.isReference = true;
		this.unqualified = false;

		this.name = name;
		this.base = base;
		this.env = env;
		this.strict = env.isStrict();
	}

	_createClass(Reference, [{
		key: "setValue",
		value: function setValue(value) {
			if (this.base) {
				return this.base.putValue(this.name, value, this.strict);
			}

			contracts.assertIsValidIdentifier(this.name, this.strict);
			if (this.strict) {
				throw new ReferenceError(this.name + " is not defined");
			}

			return this.env.global.defineOwnProperty(this.name, { value: value, configurable: true, enumerable: true, writable: true }, false);
		}
	}, {
		key: "getValue",
		value: function getValue() {
			if (!this.base) {
				throw new ReferenceError(this.name + " is not defined");
			}

			return this.base.getValue(this.name, this.strict);
		}
	}, {
		key: "deleteBinding",
		value: function deleteBinding(name) {
			if (this.base) {
				return this.base.deleteVariable(name);
			}

			return true;
		}
	}, {
		key: "isUnresolved",
		value: function isUnresolved() {
			return !this.base;
		}
	}]);

	return Reference;
})();

exports["default"] = Reference;
module.exports = exports["default"];
},{"../utils/contracts":210,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/interop-require-wildcard":19}],185:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _estreeWalker = require("../estree-walker");

var _estreeWalker2 = _interopRequireDefault(_estreeWalker);

var _hoister = require("./hoister");

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _syntaxRules = require("../syntax-rules");

var _syntaxRules2 = _interopRequireDefault(_syntaxRules);

function validateSyntax(root) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _getIterator(_estreeWalker2["default"].create(root)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var node = _step.value;

			if (node.type in _syntaxRules2["default"]) {
				_syntaxRules2["default"][node.type](node, true);
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator["return"]) {
				_iterator["return"]();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

var Scope = (function () {
	function Scope(env, scope) {
		_classCallCheck(this, Scope);

		env.globalScope = env.globalScope || this;

		this.scope = scope;
		this.env = env;
		this.priorScope = (env.current || env.globalScope).scope;
	}

	_createClass(Scope, [{
		key: "init",
		value: function init(node) {
			var _this = this;

			if (!node) {
				return;
			}

			var env = this.env;
			var undef = env.global.getValue("undefined");
			this.scope.strict = contracts.isStrictNode(node.body);

			var strict = this.scope.strict || env.isStrict();
			if (strict && node.type === "Program") {
				validateSyntax(node);
			}

			(0, _hoister.visit)(node, function (decl) {
				var name = decl.name || decl.id.name;
				contracts.assertIsValidParameterName(name, strict);

				var value = undef;
				if (decl.type === "FunctionDeclaration") {
					// functions can be used before they are defined
					value = env.objectFactory.createFunction(decl, null, null, strict || contracts.isStrictNode(decl.body.body));
					value.bindScope(_this);
				} else if (_this.scope.hasProperty(name)) {
					return;
				}

				var newVar = env.createVariable(name, true);
				newVar.setValue(value);
			});
		}
	}, {
		key: "loadArgs",
		value: function loadArgs(params, args, callee) {
			var env = this.env;
			var scope = this.scope;

			var undef = env.global.getValue("undefined");
			var strict = env.isStrict() || callee.isStrict();

			var argumentList = env.objectFactory.createArguments(args, callee, strict);
			scope.createVariable("arguments");
			scope.putValue("arguments", argumentList);

			params.forEach(function (param, index) {
				contracts.assertIsValidParameterName(param.name, strict);

				if (!callee.isStrict() && !scope.hasProperty(param.name)) {
					var descriptor = scope.createVariable(param.name);
					if (args.length > index) {
						argumentList.mapProperty(index, descriptor);
					}
				}

				scope.putValue(param.name, args[index] || undef);
			});

			// just set value if additional, unnamed arguments are passed in
			var i = callee.isStrict() ? 0 : params.length;
			var length = args.length;

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
				enumerable: false,
				writable: true
			});
		}
	}, {
		key: "use",
		value: function use(inner) {
			try {
				var result = inner();
				this.exit();
				return result;
			} catch (err) {
				this.exit();
				throw err;
			}
		}
	}, {
		key: "exit",
		value: function exit() {
			this.env.setScope(this.priorScope);
		}
	}]);

	return Scope;
})();

exports["default"] = Scope;
module.exports = exports["default"];
},{"../estree-walker":186,"../syntax-rules":195,"../utils/contracts":210,"./hoister":180,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],186:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var marked0$0 = [walk].map(_regeneratorRuntime.mark);

function walk(node) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, n;

	return _regeneratorRuntime.wrap(function walk$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!Array.isArray(node)) {
					context$1$0.next = 27;
					break;
				}

				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 4;
				_iterator = _getIterator(node);

			case 6:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 12;
					break;
				}

				n = _step.value;
				return context$1$0.delegateYield(walk(n), "t0", 9);

			case 9:
				_iteratorNormalCompletion = true;
				context$1$0.next = 6;
				break;

			case 12:
				context$1$0.next = 18;
				break;

			case 14:
				context$1$0.prev = 14;
				context$1$0.t1 = context$1$0["catch"](4);
				_didIteratorError = true;
				_iteratorError = context$1$0.t1;

			case 18:
				context$1$0.prev = 18;
				context$1$0.prev = 19;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 21:
				context$1$0.prev = 21;

				if (!_didIteratorError) {
					context$1$0.next = 24;
					break;
				}

				throw _iteratorError;

			case 24:
				return context$1$0.finish(21);

			case 25:
				return context$1$0.finish(18);

			case 26:
				return context$1$0.abrupt("return");

			case 27:
				context$1$0.next = 29;
				return node;

			case 29:
				context$1$0.t2 = node.type;
				context$1$0.next = context$1$0.t2 === "ArrayExpression" ? 32 : context$1$0.t2 === "AssignmentExpression" ? 35 : context$1$0.t2 === "BinaryExpression" ? 38 : context$1$0.t2 === "LogicalExpression" ? 38 : context$1$0.t2 === "BlockStatement" ? 41 : context$1$0.t2 === "LabeledStatement" ? 41 : context$1$0.t2 === "Program" ? 41 : context$1$0.t2 === "CallExpression" ? 43 : context$1$0.t2 === "NewExpression" ? 43 : context$1$0.t2 === "CatchClause" ? 46 : context$1$0.t2 === "ConditionalExpression" ? 49 : context$1$0.t2 === "IfStatement" ? 49 : context$1$0.t2 === "DoWhileStatement" ? 54 : context$1$0.t2 === "ExpressionStatement" ? 57 : context$1$0.t2 === "ForStatement" ? 59 : context$1$0.t2 === "ForInStatement" ? 67 : context$1$0.t2 === "FunctionDeclaration" ? 71 : context$1$0.t2 === "FunctionExpression" ? 71 : context$1$0.t2 === "MemberExpression" ? 76 : context$1$0.t2 === "ObjectExpression" ? 80 : context$1$0.t2 === "Property" ? 82 : context$1$0.t2 === "ReturnStatement" ? 84 : context$1$0.t2 === "SequenceExpression" ? 87 : context$1$0.t2 === "SwitchStatement" ? 89 : context$1$0.t2 === "SwitchCase" ? 92 : context$1$0.t2 === "ThrowStatement" ? 94 : context$1$0.t2 === "UnaryExpression" ? 94 : context$1$0.t2 === "UpdateExpression" ? 94 : context$1$0.t2 === "TryStatement" ? 96 : context$1$0.t2 === "VariableDeclaration" ? 102 : context$1$0.t2 === "VariableDeclarator" ? 104 : context$1$0.t2 === "WhileStatement" ? 108 : context$1$0.t2 === "WithStatement" ? 111 : context$1$0.t2 === "BreakStatement" ? 114 : context$1$0.t2 === "ContinueStatement" ? 114 : context$1$0.t2 === "EmptyStatement" ? 114 : context$1$0.t2 === "Identifier" ? 114 : context$1$0.t2 === "Literal" ? 114 : context$1$0.t2 === "ThisExpression" ? 114 : 115;
				break;

			case 32:
				if (!node.elements) {
					context$1$0.next = 34;
					break;
				}

				return context$1$0.delegateYield(walk(node.elements), "t3", 34);

			case 34:
				return context$1$0.abrupt("break", 115);

			case 35:
				return context$1$0.delegateYield(walk(node.right), "t4", 36);

			case 36:
				return context$1$0.delegateYield(walk(node.left), "t5", 37);

			case 37:
				return context$1$0.abrupt("break", 115);

			case 38:
				return context$1$0.delegateYield(walk(node.left), "t6", 39);

			case 39:
				return context$1$0.delegateYield(walk(node.right), "t7", 40);

			case 40:
				return context$1$0.abrupt("break", 115);

			case 41:
				return context$1$0.delegateYield(walk(node.body), "t8", 42);

			case 42:
				return context$1$0.abrupt("break", 115);

			case 43:
				return context$1$0.delegateYield(walk(node.callee), "t9", 44);

			case 44:
				return context$1$0.delegateYield(walk(node.arguments), "t10", 45);

			case 45:
				return context$1$0.abrupt("break", 115);

			case 46:
				return context$1$0.delegateYield(walk(node.param), "t11", 47);

			case 47:
				return context$1$0.delegateYield(walk(node.body), "t12", 48);

			case 48:
				return context$1$0.abrupt("break", 115);

			case 49:
				return context$1$0.delegateYield(walk(node.test), "t13", 50);

			case 50:
				return context$1$0.delegateYield(walk(node.consequent), "t14", 51);

			case 51:
				if (!node.alternate) {
					context$1$0.next = 53;
					break;
				}

				return context$1$0.delegateYield(node.alternate, "t15", 53);

			case 53:
				return context$1$0.abrupt("break", 115);

			case 54:
				return context$1$0.delegateYield(walk(node.body), "t16", 55);

			case 55:
				return context$1$0.delegateYield(walk(node.test), "t17", 56);

			case 56:
				return context$1$0.abrupt("break", 115);

			case 57:
				return context$1$0.delegateYield(walk(node.expression), "t18", 58);

			case 58:
				return context$1$0.abrupt("break", 115);

			case 59:
				if (!node.init) {
					context$1$0.next = 61;
					break;
				}

				return context$1$0.delegateYield(walk(node.init), "t19", 61);

			case 61:
				if (!node.test) {
					context$1$0.next = 63;
					break;
				}

				return context$1$0.delegateYield(walk(node.test), "t20", 63);

			case 63:
				return context$1$0.delegateYield(walk(node.body), "t21", 64);

			case 64:
				if (!node.update) {
					context$1$0.next = 66;
					break;
				}

				return context$1$0.delegateYield(walk(node.update), "t22", 66);

			case 66:
				return context$1$0.abrupt("break", 115);

			case 67:
				return context$1$0.delegateYield(walk(node.right), "t23", 68);

			case 68:
				return context$1$0.delegateYield(walk(node.left), "t24", 69);

			case 69:
				return context$1$0.delegateYield(walk(node.body), "t25", 70);

			case 70:
				return context$1$0.abrupt("break", 115);

			case 71:
				if (!node.id) {
					context$1$0.next = 73;
					break;
				}

				return context$1$0.delegateYield(walk(node.id), "t26", 73);

			case 73:
				return context$1$0.delegateYield(walk(node.params), "t27", 74);

			case 74:
				return context$1$0.delegateYield(walk(node.body), "t28", 75);

			case 75:
				return context$1$0.abrupt("break", 115);

			case 76:
				return context$1$0.delegateYield(walk(node.object), "t29", 77);

			case 77:
				if (!node.computed) {
					context$1$0.next = 79;
					break;
				}

				return context$1$0.delegateYield(walk(node.property), "t30", 79);

			case 79:
				return context$1$0.abrupt("break", 115);

			case 80:
				return context$1$0.delegateYield(walk(node.properties), "t31", 81);

			case 81:
				return context$1$0.abrupt("break", 115);

			case 82:
				return context$1$0.delegateYield(walk(node.value), "t32", 83);

			case 83:
				return context$1$0.abrupt("break", 115);

			case 84:
				if (!node.argument) {
					context$1$0.next = 86;
					break;
				}

				return context$1$0.delegateYield(walk(node.argument), "t33", 86);

			case 86:
				return context$1$0.abrupt("break", 115);

			case 87:
				return context$1$0.delegateYield(walk(node.expressions), "t34", 88);

			case 88:
				return context$1$0.abrupt("break", 115);

			case 89:
				return context$1$0.delegateYield(walk(node.discriminant), "t35", 90);

			case 90:
				return context$1$0.delegateYield(walk(node.cases), "t36", 91);

			case 91:
				return context$1$0.abrupt("break", 115);

			case 92:
				return context$1$0.delegateYield(walk(node.consequent), "t37", 93);

			case 93:
				return context$1$0.abrupt("break", 115);

			case 94:
				return context$1$0.delegateYield(walk(node.argument), "t38", 95);

			case 95:
				return context$1$0.abrupt("break", 115);

			case 96:
				return context$1$0.delegateYield(walk(node.block), "t39", 97);

			case 97:
				if (!node.handler) {
					context$1$0.next = 99;
					break;
				}

				return context$1$0.delegateYield(walk(node.handler), "t40", 99);

			case 99:
				if (!node.finalizer) {
					context$1$0.next = 101;
					break;
				}

				return context$1$0.delegateYield(walk(node.finalizer), "t41", 101);

			case 101:
				return context$1$0.abrupt("break", 115);

			case 102:
				return context$1$0.delegateYield(walk(node.declarations), "t42", 103);

			case 103:
				return context$1$0.abrupt("break", 115);

			case 104:
				return context$1$0.delegateYield(walk(node.id), "t43", 105);

			case 105:
				if (!node.init) {
					context$1$0.next = 107;
					break;
				}

				return context$1$0.delegateYield(walk(node.init), "t44", 107);

			case 107:
				return context$1$0.abrupt("break", 115);

			case 108:
				return context$1$0.delegateYield(walk(node.test), "t45", 109);

			case 109:
				return context$1$0.delegateYield(walk(node.body), "t46", 110);

			case 110:
				return context$1$0.abrupt("break", 115);

			case 111:
				return context$1$0.delegateYield(walk(node.object), "t47", 112);

			case 112:
				return context$1$0.delegateYield(walk(node.body), "t48", 113);

			case 113:
				return context$1$0.abrupt("break", 115);

			case 114:
				return context$1$0.abrupt("break", 115);

			case 115:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this, [[4, 14, 18, 26], [19,, 21, 25]]);
}

var EstreeWalker = (function () {
	function EstreeWalker(node) {
		_classCallCheck(this, EstreeWalker);

		this.root = node;
	}

	_createClass(EstreeWalker, [{
		key: _Symbol$iterator,
		value: function value() {
			return walk(this.root);
		}
	}], [{
		key: "create",
		value: function create(node) {
			return new EstreeWalker(node);
		}
	}]);

	return EstreeWalker;
})();

exports["default"] = EstreeWalker;
;
module.exports = exports["default"];

// right should be evaluated first

// do nothing else
},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/symbol/iterator":12,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/regenerator":20}],187:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ExecutionContext;

var _executionResult = require("./execution-result");

var _executionResult2 = _interopRequireDefault(_executionResult);

var _visitors = require("./visitors");

var _visitors2 = _interopRequireDefault(_visitors);

var _utilsAsync = require("./utils/async");

function ExecutionContext(env, node, callee, isNew) {
	this.node = node;
	this.callee = callee;
	this.env = env;
	this.isNew = !!isNew;

	this.label = "";
	this.value = null;
	this.strict = false;
}

ExecutionContext.prototype = {
	constructor: ExecutionContext,

	execute: (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function callee$0$0() {
		return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
			while (1) switch (context$1$0.prev = context$1$0.next) {
				case 0:
					context$1$0.next = 2;
					return _visitors2["default"].visit(this);

				case 2:
					return context$1$0.abrupt("return", context$1$0.sent);

				case 3:
				case "end":
					return context$1$0.stop();
			}
		}, callee$0$0, this);
	})),

	create: function create(node, callee, isNew) {
		var context = new ExecutionContext(this.env, node, callee || this.callee, isNew);
		context.value = this.value;
		return context;
	},

	createLabel: function createLabel(node, label) {
		var context = this.create(node);
		context.label = label;
		return context;
	},

	cancel: function cancel(label) {
		var result = this.result(this.value, label);
		result.cancel = true;
		return result;
	},

	skip: function skip(label) {
		var result = this.result(this.value, label);
		result.skip = true;
		return result;
	},

	exit: function exit(value) {
		this.callee = null;

		var result = this.result(value);
		result.exit = true;
		return result;
	},

	result: function result(value, name, obj) {
		this.value = value;
		return new _executionResult2["default"](value, name, obj);
	},

	empty: function empty() {
		return this.result();
	}
};
module.exports = exports["default"];
},{"./execution-result":188,"./utils/async":208,"./visitors":229,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/regenerator":20}],188:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ExecutionResult = (function () {
	function ExecutionResult(value, name, obj) {
		_classCallCheck(this, ExecutionResult);

		this.result = value;
		this.name = name;
		this.object = obj;

		this.cancel = false;
		this.cancelled = false;
		this.exit = false;
		this.skip = false;
	}

	_createClass(ExecutionResult, [{
		key: "isCancelled",
		value: function isCancelled() {
			return this.cancel || this.exit;
		}
	}, {
		key: "shouldBreak",
		value: function shouldBreak(context, loop, priorResult) {
			if (this.exit) {
				return true;
			}

			if (!this.cancel && !this.skip) {
				return false;
			}

			var breaking = true;
			if (this.name && this.name === context.label) {
				breaking = this.cancelled = this.cancel;
				this.cancel = this.skip = false;

				if (this.cancelled) {
					this.result = priorResult && priorResult.result || this.result;
				}

				return breaking;
			}

			if (loop && !this.name) {
				breaking = this.cancelled = this.cancel;
				this.cancel = this.skip = false;
			}

			this.result = priorResult && priorResult.result || this.result;
			return breaking;
		}
	}]);

	return ExecutionResult;
})();

exports["default"] = ExecutionResult;
module.exports = exports["default"];
},{"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14}],189:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var marked0$0 = [ascIterator, descIterator, yieldIndex].map(_regeneratorRuntime.mark);

function ascIterator(source, lo, hi) {
	var index;
	return _regeneratorRuntime.wrap(function ascIterator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				index = lo;

			case 1:
				if (!(index < hi)) {
					context$1$0.next = 6;
					break;
				}

				return context$1$0.delegateYield(yieldIndex(source, index), "t0", 3);

			case 3:
				index++;
				context$1$0.next = 1;
				break;

			case 6:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function descIterator(source, lo, hi) {
	var index;
	return _regeneratorRuntime.wrap(function descIterator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				index = hi;

			case 1:
				if (!(index >= lo)) {
					context$1$0.next = 6;
					break;
				}

				return context$1$0.delegateYield(yieldIndex(source, index), "t0", 3);

			case 3:
				index--;
				context$1$0.next = 1;
				break;

			case 6:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

function yieldIndex(source, index) {
	var prop, value;
	return _regeneratorRuntime.wrap(function yieldIndex$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				prop = source.getProperty(index);

				if (!prop) {
					context$1$0.next = 5;
					break;
				}

				value = prop.getValue();
				context$1$0.next = 5;
				return { value: value, index: index };

			case 5:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[2], this);
}

var ArrayIterator = {
	create: function create(obj, lo, hi, desc) {
		return (desc ? descIterator : ascIterator)(obj, lo, hi);
	}
};

exports["default"] = ArrayIterator;
module.exports = exports["default"];
},{"babel-runtime/regenerator":20}],190:[function(require,module,exports){
"use strict";

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringIterator = require("./string-iterator");

var _stringIterator2 = _interopRequireDefault(_stringIterator);

var _sparseIterator = require("./sparse-iterator");

var _sparseIterator2 = _interopRequireDefault(_sparseIterator);

var _arrayIterator = require("./array-iterator");

var _arrayIterator2 = _interopRequireDefault(_arrayIterator);

require("../polyfills");

var SPARE_ARRAY_DENSITY = 0.8;

function arrayIsSparse(arr, length) {
	var ownPropertyCount = _Object$keys(arr.properties).length;

	// this is just to roughly estimate how dense the array is
	var density = (ownPropertyCount - 1) / length;
	return density < SPARE_ARRAY_DENSITY;
}

var iterate = {
	forward: function forward(env, obj, lo, hi) {
		// string will never be dense
		if (obj.className === "String") {
			return _stringIterator2["default"].create(env.objectFactory, obj, lo);
		}

		if (arrayIsSparse(obj, hi)) {
			return _sparseIterator2["default"].create(obj, lo, hi - 1);
		}

		return _arrayIterator2["default"].create(obj, lo, hi);
	},

	reverse: function reverse(env, obj, hi) {
		var lo = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

		if (obj.className === "String") {
			return _stringIterator2["default"].create(env.objectFactory, obj, hi, true);
		}

		if (arrayIsSparse(obj, hi)) {
			return _sparseIterator2["default"].create(obj, lo, hi, true);
		}

		return _arrayIterator2["default"].create(obj, lo, hi, true);
	}
};

exports["default"] = iterate;
module.exports = exports["default"];
},{"../polyfills":194,"./array-iterator":189,"./sparse-iterator":191,"./string-iterator":192,"babel-runtime/core-js/object/keys":8,"babel-runtime/helpers/interop-require-default":18}],191:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

require("../polyfills");

var ASCENDING = function ASCENDING(a, b) {
	return a - b;
};
var DESCENDING = function DESCENDING(a, b) {
	return b - a;
};

var SparseIterator = (function () {
	function SparseIterator(obj, start, end, desc) {
		_classCallCheck(this, SparseIterator);

		this.object = obj;
		this.start = start;
		this.end = end;
		this.asc = !desc;
		this.version = 0;
	}

	_createClass(SparseIterator, [{
		key: _Symbol$iterator,
		value: function value() {
			return this;
		}
	}, {
		key: "reset",
		value: function reset() {
			this.version = 0;
			this.prototypes = [];
			this.props = _Object$create(null);
			this.keys = [];

			var current = this.object;

			while (current) {
				this.prototypes.push(current);
				this.version += current.version;

				for (var _name in current.properties) {
					if (!(_name in this.props) && contracts.isInteger(_name)) {
						var index = Number(_name);

						if (index >= this.start && index <= this.end) {
							this.props[_name] = current.getOwnProperty(_name);
							this.keys.push(index);
						}
					}
				}

				current = current.getPrototype();
			}

			this.keys.sort(this.asc ? ASCENDING : DESCENDING);
		}
	}, {
		key: "next",
		value: function next() {
			if (!this.version || this.shouldReset()) {
				this.reset();
			}

			if (this.keys.length > 0) {
				var index = this.position = this.keys.shift();
				var value = this.props[index].getValue();

				return {
					value: { value: value, index: index },
					done: false
				};
			}

			return {
				done: true
			};
		}
	}, {
		key: "shouldReset",
		value: function shouldReset() {
			var currentVersion = this.prototypes.reduce(function (v, o) {
				return o.version + v;
			}, 0);
			if (currentVersion !== this.version) {
				if (this.asc) {
					this.start = this.position + 1;
				} else {
					this.end = this.position - 1;
				}

				return true;
			}

			return false;
		}
	}], [{
		key: "create",
		value: function create(arr, start, end, desc) {
			return new SparseIterator(arr, start, end, desc);
		}
	}]);

	return SparseIterator;
})();

exports["default"] = SparseIterator;
module.exports = exports["default"];
},{"../polyfills":194,"../utils/contracts":210,"babel-runtime/core-js/object/create":5,"babel-runtime/core-js/symbol/iterator":12,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/interop-require-wildcard":19}],192:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var marked0$0 = [ascIterator, descIterator].map(_regeneratorRuntime.mark);
function ascIterator(factory, stringValue, start) {
	var index, _length, value;

	return _regeneratorRuntime.wrap(function ascIterator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				index = start, _length = stringValue.length;

			case 1:
				if (!(index < _length)) {
					context$1$0.next = 8;
					break;
				}

				value = factory.createPrimitive(stringValue[index]);
				context$1$0.next = 5;
				return { value: value, index: index };

			case 5:
				index++;
				context$1$0.next = 1;
				break;

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function descIterator(factory, stringValue, start) {
	var index, value;
	return _regeneratorRuntime.wrap(function descIterator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				index = start;

			case 1:
				if (!(index >= 0)) {
					context$1$0.next = 8;
					break;
				}

				value = factory.createPrimitive(stringValue[index]);
				context$1$0.next = 5;
				return { value: value, index: index };

			case 5:
				index--;
				context$1$0.next = 1;
				break;

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

var StringIterator = {
	create: function create(objectFactory, value, start, desc) {
		var stringValue = value.unwrap();
		return (desc ? descIterator : ascIterator)(objectFactory, stringValue, start);
	}
};

exports["default"] = StringIterator;
module.exports = exports["default"];
},{"babel-runtime/regenerator":20}],193:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var keywords = {
	"es5": ["do", "if", "in", "for", "new", "try", "var", "case", "else", "enum", "null", "this", "true", "void", "with", "break", "catch", "class", "const", "false", "super", "throw", "while", "delete", "export", "import", "return", "switch", "typeof", "default", "extends", "finally", "continue", "debugger", "function", "instanceof"],

	"es5strict": ["implements", "let", "private", "public", "interface", "package", "protected", "static", "yield"]
};

exports["default"] = {
	isReserved: function isReserved(name) {
		return keywords.es5.indexOf(name) >= 0;
	},

	isStrictReserved: function isStrictReserved(name) {
		return keywords.es5strict.indexOf(name) >= 0;
	}
};
module.exports = exports["default"];
},{}],194:[function(require,module,exports){
"use strict";

require("core-js/fn/string/repeat");

require("core-js/fn/math/sign");

require("core-js/es6/promise");

require("core-js/es6/symbol");
},{"core-js/es6/promise":23,"core-js/es6/symbol":24,"core-js/fn/math/sign":25,"core-js/fn/string/repeat":26}],195:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("./utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

function validateAssignment(left, strict) {
	if (strict && left.type === "Identifier") {
		contracts.assertIsValidName(left.name, true);
	}
}

var rules = {
	AssignmentExpression: function AssignmentExpression(node, strict) {
		validateAssignment(node.left, strict);
	},

	CatchClause: function CatchClause(node, strict) {
		contracts.assertIsValidName(node.param.name, strict);
	},

	Identifier: function Identifier(node, strict) {
		contracts.assertIsValidIdentifier(node.name, strict);
	},

	FunctionDeclaration: function FunctionDeclaration(node, strict) {
		contracts.assertIsValidName(node.id.name, strict);
		contracts.assertAreValidArguments(node.params, strict);
	},

	FunctionExpression: function FunctionExpression(node, strict) {
		if (node.id) {
			contracts.assertIsValidName(node.id.name, strict);
		}

		contracts.assertAreValidArguments(node.params, strict);
	},

	Literal: function Literal(node, strict) {
		if (strict && node.raw) {
			if (contracts.isOctalLiteral(node.raw, node.value)) {
				throw new SyntaxError("Octal literals are not allowed in strict mode.");
			}
		}
	},

	UpdateExpression: function UpdateExpression(node, strict) {
		validateAssignment(node.argument, strict);
	},

	VariableDeclarator: function VariableDeclarator(node, strict) {
		contracts.assertIsValidName(node.id.name, strict);
	},

	WithStatement: function WithStatement(node, strict) {
		if (strict) {
			throw new SyntaxError("Strict mode code may not include a with statement");
		}
	}
};

exports["default"] = rules;
module.exports = exports["default"];
},{"./utils/contracts":210,"babel-runtime/helpers/interop-require-wildcard":19}],196:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _objectType2 = _interopRequireDefault(_objectType);

var ArgumentType = (function (_ObjectType) {
	_inherits(ArgumentType, _ObjectType);

	function ArgumentType(callee) {
		_classCallCheck(this, ArgumentType);

		_get(Object.getPrototypeOf(ArgumentType.prototype), "constructor", this).call(this);
		this.className = "Arguments";
		this.parameterMap = _Object$create(null);
		this.callee = callee;
	}

	_createClass(ArgumentType, [{
		key: "mapProperty",
		value: function mapProperty(index, binding) {
			index = String(index);
			_get(Object.getPrototypeOf(ArgumentType.prototype), "defineOwnProperty", this).call(this, index, { configurable: true, enumerable: true, writable: true, value: undefined }, true);
			this.parameterMap[index] = binding;
		}
	}, {
		key: "getProperty",
		value: function getProperty(name) {
			var ownProperty = this.getOwnProperty(name);
			if (ownProperty) {
				return ownProperty;
			}

			return _get(Object.getPrototypeOf(ArgumentType.prototype), "getProperty", this).call(this, name);
		}
	}, {
		key: "getOwnProperty",
		value: function getOwnProperty(name) {
			name = String(name);

			if (name in this.parameterMap) {
				var mappedProperty = this.properties[name];
				var linkedProperty = this.parameterMap[name];

				mappedProperty.value = linkedProperty.getValue();
				mappedProperty.setValue = linkedProperty.setValue.bind(linkedProperty);
				return mappedProperty;
			}

			return _get(Object.getPrototypeOf(ArgumentType.prototype), "getOwnProperty", this).call(this, name);
		}
	}, {
		key: "defineOwnProperty",
		value: function defineOwnProperty(name, descriptor, throwOnError) {
			name = String(name);

			var allowed = _get(Object.getPrototypeOf(ArgumentType.prototype), "defineOwnProperty", this).apply(this, arguments);
			if (allowed && name in this.parameterMap) {
				if ("set" in descriptor || "get" in descriptor) {
					delete this.parameterMap[name];
				} else if ("value" in descriptor) {
					this.parameterMap[name].setValue(descriptor.value, throwOnError);
				}

				if ("writable" in descriptor && !descriptor.writable) {
					delete this.parameterMap[name];
				}
			}

			return allowed;
		}
	}, {
		key: "deleteProperty",
		value: function deleteProperty(name, throwOnError) {
			name = String(name);
			if (name in this.parameterMap) {
				delete this.parameterMap[name];
			}

			return _get(Object.getPrototypeOf(ArgumentType.prototype), "deleteProperty", this).apply(this, arguments);
		}
	}]);

	return ArgumentType;
})(_objectType2["default"]);

exports["default"] = ArgumentType;
module.exports = exports["default"];
},{"./object-type":203,"babel-runtime/core-js/object/create":5,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18}],197:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _objectType2 = _interopRequireDefault(_objectType);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _iterators = require("../iterators");

var _iterators2 = _interopRequireDefault(_iterators);

function setIndex(env, arr, name, descriptor, throwOnError) {
	var index = Number(name);
	var lengthProperty = arr.getProperty("length");
	var lengthValue = lengthProperty.getValue().unwrap();

	if (!lengthProperty.canSetValue() && index >= lengthValue || !_objectType2["default"].prototype.defineOwnProperty.call(arr, name, descriptor, false, env)) {

		if (throwOnError) {
			throw new TypeError("Cannot define property: " + name + ", object is not extensible.");
		}

		return false;
	}

	if (index >= lengthValue) {
		var newLength = env.objectFactory.createPrimitive(index + 1);
		arr.defineOwnProperty("length", { value: newLength }, false, env);
	}

	return true;
}

function setLength(env, arr, name, descriptor, throwOnError) {
	var newLengthValue = convert.toUInt32(env, descriptor.value);
	if (newLengthValue !== convert.toNumber(env, descriptor.value)) {
		throw new RangeError("Array length out of range");
	}

	descriptor.value = env.objectFactory.createPrimitive(newLengthValue);
	var newLength = descriptor.value;
	var currentLength = arr.getProperty("length").getValue();
	contracts.assertIsValidArrayLength(newLength.value);

	if (newLength.value >= currentLength.value) {
		return _objectType2["default"].prototype.defineOwnProperty.call(arr, name, descriptor, throwOnError);
	}

	if (arr.properties.length.writable === false) {
		if (throwOnError) {
			throw new TypeError("Cannot redefine property: length");
		}

		return false;
	}

	var notWritable = "writable" in descriptor && !descriptor.writable;
	if (notWritable) {
		// set to writable in case removing items fails
		descriptor.writable = true;
	}

	var i = currentLength.value;
	if (!_objectType2["default"].prototype.defineOwnProperty.call(arr, name, descriptor, throwOnError)) {
		return false;
	}

	var succeeded = true;

	if (i > newLength.value) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = _getIterator(_iterators2["default"].reverse(env, arr, i - 1, newLength.value)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var entry = _step.value;

				if (!arr.deleteProperty(entry.index, false)) {
					newLength = env.objectFactory.createPrimitive(entry.index + 1);
					arr.defineOwnProperty("length", { value: newLength }, false, env);
					succeeded = false;
					break;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	if (notWritable) {
		arr.defineOwnProperty("length", { writable: false }, false);
	}

	if (!succeeded && throwOnError) {
		throw new TypeError("Cannot redefine property: length");
	}

	return succeeded;
}

var ArrayType = (function (_ObjectType) {
	_inherits(ArrayType, _ObjectType);

	function ArrayType() {
		_classCallCheck(this, ArrayType);

		_get(Object.getPrototypeOf(ArrayType.prototype), "constructor", this).call(this);
		this.className = "Array";
	}

	_createClass(ArrayType, [{
		key: "init",
		value: function init(objectFactory) {
			this.defineOwnProperty("length", { value: objectFactory.createPrimitive(0), configurable: false, enumerable: false, writable: true });
		}
	}, {
		key: "putValue",
		value: function putValue(name, value, throwOnError, env) {
			if (name === "length") {
				setLength(env, this, name, { value: value }, throwOnError);
				return;
			}

			_get(Object.getPrototypeOf(ArrayType.prototype), "putValue", this).apply(this, arguments);
		}
	}, {
		key: "defineOwnProperty",
		value: function defineOwnProperty(name, descriptor, throwOnError, env) {
			if (contracts.isInteger(name) && contracts.isValidArrayLength(Number(name) + 1) && !this.hasOwnProperty(name)) {
				return setIndex(env, this, name, descriptor, throwOnError);
			}

			if (name === "length" && "length" in this.properties && descriptor && "value" in descriptor) {
				return setLength(env, this, name, descriptor, throwOnError);
			}

			return _get(Object.getPrototypeOf(ArrayType.prototype), "defineOwnProperty", this).apply(this, arguments);
		}
	}, {
		key: "unwrap",
		value: function unwrap() {
			var arr = [];

			// this won't grab properties from the prototype - do we care?
			// it's an edge case but we may want to address it
			for (var index in this.properties) {
				if (this.properties[index].enumerable) {
					arr[Number(index)] = this.getValue(index).unwrap();
				}
			}

			return arr;
		}
	}]);

	return ArrayType;
})(_objectType2["default"]);

exports["default"] = ArrayType;
module.exports = exports["default"];
},{"../iterators":190,"../utils/contracts":210,"../utils/convert":211,"./object-type":203,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],198:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _objectType2 = _interopRequireDefault(_objectType);

var DateType = (function (_ObjectType) {
	_inherits(DateType, _ObjectType);

	function DateType(value) {
		_classCallCheck(this, DateType);

		_get(Object.getPrototypeOf(DateType.prototype), "constructor", this).call(this);
		this.value = value;
		this.type = "object";
		this.className = "Date";

		// 11.6.1 Note 1
		// All native ECMAScript objects except Date objects handle the absence of a hint as if the hint
		// Number were given; Date objects handle the absence of a hint as if the hint String were given.
		this.primitiveHint = "string";
	}

	_createClass(DateType, [{
		key: "unwrap",
		value: function unwrap() {
			return this.value;
		}
	}]);

	return DateType;
})(_objectType2["default"]);

exports["default"] = DateType;
module.exports = exports["default"];
},{"./object-type":203,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18}],199:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _objectType2 = _interopRequireDefault(_objectType);

var ErrorType = (function (_ObjectType) {
	_inherits(ErrorType, _ObjectType);

	function ErrorType(source) {
		_classCallCheck(this, ErrorType);

		_get(Object.getPrototypeOf(ErrorType.prototype), "constructor", this).call(this);
		this.source = source;
		this.className = "Error";
	}

	return ErrorType;
})(_objectType2["default"]);

exports["default"] = ErrorType;
module.exports = exports["default"];
},{"./object-type":203,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18}],200:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _objectType2 = _interopRequireDefault(_objectType);

var _propertyDescriptor = require("./property-descriptor");

var _propertyDescriptor2 = _interopRequireDefault(_propertyDescriptor);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var FunctionType = (function (_ObjectType) {
	_inherits(FunctionType, _ObjectType);

	function FunctionType(node) {
		_classCallCheck(this, FunctionType);

		_get(Object.getPrototypeOf(FunctionType.prototype), "constructor", this).call(this);
		this.type = "function";
		this.className = "Function";
		this.native = false;
		this.node = node;

		this.boundScope = null;
		this.boundThis = null;
	}

	_createClass(FunctionType, [{
		key: "init",
		value: function init(objectFactory, proto, descriptor, strict) {
			if (strict !== undefined) {
				this.strict = strict;
			}

			// set length property from the number of parameters
			this.defineOwnProperty("length", {
				value: objectFactory.createPrimitive(this.node.params.length),
				configurable: false,
				enumerable: false,
				writable: false
			});

			this.initStrict(objectFactory);

			// functions have a prototype
			proto = proto || objectFactory.createObject();
			this.defineOwnProperty("prototype", { value: proto, configurable: false, enumerable: false, writable: true });

			// set the contructor property as an instance of itself
			proto.properties.constructor = new _propertyDescriptor2["default"](this, { configurable: true, enumerable: false, writable: true, value: this });
		}
	}, {
		key: "initStrict",
		value: function initStrict(objectFactory) {
			if (this.isStrict()) {
				var throwerProps = objectFactory.createThrower("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
				this.defineOwnProperty("caller", throwerProps);
				this.defineOwnProperty("arguments", throwerProps);
			} else {
				this.defineOwnProperty("caller", { value: objectFactory.createPrimitive(undefined) });
			}
		}

		// getProperty (name) {
		// 	let prop = super.getProperty(name);
		// 	if (!prop && name !== "prototype") {
		// 		// since a function instance is itself a function look at our own prototype
		// 		let proto = this.getProperty("prototype");
		// 		return proto && proto.getValue().getProperty(name);
		// 	}

		// 	return prop;
		// }

	}, {
		key: "bindThis",
		value: function bindThis(thisArg) {
			this.boundThis = thisArg;
		}
	}, {
		key: "bindScope",
		value: function bindScope(scope) {
			this.boundScope = scope;
		}
	}, {
		key: "isStrict",
		value: function isStrict() {
			if ("strict" in this) {
				return this.strict;
			}

			if (this.native) {
				return false;
			}

			return this.strict = contracts.isStrictNode(this.node.body.body);
		}
	}, {
		key: "createScope",
		value: function createScope(env, thisArg) {
			// if a parent scope is defined we need to limit the scope to that scope
			var priorScope = env.current.scope;
			// let fn = this;

			if (this.boundScope) {
				env.setScope(this.boundScope.scope);
				// env.current = this.boundScope;
			}

			// let args = Array.prototype.slice.call(arguments, 1);
			// thisArg = this.boundThis || thisArg;
			// if (this.boundThis) {
			// 	args[0] = this.boundThis;
			// }

			var scope = env.createScope(this.boundThis || thisArg, priorScope);
			scope.priorScope = priorScope;
			return scope;
			// let scope = env.createScope.apply(env, args);
			// return {
			// 	init () {
			// 		if (!fn.native) {
			// 			scope.init(fn.node.body);
			// 		}
			// 	},

			// 	exitScope () {
			// 		scope.exitScope();
			// 		env.current = priorScope;
			// 	}
			// };
		}
	}, {
		key: "hasInstance",
		value: function hasInstance(obj) {
			if (obj === this) {
				// object obviously isn't an instance in this case
				return false;
			}

			var visited = [];
			var current = obj;

			var proto = this.getValue("prototype");
			if (contracts.isNullOrUndefined(proto) || !contracts.isObject(proto)) {
				throw new TypeError("Function has non-object prototype in instanceof check");
			}

			while (current) {
				if (visited.indexOf(current) >= 0) {
					return false;
				}

				if (current === proto) {
					return true;
				}

				// keep a stack to avoid circular reference
				visited.push(current);
				current = current.getPrototype();
			}

			return false;
		}
	}, {
		key: "unwrap",
		value: function unwrap() {
			return undefined;
		}
	}]);

	return FunctionType;
})(_objectType2["default"]);

exports["default"] = FunctionType;
module.exports = exports["default"];
},{"../utils/contracts":210,"./object-type":203,"./property-descriptor":205,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],201:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _functionType = require("./function-type");

var _functionType2 = _interopRequireDefault(_functionType);

var _propertyDescriptor = require("./property-descriptor");

var _propertyDescriptor2 = _interopRequireDefault(_propertyDescriptor);

var NativeFunctionType = (function (_FunctionType) {
	_inherits(NativeFunctionType, _FunctionType);

	function NativeFunctionType(fn) {
		_classCallCheck(this, NativeFunctionType);

		_get(Object.getPrototypeOf(NativeFunctionType.prototype), "constructor", this).call(this);
		this.type = "function";
		this.native = true;
		this.nativeFunction = fn;
	}

	_createClass(NativeFunctionType, [{
		key: "init",
		value: function init(objectFactory, proto, descriptor) {
			var length = this.nativeFunction.length;
			if ("nativeLength" in this.nativeFunction) {
				length = this.nativeFunction.nativeLength;
			}

			if ("strict" in this.nativeFunction) {
				this.strict = this.nativeFunction.strict;
			}

			this.initStrict(objectFactory);
			this.defineOwnProperty("length", {
				value: objectFactory.createPrimitive(length),
				configurable: false,
				enumerable: false,
				writable: false
			});

			proto = proto || objectFactory.createObject();
			proto.properties.constructor = new _propertyDescriptor2["default"](this, { configurable: true, enumerable: false, writable: true, value: this });

			descriptor = descriptor || { configurable: false, enumerable: false, writable: true };
			var protoDescriptor = {
				value: proto,
				configurable: descriptor.configurable,
				enumerable: descriptor.enumerable,
				writable: descriptor.writable
			};

			this.defineOwnProperty("prototype", protoDescriptor);
		}
	}]);

	return NativeFunctionType;
})(_functionType2["default"]);

exports["default"] = NativeFunctionType;
module.exports = exports["default"];
},{"./function-type":200,"./property-descriptor":205,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18}],202:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ObjectFactory;

var _primitiveType = require("./primitive-type");

var _primitiveType2 = _interopRequireDefault(_primitiveType);

var _functionType = require("./function-type");

var _functionType2 = _interopRequireDefault(_functionType);

var _nativeFunctionType = require("./native-function-type");

var _nativeFunctionType2 = _interopRequireDefault(_nativeFunctionType);

var _regexType = require("./regex-type");

var _regexType2 = _interopRequireDefault(_regexType);

var _objectType = require("./object-type");

var _objectType2 = _interopRequireDefault(_objectType);

var _arrayType = require("./array-type");

var _arrayType2 = _interopRequireDefault(_arrayType);

var _stringType = require("./string-type");

var _stringType2 = _interopRequireDefault(_stringType);

var _dateType = require("./date-type");

var _dateType2 = _interopRequireDefault(_dateType);

var _errorType = require("./error-type");

var _errorType2 = _interopRequireDefault(_errorType);

var _argumentType = require("./argument-type");

var _argumentType2 = _interopRequireDefault(_argumentType);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var parentless = {
	"Undefined": true,
	"Null": true
};

var orphans = _Object$create(null);

function setOrphans(scope) {
	var parent = undefined;

	for (var typeName in orphans) {
		parent = scope.getValue(typeName);
		if (parent) {
			orphans[typeName].forEach(function (child) {
				child.setPrototype(parent.getValue("prototype"));
			});

			delete orphans[typeName];
		}
	}

	orphans = _Object$create(null);
}

function setProto(typeName, instance, env) {
	if (typeName in parentless) {
		return;
	}

	var parent = env.getReference(typeName);
	if (!parent.isUnresolved()) {
		instance.setPrototype(parent.getValue().getProperty("prototype").getValue());
		return;
	}

	// during initialization it is possible for objects to be created
	// before the types have been registered - add a registry of items
	// and these can be filled in when the type is registered
	orphans[typeName] = orphans[typeName] || [];
	orphans[typeName].push(instance);
}

function ObjectFactory(env) {
	this.env = env;
}

ObjectFactory.prototype = {
	constructor: ObjectFactory,

	init: function init() {
		setOrphans(this.env);
	},

	createPrimitive: function createPrimitive(value) {
		return this.create(contracts.getType(value), value);
	},

	create: function create(typeName, value) {
		var instance = undefined;

		switch (typeName) {
			case "String":
				instance = new _stringType2["default"](value);
				break;

			case "Number":
			case "Boolean":
			case "Null":
			case "Undefined":
				instance = new _primitiveType2["default"](value);
				break;

			case "Date":
				instance = new _dateType2["default"](value);
				break;

			case "RegExp":
				instance = new _regexType2["default"](value);
				break;

			case "Array":
				instance = new _arrayType2["default"]();
				break;

			case "Error":
				instance = new _errorType2["default"](value);

				if (value) {
					typeName = value.name || typeName;
					instance.defineOwnProperty("message", {
						value: this.createPrimitive(value.message),
						configurable: true,
						enumerable: false,
						writable: true
					});
				}

				break;

			default:
				throw new Error("Not a primitive: " + value);
		}

		instance.init(this);
		setProto(typeName, instance, this.env);
		return instance;
	},

	createObject: function createObject(parent) {
		var instance = new _objectType2["default"]();

		if (parent !== null) {
			if (parent) {
				instance.setPrototype(parent && parent.getValue("prototype"));
			} else {
				setProto("Object", instance, this.env);
			}
		}

		instance.init(this);
		return instance;
	},

	createArguments: function createArguments(args, callee, strict) {
		var instance = new _argumentType2["default"]();
		var objectClass = this.env.global.getValue("Object");

		instance.init(this, objectClass, objectClass.getPrototype());
		instance.setPrototype(objectClass.getValue("prototype"));

		if (strict) {
			var thrower = this.createThrower("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
			instance.defineOwnProperty("callee", thrower);
			instance.defineOwnProperty("caller", thrower);
		} else {
			instance.defineOwnProperty("callee", {
				configurable: true,
				enumerable: false,
				value: callee,
				writable: true
			});
		}

		return instance;
	},

	createFunction: function createFunction(fnOrNode, proto, descriptor, strict) {
		var instance = undefined;

		if (typeof fnOrNode === "function") {
			instance = new _nativeFunctionType2["default"](fnOrNode);
		} else {
			instance = new _functionType2["default"](fnOrNode);
		}

		instance.init(this, proto, descriptor, strict);

		// setProto("Function", instance, this.env);
		var functionClass = this.env.getReference("Function");
		if (functionClass && !functionClass.isUnresolved()) {
			instance.setPrototype(functionClass.getValue().getValue("prototype"));
		}

		return instance;
	},

	createBuiltInFunction: function createBuiltInFunction(fn, length, methodName) {
		var instance = new _nativeFunctionType2["default"](function () {
			if (this.isNew) {
				throw new TypeError(methodName + " is not a constructor");
			}

			return fn.apply(this, arguments);
		});

		setProto("Function", instance, this.env);
		instance.builtIn = true;
		instance.defineOwnProperty("length", { value: this.createPrimitive(length), configurable: false, enumerable: false, writable: false });
		return instance;
	},

	createThrower: function createThrower(message, thrower) {
		this.throwers = this.throwers || _Object$create(null);
		if (message in this.throwers) {
			return this.throwers[message];
		}

		thrower = thrower || function () {
			throw new TypeError(message);
		};

		// we want to keep the same instance of the throwers because there
		// are silly tests that check for this
		var throwerInstance = this.createBuiltInFunction(thrower);
		return this.throwers[message] = {
			get: throwerInstance,
			getter: thrower,
			set: throwerInstance,
			setter: thrower,
			enumerable: false,
			configurable: false
		};
	}
};

module.exports = ObjectFactory;
module.exports = exports["default"];
},{"../utils/contracts":210,"./argument-type":196,"./array-type":197,"./date-type":198,"./error-type":199,"./function-type":200,"./native-function-type":201,"./object-type":203,"./primitive-type":204,"./regex-type":206,"./string-type":207,"babel-runtime/core-js/object/create":5,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],203:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propertyDescriptor = require("./property-descriptor");

var _propertyDescriptor2 = _interopRequireDefault(_propertyDescriptor);

var ObjectType = (function () {
	function ObjectType() {
		_classCallCheck(this, ObjectType);

		this.isPrimitive = false;
		this.type = "object";
		this.className = "Object";
		this.properties = _Object$create(null);
		this.extensible = true;

		this.version = 0;
		this.primitiveHint = "number";
	}

	_createClass(ObjectType, [{
		key: "init",
		value: function init(objectFactory, proto, descriptor) {}
	}, {
		key: "getPrototype",
		value: function getPrototype() {
			return this.proto;
		}
	}, {
		key: "setPrototype",
		value: function setPrototype(proto) {
			this.proto = proto;
			this.version++;
		}
	}, {
		key: "getProperty",
		value: function getProperty(name) {
			name = String(name);

			var current = this;
			while (current) {
				if (name in current.properties) {
					return current.properties[name].bind(this);
				}

				current = current.getPrototype();
			}

			return undefined;
		}
	}, {
		key: "getOwnProperty",
		value: function getOwnProperty(name) {
			return this.properties[String(name)];
		}
	}, {
		key: "getOwnPropertyNames",
		value: function getOwnPropertyNames() {
			return _Object$keys(this.properties);
		}
	}, {
		key: "hasProperty",
		value: function hasProperty(name) {
			return !!this.getProperty(name);
		}
	}, {
		key: "hasOwnProperty",
		value: function hasOwnProperty(name) {
			return String(name) in this.properties;
		}
	}, {
		key: "putValue",
		value: function putValue(name, value, throwOnError, env) {
			if (this.isPrimitive) {
				return;
			}

			name = String(name);

			var descriptor = this.getProperty(name);
			if (descriptor) {
				if (!descriptor.canSetValue()) {
					if (throwOnError) {
						throw new TypeError("Cannot assign to read only property '" + name + "' of %s");
					}

					return;
				}

				if (descriptor.dataProperty && !this.hasOwnProperty(name)) {
					this.properties[name] = new _propertyDescriptor2["default"](this, {
						value: value,
						configurable: descriptor.configurable,
						enumerable: descriptor.enumerable,
						writable: descriptor.writable
					});

					this.version++;
				} else {
					descriptor.setValue(value);
				}
			} else {
				this.defineOwnProperty(name, { value: value, configurable: true, enumerable: true, writable: true }, throwOnError, env);
			}
		}
	}, {
		key: "defineOwnProperty",
		value: function defineOwnProperty(name, descriptor, throwOnError, env) {
			if (this.isPrimitive) {
				if (throwOnError) {
					throw new TypeError("Cannot define property: " + name + ", object is not extensible");
				}

				return false;
			}

			var current = this.getOwnProperty(name);
			if (current) {
				if (current.canUpdate(descriptor)) {
					current.update(descriptor);
					return true;
				}

				if (throwOnError) {
					throw new TypeError("Cannot redefine property: " + name);
				}

				return false;
			} else if (!this.extensible) {
				if (throwOnError) {
					throw new TypeError("Cannot define property: " + name + ", object is not extensible");
				}

				return false;
			}

			this.properties[name] = new _propertyDescriptor2["default"](this, descriptor);
			this.version++;
			return true;
		}
	}, {
		key: "deleteProperty",
		value: function deleteProperty(name, throwOnError) {
			if (this.isPrimitive) {
				return false;
			}

			if (name in this.properties) {
				if (!this.properties[name].configurable) {
					if (throwOnError) {
						throw new TypeError("Cannot delete property: " + name);
					}

					return false;
				}
			}

			this.version++;
			return delete this.properties[name];
		}
	}, {
		key: "define",
		value: function define(name, value, descriptor) {
			// this method is intended for external usage only - it provides a way to define
			// methods and properties and overwrite any existing properties even if they are
			// not configurable
			descriptor = descriptor || { configurable: true, enumerable: false, writable: true };
			descriptor.value = value;

			this.properties[name] = new _propertyDescriptor2["default"](this, descriptor);
			this.version++;
		}
	}, {
		key: "remove",
		value: function remove(name) {
			// this method is intended for external usage only - it provides a way to remove
			// properties even if they are not normally able to be deleted
			delete this.properties[name];
			this.version++;
		}
	}, {
		key: "getValue",
		value: function getValue(name) {
			if (arguments.length > 0) {
				return this.getProperty(name).getValue();
			}

			return this;
		}
	}, {
		key: "freeze",
		value: function freeze() {
			for (var prop in this.properties) {
				if (this.properties[prop].dataProperty) {
					this.defineOwnProperty(prop, { writable: false, configurable: false }, true);
				} else {
					this.defineOwnProperty(prop, { configurable: false }, true);
				}
			}

			this.preventExtensions();
		}
	}, {
		key: "preventExtensions",
		value: function preventExtensions() {
			this.extensible = false;
		}
	}, {
		key: "seal",
		value: function seal() {
			for (var prop in this.properties) {
				this.defineOwnProperty(prop, { configurable: false }, true);
			}

			this.preventExtensions();
		}
	}, {
		key: "equals",
		value: function equals(obj) {
			if (this.isPrimitive && obj.isPrimitive) {
				return this.value === obj.value;
			}

			return this === obj;
		}
	}, {
		key: "unwrap",
		value: function unwrap() {
			var unwrapped = {};
			var current = this;

			while (current) {
				for (var _name in current.properties) {
					if (current.properties[_name].enumerable && !(_name in unwrapped)) {
						unwrapped[_name] = current.getValue(_name).unwrap();
					}
				}

				current = current.getPrototype();
			}

			return unwrapped;
		}
	}]);

	return ObjectType;
})();

exports["default"] = ObjectType;
module.exports = exports["default"];
},{"./property-descriptor":205,"babel-runtime/core-js/object/create":5,"babel-runtime/core-js/object/keys":8,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/interop-require-default":18}],204:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _objectType2 = _interopRequireDefault(_objectType);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var PrimitiveType = (function (_ObjectType) {
	_inherits(PrimitiveType, _ObjectType);

	function PrimitiveType(value) {
		_classCallCheck(this, PrimitiveType);

		_get(Object.getPrototypeOf(PrimitiveType.prototype), "constructor", this).call(this);
		this.isPrimitive = true;
		this.value = value;
		this.type = typeof value;
		this.className = contracts.getType(value);
	}

	_createClass(PrimitiveType, [{
		key: "getProperty",
		value: function getProperty(name) {
			// can't read properties of null/undefined
			if (this.value == null) {
				throw new TypeError("Cannot read property '" + name + "' of " + this.type);
			}

			return _get(Object.getPrototypeOf(PrimitiveType.prototype), "getProperty", this).apply(this, arguments);
		}
	}, {
		key: "unwrap",
		value: function unwrap() {
			return this.value;
		}
	}]);

	return PrimitiveType;
})(_objectType2["default"]);

exports["default"] = PrimitiveType;
module.exports = exports["default"];
},{"../utils/contracts":210,"./object-type":203,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],205:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsComparers = require("../utils/comparers");

var comparers = _interopRequireWildcard(_utilsComparers);

var defaultDescriptor = {
	configurable: false,
	enumerable: false,
	writable: false
};

var PropertyDescriptor = (function () {
	function PropertyDescriptor(base, config, value) {
		if (config === undefined) config = defaultDescriptor;

		_classCallCheck(this, PropertyDescriptor);

		this.base = base;
		this.configurable = config.configurable || false;
		this.enumerable = config.enumerable || false;

		if ("get" in config || "set" in config) {
			this.dataProperty = false;
			this.get = config.get;
			this.getter = config.getter;
			this.set = config.set;
			this.setter = config.setter;
		} else {
			this.writable = config.writable || false;
			this.dataProperty = true;
			this.value = value || config.value;
		}
	}

	_createClass(PropertyDescriptor, [{
		key: "bind",
		value: function bind(obj) {
			this.base = obj;
			return this;
		}
	}, {
		key: "update",
		value: function update(descriptor) {
			for (var prop in descriptor) {
				if (descriptor.hasOwnProperty(prop)) {
					this[prop] = descriptor[prop];
				}
			}

			if ("get" in descriptor || "set" in descriptor) {
				this.writable = undefined;
				this.dataProperty = false;
				this.value = undefined;
			} else if ("value" in descriptor) {
				this.writable = this.writable === undefined ? false : this.writable;
				this.dataProperty = true;
				this.get = this.getter = this.set = this.setter = undefined;
			}
		}
	}, {
		key: "canUpdate",
		value: function canUpdate(descriptor) {
			if (this.configurable) {
				return true;
			}

			if ("configurable" in descriptor && this.configurable !== descriptor.configurable) {
				return false;
			}

			if ("enumerable" in descriptor && this.enumerable !== descriptor.enumerable) {
				return false;
			}

			if (("get" in descriptor || "set" in descriptor) && this.dataProperty) {
				return false;
			}

			if ("value" in descriptor && !this.dataProperty) {
				return false;
			}

			if (this.dataProperty) {
				if (!this.writable) {
					if (descriptor.writable) {
						return false;
					}

					return !("value" in descriptor) || comparers.areSame(this.value, descriptor.value);
				}

				return true;
			}

			if ("get" in descriptor && this.get !== descriptor.get) {
				return false;
			}

			if ("set" in descriptor && this.set !== descriptor.set) {
				return false;
			}

			return true;
		}
	}, {
		key: "getValue",
		value: function getValue() {
			if (this.dataProperty) {
				return this.value;
			}

			if (this.getter) {
				return this.getter.call(this.base);
			}

			return undefined;
		}
	}, {
		key: "canSetValue",
		value: function canSetValue() {
			return this.writable || !!this.setter;
		}
	}, {
		key: "setValue",
		value: function setValue(value) {
			if (!this.canSetValue()) {
				return;
			}

			if (this.dataProperty) {
				this.value = value;
			} else if (this.setter) {
				this.setter.call(this.base, value);
			}
		}
	}]);

	return PropertyDescriptor;
})();

exports["default"] = PropertyDescriptor;
module.exports = exports["default"];
},{"../utils/comparers":209,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/interop-require-wildcard":19}],206:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _objectType2 = _interopRequireDefault(_objectType);

var RegexType = (function (_ObjectType) {
	_inherits(RegexType, _ObjectType);

	function RegexType(value) {
		_classCallCheck(this, RegexType);

		_get(Object.getPrototypeOf(RegexType.prototype), "constructor", this).call(this);
		this.source = value;
		this.className = "RegExp";
	}

	_createClass(RegexType, [{
		key: "init",
		value: function init(objectFactory) {
			// lastIndex is settable, all others are read-only attributes
			this.defineOwnProperty("lastIndex", { value: objectFactory.createPrimitive(this.source.lastIndex), writable: true });
			this.defineOwnProperty("source", { value: objectFactory.createPrimitive(this.source.source) });
			this.defineOwnProperty("global", { value: objectFactory.createPrimitive(this.source.global) });
			this.defineOwnProperty("ignoreCase", { value: objectFactory.createPrimitive(this.source.ignoreCase) });
			this.defineOwnProperty("multiline", { value: objectFactory.createPrimitive(this.source.multiline) });
		}
	}, {
		key: "unwrap",
		value: function unwrap() {
			return this.source;
		}
	}]);

	return RegexType;
})(_objectType2["default"]);

exports["default"] = RegexType;
module.exports = exports["default"];
},{"./object-type":203,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18}],207:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _primitiveType = require("./primitive-type");

var _primitiveType2 = _interopRequireDefault(_primitiveType);

var _propertyDescriptor = require("./property-descriptor");

var _propertyDescriptor2 = _interopRequireDefault(_propertyDescriptor);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

function getCharacter(source, position) {
	if (position < source.value.length) {
		// todo: need to set length
		var character = new StringType(source.value[position]);
		character.setPrototype(source.getPrototype());
		return character;
	}

	return new _primitiveType2["default"](undefined);
}

var StringType = (function (_PrimitiveType) {
	_inherits(StringType, _PrimitiveType);

	function StringType(value) {
		_classCallCheck(this, StringType);

		_get(Object.getPrototypeOf(StringType.prototype), "constructor", this).call(this, value);
	}

	_createClass(StringType, [{
		key: "init",
		value: function init(objectFactory) {
			this.properties.length = new _propertyDescriptor2["default"](this, {
				configurable: false,
				enumerable: false,
				writable: false,
				value: objectFactory.createPrimitive(this.value.length)
			});
		}
	}, {
		key: "getProperty",
		value: function getProperty(name) {
			if (contracts.isInteger(name)) {
				var position = Number(name);
				if (position < this.value.length) {
					return new _propertyDescriptor2["default"](this, { configurable: false, enumerable: true, writable: false, value: getCharacter(this, position) });
				}
			}

			return _get(Object.getPrototypeOf(StringType.prototype), "getProperty", this).apply(this, arguments);
		}
	}, {
		key: "getOwnPropertyNames",
		value: function getOwnPropertyNames() {
			var props = [];
			for (var i = 0, ln = this.value.length; i < ln; i++) {
				props.push(String(i));
			}

			return props.concat(_get(Object.getPrototypeOf(StringType.prototype), "getOwnPropertyNames", this).call(this));
		}
	}, {
		key: "hasOwnProperty",
		value: function hasOwnProperty(name) {
			if (contracts.isInteger(name)) {
				return name < this.value.length;
			}

			return _get(Object.getPrototypeOf(StringType.prototype), "hasOwnProperty", this).apply(this, arguments);
		}
	}]);

	return StringType;
})(_primitiveType2["default"]);

exports["default"] = StringType;
module.exports = exports["default"];
},{"../utils/contracts":210,"./primitive-type":204,"./property-descriptor":205,"babel-runtime/helpers/class-call-check":13,"babel-runtime/helpers/create-class":14,"babel-runtime/helpers/get":16,"babel-runtime/helpers/inherits":17,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19}],208:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.degenerate = degenerate;
exports.promisify = promisify;

require("../polyfills");

var objectOrFunctionTypes = { "object": true, "function": true };
function isObjectOrFunction(obj) {
	return typeof obj in objectOrFunctionTypes;
}

function isThenable(obj) {
	return obj && isObjectOrFunction(obj) && typeof obj.then === "function";
}

function isNextable(obj) {
	return obj && isObjectOrFunction(obj) && typeof obj.next === "function";
}

function degenerate(fn) {
	return function () {
		var generator = fn.apply(this, arguments);

		function handle(_x) {
			var _again = true;

			_function: while (_again) {
				var result = _x;
				_again = false;

				if (result.done) {
					return result.value;
				}

				if (isThenable(result.value)) {
					return result.value.then(function (res) {
						return handle(generator.next(res));
					}, function (err) {
						return handle(generator["throw"](err));
					});
				}

				_x = generator.next(result.value);
				_again = true;
				continue _function;
			}
		}

		return handle(generator.next());
	};
}

function promisify(obj) {
	if (isThenable(obj)) {
		return obj;
	}

	if (isNextable(obj)) {
		var result = undefined;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = _getIterator(obj), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				result = _step.value;

				if (isThenable(result)) {
					return result;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return _Promise.resolve(result);
	}

	return _Promise.resolve(obj);
}
},{"../polyfills":194,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/promise":10}],209:[function(require,module,exports){
"use strict";

var _defineProperty = require("babel-runtime/helpers/define-property")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _comparers;

var _convert = require("./convert");

var convert = _interopRequireWildcard(_convert);

function negate(value) {
	if (value === undefined) {
		return false;
	}

	return !value;
}

var comparers = (_comparers = {
	areSame: function areSame(a, b) {
		if (a.type !== b.type) {
			return false;
		}

		if (a.isPrimitive && b.isPrimitive) {
			if (a.value == null) {
				return true;
			}

			if (a.type === "number") {
				if (isNaN(a.value) && isNaN(b.value)) {
					return true;
				}

				if (a.value === 0) {
					// this will account for negative zero
					return 1 / a.value === 1 / b.value;
				}
			}

			return a.value === b.value;
		}

		return a === b;
	},

	implicitEquals: function implicitEquals(env, a, b) {
		/* eslint-disable eqeqeq */
		if (a.isPrimitive && b.isPrimitive) {
			return a.value == b.value;
		}

		if (a.type === "object" && b.type === "object" || a.type === "function" && b.type === "function") {
			return a === b;
		}

		var primitiveA = convert.toPrimitive(env, a);
		var primitiveB = convert.toPrimitive(env, b);

		if (typeof primitiveA === "number" || typeof primitiveB === "number" || (typeof primitiveA === "boolean" || typeof primitiveB === "boolean")) {
			return Number(primitiveA) === Number(primitiveB);
		}

		if (typeof primitiveA === "string") {
			return primitiveA === convert.toPrimitive(env, b, "string");
		}

		if (typeof primitiveB === "string") {
			return convert.toPrimitive(env, a, "string") === primitiveB;
		}

		// use native implicit comarison
		return primitiveA == primitiveB;
		/* eslint-enable eqeqeq */
	},

	strictEquals: function strictEquals(env, a, b) {
		if (a.isPrimitive && b.isPrimitive) {
			return a.value === b.value;
		}

		if (a.isPrimitive || b.isPrimitive) {
			return false;
		}

		return a === b;
	},

	relationalCompare: function relationalCompare(env, a, b, leftFirst) {
		var primitiveA = undefined,
		    primitiveB = undefined;
		if (leftFirst) {
			primitiveA = convert.toPrimitive(env, a, "number");
			primitiveB = convert.toPrimitive(env, b, "number");
		} else {
			primitiveB = convert.toPrimitive(env, b, "number");
			primitiveA = convert.toPrimitive(env, a, "number");
		}

		if (typeof primitiveA === "string" && typeof primitiveB === "string") {
			return primitiveA < primitiveB;
		}

		primitiveA = Number(primitiveA);
		primitiveB = Number(primitiveB);

		if (isNaN(primitiveA) || isNaN(primitiveB)) {
			return undefined;
		}

		return primitiveA < primitiveB;
	}

}, _defineProperty(_comparers, "==", function _() {
	return this.implicitEquals.apply(this, arguments);
}), _defineProperty(_comparers, "!=", function _() {
	return !this.implicitEquals.apply(this, arguments);
}), _defineProperty(_comparers, "===", function _() {
	return this.strictEquals.apply(this, arguments);
}), _defineProperty(_comparers, "!==", function _() {
	return !this.strictEquals.apply(this, arguments);
}), _defineProperty(_comparers, "<", function _(env, a, b) {
	return !!this.relationalCompare(env, a, b, true);
}), _defineProperty(_comparers, "<=", function _(env, a, b) {
	return negate(this.relationalCompare(env, b, a, false));
}), _defineProperty(_comparers, ">", function _(env, a, b) {
	return !!this.relationalCompare(env, b, a, false);
}), _defineProperty(_comparers, ">=", function _(env, a, b) {
	return negate(this.relationalCompare(env, a, b, true));
}), _comparers);

exports["default"] = comparers;
module.exports = exports["default"];
},{"./convert":211,"babel-runtime/helpers/define-property":15,"babel-runtime/helpers/interop-require-wildcard":19}],210:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.assertIsObject = assertIsObject;
exports.assertIsNotNullOrUndefined = assertIsNotNullOrUndefined;
exports.assertArgIsNotNullOrUndefined = assertArgIsNotNullOrUndefined;
exports.assertIsFunction = assertIsFunction;
exports.assertIsNotConstructor = assertIsNotConstructor;
exports.assertIsValidArrayLength = assertIsValidArrayLength;
exports.assertIsValidAssignment = assertIsValidAssignment;
exports.assertIsValidParameterName = assertIsValidParameterName;
exports.assertIsValidName = assertIsValidName;
exports.assertIsNotGeneric = assertIsNotGeneric;
exports.assertIsValidIdentifier = assertIsValidIdentifier;
exports.assertAreValidArguments = assertAreValidArguments;
exports.isValidArrayLength = isValidArrayLength;
exports.isObject = isObject;
exports.isOctalLiteral = isOctalLiteral;
exports.getType = getType;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isInteger = isInteger;
exports.isStrictNode = isStrictNode;

var _keywords = require("../keywords");

var _keywords2 = _interopRequireDefault(_keywords);

var objectPattern = /\[object (\w+)\]/;
var integerPattern = /^-?\d+$/;
var octalPattern = /^-?0[0-7]/;
var octalEscapePattern = /^([^\\]|\\[^0-7])*\\([0-3][0-7]{1,2}|[4-7][0-7]|[0-7])/;
var useStrictPattern = /^\s*(?:'use strict'|"use strict")\s*;?\s*$/;

function assertIsObject(obj, methodName) {
	if (!isObject(obj)) {
		throw new TypeError(methodName + " called on non-object");
	}
}

function assertIsNotNullOrUndefined(value, methodName) {
	if (isNullOrUndefined(value)) {
		throw new TypeError(methodName + " called on null or undefined");
	}
}

function assertArgIsNotNullOrUndefined(obj) {
	if (isNullOrUndefined(obj)) {
		throw new TypeError("Cannot convert null or undefined to object");
	}
}

function assertIsFunction(obj, toString) {
	if (!obj || obj.className !== "Function") {
		throw new TypeError("%s is not a function");
	}
}

function assertIsNotConstructor(context, methodName) {
	if (context.isNew) {
		throw new TypeError(methodName + " is not a constructor");
	}
}

function assertIsValidArrayLength(length) {
	if (!isValidArrayLength(length)) {
		throw new RangeError("Invalid array length");
	}
}

function assertIsValidAssignment(left, strict) {
	if (left && !left.isReference) {
		throw new ReferenceError("Invalid left-hand side in assignment");
	}

	if (left && left.base === left.env.global) {
		assertIsValidName(left.name, strict);
	}
}

function assertIsValidParameterName(name, strict) {
	if (/^\d|[;\(\)"']/.test(name)) {
		throw new SyntaxError("Unexpected token in " + name);
	}

	assertIsValidName(name, strict);
}

function assertIsValidName(name, strict) {
	if (strict && (name === "arguments" || name === "eval")) {
		throw new SyntaxError("Unexpected eval or arguments in strict mode");
	}
}

function assertIsNotGeneric(obj, expectedClass, methodName) {
	if (!obj || obj.className !== expectedClass) {
		throw new TypeError(methodName + " is not generic");
	}
}

function assertIsValidIdentifier(name, strict) {
	if (_keywords2["default"].isReserved(name)) {
		throw new SyntaxError("Illegal use of reserved keyword: " + name);
	}

	if (strict && _keywords2["default"].isStrictReserved(name)) {
		throw new SyntaxError("Illegal use of strict mode reserved keyword: " + name);
	}
}

function assertAreValidArguments(params, strict) {
	params.forEach(function (param, index) {
		assertIsValidParameterName(param.name, strict);

		if (strict) {
			if (params.some(function (p, i) {
				return index !== i && param.name === p.name;
			})) {
				throw new SyntaxError("Strict mode function may not have duplicate parameter names");
			}
		}
	});
}

function isValidArrayLength(length) {
	return isInteger(length) && length >= 0 && length < 4294967296;
}

function isObject(obj) {
	if (!obj) {
		return false;
	}

	if (obj.isPrimitive) {
		return obj.value && obj.type === "object";
	}

	return true;
}

function isOctalLiteral(rawValue, actualValue) {
	if (typeof actualValue === "number" && octalPattern.test(rawValue)) {
		return true;
	}

	if (typeof actualValue === "string") {
		var match = rawValue.match(octalEscapePattern);
		if (match) {
			// \0 is actually not considered an octal
			if (match[2] !== "0" || typeof match[3] !== "undefined") {
				return true;
			}
		}
	}

	return false;
}

function getType(obj) {
	return objectPattern.exec(Object.prototype.toString.call(obj))[1];
}

function isNullOrUndefined(obj) {
	return isUndefined(obj) || isNull(obj);
}

function isUndefined(obj) {
	return !obj || obj.isPrimitive && obj.value === undefined;
}

function isNull(obj) {
	return obj && obj.isPrimitive && obj.value === null;
}

function isInteger(value) {
	if (typeof value === "string") {
		return integerPattern.test(value);
	}

	if (typeof value === "number") {
		return isFinite(value) && Math.floor(value) === value;
	}

	return false;
}

function isDirective(node) {
	return node.type === "ExpressionStatement" && node.expression.type === "Literal" && typeof node.expression.value === "string";
}

function isStrictNode(nodes) {
	if (Array.isArray(nodes)) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = _getIterator(nodes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var node = _step.value;

				if (!isDirective(node)) {
					return false;
				}

				if (node.expression.value === "use strict" && useStrictPattern.test(node.expression.raw)) {
					return true;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	return false;
}
},{"../keywords":193,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":18}],211:[function(require,module,exports){
"use strict";

var _Math$sign = require("babel-runtime/core-js/math/sign")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.primitiveToObject = primitiveToObject;
exports.toObject = toObject;
exports.toArray = toArray;
exports.toPrimitive = toPrimitive;
exports.toString = toString;
exports.toNumber = toNumber;
exports.toInteger = toInteger;
exports.toInt32 = toInt32;
exports.toUInt32 = toUInt32;
exports.toBoolean = toBoolean;
exports.toNativeFunction = toNativeFunction;

require("../polyfills");

var _utilsFunc = require("../utils/func");

var func = _interopRequireWildcard(_utilsFunc);

var sign = _Math$sign;
var floor = Math.floor;
var abs = Math.abs;

function getString(env, value) {
	if (!value) {
		return "undefined";
	}

	if (value.isPrimitive) {
		return String(value.value);
	}

	var primitiveValue = func.tryCallMethod(env, value, "toString");
	if (primitiveValue && primitiveValue.isPrimitive) {
		return String(primitiveValue.value);
	}

	primitiveValue = func.tryCallMethod(env, value, "valueOf");
	if (primitiveValue && primitiveValue.isPrimitive) {
		return String(primitiveValue.value);
	}

	throw new TypeError("Cannot convert object to primitive value.");
}

function getPrimitive(env, value) {
	if (!value) {
		return 0;
	}

	if (value.isPrimitive) {
		return value.value;
	}

	var primitiveValue = func.tryCallMethod(env, value, "valueOf");
	if (primitiveValue && primitiveValue.isPrimitive) {
		return primitiveValue.value;
	}

	primitiveValue = func.tryCallMethod(env, value, "toString");
	if (primitiveValue && primitiveValue.isPrimitive) {
		return primitiveValue.value;
	}

	throw new TypeError("Cannot convert object to primitive");
}

function getValues(env, args) {
	var values = [];

	for (var i = 0, ln = args.length; i < ln; i++) {
		values.push(getPrimitive(env, args[i]));
	}

	return values;
}

function primitiveToObject(env, value) {
	var newValue = env.objectFactory.createPrimitive(value);
	newValue.isPrimitive = false;
	newValue.type = "object";
	return newValue;
}

function toObject(env, obj) {
	if (obj.isPrimitive && obj.value != null && obj.type !== "object") {
		return primitiveToObject(env, obj.value);
	}

	return obj;
}

function toArray(obj, length) {
	var arr = [];

	if (obj) {
		var ln = length >= 0 ? length : obj.getValue("length").value;
		var i = 0;

		while (i < ln) {
			if (obj.hasProperty(i)) {
				arr[i] = obj.getProperty(i).getValue();
			}

			i++;
		}
	}

	return arr;
}

function toPrimitive(env, obj, preferredType) {
	preferredType = preferredType && preferredType.toLowerCase();
	if (!preferredType && obj) {
		preferredType = obj.primitiveHint;
	}

	if (preferredType === "string") {
		return getString(env, obj);
	}

	// default case/number
	return getPrimitive(env, obj);
}

function toString(env, obj) {
	return String(toPrimitive(env, obj, "string"));
}

function toNumber(env, obj) {
	if (!obj || obj.type === "undefined") {
		return NaN;
	}

	return Number(toPrimitive(env, obj, "number"));
}

function toInteger(env, obj) {
	var value = toNumber(env, obj);
	if (isNaN(value)) {
		return 0;
	}

	if (value === 0 || !isFinite(value)) {
		return value;
	}

	return sign(value) * floor(abs(value));
}

function toInt32(env, obj) {
	var value = toInteger(env, obj);
	return isFinite(value) ? value : 0;
}

function toUInt32(env, obj) {
	var value = toInt32(env, obj);
	return value >>> 0;
}

function toBoolean(obj) {
	if (!obj) {
		return false;
	}

	if (obj.isPrimitive) {
		return Boolean(obj.value);
	}

	return true;
}

function toNativeFunction(env, fn, name) {
	return env.objectFactory.createBuiltInFunction(function () {
		var scope = this && this.node && this.node.value;
		var args = getValues(env, arguments);

		var value = fn.apply(scope, args);
		return env.objectFactory.createPrimitive(value);
	}, fn.length, name);
}
},{"../polyfills":194,"../utils/func":212,"babel-runtime/core-js/math/sign":3,"babel-runtime/helpers/interop-require-wildcard":19}],212:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getFunctionResult = getFunctionResult;
exports.tryCallMethod = tryCallMethod;

var _contracts = require("./contracts");

var contracts = _interopRequireWildcard(_contracts);

var _async = require("./async");

var executeFunction = (0, _async.degenerate)(_regeneratorRuntime.mark(function callee$0$0(env, fn, params, args, thisArg, callee, isNew) {
	var scope, returnResult;
	return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				scope = fn.createScope(env, thisArg, false);
				returnResult = undefined;

				if (isNew) {
					returnResult = thisArg;
				}

				scope.loadArgs(params, args, fn);
				scope.init(fn.node && fn.node.body);

				context$1$0.next = 7;
				return scope.use(function () {
					if (fn.native) {
						return fn.nativeFunction.apply(env.createExecutionContext(thisArg, callee, isNew), args) || returnResult;
					} else {
						var executionResult = env.createExecutionContext(fn.node.body, callee, isNew).execute();
						if (executionResult && executionResult.exit && executionResult.result) {
							if (!isNew || !executionResult.result.isPrimitive) {
								return executionResult.result;
							}
						}

						return returnResult;
					}
				});

			case 7:
				returnResult = context$1$0.sent;
				return context$1$0.abrupt("return", returnResult || env.global.getValue("undefined"));

			case 9:
			case "end":
				return context$1$0.stop();
		}
	}, callee$0$0, this);
}));

exports.executeFunction = executeFunction;

function getFunctionResult(env, fn, params, args, thisArg, callee) {
	var scope = fn.createScope(env, thisArg, false);
	scope.loadArgs(params, args, fn);
	scope.init(fn.node && fn.node.body);

	return scope.use(function () {
		if (fn.native) {
			return fn.nativeFunction.apply(env.createExecutionContext(thisArg, callee), args);
		}

		return env.createExecutionContext(fn.node.body, callee).execute();
	});

	// try {
	// 	if (fn.native) {
	// 		executionResult = fn.nativeFunction.apply(env.createExecutionContext(thisArg, callee), args);
	// 	} else {
	// 		executionResult = env.createExecutionContext(fn.node.body, callee).execute();
	// 	}
	// } catch (err) {
	// 	scope.exitScope();
	// 	throw err;
	// }

	// scope.exitScope();
	// return executionResult;
}

// export function	loadArguments (env, params, args, callee) {
// 	let undef = env.global.getValue("undefined");
// 	let strict = env.isStrict() || callee.isStrict();

// 	let argumentList = env.objectFactory.createArguments(args, callee, strict);
// 	env.current.createVariable("arguments");
// 	env.current.putValue("arguments", argumentList);

// 	params.forEach(function (param, index) {
// 		contracts.assertIsValidParameterName(param.name, strict);

// 		if (!callee.isStrict() && !env.current.hasProperty(param.name)) {
// 			let descriptor = env.current.createVariable(param.name);
// 			if (args.length > index) {
// 				argumentList.mapProperty(index, descriptor);
// 			}
// 		}

// 		env.current.putValue(param.name, args[index] || undef);
// 	});

// 	// just set value if additional, unnamed arguments are passed in
// 	let i = callee.isStrict() ? 0 : params.length;
// 	let length = args.length;

// 	for (; i < length; i++) {
// 		argumentList.defineOwnProperty(i, {
// 			value: args[i],
// 			configurable: true,
// 			enumerable: true,
// 			writable: true
// 		});
// 	}

// 	argumentList.defineOwnProperty("length", {
// 		value: env.objectFactory.createPrimitive(length),
// 		configurable: true,
// 		enumerable: false,
// 		writable: true
// 	});
// }

function tryCallMethod(env, obj, name) {
	var fn = obj.getProperty(name);
	if (!fn) {
		return false;
	}

	fn = fn.getValue();

	if (fn && fn.className === "Function") {
		var _ret = (function () {
			var undef = env.global.getValue("undefined");
			var scope = fn.createScope(env, obj);
			scope.init(fn.node && fn.node.body);

			var executionResult = scope.use(function () {
				if (fn.native) {
					return fn.nativeFunction.apply(env.createExecutionContext(obj, obj), []);
				}

				scope.loadArgs(fn.node.params, [], fn);

				var result = env.createExecutionContext(fn.node.body, fn.node).execute();
				return result && result.result;
			});

			// try {
			// 	if (fn.native) {
			// 		executionResult = fn.nativeFunction.apply(env.createExecutionContext(obj, obj), []);
			// 	} else {
			// 		scope.loadArgs(env, fn.node.params, [], fn);

			// 		executionResult = env.createExecutionContext(fn.node.body, fn.node).execute();
			// 		executionResult = executionResult && executionResult.result;
			// 	}
			// } catch (err) {
			// 	scope.exitScope();
			// 	throw err;
			// }

			// scope.exitScope();
			return {
				v: executionResult ? executionResult.getValue() : undef
			};
		})();

		if (typeof _ret === "object") return _ret.v;
	}

	return false;
}

// try {
// 	if (fn.native) {
// 		returnResult = yield fn.nativeFunction.apply(env.createExecutionContext(thisArg, callee, isNew), args) || returnResult;
// 	} else {
// 		let executionResult = env.createExecutionContext(fn.node.body, callee, isNew).execute();
// 		if (executionResult && executionResult.exit && executionResult.result) {
// 			if (!isNew || !executionResult.result.isPrimitive) {
// 				returnResult = executionResult.result;
// 			}
// 		}
// 	}
// } catch (err) {
// 	scope.exitScope();
// 	throw err;
// }

// scope.exitScope();
},{"./async":208,"./contracts":210,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],213:[function(require,module,exports){
"use strict";

var _defineProperty = require("babel-runtime/helpers/define-property")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _$$$$$$$$$$$in$instanceof;

var _convert = require("./convert");

var convert = _interopRequireWildcard(_convert);

function addOrConcat(env, a, b) {
	if (a.isPrimitive && b.isPrimitive) {
		return a.value + b.value;
	}

	a = convert.toPrimitive(env, a);
	b = convert.toPrimitive(env, b);
	return a + b;
}

exports["default"] = (_$$$$$$$$$$$in$instanceof = {}, _defineProperty(_$$$$$$$$$$$in$instanceof, "+", addOrConcat), _defineProperty(_$$$$$$$$$$$in$instanceof, "-", function _(env, a, b) {
	return convert.toNumber(env, a) - convert.toNumber(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, "/", function _(env, a, b) {
	return convert.toNumber(env, a) / convert.toNumber(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, "*", function _(env, a, b) {
	return convert.toNumber(env, a) * convert.toNumber(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, "<<", function _(env, a, b) {
	return convert.toPrimitive(env, a) << convert.toPrimitive(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, ">>", function _(env, a, b) {
	return convert.toPrimitive(env, a) >> convert.toPrimitive(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, ">>>", function _(env, a, b) {
	return convert.toPrimitive(env, a) >>> convert.toPrimitive(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, "%", function _(env, a, b) {
	return convert.toPrimitive(env, a) % convert.toPrimitive(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, "|", function _(env, a, b) {
	return convert.toInt32(env, a) | convert.toInt32(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, "^", function _(env, a, b) {
	return convert.toInt32(env, a) ^ convert.toInt32(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, "&", function _(env, a, b) {
	return convert.toInt32(env, a) & convert.toInt32(env, b);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, "in", function _in(env, a, b) {
	a = convert.toString(env, a);
	if (b.isPrimitive) {
		throw new TypeError("Cannot use 'in' operator to search for '" + a + "' in " + convert.toString(env, b));
	}

	return b.hasProperty(a);
}), _defineProperty(_$$$$$$$$$$$in$instanceof, "instanceof", function _instanceof(env, a, b) {
	if (b.type !== "function") {
		throw new TypeError("Expecting a function in instanceof check, but got " + b.type);
	}

	if (a.isPrimitive) {
		return false;
	}

	return b.hasInstance(a);
}), _$$$$$$$$$$$in$instanceof);
module.exports = exports["default"];
},{"./convert":211,"babel-runtime/helpers/define-property":15,"babel-runtime/helpers/interop-require-wildcard":19}],214:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function ArrayExpression(context) {
	var objectFactory, arr, i, ln, item;
	return _regeneratorRuntime.wrap(function ArrayExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				objectFactory = context.env.objectFactory;
				arr = objectFactory.create("Array");

				if (!context.node.elements) {
					context$1$0.next = 15;
					break;
				}

				i = 0;
				ln = context.node.elements.length;

			case 5:
				if (!(i < ln)) {
					context$1$0.next = 14;
					break;
				}

				if (!context.node.elements[i]) {
					context$1$0.next = 11;
					break;
				}

				context$1$0.next = 9;
				return context.create(context.node.elements[i]).execute();

			case 9:
				item = context$1$0.sent.result.getValue();

				arr.defineOwnProperty(i, { value: item, configurable: true, enumerable: true, writable: true }, true, context.env);

			case 11:

				i++;
				context$1$0.next = 5;
				break;

			case 14:

				arr.putValue("length", objectFactory.createPrimitive(ln), false, context.env);

			case 15:
				return context$1$0.abrupt("return", context.result(arr));

			case 16:
			case "end":
				return context$1$0.stop();
		}
	}, ArrayExpression, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"babel-runtime/regenerator":20}],215:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _utilsOperators = require("../utils/operators");

var _utilsOperators2 = _interopRequireDefault(_utilsOperators);

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function AssignmentExpression(context) {
	var assignment, right, left, newValue, op, rawValue;
	return _regeneratorRuntime.wrap(function AssignmentExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				assignment = context.node.operator === "=";
				context$1$0.next = 3;
				return context.create(context.node.right).execute();

			case 3:
				right = context$1$0.sent.result;
				context$1$0.next = 6;
				return context.create(context.node.left).execute();

			case 6:
				left = context$1$0.sent.result;

				contracts.assertIsValidAssignment(left, context.env.isStrict());

				newValue = undefined;

				if (assignment) {
					newValue = right.getValue();
				} else {
					op = context.node.operator.slice(0, -1);
					rawValue = _utilsOperators2["default"][op](context.env, left.getValue(), right.getValue());

					newValue = context.env.objectFactory.createPrimitive(rawValue);
				}

				left.setValue(newValue);
				return context$1$0.abrupt("return", context.result(newValue));

			case 12:
			case "end":
				return context$1$0.stop();
		}
	}, AssignmentExpression, this);
}));
module.exports = exports["default"];

// remove equals
},{"../utils/async":208,"../utils/contracts":210,"../utils/operators":213,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],216:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsOperators = require("../utils/operators");

var operators = _interopRequireWildcard(_utilsOperators);

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function BinaryExpression(context) {
	var undef, left, leftValue, right, rightValue, newValue;
	return _regeneratorRuntime.wrap(function BinaryExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				undef = context.env.global.getValue("undefined");
				context$1$0.next = 3;
				return context.create(context.node.left).execute();

			case 3:
				left = context$1$0.sent.result;
				leftValue = left.getValue() || undef;
				context$1$0.next = 7;
				return context.create(context.node.right).execute();

			case 7:
				right = context$1$0.sent.result;
				rightValue = right.getValue() || undef;
				newValue = undefined;

				if (context.node.operator in operators) {
					newValue = operators[context.node.operator](context.env, leftValue, rightValue);
				} else {
					newValue = context.env.evaluate(leftValue, rightValue, context.node.operator);
				}

				return context$1$0.abrupt("return", context.result(context.env.objectFactory.createPrimitive(newValue)));

			case 12:
			case "end":
				return context$1$0.stop();
		}
	}, BinaryExpression, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"../utils/operators":213,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],217:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function BlockStatement(context) {
	var result, priorResult, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, current;

	return _regeneratorRuntime.wrap(function BlockStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				result = undefined, priorResult = undefined;

				if (context.node.type === "Program") {
					context.env.current.init(context.node);
				}

				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 5;
				_iterator = _getIterator(context.node.body);

			case 7:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 18;
					break;
				}

				current = _step.value;
				context$1$0.next = 11;
				return context.create(current).execute();

			case 11:
				result = context$1$0.sent;

				if (!(result && result.shouldBreak(context, false, priorResult))) {
					context$1$0.next = 14;
					break;
				}

				return context$1$0.abrupt("return", result);

			case 14:

				priorResult = result;

			case 15:
				_iteratorNormalCompletion = true;
				context$1$0.next = 7;
				break;

			case 18:
				context$1$0.next = 24;
				break;

			case 20:
				context$1$0.prev = 20;
				context$1$0.t0 = context$1$0["catch"](5);
				_didIteratorError = true;
				_iteratorError = context$1$0.t0;

			case 24:
				context$1$0.prev = 24;
				context$1$0.prev = 25;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 27:
				context$1$0.prev = 27;

				if (!_didIteratorError) {
					context$1$0.next = 30;
					break;
				}

				throw _iteratorError;

			case 30:
				return context$1$0.finish(27);

			case 31:
				return context$1$0.finish(24);

			case 32:
				return context$1$0.abrupt("return", result);

			case 33:
			case "end":
				return context$1$0.stop();
		}
	}, BlockStatement, this, [[5, 20, 24, 32], [25,, 27, 31]]);
}));
module.exports = exports["default"];
},{"../utils/async":208,"babel-runtime/core-js/get-iterator":2,"babel-runtime/regenerator":20}],218:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _envPropertyReference = require("../env/property-reference");

var _envPropertyReference2 = _interopRequireDefault(_envPropertyReference);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsFunc = require("../utils/func");

var func = _interopRequireWildcard(_utilsFunc);

var _utilsAsync = require("../utils/async");

function assignThis(env, fnMember, fn, isNew, native) {
	if (isNew) {
		// if this is a native contructor we don't are about this
		// otherwise create a new object
		return native ? null : env.objectFactory.createObject(fn);
	}

	if (fnMember instanceof _envPropertyReference2["default"] && (!fnMember.unqualified || fnMember.base !== env.global)) {
		return convert.toObject(env, fnMember.base);
	}

	return null;
}

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function CallExpression(context) {
	var node, isNew, fnMember, fn, args, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, arg, native, thisArg, params, callee;

	return _regeneratorRuntime.wrap(function CallExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				node = context.node;
				isNew = context.node.type === "NewExpression";
				context$1$0.next = 4;
				return context.create(node.callee).execute();

			case 4:
				fnMember = context$1$0.sent.result;
				fn = fnMember.getValue();
				args = [];
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 10;
				_iterator = _getIterator(node.arguments);

			case 12:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 22;
					break;
				}

				arg = _step.value;
				context$1$0.t0 = args;
				context$1$0.next = 17;
				return context.create(arg).execute();

			case 17:
				context$1$0.t1 = context$1$0.sent.result.getValue();
				context$1$0.t0.push.call(context$1$0.t0, context$1$0.t1);

			case 19:
				_iteratorNormalCompletion = true;
				context$1$0.next = 12;
				break;

			case 22:
				context$1$0.next = 28;
				break;

			case 24:
				context$1$0.prev = 24;
				context$1$0.t2 = context$1$0["catch"](10);
				_didIteratorError = true;
				_iteratorError = context$1$0.t2;

			case 28:
				context$1$0.prev = 28;
				context$1$0.prev = 29;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 31:
				context$1$0.prev = 31;

				if (!_didIteratorError) {
					context$1$0.next = 34;
					break;
				}

				throw _iteratorError;

			case 34:
				return context$1$0.finish(31);

			case 35:
				return context$1$0.finish(28);

			case 36:
				if (!(!fn || fn.className !== "Function")) {
					context$1$0.next = 38;
					break;
				}

				throw new TypeError(convert.toString(context.env, fn) + " not a function");

			case 38:
				native = fn.native;
				thisArg = assignThis(context.env, fnMember, fn, isNew, native);
				params = native ? [] : fn.node.params;
				callee = fnMember;

				callee.identifier = fn.name;
				context$1$0.t3 = context;
				context$1$0.next = 46;
				return func.executeFunction(context.env, fn, params, args, thisArg, callee, isNew);

			case 46:
				context$1$0.t4 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t3.result.call(context$1$0.t3, context$1$0.t4));

			case 48:
			case "end":
				return context$1$0.stop();
		}
	}, CallExpression, this, [[10, 24, 28, 36], [29,, 31, 35]]);
}));
module.exports = exports["default"];
},{"../env/property-reference":183,"../utils/async":208,"../utils/convert":211,"../utils/func":212,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],219:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = DebuggerStatement;

function DebuggerStatement(context) {
	debugger;
	return context.empty();
}

module.exports = exports["default"];
},{}],220:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function DoWhileStatement(context) {
	var result, priorResult, passed;
	return _regeneratorRuntime.wrap(function DoWhileStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				result = undefined, priorResult = undefined;
				passed = true;

				if (!(context.node.type === "WhileStatement")) {
					context$1$0.next = 8;
					break;
				}

				context$1$0.t0 = convert;
				context$1$0.next = 6;
				return context.create(context.node.test).execute();

			case 6:
				context$1$0.t1 = context$1$0.sent.result.getValue();
				passed = context$1$0.t0.toBoolean.call(context$1$0.t0, context$1$0.t1);

			case 8:
				if (!passed) {
					context$1$0.next = 22;
					break;
				}

				context$1$0.next = 11;
				return context.create(context.node.body).execute();

			case 11:
				result = context$1$0.sent;

				if (!(result && result.shouldBreak(context, true, priorResult))) {
					context$1$0.next = 14;
					break;
				}

				return context$1$0.abrupt("return", result);

			case 14:
				context$1$0.t2 = convert;
				context$1$0.next = 17;
				return context.create(context.node.test).execute();

			case 17:
				context$1$0.t3 = context$1$0.sent.result.getValue();
				passed = context$1$0.t2.toBoolean.call(context$1$0.t2, context$1$0.t3);

				priorResult = result;
				context$1$0.next = 8;
				break;

			case 22:
				return context$1$0.abrupt("return", result);

			case 23:
			case "end":
				return context$1$0.stop();
		}
	}, DoWhileStatement, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],221:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = EmptyStatement;

function EmptyStatement(context) {
	return context.empty();
}

module.exports = exports["default"];
},{}],222:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function ExpressionStatement(context) {
	var executionResult, executionValue;
	return _regeneratorRuntime.wrap(function ExpressionStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.expression).execute();

			case 2:
				executionResult = context$1$0.sent;
				executionValue = executionResult && executionResult.result && executionResult.result.getValue();
				return context$1$0.abrupt("return", context.result(executionValue || context.env.global.getValue("undefined")));

			case 5:
			case "end":
				return context$1$0.stop();
		}
	}, ExpressionStatement, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"babel-runtime/regenerator":20}],223:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function ForInStatement(context) {
	var left, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, decl, obj, result, priorResult, visited, prop;

	return _regeneratorRuntime.wrap(function ForInStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				left = undefined;

				if (!(context.node.left.type === "VariableDeclaration")) {
					context$1$0.next = 31;
					break;
				}

				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 5;
				_iterator = _getIterator(context.node.left.declarations);

			case 7:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 15;
					break;
				}

				decl = _step.value;
				context$1$0.next = 11;
				return context.create(decl).execute();

			case 11:
				left = context$1$0.sent.result;

			case 12:
				_iteratorNormalCompletion = true;
				context$1$0.next = 7;
				break;

			case 15:
				context$1$0.next = 21;
				break;

			case 17:
				context$1$0.prev = 17;
				context$1$0.t0 = context$1$0["catch"](5);
				_didIteratorError = true;
				_iteratorError = context$1$0.t0;

			case 21:
				context$1$0.prev = 21;
				context$1$0.prev = 22;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 24:
				context$1$0.prev = 24;

				if (!_didIteratorError) {
					context$1$0.next = 27;
					break;
				}

				throw _iteratorError;

			case 27:
				return context$1$0.finish(24);

			case 28:
				return context$1$0.finish(21);

			case 29:
				context$1$0.next = 34;
				break;

			case 31:
				context$1$0.next = 33;
				return context.create(context.node.left).execute();

			case 33:
				left = context$1$0.sent.result;

			case 34:
				context$1$0.next = 36;
				return context.create(context.node.right).execute();

			case 36:
				obj = context$1$0.sent.result.getValue();
				result = undefined, priorResult = undefined;
				visited = _Object$create(null);

			case 39:
				if (!obj) {
					context$1$0.next = 57;
					break;
				}

				context$1$0.t1 = _regeneratorRuntime.keys(obj.properties);

			case 41:
				if ((context$1$0.t2 = context$1$0.t1()).done) {
					context$1$0.next = 53;
					break;
				}

				prop = context$1$0.t2.value;

				if (!(obj.properties[prop].enumerable && !visited[prop])) {
					context$1$0.next = 50;
					break;
				}

				left.setValue(context.env.objectFactory.createPrimitive(prop));

				context$1$0.next = 47;
				return context.create(context.node.body).execute();

			case 47:
				result = context$1$0.sent;

				if (!(result && result.shouldBreak(context, true, priorResult))) {
					context$1$0.next = 50;
					break;
				}

				return context$1$0.abrupt("return", result);

			case 50:

				visited[prop] = true;
				context$1$0.next = 41;
				break;

			case 53:

				priorResult = result;
				obj = obj.getPrototype();
				context$1$0.next = 39;
				break;

			case 57:
				return context$1$0.abrupt("return", result);

			case 58:
			case "end":
				return context$1$0.stop();
		}
	}, ForInStatement, this, [[5, 17, 21, 29], [22,, 24, 28]]);
}));
module.exports = exports["default"];

// should only be one, but
// need to unwrap the declaration to get it
// todo: this is sloppy - need to revisit

// track visited properties to prevent iterating over shadowed properties, regardless of enumerable flag
// 12.6.4 NOTE: a property of a prototype is not enumerated if it is “shadowed” because some previous
// object in the prototype chain has a property with the same name. The values of [[Enumerable]] attributes
// are not considered when determining if a property of a prototype object is shadowed by a previous object
// on the prototype chain.
},{"../utils/async":208,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/create":5,"babel-runtime/regenerator":20}],224:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsAsync = require("../utils/async");

var shouldContinue = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function shouldContinue(context) {
	return _regeneratorRuntime.wrap(function shouldContinue$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (context.node.test) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt("return", true);

			case 2:
				context$1$0.t0 = convert;
				context$1$0.next = 5;
				return context.create(context.node.test).execute();

			case 5:
				context$1$0.t1 = context$1$0.sent.result.getValue();
				return context$1$0.abrupt("return", context$1$0.t0.toBoolean.call(context$1$0.t0, context$1$0.t1));

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, shouldContinue, this);
}));

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function ForStatement(context) {
	var result, priorResult;
	return _regeneratorRuntime.wrap(function ForStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!context.node.init) {
					context$1$0.next = 3;
					break;
				}

				context$1$0.next = 3;
				return context.create(context.node.init).execute();

			case 3:
				result = undefined, priorResult = undefined;

			case 4:
				context$1$0.next = 6;
				return shouldContinue(context);

			case 6:
				if (!context$1$0.sent) {
					context$1$0.next = 18;
					break;
				}

				context$1$0.next = 9;
				return context.create(context.node.body).execute();

			case 9:
				result = context$1$0.sent;

				if (!(result && result.shouldBreak(context, true, priorResult))) {
					context$1$0.next = 12;
					break;
				}

				return context$1$0.abrupt("return", result);

			case 12:
				if (!context.node.update) {
					context$1$0.next = 15;
					break;
				}

				context$1$0.next = 15;
				return context.create(context.node.update).execute();

			case 15:

				priorResult = result;
				context$1$0.next = 4;
				break;

			case 18:
				return context$1$0.abrupt("return", result);

			case 19:
			case "end":
				return context$1$0.stop();
		}
	}, ForStatement, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],225:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = FunctionDeclaration;

function FunctionDeclaration(context) {
	return context.result(context.env.getValue(context.node.id.name));
}

module.exports = exports["default"];
},{}],226:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = FunctionExpression;

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

function FunctionExpression(context) {
	var objectFactory = context.env.objectFactory;
	var strict = context.env.isStrict() || contracts.isStrictNode(context.node.body.body);
	var func = objectFactory.createFunction(context.node, null, null, strict);

	func.bindScope(context.env.current);

	if (context.node.id) {
		func.name = context.node.id.name;
	}

	return context.result(func);
}

module.exports = exports["default"];
},{"../utils/contracts":210,"babel-runtime/helpers/interop-require-wildcard":19}],227:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = Identifier;

function Identifier(context) {
	var name = context.node.name;

	if (context.callee && context.callee.identifier === name) {
		return context.result(context.callee);
	}

	return context.result(context.env.getReference(context.node.name));
}

module.exports = exports["default"];
},{}],228:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function IfStatement(context) {
	var testValue;
	return _regeneratorRuntime.wrap(function IfStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.test).execute();

			case 2:
				testValue = context$1$0.sent.result.getValue();

				if (!convert.toBoolean(testValue)) {
					context$1$0.next = 7;
					break;
				}

				context$1$0.next = 6;
				return context.create(context.node.consequent).execute();

			case 6:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 7:
				if (!context.node.alternate) {
					context$1$0.next = 11;
					break;
				}

				context$1$0.next = 10;
				return context.create(context.node.alternate).execute();

			case 10:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 11:
			case "end":
				return context$1$0.stop();
		}
	}, IfStatement, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],229:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _arrayExpression = require("./array-expression");

var _arrayExpression2 = _interopRequireDefault(_arrayExpression);

var _assignmentExpression = require("./assignment-expression");

var _assignmentExpression2 = _interopRequireDefault(_assignmentExpression);

var _binaryExpression = require("./binary-expression");

var _binaryExpression2 = _interopRequireDefault(_binaryExpression);

var _blockStatement = require("./block-statement");

var _blockStatement2 = _interopRequireDefault(_blockStatement);

var _interruptStatement = require("./interrupt-statement");

var _interruptStatement2 = _interopRequireDefault(_interruptStatement);

var _callExpression = require("./call-expression");

var _callExpression2 = _interopRequireDefault(_callExpression);

var _ifStatement = require("./if-statement");

var _ifStatement2 = _interopRequireDefault(_ifStatement);

var _debuggerStatement = require("./debugger-statement");

var _debuggerStatement2 = _interopRequireDefault(_debuggerStatement);

var _doWhileStatementJs = require("./do-while-statement.js");

var _doWhileStatementJs2 = _interopRequireDefault(_doWhileStatementJs);

var _emptyStatement = require("./empty-statement");

var _emptyStatement2 = _interopRequireDefault(_emptyStatement);

var _expressionStatement = require("./expression-statement");

var _expressionStatement2 = _interopRequireDefault(_expressionStatement);

var _forStatement = require("./for-statement");

var _forStatement2 = _interopRequireDefault(_forStatement);

var _forInStatement = require("./for-in-statement");

var _forInStatement2 = _interopRequireDefault(_forInStatement);

var _functionDeclaration = require("./function-declaration");

var _functionDeclaration2 = _interopRequireDefault(_functionDeclaration);

var _functionExpression = require("./function-expression");

var _functionExpression2 = _interopRequireDefault(_functionExpression);

var _identifier = require("./identifier");

var _identifier2 = _interopRequireDefault(_identifier);

var _labeledStatement = require("./labeled-statement");

var _labeledStatement2 = _interopRequireDefault(_labeledStatement);

var _literal = require("./literal");

var _literal2 = _interopRequireDefault(_literal);

var _logicalExpression = require("./logical-expression");

var _logicalExpression2 = _interopRequireDefault(_logicalExpression);

var _memberExpression = require("./member-expression");

var _memberExpression2 = _interopRequireDefault(_memberExpression);

var _objectExpression = require("./object-expression");

var _objectExpression2 = _interopRequireDefault(_objectExpression);

var _returnStatement = require("./return-statement");

var _returnStatement2 = _interopRequireDefault(_returnStatement);

var _sequenceExpression = require("./sequence-expression");

var _sequenceExpression2 = _interopRequireDefault(_sequenceExpression);

var _switchStatement = require("./switch-statement");

var _switchStatement2 = _interopRequireDefault(_switchStatement);

var _thisExpression = require("./this-expression");

var _thisExpression2 = _interopRequireDefault(_thisExpression);

var _throwStatement = require("./throw-statement");

var _throwStatement2 = _interopRequireDefault(_throwStatement);

var _tryStatement = require("./try-statement");

var _tryStatement2 = _interopRequireDefault(_tryStatement);

var _unaryExpression = require("./unary-expression");

var _unaryExpression2 = _interopRequireDefault(_unaryExpression);

var _updateExpression = require("./update-expression");

var _updateExpression2 = _interopRequireDefault(_updateExpression);

var _variableDeclaration = require("./variable-declaration");

var _variableDeclaration2 = _interopRequireDefault(_variableDeclaration);

var _variableDeclarator = require("./variable-declarator");

var _variableDeclarator2 = _interopRequireDefault(_variableDeclarator);

var _withStatement = require("./with-statement");

var _withStatement2 = _interopRequireDefault(_withStatement);

var _utilsAsync = require("../utils/async");

var visitors = {
	ArrayExpression: _arrayExpression2["default"],
	AssignmentExpression: _assignmentExpression2["default"],
	BinaryExpression: _binaryExpression2["default"],
	BlockStatement: _blockStatement2["default"],
	BreakStatement: _interruptStatement2["default"],
	CallExpression: _callExpression2["default"],
	ConditionalExpression: _ifStatement2["default"],
	DebuggerStatement: _debuggerStatement2["default"],
	DoWhileStatement: _doWhileStatementJs2["default"],
	EmptyStatement: _emptyStatement2["default"],
	ExpressionStatement: _expressionStatement2["default"],
	ForStatement: _forStatement2["default"],
	ForInStatement: _forInStatement2["default"],
	FunctionDeclaration: _functionDeclaration2["default"],
	FunctionExpression: _functionExpression2["default"],
	Identifier: _identifier2["default"],
	LabeledStatement: _labeledStatement2["default"],
	Literal: _literal2["default"],
	LogicalExpression: _logicalExpression2["default"],
	MemberExpression: _memberExpression2["default"],
	ObjectExpression: _objectExpression2["default"],
	ReturnStatement: _returnStatement2["default"],
	SequenceExpression: _sequenceExpression2["default"],
	SwitchStatement: _switchStatement2["default"],
	ThisExpression: _thisExpression2["default"],
	ThrowStatement: _throwStatement2["default"],
	TryStatement: _tryStatement2["default"],
	UnaryExpression: _unaryExpression2["default"],
	UpdateExpression: _updateExpression2["default"],
	VariableDeclaration: _variableDeclaration2["default"],
	VariableDeclarator: _variableDeclarator2["default"],
	WithStatement: _withStatement2["default"],

	ContinueStatement: _interruptStatement2["default"],
	IfStatement: _ifStatement2["default"],
	NewExpression: _callExpression2["default"],
	Program: _blockStatement2["default"],
	WhileStatement: _doWhileStatementJs2["default"]
};

exports["default"] = {
	visit: (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function callee$0$0(context) {
		return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
			while (1) switch (context$1$0.prev = context$1$0.next) {
				case 0:
					if (context.node.type in visitors) {
						context$1$0.next = 2;
						break;
					}

					throw new TypeError("No handler defined for: " + context.node.type);

				case 2:
					context$1$0.next = 4;
					return visitors[context.node.type](context);

				case 4:
					return context$1$0.abrupt("return", context$1$0.sent);

				case 5:
				case "end":
					return context$1$0.stop();
			}
		}, callee$0$0, this);
	}))
};
module.exports = exports["default"];
},{"../utils/async":208,"./array-expression":214,"./assignment-expression":215,"./binary-expression":216,"./block-statement":217,"./call-expression":218,"./debugger-statement":219,"./do-while-statement.js":220,"./empty-statement":221,"./expression-statement":222,"./for-in-statement":223,"./for-statement":224,"./function-declaration":225,"./function-expression":226,"./identifier":227,"./if-statement":228,"./interrupt-statement":230,"./labeled-statement":231,"./literal":232,"./logical-expression":233,"./member-expression":234,"./object-expression":235,"./return-statement":236,"./sequence-expression":237,"./switch-statement":238,"./this-expression":239,"./throw-statement":240,"./try-statement":241,"./unary-expression":242,"./update-expression":243,"./variable-declaration":244,"./variable-declarator":245,"./with-statement":246,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/regenerator":20}],230:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = InterruptStatement;

function InterruptStatement(context) {
	var label = undefined;
	if (context.node.label) {
		label = context.node.label.name;
	}

	if (context.node.type === "BreakStatement") {
		return context.cancel(label);
	}

	return context.skip(label);
}

module.exports = exports["default"];
},{}],231:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function LabeledStatement(context) {
	return _regeneratorRuntime.wrap(function LabeledStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.createLabel(context.node.body, context.node.label.name).execute();

			case 2:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 3:
			case "end":
				return context$1$0.stop();
		}
	}, LabeledStatement, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"babel-runtime/regenerator":20}],232:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = Literal;

function Literal(context) {
	return context.result(context.env.objectFactory.createPrimitive(context.node.value));
}

module.exports = exports["default"];
},{}],233:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function LogicalExpression(context) {
	var left, passed;
	return _regeneratorRuntime.wrap(function LogicalExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.left).execute();

			case 2:
				left = context$1$0.sent;
				passed = convert.toBoolean(left.result.getValue());

				if (!(passed && context.node.operator === "||")) {
					context$1$0.next = 6;
					break;
				}

				return context$1$0.abrupt("return", left);

			case 6:
				if (!(!passed && context.node.operator === "&&")) {
					context$1$0.next = 8;
					break;
				}

				return context$1$0.abrupt("return", left);

			case 8:
				context$1$0.next = 10;
				return context.create(context.node.right).execute();

			case 10:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 11:
			case "end":
				return context$1$0.stop();
		}
	}, LogicalExpression, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],234:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _envPropertyReference = require("../env/property-reference");

var _envPropertyReference2 = _interopRequireDefault(_envPropertyReference);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function MemberExpression(context) {
	var obj, name, value;
	return _regeneratorRuntime.wrap(function MemberExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.object).execute();

			case 2:
				obj = context$1$0.sent.result.getValue();
				name = undefined, value = undefined;

				if (!context.node.computed) {
					context$1$0.next = 13;
					break;
				}

				context$1$0.t0 = convert;
				context$1$0.t1 = context.env;
				context$1$0.next = 9;
				return context.create(context.node.property).execute();

			case 9:
				context$1$0.t2 = context$1$0.sent.result.getValue();
				name = context$1$0.t0.toString.call(context$1$0.t0, context$1$0.t1, context$1$0.t2);
				context$1$0.next = 14;
				break;

			case 13:
				name = context.node.property.name;

			case 14:

				value = new _envPropertyReference2["default"](name, obj, context.env);
				return context$1$0.abrupt("return", context.result(value));

			case 16:
			case "end":
				return context$1$0.stop();
		}
	}, MemberExpression, this);
}));
module.exports = exports["default"];
},{"../env/property-reference":183,"../utils/async":208,"../utils/convert":211,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],235:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsFunc = require("../utils/func");

var func = _interopRequireWildcard(_utilsFunc);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _utilsAsync = require("../utils/async");

function setDescriptor(env, obj, name, descriptor) {
	var strict = env.isStrict();

	if (descriptor.get) {
		contracts.assertAreValidArguments(descriptor.get.node.params, strict);
		descriptor.getter = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function callee$1$0() {
			return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return func.executeFunction(env, descriptor.get, descriptor.get.node.params, [], this, descriptor.get.node);

					case 2:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, callee$1$0, this);
		}));
	}

	if (descriptor.set) {
		contracts.assertAreValidArguments(descriptor.set.node.params, strict);
		descriptor.setter = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function callee$1$0() {
			var args$2$0 = arguments;
			return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return func.executeFunction(env, descriptor.set, descriptor.set.node.params, args$2$0, this, descriptor.set.node);

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, callee$1$0, this);
		}));
	}

	obj.defineOwnProperty(name, descriptor);
}

function createDescriptor(value) {
	return { value: value, configurable: true, enumerable: true, writable: true };
}

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function ObjectExpression(context) {
	var obj, descriptors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, property, value, _name, prop;

	return _regeneratorRuntime.wrap(function ObjectExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				obj = context.env.objectFactory.createObject();
				descriptors = _Object$create(null);
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 5;
				_iterator = _getIterator(context.node.properties);

			case 7:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 24;
					break;
				}

				property = _step.value;
				context$1$0.next = 11;
				return context.create(property.value).execute();

			case 11:
				value = context$1$0.sent.result.getValue();
				_name = property.key.name || property.key.value;
				context$1$0.t0 = property.kind;
				context$1$0.next = context$1$0.t0 === "get" ? 16 : context$1$0.t0 === "set" ? 16 : 19;
				break;

			case 16:
				descriptors[_name] = descriptors[_name] || createDescriptor();
				descriptors[_name][property.kind] = value;
				return context$1$0.abrupt("break", 21);

			case 19:
				obj.defineOwnProperty(_name, createDescriptor(value));
				return context$1$0.abrupt("break", 21);

			case 21:
				_iteratorNormalCompletion = true;
				context$1$0.next = 7;
				break;

			case 24:
				context$1$0.next = 30;
				break;

			case 26:
				context$1$0.prev = 26;
				context$1$0.t1 = context$1$0["catch"](5);
				_didIteratorError = true;
				_iteratorError = context$1$0.t1;

			case 30:
				context$1$0.prev = 30;
				context$1$0.prev = 31;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 33:
				context$1$0.prev = 33;

				if (!_didIteratorError) {
					context$1$0.next = 36;
					break;
				}

				throw _iteratorError;

			case 36:
				return context$1$0.finish(33);

			case 37:
				return context$1$0.finish(30);

			case 38:

				for (prop in descriptors) {
					setDescriptor(context.env, obj, prop, descriptors[prop]);
				}

				return context$1$0.abrupt("return", context.result(obj));

			case 40:
			case "end":
				return context$1$0.stop();
		}
	}, ObjectExpression, this, [[5, 26, 30, 38], [31,, 33, 37]]);
}));
module.exports = exports["default"];
},{"../utils/async":208,"../utils/contracts":210,"../utils/func":212,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/create":5,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],236:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function ReturnStatement(context) {
	return _regeneratorRuntime.wrap(function ReturnStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!context.node.argument) {
					context$1$0.next = 6;
					break;
				}

				context$1$0.t0 = context;
				context$1$0.next = 4;
				return context.create(context.node.argument).execute();

			case 4:
				context$1$0.t1 = context$1$0.sent.result.getValue();
				return context$1$0.abrupt("return", context$1$0.t0.exit.call(context$1$0.t0, context$1$0.t1));

			case 6:
				return context$1$0.abrupt("return", context.exit(context.env.global.getValue("undefined")));

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, ReturnStatement, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"babel-runtime/regenerator":20}],237:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function SequenceExpression(context) {
	var value, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, expr;

	return _regeneratorRuntime.wrap(function SequenceExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				value = undefined;
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 4;
				_iterator = _getIterator(context.node.expressions);

			case 6:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 14;
					break;
				}

				expr = _step.value;
				context$1$0.next = 10;
				return context.create(expr).execute();

			case 10:
				value = context$1$0.sent.result.getValue();

			case 11:
				_iteratorNormalCompletion = true;
				context$1$0.next = 6;
				break;

			case 14:
				context$1$0.next = 20;
				break;

			case 16:
				context$1$0.prev = 16;
				context$1$0.t0 = context$1$0["catch"](4);
				_didIteratorError = true;
				_iteratorError = context$1$0.t0;

			case 20:
				context$1$0.prev = 20;
				context$1$0.prev = 21;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 23:
				context$1$0.prev = 23;

				if (!_didIteratorError) {
					context$1$0.next = 26;
					break;
				}

				throw _iteratorError;

			case 26:
				return context$1$0.finish(23);

			case 27:
				return context$1$0.finish(20);

			case 28:
				return context$1$0.abrupt("return", context.result(value));

			case 29:
			case "end":
				return context$1$0.stop();
		}
	}, SequenceExpression, this, [[4, 16, 20, 28], [21,, 23, 27]]);
}));
module.exports = exports["default"];
},{"../utils/async":208,"babel-runtime/core-js/get-iterator":2,"babel-runtime/regenerator":20}],238:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

var executeStatements = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function executeStatements(context, statements) {
	var result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, statement;

	return _regeneratorRuntime.wrap(function executeStatements$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				result = undefined;
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 4;
				_iterator = _getIterator(statements);

			case 6:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 16;
					break;
				}

				statement = _step.value;
				context$1$0.next = 10;
				return context.create(statement).execute();

			case 10:
				result = context$1$0.sent;

				if (!(result && result.isCancelled())) {
					context$1$0.next = 13;
					break;
				}

				return context$1$0.abrupt("return", result);

			case 13:
				_iteratorNormalCompletion = true;
				context$1$0.next = 6;
				break;

			case 16:
				context$1$0.next = 22;
				break;

			case 18:
				context$1$0.prev = 18;
				context$1$0.t0 = context$1$0["catch"](4);
				_didIteratorError = true;
				_iteratorError = context$1$0.t0;

			case 22:
				context$1$0.prev = 22;
				context$1$0.prev = 23;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 25:
				context$1$0.prev = 25;

				if (!_didIteratorError) {
					context$1$0.next = 28;
					break;
				}

				throw _iteratorError;

			case 28:
				return context$1$0.finish(25);

			case 29:
				return context$1$0.finish(22);

			case 30:
				return context$1$0.abrupt("return", result);

			case 31:
			case "end":
				return context$1$0.stop();
		}
	}, executeStatements, this, [[4, 18, 22, 30], [23,, 25, 29]]);
}));

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function SwitchStatement(context) {
	var testValue, passed, value, defaultCase, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, current, caseValue;

	return _regeneratorRuntime.wrap(function SwitchStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.discriminant).execute();

			case 2:
				testValue = context$1$0.sent.result.getValue();
				passed = false;
				value = undefined, defaultCase = undefined;
				_iteratorNormalCompletion2 = true;
				_didIteratorError2 = false;
				_iteratorError2 = undefined;
				context$1$0.prev = 8;
				_iterator2 = _getIterator(context.node.cases);

			case 10:
				if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
					context$1$0.next = 33;
					break;
				}

				current = _step2.value;

				if (passed) {
					context$1$0.next = 23;
					break;
				}

				if (!current.test) {
					context$1$0.next = 21;
					break;
				}

				context$1$0.next = 16;
				return context.create(current.test).execute();

			case 16:
				caseValue = context$1$0.sent.result.getValue();

				if (caseValue.equals(testValue)) {
					context$1$0.next = 19;
					break;
				}

				return context$1$0.abrupt("continue", 30);

			case 19:
				context$1$0.next = 23;
				break;

			case 21:
				// default might not be the last case
				defaultCase = current;
				return context$1$0.abrupt("continue", 30);

			case 23:

				passed = true;
				context$1$0.next = 26;
				return executeStatements(context, current.consequent);

			case 26:
				value = context$1$0.sent;

				if (!(value && value.isCancelled())) {
					context$1$0.next = 30;
					break;
				}

				value.cancel = false;
				return context$1$0.abrupt("return", value);

			case 30:
				_iteratorNormalCompletion2 = true;
				context$1$0.next = 10;
				break;

			case 33:
				context$1$0.next = 39;
				break;

			case 35:
				context$1$0.prev = 35;
				context$1$0.t0 = context$1$0["catch"](8);
				_didIteratorError2 = true;
				_iteratorError2 = context$1$0.t0;

			case 39:
				context$1$0.prev = 39;
				context$1$0.prev = 40;

				if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
					_iterator2["return"]();
				}

			case 42:
				context$1$0.prev = 42;

				if (!_didIteratorError2) {
					context$1$0.next = 45;
					break;
				}

				throw _iteratorError2;

			case 45:
				return context$1$0.finish(42);

			case 46:
				return context$1$0.finish(39);

			case 47:
				if (!(!passed && defaultCase && defaultCase.consequent)) {
					context$1$0.next = 53;
					break;
				}

				context$1$0.next = 50;
				return executeStatements(context, defaultCase.consequent);

			case 50:
				value = context$1$0.sent;

				value.cancel = false;
				return context$1$0.abrupt("return", value);

			case 53:
				return context$1$0.abrupt("return", value);

			case 54:
			case "end":
				return context$1$0.stop();
		}
	}, SwitchStatement, this, [[8, 35, 39, 47], [40,, 42, 46]]);
}));
module.exports = exports["default"];
},{"../utils/async":208,"babel-runtime/core-js/get-iterator":2,"babel-runtime/regenerator":20}],239:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ThisExpression;

function ThisExpression(context) {
	return context.result(context.env.getThisBinding());
}

module.exports = exports["default"];
},{}],240:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function ThrowStatement(context) {
	var arg, err;
	return _regeneratorRuntime.wrap(function ThrowStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.argument).execute();

			case 2:
				arg = context$1$0.sent.result.getValue();

				if (!arg.isPrimitive) {
					context$1$0.next = 5;
					break;
				}

				throw arg.value;

			case 5:
				err = new Error();

				err.wrappedError = arg;
				throw err;

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, ThrowStatement, this);
}));
module.exports = exports["default"];

// todo: handle more specific errors
},{"../utils/async":208,"babel-runtime/regenerator":20}],241:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function TryStatement(context) {
	var result, uncaughtError, caughtError, errVar, scope, finalResult;
	return _regeneratorRuntime.wrap(function TryStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				result = undefined, uncaughtError = undefined;
				context$1$0.prev = 1;
				context$1$0.next = 4;
				return context.create(context.node.block).execute();

			case 4:
				result = context$1$0.sent;
				context$1$0.next = 22;
				break;

			case 7:
				context$1$0.prev = 7;
				context$1$0.t0 = context$1$0["catch"](1);

				if (!context.node.handler) {
					context$1$0.next = 21;
					break;
				}

				caughtError = context$1$0.t0 && context$1$0.t0.wrappedError || context.env.objectFactory.createPrimitive(context$1$0.t0);
				errVar = context.node.handler.param.name;

				contracts.assertIsValidIdentifier(errVar, context.env.isStrict());

				scope = context.env.createScope();

				context.env.createVariable(errVar);
				context.env.putValue(errVar, caughtError);

				context$1$0.next = 18;
				return scope.use(function () {
					try {
						return context.create(context.node.handler.body, context.node.handler).execute();
					} catch (catchError) {
						uncaughtError = catchError;
					}
				});

			case 18:
				result = context$1$0.sent;
				context$1$0.next = 22;
				break;

			case 21:
				uncaughtError = context$1$0.t0;

			case 22:
				context$1$0.prev = 22;

				if (!context.node.finalizer) {
					context$1$0.next = 29;
					break;
				}

				context$1$0.next = 26;
				return context.create(context.node.finalizer).execute();

			case 26:
				finalResult = context$1$0.sent;

				if (!(finalResult && finalResult.shouldBreak(context))) {
					context$1$0.next = 29;
					break;
				}

				return context$1$0.abrupt("return", finalResult);

			case 29:
				return context$1$0.finish(22);

			case 30:
				if (!uncaughtError) {
					context$1$0.next = 32;
					break;
				}

				throw uncaughtError;

			case 32:
				return context$1$0.abrupt("return", result);

			case 33:
			case "end":
				return context$1$0.stop();
		}
	}, TryStatement, this, [[1, 7, 22, 30]]);
}));
module.exports = exports["default"];
},{"../utils/async":208,"../utils/contracts":210,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],242:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _envReference = require("../env/reference");

var _envReference2 = _interopRequireDefault(_envReference);

var _envPropertyReference = require("../env/property-reference");

var _envPropertyReference2 = _interopRequireDefault(_envPropertyReference);

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function UnaryExpression(context) {
	var objectFactory, result, value, newValue, type, deleted, resolved;
	return _regeneratorRuntime.wrap(function UnaryExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				objectFactory = context.env.objectFactory;
				context$1$0.next = 3;
				return context.create(context.node.argument).execute();

			case 3:
				result = context$1$0.sent.result;
				value = undefined, newValue = undefined;
				context$1$0.t0 = context.node.operator;
				context$1$0.next = context$1$0.t0 === "typeof" ? 8 : context$1$0.t0 === "-" ? 12 : context$1$0.t0 === "+" ? 15 : context$1$0.t0 === "!" ? 18 : context$1$0.t0 === "~" ? 21 : context$1$0.t0 === "delete" ? 24 : context$1$0.t0 === "void" ? 37 : 39;
				break;

			case 8:
				type = undefined;

				if (result instanceof _envReference2["default"] && result.isUnresolved()) {
					type = "undefined";
				} else {
					value = result.getValue();
					type = value ? value.type : "undefined";
				}

				newValue = objectFactory.createPrimitive(type);
				return context$1$0.abrupt("break", 40);

			case 12:
				value = result.getValue();
				newValue = objectFactory.createPrimitive(-convert.toNumber(context.env, value));
				return context$1$0.abrupt("break", 40);

			case 15:
				value = result.getValue();
				newValue = objectFactory.createPrimitive(+convert.toNumber(context.env, value));
				return context$1$0.abrupt("break", 40);

			case 18:
				value = result.getValue();
				newValue = objectFactory.createPrimitive(!convert.toBoolean(value));
				return context$1$0.abrupt("break", 40);

			case 21:
				value = result.getValue();
				newValue = objectFactory.createPrimitive(~convert.toInt32(context.env, value));
				return context$1$0.abrupt("break", 40);

			case 24:
				deleted = true;

				if (!(result && result instanceof _envReference2["default"])) {
					context$1$0.next = 33;
					break;
				}

				resolved = !result.isUnresolved();

				if (!context.env.isStrict()) {
					context$1$0.next = 30;
					break;
				}

				if (!(!resolved || !(result instanceof _envPropertyReference2["default"]) || result.unqualified)) {
					context$1$0.next = 30;
					break;
				}

				throw new SyntaxError("Delete of an unqualified identifier in strict mode.");

			case 30:

				if (resolved) {
					deleted = result.deleteBinding(result.name);
				}
				context$1$0.next = 35;
				break;

			case 33:
				if (!context.node.argument.object) {
					context$1$0.next = 35;
					break;
				}

				throw new ReferenceError(context.node.argument.object.name + " is not defined");

			case 35:

				newValue = objectFactory.createPrimitive(deleted);
				return context$1$0.abrupt("break", 40);

			case 37:
				newValue = objectFactory.createPrimitive(undefined);
				return context$1$0.abrupt("break", 40);

			case 39:
				throw new SyntaxError("Unknown unary operator: " + context.node.operator);

			case 40:
				return context$1$0.abrupt("return", context.result(newValue));

			case 41:
			case "end":
				return context$1$0.stop();
		}
	}, UnaryExpression, this);
}));
module.exports = exports["default"];
},{"../env/property-reference":183,"../env/reference":184,"../utils/async":208,"../utils/convert":211,"babel-runtime/helpers/interop-require-default":18,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],243:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsConvert = require("../utils/convert");

var convert = _interopRequireWildcard(_utilsConvert);

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function UpdateExpression(context) {
	var objectFactory, ref, originalValue, newValue, returnValue;
	return _regeneratorRuntime.wrap(function UpdateExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				objectFactory = context.env.objectFactory;
				context$1$0.next = 3;
				return context.create(context.node.argument).execute();

			case 3:
				ref = context$1$0.sent.result;

				contracts.assertIsValidAssignment(ref, context.env.isStrict());

				originalValue = convert.toNumber(context.env, ref.getValue());
				newValue = originalValue;

				if (context.node.operator === "++") {
					newValue++;
				} else {
					newValue--;
				}

				newValue = objectFactory.createPrimitive(newValue);
				originalValue = objectFactory.createPrimitive(originalValue);

				returnValue = context.node.prefix ? newValue : originalValue;

				ref.setValue(newValue);
				return context$1$0.abrupt("return", context.result(returnValue));

			case 13:
			case "end":
				return context$1$0.stop();
		}
	}, UpdateExpression, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"../utils/contracts":210,"../utils/convert":211,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}],244:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function VariableDeclaration(context) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, decl;

	return _regeneratorRuntime.wrap(function VariableDeclaration$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 3;
				_iterator = _getIterator(context.node.declarations);

			case 5:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 12;
					break;
				}

				decl = _step.value;
				context$1$0.next = 9;
				return context.create(decl).execute();

			case 9:
				_iteratorNormalCompletion = true;
				context$1$0.next = 5;
				break;

			case 12:
				context$1$0.next = 18;
				break;

			case 14:
				context$1$0.prev = 14;
				context$1$0.t0 = context$1$0["catch"](3);
				_didIteratorError = true;
				_iteratorError = context$1$0.t0;

			case 18:
				context$1$0.prev = 18;
				context$1$0.prev = 19;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 21:
				context$1$0.prev = 21;

				if (!_didIteratorError) {
					context$1$0.next = 24;
					break;
				}

				throw _iteratorError;

			case 24:
				return context$1$0.finish(21);

			case 25:
				return context$1$0.finish(18);

			case 26:
				return context$1$0.abrupt("return", context.empty());

			case 27:
			case "end":
				return context$1$0.stop();
		}
	}, VariableDeclaration, this, [[3, 14, 18, 26], [19,, 21, 25]]);
}));
module.exports = exports["default"];
},{"../utils/async":208,"babel-runtime/core-js/get-iterator":2,"babel-runtime/regenerator":20}],245:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function VariableDeclarator(context) {
	var name, value;
	return _regeneratorRuntime.wrap(function VariableDeclarator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				name = context.node.id.name;
				value = undefined;

				if (!context.node.init) {
					context$1$0.next = 6;
					break;
				}

				context$1$0.next = 5;
				return context.create(context.node.init).execute();

			case 5:
				value = context$1$0.sent.result;

			case 6:

				// variables have already been hoisted so we just need to initialize them if defined
				if (value) {
					context.env.putValue(name, value.getValue(), context.env.isStrict(), context);
				}

				return context$1$0.abrupt("return", context.result(context.env.getReference(name)));

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, VariableDeclarator, this);
}));
module.exports = exports["default"];
},{"../utils/async":208,"babel-runtime/regenerator":20}],246:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

var _utilsContracts = require("../utils/contracts");

var contracts = _interopRequireWildcard(_utilsContracts);

exports["default"] = (0, _utilsAsync.degenerate)(_regeneratorRuntime.mark(function WithStatement(context) {
	var obj, scope;
	return _regeneratorRuntime.wrap(function WithStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!context.env.isStrict()) {
					context$1$0.next = 2;
					break;
				}

				throw new SyntaxError("Strict mode code may not include a with statement");

			case 2:
				context$1$0.next = 4;
				return context.create(context.node.object).execute();

			case 4:
				obj = context$1$0.sent.result.getValue();

				if (!contracts.isNullOrUndefined(obj)) {
					context$1$0.next = 7;
					break;
				}

				throw new TypeError(obj.className + " has no properties");

			case 7:
				scope = context.env.createObjectScope(obj, context.env.getThisBinding());

				// let result;

				scope.init(context.node.body);
				context$1$0.next = 11;
				return scope.use(function () {
					return context.create(context.node.body).execute();
				});

			case 11:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 12:
			case "end":
				return context$1$0.stop();
		}
	}, WithStatement, this);
}));
module.exports = exports["default"];

// try {
// 	result = yield context.create(context.node.body).execute();
// } catch (err) {
// 	scope.exitScope();
// 	throw err;
// }

// scope.exitScope();
// return result;
},{"../utils/async":208,"../utils/contracts":210,"babel-runtime/helpers/interop-require-wildcard":19,"babel-runtime/regenerator":20}]},{},[1])(1)
});