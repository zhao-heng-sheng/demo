import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
        width: 0,
        height: 0,
    },
});
const page = await browser.newPage();
await page.goto("https://www.zhipin.com/web/geek/job?query=前端&city=100010000");
await page.waitForSelector('.job-list-box')
const res = await page.$eval('.options-pages a:nth-last-child(2)',el=>{
  return parseInt(el.innerText)
})
console.log(res)