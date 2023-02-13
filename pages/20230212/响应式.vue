<template>
    <div>
        解析html->加载样式-> 布局 -> 分层 -> 生成绘制指令 => 分块 => 光栅化 -> 呈现
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
        return val
    }
})
console.log(o)
console.log(o.a)
o.a = 4
console.log(o.a)
</script>

<style scoped>

</style>