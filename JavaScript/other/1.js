function add(arr,fun){
  return arr.map(item=>item+1)
}
function mul(arr){
  return arr.map(item=>item*3)
}
function div(arr){
  return arr.map(item=>item/2)
}
console.log(add([1,2,3]))
console.log(mul([1,2,3]))
console.log(div([2,4,6]))