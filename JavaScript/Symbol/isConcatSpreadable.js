let initial = ['foo']
let b=['xvc']
let arr = initial.concat(b);
console.log(arr);
b[Symbol.isConcatSpreadable] = false;
arr = initial.concat(b);
console.log(arr);