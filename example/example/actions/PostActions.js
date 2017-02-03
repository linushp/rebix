import {createActions} from 'react-rebix';

export default createActions({

    /**
     * 异步 Action
     * 一定要返回一个Promise对象
     */
    getPostList: function (params) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve([new Date().getTime(), params]);
            }, 500)
        })
    }

});