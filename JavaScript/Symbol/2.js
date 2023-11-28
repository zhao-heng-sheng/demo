let mySymbol = Symbol();
let myWrappedSymbol = Object(mySymbol);
console.log(mySymbol==myWrappedSymbol);
console.log(mySymbol,myWrappedSymbol);
console.log(typeof myWrappedSymbol);