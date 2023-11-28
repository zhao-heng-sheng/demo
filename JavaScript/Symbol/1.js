let globalSymbol = Symbol.for('xxx')
let globalSymbol2 = Symbol.for('xxx')
console.log(globalSymbol===globalSymbol2);  //true
let localSymbol = Symbol('xxx')
let localSymbol2 = Symbol('xxx')
console.log(localSymbol===localSymbol2);
console.log(globalSymbol===localSymbol);
console.log(Symbol.keyFor(globalSymbol2));