import isPromise  from '../utils/isPromise';


export default function promiseMiddleware(_ref) {

    const dispatch = _ref.dispatch;

    return next => action => {

        if (!isPromise(action.promise)) {
            action.status = 'success';
            return next(action);
        }

        var {type,group,name,status,args,payload,promise} = action;

        const createAction = function (status1, promise1, payload1) {
            return {
                type: type,
                group: group,
                name: name,
                status: status1,
                args: args,
                promise: promise1,
                payload: payload1 //object or promise
            };
        };

        promise = promise.then(
            (resolved = {}) => {
                var successAction = createAction('success', null, resolved);
                return dispatch(successAction);
            },

            (rejected = {}) => {
                var errorAction = createAction('error', null, rejected);
                return dispatch(errorAction);
            }
        );


        var pendingAction = createAction('pending', promise, null);
        return next(pendingAction);
    };

}
