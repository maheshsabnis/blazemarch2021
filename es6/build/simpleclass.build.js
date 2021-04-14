"use strict";

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SimpleClass = /*#__PURE__*/function () {
  // define a constructor using 'constructor()' function
  // default ctor
  function SimpleClass() {
    _classCallCheck(this, SimpleClass);
  } // public methods


  _createClass(SimpleClass, [{
    key: "add",
    value: function add(x, y) {
      return Math.pow(x, y) + Math.pow(y, x);
    }
  }]);

  return SimpleClass;
}();

var _data = new WeakMap();

var _validate = new WeakSet();

var SimpleClassParameters = /*#__PURE__*/function () {
  // private variable or private class level property
  // parameterized ctor, used to store values for members 
  // this. prefixed data members are public
  // they are declared inside the constructor 
  function SimpleClassParameters(x, y) {
    _classCallCheck(this, SimpleClassParameters);

    _validate.add(this);

    _data.set(this, {
      writable: true,
      value: 0
    });

    this.a = x;
    this.b = y;

    _classPrivateFieldSet(this, _data, y);

    console.log("Private data = ".concat(_classPrivateFieldGet(this, _data)));
  } // private method


  _createClass(SimpleClassParameters, [{
    key: "add",
    value: // public methods
    function add() {
      _classPrivateMethodGet(this, _validate, _validate2).call(this);

      return Math.pow(this.a, this.b) + Math.pow(this.b, this.a);
    }
  }]);

  return SimpleClassParameters;
}();

function _validate2() {
  if (this.a <= 0) this.a = 1;
  if (this.b <= 0) this.b = 1;
}
