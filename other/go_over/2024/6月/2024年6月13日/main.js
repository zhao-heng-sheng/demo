import puppeteer from "puppeteer";

let browser =  await puppeteer.launch({
    headless: false,
    defaultViewport: {
        width: 0,
        height: 0,
    },
});
let page = await browser.newPage();
await page.goto("https://www.baidu.com/s?wd=classin&rsv_spt=1&rsv_iqid=0xd3f05a1e0010296e&issp=1&f=3&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=&tn=68018901_16_pg&ch=&rsv_enter=1&rsv_btype=i&prefixsug=&rsp=0&rsv_dl=ih_0");

await page.waitForSelector('.c-container')
let a = await page.$eval('.c-container  h3', (el) =>{
  console.log(el)
  return el
})
console.log(a)