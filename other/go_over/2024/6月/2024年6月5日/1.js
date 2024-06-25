var Person = /** @class */ (function () {
    function Person() {
        this.x = 123;
        console.log(this.x);
    }
    Person.prototype.getX = function () {
        console.log(this.x);
        console.log(this);
        return this.x;
    };
    return Person;
}());
var p = new Person();
console.log(p);
console.log(p.getX());
