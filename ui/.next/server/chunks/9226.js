"use strict";
exports.id = 9226;
exports.ids = [9226,7842];
exports.modules = {

/***/ 22162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["height", "width", "fill"];

function cov_17u4zgn990() {
  var path = "/workspace/meshplay/ui/assets/icons/PatternConfigure.js";
  var hash = "133531e907a4c4e942ff69093bbe41b555b1dd78";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/PatternConfigure.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 29
        },
        end: {
          line: 59,
          column: 1
        }
      },
      "1": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 58,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 29
          },
          end: {
            line: 2,
            column: 30
          }
        },
        loc: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 58,
            column: 8
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 32
          },
          end: {
            line: 2,
            column: 45
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 2,
            column: 41
          },
          end: {
            line: 2,
            column: 45
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 2,
            column: 47
          },
          end: {
            line: 2,
            column: 59
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 2,
            column: 55
          },
          end: {
            line: 2,
            column: 59
          }
        }],
        line: 2
      },
      "2": {
        loc: {
          start: {
            line: 2,
            column: 61
          },
          end: {
            line: 2,
            column: 82
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 2,
            column: 68
          },
          end: {
            line: 2,
            column: 82
          }
        }],
        line: 2
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
    hash: "133531e907a4c4e942ff69093bbe41b555b1dd78"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17u4zgn990 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_17u4zgn990();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




cov_17u4zgn990().s[0]++;

