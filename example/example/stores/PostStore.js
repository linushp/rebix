import Rebix from 'react-rebix';


export default Rebix.createStore({

    initialState: {
        postList: []
    },

    'onGetPostList': function (state, action) {
        state = Object.assign({}, state);
        var postList = action.payload;
        state.postList = postList;
        return state;
    }


});

