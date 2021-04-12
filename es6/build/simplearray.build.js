"use strict";

var names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Nandu", "Abhay"]; // ES 6 iteration

console.log('ES 6 for..of loop');

for (var _i = 0, _names = names; _i < _names.length; _i++) {
  var n = _names[_i];
  console.log(n);
} // callback syntax changes using Arrow Operators
// explicitely written function passed as callback function 


function printValues(n, i) {
  console.log("Value at ".concat(i, "th position is = ").concat(n));
} // passing printValues as callback function


names.forEach(printValues);
console.log(); // using inline Callback function

console.log('Using inline callback function');
names.forEach(function (n, i) {
  console.log("Value at ".concat(i, "th position is = ").concat(n));
}); // using Arrow operator

console.log('Using Arrow Operator');
names.forEach(function (n, i) {
  console.log("Value at ".concat(i, "th position is = ").concat(n));
}); // using map() for iteration

console.log('Using map');
names.map(function (n, i) {
  console.log("Value at ".concat(i, "th position is = ").concat(n));
});
