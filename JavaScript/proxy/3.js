const target = {foo:'bar'}
const handler = {
    get(target,key,receiver){
        console.log(target,key,receiver);
        return 'handler override'
    }
}
const proxy = new Proxy(target,handler)
console.log(target.foo);
console.log(proxy.foo);
console.log(handler);