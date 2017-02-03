'use strict';

exports.__esModule = true;
exports["default"] = createConfigure;

var _redux = require('redux');

var _promiseMiddleware = require('./middleware/promiseMiddleware');

var _promiseMiddleware2 = _interopRequireDefault(_promiseMiddleware);

var _functions = require('./utils/functions');

var _objectForEach = require('./utils/objectForEach');

var _objectForEach2 = _interopRequireDefault(_objectForEach);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

function replacePromiseMiddleware(middlewareArray) {

    var middlewareArray1 = [];
    var isHasPromiseMiddleware = false;
    for (var i = 0; i < middlewareArray.length; i++) {
        var m = middlewareArray[i];
        if (m === 'promiseMiddleware') {
            middlewareArray1.push(_promiseMiddleware2["default"]);
            isHasPromiseMiddleware = true;
        } else if ((0, _functions.isFunction)(m)) {
            middlewareArray1.push(m);
        } else {
            throw new Error(m + ' is not a middleware');
        }
    }

    if (!isHasPromiseMiddleware) {
        (0, _warning2["default"])('Must has a promiseMiddleware,please check createConfigure');
    }

    return middlewareArray1;
}

function toCreateStoreWithMiddleware(middlewareArray) {
    var func = null;
    if (middlewareArray && middlewareArray.length > 0) {
        middlewareArray = replacePromiseMiddleware(middlewareArray);
        func = _redux.applyMiddleware.apply({}, middlewareArray);
    } else {
        func = (0, _redux.applyMiddleware)(_promiseMiddleware2["default"]);
    }
    return func(_redux.createStore);
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
        var middleware = config.middleware;
        var reducer = getCombineReducers(config);
        var createStoreWithMiddleware = toCreateStoreWithMiddleware(middleware);
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