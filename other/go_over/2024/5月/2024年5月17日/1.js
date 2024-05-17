let Person = function(name,age){
  this.name = name
  this.age = age
}

let zl = new Person('赵雷',19)
console.log(zl['[[Prototype]]'])
