const arr = [1, 2, 3];
const initialValue = 0;
const add = (previousValue, currentValue) => previousValue + currentValue;
const sumArr = arr.reduce(add, initialValue);
console.log(sumArr);

const map = (arr,callback)=>{
  let result = [];
  for(let i=0;i<arr.length;i++){
    result.push(callback(arr[i]));
  }
  return result;
}
let sumArr2 = map(arr,item=>item+1)
console.log(sumArr2);
let initialValue2 = []
let sumArr3 = arr.reduce((previousValue,currentValue)=>{
  // console.log(previousValue,currentValue);
  let result = previousValue.slice()
  result.push(currentValue+1)
  return result;
},initialValue2)
console.log(sumArr3);
console.log(initialValue2);