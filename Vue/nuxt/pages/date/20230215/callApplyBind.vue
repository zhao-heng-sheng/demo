<template>
    <div></div>
</template>

<script setup>
/**
 * call
 *  接收的第一个参数是
 */
// //call接受1个指定对象和多个参数
Function.prototype.myCall = function (context, ...args) {
    console.log('myCallThis',this)
    console.log('myCallContext',context)
  	//传入的是null或undefined 指向全局
  	if(context===null||context===undefined) context = window
  	//如果传入的是原始类型值就包装一下
    if (!(context instanceof Object)) context = new Object(context)
    //创建一个唯一的key，防止覆盖对象里的数据
    let soleKey = Symbol()
    //把要调用的函数存到指定对象中
    context[soleKey] = this
    //在指定上下文对象中调用，this指向了context
    let res = context[soleKey](...args)
    //调用后删除存入的函数
    delete context[soleKey]
    //返回调用函数的返回值
    return res
}
// let fun = function (a, b, c) {
//     console.log("this", this)
//     console.log("args", a, b, c)
// }

// let name = "叮叮",
//     age = 20

// let obj = {
//     name: "铛铛",
//     age: 18,
// }
// let arr = [1,2,3]
// fun.myCall(arr)
// //myCall的上下文对象是fun
// fun.myCall(obj, 1, 2, 3)//this {name: '铛铛', age: 18, Symbol(): ƒ}   args 1 2 3

// bind
Function.prototype.myBind = function (context, ...args1) {
    let _this = this;
    let fBound = function(...args2){
        console.log('this',this)
        return _this.call(this instanceof fBound ? this: context, ...args1, ...args2)
    }
    console.log('fBound.prototype',fBound.prototype)
    console.log('this.prototype',this.prototype)
    fBound.prototype = Object.create(this.prototype)
    return fBound
}
let Fun = function (a, b, c) {
    console.log("this121", this)
    console.log("args", a, b, c)
    this.a = a;
    this.b = b;
}
Fun.prototype.hello = function(){
    return 'hello'
}
let obj1 = {
    name: "叮叮",
    age: 18,
}
let fn = Fun.myBind(obj1,1)
let obj = new fn(2)
console.log(obj.a,obj.b,obj.hello())  //1 2 'hello'
</script>

<style lang="scss" scoped></style>
