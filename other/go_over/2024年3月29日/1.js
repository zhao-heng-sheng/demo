let jia = (val) => {
    return val + 1;
};
let jian = (val) => {
    return val - 2;
};

let cheng = (val) => {
    return val * 3;
};

let pipe = (...fns) => {
    let callback = (val, fn) => fn(val);
    return (val) => {
        return fns.reduce(callback, val);
    };
};

let res = pipe(jia, jian, cheng);
console.log(res(3));
