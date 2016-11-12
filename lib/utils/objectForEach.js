'use strict';

exports.__esModule = true;
exports["default"] = objectForEach;
function objectForEach(obj, handler) {
    for (var key in obj) {
        if (key && obj.hasOwnProperty(key)) {
            var value = obj[key];
            handler('' + key, value);
        }
    }
}