<template>
    <div>

    </div>
</template>

<script setup>
function fakeJoin(arr,connector){
    let str = ''
    for(let i =0;i<arr.length;i++){
        if(i>0) str+=connector
        if(arr[i]!==undefined) str+=arr[i]
    }
    return str;
}
var a =new Array(3)
console.log(fakeJoin(a,'-'))
</script>

<style lang="scss" scoped>

</style>