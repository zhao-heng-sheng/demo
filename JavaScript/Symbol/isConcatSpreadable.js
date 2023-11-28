let initial = ['foo']
let b=['xvc','123']
let arr = initial.concat(b);
console.log(arr);
b[Symbol.isConcatSpreadable] = false;
arr = initial.concat(b);
console.log(arr);