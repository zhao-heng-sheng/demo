<template>
    <div></div>
</template>

<script setup>
let l1 = [2, 4, 3],
    l2 = [5, 6, 4]
let a = (parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join(""))).toString().split().reverse()
console.log(a)
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
// .split().reverse()
</script>

<style lang="scss" scoped></style>
