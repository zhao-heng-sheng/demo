function throttle(fn,interval){
    //保存上一次触发回调的时间
    let last = 0;
    //将throttle处理结果当作函数返回
    return function(){
        //保留调用时的this上下文
        let context = this;
        //保留调用时传入的参数
        let args = arguments;
        //记录本次触发回调的时间
        let now = +new Date();
        //判断上次触发的时间和本次触发的时间差是否小于时间间隔
        if(now-last>=interval){
            //如果时间间隔大于我们设定的时间间隔就执行回调
            last = now;
            fn.apply(context,args);
        }
    }
}