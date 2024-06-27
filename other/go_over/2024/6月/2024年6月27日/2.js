function isRelatedTo(o1, o2) {
  function F() {}
  F.prototype = o2;
  return o1 instanceof F;
}
var a = {name:'123'};
var b = Object.create(a);

console.log(isRelatedTo(b, a)); // true
// isRelatedTo(b, a); // true
