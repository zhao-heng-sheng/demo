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
console.log(a.join('-'))
console.log(fakeJoin(a,'-'))
console.log(a.join('-')===fakeJoin(a,'-'))
let b = ['h','e','l','l','o']
console.log(b.join('-'))
console.log(fakeJoin(b,'-'))
console.log(b.join('-')===fakeJoin(b,'-'))
</script>

<style lang="scss" scoped>

</style>