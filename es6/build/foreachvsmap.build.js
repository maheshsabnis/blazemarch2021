"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var res1 = values.forEach(function (v, i) {
  var c = v * 2;
  console.log("In side forEach c = ".concat(c));
  return c;
});
console.log("Values with forEach = ".concat(values));
console.log("Res 1  = ".concat(res1));
console.log();
var res2 = values.map(function (v, i) {
  if (v % 2 === 0) {
    var c = v * 2;
    console.log("In side map c = ".concat(c));
    return c;
  }
});
console.log("Values with map = ".concat(values));
console.log("Res 2  = ".concat(res2, " and ").concat(_typeof(res2), " and length of res2 = ").concat(res2.length));
