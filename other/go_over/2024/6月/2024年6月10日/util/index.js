import icsToJson from "./icsToJson.js";
/* 
{
    startDate: '2024-04-13 12:05:00',
    endDate: '2024-04-13 14:55:00',
    description: '中国近代史纲要*-线上',
    location: '线上',
    summary: '中国近代史纲要*'
  }
*/
export const convert = async (fileLocation) => {
    const icsRes = await fetch(fileLocation);
    const icsData = await icsRes.text();
    // Convert
    const data = icsToJson(icsData);
    return data;
};
