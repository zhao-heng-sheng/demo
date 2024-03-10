"use strict";
const fs = require("fs");
// 引入node-xlsx
const xlsx = require("node-xlsx");
const dayjs = require("dayjs");
// 读取excel文件
let rateXlsx = xlsx.parse(__dirname + "/1.xlsx")[0].data;

let dateDispose = function (text) {
    console.log(text);
    let arr = text.split("\n");
    // console.log(arr);
    if (arr.length == 1) return dayjs(`${dayjs().year()}/${arr[0]}`).format("DD/MM/YYYY");
    if (arr.length == 2) return dayjs(`${dayjs().year()}/${arr[1]}`).format("DD/MM/YYYY")
};
/**
 *
 * @param {Array} rateArr  表格数据
 * @param {number} min  开始位置
 * @param {number} max  结束位置
 * @returns {array}
 */
let pushDate = function (rateArr, min, max) {
    min = min - 1;
    let data = [];
    for (let i = min; i < max; i++) {
        //行循环
        for (let j = 12; j < rateArr[i].length; j++) {
            //列循环
            let subject = rateArr[i][2],
                startTime = rateArr[i][10].split("-")[0],
                endTime = rateArr[i][10]?.split("-")[1]?.split("(")[0];
            if (rateArr[i][j]) {
                let startDate = dateDispose(rateArr[2][j]),
                    endDate = dateDispose(rateArr[2][j]),
                    location = rateArr[i][j].indexOf("面授") + 1 ? "面授" : "线上";
                data.push([subject, startDate,startTime, endDate,  endTime, "FALSE",`${subject}-${location}`,location]);
            }
        }
    }
    return data;
};
let buildData = [];
let hash = {};
buildData.push(...pushDate(rateXlsx, 5, rateXlsx.length - 1));

// 主题 开始日期 开始时间 结束日期 结束时间 位置 说明
buildData.unshift(["Subject", "Start Date","Start Time", "End Date",  "End Time","All Day" , "Description","Location"]);

var buffer = xlsx.build([{ name: "table1", data: buildData }]);
var filePath = __dirname + "/newXlsx.xlsx";
fs.writeFileSync(filePath, buffer, { flag: "w" });
