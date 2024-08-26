"use strict";
exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 76445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["width", "height", "color", "fill"];

function cov_x204cl2ql() {
  var path = "/workspace/meshplay/ui/assets/icons/Pattern.js";
  var hash = "ebe3f4fd0de97ed1052cf79bf4212099fe8685dd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/Pattern.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 75,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 53,
          column: 6
        }
      },
      "3": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 73,
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
            column: 20
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 66
          },
          end: {
            line: 75,
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
            line: 4,
            column: 2
          },
          end: {
            line: 54,
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
            line: 54,
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
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ebe3f4fd0de97ed1052cf79bf4212099fe8685dd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_x204cl2ql = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_x204cl2ql();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




cov_x204cl2ql().s[0]++;

const PatternIcon = _ref => {
  let {
    width,
    height,
    color,
    fill
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  cov_x204cl2ql().f[0]++;
  cov_x204cl2ql().s[1]++;

  if (color) {
    cov_x204cl2ql().b[0][0]++;
    cov_x204cl2ql().s[2]++;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      width: width,
      height: height
    }, props), {}, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M67.784 16.3162C69.9747 19.048 71.5783 22.1105 72.805 25.3637C74.3889 29.5588 75.1118 33.9227 74.2071 38.3478C72.9934 44.2868 69.519 48.4688 63.7093 50.4798C61.4529 51.2597 59.1089 51.5752 56.778 50.5981C56.4566 50.485 56.1555 50.3208 55.8864 50.1118C55.8544 51.497 55.332 52.826 54.4121 53.8622C54.7173 53.7256 55.0404 53.6334 55.3716 53.5884C55.6915 53.5292 56.0288 53.4832 56.3421 53.4548C59.4507 53.1984 62.4431 52.5412 65.2844 51.183C69.6658 49.0822 73.3374 46.0897 76.4569 42.3896C78.2403 40.3118 79.7333 38.0014 80.8952 35.5219C82.5381 31.8649 83.5939 27.9717 84.0235 23.9858C84.4244 20.5486 84.317 17.1771 83.9731 13.7728C83.8899 12.9513 83.535 12.6118 82.7967 12.4803C80.8996 12.143 79.0003 11.764 77.1338 11.3105C72.253 10.1254 67.3327 9.11983 62.4431 7.98944C60.7037 7.58417 58.9578 7.21832 57.214 6.83276C58.4933 8.05297 59.8669 9.0563 61.1966 10.1188C63.556 11.9984 65.8825 13.9327 67.784 16.3162Z",
          fill: "#00B39F"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M14.0576 58.6159C15.5539 52.3243 18.0293 46.5518 23.1424 42.2975C27.7976 38.4222 33.0683 37.2152 38.878 39.2306C41.8091 40.2449 44.3218 41.8857 45.6582 44.8672C45.7911 45.1308 45.8862 45.4117 45.9408 45.7019C46.8513 44.8317 48.0183 44.2785 49.2684 44.1246C49.1917 44.0742 49.1129 44.0172 49.0252 43.9471C47.242 42.5122 45.5464 40.9503 43.4741 39.8944C36.109 36.1417 28.3715 35.6576 20.5092 37.6599C12.1715 39.7783 5.72651 44.8365 0.438215 51.4918C-0.155459 52.2388 -0.107264 52.7208 0.381257 53.4766C4.4822 59.8558 8.54372 66.2613 12.6184 72.6581C13.1573 73.5059 13.7137 74.3384 14.4542 75.4556C14.533 73.5694 14.1343 72.0623 13.9218 70.5441C13.3632 66.5571 13.1135 62.5832 14.0576 58.6159Z",
          fill: "#00D3A9"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M26.6125 14.3402C29.4449 13.8652 32.3016 13.5492 35.1693 13.3938C37.7718 13.2514 40.313 13.7641 42.8367 14.4213C48.7909 15.9788 54.1296 18.5835 58.0465 23.5148C61.7838 28.216 62.682 33.4911 60.6754 39.1474C59.6501 42.0391 57.9173 44.4401 54.9577 45.7414C54.7528 45.844 54.5292 45.9044 54.3005 45.9188C55.1874 46.8634 55.7366 48.0751 55.8624 49.3647C55.9958 49.1503 56.1468 48.9474 56.3137 48.7579C58.4825 46.1795 60.4453 43.474 61.5713 40.245C63.0482 36.0091 63.6641 31.521 63.383 27.0439C63.1681 22.6665 62.0627 18.3788 60.1343 14.4432C57.3696 8.86351 53.387 4.27185 48.5237 0.409691C47.7986 -0.166457 47.2728 -0.0985457 46.517 0.387784C40.2561 4.41206 33.9557 8.37937 27.6947 12.3861C26.7221 13.0083 25.6771 13.5494 24.7373 14.4322C25.3639 14.472 25.9929 14.4411 26.6125 14.3402Z",
          fill: "#00D3A9"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M9.0122 40.2668C11.4767 37.1517 13.8317 33.9292 17.144 31.6246C23.2779 27.3703 29.9025 24.6144 37.5173 25.6747C43.6512 26.5335 48.0851 29.8786 50.2999 35.7891C51.2506 38.3281 51.5486 40.9525 50.4357 43.5748C50.366 43.752 50.2756 43.9204 50.1662 44.0764C51.4258 44.1085 52.6413 44.5465 53.6319 45.3251C53.6066 45.2387 53.5862 45.1509 53.5706 45.0622C53.5136 44.7402 53.5114 44.405 53.4851 44.0852C53.2901 41.498 52.8673 38.9656 51.9385 36.5186C49.9669 31.3311 46.5954 27.2148 42.4353 23.633C36.3015 18.3513 29.0722 16.0861 21.1354 15.7838C18.8834 15.6984 16.6226 15.6743 14.3662 15.97C12.8086 16.1738 12.6903 16.1891 12.3552 17.7226C10.9079 24.337 9.45399 30.9506 7.99354 37.5635C7.61455 39.2876 7.24433 41.0117 6.81934 42.9789C7.82047 42.0741 8.34624 41.1102 9.0122 40.2668Z",
          fill: "#00B39F"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M99.6317 46.5146C95.5132 40.1047 91.4408 33.6641 87.3289 27.2498C86.7834 26.3998 86.3496 25.4491 85.4339 24.5071C85.6968 26.7438 85.8874 28.6913 86.1634 30.6278C86.7374 34.6674 86.733 38.6698 85.6639 42.6437C83.9881 48.8871 81.195 54.4339 75.9417 58.4647C73.0654 60.6817 69.7377 61.685 66.1582 61.731C63.6498 61.7639 61.2642 61.0388 59.045 59.8493C57.1085 58.8109 55.4611 57.4614 54.4862 55.4328C54.1795 54.791 54.0481 54.4032 54.1467 54.1425C53.2024 55.0828 51.9663 55.6738 50.6416 55.8184C50.9878 56.0392 51.3173 56.2852 51.6274 56.5545C53.4676 58.0485 55.3055 59.5448 57.4677 60.5744C63.4965 63.4376 69.8648 64.0466 76.347 63.0257C86.124 61.4923 93.5329 55.9959 99.6098 48.4512C100.162 47.7567 100.094 47.2332 99.6317 46.5146Z",
          fill: "#00D3A9"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M86.672 64.9908C80.6169 71.0809 73.3483 74.483 64.6097 74.5071C58.5108 74.5246 52.0527 70.5201 49.8861 64.6491C48.9901 62.2174 48.3943 59.7507 49.3166 57.1876C49.5619 56.5085 49.7284 56.0769 49.9146 55.8601C48.5894 55.8455 47.3082 55.3822 46.2803 54.5457C46.3911 54.8735 46.4581 55.2145 46.4796 55.5599C46.6724 57.4395 46.771 59.3454 47.334 61.1615C50.3352 70.8421 56.7889 77.4645 65.9087 81.4778C71.7359 84.0409 77.9377 84.823 84.3104 84.1614C87.1583 83.8635 87.1736 83.9161 87.741 81.4209C89.3052 74.5334 90.8781 67.6459 92.394 60.7475C92.6481 59.5864 93.1104 58.4385 93.0885 56.9401C92.7314 57.4242 92.5386 57.6783 92.3524 57.939C90.5845 60.3838 88.8013 62.8527 86.672 64.9908Z",
          fill: "#00B39F"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M33.2476 84.8778C30.4676 81.7583 28.4785 78.1546 27.0962 74.242C25.7818 70.5026 25.0085 66.6579 25.6372 62.6534C26.5485 56.8349 29.5015 52.4864 34.9388 50.057C37.5676 48.8762 40.352 48.3176 43.2195 49.4173C43.5333 49.5211 43.8334 49.6624 44.1133 49.8379C44.1378 48.5742 44.5704 47.3523 45.3467 46.3547C45.1147 46.4016 44.8797 46.4323 44.6435 46.4467C43.0828 46.543 41.53 46.7406 39.9949 47.0382C34.6869 48.1642 30.2836 50.942 26.4127 54.6026C21.2493 59.4725 17.9216 65.3895 16.5283 72.38C15.6806 76.6255 15.5623 80.8842 15.8843 85.1867C16.007 86.8472 16.6948 87.4409 18.3598 87.7782C25.3152 89.1912 32.2245 90.8452 39.1602 92.3524C40.341 92.6109 41.5021 93.049 43.064 93.0972C41.927 92.2209 41.0442 91.5506 40.1592 90.878C37.7275 89.0247 35.2915 87.1714 33.2476 84.8778Z",
          fill: "#00B39F"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M74.722 85.4517C72.2488 85.8898 69.7602 86.1921 67.2737 86.4331C65.2342 86.6303 63.164 86.731 61.1618 86.4331C58.2713 86.0245 55.4446 85.2501 52.7495 84.1285C48.5566 82.376 44.7558 80.056 41.9342 76.3954C38.5299 71.9768 37.382 67.0544 39.0578 61.6806C40.0086 58.64 41.5705 55.9257 44.6506 54.4514C45.1983 54.1907 45.5751 54.068 45.8423 54.1053C44.9181 53.1809 44.329 51.9742 44.1687 50.6769C44.0326 50.8735 43.8863 51.0629 43.7305 51.2443C42.3154 52.9552 40.8651 54.6442 39.8377 56.6399C37.36 61.4594 36.4553 66.5834 36.5889 71.9746C36.6616 75.9531 37.4828 79.8822 39.0096 83.5567C41.6735 89.9097 45.9125 95.0819 51.2906 99.3625C52.1296 100.033 52.7342 100.103 53.674 99.4917C59.0894 95.9866 64.5551 92.5429 70.0011 89.0794C71.8041 87.9315 73.5982 86.7748 75.4209 85.605C75.3308 85.5161 75.2173 85.4545 75.0936 85.4273C74.9699 85.4002 74.8411 85.4086 74.722 85.4517Z",
          fill: "#00D3A9"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("defs", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("clipPath", {
          id: "clip0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
            width: "100",
            height: "99.9255",
            fill: "white"
          })
        })
      })]
    }));
  } else {
    cov_x204cl2ql().b[0][1]++;
  }

  cov_x204cl2ql().s[3]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({
    width: width,
    height: height,
    viewBox: "0 0 57 57",
    fill: fill,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M38.6219 9.30732C39.8705 10.8693 40.7821 12.6188 41.4814 14.4682C42.3804 16.855 42.7925 19.3542 42.2805 21.8785C41.5937 25.2649 39.6083 27.6517 36.2993 28.8013C35.0132 29.2512 33.6771 29.4261 32.3535 28.8638C32.1693 28.8 31.9965 28.7072 31.8415 28.5889C31.8217 29.3773 31.5255 30.1337 31.0049 30.7257C31.1804 30.6511 31.3652 30.6007 31.5543 30.5758C31.7356 30.5386 31.9191 30.5135 32.1037 30.5008C33.8769 30.3509 35.5876 29.976 37.1984 29.2012C39.6957 28.0016 41.7935 26.3021 43.5667 24.1902C44.5866 23.0042 45.4394 21.684 46.1015 20.2665C47.063 18.1671 47.6124 15.9803 47.8871 13.681C48.1119 11.7191 48.0494 9.79467 47.8621 7.85777C47.8122 7.39541 47.6124 7.19547 47.1878 7.12049C46.1015 6.93305 45.0276 6.70812 43.9537 6.4582C41.1692 5.7834 38.3721 5.20858 35.5751 4.55878C34.5886 4.33385 33.5897 4.12391 32.5907 3.89648C33.315 4.59627 34.1016 5.1586 34.8633 5.77091C36.2119 6.83308 37.5355 7.94524 38.6219 9.30732Z",
      fillOpacity: "0.8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M8.00372 33.4249C8.85283 29.8385 10.2638 26.5396 13.1858 24.1153C15.8455 21.9035 18.8423 21.2162 22.1513 22.3658C23.8246 22.9407 25.2606 23.8779 26.0223 25.5773C26.0949 25.7287 26.1493 25.8881 26.1846 26.0522C26.7023 25.5532 27.3688 25.2373 28.0826 25.1525C28.0451 25.1275 27.9952 25.09 27.9452 25.0525C26.9338 24.2403 25.9598 23.3405 24.7861 22.7407C20.5905 20.6039 16.1826 20.329 11.6998 21.4661C6.94234 22.6782 3.2712 25.5649 0.261872 29.3637C-0.0752731 29.7886 -0.0502994 30.0635 0.224411 30.5008C2.55945 34.1372 4.88201 37.7986 7.20456 41.4475C7.51674 41.9348 7.82891 42.4097 8.25346 43.047C8.30341 41.9723 8.06616 41.1101 7.95378 40.2478C7.60414 37.961 7.46679 35.6992 8.00372 33.4249Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M15.159 8.18269C16.7748 7.90976 18.405 7.73035 20.0414 7.64535C21.5273 7.55788 22.9758 7.85778 24.3993 8.23267C27.7957 9.1199 30.8425 10.6069 33.0652 13.4186C35.2004 16.1053 35.7124 19.1043 34.5636 22.3408C33.9767 23.9903 32.9903 25.3649 31.3045 26.1022C31.1875 26.1601 31.0602 26.1941 30.9299 26.2022C31.4397 26.7376 31.7561 27.4281 31.829 28.1641C31.9052 28.0394 31.993 27.9223 32.0912 27.8142C33.3274 26.3396 34.4512 24.8026 35.0881 22.9531C35.9364 20.5367 36.2889 17.9739 36.1245 15.418C36.0029 12.9268 35.374 10.4869 34.2764 8.24767C32.7031 5.06114 30.4305 2.44945 27.6584 0.237624C27.2463 -0.0872761 26.9466 -0.0497876 26.5096 0.225128C22.9383 2.52442 19.3546 4.78623 15.7834 7.07303C15.234 7.42292 14.6346 7.73532 14.0977 8.23517C14.4523 8.24888 14.8075 8.23132 15.159 8.18269V8.18269Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M5.1571 23.0283C6.55563 21.2413 7.87923 19.3919 9.76475 18.0673C13.2361 15.6181 17.0071 14.0185 21.3526 14.6059C24.8489 15.0682 27.3962 16.9676 28.6698 20.3291C29.2193 21.7787 29.3941 23.2657 28.7697 24.7652C28.7324 24.8671 28.682 24.9637 28.6199 25.0527C29.3394 25.0679 30.0351 25.3131 30.6053 25.7524L30.5679 25.6025C30.5388 25.4164 30.5221 25.2285 30.5179 25.0402C30.393 23.5656 30.1433 22.1286 29.6064 20.729C28.4701 17.7799 26.5346 15.4431 24.1496 13.4062C20.6283 10.4197 16.5076 9.14505 11.9874 9.00759C10.7013 8.9701 9.41512 8.9576 8.12897 9.13255C7.2424 9.25751 7.17997 9.25751 6.99267 10.1322C6.19351 13.9186 5.38602 17.7008 4.57021 21.4788C4.35794 22.466 4.15815 23.4532 3.9209 24.5653C4.48281 24.078 4.78249 23.5281 5.1571 23.0283Z",
      fillOpacity: "0.8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M56.7776 26.5271C54.4301 22.8657 52.1075 19.1919 49.76 15.543C49.4478 15.0556 49.1981 14.5183 48.6861 13.981C48.836 15.2556 48.9484 16.3677 49.0982 17.4674C49.4229 19.7667 49.4228 22.0535 48.811 24.3278C47.8495 27.8892 46.2637 31.0507 43.2668 33.35C41.6311 34.6121 39.7331 35.187 37.6852 35.2119C36.2492 35.2244 34.9006 34.8121 33.627 34.1373C32.5281 33.55 31.5791 32.7752 31.0297 31.613C30.8549 31.2507 30.78 31.0257 30.8299 30.8758C30.2944 31.415 29.588 31.7507 28.832 31.8255C29.0325 31.9488 29.2206 32.0911 29.3939 32.2504C30.4428 33.1001 31.4917 33.9623 32.7279 34.5496C36.1618 36.1866 39.7955 36.5365 43.4916 35.9492C49.0607 35.0745 53.2938 31.9379 56.7526 27.6393C57.0773 27.2419 57.0398 26.927 56.7776 26.5271Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M49.3851 37.0737C45.9263 40.5477 41.7931 42.4846 36.8109 42.4971C33.3395 42.5096 29.6559 40.2228 28.4197 36.8738C27.9077 35.4867 27.5706 34.0747 28.095 32.6126C28.2324 32.2252 28.3323 31.9753 28.4322 31.8504C27.6768 31.8399 26.9469 31.5759 26.3594 31.1006C26.4219 31.2864 26.4597 31.4797 26.4718 31.6754C26.5841 32.7501 26.6341 33.8372 26.9587 34.8744C28.6694 40.3977 32.3531 44.1716 37.5476 46.4584C40.8691 47.9204 44.4029 48.3703 48.0366 47.9829C49.6598 47.808 49.6723 47.8454 49.997 46.4209C50.8836 42.4971 51.7826 38.5608 52.6442 34.6245C52.794 33.9622 53.0563 33.3124 53.0438 32.4502C52.844 32.7251 52.7316 32.875 52.6192 33.025C51.6203 34.4496 50.6088 35.8491 49.3851 37.0737Z",
      fillOpacity: "0.8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M18.9423 48.4077C17.3564 46.6332 16.2201 44.5714 15.4334 42.3471C14.6842 40.2102 14.2472 38.0234 14.5968 35.7366C15.1213 32.4126 16.7945 29.9384 19.9037 28.5513C21.4022 27.8765 22.988 27.5641 24.6238 28.1889C24.8022 28.25 24.9738 28.3296 25.1357 28.4263C25.151 27.7063 25.396 27.0101 25.835 26.4395C25.6976 26.4644 25.5728 26.4769 25.4354 26.4894C24.5474 26.5518 23.6635 26.6645 22.7882 26.8268C19.7664 27.4641 17.2565 29.0511 15.0464 31.138C12.1376 33.829 10.1644 37.3798 9.41478 41.2724C8.9278 43.6966 8.86536 46.1209 9.05267 48.5826C9.12759 49.5324 9.51468 49.8697 10.4637 50.0572C14.4345 50.8569 18.3679 51.8067 22.3262 52.6689C23.0005 52.8188 23.6623 53.0688 24.5488 53.0938C23.8995 52.5939 23.4001 52.2065 22.8881 51.8316C21.4896 50.782 20.1035 49.7198 18.9423 48.4077Z",
      fillOpacity: "0.8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M42.5805 48.7352C41.1695 48.9851 39.7585 49.1601 38.3225 49.2975C37.1612 49.41 35.9749 49.4725 34.8386 49.2975C33.1906 49.0681 31.579 48.6271 30.0437 47.9854C27.6587 46.9857 25.486 45.6612 23.8752 43.5743C21.9397 41.0501 21.2779 38.2509 22.2394 35.1769C22.7763 33.4399 23.6754 31.8904 25.4235 31.0531C25.7357 30.9032 25.948 30.8282 26.0978 30.8532C25.5721 30.3282 25.2379 29.6417 25.1488 28.9038C25.0726 29.0173 24.9892 29.1259 24.8991 29.2287C24.0875 30.2034 23.2633 31.1656 22.6764 32.3028C21.2654 35.0519 20.7535 37.976 20.8284 41.0501C20.8759 43.3194 21.3416 45.5604 22.2019 47.6605C23.7253 51.2844 26.1353 54.2335 29.2071 56.6828C29.6816 57.0701 30.0312 57.1076 30.5681 56.7577C33.6524 54.7584 36.7741 52.7965 39.8708 50.8221C40.8948 50.1723 41.9187 49.51 42.9551 48.8352C42.9077 48.7859 42.8477 48.7505 42.7817 48.7329C42.7157 48.7153 42.6461 48.7161 42.5805 48.7352V48.7352Z"
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternIcon);

/***/ }),

