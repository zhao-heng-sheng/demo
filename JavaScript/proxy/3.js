const target = {foo:'bar'}
const handler = {
    get(trapTarget,key,receiver){
        console.log(target===trapTarget,key,receiver===proxy);
        // return trapTarget[key]
        return Reflect.get(...arguments)
    }
}
const proxy = new Proxy(target,handler)
console.log(target.foo);
console.log(proxy.foo);