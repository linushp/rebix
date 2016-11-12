import {bindActionCreators} from 'redux';
import connect from './component/connect';
import {getValueInPath,toArray} from './utils/functions';
import objectForEach from './utils/objectForEach';
import warning from './utils/warning';
import isPromise from './utils/isPromise';

function createConfiguredActionWrapper(actionWrapper, path) {

    //actionGroup 其实就是在createConfigure中定义的action的key
    //例如在example中将得到config/reubibiConfigure中配置的 'user'或'post'
    var actionGroup = path.split('.')[0];

    //这才是真正调用的函数
    return function () {
        var args = toArray(arguments);
        //@see createAction ActionImplWrapper
        var action = actionWrapper(actionGroup, args);
        //{group,name,status,args,payload}
        return action;
    }
}


function getActionsFromConfig(reubibiConfigure, componentConfig) {
    var actionsResult = {};
    if (!componentConfig || !reubibiConfigure) {
        return null;
    }

    var actionsConfig = componentConfig.actions || {};
    var allActions = reubibiConfigure.getActions();


    objectForEach(actionsConfig, function (key, path) {
        var actionWrapper = getValueInPath(allActions, path || '');
        if (actionWrapper === undefined) {
            warning(`[ERROR]cannot get Object by key : ${key} and path: ${path} `);
        } else {
            actionsResult[key] = createConfiguredActionWrapper(actionWrapper, path);
        }
    });

    return actionsResult;

}


function createPromiseActionFunc(actionFunc) {
    return function () {
        var args = toArray(arguments);
        var actionResult = actionFunc.apply({}, args);
        if(actionResult){
            if (isPromise(actionResult.promise)) {
                return actionResult.promise;
            }
            return actionResult.payload;
        }
        return null;
    }
}


function bindActionPromise(actionFunctions) {
    var promiseActions = {};
    objectForEach(actionFunctions, function (key, actionFunc) {
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

    objectForEach(propsConfig, function (key, path) {
        result[key] = getValueInPath(state, path || '');
        if (result[key] === undefined) {
            warning(`[ERROR]cannot get Object by key : ${key} and path: ${path} `);
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
export default function createComponent(reubibiConfigure, BaseComponentImpl, componentConfig) {


    function mapStateToProps(state) {
        var props = getStateByConfig(state, componentConfig);
        return props;
    }


    function mapDispatchToProps(dispatch) {
        //每次数据变化时,不会执行此处代码
        var actions = getActionsFromConfig(reubibiConfigure, componentConfig); //这里的action执行后返回{group,name,status,args,payload}
        var actionDefs = bindActionCreators(actions, dispatch);//这里的action执行后返回
        var actionPromise = bindActionPromise(actionDefs);
        return {actions: actionPromise};
    }

    return connect(mapStateToProps, mapDispatchToProps)(BaseComponentImpl);

}