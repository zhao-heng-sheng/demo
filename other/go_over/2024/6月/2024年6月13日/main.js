import puppeteer from "puppeteer";

let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
        width: 3000,
        height: 0,
    },
});
let page = await browser.newPage();
await page.goto("https://areschang.top/web/html/");
// await page.waitForNavigation({waitUntil:'networkidle2'})
await page.waitForSelector('.group')
await page.evaluate(()=>{
    let listItems = document.querySelectorAll('.group a')
    for(let a of listItems){
        if(a.textContent.includes('语义化')){
          a.click()
          break;
        }
    }
})