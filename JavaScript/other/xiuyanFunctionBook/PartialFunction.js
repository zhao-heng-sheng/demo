// 定义一个包装函数，专门用来处理偏函数逻辑
function wrapFunc(func, fixedValue) {
    // 包装函数的目标输出是一个新的函数
    function wrappedFunc(...input) {
        // 这个函数会固定 fixedValue，然后把 input 作为动态参数读取
        const newFunc = func(...input, fixedValue);
        return newFunc;
    }
    return wrappedFunc;
}

let multiply = (x, y) => x * y;
let add = (x, y, z) =>{
  console.log(x,y,z)
  return x + y + z;
}
const multiply3 = wrapFunc(multiply, 3);
const add3 = wrapFunc(add, 3);
console.log(add3(2,1));
// 输出6
multiply3(2);
