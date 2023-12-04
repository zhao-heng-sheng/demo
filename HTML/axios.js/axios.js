import axios from "axios"
let headers = {
    authority: "testopr.99bx.cn",
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NzU3ODM3NWNiNzg3NWE3MTM4OGE2YjkiLCJ1c2VybmFtZSI6InpodWJpYW8iLCJzY29wZSI6WyJCQVNJQ19MQVdfQURNSU4iLCJCX0NIQU5ORUwiLCJDSEFOTkVMX0NPTU1fQ0hFQ0siLCJDSE5MQ09OVFIiLCJERUxFVEVfQ19ST0xFIiwiRFdGWSIsIkVYUE9SVF9DX1JPTEUiLCJFWFBPUlRfUF9ST0xFX09CIiwiRklOQ09OVFIiLCJGWVlNIiwiSU5fT1VUX1BQIiwiUE9MSUNZX0lORk9fUk9MRSIsIlJHX09fUk9MRSIsIlJPTEVfQURNSU4iLCJST0xFX0JSQU5DSF9BRE1JTiIsIlJPTEVfQ01TIiwiUk9MRV9KRF9aWVMiLCJST0xFX09SR19BRE1JTiIsIlJPTEVfVVNFUiIsIlJPTEVfV0VBU0VMX0NVU1RPTUVSX1NFUlZJQ0UiLCJTWkJCUSIsIlRSQUNLX1JPTEUiLCJYSERLRiIsIlhKR0xSIiwiWFlZWkciLCJYWkJZWSJdLCJleHAiOjE3MDI4NjI2MzAsImlhdCI6MTcwMTY1MzAzMH0.Lt_kquTtT0k8jIRy5IkdyFldVKIH938KX5GkmaXTnp0",
    origin: "https://testopr.99bx.cn",
    referer: "https://testopr.99bx.cn/",
    "sec-ch-ua": '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NzU3ODM3NWNiNzg3NWE3MTM4OGE2YjkiLCJ1c2VybmFtZSI6InpodWJpYW8iLCJzY29wZSI6WyJCQVNJQ19MQVdfQURNSU4iLCJCX0NIQU5ORUwiLCJDSEFOTkVMX0NPTU1fQ0hFQ0siLCJDSE5MQ09OVFIiLCJERUxFVEVfQ19ST0xFIiwiRFdGWSIsIkVYUE9SVF9DX1JPTEUiLCJFWFBPUlRfUF9ST0xFX09CIiwiRklOQ09OVFIiLCJGWVlNIiwiSU5fT1VUX1BQIiwiUE9MSUNZX0lORk9fUk9MRSIsIlJHX09fUk9MRSIsIlJPTEVfQURNSU4iLCJST0xFX0JSQU5DSF9BRE1JTiIsIlJPTEVfQ01TIiwiUk9MRV9KRF9aWVMiLCJST0xFX09SR19BRE1JTiIsIlJPTEVfVVNFUiIsIlJPTEVfV0VBU0VMX0NVU1RPTUVSX1NFUlZJQ0UiLCJTWkJCUSIsIlRSQUNLX1JPTEUiLCJYSERLRiIsIlhKR0xSIiwiWFlZWkciLCJYWkJZWSJdLCJleHAiOjE3MDI4NjI2MzAsImlhdCI6MTcwMTY1MzAzMH0.Lt_kquTtT0k8jIRy5IkdyFldVKIH938KX5GkmaXTnp0",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0",
    Cookie: "oprsid=s%3A8asvo2S-GNWOiZI8drvCiUv5K7ZQFPa4.mz6sUfK%2FFZam2o6E7BxeewHTvhBrFJNjc0zvMMmcNZU; ng_cookie=c0ad082129d6da2905f474b044436a8f",
    "content-type": "application/json;charset=UTF-8",
}
let products = []
let pageCount
let getProducts = async (page, providerCode, providerId) => {
    let res = await axios.get("https://testopr.99bx.cn/product/product/list", {
        headers,
        params: {
            page,
            providerCode,
            providerId,
        },
    })
    pageCount = res.data.data.pageCount
    products.push(...res.data.data.product)
}
await getProducts(1, "HTCX:华泰财险", "5498c85a985805def272a4e1")
for (let i = 2; i <= pageCount; i++) {
    await getProducts(i, "HTCX:华泰财险", "5498c85a985805def272a4e1")
}
console.log(products.length)
let codeArr = products.map((element) => {
    return element.productCode
})
console.log(codeArr)
for (let i = 0; i < codeArr.length; i++) {
    let res = await axios({
        headers,
        method: "post",
        url: "https://testopr.99bx.cn/product/releasePro/syncProduct",
        data: {
            code: codeArr[i],
        },
    })
    console.log(res.data)
    if (i == codeArr.length - 1) {
        console.log("同步完成")
    }
}

// let res = await axios({
//     method: "post",
//     url: "https://testopr.99bx.cn/product/releasePro/syncProduct",
//     headers,
//     data: {
//         code: "HTCXHWDZHYWXPLUS",
//     },
// })
// console.log(res.data)
