class Counter {
    constructor(limit){
        this.limit = limit;
    }
    [Symbol.iterator](){
        let i =0;
        let limit = this.limit;
        return {
            next(){
                if(i<limit) return {value:++i,done:false}
                return {value:undefined,done:true}
            },
            return(){
                console.log('停止迭代');
                return {done:true,value:undefined}
            }
        }
    }
}
let counter = new Counter(3);
let iterator = counter[Symbol.iterator]();
let iterator2 = counter[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator2.next());
for(let i of counter){
    console.log(i);
    if(i>1) break;
}