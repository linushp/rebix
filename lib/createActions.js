'use strict';

exports.__esModule = true;
exports["default"] = createActions;

var _objectForEach = require('./utils/objectForEach');

var _objectForEach2 = _interopRequireDefault(_objectForEach);

var _isPromise = require('./utils/isPromise');

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