const fs = require('fs')
fs.appendFile('./data/座右铭.txt','\n座右铭是：我要做个有趣的人',(err)=>{
    console.log(err)
})
fs.appendFileSync('./data/座左铭.txt','\n座左铭是：我要做个无趣的人')
fs.writeFile('./data/座右铭.txt','\n座右铭是：我要做个有趣的人',{flag:'a'},(err)=>{
    console.log(err)
})