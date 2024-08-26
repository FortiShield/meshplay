"use strict";
exports.id = 1188;
exports.ids = [1188];
exports.modules = {

/***/ 1188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getPath)
/* harmony export */ });
function cov_nocyendk1() {
  var path = "/workspace/meshplay/ui/lib/path.js";
  var hash = "bf0d29701fabb7bffd0fa400c1cd096f2fe4799f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/lib/path.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 13
        },
        end: {
          line: 2,
          column: 74
        }
      },
      "1": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 5,
          column: 3
        }
      },
      "2": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 52
        }
      },
      "3": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 70
        }
      },
      "4": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "getPath",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 23
          }
        },
        loc: {
          start: {
            line: 1,
            column: 26
          },
          end: {
            line: 8,
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
            column: 13
          },
          end: {
            line: 2,
            column: 74
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 2,
            column: 45
          },
          end: {
            line: 2,
            column: 69
          }
        }, {
          start: {
            line: 2,
            column: 72
          },
          end: {
            line: 2,
            column: 74
          }
        }],
        line: 2
      },
      "1": {
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
      },
      "2": {
        loc: {
          start: {
            line: 6,
            column: 10
          },
          end: {
            line: 6,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 6,
            column: 42
          },
          end: {
            line: 6,
            column: 64
          }
        }, {
          start: {
            line: 6,
            column: 67
          },
          end: {
            line: 6,
            column: 69
          }
        }],
        line: 6
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bf0d29701fabb7bffd0fa400c1cd096f2fe4799f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_nocyendk1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_nocyendk1();
function getPath() {
  cov_nocyendk1().f[0]++;
  let path = (cov_nocyendk1().s[0]++,  false ? (0) : (cov_nocyendk1().b[0][1]++, ''));
  cov_nocyendk1().s[1]++;

  if (path.lastIndexOf('/') > 0) {
    cov_nocyendk1().b[1][0]++;
    cov_nocyendk1().s[2]++;
    path = path.substring(0, path.lastIndexOf('/'));
  } else {
    cov_nocyendk1().b[1][1]++;
  }

  cov_nocyendk1().s[3]++;
  path +=  false ? (0) : (cov_nocyendk1().b[2][1]++, '');
  cov_nocyendk1().s[4]++;
  return path;
}

/***/ })

};
;