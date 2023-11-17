const hiddenProperties = ['foo','bar']
const targetObject = {
    foo:1,
    bar:2,
    baz:3
}
const proxy = new Proxy(targetObject,{
    get(target,property){
        if(hiddenProperties.includes(property)) return undefined;
        return Reflect.get(...arguments)
    },
    has(target,property){
        if(hiddenProperties.includes(property)) return false;
        return Reflect.has(...arguments)
    }
})
console.log(proxy.foo)
console.log(proxy.bar)
console.log(proxy.baz)
console.log('foo' in proxy)
console.log('bar' in proxy)
console.log('baz' in proxy)