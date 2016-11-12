import Rebix from 'react-rebix';
import UserStore from '../stores/UserStore';

export default Rebix.createActions({

    /**
     * 异步 Action
     * 一定要返回一个Promise对象
     */
    getUserInfo: function (params) {

        //Action 中开源访问Store中的数据,但是只能调用get方法
        var userInfo = UserStore.getUserInfo(123);

        return new Promise(function (resolve) {
            setTimeout(function () {
                //store层使用action.promise字段接受返回值
                resolve({
                    time: new Date().getTime(),
                    userInfo: userInfo,
                    params: params
                });
            }, 1000)
        })
    },


    /**
     * 普通 Action
     */
    getUserList: function (params) {
        //store层使用action.payload字段接受返回值
        return [1, 2, 3, params];
    },


    /**
     * 空Action, 不需要具体的实现
     * 具体操作在Store中完成.
     */
    beginEditUserInfo: null,

    /**
     * 空Action, 不需要具体的实现
     * 具体操作在Store中完成.
     */
    endEditUserInfo: null

});