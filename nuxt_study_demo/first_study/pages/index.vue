<template>
    <div>
        <div>
            <NButton>hello</NButton>
        </div>
        <!-- <NuxtLink to=""></NuxtLink> -->
        <ul v-for="item in list">
            <li @click="router.push(item.path)">{{item.name}}</li>
        </ul>
        
    </div>
</template>

<script setup>
const router = useRouter()
// console.log(router)
// console.log(router.getRoutes().reverse())
let list =computed(()=>{
    return router.getRoutes().reverse()
})
</script>

<style scoped>
li{
    color:green;
    cursor: pointer;
}
</style>
