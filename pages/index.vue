<template>
    <div>
        <ul v-for="item in list">
            <li @click="router.push(item.path)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script setup>

const router = useRouter()
let list =computed(()=>{
    return router.options.routes.reverse()
})
</script>

<style scoped>
li{
    color:green;
    cursor: pointer;
}
</style>
