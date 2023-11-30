function *fun(){
    console.log('xxx');
    yield 1;
    console.log('yyy');
    yield 2;
}
let it = fun();
console.log(fun);
console.log(it);
it.next();
it.next();
