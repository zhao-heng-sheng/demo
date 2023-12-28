let person = {
    name:'zhaohs',
    age:27
}
let  {name,age:personAge,job} = person;
console.log(name,personAge,job,defaultVal='默认值');    // zhaohs 27 undefined 默认值

// 原始值会转换为对象
let {length} = 'hello';
console.log(length);    // 5

// 函数参数的解构赋值
function add([x,y]){
    return x+y;
}
console.log(add([1,2]));   // 3
