"use strict";
exports.id = 3628;
exports.ids = [3628];
exports.modules = {

/***/ 48486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GenericModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function cov_14nppf000s() {
  var path = "/workspace/meshplay/ui/components/GenericModal.js";
  var hash = "e45523359b8d3715233b305fc48cf273223c9ef1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/GenericModal.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 30,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "GenericModal",
        decl: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 15,
            column: 36
          }
        },
        loc: {
          start: {
            line: 15,
            column: 80
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 15
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
    hash: "e45523359b8d3715233b305fc48cf273223c9ef1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_14nppf000s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_14nppf000s();
// @ts-check


/**
 *
 * @param {{
 *  open?: boolean,
 *  Content?: JSX.Element,
 *  handleClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void,
 *  container?: React.ReactInstance | (() => React.ReactInstance)
 * }} props
 * @returns
 */


function GenericModal({
  open,
  Content,
  handleClose,
  container
}) {
  cov_14nppf000s().f[0]++;
  cov_14nppf000s().s[0]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    open: open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Backdrop,
    BackdropProps: {
      timeout: 200
    },
    container: container,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Fade, {
      in: open,
      style: {
        maxHeight: '90vh',
        overflow: 'auto'
      },
      children: Content
    })
  });
}

/***/ }),

/***/ 50976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ generateUUID),
/* harmony export */   "W": () => (/* binding */ generateTestName)
/* harmony export */ });
function cov_97zb3fffw() {
  var path = "/workspace/meshplay/ui/components/MeshplayPerformance/helper.js";
  var hash = "a17534096715c86aabf2ec781c459f8fd05bb27e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayPerformance/helper.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 32
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "2": {
        start: {
          line: 12,
          column: 17
        },
        end: {
          line: 12,
          column: 78
        }
      },
      "3": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 45
        }
      },
      "4": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 14
        }
      },
      "5": {
        start: {
          line: 20,
          column: 23
        },
        end: {
          line: 20,
          column: 38
        }
      },
      "6": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 32
          },
          end: {
            line: 10,
            column: 33
          }
        },
        loc: {
          start: {
            line: 10,
            column: 52
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "generateUUID",
        decl: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 28
          }
        },
        loc: {
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 14,
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
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 11,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 11,
            column: 11
          }
        }, {
          start: {
            line: 11,
            column: 15
          },
          end: {
            line: 11,
            column: 33
          }
        }],
        line: 11
      },
      "2": {
        loc: {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 58
          },
          end: {
            line: 12,
            column: 67
          }
        }, {
          start: {
            line: 12,
            column: 70
          },
          end: {
            line: 12,
            column: 78
          }
        }],
        line: 12
      },
      "3": {
        loc: {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 32
          }
        }, {
          start: {
            line: 12,
            column: 36
          },
          end: {
            line: 12,
            column: 55
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a17534096715c86aabf2ec781c459f8fd05bb27e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_97zb3fffw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_97zb3fffw();
cov_97zb3fffw().s[0]++;

/**
 * generateTestName takes in test name and service mesh name
 * and generates a random name (if test name is an empty string or is falsy) or
 * will return the given name
 *
 * @param {string} name
 * @param {string} meshName
 * @returns {string}
 */
const generateTestName = (name, meshName) => {
  cov_97zb3fffw().f[0]++;
  cov_97zb3fffw().s[1]++;

  if ((cov_97zb3fffw().b[1][0]++, !name) || (cov_97zb3fffw().b[1][1]++, name.trim() === '')) {
    cov_97zb3fffw().b[0][0]++;
    const mesh = (cov_97zb3fffw().s[2]++, (cov_97zb3fffw().b[3][0]++, meshName === '') || (cov_97zb3fffw().b[3][1]++, meshName === 'None') ? (cov_97zb3fffw().b[2][0]++, 'No mesh') : (cov_97zb3fffw().b[2][1]++, meshName));
    cov_97zb3fffw().s[3]++;
    return `${mesh}_${new Date().getTime()}`;
  } else {
    cov_97zb3fffw().b[0][1]++;
  }

  cov_97zb3fffw().s[4]++;
  return name;
};
function generateUUID() {
  cov_97zb3fffw().f[1]++;
  const {
    v4: uuid
  } = (cov_97zb3fffw().s[5]++, __webpack_require__(25828));
  cov_97zb3fffw().s[6]++;
  return uuid();
}

/***/ }),

/***/ 94473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ fetchPerformanceProfiles)
/* harmony export */ });
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66516);
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__]);
_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _PerformanceProfilesQuery;

