"use strict";

var _provider = require("./provider.js");

var obj = new _provider.MyClass();
console.log("Upper Case ".concat(obj.changeCase('Es6 Modules', "U")));
console.log("Lower Case ".concat(obj.changeCase('Es6 Modules', "L")));
