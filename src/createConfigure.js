import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from './middleware/promiseMiddleware';
import {isFunction} from './utils/functions'
import objectForEach from './utils/objectForEach';
import warning from './utils/warning';

const getCombineReducers = function (config) {
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
    return combineReducers(reducerMap);
};


/**
 * /Reubibi.createConfigure 配置后UserStore实例中能够获取自己的配置信息
 * @param config
 */
function setStoreGroupName(config) {
    var storesConfig = config.stores;//Reubibi.createConfigure
    if (storesConfig) {
        //UserStore只是一个示例
        objectForEach(storesConfig, function (key, UserStore) {
            UserStore['$$StoreGroupName'] = key;
        });
    }
}


function replacePromiseMiddleware(middlewareArray){

    var middlewareArray1 = [];
    var isHasPromiseMiddleware = false;
    for (var i = 0; i < middlewareArray.length; i++) {
        var m = middlewareArray[i];
        if (m === 'promiseMiddleware') {
            middlewareArray1.push(promiseMiddleware);
            isHasPromiseMiddleware = true;
        } else if (isFunction(m)) {
            middlewareArray1.push(m);
        } else {
            throw new Error(`${m} is not a middleware`);
        }
    }

    if (!isHasPromiseMiddleware) {
        warning(`Must has a promiseMiddleware,please check createConfigure`);
    }

    return middlewareArray1;
}


function toCreateStoreWithMiddleware(middlewareArray) {
    var func = null;
    if (middlewareArray && middlewareArray.length > 0) {
        middlewareArray = replacePromiseMiddleware(middlewareArray);
        func = applyMiddleware.apply({},middlewareArray);
    } else {
        func = applyMiddleware(promiseMiddleware);
    }
    return func(createStore);
}


class ReubibiConfig {

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
    constructor(config) {
        setStoreGroupName(config);
        this.config = config;
        var initialState = config.initialState;
        var middleware = config.middleware;
        var reducer = getCombineReducers(config);
        var createStoreWithMiddleware = toCreateStoreWithMiddleware(middleware);
        if(initialState){
            //唯一的一个store
            this.store = createStoreWithMiddleware(reducer, initialState);
        }else {
            //唯一的一个store
            this.store = createStoreWithMiddleware(reducer);
        }
    }

    getStore() {
        return this.store;
    }

    getActions() {
        return this.config.actions;
    }

}


export default function createConfigure(config) {
    return new ReubibiConfig(config);
}