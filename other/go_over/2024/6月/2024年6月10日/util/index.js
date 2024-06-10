import icsToJson from "./icsToJson.js";

export const convert = async (fileLocation) => {
    const icsRes = await fetch(fileLocation);
    const icsData = await icsRes.text();
    // Convert
    const data = icsToJson(icsData);
    return data;
};
