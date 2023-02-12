<template>
    <div>
        父组件1
        <son></son>
    </div>
</template>

<script setup lang="ts">
import Son from './son.vue'
console.log(Son)
</script>

<style scoped>

</style>