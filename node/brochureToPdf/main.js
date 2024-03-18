const puppeteer = require("puppeteer");
const { bookLinks } = require("./config");
const runCrawling = require("./runCrawling");
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // headless:true,
        defaultViewport: { width: 1920, height: 199999 },
    });
    for(bookLink of bookLinks){
        let res = await runCrawling(browser,bookLink);
        console.log(res);
    }
    browser.close();
})();
