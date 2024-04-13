// 随机延迟执行函数
export const executeWithRandomDelay = (callback,...args) => {
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
        if (item.children) {
            topicListFlat(item.children);
        }
        list.push(item);
    });
    return list;
};
