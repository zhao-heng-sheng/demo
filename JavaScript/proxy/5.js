const target = {};
Object.defineProperty(target, "foo", {
    // get(val){
    //     console.log(val)
    //     return '111'
    // }
    configurable: false,
    writable: false,
    value: "bar",
});
const proxy = new Proxy(target, {
    get() {
        return "xxx";
    },
});
console.log(target.foo);
console.log(proxy.foo);
