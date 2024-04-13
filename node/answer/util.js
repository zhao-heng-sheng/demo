// 随机延迟执行函数
export const executeWithRandomDelay = (callback, ...args) => {
    return new Promise((resolve, reject) => {
        const delayTime = Math.random() * 10 + 1;

        setTimeout(() => {
            const result = callback(...args);
            resolve(result);
        }, delayTime * 1000);
    });
};
// 扁平化试题列表
export let topicListFlat = (topicList) => {
    let list = [];
    topicList.forEach((item) => {
        if (item.childList) {
            topicListFlat(item.childList);
        }
        list.push(item);
    });
    return list;
};
// 构造用于提交的试题答案
export let buildAnswers = (topicData) => {
    let answers = [];
    for (let item of topicData) {
        let answer = {
            id:item.id,
            topicType:item.courseTopicTypeCode,
            answer:'',
            attachments:''
        };

        if (item.childList) {
            answer = {id:item.id}
            answer.childList = buildAnswers(item.childList);
        }
        answers.push(answer);
    }
    return answers;
};
