React Rebix
===========
React的一个单向数据流框架。

##优点

内部实现依赖于Redux。但是简化了Redux的使用方法。

1. action层只需要返回action方法的处理结果，无需action去dispatch处理的结果。
2. store层，无需写大量的switch判断，而是采用reflux的风格，直接使用onXXXX来响应Action的处理。
3. view层无需自己去依赖action和store层，而是直接采用简单的配置，就能自动将action和store中的数据绑定到组件的props中。
4. view层中调用的action方法如果是异步方法会将返回值中的promise对象透传到view层。
5. action层和view层，都可以直接访问store中的Get方法。但是view层和action层，都无法访问store中的非get方法。这样既能保证调用的灵活性，又能保证数据流的单向流动。
6. 跟其他框架相比，用户省去了大量自己手动书写的对数据的pub/sub的代码。


## 安装

```
npm install --save react-rebix
```
### 使用
```
import Rebix from 'react-rebix';
```
OR
```
<script src="/node_modules/react/dist/react.min.js"></script>
<script src="/node_modules/react-dom/dist/react-dom.js"></script>
<script src="/node_modules/react-rebix/dist/react-rebix.min.js"></script>
```


## 示例

https://github.com/luanhaipeng/rebix/tree/master/example/example

### Action 

Action中可访问Store中的getXXX方法，其他方法不能访问。

支持三种Action

1. 异步 Action， 一定要返回一个Promise对象
2. 普通 Action，直接返回处理结果的js对象。
3. 空Action, 不需要具体的实现，具体操作在Store中完成.

```
import Rebix from 'react-rebix';
import UserStore from '../stores/UserStore';

export default Rebix.createActions({

    /**
     * 异步 Action
     * 一定要返回一个Promise对象
     */
    getUserInfo: function (params) {

        //Action 中可以访问Store中的数据。但是只能调用get方法。
        //Store 中的其他方法，不会对外暴露，这样方便了数据的访问，同时又保证了数据的单向流动。
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

Store中的数据存储，强烈建议使用immutable，这里为了演示方便，通过Object.assign({}, state)创建了一个新对象。

说明：

1. 为了保证数据的单向流动，通过CreateStore创建的onXXXX函数,view层和action层根本调用不到。
2. 为了方便action和view层使用数据，通过CreateStore创建的getXXXX函数,view层和action层都可以调用到。
3. 一般来说action文件和store文件是一一对应的，但是有时候一个action的处理结果需要几个store层各自处理。这里提供了加井号前缀的方式实现。比如：post#onGetPostList（在UserStore中响应PostAction的结果。）

```
import Rebix from 'react-rebix';


export default Rebix.createStore({

    initialState: {
        userList: [],
        postList: []
    },

    //类似Reflux。Action中的处理结束后，会把数据传递给Store
    //这里处理：action中方法 getUserList 的返回值。
    'onGetUserList': function (state, action) {
        console.log(action.status);
        state = Object.assign({}, state);
        var userList = action.payload;
        state.userList = userList;
        return state;
    },


    //处理action中beginEditUserInfo的行为。
    'onBeginEditUserInfo': function (state) {
        state = Object.assign({}, state);
        state.isEditing = true;
        return state;
    },

    //处理action中onEndEditUserInfo的行为。
    'onEndEditUserInfo': function (state) {
        state = Object.assign({}, state);
        state.isEditing = false;
        return state;
    },


    /**
     * 为了响应其它Action方法中的处理，要加#前缀
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

通过Config，将action、store等资源集中起来。这样的目的是为了在view层，无需再引入大量的action、store的js文件。

说明：

1. createConfigure中只有三个配置项。
2. initialState 是用来做服务端初次数据渲染用的。
3. actions 所有action的集合。
4. stores所有stores的结合。
5. actions和stores中配置的key值基本保证是一一对应的。如下：user和post

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

注意：

1. Action中可访问Store中的getXXX方法，其他方法不能访问。
2. View层通过Rebix.createComponent将action和store自动绑定到组建的props中。
3. Store发生了变化，会自动update，因此强烈建议重写shouldComponentUpdate来避免重复渲染。这里跟redux是一样的。



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
        getUserList: 'user.getUserList',  //请参考config文件中的配置。
        getPostList: 'post.getPostList',
        beginEditUserInfo: 'user.beginEditUserInfo'
    },

    props: {
        userList: 'user.userList',
        postList: 'user.postList'
    }

});
```

## 原理

内部实现还是使用Redux，只有一个唯一的Store，通过connect自动完成对store数据变化的pub/sub机制。

## License

MIT

## 联系我

1. Email： master@ubibi.cn
2. QQ群： 464625365
