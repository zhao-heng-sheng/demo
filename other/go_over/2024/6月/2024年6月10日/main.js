import { convert } from "./util/index.js";

let data = await convert("http://zhaohs.cn/class_timetable.ics");
console.log(data)