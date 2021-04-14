"use strict";

var mapValues = new Map();
mapValues.set(1, {
  id: 101,
  name: 'Mahesh'
});
mapValues.set(2, {
  id: 102,
  name: 'Mukesh'
});
mapValues.set(3, {
  id: 103,
  name: 'Manish'
});
mapValues.set(4, {
  id: 104,
  name: 'Madhukar'
});
mapValues.set(5, {
  id: 105,
  name: 'Madhav'
});
mapValues.set(6, {
  id: 106,
  name: 'Malhar'
});
mapValues.set(6, {
  id: 107,
  name: 'Manohar'
}); // same key but new values

console.log("Size of Map = ".concat(mapValues.size));
console.log("Value at key = ".concat(JSON.stringify(mapValues.get(5))));
mapValues.forEach(function (val, key) {
  console.log("Value at Kay = ".concat(key, " is = ").concat(JSON.stringify(val)));
});
console.log("Has the record ".concat(mapValues.has(6)));
console.log("Has the record ".concat(mapValues.has(7)));
console.log("Delete the record ".concat(mapValues["delete"](6)));
mapValues.forEach(function (val, key) {
  console.log("Value at Kay = ".concat(key, " is = ").concat(JSON.stringify(val)));
});
