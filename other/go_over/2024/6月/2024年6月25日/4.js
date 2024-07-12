function asyncToGen(generatorFunc) {
  let gen = generatorFunc();
  let next = gen.next();
  let fn = function(next){
    if(next.done){
      return Promise.resolve(next.value);
    }
    return Promise.resolve(next.value).then((res)=>{
      return fn(gen.next(res));
    })
  }
  return ()=>fn(next)
}
const getData = () => new Promise((resolve) => setTimeout(() => resolve("data"), 2000));
function* testG() {
    const data = yield getData();
    console.log("data: ", data);
    const data2 = yield getData();
    console.log("data2: ", data2);
    return "success";
}

const gen = asyncToGen(testG);
console.log(gen);
gen().then((res) => console.log(res));
