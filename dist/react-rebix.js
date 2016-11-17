(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactRebix"] = factory(require("react"));
	else
		root["ReactRebix"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createActions = __webpack_require__(17);

	var _createActions2 = _interopRequireDefault(_createActions);

	var _createComponent = __webpack_require__(18);

	var _createComponent2 = _interopRequireDefault(_createComponent);

	var _createStore = __webpack_require__(20);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _createConfigure = __webpack_require__(19);

	var _createConfigure2 = _interopRequireDefault(_createConfigure);

	var _Provider = __webpack_require__(14);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _PureRenderComponent = __webpack_require__(15);

	var _PureRenderComponent2 = _interopRequireDefault(_PureRenderComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Reubibi = {
	    createActions: _createActions2["default"],
	    createComponent: _createComponent2["default"],
	    createStore: _createStore2["default"],
	    createConfigure: _createConfigure2["default"],
	    Provider: _Provider2["default"],
	    PureRenderComponent: _PureRenderComponent2["default"]
	};

	module.exports = Reubibi;
	//export default Reubibi;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = objectForEach;
	function objectForEach(obj, handler) {
	    for (var key in obj) {
	        if (key && obj.hasOwnProperty(key)) {
	            var value = obj[key];
	            handler('' + key, value);
	        }
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = isPromise;
	function isPromise(p) {
	    return p && typeof p.then === 'function' && typeof p["catch"] === 'function';
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	    /* eslint-disable no-console */
	    if (typeof console !== 'undefined' && typeof console.error === 'function') {
	        console.error(message);
	    }
	    /* eslint-enable no-console */
	    try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	        /* eslint-disable no-empty */
	    } catch (e) {}
	    /* eslint-enable no-empty */
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(24),
	    getPrototype = __webpack_require__(26),
	    isObjectLike = __webpack_require__(31);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(12);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(34);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(33);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(32);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(11);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(13);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.isType = isType;
	exports.isFunction = isFunction;
	exports.toArray = toArray;
	exports.getValueByKey = getValueByKey;
	exports.getValueInPath = getValueInPath;
	var _undefined = undefined;

	function isType(x, type) {
	    return Object.prototype.toString.call(x) === '[object ' + type + ']';
	}

	function isFunction(x) {
	    return isType(x, 'Function');
	}

	function toArray(aaa) {
	    if (!aaa) {
	        return [];
	    }

	    var argsArray = Array.prototype.slice.call(aaa);
	    var args = [].concat(argsArray);
	    return args;
	}

	function getValueByKey(obj, key) {
	    if (!obj) {
	        return null;
	    }
	    var value = _undefined;
	    if (isFunction(obj.get)) {
	        value = obj.get(key);
	    }
	    if (value === _undefined) {
	        value = obj[key];
	    }

	    return value;
	}

	/**
	 * a = {
	 *   b:{
	 *      c:{
	 *          d:1
	 *      }
	 *   }
	 * }
	 *
	 * str : b.c.d
	 * @param obj
	 * @param str
	 * @demo :
	 *  var d = getObjectValue(a,'b.c.d');
	 */
	function getValueInPath(obj, str) {
	    if (!obj) {
	        return null;
	    }
	    try {
	        var propArr = str.split(".");
	        var tmpObj = obj;
	        var i = 0;
	        while (i < propArr.length) {
	            if (!tmpObj) {
	                return null;
	            }
	            var prop = propArr[i];
	            tmpObj = getValueByKey(tmpObj, prop);
	            i++;
	        }
	        return tmpObj;
	    } catch (e) {
	        console.log('[ERROR]', e);
	    }

	    return null;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	    if (objA === objB) {
	        return true;
	    }

	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);

	    if (keysA.length !== keysB.length) {
	        return false;
	    }

	    // Test for A's keys different from B.
	    var hasOwn = Object.prototype.hasOwnProperty;
	    for (var i = 0; i < keysA.length; i++) {
	        if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	            return false;
	        }
	    }

	    return true;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	exports["default"] = _react.PropTypes.shape({
	    subscribe: _react.PropTypes.func.isRequired,
	    dispatch: _react.PropTypes.func.isRequired,
	    getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(30);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(5);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(35);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(2);

	var _storeShape = __webpack_require__(9);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Provider = function (_Component) {
	    _inherits(Provider, _Component);

	    Provider.prototype.getChildContext = function getChildContext() {
	        return { store: this.store };
	    };

	    function Provider(props, context) {
	        _classCallCheck(this, Provider);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.store = props.store;
	        return _this;
	    }

	    Provider.prototype.render = function render() {
	        var children = this.props.children;

	        return _react.Children.only(children);
	    };

	    return Provider;
	}(_react.Component);

	exports["default"] = Provider;


	Provider.propTypes = {
	    store: _storeShape2["default"].isRequired,
	    children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	    store: _storeShape2["default"].isRequired
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;
	exports.shallowCompare = shallowCompare;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _shallowEqual = __webpack_require__(8);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function shallowCompare(component, nextProps, nextState) {
	    return !(0, _shallowEqual2["default"])(component.props, nextProps) || !(0, _shallowEqual2["default"])(component.state, nextState);
	}

	/**
	 * React组件基础类, 浅层检查props和state是否更改, 未更改则不重新渲染
	 * 注意: 在不使用immutable.js作为数据源格式时, 请确保浅层检查不会阻止渲染!
	 */

	var PureRenderComponent = function (_React$Component) {
	    _inherits(PureRenderComponent, _React$Component);

	    function PureRenderComponent() {
	        _classCallCheck(this, PureRenderComponent);

	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }

	    PureRenderComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        var isOk = shallowCompare(this, nextProps, nextState);
	        //console.log('shallowCompare',isOk)
	        return isOk;
	    };

	    return PureRenderComponent;
	}(_react2["default"].Component);

	exports["default"] = PureRenderComponent;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = connect;

	var _react = __webpack_require__(2);

	var _storeShape = __webpack_require__(9);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(8);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(23);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(4);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(5);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(22);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	    return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	    return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	    return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	    try {
	        return fn.apply(ctx);
	    } catch (e) {
	        errorObject.value = e;
	        return errorObject;
	    }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	    var shouldSubscribe = Boolean(mapStateToProps);
	    var mapState = mapStateToProps || defaultMapStateToProps;

	    var mapDispatch = void 0;
	    if (typeof mapDispatchToProps === 'function') {
	        mapDispatch = mapDispatchToProps;
	    } else if (!mapDispatchToProps) {
	        mapDispatch = defaultMapDispatchToProps;
	    } else {
	        mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	    }

	    var finalMergeProps = mergeProps || defaultMergeProps;
	    var _options$pure = options.pure,
	        pure = _options$pure === undefined ? true : _options$pure,
	        _options$withRef = options.withRef,
	        withRef = _options$withRef === undefined ? false : _options$withRef;

	    var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	    // Helps track hot reloading.
	    var version = nextVersion++;

	    return function wrapWithConnect(WrappedComponent) {
	        var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	        function checkStateShape(props, methodName) {
	            if (!(0, _isPlainObject2["default"])(props)) {
	                (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	            }
	        }

	        function computeMergedProps(stateProps, dispatchProps, parentProps) {
	            var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	            if (true) {
	                checkStateShape(mergedProps, 'mergeProps');
	            }
	            return mergedProps;
	        }

	        var Connect = function (_Component) {
	            _inherits(Connect, _Component);

	            Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	                return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	            };

	            function Connect(props, context) {
	                _classCallCheck(this, Connect);

	                var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	                _this.version = version;
	                _this.store = props.store || context.store;

	                if (!_this.store) {
	                    var str = 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".');
	                    console.log(str);
	                }

	                var storeState = _this.store.getState();
	                _this.state = { storeState: storeState };
	                _this.clearCache();
	                return _this;
	            }

	            Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	                if (!this.finalMapStateToProps) {
	                    return this.configureFinalMapState(store, props);
	                }

	                var state = store.getState();
	                var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	                if (true) {
	                    checkStateShape(stateProps, 'mapStateToProps');
	                }
	                return stateProps;
	            };

	            Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	                var mappedState = mapState(store.getState(), props);
	                var isFactory = typeof mappedState === 'function';

	                this.finalMapStateToProps = isFactory ? mappedState : mapState;
	                this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	                if (isFactory) {
	                    return this.computeStateProps(store, props);
	                }

	                if (true) {
	                    checkStateShape(mappedState, 'mapStateToProps');
	                }
	                return mappedState;
	            };

	            Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	                if (!this.finalMapDispatchToProps) {
	                    return this.configureFinalMapDispatch(store, props);
	                }

	                var dispatch = store.dispatch;

	                var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	                if (true) {
	                    checkStateShape(dispatchProps, 'mapDispatchToProps');
	                }
	                return dispatchProps;
	            };

	            Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	                var mappedDispatch = mapDispatch(store.dispatch, props);
	                var isFactory = typeof mappedDispatch === 'function';

	                this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	                this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	                if (isFactory) {
	                    return this.computeDispatchProps(store, props);
	                }

	                if (true) {
	                    checkStateShape(mappedDispatch, 'mapDispatchToProps');
	                }
	                return mappedDispatch;
	            };

	            Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	                var nextStateProps = this.computeStateProps(this.store, this.props);
	                if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	                    return false;
	                }

	                this.stateProps = nextStateProps;
	                return true;
	            };

	            Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	                var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	                if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	                    return false;
	                }

	                this.dispatchProps = nextDispatchProps;
	                return true;
	            };

	            Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	                var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	                if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	                    return false;
	                }

	                this.mergedProps = nextMergedProps;
	                return true;
	            };

	            Connect.prototype.isSubscribed = function isSubscribed() {
	                return typeof this.unsubscribe === 'function';
	            };

	            Connect.prototype.trySubscribe = function trySubscribe() {
	                if (shouldSubscribe && !this.unsubscribe) {
	                    this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	                    this.handleChange();
	                }
	            };

	            Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	                if (this.unsubscribe) {
	                    this.unsubscribe();
	                    this.unsubscribe = null;
	                }
	            };

	            Connect.prototype.componentDidMount = function componentDidMount() {
	                this.trySubscribe();
	            };

	            Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	                if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	                    this.haveOwnPropsChanged = true;
	                }
	            };

	            Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	                this.tryUnsubscribe();
	                this.clearCache();
	            };

	            Connect.prototype.clearCache = function clearCache() {
	                this.dispatchProps = null;
	                this.stateProps = null;
	                this.mergedProps = null;
	                this.haveOwnPropsChanged = true;
	                this.hasStoreStateChanged = true;
	                this.haveStatePropsBeenPrecalculated = false;
	                this.statePropsPrecalculationError = null;
	                this.renderedElement = null;
	                this.finalMapDispatchToProps = null;
	                this.finalMapStateToProps = null;
	            };

	            Connect.prototype.handleChange = function handleChange() {
	                if (!this.unsubscribe) {
	                    return;
	                }

	                var storeState = this.store.getState();
	                var prevStoreState = this.state.storeState;
	                if (pure && prevStoreState === storeState) {
	                    return;
	                }

	                if (pure && !this.doStatePropsDependOnOwnProps) {
	                    var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	                    if (!haveStatePropsChanged) {
	                        return;
	                    }
	                    if (haveStatePropsChanged === errorObject) {
	                        this.statePropsPrecalculationError = errorObject.value;
	                    }
	                    this.haveStatePropsBeenPrecalculated = true;
	                }

	                this.hasStoreStateChanged = true;
	                this.setState({ storeState: storeState });
	            };

	            Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	                return this.refs.wrappedInstance;
	            };

	            Connect.prototype.render = function render() {
	                var haveOwnPropsChanged = this.haveOwnPropsChanged,
	                    hasStoreStateChanged = this.hasStoreStateChanged,
	                    haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
	                    statePropsPrecalculationError = this.statePropsPrecalculationError,
	                    renderedElement = this.renderedElement;


	                this.haveOwnPropsChanged = false;
	                this.hasStoreStateChanged = false;
	                this.haveStatePropsBeenPrecalculated = false;
	                this.statePropsPrecalculationError = null;

	                if (statePropsPrecalculationError) {
	                    throw statePropsPrecalculationError;
	                }

	                var shouldUpdateStateProps = true;
	                var shouldUpdateDispatchProps = true;
	                if (pure && renderedElement) {
	                    shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	                    shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	                }

	                var haveStatePropsChanged = false;
	                var haveDispatchPropsChanged = false;
	                if (haveStatePropsBeenPrecalculated) {
	                    haveStatePropsChanged = true;
	                } else if (shouldUpdateStateProps) {
	                    haveStatePropsChanged = this.updateStatePropsIfNeeded();
	                }
	                if (shouldUpdateDispatchProps) {
	                    haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	                }

	                var haveMergedPropsChanged = true;
	                if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	                    haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	                } else {
	                    haveMergedPropsChanged = false;
	                }

	                if (!haveMergedPropsChanged && renderedElement) {
	                    return renderedElement;
	                }

	                if (withRef) {
	                    this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	                        ref: 'wrappedInstance'
	                    }));
	                } else {
	                    this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	                }

	                return this.renderedElement;
	            };

	            return Connect;
	        }(_react.Component);

	        Connect.displayName = connectDisplayName;
	        Connect.WrappedComponent = WrappedComponent;
	        Connect.contextTypes = {
	            store: _storeShape2["default"]
	        };
	        Connect.propTypes = {
	            store: _storeShape2["default"]
	        };

	        if (true) {
	            Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	                if (this.version === version) {
	                    return;
	                }

	                // We are hot reloading!
	                this.version = version;
	                this.trySubscribe();
	                this.clearCache();
	            };
	        }

	        return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	    };
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = createActions;

	var _objectForEach = __webpack_require__(1);

	var _objectForEach2 = _interopRequireDefault(_objectForEach);

	var _isPromise = __webpack_require__(3);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * action函数的一个空实现
	 */
	function nullActionImpl() {
	    return null;
	}

	function createActionImplWrapper(actionImpl, key, actionsConfig) {
	    //ActionImplWrapper
	    //这是真正被调用的action函数
	    return function (group, args) {
	        //var args = [].concat(arguments);
	        var actionResult = actionImpl.apply(actionsConfig, args);

	        var promise = null;
	        var payload = null;
	        if ((0, _isPromise2["default"])(actionResult)) {
	            promise = actionResult;
	        } else {
	            payload = actionResult;
	        }

	        return {
	            type: group + "_" + key,
	            group: group, //例如:user或post,是在createConfigure中配置的..这个玩意只有完成createConfigure之后才能知道,所以需要从参数中传过来
	            name: key, //例如:getUserList
	            status: "unknown", //pending,error,success
	            args: args,
	            promise: promise,
	            payload: payload
	        };
	    };
	}

	function createActions(actionsConfig) {
	    var actions = {};

	    (0, _objectForEach2["default"])(actionsConfig, function (key, actionImpl) {

	        //空Action
	        if (!actionImpl) {
	            actionImpl = nullActionImpl;
	        }

	        //这是真正被调用的action函数
	        actions[key] = createActionImplWrapper(actionImpl, key, actionsConfig);
	    });

	    return actions;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = createComponent;

	var _redux = __webpack_require__(6);

	var _connect = __webpack_require__(16);

	var _connect2 = _interopRequireDefault(_connect);

	var _functions = __webpack_require__(7);

	var _objectForEach = __webpack_require__(1);

	var _objectForEach2 = _interopRequireDefault(_objectForEach);

	var _warning = __webpack_require__(4);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPromise = __webpack_require__(3);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function createConfiguredActionWrapper(actionWrapper, path) {

	    //actionGroup 其实就是在createConfigure中定义的action的key
	    //例如在example中将得到config/reubibiConfigure中配置的 'user'或'post'
	    var actionGroup = path.split('.')[0];

	    //这才是真正调用的函数
	    return function () {
	        var args = (0, _functions.toArray)(arguments);
	        //@see createAction ActionImplWrapper
	        var action = actionWrapper(actionGroup, args);
	        //{group,name,status,args,payload}
	        return action;
	    };
	}

	function getActionsFromConfig(reubibiConfigure, componentConfig) {
	    var actionsResult = {};
	    if (!componentConfig || !reubibiConfigure) {
	        return null;
	    }

	    var actionsConfig = componentConfig.actions || {};
	    var allActions = reubibiConfigure.getActions();

	    (0, _objectForEach2["default"])(actionsConfig, function (key, path) {
	        var actionWrapper = (0, _functions.getValueInPath)(allActions, path || '');
	        if (actionWrapper === undefined) {
	            (0, _warning2["default"])('[ERROR]cannot get Object by key : ' + key + ' and path: ' + path + ' ');
	        } else {
	            actionsResult[key] = createConfiguredActionWrapper(actionWrapper, path);
	        }
	    });

	    return actionsResult;
	}

	function createPromiseActionFunc(actionFunc) {
	    return function () {
	        var args = (0, _functions.toArray)(arguments);
	        var actionResult = actionFunc.apply({}, args);
	        if (actionResult) {
	            if ((0, _isPromise2["default"])(actionResult.promise)) {
	                return actionResult.promise;
	            }
	            return actionResult.payload;
	        }
	        return null;
	    };
	}

	function bindActionPromise(actionFunctions) {
	    var promiseActions = {};
	    (0, _objectForEach2["default"])(actionFunctions, function (key, actionFunc) {
	        promiseActions[key] = createPromiseActionFunc(actionFunc);
	    });
	    return promiseActions;
	}

	function getStateByConfig(state, componentConfig) {
	    var result = {};
	    if (!componentConfig || !state) {
	        return null;
	    }

	    var propsConfig = componentConfig.props || {};

	    (0, _objectForEach2["default"])(propsConfig, function (key, path) {
	        result[key] = (0, _functions.getValueInPath)(state, path || '');
	        if (result[key] === undefined) {
	            (0, _warning2["default"])('[ERROR]cannot get Object by key : ' + key + ' and path: ' + path + ' ');
	        }
	    });

	    return result;
	}

	/**
	 *
	 * @param reubibiConfigure 是一个Reubibi.createConfigure对象.
	 * @param BaseComponentImpl React组件对象
	 * @param componentConfig  组件的配置 形如:
	 *
	 *  componentConfig = {
	 *
	 *   actions: {
	 *      getUserList: 'user.getUserList'
	 *   },
	 *
	 *   props: {
	 *       userList: 'user.userList'
	 *   }
	 *
	 *  }
	 */
	function createComponent(reubibiConfigure, BaseComponentImpl, componentConfig) {

	    function mapStateToProps(state) {
	        var props = getStateByConfig(state, componentConfig);
	        return props;
	    }

	    function mapDispatchToProps(dispatch) {
	        //每次数据变化时,不会执行此处代码
	        var actions = getActionsFromConfig(reubibiConfigure, componentConfig); //这里的action执行后返回{group,name,status,args,payload}
	        var actionDefs = (0, _redux.bindActionCreators)(actions, dispatch); //这里的action执行后返回
	        var actionPromise = bindActionPromise(actionDefs);
	        return { actions: actionPromise };
	    }

	    return (0, _connect2["default"])(mapStateToProps, mapDispatchToProps)(BaseComponentImpl);
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = createConfigure;

	var _redux = __webpack_require__(6);

	var _promiseMiddleware = __webpack_require__(21);

	var _promiseMiddleware2 = _interopRequireDefault(_promiseMiddleware);

	var _objectForEach = __webpack_require__(1);

	var _objectForEach2 = _interopRequireDefault(_objectForEach);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_promiseMiddleware2["default"])(_redux.createStore);

	var getCombineReducers = function getCombineReducers(config) {
	    /**
	     * {
	     *      $$state:{},
	     *      $$reducer:     function(){},
	     *      getUserList:   function(){},
	     *      getUserInfo(): function(){},
	     *      moreGetter....
	     * }
	     */
	    var storesMap = config.stores || {};
	    var reducerMap = {};
	    for (var i in storesMap) {
	        if (storesMap.hasOwnProperty(i)) {
	            var v = storesMap[i];
	            //这是在createStore方法中定义的,就一个函数.
	            var reducer = v['$$reducer']; //是一个function
	            reducerMap[i] = reducer;
	        }
	    }

	    /**
	     * 在这里定义的数据结构最终保证了store中的数据结构
	     * {
	     *      user:function(){},
	     *      post:function(){}
	     *  }
	     */
	    return (0, _redux.combineReducers)(reducerMap);
	};

	/**
	 * /Reubibi.createConfigure 配置后UserStore实例中能够获取自己的配置信息
	 * @param config
	 */
	function setStoreGroupName(config) {
	    var storesConfig = config.stores; //Reubibi.createConfigure
	    if (storesConfig) {
	        //UserStore只是一个示例
	        (0, _objectForEach2["default"])(storesConfig, function (key, UserStore) {
	            UserStore['$$StoreGroupName'] = key;
	        });
	    }
	}

	var ReubibiConfig = function () {

	    /**
	     *
	     * actions: {
	     *    user: userActions,
	     *    post: postActions
	     * },
	     * stores: {
	     *    user: UserStore,
	     *    post: PostStore
	     *  }
	     *
	     */
	    function ReubibiConfig(config) {
	        _classCallCheck(this, ReubibiConfig);

	        setStoreGroupName(config);
	        this.config = config;
	        var initialState = config.initialState;
	        var reducer = getCombineReducers(this.config);

	        if (initialState) {
	            //唯一的一个store
	            this.store = createStoreWithMiddleware(reducer, initialState);
	        } else {
	            //唯一的一个store
	            this.store = createStoreWithMiddleware(reducer);
	        }
	    }

	    ReubibiConfig.prototype.getStore = function getStore() {
	        return this.store;
	    };

	    ReubibiConfig.prototype.getActions = function getActions() {
	        return this.config.actions;
	    };

	    return ReubibiConfig;
	}();

	function createConfigure(config) {
	    return new ReubibiConfig(config);
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = createStore;

	var _objectForEach = __webpack_require__(1);

	var _objectForEach2 = _interopRequireDefault(_objectForEach);

	var _warning = __webpack_require__(4);

	var _warning2 = _interopRequireDefault(_warning);

	var _functions = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function toFirstCharUpper(str) {
	    return str.replace(/(^|\s+)\w/g, function (s) {
	        return s.toUpperCase();
	    });
	}

	/**
	 * 一个Store对一个action事件只能有一个响应函数
	 * @param actionName
	 * @param actionGroup
	 * @param storeConfig
	 * @param storeGroupName
	 */
	function getReducer(actionName, actionGroup, storeConfig, storeGroupName) {
	    if (!actionName) {
	        return null;
	    }

	    //形如:onGetUserList
	    var reducerReceiveName = "on" + toFirstCharUpper(actionName);
	    if (actionGroup === storeGroupName) {
	        var reducer = storeConfig[reducerReceiveName];
	        if (reducer) {
	            return reducer;
	        }
	    }

	    //形如:post#onGetPostList
	    var reducerReceiveName2 = actionGroup + "#" + reducerReceiveName;
	    reducer = storeConfig[reducerReceiveName2];
	    if (reducer) {
	        return reducer;
	    }

	    return null;
	}

	/**
	 *
	 * @param state
	 * @param action 形如: {group,name,status,args,payload}
	 * @param storeConfig
	 * @param storeGroupName 形如:user,post
	 */
	function reduceAction(state, action, storeConfig, storeGroupName) {
	    var actionName = action.name;
	    var actionGroup = action.group;
	    var reducer = getReducer(actionName, actionGroup, storeConfig, storeGroupName);
	    if (reducer) {

	        var state0 = reducer(state, action);
	        if (state0) {
	            return state0;
	        } else {
	            //如果reducer没有正确返回,做一下兼容
	            (0, _warning2["default"])('[ERROR] error store config:' + actionGroup + '#' + actionName);
	        }
	    }
	    return state;
	}

	/**
	 * 创建一个真正执行的时候调用的Get函数
	 * @param getterDef 用户配置的以get开否的函数实现
	 * @param exportStore
	 * @returns {Function}
	 */
	function createGetterFunction(getterDef, exportStore) {
	    return function () {
	        var args0 = (0, _functions.toArray)(arguments);
	        //每次执行,都是获取最新的state
	        var state = exportStore['$$state'];
	        var args = [state].concat(args0);
	        return getterDef.apply({}, args);
	    };
	}

	/**
	 * 对于以get开头的配置,创建get函数
	 * @param exportStore
	 * @param storeConfig 形如: {onGetXXX,onGetYYY,getXXX,getYYY}
	 */
	function createGetter(exportStore, storeConfig) {
	    (0, _objectForEach2["default"])(storeConfig, function (key, handler) {
	        if (key.indexOf('get') === 0 && (0, _functions.isFunction)(handler)) {
	            exportStore[key] = createGetterFunction(handler, exportStore);
	        }
	    });
	}

	/**
	 * 以$$开头的都是框架内部的变量,禁止业务层访问.
	 */
	function createStore(storeConfig) {

	    var initialState = storeConfig.initialState || {};

	    //这才是真正对外暴露的Store对象
	    var exportStore = {};

	    //1.创建的reducer函数
	    var reducerFunc = function reducerFunc() {
	        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	        //storeGroupName真正的值是在Reubibi.createConfigure中被重新设置的.
	        var storeGroupName = exportStore['$$StoreGroupName'];
	        state = reduceAction(state, action, storeConfig, storeGroupName);
	        exportStore['$$state'] = state;
	        return state;
	    };

	    exportStore['$$reducer'] = reducerFunc;

	    //2.$$StoreGroupName的初始化
	    exportStore['$$StoreGroupName'] = null;

	    //3.创建Getter函数
	    createGetter(exportStore, storeConfig);

	    return exportStore;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = promiseMiddleware;

	var _isPromise = __webpack_require__(3);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function promiseMiddleware(_ref) {

	    var dispatch = _ref.dispatch;

	    return function (next) {
	        return function (action) {

	            if (!(0, _isPromise2["default"])(action.promise)) {
	                action.status = 'success';
	                return next(action);
	            }

	            var type = action.type,
	                group = action.group,
	                name = action.name,
	                status = action.status,
	                args = action.args,
	                payload = action.payload,
	                promise = action.promise;


	            var createAction = function createAction(status1, promise1, payload1) {
	                return {
	                    type: type,
	                    group: group,
	                    name: name,
	                    status: status1,
	                    args: args,
	                    promise: promise1,
	                    payload: payload1 //object or promise
	                };
	            };

	            promise = promise.then(function () {
	                var resolved = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	                var successAction = createAction('success', null, resolved);
	                return dispatch(successAction);
	            }, function () {
	                var rejected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	                var errorAction = createAction('error', null, rejected);
	                return dispatch(errorAction);
	            });

	            var pendingAction = createAction('pending', promise, null);
	            return next(pendingAction);
	        };
	    };
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {}
	            }
	        }
	    }

	    return targetComponent;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(6);

	function wrapActionCreators(actionCreators) {
	    return function (dispatch) {
	        return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	    };
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(10),
	    getRawTag = __webpack_require__(27),
	    objectToString = __webpack_require__(28);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()) || Function('return this')()))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(29);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(10);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(25);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(11);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(12);

	var _isPlainObject = __webpack_require__(5);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(13);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (true) {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(36);


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(37);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()) || Function('return this')(), __webpack_require__(38)(module)))

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;