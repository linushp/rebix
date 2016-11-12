import objectForEach from './utils/objectForEach';
import warning from './utils/warning';
import {isFunction,toArray} from './utils/functions';


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
        }
        else {
            //如果reducer没有正确返回,做一下兼容
            warning(`[ERROR] error store config:${actionGroup}#${actionName}`);
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
        var args0 = toArray(arguments);
        //每次执行,都是获取最新的state
        var state = exportStore['$$state'];
        var args = [state].concat(args0);
        return getterDef.apply({}, args);
    }
}


/**
 * 对于以get开头的配置,创建get函数
 * @param exportStore
 * @param storeConfig 形如: {onGetXXX,onGetYYY,getXXX,getYYY}
 */
function createGetter(exportStore, storeConfig) {
    objectForEach(storeConfig, function (key, handler) {
        if (key.indexOf('get') === 0 && isFunction(handler)) {
            exportStore[key] = createGetterFunction(handler, exportStore);
        }
    });
}


/**
 * 以$$开头的都是框架内部的变量,禁止业务层访问.
 */
export default function createStore(storeConfig) {

    var initialState = storeConfig.initialState || {};

    //这才是真正对外暴露的Store对象
    var exportStore = {};

    //1.创建的reducer函数
    var reducerFunc = function (state = initialState, action = {}) {
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