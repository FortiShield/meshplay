"use strict";
exports.id = 1462;
exports.ids = [1462];
exports.modules = {

/***/ 26071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CopyIcon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["width", "height", "fill"];

function cov_j1yn02xii() {
  var path = "/workspace/meshplay/ui/assets/icons/CopyIcon.js";
  var hash = "cc51be8b5de032d7212774876ed0467abe6b5800";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/CopyIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 24
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 11,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 25
          }
        },
        loc: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 11,
            column: 8
          }
        },
        line: 9
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
            line: 4,
            column: 12
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 4,
            column: 10
          },
          end: {
            line: 4,
            column: 12
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 13
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 5,
            column: 11
          },
          end: {
            line: 5,
            column: 13
          }
        }],
        line: 5
      },
      "2": {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 23
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 6,
            column: 23
          }
        }],
        line: 6
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
      "0": [0],
      "1": [0],
      "2": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cc51be8b5de032d7212774876ed0467abe6b5800"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_j1yn02xii = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_j1yn02xii();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



cov_j1yn02xii().s[0]++;
const CopyIcon = _ref => {
  let {
    width = (cov_j1yn02xii().b[0][0]++, 24),
    height = (cov_j1yn02xii().b[1][0]++, 24),
    fill = (cov_j1yn02xii().b[2][0]++, 'currentColor')
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  cov_j1yn02xii().f[0]++;
  cov_j1yn02xii().s[1]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18",
    fill: "none"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 0.75H3C2.175 0.75 1.5 1.425 1.5 2.25V12.75H3V2.25H12V0.75ZM14.25 3.75H6C5.175 3.75 4.5 4.425 4.5 5.25V15.75C4.5 16.575 5.175 17.25 6 17.25H14.25C15.075 17.25 15.75 16.575 15.75 15.75V5.25C15.75 4.425 15.075 3.75 14.25 3.75ZM14.25 15.75H6V5.25H14.25V15.75Z",
      fill: fill
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyIcon);

/***/ }),

/***/ 54640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BadgeAvatars)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86489);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function cov_6pqz7wmce() {
  var path = "/workspace/meshplay/ui/components/CustomAvatar.js";
  var hash = "37ce5cb8a20b478e1b76aa159dcf3a4bee36b4e4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/CustomAvatar.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 32,
          column: 10
        }
      },
      "1": {
        start: {
          line: 5,
          column: 43
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "2": {
        start: {
          line: 7,
          column: 36
        },
        end: {
          line: 7,
          column: 54
        }
      },
      "3": {
        start: {
          line: 8,
          column: 26
        },
        end: {
          line: 8,
          column: 44
        }
      },
      "4": {
        start: {
          line: 34,
          column: 18
        },
        end: {
          line: 42,
          column: 3
        }
      },
      "5": {
        start: {
          line: 34,
          column: 41
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "6": {
        start: {
          line: 45,
          column: 18
        },
        end: {
          line: 45,
          column: 29
        }
      },
      "7": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 61,
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
            column: 31
          },
          end: {
            line: 5,
            column: 32
          }
        },
        loc: {
          start: {
            line: 5,
            column: 43
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 21
          },
          end: {
            line: 7,
            column: 22
          }
        },
        loc: {
          start: {
            line: 7,
            column: 36
          },
          end: {
            line: 7,
            column: 54
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 8,
            column: 11
          },
          end: {
            line: 8,
            column: 12
          }
        },
        loc: {
          start: {
            line: 8,
            column: 26
          },
          end: {
            line: 8,
            column: 44
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 34,
            column: 29
          },
          end: {
            line: 34,
            column: 30
          }
        },
        loc: {
          start: {
            line: 34,
            column: 41
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 34
      },
      "4": {
        name: "BadgeAvatars",
        decl: {
          start: {
            line: 44,
            column: 24
          },
          end: {
            line: 44,
            column: 36
          }
        },
        loc: {
          start: {
            line: 44,
            column: 58
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 44
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 36
          },
          end: {
            line: 7,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 7,
            column: 36
          },
          end: {
            line: 7,
            column: 41
          }
        }, {
          start: {
            line: 7,
            column: 45
          },
          end: {
            line: 7,
            column: 54
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 26
          },
          end: {
            line: 8,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 8,
            column: 26
          },
          end: {
            line: 8,
            column: 31
          }
        }, {
          start: {
            line: 8,
            column: 35
          },
          end: {
            line: 8,
            column: 44
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
      "5": 0,
      "6": 0,
      "7": 0
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
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "37ce5cb8a20b478e1b76aa159dcf3a4bee36b4e4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6pqz7wmce = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_6pqz7wmce();




const StyledBadge = (cov_6pqz7wmce().s[0]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(theme => {
  cov_6pqz7wmce().f[0]++;
  cov_6pqz7wmce().s[1]++;
  return {
    badge: {
      backgroundColor: ({
        color
      }) => {
        cov_6pqz7wmce().f[1]++;
        cov_6pqz7wmce().s[2]++;
        return (cov_6pqz7wmce().b[0][0]++, color) || (cov_6pqz7wmce().b[0][1]++, '#44b700');
      },
      color: ({
        color
      }) => {
        cov_6pqz7wmce().f[2]++;
        cov_6pqz7wmce().s[3]++;
        return (cov_6pqz7wmce().b[1][0]++, color) || (cov_6pqz7wmce().b[1][1]++, '#44b700');
      },
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      }
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(1.8)',
        opacity: 0
      }
    }
  };
})((_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1___default())));
const useStyles = (cov_6pqz7wmce().s[4]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => {
  cov_6pqz7wmce().f[3]++;
  cov_6pqz7wmce().s[5]++;
  return {
    root: {
      display: 'flex',
      '& > *': {
        marginLeft: theme.spacing(0.5),
        marginRight: -theme.spacing(0.75)
      }
    }
  };
}));
function BadgeAvatars({
  children,
  color
}) {
  cov_6pqz7wmce().f[4]++;
  const classes = (cov_6pqz7wmce().s[6]++, useStyles());
  cov_6pqz7wmce().s[7]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledBadge, {
      overlap: "circular",
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      variant: "dot",
      color: color,
      children: children
    })
  });
}

