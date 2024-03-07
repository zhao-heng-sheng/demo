function curry(fn){
  let length = fn.length
  let args = []
  return function _curry(...newArgs){
    args.push(...newArgs)
    console.log(args);
    if(args.length>=length){
      return fn(...args)
    }
    return _curry
  }
}
let add = (a, b, c) => a + b + c;
let curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6