/***/ 10000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LoadingComponent)
});

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(68103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/LoadingComponents/Animations/AnimatedMeshSync.js
function cov_r8y9i95h9() {
  var path = "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedMeshSync.js";
  var hash = "d7d95061c1fec7ea7d5e4790749bd53daf834304";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedMeshSync.js",
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
          column: 31
        }
      },
      "3": {
        start: {
          line: 12,
          column: 34
        },
        end: {
          line: 12,
          column: 48
        }
      },
      "4": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "5": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 12
        }
      },
      "6": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "7": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 24,
          column: 17
        }
      },
      "8": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 13
        }
      },
      "9": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 29
        }
      },
      "10": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 84,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "getClassName",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "AnimatedMeshSync",
        decl: {
          start: {
            line: 11,
            column: 24
          },
          end: {
            line: 11,
            column: 40
          }
        },
        loc: {
          start: {
            line: 11,
            column: 48
          },
          end: {
            line: 85,
            column: 1
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 12
          },
          end: {
            line: 14,
            column: 13
          }
        },
        loc: {
          start: {
            line: 14,
            column: 18
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 15
          },
          end: {
            line: 15,
            column: 16
          }
        },
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 13
          }
        },
        loc: {
          start: {
            line: 20,
            column: 18
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 20
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 21,
            column: 15
          },
          end: {
            line: 21,
            column: 16
          }
        },
        loc: {
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 23,
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
      "10": 0
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
    hash: "d7d95061c1fec7ea7d5e4790749bd53daf834304"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_r8y9i95h9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_r8y9i95h9();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getClassName(className, isActive) {
  cov_r8y9i95h9().f[0]++;
  cov_r8y9i95h9().s[0]++;

  if (!isActive) {
    cov_r8y9i95h9().b[0][0]++;
    cov_r8y9i95h9().s[1]++;
    return className;
  } else {
    cov_r8y9i95h9().b[0][1]++;
  }

  cov_r8y9i95h9().s[2]++;
  return `${className} active`;
}

function AnimatedMeshSync(props) {
  cov_r8y9i95h9().f[1]++;
  const [isActive, setIsActive] = (cov_r8y9i95h9().s[3]++, (0,external_react_.useState)(true));
  cov_r8y9i95h9().s[4]++;
  (0,external_react_.useEffect)(() => {
    cov_r8y9i95h9().f[2]++;
    cov_r8y9i95h9().s[5]++;
    setTimeout(() => {
      cov_r8y9i95h9().f[3]++;
      cov_r8y9i95h9().s[6]++;
      setIsActive(false);
    }, 100);
  }, []);
  cov_r8y9i95h9().s[7]++;
  (0,external_react_.useEffect)(() => {
    cov_r8y9i95h9().f[4]++;
    cov_r8y9i95h9().s[8]++;
    setTimeout(() => {
      cov_r8y9i95h9().f[5]++;
      cov_r8y9i95h9().s[9]++;
      setIsActive(!isActive);
    }, 2000);
  }, [isActive]);
  cov_r8y9i95h9().s[10]++;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({
      id: "Layer_1",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 361 359",
      width: "361",
      height: "359"
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "meshsync"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M63.5,113.5a133.13,133.13,0,0,1,94-67.5l-8-46A181.53,181.53,0,0,0,22,91Z",
        className: getClassName('svg-sync-5', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M65.5,247a133.42,133.42,0,0,1-19-69A130.14,130.14,0,0,1,55,131.5l-44-16A184.54,184.54,0,0,0,0,178a182.54,182.54,0,0,0,25.5,93Z",
        className: getClassName('svg-sync-4', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M182,312h-1.5C139,312,102,293,77,263L41,293a181.18,181.18,0,0,0,139.5,66h2Z",
        className: getClassName('svg-sync-3', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M297,244a134.07,134.07,0,0,1-95,66l7.5,46.5a180.18,180.18,0,0,0,128-89.5Z",
        className: getClassName('svg-sync-2', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M296,110.5A133.46,133.46,0,0,1,314,178a128,128,0,0,1-9,48l44,17a184.66,184.66,0,0,0,12-64.5,180.8,180.8,0,0,0-24.5-91Z",
        className: getClassName('svg-sync-1', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "251.3",
        y: "17.85",
        width: "44",
        height: "67.8",
        style: {
          fill: 'none'
        },
        className: getClassName('svg-sync-8', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "261.4 85.65 251.3 75.55 275.1 51.75 251.3 27.95 261.4 17.85 295.3 51.75 261.4 85.65",
        className: getClassName('svg-sync-9', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "183.5",
        y: "17.85",
        width: "44",
        height: "67.8",
        style: {
          fill: 'none'
        },
        className: getClassName('svg-sync-6', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "193.6 85.65 183.5 75.55 207.3 51.75 183.5 27.95 193.6 17.85 227.5 51.75 193.6 85.65",
        className: getClassName('svg-sync-7', isActive)
      })]
    }))
  });
}
;// CONCATENATED MODULE: ./components/LoadingComponents/Animations/AnimatedMeshPattern.js
function cov_1zrn0q54hx() {
  var path = "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedMeshPattern.js";
  var hash = "1acdd344ed11b1425d5f99f3424c955fbbacec7a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedMeshPattern.js",
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
          column: 21
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 31
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 60
        }
      },
      "4": {
        start: {
          line: 14,
          column: 28
        },
        end: {
          line: 124,
          column: 1
        }
      },
      "5": {
        start: {
          line: 15,
          column: 34
        },
        end: {
          line: 15,
          column: 48
        }
      },
      "6": {
        start: {
          line: 16,
          column: 16
        },
        end: {
          line: 16,
          column: 26
        }
      },
      "7": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 21,
          column: 9
        }
      },
      "8": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 20,
          column: 12
        }
      },
      "9": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 25
        }
      },
      "10": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 27,
          column: 17
        }
      },
      "11": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 26,
          column: 13
        }
      },
      "12": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 29
        }
      },
      "13": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 123,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "getClassName",
        decl: {
          start: {
            line: 4,
            column: 9
          },
          end: {
            line: 4,
            column: 21
          }
        },
        loc: {
          start: {
            line: 4,
            column: 43
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "getLogoTextColor",
        decl: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 25
          }
        },
        loc: {
          start: {
            line: 11,
            column: 33
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 28
          },
          end: {
            line: 14,
            column: 29
          }
        },
        loc: {
          start: {
            line: 14,
            column: 39
          },
          end: {
            line: 124,
            column: 1
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 17,
            column: 12
          },
          end: {
            line: 17,
            column: 13
          }
        },
        loc: {
          start: {
            line: 17,
            column: 18
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 17
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 18,
            column: 15
          },
          end: {
            line: 18,
            column: 16
          }
        },
        loc: {
          start: {
            line: 18,
            column: 21
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 18
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 18
          },
          end: {
            line: 27,
            column: 3
          }
        },
        line: 23
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 24,
            column: 15
          },
          end: {
            line: 24,
            column: 16
          }
        },
        loc: {
          start: {
            line: 24,
            column: 21
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 24
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
            line: 12,
            column: 9
          },
          end: {
            line: 12,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 41
          },
          end: {
            line: 12,
            column: 50
          }
        }, {
          start: {
            line: 12,
            column: 53
          },
          end: {
            line: 12,
            column: 59
          }
        }],
        line: 12
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
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1acdd344ed11b1425d5f99f3424c955fbbacec7a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1zrn0q54hx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1zrn0q54hx();

