function pipe(...args){
  function callback(input,func){
    return func(input)
  }
  return function(param){
    return args.reduce(callback,param)
  }
}

fn1 = (a) => a + 1
fn2 = (a) => a + 2
fn3 = (a) => a + 3

let res = pipe(fn1,fn2,fn3)

console.log(res(1));