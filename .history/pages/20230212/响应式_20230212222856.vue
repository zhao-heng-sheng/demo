<template>
    <div>

    </div>
</template>

<script setup>
let a =12;
let aObj = {
    a:0
}
Object.defineProperty(aObj,'a',{
    get(){
        console.log('有人读取了a')
        return a
    },
    set(val){
        console.log('有人要改a')
        a = val;
        console.log(val)
    }
})
// console.log(aObj.a)
// aObj.a = 88
// console.log(aObj.a)
let obj = {
    a :0
}
let o = new Proxy(obj,{
    get(target,name){
        console.log(target,name)
        console.log('有人进行了get操作')
        return target[name]
    },
    set(obj,prop,val){
        console.log(obj,prop,val)
    }
})
console.log(0)
obj.a = 4
</script>

<style scoped>

</style>