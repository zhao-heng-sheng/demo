const user = {
    name:'Jake'
}
const proxy = new Proxy(user,{
    get(target,property,receiver){
        console.log(`Getting ${property}`)
        return Reflect.get(...arguments)
    },
    set(target,property,value,receiver){
        console.log(`Setting ${property} = ${value}`)
        return Reflect.set(...arguments)
    }
})
proxy.name;
proxy.name = 'Tom';
proxy.age = '27';