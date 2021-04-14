"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var setObjects = new Set();
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

console.log("Size of SetObjects =".concat(setObjects.size));

var _iterator = _createForOfIteratorHelper(setObjects.keys()),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var obj = _step.value;
    console.log("Keys = ".concat(obj, " and ").concat(JSON.stringify(obj)));
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

console.log();

var _iterator2 = _createForOfIteratorHelper(setObjects.values()),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _obj = _step2.value;
    console.log("Values = ".concat(_obj, " and ").concat(JSON.stringify(_obj)));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

o5 = null;
console.log("Size of SetObjects =".concat(setObjects.size));
console.log();

var _iterator3 = _createForOfIteratorHelper(setObjects.keys()),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var _obj2 = _step3.value;
    console.log("Keys = ".concat(_obj2, " and ").concat(JSON.stringify(_obj2)));
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

console.log();

var _iterator4 = _createForOfIteratorHelper(setObjects.values()),
    _step4;

try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _obj3 = _step4.value;
    console.log("Values = ".concat(_obj3, " and ").concat(JSON.stringify(_obj3)));
  }
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}

console.log("Is o5b exist = ".concat(setObjects.has(o5)));
