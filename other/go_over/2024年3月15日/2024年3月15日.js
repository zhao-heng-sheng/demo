let add3 = val => val + 3;
let add5 = val => val + 5;
let add7 = val => val + 7;
let muls = (a,b,c) => a * b * c;
/* 柯里化 */
function curry(fn) {
  let length = fn.length;
  let args = [];
  return function callback(val){
    args.push(val)
    if(args.length >= length){
      return fn(...args)
    }
    return callback
  }
}
let mul = curry(muls)
console.log(mul(3)(2)(3));
/* 偏函数 */
function partial(fn,...args) {
  return (...rest) => fn(...args,...rest)
}
let mul2 = partial(muls, 2,2);
console.log(mul2( 4)); // 24