function cov_1qwa59m0ys() {
  var path = "/workspace/meshplay/ui/components/graphql/queries/PerformanceProfilesQuery.js";
  var hash = "294d842d5ca7ab1c902d512b61a09564228e02ae";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/queries/PerformanceProfilesQuery.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 22
        },
        end: {
          line: 5,
          column: 48
        }
      },
      "1": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 47
        }
      },
      "2": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 38,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "fetchPerformanceProfiles",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 48
          }
        },
        loc: {
          start: {
            line: 4,
            column: 60
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "294d842d5ca7ab1c902d512b61a09564228e02ae"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1qwa59m0ys = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1qwa59m0ys();


function fetchPerformanceProfiles(variables) {
  cov_1qwa59m0ys().f[0]++;
  const environment = (cov_1qwa59m0ys().s[0]++, (0,_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .createRelayEnvironment */ .eM)({}));
  const vars = (cov_1qwa59m0ys().s[1]++, {
    selector: variables.selector
  });
  const PerformanceProfilesQueryNode = _PerformanceProfilesQuery !== void 0 ? _PerformanceProfilesQuery : _PerformanceProfilesQuery = __webpack_require__(46458);
  cov_1qwa59m0ys().s[2]++;
  return (0,react_relay__WEBPACK_IMPORTED_MODULE_0__.fetchQuery)(environment, PerformanceProfilesQueryNode, vars);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46458:
/***/ ((module) => {

/**
 * @generated SignedSource<<58aed683b96a4b759cb5180b0d61e55b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */


function cov_pyxc46tup() {
  var path = "/workspace/meshplay/ui/components/graphql/queries/__generated__/PerformanceProfilesQuery.graphql.js";
  var hash = "c9d334bde18364e1d650352ba0289b6133f73d6f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/queries/__generated__/PerformanceProfilesQuery.graphql.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 11
        },
        end: {
          line: 222,
          column: 4
        }
      },
      "1": {
        start: {
          line: 12,
          column: 9
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 5
        },
        end: {
          line: 195,
          column: 1
        }
      },
      "3": {
        start: {
          line: 196,
          column: 0
        },
        end: {
          line: 221,
          column: 2
        }
      },
      "4": {
        start: {
          line: 224,
          column: 0
        },
        end: {
          line: 224,
          column: 47
        }
      },
      "5": {
        start: {
          line: 226,
          column: 0
        },
        end: {
          line: 226,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 222,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c9d334bde18364e1d650352ba0289b6133f73d6f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pyxc46tup = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_pyxc46tup();
var node = (cov_pyxc46tup().s[0]++, function () {
  cov_pyxc46tup().f[0]++;
  var v0 = (cov_pyxc46tup().s[1]++, [{
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "selector"
  }]),
      v1 = (cov_pyxc46tup().s[2]++, [{
    "alias": null,
    "args": [{
      "kind": "Variable",
      "name": "selector",
      "variableName": "selector"
    }],
    "concreteType": "PerfPageProfiles",
    "kind": "LinkedField",
    "name": "getPerformanceProfiles",
    "plural": false,
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "page",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "page_size",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total_count",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "concreteType": "PerfProfile",
      "kind": "LinkedField",
      "name": "profiles",
      "plural": true,
      "selections": [{
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "concurrent_request",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "duration",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endpoints",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "last_run",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "load_generators",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "qps",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "total_results",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updated_at",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "user_id",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "request_body",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "request_cookies",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "request_headers",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content_type",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "service_mesh",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "metadata",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "storageKey": null
  }]);
  cov_pyxc46tup().s[3]++;
  return {
    "fragment": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Fragment",
      "metadata": null,
      "name": "PerformanceProfilesQuery",
      "selections": v1
      /*: any*/
      ,
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Operation",
      "name": "PerformanceProfilesQuery",
      "selections": v1
      /*: any*/

    },
    "params": {
      "cacheID": "05fcaffb37eda9d52f8bd45bd8da5550",
      "id": null,
      "metadata": {},
      "name": "PerformanceProfilesQuery",
      "operationKind": "query",
      "text": "query PerformanceProfilesQuery(\n  $selector: PageFilter!\n) {\n  getPerformanceProfiles(selector: $selector) {\n    page\n    page_size\n    total_count\n    profiles {\n      concurrent_request\n      created_at\n      duration\n      endpoints\n      id\n      last_run\n      load_generators\n      name\n      qps\n      total_results\n      updated_at\n      user_id\n      request_body\n      request_cookies\n      request_headers\n      content_type\n      service_mesh\n      metadata\n    }\n  }\n}\n"
    }
  };
}());
cov_pyxc46tup().s[4]++;
node.hash = "a901902df4422ec63fa999ca605a644b";
cov_pyxc46tup().s[5]++;
module.exports = node;

/***/ })

};
;