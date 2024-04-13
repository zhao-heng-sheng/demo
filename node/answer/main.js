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
    return topicList;
};
let getTopicData = async (courseId, topicId) => {
    let res = await loadTopicData({ courseId, topicId });
    return res;
};

(async () => {
    let topicList = await getTopicList(disciplines[0].id);
    // console.log(topicList, 'topicList');
    let topicData = await loadTopicData({ courseId: disciplines[0].id, topicId: topicList[0].id });
    console.log(topicData, "topicData");
})();
