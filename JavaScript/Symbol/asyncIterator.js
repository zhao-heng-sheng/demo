class Foo {
    async *[Symbol.asyncIterator](){}
}
let f = new Foo();
console.log(f[Symbol.asyncIterator]());

class Emitter{
    constructor(max){
        this.max = max;
        this.asyncIdx = 0;
    }
    async *[Symbol.asyncIterator](){
        while(this.asyncIdx<this.max){
            yield new Promise(resolve=>resolve(this.asyncIdx++))
        }
    }
}
let a ={
    max:5,
    index:0,
    async *[Symbol.asyncIterator](){
        while(this.index<this.max){
            yield new Promise(resolve=>resolve(this.index++));
        }
    }
}
async function asyncCount(){
    let emitter = new Emitter(5);
    for await(const x of emitter){
        console.log(x);
    }
    for await(const y of a){
        console.log(y);
    }
}


asyncCount();
