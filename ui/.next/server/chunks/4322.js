"use strict";
exports.id = 4322;
exports.ids = [4322];
exports.modules = {

/***/ 39554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["height", "width", "fill"];

function cov_20mfb5y9cc() {
  var path = "/workspace/meshplay/ui/assets/icons/CheckIcon.js";
  var hash = "c6fda50746d509faca2f0b8f805fdac43e886c05";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/CheckIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 16,
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
            column: 88
          },
          end: {
            line: 17,
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
            line: 3,
            column: 21
          },
          end: {
            line: 3,
            column: 34
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 34
          }
        }],
        line: 3
      },
      "1": {
        loc: {
          start: {
            line: 3,
            column: 36
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
            column: 44
          },
          end: {
            line: 3,
            column: 48
          }
        }],
        line: 3
      },
      "2": {
        loc: {
          start: {
            line: 3,
            column: 50
          },
          end: {
            line: 3,
            column: 71
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 57
          },
          end: {
            line: 3,
            column: 71
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
      "0": [0],
      "1": [0],
      "2": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c6fda50746d509faca2f0b8f805fdac43e886c05"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20mfb5y9cc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_20mfb5y9cc();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




cov_20mfb5y9cc().s[0]++;

const CheckIcon = _ref => {
  let {
    height = (cov_20mfb5y9cc().b[0][0]++, '24'),
    width = (cov_20mfb5y9cc().b[1][0]++, '24'),
    fill = (cov_20mfb5y9cc().b[2][0]++, 'currentColor')
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  cov_20mfb5y9cc().f[0]++;
  cov_20mfb5y9cc().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    width: width,
    viewBox: "0 0 24 24",
    fill: fill
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckIcon);

/***/ }),

/***/ 11948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ DeploymentSelectorIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_20gpkvg1yv() {
  var path = "/workspace/meshplay/ui/assets/icons/DeploymentSelectorIcon.js";
  var hash = "3d2389dd04b3f05970692302b98d9db99e26aab4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/DeploymentSelectorIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 38
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 24,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 4,
            column: 39
          }
        },
        loc: {
          start: {
            line: 4,
            column: 98
          },
          end: {
            line: 26,
            column: 1
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
            column: 41
          },
          end: {
            line: 4,
            column: 62
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 4,
            column: 48
          },
          end: {
            line: 4,
            column: 62
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 4,
            column: 64
          },
          end: {
            line: 4,
            column: 77
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 4,
            column: 73
          },
          end: {
            line: 4,
            column: 77
          }
        }],
        line: 4
      },
      "2": {
        loc: {
          start: {
            line: 4,
            column: 79
          },
          end: {
            line: 4,
            column: 91
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 4,
            column: 87
          },
          end: {
            line: 4,
            column: 91
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
      "0": [0],
      "1": [0],
      "2": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3d2389dd04b3f05970692302b98d9db99e26aab4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20gpkvg1yv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_20gpkvg1yv();



cov_20gpkvg1yv().s[0]++;
const DeploymentSelectorIcon = ({
  fill = (cov_20gpkvg1yv().b[0][0]++, "currentColor"),
  height = (cov_20gpkvg1yv().b[1][0]++, "24"),
  width = (cov_20gpkvg1yv().b[2][0]++, "24")
}) => {
  cov_20gpkvg1yv().f[0]++;
  cov_20gpkvg1yv().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: width,
    height: height,
    viewBox: "0 0 28 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M4.57541 3.38826C4.63182 2.85128 4.87399 2.44106 5.32747 2.1576C5.588 1.9971 5.89164 1.915 6.20014 1.92163C6.62588 1.92163 7.05193 1.9186 7.47798 1.92375C7.57647 1.92375 7.62229 1.89561 7.65751 1.80455C8.08574 0.700341 9.12266 0 10.3164 0C11.487 0 12.522 0.701854 12.9521 1.79366C12.9899 1.88926 13.0335 1.92465 13.1407 1.92284C13.5512 1.91649 13.9613 1.91981 14.3718 1.92072C15.2657 1.92072 15.894 2.45286 16.0236 3.31445C16.0264 3.3335 16.0339 3.35226 16.0433 3.38675H16.2113C17.0632 3.38675 17.9151 3.38675 18.767 3.38675C20.0401 3.38675 20.9636 4.27768 20.963 5.50895C20.963 6.92556 20.963 8.34228 20.963 9.7591C20.963 12.1482 20.963 14.5375 20.963 16.9268C20.963 16.9706 20.958 17.0148 20.9555 17.0608H19.6191V12.1009C19.6191 11.2242 19.6191 10.3475 19.6191 9.47079C19.6191 8.15542 19.6191 6.83985 19.6191 5.52408C19.6191 5.26935 19.5496 5.04669 19.3454 4.87607C19.1981 4.75394 19.0093 4.68926 18.8156 4.69456C17.9376 4.69456 17.0599 4.69667 16.182 4.69456C16.0763 4.69456 16.0293 4.71362 16.0149 4.83039C15.9236 5.57187 15.2622 6.1503 14.4824 6.16331C13.8083 6.1742 13.1335 6.16694 12.4591 6.16694C10.3813 6.16694 8.30349 6.16694 6.2257 6.16694C5.43904 6.16694 4.81976 5.70922 4.62808 4.99557C4.60346 4.90481 4.59068 4.80831 4.56886 4.69728H4.40212C3.66471 4.69728 2.92699 4.71059 2.18927 4.69244C1.74265 4.68155 1.3434 5.00888 1.34465 5.51772C1.35254 8.68413 1.35389 11.8505 1.3487 15.017C1.3487 18.5204 1.3487 22.024 1.3487 25.5278C1.3487 25.9495 1.56063 26.2406 1.93869 26.3289C2.03527 26.3479 2.1338 26.3558 2.23228 26.3525C5.68142 26.3525 9.12962 26.3525 12.5769 26.3525H12.8596C12.695 26.4932 12.5607 26.6151 12.4179 26.727C12.3419 26.7875 12.3223 26.8429 12.3528 26.9343C12.4313 27.1675 12.4993 27.4041 12.5756 27.6537H12.3958C9.2226 27.6516 6.0494 27.6506 2.87619 27.6506C2.49813 27.6506 2.11416 27.6682 1.74358 27.6122C1.25845 27.5379 0.816598 27.2979 0.497675 26.9354C0.178751 26.5728 0.00372991 26.1116 0.00415559 25.6349C-0.00519449 23.2407 0.00415559 20.8463 0.00415559 18.4521C0.00415559 17.0762 0.0030128 15.7003 0.000727229 14.3242C0.00031167 11.9601 0.00010389 9.59594 0.00010389 7.23182C0.00010389 6.64694 0.00010389 6.06267 0.00010389 5.479C0.00010389 4.30067 0.935112 3.38826 2.15062 3.38826C2.89863 3.38826 3.64663 3.38826 4.39277 3.38826H4.57541ZM11.0955 1.80364C11.098 1.60025 11.0175 1.40416 10.8715 1.25824C10.7255 1.11233 10.5259 1.02845 10.3164 1.02495C10.212 1.02427 10.1085 1.04356 10.0118 1.0817C9.91512 1.11985 9.82712 1.1761 9.75283 1.24726C9.67853 1.31842 9.61941 1.40308 9.57882 1.49642C9.53824 1.58975 9.517 1.68993 9.5163 1.79124C9.5156 1.89255 9.53547 1.99299 9.57477 2.08685C9.61407 2.1807 9.67202 2.26612 9.74533 2.33823C9.81864 2.41035 9.90586 2.46774 10.002 2.50713C10.0982 2.54652 10.2014 2.56714 10.3058 2.56782C10.4095 2.56874 10.5124 2.54963 10.6085 2.51158C10.7046 2.47353 10.792 2.41732 10.8654 2.34621C10.9389 2.27509 10.9971 2.1905 11.0366 2.09736C11.0761 2.00421 11.0962 1.90437 11.0955 1.80364Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M20.253 32C19.6865 31.9872 19.1228 31.9199 18.57 31.7991C18.4718 31.7779 18.4269 31.7386 18.4179 31.6436C18.3683 31.1223 18.3119 30.6017 18.2698 30.0801C18.2617 29.9782 18.2337 29.9328 18.1371 29.8953C17.6828 29.7202 17.2575 29.4813 16.8748 29.1862C16.7903 29.1211 16.7339 29.1278 16.6423 29.1704C16.1608 29.3934 15.6739 29.6055 15.1899 29.8236C15.0964 29.8653 15.0341 29.8539 14.9605 29.7767C14.2029 28.9892 13.6373 28.0465 13.3056 27.0183C13.2632 26.8879 13.2816 26.8032 13.3991 26.7242C13.8301 26.4359 14.2552 26.1386 14.6875 25.8518C14.762 25.8025 14.781 25.7628 14.7788 25.6736C14.7682 25.2013 14.7654 24.7285 14.7757 24.2563C14.7779 24.1477 14.7592 24.0941 14.6626 24.0303C14.2262 23.7423 13.798 23.4391 13.3651 23.1442C13.2738 23.0819 13.2635 23.0153 13.2956 22.9131C13.6202 21.8825 14.1808 20.9367 14.9353 20.1462C15.021 20.0554 15.0967 20.0282 15.2158 20.082C15.6923 20.2993 16.1757 20.511 16.6513 20.7316C16.7402 20.773 16.7925 20.7727 16.8695 20.714C17.2571 20.4168 17.687 20.1757 18.1458 19.9982C18.2393 19.9625 18.2614 19.9166 18.2705 19.8234C18.3138 19.3015 18.3689 18.7809 18.4176 18.2596C18.4269 18.1583 18.4799 18.1175 18.5796 18.0951C19.6666 17.8531 20.7958 17.8518 21.8833 18.0911C21.9918 18.1144 22.0554 18.1538 22.0657 18.2727C22.1112 18.7888 22.1676 19.3043 22.2106 19.8207C22.2184 19.9129 22.2389 19.9616 22.3321 19.9979C22.7915 20.1742 23.2214 20.4158 23.6075 20.7149C23.6932 20.7818 23.749 20.7657 23.8384 20.7243C24.3206 20.5019 24.808 20.2911 25.2924 20.0733C25.3859 20.0309 25.4482 20.0485 25.5199 20.1229C26.2899 20.9204 26.86 21.8796 27.1861 22.9258C27.2172 23.0259 27.1985 23.0855 27.1147 23.1427C26.6734 23.4434 26.2355 23.7477 25.7917 24.046C25.7184 24.095 25.6982 24.1343 25.7 24.2242C25.7094 24.7115 25.7087 25.1989 25.6979 25.6866C25.6957 25.7755 25.7256 25.8076 25.7898 25.8503C26.2361 26.1528 26.6784 26.4592 27.1234 26.7627C27.2038 26.8174 27.2169 26.8746 27.1858 26.9675C26.8585 28.0241 26.2808 28.9916 25.499 29.7924C25.4367 29.8557 25.3868 29.8644 25.3101 29.8303C24.8161 29.6091 24.319 29.394 23.8275 29.1674C23.7399 29.1272 23.6882 29.1239 23.6094 29.1822C23.221 29.4712 22.8093 29.7229 22.3458 29.8865C22.2523 29.9192 22.2143 29.9703 22.2062 30.0838C22.1688 30.6108 22.1127 31.1365 22.0504 31.6617C22.0448 31.7104 21.9697 31.7767 21.9154 31.79C21.7148 31.8421 21.5109 31.881 21.3049 31.9065C20.9561 31.9464 20.6042 31.9697 20.253 32ZM20.2327 27.6575C21.7599 27.6784 23.0471 26.4381 23.0331 24.923C23.0194 23.4407 21.7693 22.2348 20.2281 22.236C18.7099 22.236 17.4458 23.4537 17.4477 24.9118C17.448 26.4489 18.6772 27.6603 20.2327 27.6575Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M8.03891 14.9912V15.1785C8.03891 15.9396 8.03891 16.7006 8.03891 17.4616C8.03891 18.0319 7.6487 18.4345 7.06526 18.4409C6.23466 18.4496 5.40406 18.4427 4.5719 18.4409C4.46338 18.4442 4.35475 18.4417 4.24652 18.4333C3.74629 18.3779 3.38912 18.0073 3.38413 17.5197C3.37665 16.754 3.38195 15.988 3.38195 15.2223C3.38195 15.0813 3.3779 14.9404 3.38506 14.7988C3.39409 14.5642 3.4957 14.3419 3.66887 14.178C3.84205 14.014 4.07353 13.921 4.3154 13.9181C5.24417 13.9106 6.17295 13.9145 7.10203 13.9181C7.19304 13.9181 7.28405 13.9417 7.41557 13.9599C7.21641 14.2058 7.04157 14.4267 6.85831 14.64C6.834 14.6684 6.76231 14.6648 6.71276 14.6648C5.95436 14.6664 5.19597 14.6664 4.43757 14.6648C4.20475 14.6648 4.15177 14.715 4.15146 14.937C4.15146 15.7639 4.15146 16.5908 4.15146 17.4177C4.15146 17.6352 4.20413 17.6879 4.42386 17.6879C5.28053 17.6879 6.13721 17.6879 6.99388 17.6879C7.2161 17.6879 7.26441 17.6401 7.26472 17.4183C7.26472 16.97 7.2613 16.5214 7.26878 16.073C7.27256 15.99 7.30139 15.91 7.35168 15.8428C7.56673 15.5681 7.79176 15.2989 8.03891 14.9912Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M7.41782 8.0998C7.22271 8.34182 7.06127 8.55056 6.88798 8.74902C6.8537 8.78865 6.77048 8.80256 6.70939 8.80287C5.95671 8.8065 5.20372 8.80498 4.45104 8.80529C4.207 8.80529 4.15589 8.85399 4.15558 9.08512C4.15558 9.90637 4.15558 10.7277 4.15558 11.5492C4.15558 11.786 4.20077 11.8281 4.44886 11.8281H6.98647C7.22552 11.8281 7.26697 11.7863 7.26884 11.5558C7.26884 11.1078 7.26541 10.6598 7.27227 10.2117C7.27498 10.1337 7.30132 10.0581 7.348 9.9945C7.56181 9.71618 7.7859 9.44512 8.02183 9.15228C8.03032 9.18866 8.03625 9.22555 8.0396 9.2627C8.0396 10.0635 8.04303 10.8643 8.0396 11.6653C8.03742 12.1578 7.63443 12.5693 7.1261 12.5753C6.18672 12.5866 5.24725 12.5866 4.30767 12.5753C4.06257 12.5733 3.82829 12.4771 3.65605 12.3078C3.48382 12.1385 3.38764 11.9099 3.38856 11.672C3.38025 10.7699 3.38025 9.86785 3.38856 8.96593C3.39292 8.45496 3.80931 8.06441 4.33915 8.06199C5.25826 8.05805 6.178 8.05957 7.09586 8.06199C7.18999 8.06229 7.28567 8.08377 7.41782 8.0998Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M7.42001 19.8171C7.22303 20.0615 7.06159 20.2709 6.88768 20.4702C6.85308 20.5098 6.77049 20.5253 6.70971 20.5256C5.95672 20.5292 5.20342 20.5277 4.45042 20.528C4.19735 20.528 4.15403 20.5713 4.15403 20.8208C4.15403 21.6427 4.15403 22.4644 4.15403 23.2861C4.15403 23.5 4.20795 23.5508 4.43204 23.5508H6.98772C7.22054 23.5508 7.26636 23.5057 7.26823 23.2734C7.26823 22.8248 7.26823 22.3764 7.26823 21.9281C7.26823 21.8748 7.2701 21.8089 7.29939 21.7705C7.53221 21.4755 7.7722 21.1857 8.0315 20.8677C8.0315 20.9779 8.0315 21.0595 8.0315 21.1415C8.03306 21.8676 8.0315 22.5936 8.03774 23.3197C8.0421 23.8836 7.64722 24.2959 7.06595 24.3008C6.16274 24.3084 5.2589 24.3084 4.35443 24.3008C3.77441 24.2953 3.38296 23.9011 3.38109 23.3381C3.37818 22.4759 3.37818 21.6139 3.38109 20.7519C3.38327 20.1659 3.78626 19.7817 4.39339 19.7814C5.27645 19.7814 6.15952 19.7819 7.04258 19.7829C7.15665 19.7811 7.2676 19.8016 7.42001 19.8171Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M13.3512 11.7052C12.0947 11.7052 10.8386 11.7052 9.58279 11.7052C9.51574 11.708 9.44864 11.7011 9.38364 11.6849C9.30291 11.6583 9.23365 11.6063 9.18684 11.5371C9.14004 11.4679 9.11837 11.3855 9.12528 11.3031C9.13219 11.2206 9.16728 11.1427 9.22498 11.0818C9.28268 11.0208 9.35969 10.9803 9.44379 10.9667C9.50577 10.9589 9.56832 10.956 9.63079 10.9583H17.1186C17.1602 10.9571 17.2019 10.9584 17.2433 10.9622C17.3398 10.9718 17.4286 11.0174 17.4911 11.0893C17.5537 11.1613 17.5849 11.254 17.5784 11.3479C17.5784 11.4423 17.5398 11.5328 17.471 11.5996C17.4023 11.6663 17.3091 11.7039 17.2118 11.704C16.9784 11.7091 16.7443 11.704 16.5112 11.704L13.3512 11.7052Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M13.3662 9.67651C12.146 9.67651 10.9257 9.67651 9.70538 9.67651C9.62758 9.67813 9.54974 9.67551 9.47225 9.66865C9.26062 9.64505 9.13533 9.50771 9.13284 9.30562C9.13066 9.10898 9.26249 8.96135 9.46695 8.93352C9.50307 8.92978 9.53941 8.92847 9.57572 8.92959C12.0899 8.92959 14.6031 8.92959 17.1153 8.92959C17.4117 8.92959 17.5781 9.06512 17.5788 9.3026C17.5788 9.51164 17.4304 9.66895 17.2141 9.67621C17.0221 9.68226 16.8298 9.67772 16.6378 9.67772L13.3662 9.67651Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M13.3541 17.5691C12.0927 17.5691 10.8313 17.5691 9.57011 17.5691C9.42705 17.5691 9.30301 17.5388 9.21044 17.4266C9.16771 17.3753 9.13972 17.314 9.12931 17.2488C9.11889 17.1836 9.12643 17.1169 9.15114 17.0555C9.17586 16.994 9.21688 16.94 9.27005 16.8989C9.32321 16.8579 9.38662 16.8312 9.45385 16.8215C9.49519 16.8165 9.53689 16.8148 9.57852 16.8164H17.1303C17.3967 16.8164 17.5641 16.9462 17.5781 17.1586C17.5943 17.4006 17.4317 17.5654 17.1692 17.5667C16.5824 17.5688 15.9955 17.5667 15.4089 17.5667L13.3541 17.5691Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M13.3707 14.7892C14.6317 14.7892 15.893 14.7892 17.1544 14.7892C17.4109 14.7892 17.5758 14.932 17.5811 15.1522C17.5838 15.2002 17.5767 15.2482 17.5602 15.2935C17.5438 15.3388 17.5183 15.3805 17.4853 15.4162C17.4522 15.452 17.4122 15.481 17.3676 15.5018C17.323 15.5225 17.2746 15.5345 17.2251 15.537C17.1528 15.5428 17.0799 15.5389 17.007 15.5389C14.5367 15.5389 12.0664 15.5382 9.5961 15.537C9.50853 15.5389 9.42139 15.5246 9.33929 15.495C9.18844 15.4345 9.10616 15.2666 9.13078 15.1081C9.14352 15.0281 9.18253 14.9543 9.24201 14.8976C9.30148 14.8409 9.37824 14.8043 9.46084 14.7934C9.51266 14.7893 9.5647 14.7882 9.61667 14.7901L13.3707 14.7892Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M5.93743 23.1566C5.51356 22.7548 5.09437 22.3655 4.68577 21.9659C4.5424 21.8258 4.5611 21.5959 4.70229 21.4588C4.73642 21.4237 4.77741 21.3956 4.82288 21.3761C4.86834 21.3565 4.91736 21.346 4.96707 21.345C5.01679 21.3441 5.06619 21.3528 5.1124 21.3706C5.1586 21.3885 5.20068 21.4151 5.23618 21.4488C5.43658 21.6452 5.6186 21.8591 5.82586 22.0841C6.08548 21.7632 6.29928 21.4997 6.51153 21.2371C6.90486 20.7494 7.29808 20.2615 7.6912 19.7735C7.87165 19.5511 8.1668 19.5378 8.32949 19.7408C8.45198 19.8939 8.43515 20.0715 8.27963 20.2639L6.8687 22.0118C6.59381 22.3525 6.31881 22.6933 6.04371 23.0344C6.01223 23.0725 5.97857 23.1091 5.93743 23.1566Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M5.86422 16.1771C6.16031 15.8104 6.44767 15.4547 6.73471 15.0986C7.05791 14.6981 7.378 14.2951 7.70525 13.8973C7.89506 13.6662 8.21577 13.6822 8.35664 13.9227C8.43923 14.064 8.43269 14.2074 8.33108 14.3338C7.54152 15.3146 6.75092 16.294 5.95928 17.2719C5.95017 17.278 5.94046 17.2832 5.9303 17.2874L5.57156 16.9488C5.29106 16.6853 5.01056 16.4237 4.73473 16.158C4.55085 15.9814 4.54243 15.7524 4.70699 15.596C4.87155 15.4396 5.09253 15.4517 5.27485 15.6223C5.46871 15.8035 5.66101 15.9856 5.86422 16.1771Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M5.94135 11.4393C5.52153 11.0426 5.11386 10.6618 4.71212 10.2751C4.54631 10.116 4.55037 9.88459 4.70682 9.73454C4.85736 9.58993 5.08675 9.59054 5.25225 9.7421C5.45545 9.92846 5.6543 10.119 5.86468 10.3169L6.51388 9.51249C6.91053 9.02038 7.30739 8.52828 7.70446 8.03617C7.8098 7.90548 7.94507 7.8474 8.11555 7.88703C8.27295 7.92394 8.36489 8.02589 8.40229 8.17473C8.43595 8.3151 8.37112 8.42794 8.2851 8.53534C7.57678 9.41185 6.86929 10.2892 6.16263 11.1673L5.94135 11.4393Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M13.3881 20.659C13.251 20.8968 13.1229 21.1249 12.9867 21.3484C12.9689 21.3787 12.9082 21.3944 12.8677 21.3944C11.8352 21.3944 10.8028 21.3929 9.7706 21.3899C9.67211 21.3899 9.57331 21.3996 9.47545 21.3929C9.38128 21.387 9.2929 21.3467 9.22805 21.2801C9.1632 21.2136 9.12665 21.1257 9.12575 21.0341C9.12476 20.94 9.15999 20.8488 9.22455 20.7786C9.28911 20.7083 9.37835 20.6639 9.47482 20.6541C9.50069 20.6517 9.52687 20.6511 9.55274 20.6511H13.2881C13.3161 20.652 13.3454 20.656 13.3881 20.659Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M12.431 22.6826C12.2692 23.0154 12.378 23.2426 12.7404 23.4026C12.695 23.4141 12.6489 23.4227 12.6024 23.4283C11.5855 23.4283 10.5684 23.4283 9.55113 23.4283C9.23167 23.4283 9.03718 23.1627 9.15998 22.9013C9.22231 22.7722 9.3261 22.6859 9.47165 22.6853C10.4531 22.6808 11.4333 22.6826 12.431 22.6826Z",
      fill: fill
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M11.0956 1.80365C11.0962 1.90451 11.0761 2.00446 11.0364 2.09769C10.9968 2.19093 10.9384 2.27556 10.8647 2.34667C10.791 2.41777 10.7035 2.47392 10.6072 2.51184C10.5109 2.54976 10.4078 2.56869 10.3039 2.56752C10.1463 2.56811 9.99202 2.52318 9.86075 2.43844C9.72948 2.3537 9.62714 2.23298 9.56674 2.09163C9.50634 1.95028 9.49062 1.79469 9.52157 1.64465C9.55252 1.4946 9.62874 1.35688 9.74055 1.24899C9.85235 1.14111 9.99469 1.06794 10.1495 1.03879C10.3042 1.00963 10.4644 1.02582 10.6097 1.08528C10.7549 1.14474 10.8787 1.24479 10.9652 1.37271C11.0517 1.50063 11.0971 1.65063 11.0956 1.80365Z",
      fill: fill
    })]
  });
};

