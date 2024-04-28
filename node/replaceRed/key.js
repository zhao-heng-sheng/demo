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

export default keys