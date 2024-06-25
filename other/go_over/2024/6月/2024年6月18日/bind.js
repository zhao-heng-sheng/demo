Function.prototype.bind2 = function(obj, ...args) {
  let _this = this;
  let fn = function(...args2){
	  return _this.call(obj,...args,...args2)
  }
  return fn;
}
let obj = {
  name:"叮叮",
  age:"18",
}

let fn = function(a,b,c){
  console.log(this)
  console.log(this.name)
  console.log(a,b,c)
}
let newFn = fn.bind(obj,1,2)
newFn(3)