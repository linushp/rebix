import React, {PropTypes} from 'react';
import createRebixComponent from '../config/createRebixComponent';
import UserStore from '../stores/UserStore';


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


export default createRebixComponent(Hello, {

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