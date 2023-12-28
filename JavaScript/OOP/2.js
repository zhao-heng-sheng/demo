let Person = function(){}
Person.prototype.arr=[1,2,3];
let p1 = new Person();
let p2 = new Person();
p1.arr.push(4);
console.log(p1.arr);    //[1,2,3,4]
console.log(p2.arr);    //[1,2,3,4]