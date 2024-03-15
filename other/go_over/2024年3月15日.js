let add3 = val => val + 3;
let add5 = val => val + 5;
let add7 = val => val + 7;

/* 柯里化 */
function curry(...fns) {
  let length = fns.length;
  let args = [];
  return (val)=>{
    args.push(val)
    console.log(args, length);
    if(args.length >= length){
      return fn(...args)
    }
  }
}
let add = curry(add3,add5,add7)
console.log(add(1)(2)(3)(4));