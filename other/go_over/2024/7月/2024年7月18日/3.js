// delete String.prototype.length
let a =Object.getOwnPropertyDescriptor(String.prototype, "slice")
// String.prototype.slice = function(){
//   return "slice"
// }
delete String.prototype.slice
console.log(a)
console.log("adsfsd".slice())