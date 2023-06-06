const fs = require('fs')
fs.readFile('./data/观沧海.txt',(err,data)=>{
    console.log(err)
    console.log(data)
    console.log(data.toString())
})
let data = fs.readFileSync('./data/观沧海.txt')
console.log(data)
console.log(data.toString())