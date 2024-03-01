function curry(fun){
  let arity = fun.length;
  function generateCurried(prevArgs){
    return function curried(nextArg){
      const args = [...prevArgs,nextArg]
      if(args.length>=arity){
        return fun(...args)
      }else{
        return generateCurried(args)
      }
    }
  }
  return generateCurried([])
}
function add(a,b,c,d){
  return a+b+c+d;
}
let curriedAdd = curry(add);
console.log(curriedAdd);
curriedAdd(1)(2)(3)(4);
console.log(curriedAdd(1)(2)(3)(4));