/***/ }),

/***/ 72210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DryRunIcon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["fill", "height", "width"];

function cov_vxofcpqio() {
  var path = "/workspace/meshplay/ui/assets/icons/DryRunIcon.js";
  var hash = "a087b39129c5326379c11deb4fbb820160aed8fb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/DryRunIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 13,
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
            line: 8,
            column: 6
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 8
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
            column: 23
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 4,
            column: 9
          },
          end: {
            line: 4,
            column: 23
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
            column: 15
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
            column: 15
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
            column: 14
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 6,
            column: 10
          },
          end: {
            line: 6,
            column: 14
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
    hash: "a087b39129c5326379c11deb4fbb820160aed8fb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_vxofcpqio = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_vxofcpqio();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



cov_vxofcpqio().s[0]++;
const DryRunIcon = _ref => {
  let {
    fill = (cov_vxofcpqio().b[0][0]++, "currentColor"),
    height = (cov_vxofcpqio().b[1][0]++, "20"),
    width = (cov_vxofcpqio().b[2][0]++, "20")
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  cov_vxofcpqio().f[0]++;
  cov_vxofcpqio().s[1]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", _objectSpread(_objectSpread({
    width: height,
    height: width,
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M26.2533 20.4933L27.7733 19.16L26.44 16.8533L24.5067 17.5067C24.08 17.1467 23.6 16.8667 23.0667 16.6667L22.6667 14.6667H20L19.6 16.6533C19.0667 16.8533 18.5867 17.1333 18.16 17.4933L16.2267 16.84L14.8933 19.1467L16.4133 20.48C16.3067 21.1467 16.3067 21.4933 16.4133 22.16L14.8933 23.4933L16.2267 25.8L18.16 25.1467C18.5867 25.5067 19.0667 25.7867 19.6 25.9867L20 28H22.6667L23.0667 26.0133C23.6 25.8133 24.08 25.5333 24.5067 25.1733L26.44 25.8267L27.7733 23.52L26.2533 22.1867C26.36 21.5067 26.36 21.16 26.2533 20.4933ZM21.3333 24C19.8667 24 18.6667 22.8 18.6667 21.3333C18.6667 19.8667 19.8667 18.6667 21.3333 18.6667C22.8 18.6667 24 19.8667 24 21.3333C24 22.8 22.8 24 21.3333 24ZM10.6667 5.33333V12.5467L13.8133 15.6933L15.2 13.3067L13.3333 11.4533V5.33333H10.6667ZM24 12C24 5.37333 18.6267 0 12 0C8.22667 0 4.86667 1.76 2.66667 4.48V1.33333H0V9.33333H8V6.66667H4.34667C6.04 4.25333 8.84 2.66667 12 2.66667C17.1467 2.66667 21.3333 6.85333 21.3333 12H24ZM10.48 21.2133C6.49333 20.56 3.34667 17.3467 2.77333 13.3333H0.0799999C0.746667 19.3333 5.82667 24 12 24C12.0267 24 12.0667 24 12.0933 24L10.48 21.2133Z",
      fill: fill
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DryRunIcon);

/***/ }),