const PatternConfigureIcon = _ref => {
  let {
    height = (cov_17u4zgn990().b[0][0]++, '24'),
    width = (cov_17u4zgn990().b[1][0]++, '24'),
    fill = (cov_17u4zgn990().b[2][0]++, 'currentColor')
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  cov_17u4zgn990().f[0]++;
  cov_17u4zgn990().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({
    id: "Capa_1",
    "data-name": "Capa 1",
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "0 0 512 512",
    fill: fill
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("defs", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("style", {
        children: ".cls-1{fill:fill;}.cls-2{fill:fill;}.cls-3{fill:white;stroke:none;stroke-miterlimit:10;stroke-width:10px;}.cls-4{fill:fill;}"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
      children: "pattern-configure-color"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      className: "cls-1",
      d: "M337.18,102.41c10,12.47,17.31,26.45,22.92,41.3,7.23,19.15,10.52,39.07,6.4,59.27-5.55,27.11-21.4,46.2-47.92,55.38-10.3,3.56-21,5-31.64.54a14.45,14.45,0,0,1-4.07-2.22,26.72,26.72,0,0,1-6.73,17.12,16,16,0,0,1,4.37-1.25c1.47-.27,2.95-.48,4.44-.61,14.19-1.17,27.85-4.17,40.82-10.37,20-9.59,36.76-23.25,51-40.14A137.44,137.44,0,0,0,397,190.08a173.76,173.76,0,0,0,14.29-52.66c1.83-15.69,1.34-31.08-.23-46.62-.38-3.75-2-5.3-5.37-5.9-8.67-1.54-17.34-3.27-25.85-5.34-22.28-5.41-44.74-10-67.06-15.16-7.94-1.85-15.92-3.52-23.87-5.28,5.84,5.57,12.11,10.15,18.18,15C317.88,82.7,328.5,91.53,337.18,102.41Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      className: "cls-2",
      d: "M91.93,295.5c6.84-28.72,18.13-55.07,41.46-74.49,21.25-17.69,45.32-23.2,71.83-14,13.39,4.63,24.86,12.12,31,25.73a14.72,14.72,0,0,1,1.29,3.81,26.71,26.71,0,0,1,15.19-7.2c-.35-.23-.71-.49-1.11-.81-8.15-6.55-15.88-13.68-25.34-18.5-33.63-17.13-68.94-19.34-104.84-10.2C83.32,209.51,53.9,232.6,29.74,263c-2.71,3.41-2.49,5.61-.26,9.06,18.74,29.12,37.27,58.36,55.88,87.56,2.46,3.87,5,7.67,8.38,12.77.36-8.61-1.47-15.49-2.43-22.42C88.78,331.75,87.62,313.61,91.93,295.5Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      className: "cls-2",
      d: "M149.24,93.39a351,351,0,0,1,39.06-4.32c11.88-.65,23.48,1.69,34.95,4.69,27.18,7.11,51.55,19,69.42,41.51,17.07,21.46,21.16,45.54,12,71.36-4.68,13.2-12.59,24.16-26.1,30.1a7.79,7.79,0,0,1-3.05.81,26.73,26.73,0,0,1,7.22,15.73,21.54,21.54,0,0,1,2.05-2.77c9.91-11.77,18.87-24.12,24-38.86a153.77,153.77,0,0,0,8.27-60.26,147.12,147.12,0,0,0-14.83-57.52c-12.63-25.47-30.8-46.43-53-64.06-3.31-2.63-5.71-2.32-9.16-.1-28.56,18.37-57.29,36.48-85.9,54.77-4.45,2.84-9.21,5.31-13.51,9.34A38.32,38.32,0,0,0,149.24,93.39Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      className: "cls-1",
      d: "M68.9,211.74c11.25-14.22,22-28.93,37.12-39.45,28-19.42,58.24-32,93-27.16,28,3.92,48.24,19.19,58.35,46.17,4.34,11.59,5.7,23.57.62,35.54a11,11,0,0,1-1.25,2.29,26.7,26.7,0,0,1,15.82,5.7,11.21,11.21,0,0,1-.28-1.2,44.22,44.22,0,0,1-.39-4.46c-.89-11.81-2.82-23.37-7.06-34.54-9-23.68-24.39-42.47-43.38-58.82-28-24.11-61-34.45-97.23-35.83-10.28-.39-20.6-.49-30.9.85-7.11.93-7.65,1-9.18,8q-9.92,45.29-19.91,90.57c-1.73,7.87-3.42,15.74-5.37,24.72C63.46,220,65.86,215.59,68.9,211.74Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      className: "cls-2",
      d: "M482.56,240.26c-18.8-29.26-37.39-58.66-56.16-87.94-2.5-3.88-4.48-8.22-8.65-12.52,1.2,10.21,2.07,19.1,3.33,27.94,2.62,18.44,2.6,36.71-2.28,54.85-7.65,28.5-20.4,53.82-44.38,72.22-13.13,10.08-28.32,14.7-44.65,14.91-11.45.15-22.34-3.16-32.48-8.59-8.83-4.74-16.36-10.9-20.8-20.16-1.4-2.93-2-4.7-1.55-5.89a26.8,26.8,0,0,1-16,7.65,38.17,38.17,0,0,1,4.5,3.36c8.39,6.82,16.79,13.65,26.66,18.35,27.51,13.07,56.59,15.85,86.18,11.19,44.63-7,78.45-32.09,106.19-66.53C485,246,484.67,243.54,482.56,240.26Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      className: "cls-1",
      d: "M423.4,324.6c-27.68,27.8-60.82,43.33-100.72,43.44-27.83.08-57.31-18.2-67.2-45-4.09-11.1-6.81-22.36-2.6-34.06,1.12-3.1,1.88-5.07,2.73-6.06a26.8,26.8,0,0,1-16.6-6,18.29,18.29,0,0,1,.92,4.63c.88,8.58,1.33,17.28,3.9,25.57,13.7,44.19,43.16,74.42,84.79,92.74,26.6,11.7,54.91,15.27,84,12.25,13-1.36,13.08-1.12,15.66-12.51,7.15-31.44,14.33-62.88,21.25-94.37,1.16-5.3,3.27-10.54,3.17-17.38-1.64,2.21-2.52,3.37-3.36,4.56C441.26,303.57,433.12,314.84,423.4,324.6Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      className: "cls-1",
      d: "M179.53,415.38c-12.69-14.24-21.77-30.69-28.08-48.55-6-17.07-9.53-34.62-6.66-52.9,4.16-26.56,17.64-46.41,42.46-57.5,12.05-5.39,24.71-7.94,37.8-2.92a18.8,18.8,0,0,1,4.08,1.92,26.73,26.73,0,0,1,5.62-15.9,23.45,23.45,0,0,1-3.21.42,165,165,0,0,0-21.23,2.7c-24.22,5.14-44.33,17.82-62,34.53-23.55,22.23-38.71,49.24-45.08,81.15-3.86,19.38-4.4,38.82-2.93,58.46.56,7.58,3.7,10.29,11.3,11.83,31.75,6.45,63.29,14,95,20.88,5.39,1.18,10.69,3.18,17.82,3.4-5.19-4-9.22-7.06-13.26-10.13C200,434.31,188.86,425.85,179.53,415.38Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      className: "cls-2",
      d: "M368.85,418c-11.29,2-22.65,3.38-34.05,4.48-9.31.9-18.76,1.36-27.91,0A157.25,157.25,0,0,1,268.5,412c-19.14-8-36.5-18.59-49.37-35.3-15.54-20.17-20.78-42.64-13.13-67.17,4.34-13.88,11.47-26.27,25.53-33,2.5-1.19,4.22-1.75,5.43-1.58a26.77,26.77,0,0,1-7.63-15.65,31.49,31.49,0,0,1-2,2.59c-6.47,7.81-13.08,15.52-17.77,24.63-11.31,22-15.45,45.39-14.83,70a144.66,144.66,0,0,0,11,52.87c12.17,29,31.52,52.61,56.07,72.15,3.83,3.06,6.59,3.38,10.88.59,24.72-16,49.67-31.72,74.53-47.53,8.22-5.24,16.42-10.52,24.74-15.86A3.06,3.06,0,0,0,368.85,418Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
      className: "cls-3",
      cx: 398.49,
      cy: 388.49,
      r: 103.51
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      className: "cls-4",
      d: "M397.44,318c7.86,0,7.85,0,10.46,7.39,1.16,3.29,2.2,6.62,3.59,9.81a8,8,0,0,0,2.91,3.16c6,3.91,11.84,4,17.78-.37a38.35,38.35,0,0,1,8-4,3.26,3.26,0,0,1,2.87.31c3.08,2.8,6.05,5.73,8.88,8.8a3.29,3.29,0,0,1,.1,2.86c-2.15,4.81-4.43,9.57-6.74,14.31a6.56,6.56,0,0,0-.18,4.82c1.69,7.08,6,10.89,13.11,12.13a57.3,57.3,0,0,1,9.73,3,3.12,3.12,0,0,1,1.75,2.16c.17,3.9,0,7.83.11,11.74,0,1.67-.9,2.15-2.22,2.59-5.41,1.78-10.78,3.66-16.2,5.4a6,6,0,0,0-3.43,3.05c-3.66,6.12-3.84,11.89.54,17.82,1.75,2.35,2.69,5.3,4.13,7.9a2.33,2.33,0,0,1-.57,3.31c-2.8,2.61-5.55,5.27-8.22,8a2.48,2.48,0,0,1-3.35.55c-4.89-2.4-9.79-4.77-14.79-6.93a7.27,7.27,0,0,0-4-.08c-7.42,1.45-11.39,6.11-12.59,13.51-.41,2.57-1.64,5-2.34,7.54-.47,1.71-1.41,2.26-3.13,2.22q-5.49-.15-11,0a2.79,2.79,0,0,1-3.12-2.27c-1.63-4.84-3.4-9.62-5.12-14.43-.14-.4-.28-.8-.44-1.19-1.2-2.89-11.53-6.53-14.3-5.1-4.69,2.42-9.43,4.72-14.09,7.18a2.36,2.36,0,0,1-3.31-.58c-2.72-2.81-5.5-5.57-8.35-8.25-1.12-1.05-1-1.94-.37-3.14,2.4-5,4.8-10,7-15a7.33,7.33,0,0,0,.11-3.59,9.72,9.72,0,0,0-.91-2.37c-3.06-7.38-3.07-7.37-10.75-9.78-3.24-1-6.45-2.14-9.71-3.1a2.45,2.45,0,0,1-2-2.75c.07-3.83.08-7.66,0-11.49a2.54,2.54,0,0,1,2-2.77c5-1.73,9.92-3.58,14.91-5.26a5.19,5.19,0,0,0,3.62-3.57,13.78,13.78,0,0,1,1.47-3.53c2.54-3.8,1.64-7.22-.56-10.83-2.06-3.41-3.64-7.11-5.57-10.61-.86-1.56-.62-2.54.67-3.72a106.14,106.14,0,0,0,7.56-7.59c1.44-1.62,2.6-1.55,4.38-.65,4.54,2.32,9.15,4.55,13.84,6.54a8.16,8.16,0,0,0,4.55.16c7-1.48,11.2-5.56,12.24-12.88.38-2.73,1.81-5.3,2.51-8,.51-2,1.57-2.58,3.48-2.44C394,318.1,395.74,318,397.44,318Zm23.26,70.76a23.06,23.06,0,0,0-22.84-23.23,23,23,0,0,0-.4,45.93C410.43,411.49,420.68,401.48,420.7,388.76Z"
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternConfigureIcon);

/***/ }),

/***/ 79226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17501);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15652);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1772);
/* harmony import */ var _material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92211);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64715);
/* harmony import */ var _material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60140);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MeshplayPatterns_CustomToolbarSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48460);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56518);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7051);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(68885);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51104);
/* harmony import */ var _ViewSwitch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87402);
/* harmony import */ var _MeshplayPatterns_MeshplayPatternGridView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(40692);
/* harmony import */ var _public_static_img_UndeployIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48696);
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(77605);
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(34369);
/* harmony import */ var _material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Publish__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(55015);
/* harmony import */ var _material_ui_icons_Publish__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Publish__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _PromptComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(21924);
/* harmony import */ var _LoadingComponents_LoadingComponent__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(10000);
/* harmony import */ var _utils_Enum__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(46811);
/* harmony import */ var _public_static_img_CloneIcon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(19084);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(39151);
/* harmony import */ var _utils_fileDownloader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(95081);
/* harmony import */ var _graphql_subscriptions_ConfigurationSubscription__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(38543);
/* harmony import */ var _public_static_img_drawer_icons_pattern_svg_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(65681);
/* harmony import */ var _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(93113);
/* harmony import */ var _lib_event_types__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(42880);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _api_meshmodel__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(5299);
/* harmony import */ var _assets_styles_general_tool_styles__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(8716);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(72105);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _utils_responsive_column__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(80661);
/* harmony import */ var _utils_dimension__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(37842);
/* harmony import */ var _Modals_Information_InfoModal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(91898);
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(7929);
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _connections_common_index_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(436);
/* harmony import */ var _General_error_404_index__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(17436);
/* harmony import */ var _utils_can__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(54872);
/* harmony import */ var _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(24018);
/* harmony import */ var _ExportModal__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(26652);
/* harmony import */ var _assets_icons_Pattern__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(76445);
/* harmony import */ var _SistentWrapper__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(75516);
/* harmony import */ var _assets_icons_DryRunIcon__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(72210);
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(93044);
/* harmony import */ var machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(58349);
/* harmony import */ var _DesignLifeCycle_DeployStepper__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(39777);
/* harmony import */ var _DesignLifeCycle_DryRun__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(89671);
/* harmony import */ var _DesignLifeCycle_common__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(90856);
/* harmony import */ var _rtk_query_design__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(62);
/* harmony import */ var _assets_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(39554);
/* harmony import */ var _DesignLifeCycle_ValidateDesign__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(48421);
/* harmony import */ var _assets_icons_PatternConfigure__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(22162);
/* harmony import */ var _rtk_query_user__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(67976);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MeshplayPatterns_CustomToolbarSelect__WEBPACK_IMPORTED_MODULE_9__, _utils_utils__WEBPACK_IMPORTED_MODULE_17__, _MeshplayPatterns_MeshplayPatternGridView__WEBPACK_IMPORTED_MODULE_19__, _Modal__WEBPACK_IMPORTED_MODULE_29__, _graphql_subscriptions_ConfigurationSubscription__WEBPACK_IMPORTED_MODULE_31__, _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_33__, _api_meshmodel__WEBPACK_IMPORTED_MODULE_36__, _Modals_Information_InfoModal__WEBPACK_IMPORTED_MODULE_41__, _General_error_404_index__WEBPACK_IMPORTED_MODULE_44__, _utils_can__WEBPACK_IMPORTED_MODULE_45__, _xstate_react__WEBPACK_IMPORTED_MODULE_51__, machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_52__, _DesignLifeCycle_DeployStepper__WEBPACK_IMPORTED_MODULE_53__, _DesignLifeCycle_DryRun__WEBPACK_IMPORTED_MODULE_54__, _DesignLifeCycle_common__WEBPACK_IMPORTED_MODULE_55__, _DesignLifeCycle_ValidateDesign__WEBPACK_IMPORTED_MODULE_58__]);
([_MeshplayPatterns_CustomToolbarSelect__WEBPACK_IMPORTED_MODULE_9__, _utils_utils__WEBPACK_IMPORTED_MODULE_17__, _MeshplayPatterns_MeshplayPatternGridView__WEBPACK_IMPORTED_MODULE_19__, _Modal__WEBPACK_IMPORTED_MODULE_29__, _graphql_subscriptions_ConfigurationSubscription__WEBPACK_IMPORTED_MODULE_31__, _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_33__, _api_meshmodel__WEBPACK_IMPORTED_MODULE_36__, _Modals_Information_InfoModal__WEBPACK_IMPORTED_MODULE_41__, _General_error_404_index__WEBPACK_IMPORTED_MODULE_44__, _utils_can__WEBPACK_IMPORTED_MODULE_45__, _xstate_react__WEBPACK_IMPORTED_MODULE_51__, machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_52__, _DesignLifeCycle_DeployStepper__WEBPACK_IMPORTED_MODULE_53__, _DesignLifeCycle_DryRun__WEBPACK_IMPORTED_MODULE_54__, _DesignLifeCycle_common__WEBPACK_IMPORTED_MODULE_55__, _DesignLifeCycle_ValidateDesign__WEBPACK_IMPORTED_MODULE_58__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["index"],
      _excluded2 = ["index"],
      _excluded3 = ["index"],
      _excluded4 = ["index"],
      _excluded5 = ["index"];

function cov_8308hf9j4() {
  var path = "/workspace/meshplay/ui/components/MeshplayPatterns.js";
  var hash = "044d9d5dee5415703bc5d1f8da541cfd474430c7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayPatterns.js",
    statementMap: {
      "0": {
        start: {
          line: 106,
          column: 28
        },
        end: {
          line: 109,
          column: 1
        }
      },
      "1": {
        start: {
          line: 107,
          column: 2
        },
        end: {
          line: 107,
          column: 23
        }
      },
      "2": {
        start: {
          line: 108,
          column: 2
        },
        end: {
          line: 108,
          column: 9
        }
      },
      "3": {
        start: {
          line: 111,
          column: 15
        },
        end: {
          line: 226,
          column: 2
        }
      },
      "4": {
        start: {
          line: 111,
          column: 27
        },
        end: {
          line: 226,
          column: 1
        }
      },
      "5": {
        start: {
          line: 229,
          column: 2
        },
        end: {
          line: 233,
          column: 4
        }
      },
      "6": {
        start: {
          line: 237,
          column: 18
        },
        end: {
          line: 237,
          column: 29
        }
      },
      "7": {
        start: {
          line: 238,
          column: 26
        },
        end: {
          line: 238,
          column: 56
        }
      },
      "8": {
        start: {
          line: 239,
          column: 38
        },
        end: {
          line: 239,
          column: 53
        }
      },
      "9": {
        start: {
          line: 241,
          column: 27
        },
        end: {
          line: 243,
          column: 3
        }
      },
      "10": {
        start: {
          line: 242,
          column: 4
        },
        end: {
          line: 242,
          column: 31
        }
      },
      "11": {
        start: {
          line: 245,
          column: 2
        },
        end: {
          line: 340,
          column: 4
        }
      },
      "12": {
        start: {
          line: 293,
          column: 38
        },
        end: {
          line: 293,
          column: 50
        }
      },
      "13": {
        start: {
          line: 306,
          column: 18
        },
        end: {
          line: 312,
          column: 20
        }
      },
      "14": {
        start: {
          line: 324,
          column: 18
        },
        end: {
          line: 330,
          column: 20
        }
      },
      "15": {
        start: {
          line: 344,
          column: 2
        },
        end: {
          line: 344,
          column: 40
        }
      },
      "16": {
        start: {
          line: 360,
          column: 26
        },
        end: {
          line: 360,
          column: 37
        }
      },
      "17": {
        start: {
          line: 361,
          column: 30
        },
        end: {
          line: 361,
          column: 42
        }
      },
      "18": {
        start: {
          line: 362,
          column: 36
        },
        end: {
          line: 362,
          column: 48
        }
      },
      "19": {
        start: {
          line: 363,
          column: 28
        },
        end: {
          line: 363,
          column: 39
        }
      },
      "20": {
        start: {
          line: 364,
          column: 34
        },
        end: {
          line: 364,
          column: 46
        }
      },
      "21": {
        start: {
          line: 365,
          column: 19
        },
        end: {
          line: 365,
          column: 27
        }
      },
      "22": {
        start: {
          line: 366,
          column: 34
        },
        end: {
          line: 366,
          column: 46
        }
      },
      "23": {
        start: {
          line: 367,
          column: 48
        },
        end: {
          line: 367,
          column: 62
        }
      },
      "24": {
        start: {
          line: 368,
          column: 48
        },
        end: {
          line: 368,
          column: 80
        }
      },
      "25": {
        start: {
          line: 369,
          column: 17
        },
        end: {
          line: 369,
          column: 28
        }
      },
      "26": {
        start: {
          line: 370,
          column: 38
        },
        end: {
          line: 370,
          column: 50
        }
      },
      "27": {
        start: {
          line: 371,
          column: 48
        },
        end: {
          line: 371,
          column: 72
        }
      },
      "28": {
        start: {
          line: 373,
          column: 52
        },
        end: {
          line: 373,
          column: 67
        }
      },
      "29": {
        start: {
          line: 374,
          column: 44
        },
        end: {
          line: 374,
          column: 56
        }
      },
      "30": {
        start: {
          line: 375,
          column: 36
        },
        end: {
          line: 379,
          column: 4
        }
      },
      "31": {
        start: {
          line: 380,
          column: 50
        },
        end: {
          line: 380,
          column: 65
        }
      },
      "32": {
        start: {
          line: 381,
          column: 34
        },
        end: {
          line: 381,
          column: 50
        }
      },
      "33": {
        start: {
          line: 382,
          column: 21
        },
        end: {
          line: 382,
          column: 38
        }
      },
      "34": {
        start: {
          line: 383,
          column: 21
        },
        end: {
          line: 383,
          column: 32
        }
      },
      "35": {
        start: {
          line: 384,
          column: 50
        },
        end: {
          line: 384,
          column: 64
        }
      },
      "36": {
        start: {
          line: 386,
          column: 34
        },
        end: {
          line: 386,
          column: 60
        }
      },
      "37": {
        start: {
          line: 387,
          column: 36
        },
        end: {
          line: 387,
          column: 64
        }
      },
      "38": {
        start: {
          line: 392,
          column: 6
        },
        end: {
          line: 398,
          column: 4
        }
      },
      "39": {
        start: {
          line: 399,
          column: 25
        },
        end: {
          line: 399,
          column: 50
        }
      },
      "40": {
        start: {
          line: 400,
          column: 27
        },
        end: {
          line: 400,
          column: 54
        }
      },
      "41": {
        start: {
          line: 401,
          column: 29
        },
        end: {
          line: 401,
          column: 58
        }
      },
      "42": {
        start: {
          line: 402,
          column: 26
        },
        end: {
          line: 402,
          column: 52
        }
      },
      "43": {
        start: {
          line: 403,
          column: 26
        },
        end: {
          line: 403,
          column: 52
        }
      },
      "44": {
        start: {
          line: 404,
          column: 26
        },
        end: {
          line: 404,
          column: 56
        }
      },
      "45": {
        start: {
          line: 405,
          column: 30
        },
        end: {
          line: 405,
          column: 60
        }
      },
      "46": {
        start: {
          line: 406,
          column: 30
        },
        end: {
          line: 406,
          column: 56
        }
      },
      "47": {
        start: {
          line: 408,
          column: 2
        },
        end: {
          line: 421,
          column: 21
        }
      },
      "48": {
        start: {
          line: 409,
          column: 4
        },
        end: {
          line: 420,
          column: 5
        }
      },
      "49": {
        start: {
          line: 410,
          column: 31
        },
        end: {
          line: 415,
          column: 8
        }
      },
      "50": {
        start: {
          line: 411,
          column: 8
        },
        end: {
          line: 413,
          column: 9
        }
      },
      "51": {
        start: {
          line: 412,
          column: 10
        },
        end: {
          line: 412,
          column: 22
        }
      },
      "52": {
        start: {
          line: 414,
          column: 8
        },
        end: {
          line: 414,
          column: 21
        }
      },
      "53": {
        start: {
          line: 416,
          column: 6
        },
        end: {
          line: 416,
          column: 46
        }
      },
      "54": {
        start: {
          line: 417,
          column: 6
        },
        end: {
          line: 417,
          column: 42
        }
      },
      "55": {
        start: {
          line: 418,
          column: 6
        },
        end: {
          line: 418,
          column: 44
        }
      },
      "56": {
        start: {
          line: 419,
          column: 6
        },
        end: {
          line: 419,
          column: 47
        }
      },
      "57": {
        start: {
          line: 423,
          column: 40
        },
        end: {
          line: 425,
          column: 4
        }
      },
      "58": {
        start: {
          line: 426,
          column: 42
        },
        end: {
          line: 430,
          column: 4
        }
      },
      "59": {
        start: {
          line: 432,
          column: 44
        },
        end: {
          line: 435,
          column: 4
        }
      },
      "60": {
        start: {
          line: 437,
          column: 35
        },
        end: {
          line: 437,
          column: 71
        }
      },
      "61": {
        start: {
          line: 439,
          column: 31
        },
        end: {
          line: 441,
          column: 4
        }
      },
      "62": {
        start: {
          line: 442,
          column: 27
        },
        end: {
          line: 444,
          column: 4
        }
      },
      "63": {
        start: {
          line: 445,
          column: 23
        },
        end: {
          line: 454,
          column: 3
        }
      },
      "64": {
        start: {
          line: 446,
          column: 4
        },
        end: {
          line: 446,
          column: 45
        }
      },
      "65": {
        start: {
          line: 447,
          column: 4
        },
        end: {
          line: 447,
          column: 43
        }
      },
      "66": {
        start: {
          line: 448,
          column: 4
        },
        end: {
          line: 452,
          column: 7
        }
      },
      "67": {
        start: {
          line: 453,
          column: 4
        },
        end: {
          line: 453,
          column: 44
        }
      },
      "68": {
        start: {
          line: 456,
          column: 25
        },
        end: {
          line: 464,
          column: 3
        }
      },
      "69": {
        start: {
          line: 457,
          column: 4
        },
        end: {
          line: 457,
          column: 43
        }
      },
      "70": {
        start: {
          line: 458,
          column: 4
        },
        end: {
          line: 462,
          column: 7
        }
      },
      "71": {
        start: {
          line: 463,
          column: 4
        },
        end: {
          line: 463,
          column: 44
        }
      },
      "72": {
        start: {
          line: 466,
          column: 36
        },
        end: {
          line: 472,
          column: 3
        }
      },
      "73": {
        start: {
          line: 467,
          column: 4
        },
        end: {
          line: 471,
          column: 8
        }
      },
      "74": {
        start: {
          line: 467,
          column: 37
        },
        end: {
          line: 471,
          column: 5
        }
      },
      "75": {
        start: {
          line: 474,
          column: 36
        },
        end: {
          line: 481,
          column: 3
        }
      },
      "76": {
        start: {
          line: 475,
          column: 4
        },
        end: {
          line: 475,
          column: 24
        }
      },
      "77": {
        start: {
          line: 476,
          column: 4
        },
        end: {
          line: 480,
          column: 8
        }
      },
      "78": {
        start: {
          line: 476,
          column: 37
        },
        end: {
          line: 480,
          column: 5
        }
      },
      "79": {
        start: {
          line: 484,
          column: 20
        },
        end: {
          line: 484,
          column: 41
        }
      },
      "80": {
        start: {
          line: 486,
          column: 31
        },
        end: {
          line: 486,
          column: 44
        }
      },
      "81": {
        start: {
          line: 487,
          column: 28
        },
        end: {
          line: 487,
          column: 36
        }
      },
      "82": {
        start: {
          line: 488,
          column: 37
        },
        end: {
          line: 488,
          column: 49
        }
      },
      "83": {
        start: {
          line: 490,
          column: 23
        },
        end: {
          line: 531,
          column: 3
        }
      },
      "84": {
        start: {
          line: 537,
          column: 37
        },
        end: {
          line: 537,
          column: 70
        }
      },
      "85": {
        start: {
          line: 539,
          column: 2
        },
        end: {
          line: 547,
          column: 9
        }
      },
      "86": {
        start: {
          line: 540,
          column: 4
        },
        end: {
          line: 546,
          column: 5
        }
      },
      "87": {
        start: {
          line: 541,
          column: 35
        },
        end: {
          line: 541,
          column: 51
        }
      },
      "88": {
        start: {
          line: 542,
          column: 42
        },
        end: {
          line: 544,
          column: 7
        }
      },
      "89": {
        start: {
          line: 543,
          column: 17
        },
        end: {
          line: 543,
          column: 56
        }
      },
      "90": {
        start: {
          line: 545,
          column: 6
        },
        end: {
          line: 545,
          column: 78
        }
      },
      "91": {
        start: {
          line: 545,
          column: 51
        },
        end: {
          line: 545,
          column: 78
        }
      },
      "92": {
        start: {
          line: 549,
          column: 24
        },
        end: {
          line: 549,
          column: 36
        }
      },
      "93": {
        start: {
          line: 554,
          column: 2
        },
        end: {
          line: 560,
          column: 25
        }
      },
      "94": {
        start: {
          line: 555,
          column: 4
        },
        end: {
          line: 555,
          column: 45
        }
      },
      "95": {
        start: {
          line: 557,
          column: 6
        },
        end: {
          line: 557,
          column: 78
        }
      },
      "96": {
        start: {
          line: 558,
          column: 4
        },
        end: {
          line: 558,
          column: 42
        }
      },
      "97": {
        start: {
          line: 559,
          column: 4
        },
        end: {
          line: 559,
          column: 58
        }
      },
      "98": {
        start: {
          line: 559,
          column: 18
        },
        end: {
          line: 559,
          column: 56
        }
      },
      "99": {
        start: {
          line: 562,
          column: 2
        },
        end: {
          line: 566,
          column: 17
        }
      },
      "100": {
        start: {
          line: 563,
          column: 4
        },
        end: {
          line: 565,
          column: 5
        }
      },
      "101": {
        start: {
          line: 564,
          column: 6
        },
        end: {
          line: 564,
          column: 20
        }
      },
      "102": {
        start: {
          line: 568,
          column: 35
        },
        end: {
          line: 607,
          column: 3
        }
      },
      "103": {
        start: {
          line: 574,
          column: 4
        },
        end: {
          line: 576,
          column: 5
        }
      },
      "104": {
        start: {
          line: 575,
          column: 6
        },
        end: {
          line: 575,
          column: 51
        }
      },
      "105": {
        start: {
          line: 577,
          column: 38
        },
        end: {
          line: 605,
          column: 5
        }
      },
      "106": {
        start: {
          line: 580,
          column: 8
        },
        end: {
          line: 580,
          column: 59
        }
      },
      "107": {
        start: {
          line: 581,
          column: 8
        },
        end: {
          line: 581,
          column: 68
        }
      },
      "108": {
        start: {
          line: 582,
          column: 8
        },
        end: {
          line: 582,
          column: 67
        }
      },
      "109": {
        start: {
          line: 583,
          column: 8
        },
        end: {
          line: 583,
          column: 68
        }
      },
      "110": {
        start: {
          line: 606,
          column: 4
        },
        end: {
          line: 606,
          column: 67
        }
      },
      "111": {
        start: {
          line: 615,
          column: 2
        },
        end: {
          line: 669,
          column: 9
        }
      },
      "112": {
        start: {
          line: 616,
          column: 4
        },
        end: {
          line: 640,
          column: 5
        }
      },
      "113": {
        start: {
          line: 617,
          column: 25
        },
        end: {
          line: 617,
          column: 46
        }
      },
      "114": {
        start: {
          line: 618,
          column: 25
        },
        end: {
          line: 625,
          column: 7
        }
      },
      "115": {
        start: {
          line: 620,
          column: 10
        },
        end: {
          line: 622,
          column: 11
        }
      },
      "116": {
        start: {
          line: 621,
          column: 12
        },
        end: {
          line: 621,
          column: 37
        }
      },
      "117": {
        start: {
          line: 626,
          column: 6
        },
        end: {
          line: 626,
          column: 24
        }
      },
      "118": {
        start: {
          line: 629,
          column: 29
        },
        end: {
          line: 633,
          column: 7
        }
      },
      "119": {
        start: {
          line: 635,
          column: 6
        },
        end: {
          line: 635,
          column: 93
        }
      },
      "120": {
        start: {
          line: 636,
          column: 6
        },
        end: {
          line: 636,
          column: 28
        }
      },
      "121": {
        start: {
          line: 638,
          column: 6
        },
        end: {
          line: 638,
          column: 25
        }
      },
      "122": {
        start: {
          line: 639,
          column: 6
        },
        end: {
          line: 639,
          column: 45
        }
      },
      "123": {
        start: {
          line: 642,
          column: 4
        },
        end: {
          line: 642,
          column: 53
        }
      },
      "124": {
        start: {
          line: 675,
          column: 28
        },
        end: {
          line: 685,
          column: 3
        }
      },
      "125": {
        start: {
          line: 676,
          column: 4
        },
        end: {
          line: 682,
          column: 5
        }
      },
      "126": {
        start: {
          line: 677,
          column: 6
        },
        end: {
          line: 680,
          column: 9
        }
      },
      "127": {
        start: {
          line: 679,
          column: 42
        },
        end: {
          line: 679,
          column: 85
        }
      },
      "128": {
        start: {
          line: 681,
          column: 6
        },
        end: {
          line: 681,
          column: 13
        }
      },
      "129": {
        start: {
          line: 684,
          column: 4
        },
        end: {
          line: 684,
          column: 98
        }
      },
      "130": {
        start: {
          line: 684,
          column: 46
        },
        end: {
          line: 684,
          column: 89
        }
      },
      "131": {
        start: {
          line: 687,
          column: 26
        },
        end: {
          line: 703,
          column: 3
        }
      },
      "132": {
        start: {
          line: 688,
          column: 19
        },
        end: {
          line: 688,
          column: 48
        }
      },
      "133": {
        start: {
          line: 689,
          column: 4
        },
        end: {
          line: 689,
          column: 24
        }
      },
      "134": {
        start: {
          line: 690,
          column: 4
        },
        end: {
          line: 702,
          column: 7
        }
      },
      "135": {
        start: {
          line: 705,
          column: 28
        },
        end: {
          line: 721,
          column: 3
        }
      },
      "136": {
        start: {
          line: 706,
          column: 4
        },
        end: {
          line: 706,
          column: 24
        }
      },
      "137": {
        start: {
          line: 707,
          column: 19
        },
        end: {
          line: 707,
          column: 48
        }
      },
      "138": {
        start: {
          line: 708,
          column: 4
        },
        end: {
          line: 720,
          column: 7
        }
      },
      "139": {
        start: {
          line: 723,
          column: 26
        },
        end: {
          line: 741,
          column: 3
        }
      },
      "140": {
        start: {
          line: 724,
          column: 4
        },
        end: {
          line: 724,
          column: 24
        }
      },
      "141": {
        start: {
          line: 726,
          column: 19
        },
        end: {
          line: 726,
          column: 48
        }
      },
      "142": {
        start: {
          line: 727,
          column: 4
        },
        end: {
          line: 740,
          column: 7
        }
      },
      "143": {
        start: {
          line: 743,
          column: 28
        },
        end: {
          line: 761,
          column: 3
        }
      },
      "144": {
        start: {
          line: 744,
          column: 4
        },
        end: {
          line: 744,
          column: 24
        }
      },
      "145": {
        start: {
          line: 746,
          column: 19
        },
        end: {
          line: 746,
          column: 48
        }
      },
      "146": {
        start: {
          line: 747,
          column: 4
        },
        end: {
          line: 760,
          column: 7
        }
      },
      "147": {
        start: {
          line: 763,
          column: 29
        },
        end: {
          line: 767,
          column: 3
        }
      },
      "148": {
        start: {
          line: 764,
          column: 4
        },
        end: {
          line: 766,
          column: 7
        }
      },
      "149": {
        start: {
          line: 769,
          column: 34
        },
        end: {
          line: 773,
          column: 3
        }
      },
      "150": {
        start: {
          line: 770,
          column: 4
        },
        end: {
          line: 772,
          column: 7
        }
      },
      "151": {
        start: {
          line: 775,
          column: 31
        },
        end: {
          line: 780,
          column: 3
        }
      },
      "152": {
        start: {
          line: 776,
          column: 4
        },
        end: {
          line: 776,
          column: 34
        }
      },
      "153": {
        start: {
          line: 777,
          column: 4
        },
        end: {
          line: 779,
          column: 7
        }
      },
      "154": {
        start: {
          line: 782,
          column: 26
        },
        end: {
          line: 792,
          column: 3
        }
      },
      "155": {
        start: {
          line: 783,
          column: 4
        },
        end: {
          line: 785,
          column: 7
        }
      },
      "156": {
        start: {
          line: 787,
          column: 4
        },
        end: {
          line: 791,
          column: 7
        }
      },
      "157": {
        start: {
          line: 794,
          column: 29
        },
        end: {
          line: 803,
          column: 3
        }
      },
      "158": {
        start: {
          line: 795,
          column: 4
        },
        end: {
          line: 802,
          column: 5
        }
      },
      "159": {
        start: {
          line: 796,
          column: 6
        },
        end: {
          line: 796,
          column: 27
        }
      },
      "160": {
        start: {
          line: 797,
          column: 6
        },
        end: {
          line: 801,
          column: 9
        }
      },
      "161": {
        start: {
          line: 805,
          column: 31
        },
        end: {
          line: 836,
          column: 3
        }
      },
      "162": {
        start: {
          line: 806,
          column: 4
        },
        end: {
          line: 835,
          column: 5
        }
      },
      "163": {
        start: {
          line: 807,
          column: 6
        },
        end: {
          line: 807,
          column: 27
        }
      },
      "164": {
        start: {
          line: 808,
          column: 6
        },
        end: {
          line: 834,
          column: 8
        }
      },
      "165": {
        start: {
          line: 809,
          column: 23
        },
        end: {
          line: 815,
          column: 10
        }
      },
      "166": {
        start: {
          line: 816,
          column: 8
        },
        end: {
          line: 833,
          column: 9
        }
      },
      "167": {
        start: {
          line: 817,
          column: 10
        },
        end: {
          line: 817,
          column: 49
        }
      },
      "168": {
        start: {
          line: 818,
          column: 10
        },
        end: {
          line: 832,
          column: 15
        }
      },
      "169": {
        start: {
          line: 823,
          column: 14
        },
        end: {
          line: 823,
          column: 54
        }
      },
      "170": {
        start: {
          line: 824,
          column: 14
        },
        end: {
          line: 827,
          column: 17
        }
      },
      "171": {
        start: {
          line: 830,
          column: 14
        },
        end: {
          line: 830,
          column: 54
        }
      },
      "172": {
        start: {
          line: 831,
          column: 14
        },
        end: {
          line: 831,
          column: 58
        }
      },
      "173": {
        start: {
          line: 838,
          column: 34
        },
        end: {
          line: 844,
          column: 3
        }
      },
      "174": {
        start: {
          line: 839,
          column: 4
        },
        end: {
          line: 843,
          column: 7
        }
      },
      "175": {
        start: {
          line: 846,
          column: 24
        },
        end: {
          line: 885,
          column: 3
        }
      },
      "176": {
        start: {
          line: 847,
          column: 31
        },
        end: {
          line: 851,
          column: 34
        }
      },
      "177": {
        start: {
          line: 847,
          column: 63
        },
        end: {
          line: 847,
          column: 91
        }
      },
      "178": {
        start: {
          line: 849,
          column: 8
        },
        end: {
          line: 849,
          column: 97
        }
      },
      "179": {
        start: {
          line: 849,
          column: 48
        },
        end: {
          line: 849,
          column: 96
        }
      },
      "180": {
        start: {
          line: 851,
          column: 23
        },
        end: {
          line: 851,
          column: 33
        }
      },
      "181": {
        start: {
          line: 853,
          column: 20
        },
        end: {
          line: 860,
          column: 5
        }
      },
      "182": {
        start: {
          line: 861,
          column: 4
        },
        end: {
          line: 861,
          column: 43
        }
      },
      "183": {
        start: {
          line: 862,
          column: 4
        },
        end: {
          line: 884,
          column: 9
        }
      },
      "184": {
        start: {
          line: 867,
          column: 8
        },
        end: {
          line: 867,
          column: 48
        }
      },
      "185": {
        start: {
          line: 868,
          column: 8
        },
        end: {
          line: 879,
          column: 9
        }
      },
      "186": {
        start: {
          line: 869,
          column: 10
        },
        end: {
          line: 872,
          column: 13
        }
      },
      "187": {
        start: {
          line: 874,
          column: 10
        },
        end: {
          line: 878,
          column: 13
        }
      },
      "188": {
        start: {
          line: 882,
          column: 8
        },
        end: {
          line: 882,
          column: 48
        }
      },
      "189": {
        start: {
          line: 883,
          column: 8
        },
        end: {
          line: 883,
          column: 50
        }
      },
      "190": {
        start: {
          line: 888,
          column: 4
        },
        end: {
          line: 888,
          column: 43
        }
      },
      "191": {
        start: {
          line: 889,
          column: 4
        },
        end: {
          line: 907,
          column: 9
        }
      },
      "192": {
        start: {
          line: 895,
          column: 8
        },
        end: {
          line: 895,
          column: 48
        }
      },
      "193": {
        start: {
          line: 896,
          column: 8
        },
        end: {
          line: 899,
          column: 11
        }
      },
      "194": {
        start: {
          line: 902,
          column: 8
        },
        end: {
          line: 902,
          column: 48
        }
      },
      "195": {
        start: {
          line: 903,
          column: 8
        },
        end: {
          line: 906,
          column: 11
        }
      },
      "196": {
        start: {
          line: 912,
          column: 4
        },
        end: {
          line: 912,
          column: 31
        }
      },
      "197": {
        start: {
          line: 912,
          column: 17
        },
        end: {
          line: 912,
          column: 30
        }
      },
      "198": {
        start: {
          line: 915,
          column: 22
        },
        end: {
          line: 922,
          column: 3
        }
      },
      "199": {
        start: {
          line: 915,
          column: 34
        },
        end: {
          line: 922,
          column: 3
        }
      },
      "200": {
        start: {
          line: 916,
          column: 4
        },
        end: {
          line: 916,
          column: 44
        }
      },
      "201": {
        start: {
          line: 918,
          column: 4
        },
        end: {
          line: 921,
          column: 7
        }
      },
      "202": {
        start: {
          line: 925,
          column: 4
        },
        end: {
          line: 927,
          column: 6
        }
      },
      "203": {
        start: {
          line: 926,
          column: 6
        },
        end: {
          line: 926,
          column: 31
        }
      },
      "204": {
        start: {
          line: 931,
          column: 4
        },
        end: {
          line: 931,
          column: 43
        }
      },
      "205": {
        start: {
          line: 932,
          column: 4
        },
        end: {
          line: 951,
          column: 5
        }
      },
      "206": {
        start: {
          line: 933,
          column: 23
        },
        end: {
          line: 933,
          column: 47
        }
      },
      "207": {
        start: {
          line: 934,
          column: 6
        },
        end: {
          line: 937,
          column: 7
        }
      },
      "208": {
        start: {
          line: 935,
          column: 8
        },
        end: {
          line: 935,
          column: 48
        }
      },
      "209": {
        start: {
          line: 936,
          column: 8
        },
        end: {
          line: 936,
          column: 15
        }
      },
      "210": {
        start: {
          line: 938,
          column: 6
        },
        end: {
          line: 950,
          column: 11
        }
      },
      "211": {
        start: {
          line: 943,
          column: 10
        },
        end: {
          line: 943,
          column: 50
        }
      },
      "212": {
        start: {
          line: 944,
          column: 10
        },
        end: {
          line: 944,
          column: 91
        }
      },
      "213": {
        start: {
          line: 945,
          column: 10
        },
        end: {
          line: 945,
          column: 35
        }
      },
      "214": {
        start: {
          line: 948,
          column: 10
        },
        end: {
          line: 948,
          column: 50
        }
      },
      "215": {
        start: {
          line: 949,
          column: 10
        },
        end: {
          line: 949,
          column: 51
        }
      },
      "216": {
        start: {
          line: 953,
          column: 4
        },
        end: {
          line: 973,
          column: 5
        }
      },
      "217": {
        start: {
          line: 954,
          column: 6
        },
        end: {
          line: 972,
          column: 11
        }
      },
      "218": {
        start: {
          line: 966,
          column: 10
        },
        end: {
          line: 966,
          column: 50
        }
      },
      "219": {
        start: {
          line: 967,
          column: 10
        },
        end: {
          line: 967,
          column: 91
        }
      },
      "220": {
        start: {
          line: 970,
          column: 10
        },
        end: {
          line: 970,
          column: 50
        }
      },
      "221": {
        start: {
          line: 971,
          column: 10
        },
        end: {
          line: 971,
          column: 51
        }
      },
      "222": {
        start: {
          line: 975,
          column: 4
        },
        end: {
          line: 1006,
          column: 5
        }
      },
      "223": {
        start: {
          line: 977,
          column: 6
        },
        end: {
          line: 986,
          column: 7
        }
      },
      "224": {
        start: {
          line: 978,
          column: 8
        },
        end: {
          line: 985,
          column: 11
        }
      },
      "225": {
        start: {
          line: 987,
          column: 6
        },
        end: {
          line: 994,
          column: 7
        }
      },
      "226": {
        start: {
          line: 988,
          column: 8
        },
        end: {
          line: 993,
          column: 11
        }
      },
      "227": {
        start: {
          line: 995,
          column: 6
        },
        end: {
          line: 1005,
          column: 11
        }
      },
      "228": {
        start: {
          line: 1000,
          column: 10
        },
        end: {
          line: 1000,
          column: 50
        }
      },
      "229": {
        start: {
          line: 1003,
          column: 10
        },
        end: {
          line: 1003,
          column: 50
        }
      },
      "230": {
        start: {
          line: 1004,
          column: 10
        },
        end: {
          line: 1004,
          column: 51
        }
      },
      "231": {
        start: {
          line: 1009,
          column: 25
        },
        end: {
          line: 1021,
          column: 3
        }
      },
      "232": {
        start: {
          line: 1010,
          column: 4
        },
        end: {
          line: 1010,
          column: 24
        }
      },
      "233": {
        start: {
          line: 1011,
          column: 4
        },
        end: {
          line: 1011,
          column: 43
        }
      },
      "234": {
        start: {
          line: 1012,
          column: 4
        },
        end: {
          line: 1020,
          column: 5
        }
      },
      "235": {
        start: {
          line: 1013,
          column: 15
        },
        end: {
          line: 1013,
          column: 24
        }
      },
      "236": {
        start: {
          line: 1014,
          column: 17
        },
        end: {
          line: 1014,
          column: 28
        }
      },
      "237": {
        start: {
          line: 1015,
          column: 6
        },
        end: {
          line: 1015,
          column: 74
        }
      },
      "238": {
        start: {
          line: 1016,
          column: 6
        },
        end: {
          line: 1016,
          column: 46
        }
      },
      "239": {
        start: {
          line: 1017,
          column: 6
        },
        end: {
          line: 1017,
          column: 87
        }
      },
      "240": {
        start: {
          line: 1019,
          column: 6
        },
        end: {
          line: 1019,
          column: 23
        }
      },
      "241": {
        start: {
          line: 1023,
          column: 22
        },
        end: {
          line: 1027,
          column: 3
        }
      },
      "242": {
        start: {
          line: 1024,
          column: 4
        },
        end: {
          line: 1026,
          column: 6
        }
      },
      "243": {
        start: {
          line: 1029,
          column: 35
        },
        end: {
          line: 1031,
          column: 3
        }
      },
      "244": {
        start: {
          line: 1030,
          column: 4
        },
        end: {
          line: 1030,
          column: 71
        }
      },
      "245": {
        start: {
          line: 1033,
          column: 17
        },
        end: {
          line: 1039,
          column: 3
        }
      },
      "246": {
        start: {
          line: 1041,
          column: 18
        },
        end: {
          line: 1269,
          column: 3
        }
      },
      "247": {
        start: {
          line: 1050,
          column: 10
        },
        end: {
          line: 1057,
          column: 12
        }
      },
      "248": {
        start: {
          line: 1055,
          column: 28
        },
        end: {
          line: 1055,
          column: 45
        }
      },
      "249": {
        start: {
          line: 1069,
          column: 10
        },
        end: {
          line: 1076,
          column: 12
        }
      },
      "250": {
        start: {
          line: 1074,
          column: 28
        },
        end: {
          line: 1074,
          column: 45
        }
      },
      "251": {
        start: {
          line: 1079,
          column: 10
        },
        end: {
          line: 1079,
          column: 56
        }
      },
      "252": {
        start: {
          line: 1091,
          column: 10
        },
        end: {
          line: 1098,
          column: 12
        }
      },
      "253": {
        start: {
          line: 1096,
          column: 28
        },
        end: {
          line: 1096,
          column: 45
        }
      },
      "254": {
        start: {
          line: 1101,
          column: 10
        },
        end: {
          line: 1101,
          column: 56
        }
      },
      "255": {
        start: {
          line: 1113,
          column: 10
        },
        end: {
          line: 1117,
          column: 12
        }
      },
      "256": {
        start: {
          line: 1137,
          column: 10
        },
        end: {
          line: 1141,
          column: 12
        }
      },
      "257": {
        start: {
          line: 1144,
          column: 26
        },
        end: {
          line: 1144,
          column: 54
        }
      },
      "258": {
        start: {
          line: 1145,
          column: 29
        },
        end: {
          line: 1145,
          column: 69
        }
      },
      "259": {
        start: {
          line: 1146,
          column: 10
        },
        end: {
          line: 1265,
          column: 12
        }
      },
      "260": {
        start: {
          line: 1157,
          column: 20
        },
        end: {
          line: 1157,
          column: 40
        }
      },
      "261": {
        start: {
          line: 1158,
          column: 20
        },
        end: {
          line: 1158,
          column: 57
        }
      },
      "262": {
        start: {
          line: 1170,
          column: 20
        },
        end: {
          line: 1170,
          column: 40
        }
      },
      "263": {
        start: {
          line: 1171,
          column: 20
        },
        end: {
          line: 1171,
          column: 58
        }
      },
      "264": {
        start: {
          line: 1182,
          column: 20
        },
        end: {
          line: 1182,
          column: 40
        }
      },
      "265": {
        start: {
          line: 1183,
          column: 20
        },
        end: {
          line: 1183,
          column: 78
        }
      },
      "266": {
        start: {
          line: 1195,
          column: 18
        },
        end: {
          line: 1195,
          column: 86
        }
      },
      "267": {
        start: {
          line: 1204,
          column: 32
        },
        end: {
          line: 1204,
          column: 98
        }
      },
      "268": {
        start: {
          line: 1215,
          column: 18
        },
        end: {
          line: 1215,
          column: 86
        }
      },
      "269": {
        start: {
          line: 1225,
          column: 18
        },
        end: {
          line: 1225,
          column: 85
        }
      },
      "270": {
        start: {
          line: 1233,
          column: 32
        },
        end: {
          line: 1233,
          column: 69
        }
      },
      "271": {
        start: {
          line: 1241,
          column: 33
        },
        end: {
          line: 1241,
          column: 88
        }
      },
      "272": {
        start: {
          line: 1241,
          column: 63
        },
        end: {
          line: 1241,
          column: 87
        }
      },
      "273": {
        start: {
          line: 1251,
          column: 35
        },
        end: {
          line: 1251,
          column: 66
        }
      },
      "274": {
        start: {
          line: 1259,
          column: 35
        },
        end: {
          line: 1259,
          column: 70
        }
      },
      "275": {
        start: {
          line: 1271,
          column: 2
        },
        end: {
          line: 1275,
          column: 5
        }
      },
      "276": {
        start: {
          line: 1272,
          column: 4
        },
        end: {
          line: 1274,
          column: 5
        }
      },
      "277": {
        start: {
          line: 1273,
          column: 6
        },
        end: {
          line: 1273,
          column: 67
        }
      },
      "278": {
        start: {
          line: 1277,
          column: 34
        },
        end: {
          line: 1277,
          column: 51
        }
      },
      "279": {
        start: {
          line: 1279,
          column: 50
        },
        end: {
          line: 1289,
          column: 4
        }
      },
      "280": {
        start: {
          line: 1280,
          column: 19
        },
        end: {
          line: 1280,
          column: 56
        }
      },
      "281": {
        start: {
          line: 1282,
          column: 30
        },
        end: {
          line: 1282,
          column: 32
        }
      },
      "282": {
        start: {
          line: 1283,
          column: 4
        },
        end: {
          line: 1287,
          column: 7
        }
      },
      "283": {
        start: {
          line: 1284,
          column: 6
        },
        end: {
          line: 1286,
          column: 7
        }
      },
      "284": {
        start: {
          line: 1285,
          column: 8
        },
        end: {
          line: 1285,
          column: 57
        }
      },
      "285": {
        start: {
          line: 1288,
          column: 4
        },
        end: {
          line: 1288,
          column: 29
        }
      },
      "286": {
        start: {
          line: 1292,
          column: 4
        },
        end: {
          line: 1292,
          column: 59
        }
      },
      "287": {
        start: {
          line: 1293,
          column: 19
        },
        end: {
          line: 1299,
          column: 6
        }
      },
      "288": {
        start: {
          line: 1300,
          column: 4
        },
        end: {
          line: 1300,
          column: 20
        }
      },
      "289": {
        start: {
          line: 1304,
          column: 25
        },
        end: {
          line: 1304,
          column: 49
        }
      },
      "290": {
        start: {
          line: 1306,
          column: 4
        },
        end: {
          line: 1306,
          column: 43
        }
      },
      "291": {
        start: {
          line: 1307,
          column: 4
        },
        end: {
          line: 1324,
          column: 9
        }
      },
      "292": {
        start: {
          line: 1312,
          column: 8
        },
        end: {
          line: 1312,
          column: 48
        }
      },
      "293": {
        start: {
          line: 1313,
          column: 8
        },
        end: {
          line: 1319,
          column: 17
        }
      },
      "294": {
        start: {
          line: 1314,
          column: 10
        },
        end: {
          line: 1317,
          column: 13
        }
      },
      "295": {
        start: {
          line: 1318,
          column: 10
        },
        end: {
          line: 1318,
          column: 35
        }
      },
      "296": {
        start: {
          line: 1322,
          column: 8
        },
        end: {
          line: 1322,
          column: 48
        }
      },
      "297": {
        start: {
          line: 1323,
          column: 8
        },
        end: {
          line: 1323,
          column: 49
        }
      },
      "298": {
        start: {
          line: 1327,
          column: 18
        },
        end: {
          line: 1432,
          column: 3
        }
      },
      "299": {
        start: {
          line: 1329,
          column: 6
        },
        end: {
          line: 1336,
          column: 8
        }
      },
      "300": {
        start: {
          line: 1358,
          column: 30
        },
        end: {
          line: 1358,
          column: 96
        }
      },
      "301": {
        start: {
          line: 1361,
          column: 26
        },
        end: {
          line: 1364,
          column: 9
        }
      },
      "302": {
        start: {
          line: 1361,
          column: 64
        },
        end: {
          line: 1364,
          column: 7
        }
      },
      "303": {
        start: {
          line: 1365,
          column: 21
        },
        end: {
          line: 1368,
          column: 7
        }
      },
      "304": {
        start: {
          line: 1367,
          column: 31
        },
        end: {
          line: 1367,
          column: 43
        }
      },
      "305": {
        start: {
          line: 1369,
          column: 6
        },
        end: {
          line: 1371,
          column: 7
        }
      },
      "306": {
        start: {
          line: 1370,
          column: 8
        },
        end: {
          line: 1370,
          column: 50
        }
      },
      "307": {
        start: {
          line: 1377,
          column: 23
        },
        end: {
          line: 1377,
          column: 90
        }
      },
      "308": {
        start: {
          line: 1378,
          column: 18
        },
        end: {
          line: 1378,
          column: 20
        }
      },
      "309": {
        start: {
          line: 1379,
          column: 6
        },
        end: {
          line: 1381,
          column: 7
        }
      },
      "310": {
        start: {
          line: 1380,
          column: 8
        },
        end: {
          line: 1380,
          column: 64
        }
      },
      "311": {
        start: {
          line: 1383,
          column: 6
        },
        end: {
          line: 1420,
          column: 7
        }
      },
      "312": {
        start: {
          line: 1385,
          column: 10
        },
        end: {
          line: 1385,
          column: 99
        }
      },
      "313": {
        start: {
          line: 1386,
          column: 10
        },
        end: {
          line: 1386,
          column: 35
        }
      },
      "314": {
        start: {
          line: 1387,
          column: 10
        },
        end: {
          line: 1387,
          column: 16
        }
      },
      "315": {
        start: {
          line: 1389,
          column: 10
        },
        end: {
          line: 1394,
          column: 12
        }
      },
      "316": {
        start: {
          line: 1395,
          column: 10
        },
        end: {
          line: 1395,
          column: 46
        }
      },
      "317": {
        start: {
          line: 1396,
          column: 10
        },
        end: {
          line: 1396,
          column: 16
        }
      },
      "318": {
        start: {
          line: 1398,
          column: 10
        },
        end: {
          line: 1400,
          column: 11
        }
      },
      "319": {
        start: {
          line: 1399,
          column: 12
        },
        end: {
          line: 1399,
          column: 48
        }
      },
      "320": {
        start: {
          line: 1401,
          column: 10
        },
        end: {
          line: 1405,
          column: 18
        }
      },
      "321": {
        start: {
          line: 1402,
          column: 12
        },
        end: {
          line: 1404,
          column: 13
        }
      },
      "322": {
        start: {
          line: 1403,
          column: 14
        },
        end: {
          line: 1403,
          column: 47
        }
      },
      "323": {
        start: {
          line: 1406,
          column: 10
        },
        end: {
          line: 1406,
          column: 16
        }
      },
      "324": {
        start: {
          line: 1408,
          column: 10
        },
        end: {
          line: 1414,
          column: 11
        }
      },
      "325": {
        start: {
          line: 1409,
          column: 12
        },
        end: {
          line: 1413,
          column: 13
        }
      },
      "326": {
        start: {
          line: 1410,
          column: 14
        },
        end: {
          line: 1410,
          column: 69
        }
      },
      "327": {
        start: {
          line: 1412,
          column: 14
        },
        end: {
          line: 1412,
          column: 70
        }
      },
      "328": {
        start: {
          line: 1415,
          column: 10
        },
        end: {
          line: 1418,
          column: 11
        }
      },
      "329": {
        start: {
          line: 1416,
          column: 12
        },
        end: {
          line: 1416,
          column: 90
        }
      },
      "330": {
        start: {
          line: 1417,
          column: 12
        },
        end: {
          line: 1417,
          column: 32
        }
      },
      "331": {
        start: {
          line: 1419,
          column: 10
        },
        end: {
          line: 1419,
          column: 16
        }
      },
      "332": {
        start: {
          line: 1423,
          column: 6
        },
        end: {
          line: 1425,
          column: 8
        }
      },
      "333": {
        start: {
          line: 1428,
          column: 6
        },
        end: {
          line: 1430,
          column: 8
        }
      },
      "334": {
        start: {
          line: 1434,
          column: 2
        },
        end: {
          line: 1436,
          column: 3
        }
      },
      "335": {
        start: {
          line: 1435,
          column: 4
        },
        end: {
          line: 1435,
          column: 100
        }
      },
      "336": {
        start: {
          line: 1449,
          column: 4
        },
        end: {
          line: 1449,
          column: 43
        }
      },
      "337": {
        start: {
          line: 1450,
          column: 56
        },
        end: {
          line: 1450,
          column: 60
        }
      },
      "338": {
        start: {
          line: 1451,
          column: 22
        },
        end: {
          line: 1451,
          column: 26
        }
      },
      "339": {
        start: {
          line: 1452,
          column: 4
        },
        end: {
          line: 1473,
          column: 5
        }
      },
      "340": {
        start: {
          line: 1454,
          column: 28
        },
        end: {
          line: 1454,
          column: 64
        }
      },
      "341": {
        start: {
          line: 1455,
          column: 25
        },
        end: {
          line: 1455,
          column: 50
        }
      },
      "342": {
        start: {
          line: 1456,
          column: 8
        },
        end: {
          line: 1463,
          column: 11
        }
      },
      "343": {
        start: {
          line: 1464,
          column: 8
        },
        end: {
          line: 1464,
          column: 14
        }
      },
      "344": {
        start: {
          line: 1467,
          column: 8
        },
        end: {
          line: 1471,
          column: 11
        }
      },
      "345": {
        start: {
          line: 1472,
          column: 8
        },
        end: {
          line: 1472,
          column: 14
        }
      },
      "346": {
        start: {
          line: 1475,
          column: 4
        },
        end: {
          line: 1491,
          column: 9
        }
      },
      "347": {
        start: {
          line: 1481,
          column: 8
        },
        end: {
          line: 1481,
          column: 48
        }
      },
      "348": {
        start: {
          line: 1482,
          column: 8
        },
        end: {
          line: 1485,
          column: 11
        }
      },
      "349": {
        start: {
          line: 1486,
          column: 8
        },
        end: {
          line: 1486,
          column: 22
        }
      },
      "350": {
        start: {
          line: 1489,
          column: 8
        },
        end: {
          line: 1489,
          column: 48
        }
      },
      "351": {
        start: {
          line: 1490,
          column: 8
        },
        end: {
          line: 1490,
          column: 49
        }
      },
      "352": {
        start: {
          line: 1494,
          column: 17
        },
        end: {
          line: 1509,
          column: 3
        }
      },
      "353": {
        start: {
          line: 1511,
          column: 28
        },
        end: {
          line: 1515,
          column: 3
        }
      },
      "354": {
        start: {
          line: 1513,
          column: 6
        },
        end: {
          line: 1513,
          column: 78
        }
      },
      "355": {
        start: {
          line: 1514,
          column: 4
        },
        end: {
          line: 1514,
          column: 42
        }
      },
      "356": {
        start: {
          line: 1517,
          column: 2
        },
        end: {
          line: 1714,
          column: 4
        }
      },
      "357": {
        start: {
          line: 1543,
          column: 41
        },
        end: {
          line: 1543,
          column: 76
        }
      },
      "358": {
        start: {
          line: 1584,
          column: 20
        },
        end: {
          line: 1584,
          column: 37
        }
      },
      "359": {
        start: {
          line: 1585,
          column: 20
        },
        end: {
          line: 1590,
          column: 22
        }
      },
      "360": {
        start: {
          line: 1661,
          column: 27
        },
        end: {
          line: 1661,
          column: 40
        }
      },
      "361": {
        start: {
          line: 1717,
          column: 20
        },
        end: {
          line: 1747,
          column: 2
        }
      },
      "362": {
        start: {
          line: 1718,
          column: 46
        },
        end: {
          line: 1718,
          column: 51
        }
      },
      "363": {
        start: {
          line: 1720,
          column: 2
        },
        end: {
          line: 1746,
          column: 4
        }
      },
      "364": {
        start: {
          line: 1749,
          column: 21
        },
        end: {
          line: 1781,
          column: 2
        }
      },
      "365": {
        start: {
          line: 1750,
          column: 47
        },
        end: {
          line: 1750,
          column: 52
        }
      },
      "366": {
        start: {
          line: 1752,
          column: 2
        },
        end: {
          line: 1780,
          column: 4
        }
      },
      "367": {
        start: {
          line: 1783,
          column: 27
        },
        end: {
          line: 1786,
          column: 2
        }
      },
      "368": {
        start: {
          line: 1783,
          column: 42
        },
        end: {
          line: 1786,
          column: 1
        }
      },
      "369": {
        start: {
          line: 1788,
          column: 24
        },
        end: {
          line: 1792,
          column: 2
        }
      },
      "370": {
        start: {
          line: 1788,
          column: 36
        },
        end: {
          line: 1792,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 106,
            column: 28
          },
          end: {
            line: 106,
            column: 29
          }
        },
        loc: {
          start: {
            line: 106,
            column: 40
          },
          end: {
            line: 109,
            column: 1
          }
        },
        line: 106
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 111,
            column: 15
          },
          end: {
            line: 111,
            column: 16
          }
        },
        loc: {
          start: {
            line: 111,
            column: 27
          },
          end: {
            line: 226,
            column: 1
          }
        },
        line: 111
      },
      "2": {
        name: "TooltipIcon",
        decl: {
          start: {
            line: 228,
            column: 9
          },
          end: {
            line: 228,
            column: 20
          }
        },
        loc: {
          start: {
            line: 228,
            column: 62
          },
          end: {
            line: 234,
            column: 1
          }
        },
        line: 228
      },
      "3": {
        name: "YAMLEditor",
        decl: {
          start: {
            line: 236,
            column: 9
          },
          end: {
            line: 236,
            column: 19
          }
        },
        loc: {
          start: {
            line: 236,
            column: 72
          },
          end: {
            line: 341,
            column: 1
          }
        },
        line: 236
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 33
          },
          end: {
            line: 243,
            column: 3
          }
        },
        line: 241
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 293,
            column: 20
          },
          end: {
            line: 293,
            column: 21
          }
        },
        loc: {
          start: {
            line: 293,
            column: 38
          },
          end: {
            line: 293,
            column: 50
          }
        },
        line: 293
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 305,
            column: 25
          },
          end: {
            line: 305,
            column: 26
          }
        },
        loc: {
          start: {
            line: 306,
            column: 18
          },
          end: {
            line: 312,
            column: 20
          }
        },
        line: 306
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 323,
            column: 25
          },
          end: {
            line: 323,
            column: 26
          }
        },
        loc: {
          start: {
            line: 324,
            column: 18
          },
          end: {
            line: 330,
            column: 20
          }
        },
        line: 324
      },
      "8": {
        name: "resetSelectedPattern",
        decl: {
          start: {
            line: 343,
            column: 9
          },
          end: {
            line: 343,
            column: 29
          }
        },
        loc: {
          start: {
            line: 343,
            column: 32
          },
          end: {
            line: 345,
            column: 1
          }
        },
        line: 343
      },
      "9": {
        name: "MeshplayPatterns",
        decl: {
          start: {
            line: 347,
            column: 9
          },
          end: {
            line: 347,
            column: 25
          }
        },
        loc: {
          start: {
            line: 359,
            column: 3
          },
          end: {
            line: 1715,
            column: 1
          }
        },
        line: 359
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 408,
            column: 12
          },
          end: {
            line: 408,
            column: 13
          }
        },
        loc: {
          start: {
            line: 408,
            column: 18
          },
          end: {
            line: 421,
            column: 3
          }
        },
        line: 408
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 410,
            column: 60
          },
          end: {
            line: 410,
            column: 61
          }
        },
        loc: {
          start: {
            line: 410,
            column: 73
          },
          end: {
            line: 415,
            column: 7
          }
        },
        line: 410
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 445,
            column: 23
          },
          end: {
            line: 445,
            column: 24
          }
        },
        loc: {
          start: {
            line: 445,
            column: 66
          },
          end: {
            line: 454,
            column: 3
          }
        },
        line: 445
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 456,
            column: 25
          },
          end: {
            line: 456,
            column: 26
          }
        },
        loc: {
          start: {
            line: 456,
            column: 68
          },
          end: {
            line: 464,
            column: 3
          }
        },
        line: 456
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 466,
            column: 36
          },
          end: {
            line: 466,
            column: 37
          }
        },
        loc: {
          start: {
            line: 466,
            column: 42
          },
          end: {
            line: 472,
            column: 3
          }
        },
        line: 466
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 467,
            column: 21
          },
          end: {
            line: 467,
            column: 22
          }
        },
        loc: {
          start: {
            line: 467,
            column: 37
          },
          end: {
            line: 471,
            column: 5
          }
        },
        line: 467
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 474,
            column: 36
          },
          end: {
            line: 474,
            column: 37
          }
        },
        loc: {
          start: {
            line: 474,
            column: 52
          },
          end: {
            line: 481,
            column: 3
          }
        },
        line: 474
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 476,
            column: 21
          },
          end: {
            line: 476,
            column: 22
          }
        },
        loc: {
          start: {
            line: 476,
            column: 37
          },
          end: {
            line: 480,
            column: 5
          }
        },
        line: 476
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 539,
            column: 12
          },
          end: {
            line: 539,
            column: 13
          }
        },
        loc: {
          start: {
            line: 539,
            column: 18
          },
          end: {
            line: 547,
            column: 3
          }
        },
        line: 539
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 543,
            column: 8
          },
          end: {
            line: 543,
            column: 9
          }
        },
        loc: {
          start: {
            line: 543,
            column: 17
          },
          end: {
            line: 543,
            column: 56
          }
        },
        line: 543
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 554,
            column: 12
          },
          end: {
            line: 554,
            column: 13
          }
        },
        loc: {
          start: {
            line: 554,
            column: 18
          },
          end: {
            line: 560,
            column: 3
          }
        },
        line: 554
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 559,
            column: 11
          },
          end: {
            line: 559,
            column: 12
          }
        },
        loc: {
          start: {
            line: 559,
            column: 18
          },
          end: {
            line: 559,
            column: 56
          }
        },
        line: 559
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 562,
            column: 12
          },
          end: {
            line: 562,
            column: 13
          }
        },
        loc: {
          start: {
            line: 562,
            column: 18
          },
          end: {
            line: 566,
            column: 3
          }
        },
        line: 562
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 568,
            column: 35
          },
          end: {
            line: 568,
            column: 36
          }
        },
        loc: {
          start: {
            line: 573,
            column: 7
          },
          end: {
            line: 607,
            column: 3
          }
        },
        line: 573
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 578,
            column: 6
          },
          end: {
            line: 578,
            column: 7
          }
        },
        loc: {
          start: {
            line: 578,
            column: 18
          },
          end: {
            line: 584,
            column: 7
          }
        },
        line: 578
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 615,
            column: 12
          },
          end: {
            line: 615,
            column: 13
          }
        },
        loc: {
          start: {
            line: 615,
            column: 24
          },
          end: {
            line: 669,
            column: 3
          }
        },
        line: 615
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 619,
            column: 20
          },
          end: {
            line: 619,
            column: 21
          }
        },
        loc: {
          start: {
            line: 619,
            column: 31
          },
          end: {
            line: 623,
            column: 9
          }
        },
        line: 619
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 675,
            column: 28
          },
          end: {
            line: 675,
            column: 29
          }
        },
        loc: {
          start: {
            line: 675,
            column: 42
          },
          end: {
            line: 685,
            column: 3
          }
        },
        line: 675
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 679,
            column: 29
          },
          end: {
            line: 679,
            column: 30
          }
        },
        loc: {
          start: {
            line: 679,
            column: 42
          },
          end: {
            line: 679,
            column: 85
          }
        },
        line: 679
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 684,
            column: 33
          },
          end: {
            line: 684,
            column: 34
          }
        },
        loc: {
          start: {
            line: 684,
            column: 46
          },
          end: {
            line: 684,
            column: 89
          }
        },
        line: 684
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 687,
            column: 26
          },
          end: {
            line: 687,
            column: 27
          }
        },
        loc: {
          start: {
            line: 687,
            column: 53
          },
          end: {
            line: 703,
            column: 3
          }
        },
        line: 687
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 705,
            column: 28
          },
          end: {
            line: 705,
            column: 29
          }
        },
        loc: {
          start: {
            line: 705,
            column: 55
          },
          end: {
            line: 721,
            column: 3
          }
        },
        line: 705
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 723,
            column: 26
          },
          end: {
            line: 723,
            column: 27
          }
        },
        loc: {
          start: {
            line: 723,
            column: 53
          },
          end: {
            line: 741,
            column: 3
          }
        },
        line: 723
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 743,
            column: 28
          },
          end: {
            line: 743,
            column: 29
          }
        },
        loc: {
          start: {
            line: 743,
            column: 55
          },
          end: {
            line: 761,
            column: 3
          }
        },
        line: 743
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 763,
            column: 29
          },
          end: {
            line: 763,
            column: 30
          }
        },
        loc: {
          start: {
            line: 763,
            column: 35
          },
          end: {
            line: 767,
            column: 3
          }
        },
        line: 763
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 769,
            column: 34
          },
          end: {
            line: 769,
            column: 35
          }
        },
        loc: {
          start: {
            line: 769,
            column: 40
          },
          end: {
            line: 773,
            column: 3
          }
        },
        line: 769
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 775,
            column: 31
          },
          end: {
            line: 775,
            column: 32
          }
        },
        loc: {
          start: {
            line: 775,
            column: 37
          },
          end: {
            line: 780,
            column: 3
          }
        },
        line: 775
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 782,
            column: 26
          },
          end: {
            line: 782,
            column: 27
          }
        },
        loc: {
          start: {
            line: 782,
            column: 39
          },
          end: {
            line: 792,
            column: 3
          }
        },
        line: 782
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 794,
            column: 29
          },
          end: {
            line: 794,
            column: 30
          }
        },
        loc: {
          start: {
            line: 794,
            column: 46
          },
          end: {
            line: 803,
            column: 3
          }
        },
        line: 794
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 805,
            column: 31
          },
          end: {
            line: 805,
            column: 32
          }
        },
        loc: {
          start: {
            line: 805,
            column: 48
          },
          end: {
            line: 836,
            column: 3
          }
        },
        line: 805
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 808,
            column: 13
          },
          end: {
            line: 808,
            column: 14
          }
        },
        loc: {
          start: {
            line: 808,
            column: 25
          },
          end: {
            line: 834,
            column: 7
          }
        },
        line: 808
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 822,
            column: 18
          },
          end: {
            line: 822,
            column: 19
          }
        },
        loc: {
          start: {
            line: 822,
            column: 24
          },
          end: {
            line: 828,
            column: 13
          }
        },
        line: 822
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 829,
            column: 19
          },
          end: {
            line: 829,
            column: 20
          }
        },
        loc: {
          start: {
            line: 829,
            column: 25
          },
          end: {
            line: 832,
            column: 13
          }
        },
        line: 829
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 838,
            column: 34
          },
          end: {
            line: 838,
            column: 35
          }
        },
        loc: {
          start: {
            line: 838,
            column: 40
          },
          end: {
            line: 844,
            column: 3
          }
        },
        line: 838
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 846,
            column: 24
          },
          end: {
            line: 846,
            column: 25
          }
        },
        loc: {
          start: {
            line: 846,
            column: 38
          },
          end: {
            line: 885,
            column: 3
          }
        },
        line: 846
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 847,
            column: 52
          },
          end: {
            line: 847,
            column: 53
          }
        },
        loc: {
          start: {
            line: 847,
            column: 63
          },
          end: {
            line: 847,
            column: 91
          }
        },
        line: 847
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 848,
            column: 15
          },
          end: {
            line: 848,
            column: 16
          }
        },
        loc: {
          start: {
            line: 849,
            column: 8
          },
          end: {
            line: 849,
            column: 97
          }
        },
        line: 849
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 849,
            column: 38
          },
          end: {
            line: 849,
            column: 39
          }
        },
        loc: {
          start: {
            line: 849,
            column: 48
          },
          end: {
            line: 849,
            column: 96
          }
        },
        line: 849
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 851,
            column: 12
          },
          end: {
            line: 851,
            column: 13
          }
        },
        loc: {
          start: {
            line: 851,
            column: 23
          },
          end: {
            line: 851,
            column: 33
          }
        },
        line: 851
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 866,
            column: 12
          },
          end: {
            line: 866,
            column: 13
          }
        },
        loc: {
          start: {
            line: 866,
            column: 18
          },
          end: {
            line: 880,
            column: 7
          }
        },
        line: 866
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 881,
            column: 13
          },
          end: {
            line: 881,
            column: 14
          }
        },
        loc: {
          start: {
            line: 881,
            column: 19
          },
          end: {
            line: 884,
            column: 7
          }
        },
        line: 881
      },
      "51": {
        name: "handleClone",
        decl: {
          start: {
            line: 887,
            column: 11
          },
          end: {
            line: 887,
            column: 22
          }
        },
        loc: {
          start: {
            line: 887,
            column: 40
          },
          end: {
            line: 908,
            column: 3
          }
        },
        line: 887
      },
      "52": {
        name: "(anonymous_52)",
        decl: {
          start: {
            line: 894,
            column: 12
          },
          end: {
            line: 894,
            column: 13
          }
        },
        loc: {
          start: {
            line: 894,
            column: 18
          },
          end: {
            line: 900,
            column: 7
          }
        },
        line: 894
      },
      "53": {
        name: "(anonymous_53)",
        decl: {
          start: {
            line: 901,
            column: 13
          },
          end: {
            line: 901,
            column: 14
          }
        },
        loc: {
          start: {
            line: 901,
            column: 19
          },
          end: {
            line: 907,
            column: 7
          }
        },
        line: 901
      },
      "54": {
        name: "fetchPatternsCaller",
        decl: {
          start: {
            line: 911,
            column: 11
          },
          end: {
            line: 911,
            column: 30
          }
        },
        loc: {
          start: {
            line: 911,
            column: 33
          },
          end: {
            line: 913,
            column: 3
          }
        },
        line: 911
      },
      "55": {
        name: "(anonymous_55)",
        decl: {
          start: {
            line: 912,
            column: 11
          },
          end: {
            line: 912,
            column: 12
          }
        },
        loc: {
          start: {
            line: 912,
            column: 17
          },
          end: {
            line: 912,
            column: 30
          }
        },
        line: 912
      },
      "56": {
        name: "(anonymous_56)",
        decl: {
          start: {
            line: 915,
            column: 22
          },
          end: {
            line: 915,
            column: 23
          }
        },
        loc: {
          start: {
            line: 915,
            column: 34
          },
          end: {
            line: 922,
            column: 3
          }
        },
        line: 915
      },
      "57": {
        name: "(anonymous_57)",
        decl: {
          start: {
            line: 915,
            column: 34
          },
          end: {
            line: 915,
            column: 35
          }
        },
        loc: {
          start: {
            line: 915,
            column: 45
          },
          end: {
            line: 922,
            column: 3
          }
        },
        line: 915
      },
      "58": {
        name: "resetSelectedRowData",
        decl: {
          start: {
            line: 924,
            column: 11
          },
          end: {
            line: 924,
            column: 31
          }
        },
        loc: {
          start: {
            line: 924,
            column: 34
          },
          end: {
            line: 928,
            column: 3
          }
        },
        line: 924
      },
      "59": {
        name: "(anonymous_59)",
        decl: {
          start: {
            line: 925,
            column: 11
          },
          end: {
            line: 925,
            column: 12
          }
        },
        loc: {
          start: {
            line: 925,
            column: 17
          },
          end: {
            line: 927,
            column: 5
          }
        },
        line: 925
      },
      "60": {
        name: "handleSubmit",
        decl: {
          start: {
            line: 930,
            column: 17
          },
          end: {
            line: 930,
            column: 29
          }
        },
        loc: {
          start: {
            line: 930,
            column: 80
          },
          end: {
            line: 1007,
            column: 3
          }
        },
        line: 930
      },
      "61": {
        name: "(anonymous_61)",
        decl: {
          start: {
            line: 942,
            column: 14
          },
          end: {
            line: 942,
            column: 15
          }
        },
        loc: {
          start: {
            line: 942,
            column: 20
          },
          end: {
            line: 946,
            column: 9
          }
        },
        line: 942
      },
      "62": {
        name: "(anonymous_62)",
        decl: {
          start: {
            line: 947,
            column: 15
          },
          end: {
            line: 947,
            column: 16
          }
        },
        loc: {
          start: {
            line: 947,
            column: 21
          },
          end: {
            line: 950,
            column: 9
          }
        },
        line: 947
      },
      "63": {
        name: "(anonymous_63)",
        decl: {
          start: {
            line: 965,
            column: 14
          },
          end: {
            line: 965,
            column: 15
          }
        },
        loc: {
          start: {
            line: 965,
            column: 20
          },
          end: {
            line: 968,
            column: 9
          }
        },
        line: 965
      },
      "64": {
        name: "(anonymous_64)",
        decl: {
          start: {
            line: 969,
            column: 15
          },
          end: {
            line: 969,
            column: 16
          }
        },
        loc: {
          start: {
            line: 969,
            column: 21
          },
          end: {
            line: 972,
            column: 9
          }
        },
        line: 969
      },
      "65": {
        name: "(anonymous_65)",
        decl: {
          start: {
            line: 999,
            column: 14
          },
          end: {
            line: 999,
            column: 15
          }
        },
        loc: {
          start: {
            line: 999,
            column: 20
          },
          end: {
            line: 1001,
            column: 9
          }
        },
        line: 999
      },
      "66": {
        name: "(anonymous_66)",
        decl: {
          start: {
            line: 1002,
            column: 15
          },
          end: {
            line: 1002,
            column: 16
          }
        },
        loc: {
          start: {
            line: 1002,
            column: 21
          },
          end: {
            line: 1005,
            column: 9
          }
        },
        line: 1002
      },
      "67": {
        name: "(anonymous_67)",
        decl: {
          start: {
            line: 1009,
            column: 25
          },
          end: {
            line: 1009,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1009,
            column: 61
          },
          end: {
            line: 1021,
            column: 3
          }
        },
        line: 1009
      },
      "68": {
        name: "(anonymous_68)",
        decl: {
          start: {
            line: 1023,
            column: 22
          },
          end: {
            line: 1023,
            column: 23
          }
        },
        loc: {
          start: {
            line: 1023,
            column: 35
          },
          end: {
            line: 1027,
            column: 3
          }
        },
        line: 1023
      },
      "69": {
        name: "(anonymous_69)",
        decl: {
          start: {
            line: 1029,
            column: 35
          },
          end: {
            line: 1029,
            column: 36
          }
        },
        loc: {
          start: {
            line: 1029,
            column: 43
          },
          end: {
            line: 1031,
            column: 3
          }
        },
        line: 1029
      },
      "70": {
        name: "CustomHead",
        decl: {
          start: {
            line: 1049,
            column: 35
          },
          end: {
            line: 1049,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1049,
            column: 92
          },
          end: {
            line: 1058,
            column: 9
          }
        },
        line: 1049
      },
      "71": {
        name: "(anonymous_71)",
        decl: {
          start: {
            line: 1055,
            column: 22
          },
          end: {
            line: 1055,
            column: 23
          }
        },
        loc: {
          start: {
            line: 1055,
            column: 28
          },
          end: {
            line: 1055,
            column: 45
          }
        },
        line: 1055
      },
      "72": {
        name: "CustomHead",
        decl: {
          start: {
            line: 1068,
            column: 35
          },
          end: {
            line: 1068,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1068,
            column: 92
          },
          end: {
            line: 1077,
            column: 9
          }
        },
        line: 1068
      },
      "73": {
        name: "(anonymous_73)",
        decl: {
          start: {
            line: 1074,
            column: 22
          },
          end: {
            line: 1074,
            column: 23
          }
        },
        loc: {
          start: {
            line: 1074,
            column: 28
          },
          end: {
            line: 1074,
            column: 45
          }
        },
        line: 1074
      },
      "74": {
        name: "CustomBody",
        decl: {
          start: {
            line: 1078,
            column: 35
          },
          end: {
            line: 1078,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1078,
            column: 53
          },
          end: {
            line: 1080,
            column: 9
          }
        },
        line: 1078
      },
      "75": {
        name: "CustomHead",
        decl: {
          start: {
            line: 1090,
            column: 35
          },
          end: {
            line: 1090,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1090,
            column: 92
          },
          end: {
            line: 1099,
            column: 9
          }
        },
        line: 1090
      },
      "76": {
        name: "(anonymous_76)",
        decl: {
          start: {
            line: 1096,
            column: 22
          },
          end: {
            line: 1096,
            column: 23
          }
        },
        loc: {
          start: {
            line: 1096,
            column: 28
          },
          end: {
            line: 1096,
            column: 45
          }
        },
        line: 1096
      },
      "77": {
        name: "CustomBody",
        decl: {
          start: {
            line: 1100,
            column: 35
          },
          end: {
            line: 1100,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1100,
            column: 53
          },
          end: {
            line: 1102,
            column: 9
          }
        },
        line: 1100
      },
      "78": {
        name: "CustomHead",
        decl: {
          start: {
            line: 1112,
            column: 35
          },
          end: {
            line: 1112,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1112,
            column: 68
          },
          end: {
            line: 1118,
            column: 9
          }
        },
        line: 1112
      },
      "79": {
        name: "CustomHead",
        decl: {
          start: {
            line: 1136,
            column: 35
          },
          end: {
            line: 1136,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1136,
            column: 68
          },
          end: {
            line: 1142,
            column: 9
          }
        },
        line: 1136
      },
      "80": {
        name: "CustomBody",
        decl: {
          start: {
            line: 1143,
            column: 35
          },
          end: {
            line: 1143,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1143,
            column: 60
          },
          end: {
            line: 1266,
            column: 9
          }
        },
        line: 1143
      },
      "81": {
        name: "(anonymous_81)",
        decl: {
          start: {
            line: 1156,
            column: 27
          },
          end: {
            line: 1156,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1156,
            column: 34
          },
          end: {
            line: 1159,
            column: 19
          }
        },
        line: 1156
      },
      "82": {
        name: "(anonymous_82)",
        decl: {
          start: {
            line: 1169,
            column: 27
          },
          end: {
            line: 1169,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1169,
            column: 34
          },
          end: {
            line: 1172,
            column: 19
          }
        },
        line: 1169
      },
      "83": {
        name: "(anonymous_83)",
        decl: {
          start: {
            line: 1181,
            column: 27
          },
          end: {
            line: 1181,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1181,
            column: 34
          },
          end: {
            line: 1184,
            column: 19
          }
        },
        line: 1181
      },
      "84": {
        name: "(anonymous_84)",
        decl: {
          start: {
            line: 1194,
            column: 25
          },
          end: {
            line: 1194,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1195,
            column: 18
          },
          end: {
            line: 1195,
            column: 86
          }
        },
        line: 1195
      },
      "85": {
        name: "(anonymous_85)",
        decl: {
          start: {
            line: 1204,
            column: 25
          },
          end: {
            line: 1204,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1204,
            column: 32
          },
          end: {
            line: 1204,
            column: 98
          }
        },
        line: 1204
      },
      "86": {
        name: "(anonymous_86)",
        decl: {
          start: {
            line: 1214,
            column: 25
          },
          end: {
            line: 1214,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1215,
            column: 18
          },
          end: {
            line: 1215,
            column: 86
          }
        },
        line: 1215
      },
      "87": {
        name: "(anonymous_87)",
        decl: {
          start: {
            line: 1224,
            column: 25
          },
          end: {
            line: 1224,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1224,
            column: 32
          },
          end: {
            line: 1226,
            column: 17
          }
        },
        line: 1224
      },
      "88": {
        name: "(anonymous_88)",
        decl: {
          start: {
            line: 1233,
            column: 25
          },
          end: {
            line: 1233,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1233,
            column: 32
          },
          end: {
            line: 1233,
            column: 69
          }
        },
        line: 1233
      },
      "89": {
        name: "(anonymous_89)",
        decl: {
          start: {
            line: 1241,
            column: 25
          },
          end: {
            line: 1241,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1241,
            column: 33
          },
          end: {
            line: 1241,
            column: 88
          }
        },
        line: 1241
      },
      "90": {
        name: "(anonymous_90)",
        decl: {
          start: {
            line: 1241,
            column: 57
          },
          end: {
            line: 1241,
            column: 58
          }
        },
        loc: {
          start: {
            line: 1241,
            column: 63
          },
          end: {
            line: 1241,
            column: 87
          }
        },
        line: 1241
      },
      "91": {
        name: "(anonymous_91)",
        decl: {
          start: {
            line: 1251,
            column: 27
          },
          end: {
            line: 1251,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1251,
            column: 35
          },
          end: {
            line: 1251,
            column: 66
          }
        },
        line: 1251
      },
      "92": {
        name: "(anonymous_92)",
        decl: {
          start: {
            line: 1259,
            column: 27
          },
          end: {
            line: 1259,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1259,
            column: 35
          },
          end: {
            line: 1259,
            column: 70
          }
        },
        line: 1259
      },
      "93": {
        name: "(anonymous_93)",
        decl: {
          start: {
            line: 1271,
            column: 18
          },
          end: {
            line: 1271,
            column: 19
          }
        },
        loc: {
          start: {
            line: 1271,
            column: 35
          },
          end: {
            line: 1275,
            column: 3
          }
        },
        line: 1271
      },
      "94": {
        name: "(anonymous_94)",
        decl: {
          start: {
            line: 1279,
            column: 59
          },
          end: {
            line: 1279,
            column: 60
          }
        },
        loc: {
          start: {
            line: 1279,
            column: 65
          },
          end: {
            line: 1289,
            column: 3
          }
        },
        line: 1279
      },
      "95": {
        name: "(anonymous_95)",
        decl: {
          start: {
            line: 1283,
            column: 20
          },
          end: {
            line: 1283,
            column: 21
          }
        },
        loc: {
          start: {
            line: 1283,
            column: 29
          },
          end: {
            line: 1287,
            column: 5
          }
        },
        line: 1283
      },
      "96": {
        name: "showModal",
        decl: {
          start: {
            line: 1291,
            column: 17
          },
          end: {
            line: 1291,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1291,
            column: 44
          },
          end: {
            line: 1301,
            column: 3
          }
        },
        line: 1291
      },
      "97": {
        name: "deletePatterns",
        decl: {
          start: {
            line: 1303,
            column: 17
          },
          end: {
            line: 1303,
            column: 31
          }
        },
        loc: {
          start: {
            line: 1303,
            column: 42
          },
          end: {
            line: 1325,
            column: 3
          }
        },
        line: 1303
      },
      "98": {
        name: "(anonymous_98)",
        decl: {
          start: {
            line: 1311,
            column: 12
          },
          end: {
            line: 1311,
            column: 13
          }
        },
        loc: {
          start: {
            line: 1311,
            column: 18
          },
          end: {
            line: 1320,
            column: 7
          }
        },
        line: 1311
      },
      "99": {
        name: "(anonymous_99)",
        decl: {
          start: {
            line: 1313,
            column: 19
          },
          end: {
            line: 1313,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1313,
            column: 25
          },
          end: {
            line: 1319,
            column: 9
          }
        },
        line: 1313
      },
      "100": {
        name: "(anonymous_100)",
        decl: {
          start: {
            line: 1321,
            column: 13
          },
          end: {
            line: 1321,
            column: 14
          }
        },
        loc: {
          start: {
            line: 1321,
            column: 19
          },
          end: {
            line: 1324,
            column: 7
          }
        },
        line: 1321
      },
      "101": {
        name: "(anonymous_101)",
        decl: {
          start: {
            line: 1328,
            column: 25
          },
          end: {
            line: 1328,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1329,
            column: 6
          },
          end: {
            line: 1336,
            column: 8
          }
        },
        line: 1329
      },
      "102": {
        name: "(anonymous_102)",
        decl: {
          start: {
            line: 1358,
            column: 17
          },
          end: {
            line: 1358,
            column: 18
          }
        },
        loc: {
          start: {
            line: 1358,
            column: 30
          },
          end: {
            line: 1358,
            column: 96
          }
        },
        line: 1358
      },
      "103": {
        name: "handleDelete",
        decl: {
          start: {
            line: 1360,
            column: 33
          },
          end: {
            line: 1360,
            column: 45
          }
        },
        loc: {
          start: {
            line: 1360,
            column: 51
          },
          end: {
            line: 1374,
            column: 5
          }
        },
        line: 1360
      },
      "104": {
        name: "(anonymous_104)",
        decl: {
          start: {
            line: 1361,
            column: 54
          },
          end: {
            line: 1361,
            column: 55
          }
        },
        loc: {
          start: {
            line: 1361,
            column: 64
          },
          end: {
            line: 1364,
            column: 7
          }
        },
        line: 1361
      },
      "105": {
        name: "(anonymous_105)",
        decl: {
          start: {
            line: 1367,
            column: 24
          },
          end: {
            line: 1367,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1367,
            column: 31
          },
          end: {
            line: 1367,
            column: 43
          }
        },
        line: 1367
      },
      "106": {
        name: "(anonymous_106)",
        decl: {
          start: {
            line: 1376,
            column: 19
          },
          end: {
            line: 1376,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1376,
            column: 43
          },
          end: {
            line: 1421,
            column: 5
          }
        },
        line: 1376
      },
      "107": {
        name: "(anonymous_107)",
        decl: {
          start: {
            line: 1401,
            column: 45
          },
          end: {
            line: 1401,
            column: 46
          }
        },
        loc: {
          start: {
            line: 1401,
            column: 51
          },
          end: {
            line: 1405,
            column: 11
          }
        },
        line: 1401
      },
      "108": {
        name: "(anonymous_108)",
        decl: {
          start: {
            line: 1422,
            column: 17
          },
          end: {
            line: 1422,
            column: 18
          }
        },
        loc: {
          start: {
            line: 1422,
            column: 47
          },
          end: {
            line: 1426,
            column: 5
          }
        },
        line: 1422
      },
      "109": {
        name: "(anonymous_109)",
        decl: {
          start: {
            line: 1427,
            column: 19
          },
          end: {
            line: 1427,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1427,
            column: 25
          },
          end: {
            line: 1431,
            column: 5
          }
        },
        line: 1427
      },
      "110": {
        name: "handleImportDesign",
        decl: {
          start: {
            line: 1448,
            column: 11
          },
          end: {
            line: 1448,
            column: 29
          }
        },
        loc: {
          start: {
            line: 1448,
            column: 36
          },
          end: {
            line: 1492,
            column: 3
          }
        },
        line: 1448
      },
      "111": {
        name: "(anonymous_111)",
        decl: {
          start: {
            line: 1480,
            column: 12
          },
          end: {
            line: 1480,
            column: 13
          }
        },
        loc: {
          start: {
            line: 1480,
            column: 18
          },
          end: {
            line: 1487,
            column: 7
          }
        },
        line: 1480
      },
      "112": {
        name: "(anonymous_112)",
        decl: {
          start: {
            line: 1488,
            column: 13
          },
          end: {
            line: 1488,
            column: 14
          }
        },
        loc: {
          start: {
            line: 1488,
            column: 19
          },
          end: {
            line: 1491,
            column: 7
          }
        },
        line: 1488
      },
      "113": {
        name: "(anonymous_113)",
        decl: {
          start: {
            line: 1511,
            column: 28
          },
          end: {
            line: 1511,
            column: 29
          }
        },
        loc: {
          start: {
            line: 1511,
            column: 34
          },
          end: {
            line: 1515,
            column: 3
          }
        },
        line: 1511
      },
      "114": {
        name: "(anonymous_114)",
        decl: {
          start: {
            line: 1543,
            column: 35
          },
          end: {
            line: 1543,
            column: 36
          }
        },
        loc: {
          start: {
            line: 1543,
            column: 41
          },
          end: {
            line: 1543,
            column: 76
          }
        },
        line: 1543
      },
      "115": {
        name: "(anonymous_115)",
        decl: {
          start: {
            line: 1583,
            column: 28
          },
          end: {
            line: 1583,
            column: 29
          }
        },
        loc: {
          start: {
            line: 1583,
            column: 39
          },
          end: {
            line: 1591,
            column: 19
          }
        },
        line: 1583
      },
      "116": {
        name: "(anonymous_116)",
        decl: {
          start: {
            line: 1661,
            column: 21
          },
          end: {
            line: 1661,
            column: 22
          }
        },
        loc: {
          start: {
            line: 1661,
            column: 27
          },
          end: {
            line: 1661,
            column: 40
          }
        },
        line: 1661
      },
      "117": {
        name: "(anonymous_117)",
        decl: {
          start: {
            line: 1717,
            column: 31
          },
          end: {
            line: 1717,
            column: 32
          }
        },
        loc: {
          start: {
            line: 1717,
            column: 42
          },
          end: {
            line: 1747,
            column: 1
          }
        },
        line: 1717
      },
      "118": {
        name: "(anonymous_118)",
        decl: {
          start: {
            line: 1749,
            column: 32
          },
          end: {
            line: 1749,
            column: 33
          }
        },
        loc: {
          start: {
            line: 1749,
            column: 43
          },
          end: {
            line: 1781,
            column: 1
          }
        },
        line: 1749
      },
      "119": {
        name: "(anonymous_119)",
        decl: {
          start: {
            line: 1783,
            column: 27
          },
          end: {
            line: 1783,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1783,
            column: 42
          },
          end: {
            line: 1786,
            column: 1
          }
        },
        line: 1783
      },
      "120": {
        name: "(anonymous_120)",
        decl: {
          start: {
            line: 1788,
            column: 24
          },
          end: {
            line: 1788,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1788,
            column: 36
          },
          end: {
            line: 1792,
            column: 1
          }
        },
        line: 1788
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 236,
            column: 50
          },
          end: {
            line: 236,
            column: 68
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 236,
            column: 63
          },
          end: {
            line: 236,
            column: 68
          }
        }],
        line: 236
      },
      "1": {
        loc: {
          start: {
            line: 268,
            column: 19
          },
          end: {
            line: 268,
            column: 70
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 268,
            column: 32
          },
          end: {
            line: 268,
            column: 49
          }
        }, {
          start: {
            line: 268,
            column: 52
          },
          end: {
            line: 268,
            column: 70
          }
        }],
        line: 268
      },
      "2": {
        loc: {
          start: {
            line: 271,
            column: 13
          },
          end: {
            line: 271,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 271,
            column: 26
          },
          end: {
            line: 271,
            column: 48
          }
        }, {
          start: {
            line: 271,
            column: 51
          },
          end: {
            line: 271,
            column: 69
          }
        }],
        line: 271
      },
      "3": {
        loc: {
          start: {
            line: 282,
            column: 21
          },
          end: {
            line: 282,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 282,
            column: 34
          },
          end: {
            line: 282,
            column: 62
          }
        }, {
          start: {
            line: 282,
            column: 65
          },
          end: {
            line: 282,
            column: 67
          }
        }],
        line: 282
      },
      "4": {
        loc: {
          start: {
            line: 298,
            column: 9
          },
          end: {
            line: 337,
            column: 9
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 298,
            column: 22
          },
          end: {
            line: 298,
            column: 26
          }
        }, {
          start: {
            line: 299,
            column: 10
          },
          end: {
            line: 336,
            column: 13
          }
        }],
        line: 298
      },
      "5": {
        loc: {
          start: {
            line: 353,
            column: 2
          },
          end: {
            line: 353,
            column: 41
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 353,
            column: 36
          },
          end: {
            line: 353,
            column: 41
          }
        }],
        line: 353
      },
      "6": {
        loc: {
          start: {
            line: 354,
            column: 2
          },
          end: {
            line: 354,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 354,
            column: 27
          },
          end: {
            line: 354,
            column: 32
          }
        }],
        line: 354
      },
      "7": {
        loc: {
          start: {
            line: 355,
            column: 2
          },
          end: {
            line: 355,
            column: 24
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 355,
            column: 19
          },
          end: {
            line: 355,
            column: 24
          }
        }],
        line: 355
      },
      "8": {
        loc: {
          start: {
            line: 356,
            column: 2
          },
          end: {
            line: 356,
            column: 40
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 356,
            column: 19
          },
          end: {
            line: 356,
            column: 40
          }
        }],
        line: 356
      },
      "9": {
        loc: {
          start: {
            line: 357,
            column: 2
          },
          end: {
            line: 357,
            column: 23
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 357,
            column: 14
          },
          end: {
            line: 357,
            column: 23
          }
        }],
        line: 357
      },
      "10": {
        loc: {
          start: {
            line: 358,
            column: 2
          },
          end: {
            line: 358,
            column: 29
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 358,
            column: 24
          },
          end: {
            line: 358,
            column: 29
          }
        }],
        line: 358
      },
      "11": {
        loc: {
          start: {
            line: 409,
            column: 4
          },
          end: {
            line: 420,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 409,
            column: 4
          },
          end: {
            line: 420,
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
        line: 409
      },
      "12": {
        loc: {
          start: {
            line: 411,
            column: 8
          },
          end: {
            line: 413,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 411,
            column: 8
          },
          end: {
            line: 413,
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
        line: 411
      },
      "13": {
        loc: {
          start: {
            line: 411,
            column: 12
          },
          end: {
            line: 411,
            column: 80
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 411,
            column: 12
          },
          end: {
            line: 411,
            column: 37
          }
        }, {
          start: {
            line: 411,
            column: 41
          },
          end: {
            line: 411,
            column: 80
          }
        }],
        line: 411
      },
      "14": {
        loc: {
          start: {
            line: 416,
            column: 15
          },
          end: {
            line: 416,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 416,
            column: 15
          },
          end: {
            line: 416,
            column: 39
          }
        }, {
          start: {
            line: 416,
            column: 43
          },
          end: {
            line: 416,
            column: 44
          }
        }],
        line: 416
      },
      "15": {
        loc: {
          start: {
            line: 419,
            column: 18
          },
          end: {
            line: 419,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 419,
            column: 18
          },
          end: {
            line: 419,
            column: 39
          }
        }, {
          start: {
            line: 419,
            column: 43
          },
          end: {
            line: 419,
            column: 45
          }
        }],
        line: 419
      },
      "16": {
        loc: {
          start: {
            line: 540,
            column: 4
          },
          end: {
            line: 546,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 540,
            column: 4
          },
          end: {
            line: 546,
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
        line: 540
      },
      "17": {
        loc: {
          start: {
            line: 545,
            column: 6
          },
          end: {
            line: 545,
            column: 78
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 545,
            column: 6
          },
          end: {
            line: 545,
            column: 78
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
        line: 545
      },
      "18": {
        loc: {
          start: {
            line: 557,
            column: 6
          },
          end: {
            line: 557,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 557,
            column: 45
          },
          end: {
            line: 557,
            column: 49
          }
        }, {
          start: {
            line: 557,
            column: 52
          },
          end: {
            line: 557,
            column: 78
          }
        }],
        line: 557
      },
      "19": {
        loc: {
          start: {
            line: 563,
            column: 4
          },
          end: {
            line: 565,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 563,
            column: 4
          },
          end: {
            line: 565,
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
        line: 563
      },
      "20": {
        loc: {
          start: {
            line: 569,
            column: 4
          },
          end: {
            line: 569,
            column: 28
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 569,
            column: 13
          },
          end: {
            line: 569,
            column: 28
          }
        }],
        line: 569
      },
      "21": {
        loc: {
          start: {
            line: 570,
            column: 4
          },
          end: {
            line: 570,
            column: 34
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 570,
            column: 15
          },
          end: {
            line: 570,
            column: 34
          }
        }],
        line: 570
      },
      "22": {
        loc: {
          start: {
            line: 571,
            column: 4
          },
          end: {
            line: 571,
            column: 23
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 571,
            column: 17
          },
          end: {
            line: 571,
            column: 23
          }
        }],
        line: 571
      },
      "23": {
        loc: {
          start: {
            line: 572,
            column: 4
          },
          end: {
            line: 572,
            column: 21
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 572,
            column: 12
          },
          end: {
            line: 572,
            column: 21
          }
        }],
        line: 572
      },
      "24": {
        loc: {
          start: {
            line: 574,
            column: 4
          },
          end: {
            line: 576,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 574,
            column: 4
          },
          end: {
            line: 576,
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
        line: 574
      },
      "25": {
        loc: {
          start: {
            line: 580,
            column: 16
          },
          end: {
            line: 580,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 580,
            column: 16
          },
          end: {
            line: 580,
            column: 52
          }
        }, {
          start: {
            line: 580,
            column: 56
          },
          end: {
            line: 580,
            column: 57
          }
        }],
        line: 580
      },
      "26": {
        loc: {
          start: {
            line: 581,
            column: 20
          },
          end: {
            line: 581,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 581,
            column: 20
          },
          end: {
            line: 581,
            column: 61
          }
        }, {
          start: {
            line: 581,
            column: 65
          },
          end: {
            line: 581,
            column: 66
          }
        }],
        line: 581
      },
      "27": {
        loc: {
          start: {
            line: 582,
            column: 17
          },
          end: {
            line: 582,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 582,
            column: 17
          },
          end: {
            line: 582,
            column: 60
          }
        }, {
          start: {
            line: 582,
            column: 64
          },
          end: {
            line: 582,
            column: 65
          }
        }],
        line: 582
      },
      "28": {
        loc: {
          start: {
            line: 620,
            column: 10
          },
          end: {
            line: 622,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 620,
            column: 10
          },
          end: {
            line: 622,
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
        line: 620
      },
      "29": {
        loc: {
          start: {
            line: 620,
            column: 14
          },
          end: {
            line: 620,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 620,
            column: 14
          },
          end: {
            line: 620,
            column: 31
          }
        }, {
          start: {
            line: 620,
            column: 35
          },
          end: {
            line: 620,
            column: 59
          }
        }],
        line: 620
      },
      "30": {
        loc: {
          start: {
            line: 676,
            column: 4
          },
          end: {
            line: 682,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 676,
            column: 4
          },
          end: {
            line: 682,
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
        line: 676
      },
      "31": {
        loc: {
          start: {
            line: 676,
            column: 8
          },
          end: {
            line: 676,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 676,
            column: 8
          },
          end: {
            line: 676,
            column: 36
          }
        }, {
          start: {
            line: 676,
            column: 40
          },
          end: {
            line: 676,
            column: 77
          }
        }],
        line: 676
      },
      "32": {
        loc: {
          start: {
            line: 678,
            column: 12
          },
          end: {
            line: 678,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 678,
            column: 12
          },
          end: {
            line: 678,
            column: 37
          }
        }, {
          start: {
            line: 678,
            column: 41
          },
          end: {
            line: 678,
            column: 43
          }
        }],
        line: 678
      },
      "33": {
        loc: {
          start: {
            line: 679,
            column: 12
          },
          end: {
            line: 679,
            column: 92
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 679,
            column: 12
          },
          end: {
            line: 679,
            column: 86
          }
        }, {
          start: {
            line: 679,
            column: 90
          },
          end: {
            line: 679,
            column: 92
          }
        }],
        line: 679
      },
      "34": {
        loc: {
          start: {
            line: 684,
            column: 16
          },
          end: {
            line: 684,
            column: 96
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 684,
            column: 16
          },
          end: {
            line: 684,
            column: 90
          }
        }, {
          start: {
            line: 684,
            column: 94
          },
          end: {
            line: 684,
            column: 96
          }
        }],
        line: 684
      },
      "35": {
        loc: {
          start: {
            line: 795,
            column: 4
          },
          end: {
            line: 802,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 795,
            column: 4
          },
          end: {
            line: 802,
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
        line: 795
      },
      "36": {
        loc: {
          start: {
            line: 806,
            column: 4
          },
          end: {
            line: 835,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 806,
            column: 4
          },
          end: {
            line: 835,
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
        line: 806
      },
      "37": {
        loc: {
          start: {
            line: 816,
            column: 8
          },
          end: {
            line: 833,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 816,
            column: 8
          },
          end: {
            line: 833,
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
        line: 816
      },
      "38": {
        loc: {
          start: {
            line: 868,
            column: 8
          },
          end: {
            line: 879,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 868,
            column: 8
          },
          end: {
            line: 879,
            column: 9
          }
        }, {
          start: {
            line: 873,
            column: 15
          },
          end: {
            line: 879,
            column: 9
          }
        }],
        line: 868
      },
      "39": {
        loc: {
          start: {
            line: 932,
            column: 4
          },
          end: {
            line: 951,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 932,
            column: 4
          },
          end: {
            line: 951,
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
        line: 932
      },
      "40": {
        loc: {
          start: {
            line: 934,
            column: 6
          },
          end: {
            line: 937,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 934,
            column: 6
          },
          end: {
            line: 937,
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
        line: 934
      },
      "41": {
        loc: {
          start: {
            line: 953,
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
            line: 953,
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
        line: 953
      },
      "42": {
        loc: {
          start: {
            line: 975,
            column: 4
          },
          end: {
            line: 1006,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 975,
            column: 4
          },
          end: {
            line: 1006,
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
        line: 975
      },
      "43": {
        loc: {
          start: {
            line: 975,
            column: 8
          },
          end: {
            line: 975,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 975,
            column: 8
          },
          end: {
            line: 975,
            column: 37
          }
        }, {
          start: {
            line: 975,
            column: 41
          },
          end: {
            line: 975,
            column: 69
          }
        }],
        line: 975
      },
      "44": {
        loc: {
          start: {
            line: 977,
            column: 6
          },
          end: {
            line: 986,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 977,
            column: 6
          },
          end: {
            line: 986,
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
        line: 977
      },
      "45": {
        loc: {
          start: {
            line: 980,
            column: 18
          },
          end: {
            line: 980,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 980,
            column: 18
          },
          end: {
            line: 980,
            column: 32
          }
        }, {
          start: {
            line: 980,
            column: 36
          },
          end: {
            line: 980,
            column: 40
          }
        }],
        line: 980
      },
      "46": {
        loc: {
          start: {
            line: 987,
            column: 6
          },
          end: {
            line: 994,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 987,
            column: 6
          },
          end: {
            line: 994,
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
        line: 987
      },
      "47": {
        loc: {
          start: {
            line: 991,
            column: 16
          },
          end: {
            line: 991,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 991,
            column: 16
          },
          end: {
            line: 991,
            column: 30
          }
        }, {
          start: {
            line: 991,
            column: 34
          },
          end: {
            line: 991,
            column: 38
          }
        }],
        line: 991
      },
      "48": {
        loc: {
          start: {
            line: 1025,
            column: 6
          },
          end: {
            line: 1025,
            column: 97
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1025,
            column: 6
          },
          end: {
            line: 1025,
            column: 60
          }
        }, {
          start: {
            line: 1025,
            column: 64
          },
          end: {
            line: 1025,
            column: 97
          }
        }],
        line: 1025
      },
      "49": {
        loc: {
          start: {
            line: 1152,
            column: 15
          },
          end: {
            line: 1164,
            column: 15
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1152,
            column: 15
          },
          end: {
            line: 1152,
            column: 35
          }
        }, {
          start: {
            line: 1153,
            column: 16
          },
          end: {
            line: 1163,
            column: 30
          }
        }],
        line: 1152
      },
      "50": {
        loc: {
          start: {
            line: 1165,
            column: 15
          },
          end: {
            line: 1189,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1166,
            column: 16
          },
          end: {
            line: 1176,
            column: 30
          }
        }, {
          start: {
            line: 1178,
            column: 16
          },
          end: {
            line: 1188,
            column: 30
          }
        }],
        line: 1165
      },
      "51": {
        loc: {
          start: {
            line: 1246,
            column: 15
          },
          end: {
            line: 1263,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1247,
            column: 16
          },
          end: {
            line: 1254,
            column: 30
          }
        }, {
          start: {
            line: 1256,
            column: 16
          },
          end: {
            line: 1262,
            column: 30
          }
        }],
        line: 1246
      },
      "52": {
        loc: {
          start: {
            line: 1246,
            column: 15
          },
          end: {
            line: 1246,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1246,
            column: 15
          },
          end: {
            line: 1246,
            column: 32
          }
        }, {
          start: {
            line: 1246,
            column: 36
          },
          end: {
            line: 1246,
            column: 71
          }
        }],
        line: 1246
      },
      "53": {
        loc: {
          start: {
            line: 1272,
            column: 4
          },
          end: {
            line: 1274,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1272,
            column: 4
          },
          end: {
            line: 1274,
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
        line: 1272
      },
      "54": {
        loc: {
          start: {
            line: 1284,
            column: 6
          },
          end: {
            line: 1286,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1284,
            column: 6
          },
          end: {
            line: 1286,
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
        line: 1284
      },
      "55": {
        loc: {
          start: {
            line: 1284,
            column: 12
          },
          end: {
            line: 1284,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1284,
            column: 12
          },
          end: {
            line: 1284,
            column: 26
          }
        }, {
          start: {
            line: 1284,
            column: 30
          },
          end: {
            line: 1284,
            column: 55
          }
        }],
        line: 1284
      },
      "56": {
        loc: {
          start: {
            line: 1294,
            column: 23
          },
          end: {
            line: 1294,
            column: 41
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1294,
            column: 31
          },
          end: {
            line: 1294,
            column: 36
          }
        }, {
          start: {
            line: 1294,
            column: 39
          },
          end: {
            line: 1294,
            column: 41
          }
        }],
        line: 1294
      },
      "57": {
        loc: {
          start: {
            line: 1294,
            column: 51
          },
          end: {
            line: 1294,
            column: 71
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1294,
            column: 63
          },
          end: {
            line: 1294,
            column: 66
          }
        }, {
          start: {
            line: 1294,
            column: 69
          },
          end: {
            line: 1294,
            column: 71
          }
        }],
        line: 1294
      },
      "58": {
        loc: {
          start: {
            line: 1296,
            column: 73
          },
          end: {
            line: 1296,
            column: 93
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1296,
            column: 85
          },
          end: {
            line: 1296,
            column: 88
          }
        }, {
          start: {
            line: 1296,
            column: 91
          },
          end: {
            line: 1296,
            column: 93
          }
        }],
        line: 1296
      },
      "59": {
        loc: {
          start: {
            line: 1341,
            column: 12
          },
          end: {
            line: 1341,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1341,
            column: 12
          },
          end: {
            line: 1341,
            column: 16
          }
        }, {
          start: {
            line: 1341,
            column: 20
          },
          end: {
            line: 1341,
            column: 47
          }
        }],
        line: 1341
      },
      "60": {
        loc: {
          start: {
            line: 1358,
            column: 30
          },
          end: {
            line: 1358,
            column: 96
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1358,
            column: 30
          },
          end: {
            line: 1358,
            column: 49
          }
        }, {
          start: {
            line: 1358,
            column: 53
          },
          end: {
            line: 1358,
            column: 96
          }
        }],
        line: 1358
      },
      "61": {
        loc: {
          start: {
            line: 1369,
            column: 6
          },
          end: {
            line: 1371,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1369,
            column: 6
          },
          end: {
            line: 1371,
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
        line: 1369
      },
      "62": {
        loc: {
          start: {
            line: 1377,
            column: 23
          },
          end: {
            line: 1377,
            column: 90
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1377,
            column: 49
          },
          end: {
            line: 1377,
            column: 85
          }
        }, {
          start: {
            line: 1377,
            column: 88
          },
          end: {
            line: 1377,
            column: 90
          }
        }],
        line: 1377
      },
      "63": {
        loc: {
          start: {
            line: 1379,
            column: 6
          },
          end: {
            line: 1381,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1379,
            column: 6
          },
          end: {
            line: 1381,
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
        line: 1379
      },
      "64": {
        loc: {
          start: {
            line: 1383,
            column: 6
          },
          end: {
            line: 1420,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 1384,
            column: 8
          },
          end: {
            line: 1387,
            column: 16
          }
        }, {
          start: {
            line: 1388,
            column: 8
          },
          end: {
            line: 1396,
            column: 16
          }
        }, {
          start: {
            line: 1397,
            column: 8
          },
          end: {
            line: 1406,
            column: 16
          }
        }, {
          start: {
            line: 1407,
            column: 8
          },
          end: {
            line: 1419,
            column: 16
          }
        }],
        line: 1383
      },
      "65": {
        loc: {
          start: {
            line: 1398,
            column: 10
          },
          end: {
            line: 1400,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1398,
            column: 10
          },
          end: {
            line: 1400,
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
        line: 1398
      },
      "66": {
        loc: {
          start: {
            line: 1402,
            column: 12
          },
          end: {
            line: 1404,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1402,
            column: 12
          },
          end: {
            line: 1404,
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
        line: 1402
      },
      "67": {
        loc: {
          start: {
            line: 1408,
            column: 10
          },
          end: {
            line: 1414,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1408,
            column: 10
          },
          end: {
            line: 1414,
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
        line: 1408
      },
      "68": {
        loc: {
          start: {
            line: 1409,
            column: 12
          },
          end: {
            line: 1413,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1409,
            column: 12
          },
          end: {
            line: 1413,
            column: 13
          }
        }, {
          start: {
            line: 1411,
            column: 19
          },
          end: {
            line: 1413,
            column: 13
          }
        }],
        line: 1409
      },
      "69": {
        loc: {
          start: {
            line: 1415,
            column: 10
          },
          end: {
            line: 1418,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1415,
            column: 10
          },
          end: {
            line: 1418,
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
        line: 1415
      },
      "70": {
        loc: {
          start: {
            line: 1434,
            column: 2
          },
          end: {
            line: 1436,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1434,
            column: 2
          },
          end: {
            line: 1436,
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
        line: 1434
      },
      "71": {
        loc: {
          start: {
            line: 1452,
            column: 4
          },
          end: {
            line: 1473,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 1453,
            column: 6
          },
          end: {
            line: 1465,
            column: 7
          }
        }, {
          start: {
            line: 1466,
            column: 6
          },
          end: {
            line: 1472,
            column: 14
          }
        }],
        line: 1452
      },
      "72": {
        loc: {
          start: {
            line: 1498,
            column: 15
          },
          end: {
            line: 1507,
            column: 11
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1499,
            column: 10
          },
          end: {
            line: 1503,
            column: 11
          }
        }, {
          start: {
            line: 1504,
            column: 10
          },
          end: {
            line: 1507,
            column: 11
          }
        }],
        line: 1498
      },
      "73": {
        loc: {
          start: {
            line: 1513,
            column: 6
          },
          end: {
            line: 1513,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1513,
            column: 45
          },
          end: {
            line: 1513,
            column: 49
          }
        }, {
          start: {
            line: 1513,
            column: 52
          },
          end: {
            line: 1513,
            column: 78
          }
        }],
        line: 1513
      },
      "74": {
        loc: {
          start: {
            line: 1520,
            column: 7
          },
          end: {
            line: 1712,
            column: 7
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1521,
            column: 8
          },
          end: {
            line: 1709,
            column: 11
          }
        }, {
          start: {
            line: 1711,
            column: 8
          },
          end: {
            line: 1711,
            column: 24
          }
        }],
        line: 1520
      },
      "75": {
        loc: {
          start: {
            line: 1522,
            column: 11
          },
          end: {
            line: 1529,
            column: 11
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1522,
            column: 11
          },
          end: {
            line: 1522,
            column: 26
          }
        }, {
          start: {
            line: 1522,
            column: 30
          },
          end: {
            line: 1522,
            column: 69
          }
        }, {
          start: {
            line: 1523,
            column: 12
          },
          end: {
            line: 1528,
            column: 14
          }
        }],
        line: 1522
      },
      "76": {
        loc: {
          start: {
            line: 1531,
            column: 13
          },
          end: {
            line: 1579,
            column: 13
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1531,
            column: 47
          },
          end: {
            line: 1531,
            column: 51
          }
        }, {
          start: {
            line: 1532,
            column: 14
          },
          end: {
            line: 1578,
            column: 20
          }
        }],
        line: 1531
      },
      "77": {
        loc: {
          start: {
            line: 1531,
            column: 13
          },
          end: {
            line: 1531,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1531,
            column: 13
          },
          end: {
            line: 1531,
            column: 24
          }
        }, {
          start: {
            line: 1531,
            column: 28
          },
          end: {
            line: 1531,
            column: 44
          }
        }],
        line: 1531
      },
      "78": {
        loc: {
          start: {
            line: 1533,
            column: 17
          },
          end: {
            line: 1568,
            column: 17
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1533,
            column: 17
          },
          end: {
            line: 1533,
            column: 38
          }
        }, {
          start: {
            line: 1533,
            column: 43
          },
          end: {
            line: 1533,
            column: 62
          }
        }, {
          start: {
            line: 1533,
            column: 66
          },
          end: {
            line: 1533,
            column: 86
          }
        }, {
          start: {
            line: 1534,
            column: 18
          },
          end: {
            line: 1567,
            column: 24
          }
        }],
        line: 1533
      },
      "79": {
        loc: {
          start: {
            line: 1535,
            column: 21
          },
          end: {
            line: 1566,
            column: 21
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1535,
            column: 55
          },
          end: {
            line: 1535,
            column: 59
          }
        }, {
          start: {
            line: 1536,
            column: 22
          },
          end: {
            line: 1565,
            column: 28
          }
        }],
        line: 1535
      },
      "80": {
        loc: {
          start: {
            line: 1569,
            column: 17
          },
          end: {
            line: 1577,
            column: 17
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1569,
            column: 17
          },
          end: {
            line: 1569,
            column: 38
          }
        }, {
          start: {
            line: 1570,
            column: 18
          },
          end: {
            line: 1576,
            column: 24
          }
        }],
        line: 1569
      },
      "81": {
        loc: {
          start: {
            line: 1596,
            column: 17
          },
          end: {
            line: 1604,
            column: 17
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1596,
            column: 42
          },
          end: {
            line: 1596,
            column: 46
          }
        }, {
          start: {
            line: 1597,
            column: 18
          },
          end: {
            line: 1603,
            column: 20
          }
        }],
        line: 1596
      },
      "82": {
        loc: {
          start: {
            line: 1605,
            column: 17
          },
          end: {
            line: 1611,
            column: 17
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1605,
            column: 17
          },
          end: {
            line: 1605,
            column: 37
          }
        }, {
          start: {
            line: 1606,
            column: 18
          },
          end: {
            line: 1610,
            column: 20
          }
        }],
        line: 1605
      },
      "83": {
        loc: {
          start: {
            line: 1614,
            column: 15
          },
          end: {
            line: 1616,
            column: 15
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1614,
            column: 15
          },
          end: {
            line: 1614,
            column: 36
          }
        }, {
          start: {
            line: 1615,
            column: 16
          },
          end: {
            line: 1615,
            column: 90
          }
        }],
        line: 1614
      },
      "84": {
        loc: {
          start: {
            line: 1619,
            column: 11
          },
          end: {
            line: 1639,
            column: 11
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1619,
            column: 11
          },
          end: {
            line: 1619,
            column: 32
          }
        }, {
          start: {
            line: 1619,
            column: 36
          },
          end: {
            line: 1619,
            column: 56
          }
        }, {
          start: {
            line: 1620,
            column: 12
          },
          end: {
            line: 1638,
            column: 15
          }
        }],
        line: 1619
      },
      "85": {
        loc: {
          start: {
            line: 1640,
            column: 11
          },
          end: {
            line: 1670,
            column: 11
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1640,
            column: 11
          },
          end: {
            line: 1640,
            column: 32
          }
        }, {
          start: {
            line: 1640,
            column: 36
          },
          end: {
            line: 1640,
            column: 55
          }
        }, {
          start: {
            line: 1642,
            column: 12
          },
          end: {
            line: 1669,
            column: 14
          }
        }],
        line: 1640
      },
      "86": {
        loc: {
          start: {
            line: 1675,
            column: 15
          },
          end: {
            line: 1689,
            column: 17
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1675,
            column: 15
          },
          end: {
            line: 1675,
            column: 81
          }
        }, {
          start: {
            line: 1676,
            column: 16
          },
          end: {
            line: 1676,
            column: 30
          }
        }, {
          start: {
            line: 1677,
            column: 18
          },
          end: {
            line: 1688,
            column: 20
          }
        }],
        line: 1675
      },
      "87": {
        loc: {
          start: {
            line: 1692,
            column: 11
          },
          end: {
            line: 1701,
            column: 13
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1692,
            column: 11
          },
          end: {
            line: 1692,
            column: 28
          }
        }, {
          start: {
            line: 1693,
            column: 12
          },
          end: {
            line: 1693,
            column: 29
          }
        }, {
          start: {
            line: 1694,
            column: 12
          },
          end: {
            line: 1694,
            column: 72
          }
        }, {
          start: {
            line: 1695,
            column: 14
          },
          end: {
            line: 1700,
            column: 16
          }
        }],
        line: 1692
      },
      "88": {
        loc: {
          start: {
            line: 1702,
            column: 11
          },
          end: {
            line: 1707,
            column: 11
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1702,
            column: 11
          },
          end: {
            line: 1702,
            column: 27
          }
        }, {
          start: {
            line: 1702,
            column: 31
          },
          end: {
            line: 1702,
            column: 89
          }
        }, {
          start: {
            line: 1703,
            column: 12
          },
          end: {
            line: 1706,
            column: 14
          }
        }],
        line: 1702
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
      "237": 0,
      "238": 0,
      "239": 0,
      "240": 0,
      "241": 0,
      "242": 0,
      "243": 0,
      "244": 0,
      "245": 0,
      "246": 0,
      "247": 0,
      "248": 0,
      "249": 0,
      "250": 0,
      "251": 0,
      "252": 0,
      "253": 0,
      "254": 0,
      "255": 0,
      "256": 0,
      "257": 0,
      "258": 0,
      "259": 0,
      "260": 0,
      "261": 0,
      "262": 0,
      "263": 0,
      "264": 0,
      "265": 0,
      "266": 0,
      "267": 0,
      "268": 0,
      "269": 0,
      "270": 0,
      "271": 0,
      "272": 0,
      "273": 0,
      "274": 0,
      "275": 0,
      "276": 0,
      "277": 0,
      "278": 0,
      "279": 0,
      "280": 0,
      "281": 0,
      "282": 0,
      "283": 0,
      "284": 0,
      "285": 0,
      "286": 0,
      "287": 0,
      "288": 0,
      "289": 0,
      "290": 0,
      "291": 0,
      "292": 0,
      "293": 0,
      "294": 0,
      "295": 0,
      "296": 0,
      "297": 0,
      "298": 0,
      "299": 0,
      "300": 0,
      "301": 0,
      "302": 0,
      "303": 0,
      "304": 0,
      "305": 0,
      "306": 0,
      "307": 0,
      "308": 0,
      "309": 0,
      "310": 0,
      "311": 0,
      "312": 0,
      "313": 0,
      "314": 0,
      "315": 0,
      "316": 0,
      "317": 0,
      "318": 0,
      "319": 0,
      "320": 0,
      "321": 0,
      "322": 0,
      "323": 0,
      "324": 0,
      "325": 0,
      "326": 0,
      "327": 0,
      "328": 0,
      "329": 0,
      "330": 0,
      "331": 0,
      "332": 0,
      "333": 0,
      "334": 0,
      "335": 0,
      "336": 0,
      "337": 0,
      "338": 0,
      "339": 0,
      "340": 0,
      "341": 0,
      "342": 0,
      "343": 0,
      "344": 0,
      "345": 0,
      "346": 0,
      "347": 0,
      "348": 0,
      "349": 0,
      "350": 0,
      "351": 0,
      "352": 0,
      "353": 0,
      "354": 0,
      "355": 0,
      "356": 0,
      "357": 0,
      "358": 0,
      "359": 0,
      "360": 0,
      "361": 0,
      "362": 0,
      "363": 0,
      "364": 0,
      "365": 0,
      "366": 0,
      "367": 0,
      "368": 0,
      "369": 0,
      "370": 0
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
      "120": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0],
      "6": [0],
      "7": [0],
      "8": [0],
      "9": [0],
      "10": [0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0],
      "21": [0],
      "22": [0],
      "23": [0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
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
      "64": [0, 0, 0, 0],
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
      "75": [0, 0, 0],
      "76": [0, 0],
      "77": [0, 0],
      "78": [0, 0, 0, 0],
      "79": [0, 0],
      "80": [0, 0],
      "81": [0, 0],
      "82": [0, 0],
      "83": [0, 0],
      "84": [0, 0, 0],
      "85": [0, 0, 0],
      "86": [0, 0, 0],
      "87": [0, 0, 0, 0],
      "88": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "044d9d5dee5415703bc5d1f8da541cfd474430c7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_8308hf9j4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_8308hf9j4();

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/display-name */






























































 // import { useGetUserPrefQuery } from '@/rtk-query/user';





cov_8308hf9j4().s[0]++;

const genericClickHandler = (ev, fn) => {
  cov_8308hf9j4().f[0]++;
  cov_8308hf9j4().s[1]++;
  ev.stopPropagation();
  cov_8308hf9j4().s[2]++;
  fn(ev);
};

cov_8308hf9j4().s[3]++;

const styles = theme => {
  cov_8308hf9j4().f[1]++;
  cov_8308hf9j4().s[4]++;
  return {
    grid: {
      padding: theme.spacing(1)
    },
    tableHeader: {
      fontWeight: 'bolder',
      fontSize: 18
    },
    muiRow: {
      '& .MuiTableRow-root': {
        cursor: 'pointer'
      }
    },
    iconPatt: {
      width: '24px',
      height: '24px',
      filter: theme.palette.secondary.brightness
    },
    viewSwitchButton: {
      justifySelf: 'flex-end',
      paddingLeft: '1rem',
      '@media (max-width: 1450px)': {
        marginRight: '2rem'
      }
    },
    createButton: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      whiteSpace: 'nowrap'
    },
    UploadImport: {
      marginLeft: '1.5rem'
    },
    noDesignAddButton: {
      marginTop: '0.5rem'
    },
    noDesignContainer: {
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    noDesignButtons: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    noDesignPaper: {
      padding: '0.5rem',
      fontSize: '3rem'
    },
    noDesignText: {
      fontSize: '2rem',
      marginBottom: '2rem'
    },
    addIcon: {
      paddingRight: '.35rem'
    },
    visibilityImg: {
      filter: theme.palette.secondary.img
    },
    searchAndView: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      '@media (max-width: 1450px)': {
        paddingLeft: 0,
        margin: 0
      }
    },
    searchWrapper: {
      justifySelf: 'flex-end',
      marginLeft: 'auto',
      paddingLeft: '1rem',
      display: 'flex',
      '@media (max-width: 965px)': {
        width: 'max-content'
      }
    },
    catalogFilter: {
      marginRight: '2rem'
    },
    btnText: {
      display: 'block',
      '@media (max-width: 1450px)': {
        display: 'none'
      }
    },
    backButton: {
      marginRight: theme.spacing(2)
    },
    yamlDialogTitle: {
      display: 'flex',
      alignItems: 'center'
    },
    yamlDialogTitleText: {
      flexGrow: 1
    },
    fullScreenCodeMirror: {
      height: '100%',
      '& .CodeMirror': {
        minHeight: '300px',
        height: '100%'
      }
    },
    autoComplete: {
      width: '120px',
      minWidth: '120px',
      maxWidth: 150,
      marginRight: 'auto'
    }
  };
};

