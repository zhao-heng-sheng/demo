let arr = ['a','b','c']
arr[Symbol.iterator] = function *(){
    yield 1;
    yield 2;
    yield 3;
}
for(let item of arr){
    console.log(item);
}