function AnimatedMeshPattern_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AnimatedMeshPattern_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnimatedMeshPattern_ownKeys(Object(source), !0).forEach(function (key) { AnimatedMeshPattern_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnimatedMeshPattern_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function AnimatedMeshPattern_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function AnimatedMeshPattern_getClassName(className, isActive) {
  cov_1zrn0q54hx().f[0]++;
  cov_1zrn0q54hx().s[0]++;

  if (!isActive) {
    cov_1zrn0q54hx().b[0][0]++;
    cov_1zrn0q54hx().s[1]++;
    return className;
  } else {
    cov_1zrn0q54hx().b[0][1]++;
  }

  cov_1zrn0q54hx().s[2]++;
  return `${className} active`;
}

function getLogoTextColor(theme) {
  cov_1zrn0q54hx().f[1]++;
  cov_1zrn0q54hx().s[3]++;
  return theme.palette.type == 'light' ? (cov_1zrn0q54hx().b[1][0]++, '#3c494f') : (cov_1zrn0q54hx().b[1][1]++, '#FFF');
}

cov_1zrn0q54hx().s[4]++;

const AnimatedMeshPattern = props => {
  cov_1zrn0q54hx().f[2]++;
  const [isActive, setIsActive] = (cov_1zrn0q54hx().s[5]++, (0,external_react_.useState)(true));
  const theme = (cov_1zrn0q54hx().s[6]++, (0,core_.useTheme)());
  cov_1zrn0q54hx().s[7]++;
  (0,external_react_.useEffect)(() => {
    cov_1zrn0q54hx().f[3]++;
    cov_1zrn0q54hx().s[8]++;
    setTimeout(() => {
      cov_1zrn0q54hx().f[4]++;
      cov_1zrn0q54hx().s[9]++;
      setIsActive(false);
    }, 100);
  }, []);
  cov_1zrn0q54hx().s[10]++;
  (0,external_react_.useEffect)(() => {
    cov_1zrn0q54hx().f[5]++;
    cov_1zrn0q54hx().s[11]++;
    setTimeout(() => {
      cov_1zrn0q54hx().f[6]++;
      cov_1zrn0q54hx().s[12]++;
      setIsActive(!isActive);
    }, 2000);
  }, [isActive]);
  cov_1zrn0q54hx().s[13]++;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", AnimatedMeshPattern_objectSpread(AnimatedMeshPattern_objectSpread({
      id: "Layer_1",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 694 574.24",
      width: "694",
      height: "574.239990234375"
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "service-mesh-pattern-text"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M428.2,74.48c9.95,12.47,17.31,26.45,22.92,41.3,7.23,19.15,10.52,39.07,6.39,59.27-5.54,27.11-21.4,46.2-47.91,55.38-10.31,3.56-21,5-31.64.54a14.3,14.3,0,0,1-4.07-2.22,26.82,26.82,0,0,1-6.73,17.12,16,16,0,0,1,4.37-1.25c1.47-.27,3-.48,4.44-.61,14.18-1.17,27.85-4.17,40.81-10.37,20-9.59,36.76-23.25,51-40.14A137.44,137.44,0,0,0,488,162.15a173.76,173.76,0,0,0,14.29-52.66c1.83-15.69,1.34-31.08-.23-46.62-.38-3.75-2-5.3-5.37-5.9-8.67-1.54-17.34-3.27-25.86-5.34-22.28-5.41-44.74-10-67.06-15.16-7.93-1.85-15.91-3.52-23.87-5.28,5.84,5.57,12.12,10.15,18.19,15C408.89,54.77,419.52,63.6,428.2,74.48Z",
        fill: "#00b39f",
        className: AnimatedMeshPattern_getClassName('svg-pattern-1', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M183,267.57c6.84-28.72,18.13-55.07,41.46-74.49,21.25-17.69,45.31-23.2,71.83-14,13.39,4.63,24.86,12.12,31,25.73a15.11,15.11,0,0,1,1.29,3.81,26.71,26.71,0,0,1,15.18-7.2c-.34-.23-.71-.49-1.1-.81-8.15-6.55-15.89-13.68-25.34-18.5-33.63-17.13-69-19.34-104.84-10.2-38.06,9.69-67.48,32.78-91.64,63.16-2.7,3.41-2.48,5.61-.26,9.06,18.74,29.12,37.27,58.36,55.88,87.56,2.47,3.87,5,7.67,8.38,12.77.37-8.61-1.46-15.49-2.42-22.42C179.79,303.82,178.64,285.68,183,267.57Z",
        fill: "#00d3a9",
        className: AnimatedMeshPattern_getClassName('svg-pattern-2', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M240.26,65.46a350.85,350.85,0,0,1,39.05-4.32c11.88-.65,23.48,1.69,34.95,4.69,27.18,7.11,51.56,19,69.43,41.51,17.06,21.46,21.16,45.54,12,71.36-4.68,13.2-12.59,24.16-26.1,30.1a7.83,7.83,0,0,1-3.05.81,26.73,26.73,0,0,1,7.22,15.73,21.54,21.54,0,0,1,2.05-2.77c9.9-11.77,18.86-24.12,24-38.86a153.77,153.77,0,0,0,8.28-60.26,147.12,147.12,0,0,0-14.83-57.52c-12.63-25.47-30.81-46.43-53-64.06-3.31-2.63-5.71-2.32-9.16-.1-28.56,18.37-57.29,36.48-85.9,54.77-4.45,2.84-9.21,5.31-13.51,9.34A38.32,38.32,0,0,0,240.26,65.46Z",
        fill: "#00d3a9",
        className: AnimatedMeshPattern_getClassName('svg-pattern-3', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M159.91,183.81c11.25-14.22,22-28.93,37.13-39.45,28-19.42,58.23-32,93-27.16,28,3.92,48.25,19.19,58.35,46.17,4.34,11.59,5.7,23.57.62,35.54a10.13,10.13,0,0,1-1.25,2.29,26.73,26.73,0,0,1,15.83,5.7,9.22,9.22,0,0,1-.28-1.2,41.49,41.49,0,0,1-.39-4.46c-.9-11.81-2.82-23.37-7.06-34.54-9-23.68-24.39-42.47-43.39-58.82-28-24.11-61-34.45-97.23-35.83-10.28-.39-20.59-.5-30.89.85-7.12.93-7.65,1-9.18,8q-9.93,45.29-19.92,90.57c-1.73,7.87-3.41,15.74-5.36,24.72C154.47,192.06,156.87,187.66,159.91,183.81Z",
        fill: "#00b39f",
        className: AnimatedMeshPattern_getClassName('svg-pattern-4', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M573.57,212.33c-18.8-29.26-37.38-58.66-56.16-87.94-2.49-3.88-4.47-8.22-8.64-12.52,1.2,10.21,2.06,19.1,3.32,27.94,2.63,18.44,2.6,36.71-2.27,54.85-7.66,28.5-20.4,53.82-44.38,72.22-13.14,10.08-28.32,14.7-44.66,14.91-11.45.15-22.34-3.16-32.47-8.59-8.83-4.74-16.36-10.9-20.8-20.16-1.4-2.93-2-4.7-1.55-5.89a26.85,26.85,0,0,1-16,7.65,39,39,0,0,1,4.5,3.36c8.39,6.82,16.78,13.65,26.66,18.35,27.51,13.07,56.59,15.85,86.18,11.19,44.63-7,78.45-32.09,106.19-66.53C576,218,575.68,215.61,573.57,212.33Z",
        fill: "#00d3a9",
        className: AnimatedMeshPattern_getClassName('svg-pattern-5', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M514.42,296.67c-27.69,27.8-60.83,43.33-100.72,43.44-27.83.08-57.32-18.2-67.2-45-4.09-11.1-6.82-22.36-2.6-34.06,1.12-3.1,1.88-5.07,2.73-6.06a26.8,26.8,0,0,1-16.6-6,17.93,17.93,0,0,1,.91,4.63c.88,8.58,1.34,17.28,3.9,25.57,13.7,44.19,43.16,74.42,84.8,92.74,26.59,11.7,54.91,15.27,84,12.25,13-1.36,13.07-1.12,15.66-12.51,7.15-31.44,14.33-62.88,21.24-94.37,1.17-5.3,3.27-10.54,3.17-17.38-1.63,2.21-2.51,3.37-3.35,4.56C532.28,275.64,524.13,286.91,514.42,296.67Z",
        fill: "#00b39f",
        className: AnimatedMeshPattern_getClassName('svg-pattern-6', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M270.54,387.45c-12.68-14.24-21.76-30.69-28.07-48.55-6-17.07-9.54-34.62-6.67-52.9,4.17-26.56,17.65-46.41,42.47-57.5,12-5.39,24.71-7.94,37.79-2.92a18.8,18.8,0,0,1,4.08,1.92,26.81,26.81,0,0,1,5.63-15.9,23.85,23.85,0,0,1-3.22.42,164.8,164.8,0,0,0-21.22,2.7c-24.23,5.14-44.33,17.82-62,34.53-23.56,22.23-38.71,49.24-45.08,81.15-3.87,19.38-4.4,38.82-2.94,58.46.57,7.58,3.71,10.29,11.3,11.83,31.76,6.45,63.29,14,95,20.88,5.39,1.18,10.68,3.18,17.82,3.4-5.2-4-9.23-7.06-13.27-10.13C291,406.38,279.88,397.92,270.54,387.45Z",
        fill: "#00b39f",
        className: AnimatedMeshPattern_getClassName('svg-pattern-7', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M459.87,390.07c-11.29,2-22.65,3.38-34.06,4.48-9.3.9-18.76,1.36-27.9,0a157.33,157.33,0,0,1-38.4-10.52c-19.13-8-36.49-18.59-49.37-35.3C294.61,328.6,289.36,306.13,297,281.6c4.33-13.88,11.47-26.27,25.52-33,2.51-1.19,4.23-1.75,5.44-1.58a26.84,26.84,0,0,1-7.64-15.65,29.38,29.38,0,0,1-2,2.59c-6.46,7.81-13.07,15.52-17.76,24.63-11.31,22-15.45,45.39-14.84,70a144.87,144.87,0,0,0,11.05,52.87c12.17,29,31.52,52.61,56.06,72.15,3.84,3.06,6.59,3.38,10.88.59,24.72-16,49.67-31.72,74.54-47.53,8.22-5.24,16.41-10.52,24.73-15.86A3,3,0,0,0,459.87,390.07Z",
        fill: "#00d3a9",
        className: AnimatedMeshPattern_getClassName('svg-pattern-8', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "321.68 506.1 321.68 509.53 321.68 525.71 321.68 545.44 321.68 574.24 398.36 574.24 398.36 558.06 337.86 558.06 337.86 545.44 337.86 541.89 384.34 541.89 384.34 525.71 337.86 525.71 337.86 509.53 398.36 509.53 398.36 493.36 321.68 493.36 321.68 506.1",
        fill: getLogoTextColor(theme)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M694,553.1a20.35,20.35,0,0,1-1.67,8.2,21,21,0,0,1-4.58,6.74,22.24,22.24,0,0,1-6.75,4.53,20.69,20.69,0,0,1-8.25,1.67h-75.7v-17h75.7a4,4,0,0,0,4.1-4.1v-6.58a4,4,0,0,0-4.1-4.09H618.29a20.3,20.3,0,0,1-8.19-1.67,21.5,21.5,0,0,1-11.38-11.38,20.38,20.38,0,0,1-1.67-8.2V514.6a20.73,20.73,0,0,1,1.67-8.25,21.81,21.81,0,0,1,4.58-6.74,21.5,21.5,0,0,1,6.8-4.58,20.13,20.13,0,0,1,8.19-1.67H694V510.5H618.29a4.06,4.06,0,0,0-4.1,4.1v6.58a4.06,4.06,0,0,0,4.1,4.1h54.46A20.69,20.69,0,0,1,681,527a21.71,21.71,0,0,1,11.33,11.32,20.73,20.73,0,0,1,1.67,8.25Z",
        fill: getLogoTextColor(theme)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M419.75,508.78h41.49V525.6H427.82V541h7.66l29.34,33.21h20L455.45,541H466.9a12.56,12.56,0,0,0,12.56-12.56V505.92a12.56,12.56,0,0,0-12.56-12.56h-63v80.88h16.17Z",
        fill: getLogoTextColor(theme)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M62,540.9H63.2a12.38,12.38,0,0,0,12.47-12.46V505.82A12.38,12.38,0,0,0,63.2,493.36H0v80.88H16.23l-.29-65.52H57.4v16.53H24.06V540.9",
        fill: getLogoTextColor(theme)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "106.96 493.36 74.6 574.24 93.06 574.24 115.05 517.62 130.73 558.06 105.24 558.06 99.2 574.24 155.51 574.24 123.14 493.36 106.96 493.36",
        fill: getLogoTextColor(theme)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M197.75,493.36h31.93V510.5H148.77V493.36h49",
        fill: getLogoTextColor(theme)
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "180.65",
        y: "517.68",
        width: "17.15",
        height: "56.56",
        fill: getLogoTextColor(theme)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M284.2,493.36h31.93V510.5h-80.9V493.36h49",
        fill: getLogoTextColor(theme)
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "267.1",
        y: "517.68",
        width: "17.15",
        height: "56.56",
        fill: getLogoTextColor(theme)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M591.5,574.24H574.35v-59a4.59,4.59,0,0,0-.38-1.84,4.86,4.86,0,0,0-1-1.5,4.77,4.77,0,0,0-1.51-1,4.58,4.58,0,0,0-1.83-.38H490.34V493.36h79.27a21.09,21.09,0,0,1,8.46,1.72,21.68,21.68,0,0,1,11.7,11.7,21.14,21.14,0,0,1,1.73,8.47Zm-75.76,0H498.59V519.49h17.15Z",
        fill: getLogoTextColor(theme)
      })]
    }))
  });
};

/* harmony default export */ const Animations_AnimatedMeshPattern = (AnimatedMeshPattern);
;// CONCATENATED MODULE: ./components/LoadingComponents/Animations/AnimatedMeshplay.js
function cov_2jinbifboe() {
  var path = "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedMeshplay.js";
  var hash = "28aa7f7a7a5541145ed94f71855ef2dd3d398534";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedMeshplay.js",
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
          column: 31
        }
      },
      "3": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 148,
          column: 1
        }
      },
      "4": {
        start: {
          line: 12,
          column: 34
        },
        end: {
          line: 12,
          column: 48
        }
      },
      "5": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "6": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 12
        }
      },
      "7": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "8": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 24,
          column: 17
        }
      },
      "9": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 13
        }
      },
      "10": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 29
        }
      },
      "11": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 147,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "getClassName",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
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
            line: 11,
            column: 25
          },
          end: {
            line: 11,
            column: 26
          }
        },
        loc: {
          start: {
            line: 11,
            column: 36
          },
          end: {
            line: 148,
            column: 1
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 12
          },
          end: {
            line: 14,
            column: 13
          }
        },
        loc: {
          start: {
            line: 14,
            column: 18
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 15
          },
          end: {
            line: 15,
            column: 16
          }
        },
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 13
          }
        },
        loc: {
          start: {
            line: 20,
            column: 18
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 20
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 21,
            column: 15
          },
          end: {
            line: 21,
            column: 16
          }
        },
        loc: {
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 23,
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
    hash: "28aa7f7a7a5541145ed94f71855ef2dd3d398534"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2jinbifboe = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2jinbifboe();

function AnimatedMeshplay_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AnimatedMeshplay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnimatedMeshplay_ownKeys(Object(source), !0).forEach(function (key) { AnimatedMeshplay_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnimatedMeshplay_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function AnimatedMeshplay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function AnimatedMeshplay_getClassName(className, isActive) {
  cov_2jinbifboe().f[0]++;
  cov_2jinbifboe().s[0]++;

  if (!isActive) {
    cov_2jinbifboe().b[0][0]++;
    cov_2jinbifboe().s[1]++;
    return className;
  } else {
    cov_2jinbifboe().b[0][1]++;
  }

  cov_2jinbifboe().s[2]++;
  return `${className} active`;
}

cov_2jinbifboe().s[3]++;

const AnimatedMeshplay = props => {
  cov_2jinbifboe().f[1]++;
  const [isActive, setIsActive] = (cov_2jinbifboe().s[4]++, (0,external_react_.useState)(true));
  cov_2jinbifboe().s[5]++;
  (0,external_react_.useEffect)(() => {
    cov_2jinbifboe().f[2]++;
    cov_2jinbifboe().s[6]++;
    setTimeout(() => {
      cov_2jinbifboe().f[3]++;
      cov_2jinbifboe().s[7]++;
      setIsActive(false);
    }, 100);
  }, []);
  cov_2jinbifboe().s[8]++;
  (0,external_react_.useEffect)(() => {
    cov_2jinbifboe().f[4]++;
    cov_2jinbifboe().s[9]++;
    setTimeout(() => {
      cov_2jinbifboe().f[5]++;
      cov_2jinbifboe().s[10]++;
      setIsActive(!isActive);
    }, 4000);
  }, [isActive]);
  cov_2jinbifboe().s[11]++;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", AnimatedMeshplay_objectSpread(AnimatedMeshplay_objectSpread({
      id: "Layer_1",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 278.24 263.92",
      width: "278.239990234375",
      height: "263.9200134277344"
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "meshplay-logo-light-text"
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "135.15 48.92 135.15 98.49 178.12 73.62 135.15 48.92",
        className: AnimatedMeshplay_getClassName('svg-meshplay-1', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "135.15 108.86 135.15 158.67 178.51 133.88 135.15 108.86",
        className: AnimatedMeshplay_getClassName('svg-meshplay-2', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "128.97 98.15 128.97 49.34 86.53 73.66 128.97 98.15",
        className: AnimatedMeshplay_getClassName('svg-meshplay-3', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M43.85,158.5a104.33,104.33,0,0,0,32.92,33.12V139.44Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-4', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "128.97 158.44 128.97 109.22 86.43 133.85 128.97 158.44",
        className: AnimatedMeshplay_getClassName('svg-meshplay-5', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "82.95 188.51 126.03 163.88 82.95 138.98 82.95 188.51",
        className: AnimatedMeshplay_getClassName('svg-meshplay-6', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "181.46 188.78 181.46 139.32 138.44 163.91 181.46 188.78",
        className: AnimatedMeshplay_getClassName('svg-meshplay-7', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M223.6,152.75a103.12,103.12,0,0,0,12.16-44.48L190.93,133.9Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-8', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "187.64 128.66 230.87 103.94 187.64 79.09 187.64 128.66",
        className: AnimatedMeshplay_getClassName('svg-meshplay-9', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "181.46 68.4 181.46 19.25 138.64 43.79 181.46 68.4",
        className: AnimatedMeshplay_getClassName('svg-meshplay-10', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "181.46 128.44 181.46 78.83 138.54 103.68 181.46 128.44",
        className: AnimatedMeshplay_getClassName('svg-meshplay-11', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "132.06 207.57 132.07 207.57 132.05 207.57 132.06 207.57",
        className: AnimatedMeshplay_getClassName('svg-meshplay-12', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "82.95 78.74 82.95 128.71 126.18 103.69 82.95 78.74",
        className: AnimatedMeshplay_getClassName('svg-meshplay-13', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M129,0A103.26,103.26,0,0,0,83.41,12L129,38.23Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-14', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "82.95 18.91 82.95 68.58 126.22 43.78 82.95 18.91",
        className: AnimatedMeshplay_getClassName('svg-meshplay-15', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M76.77,15.89A104.42,104.42,0,0,0,43.84,49L76.77,68Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-16', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M181.17,12.28A103.4,103.4,0,0,0,135.15,0V38.66Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-17', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M28.32,107.4a103.21,103.21,0,0,0,12.42,45.75l33.34-19.3Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-18', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M40.73,54.37A103.3,103.3,0,0,0,28.33,99.9l45.8-26.25Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-19', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M83.32,195.43A103.35,103.35,0,0,0,129,207.52V169.33Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-20', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M220.36,49.16a104.43,104.43,0,0,0-32.72-33.09v52Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-21', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M187.64,191.44a104.29,104.29,0,0,0,32.87-33.32l-32.87-19Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-22', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M235.78,99.63a103.28,103.28,0,0,0-12.32-45.12l-33,19.09Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-23', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M135.15,207.52a103.14,103.14,0,0,0,45.54-12l-45.54-26.32Z",
        className: AnimatedMeshplay_getClassName('svg-meshplay-24', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "76.77 128.26 76.77 79.26 34.2 103.66 76.77 128.26",
        className: AnimatedMeshplay_getClassName('svg-meshplay-25', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "172.5 235.15 172.5 236.6 172.5 243.43 172.5 251.76 172.5 263.92 204.87 263.92 204.87 257.09 179.33 257.09 179.33 251.76 179.33 250.26 198.95 250.26 198.95 243.43 179.33 243.43 179.33 236.6 204.87 236.6 204.87 229.77 172.5 229.77 172.5 235.15"
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "47.96 235.15 47.96 236.6 47.96 243.43 47.96 251.76 47.96 263.92 80.34 263.92 80.34 257.09 54.79 257.09 54.79 251.76 54.79 250.26 74.42 250.26 74.42 243.43 54.79 243.43 54.79 236.6 80.34 236.6 80.34 229.77 47.96 229.77 47.96 235.15"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M125.15,255a8.53,8.53,0,0,1-.7,3.46,8.73,8.73,0,0,1-1.94,2.85,9.52,9.52,0,0,1-2.84,1.91,8.78,8.78,0,0,1-3.49.71h-32v-7.2h32a1.71,1.71,0,0,0,1.73-1.73v-2.78a1.72,1.72,0,0,0-1.73-1.73h-23a8.53,8.53,0,0,1-3.46-.7,9.15,9.15,0,0,1-4.81-4.8,8.61,8.61,0,0,1-.7-3.47v-2.77a8.77,8.77,0,0,1,.7-3.49,9.13,9.13,0,0,1,1.94-2.84,9,9,0,0,1,2.87-1.94,8.53,8.53,0,0,1,3.46-.7h32V237h-32a1.64,1.64,0,0,0-1.23.5,1.67,1.67,0,0,0-.5,1.23v2.77a1.67,1.67,0,0,0,.5,1.23,1.64,1.64,0,0,0,1.23.5h23a8.78,8.78,0,0,1,3.49.71,9.25,9.25,0,0,1,2.84,1.94,9.13,9.13,0,0,1,1.94,2.84,8.73,8.73,0,0,1,.7,3.48Z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M168.23,263.92h-6.51V250.48h-25.4v13.44h-6.51V243.24h31.91V229.77h6.51ZM136.32,240h-6.51V229.77h6.51Z"
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "261.17 241.72 252.63 229.77 244.09 229.77 257.75 250.26 257.75 263.92 264.58 263.92 264.58 250.26 278.24 229.77 269.81 229.77 261.17 241.72"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M216.49,236.28H234v7.1H219.9v6.51h3.23l12.39,14H244l-12.39-14h4.84a5.3,5.3,0,0,0,5.3-5.3v-9.52a5.3,5.3,0,0,0-5.3-5.3H209.8v34.15h6.83Z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M42.71,263.92H35.47V239a1.83,1.83,0,0,0-.16-.77,1.9,1.9,0,0,0-.43-.64,2,2,0,0,0-.64-.43,1.83,1.83,0,0,0-.77-.16H0v-7.24H33.47a8.81,8.81,0,0,1,3.57.73,9.49,9.49,0,0,1,3,2,9.38,9.38,0,0,1,2,3,8.81,8.81,0,0,1,.73,3.57Zm-35.47,0H0V237l7.24-2Zm17.71,0H17.71V240.8H25Z"
      })]
    }))
  });
};

/* harmony default export */ const Animations_AnimatedMeshplay = (AnimatedMeshplay);
;// CONCATENATED MODULE: ./components/LoadingComponents/Animations/AnimatedFilter.js
function cov_1xs38sld0b() {
  var path = "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedFilter.js";
  var hash = "1dc08fb6400e634598a95d520f9716738f519b7c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedFilter.js",
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
          column: 31
        }
      },
      "3": {
        start: {
          line: 11,
          column: 23
        },
        end: {
          line: 61,
          column: 1
        }
      },
      "4": {
        start: {
          line: 12,
          column: 34
        },
        end: {
          line: 12,
          column: 48
        }
      },
      "5": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "6": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 12
        }
      },
      "7": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "8": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 24,
          column: 17
        }
      },
      "9": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 13
        }
      },
      "10": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 29
        }
      },
      "11": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 60,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "getClassName",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
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
            line: 11,
            column: 23
          },
          end: {
            line: 11,
            column: 24
          }
        },
        loc: {
          start: {
            line: 11,
            column: 34
          },
          end: {
            line: 61,
            column: 1
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 12
          },
          end: {
            line: 14,
            column: 13
          }
        },
        loc: {
          start: {
            line: 14,
            column: 18
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 15
          },
          end: {
            line: 15,
            column: 16
          }
        },
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 13
          }
        },
        loc: {
          start: {
            line: 20,
            column: 18
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 20
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 21,
            column: 15
          },
          end: {
            line: 21,
            column: 16
          }
        },
        loc: {
          start: {
            line: 21,
            column: 21
          },
          end: {
            line: 23,
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
    hash: "1dc08fb6400e634598a95d520f9716738f519b7c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1xs38sld0b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1xs38sld0b();

function AnimatedFilter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AnimatedFilter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnimatedFilter_ownKeys(Object(source), !0).forEach(function (key) { AnimatedFilter_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnimatedFilter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function AnimatedFilter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function AnimatedFilter_getClassName(className, isActive) {
  cov_1xs38sld0b().f[0]++;
  cov_1xs38sld0b().s[0]++;

  if (!isActive) {
    cov_1xs38sld0b().b[0][0]++;
    cov_1xs38sld0b().s[1]++;
    return className;
  } else {
    cov_1xs38sld0b().b[0][1]++;
  }

  cov_1xs38sld0b().s[2]++;
  return `${className} active`;
}

cov_1xs38sld0b().s[3]++;

const AnimatedFilter = props => {
  cov_1xs38sld0b().f[1]++;
  const [isActive, setIsActive] = (cov_1xs38sld0b().s[4]++, (0,external_react_.useState)(true));
  cov_1xs38sld0b().s[5]++;
  (0,external_react_.useEffect)(() => {
    cov_1xs38sld0b().f[2]++;
    cov_1xs38sld0b().s[6]++;
    setTimeout(() => {
      cov_1xs38sld0b().f[3]++;
      cov_1xs38sld0b().s[7]++;
      setIsActive(false);
    }, 100);
  }, []);
  cov_1xs38sld0b().s[8]++;
  (0,external_react_.useEffect)(() => {
    cov_1xs38sld0b().f[4]++;
    cov_1xs38sld0b().s[9]++;
    setTimeout(() => {
      cov_1xs38sld0b().f[5]++;
      cov_1xs38sld0b().s[10]++;
      setIsActive(!isActive);
    }, 2000);
  }, [isActive]);
  cov_1xs38sld0b().s[11]++;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", AnimatedFilter_objectSpread(AnimatedFilter_objectSpread({
      width: "100",
      height: "100",
      viewBox: "0 0 100 100",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), {}, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        clipPath: "url(#clip0_4_2)",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M61.4379 0C61.4379 0.176471 61.4379 0.352941 61.4379 0.539216C61.4379 6.87255 56.3039 12.0049 49.9722 12.0049C43.6389 12.0049 38.5065 6.87092 38.5065 0.539216C38.5065 0.352941 38.5065 0.176471 38.5065 0L0 0V100H100V0H61.4379Z",
          fill: "#00D3A9",
          className: AnimatedFilter_getClassName('svg-wa-1', isActive)
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M23.2287 53.8905H29.8562L34.3807 77.9869H34.4624L39.9003 53.8905H46.0996L51.0114 78.2826H51.1078L56.2647 53.8905H62.7647L54.3186 89.2973H47.7418L42.8709 65.2009H42.7434L37.5294 89.2973H30.83L23.2287 53.8905ZM70.2369 53.8905H80.6846L91.0604 89.2973H84.2238L81.9673 81.4182H70.0653L68.3235 89.2973H61.665L70.2369 53.8905ZM74.214 62.6176L71.3235 75.6078H80.3202L77.0016 62.6176H74.214Z",
          fill: "white",
          className: AnimatedFilter_getClassName('svg-wa-2', isActive)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
        children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
          id: "clip0_4_2",
          children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
            width: "100",
            height: "100",
            fill: "white",
            className: AnimatedFilter_getClassName('svg-wa-3', isActive)
          })
        })
      })]
    }))
  });
};

