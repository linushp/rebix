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
    },

    middleware: [
        'promiseMiddleware'
    ]

});