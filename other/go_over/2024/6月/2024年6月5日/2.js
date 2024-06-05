class Person {
    #xxx = 1;
    constructor() {
        console.log(this.#xxx);
        this.x = 123;
    }
    getX() {
        console.log(this.#xxx);
        console.log(this.x);
        return this.#xxx;
    }
}
let p = new Person();
console.log(Object.keys(p))
console.log(Object.values(p))
console.log(p);