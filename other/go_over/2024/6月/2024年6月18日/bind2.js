Function.prototype.bind2 = function (obj, ...args) {
    let _this = this;
    let fn = function (...args2) {
        console.log(this,'123')
        if(new.target===fn) return this.call({},...args,...args2)
        return _this.call(obj, ...args, ...args2);
    };
    return fn;
};
var value = 2;

var foo = {
    value: 1,
};

function bar(name, age) {
    this.habit = "shopping";
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = "kevin";

var bindFoo = bar.bind2(foo, "daisy");

var obj = new bindFoo("18");
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
