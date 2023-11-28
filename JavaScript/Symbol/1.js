let globalSymbol = Symbol.for('xxx')
let globalSymbol2 = Symbol.for('xxx')
let localSymbol = Symbol('xxx')
let localSymbol2 = Symbol('xxx')
console.log(globalSymbol===globalSymbol2);
console.log(localSymbol===localSymbol2);
console.log(globalSymbol===localSymbol);
console.log(Symbol.keyFor(globalSymbol2));