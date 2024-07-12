function Foo(){

}
Foo.prototype.blah = '123'
// Foo.prototype = {name:'xxx'}
var a = new Foo();
// Foo.prototype = {name:'yyy'}
a instanceof Foo; // true
console.log(a instanceof Foo);