
let add = (a, b, c) => a + b + c;
let add3 = function(add){
  let a = 3;
  return function(b,c){
    return add(a,b,c);
  }
}
let add3_ = add3(add);
console.log(add3_(1,2)); // 6