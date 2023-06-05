<template>
    <div>
        {{ $route.params.data }}
        <img src="/logo.jpg" />
        <img src="~/assets/logo.jpg" />
        <div>
            <h3 >默认别名</h3>
            <p>
                {{ 
                `{
                    "~~": "/<rootDir>",
                    "@@": "/<rootDir>",
                    "~": "/<rootDir>",
                    "@": "/<rootDir>",
                    "assets": "/<rootDir>/assets",
                    "public": "/<rootDir>/public"
                    }` 
                }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route)
</script>

<style scoped lang="scss">
h3{
    color:$linkColor
}
</style>