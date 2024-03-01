function pipe(...funs){
  function callback(val,fun){
    return fun(val);
  }
  return function(val){
    return funs.reduce(callback,val);
  }
}
let fun1 = function(a){
    return a+1;
}
let fun2 = function(a){
    return a*2;
}
let fun3 = function(a){
    return a*10;
}
let funcFlow = pipe(fun1,fun2,fun3);
console.log(funcFlow(2));