function TooltipIcon({
  children,
  onClick,
  title,
  placement
}) {
  cov_8308hf9j4().f[2]++;
  cov_8308hf9j4().s[5]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.CustomTooltip, {
    title: title,
    placement: placement,
    interactive: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
      onClick: onClick,
      children: children
    })
  });
}

function YAMLEditor({
  pattern,
  onClose,
  onSubmit,
  isReadOnly = (cov_8308hf9j4().b[0][0]++, false)
}) {
  cov_8308hf9j4().f[3]++;
  const classes = (cov_8308hf9j4().s[6]++, (0,_assets_styles_general_tool_styles__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z)());
  const [yaml, setYaml] = (cov_8308hf9j4().s[7]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(pattern.pattern_file));
  const [fullScreen, setFullScreen] = (cov_8308hf9j4().s[8]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false));
  cov_8308hf9j4().s[9]++;

  const toggleFullScreen = () => {
    cov_8308hf9j4().f[4]++;
    cov_8308hf9j4().s[10]++;
    setFullScreen(!fullScreen);
  };

  cov_8308hf9j4().s[11]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Dialog, {
    onClose: onClose,
    "aria-labelledby": "pattern-dialog-title",
    open: true,
    maxWidth: "md",
    fullScreen: fullScreen,
    fullWidth: !fullScreen,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogTitle, {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end'
      },
      disableTypography: true,
      id: "pattern-dialog-title",
      className: classes.yamlDialogTitle,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          variant: "h6",
          className: classes.yamlDialogTitleText,
          children: pattern.name
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.CustomTooltip, {
          placement: "top",
          title: fullScreen ? (cov_8308hf9j4().b[1][0]++, 'Exit Fullscreen') : (cov_8308hf9j4().b[1][1]++, 'Enter Fullscreen'),
          onClick: toggleFullScreen,
          children: fullScreen ? (cov_8308hf9j4().b[2][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_7___default()), {})) : (cov_8308hf9j4().b[2][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5___default()), {}))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.CustomTooltip, {
          placement: "top",
          title: "Exit",
          onClick: onClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default()), {})
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Divider, {
      variant: "fullWidth",
      light: true
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContent, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(react_codemirror2__WEBPACK_IMPORTED_MODULE_12__.UnControlled, {
        value: pattern.pattern_file,
        className: fullScreen ? (cov_8308hf9j4().b[3][0]++, classes.fullScreenCodeMirror) : (cov_8308hf9j4().b[3][1]++, ''),
        options: {
          theme: 'material',
          lineNumbers: true,
          lineWrapping: true,
          gutters: ['CodeMirror-lint-markers'],
          // @ts-ignore
          lint: true,
          mode: 'text/x-yaml',
          readOnly: isReadOnly
        },
        onChange: (_, data, val) => {
          cov_8308hf9j4().f[5]++;
          cov_8308hf9j4().s[12]++;
          return setYaml(val);
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Divider, {
      variant: "fullWidth",
      light: true
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogActions, {
      children: isReadOnly ? (cov_8308hf9j4().b[4][0]++, null) : (cov_8308hf9j4().b[4][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.CustomTooltip, {
          title: "Update Pattern",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
            "aria-label": "Update",
            color: "primary",
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.EDIT_DESIGN.action */ .X.EDIT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.EDIT_DESIGN.subject */ .X.EDIT_DESIGN.subject),
            onClick: () => {
              cov_8308hf9j4().f[6]++;
              cov_8308hf9j4().s[13]++;
              return onSubmit({
                data: yaml,
                id: pattern.id,
                name: pattern.name,
                type: _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .FILE_OPS.UPDATE */ .P3.UPDATE,
                catalog_data: pattern.catalog_data
              });
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8___default()), {})
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.CustomTooltip, {
          title: "Delete Pattern",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
            "aria-label": "Delete",
            color: "primary",
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DELETE_A_DESIGN.action */ .X.DELETE_A_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DELETE_A_DESIGN.subject */ .X.DELETE_A_DESIGN.subject),
            onClick: () => {
              cov_8308hf9j4().f[7]++;
              cov_8308hf9j4().s[14]++;
              return onSubmit({
                data: yaml,
                id: pattern.id,
                name: pattern.name,
                type: _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .FILE_OPS.DELETE */ .P3.DELETE,
                catalog_data: pattern.catalog_data
              });
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default()), {})
          })
        })]
      }))
    })]
  });
}

