var [a, b] = {
    a: 1,
    b: 2,
    [Symbol.iterator]: function () {
        return Object.values(this)[Symbol.iterator]();
    },
};
console.log(a, b);
