const puppeteer = require("puppeteer");
(async () => {
    let listObj = {};
    let sectionsElement = [];
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1920, height: 1080 },
    });
    const page = await browser.newPage();
    await page.goto("https://juejin.cn/book/7049273428938850307/section/7049661680644522023?enter_from=course_center&utm_source=course_center");
    page.on("requestfinished", async (req) => {
        if (req.resourceType() == "xhr" || req.resourceType() == "fetch") {
            // 目录获取完成
            if (req.url().indexOf("api.juejin.cn/booklet_api/v1/booklet/get") + 1) {
                sectionsElement = await page.$$(".section-list>.section .title-text");
                for(let item of (await req.response().json()).data.sections){
                    listObj[item.section_id] = item;
                    listObj[item.section_id]['element'] = sectionsElement.find(async elItem=>{
                        console.log(item.title, await (await elItem.getProperty('innerText')).jsonValue())
                       return item.title === await (await elItem.getProperty('innerText')).jsonValue()
                    })
                } 
                // (await req.response().json()).data.sections.forEach(async item=>{
                    
                // })
                console.log(listObj)
                // 移除遮挡元素，打印格式调整
                await page.evaluate(() => {
                    document.querySelector('.dark-mode-notification')?.remove();
                    document.querySelector('.book-content__header')?.remove();
                    document.querySelector('.book-handle')?.remove();
                    document.querySelector('.section-page').style.padding = '0';
                    document.querySelector('.book-body').style.padding = '0';
                    // document.querySelector('.step-btn--next')?.remove();
                    // element.style.display = 'none';
                });
                // (await page.$(".dark-mode-notification")).evaluate((node) => {
                //     console.log(node);
                // });
                // for(let section of sectionsElement){
                //     let index =  await (await (await section.$('.index')).getProperty('innerText')).jsonValue()
                //     let title =  await (await (await section.$('.title-text')).getProperty('innerText')).jsonValue()
                //     // console.log(index,title)
                // }
            }
            // 章节获取完成
            if (req.url().indexOf("api.juejin.cn/booklet_api/v1/section/get") + 1) {
                setTimeout(async () => {
                    console.log(req.postData())
                    await page.pdf({ path: "test.pdf", format: "A4" });

                }, 1200);
                // 关闭浏览器
                // await browser.close();
            }
        }
    });
    // page.evaluate(() => console.log('hello', 5, {foo: 'bar'}));
})();
