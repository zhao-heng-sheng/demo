<template>
    <div>
        父组件1
        <son></son>
    </div>
</template>

<script lang="ts">
import Son from './son.vue'
export default {
    components:{Son},
    mounted(){
        console.log(this)
    },
    methods:{
        count(){
            return 1+1
        }
    }
}
</script>

<style scoped>

</style>