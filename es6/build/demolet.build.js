"use strict";

function doWork(x) {
  if (x) {
    var _y = 10;
    console.log('Inside if y = ' + _y);
  }

  var y = 0; // redeclared it

  y++; // dirty write

  console.log('Out of if block y = ' + y); // dirty read
}

console.log('for true');
doWork(true);
console.log('for false');
doWork(false);
