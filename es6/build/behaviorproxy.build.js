"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserInfo = function UserInfo() {
  _classCallCheck(this, UserInfo);

  this.FirstName = "Mahesh";
  this.LastName = "Sabnis";
  this.Email = "Sabnis_m@msit.com";
  this._UserSecret = "*****";
  this.Occupation = "Service";
}; // settings the custom behavior on the targetobject


var handler = {
  get: function get(target, prop) {
    // if property name starts with _ then throw error
    if (prop.startsWith('_')) {
      throw new Error('Access is denied');
    } else {
      // read value of the property
      var value = target[prop];
      return value;
    }
  },
  set: function set(target, prop, value) {
    if (prop === "Occupation") {
      throw new Error('Sorry this property can not ne written');
    } else {
      target[prop] = value;
      return true;
    }
  },
  ownKeys: function ownKeys(target) {
    var keys = Object.keys(target);
    var properties = keys.filter(function (p, i) {
      return p[0] !== '_';
    });
    return properties;
  },
  ownValues: function ownValues(target, prop) {
    var values = target[prop];
    return values;
  }
};
var user = new UserInfo();
var userProxy = new Proxy(user, handler);

function GetUserInfo() {
  console.log("User Info = ".concat(userProxy.FirstName, "\n      ").concat(userProxy.LastName, " ").concat(userProxy.Email, " "));
  userProxy.FirstName = "Mahesh Kumar";
  userProxy.LastName = "Sabnis";
  console.log("User Info = ".concat(userProxy.FirstName, "\n      ").concat(userProxy.LastName, " ").concat(userProxy.Email, " "));
  userProxy.Occupation = "Self-Employeed";
  console.log(userProxy.Occupation);
} // read all propertis from the proxy


try {
  console.log(Object.keys(userProxy));
  console.log(Object.values(userProxy));
} catch (e) {
  console.log(e.message);
}

try {
  GetUserInfo();
} catch (e) {
  console.log(e.message);
}
