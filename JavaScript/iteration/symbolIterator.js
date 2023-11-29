let num = 1;
let obj = {}
console.log(obj[Symbol.iterator]);
console.log(num[Symbol.iterator]);
let arr = [3,5,73,1]
console.log(arr[Symbol.iterator]);
let str = "hello"
console.log(str[Symbol.iterator]);
let map = new Map()
console.log(map[Symbol.iterator]);
let set = new Set()
console.log(set[Symbol.iterator]);