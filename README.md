React Rebix
===========

React Data Flow Framework
Performant and flexible.

[![build status](https://img.shields.io/travis/reactjs/react-redux/master.svg?style=flat-square)](https://github.com/luanhaipeng/rebix) [![npm version](https://img.shields.io/npm/v/react-redux.svg?style=flat-square)](https://github.com/luanhaipeng/rebix)
[![npm downloads](https://img.shields.io/npm/dm/react-redux.svg?style=flat-square)](https://github.com/luanhaipeng/rebix)


## Installation

React Rebix requires **React 0.14 or later.**

```
npm install --save react-rebix
```
OR 
```
<script src="/node_modules/react/dist/react.min.js"></script>
<script src="/node_modules/react-dom/dist/react-dom.js"></script>
<script src="/node_modules/react-rebix/dist/react-rebix.min.js"></script>
```


Using
```
import Rebix from 'react-rebix';
```


## Example

https://github.com/luanhaipeng/rebix/tree/master/example/example

### Action 

```
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
```


###Store

```
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


```


###Config

```
import Rebix from 'react-rebix';
import UserActions from '../actions/UserActions';
import PostActions from '../actions/PostActions';
import UserStore from '../stores/UserStore';
import PostStore from '../stores/PostStore';

export default Rebix.createConfigure({

    initialState: null,

    actions: {
        user: UserActions,
        post: PostActions
    },

    stores: {
        user: UserStore,
        post: PostStore
    }

});
```



###View
```
import React, {PropTypes} from 'react';
import createRebixComponent from '../config/createRebixComponent';
import UserStore from '../stores/UserStore';
import RebixConfigure from './RebixConfigure';

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        };
    }

    componentDidMount() {
        var that = this;
        var {actions} = that.props;
        var mm = actions.getUserList(1234);
        var mm2 = actions.beginEditUserInfo(1234);


        actions.getPostList('absdf', 'sdf').then(function () {
            debugger;
        });

        setTimeout(function () {
            //直接访问Store中的数据
            var userInfo = UserStore.getUserInfo(121);
            that.setState({userInfo: userInfo});
        }, 2000)
    }


    render() {
        var userList = this.props.userList || [];
        var postList = this.props.postList || [];
        var userInfo = this.state.userInfo || {};

        return (
            <div>
                aaa---{userInfo.name}
                <br/>
                bbb---
                {userList.map(function (x) {
                    return <div>{x}</div>
                })}
                <hr/>
                ccc---
                {postList.map(function (x) {
                    return <div>{x}</div>
                })}
            </div>
        );

    }

}


export default Rebix.createComponent(RebixConfigure, Hello, {

    actions: {
        getUserList: 'user.getUserList',
        getPostList: 'post.getPostList',
        beginEditUserInfo: 'user.beginEditUserInfo'
    },

    props: {
        userList: 'user.userList',
        postList: 'user.postList'
    }

});
```

## How Does It Work?

Like Redux , only one Store . pub/sub

## License

MIT

##Contact Me
Email: master@ubibi.cn