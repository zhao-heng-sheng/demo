// 
let deepCopy = (obj) => {
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                newObj[key] = deepCopy(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
};
let symbol = Symbol();
let obj = {
    a: 1,
    b: {
        c: 3,
        d: 4,
    },
    e: [1345, 3345, 4345, 565756],
    f: symbol,
    g: undefined,
    h: null,
    i: NaN,
    k: () => {},
    l: /\d/,
    m: new Date(),
};
let obj2 = deepCopy(obj);
console.log(obj2);
