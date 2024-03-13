function pipe(...fns) {
    let callback = (val, fn) => fn(val);
    return function (arg) {
        return fns.reduce(callback, arg);
    };
}
function add(num) {
    return num + 3;
}
function multiply(num) {
    return num * 3;
}
function divide(num) {
    return num / 2;
}
let x = pipe(add, multiply, divide);
console.log(x(3));
