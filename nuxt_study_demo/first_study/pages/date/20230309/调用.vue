<template>
    <div>
        调用serve
    </div>
</template>

<script lang="ts" setup>
onMounted(async()=>{
    let res = await $fetch('/api/hello')
    console.log(res)
})
</script>

<style scoped>

</style>