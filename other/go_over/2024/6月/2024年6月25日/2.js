class Person{
  constructor(name,age){
    this._name = name;
    this.age = age;
  }
  get name(){
    return this._name.toUpperCase();
  }
  set name(name){
    console.log(name);
    this._name = name.toLowerCase();
  }
}
let p = new Person("Alice",18);
console.log(p);
console.log(p.name);
console.log(p._name);