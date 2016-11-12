'use strict';

exports.__esModule = true;
exports["default"] = createComponent;

var _redux = require('redux');

var _connect = require('./component/connect');

var _connect2 = _interopRequireDefault(_connect);

var _functions = require('./utils/functions');

var _objectForEach = require('./utils/objectForEach');

var _objectForEach2 = _interopRequireDefault(_objectForEach);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

var _isPromise = require('./utils/isPromise');

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