/* harmony default export */ const Animations_AnimatedFilter = (AnimatedFilter);
;// CONCATENATED MODULE: ./components/LoadingComponents/Animations/AnimatedLightMeshplay.js
function cov_rd5rpo05c() {
  var path = "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedLightMeshplay.js";
  var hash = "5aab1db9c5d74cd4babb719e3b71f942c5d5e039";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/LoadingComponents/Animations/AnimatedLightMeshplay.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 5,
          column: 3
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 21
        }
      },
      "2": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 31
        }
      },
      "3": {
        start: {
          line: 10,
          column: 30
        },
        end: {
          line: 168,
          column: 1
        }
      },
      "4": {
        start: {
          line: 11,
          column: 34
        },
        end: {
          line: 11,
          column: 48
        }
      },
      "5": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 17,
          column: 9
        }
      },
      "6": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 16,
          column: 12
        }
      },
      "7": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 25
        }
      },
      "8": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 23,
          column: 17
        }
      },
      "9": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 22,
          column: 13
        }
      },
      "10": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 29
        }
      },
      "11": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 167,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "getClassName",
        decl: {
          start: {
            line: 2,
            column: 9
          },
          end: {
            line: 2,
            column: 21
          }
        },
        loc: {
          start: {
            line: 2,
            column: 43
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 2
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 10,
            column: 31
          }
        },
        loc: {
          start: {
            line: 10,
            column: 41
          },
          end: {
            line: 168,
            column: 1
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 13,
            column: 12
          },
          end: {
            line: 13,
            column: 13
          }
        },
        loc: {
          start: {
            line: 13,
            column: 18
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 13
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 14,
            column: 15
          },
          end: {
            line: 14,
            column: 16
          }
        },
        loc: {
          start: {
            line: 14,
            column: 21
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 14
      },
      "4": {
        name: "(anonymous_4)",
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
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 20,
            column: 15
          },
          end: {
            line: 20,
            column: 16
          }
        },
        loc: {
          start: {
            line: 20,
            column: 21
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 5,
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
        line: 3
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
    hash: "5aab1db9c5d74cd4babb719e3b71f942c5d5e039"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_rd5rpo05c = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_rd5rpo05c();

function AnimatedLightMeshplay_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AnimatedLightMeshplay_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnimatedLightMeshplay_ownKeys(Object(source), !0).forEach(function (key) { AnimatedLightMeshplay_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnimatedLightMeshplay_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function AnimatedLightMeshplay_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function AnimatedLightMeshplay_getClassName(className, isActive) {
  cov_rd5rpo05c().f[0]++;
  cov_rd5rpo05c().s[0]++;

  if (!isActive) {
    cov_rd5rpo05c().b[0][0]++;
    cov_rd5rpo05c().s[1]++;
    return className;
  } else {
    cov_rd5rpo05c().b[0][1]++;
  }

  cov_rd5rpo05c().s[2]++;
  return `${className} active`;
}

cov_rd5rpo05c().s[3]++;

const AnimatedLightMeshplay = props => {
  cov_rd5rpo05c().f[1]++;
  const [isActive, setIsActive] = (cov_rd5rpo05c().s[4]++, (0,external_react_.useState)(true));
  cov_rd5rpo05c().s[5]++;
  (0,external_react_.useEffect)(() => {
    cov_rd5rpo05c().f[2]++;
    cov_rd5rpo05c().s[6]++;
    setTimeout(() => {
      cov_rd5rpo05c().f[3]++;
      cov_rd5rpo05c().s[7]++;
      setIsActive(false);
    }, 100);
  }, []);
  cov_rd5rpo05c().s[8]++;
  (0,external_react_.useEffect)(() => {
    cov_rd5rpo05c().f[4]++;
    cov_rd5rpo05c().s[9]++;
    setTimeout(() => {
      cov_rd5rpo05c().f[5]++;
      cov_rd5rpo05c().s[10]++;
      setIsActive(!isActive);
    }, 4000);
  }, [isActive]);
  cov_rd5rpo05c().s[11]++;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", AnimatedLightMeshplay_objectSpread(AnimatedLightMeshplay_objectSpread({
      id: "Layer_1",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 278.24 263.92",
      width: "278.239990234375",
      height: "263.9200134277344"
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "meshplay-logo-light-text"
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "135.15 48.92 135.15 98.49 178.12 73.62 135.15 48.92",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-1', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "135.15 108.86 135.15 158.67 178.51 133.88 135.15 108.86",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-2', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "128.97 98.15 128.97 49.34 86.53 73.66 128.97 98.15",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-3', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M43.85,158.5a104.33,104.33,0,0,0,32.92,33.12V139.44Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-4', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "128.97 158.44 128.97 109.22 86.43 133.85 128.97 158.44",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-5', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "82.95 188.51 126.03 163.88 82.95 138.98 82.95 188.51",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-6', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "181.46 188.78 181.46 139.32 138.44 163.91 181.46 188.78",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-7', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M223.6,152.75a103.12,103.12,0,0,0,12.16-44.48L190.93,133.9Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-8', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "187.64 128.66 230.87 103.94 187.64 79.09 187.64 128.66",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-9', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "181.46 68.4 181.46 19.25 138.64 43.79 181.46 68.4",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-10', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "181.46 128.44 181.46 78.83 138.54 103.68 181.46 128.44",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-11', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "132.06 207.57 132.07 207.57 132.05 207.57 132.06 207.57",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-12', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "82.95 78.74 82.95 128.71 126.18 103.69 82.95 78.74",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-13', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M129,0A103.26,103.26,0,0,0,83.41,12L129,38.23Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-14', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "82.95 18.91 82.95 68.58 126.22 43.78 82.95 18.91",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-15', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M76.77,15.89A104.42,104.42,0,0,0,43.84,49L76.77,68Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-16', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M181.17,12.28A103.4,103.4,0,0,0,135.15,0V38.66Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-17', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M28.32,107.4a103.21,103.21,0,0,0,12.42,45.75l33.34-19.3Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-18', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M40.73,54.37A103.3,103.3,0,0,0,28.33,99.9l45.8-26.25Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-19', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M83.32,195.43A103.35,103.35,0,0,0,129,207.52V169.33Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-20', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M220.36,49.16a104.43,104.43,0,0,0-32.72-33.09v52Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-21', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M187.64,191.44a104.29,104.29,0,0,0,32.87-33.32l-32.87-19Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-22', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M235.78,99.63a103.28,103.28,0,0,0-12.32-45.12l-33,19.09Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-23', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M135.15,207.52a103.14,103.14,0,0,0,45.54-12l-45.54-26.32Z",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-24', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        points: "76.77 128.26 76.77 79.26 34.2 103.66 76.77 128.26",
        className: AnimatedLightMeshplay_getClassName('svg-meshplay-25', isActive)
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        fill: "#FFF",
        points: "172.5 235.15 172.5 236.6 172.5 243.43 172.5 251.76 172.5 263.92 204.87 263.92 204.87 257.09 179.33 257.09 179.33 251.76 179.33 250.26 198.95 250.26 198.95 243.43 179.33 243.43 179.33 236.6 204.87 236.6 204.87 229.77 172.5 229.77 172.5 235.15"
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        fill: "#FFF",
        points: "47.96 235.15 47.96 236.6 47.96 243.43 47.96 251.76 47.96 263.92 80.34 263.92 80.34 257.09 54.79 257.09 54.79 251.76 54.79 250.26 74.42 250.26 74.42 243.43 54.79 243.43 54.79 236.6 80.34 236.6 80.34 229.77 47.96 229.77 47.96 235.15"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#FFF",
        d: "M125.15,255a8.53,8.53,0,0,1-.7,3.46,8.73,8.73,0,0,1-1.94,2.85,9.52,9.52,0,0,1-2.84,1.91,8.78,8.78,0,0,1-3.49.71h-32v-7.2h32a1.71,1.71,0,0,0,1.73-1.73v-2.78a1.72,1.72,0,0,0-1.73-1.73h-23a8.53,8.53,0,0,1-3.46-.7,9.15,9.15,0,0,1-4.81-4.8,8.61,8.61,0,0,1-.7-3.47v-2.77a8.77,8.77,0,0,1,.7-3.49,9.13,9.13,0,0,1,1.94-2.84,9,9,0,0,1,2.87-1.94,8.53,8.53,0,0,1,3.46-.7h32V237h-32a1.64,1.64,0,0,0-1.23.5,1.67,1.67,0,0,0-.5,1.23v2.77a1.67,1.67,0,0,0,.5,1.23,1.64,1.64,0,0,0,1.23.5h23a8.78,8.78,0,0,1,3.49.71,9.25,9.25,0,0,1,2.84,1.94,9.13,9.13,0,0,1,1.94,2.84,8.73,8.73,0,0,1,.7,3.48Z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#FFF",
        d: "M168.23,263.92h-6.51V250.48h-25.4v13.44h-6.51V243.24h31.91V229.77h6.51ZM136.32,240h-6.51V229.77h6.51Z"
      }), /*#__PURE__*/jsx_runtime_.jsx("polygon", {
        fill: "#FFF",
        points: "261.17 241.72 252.63 229.77 244.09 229.77 257.75 250.26 257.75 263.92 264.58 263.92 264.58 250.26 278.24 229.77 269.81 229.77 261.17 241.72"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#FFF",
        d: "M216.49,236.28H234v7.1H219.9v6.51h3.23l12.39,14H244l-12.39-14h4.84a5.3,5.3,0,0,0,5.3-5.3v-9.52a5.3,5.3,0,0,0-5.3-5.3H209.8v34.15h6.83Z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#FFF",
        d: "M42.71,263.92H35.47V239a1.83,1.83,0,0,0-.16-.77,1.9,1.9,0,0,0-.43-.64,2,2,0,0,0-.64-.43,1.83,1.83,0,0,0-.77-.16H0v-7.24H33.47a8.81,8.81,0,0,1,3.57.73,9.49,9.49,0,0,1,3,2,9.38,9.38,0,0,1,2,3,8.81,8.81,0,0,1,.73,3.57Zm-35.47,0H0V237l7.24-2Zm17.71,0H17.71V240.8H25Z"
      })]
    }))
  });
};

