let Person = function(){
    this.name = 'zhangsan';
    this.age = 20;
}
Person.prototype.say = function(){
    console.log('hello'+this.name);
}
console.log(Person);
console.log(Person.prototype);
let p = new Person();
console.log(p);