/***/ }),

/***/ 38409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dt": () => (/* binding */ reorderObjectProperties),
/* harmony export */   "Ji": () => (/* binding */ FormattedDate),
/* harmony export */   "Ly": () => (/* binding */ FormatStructuredData),
/* harmony export */   "Xv": () => (/* binding */ TextWithLinks),
/* harmony export */   "cl": () => (/* binding */ KeyValue),
/* harmony export */   "h": () => (/* binding */ FormatId),
/* harmony export */   "p6": () => (/* binding */ formatDate),
/* harmony export */   "rU": () => (/* binding */ Link),
/* harmony export */   "tr": () => (/* binding */ SectionBody),
/* harmony export */   "xx": () => (/* binding */ createColumnUiSchema)
/* harmony export */ });
/* unused harmony exports formatTime, formatDateTime, LinkFormatters, SectionHeading */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72105);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45042);
/* harmony import */ var _assets_icons_CopyIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26071);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["text"],
      _excluded2 = ["children"];

function cov_29457fes12() {
  var path = "/workspace/meshplay/ui/components/DataFormatter/index.js";
  var hash = "6c19e5ca1a0ff9e829d64dbd69d278ffe58f52b2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/DataFormatter/index.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 25
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "1": {
        start: {
          line: 17,
          column: 21
        },
        end: {
          line: 17,
          column: 43
        }
      },
      "2": {
        start: {
          line: 24,
          column: 14
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "3": {
        start: {
          line: 25,
          column: 16
        },
        end: {
          line: 25,
          column: 40
        }
      },
      "4": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 87
        }
      },
      "5": {
        start: {
          line: 33,
          column: 26
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "6": {
        start: {
          line: 34,
          column: 18
        },
        end: {
          line: 34,
          column: 69
        }
      },
      "7": {
        start: {
          line: 35,
          column: 24
        },
        end: {
          line: 35,
          column: 75
        }
      },
      "8": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 23
        }
      },
      "9": {
        start: {
          line: 39,
          column: 26
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "10": {
        start: {
          line: 40,
          column: 18
        },
        end: {
          line: 40,
          column: 75
        }
      },
      "11": {
        start: {
          line: 41,
          column: 24
        },
        end: {
          line: 41,
          column: 75
        }
      },
      "12": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 23
        }
      },
      "13": {
        start: {
          line: 45,
          column: 30
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "14": {
        start: {
          line: 46,
          column: 24
        },
        end: {
          line: 46,
          column: 40
        }
      },
      "15": {
        start: {
          line: 47,
          column: 24
        },
        end: {
          line: 47,
          column: 40
        }
      },
      "16": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 51
        }
      },
      "17": {
        start: {
          line: 56,
          column: 29
        },
        end: {
          line: 69,
          column: 1
        }
      },
      "18": {
        start: {
          line: 57,
          column: 2
        },
        end: {
          line: 68,
          column: 4
        }
      },
      "19": {
        start: {
          line: 71,
          column: 24
        },
        end: {
          line: 105,
          column: 1
        }
      },
      "20": {
        start: {
          line: 72,
          column: 30
        },
        end: {
          line: 72,
          column: 51
        }
      },
      "21": {
        start: {
          line: 73,
          column: 16
        },
        end: {
          line: 73,
          column: 26
        }
      },
      "22": {
        start: {
          line: 75,
          column: 26
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "23": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 38
        }
      },
      "24": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 20
        }
      },
      "25": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 81,
          column: 13
        }
      },
      "26": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 23
        }
      },
      "27": {
        start: {
          line: 84,
          column: 22
        },
        end: {
          line: 84,
          column: 52
        }
      },
      "28": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 104,
          column: 4
        }
      },
      "29": {
        start: {
          line: 107,
          column: 36
        },
        end: {
          line: 118,
          column: 1
        }
      },
      "30": {
        start: {
          line: 108,
          column: 2
        },
        end: {
          line: 117,
          column: 9
        }
      },
      "31": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 115,
          column: 6
        }
      },
      "32": {
        start: {
          line: 110,
          column: 25
        },
        end: {
          line: 113,
          column: 7
        }
      },
      "33": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 116,
          column: 18
        }
      },
      "34": {
        start: {
          line: 119,
          column: 20
        },
        end: {
          line: 138,
          column: 1
        }
      },
      "35": {
        start: {
          line: 120,
          column: 2
        },
        end: {
          line: 137,
          column: 4
        }
      },
      "36": {
        start: {
          line: 141,
          column: 2
        },
        end: {
          line: 145,
          column: 3
        }
      },
      "37": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 144,
          column: 5
        }
      },
      "38": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 38
        }
      },
      "39": {
        start: {
          line: 147,
          column: 2
        },
        end: {
          line: 147,
          column: 47
        }
      },
      "40": {
        start: {
          line: 150,
          column: 30
        },
        end: {
          line: 159,
          column: 1
        }
      },
      "41": {
        start: {
          line: 153,
          column: 25
        },
        end: {
          line: 153,
          column: 57
        }
      },
      "42": {
        start: {
          line: 157,
          column: 25
        },
        end: {
          line: 157,
          column: 74
        }
      },
      "43": {
        start: {
          line: 161,
          column: 29
        },
        end: {
          line: 179,
          column: 1
        }
      },
      "44": {
        start: {
          line: 163,
          column: 20
        },
        end: {
          line: 163,
          column: 42
        }
      },
      "45": {
        start: {
          line: 166,
          column: 16
        },
        end: {
          line: 166,
          column: 46
        }
      },
      "46": {
        start: {
          line: 169,
          column: 19
        },
        end: {
          line: 176,
          column: 4
        }
      },
      "47": {
        start: {
          line: 170,
          column: 4
        },
        end: {
          line: 175,
          column: 5
        }
      },
      "48": {
        start: {
          line: 172,
          column: 6
        },
        end: {
          line: 172,
          column: 36
        }
      },
      "49": {
        start: {
          line: 174,
          column: 6
        },
        end: {
          line: 174,
          column: 43
        }
      },
      "50": {
        start: {
          line: 178,
          column: 2
        },
        end: {
          line: 178,
          column: 67
        }
      },
      "51": {
        start: {
          line: 181,
          column: 24
        },
        end: {
          line: 217,
          column: 1
        }
      },
      "52": {
        start: {
          line: 182,
          column: 16
        },
        end: {
          line: 182,
          column: 26
        }
      },
      "53": {
        start: {
          line: 183,
          column: 2
        },
        end: {
          line: 216,
          column: 4
        }
      },
      "54": {
        start: {
          line: 219,
          column: 30
        },
        end: {
          line: 239,
          column: 1
        }
      },
      "55": {
        start: {
          line: 220,
          column: 16
        },
        end: {
          line: 220,
          column: 40
        }
      },
      "56": {
        start: {
          line: 221,
          column: 19
        },
        end: {
          line: 221,
          column: 59
        }
      },
      "57": {
        start: {
          line: 222,
          column: 17
        },
        end: {
          line: 222,
          column: 60
        }
      },
      "58": {
        start: {
          line: 224,
          column: 2
        },
        end: {
          line: 238,
          column: 4
        }
      },
      "59": {
        start: {
          line: 241,
          column: 27
        },
        end: {
          line: 254,
          column: 1
        }
      },
      "60": {
        start: {
          line: 242,
          column: 16
        },
        end: {
          line: 242,
          column: 26
        }
      },
      "61": {
        start: {
          line: 243,
          column: 2
        },
        end: {
          line: 253,
          column: 4
        }
      },
      "62": {
        start: {
          line: 256,
          column: 23
        },
        end: {
          line: 268,
          column: 1
        }
      },
      "63": {
        start: {
          line: 257,
          column: 2
        },
        end: {
          line: 267,
          column: 4
        }
      },
      "64": {
        start: {
          line: 260,
          column: 8
        },
        end: {
          line: 264,
          column: 13
        }
      },
      "65": {
        start: {
          line: 271,
          column: 2
        },
        end: {
          line: 273,
          column: 3
        }
      },
      "66": {
        start: {
          line: 272,
          column: 4
        },
        end: {
          line: 272,
          column: 15
        }
      },
      "67": {
        start: {
          line: 275,
          column: 28
        },
        end: {
          line: 275,
          column: 46
        }
      },
      "68": {
        start: {
          line: 276,
          column: 30
        },
        end: {
          line: 276,
          column: 48
        }
      },
      "69": {
        start: {
          line: 277,
          column: 2
        },
        end: {
          line: 277,
          column: 58
        }
      },
      "70": {
        start: {
          line: 280,
          column: 25
        },
        end: {
          line: 330,
          column: 1
        }
      },
      "71": {
        start: {
          line: 281,
          column: 33
        },
        end: {
          line: 281,
          column: 61
        }
      },
      "72": {
        start: {
          line: 282,
          column: 16
        },
        end: {
          line: 282,
          column: 40
        }
      },
      "73": {
        start: {
          line: 283,
          column: 2
        },
        end: {
          line: 285,
          column: 3
        }
      },
      "74": {
        start: {
          line: 284,
          column: 4
        },
        end: {
          line: 284,
          column: 51
        }
      },
      "75": {
        start: {
          line: 286,
          column: 2
        },
        end: {
          line: 288,
          column: 3
        }
      },
      "76": {
        start: {
          line: 287,
          column: 4
        },
        end: {
          line: 287,
          column: 43
        }
      },
      "77": {
        start: {
          line: 290,
          column: 2
        },
        end: {
          line: 327,
          column: 3
        }
      },
      "78": {
        start: {
          line: 291,
          column: 4
        },
        end: {
          line: 326,
          column: 7
        }
      },
      "79": {
        start: {
          line: 292,
          column: 6
        },
        end: {
          line: 294,
          column: 7
        }
      },
      "80": {
        start: {
          line: 293,
          column: 8
        },
        end: {
          line: 293,
          column: 20
        }
      },
      "81": {
        start: {
          line: 295,
          column: 6
        },
        end: {
          line: 301,
          column: 7
        }
      },
      "82": {
        start: {
          line: 296,
          column: 8
        },
        end: {
          line: 300,
          column: 10
        }
      },
      "83": {
        start: {
          line: 302,
          column: 6
        },
        end: {
          line: 308,
          column: 7
        }
      },
      "84": {
        start: {
          line: 303,
          column: 8
        },
        end: {
          line: 307,
          column: 10
        }
      },
      "85": {
        start: {
          line: 310,
          column: 6
        },
        end: {
          line: 325,
          column: 8
        }
      },
      "86": {
        start: {
          line: 329,
          column: 2
        },
        end: {
          line: 329,
          column: 14
        }
      },
      "87": {
        start: {
          line: 332,
          column: 36
        },
        end: {
          line: 356,
          column: 1
        }
      },
      "88": {
        start: {
          line: 333,
          column: 2
        },
        end: {
          line: 335,
          column: 3
        }
      },
      "89": {
        start: {
          line: 334,
          column: 4
        },
        end: {
          line: 334,
          column: 16
        }
      },
      "90": {
        start: {
          line: 337,
          column: 2
        },
        end: {
          line: 355,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 24,
            column: 14
          },
          end: {
            line: 24,
            column: 15
          }
        },
        loc: {
          start: {
            line: 24,
            column: 32
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 24
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 33,
            column: 26
          },
          end: {
            line: 33,
            column: 27
          }
        },
        loc: {
          start: {
            line: 33,
            column: 36
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 33
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 26
          },
          end: {
            line: 39,
            column: 27
          }
        },
        loc: {
          start: {
            line: 39,
            column: 36
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 39
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 45,
            column: 30
          },
          end: {
            line: 45,
            column: 31
          }
        },
        loc: {
          start: {
            line: 45,
            column: 40
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 45
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 56,
            column: 29
          },
          end: {
            line: 56,
            column: 30
          }
        },
        loc: {
          start: {
            line: 56,
            column: 43
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 56
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 71,
            column: 24
          },
          end: {
            line: 71,
            column: 25
          }
        },
        loc: {
          start: {
            line: 71,
            column: 36
          },
          end: {
            line: 105,
            column: 1
          }
        },
        line: 71
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 75,
            column: 26
          },
          end: {
            line: 75,
            column: 27
          }
        },
        loc: {
          start: {
            line: 75,
            column: 32
          },
          end: {
            line: 82,
            column: 3
          }
        },
        line: 75
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 79,
            column: 15
          },
          end: {
            line: 79,
            column: 16
          }
        },
        loc: {
          start: {
            line: 79,
            column: 21
          },
          end: {
            line: 81,
            column: 5
          }
        },
        line: 79
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 107,
            column: 36
          },
          end: {
            line: 107,
            column: 37
          }
        },
        loc: {
          start: {
            line: 107,
            column: 63
          },
          end: {
            line: 118,
            column: 1
          }
        },
        line: 107
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 108,
            column: 38
          },
          end: {
            line: 108,
            column: 39
          }
        },
        loc: {
          start: {
            line: 108,
            column: 55
          },
          end: {
            line: 117,
            column: 3
          }
        },
        line: 108
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 110,
            column: 6
          },
          end: {
            line: 110,
            column: 7
          }
        },
        loc: {
          start: {
            line: 110,
            column: 25
          },
          end: {
            line: 113,
            column: 7
          }
        },
        line: 110
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 119,
            column: 20
          },
          end: {
            line: 119,
            column: 21
          }
        },
        loc: {
          start: {
            line: 119,
            column: 41
          },
          end: {
            line: 138,
            column: 1
          }
        },
        line: 119
      },
      "12": {
        name: "getFormattedLink",
        decl: {
          start: {
            line: 140,
            column: 9
          },
          end: {
            line: 140,
            column: 25
          }
        },
        loc: {
          start: {
            line: 140,
            column: 31
          },
          end: {
            line: 148,
            column: 1
          }
        },
        line: 140
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 153,
            column: 15
          },
          end: {
            line: 153,
            column: 16
          }
        },
        loc: {
          start: {
            line: 153,
            column: 25
          },
          end: {
            line: 153,
            column: 57
          }
        },
        line: 153
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 157,
            column: 15
          },
          end: {
            line: 157,
            column: 16
          }
        },
        loc: {
          start: {
            line: 157,
            column: 25
          },
          end: {
            line: 157,
            column: 74
          }
        },
        line: 157
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 161,
            column: 29
          },
          end: {
            line: 161,
            column: 30
          }
        },
        loc: {
          start: {
            line: 161,
            column: 63
          },
          end: {
            line: 179,
            column: 1
          }
        },
        line: 161
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 169,
            column: 29
          },
          end: {
            line: 169,
            column: 30
          }
        },
        loc: {
          start: {
            line: 169,
            column: 44
          },
          end: {
            line: 176,
            column: 3
          }
        },
        line: 169
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 181,
            column: 24
          },
          end: {
            line: 181,
            column: 25
          }
        },
        loc: {
          start: {
            line: 181,
            column: 44
          },
          end: {
            line: 217,
            column: 1
          }
        },
        line: 181
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 219,
            column: 30
          },
          end: {
            line: 219,
            column: 31
          }
        },
        loc: {
          start: {
            line: 219,
            column: 58
          },
          end: {
            line: 239,
            column: 1
          }
        },
        line: 219
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 241,
            column: 27
          },
          end: {
            line: 241,
            column: 28
          }
        },
        loc: {
          start: {
            line: 241,
            column: 53
          },
          end: {
            line: 254,
            column: 1
          }
        },
        line: 241
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 256,
            column: 23
          },
          end: {
            line: 256,
            column: 24
          }
        },
        loc: {
          start: {
            line: 256,
            column: 38
          },
          end: {
            line: 268,
            column: 1
          }
        },
        line: 256
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 259,
            column: 17
          },
          end: {
            line: 259,
            column: 18
          }
        },
        loc: {
          start: {
            line: 260,
            column: 8
          },
          end: {
            line: 264,
            column: 13
          }
        },
        line: 260
      },
      "22": {
        name: "reorderObjectProperties",
        decl: {
          start: {
            line: 270,
            column: 16
          },
          end: {
            line: 270,
            column: 39
          }
        },
        loc: {
          start: {
            line: 270,
            column: 52
          },
          end: {
            line: 278,
            column: 1
          }
        },
        line: 270
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 280,
            column: 25
          },
          end: {
            line: 280,
            column: 26
          }
        },
        loc: {
          start: {
            line: 280,
            column: 49
          },
          end: {
            line: 330,
            column: 1
          }
        },
        line: 280
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 291,
            column: 36
          },
          end: {
            line: 291,
            column: 37
          }
        },
        loc: {
          start: {
            line: 291,
            column: 55
          },
          end: {
            line: 326,
            column: 5
          }
        },
        line: 291
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 332,
            column: 36
          },
          end: {
            line: 332,
            column: 37
          }
        },
        loc: {
          start: {
            line: 332,
            column: 85
          },
          end: {
            line: 356,
            column: 1
          }
        },
        line: 332
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 48,
            column: 29
          },
          end: {
            line: 48,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 48,
            column: 29
          },
          end: {
            line: 48,
            column: 42
          }
        }, {
          start: {
            line: 48,
            column: 46
          },
          end: {
            line: 48,
            column: 48
          }
        }],
        line: 48
      },
      "1": {
        loc: {
          start: {
            line: 98,
            column: 22
          },
          end: {
            line: 98,
            column: 49
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 98,
            column: 31
          },
          end: {
            line: 98,
            column: 40
          }
        }, {
          start: {
            line: 98,
            column: 43
          },
          end: {
            line: 98,
            column: 49
          }
        }],
        line: 98
      },
      "2": {
        loc: {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
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
        line: 142
      },
      "3": {
        loc: {
          start: {
            line: 166,
            column: 16
          },
          end: {
            line: 166,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 166,
            column: 16
          },
          end: {
            line: 166,
            column: 40
          }
        }, {
          start: {
            line: 166,
            column: 44
          },
          end: {
            line: 166,
            column: 46
          }
        }],
        line: 166
      },
      "4": {
        loc: {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 175,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 175,
            column: 5
          }
        }, {
          start: {
            line: 173,
            column: 11
          },
          end: {
            line: 175,
            column: 5
          }
        }],
        line: 170
      },
      "5": {
        loc: {
          start: {
            line: 202,
            column: 7
          },
          end: {
            line: 214,
            column: 7
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 203,
            column: 8
          },
          end: {
            line: 203,
            column: 13
          }
        }, {
          start: {
            line: 205,
            column: 8
          },
          end: {
            line: 213,
            column: 10
          }
        }],
        line: 202
      },
      "6": {
        loc: {
          start: {
            line: 241,
            column: 36
          },
          end: {
            line: 241,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 241,
            column: 44
          },
          end: {
            line: 241,
            column: 46
          }
        }],
        line: 241
      },
      "7": {
        loc: {
          start: {
            line: 271,
            column: 2
          },
          end: {
            line: 273,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 271,
            column: 2
          },
          end: {
            line: 273,
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
        line: 271
      },
      "8": {
        loc: {
          start: {
            line: 271,
            column: 6
          },
          end: {
            line: 271,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 271,
            column: 6
          },
          end: {
            line: 271,
            column: 22
          }
        }, {
          start: {
            line: 271,
            column: 26
          },
          end: {
            line: 271,
            column: 37
          }
        }],
        line: 271
      },
      "9": {
        loc: {
          start: {
            line: 283,
            column: 2
          },
          end: {
            line: 285,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 283,
            column: 2
          },
          end: {
            line: 285,
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
        line: 283
      },
      "10": {
        loc: {
          start: {
            line: 286,
            column: 2
          },
          end: {
            line: 288,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 286,
            column: 2
          },
          end: {
            line: 288,
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
        line: 286
      },
      "11": {
        loc: {
          start: {
            line: 290,
            column: 2
          },
          end: {
            line: 327,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 290,
            column: 2
          },
          end: {
            line: 327,
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
        line: 290
      },
      "12": {
        loc: {
          start: {
            line: 292,
            column: 6
          },
          end: {
            line: 294,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 292,
            column: 6
          },
          end: {
            line: 294,
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
        line: 292
      },
      "13": {
        loc: {
          start: {
            line: 292,
            column: 10
          },
          end: {
            line: 292,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 292,
            column: 10
          },
          end: {
            line: 292,
            column: 23
          }
        }, {
          start: {
            line: 292,
            column: 27
          },
          end: {
            line: 292,
            column: 32
          }
        }, {
          start: {
            line: 292,
            column: 36
          },
          end: {
            line: 292,
            column: 51
          }
        }],
        line: 292
      },
      "14": {
        loc: {
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 301,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 301,
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
        line: 295
      },
      "15": {
        loc: {
          start: {
            line: 297,
            column: 46
          },
          end: {
            line: 297,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 297,
            column: 46
          },
          end: {
            line: 297,
            column: 63
          }
        }, {
          start: {
            line: 297,
            column: 67
          },
          end: {
            line: 297,
            column: 69
          }
        }],
        line: 297
      },
      "16": {
        loc: {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 308,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 308,
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
        line: 302
      },
      "17": {
        loc: {
          start: {
            line: 304,
            column: 46
          },
          end: {
            line: 304,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 304,
            column: 46
          },
          end: {
            line: 304,
            column: 63
          }
        }, {
          start: {
            line: 304,
            column: 67
          },
          end: {
            line: 304,
            column: 69
          }
        }],
        line: 304
      },
      "18": {
        loc: {
          start: {
            line: 315,
            column: 15
          },
          end: {
            line: 315,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 315,
            column: 15
          },
          end: {
            line: 315,
            column: 32
          }
        }, {
          start: {
            line: 315,
            column: 36
          },
          end: {
            line: 315,
            column: 38
          }
        }],
        line: 315
      },
      "19": {
        loc: {
          start: {
            line: 332,
            column: 39
          },
          end: {
            line: 332,
            column: 62
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 332,
            column: 60
          },
          end: {
            line: 332,
            column: 62
          }
        }],
        line: 332
      },
      "20": {
        loc: {
          start: {
            line: 333,
            column: 2
          },
          end: {
            line: 335,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 333,
            column: 2
          },
          end: {
            line: 335,
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
        line: 333
      },
      "21": {
        loc: {
          start: {
            line: 333,
            column: 6
          },
          end: {
            line: 333,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 333,
            column: 6
          },
          end: {
            line: 333,
            column: 11
          }
        }, {
          start: {
            line: 333,
            column: 15
          },
          end: {
            line: 333,
            column: 39
          }
        }],
        line: 333
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
      "90": 0
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
      "25": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0],
      "20": [0, 0],
      "21": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6c19e5ca1a0ff9e829d64dbd69d278ffe58f52b2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_29457fes12 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_29457fes12();

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const FormatterContext = (cov_29457fes12().s[0]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  propertyFormatters: {}
}));
/**
 * Context to store the level / depth of content in the formatter
 * @type {React.Context<number>}
 */

const LevelContext = (cov_29457fes12().s[1]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(0));
/**
 * Level context provider to autoincrement the level of content in the formatter
 * @param {React.PropsWithChildren<{}>} param0
 * @returns {React.ReactElement}
 */

cov_29457fes12().s[2]++;

const Level = ({
  children
}) => {
  cov_29457fes12().f[0]++;
  const level = (cov_29457fes12().s[3]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LevelContext));
  cov_29457fes12().s[4]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(LevelContext.Provider, {
    value: level + 1,
    children: [" ", children, " "]
  });
};
/**
 * Pure function to format data
 * @returns {string}
 */


cov_29457fes12().s[5]++;
const formatDate = date => {
  cov_29457fes12().f[1]++;
  const options = (cov_29457fes12().s[6]++, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const formattedDate = (cov_29457fes12().s[7]++, new Date(date).toLocaleDateString('en-US', options));
  cov_29457fes12().s[8]++;
  return formattedDate;
};
cov_29457fes12().s[9]++;
const formatTime = date => {
  cov_29457fes12().f[2]++;
  const options = (cov_29457fes12().s[10]++, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
  const formattedTime = (cov_29457fes12().s[11]++, new Date(date).toLocaleTimeString('en-US', options));
  cov_29457fes12().s[12]++;
  return formattedTime;
};
cov_29457fes12().s[13]++;
const formatDateTime = date => {
  cov_29457fes12().f[3]++;
  const formattedDate = (cov_29457fes12().s[14]++, formatDate(date));
  const formattedTime = (cov_29457fes12().s[15]++, formatTime(date));
  cov_29457fes12().s[16]++;
  return `${formattedDate} ${(cov_29457fes12().b[0][0]++, formattedTime) || (cov_29457fes12().b[0][1]++, '')}`;
};
/**
 * Component to format the date
 * @param {object} param0
 * @returns {React.ReactElement}
 */

cov_29457fes12().s[17]++;
const FormattedDate = ({
  date
}) => {
  cov_29457fes12().f[4]++;
  cov_29457fes12().s[18]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    title: formatDateTime(date),
    placement: "top",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SectionBody, {
        body: formatDate(date),
        style: {
          textTransform: 'capitalize'
        }
      })
    })
  });
};
cov_29457fes12().s[19]++;
const FormatId = ({
  id
}) => {
  cov_29457fes12().f[5]++;
  const [copied, setCopied] = (cov_29457fes12().s[20]++, react__WEBPACK_IMPORTED_MODULE_0__.useState(false));
  const theme = (cov_29457fes12().s[21]++, (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useTheme)()); // truncates the id to 15 characters and adds an ellipsis and adds a clicpboard copy button

  cov_29457fes12().s[22]++;

  const copyToClipboard = () => {
    cov_29457fes12().f[6]++;
    cov_29457fes12().s[23]++;
    navigator.clipboard.writeText(id);
    cov_29457fes12().s[24]++;
    setCopied(true);
    cov_29457fes12().s[25]++;
    setTimeout(() => {
      cov_29457fes12().f[7]++;
      cov_29457fes12().s[26]++;
      setCopied(false);
    }, 2000);
  };

  const truncatedId = (cov_29457fes12().s[27]++, lodash__WEBPACK_IMPORTED_MODULE_3___default().truncate(id, {
    length: 15
  }));
  cov_29457fes12().s[28]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      title: id,
      placement: "top",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        variant: "body2",
        style: {
          cursor: 'pointer',
          color: theme.palette.secondary.text
        },
        children: truncatedId
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      title: copied ? (cov_29457fes12().b[1][0]++, 'Copied!') : (cov_29457fes12().b[1][1]++, 'Copy'),
      placement: "top",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
        onClick: copyToClipboard,
        style: {
          padding: '0.25rem'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_assets_icons_CopyIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: "1rem",
          height: "1rem"
        })
      })
    })]
  });
};
cov_29457fes12().s[29]++;
const createColumnUiSchema = ({
  metadata,
  numCols
}) => {
  cov_29457fes12().f[8]++;
  cov_29457fes12().s[30]++;
  return Object.keys(metadata).reduce((schema, key) => {
    cov_29457fes12().f[9]++;
    cov_29457fes12().s[31]++;
    schema[key] = Object.keys(numCols).reduce((colSpan, key) => {
      cov_29457fes12().f[10]++;
      cov_29457fes12().s[32]++;
      return _objectSpread(_objectSpread({}, colSpan), {}, {
        [key]: Math.floor(12 / numCols[key])
      });
    }, {});
    cov_29457fes12().s[33]++;
    return schema;
  }, {});
};
cov_29457fes12().s[34]++;
const Link = ({
  href,
  title
}) => {
  cov_29457fes12().f[11]++;
  cov_29457fes12().s[35]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit',
      textDecorationLine: 'underline',
      cursor: 'pointer',
      marginBottom: '0.5rem'
    },
    children: [title, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__.Launch, {
        style: {
          width: '1rem',
          height: '1rem'
        }
      })
    })]
  });
};

