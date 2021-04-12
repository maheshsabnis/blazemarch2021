"use strict";

var fname = "Mahesh";
var mname = "Ramesh";
var lname = "Sabnis"; // traditional concatination

var fullNameOld = 'The name is ' + fname + ' ' + mname + ' ' + lname;
console.log(fullNameOld); // String Interpolation

var fullNameNew = "The name is ".concat(fname, " ").concat(mname, " ").concat(lname);
console.log(fullNameNew);
var message = 'The ES 6 is the great language for ease of JavaScript Code';
console.log(message); // using search() method

console.log(message.search('for')); // using replace() method replace the first searched string

var result = message.replace('great', 'superb');
console.log(result);
