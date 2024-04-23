/* 
真题描述：给你一个包含n个整数的数组nums,判断nums中是否存在三个元素a, b, c ,使得a + b + c = 0 ?请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。
*/
/* 
示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
*/
let nums = [-1, 0, 1, 2, -1, -4];

let fn = (nums) => {
	let res = [];
	let arr = nums.sort((a, b) => a - b);
	let i = arr.length - 1;
	let k = arr[0]
	for (let i = 0; i < arr.length; i++) {
		let j = i + 1;
		let k = arr.length - 1;
		let count = arr[i] + arr[j] + arr[k];
		if (count === 0) res.push([arr[i], arr[j], arr[k]])
		else {
			while (j == 0) {
				let count = arr[i] + arr[j] + arr[k];
				if (count > 0) {
					k--
				}
				if (count < 0) j++
				if (count == 0) res.push([arr[i], arr[j], arr[k]])
			}
		}
	}
};