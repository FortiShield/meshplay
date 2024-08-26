(() => {
var exports = {};
exports.id = 3958;
exports.ids = [3958];
exports.modules = {

/***/ 64495:
/***/ (() => {

function cov_2j2ucgxlnl() {
  var path = "/workspace/meshplay/ui/pages/api/__coverage__.js";
  var hash = "96bc595d5d1e568ed427899618b05487d4ead68d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/pages/api/__coverage__.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
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
          column: 71
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 0
          },
          end: {
            line: 5,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 3,
            column: 0
          },
          end: {
            line: 5,
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
        line: 3
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "96bc595d5d1e568ed427899618b05487d4ead68d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2j2ucgxlnl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2j2ucgxlnl();
cov_2j2ucgxlnl().s[0]++;

// Needed for fetching server-side code coverage. See: https://github.com/bahmutov/next-and-cypress-example
if (false) {} else {
  cov_2j2ucgxlnl().b[0][1]++;
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(64495));
module.exports = __webpack_exports__;

})();