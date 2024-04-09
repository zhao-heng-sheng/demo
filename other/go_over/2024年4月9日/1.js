let a = function(){
  let b = 1;
  return function(){
    b++;
    return b;
  }
}
let c = a();
let d = a();
console.log(c());
console.log(c());
console.log(d());
console.log(d());
console.log(d());