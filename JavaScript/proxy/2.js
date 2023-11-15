const Target = function(){
    this.name = 'targetname'
}
Target.prototype.id = 'targetid'
const target = new Target();
const handler = {};
const proxy = new Proxy(target,handler)
console.log(Proxy)
console.log(proxy.id) // target
console.log(target.id) // target

// console.log(target instanceof Proxy)
// console.log(proxy instanceof Proxy)