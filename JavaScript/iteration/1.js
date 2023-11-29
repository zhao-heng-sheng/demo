//可迭代对象
let arr = [3,5,73,1]
//迭代器工厂函数
console.log(arr[Symbol.iterator]);
//迭代器
let iterator = arr[Symbol.iterator]();
console.log(iterator);
//执行迭代
console.log(iterator.next());
console.log(iterator.next());