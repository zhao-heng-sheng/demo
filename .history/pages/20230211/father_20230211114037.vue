<template>
    <div>
        父组件1
        <son></son>
    </div>
</template>

<script lang="ts">
import Son from './son.vue'
export default {
    mounted(){
        console.log(this)
    }
}
</script>

<style scoped>

</style>