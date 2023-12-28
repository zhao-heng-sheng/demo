let Person = function(obj){
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
Object.defineProperty(p,'x',{
    value:100,
    enumerable:false

})
let symbol = Symbol('symbol');
p.job = 'student';
p[symbol] = 'symbol';
for(let key in p){
    console.log(key);   //job age say
}
console.log(Object.keys(p));    //["job"]
console.log(Object.getOwnPropertyNames(p));  //["x", "job"]
console.log(Object.getOwnPropertySymbols(p));    //[Symbol(symbol)]
console.log(Object.getPrototypeOf(p));  //{age:20,say:f}