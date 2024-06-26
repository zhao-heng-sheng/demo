function Foo(name){
  this.name = name;
}
let a = new Foo('a');
let b = new Foo('b');
Foo.prototype.say = function(){
  console.log(this.name);
}
a.say();
b.say();