<template>
    <div>

    </div>
</template>

<script setup>
console.log(this)
function fn(){
    let a = {age:1,gender:'男'};
    return ()=>a.age++
}
let b = fn()
console.log(b())
</script>

<style lang="scss" scoped>

</style>