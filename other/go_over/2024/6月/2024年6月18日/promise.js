/* 
1. then接收两个回调，一个是成功回调，一个是失败回调；
2. 当Promise状态为fulfilled执行成功回调，为rejected执行失败回调；
3. 如resolve或reject在定时器里，则定时器结束后再执行then；
4. then支持链式调用，下一次then执行受上一次then返回值的影响；
*/
class MyPromise {
    constructor(executor) {
        this.state = "padding";
        this.result = null;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        try {
            executor(this.resolve, this.reject);
        } catch (e) {
            this.reject(e);
        }
    }
    resolve(val) {
        if (this.state !== "padding") return;
        this.state = "fulfilled";
        this.result = val;
        this.onFulfilledCallbacks.forEach((cb) => cb(this.result));
    }
    reject(error) {
        if (this.state !== "padding") return;
        this.state = "rejected";
        this.result = error;
        this.onRejectedCallbacks.forEach((cb) => cb(this.result));
    }
    then(onFulfilled, onRejected) {
        if (this.state === "fulfilled") {
            onFulfilled(this.result);
        }
        if (this.state === "rejected") {
            onRejected(this.result);
        }
        if(this.state === "padding") {
            this.onFulfilledCallbacks.push(onFulfilled.bind(this));
            this.onRejectedCallbacks.push(onRejected.bind(this));
        }
        return 1;
    }
}
const test2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success') // 1秒后输出 success
    }, 1000)
}).then(res => console.log(res), err => console.log(err))
