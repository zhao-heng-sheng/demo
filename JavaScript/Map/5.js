const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
]);
console.log(m.entries===m[Symbol.iterator]);
// m.forEach(item=>{
//     console.log(item);
// })
// m.forEach((value,key,map)=>{
//     console.log(value,key,map);
// })
let entries = m.entries();
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());