"use strict";
exports.id = 1029;
exports.ids = [1029];
exports.modules = {

/***/ 1029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_p9cbiqyvy() {
  var path = "/workspace/meshplay/ui/assets/icons/DeleteIcon.js";
  var hash = "e46e5e4707b7259db6c3c662c2bcfb02a1934288";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/DeleteIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 250
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 20
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 4,
            column: 250
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 40
          },
          end: {
            line: 3,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 46
          },
          end: {
            line: 3,
            column: 48
          }
        }],
        line: 3
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e46e5e4707b7259db6c3c662c2bcfb02a1934288"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_p9cbiqyvy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_p9cbiqyvy();



cov_p9cbiqyvy().s[0]++;

const DeleteIcon = ({
  width,
  height,
  fill,
  style = (cov_p9cbiqyvy().b[0][0]++, {})
}) => {
  cov_p9cbiqyvy().f[0]++;
  cov_p9cbiqyvy().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    fill: fill,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteIcon);

/***/ })

};
;