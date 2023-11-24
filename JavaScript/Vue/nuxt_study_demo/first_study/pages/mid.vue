<template>
    <div>
        mid
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware(to,from){
        console.log('匿名中间件，具体页面执行')
    }
})
definePageMeta({
  middleware: ['amid', 'bmid']
})
</script>

<style scoped>

</style>