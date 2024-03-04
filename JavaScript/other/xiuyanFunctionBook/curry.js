function curry(fn){
  let length = fn.length
  let args = []
  function fn(x){
    console.log(x,args);
    if(args.length>=length){
      return fn(...args)
    }
    args.push(x)
    return fn
  }
  return fn
}
function fn1(a,b,c,d){
  return a+b+c+d
}
let fn2 = curry(fn1)
fn2(1)(2)(3)(4)