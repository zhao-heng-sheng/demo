let list = [
  {
    id: 1,
    name: "Alice",
    age: 20,
  },
  {
    id: 2,
    name: "Bob",
    age: 18,
  },
  {
    id: 3,
    name: "Cdf",
    age: 19,
  },
]

function query(list){
  let where = (func)=>{
    list = list.filter(func)
    return query(list)
  }
  let sortBy = (key)=>{
    list = list.sort((a,b)=>a[key]-b[key])
    return query(list)
  }
  let groupBy = (key)=>{
    let map = {}
    list.forEach((item)=>{
      if(!map[item[key]]){
        map[item[key]] = []
      }
      map[item[key]].push(item)
    })
    list = map
    return query(list)
  }
  let execute = ()=>{
    return list
  }
  return {where,sortBy,groupBy,execute}
}
const result = query(list)
  .where((item) => item.age > 18)
  .sortBy("id")
  // .groupBy("name")
  .execute();

console.log(result);
