// 栈
let arr = new Array()
arr.push('光明奶砖')
arr.push('小布丁')
arr.push('大头')
arr.push('碎冰冰')
let sell = []
console.log(arr);
while (arr.length){
  let currentSell = arr.pop()
  console.log('卖出了：' + currentSell);
  sell.push(currentSell)
}
console.log(sell);