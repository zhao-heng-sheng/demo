const fs = require('fs')
const process = require('process')
//直接读写
let dockerData = fs.readFileSync('./data/Docker2022.html')
let dockerData2 = fs.writeFileSync('./data/Docker2022-2.html',dockerData)
console.log(dockerData2)
console.log(process.memoryUsage())
//流式读写
let rs = fs.createReadStream('./data/Docker2022.html')
let ws = fs.createWriteStream('./data/Docker2022-3.html')
rs.on('data',(data)=>{
    ws.write(data)
})
rs.on('end',()=>{
    console.log(process.memoryUsage())
})
// 也可以这样写
let ws2 = fs.createWriteStream('./data/Docker2022-4.html')
rs.pipe(ws2)
console.log(process.memoryUsage())