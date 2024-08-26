"use strict";
exports.id = 2551;
exports.ids = [2551];
exports.modules = {

/***/ 32950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ getCredentialByID)
/* harmony export */ });
/* harmony import */ var lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__]);
lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_2k607j03t7() {
  var path = "/workspace/meshplay/ui/api/credentials.js";
  var hash = "69d4c4d0f8a913e7c39625892a88dd2539aa3813";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/api/credentials.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 33
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
          column: 85
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 33
          },
          end: {
            line: 3,
            column: 34
          }
        },
        loc: {
          start: {
            line: 3,
            column: 57
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "69d4c4d0f8a913e7c39625892a88dd2539aa3813"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2k607j03t7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2k607j03t7();

cov_2k607j03t7().s[0]++;
const getCredentialByID = async credentialID => {
  cov_2k607j03t7().f[0]++;
  cov_2k607j03t7().s[1]++;
  return await (0,lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__/* .promisifiedDataFetch */ .y)(`/api/integrations/credentials/${credentialID}`);
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_477pbfse4() {
  var path = "/workspace/meshplay/ui/assets/icons/ChatIcon.js";
  var hash = "4db523d7657840515fd6e281e9b188a2adac1a3b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/ChatIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 21,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 17
          },
          end: {
            line: 3,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 28
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 13
          },
          end: {
            line: 9,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 27
          },
          end: {
            line: 9,
            column: 38
          }
        }, {
          start: {
            line: 9,
            column: 41
          },
          end: {
            line: 9,
            column: 47
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 14
          },
          end: {
            line: 10,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 29
          },
          end: {
            line: 10,
            column: 41
          }
        }, {
          start: {
            line: 10,
            column: 44
          },
          end: {
            line: 10,
            column: 50
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 11,
            column: 25
          },
          end: {
            line: 11,
            column: 35
          }
        }, {
          start: {
            line: 11,
            column: 38
          },
          end: {
            line: 11,
            column: 52
          }
        }],
        line: 11
      },
      "3": {
        loc: {
          start: {
            line: 14,
            column: 13
          },
          end: {
            line: 14,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 14,
            column: 27
          },
          end: {
            line: 14,
            column: 38
          }
        }, {
          start: {
            line: 14,
            column: 41
          },
          end: {
            line: 14,
            column: 48
          }
        }],
        line: 14
      },
      "4": {
        loc: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 15,
            column: 33
          },
          end: {
            line: 15,
            column: 47
          }
        }, {
          start: {
            line: 15,
            column: 50
          },
          end: {
            line: 15,
            column: 57
          }
        }],
        line: 15
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4db523d7657840515fd6e281e9b188a2adac1a3b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_477pbfse4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_477pbfse4();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



cov_477pbfse4().s[0]++;

const ChatIcon = props => {
  cov_477pbfse4().f[0]++;
  cov_477pbfse4().s[1]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: props.width ? (cov_477pbfse4().b[0][0]++, props.width) : (cov_477pbfse4().b[0][1]++, "24px"),
    height: props.height ? (cov_477pbfse4().b[1][0]++, props.height) : (cov_477pbfse4().b[1][1]++, "24px"),
    fill: props.fill ? (cov_477pbfse4().b[2][0]++, props.fill) : (cov_477pbfse4().b[2][1]++, "currentColor"),
    onClick: props.onClick,
    className: props.className,
    color: props.color ? (cov_477pbfse4().b[3][0]++, props.color) : (cov_477pbfse4().b[3][1]++, "unset"),
    fontSize: props.fontSize ? (cov_477pbfse4().b[4][0]++, props.fontSize) : (cov_477pbfse4().b[4][1]++, "unset"),
    style: _objectSpread({}, props.style),
    viewBox: "0 0 30 30",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M 15 3 C 7.82 3 2 7.925 2 14 C 2 17.368 3.7933281 20.378484 6.6113281 22.396484 C 6.6832805 23.932468 6.4452784 26.053382 4.3261719 27.03125 A 0.5 0.5 0 0 0 4.3222656 27.033203 A 0.5 0.5 0 0 0 4 27.5 A 0.5 0.5 0 0 0 4.5 28 C 4.5119372 28 4.5232366 27.998109 4.5351562 27.998047 A 0.5 0.5 0 0 0 4.5429688 27.998047 C 6.9769949 27.982445 9.0432734 26.667034 10.46875 25.277344 C 10.92075 24.836344 11.550875 24.619328 12.171875 24.736328 C 13.081875 24.909328 14.028 25 15 25 C 22.18 25 28 20.075 28 14 C 28 7.925 22.18 3 15 3 z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatIcon);

/***/ }),

/***/ 33771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_b6rk1cvtx() {
  var path = "/workspace/meshplay/ui/assets/icons/ConfigurationIcon.js";
  var hash = "e51343f2803d0bf0836b1c5f84c97901fe9ed2be";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/ConfigurationIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 3,
            column: 27
          }
        },
        loc: {
          start: {
            line: 3,
            column: 37
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 13
          },
          end: {
            line: 10,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 27
          },
          end: {
            line: 10,
            column: 38
          }
        }, {
          start: {
            line: 10,
            column: 41
          },
          end: {
            line: 10,
            column: 47
          }
        }],
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 11,
            column: 14
          },
          end: {
            line: 11,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 11,
            column: 29
          },
          end: {
            line: 11,
            column: 41
          }
        }, {
          start: {
            line: 11,
            column: 44
          },
          end: {
            line: 11,
            column: 50
          }
        }],
        line: 11
      },
      "2": {
        loc: {
          start: {
            line: 12,
            column: 12
          },
          end: {
            line: 12,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 25
          },
          end: {
            line: 12,
            column: 35
          }
        }, {
          start: {
            line: 12,
            column: 38
          },
          end: {
            line: 12,
            column: 52
          }
        }],
        line: 12
      },
      "3": {
        loc: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 15,
            column: 27
          },
          end: {
            line: 15,
            column: 38
          }
        }, {
          start: {
            line: 15,
            column: 41
          },
          end: {
            line: 15,
            column: 48
          }
        }],
        line: 15
      },
      "4": {
        loc: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 16,
            column: 33
          },
          end: {
            line: 16,
            column: 47
          }
        }, {
          start: {
            line: 16,
            column: 50
          },
          end: {
            line: 16,
            column: 57
          }
        }],
        line: 16
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e51343f2803d0bf0836b1c5f84c97901fe9ed2be"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_b6rk1cvtx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_b6rk1cvtx();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




cov_b6rk1cvtx().s[0]++;

const ConfigurationIcon = props => {
  cov_b6rk1cvtx().f[0]++;
  cov_b6rk1cvtx().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    id: "Layer_2",
    "data-name": "Layer 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: props.width ? (cov_b6rk1cvtx().b[0][0]++, props.width) : (cov_b6rk1cvtx().b[0][1]++, "24px"),
    height: props.height ? (cov_b6rk1cvtx().b[1][0]++, props.height) : (cov_b6rk1cvtx().b[1][1]++, "24px"),
    fill: props.fill ? (cov_b6rk1cvtx().b[2][0]++, props.fill) : (cov_b6rk1cvtx().b[2][1]++, "currentColor"),
    onClick: props.onClick,
    className: props.className,
    color: props.color ? (cov_b6rk1cvtx().b[3][0]++, props.color) : (cov_b6rk1cvtx().b[3][1]++, "unset"),
    fontSize: props.fontSize ? (cov_b6rk1cvtx().b[4][0]++, props.fontSize) : (cov_b6rk1cvtx().b[4][1]++, "unset"),
    style: _objectSpread({}, props.style),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M58.17,44.55a9.57,9.57,0,0,0-9.75-2.34L21.79,15.58c2.35-6.79-3.95-13.91-11-12.4a1,1,0,0,0-.79.88,1,1,0,0,0,.28.81l4,4L13.1,13.1,8.83,14.24l-4-4A1.1,1.1,0,0,0,4.06,10a1,1,0,0,0-.88.79c-1.55,7,5.7,13.41,12.42,11L42.21,48.42c-2.36,6.79,4,13.91,11,12.4a1,1,0,0,0,.79-.88,1,1,0,0,0-.28-.81l-4-4L50.9,50.9l4.27-1.14,4,4a1.29,1.29,0,0,0,.71.3h0a1,1,0,0,0,1-.81A9.59,9.59,0,0,0,58.17,44.55Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M39.28,29.52a1,1,0,0,0,1.41,0l7.46-7.45c9,2.57,15.59-8.52,9-15.21s-17.75,0-15.19,9l-7.47,7.47a1,1,0,0,0,0,1.41ZM45.84,14.1l1-3.88a1,1,0,0,1,.71-.71l3.88-1a1,1,0,0,1,1,.26l2.84,2.84a1,1,0,0,1,.26,1l-1,3.88a1,1,0,0,1-.71.71l-3.88,1a1.07,1.07,0,0,1-.25,0,1,1,0,0,1-.71-.29L46.1,15.06A1,1,0,0,1,45.84,14.1Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M24.72,34.48a1,1,0,0,0-1.41,0L15.84,42c-9-2.56-15.56,8.5-9,15.19s17.79,0,15.19-9l7.47-7.47a1,1,0,0,0,0-1.41Zm-7.23,15.6-.86,3.21a1,1,0,0,1-.71.71l-3.21.86a1,1,0,0,1-1-.26L9.4,52.25a1,1,0,0,1-.26-1L10,48.08a1,1,0,0,1,.71-.71l3.21-.86a1,1,0,0,1,1,.26l2.35,2.35A1,1,0,0,1,17.49,50.08Z"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationIcon);

/***/ }),

/***/ 4312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_169662y3p2() {
  var path = "/workspace/meshplay/ui/assets/icons/DocumentIcon.js";
  var hash = "a0fe65e8b790d02df6d21adc1362a1ddf126366b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/DocumentIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 34,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 21
          },
          end: {
            line: 3,
            column: 22
          }
        },
        loc: {
          start: {
            line: 3,
            column: 32
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 13
          },
          end: {
            line: 7,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 7,
            column: 27
          },
          end: {
            line: 7,
            column: 38
          }
        }, {
          start: {
            line: 7,
            column: 41
          },
          end: {
            line: 7,
            column: 47
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 14
          },
          end: {
            line: 8,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 29
          },
          end: {
            line: 8,
            column: 41
          }
        }, {
          start: {
            line: 8,
            column: 44
          },
          end: {
            line: 8,
            column: 50
          }
        }],
        line: 8
      },
      "2": {
        loc: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 25
          },
          end: {
            line: 9,
            column: 35
          }
        }, {
          start: {
            line: 9,
            column: 38
          },
          end: {
            line: 9,
            column: 52
          }
        }],
        line: 9
      },
      "3": {
        loc: {
          start: {
            line: 12,
            column: 13
          },
          end: {
            line: 12,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 27
          },
          end: {
            line: 12,
            column: 38
          }
        }, {
          start: {
            line: 12,
            column: 41
          },
          end: {
            line: 12,
            column: 48
          }
        }],
        line: 12
      },
      "4": {
        loc: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 33
          },
          end: {
            line: 13,
            column: 47
          }
        }, {
          start: {
            line: 13,
            column: 50
          },
          end: {
            line: 13,
            column: 57
          }
        }],
        line: 13
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a0fe65e8b790d02df6d21adc1362a1ddf126366b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_169662y3p2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_169662y3p2();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




cov_169662y3p2().s[0]++;

const DocumentIcon = props => {
  cov_169662y3p2().f[0]++;
  cov_169662y3p2().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width ? (cov_169662y3p2().b[0][0]++, props.width) : (cov_169662y3p2().b[0][1]++, "24px"),
    height: props.height ? (cov_169662y3p2().b[1][0]++, props.height) : (cov_169662y3p2().b[1][1]++, "24px"),
    fill: props.fill ? (cov_169662y3p2().b[2][0]++, props.fill) : (cov_169662y3p2().b[2][1]++, "currentColor"),
    onClick: props.onClick,
    className: props.className,
    color: props.color ? (cov_169662y3p2().b[3][0]++, props.color) : (cov_169662y3p2().b[3][1]++, "unset"),
    fontSize: props.fontSize ? (cov_169662y3p2().b[4][0]++, props.fontSize) : (cov_169662y3p2().b[4][1]++, "unset"),
    style: _objectSpread({}, props.style),
    viewBox: "0 0 512 512",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
      children: "Document Text"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z",
      fill: "none",
      stroke: "currentColor",
      strokeLinejoin: "round",
      strokeWidth: "32"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "32"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentIcon);

/***/ }),

/***/ 29433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_11kypyz5av() {
  var path = "/workspace/meshplay/ui/assets/icons/GithubIcon.js";
  var hash = "3445db731601d1f64b07965fd2d275eadda0fe3a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/GithubIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 34,
          column: 4
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
            line: 3,
            column: 30
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 13
          },
          end: {
            line: 6,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 6,
            column: 27
          },
          end: {
            line: 6,
            column: 38
          }
        }, {
          start: {
            line: 6,
            column: 41
          },
          end: {
            line: 6,
            column: 47
          }
        }],
        line: 6
      },
      "1": {
        loc: {
          start: {
            line: 7,
            column: 14
          },
          end: {
            line: 7,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 41
          }
        }, {
          start: {
            line: 7,
            column: 44
          },
          end: {
            line: 7,
            column: 50
          }
        }],
        line: 7
      },
      "2": {
        loc: {
          start: {
            line: 11,
            column: 13
          },
          end: {
            line: 11,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 11,
            column: 27
          },
          end: {
            line: 11,
            column: 38
          }
        }, {
          start: {
            line: 11,
            column: 41
          },
          end: {
            line: 11,
            column: 48
          }
        }],
        line: 11
      },
      "3": {
        loc: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 12,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 33
          },
          end: {
            line: 12,
            column: 47
          }
        }, {
          start: {
            line: 12,
            column: 50
          },
          end: {
            line: 12,
            column: 57
          }
        }],
        line: 12
      },
      "4": {
        loc: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 56
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 23,
            column: 29
          },
          end: {
            line: 23,
            column: 39
          }
        }, {
          start: {
            line: 23,
            column: 42
          },
          end: {
            line: 23,
            column: 56
          }
        }],
        line: 23
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3445db731601d1f64b07965fd2d275eadda0fe3a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_11kypyz5av = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_11kypyz5av();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




cov_11kypyz5av().s[0]++;

const GithubIcon = props => {
  cov_11kypyz5av().f[0]++;
  cov_11kypyz5av().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: props.width ? (cov_11kypyz5av().b[0][0]++, props.width) : (cov_11kypyz5av().b[0][1]++, "24px"),
    height: props.height ? (cov_11kypyz5av().b[1][0]++, props.height) : (cov_11kypyz5av().b[1][1]++, "24px") //   fill={props.fill ? props.fill : "currentColor"}
    ,
    onClick: props.onClick,
    className: props.className,
    color: props.color ? (cov_11kypyz5av().b[2][0]++, props.color) : (cov_11kypyz5av().b[2][1]++, "unset"),
    fontSize: props.fontSize ? (cov_11kypyz5av().b[3][0]++, props.fontSize) : (cov_11kypyz5av().b[3][1]++, "unset"),
    style: _objectSpread({}, props.style),
    viewBox: "0 0 20 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("defs", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
      id: "Page-1",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
        id: "Dribbble-Light-Preview",
        transform: "translate(-140.000000, -7559.000000)",
        fill: props.fill ? (cov_11kypyz5av().b[4][0]++, props.fill) : (cov_11kypyz5av().b[4][1]++, "currentColor"),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
          id: "icons",
          transform: "translate(56.000000, 160.000000)",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
            d: "M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399",
            id: "github-[#142]"
          })
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GithubIcon);

/***/ }),

/***/ 7423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
function cov_1wtt2vkawh() {
  var path = "/workspace/meshplay/ui/assets/icons/ServiceMeshIcon.js";
  var hash = "9ffbe5199d4bd272af71ec882151052c5d44bdbd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/ServiceMeshIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 68,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 14
        },
        end: {
          line: 2,
          column: 54
        }
      },
      "2": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 67,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1,
            column: 35
          },
          end: {
            line: 68,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 14
          },
          end: {
            line: 2,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 2,
            column: 27
          },
          end: {
            line: 2,
            column: 37
          }
        }, {
          start: {
            line: 2,
            column: 40
          },
          end: {
            line: 2,
            column: 54
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 7,
            column: 13
          },
          end: {
            line: 7,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 7,
            column: 27
          },
          end: {
            line: 7,
            column: 38
          }
        }, {
          start: {
            line: 7,
            column: 41
          },
          end: {
            line: 7,
            column: 47
          }
        }],
        line: 7
      },
      "2": {
        loc: {
          start: {
            line: 8,
            column: 14
          },
          end: {
            line: 8,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 29
          },
          end: {
            line: 8,
            column: 41
          }
        }, {
          start: {
            line: 8,
            column: 44
          },
          end: {
            line: 8,
            column: 50
          }
        }],
        line: 8
      },
      "3": {
        loc: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 25
          },
          end: {
            line: 9,
            column: 35
          }
        }, {
          start: {
            line: 9,
            column: 38
          },
          end: {
            line: 9,
            column: 52
          }
        }],
        line: 9
      },
      "4": {
        loc: {
          start: {
            line: 12,
            column: 13
          },
          end: {
            line: 12,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 27
          },
          end: {
            line: 12,
            column: 38
          }
        }, {
          start: {
            line: 12,
            column: 41
          },
          end: {
            line: 12,
            column: 48
          }
        }],
        line: 12
      },
      "5": {
        loc: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 33
          },
          end: {
            line: 13,
            column: 47
          }
        }, {
          start: {
            line: 13,
            column: 50
          },
          end: {
            line: 13,
            column: 57
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9ffbe5199d4bd272af71ec882151052c5d44bdbd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1wtt2vkawh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1wtt2vkawh();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

cov_1wtt2vkawh().s[0]++;

const ServiceMeshIcon = props => {
  cov_1wtt2vkawh().f[0]++;
  const fill = (cov_1wtt2vkawh().s[1]++, props.fill ? (cov_1wtt2vkawh().b[0][0]++, props.fill) : (cov_1wtt2vkawh().b[0][1]++, "currentColor"));
  cov_1wtt2vkawh().s[2]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 172.63 184.19",
    width: props.width ? (cov_1wtt2vkawh().b[1][0]++, props.width) : (cov_1wtt2vkawh().b[1][1]++, "24px"),
    height: props.height ? (cov_1wtt2vkawh().b[2][0]++, props.height) : (cov_1wtt2vkawh().b[2][1]++, "24px"),
    fill: props.fill ? (cov_1wtt2vkawh().b[3][0]++, props.fill) : (cov_1wtt2vkawh().b[3][1]++, "currentColor"),
    onClick: props.onClick,
    className: props.className,
    color: props.color ? (cov_1wtt2vkawh().b[4][0]++, props.color) : (cov_1wtt2vkawh().b[4][1]++, "unset"),
    fontSize: props.fontSize ? (cov_1wtt2vkawh().b[5][0]++, props.fontSize) : (cov_1wtt2vkawh().b[5][1]++, "unset"),
    style: _objectSpread({}, props.style),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
        children: `.cls-1{fill:${fill}}.cls-3{opacity:0.8;fill:none;stroke:${fill};stroke-miterlimit:10;stroke-width:5px}`
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
      id: "Layer_2",
      "data-name": "Layer 2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
        id: "Layer_1-2",
        "data-name": "Layer 1",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M146.32 184.19A26.29 26.29 0 0 1 120 157.94a26.3 26.3 0 0 1 26.28-26.28 26.28 26.28 0 0 1 26.27 26.28 26.27 26.27 0 0 1-26.23 26.25ZM74.55 118.37a26.3 26.3 0 0 1-26.28-26.28 26.29 26.29 0 0 1 26.28-26.27 26.27 26.27 0 0 1 26.27 26.27 26.28 26.28 0 0 1-26.27 26.28ZM146.32 118.37A26.3 26.3 0 0 1 120 92.09a26.29 26.29 0 0 1 26.28-26.27 26.27 26.27 0 0 1 26.27 26.27 26.28 26.28 0 0 1-26.23 26.28ZM146.35 52.54a26.27 26.27 0 0 1-26.27-26.27A26.27 26.27 0 0 1 146.35 0a26.28 26.28 0 0 1 26.28 26.27 26.28 26.28 0 0 1-26.28 26.27Z",
          className: "cls-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
          style: {
            opacity: 0.8
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M48.27 92.09C32.33 92.09 30 43.94 1.51 22.42M120 157.94c-4.78 0-7.17-16.46-9.56-32.91s-4.75-32.92-9.58-32.92",
            className: "cls-3"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M120 157.94c-4.78 0-7.17-16.46-9.56-32.91s-4.75-32.92-9.58-32.92",
            className: "cls-3"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M100.82 92.09c4.79 0 7.18.09 9.57.17s4.78.17 9.57.17",
            className: "cls-3"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M100.82 92.09c4.79 0 7.18.09 9.57.17s4.78.17 9.57.17M146.32 131.64c0-3.31.08-5 .16-6.62s.17-3.32.17-6.64",
            className: "cls-3"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M146.32 131.64c0-3.31.08-5 .16-6.62s.17-3.32.17-6.64M146.32 65.82c0-3.31.08-5 .16-6.62s.17-3.32.17-6.64",
            className: "cls-3"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M146.32 65.82c0-3.31.08-5 .16-6.62s.17-3.32.17-6.64M100.82 92.09c4.83 0 7.24-16.45 9.65-32.9s4.83-32.91 9.66-32.91",
            className: "cls-3"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M100.82 92.09c4.83 0 7.24-16.45 9.65-32.9s4.83-32.91 9.66-32.91",
            className: "cls-3"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceMeshIcon);

/***/ }),

/***/ 94618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_23y02kdzuk() {
  var path = "/workspace/meshplay/ui/assets/icons/SlackIcon.js";
  var hash = "1f0d74e837628123f9c44abee927be7188c5b3fe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/SlackIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 23,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 18
          },
          end: {
            line: 3,
            column: 19
          }
        },
        loc: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 13
          },
          end: {
            line: 8,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 27
          },
          end: {
            line: 8,
            column: 38
          }
        }, {
          start: {
            line: 8,
            column: 41
          },
          end: {
            line: 8,
            column: 47
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 14
          },
          end: {
            line: 9,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 29
          },
          end: {
            line: 9,
            column: 41
          }
        }, {
          start: {
            line: 9,
            column: 44
          },
          end: {
            line: 9,
            column: 50
          }
        }],
        line: 9
      },
      "2": {
        loc: {
          start: {
            line: 13,
            column: 13
          },
          end: {
            line: 13,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 13,
            column: 38
          }
        }, {
          start: {
            line: 13,
            column: 41
          },
          end: {
            line: 13,
            column: 48
          }
        }],
        line: 13
      },
      "3": {
        loc: {
          start: {
            line: 14,
            column: 16
          },
          end: {
            line: 14,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 14,
            column: 33
          },
          end: {
            line: 14,
            column: 47
          }
        }, {
          start: {
            line: 14,
            column: 50
          },
          end: {
            line: 14,
            column: 57
          }
        }],
        line: 14
      },
      "4": {
        loc: {
          start: {
            line: 20,
            column: 14
          },
          end: {
            line: 20,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 37
          }
        }, {
          start: {
            line: 20,
            column: 40
          },
          end: {
            line: 20,
            column: 54
          }
        }],
        line: 20
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1f0d74e837628123f9c44abee927be7188c5b3fe"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23y02kdzuk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_23y02kdzuk();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




cov_23y02kdzuk().s[0]++;

const SlackIcon = props => {
  cov_23y02kdzuk().f[0]++;
  cov_23y02kdzuk().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: props.width ? (cov_23y02kdzuk().b[0][0]++, props.width) : (cov_23y02kdzuk().b[0][1]++, "24px"),
    height: props.height ? (cov_23y02kdzuk().b[1][0]++, props.height) : (cov_23y02kdzuk().b[1][1]++, "24px") //   fill={props.fill ? props.fill : "currentColor"}
    ,
    onClick: props.onClick,
    className: props.className,
    color: props.color ? (cov_23y02kdzuk().b[2][0]++, props.color) : (cov_23y02kdzuk().b[2][1]++, "unset"),
    fontSize: props.fontSize ? (cov_23y02kdzuk().b[3][0]++, props.fontSize) : (cov_23y02kdzuk().b[3][1]++, "unset"),
    style: _objectSpread({}, props.style),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M14.5 3A1.5 1.5 0 0 1 16 4.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 14.5 3zm-10 10H6v1.5A1.5 1.5 0 1 1 4.5 13zm8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5V18zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5a1.5 1.5 0 0 1 0 3H18V9.5A1.5 1.5 0 0 1 19.5 8zm-15 0h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1 0-3zm5-5A1.5 1.5 0 0 1 11 4.5V6H9.5a1.5 1.5 0 0 1 0-3zm0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 9.5 13z",
      fill: props.fill ? (cov_23y02kdzuk().b[4][0]++, props.fill) : (cov_23y02kdzuk().b[4][1]++, "currentColor")
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlackIcon);

/***/ }),

/***/ 74126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function cov_2otor73ali() {
  var path = "/workspace/meshplay/ui/components/MeshplayProgressBar.js";
  var hash = "a5fb63c9e2b98c39028f0c49ba7c18e5ec788642";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayProgressBar.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 28
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 45
        },
        end: {
          line: 7,
          column: 58
        }
      },
      "2": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 8,
          column: 34
        }
      },
      "3": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 22,
          column: 53
        }
      },
      "4": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "5": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 17,
          column: 8
        }
      },
      "6": {
        start: {
          line: 18,
          column: 11
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "7": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 41
        }
      },
      "8": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 33
        }
      },
      "9": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 14
        }
      },
      "10": {
        start: {
          line: 27,
          column: 24
        },
        end: {
          line: 27,
          column: 80
        }
      },
      "11": {
        start: {
          line: 27,
          column: 36
        },
        end: {
          line: 27,
          column: 79
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 28
          },
          end: {
            line: 6,
            column: 29
          }
        },
        loc: {
          start: {
            line: 6,
            column: 50
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 12
          },
          end: {
            line: 10,
            column: 13
          }
        },
        loc: {
          start: {
            line: 10,
            column: 18
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 25
          }
        },
        loc: {
          start: {
            line: 27,
            column: 36
          },
          end: {
            line: 27,
            column: 79
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 11
          },
          end: {
            line: 21,
            column: 5
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 11
          },
          end: {
            line: 21,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 11
          },
          end: {
            line: 21,
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
        line: 18
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a5fb63c9e2b98c39028f0c49ba7c18e5ec788642"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2otor73ali = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2otor73ali();





cov_2otor73ali().s[0]++;

const MeshplayProgressBar = ({
  showProgress
}) => {
  cov_2otor73ali().f[0]++;
  const {
    enqueueSnackbar,
    closeSnackbar
  } = (cov_2otor73ali().s[1]++, (0,notistack__WEBPACK_IMPORTED_MODULE_3__.useSnackbar)());
  const snackbarKey = (cov_2otor73ali().s[2]++, (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null));
  cov_2otor73ali().s[3]++;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    cov_2otor73ali().f[1]++;
    cov_2otor73ali().s[4]++;

    if (showProgress) {
      cov_2otor73ali().b[0][0]++;
      cov_2otor73ali().s[5]++;
      snackbarKey.current = enqueueSnackbar( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        style: {
          width: 250
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.LinearProgress, {})
      }), {
        variant: 'default',
        persist: true
      });
    } else {
      cov_2otor73ali().b[0][1]++;
      cov_2otor73ali().s[6]++;

      if (snackbarKey.current) {
        cov_2otor73ali().b[1][0]++;
        cov_2otor73ali().s[7]++;
        closeSnackbar(snackbarKey.current);
        cov_2otor73ali().s[8]++;
        snackbarKey.current = null;
      } else {
        cov_2otor73ali().b[1][1]++;
      }
    }
  }, [showProgress, enqueueSnackbar, closeSnackbar]);
  cov_2otor73ali().s[9]++;
  return null;
};

cov_2otor73ali().s[10]++;

const mapStateToProps = state => {
  cov_2otor73ali().f[2]++;
  cov_2otor73ali().s[11]++;
  return {
    showProgress: state.get('showProgress')
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(MeshplayProgressBar));

/***/ }),

/***/ 87300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92217);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95555);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65031);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26256);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76491);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63181);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45168);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32093);
/* harmony import */ var _material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57149);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14032);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(82483);
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(62857);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _public_static_img_drawer_icons_lifecycle_mgmt_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(99142);
/* harmony import */ var _public_static_img_drawer_icons_performance_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90364);
/* harmony import */ var _public_static_img_drawer_icons_extensions_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(69278);
/* harmony import */ var _public_static_img_drawer_icons_filter_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(54601);
/* harmony import */ var _public_static_img_drawer_icons_pattern_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(65681);
/* harmony import */ var _public_static_img_drawer_icons_lifecycle_hover_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(57005);
/* harmony import */ var _public_static_img_drawer_icons_performance_hover_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9530);
/* harmony import */ var _public_static_img_drawer_icons_configuration_hover_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(40626);
/* harmony import */ var _assets_icons_ConfigurationIcon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(33771);
/* harmony import */ var _assets_icons_DocumentIcon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(4312);
/* harmony import */ var _assets_icons_SlackIcon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(94618);
/* harmony import */ var _assets_icons_GithubIcon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(29433);
/* harmony import */ var _assets_icons_ChatIcon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(94972);
/* harmony import */ var _assets_icons_ServiceMeshIcon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(7423);
/* harmony import */ var _material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(83390);
/* harmony import */ var _material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(44563);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(68885);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _SistentWrapper__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(75516);
/* harmony import */ var _utils_ExtensionPointSchemaValidator__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(2854);
/* harmony import */ var _lib_data_fetch__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(47533);
/* harmony import */ var _css_disableComponent_styles__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(31303);
/* harmony import */ var _utils_disabledComponents__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(39520);
/* harmony import */ var _constants_navigator__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(42204);
/* harmony import */ var _css_icons_styles__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(52518);
/* harmony import */ var _utils_can__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(54872);
/* harmony import */ var _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(24018);
/* harmony import */ var _MeshplayMeshInterface_PatternService_CustomTextTooltip__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(95484);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_36__, _lib_data_fetch__WEBPACK_IMPORTED_MODULE_42__, _utils_can__WEBPACK_IMPORTED_MODULE_47__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_36__, _lib_data_fetch__WEBPACK_IMPORTED_MODULE_42__, _utils_can__WEBPACK_IMPORTED_MODULE_47__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["classes", "isDrawerCollapsed"];

function cov_1t4pb00ghc() {
  var path = "/workspace/meshplay/ui/components/Navigator.js";
  var hash = "45ed06f873c33ce9b0a6fae3f402f9f84fa0662d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/Navigator.js",
    statementMap: {
      "0": {
        start: {
          line: 82,
          column: 15
        },
        end: {
          line: 335,
          column: 2
        }
      },
      "1": {
        start: {
          line: 82,
          column: 27
        },
        end: {
          line: 335,
          column: 1
        }
      },
      "2": {
        start: {
          line: 337,
          column: 25
        },
        end: {
          line: 337,
          column: 99
        }
      },
      "3": {
        start: {
          line: 338,
          column: 30
        },
        end: {
          line: 338,
          column: 71
        }
      },
      "4": {
        start: {
          line: 340,
          column: 31
        },
        end: {
          line: 507,
          column: 1
        }
      },
      "5": {
        start: {
          line: 340,
          column: 94
        },
        end: {
          line: 507,
          column: 1
        }
      },
      "6": {
        start: {
          line: 510,
          column: 2
        },
        end: {
          line: 510,
          column: 97
        }
      },
      "7": {
        start: {
          line: 513,
          column: 20
        },
        end: {
          line: 546,
          column: 1
        }
      },
      "8": {
        start: {
          line: 550,
          column: 4
        },
        end: {
          line: 550,
          column: 17
        }
      },
      "9": {
        start: {
          line: 551,
          column: 29
        },
        end: {
          line: 551,
          column: 34
        }
      },
      "10": {
        start: {
          line: 552,
          column: 4
        },
        end: {
          line: 574,
          column: 6
        }
      },
      "11": {
        start: {
          line: 578,
          column: 4
        },
        end: {
          line: 578,
          column: 46
        }
      },
      "12": {
        start: {
          line: 581,
          column: 16
        },
        end: {
          line: 581,
          column: 27
        }
      },
      "13": {
        start: {
          line: 584,
          column: 4
        },
        end: {
          line: 584,
          column: 29
        }
      },
      "14": {
        start: {
          line: 585,
          column: 4
        },
        end: {
          line: 585,
          column: 31
        }
      },
      "15": {
        start: {
          line: 589,
          column: 4
        },
        end: {
          line: 609,
          column: 6
        }
      },
      "16": {
        start: {
          line: 596,
          column: 8
        },
        end: {
          line: 606,
          column: 9
        }
      },
      "17": {
        start: {
          line: 597,
          column: 42
        },
        end: {
          line: 597,
          column: 74
        }
      },
      "18": {
        start: {
          line: 598,
          column: 38
        },
        end: {
          line: 598,
          column: 93
        }
      },
      "19": {
        start: {
          line: 600,
          column: 10
        },
        end: {
          line: 604,
          column: 13
        }
      },
      "20": {
        start: {
          line: 605,
          column: 10
        },
        end: {
          line: 605,
          column: 74
        }
      },
      "21": {
        start: {
          line: 608,
          column: 15
        },
        end: {
          line: 608,
          column: 33
        }
      },
      "22": {
        start: {
          line: 613,
          column: 4
        },
        end: {
          line: 634,
          column: 6
        }
      },
      "23": {
        start: {
          line: 620,
          column: 8
        },
        end: {
          line: 631,
          column: 9
        }
      },
      "24": {
        start: {
          line: 621,
          column: 10
        },
        end: {
          line: 621,
          column: 51
        }
      },
      "25": {
        start: {
          line: 623,
          column: 10
        },
        end: {
          line: 630,
          column: 13
        }
      },
      "26": {
        start: {
          line: 633,
          column: 15
        },
        end: {
          line: 633,
          column: 33
        }
      },
      "27": {
        start: {
          line: 638,
          column: 4
        },
        end: {
          line: 638,
          column: 57
        }
      },
      "28": {
        start: {
          line: 646,
          column: 43
        },
        end: {
          line: 646,
          column: 53
        }
      },
      "29": {
        start: {
          line: 647,
          column: 21
        },
        end: {
          line: 647,
          column: 31
        }
      },
      "30": {
        start: {
          line: 648,
          column: 4
        },
        end: {
          line: 676,
          column: 5
        }
      },
      "31": {
        start: {
          line: 649,
          column: 6
        },
        end: {
          line: 675,
          column: 8
        }
      },
      "32": {
        start: {
          line: 652,
          column: 12
        },
        end: {
          line: 654,
          column: 13
        }
      },
      "33": {
        start: {
          line: 653,
          column: 14
        },
        end: {
          line: 653,
          column: 24
        }
      },
      "34": {
        start: {
          line: 655,
          column: 12
        },
        end: {
          line: 672,
          column: 14
        }
      },
      "35": {
        start: {
          line: 680,
          column: 24
        },
        end: {
          line: 680,
          column: 34
        }
      },
      "36": {
        start: {
          line: 683,
          column: 6
        },
        end: {
          line: 713,
          column: 12
        }
      },
      "37": {
        start: {
          line: 695,
          column: 16
        },
        end: {
          line: 695,
          column: 67
        }
      },
      "38": {
        start: {
          line: 696,
          column: 16
        },
        end: {
          line: 696,
          column: 41
        }
      },
      "39": {
        start: {
          line: 697,
          column: 16
        },
        end: {
          line: 697,
          column: 43
        }
      },
      "40": {
        start: {
          line: 700,
          column: 16
        },
        end: {
          line: 700,
          column: 61
        }
      },
      "41": {
        start: {
          line: 701,
          column: 16
        },
        end: {
          line: 701,
          column: 44
        }
      },
      "42": {
        start: {
          line: 702,
          column: 16
        },
        end: {
          line: 702,
          column: 46
        }
      },
      "43": {
        start: {
          line: 716,
          column: 4
        },
        end: {
          line: 727,
          column: 5
        }
      },
      "44": {
        start: {
          line: 717,
          column: 6
        },
        end: {
          line: 726,
          column: 8
        }
      },
      "45": {
        start: {
          line: 721,
          column: 27
        },
        end: {
          line: 721,
          column: 70
        }
      },
      "46": {
        start: {
          line: 729,
          column: 4
        },
        end: {
          line: 729,
          column: 19
        }
      },
      "47": {
        start: {
          line: 732,
          column: 17
        },
        end: {
          line: 732,
          column: 21
        }
      },
      "48": {
        start: {
          line: 733,
          column: 36
        },
        end: {
          line: 733,
          column: 46
        }
      },
      "49": {
        start: {
          line: 734,
          column: 4
        },
        end: {
          line: 773,
          column: 7
        }
      },
      "50": {
        start: {
          line: 735,
          column: 6
        },
        end: {
          line: 746,
          column: 7
        }
      },
      "51": {
        start: {
          line: 736,
          column: 8
        },
        end: {
          line: 745,
          column: 11
        }
      },
      "52": {
        start: {
          line: 737,
          column: 10
        },
        end: {
          line: 739,
          column: 11
        }
      },
      "53": {
        start: {
          line: 738,
          column: 12
        },
        end: {
          line: 738,
          column: 19
        }
      },
      "54": {
        start: {
          line: 740,
          column: 23
        },
        end: {
          line: 740,
          column: 56
        }
      },
      "55": {
        start: {
          line: 741,
          column: 10
        },
        end: {
          line: 741,
          column: 62
        }
      },
      "56": {
        start: {
          line: 743,
          column: 21
        },
        end: {
          line: 743,
          column: 48
        }
      },
      "57": {
        start: {
          line: 744,
          column: 10
        },
        end: {
          line: 744,
          column: 64
        }
      },
      "58": {
        start: {
          line: 748,
          column: 6
        },
        end: {
          line: 763,
          column: 7
        }
      },
      "59": {
        start: {
          line: 749,
          column: 19
        },
        end: {
          line: 749,
          column: 24
        }
      },
      "60": {
        start: {
          line: 750,
          column: 8
        },
        end: {
          line: 760,
          column: 11
        }
      },
      "61": {
        start: {
          line: 751,
          column: 10
        },
        end: {
          line: 759,
          column: 11
        }
      },
      "62": {
        start: {
          line: 752,
          column: 24
        },
        end: {
          line: 754,
          column: 13
        }
      },
      "63": {
        start: {
          line: 753,
          column: 23
        },
        end: {
          line: 753,
          column: 66
        }
      },
      "64": {
        start: {
          line: 755,
          column: 12
        },
        end: {
          line: 758,
          column: 13
        }
      },
      "65": {
        start: {
          line: 756,
          column: 14
        },
        end: {
          line: 756,
          column: 29
        }
      },
      "66": {
        start: {
          line: 757,
          column: 14
        },
        end: {
          line: 757,
          column: 26
        }
      },
      "67": {
        start: {
          line: 762,
          column: 8
        },
        end: {
          line: 762,
          column: 24
        }
      },
      "68": {
        start: {
          line: 766,
          column: 6
        },
        end: {
          line: 772,
          column: 7
        }
      },
      "69": {
        start: {
          line: 767,
          column: 8
        },
        end: {
          line: 771,
          column: 11
        }
      },
      "70": {
        start: {
          line: 768,
          column: 10
        },
        end: {
          line: 770,
          column: 11
        }
      },
      "71": {
        start: {
          line: 769,
          column: 12
        },
        end: {
          line: 769,
          column: 51
        }
      },
      "72": {
        start: {
          line: 776,
          column: 36
        },
        end: {
          line: 776,
          column: 46
        }
      },
      "73": {
        start: {
          line: 777,
          column: 4
        },
        end: {
          line: 791,
          column: 7
        }
      },
      "74": {
        start: {
          line: 778,
          column: 6
        },
        end: {
          line: 790,
          column: 7
        }
      },
      "75": {
        start: {
          line: 779,
          column: 8
        },
        end: {
          line: 789,
          column: 11
        }
      },
      "76": {
        start: {
          line: 780,
          column: 10
        },
        end: {
          line: 788,
          column: 11
        }
      },
      "77": {
        start: {
          line: 784,
          column: 24
        },
        end: {
          line: 784,
          column: 28
        }
      },
      "78": {
        start: {
          line: 785,
          column: 28
        },
        end: {
          line: 785,
          column: 89
        }
      },
      "79": {
        start: {
          line: 786,
          column: 12
        },
        end: {
          line: 786,
          column: 63
        }
      },
      "80": {
        start: {
          line: 787,
          column: 12
        },
        end: {
          line: 787,
          column: 67
        }
      },
      "81": {
        start: {
          line: 795,
          column: 45
        },
        end: {
          line: 795,
          column: 50
        }
      },
      "82": {
        start: {
          line: 796,
          column: 17
        },
        end: {
          line: 796,
          column: 41
        }
      },
      "83": {
        start: {
          line: 797,
          column: 15
        },
        end: {
          line: 797,
          column: 17
        }
      },
      "84": {
        start: {
          line: 798,
          column: 4
        },
        end: {
          line: 801,
          column: 5
        }
      },
      "85": {
        start: {
          line: 799,
          column: 6
        },
        end: {
          line: 799,
          column: 37
        }
      },
      "86": {
        start: {
          line: 800,
          column: 6
        },
        end: {
          line: 800,
          column: 30
        }
      },
      "87": {
        start: {
          line: 803,
          column: 36
        },
        end: {
          line: 814,
          column: 5
        }
      },
      "88": {
        start: {
          line: 804,
          column: 6
        },
        end: {
          line: 808,
          column: 7
        }
      },
      "89": {
        start: {
          line: 805,
          column: 8
        },
        end: {
          line: 805,
          column: 41
        }
      },
      "90": {
        start: {
          line: 806,
          column: 8
        },
        end: {
          line: 806,
          column: 42
        }
      },
      "91": {
        start: {
          line: 807,
          column: 8
        },
        end: {
          line: 807,
          column: 15
        }
      },
      "92": {
        start: {
          line: 809,
          column: 6
        },
        end: {
          line: 813,
          column: 7
        }
      },
      "93": {
        start: {
          line: 810,
          column: 8
        },
        end: {
          line: 812,
          column: 11
        }
      },
      "94": {
        start: {
          line: 811,
          column: 10
        },
        end: {
          line: 811,
          column: 71
        }
      },
      "95": {
        start: {
          line: 816,
          column: 4
        },
        end: {
          line: 818,
          column: 7
        }
      },
      "96": {
        start: {
          line: 817,
          column: 6
        },
        end: {
          line: 817,
          column: 67
        }
      },
      "97": {
        start: {
          line: 819,
          column: 4
        },
        end: {
          line: 819,
          column: 19
        }
      },
      "98": {
        start: {
          line: 820,
          column: 4
        },
        end: {
          line: 820,
          column: 14
        }
      },
      "99": {
        start: {
          line: 831,
          column: 29
        },
        end: {
          line: 831,
          column: 39
        }
      },
      "100": {
        start: {
          line: 832,
          column: 21
        },
        end: {
          line: 832,
          column: 23
        }
      },
      "101": {
        start: {
          line: 833,
          column: 4
        },
        end: {
          line: 833,
          column: 38
        }
      },
      "102": {
        start: {
          line: 834,
          column: 4
        },
        end: {
          line: 847,
          column: 7
        }
      },
      "103": {
        start: {
          line: 835,
          column: 18
        },
        end: {
          line: 835,
          column: 44
        }
      },
      "104": {
        start: {
          line: 836,
          column: 6
        },
        end: {
          line: 838,
          column: 7
        }
      },
      "105": {
        start: {
          line: 837,
          column: 8
        },
        end: {
          line: 837,
          column: 15
        }
      },
      "106": {
        start: {
          line: 839,
          column: 6
        },
        end: {
          line: 846,
          column: 9
        }
      },
      "107": {
        start: {
          line: 848,
          column: 4
        },
        end: {
          line: 848,
          column: 20
        }
      },
      "108": {
        start: {
          line: 857,
          column: 4
        },
        end: {
          line: 857,
          column: 32
        }
      },
      "109": {
        start: {
          line: 858,
          column: 24
        },
        end: {
          line: 858,
          column: 34
        }
      },
      "110": {
        start: {
          line: 859,
          column: 16
        },
        end: {
          line: 859,
          column: 47
        }
      },
      "111": {
        start: {
          line: 861,
          column: 6
        },
        end: {
          line: 863,
          column: 12
        }
      },
      "112": {
        start: {
          line: 864,
          column: 19
        },
        end: {
          line: 864,
          column: 63
        }
      },
      "113": {
        start: {
          line: 865,
          column: 4
        },
        end: {
          line: 868,
          column: 5
        }
      },
      "114": {
        start: {
          line: 866,
          column: 6
        },
        end: {
          line: 866,
          column: 52
        }
      },
      "115": {
        start: {
          line: 867,
          column: 6
        },
        end: {
          line: 867,
          column: 89
        }
      },
      "116": {
        start: {
          line: 869,
          column: 4
        },
        end: {
          line: 869,
          column: 20
        }
      },
      "117": {
        start: {
          line: 875,
          column: 21
        },
        end: {
          line: 877,
          column: 3
        }
      },
      "118": {
        start: {
          line: 876,
          column: 4
        },
        end: {
          line: 876,
          column: 32
        }
      },
      "119": {
        start: {
          line: 886,
          column: 27
        },
        end: {
          line: 886,
          column: 37
        }
      },
      "120": {
        start: {
          line: 887,
          column: 4
        },
        end: {
          line: 887,
          column: 40
        }
      },
      "121": {
        start: {
          line: 888,
          column: 4
        },
        end: {
          line: 890,
          column: 5
        }
      },
      "122": {
        start: {
          line: 889,
          column: 6
        },
        end: {
          line: 889,
          column: 44
        }
      },
      "123": {
        start: {
          line: 893,
          column: 21
        },
        end: {
          line: 896,
          column: 3
        }
      },
      "124": {
        start: {
          line: 894,
          column: 48
        },
        end: {
          line: 894,
          column: 58
        }
      },
      "125": {
        start: {
          line: 895,
          column: 4
        },
        end: {
          line: 895,
          column: 60
        }
      },
      "126": {
        start: {
          line: 898,
          column: 18
        },
        end: {
          line: 901,
          column: 3
        }
      },
      "127": {
        start: {
          line: 899,
          column: 33
        },
        end: {
          line: 899,
          column: 43
        }
      },
      "128": {
        start: {
          line: 900,
          column: 4
        },
        end: {
          line: 900,
          column: 59
        }
      },
      "129": {
        start: {
          line: 909,
          column: 23
        },
        end: {
          line: 918,
          column: 3
        }
      },
      "130": {
        start: {
          line: 910,
          column: 23
        },
        end: {
          line: 910,
          column: 60
        }
      },
      "131": {
        start: {
          line: 911,
          column: 24
        },
        end: {
          line: 911,
          column: 49
        }
      },
      "132": {
        start: {
          line: 912,
          column: 4
        },
        end: {
          line: 917,
          column: 5
        }
      },
      "133": {
        start: {
          line: 913,
          column: 6
        },
        end: {
          line: 913,
          column: 82
        }
      },
      "134": {
        start: {
          line: 913,
          column: 62
        },
        end: {
          line: 913,
          column: 77
        }
      },
      "135": {
        start: {
          line: 915,
          column: 6
        },
        end: {
          line: 915,
          column: 31
        }
      },
      "136": {
        start: {
          line: 916,
          column: 6
        },
        end: {
          line: 916,
          column: 45
        }
      },
      "137": {
        start: {
          line: 930,
          column: 43
        },
        end: {
          line: 930,
          column: 53
        }
      },
      "138": {
        start: {
          line: 931,
          column: 21
        },
        end: {
          line: 931,
          column: 31
        }
      },
      "139": {
        start: {
          line: 933,
          column: 4
        },
        end: {
          line: 973,
          column: 5
        }
      },
      "140": {
        start: {
          line: 934,
          column: 6
        },
        end: {
          line: 972,
          column: 8
        }
      },
      "141": {
        start: {
          line: 947,
          column: 14
        },
        end: {
          line: 949,
          column: 15
        }
      },
      "142": {
        start: {
          line: 948,
          column: 16
        },
        end: {
          line: 948,
          column: 26
        }
      },
      "143": {
        start: {
          line: 950,
          column: 14
        },
        end: {
          line: 968,
          column: 16
        }
      },
      "144": {
        start: {
          line: 974,
          column: 4
        },
        end: {
          line: 1022,
          column: 5
        }
      },
      "145": {
        start: {
          line: 975,
          column: 6
        },
        end: {
          line: 1018,
          column: 7
        }
      },
      "146": {
        start: {
          line: 976,
          column: 8
        },
        end: {
          line: 1017,
          column: 10
        }
      },
      "147": {
        start: {
          line: 989,
          column: 16
        },
        end: {
          line: 991,
          column: 17
        }
      },
      "148": {
        start: {
          line: 990,
          column: 18
        },
        end: {
          line: 990,
          column: 28
        }
      },
      "149": {
        start: {
          line: 992,
          column: 16
        },
        end: {
          line: 1013,
          column: 18
        }
      },
      "150": {
        start: {
          line: 1006,
          column: 37
        },
        end: {
          line: 1006,
          column: 72
        }
      },
      "151": {
        start: {
          line: 1019,
          column: 6
        },
        end: {
          line: 1021,
          column: 7
        }
      },
      "152": {
        start: {
          line: 1020,
          column: 8
        },
        end: {
          line: 1020,
          column: 34
        }
      },
      "153": {
        start: {
          line: 1023,
          column: 4
        },
        end: {
          line: 1023,
          column: 14
        }
      },
      "154": {
        start: {
          line: 1036,
          column: 24
        },
        end: {
          line: 1036,
          column: 34
        }
      },
      "155": {
        start: {
          line: 1038,
          column: 6
        },
        end: {
          line: 1054,
          column: 12
        }
      },
      "156": {
        start: {
          line: 1056,
          column: 4
        },
        end: {
          line: 1058,
          column: 5
        }
      },
      "157": {
        start: {
          line: 1057,
          column: 6
        },
        end: {
          line: 1057,
          column: 60
        }
      },
      "158": {
        start: {
          line: 1059,
          column: 4
        },
        end: {
          line: 1059,
          column: 23
        }
      },
      "159": {
        start: {
          line: 1072,
          column: 49
        },
        end: {
          line: 1072,
          column: 73
        }
      },
      "160": {
        start: {
          line: 1077,
          column: 4
        },
        end: {
          line: 1077,
          column: 66
        }
      },
      "161": {
        start: {
          line: 1077,
          column: 48
        },
        end: {
          line: 1077,
          column: 66
        }
      },
      "162": {
        start: {
          line: 1080,
          column: 4
        },
        end: {
          line: 1080,
          column: 84
        }
      },
      "163": {
        start: {
          line: 1080,
          column: 49
        },
        end: {
          line: 1080,
          column: 84
        }
      },
      "164": {
        start: {
          line: 1082,
          column: 4
        },
        end: {
          line: 1082,
          column: 75
        }
      },
      "165": {
        start: {
          line: 1082,
          column: 38
        },
        end: {
          line: 1082,
          column: 75
        }
      },
      "166": {
        start: {
          line: 1084,
          column: 4
        },
        end: {
          line: 1084,
          column: 22
        }
      },
      "167": {
        start: {
          line: 1095,
          column: 33
        },
        end: {
          line: 1095,
          column: 57
        }
      },
      "168": {
        start: {
          line: 1097,
          column: 4
        },
        end: {
          line: 1115,
          column: 8
        }
      },
      "169": {
        start: {
          line: 1098,
          column: 6
        },
        end: {
          line: 1115,
          column: 8
        }
      },
      "170": {
        start: {
          line: 1117,
          column: 4
        },
        end: {
          line: 1117,
          column: 70
        }
      },
      "171": {
        start: {
          line: 1127,
          column: 39
        },
        end: {
          line: 1127,
          column: 63
        }
      },
      "172": {
        start: {
          line: 1129,
          column: 4
        },
        end: {
          line: 1139,
          column: 8
        }
      },
      "173": {
        start: {
          line: 1130,
          column: 6
        },
        end: {
          line: 1139,
          column: 8
        }
      },
      "174": {
        start: {
          line: 1141,
          column: 4
        },
        end: {
          line: 1150,
          column: 6
        }
      },
      "175": {
        start: {
          line: 1154,
          column: 53
        },
        end: {
          line: 1154,
          column: 63
        }
      },
      "176": {
        start: {
          line: 1155,
          column: 60
        },
        end: {
          line: 1155,
          column: 70
        }
      },
      "177": {
        start: {
          line: 1156,
          column: 4
        },
        end: {
          line: 1156,
          column: 42
        }
      },
      "178": {
        start: {
          line: 1159,
          column: 6
        },
        end: {
          line: 1191,
          column: 12
        }
      },
      "179": {
        start: {
          line: 1194,
          column: 6
        },
        end: {
          line: 1299,
          column: 13
        }
      },
      "180": {
        start: {
          line: 1211,
          column: 12
        },
        end: {
          line: 1289,
          column: 14
        }
      },
      "181": {
        start: {
          line: 1223,
          column: 33
        },
        end: {
          line: 1223,
          column: 65
        }
      },
      "182": {
        start: {
          line: 1225,
          column: 20
        },
        end: {
          line: 1225,
          column: 84
        }
      },
      "183": {
        start: {
          line: 1228,
          column: 20
        },
        end: {
          line: 1230,
          column: 28
        }
      },
      "184": {
        start: {
          line: 1254,
          column: 47
        },
        end: {
          line: 1254,
          column: 79
        }
      },
      "185": {
        start: {
          line: 1275,
          column: 35
        },
        end: {
          line: 1275,
          column: 67
        }
      },
      "186": {
        start: {
          line: 1302,
          column: 6
        },
        end: {
          line: 1353,
          column: 20
        }
      },
      "187": {
        start: {
          line: 1308,
          column: 10
        },
        end: {
          line: 1335,
          column: 12
        }
      },
      "188": {
        start: {
          line: 1356,
          column: 6
        },
        end: {
          line: 1380,
          column: 17
        }
      },
      "189": {
        start: {
          line: 1384,
          column: 6
        },
        end: {
          line: 1410,
          column: 12
        }
      },
      "190": {
        start: {
          line: 1413,
          column: 4
        },
        end: {
          line: 1433,
          column: 6
        }
      },
      "191": {
        start: {
          line: 1437,
          column: 0
        },
        end: {
          line: 1440,
          column: 2
        }
      },
      "192": {
        start: {
          line: 1442,
          column: 27
        },
        end: {
          line: 1448,
          column: 2
        }
      },
      "193": {
        start: {
          line: 1442,
          column: 42
        },
        end: {
          line: 1448,
          column: 1
        }
      },
      "194": {
        start: {
          line: 1450,
          column: 24
        },
        end: {
          line: 1469,
          column: 1
        }
      },
      "195": {
        start: {
          line: 1451,
          column: 23
        },
        end: {
          line: 1451,
          column: 55
        }
      },
      "196": {
        start: {
          line: 1452,
          column: 25
        },
        end: {
          line: 1452,
          column: 52
        }
      },
      "197": {
        start: {
          line: 1453,
          column: 15
        },
        end: {
          line: 1453,
          column: 44
        }
      },
      "198": {
        start: {
          line: 1454,
          column: 28
        },
        end: {
          line: 1454,
          column: 58
        }
      },
      "199": {
        start: {
          line: 1455,
          column: 31
        },
        end: {
          line: 1455,
          column: 64
        }
      },
      "200": {
        start: {
          line: 1456,
          column: 23
        },
        end: {
          line: 1456,
          column: 48
        }
      },
      "201": {
        start: {
          line: 1457,
          column: 15
        },
        end: {
          line: 1457,
          column: 32
        }
      },
      "202": {
        start: {
          line: 1458,
          column: 28
        },
        end: {
          line: 1458,
          column: 58
        }
      },
      "203": {
        start: {
          line: 1459,
          column: 2
        },
        end: {
          line: 1468,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 82,
            column: 15
          },
          end: {
            line: 82,
            column: 16
          }
        },
        loc: {
          start: {
            line: 82,
            column: 27
          },
          end: {
            line: 335,
            column: 1
          }
        },
        line: 82
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 340,
            column: 31
          },
          end: {
            line: 340,
            column: 32
          }
        },
        loc: {
          start: {
            line: 340,
            column: 94
          },
          end: {
            line: 507,
            column: 1
          }
        },
        line: 340
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 549,
            column: 2
          },
          end: {
            line: 549,
            column: 3
          }
        },
        loc: {
          start: {
            line: 549,
            column: 21
          },
          end: {
            line: 575,
            column: 3
          }
        },
        line: 549
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 577,
            column: 2
          },
          end: {
            line: 577,
            column: 3
          }
        },
        loc: {
          start: {
            line: 577,
            column: 24
          },
          end: {
            line: 579,
            column: 3
          }
        },
        line: 577
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 583,
            column: 2
          },
          end: {
            line: 583,
            column: 3
          }
        },
        loc: {
          start: {
            line: 583,
            column: 22
          },
          end: {
            line: 586,
            column: 3
          }
        },
        line: 583
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 588,
            column: 2
          },
          end: {
            line: 588,
            column: 3
          }
        },
        loc: {
          start: {
            line: 588,
            column: 22
          },
          end: {
            line: 610,
            column: 3
          }
        },
        line: 588
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 595,
            column: 6
          },
          end: {
            line: 595,
            column: 7
          }
        },
        loc: {
          start: {
            line: 595,
            column: 18
          },
          end: {
            line: 607,
            column: 7
          }
        },
        line: 595
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 608,
            column: 6
          },
          end: {
            line: 608,
            column: 7
          }
        },
        loc: {
          start: {
            line: 608,
            column: 15
          },
          end: {
            line: 608,
            column: 33
          }
        },
        line: 608
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 612,
            column: 2
          },
          end: {
            line: 612,
            column: 3
          }
        },
        loc: {
          start: {
            line: 612,
            column: 24
          },
          end: {
            line: 635,
            column: 3
          }
        },
        line: 612
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 619,
            column: 6
          },
          end: {
            line: 619,
            column: 7
          }
        },
        loc: {
          start: {
            line: 619,
            column: 18
          },
          end: {
            line: 632,
            column: 7
          }
        },
        line: 619
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 633,
            column: 6
          },
          end: {
            line: 633,
            column: 7
          }
        },
        loc: {
          start: {
            line: 633,
            column: 15
          },
          end: {
            line: 633,
            column: 33
          }
        },
        line: 633
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 637,
            column: 2
          },
          end: {
            line: 637,
            column: 3
          }
        },
        loc: {
          start: {
            line: 637,
            column: 51
          },
          end: {
            line: 639,
            column: 3
          }
        },
        line: 637
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 645,
            column: 2
          },
          end: {
            line: 645,
            column: 3
          }
        },
        loc: {
          start: {
            line: 645,
            column: 45
          },
          end: {
            line: 677,
            column: 3
          }
        },
        line: 645
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 651,
            column: 24
          },
          end: {
            line: 651,
            column: 25
          }
        },
        loc: {
          start: {
            line: 651,
            column: 78
          },
          end: {
            line: 673,
            column: 11
          }
        },
        line: 651
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 679,
            column: 2
          },
          end: {
            line: 679,
            column: 3
          }
        },
        loc: {
          start: {
            line: 679,
            column: 59
          },
          end: {
            line: 730,
            column: 3
          }
        },
        line: 679
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 694,
            column: 27
          },
          end: {
            line: 694,
            column: 28
          }
        },
        loc: {
          start: {
            line: 694,
            column: 34
          },
          end: {
            line: 698,
            column: 15
          }
        },
        line: 694
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 699,
            column: 26
          },
          end: {
            line: 699,
            column: 27
          }
        },
        loc: {
          start: {
            line: 699,
            column: 33
          },
          end: {
            line: 703,
            column: 15
          }
        },
        line: 699
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 721,
            column: 21
          },
          end: {
            line: 721,
            column: 22
          }
        },
        loc: {
          start: {
            line: 721,
            column: 27
          },
          end: {
            line: 721,
            column: 70
          }
        },
        line: 721
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 731,
            column: 2
          },
          end: {
            line: 731,
            column: 3
          }
        },
        loc: {
          start: {
            line: 731,
            column: 35
          },
          end: {
            line: 774,
            column: 3
          }
        },
        line: 731
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 734,
            column: 32
          },
          end: {
            line: 734,
            column: 33
          }
        },
        loc: {
          start: {
            line: 734,
            column: 46
          },
          end: {
            line: 773,
            column: 5
          }
        },
        line: 734
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 736,
            column: 29
          },
          end: {
            line: 736,
            column: 30
          }
        },
        loc: {
          start: {
            line: 736,
            column: 45
          },
          end: {
            line: 745,
            column: 9
          }
        },
        line: 736
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 750,
            column: 30
          },
          end: {
            line: 750,
            column: 31
          }
        },
        loc: {
          start: {
            line: 750,
            column: 38
          },
          end: {
            line: 760,
            column: 9
          }
        },
        line: 750
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 753,
            column: 14
          },
          end: {
            line: 753,
            column: 15
          }
        },
        loc: {
          start: {
            line: 753,
            column: 23
          },
          end: {
            line: 753,
            column: 66
          }
        },
        line: 753
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 767,
            column: 30
          },
          end: {
            line: 767,
            column: 31
          }
        },
        loc: {
          start: {
            line: 767,
            column: 38
          },
          end: {
            line: 771,
            column: 9
          }
        },
        line: 767
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 775,
            column: 2
          },
          end: {
            line: 775,
            column: 3
          }
        },
        loc: {
          start: {
            line: 775,
            column: 23
          },
          end: {
            line: 792,
            column: 3
          }
        },
        line: 775
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 777,
            column: 32
          },
          end: {
            line: 777,
            column: 33
          }
        },
        loc: {
          start: {
            line: 777,
            column: 46
          },
          end: {
            line: 791,
            column: 5
          }
        },
        line: 777
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 779,
            column: 29
          },
          end: {
            line: 779,
            column: 30
          }
        },
        loc: {
          start: {
            line: 779,
            column: 45
          },
          end: {
            line: 789,
            column: 9
          }
        },
        line: 779
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 794,
            column: 2
          },
          end: {
            line: 794,
            column: 3
          }
        },
        loc: {
          start: {
            line: 794,
            column: 48
          },
          end: {
            line: 821,
            column: 3
          }
        },
        line: 794
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 803,
            column: 36
          },
          end: {
            line: 803,
            column: 37
          }
        },
        loc: {
          start: {
            line: 803,
            column: 77
          },
          end: {
            line: 814,
            column: 5
          }
        },
        line: 803
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 810,
            column: 25
          },
          end: {
            line: 810,
            column: 26
          }
        },
        loc: {
          start: {
            line: 810,
            column: 64
          },
          end: {
            line: 812,
            column: 9
          }
        },
        line: 810
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 816,
            column: 38
          },
          end: {
            line: 816,
            column: 39
          }
        },
        loc: {
          start: {
            line: 816,
            column: 77
          },
          end: {
            line: 818,
            column: 5
          }
        },
        line: 816
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 830,
            column: 2
          },
          end: {
            line: 830,
            column: 3
          }
        },
        loc: {
          start: {
            line: 830,
            column: 26
          },
          end: {
            line: 849,
            column: 3
          }
        },
        line: 830
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 834,
            column: 25
          },
          end: {
            line: 834,
            column: 26
          }
        },
        loc: {
          start: {
            line: 834,
            column: 38
          },
          end: {
            line: 847,
            column: 5
          }
        },
        line: 834
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 856,
            column: 2
          },
          end: {
            line: 856,
            column: 3
          }
        },
        loc: {
          start: {
            line: 856,
            column: 24
          },
          end: {
            line: 870,
            column: 3
          }
        },
        line: 856
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 875,
            column: 21
          },
          end: {
            line: 875,
            column: 22
          }
        },
        loc: {
          start: {
            line: 875,
            column: 27
          },
          end: {
            line: 877,
            column: 3
          }
        },
        line: 875
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 885,
            column: 2
          },
          end: {
            line: 885,
            column: 3
          }
        },
        loc: {
          start: {
            line: 885,
            column: 31
          },
          end: {
            line: 891,
            column: 3
          }
        },
        line: 885
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 893,
            column: 21
          },
          end: {
            line: 893,
            column: 22
          }
        },
        loc: {
          start: {
            line: 893,
            column: 27
          },
          end: {
            line: 896,
            column: 3
          }
        },
        line: 893
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 898,
            column: 18
          },
          end: {
            line: 898,
            column: 19
          }
        },
        loc: {
          start: {
            line: 898,
            column: 24
          },
          end: {
            line: 901,
            column: 3
          }
        },
        line: 898
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 909,
            column: 23
          },
          end: {
            line: 909,
            column: 24
          }
        },
        loc: {
          start: {
            line: 909,
            column: 35
          },
          end: {
            line: 918,
            column: 3
          }
        },
        line: 909
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 913,
            column: 52
          },
          end: {
            line: 913,
            column: 53
          }
        },
        loc: {
          start: {
            line: 913,
            column: 62
          },
          end: {
            line: 913,
            column: 77
          }
        },
        line: 913
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 929,
            column: 2
          },
          end: {
            line: 929,
            column: 3
          }
        },
        loc: {
          start: {
            line: 929,
            column: 42
          },
          end: {
            line: 1024,
            column: 3
          }
        },
        line: 929
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 937,
            column: 12
          },
          end: {
            line: 937,
            column: 13
          }
        },
        loc: {
          start: {
            line: 946,
            column: 18
          },
          end: {
            line: 969,
            column: 13
          }
        },
        line: 946
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 979,
            column: 14
          },
          end: {
            line: 979,
            column: 15
          }
        },
        loc: {
          start: {
            line: 988,
            column: 20
          },
          end: {
            line: 1014,
            column: 15
          }
        },
        line: 988
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 1006,
            column: 31
          },
          end: {
            line: 1006,
            column: 32
          }
        },
        loc: {
          start: {
            line: 1006,
            column: 37
          },
          end: {
            line: 1006,
            column: 72
          }
        },
        line: 1006
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 1035,
            column: 2
          },
          end: {
            line: 1035,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1035,
            column: 60
          },
          end: {
            line: 1060,
            column: 3
          }
        },
        line: 1035
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 1071,
            column: 2
          },
          end: {
            line: 1071,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1071,
            column: 27
          },
          end: {
            line: 1085,
            column: 3
          }
        },
        line: 1071
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 1094,
            column: 2
          },
          end: {
            line: 1094,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1094,
            column: 21
          },
          end: {
            line: 1118,
            column: 3
          }
        },
        line: 1094
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 1126,
            column: 2
          },
          end: {
            line: 1126,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1126,
            column: 26
          },
          end: {
            line: 1151,
            column: 3
          }
        },
        line: 1126
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 1153,
            column: 2
          },
          end: {
            line: 1153,
            column: 3
          }
        },
        loc: {
          start: {
            line: 1153,
            column: 11
          },
          end: {
            line: 1434,
            column: 3
          }
        },
        line: 1153
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 1196,
            column: 10
          },
          end: {
            line: 1196,
            column: 11
          }
        },
        loc: {
          start: {
            line: 1207,
            column: 16
          },
          end: {
            line: 1290,
            column: 11
          }
        },
        line: 1207
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 1223,
            column: 27
          },
          end: {
            line: 1223,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1223,
            column: 33
          },
          end: {
            line: 1223,
            column: 65
          }
        },
        line: 1223
      },
      "51": {
        name: "(anonymous_51)",
        decl: {
          start: {
            line: 1224,
            column: 31
          },
          end: {
            line: 1224,
            column: 32
          }
        },
        loc: {
          start: {
            line: 1225,
            column: 20
          },
          end: {
            line: 1225,
            column: 84
          }
        },
        line: 1225
      },
      "52": {
        name: "(anonymous_52)",
        decl: {
          start: {
            line: 1227,
            column: 32
          },
          end: {
            line: 1227,
            column: 33
          }
        },
        loc: {
          start: {
            line: 1228,
            column: 20
          },
          end: {
            line: 1230,
            column: 28
          }
        },
        line: 1228
      },
      "53": {
        name: "(anonymous_53)",
        decl: {
          start: {
            line: 1254,
            column: 41
          },
          end: {
            line: 1254,
            column: 42
          }
        },
        loc: {
          start: {
            line: 1254,
            column: 47
          },
          end: {
            line: 1254,
            column: 79
          }
        },
        line: 1254
      },
      "54": {
        name: "(anonymous_54)",
        decl: {
          start: {
            line: 1275,
            column: 29
          },
          end: {
            line: 1275,
            column: 30
          }
        },
        loc: {
          start: {
            line: 1275,
            column: 35
          },
          end: {
            line: 1275,
            column: 67
          }
        },
        line: 1275
      },
      "55": {
        name: "(anonymous_55)",
        decl: {
          start: {
            line: 1307,
            column: 25
          },
          end: {
            line: 1307,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1307,
            column: 63
          },
          end: {
            line: 1336,
            column: 9
          }
        },
        line: 1307
      },
      "56": {
        name: "(anonymous_56)",
        decl: {
          start: {
            line: 1442,
            column: 27
          },
          end: {
            line: 1442,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1442,
            column: 42
          },
          end: {
            line: 1448,
            column: 1
          }
        },
        line: 1442
      },
      "57": {
        name: "(anonymous_57)",
        decl: {
          start: {
            line: 1450,
            column: 24
          },
          end: {
            line: 1450,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1450,
            column: 35
          },
          end: {
            line: 1469,
            column: 1
          }
        },
        line: 1450
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 596,
            column: 8
          },
          end: {
            line: 606,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 596,
            column: 8
          },
          end: {
            line: 606,
            column: 9
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
        line: 596
      },
      "1": {
        loc: {
          start: {
            line: 620,
            column: 8
          },
          end: {
            line: 631,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 620,
            column: 8
          },
          end: {
            line: 631,
            column: 9
          }
        }, {
          start: {
            line: 622,
            column: 15
          },
          end: {
            line: 631,
            column: 9
          }
        }],
        line: 620
      },
      "2": {
        loc: {
          start: {
            line: 648,
            column: 4
          },
          end: {
            line: 676,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 648,
            column: 4
          },
          end: {
            line: 676,
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
        line: 648
      },
      "3": {
        loc: {
          start: {
            line: 648,
            column: 8
          },
          end: {
            line: 648,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 648,
            column: 8
          },
          end: {
            line: 648,
            column: 16
          }
        }, {
          start: {
            line: 648,
            column: 20
          },
          end: {
            line: 648,
            column: 39
          }
        }],
        line: 648
      },
      "4": {
        loc: {
          start: {
            line: 652,
            column: 12
          },
          end: {
            line: 654,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 652,
            column: 12
          },
          end: {
            line: 654,
            column: 13
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
        line: 652
      },
      "5": {
        loc: {
          start: {
            line: 652,
            column: 16
          },
          end: {
            line: 652,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 652,
            column: 16
          },
          end: {
            line: 652,
            column: 44
          }
        }, {
          start: {
            line: 652,
            column: 48
          },
          end: {
            line: 652,
            column: 54
          }
        }],
        line: 652
      },
      "6": {
        loc: {
          start: {
            line: 661,
            column: 20
          },
          end: {
            line: 661,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 661,
            column: 34
          },
          end: {
            line: 661,
            column: 36
          }
        }, {
          start: {
            line: 661,
            column: 39
          },
          end: {
            line: 661,
            column: 54
          }
        }],
        line: 661
      },
      "7": {
        loc: {
          start: {
            line: 664,
            column: 20
          },
          end: {
            line: 664,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 664,
            column: 20
          },
          end: {
            line: 664,
            column: 33
          }
        }, {
          start: {
            line: 664,
            column: 37
          },
          end: {
            line: 664,
            column: 59
          }
        }],
        line: 664
      },
      "8": {
        loc: {
          start: {
            line: 665,
            column: 20
          },
          end: {
            line: 665,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 665,
            column: 20
          },
          end: {
            line: 665,
            column: 37
          }
        }, {
          start: {
            line: 665,
            column: 41
          },
          end: {
            line: 665,
            column: 58
          }
        }],
        line: 665
      },
      "9": {
        loc: {
          start: {
            line: 708,
            column: 21
          },
          end: {
            line: 708,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 708,
            column: 39
          },
          end: {
            line: 708,
            column: 55
          }
        }, {
          start: {
            line: 708,
            column: 58
          },
          end: {
            line: 708,
            column: 77
          }
        }],
        line: 708
      },
      "10": {
        loc: {
          start: {
            line: 716,
            column: 4
          },
          end: {
            line: 727,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 716,
            column: 4
          },
          end: {
            line: 727,
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
        line: 716
      },
      "11": {
        loc: {
          start: {
            line: 735,
            column: 6
          },
          end: {
            line: 746,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 735,
            column: 6
          },
          end: {
            line: 746,
            column: 7
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
        line: 735
      },
      "12": {
        loc: {
          start: {
            line: 737,
            column: 10
          },
          end: {
            line: 739,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 737,
            column: 10
          },
          end: {
            line: 739,
            column: 11
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
        line: 737
      },
      "13": {
        loc: {
          start: {
            line: 748,
            column: 6
          },
          end: {
            line: 763,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 748,
            column: 6
          },
          end: {
            line: 763,
            column: 7
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
        line: 748
      },
      "14": {
        loc: {
          start: {
            line: 751,
            column: 10
          },
          end: {
            line: 759,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 751,
            column: 10
          },
          end: {
            line: 759,
            column: 11
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
        line: 751
      },
      "15": {
        loc: {
          start: {
            line: 755,
            column: 12
          },
          end: {
            line: 758,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 755,
            column: 12
          },
          end: {
            line: 758,
            column: 13
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
        line: 755
      },
      "16": {
        loc: {
          start: {
            line: 766,
            column: 6
          },
          end: {
            line: 772,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 766,
            column: 6
          },
          end: {
            line: 772,
            column: 7
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
        line: 766
      },
      "17": {
        loc: {
          start: {
            line: 768,
            column: 10
          },
          end: {
            line: 770,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 768,
            column: 10
          },
          end: {
            line: 770,
            column: 11
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
        line: 768
      },
      "18": {
        loc: {
          start: {
            line: 778,
            column: 6
          },
          end: {
            line: 790,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 778,
            column: 6
          },
          end: {
            line: 790,
            column: 7
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
        line: 778
      },
      "19": {
        loc: {
          start: {
            line: 780,
            column: 10
          },
          end: {
            line: 788,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 780,
            column: 10
          },
          end: {
            line: 788,
            column: 11
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
        line: 780
      },
      "20": {
        loc: {
          start: {
            line: 781,
            column: 12
          },
          end: {
            line: 782,
            column: 91
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 781,
            column: 12
          },
          end: {
            line: 781,
            column: 86
          }
        }, {
          start: {
            line: 782,
            column: 12
          },
          end: {
            line: 782,
            column: 91
          }
        }],
        line: 781
      },
      "21": {
        loc: {
          start: {
            line: 798,
            column: 4
          },
          end: {
            line: 801,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 798,
            column: 4
          },
          end: {
            line: 801,
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
        line: 798
      },
      "22": {
        loc: {
          start: {
            line: 804,
            column: 6
          },
          end: {
            line: 808,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 804,
            column: 6
          },
          end: {
            line: 808,
            column: 7
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
        line: 804
      },
      "23": {
        loc: {
          start: {
            line: 809,
            column: 6
          },
          end: {
            line: 813,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 809,
            column: 6
          },
          end: {
            line: 813,
            column: 7
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
        line: 809
      },
      "24": {
        loc: {
          start: {
            line: 809,
            column: 10
          },
          end: {
            line: 809,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 809,
            column: 10
          },
          end: {
            line: 809,
            column: 18
          }
        }, {
          start: {
            line: 809,
            column: 22
          },
          end: {
            line: 809,
            column: 41
          }
        }],
        line: 809
      },
      "25": {
        loc: {
          start: {
            line: 836,
            column: 6
          },
          end: {
            line: 838,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 836,
            column: 6
          },
          end: {
            line: 838,
            column: 7
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
        line: 836
      },
      "26": {
        loc: {
          start: {
            line: 861,
            column: 6
          },
          end: {
            line: 863,
            column: 12
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 862,
            column: 10
          },
          end: {
            line: 862,
            column: 100
          }
        }, {
          start: {
            line: 863,
            column: 10
          },
          end: {
            line: 863,
            column: 12
          }
        }],
        line: 861
      },
      "27": {
        loc: {
          start: {
            line: 865,
            column: 4
          },
          end: {
            line: 868,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 865,
            column: 4
          },
          end: {
            line: 868,
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
        line: 865
      },
      "28": {
        loc: {
          start: {
            line: 888,
            column: 4
          },
          end: {
            line: 890,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 888,
            column: 4
          },
          end: {
            line: 890,
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
        line: 888
      },
      "29": {
        loc: {
          start: {
            line: 888,
            column: 8
          },
          end: {
            line: 888,
            column: 25
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 888,
            column: 8
          },
          end: {
            line: 888,
            column: 16
          }
        }, {
          start: {
            line: 888,
            column: 20
          },
          end: {
            line: 888,
            column: 25
          }
        }],
        line: 888
      },
      "30": {
        loc: {
          start: {
            line: 912,
            column: 4
          },
          end: {
            line: 917,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 912,
            column: 4
          },
          end: {
            line: 917,
            column: 5
          }
        }, {
          start: {
            line: 914,
            column: 11
          },
          end: {
            line: 917,
            column: 5
          }
        }],
        line: 912
      },
      "31": {
        loc: {
          start: {
            line: 933,
            column: 4
          },
          end: {
            line: 973,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 933,
            column: 4
          },
          end: {
            line: 973,
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
        line: 933
      },
      "32": {
        loc: {
          start: {
            line: 933,
            column: 8
          },
          end: {
            line: 933,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 933,
            column: 8
          },
          end: {
            line: 933,
            column: 27
          }
        }, {
          start: {
            line: 933,
            column: 31
          },
          end: {
            line: 933,
            column: 39
          }
        }, {
          start: {
            line: 933,
            column: 43
          },
          end: {
            line: 933,
            column: 62
          }
        }],
        line: 933
      },
      "33": {
        loc: {
          start: {
            line: 947,
            column: 14
          },
          end: {
            line: 949,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 947,
            column: 14
          },
          end: {
            line: 949,
            column: 15
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
        line: 947
      },
      "34": {
        loc: {
          start: {
            line: 947,
            column: 18
          },
          end: {
            line: 947,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 947,
            column: 18
          },
          end: {
            line: 947,
            column: 46
          }
        }, {
          start: {
            line: 947,
            column: 50
          },
          end: {
            line: 947,
            column: 56
          }
        }],
        line: 947
      },
      "35": {
        loc: {
          start: {
            line: 956,
            column: 22
          },
          end: {
            line: 956,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 956,
            column: 36
          },
          end: {
            line: 956,
            column: 51
          }
        }, {
          start: {
            line: 956,
            column: 54
          },
          end: {
            line: 956,
            column: 69
          }
        }],
        line: 956
      },
      "36": {
        loc: {
          start: {
            line: 959,
            column: 22
          },
          end: {
            line: 959,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 959,
            column: 22
          },
          end: {
            line: 959,
            column: 36
          }
        }, {
          start: {
            line: 959,
            column: 40
          },
          end: {
            line: 959,
            column: 62
          }
        }],
        line: 959
      },
      "37": {
        loc: {
          start: {
            line: 960,
            column: 22
          },
          end: {
            line: 960,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 960,
            column: 22
          },
          end: {
            line: 960,
            column: 39
          }
        }, {
          start: {
            line: 960,
            column: 43
          },
          end: {
            line: 960,
            column: 60
          }
        }],
        line: 960
      },
      "38": {
        loc: {
          start: {
            line: 962,
            column: 30
          },
          end: {
            line: 962,
            column: 97
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 962,
            column: 44
          },
          end: {
            line: 962,
            column: 89
          }
        }, {
          start: {
            line: 962,
            column: 92
          },
          end: {
            line: 962,
            column: 97
          }
        }],
        line: 962
      },
      "39": {
        loc: {
          start: {
            line: 974,
            column: 4
          },
          end: {
            line: 1022,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 974,
            column: 4
          },
          end: {
            line: 1022,
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
        line: 974
      },
      "40": {
        loc: {
          start: {
            line: 975,
            column: 6
          },
          end: {
            line: 1018,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 975,
            column: 6
          },
          end: {
            line: 1018,
            column: 7
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
        line: 975
      },
      "41": {
        loc: {
          start: {
            line: 975,
            column: 10
          },
          end: {
            line: 975,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 975,
            column: 10
          },
          end: {
            line: 975,
            column: 18
          }
        }, {
          start: {
            line: 975,
            column: 22
          },
          end: {
            line: 975,
            column: 41
          }
        }],
        line: 975
      },
      "42": {
        loc: {
          start: {
            line: 989,
            column: 16
          },
          end: {
            line: 991,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 989,
            column: 16
          },
          end: {
            line: 991,
            column: 17
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
        line: 989
      },
      "43": {
        loc: {
          start: {
            line: 989,
            column: 20
          },
          end: {
            line: 989,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 989,
            column: 20
          },
          end: {
            line: 989,
            column: 48
          }
        }, {
          start: {
            line: 989,
            column: 52
          },
          end: {
            line: 989,
            column: 58
          }
        }],
        line: 989
      },
      "44": {
        loc: {
          start: {
            line: 993,
            column: 44
          },
          end: {
            line: 993,
            column: 84
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 993,
            column: 53
          },
          end: {
            line: 993,
            column: 77
          }
        }, {
          start: {
            line: 993,
            column: 80
          },
          end: {
            line: 993,
            column: 84
          }
        }],
        line: 993
      },
      "45": {
        loc: {
          start: {
            line: 999,
            column: 24
          },
          end: {
            line: 999,
            column: 71
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 999,
            column: 38
          },
          end: {
            line: 999,
            column: 53
          }
        }, {
          start: {
            line: 999,
            column: 56
          },
          end: {
            line: 999,
            column: 71
          }
        }],
        line: 999
      },
      "46": {
        loc: {
          start: {
            line: 1002,
            column: 24
          },
          end: {
            line: 1002,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1002,
            column: 24
          },
          end: {
            line: 1002,
            column: 38
          }
        }, {
          start: {
            line: 1002,
            column: 42
          },
          end: {
            line: 1002,
            column: 64
          }
        }],
        line: 1002
      },
      "47": {
        loc: {
          start: {
            line: 1003,
            column: 24
          },
          end: {
            line: 1003,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1003,
            column: 24
          },
          end: {
            line: 1003,
            column: 41
          }
        }, {
          start: {
            line: 1003,
            column: 45
          },
          end: {
            line: 1003,
            column: 62
          }
        }],
        line: 1003
      },
      "48": {
        loc: {
          start: {
            line: 1004,
            column: 24
          },
          end: {
            line: 1004,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1004,
            column: 24
          },
          end: {
            line: 1004,
            column: 30
          }
        }, {
          start: {
            line: 1004,
            column: 34
          },
          end: {
            line: 1004,
            column: 50
          }
        }],
        line: 1004
      },
      "49": {
        loc: {
          start: {
            line: 1007,
            column: 32
          },
          end: {
            line: 1007,
            column: 99
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1007,
            column: 46
          },
          end: {
            line: 1007,
            column: 91
          }
        }, {
          start: {
            line: 1007,
            column: 94
          },
          end: {
            line: 1007,
            column: 99
          }
        }],
        line: 1007
      },
      "50": {
        loc: {
          start: {
            line: 1019,
            column: 6
          },
          end: {
            line: 1021,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1019,
            column: 6
          },
          end: {
            line: 1021,
            column: 7
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
        line: 1019
      },
      "51": {
        loc: {
          start: {
            line: 1019,
            column: 10
          },
          end: {
            line: 1019,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1019,
            column: 10
          },
          end: {
            line: 1019,
            column: 18
          }
        }, {
          start: {
            line: 1019,
            column: 22
          },
          end: {
            line: 1019,
            column: 43
          }
        }],
        line: 1019
      },
      "52": {
        loc: {
          start: {
            line: 1049,
            column: 21
          },
          end: {
            line: 1049,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1049,
            column: 39
          },
          end: {
            line: 1049,
            column: 55
          }
        }, {
          start: {
            line: 1049,
            column: 58
          },
          end: {
            line: 1049,
            column: 77
          }
        }],
        line: 1049
      },
      "53": {
        loc: {
          start: {
            line: 1056,
            column: 4
          },
          end: {
            line: 1058,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1056,
            column: 4
          },
          end: {
            line: 1058,
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
        line: 1056
      },
      "54": {
        loc: {
          start: {
            line: 1077,
            column: 4
          },
          end: {
            line: 1077,
            column: 66
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1077,
            column: 4
          },
          end: {
            line: 1077,
            column: 66
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
        line: 1077
      },
      "55": {
        loc: {
          start: {
            line: 1077,
            column: 8
          },
          end: {
            line: 1077,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1077,
            column: 8
          },
          end: {
            line: 1077,
            column: 34
          }
        }, {
          start: {
            line: 1077,
            column: 38
          },
          end: {
            line: 1077,
            column: 46
          }
        }],
        line: 1077
      },
      "56": {
        loc: {
          start: {
            line: 1080,
            column: 4
          },
          end: {
            line: 1080,
            column: 84
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1080,
            column: 4
          },
          end: {
            line: 1080,
            column: 84
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
        line: 1080
      },
      "57": {
        loc: {
          start: {
            line: 1080,
            column: 8
          },
          end: {
            line: 1080,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1080,
            column: 8
          },
          end: {
            line: 1080,
            column: 34
          }
        }, {
          start: {
            line: 1080,
            column: 38
          },
          end: {
            line: 1080,
            column: 47
          }
        }],
        line: 1080
      },
      "58": {
        loc: {
          start: {
            line: 1082,
            column: 4
          },
          end: {
            line: 1082,
            column: 75
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1082,
            column: 4
          },
          end: {
            line: 1082,
            column: 75
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
        line: 1082
      },
      "59": {
        loc: {
          start: {
            line: 1097,
            column: 4
          },
          end: {
            line: 1115,
            column: 8
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1097,
            column: 4
          },
          end: {
            line: 1115,
            column: 8
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
        line: 1097
      },
      "60": {
        loc: {
          start: {
            line: 1129,
            column: 4
          },
          end: {
            line: 1139,
            column: 8
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1129,
            column: 4
          },
          end: {
            line: 1139,
            column: 8
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
        line: 1129
      },
      "61": {
        loc: {
          start: {
            line: 1161,
            column: 10
          },
          end: {
            line: 1163,
            column: 16
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1162,
            column: 14
          },
          end: {
            line: 1162,
            column: 30
          }
        }, {
          start: {
            line: 1163,
            column: 14
          },
          end: {
            line: 1163,
            column: 16
          }
        }],
        line: 1161
      },
      "62": {
        loc: {
          start: {
            line: 1174,
            column: 12
          },
          end: {
            line: 1175,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1174,
            column: 12
          },
          end: {
            line: 1174,
            column: 89
          }
        }, {
          start: {
            line: 1175,
            column: 14
          },
          end: {
            line: 1175,
            column: 33
          }
        }],
        line: 1174
      },
      "63": {
        loc: {
          start: {
            line: 1179,
            column: 23
          },
          end: {
            line: 1179,
            column: 87
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1179,
            column: 43
          },
          end: {
            line: 1179,
            column: 68
          }
        }, {
          start: {
            line: 1179,
            column: 71
          },
          end: {
            line: 1179,
            column: 87
          }
        }],
        line: 1179
      },
      "64": {
        loc: {
          start: {
            line: 1184,
            column: 23
          },
          end: {
            line: 1184,
            column: 95
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1184,
            column: 43
          },
          end: {
            line: 1184,
            column: 72
          }
        }, {
          start: {
            line: 1184,
            column: 75
          },
          end: {
            line: 1184,
            column: 95
          }
        }],
        line: 1184
      },
      "65": {
        loc: {
          start: {
            line: 1212,
            column: 40
          },
          end: {
            line: 1212,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1212,
            column: 48
          },
          end: {
            line: 1212,
            column: 64
          }
        }, {
          start: {
            line: 1212,
            column: 67
          },
          end: {
            line: 1212,
            column: 69
          }
        }],
        line: 1212
      },
      "66": {
        loc: {
          start: {
            line: 1219,
            column: 20
          },
          end: {
            line: 1219,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1219,
            column: 27
          },
          end: {
            line: 1219,
            column: 49
          }
        }, {
          start: {
            line: 1219,
            column: 52
          },
          end: {
            line: 1219,
            column: 54
          }
        }],
        line: 1219
      },
      "67": {
        loc: {
          start: {
            line: 1220,
            column: 20
          },
          end: {
            line: 1220,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1220,
            column: 20
          },
          end: {
            line: 1220,
            column: 33
          }
        }, {
          start: {
            line: 1220,
            column: 37
          },
          end: {
            line: 1220,
            column: 59
          }
        }],
        line: 1220
      },
      "68": {
        loc: {
          start: {
            line: 1221,
            column: 20
          },
          end: {
            line: 1221,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1221,
            column: 20
          },
          end: {
            line: 1221,
            column: 25
          }
        }, {
          start: {
            line: 1221,
            column: 29
          },
          end: {
            line: 1221,
            column: 45
          }
        }],
        line: 1221
      },
      "69": {
        loc: {
          start: {
            line: 1225,
            column: 20
          },
          end: {
            line: 1225,
            column: 84
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1225,
            column: 40
          },
          end: {
            line: 1225,
            column: 77
          }
        }, {
          start: {
            line: 1225,
            column: 80
          },
          end: {
            line: 1225,
            column: 84
          }
        }],
        line: 1225
      },
      "70": {
        loc: {
          start: {
            line: 1228,
            column: 20
          },
          end: {
            line: 1230,
            column: 28
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1229,
            column: 24
          },
          end: {
            line: 1229,
            column: 59
          }
        }, {
          start: {
            line: 1230,
            column: 24
          },
          end: {
            line: 1230,
            column: 28
          }
        }],
        line: 1228
      },
      "71": {
        loc: {
          start: {
            line: 1228,
            column: 20
          },
          end: {
            line: 1228,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1228,
            column: 20
          },
          end: {
            line: 1228,
            column: 28
          }
        }, {
          start: {
            line: 1228,
            column: 32
          },
          end: {
            line: 1228,
            column: 71
          }
        }],
        line: 1228
      },
      "72": {
        loc: {
          start: {
            line: 1232,
            column: 28
          },
          end: {
            line: 1232,
            column: 92
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1232,
            column: 41
          },
          end: {
            line: 1232,
            column: 84
          }
        }, {
          start: {
            line: 1232,
            column: 87
          },
          end: {
            line: 1232,
            column: 92
          }
        }],
        line: 1232
      },
      "73": {
        loc: {
          start: {
            line: 1234,
            column: 30
          },
          end: {
            line: 1234,
            column: 46
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1234,
            column: 37
          },
          end: {
            line: 1234,
            column: 41
          }
        }, {
          start: {
            line: 1234,
            column: 44
          },
          end: {
            line: 1234,
            column: 46
          }
        }],
        line: 1234
      },
      "74": {
        loc: {
          start: {
            line: 1244,
            column: 25
          },
          end: {
            line: 1263,
            column: 25
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1247,
            column: 26
          },
          end: {
            line: 1260,
            column: 32
          }
        }, {
          start: {
            line: 1262,
            column: 26
          },
          end: {
            line: 1262,
            column: 90
          }
        }],
        line: 1244
      },
      "75": {
        loc: {
          start: {
            line: 1244,
            column: 25
          },
          end: {
            line: 1246,
            column: 78
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1244,
            column: 25
          },
          end: {
            line: 1244,
            column: 42
          }
        }, {
          start: {
            line: 1245,
            column: 25
          },
          end: {
            line: 1245,
            column: 57
          }
        }, {
          start: {
            line: 1246,
            column: 27
          },
          end: {
            line: 1246,
            column: 65
          }
        }, {
          start: {
            line: 1246,
            column: 69
          },
          end: {
            line: 1246,
            column: 76
          }
        }],
        line: 1244
      },
      "76": {
        loc: {
          start: {
            line: 1266,
            column: 35
          },
          end: {
            line: 1266,
            column: 93
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1266,
            column: 55
          },
          end: {
            line: 1266,
            column: 71
          }
        }, {
          start: {
            line: 1266,
            column: 74
          },
          end: {
            line: 1266,
            column: 93
          }
        }],
        line: 1266
      },
      "77": {
        loc: {
          start: {
            line: 1279,
            column: 27
          },
          end: {
            line: 1279,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1279,
            column: 60
          },
          end: {
            line: 1279,
            column: 74
          }
        }, {
          start: {
            line: 1279,
            column: 77
          },
          end: {
            line: 1279,
            column: 79
          }
        }],
        line: 1279
      },
      "78": {
        loc: {
          start: {
            line: 1279,
            column: 27
          },
          end: {
            line: 1279,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1279,
            column: 27
          },
          end: {
            line: 1279,
            column: 44
          }
        }, {
          start: {
            line: 1279,
            column: 48
          },
          end: {
            line: 1279,
            column: 57
          }
        }],
        line: 1279
      },
      "79": {
        loc: {
          start: {
            line: 1292,
            column: 9
          },
          end: {
            line: 1297,
            column: 16
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1293,
            column: 10
          },
          end: {
            line: 1296,
            column: 27
          }
        }, {
          start: {
            line: 1297,
            column: 12
          },
          end: {
            line: 1297,
            column: 16
          }
        }],
        line: 1292
      },
      "80": {
        loc: {
          start: {
            line: 1292,
            column: 9
          },
          end: {
            line: 1292,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1292,
            column: 9
          },
          end: {
            line: 1292,
            column: 29
          }
        }, {
          start: {
            line: 1292,
            column: 33
          },
          end: {
            line: 1292,
            column: 60
          }
        }],
        line: 1292
      },
      "81": {
        loc: {
          start: {
            line: 1304,
            column: 19
          },
          end: {
            line: 1304,
            column: 86
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1304,
            column: 40
          },
          end: {
            line: 1304,
            column: 58
          }
        }, {
          start: {
            line: 1304,
            column: 61
          },
          end: {
            line: 1304,
            column: 86
          }
        }],
        line: 1304
      },
      "82": {
        loc: {
          start: {
            line: 1305,
            column: 21
          },
          end: {
            line: 1305,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1305,
            column: 41
          },
          end: {
            line: 1305,
            column: 51
          }
        }, {
          start: {
            line: 1305,
            column: 54
          },
          end: {
            line: 1305,
            column: 66
          }
        }],
        line: 1305
      },
      "83": {
        loc: {
          start: {
            line: 1312,
            column: 21
          },
          end: {
            line: 1312,
            column: 86
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1312,
            column: 62
          },
          end: {
            line: 1312,
            column: 81
          }
        }, {
          start: {
            line: 1312,
            column: 84
          },
          end: {
            line: 1312,
            column: 86
          }
        }],
        line: 1312
      },
      "84": {
        loc: {
          start: {
            line: 1312,
            column: 21
          },
          end: {
            line: 1312,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1312,
            column: 21
          },
          end: {
            line: 1312,
            column: 38
          }
        }, {
          start: {
            line: 1312,
            column: 42
          },
          end: {
            line: 1312,
            column: 59
          }
        }],
        line: 1312
      },
      "85": {
        loc: {
          start: {
            line: 1315,
            column: 20
          },
          end: {
            line: 1315,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1315,
            column: 20
          },
          end: {
            line: 1315,
            column: 36
          }
        }, {
          start: {
            line: 1315,
            column: 40
          },
          end: {
            line: 1315,
            column: 58
          }
        }],
        line: 1315
      },
      "86": {
        loc: {
          start: {
            line: 1324,
            column: 20
          },
          end: {
            line: 1324,
            column: 65
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1324,
            column: 40
          },
          end: {
            line: 1324,
            column: 60
          }
        }, {
          start: {
            line: 1324,
            column: 63
          },
          end: {
            line: 1324,
            column: 65
          }
        }],
        line: 1324
      },
      "87": {
        loc: {
          start: {
            line: 1327,
            column: 62
          },
          end: {
            line: 1327,
            column: 97
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1327,
            column: 82
          },
          end: {
            line: 1327,
            column: 89
          }
        }, {
          start: {
            line: 1327,
            column: 92
          },
          end: {
            line: 1327,
            column: 97
          }
        }],
        line: 1327
      },
      "88": {
        loc: {
          start: {
            line: 1339,
            column: 17
          },
          end: {
            line: 1339,
            column: 81
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1339,
            column: 38
          },
          end: {
            line: 1339,
            column: 57
          }
        }, {
          start: {
            line: 1339,
            column: 60
          },
          end: {
            line: 1339,
            column: 81
          }
        }],
        line: 1339
      },
      "89": {
        loc: {
          start: {
            line: 1341,
            column: 53
          },
          end: {
            line: 1341,
            column: 88
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1341,
            column: 73
          },
          end: {
            line: 1341,
            column: 80
          }
        }, {
          start: {
            line: 1341,
            column: 83
          },
          end: {
            line: 1341,
            column: 88
          }
        }],
        line: 1341
      },
      "90": {
        loc: {
          start: {
            line: 1343,
            column: 25
          },
          end: {
            line: 1343,
            column: 97
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1343,
            column: 45
          },
          end: {
            line: 1343,
            column: 72
          }
        }, {
          start: {
            line: 1343,
            column: 75
          },
          end: {
            line: 1343,
            column: 97
          }
        }],
        line: 1343
      },
      "91": {
        loc: {
          start: {
            line: 1365,
            column: 9
          },
          end: {
            line: 1379,
            column: 9
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1366,
            column: 10
          },
          end: {
            line: 1366,
            column: 100
          }
        }, {
          start: {
            line: 1368,
            column: 10
          },
          end: {
            line: 1378,
            column: 17
          }
        }],
        line: 1365
      },
      "92": {
        loc: {
          start: {
            line: 1386,
            column: 10
          },
          end: {
            line: 1386,
            column: 98
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1386,
            column: 30
          },
          end: {
            line: 1386,
            column: 66
          }
        }, {
          start: {
            line: 1386,
            column: 69
          },
          end: {
            line: 1386,
            column: 98
          }
        }],
        line: 1386
      },
      "93": {
        loc: {
          start: {
            line: 1389,
            column: 10
          },
          end: {
            line: 1391,
            column: 30
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1390,
            column: 14
          },
          end: {
            line: 1390,
            column: 16
          }
        }, {
          start: {
            line: 1391,
            column: 14
          },
          end: {
            line: 1391,
            column: 30
          }
        }],
        line: 1389
      },
      "94": {
        loc: {
          start: {
            line: 1396,
            column: 12
          },
          end: {
            line: 1398,
            column: 29
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1397,
            column: 16
          },
          end: {
            line: 1397,
            column: 18
          }
        }, {
          start: {
            line: 1398,
            column: 16
          },
          end: {
            line: 1398,
            column: 29
          }
        }],
        line: 1396
      },
      "95": {
        loc: {
          start: {
            line: 1418,
            column: 21
          },
          end: {
            line: 1418,
            column: 91
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1418,
            column: 41
          },
          end: {
            line: 1418,
            column: 65
          }
        }, {
          start: {
            line: 1418,
            column: 68
          },
          end: {
            line: 1418,
            column: 91
          }
        }],
        line: 1418
      },
      "96": {
        loc: {
          start: {
            line: 1420,
            column: 19
          },
          end: {
            line: 1420,
            column: 89
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1420,
            column: 39
          },
          end: {
            line: 1420,
            column: 63
          }
        }, {
          start: {
            line: 1420,
            column: 66
          },
          end: {
            line: 1420,
            column: 89
          }
        }],
        line: 1420
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0],
      "55": [0, 0],
      "56": [0, 0],
      "57": [0, 0],
      "58": [0, 0],
      "59": [0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0],
      "66": [0, 0],
      "67": [0, 0],
      "68": [0, 0],
      "69": [0, 0],
      "70": [0, 0],
      "71": [0, 0],
      "72": [0, 0],
      "73": [0, 0],
      "74": [0, 0],
      "75": [0, 0, 0, 0],
      "76": [0, 0],
      "77": [0, 0],
      "78": [0, 0],
      "79": [0, 0],
      "80": [0, 0],
      "81": [0, 0],
      "82": [0, 0],
      "83": [0, 0],
      "84": [0, 0],
      "85": [0, 0],
      "86": [0, 0],
      "87": [0, 0],
      "88": [0, 0],
      "89": [0, 0],
      "90": [0, 0],
      "91": [0, 0],
      "92": [0, 0],
      "93": [0, 0],
      "94": [0, 0],
      "95": [0, 0],
      "96": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "45ed06f873c33ce9b0a6fae3f402f9f84fa0662d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1t4pb00ghc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1t4pb00ghc();

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















































cov_1t4pb00ghc().s[0]++;

const styles = theme => {
  cov_1t4pb00ghc().f[0]++;
  cov_1t4pb00ghc().s[1]++;
  return {
    root: {
      '& svg': {
        width: '1.21rem',
        height: '1.21rem'
      }
    },
    categoryHeader: {
      paddingTop: 16,
      paddingBottom: 16
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white
    },
    item: {
      paddingTop: 4,
      paddingBottom: 4,
      color: 'rgba(255, 255, 255, 0.7)',
      fill: '#fff',
      '&:hover': {
        '& $expandMoreIcon': {
          opacity: 1,
          transition: 'opacity 200ms ease-in'
        }
      }
    },
    itemCategory: {
      backgroundColor: '#263238',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: '1.325rem',
      paddingBottom: '1.325rem'
    },
    firebase: {
      top: 0,
      position: 'sticky',
      zIndex: 5
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '30px'
    },
    itemActionable: {
      '&:hover': {
        backgroundColor: 'rgb(0, 187, 166, 0.5)'
      }
    },
    itemActiveItem: {
      color: '#4fc3f7',
      fill: '#4fc3f7'
    },
    itemPrimary: {
      color: 'inherit',
      fontSize: theme.typography.fontSize,
      '&$textDense': {
        fontSize: theme.typography.fontSize
      }
    },
    textDense: {},
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    mainLogo: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(-1),
      width: 40,
      height: 40,
      borderRadius: 'unset'
    },
    mainLogoText: {
      marginLeft: theme.spacing(0.5),
      marginTop: theme.spacing(1),
      width: 170,
      borderRadius: 'unset'
    },
    mainLogoCollapsed: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(-0.5),
      width: 40,
      height: 40,
      borderRadius: 'unset'
    },
    mainLogoTextCollapsed: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(1),
      width: 170,
      borderRadius: 'unset'
    },
    settingsIcon: {
      marginLeft: theme.spacing(2)
    },
    cursorPointer: {
      cursor: 'pointer'
    },
    listIcon: {
      minWidth: theme.spacing(3.5),
      paddingTop: theme.spacing(0.5),
      textAlign: 'center',
      display: 'inline-table',
      paddingRight: theme.spacing(0.5),
      marginLeft: theme.spacing(0.8)
    },
    listIcon1: {
      minWidth: theme.spacing(3.5),
      paddingTop: theme.spacing(0.5),
      textAlign: 'center',
      display: 'inline-table',
      paddingRight: theme.spacing(0.5),
      opacity: 0.5
    },
    listIconSlack: {
      minWidth: theme.spacing(3.5),
      paddingTop: theme.spacing(0.5),
      textAlign: 'center',
      display: 'inline-table',
      marginLeft: theme.spacing(-0.1),
      paddingRight: theme.spacing(0.5),
      opacity: 0.5
    },
    nested1: {
      paddingLeft: theme.spacing(3)
    },
    nested2: {
      paddingLeft: theme.spacing(5)
    },
    icon: {
      width: theme.spacing(2.5)
    },
    istioIcon: {
      width: theme.spacing(1.8)
    },
    isHidden: {
      opacity: 0,
      transition: 'opacity 200ms ease-in-out'
    },
    isDisplayed: {
      opacity: 1,
      transition: 'opacity 200ms ease-in-out'
    },
    sidebarCollapsed: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(8) + 4
    },
    sidebarExpanded: {
      width: '256px',
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    fixedSidebarFooter: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 'auto',
      marginBottom: '0.5rem'
    },
    collapseButtonWrapper: {
      boxShadow: '0.5px 0px 0px 0px rgb(0 0 0 / 20%), 1.5px 0px 0px 0px rgb(0 0 0 / 14%), 2.5px 1px 3px 0px rgb(0 0 0 / 12%)',
      borderRadius: '0 5px 5px 0',
      position: 'fixed',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      bottom: '12%',
      left: '257px',
      zIndex: '1400',
      width: 'auto',
      transition: 'left 195ms',
      '&:hover': {
        opacity: 1,
        background: 'transparent'
      },
      '&:focus': {
        opacity: 1,
        background: 'transparent'
      }
    },
    collapseButtonWrapperRotated: {
      backgroundColor: '#515b60',
      color: '#ffffff',
      position: 'fixed',
      borderRadius: '0 5px 5px 0',
      cursor: 'pointer',
      bottom: '12%',
      left: '49px',
      zIndex: '1400',
      width: 'auto',
      transition: 'left 225ms',
      transform: 'rotate(180deg)',
      display: 'flex',
      justifyContent: 'center',
      '&:hover': {
        opacity: 1
      },
      '&:focus': {
        opacity: 1
      }
    },
    noPadding: {
      paddingLeft: '16px',
      paddingRight: '16px'
    },
    drawerIcons: {
      height: '1.21rem',
      width: '1.21rem',
      fontSize: '1.21rem'
    },
    avatarGroup: {
      '& .MuiAvatarGroup-avatar': {
        border: 'none'
      }
    },
    marginLeft: {
      padding: '5px',
      '& > li': {
        padding: '0'
      }
    },
    rightMargin: {
      marginRight: 8
    },
    btnGrpMarginRight: {
      marginRight: 4,
      alignItems: 'center'
    },
    helpIcon: {
      color: '#fff',
      opacity: '0.7',
      transition: 'opacity 200ms linear',
      '&:hover': {
        opacity: 1,
        background: 'transparent'
      },
      '&:focus': {
        opacity: 1,
        background: 'transparent'
      }
    },
    extraPadding: {
      // paddingTop : 4,
      // paddingBottom : 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    restrictPointer: {
      pointerEvents: 'none'
    },
    expandMoreIcon: {
      opacity: 0,
      cursor: 'pointer',
      transform: 'translateX(3px)',
      '&:hover': {
        color: '#4fc3f7'
      }
    },
    collapsed: {
      transform: 'rotate(180deg) translateX(-0.8px)'
    },
    collapsedHelpButton: {
      height: '1.45rem',
      marginTop: '-4px',
      transform: 'translateX(0px)'
    },
    rightTranslate: {
      transform: 'translateX(0.5px)'
    },
    hideScrollbar: {
      overflow: 'hidden auto',
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    disabled: _css_disableComponent_styles__WEBPACK_IMPORTED_MODULE_43__/* .disabledStyle */ .Cv,
    disableLogo: _css_disableComponent_styles__WEBPACK_IMPORTED_MODULE_43__/* .disabledStyleWithOutOpacity */ .CR,
    cursorNotAllowed: _css_disableComponent_styles__WEBPACK_IMPORTED_MODULE_43__/* .cursorNotAllowed */ .Um
  };
};

const drawerIconsStyle = (cov_1t4pb00ghc().s[2]++, _objectSpread({
  height: '1.21rem',
  width: '1.21rem',
  fontSize: '1.45rem'
}, _css_icons_styles__WEBPACK_IMPORTED_MODULE_46__/* .iconSmall */ .uE));
const externalLinkIconStyle = (cov_1t4pb00ghc().s[3]++, {
  width: '1.11rem',
  fontSize: '1.11rem'
});
cov_1t4pb00ghc().s[4]++;

const getNavigatorComponents = (
/** @type {CapabilitiesRegistry} */
capabilityRegistryObj) => {
  cov_1t4pb00ghc().f[1]++;
  cov_1t4pb00ghc().s[5]++;
  return [{
    id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .DASHBOARD */ .h1,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_20___default()), {
      style: drawerIconsStyle
    }),
    hovericon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_20___default()), {
      style: drawerIconsStyle
    }),
    href: '/',
    title: 'Dashboard',
    show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .DASHBOARD */ .h1]),
    link: true,
    submenu: true
  }, {
    id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .LIFECYCLE */ .dt,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_public_static_img_drawer_icons_lifecycle_mgmt_svg__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
      style: drawerIconsStyle
    }),
    hovericon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_public_static_img_drawer_icons_lifecycle_hover_svg__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
      style: drawerIconsStyle
    }),
    title: 'Lifecycle',
    link: true,
    href: '/management/connections',
    show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .LIFECYCLE */ .dt]),
    submenu: true,
    children: [{
      id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CONNECTION */ .TV,
      href: '/management/connections',
      title: 'Connections',
      show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .LIFECYCLE */ .dt, _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CONNECTION */ .TV]),
      link: true,
      permission: {
        action: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_CONNECTIONS.action */ .X.VIEW_CONNECTIONS.action,
        subject: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_CONNECTIONS.subject */ .X.VIEW_CONNECTIONS.subject
      }
    }, {
      id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .ENVIRONMENT */ .Gv,
      href: '/management/environments',
      title: 'Environments',
      show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .LIFECYCLE */ .dt, _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .ENVIRONMENT */ .Gv]),
      link: true,
      permission: {
        action: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_ENVIRONMENTS.action */ .X.VIEW_ENVIRONMENTS.action,
        subject: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_ENVIRONMENTS.subject */ .X.VIEW_ENVIRONMENTS.subject
      }
    }, {
      id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .WORKSPACE */ .c6,
      href: '/management/workspaces',
      title: 'Workspaces',
      show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .LIFECYCLE */ .dt, _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .WORKSPACE */ .c6]),
      link: true,
      permission: {
        action: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_WORKSPACE.action */ .X.VIEW_WORKSPACE.action,
        subject: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_WORKSPACE.subject */ .X.VIEW_WORKSPACE.subject
      }
    }, {
      id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .SERVICE_MESH */ .Ih,
      href: '/management/adapter',
      title: 'Adapters',
      link: true,
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_assets_icons_ServiceMeshIcon__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
        style: _objectSpread({}, drawerIconsStyle)
      }),
      show: true,
      permission: {
        action: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_SERVICE_MESH.action */ .X.VIEW_SERVICE_MESH.action,
        subject: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_SERVICE_MESH.subject */ .X.VIEW_SERVICE_MESH.subject
      }
    }]
  }, {
    id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CONFIGURATION */ .r4,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_assets_icons_ConfigurationIcon__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, _objectSpread({}, drawerIconsStyle)),
    hovericon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_public_static_img_drawer_icons_configuration_hover_svg__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
      style: drawerIconsStyle
    }),
    href: '/configuration/designs',
    title: 'Configuration',
    show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CONFIGURATION */ .r4]),
    link: true,
    submenu: true,
    children: [{
      id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CATALOG */ .e5,
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_SistentWrapper__WEBPACK_IMPORTED_MODULE_40__/* .UsesSistent */ .k, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_39__.CatalogIcon, {
          primaryFill: "#FFFFFF",
          secondaryFill: "#FFFFFFb3",
          tertiaryFill: "transparent",
          style: _objectSpread({}, drawerIconsStyle)
        })
      }),
      href: '/configuration/catalog',
      title: 'Catalog',
      show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CONFIGURATION */ .r4, _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CATALOG */ .e5]),
      link: true,
      isBeta: true,
      permission: {
        action: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_CATALOG.action */ .X.VIEW_CATALOG.action,
        subject: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_CATALOG.subject */ .X.VIEW_CATALOG.subject
      }
    }, {
      id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .FILTER */ .gU,
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_public_static_img_drawer_icons_filter_svg__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        style: _objectSpread({}, drawerIconsStyle)
      }),
      href: '/configuration/filters',
      title: 'Filters',
      show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CONFIGURATION */ .r4, _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .FILTER */ .gU]),
      link: true,
      isBeta: true,
      permission: {
        action: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_FILTERS.action */ .X.VIEW_FILTERS.action,
        subject: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_FILTERS.subject */ .X.VIEW_FILTERS.subject
      }
    }, {
      id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .DESIGN */ .E1,
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_public_static_img_drawer_icons_pattern_svg__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        style: _objectSpread({}, drawerIconsStyle)
      }),
      href: '/configuration/designs',
      title: 'Designs',
      show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CONFIGURATION */ .r4, _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .DESIGN */ .E1]),
      link: true,
      isBeta: true,
      permission: {
        action: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_DESIGNS.action */ .X.VIEW_DESIGNS.action,
        subject: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_DESIGNS.subject */ .X.VIEW_DESIGNS.subject
      }
    }]
  }, {
    id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .PERFORMANCE */ .KS,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_public_static_img_drawer_icons_performance_svg__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      style: _objectSpread({
        transform: 'scale(1.3)'
      }, drawerIconsStyle)
    }),
    hovericon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_public_static_img_drawer_icons_performance_hover_svg__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      style: drawerIconsStyle
    }),
    href: '/performance',
    title: 'Performance',
    show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .PERFORMANCE */ .KS]),
    link: true,
    submenu: true,
    children: [{
      id: _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .PROFILES */ .Cm,
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FontAwesomeIcon, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_36__.faDigitalTachograph,
        style: {
          fontSize: 24
        }
      }),
      href: '/performance/profiles',
      title: 'Profiles',
      show: capabilityRegistryObj.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .PERFORMANCE */ .KS, _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .PROFILES */ .Cm]),
      link: true,
      permission: {
        action: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_PERFORMANCE_PROFILES.action */ .X.VIEW_PERFORMANCE_PROFILES.action,
        subject: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_PERFORMANCE_PROFILES.subject */ .X.VIEW_PERFORMANCE_PROFILES.subject
      }
    }]
  }, {
    id: 'Extensions',
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_public_static_img_drawer_icons_extensions_svg__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
      style: drawerIconsStyle
    }),
    hovericon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_public_static_img_drawer_icons_extensions_svg__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
      style: drawerIconsStyle
    }),
    title: 'Extensions',
    show: capabilityRegistryObj.isNavigatorComponentEnabled(['Extensions']),
    width: 12,
    link: true,
    href: '/extensions',
    submenu: false,
    permission: {
      action: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_EXTENSIONS.action */ .X.VIEW_EXTENSIONS.action,
      subject: _utils_permission_constants__WEBPACK_IMPORTED_MODULE_48__/* .keys.VIEW_EXTENSIONS.subject */ .X.VIEW_EXTENSIONS.subject
    }
  }];
};

const ExternalLinkIcon = (cov_1t4pb00ghc().s[6]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FontAwesomeIcon, {
  style: externalLinkIconStyle,
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_36__.faExternalLinkAlt,
  transform: "shrink-7"
}));
const externlinks = (cov_1t4pb00ghc().s[7]++, [{
  id: 'doc',
  href: 'https://docs.meshplay.khulnasoft.com',
  title: 'Documentation',
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_assets_icons_DocumentIcon__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
    style: drawerIconsStyle
  }),
  external_icon: ExternalLinkIcon
}, {
  id: 'community',
  href: 'https://slack.meshplay.khulnasoft.com',
  title: 'Community',
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_assets_icons_SlackIcon__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
    style: _objectSpread(_objectSpread({}, drawerIconsStyle), {}, {
      height: '1.5rem',
      width: '1.5rem',
      marginTop: ''
    })
  }),
  external_icon: ExternalLinkIcon
}, {
  id: 'forum',
  href: 'http://discuss.meshplay.khulnasoft.com',
  title: 'Discussion Forum',
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_assets_icons_ChatIcon__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
    style: drawerIconsStyle
  }),
  external_icon: ExternalLinkIcon
}, {
  id: 'issues',
  href: 'https://github.com/meshplay/meshplay/issues/new/choose',
  title: 'Issues',
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_assets_icons_GithubIcon__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
    style: drawerIconsStyle
  }),
  external_icon: ExternalLinkIcon
}]);

class Navigator extends ((react__WEBPACK_IMPORTED_MODULE_0___default().Component)) {
  constructor(props) {
    cov_1t4pb00ghc().f[2]++;
    cov_1t4pb00ghc().s[8]++;
    super(props);

    _defineProperty(this, "componentId", (cov_1t4pb00ghc().s[12]++, 'navigator'));

    _defineProperty(this, "handleTitleClick", (cov_1t4pb00ghc().s[117]++, () => {
      cov_1t4pb00ghc().f[34]++;
      cov_1t4pb00ghc().s[118]++;
      this.props.router.push('/');
    }));

    _defineProperty(this, "toggleMiniDrawer", (cov_1t4pb00ghc().s[123]++, () => {
      cov_1t4pb00ghc().f[36]++;
      const {
        toggleDrawer,
        isDrawerCollapsed
      } = (cov_1t4pb00ghc().s[124]++, this.props);
      cov_1t4pb00ghc().s[125]++;
      toggleDrawer({
        isDrawerCollapsed: !isDrawerCollapsed
      });
    }));

    _defineProperty(this, "toggleSpacing", (cov_1t4pb00ghc().s[126]++, () => {
      cov_1t4pb00ghc().f[37]++;
      const {
        showHelperButton
      } = (cov_1t4pb00ghc().s[127]++, this.state);
      cov_1t4pb00ghc().s[128]++;
      this.setState({
        showHelperButton: !showHelperButton
      });
    }));

    _defineProperty(this, "toggleItemCollapse", (cov_1t4pb00ghc().s[129]++, itemId => {
      cov_1t4pb00ghc().f[38]++;
      const isItemOpen = (cov_1t4pb00ghc().s[130]++, this.state.openItems.includes(itemId));
      const activeItems = (cov_1t4pb00ghc().s[131]++, [...this.state.openItems]);
      cov_1t4pb00ghc().s[132]++;

      if (isItemOpen) {
        cov_1t4pb00ghc().b[30][0]++;
        cov_1t4pb00ghc().s[133]++;
        this.setState({
          openItems: activeItems.filter(item => {
            cov_1t4pb00ghc().f[39]++;
            cov_1t4pb00ghc().s[134]++;
            return item !== itemId;
          })
        });
      } else {
        cov_1t4pb00ghc().b[30][1]++;
        cov_1t4pb00ghc().s[135]++;
        activeItems.push(itemId);
        cov_1t4pb00ghc().s[136]++;
        this.setState({
          openItems: [itemId]
        });
      }
    }));

    const {
      meshAdapters
    } = (cov_1t4pb00ghc().s[9]++, props);
    cov_1t4pb00ghc().s[10]++;
    this.state = {
      path: '',
      meshAdapters,
      mts: new Date(),
      // ExtensionPointSchemaValidator will return a navigator schema
      // decoder which in turn will return an empty array when there is no content
      // passed into it
      navigator: (0,_utils_ExtensionPointSchemaValidator__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z)('navigator')(),
      showHelperButton: false,
      openItems: [],
      hoveredId: null,

      /** @type {CapabilitiesRegistry} */
      capabilitiesRegistryObj: null,
      versionDetail: {
        build: '',
        latest: '',
        outdated: false,
        commitsha: '',
        release_channel: 'NA'
      },
      navigatorComponents: []
    };
  }

  isServiceMeshActive() {
    cov_1t4pb00ghc().f[3]++;
    cov_1t4pb00ghc().s[11]++;
    return this.state.meshAdapters.length > 0;
  }

  componentDidMount() {
    cov_1t4pb00ghc().f[4]++;
    cov_1t4pb00ghc().s[13]++;
    this.fetchCapabilities();
    cov_1t4pb00ghc().s[14]++;
    this.fetchVersionDetails();
  }

  fetchCapabilities() {
    cov_1t4pb00ghc().f[5]++;
    cov_1t4pb00ghc().s[15]++;
    (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z)('/api/provider/capabilities', {
      method: 'GET',
      credentials: 'include'
    }, result => {
      cov_1t4pb00ghc().f[6]++;
      cov_1t4pb00ghc().s[16]++;

      if (result) {
        cov_1t4pb00ghc().b[0][0]++;
        const capabilitiesRegistryObj = (cov_1t4pb00ghc().s[17]++, new _utils_disabledComponents__WEBPACK_IMPORTED_MODULE_44__/* .CapabilitiesRegistry */ ._(result));
        const navigatorComponents = (cov_1t4pb00ghc().s[18]++, this.createNavigatorComponents(capabilitiesRegistryObj));
        cov_1t4pb00ghc().s[19]++;
        this.setState({
          navigator: (0,_utils_ExtensionPointSchemaValidator__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z)('navigator')(result?.extensions?.navigator),
          capabilitiesRegistryObj,
          navigatorComponents
        });
        cov_1t4pb00ghc().s[20]++;
        this.props.updateCapabilities({
          capabilitiesRegistry: result
        });
      } else {
        cov_1t4pb00ghc().b[0][1]++;
      }
    }, err => {
      cov_1t4pb00ghc().f[7]++;
      cov_1t4pb00ghc().s[21]++;
      return console.error(err);
    });
  }

  fetchVersionDetails() {
    cov_1t4pb00ghc().f[8]++;
    cov_1t4pb00ghc().s[22]++;
    (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z)('/api/system/version', {
      method: 'GET',
      credentials: 'include'
    }, result => {
      cov_1t4pb00ghc().f[9]++;
      cov_1t4pb00ghc().s[23]++;

      if (typeof result !== 'undefined') {
        cov_1t4pb00ghc().b[1][0]++;
        cov_1t4pb00ghc().s[24]++;
        this.setState({
          versionDetail: result
        });
      } else {
        cov_1t4pb00ghc().b[1][1]++;
        cov_1t4pb00ghc().s[25]++;
        this.setState({
          versionDetail: {
            build: 'Unknown',
            latest: 'Unknown',
            outdated: false,
            commitsha: 'Unknown'
          }
        });
      }
    }, err => {
      cov_1t4pb00ghc().f[10]++;
      cov_1t4pb00ghc().s[26]++;
      return console.error(err);
    });
  }

  createNavigatorComponents(capabilityRegistryObj) {
    cov_1t4pb00ghc().f[11]++;
    cov_1t4pb00ghc().s[27]++;
    return getNavigatorComponents(capabilityRegistryObj);
  }
  /**
   * @param {import("../utils/ExtensionPointSchemaValidator").NavigatorSchema[]} children
   * @param {number} depth
   */


  renderNavigatorExtensions(children, depth) {
    cov_1t4pb00ghc().f[12]++;
    const {
      classes,
      isDrawerCollapsed
    } = (cov_1t4pb00ghc().s[28]++, this.props);
    const {
      path
    } = (cov_1t4pb00ghc().s[29]++, this.state);
    cov_1t4pb00ghc().s[30]++;

    if ((cov_1t4pb00ghc().b[3][0]++, children) && (cov_1t4pb00ghc().b[3][1]++, children.length > 0)) {
      cov_1t4pb00ghc().b[2][0]++;
      cov_1t4pb00ghc().s[31]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default()), {
        disablePadding: true,
        children: children.map(({
          id,
          icon,
          href,
          title,
          children,
          show: showc
        }) => {
          cov_1t4pb00ghc().f[13]++;
          cov_1t4pb00ghc().s[32]++;

          if ((cov_1t4pb00ghc().b[5][0]++, typeof showc !== 'undefined') && (cov_1t4pb00ghc().b[5][1]++, !showc)) {
            cov_1t4pb00ghc().b[4][0]++;
            cov_1t4pb00ghc().s[33]++;
            return '';
          } else {
            cov_1t4pb00ghc().b[4][1]++;
          }

          cov_1t4pb00ghc().s[34]++;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
              button: true,
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(depth === 1 ? (cov_1t4pb00ghc().b[6][0]++, '') : (cov_1t4pb00ghc().b[6][1]++, classes.nested1), classes.item, classes.itemActionable, (cov_1t4pb00ghc().b[7][0]++, path === href) && (cov_1t4pb00ghc().b[7][1]++, classes.itemActiveItem), (cov_1t4pb00ghc().b[8][0]++, isDrawerCollapsed) && (cov_1t4pb00ghc().b[8][1]++, classes.noPadding)),
              children: this.extensionPointContent(icon, href, title, isDrawerCollapsed)
            }, id), this.renderNavigatorExtensions(children, depth + 1)]
          }, id);
        })
      });
    } else {
      cov_1t4pb00ghc().b[2][1]++;
    }
  }

  extensionPointContent(icon, href, name, drawerCollapsed) {
    cov_1t4pb00ghc().f[14]++;
    const {
      classes
    } = (cov_1t4pb00ghc().s[35]++, this.props);
    let content = (cov_1t4pb00ghc().s[36]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.link),
      "data-cy": name,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_39__.CustomTooltip, {
        title: name,
        placement: "right",
        disableFocusListener: !drawerCollapsed,
        disableTouchListener: !drawerCollapsed,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
          className: classes.listIcon,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("img", {
            src: icon,
            className: classes.icon,
            onMouseOver: e => {
              cov_1t4pb00ghc().f[15]++;
              cov_1t4pb00ghc().s[37]++;
              e.target.style.transform = 'translate(-20%, -25%)';
              cov_1t4pb00ghc().s[38]++;
              e.target.style.top = '0';
              cov_1t4pb00ghc().s[39]++;
              e.target.style.right = '0';
            },
            onMouseOut: e => {
              cov_1t4pb00ghc().f[16]++;
              cov_1t4pb00ghc().s[40]++;
              e.target.style.transform = 'translate(0, 0)';
              cov_1t4pb00ghc().s[41]++;
              e.target.style.top = 'auto';
              cov_1t4pb00ghc().s[42]++;
              e.target.style.right = 'auto';
            }
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default()), {
        className: drawerCollapsed ? (cov_1t4pb00ghc().b[9][0]++, classes.isHidden) : (cov_1t4pb00ghc().b[9][1]++, classes.isDisplayed),
        classes: {
          primary: classes.itemPrimary
        },
        children: name
      })]
    }));
    cov_1t4pb00ghc().s[43]++;

    if (href) {
      cov_1t4pb00ghc().b[10][0]++;
      cov_1t4pb00ghc().s[44]++;
      content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
        href: href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.link),
          onClick: () => {
            cov_1t4pb00ghc().f[17]++;
            cov_1t4pb00ghc().s[45]++;
            return this.props.updateExtensionType('navigator');
          },
          children: content
        })
      });
    } else {
      cov_1t4pb00ghc().b[10][1]++;
    }

    cov_1t4pb00ghc().s[46]++;
    return content;
  }

  updatenavigatorComponentsMenus() {
    cov_1t4pb00ghc().f[18]++;
    const self = (cov_1t4pb00ghc().s[47]++, this);
    const {
      navigatorComponents
    } = (cov_1t4pb00ghc().s[48]++, this.state);
    cov_1t4pb00ghc().s[49]++;
    navigatorComponents.forEach((cat, ind) => {
      cov_1t4pb00ghc().f[19]++;
      cov_1t4pb00ghc().s[50]++;

      if (cat.id === _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .LIFECYCLE */ .dt) {
        cov_1t4pb00ghc().b[11][0]++;
        cov_1t4pb00ghc().s[51]++;
        cat.children.forEach((catc, ind1) => {
          cov_1t4pb00ghc().f[20]++;
          cov_1t4pb00ghc().s[52]++;

          if (catc.id == _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .SERVICE_MESH */ .Ih) {
            cov_1t4pb00ghc().b[12][0]++;
            cov_1t4pb00ghc().s[53]++;
            return;
          } else {
            cov_1t4pb00ghc().b[12][1]++;
          }

          const icon = (cov_1t4pb00ghc().s[54]++, self.pickIcon(catc.id, catc.href));
          cov_1t4pb00ghc().s[55]++;
          navigatorComponents[ind].children[ind1].icon = icon;
          const cr = (cov_1t4pb00ghc().s[56]++, self.fetchChildren(catc.id));
          cov_1t4pb00ghc().s[57]++;
          navigatorComponents[ind].children[ind1].children = cr;
        });
      } else {
        cov_1t4pb00ghc().b[11][1]++;
      }

      cov_1t4pb00ghc().s[58]++;

      if (cat.id === 'Configuration') {
        cov_1t4pb00ghc().b[13][0]++;
        let show = (cov_1t4pb00ghc().s[59]++, false);
        cov_1t4pb00ghc().s[60]++;
        cat.children?.forEach(ch => {
          cov_1t4pb00ghc().f[21]++;
          cov_1t4pb00ghc().s[61]++;

          if (ch.id === 'Designs') {
            cov_1t4pb00ghc().b[14][0]++;
            const idx = (cov_1t4pb00ghc().s[62]++, self.props.capabilitiesRegistry?.capabilities?.findIndex(cap => {
              cov_1t4pb00ghc().f[22]++;
              cov_1t4pb00ghc().s[63]++;
              return cap.feature === 'persist-meshplay-patterns';
            }));
            cov_1t4pb00ghc().s[64]++;

            if (idx != -1) {
              cov_1t4pb00ghc().b[15][0]++;
              cov_1t4pb00ghc().s[65]++;
              ch.show = true;
              cov_1t4pb00ghc().s[66]++;
              show = true;
            } else {
              cov_1t4pb00ghc().b[15][1]++;
            }
          } else {
            cov_1t4pb00ghc().b[14][1]++;
          }
        });
        cov_1t4pb00ghc().s[67]++;
        cat.show = show;
      } else {
        cov_1t4pb00ghc().b[13][1]++;
      } //To Toggle Catalog Extension


      cov_1t4pb00ghc().s[68]++;

      if (cat.id === _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CONFIGURATION */ .r4) {
        cov_1t4pb00ghc().b[16][0]++;
        cov_1t4pb00ghc().s[69]++;
        cat.children?.forEach(ch => {
          cov_1t4pb00ghc().f[23]++;
          cov_1t4pb00ghc().s[70]++;

          if (ch.id === _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .CATALOG */ .e5) {
            cov_1t4pb00ghc().b[17][0]++;
            cov_1t4pb00ghc().s[71]++;
            ch.show = this.props.catalogVisibility;
          } else {
            cov_1t4pb00ghc().b[17][1]++;
          }
        });
      } else {
        cov_1t4pb00ghc().b[16][1]++;
      }
    });
  }

  updateAdaptersLink() {
    cov_1t4pb00ghc().f[24]++;
    const {
      navigatorComponents
    } = (cov_1t4pb00ghc().s[72]++, this.state);
    cov_1t4pb00ghc().s[73]++;
    navigatorComponents.forEach((cat, ind) => {
      cov_1t4pb00ghc().f[25]++;
      cov_1t4pb00ghc().s[74]++;

      if (cat.id === _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .LIFECYCLE */ .dt) {
        cov_1t4pb00ghc().b[18][0]++;
        cov_1t4pb00ghc().s[75]++;
        cat.children.forEach((catc, ind1) => {
          cov_1t4pb00ghc().f[26]++;
          cov_1t4pb00ghc().s[76]++;

          if ((cov_1t4pb00ghc().b[20][0]++, typeof navigatorComponents[ind].children[ind1].children[0] !== 'undefined') && (cov_1t4pb00ghc().b[20][1]++, typeof navigatorComponents[ind].children[ind1].children[0].href !== 'undefined')) {
            cov_1t4pb00ghc().b[19][0]++;
            const val = (cov_1t4pb00ghc().s[77]++, true);
            const newhref = (cov_1t4pb00ghc().s[78]++, `${navigatorComponents[ind].children[ind1].children[0].href}`);
            cov_1t4pb00ghc().s[79]++;
            navigatorComponents[ind].children[ind1].link = val;
            cov_1t4pb00ghc().s[80]++;
            navigatorComponents[ind].children[ind1].href = newhref;
          } else {
            cov_1t4pb00ghc().b[19][1]++;
          }
        });
      } else {
        cov_1t4pb00ghc().b[18][1]++;
      }
    });
  }

  static getDerivedStateFromProps(props, state) {
    cov_1t4pb00ghc().f[27]++;
    const {
      meshAdapters,
      meshAdaptersts
    } = (cov_1t4pb00ghc().s[81]++, props);
    const path = (cov_1t4pb00ghc().s[82]++, window.location.pathname);
    const st = (cov_1t4pb00ghc().s[83]++, {});
    cov_1t4pb00ghc().s[84]++;

    if (meshAdaptersts > state.mts) {
      cov_1t4pb00ghc().b[21][0]++;
      cov_1t4pb00ghc().s[85]++;
      st.meshAdapters = meshAdapters;
      cov_1t4pb00ghc().s[86]++;
      st.mts = meshAdaptersts;
    } else {
      cov_1t4pb00ghc().b[21][1]++;
    }

    cov_1t4pb00ghc().s[87]++;

    const fetchNestedPathAndTitle = (path, title, href, children, isBeta) => {
      cov_1t4pb00ghc().f[28]++;
      cov_1t4pb00ghc().s[88]++;

      if (href === path) {
        cov_1t4pb00ghc().b[22][0]++;
        cov_1t4pb00ghc().s[89]++;
        props.updatepagetitle({
          title
        });
        cov_1t4pb00ghc().s[90]++;
        props.updatebetabadge({
          isBeta
        });
        cov_1t4pb00ghc().s[91]++;
        return;
      } else {
        cov_1t4pb00ghc().b[22][1]++;
      }

      cov_1t4pb00ghc().s[92]++;

      if ((cov_1t4pb00ghc().b[24][0]++, children) && (cov_1t4pb00ghc().b[24][1]++, children.length > 0)) {
        cov_1t4pb00ghc().b[23][0]++;
        cov_1t4pb00ghc().s[93]++;
        children.forEach(({
          title,
          href,
          children,
          isBeta
        }) => {
          cov_1t4pb00ghc().f[29]++;
          cov_1t4pb00ghc().s[94]++;
          fetchNestedPathAndTitle(path, title, href, children, isBeta);
        });
      } else {
        cov_1t4pb00ghc().b[23][1]++;
      }
    };

    cov_1t4pb00ghc().s[95]++;
    state.navigatorComponents.forEach(({
      title,
      href,
      children,
      isBeta
    }) => {
      cov_1t4pb00ghc().f[30]++;
      cov_1t4pb00ghc().s[96]++;
      fetchNestedPathAndTitle(path, title, href, children, isBeta);
    });
    cov_1t4pb00ghc().s[97]++;
    st.path = path;
    cov_1t4pb00ghc().s[98]++;
    return st;
  }
  /**
   * @param {String} category
   *
   * Format and return the meshadapters
   *
   * @returns {Array<{id : Number, icon : JSX.Element, href : String, title : String, link : Boolean, show : Boolean}>} children
   */


  fetchChildren(category) {
    cov_1t4pb00ghc().f[31]++;
    const {
      meshAdapters
    } = (cov_1t4pb00ghc().s[99]++, this.state);
    const children = (cov_1t4pb00ghc().s[100]++, []);
    cov_1t4pb00ghc().s[101]++;
    category = category.toLowerCase();
    cov_1t4pb00ghc().s[102]++;
    meshAdapters.forEach(adapter => {
      cov_1t4pb00ghc().f[32]++;
      let aName = (cov_1t4pb00ghc().s[103]++, adapter.name.toLowerCase());
      cov_1t4pb00ghc().s[104]++;

      if (category !== aName) {
        cov_1t4pb00ghc().b[25][0]++;
        cov_1t4pb00ghc().s[105]++;
        return;
      } else {
        cov_1t4pb00ghc().b[25][1]++;
      }

      cov_1t4pb00ghc().s[106]++;
      children.push({
        id: adapter.adapter_location,
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_12___default()), {}),
        href: `/management?adapter=${adapter.adapter_location}`,
        title: `Management - ${adapter.adapter_location}`,
        link: true,
        show: true
      });
    });
    cov_1t4pb00ghc().s[107]++;
    return children;
  }
  /**
   * @param {String} aName
   *
   * @returns {JSX.Element} image to display
   */


  pickIcon(aName, href) {
    cov_1t4pb00ghc().f[33]++;
    cov_1t4pb00ghc().s[108]++;
    aName = aName.toLowerCase();
    const {
      classes
    } = (cov_1t4pb00ghc().s[109]++, this.props);
    let image = (cov_1t4pb00ghc().s[110]++, '/static/img/meshplay-logo.png');
    let filter = (cov_1t4pb00ghc().s[111]++, window.location.pathname === href ? (cov_1t4pb00ghc().b[26][0]++, 'invert(50%) sepia(78%) saturate(2392%) hue-rotate(160deg) brightness(93%) contrast(101%)') : (cov_1t4pb00ghc().b[26][1]++, ''));
    let logoIcon = (cov_1t4pb00ghc().s[112]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("img", {
      src: image,
      className: classes.icon
    }));
    cov_1t4pb00ghc().s[113]++;

    if (aName) {
      cov_1t4pb00ghc().b[27][0]++;
      cov_1t4pb00ghc().s[114]++;
      image = '/static/img/' + aName + '-light.svg';
      cov_1t4pb00ghc().s[115]++;
      logoIcon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("img", {
        src: image,
        className: classes.icon,
        style: {
          filter: filter
        }
      });
    } else {
      cov_1t4pb00ghc().b[27][1]++;
    }

    cov_1t4pb00ghc().s[116]++;
    return logoIcon;
  }
  /**
   * Changes the route to "/"
   */


  /**
   * @param {number} id
   * @param {Boolean link
   *
   * Changes the route to "/management"
   */
  handleAdapterClick(id, link) {
    cov_1t4pb00ghc().f[35]++;
    const {
      setAdapter
    } = (cov_1t4pb00ghc().s[119]++, this.props);
    cov_1t4pb00ghc().s[120]++;
    setAdapter({
      selectedAdapter: id
    });
    cov_1t4pb00ghc().s[121]++;

    if ((cov_1t4pb00ghc().b[29][0]++, id != -1) && (cov_1t4pb00ghc().b[29][1]++, !link)) {
      cov_1t4pb00ghc().b[28][0]++;
      cov_1t4pb00ghc().s[122]++;
      this.props.router.push('/management');
    } else {
      cov_1t4pb00ghc().b[28][1]++;
    }
  }

  /**
   * @param {String} idname
   * @param {Array<{id : Number, icon : JSX.Element, href : String, title : String, link : Boolean, show : Boolean}>} children
   * @param {Number} depth
   *
   * Renders children of the menu
   *
   * @returns {JSX.Element}
   */
  renderChildren(idname, children, depth) {
    cov_1t4pb00ghc().f[40]++;
    const {
      classes,
      isDrawerCollapsed
    } = (cov_1t4pb00ghc().s[137]++, this.props);
    const {
      path
    } = (cov_1t4pb00ghc().s[138]++, this.state);
    cov_1t4pb00ghc().s[139]++;

    if ((cov_1t4pb00ghc().b[32][0]++, idname != _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .LIFECYCLE */ .dt) && (cov_1t4pb00ghc().b[32][1]++, children) && (cov_1t4pb00ghc().b[32][2]++, children.length > 0)) {
      cov_1t4pb00ghc().b[31][0]++;
      cov_1t4pb00ghc().s[140]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default()), {
        disablePadding: true,
        children: children.map(({
          id: idc,
          title: titlec,
          icon: iconc,
          href: hrefc,
          show: showc,
          link: linkc,
          children: childrenc,
          permission: permissionc
        }) => {
          cov_1t4pb00ghc().f[41]++;
          cov_1t4pb00ghc().s[141]++;

          if ((cov_1t4pb00ghc().b[34][0]++, typeof showc !== 'undefined') && (cov_1t4pb00ghc().b[34][1]++, !showc)) {
            cov_1t4pb00ghc().b[33][0]++;
            cov_1t4pb00ghc().s[142]++;
            return '';
          } else {
            cov_1t4pb00ghc().b[33][1]++;
          }

          cov_1t4pb00ghc().s[143]++;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
              button: true,
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(depth === 1 ? (cov_1t4pb00ghc().b[35][0]++, classes.nested1) : (cov_1t4pb00ghc().b[35][1]++, classes.nested2), classes.item, classes.itemActionable, (cov_1t4pb00ghc().b[36][0]++, path === hrefc) && (cov_1t4pb00ghc().b[36][1]++, classes.itemActiveItem), (cov_1t4pb00ghc().b[37][0]++, isDrawerCollapsed) && (cov_1t4pb00ghc().b[37][1]++, classes.noPadding)),
              disabled: permissionc ? (cov_1t4pb00ghc().b[38][0]++, !(0,_utils_can__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .Z)(permissionc.action, permissionc.subject)) : (cov_1t4pb00ghc().b[38][1]++, false),
              children: this.linkContent(iconc, titlec, hrefc, linkc, isDrawerCollapsed)
            }, idc), this.renderChildren(idname, childrenc, depth + 1)]
          }, idc);
        })
      });
    } else {
      cov_1t4pb00ghc().b[31][1]++;
    }

    cov_1t4pb00ghc().s[144]++;

    if (idname == _constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .LIFECYCLE */ .dt) {
      cov_1t4pb00ghc().b[39][0]++;
      cov_1t4pb00ghc().s[145]++;

      if ((cov_1t4pb00ghc().b[41][0]++, children) && (cov_1t4pb00ghc().b[41][1]++, children.length > 0)) {
        cov_1t4pb00ghc().b[40][0]++;
        cov_1t4pb00ghc().s[146]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default()), {
          disablePadding: true,
          children: children.map(({
            id: idc,
            title: titlec,
            icon: iconc,
            href: hrefc,
            show: showc,
            link: linkc,
            children: childrenc,
            permission: permissionc
          }) => {
            cov_1t4pb00ghc().f[42]++;
            cov_1t4pb00ghc().s[147]++;

            if ((cov_1t4pb00ghc().b[43][0]++, typeof showc !== 'undefined') && (cov_1t4pb00ghc().b[43][1]++, !showc)) {
              cov_1t4pb00ghc().b[42][0]++;
              cov_1t4pb00ghc().s[148]++;
              return '';
            } else {
              cov_1t4pb00ghc().b[42][1]++;
            }

            cov_1t4pb00ghc().s[149]++;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)("div", {
              className: !showc ? (cov_1t4pb00ghc().b[44][0]++, classes.cursorNotAllowed) : (cov_1t4pb00ghc().b[44][1]++, null),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                "data-cy": idc,
                button: true,
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(depth === 1 ? (cov_1t4pb00ghc().b[45][0]++, classes.nested1) : (cov_1t4pb00ghc().b[45][1]++, classes.nested2), classes.item, classes.itemActionable, (cov_1t4pb00ghc().b[46][0]++, path === hrefc) && (cov_1t4pb00ghc().b[46][1]++, classes.itemActiveItem), (cov_1t4pb00ghc().b[47][0]++, isDrawerCollapsed) && (cov_1t4pb00ghc().b[47][1]++, classes.noPadding), (cov_1t4pb00ghc().b[48][0]++, !showc) && (cov_1t4pb00ghc().b[48][1]++, classes.disabled)),
                onClick: () => {
                  cov_1t4pb00ghc().f[43]++;
                  cov_1t4pb00ghc().s[150]++;
                  return this.handleAdapterClick(idc, linkc);
                },
                disabled: permissionc ? (cov_1t4pb00ghc().b[49][0]++, !(0,_utils_can__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .Z)(permissionc.action, permissionc.subject)) : (cov_1t4pb00ghc().b[49][1]++, false),
                children: this.linkContent(iconc, titlec, hrefc, linkc, isDrawerCollapsed)
              }, idc), this.renderChildren(idname, childrenc, depth + 1)]
            }, idc);
          })
        });
      } else {
        cov_1t4pb00ghc().b[40][1]++;
      }

      cov_1t4pb00ghc().s[151]++;

      if ((cov_1t4pb00ghc().b[51][0]++, children) && (cov_1t4pb00ghc().b[51][1]++, children.length === 1)) {
        cov_1t4pb00ghc().b[50][0]++;
        cov_1t4pb00ghc().s[152]++;
        this.updateAdaptersLink();
      } else {
        cov_1t4pb00ghc().b[50][1]++;
      }
    } else {
      cov_1t4pb00ghc().b[39][1]++;
    }

    cov_1t4pb00ghc().s[153]++;
    return '';
  }
  /**
   * @param {JSX.Element} iconc
   * @param {String} titlec
   * @param {String} hrefc
   * @param {Boolean} linkc
   * @param {Boolean} drawerCollapsed
   *
   * @return {JSX.Element} content
   */


  linkContent(iconc, titlec, hrefc, linkc, drawerCollapsed) {
    cov_1t4pb00ghc().f[44]++;
    const {
      classes
    } = (cov_1t4pb00ghc().s[154]++, this.props);
    let linkContent = (cov_1t4pb00ghc().s[155]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.link),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_39__.CustomTooltip, {
        title: titlec,
        placement: "right",
        disableFocusListener: !drawerCollapsed,
        disableHoverListener: !drawerCollapsed,
        disableTouchListener: !drawerCollapsed,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
          className: classes.listIcon,
          children: [iconc, " "]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default()), {
        className: drawerCollapsed ? (cov_1t4pb00ghc().b[52][0]++, classes.isHidden) : (cov_1t4pb00ghc().b[52][1]++, classes.isDisplayed),
        classes: {
          primary: classes.itemPrimary
        },
        children: titlec
      })]
    }));
    cov_1t4pb00ghc().s[156]++;

    if (linkc) {
      cov_1t4pb00ghc().b[53][0]++;
      cov_1t4pb00ghc().s[157]++;
      linkContent = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
        href: hrefc,
        children: linkContent
      });
    } else {
      cov_1t4pb00ghc().b[53][1]++;
    }

    cov_1t4pb00ghc().s[158]++;
    return linkContent;
  }
  /**
   * getMeshplayVersionText returs a well formatted version text
   *
   * If the meshplay is running latest version then and is using "edge" channel
   * then it will just show "edge-latest". However, if the meshplay is on edge and
   * is running an outdated version then it will return "edge-$version".
   *
   * If on stable channel, then it will always show "stable-$version"
   */


  getMeshplayVersionText() {
    cov_1t4pb00ghc().f[45]++;
    const {
      build,
      outdated,
      release_channel
    } = (cov_1t4pb00ghc().s[159]++, this.state.versionDetail); // If the version is outdated then no matter what the
    // release channel is, specify the build which gets covered in the default case

    cov_1t4pb00ghc().s[160]++;

    if ((cov_1t4pb00ghc().b[55][0]++, release_channel === 'edge') && (cov_1t4pb00ghc().b[55][1]++, outdated)) {
      cov_1t4pb00ghc().b[54][0]++;
      cov_1t4pb00ghc().s[161]++;
      return `${build}`;
    } else {
      cov_1t4pb00ghc().b[54][1]++;
    } //if it is not outdated which means running on latest, return edge-latest


    cov_1t4pb00ghc().s[162]++;

    if ((cov_1t4pb00ghc().b[57][0]++, release_channel === 'edge') && (cov_1t4pb00ghc().b[57][1]++, !outdated)) {
      cov_1t4pb00ghc().b[56][0]++;
      cov_1t4pb00ghc().s[163]++;
      return `${release_channel}-latest`;
    } else {
      cov_1t4pb00ghc().b[56][1]++;
    }

    cov_1t4pb00ghc().s[164]++;

    if (release_channel === 'stable') {
      cov_1t4pb00ghc().b[58][0]++;
      cov_1t4pb00ghc().s[165]++;
      return `${release_channel}-${build}`;
    } else {
      cov_1t4pb00ghc().b[58][1]++;
    }

    cov_1t4pb00ghc().s[166]++;
    return `${build}`;
  }
  /**
   * versionUpdateMsg returns the appropriate message
   * based on the meshplay's current running version and latest available
   * version.
   *
   * @returns {React.ReactNode} react component to display
   */


  versionUpdateMsg() {
    cov_1t4pb00ghc().f[46]++;
    const {
      outdated,
      latest
    } = (cov_1t4pb00ghc().s[167]++, this.state.versionDetail);
    cov_1t4pb00ghc().s[168]++;

    if (outdated) {
      cov_1t4pb00ghc().b[59][0]++;
      cov_1t4pb00ghc().s[169]++;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)("span", {
        style: {
          marginLeft: '15px'
        },
        children: ['Update available ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("a", {
          href: `https://docs.meshplay.khulnasoft.com/project/releases/${latest}`,
          target: "_blank",
          rel: "noreferrer",
          style: {
            color: 'white'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_MeshplayMeshInterface_PatternService_CustomTextTooltip__WEBPACK_IMPORTED_MODULE_49__/* .CustomTextTooltip */ .y, {
            title: `Newer version of Meshplay available: ${latest}`,
            placement: "right",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_35___default()), {
              style: {
                width: '0.85rem',
                verticalAlign: 'middle'
              }
            })
          })
        })]
      });
    } else {
      cov_1t4pb00ghc().b[59][1]++;
    }

    cov_1t4pb00ghc().s[170]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("span", {
      style: {
        marginLeft: '15px'
      },
      children: "Running latest"
    });
  }
  /**
   * openReleaseNotesInNew returns the appropriate link to the release note
   * based on the meshplay's current running channel and version.
   *
   * @returns {React.ReactNode} react component to display
   */


  openReleaseNotesInNew() {
    cov_1t4pb00ghc().f[47]++;
    const {
      release_channel,
      build
    } = (cov_1t4pb00ghc().s[171]++, this.state.versionDetail);
    cov_1t4pb00ghc().s[172]++;

    if (release_channel === 'edge') {
      cov_1t4pb00ghc().b[60][0]++;
      cov_1t4pb00ghc().s[173]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("a", {
        href: "https://docs.meshplay.khulnasoft.com/project/releases",
        target: "_blank",
        rel: "noreferrer",
        style: {
          color: 'white'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_35___default()), {
          style: {
            width: '0.85rem',
            verticalAlign: 'middle'
          }
        })
      });
    } else {
      cov_1t4pb00ghc().b[60][1]++;
    }

    cov_1t4pb00ghc().s[174]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("a", {
      href: `https://docs.meshplay.khulnasoft.com/project/releases/${build}`,
      target: "_blank",
      rel: "noreferrer",
      style: {
        color: 'white'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_icons_OpenInNew__WEBPACK_IMPORTED_MODULE_35___default()), {
        style: {
          width: '0.85rem',
          verticalAlign: 'middle'
        }
      })
    });
  }

  render() {
    cov_1t4pb00ghc().f[48]++;

    const _ref = (cov_1t4pb00ghc().s[175]++, this.props),
          {
      classes,
      isDrawerCollapsed
    } = _ref,
          other = _objectWithoutProperties(_ref, _excluded);

    const {
      path,
      showHelperButton,
      navigatorComponents
    } = (cov_1t4pb00ghc().s[176]++, this.state);
    cov_1t4pb00ghc().s[177]++;
    this.updatenavigatorComponentsMenus();
    const Title = (cov_1t4pb00ghc().s[178]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("div", {
      style: !this.state.capabilitiesRegistryObj?.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .DASHBOARD */ .h1]) ? (cov_1t4pb00ghc().b[61][0]++, _css_disableComponent_styles__WEBPACK_IMPORTED_MODULE_43__/* .cursorNotAllowed */ .Um) : (cov_1t4pb00ghc().b[61][1]++, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
        component: "a",
        onClick: this.handleTitleClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.firebase, classes.item, classes.itemCategory, classes.cursorPointer, (cov_1t4pb00ghc().b[62][0]++, !this.state.capabilitiesRegistryObj?.isNavigatorComponentEnabled([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .DASHBOARD */ .h1])) && (cov_1t4pb00ghc().b[62][1]++, classes.disableLogo)),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("img", {
          className: isDrawerCollapsed ? (cov_1t4pb00ghc().b[63][0]++, classes.mainLogoCollapsed) : (cov_1t4pb00ghc().b[63][1]++, classes.mainLogo),
          src: "/static/img/meshplay-logo.png",
          onClick: this.handleTitleClick
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("img", {
          className: isDrawerCollapsed ? (cov_1t4pb00ghc().b[64][0]++, classes.mainLogoTextCollapsed) : (cov_1t4pb00ghc().b[64][1]++, classes.mainLogoText),
          src: "/static/img/meshplay-logo-text.png",
          onClick: this.handleTitleClick
        })]
      })
    }));
    const Menu = (cov_1t4pb00ghc().s[179]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default()), {
      disablePadding: true,
      className: classes.hideScrollbar,
      children: [navigatorComponents.map(({
        id: childId,
        title,
        icon,
        href,
        show,
        link,
        children,
        hovericon,
        submenu,
        permission
      }) => {
        cov_1t4pb00ghc().f[49]++;
        cov_1t4pb00ghc().s[180]++;
        // if (typeof show !== "undefined" && !show) {
        //   return "";
        // }
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)("div", {
          style: !show ? (cov_1t4pb00ghc().b[65][0]++, _css_disableComponent_styles__WEBPACK_IMPORTED_MODULE_43__/* .cursorNotAllowed */ .Um) : (cov_1t4pb00ghc().b[65][1]++, {}),
          className: classes.root,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
            button: !!link,
            dense: true,
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.item, link ? (cov_1t4pb00ghc().b[66][0]++, classes.itemActionable) : (cov_1t4pb00ghc().b[66][1]++, ''), (cov_1t4pb00ghc().b[67][0]++, path === href) && (cov_1t4pb00ghc().b[67][1]++, classes.itemActiveItem), (cov_1t4pb00ghc().b[68][0]++, !show) && (cov_1t4pb00ghc().b[68][1]++, classes.disabled)),
            onClick: () => {
              cov_1t4pb00ghc().f[50]++;
              cov_1t4pb00ghc().s[181]++;
              return this.toggleItemCollapse(childId);
            },
            onMouseOver: () => {
              cov_1t4pb00ghc().f[51]++;
              cov_1t4pb00ghc().s[182]++;
              return isDrawerCollapsed ? (cov_1t4pb00ghc().b[69][0]++, this.setState({
                hoveredId: childId
              })) : (cov_1t4pb00ghc().b[69][1]++, null);
            },
            onMouseLeave: () => {
              cov_1t4pb00ghc().f[52]++;
              cov_1t4pb00ghc().s[183]++;
              return (cov_1t4pb00ghc().b[71][0]++, !submenu) || (cov_1t4pb00ghc().b[71][1]++, !this.state.openItems.includes(childId)) ? (cov_1t4pb00ghc().b[70][0]++, this.setState({
                hoveredId: false
              })) : (cov_1t4pb00ghc().b[70][1]++, null);
            },
            disabled: permission ? (cov_1t4pb00ghc().b[72][0]++, !(0,_utils_can__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .Z)(permission.action, permission.subject)) : (cov_1t4pb00ghc().b[72][1]++, false),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
              href: link ? (cov_1t4pb00ghc().b[73][0]++, href) : (cov_1t4pb00ghc().b[73][1]++, ''),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)("div", {
                "data-cy": childId,
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.link),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_39__.CustomTooltip, {
                  title: childId,
                  placement: "right",
                  disableFocusListener: !isDrawerCollapsed,
                  disableHoverListener: true,
                  disableTouchListener: !isDrawerCollapsed,
                  TransitionComponent: (_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_13___default()),
                  children: (cov_1t4pb00ghc().b[75][0]++, isDrawerCollapsed) && ((cov_1t4pb00ghc().b[75][1]++, this.state.hoveredId === childId) || (cov_1t4pb00ghc().b[75][2]++, this.state.openItems.includes(childId)) && (cov_1t4pb00ghc().b[75][3]++, submenu)) ? (cov_1t4pb00ghc().b[74][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("div", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_39__.CustomTooltip, {
                      title: title,
                      placement: "right",
                      TransitionComponent: (_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_13___default()),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
                        onClick: () => {
                          cov_1t4pb00ghc().f[53]++;
                          cov_1t4pb00ghc().s[184]++;
                          return this.toggleItemCollapse(childId);
                        },
                        style: {
                          marginLeft: '20%',
                          marginBottom: '0.4rem'
                        },
                        children: hovericon
                      })
                    })
                  })) : (cov_1t4pb00ghc().b[74][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
                    className: classes.listIcon,
                    children: icon
                  }))
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default()), {
                  className: isDrawerCollapsed ? (cov_1t4pb00ghc().b[76][0]++, classes.isHidden) : (cov_1t4pb00ghc().b[76][1]++, classes.isDisplayed),
                  classes: {
                    primary: classes.itemPrimary
                  },
                  children: title
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_36__.faCaretDown,
              onClick: () => {
                cov_1t4pb00ghc().f[54]++;
                cov_1t4pb00ghc().s[185]++;
                return this.toggleItemCollapse(childId);
              },
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.expandMoreIcon, {
                [classes.collapsed]: this.state.openItems.includes(childId)
              }),
              style: (cov_1t4pb00ghc().b[78][0]++, isDrawerCollapsed) || (cov_1t4pb00ghc().b[78][1]++, !children) ? (cov_1t4pb00ghc().b[77][0]++, {
                opacity: 0
              }) : (cov_1t4pb00ghc().b[77][1]++, {})
            })]
          }, childId), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_38__.Collapse, {
            in: this.state.openItems.includes(childId),
            style: {
              backgroundColor: '#396679',
              opacity: '100%'
            },
            children: this.renderChildren(childId, children, 1)
          })]
        }, childId);
      }), (cov_1t4pb00ghc().b[80][0]++, this.state.navigator) && (cov_1t4pb00ghc().b[80][1]++, this.state.navigator.length) ? (cov_1t4pb00ghc().b[79][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default()), {
          className: classes.divider
        }), this.renderNavigatorExtensions(this.state.navigator, 1)]
      })) : (cov_1t4pb00ghc().b[79][1]++, null), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: classes.divider
      })]
    }));
    const HelpIcons = (cov_1t4pb00ghc().s[186]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_38__.ButtonGroup, {
      size: "large",
      className: !isDrawerCollapsed ? (cov_1t4pb00ghc().b[81][0]++, classes.marginLeft) : (cov_1t4pb00ghc().b[81][1]++, classes.btnGrpMarginRight),
      orientation: isDrawerCollapsed ? (cov_1t4pb00ghc().b[82][0]++, 'vertical') : (cov_1t4pb00ghc().b[82][1]++, 'horizontal'),
      children: [externlinks.map(({
        id,
        icon,
        title,
        href
      }, index) => {
        cov_1t4pb00ghc().f[55]++;
        cov_1t4pb00ghc().s[187]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
          className: classes.item,
          style: (cov_1t4pb00ghc().b[84][0]++, isDrawerCollapsed) && (cov_1t4pb00ghc().b[84][1]++, !showHelperButton) ? (cov_1t4pb00ghc().b[83][0]++, {
            display: 'none'
          }) : (cov_1t4pb00ghc().b[83][1]++, {}),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default()), {
            in: (cov_1t4pb00ghc().b[85][0]++, showHelperButton) || (cov_1t4pb00ghc().b[85][1]++, !isDrawerCollapsed),
            timeout: {
              enter: 600 - index * 200,
              exit: 100 * index
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("a", {
              href: href,
              target: "_blank",
              rel: "noreferrer",
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.link, isDrawerCollapsed ? (cov_1t4pb00ghc().b[86][0]++, classes.extraPadding) : (cov_1t4pb00ghc().b[86][1]++, '')),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_MeshplayMeshInterface_PatternService_CustomTextTooltip__WEBPACK_IMPORTED_MODULE_49__/* .CustomTextTooltip */ .y, {
                title: title,
                placement: isDrawerCollapsed ? (cov_1t4pb00ghc().b[87][0]++, 'right') : (cov_1t4pb00ghc().b[87][1]++, 'top'),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
                  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.listIcon, classes.helpIcon),
                  children: icon
                })
              })
            })
          })
        }, id);
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
        className: classes.rightMargin,
        style: !isDrawerCollapsed ? (cov_1t4pb00ghc().b[88][0]++, {
          display: 'none'
        }) : (cov_1t4pb00ghc().b[88][1]++, {
          marginLeft: '4px'
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_MeshplayMeshInterface_PatternService_CustomTextTooltip__WEBPACK_IMPORTED_MODULE_49__/* .CustomTextTooltip */ .y, {
          title: "Help",
          placement: isDrawerCollapsed ? (cov_1t4pb00ghc().b[89][0]++, 'right') : (cov_1t4pb00ghc().b[89][1]++, 'top'),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_38__.IconButton, {
            className: isDrawerCollapsed ? (cov_1t4pb00ghc().b[90][0]++, classes.collapsedHelpButton) : (cov_1t4pb00ghc().b[90][1]++, classes.rightTranslate),
            onClick: this.toggleSpacing,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_19___default()), {
              className: classes.helpIcon,
              style: _objectSpread({
                fontSize: '1.45rem'
              }, _css_icons_styles__WEBPACK_IMPORTED_MODULE_46__/* .iconSmall */ .uE)
            })
          })
        })
      })]
    }));
    const Version = (cov_1t4pb00ghc().s[188]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
      style: {
        position: 'sticky',
        paddingLeft: 0,
        paddingRight: 0,
        color: '#eeeeee',
        fontSize: '0.75rem'
      },
      children: isDrawerCollapsed ? (cov_1t4pb00ghc().b[91][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("div", {
        style: {
          textAlign: 'center',
          width: '100%'
        },
        children: this.state.versionDetail.build
      })) : (cov_1t4pb00ghc().b[91][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default()), {
        in: !isDrawerCollapsed,
        timeout: {
          enter: 800,
          exit: 100
        },
        style: {
          textAlign: 'center',
          width: '100%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)("span", {
          children: [this.getMeshplayVersionText(), " ", '  ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("span", {
            style: {
              cursor: 'pointer'
            },
            children: this.openReleaseNotesInNew()
          }), this.versionUpdateMsg()]
        })
      }))
    }));
    const Chevron = (cov_1t4pb00ghc().s[189]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(isDrawerCollapsed ? (cov_1t4pb00ghc().b[92][0]++, classes.collapseButtonWrapperRotated) : (cov_1t4pb00ghc().b[92][1]++, classes.collapseButtonWrapper)),
      style: this.state?.capabilitiesRegistryObj?.isNavigatorComponentEnabled?.([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .TOGGLER */ .VH]) ? (cov_1t4pb00ghc().b[93][0]++, {}) : (cov_1t4pb00ghc().b[93][1]++, _css_disableComponent_styles__WEBPACK_IMPORTED_MODULE_43__/* .cursorNotAllowed */ .Um),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx("div", {
        style: this.state?.capabilitiesRegistryObj?.isNavigatorComponentEnabled?.([_constants_navigator__WEBPACK_IMPORTED_MODULE_45__/* .TOGGLER */ .VH]) ? (cov_1t4pb00ghc().b[94][0]++, {}) : (cov_1t4pb00ghc().b[94][1]++, _css_disableComponent_styles__WEBPACK_IMPORTED_MODULE_43__/* .disabledStyle */ .Cv),
        onClick: this.toggleMiniDrawer,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_36__.faAngleLeft,
          fixedWidth: true,
          size: "2x",
          style: {
            margin: '0.75rem 0.2rem ',
            width: '0.8rem',
            verticalAlign: 'middle'
          },
          alt: "Sidebar collapse toggle icon"
        })
      })
    }));
    cov_1t4pb00ghc().s[190]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsx((_material_ui_core_NoSsr__WEBPACK_IMPORTED_MODULE_11___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)((_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread(_objectSpread({
        variant: "permanent"
      }, other), {}, {
        className: isDrawerCollapsed ? (cov_1t4pb00ghc().b[95][0]++, classes.sidebarCollapsed) : (cov_1t4pb00ghc().b[95][1]++, classes.sidebarExpanded),
        classes: {
          paper: isDrawerCollapsed ? (cov_1t4pb00ghc().b[96][0]++, classes.sidebarCollapsed) : (cov_1t4pb00ghc().b[96][1]++, classes.sidebarExpanded)
        },
        style: {
          height: '100%'
        },
        children: [Title, Menu, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_50__.jsxs)("div", {
          className: classes.fixedSidebarFooter,
          children: [Chevron, HelpIcons, Version]
        })]
      }))
    });
  }

}

cov_1t4pb00ghc().s[191]++;
Navigator.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  onCollapseDrawer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
cov_1t4pb00ghc().s[192]++;

const mapDispatchToProps = dispatch => {
  cov_1t4pb00ghc().f[56]++;
  cov_1t4pb00ghc().s[193]++;
  return {
    updatepagetitle: (0,redux__WEBPACK_IMPORTED_MODULE_16__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_37__/* .updatepagetitle */ .Tz, dispatch),
    updatebetabadge: (0,redux__WEBPACK_IMPORTED_MODULE_16__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_37__/* .updatebetabadge */ .Ms, dispatch),
    toggleDrawer: (0,redux__WEBPACK_IMPORTED_MODULE_16__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_37__/* .toggleDrawer */ .wb, dispatch),
    setAdapter: (0,redux__WEBPACK_IMPORTED_MODULE_16__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_37__/* .setAdapter */ .jz, dispatch),
    updateCapabilities: (0,redux__WEBPACK_IMPORTED_MODULE_16__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_37__/* .updateCapabilities */ .Ff, dispatch)
  };
};

cov_1t4pb00ghc().s[194]++;

const mapStateToProps = state => {
  cov_1t4pb00ghc().f[57]++;
  const meshAdapters = (cov_1t4pb00ghc().s[195]++, state.get('meshAdapters').toJS());
  const meshAdaptersts = (cov_1t4pb00ghc().s[196]++, state.get('meshAdaptersts'));
  const path = (cov_1t4pb00ghc().s[197]++, state.get('page').get('path'));
  const isDrawerCollapsed = (cov_1t4pb00ghc().s[198]++, state.get('isDrawerCollapsed'));
  const capabilitiesRegistry = (cov_1t4pb00ghc().s[199]++, state.get('capabilitiesRegistry'));
  const organization = (cov_1t4pb00ghc().s[200]++, state.get('organization'));
  const keys = (cov_1t4pb00ghc().s[201]++, state.get('keys'));
  const catalogVisibility = (cov_1t4pb00ghc().s[202]++, state.get('catalogVisibility'));
  cov_1t4pb00ghc().s[203]++;
  return {
    meshAdapters,
    meshAdaptersts,
    path,
    isDrawerCollapsed,
    capabilitiesRegistry,
    organization,
    keys,
    catalogVisibility
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.withStyles)(styles)((0,react_redux__WEBPACK_IMPORTED_MODULE_15__.connect)(mapStateToProps, mapDispatchToProps)((0,next_router__WEBPACK_IMPORTED_MODULE_17__.withRouter)(Navigator))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getPageContext)
/* harmony export */ });
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20701);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
function cov_20d3zr68ia() {
  var path = "/workspace/meshplay/ui/components/PageContext.js";
  var hash = "4b8c07a0456c1b5fee382347603b0b5941e63eea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/PageContext.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 6,
          column: 29
        }
      },
      "1": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 17,
          column: 4
        }
      },
      "2": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "3": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 31
        }
      },
      "4": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "5": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 38
        }
      },
      "6": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 34,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "createPageContext",
        decl: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 26
          }
        },
        loc: {
          start: {
            line: 8,
            column: 29
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "getPageContext",
        decl: {
          start: {
            line: 22,
            column: 24
          },
          end: {
            line: 22,
            column: 38
          }
        },
        loc: {
          start: {
            line: 22,
            column: 41
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
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
        line: 25
      },
      "1": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 32,
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
        line: 30
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4b8c07a0456c1b5fee382347603b0b5941e63eea"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20d3zr68ia = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_20d3zr68ia();

 // a theme with custom primary and secondary color.
// it's optional.

const theme = (cov_20d3zr68ia().s[0]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.createTheme)({}));

function createPageContext() {
  cov_20d3zr68ia().f[0]++;
  cov_20d3zr68ia().s[1]++;
  return {
    theme,
    // this is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // this is needed in order to inject the critical CSS.
    sheetsRegistry: new jss__WEBPACK_IMPORTED_MODULE_0__.SheetsRegistry() // the standard class name generator.
    // generateClassName: createGenerateClassName(),

  };
}

let pageContext;
function getPageContext() {
  cov_20d3zr68ia().f[1]++;
  cov_20d3zr68ia().s[2]++;

  // make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (true) {
    cov_20d3zr68ia().b[0][0]++;
    cov_20d3zr68ia().s[3]++;
    return createPageContext();
  } else {} // reuse context on the client-side.


  cov_20d3zr68ia().s[4]++;

  if (!pageContext) {
    cov_20d3zr68ia().b[1][0]++;
    cov_20d3zr68ia().s[5]++;
    pageContext = createPageContext();
  } else {
    cov_20d3zr68ia().b[1][1]++;
  }

  cov_20d3zr68ia().s[6]++;
  return pageContext;
}

/***/ }),

/***/ 9837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ subscribeK8sContext)
/* harmony export */ });
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42825);
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(relay_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__]);
_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _K8sContextSubscription;

function cov_je46hxerv() {
  var path = "/workspace/meshplay/ui/components/graphql/subscriptions/K8sContextSubscription.js";
  var hash = "dc4336de72593ad63f148439a6828b25d3cc1593";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/subscriptions/K8sContextSubscription.js",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 22
        },
        end: {
          line: 27,
          column: 48
        }
      },
      "1": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "2": {
        start: {
          line: 32,
          column: 24
        },
        end: {
          line: 32,
          column: 87
        }
      }
    },
    fnMap: {
      "0": {
        name: "subscribeK8sContext",
        decl: {
          start: {
            line: 26,
            column: 24
          },
          end: {
            line: 26,
            column: 43
          }
        },
        loc: {
          start: {
            line: 26,
            column: 63
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 26
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 13
          },
          end: {
            line: 32,
            column: 14
          }
        },
        loc: {
          start: {
            line: 32,
            column: 24
          },
          end: {
            line: 32,
            column: 87
          }
        },
        line: 32
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dc4336de72593ad63f148439a6828b25d3cc1593"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_je46hxerv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_je46hxerv();


const k8sContextSubscription = _K8sContextSubscription !== void 0 ? _K8sContextSubscription : _K8sContextSubscription = __webpack_require__(29045);
function subscribeK8sContext(dataCB, variables) {
  cov_je46hxerv().f[0]++;
  const environment = (cov_je46hxerv().s[0]++, (0,_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .createRelayEnvironment */ .eM)({}));
  cov_je46hxerv().s[1]++;
  return (0,relay_runtime__WEBPACK_IMPORTED_MODULE_0__.requestSubscription)(environment, {
    subscription: k8sContextSubscription,
    variables: variables,
    onNext: dataCB,
    onError: error => {
      cov_je46hxerv().f[1]++;
      cov_je46hxerv().s[2]++;
      return console.log('K8sContextSubscription: An error occured:', error);
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ subscribeMeshSyncEvents)
/* harmony export */ });
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66516);
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__]);
_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _MeshSyncEventsSubscription;

function cov_1c8ip7aunr() {
  var path = "/workspace/meshplay/ui/components/graphql/subscriptions/MeshSyncEventsSubscription.js";
  var hash = "61bbdba3f7d5a34b6869e3a9aad4e4c71046447d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/subscriptions/MeshSyncEventsSubscription.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 22
        },
        end: {
          line: 21,
          column: 48
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "2": {
        start: {
          line: 26,
          column: 24
        },
        end: {
          line: 26,
          column: 63
        }
      }
    },
    fnMap: {
      "0": {
        name: "subscribeMeshSyncEvents",
        decl: {
          start: {
            line: 20,
            column: 24
          },
          end: {
            line: 20,
            column: 47
          }
        },
        loc: {
          start: {
            line: 20,
            column: 67
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 13
          },
          end: {
            line: 26,
            column: 14
          }
        },
        loc: {
          start: {
            line: 26,
            column: 24
          },
          end: {
            line: 26,
            column: 63
          }
        },
        line: 26
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "61bbdba3f7d5a34b6869e3a9aad4e4c71046447d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1c8ip7aunr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1c8ip7aunr();


const meshSyncEventsSubscription = _MeshSyncEventsSubscription !== void 0 ? _MeshSyncEventsSubscription : _MeshSyncEventsSubscription = __webpack_require__(47409);
function subscribeMeshSyncEvents(dataCB, variables) {
  cov_1c8ip7aunr().f[0]++;
  const environment = (cov_1c8ip7aunr().s[0]++, (0,_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .createRelayEnvironment */ .eM)({}));
  cov_1c8ip7aunr().s[1]++;
  return (0,react_relay__WEBPACK_IMPORTED_MODULE_0__.requestSubscription)(environment, {
    subscription: meshSyncEventsSubscription,
    variables: variables,
    onNext: dataCB,
    onError: error => {
      cov_1c8ip7aunr().f[1]++;
      cov_1c8ip7aunr().s[2]++;
      return console.log(`An error occured:`, error);
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ subscribeMeshplayControllersStatus)
/* harmony export */ });
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66516);
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__]);
_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _MeshplayControllersStatusSubscription;

function cov_pqgp0q0x9() {
  var path = "/workspace/meshplay/ui/components/graphql/subscriptions/MeshplayControllersStatusSubscription.js";
  var hash = "b9928ecaa65afa76cf3d665240f40a4b4dda0835";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/subscriptions/MeshplayControllersStatusSubscription.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 22
        },
        end: {
          line: 16,
          column: 48
        }
      },
      "1": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "2": {
        start: {
          line: 21,
          column: 24
        },
        end: {
          line: 21,
          column: 63
        }
      }
    },
    fnMap: {
      "0": {
        name: "subscribeMeshplayControllersStatus",
        decl: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 15,
            column: 58
          }
        },
        loc: {
          start: {
            line: 15,
            column: 78
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 13
          },
          end: {
            line: 21,
            column: 14
          }
        },
        loc: {
          start: {
            line: 21,
            column: 24
          },
          end: {
            line: 21,
            column: 63
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b9928ecaa65afa76cf3d665240f40a4b4dda0835"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pqgp0q0x9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_pqgp0q0x9();


const meshplayControllersStatusSubscription = _MeshplayControllersStatusSubscription !== void 0 ? _MeshplayControllersStatusSubscription : _MeshplayControllersStatusSubscription = __webpack_require__(61358);
function subscribeMeshplayControllersStatus(dataCB, variables) {
  cov_pqgp0q0x9().f[0]++;
  const environment = (cov_pqgp0q0x9().s[0]++, (0,_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .createRelayEnvironment */ .eM)({}));
  cov_pqgp0q0x9().s[1]++;
  return (0,react_relay__WEBPACK_IMPORTED_MODULE_0__.requestSubscription)(environment, {
    subscription: meshplayControllersStatusSubscription,
    variables: {
      connectionIDs: variables
    },
    onNext: dataCB,
    onError: error => {
      cov_pqgp0q0x9().f[1]++;
      cov_pqgp0q0x9().s[2]++;
      return console.log(`An error occured:`, error);
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29045:
/***/ ((module) => {

/**
 * @generated SignedSource<<b3ff0b1931138b2a628d036eb6f80bd7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */


function cov_8hue2qn6b() {
  var path = "/workspace/meshplay/ui/components/graphql/subscriptions/__generated__/K8sContextSubscription.graphql.js";
  var hash = "34cb667c006ac7966721f699d6df405622cc637e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/subscriptions/__generated__/K8sContextSubscription.graphql.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 11
        },
        end: {
          line: 166,
          column: 4
        }
      },
      "1": {
        start: {
          line: 12,
          column: 9
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 5
        },
        end: {
          line: 139,
          column: 1
        }
      },
      "3": {
        start: {
          line: 140,
          column: 0
        },
        end: {
          line: 165,
          column: 2
        }
      },
      "4": {
        start: {
          line: 168,
          column: 0
        },
        end: {
          line: 168,
          column: 47
        }
      },
      "5": {
        start: {
          line: 170,
          column: 0
        },
        end: {
          line: 170,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 166,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "34cb667c006ac7966721f699d6df405622cc637e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_8hue2qn6b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_8hue2qn6b();
var node = (cov_8hue2qn6b().s[0]++, function () {
  cov_8hue2qn6b().f[0]++;
  var v0 = (cov_8hue2qn6b().s[1]++, [{
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "selector"
  }]),
      v1 = (cov_8hue2qn6b().s[2]++, [{
    "alias": "k8sContext",
    "args": [{
      "kind": "Variable",
      "name": "selector",
      "variableName": "selector"
    }],
    "concreteType": "K8sContextsPage",
    "kind": "LinkedField",
    "name": "subscribeK8sContext",
    "plural": false,
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_count",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "concreteType": "K8sContext",
      "kind": "LinkedField",
      "name": "contexts",
      "plural": true,
      "selections": [{
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "server",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "owner",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_by",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "meshplay_instance_id",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "kubernetes_server_id",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deployment_type",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updated_at",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "version",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "connection_id",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "storageKey": null
  }]);
  cov_8hue2qn6b().s[3]++;
  return {
    "fragment": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Fragment",
      "metadata": null,
      "name": "K8sContextSubscription",
      "selections": v1
      /*: any*/
      ,
      "type": "Subscription",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Operation",
      "name": "K8sContextSubscription",
      "selections": v1
      /*: any*/

    },
    "params": {
      "cacheID": "6c554db6a024337ed225dbb949aa970f",
      "id": null,
      "metadata": {},
      "name": "K8sContextSubscription",
      "operationKind": "subscription",
      "text": "subscription K8sContextSubscription(\n  $selector: PageFilter!\n) {\n  k8sContext: subscribeK8sContext(selector: $selector) {\n    total_count\n    contexts {\n      id\n      name\n      server\n      owner\n      created_by\n      meshplay_instance_id\n      kubernetes_server_id\n      deployment_type\n      updated_at\n      created_at\n      version\n      connection_id\n    }\n  }\n}\n"
    }
  };
}());
cov_8hue2qn6b().s[4]++;
node.hash = "8b7ae007f5dced76f0d0b1b3c90a4525";
cov_8hue2qn6b().s[5]++;
module.exports = node;

/***/ }),

/***/ 47409:
/***/ ((module) => {

/**
 * @generated SignedSource<<451b18fba5c3680f231918922efe6cf9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */


function cov_hjupzmdle() {
  var path = "/workspace/meshplay/ui/components/graphql/subscriptions/__generated__/MeshSyncEventsSubscription.graphql.js";
  var hash = "1826ea7db645ab1cfc2847e073af4f0bdf52a132";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/subscriptions/__generated__/MeshSyncEventsSubscription.graphql.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 11
        },
        end: {
          line: 95,
          column: 4
        }
      },
      "1": {
        start: {
          line: 12,
          column: 9
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 24,
          column: 5
        },
        end: {
          line: 68,
          column: 1
        }
      },
      "3": {
        start: {
          line: 69,
          column: 0
        },
        end: {
          line: 94,
          column: 2
        }
      },
      "4": {
        start: {
          line: 97,
          column: 0
        },
        end: {
          line: 97,
          column: 47
        }
      },
      "5": {
        start: {
          line: 99,
          column: 0
        },
        end: {
          line: 99,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 95,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1826ea7db645ab1cfc2847e073af4f0bdf52a132"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_hjupzmdle = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_hjupzmdle();
var node = (cov_hjupzmdle().s[0]++, function () {
  cov_hjupzmdle().f[0]++;
  var v0 = (cov_hjupzmdle().s[1]++, [{
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connectionIDs"
  }, {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "eventTypes"
  }]),
      v1 = (cov_hjupzmdle().s[2]++, [{
    "alias": "meshsyncevents",
    "args": [{
      "kind": "Variable",
      "name": "connectionIDs",
      "variableName": "connectionIDs"
    }, {
      "kind": "Variable",
      "name": "eventTypes",
      "variableName": "eventTypes"
    }],
    "concreteType": "MeshSyncEvent",
    "kind": "LinkedField",
    "name": "subscribeMeshSyncEvents",
    "plural": false,
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "object",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "connectionID",
      "storageKey": null
    }],
    "storageKey": null
  }]);
  cov_hjupzmdle().s[3]++;
  return {
    "fragment": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Fragment",
      "metadata": null,
      "name": "MeshSyncEventsSubscription",
      "selections": v1
      /*: any*/
      ,
      "type": "Subscription",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Operation",
      "name": "MeshSyncEventsSubscription",
      "selections": v1
      /*: any*/

    },
    "params": {
      "cacheID": "29cb26069b69c2858bb31abe76540d9f",
      "id": null,
      "metadata": {},
      "name": "MeshSyncEventsSubscription",
      "operationKind": "subscription",
      "text": "subscription MeshSyncEventsSubscription(\n  $connectionIDs: [String!]\n  $eventTypes: [MeshSyncEventType!]\n) {\n  meshsyncevents: subscribeMeshSyncEvents(connectionIDs: $connectionIDs, eventTypes: $eventTypes) {\n    type\n    object\n    connectionID\n  }\n}\n"
    }
  };
}());
cov_hjupzmdle().s[4]++;
node.hash = "422c02f316080b9b8d43a562f696a3d4";
cov_hjupzmdle().s[5]++;
module.exports = node;

/***/ }),

/***/ 61358:
/***/ ((module) => {

/**
 * @generated SignedSource<<23f539688b80e52960ef747e8e37a964>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */


function cov_197mzcwsec() {
  var path = "/workspace/meshplay/ui/components/graphql/subscriptions/__generated__/MeshplayControllersStatusSubscription.graphql.js";
  var hash = "ba156c876ea09b3bf72d86dee8de98d22c3d834e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/subscriptions/__generated__/MeshplayControllersStatusSubscription.graphql.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 11
        },
        end: {
          line: 92,
          column: 4
        }
      },
      "1": {
        start: {
          line: 12,
          column: 9
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 5
        },
        end: {
          line: 65,
          column: 1
        }
      },
      "3": {
        start: {
          line: 66,
          column: 0
        },
        end: {
          line: 91,
          column: 2
        }
      },
      "4": {
        start: {
          line: 94,
          column: 0
        },
        end: {
          line: 94,
          column: 47
        }
      },
      "5": {
        start: {
          line: 96,
          column: 0
        },
        end: {
          line: 96,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 92,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {},
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
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ba156c876ea09b3bf72d86dee8de98d22c3d834e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_197mzcwsec = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_197mzcwsec();
var node = (cov_197mzcwsec().s[0]++, function () {
  cov_197mzcwsec().f[0]++;
  var v0 = (cov_197mzcwsec().s[1]++, [{
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connectionIDs"
  }]),
      v1 = (cov_197mzcwsec().s[2]++, [{
    "alias": null,
    "args": [{
      "kind": "Variable",
      "name": "connectionIDs",
      "variableName": "connectionIDs"
    }],
    "concreteType": "MeshplayControllersStatusListItem",
    "kind": "LinkedField",
    "name": "subscribeMeshplayControllersStatus",
    "plural": true,
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "connectionID",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "controller",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "version",
      "storageKey": null
    }],
    "storageKey": null
  }]);
  cov_197mzcwsec().s[3]++;
  return {
    "fragment": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Fragment",
      "metadata": null,
      "name": "MeshplayControllersStatusSubscription",
      "selections": v1
      /*: any*/
      ,
      "type": "Subscription",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Operation",
      "name": "MeshplayControllersStatusSubscription",
      "selections": v1
      /*: any*/

    },
    "params": {
      "cacheID": "534d4b9391826e634ad2ab05b1a30e75",
      "id": null,
      "metadata": {},
      "name": "MeshplayControllersStatusSubscription",
      "operationKind": "subscription",
      "text": "subscription MeshplayControllersStatusSubscription(\n  $connectionIDs: [String!]\n) {\n  subscribeMeshplayControllersStatus(connectionIDs: $connectionIDs) {\n    connectionID\n    controller\n    status\n    version\n  }\n}\n"
    }
  };
}());
cov_197mzcwsec().s[4]++;
node.hash = "57fdebbc7ad327ad4b1607c9fa7df9e2";
cov_197mzcwsec().s[5]++;
module.exports = node;

/***/ }),

/***/ 96649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AZ": () => (/* binding */ isMeshplayControllerStateSubscriptionDataUpdated)
/* harmony export */ });
/* unused harmony exports isMeshSyncSubscriptionDataUpdated, isOperatorStateSubscriptionDataUpdated */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers__WEBPACK_IMPORTED_MODULE_1__]);
_helpers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_bzs05dpqc() {
  var path = "/workspace/meshplay/ui/components/subscription/comparatorFns.js";
  var hash = "e3fa9c48f4110dd621c89f1a64a7f5ee8d78f723";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/subscription/comparatorFns.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 3
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 16
        }
      },
      "2": {
        start: {
          line: 9,
          column: 18
        },
        end: {
          line: 9,
          column: 83
        }
      },
      "3": {
        start: {
          line: 9,
          column: 46
        },
        end: {
          line: 9,
          column: 82
        }
      },
      "4": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 16
        }
      },
      "6": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 38
        }
      },
      "7": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "8": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 16
        }
      },
      "9": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 22,
          column: 83
        }
      },
      "10": {
        start: {
          line: 22,
          column: 46
        },
        end: {
          line: 22,
          column: 82
        }
      },
      "11": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "12": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 16
        }
      },
      "13": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 38
        }
      },
      "14": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "15": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 16
        }
      },
      "16": {
        start: {
          line: 35,
          column: 18
        },
        end: {
          line: 42,
          column: 4
        }
      },
      "17": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "18": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 39,
          column: 7
        }
      },
      "19": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 20
        }
      },
      "20": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 17
        }
      },
      "21": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "22": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 16
        }
      },
      "23": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "isMeshSyncSubscriptionDataUpdated",
        decl: {
          start: {
            line: 4,
            column: 16
          },
          end: {
            line: 4,
            column: 49
          }
        },
        loc: {
          start: {
            line: 4,
            column: 73
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 36
          },
          end: {
            line: 9,
            column: 37
          }
        },
        loc: {
          start: {
            line: 9,
            column: 46
          },
          end: {
            line: 9,
            column: 82
          }
        },
        line: 9
      },
      "2": {
        name: "isOperatorStateSubscriptionDataUpdated",
        decl: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 54
          }
        },
        loc: {
          start: {
            line: 17,
            column: 78
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 17
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 22,
            column: 36
          },
          end: {
            line: 22,
            column: 37
          }
        },
        loc: {
          start: {
            line: 22,
            column: 46
          },
          end: {
            line: 22,
            column: 82
          }
        },
        line: 22
      },
      "4": {
        name: "isMeshplayControllerStateSubscriptionDataUpdated",
        decl: {
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 64
          }
        },
        loc: {
          start: {
            line: 30,
            column: 88
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 30
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 35,
            column: 38
          },
          end: {
            line: 35,
            column: 39
          }
        },
        loc: {
          start: {
            line: 35,
            column: 48
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 35
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 7,
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
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
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
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 20,
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
        line: 18
      },
      "3": {
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
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
        line: 23
      },
      "4": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 33,
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
        line: 31
      },
      "5": {
        loc: {
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 39,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 39,
            column: 7
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
        line: 37
      },
      "6": {
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 45,
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
        line: 43
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e3fa9c48f4110dd621c89f1a64a7f5ee8d78f723"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_bzs05dpqc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_bzs05dpqc();


function isMeshSyncSubscriptionDataUpdated(currentState, newData) {
  cov_bzs05dpqc().f[0]++;
  cov_bzs05dpqc().s[0]++;

  if (!currentState) {
    cov_bzs05dpqc().b[0][0]++;
    cov_bzs05dpqc().s[1]++;
    return true;
  } else {
    cov_bzs05dpqc().b[0][1]++;
  }

  const oldData = (cov_bzs05dpqc().s[2]++, currentState.find(data => {
    cov_bzs05dpqc().f[1]++;
    cov_bzs05dpqc().s[3]++;
    return data.contextID === newData.contextID;
  }));
  cov_bzs05dpqc().s[4]++;

  if (!oldData) {
    cov_bzs05dpqc().b[1][0]++;
    cov_bzs05dpqc().s[5]++;
    return true;
  } else {
    cov_bzs05dpqc().b[1][1]++;
  }

  cov_bzs05dpqc().s[6]++;
  return !_.isEqual(oldData, newData);
}
function isOperatorStateSubscriptionDataUpdated(currentState, newData) {
  cov_bzs05dpqc().f[2]++;
  cov_bzs05dpqc().s[7]++;

  if (!currentState) {
    cov_bzs05dpqc().b[2][0]++;
    cov_bzs05dpqc().s[8]++;
    return true;
  } else {
    cov_bzs05dpqc().b[2][1]++;
  }

  const oldData = (cov_bzs05dpqc().s[9]++, currentState.find(data => {
    cov_bzs05dpqc().f[3]++;
    cov_bzs05dpqc().s[10]++;
    return data.contextID === newData.contextID;
  }));
  cov_bzs05dpqc().s[11]++;

  if (!oldData) {
    cov_bzs05dpqc().b[3][0]++;
    cov_bzs05dpqc().s[12]++;
    return true;
  } else {
    cov_bzs05dpqc().b[3][1]++;
  }

  cov_bzs05dpqc().s[13]++;
  return !_.isEqual(oldData, newData);
}
function isMeshplayControllerStateSubscriptionDataUpdated(currentState, newData) {
  cov_bzs05dpqc().f[4]++;
  cov_bzs05dpqc().s[14]++;

  if (!currentState) {
    cov_bzs05dpqc().b[4][0]++;
    cov_bzs05dpqc().s[15]++;
    return true;
  } else {
    cov_bzs05dpqc().b[4][1]++;
  }

  const oldData = (cov_bzs05dpqc().s[16]++, currentState.filter(data => {
    cov_bzs05dpqc().f[5]++;
    cov_bzs05dpqc().s[17]++;

    for (let newControllerData of newData) {
      cov_bzs05dpqc().s[18]++;

      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__/* .isControllerObjectEqual */ .YM)(newControllerData, data)) {
        cov_bzs05dpqc().b[5][0]++;
        cov_bzs05dpqc().s[19]++;
        return true;
      } else {
        cov_bzs05dpqc().b[5][1]++;
      }
    }

    cov_bzs05dpqc().s[20]++;
    return false;
  }));
  cov_bzs05dpqc().s[21]++;

  if (!oldData) {
    cov_bzs05dpqc().b[6][0]++;
    cov_bzs05dpqc().s[22]++;
    return true;
  } else {
    cov_bzs05dpqc().b[6][1]++;
  }

  cov_bzs05dpqc().s[23]++;
  return !lodash__WEBPACK_IMPORTED_MODULE_0___default().isEqual(oldData, newData);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YM": () => (/* binding */ isControllerObjectEqual),
/* harmony export */   "_7": () => (/* binding */ MESHPLAY_CONTROLLER_SUBSCRIPTION),
/* harmony export */   "zB": () => (/* binding */ fnMapping)
/* harmony export */ });
/* harmony import */ var _graphql_subscriptions_MeshplayControllersStatusSubscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59544);
/* harmony import */ var _comparatorFns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96649);
/* harmony import */ var _mergeFns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91034);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_graphql_subscriptions_MeshplayControllersStatusSubscription__WEBPACK_IMPORTED_MODULE_0__, _comparatorFns__WEBPACK_IMPORTED_MODULE_1__, _mergeFns__WEBPACK_IMPORTED_MODULE_2__]);
([_graphql_subscriptions_MeshplayControllersStatusSubscription__WEBPACK_IMPORTED_MODULE_0__, _comparatorFns__WEBPACK_IMPORTED_MODULE_1__, _mergeFns__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_y85849hoe() {
  var path = "/workspace/meshplay/ui/components/subscription/helpers.js";
  var hash = "2e84ba3248b1d399b3838abdbdcb2883ed8b57cd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/subscription/helpers.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 48
        },
        end: {
          line: 7,
          column: 82
        }
      },
      "1": {
        start: {
          line: 9,
          column: 25
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "2": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 34,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "isControllerObjectEqual",
        decl: {
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 39
          }
        },
        loc: {
          start: {
            line: 30,
            column: 70
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 30
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 33,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 55
          }
        }, {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 57
          }
        }],
        line: 32
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2e84ba3248b1d399b3838abdbdcb2883ed8b57cd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_y85849hoe = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_y85849hoe();


 // export const MESHSYNC_EVENT_SUBSCRIPTION = 'MESHSYNC_EVENT_SUBSCRIPTION';
// export const OPERATOR_EVENT_SUBSCRIPTION = 'OPERATOR_EVENT_SUBSCRIPTION';

const MESHPLAY_CONTROLLER_SUBSCRIPTION = (cov_y85849hoe().s[0]++, 'MESHPLAY_CONTROLLER_SUBSCRIPTION');
const fnMapping = (cov_y85849hoe().s[1]++, {
  // MESHSYNC_EVENT_SUBSCRIPTION : {
  //   eventName : "listenToMeshSyncEvents",
  //   comparatorFn : isMeshSyncSubscriptionDataUpdated,
  //   subscriptionFn : subscribeMeshSyncStatusEvents,
  //   mergeFn : mergeMeshSyncSubscription
  // },
  MESHPLAY_CONTROLLER_SUBSCRIPTION: {
    eventName: 'subscribeMeshplayControllersStatus',
    subscriptionFn: _graphql_subscriptions_MeshplayControllersStatusSubscription__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    mergeFn: _mergeFns__WEBPACK_IMPORTED_MODULE_2__/* .mergeMeshplayController */ .FJ,
    comparatorFn: _comparatorFns__WEBPACK_IMPORTED_MODULE_1__/* .isMeshplayControllerStateSubscriptionDataUpdated */ .AZ
  } // OPERATOR_EVENT_SUBSCRIPTION: {
  //   eventName: 'operator',
  //   comparatorFn: isOperatorStateSubscriptionDataUpdated,
  //   subscriptionFn: subscribeOperatorStatusEvents,
  //   mergeFn: mergeOperatorStateSubscription,
  // },

});
function isControllerObjectEqual(oldController, newController) {
  cov_y85849hoe().f[0]++;
  cov_y85849hoe().s[2]++;
  return (cov_y85849hoe().b[0][0]++, newController.contextId === oldController.contextId) && (cov_y85849hoe().b[0][1]++, newController.controller === oldController.controller);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FJ": () => (/* binding */ mergeMeshplayController)
/* harmony export */ });
/* unused harmony exports mergeMeshSyncSubscription, mergeOperatorStateSubscription */
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers__WEBPACK_IMPORTED_MODULE_0__]);
_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_2l0xp7v45() {
  var path = "/workspace/meshplay/ui/components/subscription/mergeFns.js";
  var hash = "36761e23c85d5cfedcd4dfaa472619bbcf577b82";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/subscription/mergeFns.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 6,
          column: 3
        }
      },
      "1": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 21
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 91
        }
      },
      "3": {
        start: {
          line: 8,
          column: 43
        },
        end: {
          line: 8,
          column: 79
        }
      },
      "4": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 58
        }
      },
      "5": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "6": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 19
        }
      },
      "7": {
        start: {
          line: 20,
          column: 17
        },
        end: {
          line: 37,
          column: 3
        }
      },
      "8": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "9": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 32,
          column: 9
        }
      },
      "10": {
        start: {
          line: 24,
          column: 10
        },
        end: {
          line: 30,
          column: 12
        }
      },
      "11": {
        start: {
          line: 31,
          column: 10
        },
        end: {
          line: 31,
          column: 23
        }
      },
      "12": {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 18
        }
      },
      "13": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "mergeMeshSyncSubscription",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 41
          }
        },
        loc: {
          start: {
            line: 3,
            column: 65
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 33
          },
          end: {
            line: 8,
            column: 34
          }
        },
        loc: {
          start: {
            line: 8,
            column: 43
          },
          end: {
            line: 8,
            column: 79
          }
        },
        line: 8
      },
      "2": {
        name: "mergeOperatorStateSubscription",
        decl: {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 11,
            column: 46
          }
        },
        loc: {
          start: {
            line: 11,
            column: 70
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 11
      },
      "3": {
        name: "mergeMeshplayController",
        decl: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 39
          }
        },
        loc: {
          start: {
            line: 16,
            column: 63
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 16
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 28
          }
        },
        loc: {
          start: {
            line: 21,
            column: 37
          },
          end: {
            line: 35,
            column: 5
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 6,
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
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
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
        line: 17
      },
      "2": {
        loc: {
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 32,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 32,
            column: 9
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
        line: 23
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "36761e23c85d5cfedcd4dfaa472619bbcf577b82"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2l0xp7v45 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2l0xp7v45();

function mergeMeshSyncSubscription(currentState, newData) {
  cov_2l0xp7v45().f[0]++;
  cov_2l0xp7v45().s[0]++;

  if (!currentState) {
    cov_2l0xp7v45().b[0][0]++;
    cov_2l0xp7v45().s[1]++;
    return [newData];
  } else {
    cov_2l0xp7v45().b[0][1]++;
  }

  cov_2l0xp7v45().s[2]++;
  return [...currentState.filter(data => {
    cov_2l0xp7v45().f[1]++;
    cov_2l0xp7v45().s[3]++;
    return data.contextID !== newData.contextID;
  }), newData];
}
function mergeOperatorStateSubscription(currentState, newData) {
  cov_2l0xp7v45().f[2]++;
  cov_2l0xp7v45().s[4]++;
  // the merger function for both are same
  return mergeMeshSyncSubscription(currentState, newData);
}
function mergeMeshplayController(currentState, newData) {
  cov_2l0xp7v45().f[3]++;
  cov_2l0xp7v45().s[5]++;

  if (!currentState) {
    cov_2l0xp7v45().b[1][0]++;
    cov_2l0xp7v45().s[6]++;
    return newData;
  } else {
    cov_2l0xp7v45().b[1][1]++;
  }

  const merged = (cov_2l0xp7v45().s[7]++, [...currentState.filter(data => {
    cov_2l0xp7v45().f[4]++;
    cov_2l0xp7v45().s[8]++;

    for (let newControllerData of newData) {
      cov_2l0xp7v45().s[9]++;

      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__/* .isControllerObjectEqual */ .YM)(newControllerData, data)) {
        cov_2l0xp7v45().b[2][0]++;
        cov_2l0xp7v45().s[10]++;
        console.log('CONTROLLER INSIDE MERGE LOOP: ', newControllerData.controller, data.controller, newControllerData?.status, data?.status);
        cov_2l0xp7v45().s[11]++;
        return false;
      } else {
        cov_2l0xp7v45().b[2][1]++;
      }
    }

    cov_2l0xp7v45().s[12]++;
    return true;
  }), ...newData]);
  cov_2l0xp7v45().s[13]++;
  return merged;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ GQLSubscription)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers__WEBPACK_IMPORTED_MODULE_0__]);
_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_7npt5kccw() {
  var path = "/workspace/meshplay/ui/components/subscription/subscriptionhandler.js";
  var hash = "d5a958a3446de445219aabf2d7e31cea65ff77c9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/subscription/subscriptionhandler.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 21
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 45
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 45
        }
      },
      "3": {
        start: {
          line: 19,
          column: 13
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "4": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 26
        }
      },
      "5": {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "6": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "7": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 96
        }
      },
      "8": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 48
        }
      },
      "9": {
        start: {
          line: 31,
          column: 15
        },
        end: {
          line: 40,
          column: 3
        }
      },
      "10": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 48
        }
      },
      "11": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "12": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 68
        }
      },
      "13": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 38,
          column: 40
        }
      },
      "14": {
        start: {
          line: 42,
          column: 22
        },
        end: {
          line: 46,
          column: 3
        }
      },
      "15": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 45,
          column: 5
        }
      },
      "16": {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 44,
          column: 34
        }
      },
      "17": {
        start: {
          line: 48,
          column: 23
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "18": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 29
        }
      },
      "19": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 92
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        loc: {
          start: {
            line: 13,
            column: 57
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 13
          },
          end: {
            line: 19,
            column: 14
          }
        },
        loc: {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 21
          },
          end: {
            line: 23,
            column: 22
          }
        },
        loc: {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 23
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 31,
            column: 15
          },
          end: {
            line: 31,
            column: 16
          }
        },
        loc: {
          start: {
            line: 31,
            column: 25
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 31
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 42,
            column: 22
          },
          end: {
            line: 42,
            column: 23
          }
        },
        loc: {
          start: {
            line: 42,
            column: 28
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 42
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 48,
            column: 23
          },
          end: {
            line: 48,
            column: 24
          }
        },
        loc: {
          start: {
            line: 48,
            column: 42
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 48
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 15,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 15,
            column: 38
          }
        }, {
          start: {
            line: 15,
            column: 42
          },
          end: {
            line: 15,
            column: 44
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 26,
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
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 39,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 39,
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
        line: 34
      },
      "3": {
        loc: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 45,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 45,
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
        line: 43
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d5a958a3446de445219aabf2d7e31cea65ff77c9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7npt5kccw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_7npt5kccw();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * A GraphQL subscription controller
 */

class GQLSubscription {
  constructor({
    type,
    connectionIDs: _connectionIDs,
    callbackFunction
  }) {
    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "callbackFunction", void 0);

    _defineProperty(this, "connectionIDs", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "setState", (cov_7npt5kccw().s[3]++, newState => {
      cov_7npt5kccw().f[1]++;
      cov_7npt5kccw().s[4]++;
      this.state = newState;
    }));

    _defineProperty(this, "initSubscription", (cov_7npt5kccw().s[5]++, () => {
      cov_7npt5kccw().f[2]++;
      cov_7npt5kccw().s[6]++;

      if (!this.type) {
        cov_7npt5kccw().b[1][0]++;
        cov_7npt5kccw().s[7]++;
        throw new Error('Subscription Type is Empty, initialise a subscription in a constructor');
      } else {
        cov_7npt5kccw().b[1][1]++;
      }

      cov_7npt5kccw().s[8]++;
      this.updateSubscription(this.connectionIDs);
    }));

    _defineProperty(this, "doCallback", (cov_7npt5kccw().s[9]++, data => {
      cov_7npt5kccw().f[3]++;
      cov_7npt5kccw().s[10]++;
      // assuming the data is in stream and contextId being the key to the data
      data = data[_helpers__WEBPACK_IMPORTED_MODULE_0__/* .fnMapping */ .zB[this.type].eventName];
      cov_7npt5kccw().s[11]++;

      if (_helpers__WEBPACK_IMPORTED_MODULE_0__/* .fnMapping */ .zB[this.type]?.comparatorFn(this.state, data)) {
        cov_7npt5kccw().b[2][0]++;
        cov_7npt5kccw().s[12]++;
        // returns true if data is updated
        this.setState(_helpers__WEBPACK_IMPORTED_MODULE_0__/* .fnMapping */ .zB[this.type].mergeFn(this.state, data));
        cov_7npt5kccw().s[13]++;
        this.callbackFunction(this.state);
      } else {
        cov_7npt5kccw().b[2][1]++;
      }
    }));

    _defineProperty(this, "flushSubscription", (cov_7npt5kccw().s[14]++, () => {
      cov_7npt5kccw().f[4]++;
      cov_7npt5kccw().s[15]++;

      if (this.subscription) {
        cov_7npt5kccw().b[3][0]++;
        cov_7npt5kccw().s[16]++;
        this.subscription.dispose();
      } else {
        cov_7npt5kccw().b[3][1]++;
      }
    }));

    _defineProperty(this, "updateSubscription", (cov_7npt5kccw().s[17]++, connectionIDs => {
      cov_7npt5kccw().f[5]++;
      cov_7npt5kccw().s[18]++;
      this.flushSubscription();
      cov_7npt5kccw().s[19]++;
      this.subscription = _helpers__WEBPACK_IMPORTED_MODULE_0__/* .fnMapping */ .zB[this.type].subscriptionFn(this.doCallback, connectionIDs);
    }));

    cov_7npt5kccw().f[0]++;
    cov_7npt5kccw().s[0]++;
    this.type = type;
    cov_7npt5kccw().s[1]++;
    this.connectionIDs = (cov_7npt5kccw().b[0][0]++, _connectionIDs) || (cov_7npt5kccw().b[0][1]++, []);
    cov_7npt5kccw().s[2]++;
    this.callbackFunction = callbackFunction;
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isExtensionOpen": () => (/* binding */ isExtensionOpen),
/* harmony export */   "meshplayExtensionRoute": () => (/* binding */ meshplayExtensionRoute)
/* harmony export */ });
/* harmony import */ var _date_io_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65696);
/* harmony import */ var _date_io_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_date_io_moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13033);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16403);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72105);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9899);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88314);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45572);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7544);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(66568);
/* harmony import */ var _components_MeshplayProgressBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74126);
/* harmony import */ var _components_Navigator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87300);
/* harmony import */ var _components_PageContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14695);
/* harmony import */ var _components_subscription_helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(78754);
/* harmony import */ var _components_subscription_subscriptionhandler__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24457);
/* harmony import */ var _lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(47533);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(68885);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(31339);
/* harmony import */ var _utils_multi_ctx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7806);
/* harmony import */ var _components_graphql_subscriptions_K8sContextSubscription__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9837);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _themes_app__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(25879);
/* harmony import */ var _extension_AccessMeshplayModal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(49398);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _components_graphql_subscriptions_MeshSyncEventsSubscription__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(84128);
/* harmony import */ var _utils_nameMapper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(5617);
/* harmony import */ var _components_ConnectionWizard_helpers_metrics__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(45531);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(51104);
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(66516);
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(68309);
/* harmony import */ var _components_General_ErrorBoundary__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(8813);
/* harmony import */ var _components_NotificationCenter__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(38610);
/* harmony import */ var _api_meshmodel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(5299);
/* harmony import */ var _utils_Enum__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(46811);
/* harmony import */ var _utils_can__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(54872);
/* harmony import */ var _api_credentials__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(32950);
/* harmony import */ var _utils_context_dynamicContext__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(24579);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(60577);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(37579);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_17__, _components_Navigator__WEBPACK_IMPORTED_MODULE_19__, _components_subscription_helpers__WEBPACK_IMPORTED_MODULE_21__, _components_subscription_subscriptionhandler__WEBPACK_IMPORTED_MODULE_22__, _lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__, _components_graphql_subscriptions_K8sContextSubscription__WEBPACK_IMPORTED_MODULE_27__, _components_graphql_subscriptions_MeshSyncEventsSubscription__WEBPACK_IMPORTED_MODULE_32__, _components_ConnectionWizard_helpers_metrics__WEBPACK_IMPORTED_MODULE_34__, _utils_utils__WEBPACK_IMPORTED_MODULE_35__, _lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_37__, _components_General_ErrorBoundary__WEBPACK_IMPORTED_MODULE_38__, _components_NotificationCenter__WEBPACK_IMPORTED_MODULE_39__, _api_meshmodel__WEBPACK_IMPORTED_MODULE_40__, _utils_can__WEBPACK_IMPORTED_MODULE_42__, _api_credentials__WEBPACK_IMPORTED_MODULE_43__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_17__, _components_Navigator__WEBPACK_IMPORTED_MODULE_19__, _components_subscription_helpers__WEBPACK_IMPORTED_MODULE_21__, _components_subscription_subscriptionhandler__WEBPACK_IMPORTED_MODULE_22__, _lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__, _components_graphql_subscriptions_K8sContextSubscription__WEBPACK_IMPORTED_MODULE_27__, _components_graphql_subscriptions_MeshSyncEventsSubscription__WEBPACK_IMPORTED_MODULE_32__, _components_ConnectionWizard_helpers_metrics__WEBPACK_IMPORTED_MODULE_34__, _utils_utils__WEBPACK_IMPORTED_MODULE_35__, _lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_37__, _components_General_ErrorBoundary__WEBPACK_IMPORTED_MODULE_38__, _components_NotificationCenter__WEBPACK_IMPORTED_MODULE_39__, _api_meshmodel__WEBPACK_IMPORTED_MODULE_40__, _utils_can__WEBPACK_IMPORTED_MODULE_42__, _api_credentials__WEBPACK_IMPORTED_MODULE_43__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_23ks6arrqf() {
  var path = "/workspace/meshplay/ui/pages/_app.js";
  var hash = "c8892293b638b14c108438556d597ea140848a8f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/pages/_app.js",
    statementMap: {
      "0": {
        start: {
          line: 74,
          column: 0
        },
        end: {
          line: 87,
          column: 1
        }
      },
      "1": {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 75,
          column: 39
        }
      },
      "2": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 76,
          column: 51
        }
      },
      "3": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 77,
          column: 40
        }
      },
      "4": {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 78,
          column: 45
        }
      },
      "5": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 79,
          column: 45
        }
      },
      "6": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "7": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 39
        }
      },
      "8": {
        start: {
          line: 83,
          column: 2
        },
        end: {
          line: 86,
          column: 3
        }
      },
      "9": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 46
        }
      },
      "10": {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 92,
          column: 4
        }
      },
      "11": {
        start: {
          line: 95,
          column: 38
        },
        end: {
          line: 95,
          column: 58
        }
      },
      "12": {
        start: {
          line: 97,
          column: 2
        },
        end: {
          line: 100,
          column: 4
        }
      },
      "13": {
        start: {
          line: 104,
          column: 2
        },
        end: {
          line: 104,
          column: 69
        }
      },
      "14": {
        start: {
          line: 107,
          column: 15
        },
        end: {
          line: 158,
          column: 1
        }
      },
      "15": {
        start: {
          line: 108,
          column: 16
        },
        end: {
          line: 108,
          column: 26
        }
      },
      "16": {
        start: {
          line: 110,
          column: 20
        },
        end: {
          line: 112,
          column: 4
        }
      },
      "17": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 38
        }
      },
      "18": {
        start: {
          line: 114,
          column: 2
        },
        end: {
          line: 116,
          column: 3
        }
      },
      "19": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 115,
          column: 16
        }
      },
      "20": {
        start: {
          line: 118,
          column: 2
        },
        end: {
          line: 157,
          column: 4
        }
      },
      "21": {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 162,
          column: 12
        }
      },
      "22": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 163,
          column: 40
        }
      },
      "23": {
        start: {
          line: 164,
          column: 4
        },
        end: {
          line: 164,
          column: 59
        }
      },
      "24": {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 165,
          column: 51
        }
      },
      "25": {
        start: {
          line: 166,
          column: 4
        },
        end: {
          line: 166,
          column: 63
        }
      },
      "26": {
        start: {
          line: 167,
          column: 4
        },
        end: {
          line: 183,
          column: 6
        }
      },
      "27": {
        start: {
          line: 186,
          column: 30
        },
        end: {
          line: 229,
          column: 3
        }
      },
      "28": {
        start: {
          line: 187,
          column: 22
        },
        end: {
          line: 187,
          column: 32
        }
      },
      "29": {
        start: {
          line: 189,
          column: 4
        },
        end: {
          line: 228,
          column: 6
        }
      },
      "30": {
        start: {
          line: 200,
          column: 8
        },
        end: {
          line: 226,
          column: 11
        }
      },
      "31": {
        start: {
          line: 201,
          column: 10
        },
        end: {
          line: 225,
          column: 11
        }
      },
      "32": {
        start: {
          line: 202,
          column: 28
        },
        end: {
          line: 207,
          column: 13
        }
      },
      "33": {
        start: {
          line: 209,
          column: 12
        },
        end: {
          line: 209,
          column: 96
        }
      },
      "34": {
        start: {
          line: 211,
          column: 33
        },
        end: {
          line: 211,
          column: 58
        }
      },
      "35": {
        start: {
          line: 213,
          column: 12
        },
        end: {
          line: 224,
          column: 15
        }
      },
      "36": {
        start: {
          line: 214,
          column: 33
        },
        end: {
          line: 222,
          column: 15
        }
      },
      "37": {
        start: {
          line: 223,
          column: 14
        },
        end: {
          line: 223,
          column: 95
        }
      },
      "38": {
        start: {
          line: 232,
          column: 4
        },
        end: {
          line: 234,
          column: 5
        }
      },
      "39": {
        start: {
          line: 233,
          column: 6
        },
        end: {
          line: 233,
          column: 59
        }
      },
      "40": {
        start: {
          line: 236,
          column: 39
        },
        end: {
          line: 273,
          column: 5
        }
      },
      "41": {
        start: {
          line: 238,
          column: 8
        },
        end: {
          line: 267,
          column: 9
        }
      },
      "42": {
        start: {
          line: 239,
          column: 36
        },
        end: {
          line: 241,
          column: 11
        }
      },
      "43": {
        start: {
          line: 242,
          column: 31
        },
        end: {
          line: 242,
          column: 33
        }
      },
      "44": {
        start: {
          line: 243,
          column: 28
        },
        end: {
          line: 243,
          column: 30
        }
      },
      "45": {
        start: {
          line: 245,
          column: 33
        },
        end: {
          line: 245,
          column: 74
        }
      },
      "46": {
        start: {
          line: 246,
          column: 30
        },
        end: {
          line: 246,
          column: 74
        }
      },
      "47": {
        start: {
          line: 248,
          column: 28
        },
        end: {
          line: 248,
          column: 54
        }
      },
      "48": {
        start: {
          line: 249,
          column: 23
        },
        end: {
          line: 249,
          column: 70
        }
      },
      "49": {
        start: {
          line: 250,
          column: 25
        },
        end: {
          line: 250,
          column: 74
        }
      },
      "50": {
        start: {
          line: 251,
          column: 23
        },
        end: {
          line: 251,
          column: 77
        }
      },
      "51": {
        start: {
          line: 253,
          column: 10
        },
        end: {
          line: 259,
          column: 11
        }
      },
      "52": {
        start: {
          line: 254,
          column: 12
        },
        end: {
          line: 254,
          column: 75
        }
      },
      "53": {
        start: {
          line: 255,
          column: 12
        },
        end: {
          line: 255,
          column: 63
        }
      },
      "54": {
        start: {
          line: 256,
          column: 17
        },
        end: {
          line: 259,
          column: 11
        }
      },
      "55": {
        start: {
          line: 257,
          column: 12
        },
        end: {
          line: 257,
          column: 90
        }
      },
      "56": {
        start: {
          line: 258,
          column: 12
        },
        end: {
          line: 258,
          column: 63
        }
      },
      "57": {
        start: {
          line: 261,
          column: 10
        },
        end: {
          line: 266,
          column: 13
        }
      },
      "58": {
        start: {
          line: 275,
          column: 4
        },
        end: {
          line: 275,
          column: 76
        }
      },
      "59": {
        start: {
          line: 278,
          column: 22
        },
        end: {
          line: 282,
          column: 3
        }
      },
      "60": {
        start: {
          line: 279,
          column: 4
        },
        end: {
          line: 281,
          column: 7
        }
      },
      "61": {
        start: {
          line: 280,
          column: 6
        },
        end: {
          line: 280,
          column: 59
        }
      },
      "62": {
        start: {
          line: 285,
          column: 4
        },
        end: {
          line: 285,
          column: 32
        }
      },
      "63": {
        start: {
          line: 286,
          column: 4
        },
        end: {
          line: 286,
          column: 37
        }
      },
      "64": {
        start: {
          line: 287,
          column: 4
        },
        end: {
          line: 287,
          column: 19
        }
      },
      "65": {
        start: {
          line: 288,
          column: 4
        },
        end: {
          line: 288,
          column: 31
        }
      },
      "66": {
        start: {
          line: 289,
          column: 4
        },
        end: {
          line: 303,
          column: 6
        }
      },
      "67": {
        start: {
          line: 296,
          column: 8
        },
        end: {
          line: 300,
          column: 9
        }
      },
      "68": {
        start: {
          line: 297,
          column: 10
        },
        end: {
          line: 299,
          column: 13
        }
      },
      "69": {
        start: {
          line: 302,
          column: 15
        },
        end: {
          line: 302,
          column: 33
        }
      },
      "70": {
        start: {
          line: 305,
          column: 4
        },
        end: {
          line: 305,
          column: 70
        }
      },
      "71": {
        start: {
          line: 307,
          column: 35
        },
        end: {
          line: 325,
          column: 5
        }
      },
      "72": {
        start: {
          line: 308,
          column: 6
        },
        end: {
          line: 324,
          column: 8
        }
      },
      "73": {
        start: {
          line: 310,
          column: 10
        },
        end: {
          line: 310,
          column: 97
        }
      },
      "74": {
        start: {
          line: 310,
          column: 66
        },
        end: {
          line: 310,
          column: 95
        }
      },
      "75": {
        start: {
          line: 311,
          column: 10
        },
        end: {
          line: 314,
          column: 13
        }
      },
      "76": {
        start: {
          line: 326,
          column: 42
        },
        end: {
          line: 326,
          column: 66
        }
      },
      "77": {
        start: {
          line: 327,
          column: 4
        },
        end: {
          line: 327,
          column: 53
        }
      },
      "78": {
        start: {
          line: 329,
          column: 4
        },
        end: {
          line: 329,
          column: 74
        }
      },
      "79": {
        start: {
          line: 330,
          column: 4
        },
        end: {
          line: 330,
          column: 34
        }
      },
      "80": {
        start: {
          line: 333,
          column: 27
        },
        end: {
          line: 348,
          column: 3
        }
      },
      "81": {
        start: {
          line: 334,
          column: 26
        },
        end: {
          line: 334,
          column: 28
        }
      },
      "82": {
        start: {
          line: 335,
          column: 4
        },
        end: {
          line: 344,
          column: 7
        }
      },
      "83": {
        start: {
          line: 336,
          column: 18
        },
        end: {
          line: 336,
          column: 97
        }
      },
      "84": {
        start: {
          line: 337,
          column: 6
        },
        end: {
          line: 342,
          column: 7
        }
      },
      "85": {
        start: {
          line: 338,
          column: 8
        },
        end: {
          line: 341,
          column: 10
        }
      },
      "86": {
        start: {
          line: 343,
          column: 6
        },
        end: {
          line: 343,
          column: 59
        }
      },
      "87": {
        start: {
          line: 345,
          column: 4
        },
        end: {
          line: 347,
          column: 7
        }
      },
      "88": {
        start: {
          line: 351,
          column: 4
        },
        end: {
          line: 351,
          column: 77
        }
      },
      "89": {
        start: {
          line: 355,
          column: 48
        },
        end: {
          line: 355,
          column: 58
        }
      },
      "90": {
        start: {
          line: 358,
          column: 4
        },
        end: {
          line: 360,
          column: 5
        }
      },
      "91": {
        start: {
          line: 359,
          column: 6
        },
        end: {
          line: 359,
          column: 42
        }
      },
      "92": {
        start: {
          line: 362,
          column: 4
        },
        end: {
          line: 380,
          column: 5
        }
      },
      "93": {
        start: {
          line: 363,
          column: 49
        },
        end: {
          line: 363,
          column: 59
        }
      },
      "94": {
        start: {
          line: 364,
          column: 6
        },
        end: {
          line: 368,
          column: 8
        }
      },
      "95": {
        start: {
          line: 369,
          column: 18
        },
        end: {
          line: 369,
          column: 57
        }
      },
      "96": {
        start: {
          line: 371,
          column: 6
        },
        end: {
          line: 375,
          column: 7
        }
      },
      "97": {
        start: {
          line: 372,
          column: 8
        },
        end: {
          line: 374,
          column: 10
        }
      },
      "98": {
        start: {
          line: 377,
          column: 6
        },
        end: {
          line: 379,
          column: 7
        }
      },
      "99": {
        start: {
          line: 378,
          column: 8
        },
        end: {
          line: 378,
          column: 49
        }
      },
      "100": {
        start: {
          line: 383,
          column: 22
        },
        end: {
          line: 396,
          column: 3
        }
      },
      "101": {
        start: {
          line: 384,
          column: 43
        },
        end: {
          line: 393,
          column: 6
        }
      },
      "102": {
        start: {
          line: 388,
          column: 8
        },
        end: {
          line: 391,
          column: 11
        }
      },
      "103": {
        start: {
          line: 395,
          column: 4
        },
        end: {
          line: 395,
          column: 54
        }
      },
      "104": {
        start: {
          line: 398,
          column: 23
        },
        end: {
          line: 400,
          column: 3
        }
      },
      "105": {
        start: {
          line: 399,
          column: 4
        },
        end: {
          line: 399,
          column: 66
        }
      },
      "106": {
        start: {
          line: 399,
          column: 30
        },
        end: {
          line: 399,
          column: 63
        }
      },
      "107": {
        start: {
          line: 402,
          column: 27
        },
        end: {
          line: 404,
          column: 3
        }
      },
      "108": {
        start: {
          line: 403,
          column: 4
        },
        end: {
          line: 403,
          column: 58
        }
      },
      "109": {
        start: {
          line: 403,
          column: 30
        },
        end: {
          line: 403,
          column: 55
        }
      },
      "110": {
        start: {
          line: 410,
          column: 32
        },
        end: {
          line: 418,
          column: 3
        }
      },
      "111": {
        start: {
          line: 411,
          column: 4
        },
        end: {
          line: 413,
          column: 5
        }
      },
      "112": {
        start: {
          line: 412,
          column: 6
        },
        end: {
          line: 412,
          column: 34
        }
      },
      "113": {
        start: {
          line: 414,
          column: 4
        },
        end: {
          line: 417,
          column: 7
        }
      },
      "114": {
        start: {
          line: 420,
          column: 22
        },
        end: {
          line: 458,
          column: 3
        }
      },
      "115": {
        start: {
          line: 421,
          column: 4
        },
        end: {
          line: 457,
          column: 5
        }
      },
      "116": {
        start: {
          line: 422,
          column: 6
        },
        end: {
          line: 430,
          column: 7
        }
      },
      "117": {
        start: {
          line: 423,
          column: 29
        },
        end: {
          line: 423,
          column: 31
        }
      },
      "118": {
        start: {
          line: 424,
          column: 8
        },
        end: {
          line: 424,
          column: 86
        }
      },
      "119": {
        start: {
          line: 424,
          column: 57
        },
        end: {
          line: 424,
          column: 84
        }
      },
      "120": {
        start: {
          line: 425,
          column: 8
        },
        end: {
          line: 425,
          column: 35
        }
      },
      "121": {
        start: {
          line: 426,
          column: 8
        },
        end: {
          line: 428,
          column: 10
        }
      },
      "122": {
        start: {
          line: 427,
          column: 10
        },
        end: {
          line: 427,
          column: 72
        }
      },
      "123": {
        start: {
          line: 429,
          column: 8
        },
        end: {
          line: 429,
          column: 15
        }
      },
      "124": {
        start: {
          line: 433,
          column: 6
        },
        end: {
          line: 438,
          column: 7
        }
      },
      "125": {
        start: {
          line: 434,
          column: 8
        },
        end: {
          line: 436,
          column: 10
        }
      },
      "126": {
        start: {
          line: 435,
          column: 10
        },
        end: {
          line: 435,
          column: 72
        }
      },
      "127": {
        start: {
          line: 437,
          column: 8
        },
        end: {
          line: 437,
          column: 15
        }
      },
      "128": {
        start: {
          line: 440,
          column: 6
        },
        end: {
          line: 456,
          column: 8
        }
      },
      "129": {
        start: {
          line: 442,
          column: 20
        },
        end: {
          line: 442,
          column: 56
        }
      },
      "130": {
        start: {
          line: 444,
          column: 10
        },
        end: {
          line: 447,
          column: 11
        }
      },
      "131": {
        start: {
          line: 445,
          column: 12
        },
        end: {
          line: 445,
          column: 51
        }
      },
      "132": {
        start: {
          line: 445,
          column: 37
        },
        end: {
          line: 445,
          column: 49
        }
      },
      "133": {
        start: {
          line: 446,
          column: 12
        },
        end: {
          line: 446,
          column: 74
        }
      },
      "134": {
        start: {
          line: 446,
          column: 60
        },
        end: {
          line: 446,
          column: 70
        }
      },
      "135": {
        start: {
          line: 450,
          column: 10
        },
        end: {
          line: 452,
          column: 11
        }
      },
      "136": {
        start: {
          line: 451,
          column: 12
        },
        end: {
          line: 451,
          column: 28
        }
      },
      "137": {
        start: {
          line: 453,
          column: 10
        },
        end: {
          line: 453,
          column: 53
        }
      },
      "138": {
        start: {
          line: 455,
          column: 14
        },
        end: {
          line: 455,
          column: 76
        }
      },
      "139": {
        start: {
          line: 460,
          column: 19
        },
        end: {
          line: 468,
          column: 3
        }
      },
      "140": {
        start: {
          line: 461,
          column: 4
        },
        end: {
          line: 467,
          column: 42
        }
      },
      "141": {
        start: {
          line: 463,
          column: 8
        },
        end: {
          line: 463,
          column: 44
        }
      },
      "142": {
        start: {
          line: 464,
          column: 23
        },
        end: {
          line: 464,
          column: 80
        }
      },
      "143": {
        start: {
          line: 464,
          column: 50
        },
        end: {
          line: 464,
          column: 79
        }
      },
      "144": {
        start: {
          line: 465,
          column: 8
        },
        end: {
          line: 465,
          column: 71
        }
      },
      "145": {
        start: {
          line: 465,
          column: 20
        },
        end: {
          line: 465,
          column: 71
        }
      },
      "146": {
        start: {
          line: 467,
          column: 22
        },
        end: {
          line: 467,
          column: 40
        }
      },
      "147": {
        start: {
          line: 470,
          column: 24
        },
        end: {
          line: 472,
          column: 3
        }
      },
      "148": {
        start: {
          line: 471,
          column: 4
        },
        end: {
          line: 471,
          column: 96
        }
      },
      "149": {
        start: {
          line: 474,
          column: 12
        },
        end: {
          line: 514,
          column: 3
        }
      },
      "150": {
        start: {
          line: 475,
          column: 23
        },
        end: {
          line: 475,
          column: 59
        }
      },
      "151": {
        start: {
          line: 476,
          column: 22
        },
        end: {
          line: 476,
          column: 27
        }
      },
      "152": {
        start: {
          line: 478,
          column: 4
        },
        end: {
          line: 483,
          column: 5
        }
      },
      "153": {
        start: {
          line: 479,
          column: 16
        },
        end: {
          line: 479,
          column: 38
        }
      },
      "154": {
        start: {
          line: 480,
          column: 6
        },
        end: {
          line: 480,
          column: 50
        }
      },
      "155": {
        start: {
          line: 481,
          column: 6
        },
        end: {
          line: 481,
          column: 32
        }
      },
      "156": {
        start: {
          line: 482,
          column: 6
        },
        end: {
          line: 482,
          column: 39
        }
      },
      "157": {
        start: {
          line: 485,
          column: 4
        },
        end: {
          line: 513,
          column: 6
        }
      },
      "158": {
        start: {
          line: 493,
          column: 27
        },
        end: {
          line: 493,
          column: 49
        }
      },
      "159": {
        start: {
          line: 495,
          column: 8
        },
        end: {
          line: 510,
          column: 9
        }
      },
      "160": {
        start: {
          line: 496,
          column: 23
        },
        end: {
          line: 496,
          column: 88
        }
      },
      "161": {
        start: {
          line: 496,
          column: 63
        },
        end: {
          line: 496,
          column: 87
        }
      },
      "162": {
        start: {
          line: 497,
          column: 10
        },
        end: {
          line: 503,
          column: 11
        }
      },
      "163": {
        start: {
          line: 498,
          column: 12
        },
        end: {
          line: 498,
          column: 56
        }
      },
      "164": {
        start: {
          line: 499,
          column: 12
        },
        end: {
          line: 499,
          column: 31
        }
      },
      "165": {
        start: {
          line: 500,
          column: 12
        },
        end: {
          line: 500,
          column: 70
        }
      },
      "166": {
        start: {
          line: 501,
          column: 12
        },
        end: {
          line: 501,
          column: 59
        }
      },
      "167": {
        start: {
          line: 502,
          column: 12
        },
        end: {
          line: 502,
          column: 52
        }
      },
      "168": {
        start: {
          line: 505,
          column: 10
        },
        end: {
          line: 505,
          column: 54
        }
      },
      "169": {
        start: {
          line: 506,
          column: 10
        },
        end: {
          line: 506,
          column: 29
        }
      },
      "170": {
        start: {
          line: 507,
          column: 10
        },
        end: {
          line: 507,
          column: 57
        }
      },
      "171": {
        start: {
          line: 508,
          column: 10
        },
        end: {
          line: 508,
          column: 68
        }
      },
      "172": {
        start: {
          line: 509,
          column: 10
        },
        end: {
          line: 509,
          column: 50
        }
      },
      "173": {
        start: {
          line: 512,
          column: 15
        },
        end: {
          line: 512,
          column: 78
        }
      },
      "174": {
        start: {
          line: 515,
          column: 18
        },
        end: {
          line: 533,
          column: 3
        }
      },
      "175": {
        start: {
          line: 516,
          column: 29
        },
        end: {
          line: 516,
          column: 71
        }
      },
      "176": {
        start: {
          line: 517,
          column: 4
        },
        end: {
          line: 532,
          column: 5
        }
      },
      "177": {
        start: {
          line: 518,
          column: 22
        },
        end: {
          line: 518,
          column: 50
        }
      },
      "178": {
        start: {
          line: 519,
          column: 6
        },
        end: {
          line: 519,
          column: 35
        }
      },
      "179": {
        start: {
          line: 521,
          column: 6
        },
        end: {
          line: 531,
          column: 8
        }
      },
      "180": {
        start: {
          line: 528,
          column: 10
        },
        end: {
          line: 528,
          column: 50
        }
      },
      "181": {
        start: {
          line: 530,
          column: 17
        },
        end: {
          line: 530,
          column: 76
        }
      },
      "182": {
        start: {
          line: 534,
          column: 20
        },
        end: {
          line: 540,
          column: 3
        }
      },
      "183": {
        start: {
          line: 535,
          column: 22
        },
        end: {
          line: 535,
          column: 32
        }
      },
      "184": {
        start: {
          line: 536,
          column: 4
        },
        end: {
          line: 539,
          column: 7
        }
      },
      "185": {
        start: {
          line: 541,
          column: 17
        },
        end: {
          line: 547,
          column: 3
        }
      },
      "186": {
        start: {
          line: 542,
          column: 22
        },
        end: {
          line: 542,
          column: 32
        }
      },
      "187": {
        start: {
          line: 543,
          column: 4
        },
        end: {
          line: 546,
          column: 7
        }
      },
      "188": {
        start: {
          line: 548,
          column: 16
        },
        end: {
          line: 574,
          column: 3
        }
      },
      "189": {
        start: {
          line: 549,
          column: 23
        },
        end: {
          line: 549,
          column: 53
        }
      },
      "190": {
        start: {
          line: 550,
          column: 22
        },
        end: {
          line: 550,
          column: 32
        }
      },
      "191": {
        start: {
          line: 551,
          column: 4
        },
        end: {
          line: 573,
          column: 5
        }
      },
      "192": {
        start: {
          line: 552,
          column: 6
        },
        end: {
          line: 552,
          column: 74
        }
      },
      "193": {
        start: {
          line: 554,
          column: 6
        },
        end: {
          line: 572,
          column: 8
        }
      },
      "194": {
        start: {
          line: 561,
          column: 10
        },
        end: {
          line: 569,
          column: 11
        }
      },
      "195": {
        start: {
          line: 562,
          column: 12
        },
        end: {
          line: 568,
          column: 15
        }
      },
      "196": {
        start: {
          line: 563,
          column: 14
        },
        end: {
          line: 566,
          column: 17
        }
      },
      "197": {
        start: {
          line: 567,
          column: 14
        },
        end: {
          line: 567,
          column: 35
        }
      },
      "198": {
        start: {
          line: 571,
          column: 17
        },
        end: {
          line: 571,
          column: 80
        }
      },
      "199": {
        start: {
          line: 576,
          column: 18
        },
        end: {
          line: 581,
          column: 3
        }
      },
      "200": {
        start: {
          line: 577,
          column: 4
        },
        end: {
          line: 579,
          column: 6
        }
      },
      "201": {
        start: {
          line: 578,
          column: 37
        },
        end: {
          line: 578,
          column: 91
        }
      },
      "202": {
        start: {
          line: 580,
          column: 4
        },
        end: {
          line: 580,
          column: 44
        }
      },
      "203": {
        start: {
          line: 584,
          column: 22
        },
        end: {
          line: 584,
          column: 32
        }
      },
      "204": {
        start: {
          line: 585,
          column: 4
        },
        end: {
          line: 661,
          column: 6
        }
      },
      "205": {
        start: {
          line: 592,
          column: 8
        },
        end: {
          line: 656,
          column: 9
        }
      },
      "206": {
        start: {
          line: 593,
          column: 10
        },
        end: {
          line: 602,
          column: 11
        }
      },
      "207": {
        start: {
          line: 598,
          column: 12
        },
        end: {
          line: 601,
          column: 15
        }
      },
      "208": {
        start: {
          line: 632,
          column: 10
        },
        end: {
          line: 643,
          column: 11
        }
      },
      "209": {
        start: {
          line: 633,
          column: 33
        },
        end: {
          line: 641,
          column: 13
        }
      },
      "210": {
        start: {
          line: 642,
          column: 12
        },
        end: {
          line: 642,
          column: 87
        }
      },
      "211": {
        start: {
          line: 644,
          column: 10
        },
        end: {
          line: 649,
          column: 11
        }
      },
      "212": {
        start: {
          line: 645,
          column: 12
        },
        end: {
          line: 648,
          column: 15
        }
      },
      "213": {
        start: {
          line: 650,
          column: 10
        },
        end: {
          line: 655,
          column: 11
        }
      },
      "214": {
        start: {
          line: 651,
          column: 12
        },
        end: {
          line: 654,
          column: 15
        }
      },
      "215": {
        start: {
          line: 659,
          column: 8
        },
        end: {
          line: 659,
          column: 78
        }
      },
      "216": {
        start: {
          line: 665,
          column: 22
        },
        end: {
          line: 665,
          column: 91
        }
      },
      "217": {
        start: {
          line: 666,
          column: 4
        },
        end: {
          line: 666,
          column: 25
        }
      },
      "218": {
        start: {
          line: 668,
          column: 16
        },
        end: {
          line: 670,
          column: 3
        }
      },
      "219": {
        start: {
          line: 669,
          column: 4
        },
        end: {
          line: 669,
          column: 40
        }
      },
      "220": {
        start: {
          line: 672,
          column: 83
        },
        end: {
          line: 672,
          column: 93
        }
      },
      "221": {
        start: {
          line: 675,
          column: 36
        },
        end: {
          line: 723,
          column: 6
        }
      },
      "222": {
        start: {
          line: 676,
          column: 48
        },
        end: {
          line: 676,
          column: 53
        }
      },
      "223": {
        start: {
          line: 677,
          column: 6
        },
        end: {
          line: 722,
          column: 8
        }
      },
      "224": {
        start: {
          line: 725,
          column: 4
        },
        end: {
          line: 833,
          column: 6
        }
      },
      "225": {
        start: {
          line: 744,
          column: 61
        },
        end: {
          line: 744,
          column: 92
        }
      },
      "226": {
        start: {
          line: 751,
          column: 61
        },
        end: {
          line: 751,
          column: 92
        }
      },
      "227": {
        start: {
          line: 825,
          column: 35
        },
        end: {
          line: 825,
          column: 67
        }
      },
      "228": {
        start: {
          line: 837,
          column: 0
        },
        end: {
          line: 837,
          column: 65
        }
      },
      "229": {
        start: {
          line: 839,
          column: 24
        },
        end: {
          line: 847,
          column: 2
        }
      },
      "230": {
        start: {
          line: 839,
          column: 36
        },
        end: {
          line: 847,
          column: 1
        }
      },
      "231": {
        start: {
          line: 849,
          column: 27
        },
        end: {
          line: 853,
          column: 2
        }
      },
      "232": {
        start: {
          line: 849,
          column: 42
        },
        end: {
          line: 853,
          column: 1
        }
      },
      "233": {
        start: {
          line: 855,
          column: 26
        },
        end: {
          line: 857,
          column: 1
        }
      },
      "234": {
        start: {
          line: 859,
          column: 27
        },
        end: {
          line: 875,
          column: 1
        }
      },
      "235": {
        start: {
          line: 860,
          column: 2
        },
        end: {
          line: 874,
          column: 4
        }
      },
      "236": {
        start: {
          line: 883,
          column: 31
        },
        end: {
          line: 883,
          column: 43
        }
      },
      "237": {
        start: {
          line: 884,
          column: 33
        },
        end: {
          line: 884,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "fetchContexts",
        decl: {
          start: {
            line: 89,
            column: 15
          },
          end: {
            line: 89,
            column: 28
          }
        },
        loc: {
          start: {
            line: 89,
            column: 55
          },
          end: {
            line: 93,
            column: 1
          }
        },
        line: 89
      },
      "1": {
        name: "isMeshplayUiRestrictedAndThePageIsNotPlayground",
        decl: {
          start: {
            line: 96,
            column: 9
          },
          end: {
            line: 96,
            column: 56
          }
        },
        loc: {
          start: {
            line: 96,
            column: 79
          },
          end: {
            line: 101,
            column: 1
          }
        },
        line: 96
      },
      "2": {
        name: "isExtensionOpen",
        decl: {
          start: {
            line: 103,
            column: 16
          },
          end: {
            line: 103,
            column: 31
          }
        },
        loc: {
          start: {
            line: 103,
            column: 34
          },
          end: {
            line: 105,
            column: 1
          }
        },
        line: 103
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 107,
            column: 15
          },
          end: {
            line: 107,
            column: 16
          }
        },
        loc: {
          start: {
            line: 107,
            column: 78
          },
          end: {
            line: 158,
            column: 1
          }
        },
        line: 107
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 110,
            column: 32
          },
          end: {
            line: 110,
            column: 33
          }
        },
        loc: {
          start: {
            line: 110,
            column: 43
          },
          end: {
            line: 112,
            column: 3
          }
        },
        line: 110
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 161,
            column: 2
          },
          end: {
            line: 161,
            column: 3
          }
        },
        loc: {
          start: {
            line: 161,
            column: 16
          },
          end: {
            line: 184,
            column: 3
          }
        },
        line: 161
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 186,
            column: 30
          },
          end: {
            line: 186,
            column: 31
          }
        },
        loc: {
          start: {
            line: 186,
            column: 36
          },
          end: {
            line: 229,
            column: 3
          }
        },
        line: 186
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 199,
            column: 7
          }
        },
        loc: {
          start: {
            line: 199,
            column: 15
          },
          end: {
            line: 227,
            column: 7
          }
        },
        line: 199
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 200,
            column: 34
          },
          end: {
            line: 200,
            column: 35
          }
        },
        loc: {
          start: {
            line: 200,
            column: 50
          },
          end: {
            line: 226,
            column: 9
          }
        },
        line: 200
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 213,
            column: 49
          },
          end: {
            line: 213,
            column: 50
          }
        },
        loc: {
          start: {
            line: 213,
            column: 58
          },
          end: {
            line: 224,
            column: 13
          }
        },
        line: 213
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 231,
            column: 2
          },
          end: {
            line: 231,
            column: 3
          }
        },
        loc: {
          start: {
            line: 231,
            column: 48
          },
          end: {
            line: 276,
            column: 3
          }
        },
        line: 231
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 237,
            column: 7
          }
        },
        loc: {
          start: {
            line: 237,
            column: 18
          },
          end: {
            line: 268,
            column: 7
          }
        },
        line: 237
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 278,
            column: 22
          },
          end: {
            line: 278,
            column: 23
          }
        },
        loc: {
          start: {
            line: 278,
            column: 28
          },
          end: {
            line: 282,
            column: 3
          }
        },
        line: 278
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 279,
            column: 18
          },
          end: {
            line: 279,
            column: 19
          }
        },
        loc: {
          start: {
            line: 279,
            column: 29
          },
          end: {
            line: 281,
            column: 5
          }
        },
        line: 279
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 284,
            column: 2
          },
          end: {
            line: 284,
            column: 3
          }
        },
        loc: {
          start: {
            line: 284,
            column: 22
          },
          end: {
            line: 331,
            column: 3
          }
        },
        line: 284
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        },
        loc: {
          start: {
            line: 295,
            column: 18
          },
          end: {
            line: 301,
            column: 7
          }
        },
        line: 295
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 302,
            column: 7
          }
        },
        loc: {
          start: {
            line: 302,
            column: 15
          },
          end: {
            line: 302,
            column: 33
          }
        },
        line: 302
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 307,
            column: 35
          },
          end: {
            line: 307,
            column: 36
          }
        },
        loc: {
          start: {
            line: 307,
            column: 92
          },
          end: {
            line: 325,
            column: 5
          }
        },
        line: 307
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 309,
            column: 8
          },
          end: {
            line: 309,
            column: 9
          }
        },
        loc: {
          start: {
            line: 309,
            column: 20
          },
          end: {
            line: 315,
            column: 9
          }
        },
        line: 309
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 310,
            column: 60
          },
          end: {
            line: 310,
            column: 61
          }
        },
        loc: {
          start: {
            line: 310,
            column: 66
          },
          end: {
            line: 310,
            column: 95
          }
        },
        line: 310
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 333,
            column: 27
          },
          end: {
            line: 333,
            column: 28
          }
        },
        loc: {
          start: {
            line: 333,
            column: 33
          },
          end: {
            line: 348,
            column: 3
          }
        },
        line: 333
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 335,
            column: 29
          },
          end: {
            line: 335,
            column: 30
          }
        },
        loc: {
          start: {
            line: 335,
            column: 45
          },
          end: {
            line: 344,
            column: 5
          }
        },
        line: 335
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 350,
            column: 2
          },
          end: {
            line: 350,
            column: 3
          }
        },
        loc: {
          start: {
            line: 350,
            column: 25
          },
          end: {
            line: 352,
            column: 3
          }
        },
        line: 350
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 354,
            column: 2
          },
          end: {
            line: 354,
            column: 3
          }
        },
        loc: {
          start: {
            line: 354,
            column: 32
          },
          end: {
            line: 381,
            column: 3
          }
        },
        line: 354
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 383,
            column: 22
          },
          end: {
            line: 383,
            column: 23
          }
        },
        loc: {
          start: {
            line: 383,
            column: 36
          },
          end: {
            line: 396,
            column: 3
          }
        },
        line: 383
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 387,
            column: 24
          },
          end: {
            line: 387,
            column: 25
          }
        },
        loc: {
          start: {
            line: 387,
            column: 34
          },
          end: {
            line: 392,
            column: 7
          }
        },
        line: 387
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 398,
            column: 23
          },
          end: {
            line: 398,
            column: 24
          }
        },
        loc: {
          start: {
            line: 398,
            column: 29
          },
          end: {
            line: 400,
            column: 3
          }
        },
        line: 398
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 399,
            column: 18
          },
          end: {
            line: 399,
            column: 19
          }
        },
        loc: {
          start: {
            line: 399,
            column: 30
          },
          end: {
            line: 399,
            column: 63
          }
        },
        line: 399
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 402,
            column: 27
          },
          end: {
            line: 402,
            column: 28
          }
        },
        loc: {
          start: {
            line: 402,
            column: 33
          },
          end: {
            line: 404,
            column: 3
          }
        },
        line: 402
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 403,
            column: 18
          },
          end: {
            line: 403,
            column: 19
          }
        },
        loc: {
          start: {
            line: 403,
            column: 30
          },
          end: {
            line: 403,
            column: 55
          }
        },
        line: 403
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 410,
            column: 32
          },
          end: {
            line: 410,
            column: 33
          }
        },
        loc: {
          start: {
            line: 410,
            column: 55
          },
          end: {
            line: 418,
            column: 3
          }
        },
        line: 410
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 420,
            column: 22
          },
          end: {
            line: 420,
            column: 23
          }
        },
        loc: {
          start: {
            line: 420,
            column: 30
          },
          end: {
            line: 458,
            column: 3
          }
        },
        line: 420
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 424,
            column: 48
          },
          end: {
            line: 424,
            column: 49
          }
        },
        loc: {
          start: {
            line: 424,
            column: 57
          },
          end: {
            line: 424,
            column: 84
          }
        },
        line: 424
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 426,
            column: 61
          },
          end: {
            line: 426,
            column: 62
          }
        },
        loc: {
          start: {
            line: 427,
            column: 10
          },
          end: {
            line: 427,
            column: 72
          }
        },
        line: 427
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 434,
            column: 49
          },
          end: {
            line: 434,
            column: 50
          }
        },
        loc: {
          start: {
            line: 435,
            column: 10
          },
          end: {
            line: 435,
            column: 72
          }
        },
        line: 435
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 441,
            column: 8
          },
          end: {
            line: 441,
            column: 9
          }
        },
        loc: {
          start: {
            line: 441,
            column: 19
          },
          end: {
            line: 454,
            column: 9
          }
        },
        line: 441
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 445,
            column: 29
          },
          end: {
            line: 445,
            column: 30
          }
        },
        loc: {
          start: {
            line: 445,
            column: 37
          },
          end: {
            line: 445,
            column: 49
          }
        },
        line: 445
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 446,
            column: 51
          },
          end: {
            line: 446,
            column: 52
          }
        },
        loc: {
          start: {
            line: 446,
            column: 60
          },
          end: {
            line: 446,
            column: 70
          }
        },
        line: 446
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 455,
            column: 8
          },
          end: {
            line: 455,
            column: 9
          }
        },
        loc: {
          start: {
            line: 455,
            column: 14
          },
          end: {
            line: 455,
            column: 76
          }
        },
        line: 455
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 460,
            column: 19
          },
          end: {
            line: 460,
            column: 20
          }
        },
        loc: {
          start: {
            line: 460,
            column: 36
          },
          end: {
            line: 468,
            column: 3
          }
        },
        line: 460
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 462,
            column: 12
          },
          end: {
            line: 462,
            column: 13
          }
        },
        loc: {
          start: {
            line: 462,
            column: 21
          },
          end: {
            line: 466,
            column: 7
          }
        },
        line: 462
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 464,
            column: 43
          },
          end: {
            line: 464,
            column: 44
          }
        },
        loc: {
          start: {
            line: 464,
            column: 50
          },
          end: {
            line: 464,
            column: 79
          }
        },
        line: 464
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 467,
            column: 13
          },
          end: {
            line: 467,
            column: 14
          }
        },
        loc: {
          start: {
            line: 467,
            column: 22
          },
          end: {
            line: 467,
            column: 40
          }
        },
        line: 467
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 470,
            column: 24
          },
          end: {
            line: 470,
            column: 25
          }
        },
        loc: {
          start: {
            line: 470,
            column: 34
          },
          end: {
            line: 472,
            column: 3
          }
        },
        line: 470
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 474,
            column: 12
          },
          end: {
            line: 474,
            column: 13
          }
        },
        loc: {
          start: {
            line: 474,
            column: 24
          },
          end: {
            line: 514,
            column: 3
          }
        },
        line: 474
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 491,
            column: 6
          },
          end: {
            line: 491,
            column: 7
          }
        },
        loc: {
          start: {
            line: 491,
            column: 24
          },
          end: {
            line: 511,
            column: 7
          }
        },
        line: 491
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 496,
            column: 54
          },
          end: {
            line: 496,
            column: 55
          }
        },
        loc: {
          start: {
            line: 496,
            column: 63
          },
          end: {
            line: 496,
            column: 87
          }
        },
        line: 496
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 512,
            column: 6
          },
          end: {
            line: 512,
            column: 7
          }
        },
        loc: {
          start: {
            line: 512,
            column: 15
          },
          end: {
            line: 512,
            column: 78
          }
        },
        line: 512
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 515,
            column: 18
          },
          end: {
            line: 515,
            column: 19
          }
        },
        loc: {
          start: {
            line: 515,
            column: 35
          },
          end: {
            line: 533,
            column: 3
          }
        },
        line: 515
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 527,
            column: 8
          },
          end: {
            line: 527,
            column: 9
          }
        },
        loc: {
          start: {
            line: 527,
            column: 26
          },
          end: {
            line: 529,
            column: 9
          }
        },
        line: 527
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 530,
            column: 8
          },
          end: {
            line: 530,
            column: 9
          }
        },
        loc: {
          start: {
            line: 530,
            column: 17
          },
          end: {
            line: 530,
            column: 76
          }
        },
        line: 530
      },
      "51": {
        name: "(anonymous_51)",
        decl: {
          start: {
            line: 534,
            column: 20
          },
          end: {
            line: 534,
            column: 21
          }
        },
        loc: {
          start: {
            line: 534,
            column: 29
          },
          end: {
            line: 540,
            column: 3
          }
        },
        line: 534
      },
      "52": {
        name: "(anonymous_52)",
        decl: {
          start: {
            line: 541,
            column: 17
          },
          end: {
            line: 541,
            column: 18
          }
        },
        loc: {
          start: {
            line: 541,
            column: 32
          },
          end: {
            line: 547,
            column: 3
          }
        },
        line: 541
      },
      "53": {
        name: "(anonymous_53)",
        decl: {
          start: {
            line: 548,
            column: 16
          },
          end: {
            line: 548,
            column: 17
          }
        },
        loc: {
          start: {
            line: 548,
            column: 46
          },
          end: {
            line: 574,
            column: 3
          }
        },
        line: 548
      },
      "54": {
        name: "(anonymous_54)",
        decl: {
          start: {
            line: 560,
            column: 8
          },
          end: {
            line: 560,
            column: 9
          }
        },
        loc: {
          start: {
            line: 560,
            column: 20
          },
          end: {
            line: 570,
            column: 9
          }
        },
        line: 560
      },
      "55": {
        name: "(anonymous_55)",
        decl: {
          start: {
            line: 562,
            column: 49
          },
          end: {
            line: 562,
            column: 50
          }
        },
        loc: {
          start: {
            line: 562,
            column: 55
          },
          end: {
            line: 568,
            column: 13
          }
        },
        line: 562
      },
      "56": {
        name: "(anonymous_56)",
        decl: {
          start: {
            line: 571,
            column: 8
          },
          end: {
            line: 571,
            column: 9
          }
        },
        loc: {
          start: {
            line: 571,
            column: 17
          },
          end: {
            line: 571,
            column: 80
          }
        },
        line: 571
      },
      "57": {
        name: "(anonymous_57)",
        decl: {
          start: {
            line: 576,
            column: 18
          },
          end: {
            line: 576,
            column: 19
          }
        },
        loc: {
          start: {
            line: 576,
            column: 24
          },
          end: {
            line: 581,
            column: 3
          }
        },
        line: 576
      },
      "58": {
        name: "(anonymous_58)",
        decl: {
          start: {
            line: 578,
            column: 27
          },
          end: {
            line: 578,
            column: 28
          }
        },
        loc: {
          start: {
            line: 578,
            column: 37
          },
          end: {
            line: 578,
            column: 91
          }
        },
        line: 578
      },
      "59": {
        name: "(anonymous_59)",
        decl: {
          start: {
            line: 583,
            column: 2
          },
          end: {
            line: 583,
            column: 3
          }
        },
        loc: {
          start: {
            line: 583,
            column: 31
          },
          end: {
            line: 662,
            column: 3
          }
        },
        line: 583
      },
      "60": {
        name: "(anonymous_60)",
        decl: {
          start: {
            line: 591,
            column: 6
          },
          end: {
            line: 591,
            column: 7
          }
        },
        loc: {
          start: {
            line: 591,
            column: 18
          },
          end: {
            line: 657,
            column: 7
          }
        },
        line: 591
      },
      "61": {
        name: "(anonymous_61)",
        decl: {
          start: {
            line: 658,
            column: 6
          },
          end: {
            line: 658,
            column: 7
          }
        },
        loc: {
          start: {
            line: 658,
            column: 17
          },
          end: {
            line: 660,
            column: 7
          }
        },
        line: 658
      },
      "62": {
        name: "(anonymous_62)",
        decl: {
          start: {
            line: 664,
            column: 2
          },
          end: {
            line: 664,
            column: 3
          }
        },
        loc: {
          start: {
            line: 664,
            column: 51
          },
          end: {
            line: 667,
            column: 3
          }
        },
        line: 664
      },
      "63": {
        name: "(anonymous_63)",
        decl: {
          start: {
            line: 668,
            column: 16
          },
          end: {
            line: 668,
            column: 17
          }
        },
        loc: {
          start: {
            line: 668,
            column: 31
          },
          end: {
            line: 670,
            column: 3
          }
        },
        line: 668
      },
      "64": {
        name: "(anonymous_64)",
        decl: {
          start: {
            line: 671,
            column: 2
          },
          end: {
            line: 671,
            column: 3
          }
        },
        loc: {
          start: {
            line: 671,
            column: 11
          },
          end: {
            line: 834,
            column: 3
          }
        },
        line: 671
      },
      "65": {
        name: "(anonymous_65)",
        decl: {
          start: {
            line: 675,
            column: 47
          },
          end: {
            line: 675,
            column: 48
          }
        },
        loc: {
          start: {
            line: 675,
            column: 72
          },
          end: {
            line: 723,
            column: 5
          }
        },
        line: 675
      },
      "66": {
        name: "(anonymous_66)",
        decl: {
          start: {
            line: 744,
            column: 44
          },
          end: {
            line: 744,
            column: 45
          }
        },
        loc: {
          start: {
            line: 744,
            column: 61
          },
          end: {
            line: 744,
            column: 92
          }
        },
        line: 744
      },
      "67": {
        name: "(anonymous_67)",
        decl: {
          start: {
            line: 751,
            column: 44
          },
          end: {
            line: 751,
            column: 45
          }
        },
        loc: {
          start: {
            line: 751,
            column: 61
          },
          end: {
            line: 751,
            column: 92
          }
        },
        line: 751
      },
      "68": {
        name: "(anonymous_68)",
        decl: {
          start: {
            line: 825,
            column: 29
          },
          end: {
            line: 825,
            column: 30
          }
        },
        loc: {
          start: {
            line: 825,
            column: 35
          },
          end: {
            line: 825,
            column: 67
          }
        },
        line: 825
      },
      "69": {
        name: "(anonymous_69)",
        decl: {
          start: {
            line: 839,
            column: 24
          },
          end: {
            line: 839,
            column: 25
          }
        },
        loc: {
          start: {
            line: 839,
            column: 36
          },
          end: {
            line: 847,
            column: 1
          }
        },
        line: 839
      },
      "70": {
        name: "(anonymous_70)",
        decl: {
          start: {
            line: 849,
            column: 27
          },
          end: {
            line: 849,
            column: 28
          }
        },
        loc: {
          start: {
            line: 849,
            column: 42
          },
          end: {
            line: 853,
            column: 1
          }
        },
        line: 849
      },
      "71": {
        name: "(anonymous_71)",
        decl: {
          start: {
            line: 859,
            column: 27
          },
          end: {
            line: 859,
            column: 28
          }
        },
        loc: {
          start: {
            line: 859,
            column: 38
          },
          end: {
            line: 875,
            column: 1
          }
        },
        line: 859
      },
      "72": {
        name: "(anonymous_72)",
        decl: {
          start: {
            line: 883,
            column: 20
          },
          end: {
            line: 883,
            column: 21
          }
        },
        loc: {
          start: {
            line: 883,
            column: 31
          },
          end: {
            line: 883,
            column: 43
          }
        },
        line: 883
      },
      "73": {
        name: "(anonymous_73)",
        decl: {
          start: {
            line: 884,
            column: 22
          },
          end: {
            line: 884,
            column: 23
          }
        },
        loc: {
          start: {
            line: 884,
            column: 33
          },
          end: {
            line: 884,
            column: 46
          }
        },
        line: 884
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 74,
            column: 0
          },
          end: {
            line: 87,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 74,
            column: 0
          },
          end: {
            line: 87,
            column: 1
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
        line: 74
      },
      "1": {
        loc: {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 82,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 82,
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
        line: 80
      },
      "2": {
        loc: {
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 86,
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
        line: 83
      },
      "3": {
        loc: {
          start: {
            line: 89,
            column: 29
          },
          end: {
            line: 89,
            column: 40
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 89,
            column: 38
          },
          end: {
            line: 89,
            column: 40
          }
        }],
        line: 89
      },
      "4": {
        loc: {
          start: {
            line: 89,
            column: 42
          },
          end: {
            line: 89,
            column: 53
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 89,
            column: 51
          },
          end: {
            line: 89,
            column: 53
          }
        }],
        line: 89
      },
      "5": {
        loc: {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 99,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 64
          }
        }, {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 66
          }
        }],
        line: 98
      },
      "6": {
        loc: {
          start: {
            line: 114,
            column: 2
          },
          end: {
            line: 116,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 114,
            column: 2
          },
          end: {
            line: 116,
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
        line: 114
      },
      "7": {
        loc: {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 125,
            column: 28
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 122,
            column: 12
          },
          end: {
            line: 122,
            column: 31
          }
        }, {
          start: {
            line: 123,
            column: 12
          },
          end: {
            line: 125,
            column: 28
          }
        }],
        line: 121
      },
      "8": {
        loc: {
          start: {
            line: 123,
            column: 12
          },
          end: {
            line: 125,
            column: 28
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 124,
            column: 14
          },
          end: {
            line: 124,
            column: 32
          }
        }, {
          start: {
            line: 125,
            column: 14
          },
          end: {
            line: 125,
            column: 28
          }
        }],
        line: 123
      },
      "9": {
        loc: {
          start: {
            line: 134,
            column: 10
          },
          end: {
            line: 134,
            column: 97
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 134,
            column: 75
          },
          end: {
            line: 134,
            column: 92
          }
        }, {
          start: {
            line: 134,
            column: 95
          },
          end: {
            line: 134,
            column: 97
          }
        }],
        line: 134
      },
      "10": {
        loc: {
          start: {
            line: 138,
            column: 11
          },
          end: {
            line: 153,
            column: 11
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 139,
            column: 12
          },
          end: {
            line: 139,
            column: 92
          }
        }, {
          start: {
            line: 141,
            column: 12
          },
          end: {
            line: 152,
            column: 15
          }
        }],
        line: 138
      },
      "11": {
        loc: {
          start: {
            line: 147,
            column: 20
          },
          end: {
            line: 147,
            column: 95
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 147,
            column: 52
          },
          end: {
            line: 147,
            column: 83
          }
        }, {
          start: {
            line: 147,
            column: 86
          },
          end: {
            line: 147,
            column: 95
          }
        }],
        line: 147
      },
      "12": {
        loc: {
          start: {
            line: 201,
            column: 10
          },
          end: {
            line: 225,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 201,
            column: 10
          },
          end: {
            line: 225,
            column: 11
          }
        }, {
          start: {
            line: 210,
            column: 17
          },
          end: {
            line: 225,
            column: 11
          }
        }],
        line: 201
      },
      "13": {
        loc: {
          start: {
            line: 203,
            column: 29
          },
          end: {
            line: 203,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 203,
            column: 29
          },
          end: {
            line: 203,
            column: 54
          }
        }, {
          start: {
            line: 203,
            column: 58
          },
          end: {
            line: 203,
            column: 60
          }
        }],
        line: 203
      },
      "14": {
        loc: {
          start: {
            line: 204,
            column: 47
          },
          end: {
            line: 204,
            column: 94
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 204,
            column: 47
          },
          end: {
            line: 204,
            column: 88
          }
        }, {
          start: {
            line: 204,
            column: 92
          },
          end: {
            line: 204,
            column: 94
          }
        }],
        line: 204
      },
      "15": {
        loc: {
          start: {
            line: 215,
            column: 28
          },
          end: {
            line: 215,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 215,
            column: 28
          },
          end: {
            line: 215,
            column: 53
          }
        }, {
          start: {
            line: 215,
            column: 57
          },
          end: {
            line: 215,
            column: 59
          }
        }],
        line: 215
      },
      "16": {
        loc: {
          start: {
            line: 216,
            column: 31
          },
          end: {
            line: 216,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 216,
            column: 31
          },
          end: {
            line: 216,
            column: 50
          }
        }, {
          start: {
            line: 216,
            column: 54
          },
          end: {
            line: 216,
            column: 56
          }
        }],
        line: 216
      },
      "17": {
        loc: {
          start: {
            line: 218,
            column: 31
          },
          end: {
            line: 218,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 218,
            column: 31
          },
          end: {
            line: 218,
            column: 69
          }
        }, {
          start: {
            line: 218,
            column: 73
          },
          end: {
            line: 218,
            column: 75
          }
        }],
        line: 218
      },
      "18": {
        loc: {
          start: {
            line: 231,
            column: 33
          },
          end: {
            line: 231,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 231,
            column: 44
          },
          end: {
            line: 231,
            column: 46
          }
        }],
        line: 231
      },
      "19": {
        loc: {
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 234,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 234,
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
        line: 232
      },
      "20": {
        loc: {
          start: {
            line: 238,
            column: 8
          },
          end: {
            line: 267,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 238,
            column: 8
          },
          end: {
            line: 267,
            column: 9
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
        line: 238
      },
      "21": {
        loc: {
          start: {
            line: 253,
            column: 10
          },
          end: {
            line: 259,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 253,
            column: 10
          },
          end: {
            line: 259,
            column: 11
          }
        }, {
          start: {
            line: 256,
            column: 17
          },
          end: {
            line: 259,
            column: 11
          }
        }],
        line: 253
      },
      "22": {
        loc: {
          start: {
            line: 256,
            column: 17
          },
          end: {
            line: 259,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 256,
            column: 17
          },
          end: {
            line: 259,
            column: 11
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
        line: 256
      },
      "23": {
        loc: {
          start: {
            line: 296,
            column: 8
          },
          end: {
            line: 300,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 296,
            column: 8
          },
          end: {
            line: 300,
            column: 9
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
        line: 296
      },
      "24": {
        loc: {
          start: {
            line: 307,
            column: 36
          },
          end: {
            line: 307,
            column: 45
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 307,
            column: 43
          },
          end: {
            line: 307,
            column: 45
          }
        }],
        line: 307
      },
      "25": {
        loc: {
          start: {
            line: 307,
            column: 47
          },
          end: {
            line: 307,
            column: 58
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 307,
            column: 56
          },
          end: {
            line: 307,
            column: 58
          }
        }],
        line: 307
      },
      "26": {
        loc: {
          start: {
            line: 307,
            column: 60
          },
          end: {
            line: 307,
            column: 75
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 307,
            column: 71
          },
          end: {
            line: 307,
            column: 75
          }
        }],
        line: 307
      },
      "27": {
        loc: {
          start: {
            line: 307,
            column: 77
          },
          end: {
            line: 307,
            column: 87
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 307,
            column: 85
          },
          end: {
            line: 307,
            column: 87
          }
        }],
        line: 307
      },
      "28": {
        loc: {
          start: {
            line: 337,
            column: 6
          },
          end: {
            line: 342,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 337,
            column: 6
          },
          end: {
            line: 342,
            column: 7
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
        line: 337
      },
      "29": {
        loc: {
          start: {
            line: 358,
            column: 4
          },
          end: {
            line: 360,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 358,
            column: 4
          },
          end: {
            line: 360,
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
        line: 358
      },
      "30": {
        loc: {
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 380,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 362,
            column: 4
          },
          end: {
            line: 380,
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
        line: 362
      },
      "31": {
        loc: {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 375,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 375,
            column: 7
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
        line: 371
      },
      "32": {
        loc: {
          start: {
            line: 377,
            column: 6
          },
          end: {
            line: 379,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 377,
            column: 6
          },
          end: {
            line: 379,
            column: 7
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
        line: 377
      },
      "33": {
        loc: {
          start: {
            line: 411,
            column: 4
          },
          end: {
            line: 413,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 411,
            column: 4
          },
          end: {
            line: 413,
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
        line: 411
      },
      "34": {
        loc: {
          start: {
            line: 421,
            column: 4
          },
          end: {
            line: 457,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 421,
            column: 4
          },
          end: {
            line: 457,
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
        line: 421
      },
      "35": {
        loc: {
          start: {
            line: 422,
            column: 6
          },
          end: {
            line: 430,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 422,
            column: 6
          },
          end: {
            line: 430,
            column: 7
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
        line: 422
      },
      "36": {
        loc: {
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 438,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 433,
            column: 6
          },
          end: {
            line: 438,
            column: 7
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
        line: 433
      },
      "37": {
        loc: {
          start: {
            line: 433,
            column: 10
          },
          end: {
            line: 433,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 433,
            column: 10
          },
          end: {
            line: 433,
            column: 27
          }
        }, {
          start: {
            line: 433,
            column: 31
          },
          end: {
            line: 433,
            column: 46
          }
        }],
        line: 433
      },
      "38": {
        loc: {
          start: {
            line: 442,
            column: 25
          },
          end: {
            line: 442,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 442,
            column: 25
          },
          end: {
            line: 442,
            column: 48
          }
        }, {
          start: {
            line: 442,
            column: 52
          },
          end: {
            line: 442,
            column: 54
          }
        }],
        line: 442
      },
      "39": {
        loc: {
          start: {
            line: 444,
            column: 10
          },
          end: {
            line: 447,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 444,
            column: 10
          },
          end: {
            line: 447,
            column: 11
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
        line: 444
      },
      "40": {
        loc: {
          start: {
            line: 450,
            column: 10
          },
          end: {
            line: 452,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 450,
            column: 10
          },
          end: {
            line: 452,
            column: 11
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
        line: 450
      },
      "41": {
        loc: {
          start: {
            line: 460,
            column: 20
          },
          end: {
            line: 460,
            column: 31
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 460,
            column: 29
          },
          end: {
            line: 460,
            column: 31
          }
        }],
        line: 460
      },
      "42": {
        loc: {
          start: {
            line: 465,
            column: 8
          },
          end: {
            line: 465,
            column: 71
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 465,
            column: 8
          },
          end: {
            line: 465,
            column: 71
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
        line: 465
      },
      "43": {
        loc: {
          start: {
            line: 478,
            column: 4
          },
          end: {
            line: 483,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 478,
            column: 4
          },
          end: {
            line: 483,
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
        line: 478
      },
      "44": {
        loc: {
          start: {
            line: 478,
            column: 8
          },
          end: {
            line: 478,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 478,
            column: 8
          },
          end: {
            line: 478,
            column: 18
          }
        }, {
          start: {
            line: 478,
            column: 22
          },
          end: {
            line: 478,
            column: 48
          }
        }],
        line: 478
      },
      "45": {
        loc: {
          start: {
            line: 495,
            column: 8
          },
          end: {
            line: 510,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 495,
            column: 8
          },
          end: {
            line: 510,
            column: 9
          }
        }, {
          start: {
            line: 504,
            column: 15
          },
          end: {
            line: 510,
            column: 9
          }
        }],
        line: 495
      },
      "46": {
        loc: {
          start: {
            line: 497,
            column: 10
          },
          end: {
            line: 503,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 497,
            column: 10
          },
          end: {
            line: 503,
            column: 11
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
        line: 497
      },
      "47": {
        loc: {
          start: {
            line: 517,
            column: 4
          },
          end: {
            line: 532,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 517,
            column: 4
          },
          end: {
            line: 532,
            column: 5
          }
        }, {
          start: {
            line: 520,
            column: 11
          },
          end: {
            line: 532,
            column: 5
          }
        }],
        line: 517
      },
      "48": {
        loc: {
          start: {
            line: 517,
            column: 8
          },
          end: {
            line: 517,
            column: 60
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 517,
            column: 8
          },
          end: {
            line: 517,
            column: 24
          }
        }, {
          start: {
            line: 517,
            column: 28
          },
          end: {
            line: 517,
            column: 60
          }
        }],
        line: 517
      },
      "49": {
        loc: {
          start: {
            line: 551,
            column: 4
          },
          end: {
            line: 573,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 551,
            column: 4
          },
          end: {
            line: 573,
            column: 5
          }
        }, {
          start: {
            line: 553,
            column: 11
          },
          end: {
            line: 573,
            column: 5
          }
        }],
        line: 551
      },
      "50": {
        loc: {
          start: {
            line: 551,
            column: 8
          },
          end: {
            line: 551,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 551,
            column: 8
          },
          end: {
            line: 551,
            column: 27
          }
        }, {
          start: {
            line: 551,
            column: 31
          },
          end: {
            line: 551,
            column: 43
          }
        }, {
          start: {
            line: 551,
            column: 47
          },
          end: {
            line: 551,
            column: 73
          }
        }],
        line: 551
      },
      "51": {
        loc: {
          start: {
            line: 561,
            column: 10
          },
          end: {
            line: 569,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 561,
            column: 10
          },
          end: {
            line: 569,
            column: 11
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
        line: 561
      },
      "52": {
        loc: {
          start: {
            line: 592,
            column: 8
          },
          end: {
            line: 656,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 592,
            column: 8
          },
          end: {
            line: 656,
            column: 9
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
        line: 592
      },
      "53": {
        loc: {
          start: {
            line: 593,
            column: 10
          },
          end: {
            line: 602,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 593,
            column: 10
          },
          end: {
            line: 602,
            column: 11
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
        line: 593
      },
      "54": {
        loc: {
          start: {
            line: 594,
            column: 12
          },
          end: {
            line: 596,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 594,
            column: 12
          },
          end: {
            line: 594,
            column: 31
          }
        }, {
          start: {
            line: 595,
            column: 12
          },
          end: {
            line: 595,
            column: 40
          }
        }, {
          start: {
            line: 596,
            column: 12
          },
          end: {
            line: 596,
            column: 42
          }
        }],
        line: 594
      },
      "55": {
        loc: {
          start: {
            line: 632,
            column: 10
          },
          end: {
            line: 643,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 632,
            column: 10
          },
          end: {
            line: 643,
            column: 11
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
        line: 632
      },
      "56": {
        loc: {
          start: {
            line: 644,
            column: 10
          },
          end: {
            line: 649,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 644,
            column: 10
          },
          end: {
            line: 649,
            column: 11
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
        line: 644
      },
      "57": {
        loc: {
          start: {
            line: 650,
            column: 10
          },
          end: {
            line: 655,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 650,
            column: 10
          },
          end: {
            line: 655,
            column: 11
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
        line: 650
      },
      "58": {
        loc: {
          start: {
            line: 665,
            column: 22
          },
          end: {
            line: 665,
            column: 91
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 665,
            column: 50
          },
          end: {
            line: 665,
            column: 86
          }
        }, {
          start: {
            line: 665,
            column: 89
          },
          end: {
            line: 665,
            column: 91
          }
        }],
        line: 665
      },
      "59": {
        loc: {
          start: {
            line: 681,
            column: 37
          },
          end: {
            line: 681,
            column: 86
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 681,
            column: 37
          },
          end: {
            line: 681,
            column: 55
          }
        }, {
          start: {
            line: 681,
            column: 59
          },
          end: {
            line: 681,
            column: 86
          }
        }],
        line: 681
      },
      "60": {
        loc: {
          start: {
            line: 682,
            column: 33
          },
          end: {
            line: 682,
            column: 82
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 682,
            column: 33
          },
          end: {
            line: 682,
            column: 51
          }
        }, {
          start: {
            line: 682,
            column: 55
          },
          end: {
            line: 682,
            column: 82
          }
        }],
        line: 682
      },
      "61": {
        loc: {
          start: {
            line: 683,
            column: 40
          },
          end: {
            line: 683,
            column: 92
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 683,
            column: 40
          },
          end: {
            line: 683,
            column: 61
          }
        }, {
          start: {
            line: 683,
            column: 65
          },
          end: {
            line: 683,
            column: 92
          }
        }],
        line: 683
      },
      "62": {
        loc: {
          start: {
            line: 684,
            column: 36
          },
          end: {
            line: 684,
            column: 88
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 684,
            column: 36
          },
          end: {
            line: 684,
            column: 57
          }
        }, {
          start: {
            line: 684,
            column: 61
          },
          end: {
            line: 684,
            column: 88
          }
        }],
        line: 684
      },
      "63": {
        loc: {
          start: {
            line: 685,
            column: 37
          },
          end: {
            line: 685,
            column: 89
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 685,
            column: 37
          },
          end: {
            line: 685,
            column: 58
          }
        }, {
          start: {
            line: 685,
            column: 62
          },
          end: {
            line: 685,
            column: 89
          }
        }],
        line: 685
      },
      "64": {
        loc: {
          start: {
            line: 686,
            column: 33
          },
          end: {
            line: 686,
            column: 85
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 686,
            column: 33
          },
          end: {
            line: 686,
            column: 54
          }
        }, {
          start: {
            line: 686,
            column: 58
          },
          end: {
            line: 686,
            column: 85
          }
        }],
        line: 686
      },
      "65": {
        loc: {
          start: {
            line: 687,
            column: 38
          },
          end: {
            line: 687,
            column: 88
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 687,
            column: 38
          },
          end: {
            line: 687,
            column: 57
          }
        }, {
          start: {
            line: 687,
            column: 61
          },
          end: {
            line: 687,
            column: 88
          }
        }],
        line: 687
      },
      "66": {
        loc: {
          start: {
            line: 688,
            column: 34
          },
          end: {
            line: 688,
            column: 84
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 688,
            column: 34
          },
          end: {
            line: 688,
            column: 53
          }
        }, {
          start: {
            line: 688,
            column: 57
          },
          end: {
            line: 688,
            column: 84
          }
        }],
        line: 688
      },
      "67": {
        loc: {
          start: {
            line: 701,
            column: 13
          },
          end: {
            line: 709,
            column: 20
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 702,
            column: 14
          },
          end: {
            line: 702,
            column: 57
          }
        }, {
          start: {
            line: 703,
            column: 16
          },
          end: {
            line: 709,
            column: 20
          }
        }],
        line: 701
      },
      "68": {
        loc: {
          start: {
            line: 703,
            column: 16
          },
          end: {
            line: 709,
            column: 20
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 704,
            column: 14
          },
          end: {
            line: 704,
            column: 63
          }
        }, {
          start: {
            line: 705,
            column: 16
          },
          end: {
            line: 709,
            column: 20
          }
        }],
        line: 703
      },
      "69": {
        loc: {
          start: {
            line: 705,
            column: 16
          },
          end: {
            line: 709,
            column: 20
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 706,
            column: 14
          },
          end: {
            line: 706,
            column: 59
          }
        }, {
          start: {
            line: 707,
            column: 16
          },
          end: {
            line: 709,
            column: 20
          }
        }],
        line: 705
      },
      "70": {
        loc: {
          start: {
            line: 707,
            column: 16
          },
          end: {
            line: 709,
            column: 20
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 708,
            column: 14
          },
          end: {
            line: 708,
            column: 56
          }
        }, {
          start: {
            line: 709,
            column: 16
          },
          end: {
            line: 709,
            column: 20
          }
        }],
        line: 707
      },
      "71": {
        loc: {
          start: {
            line: 718,
            column: 15
          },
          end: {
            line: 718,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 718,
            column: 15
          },
          end: {
            line: 718,
            column: 21
          }
        }, {
          start: {
            line: 718,
            column: 25
          },
          end: {
            line: 718,
            column: 38
          }
        }],
        line: 718
      },
      "72": {
        loc: {
          start: {
            line: 728,
            column: 32
          },
          end: {
            line: 728,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 728,
            column: 62
          },
          end: {
            line: 728,
            column: 71
          }
        }, {
          start: {
            line: 728,
            column: 74
          },
          end: {
            line: 728,
            column: 79
          }
        }],
        line: 728
      },
      "73": {
        loc: {
          start: {
            line: 733,
            column: 19
          },
          end: {
            line: 757,
            column: 19
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 733,
            column: 19
          },
          end: {
            line: 733,
            column: 47
          }
        }, {
          start: {
            line: 734,
            column: 20
          },
          end: {
            line: 756,
            column: 26
          }
        }],
        line: 733
      },
      "74": {
        loc: {
          start: {
            line: 735,
            column: 33
          },
          end: {
            line: 735,
            column: 93
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 735,
            column: 53
          },
          end: {
            line: 735,
            column: 76
          }
        }, {
          start: {
            line: 735,
            column: 79
          },
          end: {
            line: 735,
            column: 93
          }
        }],
        line: 735
      },
      "75": {
        loc: {
          start: {
            line: 744,
            column: 45
          },
          end: {
            line: 744,
            column: 56
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 744,
            column: 52
          },
          end: {
            line: 744,
            column: 56
          }
        }],
        line: 744
      },
      "76": {
        loc: {
          start: {
            line: 751,
            column: 45
          },
          end: {
            line: 751,
            column: 56
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 751,
            column: 52
          },
          end: {
            line: 751,
            column: 56
          }
        }],
        line: 751
      },
      "77": {
        loc: {
          start: {
            line: 780,
            column: 25
          },
          end: {
            line: 793,
            column: 25
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 780,
            column: 25
          },
          end: {
            line: 780,
            column: 53
          }
        }, {
          start: {
            line: 781,
            column: 26
          },
          end: {
            line: 792,
            column: 28
          }
        }],
        line: 780
      },
      "78": {
        loc: {
          start: {
            line: 797,
            column: 37
          },
          end: {
            line: 797,
            column: 86
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 797,
            column: 37
          },
          end: {
            line: 797,
            column: 77
          }
        }, {
          start: {
            line: 797,
            column: 81
          },
          end: {
            line: 797,
            column: 86
          }
        }],
        line: 797
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0],
      "4": [0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0],
      "25": [0],
      "26": [0],
      "27": [0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0, 0],
      "55": [0, 0],
      "56": [0, 0],
      "57": [0, 0],
      "58": [0, 0],
      "59": [0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0],
      "66": [0, 0],
      "67": [0, 0],
      "68": [0, 0],
      "69": [0, 0],
      "70": [0, 0],
      "71": [0, 0],
      "72": [0, 0],
      "73": [0, 0],
      "74": [0, 0],
      "75": [0],
      "76": [0],
      "77": [0, 0],
      "78": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c8892293b638b14c108438556d597ea140848a8f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23ks6arrqf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_23ks6arrqf();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import 'billboard.js/dist/theme/insight.min.css';

 // import 'billboard.js/dist/billboard. min.css';

 // codemirror + js-yaml imports when added to a page was preventing to navigating to that page using nextjs
// link clicks, hence attempting to add them here






















































cov_23ks6arrqf().s[0]++;

if (false) {} else {
  cov_23ks6arrqf().b[0][1]++;
}

async function fetchContexts(number = (cov_23ks6arrqf().b[3][0]++, 10), search = (cov_23ks6arrqf().b[4][0]++, '')) {
  cov_23ks6arrqf().f[0]++;
  cov_23ks6arrqf().s[10]++;
  return await (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__/* .promisifiedDataFetch */ .y)(`/api/system/kubernetes/contexts?pagesize=${number}&search=${encodeURIComponent(search)}`);
}

const meshplayExtensionRoute = (cov_23ks6arrqf().s[11]++, '/extension/meshmap');

function isMeshplayUiRestrictedAndThePageIsNotPlayground(capabilitiesRegistry) {
  cov_23ks6arrqf().f[1]++;
  cov_23ks6arrqf().s[12]++;
  return (cov_23ks6arrqf().b[5][0]++, !window.location.pathname.startsWith(meshplayExtensionRoute)) && (cov_23ks6arrqf().b[5][1]++, capabilitiesRegistry?.restrictedAccess?.isMeshplayUiRestricted);
}

function isExtensionOpen() {
  cov_23ks6arrqf().f[2]++;
  cov_23ks6arrqf().s[13]++;
  return window.location.pathname.startsWith(meshplayExtensionRoute);
}
cov_23ks6arrqf().s[14]++;

const Footer = ({
  classes,
  capabilitiesRegistry,
  handleL5CommunityClick
}) => {
  cov_23ks6arrqf().f[3]++;
  const theme = (cov_23ks6arrqf().s[15]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)());
  const extension = (cov_23ks6arrqf().s[16]++, (0,react_redux__WEBPACK_IMPORTED_MODULE_16__.useSelector)(state => {
    cov_23ks6arrqf().f[4]++;
    cov_23ks6arrqf().s[17]++;
    return state.get('extensionType');
  }));
  cov_23ks6arrqf().s[18]++;

  if (extension == 'navigator') {
    cov_23ks6arrqf().b[6][0]++;
    cov_23ks6arrqf().s[19]++;
    return null;
  } else {
    cov_23ks6arrqf().b[6][1]++;
  }

  cov_23ks6arrqf().s[20]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx("footer", {
    className: capabilitiesRegistry?.restrictedAccess?.isMeshplayUiRestricted ? (cov_23ks6arrqf().b[7][0]++, classes.playgFooter) : (cov_23ks6arrqf().b[7][1]++, theme.palette.type === 'dark' ? (cov_23ks6arrqf().b[8][0]++, classes.footerDark) : (cov_23ks6arrqf().b[8][1]++, classes.footer)),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      variant: "body2",
      align: "center",
      color: "textSecondary",
      component: "p",
      style: capabilitiesRegistry?.restrictedAccess?.isMeshplayUiRestricted ? (cov_23ks6arrqf().b[9][0]++, {
        color: '#000'
      }) : (cov_23ks6arrqf().b[9][1]++, {}),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx("span", {
        onClick: handleL5CommunityClick,
        className: classes.footerText,
        children: capabilitiesRegistry?.restrictedAccess?.isMeshplayUiRestricted ? (cov_23ks6arrqf().b[10][0]++, 'ACCESS LIMITED IN MESHPLAY PLAYGROUND. DEPLOY MESHPLAY TO ACCESS ALL FEATURES.') : (cov_23ks6arrqf().b[10][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.Fragment, {
          children: [' ', "Built with", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default()), {
            style: {
              color: theme.palette.type === 'dark' ? (cov_23ks6arrqf().b[11][0]++, theme.palette.secondary.focused) : (cov_23ks6arrqf().b[11][1]++, '#00b39f')
            },
            className: classes.footerIcon
          }), ' ', "by the KhulnaSoft Community"]
        }))
      })
    })
  });
};

class MeshplayApp extends next_app__WEBPACK_IMPORTED_MODULE_11__["default"] {
  constructor() {
    cov_23ks6arrqf().f[5]++;
    cov_23ks6arrqf().s[21]++;
    super();

    _defineProperty(this, "loadPromGrafanaConnection", (cov_23ks6arrqf().s[27]++, () => {
      cov_23ks6arrqf().f[6]++;
      const {
        store
      } = (cov_23ks6arrqf().s[28]++, this.props);
      cov_23ks6arrqf().s[29]++;
      (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(`/api/integrations/connections?page=0&pagesize=2&status=${encodeURIComponent(JSON.stringify([_utils_Enum__WEBPACK_IMPORTED_MODULE_41__/* .CONNECTION_STATES.CONNECTED */ .OF.CONNECTED]))}&kind=${encodeURIComponent(JSON.stringify([_utils_Enum__WEBPACK_IMPORTED_MODULE_41__/* .CONNECTION_KINDS.PROMETHEUS */ .NJ.PROMETHEUS, _utils_Enum__WEBPACK_IMPORTED_MODULE_41__/* .CONNECTION_KINDS.GRAFANA */ .NJ.GRAFANA]))}`, {
        credentials: 'include',
        method: 'GET'
      }, res => {
        cov_23ks6arrqf().f[7]++;
        cov_23ks6arrqf().s[30]++;
        res?.connections?.forEach(connection => {
          cov_23ks6arrqf().f[8]++;
          cov_23ks6arrqf().s[31]++;

          if (connection.kind == _utils_Enum__WEBPACK_IMPORTED_MODULE_41__/* .CONNECTION_KINDS.PROMETHEUS */ .NJ.PROMETHEUS) {
            cov_23ks6arrqf().b[12][0]++;
            const promCfg = (cov_23ks6arrqf().s[32]++, {
              prometheusURL: (cov_23ks6arrqf().b[13][0]++, connection?.metadata?.url) || (cov_23ks6arrqf().b[13][1]++, ''),
              selectedPrometheusBoardsConfigs: (cov_23ks6arrqf().b[14][0]++, connection?.metadata['prometheus_boards']) || (cov_23ks6arrqf().b[14][1]++, []),
              connectionID: connection?.id,
              connectionName: connection?.name
            });
            cov_23ks6arrqf().s[33]++;
            store.dispatch({
              type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.UPDATE_PROMETHEUS_CONFIG */ .Hp.UPDATE_PROMETHEUS_CONFIG,
              prometheus: promCfg
            });
          } else {
            cov_23ks6arrqf().b[12][1]++;
            const credentialID = (cov_23ks6arrqf().s[34]++, connection?.credential_id);
            cov_23ks6arrqf().s[35]++;
            (0,_api_credentials__WEBPACK_IMPORTED_MODULE_43__/* .getCredentialByID */ .O)(credentialID).then(res => {
              cov_23ks6arrqf().f[9]++;
              const grafanaCfg = (cov_23ks6arrqf().s[36]++, {
                grafanaURL: (cov_23ks6arrqf().b[15][0]++, connection?.metadata?.url) || (cov_23ks6arrqf().b[15][1]++, ''),
                grafanaAPIKey: (cov_23ks6arrqf().b[16][0]++, res?.secret?.secret) || (cov_23ks6arrqf().b[16][1]++, ''),
                grafanaBoardSearch: '',
                grafanaBoards: (cov_23ks6arrqf().b[17][0]++, connection?.metadata['grafana_boards']) || (cov_23ks6arrqf().b[17][1]++, []),
                selectedBoardsConfigs: [],
                connectionID: connection?.id,
                connectionName: connection?.name
              });
              cov_23ks6arrqf().s[37]++;
              store.dispatch({
                type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.UPDATE_GRAFANA_CONFIG */ .Hp.UPDATE_GRAFANA_CONFIG,
                grafana: grafanaCfg
              });
            });
          }
        });
      });
    }));

    _defineProperty(this, "fullScreenChanged", (cov_23ks6arrqf().s[59]++, () => {
      cov_23ks6arrqf().f[12]++;
      cov_23ks6arrqf().s[60]++;
      this.setState(state => {
        cov_23ks6arrqf().f[13]++;
        cov_23ks6arrqf().s[61]++;
        return {
          isFullScreenMode: !state.isFullScreenMode
        };
      });
    }));

    _defineProperty(this, "loadMeshModelComponent", (cov_23ks6arrqf().s[80]++, () => {
      cov_23ks6arrqf().f[20]++;
      const connectionDef = (cov_23ks6arrqf().s[81]++, {});
      cov_23ks6arrqf().s[82]++;
      _utils_Enum__WEBPACK_IMPORTED_MODULE_41__/* .CONNECTION_KINDS_DEF.map */ .fJ.map(async kind => {
        cov_23ks6arrqf().f[21]++;
        const res = (cov_23ks6arrqf().s[83]++, await (0,_api_meshmodel__WEBPACK_IMPORTED_MODULE_40__/* .getMeshModelComponentByName */ .al)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_35__/* .formatToTitleCase */ .Fj)(kind).concat('Connection')));
        cov_23ks6arrqf().s[84]++;

        if (res?.components) {
          cov_23ks6arrqf().b[28][0]++;
          cov_23ks6arrqf().s[85]++;
          connectionDef[_utils_Enum__WEBPACK_IMPORTED_MODULE_41__/* .CONNECTION_KINDS */ .NJ[kind]] = {
            transitions: res?.components[0].metadata.transitions,
            icon: res?.components[0].styles.svgColor
          };
        } else {
          cov_23ks6arrqf().b[28][1]++;
        }

        cov_23ks6arrqf().s[86]++;
        this.setState({
          connectionMetadata: connectionDef
        });
      });
      cov_23ks6arrqf().s[87]++;
      this.props.setConnectionMetadata({
        connectionMetadataState: connectionDef
      });
    }));

    _defineProperty(this, "initSubscriptions", (cov_23ks6arrqf().s[100]++, contexts => {
      cov_23ks6arrqf().f[24]++;
      const meshplayControllerSubscription = (cov_23ks6arrqf().s[101]++, new _components_subscription_subscriptionhandler__WEBPACK_IMPORTED_MODULE_22__/* .GQLSubscription */ .S({
        type: _components_subscription_helpers__WEBPACK_IMPORTED_MODULE_21__/* .MESHPLAY_CONTROLLER_SUBSCRIPTION */ ._7,
        connectionIDs: (0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_26__/* .getConnectionIDsFromContextIds */ .Or)(contexts, this.props.k8sConfig),
        callbackFunction: data => {
          cov_23ks6arrqf().f[25]++;
          cov_23ks6arrqf().s[102]++;
          this.props.store.dispatch({
            type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.SET_CONTROLLER_STATE */ .Hp.SET_CONTROLLER_STATE,
            controllerState: data
          });
        }
      }));
      cov_23ks6arrqf().s[103]++;
      this.setState({
        meshplayControllerSubscription
      });
    }));

    _defineProperty(this, "handleDrawerToggle", (cov_23ks6arrqf().s[104]++, () => {
      cov_23ks6arrqf().f[26]++;
      cov_23ks6arrqf().s[105]++;
      this.setState(state => {
        cov_23ks6arrqf().f[27]++;
        cov_23ks6arrqf().s[106]++;
        return {
          mobileOpen: !state.mobileOpen
        };
      });
    }));

    _defineProperty(this, "handleL5CommunityClick", (cov_23ks6arrqf().s[107]++, () => {
      cov_23ks6arrqf().f[28]++;
      cov_23ks6arrqf().s[108]++;
      this.setState(state => {
        cov_23ks6arrqf().f[29]++;
        cov_23ks6arrqf().s[109]++;
        return {
          isOpen: !state.isOpen
        };
      });
    }));

    _defineProperty(this, "activeContextChangeCallback", (cov_23ks6arrqf().s[110]++, activeK8sContexts => {
      cov_23ks6arrqf().f[30]++;
      cov_23ks6arrqf().s[111]++;

      if (activeK8sContexts.includes('all')) {
        cov_23ks6arrqf().b[33][0]++;
        cov_23ks6arrqf().s[112]++;
        activeK8sContexts = ['all'];
      } else {
        cov_23ks6arrqf().b[33][1]++;
      }

      cov_23ks6arrqf().s[113]++;
      this.props.store.dispatch({
        type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.SET_K8S_CONTEXT */ .Hp.SET_K8S_CONTEXT,
        selectedK8sContexts: activeK8sContexts
      });
    }));

    _defineProperty(this, "setActiveContexts", (cov_23ks6arrqf().s[114]++, id => {
      cov_23ks6arrqf().f[31]++;
      cov_23ks6arrqf().s[115]++;

      if (this.state.k8sContexts?.contexts) {
        cov_23ks6arrqf().b[34][0]++;
        cov_23ks6arrqf().s[116]++;

        if (id === 'all') {
          cov_23ks6arrqf().b[35][0]++;
          let activeContexts = (cov_23ks6arrqf().s[117]++, []);
          cov_23ks6arrqf().s[118]++;
          this.state.k8sContexts.contexts.forEach(ctx => {
            cov_23ks6arrqf().f[32]++;
            cov_23ks6arrqf().s[119]++;
            return activeContexts.push(ctx.id);
          });
          cov_23ks6arrqf().s[120]++;
          activeContexts.push('all');
          cov_23ks6arrqf().s[121]++;
          this.setState({
            activeK8sContexts: activeContexts
          }, () => {
            cov_23ks6arrqf().f[33]++;
            cov_23ks6arrqf().s[122]++;
            return this.activeContextChangeCallback(this.state.activeK8sContexts);
          });
          cov_23ks6arrqf().s[123]++;
          return;
        } else {
          cov_23ks6arrqf().b[35][1]++;
        } // if id is an empty array, clear all active contexts


        cov_23ks6arrqf().s[124]++;

        if ((cov_23ks6arrqf().b[37][0]++, Array.isArray(id)) && (cov_23ks6arrqf().b[37][1]++, id.length === 0)) {
          cov_23ks6arrqf().b[36][0]++;
          cov_23ks6arrqf().s[125]++;
          this.setState({
            activeK8sContexts: []
          }, () => {
            cov_23ks6arrqf().f[34]++;
            cov_23ks6arrqf().s[126]++;
            return this.activeContextChangeCallback(this.state.activeK8sContexts);
          });
          cov_23ks6arrqf().s[127]++;
          return;
        } else {
          cov_23ks6arrqf().b[36][1]++;
        }

        cov_23ks6arrqf().s[128]++;
        this.setState(state => {
          cov_23ks6arrqf().f[35]++;
          let ids = (cov_23ks6arrqf().s[129]++, [...((cov_23ks6arrqf().b[38][0]++, state.activeK8sContexts) || (cov_23ks6arrqf().b[38][1]++, []))]); //pop event

          cov_23ks6arrqf().s[130]++;

          if (ids.includes(id)) {
            cov_23ks6arrqf().b[39][0]++;
            cov_23ks6arrqf().s[131]++;
            ids = ids.filter(id => {
              cov_23ks6arrqf().f[36]++;
              cov_23ks6arrqf().s[132]++;
              return id !== 'all';
            });
            cov_23ks6arrqf().s[133]++;
            return {
              activeK8sContexts: ids.filter(cid => {
                cov_23ks6arrqf().f[37]++;
                cov_23ks6arrqf().s[134]++;
                return cid !== id;
              })
            };
          } else {
            cov_23ks6arrqf().b[39][1]++;
          } //push event


          cov_23ks6arrqf().s[135]++;

          if (ids.length === this.state.k8sContexts.contexts.length - 1) {
            cov_23ks6arrqf().b[40][0]++;
            cov_23ks6arrqf().s[136]++;
            ids.push('all');
          } else {
            cov_23ks6arrqf().b[40][1]++;
          }

          cov_23ks6arrqf().s[137]++;
          return {
            activeK8sContexts: [...ids, id]
          };
        }, () => {
          cov_23ks6arrqf().f[38]++;
          cov_23ks6arrqf().s[138]++;
          return this.activeContextChangeCallback(this.state.activeK8sContexts);
        });
      } else {
        cov_23ks6arrqf().b[34][1]++;
      }
    }));

    _defineProperty(this, "searchContexts", (cov_23ks6arrqf().s[139]++, (search = (cov_23ks6arrqf().b[41][0]++, '')) => {
      cov_23ks6arrqf().f[39]++;
      cov_23ks6arrqf().s[140]++;
      fetchContexts(10, search).then(ctx => {
        cov_23ks6arrqf().f[40]++;
        cov_23ks6arrqf().s[141]++;
        this.setState({
          k8sContexts: ctx
        });
        const active = (cov_23ks6arrqf().s[142]++, ctx?.contexts?.find(c => {
          cov_23ks6arrqf().f[41]++;
          cov_23ks6arrqf().s[143]++;
          return c.is_current_context === true;
        }));
        cov_23ks6arrqf().s[144]++;

        if (active) {
          cov_23ks6arrqf().b[42][0]++;
          cov_23ks6arrqf().s[145]++;
          this.setState({
            activeK8sContexts: [active?.id]
          });
        } else {
          cov_23ks6arrqf().b[42][1]++;
        }
      }).catch(err => {
        cov_23ks6arrqf().f[42]++;
        cov_23ks6arrqf().s[146]++;
        return console.error(err);
      });
    }));

    _defineProperty(this, "updateExtensionType", (cov_23ks6arrqf().s[147]++, type => {
      cov_23ks6arrqf().f[43]++;
      cov_23ks6arrqf().s[148]++;
      this.props.store.dispatch({
        type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.UPDATE_EXTENSION_TYPE */ .Hp.UPDATE_EXTENSION_TYPE,
        extensionType: type
      });
    }));

    _defineProperty(this, "loadOrg", (cov_23ks6arrqf().s[149]++, async () => {
      cov_23ks6arrqf().f[44]++;
      const currentOrg = (cov_23ks6arrqf().s[150]++, sessionStorage.getItem('currentOrg'));
      let reFetchKeys = (cov_23ks6arrqf().s[151]++, false);
      cov_23ks6arrqf().s[152]++;

      if ((cov_23ks6arrqf().b[44][0]++, currentOrg) && (cov_23ks6arrqf().b[44][1]++, currentOrg !== 'undefined')) {
        cov_23ks6arrqf().b[43][0]++;
        let org = (cov_23ks6arrqf().s[153]++, JSON.parse(currentOrg));
        cov_23ks6arrqf().s[154]++;
        await this.loadAbility(org.id, reFetchKeys);
        cov_23ks6arrqf().s[155]++;
        this.setOrganization(org);
        cov_23ks6arrqf().s[156]++;
        await this.loadWorkspace(org.id);
      } else {
        cov_23ks6arrqf().b[43][1]++;
      }

      cov_23ks6arrqf().s[157]++;
      (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)('/api/identity/orgs', {
        method: 'GET',
        credentials: 'include'
      }, async result => {
        cov_23ks6arrqf().f[45]++;
        let organizationToSet;
        const sessionOrg = (cov_23ks6arrqf().s[158]++, JSON.parse(currentOrg));
        cov_23ks6arrqf().s[159]++;

        if (currentOrg) {
          cov_23ks6arrqf().b[45][0]++;
          const indx = (cov_23ks6arrqf().s[160]++, result.organizations.findIndex(org => {
            cov_23ks6arrqf().f[46]++;
            cov_23ks6arrqf().s[161]++;
            return org.id === sessionOrg.id;
          }));
          cov_23ks6arrqf().s[162]++;

          if (indx === -1) {
            cov_23ks6arrqf().b[46][0]++;
            cov_23ks6arrqf().s[163]++;
            organizationToSet = result.organizations[0];
            cov_23ks6arrqf().s[164]++;
            reFetchKeys = true;
            cov_23ks6arrqf().s[165]++;
            await this.loadAbility(organizationToSet.id, reFetchKeys);
            cov_23ks6arrqf().s[166]++;
            await this.loadWorkspace(organizationToSet.id);
            cov_23ks6arrqf().s[167]++;
            this.setOrganization(organizationToSet);
          } else {
            cov_23ks6arrqf().b[46][1]++;
          }
        } else {
          cov_23ks6arrqf().b[45][1]++;
          cov_23ks6arrqf().s[168]++;
          organizationToSet = result.organizations[0];
          cov_23ks6arrqf().s[169]++;
          reFetchKeys = true;
          cov_23ks6arrqf().s[170]++;
          await this.loadWorkspace(organizationToSet.id);
          cov_23ks6arrqf().s[171]++;
          await this.loadAbility(organizationToSet.id, reFetchKeys);
          cov_23ks6arrqf().s[172]++;
          this.setOrganization(organizationToSet);
        }
      }, err => {
        cov_23ks6arrqf().f[47]++;
        cov_23ks6arrqf().s[173]++;
        return console.log('There was an error fetching available orgs:', err);
      });
    }));

    _defineProperty(this, "loadWorkspace", (cov_23ks6arrqf().s[174]++, async orgId => {
      cov_23ks6arrqf().f[48]++;
      const currentWorkspace = (cov_23ks6arrqf().s[175]++, sessionStorage.getItem('currentWorkspace'));
      cov_23ks6arrqf().s[176]++;

      if ((cov_23ks6arrqf().b[48][0]++, currentWorkspace) && (cov_23ks6arrqf().b[48][1]++, currentWorkspace !== 'undefined')) {
        cov_23ks6arrqf().b[47][0]++;
        let workspace = (cov_23ks6arrqf().s[177]++, JSON.parse(currentWorkspace));
        cov_23ks6arrqf().s[178]++;
        this.setWorkspace(workspace);
      } else {
        cov_23ks6arrqf().b[47][1]++;
        cov_23ks6arrqf().s[179]++;
        (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(`/api/workspaces?search=&order=&page=0&pagesize=10&orgID=${orgId}`, {
          method: 'GET',
          credentials: 'include'
        }, async result => {
          cov_23ks6arrqf().f[49]++;
          cov_23ks6arrqf().s[180]++;
          this.setWorkspace(result.workspaces[0]);
        }, err => {
          cov_23ks6arrqf().f[50]++;
          cov_23ks6arrqf().s[181]++;
          return console.log('There was an error fetching workspaces:', err);
        });
      }
    }));

    _defineProperty(this, "setOrganization", (cov_23ks6arrqf().s[182]++, org => {
      cov_23ks6arrqf().f[51]++;
      const {
        store
      } = (cov_23ks6arrqf().s[183]++, this.props);
      cov_23ks6arrqf().s[184]++;
      store.dispatch({
        type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.SET_ORGANIZATION */ .Hp.SET_ORGANIZATION,
        organization: org
      });
    }));

    _defineProperty(this, "setWorkspace", (cov_23ks6arrqf().s[185]++, workspace => {
      cov_23ks6arrqf().f[52]++;
      const {
        store
      } = (cov_23ks6arrqf().s[186]++, this.props);
      cov_23ks6arrqf().s[187]++;
      store.dispatch({
        type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.SET_WORKSPACE */ .Hp.SET_WORKSPACE,
        workspace: workspace
      });
    }));

    _defineProperty(this, "loadAbility", (cov_23ks6arrqf().s[188]++, async (orgID, reFetchKeys) => {
      cov_23ks6arrqf().f[53]++;
      const storedKeys = (cov_23ks6arrqf().s[189]++, sessionStorage.getItem('keys'));
      const {
        store
      } = (cov_23ks6arrqf().s[190]++, this.props);
      cov_23ks6arrqf().s[191]++;

      if ((cov_23ks6arrqf().b[50][0]++, storedKeys !== null) && (cov_23ks6arrqf().b[50][1]++, !reFetchKeys) && (cov_23ks6arrqf().b[50][2]++, storedKeys !== 'undefined')) {
        cov_23ks6arrqf().b[49][0]++;
        cov_23ks6arrqf().s[192]++;
        this.setState({
          keys: JSON.parse(storedKeys)
        }, this.updateAbility);
      } else {
        cov_23ks6arrqf().b[49][1]++;
        cov_23ks6arrqf().s[193]++;
        (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(`/api/identity/orgs/${orgID}/users/keys`, {
          method: 'GET',
          credentials: 'include'
        }, result => {
          cov_23ks6arrqf().f[54]++;
          cov_23ks6arrqf().s[194]++;

          if (result) {
            cov_23ks6arrqf().b[51][0]++;
            cov_23ks6arrqf().s[195]++;
            this.setState({
              keys: result.keys
            }, () => {
              cov_23ks6arrqf().f[55]++;
              cov_23ks6arrqf().s[196]++;
              store.dispatch({
                type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.SET_KEYS */ .Hp.SET_KEYS,
                keys: result.keys
              });
              cov_23ks6arrqf().s[197]++;
              this.updateAbility();
            });
          } else {
            cov_23ks6arrqf().b[51][1]++;
          }
        }, err => {
          cov_23ks6arrqf().f[56]++;
          cov_23ks6arrqf().s[198]++;
          return console.log('There was an error fetching available orgs:', err);
        });
      }
    }));

    _defineProperty(this, "updateAbility", (cov_23ks6arrqf().s[199]++, () => {
      cov_23ks6arrqf().f[57]++;
      cov_23ks6arrqf().s[200]++;
      _utils_can__WEBPACK_IMPORTED_MODULE_42__/* .ability.update */ .M.update(this.state.keys?.map(key => {
        cov_23ks6arrqf().f[58]++;
        cov_23ks6arrqf().s[201]++;
        return {
          action: key.id,
          subject: lodash__WEBPACK_IMPORTED_MODULE_9___default().lowerCase(key.function)
        };
      }));
      cov_23ks6arrqf().s[202]++;
      this.setState({
        abilityUpdated: true
      });
    }));

    _defineProperty(this, "themeSetter", (cov_23ks6arrqf().s[218]++, thememode => {
      cov_23ks6arrqf().f[63]++;
      cov_23ks6arrqf().s[219]++;
      this.setState({
        theme: thememode
      });
    }));

    cov_23ks6arrqf().s[22]++;
    this.pageContext = (0,_components_PageContext__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)();
    cov_23ks6arrqf().s[23]++;
    this.meshsyncEventsSubscriptionRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createRef();
    cov_23ks6arrqf().s[24]++;
    this.eventsSubscriptionRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createRef();
    cov_23ks6arrqf().s[25]++;
    this.fullScreenChanged = this.fullScreenChanged.bind(this);
    cov_23ks6arrqf().s[26]++;
    this.state = {
      mobileOpen: false,
      isDrawerCollapsed: false,
      isFullScreenMode: false,
      k8sContexts: [],
      activeK8sContexts: [],
      operatorSubscription: null,
      meshplayControllerSubscription: null,
      disposeK8sContextSubscription: null,
      theme: 'light',
      isOpen: false,
      relayEnvironment: (0,_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_37__/* .createRelayEnvironment */ .eM)(),
      connectionMetadata: {},
      keys: [],
      abilities: [],
      abilityUpdated: false
    };
  }

  initMeshSyncEventsSubscription(contexts = (cov_23ks6arrqf().b[18][0]++, [])) {
    cov_23ks6arrqf().f[10]++;
    cov_23ks6arrqf().s[38]++;

    if (this.meshsyncEventsSubscriptionRef.current) {
      cov_23ks6arrqf().b[19][0]++;
      cov_23ks6arrqf().s[39]++;
      this.meshsyncEventsSubscriptionRef.current.dispose();
    } else {
      cov_23ks6arrqf().b[19][1]++;
    }

    const meshSyncEventsSubscription = (cov_23ks6arrqf().s[40]++, (0,_components_graphql_subscriptions_MeshSyncEventsSubscription__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z)(result => {
      cov_23ks6arrqf().f[11]++;
      cov_23ks6arrqf().s[41]++;

      if (result.meshsyncevents.object.kind === 'Service') {
        cov_23ks6arrqf().b[20][0]++;
        const telemetryCompName = (cov_23ks6arrqf().s[42]++, (0,_utils_nameMapper__WEBPACK_IMPORTED_MODULE_33__/* .isTelemetryComponent */ .A$)(result.meshsyncevents.object?.metadata?.name));
        let prometheusURLs = (cov_23ks6arrqf().s[43]++, []);
        let grafanaURLs = (cov_23ks6arrqf().s[44]++, []);
        const grafanaUrlsSet = (cov_23ks6arrqf().s[45]++, new Set(this.props.telemetryURLs.grafana));
        const promUrlsSet = (cov_23ks6arrqf().s[46]++, new Set(this.props.telemetryURLs.prometheus));
        const eventType = (cov_23ks6arrqf().s[47]++, result.meshsyncevents.type);
        const spec = (cov_23ks6arrqf().s[48]++, result?.meshsyncevents?.object?.spec?.attribute);
        const status = (cov_23ks6arrqf().s[49]++, result?.meshsyncevents?.object?.status?.attribute);
        const data = (cov_23ks6arrqf().s[50]++, {
          spec: JSON.parse(spec),
          status: JSON.parse(status)
        });
        cov_23ks6arrqf().s[51]++;

        if (telemetryCompName === _utils_nameMapper__WEBPACK_IMPORTED_MODULE_33__/* .TelemetryComps.GRAFANA */ .Ic.GRAFANA) {
          cov_23ks6arrqf().b[21][0]++;
          cov_23ks6arrqf().s[52]++;
          grafanaURLs = grafanaURLs.concat((0,_components_ConnectionWizard_helpers_metrics__WEBPACK_IMPORTED_MODULE_34__/* .extractURLFromScanData */ .Sd)(data));
          cov_23ks6arrqf().s[53]++;
          (0,_utils_utils__WEBPACK_IMPORTED_MODULE_35__/* .updateURLs */ .T8)(grafanaUrlsSet, grafanaURLs, eventType);
        } else {
          cov_23ks6arrqf().b[21][1]++;
          cov_23ks6arrqf().s[54]++;

          if (telemetryCompName === _utils_nameMapper__WEBPACK_IMPORTED_MODULE_33__/* .TelemetryComps.PROMETHEUS */ .Ic.PROMETHEUS) {
            cov_23ks6arrqf().b[22][0]++;
            cov_23ks6arrqf().s[55]++;
            prometheusURLs = new Set(prometheusURLs.concat((0,_components_ConnectionWizard_helpers_metrics__WEBPACK_IMPORTED_MODULE_34__/* .extractURLFromScanData */ .Sd)(data)));
            cov_23ks6arrqf().s[56]++;
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_35__/* .updateURLs */ .T8)(promUrlsSet, prometheusURLs, eventType);
          } else {
            cov_23ks6arrqf().b[22][1]++;
          }
        }

        cov_23ks6arrqf().s[57]++;
        this.props.updateTelemetryUrls({
          telemetryURLs: {
            grafana: Array.from(grafanaUrlsSet),
            prometheus: Array.from(promUrlsSet)
          }
        });
      } else {
        cov_23ks6arrqf().b[20][1]++;
      }
    }, {
      connectionIDs: (0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_26__/* .getConnectionIDsFromContextIds */ .Or)(contexts, this.props.k8sConfig),
      eventTypes: ['ADDED', 'DELETED']
    }));
    cov_23ks6arrqf().s[58]++;
    this.meshsyncEventsSubscriptionRef.current = meshSyncEventsSubscription;
  }

  componentDidMount() {
    cov_23ks6arrqf().f[14]++;
    cov_23ks6arrqf().s[62]++;
    this.loadConfigFromServer(); // this works, but sometimes other components which need data load faster than this data is obtained.

    cov_23ks6arrqf().s[63]++;
    this.loadPromGrafanaConnection();
    cov_23ks6arrqf().s[64]++;
    this.loadOrg();
    cov_23ks6arrqf().s[65]++;
    this.initSubscriptions([]);
    cov_23ks6arrqf().s[66]++;
    (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)('/api/user/prefs', {
      method: 'GET',
      credentials: 'include'
    }, result => {
      cov_23ks6arrqf().f[15]++;
      cov_23ks6arrqf().s[67]++;

      if (typeof result?.usersExtensionPreferences?.catalogContent !== 'undefined') {
        cov_23ks6arrqf().b[23][0]++;
        cov_23ks6arrqf().s[68]++;
        this.props.toggleCatalogContent({
          catalogVisibility: result?.usersExtensionPreferences?.catalogContent
        });
      } else {
        cov_23ks6arrqf().b[23][1]++;
      }
    }, err => {
      cov_23ks6arrqf().f[16]++;
      cov_23ks6arrqf().s[69]++;
      return console.error(err);
    });
    cov_23ks6arrqf().s[70]++;
    this.initMeshSyncEventsSubscription(this.state.activeK8sContexts); // this.initEventsSubscription()

    cov_23ks6arrqf().s[71]++;

    const k8sContextSubscription = (page = (cov_23ks6arrqf().b[24][0]++, ''), search = (cov_23ks6arrqf().b[25][0]++, ''), pageSize = (cov_23ks6arrqf().b[26][0]++, '10'), order = (cov_23ks6arrqf().b[27][0]++, '')) => {
      cov_23ks6arrqf().f[17]++;
      cov_23ks6arrqf().s[72]++;
      return (0,_components_graphql_subscriptions_K8sContextSubscription__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(result => {
        cov_23ks6arrqf().f[18]++;
        cov_23ks6arrqf().s[73]++;
        this.setState({
          k8sContexts: result.k8sContext
        }, () => {
          cov_23ks6arrqf().f[19]++;
          cov_23ks6arrqf().s[74]++;
          return this.setActiveContexts('all');
        });
        cov_23ks6arrqf().s[75]++;
        this.props.store.dispatch({
          type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.UPDATE_CLUSTER_CONFIG */ .Hp.UPDATE_CLUSTER_CONFIG,
          k8sConfig: result.k8sContext.contexts
        });
      }, {
        selector: {
          page: page,
          pageSize: pageSize,
          order: order,
          search: search
        }
      });
    };

    const disposeK8sContextSubscription = (cov_23ks6arrqf().s[76]++, k8sContextSubscription());
    cov_23ks6arrqf().s[77]++;
    this.setState({
      disposeK8sContextSubscription
    });
    cov_23ks6arrqf().s[78]++;
    document.addEventListener('fullscreenchange', this.fullScreenChanged);
    cov_23ks6arrqf().s[79]++;
    this.loadMeshModelComponent();
  }

  componentWillUnmount() {
    cov_23ks6arrqf().f[22]++;
    cov_23ks6arrqf().s[88]++;
    document.removeEventListener('fullscreenchange', this.fullScreenChanged);
  }

  componentDidUpdate(prevProps) {
    cov_23ks6arrqf().f[23]++;
    const {
      k8sConfig,
      capabilitiesRegistry
    } = (cov_23ks6arrqf().s[89]++, this.props); // in case the meshplay-ui is restricted, the user will be redirected to signup/extension page

    cov_23ks6arrqf().s[90]++;

    if (isMeshplayUiRestrictedAndThePageIsNotPlayground(capabilitiesRegistry)) {
      cov_23ks6arrqf().b[29][0]++;
      cov_23ks6arrqf().s[91]++;
      next_router__WEBPACK_IMPORTED_MODULE_31___default().push(meshplayExtensionRoute);
    } else {
      cov_23ks6arrqf().b[29][1]++;
    }

    cov_23ks6arrqf().s[92]++;

    if (!lodash__WEBPACK_IMPORTED_MODULE_9___default().isEqual(prevProps.k8sConfig, k8sConfig)) {
      cov_23ks6arrqf().b[30][0]++;
      const {
        meshplayControllerSubscription
      } = (cov_23ks6arrqf().s[93]++, this.state);
      cov_23ks6arrqf().s[94]++;
      console.log('k8sconfig changed, re-initialising subscriptions', k8sConfig, this.state.activeK8sContexts);
      const ids = (cov_23ks6arrqf().s[95]++, (0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_26__/* .getK8sConfigIdsFromK8sConfig */ .GB)(k8sConfig));
      cov_23ks6arrqf().s[96]++;

      if (meshplayControllerSubscription) {
        cov_23ks6arrqf().b[31][0]++;
        cov_23ks6arrqf().s[97]++;
        meshplayControllerSubscription.updateSubscription((0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_26__/* .getConnectionIDsFromContextIds */ .Or)(ids, k8sConfig));
      } else {
        cov_23ks6arrqf().b[31][1]++;
      }

      cov_23ks6arrqf().s[98]++;

      if (this.meshsyncEventsSubscriptionRef.current) {
        cov_23ks6arrqf().b[32][0]++;
        cov_23ks6arrqf().s[99]++;
        this.initMeshSyncEventsSubscription(ids);
      } else {
        cov_23ks6arrqf().b[32][1]++;
      }
    } else {
      cov_23ks6arrqf().b[30][1]++;
    }
  }

  async loadConfigFromServer() {
    cov_23ks6arrqf().f[59]++;
    const {
      store
    } = (cov_23ks6arrqf().s[203]++, this.props);
    cov_23ks6arrqf().s[204]++;
    (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)('/api/system/sync', {
      method: 'GET',
      credentials: 'include'
    }, result => {
      cov_23ks6arrqf().f[60]++;
      cov_23ks6arrqf().s[205]++;

      if (result) {
        cov_23ks6arrqf().b[52][0]++;
        cov_23ks6arrqf().s[206]++;

        if ((cov_23ks6arrqf().b[54][0]++, result.meshAdapters) && (cov_23ks6arrqf().b[54][1]++, result.meshAdapters !== null) && (cov_23ks6arrqf().b[54][2]++, result.meshAdapters.length > 0)) {
          cov_23ks6arrqf().b[53][0]++;
          cov_23ks6arrqf().s[207]++;
          store.dispatch({
            type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.UPDATE_ADAPTERS_INFO */ .Hp.UPDATE_ADAPTERS_INFO,
            meshAdapters: result.meshAdapters
          });
        } else {
          cov_23ks6arrqf().b[53][1]++;
        } // if (result.grafana) {
        //   const grafanaCfg = Object.assign(
        //     {
        //       grafanaURL: '',
        //       grafanaAPIKey: '',
        //       grafanaBoardSearch: '',
        //       grafanaBoards: [],
        //       selectedBoardsConfigs: [],
        //     },
        //     result.grafana,
        //   );
        //   store.dispatch({ type: actionTypes.UPDATE_GRAFANA_CONFIG, grafana: grafanaCfg });
        // }
        // if (result.prometheus) {
        //   if (typeof result.prometheus.prometheusURL === 'undefined') {
        //     result.prometheus.prometheusURL = '';
        //   }
        //   if (typeof result.prometheus.selectedPrometheusBoardsConfigs === 'undefined') {
        //     result.prometheus.selectedPrometheusBoardsConfigs = [];
        //   }
        //   const promCfg = Object.assign(
        //     {
        //       prometheusURL: '',
        //       selectedPrometheusBoardsConfigs: [],
        //     },
        //     result.prometheus,
        //   );
        //   store.dispatch({ type: actionTypes.UPDATE_PROMETHEUS_CONFIG, prometheus: promCfg });
        // }


        cov_23ks6arrqf().s[208]++;

        if (result.loadTestPrefs) {
          cov_23ks6arrqf().b[55][0]++;
          const loadTestPref = (cov_23ks6arrqf().s[209]++, Object.assign({
            c: 0,
            qps: 0,
            t: 0,
            gen: 0
          }, result.loadTestPrefs));
          cov_23ks6arrqf().s[210]++;
          store.dispatch({
            type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.UPDATE_LOAD_GEN_CONFIG */ .Hp.UPDATE_LOAD_GEN_CONFIG,
            loadTestPref
          });
        } else {
          cov_23ks6arrqf().b[55][1]++;
        }

        cov_23ks6arrqf().s[211]++;

        if (typeof result.anonymousUsageStats !== 'undefined') {
          cov_23ks6arrqf().b[56][0]++;
          cov_23ks6arrqf().s[212]++;
          store.dispatch({
            type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.UPDATE_ANONYMOUS_USAGE_STATS */ .Hp.UPDATE_ANONYMOUS_USAGE_STATS,
            anonymousUsageStats: result.anonymousUsageStats
          });
        } else {
          cov_23ks6arrqf().b[56][1]++;
        }

        cov_23ks6arrqf().s[213]++;

        if (typeof result.anonymousPerfResults !== 'undefined') {
          cov_23ks6arrqf().b[57][0]++;
          cov_23ks6arrqf().s[214]++;
          store.dispatch({
            type: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .actionTypes.UPDATE_ANONYMOUS_PERFORMANCE_RESULTS */ .Hp.UPDATE_ANONYMOUS_PERFORMANCE_RESULTS,
            anonymousPerfResults: result.anonymousPerfResults
          });
        } else {
          cov_23ks6arrqf().b[57][1]++;
        }
      } else {
        cov_23ks6arrqf().b[52][1]++;
      }
    }, error => {
      cov_23ks6arrqf().f[61]++;
      cov_23ks6arrqf().s[215]++;
      console.log(`there was an error fetching user config data: ${error}`);
    });
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    cov_23ks6arrqf().f[62]++;
    const pageProps = (cov_23ks6arrqf().s[216]++, Component.getInitialProps ? (cov_23ks6arrqf().b[58][0]++, await Component.getInitialProps(ctx)) : (cov_23ks6arrqf().b[58][1]++, {}));
    cov_23ks6arrqf().s[217]++;
    return {
      pageProps
    };
  }

  render() {
    cov_23ks6arrqf().f[64]++;
    const {
      Component,
      pageProps,
      classes,
      isDrawerCollapsed,
      relayEnvironment
    } = (cov_23ks6arrqf().s[220]++, this.props); //eslint-disable-next-line

    const ThemeResponsiveSnackbar = (cov_23ks6arrqf().s[221]++, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_15__.forwardRef)((props, forwardedRef) => {
      cov_23ks6arrqf().f[65]++;
      const {
        variant,
        message,
        action,
        key
      } = (cov_23ks6arrqf().s[222]++, props);
      cov_23ks6arrqf().s[223]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(notistack__WEBPACK_IMPORTED_MODULE_13__.SnackbarContent, {
        ref: forwardedRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_47___default()(classes[variant], {
          [classes.darknotifInfo]: (cov_23ks6arrqf().b[59][0]++, variant === 'info') && (cov_23ks6arrqf().b[59][1]++, this.state.theme === 'dark'),
          [classes.notifInfo]: (cov_23ks6arrqf().b[60][0]++, variant === 'info') && (cov_23ks6arrqf().b[60][1]++, this.state.theme !== 'dark'),
          [classes.darknotifSuccess]: (cov_23ks6arrqf().b[61][0]++, variant === 'success') && (cov_23ks6arrqf().b[61][1]++, this.state.theme === 'dark'),
          [classes.notifSuccess]: (cov_23ks6arrqf().b[62][0]++, variant === 'success') && (cov_23ks6arrqf().b[62][1]++, this.state.theme !== 'dark'),
          [classes.darknotifWarn]: (cov_23ks6arrqf().b[63][0]++, variant === 'warning') && (cov_23ks6arrqf().b[63][1]++, this.state.theme === 'dark'),
          [classes.notifWarn]: (cov_23ks6arrqf().b[64][0]++, variant === 'warning') && (cov_23ks6arrqf().b[64][1]++, this.state.theme !== 'dark'),
          [classes.darknotifError]: (cov_23ks6arrqf().b[65][0]++, variant === 'error') && (cov_23ks6arrqf().b[65][1]++, this.state.theme === 'dark'),
          [classes.notifError]: (cov_23ks6arrqf().b[66][0]++, variant === 'error') && (cov_23ks6arrqf().b[66][1]++, this.state.theme !== 'dark')
        }),
        style: {
          borderRadius: '0.3rem'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem'
          },
          children: [variant === 'error' ? (cov_23ks6arrqf().b[67][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.Error, {
            style: {
              marginRight: '0.5rem'
            }
          })) : (cov_23ks6arrqf().b[67][1]++, variant === 'success' ? (cov_23ks6arrqf().b[68][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
            style: {
              marginRight: '0.5rem'
            }
          })) : (cov_23ks6arrqf().b[68][1]++, variant === 'warning' ? (cov_23ks6arrqf().b[69][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.Warning, {
            style: {
              marginRight: '0.5rem'
            }
          })) : (cov_23ks6arrqf().b[69][1]++, variant === 'info' ? (cov_23ks6arrqf().b[70][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.Info, {
            style: {
              marginRight: '0.5rem'
            }
          })) : (cov_23ks6arrqf().b[70][1]++, null)))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx("div", {
            className: classes.message,
            children: message
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx("div", {
            style: {
              marginLeft: '5px'
            },
            className: classes.action,
            children: (cov_23ks6arrqf().b[71][0]++, action) && (cov_23ks6arrqf().b[71][1]++, action?.(key))
          })]
        })
      });
    }));
    cov_23ks6arrqf().s[224]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_utils_context_dynamicContext__WEBPACK_IMPORTED_MODULE_44__/* .DynamicComponentProvider */ .X, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(react_relay__WEBPACK_IMPORTED_MODULE_36__.RelayEnvironmentProvider, {
        environment: relayEnvironment,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
          theme: this.state.theme === 'dark' ? (cov_23ks6arrqf().b[72][0]++, _themes_app__WEBPACK_IMPORTED_MODULE_29__/* .darkTheme */ .$_) : (cov_23ks6arrqf().b[72][1]++, _themes__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.NoSsr, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsxs)(_components_General_ErrorBoundary__WEBPACK_IMPORTED_MODULE_38__/* .ErrorBoundary */ .SV, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsxs)("div", {
                className: classes.root,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), {}), (cov_23ks6arrqf().b[73][0]++, !this.state.isFullScreenMode) && (cov_23ks6arrqf().b[73][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsxs)("nav", {
                  className: isDrawerCollapsed ? (cov_23ks6arrqf().b[74][0]++, classes.drawerCollapsed) : (cov_23ks6arrqf().b[74][1]++, classes.drawer),
                  "data-test": "navigation",
                  style: {
                    height: '100%',
                    overflow: 'visible'
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx((_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default()), {
                    smUp: true,
                    implementation: "js",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_components_Navigator__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                      variant: "temporary",
                      open: this.state.mobileOpen,
                      onClose: this.handleDrawerToggle,
                      onCollapseDrawer: (open = (cov_23ks6arrqf().b[75][0]++, null)) => {
                        cov_23ks6arrqf().f[66]++;
                        cov_23ks6arrqf().s[225]++;
                        return this.handleCollapseDrawer(open);
                      },
                      isDrawerCollapsed: isDrawerCollapsed,
                      updateExtensionType: this.updateExtensionType
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx((_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default()), {
                    xsDown: true,
                    implementation: "css",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_components_Navigator__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                      onCollapseDrawer: (open = (cov_23ks6arrqf().b[76][0]++, null)) => {
                        cov_23ks6arrqf().f[67]++;
                        cov_23ks6arrqf().s[226]++;
                        return this.handleCollapseDrawer(open);
                      },
                      isDrawerCollapsed: isDrawerCollapsed,
                      updateExtensionType: this.updateExtensionType
                    })
                  })]
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsxs)("div", {
                  className: classes.appContent,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(notistack__WEBPACK_IMPORTED_MODULE_13__.SnackbarProvider, {
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'right'
                    },
                    iconVariant: {
                      success: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
                        style: {
                          marginRight: '0.5rem'
                        }
                      }),
                      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.Error, {
                        style: {
                          marginRight: '0.5rem'
                        }
                      }),
                      warning: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.Warning, {
                        style: {
                          marginRight: '0.5rem'
                        }
                      }),
                      info: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.Info, {
                        style: {
                          marginRight: '0.5rem'
                        }
                      })
                    },
                    Components: {
                      info: ThemeResponsiveSnackbar,
                      success: ThemeResponsiveSnackbar,
                      error: ThemeResponsiveSnackbar,
                      warning: ThemeResponsiveSnackbar
                    },
                    maxSnack: 10,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsxs)(_components_NotificationCenter__WEBPACK_IMPORTED_MODULE_39__/* .NotificationCenterProvider */ .Dg, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_components_MeshplayProgressBar__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}), (cov_23ks6arrqf().b[77][0]++, !this.state.isFullScreenMode) && (cov_23ks6arrqf().b[77][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        onDrawerToggle: this.handleDrawerToggle,
                        onDrawerCollapse: isDrawerCollapsed,
                        contexts: this.state.k8sContexts,
                        activeContexts: this.state.activeK8sContexts,
                        setActiveContexts: this.setActiveContexts,
                        searchContexts: this.searchContexts,
                        updateExtensionType: this.updateExtensionType,
                        theme: this.state.theme,
                        themeSetter: this.themeSetter,
                        abilityUpdated: this.state.abilityUpdated
                      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx("main", {
                        className: classes.mainContent,
                        style: {
                          padding: (cov_23ks6arrqf().b[78][0]++, this.props.extensionType === 'navigator') && (cov_23ks6arrqf().b[78][1]++, '0px')
                        },
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__.MuiPickersUtilsProvider, {
                          utils: (_date_io_moment__WEBPACK_IMPORTED_MODULE_0___default()),
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_components_General_ErrorBoundary__WEBPACK_IMPORTED_MODULE_38__/* .ErrorBoundary */ .SV, {
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(Component, _objectSpread({
                              pageContext: this.pageContext,
                              contexts: this.state.k8sContexts,
                              activeContexts: this.state.activeK8sContexts,
                              setActiveContexts: this.setActiveContexts,
                              searchContexts: this.searchContexts,
                              theme: this.state.theme,
                              themeSetter: this.themeSetter
                            }, pageProps))
                          })
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(Footer, {
                    classes: classes,
                    handleL5CommunityClick: this.handleL5CommunityClick,
                    capabilitiesRegistry: this.props.capabilitiesRegistry
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_extension_AccessMeshplayModal__WEBPACK_IMPORTED_MODULE_30__["default"], {
                closeForm: () => {
                  cov_23ks6arrqf().f[68]++;
                  cov_23ks6arrqf().s[227]++;
                  return this.setState({
                    isOpen: false
                  });
                },
                isOpen: this.state.isOpen
              })]
            })
          })
        })
      })
    });
  }

}

cov_23ks6arrqf().s[228]++;
MeshplayApp.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object.isRequired)
};
cov_23ks6arrqf().s[229]++;

const mapStateToProps = state => {
  cov_23ks6arrqf().f[69]++;
  cov_23ks6arrqf().s[230]++;
  return {
    isDrawerCollapsed: state.get('isDrawerCollapsed'),
    k8sConfig: state.get('k8sConfig'),
    operatorSubscription: state.get('operatorSubscription'),
    capabilitiesRegistry: state.get('capabilitiesRegistry'),
    telemetryURLs: state.get('telemetryURLs'),
    connectionMetadata: state.get('connectionMetadata'),
    extensionType: state.get('extensionType')
  };
};

cov_23ks6arrqf().s[231]++;

const mapDispatchToProps = dispatch => {
  cov_23ks6arrqf().f[70]++;
  cov_23ks6arrqf().s[232]++;
  return {
    toggleCatalogContent: (0,redux__WEBPACK_IMPORTED_MODULE_28__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_24__/* .toggleCatalogContent */ .tz, dispatch),
    updateTelemetryUrls: (0,redux__WEBPACK_IMPORTED_MODULE_28__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_24__/* .updateTelemetryUrls */ .ql, dispatch),
    setConnectionMetadata: (0,redux__WEBPACK_IMPORTED_MODULE_28__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_24__/* .setConnectionMetadata */ .KO, dispatch)
  };
};

const MeshplayWithRedux = (cov_23ks6arrqf().s[233]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)(_themes__WEBPACK_IMPORTED_MODULE_25__/* .styles */ .W2)((0,react_redux__WEBPACK_IMPORTED_MODULE_16__.connect)(mapStateToProps, mapDispatchToProps)(MeshplayApp)));
cov_23ks6arrqf().s[234]++;

const MeshplayAppWrapper = props => {
  cov_23ks6arrqf().f[71]++;
  cov_23ks6arrqf().s[235]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_16__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_45__/* .store */ .h,
    context: _store_hooks__WEBPACK_IMPORTED_MODULE_46__/* .RTKContext */ .f8,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_16__.Provider, {
      store: props.store,
      context: _lib_store__WEBPACK_IMPORTED_MODULE_24__/* .LegacyStoreContext */ .tC,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_16__.Provider, {
        store: props.store,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx("link", {
            rel: "shortcut icon",
            href: "/static/img/meshplay-logo/meshplay-logo.svg"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx("title", {
            children: "Meshplay"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__.MuiPickersUtilsProvider, {
          utils: (_date_io_moment__WEBPACK_IMPORTED_MODULE_0___default()),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_48__.jsx(MeshplayWithRedux, _objectSpread({}, props))
        })]
      })
    })
  });
}; // export default withStyles(styles)(withRedux(makeStore, {
//   serializeState : state => state.toJS(),
//   deserializeState : state => fromJS(state)
// })(MeshplayAppWrapper));


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)(_themes__WEBPACK_IMPORTED_MODULE_25__/* .styles */ .W2)(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10___default()(_lib_store__WEBPACK_IMPORTED_MODULE_24__/* .makeStore */ .n, {
  serializeState: state => {
    cov_23ks6arrqf().f[72]++;
    cov_23ks6arrqf().s[236]++;
    return state.toJS();
  },
  deserializeState: state => {
    cov_23ks6arrqf().f[73]++;
    cov_23ks6arrqf().s[237]++;
    return (0,immutable__WEBPACK_IMPORTED_MODULE_8__.fromJS)(state);
  }
})(MeshplayAppWrapper)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlaygroundMeshDeploy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17501);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7686);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function cov_12583qwve7() {
  var path = "/workspace/meshplay/ui/pages/extension/AccessMeshplayModal.js";
  var hash = "fd0a855d34243d35f3aae0281a84f3a8d5de9d6b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/pages/extension/AccessMeshplayModal.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 15
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "1": {
        start: {
          line: 15,
          column: 38
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "2": {
        start: {
          line: 60,
          column: 19
        },
        end: {
          line: 62,
          column: 2
        }
      },
      "3": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 61,
          column: 55
        }
      },
      "4": {
        start: {
          line: 65,
          column: 18
        },
        end: {
          line: 65,
          column: 26
        }
      },
      "5": {
        start: {
          line: 67,
          column: 21
        },
        end: {
          line: 70,
          column: 3
        }
      },
      "6": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 66
        }
      },
      "7": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 24
        }
      },
      "8": {
        start: {
          line: 72,
          column: 2
        },
        end: {
          line: 124,
          column: 4
        }
      },
      "9": {
        start: {
          line: 117,
          column: 28
        },
        end: {
          line: 117,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 26
          },
          end: {
            line: 15,
            column: 27
          }
        },
        loc: {
          start: {
            line: 15,
            column: 38
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 15
      },
      "1": {
        name: "Transition",
        decl: {
          start: {
            line: 60,
            column: 45
          },
          end: {
            line: 60,
            column: 55
          }
        },
        loc: {
          start: {
            line: 60,
            column: 68
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 60
      },
      "2": {
        name: "PlaygroundMeshDeploy",
        decl: {
          start: {
            line: 64,
            column: 24
          },
          end: {
            line: 64,
            column: 44
          }
        },
        loc: {
          start: {
            line: 64,
            column: 52
          },
          end: {
            line: 125,
            column: 1
          }
        },
        line: 64
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 67,
            column: 21
          },
          end: {
            line: 67,
            column: 22
          }
        },
        loc: {
          start: {
            line: 67,
            column: 28
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 67
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 117,
            column: 21
          },
          end: {
            line: 117,
            column: 22
          }
        },
        loc: {
          start: {
            line: 117,
            column: 28
          },
          end: {
            line: 117,
            column: 41
          }
        },
        line: 117
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 47,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 46,
            column: 10
          },
          end: {
            line: 46,
            column: 53
          }
        }, {
          start: {
            line: 47,
            column: 10
          },
          end: {
            line: 47,
            column: 59
          }
        }],
        line: 45
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
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fd0a855d34243d35f3aae0281a84f3a8d5de9d6b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12583qwve7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_12583qwve7();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const styles = (cov_12583qwve7().s[0]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => {
  cov_12583qwve7().f[0]++;
  cov_12583qwve7().s[1]++;
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      color: theme.palette.common.white,
      right: theme.spacing(1),
      top: theme.spacing(1),
      transform: 'rotate(-90deg)',
      '&:hover': {
        transform: 'rotate(90deg)',
        transition: 'all .3s ease-in'
      }
    },
    dialogTitle: {
      textAlign: 'center',
      backgroundColor: '#252E31',
      color: theme.palette.common.white
    },
    imgWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    },
    insideImgWrapper: {
      padding: '0rem 0.5rem',
      content: theme.palette.type === 'dark' ? (cov_12583qwve7().b[0][0]++, "url('/static/img/meshplay-logo-text.svg')") : (cov_12583qwve7().b[0][1]++, "url('/static/img/meshplay-logo-light-text.svg')")
    },
    insideImgWrapperLogo: {
      padding: '0rem 0.5rem'
    },
    installButton: {
      marginBottom: '1rem'
    },
    p: {
      margin: '1rem auto'
    }
  };
}));
const Transition = (cov_12583qwve7().s[2]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function Transition(props, ref) {
  cov_12583qwve7().f[1]++;
  cov_12583qwve7().s[3]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4___default()), _objectSpread({
    direction: "up",
    ref: ref
  }, props));
}));
function PlaygroundMeshDeploy(props) {
  cov_12583qwve7().f[2]++;
  const classes = (cov_12583qwve7().s[4]++, styles());
  cov_12583qwve7().s[5]++;

  const handlePage = e => {
    cov_12583qwve7().f[3]++;
    cov_12583qwve7().s[6]++;
    window.open('https://meshplay.khulnasoft.com/#getting-started', '_blank');
    cov_12583qwve7().s[7]++;
    e.stopPropagation();
  };

  cov_12583qwve7().s[8]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
      "aria-labelledby": "customized-dialog-title",
      open: props.isOpen,
      onClose: props.closeForm,
      TransitionComponent: Transition,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
        id: "customized-dialog-title",
        className: classes.dialogTitle,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h6",
          children: "The Cloud Native Playground"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
          "aria-label": "close",
          className: classes.closeButton,
          onClick: props.closeForm,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default()), {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: classes.imgWrapper,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
            className: classes.insideImgWrapperLogo,
            width: "20%",
            height: "20%",
            src: "/static/img/meshplay-logo.png"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
            className: classes.insideImgWrapper,
            width: "50%",
            height: "50%"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          gutterBottom: true,
          children: ["Meshplay Playground gives you hands-on experience with designing cloud native systems - from your browser - using every CNCF project. Choose a", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            href: "https://khulnasoft.com/learn/learning-paths",
            style: {
              color: '#00b39f'
            },
            children: "Learning Path"
          }), ' ', "and work through labs as you visually and collaboratively learn-by-doing without having to install a single thing."]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          gutterBottom: true,
          children: "To ensure that Meshplay Playground remains a clean sandbox for all to use, many of Meshplay's features are disabled. For full access to all of Meshplay's features, deploy your own instance of Meshplay."
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
        style: {
          display: 'flex',
          justifyContent: 'center'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: classes.installButton,
          size: "large",
          variant: "contained",
          color: "primary",
          onClick: e => {
            cov_12583qwve7().f[4]++;
            cov_12583qwve7().s[9]++;
            return handlePage(e);
          },
          children: "Install Meshplay"
        })
      })]
    })
  });
}

/***/ }),

/***/ 40626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14380);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["fill", "className"];

function cov_l8f4ox8ue() {
  var path = "/workspace/meshplay/ui/public/static/img/drawer-icons/configuration_hover_svg.js";
  var hash = "745069864ce57f8f826117e7faddff33804f8077";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/public/static/img/drawer-icons/configuration_hover_svg.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 7,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 3,
            column: 28
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 7,
            column: 5
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "745069864ce57f8f826117e7faddff33804f8077"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_l8f4ox8ue = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_l8f4ox8ue();

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





cov_l8f4ox8ue().s[0]++;

const ConfigurationHover = _ref => {
  let {
    fill,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  cov_l8f4ox8ue().f[0]++;
  cov_l8f4ox8ue().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
      src: "/static/img/configuration_trans.svg",
      style: {
        width: "1.21rem"
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0___default()), {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationHover);

/***/ }),

/***/ 69278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
function cov_2l22myhhrh() {
  var path = "/workspace/meshplay/ui/public/static/img/drawer-icons/extensions_svg.js";
  var hash = "7217b88b4863fc7be445eaf7cfc47a510ec6615f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/public/static/img/drawer-icons/extensions_svg.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 12
        },
        end: {
          line: 1,
          column: 46
        }
      },
      "1": {
        start: {
          line: 2,
          column: 12
        },
        end: {
          line: 2,
          column: 46
        }
      },
      "2": {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "3": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 33,
          column: 11
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 22
          },
          end: {
            line: 3,
            column: 23
          }
        },
        loc: {
          start: {
            line: 4,
            column: 4
          },
          end: {
            line: 33,
            column: 11
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7217b88b4863fc7be445eaf7cfc47a510ec6615f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2l22myhhrh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2l22myhhrh();


const st0 = (cov_2l22myhhrh().s[0]++, {
  opacity: 0.9,
  fill: ":#FFFFFF"
});
const st1 = (cov_2l22myhhrh().s[1]++, {
  opacity: 0.7,
  fill: ":#FFFFFF"
});
cov_2l22myhhrh().s[2]++;

const ExtensionIcon = props => {
  cov_2l22myhhrh().f[0]++;
  cov_2l22myhhrh().s[3]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: 20,
    viewBox: "0 0 165 165",
    style: {
      enableBackground: "new 0 0 165 165"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st0,
        points: "99.5,31.8 99.5,64.1 127.4,47.9 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st0,
        points: "69.5,100.8 69.5,133.2 97.7,117.1 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st1,
        points: "65.5,93.8 65.5,62.1 37.9,77.9 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st1,
        d: "M10.1,133.1c5.4,8.7,12.7,16.1,21.4,21.5v-33.9L10.1,133.1z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st1,
        points: "65.5,133.1 65.5,101 37.8,117.1 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st0,
        points: "35.5,152.6 63.6,136.6 35.5,120.4 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st1,
        points: "99.6,152.8 99.6,120.6 71.6,136.6 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st1,
        d: "M127,129.4c4.7-8.7,7.5-18.5,7.9-28.9l-29.2,16.7L127,129.4z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st0,
        points: "133.6,83.7 161.8,67.6 133.6,51.5 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st1,
        points: "129.6,44.5 129.6,12.5 101.8,28.5 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st1,
        points: "129.6,83.6 129.6,51.3 101.7,67.4 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st0,
        points: "67.5,165 67.5,165 67.5,165 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st0,
        points: "35.5,81.2 35.5,113.7 63.7,97.4 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st1,
        d: "M65.5,30c-10.7,0.3-20.8,3.1-29.6,7.8l29.6,17V30z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st0,
        points: "35.5,42.3 35.5,74.6 63.7,58.5 \t"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st1,
        d: "M31.5,40.3c-8.7,5.5-16,12.8-21.4,21.6l21.4,12.4V40.3z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st0,
        d: "M129.4,8c-9-4.8-19.1-7.7-29.9-8v25.1L129.4,8z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st0,
        d: "M0,99.9c0.4,10.7,3.2,20.9,8.1,29.8l21.7-12.6L0,99.9z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st0,
        d: "M8.1,65.4C3.3,74.2,0.4,84.3,0,95l29.8-17.1L8.1,65.4z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st1,
        d: "M35.8,157.1c8.9,4.7,19,7.5,29.7,7.9v-24.8L35.8,157.1z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st0,
        d: "M154.9,32c-5.4-8.7-12.7-16.1-21.3-21.5v33.8L154.9,32z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st0,
        d: "M103.6,154.5c8.7-5.5,16-12.9,21.4-21.7l-21.4-12.3V154.5z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st1,
        d: "M165,64.8c-0.4-10.6-3.3-20.6-8-29.3l-21.4,12.4L165,64.8z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        style: st0,
        d: "M69.5,165c10.7-0.3,20.7-3.1,29.6-7.8L69.5,140V165z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
        style: st1,
        points: "31.5,113.4 31.5,81.6 3.8,97.4 \t"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtensionIcon);

/***/ }),

/***/ 54601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["fill", "height", "width"];

function cov_7ibhw9szg() {
  var path = "/workspace/meshplay/ui/public/static/img/drawer-icons/filter_svg.js";
  var hash = "60bb768e6ee34ee544d600c0157ba2907d5f1f8c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/public/static/img/drawer-icons/filter_svg.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 15
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 19,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 15
          },
          end: {
            line: 1,
            column: 16
          }
        },
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 19,
            column: 8
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "60bb768e6ee34ee544d600c0157ba2907d5f1f8c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7ibhw9szg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_7ibhw9szg();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

cov_7ibhw9szg().s[0]++;

const Filter = _ref => {
  let {
    fill,
    height,
    width
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  cov_7ibhw9szg().f[0]++;
  cov_7ibhw9szg().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "0 0 50 50" // className={className}

  }, rest), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M30.7 0C30.7 0.1 30.7 0.2 30.7 0.3C30.7 3.4 28.1 6 25 6C21.8 6 19.3 3.5 19.3 0.3C19.3 0.2 19.3 0.1 19.3 0H0V49.6H50V0H30.7ZM23.9 44.3L21.5 32.4H21.4L18.8 44.3H15.5L11.7 26.8H15L17.3 38.7L20 26.7H23L25.5 38.8L28.1 26.7H31.3L27.1 44.2L23.9 44.3ZM42.1 44.3L41 40.4H35L34.1 44.3H30.8L35.1 26.8H40.3L45.5 44.3H42.1Z",
        fill: fill
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M35.6992 37.5L37.0992 31H38.4992L40.1992 37.5",
        fill: fill
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
          width: width,
          height: height
        })
      })
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ 57005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14380);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lifecycle_mgmt_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99142);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function cov_2ct9zsngl3() {
  var path = "/workspace/meshplay/ui/public/static/img/drawer-icons/lifecycle_hover_svg.js";
  var hash = "c98605c52393112ccbd41880b652292222c25235";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/public/static/img/drawer-icons/lifecycle_hover_svg.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 7,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 23
          },
          end: {
            line: 3,
            column: 24
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 7,
            column: 5
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c98605c52393112ccbd41880b652292222c25235"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ct9zsngl3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ct9zsngl3();





cov_2ct9zsngl3().s[0]++;

const LifecycleHover = () => {
  cov_2ct9zsngl3().f[0]++;
  cov_2ct9zsngl3().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_lifecycle_mgmt_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0___default()), {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LifecycleHover);

/***/ }),

/***/ 99142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["fill", "className"];

function cov_3z5x76bu8() {
  var path = "/workspace/meshplay/ui/public/static/img/drawer-icons/lifecycle_mgmt_svg.js";
  var hash = "3daa1c35f6ef23e14955e571f606f87298a9ee8b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/public/static/img/drawer-icons/lifecycle_mgmt_svg.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 18
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 18
          },
          end: {
            line: 1,
            column: 19
          }
        },
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 8
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3daa1c35f6ef23e14955e571f606f87298a9ee8b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3z5x76bu8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_3z5x76bu8();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

cov_3z5x76bu8().s[0]++;

const Lifecycle = _ref => {
  let {
    fill,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  cov_3z5x76bu8().f[0]++;
  cov_3z5x76bu8().s[1]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({
    width: "22",
    height: "19",
    viewBox: "0 0 22 19",
    fill: fill,
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, rest), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      opacity: "0.8",
      d: "M17.6052 7.29033L17.3233 7.78193C17.2202 7.96414 17.0002 8.03977 16.8042 7.96757C16.3986 7.81631 16.0273 7.59973 15.7007 7.32815C15.5425 7.19751 15.5013 6.96718 15.6044 6.78841L15.8863 6.29681C15.6491 6.02179 15.4635 5.70207 15.3397 5.35486H14.7725C14.5662 5.35486 14.3874 5.20703 14.3531 5.00077C14.2843 4.58823 14.2809 4.15507 14.3531 3.72535C14.3874 3.51908 14.5662 3.36782 14.7725 3.36782H15.3397C15.4635 3.0206 15.6491 2.70089 15.8863 2.42587L15.6044 1.93426C15.5013 1.7555 15.5391 1.52517 15.7007 1.39453C16.0273 1.12295 16.402 0.906366 16.8042 0.755104C17.0002 0.68291 17.2202 0.758542 17.3233 0.940744L17.6052 1.43235C17.9662 1.36703 18.334 1.36703 18.695 1.43235L18.9769 0.940744C19.08 0.758542 19.3 0.68291 19.496 0.755104C19.9017 0.906366 20.2729 1.12295 20.5995 1.39453C20.7577 1.52517 20.7989 1.7555 20.6958 1.93426L20.4139 2.42587C20.6511 2.70089 20.8367 3.0206 20.9605 3.36782H21.5277C21.734 3.36782 21.9128 3.51564 21.9471 3.72191C22.0159 4.13445 22.0193 4.56761 21.9471 4.99733C21.9128 5.2036 21.734 5.35486 21.5277 5.35486H20.9605C20.8367 5.70207 20.6511 6.02179 20.4139 6.29681L20.6958 6.78841C20.7989 6.96718 20.7611 7.19751 20.5995 7.32815C20.2729 7.59973 19.8982 7.81631 19.496 7.96757C19.3 8.03977 19.08 7.96414 18.9769 7.78193L18.695 7.29033C18.3375 7.35565 17.9662 7.35565 17.6052 7.29033ZM17.2442 5.26891C18.5678 6.2865 20.077 4.77731 19.0594 3.45376C17.7359 2.43274 16.2267 3.94537 17.2442 5.26891ZM13.2805 10.5597L14.439 11.1372C14.7862 11.3366 14.9375 11.7594 14.8 12.1376C14.494 12.9695 13.8924 13.7327 13.3355 14.3997C13.0811 14.7056 12.6411 14.7813 12.2938 14.5819L11.2934 14.0043C10.7434 14.4753 10.104 14.85 9.4061 15.0941V16.2492C9.4061 16.648 9.12076 16.9918 8.72886 17.0605C7.88316 17.2049 6.99621 17.2118 6.11958 17.0605C5.72423 16.9918 5.43202 16.6514 5.43202 16.2492V15.0941C4.73415 14.8466 4.09472 14.4753 3.54468 14.0043L2.54428 14.5784C2.2005 14.7778 1.75703 14.7022 1.50263 14.3962C0.945713 13.7293 0.357852 12.9661 0.0518896 12.1376C-0.0856218 11.7629 0.0656407 11.34 0.412857 11.1372L1.55764 10.5597C1.42357 9.84117 1.42357 9.10204 1.55764 8.38011L0.412857 7.79912C0.0656407 7.59973 -0.0890596 7.17688 0.0518896 6.80217C0.357852 5.97022 0.945713 5.20703 1.50263 4.5401C1.75703 4.23414 2.19707 4.15851 2.54428 4.3579L3.54468 4.93545C4.09472 4.46447 4.73415 4.08975 5.43202 3.84567V2.68714C5.43202 2.29179 5.71392 1.94801 6.10583 1.87926C6.95152 1.73487 7.84191 1.728 8.71854 1.87582C9.11389 1.94458 9.4061 2.28492 9.4061 2.68714V3.84223C10.104 4.08975 10.7434 4.46104 11.2934 4.93201L12.2938 4.35446C12.6376 4.15507 13.0811 4.2307 13.3355 4.53667C13.8924 5.2036 14.4768 5.96678 14.7828 6.79873C14.9203 7.17345 14.7862 7.59629 14.439 7.79912L13.2805 8.37667C13.4146 9.09861 13.4146 9.83773 13.2805 10.5597ZM9.23765 11.285C11.2728 8.63794 8.251 5.61613 5.60391 7.6513C3.56874 10.2984 6.59056 13.3202 9.23765 11.285ZM17.6052 17.5659L17.3233 18.0575C17.2202 18.2397 17.0002 18.3153 16.8042 18.2431C16.3986 18.0918 16.0273 17.8753 15.7007 17.6037C15.5425 17.473 15.5013 17.2427 15.6044 17.064L15.8863 16.5723C15.6491 16.2973 15.4635 15.9776 15.3397 15.6304H14.7725C14.5662 15.6304 14.3874 15.4826 14.3531 15.2763C14.2843 14.8638 14.2809 14.4306 14.3531 14.0009C14.3874 13.7946 14.5662 13.6434 14.7725 13.6434H15.3397C15.4635 13.2961 15.6491 12.9764 15.8863 12.7014L15.6044 12.2098C15.5013 12.031 15.5391 11.8007 15.7007 11.6701C16.0273 11.3985 16.402 11.1819 16.8042 11.0306C17.0002 10.9584 17.2202 11.0341 17.3233 11.2163L17.6052 11.7079C17.9662 11.6426 18.334 11.6426 18.695 11.7079L18.9769 11.2163C19.08 11.0341 19.3 10.9584 19.496 11.0306C19.9017 11.1819 20.2729 11.3985 20.5995 11.6701C20.7577 11.8007 20.7989 12.031 20.6958 12.2098L20.4139 12.7014C20.6511 12.9764 20.8367 13.2961 20.9605 13.6434H21.5277C21.734 13.6434 21.9128 13.7912 21.9471 13.9974C22.0159 14.41 22.0193 14.8431 21.9471 15.2729C21.9128 15.4791 21.734 15.6304 21.5277 15.6304H20.9605C20.8367 15.9776 20.6511 16.2973 20.4139 16.5723L20.6958 17.064C20.7989 17.2427 20.7611 17.473 20.5995 17.6037C20.2729 17.8753 19.8982 18.0918 19.496 18.2431C19.3 18.3153 19.08 18.2397 18.9769 18.0575L18.695 17.5659C18.3375 17.6312 17.9662 17.6312 17.6052 17.5659ZM17.2442 15.541C18.5678 16.5586 20.077 15.0494 19.0594 13.7259C17.7359 12.7083 16.2267 14.2175 17.2442 15.541Z"
    })
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lifecycle);

/***/ }),

/***/ 65681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["fill", "className"];

function cov_godi81j4s() {
  var path = "/workspace/meshplay/ui/public/static/img/drawer-icons/pattern_svg.js";
  var hash = "0c4fa05331139f34ae2acbf9c389ac8f9aa83b78";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/public/static/img/drawer-icons/pattern_svg.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 16
        },
        end: {
          line: 3,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 4399
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 17
          }
        },
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 2,
            column: 4399
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0c4fa05331139f34ae2acbf9c389ac8f9aa83b78"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_godi81j4s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_godi81j4s();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

cov_godi81j4s().s[0]++;

const Pattern = _ref => {
  let {
    fill,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  cov_godi81j4s().f[0]++;
  cov_godi81j4s().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 456.25 456.28",
    className: className
  }, rest), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: "pattern_trans"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
      id: "Layer_2",
      "data-name": "Layer 2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
        id: "Layer_1-2",
        "data-name": "Layer 1",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M309.19,74.55c10,12.5,17.3,26.5,22.9,41.3,7.2,19.1,10.5,39.1,6.4,59.3-5.5,27.1-21.4,46.2-47.9,55.4-10.3,3.6-21,5-31.6.5a14.68,14.68,0,0,1-4.1-2.2,27.14,27.14,0,0,1-6.7,17.1,14.07,14.07,0,0,1,4.4-1.2,35.62,35.62,0,0,1,4.4-.6c14.2-1.2,27.9-4.2,40.8-10.4,20-9.6,36.8-23.2,51-40.1a138.39,138.39,0,0,0,20.3-31.4c7.7-16.8,12.1-34.3,14.3-52.7,1.8-15.7,1.3-31.1-.2-46.6-.4-3.7-2-5.3-5.4-5.9-8.7-1.5-17.3-3.3-25.9-5.3-22.3-5.4-44.7-10-67.1-15.2-7.9-1.8-15.9-3.5-23.9-5.3,5.8,5.6,12.1,10.1,18.2,15C289.89,54.85,300.49,63.65,309.19,74.55Z",
          fill: fill,
          style: {
            opacity: .6000000238418579,
            isolation: "isolate"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M64,267.65c6.8-28.7,18.1-55.1,41.5-74.5,21.3-17.7,45.3-23.2,71.8-14,13.4,4.6,24.9,12.1,31,25.7a14.18,14.18,0,0,1,1.3,3.8,26.43,26.43,0,0,1,15.2-7.2c-.3-.2-.7-.5-1.1-.8-8.1-6.5-15.9-13.7-25.3-18.5-33.6-17.1-68.9-19.3-104.8-10.2-38.1,9.7-67.5,32.8-91.6,63.2-2.7,3.4-2.5,5.6-.3,9.1,18.7,29.1,37.3,58.4,55.9,87.6,2.5,3.9,5,7.7,8.4,12.8.4-8.6-1.5-15.5-2.4-22.4C60.79,303.85,59.69,285.75,64,267.65Z",
          fill: fill,
          style: {
            opacity: .800000011920929,
            isolation: "isolate"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M121.29,65.55a341.2,341.2,0,0,1,39.1-4.3c11.9-.7,23.5,1.7,34.9,4.7,27.2,7.1,51.6,19,69.4,41.5,17.1,21.5,21.2,45.5,12,71.4-4.7,13.2-12.6,24.2-26.1,30.1a8.4,8.4,0,0,1-3,.8,26.61,26.61,0,0,1,7.2,15.7,18.35,18.35,0,0,1,2.1-2.8c9.9-11.8,18.9-24.1,24-38.9a153.94,153.94,0,0,0,8.3-60.3A148.29,148.29,0,0,0,274.39,66c-12.6-25.5-30.8-46.4-53-64.1-3.3-2.6-5.7-2.3-9.2-.1-28.6,18.4-57.3,36.5-85.9,54.8-4.4,2.8-9.2,5.3-13.5,9.3A33.7,33.7,0,0,0,121.29,65.55Z",
          fill: fill,
          style: {
            opacity: .800000011920929,
            isolation: "isolate"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M41.19,184.45c11.2-14.3,21.8-29.1,36.9-39.7,27.8-19.6,58-32.4,92.8-27.7,28,3.7,48.4,18.9,58.6,45.8,4.4,11.6,5.8,23.5.8,35.5a12,12,0,0,1-1.2,2.3,26.67,26.67,0,0,1,15.9,5.6l-.3-1.2a34.19,34.19,0,0,1-.4-4.5c-1-11.8-3-23.3-7.3-34.5-9.1-23.6-24.6-42.3-43.7-58.6-28.2-23.9-61.2-34.1-97.4-35.2-10.3-.3-20.6-.4-30.9,1-7.1,1-7.6,1-9.1,8-6.4,30.2-12.9,60.5-19.4,90.7-1.7,7.9-3.3,15.8-5.2,24.7C35.79,192.75,38.19,188.35,41.19,184.45Z",
          fill: fill,
          style: {
            opacity: .6000000238418579,
            isolation: "isolate"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M454.59,212.45c-18.8-29.3-37.4-58.7-56.2-87.9-2.5-3.9-4.5-8.2-8.6-12.5,1.2,10.2,2.1,19.1,3.3,27.9,2.6,18.4,2.6,36.7-2.3,54.9-7.7,28.5-20.4,53.8-44.4,72.2-13.1,10.1-28.3,14.7-44.7,14.9-11.5.1-22.3-3.2-32.5-8.6-8.8-4.7-16.4-10.9-20.8-20.2-1.4-2.9-2-4.7-1.6-5.9a26.22,26.22,0,0,1-16,7.6,32.74,32.74,0,0,1,4.5,3.4c8.4,6.8,16.8,13.7,26.7,18.4,27.5,13.1,56.6,15.9,86.2,11.2,44.6-7,78.5-32.1,106.2-66.5C457,218.15,456.69,215.65,454.59,212.45Z",
          fill: fill,
          style: {
            opacity: .800000011920929,
            isolation: "isolate"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M395.39,296.75c-27.7,27.8-60.8,43.3-100.7,43.4-27.8.1-57.3-18.2-67.2-45-4.1-11.1-6.8-22.4-2.6-34.1,1.1-3.1,1.9-5.1,2.7-6.1a26.72,26.72,0,0,1-16.6-6,19.55,19.55,0,0,1,.9,4.6c.9,8.6,1.3,17.3,3.9,25.6,13.7,44.2,43.2,74.4,84.8,92.7,26.6,11.7,54.9,15.3,84,12.2,13-1.4,13.1-1.1,15.7-12.5,7.1-31.4,14.3-62.9,21.2-94.4,1.2-5.3,3.3-10.5,3.2-17.4-1.6,2.2-2.5,3.4-3.4,4.6C413.29,275.75,405.19,287,395.39,296.75Z",
          fill: fill,
          style: {
            opacity: .6000000238418579,
            isolation: "isolate"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M151.59,387.55c-12.7-14.2-21.8-30.7-28.1-48.5-6-17.1-9.5-34.6-6.7-52.9,4.2-26.6,17.6-46.4,42.5-57.5,12-5.4,24.7-7.9,37.8-2.9a20.2,20.2,0,0,1,4.1,1.9,26.67,26.67,0,0,1,5.6-15.9,23.13,23.13,0,0,1-3.2.4,168.32,168.32,0,0,0-21.2,2.7c-24.2,5.1-44.3,17.8-62,34.5a149.07,149.07,0,0,0-45.1,81.1c-3.9,19.4-4.4,38.8-2.9,58.5.6,7.6,3.7,10.3,11.3,11.8,31.8,6.4,63.3,14,95,20.9,5.4,1.2,10.7,3.2,17.8,3.4-5.2-4-9.2-7.1-13.3-10.1C172,406.45,160.89,398,151.59,387.55Z",
          fill: fill,
          style: {
            opacity: .6000000238418579,
            isolation: "isolate"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M340.89,390.15c-11.3,2-22.6,3.4-34.1,4.5-9.3.9-18.8,1.4-27.9,0a156.28,156.28,0,0,1-38.4-10.5c-19.1-8-36.5-18.6-49.4-35.3-15.5-20.2-20.8-42.6-13.1-67.2,4.3-13.9,11.5-26.3,25.5-33,2.5-1.2,4.2-1.8,5.4-1.6a26.54,26.54,0,0,1-7.6-15.6,26.44,26.44,0,0,1-2,2.6c-6.5,7.8-13.1,15.5-17.8,24.6-11.3,22-15.4,45.4-14.8,70a147.16,147.16,0,0,0,11,52.9c12.2,29,31.5,52.6,56.1,72.2,3.8,3.1,6.6,3.4,10.9.6,24.7-16,49.7-31.7,74.5-47.5,8.2-5.2,16.4-10.5,24.7-15.9A2.86,2.86,0,0,0,340.89,390.15Z",
          fill: fill,
          style: {
            opacity: .800000011920929,
            isolation: "isolate"
          }
        })]
      })
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pattern);

/***/ }),

/***/ 9530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14380);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _performance_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90364);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function cov_wa251vdgy() {
  var path = "/workspace/meshplay/ui/public/static/img/drawer-icons/performance_hover_svg.js";
  var hash = "326c1f0f9a47a934fe039471fd9cd5ec5313767d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/public/static/img/drawer-icons/performance_hover_svg.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 3,
          column: 109
        }
      },
      "1": {
        start: {
          line: 4,
          column: 25
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "2": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 8,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 25
          },
          end: {
            line: 4,
            column: 26
          }
        },
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 8,
            column: 5
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "326c1f0f9a47a934fe039471fd9cd5ec5313767d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wa251vdgy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_wa251vdgy();





const drawerIconsStyle = (cov_wa251vdgy().s[0]++, {
  height: "1.21rem",
  width: "1.21rem",
  fontSize: "1.0rem",
  transform: "scale(1.5)"
});
cov_wa251vdgy().s[1]++;

const PerformanceHover = () => {
  cov_wa251vdgy().f[0]++;
  cov_wa251vdgy().s[2]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_performance_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      style: drawerIconsStyle
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_0___default()), {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerformanceHover);

/***/ }),

/***/ 90364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["fill", "className"];

function cov_7w140p8p1() {
  var path = "/workspace/meshplay/ui/public/static/img/drawer-icons/performance_svg.js";
  var hash = "60d8c117dffa1f7ac9f25606e298d91f7ce5c0d1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/public/static/img/drawer-icons/performance_svg.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 20
        },
        end: {
          line: 51,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 50,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 20
          },
          end: {
            line: 1,
            column: 21
          }
        },
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 50,
            column: 8
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "60d8c117dffa1f7ac9f25606e298d91f7ce5c0d1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7w140p8p1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_7w140p8p1();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

cov_7w140p8p1().s[0]++;

const Performance = _ref => {
  let {
    fill,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  cov_7w140p8p1().f[0]++;
  cov_7w140p8p1().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", _objectSpread(_objectSpread({
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 550 550",
    className: className
  }, rest), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: "meshplay-button-2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      id: "Gauge-2",
      "data-name": "Gauge",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.3
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M137.85,152.08a284,284,0,0,1,31.8-14.4l-2.7-13.3a324.4,324.4,0,0,0-33.5,19Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.6
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M342.55,130.38l27.5-31a314.16,314.16,0,0,0-53.7-6.9l-16,29.2A297.91,297.91,0,0,1,342.55,130.38Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.3
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M131.55,155.38l-4-8.1c-8.3,5.7-16.4,11.8-24.1,18.2l4.2,5C115.45,165.08,123.45,160.08,131.55,155.38Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.8
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M395.75,151.88l41.2-29.1a295.56,295.56,0,0,0-59.1-21.6L350,132.58A288.23,288.23,0,0,1,395.75,151.88Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.2
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M102,174.58l-3.8-4.6a272.51,272.51,0,0,0-20.6,19.6l3,2.4C87.45,185.88,94.55,180.08,102,174.58Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.8
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M444.05,126.35l-41.39,29.07a302.45,302.45,0,0,1,50,35.86l53.76-20.74A299.18,299.18,0,0,0,444.05,126.35Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.2
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M72.55,194.68a339,339,0,0,0-29,36.5,295.78,295.78,0,0,1,31.7-34.4Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.4
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M217.85,104.58l-1.1,19.8a276.24,276.24,0,0,1,31.8-4l6.9-24.2A335.64,335.64,0,0,0,217.85,104.58Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.6
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M256,120c3.6-.1,7.3-.2,11-.2,8.7,0,17.4.4,25.9,1.2l15.6-28.6a311.54,311.54,0,0,0-45.5,2.7Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
        style: {
          opacity: 0.4
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          d: "M176.15,135.18a272.38,272.38,0,0,1,33.5-9.4l1.1-19a300.05,300.05,0,0,0-37.3,14.5Z"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      id: "Needle",
      style: {
        opacity: 0.8
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M250.08,261.48a21.17,21.17,0,1,0,19.4,22.8A21.18,21.18,0,0,0,250.08,261.48Zm-2.3,29.8a8.73,8.73,0,1,1,9.4-8A8.8,8.8,0,0,1,247.78,291.28Z",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M315.28,169.88c-2.6,1.8-5,3.7-7.5,5.6l-9.3,14.8-18.7,29.5-18.7,29.5-4.7,7.4-2.3,3.7a11.27,11.27,0,0,1-1.2,1.8,5.17,5.17,0,0,0-1.2,1.8c-.7,3-1.3,6-1.9,9.1a2.77,2.77,0,0,0-.1.9,8.59,8.59,0,0,1,6.1,3.9,5.58,5.58,0,0,1,.8-.5c2.6-1.8,5-3.7,7.5-5.6a4.53,4.53,0,0,0,1.1-1.9,18.58,18.58,0,0,1,1.1-1.9l2.3-3.7,4.7-7.4,18.7-29.5,18.7-29.5,9.3-14.8c.7-3,1.3-6.1,1.9-9.2s1-6.2,1.4-9.4C320.48,166.28,317.78,168,315.28,169.88Z"
      })]
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Performance);

/***/ }),

/***/ 5617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A$": () => (/* binding */ isTelemetryComponent),
/* harmony export */   "Ic": () => (/* binding */ TelemetryComps)
/* harmony export */ });
/* unused harmony exports podNameMapper, versionMapper */
function cov_10trvyxfsc() {
  var path = "/workspace/meshplay/ui/utils/nameMapper.js";
  var hash = "eb40bd472b158942a1d3eab83edb740b5940e240";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/utils/nameMapper.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 29
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "2": {
        start: {
          line: 4,
          column: 6
        },
        end: {
          line: 4,
          column: 66
        }
      },
      "3": {
        start: {
          line: 4,
          column: 44
        },
        end: {
          line: 4,
          column: 66
        }
      },
      "4": {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 5,
          column: 83
        }
      },
      "5": {
        start: {
          line: 5,
          column: 52
        },
        end: {
          line: 5,
          column: 83
        }
      },
      "6": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 6,
          column: 81
        }
      },
      "7": {
        start: {
          line: 6,
          column: 51
        },
        end: {
          line: 6,
          column: 81
        }
      },
      "8": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 66
        }
      },
      "9": {
        start: {
          line: 7,
          column: 44
        },
        end: {
          line: 7,
          column: 66
        }
      },
      "10": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 68
        }
      },
      "11": {
        start: {
          line: 8,
          column: 45
        },
        end: {
          line: 8,
          column: 68
        }
      },
      "12": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 72
        }
      },
      "13": {
        start: {
          line: 9,
          column: 47
        },
        end: {
          line: 9,
          column: 72
        }
      },
      "14": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 64
        }
      },
      "15": {
        start: {
          line: 10,
          column: 43
        },
        end: {
          line: 10,
          column: 64
        }
      },
      "16": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 68
        }
      },
      "17": {
        start: {
          line: 11,
          column: 45
        },
        end: {
          line: 11,
          column: 68
        }
      },
      "18": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 86
        }
      },
      "19": {
        start: {
          line: 12,
          column: 54
        },
        end: {
          line: 12,
          column: 86
        }
      },
      "20": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 12
        }
      },
      "21": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 21
        }
      },
      "22": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 23
        }
      },
      "23": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 26
        }
      },
      "24": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 12
        }
      },
      "25": {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 23,
          column: 39
        }
      },
      "26": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "27": {
        start: {
          line: 26,
          column: 30
        },
        end: {
          line: 29,
          column: 16
        }
      },
      "28": {
        start: {
          line: 28,
          column: 21
        },
        end: {
          line: 28,
          column: 59
        }
      },
      "29": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 29
        }
      },
      "30": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 17
        }
      },
      "31": {
        start: {
          line: 36,
          column: 29
        },
        end: {
          line: 37,
          column: 65
        }
      },
      "32": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 65
        }
      },
      "33": {
        start: {
          line: 39,
          column: 30
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "34": {
        start: {
          line: 46,
          column: 16
        },
        end: {
          line: 46,
          column: 45
        }
      },
      "35": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "36": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 50,
          column: 5
        }
      },
      "37": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 49,
          column: 25
        }
      },
      "38": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 52,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 29
          },
          end: {
            line: 1,
            column: 30
          }
        },
        loc: {
          start: {
            line: 1,
            column: 59
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 11
          },
          end: {
            line: 28,
            column: 12
          }
        },
        loc: {
          start: {
            line: 28,
            column: 21
          },
          end: {
            line: 28,
            column: 59
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 29
          },
          end: {
            line: 36,
            column: 30
          }
        },
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 65
          }
        },
        line: 37
      },
      "3": {
        name: "isTelemetryComponent",
        decl: {
          start: {
            line: 45,
            column: 16
          },
          end: {
            line: 45,
            column: 36
          }
        },
        loc: {
          start: {
            line: 45,
            column: 43
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 45
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 3,
            column: 4
          },
          end: {
            line: 13,
            column: 12
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 15,
            column: 21
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 17,
            column: 23
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 19,
            column: 26
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 21,
            column: 12
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 4,
            column: 6
          },
          end: {
            line: 4,
            column: 66
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 4,
            column: 6
          },
          end: {
            line: 4,
            column: 66
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
        line: 4
      },
      "2": {
        loc: {
          start: {
            line: 5,
            column: 6
          },
          end: {
            line: 5,
            column: 83
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 6
          },
          end: {
            line: 5,
            column: 83
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
        line: 5
      },
      "3": {
        loc: {
          start: {
            line: 6,
            column: 6
          },
          end: {
            line: 6,
            column: 81
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 6
          },
          end: {
            line: 6,
            column: 81
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
        line: 6
      },
      "4": {
        loc: {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 7,
            column: 66
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 7,
            column: 66
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
        line: 7
      },
      "5": {
        loc: {
          start: {
            line: 8,
            column: 6
          },
          end: {
            line: 8,
            column: 68
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 6
          },
          end: {
            line: 8,
            column: 68
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
      },
      "6": {
        loc: {
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 9,
            column: 72
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 9,
            column: 72
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
        line: 9
      },
      "7": {
        loc: {
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 64
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 6
          },
          end: {
            line: 10,
            column: 64
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
        line: 10
      },
      "8": {
        loc: {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 11,
            column: 68
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 11,
            column: 68
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
        line: 11
      },
      "9": {
        loc: {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 12,
            column: 86
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 12,
            column: 86
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
        line: 12
      },
      "10": {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 32,
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
        line: 25
      },
      "11": {
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 65
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 37,
            column: 34
          },
          end: {
            line: 37,
            column: 45
          }
        }, {
          start: {
            line: 37,
            column: 48
          },
          end: {
            line: 37,
            column: 65
          }
        }],
        line: 37
      },
      "12": {
        loc: {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 50,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 50,
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
        line: 48
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "eb40bd472b158942a1d3eab83edb740b5940e240"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10trvyxfsc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_10trvyxfsc();
cov_10trvyxfsc().s[0]++;
const podNameMapper = (serviceMeshName, podName) => {
  cov_10trvyxfsc().f[0]++;
  cov_10trvyxfsc().s[1]++;

  switch (serviceMeshName) {
    case 'istio':
      cov_10trvyxfsc().b[0][0]++;
      cov_10trvyxfsc().s[2]++;

      if (podName.includes('istio-galley')) {
        cov_10trvyxfsc().b[1][0]++;
        cov_10trvyxfsc().s[3]++;
        return 'Istio Galley';
      } else {
        cov_10trvyxfsc().b[1][1]++;
      }

      cov_10trvyxfsc().s[4]++;

      if (podName.includes('istio-ingressgateway')) {
        cov_10trvyxfsc().b[2][0]++;
        cov_10trvyxfsc().s[5]++;
        return 'Istio Ingress Gateway';
      } else {
        cov_10trvyxfsc().b[2][1]++;
      }

      cov_10trvyxfsc().s[6]++;

      if (podName.includes('istio-egressgateway')) {
        cov_10trvyxfsc().b[3][0]++;
        cov_10trvyxfsc().s[7]++;
        return 'Istio Egress Gateway';
      } else {
        cov_10trvyxfsc().b[3][1]++;
      }

      cov_10trvyxfsc().s[8]++;

      if (podName.includes('istio-policy')) {
        cov_10trvyxfsc().b[4][0]++;
        cov_10trvyxfsc().s[9]++;
        return 'Istio Policy';
      } else {
        cov_10trvyxfsc().b[4][1]++;
      }

      cov_10trvyxfsc().s[10]++;

      if (podName.includes('istio-citadel')) {
        cov_10trvyxfsc().b[5][0]++;
        cov_10trvyxfsc().s[11]++;
        return 'Istio Citadel';
      } else {
        cov_10trvyxfsc().b[5][1]++;
      }

      cov_10trvyxfsc().s[12]++;

      if (podName.includes('istio-telemetry')) {
        cov_10trvyxfsc().b[6][0]++;
        cov_10trvyxfsc().s[13]++;
        return 'Istio Telemetry';
      } else {
        cov_10trvyxfsc().b[6][1]++;
      }

      cov_10trvyxfsc().s[14]++;

      if (podName.includes('istio-pilot')) {
        cov_10trvyxfsc().b[7][0]++;
        cov_10trvyxfsc().s[15]++;
        return 'Istio Pilot';
      } else {
        cov_10trvyxfsc().b[7][1]++;
      }

      cov_10trvyxfsc().s[16]++;

      if (podName.includes('istio-tracing')) {
        cov_10trvyxfsc().b[8][0]++;
        cov_10trvyxfsc().s[17]++;
        return 'Istio Tracing';
      } else {
        cov_10trvyxfsc().b[8][1]++;
      }

      cov_10trvyxfsc().s[18]++;

      if (podName.includes('istio-sidecar-injector')) {
        cov_10trvyxfsc().b[9][0]++;
        cov_10trvyxfsc().s[19]++;
        return 'Istio Sidecar Injector';
      } else {
        cov_10trvyxfsc().b[9][1]++;
      }

      cov_10trvyxfsc().s[20]++;
      break;

    case 'kiali':
      cov_10trvyxfsc().b[0][1]++;
      cov_10trvyxfsc().s[21]++;
      return 'Kiali';

    case 'grafana':
      cov_10trvyxfsc().b[0][2]++;
      cov_10trvyxfsc().s[22]++;
      return 'Grafana';

    case 'prometheus':
      cov_10trvyxfsc().b[0][3]++;
      cov_10trvyxfsc().s[23]++;
      return 'Prometheus';

    default:
      cov_10trvyxfsc().b[0][4]++;
      cov_10trvyxfsc().s[24]++;
      break;
  }

  const podNameArr = (cov_10trvyxfsc().s[25]++, podName.split('-'));
  cov_10trvyxfsc().s[26]++;

  if (Array.isArray(podNameArr)) {
    cov_10trvyxfsc().b[10][0]++;
    const prettifiedPodName = (cov_10trvyxfsc().s[27]++, podNameArr.slice(0, -2).map(word => {
      cov_10trvyxfsc().f[1]++;
      cov_10trvyxfsc().s[28]++;
      return word[0].toUpperCase() + word.substr(1);
    }).join(' '));
    cov_10trvyxfsc().s[29]++;
    return prettifiedPodName;
  } else {
    cov_10trvyxfsc().b[10][1]++;
  }

  cov_10trvyxfsc().s[30]++;
  return podName;
};
cov_10trvyxfsc().s[31]++;
const versionMapper = versionName => {
  cov_10trvyxfsc().f[2]++;
  cov_10trvyxfsc().s[32]++;
  return versionName.charAt(0) === 'v' ? (cov_10trvyxfsc().b[11][0]++, versionName) : (cov_10trvyxfsc().b[11][1]++, `v${versionName}`);
};
const TelemetryComps = (cov_10trvyxfsc().s[33]++, {
  GRAFANA: 'grafana',
  PROMETHEUS: 'prometheus'
}); // maps objects to telemetry comp if name is one of "TelemetryComps"

function isTelemetryComponent(name) {
  cov_10trvyxfsc().f[3]++;
  const comps = (cov_10trvyxfsc().s[34]++, Object.values(TelemetryComps));
  cov_10trvyxfsc().s[35]++;

  for (const comp in comps) {
    cov_10trvyxfsc().s[36]++;

    if (name?.toLowerCase().includes(comps[comp])) {
      cov_10trvyxfsc().b[12][0]++;
      cov_10trvyxfsc().s[37]++;
      return comps[comp];
    } else {
      cov_10trvyxfsc().b[12][1]++;
    }
  }

  cov_10trvyxfsc().s[38]++;
  return '';
}

/***/ })

};
;