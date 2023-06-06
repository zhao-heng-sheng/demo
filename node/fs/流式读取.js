const fs = require('fs')
let rs = fs.createReadStream('./data/Docker2022.html')
rs.on('open',(data)=>{
    console.log(data)
    console.log('读取开始')
})
rs.on('data',(data)=>{
    // console.log(data.toString())
    console.log(data.length)
})
rs.on('end',(data)=>{
    console.log(data)
    console.log('读取结束')
})