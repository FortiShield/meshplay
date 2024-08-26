"use strict";
exports.id = 3354;
exports.ids = [3354];
exports.modules = {

/***/ 7105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CONNECTION_STATE_COLORS */
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25879);
/* harmony import */ var _utils_Enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46811);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31339);
function cov_h8mnv9c15() {
  var path = "/workspace/meshplay/ui/components/connections/styles.js";
  var hash = "efbd4c3a4ccaef022ef07e293a64c9542c5f2907";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/connections/styles.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 238,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 27
        },
        end: {
          line: 238,
          column: 1
        }
      },
      "2": {
        start: {
          line: 242,
          column: 39
        },
        end: {
          line: 251,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 15
          },
          end: {
            line: 6,
            column: 16
          }
        },
        loc: {
          start: {
            line: 6,
            column: 27
          },
          end: {
            line: 238,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 109,
            column: 13
          },
          end: {
            line: 109,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 109,
            column: 45
          },
          end: {
            line: 109,
            column: 54
          }
        }, {
          start: {
            line: 109,
            column: 57
          },
          end: {
            line: 109,
            column: 78
          }
        }],
        line: 109
      },
      "1": {
        loc: {
          start: {
            line: 115,
            column: 23
          },
          end: {
            line: 115,
            column: 88
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 115,
            column: 55
          },
          end: {
            line: 115,
            column: 64
          }
        }, {
          start: {
            line: 115,
            column: 67
          },
          end: {
            line: 115,
            column: 88
          }
        }],
        line: 115
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "efbd4c3a4ccaef022ef07e293a64c9542c5f2907"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_h8mnv9c15 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_h8mnv9c15();




cov_h8mnv9c15().s[0]++;

