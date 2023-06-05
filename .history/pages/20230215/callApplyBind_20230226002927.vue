<template></template>

<script setup>
/**
 * call
 *  接收的第一个参数是
 */
// //call接受1个指定对象和多个参数
// Function.prototype.myCall = function (context, ...args) {
//   	//传入的是null或undefined 指向全局
//   	if(context===null||context===undefined) context = window
//   	//如果传入的是原始类型值就包装一下
//     if (!(context instanceof Object)) context = new Object(context)
//     //创建一个唯一的key，防止覆盖对象里的数据
//     let soleKey = Symbol()
//     //把要调用的函数存到指定对象中
//     context[soleKey] = this
//     //在指定上下文对象中调用，this指向了context
//     let res = context[soleKey](...args)
//     //调用后删除存入的函数
//     delete context[soleKey]
//     //返回调用函数的返回值
//     return res
// }
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
// let obj2 = {
//     name: "噼里",
//     age: 19,
// }
// //myCall的上下文对象是fun
// fun.myCall(obj, 1, 2, 3)//this {name: '铛铛', age: 18, Symbol(): ƒ}   args 1 2 3

// bind
Function.prototype.myBind = function (context) {
    return () => {
        //箭头函数没有this,这里this是myBind的this
        //形成了一个闭包
        return this.call(context)
    }
}
let obj = {
    name: "叮叮",
    age: "11",
}
let obj2 = {
    name: "铛铛",
    age: "19",
}
let fun = function () {
    console.log(this)
}
let fn = fun.myBind(obj)
// fn()
fn.call(obj2)
</script>

<style lang="scss" scoped></style>
