// const target = {foo:'bar'}
// const proxy = new Proxy(target,Reflect)
// console.log(proxy.foo);
// console.log(target.foo);


const target = {foo:'bar',baz:'qux'}
const handler = {
    get(trapTarget,property,receiver){
        let decoration = '';
        console.log(this)
        if(property==='foo'){
            decoration = '!!!'
        }
        return Reflect.get(...arguments)+decoration
    }
}
const proxy = new Proxy(target,handler)
console.log(proxy.foo);
console.log(proxy.baz);