const styles = theme => {
  cov_h8mnv9c15().f[0]++;
  cov_h8mnv9c15().s[1]++;
  return {
    grid: {
      padding: theme.spacing(2)
    },
    tableHeader: {
      fontWeight: 'bolder',
      fontSize: 18
    },
    muiRow: {
      '& .MuiTableCell-root': {// textTransform: 'capitalize',
      }
    },
    statusSelect: {
      '& .MuiSelect-select.MuiSelect-select': {
        padding: '0'
      }
    },
    createButton: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      whiteSpace: 'nowrap'
    },
    viewSwitchButton: {
      justifySelf: 'flex-end',
      marginLeft: 'auto',
      paddingLeft: '1rem'
    },
    chipFormControl: {
      minWidth: '100%',
      '& .MuiSelect-icon': {
        marginRight: '10px !important'
      }
    },
    statusChip: {
      minWidth: '145px !important',
      width: '100% !important',
      display: 'flex !important',
      justifyContent: 'flex-start !important',
      textTransform: 'capitalize',
      borderRadius: '0 !important',
      padding: '6px 8px',
      '& .MuiChip-label': {
        paddingTop: '3px',
        fontWeight: '400'
      },
      '&:hover': {
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.25)',
        cursor: 'pointer'
      }
    },
    appBar: {
      marginBottom: '3rem'
    },
    capitalize: {// textTransform: 'capitalize',
    },
    lowecase: {
      textTransform: 'lowecase'
    },
    expandedRows: {
      background: `${theme.palette.secondary.default}10`
    },
    contentContainer: {
      [theme.breakpoints.down(1050)]: {
        flexDirection: 'column'
      },
      flexWrap: 'noWrap'
    },
    innerTableWrapper: {
      background: `linear-gradient(90deg, ${theme.palette.secondary.innertableBg1} 0.04%, ${theme.palette.secondary.innertableBg2} 100.04%)`,
      borderRadius: 0,
      padding: '0'
    },
    innerTableContainer: {
      background: theme.palette.secondary.innertableBg1,
      margin: '10px 10px 10px 13px',
      borderLeft: `9px solid ${theme.palette.secondary.pinball}`,
      borderRadius: '10px 0 0 10px',
      width: 'calc(100% - 23px)',
      border: 'none',
      overflowX: 'hidden'
    },
    noGutter: {
      padding: '0'
    },
    showMore: {
      color: _themes_app__WEBPACK_IMPORTED_MODULE_1__/* .Colors.keppelGreen */ .wL.keppelGreen,
      cursor: 'pointer'
    },
    bulkAction: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%'
    },
    centerContent: {
      display: 'flex',
      justifyContent: 'center'
    },
    tab: {
      minWidth: 40,
      paddingLeft: 0,
      paddingRight: 0,
      '&.Mui-selected': {
        color: theme.palette.type === 'dark' ? (cov_h8mnv9c15().b[0][0]++, '#00B39F') : (cov_h8mnv9c15().b[0][1]++, theme.palette.primary)
      }
    },
    tabs: {
      height: '55px',
      '& .MuiTabs-indicator': {
        backgroundColor: theme.palette.type === 'dark' ? (cov_h8mnv9c15().b[1][0]++, '#00B39F') : (cov_h8mnv9c15().b[1][1]++, theme.palette.primary)
      }
    },
    iconText: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gridGap: '0.5rem',
      marginBlock: '0.5rem',
      borderRadius: '0.25rem',
      backgroundColor: theme.palette.secondary.honeyComb
    },
    listButton: {
      '&:hover': {
        backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.secondary.link2, 0.25)
      }
    },
    listItem: {
      display: 'flex',
      gridGap: '0.5rem',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    button: {
      width: '100%',
      justifyContent: 'flex-start',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    listContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      display: 'flex',
      alignItems: 'center'
    },

    /** Connection status select colors according to the status */
    ignored: {
      '& .MuiChip-label': {
        color: `${theme.palette.secondary.default}`
      },
      background: `${theme.palette.secondary.default}30 !important`,
      '& .MuiSvgIcon-root': {
        color: `${theme.palette.secondary.default} !important`
      }
    },
    connected: {
      '& .MuiChip-label': {
        color: theme.palette.secondary.success
      },
      background: `${theme.palette.secondary.success}30 !important`,
      '& .MuiSvgIcon-root': {
        color: `${theme.palette.secondary.success} !important`
      }
    },
    registered: {
      '& .MuiChip-label': {
        color: theme.palette.secondary.primary
      },
      background: `${theme.palette.secondary.primary}30 !important`,
      '& .MuiSvgIcon-root': {
        color: `${theme.palette.secondary.primary} !important`
      }
    },
    register: {
      '& .MuiChip-label': {
        color: theme.palette.secondary.primary
      },
      background: `${theme.palette.secondary.primary}30 !important`,
      '& .MuiSvgIcon-root': {
        color: `${theme.palette.secondary.primary} !important`
      }
    },
    discovered: {
      '& .MuiChip-label': {
        color: _themes__WEBPACK_IMPORTED_MODULE_3__/* .notificationColors.info */ .kY.info
      },
      background: `${_themes__WEBPACK_IMPORTED_MODULE_3__/* .notificationColors.info */ .kY.info}30 !important`,
      '& .MuiSvgIcon-root': {
        color: `${_themes__WEBPACK_IMPORTED_MODULE_3__/* .notificationColors.info */ .kY.info} !important`
      }
    },
    deleted: {
      '& .MuiChip-label': {
        color: theme.palette.secondary.error
      },
      background: `${theme.palette.secondary.lightError}30 !important`,
      '& .MuiSvgIcon-root': {
        color: `${theme.palette.secondary.error} !important`
      }
    },
    maintenance: {
      '& .MuiChip-label': {
        color: theme.palette.secondary.warning
      },
      background: `${theme.palette.secondary.warning}30 !important`,
      '& .MuiSvgIcon-root': {
        color: `${theme.palette.secondary.warning} !important`
      }
    },
    disconnected: {
      '& .MuiChip-label': {
        color: _themes__WEBPACK_IMPORTED_MODULE_3__/* .notificationColors.lightwarning */ .kY.lightwarning
      },
      background: `${_themes__WEBPACK_IMPORTED_MODULE_3__/* .notificationColors.lightwarning */ .kY.lightwarning}30 !important`,
      '& .MuiSvgIcon-root': {
        color: `${_themes__WEBPACK_IMPORTED_MODULE_3__/* .notificationColors.lightwarning */ .kY.lightwarning} !important`
      }
    },
    notfound: {
      '& .MuiChip-label': {
        color: theme.palette.secondary.text
      },
      background: `${theme.palette.secondary.disableButtonBg}60 !important`,
      '& .MuiSvgIcon-root': {
        color: `${theme.palette.secondary.iconMain} !important`
      }
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);
const CONNECTION_STATE_COLORS = (cov_h8mnv9c15().s[2]++, {
  [_utils_Enum__WEBPACK_IMPORTED_MODULE_2__/* .CONNECTION_STATES.CONNECTED */ .OF.CONNECTED]: '#00B39F',
  [_utils_Enum__WEBPACK_IMPORTED_MODULE_2__/* .CONNECTION_STATES.REGISTERED */ .OF.REGISTERED]: '#00B39F',
  [_utils_Enum__WEBPACK_IMPORTED_MODULE_2__/* .CONNECTION_STATES.DISCOVERED */ .OF.DISCOVERED]: '#FFC107',
  [_utils_Enum__WEBPACK_IMPORTED_MODULE_2__/* .CONNECTION_STATES.IGNORED */ .OF.IGNORED]: '#FFC107',
  [_utils_Enum__WEBPACK_IMPORTED_MODULE_2__/* .CONNECTION_STATES.DELETED */ .OF.DELETED]: '#FF1744',
  [_utils_Enum__WEBPACK_IMPORTED_MODULE_2__/* .CONNECTION_STATES.MAINTENANCE */ .OF.MAINTENANCE]: '#FFC107',
  [_utils_Enum__WEBPACK_IMPORTED_MODULE_2__/* .CONNECTION_STATES.DISCONNECTED */ .OF.DISCONNECTED]: '#FFC107',
  [_utils_Enum__WEBPACK_IMPORTED_MODULE_2__/* .CONNECTION_STATES.NOTFOUND */ .OF.NOTFOUND]: '#FFC107'
});

/***/ }),

