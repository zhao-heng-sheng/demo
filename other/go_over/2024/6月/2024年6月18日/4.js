Function.prototype.bind2 = function (obj, ...args) {
    let _this = this;
    let fn = function (...args2) {
        if(new.target===fn) return _this.call(this,...args,...args2)
        return _this.apply(obj, args.concat(args2));
    };
    fn.prototype = Object.create(this.prototype);
    return fn;
};


var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind2(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin