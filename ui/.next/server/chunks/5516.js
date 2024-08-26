"use strict";
exports.id = 5516;
exports.ids = [5516];
exports.modules = {

/***/ 75516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ UsesSistent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function cov_22akim3lva() {
  var path = "/workspace/meshplay/ui/components/SistentWrapper.js";
  var hash = "7afcff77a706696768093ed7fd84632809d28f26";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/SistentWrapper.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 16
        },
        end: {
          line: 6,
          column: 26
        }
      },
      "2": {
        start: {
          line: 7,
          column: 15
        },
        end: {
          line: 7,
          column: 33
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 13,
          column: 6
        }
      },
      "5": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 19,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 27
          },
          end: {
            line: 5,
            column: 28
          }
        },
        loc: {
          start: {
            line: 5,
            column: 45
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7afcff77a706696768093ed7fd84632809d28f26"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_22akim3lva = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_22akim3lva();




cov_22akim3lva().s[0]++;
const UsesSistent = ({
  children
}) => {
  cov_22akim3lva().f[0]++;
  const theme = (cov_22akim3lva().s[1]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)());
  const mode = (cov_22akim3lva().s[2]++, theme.palette.type);
  cov_22akim3lva().s[3]++;

  if (mode === 'dark') {
    cov_22akim3lva().b[0][0]++;
    cov_22akim3lva().s[4]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2__.SistentThemeProviderWithoutBaseLine, {
      initialMode: mode,
      children: children
    });
  } else {
    cov_22akim3lva().b[0][1]++;
  }

  cov_22akim3lva().s[5]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2__.SistentThemeProviderWithoutBaseLine, {
    initialMode: mode,
    children: children
  });
};

/***/ })

};
;