function resetSelectedPattern() {
  cov_8308hf9j4().f[8]++;
  cov_8308hf9j4().s[15]++;
  return {
    show: false,
    pattern: null
  };
}

function MeshplayPatterns({
  updateProgress,
  user,
  classes,
  selectedK8sContexts,
  catalogVisibility,
  disableCreateImportDesignButton = (cov_8308hf9j4().b[5][0]++, false),
  disableUniversalFilter = (cov_8308hf9j4().b[6][0]++, false),
  hideVisibility = (cov_8308hf9j4().b[7][0]++, false),
  initialFilters = (cov_8308hf9j4().b[8][0]++, {
    visibility: 'All'
  }),
  pageTitle = (cov_8308hf9j4().b[9][0]++, 'Designs'),
  arePatternsReadOnly = (cov_8308hf9j4().b[10][0]++, false)
}) {
  cov_8308hf9j4().f[9]++;
  const [page, setPage] = (cov_8308hf9j4().s[16]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(0));
  const [search, setSearch] = (cov_8308hf9j4().s[17]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(''));
  const [sortOrder, setSortOrder] = (cov_8308hf9j4().s[18]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(''));
  const [count, setCount] = (cov_8308hf9j4().s[19]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(0));
  const [pageSize, setPageSize] = (cov_8308hf9j4().s[20]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(10));
  const modalRef = (cov_8308hf9j4().s[21]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)());
  const [patterns, setPatterns] = (cov_8308hf9j4().s[22]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)([]));
  const [selectedRowData, setSelectedRowData] = (cov_8308hf9j4().s[23]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(null));
  const [selectedPattern, setSelectedPattern] = (cov_8308hf9j4().s[24]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(resetSelectedPattern()));
  const router = (cov_8308hf9j4().s[25]++, (0,next_router__WEBPACK_IMPORTED_MODULE_28__.useRouter)());
  const [meshModels, setMeshModels] = (cov_8308hf9j4().s[26]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)([]));
  const [selectedFilters, setSelectedFilters] = (cov_8308hf9j4().s[27]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(initialFilters));
  const [canPublishPattern, setCanPublishPattern] = (cov_8308hf9j4().s[28]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false));
  const [publishSchema, setPublishSchema] = (cov_8308hf9j4().s[29]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({}));
  const [infoModal, setInfoModal] = (cov_8308hf9j4().s[30]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
    open: false,
    ownerID: '',
    selectedResource: {}
  }));
  const [isSearchExpanded, setIsSearchExpanded] = (cov_8308hf9j4().s[31]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false));
  const [viewType, setViewType] = (cov_8308hf9j4().s[32]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)('grid'));
  const {
    notify
  } = (cov_8308hf9j4().s[33]++, (0,_utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_33__/* .useNotification */ .l)());
  const StyleClass = (cov_8308hf9j4().s[34]++, (0,_assets_styles_general_tool_styles__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z)());
  const [visibilityFilter, setVisibilityFilter] = (cov_8308hf9j4().s[35]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(null));
  const [deployPatternMutation] = (cov_8308hf9j4().s[36]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useDeployPatternMutation */ .Nx)());
  const [undeployPatternMutation] = (cov_8308hf9j4().s[37]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useUndeployPatternMutation */ .xy)());
  const {
    data: patternsData,
    isLoading: ispatternsLoading,
    refetch: getPatterns
  } = (cov_8308hf9j4().s[38]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useGetPatternsQuery */ .np)({
    page: page,
    pagesize: pageSize,
    search: search,
    order: sortOrder,
    visibility: JSON.stringify([visibilityFilter])
  }));
  const [clonePattern] = (cov_8308hf9j4().s[39]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useClonePatternMutation */ .wE)());
  const [publishCatalog] = (cov_8308hf9j4().s[40]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .usePublishPatternMutation */ .uA)());
  const [unpublishCatalog] = (cov_8308hf9j4().s[41]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useUnpublishPatternMutation */ .JJ)());
  const [deletePattern] = (cov_8308hf9j4().s[42]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useDeletePatternMutation */ .M)());
  const [importPattern] = (cov_8308hf9j4().s[43]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useImportPatternMutation */ .Yq)());
  const [updatePattern] = (cov_8308hf9j4().s[44]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useUpdatePatternFileMutation */ .yu)());
  const [uploadPatternFile] = (cov_8308hf9j4().s[45]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useUploadPatternFileMutation */ .z9)());
  const [deletePatternFile] = (cov_8308hf9j4().s[46]++, (0,_rtk_query_design__WEBPACK_IMPORTED_MODULE_56__/* .useDeletePatternMutation */ .M)());
  cov_8308hf9j4().s[47]++;
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    cov_8308hf9j4().f[10]++;
    cov_8308hf9j4().s[48]++;

    if (patternsData) {
      cov_8308hf9j4().b[11][0]++;
      const filteredPatterns = (cov_8308hf9j4().s[49]++, patternsData.patterns.filter(content => {
        cov_8308hf9j4().f[11]++;
        cov_8308hf9j4().s[50]++;

        if ((cov_8308hf9j4().b[13][0]++, visibilityFilter === null) || (cov_8308hf9j4().b[13][1]++, content.visibility === visibilityFilter)) {
          cov_8308hf9j4().b[12][0]++;
          cov_8308hf9j4().s[51]++;
          return true;
        } else {
          cov_8308hf9j4().b[12][1]++;
        }

        cov_8308hf9j4().s[52]++;
        return false;
      }));
      cov_8308hf9j4().s[53]++;
      setCount((cov_8308hf9j4().b[14][0]++, patternsData.total_count) || (cov_8308hf9j4().b[14][1]++, 0));
      cov_8308hf9j4().s[54]++;
      handleSetPatterns(filteredPatterns);
      cov_8308hf9j4().s[55]++;
      setVisibilityFilter(visibilityFilter);
      cov_8308hf9j4().s[56]++;
      setPatterns((cov_8308hf9j4().b[15][0]++, patternsData.patterns) || (cov_8308hf9j4().b[15][1]++, []));
    } else {
      cov_8308hf9j4().b[11][1]++;
    }
  }, [patternsData]);
  const [importModal, setImportModal] = (cov_8308hf9j4().s[57]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
    open: false
  }));
  const [publishModal, setPublishModal] = (cov_8308hf9j4().s[58]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
    open: false,
    pattern: {},
    name: ''
  }));
  const [downloadModal, setDownloadModal] = (cov_8308hf9j4().s[59]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
    open: false,
    content: null
  }));
  const designValidationActorRef = (cov_8308hf9j4().s[60]++, (0,_xstate_react__WEBPACK_IMPORTED_MODULE_51__.useActorRef)(machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_52__/* .designValidationMachine */ .Vi));
  const designLifecycleModal = (cov_8308hf9j4().s[61]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.useModal)({
    headerIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_assets_icons_Pattern__WEBPACK_IMPORTED_MODULE_48__/* ["default"] */ .Z, {
      fill: "#fff",
      height: '2rem',
      width: '2rem'
    })
  }));
  const sistentInfoModal = (cov_8308hf9j4().s[62]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.useModal)({
    headerIcon: _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.OutlinedPatternIcon
  }));
  cov_8308hf9j4().s[63]++;

  const handleDeploy = async ({
    design,
    selectedK8sContexts
  }) => {
    cov_8308hf9j4().f[12]++;
    cov_8308hf9j4().s[64]++;
    console.log('Deploying pattern', design);
    cov_8308hf9j4().s[65]++;
    updateProgress({
      showProgress: true
    });
    cov_8308hf9j4().s[66]++;
    await deployPatternMutation({
      pattern_file: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .encodeDesignFile */ .Us)(design),
      pattern_id: design.id,
      selectedK8sContexts
    });
    cov_8308hf9j4().s[67]++;
    updateProgress({
      showProgress: false
    });
  };

  cov_8308hf9j4().s[68]++;

  const handleUndeploy = async ({
    design,
    selectedK8sContexts
  }) => {
    cov_8308hf9j4().f[13]++;
    cov_8308hf9j4().s[69]++;
    updateProgress({
      showProgress: true
    });
    cov_8308hf9j4().s[70]++;
    await undeployPatternMutation({
      pattern_file: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .encodeDesignFile */ .Us)(design),
      pattern_id: design.id,
      selectedK8sContexts
    });
    cov_8308hf9j4().s[71]++;
    updateProgress({
      showProgress: false
    });
  };

  cov_8308hf9j4().s[72]++;

  const handleDownloadDialogClose = () => {
    cov_8308hf9j4().f[14]++;
    cov_8308hf9j4().s[73]++;
    setDownloadModal(prevState => {
      cov_8308hf9j4().f[15]++;
      cov_8308hf9j4().s[74]++;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        open: false,
        content: null
      });
    });
  };

  cov_8308hf9j4().s[75]++;

  const handleDesignDownloadModal = (e, pattern) => {
    cov_8308hf9j4().f[16]++;
    cov_8308hf9j4().s[76]++;
    e.stopPropagation();
    cov_8308hf9j4().s[77]++;
    setDownloadModal(prevState => {
      cov_8308hf9j4().f[17]++;
      cov_8308hf9j4().s[78]++;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        open: true,
        content: pattern
      });
    });
  }; // const [loading, stillLoading] = useState(true);


  const {
    width
  } = (cov_8308hf9j4().s[79]++, (0,_utils_dimension__WEBPACK_IMPORTED_MODULE_40__/* .useWindowDimensions */ .d)());
  const catalogVisibilityRef = (cov_8308hf9j4().s[80]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(false));
  const catalogContentRef = (cov_8308hf9j4().s[81]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)());
  const disposeConfSubscriptionRef = (cov_8308hf9j4().s[82]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(null));
  const ACTION_TYPES = (cov_8308hf9j4().s[83]++, {
    FETCH_PATTERNS: {
      name: 'FETCH_PATTERNS',
      error_msg: 'Failed to fetch designs'
    },
    UPDATE_PATTERN: {
      name: 'UPDATE_PATTERN',
      error_msg: 'Failed to update design file'
    },
    DELETE_PATTERN: {
      name: 'DELETE_PATTERN',
      error_msg: 'Failed to delete design file'
    },
    DEPLOY_PATTERN: {
      name: 'DEPLOY_PATTERN',
      error_msg: 'Failed to deploy design file'
    },
    UNDEPLOY_PATTERN: {
      name: 'UNDEPLOY_PATTERN',
      error_msg: 'Failed to undeploy design file'
    },
    UPLOAD_PATTERN: {
      name: 'UPLOAD_PATTERN',
      error_msg: 'Failed to upload design file'
    },
    CLONE_PATTERN: {
      name: 'CLONE_PATTERN',
      error_msg: 'Failed to clone design file'
    },
    PUBLISH_CATALOG: {
      name: 'PUBLISH_CATALOG',
      error_msg: 'Failed to publish catalog'
    },
    UNPUBLISH_CATALOG: {
      name: 'PUBLISH_CATALOG',
      error_msg: 'Failed to publish catalog'
    },
    SCHEMA_FETCH: {
      name: 'SCHEMA_FETCH',
      error_msg: 'failed to fetch import schema'
    }
  });
  /**
   * Checking whether users are signed in under a provider that doesn't have
   * publish pattern capability and setting the canPublishPattern state accordingly
   */

  const {
    data: capabilitiesData
  } = (cov_8308hf9j4().s[84]++, (0,_rtk_query_user__WEBPACK_IMPORTED_MODULE_60__/* .useGetProviderCapabilitiesQuery */ .hi)());
  cov_8308hf9j4().s[85]++;
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    cov_8308hf9j4().f[18]++;
    cov_8308hf9j4().s[86]++;

    if (capabilitiesData) {
      cov_8308hf9j4().b[16][0]++;
      const capabilitiesRegistry = (cov_8308hf9j4().s[87]++, capabilitiesData);
      const patternsCatalogueCapability = (cov_8308hf9j4().s[88]++, capabilitiesRegistry?.capabilities.filter(val => {
        cov_8308hf9j4().f[19]++;
        cov_8308hf9j4().s[89]++;
        return val.feature === _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .MeshplayPatternsCatalog */ .J1;
      }));
      cov_8308hf9j4().s[90]++;

      if (patternsCatalogueCapability?.length > 0) {
        cov_8308hf9j4().b[17][0]++;
        cov_8308hf9j4().s[91]++;
        setCanPublishPattern(true);
      } else {
        cov_8308hf9j4().b[17][1]++;
      }
    } else {
      cov_8308hf9j4().b[16][1]++;
    }
  }, []);
  const searchTimeout = (cov_8308hf9j4().s[92]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(null));
  /**
   * fetch patterns when the page loads
   */
  // @ts-ignore

  cov_8308hf9j4().s[93]++;
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    cov_8308hf9j4().f[20]++;
    cov_8308hf9j4().s[94]++;
    document.body.style.overflowX = 'hidden';
    const visibilityFilter = (cov_8308hf9j4().s[95]++, selectedFilters.visibility === 'All' ? (cov_8308hf9j4().b[18][0]++, null) : (cov_8308hf9j4().b[18][1]++, selectedFilters.visibility));
    cov_8308hf9j4().s[96]++;
    setVisibilityFilter(visibilityFilter);
    cov_8308hf9j4().s[97]++;
    return () => {
      cov_8308hf9j4().f[21]++;
      cov_8308hf9j4().s[98]++;
      return document.body.style.overflowX = 'auto';
    };
  }, [visibilityFilter]);
  cov_8308hf9j4().s[99]++;
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    cov_8308hf9j4().f[22]++;
    cov_8308hf9j4().s[100]++;

    if (viewType === 'grid') {
      cov_8308hf9j4().b[19][0]++;
      cov_8308hf9j4().s[101]++;
      setSearch('');
    } else {
      cov_8308hf9j4().b[19][1]++;
    }
  }, [viewType]);
  cov_8308hf9j4().s[102]++;

  const initPatternsSubscription = (pageNo = (cov_8308hf9j4().b[20][0]++, page.toString()), pagesize = (cov_8308hf9j4().b[21][0]++, pageSize.toString()), searchText = (cov_8308hf9j4().b[22][0]++, search), order = (cov_8308hf9j4().b[23][0]++, sortOrder)) => {
    cov_8308hf9j4().f[23]++;
    cov_8308hf9j4().s[103]++;

    if (disposeConfSubscriptionRef.current) {
      cov_8308hf9j4().b[24][0]++;
      cov_8308hf9j4().s[104]++;
      disposeConfSubscriptionRef.current.dispose();
    } else {
      cov_8308hf9j4().b[24][1]++;
    }

    const configurationSubscription = (cov_8308hf9j4().s[105]++, (0,_graphql_subscriptions_ConfigurationSubscription__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z)(result => {
      cov_8308hf9j4().f[24]++;
      cov_8308hf9j4().s[106]++;
      // stillLoading(false);
      setPage((cov_8308hf9j4().b[25][0]++, result.configuration?.patterns?.page) || (cov_8308hf9j4().b[25][1]++, 0));
      cov_8308hf9j4().s[107]++;
      setPageSize((cov_8308hf9j4().b[26][0]++, result.configuration?.patterns?.page_size) || (cov_8308hf9j4().b[26][1]++, 0));
      cov_8308hf9j4().s[108]++;
      setCount((cov_8308hf9j4().b[27][0]++, result.configuration?.patterns?.total_count) || (cov_8308hf9j4().b[27][1]++, 0));
      cov_8308hf9j4().s[109]++;
      handleSetPatterns(result.configuration?.patterns?.patterns);
    }, {
      applicationSelector: {
        pageSize: pagesize,
        page: pageNo,
        search: searchText,
        order: order
      },
      patternSelector: {
        pageSize: pagesize,
        page: pageNo,
        search: searchText,
        order: order
      },
      filterSelector: {
        pageSize: pagesize,
        page: pageNo,
        search: searchText,
        order: order
      }
    }));
    cov_8308hf9j4().s[110]++;
    disposeConfSubscriptionRef.current = configurationSubscription;
  }; // const handleCatalogVisibility = () => {
  //   handleCatalogPreference(!catalogVisibilityRef.current);
  //   catalogVisibilityRef.current = !catalogVisibility;
  //   toggleCatalogContent({ catalogVisibility: !catalogVisibility });
  // };


  cov_8308hf9j4().s[111]++;
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(async () => {
    cov_8308hf9j4().f[25]++;
    cov_8308hf9j4().s[112]++;

    try {
      const {
        models
      } = (cov_8308hf9j4().s[113]++, await (0,_api_meshmodel__WEBPACK_IMPORTED_MODULE_36__/* .getMeshModels */ .mj)());
      const modelNames = (cov_8308hf9j4().s[114]++, lodash__WEBPACK_IMPORTED_MODULE_35___default().uniqBy(models?.map(model => {
        cov_8308hf9j4().f[26]++;
        cov_8308hf9j4().s[115]++;

        if ((cov_8308hf9j4().b[29][0]++, model.displayName) && (cov_8308hf9j4().b[29][1]++, model.displayName !== '')) {
          cov_8308hf9j4().b[28][0]++;
          cov_8308hf9j4().s[116]++;
          return model.displayName;
        } else {
          cov_8308hf9j4().b[28][1]++;
        }
      }), (lodash__WEBPACK_IMPORTED_MODULE_35___default().toLower)));
      cov_8308hf9j4().s[117]++;
      modelNames.sort(); // Modify the schema using the utility function

      const modifiedSchema = (cov_8308hf9j4().s[118]++, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .modifyRJSFSchema */ .WU)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.publishCatalogItemSchema, 'properties.compatibility.items.enum', modelNames));
      cov_8308hf9j4().s[119]++;
      setPublishSchema({
        rjsfSchema: modifiedSchema,
        uiSchema: _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.publishCatalogItemUiSchema
      });
      cov_8308hf9j4().s[120]++;
      setMeshModels(models);
    } catch (err) {
      cov_8308hf9j4().s[121]++;
      console.error(err);
      cov_8308hf9j4().s[122]++;
      handleError(ACTION_TYPES.SCHEMA_FETCH);
    }

    cov_8308hf9j4().s[123]++;
    catalogVisibilityRef.current = catalogVisibility;
    /*
                                     Below is a graphql query that fetches the catalog patterns that is published so
                                     when catalogVisibility is true, we fetch the catalog patterns and set it to the patterns state
                                     which show the catalog patterns only in the UI at the top of the list always whether we filter for public or private patterns.
                                     Meshplay's REST API already fetches catalog items with `published` visibility, hence this function is commented out.
                                    */
    // const fetchCatalogPatterns = fetchCatalogPattern({
    //   selector: {
    //     search: '',
    //     order: '',
    //     page: 0,
    //     pagesize: 0,
    //   },
    // }).subscribe({
    //   next: (result) => {
    //     catalogContentRef.current = result?.catalogPatterns;
    //     initPatternsSubscription();
    //   },
    //   error: (err) => console.log('There was an error fetching Catalog Filter: ', err),
    // });
    // return () => {
    //   fetchCatalogPatterns.unsubscribe();
    //   disposeConfSubscriptionRef.current?.dispose();
    // };
  }, []); // useEffect(() => {
  //   handleSetPatterns(patterns);
  // }, [catalogVisibility]);

  cov_8308hf9j4().s[124]++;

  const handleSetPatterns = patterns => {
    cov_8308hf9j4().f[27]++;
    cov_8308hf9j4().s[125]++;

    if ((cov_8308hf9j4().b[31][0]++, catalogVisibilityRef.current) && (cov_8308hf9j4().b[31][1]++, catalogContentRef.current?.length > 0)) {
      cov_8308hf9j4().b[30][0]++;
      cov_8308hf9j4().s[126]++;
      setPatterns([...((cov_8308hf9j4().b[32][0]++, catalogContentRef.current) || (cov_8308hf9j4().b[32][1]++, [])), ...((cov_8308hf9j4().b[33][0]++, patterns?.filter(content => {
        cov_8308hf9j4().f[28]++;
        cov_8308hf9j4().s[127]++;
        return content.visibility !== _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .VISIBILITY.PUBLISHED */ .ix.PUBLISHED;
      })) || (cov_8308hf9j4().b[33][1]++, []))]);
      cov_8308hf9j4().s[128]++;
      return;
    } else {
      cov_8308hf9j4().b[30][1]++;
    }

    cov_8308hf9j4().s[129]++;
    setPatterns((cov_8308hf9j4().b[34][0]++, patterns?.filter(content => {
      cov_8308hf9j4().f[29]++;
      cov_8308hf9j4().s[130]++;
      return content.visibility !== _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .VISIBILITY.PUBLISHED */ .ix.PUBLISHED;
    })) || (cov_8308hf9j4().b[34][1]++, []));
  };

  cov_8308hf9j4().s[131]++;

  const openDeployModal = (e, pattern_file, name) => {
    cov_8308hf9j4().f[30]++;
    const design = (cov_8308hf9j4().s[132]++, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseDesignFile */ .It)(pattern_file));
    cov_8308hf9j4().s[133]++;
    e.stopPropagation();
    cov_8308hf9j4().s[134]++;
    designLifecycleModal.openModal({
      title: name,
      reactNode: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_DesignLifeCycle_DeployStepper__WEBPACK_IMPORTED_MODULE_53__/* .DeployStepper */ .p2, {
        handleClose: designLifecycleModal.closeModal,
        validationMachine: designValidationActorRef,
        design: design,
        handleDeploy: handleDeploy,
        deployment_type: _DesignLifeCycle_common__WEBPACK_IMPORTED_MODULE_55__.DEPLOYMENT_TYPE.DEPLOY,
        selectedK8sContexts: selectedK8sContexts
      })
    });
  };

  cov_8308hf9j4().s[135]++;

  const openUndeployModal = (e, pattern_file, name) => {
    cov_8308hf9j4().f[31]++;
    cov_8308hf9j4().s[136]++;
    e.stopPropagation();
    const design = (cov_8308hf9j4().s[137]++, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseDesignFile */ .It)(pattern_file));
    cov_8308hf9j4().s[138]++;
    designLifecycleModal.openModal({
      title: name,
      reactNode: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_DesignLifeCycle_DeployStepper__WEBPACK_IMPORTED_MODULE_53__/* .UnDeployStepper */ .sh, {
        handleClose: designLifecycleModal.closeModal,
        validationMachine: designValidationActorRef,
        design: design,
        handleUndeploy: handleUndeploy,
        deployment_type: _DesignLifeCycle_common__WEBPACK_IMPORTED_MODULE_55__.DEPLOYMENT_TYPE.UNDEPLOY,
        selectedK8sContexts: selectedK8sContexts
      })
    });
  };

  cov_8308hf9j4().s[139]++;

  const openDryRunModal = (e, pattern_file, name) => {
    cov_8308hf9j4().f[32]++;
    cov_8308hf9j4().s[140]++;
    e.stopPropagation();
    const design = (cov_8308hf9j4().s[141]++, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseDesignFile */ .It)(pattern_file));
    cov_8308hf9j4().s[142]++;
    designLifecycleModal.openModal({
      title: name,
      reactNode: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
        style: {
          minWidth: '30rem',
          width: 'auto'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_DesignLifeCycle_DryRun__WEBPACK_IMPORTED_MODULE_54__/* .DryRunDesign */ .hc, {
          handleClose: designLifecycleModal.closeModal,
          validationMachine: designValidationActorRef,
          design: design,
          deployment_type: _DesignLifeCycle_common__WEBPACK_IMPORTED_MODULE_55__.DEPLOYMENT_TYPE.DEPLOY,
          selectedK8sContexts: selectedK8sContexts
        })
      })
    });
  };

  cov_8308hf9j4().s[143]++;

  const openValidateModal = (e, pattern_file, name) => {
    cov_8308hf9j4().f[33]++;
    cov_8308hf9j4().s[144]++;
    e.stopPropagation();
    const design = (cov_8308hf9j4().s[145]++, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseDesignFile */ .It)(pattern_file));
    cov_8308hf9j4().s[146]++;
    designLifecycleModal.openModal({
      title: name,
      reactNode: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
        style: {
          minWidth: '30rem',
          width: 'auto'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_DesignLifeCycle_ValidateDesign__WEBPACK_IMPORTED_MODULE_58__/* .ValidateDesign */ .D, {
          handleClose: designLifecycleModal.closeModal,
          validationMachine: designValidationActorRef,
          design: design,
          deployment_type: _DesignLifeCycle_common__WEBPACK_IMPORTED_MODULE_55__.DEPLOYMENT_TYPE.DEPLOY,
          selectedK8sContexts: selectedK8sContexts
        })
      })
    });
  };

  cov_8308hf9j4().s[147]++;

  const handleUploadImport = () => {
    cov_8308hf9j4().f[34]++;
    cov_8308hf9j4().s[148]++;
    setImportModal({
      open: true
    });
  };

  cov_8308hf9j4().s[149]++;

  const handleUploadImportClose = () => {
    cov_8308hf9j4().f[35]++;
    cov_8308hf9j4().s[150]++;
    setImportModal({
      open: false
    });
  };

  cov_8308hf9j4().s[151]++;

  const handleInfoModalClose = () => {
    cov_8308hf9j4().f[36]++;
    cov_8308hf9j4().s[152]++;
    sistentInfoModal.closeModal();
    cov_8308hf9j4().s[153]++;
    setInfoModal({
      open: false
    });
  };

  cov_8308hf9j4().s[154]++;

  const handleInfoModal = pattern => {
    cov_8308hf9j4().f[37]++;
    cov_8308hf9j4().s[155]++;
    sistentInfoModal.openModal({
      title: pattern.name
    });
    cov_8308hf9j4().s[156]++;
    setInfoModal({
      open: true,
      ownerID: pattern.user_id,
      selectedResource: pattern
    });
  };

  cov_8308hf9j4().s[157]++;

  const handlePublishModal = (ev, pattern) => {
    cov_8308hf9j4().f[38]++;
    cov_8308hf9j4().s[158]++;

    if (canPublishPattern) {
      cov_8308hf9j4().b[35][0]++;
      cov_8308hf9j4().s[159]++;
      ev.stopPropagation();
      cov_8308hf9j4().s[160]++;
      setPublishModal({
        open: true,
        pattern: pattern,
        name: ''
      });
    } else {
      cov_8308hf9j4().b[35][1]++;
    }
  };

  cov_8308hf9j4().s[161]++;

  const handleUnpublishModal = (ev, pattern) => {
    cov_8308hf9j4().f[39]++;
    cov_8308hf9j4().s[162]++;

    if (canPublishPattern) {
      cov_8308hf9j4().b[36][0]++;
      cov_8308hf9j4().s[163]++;
      ev.stopPropagation();
      cov_8308hf9j4().s[164]++;
      return async () => {
        cov_8308hf9j4().f[40]++;
        let response = (cov_8308hf9j4().s[165]++, await modalRef.current.show({
          title: `Unpublish Catalog item?`,
          subtitle: `Are you sure you want to unpublish ${pattern?.name}?`,
          options: ['Yes', 'No'],
          showInfoIcon: "Unpublishing a catolog item removes the item from the public-facing catalog (a public website accessible to anonymous visitors at meshplay.io/catalog). The catalog item's visibility will change to either public (or private with a subscription). The ability to for other users to continue to access, edit, clone and collaborate on your content depends upon the assigned visibility level (public or private). Prior collaborators (users with whom you have shared your catalog item) will retain access. However, you can always republish it whenever you want. Remember: unpublished catalog items can still be available to other users if that item is set to public visibility. For detailed information, please refer to the [documentation](https://docs.meshplay.io/concepts/designs)."
        }));
        cov_8308hf9j4().s[166]++;

        if (response === 'Yes') {
          cov_8308hf9j4().b[37][0]++;
          cov_8308hf9j4().s[167]++;
          updateProgress({
            showProgress: true
          });
          cov_8308hf9j4().s[168]++;
          unpublishCatalog({
            unpublishBody: JSON.stringify({
              id: pattern?.id
            })
          }).unwrap().then(() => {
            cov_8308hf9j4().f[41]++;
            cov_8308hf9j4().s[169]++;
            updateProgress({
              showProgress: false
            });
            cov_8308hf9j4().s[170]++;
            notify({
              message: `Design Unpublished`,
              event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
            });
          }).catch(() => {
            cov_8308hf9j4().f[42]++;
            cov_8308hf9j4().s[171]++;
            updateProgress({
              showProgress: false
            });
            cov_8308hf9j4().s[172]++;
            handleError(ACTION_TYPES.UNPUBLISH_CATALOG);
          });
        } else {
          cov_8308hf9j4().b[37][1]++;
        }
      };
    } else {
      cov_8308hf9j4().b[36][1]++;
    }
  };

  cov_8308hf9j4().s[173]++;

  const handlePublishModalClose = () => {
    cov_8308hf9j4().f[43]++;
    cov_8308hf9j4().s[174]++;
    setPublishModal({
      open: false,
      pattern: {},
      name: ''
    });
  };

  cov_8308hf9j4().s[175]++;

  const handlePublish = formData => {
    cov_8308hf9j4().f[44]++;
    const compatibilityStore = (cov_8308hf9j4().s[176]++, lodash__WEBPACK_IMPORTED_MODULE_35___default().uniqBy(meshModels, model => {
      cov_8308hf9j4().f[45]++;
      cov_8308hf9j4().s[177]++;
      return lodash__WEBPACK_IMPORTED_MODULE_35___default().toLower(model.displayName);
    })?.filter(model => {
      cov_8308hf9j4().f[46]++;
      cov_8308hf9j4().s[178]++;
      return formData?.compatibility?.some(comp => {
        cov_8308hf9j4().f[47]++;
        cov_8308hf9j4().s[179]++;
        return lodash__WEBPACK_IMPORTED_MODULE_35___default().toLower(comp) === lodash__WEBPACK_IMPORTED_MODULE_35___default().toLower(model.displayName);
      });
    })?.map(model => {
      cov_8308hf9j4().f[48]++;
      cov_8308hf9j4().s[180]++;
      return model.name;
    }));
    const payload = (cov_8308hf9j4().s[181]++, {
      id: infoModal.selectedResource?.id,
      catalog_data: _objectSpread(_objectSpread({}, formData), {}, {
        compatibility: compatibilityStore,
        type: lodash__WEBPACK_IMPORTED_MODULE_35___default().toLower(formData?.type)
      })
    });
    cov_8308hf9j4().s[182]++;
    updateProgress({
      showProgress: true
    });
    cov_8308hf9j4().s[183]++;
    publishCatalog({
      publishBody: JSON.stringify(payload)
    }).unwrap().then(() => {
      cov_8308hf9j4().f[49]++;
      cov_8308hf9j4().s[184]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[185]++;

      if (user.role_names.includes('admin')) {
        cov_8308hf9j4().b[38][0]++;
        cov_8308hf9j4().s[186]++;
        notify({
          message: `${publishModal?.name} Design Published`,
          event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
        });
      } else {
        cov_8308hf9j4().b[38][1]++;
        cov_8308hf9j4().s[187]++;
        notify({
          message: 'Design queued for publishing into Meshplay Catalog. Maintainers notified for review',
          event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
        });
      }
    }).catch(() => {
      cov_8308hf9j4().f[50]++;
      cov_8308hf9j4().s[188]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[189]++;
      handleError(ACTION_TYPES.PUBLISH_CATALOG);
    });
  };

  function handleClone(patternID, name) {
    cov_8308hf9j4().f[51]++;
    cov_8308hf9j4().s[190]++;
    updateProgress({
      showProgress: true
    });
    cov_8308hf9j4().s[191]++;
    clonePattern({
      body: JSON.stringify({
        name: name + ' (Copy)'
      }),
      patternID: patternID
    }).unwrap().then(() => {
      cov_8308hf9j4().f[52]++;
      cov_8308hf9j4().s[192]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[193]++;
      notify({
        message: `"${name}" Design cloned`,
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
      });
    }).catch(() => {
      cov_8308hf9j4().f[53]++;
      cov_8308hf9j4().s[194]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[195]++;
      notify({
        message: `Failed to clone "${name}" Design`,
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.ERROR */ .E_.ERROR
      });
    });
  } // this function returns fetchPattern function with latest values so that it can be used in child components


  function fetchPatternsCaller() {
    cov_8308hf9j4().f[54]++;
    cov_8308hf9j4().s[196]++;
    return () => {
      cov_8308hf9j4().f[55]++;
      cov_8308hf9j4().s[197]++;
      return getPatterns();
    };
  }

  cov_8308hf9j4().s[198]++;

  const handleError = action => {
    cov_8308hf9j4().f[56]++;
    cov_8308hf9j4().s[199]++;
    return error => {
      cov_8308hf9j4().f[57]++;
      cov_8308hf9j4().s[200]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[201]++;
      notify({
        message: `${action.error_msg}: ${error}`,
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.ERROR */ .E_.ERROR
      });
    };
  };

  function resetSelectedRowData() {
    cov_8308hf9j4().f[58]++;
    cov_8308hf9j4().s[202]++;
    return () => {
      cov_8308hf9j4().f[59]++;
      cov_8308hf9j4().s[203]++;
      setSelectedRowData(null);
    };
  }

  async function handleSubmit({
    data,
    id,
    name,
    type,
    metadata,
    catalog_data
  }) {
    cov_8308hf9j4().f[60]++;
    cov_8308hf9j4().s[204]++;
    updateProgress({
      showProgress: true
    });
    cov_8308hf9j4().s[205]++;

    if (type === _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .FILE_OPS.DELETE */ .P3.DELETE) {
      cov_8308hf9j4().b[39][0]++;
      const response = (cov_8308hf9j4().s[206]++, await showModal(1, name));
      cov_8308hf9j4().s[207]++;

      if (response == 'No') {
        cov_8308hf9j4().b[40][0]++;
        cov_8308hf9j4().s[208]++;
        updateProgress({
          showProgress: false
        });
        cov_8308hf9j4().s[209]++;
        return;
      } else {
        cov_8308hf9j4().b[40][1]++;
      }

      cov_8308hf9j4().s[210]++;
      deletePatternFile({
        id: id
      }).unwrap().then(() => {
        cov_8308hf9j4().f[61]++;
        cov_8308hf9j4().s[211]++;
        updateProgress({
          showProgress: false
        });
        cov_8308hf9j4().s[212]++;
        notify({
          message: `"${name}" Design deleted`,
          event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
        });
        cov_8308hf9j4().s[213]++;
        resetSelectedRowData()();
      }).catch(() => {
        cov_8308hf9j4().f[62]++;
        cov_8308hf9j4().s[214]++;
        updateProgress({
          showProgress: false
        });
        cov_8308hf9j4().s[215]++;
        handleError(ACTION_TYPES.DELETE_PATTERN);
      });
    } else {
      cov_8308hf9j4().b[39][1]++;
    }

    cov_8308hf9j4().s[216]++;

    if (type === _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .FILE_OPS.UPDATE */ .P3.UPDATE) {
      cov_8308hf9j4().b[41][0]++;
      cov_8308hf9j4().s[217]++;
      updatePattern({
        updateBody: JSON.stringify({
          pattern_data: {
            id,
            pattern_file: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .getUnit8ArrayForDesign */ .en)(data),
            catalog_data
          },
          save: true
        })
      }).unwrap().then(() => {
        cov_8308hf9j4().f[63]++;
        cov_8308hf9j4().s[218]++;
        updateProgress({
          showProgress: false
        });
        cov_8308hf9j4().s[219]++;
        notify({
          message: `"${name}" Design updated`,
          event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
        });
      }).catch(() => {
        cov_8308hf9j4().f[64]++;
        cov_8308hf9j4().s[220]++;
        updateProgress({
          showProgress: false
        });
        cov_8308hf9j4().s[221]++;
        handleError(ACTION_TYPES.UPDATE_PATTERN);
      });
    } else {
      cov_8308hf9j4().b[41][1]++;
    }

    cov_8308hf9j4().s[222]++;

    if ((cov_8308hf9j4().b[43][0]++, type === _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .FILE_OPS.FILE_UPLOAD */ .P3.FILE_UPLOAD) || (cov_8308hf9j4().b[43][1]++, type === _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .FILE_OPS.URL_UPLOAD */ .P3.URL_UPLOAD)) {
      cov_8308hf9j4().b[42][0]++;
      let body;
      cov_8308hf9j4().s[223]++;

      if (type === _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .FILE_OPS.FILE_UPLOAD */ .P3.FILE_UPLOAD) {
        cov_8308hf9j4().b[44][0]++;
        cov_8308hf9j4().s[224]++;
        body = JSON.stringify({
          pattern_data: {
            name: (cov_8308hf9j4().b[45][0]++, metadata?.name) || (cov_8308hf9j4().b[45][1]++, name),
            pattern_file: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .getUnit8ArrayDecodedFile */ .RN)(data),
            catalog_data
          },
          save: true
        });
      } else {
        cov_8308hf9j4().b[44][1]++;
      }

      cov_8308hf9j4().s[225]++;

      if (type === _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .FILE_OPS.URL_UPLOAD */ .P3.URL_UPLOAD) {
        cov_8308hf9j4().b[46][0]++;
        cov_8308hf9j4().s[226]++;
        body = JSON.stringify({
          url: data,
          save: true,
          name: (cov_8308hf9j4().b[47][0]++, metadata?.name) || (cov_8308hf9j4().b[47][1]++, name),
          catalog_data
        });
      } else {
        cov_8308hf9j4().b[46][1]++;
      }

      cov_8308hf9j4().s[227]++;
      uploadPatternFile({
        uploadBody: body
      }).unwrap().then(() => {
        cov_8308hf9j4().f[65]++;
        cov_8308hf9j4().s[228]++;
        updateProgress({
          showProgress: false
        });
      }).catch(() => {
        cov_8308hf9j4().f[66]++;
        cov_8308hf9j4().s[229]++;
        updateProgress({
          showProgress: false
        });
        cov_8308hf9j4().s[230]++;
        handleError(ACTION_TYPES.UPLOAD_PATTERN);
      });
    } else {
      cov_8308hf9j4().b[42][1]++;
    }
  }

  cov_8308hf9j4().s[231]++;

  const handleDownload = (e, design, source_type, params) => {
    cov_8308hf9j4().f[67]++;
    cov_8308hf9j4().s[232]++;
    e.stopPropagation();
    cov_8308hf9j4().s[233]++;
    updateProgress({
      showProgress: true
    });
    cov_8308hf9j4().s[234]++;

    try {
      let id = (cov_8308hf9j4().s[235]++, design.id);
      let name = (cov_8308hf9j4().s[236]++, design.name);
      cov_8308hf9j4().s[237]++;
      (0,_utils_fileDownloader__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .ZP)({
        id,
        name,
        type: 'pattern',
        source_type,
        params
      });
      cov_8308hf9j4().s[238]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[239]++;
      notify({
        message: `"${name}" design downloaded`,
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.INFO */ .E_.INFO
      });
    } catch (e) {
      cov_8308hf9j4().s[240]++;
      console.error(e);
    }
  };

  cov_8308hf9j4().s[241]++;

  const userCanEdit = pattern => {
    cov_8308hf9j4().f[68]++;
    cov_8308hf9j4().s[242]++;
    return (cov_8308hf9j4().b[48][0]++, (0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.EDIT_DESIGN.action */ .X.EDIT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.EDIT_DESIGN.subject */ .X.EDIT_DESIGN.subject)) && (cov_8308hf9j4().b[48][1]++, user?.user_id == pattern?.user_id);
  };

  cov_8308hf9j4().s[243]++;

  const handleOpenInConfigurator = id => {
    cov_8308hf9j4().f[69]++;
    cov_8308hf9j4().s[244]++;
    router.push('/configuration/designs/configurator?design_id=' + id);
  };

  let colViews = (cov_8308hf9j4().s[245]++, [['name', 'xs'], ['created_at', 'm'], ['updated_at', 'm'], ['visibility', 's'], ['Actions', 'xs']]);
  const columns = (cov_8308hf9j4().s[246]++, [{
    name: 'name',
    label: 'Name',
    options: {
      filter: false,
      sort: true,
      searchable: true,
      customHeadRender: function CustomHead(_ref, sortColumn, columnMeta) {
        let {
          index
        } = _ref,
            column = _objectWithoutProperties(_ref, _excluded);

        cov_8308hf9j4().f[70]++;
        cov_8308hf9j4().s[247]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_connections_common_index_js__WEBPACK_IMPORTED_MODULE_43__/* .SortableTableCell */ .k, {
          index: index,
          columnData: column,
          columnMeta: columnMeta,
          onSort: () => {
            cov_8308hf9j4().f[71]++;
            cov_8308hf9j4().s[248]++;
            return sortColumn(index);
          }
        });
      }
    }
  }, {
    name: 'created_at',
    label: 'Upload Timestamp',
    options: {
      filter: false,
      sort: true,
      searchable: true,
      customHeadRender: function CustomHead(_ref2, sortColumn, columnMeta) {
        let {
          index
        } = _ref2,
            column = _objectWithoutProperties(_ref2, _excluded2);

        cov_8308hf9j4().f[72]++;
        cov_8308hf9j4().s[249]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_connections_common_index_js__WEBPACK_IMPORTED_MODULE_43__/* .SortableTableCell */ .k, {
          index: index,
          columnData: column,
          columnMeta: columnMeta,
          onSort: () => {
            cov_8308hf9j4().f[73]++;
            cov_8308hf9j4().s[250]++;
            return sortColumn(index);
          }
        });
      },
      customBodyRender: function CustomBody(value) {
        cov_8308hf9j4().f[74]++;
        cov_8308hf9j4().s[251]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_13___default()), {
          format: "LLLL",
          children: value
        });
      }
    }
  }, {
    name: 'updated_at',
    label: 'Update Timestamp',
    options: {
      filter: false,
      sort: true,
      searchable: true,
      customHeadRender: function CustomHead(_ref3, sortColumn, columnMeta) {
        let {
          index
        } = _ref3,
            column = _objectWithoutProperties(_ref3, _excluded3);

        cov_8308hf9j4().f[75]++;
        cov_8308hf9j4().s[252]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_connections_common_index_js__WEBPACK_IMPORTED_MODULE_43__/* .SortableTableCell */ .k, {
          index: index,
          columnData: column,
          columnMeta: columnMeta,
          onSort: () => {
            cov_8308hf9j4().f[76]++;
            cov_8308hf9j4().s[253]++;
            return sortColumn(index);
          }
        });
      },
      customBodyRender: function CustomBody(value) {
        cov_8308hf9j4().f[77]++;
        cov_8308hf9j4().s[254]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_13___default()), {
          format: "LLLL",
          children: value
        });
      }
    }
  }, {
    name: 'visibility',
    label: 'Visibility',
    options: {
      filter: false,
      sort: true,
      searchable: true,
      customHeadRender: function CustomHead(_ref4) {
        let {
          index
        } = _ref4,
            column = _objectWithoutProperties(_ref4, _excluded4);

        cov_8308hf9j4().f[78]++;
        cov_8308hf9j4().s[255]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx("b", {
            children: column.label
          })
        }, index);
      } // customBodyRender: function CustomBody(_, tableMeta) {
      //   const visibility = patterns[tableMeta.rowIndex]?.visibility;
      //   return (
      //     <div style={{ cursor: 'default' }}>
      //       <img className={classes.visibilityImg} src={`/static/img/${visibility}.svg`} />
      //     </div>
      //   );
      // },

    }
  }, {
    name: 'Actions',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      searchable: false,
      customHeadRender: function CustomHead(_ref5) {
        let {
          index
        } = _ref5,
            column = _objectWithoutProperties(_ref5, _excluded5);

        cov_8308hf9j4().f[79]++;
        cov_8308hf9j4().s[256]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.TableCell, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx("b", {
            children: column.label
          })
        }, index);
      },
      customBodyRender: function CustomBody(_, tableMeta) {
        cov_8308hf9j4().f[80]++;
        const rowData = (cov_8308hf9j4().s[257]++, patterns[tableMeta.rowIndex]);
        const visibility = (cov_8308hf9j4().s[258]++, patterns[tableMeta.rowIndex]?.visibility);
        cov_8308hf9j4().s[259]++;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Box, {
          sx: {
            display: 'flex'
          },
          children: [(cov_8308hf9j4().b[49][0]++, userCanEdit(rowData)) && (cov_8308hf9j4().b[49][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            placement: "top",
            title: 'Edit',
            onClick: e => {
              cov_8308hf9j4().f[81]++;
              cov_8308hf9j4().s[260]++;
              e.stopPropagation();
              cov_8308hf9j4().s[261]++;
              handleOpenInConfigurator(rowData.id);
            },
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.EDIT_DESIGN.action */ .X.EDIT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.EDIT_DESIGN.subject */ .X.EDIT_DESIGN.subject),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_38__.Edit, {
              fill: "currentColor",
              className: classes.iconPatt
            })
          })), visibility === _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .VISIBILITY.PUBLISHED */ .ix.PUBLISHED ? (cov_8308hf9j4().b[50][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            placement: "top",
            title: 'Clone',
            onClick: e => {
              cov_8308hf9j4().f[82]++;
              cov_8308hf9j4().s[262]++;
              e.stopPropagation();
              cov_8308hf9j4().s[263]++;
              handleClone(rowData.id, rowData.name);
            },
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.CLONE_DESIGN.action */ .X.CLONE_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.CLONE_DESIGN.subject */ .X.CLONE_DESIGN.subject),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_public_static_img_CloneIcon__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
              fill: "currentColor",
              className: classes.iconPatt
            })
          })) : (cov_8308hf9j4().b[50][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            title: 'Design',
            placement: 'top',
            onClick: e => {
              cov_8308hf9j4().f[83]++;
              cov_8308hf9j4().s[264]++;
              e.stopPropagation();
              cov_8308hf9j4().s[265]++;
              handleOpenInConfigurator(patterns[tableMeta.rowIndex].id);
            },
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.EDIT_DESIGN.action */ .X.EDIT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.EDIT_DESIGN.subject */ .X.EDIT_DESIGN.subject),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_assets_icons_PatternConfigure__WEBPACK_IMPORTED_MODULE_59__/* ["default"] */ .Z, {})
          })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            placement: "top",
            title: "Validate Design",
            onClick: e => {
              cov_8308hf9j4().f[84]++;
              cov_8308hf9j4().s[266]++;
              return openValidateModal(e, rowData.pattern_file, rowData.name, rowData.id);
            },
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.VALIDATE_DESIGN.action */ .X.VALIDATE_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.VALIDATE_DESIGN.subject */ .X.VALIDATE_DESIGN.subject),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_assets_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_57__/* ["default"] */ .Z, {
              "data-cy": "verify-button"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            placement: "top",
            title: "Dry Run",
            onClick: e => {
              cov_8308hf9j4().f[85]++;
              cov_8308hf9j4().s[267]++;
              return openDryRunModal(e, rowData.pattern_file, rowData.name, rowData.id);
            },
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.VALIDATE_DESIGN.action */ .X.VALIDATE_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.VALIDATE_DESIGN.subject */ .X.VALIDATE_DESIGN.subject),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_assets_icons_DryRunIcon__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
              "data-cy": "verify-button"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            placement: "top",
            title: "Undeploy",
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.UNDEPLOY_DESIGN.action */ .X.UNDEPLOY_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.UNDEPLOY_DESIGN.subject */ .X.UNDEPLOY_DESIGN.subject),
            onClick: e => {
              cov_8308hf9j4().f[86]++;
              cov_8308hf9j4().s[268]++;
              return openUndeployModal(e, rowData.pattern_file, rowData.name, rowData.id);
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_public_static_img_UndeployIcon__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
              fill: "#F91313",
              "data-cy": "undeploy-button"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            placement: "bottom",
            title: "Deploy",
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DEPLOY_DESIGN.action */ .X.DEPLOY_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DEPLOY_DESIGN.subject */ .X.DEPLOY_DESIGN.subject),
            onClick: e => {
              cov_8308hf9j4().f[87]++;
              cov_8308hf9j4().s[269]++;
              openDeployModal(e, rowData.pattern_file, rowData.name, rowData.id);
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_21___default()), {
              "data-cy": "deploy-button"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            title: "Download",
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DOWNLOAD_A_DESIGN.action */ .X.DOWNLOAD_A_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DOWNLOAD_A_DESIGN.subject */ .X.DOWNLOAD_A_DESIGN.subject),
            onClick: e => {
              cov_8308hf9j4().f[88]++;
              cov_8308hf9j4().s[270]++;
              return handleDesignDownloadModal(e, rowData);
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_6___default()), {
              "data-cy": "download-button"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            title: "Design Information",
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DETAILS_OF_DESIGN.action */ .X.DETAILS_OF_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DETAILS_OF_DESIGN.subject */ .X.DETAILS_OF_DESIGN.subject),
            onClick: ev => {
              cov_8308hf9j4().f[89]++;
              cov_8308hf9j4().s[271]++;
              return genericClickHandler(ev, () => {
                cov_8308hf9j4().f[90]++;
                cov_8308hf9j4().s[272]++;
                return handleInfoModal(rowData);
              });
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_42___default()), {
              "data-cy": "information-button"
            })
          }), (cov_8308hf9j4().b[52][0]++, canPublishPattern) && (cov_8308hf9j4().b[52][1]++, visibility !== _utils_Enum__WEBPACK_IMPORTED_MODULE_26__/* .VISIBILITY.PUBLISHED */ .ix.PUBLISHED) ? (cov_8308hf9j4().b[51][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            placement: "bottom",
            title: "Publish",
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.PUBLISH_DESIGN.action */ .X.PUBLISH_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.PUBLISH_DESIGN.subject */ .X.PUBLISH_DESIGN.subject),
            onClick: ev => {
              cov_8308hf9j4().f[91]++;
              cov_8308hf9j4().s[273]++;
              return handlePublishModal(ev, rowData);
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_22___default()), {
              fill: "#F91313",
              "data-cy": "publish-button"
            })
          })) : (cov_8308hf9j4().b[51][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(TooltipIcon, {
            title: "Unpublish",
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.UNPUBLISH_DESIGN.action */ .X.UNPUBLISH_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.UNPUBLISH_DESIGN.subject */ .X.UNPUBLISH_DESIGN.subject),
            onClick: ev => {
              cov_8308hf9j4().f[92]++;
              cov_8308hf9j4().s[274]++;
              return handleUnpublishModal(ev, rowData)();
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_22___default()), {
              fill: "#F91313",
              "data-cy": "unpublish-button"
            })
          }))]
        });
      }
    }
  }]);
  cov_8308hf9j4().s[275]++;
  columns.forEach((column, idx) => {
    cov_8308hf9j4().f[93]++;
    cov_8308hf9j4().s[276]++;

    if (column.name === sortOrder.split(' ')[0]) {
      cov_8308hf9j4().b[53][0]++;
      cov_8308hf9j4().s[277]++;
      columns[idx].options.sortDirection = sortOrder.split(' ')[1];
    } else {
      cov_8308hf9j4().b[53][1]++;
    }
  });
  const [tableCols, updateCols] = (cov_8308hf9j4().s[278]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(columns));
  const [columnVisibility, setColumnVisibility] = (cov_8308hf9j4().s[279]++, (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(() => {
    cov_8308hf9j4().f[94]++;
    let showCols = (cov_8308hf9j4().s[280]++, (0,_utils_responsive_column__WEBPACK_IMPORTED_MODULE_39__/* .updateVisibleColumns */ .D)(colViews, width)); // Initialize column visibility based on the original columns' visibility

    const initialVisibility = (cov_8308hf9j4().s[281]++, {});
    cov_8308hf9j4().s[282]++;
    columns.forEach(col => {
      cov_8308hf9j4().f[95]++;
      cov_8308hf9j4().s[283]++;

      if (!((cov_8308hf9j4().b[55][0]++, hideVisibility) && (cov_8308hf9j4().b[55][1]++, col.name === 'visibility'))) {
        cov_8308hf9j4().b[54][0]++;
        cov_8308hf9j4().s[284]++;
        initialVisibility[col.name] = showCols[col.name];
      } else {
        cov_8308hf9j4().b[54][1]++;
      }
    });
    cov_8308hf9j4().s[285]++;
    return initialVisibility;
  }));

  async function showModal(count, patterns) {
    cov_8308hf9j4().f[96]++;
    cov_8308hf9j4().s[286]++;
    console.log('patterns to be deleted', count, patterns);
    let response = (cov_8308hf9j4().s[287]++, await modalRef.current.show({
      title: `Delete ${count ? (cov_8308hf9j4().b[56][0]++, count) : (cov_8308hf9j4().b[56][1]++, '')} Design${count > 1 ? (cov_8308hf9j4().b[57][0]++, 's') : (cov_8308hf9j4().b[57][1]++, '')}?`,
      subtitle: `Are you sure you want to delete the ${patterns} design${count > 1 ? (cov_8308hf9j4().b[58][0]++, 's') : (cov_8308hf9j4().b[58][1]++, '')}?`,
      variant: _PromptComponent__WEBPACK_IMPORTED_MODULE_24__/* .PROMPT_VARIANTS.DANGER */ .k.DANGER,
      options: ['Yes', 'No']
    }));
    cov_8308hf9j4().s[288]++;
    return response;
  }

  async function deletePatterns(patterns) {
    cov_8308hf9j4().f[97]++;
    const jsonPatterns = (cov_8308hf9j4().s[289]++, JSON.stringify(patterns));
    cov_8308hf9j4().s[290]++;
    updateProgress({
      showProgress: true
    });
    cov_8308hf9j4().s[291]++;
    deletePattern({
      deleteBody: jsonPatterns
    }).unwrap().then(() => {
      cov_8308hf9j4().f[98]++;
      cov_8308hf9j4().s[292]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[293]++;
      setTimeout(() => {
        cov_8308hf9j4().f[99]++;
        cov_8308hf9j4().s[294]++;
        notify({
          message: `${patterns.patterns.length} Designs deleted`,
          event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
        });
        cov_8308hf9j4().s[295]++;
        resetSelectedRowData()();
      }, 1200);
    }).catch(() => {
      cov_8308hf9j4().f[100]++;
      cov_8308hf9j4().s[296]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[297]++;
      handleError(ACTION_TYPES.DELETE_PATTERN);
    });
  }

  const options = (cov_8308hf9j4().s[298]++, {
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
      cov_8308hf9j4().f[101]++;
      cov_8308hf9j4().s[299]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_MeshplayPatterns_CustomToolbarSelect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        selectedRows: selectedRows,
        displayData: displayData,
        setSelectedRows: setSelectedRows,
        patterns: patterns,
        deletePatterns: deletePatterns,
        showModal: showModal
      });
    },
    filter: false,
    search: false,
    viewColumns: false,
    sort: !((cov_8308hf9j4().b[59][0]++, user) && (cov_8308hf9j4().b[59][1]++, user.user_id === 'meshplay')),
    filterType: 'textField',
    responsive: 'standard',
    resizableColumns: true,
    serverSide: true,
    count,
    rowsPerPage: pageSize,
    fixedHeader: true,
    page,
    print: false,
    download: false,
    textLabels: {
      selectedRows: {
        text: 'pattern(s) selected'
      }
    },
    onCellClick: (_, meta) => {
      cov_8308hf9j4().f[102]++;
      cov_8308hf9j4().s[300]++;
      return (cov_8308hf9j4().b[60][0]++, meta.colIndex !== 3) && (cov_8308hf9j4().b[60][1]++, setSelectedRowData(patterns[meta.rowIndex]));
    },
    onRowsDelete: async function handleDelete(row) {
      cov_8308hf9j4().f[103]++;
      const toBeDeleted = (cov_8308hf9j4().s[301]++, Object.keys(row.lookup).map(idx => {
        cov_8308hf9j4().f[104]++;
        cov_8308hf9j4().s[302]++;
        return {
          id: patterns[idx]?.id,
          name: patterns[idx]?.name
        };
      }));
      let response = (cov_8308hf9j4().s[303]++, await showModal(toBeDeleted.length, toBeDeleted.map(p => {
        cov_8308hf9j4().f[105]++;
        cov_8308hf9j4().s[304]++;
        return ' ' + p.name;
      })));
      cov_8308hf9j4().s[305]++;

      if (response.toLowerCase() === 'yes') {
        cov_8308hf9j4().b[61][0]++;
        cov_8308hf9j4().s[306]++;
        deletePatterns({
          patterns: toBeDeleted
        });
      } else {
        cov_8308hf9j4().b[61][1]++;
      } // if (response.toLowerCase() === "no")
      // fetchPatterns(page, pageSize, search, sortOrder);

    },
    onTableChange: (action, tableState) => {
      cov_8308hf9j4().f[106]++;
      const sortInfo = (cov_8308hf9j4().s[307]++, tableState.announceText ? (cov_8308hf9j4().b[62][0]++, tableState.announceText.split(' : ')) : (cov_8308hf9j4().b[62][1]++, []));
      let order = (cov_8308hf9j4().s[308]++, '');
      cov_8308hf9j4().s[309]++;

      if (tableState.activeColumn) {
        cov_8308hf9j4().b[63][0]++;
        cov_8308hf9j4().s[310]++;
        order = `${columns[tableState.activeColumn].name} desc`;
      } else {
        cov_8308hf9j4().b[63][1]++;
      }

      cov_8308hf9j4().s[311]++;

      switch (action) {
        case 'changePage':
          cov_8308hf9j4().b[64][0]++;
          cov_8308hf9j4().s[312]++;
          initPatternsSubscription(tableState.page.toString(), pageSize.toString(), search, order);
          cov_8308hf9j4().s[313]++;
          setPage(tableState.page);
          cov_8308hf9j4().s[314]++;
          break;

        case 'changeRowsPerPage':
          cov_8308hf9j4().b[64][1]++;
          cov_8308hf9j4().s[315]++;
          initPatternsSubscription(page.toString(), tableState.rowsPerPage.toString(), search, order);
          cov_8308hf9j4().s[316]++;
          setPageSize(tableState.rowsPerPage);
          cov_8308hf9j4().s[317]++;
          break;

        case 'search':
          cov_8308hf9j4().b[64][2]++;
          cov_8308hf9j4().s[318]++;

          if (searchTimeout.current) {
            cov_8308hf9j4().b[65][0]++;
            cov_8308hf9j4().s[319]++;
            clearTimeout(searchTimeout.current);
          } else {
            cov_8308hf9j4().b[65][1]++;
          }

          cov_8308hf9j4().s[320]++;
          searchTimeout.current = setTimeout(() => {
            cov_8308hf9j4().f[107]++;
            cov_8308hf9j4().s[321]++;

            if (search !== tableState.searchText) {
              cov_8308hf9j4().b[66][0]++;
              cov_8308hf9j4().s[322]++;
              setSearch(tableState.searchText);
            } else {
              cov_8308hf9j4().b[66][1]++;
            }
          }, 500);
          cov_8308hf9j4().s[323]++;
          break;

        case 'sort':
          cov_8308hf9j4().b[64][3]++;
          cov_8308hf9j4().s[324]++;

          if (sortInfo.length === 2) {
            cov_8308hf9j4().b[67][0]++;
            cov_8308hf9j4().s[325]++;

            if (sortInfo[1] === 'ascending') {
              cov_8308hf9j4().b[68][0]++;
              cov_8308hf9j4().s[326]++;
              order = `${columns[tableState.activeColumn].name} asc`;
            } else {
              cov_8308hf9j4().b[68][1]++;
              cov_8308hf9j4().s[327]++;
              order = `${columns[tableState.activeColumn].name} desc`;
            }
          } else {
            cov_8308hf9j4().b[67][1]++;
          }

          cov_8308hf9j4().s[328]++;

          if (order !== sortOrder) {
            cov_8308hf9j4().b[69][0]++;
            cov_8308hf9j4().s[329]++;
            initPatternsSubscription(page.toString(), pageSize.toString(), search, order);
            cov_8308hf9j4().s[330]++;
            setSortOrder(order);
          } else {
            cov_8308hf9j4().b[69][1]++;
          }

          cov_8308hf9j4().s[331]++;
          break;
      }
    },
    setRowProps: (row, dataIndex, rowIndex) => {
      cov_8308hf9j4().f[108]++;
      cov_8308hf9j4().s[332]++;
      return {
        'data-cy': `config-row-${rowIndex}`
      };
    },
    setTableProps: () => {
      cov_8308hf9j4().f[109]++;
      cov_8308hf9j4().s[333]++;
      return {
        'data-cy': 'filters-grid'
      };
    }
  });
  cov_8308hf9j4().s[334]++;

  if (ispatternsLoading) {
    cov_8308hf9j4().b[70][0]++;
    cov_8308hf9j4().s[335]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_LoadingComponents_LoadingComponent__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
      animatedIcon: "AnimatedMeshPattern",
      message: `Loading ${pageTitle}...`
    });
  } else {
    cov_8308hf9j4().b[70][1]++;
  }
  /**
   * Gets the data of Import Filter and handles submit operation
   *
   * @param {{
   * uploadType: ("File Upload"| "URL Import");
   * name: string;
   * url: string;
   * file: string;
   * }} data
   */


  function handleImportDesign(data) {
    cov_8308hf9j4().f[110]++;
    cov_8308hf9j4().s[336]++;
    updateProgress({
      showProgress: true
    });
    const {
      uploadType,
      name,
      url,
      file,
      designType
    } = (cov_8308hf9j4().s[337]++, data);
    let requestBody = (cov_8308hf9j4().s[338]++, null);
    cov_8308hf9j4().s[339]++;

    switch (uploadType) {
      case 'File Upload':
        cov_8308hf9j4().b[71][0]++;
        {
          const fileElement = (cov_8308hf9j4().s[340]++, document.getElementById('root_file'));
          const fileName = (cov_8308hf9j4().s[341]++, fileElement.files[0].name);
          cov_8308hf9j4().s[342]++;
          requestBody = JSON.stringify({
            save: true,
            pattern_data: {
              name,
              file_name: fileName.split('.')[0],
              pattern_file: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_17__/* .getUnit8ArrayDecodedFile */ .RN)(file)
            }
          });
          cov_8308hf9j4().s[343]++;
          break;
        }

      case 'URL Import':
        cov_8308hf9j4().b[71][1]++;
        cov_8308hf9j4().s[344]++;
        requestBody = JSON.stringify({
          save: true,
          url,
          name
        });
        cov_8308hf9j4().s[345]++;
        break;
    }

    cov_8308hf9j4().s[346]++;
    importPattern({
      importBody: requestBody,
      type: designType
    }).unwrap().then(() => {
      cov_8308hf9j4().f[111]++;
      cov_8308hf9j4().s[347]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[348]++;
      notify({
        message: `"${name}" design uploaded`,
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_34__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
      });
      cov_8308hf9j4().s[349]++;
      getPatterns();
    }).catch(() => {
      cov_8308hf9j4().f[112]++;
      cov_8308hf9j4().s[350]++;
      updateProgress({
        showProgress: false
      });
      cov_8308hf9j4().s[351]++;
      handleError(ACTION_TYPES.UPLOAD_PATTERN);
    });
  }

  const filter = (cov_8308hf9j4().s[352]++, {
    visibility: {
      name: 'visibility',
      //if catalog content is enabled, then show all filters including published otherwise only show public and private filters
      options: catalogVisibility ? (cov_8308hf9j4().b[72][0]++, [{
        label: 'Public',
        value: 'public'
      }, {
        label: 'Private',
        value: 'private'
      }, {
        label: 'Published',
        value: 'published'
      }]) : (cov_8308hf9j4().b[72][1]++, [{
        label: 'Public',
        value: 'public'
      }, {
        label: 'Private',
        value: 'private'
      }])
    }
  });
  cov_8308hf9j4().s[353]++;

  const handleApplyFilter = () => {
    cov_8308hf9j4().f[113]++;
    const visibilityFilter = (cov_8308hf9j4().s[354]++, selectedFilters.visibility === 'All' ? (cov_8308hf9j4().b[73][0]++, null) : (cov_8308hf9j4().b[73][1]++, selectedFilters.visibility));
    cov_8308hf9j4().s[355]++;
    setVisibilityFilter(visibilityFilter);
  };

  cov_8308hf9j4().s[356]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.NoSsr, {
    children: [console.log('updated ui'), (0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.VIEW_DESIGNS.action */ .X.VIEW_DESIGNS.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.VIEW_DESIGNS.subject */ .X.VIEW_DESIGNS.subject) ? (cov_8308hf9j4().b[74][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.Fragment, {
      children: [(cov_8308hf9j4().b[75][0]++, selectedRowData) && (cov_8308hf9j4().b[75][1]++, Object.keys(selectedRowData).length > 0) && (cov_8308hf9j4().b[75][2]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(YAMLEditor, {
        pattern: selectedRowData,
        onClose: resetSelectedRowData(),
        onSubmit: handleSubmit,
        isReadOnly: arePatternsReadOnly
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)("div", {
        className: StyleClass.toolWrapper,
        children: [(cov_8308hf9j4().b[77][0]++, width < 600) && (cov_8308hf9j4().b[77][1]++, isSearchExpanded) ? (cov_8308hf9j4().b[76][0]++, null) : (cov_8308hf9j4().b[76][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)("div", {
          style: {
            display: 'flex'
          },
          children: [(cov_8308hf9j4().b[78][0]++, !selectedPattern.show) && ((cov_8308hf9j4().b[78][1]++, patterns.length > 0) || (cov_8308hf9j4().b[78][2]++, viewType === 'table')) && (cov_8308hf9j4().b[78][3]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx("div", {
            className: classes.createButton,
            children: disableCreateImportDesignButton ? (cov_8308hf9j4().b[79][0]++, null) : (cov_8308hf9j4().b[79][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)("div", {
              style: {
                display: 'flex',
                order: '1'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {
                "aria-label": "Add Pattern",
                variant: "contained",
                color: "primary",
                size: "large" // @ts-ignore
                ,
                onClick: () => {
                  cov_8308hf9j4().f[114]++;
                  cov_8308hf9j4().s[357]++;
                  return router.push('designs/configurator');
                },
                style: {
                  display: 'flex',
                  marginRight: '2rem'
                },
                disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.CREATE_NEW_DESIGN.action */ .X.CREATE_NEW_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.CREATE_NEW_DESIGN.subject */ .X.CREATE_NEW_DESIGN.subject),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10___default()), {
                  className: classes.addIcon
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx("span", {
                  className: classes.btnText,
                  children: " Create Design "
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {
                "aria-label": "Add Pattern",
                variant: "contained",
                color: "primary",
                size: "large" // @ts-ignore
                ,
                onClick: handleUploadImport,
                style: {
                  display: 'flex',
                  marginRight: '2rem',
                  marginLeft: '-0.6rem'
                },
                disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.IMPORT_DESIGN.action */ .X.IMPORT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.IMPORT_DESIGN.subject */ .X.IMPORT_DESIGN.subject),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx((_material_ui_icons_Publish__WEBPACK_IMPORTED_MODULE_23___default()), {
                  className: classes.addIcon
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx("span", {
                  className: classes.btnText,
                  children: " Import Design "
                })]
              })]
            }))
          })), (cov_8308hf9j4().b[80][0]++, !selectedPattern.show) && (cov_8308hf9j4().b[80][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx("div", {
            className: classes.catalogFilter,
            style: {
              display: 'flex'
            }
          }))]
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)("div", {
          className: classes.searchWrapper,
          style: {
            display: 'flex'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(_SistentWrapper__WEBPACK_IMPORTED_MODULE_49__/* .UsesSistent */ .k, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.SearchBar, {
              onSearch: value => {
                cov_8308hf9j4().f[115]++;
                cov_8308hf9j4().s[358]++;
                setSearch(value);
                cov_8308hf9j4().s[359]++;
                initPatternsSubscription(page.toString(), pageSize.toString(), value, sortOrder);
              },
              expanded: isSearchExpanded,
              setExpanded: setIsSearchExpanded,
              placeholder: `Search ${pageTitle.toLowerCase()}...`
            }), disableUniversalFilter ? (cov_8308hf9j4().b[81][0]++, null) : (cov_8308hf9j4().b[81][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.UniversalFilter, {
              id: "ref",
              filters: filter,
              selectedFilters: selectedFilters,
              setSelectedFilters: setSelectedFilters,
              handleApplyFilter: handleApplyFilter
            })), (cov_8308hf9j4().b[82][0]++, viewType === 'table') && (cov_8308hf9j4().b[82][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.CustomColumnVisibilityControl, {
              id: "ref",
              columns: columns,
              customToolsProps: {
                columnVisibility,
                setColumnVisibility
              }
            }))]
          }), (cov_8308hf9j4().b[83][0]++, !selectedPattern.show) && (cov_8308hf9j4().b[83][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_ViewSwitch__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            view: viewType,
            changeView: setViewType,
            hideCatalog: true
          }))]
        })]
      }), (cov_8308hf9j4().b[84][0]++, !selectedPattern.show) && (cov_8308hf9j4().b[84][1]++, viewType === 'table') && (cov_8308hf9j4().b[84][2]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_SistentWrapper__WEBPACK_IMPORTED_MODULE_49__/* .UsesSistent */ .k, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.ResponsiveDataTable, {
            data: patterns,
            columns: columns // @ts-ignore
            ,
            options: options,
            className: classes.muiRow,
            tableCols: tableCols,
            updateCols: updateCols,
            columnVisibility: columnVisibility
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_ExportModal__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .Z, {
          downloadModal: downloadModal,
          handleDownloadDialogClose: handleDownloadDialogClose,
          handleDesignDownload: handleDownload
        })]
      })), (cov_8308hf9j4().b[85][0]++, !selectedPattern.show) && (cov_8308hf9j4().b[85][1]++, viewType === 'grid') && (cov_8308hf9j4().b[85][2]++,
      /*#__PURE__*/
      // grid vieww
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_MeshplayPatterns_MeshplayPatternGridView__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        selectedK8sContexts: selectedK8sContexts,
        canPublishPattern: canPublishPattern,
        patterns: patterns,
        handlePublish: handlePublish,
        handleUnpublishModal: handleUnpublishModal,
        handleClone: handleClone,
        supportedTypes: "null",
        handleSubmit: handleSubmit,
        setSelectedPattern: setSelectedPattern,
        selectedPattern: selectedPattern,
        pages: Math.ceil(count / pageSize),
        setPage: setPage,
        selectedPage: page,
        patternErrors: [],
        publishModal: publishModal,
        setPublishModal: setPublishModal,
        publishSchema: publishSchema,
        user: user,
        fetch: () => {
          cov_8308hf9j4().f[116]++;
          cov_8308hf9j4().s[360]++;
          return getPatterns();
        },
        handleInfoModal: handleInfoModal,
        openUndeployModal: openUndeployModal,
        openValidationModal: openValidateModal,
        openDryRunModal: openDryRunModal,
        openDeployModal: openDeployModal,
        hideVisibility: hideVisibility,
        arePatternsReadOnly: arePatternsReadOnly
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsxs)(_SistentWrapper__WEBPACK_IMPORTED_MODULE_49__/* .UsesSistent */ .k, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Modal, _objectSpread({
          maxWidth: "sm"
        }, designLifecycleModal)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Modal, _objectSpread(_objectSpread({}, sistentInfoModal), {}, {
          children: (cov_8308hf9j4().b[86][0]++, (0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DETAILS_OF_DESIGN.action */ .X.DETAILS_OF_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.DETAILS_OF_DESIGN.subject */ .X.DETAILS_OF_DESIGN.subject)) && (cov_8308hf9j4().b[86][1]++, infoModal.open) && (cov_8308hf9j4().b[86][2]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_Modals_Information_InfoModal__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
            handlePublish: handlePublish,
            infoModalOpen: true,
            handleInfoModalClose: handleInfoModalClose,
            dataName: "patterns",
            selectedResource: infoModal.selectedResource,
            resourceOwnerID: infoModal.ownerID,
            currentUser: user,
            patternFetcher: fetchPatternsCaller,
            formSchema: publishSchema,
            meshModels: meshModels
          }))
        }))]
      }), (cov_8308hf9j4().b[87][0]++, canPublishPattern) && (cov_8308hf9j4().b[87][1]++, publishModal.open) && (cov_8308hf9j4().b[87][2]++, (0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.PUBLISH_DESIGN.action */ .X.PUBLISH_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.PUBLISH_DESIGN.subject */ .X.PUBLISH_DESIGN.subject)) && (cov_8308hf9j4().b[87][3]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(PublishModal, {
        publishFormSchema: publishSchema,
        handleClose: handlePublishModalClose,
        title: publishModal.pattern?.name,
        handleSubmit: handlePublish
      })), (cov_8308hf9j4().b[88][0]++, importModal.open) && (cov_8308hf9j4().b[88][1]++, (0,_utils_can__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.IMPORT_DESIGN.action */ .X.IMPORT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_46__/* .keys.IMPORT_DESIGN.subject */ .X.IMPORT_DESIGN.subject)) && (cov_8308hf9j4().b[88][2]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(ImportModal, {
        handleClose: handleUploadImportClose,
        handleImportDesign: handleImportDesign
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_PromptComponent__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        ref: modalRef
      })]
    })) : (cov_8308hf9j4().b[74][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_General_error_404_index__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {}))]
  });
}

