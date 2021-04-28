// importing a Object Literal as Module
const mdl1 = require('./exporter');
// importing a single function as module
const mdl2 = require('./exportfunction');
// importing class as module
// the 'mathClass' is imported reference
const mathClass = require('./classexport'); 

console.log(`Add = ${mdl1.add(10,20)}`);
console.log(`Power = ${mdl1.power(4,5)}`);
console.log(`Upper Case ${mdl2('node.js module')}`);

// create an instance of imprted reference
let obj = new mathClass();
// class its methods
console.log(`Add From Class = ${obj.add(10,20)}`);
console.log(`Power From Class = ${obj.power(4,5)}`);