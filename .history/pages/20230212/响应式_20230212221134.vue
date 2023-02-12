<template>
    <div>

    </div>
</template>

<script setup lang="ts">
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
console.log(aObj.a)
aObj.a = 88

</script>

<style scoped>

</style>