/***/ 76687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_2h071m6xpe() {
  var path = "/workspace/meshplay/ui/assets/icons/FinishFlagIcon.js";
  var hash = "9a90ec2ae4770225eac2425d80bd471018235e71";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/FinishFlagIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 39,
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
            line: 39,
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
            line: 3,
            column: 41
          },
          end: {
            line: 3,
            column: 57
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 48
          },
          end: {
            line: 3,
            column: 57
          }
        }],
        line: 3
      },
      "1": {
        loc: {
          start: {
            line: 3,
            column: 59
          },
          end: {
            line: 3,
            column: 69
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 67
          },
          end: {
            line: 3,
            column: 69
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
      "0": [0],
      "1": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9a90ec2ae4770225eac2425d80bd471018235e71"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2h071m6xpe = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2h071m6xpe();



cov_2h071m6xpe().s[0]++;

const FinishFlagIcon = ({
  width,
  height,
  fill = (cov_2h071m6xpe().b[0][0]++, '#3C494F'),
  style = (cov_2h071m6xpe().b[1][0]++, {})
}) => {
  cov_2h071m6xpe().f[0]++;
  cov_2h071m6xpe().s[1]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: width,
    height: height,
    viewBox: "0 0 58 47",
    fill: "none",
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
      opacity: "0.8",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
        clipPath: "url(#clip0_13635_37792)",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M41.4522 15.9843L40.8228 18.6504L37.6294 18.1583L38.2769 15.4128L35.8796 14.848L36.4443 12.4484L38.8451 13.0143L38.2815 15.4128L41.4522 15.9843ZM37.0658 20.5568L37.6317 18.1605L35.232 17.5935L34.6662 19.9897L37.0658 20.5568ZM48.7656 25.8357L48.2485 26.0262C46.332 27.353 44.2408 27.4347 43.0319 27.1489C40.4157 26.5309 39.3395 24.2571 39.2953 24.163C38.4391 22.8464 37.3368 22.0072 36.0406 21.7021C33.6399 21.1362 31.3366 22.5935 31.3117 22.6116L30.7515 22.9745L27.1271 38.352L25.5848 37.9914L32.0386 10.6056C31.7585 10.4842 31.5895 10.1837 31.6621 9.87527C31.7449 9.52485 32.093 9.31052 32.4423 9.39217L33.7147 9.69383C34.0617 9.77321 34.2783 10.1236 34.1955 10.474C34.1264 10.7655 33.8701 10.9515 33.582 10.9605L33.4062 11.7011L33.4278 11.6931C35.5337 10.8165 37.3629 10.5523 38.8621 10.9084C41.5849 11.5514 42.2574 13.9544 42.2846 14.0565C42.8335 16.1386 44.0174 16.828 44.9133 17.039C45.2977 17.1286 45.5654 17.1104 45.5654 17.1104C48.0047 17.2703 49.818 16.5026 50.52 16.261C51.2197 16.0195 50.7241 17.3338 50.7241 17.3338L48.7656 25.8357ZM49.0922 17.3032L48.9459 17.9235L49.9813 18.0517L50.2671 16.836C49.9824 16.9301 49.5515 17.1887 49.0922 17.3032ZM32.084 21.5944L31.6519 21.4935L31.577 21.8201C31.7188 21.7509 31.8957 21.6715 32.084 21.5944ZM39.6378 23.6776L39.7637 23.1435L39.2942 23.2138C39.4121 23.3612 39.53 23.5155 39.6378 23.6776ZM42.068 24.121L42.5613 22.0242L45.3318 22.5039L45.8954 20.1054L43.1249 19.6302L43.7101 17.1422C43.4742 16.997 43.2338 16.811 43.0013 16.574L41.4522 15.9866L41.8106 14.4534C41.7868 14.3683 41.7607 14.2878 41.7369 14.2005C41.7289 14.1721 41.6666 13.951 41.5112 13.6414L38.8451 13.0143L39.1774 11.5888C39.039 11.5389 38.8893 11.4958 38.7317 11.4584C38.117 11.3132 37.4366 11.2905 36.6972 11.3745L36.4421 12.4484L34.3384 11.9506C34.1536 12.0175 33.971 12.0844 33.7805 12.1615L33.3053 14.2402L35.8796 14.848L35.232 17.5935L32.6793 16.9913L32.1316 19.3921L34.6662 19.9897L34.4235 21.0285C34.9803 20.9866 35.57 21.0092 36.1733 21.1499C36.4137 21.2088 36.6451 21.2882 36.8741 21.3744L37.0658 20.5568L40.2513 21.0727L40.8228 18.6504L43.1227 19.628L42.5579 22.0231L40.2524 21.0739L39.7852 23.0584L42.068 24.121ZM48.3619 25.06L48.3767 24.9976L47.2902 24.9455L47.7756 22.877L48.8359 23.0097L49.429 20.4411L48.3404 20.4774L48.9437 17.9281L47.5545 17.6003C47.2041 17.6491 46.84 17.6774 46.4692 17.6922L45.8988 20.1043L48.3438 20.4785L47.7756 22.877L45.334 22.5039L44.8407 24.6007L42.0419 24.2333L41.6405 25.9412C42.068 26.2213 42.5715 26.4594 43.1624 26.5989C43.5389 26.6874 43.9324 26.7293 44.3384 26.7293L44.8407 24.6007L47.2902 24.9455L47.0033 26.1623L48.3619 25.06Z",
          fill: fill
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
        clipPath: "url(#clip1_13635_37792)",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M16.5478 15.9848L17.1772 18.6509L20.3706 18.1588L19.7231 15.4133L22.1204 14.8485L21.5557 12.4489L19.1549 13.0148L19.7185 15.4133L16.5478 15.9848ZM20.9342 20.5572L20.3683 18.161L22.768 17.594L23.3338 19.9902L20.9342 20.5572ZM9.23437 25.8362L9.75149 26.0267C11.668 27.3535 13.7592 27.4352 14.9681 27.1494C17.5843 26.5313 18.6605 24.2576 18.7047 24.1635C19.5609 22.8469 20.6632 22.0077 21.9594 21.7026C24.3601 21.1367 26.6634 22.594 26.6883 22.6121L27.2485 22.975L30.8729 38.3525L32.4152 37.9919L25.9614 10.6061C26.2415 10.4847 26.4105 10.1842 26.3379 9.87576C26.2551 9.52534 25.907 9.31101 25.5577 9.39266L24.2853 9.69431C23.9383 9.7737 23.7217 10.1241 23.8045 10.4745C23.8736 10.766 24.1299 10.952 24.418 10.961L24.5938 11.7016L24.5722 11.6936C22.4663 10.817 20.6371 10.5528 19.1379 10.9089C16.4151 11.5519 15.7426 13.9549 15.7154 14.057C15.1665 16.139 13.9826 16.8285 13.0867 17.0395C12.7023 17.1291 12.4346 17.1109 12.4346 17.1109C9.99531 17.2708 8.18199 16.5031 7.48002 16.2615C6.78032 16.02 7.27589 17.3343 7.27589 17.3343L9.23437 25.8362ZM8.90777 17.3037L9.05406 17.924L8.01869 18.0522L7.73291 16.8365C8.01755 16.9306 8.44849 17.1892 8.90777 17.3037ZM25.916 21.5949L26.3481 21.494L26.423 21.8206C26.2812 21.7514 26.1043 21.672 25.916 21.5949ZM18.3622 23.6781L18.2363 23.144L18.7058 23.2143C18.5879 23.3617 18.47 23.5159 18.3622 23.6781ZM15.932 24.1215L15.4387 22.0247L12.6682 22.5044L12.1046 20.1059L14.8751 19.6307L14.2899 17.1427C14.5258 16.9975 14.7662 16.8115 14.9987 16.5745L16.5478 15.9871L16.1894 14.4539C16.2132 14.3688 16.2393 14.2883 16.2631 14.201C16.2711 14.1726 16.3334 13.9515 16.4888 13.6419L19.1549 13.0148L18.8226 11.5893C18.961 11.5394 19.1107 11.4963 19.2683 11.4589C19.883 11.3137 20.5634 11.291 21.3028 11.375L21.5579 12.4489L23.6616 11.951C23.8464 12.018 24.029 12.0849 24.2195 12.162L24.6947 14.2407L22.1204 14.8485L22.768 17.594L25.3207 16.9918L25.8684 19.3926L23.3338 19.9902L23.5765 21.029C23.0197 20.987 22.43 21.0097 21.8267 21.1503C21.5863 21.2093 21.3549 21.2887 21.1259 21.3749L20.9342 20.5572L17.7487 21.0732L17.1772 18.6509L14.8773 19.6285L15.4421 22.0236L17.7476 21.0744L18.2148 23.0589L15.932 24.1215ZM9.63809 25.0605L9.62335 24.9981L10.7098 24.946L10.2244 22.8775L9.16406 23.0102L8.57096 20.4416L9.65964 20.4779L9.05633 17.9285L10.4455 17.6008C10.7959 17.6496 11.16 17.6779 11.5308 17.6927L12.1012 20.1048L9.65623 20.479L10.2244 22.8775L12.666 22.5044L13.1593 24.6012L15.9581 24.2338L16.3595 25.9416C15.932 26.2218 15.4285 26.4599 14.8376 26.5994C14.4611 26.6878 14.0676 26.7298 13.6616 26.7298L13.1593 24.6012L10.7098 24.946L10.9967 26.1628L9.63809 25.0605Z",
          fill: fill
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("defs", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("clipPath", {
        id: "clip0_13635_37792",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
          width: "33.19",
          height: "33.19",
          fill: "white",
          transform: "translate(34.5312) rotate(45)"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("clipPath", {
        id: "clip1_13635_37792",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
          width: "33.19",
          height: "33.19",
          fill: "white",
          transform: "matrix(-0.707107 0.707107 0.707107 0.707107 23.4688 0.000488281)"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinishFlagIcon);

/***/ }),

/***/ 99889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function cov_23jp1xb7dv() {
  var path = "/workspace/meshplay/ui/assets/icons/InfoOutlined.js";
  var hash = "d50c2a88f74f436e7bd10df6a902594d2d884377";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/InfoOutlined.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 17,
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
            column: 25
          },
          end: {
            line: 3,
            column: 26
          }
        },
        loc: {
          start: {
            line: 3,
            column: 74
          },
          end: {
            line: 18,
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
            line: 3,
            column: 43
          },
          end: {
            line: 3,
            column: 53
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 51
          },
          end: {
            line: 3,
            column: 53
          }
        }],
        line: 3
      },
      "1": {
        loc: {
          start: {
            line: 3,
            column: 55
          },
          end: {
            line: 3,
            column: 67
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 65
          },
          end: {
            line: 3,
            column: 67
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
      "0": [0],
      "1": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d50c2a88f74f436e7bd10df6a902594d2d884377"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23jp1xb7dv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_23jp1xb7dv();


cov_23jp1xb7dv().s[0]++;

const InfoOutlinedIcon = ({
  height,
  width,
  style = (cov_23jp1xb7dv().b[0][0]++, {}),
  className = (cov_23jp1xb7dv().b[1][0]++, {})
}) => {
  cov_23jp1xb7dv().f[0]++;
  cov_23jp1xb7dv().s[1]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: height,
    viewBox: "0 0 24 24",
    width: width,
    style: style,
    className: className,
    fill: "currentColor",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoOutlinedIcon);

/***/ }),

/***/ 39777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p2": () => (/* binding */ DeployStepper),
/* harmony export */   "sh": () => (/* binding */ UnDeployStepper)
/* harmony export */ });
/* unused harmony exports ValidateContent, FinishDeploymentStep, UpdateDeploymentStepper */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ValidateDesign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48421);
/* harmony import */ var _DryRun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89671);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90856);
/* harmony import */ var _assets_icons_DryRunIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72210);
/* harmony import */ var _assets_icons_DeploymentSelectorIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11948);
/* harmony import */ var _assets_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39554);
/* harmony import */ var lib_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68885);
/* harmony import */ var _SelectDeploymentTarget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44307);
/* harmony import */ var _finalizeDeployment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35371);
/* harmony import */ var _store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62197);
/* harmony import */ var machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(58349);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37579);
/* harmony import */ var _NotificationCenter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38610);
/* harmony import */ var machines_operationsCenter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57920);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_icons_FinishFlagIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(76687);
/* harmony import */ var _DeploymentSummary__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(75871);
/* harmony import */ var _NotificationCenter_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(31409);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ValidateDesign__WEBPACK_IMPORTED_MODULE_1__, _DryRun__WEBPACK_IMPORTED_MODULE_2__, _common__WEBPACK_IMPORTED_MODULE_4__, _SelectDeploymentTarget__WEBPACK_IMPORTED_MODULE_9__, machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_12__, _NotificationCenter__WEBPACK_IMPORTED_MODULE_14__, machines_operationsCenter__WEBPACK_IMPORTED_MODULE_15__, _DeploymentSummary__WEBPACK_IMPORTED_MODULE_18__]);
([_ValidateDesign__WEBPACK_IMPORTED_MODULE_1__, _DryRun__WEBPACK_IMPORTED_MODULE_2__, _common__WEBPACK_IMPORTED_MODULE_4__, _SelectDeploymentTarget__WEBPACK_IMPORTED_MODULE_9__, machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_12__, _NotificationCenter__WEBPACK_IMPORTED_MODULE_14__, machines_operationsCenter__WEBPACK_IMPORTED_MODULE_15__, _DeploymentSummary__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_2pr8m6xd7k() {
  var path = "/workspace/meshplay/ui/components/DesignLifeCycle/DeployStepper.js";
  var hash = "b7af1be694d68285326a29ee1615e19eb67ad30f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/DesignLifeCycle/DeployStepper.js",
    statementMap: {
      "0": {
        start: {
          line: 42,
          column: 31
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "1": {
        start: {
          line: 47,
          column: 20
        },
        end: {
          line: 50,
          column: 2
        }
      },
      "2": {
        start: {
          line: 52,
          column: 20
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "3": {
        start: {
          line: 54,
          column: 36
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "4": {
        start: {
          line: 60,
          column: 36
        },
        end: {
          line: 118,
          column: 1
        }
      },
      "5": {
        start: {
          line: 61,
          column: 39
        },
        end: {
          line: 61,
          column: 76
        }
      },
      "6": {
        start: {
          line: 63,
          column: 40
        },
        end: {
          line: 63,
          column: 55
        }
      },
      "7": {
        start: {
          line: 64,
          column: 40
        },
        end: {
          line: 64,
          column: 50
        }
      },
      "8": {
        start: {
          line: 65,
          column: 40
        },
        end: {
          line: 65,
          column: 54
        }
      },
      "9": {
        start: {
          line: 67,
          column: 2
        },
        end: {
          line: 75,
          column: 9
        }
      },
      "10": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 74,
          column: 5
        }
      },
      "11": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 27
        }
      },
      "12": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 27
        }
      },
      "13": {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 72,
          column: 28
        }
      },
      "14": {
        start: {
          line: 73,
          column: 6
        },
        end: {
          line: 73,
          column: 28
        }
      },
      "15": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 97,
          column: 9
        }
      },
      "16": {
        start: {
          line: 78,
          column: 25
        },
        end: {
          line: 94,
          column: 5
        }
      },
      "17": {
        start: {
          line: 81,
          column: 28
        },
        end: {
          line: 81,
          column: 44
        }
      },
      "18": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 92,
          column: 9
        }
      },
      "19": {
        start: {
          line: 83,
          column: 10
        },
        end: {
          line: 83,
          column: 32
        }
      },
      "20": {
        start: {
          line: 84,
          column: 10
        },
        end: {
          line: 84,
          column: 38
        }
      },
      "21": {
        start: {
          line: 85,
          column: 10
        },
        end: {
          line: 91,
          column: 11
        }
      },
      "22": {
        start: {
          line: 90,
          column: 12
        },
        end: {
          line: 90,
          column: 65
        }
      },
      "23": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 96,
          column: 44
        }
      },
      "24": {
        start: {
          line: 96,
          column: 17
        },
        end: {
          line: 96,
          column: 43
        }
      },
      "25": {
        start: {
          line: 99,
          column: 26
        },
        end: {
          line: 99,
          column: 69
        }
      },
      "26": {
        start: {
          line: 101,
          column: 2
        },
        end: {
          line: 103,
          column: 3
        }
      },
      "27": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 49
        }
      },
      "28": {
        start: {
          line: 105,
          column: 2
        },
        end: {
          line: 111,
          column: 3
        }
      },
      "29": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 110,
          column: 6
        }
      },
      "30": {
        start: {
          line: 113,
          column: 2
        },
        end: {
          line: 115,
          column: 3
        }
      },
      "31": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 16
        }
      },
      "32": {
        start: {
          line: 117,
          column: 2
        },
        end: {
          line: 117,
          column: 60
        }
      },
      "33": {
        start: {
          line: 120,
          column: 25
        },
        end: {
          line: 133,
          column: 1
        }
      },
      "34": {
        start: {
          line: 121,
          column: 23
        },
        end: {
          line: 121,
          column: 78
        }
      },
      "35": {
        start: {
          line: 121,
          column: 52
        },
        end: {
          line: 121,
          column: 77
        }
      },
      "36": {
        start: {
          line: 122,
          column: 34
        },
        end: {
          line: 124,
          column: 3
        }
      },
      "37": {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 40
        }
      },
      "38": {
        start: {
          line: 125,
          column: 34
        },
        end: {
          line: 125,
          column: 92
        }
      },
      "39": {
        start: {
          line: 125,
          column: 63
        },
        end: {
          line: 125,
          column: 91
        }
      },
      "40": {
        start: {
          line: 126,
          column: 2
        },
        end: {
          line: 132,
          column: 4
        }
      },
      "41": {
        start: {
          line: 135,
          column: 19
        },
        end: {
          line: 178,
          column: 1
        }
      },
      "42": {
        start: {
          line: 147,
          column: 27
        },
        end: {
          line: 147,
          column: 48
        }
      },
      "43": {
        start: {
          line: 148,
          column: 33
        },
        end: {
          line: 148,
          column: 69
        }
      },
      "44": {
        start: {
          line: 148,
          column: 39
        },
        end: {
          line: 148,
          column: 69
        }
      },
      "45": {
        start: {
          line: 149,
          column: 36
        },
        end: {
          line: 149,
          column: 86
        }
      },
      "46": {
        start: {
          line: 149,
          column: 42
        },
        end: {
          line: 149,
          column: 86
        }
      },
      "47": {
        start: {
          line: 151,
          column: 2
        },
        end: {
          line: 177,
          column: 4
        }
      },
      "48": {
        start: {
          line: 181,
          column: 39
        },
        end: {
          line: 360,
          column: 1
        }
      },
      "49": {
        start: {
          line: 188,
          column: 56
        },
        end: {
          line: 188,
          column: 71
        }
      },
      "50": {
        start: {
          line: 189,
          column: 42
        },
        end: {
          line: 189,
          column: 57
        }
      },
      "51": {
        start: {
          line: 190,
          column: 50
        },
        end: {
          line: 190,
          column: 65
        }
      },
      "52": {
        start: {
          line: 192,
          column: 31
        },
        end: {
          line: 192,
          column: 65
        }
      },
      "53": {
        start: {
          line: 193,
          column: 27
        },
        end: {
          line: 193,
          column: 67
        }
      },
      "54": {
        start: {
          line: 194,
          column: 23
        },
        end: {
          line: 194,
          column: 68
        }
      },
      "55": {
        start: {
          line: 195,
          column: 28
        },
        end: {
          line: 195,
          column: 73
        }
      },
      "56": {
        start: {
          line: 196,
          column: 23
        },
        end: {
          line: 196,
          column: 63
        }
      },
      "57": {
        start: {
          line: 197,
          column: 16
        },
        end: {
          line: 197,
          column: 26
        }
      },
      "58": {
        start: {
          line: 199,
          column: 33
        },
        end: {
          line: 199,
          column: 80
        }
      },
      "59": {
        start: {
          line: 200,
          column: 42
        },
        end: {
          line: 202,
          column: 3
        }
      },
      "60": {
        start: {
          line: 201,
          column: 23
        },
        end: {
          line: 201,
          column: 48
        }
      },
      "61": {
        start: {
          line: 204,
          column: 34
        },
        end: {
          line: 204,
          column: 71
        }
      },
      "62": {
        start: {
          line: 205,
          column: 25
        },
        end: {
          line: 210,
          column: 3
        }
      },
      "63": {
        start: {
          line: 206,
          column: 4
        },
        end: {
          line: 209,
          column: 7
        }
      },
      "64": {
        start: {
          line: 211,
          column: 24
        },
        end: {
          line: 295,
          column: 4
        }
      },
      "65": {
        start: {
          line: 297,
          column: 27
        },
        end: {
          line: 325,
          column: 3
        }
      },
      "66": {
        start: {
          line: 299,
          column: 23
        },
        end: {
          line: 299,
          column: 27
        }
      },
      "67": {
        start: {
          line: 301,
          column: 24
        },
        end: {
          line: 301,
          column: 50
        }
      },
      "68": {
        start: {
          line: 304,
          column: 23
        },
        end: {
          line: 304,
          column: 43
        }
      },
      "69": {
        start: {
          line: 306,
          column: 24
        },
        end: {
          line: 306,
          column: 50
        }
      },
      "70": {
        start: {
          line: 309,
          column: 23
        },
        end: {
          line: 309,
          column: 79
        }
      },
      "71": {
        start: {
          line: 311,
          column: 24
        },
        end: {
          line: 311,
          column: 50
        }
      },
      "72": {
        start: {
          line: 314,
          column: 23
        },
        end: {
          line: 314,
          column: 27
        }
      },
      "73": {
        start: {
          line: 317,
          column: 8
        },
        end: {
          line: 317,
          column: 35
        }
      },
      "74": {
        start: {
          line: 321,
          column: 23
        },
        end: {
          line: 321,
          column: 27
        }
      },
      "75": {
        start: {
          line: 327,
          column: 20
        },
        end: {
          line: 327,
          column: 74
        }
      },
      "76": {
        start: {
          line: 328,
          column: 25
        },
        end: {
          line: 328,
          column: 82
        }
      },
      "77": {
        start: {
          line: 330,
          column: 2
        },
        end: {
          line: 359,
          column: 4
        }
      },
      "78": {
        start: {
          line: 362,
          column: 29
        },
        end: {
          line: 370,
          column: 1
        }
      },
      "79": {
        start: {
          line: 363,
          column: 2
        },
        end: {
          line: 369,
          column: 4
        }
      },
      "80": {
        start: {
          line: 372,
          column: 31
        },
        end: {
          line: 380,
          column: 1
        }
      },
      "81": {
        start: {
          line: 373,
          column: 2
        },
        end: {
          line: 379,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 54,
            column: 3
          },
          end: {
            line: 54,
            column: 4
          }
        },
        loc: {
          start: {
            line: 54,
            column: 36
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 54
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 60,
            column: 36
          },
          end: {
            line: 60,
            column: 37
          }
        },
        loc: {
          start: {
            line: 60,
            column: 95
          },
          end: {
            line: 118,
            column: 1
          }
        },
        line: 60
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 67,
            column: 12
          },
          end: {
            line: 67,
            column: 13
          }
        },
        loc: {
          start: {
            line: 67,
            column: 18
          },
          end: {
            line: 75,
            column: 3
          }
        },
        line: 67
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 77,
            column: 12
          },
          end: {
            line: 77,
            column: 13
          }
        },
        loc: {
          start: {
            line: 77,
            column: 18
          },
          end: {
            line: 97,
            column: 3
          }
        },
        line: 77
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 80,
            column: 7
          }
        },
        loc: {
          start: {
            line: 80,
            column: 17
          },
          end: {
            line: 93,
            column: 7
          }
        },
        line: 80
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 96,
            column: 11
          },
          end: {
            line: 96,
            column: 12
          }
        },
        loc: {
          start: {
            line: 96,
            column: 17
          },
          end: {
            line: 96,
            column: 43
          }
        },
        line: 96
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 120,
            column: 25
          },
          end: {
            line: 120,
            column: 26
          }
        },
        loc: {
          start: {
            line: 120,
            column: 31
          },
          end: {
            line: 133,
            column: 1
          }
        },
        line: 120
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 121,
            column: 41
          },
          end: {
            line: 121,
            column: 42
          }
        },
        loc: {
          start: {
            line: 121,
            column: 52
          },
          end: {
            line: 121,
            column: 77
          }
        },
        line: 121
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 122,
            column: 52
          },
          end: {
            line: 122,
            column: 53
          }
        },
        loc: {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 40
          }
        },
        line: 123
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 125,
            column: 52
          },
          end: {
            line: 125,
            column: 53
          }
        },
        loc: {
          start: {
            line: 125,
            column: 63
          },
          end: {
            line: 125,
            column: 91
          }
        },
        line: 125
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 135,
            column: 19
          },
          end: {
            line: 135,
            column: 20
          }
        },
        loc: {
          start: {
            line: 146,
            column: 6
          },
          end: {
            line: 178,
            column: 1
          }
        },
        line: 146
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 148,
            column: 33
          },
          end: {
            line: 148,
            column: 34
          }
        },
        loc: {
          start: {
            line: 148,
            column: 39
          },
          end: {
            line: 148,
            column: 69
          }
        },
        line: 148
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 149,
            column: 36
          },
          end: {
            line: 149,
            column: 37
          }
        },
        loc: {
          start: {
            line: 149,
            column: 42
          },
          end: {
            line: 149,
            column: 86
          }
        },
        line: 149
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 181,
            column: 39
          },
          end: {
            line: 181,
            column: 40
          }
        },
        loc: {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 360,
            column: 1
          }
        },
        line: 187
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 201,
            column: 5
          }
        },
        loc: {
          start: {
            line: 201,
            column: 23
          },
          end: {
            line: 201,
            column: 48
          }
        },
        line: 201
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 205,
            column: 25
          },
          end: {
            line: 205,
            column: 26
          }
        },
        loc: {
          start: {
            line: 205,
            column: 31
          },
          end: {
            line: 210,
            column: 3
          }
        },
        line: 205
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 299,
            column: 17
          },
          end: {
            line: 299,
            column: 18
          }
        },
        loc: {
          start: {
            line: 299,
            column: 23
          },
          end: {
            line: 299,
            column: 27
          }
        },
        line: 299
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 301,
            column: 18
          },
          end: {
            line: 301,
            column: 19
          }
        },
        loc: {
          start: {
            line: 301,
            column: 24
          },
          end: {
            line: 301,
            column: 50
          }
        },
        line: 301
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 304,
            column: 17
          },
          end: {
            line: 304,
            column: 18
          }
        },
        loc: {
          start: {
            line: 304,
            column: 23
          },
          end: {
            line: 304,
            column: 43
          }
        },
        line: 304
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 306,
            column: 18
          },
          end: {
            line: 306,
            column: 19
          }
        },
        loc: {
          start: {
            line: 306,
            column: 24
          },
          end: {
            line: 306,
            column: 50
          }
        },
        line: 306
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 309,
            column: 17
          },
          end: {
            line: 309,
            column: 18
          }
        },
        loc: {
          start: {
            line: 309,
            column: 23
          },
          end: {
            line: 309,
            column: 79
          }
        },
        line: 309
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 311,
            column: 18
          },
          end: {
            line: 311,
            column: 19
          }
        },
        loc: {
          start: {
            line: 311,
            column: 24
          },
          end: {
            line: 311,
            column: 50
          }
        },
        line: 311
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 314,
            column: 17
          },
          end: {
            line: 314,
            column: 18
          }
        },
        loc: {
          start: {
            line: 314,
            column: 23
          },
          end: {
            line: 314,
            column: 27
          }
        },
        line: 314
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 316,
            column: 18
          },
          end: {
            line: 316,
            column: 19
          }
        },
        loc: {
          start: {
            line: 316,
            column: 24
          },
          end: {
            line: 318,
            column: 7
          }
        },
        line: 316
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 321,
            column: 17
          },
          end: {
            line: 321,
            column: 18
          }
        },
        loc: {
          start: {
            line: 321,
            column: 23
          },
          end: {
            line: 321,
            column: 27
          }
        },
        line: 321
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 362,
            column: 29
          },
          end: {
            line: 362,
            column: 30
          }
        },
        loc: {
          start: {
            line: 363,
            column: 2
          },
          end: {
            line: 369,
            column: 4
          }
        },
        line: 363
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 372,
            column: 31
          },
          end: {
            line: 372,
            column: 32
          }
        },
        loc: {
          start: {
            line: 373,
            column: 2
          },
          end: {
            line: 379,
            column: 4
          }
        },
        line: 373
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 57,
            column: 19
          },
          end: {
            line: 57,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 57,
            column: 19
          },
          end: {
            line: 57,
            column: 34
          }
        }, {
          start: {
            line: 57,
            column: 38
          },
          end: {
            line: 57,
            column: 70
          }
        }],
        line: 57
      },
      "1": {
        loc: {
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 92,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 92,
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
        line: 82
      },
      "2": {
        loc: {
          start: {
            line: 85,
            column: 10
          },
          end: {
            line: 91,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 85,
            column: 10
          },
          end: {
            line: 91,
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
        line: 85
      },
      "3": {
        loc: {
          start: {
            line: 86,
            column: 12
          },
          end: {
            line: 88,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 86,
            column: 12
          },
          end: {
            line: 86,
            column: 24
          }
        }, {
          start: {
            line: 87,
            column: 12
          },
          end: {
            line: 87,
            column: 52
          }
        }, {
          start: {
            line: 88,
            column: 12
          },
          end: {
            line: 88,
            column: 43
          }
        }],
        line: 86
      },
      "4": {
        loc: {
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 103,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 103,
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
        line: 101
      },
      "5": {
        loc: {
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 111,
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
        line: 105
      },
      "6": {
        loc: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 115,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 115,
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
        line: 113
      },
      "7": {
        loc: {
          start: {
            line: 147,
            column: 27
          },
          end: {
            line: 147,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 147,
            column: 27
          },
          end: {
            line: 147,
            column: 39
          }
        }, {
          start: {
            line: 147,
            column: 43
          },
          end: {
            line: 147,
            column: 48
          }
        }],
        line: 147
      },
      "8": {
        loc: {
          start: {
            line: 162,
            column: 7
          },
          end: {
            line: 168,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 162,
            column: 7
          },
          end: {
            line: 162,
            column: 56
          }
        }, {
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 167,
            column: 10
          }
        }],
        line: 162
      },
      "9": {
        loc: {
          start: {
            line: 309,
            column: 40
          },
          end: {
            line: 309,
            column: 78
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 309,
            column: 40
          },
          end: {
            line: 309,
            column: 62
          }
        }, {
          start: {
            line: 309,
            column: 66
          },
          end: {
            line: 309,
            column: 78
          }
        }],
        line: 309
      },
      "10": {
        loc: {
          start: {
            line: 342,
            column: 10
          },
          end: {
            line: 343,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 342,
            column: 10
          },
          end: {
            line: 342,
            column: 65
          }
        }, {
          start: {
            line: 343,
            column: 10
          },
          end: {
            line: 343,
            column: 49
          }
        }],
        line: 342
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
      "81": 0
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b7af1be694d68285326a29ee1615e19eb67ad30f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pr8m6xd7k = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2pr8m6xd7k();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























const ValidateContent = (cov_2pr8m6xd7k().s[0]++, {
  btnText: 'Next',
  cancel: true
});
const StepWrapper = (cov_2pr8m6xd7k().s[1]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.styled)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.Box)({
  padding: 0,
  overflowY: 'auto'
}));
const StepContent = (cov_2pr8m6xd7k().s[2]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.styled)('div', {// shouldForwardProp: (prop) => prop !== 'backgroundColor',
})(({
  theme,
  backgroundColor
}) => {
  cov_2pr8m6xd7k().f[0]++;
  cov_2pr8m6xd7k().s[3]++;
  return {
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(2),
    backgroundColor: (cov_2pr8m6xd7k().b[0][0]++, backgroundColor) || (cov_2pr8m6xd7k().b[0][1]++, theme.palette.background.default)
  };
}));
cov_2pr8m6xd7k().s[4]++;
const FinishDeploymentStep = ({
  perform_deployment,
  deployment_type,
  autoOpenView
}) => {
  cov_2pr8m6xd7k().f[1]++;
  const {
    operationsCenterActorRef
  } = (cov_2pr8m6xd7k().s[5]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_NotificationCenter__WEBPACK_IMPORTED_MODULE_14__/* .NotificationCenterContext */ .Fk));
  const [isDeploying, setIsDeploying] = (cov_2pr8m6xd7k().s[6]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  const [deployEvent, setDeployEvent] = (cov_2pr8m6xd7k().s[7]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)());
  const [deployError, setDeployError] = (cov_2pr8m6xd7k().s[8]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null));
  cov_2pr8m6xd7k().s[9]++;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    cov_2pr8m6xd7k().f[2]++;
    cov_2pr8m6xd7k().s[10]++;

    try {
      cov_2pr8m6xd7k().s[11]++;
      setIsDeploying(true);
      cov_2pr8m6xd7k().s[12]++;
      perform_deployment();
    } catch (error) {
      cov_2pr8m6xd7k().s[13]++;
      setDeployError(error);
      cov_2pr8m6xd7k().s[14]++;
      setIsDeploying(false);
    }
  }, []);
  cov_2pr8m6xd7k().s[15]++;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    cov_2pr8m6xd7k().f[3]++;
    const subscription = (cov_2pr8m6xd7k().s[16]++, operationsCenterActorRef.on(machines_operationsCenter__WEBPACK_IMPORTED_MODULE_15__/* .OPERATION_CENTER_EVENTS.EVENT_RECEIVED_FROM_SERVER */ .F.EVENT_RECEIVED_FROM_SERVER, event => {
      cov_2pr8m6xd7k().f[4]++;
      const serverEvent = (cov_2pr8m6xd7k().s[17]++, event.data.event);
      cov_2pr8m6xd7k().s[18]++;

      if (serverEvent.action === deployment_type) {
        cov_2pr8m6xd7k().b[1][0]++;
        cov_2pr8m6xd7k().s[19]++;
        setIsDeploying(false);
        cov_2pr8m6xd7k().s[20]++;
        setDeployEvent(serverEvent);
        cov_2pr8m6xd7k().s[21]++;

        if ((cov_2pr8m6xd7k().b[3][0]++, autoOpenView) && (cov_2pr8m6xd7k().b[3][1]++, serverEvent.severity == _NotificationCenter_constants__WEBPACK_IMPORTED_MODULE_19__/* .SEVERITY.SUCCESS */ .bI.SUCCESS) && (cov_2pr8m6xd7k().b[3][2]++, serverEvent?.metadata?.view_url)) {
          cov_2pr8m6xd7k().b[2][0]++;
          cov_2pr8m6xd7k().s[22]++;
          window.open(serverEvent.metadata.view_url, '_blank');
        } else {
          cov_2pr8m6xd7k().b[2][1]++;
        }
      } else {
        cov_2pr8m6xd7k().b[1][1]++;
      }
    }));
    cov_2pr8m6xd7k().s[23]++;
    return () => {
      cov_2pr8m6xd7k().f[5]++;
      cov_2pr8m6xd7k().s[24]++;
      return subscription.unsubscribe();
    };
  }, []);
  const progressMessage = (cov_2pr8m6xd7k().s[25]++, `${(0,lodash__WEBPACK_IMPORTED_MODULE_16__.capitalize)(deployment_type)}ing  design`);
  cov_2pr8m6xd7k().s[26]++;

  if (isDeploying) {
    cov_2pr8m6xd7k().b[4][0]++;
    cov_2pr8m6xd7k().s[27]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_common__WEBPACK_IMPORTED_MODULE_4__.Loading, {
      message: progressMessage
    });
  } else {
    cov_2pr8m6xd7k().b[4][1]++;
  }

  cov_2pr8m6xd7k().s[28]++;

  if (deployError) {
    cov_2pr8m6xd7k().b[5][0]++;
    cov_2pr8m6xd7k().s[29]++;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.Typography, {
      variant: "h5",
      color: "error",
      children: ["Error deploying design: ", JSON.stringify(deployError)]
    });
  } else {
    cov_2pr8m6xd7k().b[5][1]++;
  }

  cov_2pr8m6xd7k().s[30]++;

  if (!deployEvent) {
    cov_2pr8m6xd7k().b[6][0]++;
    cov_2pr8m6xd7k().s[31]++;
    return null;
  } else {
    cov_2pr8m6xd7k().b[6][1]++;
  }

  cov_2pr8m6xd7k().s[32]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DeploymentSummary__WEBPACK_IMPORTED_MODULE_18__/* .DeploymentSummaryFormatter */ .$, {
    event: deployEvent
  });
};
cov_2pr8m6xd7k().s[33]++;

