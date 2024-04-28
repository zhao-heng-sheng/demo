import fs from 'fs'
import * as cheerio from 'cheerio';
const html = fs.readFileSync('./source.html', 'utf8')
const color = '#FF0000'
const $ = cheerio.load(html)
const elements = $(`[style*="color:${color}"]`)
let keys = []
elements.each((i, element) => {
    keys.push($(element).text())
})
// 简单点，直接去重匹配所有key并替换
export default [...new Set(keys)]