const ImportModal = (cov_8308hf9j4().s[361]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().memo(props => {
  cov_8308hf9j4().f[117]++;
  const {
    handleClose,
    handleImportDesign
  } = (cov_8308hf9j4().s[362]++, props);
  cov_8308hf9j4().s[363]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_SistentWrapper__WEBPACK_IMPORTED_MODULE_49__/* .UsesSistent */ .k, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        open: true,
        closeModal: handleClose,
        headerIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_public_static_img_drawer_icons_pattern_svg_js__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
          fill: "#fff",
          style: {
            height: '24px',
            width: '24px',
            fonSize: '1.45rem'
          },
          className: undefined
        }),
        maxWidth: "sm",
        title: "Import Design",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_29__/* .RJSFModalWrapper */ .U, {
          schema: _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.importDesignSchema,
          uiSchema: _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.importDesignUiSchema,
          handleSubmit: handleImportDesign,
          submitBtnText: "Import",
          handleClose: handleClose
        })
      })
    })
  });
}));
const PublishModal = (cov_8308hf9j4().s[364]++, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default().memo(props => {
  cov_8308hf9j4().f[118]++;
  const {
    handleClose,
    handleSubmit,
    title
  } = (cov_8308hf9j4().s[365]++, props);
  cov_8308hf9j4().s[366]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_SistentWrapper__WEBPACK_IMPORTED_MODULE_49__/* .UsesSistent */ .k, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        open: true,
        closeModal: handleClose,
        "aria-label": "catalog publish",
        title: title,
        headerIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_public_static_img_drawer_icons_pattern_svg_js__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
          fill: "#fff",
          style: {
            height: '24px',
            width: '24px',
            fonSize: '1.45rem'
          },
          className: undefined
        }),
        maxWidth: "sm",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_61__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_29__/* .RJSFModalWrapper */ .U, {
          schema: _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.publishCatalogItemSchema,
          uiSchema: _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.publishCatalogItemUiSchema,
          handleSubmit: handleSubmit,
          submitBtnText: "Submit for Approval",
          handleClose: handleClose,
          helpText: "Upon submitting your catalog item, an approval flow will be initiated.[Learn more](https://docs.meshplay.io/concepts/catalog)"
        })
      })
    })
  });
}));
cov_8308hf9j4().s[367]++;

