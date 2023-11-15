// let obj = {}
// Object.defineProperty(obj,'a',{
//     //值
//     value:1,
//     //是否可修改
//     writable:true,
//     //是否可配置
//     configurable:true,
//     //是否可枚举
//     enumerable:true
// })
// let _obj = {}
let obj = {};
Object.defineProperty(obj,'a',{
    get(){
        return this._a
    },
    set(val){
        this._a = val
    }
})
obj.a = 1
console.log(obj,'obj.a');