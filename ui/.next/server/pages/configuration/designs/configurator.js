"use strict";
(() => {
var exports = {};
exports.id = 3463;
exports.ids = [3463];
exports.modules = {

/***/ 41476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68885);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1188);
/* harmony import */ var _components_configuratorComponents_MeshModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63083);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_configuratorComponents_MeshModel__WEBPACK_IMPORTED_MODULE_7__]);
_components_configuratorComponents_MeshModel__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_2gizm7vphc() {
  var path = "/workspace/meshplay/ui/pages/configuration/designs/configurator.js";
  var hash = "34ccfa63b6f50f3da5bf5461bb8a093b5333cd1a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/pages/configuration/designs/configurator.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "2": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 81
        }
      },
      "3": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 51
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 38
        }
      },
      "5": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 32,
          column: 4
        }
      },
      "6": {
        start: {
          line: 35,
          column: 27
        },
        end: {
          line: 39,
          column: 2
        }
      },
      "7": {
        start: {
          line: 35,
          column: 42
        },
        end: {
          line: 39,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "DesignConfiguratorPage",
        decl: {
          start: {
            line: 18,
            column: 9
          },
          end: {
            line: 18,
            column: 31
          }
        },
        loc: {
          start: {
            line: 18,
            column: 86
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 12
          },
          end: {
            line: 19,
            column: 13
          }
        },
        loc: {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 27
          },
          end: {
            line: 35,
            column: 28
          }
        },
        loc: {
          start: {
            line: 35,
            column: 42
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 35
      }
    },
    branchMap: {},
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
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "34ccfa63b6f50f3da5bf5461bb8a093b5333cd1a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2gizm7vphc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2gizm7vphc();










const styles = (cov_2gizm7vphc().s[0]++, {
  paper: {
    maxWidth: '90%',
    margin: 'auto',
    overflow: 'hidden'
  }
});

function DesignConfiguratorPage({
  updatepagepath,
  updatepagetitle,
  updatebetabadge
}) {
  cov_2gizm7vphc().f[0]++;
  cov_2gizm7vphc().s[1]++;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    cov_2gizm7vphc().f[1]++;
    cov_2gizm7vphc().s[2]++;
    updatepagepath({
      path: (0,_lib_path__WEBPACK_IMPORTED_MODULE_6__/* .getPath */ .D)(),
      isBeta: true,
      title: 'Configure Design'
    });
    cov_2gizm7vphc().s[3]++;
    updatepagetitle({
      title: 'Configure Design'
    });
    cov_2gizm7vphc().s[4]++;
    updatebetabadge({
      isBeta: true
    });
  }, []);
  cov_2gizm7vphc().s[5]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.NoSsr, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("title", {
        children: "Designs Configurator"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_configuratorComponents_MeshModel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})]
  });
}

cov_2gizm7vphc().s[6]++;

const mapDispatchToProps = dispatch => {
  cov_2gizm7vphc().f[2]++;
  cov_2gizm7vphc().s[7]++;
  return {
    updatepagepath: (0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_2__/* .updatepagepath */ .Fb, dispatch),
    updatepagetitle: (0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_2__/* .updatepagetitle */ .Tz, dispatch),
    updatebetabadge: (0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_2__/* .updatebetabadge */ .Ms, dispatch)
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)(DesignConfiguratorPage)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TooltipButton)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children", "onClick", "title", "variant"];

function cov_2ksvmq2mpa() {
  var path = "/workspace/meshplay/ui/utils/TooltipButton.js";
  var hash = "1ca313be566c6be9b068cdb64e0afc069817056a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/utils/TooltipButton.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 11,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "TooltipButton",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 37
          }
        },
        loc: {
          start: {
            line: 4,
            column: 87
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1ca313be566c6be9b068cdb64e0afc069817056a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ksvmq2mpa = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ksvmq2mpa();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function TooltipButton(_ref) {
  let {
    children,
    onClick,
    title,
    variant
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  cov_2ksvmq2mpa().f[0]++;
  cov_2ksvmq2mpa().s[0]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.CustomTooltip, {
    title: title,
    placement: "top",
    interactive: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, _objectSpread(_objectSpread({
      variant: variant,
      onClick: onClick
    }, props), {}, {
      children: children
    }))
  });
}

/***/ }),

/***/ 7352:
/***/ ((module) => {

module.exports = require("@khulnasoft/sistent");

/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 33700:
/***/ ((module) => {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ 30362:
/***/ ((module) => {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ 71467:
/***/ ((module) => {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),

/***/ 40124:
/***/ ((module) => {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ 75811:
/***/ ((module) => {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ 13266:
/***/ ((module) => {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ 93302:
/***/ ((module) => {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ 68190:
/***/ ((module) => {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ 40640:
/***/ ((module) => {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ 54104:
/***/ ((module) => {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 55223:
/***/ ((module) => {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ 48308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 89957:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles/createBreakpoints");

/***/ }),

/***/ 72105:
/***/ ((module) => {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ 3935:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ 17501:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ 15652:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ 15079:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ErrorOutline");

/***/ }),

/***/ 27806:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 302:
/***/ ((module) => {

module.exports = require("@material-ui/icons/HelpOutline");

/***/ }),

/***/ 60140:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Save");

/***/ }),

/***/ 19192:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ 43349:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 47915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 56807:
/***/ ((module) => {

module.exports = require("@redux-devtools/extension");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 34335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 64086:
/***/ ((module) => {

module.exports = require("@rjsf/core");

/***/ }),

/***/ 21252:
/***/ ((module) => {

module.exports = require("@rjsf/material-ui");

/***/ }),

/***/ 73722:
/***/ ((module) => {

module.exports = require("@rjsf/utils");

/***/ }),

/***/ 13192:
/***/ ((module) => {

module.exports = require("@rjsf/validator-ajv8");

/***/ }),

/***/ 45572:
/***/ ((module) => {

module.exports = require("immutable");

/***/ }),

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 19710:
/***/ ((module) => {

module.exports = require("lodash/fp");

/***/ }),

/***/ 32245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 73142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 40420:
/***/ ((module) => {

module.exports = require("pluralize");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-codemirror2");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ 25828:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 66583:
/***/ ((module) => {

module.exports = import("@casl/ability");;

/***/ }),

/***/ 12134:
/***/ ((module) => {

module.exports = import("isomorphic-unfetch");;

/***/ }),

/***/ 10626:
/***/ ((module) => {

module.exports = import("js-yaml");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8885,3113,7533,5516,3114,5484,6811,6815,1188,4921,1029,2204,1104,7526,5299,1285,2320,3083], () => (__webpack_exec__(41476)));
module.exports = __webpack_exports__;

})();