<template>
    <div></div>
</template>

<script setup>
let a  = 0
function fun () {
    console.log(a)
}
console.log(fun)
fun.a = 1
fun()
</script>

<style lang="scss" scoped></style>
