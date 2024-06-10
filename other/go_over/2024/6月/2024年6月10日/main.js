import icsToJson from "ics-to-json";
// import axios from 'axios'
// const res = (await axios.get('http://zhaohs.cn/class_timetable.ics'))
// // console.log(res.data)
// console.log(icsToJson(res.data))

const convert = async (fileLocation) => {
    const icsRes = await fetch(fileLocation);
    const icsData = await icsRes.text();
    // Convert
    const data = icsToJson(icsData);
    return data;
};
console.log(await convert("http://zhaohs.cn/class_timetable.ics"));
