const target = {foo:'bar'}
const {proxy, revoke} = Proxy.revocable(target,{
    get(){
       return Reflect.get(...arguments)
    }
})
console.log(proxy);
revoke();
console.log(proxy);