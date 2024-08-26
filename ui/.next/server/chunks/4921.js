"use strict";
exports.id = 4921;
exports.ids = [4921];
exports.modules = {

/***/ 14921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function cov_2d72v6k9p() {
  var path = "/workspace/meshplay/ui/components/ErrorBoundary.js";
  var hash = "a3017e9d42b3bb6aa4044de0364b10f01d430362";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/ErrorBoundary.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 17
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 50
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 44
        }
      },
      "3": {
        start: {
          line: 20,
          column: 23
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "4": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 52
        }
      },
      "5": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "6": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 35,
          column: 8
        }
      },
      "7": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 21
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 41
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 20,
            column: 23
          },
          end: {
            line: 20,
            column: 24
          }
        },
        loc: {
          start: {
            line: 20,
            column: 29
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 20
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 11
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 36,
            column: 5
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
        line: 26
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a3017e9d42b3bb6aa4044de0364b10f01d430362"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2d72v6k9p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2d72v6k9p();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * ErrorBoundary is a React component that catches JavaScript errors in its child components and renders a fallback UI when an error occurs.
 * It should be used as a wrapper around components that might throw errors.
 * @deprecated use error boundary from sistent instead
 */




class ErrorBoundary extends ((react__WEBPACK_IMPORTED_MODULE_1___default().Component)) {
  constructor(props) {
    cov_2d72v6k9p().f[0]++;
    cov_2d72v6k9p().s[0]++;
    super(props);

    _defineProperty(this, "resetErrorBoundary", (cov_2d72v6k9p().s[3]++, () => {
      cov_2d72v6k9p().f[2]++;
      cov_2d72v6k9p().s[4]++;
      this.setState({
        hasError: false,
        error: null
      });
    }));

    cov_2d72v6k9p().s[1]++;
    this.state = {
      hasError: false,
      error: null
    };
  }
  /** Update state so the next render will show the fallback UI. */


  static getDerivedStateFromError(error) {
    cov_2d72v6k9p().f[1]++;
    cov_2d72v6k9p().s[2]++;
    return {
      hasError: true,
      error: error
    };
  }

  /** You can render any custom fallback UI */
  render() {
    cov_2d72v6k9p().f[3]++;
    cov_2d72v6k9p().s[5]++;

    if (this.state.hasError) {
      cov_2d72v6k9p().b[0][0]++;
      cov_2d72v6k9p().s[6]++;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "alert alert-danger",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          children: "Couldn't open form. Encountered the following error:"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("pre", {
          children: this.state.error.message
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {
          color: "primary",
          variant: "contained",
          onClick: this.resetErrorBoundary,
          children: "Refresh Form"
        })]
      });
    } else {
      cov_2d72v6k9p().b[0][1]++;
    }

    cov_2d72v6k9p().s[7]++;
    return this.props.children;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ })

};
;