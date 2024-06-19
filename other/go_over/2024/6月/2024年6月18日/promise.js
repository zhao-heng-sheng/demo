/* 
1. then接收两个回调，一个是成功回调，一个是失败回调；
2. 当Promise状态为fulfilled执行成功回调，为rejected执行失败回调；
3. 如resolve或reject在定时器里，则定时器结束后再执行then；
4. then支持链式调用，下一次then执行受上一次then返回值的影响；

1. then方法本身会返回一个新的Promise对象；
2. 如果返回值是promise对象，返回值为成功，新promise就是成功；
3. 如果返回值是promise对象，返回值为失败，新promise就是失败；
4. 如果返回值非promise对象，新promise对象就是成功，值为此返回值；
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
        let thenPromise = new MyPromise((resolve, reject) => {
            const resolvePromise = (cb) => {
                try {
                    const x = cb(this.result);
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject);
                    }
                    resolve(x);
                } catch (error) {
                    reject(err);
                    throw new Error(err);
                }
            };
            if (this.state === "fulfilled") {
                resolvePromise(onFulfilled);
            }
            if (this.state === "rejected") {
                resolvePromise(onRejected);
                // onRejected(this.result);
            }
            if (this.state === "padding") {
                this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled));
                this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected));
            }
        });

        return thenPromise;
    }
}

const test3 = new MyPromise((resolve, reject) => {
    resolve(100); // 输出 状态：success 值： 200
})
    .then(
        (res) => 2 * res,
        (err) => 3 * err
    )
    .then(
        (res) => console.log("success", res),
        (err) => console.log("fail", err)
    );

const test4 = new MyPromise((resolve, reject) => {
    resolve(100); // 输出 状态：fail 值：200
})
    .then(
        (res) => new MyPromise((resolve, reject) => reject(2 * res)),
        (err) => new Promise((resolve, reject) => resolve(3 * err))
    )
    .then(
        (res) => console.log("success", res),
        (err) => console.log("fail", err)
    );
