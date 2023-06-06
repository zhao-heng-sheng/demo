//新建 座右铭.txt 写入内容
const { log } = require('console')
const fs = require('fs')
// 异步
fs.writeFile('./data/座右铭.txt','座右铭是：我要做个有趣的人',(err)=>{
    console.log(err)
})
console.log(1+1)
// 同步
let err =fs.writeFileSync('./data/座左铭.txt','座左铭是：我要做个无趣的人')
console.log(err)