const SelectTargetStep = () => {
  cov_2pr8m6xd7k().f[6]++;
  const organization = (cov_2pr8m6xd7k().s[34]++, (0,lib_store__WEBPACK_IMPORTED_MODULE_8__/* .useLegacySelector */ .Uc)(state => {
    cov_2pr8m6xd7k().f[7]++;
    cov_2pr8m6xd7k().s[35]++;
    return state.get('organization');
  }));
  const connectionMetadataState = (cov_2pr8m6xd7k().s[36]++, (0,lib_store__WEBPACK_IMPORTED_MODULE_8__/* .useLegacySelector */ .Uc)(state => {
    cov_2pr8m6xd7k().f[8]++;
    cov_2pr8m6xd7k().s[37]++;
    return state.get('connectionMetadataState');
  }));
  const meshsyncControllerState = (cov_2pr8m6xd7k().s[38]++, (0,lib_store__WEBPACK_IMPORTED_MODULE_8__/* .useLegacySelector */ .Uc)(state => {
    cov_2pr8m6xd7k().f[9]++;
    cov_2pr8m6xd7k().s[39]++;
    return state.get('controllerState');
  }));
  cov_2pr8m6xd7k().s[40]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_SelectDeploymentTarget__WEBPACK_IMPORTED_MODULE_9__/* .DeploymentTargetContext.Provider */ .wE.Provider, {
    value: {
      connectionMetadataState,
      meshsyncControllerState,
      organization
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_SelectDeploymentTarget__WEBPACK_IMPORTED_MODULE_9__/* .SelectTargetEnvironments */ .Hq, {
      organization: organization
    })
  });
};

cov_2pr8m6xd7k().s[41]++;

const DryRunStep = ({
  handleClose,
  bypassDryRun,
  setBypassDryRun,
  dryRunErrors,
  deployment_type,
  selectedK8sContexts,
  design,
  validationMachine,
  includeDependencies,
  setIncludeDependencies
}) => {
  cov_2pr8m6xd7k().f[10]++;
  const bypassValidation = (cov_2pr8m6xd7k().s[42]++, (cov_2pr8m6xd7k().b[7][0]++, bypassDryRun) || (cov_2pr8m6xd7k().b[7][1]++, false));
  cov_2pr8m6xd7k().s[43]++;

  const toggleBypassValidation = () => {
    cov_2pr8m6xd7k().f[11]++;
    cov_2pr8m6xd7k().s[44]++;
    return setBypassDryRun(!bypassDryRun);
  };

  cov_2pr8m6xd7k().s[45]++;

  const toggleIncludeDependencies = () => {
    cov_2pr8m6xd7k().f[12]++;
    cov_2pr8m6xd7k().s[46]++;
    return setIncludeDependencies(!includeDependencies);
  };

  cov_2pr8m6xd7k().s[47]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.Box, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DryRun__WEBPACK_IMPORTED_MODULE_2__/* .DryRunDesign */ .hc, {
      handleClose: handleClose,
      selectedK8sContexts: selectedK8sContexts,
      includeDependencies: includeDependencies,
      design: design,
      validationMachine: validationMachine,
      deployment_type: deployment_type
    }), (cov_2pr8m6xd7k().b[8][0]++, (0,_DryRun__WEBPACK_IMPORTED_MODULE_2__/* .getTotalCountOfDeploymentErrors */ .HK)(dryRunErrors) > 0) && (cov_2pr8m6xd7k().b[8][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_common__WEBPACK_IMPORTED_MODULE_4__.CheckBoxField, {
      label: "Bypass errors and initiate deployment",
      checked: bypassValidation,
      onChange: toggleBypassValidation
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_common__WEBPACK_IMPORTED_MODULE_4__.CheckBoxField, {
      label: "Include Dependencies",
      checked: includeDependencies,
      helpText: "Deploys Custom Resource Definitions (CRDs) and operators based on the source from which a particular component was registered, [learn more](https://docs.meshplay.khulnasoft.com/guides/infrastructure-management/overview#auto-deployment-of-crds-and-operators) about auto deployment of dependencies",
      onChange: toggleIncludeDependencies
    })]
  });
}; // Component to handle the deployment process ie. deploy, undeploy and update ( as all have similar steps)


cov_2pr8m6xd7k().s[48]++;
const UpdateDeploymentStepper = ({
  handleClose,
  deployment_type,
  handlePerformDeployment,
  design,
  validationMachine
}) => {
  cov_2pr8m6xd7k().f[13]++;
  const [includeDependencies, setIncludeDependencies] = (cov_2pr8m6xd7k().s[49]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  const [bypassDryRun, setBypassDryRun] = (cov_2pr8m6xd7k().s[50]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  const [openInVisualizer, setOpenInVisualizer] = (cov_2pr8m6xd7k().s[51]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  const selectedEnvironments = (cov_2pr8m6xd7k().s[52]++, (0,_store_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelectorRtk */ .n6)(_store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_11__/* .selectSelectedEnvs */ .zp));
  const selectedEnvCount = (cov_2pr8m6xd7k().s[53]++, Object.keys(selectedEnvironments).length);
  const dryRunErrors = (cov_2pr8m6xd7k().s[54]++, (0,machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_12__/* .useDryRunValidationResults */ .$I)(validationMachine));
  const totalDryRunErrors = (cov_2pr8m6xd7k().s[55]++, (0,_DryRun__WEBPACK_IMPORTED_MODULE_2__/* .getTotalCountOfDeploymentErrors */ .HK)(dryRunErrors));
  const isDryRunning = (cov_2pr8m6xd7k().s[56]++, (0,machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_12__/* .useIsValidatingDryRun */ .ZX)(validationMachine));
  const theme = (cov_2pr8m6xd7k().s[57]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.useTheme)());
  const selectedK8sConnections = (cov_2pr8m6xd7k().s[58]++, (0,_store_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useSelectorRtk */ .n6)(_store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_11__/* .selectAllSelectedK8sConnections */ .Ib));
  const selectedDeployableK8scontextIds = (cov_2pr8m6xd7k().s[59]++, selectedK8sConnections.map(k8sConnection => {
    cov_2pr8m6xd7k().f[14]++;
    cov_2pr8m6xd7k().s[60]++;
    return k8sConnection.metadata.id;
  }));
  const FinalizeBackgroundColor = (cov_2pr8m6xd7k().s[61]++, theme.palette?.background?.blur.light);
  cov_2pr8m6xd7k().s[62]++;

  const actionFunction = () => {
    cov_2pr8m6xd7k().f[15]++;
    cov_2pr8m6xd7k().s[63]++;
    handlePerformDeployment({
      design,
      selectedK8sContexts: selectedDeployableK8scontextIds
    });
  };

  const deployStepper = (cov_2pr8m6xd7k().s[64]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.useStepper)({
    steps: [{
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(StepContent, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_ValidateDesign__WEBPACK_IMPORTED_MODULE_1__/* .ValidateDesign */ .D, {
          handleClose: handleClose,
          validationMachine: validationMachine,
          design: design
        })
      }),
      icon: _assets_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
      helpText: `Validate the design before deploying, [learn more](https://docs.meshplay.khulnasoft.com/guides/infrastructure-management/overview) about the validation process`,
      label: 'Validate Design'
    }, {
      component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(StepContent, {
        children: [' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(SelectTargetStep, {
          handleClose: handleClose
        }), ' ']
      }),
      helpText: 'Select the environment  and cluster to deploy the design,[learn more](https://docs.meshplay.khulnasoft.com/guides/infrastructure-management/overview)  about the environment selection',
      icon: _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.EnvironmentIcon,
      label: 'Identify Environments'
    }, {
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(StepContent, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(DryRunStep, {
          selectedK8sContexts: selectedDeployableK8scontextIds,
          design: design,
          validationMachine: validationMachine,
          handleClose: handleClose,
          deployment_type: deployment_type,
          includeDependencies: includeDependencies,
          setIncludeDependencies: setIncludeDependencies,
          setBypassDryRun: setBypassDryRun,
          dryRunErrors: dryRunErrors
        })
      }),
      helpText: 'Dry Run is a simulation of the deployment process, it helps to identify potential errors before the actual deployment ,\
          [learn more](https://docs.meshplay.khulnasoft.com/guides/infrastructure-management/overview ) about Dry Run.',
      label: 'Dry Run',
      icon: _assets_icons_DryRunIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    }, {
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(StepContent, {
        backgroundColor: FinalizeBackgroundColor,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_finalizeDeployment__WEBPACK_IMPORTED_MODULE_10__/* .FinalizeDeployment */ .F, {
          design: design,
          deployment_type: deployment_type,
          openInVisualizer: openInVisualizer,
          setOpenInVisualizer: setOpenInVisualizer
        })
      }),
      helpText: 'Finalize the deployment process and overview the configuration for your deployment.\
          [Learn more](https://docs.meshplay.khulnasoft.com/guides/infrastructure-management/overview) about the deployment process.',
      label: 'Finalize Deployment',
      icon: _assets_icons_DeploymentSelectorIcon__WEBPACK_IMPORTED_MODULE_6__/* .DeploymentSelectorIcon */ .Q
    }, {
      component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(StepContent, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(FinishDeploymentStep, {
          design: design,
          deployment_type: deployment_type,
          perform_deployment: actionFunction,
          autoOpenView: openInVisualizer
        }), ' ']
      }),
      helpText: 'Receipt of your deployment,includes the deployment status of components within the design and error logs. [Learn more](https://docs.meshplay.khulnasoft.com/guides/infrastructure-management/overview) about the deployment process.',
      label: 'Finsh',
      icon: _assets_icons_FinishFlagIcon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z
    }]
  }));
  const transitionConfig = (cov_2pr8m6xd7k().s[65]++, {
    0: {
      canGoNext: () => {
        cov_2pr8m6xd7k().f[16]++;
        cov_2pr8m6xd7k().s[66]++;
        return true;
      },
      nextButtonText: 'Next',
      nextAction: () => {
        cov_2pr8m6xd7k().f[17]++;
        cov_2pr8m6xd7k().s[67]++;
        return deployStepper.handleNext();
      }
    },
    1: {
      canGoNext: () => {
        cov_2pr8m6xd7k().f[18]++;
        cov_2pr8m6xd7k().s[68]++;
        return selectedEnvCount > 0;
      },
      nextButtonText: 'Next',
      nextAction: () => {
        cov_2pr8m6xd7k().f[19]++;
        cov_2pr8m6xd7k().s[69]++;
        return deployStepper.handleNext();
      }
    },
    2: {
      canGoNext: () => {
        cov_2pr8m6xd7k().f[20]++;
        cov_2pr8m6xd7k().s[70]++;
        return !isDryRunning & ((cov_2pr8m6xd7k().b[9][0]++, totalDryRunErrors == 0) || (cov_2pr8m6xd7k().b[9][1]++, bypassDryRun));
      },
      nextButtonText: 'Next',
      nextAction: () => {
        cov_2pr8m6xd7k().f[21]++;
        cov_2pr8m6xd7k().s[71]++;
        return deployStepper.handleNext();
      }
    },
    3: {
      canGoNext: () => {
        cov_2pr8m6xd7k().f[22]++;
        cov_2pr8m6xd7k().s[72]++;
        return true;
      },
      nextButtonText: (0,lodash__WEBPACK_IMPORTED_MODULE_16__.capitalize)(deployment_type),
      nextAction: () => {
        cov_2pr8m6xd7k().f[23]++;
        cov_2pr8m6xd7k().s[73]++;
        deployStepper.handleNext();
      }
    },
    4: {
      canGoNext: () => {
        cov_2pr8m6xd7k().f[24]++;
        cov_2pr8m6xd7k().s[74]++;
        return true;
      },
      nextButtonText: 'Finish',
      nextAction: handleClose
    }
  });
  const canGoNext = (cov_2pr8m6xd7k().s[75]++, transitionConfig[deployStepper.activeStep].canGoNext());
  const nextButtonText = (cov_2pr8m6xd7k().s[76]++, transitionConfig[deployStepper.activeStep].nextButtonText);
  cov_2pr8m6xd7k().s[77]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {
      style: {
        padding: 0
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.Box, {
        style: {
          maxWidth: '40rem'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.CustomizedStepper, _objectSpread(_objectSpread({}, deployStepper), {}, {
          ContentWrapper: StepWrapper,
          children: deployStepper.activeStepComponent
        }))
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {
      variant: "filled",
      helpText: (cov_2pr8m6xd7k().b[10][0]++, deployStepper.steps[deployStepper.activeStep]?.helpText) || (cov_2pr8m6xd7k().b[10][1]++, `${deployment_type} the current design`),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.Box, {
        style: {
          width: '100%',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'end'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.ModalButtonSecondary, {
          onClick: deployStepper.goBack,
          disabled: !deployStepper.canGoBack,
          children: "Back"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_3__.ModalButtonPrimary, {
          disabled: !canGoNext,
          onClick: transitionConfig[deployStepper.activeStep].nextAction,
          children: nextButtonText
        })]
      })
    })]
  });
};
cov_2pr8m6xd7k().s[78]++;
const DeployStepper = ({
  handleClose,
  design,
  validationMachine,
  handleDeploy
}) => {
  cov_2pr8m6xd7k().f[25]++;
  cov_2pr8m6xd7k().s[79]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(UpdateDeploymentStepper, {
    handleClose: handleClose,
    design: design,
    handlePerformDeployment: handleDeploy,
    validationMachine: validationMachine,
    deployment_type: _common__WEBPACK_IMPORTED_MODULE_4__.DEPLOYMENT_TYPE.DEPLOY
  });
};
cov_2pr8m6xd7k().s[80]++;
const UnDeployStepper = ({
  handleClose,
  design,
  handleUndeploy,
  validationMachine
}) => {
  cov_2pr8m6xd7k().f[26]++;
  cov_2pr8m6xd7k().s[81]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(UpdateDeploymentStepper, {
    handleClose: handleClose,
    design: design,
    handlePerformDeployment: handleUndeploy,
    validationMachine: validationMachine,
    deployment_type: _common__WEBPACK_IMPORTED_MODULE_4__.DEPLOYMENT_TYPE.UNDEPLOY
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hq": () => (/* binding */ SelectTargetEnvironments),
/* harmony export */   "wE": () => (/* binding */ DeploymentTargetContext)
/* harmony export */ });
/* unused harmony export EnvironmentsEmptyState */
/* harmony import */ var _rtk_query_environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74793);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90856);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66568);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62197);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37579);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common__WEBPACK_IMPORTED_MODULE_2__, _Header__WEBPACK_IMPORTED_MODULE_3__]);
([_common__WEBPACK_IMPORTED_MODULE_2__, _Header__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_nzwpemu7f() {
  var path = "/workspace/meshplay/ui/components/DesignLifeCycle/SelectDeploymentTarget.js";
  var hash = "7bc664b8df347aa7f8280b9f7ab405c5293254aa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/DesignLifeCycle/SelectDeploymentTarget.js",
    statementMap: {
      "0": {
        start: {
          line: 30,
          column: 39
        },
        end: {
          line: 34,
          column: 2
        }
      },
      "1": {
        start: {
          line: 36,
          column: 30
        },
        end: {
          line: 40,
          column: 3
        }
      },
      "2": {
        start: {
          line: 36,
          column: 58
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "3": {
        start: {
          line: 42,
          column: 32
        },
        end: {
          line: 50,
          column: 3
        }
      },
      "4": {
        start: {
          line: 42,
          column: 60
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "5": {
        start: {
          line: 52,
          column: 29
        },
        end: {
          line: 69,
          column: 1
        }
      },
      "6": {
        start: {
          line: 53,
          column: 63
        },
        end: {
          line: 53,
          column: 98
        }
      },
      "7": {
        start: {
          line: 54,
          column: 21
        },
        end: {
          line: 56,
          column: 3
        }
      },
      "8": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 68
        }
      },
      "9": {
        start: {
          line: 57,
          column: 19
        },
        end: {
          line: 57,
          column: 35
        }
      },
      "10": {
        start: {
          line: 58,
          column: 30
        },
        end: {
          line: 58,
          column: 87
        }
      },
      "11": {
        start: {
          line: 58,
          column: 36
        },
        end: {
          line: 58,
          column: 87
        }
      },
      "12": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 68,
          column: 4
        }
      },
      "13": {
        start: {
          line: 71,
          column: 31
        },
        end: {
          line: 83,
          column: 1
        }
      },
      "14": {
        start: {
          line: 72,
          column: 2
        },
        end: {
          line: 82,
          column: 4
        }
      },
      "15": {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 79,
          column: 10
        }
      },
      "16": {
        start: {
          line: 85,
          column: 24
        },
        end: {
          line: 124,
          column: 1
        }
      },
      "17": {
        start: {
          line: 86,
          column: 16
        },
        end: {
          line: 86,
          column: 26
        }
      },
      "18": {
        start: {
          line: 87,
          column: 30
        },
        end: {
          line: 89,
          column: 4
        }
      },
      "19": {
        start: {
          line: 90,
          column: 19
        },
        end: {
          line: 90,
          column: 35
        }
      },
      "20": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 84
        }
      },
      "21": {
        start: {
          line: 92,
          column: 46
        },
        end: {
          line: 92,
          column: 77
        }
      },
      "22": {
        start: {
          line: 94,
          column: 24
        },
        end: {
          line: 94,
          column: 93
        }
      },
      "23": {
        start: {
          line: 94,
          column: 50
        },
        end: {
          line: 94,
          column: 92
        }
      },
      "24": {
        start: {
          line: 95,
          column: 30
        },
        end: {
          line: 97,
          column: 3
        }
      },
      "25": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 96,
          column: 55
        }
      },
      "26": {
        start: {
          line: 98,
          column: 35
        },
        end: {
          line: 98,
          column: 61
        }
      },
      "27": {
        start: {
          line: 100,
          column: 20
        },
        end: {
          line: 100,
          column: 80
        }
      },
      "28": {
        start: {
          line: 100,
          column: 26
        },
        end: {
          line: 100,
          column: 80
        }
      },
      "29": {
        start: {
          line: 102,
          column: 2
        },
        end: {
          line: 123,
          column: 4
        }
      },
      "30": {
        start: {
          line: 126,
          column: 38
        },
        end: {
          line: 148,
          column: 1
        }
      },
      "31": {
        start: {
          line: 127,
          column: 16
        },
        end: {
          line: 127,
          column: 26
        }
      },
      "32": {
        start: {
          line: 128,
          column: 2
        },
        end: {
          line: 147,
          column: 4
        }
      },
      "33": {
        start: {
          line: 150,
          column: 40
        },
        end: {
          line: 177,
          column: 1
        }
      },
      "34": {
        start: {
          line: 151,
          column: 23
        },
        end: {
          line: 151,
          column: 71
        }
      },
      "35": {
        start: {
          line: 152,
          column: 39
        },
        end: {
          line: 152,
          column: 90
        }
      },
      "36": {
        start: {
          line: 153,
          column: 23
        },
        end: {
          line: 153,
          column: 47
        }
      },
      "37": {
        start: {
          line: 154,
          column: 2
        },
        end: {
          line: 156,
          column: 3
        }
      },
      "38": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 155,
          column: 23
        }
      },
      "39": {
        start: {
          line: 158,
          column: 2
        },
        end: {
          line: 160,
          column: 3
        }
      },
      "40": {
        start: {
          line: 159,
          column: 4
        },
        end: {
          line: 159,
          column: 88
        }
      },
      "41": {
        start: {
          line: 162,
          column: 2
        },
        end: {
          line: 176,
          column: 4
        }
      },
      "42": {
        start: {
          line: 172,
          column: 10
        },
        end: {
          line: 172,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 36,
            column: 42
          },
          end: {
            line: 36,
            column: 43
          }
        },
        loc: {
          start: {
            line: 36,
            column: 58
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 36
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 42,
            column: 44
          },
          end: {
            line: 42,
            column: 45
          }
        },
        loc: {
          start: {
            line: 42,
            column: 60
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 42
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 52,
            column: 29
          },
          end: {
            line: 52,
            column: 30
          }
        },
        loc: {
          start: {
            line: 52,
            column: 62
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 52
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 54,
            column: 36
          },
          end: {
            line: 54,
            column: 37
          }
        },
        loc: {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 68
          }
        },
        line: 55
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 58,
            column: 30
          },
          end: {
            line: 58,
            column: 31
          }
        },
        loc: {
          start: {
            line: 58,
            column: 36
          },
          end: {
            line: 58,
            column: 87
          }
        },
        line: 58
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 71,
            column: 31
          },
          end: {
            line: 71,
            column: 32
          }
        },
        loc: {
          start: {
            line: 71,
            column: 65
          },
          end: {
            line: 83,
            column: 1
          }
        },
        line: 71
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 74,
            column: 23
          },
          end: {
            line: 74,
            column: 24
          }
        },
        loc: {
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 79,
            column: 10
          }
        },
        line: 75
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 85,
            column: 24
          },
          end: {
            line: 85,
            column: 25
          }
        },
        loc: {
          start: {
            line: 85,
            column: 45
          },
          end: {
            line: 124,
            column: 1
          }
        },
        line: 85
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 92,
            column: 30
          },
          end: {
            line: 92,
            column: 31
          }
        },
        loc: {
          start: {
            line: 92,
            column: 46
          },
          end: {
            line: 92,
            column: 77
          }
        },
        line: 92
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 94,
            column: 39
          },
          end: {
            line: 94,
            column: 40
          }
        },
        loc: {
          start: {
            line: 94,
            column: 50
          },
          end: {
            line: 94,
            column: 92
          }
        },
        line: 94
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 95,
            column: 45
          },
          end: {
            line: 95,
            column: 46
          }
        },
        loc: {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 96,
            column: 55
          }
        },
        line: 96
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 100,
            column: 20
          },
          end: {
            line: 100,
            column: 21
          }
        },
        loc: {
          start: {
            line: 100,
            column: 26
          },
          end: {
            line: 100,
            column: 80
          }
        },
        line: 100
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 126,
            column: 38
          },
          end: {
            line: 126,
            column: 39
          }
        },
        loc: {
          start: {
            line: 126,
            column: 55
          },
          end: {
            line: 148,
            column: 1
          }
        },
        line: 126
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 150,
            column: 40
          },
          end: {
            line: 150,
            column: 41
          }
        },
        loc: {
          start: {
            line: 150,
            column: 46
          },
          end: {
            line: 177,
            column: 1
          }
        },
        line: 150
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 171,
            column: 26
          },
          end: {
            line: 171,
            column: 27
          }
        },
        loc: {
          start: {
            line: 172,
            column: 10
          },
          end: {
            line: 172,
            column: 60
          }
        },
        line: 172
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 92,
            column: 84
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 92,
            column: 78
          }
        }, {
          start: {
            line: 92,
            column: 82
          },
          end: {
            line: 92,
            column: 84
          }
        }],
        line: 92
      },
      "1": {
        loc: {
          start: {
            line: 116,
            column: 9
          },
          end: {
            line: 120,
            column: 9
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 117,
            column: 10
          },
          end: {
            line: 117,
            column: 21
          }
        }, {
          start: {
            line: 119,
            column: 10
          },
          end: {
            line: 119,
            column: 88
          }
        }],
        line: 116
      },
      "2": {
        loc: {
          start: {
            line: 132,
            column: 9
          },
          end: {
            line: 132,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 132,
            column: 9
          },
          end: {
            line: 132,
            column: 16
          }
        }, {
          start: {
            line: 132,
            column: 20
          },
          end: {
            line: 132,
            column: 43
          }
        }],
        line: 132
      },
      "3": {
        loc: {
          start: {
            line: 153,
            column: 23
          },
          end: {
            line: 153,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 153,
            column: 23
          },
          end: {
            line: 153,
            column: 41
          }
        }, {
          start: {
            line: 153,
            column: 45
          },
          end: {
            line: 153,
            column: 47
          }
        }],
        line: 153
      },
      "4": {
        loc: {
          start: {
            line: 154,
            column: 2
          },
          end: {
            line: 156,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 154,
            column: 2
          },
          end: {
            line: 156,
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
        line: 154
      },
      "5": {
        loc: {
          start: {
            line: 158,
            column: 2
          },
          end: {
            line: 160,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 158,
            column: 2
          },
          end: {
            line: 160,
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
        line: 158
      },
      "6": {
        loc: {
          start: {
            line: 166,
            column: 7
          },
          end: {
            line: 168,
            column: 7
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 166,
            column: 7
          },
          end: {
            line: 166,
            column: 32
          }
        }, {
          start: {
            line: 167,
            column: 8
          },
          end: {
            line: 167,
            column: 90
          }
        }],
        line: 166
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
      "14": 0
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
    hash: "7bc664b8df347aa7f8280b9f7ab405c5293254aa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_nzwpemu7f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_nzwpemu7f();













const DeploymentTargetContext = (cov_nzwpemu7f().s[0]++, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({
  meshsyncControllerState: null,
  connectionMetadataState: null,
  organization: null
}));
const StyledEnvironmentCard = (cov_nzwpemu7f().s[1]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.styled)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Box)(({
  theme
}) => {
  cov_nzwpemu7f().f[0]++;
  cov_nzwpemu7f().s[2]++;
  return {
    borderRadius: '0.5rem',
    border: `2px solid ${theme.palette.border.normal}`,
    overflow: 'hidden'
  };
}));
const StyledEnvironmentHeader = (cov_nzwpemu7f().s[3]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.styled)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Box)(({
  theme
}) => {
  cov_nzwpemu7f().f[1]++;
  cov_nzwpemu7f().s[4]++;
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.background.blur.heavy,
    padding: '0.5rem 1rem',
    borderBottom: `1px solid ${theme.palette.border.strong}`,
    fontWeight: '600'
  };
}));
cov_nzwpemu7f().s[5]++;

