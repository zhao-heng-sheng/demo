<template>
    <div></div>
</template>

<script setup>
let nums = [2, 7, 11, 15],
    target = 9
for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) console.log([nums[i], nums[j]])
    }
}
</script>

<style lang="scss" scoped></style>
