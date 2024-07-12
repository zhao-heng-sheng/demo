class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  get name() {
      return this.name.toUpperCase();
  }

  set age(age) {
      if (age > 0 && age < 120) {
          this.age = age;
      } else {
          console.log("Invalid age value.");
      }
  }

  get age() {
      return this.age;
  }
}
let p = new Person('xxx', 18);
console.log(p);