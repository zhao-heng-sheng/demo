function pipe(...args){
  let callback = (num,fun)=>{
    return fun(num)
  }
  return (num)=>{
    return args.reduce(callback,num)
  }
}
function add(num){
  return num +3
}
function multiply(num){
  return num * 3
}
function divide(num){
  return num / 2
}
let x = pipe(add, multiply, divide)
console.log(x(3))