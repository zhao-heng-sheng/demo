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
// function executeWithRandomDelay(callback) {
//     // 生成 1 到 10 之间的随机延迟时间（单位：秒）
//     const delayTime = Math.random() * 10 + 1;

//     setTimeout(() => {
//         const result = callback();
//         return result;
//     }, delayTime * 1000);
// }
