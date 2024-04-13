import { disciplines } from "./data.js";
import { loadTopicListData, loadTopicData, saveAnswer, getAnswer } from "./api.js";

let getTopicList = async (courseId) => {
    let limit = 10;
    let countPage = 1;
    let totalCount = 0;
    let topicList = [];
    let firstRes = await loadTopicListData({ courseId, pageIndex: 1 });
    topicList.push(...firstRes.topics);
    totalCount = firstRes.totalCount;
    countPage = Math.ceil(totalCount / limit);
    let res = await Promise.all([...Array(countPage - 1).keys()].map((i) => loadTopicListData({ courseId, pageIndex: i + 2 })));
    res.forEach((item) => {
        topicList.push(...item.topics);
    });
    // 筛选  
    // topicMoldCode:   Normal平时  End期末
    // state: 11待提交 02已批阅
    let states = ["11", "02"];
    return topicList.filter((item) => item.topicMoldCode === "Normal" && states.includes(item.state));
};
let getTopicData = async (courseId, topicId) => {
    console.log(courseId, topicId);
    let res = await loadTopicData({ courseId, topicId });
    console.log(res);
    return res;
};

(async () => {
    let topicList = await getTopicList(disciplines[0].id);

    let topicData = await getTopicData(disciplines[0].id, topicList[0].id);
    // console.log(topicData, "topicData");
})();
