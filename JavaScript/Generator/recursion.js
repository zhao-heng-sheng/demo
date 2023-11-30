function *nTimes(n){
    if(n>0){
        //3 2 1
        console.log(yield *nTimes(n-1))
        // console.log(122);
        // yield n-1
    }
    //0
    yield n
}
let it = nTimes(3)
console.log(it.next());