/* harmony default export */ const Animations_AnimatedLightMeshplay = (AnimatedLightMeshplay);
;// CONCATENATED MODULE: ./components/LoadingComponents/LoadingComponent.js
const _excluded = ["message", "className", "animatedIcon"];

function cov_7e95wpvhz() {
  var path = "/workspace/meshplay/ui/components/LoadingComponents/LoadingComponent.js";
  var hash = "3f8e95ad8b78aab8c579ea3590cfbcace535cce4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/LoadingComponents/LoadingComponent.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 36
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 25
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "3": {
        start: {
          line: 36,
          column: 30
        },
        end: {
          line: 51,
          column: 1
        }
      },
      "4": {
        start: {
          line: 53,
          column: 57
        },
        end: {
          line: 53,
          column: 62
        }
      },
      "5": {
        start: {
          line: 54,
          column: 18
        },
        end: {
          line: 54,
          column: 29
        }
      },
      "6": {
        start: {
          line: 55,
          column: 16
        },
        end: {
          line: 55,
          column: 26
        }
      },
      "7": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 65,
          column: 4
        }
      },
      "8": {
        start: {
          line: 68,
          column: 0
        },
        end: {
          line: 72,
          column: 2
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 29
          },
          end: {
            line: 11,
            column: 30
          }
        },
        loc: {
          start: {
            line: 11,
            column: 36
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "LoadingScreen",
        decl: {
          start: {
            line: 52,
            column: 9
          },
          end: {
            line: 52,
            column: 22
          }
        },
        loc: {
          start: {
            line: 52,
            column: 30
          },
          end: {
            line: 66,
            column: 1
          }
        },
        line: 52
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 58,
            column: 7
          },
          end: {
            line: 60,
            column: 45
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 59,
            column: 10
          },
          end: {
            line: 59,
            column: 40
          }
        }, {
          start: {
            line: 60,
            column: 10
          },
          end: {
            line: 60,
            column: 45
          }
        }],
        line: 58
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
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3f8e95ad8b78aab8c579ea3590cfbcace535cce4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7e95wpvhz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_7e95wpvhz();

