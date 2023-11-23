const m = new Map();
const objKey = {},
    objVal = {},
    arrKey = [],
    arrVal = [];

m.set(objKey,objVal)
m.set(arrKey,arrVal)
objKey.foo = 'foo'
objVal.bar = 'bar'
arrKey.push('foo')
arrVal.push('bar')
console.log(m)
console.log(m.get(objKey));
console.log(m.get(arrKey));
