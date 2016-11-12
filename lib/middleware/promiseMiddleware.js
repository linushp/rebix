'use strict';

exports.__esModule = true;
exports["default"] = promiseMiddleware;

var _isPromise = require('../utils/isPromise');

var _isPromise2 = _interopRequireDefault(_isPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function promiseMiddleware(_ref) {

    var dispatch = _ref.dispatch;

    return function (next) {
        return function (action) {

            if (!(0, _isPromise2["default"])(action.promise)) {
                action.status = 'success';
                return next(action);
            }

            var type = action.type,
                group = action.group,
                name = action.name,
                status = action.status,
                args = action.args,
                payload = action.payload,
                promise = action.promise;


            var createAction = function createAction(status1, promise1, payload1) {
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

            promise = promise.then(function () {
                var resolved = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var successAction = createAction('success', null, resolved);
                return dispatch(successAction);
            }, function () {
                var rejected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var errorAction = createAction('error', null, rejected);
                return dispatch(errorAction);
            });

            var pendingAction = createAction('pending', promise, null);
            return next(pendingAction);
        };
    };
}