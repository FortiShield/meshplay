"use strict";
exports.id = 1913;
exports.ids = [1913];
exports.modules = {

/***/ 68309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eM": () => (/* binding */ createRelayEnvironment),
/* harmony export */   "iv": () => (/* binding */ subscriptionClient)
/* harmony export */ });
/* unused harmony export serializeRelayEnvironment */
/* harmony import */ var graphql_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2024);
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42825);
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(relay_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_ws__WEBPACK_IMPORTED_MODULE_0__, _data_fetch__WEBPACK_IMPORTED_MODULE_2__]);
([graphql_ws__WEBPACK_IMPORTED_MODULE_0__, _data_fetch__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_2av3w3shky() {
  var path = "/workspace/meshplay/ui/lib/relayEnvironment.js";
  var hash = "4677ef29ccb4d74a588450d960b5a4f596076b01";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/lib/relayEnvironment.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "1": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "2": {
        start: {
          line: 22,
          column: 16
        },
        end: {
          line: 22,
          column: 53
        }
      },
      "3": {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 23,
          column: 47
        }
      },
      "4": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "5": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 42,
          column: 5
        }
      },
      "6": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "7": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 69
        }
      },
      "8": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 41,
          column: 6
        }
      },
      "9": {
        start: {
          line: 45,
          column: 41
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "10": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 53
        }
      },
      "11": {
        start: {
          line: 49,
          column: 38
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "12": {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 53,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "fetchQuery",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 19
          }
        },
        loc: {
          start: {
            line: 5,
            column: 42
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "fetchOrSubscribe",
        decl: {
          start: {
            line: 29,
            column: 9
          },
          end: {
            line: 29,
            column: 25
          }
        },
        loc: {
          start: {
            line: 29,
            column: 48
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 29
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 30,
            column: 27
          },
          end: {
            line: 30,
            column: 28
          }
        },
        loc: {
          start: {
            line: 30,
            column: 37
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 45,
            column: 41
          },
          end: {
            line: 45,
            column: 42
          }
        },
        loc: {
          start: {
            line: 45,
            column: 58
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 45
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 49,
            column: 38
          },
          end: {
            line: 49,
            column: 39
          }
        },
        loc: {
          start: {
            line: 49,
            column: 51
          },
          end: {
            line: 54,
            column: 1
          }
        },
        line: 49
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 0
          },
          end: {
            line: 27,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 0
          },
          end: {
            line: 27,
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
        line: 21
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 21
          },
          end: {
            line: 23,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 23,
            column: 29
          },
          end: {
            line: 23,
            column: 37
          }
        }, {
          start: {
            line: 23,
            column: 40
          },
          end: {
            line: 23,
            column: 47
          }
        }],
        line: 23
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 33,
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
        line: 31
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
      "12": 0
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
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4677ef29ccb4d74a588450d960b5a4f596076b01"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2av3w3shky = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2av3w3shky();




function fetchQuery(operation, variables) {
  cov_2av3w3shky().f[0]++;
  cov_2av3w3shky().s[0]++;
  return (0,_data_fetch__WEBPACK_IMPORTED_MODULE_2__/* .promisifiedDataFetch */ .y)('/api/system/graphql/query', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  });
}

let subscriptionClient;
cov_2av3w3shky().s[1]++;

if (false) {} else {
  cov_2av3w3shky().b[0][1]++;
}

function fetchOrSubscribe(operation, variables) {
  cov_2av3w3shky().f[1]++;
  cov_2av3w3shky().s[5]++;
  return relay_runtime__WEBPACK_IMPORTED_MODULE_1__.Observable.create(sink => {
    cov_2av3w3shky().f[2]++;
    cov_2av3w3shky().s[6]++;

    if (!operation.text) {
      cov_2av3w3shky().b[2][0]++;
      cov_2av3w3shky().s[7]++;
      return sink.error(new Error('Operation text cannot be empty'));
    } else {
      cov_2av3w3shky().b[2][1]++;
    }

    cov_2av3w3shky().s[8]++;
    return subscriptionClient.subscribe({
      operationName: operation.name,
      query: operation.text,
      variables
    }, sink);
  });
}

