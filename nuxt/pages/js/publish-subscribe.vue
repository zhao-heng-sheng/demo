<template>
    <div>

    </div>
</template>

<script setup>
class Event {
    constructor(){
        this.list = {}  //储存事件
    }
    list = {}  //储存事件
    on(event,fn){
        if(!this.list[event]) this.list[event] = []
        this.list[event].push(fn)
    }  //注册事件
    once(event,fn){
        let _this = this
        function on(){
            _this.del(event)
            fn.apply(_this,arguments)
        }
        this.on(event,on)
    }  //注册一次事件
    emit(event,...args){
        if(!this.list[event]) return
        this.list[event].forEach(fn=>{
            fn(...args)
        })
    }    //触发事件
    del(event){
        if(!this.list[event]) return
        delete this.list[event]
    }  //删除指定事件
}
let event = new Event()
event.once('test',function(val){
    console.log('test',val)
})
event.once('test',function(val){
    console.log('test2',val)
})
debugger;
event.emit('test',1,3,4)
event.emit('test',1,3,4)
event.emit('test',1,3,4)
</script>

<style scoped>

</style>