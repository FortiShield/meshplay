"use strict";
exports.id = 6815;
exports.ids = [6815];
exports.modules = {

/***/ 96815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ trueRandom)
/* harmony export */ });
function cov_2orwj8hyp5() {
  var path = "/workspace/meshplay/ui/lib/trueRandom.js";
  var hash = "cf82cae3503cd2f4ffb0a098b13991d5b86e1ae9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/lib/trueRandom.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "trueRandom",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1,
            column: 29
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
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
    hash: "cf82cae3503cd2f4ffb0a098b13991d5b86e1ae9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2orwj8hyp5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2orwj8hyp5();
function trueRandom() {
  cov_2orwj8hyp5().f[0]++;
  cov_2orwj8hyp5().s[0]++;
  return crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
}

/***/ })

};
;