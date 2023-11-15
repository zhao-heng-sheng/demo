
function debounce(fn,delay){
    let timer = null;
    return function(){
        let context =this;
        let args = arguments;
        // 每次事件被触发时，都去清除之前的旧定时器
        if(timer){
            clearTimeout(timer);
        }
        // 设立新定时器
        timer = setTimeout(function(){
            fn.apply(context,args);
        },delay)
    }
}