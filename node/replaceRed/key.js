import fs from 'fs'
import * as cheerio from 'cheerio';
import {escapeRegExpString} from './util.js'
const html = fs.readFileSync('./source.html', 'utf-8')
// console.log(html);
const color = '#ff3300'
const $ = cheerio.load(html)
const elements = $(`[style*="${color}"]`)
// const elements = $(`#u372`)
let keys = []
elements.each((i, element) => {
    if($(element).text()){
        keys.push(escapeRegExpString($(element).text()))
    }
})
console.log(keys);
// 简单点，直接去重,匹配所有key并替换
export default [...new Set(keys)]