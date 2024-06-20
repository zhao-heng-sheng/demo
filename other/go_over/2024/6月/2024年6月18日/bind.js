Function.prototype.bind2 = function(obj, ...args) {
  let _this = this;
  let prototype = {}
  let fn = function(...args2){
    console.log(new.target,'111')
    console.log(this,'222')
    if(new.target===fn) return _this.call(prototype,...args,...args2)
	  return _this.call(obj,...args,...args2)
  }
  return fn;
}
let obj = {
  name:"叮叮",
  age:"18",
}

let fn = function(a,b,c){
  this.gender = a
  console.log(this)
  console.log(this.name)
  console.log(a,b,c)
}
let newFn = fn.bind2(obj,1,2)

let a = new newFn(3)
let b = new newFn(1)
console.log(a)