cov_2av3w3shky().s[9]++;
const serializeRelayEnvironment = environment => {
  cov_2av3w3shky().f[3]++;
  cov_2av3w3shky().s[10]++;
  return environment.getStore().getSource().toJSON();
};
cov_2av3w3shky().s[11]++;
const createRelayEnvironment = records => {
  cov_2av3w3shky().f[4]++;
  cov_2av3w3shky().s[12]++;
  return new relay_runtime__WEBPACK_IMPORTED_MODULE_1__.Environment({
    store: new relay_runtime__WEBPACK_IMPORTED_MODULE_1__.Store(new relay_runtime__WEBPACK_IMPORTED_MODULE_1__.RecordSource(records)),
    network: relay_runtime__WEBPACK_IMPORTED_MODULE_1__.Network.create(fetchQuery, fetchOrSubscribe)
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F3": () => (/* binding */ getK8sClusterIdsFromCtxId),
/* harmony export */   "GB": () => (/* binding */ getK8sConfigIdsFromK8sConfig),
/* harmony export */   "GT": () => (/* binding */ ctxUrl),
/* harmony export */   "Or": () => (/* binding */ getConnectionIDsFromContextIds),
/* harmony export */   "js": () => (/* binding */ getK8sContextFromClusterId)
/* harmony export */ });
/* unused harmony exports getFirstCtxIdFromSelectedCtxIds, getK8sClusterNamesFromCtxId, getClusterNameFromClusterId, getClusterNameFromConnectionId, getConnectionIdFromClusterId, getClusterNameFromCtxId */
function cov_2ny6wcomi5() {
  var path = "/workspace/meshplay/ui/utils/multi-ctx.js";
  var hash = "f1a79c5b1c7055e18109854b296b0250c6180b8a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/utils/multi-ctx.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 11,
          column: 78
        }
      },
      "2": {
        start: {
          line: 11,
          column: 46
        },
        end: {
          line: 11,
          column: 67
        }
      },
      "3": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 36
        }
      },
      "4": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 13
        }
      },
      "5": {
        start: {
          line: 25,
          column: 41
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "6": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "7": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 14
        }
      },
      "8": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "9": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 61
        }
      },
      "10": {
        start: {
          line: 31,
          column: 34
        },
        end: {
          line: 31,
          column: 59
        }
      },
      "11": {
        start: {
          line: 33,
          column: 21
        },
        end: {
          line: 33,
          column: 23
        }
      },
      "12": {
        start: {
          line: 34,
          column: 2
        },
        end: {
          line: 39,
          column: 5
        }
      },
      "13": {
        start: {
          line: 35,
          column: 22
        },
        end: {
          line: 35,
          column: 87
        }
      },
      "14": {
        start: {
          line: 35,
          column: 46
        },
        end: {
          line: 35,
          column: 64
        }
      },
      "15": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "16": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 33
        }
      },
      "17": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 20
        }
      },
      "18": {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 53,
          column: 3
        }
      },
      "19": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 14
        }
      },
      "20": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 57,
          column: 3
        }
      },
      "21": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 28
        }
      },
      "22": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 59,
          column: 32
        }
      },
      "23": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 70,
          column: 3
        }
      },
      "24": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 14
        }
      },
      "25": {
        start: {
          line: 72,
          column: 2
        },
        end: {
          line: 72,
          column: 40
        }
      },
      "26": {
        start: {
          line: 72,
          column: 32
        },
        end: {
          line: 72,
          column: 38
        }
      },
      "27": {
        start: {
          line: 75,
          column: 43
        },
        end: {
          line: 94,
          column: 1
        }
      },
      "28": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 78,
          column: 3
        }
      },
      "29": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 77,
          column: 14
        }
      },
      "30": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "31": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 19
        }
      },
      "32": {
        start: {
          line: 84,
          column: 23
        },
        end: {
          line: 84,
          column: 25
        }
      },
      "33": {
        start: {
          line: 86,
          column: 2
        },
        end: {
          line: 91,
          column: 5
        }
      },
      "34": {
        start: {
          line: 87,
          column: 17
        },
        end: {
          line: 87,
          column: 66
        }
      },
      "35": {
        start: {
          line: 87,
          column: 41
        },
        end: {
          line: 87,
          column: 59
        }
      },
      "36": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 90,
          column: 5
        }
      },
      "37": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 89,
          column: 30
        }
      },
      "38": {
        start: {
          line: 93,
          column: 2
        },
        end: {
          line: 93,
          column: 22
        }
      },
      "39": {
        start: {
          line: 103,
          column: 18
        },
        end: {
          line: 103,
          column: 81
        }
      },
      "40": {
        start: {
          line: 103,
          column: 42
        },
        end: {
          line: 103,
          column: 80
        }
      },
      "41": {
        start: {
          line: 104,
          column: 2
        },
        end: {
          line: 106,
          column: 3
        }
      },
      "42": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 14
        }
      },
      "43": {
        start: {
          line: 107,
          column: 2
        },
        end: {
          line: 107,
          column: 17
        }
      },
      "44": {
        start: {
          line: 117,
          column: 18
        },
        end: {
          line: 117,
          column: 81
        }
      },
      "45": {
        start: {
          line: 117,
          column: 42
        },
        end: {
          line: 117,
          column: 80
        }
      },
      "46": {
        start: {
          line: 118,
          column: 2
        },
        end: {
          line: 120,
          column: 3
        }
      },
      "47": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 119,
          column: 14
        }
      },
      "48": {
        start: {
          line: 121,
          column: 2
        },
        end: {
          line: 121,
          column: 22
        }
      },
      "49": {
        start: {
          line: 131,
          column: 18
        },
        end: {
          line: 131,
          column: 71
        }
      },
      "50": {
        start: {
          line: 131,
          column: 42
        },
        end: {
          line: 131,
          column: 70
        }
      },
      "51": {
        start: {
          line: 132,
          column: 2
        },
        end: {
          line: 134,
          column: 3
        }
      },
      "52": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 133,
          column: 14
        }
      },
      "53": {
        start: {
          line: 135,
          column: 2
        },
        end: {
          line: 135,
          column: 22
        }
      },
      "54": {
        start: {
          line: 145,
          column: 18
        },
        end: {
          line: 145,
          column: 81
        }
      },
      "55": {
        start: {
          line: 145,
          column: 42
        },
        end: {
          line: 145,
          column: 80
        }
      },
      "56": {
        start: {
          line: 146,
          column: 2
        },
        end: {
          line: 148,
          column: 3
        }
      },
      "57": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 14
        }
      },
      "58": {
        start: {
          line: 149,
          column: 2
        },
        end: {
          line: 149,
          column: 31
        }
      },
      "59": {
        start: {
          line: 159,
          column: 18
        },
        end: {
          line: 159,
          column: 59
        }
      },
      "60": {
        start: {
          line: 159,
          column: 42
        },
        end: {
          line: 159,
          column: 58
        }
      },
      "61": {
        start: {
          line: 160,
          column: 2
        },
        end: {
          line: 162,
          column: 3
        }
      },
      "62": {
        start: {
          line: 161,
          column: 4
        },
        end: {
          line: 161,
          column: 14
        }
      },
      "63": {
        start: {
          line: 163,
          column: 2
        },
        end: {
          line: 163,
          column: 22
        }
      },
      "64": {
        start: {
          line: 173,
          column: 30
        },
        end: {
          line: 175,
          column: 3
        }
      },
      "65": {
        start: {
          line: 174,
          column: 4
        },
        end: {
          line: 174,
          column: 52
        }
      },
      "66": {
        start: {
          line: 174,
          column: 31
        },
        end: {
          line: 174,
          column: 51
        }
      },
      "67": {
        start: {
          line: 176,
          column: 2
        },
        end: {
          line: 176,
          column: 67
        }
      },
      "68": {
        start: {
          line: 176,
          column: 45
        },
        end: {
          line: 176,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "ctxUrl",
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 22
          }
        },
        loc: {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 33
          },
          end: {
            line: 11,
            column: 34
          }
        },
        loc: {
          start: {
            line: 11,
            column: 46
          },
          end: {
            line: 11,
            column: 67
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 41
          },
          end: {
            line: 25,
            column: 42
          }
        },
        loc: {
          start: {
            line: 25,
            column: 74
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 25
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 31,
            column: 25
          },
          end: {
            line: 31,
            column: 26
          }
        },
        loc: {
          start: {
            line: 31,
            column: 34
          },
          end: {
            line: 31,
            column: 59
          }
        },
        line: 31
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 27
          },
          end: {
            line: 34,
            column: 28
          }
        },
        loc: {
          start: {
            line: 34,
            column: 40
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 34
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 35,
            column: 37
          },
          end: {
            line: 35,
            column: 38
          }
        },
        loc: {
          start: {
            line: 35,
            column: 46
          },
          end: {
            line: 35,
            column: 64
          }
        },
        line: 35
      },
      "6": {
        name: "getFirstCtxIdFromSelectedCtxIds",
        decl: {
          start: {
            line: 50,
            column: 16
          },
          end: {
            line: 50,
            column: 47
          }
        },
        loc: {
          start: {
            line: 50,
            column: 80
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 50
      },
      "7": {
        name: "getK8sConfigIdsFromK8sConfig",
        decl: {
          start: {
            line: 67,
            column: 16
          },
          end: {
            line: 67,
            column: 44
          }
        },
        loc: {
          start: {
            line: 67,
            column: 56
          },
          end: {
            line: 73,
            column: 1
          }
        },
        line: 67
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 72,
            column: 23
          },
          end: {
            line: 72,
            column: 24
          }
        },
        loc: {
          start: {
            line: 72,
            column: 32
          },
          end: {
            line: 72,
            column: 38
          }
        },
        line: 72
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 75,
            column: 43
          },
          end: {
            line: 75,
            column: 44
          }
        },
        loc: {
          start: {
            line: 75,
            column: 76
          },
          end: {
            line: 94,
            column: 1
          }
        },
        line: 75
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 86,
            column: 27
          },
          end: {
            line: 86,
            column: 28
          }
        },
        loc: {
          start: {
            line: 86,
            column: 40
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 86
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 87,
            column: 32
          },
          end: {
            line: 87,
            column: 33
          }
        },
        loc: {
          start: {
            line: 87,
            column: 41
          },
          end: {
            line: 87,
            column: 59
          }
        },
        line: 87
      },
      "12": {
        name: "getK8sContextFromClusterId",
        decl: {
          start: {
            line: 102,
            column: 16
          },
          end: {
            line: 102,
            column: 42
          }
        },
        loc: {
          start: {
            line: 102,
            column: 65
          },
          end: {
            line: 108,
            column: 1
          }
        },
        line: 102
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 103,
            column: 33
          },
          end: {
            line: 103,
            column: 34
          }
        },
        loc: {
          start: {
            line: 103,
            column: 42
          },
          end: {
            line: 103,
            column: 80
          }
        },
        line: 103
      },
      "14": {
        name: "getClusterNameFromClusterId",
        decl: {
          start: {
            line: 116,
            column: 16
          },
          end: {
            line: 116,
            column: 43
          }
        },
        loc: {
          start: {
            line: 116,
            column: 66
          },
          end: {
            line: 122,
            column: 1
          }
        },
        line: 116
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 117,
            column: 33
          },
          end: {
            line: 117,
            column: 34
          }
        },
        loc: {
          start: {
            line: 117,
            column: 42
          },
          end: {
            line: 117,
            column: 80
          }
        },
        line: 117
      },
      "16": {
        name: "getClusterNameFromConnectionId",
        decl: {
          start: {
            line: 130,
            column: 16
          },
          end: {
            line: 130,
            column: 46
          }
        },
        loc: {
          start: {
            line: 130,
            column: 66
          },
          end: {
            line: 136,
            column: 1
          }
        },
        line: 130
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 131,
            column: 33
          },
          end: {
            line: 131,
            column: 34
          }
        },
        loc: {
          start: {
            line: 131,
            column: 42
          },
          end: {
            line: 131,
            column: 70
          }
        },
        line: 131
      },
      "18": {
        name: "getConnectionIdFromClusterId",
        decl: {
          start: {
            line: 144,
            column: 16
          },
          end: {
            line: 144,
            column: 44
          }
        },
        loc: {
          start: {
            line: 144,
            column: 67
          },
          end: {
            line: 150,
            column: 1
          }
        },
        line: 144
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 145,
            column: 33
          },
          end: {
            line: 145,
            column: 34
          }
        },
        loc: {
          start: {
            line: 145,
            column: 42
          },
          end: {
            line: 145,
            column: 80
          }
        },
        line: 145
      },
      "20": {
        name: "getClusterNameFromCtxId",
        decl: {
          start: {
            line: 158,
            column: 16
          },
          end: {
            line: 158,
            column: 39
          }
        },
        loc: {
          start: {
            line: 158,
            column: 58
          },
          end: {
            line: 164,
            column: 1
          }
        },
        line: 158
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 159,
            column: 33
          },
          end: {
            line: 159,
            column: 34
          }
        },
        loc: {
          start: {
            line: 159,
            column: 42
          },
          end: {
            line: 159,
            column: 58
          }
        },
        line: 159
      },
      "22": {
        name: "getConnectionIDsFromContextIds",
        decl: {
          start: {
            line: 172,
            column: 16
          },
          end: {
            line: 172,
            column: 46
          }
        },
        loc: {
          start: {
            line: 172,
            column: 68
          },
          end: {
            line: 177,
            column: 1
          }
        },
        line: 172
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 173,
            column: 47
          },
          end: {
            line: 173,
            column: 48
          }
        },
        loc: {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 174,
            column: 52
          }
        },
        line: 174
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 174,
            column: 18
          },
          end: {
            line: 174,
            column: 19
          }
        },
        loc: {
          start: {
            line: 174,
            column: 31
          },
          end: {
            line: 174,
            column: 51
          }
        },
        line: 174
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 176,
            column: 33
          },
          end: {
            line: 176,
            column: 34
          }
        },
        loc: {
          start: {
            line: 176,
            column: 45
          },
          end: {
            line: 176,
            column: 65
          }
        },
        line: 176
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
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
            line: 10,
            column: 2
          },
          end: {
            line: 13,
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
        line: 10
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
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
        line: 26
      },
      "2": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 32,
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
        line: 30
      },
      "3": {
        loc: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 38,
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
        line: 36
      },
      "4": {
        loc: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 53,
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
        line: 51
      },
      "5": {
        loc: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 57,
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
        line: 55
      },
      "6": {
        loc: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 70,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 70,
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
        line: 68
      },
      "7": {
        loc: {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 68,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 68,
            column: 16
          }
        }, {
          start: {
            line: 68,
            column: 20
          },
          end: {
            line: 68,
            column: 37
          }
        }],
        line: 68
      },
      "8": {
        loc: {
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 2
          },
          end: {
            line: 78,
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
        line: 76
      },
      "9": {
        loc: {
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 82,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 2
          },
          end: {
            line: 82,
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
        line: 80
      },
      "10": {
        loc: {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 90,
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
        line: 88
      },
      "11": {
        loc: {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 106,
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
        line: 104
      },
      "12": {
        loc: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 120,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 120,
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
        line: 118
      },
      "13": {
        loc: {
          start: {
            line: 132,
            column: 2
          },
          end: {
            line: 134,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 132,
            column: 2
          },
          end: {
            line: 134,
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
        line: 132
      },
      "14": {
        loc: {
          start: {
            line: 146,
            column: 2
          },
          end: {
            line: 148,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 146,
            column: 2
          },
          end: {
            line: 148,
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
        line: 146
      },
      "15": {
        loc: {
          start: {
            line: 160,
            column: 2
          },
          end: {
            line: 162,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 160,
            column: 2
          },
          end: {
            line: 162,
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
        line: 160
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
      "68": 0
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
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f1a79c5b1c7055e18109854b296b0250c6180b8a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ny6wcomi5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ny6wcomi5();

/**
 * A function to be used by the requests sent for the
 * operations based on multi-context support
 *
 * @param {string} url The request URL
 * @param {Array.<string>} ctx The context Array
 * @returns {string} The final query-parametrised URL
 */
function ctxUrl(url, ctx) {
  cov_2ny6wcomi5().f[0]++;
  cov_2ny6wcomi5().s[0]++;

  if (ctx?.length) {
    cov_2ny6wcomi5().b[0][0]++;
    const contextQuery = (cov_2ny6wcomi5().s[1]++, ctx.map(context => {
      cov_2ny6wcomi5().f[1]++;
      cov_2ny6wcomi5().s[2]++;
      return `contexts=${context}`;
    }).join('&'));
    cov_2ny6wcomi5().s[3]++;
    return `${url}?${contextQuery}`;
  } else {
    cov_2ny6wcomi5().b[0][1]++;
  }

  cov_2ny6wcomi5().s[4]++;
  return url;
}
/**
 * The function takes in all the context and returns
 *  their respective cluster IDs associated to them
 *
 * @param {Array.<string>} selectedContexts
 * @param {Array.<string>} k8sconfig
 * @returns
 */

cov_2ny6wcomi5().s[5]++;
const getK8sClusterIdsFromCtxId = (selectedContexts, k8sconfig) => {
  cov_2ny6wcomi5().f[2]++;
  cov_2ny6wcomi5().s[6]++;

  if (selectedContexts.length === 0) {
    cov_2ny6wcomi5().b[1][0]++;
    cov_2ny6wcomi5().s[7]++;
    return [];
  } else {
    cov_2ny6wcomi5().b[1][1]++;
  }

  cov_2ny6wcomi5().s[8]++;

  if (selectedContexts.includes('all')) {
    cov_2ny6wcomi5().b[2][0]++;
    cov_2ny6wcomi5().s[9]++;
    return k8sconfig.map(cfg => {
      cov_2ny6wcomi5().f[3]++;
      cov_2ny6wcomi5().s[10]++;
      return cfg?.kubernetes_server_id;
    });
  } else {
    cov_2ny6wcomi5().b[2][1]++;
  }

  const clusterIds = (cov_2ny6wcomi5().s[11]++, []);
  cov_2ny6wcomi5().s[12]++;
  selectedContexts.forEach(context => {
    cov_2ny6wcomi5().f[4]++;
    const clusterId = (cov_2ny6wcomi5().s[13]++, k8sconfig.find(cfg => {
      cov_2ny6wcomi5().f[5]++;
      cov_2ny6wcomi5().s[14]++;
      return cfg.id === context;
    })?.kubernetes_server_id);
    cov_2ny6wcomi5().s[15]++;

    if (clusterId) {
      cov_2ny6wcomi5().b[3][0]++;
      cov_2ny6wcomi5().s[16]++;
      clusterIds.push(clusterId);
    } else {
      cov_2ny6wcomi5().b[3][1]++;
    }
  });
  cov_2ny6wcomi5().s[17]++;
  return clusterIds;
};
/**
 *
 * @param {Array.<string>} selectedK8sContexts
 * @param {Array.<string>} k8sConfig
 * @returns {string} The context ID
 */

function getFirstCtxIdFromSelectedCtxIds(selectedK8sContexts, k8sConfig) {
  cov_2ny6wcomi5().f[6]++;
  cov_2ny6wcomi5().s[18]++;

  if (!selectedK8sContexts?.length) {
    cov_2ny6wcomi5().b[4][0]++;
    cov_2ny6wcomi5().s[19]++;
    return '';
  } else {
    cov_2ny6wcomi5().b[4][1]++;
  }

  cov_2ny6wcomi5().s[20]++;

  if (selectedK8sContexts?.includes('all')) {
    cov_2ny6wcomi5().b[5][0]++;
    cov_2ny6wcomi5().s[21]++;
    return k8sConfig[0]?.id;
  } else {
    cov_2ny6wcomi5().b[5][1]++;
  }

  cov_2ny6wcomi5().s[22]++;
  return selectedK8sContexts[0];
}
/**
 * Get the k8sConfigIds of K8sconfig
 * @param {Array.<Object>} k8sConfig
 * @returns
 */

function getK8sConfigIdsFromK8sConfig(k8sConfig) {
  cov_2ny6wcomi5().f[7]++;
  cov_2ny6wcomi5().s[23]++;

  if ((cov_2ny6wcomi5().b[7][0]++, !k8sConfig) || (cov_2ny6wcomi5().b[7][1]++, !k8sConfig.length)) {
    cov_2ny6wcomi5().b[6][0]++;
    cov_2ny6wcomi5().s[24]++;
    return [];
  } else {
    cov_2ny6wcomi5().b[6][1]++;
  }

  cov_2ny6wcomi5().s[25]++;
  return k8sConfig.map(cfg => {
    cov_2ny6wcomi5().f[8]++;
    cov_2ny6wcomi5().s[26]++;
    return cfg.id;
  });
}
cov_2ny6wcomi5().s[27]++;
const getK8sClusterNamesFromCtxId = (selectedContexts, k8sconfig) => {
  cov_2ny6wcomi5().f[9]++;
  cov_2ny6wcomi5().s[28]++;

  if (selectedContexts.length === 0) {
    cov_2ny6wcomi5().b[8][0]++;
    cov_2ny6wcomi5().s[29]++;
    return [];
  } else {
    cov_2ny6wcomi5().b[8][1]++;
  }

  cov_2ny6wcomi5().s[30]++;

  if (selectedContexts.includes('all')) {
    cov_2ny6wcomi5().b[9][0]++;
    cov_2ny6wcomi5().s[31]++;
    return ['all'];
  } else {
    cov_2ny6wcomi5().b[9][1]++;
  }

  const clusterNames = (cov_2ny6wcomi5().s[32]++, []);
  cov_2ny6wcomi5().s[33]++;
  selectedContexts.forEach(context => {
    cov_2ny6wcomi5().f[10]++;
    const name = (cov_2ny6wcomi5().s[34]++, k8sconfig.find(cfg => {
      cov_2ny6wcomi5().f[11]++;
      cov_2ny6wcomi5().s[35]++;
      return cfg.id === context;
    })?.name);
    cov_2ny6wcomi5().s[36]++;

    if (name) {
      cov_2ny6wcomi5().b[10][0]++;
      cov_2ny6wcomi5().s[37]++;
      clusterNames.push(name);
    } else {
      cov_2ny6wcomi5().b[10][1]++;
    }
  });
  cov_2ny6wcomi5().s[38]++;
  return clusterNames;
};
/**
 *
 * @param {string} clusterId Kubernetes Cluster ID
 * @param {Array<Object>} k8sConfig Kubernetes config
 * @returns {string} Kubernetes context
 */

function getK8sContextFromClusterId(clusterId, k8sConfig) {
  cov_2ny6wcomi5().f[12]++;
  const cluster = (cov_2ny6wcomi5().s[39]++, k8sConfig.find(cfg => {
    cov_2ny6wcomi5().f[13]++;
    cov_2ny6wcomi5().s[40]++;
    return cfg.kubernetes_server_id === clusterId;
  }));
  cov_2ny6wcomi5().s[41]++;

  if (!cluster) {
    cov_2ny6wcomi5().b[11][0]++;
    cov_2ny6wcomi5().s[42]++;
    return {};
  } else {
    cov_2ny6wcomi5().b[11][1]++;
  }

  cov_2ny6wcomi5().s[43]++;
  return cluster;
}
/**
 *
 * @param {string} clusterId Kubernetes Cluster ID
 * @param {Array<Object>} k8sConfig Kubernetes config
 * @returns {string} Kubernetes cluster name
 */

function getClusterNameFromClusterId(clusterId, k8sConfig) {
  cov_2ny6wcomi5().f[14]++;
  const cluster = (cov_2ny6wcomi5().s[44]++, k8sConfig.find(cfg => {
    cov_2ny6wcomi5().f[15]++;
    cov_2ny6wcomi5().s[45]++;
    return cfg.kubernetes_server_id === clusterId;
  }));
  cov_2ny6wcomi5().s[46]++;

  if (!cluster) {
    cov_2ny6wcomi5().b[12][0]++;
    cov_2ny6wcomi5().s[47]++;
    return '';
  } else {
    cov_2ny6wcomi5().b[12][1]++;
  }

  cov_2ny6wcomi5().s[48]++;
  return cluster.name;
}
/**
 *
 * @param {string} connectionId Kubernetes Connection ID
 * @param {Array<Object>} k8sConfig Kubernetes config
 * @returns {string} Kubernetes cluster name
 */

function getClusterNameFromConnectionId(connId, k8sConfig) {
  cov_2ny6wcomi5().f[16]++;
  const cluster = (cov_2ny6wcomi5().s[49]++, k8sConfig.find(cfg => {
    cov_2ny6wcomi5().f[17]++;
    cov_2ny6wcomi5().s[50]++;
    return cfg.connection_id === connId;
  }));
  cov_2ny6wcomi5().s[51]++;

  if (!cluster) {
    cov_2ny6wcomi5().b[13][0]++;
    cov_2ny6wcomi5().s[52]++;
    return '';
  } else {
    cov_2ny6wcomi5().b[13][1]++;
  }

  cov_2ny6wcomi5().s[53]++;
  return cluster.name;
}
/**
 *
 * @param {string} clusterId Kubernetes Cluster ID
 * @param {Array<Object>} k8sConfig Kubernetes config
 * @returns {string} Kubernetes connection ID
 */

function getConnectionIdFromClusterId(clusterId, k8sConfig) {
  cov_2ny6wcomi5().f[18]++;
  const cluster = (cov_2ny6wcomi5().s[54]++, k8sConfig.find(cfg => {
    cov_2ny6wcomi5().f[19]++;
    cov_2ny6wcomi5().s[55]++;
    return cfg.kubernetes_server_id === clusterId;
  }));
  cov_2ny6wcomi5().s[56]++;

  if (!cluster) {
    cov_2ny6wcomi5().b[14][0]++;
    cov_2ny6wcomi5().s[57]++;
    return '';
  } else {
    cov_2ny6wcomi5().b[14][1]++;
  }

  cov_2ny6wcomi5().s[58]++;
  return cluster.connection_id;
}
/**
 *
 * @param {string} ctxId Kubernetes context ID
 * @param {Array<Object>} k8sConfig Kubernetes config
 * @returns {string} Kubernetes cluster name
 */

function getClusterNameFromCtxId(ctxId, k8sConfig) {
  cov_2ny6wcomi5().f[20]++;
  const cluster = (cov_2ny6wcomi5().s[59]++, k8sConfig.find(cfg => {
    cov_2ny6wcomi5().f[21]++;
    cov_2ny6wcomi5().s[60]++;
    return cfg.id === ctxId;
  }));
  cov_2ny6wcomi5().s[61]++;

  if (!cluster) {
    cov_2ny6wcomi5().b[15][0]++;
    cov_2ny6wcomi5().s[62]++;
    return '';
  } else {
    cov_2ny6wcomi5().b[15][1]++;
  }

  cov_2ny6wcomi5().s[63]++;
  return cluster.name;
}
/**
 *
 * @param {Array<Object>} contextIDs Kubernetes context ids
 * @param {Array<Object>} k8sConfig Kubernetes config
 * @returns {Array<string>} array of connection ID for given kubernetes contexts
 */

function getConnectionIDsFromContextIds(contexts, k8sConfig) {
  cov_2ny6wcomi5().f[22]++;
  const filteredK8sConnfigs = (cov_2ny6wcomi5().s[64]++, k8sConfig.filter(config => {
    cov_2ny6wcomi5().f[23]++;
    cov_2ny6wcomi5().s[65]++;
    return contexts.some(context => {
      cov_2ny6wcomi5().f[24]++;
      cov_2ny6wcomi5().s[66]++;
      return context == config.id;
    });
  }));
  cov_2ny6wcomi5().s[67]++;
  return filteredK8sConnfigs.map(config => {
    cov_2ny6wcomi5().f[25]++;
    cov_2ny6wcomi5().s[68]++;
    return config.connection_id;
  });
}

/***/ })

};
;