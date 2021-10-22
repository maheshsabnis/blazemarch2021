"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getData() {
  return new Promise(function (resolve, reject) {
    // this is async object
    var xhr = new XMLHttpRequest(); // subscribe to the onload event to make sure that the success response will be received

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("Resolved ".concat(xhr.response));
        resolve(xhr.response);
      }
    }; // subscribe to the onerror event to mzake sure that errors will be handled


    xhr.onerror = function (e) {
      reject("Error Occured ".concat(e));
    }; // define the request information using HTTP Method and URL


    xhr.open('GET', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products'); // send the request

    xhr.send();
  });
}

function getProducts() {
  return _getProducts.apply(this, arguments);
}

function _getProducts() {
  _getProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Method Start');
            _context.next = 3;
            return getData();

          case 3:
            result = _context.sent;
            console.log("After Awaitable call resule= ".concat(result));
            console.log('Method End');
            return _context.abrupt("return", result);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getProducts.apply(this, arguments);
}

function postData(prd) {
  return new Promise(function (resolve, reject) {
    // this is async object
    var xhr = new XMLHttpRequest(); // subscribe to the onload event to make sure that the success response will be received

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("Resolved ".concat(xhr.response));
        resolve(xhr.response);
      }
    }; // subscribe to the onerror event to mzake sure that errors will be handled


    xhr.onerror = function (e) {
      reject("Error Occured ".concat(e));
    }; // define the request information using HTTP Method and URL


    xhr.open('POST', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products');
    xhr.setRequestHeader("Content-Type", "application/json"); // send the request

    xhr.send(JSON.stringify(prd));
  });
} // PUT
//  xhr.open('PUT', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products/{PRODUCTROWID}');
//    xhr.setRequestHeader("Content-Type", "application/json");
// send the request
//xhr.send(JSON.stringify(prd));
// DELETE
//  xhr.open('DELETE', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products/{PRODUCTROWID}');