const mapDispatchToProps = dispatch => {
  cov_8308hf9j4().f[119]++;
  cov_8308hf9j4().s[368]++;
  return {
    updateProgress: (0,redux__WEBPACK_IMPORTED_MODULE_15__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_16__/* .updateProgress */ .RO, dispatch),
    toggleCatalogContent: (0,redux__WEBPACK_IMPORTED_MODULE_15__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_16__/* .toggleCatalogContent */ .tz, dispatch)
  };
};

cov_8308hf9j4().s[369]++;

const mapStateToProps = state => {
  cov_8308hf9j4().f[120]++;
  cov_8308hf9j4().s[370]++;
  return {
    user: state.get('user')?.toObject(),
    selectedK8sContexts: state.get('selectedK8sContexts'),
    catalogVisibility: state.get('catalogVisibility')
  };
}; // @ts-ignore


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)((0,react_redux__WEBPACK_IMPORTED_MODULE_14__.connect)(mapStateToProps, mapDispatchToProps)(MeshplayPatterns)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60765);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function cov_ux9wvamxw() {
  var path = "/workspace/meshplay/ui/components/MeshplayPatterns/ActionButton.js";
  var hash = "1065da60093d22817a08155af09a063df63d3043";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayPatterns/ActionButton.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 26
        },
        end: {
          line: 14,
          column: 47
        }
      },
      "1": {
        start: {
          line: 15,
          column: 20
        },
        end: {
          line: 15,
          column: 38
        }
      },
      "2": {
        start: {
          line: 17,
          column: 30
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 19
        }
      },
      "4": {
        start: {
          line: 21,
          column: 23
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "5": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 28
        }
      },
      "6": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 37
        }
      },
      "7": {
        start: {
          line: 23,
          column: 26
        },
        end: {
          line: 23,
          column: 35
        }
      },
      "8": {
        start: {
          line: 26,
          column: 22
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "9": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "10": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 13
        }
      },
      "11": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 19
        }
      },
      "12": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 85,
          column: 4
        }
      },
      "13": {
        start: {
          line: 68,
          column: 16
        },
        end: {
          line: 78,
          column: 27
        }
      },
      "14": {
        start: {
          line: 72,
          column: 20
        },
        end: {
          line: 72,
          column: 47
        }
      },
      "15": {
        start: {
          line: 73,
          column: 20
        },
        end: {
          line: 73,
          column: 49
        }
      }
    },
    fnMap: {
      "0": {
        name: "ActionButton",
        decl: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 36
          }
        },
        loc: {
          start: {
            line: 13,
            column: 70
          },
          end: {
            line: 86,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 31
          }
        },
        loc: {
          start: {
            line: 17,
            column: 36
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 21,
            column: 23
          },
          end: {
            line: 21,
            column: 24
          }
        },
        loc: {
          start: {
            line: 21,
            column: 34
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 21
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 23,
            column: 12
          },
          end: {
            line: 23,
            column: 13
          }
        },
        loc: {
          start: {
            line: 23,
            column: 26
          },
          end: {
            line: 23,
            column: 35
          }
        },
        line: 23
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 26,
            column: 22
          },
          end: {
            line: 26,
            column: 23
          }
        },
        loc: {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 26
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 67,
            column: 27
          },
          end: {
            line: 67,
            column: 28
          }
        },
        loc: {
          start: {
            line: 68,
            column: 16
          },
          end: {
            line: 78,
            column: 27
          }
        },
        line: 68
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 71,
            column: 27
          },
          end: {
            line: 71,
            column: 28
          }
        },
        loc: {
          start: {
            line: 71,
            column: 38
          },
          end: {
            line: 74,
            column: 19
          }
        },
        line: 71
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 29,
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
        line: 27
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 27,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 27,
            column: 25
          }
        }, {
          start: {
            line: 27,
            column: 29
          },
          end: {
            line: 27,
            column: 69
          }
        }],
        line: 27
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
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1065da60093d22817a08155af09a063df63d3043"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ux9wvamxw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ux9wvamxw();





function ActionButton({
  defaultActionClick,
  options
}) {
  cov_ux9wvamxw().f[0]++;
  const [open, setOpen] = (cov_ux9wvamxw().s[0]++, react__WEBPACK_IMPORTED_MODULE_0__.useState(false));
  const anchorRef = (cov_ux9wvamxw().s[1]++, react__WEBPACK_IMPORTED_MODULE_0__.useRef(null));
  cov_ux9wvamxw().s[2]++;

  const handleMenuItemClick = () => {
    cov_ux9wvamxw().f[1]++;
    cov_ux9wvamxw().s[3]++;
    setOpen(false);
  };

  cov_ux9wvamxw().s[4]++;

  const handleToggle = event => {
    cov_ux9wvamxw().f[2]++;
    cov_ux9wvamxw().s[5]++;
    event.stopPropagation();
    cov_ux9wvamxw().s[6]++;
    setOpen(prevOpen => {
      cov_ux9wvamxw().f[3]++;
      cov_ux9wvamxw().s[7]++;
      return !prevOpen;
    });
  };

  cov_ux9wvamxw().s[8]++;

  const handleClose = event => {
    cov_ux9wvamxw().f[4]++;
    cov_ux9wvamxw().s[9]++;

    if ((cov_ux9wvamxw().b[1][0]++, anchorRef.current) && (cov_ux9wvamxw().b[1][1]++, anchorRef.current.contains(event.target))) {
      cov_ux9wvamxw().b[0][0]++;
      cov_ux9wvamxw().s[10]++;
      return;
    } else {
      cov_ux9wvamxw().b[0][1]++;
    }

    cov_ux9wvamxw().s[11]++;
    setOpen(false);
  };

  cov_ux9wvamxw().s[12]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
      variant: "contained",
      style: {
        boxShadow: 'none'
      },
      ref: anchorRef,
      "aria-label": "Button group with a nested menu",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: defaultActionClick,
        variant: "contained",
        children: "Action"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
        size: "small",
        onClick: handleToggle,
        variant: "contained",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default()), {})
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Popper, {
      sx: {
        zIndex: 1
      },
      open: open,
      anchorEl: anchorRef.current,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ClickAwayListener, {
          onClickAway: handleClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuList, {
            id: "split-button-menu",
            autoFocusItem: true,
            children: options.map((option, index) => {
              cov_ux9wvamxw().f[5]++;
              cov_ux9wvamxw().s[13]++;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                disabled: option.disabled,
                onClick: event => {
                  cov_ux9wvamxw().f[6]++;
                  cov_ux9wvamxw().s[14]++;
                  handleMenuItemClick(event);
                  cov_ux9wvamxw().s[15]++;
                  option.onClick(event, index);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  style: {
                    marginRight: '0.5rem'
                  },
                  children: option.icon
                }), option.label]
              }, option);
            })
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ 48460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83974);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59641);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15652);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68885);
/* harmony import */ var _utils_can__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54872);
/* harmony import */ var _utils_permission_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24018);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_can__WEBPACK_IMPORTED_MODULE_8__]);
_utils_can__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_kiss8x3en() {
  var path = "/workspace/meshplay/ui/components/MeshplayPatterns/CustomToolbarSelect.js";
  var hash = "441f8531b5e0c209679f29f6b145296baf105111";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayPatterns/CustomToolbarSelect.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 35
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 22
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "2": {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 23,
          column: 7
        }
      },
      "3": {
        start: {
          line: 20,
          column: 67
        },
        end: {
          line: 23,
          column: 5
        }
      },
      "4": {
        start: {
          line: 24,
          column: 19
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "5": {
        start: {
          line: 26,
          column: 29
        },
        end: {
          line: 26,
          column: 41
        }
      },
      "6": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "7": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 13
        }
      },
      "8": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "9": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 37
        }
      },
      "10": {
        start: {
          line: 37,
          column: 24
        },
        end: {
          line: 37,
          column: 34
        }
      },
      "11": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 50,
          column: 6
        }
      },
      "12": {
        start: {
          line: 53,
          column: 27
        },
        end: {
          line: 55,
          column: 2
        }
      },
      "13": {
        start: {
          line: 53,
          column: 42
        },
        end: {
          line: 55,
          column: 1
        }
      },
      "14": {
        start: {
          line: 57,
          column: 24
        },
        end: {
          line: 60,
          column: 1
        }
      },
      "15": {
        start: {
          line: 58,
          column: 28
        },
        end: {
          line: 58,
          column: 69
        }
      },
      "16": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 59,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 22
          },
          end: {
            line: 19,
            column: 23
          }
        },
        loc: {
          start: {
            line: 19,
            column: 34
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 57
          },
          end: {
            line: 20,
            column: 58
          }
        },
        loc: {
          start: {
            line: 20,
            column: 67
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 22
          },
          end: {
            line: 26,
            column: 23
          }
        },
        loc: {
          start: {
            line: 26,
            column: 29
          },
          end: {
            line: 26,
            column: 41
          }
        },
        line: 26
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 31,
            column: 62
          },
          end: {
            line: 31,
            column: 63
          }
        },
        loc: {
          start: {
            line: 31,
            column: 68
          },
          end: {
            line: 33,
            column: 5
          }
        },
        line: 31
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        loc: {
          start: {
            line: 36,
            column: 11
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 36
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 53,
            column: 27
          },
          end: {
            line: 53,
            column: 28
          }
        },
        loc: {
          start: {
            line: 53,
            column: 42
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 53
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 57,
            column: 24
          },
          end: {
            line: 57,
            column: 25
          }
        },
        loc: {
          start: {
            line: 57,
            column: 35
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 57
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 30,
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
        line: 28
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
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "441f8531b5e0c209679f29f6b145296baf105111"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kiss8x3en = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_kiss8x3en();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const defaultToolbarSelectStyles = (cov_kiss8x3en().s[0]++, {
  iconButton: {},
  iconContainer: {
    marginRight: '24px'
  }
});

class CustomToolbarSelect extends ((react__WEBPACK_IMPORTED_MODULE_0___default().Component)) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClickDelete", (cov_kiss8x3en().s[1]++, async () => {
      cov_kiss8x3en().f[0]++;
      const toBeDeleted = (cov_kiss8x3en().s[2]++, this.props.selectedRows.data.map(idx => {
        cov_kiss8x3en().f[1]++;
        cov_kiss8x3en().s[3]++;
        return {
          id: this.props.patterns[idx.index]?.id,
          name: this.props.patterns[idx.index]?.name
        };
      }));
      let response = (cov_kiss8x3en().s[4]++, await this.props.showModal(toBeDeleted.length, toBeDeleted.map(p => {
        cov_kiss8x3en().f[2]++;
        cov_kiss8x3en().s[5]++;
        return ' ' + p.name;
      })));
      cov_kiss8x3en().s[6]++;

      if (response.toLowerCase() == 'no') {
        cov_kiss8x3en().b[0][0]++;
        cov_kiss8x3en().s[7]++;
        return;
      } else {
        cov_kiss8x3en().b[0][1]++;
      }

      cov_kiss8x3en().s[8]++;
      this.props.deletePatterns({
        patterns: toBeDeleted
      }).then(() => {
        cov_kiss8x3en().f[3]++;
        cov_kiss8x3en().s[9]++;
        this.props.setSelectedRows([]);
      });
    }));
  }

  render() {
    cov_kiss8x3en().f[4]++;
    const {
      classes
    } = (cov_kiss8x3en().s[10]++, this.props);
    cov_kiss8x3en().s[11]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: classes.iconContainer,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
        title: 'Delete',
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default()), {
          className: classes.iconButton,
          onClick: this.handleClickDelete,
          disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_9__/* .keys.DELETE_A_DESIGN.action */ .X.DELETE_A_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_9__/* .keys.DELETE_A_DESIGN.subject */ .X.DELETE_A_DESIGN.subject),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default()), {
            className: classes.icon
          })
        })
      })
    });
  }

}

