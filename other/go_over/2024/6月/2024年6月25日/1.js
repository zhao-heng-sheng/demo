class Person {
    static age = 18;
    constructor(name) {
        this.name = name;
        console.log(this)
    }
    
    sayHello() {
        console.log(`Hello, I'm ${this.name}`,this.age);
    }
}
let person = new Person("Alice");
console.log(person)
person.sayHello();