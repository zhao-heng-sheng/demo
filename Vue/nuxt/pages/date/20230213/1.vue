<template>
    <div></div>
</template>
<script>
export default {
    data() {
        return {
            a: 33,
        }
    },
    created() {
        function fn() {
            let a = { age: 1, gender: "男" }
            return () => a.age++
        }
        let b = fn()
        console.log(b())
        console.log(this)
    },
}
</script>
<script setup></script>

<style lang="scss" scoped></style>