cov_kiss8x3en().s[12]++;

const mapDispatchToProps = dispatch => {
  cov_kiss8x3en().f[5]++;
  cov_kiss8x3en().s[13]++;
  return {
    clearResultsSelection: (0,redux__WEBPACK_IMPORTED_MODULE_6__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_7__/* .clearResultsSelection */ ._H, dispatch)
  };
};

cov_kiss8x3en().s[14]++;

const mapStateToProps = state => {
  cov_kiss8x3en().f[6]++;
  const results_selection = (cov_kiss8x3en().s[15]++, state.get('results_selection').toObject());
  cov_kiss8x3en().s[16]++;
  return {
    results_selection
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.withStyles)(defaultToolbarSelectStyles, {
  name: 'CustomToolbarSelect'
})((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, mapDispatchToProps)(CustomToolbarSelect)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MeshplayPatternCard */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15652);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60140);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1772);
/* harmony import */ var _material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92211);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _FlipCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77292);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7051);
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64715);
/* harmony import */ var _material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_static_img_UndeployIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48696);
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77605);
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Cards_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49883);
/* harmony import */ var _YamlDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52724);
/* harmony import */ var _material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34369);
/* harmony import */ var _material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_TooltipButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40699);
/* harmony import */ var _public_static_img_CloneIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19084);
/* harmony import */ var _utils_Enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46811);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(72105);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7929);
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _constants_endpoints__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(27526);
/* harmony import */ var _rtk_query_user__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(67976);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(60577);
/* harmony import */ var _utils_can__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(54872);
/* harmony import */ var _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(24018);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(62997);
/* harmony import */ var _assets_icons_DryRunIcon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(72210);
/* harmony import */ var _assets_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(39554);
/* harmony import */ var _assets_icons_Pattern__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(76445);
/* harmony import */ var css_icons_styles__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(52518);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_can__WEBPACK_IMPORTED_MODULE_27__]);
_utils_can__WEBPACK_IMPORTED_MODULE_27__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_10s2vyhoiz() {
  var path = "/workspace/meshplay/ui/components/MeshplayPatterns/MeshplayPatternCard.js";
  var hash = "b69f7f4771b60528cd126c43635ea44917ac965a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayPatterns/MeshplayPatternCard.js",
    statementMap: {
      "0": {
        start: {
          line: 36,
          column: 26
        },
        end: {
          line: 36,
          column: 50
        }
      },
      "1": {
        start: {
          line: 64,
          column: 17
        },
        end: {
          line: 64,
          column: 28
        }
      },
      "2": {
        start: {
          line: 66,
          column: 30
        },
        end: {
          line: 69,
          column: 3
        }
      },
      "3": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 67,
          column: 25
        }
      },
      "4": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 11
        }
      },
      "5": {
        start: {
          line: 70,
          column: 36
        },
        end: {
          line: 70,
          column: 63
        }
      },
      "6": {
        start: {
          line: 71,
          column: 38
        },
        end: {
          line: 71,
          column: 53
        }
      },
      "7": {
        start: {
          line: 72,
          column: 34
        },
        end: {
          line: 72,
          column: 49
        }
      },
      "8": {
        start: {
          line: 74,
          column: 27
        },
        end: {
          line: 76,
          column: 3
        }
      },
      "9": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 75,
          column: 31
        }
      },
      "10": {
        start: {
          line: 78,
          column: 26
        },
        end: {
          line: 78,
          column: 68
        }
      },
      "11": {
        start: {
          line: 79,
          column: 29
        },
        end: {
          line: 79,
          column: 53
        }
      },
      "12": {
        start: {
          line: 80,
          column: 31
        },
        end: {
          line: 80,
          column: 57
        }
      },
      "13": {
        start: {
          line: 81,
          column: 18
        },
        end: {
          line: 81,
          column: 29
        }
      },
      "14": {
        start: {
          line: 82,
          column: 16
        },
        end: {
          line: 82,
          column: 26
        }
      },
      "15": {
        start: {
          line: 84,
          column: 29
        },
        end: {
          line: 86,
          column: 3
        }
      },
      "16": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 71
        }
      },
      "17": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 95
        }
      },
      "18": {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 376,
          column: 4
        }
      },
      "19": {
        start: {
          line: 107,
          column: 10
        },
        end: {
          line: 107,
          column: 33
        }
      },
      "20": {
        start: {
          line: 108,
          column: 10
        },
        end: {
          line: 108,
          column: 42
        }
      },
      "21": {
        start: {
          line: 112,
          column: 10
        },
        end: {
          line: 112,
          column: 93
        }
      },
      "22": {
        start: {
          line: 112,
          column: 27
        },
        end: {
          line: 112,
          column: 87
        }
      },
      "23": {
        start: {
          line: 112,
          column: 65
        },
        end: {
          line: 112,
          column: 86
        }
      },
      "24": {
        start: {
          line: 162,
          column: 35
        },
        end: {
          line: 162,
          column: 80
        }
      },
      "25": {
        start: {
          line: 170,
          column: 43
        },
        end: {
          line: 170,
          column: 79
        }
      },
      "26": {
        start: {
          line: 175,
          column: 36
        },
        end: {
          line: 175,
          column: 72
        }
      },
      "27": {
        start: {
          line: 181,
          column: 36
        },
        end: {
          line: 181,
          column: 72
        }
      },
      "28": {
        start: {
          line: 187,
          column: 36
        },
        end: {
          line: 187,
          column: 72
        }
      },
      "29": {
        start: {
          line: 193,
          column: 36
        },
        end: {
          line: 193,
          column: 74
        }
      },
      "30": {
        start: {
          line: 213,
          column: 35
        },
        end: {
          line: 213,
          column: 79
        }
      },
      "31": {
        start: {
          line: 229,
          column: 35
        },
        end: {
          line: 229,
          column: 71
        }
      },
      "32": {
        start: {
          line: 243,
          column: 35
        },
        end: {
          line: 243,
          column: 78
        }
      },
      "33": {
        start: {
          line: 255,
          column: 33
        },
        end: {
          line: 255,
          column: 73
        }
      },
      "34": {
        start: {
          line: 286,
          column: 22
        },
        end: {
          line: 290,
          column: 24
        }
      },
      "35": {
        start: {
          line: 288,
          column: 26
        },
        end: {
          line: 288,
          column: 45
        }
      },
      "36": {
        start: {
          line: 298,
          column: 48
        },
        end: {
          line: 298,
          column: 81
        }
      },
      "37": {
        start: {
          line: 314,
          column: 46
        },
        end: {
          line: 314,
          column: 58
        }
      },
      "38": {
        start: {
          line: 318,
          column: 18
        },
        end: {
          line: 323,
          column: 21
        }
      },
      "39": {
        start: {
          line: 354,
          column: 39
        },
        end: {
          line: 354,
          column: 77
        }
      },
      "40": {
        start: {
          line: 364,
          column: 39
        },
        end: {
          line: 364,
          column: 77
        }
      },
      "41": {
        start: {
          line: 379,
          column: 35
        },
        end: {
          line: 385,
          column: 1
        }
      },
      "42": {
        start: {
          line: 380,
          column: 2
        },
        end: {
          line: 384,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "MeshplayPatternCard_",
        decl: {
          start: {
            line: 38,
            column: 9
          },
          end: {
            line: 38,
            column: 29
          }
        },
        loc: {
          start: {
            line: 63,
            column: 3
          },
          end: {
            line: 377,
            column: 1
          }
        },
        line: 63
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 66,
            column: 30
          },
          end: {
            line: 66,
            column: 31
          }
        },
        loc: {
          start: {
            line: 66,
            column: 42
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 66
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 74,
            column: 27
          },
          end: {
            line: 74,
            column: 28
          }
        },
        loc: {
          start: {
            line: 74,
            column: 33
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 74
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 84,
            column: 29
          },
          end: {
            line: 84,
            column: 30
          }
        },
        loc: {
          start: {
            line: 84,
            column: 35
          },
          end: {
            line: 86,
            column: 3
          }
        },
        line: 84
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 106,
            column: 17
          },
          end: {
            line: 106,
            column: 18
          }
        },
        loc: {
          start: {
            line: 106,
            column: 23
          },
          end: {
            line: 109,
            column: 9
          }
        },
        line: 106
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 111,
            column: 16
          },
          end: {
            line: 111,
            column: 17
          }
        },
        loc: {
          start: {
            line: 112,
            column: 10
          },
          end: {
            line: 112,
            column: 93
          }
        },
        line: 112
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 112,
            column: 21
          },
          end: {
            line: 112,
            column: 22
          }
        },
        loc: {
          start: {
            line: 112,
            column: 27
          },
          end: {
            line: 112,
            column: 87
          }
        },
        line: 112
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 112,
            column: 39
          },
          end: {
            line: 112,
            column: 40
          }
        },
        loc: {
          start: {
            line: 112,
            column: 65
          },
          end: {
            line: 112,
            column: 86
          }
        },
        line: 112
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 162,
            column: 27
          },
          end: {
            line: 162,
            column: 28
          }
        },
        loc: {
          start: {
            line: 162,
            column: 35
          },
          end: {
            line: 162,
            column: 80
          }
        },
        line: 162
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 170,
            column: 36
          },
          end: {
            line: 170,
            column: 37
          }
        },
        loc: {
          start: {
            line: 170,
            column: 43
          },
          end: {
            line: 170,
            column: 79
          }
        },
        line: 170
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 175,
            column: 29
          },
          end: {
            line: 175,
            column: 30
          }
        },
        loc: {
          start: {
            line: 175,
            column: 36
          },
          end: {
            line: 175,
            column: 72
          }
        },
        line: 175
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 181,
            column: 29
          },
          end: {
            line: 181,
            column: 30
          }
        },
        loc: {
          start: {
            line: 181,
            column: 36
          },
          end: {
            line: 181,
            column: 72
          }
        },
        line: 181
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 187,
            column: 29
          },
          end: {
            line: 187,
            column: 30
          }
        },
        loc: {
          start: {
            line: 187,
            column: 36
          },
          end: {
            line: 187,
            column: 72
          }
        },
        line: 187
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 193,
            column: 29
          },
          end: {
            line: 193,
            column: 30
          }
        },
        loc: {
          start: {
            line: 193,
            column: 36
          },
          end: {
            line: 193,
            column: 74
          }
        },
        line: 193
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 213,
            column: 27
          },
          end: {
            line: 213,
            column: 28
          }
        },
        loc: {
          start: {
            line: 213,
            column: 35
          },
          end: {
            line: 213,
            column: 79
          }
        },
        line: 213
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 229,
            column: 27
          },
          end: {
            line: 229,
            column: 28
          }
        },
        loc: {
          start: {
            line: 229,
            column: 35
          },
          end: {
            line: 229,
            column: 71
          }
        },
        line: 229
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 243,
            column: 27
          },
          end: {
            line: 243,
            column: 28
          }
        },
        loc: {
          start: {
            line: 243,
            column: 35
          },
          end: {
            line: 243,
            column: 78
          }
        },
        line: 243
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 255,
            column: 25
          },
          end: {
            line: 255,
            column: 26
          }
        },
        loc: {
          start: {
            line: 255,
            column: 33
          },
          end: {
            line: 255,
            column: 73
          }
        },
        line: 255
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 285,
            column: 29
          },
          end: {
            line: 285,
            column: 30
          }
        },
        loc: {
          start: {
            line: 286,
            column: 22
          },
          end: {
            line: 290,
            column: 24
          }
        },
        line: 286
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 286,
            column: 46
          },
          end: {
            line: 286,
            column: 47
          }
        },
        loc: {
          start: {
            line: 286,
            column: 52
          },
          end: {
            line: 290,
            column: 23
          }
        },
        line: 286
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 298,
            column: 40
          },
          end: {
            line: 298,
            column: 41
          }
        },
        loc: {
          start: {
            line: 298,
            column: 48
          },
          end: {
            line: 298,
            column: 81
          }
        },
        line: 298
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 298,
            column: 72
          },
          end: {
            line: 298,
            column: 73
          }
        },
        loc: {
          start: {
            line: 298,
            column: 78
          },
          end: {
            line: 298,
            column: 80
          }
        },
        line: 298
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 314,
            column: 28
          },
          end: {
            line: 314,
            column: 29
          }
        },
        loc: {
          start: {
            line: 314,
            column: 46
          },
          end: {
            line: 314,
            column: 58
          }
        },
        line: 314
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 317,
            column: 39
          },
          end: {
            line: 317,
            column: 40
          }
        },
        loc: {
          start: {
            line: 318,
            column: 18
          },
          end: {
            line: 323,
            column: 21
          }
        },
        line: 318
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 354,
            column: 31
          },
          end: {
            line: 354,
            column: 32
          }
        },
        loc: {
          start: {
            line: 354,
            column: 39
          },
          end: {
            line: 354,
            column: 77
          }
        },
        line: 354
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 364,
            column: 31
          },
          end: {
            line: 364,
            column: 32
          }
        },
        loc: {
          start: {
            line: 364,
            column: 39
          },
          end: {
            line: 364,
            column: 77
          }
        },
        line: 364
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 379,
            column: 35
          },
          end: {
            line: 379,
            column: 36
          }
        },
        loc: {
          start: {
            line: 379,
            column: 46
          },
          end: {
            line: 385,
            column: 1
          }
        },
        line: 379
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 18
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 55,
            column: 16
          },
          end: {
            line: 55,
            column: 18
          }
        }],
        line: 55
      },
      "1": {
        loc: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 27
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 57,
            column: 22
          },
          end: {
            line: 57,
            column: 27
          }
        }],
        line: 57
      },
      "2": {
        loc: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 61,
            column: 24
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 61,
            column: 19
          },
          end: {
            line: 61,
            column: 24
          }
        }],
        line: 61
      },
      "3": {
        loc: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 62,
            column: 20
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 62,
            column: 15
          },
          end: {
            line: 62,
            column: 20
          }
        }],
        line: 62
      },
      "4": {
        loc: {
          start: {
            line: 78,
            column: 46
          },
          end: {
            line: 78,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 78,
            column: 46
          },
          end: {
            line: 78,
            column: 61
          }
        }, {
          start: {
            line: 78,
            column: 65
          },
          end: {
            line: 78,
            column: 67
          }
        }],
        line: 78
      },
      "5": {
        loc: {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 95
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 58
          }
        }, {
          start: {
            line: 88,
            column: 62
          },
          end: {
            line: 88,
            column: 95
          }
        }],
        line: 88
      },
      "6": {
        loc: {
          start: {
            line: 92,
            column: 7
          },
          end: {
            line: 104,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 92,
            column: 7
          },
          end: {
            line: 92,
            column: 17
          }
        }, {
          start: {
            line: 93,
            column: 8
          },
          end: {
            line: 103,
            column: 10
          }
        }],
        line: 92
      },
      "7": {
        loc: {
          start: {
            line: 131,
            column: 15
          },
          end: {
            line: 135,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 132,
            column: 16
          },
          end: {
            line: 132,
            column: 59
          }
        }, {
          start: {
            line: 134,
            column: 16
          },
          end: {
            line: 134,
            column: 85
          }
        }],
        line: 131
      },
      "8": {
        loc: {
          start: {
            line: 139,
            column: 17
          },
          end: {
            line: 151,
            column: 24
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 140,
            column: 18
          },
          end: {
            line: 150,
            column: 31
          }
        }, {
          start: {
            line: 151,
            column: 20
          },
          end: {
            line: 151,
            column: 24
          }
        }],
        line: 139
      },
      "9": {
        loc: {
          start: {
            line: 145,
            column: 24
          },
          end: {
            line: 145,
            column: 94
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 145,
            column: 56
          },
          end: {
            line: 145,
            column: 82
          }
        }, {
          start: {
            line: 145,
            column: 85
          },
          end: {
            line: 145,
            column: 94
          }
        }],
        line: 145
      },
      "10": {
        loc: {
          start: {
            line: 157,
            column: 15
          },
          end: {
            line: 168,
            column: 15
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 157,
            column: 15
          },
          end: {
            line: 157,
            column: 32
          }
        }, {
          start: {
            line: 157,
            column: 36
          },
          end: {
            line: 157,
            column: 71
          }
        }, {
          start: {
            line: 158,
            column: 16
          },
          end: {
            line: 167,
            column: 32
          }
        }],
        line: 157
      },
      "11": {
        loc: {
          start: {
            line: 208,
            column: 15
          },
          end: {
            line: 236,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 209,
            column: 16
          },
          end: {
            line: 223,
            column: 32
          }
        }, {
          start: {
            line: 225,
            column: 16
          },
          end: {
            line: 235,
            column: 32
          }
        }],
        line: 208
      },
      "12": {
        loc: {
          start: {
            line: 238,
            column: 15
          },
          end: {
            line: 250,
            column: 15
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 238,
            column: 15
          },
          end: {
            line: 238,
            column: 26
          }
        }, {
          start: {
            line: 239,
            column: 16
          },
          end: {
            line: 249,
            column: 32
          }
        }],
        line: 238
      },
      "13": {
        loc: {
          start: {
            line: 293,
            column: 21
          },
          end: {
            line: 293,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 293,
            column: 34
          },
          end: {
            line: 293,
            column: 52
          }
        }, {
          start: {
            line: 293,
            column: 55
          },
          end: {
            line: 293,
            column: 69
          }
        }],
        line: 293
      },
      "14": {
        loc: {
          start: {
            line: 300,
            column: 15
          },
          end: {
            line: 325,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 301,
            column: 16
          },
          end: {
            line: 315,
            column: 18
          }
        }, {
          start: {
            line: 317,
            column: 16
          },
          end: {
            line: 324,
            column: 18
          }
        }],
        line: 300
      },
      "15": {
        loc: {
          start: {
            line: 302,
            column: 25
          },
          end: {
            line: 302,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 302,
            column: 25
          },
          end: {
            line: 302,
            column: 33
          }
        }, {
          start: {
            line: 302,
            column: 37
          },
          end: {
            line: 302,
            column: 49
          }
        }],
        line: 302
      },
      "16": {
        loc: {
          start: {
            line: 303,
            column: 29
          },
          end: {
            line: 303,
            column: 75
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 303,
            column: 42
          },
          end: {
            line: 303,
            column: 70
          }
        }, {
          start: {
            line: 303,
            column: 73
          },
          end: {
            line: 303,
            column: 75
          }
        }],
        line: 303
      },
      "17": {
        loc: {
          start: {
            line: 331,
            column: 19
          },
          end: {
            line: 343,
            column: 26
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 332,
            column: 20
          },
          end: {
            line: 342,
            column: 33
          }
        }, {
          start: {
            line: 343,
            column: 22
          },
          end: {
            line: 343,
            column: 26
          }
        }],
        line: 331
      },
      "18": {
        loc: {
          start: {
            line: 337,
            column: 26
          },
          end: {
            line: 337,
            column: 96
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 337,
            column: 58
          },
          end: {
            line: 337,
            column: 84
          }
        }, {
          start: {
            line: 337,
            column: 87
          },
          end: {
            line: 337,
            column: 96
          }
        }],
        line: 337
      },
      "19": {
        loc: {
          start: {
            line: 348,
            column: 15
          },
          end: {
            line: 370,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 348,
            column: 28
          },
          end: {
            line: 348,
            column: 32
          }
        }, {
          start: {
            line: 349,
            column: 16
          },
          end: {
            line: 369,
            column: 22
          }
        }],
        line: 348
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
      "42": 0
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
      "26": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0],
      "3": [0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b69f7f4771b60528cd126c43635ea44917ac965a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10s2vyhoiz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_10s2vyhoiz();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






































const INITIAL_GRID_SIZE = (cov_10s2vyhoiz().s[0]++, {
  xl: 4,
  md: 6,
  xs: 12
});

function MeshplayPatternCard_({
  id,
  name,
  updated_at,
  created_at,
  pattern_file,
  handleVerify,
  handleDryRun,
  handleUnpublishModal,
  handleDeploy,
  handleUnDeploy,
  handleDownload,
  updateHandler,
  deleteHandler,
  handleClone,
  setSelectedPatterns,
  setYaml,
  description = (cov_10s2vyhoiz().b[0][0]++, {}),
  visibility,
  canPublishPattern = (cov_10s2vyhoiz().b[1][0]++, false),
  user,
  pattern,
  handleInfoModal,
  hideVisibility = (cov_10s2vyhoiz().b[2][0]++, false),
  isReadOnly = (cov_10s2vyhoiz().b[3][0]++, false)
}) {
  cov_10s2vyhoiz().f[0]++;
  const router = (cov_10s2vyhoiz().s[1]++, (0,next_router__WEBPACK_IMPORTED_MODULE_20__.useRouter)());
  cov_10s2vyhoiz().s[2]++;

  const genericClickHandler = (ev, fn) => {
    cov_10s2vyhoiz().f[1]++;
    cov_10s2vyhoiz().s[3]++;
    ev.stopPropagation();
    cov_10s2vyhoiz().s[4]++;
    fn(ev);
  };

  const [gridProps, setGridProps] = (cov_10s2vyhoiz().s[5]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(INITIAL_GRID_SIZE));
  const [fullScreen, setFullScreen] = (cov_10s2vyhoiz().s[6]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  const [showCode, setShowCode] = (cov_10s2vyhoiz().s[7]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  cov_10s2vyhoiz().s[8]++;

  const toggleFullScreen = () => {
    cov_10s2vyhoiz().f[2]++;
    cov_10s2vyhoiz().s[9]++;
    setFullScreen(!fullScreen);
  };

  const {
    data: owner
  } = (cov_10s2vyhoiz().s[10]++, (0,_rtk_query_user__WEBPACK_IMPORTED_MODULE_24__/* .useGetUserByIdQuery */ .Fk)((cov_10s2vyhoiz().b[4][0]++, pattern.user_id) || (cov_10s2vyhoiz().b[4][1]++, '')));
  const catalogContentKeys = (cov_10s2vyhoiz().s[11]++, Object.keys(description));
  const catalogContentValues = (cov_10s2vyhoiz().s[12]++, Object.values(description));
  const classes = (cov_10s2vyhoiz().s[13]++, (0,_Cards_styles__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)());
  const theme = (cov_10s2vyhoiz().s[14]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__.useTheme)());
  cov_10s2vyhoiz().s[15]++;

  const editInConfigurator = () => {
    cov_10s2vyhoiz().f[3]++;
    cov_10s2vyhoiz().s[16]++;
    router.push('/configuration/designs/configurator?design_id=' + id);
  };

  const userCanEdit = (cov_10s2vyhoiz().s[17]++, (cov_10s2vyhoiz().b[5][0]++, (0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.EDIT_DESIGN.action */ .X.EDIT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.EDIT_DESIGN.subject */ .X.EDIT_DESIGN.subject)) || (cov_10s2vyhoiz().b[5][1]++, user?.user_id == pattern?.user_id)); // allow if owner

  cov_10s2vyhoiz().s[18]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
    children: [(cov_10s2vyhoiz().b[6][0]++, fullScreen) && (cov_10s2vyhoiz().b[6][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_YamlDialog__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      fullScreen: fullScreen,
      name: name,
      toggleFullScreen: toggleFullScreen,
      config_file: pattern_file,
      setYaml: setYaml,
      updateHandler: updateHandler,
      deleteHandler: deleteHandler,
      type: 'pattern',
      isReadOnly: isReadOnly
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_FlipCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      onClick: () => {
        cov_10s2vyhoiz().f[4]++;
        cov_10s2vyhoiz().s[19]++;
        console.log(gridProps);
        cov_10s2vyhoiz().s[20]++;
        setGridProps(INITIAL_GRID_SIZE);
      },
      duration: 600,
      onShow: () => {
        cov_10s2vyhoiz().f[5]++;
        cov_10s2vyhoiz().s[21]++;
        return setTimeout(() => {
          cov_10s2vyhoiz().f[6]++;
          cov_10s2vyhoiz().s[22]++;
          return setShowCode(currentCodeVisibilty => {
            cov_10s2vyhoiz().f[7]++;
            cov_10s2vyhoiz().s[23]++;
            return !currentCodeVisibilty;
          });
        }, 500);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
            style: {
              height: 'max',
              display: 'flex',
              justifyContent: 'space-between'
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
              style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '20rem'
              },
              variant: "h6",
              component: "div",
              children: name
            }), hideVisibility ? (cov_10s2vyhoiz().b[7][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_assets_icons_Pattern__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, css_icons_styles__WEBPACK_IMPORTED_MODULE_33__/* .iconLarge */ .wJ), {}, {
              color: true
            }))) : (cov_10s2vyhoiz().b[7][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("img", {
              className: classes.img,
              src: `/static/img/${visibility}.svg`
            }))]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
            className: classes.lastRunText,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
              children: updated_at ? (cov_10s2vyhoiz().b[8][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "caption",
                style: {
                  fontStyle: 'italic',
                  color: `${theme.palette.type === 'dark' ? (cov_10s2vyhoiz().b[9][0]++, 'rgba(255, 255, 255, 0.7)') : (cov_10s2vyhoiz().b[9][1]++, '#647881')}`
                },
                children: ["Modified On: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_6___default()), {
                  format: "LLL",
                  children: updated_at
                })]
              })) : (cov_10s2vyhoiz().b[8][1]++, null)
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
          className: classes.bottomPart,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
            className: classes.cardButtons,
            children: [(cov_10s2vyhoiz().b[10][0]++, canPublishPattern) && (cov_10s2vyhoiz().b[10][1]++, visibility === _utils_Enum__WEBPACK_IMPORTED_MODULE_18__/* .VISIBILITY.PUBLISHED */ .ix.PUBLISHED) && (cov_10s2vyhoiz().b[10][2]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_utils_TooltipButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              variant: "contained",
              title: "Unpublish",
              className: classes.testsButton,
              onClick: ev => {
                cov_10s2vyhoiz().f[8]++;
                cov_10s2vyhoiz().s[24]++;
                return genericClickHandler(ev, handleUnpublishModal);
              },
              disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.UNPUBLISH_DESIGN.action */ .X.UNPUBLISH_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.UNPUBLISH_DESIGN.subject */ .X.UNPUBLISH_DESIGN.subject),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((_material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_15___default()), {
                className: classes.iconPatt
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                className: classes.btnText,
                children: " Unpublish "
              })]
            })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_ActionButton__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              defaultActionClick: e => {
                cov_10s2vyhoiz().f[9]++;
                cov_10s2vyhoiz().s[25]++;
                return genericClickHandler(e, handleVerify);
              },
              options: [{
                label: 'Validate',
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_assets_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                  className: classes.iconPatt
                }),
                onClick: e => {
                  cov_10s2vyhoiz().f[10]++;
                  cov_10s2vyhoiz().s[26]++;
                  return genericClickHandler(e, handleVerify);
                },
                disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.VALIDATE_DESIGN.action */ .X.VALIDATE_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.VALIDATE_DESIGN.subject */ .X.VALIDATE_DESIGN.subject)
              }, {
                label: 'Dry Run',
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_assets_icons_DryRunIcon__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                  className: classes.iconPatt
                }),
                onClick: e => {
                  cov_10s2vyhoiz().f[11]++;
                  cov_10s2vyhoiz().s[27]++;
                  return genericClickHandler(e, handleDryRun);
                },
                disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.VALIDATE_DESIGN.action */ .X.VALIDATE_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.VALIDATE_DESIGN.subject */ .X.VALIDATE_DESIGN.subject)
              }, {
                label: 'Deploy',
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_12___default()), {
                  className: classes.iconPatt
                }),
                onClick: e => {
                  cov_10s2vyhoiz().f[12]++;
                  cov_10s2vyhoiz().s[28]++;
                  return genericClickHandler(e, handleDeploy);
                },
                disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.DEPLOY_DESIGN.action */ .X.DEPLOY_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.DEPLOY_DESIGN.subject */ .X.DEPLOY_DESIGN.subject)
              }, {
                label: 'Undeploy',
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_public_static_img_UndeployIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  fill: 'currentColor',
                  className: classes.iconPatt
                }),
                onClick: e => {
                  cov_10s2vyhoiz().f[13]++;
                  cov_10s2vyhoiz().s[29]++;
                  return genericClickHandler(e, handleUnDeploy);
                },
                disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.DEPLOY_DESIGN.action */ .X.DEPLOY_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.DEPLOY_DESIGN.subject */ .X.DEPLOY_DESIGN.subject)
              }]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_utils_TooltipButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              title: "Download",
              variant: "contained",
              color: "primary",
              onClick: handleDownload,
              className: classes.testsButton,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_7___default()), {
                "data-cy": "download-button"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                className: classes.btnText,
                children: " Download "
              })]
            }), visibility === _utils_Enum__WEBPACK_IMPORTED_MODULE_18__/* .VISIBILITY.PRIVATE */ .ix.PRIVATE ? (cov_10s2vyhoiz().b[11][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_utils_TooltipButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              title: "Design",
              variant: "contained",
              color: "primary",
              onClick: ev => {
                cov_10s2vyhoiz().f[14]++;
                cov_10s2vyhoiz().s[30]++;
                return genericClickHandler(ev, setSelectedPatterns);
              },
              className: classes.testsButton,
              disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.EDIT_DESIGN.action */ .X.EDIT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.EDIT_DESIGN.subject */ .X.EDIT_DESIGN.subject),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                src: "/static/img/pattern_trans.svg",
                className: classes.iconPatt,
                imgProps: {
                  height: '16px',
                  width: '16px'
                }
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                className: classes.btnText,
                children: " Design "
              })]
            })) : (cov_10s2vyhoiz().b[11][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_utils_TooltipButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              title: "Clone",
              variant: "contained",
              color: "primary",
              onClick: ev => {
                cov_10s2vyhoiz().f[15]++;
                cov_10s2vyhoiz().s[31]++;
                return genericClickHandler(ev, handleClone);
              },
              className: classes.testsButton,
              disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.CLONE_DESIGN.action */ .X.CLONE_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.CLONE_DESIGN.subject */ .X.CLONE_DESIGN.subject),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_public_static_img_CloneIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                fill: "#ffffff",
                className: classes.iconPatt
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                className: classes.cloneBtnText,
                children: " Clone "
              })]
            })), (cov_10s2vyhoiz().b[12][0]++, userCanEdit) && (cov_10s2vyhoiz().b[12][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_utils_TooltipButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              title: "Edit In Configurator",
              variant: "contained",
              color: "primary",
              onClick: ev => {
                cov_10s2vyhoiz().f[16]++;
                cov_10s2vyhoiz().s[32]++;
                return genericClickHandler(ev, editInConfigurator);
              },
              disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.EDIT_DESIGN.action */ .X.EDIT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.EDIT_DESIGN.subject */ .X.EDIT_DESIGN.subject),
              className: classes.testsButton,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_21__.Edit, {
                style: {
                  fill: '#fff'
                },
                className: classes.iconPatt
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                className: classes.cloneBtnText,
                children: " Edit "
              })]
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_utils_TooltipButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              title: "Pattern Information",
              variant: "contained",
              color: "primary",
              onClick: ev => {
                cov_10s2vyhoiz().f[17]++;
                cov_10s2vyhoiz().s[33]++;
                return genericClickHandler(ev, handleInfoModal);
              },
              className: classes.testsButton,
              disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.DETAILS_OF_DESIGN.action */ .X.DETAILS_OF_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.DETAILS_OF_DESIGN.subject */ .X.DETAILS_OF_DESIGN.subject),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_22___default()), {
                style: {
                  fill: '#fff'
                },
                className: classes.iconPatt
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("span", {
                className: classes.btnText,
                children: " Info "
              })]
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
          className: classes.backGrid,
          container: true,
          spacing: 1,
          alignContent: "space-between",
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            xs: 12,
            className: classes.yamlDialogTitle,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
              variant: "h6",
              className: classes.yamlDialogTitleText,
              children: name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
              className: classes.cardHeaderRight,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: `${_constants_endpoints__WEBPACK_IMPORTED_MODULE_23__/* .MESHPLAY_CLOUD_PROD */ .l6}/user/${pattern?.user_id}`,
                target: "_blank",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                  alt: "profile-avatar",
                  src: owner?.avatar_url
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2__.CustomTooltip, {
                title: "Enter Fullscreen",
                arrow: true,
                interactive: true,
                placement: "top",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                  onClick: ev => {
                    cov_10s2vyhoiz().f[18]++;
                    cov_10s2vyhoiz().s[34]++;
                    return genericClickHandler(ev, () => {
                      cov_10s2vyhoiz().f[19]++;
                      {
                        cov_10s2vyhoiz().s[35]++;
                        toggleFullScreen();
                      }
                    });
                  },
                  children: fullScreen ? (cov_10s2vyhoiz().b[13][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((_material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_10___default()), {})) : (cov_10s2vyhoiz().b[13][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_5___default()), {}))
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            xs: 12,
            onClick: ev => {
              cov_10s2vyhoiz().f[20]++;
              cov_10s2vyhoiz().s[36]++;
              return genericClickHandler(ev, () => {
                cov_10s2vyhoiz().f[21]++;
              });
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {
              variant: "fullWidth",
              light: true
            }), catalogContentKeys.length === 0 ? (cov_10s2vyhoiz().b[14][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_codemirror2__WEBPACK_IMPORTED_MODULE_9__.UnControlled, {
              value: (cov_10s2vyhoiz().b[15][0]++, showCode) && (cov_10s2vyhoiz().b[15][1]++, pattern_file),
              className: fullScreen ? (cov_10s2vyhoiz().b[16][0]++, classes.fullScreenCodeMirror) : (cov_10s2vyhoiz().b[16][1]++, ''),
              options: {
                theme: 'material',
                lineNumbers: true,
                lineWrapping: true,
                gutters: ['CodeMirror-lint-markers'],
                // @ts-ignore
                lint: true,
                mode: 'text/x-yaml',
                readOnly: isReadOnly
              },
              onChange: (_, data, val) => {
                cov_10s2vyhoiz().f[22]++;
                cov_10s2vyhoiz().s[37]++;
                return setYaml(val);
              }
            })) : (cov_10s2vyhoiz().b[14][1]++, catalogContentKeys.map((title, index) => {
              cov_10s2vyhoiz().f[23]++;
              cov_10s2vyhoiz().s[38]++;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                  variant: "h6",
                  className: classes.yamlDialogTitleText,
                  children: title
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                  variant: "body2",
                  children: catalogContentValues[index]
                })]
              });
            }))]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            xs: 8,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
              className: classes.lastRunText,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("div", {
                children: created_at ? (cov_10s2vyhoiz().b[17][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                  variant: "caption",
                  style: {
                    fontStyle: 'italic',
                    color: `${theme.palette.type === 'dark' ? (cov_10s2vyhoiz().b[18][0]++, 'rgba(255, 255, 255, 0.7)') : (cov_10s2vyhoiz().b[18][1]++, '#647881')}`
                  },
                  children: ["Created at: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_6___default()), {
                    format: "LLL",
                    children: created_at
                  })]
                })) : (cov_10s2vyhoiz().b[17][1]++, null)
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            xs: 12,
            children: isReadOnly ? (cov_10s2vyhoiz().b[19][0]++, null) : (cov_10s2vyhoiz().b[19][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
              className: classes.updateDeleteButtons,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2__.CustomTooltip, {
                title: "Save",
                arrow: true,
                interactive: true,
                placement: "bottom",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                  disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.EDIT_DESIGN.action */ .X.EDIT_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.EDIT_DESIGN.subject */ .X.EDIT_DESIGN.subject),
                  onClick: ev => {
                    cov_10s2vyhoiz().f[24]++;
                    cov_10s2vyhoiz().s[39]++;
                    return genericClickHandler(ev, updateHandler);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_4___default()), {
                    color: "primary"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_2__.CustomTooltip, {
                title: "Delete",
                arrow: true,
                interactive: true,
                placement: "bottom",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                  disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.DELETE_A_DESIGN.action */ .X.DELETE_A_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_28__/* .keys.DELETE_A_DESIGN.subject */ .X.DELETE_A_DESIGN.subject),
                  onClick: ev => {
                    cov_10s2vyhoiz().f[25]++;
                    cov_10s2vyhoiz().s[40]++;
                    return genericClickHandler(ev, deleteHandler);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default()), {
                    color: "primary"
                  })
                })
              })]
            }))
          })]
        })
      })]
    })]
  });
}

