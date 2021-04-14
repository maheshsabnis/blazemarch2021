"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StaticDemo = /*#__PURE__*/function () {
  function StaticDemo() {
    _classCallCheck(this, StaticDemo);
  }

  _createClass(StaticDemo, null, [{
    key: "printMessage",
    value: function printMessage(msg) {
      console.log("The Message from the Static ".concat(msg));
    }
  }]);

  return StaticDemo;
}();

StaticDemo.printMessage();
