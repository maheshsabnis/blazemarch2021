let fname= "Mahesh";
let mname = "Ramesh";
let lname = "Sabnis";

// traditional concatination
let fullNameOld = 'The name is ' + fname + ' ' + mname + ' ' + lname;
console.log(fullNameOld);

// String Interpolation

let fullNameNew = `The name is ${fname} ${mname} ${lname}`;
console.log(fullNameNew);

let message = 'The ES 6 is the great language for ease of JavaScript Code';
console.log(message);
// using search() method
console.log(message.search('for'));

// using replace() method replace the first searched string

let result = message.replace('great', 'superb');
console.log(result);
