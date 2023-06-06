const fs = require('fs')
let stat = fs.statSync('./data')
console.log(stat)
console.log(stat.isFile()  ) //判断是否是文件
console.log(stat.isDirectory() ) //判断是否是文件夹