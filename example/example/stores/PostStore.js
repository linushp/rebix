import Rebix from 'react-rebix';


function wrapperOnName(name,innerFunc){
    return function (state, action){
        if(action.name!==name){
            return state;
        }
        return innerFunc(state,action);
    }
}

function createPostStore(name) {

    var wrapperOnName = wrapperOnName.bind({},name);

    return Rebix.createStore({

        initialState: {
            postList: []
        },

        'onGetPostList': wrapperOnName(function (state, action) {
            state = Object.assign({}, state);
            var postList = action.payload;
            state.postList = postList;
            return state;
        })

    });

}


export default createPostStore();
