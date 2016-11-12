import Rebix from 'react-rebix';


export default Rebix.createStore({

    initialState: {
        userList: [],
        postList: []
    },

    'onGetUserList': function (state, action) {
        console.log(action.status);
        state = Object.assign({}, state);
        var userList = action.payload;
        state.userList = userList;
        return state;
    },


    'onBeginEditUserInfo': function (state) {
        state = Object.assign({}, state);
        state.isEditing = true;
        return state;
    },


    'onEndEditUserInfo': function (state) {
        state = Object.assign({}, state);
        state.isEditing = false;
        return state;
    },


    /**
     * 通过CreateStore创建的on函数
     * View层根本调用不到.
     * 这样就保证了单项数据流
     */
    'post#onGetPostList': function (state, action) {
        console.log(action.status);
        if (action.status === 'success') {
            state = Object.assign({}, state);
            var postList = action.payload;
            state.postList = postList;
        }

        return state;
    },


    /**
     * Get函数,修改state不管用.state内部一般都是使用immutable对象,只有on函数的返回值才能对state进行修改.
     * View 层,可以直接调用Get函数获取Store中的数据,但是无法修改.
     * 在Get函数内部对state的任何修改,都不会生效.
     */
    'getUserInfo': function (state, a, b, c, d) {
        return {
            name: a
        };
    }


});

