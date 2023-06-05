<template>
    <div>

    </div>
</template>

<script setup>
import {getCurrentInstance} from 'vue'
const { proxy } = getCurrentInstance();
console.log(proxy)
function fn(){
    let a = {age:1,gender:'男'};
    return ()=>a.age++
}
let b = fn()
console.log(b())
</script>

<style lang="scss" scoped>

</style>