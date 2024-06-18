let Person = function(name, age) {
  this.name = name;
  this.age = age
}
Person.prototype.say = function() {
  console.log(this.name)
}
let dingding = new Person('叮叮', 18)
console.log(dingding)