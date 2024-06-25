let Person = function(name, age) {
  this.name = name;
  this.age = age
}
Person.prototype.say = function() {
  console.log(this.name)
}
let newFn = function(fn,...args){
  let proto = {}
  proto.__proto__ = fn.prototype
  let res = fn.call(proto,...args)
  return typeof res==='object' ? res : proto
}
let dingding = new Person('叮叮', 18)
let dangdang = newFn(Person,'当当',18)
console.log('dangdang: ', dangdang);
console.log(dingding)