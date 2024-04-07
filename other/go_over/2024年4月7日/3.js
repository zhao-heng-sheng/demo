const map = new Map();
const weakmap = new WeakMap();

(()=>{
  const foo = {foo:1}
  const bar = {bar:2}
  map.set(foo,1)
  weakmap.set(bar,2)
  console.log(map,weakmap);
})()