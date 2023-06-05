<template>
    <div>
        new出来的本身没有prototype  只有__proto__  指向原型对象,还有个constructor，指向构造函数？
        创建的对象有prototype(原型对象)，默认为空对象 

        构造函数是专门用来生成实例对象的函数

        new 的作用 <br>
        执行构造函数，返回实例对象

    </div>
</template>

<script setup>
let Fn = function () {
    this.name = 'xxx'
    this.test1 = function () {
        console.log("test1")
    }
}

// Fn.prototype.test2 = function () {
//     console.log("test2")
// }
Fn = new Fn()
console.log(Fn)

// let fn = new Fn()
// console.log(fn)
// console.log(fn.)
// console.log(fn)
// let fn =

// let anotherObject  ={
//     a:2
// }
// let myObject = Object.create(anotherObject)
// console.log(myObject)


</script>

<style lang="scss" scoped></style>
