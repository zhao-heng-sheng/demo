<template>
    <div>
        new的实现
        在调用 new 时, 主要做了 4 件事:

创建一个新的空对象
将空对象的 __proto__ 指向构造函数的 prototype
执行构造函数, 并将新创建的空对象绑定为构造函数的this对象
如果构造函数有返回一个对象,则返回这个对象,否则返回新创建的那个对象
    </div>
</template>

<script setup>
// let myNew = function(fun,...args){
//     let obj = {}
//     obj.__proto__ = fun.prototype
//     let res = fun.call(obj,...args)
//     return res && res instanceof Object ? res : obj
// }
let a = Symbol('[[prototype]]')
function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype[a] = function(){console.log('hello')}
let obj = new Person('滴滴',18)
console.log(obj)
console.log(obj.__proto__)
console.log(Object.getPrototypeOf(obj))
console.log(Person.prototype===obj.__proto__)
</script>
<style lang="scss" scoped>

</style>