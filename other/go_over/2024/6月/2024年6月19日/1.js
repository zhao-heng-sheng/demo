Promise.resolve().then(() => {
  // 微任务1
  console.log('Promise1')
  setTimeout(() => {
      // 宏任务2
      console.log('setTimeout2')
  }, 0)
})
setTimeout(() => {
  // 宏任务1
  console.log('setTimeout1')
  Promise.resolve().then(() => {
      // 微任务2
      console.log('Promise2')
  })
}, 0)
/* 
[p1,p2]
[s1,s2]
p1 s1 p2 s2
*/