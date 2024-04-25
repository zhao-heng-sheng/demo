//给定一个整数数组nums和一个目标值target,请你在该数组中找出和为目标值的那两个整数，
//并返回他们的数组下标。你可以假设每种输入只会对应一个答案。
//但是，你不能重复利用这个数组 中同样的元素
let nums = [2, 7, 11, 15]
let target = 9

let fn = (nums, target) => {
  let map = new Map();
  let length = nums.length
  for (let i = 0; i < length; i++) {
    let diffKey = map.get(target - nums[i])
    console.log(diffKey)
    if (diffKey || diffKey == 0) return [i, diffKey]
    map.set(nums[i], i)
  }
}
console.log(fn(nums, target))