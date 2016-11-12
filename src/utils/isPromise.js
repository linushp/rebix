export default function isPromise(p) {
    return p && (typeof p.then === 'function') && (typeof p.catch === 'function');
}