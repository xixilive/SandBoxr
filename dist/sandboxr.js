(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SandBoxr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":28}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":29}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/math/sign"), __esModule: true };
},{"core-js/library/fn/math/sign":30}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/epsilon"), __esModule: true };
},{"core-js/library/fn/number/epsilon":31}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/max-safe-integer"), __esModule: true };
},{"core-js/library/fn/number/max-safe-integer":32}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/min-safe-integer"), __esModule: true };
},{"core-js/library/fn/number/min-safe-integer":33}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":34}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":35}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":36}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":37}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":38}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":39}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":40}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/string/from-code-point"), __esModule: true };
},{"core-js/library/fn/string/from-code-point":41}],15:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":43}],16:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/for"), __esModule: true };
},{"core-js/library/fn/symbol/for":42}],17:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":44}],18:[function(require,module,exports){
"use strict";

exports["default"] = Function.prototype.bind;
exports.__esModule = true;
},{}],19:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],20:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/define-property":9}],21:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/define-property":9}],22:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
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
        desc = parent = undefined;
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
},{"babel-runtime/core-js/object/get-own-property-descriptor":10}],23:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/create":8,"babel-runtime/core-js/object/set-prototype-of":12}],24:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],25:[function(require,module,exports){
"use strict";

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

exports["default"] = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return _Array$from(arr);
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/array/from":1}],26:[function(require,module,exports){
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
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./runtime":27}],27:[function(require,module,exports){
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

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

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
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

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
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

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
    if (_Object$setPrototypeOf) {
      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
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
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return _Promise.resolve(value.arg).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return _Promise.resolve(value).then(function (unwrapped) {
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
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new _Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
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
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
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

  Gp[toStringTagSymbol] = "Generator";

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
},{"_process":117,"babel-runtime/core-js/object/create":8,"babel-runtime/core-js/object/set-prototype-of":12,"babel-runtime/core-js/promise":13,"babel-runtime/core-js/symbol":15}],28:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":50,"../../modules/es6.array.from":101,"../../modules/es6.string.iterator":114}],29:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":100,"../modules/es6.string.iterator":114,"../modules/web.dom.iterable":116}],30:[function(require,module,exports){
require('../../modules/es6.math.sign');
module.exports = require('../../modules/$.core').Math.sign;
},{"../../modules/$.core":50,"../../modules/es6.math.sign":103}],31:[function(require,module,exports){
require('../../modules/es6.number.epsilon');
module.exports = Math.pow(2, -52);
},{"../../modules/es6.number.epsilon":104}],32:[function(require,module,exports){
require('../../modules/es6.number.max-safe-integer');
module.exports = 0x1fffffffffffff;
},{"../../modules/es6.number.max-safe-integer":105}],33:[function(require,module,exports){
require('../../modules/es6.number.min-safe-integer');
module.exports = -0x1fffffffffffff;
},{"../../modules/es6.number.min-safe-integer":106}],34:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":50,"../../modules/es6.object.assign":107}],35:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":73}],36:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":73}],37:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.get-own-property-descriptor');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":73,"../../modules/es6.object.get-own-property-descriptor":108}],38:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":50,"../../modules/es6.object.keys":109}],39:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":50,"../../modules/es6.object.set-prototype-of":110}],40:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":50,"../modules/es6.object.to-string":111,"../modules/es6.promise":112,"../modules/es6.string.iterator":114,"../modules/web.dom.iterable":116}],41:[function(require,module,exports){
require('../../modules/es6.string.from-code-point');
module.exports = require('../../modules/$.core').String.fromCodePoint;
},{"../../modules/$.core":50,"../../modules/es6.string.from-code-point":113}],42:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/$.core').Symbol['for'];
},{"../../modules/$.core":50,"../../modules/es6.symbol":115}],43:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":50,"../../modules/es6.symbol":115}],44:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":98,"../../modules/es6.string.iterator":114,"../../modules/web.dom.iterable":116}],45:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],46:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":66}],47:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var toObject = require('./$.to-object')
  , IObject  = require('./$.iobject')
  , enumKeys = require('./$.enum-keys');

module.exports = require('./$.fails')(function(){
  return Symbol() in Object.assign({}); // Object.assign available and Symbol is native
}) ? function assign(target, source){   // eslint-disable-line no-unused-vars
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
} : Object.assign;
},{"./$.enum-keys":55,"./$.fails":56,"./$.iobject":64,"./$.to-object":95}],48:[function(require,module,exports){
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
},{"./$.cof":49,"./$.wks":98}],49:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],50:[function(require,module,exports){
var core = module.exports = {};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],51:[function(require,module,exports){
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
},{"./$.a-function":45}],52:[function(require,module,exports){
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
},{"./$.core":50,"./$.global":59}],53:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],54:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":59,"./$.is-object":66}],55:[function(require,module,exports){
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
},{"./$":73}],56:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],57:[function(require,module,exports){
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
},{"./$.an-object":46,"./$.ctx":51,"./$.is-array-iter":65,"./$.iter-call":67,"./$.to-length":94,"./core.get-iterator-method":99}],58:[function(require,module,exports){
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
},{"./$":73,"./$.to-iobject":93}],59:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var UNDEFINED = 'undefined';
var global = module.exports = typeof window != UNDEFINED && window.Math == Math
  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],60:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],61:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.support-desc') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":73,"./$.property-desc":79,"./$.support-desc":88}],62:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":59}],63:[function(require,module,exports){
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
},{}],64:[function(require,module,exports){
// indexed object, fallback for non-array-like ES3 strings
var cof = require('./$.cof');
module.exports = 0 in Object('z') ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":49}],65:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./$.iterators')
  , ITERATOR  = require('./$.wks')('iterator');
module.exports = function(it){
  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
};
},{"./$.iterators":72,"./$.wks":98}],66:[function(require,module,exports){
// http://jsperf.com/core-js-isobject
module.exports = function(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
};
},{}],67:[function(require,module,exports){
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
},{"./$.an-object":46}],68:[function(require,module,exports){
'use strict';
var $ = require('./$')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: require('./$.property-desc')(1,next)});
  require('./$.tag')(Constructor, NAME + ' Iterator');
};
},{"./$":73,"./$.hide":61,"./$.property-desc":79,"./$.tag":89,"./$.wks":98}],69:[function(require,module,exports){
'use strict';
var LIBRARY         = require('./$.library')
  , $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , hide            = require('./$.hide')
  , has             = require('./$.has')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , Iterators       = require('./$.iterators')
  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
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
    } else $def($def.P + $def.F * BUGGY, NAME, methods);
  }
};
},{"./$":73,"./$.def":52,"./$.has":60,"./$.hide":61,"./$.iter-create":68,"./$.iterators":72,"./$.library":75,"./$.redef":80,"./$.tag":89,"./$.wks":98}],70:[function(require,module,exports){
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
},{"./$.wks":98}],71:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],72:[function(require,module,exports){
module.exports = {};
},{}],73:[function(require,module,exports){
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
},{}],74:[function(require,module,exports){
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
},{"./$":73,"./$.to-iobject":93}],75:[function(require,module,exports){
module.exports = true;
},{}],76:[function(require,module,exports){
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
},{"./$.cof":49,"./$.global":59,"./$.task":90}],77:[function(require,module,exports){
var $redef = require('./$.redef');
module.exports = function(target, src){
  for(var key in src)$redef(target, key, src[key]);
  return target;
};
},{"./$.redef":80}],78:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
module.exports = function(KEY, exec){
  var $def = require('./$.def')
    , fn   = (require('./$.core').Object || {})[KEY] || Object[KEY]
    , exp  = {};
  exp[KEY] = exec(fn);
  $def($def.S + $def.F * require('./$.fails')(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":50,"./$.def":52,"./$.fails":56}],79:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],80:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":61}],81:[function(require,module,exports){
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],82:[function(require,module,exports){
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
},{"./$":73,"./$.an-object":46,"./$.ctx":51,"./$.is-object":66}],83:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":59}],84:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
},{}],85:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if(require('./$.support-desc') && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":73,"./$.support-desc":88,"./$.wks":98}],86:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],87:[function(require,module,exports){
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
},{"./$.defined":53,"./$.to-integer":92}],88:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":56}],89:[function(require,module,exports){
var has  = require('./$.has')
  , hide = require('./$.hide')
  , TAG  = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
};
},{"./$.has":60,"./$.hide":61,"./$.wks":98}],90:[function(require,module,exports){
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
},{"./$.cof":49,"./$.ctx":51,"./$.dom-create":54,"./$.global":59,"./$.html":62,"./$.invoke":63}],91:[function(require,module,exports){
var toInteger = require('./$.to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./$.to-integer":92}],92:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],93:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":53,"./$.iobject":64}],94:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":92}],95:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":53}],96:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],97:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],98:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || require('./$.uid'))('Symbol.' + name));
};
},{"./$.global":59,"./$.shared":83,"./$.uid":96}],99:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};
},{"./$.classof":48,"./$.core":50,"./$.iterators":72,"./$.wks":98}],100:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":46,"./$.core":50,"./core.get-iterator-method":99}],101:[function(require,module,exports){
'use strict';
var ctx         = require('./$.ctx')
  , $def        = require('./$.def')
  , toObject    = require('./$.to-object')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
$def($def.S + $def.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , mapfn   = arguments[1]
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      for(result = new C(length = toLength(O.length)); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});
},{"./$.ctx":51,"./$.def":52,"./$.is-array-iter":65,"./$.iter-call":67,"./$.iter-detect":70,"./$.to-length":94,"./$.to-object":95,"./core.get-iterator-method":99}],102:[function(require,module,exports){
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
},{"./$.iter-define":69,"./$.iter-step":71,"./$.iterators":72,"./$.to-iobject":93,"./$.unscope":97}],103:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $def = require('./$.def');

$def($def.S, 'Math', {sign: require('./$.sign')});
},{"./$.def":52,"./$.sign":84}],104:[function(require,module,exports){
// 20.1.2.1 Number.EPSILON
var $def = require('./$.def');

$def($def.S, 'Number', {EPSILON: Math.pow(2, -52)});
},{"./$.def":52}],105:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $def = require('./$.def');

$def($def.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
},{"./$.def":52}],106:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $def = require('./$.def');

$def($def.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});
},{"./$.def":52}],107:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');

$def($def.S + $def.F, 'Object', {assign: require('./$.assign')});
},{"./$.assign":47,"./$.def":52}],108:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./$.to-iobject');

require('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":78,"./$.to-iobject":93}],109:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":78,"./$.to-object":95}],110:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $def = require('./$.def');
$def($def.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.def":52,"./$.set-proto":82}],111:[function(require,module,exports){

},{}],112:[function(require,module,exports){
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
      if(isUnhandled(record.p)){
        if(isNode){
          process.emit('unhandledRejection', value, record.p);
        } else if(global.console && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
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
},{"./$":73,"./$.a-function":45,"./$.an-object":46,"./$.classof":48,"./$.core":50,"./$.ctx":51,"./$.def":52,"./$.for-of":57,"./$.global":59,"./$.is-object":66,"./$.iter-detect":70,"./$.library":75,"./$.microtask":76,"./$.mix":77,"./$.same":81,"./$.set-proto":82,"./$.species":85,"./$.strict-new":86,"./$.support-desc":88,"./$.tag":89,"./$.uid":96,"./$.wks":98}],113:[function(require,module,exports){
var $def    = require('./$.def')
  , toIndex = require('./$.to-index')
  , fromCharCode = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$def($def.S + $def.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res = []
      , len = arguments.length
      , i   = 0
      , code;
    while(len > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});
},{"./$.def":52,"./$.to-index":91}],114:[function(require,module,exports){
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
},{"./$.iter-define":69,"./$.string-at":87}],115:[function(require,module,exports){
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
  , isObject       = require('./$.is-object')
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

// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values in objects to JSON as null
if(!useNative || require('./$.fails')(function(){
  return JSON.stringify([{a: $Symbol()}, [$Symbol()]]) != '[{},[null]]';
}))$redef($Symbol.prototype, 'toJSON', function toJSON(){
  if(useNative && isObject(this))return this;
});

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
},{"./$":73,"./$.an-object":46,"./$.def":52,"./$.enum-keys":55,"./$.fails":56,"./$.get-names":58,"./$.global":59,"./$.has":60,"./$.is-object":66,"./$.keyof":74,"./$.library":75,"./$.property-desc":79,"./$.redef":80,"./$.shared":83,"./$.support-desc":88,"./$.tag":89,"./$.to-iobject":93,"./$.uid":96,"./$.wks":98}],116:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":72,"./es6.array.iterator":102}],117:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
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

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],118:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reference = require("./reference");

var _typesPropertyDescriptor = require("../types/property-descriptor");

var DeclarativeEnvironment = (function () {
	function DeclarativeEnvironment(parent, thisArg, env, strict) {
		_classCallCheck(this, DeclarativeEnvironment);

		this.properties = _Object$create(null);
		this.parent = parent && parent.scope;
		this.thisBinding = thisArg;
		this.env = env;
		this.strict = strict;
	}

	_createClass(DeclarativeEnvironment, [{
		key: "setParent",
		value: function setParent(parent) {
			this.parent = parent.scope || parent;
		}
	}, {
		key: "getReference",
		value: function getReference(key) {
			var ref = new _reference.Reference(key, this, this.env);
			ref.unqualified = true;
			return ref;
		}
	}, {
		key: "has",
		value: function has(key) {
			return key in this.properties;
		}
	}, {
		key: "owns",
		value: function owns(key) {
			return this.has(key);
		}
	}, {
		key: "deleteVariable",
		value: function deleteVariable(key) {
			if (!this.has(key)) {
				return true;
			}

			if (!this.properties[key].configurable) {
				return false;
			}

			delete this.properties[key];
			return true;
		}
	}, {
		key: "createVariable",
		value: function createVariable(key) {
			if (this.has(key)) {
				return this.properties[key];
			}

			return this.properties[key] = new _typesPropertyDescriptor.PropertyDescriptor(this, {
				value: undefined,
				configurable: false,
				enumerable: true,
				writable: true
			});
		}
	}, {
		key: "setValue",
		value: function setValue(key, value, throwOnError) {
			if (this.has(key)) {
				if (!this.properties[key].writable) {
					if (throwOnError) {
						throw TypeError("Cannot write to immutable binding: " + key);
					}

					return false;
				}

				this.properties[key].setValue(value);
				return true;
			} else {
				var _parent;

				return (_parent = this.parent).setValue.apply(_parent, arguments);
			}
		}
	}, {
		key: "getValue",
		value: function getValue(key, throwOnError) {
			if (this.has(key)) {
				if (!this.properties[key].value) {
					if (throwOnError) {
						throw ReferenceError(key + " is not defined");
					}

					return undefined;
				}

				return this.properties[key].getValue();
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

exports.DeclarativeEnvironment = DeclarativeEnvironment;

},{"../types/property-descriptor":304,"./reference":122,"babel-runtime/core-js/object/create":8,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20}],119:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../types/primitive-type");

var _executionContext = require("../execution-context");

var _declarativeEnvironment = require("./declarative-environment");

var _objectEnvironment = require("./object-environment");

var _reference = require("./reference");

var _es5 = require("../es5");

var _es52 = _interopRequireDefault(_es5);

var _es6 = require("../es6");

var _es62 = _interopRequireDefault(_es6);

var _utilsOperators = require("../utils/operators");

var _utilsOperators2 = _interopRequireDefault(_utilsOperators);

var _utilsContracts = require("../utils/contracts");

var _scope = require("./scope");

var defaultOptions = {
	allowDebugger: false,
	useStrict: false,
	ecmaVersion: 5
};

var Environment = (function () {
	function Environment() {
		_classCallCheck(this, Environment);
	}

	_createClass(Environment, [{
		key: "init",
		value: function init() {
			var _this = this;

			var options = arguments.length <= 0 || arguments[0] === undefined ? defaultOptions : arguments[0];

			// clear state in case of re-init
			this.current = null;
			this.globalScope = null;

			this.options = _Object$assign({}, defaultOptions, options);
			(options.ecmaVersion === 6 ? _es62["default"] : _es52["default"])(this);

			// todo: improve this
			this.ops = _Object$assign(_utilsOperators2["default"], options.operators);
			this.ops.env = this;

			this.objectFactory.init();

			if (options.exclude && options.exclude.length > 0) {
				options.exclude.forEach(function (name) {
					var segments = name.split(".");
					var parent = _this.global;

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
	}, {
		key: "getReference",
		value: function getReference(key) {
			var scope = this.current && this.current.scope;
			while (scope) {
				if (scope.owns(key)) {
					return scope.getReference(key, true);
				}

				scope = scope.parent;
			}

			return new _reference.Reference(key, undefined, this);
		}
	}, {
		key: "getValue",
		value: function getValue(key) {
			return this.getReference(key).getValue();
		}
	}, {
		key: "setValue",
		value: function setValue(key, value, strict) {
			this.current.scope.setValue(key, value, strict);
		}
	}, {
		key: "has",
		value: function has(key) {
			return this.current.scope.has(key);
		}
	}, {
		key: "deleteVariable",
		value: function deleteVariable(key) {
			this.current.scope.deleteVariable(key);
		}

		/**
   * Declares a variable within the current scope.
   * @param {String} key - the key of the variable.
   * @param {Boolean} [immutable] - whether the variable is immutable or not.
   * @returns {PropertyDescriptor} The property descriptor for the new variabble.
   */
	}, {
		key: "createVariable",
		value: function createVariable(key, immutable) {
			(0, _utilsContracts.assertIsValidIdentifier)(key, this.isStrict());
			return this.current.scope.createVariable(key, !immutable);
		}

		/**
   * Indicates whether the current lexical scope is in strict mode.
   * @returns {Boolean} true if in strict mode; false otherwise.
   */
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

		/**
   * Gets the current `this` object for the environment.
   * @returns {ObjectType} The `this` object for the current scope.
   */
	}, {
		key: "getThisBinding",
		value: function getThisBinding() {
			var thisArg = this.current.scope.getThisBinding();
			if (thisArg) {
				return thisArg;
			}

			if (this.isStrict()) {
				return _typesPrimitiveType.UNDEFINED;
			}

			return this.global;
		}
	}, {
		key: "createExecutionContext",
		value: function createExecutionContext(node, callee, isNew) {
			return new _executionContext.ExecutionContext(this, node, callee, isNew);
		}

		/**
   * Creates a new declarative scope.
   * @param {ObjectType} [thisArg] - The `this` binding for the new scope.
   * @param {Boolean} [strict] - Indicates whether the scope is in strict mode.
   * @returns {Scope} The new scope.
   */
	}, {
		key: "createScope",
		value: function createScope(thisArg, strict) {
			return this.setScope(new _declarativeEnvironment.DeclarativeEnvironment(this.current, thisArg, this, strict || this.isStrict()));
		}

		/**
   * Creates a new scope based on the provided object. This is used for the `with`
   * statement, as well as the global scope.
   * @param {ObjectType} obj - The object to bind the scope to.
   * @param {ObjectType} [thisArg] - The `this` binding for the new scope.
   * @param {Boolean} [strict] - Indicates whether the scope is in strict mode.
   * @returns {Scope} The new scope.
   */
	}, {
		key: "createObjectScope",
		value: function createObjectScope(obj, thisArg, strict) {
			return this.setScope(new _objectEnvironment.ObjectEnvironment(this.current, obj, thisArg, this, strict || this.isStrict()));
		}
	}, {
		key: "createExecutionScope",
		value: function createExecutionScope(fn, thisArg) {
			var priorScope = this.current.scope;

			// if a parent scope is defined we need to limit this scope to that scope
			if (fn.boundScope) {
				this.setScope(fn.boundScope.scope);
			}

			thisArg = fn.boundThis || thisArg;
			if (fn.arrow) {
				thisArg = this.getThisBinding();
			}

			var scope = this.createScope(thisArg);
			scope.priorScope = priorScope;
			return scope;
		}

		/**
   * Sets the current scope.
   * @param {Environment} scope - Sets the current environment.
   * @returns {Scope} The created scope.
   */
	}, {
		key: "setScope",
		value: function setScope(scope) {
			return this.current = new _scope.Scope(this, scope);
		}
	}]);

	return Environment;
})();

exports.Environment = Environment;

},{"../es5":169,"../es6":224,"../execution-context":283,"../types/primitive-type":303,"../utils/contracts":311,"../utils/operators":315,"./declarative-environment":118,"./object-environment":120,"./reference":122,"./scope":123,"babel-runtime/core-js/object/assign":7,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/interop-require-default":24}],120:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propertyReference = require("./property-reference");

var ObjectEnvironment = (function () {
	function ObjectEnvironment(parent, obj, thisArg, env, strict) {
		_classCallCheck(this, ObjectEnvironment);

		this.parent = parent && parent.scope;
		this.object = obj;
		this.thisBinding = thisArg || obj;
		this.env = env;
		this.strict = strict;
	}

	_createClass(ObjectEnvironment, [{
		key: "getReference",
		value: function getReference(key, unqualified) {
			var ref = new _propertyReference.PropertyReference(key, this.object, this.env);
			ref.unqualified = unqualified;
			return ref;
		}
	}, {
		key: "has",
		value: function has(key) {
			return this.parent ? this.parent.has(key) : this.owns(key);
		}
	}, {
		key: "owns",
		value: function owns(key) {
			return this.object.has(key);
		}
	}, {
		key: "getVariable",
		value: function getVariable(key) {
			return this.object.getProperty(key);
		}
	}, {
		key: "deleteVariable",
		value: function deleteVariable(key) {
			return this.object.deleteProperty(key, false);
		}
	}, {
		key: "createVariable",
		value: function createVariable(key, immutable) {
			if (this.parent) {
				var _parent;

				return (_parent = this.parent).createVariable.apply(_parent, arguments);
			}

			this.object.defineOwnProperty(key, {
				value: undefined,
				configurable: immutable,
				enumerable: true,
				writable: true
			}, this.env.isStrict());

			return this.object.getProperty(key);
		}
	}, {
		key: "setValue",
		value: function setValue(key, value, throwOnError) {
			if (this.parent && !this.object.has(key)) {
				var _parent2;

				(_parent2 = this.parent).setValue.apply(_parent2, arguments);
			} else {
				this.object.setValue(key, value, throwOnError);
			}
		}
	}, {
		key: "getValue",
		value: function getValue(key, throwOnError) {
			if (!this.owns(key)) {
				if (throwOnError) {
					throw ReferenceError(key + " is not defined.");
				}

				return undefined;
			}

			return this.object.getValue(key);
		}
	}, {
		key: "getThisBinding",
		value: function getThisBinding() {
			return this.thisBinding;
		}
	}]);

	return ObjectEnvironment;
})();

exports.ObjectEnvironment = ObjectEnvironment;

},{"./property-reference":121,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20}],121:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reference = require("./reference");

var _typesPrimitiveType = require("../types/primitive-type");

/**
 * An object which represents a reference to an object's property.
 */

var PropertyReference = (function (_Reference) {
	_inherits(PropertyReference, _Reference);

	function PropertyReference(key, object, env) {
		_classCallCheck(this, PropertyReference);

		_get(Object.getPrototypeOf(PropertyReference.prototype), "constructor", this).call(this, key, object, env);
		this.isPropertyReference = true;
	}

	/**
  * Returns the value of the reference. If the reference is unresolved,
  * a ReferenceError will be thrown.
  * @returns {ObjectType} The value.
  */

	_createClass(PropertyReference, [{
		key: "getValue",
		value: function getValue() {
			var prop = this.base.getProperty(this.key);
			return prop && prop.getValue() || _typesPrimitiveType.UNDEFINED;
		}

		/**
   * Sets the value of the underlying property or value.
   * @param {ObjectType} value - The value to assign.
   * @param {Boolean} throwOnError - Set true if a failed assignment should throw an exception.
   * @returns {Boolean} The result of the value assignment.
   */
	}, {
		key: "setValue",
		value: function setValue(value, throwOnError) {
			if (throwOnError) {
				// todo: why can't this go in the setValue function?
				var propInfo = this.base.getProperty(this.key);
				if (propInfo && !propInfo.canSetValue()) {
					throw TypeError("Cannot assign to read only property '" + this.key + "'");
				}

				if (!propInfo && !this.base.isExtensible()) {
					throw TypeError("Cannot assign to '" + this.key + "' on non-extensible object");
				}
			}

			var result = this.base.setValue(this.key, value);
			if (!result && throwOnError) {
				throw TypeError("Cannot assign to read only property '" + this.key + "'");
			}

			return result;
		}

		/**
   * Deletes the underlying reference.
   * @returns {Boolean} The result of the delete operation.
   */
	}, {
		key: "delete",
		value: function _delete() {
			return this.base.deleteProperty(this.key, this.env.isStrict());
		}

		/**
   * Indicates whether the reference is resolved or not.
   * @returns {Boolean} true if resolves; false otherwise.
   */
	}, {
		key: "isUnresolved",
		value: function isUnresolved() {
			return false;
		}
	}]);

	return PropertyReference;
})(_reference.Reference);

exports.PropertyReference = PropertyReference;

},{"../types/primitive-type":303,"./reference":122,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],122:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var Reference = (function () {
	function Reference(key, base, env) {
		_classCallCheck(this, Reference);

		this.isReference = true;
		this.unqualified = false;

		this.key = key;
		this.base = base;
		this.env = env;
		this.strict = env.isStrict();
	}

	/**
  * Returns the value of the reference. If the reference is unresolved,
  * a ReferenceError will be thrown.
  * @returns {ObjectType} The value.
  */

	_createClass(Reference, [{
		key: "getValue",
		value: function getValue() {
			if (!this.base) {
				throw ReferenceError(this.key + " is not defined");
			}

			return this.base.getValue(this.key, this.strict);
		}

		/**
   * Sets the value of the underlying property or value.
   * @param {ObjectType} value - The value to assign.
   * @returns {Boolean} The result of the value assignment.
   */
	}, {
		key: "setValue",
		value: function setValue(value) {
			if (this.base) {
				if (!this.base.setValue(this.key, value) && this.strict) {
					throw TypeError();
				}

				return true;
			}

			// check identifier before strict
			(0, _utilsContracts.assertIsValidIdentifier)(this.key, this.strict);

			if (this.strict) {
				throw ReferenceError(this.key + " is not defined");
			}

			return this.env.global.defineOwnProperty(this.key, {
				value: value,
				configurable: true,
				enumerable: true,
				writable: true
			}, false, this.env);
		}
	}, {
		key: "isStrict",
		value: function isStrict() {
			return this.strict || this.env.isStrict();
		}

		/**
   * Deletes the underlying reference.
   * @returns {Boolean} The result of the delete operation.
   */
	}, {
		key: "delete",
		value: function _delete() {
			if (this.base) {
				return this.base.deleteVariable(this.key);
			}

			return true;
		}

		/**
   * Indicates whether the reference is resolved or not.
   * @returns {Boolean} true if resolves; false otherwise.
   */
	}, {
		key: "isUnresolved",
		value: function isUnresolved() {
			return !this.base;
		}
	}]);

	return Reference;
})();

exports.Reference = Reference;

},{"../utils/contracts":311,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20}],123:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../types/primitive-type");

var _estreeEstreeWalker = require("../estree/estree-walker");

var _estreeEstreeWalker2 = _interopRequireDefault(_estreeEstreeWalker);

var _utilsContracts = require("../utils/contracts");

var _syntaxRules = require("../syntax-rules");

var _syntaxRules2 = _interopRequireDefault(_syntaxRules);

var _utilsAsync = require("../utils/async");

var _utilsAssign = require("../utils/assign");

var Scope = (function () {
	function Scope(env, scope) {
		_classCallCheck(this, Scope);

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

	_createClass(Scope, [{
		key: "init",
		value: function init(node) {
			if (!node) {
				return;
			}

			var self = this;
			var env = this.env;
			this.scope.strict = (0, _utilsContracts.isStrictNode)(node.body);

			var strict = this.scope.strict || env.isStrict();
			if (strict && node.type === "Program") {
				// todo: see if we can combine below for a single iteration
				_estreeEstreeWalker2["default"].walk(node, _syntaxRules2["default"], { strict: true });
			}

			// hoist variables
			_estreeEstreeWalker2["default"].walk(node, {
				// skip functions
				FunctionExpression: false,

				// do not hoist variables declared within tests
				IfStatement: ["consequent", "alternate"],

				FunctionDeclaration: function FunctionDeclaration(node) {
					var name = node.id.name;

					(0, _utilsContracts.assertIsValidParameterName)(name, strict);
					var strictFunc = strict || (0, _utilsContracts.isStrictNode)(node.body.body);
					var value = env.objectFactory.createFunction(node, undefined, { strict: strictFunc });
					value.bindScope(self);

					var newVar = env.createVariable(name, true);
					newVar.setValue(value);

					// do not scan body
					return false;
				},

				VariableDeclarator: function VariableDeclarator(node) {
					var name = node.id.name;
					(0, _utilsContracts.assertIsValidParameterName)(name, strict);
					if (self.scope.has(name)) {
						return;
					}

					var newVar = env.createVariable(name, true);
					newVar.setValue(_typesPrimitiveType.UNDEFINED);

					return false;
				}
			});
		}
	}, {
		key: "loadComplexArgs",
		value: _regeneratorRuntime.mark(function loadComplexArgs(params, args, callee) {
			var env, strict, scope, argIndex, argLength;
			return _regeneratorRuntime.wrap(function loadComplexArgs$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						env = this.env;
						strict = env.isStrict() || (0, _utilsContracts.isStrictNode)(callee.node);
						scope = this.createParameterScope();
						argIndex = 0;
						argLength = args.length;
						context$2$0.next = 7;
						return (0, _utilsAsync.each)(params, _regeneratorRuntime.mark(function callee$2$0(param, index) {
							var rest, restIndex;
							return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
								while (1) switch (context$3$0.prev = context$3$0.next) {
									case 0:
										if (!(param.type === "RestElement")) {
											context$3$0.next = 7;
											break;
										}

										rest = env.objectFactory.createArray();
										restIndex = 0;

										while (argIndex < argLength) {
											rest.setValue(restIndex++, args[argIndex++] || _typesPrimitiveType.UNDEFINED);
										}

										scope.setValue(param.name, rest);
										context$3$0.next = 9;
										break;

									case 7:
										context$3$0.next = 9;
										return (0, _utilsAssign.declare)(env, param, args[argIndex++] || _typesPrimitiveType.UNDEFINED, true);

									case 9:
									case "end":
										return context$3$0.stop();
								}
							}, callee$2$0, this);
						}));

					case 7:

						if (!callee.arrow) {
							(function () {
								// preserve the passed in arguments, even if defaults are used instead
								var argumentList = env.objectFactory.createArguments(args, callee, strict);
								scope.createVariable("arguments");
								scope.setValue("arguments", argumentList);

								args.forEach(function (value, index) {
									argumentList.defineOwnProperty(index, {
										value: value,
										configurable: true,
										enumerable: true,
										writable: true
									});
								});

								argumentList.defineOwnProperty("length", {
									value: env.objectFactory.createPrimitive(args.length),
									configurable: true,
									writable: true
								});
							})();
						}

						// return scope back to main scope
						this.env.setScope(this.scope);

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, loadComplexArgs, this);
		})

		/**
   * Loads the arguments into the scope and creates the special `arguments` object.
   * @param {Array<Identifier>} params - The parameter identifiers
   * @param {Array<ObjectType>} args - The argument values
   * @param {FunctionType} callee - The function
   * @returns {void}
   */
	}, {
		key: "loadArgs",
		value: _regeneratorRuntime.mark(function loadArgs(params, args, callee) {
			var

			// todo: this method is getting far too complex
			env, scope, strictCallee, strict, argumentList, argsLength, shouldMap, _i, ln, param, value, _name, descriptor, i;

			return _regeneratorRuntime.wrap(function loadArgs$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						if (!(params && params.some(function (p) {
							return p.type !== "Identifier";
						}))) {
							context$2$0.next = 4;
							break;
						}

						context$2$0.next = 3;
						return this.loadComplexArgs(params, args, callee);

					case 3:
						return context$2$0.abrupt("return");

					case 4:
						env = this.env;
						scope = this.scope;
						strictCallee = (0, _utilsContracts.isStrictNode)(callee.node);
						strict = env.isStrict() || strictCallee;
						argumentList = env.objectFactory.createArguments(args, callee, strict);

						scope.createVariable("arguments");
						scope.setValue("arguments", argumentList);

						argsLength = args.length;

						if (params) {
							shouldMap = !strictCallee;

							for (_i = 0, ln = params.length; _i < ln; _i++) {
								param = params[_i];
								value = args[_i] || _typesPrimitiveType.UNDEFINED;
								_name = param.name;

								if (shouldMap && !scope.has(_name)) {
									descriptor = scope.createVariable(_name);

									if (argsLength > _i) {
										argumentList.mapProperty(_i, descriptor);
									}
								}

								if (!shouldMap && _i < argsLength) {
									argumentList.defineOwnProperty(_i, {
										value: value,
										configurable: true,
										enumerable: true,
										writable: true
									});
								}

								(0, _utilsContracts.assertIsValidParameterName)(_name, strict);
								scope.setValue(_name, value);
							}
						}

						// just set value if additional, unnamed arguments are passed in
						i = params ? params.length : 0;

						for (; i < argsLength; i++) {
							argumentList.defineOwnProperty(i, {
								value: args[i],
								configurable: true,
								enumerable: true,
								writable: true
							});
						}

						argumentList.defineOwnProperty("length", {
							value: env.objectFactory.createPrimitive(argsLength),
							configurable: true,
							writable: true
						});

					case 16:
					case "end":
						return context$2$0.stop();
				}
			}, loadArgs, this);
		})
	}, {
		key: "createParameterScope",
		value: function createParameterScope() {
			var temp = this.env.createScope();
			temp.scope.setParent(this.scope.parent);
			this.scope.setParent(temp);
			return temp.scope;
		}

		/**
   * Runs the passed in function and exits the scope when the function completes,
   * returning the environment back to the previos state.
   * @param {Function} inner - The function to execute.
   * @returns {Iterator} The function results
   */
	}, {
		key: "use",
		value: _regeneratorRuntime.mark(function use(inner) {
			var result;
			return _regeneratorRuntime.wrap(function use$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.prev = 0;
						context$2$0.next = 3;
						return inner();

					case 3:
						result = context$2$0.sent;

						this.exit();
						return context$2$0.abrupt("return", result);

					case 8:
						context$2$0.prev = 8;
						context$2$0.t0 = context$2$0["catch"](0);

						this.exit();
						throw context$2$0.t0;

					case 12:
					case "end":
						return context$2$0.stop();
				}
			}, use, this, [[0, 8]]);
		})

		/**
   * Exits the scope, returning the environment to it's previous state.
   * (Typically you would call `use` which handles exiting the scope itself.)
   * @returns {void}
   */
	}, {
		key: "exit",
		value: function exit() {
			this.env.setScope(this.priorScope);
		}
	}]);

	return Scope;
})();

exports.Scope = Scope;

// create a temporary scope for the argument declarations

},{"../estree/estree-walker":282,"../syntax-rules":292,"../types/primitive-type":303,"../utils/assign":309,"../utils/async":310,"../utils/contracts":311,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],124:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStartIndex = getStartIndex;
exports.getEndIndex = getEndIndex;
exports.executeCallback = executeCallback;
exports.executeAccumulator = executeAccumulator;
exports.isSpreadable = isSpreadable;
var marked0$0 = [executeCallback, executeAccumulator].map(_regeneratorRuntime.mark);

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _typesSymbolType = require("../../types/symbol-type");

var _typesPrimitiveType = require("../../types/primitive-type");

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

function executeCallback(env, callback, entry, thisArg, arr) {
	var key, args;
	return _regeneratorRuntime.wrap(function executeCallback$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!thisArg) {
					thisArg = callback.isStrict() ? _typesPrimitiveType.UNDEFINED : env.global;
				}

				key = env.objectFactory.createPrimitive(entry.key);
				args = [entry.value, key, arr];
				context$1$0.next = 5;
				return callback.call(thisArg, args) || _typesPrimitiveType.UNDEFINED;

			case 5:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 6:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function executeAccumulator(env, callback, priorValue, entry, arr) {
	var args;
	return _regeneratorRuntime.wrap(function executeAccumulator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				args = [priorValue || _typesPrimitiveType.UNDEFINED, entry.value || _typesPrimitiveType.UNDEFINED, env.objectFactory.createPrimitive(entry.key), arr];
				context$1$0.next = 3;
				return callback.call(_typesPrimitiveType.UNDEFINED, args) || _typesPrimitiveType.UNDEFINED;

			case 3:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

function isSpreadable(obj) {
	if (!(0, _utilsContracts.isObject)(obj)) {
		return false;
	}

	var key = _typesSymbolType.SymbolType.getByKey("isConcatSpreadable");
	var propInfo = obj.getProperty(key);
	if (propInfo) {
		var spreadable = propInfo.getValue();
		if (!(0, _utilsContracts.isUndefined)(spreadable)) {
			return (0, _utilsNative.toBoolean)(spreadable);
		}
	}

	return obj.className === "Array";
}

},{"../../types/primitive-type":303,"../../types/symbol-type":308,"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],125:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("concat", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
			arrays[_key] = arguments[_key];
		}

		var newArray, index, current, _length, i;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					newArray = factory.createArray();

					// add "this" array to bunch
					arrays.unshift((0, _utilsNative.toObject)(env, this.node));

					index = 0;

				case 3:
					if (!(arrays.length > 0)) {
						context$2$0.next = 15;
						break;
					}

					current = arrays.shift();

					if (!(0, _arrayHelpers.isSpreadable)(current)) {
						context$2$0.next = 12;
						break;
					}

					context$2$0.next = 8;
					return (0, _utilsNative.toLength)(current);

				case 8:
					_length = context$2$0.sent;

					for (i = 0; i < _length; i++) {
						if (current.has(i)) {
							newArray.setIndex(index, current.getValue(i));
						}

						index++;
					}
					context$2$0.next = 13;
					break;

				case 12:
					newArray.setIndex(index++, current);

				case 13:
					context$2$0.next = 3;
					break;

				case 15:

					newArray.setValue("length", factory.createPrimitive(index));
					return context$2$0.abrupt("return", newArray);

				case 17:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Array.prototype.concat"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"./array-helpers":124,"babel-runtime/regenerator":26}],126:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _iterators = require("../../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("every", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(callback, thisArg) {
		var arr, length, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, passed;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Array.prototype.every");
					arr = (0, _utilsNative.toObject)(env, this.node);
					context$2$0.next = 4;
					return (0, _utilsNative.toLength)(arr);

				case 4:
					length = context$2$0.sent;

					(0, _utilsContracts.assertIsFunction)(callback, arr);

					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 9;
					_iterator = _getIterator(_iterators2["default"].forward(arr, 0, length));

				case 11:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						context$2$0.next = 22;
						break;
					}

					entry = _step.value;
					context$2$0.next = 15;
					return (0, _arrayHelpers.executeCallback)(env, callback, entry, thisArg, arr);

				case 15:
					context$2$0.t0 = context$2$0.sent;
					passed = (0, _utilsNative.toBoolean)(context$2$0.t0);

					if (passed) {
						context$2$0.next = 19;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(false));

				case 19:
					_iteratorNormalCompletion = true;
					context$2$0.next = 11;
					break;

				case 22:
					context$2$0.next = 28;
					break;

				case 24:
					context$2$0.prev = 24;
					context$2$0.t1 = context$2$0["catch"](9);
					_didIteratorError = true;
					_iteratorError = context$2$0.t1;

				case 28:
					context$2$0.prev = 28;
					context$2$0.prev = 29;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 31:
					context$2$0.prev = 31;

					if (!_didIteratorError) {
						context$2$0.next = 34;
						break;
					}

					throw _iteratorError;

				case 34:
					return context$2$0.finish(31);

				case 35:
					return context$2$0.finish(28);

				case 36:
					return context$2$0.abrupt("return", factory.createPrimitive(true));

				case 37:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[9, 24, 28, 36], [29,, 31, 35]]);
	}), 1, "Array.prototype.every"));
};

module.exports = exports["default"];

},{"../../iterators/":287,"../../utils/contracts":311,"../../utils/native":313,"./array-helpers":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],127:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _iterators = require("../../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("filter", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(callback, thisArg) {
		var arr, length, newArray, index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, passed;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Array.prototype.filter");

					arr = (0, _utilsNative.toObject)(env, this.node);
					context$2$0.next = 4;
					return (0, _utilsNative.toLength)(arr);

				case 4:
					length = context$2$0.sent;

					(0, _utilsContracts.assertIsFunction)(callback, arr);

					newArray = factory.createArray();
					index = 0;
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 11;
					_iterator = _getIterator(_iterators2["default"].forward(arr, 0, length));

				case 13:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						context$2$0.next = 23;
						break;
					}

					entry = _step.value;
					context$2$0.next = 17;
					return (0, _arrayHelpers.executeCallback)(env, callback, entry, thisArg, arr);

				case 17:
					context$2$0.t0 = context$2$0.sent;
					passed = (0, _utilsNative.toBoolean)(context$2$0.t0);

					if (passed) {
						newArray.setIndex(index++, entry.value);
					}

				case 20:
					_iteratorNormalCompletion = true;
					context$2$0.next = 13;
					break;

				case 23:
					context$2$0.next = 29;
					break;

				case 25:
					context$2$0.prev = 25;
					context$2$0.t1 = context$2$0["catch"](11);
					_didIteratorError = true;
					_iteratorError = context$2$0.t1;

				case 29:
					context$2$0.prev = 29;
					context$2$0.prev = 30;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 32:
					context$2$0.prev = 32;

					if (!_didIteratorError) {
						context$2$0.next = 35;
						break;
					}

					throw _iteratorError;

				case 35:
					return context$2$0.finish(32);

				case 36:
					return context$2$0.finish(29);

				case 37:
					return context$2$0.abrupt("return", newArray);

				case 38:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[11, 25, 29, 37], [30,, 32, 36]]);
	}), 1, "Array.prototype.filter"));
};

module.exports = exports["default"];

},{"../../iterators/":287,"../../utils/contracts":311,"../../utils/native":313,"./array-helpers":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],128:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _iterators = require("../../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("forEach", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(callback, thisArg) {
		var arr, length, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					arr = (0, _utilsNative.toObject)(env, this.node);
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(arr);

				case 3:
					length = context$2$0.sent;

					(0, _utilsContracts.assertIsFunction)(callback, arr);

					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 8;
					_iterator = _getIterator(_iterators2["default"].forward(arr, 0, length));

				case 10:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						context$2$0.next = 17;
						break;
					}

					entry = _step.value;
					context$2$0.next = 14;
					return (0, _arrayHelpers.executeCallback)(env, callback, entry, thisArg, arr);

				case 14:
					_iteratorNormalCompletion = true;
					context$2$0.next = 10;
					break;

				case 17:
					context$2$0.next = 23;
					break;

				case 19:
					context$2$0.prev = 19;
					context$2$0.t0 = context$2$0["catch"](8);
					_didIteratorError = true;
					_iteratorError = context$2$0.t0;

				case 23:
					context$2$0.prev = 23;
					context$2$0.prev = 24;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 26:
					context$2$0.prev = 26;

					if (!_didIteratorError) {
						context$2$0.next = 29;
						break;
					}

					throw _iteratorError;

				case 29:
					return context$2$0.finish(26);

				case 30:
					return context$2$0.finish(23);

				case 31:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[8, 19, 23, 31], [24,, 26, 30]]);
	}), 1, "Array.prototype.forEach"));
};

module.exports = exports["default"];

},{"../../iterators/":287,"../../utils/contracts":311,"../../utils/native":313,"./array-helpers":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],129:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../../types/primitive-type");

var _utilsNative = require("../../utils/native");

var _iterators = require("../../iterators");

var _iterators2 = _interopRequireDefault(_iterators);

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("indexOf", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(searchElement, fromIndex) {
		var length,
		    index,
		    notFound,
		    _iteratorNormalCompletion,
		    _didIteratorError,
		    _iteratorError,
		    _iterator,
		    _step,
		    _step$value,
		    key,
		    value,
		    args$2$0 = arguments;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					searchElement = searchElement || _typesPrimitiveType.UNDEFINED;
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(this.node);

				case 3:
					length = context$2$0.sent;

					if (!(args$2$0.length === 1)) {
						context$2$0.next = 8;
						break;
					}

					context$2$0.t0 = 0;
					context$2$0.next = 11;
					break;

				case 8:
					context$2$0.next = 10;
					return (0, _utilsNative.toInteger)(fromIndex);

				case 10:
					context$2$0.t0 = context$2$0.sent;

				case 11:
					index = context$2$0.t0;
					notFound = factory.createPrimitive(-1);

					if (!(length === 0 || index >= length)) {
						context$2$0.next = 15;
						break;
					}

					return context$2$0.abrupt("return", notFound);

				case 15:

					index = (0, _arrayHelpers.getStartIndex)(index, length);

					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 19;
					_iterator = _getIterator(_iterators2["default"].forward(this.node, index, length));

				case 21:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						context$2$0.next = 30;
						break;
					}

					_step$value = _step.value;
					key = _step$value.key;
					value = _step$value.value;

					if (!env.ops.strictEquals(searchElement, value || _typesPrimitiveType.UNDEFINED)) {
						context$2$0.next = 27;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(key));

				case 27:
					_iteratorNormalCompletion = true;
					context$2$0.next = 21;
					break;

				case 30:
					context$2$0.next = 36;
					break;

				case 32:
					context$2$0.prev = 32;
					context$2$0.t1 = context$2$0["catch"](19);
					_didIteratorError = true;
					_iteratorError = context$2$0.t1;

				case 36:
					context$2$0.prev = 36;
					context$2$0.prev = 37;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 39:
					context$2$0.prev = 39;

					if (!_didIteratorError) {
						context$2$0.next = 42;
						break;
					}

					throw _iteratorError;

				case 42:
					return context$2$0.finish(39);

				case 43:
					return context$2$0.finish(36);

				case 44:
					return context$2$0.abrupt("return", notFound);

				case 45:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[19, 32, 36, 44], [37,, 39, 43]]);
	}), 1, "Array.prototype.indexOf"));
};

module.exports = exports["default"];

},{"../../iterators":287,"../../types/primitive-type":303,"../../utils/native":313,"./array-helpers":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],130:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function ($target, env, factory) {
	var proto = $target.getValue("prototype");
	$target.define("isArray", factory.createBuiltInFunction(function (obj) {
		return factory.createPrimitive(!!(obj && (obj.className === "Array" || obj === proto)));
	}, 1, "Array.isArray"));
};

module.exports = exports["default"];

},{}],131:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _typesPrimitiveType = require("../../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	$target.define("join", factory.createBuiltInFunction(_regeneratorRuntime.mark(function join(separator) {
		var length,
		    stringValues,
		    stringValue,
		    i,
		    args$2$0 = arguments;
		return _regeneratorRuntime.wrap(function join$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toLength)(this.node);

				case 2:
					length = context$2$0.sent;

					if (!(args$2$0.length === 0 || separator === _typesPrimitiveType.UNDEFINED)) {
						context$2$0.next = 7;
						break;
					}

					context$2$0.t0 = ",";
					context$2$0.next = 10;
					break;

				case 7:
					context$2$0.next = 9;
					return (0, _utilsNative.toString)(separator);

				case 9:
					context$2$0.t0 = context$2$0.sent;

				case 10:
					separator = context$2$0.t0;
					stringValues = [];
					stringValue = undefined;
					i = 0;

				case 14:
					if (!(i < length)) {
						context$2$0.next = 29;
						break;
					}

					stringValue = "";

					if (!this.node.has(i)) {
						context$2$0.next = 25;
						break;
					}

					stringValue = this.node.getValue(i);

					if (!(0, _utilsContracts.isNullOrUndefined)(stringValue)) {
						context$2$0.next = 22;
						break;
					}

					stringValue = "";
					context$2$0.next = 25;
					break;

				case 22:
					context$2$0.next = 24;
					return (0, _utilsNative.toString)(stringValue);

				case 24:
					stringValue = context$2$0.sent;

				case 25:

					stringValues.push(stringValue);

				case 26:
					i++;
					context$2$0.next = 14;
					break;

				case 29:
					return context$2$0.abrupt("return", factory.createPrimitive(stringValues.join(separator)));

				case 30:
				case "end":
					return context$2$0.stop();
			}
		}, join, this);
	}), 1, "Array.prototype.join"));
};

module.exports = exports["default"];

},{"../../types/primitive-type":303,"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],132:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../../types/primitive-type");

var _utilsNative = require("../../utils/native");

var _iterators = require("../../iterators");

var _iterators2 = _interopRequireDefault(_iterators);

exports["default"] = function ($target, env, factory) {
	$target.define("lastIndexOf", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(searchElement, fromIndex) {
		var length,
		    index,
		    _iteratorNormalCompletion,
		    _didIteratorError,
		    _iteratorError,
		    _iterator,
		    _step,
		    _step$value,
		    key,
		    value,
		    args$2$0 = arguments;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					searchElement = searchElement || _typesPrimitiveType.UNDEFINED;
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(this.node);

				case 3:
					length = context$2$0.sent;

					if (!(args$2$0.length === 1)) {
						context$2$0.next = 8;
						break;
					}

					context$2$0.t0 = length - 1;
					context$2$0.next = 11;
					break;

				case 8:
					context$2$0.next = 10;
					return (0, _utilsNative.toInteger)(fromIndex);

				case 10:
					context$2$0.t0 = context$2$0.sent;

				case 11:
					index = context$2$0.t0;

					if (index < 0) {
						index = length - Math.abs(index);
					}

					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 16;
					_iterator = _getIterator(_iterators2["default"].reverse(this.node, index));

				case 18:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						context$2$0.next = 27;
						break;
					}

					_step$value = _step.value;
					key = _step$value.key;
					value = _step$value.value;

					if (!env.ops.strictEquals(searchElement, value || _typesPrimitiveType.UNDEFINED)) {
						context$2$0.next = 24;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(key));

				case 24:
					_iteratorNormalCompletion = true;
					context$2$0.next = 18;
					break;

				case 27:
					context$2$0.next = 33;
					break;

				case 29:
					context$2$0.prev = 29;
					context$2$0.t1 = context$2$0["catch"](16);
					_didIteratorError = true;
					_iteratorError = context$2$0.t1;

				case 33:
					context$2$0.prev = 33;
					context$2$0.prev = 34;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 36:
					context$2$0.prev = 36;

					if (!_didIteratorError) {
						context$2$0.next = 39;
						break;
					}

					throw _iteratorError;

				case 39:
					return context$2$0.finish(36);

				case 40:
					return context$2$0.finish(33);

				case 41:
					return context$2$0.abrupt("return", factory.createPrimitive(-1));

				case 42:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[16, 29, 33, 41], [34,, 36, 40]]);
	}), 1, "Array.prototype.lastIndexOf"));
};

module.exports = exports["default"];

},{"../../iterators":287,"../../types/primitive-type":303,"../../utils/native":313,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],133:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _iterators = require("../../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("map", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(callback, thisArg) {
		var arr, length, newArray, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, value;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					arr = (0, _utilsNative.toObject)(env, this.node);
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(arr);

				case 3:
					length = context$2$0.sent;

					(0, _utilsContracts.assertIsNotNullOrUndefined)(arr, "Array.prototype.map");
					(0, _utilsContracts.assertIsFunction)(callback, arr);

					newArray = factory.createArray();

					newArray.setValue("length", factory.createPrimitive(length));

					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 11;
					_iterator = _getIterator(_iterators2["default"].forward(arr, 0, length));

				case 13:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						context$2$0.next = 22;
						break;
					}

					entry = _step.value;
					context$2$0.next = 17;
					return (0, _arrayHelpers.executeCallback)(env, callback, entry, thisArg, arr);

				case 17:
					value = context$2$0.sent;

					newArray.setIndex(entry.key, value);

				case 19:
					_iteratorNormalCompletion = true;
					context$2$0.next = 13;
					break;

				case 22:
					context$2$0.next = 28;
					break;

				case 24:
					context$2$0.prev = 24;
					context$2$0.t0 = context$2$0["catch"](11);
					_didIteratorError = true;
					_iteratorError = context$2$0.t0;

				case 28:
					context$2$0.prev = 28;
					context$2$0.prev = 29;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 31:
					context$2$0.prev = 31;

					if (!_didIteratorError) {
						context$2$0.next = 34;
						break;
					}

					throw _iteratorError;

				case 34:
					return context$2$0.finish(31);

				case 35:
					return context$2$0.finish(28);

				case 36:
					return context$2$0.abrupt("return", newArray);

				case 37:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[11, 24, 28, 36], [29,, 31, 35]]);
	}), 1, "Array.prototype.map"));
};

module.exports = exports["default"];

},{"../../iterators/":287,"../../utils/contracts":311,"../../utils/native":313,"./array-helpers":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],134:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _typesPrimitiveType = require("../../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	$target.define("pop", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		var obj, i;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					obj = undefined;
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(this.node);

				case 3:
					i = context$2$0.sent;

					if (i > 0) {
						i--;

						if (this.node.has(i)) {
							obj = this.node.getValue(i);
							this.node.deleteProperty(i, true);
						}
					}

					this.node.setValue("length", factory.createPrimitive(i));
					return context$2$0.abrupt("return", obj || _typesPrimitiveType.UNDEFINED);

				case 7:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "Array.prototype.pop"));
};

module.exports = exports["default"];

},{"../../types/primitive-type":303,"../../utils/native":313,"babel-runtime/regenerator":26}],135:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("push", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
			items[_key] = arguments[_key];
		}

		var start, i, _length, newLength;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toLength)(this.node);

				case 2:
					start = context$2$0.sent;
					i = 0;

					for (_length = items.length; i < _length; i++) {
						this.node.setValue(start + i, items[i]);
					}

					newLength = factory.createPrimitive(start + i);

					this.node.setValue("length", newLength);
					return context$2$0.abrupt("return", newLength);

				case 8:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Array.prototype.push"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"babel-runtime/regenerator":26}],136:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _iterators = require("../../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("reduceRight", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(callback, initialValue) {
		var length,
		    arr,
		    accumulator,
		    hasInitialValue,
		    hasElements,
		    _iteratorNormalCompletion,
		    _didIteratorError,
		    _iteratorError,
		    _iterator,
		    _step,
		    entry,
		    args$2$0 = arguments;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toLength)(this.node);

				case 2:
					length = context$2$0.sent;

					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Array.prototype.reduceRight");
					arr = (0, _utilsNative.toObject)(env, this.node);

					(0, _utilsContracts.assertIsFunction)(callback, arr);

					accumulator = undefined;
					hasInitialValue = false;

					if (args$2$0.length > 1) {
						accumulator = initialValue;
						hasInitialValue = true;
					}

					hasElements = false;

					if (!(length > 0)) {
						context$2$0.next = 43;
						break;
					}

					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 14;
					_iterator = _getIterator(_iterators2["default"].reverse(arr, length - 1));

				case 16:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						context$2$0.next = 29;
						break;
					}

					entry = _step.value;

					if (hasElements) {
						context$2$0.next = 23;
						break;
					}

					hasElements = true;

					if (hasInitialValue) {
						context$2$0.next = 23;
						break;
					}

					accumulator = entry.value;
					return context$2$0.abrupt("continue", 26);

				case 23:
					context$2$0.next = 25;
					return (0, _arrayHelpers.executeAccumulator)(env, callback, accumulator, entry, arr);

				case 25:
					accumulator = context$2$0.sent;

				case 26:
					_iteratorNormalCompletion = true;
					context$2$0.next = 16;
					break;

				case 29:
					context$2$0.next = 35;
					break;

				case 31:
					context$2$0.prev = 31;
					context$2$0.t0 = context$2$0["catch"](14);
					_didIteratorError = true;
					_iteratorError = context$2$0.t0;

				case 35:
					context$2$0.prev = 35;
					context$2$0.prev = 36;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 38:
					context$2$0.prev = 38;

					if (!_didIteratorError) {
						context$2$0.next = 41;
						break;
					}

					throw _iteratorError;

				case 41:
					return context$2$0.finish(38);

				case 42:
					return context$2$0.finish(35);

				case 43:
					if (!(!hasElements && !hasInitialValue)) {
						context$2$0.next = 45;
						break;
					}

					throw TypeError("Reduce of empty array with no initial value");

				case 45:
					return context$2$0.abrupt("return", accumulator);

				case 46:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[14, 31, 35, 43], [36,, 38, 42]]);
	}), 1, "Array.prototype.reduceRight"));
};

module.exports = exports["default"];

},{"../../iterators/":287,"../../utils/contracts":311,"../../utils/native":313,"./array-helpers":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],137:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _iterators = require("../../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("reduce", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(callback, initialValue) {
		var arr,
		    length,
		    hasInitialValue,
		    value,
		    hasElements,
		    _iteratorNormalCompletion,
		    _didIteratorError,
		    _iteratorError,
		    _iterator,
		    _step,
		    entry,
		    args$2$0 = arguments;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Array.prototype.reduce");
					arr = (0, _utilsNative.toObject)(env, this.node);
					context$2$0.next = 4;
					return (0, _utilsNative.toLength)(arr);

				case 4:
					length = context$2$0.sent;

					(0, _utilsContracts.assertIsFunction)(callback, arr);

					hasInitialValue = false;
					value = undefined;

					if (args$2$0.length > 1) {
						value = initialValue;
						hasInitialValue = true;
					}

					hasElements = false;

					if (!(length > 0)) {
						context$2$0.next = 43;
						break;
					}

					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 14;
					_iterator = _getIterator(_iterators2["default"].forward(arr, 0, length));

				case 16:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						context$2$0.next = 29;
						break;
					}

					entry = _step.value;

					if (hasElements) {
						context$2$0.next = 23;
						break;
					}

					hasElements = true;

					if (hasInitialValue) {
						context$2$0.next = 23;
						break;
					}

					value = entry.value;
					return context$2$0.abrupt("continue", 26);

				case 23:
					context$2$0.next = 25;
					return (0, _arrayHelpers.executeAccumulator)(env, callback, value, entry, arr);

				case 25:
					value = context$2$0.sent;

				case 26:
					_iteratorNormalCompletion = true;
					context$2$0.next = 16;
					break;

				case 29:
					context$2$0.next = 35;
					break;

				case 31:
					context$2$0.prev = 31;
					context$2$0.t0 = context$2$0["catch"](14);
					_didIteratorError = true;
					_iteratorError = context$2$0.t0;

				case 35:
					context$2$0.prev = 35;
					context$2$0.prev = 36;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 38:
					context$2$0.prev = 38;

					if (!_didIteratorError) {
						context$2$0.next = 41;
						break;
					}

					throw _iteratorError;

				case 41:
					return context$2$0.finish(38);

				case 42:
					return context$2$0.finish(35);

				case 43:
					if (!(!hasElements && !hasInitialValue)) {
						context$2$0.next = 45;
						break;
					}

					throw TypeError("Reduce of empty array with no initial value");

				case 45:
					return context$2$0.abrupt("return", value);

				case 46:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[14, 31, 35, 43], [36,, 38, 42]]);
	}), 1, "Array.prototype.reduce"));
};

module.exports = exports["default"];

},{"../../iterators/":287,"../../utils/contracts":311,"../../utils/native":313,"./array-helpers":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],138:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("reverse", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		var length, middle, lower, upper, upperValue, lowerValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toLength)(this.node);

				case 2:
					length = context$2$0.sent;
					middle = Math.floor(length / 2);
					lower = 0;
					upper = undefined, upperValue = undefined, lowerValue = undefined;

					while (lower !== middle) {
						upper = length - lower - 1;
						lowerValue = this.node.has(lower) && this.node.getValue(lower);
						upperValue = this.node.has(upper) && this.node.getValue(upper);

						if (upperValue) {
							this.node.setValue(lower, upperValue);
						}

						if (lowerValue) {
							this.node.setValue(upper, lowerValue);
						}

						if (upperValue && !lowerValue) {
							this.node.deleteProperty(upper);
						} else if (lowerValue && !upperValue) {
							this.node.deleteProperty(lower);
						}

						lower++;
					}

					return context$2$0.abrupt("return", this.node);

				case 8:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "Array.prototype.reverse"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"babel-runtime/regenerator":26}],139:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _typesPrimitiveType = require("../../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	$target.define("shift", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		var obj, length, i;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					obj = undefined;
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(this.node);

				case 3:
					length = context$2$0.sent;
					i = 0;

					if (length > 0) {
						if (this.node.has(i)) {
							obj = this.node.getValue(i);
							this.node.deleteProperty(i);
						}

						while (++i < length) {
							if (this.node.has(i)) {
								this.node.setValue(i - 1, this.node.getValue(i));
							} else {
								this.node.deleteProperty(i);
							}
						}

						this.node.deleteProperty(length - 1);
					}

					this.node.setValue("length", factory.createPrimitive(length === 0 ? 0 : --length));
					return context$2$0.abrupt("return", obj || _typesPrimitiveType.UNDEFINED);

				case 8:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "Array.prototype.shift"));
};

module.exports = exports["default"];

},{"../../types/primitive-type":303,"../../utils/native":313,"babel-runtime/regenerator":26}],140:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _arrayHelpers = require("./array-helpers");

var _iterators = require("../../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

exports["default"] = function ($target, env, factory) {
	$target.define("slice", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(begin, end) {
		var source, length, arr, newLength, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, key, value, index;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					source = this.node;
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(this.node);

				case 3:
					length = context$2$0.sent;

					if (!begin) {
						context$2$0.next = 10;
						break;
					}

					context$2$0.next = 7;
					return (0, _utilsNative.toInteger)(begin);

				case 7:
					context$2$0.t0 = context$2$0.sent;
					context$2$0.next = 11;
					break;

				case 10:
					context$2$0.t0 = 0;

				case 11:
					begin = context$2$0.t0;

					if (!(!end || end.type === "undefined")) {
						context$2$0.next = 16;
						break;
					}

					end = length;
					context$2$0.next = 19;
					break;

				case 16:
					context$2$0.next = 18;
					return (0, _utilsNative.toInteger)(end);

				case 18:
					end = context$2$0.sent;

				case 19:

					begin = (0, _arrayHelpers.getStartIndex)(begin, length);
					end = (0, _arrayHelpers.getEndIndex)(end, length);

					arr = factory.createArray();
					newLength = 0;
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 26;

					for (_iterator = _getIterator(_iterators2["default"].forward(source, begin, end)); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						_step$value = _step.value;
						key = _step$value.key;
						value = _step$value.value;
						index = key - begin;

						arr.setIndex(index, value);
						newLength = ++index;
					}

					context$2$0.next = 34;
					break;

				case 30:
					context$2$0.prev = 30;
					context$2$0.t1 = context$2$0["catch"](26);
					_didIteratorError = true;
					_iteratorError = context$2$0.t1;

				case 34:
					context$2$0.prev = 34;
					context$2$0.prev = 35;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 37:
					context$2$0.prev = 37;

					if (!_didIteratorError) {
						context$2$0.next = 40;
						break;
					}

					throw _iteratorError;

				case 40:
					return context$2$0.finish(37);

				case 41:
					return context$2$0.finish(34);

				case 42:
					arr.setValue("length", factory.createPrimitive(newLength));
					return context$2$0.abrupt("return", arr);

				case 44:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[26, 30, 34, 42], [35,, 37, 41]]);
	}), 2, "Array.prototype.slice"));
};

module.exports = exports["default"];

},{"../../iterators/":287,"../../utils/native":313,"./array-helpers":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],141:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _iterators = require("../../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("some", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(callback, thisArg) {
		var arr, length, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, passed;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Array.prototype.some");
					arr = (0, _utilsNative.toObject)(env, this.node);
					context$2$0.next = 4;
					return (0, _utilsNative.toLength)(this.node);

				case 4:
					length = context$2$0.sent;

					(0, _utilsContracts.assertIsFunction)(callback, this.node);

					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					context$2$0.prev = 9;
					_iterator = _getIterator(_iterators2["default"].forward(arr, 0, length));

				case 11:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						context$2$0.next = 22;
						break;
					}

					entry = _step.value;
					context$2$0.next = 15;
					return (0, _arrayHelpers.executeCallback)(env, callback, entry, thisArg, arr);

				case 15:
					context$2$0.t0 = context$2$0.sent;
					passed = (0, _utilsNative.toBoolean)(context$2$0.t0);

					if (!passed) {
						context$2$0.next = 19;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(true));

				case 19:
					_iteratorNormalCompletion = true;
					context$2$0.next = 11;
					break;

				case 22:
					context$2$0.next = 28;
					break;

				case 24:
					context$2$0.prev = 24;
					context$2$0.t1 = context$2$0["catch"](9);
					_didIteratorError = true;
					_iteratorError = context$2$0.t1;

				case 28:
					context$2$0.prev = 28;
					context$2$0.prev = 29;

					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}

				case 31:
					context$2$0.prev = 31;

					if (!_didIteratorError) {
						context$2$0.next = 34;
						break;
					}

					throw _iteratorError;

				case 34:
					return context$2$0.finish(31);

				case 35:
					return context$2$0.finish(28);

				case 36:
					return context$2$0.abrupt("return", factory.createPrimitive(false));

				case 37:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[9, 24, 28, 36], [29,, 31, 35]]);
	}), 1, "Array.prototype.some"));
};

module.exports = exports["default"];

},{"../../iterators/":287,"../../utils/contracts":311,"../../utils/native":313,"./array-helpers":124,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],142:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _utilsAsync = require("../../utils/async");

var _typesPrimitiveType = require("../../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	function defaultComparer(a, b) {
		a = (0, _utilsAsync.exhaust)((0, _utilsNative.toString)(a));
		b = (0, _utilsAsync.exhaust)((0, _utilsNative.toString)(b));

		if (a < b) {
			return -1;
		}

		if (a > b) {
			return 1;
		}

		return 0;
	}

	function getComparer(comparerFunc) {
		if ((0, _utilsContracts.isNullOrUndefined)(comparerFunc)) {
			return defaultComparer;
		}

		return function (a, b) {
			var result = (0, _utilsAsync.exhaust)(comparerFunc.call(_typesPrimitiveType.UNDEFINED, [a, b]));
			if (result) {
				return result.toNative();
			}

			return undefined;
		};
	}

	$target.define("sort", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(compareFunc) {
		var arr, length, i, comparer, sortedArray;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					arr = this.node;
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(arr);

				case 3:
					length = context$2$0.sent;
					i = 0;
					comparer = getComparer(compareFunc);
					context$2$0.next = 8;
					return (0, _utilsNative.toArray)(arr, length);

				case 8:
					context$2$0.t0 = function (el) {
						return el.isPrimitive && el.value === undefined ? undefined : el;
					};

					context$2$0.t1 = comparer;
					sortedArray = context$2$0.sent.
					// undefined positions are handled by the underlying sort algorithm, so replace them with the raw primitive value
					map(context$2$0.t0).sort(context$2$0.t1);

					while (i < length) {
						if (i in sortedArray) {
							arr.setValue(i, sortedArray[i] || _typesPrimitiveType.UNDEFINED);
						} else {
							arr.deleteProperty(i, false);
						}

						i++;
					}

					return context$2$0.abrupt("return", arr);

				case 13:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Array.prototype.sort"));
};

module.exports = exports["default"];

// to array, run the wrapped comparer, then re-assign indexes

},{"../../types/primitive-type":303,"../../utils/async":310,"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],143:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("splice", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(start, deleteCount) {
		for (var _len = arguments.length, elements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			elements[_key - 2] = arguments[_key];
		}

		var length, removed, k, newCount, i;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toLength)(this.node);

				case 2:
					length = context$2$0.sent;
					context$2$0.next = 5;
					return (0, _utilsNative.toInteger)(start);

				case 5:
					start = context$2$0.sent;

					if (start < 0) {
						start = Math.max(length + start, 0);
					} else {
						start = Math.min(start, length);
					}

					context$2$0.next = 9;
					return (0, _utilsNative.toInteger)(deleteCount);

				case 9:
					deleteCount = context$2$0.sent;

					if (deleteCount < 0) {
						deleteCount = 0;
					} else {
						deleteCount = Math.min(Math.max(deleteCount, 0), length - start);
					}

					removed = factory.createArray();
					k = 0;

					while (k < deleteCount) {
						if (this.node.has(k + start)) {
							removed.setIndex(k, this.node.getValue(k + start));
						}

						k++;
					}

					newCount = elements.length;

					if (newCount < deleteCount) {
						k = start;

						while (k < length - deleteCount) {
							if (this.node.has(k + deleteCount)) {
								this.node.setValue(k + newCount, this.node.getValue(k + deleteCount));
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
							if (this.node.has(k + deleteCount - 1)) {
								this.node.setValue(k + newCount - 1, this.node.getValue(k + deleteCount - 1));
							} else {
								this.node.deleteProperty(k + newCount - 1);
							}

							k--;
						}
					}

					k = start;
					for (i = 0; i < newCount; i++) {
						this.node.setValue(k, elements[i]);
						k++;
					}

					this.node.setValue("length", factory.createPrimitive(length - deleteCount + newCount));
					return context$2$0.abrupt("return", removed);

				case 20:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Array.prototype.splice"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"babel-runtime/regenerator":26}],144:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("toLocaleString", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		var length, arr, i, current, func;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toLength)(this.node);

				case 2:
					length = context$2$0.sent;
					arr = new Array(length);
					i = 0;
					current = undefined;

				case 6:
					if (!(i < length)) {
						context$2$0.next = 23;
						break;
					}

					if (!this.node.has(i)) {
						context$2$0.next = 20;
						break;
					}

					current = this.node.getValue(i);

					if (!(0, _utilsContracts.isNullOrUndefined)(current)) {
						context$2$0.next = 13;
						break;
					}

					arr[i] = "";
					context$2$0.next = 20;
					break;

				case 13:
					func = current.getValue("toLocaleString") || current.getValue("toString");
					context$2$0.next = 16;
					return func.call(current);

				case 16:
					context$2$0.t0 = context$2$0.sent;
					context$2$0.next = 19;
					return (0, _utilsNative.toString)(context$2$0.t0);

				case 19:
					arr[i] = context$2$0.sent;

				case 20:

					i++;
					context$2$0.next = 6;
					break;

				case 23:
					return context$2$0.abrupt("return", factory.createPrimitive(arr.join()));

				case 24:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "Array.prototype.toLocaleString"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],145:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("toString", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		var func;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Array.prototype.toString");
					func = this.node.getValue("join");

					if (!func || !(0, _utilsContracts.isFunction)(func)) {
						func = env.global.getValue("Object").getValue("toString");
					}

					context$2$0.next = 5;
					return func.call(this.node);

				case 5:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 6:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "Array.prototype.toString"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"babel-runtime/regenerator":26}],146:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("unshift", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
			items[_key] = arguments[_key];
		}

		var length, argCount, i, toIndex, fromIndex, newLength;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toLength)(this.node);

				case 2:
					length = context$2$0.sent;
					argCount = items.length;
					i = length;
					toIndex = undefined, fromIndex = undefined;

					while (i > 0) {
						fromIndex = i - 1;
						toIndex = i + argCount - 1;

						if (this.node.has(fromIndex)) {
							this.node.setValue(toIndex, this.node.getValue(fromIndex));
						} else {
							this.node.deleteProperty(toIndex, true);
						}

						i--;
					}

					for (i = 0; i < argCount; i++) {
						this.node.setValue(i, items[i]);
					}

					newLength = factory.createPrimitive(argCount + length);

					this.node.setValue("length", newLength);
					return context$2$0.abrupt("return", newLength);

				case 11:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Array.prototype.unshift"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"babel-runtime/regenerator":26}],147:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _arrayIsArray = require("./array.is-array");

var _arrayIsArray2 = _interopRequireDefault(_arrayIsArray);

var _arrayConcat = require("./array.concat");

var _arrayConcat2 = _interopRequireDefault(_arrayConcat);

var _arrayEvery = require("./array.every");

var _arrayEvery2 = _interopRequireDefault(_arrayEvery);

var _arrayFilter = require("./array.filter");

var _arrayFilter2 = _interopRequireDefault(_arrayFilter);

var _arrayForEach = require("./array.for-each");

var _arrayForEach2 = _interopRequireDefault(_arrayForEach);

var _arrayIndexOf = require("./array.index-of");

var _arrayIndexOf2 = _interopRequireDefault(_arrayIndexOf);

var _arrayJoin = require("./array.join");

var _arrayJoin2 = _interopRequireDefault(_arrayJoin);

var _arrayLastIndexOf = require("./array.last-index-of");

var _arrayLastIndexOf2 = _interopRequireDefault(_arrayLastIndexOf);

var _arrayMap = require("./array.map");

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _arrayPop = require("./array.pop");

var _arrayPop2 = _interopRequireDefault(_arrayPop);

var _arrayPush = require("./array.push");

var _arrayPush2 = _interopRequireDefault(_arrayPush);

var _arrayReduce = require("./array.reduce");

var _arrayReduce2 = _interopRequireDefault(_arrayReduce);

var _arrayReduceRight = require("./array.reduce-right");

var _arrayReduceRight2 = _interopRequireDefault(_arrayReduceRight);

var _arrayReverse = require("./array.reverse");

var _arrayReverse2 = _interopRequireDefault(_arrayReverse);

var _arrayShift = require("./array.shift");

var _arrayShift2 = _interopRequireDefault(_arrayShift);

var _arraySlice = require("./array.slice");

var _arraySlice2 = _interopRequireDefault(_arraySlice);

var _arraySome = require("./array.some");

var _arraySome2 = _interopRequireDefault(_arraySome);

var _arraySort = require("./array.sort");

var _arraySort2 = _interopRequireDefault(_arraySort);

var _arraySplice = require("./array.splice");

var _arraySplice2 = _interopRequireDefault(_arraySplice);

var _arrayToLocaleString = require("./array.to-locale-string");

var _arrayToLocaleString2 = _interopRequireDefault(_arrayToLocaleString);

var _arrayToString = require("./array.to-string");

var _arrayToString2 = _interopRequireDefault(_arrayToString);

var _arrayUnshift = require("./array.unshift");

var _arrayUnshift2 = _interopRequireDefault(_arrayUnshift);

exports["default"] = function (env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var proto = objectFactory.createObject();
	proto.className = "Array";
	proto.define("length", objectFactory.createPrimitive(0), { configurable: false, enumerable: false, writable: true });

	var arrayClass = objectFactory.createFunction(function (length) {
		if (arguments.length === 1 && length.type === "number") {
			(0, _utilsContracts.assertIsValidArrayLength)(arguments[0].toNative());

			var newArray = objectFactory.createArray();
			newArray.setValue("length", length);
			return newArray;
		}

		return objectFactory.createArray(arguments);
	}, proto, { configurable: false, enumerable: false, writable: false });

	(0, _arrayIsArray2["default"])(arrayClass, env, objectFactory);
	(0, _arrayPush2["default"])(proto, env, objectFactory);
	(0, _arrayPop2["default"])(proto, env, objectFactory);
	(0, _arrayShift2["default"])(proto, env, objectFactory);
	(0, _arrayUnshift2["default"])(proto, env, objectFactory);
	(0, _arraySlice2["default"])(proto, env, objectFactory);
	(0, _arraySplice2["default"])(proto, env, objectFactory);
	(0, _arrayConcat2["default"])(proto, env, objectFactory);
	(0, _arrayJoin2["default"])(proto, env, objectFactory);
	(0, _arrayIndexOf2["default"])(proto, env, objectFactory);
	(0, _arrayLastIndexOf2["default"])(proto, env, objectFactory);
	(0, _arrayForEach2["default"])(proto, env, objectFactory);
	(0, _arrayMap2["default"])(proto, env, objectFactory);
	(0, _arrayFilter2["default"])(proto, env, objectFactory);
	(0, _arrayEvery2["default"])(proto, env, objectFactory);
	(0, _arraySome2["default"])(proto, env, objectFactory);
	(0, _arrayReduce2["default"])(proto, env, objectFactory);
	(0, _arrayReduceRight2["default"])(proto, env, objectFactory);
	(0, _arrayReverse2["default"])(proto, env, objectFactory);
	(0, _arraySort2["default"])(proto, env, objectFactory);
	(0, _arrayToLocaleString2["default"])(proto, env, objectFactory);
	(0, _arrayToString2["default"])(proto, env, objectFactory);

	globalObject.define("Array", arrayClass);
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"./array.concat":125,"./array.every":126,"./array.filter":127,"./array.for-each":128,"./array.index-of":129,"./array.is-array":130,"./array.join":131,"./array.last-index-of":132,"./array.map":133,"./array.pop":134,"./array.push":135,"./array.reduce":137,"./array.reduce-right":136,"./array.reverse":138,"./array.shift":139,"./array.slice":140,"./array.some":141,"./array.sort":142,"./array.splice":143,"./array.to-locale-string":144,"./array.to-string":145,"./array.unshift":146,"babel-runtime/helpers/interop-require-default":24}],148:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("toString", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsNotGeneric)(this.node, "Boolean", "Boolean.prototype.toString");
		return factory.createPrimitive(String(this.node.value));
	}, 0, "Boolean.prototype.toString"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311}],149:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("valueOf", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsNotGeneric)(this.node, "Boolean", "Boolean.prototype.valueOf");
		return factory.createPrimitive(this.node.value);
	}, 0, "Boolean.prototype.valueOf"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311}],150:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = booleanApi;

var _utilsNative = require("../../utils/native");

var _booleanToString = require("./boolean.to-string");

var _booleanToString2 = _interopRequireDefault(_booleanToString);

var _booleanValueOf = require("./boolean.value-of");

var _booleanValueOf2 = _interopRequireDefault(_booleanValueOf);

function booleanApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var proto = objectFactory.createObject();
	proto.className = "Boolean";
	proto.value = false;

	var booleanClass = objectFactory.createFunction(function (obj) {
		var booleanValue = (0, _utilsNative.toBoolean)(obj);

		// called as new
		if (this.isNew) {
			return (0, _utilsNative.primitiveToObject)(env, booleanValue);
		}

		return objectFactory.create("Boolean", booleanValue);
	}, proto, { configurable: false, enumerable: false, writable: false });

	(0, _booleanToString2["default"])(proto, env, objectFactory);
	(0, _booleanValueOf2["default"])(proto, env, objectFactory);

	globalObject.define("Boolean", booleanClass);
}

module.exports = exports["default"];

},{"../../utils/native":313,"./boolean.to-string":148,"./boolean.value-of":149,"babel-runtime/helpers/interop-require-default":24}],151:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = consoleApi;

var _utilsNative = require("../../utils/native");

var _utilsAsync = require("../../utils/async");

var methods = ["log", "info", "error", "warn"];

function consoleApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;
	var consoleClass = objectFactory.createObject();

	methods.forEach(function (name) {
		consoleClass.define(name, objectFactory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$2$0() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var stringValues;
			return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						context$3$0.next = 2;
						return (0, _utilsAsync.map)(args, _regeneratorRuntime.mark(function callee$3$0(arg) {
							return _regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
								while (1) switch (context$4$0.prev = context$4$0.next) {
									case 0:
										context$4$0.next = 2;
										return (0, _utilsNative.toString)(arg);

									case 2:
										return context$4$0.abrupt("return", context$4$0.sent);

									case 3:
									case "end":
										return context$4$0.stop();
								}
							}, callee$3$0, this);
						}));

					case 2:
						stringValues = context$3$0.sent;

						console[name].apply(console, _toConsumableArray(stringValues));

					case 4:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		}), 1, "console." + name));
	});

	globalObject.define("console", consoleClass);
}

module.exports = exports["default"];

},{"../../utils/async":310,"../../utils/native":313,"babel-runtime/helpers/to-consumable-array":25,"babel-runtime/regenerator":26}],152:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("parse", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value) {
		var stringValue, dateValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toPrimitive)(value, "string");

				case 2:
					stringValue = context$2$0.sent;
					dateValue = Date.parse(stringValue);
					return context$2$0.abrupt("return", factory.createPrimitive(dateValue));

				case 5:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Date.prototype.parse"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"babel-runtime/regenerator":26}],153:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../../utils/async");

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("UTC", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var nativeArgs,
		    args$2$0 = arguments;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					return context$2$0.delegateYield((0, _utilsAsync.map)(args$2$0, _regeneratorRuntime.mark(function callee$2$0(arg) {
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									context$3$0.next = 2;
									return (0, _utilsNative.toPrimitive)(arg, "number");

								case 2:
									return context$3$0.abrupt("return", context$3$0.sent);

								case 3:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, this);
					})), "t0", 1);

				case 1:
					nativeArgs = context$2$0.t0;
					return context$2$0.abrupt("return", factory.createPrimitive(Date.UTC.apply(null, nativeArgs)));

				case 3:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 7, "Date.prototype.UTC"));
};

module.exports = exports["default"];

},{"../../utils/async":310,"../../utils/native":313,"babel-runtime/regenerator":26}],154:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function ($target, env, factory) {
	$target.define("valueOf", factory.createBuiltInFunction(function () {
		return factory.createPrimitive(this.node.value.valueOf());
	}, 0, "Date.prototype.valueOf"));
};

module.exports = exports["default"];

},{}],155:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _bind = require("babel-runtime/helpers/bind")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = dateApi;

var _utilsNative = require("../../utils/native");

var _utilsAsync = require("../../utils/async");

var _dateParse = require("./date.parse");

var _dateParse2 = _interopRequireDefault(_dateParse);

var _dateUtc = require("./date.utc");

var _dateUtc2 = _interopRequireDefault(_dateUtc);

var _dateValueOf = require("./date.value-of");

var _dateValueOf2 = _interopRequireDefault(_dateValueOf);

var staticMethods = ["now"];

var protoMethods = ["getDate", "getDay", "getFullYear", "getHours", "getMilliseconds", "getMinutes", "getMonth", "getMilliseconds", "getMinutes", "getMonth", "getSeconds", "getTime", "getTimezoneOffset", "getUTCDay", "getUTCDate", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCMonth", "getUTCSeconds", "getYear", "toDateString", "toGMTString", "toISOString", "toJSON", "toLocaleString", "toLocaleDateString", "toLocaleTimeString", "toString", "toTimeString", "toUTCString"];

var setters = ["setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear"];

function dateApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var proto = objectFactory.createObject();
	proto.className = "Date";
	proto.value = new Date(0);

	var dateClass = objectFactory.createFunction(_regeneratorRuntime.mark(function callee$1$0(p1, p2, p3, p4, p5, p6, p7) {
		var dateValue,
		    args,
		    primitiveValue,
		    i,
		    args$2$0 = arguments;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					dateValue = undefined, args = undefined;

					if (!(args$2$0.length === 0)) {
						context$2$0.next = 5;
						break;
					}

					args = [];
					context$2$0.next = 22;
					break;

				case 5:
					if (!(args$2$0.length === 1)) {
						context$2$0.next = 20;
						break;
					}

					if (!p1.isPrimitive) {
						context$2$0.next = 10;
						break;
					}

					args = [p1.value];
					context$2$0.next = 18;
					break;

				case 10:
					context$2$0.next = 12;
					return (0, _utilsNative.toPrimitive)(p1);

				case 12:
					primitiveValue = context$2$0.sent;

					if (!(typeof primitiveValue !== "string")) {
						context$2$0.next = 17;
						break;
					}

					context$2$0.next = 16;
					return (0, _utilsNative.toNumber)(p1);

				case 16:
					primitiveValue = context$2$0.sent;

				case 17:

					args = [primitiveValue];

				case 18:
					context$2$0.next = 22;
					break;

				case 20:
					return context$2$0.delegateYield((0, _utilsAsync.map)(args$2$0, _regeneratorRuntime.mark(function callee$2$0(arg) {
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									context$3$0.next = 2;
									return (0, _utilsNative.toPrimitive)(arg, "number");

								case 2:
									return context$3$0.abrupt("return", context$3$0.sent);

								case 3:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, this);
					})), "t0", 21);

				case 21:
					args = context$2$0.t0;

				case 22:
					if (!this.isNew) {
						context$2$0.next = 35;
						break;
					}

					context$2$0.t1 = args.length;
					context$2$0.next = context$2$0.t1 === 0 ? 26 : context$2$0.t1 === 1 ? 28 : 30;
					break;

				case 26:
					dateValue = new Date();
					return context$2$0.abrupt("break", 34);

				case 28:
					dateValue = new Date(args[0]);
					return context$2$0.abrupt("break", 34);

				case 30:
					i = args.length;

					while (i < 7) {
						// default day to 1, all others to 0
						args[i++] = i === 3 ? 1 : 0;
					}

					dateValue = new (_bind.apply(Date, [null].concat(_toConsumableArray(args))))();
					return context$2$0.abrupt("break", 34);

				case 34:
					return context$2$0.abrupt("return", objectFactory.create("Date", dateValue));

				case 35:

					dateValue = Date.apply(undefined, _toConsumableArray(args));
					return context$2$0.abrupt("return", objectFactory.createPrimitive(dateValue));

				case 37:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), proto, { configurable: false, enumerable: false, writable: false });

	(0, _dateParse2["default"])(dateClass, env, objectFactory);
	(0, _dateUtc2["default"])(dateClass, env, objectFactory);
	(0, _dateValueOf2["default"])(proto, env, objectFactory);

	staticMethods.forEach(function (name) {
		dateClass.define(name, (0, _utilsNative.toNativeFunction)(env, Date[name], "Date." + name));
	});

	protoMethods.forEach(function (name) {
		proto.define(name, (0, _utilsNative.toNativeFunction)(env, Date.prototype[name], "Date.prototype." + name));
	});

	setters.forEach(function (name) {
		var marked2$0 = [setter].map(_regeneratorRuntime.mark);

		function setter() {
			var args,
			    args$3$0 = arguments;
			return _regeneratorRuntime.wrap(function setter$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield((0, _utilsAsync.map)(args$3$0, _regeneratorRuntime.mark(function callee$3$0(arg) {
							return _regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
								while (1) switch (context$4$0.prev = context$4$0.next) {
									case 0:
										context$4$0.next = 2;
										return (0, _utilsNative.toPrimitive)(arg);

									case 2:
										return context$4$0.abrupt("return", context$4$0.sent);

									case 3:
									case "end":
										return context$4$0.stop();
								}
							}, callee$3$0, this);
						})), "t0", 1);

					case 1:
						args = context$3$0.t0;

						Date.prototype[name].apply(this.node.value, args);

					case 3:
					case "end":
						return context$3$0.stop();
				}
			}, marked2$0[0], this);
		}

		proto.define(name, objectFactory.createBuiltInFunction(setter, Date.prototype[name].length, "Date.prototype." + name));
	});

	globalObject.define("Date", dateClass);
}

module.exports = exports["default"];

},{"../../utils/async":310,"../../utils/native":313,"./date.parse":152,"./date.utc":153,"./date.value-of":154,"babel-runtime/helpers/bind":18,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/helpers/to-consumable-array":25,"babel-runtime/regenerator":26}],156:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("toString", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		var name, msg;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					name = this.node.getValue("name");
					msg = undefined;

					if (!this.node.has("message")) {
						context$2$0.next = 6;
						break;
					}

					context$2$0.next = 5;
					return (0, _utilsNative.toString)(this.node.getValue("message"));

				case 5:
					msg = context$2$0.sent;

				case 6:
					context$2$0.t0 = name;

					if (!context$2$0.t0) {
						context$2$0.next = 11;
						break;
					}

					context$2$0.next = 10;
					return (0, _utilsNative.toString)(name);

				case 10:
					context$2$0.t0 = context$2$0.sent;

				case 11:
					name = context$2$0.t0;

					if (!(name && msg)) {
						context$2$0.next = 14;
						break;
					}

					return context$2$0.abrupt("return", factory.create("String", name + ": " + msg));

				case 14:
					return context$2$0.abrupt("return", factory.create("String", name || msg));

				case 15:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "Error.prototype.toString"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"babel-runtime/regenerator":26}],157:[function(require,module,exports){
(function (global){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = errorApi;

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _errorToString = require("./error.to-string");

var _errorToString2 = _interopRequireDefault(_errorToString);

var errorTypes = ["TypeError", "ReferenceError", "SyntaxError", "RangeError", "URIError", "EvalError"];

function errorApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var proto = objectFactory.createObject();
	proto.className = "Error";
	proto.define("name", objectFactory.createPrimitive("Error"));
	proto.define("message", objectFactory.createPrimitive(""));

	var errorClass = objectFactory.createFunction(_regeneratorRuntime.mark(function callee$1$0(message) {
		var messageString;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					messageString = undefined;

					if ((0, _utilsContracts.isNullOrUndefined)(message)) {
						context$2$0.next = 5;
						break;
					}

					context$2$0.next = 4;
					return (0, _utilsNative.toString)(message);

				case 4:
					messageString = context$2$0.sent;

				case 5:
					return context$2$0.abrupt("return", objectFactory.create("Error", new Error(messageString)));

				case 6:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), proto, { configurable: false, enumerable: false, writable: false });

	(0, _errorToString2["default"])(proto, env, objectFactory);
	globalObject.define("Error", errorClass);

	errorTypes.forEach(function (errorType) {
		var typeProto = objectFactory.createObject();
		typeProto.define("name", objectFactory.createPrimitive(errorType));

		// add to prototype chain to represent inheritance
		typeProto.setPrototype(proto);

		var errClass = objectFactory.createFunction(_regeneratorRuntime.mark(function callee$2$0(message) {
			var messageString, nativeError;
			return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						context$3$0.next = 2;
						return (0, _utilsNative.toString)(message);

					case 2:
						messageString = context$3$0.sent;
						nativeError = new global[errorType](messageString);
						return context$3$0.abrupt("return", objectFactory.create(errorType, nativeError));

					case 5:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		}), typeProto, { configurable: false, enumerable: false, writable: false });

		globalObject.define(errorType, errClass);
	});
}

module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../utils/contracts":311,"../../utils/native":313,"./error.to-string":156,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],158:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.defineThis = defineThis;

var _typesPrimitiveType = require("../../types/primitive-type");

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

function defineThis(env, fn, thisArg) {
	if (fn.builtIn || fn.isStrict()) {
		return thisArg || _typesPrimitiveType.UNDEFINED;
	}

	if ((0, _utilsContracts.isNullOrUndefined)(thisArg)) {
		return env.global;
	}

	return (0, _utilsNative.toObject)(env, thisArg);
}

},{"../../types/primitive-type":303,"../../utils/contracts":311,"../../utils/native":313}],159:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _functionHelpers = require("./function-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("apply", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(thisArg, argsArray) {
		var args;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (!argsArray) {
						context$2$0.next = 3;
						break;
					}

					if (!(argsArray.className !== "Arguments" && argsArray.className !== "Array" && argsArray.className !== "Function")) {
						context$2$0.next = 3;
						break;
					}

					throw TypeError("Arguments list was wrong type");

				case 3:
					context$2$0.next = 5;
					return (0, _utilsNative.toArray)(argsArray);

				case 5:
					args = context$2$0.sent;

					thisArg = (0, _functionHelpers.defineThis)(env, this.node, thisArg);
					this.node.bindThis(thisArg);

					return context$2$0.delegateYield(this.node.call(thisArg, args), "t0", 9);

				case 9:
					return context$2$0.abrupt("return", context$2$0.t0);

				case 10:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Function.prototype.apply"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"./function-helpers":158,"babel-runtime/regenerator":26}],160:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _functionHelpers = require("./function-helpers");

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("bind", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(thisArg) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		var fn, callee, params, nativeFunc, boundFunc, thrower;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					fn = this.node;
					callee = fn.native ? fn : fn.node;
					params = callee.params || [];

					thisArg = (0, _functionHelpers.defineThis)(env, this.node, thisArg);

					nativeFunc = _regeneratorRuntime.mark(function nativeFunc() {
						for (var _len2 = arguments.length, additionalArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
							additionalArgs[_key2] = arguments[_key2];
						}

						var mergedArgs;
						return _regeneratorRuntime.wrap(function nativeFunc$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									mergedArgs = args.concat(additionalArgs);
									return context$3$0.delegateYield(fn[this.isNew ? "construct" : "call"](thisArg, mergedArgs), "t0", 2);

								case 2:
									return context$3$0.abrupt("return", context$3$0.t0);

								case 3:
								case "end":
									return context$3$0.stop();
							}
						}, nativeFunc, this);
					});

					nativeFunc.nativeLength = Math.max(params.length - args.length, 0);
					nativeFunc.strict = env.isStrict() || !fn.native && (0, _utilsContracts.isStrictNode)(fn.node.body.body);

					boundFunc = factory.createFunction(nativeFunc, null);

					boundFunc.canConstruct = this.node.canConstruct;
					boundFunc.bindScope(this.env.current);
					boundFunc.bindThis(thisArg);

					if (!nativeFunc.strict) {
						boundFunc.remove("caller");
						boundFunc.remove("arguments");

						// these will be added in strict mode, but should always be here for bound functions
						thrower = factory.createThrower("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");

						boundFunc.defineOwnProperty("caller", thrower);
						boundFunc.defineOwnProperty("arguments", thrower);
					}

					return context$2$0.abrupt("return", boundFunc);

				case 13:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Function.prototype.bind"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"./function-helpers":158,"babel-runtime/regenerator":26}],161:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _functionHelpers = require("./function-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("call", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(thisArg) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					thisArg = (0, _functionHelpers.defineThis)(env, this.node, thisArg);
					this.node.bindThis(thisArg);

					return context$2$0.delegateYield(this.node.call(thisArg, args), "t0", 3);

				case 3:
					return context$2$0.abrupt("return", context$2$0.t0);

				case 4:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Function.prototype.call"));
};

module.exports = exports["default"];

},{"./function-helpers":158,"babel-runtime/regenerator":26}],162:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function ($target, env, factory) {
	$target.define("toString", factory.createBuiltInFunction(function () {
		if (this.node.native) {
			return factory.createPrimitive("function () { [native code] }");
		}

		return factory.createPrimitive("function () { [user code] }");
	}, 0, "Function.prototype.toString"));
};

module.exports = exports["default"];

},{}],163:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = functionApi;

var _typesNativeFunctionType = require("../../types/native-function-type");

var _typesPrimitiveType = require("../../types/primitive-type");

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

var _utilsAsync = require("../../utils/async");

var _functionApply = require("./function.apply");

var _functionApply2 = _interopRequireDefault(_functionApply);

var _functionBind = require("./function.bind");

var _functionBind2 = _interopRequireDefault(_functionBind);

var _functionCall = require("./function.call");

var _functionCall2 = _interopRequireDefault(_functionCall);

var _functionToString = require("./function.to-string");

var _functionToString2 = _interopRequireDefault(_functionToString);

var frozen = { configurable: false, enumerable: false, writable: false };

function functionApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;
	var options = env.options;

	var funcClass = undefined;

	var funcCtor = _regeneratorRuntime.mark(function funcCtor() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var funcInstance;
		return _regeneratorRuntime.wrap(function funcCtor$(context$2$0) {
			var _this = this;

			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					funcInstance = undefined;

					if (!(options.parser && args.length > 0)) {
						context$2$0.next = 5;
						break;
					}

					return context$2$0.delegateYield(_regeneratorRuntime.mark(function callee$2$0() {
						var body, params, bodyString, ast, callee, userNode, strict, wrappedFunc;
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									body = args.pop();
									params = "";

									if (!(args.length > 0)) {
										context$3$0.next = 6;
										break;
									}

									context$3$0.next = 5;
									return (0, _utilsAsync.map)(args, _regeneratorRuntime.mark(function callee$3$0(arg, index) {
										return _regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
											while (1) switch (context$4$0.prev = context$4$0.next) {
												case 0:
													if (!(0, _utilsContracts.isNull)(arg)) {
														context$4$0.next = 2;
														break;
													}

													throw SyntaxError("Unexpected token null");

												case 2:
													if (!(0, _utilsContracts.isUndefined)(arg)) {
														context$4$0.next = 6;
														break;
													}

													context$4$0.t0 = "";
													context$4$0.next = 9;
													break;

												case 6:
													context$4$0.next = 8;
													return (0, _utilsNative.toString)(arg);

												case 8:
													context$4$0.t0 = context$4$0.sent;

												case 9:
													return context$4$0.abrupt("return", context$4$0.t0);

												case 10:
												case "end":
													return context$4$0.stop();
											}
										}, callee$3$0, this);
									}));

								case 5:
									params = context$3$0.sent.
									// the spec allows parameters to be comma-delimited, so we will join and split again comma
									join(",");

								case 6:
									context$3$0.next = 8;
									return (0, _utilsNative.toString)(body);

								case 8:
									bodyString = context$3$0.sent;
									ast = options.parser("(function(" + params + "){" + bodyString + "}).apply($this,$args);");
									callee = ast.body[0].expression.callee.object;
									userNode = callee.body.body;
									strict = (0, _utilsContracts.isStrictNode)(userNode);
									wrappedFunc = _regeneratorRuntime.mark(function wrappedFunc() {
										var thisArg,
										    $args,
										    executionResult,
										    args$4$0 = arguments;
										return _regeneratorRuntime.wrap(function wrappedFunc$(context$4$0) {
											while (1) switch (context$4$0.prev = context$4$0.next) {
												case 0:
													thisArg = undefined;

													if (this.isNew) {
														thisArg = objectFactory.createObject(funcInstance);
													} else {
														thisArg = this.node;

														if (!strict && (0, _utilsContracts.isUndefined)(thisArg)) {
															thisArg = globalObject;
														}
													}

													env.createVariable("$this").setValue(thisArg);

													$args = objectFactory.createArray(args$4$0);

													env.createVariable("$args").setValue($args);

													context$4$0.next = 7;
													return env.createExecutionContext(ast).execute();

												case 7:
													executionResult = context$4$0.sent;

													if (!this.isNew) {
														context$4$0.next = 10;
														break;
													}

													return context$4$0.abrupt("return", thisArg);

												case 10:
													return context$4$0.abrupt("return", executionResult && executionResult.result || _typesPrimitiveType.UNDEFINED);

												case 11:
												case "end":
													return context$4$0.stop();
											}
										}, wrappedFunc, this);
									});

									wrappedFunc.nativeLength = callee.params.length;
									wrappedFunc.strict = strict;
									funcInstance = objectFactory.createFunction(wrappedFunc, undefined, { strict: strict });
									funcInstance.bindScope(env.globalScope);

								case 18:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, _this);
					})(), "t0", 3);

				case 3:
					context$2$0.next = 6;
					break;

				case 5:
					funcInstance = objectFactory.createFunction(function () {});

				case 6:

					funcInstance.setValue("constructor", funcClass);
					return context$2$0.abrupt("return", funcInstance);

				case 8:
				case "end":
					return context$2$0.stop();
			}
		}, funcCtor, this);
	});

	// the prototype of a function is actually callable and evaluates as a function
	var proto = new _typesNativeFunctionType.NativeFunctionType(function () {
		if (this.isNew) {
			throw TypeError("Function.protoype is not a constructor");
		}

		return _typesPrimitiveType.UNDEFINED;
	});

	proto[_Symbol$for("env")] = env;

	funcCtor.nativeLength = 1;
	funcClass = objectFactory.createFunction(funcCtor, proto, frozen);
	funcClass.setValue("constructor", funcClass);

	globalObject.define("Function", funcClass);

	proto.define("length", objectFactory.createPrimitive(0), { writable: false });
	proto.define("name", objectFactory.createPrimitive(""), { writable: false });

	// function itself is a function
	funcClass.setPrototype(proto);

	(0, _functionApply2["default"])(proto, env, objectFactory);
	(0, _functionBind2["default"])(proto, env, objectFactory);
	(0, _functionCall2["default"])(proto, env, objectFactory);
	(0, _functionToString2["default"])(proto, env, objectFactory);

	var thrower = function thrower() {
		if (this.isStrict()) {
			throw TypeError("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
		}

		return undefined;
	};

	var throwerFunc = objectFactory.createBuiltInFunction(thrower);

	var prop = {
		get: throwerFunc,
		getter: thrower,
		set: throwerFunc,
		setter: thrower,
		enumerable: false,
		configurable: true
	};

	proto.defineOwnProperty("caller", prop);
	proto.defineOwnProperty("callee", prop);
	proto.defineOwnProperty("arguments", prop);
}

module.exports = exports["default"];

},{"../../types/native-function-type":300,"../../types/primitive-type":303,"../../utils/async":310,"../../utils/contracts":311,"../../utils/native":313,"./function.apply":159,"./function.bind":160,"./function.call":161,"./function.to-string":162,"babel-runtime/core-js/symbol/for":16,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],164:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _envReference = require("../env/reference");

var _utilsContracts = require("../utils/contracts");

var _typesPrimitiveType = require("../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	var parser = env.options.parser;

	function createScope(body, directCall) {
		var strictScope = env.isStrict();
		var strictCode = strictScope || (0, _utilsContracts.isStrictNode)(body);
		var inGlobal = env.current.scope.parent === env.globalScope.scope;

		// use the same scope unless this is an "indirect" call
		// in which case we use the global scope
		if (directCall) {
			if (strictCode) {
				var thisArg = undefined;
				if (strictScope) {
					thisArg = inGlobal ? $target : _typesPrimitiveType.UNDEFINED;
				} else {
					thisArg = env.getThisBinding() || $target;
				}

				return env.createScope(thisArg);
			}

			return env.setScope(env.current.scope.parent);
		}

		var scope = env.setScope(env.globalScope.scope);
		if (strictCode) {
			scope = env.createScope($target);
		}

		return scope;
	}

	function isDirectCall(context) {
		return context.callee instanceof _envReference.Reference && context.callee.base === $target;
	}

	$target.define("eval", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(code) {
		var ast, scope, executionResult;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (code) {
						context$2$0.next = 2;
						break;
					}

					return context$2$0.abrupt("return", _typesPrimitiveType.UNDEFINED);

				case 2:
					if (!(code.type !== "string")) {
						context$2$0.next = 4;
						break;
					}

					return context$2$0.abrupt("return", code);

				case 4:
					ast = undefined;
					context$2$0.prev = 5;

					ast = parser(code.value);
					context$2$0.next = 14;
					break;

				case 9:
					context$2$0.prev = 9;
					context$2$0.t0 = context$2$0["catch"](5);

					if (!(context$2$0.t0 instanceof SyntaxError && /assigning to rvalue/i.test(context$2$0.t0.message))) {
						context$2$0.next = 13;
						break;
					}

					throw ReferenceError("Invalid left-hand side in assignment");

				case 13:
					throw context$2$0.t0;

				case 14:
					scope = createScope(ast.body, isDirectCall(this));
					context$2$0.next = 17;
					return scope.use(_regeneratorRuntime.mark(function callee$2$0() {
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									context$3$0.next = 2;
									return env.createExecutionContext(ast).execute();

								case 2:
									return context$3$0.abrupt("return", context$3$0.sent);

								case 3:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, this);
					}));

				case 17:
					executionResult = context$2$0.sent;
					return context$2$0.abrupt("return", executionResult && executionResult.result ? executionResult.result.getValue() : _typesPrimitiveType.UNDEFINED);

				case 19:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[5, 9]]);
	}), 1, "eval"));
};

module.exports = exports["default"];

// hack because acorn throws syntax error

},{"../env/reference":122,"../types/primitive-type":303,"../utils/contracts":311,"babel-runtime/regenerator":26}],165:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("isFinite", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value) {
		var numberValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toNumber)(value);

				case 2:
					numberValue = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(isFinite(numberValue)));

				case 4:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "isFinite"));
};

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],166:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("isNaN", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value) {
		var numberValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toNumber)(value);

				case 2:
					numberValue = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(isNaN(numberValue)));

				case 4:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "isNaN"));
};

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],167:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("parseInt", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value, radix) {
		var stringValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(value);

				case 2:
					stringValue = context$2$0.sent;
					context$2$0.next = 5;
					return (0, _utilsNative.toPrimitive)(radix, "number");

				case 5:
					radix = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(parseInt(stringValue, radix)));

				case 7:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "parseInt"));
};

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],168:[function(require,module,exports){
(function (global){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

var _globalEval = require("./global.eval");

var _globalEval2 = _interopRequireDefault(_globalEval);

var _globalIsFinite = require("./global.is-finite");

var _globalIsFinite2 = _interopRequireDefault(_globalIsFinite);

var _globalIsNan = require("./global.is-nan");

var _globalIsNan2 = _interopRequireDefault(_globalIsNan);

var _globalParseInt = require("./global.parse-int");

var _globalParseInt2 = _interopRequireDefault(_globalParseInt);

exports["default"] = function (env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;
	var options = env.options;

	globalObject.define("Infinity", objectFactory.createPrimitive(Infinity), { configurable: false, writable: false });
	globalObject.define("NaN", objectFactory.createPrimitive(NaN), { configurable: false, writable: false });

	["parseFloat", "decodeURI", "encodeURI", "decodeURIComponent", "encodeURIComponent", "escape", "unescape"].forEach(function (name) {
		globalObject.define(name, objectFactory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$2$0(value) {
			var stringValue;
			return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						context$3$0.next = 2;
						return (0, _utilsNative.toString)(value);

					case 2:
						stringValue = context$3$0.sent;
						return context$3$0.abrupt("return", objectFactory.createPrimitive(global[name](stringValue)));

					case 4:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		}), 1, name));
	});

	(0, _globalIsFinite2["default"])(globalObject, env, objectFactory);
	(0, _globalIsNan2["default"])(globalObject, env, objectFactory);
	(0, _globalParseInt2["default"])(globalObject, env, objectFactory);

	if (options.parser) {
		(0, _globalEval2["default"])(globalObject, env, objectFactory);
	}
};

module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../utils/native":313,"./global.eval":164,"./global.is-finite":165,"./global.is-nan":166,"./global.parse-int":167,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],169:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ecma51;

var _typesPrimitiveType = require("../types/primitive-type");

var _typesObjectFactory = require("../types/object-factory");

var _number = require("./number/");

var _number2 = _interopRequireDefault(_number);

var _string = require("./string/");

var _string2 = _interopRequireDefault(_string);

var _function = require("./function/");

var _function2 = _interopRequireDefault(_function);

var _object = require("./object/");

var _object2 = _interopRequireDefault(_object);

var _boolean = require("./boolean/");

var _boolean2 = _interopRequireDefault(_boolean);

var _date = require("./date/");

var _date2 = _interopRequireDefault(_date);

var _array = require("./array/");

var _array2 = _interopRequireDefault(_array);

var _math = require("./math/");

var _math2 = _interopRequireDefault(_math);

var _regex = require("./regex/");

var _regex2 = _interopRequireDefault(_regex);

var _error = require("./error/");

var _error2 = _interopRequireDefault(_error);

var _json = require("./json/");

var _json2 = _interopRequireDefault(_json);

var _console = require("./console/");

var _console2 = _interopRequireDefault(_console);

var _globals = require("./globals");

var _globals2 = _interopRequireDefault(_globals);

var frozen = { configurable: false, enumerable: false, writable: false };

function ecma51(env) {
	var objectFactory = env.objectFactory = new _typesObjectFactory.ObjectFactory(env);
	var globalObject = env.global = objectFactory.createObject();

	env.createObjectScope(globalObject);

	globalObject.define("undefined", _typesPrimitiveType.UNDEFINED, frozen);
	globalObject.define("null", _typesPrimitiveType.NULL, frozen);

	// todo: node vs browser - do we care?
	globalObject.define("window", globalObject, frozen);

	(0, _function2["default"])(env);
	(0, _object2["default"])(env);
	(0, _array2["default"])(env);
	(0, _boolean2["default"])(env);
	(0, _number2["default"])(env);
	(0, _string2["default"])(env);
	(0, _date2["default"])(env);
	(0, _regex2["default"])(env);
	(0, _math2["default"])(env);
	(0, _error2["default"])(env);
	(0, _json2["default"])(env);
	(0, _console2["default"])(env);
	(0, _globals2["default"])(env);
}

module.exports = exports["default"];

},{"../types/object-factory":301,"../types/primitive-type":303,"./array/":147,"./boolean/":150,"./console/":151,"./date/":155,"./error/":157,"./function/":163,"./globals":168,"./json/":170,"./math/":173,"./number/":174,"./object/":178,"./regex/":198,"./string/":202,"babel-runtime/helpers/interop-require-default":24}],170:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = jsonApi;

var _jsonParse = require("./json.parse");

var _jsonParse2 = _interopRequireDefault(_jsonParse);

var _jsonStringify = require("./json.stringify");

var _jsonStringify2 = _interopRequireDefault(_jsonStringify);

function jsonApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var jsonClass = objectFactory.createObject();
	jsonClass.className = "JSON";

	(0, _jsonParse2["default"])(jsonClass, env, objectFactory);
	(0, _jsonStringify2["default"])(jsonClass, env, objectFactory);

	globalObject.define("JSON", jsonClass);
}

module.exports = exports["default"];

},{"./json.parse":171,"./json.stringify":172,"babel-runtime/helpers/interop-require-default":24}],171:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../../types/primitive-type");

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	var marked1$0 = [deserialize].map(_regeneratorRuntime.mark);

	function createReviver(reviver) {
		if (reviver && reviver.className === "Function") {
			return _regeneratorRuntime.mark(function callee$2$0(holder, key, value) {
				var args;
				return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
					while (1) switch (context$3$0.prev = context$3$0.next) {
						case 0:
							args = [factory.createPrimitive(key), value];
							return context$3$0.delegateYield(reviver.call(holder, args), "t0", 2);

						case 2:
							return context$3$0.abrupt("return", context$3$0.t0);

						case 3:
						case "end":
							return context$3$0.stop();
					}
				}, callee$2$0, this);
			});
		}

		return function (holder, key, value) {
			return value;
		};
	}

	function deserialize(value, reviver) {
		var valueType, arr, i, ln, element, elementValue, obj, propValue, prop;
		return _regeneratorRuntime.wrap(function deserialize$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					valueType = (0, _utilsContracts.getType)(value);
					context$2$0.t0 = valueType;
					context$2$0.next = context$2$0.t0 === "Undefined" ? 4 : context$2$0.t0 === "Null" ? 4 : context$2$0.t0 === "String" ? 4 : context$2$0.t0 === "Number" ? 4 : context$2$0.t0 === "Boolean" ? 4 : context$2$0.t0 === "Array" ? 5 : 28;
					break;

				case 4:
					return context$2$0.abrupt("return", factory.create(valueType, value));

				case 5:
					arr = factory.createArray();
					i = 0, ln = value.length;

				case 7:
					if (!(i < ln)) {
						context$2$0.next = 27;
						break;
					}

					element = value[i];
					context$2$0.t1 = arr;
					context$2$0.t2 = String(i);
					context$2$0.next = 13;
					return deserialize(element, reviver);

				case 13:
					context$2$0.t3 = context$2$0.sent;
					context$2$0.next = 16;
					return reviver(context$2$0.t1, context$2$0.t2, context$2$0.t3);

				case 16:
					elementValue = context$2$0.sent;

					if ((0, _utilsContracts.isUndefined)(elementValue)) {
						context$2$0.next = 24;
						break;
					}

					context$2$0.t4 = arr;
					context$2$0.t5 = i;
					context$2$0.next = 22;
					return deserialize(element);

				case 22:
					context$2$0.t6 = context$2$0.sent;
					context$2$0.t4.setIndex.call(context$2$0.t4, context$2$0.t5, context$2$0.t6);

				case 24:
					i++;
					context$2$0.next = 7;
					break;

				case 27:
					return context$2$0.abrupt("return", arr);

				case 28:
					obj = factory.createObject();
					propValue = undefined;
					context$2$0.t7 = _regeneratorRuntime.keys(value);

				case 31:
					if ((context$2$0.t8 = context$2$0.t7()).done) {
						context$2$0.next = 45;
						break;
					}

					prop = context$2$0.t8.value;

					if (!value.hasOwnProperty(prop)) {
						context$2$0.next = 43;
						break;
					}

					context$2$0.t9 = obj;
					context$2$0.t10 = prop;
					context$2$0.next = 38;
					return deserialize(value[prop], reviver);

				case 38:
					context$2$0.t11 = context$2$0.sent;
					context$2$0.next = 41;
					return reviver(context$2$0.t9, context$2$0.t10, context$2$0.t11);

				case 41:
					propValue = context$2$0.sent;

					if (!(0, _utilsContracts.isUndefined)(propValue)) {
						obj.defineOwnProperty(prop, { value: propValue, configurable: true, enumerable: true, writable: true });
					}

				case 43:
					context$2$0.next = 31;
					break;

				case 45:
					return context$2$0.abrupt("return", obj);

				case 46:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[0], this);
	}

	$target.define("parse", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(str, reviver) {
		var stringValue, parsedObject, deserializedObject;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					reviver = createReviver(reviver);

					context$2$0.next = 3;
					return (0, _utilsNative.toString)(str);

				case 3:
					stringValue = context$2$0.sent;
					parsedObject = JSON.parse(stringValue);
					context$2$0.next = 7;
					return deserialize(parsedObject, reviver);

				case 7:
					deserializedObject = context$2$0.sent;
					context$2$0.next = 10;
					return reviver(deserializedObject, "", deserializedObject) || _typesPrimitiveType.UNDEFINED;

				case 10:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 11:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "JSON.parse"));
};

module.exports = exports["default"];

// these are the only types supported by JSON.parse - sad face...

},{"../../types/primitive-type":303,"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],172:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../../types/primitive-type");

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

var _utilsAsync = require("../../utils/async");

var _utilsFunc = require("../../utils/func");

var primitives = {
	"String": true,
	"Number": true,
	"Boolean": true,
	"Date": true
};

exports["default"] = function ($target, env, factory) {
	var marked1$0 = [serialize, serializeObject, serializeArray, createReplacer, getSpacer].map(_regeneratorRuntime.mark);

	var serializePrimitive = JSON.stringify;

	function serialize(stack, obj, replacer, gap, depth) {
		var jsonString, jsonResult;
		return _regeneratorRuntime.wrap(function serialize$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (obj) {
						context$2$0.next = 2;
						break;
					}

					return context$2$0.abrupt("return", serializePrimitive());

				case 2:
					if (!(obj.isPrimitive || obj.className in primitives)) {
						context$2$0.next = 4;
						break;
					}

					return context$2$0.abrupt("return", serializePrimitive(obj.value));

				case 4:
					if (!(obj.className === "Function")) {
						context$2$0.next = 6;
						break;
					}

					return context$2$0.abrupt("return", undefined);

				case 6:
					context$2$0.next = 8;
					return (0, _utilsFunc.tryExecute)(obj, "toJSON");

				case 8:
					jsonString = context$2$0.sent;

					if (!jsonString) {
						context$2$0.next = 11;
						break;
					}

					return context$2$0.abrupt("return", serializePrimitive(jsonString.value));

				case 11:
					if (!(stack.indexOf(obj) >= 0)) {
						context$2$0.next = 13;
						break;
					}

					throw TypeError("Converting circular structure to JSON");

				case 13:

					depth++;
					stack.push(obj);

					jsonResult = undefined;

					if (!(obj.className === "Array")) {
						context$2$0.next = 22;
						break;
					}

					context$2$0.next = 19;
					return serializeArray(stack, obj, replacer);

				case 19:
					jsonResult = context$2$0.sent;
					context$2$0.next = 25;
					break;

				case 22:
					context$2$0.next = 24;
					return serializeObject(stack, obj, replacer, gap, depth);

				case 24:
					jsonResult = context$2$0.sent;

				case 25:

					depth--;
					stack.pop();
					return context$2$0.abrupt("return", jsonResult);

				case 28:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[0], this);
	}

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

	function serializeObject(stack, obj, replacer, gap, depth) {
		var colon, values, value, prop;
		return _regeneratorRuntime.wrap(function serializeObject$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					colon = gap ? ": " : ":";
					values = [];
					value = undefined;
					context$2$0.t0 = _regeneratorRuntime.keys(obj.properties);

				case 4:
					if ((context$2$0.t1 = context$2$0.t0()).done) {
						context$2$0.next = 20;
						break;
					}

					prop = context$2$0.t1.value;

					if (!obj.properties[prop].enumerable) {
						context$2$0.next = 18;
						break;
					}

					context$2$0.next = 9;
					return replacer(obj, prop, obj.getValue(prop));

				case 9:
					value = context$2$0.sent;

					if ((0, _utilsContracts.isNullOrUndefined)(value)) {
						context$2$0.next = 18;
						break;
					}

					context$2$0.t2 = values;
					context$2$0.t3 = serializePrimitive(prop) + colon;
					context$2$0.next = 15;
					return serialize(stack, value, replacer, gap, depth);

				case 15:
					context$2$0.t4 = context$2$0.sent;
					context$2$0.t5 = context$2$0.t3 + context$2$0.t4;
					context$2$0.t2.push.call(context$2$0.t2, context$2$0.t5);

				case 18:
					context$2$0.next = 4;
					break;

				case 20:
					return context$2$0.abrupt("return", "{" + formatValues(values, gap, depth, gap, depth) + "}");

				case 21:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[1], this);
	}

	function serializeArray(stack, arr, replacer, gap, depth) {
		var length, values, i, value;
		return _regeneratorRuntime.wrap(function serializeArray$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					length = arr.getValue("length").toNative();
					values = [];
					i = 0;

				case 3:
					if (!(i < length)) {
						context$2$0.next = 21;
						break;
					}

					value = undefined;

					if (!arr.has(i)) {
						context$2$0.next = 9;
						break;
					}

					context$2$0.next = 8;
					return replacer(arr, String(i), arr.getValue(i));

				case 8:
					value = context$2$0.sent;

				case 9:
					if (!(0, _utilsContracts.isNullOrUndefined)(value)) {
						context$2$0.next = 13;
						break;
					}

					// undefined positions are replaced with null
					values.push("null");
					context$2$0.next = 18;
					break;

				case 13:
					context$2$0.t0 = values;
					context$2$0.next = 16;
					return serialize(stack, value, replacer);

				case 16:
					context$2$0.t1 = context$2$0.sent;
					context$2$0.t0.push.call(context$2$0.t0, context$2$0.t1);

				case 18:
					i++;
					context$2$0.next = 3;
					break;

				case 21:
					return context$2$0.abrupt("return", "[" + formatValues(values, gap, depth) + "]");

				case 22:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[2], this);
	}

	function createReplacer(replacer) {
		var _ret;

		return _regeneratorRuntime.wrap(function createReplacer$(context$2$0) {
			var _this = this;

			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (!replacer) {
						context$2$0.next = 8;
						break;
					}

					if (!(replacer.className === "Function")) {
						context$2$0.next = 3;
						break;
					}

					return context$2$0.abrupt("return", _regeneratorRuntime.mark(function callee$2$0(holder, key, value) {
						var args;
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									args = [factory.createPrimitive(key), value];
									context$3$0.next = 3;
									return replacer.call(holder, args);

								case 3:
									return context$3$0.abrupt("return", context$3$0.sent);

								case 4:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, this);
					}));

				case 3:
					if (!(replacer.className === "Array")) {
						context$2$0.next = 8;
						break;
					}

					return context$2$0.delegateYield(_regeneratorRuntime.mark(function callee$2$0() {
						var arr, keys;
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									context$3$0.next = 2;
									return (0, _utilsNative.toArray)(replacer);

								case 2:
									arr = context$3$0.sent;
									return context$3$0.delegateYield((0, _utilsAsync.map)(arr, _regeneratorRuntime.mark(function callee$3$0(arg) {
										return _regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
											while (1) switch (context$4$0.prev = context$4$0.next) {
												case 0:
													if (!(arg.className === "String")) {
														context$4$0.next = 4;
														break;
													}

													context$4$0.next = 3;
													return (0, _utilsNative.toString)(arg);

												case 3:
													return context$4$0.abrupt("return", context$4$0.sent);

												case 4:
													if (!(arg.className === "Number")) {
														context$4$0.next = 9;
														break;
													}

													context$4$0.next = 7;
													return (0, _utilsNative.toNumber)(arg);

												case 7:
													context$4$0.t0 = context$4$0.sent;
													return context$4$0.abrupt("return", String(context$4$0.t0));

												case 9:
													return context$4$0.abrupt("return", undefined);

												case 10:
												case "end":
													return context$4$0.stop();
											}
										}, callee$3$0, this);
									})), "t0", 4);

								case 4:
									keys = context$3$0.t0;
									return context$3$0.abrupt("return", {
										v: function (holder, key, value) {
											// allow empty key - this will be from the root
											if (!key || keys.indexOf(key) >= 0) {
												return value;
											}

											return undefined;
										}
									});

								case 6:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, _this);
					})(), "t0", 5);

				case 5:
					_ret = context$2$0.t0;

					if (!(typeof _ret === "object")) {
						context$2$0.next = 8;
						break;
					}

					return context$2$0.abrupt("return", _ret.v);

				case 8:
					return context$2$0.abrupt("return", function (holder, key, value) {
						return value;
					});

				case 9:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[3], this);
	}

	function getSpacer(spacer) {
		var count, gap;
		return _regeneratorRuntime.wrap(function getSpacer$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (!spacer) {
						context$2$0.next = 16;
						break;
					}

					if (!(spacer.className === "Number")) {
						context$2$0.next = 11;
						break;
					}

					context$2$0.t0 = Math;
					context$2$0.next = 5;
					return (0, _utilsNative.toNumber)(spacer);

				case 5:
					context$2$0.t1 = context$2$0.sent;
					count = context$2$0.t0.floor.call(context$2$0.t0, context$2$0.t1);

					count = Math.max(Math.min(10, count), 0);

					if (!(count > 0)) {
						context$2$0.next = 10;
						break;
					}

					return context$2$0.abrupt("return", " ".repeat(count));

				case 10:
					return context$2$0.abrupt("return", "");

				case 11:
					if (!(spacer.className === "String")) {
						context$2$0.next = 16;
						break;
					}

					context$2$0.next = 14;
					return (0, _utilsNative.toString)(spacer);

				case 14:
					gap = context$2$0.sent;
					return context$2$0.abrupt("return", gap.substr(0, 10));

				case 16:
					return context$2$0.abrupt("return", "");

				case 17:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[4], this);
	}

	$target.define("stringify", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(obj, replacer, spacer) {
		var stack;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return createReplacer(replacer);

				case 2:
					replacer = context$2$0.sent;
					context$2$0.next = 5;
					return getSpacer(spacer);

				case 5:
					spacer = context$2$0.sent;
					context$2$0.next = 8;
					return replacer(obj, "", obj);

				case 8:
					obj = context$2$0.sent;

					if (!(0, _utilsContracts.isUndefined)(obj)) {
						context$2$0.next = 11;
						break;
					}

					return context$2$0.abrupt("return", _typesPrimitiveType.UNDEFINED);

				case 11:
					stack = [];
					context$2$0.t0 = factory;
					context$2$0.next = 15;
					return serialize(stack, obj, replacer, spacer, 0);

				case 15:
					context$2$0.t1 = context$2$0.sent;
					return context$2$0.abrupt("return", context$2$0.t0.createPrimitive.call(context$2$0.t0, context$2$0.t1));

				case 17:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 3, "JSON.stringify"));
};

module.exports = exports["default"];

// run at the top value

},{"../../types/primitive-type":303,"../../utils/async":310,"../../utils/contracts":311,"../../utils/func":312,"../../utils/native":313,"babel-runtime/regenerator":26}],173:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = mathApi;

var _utilsNative = require("../../utils/native");

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
		mathClass.define(name, (0, _utilsNative.toNativeFunction)(env, Math[name], "Math." + name));
	});

	globalObject.define("Math", mathClass);
}

module.exports = exports["default"];

},{"../../utils/native":313}],174:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = numberApi;

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _numberToFixed = require("./number.to-fixed");

var _numberToFixed2 = _interopRequireDefault(_numberToFixed);

var _numberToString = require("./number.to-string");

var _numberToString2 = _interopRequireDefault(_numberToString);

var _numberValueOf = require("./number.value-of");

var _numberValueOf2 = _interopRequireDefault(_numberValueOf);

function numberApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var proto = objectFactory.createObject();
	proto.className = "Number";
	proto.value = 0;

	var numberClass = objectFactory.createFunction(_regeneratorRuntime.mark(function callee$1$0(obj) {
		var numberValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toPrimitive)(obj, "number");

				case 2:
					context$2$0.t0 = context$2$0.sent;
					numberValue = Number(context$2$0.t0);

					if (!this.isNew) {
						context$2$0.next = 6;
						break;
					}

					return context$2$0.abrupt("return", (0, _utilsNative.primitiveToObject)(env, numberValue));

				case 6:
					return context$2$0.abrupt("return", objectFactory.create("Number", numberValue));

				case 7:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), proto, { configurable: false, enumerable: false, writable: false });

	["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"].forEach(function (name) {
		numberClass.define(name, objectFactory.createPrimitive(Number[name]), { configurable: false, enumerable: false, writable: false });
	});

	(0, _numberToFixed2["default"])(proto, env, objectFactory);
	(0, _numberToString2["default"])(proto, env, objectFactory);
	(0, _numberValueOf2["default"])(proto, env, objectFactory);

	["toExponential", "toPrecision", "toLocaleString"].forEach(function (name) {
		var fn = Number.prototype[name];
		if (fn) {
			(function () {
				var methodName = "Number.prototype." + name;
				proto.define(name, objectFactory.createBuiltInFunction(function () {
					(0, _utilsContracts.assertIsNotGeneric)(this.node, "Number", methodName);
					return objectFactory.createPrimitive(fn.call(this.node.value));
				}, fn.length, methodName));
			})();
		}
	});

	globalObject.define("Number", numberClass);
}

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"./number.to-fixed":175,"./number.to-string":176,"./number.value-of":177,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],175:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("toFixed", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(fractionDigits) {
		var digits;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotGeneric)(this.node, "Number", "Number.prototype.toFixed");

					digits = 0;

					if (!fractionDigits) {
						context$2$0.next = 6;
						break;
					}

					context$2$0.next = 5;
					return (0, _utilsNative.toNumber)(fractionDigits);

				case 5:
					digits = context$2$0.sent;

				case 6:
					return context$2$0.abrupt("return", factory.createPrimitive(Number.prototype.toFixed.call(this.node.value, digits)));

				case 7:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Number.prototype.toFixed"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],176:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("toString", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(radix) {
		var radixValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotGeneric)(this.node, "Number", "Number.prototype.toString");

					radixValue = 10;

					if (!radix) {
						context$2$0.next = 8;
						break;
					}

					context$2$0.next = 5;
					return (0, _utilsNative.toPrimitive)(radix, "number");

				case 5:
					radixValue = context$2$0.sent;

					if (!(radixValue < 2 || radixValue > 36)) {
						context$2$0.next = 8;
						break;
					}

					throw RangeError("toString() radix argument must be between 2 and 36");

				case 8:
					return context$2$0.abrupt("return", factory.createPrimitive(this.node.value == null ? "0" : this.node.value.toString(radixValue)));

				case 9:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Number.prototype.toString"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],177:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("valueOf", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsNotGeneric)(this.node, "Number", "Number.prototype.valueOf");
		return factory.createPrimitive(this.node.value == null ? 0 : this.node.value);
	}, 0, "Number.prototype.valueOf"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311}],178:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = objectApi;

var _typesObjectType = require("../../types/object-type");

var _objectCreate = require("./object.create");

var _objectCreate2 = _interopRequireDefault(_objectCreate);

var _objectDefineProperties = require("./object.define-properties");

var _objectDefineProperties2 = _interopRequireDefault(_objectDefineProperties);

var _objectDefineProperty = require("./object.define-property");

var _objectDefineProperty2 = _interopRequireDefault(_objectDefineProperty);

var _objectFreeze = require("./object.freeze");

var _objectFreeze2 = _interopRequireDefault(_objectFreeze);

var _objectGetOwnPropertyDescriptor = require("./object.get-own-property-descriptor");

var _objectGetOwnPropertyDescriptor2 = _interopRequireDefault(_objectGetOwnPropertyDescriptor);

var _objectGetOwnPropertyNames = require("./object.get-own-property-names");

var _objectGetOwnPropertyNames2 = _interopRequireDefault(_objectGetOwnPropertyNames);

var _objectGetPrototypeOf = require("./object.get-prototype-of");

var _objectGetPrototypeOf2 = _interopRequireDefault(_objectGetPrototypeOf);

var _objectIsExtensible = require("./object.is-extensible");

var _objectIsExtensible2 = _interopRequireDefault(_objectIsExtensible);

var _objectIsFrozen = require("./object.is-frozen");

var _objectIsFrozen2 = _interopRequireDefault(_objectIsFrozen);

var _objectIsSealed = require("./object.is-sealed");

var _objectIsSealed2 = _interopRequireDefault(_objectIsSealed);

var _objectKeys = require("./object.keys");

var _objectKeys2 = _interopRequireDefault(_objectKeys);

var _objectPreventExtensions = require("./object.prevent-extensions");

var _objectPreventExtensions2 = _interopRequireDefault(_objectPreventExtensions);

var _objectSeal = require("./object.seal");

var _objectSeal2 = _interopRequireDefault(_objectSeal);

var _objectHasOwnProperty = require("./object.has-own-property");

var _objectHasOwnProperty2 = _interopRequireDefault(_objectHasOwnProperty);

var _objectIsPrototypeOf = require("./object.is-prototype-of");

var _objectIsPrototypeOf2 = _interopRequireDefault(_objectIsPrototypeOf);

var _objectPropertyIsEnumerable = require("./object.property-is-enumerable");

var _objectPropertyIsEnumerable2 = _interopRequireDefault(_objectPropertyIsEnumerable);

var _objectToString = require("./object.to-string");

var _objectToString2 = _interopRequireDefault(_objectToString);

var _objectValueOf = require("./object.value-of");

var _objectValueOf2 = _interopRequireDefault(_objectValueOf);

function objectApi(env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var proto = new _typesObjectType.ObjectType();
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

			if (value.isSymbol) {
				// should return a new symbol instance
				return objectFactory.create("Symbol", value.description);
			}

			// if an object is passed in just return
			return value;
		}

		return objectFactory.createObject();
	}, proto, { configurable: false, enumerable: false, writable: false });

	(0, _objectHasOwnProperty2["default"])(proto, env, objectFactory);
	(0, _objectIsPrototypeOf2["default"])(proto, env, objectFactory);
	(0, _objectToString2["default"])(proto, env, objectFactory);
	(0, _objectValueOf2["default"])(proto, env, objectFactory);

	(0, _objectCreate2["default"])(objectClass, env, objectFactory);
	(0, _objectDefineProperty2["default"])(objectClass, env, objectFactory);
	(0, _objectDefineProperties2["default"])(objectClass, env, objectFactory);
	(0, _objectFreeze2["default"])(objectClass, env, objectFactory);
	(0, _objectGetOwnPropertyDescriptor2["default"])(objectClass, env, objectFactory);
	(0, _objectGetOwnPropertyNames2["default"])(objectClass, env, objectFactory);
	(0, _objectGetPrototypeOf2["default"])(objectClass, env, objectFactory);
	(0, _objectIsExtensible2["default"])(objectClass, env, objectFactory);
	(0, _objectIsFrozen2["default"])(objectClass, env, objectFactory);
	(0, _objectIsSealed2["default"])(objectClass, env, objectFactory);
	(0, _objectKeys2["default"])(objectClass, env, objectFactory);
	(0, _objectPreventExtensions2["default"])(objectClass, env, objectFactory);
	(0, _objectPropertyIsEnumerable2["default"])(proto, env, objectFactory);
	(0, _objectSeal2["default"])(objectClass, env, objectFactory);

	// function is an object - make sure that it is in the prototype chain
	globalObject.getValue("Function").getPrototype().setPrototype(proto);
	globalObject.define("Object", objectClass);
}

module.exports = exports["default"];

},{"../../types/object-type":302,"./object.create":180,"./object.define-properties":181,"./object.define-property":182,"./object.freeze":183,"./object.get-own-property-descriptor":184,"./object.get-own-property-names":185,"./object.get-prototype-of":186,"./object.has-own-property":187,"./object.is-extensible":188,"./object.is-frozen":189,"./object.is-prototype-of":190,"./object.is-sealed":191,"./object.keys":192,"./object.prevent-extensions":193,"./object.property-is-enumerable":194,"./object.seal":195,"./object.to-string":196,"./object.value-of":197,"babel-runtime/helpers/interop-require-default":24}],179:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.defineProperty = defineProperty;
exports.confirmObject = confirmObject;
exports.getOwnPropertyDescriptor = getOwnPropertyDescriptor;
var marked0$0 = [defineProperty, getOwnPropertyDescriptor].map(_regeneratorRuntime.mark);

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _typesPrimitiveType = require("../../types/primitive-type");

function getOptions(obj) {
	return obj[_Symbol$for("env")].options;
}

function defineProperty(env, obj, key, descriptor) {
	var throwOnError = arguments.length <= 4 || arguments[4] === undefined ? true : arguments[4];
	var stringValue, options;
	return _regeneratorRuntime.wrap(function defineProperty$(context$1$0) {
		var _this2 = this;

		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if ((0, _utilsContracts.isObject)(descriptor)) {
					context$1$0.next = 5;
					break;
				}

				context$1$0.next = 3;
				return (0, _utilsNative.toString)(descriptor);

			case 3:
				stringValue = context$1$0.sent;
				throw TypeError("Property description must be an object: " + stringValue);

			case 5:
				options = _Object$create(null);

				if (!descriptor) {
					context$1$0.next = 8;
					break;
				}

				return context$1$0.delegateYield(_regeneratorRuntime.mark(function callee$1$0() {
					var hasValue, hasGetter, hasSetter, currentScope;
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						var _this = this;

						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								hasValue = descriptor.has("value");
								hasGetter = descriptor.has("get");
								hasSetter = descriptor.has("set");

								if (!((hasValue || descriptor.has("writable")) && (hasGetter || hasSetter))) {
									context$2$0.next = 5;
									break;
								}

								throw TypeError("Invalid property. A property cannot both have accessors and be writable or have a value");

							case 5:

								["writable", "enumerable", "configurable"].forEach(function (prop) {
									if (descriptor.has(prop)) {
										var attrValue = descriptor.getValue(prop);
										options[prop] = (0, _utilsNative.toBoolean)(attrValue);
									}
								});

								currentScope = env.current.scope;

								if (!hasGetter) {
									context$2$0.next = 9;
									break;
								}

								return context$2$0.delegateYield(_regeneratorRuntime.mark(function callee$2$0() {
									var getter, stringValue;
									return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
										while (1) switch (context$3$0.prev = context$3$0.next) {
											case 0:
												getter = descriptor.getValue("get") || _typesPrimitiveType.UNDEFINED;

												if (!(getter.isPrimitive && getter.value === undefined)) {
													context$3$0.next = 5;
													break;
												}

												options.get = options.getter = undefined;
												context$3$0.next = 12;
												break;

											case 5:
												if (!(getter.className !== "Function")) {
													context$3$0.next = 10;
													break;
												}

												context$3$0.next = 8;
												return (0, _utilsNative.toString)(getter);

											case 8:
												stringValue = context$3$0.sent;
												throw TypeError("Getter must be a function: " + stringValue);

											case 10:

												options.get = getter;
												options.getter = _regeneratorRuntime.mark(function callee$3$0() {
													var scope, thisArg;
													return _regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
														while (1) switch (context$4$0.prev = context$4$0.next) {
															case 0:
																scope = env.setScope(currentScope);
																thisArg = getter.isStrict() ? this : (0, _utilsNative.toObject)(env, this);
																context$4$0.next = 4;
																return scope.use(_regeneratorRuntime.mark(function callee$4$0() {
																	return _regeneratorRuntime.wrap(function callee$4$0$(context$5$0) {
																		while (1) switch (context$5$0.prev = context$5$0.next) {
																			case 0:
																				context$5$0.next = 2;
																				return getter.call(thisArg) || _typesPrimitiveType.UNDEFINED;

																			case 2:
																				return context$5$0.abrupt("return", context$5$0.sent);

																			case 3:
																			case "end":
																				return context$5$0.stop();
																		}
																	}, callee$4$0, this);
																}));

															case 4:
																return context$4$0.abrupt("return", context$4$0.sent);

															case 5:
															case "end":
																return context$4$0.stop();
														}
													}, callee$3$0, this);
												});

											case 12:
											case "end":
												return context$3$0.stop();
										}
									}, callee$2$0, _this);
								})(), "t0", 9);

							case 9:
								if (!hasSetter) {
									context$2$0.next = 11;
									break;
								}

								return context$2$0.delegateYield(_regeneratorRuntime.mark(function callee$2$0() {
									var setter, stringValue;
									return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
										while (1) switch (context$3$0.prev = context$3$0.next) {
											case 0:
												setter = descriptor.getValue("set") || _typesPrimitiveType.UNDEFINED;

												if (!(setter.isPrimitive && setter.value === undefined)) {
													context$3$0.next = 5;
													break;
												}

												options.set = options.setter = undefined;
												context$3$0.next = 12;
												break;

											case 5:
												if (!(setter.className !== "Function")) {
													context$3$0.next = 10;
													break;
												}

												context$3$0.next = 8;
												return (0, _utilsNative.toString)(setter);

											case 8:
												stringValue = context$3$0.sent;
												throw TypeError("Setter must be a function: " + stringValue);

											case 10:

												options.set = setter;
												options.setter = _regeneratorRuntime.mark(function callee$3$0(value) {
													var scope, thisArg;
													return _regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
														while (1) switch (context$4$0.prev = context$4$0.next) {
															case 0:
																scope = env.setScope(currentScope);
																thisArg = setter.isStrict() ? this : (0, _utilsNative.toObject)(env, this);
																context$4$0.next = 4;
																return scope.use(_regeneratorRuntime.mark(function callee$4$0() {
																	return _regeneratorRuntime.wrap(function callee$4$0$(context$5$0) {
																		while (1) switch (context$5$0.prev = context$5$0.next) {
																			case 0:
																				context$5$0.next = 2;
																				return setter.call(thisArg, [value]);

																			case 2:
																				return context$5$0.abrupt("return", _typesPrimitiveType.UNDEFINED);

																			case 3:
																			case "end":
																				return context$5$0.stop();
																		}
																	}, callee$4$0, this);
																}));

															case 4:
																return context$4$0.abrupt("return", context$4$0.sent);

															case 5:
															case "end":
																return context$4$0.stop();
														}
													}, callee$3$0, this);
												});

											case 12:
											case "end":
												return context$3$0.stop();
										}
									}, callee$2$0, _this);
								})(), "t1", 11);

							case 11:

								if (hasValue) {
									options.value = descriptor.getValue("value") || _typesPrimitiveType.UNDEFINED;
								}

							case 12:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, _this2);
				})(), "t0", 8);

			case 8:
				return context$1$0.abrupt("return", obj.defineOwnProperty(key, options, throwOnError, env));

			case 9:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function confirmObject(obj, methodName) {
	if ((0, _utilsContracts.isObject)(obj)) {
		return true;
	}

	if (getOptions(obj).ecmaVersion > 5) {
		return false;
	}

	throw TypeError(methodName + " called on non-object");
}

function getOwnPropertyDescriptor(env, target, propertyKey) {
	var key, descriptor, result;
	return _regeneratorRuntime.wrap(function getOwnPropertyDescriptor$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _utilsNative.toPropertyKey)(propertyKey);

			case 2:
				key = context$1$0.sent;
				descriptor = target.getOwnProperty(key);

				if (!descriptor) {
					context$1$0.next = 10;
					break;
				}

				result = env.objectFactory.createObject();

				if (descriptor.dataProperty) {
					result.setValue("value", descriptor.value);
					result.setValue("writable", env.objectFactory.createPrimitive(descriptor.writable));
				} else {
					result.setValue("get", descriptor.get || _typesPrimitiveType.UNDEFINED);
					result.setValue("set", descriptor.set || _typesPrimitiveType.UNDEFINED);
				}

				result.setValue("enumerable", env.objectFactory.createPrimitive(descriptor.enumerable));
				result.setValue("configurable", env.objectFactory.createPrimitive(descriptor.configurable));
				return context$1$0.abrupt("return", result);

			case 10:
				return context$1$0.abrupt("return", _typesPrimitiveType.UNDEFINED);

			case 11:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

// we only keep a copy of the original getter/setter for use with `getOwnPropertyDescriptor`

},{"../../types/primitive-type":303,"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/core-js/object/create":8,"babel-runtime/core-js/symbol/for":16,"babel-runtime/regenerator":26}],180:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("create", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(parent, descriptors) {
		var stringValue, obj, prop;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (!(parent && parent.isPrimitive && parent.value !== null)) {
						context$2$0.next = 5;
						break;
					}

					context$2$0.next = 3;
					return (0, _utilsNative.toString)(parent);

				case 3:
					stringValue = context$2$0.sent;
					throw TypeError("Object prototype may only be an Object or null: " + stringValue);

				case 5:
					if (!(descriptors && descriptors.isPrimitive && descriptors.value === null)) {
						context$2$0.next = 7;
						break;
					}

					throw TypeError("Cannot convert null or undefined to object");

				case 7:
					obj = factory.createObject();

					if (parent) {
						obj.setPrototype(parent);
					}

					if (!descriptors) {
						context$2$0.next = 18;
						break;
					}

					context$2$0.t0 = _regeneratorRuntime.keys(descriptors.properties);

				case 11:
					if ((context$2$0.t1 = context$2$0.t0()).done) {
						context$2$0.next = 18;
						break;
					}

					prop = context$2$0.t1.value;

					if (!descriptors.properties[prop].enumerable) {
						context$2$0.next = 16;
						break;
					}

					context$2$0.next = 16;
					return (0, _objectHelpers.defineProperty)(env, obj, prop, descriptors.getValue(prop));

				case 16:
					context$2$0.next = 11;
					break;

				case 18:
					return context$2$0.abrupt("return", obj);

				case 19:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Object.create"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"./object-helpers":179,"babel-runtime/regenerator":26}],181:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("defineProperties", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(obj, descriptors) {
		var prop;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsObject)(obj, "Object.defineProperties");
					(0, _utilsContracts.assertArgIsNotNullOrUndefined)(descriptors);

					context$2$0.t0 = _regeneratorRuntime.keys(descriptors.properties);

				case 3:
					if ((context$2$0.t1 = context$2$0.t0()).done) {
						context$2$0.next = 10;
						break;
					}

					prop = context$2$0.t1.value;

					if (!descriptors.properties[prop].enumerable) {
						context$2$0.next = 8;
						break;
					}

					context$2$0.next = 8;
					return (0, _objectHelpers.defineProperty)(env, obj, prop, descriptors.getValue(prop));

				case 8:
					context$2$0.next = 3;
					break;

				case 10:
					return context$2$0.abrupt("return", obj);

				case 11:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Object.defineProperties"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"./object-helpers":179,"babel-runtime/regenerator":26}],182:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("defineProperty", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(obj, propertyKey, descriptor) {
		var key;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsObject)(obj, "Object.defineProperty");
					context$2$0.next = 3;
					return (0, _utilsNative.toPropertyKey)(propertyKey);

				case 3:
					key = context$2$0.sent;
					context$2$0.next = 6;
					return (0, _objectHelpers.defineProperty)(env, obj, key, descriptor);

				case 6:
					return context$2$0.abrupt("return", obj);

				case 7:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 3, "Object.defineProperty"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"./object-helpers":179,"babel-runtime/regenerator":26}],183:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("freeze", factory.createBuiltInFunction(function (obj) {
		if ((0, _objectHelpers.confirmObject)(obj, "Object.freeze")) {
			obj.freeze();
		}

		return obj;
	}, 1, "Object.freeze"));
};

module.exports = exports["default"];

},{"./object-helpers":179}],184:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("getOwnPropertyDescriptor", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(obj, key) {
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(obj, "Object.getOwnPropertyDescriptor");
					(0, _objectHelpers.confirmObject)(obj, "Object.getOwnPropertyDescriptor");

					context$2$0.next = 4;
					return (0, _objectHelpers.getOwnPropertyDescriptor)(env, obj, key);

				case 4:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 5:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Object.getOwnPropertyDescriptor"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"./object-helpers":179,"babel-runtime/regenerator":26}],185:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("getOwnPropertyNames", factory.createBuiltInFunction(function (obj) {
		(0, _utilsContracts.assertIsObject)(obj, "Object.getOwnPropertyNames");

		var arr = factory.createArray();
		obj.getOwnPropertyKeys().forEach(function (name, index) {
			arr.setValue(index, factory.createPrimitive(name));
		});

		return arr;
	}, 1, "Object.getOwnPropertyNames"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311}],186:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _typesPrimitiveType = require("../../types/primitive-type");

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("getPrototypeOf", factory.createBuiltInFunction(function (obj) {
		if (!(0, _objectHelpers.confirmObject)(obj, "Object.getPrototypeOf")) {
			obj = (0, _utilsNative.toObject)(env, obj, true);
		}

		var objProto = obj.getPrototype();
		return objProto || _typesPrimitiveType.NULL;
	}, 1, "Object.getPrototypeOf"));
};

module.exports = exports["default"];

},{"../../types/primitive-type":303,"../../utils/native":313,"./object-helpers":179}],187:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("hasOwnProperty", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(key) {
		var k;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Object.prototype.hasOwnProperty");
					context$2$0.next = 3;
					return (0, _utilsNative.toPropertyKey)(key);

				case 3:
					k = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(this.node.owns(k)));

				case 5:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Object.prototype.hasOwnProperty"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],188:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("isExtensible", factory.createBuiltInFunction(function (obj) {
		if (!(0, _objectHelpers.confirmObject)(obj, "Object.isExtensible")) {
			return factory.createPrimitive(false);
		}

		return factory.createPrimitive(obj.isExtensible());
	}, 1, "Object.isExtensible"));
};

module.exports = exports["default"];

},{"./object-helpers":179}],189:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("isFrozen", factory.createBuiltInFunction(function (obj) {
		if (!(0, _objectHelpers.confirmObject)(obj, "Object.isFrozen")) {
			return factory.createPrimitive(true);
		}

		if (obj.isPrimitive) {
			return factory.createPrimitive(true);
		}

		if (!obj.extensible) {
			for (var prop in obj.properties) {
				if (obj.properties[prop].writable || obj.properties[prop].configurable) {
					return factory.createPrimitive(false);
				}
			}
		}

		return factory.createPrimitive(!obj.extensible);
	}, 1, "Object.isFrozen"));
};

module.exports = exports["default"];

},{"./object-helpers":179}],190:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("isPrototypeOf", factory.createBuiltInFunction(function (obj) {
		(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Object.isPrototypeOf");

		var current = obj;
		while (current) {
			if (this.node === current) {
				return factory.createPrimitive(true);
			}

			current = current.getPrototype();
		}

		return factory.createPrimitive(false);
	}, 1, "Object.isPrototypeOf"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311}],191:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("isSealed", factory.createBuiltInFunction(function (obj) {
		if (!(0, _objectHelpers.confirmObject)(obj, "Object.isSealed")) {
			return factory.createPrimitive(true);
		}

		if (!obj.extensible) {
			for (var prop in obj.properties) {
				if (obj.properties[prop].configurable) {
					return factory.createPrimitive(false);
				}
			}
		}

		return factory.createPrimitive(!obj.extensible);
	}, 1, "Object.isSealed"));
};

module.exports = exports["default"];

},{"./object-helpers":179}],192:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("keys", factory.createBuiltInFunction(function (obj) {
		(0, _utilsContracts.assertIsObject)(obj);

		var arr = factory.createArray();
		var index = 0;

		obj.getOwnPropertyKeys().forEach(function (key) {
			if (typeof key === "string") {
				var propInfo = obj.getProperty(key);
				if (propInfo && propInfo.enumerable) {
					arr.setValue(index++, factory.createPrimitive(key));
				}
			}
		});

		return arr;
	}, 1, "Object.keys"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311}],193:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("preventExtensions", factory.createBuiltInFunction(function (obj) {
		if ((0, _objectHelpers.confirmObject)(obj, "Object.preventExtensions")) {
			obj.preventExtensions();
		}

		return obj;
	}, 1, "Object.preventExtensions"));
};

module.exports = exports["default"];

},{"./object-helpers":179}],194:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("propertyIsEnumerable", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(key) {
		var k, descriptor;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Object.propertyIsEnumerable");

					context$2$0.next = 3;
					return (0, _utilsNative.toPropertyKey)(key);

				case 3:
					k = context$2$0.sent;
					descriptor = this.node.getOwnProperty(k);
					return context$2$0.abrupt("return", factory.createPrimitive(!!(descriptor && descriptor.enumerable)));

				case 6:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Object.propertyIsEnumerable"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],195:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectHelpers = require("./object-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("seal", factory.createBuiltInFunction(function (obj) {
		if ((0, _objectHelpers.confirmObject)(obj, "Object.seal")) {
			obj.seal();
		}

		return obj;
	}, 1, "Object.seal"));
};

module.exports = exports["default"];

},{"./object-helpers":179}],196:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function ($target, env, factory) {
	var toStringFunc = factory.createBuiltInFunction(function () {
		var className = this.node ? this.node.className : "Undefined";
		return factory.createPrimitive("[object " + className + "]");
	}, 0, "Object.prototype.toString");

	// Object.prototype.toString === Object.prototype.toLocaleString
	$target.define("toString", toStringFunc);
	$target.define("toLocaleString", toStringFunc);
};

module.exports = exports["default"];

},{}],197:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("valueOf", factory.createBuiltInFunction(function () {
		return (0, _utilsNative.toObject)(env, this.node, true);
	}, 0, "Object.prototype.valueOf"));
};

module.exports = exports["default"];

},{"../../utils/native":313}],198:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _regexExec = require("./regex.exec");

var _regexExec2 = _interopRequireDefault(_regexExec);

var _regexTest = require("./regex.test");

var _regexTest2 = _interopRequireDefault(_regexTest);

var _regexToString = require("./regex.to-string");

var _regexToString2 = _interopRequireDefault(_regexToString);

exports["default"] = function (env) {
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	var proto = objectFactory.createObject();
	proto.className = "RegExp";

	var regexClass = objectFactory.createFunction(_regeneratorRuntime.mark(function callee$1$0(pattern, flags) {
		var patternString;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (!(pattern && pattern.className === "RegExp")) {
						context$2$0.next = 4;
						break;
					}

					if (!(0, _utilsContracts.isUndefined)(flags)) {
						context$2$0.next = 3;
						break;
					}

					return context$2$0.abrupt("return", pattern);

				case 3:
					throw TypeError("Cannot supply flags when constructing one RegExp from another");

				case 4:
					if (!(0, _utilsContracts.isUndefined)(pattern)) {
						context$2$0.next = 8;
						break;
					}

					context$2$0.t0 = "";
					context$2$0.next = 11;
					break;

				case 8:
					context$2$0.next = 10;
					return (0, _utilsNative.toString)(pattern);

				case 10:
					context$2$0.t0 = context$2$0.sent;

				case 11:
					patternString = context$2$0.t0;

					if (!(0, _utilsContracts.isUndefined)(flags)) {
						context$2$0.next = 16;
						break;
					}

					context$2$0.t1 = "";
					context$2$0.next = 19;
					break;

				case 16:
					context$2$0.next = 18;
					return (0, _utilsNative.toString)(flags);

				case 18:
					context$2$0.t1 = context$2$0.sent;

				case 19:
					flags = context$2$0.t1;
					return context$2$0.abrupt("return", objectFactory.create("RegExp", new RegExp(patternString, flags)));

				case 21:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), proto, { configurable: false, enumerable: false, writable: false });

	(0, _regexExec2["default"])(proto, env, objectFactory);
	(0, _regexTest2["default"])(proto, env, objectFactory);
	(0, _regexToString2["default"])(proto, env, objectFactory);

	proto.define("compile", (0, _utilsNative.toNativeFunction)(env, RegExp.prototype.compile, "RegExp.prototype.compile"));
	proto.defineOwnProperty("lastIndex", { value: objectFactory.createPrimitive(0), writable: true });

	["global", "ignoreCase", "multiline", "source"].forEach(function (name) {
		proto.defineOwnProperty(name, { value: objectFactory.createPrimitive(RegExp.prototype[name]) });
	});

	globalObject.define("RegExp", regexClass);
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"./regex.exec":199,"./regex.test":200,"./regex.to-string":201,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],199:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _typesPrimitiveType = require("../../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	$target.define("exec", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(str) {
		var stringValue, match, arr, i, ln;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(str);

				case 2:
					stringValue = context$2$0.sent;
					context$2$0.next = 5;
					return (0, _utilsNative.toInt32)(this.node.getValue("lastIndex"));

				case 5:
					this.node.source.lastIndex = context$2$0.sent;
					match = this.node.source.exec(stringValue);

					// update the last index from the underlying regex
					this.node.setValue("lastIndex", factory.createPrimitive(this.node.source.lastIndex));

					if (!match) {
						context$2$0.next = 14;
						break;
					}

					arr = factory.createArray();

					for (i = 0, ln = match.length; i < ln; i++) {
						arr.setValue(i, factory.createPrimitive(match[i]));
					}

					// extra properties are added to the array
					arr.setValue("index", factory.createPrimitive(match.index));
					arr.setValue("input", factory.createPrimitive(match.input));
					return context$2$0.abrupt("return", arr);

				case 14:
					return context$2$0.abrupt("return", _typesPrimitiveType.NULL);

				case 15:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "RegExp.prototype.exec"));
};

module.exports = exports["default"];

// update underlying regex in case the index was manually updated

// get match from underlying regex

},{"../../types/primitive-type":303,"../../utils/native":313,"babel-runtime/regenerator":26}],200:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("test", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(str) {
		var stringValue, testValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(str);

				case 2:
					stringValue = context$2$0.sent;
					context$2$0.next = 5;
					return (0, _utilsNative.toInt32)(this.node.getValue("lastIndex"));

				case 5:
					this.node.source.lastIndex = context$2$0.sent;
					testValue = this.node.source.test(stringValue);

					this.node.setValue("lastIndex", factory.createPrimitive(this.node.source.lastIndex));

					return context$2$0.abrupt("return", factory.createPrimitive(testValue));

				case 9:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "RegExp.prototype.test"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"babel-runtime/regenerator":26}],201:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function ($target, env, factory) {
	$target.define("toString", factory.createBuiltInFunction(function () {
		return factory.createPrimitive(String(this.node.source));
	}, 0, "RegExp.prototype.toString"));
};

module.exports = exports["default"];

},{}],202:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsAsync = require("../../utils/async");

var _stringFromCharCode = require("./string.from-char-code");

var _stringFromCharCode2 = _interopRequireDefault(_stringFromCharCode);

var _stringConcat = require("./string.concat");

var _stringConcat2 = _interopRequireDefault(_stringConcat);

var _stringMatch = require("./string.match");

var _stringMatch2 = _interopRequireDefault(_stringMatch);

var _stringReplace = require("./string.replace");

var _stringReplace2 = _interopRequireDefault(_stringReplace);

var _stringSearch = require("./string.search");

var _stringSearch2 = _interopRequireDefault(_stringSearch);

var _stringSlice = require("./string.slice");

var _stringSlice2 = _interopRequireDefault(_stringSlice);

var _stringSplit = require("./string.split");

var _stringSplit2 = _interopRequireDefault(_stringSplit);

var _stringSubstring = require("./string.substring");

var _stringSubstring2 = _interopRequireDefault(_stringSubstring);

var _stringToString = require("./string.to-string");

var _stringToString2 = _interopRequireDefault(_stringToString);

var _stringTrim = require("./string.trim");

var _stringTrim2 = _interopRequireDefault(_stringTrim);

var _stringValueOf = require("./string.value-of");

var _stringValueOf2 = _interopRequireDefault(_stringValueOf);

exports["default"] = function (env) {
	var marked1$0 = [getString].map(_regeneratorRuntime.mark);
	var globalObject = env.global;
	var objectFactory = env.objectFactory;

	function getString(value, isNew) {
		return _regeneratorRuntime.wrap(function getString$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (value) {
						context$2$0.next = 2;
						break;
					}

					return context$2$0.abrupt("return", "");

				case 2:
					if (!(!isNew && value.isSymbol)) {
						context$2$0.next = 4;
						break;
					}

					return context$2$0.abrupt("return", "Symbol(" + value.description + ")");

				case 4:
					context$2$0.next = 6;
					return (0, _utilsNative.toString)(value.getValue());

				case 6:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 7:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[0], this);
	}

	var proto = objectFactory.createObject();

	// prototype can be coerced into an empty string
	proto.value = "";
	proto.className = "String";
	proto.defineOwnProperty("length", { value: objectFactory.createPrimitive(0) });

	var stringClass = objectFactory.createFunction(_regeneratorRuntime.mark(function callee$1$0(value) {
		var stringValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return getString(value, this.isNew);

				case 2:
					stringValue = context$2$0.sent;

					if (!this.isNew) {
						context$2$0.next = 5;
						break;
					}

					return context$2$0.abrupt("return", (0, _utilsNative.primitiveToObject)(env, stringValue));

				case 5:
					return context$2$0.abrupt("return", objectFactory.createPrimitive(stringValue));

				case 6:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), proto, { configurable: false, enumerable: false, writable: false });

	(0, _stringFromCharCode2["default"])(stringClass, env, objectFactory);

	(0, _stringConcat2["default"])(proto, env, objectFactory);
	(0, _stringMatch2["default"])(proto, env, objectFactory);
	(0, _stringReplace2["default"])(proto, env, objectFactory);
	(0, _stringSearch2["default"])(proto, env, objectFactory);
	(0, _stringSlice2["default"])(proto, env, objectFactory);
	(0, _stringSplit2["default"])(proto, env, objectFactory);
	(0, _stringSubstring2["default"])(proto, env, objectFactory);
	(0, _stringToString2["default"])(proto, env, objectFactory);
	(0, _stringTrim2["default"])(proto, env, objectFactory);
	(0, _stringValueOf2["default"])(proto, env, objectFactory);

	["charAt", "charCodeAt", "indexOf", "lastIndexOf", "localeCompare", "substr", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase"].forEach(function (name) {
		proto.define(name, objectFactory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$2$0() {
			var stringValue,
			    args,
			    args$3$0 = arguments;
			return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						context$3$0.next = 2;
						return (0, _utilsNative.toString)(this.node);

					case 2:
						stringValue = context$3$0.sent;
						return context$3$0.delegateYield((0, _utilsAsync.map)(args$3$0, _regeneratorRuntime.mark(function callee$3$0(arg) {
							return _regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
								while (1) switch (context$4$0.prev = context$4$0.next) {
									case 0:
										context$4$0.next = 2;
										return (0, _utilsNative.toPrimitive)(arg);

									case 2:
										return context$4$0.abrupt("return", context$4$0.sent);

									case 3:
									case "end":
										return context$4$0.stop();
								}
							}, callee$3$0, this);
						})), "t0", 4);

					case 4:
						args = context$3$0.t0;
						return context$3$0.abrupt("return", objectFactory.createPrimitive(String.prototype[name].apply(stringValue, args)));

					case 6:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		}), String.prototype[name].length, "String.prototype." + name));
	});

	globalObject.define("String", stringClass);
};

module.exports = exports["default"];

// called as new

},{"../../utils/async":310,"../../utils/native":313,"./string.concat":203,"./string.from-char-code":204,"./string.match":205,"./string.replace":206,"./string.search":207,"./string.slice":208,"./string.split":209,"./string.substring":210,"./string.to-string":211,"./string.trim":212,"./string.value-of":213,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],203:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

var _utilsAsync = require("../../utils/async");

exports["default"] = function ($target, env, factory) {
	$target.define("concat", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var stringValue, values;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.prototype.concat");

					context$2$0.next = 3;
					return (0, _utilsNative.toString)(this.node);

				case 3:
					stringValue = context$2$0.sent;
					values = [stringValue];
					context$2$0.t0 = values;
					context$2$0.next = 8;
					return (0, _utilsAsync.map)(args, _regeneratorRuntime.mark(function callee$2$0(arg) {
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									context$3$0.next = 2;
									return (0, _utilsNative.toString)(arg);

								case 2:
									return context$3$0.abrupt("return", context$3$0.sent);

								case 3:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, this);
					}));

				case 8:
					context$2$0.t1 = context$2$0.sent;
					values = context$2$0.t0.concat.call(context$2$0.t0, context$2$0.t1);
					return context$2$0.abrupt("return", factory.createPrimitive(values.join("")));

				case 11:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.prototype.concat"));
};

module.exports = exports["default"];

},{"../../utils/async":310,"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],204:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../../utils/async");

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("fromCharCode", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		for (var _len = arguments.length, charCodes = Array(_len), _key = 0; _key < _len; _key++) {
			charCodes[_key] = arguments[_key];
		}

		var args;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					return context$2$0.delegateYield((0, _utilsAsync.map)(charCodes, _regeneratorRuntime.mark(function callee$2$0(arg) {
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									context$3$0.next = 2;
									return (0, _utilsNative.toPrimitive)(arg);

								case 2:
									return context$3$0.abrupt("return", context$3$0.sent);

								case 3:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, this);
					})), "t0", 1);

				case 1:
					args = context$2$0.t0;
					return context$2$0.abrupt("return", factory.createPrimitive(String.fromCharCode.apply(null, args)));

				case 3:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.fromCharCode"));
};

module.exports = exports["default"];

},{"../../utils/async":310,"../../utils/native":313,"babel-runtime/regenerator":26}],205:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../../types/primitive-type");

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("match", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(regex) {
		var stringValue, actualRegex, match, _ret;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(this.node);

				case 2:
					stringValue = context$2$0.sent;
					actualRegex = undefined;

					if (!(regex && regex.className === "RegExp")) {
						context$2$0.next = 8;
						break;
					}

					actualRegex = regex.source;
					context$2$0.next = 14;
					break;

				case 8:
					if (!regex) {
						context$2$0.next = 14;
						break;
					}

					context$2$0.t0 = RegExp;
					context$2$0.next = 12;
					return (0, _utilsNative.toPrimitive)(regex);

				case 12:
					context$2$0.t1 = context$2$0.sent;
					actualRegex = new context$2$0.t0(context$2$0.t1);

				case 14:
					match = stringValue.match(actualRegex);

					if (!match) {
						context$2$0.next = 19;
						break;
					}

					_ret = (function () {
						var matches = factory.createArray();

						match.forEach(function (value, index) {
							matches.setValue(index, factory.createPrimitive(value));
						});

						matches.setValue("index", factory.createPrimitive(match.index));
						matches.setValue("input", factory.createPrimitive(match.input));
						return {
							v: matches
						};
					})();

					if (!(typeof _ret === "object")) {
						context$2$0.next = 19;
						break;
					}

					return context$2$0.abrupt("return", _ret.v);

				case 19:
					return context$2$0.abrupt("return", _typesPrimitiveType.NULL);

				case 20:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.prototype.match"));
};

module.exports = exports["default"];

},{"../../types/primitive-type":303,"../../utils/native":313,"babel-runtime/regenerator":26}],206:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _typesSymbolType = require("../../types/symbol-type");

var _typesPrimitiveType = require("../../types/primitive-type");

var _utilsNative = require("../../utils/native");

var _utilsAsync = require("../../utils/async");

exports["default"] = function ($target, env, factory) {
	function getMethod(obj, key) {
		var propInfo = obj.getProperty(key);
		if (!propInfo) {
			return null;
		}

		var method = propInfo.getValue();
		if (method.type !== "function") {
			throw TypeError(key + " is not a method");
		}

		return method;
	}

	$target.define("replace", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(regexOrSubstr, substrOrFn) {
		var replaceKey, replaceMethod, stringValue, matcher, replacer;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.prototype.replace");

					replaceKey = _typesSymbolType.SymbolType.getByKey("replace");

					if (!(replaceKey && !(0, _utilsContracts.isNullOrUndefined)(regexOrSubstr))) {
						context$2$0.next = 8;
						break;
					}

					replaceMethod = getMethod(regexOrSubstr, replaceKey);

					if (!replaceMethod) {
						context$2$0.next = 8;
						break;
					}

					context$2$0.next = 7;
					return replaceMethod.call(regexOrSubstr, [this.node, substrOrFn]);

				case 7:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 8:
					context$2$0.next = 10;
					return (0, _utilsNative.toString)(this.node);

				case 10:
					stringValue = context$2$0.sent;
					matcher = undefined;

					if (!(regexOrSubstr && regexOrSubstr.className === "RegExp")) {
						context$2$0.next = 16;
						break;
					}

					matcher = regexOrSubstr.source;
					context$2$0.next = 19;
					break;

				case 16:
					context$2$0.next = 18;
					return (0, _utilsNative.toString)(regexOrSubstr);

				case 18:
					matcher = context$2$0.sent;

				case 19:
					replacer = undefined;

					if (!(substrOrFn && substrOrFn.type === "function")) {
						context$2$0.next = 24;
						break;
					}

					replacer = function () {
						var thisArg = substrOrFn.isStrict() || substrOrFn.isStrict() ? _typesPrimitiveType.UNDEFINED : env.global;

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						var mappedArgs = args.map(function (arg) {
							return factory.createPrimitive(arg);
						});
						var replacedValue = (0, _utilsAsync.exhaust)(substrOrFn.call(thisArg, mappedArgs));
						return replacedValue ? (0, _utilsAsync.exhaust)((0, _utilsNative.toString)(replacedValue)) : undefined;
					};
					context$2$0.next = 27;
					break;

				case 24:
					context$2$0.next = 26;
					return (0, _utilsNative.toString)(substrOrFn);

				case 26:
					replacer = context$2$0.sent;

				case 27:
					return context$2$0.abrupt("return", factory.createPrimitive(stringValue.replace(matcher, replacer)));

				case 28:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "String.prototype.replace"));
};

module.exports = exports["default"];

},{"../../types/primitive-type":303,"../../types/symbol-type":308,"../../utils/async":310,"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],207:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("search", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(regex) {
		var stringValue, underlyingRegex;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(this.node);

				case 2:
					stringValue = context$2$0.sent;
					underlyingRegex = undefined;

					if (!regex) {
						context$2$0.next = 14;
						break;
					}

					if (!(regex.className === "RegExp")) {
						context$2$0.next = 9;
						break;
					}

					underlyingRegex = regex.source;
					context$2$0.next = 14;
					break;

				case 9:
					context$2$0.t0 = RegExp;
					context$2$0.next = 12;
					return (0, _utilsNative.toString)(regex);

				case 12:
					context$2$0.t1 = context$2$0.sent;
					underlyingRegex = new context$2$0.t0(context$2$0.t1);

				case 14:
					return context$2$0.abrupt("return", factory.createPrimitive(stringValue.search(underlyingRegex)));

				case 15:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.prototype.search"));
};

module.exports = exports["default"];

},{"../../utils/native":313,"babel-runtime/regenerator":26}],208:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("slice", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(start, end) {
		var stringValue, startValue, endValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(this.node);

				case 2:
					stringValue = context$2$0.sent;
					context$2$0.next = 5;
					return (0, _utilsNative.toInteger)(start);

				case 5:
					startValue = context$2$0.sent;
					endValue = undefined;

					if ((0, _utilsContracts.isNullOrUndefined)(end)) {
						context$2$0.next = 11;
						break;
					}

					context$2$0.next = 10;
					return (0, _utilsNative.toInteger)(end);

				case 10:
					endValue = context$2$0.sent;

				case 11:
					return context$2$0.abrupt("return", factory.createPrimitive(stringValue.slice(startValue, endValue)));

				case 12:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "String.prototype.slice"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],209:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("split", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(separator, limit) {
		var stringValue, limitValue, arr, separatorValue, result;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(this.node);

				case 2:
					stringValue = context$2$0.sent;

					separator = separator && separator.getValue();
					limit = limit && limit.getValue();

					if (!(0, _utilsContracts.isUndefined)(limit)) {
						context$2$0.next = 9;
						break;
					}

					context$2$0.t0 = undefined;
					context$2$0.next = 12;
					break;

				case 9:
					context$2$0.next = 11;
					return (0, _utilsNative.toUInt32)(limit);

				case 11:
					context$2$0.t0 = context$2$0.sent;

				case 12:
					limitValue = context$2$0.t0;
					arr = factory.createArray();

					if (!(0, _utilsContracts.isUndefined)(separator)) {
						context$2$0.next = 18;
						break;
					}

					arr.setValue(0, factory.createPrimitive(stringValue));
					context$2$0.next = 28;
					break;

				case 18:
					separatorValue = undefined;

					if (!(separator.className === "RegExp")) {
						context$2$0.next = 23;
						break;
					}

					separatorValue = separator.source;
					context$2$0.next = 26;
					break;

				case 23:
					context$2$0.next = 25;
					return (0, _utilsNative.toString)(separator);

				case 25:
					separatorValue = context$2$0.sent;

				case 26:
					result = stringValue.split(separatorValue, limitValue);

					result.forEach(function (value, index) {
						arr.setValue(index, factory.createPrimitive(value));
					});

				case 28:
					return context$2$0.abrupt("return", arr);

				case 29:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "String.prototype.split"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],210:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../../utils/native");

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("substring", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(start, end) {
		var value, length;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(this.node);

				case 2:
					value = context$2$0.sent;
					length = value.length;
					context$2$0.next = 6;
					return (0, _utilsNative.toInteger)(start);

				case 6:
					start = context$2$0.sent;

					if (!(0, _utilsContracts.isNullOrUndefined)(end)) {
						context$2$0.next = 11;
						break;
					}

					context$2$0.t0 = length;
					context$2$0.next = 14;
					break;

				case 11:
					context$2$0.next = 13;
					return (0, _utilsNative.toInteger)(end);

				case 13:
					context$2$0.t0 = context$2$0.sent;

				case 14:
					end = context$2$0.t0;
					return context$2$0.abrupt("return", factory.createPrimitive(value.substring(start, end)));

				case 16:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "String.prototype.substring"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],211:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("toString", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsNotGeneric)(this.node, "String", "String.prototype.toString");
		return factory.createPrimitive(this.node.toNative());
	}, 0, "String.prototype.toString"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311}],212:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

var _utilsNative = require("../../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("trim", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		var stringValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.prototype.trim");

					context$2$0.next = 3;
					return (0, _utilsNative.toString)(this.node);

				case 3:
					stringValue = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(stringValue.trim()));

				case 5:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "String.prototype.trim"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311,"../../utils/native":313,"babel-runtime/regenerator":26}],213:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("valueOf", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsNotGeneric)(this.node, "String", "String.prototype.valueOf");
		return factory.createPrimitive(this.node.value);
	}, 0, "String.prototype.valueOf"));
};

module.exports = exports["default"];

},{"../../utils/contracts":311}],214:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.normalizeIndex = normalizeIndex;
exports.executeCallback = executeCallback;
var marked0$0 = [executeCallback].map(_regeneratorRuntime.mark);

var _typesPrimitiveType = require("../types/primitive-type");

function normalizeIndex(index, length) {
	if (index < 0) {
		return Math.max(length + index, 0);
	}

	return Math.min(index, length);
}

function executeCallback(env, callback, entry, thisArg, arr) {
	var scope, args;
	return _regeneratorRuntime.wrap(function executeCallback$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!thisArg) {
					thisArg = callback.isStrict() ? _typesPrimitiveType.UNDEFINED : env.global;
				}

				scope = env.createExecutionScope(callback, thisArg);

				scope.init(callback.node.body);

				args = [entry.value, env.objectFactory.createPrimitive(entry.key), arr];
				context$1$0.next = 6;
				return callback.call(thisArg, args) || _typesPrimitiveType.UNDEFINED;

			case 6:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

// yield scope.loadArgs(callback.node.params, args, callback);

// return yield scope.use(function* () {
// 	let executionResult = yield env.createExecutionContext(callback.node.body, callback.node).execute();
// 	if (executionResult && executionResult.exit) {
// 		return executionResult.result || UNDEFINED;
// 	}

// 	return UNDEFINED;
// });

},{"../types/primitive-type":303,"babel-runtime/regenerator":26}],215:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("copyWithin", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(target, start, end) {
		var arr, length, to, from, final, count, dir;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					arr = (0, _utilsNative.toObject)(env, this.node);
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(arr);

				case 3:
					length = context$2$0.sent;
					context$2$0.next = 6;
					return (0, _utilsNative.toInteger)(target);

				case 6:
					context$2$0.t0 = context$2$0.sent;
					context$2$0.t1 = length;
					to = (0, _arrayHelpers.normalizeIndex)(context$2$0.t0, context$2$0.t1);
					context$2$0.next = 11;
					return (0, _utilsNative.toInteger)(start);

				case 11:
					context$2$0.t2 = context$2$0.sent;
					context$2$0.t3 = length;
					from = (0, _arrayHelpers.normalizeIndex)(context$2$0.t2, context$2$0.t3);

					if (!(0, _utilsContracts.isUndefined)(end)) {
						context$2$0.next = 18;
						break;
					}

					context$2$0.t4 = length;
					context$2$0.next = 23;
					break;

				case 18:
					context$2$0.next = 20;
					return (0, _utilsNative.toInteger)(end);

				case 20:
					context$2$0.t5 = context$2$0.sent;
					context$2$0.t6 = length;
					context$2$0.t4 = (0, _arrayHelpers.normalizeIndex)(context$2$0.t5, context$2$0.t6);

				case 23:
					final = context$2$0.t4;
					count = Math.min(final - from, length - to);
					dir = 1;

					if (from < to && to < from + count) {
						dir = -1;
						from = from + count - 1;
						to = to + count - 1;
					}

					while (count > 0) {
						if (arr.has(from)) {
							arr.setValue(to, arr.getValue(from));
						} else {
							arr.deleteProperty(to, true);
						}

						from += dir;
						to += dir;
						count--;
					}

					return context$2$0.abrupt("return", arr);

				case 29:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Array.prototype.copyWithin"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"./array-helpers":214,"babel-runtime/regenerator":26}],216:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

var _utilsContracts = require("../utils/contracts");

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("fill", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value, start, end) {
		var arr, length, k, final;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					arr = (0, _utilsNative.toObject)(env, this.node);
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(arr);

				case 3:
					length = context$2$0.sent;

					if (!start) {
						context$2$0.next = 10;
						break;
					}

					context$2$0.next = 7;
					return (0, _utilsNative.toInteger)(start);

				case 7:
					context$2$0.t0 = context$2$0.sent;
					context$2$0.next = 11;
					break;

				case 10:
					context$2$0.t0 = 0;

				case 11:
					k = context$2$0.t0;

					if (!(0, _utilsContracts.isUndefined)(end)) {
						context$2$0.next = 16;
						break;
					}

					context$2$0.t1 = length;
					context$2$0.next = 19;
					break;

				case 16:
					context$2$0.next = 18;
					return (0, _utilsNative.toInteger)(end);

				case 18:
					context$2$0.t1 = context$2$0.sent;

				case 19:
					final = context$2$0.t1;

					k = (0, _arrayHelpers.normalizeIndex)(k, length);
					final = (0, _arrayHelpers.normalizeIndex)(final, length);

					while (k < final) {
						arr.setValue(k++, value);
					}

					return context$2$0.abrupt("return", arr);

				case 24:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Array.prototype.fill"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"./array-helpers":214,"babel-runtime/regenerator":26}],217:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

var _typesPrimitiveType = require("../types/primitive-type");

var _arrayHelpers = require("./array-helpers");

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("findIndex", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(predicate, thisArg) {
		var length, i, propInfo, value, passed;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Array.prototype.findIndex");

					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(this.node);

				case 3:
					length = context$2$0.sent;

					(0, _utilsContracts.assertIsFunction)(predicate, "predicate");

					i = 0;

				case 6:
					if (!(i < length)) {
						context$2$0.next = 18;
						break;
					}

					propInfo = this.node.getProperty(i);
					value = propInfo ? propInfo.getValue() : _typesPrimitiveType.UNDEFINED;
					context$2$0.next = 11;
					return (0, _arrayHelpers.executeCallback)(env, predicate, { key: i, value: value }, thisArg, this.node);

				case 11:
					context$2$0.t0 = context$2$0.sent;
					passed = (0, _utilsNative.toBoolean)(context$2$0.t0);

					if (!passed) {
						context$2$0.next = 15;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(i));

				case 15:

					i++;
					context$2$0.next = 6;
					break;

				case 18:
					return context$2$0.abrupt("return", factory.createPrimitive(-1));

				case 19:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Array.prototype.findIndex"));
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../utils/contracts":311,"../utils/native":313,"./array-helpers":214,"babel-runtime/regenerator":26}],218:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

var _utilsContracts = require("../utils/contracts");

var _typesPrimitiveType = require("../types/primitive-type");

var _arrayHelpers = require("./array-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("find", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(predicate, thisArg) {
		var arr, length, i, propInfo, value, passed;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					arr = (0, _utilsNative.toObject)(env, this.node);
					context$2$0.next = 3;
					return (0, _utilsNative.toLength)(arr);

				case 3:
					length = context$2$0.sent;

					(0, _utilsContracts.assertIsFunction)(predicate, "predicate");

					// for some reason the spec for the find methods calls empty array slots
					// how that is useful, beats me
					i = 0;

				case 6:
					if (!(i < length)) {
						context$2$0.next = 18;
						break;
					}

					propInfo = arr.getProperty(i);
					value = propInfo ? propInfo.getValue() : _typesPrimitiveType.UNDEFINED;
					context$2$0.next = 11;
					return (0, _arrayHelpers.executeCallback)(env, predicate, { key: i, value: value }, thisArg, arr);

				case 11:
					context$2$0.t0 = context$2$0.sent;
					passed = (0, _utilsNative.toBoolean)(context$2$0.t0);

					if (!passed) {
						context$2$0.next = 15;
						break;
					}

					return context$2$0.abrupt("return", value);

				case 15:

					i++;
					context$2$0.next = 6;
					break;

				case 18:
					return context$2$0.abrupt("return", _typesPrimitiveType.UNDEFINED);

				case 19:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Array.prototype.find"));
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../utils/contracts":311,"../utils/native":313,"./array-helpers":214,"babel-runtime/regenerator":26}],219:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../types/primitive-type");

var _typesSymbolType = require("../types/symbol-type");

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

var _iterators = require("../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

exports["default"] = function ($target, env, factory) {
	var marked1$0 = [createArray].map(_regeneratorRuntime.mark);

	var iteratorKey = _typesSymbolType.SymbolType.getByKey("iterator");

	function createArray(ctor, source) {
		var args, hasIterator, _length;

		return _regeneratorRuntime.wrap(function createArray$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (!(ctor === $target || !(0, _utilsContracts.isConstructor)(ctor))) {
						context$2$0.next = 2;
						break;
					}

					return context$2$0.abrupt("return", factory.createArray());

				case 2:
					args = [];
					hasIterator = source.has(iteratorKey);

					if (hasIterator) {
						context$2$0.next = 9;
						break;
					}

					context$2$0.next = 7;
					return (0, _utilsNative.toLength)(source);

				case 7:
					_length = context$2$0.sent;

					args.push(factory.createPrimitive(_length));

				case 9:
					context$2$0.next = 11;
					return ctor.construct(ctor, args);

				case 11:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 12:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[0], this);
	}

	$target.define("from", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(items, mapFn, thisArg) {
		var mapper, arr, it, length, done, current, _it$next, value;

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					thisArg = thisArg || _typesPrimitiveType.UNDEFINED;

					mapper = undefined;

					if ((0, _utilsContracts.isUndefined)(mapFn)) {
						mapper = function (v) {
							return v;
						};
					} else {
						(0, _utilsContracts.assertIsFunction)(mapFn, "mapFn");
						mapper = _regeneratorRuntime.mark(function callee$2$0(v, i) {
							return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
								while (1) switch (context$3$0.prev = context$3$0.next) {
									case 0:
										context$3$0.next = 2;
										return mapFn.call(thisArg, [v, factory.createPrimitive(i)]);

									case 2:
										return context$3$0.abrupt("return", context$3$0.sent);

									case 3:
									case "end":
										return context$3$0.stop();
								}
							}, callee$2$0, this);
						});
					}

					context$2$0.next = 5;
					return createArray(this.node, items);

				case 5:
					arr = context$2$0.sent;
					it = _iterators2["default"].getIterator(items);
					length = 0;
					done = false;

				case 9:
					if (done) {
						context$2$0.next = 29;
						break;
					}

					context$2$0.prev = 10;
					current = undefined;
					_it$next = it.next();
					done = _it$next.done;
					current = _it$next.value;

					if (done) {
						context$2$0.next = 21;
						break;
					}

					context$2$0.next = 18;
					return mapper(current.value || _typesPrimitiveType.UNDEFINED, current.key);

				case 18:
					value = context$2$0.sent;

					arr.setValue(current.key, value);
					length = current.key + 1;

				case 21:
					context$2$0.next = 27;
					break;

				case 23:
					context$2$0.prev = 23;
					context$2$0.t0 = context$2$0["catch"](10);

					if ("return" in it) {
						it["return"]();
					}

					throw context$2$0.t0;

				case 27:
					context$2$0.next = 9;
					break;

				case 29:

					arr.setValue("length", factory.createPrimitive(length));
					return context$2$0.abrupt("return", arr);

				case 31:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this, [[10, 23]]);
	}), 1, "Array.from"));
};

module.exports = exports["default"];

},{"../iterators/":287,"../types/primitive-type":303,"../types/symbol-type":308,"../utils/contracts":311,"../utils/native":313,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],220:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../types/primitive-type");

var _typesSymbolType = require("../types/symbol-type");

var _utilsAsync = require("../utils/async");

var _utilsNative = require("../utils/native");

exports["default"] = function ($target, env, factory) {
	var marked1$0 = [getIterator].map(_regeneratorRuntime.mark);

	var iteratorProto = factory.createObject();
	iteratorProto.className = "Array Iterator";

	iteratorProto.define("next", factory.createBuiltInFunction(function () {
		var result = this.node.advance();
		if (result.value) {
			return result.value;
		}

		return factory.createIteratorResult({ done: result.done });
	}, 0, "ArrayIterator.prototype.next"));

	function createIteratorValue(arr, index, kind) {
		var key = undefined;
		if (kind !== "value") {
			key = factory.createPrimitive(index);
			if (kind === "key") {
				return key;
			}
		}

		var propInfo = arr.getProperty(index);
		var value = _typesPrimitiveType.UNDEFINED;

		if (propInfo) {
			value = propInfo.getValue();
		}

		if (kind === "value") {
			return value;
		}

		return factory.createArray([key, value]);
	}

	function getIterator(arr, kind) {
		var done, index, _length, value;

		return _regeneratorRuntime.wrap(function getIterator$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					done = false;
					index = 0;

				case 2:
					if (done) {
						context$2$0.next = 11;
						break;
					}

					_length = (0, _utilsAsync.exhaust)((0, _utilsNative.toLength)(arr));
					value = _typesPrimitiveType.UNDEFINED;

					if (index >= _length) {
						done = true;
					} else {
						value = createIteratorValue(arr, index, kind);
					}

					context$2$0.next = 8;
					return factory.createIteratorResult({ value: value, done: done });

				case 8:
					index++;
					context$2$0.next = 2;
					break;

				case 11:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[0], this);
	}

	$target.define("keys", factory.createBuiltInFunction(function () {
		var arr = (0, _utilsNative.toObject)(env, this.node, true);
		var it = getIterator(arr, "key");
		return factory.createIterator(it, iteratorProto);
	}, 0, "Array.prototype.keys"));

	$target.define("entries", factory.createBuiltInFunction(function () {
		var arr = (0, _utilsNative.toObject)(env, this.node, true);
		var it = getIterator(arr);
		return factory.createIterator(it, iteratorProto);
	}, 0, "Array.prototype.entries"));

	var stringTagKey = _typesSymbolType.SymbolType.getByKey("toStringTag");
	iteratorProto.define(stringTagKey, factory.createPrimitive("Array Iterator"), { writable: false });

	var iteratorFunc = factory.createBuiltInFunction(function () {
		var arr = (0, _utilsNative.toObject)(env, this.node, true);
		var it = getIterator(arr, "value");
		return factory.createIterator(it, iteratorProto);
	}, 0, "Array.prototype.values");

	$target.define("values", iteratorFunc);

	var iteratorKey = _typesSymbolType.SymbolType.getByKey("iterator");
	$target.define(iteratorKey, iteratorFunc);
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../types/symbol-type":308,"../utils/async":310,"../utils/native":313,"babel-runtime/regenerator":26}],221:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _arrayCopyWithin = require("./array.copy-within");

var _arrayCopyWithin2 = _interopRequireDefault(_arrayCopyWithin);

var _arrayFill = require("./array.fill");

var _arrayFill2 = _interopRequireDefault(_arrayFill);

var _arrayFind = require("./array.find");

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _arrayFindIndex = require("./array.find-index");

var _arrayFindIndex2 = _interopRequireDefault(_arrayFindIndex);

var _arrayFrom = require("./array.from");

var _arrayFrom2 = _interopRequireDefault(_arrayFrom);

var _arrayIterator = require("./array.iterator");

var _arrayIterator2 = _interopRequireDefault(_arrayIterator);

var _arrayOf = require("./array.of");

var _arrayOf2 = _interopRequireDefault(_arrayOf);

exports["default"] = function ($global, env, factory) {
	var arrayClass = $global.getValue("Array");
	var proto = arrayClass.getValue("prototype");

	(0, _arrayFrom2["default"])(arrayClass, env, factory);
	(0, _arrayOf2["default"])(arrayClass, env, factory);

	(0, _arrayCopyWithin2["default"])(proto, env, factory);
	(0, _arrayFill2["default"])(proto, env, factory);
	(0, _arrayFind2["default"])(proto, env, factory);
	(0, _arrayFindIndex2["default"])(proto, env, factory);
	(0, _arrayIterator2["default"])(proto, env, factory);
};

module.exports = exports["default"];

},{"./array.copy-within":215,"./array.fill":216,"./array.find":218,"./array.find-index":217,"./array.from":219,"./array.iterator":220,"./array.of":222,"babel-runtime/helpers/interop-require-default":24}],222:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("of", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
			items[_key] = arguments[_key];
		}

		var length, lengthValue, arr, i;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (!(this.node === $target || !(0, _utilsContracts.isConstructor)(this.node))) {
						context$2$0.next = 2;
						break;
					}

					return context$2$0.abrupt("return", factory.createArray(items));

				case 2:
					length = items.length;
					lengthValue = factory.createPrimitive(length);
					context$2$0.next = 6;
					return this.node.construct(this.node, [lengthValue]);

				case 6:
					arr = context$2$0.sent;
					i = 0;

					while (i < length) {
						arr.defineOwnProperty(i, { value: items[i], configurable: true, enumerable: true, writable: true }, true);
						i++;
					}

					arr.setValue("length", lengthValue);
					return context$2$0.abrupt("return", arr);

				case 11:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "Array.of"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"babel-runtime/regenerator":26}],223:[function(require,module,exports){
"use strict";

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.findIndex = findIndex;

function findIndex(obj, key) {
	var env = obj[_Symbol$for("env")];

	for (var i = 0, _length = obj.data.length; i < _length; i++) {
		var current = obj.data[i];
		if (current) {
			if (env.ops.areSameOrZero(key, current.key)) {
				return i;
			}
		}
	}

	return -1;
}

},{"babel-runtime/core-js/symbol/for":16}],224:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _es5 = require("../es5/");

var _es52 = _interopRequireDefault(_es5);

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

var _array = require("./array");

var _array2 = _interopRequireDefault(_array);

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

var _symbol = require("./symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

var _proxy = require("./proxy");

var _proxy2 = _interopRequireDefault(_proxy);

var _set = require("./set");

var _set2 = _interopRequireDefault(_set);

var _map = require("./map");

var _map2 = _interopRequireDefault(_map);

var _math = require("./math");

var _math2 = _interopRequireDefault(_math);

var _reflect = require("./reflect");

var _reflect2 = _interopRequireDefault(_reflect);

var _regex = require("./regex");

var _regex2 = _interopRequireDefault(_regex);

var _typesSymbolType = require("../types/symbol-type");

exports["default"] = function (env) {
	(0, _es52["default"])(env);

	var objectFactory = env.objectFactory;
	var $global = env.global;

	(0, _symbol2["default"])($global, env, objectFactory);
	(0, _object2["default"])($global, env, objectFactory);
	(0, _string2["default"])($global, env, objectFactory);
	(0, _array2["default"])($global, env, objectFactory);
	(0, _number2["default"])($global, env, objectFactory);
	(0, _math2["default"])($global, env, objectFactory);
	(0, _proxy2["default"])($global, env, objectFactory);
	(0, _regex2["default"])($global, env, objectFactory);
	(0, _reflect2["default"])($global, env, objectFactory);
	(0, _map2["default"])($global, env, objectFactory);
	(0, _set2["default"])($global, env, objectFactory);

	// setup class symbols
	var stringTagKey = _typesSymbolType.SymbolType.getByKey("toStringTag");
	var speciesKey = _typesSymbolType.SymbolType.getByKey("species");
	["Function", "Number", "Boolean", "Object", "Array", "String", "Date", "RegExp", "JSON", "Error", "Math", "Map", "Set"].forEach(function (typeName) {
		var ctor = $global.getValue(typeName);

		var speciesGetter = function speciesGetter() {
			return ctor;
		};
		var speciesGetterFunc = objectFactory.createGetter(speciesGetter, "[Symbol.species]");
		ctor.define(speciesKey, null, { getter: speciesGetter, get: speciesGetterFunc });

		if (ctor.owns("prototype")) {
			var proto = ctor.getValue("prototype");
			// proto.define(stringTagKey, objectFactory.createPrimitive(typeName), { writable: false });

			// prototypes in ES6 can't be coerced into primitives
			proto.className = "Object";
		} else {
			ctor.define(stringTagKey, objectFactory.createPrimitive(typeName), { writable: false });
		}
	});

	// update length attributes on built-ins
	var lengthAttr = { configurable: true, enumerable: false, writable: false };
	$global.getValue("Function").define("length", objectFactory.createPrimitive(1), lengthAttr);
	$global.getValue("Number").define("length", objectFactory.createPrimitive(1), lengthAttr);
	$global.getValue("Boolean").define("length", objectFactory.createPrimitive(1), lengthAttr);
	$global.getValue("Object").define("length", objectFactory.createPrimitive(1), lengthAttr);
	$global.getValue("Array").define("length", objectFactory.createPrimitive(1), lengthAttr);
	$global.getValue("String").define("length", objectFactory.createPrimitive(1), lengthAttr);
	$global.getValue("Date").define("length", objectFactory.createPrimitive(7), lengthAttr);
	$global.getValue("RegExp").define("length", objectFactory.createPrimitive(2), lengthAttr);
	$global.getValue("Map").define("length", objectFactory.createPrimitive(0), lengthAttr);
	$global.getValue("Set").define("length", objectFactory.createPrimitive(0), lengthAttr);

	var funcProto = $global.getValue("Function").getValue("prototype");

	var thrower = function thrower() {
		throw TypeError("'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them");
	};

	var throwerFunc = objectFactory.createBuiltInFunction(thrower);
	var prop = {
		get: throwerFunc,
		getter: thrower,
		set: throwerFunc,
		setter: thrower,
		enumerable: false,
		configurable: false
	};

	funcProto.define("caller", null, prop);
	funcProto.define("arguments", null, prop);
};

module.exports = exports["default"];

},{"../es5/":169,"../types/symbol-type":308,"./array":221,"./map":231,"./math":234,"./number":239,"./object":245,"./proxy":248,"./reflect":259,"./regex":264,"./set":271,"./string":277,"./symbol":281,"babel-runtime/helpers/interop-require-default":24}],225:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("clear", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsMap)(this.node, "Map.prototype.clear");
		this.node.data = [];
	}, 0, "Map.prototype.clear"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],226:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _collectionHelpers = require("./collection-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("delete", factory.createBuiltInFunction(function (key) {
		(0, _utilsContracts.assertIsMap)(this.node, "Map.prototype.delete");

		var data = this.node.data;
		if (data.length > 0) {
			var index = (0, _collectionHelpers.findIndex)(this.node, key);
			if (index >= 0) {
				// leave holes in array
				data[index] = undefined;
				return factory.createPrimitive(true);
			}
		}

		return factory.createPrimitive(false);
	}, 1, "Map.prototype.delete"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"./collection-helpers":223}],227:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../types/primitive-type");

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("forEach", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(callback, thisArg) {
		var data, index, entry, args;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsMap)(this.node, "Map.prototype.forEach");
					(0, _utilsContracts.assertIsFunction)(callback, "callback");

					thisArg = thisArg || _typesPrimitiveType.UNDEFINED;
					data = this.node.data;
					index = 0;

				case 5:
					if (!(index < data.length)) {
						context$2$0.next = 13;
						break;
					}

					entry = data[index++];

					if (!entry) {
						context$2$0.next = 11;
						break;
					}

					args = [entry.value, entry.key, this.node];
					context$2$0.next = 11;
					return callback.call(thisArg, args);

				case 11:
					context$2$0.next = 5;
					break;

				case 13:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Map.prototype.forEach"));
};

module.exports = exports["default"];

// length might change during iteration

},{"../types/primitive-type":303,"../utils/contracts":311,"babel-runtime/regenerator":26}],228:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _collectionHelpers = require("./collection-helpers");

var _typesPrimitiveType = require("../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	$target.define("get", factory.createBuiltInFunction(function (key) {
		(0, _utilsContracts.assertIsMap)(this.node, "Map.prototype.get");

		var index = (0, _collectionHelpers.findIndex)(this.node, key);
		if (index >= 0) {
			return this.node.data[index].value;
		}

		return _typesPrimitiveType.UNDEFINED;
	}, 1, "Map.prototype.get"));
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../utils/contracts":311,"./collection-helpers":223}],229:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _collectionHelpers = require("./collection-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("has", factory.createBuiltInFunction(function (key) {
		(0, _utilsContracts.assertIsMap)(this.node, "Map.prototype.has");
		return factory.createPrimitive((0, _collectionHelpers.findIndex)(this.node, key) >= 0);
	}, 1, "Map.prototype.has"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"./collection-helpers":223}],230:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesSymbolType = require("../types/symbol-type");

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	var marked1$0 = [getIterator].map(_regeneratorRuntime.mark);

	function createIteratorValue(entry, kind) {
		if (kind === "key") {
			return entry.key;
		}

		if (kind === "value") {
			return entry.value;
		}

		return factory.createArray([entry.key, entry.value]);
	}

	function getIterator(obj, kind) {
		var done, index, value, current;
		return _regeneratorRuntime.wrap(function getIterator$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					done = false;
					index = 0;

				case 2:
					if (done) {
						context$2$0.next = 16;
						break;
					}

					value = undefined;

				case 4:
					if (!(index < obj.data.length)) {
						context$2$0.next = 11;
						break;
					}

					current = obj.data[index++];

					if (!current) {
						context$2$0.next = 9;
						break;
					}

					value = createIteratorValue(current, kind);
					return context$2$0.abrupt("break", 11);

				case 9:
					context$2$0.next = 4;
					break;

				case 11:

					done = !value;
					context$2$0.next = 14;
					return factory.createIteratorResult({ value: value, done: done });

				case 14:
					context$2$0.next = 2;
					break;

				case 16:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[0], this);
	}

	var proto = factory.createObject();
	proto.define(_typesSymbolType.SymbolType.getByKey("toStringTag"), factory.createPrimitive("Map Iterator"), { writable: false });

	$target.define("keys", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsMap)(this.node, "Map.prototype.keys");
		var it = getIterator(this.node, "key");
		return factory.createIterator(it, proto);
	}, 0, "Map.prototype.keys"));

	$target.define("values", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsMap)(this.node, "Map.prototype.values");
		var it = getIterator(this.node, "value");
		return factory.createIterator(it, proto);
	}, 0, "Map.prototype.values"));

	var iteratorFunc = factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsMap)(this.node, "Map.prototype.entries");
		var it = getIterator(this.node);
		return factory.createIterator(it, proto);
	}, 0, "Map.prototype.entries");

	$target.define("entries", iteratorFunc);

	var iteratorKey = _typesSymbolType.SymbolType.getByKey("iterator");
	$target.define(iteratorKey, iteratorFunc);
};

module.exports = exports["default"];

},{"../types/symbol-type":308,"../utils/contracts":311,"babel-runtime/regenerator":26}],231:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _typesPrimitiveType = require("../types/primitive-type");

var _iterators = require("../iterators/");

var _iterators2 = _interopRequireDefault(_iterators);

var _mapClear = require("./map.clear");

var _mapClear2 = _interopRequireDefault(_mapClear);

var _mapDelete = require("./map.delete");

var _mapDelete2 = _interopRequireDefault(_mapDelete);

var _mapForEach = require("./map.for-each");

var _mapForEach2 = _interopRequireDefault(_mapForEach);

var _mapGet = require("./map.get");

var _mapGet2 = _interopRequireDefault(_mapGet);

var _mapHas = require("./map.has");

var _mapHas2 = _interopRequireDefault(_mapHas);

var _mapSet = require("./map.set");

var _mapSet2 = _interopRequireDefault(_mapSet);

var _mapSize = require("./map.size");

var _mapSize2 = _interopRequireDefault(_mapSize);

var _mapIterator = require("./map.iterator");

var _mapIterator2 = _interopRequireDefault(_mapIterator);

exports["default"] = function ($global, env, factory) {
	var proto = factory.createObject();

	var mapClass = factory.createFunction(_regeneratorRuntime.mark(function callee$1$0(iterable) {
		var instance;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			var _this = this;

			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (this.isNew) {
						context$2$0.next = 2;
						break;
					}

					throw TypeError("Constructor Map requires 'new'");

				case 2:
					instance = factory.create("Map");

					if ((0, _utilsContracts.isNullOrUndefined)(iterable)) {
						context$2$0.next = 5;
						break;
					}

					return context$2$0.delegateYield(_regeneratorRuntime.mark(function callee$2$0() {
						var setter, it;
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									(0, _utilsContracts.assertIsObject)(iterable, "Map");

									setter = instance.getValue("set");

									(0, _utilsContracts.assertIsFunction)(setter, "set");

									it = _iterators2["default"].getIterator(iterable);
									context$3$0.next = 6;
									return it.each(_regeneratorRuntime.mark(function callee$3$0(item) {
										var key, value;
										return _regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
											while (1) switch (context$4$0.prev = context$4$0.next) {
												case 0:
													(0, _utilsContracts.assertIsObject)(item, "Map");

													key = item.getValue("0") || _typesPrimitiveType.UNDEFINED;
													value = item.getValue("1") || _typesPrimitiveType.UNDEFINED;
													context$4$0.next = 5;
													return setter.call(instance, [key, value]);

												case 5:
												case "end":
													return context$4$0.stop();
											}
										}, callee$3$0, this);
									}));

								case 6:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, _this);
					})(), "t0", 5);

				case 5:
					return context$2$0.abrupt("return", instance);

				case 6:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), proto, { name: "Map", writable: false });

	(0, _mapClear2["default"])(proto, env, factory);
	(0, _mapDelete2["default"])(proto, env, factory);
	(0, _mapForEach2["default"])(proto, env, factory);
	(0, _mapGet2["default"])(proto, env, factory);
	(0, _mapHas2["default"])(proto, env, factory);
	(0, _mapSet2["default"])(proto, env, factory);
	(0, _mapIterator2["default"])(proto, env, factory);
	(0, _mapSize2["default"])(proto, env, factory);

	$global.define("Map", mapClass);
};

module.exports = exports["default"];

},{"../iterators/":287,"../types/primitive-type":303,"../utils/contracts":311,"./map.clear":225,"./map.delete":226,"./map.for-each":227,"./map.get":228,"./map.has":229,"./map.iterator":230,"./map.set":232,"./map.size":233,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],232:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _collectionHelpers = require("./collection-helpers");

exports["default"] = function ($target, env, factory) {
	$target.define("set", factory.createBuiltInFunction(function (key, value) {
		(0, _utilsContracts.assertIsMap)(this.node, "Map.prototype.set");

		var index = (0, _collectionHelpers.findIndex)(this.node, key);
		if (index >= 0) {
			this.node.data[index].value = value;
			return this.node;
		}

		this.node.data.push({ key: key, value: value });
		return this.node;
	}, 2, "Map.prototype.set"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"./collection-helpers":223}],233:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	var getter = function getter() {
		(0, _utilsContracts.assertIsMap)(this, "Map.prototype.size");
		return factory.createPrimitive(this.data.filter(function (v) {
			return v;
		}).length);
	};

	var getterFunc = factory.createGetter(function () {
		return getter.call(this.node);
	}, "size");

	$target.define("size", null, {
		getter: getter,
		get: getterFunc
	});
};

module.exports = exports["default"];

},{"../utils/contracts":311}],234:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

exports["default"] = function ($global, env, factory) {
	var mathClass = $global.getValue("Math");

	["acosh", "asinh", "atanh", "cbrt", "clz32", "cosh", "expm1", "fround", "hypot", "imul", "log10", "log2", "log1p", "sign", "sinh", "tanh", "trunc"].forEach(function (name) {
		mathClass.define(name, (0, _utilsNative.toNativeFunction)(env, Math[name], "Math." + name));
	});
};

module.exports = exports["default"];

},{"../utils/native":313}],235:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function (target, env, factory) {
	target.define("isFinite", factory.createBuiltInFunction(function (value) {
		if (!(0, _utilsContracts.isNumber)(value)) {
			return factory.createPrimitive(false);
		}

		var numberValue = value.toNative();
		if (isNaN(numberValue) || !isFinite(numberValue)) {
			return factory.createPrimitive(false);
		}

		return factory.createPrimitive(true);
	}, 1, "Number.isFinite"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],236:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function (target, env, factory) {
	target.define("isInteger", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value) {
		var numberValue, intValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if ((0, _utilsContracts.isNumber)(value)) {
						context$2$0.next = 2;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(false));

				case 2:
					numberValue = value.toNative();

					if (!(isNaN(numberValue) || !isFinite(numberValue))) {
						context$2$0.next = 5;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(false));

				case 5:
					context$2$0.next = 7;
					return (0, _utilsNative.toInteger)(value);

				case 7:
					intValue = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(numberValue === intValue));

				case 9:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Number.isInteger"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],237:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function (target, env, factory) {
	target.define("isNaN", factory.createBuiltInFunction(function (value) {
		if (!(0, _utilsContracts.isNumber)(value)) {
			return factory.createPrimitive(false);
		}

		return factory.createPrimitive(isNaN(value.toNative()));
	}, 1, "Number.isNaN"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],238:[function(require,module,exports){
"use strict";

var _Number$MAX_SAFE_INTEGER = require("babel-runtime/core-js/number/max-safe-integer")["default"];

var _Number$MIN_SAFE_INTEGER = require("babel-runtime/core-js/number/min-safe-integer")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function (target, env, factory) {
	var MAX_SAFE_INTEGER = _Number$MAX_SAFE_INTEGER || 9007199254740991;
	var MIN_SAFE_INTEGER = _Number$MIN_SAFE_INTEGER || -9007199254740991;

	target.define("MAX_SAFE_INTEGER", factory.createPrimitive(MAX_SAFE_INTEGER), { configurable: false, writable: false });
	target.define("MIN_SAFE_INTEGER", factory.createPrimitive(MIN_SAFE_INTEGER), { configurable: false, writable: false });

	target.define("isSafeInteger", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value) {
		var numberValue, intValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if ((0, _utilsContracts.isNumber)(value)) {
						context$2$0.next = 2;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(false));

				case 2:
					numberValue = value.toNative();

					if (!(isNaN(numberValue) || !isFinite(numberValue))) {
						context$2$0.next = 5;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(false));

				case 5:
					context$2$0.next = 7;
					return (0, _utilsNative.toInteger)(value);

				case 7:
					intValue = context$2$0.sent;

					if (!(intValue !== numberValue)) {
						context$2$0.next = 10;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(false));

				case 10:
					return context$2$0.abrupt("return", factory.createPrimitive(Math.abs(numberValue) <= MAX_SAFE_INTEGER));

				case 11:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Number.isSafeInteger"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/core-js/number/max-safe-integer":5,"babel-runtime/core-js/number/min-safe-integer":6,"babel-runtime/regenerator":26}],239:[function(require,module,exports){
"use strict";

var _Number$EPSILON = require("babel-runtime/core-js/number/epsilon")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _numberIsFinite = require("./number.is-finite");

var _numberIsFinite2 = _interopRequireDefault(_numberIsFinite);

var _numberIsInteger = require("./number.is-integer");

var _numberIsInteger2 = _interopRequireDefault(_numberIsInteger);

var _numberIsNan = require("./number.is-nan");

var _numberIsNan2 = _interopRequireDefault(_numberIsNan);

var _numberIsSafeInteger = require("./number.is-safe-integer");

var _numberIsSafeInteger2 = _interopRequireDefault(_numberIsSafeInteger);

var _numberParseFloat = require("./number.parse-float");

var _numberParseFloat2 = _interopRequireDefault(_numberParseFloat);

var _numberParseInt = require("./number.parse-int");

var _numberParseInt2 = _interopRequireDefault(_numberParseInt);

exports["default"] = function (globalObject, env, factory) {
	var numberClass = globalObject.getValue("Number");

	(0, _numberIsFinite2["default"])(numberClass, env, factory);
	(0, _numberIsInteger2["default"])(numberClass, env, factory);
	(0, _numberIsNan2["default"])(numberClass, env, factory);
	(0, _numberIsSafeInteger2["default"])(numberClass, env, factory);
	(0, _numberParseFloat2["default"])(numberClass, env, factory);
	(0, _numberParseInt2["default"])(numberClass, env, factory);

	var epsilonValue = factory.createPrimitive(_Number$EPSILON || 2.220446049250313e-16);
	numberClass.define("EPSILON", epsilonValue, { configurable: false, writable: false });
};

module.exports = exports["default"];

},{"./number.is-finite":235,"./number.is-integer":236,"./number.is-nan":237,"./number.is-safe-integer":238,"./number.parse-float":240,"./number.parse-int":241,"babel-runtime/core-js/number/epsilon":4,"babel-runtime/helpers/interop-require-default":24}],240:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

exports["default"] = function (target, env, factory) {
	target.define("parseFloat", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value) {
		var stringValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(value);

				case 2:
					stringValue = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(parseFloat(stringValue)));

				case 4:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Number.parseFloat"));
};

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],241:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

exports["default"] = function (target, env, factory) {
	target.define("parseInt", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value, radix) {
		var stringValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return toString(value);

				case 2:
					stringValue = context$2$0.sent;
					context$2$0.next = 5;
					return (0, _utilsNative.toPrimitive)(radix, "number");

				case 5:
					radix = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(parseInt(stringValue, radix)));

				case 7:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Number.parseInt"));
};

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],242:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

var _utilsContracts = require("../utils/contracts");

exports["default"] = function (objectClass, env, factory) {
	objectClass.define("assign", factory.createBuiltInFunction(function (target) {
		var to = (0, _utilsNative.toObject)(target, true);

		for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			sources[_key - 1] = arguments[_key];
		}

		sources.forEach(function (next) {
			if (!(0, _utilsContracts.isNullOrUndefined)(next)) {
				(function () {
					var source = (0, _utilsNative.toObject)(next);

					source.getOwnPropertyKeys().forEach(function (key) {
						var desc = source.getOwnProperty(key);
						if (desc && desc.enumerable) {
							if (!to.setValue(key, desc.getValue())) {
								throw TypeError("Cannot assign to read only property '" + key + "'");
							}
						}
					});
				})();
			}
		});

		return to;
	}, 2, "Object.assign"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313}],243:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function (target, env, factory) {
	target.define("getOwnPropertySymbols", factory.createBuiltInFunction(function (obj) {
		(0, _utilsContracts.assertIsNotNullOrUndefined)(obj, "Object.getOwnPropertySymbols");
		var keys = [];

		obj.getOwnPropertyKeys("Symbol").forEach(function (key) {
			if (key && key.isSymbol) {
				keys.push(key);
			}
		});

		return factory.createArray(keys);
	}, 1, "Object.getOwnPropertySymbols"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],244:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../types/primitive-type");

exports["default"] = function (target, env, factory) {
	target.define("is", factory.createBuiltInFunction(function (a, b) {
		var result = env.ops.areSame(a || _typesPrimitiveType.UNDEFINED, b || _typesPrimitiveType.UNDEFINED);
		return factory.createPrimitive(result);
	}, 2, "Object.is"));
};

module.exports = exports["default"];

},{"../types/primitive-type":303}],245:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _objectIs = require("./object.is");

var _objectIs2 = _interopRequireDefault(_objectIs);

var _objectAssign = require("./object.assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _objectGetOwnPropertySymbols = require("./object.get-own-property-symbols");

var _objectGetOwnPropertySymbols2 = _interopRequireDefault(_objectGetOwnPropertySymbols);

var _objectSetPrototypeOf = require("./object.set-prototype-of");

var _objectSetPrototypeOf2 = _interopRequireDefault(_objectSetPrototypeOf);

var _objectToString = require("./object.to-string");

var _objectToString2 = _interopRequireDefault(_objectToString);

exports["default"] = function (globalObject, env, factory) {
	var objectClass = globalObject.getValue("Object");
	var proto = objectClass.getValue("prototype");

	objectClass.define("getOwnPropertyNames", factory.createBuiltInFunction(function (obj) {
		(0, _utilsContracts.assertIsNotNullOrUndefined)(obj, "Object.getOwnPropertyNames");

		var keys = [];
		obj.getOwnPropertyKeys("String").forEach(function (key) {
			if (typeof key === "string") {
				keys.push(factory.createPrimitive(key));
			}
		});

		return factory.createArray(keys);
	}, 1, "Object.getOwnPropertyNames"));

	objectClass.define("keys", factory.createBuiltInFunction(function (obj) {
		(0, _utilsContracts.assertIsNotNullOrUndefined)(obj, "Object.keys");

		var keys = [];
		obj.getOwnPropertyKeys("String").forEach(function (key) {
			if (typeof key === "string") {
				var propInfo = obj.getProperty(key);
				if (propInfo && propInfo.enumerable) {
					keys.push(factory.createPrimitive(key));
				}
			}
		});

		return factory.createArray(keys);
	}, 1, "Object.keys"));

	(0, _objectAssign2["default"])(objectClass, env, factory);
	(0, _objectIs2["default"])(objectClass, env, factory);
	(0, _objectGetOwnPropertySymbols2["default"])(objectClass, env, factory);
	(0, _objectSetPrototypeOf2["default"])(objectClass, env, factory);
	(0, _objectToString2["default"])(proto, env, factory);
};

module.exports = exports["default"];

},{"../utils/contracts":311,"./object.assign":242,"./object.get-own-property-symbols":243,"./object.is":244,"./object.set-prototype-of":246,"./object.to-string":247,"babel-runtime/helpers/interop-require-default":24}],246:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("setPrototypeOf", factory.createBuiltInFunction(function (target, proto) {
		(0, _utilsContracts.assertIsNotNullOrUndefined)(target, "setPrototypeOf");

		if (!(0, _utilsContracts.isObject)(proto) && !(0, _utilsContracts.isNull)(proto)) {
			throw TypeError("Object prototype may only be an Object or null");
		}

		if ((0, _utilsContracts.isObject)(target) && !target.setPrototype(proto)) {
			throw TypeError(target.className + " is not extensible");
		}

		return target;
	}, 2, "Object.setPrototypeOf"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],247:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _typesSymbolType = require("../types/symbol-type");

exports["default"] = function (target, env, factory) {
	var stringTagKey = _typesSymbolType.SymbolType.getByKey("toStringTag");

	function objectToString(obj) {
		var tag = obj.className;

		if (!(0, _utilsContracts.isNullOrUndefined)(obj)) {
			var tagProperty = obj.getProperty(stringTagKey);
			if (tagProperty) {
				var tagValue = tagProperty.getValue();
				if (tagValue && tagValue.type === "string") {
					tag = tagValue.toNative();
				}
			}
		}

		return factory.createPrimitive("[object " + tag + "]");
	};

	target.define("toString", factory.createBuiltInFunction(function () {
		return objectToString(this.node);
	}, 0, "Object.prototype.toString"));

	target.define("toLocaleString", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "Object.prototype.toLocaleString");
		return objectToString(this.node);
	}, 0, "Object.prototype.toLocaleString"));
};

module.exports = exports["default"];

},{"../types/symbol-type":308,"../utils/contracts":311}],248:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports["default"] = function (globalObject, env, factory) {
	var proxyClass = factory.createFunction(function (target, handler) {
		if (!this.isNew) {
			throw TypeError();
		}

		return factory.createProxy(target, handler);
	}, null, { name: "Proxy" });

	proxyClass.define("revocable", factory.createBuiltInFunction(function (target, handler) {
		var proxy = factory.createProxy(target, handler);

		var obj = factory.createObject();
		obj.define("proxy", proxy);
		obj.define("revoke", factory.createBuiltInFunction(function () {
			proxy.revoke();
		}, 0, "revoke"));

		return obj;
	}, 2, "Proxy.revocable"));

	proxyClass.define("length", factory.createPrimitive(2), { writable: false });
	globalObject.define("Proxy", proxyClass);
};

module.exports = exports["default"];

},{}],249:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("apply", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(target, thisArg, argsArray) {
		var args, callee;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsFunction)(target, "target");

					if (argsArray) {
						(0, _utilsContracts.assertIsObject)(argsArray, "Reflect.apply");
					}

					context$2$0.next = 4;
					return (0, _utilsNative.toArray)(argsArray);

				case 4:
					args = context$2$0.sent;
					callee = target.native ? target : target.node;
					context$2$0.next = 8;
					return target.call(thisArg, args, callee);

				case 8:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 9:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 3, "Reflect.apply"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],250:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("construct", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(target, argsArray, newTarget) {
		var args, callee, proto, obj;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsFunction)(target, "target");

					if (argsArray) {
						(0, _utilsContracts.assertIsObject)(argsArray, "Reflect.construct");
					}

					context$2$0.next = 4;
					return (0, _utilsNative.toArray)(argsArray);

				case 4:
					args = context$2$0.sent;
					callee = target.node || target;
					proto = newTarget || target;
					obj = factory.createObject(proto);
					context$2$0.next = 10;
					return target.construct(obj, args, callee);

				case 10:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 11:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Reflect.construct"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],251:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

var _es5Object = require("../es5/object/");

exports["default"] = function ($target, env, factory) {
	$target.define("defineProperty", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(target, propertyKey, descriptor) {
		var key;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsObject)(target, "Reflect.defineProperty");

					context$2$0.next = 3;
					return (0, _utilsNative.toPropertyKey)(propertyKey);

				case 3:
					key = context$2$0.sent;
					context$2$0.t0 = factory;
					context$2$0.next = 7;
					return (0, _es5Object.defineProperty)(env, target, key, descriptor, false);

				case 7:
					context$2$0.t1 = context$2$0.sent;
					return context$2$0.abrupt("return", context$2$0.t0.createPrimitive.call(context$2$0.t0, context$2$0.t1));

				case 9:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 3, "Reflect.defineProperty"));
};

module.exports = exports["default"];

},{"../es5/object/":178,"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],252:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("deleteProperty", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(target, propertyKey) {
		var key;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsObject)(target, "Reflect.deleteProperty");

					context$2$0.next = 3;
					return (0, _utilsNative.toPropertyKey)(propertyKey);

				case 3:
					key = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(target.deleteProperty(key, false)));

				case 5:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Reflect.deleteProperty"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],253:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("enumerate", factory.createBuiltInFunction(function (target) {
		(0, _utilsContracts.assertIsObject)(target, "Reflect.enumerate");
		return target.getIterator();
	}, 1, "Reflect.enumerate"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],254:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _es5Object = require("../es5/object/");

exports["default"] = function ($target, env, factory) {
	$target.define("getOwnPropertyDescriptor", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(target, propertyKey) {
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsObject)(target, "Reflect.getOwnPropertyDescriptor");
					context$2$0.next = 3;
					return (0, _es5Object.getOwnPropertyDescriptor)(env, target, propertyKey);

				case 3:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 4:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Reflect.getOwnPropertyDescriptor"));
};

module.exports = exports["default"];

},{"../es5/object/":178,"../utils/contracts":311,"babel-runtime/regenerator":26}],255:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("getPrototypeOf", factory.createBuiltInFunction(function (target) {
		(0, _utilsContracts.assertIsObject)(target, "Reflect.getPrototypeOf");
		return target.getPrototype();
	}, 1, "Reflect.getPrototypeOf"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],256:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

var _typesPrimitiveType = require("../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	$target.define("get", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(target, propertyKey, receiver) {
		var key, property;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsObject)(target, "Reflect.get");
					context$2$0.next = 3;
					return (0, _utilsNative.toPropertyKey)(propertyKey);

				case 3:
					key = context$2$0.sent;
					property = target.getProperty(key);

					if (!property) {
						context$2$0.next = 8;
						break;
					}

					property.bind(receiver || target);
					return context$2$0.abrupt("return", property.getValue());

				case 8:
					return context$2$0.abrupt("return", _typesPrimitiveType.UNDEFINED);

				case 9:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Reflect.get"));
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],257:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("has", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(target, propertyKey) {
		var key;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsObject)(target, "Reflect.has");
					context$2$0.next = 3;
					return (0, _utilsNative.toPropertyKey)(propertyKey);

				case 3:
					key = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(target.has(key)));

				case 5:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "Reflect.has"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],258:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("isExtensible", factory.createBuiltInFunction(function (target) {
		(0, _utilsContracts.assertIsObject)(target, "Reflect.isExtensible");
		return factory.createPrimitive(target.isExtensible());
	}, 1, "Reflect.isExtensible"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],259:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reflectApply = require("./reflect.apply");

var _reflectApply2 = _interopRequireDefault(_reflectApply);

var _reflectConstruct = require("./reflect.construct");

var _reflectConstruct2 = _interopRequireDefault(_reflectConstruct);

var _reflectDefineProperty = require("./reflect.define-property");

var _reflectDefineProperty2 = _interopRequireDefault(_reflectDefineProperty);

var _reflectDeleteProperty = require("./reflect.delete-property");

var _reflectDeleteProperty2 = _interopRequireDefault(_reflectDeleteProperty);

var _reflectEnumerate = require("./reflect.enumerate");

var _reflectEnumerate2 = _interopRequireDefault(_reflectEnumerate);

var _reflectGet = require("./reflect.get");

var _reflectGet2 = _interopRequireDefault(_reflectGet);

var _reflectGetOwnPropertyDescriptor = require("./reflect.get-own-property-descriptor");

var _reflectGetOwnPropertyDescriptor2 = _interopRequireDefault(_reflectGetOwnPropertyDescriptor);

var _reflectGetPrototypeOf = require("./reflect.get-prototype-of");

var _reflectGetPrototypeOf2 = _interopRequireDefault(_reflectGetPrototypeOf);

var _reflectHas = require("./reflect.has");

var _reflectHas2 = _interopRequireDefault(_reflectHas);

var _reflectIsExtensible = require("./reflect.is-extensible");

var _reflectIsExtensible2 = _interopRequireDefault(_reflectIsExtensible);

var _reflectOwnKeys = require("./reflect.own-keys");

var _reflectOwnKeys2 = _interopRequireDefault(_reflectOwnKeys);

var _reflectPreventExtensions = require("./reflect.prevent-extensions");

var _reflectPreventExtensions2 = _interopRequireDefault(_reflectPreventExtensions);

var _reflectSet = require("./reflect.set");

var _reflectSet2 = _interopRequireDefault(_reflectSet);

var _reflectSetPrototypeOf = require("./reflect.set-prototype-of");

var _reflectSetPrototypeOf2 = _interopRequireDefault(_reflectSetPrototypeOf);

exports["default"] = function (globalObject, env, factory) {
	var reflectClass = factory.createObject();

	(0, _reflectApply2["default"])(reflectClass, env, factory);
	(0, _reflectConstruct2["default"])(reflectClass, env, factory);
	(0, _reflectDefineProperty2["default"])(reflectClass, env, factory);
	(0, _reflectDeleteProperty2["default"])(reflectClass, env, factory);
	(0, _reflectEnumerate2["default"])(reflectClass, env, factory);
	(0, _reflectGet2["default"])(reflectClass, env, factory);
	(0, _reflectGetOwnPropertyDescriptor2["default"])(reflectClass, env, factory);
	(0, _reflectGetPrototypeOf2["default"])(reflectClass, env, factory);
	(0, _reflectHas2["default"])(reflectClass, env, factory);
	(0, _reflectIsExtensible2["default"])(reflectClass, env, factory);
	(0, _reflectOwnKeys2["default"])(reflectClass, env, factory);
	(0, _reflectPreventExtensions2["default"])(reflectClass, env, factory);
	(0, _reflectSet2["default"])(reflectClass, env, factory);
	(0, _reflectSetPrototypeOf2["default"])(reflectClass, env, factory);

	globalObject.define("Reflect", reflectClass);
};

module.exports = exports["default"];

},{"./reflect.apply":249,"./reflect.construct":250,"./reflect.define-property":251,"./reflect.delete-property":252,"./reflect.enumerate":253,"./reflect.get":256,"./reflect.get-own-property-descriptor":254,"./reflect.get-prototype-of":255,"./reflect.has":257,"./reflect.is-extensible":258,"./reflect.own-keys":260,"./reflect.prevent-extensions":261,"./reflect.set":263,"./reflect.set-prototype-of":262,"babel-runtime/helpers/interop-require-default":24}],260:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("ownKeys", factory.createBuiltInFunction(function (target) {
		(0, _utilsContracts.assertIsObject)(target, "Reflect.ownKeys");

		var keys = target.getOwnPropertyKeys().map(function (key) {
			return factory.createPrimitive(key);
		});
		return factory.createArray(keys);
	}, 1, "Reflect.ownKeys"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],261:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("preventExtensions", factory.createBuiltInFunction(function (target) {
		(0, _utilsContracts.assertIsObject)(target, "Reflect.preventExtensions");
		return factory.createPrimitive(target.preventExtensions());
	}, 1, "Reflect.preventExtensions"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],262:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _typesPrimitiveType = require("../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	$target.define("setPrototypeOf", factory.createBuiltInFunction(function (target, proto) {
		(0, _utilsContracts.assertIsObject)(target, "Reflect.setPrototypeOf");

		if (proto !== _typesPrimitiveType.NULL && proto.type !== "object") {
			throw TypeError("The prototype must be an object or null");
		}

		return factory.createPrimitive(target.setPrototype(proto));
	}, 2, "Reflect.setPrototypeOf"));
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../utils/contracts":311}],263:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function ($target, env, factory) {
	$target.define("set", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(target, key, value, receiver) {
		var k;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsObject)(target, "Reflect.set");
					context$2$0.next = 3;
					return (0, _utilsNative.toPropertyKey)(key);

				case 3:
					k = context$2$0.sent;

					if ((0, _utilsContracts.isUndefined)(receiver)) {
						receiver = target;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(target.setValue(k, value, receiver)));

				case 6:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 3, "Reflect.set"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],264:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesSymbolType = require("../types/symbol-type");

var _utilsAsync = require("../utils/async");

var _typesPrimitiveType = require("../types/primitive-type");

var _utilsNative = require("../utils/native");

var _utilsContracts = require("../utils/contracts");

exports["default"] = function (globalObject, env, factory) {
	var regexClass = globalObject.getValue("RegExp");
	var proto = regexClass.getValue("prototype");

	var replaceKey = _typesSymbolType.SymbolType.getByKey("replace");
	proto.define(replaceKey, factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(value, replaceValue) {
		var stringValue, replacer;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(value);

				case 2:
					stringValue = context$2$0.sent;
					replacer = undefined;

					if (!(0, _utilsContracts.isFunction)(replaceValue)) {
						context$2$0.next = 8;
						break;
					}

					replacer = function () {
						var thisArg = replaceValue.strict || env.isStrict() ? _typesPrimitiveType.UNDEFINED : env.global;

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						var mappedArgs = args.map(function (arg) {
							return factory.createPrimitive(arg);
						});
						var result = (0, _utilsAsync.exhaust)(replaceValue.call(thisArg, mappedArgs));
						return result ? (0, _utilsAsync.exhaust)((0, _utilsNative.toString)(result)) : undefined;
					};
					context$2$0.next = 11;
					break;

				case 8:
					context$2$0.next = 10;
					return (0, _utilsNative.toString)(replaceValue);

				case 10:
					replacer = context$2$0.sent;

				case 11:
					return context$2$0.abrupt("return", factory.createPrimitive(stringValue.replace(this.node.source, replacer)));

				case 12:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 2, "RegExp.prototype[Symbol.replace]"));

	["source", "global", "ignoreCase", "multiline"].forEach(function (key) {
		var source = RegExp.prototype;
		var getter = function getter() {
			return factory.createPrimitive(source[key]);
		};
		var getterFunc = factory.createGetter(getter, key);

		proto.define(key, null, {
			getter: getter,
			get: getterFunc
		});
	});
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../types/symbol-type":308,"../utils/async":310,"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],265:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("add", factory.createBuiltInFunction(function (value) {
		(0, _utilsContracts.assertIsSet)(this.node, "Set.prototype.add");

		if (!this.node.data.some(function (e) {
			return e && env.ops.areSameOrZero(e, value);
		})) {
			this.node.data.push(value);
		}

		return this.node;
	}, 1, "Set.prototype.add"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],266:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("clear", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsSet)(this.node, "Set.prototype.clear");
		this.node.data = [];
	}, 0, "Set.prototype.clear"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],267:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("delete", factory.createBuiltInFunction(function (value) {
		(0, _utilsContracts.assertIsSet)(this.node, "Set.prototype.delete");

		var entries = this.node.data;
		var index = entries.length;

		while (index--) {
			var current = entries[index];
			if (current && env.ops.areSameOrZero(current, value)) {
				entries[index] = undefined;
				return factory.createPrimitive(true);
			}
		}

		return factory.createPrimitive(false);
	}, 1, "Set.prototype.delete"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],268:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _typesPrimitiveType = require("../types/primitive-type");

exports["default"] = function ($target, env, factory) {
	$target.define("forEach", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(callback, thisArg) {
		var data, index, entry, args;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsSet)(this.node, "Set.prototype.forEach");

					thisArg = thisArg || _typesPrimitiveType.UNDEFINED;
					data = this.node.data;
					index = 0;

				case 4:
					if (!(index < data.length)) {
						context$2$0.next = 12;
						break;
					}

					entry = data[index++];

					if (!entry) {
						context$2$0.next = 10;
						break;
					}

					args = [entry, entry, this.node];
					context$2$0.next = 10;
					return callback.call(thisArg, args);

				case 10:
					context$2$0.next = 4;
					break;

				case 12:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Set.prototype.forEach"));
};

module.exports = exports["default"];

// length might change during iteration

},{"../types/primitive-type":303,"../utils/contracts":311,"babel-runtime/regenerator":26}],269:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	$target.define("has", factory.createBuiltInFunction(function (value) {
		(0, _utilsContracts.assertIsSet)(this.node, "Set.prototype.has");
		var has = this.node.data.some(function (e) {
			return e && env.ops.areSameOrZero(e, value);
		});
		return factory.createPrimitive(has);
	}, 1, "Set.prototype.has"));
};

module.exports = exports["default"];

},{"../utils/contracts":311}],270:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _typesSymbolType = require("../types/symbol-type");

exports["default"] = function ($target, env, factory) {
	var marked1$0 = [getIterator].map(_regeneratorRuntime.mark);

	function getIterator(obj, kind) {
		var index, done, value;
		return _regeneratorRuntime.wrap(function getIterator$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					index = 0;
					done = false;

				case 2:
					if (done) {
						context$2$0.next = 16;
						break;
					}

					value = undefined;

				case 4:
					if (!(index < obj.data.length)) {
						context$2$0.next = 10;
						break;
					}

					value = obj.data[index++];

					if (!value) {
						context$2$0.next = 8;
						break;
					}

					return context$2$0.abrupt("break", 10);

				case 8:
					context$2$0.next = 4;
					break;

				case 10:

					done = !value;
					if (value && kind !== "key" && kind !== "value") {
						value = factory.createArray([value, value]);
					}

					context$2$0.next = 14;
					return factory.createIteratorResult({ value: value, done: done });

				case 14:
					context$2$0.next = 2;
					break;

				case 16:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[0], this);
	}

	var proto = factory.createObject();
	proto.define(_typesSymbolType.SymbolType.getByKey("toStringTag"), factory.createPrimitive("Set Iterator"), { writable: false });

	$target.define("entries", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsSet)(this.node, "Set.prototype.entries");
		var it = getIterator(this.node, "key+value");
		return factory.createIterator(it, proto);
	}, 0, "Set.prototype.entries"));

	var valuesFunc = factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsSet)(this.node, "Set.prototype.values");
		var it = getIterator(this.node, "value");
		return factory.createIterator(it, proto);
	}, 0, "Set.prototype.values");

	$target.define("values", valuesFunc);
	$target.define("keys", valuesFunc);

	var iteratorKey = _typesSymbolType.SymbolType.getByKey("iterator");
	$target.define(iteratorKey, valuesFunc);
};

module.exports = exports["default"];

},{"../types/symbol-type":308,"../utils/contracts":311,"babel-runtime/regenerator":26}],271:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _iterators = require("../iterators");

var _iterators2 = _interopRequireDefault(_iterators);

var _setAdd = require("./set.add");

var _setAdd2 = _interopRequireDefault(_setAdd);

var _setClear = require("./set.clear");

var _setClear2 = _interopRequireDefault(_setClear);

var _setDelete = require("./set.delete");

var _setDelete2 = _interopRequireDefault(_setDelete);

var _setForEach = require("./set.for-each");

var _setForEach2 = _interopRequireDefault(_setForEach);

var _setHas = require("./set.has");

var _setHas2 = _interopRequireDefault(_setHas);

var _setSize = require("./set.size");

var _setSize2 = _interopRequireDefault(_setSize);

var _setIterator = require("./set.iterator");

var _setIterator2 = _interopRequireDefault(_setIterator);

exports["default"] = function ($global, env, factory) {
	var proto = factory.createObject();

	var setClass = factory.createFunction(_regeneratorRuntime.mark(function callee$1$0(iterable) {
		var instance;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			var _this = this;

			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (this.isNew) {
						context$2$0.next = 2;
						break;
					}

					throw TypeError("Constructor Set requires 'new'");

				case 2:
					instance = factory.create("Set");

					if ((0, _utilsContracts.isNullOrUndefined)(iterable)) {
						context$2$0.next = 5;
						break;
					}

					return context$2$0.delegateYield(_regeneratorRuntime.mark(function callee$2$0() {
						var adder, it;
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									(0, _utilsContracts.assertIsObject)(iterable, "Set");

									adder = proto.getValue("add");

									(0, _utilsContracts.assertIsFunction)(adder, "add");

									it = _iterators2["default"].getIterator(iterable);
									context$3$0.next = 6;
									return it.each(_regeneratorRuntime.mark(function callee$3$0(item) {
										return _regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
											while (1) switch (context$4$0.prev = context$4$0.next) {
												case 0:
													context$4$0.next = 2;
													return adder.call(instance, [item]);

												case 2:
												case "end":
													return context$4$0.stop();
											}
										}, callee$3$0, this);
									}));

								case 6:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, _this);
					})(), "t0", 5);

				case 5:
					return context$2$0.abrupt("return", instance);

				case 6:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), proto, { name: "Set" });

	(0, _setAdd2["default"])(proto, env, factory);
	(0, _setClear2["default"])(proto, env, factory);
	(0, _setDelete2["default"])(proto, env, factory);
	(0, _setForEach2["default"])(proto, env, factory);
	(0, _setHas2["default"])(proto, env, factory);
	(0, _setSize2["default"])(proto, env, factory);
	(0, _setIterator2["default"])(proto, env, factory);

	$global.define("Set", setClass);
};

module.exports = exports["default"];

},{"../iterators":287,"../utils/contracts":311,"./set.add":265,"./set.clear":266,"./set.delete":267,"./set.for-each":268,"./set.has":269,"./set.iterator":270,"./set.size":272,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],272:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

exports["default"] = function ($target, env, factory) {
	var getter = function getter() {
		(0, _utilsContracts.assertIsSet)(this, "Set.prototype.size");
		return factory.createPrimitive(this.data.filter(function (v) {
			return v;
		}).length);
	};

	var getterFunc = factory.createGetter(function () {
		return getter.call(this.node);
	}, "size");

	$target.define("size", null, {
		getter: getter,
		get: getterFunc
	});
};

module.exports = exports["default"];

},{"../utils/contracts":311}],273:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../types/primitive-type");

var _utilsNative = require("../utils/native");

var _utilsContracts = require("../utils/contracts");

exports["default"] = function (target, env, factory) {
	target.define("codePointAt", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(pos) {
		var stringValue, position;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.prototype.codePointAt");
					context$2$0.next = 3;
					return (0, _utilsNative.toString)(this.node);

				case 3:
					stringValue = context$2$0.sent;
					context$2$0.next = 6;
					return (0, _utilsNative.toInteger)(pos);

				case 6:
					position = context$2$0.sent;

					if (!(position < 0 || position >= stringValue.length)) {
						context$2$0.next = 9;
						break;
					}

					return context$2$0.abrupt("return", _typesPrimitiveType.UNDEFINED);

				case 9:
					return context$2$0.abrupt("return", factory.createPrimitive(stringValue.codePointAt(position)));

				case 10:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.prototype.codePointAt"));
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],274:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _String$fromCodePoint = require("babel-runtime/core-js/string/from-code-point")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsAsync = require("../utils/async");

var _utilsNative = require("../utils/native");

exports["default"] = function (target, env, factory) {
	target.define("fromCodePoint", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		for (var _len = arguments.length, codePoints = Array(_len), _key = 0; _key < _len; _key++) {
			codePoints[_key] = arguments[_key];
		}

		var args;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsAsync.map)(codePoints, _regeneratorRuntime.mark(function callee$2$0(cp) {
						return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									context$3$0.next = 2;
									return (0, _utilsNative.toNumber)(cp);

								case 2:
									return context$3$0.abrupt("return", context$3$0.sent);

								case 3:
								case "end":
									return context$3$0.stop();
							}
						}, callee$2$0, this);
					}));

				case 2:
					args = context$2$0.sent;
					return context$2$0.abrupt("return", factory.createPrimitive(_String$fromCodePoint.apply(String, _toConsumableArray(args))));

				case 4:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.fromCodePoint"));
};

module.exports = exports["default"];

},{"../utils/async":310,"../utils/native":313,"babel-runtime/core-js/string/from-code-point":14,"babel-runtime/helpers/to-consumable-array":25,"babel-runtime/regenerator":26}],275:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function (target, env, factory) {
	function stringIncludes(source, search, start, end) {
		if (!search) {
			return true;
		}

		if (start < 0 || end > source.length) {
			return false;
		}

		return source.substring(start, end) === search;
	}

	target.define("endsWith", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(searchString, endPosition) {
		var stringValue, searchValue, end;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.prototype.endsWith");
					context$2$0.next = 3;
					return (0, _utilsNative.toString)(this.node);

				case 3:
					stringValue = context$2$0.sent;

					if (!(0, _utilsContracts.isRegExp)(searchString)) {
						context$2$0.next = 6;
						break;
					}

					throw TypeError("First argument to String.prototype.endsWith must not be a regular expression");

				case 6:
					context$2$0.next = 8;
					return (0, _utilsNative.toString)(searchString);

				case 8:
					searchValue = context$2$0.sent;
					end = stringValue.length;

					if ((0, _utilsContracts.isUndefined)(endPosition)) {
						context$2$0.next = 14;
						break;
					}

					context$2$0.next = 13;
					return (0, _utilsNative.toInteger)(endPosition);

				case 13:
					end = context$2$0.sent;

				case 14:

					end = Math.min(Math.max(end, 0), stringValue.length);
					return context$2$0.abrupt("return", factory.createPrimitive(stringIncludes(stringValue, searchValue, end - searchValue.length, end)));

				case 16:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.prototype.endsWith"));

	target.define("startsWith", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(searchString, startPosition) {
		var stringValue, searchValue, start;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.prototype.startsWith");
					context$2$0.next = 3;
					return (0, _utilsNative.toString)(this.node);

				case 3:
					stringValue = context$2$0.sent;

					if (!(0, _utilsContracts.isRegExp)(searchString)) {
						context$2$0.next = 6;
						break;
					}

					throw TypeError("First argument to String.prototype.startsWith must not be a regular expression");

				case 6:
					context$2$0.next = 8;
					return (0, _utilsNative.toString)(searchString);

				case 8:
					searchValue = context$2$0.sent;
					context$2$0.next = 11;
					return (0, _utilsNative.toInteger)(startPosition);

				case 11:
					start = context$2$0.sent;

					start = Math.max(start, 0);
					return context$2$0.abrupt("return", factory.createPrimitive(stringIncludes(stringValue, searchValue, start, start + searchValue.length)));

				case 14:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.prototype.startsWith"));

	target.define("includes", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(searchString, position) {
		var stringValue, searchValue, length, start, end, result;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.prototype.includes");
					context$2$0.next = 3;
					return (0, _utilsNative.toString)(this.node);

				case 3:
					stringValue = context$2$0.sent;

					if (!(0, _utilsContracts.isRegExp)(searchString)) {
						context$2$0.next = 6;
						break;
					}

					throw TypeError("First argument to String.prototype.includes must not be a regular expression");

				case 6:
					context$2$0.next = 8;
					return (0, _utilsNative.toString)(searchString);

				case 8:
					searchValue = context$2$0.sent;
					length = stringValue.length;
					context$2$0.next = 12;
					return (0, _utilsNative.toInteger)(position);

				case 12:
					start = context$2$0.sent;

					start = Math.min(Math.max(start, 0), length);

					end = start + searchValue.length;
					result = false;

				case 16:
					if (!stringIncludes(stringValue, searchValue, start++, end++)) {
						context$2$0.next = 19;
						break;
					}

					result = true;
					return context$2$0.abrupt("break", 20);

				case 19:
					if (end <= length) {
						context$2$0.next = 16;
						break;
					}

				case 20:
					return context$2$0.abrupt("return", factory.createPrimitive(result));

				case 21:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.prototype.includes"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],276:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("../types/primitive-type");

var _typesSymbolType = require("../types/symbol-type");

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function (target, env, factory) {
	var marked1$0 = [getIterator].map(_regeneratorRuntime.mark);

	var iteratorProto = factory.createObject();
	iteratorProto.className = "String Iterator";

	iteratorProto.define("next", factory.createBuiltInFunction(function () {
		var result = this.node.advance();
		if (result.value) {
			return result.value;
		}

		var obj = factory.createObject();
		obj.define("done", factory.createPrimitive(result.done));
		return obj;
	}, 0, "StringIterator.prototype.next"));

	function getIterator(stringValue) {
		var length, done, index, value;
		return _regeneratorRuntime.wrap(function getIterator$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					length = stringValue.length;
					done = false;
					index = 0;

				case 3:
					if (done) {
						context$2$0.next = 10;
						break;
					}

					value = _typesPrimitiveType.UNDEFINED;

					if (index === length) {
						done = true;
					} else {
						value = factory.createPrimitive(stringValue[index++]);
					}

					context$2$0.next = 8;
					return factory.createIteratorResult({ value: value, done: done });

				case 8:
					context$2$0.next = 3;
					break;

				case 10:
				case "end":
					return context$2$0.stop();
			}
		}, marked1$0[0], this);
	}

	var iteratorKey = _typesSymbolType.SymbolType.getByKey("iterator");
	target.define(iteratorKey, factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		var stringValue, it;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.protoype[Symbol.iterator]");
					context$2$0.next = 3;
					return (0, _utilsNative.toString)(this.node);

				case 3:
					stringValue = context$2$0.sent;
					it = getIterator(stringValue);
					return context$2$0.abrupt("return", factory.createIterator(it, iteratorProto));

				case 6:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "[Symbol.iterator]"));
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../types/symbol-type":308,"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],277:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringCodePointAt = require("./string.code-point-at");

var _stringCodePointAt2 = _interopRequireDefault(_stringCodePointAt);

var _stringFromCodePoint = require("./string.from-code-point");

var _stringFromCodePoint2 = _interopRequireDefault(_stringFromCodePoint);

var _stringIncludes = require("./string.includes");

var _stringIncludes2 = _interopRequireDefault(_stringIncludes);

var _stringIterator = require("./string.iterator");

var _stringIterator2 = _interopRequireDefault(_stringIterator);

var _stringNormalize = require("./string.normalize");

var _stringNormalize2 = _interopRequireDefault(_stringNormalize);

var _stringRaw = require("./string.raw");

var _stringRaw2 = _interopRequireDefault(_stringRaw);

var _stringRepeat = require("./string.repeat");

var _stringRepeat2 = _interopRequireDefault(_stringRepeat);

exports["default"] = function (globalObject, env, factory) {
	var stringClass = globalObject.getValue("String");
	var proto = stringClass.getValue("prototype");

	(0, _stringFromCodePoint2["default"])(stringClass, env, factory);
	(0, _stringRaw2["default"])(stringClass, env, factory);
	(0, _stringCodePointAt2["default"])(proto, env, factory);
	(0, _stringIncludes2["default"])(proto, env, factory);
	(0, _stringNormalize2["default"])(proto, env, factory);
	(0, _stringRepeat2["default"])(proto, env, factory);
	(0, _stringIterator2["default"])(proto, env, factory);
};

module.exports = exports["default"];

},{"./string.code-point-at":273,"./string.from-code-point":274,"./string.includes":275,"./string.iterator":276,"./string.normalize":278,"./string.raw":279,"./string.repeat":280,"babel-runtime/helpers/interop-require-default":24}],278:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

var _utilsNative = require("../utils/native");

exports["default"] = function (target, env, factory) {
	target.define("normalize", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(form) {
		var stringValue, formValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.prototype.normalize");
					context$2$0.next = 3;
					return (0, _utilsNative.toString)(this.node);

				case 3:
					stringValue = context$2$0.sent;
					formValue = "NFC";

					if ((0, _utilsContracts.isUndefined)(form)) {
						context$2$0.next = 11;
						break;
					}

					context$2$0.next = 8;
					return (0, _utilsNative.toString)(form);

				case 8:
					formValue = context$2$0.sent;

					if (/^NFK?(?:C|D)$/.test(formValue)) {
						context$2$0.next = 11;
						break;
					}

					throw RangeError("Supported forms are NFC, NFD, NFKC, or NFKD");

				case 11:
					return context$2$0.abrupt("return", factory.createPrimitive(stringValue.normalize(formValue)));

				case 12:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 0, "String.prototype.normalize"));
};

module.exports = exports["default"];

// valid forms

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],279:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

exports["default"] = function (target, env, factory) {
	target.define("raw", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(template) {
		for (var _len = arguments.length, substitutions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			substitutions[_key - 1] = arguments[_key];
		}

		var numberOfSubstitutions, cooked, raw, literalSegments, stringElements, nextIndex, nextSegment, next;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					numberOfSubstitutions = substitutions.length;
					cooked = (0, _utilsNative.toObject)(env, template, true);
					raw = (0, _utilsNative.toObject)(env, cooked.getValue("raw"), true);
					context$2$0.next = 5;
					return (0, _utilsNative.toLength)(raw);

				case 5:
					literalSegments = context$2$0.sent;

					if (!(literalSegments <= 0)) {
						context$2$0.next = 8;
						break;
					}

					return context$2$0.abrupt("return", factory.createPrimitive(""));

				case 8:
					stringElements = [];
					nextIndex = 0;

				case 10:
					if (!(nextIndex < literalSegments)) {
						context$2$0.next = 26;
						break;
					}

					context$2$0.next = 13;
					return (0, _utilsNative.toString)(raw.getValue(nextIndex));

				case 13:
					nextSegment = context$2$0.sent;

					stringElements.push(nextSegment);

					if (!(nextIndex + 1 === literalSegments)) {
						context$2$0.next = 17;
						break;
					}

					return context$2$0.abrupt("break", 26);

				case 17:
					next = "";

					if (!(nextIndex < numberOfSubstitutions)) {
						context$2$0.next = 22;
						break;
					}

					context$2$0.next = 21;
					return (0, _utilsNative.toString)(substitutions[nextIndex]);

				case 21:
					next = context$2$0.sent;

				case 22:

					stringElements.push(next);
					nextIndex++;
					context$2$0.next = 10;
					break;

				case 26:
					return context$2$0.abrupt("return", factory.createPrimitive(stringElements.join("")));

				case 27:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.raw"));
};

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],280:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

var _utilsContracts = require("../utils/contracts");

exports["default"] = function (target, env, factory) {
	target.define("repeat", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(count) {
		var stringValue, countValue, returnValue;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					(0, _utilsContracts.assertIsNotNullOrUndefined)(this.node, "String.prototype.repeat");

					context$2$0.next = 3;
					return (0, _utilsNative.toString)(this.node);

				case 3:
					stringValue = context$2$0.sent;
					context$2$0.next = 6;
					return (0, _utilsNative.toInteger)(count);

				case 6:
					countValue = context$2$0.sent;

					if (!(countValue < 0 || !isFinite(countValue))) {
						context$2$0.next = 9;
						break;
					}

					throw RangeError("Invalid count value");

				case 9:
					returnValue = "";

					if (countValue > 0 && stringValue) {
						if (countValue === 1) {
							returnValue = stringValue;
						} else {
							while (countValue > 0) {
								returnValue += stringValue;
								countValue--;
							}
						}
					}

					return context$2$0.abrupt("return", factory.createPrimitive(returnValue));

				case 12:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "String.prototype.repeat"));
};

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],281:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

var _typesSymbolType = require("../types/symbol-type");

var _typesPrimitiveType = require("../types/primitive-type");

var _utilsContracts = require("../utils/contracts");

exports["default"] = function (globalObject, env, factory) {
	var frozen = { configurable: false, enumerable: false, writable: false };

	var symbolClass = factory.createFunction(_regeneratorRuntime.mark(function callee$1$0(desc) {
		var descString;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (!this.isNew) {
						context$2$0.next = 2;
						break;
					}

					throw TypeError("Symbol is not a constructor");

				case 2:
					context$2$0.next = 4;
					return (0, _utilsNative.toString)(desc);

				case 4:
					descString = context$2$0.sent;
					return context$2$0.abrupt("return", factory.create("Symbol", descString));

				case 6:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}));

	symbolClass.define("for", factory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(key) {
		var keyString, instance;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return (0, _utilsNative.toString)(key);

				case 2:
					keyString = context$2$0.sent;
					instance = _typesSymbolType.SymbolType.getByKey(keyString);

					if (!instance) {
						context$2$0.next = 6;
						break;
					}

					return context$2$0.abrupt("return", instance);

				case 6:
					return context$2$0.abrupt("return", factory.create("Symbol", keyString));

				case 7:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Symbol.for"));

	symbolClass.define("keyFor", factory.createBuiltInFunction(function (sym) {
		return _typesSymbolType.SymbolType.getByInstance(sym) || _typesPrimitiveType.UNDEFINED;
	}, 1, "Symbol.keyFor"));

	var proto = symbolClass.getValue("prototype");
	proto.define("toString", factory.createBuiltInFunction(function () {
		var stringValue = "Symbol(" + this.node.description + ")";
		return factory.createPrimitive(stringValue);
	}, 0, "Symbol.prototype.toString"));

	proto.define("valueOf", factory.createBuiltInFunction(function () {
		(0, _utilsContracts.assertIsNotGeneric)(this.node, "Symbol", "Symbol.prototype.valueOf");
		return this.node;
	}, 0, "Symbol.prototype.valueOf"));

	["hasInstance", "isConcatSpreadable", "iterator", "replace", "species", "toStringTag"].forEach(function (key) {
		var sym = factory.create("Symbol", "@@" + key);

		// add to global registry
		_typesSymbolType.SymbolType.add(key, sym);
		symbolClass.define(key, sym, frozen);
	});

	var toStringTagSymbol = _typesSymbolType.SymbolType.getByKey("toStringTag");
	proto.define(toStringTagSymbol, factory.createPrimitive("Symbol"), { writable: false });

	globalObject.define("Symbol", symbolClass);
};

module.exports = exports["default"];

},{"../types/primitive-type":303,"../types/symbol-type":308,"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],282:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var marked0$0 = [_walk, defaultVisitor].map(_regeneratorRuntime.mark);
var defaultKeys = {};
defaultKeys.ArrayExpression = ["elements"];
defaultKeys.AssignmentExpression = ["right", "left"];
defaultKeys.BinaryExpression = defaultKeys.LogicalExpression = ["left", "right"];
defaultKeys.BlockStatement = defaultKeys.Program = ["body"];
defaultKeys.BreakStatement = defaultKeys.ContinueStatement = ["label"];
defaultKeys.CallExpression = defaultKeys.NewExpression = ["callee", "arguments"];
defaultKeys.CatchClause = ["param", "body"];
defaultKeys.ConditionalExpression = defaultKeys.IfStatement = ["test", "consequent", "alternate"];
defaultKeys.DoWhileStatement = ["body", "test"];
defaultKeys.ExpressionStatement = ["expression"];
defaultKeys.ForStatement = ["init", "test", "body", "update"];
defaultKeys.ForInStatement = ["right", "left", "body"];
defaultKeys.FunctionDeclaration = defaultKeys.FunctionExpression = ["id", "params", "body"];
defaultKeys.LabeledStatement = ["label", "body"];
defaultKeys.MemberExpression = ["object", "property"];
defaultKeys.ObjectExpression = ["properties"];
defaultKeys.Property = ["key", "value"];
defaultKeys.ThrowStatement = defaultKeys.UnaryExpression = defaultKeys.UpdateExpression = defaultKeys.ReturnStatement = ["argument"];
defaultKeys.SequenceExpression = ["expressions"];
defaultKeys.SwitchStatement = ["discriminant", "cases"];
defaultKeys.SwitchCase = ["consequent"];
defaultKeys.TryStatement = ["block", "handler", "finalizer"];
defaultKeys.VariableDeclaration = ["declarations"];
defaultKeys.VariableDeclarator = ["id", "init"];
defaultKeys.WhileStatement = ["test", "body"];
defaultKeys.WithStatement = ["object", "body"];

// ignore
defaultKeys.DebuggerStatement = defaultKeys.EmptyStatement = defaultKeys.Identifier = defaultKeys.Literal = defaultKeys.ThisExpression = [];

function _walk(visitors, node, parent, state, w) {
	var i, ln, visitor;
	return _regeneratorRuntime.wrap(function _walk$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				// create a bound walk function to pass to visitors so they can
				// continue walking their child nodes
				w = w || _walk.bind(null, visitors);

				if (!Array.isArray(node)) {
					context$1$0.next = 10;
					break;
				}

				i = 0, ln = node.length;

			case 3:
				if (!(i < ln)) {
					context$1$0.next = 8;
					break;
				}

				return context$1$0.delegateYield(_walk(visitors, node[i], parent, state, w), "t0", 5);

			case 5:
				i++;
				context$1$0.next = 3;
				break;

			case 8:
				context$1$0.next = 14;
				break;

			case 10:
				if (!node) {
					context$1$0.next = 14;
					break;
				}

				visitor = visitors[node.type];

				if (!(typeof visitor === "function")) {
					context$1$0.next = 14;
					break;
				}

				return context$1$0.delegateYield(visitor(node, parent, state, w), "t1", 14);

			case 14:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function makeVisitor(keys) {
	// if (keys.length === 0) {
	// 	return null;
	// }

	return _regeneratorRuntime.mark(function visitor(node, parent, state, w) {
		var i, ln, key;
		return _regeneratorRuntime.wrap(function visitor$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return node;

				case 2:
					i = 0, ln = keys.length;

				case 3:
					if (!(i < ln)) {
						context$2$0.next = 10;
						break;
					}

					key = keys[i];

					if (!node[key]) {
						context$2$0.next = 7;
						break;
					}

					return context$2$0.delegateYield(w(node[key], node, state), "t0", 7);

				case 7:
					i++;
					context$2$0.next = 3;
					break;

				case 10:
				case "end":
					return context$2$0.stop();
			}
		}, visitor, this);
	});
}

function defaultVisitor(node, parent, state, w) {
	var i, ln, childKey, child;
	return _regeneratorRuntime.wrap(function defaultVisitor$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return node;

			case 2:
				if (!(node.type in defaultKeys)) {
					context$1$0.next = 12;
					break;
				}

				i = 0, ln = defaultKeys[node.type].length;

			case 4:
				if (!(i < ln)) {
					context$1$0.next = 12;
					break;
				}

				childKey = defaultKeys[node.type][i];
				child = node[childKey];

				if (!child) {
					context$1$0.next = 9;
					break;
				}

				return context$1$0.delegateYield(w(child, node, state), "t0", 9);

			case 9:
				i++;
				context$1$0.next = 4;
				break;

			case 12:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

function extendVisitors(visitors) {
	_Object$keys(visitors).forEach(function (key) {
		var visitor = visitors[key];

		if (Array.isArray(visitor)) {
			visitors[key] = makeVisitor(visitor);
		} else if (visitors[key] === true) {
			visitors[key] = defaultVisitor;
		}
	});

	return visitors;
}

// make default visitor
// function* defaultVisitor (node, parent, state, w) {
// 	yield node;

// 	for (let i = 0, ln = defaultKeys[node.type]; i < ln; i++) {
// 		let childKey = defaultKeys[node.type][i];
// 		let child = node[childKey];

// 		if (child) {
// 			yield* w(child, node, state);
// 		}
// 	}
// }

var defaultVisitors = {};
_Object$keys(defaultKeys).forEach(function (key) {
	return defaultVisitors[key] = defaultVisitor;
});

function wrapVisitors(visitors, baseVisitors) {
	var wrappedVisitors = _Object$assign({}, baseVisitors);

	_Object$keys(visitors).forEach(function (key) {
		if (visitors[key] === false) {
			wrappedVisitors[key] = false;
			return;
		}

		if (Array.isArray(visitors[key])) {
			wrappedVisitors[key] = makeVisitor(visitors[key]);
			return;
		}

		var baseVisitor = baseVisitors[key];

		wrappedVisitors[key] = _regeneratorRuntime.mark(function callee$2$0() {
			var result,
			    args$3$0 = arguments;
			return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						context$3$0.next = 2;
						return visitors[key].apply(visitors, args$3$0);

					case 2:
						result = context$3$0.sent;

						if (!(result !== false && baseVisitor)) {
							context$3$0.next = 5;
							break;
						}

						return context$3$0.delegateYield(baseVisitor.apply(undefined, args$3$0), "t0", 5);

					case 5:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});
	});

	return wrappedVisitors;
}

var EstreeWalker = (function () {
	function EstreeWalker(node, visitors, state) {
		_classCallCheck(this, EstreeWalker);

		this.root = node;
		this.visitors = visitors;
		this.state = state;
	}

	_createClass(EstreeWalker, [{
		key: _Symbol$iterator,
		value: function value() {
			return _walk(this.visitors, this.root, null, this.state);
		}
	}], [{
		key: "create",
		value: function create(node, visitors, state) {
			return new EstreeWalker(node, visitors || defaultVisitors, state);
		}
	}, {
		key: "walk",
		value: function walk(node, visitors, state) {
			var wrappedVisitors = wrapVisitors(visitors, defaultVisitors);
			var it = _walk(wrappedVisitors, node, null, state);
			var done = false;
			var value = undefined;

			do {
				var _it$next = it.next(value);

				done = _it$next.done;
				value = _it$next.value;
			} while (!done);
		}
	}, {
		key: "extend",
		value: function extend(node, visitors, state) {
			var merged = _Object$assign({}, defaultKeys, visitors);
			return EstreeWalker.create(node, extendVisitors(merged), state);
		}
	}]);

	return EstreeWalker;
})();

exports["default"] = EstreeWalker;
;
module.exports = exports["default"];

},{"babel-runtime/core-js/object/assign":7,"babel-runtime/core-js/object/keys":11,"babel-runtime/core-js/symbol/iterator":17,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/regenerator":26}],283:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typesPrimitiveType = require("./types/primitive-type");

var _executionResult = require("./execution-result");

var _visitors = require("./visitors");

var _visitors2 = _interopRequireDefault(_visitors);

var ExecutionContext = (function () {
	function ExecutionContext(env, node, callee, isNew) {
		_classCallCheck(this, ExecutionContext);

		this.node = node;
		this.callee = callee;
		this.env = env;
		this.isNew = !!isNew;

		this.label = "";
		this.value = null;
		this.strict = false;
	}

	_createClass(ExecutionContext, [{
		key: "execute",
		value: _regeneratorRuntime.mark(function execute() {
			var executionResult;
			return _regeneratorRuntime.wrap(function execute$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						executionResult = undefined;
						context$2$0.prev = 1;
						context$2$0.next = 4;
						return _visitors2["default"].visit(this);

					case 4:
						executionResult = context$2$0.sent;
						context$2$0.next = 10;
						break;

					case 7:
						context$2$0.prev = 7;
						context$2$0.t0 = context$2$0["catch"](1);

						executionResult = this.raise(context$2$0.t0);

					case 10:
						if (!(executionResult && executionResult.raised)) {
							context$2$0.next = 12;
							break;
						}

						throw this.env.objectFactory.create("Error", executionResult.result);

					case 12:
						return context$2$0.abrupt("return", executionResult || this.empty());

					case 13:
					case "end":
						return context$2$0.stop();
				}
			}, execute, this, [[1, 7]]);
		})
	}, {
		key: "create",
		value: function create(node, callee, isNew) {
			var context = new ExecutionContext(this.env, node, callee || this.callee, isNew);
			context.value = this.value;
			return context;
		}
	}, {
		key: "createLabel",
		value: function createLabel(node, label) {
			var context = this.create(node);
			context.label = label;
			return context;
		}
	}, {
		key: "cancel",
		value: function cancel(label) {
			var result = this.result(this.value, label);
			result.cancel = true;
			return result;
		}
	}, {
		key: "skip",
		value: function skip(label) {
			var result = this.result(this.value, label);
			result.skip = true;
			return result;
		}
	}, {
		key: "raise",
		value: function raise(err) {
			var result = this.result(err);
			result.raised = result.exit = true;
			return result;
		}
	}, {
		key: "exit",
		value: function exit(value) {
			this.callee = null;

			var result = this.result(value);
			result.exit = true;
			return result;
		}
	}, {
		key: "result",
		value: function result(value, name, obj) {
			this.value = value;
			return new _executionResult.ExecutionResult(value, name, obj);
		}
	}, {
		key: "empty",
		value: function empty() {
			return this.result(_typesPrimitiveType.UNDEFINED);
		}
	}]);

	return ExecutionContext;
})();

exports.ExecutionContext = ExecutionContext;
;

},{"./execution-result":284,"./types/primitive-type":303,"./visitors":331,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],284:[function(require,module,exports){
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
		this.raised = false;
	}

	_createClass(ExecutionResult, [{
		key: "isAbrupt",
		value: function isAbrupt() {
			return this.cancel || this.exit || this.raised;
		}
	}, {
		key: "canBreak",
		value: function canBreak() {
			return this.isAbrupt() || this.skip;
		}
	}, {
		key: "shouldBreak",
		value: function shouldBreak(context, loop, priorResult) {
			if (this.exit || this.raised) {
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

exports.ExecutionResult = ExecutionResult;

},{"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20}],285:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _env = require("./env");

var _utilsAsync = require("./utils/async");

var Sandbox = (function () {
	/**
  * Creates a new Sandbox
  * @class
  * @param {AST} ast - The abstract syntax tree to execute.
  * @param {Object} [options] The options to use with the sandbox.
  */

	function Sandbox(ast) {
		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		_classCallCheck(this, Sandbox);

		this.ast = ast;
		this.options = options;
	}

	/**
  * Executes the abstract syntax tree (AST) against the provided environment (or the default
  * environment if not provided)
  * @param {Environment} [env] - The environment to execute the AST against.
  * @returns {ObjectType|Promise} Returns a resolved value syncronously if possible, otherwise
  * returns a promise which will resolve to the result.
  */

	_createClass(Sandbox, [{
		key: "execute",
		value: function execute(env) {
			if (!env) {
				env = new _env.Environment();
				env.init(this.options);
			}

			var executionResult = (0, _utilsAsync.exhaust)(env.createExecutionContext(this.ast).execute());
			if ((0, _utilsAsync.isThenable)(executionResult)) {
				return executionResult.then(function (res) {
					return res.result;
				});
			}

			return executionResult.result;
		}

		/**
   * Executes the abstract syntax tree (AST) against the provided environment (or the default
   * environment if not provided)
   * @param {Environment} [env] - The environment to execute the AST against.
   * @returns {Promise} A promise that resolves with the result of the execution
   */
	}, {
		key: "resolve",
		value: function resolve(env) {
			// always return a promise
			return _Promise.resolve(this.execute(env));
		}
	}]);

	return Sandbox;
})();

exports.Sandbox = Sandbox;

},{"./env":119,"./utils/async":310,"babel-runtime/core-js/promise":13,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20}],286:[function(require,module,exports){
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

function yieldIndex(source, key) {
	var prop, value;
	return _regeneratorRuntime.wrap(function yieldIndex$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				prop = source.getProperty(key);

				if (!prop) {
					context$1$0.next = 5;
					break;
				}

				value = prop.getValue();
				context$1$0.next = 5;
				return { value: value, key: key };

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

},{"babel-runtime/regenerator":26}],287:[function(require,module,exports){
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

var _iterableIterator = require("./iterable-iterator");

var _iterableIterator2 = _interopRequireDefault(_iterableIterator);

var _typesSymbolType = require("../types/symbol-type");

var _utilsNative = require("../utils/native");

var _utilsAsync = require("../utils/async");

var SPARE_ARRAY_DENSITY = 0.8;

function arrayIsSparse(arr, length) {
	var ownPropertyCount = _Object$keys(arr.properties).length;

	// this is just to roughly estimate how dense the array is
	var density = (ownPropertyCount - 1) / length;
	return density < SPARE_ARRAY_DENSITY;
}

var iterate = {
	getIterator: function getIterator(obj) {
		var iteratorKey = _typesSymbolType.SymbolType.getByKey("iterator");
		var iterator = obj.getProperty(iteratorKey);
		if (iterator) {
			var fn = iterator.getValue();
			var it = (0, _utilsAsync.exhaust)(fn.call(obj));
			return _iterableIterator2["default"].create(it);
		}

		var length = (0, _utilsAsync.exhaust)((0, _utilsNative.toLength)(obj));
		return this.forward(obj, 0, length);
	},

	forward: function forward(obj, lo, hi) {
		// string will never be dense
		if (obj.className === "String") {
			return _stringIterator2["default"].create(obj, lo);
		}

		if (obj.className !== "Array" || arrayIsSparse(obj, hi)) {
			return _sparseIterator2["default"].create(obj, lo, hi - 1);
		}

		return _arrayIterator2["default"].create(obj, lo, hi);
	},

	reverse: function reverse(obj, hi) {
		var lo = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		if (obj.className === "String") {
			return _stringIterator2["default"].create(obj, hi, true);
		}

		if (obj.className !== "Array" || arrayIsSparse(obj, hi)) {
			return _sparseIterator2["default"].create(obj, lo, hi, true);
		}

		return _arrayIterator2["default"].create(obj, lo, hi, true);
	}
};

exports["default"] = iterate;
module.exports = exports["default"];

},{"../types/symbol-type":308,"../utils/async":310,"../utils/native":313,"./array-iterator":286,"./iterable-iterator":288,"./sparse-iterator":289,"./string-iterator":290,"babel-runtime/core-js/object/keys":11,"babel-runtime/helpers/interop-require-default":24}],288:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsNative = require("../utils/native");

var _utilsAsync = require("../utils/async");

var _typesPrimitiveType = require("../types/primitive-type");

var IterableIterator = (function () {
	function IterableIterator(it) {
		_classCallCheck(this, IterableIterator);

		this.currentIndex = 0;
		this.iterator = it;
		this.advancer = it.getValue("next");
	}

	_createClass(IterableIterator, [{
		key: "next",
		value: function next() {
			var result = (0, _utilsAsync.exhaust)(this.advancer.call(this.iterator));
			var value = { key: this.currentIndex++, value: _typesPrimitiveType.UNDEFINED };

			var valueProperty = result.getProperty("value");
			if (valueProperty) {
				value.value = valueProperty.getValue();
			}

			var done = (0, _utilsNative.toBoolean)(result.getValue("done"));
			return { done: done, value: value };
		}
	}, {
		key: "each",
		value: _regeneratorRuntime.mark(function each(func) {
			var done, current, _next;

			return _regeneratorRuntime.wrap(function each$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						done = false;

					case 1:
						if (done) {
							context$2$0.next = 18;
							break;
						}

						context$2$0.prev = 2;
						current = undefined;
						_next = this.next();
						done = _next.done;
						current = _next.value;

						if (done) {
							context$2$0.next = 10;
							break;
						}

						context$2$0.next = 10;
						return func(current.value || _typesPrimitiveType.UNDEFINED);

					case 10:
						context$2$0.next = 16;
						break;

					case 12:
						context$2$0.prev = 12;
						context$2$0.t0 = context$2$0["catch"](2);

						this["return"]();
						throw context$2$0.t0;

					case 16:
						context$2$0.next = 1;
						break;

					case 18:
					case "end":
						return context$2$0.stop();
				}
			}, each, this, [[2, 12]]);
		})
	}, {
		key: "return",
		value: function _return() {
			var propInfo = this.iterator.getProperty("return");
			if (propInfo) {
				var returnFunc = propInfo.getValue();
				return (0, _utilsAsync.exhaust)(returnFunc.call(this.iterator));
			}

			return _typesPrimitiveType.UNDEFINED;
		}
	}], [{
		key: "create",
		value: function create(it) {
			return new IterableIterator(it);
		}
	}]);

	return IterableIterator;
})();

exports["default"] = IterableIterator;
module.exports = exports["default"];

},{"../types/primitive-type":303,"../utils/async":310,"../utils/native":313,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/regenerator":26}],289:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("../utils/contracts");

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
					if (!(_name in this.props) && (0, _utilsContracts.isInteger)(_name)) {
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
				var key = this.position = this.keys.shift();
				var value = this.props[key].getValue();

				return {
					value: { value: value, key: key },
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

},{"../utils/contracts":311,"babel-runtime/core-js/object/create":8,"babel-runtime/core-js/symbol/iterator":17,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20}],290:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var marked0$0 = [ascIterator, descIterator].map(_regeneratorRuntime.mark);
function ascIterator(stringValue, start, length) {
	var key, value;
	return _regeneratorRuntime.wrap(function ascIterator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				key = start;

			case 1:
				if (!(key < length)) {
					context$1$0.next = 8;
					break;
				}

				value = stringValue.getValue(key);
				context$1$0.next = 5;
				return { value: value, key: key };

			case 5:
				key++;
				context$1$0.next = 1;
				break;

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function descIterator(stringValue, start) {
	var key, value;
	return _regeneratorRuntime.wrap(function descIterator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				key = start;

			case 1:
				if (!(key >= 0)) {
					context$1$0.next = 8;
					break;
				}

				value = stringValue.getValue(key);
				context$1$0.next = 5;
				return { value: value, key: key };

			case 5:
				key--;
				context$1$0.next = 1;
				break;

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

var StringIterator = {
	create: function create(value, start, desc) {
		var length = value.toNative().length;
		return (desc ? descIterator : ascIterator)(value, start, length);
	}
};

exports["default"] = StringIterator;
module.exports = exports["default"];

},{"babel-runtime/regenerator":26}],291:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isReserved = isReserved;
exports.isStrictReserved = isStrictReserved;
var keywords = {
	"es5": ["do", "if", "in", "for", "new", "try", "var", "case", "else", "enum", "null", "this", "true", "void", "with", "break", "catch", "class", "const", "false", "super", "throw", "while", "delete", "export", "import", "return", "switch", "typeof", "default", "extends", "finally", "continue", "debugger", "function", "instanceof"],

	"es5strict": ["implements", "let", "private", "public", "interface", "package", "protected", "static", "yield"]
};

function isReserved(name) {
	return keywords.es5.indexOf(name) >= 0;
}

function isStrictReserved(name) {
	return keywords.es5strict.indexOf(name) >= 0;
}

},{}],292:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsContracts = require("./utils/contracts");

function validateAssignment(left, strict) {
	if (strict && left.type === "Identifier") {
		(0, _utilsContracts.assertIsValidName)(left.name, true);
	}
}

var rules = {
	AssignmentExpression: function AssignmentExpression(node, parent, state) {
		validateAssignment(node.left, state.strict);
	},

	CatchClause: function CatchClause(node, parent, state) {
		(0, _utilsContracts.assertIsValidName)(node.param.name, state.strict);
	},

	Identifier: function Identifier(node, parent, state) {
		(0, _utilsContracts.assertIsValidIdentifier)(node.name, state.strict);
	},

	FunctionDeclaration: function FunctionDeclaration(node, parent, state) {
		(0, _utilsContracts.assertIsValidName)(node.id.name, state.strict);
		(0, _utilsContracts.assertAreValidArguments)(node.params, state.strict);
	},

	FunctionExpression: function FunctionExpression(node, parent, state) {
		if (node.id) {
			(0, _utilsContracts.assertIsValidName)(node.id.name, state.strict);
		}

		(0, _utilsContracts.assertAreValidArguments)(node.params, state.strict);
	},

	Literal: function Literal(node, parent, state) {
		if (state.strict && node.raw) {
			if ((0, _utilsContracts.isOctalLiteral)(node.raw, node.value)) {
				throw SyntaxError("Octal literals are not allowed in strict mode.");
			}
		}
	},

	UpdateExpression: function UpdateExpression(node, parent, state) {
		validateAssignment(node.argument, state.strict);
	},

	VariableDeclarator: function VariableDeclarator(node, parent, state) {
		(0, _utilsContracts.assertIsValidName)(node.id.name, state.strict);
	},

	WithStatement: function WithStatement(node, parent, state) {
		if (state.strict) {
			throw SyntaxError("Strict mode code may not include a with statement");
		}
	}
};

exports["default"] = rules;
module.exports = exports["default"];

},{"./utils/contracts":311}],293:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

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
})(_objectType.ObjectType);

exports.ArgumentType = ArgumentType;

},{"./object-type":302,"babel-runtime/core-js/object/create":8,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],294:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _utilsNative = require("../utils/native");

var _utilsContracts = require("../utils/contracts");

var _iterators = require("../iterators");

var _iterators2 = _interopRequireDefault(_iterators);

var _utilsAsync = require("../utils/async");

var ArrayType = (function (_ObjectType) {
	_inherits(ArrayType, _ObjectType);

	function ArrayType() {
		_classCallCheck(this, ArrayType);

		_get(Object.getPrototypeOf(ArrayType.prototype), "constructor", this).call(this);
		this.className = "Array";
	}

	_createClass(ArrayType, [{
		key: "init",
		value: function init(env) {
			_get(Object.getPrototypeOf(ArrayType.prototype), "init", this).apply(this, arguments);
			this.defineOwnProperty("length", { value: env.objectFactory.createPrimitive(0), writable: true });
		}
	}, {
		key: "setValue",
		value: function setValue(name, value) {
			if (name === "length") {
				return this.setLength({ value: value }, false);
			}

			return _get(Object.getPrototypeOf(ArrayType.prototype), "setValue", this).apply(this, arguments);
		}
	}, {
		key: "setIndex",
		value: function setIndex(key, value, descriptor, throwOnError) {
			descriptor = descriptor || { value: value, configurable: true, enumerable: true, writable: true };

			var index = Number(key);
			var lengthProperty = this.getProperty("length");
			var lengthValue = lengthProperty.getValue().toNative();

			if (!lengthProperty.canSetValue() && index >= lengthValue || !_get(Object.getPrototypeOf(ArrayType.prototype), "defineOwnProperty", this).call(this, key, descriptor)) {

				if (throwOnError) {
					throw TypeError("Cannot define property: " + key + ", object is not extensible.");
				}

				return false;
			}

			if (index >= lengthValue) {
				var newLength = this[_Symbol$for("env")].objectFactory.createPrimitive(index + 1);
				this.defineOwnProperty("length", { value: newLength });
			}

			return true;
		}
	}, {
		key: "setLength",
		value: function setLength(descriptor, throwOnError) {
			var env = this[_Symbol$for("env")];

			var newLengthValue = (0, _utilsAsync.exhaust)((0, _utilsNative.toUInt32)(descriptor.value));
			if (newLengthValue !== (0, _utilsAsync.exhaust)((0, _utilsNative.toNumber)(descriptor.value))) {
				throw RangeError("Array length out of range");
			}

			descriptor.value = env.objectFactory.createPrimitive(newLengthValue);
			var newLength = descriptor.value;
			var currentLength = this.getValue("length");
			(0, _utilsContracts.assertIsValidArrayLength)(newLength.toNative());

			if (newLength.toNative() >= currentLength.toNative()) {
				return _get(Object.getPrototypeOf(ArrayType.prototype), "defineOwnProperty", this).call(this, "length", descriptor, throwOnError);
			}

			var isWritable = this.getProperty("length").writable;
			if (isWritable === false) {
				if (throwOnError) {
					throw TypeError("Cannot redefine property: length");
				}

				return false;
			}

			var notWritable = "writable" in descriptor && !descriptor.writable;
			if (notWritable) {
				// set to writable in case removing items fails
				descriptor.writable = true;
			}

			var i = currentLength.toNative();
			if (!_get(Object.getPrototypeOf(ArrayType.prototype), "defineOwnProperty", this).call(this, "length", descriptor, throwOnError)) {
				return false;
			}

			var succeeded = true;

			if (i > newLength.toNative()) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = _getIterator(_iterators2["default"].reverse(this, i - 1, newLength.toNative())), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var key = _step.value.key;

						if (!this.deleteProperty(key, false)) {
							newLength = env.objectFactory.createPrimitive(key + 1);
							this.defineOwnProperty("length", { value: newLength });
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
				this.defineOwnProperty("length", { writable: false });
			}

			if (!succeeded && throwOnError) {
				throw TypeError("Cannot redefine property: length");
			}

			return succeeded;
		}
	}, {
		key: "defineOwnProperty",
		value: function defineOwnProperty(name, descriptor, throwOnError) {
			if ((0, _utilsContracts.isInteger)(name) && (0, _utilsContracts.isValidArrayLength)(Number(name) + 1) && !this.owns(name)) {
				return this.setIndex(name, null, descriptor, throwOnError);
			}

			if (name === "length" && "length" in this.properties && descriptor && "value" in descriptor) {
				return this.setLength(descriptor, throwOnError);
			}

			return _get(Object.getPrototypeOf(ArrayType.prototype), "defineOwnProperty", this).apply(this, arguments);
		}
	}, {
		key: "toNative",
		value: function toNative() {
			var arr = [];

			// this won't grab properties from the prototype - do we care?
			// it's an edge case but we may want to address it
			for (var index in this.properties) {
				if (this.properties[index].enumerable) {
					arr[Number(index)] = this.getValue(index).toNative();
				}
			}

			return arr;
		}
	}]);

	return ArrayType;
})(_objectType.ObjectType);

exports.ArrayType = ArrayType;

},{"../iterators":287,"../utils/async":310,"../utils/contracts":311,"../utils/native":313,"./object-type":302,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/symbol/for":16,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/helpers/interop-require-default":24}],295:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var CollectionType = (function (_ObjectType) {
	_inherits(CollectionType, _ObjectType);

	function CollectionType(className) {
		_classCallCheck(this, CollectionType);

		_get(Object.getPrototypeOf(CollectionType.prototype), "constructor", this).call(this);
		this.className = className;
		this.data = [];
	}

	return CollectionType;
})(_objectType.ObjectType);

exports.CollectionType = CollectionType;

},{"./object-type":302,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],296:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

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
		key: "toNative",
		value: function toNative() {
			return this.value;
		}
	}]);

	return DateType;
})(_objectType.ObjectType);

exports.DateType = DateType;

},{"./object-type":302,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],297:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var ErrorType = (function (_ObjectType) {
	_inherits(ErrorType, _ObjectType);

	function ErrorType(source) {
		_classCallCheck(this, ErrorType);

		_get(Object.getPrototypeOf(ErrorType.prototype), "constructor", this).call(this);
		this.source = source;
		this.className = "Error";
	}

	_createClass(ErrorType, [{
		key: "toNative",
		value: function toNative() {
			return this.source;
		}
	}]);

	return ErrorType;
})(_objectType.ObjectType);

exports.ErrorType = ErrorType;

},{"./object-type":302,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],298:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _propertyDescriptor = require("./property-descriptor");

var _primitiveType = require("./primitive-type");

var _utilsContracts = require("../utils/contracts");

function getParameterLength(params) {
	for (var i = 0, ln = params.length; i < ln; i++) {
		// parameter length should only include the first "Formal" parameters
		if (params[i].type !== "Identifier") {
			return i;
		}
	}

	return params.length;
}

var FunctionType = (function (_ObjectType) {
	_inherits(FunctionType, _ObjectType);

	function FunctionType(node) {
		_classCallCheck(this, FunctionType);

		_get(Object.getPrototypeOf(FunctionType.prototype), "constructor", this).call(this);
		this.type = "function";
		this.className = "Function";
		this.native = false;
		this.node = node;

		this.arrow = node && node.type === "ArrowFunctionExpression";
		this.canConstruct = !this.arrow;

		this.boundScope = null;
		this.boundThis = null;
	}

	_createClass(FunctionType, [{
		key: "init",
		value: function init(env, proto, descriptor, strict) {
			_get(Object.getPrototypeOf(FunctionType.prototype), "init", this).apply(this, arguments);

			if (strict !== undefined) {
				this.strict = strict;
			}

			// set length property from the number of parameters
			this.defineOwnProperty("length", { value: env.objectFactory.createPrimitive(getParameterLength(this.node.params)) });

			if (!this.arrow) {
				// functions have a prototype
				proto = proto || env.objectFactory.createObject();
				this.defineOwnProperty("prototype", { value: proto, writable: true });

				// set the contructor property as an instance of itself
				proto.properties.constructor = new _propertyDescriptor.PropertyDescriptor(this, { configurable: true, enumerable: false, writable: true, value: this });
			}

			this.addPoison();
		}
	}, {
		key: "addPoison",
		value: function addPoison() {
			var env = this[_Symbol$for("env")];
			if (env.options.ecmaVersion > 5) {
				return;
			}

			if (this.isStrict()) {
				var thrower = function thrower() {
					throw TypeError();
				};

				var throwerFunc = env.objectFactory.createBuiltInFunction(thrower);

				var throwerProp = {
					get: throwerFunc,
					getter: thrower,
					set: throwerFunc,
					setter: thrower,
					enumerable: false,
					configurable: false
				};

				this.define("caller", null, throwerProp);
				this.define("arguments", null, throwerProp);
			}
		}
	}, {
		key: "call",
		value: _regeneratorRuntime.mark(function call(thisArg, args, callee) {
			if (args === undefined) args = [];
			var self, env, scope;
			return _regeneratorRuntime.wrap(function call$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						self = this;
						env = this[_Symbol$for("env")];
						scope = env.createExecutionScope(this, thisArg);
						context$2$0.next = 5;
						return scope.loadArgs(this.node.params, args, this);

					case 5:
						scope.init(this.node && this.node.body);

						context$2$0.next = 8;
						return scope.use(_regeneratorRuntime.mark(function callee$2$0() {
							var executionResult, shouldReturn;
							return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
								while (1) switch (context$3$0.prev = context$3$0.next) {
									case 0:
										context$3$0.next = 2;
										return env.createExecutionContext(self.node.body, callee).execute();

									case 2:
										executionResult = context$3$0.sent;
										shouldReturn = self.arrow || executionResult && executionResult.exit;

										if (!(shouldReturn && executionResult.result)) {
											context$3$0.next = 6;
											break;
										}

										return context$3$0.abrupt("return", executionResult.result);

									case 6:
										return context$3$0.abrupt("return", _primitiveType.UNDEFINED);

									case 7:
									case "end":
										return context$3$0.stop();
								}
							}, callee$2$0, this);
						}));

					case 8:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 9:
					case "end":
						return context$2$0.stop();
				}
			}, call, this);
		})
	}, {
		key: "construct",
		value: _regeneratorRuntime.mark(function construct(thisArg, args, callee) {
			if (args === undefined) args = [];
			var result;
			return _regeneratorRuntime.wrap(function construct$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						if (!thisArg || thisArg === this) {
							thisArg = this[_Symbol$for("env")].objectFactory.createObject(this);
						}

						context$2$0.next = 3;
						return this.call(thisArg, args, callee);

					case 3:
						result = context$2$0.sent;

						if (!(result && !result.isPrimitive)) {
							context$2$0.next = 6;
							break;
						}

						return context$2$0.abrupt("return", result);

					case 6:
						return context$2$0.abrupt("return", thisArg);

					case 7:
					case "end":
						return context$2$0.stop();
				}
			}, construct, this);
		})
	}, {
		key: "bindThis",
		value: function bindThis(thisArg) {
			this.boundThis = this.boundThis || thisArg;
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

			return this.strict = (0, _utilsContracts.isStrictNode)(this.node.body.body);
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
			if ((0, _utilsContracts.isNullOrUndefined)(proto) || !(0, _utilsContracts.isObject)(proto)) {
				throw TypeError("Function has non-object prototype in instanceof check");
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
		key: "toNative",
		value: function toNative() {
			return undefined;
		}
	}]);

	return FunctionType;
})(_objectType.ObjectType);

exports.FunctionType = FunctionType;

},{"../utils/contracts":311,"./object-type":302,"./primitive-type":303,"./property-descriptor":304,"babel-runtime/core-js/symbol/for":16,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/regenerator":26}],299:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var IteratorType = (function (_ObjectType) {
	_inherits(IteratorType, _ObjectType);

	function IteratorType(iterable) {
		var kind = arguments.length <= 1 || arguments[1] === undefined ? "key+value" : arguments[1];

		_classCallCheck(this, IteratorType);

		_get(Object.getPrototypeOf(IteratorType.prototype), "constructor", this).call(this);

		this.iterable = iterable;
		this.position = 0;
		this.className = "Iterator";
		this.kind = kind;
	}

	_createClass(IteratorType, [{
		key: "advance",
		value: function advance() {
			return this.iterable.next();
		}
	}]);

	return IteratorType;
})(_objectType.ObjectType);

exports.IteratorType = IteratorType;

},{"./object-type":302,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],300:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _functionType = require("./function-type");

var _propertyDescriptor = require("./property-descriptor");

var _primitiveType = require("./primitive-type");

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
		value: function init(env, proto, descriptor) {
			this[_Symbol$for("env")] = env;

			var length = this.nativeFunction.length;
			if ("nativeLength" in this.nativeFunction) {
				length = this.nativeFunction.nativeLength;
			}

			if ("strict" in this.nativeFunction) {
				this.strict = this.nativeFunction.strict;
			}

			this.defineOwnProperty("length", {
				value: env.objectFactory.createPrimitive(length),
				configurable: false,
				enumerable: false,
				writable: false
			});

			if (proto !== null) {
				proto = proto || env.objectFactory.createObject();
				proto.properties.constructor = new _propertyDescriptor.PropertyDescriptor(this, { configurable: true, enumerable: false, writable: true, value: this });

				descriptor = descriptor || { configurable: false, enumerable: false, writable: true };
				var protoDescriptor = {
					value: proto,
					configurable: descriptor.configurable,
					enumerable: descriptor.enumerable,
					writable: descriptor.writable
				};

				this.defineOwnProperty("prototype", protoDescriptor);
			}

			this.addPoison();
		}
	}, {
		key: "call",
		value: _regeneratorRuntime.mark(function call(thisArg, args, callee) {
			if (args === undefined) args = [];
			var env, self, scope;
			return _regeneratorRuntime.wrap(function call$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						callee = callee || this;
						env = this[_Symbol$for("env")];

						if (!thisArg) {
							if (this.strict || env.isStrict()) {
								thisArg = _primitiveType.UNDEFINED;
							} else {
								thisArg = env.global;
							}
						}

						self = this;
						scope = env.createExecutionScope(this, thisArg);
						context$2$0.next = 7;
						return scope.use(_regeneratorRuntime.mark(function callee$2$0() {
							return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
								while (1) switch (context$3$0.prev = context$3$0.next) {
									case 0:
										context$3$0.next = 2;
										return self.nativeFunction.apply(env.createExecutionContext(thisArg, callee), args);

									case 2:
										return context$3$0.abrupt("return", context$3$0.sent);

									case 3:
									case "end":
										return context$3$0.stop();
								}
							}, callee$2$0, this);
						}));

					case 7:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 8:
					case "end":
						return context$2$0.stop();
				}
			}, call, this);
		})
	}, {
		key: "construct",
		value: _regeneratorRuntime.mark(function construct(thisArg) {
			var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
			var self, env, scope;
			return _regeneratorRuntime.wrap(function construct$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						self = this;
						env = this[_Symbol$for("env")];
						scope = env.createExecutionScope(this, thisArg);
						context$2$0.next = 5;
						return scope.use(_regeneratorRuntime.mark(function callee$2$0() {
							return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
								while (1) switch (context$3$0.prev = context$3$0.next) {
									case 0:
										context$3$0.next = 2;
										return self.nativeFunction.apply(env.createExecutionContext(thisArg, self, true), args);

									case 2:
										return context$3$0.abrupt("return", context$3$0.sent);

									case 3:
									case "end":
										return context$3$0.stop();
								}
							}, callee$2$0, this);
						}));

					case 5:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 6:
					case "end":
						return context$2$0.stop();
				}
			}, construct, this);
		})
	}]);

	return NativeFunctionType;
})(_functionType.FunctionType);

exports.NativeFunctionType = NativeFunctionType;

},{"./function-type":298,"./primitive-type":303,"./property-descriptor":304,"babel-runtime/core-js/symbol/for":16,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/regenerator":26}],301:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _primitiveType = require("./primitive-type");

var _functionType = require("./function-type");

var _nativeFunctionType = require("./native-function-type");

var _regexType = require("./regex-type");

var _arrayType = require("./array-type");

var _stringType = require("./string-type");

var _dateType = require("./date-type");

var _errorType = require("./error-type");

var _argumentType = require("./argument-type");

var _iteratorType = require("./iterator-type");

var _symbolType = require("./symbol-type");

var _collectionType = require("./collection-type");

var _proxyType = require("./proxy-type");

var _utilsContracts = require("../utils/contracts");

var orphans = _Object$create(null);
var functionNameMatcher = /([^.]+(?:\[Symbol\.\w+\])?)$/;

function setOrphans(scope) {
	var _loop = function (typeName) {
		var parent = scope.getValue(typeName);
		if (parent) {
			orphans[typeName].forEach(function (child) {
				child.setPrototype(parent.getValue("prototype"));
			});

			delete orphans[typeName];
		}
	};

	for (var typeName in orphans) {
		_loop(typeName);
	}

	orphans = _Object$create(null);
}

function setProto(typeName, instance, factory) {
	var env = factory.env;
	if (!env.global || !env.global.owns(typeName)) {
		if (!factory.initialized) {
			// during initialization it is possible for objects to be created
			// before the types have been registered - add a registry of items
			// and these can be filled in when the type is registered
			orphans[typeName] = orphans[typeName] || [];
			orphans[typeName].push(instance);
		}

		return;
	}

	var proto = env.global.getValue(typeName).getValue("prototype");
	instance.setPrototype(proto);
}

var defaultDescriptor = { configurable: true, enumerable: true, writable: true };
function createDataPropertyDescriptor(value) {
	var _ref = arguments.length <= 1 || arguments[1] === undefined ? defaultDescriptor : arguments[1];

	var _ref$configurable = _ref.configurable;
	var configurable = _ref$configurable === undefined ? true : _ref$configurable;
	var _ref$enumerable = _ref.enumerable;
	var enumerable = _ref$enumerable === undefined ? true : _ref$enumerable;
	var _ref$writable = _ref.writable;
	var writable = _ref$writable === undefined ? true : _ref$writable;

	return { value: value, configurable: configurable, enumerable: enumerable, writable: writable };
}

var ObjectFactory = (function () {
	function ObjectFactory(env) {
		_classCallCheck(this, ObjectFactory);

		this.env = env;
		this.options = env.options;
		this.ecmaVersion = env.options.ecmaVersion || 5;
		this.initialized = false;
	}

	_createClass(ObjectFactory, [{
		key: "init",
		value: function init() {
			setOrphans(this.env);
			this.initialized = true;
		}

		/**
   * Creates a primitive object based on the provided native value.
   * @param {any} value - The primitive value.
   * @returns {ObjectType} The primitive instance.
   */
	}, {
		key: "createPrimitive",
		value: function createPrimitive(value) {
			return this.create((0, _utilsContracts.getType)(value), value);
		}

		/**
   * Creates an object based on the type specified. For a primitive type the second
   * parameter is used as the objects underlying value.
   * @param {String} typeName - The name of the object to create.
   * @param {any} [value] - The primitive value.
   * @returns {ObjectType} The new instance.
   */
	}, {
		key: "create",
		value: function create(typeName, value) {
			// the value is already wrapped in an object
			// this can happen if an exception is rethrown
			if (value && value instanceof _objectType.ObjectType) {
				return value;
			}

			var instance = undefined;

			switch (typeName) {
				case "Null":
					return _primitiveType.NULL;

				case "Undefined":
					return _primitiveType.UNDEFINED;

				case "Symbol":
					instance = new _symbolType.SymbolType(value);
					break;

				case "String":
					instance = new _stringType.StringType(value);
					break;

				case "Number":
				case "Boolean":
					instance = new _primitiveType.PrimitiveType(value);
					break;

				case "Date":
					instance = new _dateType.DateType(value);
					break;

				case "RegExp":
					instance = new _regexType.RegexType(value);
					break;

				case "Array":
					instance = new _arrayType.ArrayType();
					break;

				case "Set":
				case "Map":
					instance = new _collectionType.CollectionType(typeName);
					break;

				case "Error":
				case "TypeError":
				case "ReferenceError":
				case "SyntaxError":
				case "RangeError":
				case "URIError":
				case "EvalError":
					instance = new _errorType.ErrorType(value);

					if (value) {
						typeName = value.name || typeName;
						if (value.message) {
							var message = this.createPrimitive(value.message);
							instance.defineOwnProperty("message", createDataPropertyDescriptor(message, { enumerable: false }));
						}
					}

					break;

				default:
					throw Error("Not a primitive: " + value);
			}

			instance.init(this.env);
			setProto(typeName, instance, this);
			return instance;
		}

		/**
   * Creates an array object.
   * @param {ObjectType[]} [elements] - If provided, the elements will be added to the new array.
   * @returns {ArrayType} The array instance.
   */
	}, {
		key: "createArray",
		value: function createArray(elements) {
			var instance = this.create("Array");

			if (elements) {
				for (var i = 0, ln = elements.length; i < ln; i++) {
					instance.setIndex(i, elements[i]);
				}
			}

			return instance;
		}

		/**
   * Creates an object.
   * @param {ObjectType} [proto] - The prototype to use with the new object. If no value is provided
   * the Object prototype will be used. If `null` is passed in, no prototype will be assigned to the
   * new object.
   * @returns {ObjectType} The object instance.
   */
	}, {
		key: "createObject",
		value: function createObject(proto) {
			var instance = new _objectType.ObjectType();

			if (proto !== null) {
				if (proto) {
					instance.setPrototype(proto.getValue("prototype"));
				} else {
					setProto("Object", instance, this);
				}
			}

			instance.init(this.env);
			return instance;
		}
	}, {
		key: "createProxy",
		value: function createProxy(target, handler) {
			(0, _utilsContracts.assertIsObject)(target, "Proxy");
			(0, _utilsContracts.assertIsObject)(handler, "Proxy");

			if (target.isProxy && target.revoked) {
				throw TypeError();
			}

			if (handler.isProxy && handler.revoked) {
				throw TypeError();
			}

			var instance = new _proxyType.ProxyType(target, handler);
			instance.init(this.env);
			return instance;
		}
	}, {
		key: "createArguments",
		value: function createArguments(args, callee, strict) {
			var instance = new _argumentType.ArgumentType();
			var objectClass = this.env.global.getValue("Object");

			instance.init(this.env, objectClass, objectClass.getPrototype());
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

			var stringTagKey = _symbolType.SymbolType.getByKey("toStringTag");
			if (stringTagKey) {
				instance.define(stringTagKey, this.createPrimitive("Arguments"));
			}

			return instance;
		}
	}, {
		key: "createIterator",
		value: function createIterator(iterable, proto) {
			var self = this;
			var instance = new _iteratorType.IteratorType(iterable);

			if (!proto) {
				proto = this.createObject();
				proto.className = "[Symbol.iterator]";
			}

			if (!proto.has("next")) {
				proto.define("next", this.createBuiltInFunction(function () {
					var result = this.node.advance();
					if (result.value) {
						return result.value;
					}

					return self.createIteratorResult({ done: true });
				}));
			}

			instance.setPrototype(proto);
			return instance;
		}
	}, {
		key: "createIteratorResult",
		value: function createIteratorResult(_ref2) {
			var value = _ref2.value;
			var _ref2$done = _ref2.done;
			var done = _ref2$done === undefined ? false : _ref2$done;

			var result = this.createObject();
			result.defineOwnProperty("done", { value: this.createPrimitive(done) });
			result.defineOwnProperty("value", { value: value || _primitiveType.UNDEFINED });
			return result;
		}

		/**
   * Creates a function instance.
   * @param {AST|Function} fnOrNode - The AST or function to be used when the function is called.
   * @param {ObjectType} [proto] - The prototype to use for the function. If no object is provided
   * an empty object is used.
   * @param {Object} [options] - Property values to be used for the prototype.
   * @returns {FunctionType} The function instance.
   */
	}, {
		key: "createFunction",
		value: function createFunction(fnOrNode, proto) {
			var _ref3 = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

			var _ref3$configurable = _ref3.configurable;
			var configurable = _ref3$configurable === undefined ? false : _ref3$configurable;
			var _ref3$enumerable = _ref3.enumerable;
			var enumerable = _ref3$enumerable === undefined ? false : _ref3$enumerable;
			var _ref3$writable = _ref3.writable;
			var writable = _ref3$writable === undefined ? true : _ref3$writable;
			var _ref3$strict = _ref3.strict;
			var strict = _ref3$strict === undefined ? false : _ref3$strict;
			var _ref3$name = _ref3.name;
			var name = _ref3$name === undefined ? "anonymous" : _ref3$name;

			var instance = undefined;

			if (typeof fnOrNode === "function") {
				instance = new _nativeFunctionType.NativeFunctionType(fnOrNode);
			} else {
				instance = new _functionType.FunctionType(fnOrNode);
			}

			instance.init(this.env, proto, { configurable: configurable, enumerable: enumerable, writable: writable }, strict);
			instance.name = name;

			if (this.options.ecmaVersion > 5) {
				instance.defineOwnProperty("name", { value: this.createPrimitive(name), configurable: true }, true, this.env);
			}

			setProto("Function", instance, this);
			return instance;
		}
	}, {
		key: "createGetter",
		value: function createGetter(func, key) {
			return this.createBuiltInFunction(func, 0, "get " + key);
		}
	}, {
		key: "createSetter",
		value: function createSetter(func, key) {
			return this.createBuiltInFunction(func, 1, "set " + key);
		}

		/**
   * Creates a function with no prototype that cannot be instantiated.
   * @param {Function} func - The underlying function.
   * @param {Number} length - The length property of the function.
   * @param {String} funcName - The name of the function.
   * @returns {NativeFunctionType} The function instance.
   */
	}, {
		key: "createBuiltInFunction",
		value: function createBuiltInFunction(func, length, funcName) {
			var instance = new _nativeFunctionType.NativeFunctionType(function () {
				if (this.isNew) {
					throw TypeError(funcName + " is not a constructor");
				}

				return func.apply(this, arguments);
			});

			setProto("Function", instance, this);
			instance[_Symbol$for("env")] = this.env;
			instance.builtIn = true;
			instance.canConstruct = false;
			instance.defineOwnProperty("length", { value: this.createPrimitive(length), configurable: this.ecmaVersion > 5 });

			var match = functionNameMatcher.exec(funcName);
			var name = match && match[1] || funcName;

			instance.defineOwnProperty("name", { value: this.createPrimitive(name), configurable: true }, true, this.env);

			return instance;
		}
	}, {
		key: "createThrower",
		value: function createThrower(message, thrower) {
			this.throwers = this.throwers || _Object$create(null);
			if (message in this.throwers) {
				return this.throwers[message];
			}

			thrower = thrower || function () {
				throw TypeError(message);
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
	}]);

	return ObjectFactory;
})();

exports.ObjectFactory = ObjectFactory;

},{"../utils/contracts":311,"./argument-type":293,"./array-type":294,"./collection-type":295,"./date-type":296,"./error-type":297,"./function-type":298,"./iterator-type":299,"./native-function-type":300,"./object-type":302,"./primitive-type":303,"./proxy-type":305,"./regex-type":306,"./string-type":307,"./symbol-type":308,"babel-runtime/core-js/object/create":8,"babel-runtime/core-js/symbol/for":16,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20}],302:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var marked0$0 = [propertyIterator].map(_regeneratorRuntime.mark);

var _utilsOperators = require("../utils/operators");

var _propertyDescriptor = require("./property-descriptor");

var integerMatcher = /^\n+$/;

function isSymbol(key) {
	return key && typeof key === "object" && key.isSymbol;
}

function getPropertySource(key) {
	return isSymbol(key) ? "symbols" : "properties";
}

function propertyIterator(env, obj) {
	var visited, objectFactory, current, keys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, desc, value;

	return _regeneratorRuntime.wrap(function propertyIterator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				visited = _Object$create(null);
				objectFactory = env.objectFactory;
				current = obj;

			case 3:
				if (!current) {
					context$1$0.next = 39;
					break;
				}

				keys = current.getOwnPropertyKeys("String");
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 8;
				_iterator = _getIterator(keys);

			case 10:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 22;
					break;
				}

				key = _step.value;
				desc = current.getProperty(key);

				if (!desc) {
					context$1$0.next = 19;
					break;
				}

				if (!(desc.enumerable && !(key in visited))) {
					context$1$0.next = 18;
					break;
				}

				value = objectFactory.createPrimitive(key);
				context$1$0.next = 18;
				return objectFactory.createIteratorResult({ value: value });

			case 18:

				visited[key] = true;

			case 19:
				_iteratorNormalCompletion = true;
				context$1$0.next = 10;
				break;

			case 22:
				context$1$0.next = 28;
				break;

			case 24:
				context$1$0.prev = 24;
				context$1$0.t0 = context$1$0["catch"](8);
				_didIteratorError = true;
				_iteratorError = context$1$0.t0;

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

				current = current.getPrototype();
				context$1$0.next = 3;
				break;

			case 39:
				return context$1$0.abrupt("return", objectFactory.createIteratorResult({ done: true }));

			case 40:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this, [[8, 24, 28, 36], [29,, 31, 35]]);
}

function propertyKeyComparer(a, b) {
	if (integerMatcher.test(a)) {
		if (integerMatcher.test(b)) {
			return a - b;
		}

		return 1;
	}

	if (integerMatcher.test(b)) {
		return -1;
	}

	return 0;
}

var ObjectType = (function () {
	function ObjectType() {
		_classCallCheck(this, ObjectType);

		this.isPrimitive = false;
		this.type = "object";
		this.className = "Object";
		this.extensible = true;
		this.properties = _Object$create(null);
		this.symbols = _Object$create(null);

		this.version = 0;
		this.primitiveHint = "number";
	}

	_createClass(ObjectType, [{
		key: "init",
		value: function init(env, proto, descriptor, strict) {
			this[_Symbol$for("env")] = env;
		}
	}, {
		key: "getPrototype",
		value: function getPrototype() {
			return this.proto;
		}
	}, {
		key: "setPrototype",
		value: function setPrototype(proto) {
			if (this.proto === proto) {
				return true;
			}

			if (!this.isExtensible()) {
				return false;
			}

			// check whether prototype chain already includes object
			var current = proto;
			while (current) {
				if (current === this) {
					return false;
				}

				current = current.getPrototype();
			}

			this.proto = proto;
			this.version++;

			return true;
		}
	}, {
		key: "getProperty",
		value: function getProperty(key, receiver) {
			receiver = receiver || this;

			var localKey = String(key);
			var source = getPropertySource(key);

			if (localKey in this[source]) {
				return this[source][localKey].bind(receiver);
			}

			var current = this.getPrototype();
			if (current) {
				return current.getProperty(key, receiver);
			}

			return undefined;
		}
	}, {
		key: "getOwnProperty",
		value: function getOwnProperty(key) {
			return this[getPropertySource(key)][String(key)];
		}
	}, {
		key: "getOwnPropertyKeys",
		value: function getOwnPropertyKeys(keyType) {
			var keys = [];

			if (keyType !== "Symbol") {
				// note: this uses native sort which may not be stable
				keys = _Object$keys(this.properties).sort(propertyKeyComparer);
			}

			if (keyType !== "String") {
				for (var key in this.symbols) {
					keys.push(this.symbols[key].key);
				}
			}

			return keys;
		}
	}, {
		key: "isExtensible",
		value: function isExtensible() {
			return this.extensible;
		}
	}, {
		key: "getIterator",
		value: function getIterator() {
			var env = this[_Symbol$for("env")];
			return env.objectFactory.createIterator(propertyIterator(env, this));
		}
	}, {
		key: "has",
		value: function has(key) {
			if (String(key) in this[getPropertySource(key)]) {
				return true;
			}

			var current = this.getPrototype();
			if (current) {
				return current.has(key);
			}

			return false;
		}
	}, {
		key: "owns",
		value: function owns(key) {
			return String(key) in this[getPropertySource(key)];
		}
	}, {
		key: "setValue",
		value: function setValue(key, value, receiver) {
			receiver = receiver || this;

			var descriptor = this.getProperty(key);
			if (descriptor) {
				if (this !== receiver && receiver.owns(key)) {
					var receiverDescriptor = receiver.getProperty(key);
					if (!receiverDescriptor.dataProperty) {
						return false;
					}

					descriptor = receiverDescriptor;
				}

				if (descriptor.hasValue() && receiver.owns(key) && (0, _utilsOperators.areSame)(descriptor.getValue(), value)) {
					return true;
				}

				if (!descriptor.canSetValue()) {
					return false;
				}

				if (!descriptor.dataProperty) {
					descriptor.bind(receiver);
					descriptor.setValue(value);
					return true;
				}

				if (!descriptor.canUpdate({ value: value })) {
					return false;
				}

				if (!receiver.owns(key)) {
					return receiver.defineOwnProperty(key, {
						value: value,
						configurable: true,
						enumerable: true,
						writable: true
					}, false);
				}

				descriptor.setValue(value);
				return true;
			}

			return receiver.defineOwnProperty(key, {
				value: value,
				configurable: true,
				enumerable: true,
				writable: true
			}, false);
		}

		// putValue (key, value, throwOnError) {
		// 	if (this.isPrimitive) {
		// 		return;
		// 	}

		// 	let descriptor = this.getProperty(key);
		// 	if (descriptor) {
		// 		if (!descriptor.canSetValue()) {
		// 			if (throwOnError) {
		// 				throw TypeError(`Cannot assign to read only property '${key}'`);
		// 			}

		// 			return;
		// 		}

		// 		if (descriptor.dataProperty && !this.owns(key)) {
		// 			this[getPropertySource(key)][String(key)] = new PropertyDescriptor(this, {
		// 				value: value,
		// 				configurable: descriptor.configurable,
		// 				enumerable: descriptor.enumerable,
		// 				writable: descriptor.writable
		// 			}, key);

		// 			this.version++;
		// 		} else {
		// 			descriptor.setValue(value);
		// 		}
		// 	} else {
		// 		this.defineOwnProperty(key, {value: value, configurable: true, enumerable: true, writable: true}, throwOnError);
		// 	}
		// }

	}, {
		key: "defineOwnProperty",
		value: function defineOwnProperty(key, descriptor, throwOnError) {
			if (this.isPrimitive) {
				if (throwOnError) {
					throw TypeError("Cannot define property: " + key + ", object is not extensible");
				}

				return false;
			}

			var current = this.getOwnProperty(key);
			if (current) {
				if (current.canUpdate(descriptor)) {
					current.update(descriptor);
					return true;
				}

				if (throwOnError) {
					throw TypeError("Cannot redefine property: " + key);
				}

				return false;
			} else if (!this.extensible) {
				if (throwOnError) {
					throw TypeError("Cannot define property: " + key + ", object is not extensible");
				}

				return false;
			}

			this[getPropertySource(key)][String(key)] = new _propertyDescriptor.PropertyDescriptor(this, descriptor, key);
			this.version++;
			return true;
		}
	}, {
		key: "deleteProperty",
		value: function deleteProperty(key, throwOnError) {
			if (this.isPrimitive) {
				return false;
			}

			var source = getPropertySource(key);
			key = String(key);

			if (key in this[source]) {
				if (!this[source][key].configurable) {
					if (throwOnError) {
						throw TypeError("Cannot delete property: " + key);
					}

					return false;
				}
			}

			this.version++;
			return delete this[source][key];
		}
	}, {
		key: "define",
		value: function define(key, value) {
			var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

			var _ref$configurable = _ref.configurable;
			var configurable = _ref$configurable === undefined ? true : _ref$configurable;
			var _ref$enumerable = _ref.enumerable;
			var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
			var _ref$writable = _ref.writable;
			var writable = _ref$writable === undefined ? true : _ref$writable;
			var getter = _ref.getter;
			var get = _ref.get;
			var setter = _ref.setter;
			var set = _ref.set;

			// this method is intended for external usage only - it provides a way to define
			// methods and properties and overwrite any existing properties even if they are
			// not configurable

			var descriptor = undefined;
			if (getter || setter) {
				descriptor = { getter: getter, get: get, setter: setter, set: set, configurable: configurable, enumerable: enumerable };
			} else {
				descriptor = { value: value, configurable: configurable, enumerable: enumerable, writable: writable };
			}

			this[getPropertySource(key)][String(key)] = new _propertyDescriptor.PropertyDescriptor(this, descriptor, key);
			this.version++;
		}
	}, {
		key: "remove",
		value: function remove(key) {
			// this method is intended for external usage only - it provides a way to remove
			// properties even if they are not normally able to be deleted
			delete this[getPropertySource(key)][String(key)];
			this.version++;
		}
	}, {
		key: "getValue",
		value: function getValue(key) {
			if (arguments.length > 0) {
				var property = this.getProperty(key);
				return property && property.getValue();
			}

			return this;
		}
	}, {
		key: "each",
		value: function each(func) {
			var _this = this;

			["properties", "symbols"].forEach(function (source) {
				for (var key in _this[source]) {
					func(_this[source][key]);
				}
			});
		}
	}, {
		key: "freeze",
		value: function freeze() {
			var _this2 = this;

			this.each(function (desc) {
				if (desc.dataProperty) {
					_this2.defineOwnProperty(desc.key, { writable: false, configurable: false });
				} else {
					_this2.defineOwnProperty(desc.key, { configurable: false });
				}
			});

			this.preventExtensions();
		}
	}, {
		key: "preventExtensions",
		value: function preventExtensions() {
			this.extensible = false;
			return true;
		}
	}, {
		key: "seal",
		value: function seal() {
			var _this3 = this;

			this.each(function (desc) {
				_this3.defineOwnProperty(desc.key, { configurable: false }, true);
			});

			this.preventExtensions();
		}
	}, {
		key: "toNative",
		value: function toNative() {
			var unwrapped = {};
			var current = this;

			while (current) {
				for (var _name in current.properties) {
					if (current.properties[_name].enumerable && !(_name in unwrapped)) {
						unwrapped[_name] = current.getValue(_name).toNative();
					}
				}

				current = current.getPrototype();
			}

			return unwrapped;
		}
	}]);

	return ObjectType;
})();

exports.ObjectType = ObjectType;

},{"../utils/operators":315,"./property-descriptor":304,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/create":8,"babel-runtime/core-js/object/keys":11,"babel-runtime/core-js/symbol/for":16,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/regenerator":26}],303:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _utilsContracts = require("../utils/contracts");

var PrimitiveType = (function (_ObjectType) {
	_inherits(PrimitiveType, _ObjectType);

	function PrimitiveType(value) {
		_classCallCheck(this, PrimitiveType);

		_get(Object.getPrototypeOf(PrimitiveType.prototype), "constructor", this).call(this);

		this.isPrimitive = true;
		this.value = value;
		this.type = typeof value;

		this.className = (0, _utilsContracts.getType)(value);
	}

	_createClass(PrimitiveType, [{
		key: "getProperty",
		value: function getProperty(name) {
			// can't read properties of null/undefined
			if (this.value == null) {
				throw TypeError("Cannot read property '" + name + "' of " + this.type);
			}

			return _get(Object.getPrototypeOf(PrimitiveType.prototype), "getProperty", this).apply(this, arguments);
		}
	}, {
		key: "toNative",
		value: function toNative() {
			return this.value;
		}
	}]);

	return PrimitiveType;
})(_objectType.ObjectType);

exports.PrimitiveType = PrimitiveType;
var UNDEFINED = new PrimitiveType(undefined);
exports.UNDEFINED = UNDEFINED;
var NULL = new PrimitiveType(null);
exports.NULL = NULL;

},{"../utils/contracts":311,"./object-type":302,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],304:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsOperators = require("../utils/operators");

var _utilsAsync = require("../utils/async");

var _utilsObject = require("../utils/object");

var defaultDescriptor = {
	configurable: false,
	enumerable: false,
	writable: false
};

var PropertyDescriptor = (function () {
	function PropertyDescriptor(base, config, key) {
		if (config === undefined) config = defaultDescriptor;

		_classCallCheck(this, PropertyDescriptor);

		this.base = base;
		this.configurable = config.configurable || false;
		this.enumerable = config.enumerable || false;
		this.key = key;

		if ("get" in config || "set" in config) {
			this.dataProperty = false;
			this.get = config.get;
			this.getter = config.getter;
			this.set = config.set;
			this.setter = config.setter;
		} else {
			this.writable = config.writable || false;
			this.dataProperty = true;
			this.value = config.value;
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
				if ((0, _utilsObject.owns)(descriptor, prop)) {
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

					return !("value" in descriptor) || (0, _utilsOperators.areSame)(this.value, descriptor.value);
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
				return (0, _utilsAsync.exhaust)(this.getter.call(this.base));
			}

			return undefined;
		}
	}, {
		key: "canSetValue",
		value: function canSetValue(value) {
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
				(0, _utilsAsync.exhaust)(this.setter.call(this.base, value));
			}
		}
	}, {
		key: "hasValue",
		value: function hasValue() {
			return !!this.value || !!this.getter;
		}
	}]);

	return PropertyDescriptor;
})();

exports.PropertyDescriptor = PropertyDescriptor;

},{"../utils/async":310,"../utils/object":314,"../utils/operators":315,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20}],305:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var _primitiveType = require("./primitive-type");

var _utilsContracts = require("../utils/contracts");

var _utilsAsync = require("../utils/async");

var _utilsNative = require("../utils/native");

var _propertyDescriptor = require("./property-descriptor");

var envSymbol = _Symbol$for("env");

function getProxyMethod(proxy, key) {
	var handler = proxy.handler.getProperty(key);
	if (!handler) {
		return null;
	}

	var method = handler.getValue();
	if ((0, _utilsContracts.isUndefined)(method)) {
		return null;
	}

	(0, _utilsContracts.assertIsFunction)(method, key);
	return method;
}

function getValueOrDefault(obj, key) {
	var defaultValue = arguments.length <= 2 || arguments[2] === undefined ? _primitiveType.UNDEFINED : arguments[2];
	var transformer = arguments.length <= 3 || arguments[3] === undefined ? function (v) {
		return v;
	} : arguments[3];

	var propInfo = obj.getProperty(key);
	if (propInfo) {
		return transformer(propInfo.getValue());
	}

	return defaultValue;
}

function normalizeKey(env, key) {
	if (typeof key !== "object") {
		return env.objectFactory.createPrimitive(String(key));
	}

	return key;
}

function denormalizeKey(key) {
	if (key.isSymbol) {
		return key;
	}

	return key.toNative();
}

function toPropertyDescriptor(env, descriptor) {
	var result = env.objectFactory.createObject();
	if (descriptor.get || descriptor.set) {
		result.setValue("get", descriptor.get || _primitiveType.UNDEFINED);
		result.setValue("set", descriptor.set || _primitiveType.UNDEFINED);
	} else {
		result.setValue("value", descriptor.value);
		result.setValue("writable", env.objectFactory.createPrimitive(descriptor.writable));
	}

	result.setValue("enumerable", env.objectFactory.createPrimitive(descriptor.enumerable));
	result.setValue("configurable", env.objectFactory.createPrimitive(descriptor.configurable));
	return result;
}

function toCall(proxy, methodName) {
	var proxyMethod = getProxyMethod(proxy, "apply");
	if ((0, _utilsContracts.isUndefined)(proxyMethod)) {
		return proxy.target.getValue(methodName);
	}

	return proxy[envSymbol].objectFactory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0(thisArg) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					if (methodName === "apply" && args.length > 0) {
						args = (0, _utilsNative.toArray)(args[0]);
					}

					context$2$0.next = 3;
					return proxy.call(thisArg, args);

				case 3:
					return context$2$0.abrupt("return", context$2$0.sent);

				case 4:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), 1, "Function.prototype." + methodName);
}

function assertIsNotRevoked(proxy, methodName) {
	if (proxy.revoked) {
		throw TypeError("Method " + methodName + " called on a revoked Proxy object");
	}
}

function throwProxyInvariantError(methodName) {
	throw TypeError("Invariant check failed for proxy " + methodName + " trap");
}

var ProxyType = (function (_ObjectType) {
	_inherits(ProxyType, _ObjectType);

	function ProxyType(target, handler) {
		_classCallCheck(this, ProxyType);

		_get(Object.getPrototypeOf(ProxyType.prototype), "constructor", this).call(this);
		this.target = target;
		this.handler = handler;
		this.className = target.className;
		this.type = target.type;
		this.revoked = false;
		this.isProxy = true;
	}

	_createClass(ProxyType, [{
		key: "call",
		value: _regeneratorRuntime.mark(function call(thisArg, args) {
			var proxyMethod,
			    _target,
			    argsArray,
			    args$2$0 = arguments;

			return _regeneratorRuntime.wrap(function call$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						assertIsNotRevoked(this, "apply");

						proxyMethod = getProxyMethod(this, "apply");

						if (!(0, _utilsContracts.isUndefined)(proxyMethod)) {
							context$2$0.next = 6;
							break;
						}

						context$2$0.next = 5;
						return (_target = this.target).call.apply(_target, args$2$0);

					case 5:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 6:
						argsArray = this[envSymbol].objectFactory.createArray(args);
						context$2$0.next = 9;
						return proxyMethod.call(this.handler, [this.target, thisArg, argsArray]);

					case 9:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 10:
					case "end":
						return context$2$0.stop();
				}
			}, call, this);
		})
	}, {
		key: "construct",
		value: _regeneratorRuntime.mark(function construct(thisArg, args) {
			var proxyMethod,
			    _target2,
			    argsArray,
			    newObj,
			    args$2$0 = arguments;

			return _regeneratorRuntime.wrap(function construct$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						assertIsNotRevoked(this, "construct");

						proxyMethod = getProxyMethod(this, "construct");

						if (!(0, _utilsContracts.isUndefined)(proxyMethod)) {
							context$2$0.next = 6;
							break;
						}

						context$2$0.next = 5;
						return (_target2 = this.target).construct.apply(_target2, args$2$0);

					case 5:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 6:
						argsArray = this[envSymbol].objectFactory.createArray(args);
						context$2$0.next = 9;
						return proxyMethod.call(this.handler, [this.target, argsArray, this]);

					case 9:
						newObj = context$2$0.sent;

						if (!(0, _utilsContracts.isObject)(newObj)) {
							throwProxyInvariantError("construct");
						}

						return context$2$0.abrupt("return", newObj);

					case 12:
					case "end":
						return context$2$0.stop();
				}
			}, construct, this);
		})
	}, {
		key: "has",
		value: function has(key) {
			assertIsNotRevoked(this, "has");

			var proxyMethod = getProxyMethod(this, "has");
			if (!proxyMethod) {
				return this.target.has(key);
			}

			var env = this[envSymbol];
			var result = (0, _utilsNative.toBoolean)((0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target, normalizeKey(env, key)])));
			if (!result) {
				var propInfo = this.target.getProperty(key);
				if (propInfo) {
					if (!propInfo.configurable) {
						throwProxyInvariantError("has");
					}

					if (!this.target.isExtensible()) {
						throwProxyInvariantError("has");
					}
				}
			}

			return result;
		}
	}, {
		key: "owns",
		value: function owns(key) {
			return this.target.owns(key);
		}
	}, {
		key: "getProperty",
		value: function getProperty(key, target) {
			assertIsNotRevoked(this, "get");

			// special case for function types
			if (this.type === "function" && (key === "call" || key === "apply")) {
				return new _propertyDescriptor.PropertyDescriptor(this, { value: toCall(this, key) }, key);
			}

			var proxyMethod = getProxyMethod(this, "get");
			if (!proxyMethod) {
				return this.target.getProperty(key, target);
			}

			var env = this[envSymbol];
			var value = (0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target, normalizeKey(env, key), this]));
			var propInfo = this.target.getProperty(key);
			if (propInfo && !propInfo.configurable) {
				var targetValue = propInfo.getValue();
				if (propInfo.dataProperty && !propInfo.writable && !env.ops.areSame(value, targetValue)) {
					throwProxyInvariantError("get");
				}

				if (!propInfo.dataProperty && (0, _utilsContracts.isUndefined)(propInfo.get) && !(0, _utilsContracts.isUndefined)(value)) {
					throwProxyInvariantError("get");
				}
			}

			return new _propertyDescriptor.PropertyDescriptor(this, { value: value }, key);
		}
	}, {
		key: "getOwnProperty",
		value: function getOwnProperty(key) {
			assertIsNotRevoked(this, "getOwnPropertyDescriptor");

			var proxyMethod = getProxyMethod(this, "getOwnPropertyDescriptor");
			if (!proxyMethod) {
				return this.target.getOwnProperty(key);
			}

			var env = this[envSymbol];
			var descriptor = (0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target, normalizeKey(env, key)]));
			if (descriptor.type !== "object" && descriptor.type !== "undefined") {
				throwProxyInvariantError("getOwnPropertyDescriptor");
			}

			var propInfo = this.target.getOwnProperty(key);
			var hasDescriptor = !!propInfo;
			var frozen = !this.target.isExtensible() || hasDescriptor && !propInfo.configurable;

			if ((0, _utilsContracts.isUndefined)(descriptor)) {
				if (frozen) {
					throwProxyInvariantError("getOwnPropertyDescriptor");
				}

				return undefined;
			}

			if (!hasDescriptor && frozen) {
				throwProxyInvariantError("getOwnPropertyDescriptor");
			}

			var enumerable = getValueOrDefault(descriptor, "enumerable", false, _utilsNative.toBoolean);
			var configurable = getValueOrDefault(descriptor, "configurable", false, _utilsNative.toBoolean);
			var writable = getValueOrDefault(descriptor, "writable", false, _utilsNative.toBoolean);
			var value = getValueOrDefault(descriptor, "value");
			var getter = getValueOrDefault(descriptor, "get", null);
			var setter = getValueOrDefault(descriptor, "set", null);

			if (!configurable && (!hasDescriptor || !frozen)) {
				throwProxyInvariantError("getOwnPropertyDescriptor");
			}

			var proxyDescriptor = undefined;
			if (getter || setter) {
				proxyDescriptor = { getter: getter, setter: setter, get: undefined, set: undefined, enumerable: enumerable, configurable: configurable };
			} else {
				proxyDescriptor = { value: value, enumerable: enumerable, configurable: configurable, writable: writable };
			}

			if (hasDescriptor && !propInfo.canUpdate(proxyDescriptor)) {
				throwProxyInvariantError("getOwnPropertyDescriptor");
			}

			return new _propertyDescriptor.PropertyDescriptor(this, proxyDescriptor, key);
		}
	}, {
		key: "getPrototype",
		value: function getPrototype() {
			assertIsNotRevoked(this, "getPrototypeOf");

			var proxyMethod = getProxyMethod(this, "getPrototypeOf");
			if (!proxyMethod) {
				return this.target.getPrototype();
			}

			var proto = (0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target]));
			if (!(0, _utilsContracts.isObject)(proto) && !(0, _utilsContracts.isNull)(proto)) {
				throwProxyInvariantError("getPrototypeOf");
			}

			if (this.target.isExtensible()) {
				return proto;
			}

			var targetProto = this.target.getPrototype();
			if (targetProto !== proto) {
				throwProxyInvariantError("getPrototypeOf");
			}

			return proto;
		}
	}, {
		key: "setPrototype",
		value: function setPrototype(proto) {
			assertIsNotRevoked(this, "setPrototypeOf");

			var proxyMethod = getProxyMethod(this, "setPrototypeOf");
			if (!proxyMethod) {
				return this.target.setPrototype(proto);
			}

			var result = (0, _utilsNative.toBoolean)((0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target, proto])));
			if (this.target.isExtensible()) {
				return result;
			}

			var targetProto = this.target.getPrototype();
			if (result && targetProto !== proto) {
				throwProxyInvariantError("setPrototypeOf");
			}

			return result;
		}
	}, {
		key: "isExtensible",
		value: function isExtensible() {
			assertIsNotRevoked(this, "isExtensible");

			var proxyMethod = getProxyMethod(this, "isExtensible");
			if (!proxyMethod) {
				return this.target.isExtensible();
			}

			var result = (0, _utilsNative.toBoolean)((0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target])));
			var targetResult = this.target.isExtensible();

			if (result !== targetResult) {
				throwProxyInvariantError("isExtensible");
			}

			return result;
		}
	}, {
		key: "preventExtensions",
		value: function preventExtensions() {
			assertIsNotRevoked(this, "preventExtensions");

			var proxyMethod = getProxyMethod(this, "preventExtensions");
			if (!proxyMethod) {
				return this.target.preventExtensions();
			}

			var result = (0, _utilsNative.toBoolean)((0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target])));
			if (result && this.target.isExtensible()) {
				throwProxyInvariantError("preventExtensions");
			}

			return result;
		}
	}, {
		key: "deleteProperty",
		value: function deleteProperty(key, throwOnError) {
			assertIsNotRevoked(this, "deleteProperty");

			var proxyMethod = getProxyMethod(this, "deleteProperty");
			if ((0, _utilsContracts.isUndefined)(proxyMethod)) {
				return this.target.deleteProperty(key, throwOnError);
			}

			var env = this[envSymbol];
			var result = (0, _utilsNative.toBoolean)((0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target, normalizeKey(env, key)])));
			if (result) {
				var propInfo = this.target.getProperty(key);
				if (propInfo && !propInfo.configurable) {
					throwProxyInvariantError("deleteProperty");
				}
			}

			return result;
		}
	}, {
		key: "defineOwnProperty",
		value: function defineOwnProperty(key, descriptor, throwOnError) {
			assertIsNotRevoked(this, "defineProperty");

			var proxyMethod = getProxyMethod(this, "defineProperty");
			if ((0, _utilsContracts.isUndefined)(proxyMethod)) {
				var _target3;

				return (_target3 = this.target).defineOwnProperty.apply(_target3, arguments);
			}

			var env = this[envSymbol];
			var desc = toPropertyDescriptor(env, descriptor);
			var result = (0, _utilsNative.toBoolean)((0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target, normalizeKey(env, key), desc])));

			if (result) {
				var propInfo = this.target.getProperty(key);
				if (propInfo) {
					if ("configurable" in descriptor && descriptor.configurable !== propInfo.configurable) {
						throwProxyInvariantError("defineProperty");
					}

					if (!propInfo.canUpdate(descriptor)) {
						throwProxyInvariantError("defineProperty");
					}
				} else if (!this.target.isExtensible() || descriptor.configurable === false) {
					throwProxyInvariantError("defineProperty");
				}
			}

			return result;
		}
	}, {
		key: "getOwnPropertyKeys",
		value: function getOwnPropertyKeys(keyType) {
			var _this = this;

			assertIsNotRevoked(this, "ownKeys");

			var proxyMethod = getProxyMethod(this, "ownKeys");
			if ((0, _utilsContracts.isUndefined)(proxyMethod)) {
				return this.target.getOwnPropertyKeys(keyType);
			}

			var proxyKeys = (0, _utilsAsync.exhaust)((0, _utilsNative.toArray)((0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target]))));
			var rawKeys = proxyKeys.map(denormalizeKey);
			var targetKeys = this.target.getOwnPropertyKeys();

			if (!this.target.isExtensible()) {
				if (rawKeys.length !== targetKeys.length) {
					throwProxyInvariantError("ownKeys");
				}

				if (targetKeys.some(function (k) {
					return rawKeys.indexOf(k) === -1;
				})) {
					throwProxyInvariantError("ownKeys");
				}
			} else {
				var fixedKeys = targetKeys.filter(function (k) {
					return !_this.target.getProperty(k).configurable;
				});
				if (fixedKeys.length > 0) {
					if (fixedKeys.some(function (k) {
						return rawKeys.indexOf(k) === -1;
					})) {
						throwProxyInvariantError("ownKeys");
					}
				}
			}

			return rawKeys;
		}
	}, {
		key: "getIterator",
		value: function getIterator() {
			assertIsNotRevoked(this, "enumerate");

			var proxyMethod = getProxyMethod(this, "enumerate");
			if ((0, _utilsContracts.isUndefined)(proxyMethod)) {
				return this.target.getIterator();
			}

			var result = (0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, [this.target]));
			if (!(0, _utilsContracts.isObject)(result)) {
				throwProxyInvariantError("enumerate");
			}

			return result;
		}
	}, {
		key: "setValue",
		value: function setValue(key, value) {
			assertIsNotRevoked(this, "set");

			var proxyMethod = getProxyMethod(this, "set");
			if ((0, _utilsContracts.isUndefined)(proxyMethod)) {
				var _target4;

				return (_target4 = this.target).setValue.apply(_target4, arguments);
			}

			var env = this[envSymbol];
			var args = [this.target, normalizeKey(env, key), value, this];
			var result = (0, _utilsNative.toBoolean)((0, _utilsAsync.exhaust)(proxyMethod.call(this.handler, args)));
			if (result) {
				var propInfo = this.target.getProperty(key);
				if (propInfo && !propInfo.configurable) {
					var targetValue = propInfo.getValue();
					if (propInfo.dataProperty && !propInfo.writable && !env.ops.areSame(value, targetValue)) {
						throwProxyInvariantError("set");
					}

					if (!propInfo.dataProperty && (0, _utilsContracts.isUndefined)(propInfo.set)) {
						throwProxyInvariantError("set");
					}
				}
			}

			return result;
		}
	}, {
		key: "revoke",
		value: function revoke() {
			this.revoked = true;
		}
	}]);

	return ProxyType;
})(_objectType.ObjectType);

exports.ProxyType = ProxyType;

},{"../utils/async":310,"../utils/contracts":311,"../utils/native":313,"./object-type":302,"./primitive-type":303,"./property-descriptor":304,"babel-runtime/core-js/symbol/for":16,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23,"babel-runtime/regenerator":26}],306:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

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
		value: function init(env) {
			var _this = this;

			_get(Object.getPrototypeOf(RegexType.prototype), "init", this).apply(this, arguments);

			// lastIndex is settable, all others are read-only attributes
			this.defineOwnProperty("lastIndex", { value: env.objectFactory.createPrimitive(this.source.lastIndex), writable: true });

			["source", "global", "ignoreCase", "multiline"].forEach(function (key) {
				if (env.options.ecmaVersion > 5) {
					var getter = function getter() {
						return env.objectFactory.createPrimitive(this.source[key]);
					};
					var getterFunc = env.objectFactory.createGetter(getter, key);

					_this.defineOwnProperty(key, {
						getter: getter,
						get: getterFunc,
						configurable: true
					});
				} else {
					_this.defineOwnProperty(key, { value: env.objectFactory.createPrimitive(_this.source[key]) });
				}
			});
		}
	}, {
		key: "toNative",
		value: function toNative() {
			return this.source;
		}
	}]);

	return RegexType;
})(_objectType.ObjectType);

exports.RegexType = RegexType;

},{"./object-type":302,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],307:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _primitiveType = require("./primitive-type");

var _propertyDescriptor = require("./property-descriptor");

var _utilsContracts = require("../utils/contracts");

var charAttrs = { writable: false, enumerable: true, configurable: false };

function lazyInit(instance, key) {
	var nativeValue = instance.value;
	if (!nativeValue || !(0, _utilsContracts.isInteger)(key) || "0" in instance.properties) {
		return;
	}

	for (var i = 0, ln = nativeValue.length; i < ln; i++) {
		// we are not using the object factory to avoid circular loop
		var c = new StringType(nativeValue[i]);
		c.setPrototype(instance.proto);
		c.define("0", c, charAttrs);

		instance.define(i, c, charAttrs);
	}
}

var StringType = (function (_PrimitiveType) {
	_inherits(StringType, _PrimitiveType);

	function StringType(value) {
		_classCallCheck(this, StringType);

		_get(Object.getPrototypeOf(StringType.prototype), "constructor", this).call(this, value);
	}

	_createClass(StringType, [{
		key: "init",
		value: function init(env) {
			_get(Object.getPrototypeOf(StringType.prototype), "init", this).apply(this, arguments);
			var length = this.value.length;

			this.properties.length = new _propertyDescriptor.PropertyDescriptor(this, {
				configurable: false,
				enumerable: false,
				writable: false,
				value: env.objectFactory.createPrimitive(length)
			});
		}
	}, {
		key: "getProperty",
		value: function getProperty(key) {
			lazyInit(this, key);
			return _get(Object.getPrototypeOf(StringType.prototype), "getProperty", this).apply(this, arguments);
		}
	}, {
		key: "getOwnProperty",
		value: function getOwnProperty(key) {
			lazyInit(this, key);
			return _get(Object.getPrototypeOf(StringType.prototype), "getOwnProperty", this).apply(this, arguments);
		}
	}, {
		key: "getOwnPropertyKeys",
		value: function getOwnPropertyKeys(key) {
			lazyInit(this, key);
			return _get(Object.getPrototypeOf(StringType.prototype), "getOwnPropertyKeys", this).apply(this, arguments);
		}
	}, {
		key: "has",
		value: function has(key) {
			lazyInit(this, key);
			return _get(Object.getPrototypeOf(StringType.prototype), "has", this).apply(this, arguments);
		}
	}, {
		key: "owns",
		value: function owns(key) {
			lazyInit(this, key);
			return _get(Object.getPrototypeOf(StringType.prototype), "owns", this).apply(this, arguments);
		}
	}]);

	return StringType;
})(_primitiveType.PrimitiveType);

exports.StringType = StringType;

},{"../utils/contracts":311,"./primitive-type":303,"./property-descriptor":304,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],308:[function(require,module,exports){
"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectType = require("./object-type");

var GLOBAL_SYMBOL_REGISTRY = _Object$create(null);
var uid = 0;

var SymbolType = (function (_ObjectType) {
	_inherits(SymbolType, _ObjectType);

	function SymbolType(description) {
		_classCallCheck(this, SymbolType);

		_get(Object.getPrototypeOf(SymbolType.prototype), "constructor", this).call(this);
		this.type = "symbol";
		this.className = "Symbol";
		this.description = description;
		this.uid = uid++;

		// add so we can easily check if an object is a symbol when we care
		this.isSymbol = true;
	}

	_createClass(SymbolType, [{
		key: "defineOwnProperty",
		value: function defineOwnProperty(key, descriptor) {
			return false;
		}
	}, {
		key: "setValue",
		value: function setValue(key, value, target) {
			return false;
		}
	}, {
		key: "toNative",
		value: function toNative() {
			return "Symbol(" + this.description + ")";
		}
	}, {
		key: "toString",
		value: function toString() {
			// this method is here so symbols can be coerced into strings for property lookups
			return "@@" + this.uid;
		}
	}], [{
		key: "add",
		value: function add(key, sym) {
			GLOBAL_SYMBOL_REGISTRY[key] = sym;
		}
	}, {
		key: "getByKey",
		value: function getByKey(key) {
			return GLOBAL_SYMBOL_REGISTRY[key];
		}
	}, {
		key: "getByInstance",
		value: function getByInstance(sym) {
			for (var key in GLOBAL_SYMBOL_REGISTRY) {
				if (sym === GLOBAL_SYMBOL_REGISTRY[key]) {
					return GLOBAL_SYMBOL_REGISTRY[key];
				}
			}

			return undefined;
		}
	}]);

	return SymbolType;
})(_objectType.ObjectType);

exports.SymbolType = SymbolType;

},{"./object-type":302,"babel-runtime/core-js/object/create":8,"babel-runtime/helpers/class-call-check":19,"babel-runtime/helpers/create-class":20,"babel-runtime/helpers/get":22,"babel-runtime/helpers/inherits":23}],309:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.declare = declare;
exports.assign = assign;
var marked0$0 = [declare, assign, destructure, handleDefault, destructureArray, getObjectKey, destructureObject].map(_regeneratorRuntime.mark);

var _typesPrimitiveType = require("../types/primitive-type");

var _async = require("./async");

var _native = require("./native");

function declare(env, leftNode, rightValue) {
	var left;
	return _regeneratorRuntime.wrap(function declare$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(leftNode.type === "Identifier")) {
					context$1$0.next = 5;
					break;
				}

				left = env.createVariable(leftNode.name);

				left.setValue(rightValue);
				context$1$0.next = 7;
				break;

			case 5:
				context$1$0.next = 7;
				return destructure(env, leftNode, rightValue, declare);

			case 7:
				return context$1$0.abrupt("return", rightValue);

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function assign(env, leftNode, rightValue) {
	var left;
	return _regeneratorRuntime.wrap(function assign$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.t0 = leftNode.type;
				context$1$0.next = context$1$0.t0 === "Identifier" ? 3 : context$1$0.t0 === "MemberExpression" ? 3 : 8;
				break;

			case 3:
				context$1$0.next = 5;
				return env.createExecutionContext(leftNode).execute();

			case 5:
				left = context$1$0.sent.result;

				left.setValue(rightValue, env.isStrict());
				return context$1$0.abrupt("break", 10);

			case 8:
				context$1$0.next = 10;
				return destructure(env, leftNode, rightValue, assign);

			case 10:
				return context$1$0.abrupt("return", rightValue);

			case 11:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

function destructure(env, leftNode, rightValue, cb) {
	return _regeneratorRuntime.wrap(function destructure$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.t0 = leftNode.type;
				context$1$0.next = context$1$0.t0 === "ArrayPattern" ? 3 : context$1$0.t0 === "ObjectPattern" ? 6 : context$1$0.t0 === "AssignmentPattern" ? 9 : 12;
				break;

			case 3:
				context$1$0.next = 5;
				return destructureArray(env, leftNode, rightValue, cb);

			case 5:
				return context$1$0.abrupt("break", 13);

			case 6:
				context$1$0.next = 8;
				return destructureObject(env, leftNode, rightValue, cb);

			case 8:
				return context$1$0.abrupt("break", 13);

			case 9:
				context$1$0.next = 11;
				return handleDefault(env, leftNode, rightValue, cb);

			case 11:
				return context$1$0.abrupt("break", 13);

			case 12:
				throw Error(leftNode.type + " not implemented");

			case 13:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[2], this);
}

function handleDefault(env, left, rightValue, cb) {
	var defaultValue;
	return _regeneratorRuntime.wrap(function handleDefault$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(rightValue === _typesPrimitiveType.UNDEFINED)) {
					context$1$0.next = 5;
					break;
				}

				context$1$0.next = 3;
				return env.createExecutionContext(left.right).execute();

			case 3:
				defaultValue = context$1$0.sent;

				rightValue = defaultValue.result.getValue();

			case 5:
				context$1$0.next = 7;
				return cb(env, left.left, rightValue);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[3], this);
}

function destructureArray(env, pattern, arr, cb) {
	return _regeneratorRuntime.wrap(function destructureArray$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _async.each)(pattern.elements, _regeneratorRuntime.mark(function callee$1$0(current, index) {
					var propInfo, value;
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								propInfo = arr.getProperty(index);
								value = propInfo ? propInfo.getValue() : _typesPrimitiveType.UNDEFINED;
								context$2$0.next = 4;
								return cb(env, current, value);

							case 4:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				}));

			case 2:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[4], this);
}

function getObjectKey(env, keyNode) {
	var key;
	return _regeneratorRuntime.wrap(function getObjectKey$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!keyNode.computed) {
					context$1$0.next = 7;
					break;
				}

				context$1$0.next = 3;
				return env.createExecutionContext(keyNode).execute();

			case 3:
				key = context$1$0.sent.result.getValue();
				context$1$0.next = 6;
				return (0, _native.toPropertyKey)(key);

			case 6:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 7:
				return context$1$0.abrupt("return", keyNode.name);

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[5], this);
}

function destructureObject(env, pattern, obj, cb) {
	return _regeneratorRuntime.wrap(function destructureObject$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _async.each)(pattern.properties, _regeneratorRuntime.mark(function callee$1$0(current) {
					var key, propInfo, value;
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return getObjectKey(env, current.key);

							case 2:
								key = context$2$0.sent;
								propInfo = obj.getProperty(key);
								value = propInfo ? propInfo.getValue() : _typesPrimitiveType.UNDEFINED;
								context$2$0.next = 7;
								return cb(env, current.value, value);

							case 7:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				}));

			case 2:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[6], this);
}

},{"../types/primitive-type":303,"./async":310,"./native":313,"babel-runtime/regenerator":26}],310:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isThenable = isThenable;
exports.map = map;
exports.each = each;
exports.step = step;
exports.exhaust = exhaust;
exports.promisify = promisify;
var marked0$0 = [map, each, step].map(_regeneratorRuntime.mark);
function isObject(obj) {
	return obj && typeof obj === "object";
}

function isFunction(obj) {
	return typeof obj === "function";
}

function isThenable(obj) {
	return (isObject(obj) || isFunction(obj)) && typeof obj.then === "function";
}

function isNextable(obj) {
	return isObject(obj) && typeof obj.next === "function";
}

function map(arr, func) {
	var mapped;
	return _regeneratorRuntime.wrap(function map$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				mapped = [];
				return context$1$0.delegateYield(each(arr, _regeneratorRuntime.mark(function callee$1$0() {
					var args$2$0 = arguments;
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.t0 = mapped;
								return context$2$0.delegateYield(func.apply(undefined, args$2$0), "t1", 2);

							case 2:
								context$2$0.t2 = context$2$0.t1;
								context$2$0.t0.push.call(context$2$0.t0, context$2$0.t2);

							case 4:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				})), "t0", 2);

			case 2:
				return context$1$0.abrupt("return", mapped);

			case 3:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function each(arr, func) {
	var aborted, aborter, i, ln;
	return _regeneratorRuntime.wrap(function each$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				aborted = false;

				aborter = function aborter() {
					aborted = true;
				};

				i = 0, ln = arr.length;

			case 3:
				if (!(!aborted && i < ln)) {
					context$1$0.next = 8;
					break;
				}

				return context$1$0.delegateYield(func(arr[i], i, arr, aborter), "t0", 5);

			case 5:
				i++;
				context$1$0.next = 3;
				break;

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

function step(it, prev) {
	var result, value;
	return _regeneratorRuntime.wrap(function step$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				result = it.next(prev);
				value = result.value;

				if (!isNextable(value)) {
					context$1$0.next = 6;
					break;
				}

				return context$1$0.delegateYield(step(value), "t0", 4);

			case 4:
				context$1$0.next = 9;
				break;

			case 6:
				if (!isThenable(value)) {
					context$1$0.next = 9;
					break;
				}

				context$1$0.next = 9;
				return value.then(function (res) {
					return it;
				});

			case 9:
				if (!result.done) {
					context$1$0.next = 13;
					break;
				}

				return context$1$0.abrupt("return", value);

			case 13:
				context$1$0.next = 15;
				return step(it, value);

			case 15:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[2], this);
}

function tryCatch(it, priorValue, method) {
	try {
		var _it$method = it[method](priorValue);

		var done = _it$method.done;
		var value = _it$method.value;

		return { state: "next", done: done, value: value };
	} catch (err) {
		return { state: "throw", done: false, value: err };
	}
}

/**
 * Fully exhausts an iterator, including delegated generators.
 * Special handling is taken if a Promise is returned, pausing
 * the generator until the promise is resolved.
 *
 * @param {Iterator} [it] - The iterator
 * @param {Object} [value] - The previous iteration value (internal)
 * @param {Array<Iterator>} [stack] - The stack of iterators (internal)
 * @returns {Object|Promise} Returns the final value, or a Promise if
 * at any point in the iteration a Promise is returned.
 */

function exhaust(it, value) {
	var stack = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	var state = arguments.length <= 3 || arguments[3] === undefined ? "next" : arguments[3];

	while (it) {
		if (!isNextable(it)) {
			value = it;

			if (!(it = stack.pop())) {
				break;
			}
		}

		var done = undefined;

		var _tryCatch = tryCatch(it, value, state);

		state = _tryCatch.state;
		done = _tryCatch.done;
		value = _tryCatch.value;

		if (state === "throw") {
			if (it = stack.pop()) {
				continue;
			}

			throw value;
		}

		if (value) {
			if (isNextable(value)) {
				stack.push(it);

				it = value;
				value = undefined;

				continue;
			}

			if (isThenable(value)) {
				return value.then(function (res) {
					return exhaust(it, res, stack);
				}, function (err) {
					return exhaust(it, err, stack, "throw");
				});
			}
		}

		if (done) {
			it = stack.pop();
		}
	}

	return value;
}

/**
 * Normalizes a result into a promise, whether it is a generator, promise,
 * or normal value.
 *
 * @param {Iterator} [it] - The iterator.
 * @returns {Promise} A promise which resolves or rejects based on the result.
 */

function promisify(it) {
	try {
		var result = exhaust(it);
		if (isNextable(result)) {
			return result;
		}

		return _Promise.resolve(result);
	} catch (err) {
		if (typeof err === "object" && typeof err.toNative === "function") {
			err = err.toNative();
		}

		return _Promise.reject(err);
	}
}

},{"babel-runtime/core-js/promise":13,"babel-runtime/regenerator":26}],311:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.assertIsObject = assertIsObject;
exports.assertIsNotNullOrUndefined = assertIsNotNullOrUndefined;
exports.assertArgIsNotNullOrUndefined = assertArgIsNotNullOrUndefined;
exports.assertIsFunction = assertIsFunction;
exports.assertIsNotConstructor = assertIsNotConstructor;
exports.assertIsConstructor = assertIsConstructor;
exports.assertIsValidArrayLength = assertIsValidArrayLength;
exports.assertIsValidAssignment = assertIsValidAssignment;
exports.assertIsValidParameterName = assertIsValidParameterName;
exports.assertIsValidName = assertIsValidName;
exports.assertIsNotGeneric = assertIsNotGeneric;
exports.assertIsValidIdentifier = assertIsValidIdentifier;
exports.assertAreValidArguments = assertAreValidArguments;
exports.assertIsMap = assertIsMap;
exports.assertIsSet = assertIsSet;
exports.isValidArrayLength = isValidArrayLength;
exports.isObject = isObject;
exports.isRegExp = isRegExp;
exports.isNumber = isNumber;
exports.isOctalLiteral = isOctalLiteral;
exports.getType = getType;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isFunction = isFunction;
exports.isConstructor = isConstructor;
exports.isInteger = isInteger;
exports.isStrictNode = isStrictNode;

var _keywords = require("../keywords");

var _typesSymbolType = require("../types/symbol-type");

var _native = require("./native");

var objectPattern = /\[object (\w+)\]/;
var integerPattern = /^-?\d+$/;
var octalPattern = /^-?0[0-7]/;
var octalEscapePattern = /^([^\\]|\\[^0-7])*\\([0-3][0-7]{1,2}|[4-7][0-7]|[0-7])/;
var useStrictPattern = /^\s*(?:'use strict'|"use strict")\s*;?\s*$/;

function assertIsObject(obj, methodName) {
	if (!isObject(obj)) {
		throw TypeError(methodName + " called on non-object");
	}
}

function assertIsNotNullOrUndefined(value, methodName) {
	if (isNullOrUndefined(value)) {
		throw TypeError(methodName + " called on null or undefined");
	}
}

function assertArgIsNotNullOrUndefined(obj) {
	if (isNullOrUndefined(obj)) {
		throw TypeError("Cannot convert null or undefined to object");
	}
}

function assertIsFunction(obj, argName) {
	if (!isFunction(obj)) {
		throw TypeError(argName + " is not a function");
	}
}

function assertIsNotConstructor(context, methodName) {
	if (context.isNew) {
		throw TypeError(methodName + " is not a constructor");
	}
}

function assertIsConstructor(context, methodName) {
	if (!context.isNew) {
		throw TypeError(methodName + " must be called with 'new'");
	}
}

function assertIsValidArrayLength(length) {
	if (!isValidArrayLength(length)) {
		throw RangeError("Invalid array length");
	}
}

function assertIsValidAssignment(left, strict) {
	if (left && !left.isReference) {
		throw ReferenceError("Invalid left-hand side in assignment");
	}

	if (left && left.base === left.env.global) {
		assertIsValidName(left.name, strict);
	}
}

function assertIsValidParameterName(name, strict) {
	if (/^\d|[;\(\)"']/.test(name)) {
		throw SyntaxError("Unexpected token in " + name);
	}

	assertIsValidName(name, strict);
}

function assertIsValidName(name, strict) {
	if (strict && (name === "arguments" || name === "eval")) {
		throw SyntaxError("Unexpected eval or arguments in strict mode");
	}
}

function assertIsNotGeneric(obj, expectedClass, methodName) {
	if (!obj || obj.className !== expectedClass) {
		throw TypeError(methodName + " is not generic");
	}
}

function assertIsValidIdentifier(name, strict) {
	if ((0, _keywords.isReserved)(name)) {
		throw SyntaxError("Illegal use of reserved keyword: " + name);
	}

	if (strict && (0, _keywords.isStrictReserved)(name)) {
		throw SyntaxError("Illegal use of strict mode reserved keyword: " + name);
	}
}

function assertAreValidArguments(params, strict) {
	params.forEach(function (param, index) {
		assertIsValidParameterName(param.name, strict);

		if (strict) {
			if (params.some(function (p, i) {
				return index !== i && param.name === p.name;
			})) {
				throw SyntaxError("Strict mode function may not have duplicate parameter names");
			}
		}
	});
}

function assertIsMap(obj, methodName) {
	if (!obj || obj.className !== "Map") {
		throw TypeError("The object must be a map when calling " + methodName);
	}
}

function assertIsSet(obj, methodName) {
	if (!obj || obj.className !== "Set") {
		throw TypeError("The object must be a set when calling " + methodName);
	}
}

function isValidArrayLength(length) {
	return isInteger(length) && length >= 0 && length < 4294967296;
}

function isObject(obj) {
	if (!obj) {
		return false;
	}

	if (obj.isSymbol) {
		return false;
	}

	if (obj.isPrimitive) {
		return obj.value && obj.type === "object";
	}

	return true;
}

function isRegExp(obj) {
	if (!isObject(obj)) {
		return false;
	}

	var matchKey = _typesSymbolType.SymbolType.getByKey("match");
	var matchProp = obj.getProperty(matchKey);
	if (matchProp) {
		var matchValue = matchProp.getValue();
		if (!isUndefined(matchValue)) {
			return (0, _native.toBoolean)(matchValue);
		}
	}

	return obj.className === "RegExp";
}

function isNumber(obj) {
	return obj && obj.type === "number";
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
	// manually check for null/undefined or IE9 will coerce them to the global
	if (obj === undefined) {
		return "Undefined";
	}

	if (obj === null) {
		return "Null";
	}

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

function isFunction(obj) {
	return !!obj && obj.className === "Function";
}

function isConstructor(obj) {
	if (!isFunction(obj)) {
		return false;
	}

	return obj.canConstruct;
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

function isStrictNode(_x) {
	var _again = true;

	_function: while (_again) {
		var nodes = _x;
		_again = false;

		if (!nodes) {
			return false;
		}

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

			return false;
		}

		if (nodes.body) {
			_x = nodes.body;
			_again = true;
			_iteratorNormalCompletion = _didIteratorError = _iteratorError = undefined;
			continue _function;
		}

		return false;
	}
}

},{"../keywords":291,"../types/symbol-type":308,"./native":313,"babel-runtime/core-js/get-iterator":2}],312:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.tryExecute = tryExecute;
var marked0$0 = [tryExecute].map(_regeneratorRuntime.mark);

var _typesPrimitiveType = require("../types/primitive-type");

function tryExecute(obj, name) {
	var args = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	var fn, executionResult;
	return _regeneratorRuntime.wrap(function tryExecute$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				fn = obj.getProperty(name);

				if (fn) {
					context$1$0.next = 3;
					break;
				}

				return context$1$0.abrupt("return", false);

			case 3:

				fn = fn.getValue();

				if (!(fn && fn.className === "Function")) {
					context$1$0.next = 9;
					break;
				}

				context$1$0.next = 7;
				return fn.call(obj, args, fn);

			case 7:
				executionResult = context$1$0.sent;
				return context$1$0.abrupt("return", executionResult ? executionResult.getValue() : _typesPrimitiveType.UNDEFINED);

			case 9:
				return context$1$0.abrupt("return", false);

			case 10:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

},{"../types/primitive-type":303,"babel-runtime/regenerator":26}],313:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Math$sign = require("babel-runtime/core-js/math/sign")["default"];

var _Symbol$for = require("babel-runtime/core-js/symbol/for")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.primitiveToObject = primitiveToObject;
exports.toObject = toObject;
exports.toLength = toLength;
exports.toPropertyKey = toPropertyKey;
exports.toArray = toArray;
exports.toPrimitive = toPrimitive;
exports.toString = toString;
exports.toNumber = toNumber;
exports.toInteger = toInteger;
exports.toInt32 = toInt32;
exports.toUInt32 = toUInt32;
exports.toBoolean = toBoolean;
exports.toNativeFunction = toNativeFunction;
var marked0$0 = [getString, getPrimitive, getValues, toLength, toPropertyKey, toArray, toPrimitive, toString, toNumber, toInteger, toInt32, toUInt32].map(_regeneratorRuntime.mark);

var _utilsFunc = require("../utils/func");

var sign = _Math$sign;
var floor = Math.floor;
var abs = Math.abs;
var MAX_LENGTH = Math.pow(2, 53) - 1;

function getString(value) {
	var primitiveValue;
	return _regeneratorRuntime.wrap(function getString$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (value) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt("return", "undefined");

			case 2:
				if (!value.isPrimitive) {
					context$1$0.next = 4;
					break;
				}

				return context$1$0.abrupt("return", String(value.toNative()));

			case 4:
				context$1$0.next = 6;
				return (0, _utilsFunc.tryExecute)(value, "toString");

			case 6:
				primitiveValue = context$1$0.sent;

				if (!(primitiveValue && primitiveValue.isPrimitive)) {
					context$1$0.next = 9;
					break;
				}

				return context$1$0.abrupt("return", String(primitiveValue.value));

			case 9:
				context$1$0.next = 11;
				return (0, _utilsFunc.tryExecute)(value, "valueOf");

			case 11:
				primitiveValue = context$1$0.sent;

				if (!(primitiveValue && primitiveValue.isPrimitive)) {
					context$1$0.next = 14;
					break;
				}

				return context$1$0.abrupt("return", String(primitiveValue.value));

			case 14:
				throw TypeError("Cannot convert object to primitive value.");

			case 15:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function getPrimitive(value) {
	var primitiveValue;
	return _regeneratorRuntime.wrap(function getPrimitive$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (value) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt("return", 0);

			case 2:
				if (!value.isPrimitive) {
					context$1$0.next = 4;
					break;
				}

				return context$1$0.abrupt("return", value.toNative());

			case 4:
				context$1$0.next = 6;
				return (0, _utilsFunc.tryExecute)(value, "valueOf");

			case 6:
				primitiveValue = context$1$0.sent;

				if (!(primitiveValue && primitiveValue.isPrimitive)) {
					context$1$0.next = 9;
					break;
				}

				return context$1$0.abrupt("return", primitiveValue.toNative());

			case 9:
				context$1$0.next = 11;
				return (0, _utilsFunc.tryExecute)(value, "toString");

			case 11:
				primitiveValue = context$1$0.sent;

				if (!(primitiveValue && primitiveValue.isPrimitive)) {
					context$1$0.next = 14;
					break;
				}

				return context$1$0.abrupt("return", primitiveValue.toNative());

			case 14:
				throw TypeError("Cannot convert object to primitive value.");

			case 15:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

function getValues(args) {
	var values, i, ln;
	return _regeneratorRuntime.wrap(function getValues$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				values = [];
				i = 0, ln = args.length;

			case 2:
				if (!(i < ln)) {
					context$1$0.next = 11;
					break;
				}

				context$1$0.t0 = values;
				context$1$0.next = 6;
				return getPrimitive(args[i]);

			case 6:
				context$1$0.t1 = context$1$0.sent;
				context$1$0.t0.push.call(context$1$0.t0, context$1$0.t1);

			case 8:
				i++;
				context$1$0.next = 2;
				break;

			case 11:
				return context$1$0.abrupt("return", values);

			case 12:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[2], this);
}

function primitiveToObject(env, value) {
	var newValue = env.objectFactory.createPrimitive(value);
	newValue.isPrimitive = false;
	newValue.type = "object";
	return newValue;
}

function toObject(env, obj, throwOnError) {
	// todo: is this ES6 only?
	if (throwOnError && obj.isPrimitive && obj.value == null) {
		throw TypeError(obj.type + " cannot be converted to an object");
	}

	if (obj.isPrimitive && obj.value != null && obj.type !== "object") {
		return primitiveToObject(env, obj.value);
	}

	return obj;
}

function getEnv(obj) {
	return obj[_Symbol$for("env")];
}

function getOptions(obj) {
	return getEnv(obj).options;
}

function toLength(obj) {
	var lengthProperty, _length;

	return _regeneratorRuntime.wrap(function toLength$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				lengthProperty = obj.getProperty("length");

				if (!lengthProperty) {
					context$1$0.next = 10;
					break;
				}

				if (!(getOptions(obj).ecmaVersion === 5)) {
					context$1$0.next = 6;
					break;
				}

				context$1$0.next = 5;
				return toUInt32(lengthProperty.getValue());

			case 5:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 6:
				context$1$0.next = 8;
				return toInteger(lengthProperty.getValue());

			case 8:
				_length = context$1$0.sent;
				return context$1$0.abrupt("return", Math.min(Math.max(_length, 0), MAX_LENGTH));

			case 10:
				return context$1$0.abrupt("return", 0);

			case 11:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[3], this);
}

function toPropertyKey(key) {
	return _regeneratorRuntime.wrap(function toPropertyKey$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(key && key.isSymbol)) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt("return", key);

			case 2:
				context$1$0.next = 4;
				return toString(key);

			case 4:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 5:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[4], this);
}

function toArray(obj, length) {
	var arr,
	    i,
	    args$1$0 = arguments;
	return _regeneratorRuntime.wrap(function toArray$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				arr = [];

				if (!obj) {
					context$1$0.next = 8;
					break;
				}

				if (!(args$1$0.length < 2)) {
					context$1$0.next = 6;
					break;
				}

				context$1$0.next = 5;
				return toLength(obj);

			case 5:
				length = context$1$0.sent;

			case 6:
				i = 0;

				while (i < length) {
					if (obj.has(i)) {
						arr[i] = obj.getValue(i);
					}

					i++;
				}

			case 8:
				return context$1$0.abrupt("return", arr);

			case 9:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[5], this);
}

function toPrimitive(obj, preferredType) {
	return _regeneratorRuntime.wrap(function toPrimitive$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				preferredType = preferredType && preferredType.toLowerCase();
				if (!preferredType && obj) {
					preferredType = obj.primitiveHint;
				}

				if (!(obj && obj.isSymbol)) {
					context$1$0.next = 4;
					break;
				}

				throw TypeError("Cannot convert Symbol to a " + preferredType);

			case 4:
				if (!(preferredType === "string")) {
					context$1$0.next = 8;
					break;
				}

				context$1$0.next = 7;
				return getString(obj);

			case 7:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 8:
				context$1$0.next = 10;
				return getPrimitive(obj);

			case 10:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 11:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[6], this);
}

function toString(obj) {
	return _regeneratorRuntime.wrap(function toString$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return toPrimitive(obj, "string");

			case 2:
				context$1$0.t0 = context$1$0.sent;
				return context$1$0.abrupt("return", String(context$1$0.t0));

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[7], this);
}

function toNumber(obj) {
	return _regeneratorRuntime.wrap(function toNumber$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(!obj || obj.type === "undefined")) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt("return", NaN);

			case 2:
				context$1$0.next = 4;
				return toPrimitive(obj, "number");

			case 4:
				context$1$0.t0 = context$1$0.sent;
				return context$1$0.abrupt("return", Number(context$1$0.t0));

			case 6:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[8], this);
}

function toInteger(obj) {
	var value;
	return _regeneratorRuntime.wrap(function toInteger$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return toNumber(obj);

			case 2:
				value = context$1$0.sent;

				if (!isNaN(value)) {
					context$1$0.next = 5;
					break;
				}

				return context$1$0.abrupt("return", 0);

			case 5:
				if (!(value === 0 || !isFinite(value))) {
					context$1$0.next = 7;
					break;
				}

				return context$1$0.abrupt("return", value);

			case 7:
				return context$1$0.abrupt("return", sign(value) * floor(abs(value)));

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[9], this);
}

function toInt32(obj) {
	var value;
	return _regeneratorRuntime.wrap(function toInt32$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return toInteger(obj);

			case 2:
				value = context$1$0.sent;
				return context$1$0.abrupt("return", isFinite(value) ? value : 0);

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[10], this);
}

function toUInt32(obj) {
	var value;
	return _regeneratorRuntime.wrap(function toUInt32$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return toInt32(obj);

			case 2:
				value = context$1$0.sent;
				return context$1$0.abrupt("return", value >>> 0);

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[11], this);
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
	return env.objectFactory.createBuiltInFunction(_regeneratorRuntime.mark(function callee$1$0() {
		var thisArg,
		    args,
		    value,
		    args$2$0 = arguments;
		return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					thisArg = undefined;

					if (this && this.node && (this.node.isPrimitive || this.node.className === "Date")) {
						thisArg = this.node.value;
					}

					context$2$0.next = 4;
					return getValues(args$2$0);

				case 4:
					args = context$2$0.sent;
					value = fn.apply(thisArg, args);
					return context$2$0.abrupt("return", env.objectFactory.createPrimitive(value));

				case 7:
				case "end":
					return context$2$0.stop();
			}
		}, callee$1$0, this);
	}), fn.length, name);
}

// default case/number

},{"../utils/func":312,"babel-runtime/core-js/math/sign":3,"babel-runtime/core-js/symbol/for":16,"babel-runtime/regenerator":26}],314:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.owns = owns;
var hasOwn = Object.prototype.hasOwnProperty;

function owns(obj, prop) {
	return hasOwn.call(obj, prop);
}

},{}],315:[function(require,module,exports){
"use strict";

var _defineProperty = require("babel-runtime/helpers/define-property")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ops;

var _native = require("./native");

function neg(value) {
	if (value === undefined) {
		return false;
	}

	return !value;
}

function pos(value) {
	return !!value;
}

var ops = (_ops = {
	// algorithms
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

	areSameOrZero: function areSameOrZero(a, b) {
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
			}

			return a.value === b.value;
		}

		return a === b;
	},

	coerciveEquals: _regeneratorRuntime.mark(function coerciveEquals(a, b) {
		var primitiveA, primitiveB;
		return _regeneratorRuntime.wrap(function coerciveEquals$(context$1$0) {
			while (1) switch (context$1$0.prev = context$1$0.next) {
				case 0:
					if (!(a.isPrimitive && b.isPrimitive)) {
						context$1$0.next = 2;
						break;
					}

					return context$1$0.abrupt("return", a.value == b.value);

				case 2:
					if (!(a.type === b.type)) {
						context$1$0.next = 4;
						break;
					}

					return context$1$0.abrupt("return", this.strictEquals(a, b));

				case 4:
					context$1$0.next = 6;
					return (0, _native.toPrimitive)(a);

				case 6:
					primitiveA = context$1$0.sent;
					context$1$0.next = 9;
					return (0, _native.toPrimitive)(b);

				case 9:
					primitiveB = context$1$0.sent;

					if (!(typeof primitiveA === "number" || typeof primitiveB === "number" || typeof primitiveA === "boolean" || typeof primitiveB === "boolean")) {
						context$1$0.next = 12;
						break;
					}

					return context$1$0.abrupt("return", Number(primitiveA) === Number(primitiveB));

				case 12:
					if (!(typeof primitiveA === "string")) {
						context$1$0.next = 18;
						break;
					}

					context$1$0.t0 = primitiveA;
					context$1$0.next = 16;
					return (0, _native.toPrimitive)(b, "string");

				case 16:
					context$1$0.t1 = context$1$0.sent;
					return context$1$0.abrupt("return", context$1$0.t0 === context$1$0.t1);

				case 18:
					if (!(typeof primitiveB === "string")) {
						context$1$0.next = 24;
						break;
					}

					context$1$0.next = 21;
					return (0, _native.toPrimitive)(a, "string");

				case 21:
					context$1$0.t2 = context$1$0.sent;
					context$1$0.t3 = primitiveB;
					return context$1$0.abrupt("return", context$1$0.t2 === context$1$0.t3);

				case 24:
					return context$1$0.abrupt("return", primitiveA == primitiveB);

				case 25:
				case "end":
					return context$1$0.stop();
			}
		}, coerciveEquals, this);
	}),

	/* eslint-enable eqeqeq */
	strictEquals: function strictEquals(a, b) {
		if (a.isPrimitive && b.isPrimitive) {
			return a.value === b.value;
		}

		if (a.isPrimitive || b.isPrimitive) {
			return false;
		}

		return a === b;
	},

	relationalCompare: _regeneratorRuntime.mark(function relationalCompare(a, b, leftFirst) {
		var primitiveA, primitiveB;
		return _regeneratorRuntime.wrap(function relationalCompare$(context$1$0) {
			while (1) switch (context$1$0.prev = context$1$0.next) {
				case 0:
					primitiveA = undefined, primitiveB = undefined;

					if (!leftFirst) {
						context$1$0.next = 10;
						break;
					}

					context$1$0.next = 4;
					return (0, _native.toPrimitive)(a, "number");

				case 4:
					primitiveA = context$1$0.sent;
					context$1$0.next = 7;
					return (0, _native.toPrimitive)(b, "number");

				case 7:
					primitiveB = context$1$0.sent;
					context$1$0.next = 16;
					break;

				case 10:
					context$1$0.next = 12;
					return (0, _native.toPrimitive)(b, "number");

				case 12:
					primitiveB = context$1$0.sent;
					context$1$0.next = 15;
					return (0, _native.toPrimitive)(a, "number");

				case 15:
					primitiveA = context$1$0.sent;

				case 16:
					if (!(typeof primitiveA === "string" && typeof primitiveB === "string")) {
						context$1$0.next = 18;
						break;
					}

					return context$1$0.abrupt("return", primitiveA < primitiveB);

				case 18:

					primitiveA = Number(primitiveA);
					primitiveB = Number(primitiveB);

					if (!(isNaN(primitiveA) || isNaN(primitiveB))) {
						context$1$0.next = 22;
						break;
					}

					return context$1$0.abrupt("return", undefined);

				case 22:
					return context$1$0.abrupt("return", primitiveA < primitiveB);

				case 23:
				case "end":
					return context$1$0.stop();
			}
		}, relationalCompare, this);
	})

}, _defineProperty(_ops, "==", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return this.coerciveEquals(a, b);

			case 2:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 3:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "!=", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return this.coerciveEquals(a, b);

			case 2:
				return context$1$0.abrupt("return", !context$1$0.sent);

			case 3:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "===", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return this.strictEquals(a, b);

			case 2:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 3:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "!==", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return this.strictEquals(a, b);

			case 2:
				return context$1$0.abrupt("return", !context$1$0.sent);

			case 3:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "+", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(a.isPrimitive && b.isPrimitive)) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt("return", a.value + b.value);

			case 2:
				context$1$0.next = 4;
				return (0, _native.toPrimitive)(a);

			case 4:
				a = context$1$0.sent;
				context$1$0.next = 7;
				return (0, _native.toPrimitive)(b);

			case 7:
				b = context$1$0.sent;
				return context$1$0.abrupt("return", a + b);

			case 9:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "-", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toNumber)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toNumber)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 - context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "/", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toNumber)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toNumber)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 / context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "*", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toNumber)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toNumber)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 * context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "%", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toPrimitive)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toPrimitive)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 % context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "<<", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toPrimitive)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toPrimitive)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 << context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, ">>", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toPrimitive)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toPrimitive)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 >> context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, ">>>", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toPrimitive)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toPrimitive)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 >>> context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "|", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toInt32)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toInt32)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 | context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "^", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toInt32)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toInt32)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 ^ context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "&", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toInt32)(a);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				context$1$0.next = 5;
				return (0, _native.toInt32)(b);

			case 5:
				context$1$0.t1 = context$1$0.sent;
				return context$1$0.abrupt("return", context$1$0.t0 & context$1$0.t1);

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "<", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return this.relationalCompare(a, b, true);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				return context$1$0.abrupt("return", pos(context$1$0.t0));

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "<=", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return this.relationalCompare(b, a, false);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				return context$1$0.abrupt("return", neg(context$1$0.t0));

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, ">", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return this.relationalCompare(b, a, false);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				return context$1$0.abrupt("return", pos(context$1$0.t0));

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, ">=", _regeneratorRuntime.mark(function _(a, b) {
	return _regeneratorRuntime.wrap(function _$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return this.relationalCompare(a, b, true);

			case 2:
				context$1$0.t0 = context$1$0.sent;
				return context$1$0.abrupt("return", neg(context$1$0.t0));

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, _, this);
})), _defineProperty(_ops, "in", _regeneratorRuntime.mark(function _in(a, b) {
	var bString;
	return _regeneratorRuntime.wrap(function _in$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _native.toPropertyKey)(a);

			case 2:
				a = context$1$0.sent;

				if (!b.isPrimitive) {
					context$1$0.next = 8;
					break;
				}

				context$1$0.next = 6;
				return (0, _native.toString)(b);

			case 6:
				bString = context$1$0.sent;
				throw TypeError("Cannot use 'in' operator to search for '" + a + "' in " + bString);

			case 8:
				return context$1$0.abrupt("return", b.has(a));

			case 9:
			case "end":
				return context$1$0.stop();
		}
	}, _in, this);
})), _defineProperty(_ops, "instanceof", function _instanceof(a, b) {
	if (b.type !== "function") {
		throw TypeError("Expecting a function in instanceof check, but got " + b.type);
	}

	if (a.isPrimitive) {
		return false;
	}

	return b.hasInstance(a);
}), _ops);

exports["default"] = ops;
module.exports = exports["default"];

/* eslint-disable eqeqeq */

// use native implicit comarison
// equality operators

// additive operators

// multiplicative operators

// bitwise shift operators

// relational operators

},{"./native":313,"babel-runtime/helpers/define-property":21,"babel-runtime/regenerator":26}],316:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ArrayExpression;
var marked0$0 = [ArrayExpression].map(_regeneratorRuntime.mark);

var _utilsAsync = require("../utils/async");

function ArrayExpression(context) {
	var objectFactory, arr;
	return _regeneratorRuntime.wrap(function ArrayExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				objectFactory = context.env.objectFactory;
				arr = objectFactory.createArray();

				if (!context.node.elements) {
					context$1$0.next = 5;
					break;
				}

				return context$1$0.delegateYield((0, _utilsAsync.each)(context.node.elements, _regeneratorRuntime.mark(function callee$1$0(element, i) {
					var item;
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								if (!element) {
									context$2$0.next = 5;
									break;
								}

								context$2$0.next = 3;
								return context.create(element).execute();

							case 3:
								item = context$2$0.sent.result.getValue();

								arr.setIndex(i, item);

							case 5:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				})), "t0", 4);

			case 4:

				arr.setValue("length", objectFactory.createPrimitive(context.node.elements.length));

			case 5:
				return context$1$0.abrupt("return", context.result(arr));

			case 6:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/async":310,"babel-runtime/regenerator":26}],317:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = AssignmentExpression;
var marked0$0 = [AssignmentExpression].map(_regeneratorRuntime.mark);

var _utilsAssign = require("../utils/assign");

function AssignmentExpression(context) {
	var right, rightValue, left, op, nativeValue;
	return _regeneratorRuntime.wrap(function AssignmentExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.right).execute();

			case 2:
				right = context$1$0.sent.result;
				rightValue = right.getValue();

				if (!(context.node.operator === "=")) {
					context$1$0.next = 9;
					break;
				}

				context$1$0.next = 7;
				return (0, _utilsAssign.assign)(context.env, context.node.left, rightValue);

			case 7:
				context$1$0.next = 18;
				break;

			case 9:
				context$1$0.next = 11;
				return context.create(context.node.left).execute();

			case 11:
				left = context$1$0.sent.result;
				op = context.node.operator.slice(0, -1);
				context$1$0.next = 15;
				return context.env.ops[op](left.getValue(), rightValue);

			case 15:
				nativeValue = context$1$0.sent;

				rightValue = context.env.objectFactory.createPrimitive(nativeValue);
				left.setValue(rightValue, context.env.isStrict());

			case 18:
				return context$1$0.abrupt("return", context.result(rightValue));

			case 19:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

// remove equals

},{"../utils/assign":309,"babel-runtime/regenerator":26}],318:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = BinaryExpression;
var marked0$0 = [BinaryExpression].map(_regeneratorRuntime.mark);

var _typesPrimitiveType = require("../types/primitive-type");

function BinaryExpression(context) {
	var left, leftValue, right, rightValue, op, newValue;
	return _regeneratorRuntime.wrap(function BinaryExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.left).execute();

			case 2:
				left = context$1$0.sent.result;
				leftValue = left.getValue() || _typesPrimitiveType.UNDEFINED;
				context$1$0.next = 6;
				return context.create(context.node.right).execute();

			case 6:
				right = context$1$0.sent.result;
				rightValue = right.getValue() || _typesPrimitiveType.UNDEFINED;
				op = context.node.operator;
				context$1$0.next = 11;
				return context.env.ops[op](leftValue, rightValue);

			case 11:
				newValue = context$1$0.sent;
				return context$1$0.abrupt("return", context.result(context.env.objectFactory.createPrimitive(newValue)));

			case 13:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../types/primitive-type":303,"babel-runtime/regenerator":26}],319:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = BlockStatement;
var marked0$0 = [BlockStatement].map(_regeneratorRuntime.mark);

var _utilsAsync = require("../utils/async");

function BlockStatement(context) {
	var result, priorResult;
	return _regeneratorRuntime.wrap(function BlockStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				result = undefined, priorResult = undefined;

				if (context.node.type === "Program") {
					context.env.current.init(context.node);
				}

				return context$1$0.delegateYield((0, _utilsAsync.each)(context.node.body, _regeneratorRuntime.mark(function callee$1$0(node, i, body, abort) {
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return context.create(node).execute();

							case 2:
								result = context$2$0.sent;

								if (result.shouldBreak(context, false, priorResult)) {
									abort();
								}

								priorResult = result;

							case 5:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				})), "t0", 3);

			case 3:
				return context$1$0.abrupt("return", result);

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/async":310,"babel-runtime/regenerator":26}],320:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = CallExpression;
var marked0$0 = [CallExpression].map(_regeneratorRuntime.mark);

var _envPropertyReference = require("../env/property-reference");

var _utilsNative = require("../utils/native");

var _utilsAsync = require("../utils/async");

var _typesPrimitiveType = require("../types/primitive-type");

function assignThis(env, fnMember, fn, isNew, native) {
	if (isNew) {
		return null;
	}

	if (fnMember instanceof _envPropertyReference.PropertyReference && (!fnMember.unqualified || fnMember.base !== env.global)) {
		var thisArg = fnMember.base;
		if (env.options.ecmaVersion === 5) {
			return (0, _utilsNative.toObject)(env, thisArg);
		}

		return thisArg;
	}

	return null;
}

function CallExpression(context) {
	var node, isNew, fnMember, fn, args, stringValue, native, thisArg, callee, result;
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
				return context$1$0.delegateYield((0, _utilsAsync.map)(node.arguments, _regeneratorRuntime.mark(function callee$1$0(arg) {
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return context.create(arg).execute();

							case 2:
								return context$2$0.abrupt("return", context$2$0.sent.result.getValue());

							case 3:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				})), "t0", 7);

			case 7:
				args = context$1$0.t0;

				if (!(!fn || fn.className !== "Function")) {
					context$1$0.next = 13;
					break;
				}

				context$1$0.next = 11;
				return (0, _utilsNative.toString)(fn);

			case 11:
				stringValue = context$1$0.sent;
				return context$1$0.abrupt("return", context.raise(TypeError(stringValue + " not a function")));

			case 13:
				native = fn.native;
				thisArg = assignThis(context.env, fnMember, fn, isNew, native);
				callee = fnMember;

				callee.identifier = fn.name;
				context$1$0.next = 19;
				return fn[isNew ? "construct" : "call"](thisArg, args, callee);

			case 19:
				result = context$1$0.sent;
				return context$1$0.abrupt("return", context.result(result || _typesPrimitiveType.UNDEFINED));

			case 21:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../env/property-reference":121,"../types/primitive-type":303,"../utils/async":310,"../utils/native":313,"babel-runtime/regenerator":26}],321:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = DebuggerStatement;

function DebuggerStatement(context) {
	if (context.env.options.allowDebugger) {
		/* eslint-disable no-debugger */
		debugger;
		/* eslint-enable no-debugger */
	}

	return context.empty();
}

module.exports = exports["default"];

},{}],322:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = DoWhileStatement;
var marked0$0 = [DoWhileStatement].map(_regeneratorRuntime.mark);

var _utilsNative = require("../utils/native");

function DoWhileStatement(context) {
	var result, priorResult, passed;
	return _regeneratorRuntime.wrap(function DoWhileStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				result = undefined, priorResult = undefined;
				passed = true;

				if (!(context.node.type === "WhileStatement")) {
					context$1$0.next = 7;
					break;
				}

				context$1$0.next = 5;
				return context.create(context.node.test).execute();

			case 5:
				context$1$0.t0 = context$1$0.sent.result.getValue();
				passed = (0, _utilsNative.toBoolean)(context$1$0.t0);

			case 7:
				if (!passed) {
					context$1$0.next = 20;
					break;
				}

				context$1$0.next = 10;
				return context.create(context.node.body).execute();

			case 10:
				result = context$1$0.sent;

				if (!(result && result.shouldBreak(context, true, priorResult))) {
					context$1$0.next = 13;
					break;
				}

				return context$1$0.abrupt("return", result);

			case 13:
				context$1$0.next = 15;
				return context.create(context.node.test).execute();

			case 15:
				context$1$0.t1 = context$1$0.sent.result.getValue();
				passed = (0, _utilsNative.toBoolean)(context$1$0.t1);

				priorResult = result;
				context$1$0.next = 7;
				break;

			case 20:
				return context$1$0.abrupt("return", result);

			case 21:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],323:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = EmptyStatement;

function EmptyStatement(context) {
	return context.empty();
}

module.exports = exports["default"];

},{}],324:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ExpressionStatement;
var marked0$0 = [ExpressionStatement].map(_regeneratorRuntime.mark);

var _typesPrimitiveType = require("../types/primitive-type");

function ExpressionStatement(context) {
	var executionResult, executionValue;
	return _regeneratorRuntime.wrap(function ExpressionStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.expression).execute();

			case 2:
				executionResult = context$1$0.sent;
				executionValue = executionResult && executionResult.result && executionResult.result.getValue();
				return context$1$0.abrupt("return", context.result(executionValue || _typesPrimitiveType.UNDEFINED));

			case 5:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../types/primitive-type":303,"babel-runtime/regenerator":26}],325:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ForInStatement;
var marked0$0 = [ForInStatement].map(_regeneratorRuntime.mark);

var _utilsNative = require("../utils/native");

var _utilsContracts = require("../utils/contracts");

function ForInStatement(context) {
	var left, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, decl, obj, it, next, done, result, priorResult, itResult;

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

				if (!(0, _utilsContracts.isNullOrUndefined)(obj)) {
					context$1$0.next = 39;
					break;
				}

				return context$1$0.abrupt("return", context.empty());

			case 39:
				it = obj.getIterator(context.env);
				next = it.getValue("next");
				done = false;
				result = undefined, priorResult = undefined;

			case 43:
				if (done) {
					context$1$0.next = 58;
					break;
				}

				context$1$0.next = 46;
				return next.call(it);

			case 46:
				itResult = context$1$0.sent;

				done = (0, _utilsNative.toBoolean)(itResult.getValue("done"));

				if (!(!done && itResult.has("value"))) {
					context$1$0.next = 55;
					break;
				}

				left.setValue(itResult.getValue("value"));
				context$1$0.next = 52;
				return context.create(context.node.body).execute();

			case 52:
				result = context$1$0.sent;

				if (!(result && result.shouldBreak(context, true, priorResult))) {
					context$1$0.next = 55;
					break;
				}

				return context$1$0.abrupt("return", result);

			case 55:

				priorResult = result;
				context$1$0.next = 43;
				break;

			case 58:
				return context$1$0.abrupt("return", result);

			case 59:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this, [[5, 17, 21, 29], [22,, 24, 28]]);
}

module.exports = exports["default"];

// should only be one, but
// need to unwrap the declaration to get it
// todo: this is sloppy - need to revisit

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/core-js/get-iterator":2,"babel-runtime/regenerator":26}],326:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ForStatement;
var marked0$0 = [shouldContinue, ForStatement].map(_regeneratorRuntime.mark);

var _utilsNative = require("../utils/native");

function shouldContinue(context) {
	return _regeneratorRuntime.wrap(function shouldContinue$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (context.node.test) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt("return", true);

			case 2:
				context$1$0.next = 4;
				return context.create(context.node.test).execute();

			case 4:
				context$1$0.t0 = context$1$0.sent.result.getValue();
				return context$1$0.abrupt("return", (0, _utilsNative.toBoolean)(context$1$0.t0));

			case 6:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function ForStatement(context) {
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
	}, marked0$0[1], this);
}

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],327:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = FunctionDeclaration;

function FunctionDeclaration(context) {
	return context.result(context.env.getValue(context.node.id.name));
}

module.exports = exports["default"];

},{}],328:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = FunctionExpression;

var _utilsContracts = require("../utils/contracts");

function FunctionExpression(context) {
	var objectFactory = context.env.objectFactory;
	var strict = context.env.isStrict() || (0, _utilsContracts.isStrictNode)(context.node.body.body);
	var name = context.node.id ? context.node.id.name : "anonymous";

	var func = objectFactory.createFunction(context.node, undefined, { strict: strict, name: name });
	func.bindScope(context.env.current);
	return context.result(func);
}

module.exports = exports["default"];

},{"../utils/contracts":311}],329:[function(require,module,exports){
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

},{}],330:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = IfStatement;
var marked0$0 = [IfStatement].map(_regeneratorRuntime.mark);

var _utilsNative = require("../utils/native");

function IfStatement(context) {
	var testValue;
	return _regeneratorRuntime.wrap(function IfStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.test).execute();

			case 2:
				testValue = context$1$0.sent.result.getValue();

				if (!(0, _utilsNative.toBoolean)(testValue)) {
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
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],331:[function(require,module,exports){
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

var _metaProperty = require("./meta-property");

var _metaProperty2 = _interopRequireDefault(_metaProperty);

var _objectExpression = require("./object-expression");

var _objectExpression2 = _interopRequireDefault(_objectExpression);

var _returnStatement = require("./return-statement");

var _returnStatement2 = _interopRequireDefault(_returnStatement);

var _sequenceExpression = require("./sequence-expression");

var _sequenceExpression2 = _interopRequireDefault(_sequenceExpression);

var _switchStatement = require("./switch-statement");

var _switchStatement2 = _interopRequireDefault(_switchStatement);

var _taggedTemplateExpression = require("./tagged-template-expression");

var _taggedTemplateExpression2 = _interopRequireDefault(_taggedTemplateExpression);

var _templateLiteral = require("./template-literal");

var _templateLiteral2 = _interopRequireDefault(_templateLiteral);

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
	MetaProperty: _metaProperty2["default"],
	ObjectExpression: _objectExpression2["default"],
	ReturnStatement: _returnStatement2["default"],
	SequenceExpression: _sequenceExpression2["default"],
	SwitchStatement: _switchStatement2["default"],
	TaggedTemplateExpression: _taggedTemplateExpression2["default"],
	TemplateLiteral: _templateLiteral2["default"],
	ThisExpression: _thisExpression2["default"],
	ThrowStatement: _throwStatement2["default"],
	TryStatement: _tryStatement2["default"],
	UnaryExpression: _unaryExpression2["default"],
	UpdateExpression: _updateExpression2["default"],
	VariableDeclaration: _variableDeclaration2["default"],
	VariableDeclarator: _variableDeclarator2["default"],
	WithStatement: _withStatement2["default"],

	ArrowFunctionExpression: _functionExpression2["default"],
	ContinueStatement: _interruptStatement2["default"],
	IfStatement: _ifStatement2["default"],
	NewExpression: _callExpression2["default"],
	Program: _blockStatement2["default"],
	WhileStatement: _doWhileStatementJs2["default"]
};

exports["default"] = {
	visit: _regeneratorRuntime.mark(function visit(context) {
		var ob;
		return _regeneratorRuntime.wrap(function visit$(context$1$0) {
			while (1) switch (context$1$0.prev = context$1$0.next) {
				case 0:
					if (context.node.type in visitors) {
						context$1$0.next = 2;
						break;
					}

					throw TypeError("No handler defined for: " + context.node.type);

				case 2:
					ob = context.env.visitObserver;

					if (ob && 'function' === typeof ob.notify) {
						ob.notify(context);
					}

					context$1$0.next = 6;
					return visitors[context.node.type](context);

				case 6:
					return context$1$0.abrupt("return", context$1$0.sent);

				case 7:
				case "end":
					return context$1$0.stop();
			}
		}, visit, this);
	})
};
module.exports = exports["default"];

},{"./array-expression":316,"./assignment-expression":317,"./binary-expression":318,"./block-statement":319,"./call-expression":320,"./debugger-statement":321,"./do-while-statement.js":322,"./empty-statement":323,"./expression-statement":324,"./for-in-statement":325,"./for-statement":326,"./function-declaration":327,"./function-expression":328,"./identifier":329,"./if-statement":330,"./interrupt-statement":332,"./labeled-statement":333,"./literal":334,"./logical-expression":335,"./member-expression":336,"./meta-property":337,"./object-expression":338,"./return-statement":339,"./sequence-expression":340,"./switch-statement":341,"./tagged-template-expression":342,"./template-literal":343,"./this-expression":344,"./throw-statement":345,"./try-statement":346,"./unary-expression":347,"./update-expression":348,"./variable-declaration":349,"./variable-declarator":350,"./with-statement":351,"babel-runtime/helpers/interop-require-default":24,"babel-runtime/regenerator":26}],332:[function(require,module,exports){
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

},{}],333:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = LabeledStatement;
var marked0$0 = [LabeledStatement].map(_regeneratorRuntime.mark);

function LabeledStatement(context) {
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
	}, marked0$0[0], this);
}

;
module.exports = exports["default"];

},{"babel-runtime/regenerator":26}],334:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = Literal;

function Literal(context) {
	return context.result(context.env.objectFactory.createPrimitive(context.node.value));
}

module.exports = exports["default"];

},{}],335:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = LogicalExpression;
var marked0$0 = [LogicalExpression].map(_regeneratorRuntime.mark);

var _utilsNative = require("../utils/native");

function LogicalExpression(context) {
	var left, passed;
	return _regeneratorRuntime.wrap(function LogicalExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.left).execute();

			case 2:
				left = context$1$0.sent;
				passed = (0, _utilsNative.toBoolean)(left.result.getValue());

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
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/native":313,"babel-runtime/regenerator":26}],336:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = MemberExpression;
var marked0$0 = [MemberExpression].map(_regeneratorRuntime.mark);

var _envPropertyReference = require("../env/property-reference");

var _utilsNative = require("../utils/native");

function MemberExpression(context) {
	var obj, key, value, id;
	return _regeneratorRuntime.wrap(function MemberExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.object).execute();

			case 2:
				obj = context$1$0.sent.result.getValue();
				key = undefined, value = undefined;

				if (!context.node.computed) {
					context$1$0.next = 17;
					break;
				}

				context$1$0.next = 7;
				return context.create(context.node.property).execute();

			case 7:
				id = context$1$0.sent.result.getValue();

				if (!id.isSymbol) {
					context$1$0.next = 12;
					break;
				}

				// if the identifier is a symbol, keep as is - property reference will handle it accordingly
				key = id;
				context$1$0.next = 15;
				break;

			case 12:
				context$1$0.next = 14;
				return (0, _utilsNative.toString)(id);

			case 14:
				key = context$1$0.sent;

			case 15:
				context$1$0.next = 18;
				break;

			case 17:
				key = context.node.property.name;

			case 18:

				value = new _envPropertyReference.PropertyReference(key, obj, context.env);
				return context$1$0.abrupt("return", context.result(value));

			case 20:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../env/property-reference":121,"../utils/native":313,"babel-runtime/regenerator":26}],337:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = MetaProperty;

function MetaProperty(context) {
	throw Error("Meta properties not yet implemented");
}

module.exports = exports["default"];

},{}],338:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ObjectExpression;
var marked0$0 = [ObjectExpression].map(_regeneratorRuntime.mark);

var _utilsContracts = require("../utils/contracts");

var _utilsAsync = require("../utils/async");

var _utilsNative = require("../utils/native");

function setDescriptor(env, obj, descriptor) {
	var strict = env.isStrict();

	if (descriptor.get) {
		(0, _utilsContracts.assertAreValidArguments)(descriptor.get.node.params, strict);
		descriptor.getter = _regeneratorRuntime.mark(function callee$1$0() {
			return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return descriptor.get.call(this);

					case 2:
						return context$2$0.abrupt("return", context$2$0.sent);

					case 3:
					case "end":
						return context$2$0.stop();
				}
			}, callee$1$0, this);
		});
	}

	if (descriptor.set) {
		(0, _utilsContracts.assertAreValidArguments)(descriptor.set.node.params, strict);
		descriptor.setter = _regeneratorRuntime.mark(function callee$1$0(value) {
			return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return descriptor.set.call(this, [value]);

					case 2:
					case "end":
						return context$2$0.stop();
				}
			}, callee$1$0, this);
		});
	}

	obj.defineOwnProperty(descriptor.key, descriptor);
}

function createDescriptor(key, value) {
	return { key: key, value: value, configurable: true, enumerable: true, writable: true };
}

function ObjectExpression(context) {
	var obj, descriptors, prop;
	return _regeneratorRuntime.wrap(function ObjectExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				obj = context.env.objectFactory.createObject();
				descriptors = _Object$create(null);
				return context$1$0.delegateYield((0, _utilsAsync.each)(context.node.properties, _regeneratorRuntime.mark(function callee$1$0(property) {
					var value, key, keyValue;
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return context.create(property.value).execute();

							case 2:
								value = context$2$0.sent.result.getValue();
								key = undefined;

								if (!property.computed) {
									context$2$0.next = 13;
									break;
								}

								context$2$0.next = 7;
								return context.create(property.key).execute();

							case 7:
								keyValue = context$2$0.sent.result.getValue();
								context$2$0.next = 10;
								return (0, _utilsNative.toPropertyKey)(keyValue);

							case 10:
								key = context$2$0.sent;
								context$2$0.next = 14;
								break;

							case 13:
								key = property.key.name || property.key.value;

							case 14:
								context$2$0.t0 = property.kind;
								context$2$0.next = context$2$0.t0 === "get" ? 17 : context$2$0.t0 === "set" ? 17 : 20;
								break;

							case 17:
								descriptors[key] = descriptors[key] || createDescriptor(key);
								descriptors[key][property.kind] = value;
								return context$2$0.abrupt("break", 22);

							case 20:
								obj.defineOwnProperty(key, createDescriptor(key, value));
								return context$2$0.abrupt("break", 22);

							case 22:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				})), "t0", 3);

			case 3:

				for (prop in descriptors) {
					setDescriptor(context.env, obj, descriptors[prop]);
				}

				return context$1$0.abrupt("return", context.result(obj));

			case 5:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/async":310,"../utils/contracts":311,"../utils/native":313,"babel-runtime/core-js/object/create":8,"babel-runtime/regenerator":26}],339:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ReturnStatement;
var marked0$0 = [ReturnStatement].map(_regeneratorRuntime.mark);

var _typesPrimitiveType = require("../types/primitive-type");

function ReturnStatement(context) {
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
				return context$1$0.abrupt("return", context.exit(_typesPrimitiveType.UNDEFINED));

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../types/primitive-type":303,"babel-runtime/regenerator":26}],340:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = SequenceExpression;
var marked0$0 = [SequenceExpression].map(_regeneratorRuntime.mark);

var _utilsAsync = require("../utils/async");

function SequenceExpression(context) {
	var value;
	return _regeneratorRuntime.wrap(function SequenceExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				value = undefined;
				context$1$0.next = 3;
				return (0, _utilsAsync.each)(context.node.expressions, _regeneratorRuntime.mark(function callee$1$0(expr) {
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return context.create(expr).execute();

							case 2:
								value = context$2$0.sent.result.getValue();

							case 3:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				}));

			case 3:
				return context$1$0.abrupt("return", context.result(value));

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/async":310,"babel-runtime/regenerator":26}],341:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = SwitchStatement;
var marked0$0 = [executeStatements, SwitchStatement].map(_regeneratorRuntime.mark);

var _utilsAsync = require("../utils/async");

function executeStatements(context, statements) {
	var result;
	return _regeneratorRuntime.wrap(function executeStatements$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				result = undefined;
				context$1$0.next = 3;
				return (0, _utilsAsync.each)(statements, _regeneratorRuntime.mark(function callee$1$0(statement, i, all, abort) {
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return context.create(statement).execute();

							case 2:
								result = context$2$0.sent;

								if (result && result.isAbrupt()) {
									abort();
								}

							case 4:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				}));

			case 3:
				return context$1$0.abrupt("return", result);

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function SwitchStatement(context) {
	var testValue, passed, value, defaultCase, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, current, caseValue;

	return _regeneratorRuntime.wrap(function SwitchStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.discriminant).execute();

			case 2:
				testValue = context$1$0.sent.result.getValue();
				passed = false;
				value = undefined, defaultCase = undefined;
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 8;
				_iterator = _getIterator(context.node.cases);

			case 10:
				if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
					context$1$0.next = 33;
					break;
				}

				current = _step.value;

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

				if (context.env.ops.strictEquals(caseValue, testValue)) {
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

				if (!(value && value.isAbrupt())) {
					context$1$0.next = 30;
					break;
				}

				value.cancel = false;
				return context$1$0.abrupt("return", value);

			case 30:
				_iteratorNormalCompletion = true;
				context$1$0.next = 10;
				break;

			case 33:
				context$1$0.next = 39;
				break;

			case 35:
				context$1$0.prev = 35;
				context$1$0.t0 = context$1$0["catch"](8);
				_didIteratorError = true;
				_iteratorError = context$1$0.t0;

			case 39:
				context$1$0.prev = 39;
				context$1$0.prev = 40;

				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}

			case 42:
				context$1$0.prev = 42;

				if (!_didIteratorError) {
					context$1$0.next = 45;
					break;
				}

				throw _iteratorError;

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
	}, marked0$0[1], this, [[8, 35, 39, 47], [40,, 42, 46]]);
}

module.exports = exports["default"];

},{"../utils/async":310,"babel-runtime/core-js/get-iterator":2,"babel-runtime/regenerator":26}],342:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = TaggedTemplateExpression;
var marked0$0 = [TaggedTemplateExpression].map(_regeneratorRuntime.mark);

var _utilsAsync = require("../utils/async");

var templateObjectCache = _Object$create(null);

function buildTemplateObject(env, node) {
	// per spec, template objects are cached
	var key = JSON.stringify(node.quasis.map(function (q) {
		return { cooked: q.value.cooked, raw: q.value.raw };
	}));
	if (key in templateObjectCache) {
		return templateObjectCache[key];
	}

	var objectFactory = env.objectFactory;
	var tag = objectFactory.createArray();
	var raw = objectFactory.createArray();
	var quasis = node.quasis;

	for (var i = 0, ln = quasis.length; i < ln; i++) {
		tag.setValue(i, objectFactory.createPrimitive(quasis[i].value.cooked));
		raw.setValue(i, objectFactory.createPrimitive(quasis[i].value.raw));
	}

	raw.freeze();
	tag.defineOwnProperty("raw", { value: raw });
	tag.freeze();

	return templateObjectCache[key] = tag;
}

function TaggedTemplateExpression(context) {
	var templateObject, values, callee, func, value;
	return _regeneratorRuntime.wrap(function TaggedTemplateExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				templateObject = buildTemplateObject(context.env, context.node.quasi);
				context$1$0.next = 3;
				return (0, _utilsAsync.map)(context.node.quasi.expressions, _regeneratorRuntime.mark(function callee$1$0(expr) {
					var value;
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return context.create(expr).execute();

							case 2:
								value = context$2$0.sent;
								context$2$0.next = 5;
								return value.result.getValue();

							case 5:
								return context$2$0.abrupt("return", context$2$0.sent);

							case 6:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				}));

			case 3:
				values = context$1$0.sent;
				context$1$0.next = 6;
				return context.create(context.node.tag).execute();

			case 6:
				callee = context$1$0.sent.result;
				func = callee.getValue();
				context$1$0.next = 10;
				return func.call(callee.base, [templateObject].concat(_toConsumableArray(values)), callee);

			case 10:
				value = context$1$0.sent;
				return context$1$0.abrupt("return", context.result(value));

			case 12:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/async":310,"babel-runtime/core-js/object/create":8,"babel-runtime/helpers/to-consumable-array":25,"babel-runtime/regenerator":26}],343:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = TemplateLiteral;
var marked0$0 = [TemplateLiteral].map(_regeneratorRuntime.mark);

var _utilsAsync = require("../utils/async");

var _utilsNative = require("../utils/native");

function TemplateLiteral(context) {
	var values, result, quasis, i, ln;
	return _regeneratorRuntime.wrap(function TemplateLiteral$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return (0, _utilsAsync.map)(context.node.expressions, _regeneratorRuntime.mark(function callee$1$0(expr) {
					var value;
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return context.create(expr).execute();

							case 2:
								value = context$2$0.sent;
								context$2$0.next = 5;
								return (0, _utilsNative.toString)(value.result.getValue());

							case 5:
								return context$2$0.abrupt("return", context$2$0.sent);

							case 6:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				}));

			case 2:
				values = context$1$0.sent;
				result = [];
				quasis = context.node.quasis;

				for (i = 0, ln = quasis.length; i < ln; i++) {
					result.push(quasis[i].value.cooked);

					if (i < values.length) {
						result.push(values[i]);
					}
				}

				return context$1$0.abrupt("return", context.result(context.env.objectFactory.createPrimitive(result.join(""))));

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/async":310,"../utils/native":313,"babel-runtime/regenerator":26}],344:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ThisExpression;

var _utilsContracts = require("../utils/contracts");

function ThisExpression(context) {
	var thisArg = context.env.getThisBinding();
	if ((0, _utilsContracts.isNullOrUndefined)(thisArg) && !context.env.isStrict()) {
		thisArg = context.env.global;
	}

	return context.result(thisArg);
}

module.exports = exports["default"];

},{"../utils/contracts":311}],345:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = ThrowStatement;
var marked0$0 = [ThrowStatement].map(_regeneratorRuntime.mark);

function ThrowStatement(context) {
	var arg;
	return _regeneratorRuntime.wrap(function ThrowStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return context.create(context.node.argument).execute();

			case 2:
				arg = context$1$0.sent.result.getValue();
				return context$1$0.abrupt("return", context.raise(arg));

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"babel-runtime/regenerator":26}],346:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = TryStatement;
var marked0$0 = [executeBlock, TryStatement].map(_regeneratorRuntime.mark);

var _utilsContracts = require("../utils/contracts");

var _utilsAsync = require("../utils/async");

function executeBlock(context, body, swallow) {
	var result;
	return _regeneratorRuntime.wrap(function executeBlock$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				result = undefined;
				context$1$0.next = 3;
				return (0, _utilsAsync.each)(body, _regeneratorRuntime.mark(function callee$1$0(node, i, all, abort) {
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								if (!swallow) {
									context$2$0.next = 12;
									break;
								}

								context$2$0.prev = 1;
								context$2$0.next = 4;
								return context.create(node).execute();

							case 4:
								result = context$2$0.sent;
								context$2$0.next = 10;
								break;

							case 7:
								context$2$0.prev = 7;
								context$2$0.t0 = context$2$0["catch"](1);

								result = context.raise(context$2$0.t0);

							case 10:
								context$2$0.next = 15;
								break;

							case 12:
								context$2$0.next = 14;
								return context.create(node).execute();

							case 14:
								result = context$2$0.sent;

							case 15:

								if (result.canBreak()) {
									abort();
								}

							case 16:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this, [[1, 7]]);
				}));

			case 3:
				return context$1$0.abrupt("return", result);

			case 4:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function TryStatement(context) {
	var result, finalizerResult, errVar, scope;
	return _regeneratorRuntime.wrap(function TryStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return executeBlock(context, context.node.block.body, true);

			case 2:
				result = context$1$0.sent;
				finalizerResult = undefined;

				if (!(result && result.raised)) {
					context$1$0.next = 14;
					break;
				}

				if (!context.node.handler) {
					context$1$0.next = 14;
					break;
				}

				errVar = context.node.handler.param.name;

				(0, _utilsContracts.assertIsValidIdentifier)(errVar, context.env.isStrict());

				scope = context.env.createScope();

				context.env.createVariable(errVar);
				context.env.setValue(errVar, result.result);

				context$1$0.next = 13;
				return scope.use(_regeneratorRuntime.mark(function callee$1$0() {
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return executeBlock(context, context.node.handler.body.body, true);

							case 2:
								return context$2$0.abrupt("return", context$2$0.sent);

							case 3:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				}));

			case 13:
				result = context$1$0.sent;

			case 14:
				if (context.node.finalizer) {
					context$1$0.next = 16;
					break;
				}

				return context$1$0.abrupt("return", result);

			case 16:
				if (!context.node.finalizer) {
					context$1$0.next = 22;
					break;
				}

				context$1$0.next = 19;
				return executeBlock(context, context.node.finalizer.body);

			case 19:
				finalizerResult = context$1$0.sent;

				if (!(finalizerResult && finalizerResult.canBreak())) {
					context$1$0.next = 22;
					break;
				}

				return context$1$0.abrupt("return", finalizerResult);

			case 22:
				return context$1$0.abrupt("return", result);

			case 23:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

module.exports = exports["default"];

// let shouldRaise = false;
// let shouldReturn = false;

// let shouldThrow = result && result.raised;

// if there is no catch OR if an error is raised within the catch we need to pass that on
// if (result && result.raised) {
// 	shouldRaise = true;
// 	// yield result;
// }

// shouldReturn = true;

// if (shouldRaise) {
// 	try {
// 		throw result.result;
// 	} catch (err) {
// 		throw err;
// 	} finally {
// 		if (shouldReturn) {
// 			return finalizerResult;
// 		}
// 	}
// }

},{"../utils/async":310,"../utils/contracts":311,"babel-runtime/regenerator":26}],347:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = UnaryExpression;
var marked0$0 = [UnaryExpression].map(_regeneratorRuntime.mark);

var _envReference = require("../env/reference");

var _envPropertyReference = require("../env/property-reference");

var _utilsNative = require("../utils/native");

function UnaryExpression(context) {
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
				context$1$0.next = context$1$0.t0 === "typeof" ? 8 : context$1$0.t0 === "-" ? 12 : context$1$0.t0 === "+" ? 19 : context$1$0.t0 === "!" ? 26 : context$1$0.t0 === "~" ? 29 : context$1$0.t0 === "delete" ? 36 : context$1$0.t0 === "void" ? 49 : 51;
				break;

			case 8:
				type = undefined;

				if (result instanceof _envReference.Reference && result.isUnresolved()) {
					type = "undefined";
				} else {
					value = result.getValue();
					type = value ? value.type : "undefined";
				}

				newValue = objectFactory.createPrimitive(type);
				return context$1$0.abrupt("break", 52);

			case 12:
				value = result.getValue();
				context$1$0.t1 = objectFactory;
				context$1$0.next = 16;
				return (0, _utilsNative.toNumber)(value);

			case 16:
				context$1$0.t2 = -context$1$0.sent;
				newValue = context$1$0.t1.createPrimitive.call(context$1$0.t1, context$1$0.t2);
				return context$1$0.abrupt("break", 52);

			case 19:
				value = result.getValue();
				context$1$0.t3 = objectFactory;
				context$1$0.next = 23;
				return (0, _utilsNative.toNumber)(value);

			case 23:
				context$1$0.t4 = +context$1$0.sent;
				newValue = context$1$0.t3.createPrimitive.call(context$1$0.t3, context$1$0.t4);
				return context$1$0.abrupt("break", 52);

			case 26:
				value = result.getValue();
				newValue = objectFactory.createPrimitive(!(0, _utilsNative.toBoolean)(value));
				return context$1$0.abrupt("break", 52);

			case 29:
				value = result.getValue();
				context$1$0.t5 = objectFactory;
				context$1$0.next = 33;
				return (0, _utilsNative.toInt32)(value);

			case 33:
				context$1$0.t6 = ~context$1$0.sent;
				newValue = context$1$0.t5.createPrimitive.call(context$1$0.t5, context$1$0.t6);
				return context$1$0.abrupt("break", 52);

			case 36:
				deleted = true;

				if (!(result && result instanceof _envReference.Reference)) {
					context$1$0.next = 45;
					break;
				}

				resolved = !result.isUnresolved();

				if (!context.env.isStrict()) {
					context$1$0.next = 42;
					break;
				}

				if (!(!resolved || !(result instanceof _envPropertyReference.PropertyReference) || result.unqualified)) {
					context$1$0.next = 42;
					break;
				}

				return context$1$0.abrupt("return", context.raise(SyntaxError("Delete of an unqualified identifier in strict mode.")));

			case 42:

				if (resolved) {
					deleted = result["delete"]();
				}
				context$1$0.next = 47;
				break;

			case 45:
				if (!context.node.argument.object) {
					context$1$0.next = 47;
					break;
				}

				return context$1$0.abrupt("return", context.raise(ReferenceError(context.node.argument.object.name + " is not defined")));

			case 47:

				newValue = objectFactory.createPrimitive(deleted);
				return context$1$0.abrupt("break", 52);

			case 49:
				newValue = objectFactory.createPrimitive(undefined);
				return context$1$0.abrupt("break", 52);

			case 51:
				return context$1$0.abrupt("return", context.raise(SyntaxError("Unknown unary operator: " + context.node.operator)));

			case 52:
				return context$1$0.abrupt("return", context.result(newValue));

			case 53:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../env/property-reference":121,"../env/reference":122,"../utils/native":313,"babel-runtime/regenerator":26}],348:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = UpdateExpression;
var marked0$0 = [UpdateExpression].map(_regeneratorRuntime.mark);

var _utilsNative = require("../utils/native");

var _utilsContracts = require("../utils/contracts");

function UpdateExpression(context) {
	var objectFactory, ref, originalValue, newValue, newWrappedValue, returnValue;
	return _regeneratorRuntime.wrap(function UpdateExpression$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				objectFactory = context.env.objectFactory;
				context$1$0.next = 3;
				return context.create(context.node.argument).execute();

			case 3:
				ref = context$1$0.sent.result;

				(0, _utilsContracts.assertIsValidAssignment)(ref, context.env.isStrict());

				context$1$0.next = 7;
				return (0, _utilsNative.toNumber)(ref.getValue());

			case 7:
				originalValue = context$1$0.sent;
				newValue = originalValue;

				if (context.node.operator === "++") {
					newValue++;
				} else {
					newValue--;
				}

				newWrappedValue = objectFactory.createPrimitive(newValue);

				originalValue = objectFactory.createPrimitive(originalValue);

				returnValue = context.node.prefix ? newWrappedValue : originalValue;

				ref.setValue(newWrappedValue);
				return context$1$0.abrupt("return", context.result(returnValue));

			case 15:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/contracts":311,"../utils/native":313,"babel-runtime/regenerator":26}],349:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = VariableDeclaration;
var marked0$0 = [VariableDeclaration].map(_regeneratorRuntime.mark);

function VariableDeclaration(context) {
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
	}, marked0$0[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

module.exports = exports["default"];

},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/regenerator":26}],350:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = VariableDeclarator;
var marked0$0 = [VariableDeclarator].map(_regeneratorRuntime.mark);

function VariableDeclarator(context) {
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
					context.env.setValue(name, value.getValue());
				}

				return context$1$0.abrupt("return", context.result(context.env.getReference(name)));

			case 8:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"babel-runtime/regenerator":26}],351:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = WithStatement;
var marked0$0 = [WithStatement].map(_regeneratorRuntime.mark);

var _utilsContracts = require("../utils/contracts");

function WithStatement(context) {
	var obj, scope;
	return _regeneratorRuntime.wrap(function WithStatement$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!context.env.isStrict()) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt("return", context.raise(SyntaxError("Strict mode code may not include a with statement")));

			case 2:
				context$1$0.next = 4;
				return context.create(context.node.object).execute();

			case 4:
				obj = context$1$0.sent.result.getValue();

				if (!(0, _utilsContracts.isNullOrUndefined)(obj)) {
					context$1$0.next = 7;
					break;
				}

				return context$1$0.abrupt("return", context.raise(TypeError(obj.className + " has no properties")));

			case 7:
				scope = context.env.createObjectScope(obj, context.env.getThisBinding());

				scope.init(context.node.body);

				context$1$0.next = 11;
				return scope.use(_regeneratorRuntime.mark(function callee$1$0() {
					return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return context.create(context.node.body).execute();

							case 2:
								return context$2$0.abrupt("return", context$2$0.sent);

							case 3:
							case "end":
								return context$2$0.stop();
						}
					}, callee$1$0, this);
				}));

			case 11:
				return context$1$0.abrupt("return", context$1$0.sent);

			case 12:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"../utils/contracts":311,"babel-runtime/regenerator":26}],352:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createEnvironment = createEnvironment;
exports.create = create;

var _srcEnv = require("./src/env");

var _src = require("./src");

var version = "1.0.0";

exports.version = version;
/**
	* Creates an environment instance.
	* @param {Object} [options] The options to use with the environment.
	* @returns {Object} The environment instance.
	*/

function createEnvironment(options) {
	return new _srcEnv.Environment(options);
}

/**
	* Creates a new SandBoxr instance.
	* @param {AST} ast - The abstract syntax tree to execute.
	* @param {Object} [options] The options to use with the sandbox.
	* @returns {SandBoxr} A new sandbox.
	*/

function create(ast, options) {
	return new _src.Sandbox(ast, options);
}

},{"./src":285,"./src/env":119}]},{},[352])(352)
});