webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\dikvi\\Desktop\\meconta\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var fetcher = function fetcher() {
  return fetch.apply(void 0, arguments).then(function (res) {
    return res.json();
  });
};

var Index = function Index() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/get-promo', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "P\xE1gina inicial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), __jsx("p", {
    className: "mt-12 text-center font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, "Estamos sempre atentos para ouvir nossos clientes e melhorarmos nossos servicos. E ainda te dar Pr\xEAmios"), __jsx("div", {
    className: "text-center my-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, " ", __jsx("img", {
    className: "mx-auto p-4 mb-4 ",
    src: "/comentario.svg",
    alt: "MeConta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pesquisa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "bg-blue-300 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
    }
  }, "Fa\xE7a sua Cr\xEDtica ou Sugest\xE3o ")), __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, " ", __jsx("img", {
    className: "mx-auto p-4 mb-4 ",
    src: "/comentario.svg",
    alt: "MeConta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }))), !data && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), !error && data && data.showCoupon);
};

_s(Index, "PLUSh3GLacfZJClYQJks7Deieck=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkluZGV4IiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwic2hvd0NvdXBvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBYUMsS0FBSyxNQUFMLG9CQUFlQyxJQUFmLENBQW9CLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQXZCLENBQWI7QUFBQSxDQUFoQjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsZ0JBQ0lDLG1EQUFNLENBQUMsZ0JBQUQsRUFBa0JOLE9BQWxCLENBRFY7QUFBQSxNQUNYTyxJQURXLFdBQ1hBLElBRFc7QUFBQSxNQUNMQyxLQURLLFdBQ0xBLEtBREs7O0FBR2xCLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBVyxTQUFLLEVBQUMsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsYUFBUyxFQUFDLDZCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0hBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQWtDLE9BQUcsRUFBRSxpQkFBdkM7QUFBeUQsT0FBRyxFQUFDLFNBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSixDQURBLEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQyxvRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQURELENBRkYsRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUk7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBa0MsT0FBRyxFQUFFLGlCQUF2QztBQUF5RCxPQUFHLEVBQUMsU0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFKLENBTEosQ0FIRixFQVVJLENBQUNELElBQUQsSUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVmQsRUFXRyxDQUFDQyxLQUFELElBQVVELElBQVYsSUFBa0JBLElBQUksQ0FBQ0UsVUFYMUIsQ0FEQTtBQWVELENBbEJEOztHQUFNSixLO1VBQ2tCQywyQzs7O0tBRGxCRCxLO0FBb0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNmIxYTIwZWJlYWUzOTEwMzY0NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUaXRsZSdcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoJy9hcGkvZ2V0LXByb21vJyxmZXRjaGVyKVxyXG5cclxuICByZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxQYWdlVGl0bGUgdGl0bGU9J1DDoWdpbmEgaW5pY2lhbCcvPlxyXG4gICAgPHAgY2xhc3NOYW1lPSdtdC0xMiB0ZXh0LWNlbnRlciBmb250LWJvbGQnICA+RXN0YW1vcyBzZW1wcmUgYXRlbnRvcyBwYXJhIG91dmlyIG5vc3NvcyBjbGllbnRlcyBlIG1lbGhvcmFybW9zIG5vc3NvcyBzZXJ2aWNvcy4gRSBhaW5kYSB0ZSBkYXIgUHLDqm1pb3M8L3A+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXktMTInID5cclxuICAgIDxhPiA8aW1nIGNsYXNzTmFtZT0nbXgtYXV0byBwLTQgbWItNCAnc3JjPSAnL2NvbWVudGFyaW8uc3ZnJyBhbHQ9J01lQ29udGEnLz48L2E+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy9wZXNxdWlzYSc+XHJcbiAgICAgICA8YSBjbGFzc05hbWU9J2JnLWJsdWUtMzAwIHB4LTEyIHB5LTQgZm9udC1ib2xkIHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOnNoYWRvdycgPkZhw6dhIHN1YSBDcsOtdGljYSBvdSBTdWdlc3TDo28gPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YT4gPGltZyBjbGFzc05hbWU9J214LWF1dG8gcC00IG1iLTQgJ3NyYz0gJy9jb21lbnRhcmlvLnN2ZycgYWx0PSdNZUNvbnRhJy8+PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7ICFkYXRhICAmJiA8cD48L3A+IH1cclxuICAgIHshZXJyb3IgJiYgZGF0YSAmJiBkYXRhLnNob3dDb3Vwb24gIH1cclxuICAgIFxyXG4gPC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=