const target = {foo:'bar'}
const handler = {
    get(trapTarget,key,receiver){
        return Reflect.get(...arguments)
    }
}
const proxy = new Proxy(target,handler)