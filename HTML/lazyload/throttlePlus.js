function throttlePlus(fn, delay) {
    let last = 0,
        timer = null;
    return function () {
        let context = this;
        let args = arguments;
        let now = +new Date();
        if (now - last >= delay) {
            last = now;
            fn.apply(context, args);
        } else {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, delay);
        }
    };
}
