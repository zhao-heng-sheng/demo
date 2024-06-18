class myPromise {
    constructor(fn) {
        this.state = "padding";
        this.result = null;
        try {
            fn(this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject(e);
        }
    }
    resolve(val) {
        if (this.state !== "padding") return;
        this.state = "fulfilled";
        this.result = val;
    }
    reject(error) {
        if (this.state !== "padding") return;
        this.state = "rejected";
        this.result = error;
    }
    static then(fn) {
        fn(this.result);
    }
}

let p = new myPromise((resolve, reject) => {
    resolve("111");
});
console.log(p)