function getFormattedLink(url) {
  cov_29457fes12().f[12]++;
  cov_29457fes12().s[36]++;

  for (const formatter of Object.values(LinkFormatters)) {
    cov_29457fes12().s[37]++;

    if (url.startsWith(formatter.base_url)) {
      cov_29457fes12().b[2][0]++;
      cov_29457fes12().s[38]++;
      return formatter.formatter(url);
    } else {
      cov_29457fes12().b[2][1]++;
    }
  }

  cov_29457fes12().s[39]++;
  return LinkFormatters.DEFAULT.formatter(url);
}

const LinkFormatters = (cov_29457fes12().s[40]++, {
  DOC: {
    base_url: 'https://docs.meshplay.khulnasoft.com',
    formatter: link => {
      cov_29457fes12().f[13]++;
      cov_29457fes12().s[41]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Link, {
        title: "Doc",
        href: link
      });
    }
  },
  DEFAULT: {
    base_url: '',
    formatter: link => {
      cov_29457fes12().f[14]++;
      cov_29457fes12().s[42]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Link, {
        title: lodash__WEBPACK_IMPORTED_MODULE_3___default().truncate(link, 30),
        href: link
      });
    }
  }
});
cov_29457fes12().s[43]++;
const TextWithLinks = _ref => {
  let {
    text
  } = _ref,
      typographyProps = _objectWithoutProperties(_ref, _excluded);

  cov_29457fes12().f[15]++;
  // Regular expression to find HTTP links in the text
  const linkRegex = (cov_29457fes12().s[44]++, /(https?:\/\/[^\s]+)/g); // Split the text into parts, alternating between text and link components

  const parts = (cov_29457fes12().s[45]++, (cov_29457fes12().b[3][0]++, text?.split?.(linkRegex)) || (cov_29457fes12().b[3][1]++, [])); // Map the parts to React elements

  const elements = (cov_29457fes12().s[46]++, parts.map((part, idx) => {
    cov_29457fes12().f[16]++;
    cov_29457fes12().s[47]++;

    if (part.match(linkRegex)) {
      cov_29457fes12().b[4][0]++;
      cov_29457fes12().s[48]++;
      // If the part is a link, wrap it in a Link component
      return getFormattedLink(part);
    } else {
      cov_29457fes12().b[4][1]++;
      cov_29457fes12().s[49]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
        children: part
      }, idx);
    }
  }));
  cov_29457fes12().s[50]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, _objectSpread(_objectSpread({}, typographyProps), {}, {
    children: [" ", elements]
  }));
};
cov_29457fes12().s[51]++;
const KeyValue = ({
  Key,
  Value
}) => {
  cov_29457fes12().f[17]++;
  const theme = (cov_29457fes12().s[52]++, (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useTheme)());
  cov_29457fes12().s[53]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.25rem',
      flexWrap: 'wrap',
      marginBottom: '1.5rem',
      fontFamily: 'Qanelas Soft, sans-serif'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SectionBody, {
      body: Key.replaceAll('_', ' '),
      style: {
        textTransform: 'capitalize',
        color: theme.palette.text.primary
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(Value) ? (cov_29457fes12().b[5][0]++, Value) : (cov_29457fes12().b[5][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SectionBody, {
      body: Value,
      style: {
        color: theme.palette.text.secondary,
        textOverflow: 'ellipsis',
        wordBreak: 'break-all',
        whiteSpace: 'pre-line'
      }
    }))]
  });
};
cov_29457fes12().s[54]++;
const SectionHeading = _ref2 => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  cov_29457fes12().f[18]++;
  const level = (cov_29457fes12().s[55]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LevelContext));
  const fontSize = (cov_29457fes12().s[56]++, Math.max(0.9, 1.3 - 0.1 * level) + 'rem');
  const margin = (cov_29457fes12().s[57]++, Math.max(0.25, 0.55 - 0.15 * level) + 'rem');
  cov_29457fes12().s[58]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, _objectSpread(_objectSpread({
    variant: "h5",
    style: {
      fontWeight: 'bold !important',
      textTransform: 'capitalize',
      marginBottom: margin,
      wordBreak: 'break-all',
      fontSize
    }
  }, props), {}, {
    children: children
  }));
};
cov_29457fes12().s[59]++;
const SectionBody = ({
  body,
  style = (cov_29457fes12().b[6][0]++, {})
}) => {
  cov_29457fes12().f[19]++;
  const theme = (cov_29457fes12().s[60]++, (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useTheme)());
  cov_29457fes12().s[61]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(TextWithLinks, {
    variant: "body1",
    style: _objectSpread({
      wordWrap: 'break-word',
      color: theme.palette.text.secondary
    }, style),
    text: body
  });
};
cov_29457fes12().s[62]++;

