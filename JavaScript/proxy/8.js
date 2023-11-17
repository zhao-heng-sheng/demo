const target = {
    thisValEqualsProxy(){
        console.log(this);
        return this === proxy;
    }
}
const proxy = new Proxy(target,{})
console.log(target.thisValEqualsProxy());
console.log(proxy.thisValEqualsProxy());