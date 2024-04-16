let deepCopy = (obj) => {
	let newObj = {};
	let uniqueList = [];
	let loopList = [{
		parent: newObj,
		key: undefined,
		data: obj,
	}, ];
	while (loopList.length) {
		console.log(loopList);
		let node = loopList.pop()
		let key = null
		let data = null
		let parent = node
		if (Object.prototype.toString.call(node) === '[object Object]') {
			for (let i in node) {
				loopList.push({
					key: i,
					data: node[i],
					parent: node
				})
			}
		} else {
			parent[key] = node;
		}
	}
	return newObj;
}

let obj = {a:3,b:{c:3,d:1}}
let obj2 = deepCopy(obj)
console.log(obj2);