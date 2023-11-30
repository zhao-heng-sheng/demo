function *nTimes(n){
    if(n>0){
        yield *nTimes(n-1)
        yield n-1
    }
}
let it = nTimes(3)
console.log(it.next());
// console.log(it.next());
// console.log(it.next());