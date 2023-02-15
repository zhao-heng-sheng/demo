<template>
    <div>

    </div>
</template>

<script setup>
/**
 * call
 *  接收的第一个参数是
 */
Function.prototype.myCall = function(context,...args){
    let sole  = Symbol()
    console.log(context)
    context[sole] = this;
    let res = context[sole](...args)
    delete context[sole]
    return res
}
let name = '叮叮';
let fun = function(){
    console.log(this)
}
let obj = {
    name:'铛铛'
}
fun()
fun.call('xxx')
</script>

<style lang="scss" scoped>

</style>