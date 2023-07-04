const fs = require('fs')
let stat = {}
try{
    stat = fs.statSync('./date')
}catch{
    stat = fs.mkdirSync('./date',{ recursive: true })
}
console.log(stat)
console.log(stat.isFile()  ) //判断是否是文件
console.log(stat.isDirectory() ) //判断是否是文件夹