const K8sContextConnection = ({
  connection,
  environment
}) => {
  cov_nzwpemu7f().f[2]++;
  const {
    meshsyncControllerState,
    connectionMetadataState
  } = (cov_nzwpemu7f().s[6]++, (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(DeploymentTargetContext));
  const isSelected = (cov_nzwpemu7f().s[7]++, (0,_store_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSelectorRtk */ .n6)(state => {
    cov_nzwpemu7f().f[3]++;
    cov_nzwpemu7f().s[8]++;
    return (0,_store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_5__/* .selectIsConnectionSelected */ .a$)(state, environment.id, connection.id);
  }));
  const dispatch = (cov_nzwpemu7f().s[9]++, (0,_store_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useDispatchRtk */ .lH)());
  cov_nzwpemu7f().s[10]++;

  const toggleK8sConnection = () => {
    cov_nzwpemu7f().f[4]++;
    cov_nzwpemu7f().s[11]++;
    return dispatch((0,_store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_5__/* .toggleConnection */ .w2)(environment, connection));
  };

  cov_nzwpemu7f().s[12]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Header__WEBPACK_IMPORTED_MODULE_3__/* .K8sContextConnectionChip */ .I, {
    ctx: connection.metadata,
    onSelectChange: toggleK8sConnection,
    selected: isSelected,
    selectable: true,
    meshsyncControllerState: meshsyncControllerState,
    connectionMetadataState: connectionMetadataState
  });
};

cov_nzwpemu7f().s[13]++;

const EnvironmentConnections = ({
  environment,
  connections
}) => {
  cov_nzwpemu7f().f[5]++;
  cov_nzwpemu7f().s[14]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    gap: 1,
    flexWrap: 'wrap',
    justifyContent: "flex-start",
    children: connections.map(connection => {
      cov_nzwpemu7f().f[6]++;
      cov_nzwpemu7f().s[15]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(K8sContextConnection, {
        connection: connection,
        environment: environment
      }, connection.id);
    })
  });
};

cov_nzwpemu7f().s[16]++;

const EnvironmentCard = ({
  environment
}) => {
  cov_nzwpemu7f().f[7]++;
  const theme = (cov_nzwpemu7f().s[17]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.useTheme)());
  const {
    data,
    isLoading
  } = (cov_nzwpemu7f().s[18]++, (0,_rtk_query_environments__WEBPACK_IMPORTED_MODULE_0__/* .useGetEnvironmentConnectionsQuery */ .me)({
    environmentId: environment.id
  }));
  const dispatch = (cov_nzwpemu7f().s[19]++, (0,_store_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useDispatchRtk */ .lH)());
  const connections = (cov_nzwpemu7f().s[20]++, (cov_nzwpemu7f().b[0][0]++, data?.connections?.filter(connection => {
    cov_nzwpemu7f().f[8]++;
    cov_nzwpemu7f().s[21]++;
    return connection.kind == 'kubernetes';
  })) || (cov_nzwpemu7f().b[0][1]++, []));
  const isEnvSelected = (cov_nzwpemu7f().s[22]++, (0,_store_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSelectorRtk */ .n6)(state => {
    cov_nzwpemu7f().f[9]++;
    cov_nzwpemu7f().s[23]++;
    return (0,_store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_5__/* .selectIsEnvSelected */ .dA)(state, environment.id);
  }));
  const selectedConnections = (cov_nzwpemu7f().s[24]++, (0,_store_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSelectorRtk */ .n6)(state => {
    cov_nzwpemu7f().f[10]++;
    cov_nzwpemu7f().s[25]++;
    return (0,_store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_5__/* .selectSelectedK8sConnections */ .DC)(state, environment.id);
  }));
  const selectedConnectionsCount = (cov_nzwpemu7f().s[26]++, selectedConnections.length);
  cov_nzwpemu7f().s[27]++;

  const toggleEnv = () => {
    cov_nzwpemu7f().f[11]++;
    cov_nzwpemu7f().s[28]++;
    return dispatch((0,_store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_5__/* .toggleEnvSelection */ .CI)(environment, connections));
  };

  cov_nzwpemu7f().s[29]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(StyledEnvironmentCard, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(StyledEnvironmentHeader, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Box, {
        gap: 1,
        display: "flex",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
          checked: isEnvSelected,
          onChange: toggleEnv
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Typography, {
          variant: "textB2SemiBold",
          color: theme.palette.text.default,
          children: environment.name
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        variant: "textB2SemiBold",
        color: theme.palette.icon.default,
        children: ["(", selectedConnectionsCount, "/", connections.length, ")"]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Box, {
      p: 2,
      children: isLoading ? (cov_nzwpemu7f().b[1][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_common__WEBPACK_IMPORTED_MODULE_2__.Loading, {})) : (cov_nzwpemu7f().b[1][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(EnvironmentConnections, {
        environment: environment,
        connections: connections
      }))
    })]
  });
};

cov_nzwpemu7f().s[30]++;
const EnvironmentsEmptyState = ({
  message
}) => {
  cov_nzwpemu7f().f[12]++;
  const theme = (cov_nzwpemu7f().s[31]++, (0,_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.useTheme)());
  cov_nzwpemu7f().s[32]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.EnvironmentIcon, {
      height: 100,
      width: 100
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      color: theme.palette.text.neutral.default,
      variant: "textB2SemiBold",
      children: (cov_nzwpemu7f().b[2][0]++, message) || (cov_nzwpemu7f().b[2][1]++, 'No environments found')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
      href: "/management/environments",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "submit",
        variant: "contained",
        color: "primary",
        style: {
          margin: '0.6rem 0.6rem',
          whiteSpace: 'nowrap'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.AddIcon, {
          fill: theme.palette.background.constant.white
        }), "Add Environments"]
      })
    })]
  });
};
cov_nzwpemu7f().s[33]++;
const SelectTargetEnvironments = () => {
  cov_nzwpemu7f().f[13]++;
  const organization = (cov_nzwpemu7f().s[34]++, (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(DeploymentTargetContext).organization);
  const {
    data,
    isLoading,
    isError
  } = (cov_nzwpemu7f().s[35]++, (0,_rtk_query_environments__WEBPACK_IMPORTED_MODULE_0__/* .useGetEnvironmentsQuery */ .wt)({
    orgId: organization.id
  }));
  const environments = (cov_nzwpemu7f().s[36]++, (cov_nzwpemu7f().b[3][0]++, data?.environments) || (cov_nzwpemu7f().b[3][1]++, []));
  cov_nzwpemu7f().s[37]++;

  if (isLoading) {
    cov_nzwpemu7f().b[4][0]++;
    cov_nzwpemu7f().s[38]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_common__WEBPACK_IMPORTED_MODULE_2__.Loading, {});
  } else {
    cov_nzwpemu7f().b[4][1]++;
  }

  cov_nzwpemu7f().s[39]++;

  if (isError) {
    cov_nzwpemu7f().b[5][0]++;
    cov_nzwpemu7f().s[40]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      variant: "textB1Regular",
      children: "Error fetching environments"
    });
  } else {
    cov_nzwpemu7f().b[5][1]++;
  }

  cov_nzwpemu7f().s[41]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    gap: 2,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_common__WEBPACK_IMPORTED_MODULE_2__.StepHeading, {
      children: "Identify Deployment Targets"
    }), (cov_nzwpemu7f().b[6][0]++, environments.length === 0) && (cov_nzwpemu7f().b[6][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(EnvironmentsEmptyState, {
      message: "No environments found. Add a new environment."
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      spacing: 2,
      children: environments.map(env => {
        cov_nzwpemu7f().f[14]++;
        cov_nzwpemu7f().s[42]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(EnvironmentCard, {
          environment: env
        }, env.id);
      })
    })]
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48421:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ValidateDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72105);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90856);
/* harmony import */ var _machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58349);
/* harmony import */ var _assets_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75111);
/* harmony import */ var _themes_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31339);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common__WEBPACK_IMPORTED_MODULE_3__, _machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_4__]);
([_common__WEBPACK_IMPORTED_MODULE_3__, _machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_12gjmcyjqf() {
  var path = "/workspace/meshplay/ui/components/DesignLifeCycle/ValidateDesign.js";
  var hash = "c8ea12b714bec6a30c01075a367607fb581b49a0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/DesignLifeCycle/ValidateDesign.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 15
        },
        end: {
          line: 75,
          column: 1
        }
      },
      "1": {
        start: {
          line: 25,
          column: 18
        },
        end: {
          line: 25,
          column: 44
        }
      },
      "2": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 74,
          column: 4
        }
      },
      "3": {
        start: {
          line: 77,
          column: 27
        },
        end: {
          line: 119,
          column: 1
        }
      },
      "4": {
        start: {
          line: 78,
          column: 21
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "5": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 81,
          column: 6
        }
      },
      "6": {
        start: {
          line: 84,
          column: 34
        },
        end: {
          line: 84,
          column: 85
        }
      },
      "7": {
        start: {
          line: 84,
          column: 52
        },
        end: {
          line: 84,
          column: 85
        }
      },
      "8": {
        start: {
          line: 86,
          column: 18
        },
        end: {
          line: 89,
          column: 3
        }
      },
      "9": {
        start: {
          line: 87,
          column: 22
        },
        end: {
          line: 87,
          column: 65
        }
      },
      "10": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 79
        }
      },
      "11": {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 118,
          column: 4
        }
      },
      "12": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 115,
          column: 19
        }
      },
      "13": {
        start: {
          line: 98,
          column: 25
        },
        end: {
          line: 98,
          column: 42
        }
      },
      "14": {
        start: {
          line: 121,
          column: 27
        },
        end: {
          line: 221,
          column: 1
        }
      },
      "15": {
        start: {
          line: 130,
          column: 6
        },
        end: {
          line: 130,
          column: 11
        }
      },
      "16": {
        start: {
          line: 132,
          column: 31
        },
        end: {
          line: 134,
          column: 3
        }
      },
      "17": {
        start: {
          line: 133,
          column: 16
        },
        end: {
          line: 133,
          column: 85
        }
      },
      "18": {
        start: {
          line: 136,
          column: 2
        },
        end: {
          line: 136,
          column: 60
        }
      },
      "19": {
        start: {
          line: 138,
          column: 29
        },
        end: {
          line: 138,
          column: 71
        }
      },
      "20": {
        start: {
          line: 138,
          column: 38
        },
        end: {
          line: 138,
          column: 71
        }
      },
      "21": {
        start: {
          line: 139,
          column: 26
        },
        end: {
          line: 139,
          column: 86
        }
      },
      "22": {
        start: {
          line: 141,
          column: 35
        },
        end: {
          line: 141,
          column: 43
        }
      },
      "23": {
        start: {
          line: 142,
          column: 22
        },
        end: {
          line: 146,
          column: 3
        }
      },
      "24": {
        start: {
          line: 143,
          column: 23
        },
        end: {
          line: 143,
          column: 32
        }
      },
      "25": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 144,
          column: 47
        }
      },
      "26": {
        start: {
          line: 145,
          column: 4
        },
        end: {
          line: 145,
          column: 26
        }
      },
      "27": {
        start: {
          line: 148,
          column: 2
        },
        end: {
          line: 153,
          column: 33
        }
      },
      "28": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 152,
          column: 5
        }
      },
      "29": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 151,
          column: 78
        }
      },
      "30": {
        start: {
          line: 154,
          column: 2
        },
        end: {
          line: 220,
          column: 4
        }
      },
      "31": {
        start: {
          line: 195,
          column: 10
        },
        end: {
          line: 216,
          column: 16
        }
      },
      "32": {
        start: {
          line: 202,
          column: 44
        },
        end: {
          line: 202,
          column: 62
        }
      },
      "33": {
        start: {
          line: 223,
          column: 26
        },
        end: {
          line: 223,
          column: 64
        }
      },
      "34": {
        start: {
          line: 230,
          column: 30
        },
        end: {
          line: 269,
          column: 1
        }
      },
      "35": {
        start: {
          line: 231,
          column: 28
        },
        end: {
          line: 231,
          column: 79
        }
      },
      "36": {
        start: {
          line: 232,
          column: 23
        },
        end: {
          line: 232,
          column: 69
        }
      },
      "37": {
        start: {
          line: 234,
          column: 21
        },
        end: {
          line: 234,
          column: 32
        }
      },
      "38": {
        start: {
          line: 235,
          column: 59
        },
        end: {
          line: 235,
          column: 80
        }
      },
      "39": {
        start: {
          line: 237,
          column: 22
        },
        end: {
          line: 240,
          column: 3
        }
      },
      "40": {
        start: {
          line: 238,
          column: 28
        },
        end: {
          line: 238,
          column: 70
        }
      },
      "41": {
        start: {
          line: 242,
          column: 2
        },
        end: {
          line: 244,
          column: 9
        }
      },
      "42": {
        start: {
          line: 243,
          column: 4
        },
        end: {
          line: 243,
          column: 85
        }
      },
      "43": {
        start: {
          line: 246,
          column: 2
        },
        end: {
          line: 248,
          column: 3
        }
      },
      "44": {
        start: {
          line: 247,
          column: 4
        },
        end: {
          line: 247,
          column: 51
        }
      },
      "45": {
        start: {
          line: 250,
          column: 2
        },
        end: {
          line: 252,
          column: 3
        }
      },
      "46": {
        start: {
          line: 251,
          column: 4
        },
        end: {
          line: 251,
          column: 16
        }
      },
      "47": {
        start: {
          line: 254,
          column: 2
        },
        end: {
          line: 256,
          column: 3
        }
      },
      "48": {
        start: {
          line: 255,
          column: 4
        },
        end: {
          line: 255,
          column: 69
        }
      },
      "49": {
        start: {
          line: 258,
          column: 2
        },
        end: {
          line: 268,
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
            column: 26
          },
          end: {
            line: 75,
            column: 1
          }
        },
        line: 24
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 77,
            column: 27
          },
          end: {
            line: 77,
            column: 28
          }
        },
        loc: {
          start: {
            line: 77,
            column: 79
          },
          end: {
            line: 119,
            column: 1
          }
        },
        line: 77
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 78,
            column: 21
          },
          end: {
            line: 78,
            column: 22
          }
        },
        loc: {
          start: {
            line: 78,
            column: 32
          },
          end: {
            line: 82,
            column: 3
          }
        },
        line: 78
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 84,
            column: 34
          },
          end: {
            line: 84,
            column: 35
          }
        },
        loc: {
          start: {
            line: 84,
            column: 52
          },
          end: {
            line: 84,
            column: 85
          }
        },
        line: 84
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 86,
            column: 18
          },
          end: {
            line: 86,
            column: 19
          }
        },
        loc: {
          start: {
            line: 86,
            column: 29
          },
          end: {
            line: 89,
            column: 3
          }
        },
        line: 86
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 93,
            column: 18
          },
          end: {
            line: 93,
            column: 19
          }
        },
        loc: {
          start: {
            line: 94,
            column: 8
          },
          end: {
            line: 115,
            column: 19
          }
        },
        line: 94
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 98,
            column: 19
          },
          end: {
            line: 98,
            column: 20
          }
        },
        loc: {
          start: {
            line: 98,
            column: 25
          },
          end: {
            line: 98,
            column: 42
          }
        },
        line: 98
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 121,
            column: 27
          },
          end: {
            line: 121,
            column: 28
          }
        },
        loc: {
          start: {
            line: 121,
            column: 38
          },
          end: {
            line: 221,
            column: 1
          }
        },
        line: 121
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        loc: {
          start: {
            line: 133,
            column: 16
          },
          end: {
            line: 133,
            column: 85
          }
        },
        line: 133
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 138,
            column: 29
          },
          end: {
            line: 138,
            column: 30
          }
        },
        loc: {
          start: {
            line: 138,
            column: 38
          },
          end: {
            line: 138,
            column: 71
          }
        },
        line: 138
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 142,
            column: 22
          },
          end: {
            line: 142,
            column: 23
          }
        },
        loc: {
          start: {
            line: 142,
            column: 33
          },
          end: {
            line: 146,
            column: 3
          }
        },
        line: 142
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 148,
            column: 12
          },
          end: {
            line: 148,
            column: 13
          }
        },
        loc: {
          start: {
            line: 148,
            column: 18
          },
          end: {
            line: 153,
            column: 3
          }
        },
        line: 148
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 194,
            column: 35
          },
          end: {
            line: 194,
            column: 36
          }
        },
        loc: {
          start: {
            line: 195,
            column: 10
          },
          end: {
            line: 216,
            column: 16
          }
        },
        line: 195
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 202,
            column: 38
          },
          end: {
            line: 202,
            column: 39
          }
        },
        loc: {
          start: {
            line: 202,
            column: 44
          },
          end: {
            line: 202,
            column: 62
          }
        },
        line: 202
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 230,
            column: 30
          },
          end: {
            line: 230,
            column: 31
          }
        },
        loc: {
          start: {
            line: 230,
            column: 80
          },
          end: {
            line: 269,
            column: 1
          }
        },
        line: 230
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 238,
            column: 5
          }
        },
        loc: {
          start: {
            line: 238,
            column: 28
          },
          end: {
            line: 238,
            column: 70
          }
        },
        line: 238
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 242,
            column: 12
          },
          end: {
            line: 242,
            column: 13
          }
        },
        loc: {
          start: {
            line: 242,
            column: 18
          },
          end: {
            line: 244,
            column: 3
          }
        },
        line: 242
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 88,
            column: 11
          },
          end: {
            line: 88,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 88,
            column: 23
          },
          end: {
            line: 88,
            column: 62
          }
        }, {
          start: {
            line: 88,
            column: 65
          },
          end: {
            line: 88,
            column: 78
          }
        }],
        line: 88
      },
      "1": {
        loc: {
          start: {
            line: 133,
            column: 16
          },
          end: {
            line: 133,
            column: 85
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 133,
            column: 16
          },
          end: {
            line: 133,
            column: 37
          }
        }, {
          start: {
            line: 133,
            column: 41
          },
          end: {
            line: 133,
            column: 85
          }
        }],
        line: 133
      },
      "2": {
        loc: {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
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
        line: 150
      },
      "3": {
        loc: {
          start: {
            line: 170,
            column: 36
          },
          end: {
            line: 170,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 170,
            column: 52
          },
          end: {
            line: 170,
            column: 55
          }
        }, {
          start: {
            line: 170,
            column: 58
          },
          end: {
            line: 170,
            column: 60
          }
        }],
        line: 170
      },
      "4": {
        loc: {
          start: {
            line: 178,
            column: 18
          },
          end: {
            line: 178,
            column: 93
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 178,
            column: 35
          },
          end: {
            line: 178,
            column: 61
          }
        }, {
          start: {
            line: 178,
            column: 64
          },
          end: {
            line: 178,
            column: 93
          }
        }],
        line: 178
      },
      "5": {
        loc: {
          start: {
            line: 182,
            column: 33
          },
          end: {
            line: 182,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 182,
            column: 52
          },
          end: {
            line: 182,
            column: 54
          }
        }, {
          start: {
            line: 182,
            column: 57
          },
          end: {
            line: 182,
            column: 60
          }
        }],
        line: 182
      },
      "6": {
        loc: {
          start: {
            line: 188,
            column: 9
          },
          end: {
            line: 192,
            column: 9
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 188,
            column: 9
          },
          end: {
            line: 188,
            column: 24
          }
        }, {
          start: {
            line: 189,
            column: 10
          },
          end: {
            line: 191,
            column: 23
          }
        }],
        line: 188
      },
      "7": {
        loc: {
          start: {
            line: 198,
            column: 17
          },
          end: {
            line: 198,
            column: 86
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 198,
            column: 55
          },
          end: {
            line: 198,
            column: 79
          }
        }, {
          start: {
            line: 198,
            column: 82
          },
          end: {
            line: 198,
            column: 86
          }
        }],
        line: 198
      },
      "8": {
        loc: {
          start: {
            line: 206,
            column: 49
          },
          end: {
            line: 206,
            column: 94
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 206,
            column: 63
          },
          end: {
            line: 206,
            column: 77
          }
        }, {
          start: {
            line: 206,
            column: 80
          },
          end: {
            line: 206,
            column: 94
          }
        }],
        line: 206
      },
      "9": {
        loc: {
          start: {
            line: 237,
            column: 36
          },
          end: {
            line: 237,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 237,
            column: 36
          },
          end: {
            line: 237,
            column: 53
          }
        }, {
          start: {
            line: 237,
            column: 57
          },
          end: {
            line: 237,
            column: 59
          }
        }],
        line: 237
      },
      "10": {
        loc: {
          start: {
            line: 238,
            column: 35
          },
          end: {
            line: 238,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 238,
            column: 35
          },
          end: {
            line: 238,
            column: 64
          }
        }, {
          start: {
            line: 238,
            column: 68
          },
          end: {
            line: 238,
            column: 69
          }
        }],
        line: 238
      },
      "11": {
        loc: {
          start: {
            line: 246,
            column: 2
          },
          end: {
            line: 248,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 246,
            column: 2
          },
          end: {
            line: 248,
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
        line: 246
      },
      "12": {
        loc: {
          start: {
            line: 250,
            column: 2
          },
          end: {
            line: 252,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 250,
            column: 2
          },
          end: {
            line: 252,
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
        line: 250
      },
      "13": {
        loc: {
          start: {
            line: 254,
            column: 2
          },
          end: {
            line: 256,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 254,
            column: 2
          },
          end: {
            line: 256,
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
        line: 254
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
      "49": 0
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
      "16": 0
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
      "13": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c8ea12b714bec6a30c01075a367607fb581b49a0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12gjmcyjqf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_12gjmcyjqf();









cov_12gjmcyjqf().s[0]++;

const styles = theme => {
  cov_12gjmcyjqf().f[0]++;
  const saffron = (cov_12gjmcyjqf().s[1]++, _themes_index__WEBPACK_IMPORTED_MODULE_6__/* .NOTIFICATIONCOLORS.WARNING */ .hK.WARNING);
  cov_12gjmcyjqf().s[2]++;
  return {
    singleErrorRoot: {
      gap: '0.5rem',
      backgroundColor: theme.palette.secondary.mainBackground2,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.alpha)(_themes_index__WEBPACK_IMPORTED_MODULE_6__/* .NOTIFICATIONCOLORS.WARNING */ .hK.WARNING, 0.25)
      }
    },
    singleError: {
      paddingInline: theme.spacing(1),
      paddingBlock: theme.spacing(1),
      marginInline: theme.spacing(0.5),
      overflow: 'hidden',
      whiteSpace: 'wrap'
    },
    componentLabel: {
      gap: '0.5rem',
      backgroundColor: saffron,
      '&:hover': {
        backgroundColor: saffron
      }
    },
    component: {
      backgroundColor: theme.palette.secondary.mainBackground2,
      color: theme.palette.secondary.text3,
      fontFamily: 'Qanelas Soft, sans-serif'
    },
    errorList: {
      border: `solid 2px ${saffron}`
    },
    root: {
      width: '100%',
      maxHeight: '18rem',
      marginBottom: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    subHeader: {
      marginTop: '1rem',
      display: 'flex',
      padding: 0,
      justifyContent: 'space-between',
      width: '100%'
    }
  };
};

cov_12gjmcyjqf().s[3]++;

const ComponentErrorList = ({
  component,
  classes,
  errors,
  validatorActor
}) => {
  cov_12gjmcyjqf().f[1]++;
  cov_12gjmcyjqf().s[4]++;

  const onErrorTap = error => {
    cov_12gjmcyjqf().f[2]++;
    cov_12gjmcyjqf().s[5]++;
    validatorActor.send(_machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_4__/* .designValidatorEvents.tapOnError */ .Pi.tapOnError({
      error,
      type: 'schemaValidation',
      component
    }));
  };

  cov_12gjmcyjqf().s[6]++;

  const formatReadableFieldPath = instancePath => {
    cov_12gjmcyjqf().f[3]++;
    cov_12gjmcyjqf().s[7]++;
    return instancePath.split('/').join('.');
  };

  cov_12gjmcyjqf().s[8]++;

  const message = error => {
    cov_12gjmcyjqf().f[4]++;
    const fieldPath = (cov_12gjmcyjqf().s[9]++, formatReadableFieldPath(error.instancePath));
    cov_12gjmcyjqf().s[10]++;
    return fieldPath ? (cov_12gjmcyjqf().b[0][0]++, `Field "${fieldPath}" ${error.message}`) : (cov_12gjmcyjqf().b[0][1]++, error.message);
  };

  cov_12gjmcyjqf().s[11]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.List, {
    children: errors.map(error => {
      cov_12gjmcyjqf().f[5]++;
      cov_12gjmcyjqf().s[12]++;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
        disablePadding: true,
        className: classes.singleErrorRoot,
        onClick: () => {
          cov_12gjmcyjqf().f[6]++;
          cov_12gjmcyjqf().s[13]++;
          return onErrorTap(error);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
          children: [' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_assets_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            height: "27px",
            width: "30px",
            outline: "#fff",
            bangFill: "#fff",
            fill: _themes_index__WEBPACK_IMPORTED_MODULE_6__/* .NOTIFICATIONCOLORS.WARNING */ .hK.WARNING
          }), ' ']
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
          primary: message(error),
          disableTypography: true,
          className: classes.nested
        })]
      }, error.instancePath);
    })
  });
};

