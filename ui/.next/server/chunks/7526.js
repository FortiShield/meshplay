"use strict";
exports.id = 7526;
exports.ids = [7526];
exports.modules = {

/***/ 27526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* binding */ FILTER_ENDPOINT),
/* harmony export */   "HH": () => (/* binding */ MESHMODEL_ENDPOINT),
/* harmony export */   "P0": () => (/* binding */ MESHMODEL_COMPONENT_ENDPOINT),
/* harmony export */   "Rd": () => (/* binding */ PATTERN_ENDPOINT),
/* harmony export */   "l6": () => (/* binding */ MESHPLAY_CLOUD_PROD)
/* harmony export */ });
/* unused harmony exports MESHMODEL_RELATIONSHIPS_ENDPOINT, RJSF_SCHEMAS, SORT */
function cov_1b5s3fj6j8() {
  var path = "/workspace/meshplay/ui/constants/endpoints.js";
  var hash = "1f23fba81c7398abe39ef7a5b95f9a9bc055f80b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/constants/endpoints.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 34
        },
        end: {
          line: 2,
          column: 58
        }
      },
      "1": {
        start: {
          line: 3,
          column: 44
        },
        end: {
          line: 3,
          column: 61
        }
      },
      "2": {
        start: {
          line: 4,
          column: 48
        },
        end: {
          line: 4,
          column: 91
        }
      },
      "3": {
        start: {
          line: 5,
          column: 35
        },
        end: {
          line: 5,
          column: 68
        }
      },
      "4": {
        start: {
          line: 6,
          column: 32
        },
        end: {
          line: 6,
          column: 46
        }
      },
      "5": {
        start: {
          line: 7,
          column: 31
        },
        end: {
          line: 7,
          column: 44
        }
      },
      "6": {
        start: {
          line: 8,
          column: 28
        },
        end: {
          line: 8,
          column: 50
        }
      },
      "7": {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 12,
          column: 1
        }
      }
    },
    fnMap: {},
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
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1f23fba81c7398abe39ef7a5b95f9a9bc055f80b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1b5s3fj6j8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1b5s3fj6j8();
//  The constants for API endpoints
const MESHMODEL_ENDPOINT = (cov_1b5s3fj6j8().s[0]++, '/api/meshmodels/models');
const MESHMODEL_COMPONENT_ENDPOINT = (cov_1b5s3fj6j8().s[1]++, '/api/meshmodels');
const MESHMODEL_RELATIONSHIPS_ENDPOINT = (cov_1b5s3fj6j8().s[2]++, '/api/meshmodels/models/core/relationships');
const MESHPLAY_CLOUD_PROD = (cov_1b5s3fj6j8().s[3]++, 'https://meshplay.khulnasoft.com');
const PATTERN_ENDPOINT = (cov_1b5s3fj6j8().s[4]++, '/api/pattern');
const FILTER_ENDPOINT = (cov_1b5s3fj6j8().s[5]++, '/api/filter');
const RJSF_SCHEMAS = (cov_1b5s3fj6j8().s[6]++, '/api/schema/resource');
const SORT = (cov_1b5s3fj6j8().s[7]++, {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
});

/***/ })

};
;