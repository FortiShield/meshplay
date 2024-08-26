"use strict";
exports.id = 5042;
exports.ids = [5042];
exports.modules = {

/***/ 45042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bl": () => (/* binding */ findNestedObject),
/* harmony export */   "HU": () => (/* binding */ filterEmptyFields),
/* harmony export */   "Yf": () => (/* binding */ isEmptyAtAllDepths)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function cov_1sgxqm029i() {
  var path = "/workspace/meshplay/ui/utils/objects.js";
  var hash = "02d97c86564c9016d3478a515cc40ebff2687246";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/utils/objects.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 13,
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
          column: 43
        }
      },
      "2": {
        start: {
          line: 7,
          column: 9
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 46
        }
      },
      "4": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 28
        }
      },
      "5": {
        start: {
          line: 23,
          column: 32
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "6": {
        start: {
          line: 24,
          column: 16
        },
        end: {
          line: 24,
          column: 24
        }
      },
      "7": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "8": {
        start: {
          line: 26,
          column: 26
        },
        end: {
          line: 26,
          column: 37
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
          column: 27
        }
      },
      "11": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "12": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 34,
          column: 7
        }
      },
      "13": {
        start: {
          line: 32,
          column: 23
        },
        end: {
          line: 32,
          column: 96
        }
      },
      "14": {
        start: {
          line: 32,
          column: 65
        },
        end: {
          line: 32,
          column: 95
        }
      },
      "15": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 30
        }
      },
      "16": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 14
        }
      },
      "17": {
        start: {
          line: 42,
          column: 33
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "18": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 48,
          column: 9
        }
      },
      "19": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 46,
          column: 5
        }
      },
      "20": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 27
        }
      },
      "21": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "isEmptyAtAllDepths",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 34
          }
        },
        loc: {
          start: {
            line: 3,
            column: 42
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 32
          },
          end: {
            line: 23,
            column: 33
          }
        },
        loc: {
          start: {
            line: 23,
            column: 55
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 23
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 54
          },
          end: {
            line: 32,
            column: 55
          }
        },
        loc: {
          start: {
            line: 32,
            column: 65
          },
          end: {
            line: 32,
            column: 95
          }
        },
        line: 32
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 43
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 42
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 43,
            column: 34
          },
          end: {
            line: 43,
            column: 35
          }
        },
        loc: {
          start: {
            line: 43,
            column: 48
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 43
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
            line: 13,
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
            line: 13,
            column: 3
          }
        }, {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 13,
            column: 3
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 13,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 13,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 9
          },
          end: {
            line: 13,
            column: 3
          }
        }],
        line: 7
      },
      "2": {
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
      "3": {
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 35,
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
        line: 30
      },
      "4": {
        loc: {
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 30,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 30,
            column: 33
          }
        }, {
          start: {
            line: 30,
            column: 37
          },
          end: {
            line: 30,
            column: 61
          }
        }],
        line: 30
      },
      "5": {
        loc: {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 34,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 34,
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
        line: 31
      },
      "6": {
        loc: {
          start: {
            line: 31,
            column: 10
          },
          end: {
            line: 31,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 10
          },
          end: {
            line: 31,
            column: 35
          }
        }, {
          start: {
            line: 31,
            column: 39
          },
          end: {
            line: 31,
            column: 63
          }
        }],
        line: 31
      },
      "7": {
        loc: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 46,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 46,
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
        line: 44
      },
      "8": {
        loc: {
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 8
          },
          end: {
            line: 44,
            column: 31
          }
        }, {
          start: {
            line: 44,
            column: 35
          },
          end: {
            line: 44,
            column: 51
          }
        }],
        line: 44
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
      "21": 0
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
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "02d97c86564c9016d3478a515cc40ebff2687246"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1sgxqm029i = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1sgxqm029i();

