let a = {
  b:1,
  c:{
    d:2
  }
}
let c = a.c;
delete a.b
// delete c
console.log(a)