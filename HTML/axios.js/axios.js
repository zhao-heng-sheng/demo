import axios from "axios";
let codeArr = await axios.get('https://testopr.99bx.cn/product/product/list',{
    
    headers:{
        authority:'testopr.99bx.cn',
        authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NzU3ODM3NWNiNzg3NWE3MTM4OGE2YjkiLCJ1c2VybmFtZSI6InpodWJpYW8iLCJzY29wZSI6WyJCQVNJQ19MQVdfQURNSU4iLCJCX0NIQU5ORUwiLCJDSEFOTkVMX0NPTU1fQ0hFQ0siLCJDSE5MQ09OVFIiLCJERUxFVEVfQ19ST0xFIiwiRFdGWSIsIkVYUE9SVF9DX1JPTEUiLCJFWFBPUlRfUF9ST0xFX09CIiwiRklOQ09OVFIiLCJGWVlNIiwiSU5fT1VUX1BQIiwiUE9MSUNZX0lORk9fUk9MRSIsIlJHX09fUk9MRSIsIlJPTEVfQURNSU4iLCJST0xFX0JSQU5DSF9BRE1JTiIsIlJPTEVfQ01TIiwiUk9MRV9KRF9aWVMiLCJST0xFX09SR19BRE1JTiIsIlJPTEVfVVNFUiIsIlJPTEVfV0VBU0VMX0NVU1RPTUVSX1NFUlZJQ0UiLCJTWkJCUSIsIlRSQUNLX1JPTEUiLCJYSERLRiIsIlhKR0xSIiwiWFlZWkciLCJYWkJZWSJdLCJleHAiOjE3MDI4NjI2MzAsImlhdCI6MTcwMTY1MzAzMH0.Lt_kquTtT0k8jIRy5IkdyFldVKIH938KX5GkmaXTnp0',
        'content-type':'application/json;charset=UTF-8',
        cookie:'oprsid=s%3A8asvo2S-GNWOiZI8drvCiUv5K7ZQFPa4.mz6sUfK%2FFZam2o6E7BxeewHTvhBrFJNjc0zvMMmcNZU; ng_cookie=c0ad082129d6da2905f474b044436a8f',
        token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NzU3ODM3NWNiNzg3NWE3MTM4OGE2YjkiLCJ1c2VybmFtZSI6InpodWJpYW8iLCJzY29wZSI6WyJCQVNJQ19MQVdfQURNSU4iLCJCX0NIQU5ORUwiLCJDSEFOTkVMX0NPTU1fQ0hFQ0siLCJDSE5MQ09OVFIiLCJERUxFVEVfQ19ST0xFIiwiRFdGWSIsIkVYUE9SVF9DX1JPTEUiLCJFWFBPUlRfUF9ST0xFX09CIiwiRklOQ09OVFIiLCJGWVlNIiwiSU5fT1VUX1BQIiwiUE9MSUNZX0lORk9fUk9MRSIsIlJHX09fUk9MRSIsIlJPTEVfQURNSU4iLCJST0xFX0JSQU5DSF9BRE1JTiIsIlJPTEVfQ01TIiwiUk9MRV9KRF9aWVMiLCJST0xFX09SR19BRE1JTiIsIlJPTEVfVVNFUiIsIlJPTEVfV0VBU0VMX0NVU1RPTUVSX1NFUlZJQ0UiLCJTWkJCUSIsIlRSQUNLX1JPTEUiLCJYSERLRiIsIlhKR0xSIiwiWFlZWkciLCJYWkJZWSJdLCJleHAiOjE3MDI4NjI2MzAsImlhdCI6MTcwMTY1MzAzMH0.Lt_kquTtT0k8jIRy5IkdyFldVKIH938KX5GkmaXTnp0'
    },
    params:{
        page: 1,
        pageSize: 999,
        providerCode: 'HTCX:华泰财险',
        providerId: '5498c85a985805def272a4e1'
    },
})
console.log(codeArr);