function isEmptyAtAllDepths(input) {
  cov_1sgxqm029i().f[0]++;
  cov_1sgxqm029i().s[0]++;

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(input)) {
    cov_1sgxqm029i().b[0][0]++;
    cov_1sgxqm029i().s[1]++;
    // If the input is an array, check if all items are empty at all depths
    return input.every(isEmptyAtAllDepths);
  } else {
    cov_1sgxqm029i().b[0][1]++;
    cov_1sgxqm029i().s[2]++;

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(input)) {
      cov_1sgxqm029i().b[1][0]++;
      cov_1sgxqm029i().s[3]++;
      // If the input is an object, check if all properties are empty at all depths
      return lodash__WEBPACK_IMPORTED_MODULE_0___default().every(input, isEmptyAtAllDepths);
    } else {
      cov_1sgxqm029i().b[1][1]++;
      cov_1sgxqm029i().s[4]++;
      // If the input is not an array or object, check if it's empty
      return lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(input);
    }
  }
}
/**
 * Finds the first nested object in a tree-like structure that satisfies a given condition.
 *
 * @param {Object} object - The root object to start the search.
 * @param {Function} condition - A function that takes an object as an argument and returns a boolean indicating if the condition is met.
 * @returns {Object|null} - The first object that satisfies the condition, or null if no matching object is found.
 */

cov_1sgxqm029i().s[5]++;
const findNestedObject = (object, condition) => {
  cov_1sgxqm029i().f[1]++;
  const stack = (cov_1sgxqm029i().s[6]++, [object]);
  cov_1sgxqm029i().s[7]++;

  while (stack.length) {
    const currentObject = (cov_1sgxqm029i().s[8]++, stack.pop());
    cov_1sgxqm029i().s[9]++;

    if (condition(currentObject)) {
      cov_1sgxqm029i().b[2][0]++;
      cov_1sgxqm029i().s[10]++;
      return currentObject;
    } else {
      cov_1sgxqm029i().b[2][1]++;
    }

    cov_1sgxqm029i().s[11]++;

    if ((cov_1sgxqm029i().b[4][0]++, lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(currentObject)) || (cov_1sgxqm029i().b[4][1]++, lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(currentObject))) {
      cov_1sgxqm029i().b[3][0]++;
      cov_1sgxqm029i().s[12]++;

      if ((cov_1sgxqm029i().b[6][0]++, lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(currentObject)) || (cov_1sgxqm029i().b[6][1]++, lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(currentObject))) {
        cov_1sgxqm029i().b[5][0]++;
        const values = (cov_1sgxqm029i().s[13]++, lodash__WEBPACK_IMPORTED_MODULE_0___default().values(currentObject).filter(value => {
          cov_1sgxqm029i().f[2]++;
          cov_1sgxqm029i().s[14]++;
          return value !== currentObject.models;
        }));
        cov_1sgxqm029i().s[15]++;
        stack.push(...values);
      } else {
        cov_1sgxqm029i().b[5][1]++;
      }
    } else {
      cov_1sgxqm029i().b[3][1]++;
    }
  }

  cov_1sgxqm029i().s[16]++;
  return null;
};
/**
 * Accept object and removes empty properties from object.
 **/

cov_1sgxqm029i().s[17]++;
const filterEmptyFields = data => {
  cov_1sgxqm029i().f[3]++;
  cov_1sgxqm029i().s[18]++;
  return Object.keys(data).reduce((acc, key) => {
    cov_1sgxqm029i().f[4]++;
    cov_1sgxqm029i().s[19]++;

    if ((cov_1sgxqm029i().b[8][0]++, data[key] !== undefined) && (cov_1sgxqm029i().b[8][1]++, data[key] !== '')) {
      cov_1sgxqm029i().b[7][0]++;
      cov_1sgxqm029i().s[20]++;
      acc[key] = data[key];
    } else {
      cov_1sgxqm029i().b[7][1]++;
    }

    cov_1sgxqm029i().s[21]++;
    return acc;
  }, {});
};

/***/ })

};
;