"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(ValueGenerator);

function ValueGenerator() {
  var start,
      end,
      step,
      iterationCount,
      i,
      _args = arguments;
  return regeneratorRuntime.wrap(function ValueGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          start = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
          end = _args.length > 1 && _args[1] !== undefined ? _args[1] : 100;
          step = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
          iterationCount = 0;
          i = start;

        case 5:
          if (!(i < end)) {
            _context.next = 12;
            break;
          }

          iterationCount++;
          _context.next = 9;
          return i;

        case 9:
          i += step;
          _context.next = 5;
          break;

        case 12:
          return _context.abrupt("return", iterationCount);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var genrator = ValueGenerator(1, 20, 1);
var result = genrator.next();

while (!result.done) {
  console.log("Current Value id = ".concat(result.value));
  result = genrator.next();
}
