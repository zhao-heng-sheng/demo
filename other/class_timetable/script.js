"use strict";
const fs = require("fs");
// 引入node-xlsx
const xlsx = require("node-xlsx");
// 读取excel文件
let rateXlsx = xlsx.parse(__dirname + "/1.xlsx")[0].data;
console.log(rateXlsx);
debugger;
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
            let insuredAge = rateArr[i][0],
                gender = getGenderCode(rateArr, j),
                chargeCode = getChargeCode(rateArr[3][j]),
                ageClaim = getAgeClaim(rateArr),
                coefficient = getCoefficient(rateArr);
            if ((rateArr[i][j] && rateArr[i][j] == "面授" && rateArr[i][j] == "Z") || rateArr[i][j] == "z") {
                data.push([insuredAge, gender, chargeCode, ageClaim, coefficient, ":", rateArr[i][j]]);
                hash[`insuredAge_${insuredAge}|gender_${gender}|chargeCode_${chargeCode}|annuityReceivingAge_${ageClaim}|coefficient_${coefficient}`] = rateArr[i][j];
            }
        }
    }
    return data;
};
let buildData = [];
let hash = {};
buildData.push(...pushDate(rateXlsx, 5, rateXlsx.length - 1));

// 主题 开始日期 开始时间 结束日期 结束时间 位置 说明
buildData.unshift(["Subject", "StartDate", "EndDate", "StartTime", "EndTime", "Location", "Description"]);

var buffer = xlsx.build([{ name: "table1", data: buildData }]);
var filePath = __dirname + "/newXlsx.xlsx";
fs.writeFileSync(filePath, buffer, { flag: "w" });
