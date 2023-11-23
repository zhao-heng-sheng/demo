const m = new Map();

console.log(m.has('key1'));
console.log(m.get('key1'));
console.log(m.size);

m.set('key1', 'val1').set('key2','val2');
console.log(m.has('key1'));
console.log(m.get('key1'));
console.log(m.size);

m.delete('key1')
console.log(m.has('key1'));
console.log(m.get('key1'));
console.log(m.size);

m.set('key3','val3')
m.clear();
console.log(m.has('key3'));
console.log(m.get('key3'));
console.log(m.size);
