export default function objectForEach(obj, handler) {
    for (var key in obj) {
        if (key && obj.hasOwnProperty(key)) {
            var value = obj[key];
            handler('' + key, value);
        }
    }
}