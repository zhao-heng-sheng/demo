let deepCopy = (obj) => {
	let newObj = {};
	let uniqueList = [];
	let loopList = [{
		parent: newObj,
		key: undefined,
		data: obj,
	}, ];
	let count = 0;
	while (loopList.length&&count<10) {
		console.log(loopList,'1123');
		count++;
		let node = loopList.pop()
		let key = null
		let data = null
		let parent = node
		if (Object.prototype.toString.call(node) === '[object Object]') {
			console.log(node);
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