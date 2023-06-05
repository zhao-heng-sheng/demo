<template>
    <div></div>
</template>

<script setup>
/**
 * call
 *  接收的第一个参数是
 */
//call接受1个指定上下文对象和多个参数
Function.prototype.myCall = function (context, ...args) {
    if (context === null || context === undefined) context = window
    if (!context instanceof Object) context = new Object(context)
    //创建一个唯一的key，防止覆盖上下文对象里的数据
    let soleKey = Symbol()
    //把要调用的函数存到指定上下文对象中（这里的this是要调用的函数）
    context[soleKey] = this
    //在指定上下文对象中调用，this指向了context
    let res = context[soleKey](...args)
    //调用后删除存入的函数
    delete context[soleKey]
    //返回调用函数的返回值
    return res
}
let fun = function (a, b, c) {
    console.log("this", this)
    console.log("args", a, b, c)
}

let name = "叮叮",
    age = 20

let obj = {
    name: "铛铛",
    age: 18,
}
fun.myCall(null, 1, 2, 3)
// fun()
// fun.call("xxx")

// bind
// Function.prototype.myBind = function (oThis, ...args) {
//     console.log(oThis)
//     console.log(this.prototype)
//     return
//     let fTobind = this,
//         FNOP = function () {},
//         fBound = function () {
//             return fTobind.call(this instanceof FNOP && oThis ? this : oThis, ...args)
//         }
//     FNOP.prototype = this.prototype
//     fBound.prototype = new FNOP()
//     return fBound
// }
// fun.myBind(obj)
// fun()
</script>

<style lang="scss" scoped></style>