cov_12gjmcyjqf().s[14]++;

const ValidationResults_ = props => {
  cov_12gjmcyjqf().f[7]++;
  const {
    errorCount,
    compCount,
    annotationCount,
    classes,
    validationResults,
    currentNodeId,
    validationMachine
  } = (cov_12gjmcyjqf().s[15]++, props);
  const componentsWithErrors = (cov_12gjmcyjqf().s[16]++, Object.values(validationResults).filter(result => {
    cov_12gjmcyjqf().f[8]++;
    cov_12gjmcyjqf().s[17]++;
    return (cov_12gjmcyjqf().b[1][0]++, result.errors?.length) && (cov_12gjmcyjqf().b[1][1]++, !result?.component?.metatadata?.isAnnotation);
  }));
  cov_12gjmcyjqf().s[18]++;
  console.log('componentsWithErrors', componentsWithErrors);
  cov_12gjmcyjqf().s[19]++;

  const isCurrentComponent = err => {
    cov_12gjmcyjqf().f[9]++;
    cov_12gjmcyjqf().s[20]++;
    return err.component.id == currentNodeId;
  };

  const [open, setOpen] = (cov_12gjmcyjqf().s[21]++, react__WEBPACK_IMPORTED_MODULE_0___default().useState(componentsWithErrors.map(isCurrentComponent)));
  const currentComponentErrorRef = (cov_12gjmcyjqf().s[22]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)());
  cov_12gjmcyjqf().s[23]++;

  const handleClick = index => {
    cov_12gjmcyjqf().f[10]++;
    let updatedState = (cov_12gjmcyjqf().s[24]++, [...open]);
    cov_12gjmcyjqf().s[25]++;
    updatedState[index] = !updatedState[index];
    cov_12gjmcyjqf().s[26]++;
    setOpen(updatedState);
  };

  cov_12gjmcyjqf().s[27]++;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    cov_12gjmcyjqf().f[11]++;
    cov_12gjmcyjqf().s[28]++;

    // 👇 Will scroll smoothly to the top of component
    if (currentComponentErrorRef.current) {
      cov_12gjmcyjqf().b[2][0]++;
      cov_12gjmcyjqf().s[29]++;
      currentComponentErrorRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      cov_12gjmcyjqf().b[2][1]++;
    }
  }, [currentComponentErrorRef]);
  cov_12gjmcyjqf().s[30]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    title: "DesignValidationResults",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.List, {
      "aria-labelledby": "nested-list-subheader",
      subheader: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ListSubheader, {
        disableSticky: "true",
        component: "div",
        disablePadding: true,
        className: classes.subHeader,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
          varaint: "h6",
          disablePadding: true // style={{ position: "relative", left: "35px" }}
          ,
          children: [compCount, " component", compCount > 1 ? (cov_12gjmcyjqf().b[3][0]++, 's') : (cov_12gjmcyjqf().b[3][1]++, ''), " and ", annotationCount, " annotations"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
          varaint: "h6",
          disablePadding: true,
          style: {
            color: `${errorCount > 0 ? (cov_12gjmcyjqf().b[4][0]++, _themes_index__WEBPACK_IMPORTED_MODULE_6__/* .NOTIFICATIONCOLORS.WARNING */ .hK.WARNING) : (cov_12gjmcyjqf().b[4][1]++, _themes_index__WEBPACK_IMPORTED_MODULE_6__/* .NOTIFICATIONCOLORS.SUCCESS_V2 */ .hK.SUCCESS_V2)}`
          },
          children: [errorCount, " error", errorCount === 1 ? (cov_12gjmcyjqf().b[5][0]++, '') : (cov_12gjmcyjqf().b[5][1]++, 's')]
        })]
      }),
      className: classes.root,
      children: [(cov_12gjmcyjqf().b[6][0]++, errorCount == 0) && (cov_12gjmcyjqf().b[6][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        varaint: "h6",
        align: "center",
        disablePadding: true,
        children: "No Validation errors."
      })), componentsWithErrors?.map((componentResult, index) => {
        cov_12gjmcyjqf().f[12]++;
        cov_12gjmcyjqf().s[31]++;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          style: {
            margin: '0.6rem 0rem'
          },
          ref: isCurrentComponent(componentResult) ? (cov_12gjmcyjqf().b[7][0]++, currentComponentErrorRef) : (cov_12gjmcyjqf().b[7][1]++, null),
          className: classes.component,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
            button: true,
            onClick: () => {
              cov_12gjmcyjqf().f[13]++;
              cov_12gjmcyjqf().s[32]++;
              return handleClick(index);
            },
            className: classes.componentLabel,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_common__WEBPACK_IMPORTED_MODULE_3__.ComponentIcon, {
              iconSrc: (0,_common__WEBPACK_IMPORTED_MODULE_3__.getSvgWhiteForComponent)(componentResult.component)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
              primary: componentResult.component.displayName,
              disableTypography: true
            }), "(", componentResult?.errors?.length, ")", open[index] ? (cov_12gjmcyjqf().b[8][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ExpandLess, {})) : (cov_12gjmcyjqf().b[8][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ExpandMore, {}))]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
            in: open[index],
            timeout: "auto",
            unmountOnExit: true,
            className: classes.errorList,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ComponentErrorList, {
              component: componentResult.component,
              validatorActor: validationMachine,
              errors: componentResult.errors,
              classes: classes
            })
          })]
        }, index);
      })]
    })
  });
};

const ValidationResults = (cov_12gjmcyjqf().s[33]++, (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(ValidationResults_));
/**
 *
 * @param {Design} design is the design file to be validated
 * @returns
 */

cov_12gjmcyjqf().s[34]++;
const ValidateDesign = ({
  design,
  currentNodeId,
  validationMachine
}) => {
  cov_12gjmcyjqf().f[14]++;
  const validationResults = (cov_12gjmcyjqf().s[35]++, (0,_machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_4__/* .useDesignSchemaValidationResults */ .ZU)(validationMachine));
  const isValidating = (cov_12gjmcyjqf().s[36]++, (0,_machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_4__/* .useIsValidatingDesignSchema */ .Ro)(validationMachine));
  const designName = (cov_12gjmcyjqf().s[37]++, design.name);
  const {
    configurableComponents,
    annotationComponents
  } = (cov_12gjmcyjqf().s[38]++, (0,_common__WEBPACK_IMPORTED_MODULE_3__.processDesign)(design));
  const totalErrors = (cov_12gjmcyjqf().s[39]++, Object.values((cov_12gjmcyjqf().b[9][0]++, validationResults) || (cov_12gjmcyjqf().b[9][1]++, {})).reduce((acc, serviceResult) => {
    cov_12gjmcyjqf().f[15]++;
    cov_12gjmcyjqf().s[40]++;
    return acc + ((cov_12gjmcyjqf().b[10][0]++, serviceResult?.errors?.length) || (cov_12gjmcyjqf().b[10][1]++, 0));
  }, 0));
  cov_12gjmcyjqf().s[41]++;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    cov_12gjmcyjqf().f[16]++;
    cov_12gjmcyjqf().s[42]++;
    validationMachine.send(_machines_validator_designValidator__WEBPACK_IMPORTED_MODULE_4__/* .designValidatorCommands.validateDesignSchema */ .xm.validateDesignSchema({
      design
    }));
  }, []);
  cov_12gjmcyjqf().s[43]++;

  if (isValidating) {
    cov_12gjmcyjqf().b[11][0]++;
    cov_12gjmcyjqf().s[44]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_common__WEBPACK_IMPORTED_MODULE_3__.Loading, {
      message: "Validating Design"
    });
  } else {
    cov_12gjmcyjqf().b[11][1]++;
  }

  cov_12gjmcyjqf().s[45]++;

  if (!validationResults) {
    cov_12gjmcyjqf().b[12][0]++;
    cov_12gjmcyjqf().s[46]++;
    return null;
  } else {
    cov_12gjmcyjqf().b[12][1]++;
  }

  cov_12gjmcyjqf().s[47]++;

  if (typeof validationResults === 'string') {
    cov_12gjmcyjqf().b[13][0]++;
    cov_12gjmcyjqf().s[48]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      variant: "h6",
      children: validationResults
    });
  } else {
    cov_12gjmcyjqf().b[13][1]++;
  }

  cov_12gjmcyjqf().s[49]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ValidationResults, {
    validationResults: validationResults,
    currentNodeId: currentNodeId,
    errorCount: totalErrors,
    compCount: configurableComponents.length,
    annotationCount: annotationComponents.length,
    design: designName,
    validationMachine: validationMachine
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FinalizeDeployment)
/* harmony export */ });
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37579);
/* harmony import */ var _store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62197);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function cov_116gqf86v4() {
  var path = "/workspace/meshplay/ui/components/DesignLifeCycle/finalizeDeployment.js";
  var hash = "6703be1f40d04b08bba05d30bc112944be20c222";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/DesignLifeCycle/finalizeDeployment.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 34
        }
      },
      "1": {
        start: {
          line: 12,
          column: 54
        },
        end: {
          line: 12,
          column: 73
        }
      },
      "2": {
        start: {
          line: 13,
          column: 10
        },
        end: {
          line: 13,
          column: 27
        }
      },
      "3": {
        start: {
          line: 15,
          column: 26
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "4": {
        start: {
          line: 15,
          column: 54
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "5": {
        start: {
          line: 22,
          column: 26
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "6": {
        start: {
          line: 22,
          column: 54
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "7": {
        start: {
          line: 29,
          column: 28
        },
        end: {
          line: 32,
          column: 1
        }
      },
      "8": {
        start: {
          line: 30,
          column: 29
        },
        end: {
          line: 30,
          column: 86
        }
      },
      "9": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 67
        }
      },
      "10": {
        start: {
          line: 31,
          column: 42
        },
        end: {
          line: 31,
          column: 65
        }
      },
      "11": {
        start: {
          line: 34,
          column: 34
        },
        end: {
          line: 97,
          column: 1
        }
      },
      "12": {
        start: {
          line: 35,
          column: 37
        },
        end: {
          line: 35,
          column: 58
        }
      },
      "13": {
        start: {
          line: 36,
          column: 31
        },
        end: {
          line: 36,
          column: 65
        }
      },
      "14": {
        start: {
          line: 37,
          column: 19
        },
        end: {
          line: 37,
          column: 77
        }
      },
      "15": {
        start: {
          line: 37,
          column: 68
        },
        end: {
          line: 37,
          column: 76
        }
      },
      "16": {
        start: {
          line: 39,
          column: 31
        },
        end: {
          line: 39,
          column: 88
        }
      },
      "17": {
        start: {
          line: 39,
          column: 54
        },
        end: {
          line: 39,
          column: 87
        }
      },
      "18": {
        start: {
          line: 40,
          column: 28
        },
        end: {
          line: 40,
          column: 69
        }
      },
      "19": {
        start: {
          line: 41,
          column: 16
        },
        end: {
          line: 41,
          column: 26
        }
      },
      "20": {
        start: {
          line: 42,
          column: 18
        },
        end: {
          line: 42,
          column: 31
        }
      },
      "21": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 96,
          column: 4
        }
      },
      "22": {
        start: {
          line: 53,
          column: 14
        },
        end: {
          line: 58,
          column: 34
        }
      },
      "23": {
        start: {
          line: 90,
          column: 28
        },
        end: {
          line: 90,
          column: 66
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 38
          },
          end: {
            line: 15,
            column: 39
          }
        },
        loc: {
          start: {
            line: 15,
            column: 54
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 38
          },
          end: {
            line: 22,
            column: 39
          }
        },
        loc: {
          start: {
            line: 22,
            column: 54
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 22
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 29,
            column: 28
          },
          end: {
            line: 29,
            column: 29
          }
        },
        loc: {
          start: {
            line: 29,
            column: 54
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 29
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 31,
            column: 33
          },
          end: {
            line: 31,
            column: 34
          }
        },
        loc: {
          start: {
            line: 31,
            column: 42
          },
          end: {
            line: 31,
            column: 65
          }
        },
        line: 31
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 34
          },
          end: {
            line: 34,
            column: 35
          }
        },
        loc: {
          start: {
            line: 34,
            column: 89
          },
          end: {
            line: 97,
            column: 1
          }
        },
        line: 34
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 37,
            column: 59
          },
          end: {
            line: 37,
            column: 60
          }
        },
        loc: {
          start: {
            line: 37,
            column: 68
          },
          end: {
            line: 37,
            column: 76
          }
        },
        line: 37
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 39,
            column: 43
          },
          end: {
            line: 39,
            column: 44
          }
        },
        loc: {
          start: {
            line: 39,
            column: 54
          },
          end: {
            line: 39,
            column: 87
          }
        },
        line: 39
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 52,
            column: 26
          },
          end: {
            line: 52,
            column: 27
          }
        },
        loc: {
          start: {
            line: 53,
            column: 14
          },
          end: {
            line: 58,
            column: 34
          }
        },
        line: 53
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 90,
            column: 22
          },
          end: {
            line: 90,
            column: 23
          }
        },
        loc: {
          start: {
            line: 90,
            column: 28
          },
          end: {
            line: 90,
            column: 66
          }
        },
        line: 90
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 93,
            column: 77
          },
          end: {
            line: 93,
            column: 78
          }
        },
        loc: {
          start: {
            line: 93,
            column: 83
          },
          end: {
            line: 93,
            column: 85
          }
        },
        line: 93
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 30,
            column: 29
          },
          end: {
            line: 30,
            column: 86
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 30,
            column: 29
          },
          end: {
            line: 30,
            column: 80
          }
        }, {
          start: {
            line: 30,
            column: 84
          },
          end: {
            line: 30,
            column: 86
          }
        }],
        line: 30
      },
      "1": {
        loc: {
          start: {
            line: 85,
            column: 9
          },
          end: {
            line: 92,
            column: 9
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 85,
            column: 9
          },
          end: {
            line: 85,
            column: 26
          }
        }, {
          start: {
            line: 86,
            column: 10
          },
          end: {
            line: 91,
            column: 12
          }
        }],
        line: 85
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
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6703be1f40d04b08bba05d30bc112944be20c222"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_116gqf86v4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_116gqf86v4();





