const o = {}
// // try{
//     Object.defineProperty(o, 'foo', '123')
//     console.log('123')
// // }catch(e){
//     console.log('xxx')
// // }


if(Reflect.defineProperty(o,'foo','123')){
    console.log('123')
}
console.log(o.foo)