cov_10s2vyhoiz().s[41]++;
const MeshplayPatternCard = props => {
  cov_10s2vyhoiz().f[26]++;
  cov_10s2vyhoiz().s[42]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_25__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_26__/* .store */ .h,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(MeshplayPatternCard_, _objectSpread({}, props))
  });
}; // @ts-ignore

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeshplayPatternCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74116);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MeshplayPatternCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59563);
/* harmony import */ var _configuratorComponents_MeshModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63083);
/* harmony import */ var _utils_Enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46811);
/* harmony import */ var _lib_event_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42880);
/* harmony import */ var _Grid_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79786);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39151);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68885);
/* harmony import */ var _ExportModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26652);
/* harmony import */ var _utils_fileDownloader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95081);
/* harmony import */ var _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93113);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _SistentWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75516);
/* harmony import */ var _public_static_img_drawer_icons_pattern_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(65681);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MeshplayPatternCard__WEBPACK_IMPORTED_MODULE_3__, _configuratorComponents_MeshModel__WEBPACK_IMPORTED_MODULE_4__, _Modal__WEBPACK_IMPORTED_MODULE_8__, _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_14__]);
([_MeshplayPatternCard__WEBPACK_IMPORTED_MODULE_3__, _configuratorComponents_MeshModel__WEBPACK_IMPORTED_MODULE_4__, _Modal__WEBPACK_IMPORTED_MODULE_8__, _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_qwnueyota() {
  var path = "/workspace/meshplay/ui/components/MeshplayPatterns/MeshplayPatternGridView.js";
  var hash = "9f9ffff18d1f30ead0f389e4e908dc649380c0e8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayPatterns/MeshplayPatternGridView.js",
    statementMap: {
      "0": {
        start: {
          line: 20,
          column: 26
        },
        end: {
          line: 20,
          column: 50
        }
      },
      "1": {
        start: {
          line: 40,
          column: 36
        },
        end: {
          line: 40,
          column: 63
        }
      },
      "2": {
        start: {
          line: 41,
          column: 26
        },
        end: {
          line: 41,
          column: 56
        }
      },
      "3": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 91,
          column: 4
        }
      },
      "4": {
        start: {
          line: 53,
          column: 31
        },
        end: {
          line: 53,
          column: 71
        }
      },
      "5": {
        start: {
          line: 54,
          column: 34
        },
        end: {
          line: 54,
          column: 65
        }
      },
      "6": {
        start: {
          line: 65,
          column: 10
        },
        end: {
          line: 71,
          column: 12
        }
      },
      "7": {
        start: {
          line: 74,
          column: 10
        },
        end: {
          line: 80,
          column: 12
        }
      },
      "8": {
        start: {
          line: 82,
          column: 35
        },
        end: {
          line: 82,
          column: 88
        }
      },
      "9": {
        start: {
          line: 149,
          column: 18
        },
        end: {
          line: 149,
          column: 29
        }
      },
      "10": {
        start: {
          line: 150,
          column: 21
        },
        end: {
          line: 150,
          column: 38
        }
      },
      "11": {
        start: {
          line: 151,
          column: 29
        },
        end: {
          line: 159,
          column: 3
        }
      },
      "12": {
        start: {
          line: 152,
          column: 4
        },
        end: {
          line: 158,
          column: 5
        }
      },
      "13": {
        start: {
          line: 153,
          column: 6
        },
        end: {
          line: 157,
          column: 9
        }
      },
      "14": {
        start: {
          line: 160,
          column: 34
        },
        end: {
          line: 166,
          column: 3
        }
      },
      "15": {
        start: {
          line: 161,
          column: 4
        },
        end: {
          line: 165,
          column: 7
        }
      },
      "16": {
        start: {
          line: 168,
          column: 44
        },
        end: {
          line: 171,
          column: 4
        }
      },
      "17": {
        start: {
          line: 172,
          column: 25
        },
        end: {
          line: 182,
          column: 3
        }
      },
      "18": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 173,
          column: 24
        }
      },
      "19": {
        start: {
          line: 174,
          column: 4
        },
        end: {
          line: 181,
          column: 5
        }
      },
      "20": {
        start: {
          line: 175,
          column: 15
        },
        end: {
          line: 175,
          column: 24
        }
      },
      "21": {
        start: {
          line: 176,
          column: 17
        },
        end: {
          line: 176,
          column: 28
        }
      },
      "22": {
        start: {
          line: 177,
          column: 6
        },
        end: {
          line: 177,
          column: 74
        }
      },
      "23": {
        start: {
          line: 178,
          column: 6
        },
        end: {
          line: 178,
          column: 87
        }
      },
      "24": {
        start: {
          line: 180,
          column: 6
        },
        end: {
          line: 180,
          column: 23
        }
      },
      "25": {
        start: {
          line: 183,
          column: 36
        },
        end: {
          line: 189,
          column: 3
        }
      },
      "26": {
        start: {
          line: 184,
          column: 4
        },
        end: {
          line: 188,
          column: 8
        }
      },
      "27": {
        start: {
          line: 184,
          column: 37
        },
        end: {
          line: 188,
          column: 5
        }
      },
      "28": {
        start: {
          line: 191,
          column: 36
        },
        end: {
          line: 198,
          column: 3
        }
      },
      "29": {
        start: {
          line: 192,
          column: 4
        },
        end: {
          line: 192,
          column: 24
        }
      },
      "30": {
        start: {
          line: 193,
          column: 4
        },
        end: {
          line: 197,
          column: 8
        }
      },
      "31": {
        start: {
          line: 193,
          column: 37
        },
        end: {
          line: 197,
          column: 5
        }
      },
      "32": {
        start: {
          line: 200,
          column: 2
        },
        end: {
          line: 309,
          column: 4
        }
      },
      "33": {
        start: {
          line: 212,
          column: 12
        },
        end: {
          line: 238,
          column: 14
        }
      },
      "34": {
        start: {
          line: 217,
          column: 33
        },
        end: {
          line: 217,
          column: 70
        }
      },
      "35": {
        start: {
          line: 219,
          column: 16
        },
        end: {
          line: 219,
          column: 83
        }
      },
      "36": {
        start: {
          line: 222,
          column: 16
        },
        end: {
          line: 222,
          column: 85
        }
      },
      "37": {
        start: {
          line: 225,
          column: 16
        },
        end: {
          line: 225,
          column: 82
        }
      },
      "38": {
        start: {
          line: 228,
          column: 16
        },
        end: {
          line: 228,
          column: 86
        }
      },
      "39": {
        start: {
          line: 230,
          column: 40
        },
        end: {
          line: 230,
          column: 67
        }
      },
      "40": {
        start: {
          line: 231,
          column: 43
        },
        end: {
          line: 231,
          column: 77
        }
      },
      "41": {
        start: {
          line: 232,
          column: 37
        },
        end: {
          line: 232,
          column: 61
        }
      },
      "42": {
        start: {
          line: 234,
          column: 37
        },
        end: {
          line: 234,
          column: 74
        }
      },
      "43": {
        start: {
          line: 271,
          column: 35
        },
        end: {
          line: 271,
          column: 52
        }
      },
      "44": {
        start: {
          line: 312,
          column: 27
        },
        end: {
          line: 314,
          column: 2
        }
      },
      "45": {
        start: {
          line: 312,
          column: 42
        },
        end: {
          line: 314,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "PatternCardGridItem",
        decl: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 28
          }
        },
        loc: {
          start: {
            line: 39,
            column: 3
          },
          end: {
            line: 92,
            column: 1
          }
        },
        line: 39
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 53,
            column: 25
          },
          end: {
            line: 53,
            column: 26
          }
        },
        loc: {
          start: {
            line: 53,
            column: 31
          },
          end: {
            line: 53,
            column: 71
          }
        },
        line: 53
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 54,
            column: 28
          },
          end: {
            line: 54,
            column: 29
          }
        },
        loc: {
          start: {
            line: 54,
            column: 34
          },
          end: {
            line: 54,
            column: 65
          }
        },
        line: 54
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 64,
            column: 23
          },
          end: {
            line: 64,
            column: 24
          }
        },
        loc: {
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 71,
            column: 12
          }
        },
        line: 65
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 73,
            column: 23
          },
          end: {
            line: 73,
            column: 24
          }
        },
        loc: {
          start: {
            line: 74,
            column: 10
          },
          end: {
            line: 80,
            column: 12
          }
        },
        line: 74
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 82,
            column: 29
          },
          end: {
            line: 82,
            column: 30
          }
        },
        loc: {
          start: {
            line: 82,
            column: 35
          },
          end: {
            line: 82,
            column: 88
          }
        },
        line: 82
      },
      "6": {
        name: "MeshplayPatternGrid",
        decl: {
          start: {
            line: 125,
            column: 9
          },
          end: {
            line: 125,
            column: 28
          }
        },
        loc: {
          start: {
            line: 148,
            column: 3
          },
          end: {
            line: 310,
            column: 1
          }
        },
        line: 148
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 151,
            column: 29
          },
          end: {
            line: 151,
            column: 30
          }
        },
        loc: {
          start: {
            line: 151,
            column: 42
          },
          end: {
            line: 159,
            column: 3
          }
        },
        line: 151
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 160,
            column: 34
          },
          end: {
            line: 160,
            column: 35
          }
        },
        loc: {
          start: {
            line: 160,
            column: 40
          },
          end: {
            line: 166,
            column: 3
          }
        },
        line: 160
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 172,
            column: 25
          },
          end: {
            line: 172,
            column: 26
          }
        },
        loc: {
          start: {
            line: 172,
            column: 61
          },
          end: {
            line: 182,
            column: 3
          }
        },
        line: 172
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 183,
            column: 36
          },
          end: {
            line: 183,
            column: 37
          }
        },
        loc: {
          start: {
            line: 183,
            column: 42
          },
          end: {
            line: 189,
            column: 3
          }
        },
        line: 183
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 184,
            column: 21
          },
          end: {
            line: 184,
            column: 22
          }
        },
        loc: {
          start: {
            line: 184,
            column: 37
          },
          end: {
            line: 188,
            column: 5
          }
        },
        line: 184
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 191,
            column: 36
          },
          end: {
            line: 191,
            column: 37
          }
        },
        loc: {
          start: {
            line: 191,
            column: 52
          },
          end: {
            line: 198,
            column: 3
          }
        },
        line: 191
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 193,
            column: 21
          },
          end: {
            line: 193,
            column: 22
          }
        },
        loc: {
          start: {
            line: 193,
            column: 37
          },
          end: {
            line: 197,
            column: 5
          }
        },
        line: 193
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 211,
            column: 24
          },
          end: {
            line: 211,
            column: 25
          }
        },
        loc: {
          start: {
            line: 212,
            column: 12
          },
          end: {
            line: 238,
            column: 14
          }
        },
        line: 212
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 217,
            column: 27
          },
          end: {
            line: 217,
            column: 28
          }
        },
        loc: {
          start: {
            line: 217,
            column: 33
          },
          end: {
            line: 217,
            column: 70
          }
        },
        line: 217
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 218,
            column: 28
          },
          end: {
            line: 218,
            column: 29
          }
        },
        loc: {
          start: {
            line: 218,
            column: 35
          },
          end: {
            line: 220,
            column: 15
          }
        },
        line: 218
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 221,
            column: 30
          },
          end: {
            line: 221,
            column: 31
          }
        },
        loc: {
          start: {
            line: 221,
            column: 37
          },
          end: {
            line: 223,
            column: 15
          }
        },
        line: 221
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 224,
            column: 28
          },
          end: {
            line: 224,
            column: 29
          }
        },
        loc: {
          start: {
            line: 225,
            column: 16
          },
          end: {
            line: 225,
            column: 82
          }
        },
        line: 225
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 227,
            column: 28
          },
          end: {
            line: 227,
            column: 29
          }
        },
        loc: {
          start: {
            line: 228,
            column: 16
          },
          end: {
            line: 228,
            column: 86
          }
        },
        line: 228
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 230,
            column: 34
          },
          end: {
            line: 230,
            column: 35
          }
        },
        loc: {
          start: {
            line: 230,
            column: 40
          },
          end: {
            line: 230,
            column: 67
          }
        },
        line: 230
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 231,
            column: 36
          },
          end: {
            line: 231,
            column: 37
          }
        },
        loc: {
          start: {
            line: 231,
            column: 43
          },
          end: {
            line: 231,
            column: 77
          }
        },
        line: 231
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 232,
            column: 31
          },
          end: {
            line: 232,
            column: 32
          }
        },
        loc: {
          start: {
            line: 232,
            column: 37
          },
          end: {
            line: 232,
            column: 61
          }
        },
        line: 232
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 234,
            column: 30
          },
          end: {
            line: 234,
            column: 31
          }
        },
        loc: {
          start: {
            line: 234,
            column: 37
          },
          end: {
            line: 234,
            column: 74
          }
        },
        line: 234
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 271,
            column: 22
          },
          end: {
            line: 271,
            column: 23
          }
        },
        loc: {
          start: {
            line: 271,
            column: 35
          },
          end: {
            line: 271,
            column: 52
          }
        },
        line: 271
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 312,
            column: 27
          },
          end: {
            line: 312,
            column: 28
          }
        },
        loc: {
          start: {
            line: 312,
            column: 42
          },
          end: {
            line: 314,
            column: 1
          }
        },
        line: 312
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 27
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 34,
            column: 22
          },
          end: {
            line: 34,
            column: 27
          }
        }],
        line: 34
      },
      "1": {
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 24
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 37,
            column: 19
          },
          end: {
            line: 37,
            column: 24
          }
        }],
        line: 37
      },
      "2": {
        loc: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 20
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 38,
            column: 15
          },
          end: {
            line: 38,
            column: 20
          }
        }],
        line: 38
      },
      "3": {
        loc: {
          start: {
            line: 126,
            column: 2
          },
          end: {
            line: 126,
            column: 15
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 126,
            column: 13
          },
          end: {
            line: 126,
            column: 15
          }
        }],
        line: 126
      },
      "4": {
        loc: {
          start: {
            line: 133,
            column: 2
          },
          end: {
            line: 133,
            column: 11
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 133,
            column: 10
          },
          end: {
            line: 133,
            column: 11
          }
        }],
        line: 133
      },
      "5": {
        loc: {
          start: {
            line: 136,
            column: 2
          },
          end: {
            line: 136,
            column: 27
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 136,
            column: 22
          },
          end: {
            line: 136,
            column: 27
          }
        }],
        line: 136
      },
      "6": {
        loc: {
          start: {
            line: 146,
            column: 2
          },
          end: {
            line: 146,
            column: 24
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 146,
            column: 19
          },
          end: {
            line: 146,
            column: 24
          }
        }],
        line: 146
      },
      "7": {
        loc: {
          start: {
            line: 147,
            column: 2
          },
          end: {
            line: 147,
            column: 29
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 147,
            column: 24
          },
          end: {
            line: 147,
            column: 29
          }
        }],
        line: 147
      },
      "8": {
        loc: {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 158,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 158,
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
        line: 152
      },
      "9": {
        loc: {
          start: {
            line: 202,
            column: 7
          },
          end: {
            line: 208,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 202,
            column: 7
          },
          end: {
            line: 202,
            column: 27
          }
        }, {
          start: {
            line: 203,
            column: 8
          },
          end: {
            line: 207,
            column: 10
          }
        }],
        line: 202
      },
      "10": {
        loc: {
          start: {
            line: 209,
            column: 7
          },
          end: {
            line: 241,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 209,
            column: 7
          },
          end: {
            line: 209,
            column: 28
          }
        }, {
          start: {
            line: 210,
            column: 8
          },
          end: {
            line: 240,
            column: 15
          }
        }],
        line: 209
      },
      "11": {
        loc: {
          start: {
            line: 243,
            column: 7
          },
          end: {
            line: 265,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 243,
            column: 7
          },
          end: {
            line: 243,
            column: 28
          }
        }, {
          start: {
            line: 243,
            column: 32
          },
          end: {
            line: 243,
            column: 53
          }
        }, {
          start: {
            line: 244,
            column: 8
          },
          end: {
            line: 264,
            column: 16
          }
        }],
        line: 243
      },
      "12": {
        loc: {
          start: {
            line: 266,
            column: 7
          },
          end: {
            line: 274,
            column: 14
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 267,
            column: 8
          },
          end: {
            line: 273,
            column: 14
          }
        }, {
          start: {
            line: 274,
            column: 10
          },
          end: {
            line: 274,
            column: 14
          }
        }],
        line: 266
      },
      "13": {
        loc: {
          start: {
            line: 276,
            column: 7
          },
          end: {
            line: 302,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 276,
            column: 7
          },
          end: {
            line: 276,
            column: 24
          }
        }, {
          start: {
            line: 276,
            column: 28
          },
          end: {
            line: 276,
            column: 45
          }
        }, {
          start: {
            line: 277,
            column: 8
          },
          end: {
            line: 301,
            column: 22
          }
        }],
        line: 276
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
      "45": 0
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
      "0": [0],
      "1": [0],
      "2": [0],
      "3": [0],
      "4": [0],
      "5": [0],
      "6": [0],
      "7": [0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0, 0],
      "12": [0, 0],
      "13": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9f9ffff18d1f30ead0f389e4e908dc649380c0e8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_qwnueyota = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_qwnueyota();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const INITIAL_GRID_SIZE = (cov_qwnueyota().s[0]++, {
  xl: 4,
  md: 6,
  xs: 12
});

function PatternCardGridItem({
  pattern,
  handleDeploy,
  handleVerify,
  handleDryRun,
  handlePublishModal,
  handleUnpublishModal,
  handleUnDeploy,
  handleClone,
  handleSubmit,
  handleDownload,
  setSelectedPatterns,
  canPublishPattern = (cov_qwnueyota().b[0][0]++, false),
  user,
  handleInfoModal,
  hideVisibility = (cov_qwnueyota().b[1][0]++, false),
  isReadOnly = (cov_qwnueyota().b[2][0]++, false)
}) {
  cov_qwnueyota().f[0]++;
  const [gridProps, setGridProps] = (cov_qwnueyota().s[1]++, (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(INITIAL_GRID_SIZE));
  const [yaml, setYaml] = (cov_qwnueyota().s[2]++, (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pattern.pattern_file));
  cov_qwnueyota().s[3]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Grid, _objectSpread(_objectSpread({
    item: true
  }, gridProps), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_MeshplayPatternCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      id: pattern.id,
      user: user,
      canPublishPattern: canPublishPattern,
      name: pattern.name,
      updated_at: pattern.updated_at,
      created_at: pattern.created_at,
      pattern_file: pattern.pattern_file,
      requestFullSize: () => {
        cov_qwnueyota().f[1]++;
        cov_qwnueyota().s[4]++;
        return setGridProps({
          xl: 12,
          md: 12,
          xs: 12
        });
      },
      requestSizeRestore: () => {
        cov_qwnueyota().f[2]++;
        cov_qwnueyota().s[5]++;
        return setGridProps(INITIAL_GRID_SIZE);
      },
      handleDeploy: handleDeploy,
      handleVerify: handleVerify,
      handleDryRun: handleDryRun,
      handlePublishModal: handlePublishModal,
      handleUnDeploy: handleUnDeploy,
      handleUnpublishModal: handleUnpublishModal,
      handleClone: handleClone,
      handleInfoModal: handleInfoModal,
      handleDownload: handleDownload,
      deleteHandler: () => {
        cov_qwnueyota().f[3]++;
        cov_qwnueyota().s[6]++;
        return handleSubmit({
          data: yaml,
          id: pattern.id,
          type: _utils_Enum__WEBPACK_IMPORTED_MODULE_5__/* .FILE_OPS.DELETE */ .P3.DELETE,
          name: pattern.name,
          catalog_data: pattern.catalog_data
        });
      },
      updateHandler: () => {
        cov_qwnueyota().f[4]++;
        cov_qwnueyota().s[7]++;
        return handleSubmit({
          data: yaml,
          id: pattern.id,
          type: _utils_Enum__WEBPACK_IMPORTED_MODULE_5__/* .FILE_OPS.UPDATE */ .P3.UPDATE,
          name: pattern.name,
          catalog_data: pattern.catalog_data
        });
      },
      setSelectedPatterns: () => {
        cov_qwnueyota().f[5]++;
        cov_qwnueyota().s[8]++;
        return setSelectedPatterns({
          pattern: pattern,
          show: true
        });
      },
      setYaml: setYaml,
      description: pattern.description,
      visibility: pattern.visibility,
      pattern: pattern,
      hideVisibility: hideVisibility,
      isReadOnly: isReadOnly
    })
  }));
}
/**
 * MeshplayPatternGrid is the react component for rendering grid
 * @param {{
 *  patterns:Array<{
 *  id:string,
 *  created_at: string,
 *  updated_at: string,
 *  pattern_file: string,
 * }>,
 *  handleVerify: (e: Event, pattern_file: any, pattern_id: string) => void,
 *  handlePublish: (catalog_data : any) => void,
 *  handleUnpublishModal: (ev: Event, pattern: any) => (() => Promise<void>),
 *  handleDeploy: (pattern_file: any) => void,
 *  handleUnDeploy: (pattern_file: any) => void,
 *  handleSubmit: (data: any, id: string, name: string, type: string) => void,
 *  setSelectedPattern : ({show: boolean, pattern:any}) => void,
 *  selectedPattern: {show : boolean, pattern : any},
 *  pages?: number,
 *  selectedPage?: number,
 *  setPage: (page: number) => void
 *  patternErrors: Map
 *  canPublishPattern: boolean,
 *  publishModal: {
 *   open: boolean,
 *   filter: any,
 *   name: string
 *  },
 *  setPublishModal: (publishModal: { open: boolean, filter: any, name: string }) => void
 * }} props props
 */


function MeshplayPatternGrid({
  patterns = (cov_qwnueyota().b[3][0]++, []),
  handlePublish,
  handleUnpublishModal,
  handleClone,
  handleSubmit,
  setSelectedPattern,
  selectedPattern,
  pages = (cov_qwnueyota().b[4][0]++, 1),
  setPage,
  selectedPage,
  canPublishPattern = (cov_qwnueyota().b[5][0]++, false),
  publishModal,
  setPublishModal,
  publishSchema,
  user,
  handleInfoModal,
  openDeployModal,
  openValidationModal,
  openUndeployModal,
  openDryRunModal,
  hideVisibility = (cov_qwnueyota().b[6][0]++, false),
  arePatternsReadOnly = (cov_qwnueyota().b[7][0]++, false)
}) {
  cov_qwnueyota().f[6]++;
  const classes = (cov_qwnueyota().s[9]++, (0,_Grid_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)());
  const {
    notify
  } = (cov_qwnueyota().s[10]++, (0,_utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_14__/* .useNotification */ .l)());
  cov_qwnueyota().s[11]++;

  const handlePublishModal = pattern => {
    cov_qwnueyota().f[7]++;
    cov_qwnueyota().s[12]++;

    if (canPublishPattern) {
      cov_qwnueyota().b[8][0]++;
      cov_qwnueyota().s[13]++;
      setPublishModal({
        open: true,
        pattern: pattern,
        name: ''
      });
    } else {
      cov_qwnueyota().b[8][1]++;
    }
  };

  cov_qwnueyota().s[14]++;

  const handlePublishModalClose = () => {
    cov_qwnueyota().f[8]++;
    cov_qwnueyota().s[15]++;
    setPublishModal({
      open: false,
      pattern: {},
      name: ''
    });
  };

  const [downloadModal, setDownloadModal] = (cov_qwnueyota().s[16]++, (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    open: false,
    content: null
  }));
  cov_qwnueyota().s[17]++;

  const handleDownload = (e, design, source_type, params) => {
    cov_qwnueyota().f[9]++;
    cov_qwnueyota().s[18]++;
    e.stopPropagation();
    cov_qwnueyota().s[19]++;

    try {
      let id = (cov_qwnueyota().s[20]++, design.id);
      let name = (cov_qwnueyota().s[21]++, design.name);
      cov_qwnueyota().s[22]++;
      (0,_utils_fileDownloader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP)({
        id,
        name,
        type: 'pattern',
        source_type,
        params
      });
      cov_qwnueyota().s[23]++;
      notify({
        message: `"${name}" design downloaded`,
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_6__/* .EVENT_TYPES.INFO */ .E_.INFO
      });
    } catch (e) {
      cov_qwnueyota().s[24]++;
      console.error(e);
    }
  };

  cov_qwnueyota().s[25]++;

  const handleDownloadDialogClose = () => {
    cov_qwnueyota().f[10]++;
    cov_qwnueyota().s[26]++;
    setDownloadModal(prevState => {
      cov_qwnueyota().f[11]++;
      cov_qwnueyota().s[27]++;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        open: false,
        content: null
      });
    });
  };

  cov_qwnueyota().s[28]++;

  const handleDesignDownloadModal = (e, pattern) => {
    cov_qwnueyota().f[12]++;
    cov_qwnueyota().s[29]++;
    e.stopPropagation();
    cov_qwnueyota().s[30]++;
    setDownloadModal(prevState => {
      cov_qwnueyota().f[13]++;
      cov_qwnueyota().s[31]++;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        open: true,
        content: pattern
      });
    });
  };

  cov_qwnueyota().s[32]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
    children: [(cov_qwnueyota().b[9][0]++, selectedPattern.show) && (cov_qwnueyota().b[9][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_configuratorComponents_MeshModel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      pattern: selectedPattern.pattern,
      show: setSelectedPattern,
      onSubmit: handleSubmit
    })), (cov_qwnueyota().b[10][0]++, !selectedPattern.show) && (cov_qwnueyota().b[10][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Grid, {
      container: true,
      spacing: 3,
      children: patterns.map(pattern => {
        cov_qwnueyota().f[14]++;
        cov_qwnueyota().s[33]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(PatternCardGridItem, {
          user: user,
          pattern: pattern,
          canPublishPattern: canPublishPattern,
          handleClone: () => {
            cov_qwnueyota().f[15]++;
            cov_qwnueyota().s[34]++;
            return handleClone(pattern.id, pattern.name);
          },
          handleDeploy: e => {
            cov_qwnueyota().f[16]++;
            cov_qwnueyota().s[35]++;
            openDeployModal(e, pattern.pattern_file, pattern.name, pattern.id);
          },
          handleUnDeploy: e => {
            cov_qwnueyota().f[17]++;
            cov_qwnueyota().s[36]++;
            openUndeployModal(e, pattern.pattern_file, pattern.name, pattern.id);
          },
          handleDryRun: e => {
            cov_qwnueyota().f[18]++;
            cov_qwnueyota().s[37]++;
            return openDryRunModal(e, pattern.pattern_file, pattern.name, pattern.id);
          },
          handleVerify: e => {
            cov_qwnueyota().f[19]++;
            cov_qwnueyota().s[38]++;
            return openValidationModal(e, pattern.pattern_file, pattern.name, pattern.id);
          },
          handlePublishModal: () => {
            cov_qwnueyota().f[20]++;
            cov_qwnueyota().s[39]++;
            return handlePublishModal(pattern);
          },
          handleUnpublishModal: e => {
            cov_qwnueyota().f[21]++;
            cov_qwnueyota().s[40]++;
            return handleUnpublishModal(e, pattern)();
          },
          handleInfoModal: () => {
            cov_qwnueyota().f[22]++;
            cov_qwnueyota().s[41]++;
            return handleInfoModal(pattern);
          },
          handleSubmit: handleSubmit,
          handleDownload: e => {
            cov_qwnueyota().f[23]++;
            cov_qwnueyota().s[42]++;
            return handleDesignDownloadModal(e, pattern);
          },
          setSelectedPatterns: setSelectedPattern,
          hideVisibility: hideVisibility,
          isReadOnly: arePatternsReadOnly
        }, pattern.id);
      })
    })), (cov_qwnueyota().b[11][0]++, !selectedPattern.show) && (cov_qwnueyota().b[11][1]++, patterns.length === 0) && (cov_qwnueyota().b[11][2]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Paper, {
      className: classes.noPaper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: classes.noContainer,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          align: "center",
          color: "textSecondary",
          className: classes.noText,
          children: "No Designs Found"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {})]
      })
    })), patterns.length ? (cov_qwnueyota().b[12][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
      className: classes.pagination,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
        count: pages,
        page: selectedPage + 1,
        onChange: (_, page) => {
          cov_qwnueyota().f[24]++;
          cov_qwnueyota().s[43]++;
          return setPage(page - 1);
        }
      })
    })) : (cov_qwnueyota().b[12][1]++, null), (cov_qwnueyota().b[13][0]++, canPublishPattern) && (cov_qwnueyota().b[13][1]++, publishModal.open) && (cov_qwnueyota().b[13][2]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_SistentWrapper__WEBPACK_IMPORTED_MODULE_16__/* .UsesSistent */ .k, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_15__.Modal, {
        open: true,
        title: publishModal.pattern?.name,
        closeModal: handlePublishModalClose,
        "aria-label": "catalog publish",
        maxWidth: "sm",
        headerIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_public_static_img_drawer_icons_pattern_svg__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          fill: "#fff",
          style: {
            height: '24px',
            width: '24px',
            fonSize: '1.45rem'
          },
          className: undefined
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_8__/* .RJSFModalWrapper */ .U, {
          schema: publishSchema.rjsfSchema,
          uiSchema: publishSchema.uiSchema,
          submitBtnText: "Submit for Approval",
          handleSubmit: handlePublish,
          helpText: "Upon submitting your catalog item, an approval flow will be initiated.[Learn more](https://docs.meshplay.io/concepts/catalog)",
          handleClose: handlePublishModalClose
        })
      })
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_ExportModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      downloadModal: downloadModal,
      handleDownloadDialogClose: handleDownloadDialogClose,
      handleDesignDownload: handleDownload
    })]
  });
}

cov_qwnueyota().s[44]++;

const mapDispatchToProps = dispatch => {
  cov_qwnueyota().f[25]++;
  cov_qwnueyota().s[45]++;
  return {
    updateProgress: (0,redux__WEBPACK_IMPORTED_MODULE_10__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_11__/* .updateProgress */ .RO, dispatch)
  };
}; // @ts-ignore


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_9__.connect)(mapDispatchToProps)(MeshplayPatternGrid));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_5gdawubc() {
  var path = "/workspace/meshplay/ui/public/static/img/UndeployIcon.js";
  var hash = "cb78ebc31809f507483f1617c99880e868a5dea2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/public/static/img/UndeployIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 8,
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
            column: 21
          },
          end: {
            line: 3,
            column: 22
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 8,
            column: 8
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 80
          },
          end: {
            line: 4,
            column: 98
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 4,
            column: 80
          },
          end: {
            line: 4,
            column: 92
          }
        }, {
          start: {
            line: 4,
            column: 96
          },
          end: {
            line: 4,
            column: 98
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 4,
            column: 108
          },
          end: {
            line: 4,
            column: 125
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 4,
            column: 108
          },
          end: {
            line: 4,
            column: 119
          }
        }, {
          start: {
            line: 4,
            column: 123
          },
          end: {
            line: 4,
            column: 125
          }
        }],
        line: 4
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
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cb78ebc31809f507483f1617c99880e868a5dea2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_5gdawubc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_5gdawubc();



cov_5gdawubc().s[0]++;

const UndeployIcon = props => {
  cov_5gdawubc().f[0]++;
  cov_5gdawubc().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    preserveAspectRatio: "none",
    fill: props.fill,
    viewBox: "0 0 24 24",
    height: (cov_5gdawubc().b[0][0]++, props.height) || (cov_5gdawubc().b[0][1]++, 24),
    width: (cov_5gdawubc().b[1][0]++, props.width) || (cov_5gdawubc().b[1][1]++, 24),
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fill: "none",
      d: "M0 0h24v24H0zm0 0h24v24H0V0z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M1.79 12l5.58 5.59L5.96 19 .37 13.41 1.79 12zm.45-7.78L12.9 14.89l-1.28 1.28L7.44 12l-1.41 1.41L11.62 19l2.69-2.69 4.89 4.89 1.41-1.41L3.65 2.81 2.24 4.22zm14.9 9.27L23.62 7 22.2 5.59l-6.48 6.48 1.42 1.42zM17.96 7l-1.41-1.41-3.65 3.66 1.41 1.41L17.96 7z"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UndeployIcon);

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

/***/ 37842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* unused harmony export getWindowDimensions */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function cov_3n2jgjthm() {
  var path = "/workspace/meshplay/ui/utils/dimension.js";
  var hash = "61509892484bd35346f91d44231b9614a3700c49";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/utils/dimension.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 53
        },
        end: {
          line: 8,
          column: 59
        }
      },
      "1": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 12,
          column: 4
        }
      },
      "2": {
        start: {
          line: 33,
          column: 50
        },
        end: {
          line: 33,
          column: 81
        }
      },
      "3": {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 49,
          column: 9
        }
      },
      "4": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 41,
          column: 7
        }
      },
      "5": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 36
        }
      },
      "6": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 44,
          column: 14
        }
      },
      "7": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 51
        }
      },
      "8": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 52
        }
      },
      "9": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 68
        }
      },
      "10": {
        start: {
          line: 48,
          column: 17
        },
        end: {
          line: 48,
          column: 67
        }
      },
      "11": {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 51,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "getWindowDimensions",
        decl: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 7,
            column: 35
          }
        },
        loc: {
          start: {
            line: 7,
            column: 38
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "useWindowDimensions",
        decl: {
          start: {
            line: 32,
            column: 16
          },
          end: {
            line: 32,
            column: 35
          }
        },
        loc: {
          start: {
            line: 32,
            column: 38
          },
          end: {
            line: 52,
            column: 1
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 12
          },
          end: {
            line: 35,
            column: 13
          }
        },
        loc: {
          start: {
            line: 35,
            column: 18
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 35
      },
      "3": {
        name: "handleResize",
        decl: {
          start: {
            line: 38,
            column: 13
          },
          end: {
            line: 38,
            column: 25
          }
        },
        loc: {
          start: {
            line: 38,
            column: 28
          },
          end: {
            line: 45,
            column: 5
          }
        },
        line: 38
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 42,
            column: 33
          },
          end: {
            line: 42,
            column: 34
          }
        },
        loc: {
          start: {
            line: 42,
            column: 39
          },
          end: {
            line: 44,
            column: 7
          }
        },
        line: 42
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 48,
            column: 11
          },
          end: {
            line: 48,
            column: 12
          }
        },
        loc: {
          start: {
            line: 48,
            column: 17
          },
          end: {
            line: 48,
            column: 67
          }
        },
        line: 48
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 41,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 41,
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
        line: 39
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
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "61509892484bd35346f91d44231b9614a3700c49"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3n2jgjthm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_3n2jgjthm();

/**
 * getWindowDimensions - Returns the width and height of the window
 * @returns {object} {width, height}
 */

function getWindowDimensions() {
  cov_3n2jgjthm().f[0]++;
  const {
    innerWidth: width,
    innerHeight: height
  } = (cov_3n2jgjthm().s[0]++, window);
  cov_3n2jgjthm().s[1]++;
  return {
    width,
    height
  };
}
/**
 * useWindowDimensions - Returns the width and height of the window
 * @returns {object} {width, height}
 * @example
 * const { width, height } = useWindowDimensions();
 * console.log(width, height);
 * // 1920 1080
 */
// Description:
// useWindowDimensions, which is used to obtain and track the width and height
//  of the browser window. It leverages the useState and useEffect hooks to update
//  the window dimensions and provide them to the calling component.
// Eg:  React component that needs to respond to changes in the browser window's dimensions, for instance,
// to make responsive design decisions. You can use the useWindowDimensions hook to achieve this.

function useWindowDimensions() {
  cov_3n2jgjthm().f[1]++;
  const [windowDimensions, setWindowDimensions] = (cov_3n2jgjthm().s[2]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions()));
  cov_3n2jgjthm().s[3]++;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    cov_3n2jgjthm().f[2]++;
    let searchTimeout;

    function handleResize() {
      cov_3n2jgjthm().f[3]++;
      cov_3n2jgjthm().s[4]++;

      if (searchTimeout) {
        cov_3n2jgjthm().b[0][0]++;
        cov_3n2jgjthm().s[5]++;
        clearTimeout(searchTimeout);
      } else {
        cov_3n2jgjthm().b[0][1]++;
      }

      cov_3n2jgjthm().s[6]++;
      searchTimeout = setTimeout(() => {
        cov_3n2jgjthm().f[4]++;
        cov_3n2jgjthm().s[7]++;
        setWindowDimensions(getWindowDimensions());
      }, 500);
    }

    cov_3n2jgjthm().s[8]++;
    window.addEventListener('resize', handleResize);
    cov_3n2jgjthm().s[9]++;
    return () => {
      cov_3n2jgjthm().f[5]++;
      cov_3n2jgjthm().s[10]++;
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  cov_3n2jgjthm().s[11]++;
  return windowDimensions;
}

/***/ })

};
;