const {
  Box,
  Typography,
  Stack,
  EnvironmentIcon,
  useTheme,
  styled
} = (cov_116gqf86v4().s[0]++, __webpack_require__(7352));
const {
  processDesign,
  CheckBoxField,
  StepHeading
} = (cov_116gqf86v4().s[1]++, __webpack_require__(90856));

const _ = (cov_116gqf86v4().s[2]++, __webpack_require__(46517));

const StyledSummaryItem = (cov_116gqf86v4().s[3]++, styled(Box)(({
  theme
}) => {
  cov_116gqf86v4().f[0]++;
  cov_116gqf86v4().s[4]++;
  return {
    borderRadius: '0.5rem',
    padding: '1rem',
    backgroundColor: theme.palette.background.default,
    flexGrow: 1
  };
}));
const StyledEnvironment = (cov_116gqf86v4().s[5]++, styled(Box)(({
  theme
}) => {
  cov_116gqf86v4().f[1]++;
  cov_116gqf86v4().s[6]++;
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: theme.palette.text.neutral.default
  };
}));
cov_116gqf86v4().s[7]++;

const isVisualizerEnabled = capabilitiesRegistry => {
  cov_116gqf86v4().f[2]++;
  const navigatorExtension = (cov_116gqf86v4().s[8]++, (cov_116gqf86v4().b[0][0]++, _.get(capabilitiesRegistry, 'extensions.navigator')) || (cov_116gqf86v4().b[0][1]++, []));
  cov_116gqf86v4().s[9]++;
  return navigatorExtension.some(ext => {
    cov_116gqf86v4().f[3]++;
    cov_116gqf86v4().s[10]++;
    return ext.title === 'MeshMap';
  });
};

cov_116gqf86v4().s[11]++;
const FinalizeDeployment = ({
  design,
  openInVisualizer,
  setOpenInVisualizer
}) => {
  cov_116gqf86v4().f[4]++;
  const {
    configurableComponents
  } = (cov_116gqf86v4().s[12]++, processDesign(design));
  const selectedEnvironments = (cov_116gqf86v4().s[13]++, (0,_store_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useSelectorRtk */ .n6)(_store_slices_globalEnvironmentContext__WEBPACK_IMPORTED_MODULE_1__/* .selectSelectedEnvs */ .zp));
  const envNames = (cov_116gqf86v4().s[14]++, Object.values(selectedEnvironments).map(env => {
    cov_116gqf86v4().f[5]++;
    cov_116gqf86v4().s[15]++;
    return env.name;
  }));
  const capabilitiesRegistry = (cov_116gqf86v4().s[16]++, (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => {
    cov_116gqf86v4().f[6]++;
    cov_116gqf86v4().s[17]++;
    return state.get('capabilitiesRegistry');
  }));
  const visualizerEnabled = (cov_116gqf86v4().s[18]++, isVisualizerEnabled(capabilitiesRegistry));
  const theme = (cov_116gqf86v4().s[19]++, useTheme());
  const palette = (cov_116gqf86v4().s[20]++, theme.palette);
  cov_116gqf86v4().s[21]++;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Box, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StepHeading, {
      children: "Finalize Deployment"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Box, {
      mt: 2,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: 'wrap',
      gap: 2,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledSummaryItem, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Typography, {
          color: palette.text.disabled,
          variant: "textB2SemiBold",
          children: "Environments"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Stack, {
          gap: 1,
          mt: 1,
          children: envNames.map(env => {
            cov_116gqf86v4().f[7]++;
            cov_116gqf86v4().s[22]++;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(StyledEnvironment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(EnvironmentIcon, {
                fill: palette.text.neutral.default
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Typography, {
                variant: "textB1Regular",
                children: env
              }, env)]
            }, env);
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StyledSummaryItem, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Box, {
          display: "flex",
          alignItems: "baseline",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Typography, {
            variant: "textH1Bold",
            color: palette.text.neutral.default,
            children: configurableComponents.length
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Typography, {
            variant: "textB2SemiBold",
            color: palette.text.disabled,
            style: {
              textTransform: 'lowercase'
            },
            children: "component(s)"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Stack, {
      mt: 3,
      gap: 1,
      children: [(cov_116gqf86v4().b[1][0]++, visualizerEnabled) && (cov_116gqf86v4().b[1][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CheckBoxField, {
        label: "Open in Visualizer",
        checked: openInVisualizer,
        helpText: "Opens the deployed design in visualizer",
        onChange: () => {
          cov_116gqf86v4().f[8]++;
          cov_116gqf86v4().s[23]++;
          return setOpenInVisualizer(!openInVisualizer);
        }
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CheckBoxField, {
        label: "Schedule Deployment",
        checked: false,
        onChange: () => {
          cov_116gqf86v4().f[9]++;
        },
        disabled: true
      })]
    })]
  });
};

/***/ }),

/***/ 26652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ExportModal)
});

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./assets/icons/Pattern.js
var Pattern = __webpack_require__(76445);
// EXTERNAL MODULE: external "@khulnasoft/sistent"
var sistent_ = __webpack_require__(7352);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(72105);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./assets/icons/OriginalApplicationIcon.js
function cov_2h58ng6j4p() {
  var path = "/workspace/meshplay/ui/assets/icons/OriginalApplicationIcon.js";
  var hash = "0edebd0d032e0f9f7bdab41cdad9a7828a137278";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/OriginalApplicationIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 36
        },
        end: {
          line: 71,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 70,
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
            column: 36
          },
          end: {
            line: 3,
            column: 37
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 70,
            column: 8
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
    hash: "0edebd0d032e0f9f7bdab41cdad9a7828a137278"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2h58ng6j4p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2h58ng6j4p();



cov_2h58ng6j4p().s[0]++;

const OriginalApplicationFileIcon = ({
  width,
  height
}) => {
  cov_2h58ng6j4p().f[0]++;
  cov_2h58ng6j4p().s[1]++;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: width,
    height: height,
    viewBox: "0 0 76 75",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      clipPath: "url(#clip0_8624_30319)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M13.4898 37.5593C7.19773 37.5593 4.05168 23.8106 0.901676 10.058C-2.24832 -3.69468 -5.39438 -17.4434 -11.6904 -17.4434",
        stroke: "#BF9000",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M52.193 73.9142C49.4438 73.9142 46.807 72.8229 44.8619 70.88C42.9168 68.9372 41.8225 66.3016 41.8193 63.5524C41.8204 60.8014 42.9137 58.1635 44.8589 56.2182C46.8041 54.273 49.4421 53.1798 52.193 53.1787C54.9436 53.1798 57.5812 54.2732 59.5258 56.2185C61.4704 58.1638 62.5628 60.8018 62.5628 63.5524C62.5607 66.3013 61.4672 68.9368 59.5227 70.8798C57.5783 72.8228 54.9419 73.9142 52.193 73.9142Z",
        fill: "#00B39F"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M23.8629 47.9329C21.112 47.9318 18.474 46.8386 16.5288 44.8933C14.5836 42.9481 13.4903 40.3101 13.4893 37.5592C13.4913 34.8089 14.5851 32.172 16.5302 30.2276C18.4753 28.2832 21.1127 27.1905 23.8629 27.1895C25.2247 27.1895 26.5732 27.4577 27.8313 27.9788C29.0894 28.4999 30.2325 29.2638 31.1955 30.2267C32.1584 31.1896 32.9222 32.3328 33.4433 33.5909C33.9645 34.849 34.2327 36.1974 34.2327 37.5592C34.2327 40.3098 33.1403 42.9478 31.1957 44.8931C29.2511 46.8384 26.6135 47.9318 23.8629 47.9329Z",
        fill: "#00B39F"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M52.193 47.9329C49.4421 47.9318 46.8041 46.8386 44.8589 44.8933C42.9137 42.9481 41.8204 40.3101 41.8193 37.5592C41.8214 34.8089 42.9152 32.172 44.8603 30.2276C46.8054 28.2832 49.4428 27.1905 52.193 27.1895C54.9432 27.1895 57.5808 28.282 59.5255 30.2267C61.4702 32.1714 62.5628 34.809 62.5628 37.5592C62.5628 40.3098 61.4704 42.9478 59.5258 44.8931C57.5812 46.8384 54.9436 47.9318 52.193 47.9329Z",
        fill: "#00B39F"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M41.8199 63.5529C39.9331 63.5529 38.9896 57.0555 38.0462 50.5621C37.1028 44.0687 36.1712 37.5674 34.2646 37.5674",
        stroke: "#CD502F",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M34.2324 37.5596C36.1232 37.5596 37.0666 37.5951 38.0101 37.6267C38.9535 37.6583 39.8969 37.6938 41.7877 37.6938",
        stroke: "#CD502F",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M52.1934 53.1717C52.1934 51.8651 52.2249 51.198 52.2565 50.5586C52.2881 49.9191 52.3236 49.248 52.3236 47.9375",
        stroke: "#CD502F",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M52.2047 21.9475C49.4545 21.9475 46.8169 20.855 44.8722 18.9103C42.9275 16.9656 41.835 14.328 41.835 11.5777C41.835 8.82752 42.9275 6.18994 44.8722 4.24523C46.8169 2.30053 49.4545 1.20801 52.2047 1.20801C54.9553 1.20801 57.5933 2.3004 59.5386 4.24499C61.4839 6.18958 62.5773 8.82716 62.5784 11.5777C62.5773 14.3283 61.4839 16.9659 59.5386 18.9105C57.5933 20.8551 54.9553 21.9475 52.2047 21.9475Z",
        fill: "#00B39F"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M52.1934 27.1893C52.1934 25.8827 52.2249 25.2156 52.2565 24.5761C52.2881 23.9367 52.3236 23.2656 52.3236 21.9551",
        stroke: "#359AC0",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M34.2324 37.5597C36.139 37.5597 37.0903 31.0662 38.0416 24.5728C38.9929 18.0794 39.9482 11.582 41.8548 11.582",
        stroke: "#359AC0",
        strokeWidth: "2",
        strokeLinejoin: "round"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "clip0_8624_30319",
        children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
          width: "75",
          height: "75",
          fill: "white",
          transform: "translate(0.25)"
        })
      })
    })]
  });
};

/* harmony default export */ const OriginalApplicationIcon = (OriginalApplicationFileIcon);
;// CONCATENATED MODULE: ./assets/icons/ModifiedApplicationIcon.js
function cov_270wkqne74() {
  var path = "/workspace/meshplay/ui/assets/icons/ModifiedApplicationIcon.js";
  var hash = "11f183c39710899105c5d2f4d5fefbacc9eb99ab";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/icons/ModifiedApplicationIcon.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 36
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 29,
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
            column: 36
          },
          end: {
            line: 3,
            column: 37
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 29,
            column: 8
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
    hash: "11f183c39710899105c5d2f4d5fefbacc9eb99ab"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_270wkqne74 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_270wkqne74();



cov_270wkqne74().s[0]++;

const ModifiedApplicationFileIcon = ({
  width,
  height
}) => {
  cov_270wkqne74().f[0]++;
  cov_270wkqne74().s[1]++;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: width,
    height: height,
    viewBox: "0 0 76 82",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      clipPath: "url(#clip0_8624_30273)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M30.3341 35.3818C24.2675 33.7126 17.5869 46.1341 10.9014 58.5584C4.21593 70.9826 -2.46469 83.4041 -8.53516 81.7339",
        stroke: "#BF9000",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M15.75 62C9.50294 62 6.37941 66.9993 3.25196 72C0.12451 77.0007 -2.99902 82 -9.25 82",
        stroke: "#BF9000",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M24.8629 48.4329C22.112 48.4318 19.474 47.3386 17.5288 45.3933C15.5836 43.4481 14.4903 40.8101 14.4893 38.0592C14.4913 35.3089 15.5851 32.672 17.5302 30.7276C19.4753 28.7832 22.1127 27.6905 24.8629 27.6895C26.2247 27.6895 27.5732 27.9577 28.8313 28.4788C30.0894 28.9999 31.2325 29.7638 32.1955 30.7267C33.1584 31.6896 33.9222 32.8328 34.4433 34.0909C34.9645 35.349 35.2327 36.6974 35.2327 38.0592C35.2327 40.8098 34.1403 43.4478 32.1957 45.3931C30.2511 47.3384 27.6135 48.4318 24.8629 48.4329Z",
        fill: "#00B39F"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M53.193 48.4329C50.4421 48.4318 47.8041 47.3386 45.8589 45.3933C43.9137 43.4481 42.8204 40.8101 42.8193 38.0592C42.8214 35.3089 43.9152 32.672 45.8603 30.7276C47.8054 28.7832 50.4428 27.6905 53.193 27.6895C55.9432 27.6895 58.5808 28.782 60.5255 30.7267C62.4702 32.6714 63.5628 35.309 63.5628 38.0592C63.5628 40.8098 62.4704 43.4478 60.5258 45.3931C58.5812 47.3384 55.9436 48.4318 53.193 48.4329Z",
        fill: "#00B39F"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M42.8199 64.0529C40.9331 64.0529 39.9896 57.5555 39.0462 51.0621C38.1028 44.5687 37.1712 38.0674 35.2646 38.0674",
        stroke: "#CD502F",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M35.2324 38.0596C37.1232 38.0596 38.0666 38.0951 39.0101 38.1267C39.9535 38.1583 40.8969 38.1938 42.7877 38.1938",
        stroke: "#CD502F",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M53.1934 53.6717C53.1934 52.3651 53.2249 51.698 53.2565 51.0586C53.2881 50.4191 53.3236 49.748 53.3236 48.4375",
        stroke: "#CD502F",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M53.2047 22.4475C50.4545 22.4475 47.8169 21.355 45.8722 19.4103C43.9275 17.4656 42.835 14.828 42.835 12.0777C42.835 9.32752 43.9275 6.68994 45.8722 4.74523C47.8169 2.80053 50.4545 1.70801 53.2047 1.70801C55.9553 1.70801 58.5933 2.8004 60.5386 4.74499C62.4839 6.68958 63.5773 9.32716 63.5784 12.0777C63.5773 14.8283 62.4839 17.4659 60.5386 19.4105C58.5933 21.3551 55.9553 22.4475 53.2047 22.4475Z",
        fill: "#00B39F"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M53.1934 27.6893C53.1934 26.3827 53.2249 25.7156 53.2565 25.0761C53.2881 24.4367 53.3236 23.7656 53.3236 22.4551",
        stroke: "#359AC0",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M35.2324 38.0597C37.139 38.0597 38.0903 31.5662 39.0416 25.0728C39.9929 18.5794 40.9482 12.082 42.8548 12.082",
        stroke: "#359AC0",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M26.9046 67.8707C27.1496 65.9799 33.7114 65.8707 40.2732 65.7614C46.835 65.6522 53.4013 65.5396 53.6462 63.6488",
        stroke: "#359AC0",
        strokeWidth: "2",
        strokeLinejoin: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M25.3737 73.7355C22.6245 73.7355 19.9877 72.6442 18.0426 70.7013C16.0975 68.7584 15.0031 66.1229 15 63.3737C15.001 60.6227 16.0943 57.9848 18.0395 56.0395C19.9848 54.0943 22.6227 53.001 25.3737 53C28.1243 53.001 30.7618 54.0944 32.7064 56.0398C34.651 57.9851 35.7434 60.6231 35.7434 63.3737C35.7413 66.1225 34.6479 68.7581 32.7034 70.7011C30.7589 72.6441 28.1225 73.7355 25.3737 73.7355Z",
        fill: "#00B39F"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M53.193 74.4142C50.4438 74.4142 47.807 73.3229 45.8619 71.38C43.9168 69.4372 42.8225 66.8016 42.8193 64.0524C42.8204 61.3014 43.9137 58.6635 45.8589 56.7182C47.8041 54.773 50.4421 53.6798 53.193 53.6787C55.9436 53.6798 58.5812 54.7732 60.5258 56.7185C62.4704 58.6638 63.5628 61.3018 63.5628 64.0524C63.5607 66.8013 62.4672 69.4368 60.5227 71.3798C58.5783 73.3228 55.9419 74.4142 53.193 74.4142Z",
        fill: "#00B39F"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "clip0_8624_30273",
        children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
          width: "75",
          height: "82",
          fill: "white",
          transform: "translate(0.75)"
        })
      })
    })]
  });
};

/* harmony default export */ const ModifiedApplicationIcon = (ModifiedApplicationFileIcon);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(48308);
// EXTERNAL MODULE: ./components/MeshplayMeshInterface/PatternService/CustomTextTooltip.js
var CustomTextTooltip = __webpack_require__(95484);
// EXTERNAL MODULE: ./assets/icons/InfoOutlined.js
var InfoOutlined = __webpack_require__(99889);
// EXTERNAL MODULE: ./themes/app.js
var app = __webpack_require__(25879);
;// CONCATENATED MODULE: ./components/ExportModal.js
function cov_oif2bm53x() {
  var path = "/workspace/meshplay/ui/components/ExportModal.js";
  var hash = "7423c68fbfc01f6cdec331d86bcb6af1c4ba1ac2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/ExportModal.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 15
        },
        end: {
          line: 101,
          column: 2
        }
      },
      "1": {
        start: {
          line: 22,
          column: 27
        },
        end: {
          line: 101,
          column: 1
        }
      },
      "2": {
        start: {
          line: 103,
          column: 20
        },
        end: {
          line: 260,
          column: 1
        }
      },
      "3": {
        start: {
          line: 110,
          column: 6
        },
        end: {
          line: 110,
          column: 11
        }
      },
      "4": {
        start: {
          line: 112,
          column: 30
        },
        end: {
          line: 112,
          column: 51
        }
      },
      "5": {
        start: {
          line: 114,
          column: 22
        },
        end: {
          line: 117,
          column: 3
        }
      },
      "6": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 115,
          column: 20
        }
      },
      "7": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 116,
          column: 32
        }
      },
      "8": {
        start: {
          line: 119,
          column: 26
        },
        end: {
          line: 122,
          column: 3
        }
      },
      "9": {
        start: {
          line: 124,
          column: 26
        },
        end: {
          line: 131,
          column: 3
        }
      },
      "10": {
        start: {
          line: 132,
          column: 2
        },
        end: {
          line: 259,
          column: 4
        }
      },
      "11": {
        start: {
          line: 191,
          column: 20
        },
        end: {
          line: 195,
          column: 21
        }
      },
      "12": {
        start: {
          line: 214,
          column: 38
        },
        end: {
          line: 214,
          column: 84
        }
      },
      "13": {
        start: {
          line: 232,
          column: 32
        },
        end: {
          line: 232,
          column: 96
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 15
          },
          end: {
            line: 22,
            column: 16
          }
        },
        loc: {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 101,
            column: 1
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 103,
            column: 20
          },
          end: {
            line: 103,
            column: 21
          }
        },
        loc: {
          start: {
            line: 103,
            column: 31
          },
          end: {
            line: 260,
            column: 1
          }
        },
        line: 103
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 114,
            column: 22
          },
          end: {
            line: 114,
            column: 23
          }
        },
        loc: {
          start: {
            line: 114,
            column: 28
          },
          end: {
            line: 117,
            column: 3
          }
        },
        line: 114
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 190,
            column: 27
          },
          end: {
            line: 190,
            column: 28
          }
        },
        loc: {
          start: {
            line: 191,
            column: 20
          },
          end: {
            line: 195,
            column: 21
          }
        },
        line: 191
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 214,
            column: 31
          },
          end: {
            line: 214,
            column: 32
          }
        },
        loc: {
          start: {
            line: 214,
            column: 38
          },
          end: {
            line: 214,
            column: 84
          }
        },
        line: 214
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 232,
            column: 25
          },
          end: {
            line: 232,
            column: 26
          }
        },
        loc: {
          start: {
            line: 232,
            column: 32
          },
          end: {
            line: 232,
            column: 96
          }
        },
        line: 232
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 179,
            column: 11
          },
          end: {
            line: 208,
            column: 11
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 179,
            column: 11
          },
          end: {
            line: 179,
            column: 47
          }
        }, {
          start: {
            line: 180,
            column: 12
          },
          end: {
            line: 207,
            column: 18
          }
        }],
        line: 179
      },
      "1": {
        loc: {
          start: {
            line: 244,
            column: 11
          },
          end: {
            line: 244,
            column: 78
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 244,
            column: 11
          },
          end: {
            line: 244,
            column: 27
          }
        }, {
          start: {
            line: 244,
            column: 31
          },
          end: {
            line: 244,
            column: 78
          }
        }],
        line: 244
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
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7423c68fbfc01f6cdec331d86bcb6af1c4ba1ac2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_oif2bm53x = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_oif2bm53x();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















