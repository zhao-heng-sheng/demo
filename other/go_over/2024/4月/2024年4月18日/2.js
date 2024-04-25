// 队列
const queue = []
queue.push('一姐')
queue.push('二姐')
queue.push('三姐')
let arr = []
while(queue.length){
  const current = queue.shift()
  arr.push(current)
  console.log('排到' + current+'了');
}
console.log(arr);