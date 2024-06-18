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

let fn = function(name,age,gender){
  console.log(this)
  console.log(this.name)
  this.gender = '男'
  console.log(a,b,c)
}
let newFn = fn.bind(obj,1,2)
newFn('男')