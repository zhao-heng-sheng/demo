import { disciplines } from "./data.js";
import {topicListFlat} from "./util.js";
import { loadTopicListData, loadTopicData, saveQuestion, getQuestion } from "./api.js";

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
    let { topic } = await loadTopicData({ courseId, topicId });

    // 保存试题
    if (topic.state == "02") {
        let topicList = topicListFlat(topic.topicItems);
        for (let item of topicList) {
            let question = await getQuestion(item.id);
            if (!question) {
                saveQuestion(item)
            }
        }
    }
    // 1提交  2重做
    let submitType = topic.state == "11" ? "1" : topic.state == "02"&&topic.topicScore<80 ? "2" : "0";
    return {
      topicList: topic.topicItems,
      submitType
    }
};


(async () => {
    let topicList = await getTopicList(disciplines[0].id);
    let topicData = await getTopicData(disciplines[0].id, topicList[0].id);
    console.log(topicData, "topicData");

})();
