let Person = function(obj){
    // ({name:this.name,age:this.age} = obj)
}
Person.prototype.name = 'zhangsan';
Person.prototype.age = 20;
Person.prototype.say = function(){
    console.log('hello'+this.name);
}
Object.defineProperty(Person.prototype,'name',{
    enumerable:false
})
let p = new Person();
let symbol = Symbol('symbol');
p.job = 'student';
p[symbol] = 'symbol';
for(let key in p){
    console.log(key);
}
console.log(Object.keys(p));
console.log(Object.getOwnPropertyNames(p));