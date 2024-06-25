Function.prototype.call2 = function(obj, ...args) {
  let key = Symbol()
  obj[key] = this;
  console.log(this)
  console.log(obj[key])
  let res = obj[key](...args)
  delete obj[key]
  return res;
};

let obj = {
	name:"叮叮",
	age:"18",
	gender:"男"
}
let fn = function(a,b,c){
  console.log(this)
	console.log(this.name)
	console.log(a,b,c)
}

fn.call2(obj,1,2,3);