cov_oif2bm53x().s[0]++;

const styles = theme => {
  cov_oif2bm53x().f[0]++;
  cov_oif2bm53x().s[1]++;
  return {
    dialogTitle: {
      backgroundColor: theme.palette.secondary.mainBackground,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '12px 20px',
      gap: '146px',
      color: '#FFFFFF',
      textAlign: 'center',
      textOverflow: 'ellipsis',
      '& h2': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    },
    text: {
      fontFamily: 'Qanelas Soft, sans-serif',
      '&.MuiTypography-root': {
        fontFamily: 'Qanelas Soft, sans-serif'
      }
    },
    textHeader: {
      fontFamily: 'Qanelas Soft, sans-serif',
      textAlign: 'center'
    },
    closing: {
      transform: 'rotate(-90deg)',
      '&:hover': {
        transform: 'rotate(90deg)',
        transition: 'all .3s ease-in',
        cursor: 'pointer'
      }
    },
    exportBtns: {
      '& p': {
        margin: '0 0 0.75rem'
      },
      '& button': {
        height: '8rem',
        border: 0,
        boxShadow: '0rem 0rem 0.375rem rgba(0, 0, 0, 0.25)',
        '& span': {
          flexWrap: 'wrap',
          '& .MuiButton-startIcon': {
            flex: '0 0 100%',
            justifyContent: 'center'
          },
          '& .MuiButton-endIcon': {
            margin: 0
          }
        }
      }
    },
    infoIconButton: {
      color: theme.palette.secondary.focused
    },
    infoIcon: {
      color: theme.palette.secondary.focused,
      fill: 'currentColor',
      '&:hover': {
        color: app/* Colors.keppelGreen */.wL.keppelGreen
      }
    },
    toolTip: {
      textDecoration: 'underline',
      color: theme.palette.secondary.link2
    },
    dialogAction: {
      padding: '0.5rem 1rem',
      '&.MuiDialogActions-root': {
        padding: '0.5rem 1rem'
      }
    }
  };
};

cov_oif2bm53x().s[2]++;

const ExportModal = props => {
  cov_oif2bm53x().f[1]++;
  const {
    downloadModal,
    handleDownloadDialogClose,
    handleDesignDownload,
    classes,
    ExtensibleButton
  } = (cov_oif2bm53x().s[3]++, props);
  const [closed, setClosed] = (cov_oif2bm53x().s[4]++, external_react_default().useState(false));
  cov_oif2bm53x().s[5]++;

  const handleClose = () => {
    cov_oif2bm53x().f[2]++;
    cov_oif2bm53x().s[6]++;
    setClosed(true);
    cov_oif2bm53x().s[7]++;
    handleDownloadDialogClose();
  };

  const exportBtnStyles = (cov_oif2bm53x().s[8]++, {
    boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px'
  });
  const exportWrpStyles = (cov_oif2bm53x().s[9]++, {
    width: '8rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  });
  cov_oif2bm53x().s[10]++;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Dialog, {
    open: downloadModal.open,
    onClose: handleClose,
    "aria-labelledby": "download-design-dialog",
    "aria-describedby": "download-design-dialog-description",
    maxWidth: "xl",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.DialogTitle, {
      textAlign: "center",
      id: "download-design-dialog-title",
      className: classes.dialogTitle,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Pattern/* default */.Z, {
        width: 30,
        height: 30,
        style: {
          filter: 'none',
          opacity: 1
        },
        fill: "#FFF"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        className: classes.textHeader,
        variant: "h6",
        children: "Export Design"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
        "aria-label": "close",
        onClick: handleClose,
        component: "button",
        style: {
          color: '#FFFFFF'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(sistent_.CloseIcon, {
          className: classes.closing,
          fill: '#FFF'
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.DialogContent, {
      style: {
        display: 'inline-table',
        maxWidth: '50rem',
        padding: '3rem',
        margin: '0 auto'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
        sx: {
          display: 'flex',
          gap: '2.5rem',
          width: 'auto',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        },
        children: [(cov_oif2bm53x().b[0][0]++, downloadModal?.content?.type?.String) && (cov_oif2bm53x().b[0][1]++, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
            component: 'h4',
            style: {
              paddingBottom: '1.5rem',
              maxWidth: '9rem'
            },
            className: classes.text,
            children: ["Original (", downloadModal?.content?.type?.String, ")"]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: exportBtnStyles,
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
              onClick: e => {
                cov_oif2bm53x().f[3]++;
                cov_oif2bm53x().s[11]++;
                return handleDesignDownload(e, downloadModal.content, downloadModal?.content.type?.String);
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: exportWrpStyles,
                children: [/*#__PURE__*/jsx_runtime_.jsx(OriginalApplicationIcon, {
                  width: 75,
                  height: 75
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  style: {
                    display: 'flex',
                    padding: '0.8rem'
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                    children: " EXPORT "
                  }), /*#__PURE__*/jsx_runtime_.jsx(icons_.GetApp, {})]
                })]
              })
            })
          })]
        })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            component: "p",
            style: {
              paddingBottom: '1.5rem'
            },
            className: classes.text,
            children: "Current"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: exportBtnStyles,
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
              onClick: e => {
                cov_oif2bm53x().f[4]++;
                cov_oif2bm53x().s[12]++;
                return handleDesignDownload(e, downloadModal.content);
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: exportWrpStyles,
                children: [/*#__PURE__*/jsx_runtime_.jsx(ModifiedApplicationIcon, {
                  width: 75,
                  height: 82
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  style: {
                    display: 'flex',
                    padding: '0.4rem'
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                    children: " EXPORT "
                  }), /*#__PURE__*/jsx_runtime_.jsx(icons_.GetApp, {})]
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            style: {
              paddingBottom: '1.5rem'
            },
            className: classes.text,
            children: "OCI"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: exportBtnStyles,
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
              onClick: e => {
                cov_oif2bm53x().f[5]++;
                cov_oif2bm53x().s[13]++;
                return handleDesignDownload(e, downloadModal.content, null, 'oci=true');
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: exportWrpStyles,
                children: [/*#__PURE__*/jsx_runtime_.jsx(ModifiedApplicationIcon, {
                  width: 75,
                  height: 82
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  style: {
                    display: 'flex',
                    padding: '0.4rem'
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                    children: " EXPORT "
                  }), /*#__PURE__*/jsx_runtime_.jsx(icons_.GetApp, {})]
                })]
              })
            })
          })]
        }), (cov_oif2bm53x().b[1][0]++, ExtensibleButton) && (cov_oif2bm53x().b[1][1]++, /*#__PURE__*/jsx_runtime_.jsx(ExtensibleButton, _objectSpread(_objectSpread({}, props), {}, {
          closed: closed
        })))]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(sistent_.DialogActions, {
      className: classes.dialogAction,
      children: /*#__PURE__*/jsx_runtime_.jsx(CustomTextTooltip/* CustomTextTooltip */.y, {
        placement: "top",
        interactive: true,
        title: "MeshMap Designer offers multiple export options, allowing you to choose the format that suits your needs. [Learn more](https://docs.khulnasoft.com/meshmap/designer/export-designs/)",
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
          className: classes.infoIconButton,
          color: "primary",
          children: /*#__PURE__*/jsx_runtime_.jsx(InfoOutlined/* default */.Z, {
            height: 24,
            width: 24,
            className: classes.infoIcon
          })
        })
      })
    })]
  });
};

/* harmony default export */ const components_ExportModal = ((0,styles_.withStyles)(styles)(ExportModal));

/***/ }),

/***/ 74793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GT": () => (/* binding */ useRemoveConnectionFromEnvironmentMutation),
/* harmony export */   "JS": () => (/* binding */ useAddConnectionToEnvironmentMutation),
/* harmony export */   "Y4": () => (/* binding */ useCreateEnvironmentMutation),
/* harmony export */   "_O": () => (/* binding */ useUpdateEnvironmentMutation),
/* harmony export */   "gm": () => (/* binding */ useDeleteEnvironmentMutation),
/* harmony export */   "me": () => (/* binding */ useGetEnvironmentConnectionsQuery),
/* harmony export */   "s8": () => (/* binding */ useSaveEnvironmentMutation),
/* harmony export */   "wt": () => (/* binding */ useGetEnvironmentsQuery)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51125);
function cov_12uj5b7jyf() {
  var path = "/workspace/meshplay/ui/rtk-query/environments.js";
  var hash = "73e19344fc13ee3f1b165d046b5148e8f604757a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/rtk-query/environments.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 105,
          column: 4
        }
      },
      "2": {
        start: {
          line: 11,
          column: 29
        },
        end: {
          line: 104,
          column: 5
        }
      },
      "3": {
        start: {
          line: 13,
          column: 30
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "4": {
        start: {
          line: 24,
          column: 28
        },
        end: {
          line: 24,
          column: 68
        }
      },
      "5": {
        start: {
          line: 28,
          column: 30
        },
        end: {
          line: 32,
          column: 9
        }
      },
      "6": {
        start: {
          line: 34,
          column: 31
        },
        end: {
          line: 34,
          column: 71
        }
      },
      "7": {
        start: {
          line: 38,
          column: 30
        },
        end: {
          line: 42,
          column: 9
        }
      },
      "8": {
        start: {
          line: 44,
          column: 31
        },
        end: {
          line: 44,
          column: 71
        }
      },
      "9": {
        start: {
          line: 48,
          column: 30
        },
        end: {
          line: 51,
          column: 9
        }
      },
      "10": {
        start: {
          line: 53,
          column: 31
        },
        end: {
          line: 53,
          column: 71
        }
      },
      "11": {
        start: {
          line: 57,
          column: 30
        },
        end: {
          line: 66,
          column: 9
        }
      },
      "12": {
        start: {
          line: 67,
          column: 48
        },
        end: {
          line: 69,
          column: 9
        }
      },
      "13": {
        start: {
          line: 73,
          column: 30
        },
        end: {
          line: 77,
          column: 9
        }
      },
      "14": {
        start: {
          line: 79,
          column: 51
        },
        end: {
          line: 81,
          column: 9
        }
      },
      "15": {
        start: {
          line: 85,
          column: 30
        },
        end: {
          line: 89,
          column: 9
        }
      },
      "16": {
        start: {
          line: 91,
          column: 51
        },
        end: {
          line: 93,
          column: 9
        }
      },
      "17": {
        start: {
          line: 97,
          column: 30
        },
        end: {
          line: 101,
          column: 9
        }
      },
      "18": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 116,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 11,
            column: 16
          }
        },
        loc: {
          start: {
            line: 11,
            column: 29
          },
          end: {
            line: 104,
            column: 5
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 15
          },
          end: {
            line: 13,
            column: 16
          }
        },
        loc: {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 23,
            column: 9
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 22
          },
          end: {
            line: 24,
            column: 23
          }
        },
        loc: {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 68
          }
        },
        line: 24
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 28,
            column: 15
          },
          end: {
            line: 28,
            column: 16
          }
        },
        loc: {
          start: {
            line: 28,
            column: 30
          },
          end: {
            line: 32,
            column: 9
          }
        },
        line: 28
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 25
          },
          end: {
            line: 34,
            column: 26
          }
        },
        loc: {
          start: {
            line: 34,
            column: 31
          },
          end: {
            line: 34,
            column: 71
          }
        },
        line: 34
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 38,
            column: 15
          },
          end: {
            line: 38,
            column: 16
          }
        },
        loc: {
          start: {
            line: 38,
            column: 30
          },
          end: {
            line: 42,
            column: 9
          }
        },
        line: 38
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 44,
            column: 25
          },
          end: {
            line: 44,
            column: 26
          }
        },
        loc: {
          start: {
            line: 44,
            column: 31
          },
          end: {
            line: 44,
            column: 71
          }
        },
        line: 44
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 48,
            column: 15
          },
          end: {
            line: 48,
            column: 16
          }
        },
        loc: {
          start: {
            line: 48,
            column: 30
          },
          end: {
            line: 51,
            column: 9
          }
        },
        line: 48
      },
      "8": {
        name: "(anonymous_8)",
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
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 57,
            column: 15
          },
          end: {
            line: 57,
            column: 16
          }
        },
        loc: {
          start: {
            line: 57,
            column: 30
          },
          end: {
            line: 66,
            column: 9
          }
        },
        line: 57
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 67,
            column: 22
          },
          end: {
            line: 67,
            column: 23
          }
        },
        loc: {
          start: {
            line: 67,
            column: 48
          },
          end: {
            line: 69,
            column: 9
          }
        },
        line: 67
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 73,
            column: 15
          },
          end: {
            line: 73,
            column: 16
          }
        },
        loc: {
          start: {
            line: 73,
            column: 30
          },
          end: {
            line: 77,
            column: 9
          }
        },
        line: 73
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 79,
            column: 25
          },
          end: {
            line: 79,
            column: 26
          }
        },
        loc: {
          start: {
            line: 79,
            column: 51
          },
          end: {
            line: 81,
            column: 9
          }
        },
        line: 79
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 85,
            column: 15
          },
          end: {
            line: 85,
            column: 16
          }
        },
        loc: {
          start: {
            line: 85,
            column: 30
          },
          end: {
            line: 89,
            column: 9
          }
        },
        line: 85
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 91,
            column: 25
          },
          end: {
            line: 91,
            column: 26
          }
        },
        loc: {
          start: {
            line: 91,
            column: 51
          },
          end: {
            line: 93,
            column: 9
          }
        },
        line: 91
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 97,
            column: 15
          },
          end: {
            line: 97,
            column: 16
          }
        },
        loc: {
          start: {
            line: 97,
            column: 30
          },
          end: {
            line: 101,
            column: 9
          }
        },
        line: 97
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 18,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 18,
            column: 31
          }
        }, {
          start: {
            line: 18,
            column: 35
          },
          end: {
            line: 18,
            column: 36
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 22
          },
          end: {
            line: 19,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 19,
            column: 22
          },
          end: {
            line: 19,
            column: 39
          }
        }, {
          start: {
            line: 19,
            column: 43
          },
          end: {
            line: 19,
            column: 48
          }
        }],
        line: 19
      },
      "2": {
        loc: {
          start: {
            line: 60,
            column: 18
          },
          end: {
            line: 60,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 60,
            column: 18
          },
          end: {
            line: 60,
            column: 31
          }
        }, {
          start: {
            line: 60,
            column: 35
          },
          end: {
            line: 60,
            column: 36
          }
        }],
        line: 60
      },
      "3": {
        loc: {
          start: {
            line: 62,
            column: 22
          },
          end: {
            line: 62,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 62,
            column: 22
          },
          end: {
            line: 62,
            column: 39
          }
        }, {
          start: {
            line: 62,
            column: 43
          },
          end: {
            line: 62,
            column: 48
          }
        }],
        line: 62
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
      "18": 0
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
      "15": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "73e19344fc13ee3f1b165d046b5148e8f604757a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12uj5b7jyf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_12uj5b7jyf();

const TAGS = (cov_12uj5b7jyf().s[0]++, {
  ENVIRONMENT_CONNECTIONS: 'enivroment_connections'
});
const connectionsApi = (cov_12uj5b7jyf().s[1]++, _index__WEBPACK_IMPORTED_MODULE_0__/* .api.enhanceEndpoints */ .h.enhanceEndpoints({
  addTagTypes: [TAGS.ENVIRONMENT_CONNECTIONS]
}).injectEndpoints({
  endpoints: builder => {
    cov_12uj5b7jyf().f[0]++;
    cov_12uj5b7jyf().s[2]++;
    return {
      getEnvironments: builder.query({
        query: queryArg => {
          cov_12uj5b7jyf().f[1]++;
          cov_12uj5b7jyf().s[3]++;
          return {
            url: `environments`,
            params: {
              search: queryArg.search,
              order: queryArg.order,
              page: (cov_12uj5b7jyf().b[0][0]++, queryArg.page) || (cov_12uj5b7jyf().b[0][1]++, 0),
              pagesize: (cov_12uj5b7jyf().b[1][0]++, queryArg.pagesize) || (cov_12uj5b7jyf().b[1][1]++, 'all'),
              orgID: queryArg.orgId
            },
            method: 'GET'
          };
        },
        providesTags: () => {
          cov_12uj5b7jyf().f[2]++;
          cov_12uj5b7jyf().s[4]++;
          return [{
            type: TAGS.ENVIRONMENT_CONNECTIONS
          }];
        }
      }),
      createEnvironment: builder.mutation({
        query: queryArg => {
          cov_12uj5b7jyf().f[3]++;
          cov_12uj5b7jyf().s[5]++;
          return {
            url: `environments`,
            method: 'POST',
            body: queryArg.environmentPayload
          };
        },
        invalidatesTags: () => {
          cov_12uj5b7jyf().f[4]++;
          cov_12uj5b7jyf().s[6]++;
          return [{
            type: TAGS.ENVIRONMENT_CONNECTIONS
          }];
        }
      }),
      updateEnvironment: builder.mutation({
        query: queryArg => {
          cov_12uj5b7jyf().f[5]++;
          cov_12uj5b7jyf().s[7]++;
          return {
            url: `environments/${queryArg.environmentId}`,
            method: 'PUT',
            body: queryArg.environmentPayload
          };
        },
        invalidatesTags: () => {
          cov_12uj5b7jyf().f[6]++;
          cov_12uj5b7jyf().s[8]++;
          return [{
            type: TAGS.ENVIRONMENT_CONNECTIONS
          }];
        }
      }),
      deleteEnvironment: builder.mutation({
        query: queryArg => {
          cov_12uj5b7jyf().f[7]++;
          cov_12uj5b7jyf().s[9]++;
          return {
            url: `environments/${queryArg.environmentId}`,
            method: 'DELETE'
          };
        },
        invalidatesTags: () => {
          cov_12uj5b7jyf().f[8]++;
          cov_12uj5b7jyf().s[10]++;
          return [{
            type: TAGS.ENVIRONMENT_CONNECTIONS
          }];
        }
      }),
      getEnvironmentConnections: builder.query({
        query: queryArg => {
          cov_12uj5b7jyf().f[9]++;
          cov_12uj5b7jyf().s[11]++;
          return {
            url: `environments/${queryArg.environmentId}/connections`,
            params: {
              page: (cov_12uj5b7jyf().b[2][0]++, queryArg.page) || (cov_12uj5b7jyf().b[2][1]++, 0),
              per_page: queryArg.per_page,
              pagesize: (cov_12uj5b7jyf().b[3][0]++, queryArg.pagesize) || (cov_12uj5b7jyf().b[3][1]++, 'all'),
              filter: queryArg.filter
            },
            method: 'GET'
          };
        },
        providesTags: (_result, _error, arg) => {
          cov_12uj5b7jyf().f[10]++;
          cov_12uj5b7jyf().s[12]++;
          return [{
            type: TAGS.ENVIRONMENT_CONNECTIONS,
            id: arg.environmentId
          }];
        }
      }),
      addConnectionToEnvironment: builder.mutation({
        query: queryArg => {
          cov_12uj5b7jyf().f[11]++;
          cov_12uj5b7jyf().s[13]++;
          return {
            url: `environments/${queryArg.environmentId}/connections/${queryArg.connectionId}`,
            method: 'POST',
            body: {}
          };
        },
        invalidatesTags: (_result, _error, arg) => {
          cov_12uj5b7jyf().f[12]++;
          cov_12uj5b7jyf().s[14]++;
          return [{
            type: TAGS.ENVIRONMENT_CONNECTIONS,
            id: arg.environmentId
          }];
        }
      }),
      removeConnectionFromEnvironment: builder.mutation({
        query: queryArg => {
          cov_12uj5b7jyf().f[13]++;
          cov_12uj5b7jyf().s[15]++;
          return {
            url: `environments/${queryArg.environmentId}/connections/${queryArg.connectionId}`,
            method: 'DELETE',
            body: {}
          };
        },
        invalidatesTags: (_result, _error, arg) => {
          cov_12uj5b7jyf().f[14]++;
          cov_12uj5b7jyf().s[16]++;
          return [{
            type: TAGS.ENVIRONMENT_CONNECTIONS,
            id: arg.environmentId
          }];
        }
      }),
      saveEnvironment: builder.mutation({
        query: queryArg => {
          cov_12uj5b7jyf().f[15]++;
          cov_12uj5b7jyf().s[17]++;
          return {
            url: `environments`,
            method: 'POST',
            body: queryArg.body
          };
        },
        invalidatesTags: [{
          type: TAGS.ENVIRONMENT_CONNECTIONS
        }]
      })
    };
  }
}));
const {
  useGetEnvironmentsQuery,
  useCreateEnvironmentMutation,
  useUpdateEnvironmentMutation,
  useDeleteEnvironmentMutation,
  useGetEnvironmentConnectionsQuery,
  useAddConnectionToEnvironmentMutation,
  useRemoveConnectionFromEnvironmentMutation,
  useSaveEnvironmentMutation
} = (cov_12uj5b7jyf().s[18]++, connectionsApi);

/***/ })

};
;