let arr = [];
let emit = (newVal)=>{
    console.log('newVal',newVal)
}
let proxy = new Proxy(arr,{
    set(target,p,val,receiver){
        // console.log(target,p,val,receiver)
        let res = Reflect.set(...arguments)
        if(res&&p!=='length') emit(val)
        return res
    }
})
proxy.push('123')
proxy.push('456')
console.log(proxy)
console.log(arr)