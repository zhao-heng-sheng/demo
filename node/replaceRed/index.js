import keys from "./key.js"
import fs from 'fs'
let targetHtml = fs.readFileSync('./target.html', 'utf8')
let reg = new RegExp(keys.join("|"),"g")
let res = targetHtml.replace(reg,`<span class="red">$&</span>`)

fs.writeFileSync('./result.html', res)