'use strict';

exports.__esModule = true;
exports["default"] = isPromise;
function isPromise(p) {
    return p && typeof p.then === 'function' && typeof p["catch"] === 'function';
}