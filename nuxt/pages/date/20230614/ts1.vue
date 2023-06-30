<template>
    <div>匹配模式做提取</div>
</template>
<script lang="ts">
export default {
    name:'匹配模式做提取'
}
</script>
<script setup lang="ts">
useHead({
    title: "匹配模式做提取",
    meta:[
      { hid: 'keywords', name: 'keywords', content: '外贸, index' }
    ]
});
type p = Promise<"guang">;
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;
</script>

<style scoped></style>
