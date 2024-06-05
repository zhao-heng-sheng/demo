class Person {
    private x = 123;
    getX() {
        console.log(this.x);
        console.log(this);
        return this.x;
    }
    constructor() {
        console.log(this.x);
    }
}
let p = new Person();
console.log(p);
console.log(p.getX());
