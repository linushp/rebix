import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from './middleware/promiseMiddleware';
import objectForEach from './utils/objectForEach';

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware
)(createStore);


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
        var reducer = getCombineReducers(this.config);

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