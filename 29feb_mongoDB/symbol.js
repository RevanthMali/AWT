const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 =  Symbol("foo");

console.log(sym2 === sym3); // symbols are used for uniqueness
