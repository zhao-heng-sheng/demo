import axios from "axios";
import fs from "fs";
let headers1 = {
    accept: "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ3ZWIiLCJuYmYiOjE3MDkyMDA4MzUsImlzcyI6IkdPTkdfR1VfQkFDS0VORF9BUEkiLCJsdCI6IndlYiIsImV4cCI6MTcwOTI4NzIzNSwiaWF0IjoxNzA5MjAwODM1LCJsaSI6IntcImlkXCI6NTQ5MSxcImlzc3VlZEF0XCI6MTcwOTIwMDgzNTUwNCxcImxvZ2luTmFtZVwiOlwiTjAwMDcwN1wiLFwibG9naW5UaW1lXCI6MTcwOTI1NjYwMDcyNyxcImxvZ2luVHlwZVwiOlwiV0VCXCIsXCJuYW1lXCI6XCLmm77pk7bnjqVcIixcInJlZGlzS2V5XCI6XCIzNF8yX04wMDA3MDdcIixcInRlbmFudElkXCI6MzQsXCJ1c2VySWRcIjoxOSxcInVzZXJUeXBlXCI6XCJVU0VSX0VNUExPWUVFXCJ9IiwianRpIjoiZDM1MjRhY2QtZmExOC00NDEyLWIzNDItYmU1NTcxN2UwZjkwIn0.dDeFAz26H7YhmjCeDq9KEjMfCJOEAcSBJrrQbNUUVXQ",
    "sec-ch-ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    Referer: "https://admin.surveyor.zhibaocloud.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
};
let list = [
  {
      "id": 1,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司",
      "orgCode": "280407000000800",
      "orgStatus": 1,
      "orgType": "1",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 4,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司广东分公司",
      "orgCode": "280407440184800",
      "orgStatus": 1,
      "orgType": "2",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 7,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司东莞分公司",
      "orgCode": "280407441900800",
      "orgStatus": 1,
      "orgType": "3",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 10,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司云南分公司",
      "orgCode": "280407530000800",
      "orgStatus": 1,
      "orgType": "2",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 13,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司海南分公司",
      "orgCode": "280407460000800",
      "orgStatus": 1,
      "orgType": "2",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 16,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司佛山分公司",
      "orgCode": "280407440000800",
      "orgStatus": 1,
      "orgType": "3",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 19,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司广西分公司",
      "orgCode": "280407450103800",
      "orgStatus": 1,
      "orgType": "2",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 22,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司深圳分公司",
      "orgCode": "280407440304800",
      "orgStatus": 1,
      "orgType": "3",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 25,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司贵阳分公司",
      "orgCode": "280407520000800",
      "orgStatus": 1,
      "orgType": "2",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 28,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司四川分公司",
      "orgCode": "280407510000800",
      "orgStatus": 1,
      "orgType": "2",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  },
  {
      "id": 31,
      "employeeId": null,
      "orgName": "汇中保险公估股份有限公司河南分公司",
      "orgCode": "280407410105800",
      "orgStatus": 1,
      "orgType": "2",
      "parentId": null,
      "adminId": null,
      "manageName": null,
      "managePhone": null,
      "areaCode": null
  }
];
let arr = [];
for (let i = 0; i < list.length; i++) {
    let res = await axios.get(`https://admin.surveyor.zhibaocloud.com/businessOrg/detail/${list[i].id}`, {
        headers: headers1,
    });
    arr.push(res.data.data);
}
console.log(arr);
fs.writeFileSync("data.json", JSON.stringify(arr));
