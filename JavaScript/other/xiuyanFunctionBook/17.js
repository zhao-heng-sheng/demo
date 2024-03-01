function add4(num) {
    return num + 4;
}
function multiply3(num) {
    return num * 3;
}
function divide2(num) {
    return num / 2;
}

const Box = (x) => {
    return {
        map: (f) => {
            return Box(f(x));
        },
        valueOf: () => {
            return x;
        },
    };
};
const newBox = Box(10).map(add4)
console.log(newBox);
