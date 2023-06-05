<template>
    <div></div>
</template>

<script setup>
/**
 * call
 *  接收的第一个参数是
 */
Function.prototype.myCall = function (context, ...args) {
    let sole = Symbol()
    console.log(context)
    context[sole] = this
    let res = context[sole](...args)
    delete context[sole]
    return res
}
let name = "叮叮"
let fun = function () {
    console.log(this)
}
let obj = {
    name: "铛铛",
}
// fun()
// fun.call("xxx")

// bind
Function.prototype.myBind = function (oThis, ...args) {
    console.log(oThis)
    console.log(this.prototype)
    return
    let fTobind = this,
        FNOP = function () {},
        fBound = function () {
            return fTobind.call(this instanceof FNOP && oThis ? this : oThis, ...args)
        }
    FNOP.prototype = this.prototype
    fBound.prototype = new FNOP()
    return fBound
}
fun.myBind(obj)
fun()
</script>

<style lang="scss" scoped></style>
