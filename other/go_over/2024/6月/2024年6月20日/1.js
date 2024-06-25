let curry = (fn) => {
	let length = fn.length
	let argArr = []
	let storeFn =  (...args) => {
		argArr.push(...args)
		if (argArr.length >= length) return fn(...argArr)
		return storeFn
	}
	return storeFn
};

let fn = (a, b, c) => a + b + c;

let a = curry(fn);

console.log(a(1,1)(5))