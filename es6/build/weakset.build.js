"use strict";

var setObjects = new WeakSet();
var o1 = {
  name: 'A'
};
var o2 = {
  name: 'B'
};
var o3 = {
  name: 'C'
};
var o4 = {
  name: 'D'
};
var o5 = {
  name: 'A'
}; // o1 and o5 are different though they have same scehma and values

setObjects.add(o1);
setObjects.add(o2);
setObjects.add(o3);
setObjects.add(o4);
setObjects.add(o5);
setObjects.add(o1); // try to add duplicate entry

console.log(setObjects.has(o5));
o5 = null; // the o5 is garbage collected and hence not available in the weakset

console.log("Is o5b exist = ".concat(setObjects.has(o5)));
console.log(JSON.stringify(setObjects));