const ArrayFormatter = ({
  items
}) => {
  cov_29457fes12().f[20]++;
  cov_29457fes12().s[63]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ol", {
    style: {
      paddingInline: '0.75rem',
      paddingBlock: '0.25rem',
      margin: '0rem'
    },
    children: items.map(item => {
      cov_29457fes12().f[21]++;
      cov_29457fes12().s[64]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Level, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(DynamicFormatter, {
            data: item
          })
        })
      }, item);
    })
  });
};

function reorderObjectProperties(obj, order) {
  cov_29457fes12().f[22]++;
  cov_29457fes12().s[65]++;

  if ((cov_29457fes12().b[8][0]++, !lodash__WEBPACK_IMPORTED_MODULE_3___default().isObject(obj)) || (cov_29457fes12().b[8][1]++, obj == null)) {
    cov_29457fes12().b[7][0]++;
    cov_29457fes12().s[66]++;
    return obj;
  } else {
    cov_29457fes12().b[7][1]++;
  }

  const orderedProperties = (cov_29457fes12().s[67]++, lodash__WEBPACK_IMPORTED_MODULE_3___default().pick(obj, order));
  const remainingProperties = (cov_29457fes12().s[68]++, lodash__WEBPACK_IMPORTED_MODULE_3___default().omit(obj, order));
  cov_29457fes12().s[69]++;
  return _objectSpread(_objectSpread({}, orderedProperties), remainingProperties);
}
cov_29457fes12().s[70]++;

