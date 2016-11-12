'use strict';

exports.__esModule = true;
exports.isType = isType;
exports.isFunction = isFunction;
exports.toArray = toArray;
exports.getValueByKey = getValueByKey;
exports.getValueInPath = getValueInPath;
var _undefined = undefined;

function isType(x, type) {
    return Object.prototype.toString.call(x) === '[object ' + type + ']';
}

function isFunction(x) {
    return isType(x, 'Function');
}

function toArray(aaa) {
    if (!aaa) {
        return [];
    }

    var argsArray = Array.prototype.slice.call(aaa);
    var args = [].concat(argsArray);
    return args;
}

function getValueByKey(obj, key) {
    if (!obj) {
        return null;
    }
    var value = _undefined;
    if (isFunction(obj.get)) {
        value = obj.get(key);
    }
    if (value === _undefined) {
        value = obj[key];
    }

    return value;
}

/**
 * a = {
 *   b:{
 *      c:{
 *          d:1
 *      }
 *   }
 * }
 *
 * str : b.c.d
 * @param obj
 * @param str
 * @demo :
 *  var d = getObjectValue(a,'b.c.d');
 */
function getValueInPath(obj, str) {
    if (!obj) {
        return null;
    }
    try {
        var propArr = str.split(".");
        var tmpObj = obj;
        var i = 0;
        while (i < propArr.length) {
            if (!tmpObj) {
                return null;
            }
            var prop = propArr[i];
            tmpObj = getValueByKey(tmpObj, prop);
            i++;
        }
        return tmpObj;
    } catch (e) {
        console.log('[ERROR]', e);
    }

    return null;
}