function LoadingComponent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function LoadingComponent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LoadingComponent_ownKeys(Object(source), !0).forEach(function (key) { LoadingComponent_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LoadingComponent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function LoadingComponent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const useStyles = (cov_7e95wpvhz().s[0]++, (0,core_.makeStyles)(() => {
  cov_7e95wpvhz().f[0]++;
  cov_7e95wpvhz().s[1]++;
  return {
    loadingWrapper: {
      textAlign: 'center',
      marginTop: 'calc(50vh - 141px)',
      transform: 'translateY(-50%)'
    }
  };
}));
const animatedIconList = (cov_7e95wpvhz().s[2]++, {
  AnimatedMeshPattern: /*#__PURE__*/jsx_runtime_.jsx(Animations_AnimatedMeshPattern, {
    style: {
      height: '100px',
      margin: '4px 0px 8px'
    }
  }),
  AnimatedMeshSync: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(AnimatedMeshSync, {
      style: {
        height: '75px'
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/static/img/meshplay-logo/meshplay-black.svg",
      alt: "mehsery-logo",
      width: "125px",
      style: {
        margin: '4px 0px 8px'
      }
    })]
  }),
  AnimatedFilter: /*#__PURE__*/jsx_runtime_.jsx(Animations_AnimatedFilter, {
    style: {
      height: '75px',
      margin: '4px 0px 8px'
    }
  }),
  AnimatedMeshplay: /*#__PURE__*/jsx_runtime_.jsx(Animations_AnimatedMeshplay, {
    style: {
      height: '100px',
      margin: '4px 0px 8px'
    }
  })
});
const animatedLightIconList = (cov_7e95wpvhz().s[3]++, {
  AnimatedMeshPattern: /*#__PURE__*/jsx_runtime_.jsx(Animations_AnimatedMeshPattern, {
    style: {
      height: '100px',
      margin: '4px 0px 8px'
    }
  }),
  AnimatedMeshSync: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(AnimatedMeshSync, {
      style: {
        height: '75px'
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/static/img/meshplay-logo/meshplay-white.svg",
      alt: "mehsery-logo",
      width: "125px",
      style: {
        margin: '4px 0px 8px'
      }
    })]
  }),
  AnimatedFilter: /*#__PURE__*/jsx_runtime_.jsx(Animations_AnimatedFilter, {
    style: {
      height: '75px',
      margin: '4px 0px 8px'
    }
  }),
  AnimatedMeshplay: /*#__PURE__*/jsx_runtime_.jsx(Animations_AnimatedLightMeshplay, {
    style: {
      height: '100px',
      margin: '4px 0px 8px'
    }
  })
});

function LoadingScreen(props) {
  cov_7e95wpvhz().f[1]++;

  const _ref = (cov_7e95wpvhz().s[4]++, props),
        {
    message,
    className,
    animatedIcon
  } = _ref,
        other = _objectWithoutProperties(_ref, _excluded);

  const classes = (cov_7e95wpvhz().s[5]++, useStyles());
  const theme = (cov_7e95wpvhz().s[6]++, (0,core_.useTheme)());
  cov_7e95wpvhz().s[7]++;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", LoadingComponent_objectSpread(LoadingComponent_objectSpread({
    className: external_clsx_default()(classes.loadingWrapper, className)
  }, other), {}, {
    children: [theme.palette.type === 'light' ? (cov_7e95wpvhz().b[0][0]++, animatedIconList[animatedIcon]) : (cov_7e95wpvhz().b[0][1]++, animatedLightIconList[animatedIcon]), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "caption",
      component: "div",
      children: message
    })]
  }));
}

cov_7e95wpvhz().s[8]++;
/* harmony default export */ const LoadingComponent = (LoadingScreen);

/***/ })

};
;