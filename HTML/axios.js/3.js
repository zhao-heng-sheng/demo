import axios from "axios";
let headers = {
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsInB2IjoxLCJyb2xlcyI6WyJhZG1pbiJdLCJpYXQiOjE3MDkyNTg1ODJ9.xlT_wXScHdO__XdPDliL4KA8ugsZ5xMRtVCzNjdgVqU",
    "content-type": "application/json",
    "sec-ch-ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    cookie: "locale=zh-cn",
    Referer: "https://localhost:8088/",
    "Referrer-Policy": "origin",
};
let arr = [
    { id: 1, orgName: "汇中保险公估股份有限公司", orgCode: "280407000000800", orgStatus: 1, orgType: "1", parentId: null, adminId: null, adminName: "魏辉雄、李剑斌", manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [{ fileName: "汇中公估营业执照副本2-1.pdf", fileLocation: "local/e90a08af-a169-44ac-b2d8-5405d66c32cd.pdf", fileUrl: "https://gonggutong-prod.oss-cn-hangzhou.aliyuncs.com/local/e90a08af-a169-44ac-b2d8-5405d66c32cd.pdf?Expires=1709259886&OSSAccessKeyId=LTAI5tDVSsNhfB9vdLBhtMvg&Signature=mGVNkY1SDhlN5%2F83ILR4gvzH3eI%3D", fileThumbnail: null }] },
    { id: 4, orgName: "汇中保险公估股份有限公司广东分公司", orgCode: "280407440184800", orgStatus: 1, orgType: "2", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
    { id: 7, orgName: "汇中保险公估股份有限公司东莞分公司", orgCode: "280407441900800", orgStatus: 1, orgType: "3", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
    { id: 10, orgName: "汇中保险公估股份有限公司云南分公司", orgCode: "280407530000800", orgStatus: 1, orgType: "2", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
    { id: 13, orgName: "汇中保险公估股份有限公司海南分公司", orgCode: "280407460000800", orgStatus: 1, orgType: "2", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
    { id: 16, orgName: "汇中保险公估股份有限公司佛山分公司", orgCode: "280407440000800", orgStatus: 1, orgType: "3", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
    { id: 19, orgName: "汇中保险公估股份有限公司广西分公司", orgCode: "280407450103800", orgStatus: 1, orgType: "2", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
    { id: 22, orgName: "汇中保险公估股份有限公司深圳分公司", orgCode: "280407440304800", orgStatus: 1, orgType: "3", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
    { id: 25, orgName: "汇中保险公估股份有限公司贵阳分公司", orgCode: "280407520000800", orgStatus: 1, orgType: "2", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
    { id: 28, orgName: "汇中保险公估股份有限公司四川分公司", orgCode: "280407510000800", orgStatus: 1, orgType: "2", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
    { id: 31, orgName: "汇中保险公估股份有限公司河南分公司", orgCode: "280407410105800", orgStatus: 1, orgType: "2", parentId: null, adminId: null, adminName: null, manageName: null, managePhone: null, areaCode: null, officeOnly: 1, regulatoryId: 37, ossAttachmentList: [] },
];
for (let i = 0; i < arr.length; i++) {
    let data = arr[i];
    let res = await axios.post(
        "http://127.0.0.1:7001/api/system/depts",
        {
            orgName: data.orgName,
            orgCode: data.orgCode,
            orgStatus: data.orgStatus,
            orgType: data.orgType,
            parentId: data.parentId,
            adminName:data.adminName,
            manageName:data.manageName,
            managePhone:data.managePhone,
            files:data.ossAttachmentList.map(item=>{
              return {
                url:item.fileUrl,
                name:item.fileName,
              }
            })
        },
        {
            headers: headers,
        }
    );
    console.log(res);
}