const DynamicFormatter = ({
  data,
  uiSchema
}) => {
  cov_29457fes12().f[23]++;
  const {
    propertyFormatters
  } = (cov_29457fes12().s[71]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormatterContext));
  const level = (cov_29457fes12().s[72]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LevelContext));
  cov_29457fes12().s[73]++;

  if (lodash__WEBPACK_IMPORTED_MODULE_3___default().isString(data)) {
    cov_29457fes12().b[9][0]++;
    cov_29457fes12().s[74]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SectionBody, {
      body: data
    });
  } else {
    cov_29457fes12().b[9][1]++;
  }

  cov_29457fes12().s[75]++;

  if (lodash__WEBPACK_IMPORTED_MODULE_3___default().isArray(data)) {
    cov_29457fes12().b[10][0]++;
    cov_29457fes12().s[76]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(ArrayFormatter, {
      items: data
    });
  } else {
    cov_29457fes12().b[10][1]++;
  }

  cov_29457fes12().s[77]++;

  if (lodash__WEBPACK_IMPORTED_MODULE_3___default().isObject(data)) {
    cov_29457fes12().b[11][0]++;
    cov_29457fes12().s[78]++;
    return Object.entries(data).map(([title, data]) => {
      cov_29457fes12().f[24]++;
      cov_29457fes12().s[79]++;

      if ((cov_29457fes12().b[13][0]++, !title.trim()) || (cov_29457fes12().b[13][1]++, !data) || (cov_29457fes12().b[13][2]++, lodash__WEBPACK_IMPORTED_MODULE_3___default().isEmpty(data))) {
        cov_29457fes12().b[12][0]++;
        cov_29457fes12().s[80]++;
        return null;
      } else {
        cov_29457fes12().b[12][1]++;
      }

      cov_29457fes12().s[81]++;

      if (propertyFormatters?.[title]) {
        cov_29457fes12().b[14][0]++;
        cov_29457fes12().s[82]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, _objectSpread(_objectSpread({
          item: true,
          sm: 12
        }, (cov_29457fes12().b[15][0]++, uiSchema?.[title]) || (cov_29457fes12().b[15][1]++, {})), {}, {
          children: propertyFormatters[title](data, data)
        }), title);
      } else {
        cov_29457fes12().b[14][1]++;
      }

      cov_29457fes12().s[83]++;

      if (typeof data == 'string') {
        cov_29457fes12().b[16][0]++;
        cov_29457fes12().s[84]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, _objectSpread(_objectSpread({
          item: true,
          sm: 12
        }, (cov_29457fes12().b[17][0]++, uiSchema?.[title]) || (cov_29457fes12().b[17][1]++, {})), {}, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(KeyValue, {
            Key: title,
            Value: data
          }, title)
        }), title);
      } else {
        cov_29457fes12().b[16][1]++;
      }

      cov_29457fes12().s[85]++;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, _objectSpread(_objectSpread({
        item: true,
        sm: 12
      }, (cov_29457fes12().b[18][0]++, uiSchema?.[title]) || (cov_29457fes12().b[18][1]++, {})), {}, {
        style: {
          marginBlock: '0.25rem'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SectionHeading, {
          level: level,
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Level, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(DynamicFormatter, {
            level: level + 1,
            data: data
          })
        })]
      }), title);
    });
  } else {
    cov_29457fes12().b[11][1]++;
  }

  cov_29457fes12().s[86]++;
  return null;
};

cov_29457fes12().s[87]++;
const FormatStructuredData = ({
  propertyFormatters = (cov_29457fes12().b[19][0]++, {}),
  data,
  uiSchema
}) => {
  cov_29457fes12().f[25]++;
  cov_29457fes12().s[88]++;

  if ((cov_29457fes12().b[21][0]++, !data) || (cov_29457fes12().b[21][1]++, (0,_utils_objects__WEBPACK_IMPORTED_MODULE_4__/* .isEmptyAtAllDepths */ .Yf)(data))) {
    cov_29457fes12().b[20][0]++;
    cov_29457fes12().s[89]++;
    return null;
  } else {
    cov_29457fes12().b[20][1]++;
  }

  cov_29457fes12().s[90]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(FormatterContext.Provider, {
      value: {
        propertyFormatters: propertyFormatters
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        style: {
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(DynamicFormatter, {
          data: data,
          uiSchema: uiSchema
        })
      })
    })
  });
};

/***/ })

};
;