/***/ 42856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ resetDatabase)
/* harmony export */ });
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66516);
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__]);
_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _ResetDatabaseQuery;

function cov_23r972lrts() {
  var path = "/workspace/meshplay/ui/components/graphql/queries/ResetDatabaseQuery.js";
  var hash = "333a81586cf7e94bcd3f8dfbcb866a83c51ff38f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/queries/ResetDatabaseQuery.js",
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
          column: 85
        }
      },
      "2": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 63
        }
      }
    },
    fnMap: {
      "0": {
        name: "resetDatabase",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 37
          }
        },
        loc: {
          start: {
            line: 4,
            column: 49
          },
          end: {
            line: 15,
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
    hash: "333a81586cf7e94bcd3f8dfbcb866a83c51ff38f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23r972lrts = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_23r972lrts();


function resetDatabase(variables) {
  cov_23r972lrts().f[0]++;
  const environment = (cov_23r972lrts().s[0]++, (0,_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .createRelayEnvironment */ .eM)({}));
  const vars = (cov_23r972lrts().s[1]++, {
    selector: variables.selector,
    k8scontextID: variables.k8scontextID
  });
  const ResetDatabaseQueryNode = _ResetDatabaseQuery !== void 0 ? _ResetDatabaseQuery : _ResetDatabaseQuery = __webpack_require__(31884);
  cov_23r972lrts().s[2]++;
  return (0,react_relay__WEBPACK_IMPORTED_MODULE_0__.fetchQuery)(environment, ResetDatabaseQueryNode, vars);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31884:
/***/ ((module) => {

/**
 * @generated SignedSource<<a84076187375aaa2ced461e37f44710e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */


function cov_6em88pxzs() {
  var path = "/workspace/meshplay/ui/components/graphql/queries/__generated__/ResetDatabaseQuery.graphql.js";
  var hash = "c9175dad41b4fb33639bd85b3d78129982cd97eb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/queries/__generated__/ResetDatabaseQuery.graphql.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 11
        },
        end: {
          line: 74,
          column: 4
        }
      },
      "1": {
        start: {
          line: 12,
          column: 9
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "2": {
        start: {
          line: 17,
          column: 5
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "3": {
        start: {
          line: 22,
          column: 5
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "4": {
        start: {
          line: 42,
          column: 0
        },
        end: {
          line: 73,
          column: 2
        }
      },
      "5": {
        start: {
          line: 76,
          column: 0
        },
        end: {
          line: 76,
          column: 47
        }
      },
      "6": {
        start: {
          line: 78,
          column: 0
        },
        end: {
          line: 78,
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
            line: 74,
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
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c9175dad41b4fb33639bd85b3d78129982cd97eb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6em88pxzs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_6em88pxzs();
var node = (cov_6em88pxzs().s[0]++, function () {
  cov_6em88pxzs().f[0]++;
  var v0 = (cov_6em88pxzs().s[1]++, {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "k8scontextID"
  }),
      v1 = (cov_6em88pxzs().s[2]++, {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "selector"
  }),
      v2 = (cov_6em88pxzs().s[3]++, [{
    "alias": "resetStatus",
    "args": [{
      "kind": "Variable",
      "name": "k8scontextID",
      "variableName": "k8scontextID"
    }, {
      "kind": "Variable",
      "name": "selector",
      "variableName": "selector"
    }],
    "kind": "ScalarField",
    "name": "resyncCluster",
    "storageKey": null
  }]);
  cov_6em88pxzs().s[4]++;
  return {
    "fragment": {
      "argumentDefinitions": [v0
      /*: any*/
      , v1
      /*: any*/
      ],
      "kind": "Fragment",
      "metadata": null,
      "name": "ResetDatabaseQuery",
      "selections": v2
      /*: any*/
      ,
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [v1
      /*: any*/
      , v0
      /*: any*/
      ],
      "kind": "Operation",
      "name": "ResetDatabaseQuery",
      "selections": v2
      /*: any*/

    },
    "params": {
      "cacheID": "37b0c2d517499c337bd4bdfa2ef79380",
      "id": null,
      "metadata": {},
      "name": "ResetDatabaseQuery",
      "operationKind": "query",
      "text": "query ResetDatabaseQuery(\n  $selector: ReSyncActions!\n  $k8scontextID: String!\n) {\n  resetStatus: resyncCluster(selector: $selector, k8scontextID: $k8scontextID)\n}\n"
    }
  };
}());
cov_6em88pxzs().s[5]++;
node.hash = "54a9344cc4d95023f5082936dc95d05d";
cov_6em88pxzs().s[6]++;
module.exports = node;

/***/ })

};
;