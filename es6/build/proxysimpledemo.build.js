"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var originalObject = {
  message: 'I am original Object'
};

var MyClass = function MyClass() {
  _classCallCheck(this, MyClass);

  this.data = 'I am Property from class';
}; // defing a handler


var handler = {}; // define a proxy

var proxy = new Proxy(originalObject, handler);
var obj = new MyClass();
var proxy1 = new Proxy(obj, handler); // define a consumer function

function consumer() {
  // accessing the property from the target object
  // using proxy instance
  var message = proxy.message;
  console.log("Message = ".concat(message));
  var newmessage = proxy1.data;
  console.log("Ndew Message = ".concat(newmessage));
}

consumer();
