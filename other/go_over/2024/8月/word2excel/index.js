import fs from "fs/promises";
import xlsx from "node-xlsx";
let res = await fs.readFile("./data/20天核心单词.txt", "utf-8");
// console.log(res.toString());
let data = res.toString().split("\r");
// console.log(data);
let exportData = [["name", "trans"]];
data.forEach((item) => {
  // let [word,mean] = item.split(' ');
  item = item.trim();
  if(!item||item.slice(0,1)=='D'||item.slice(0,2)=='a)') return;
  let name = item.split(" ")[1];
  let trans = item.split(" ").slice(2).join(" ");
  if (isNaN(Number(item.split(" ")[0]))) {
    name = item.split(" ")[0];
    trans = item.split(" ").slice(1).join(" ");
  }
  if(!name) return;
  if(name.indexOf('effortn')!=-1) {
    console.log(name,trans,'123')
  }
  if (name.indexOf(".") != -1) {
    trans = name.split(".").slice(1).join(' ') + trans;
    name = name.split(".")[0];
  }
  exportData.push([name, trans]);
});
// console.log(exportData);
let buffer =  xlsx.build([{ name: "sheet1", data: exportData }]);
await fs.writeFile("./data/20天核心单词.xlsx", buffer);