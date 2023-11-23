const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
]);
console.log(m.entries===m[Symbol.iterator]);