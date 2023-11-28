function Foo(){}
let f = new Foo()
console.log(Foo[Symbol.hasInstance](f));


class Bar{}
class Baz extends Bar{
    static [Symbol.hasInstance](){
        return 0;
    }
}
let b= new Baz()
console.log(Bar[Symbol.hasInstance](b));
console.log(Baz[Symbol.hasInstance](b));
console.log(b instanceof Bar);
console.log(b instanceof Baz);
