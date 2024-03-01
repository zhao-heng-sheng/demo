// 柯里化
function addThreeNum(a,b,c){
    return a+b+c;
}
console.log(addThreeNum.length);
function addThreeNumCurry(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
function curry(fn){
  console.log(fn);
    return function curried(...args){
        console.log(args,fn.length);
        if(args.length<fn.length){
            return function(){
                return curried(...args.concat(Array.from(arguments)));
            }
        }
        return fn(...args);
    }

}
console.log(addThreeNum(1,2,3));
console.log(addThreeNumCurry(1)(2)(3));
let addThreeNumCurry2 = curry(addThreeNum)
console.log(addThreeNumCurry2(1)(2)(3));

// 偏函数
function wrapFunc(func,fixedValue){
    function wrappedFunc(input){
        const newFunc = func(input,fixedValue)
        return newFunc;
    }
    return wrappedFunc;
}
