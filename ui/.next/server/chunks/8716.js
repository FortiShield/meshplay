"use strict";
exports.id = 8716;
exports.ids = [8716];
exports.modules = {

/***/ 8716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
function cov_2ctujm5ngu() {
  var path = "/workspace/meshplay/ui/assets/styles/general/tool.styles.js";
  var hash = "201e7ef08a8dfa09b4128d8548b2ba2f10e01172";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/styles/general/tool.styles.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 224,
          column: 3
        }
      },
      "1": {
        start: {
          line: 3,
          column: 41
        },
        end: {
          line: 224,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 3,
            column: 30
          }
        },
        loc: {
          start: {
            line: 3,
            column: 41
          },
          end: {
            line: 224,
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
            line: 9,
            column: 6
          },
          end: {
            line: 11,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 10
          },
          end: {
            line: 10,
            column: 44
          }
        }, {
          start: {
            line: 11,
            column: 10
          },
          end: {
            line: 11,
            column: 44
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 6
          },
          end: {
            line: 25,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 24,
            column: 44
          }
        }, {
          start: {
            line: 25,
            column: 10
          },
          end: {
            line: 25,
            column: 44
          }
        }],
        line: 23
      },
      "2": {
        loc: {
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 43,
            column: 10
          },
          end: {
            line: 43,
            column: 44
          }
        }, {
          start: {
            line: 44,
            column: 10
          },
          end: {
            line: 44,
            column: 44
          }
        }],
        line: 42
      },
      "3": {
        loc: {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 90,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 89,
            column: 10
          },
          end: {
            line: 89,
            column: 44
          }
        }, {
          start: {
            line: 90,
            column: 10
          },
          end: {
            line: 90,
            column: 44
          }
        }],
        line: 88
      },
      "4": {
        loc: {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 96,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 95,
            column: 10
          },
          end: {
            line: 95,
            column: 44
          }
        }, {
          start: {
            line: 96,
            column: 10
          },
          end: {
            line: 96,
            column: 44
          }
        }],
        line: 94
      },
      "5": {
        loc: {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 188,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 187,
            column: 10
          },
          end: {
            line: 187,
            column: 44
          }
        }, {
          start: {
            line: 188,
            column: 10
          },
          end: {
            line: 188,
            column: 44
          }
        }],
        line: 186
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
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "201e7ef08a8dfa09b4128d8548b2ba2f10e01172"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ctujm5ngu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ctujm5ngu();

const useStyles = (cov_2ctujm5ngu().s[0]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => {
  cov_2ctujm5ngu().f[0]++;
  cov_2ctujm5ngu().s[1]++;
  return {
    toolWrapper: {
      marginBottom: '3rem',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.type === 'dark' ? (cov_2ctujm5ngu().b[0][0]++, theme.palette.secondary.toolbarBg2) : (cov_2ctujm5ngu().b[0][1]++, theme.palette.secondary.toolbarBg1),
      boxShadow: ' 0px 2px 4px -1px rgba(0,0,0,0.2)',
      height: '4rem',
      padding: '0.68rem',
      borderRadius: '0.5rem',
      position: 'relative',
      zIndex: '101'
    },
    meshModelToolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.type === 'dark' ? (cov_2ctujm5ngu().b[1][0]++, theme.palette.secondary.toolbarBg2) : (cov_2ctujm5ngu().b[1][1]++, theme.palette.secondary.toolbarBg1),
      boxShadow: ' 0px 2px 4px -1px rgba(0,0,0,0.2)',
      height: '0rem',
      padding: '0rem',
      borderRadius: '0.5rem',
      position: 'relative',
      zIndex: '0',
      marginBottom: '0.5rem',
      marginTop: '1rem'
    },
    toolWrapperAnimate: {
      height: '4rem',
      zIndex: '125',
      padding: '0.68rem'
    },
    mainContainer: {
      backgroundColor: theme.palette.type === 'dark' ? (cov_2ctujm5ngu().b[2][0]++, theme.palette.secondary.toolbarBg2) : (cov_2ctujm5ngu().b[2][1]++, theme.palette.secondary.toolbarBg1),
      height: '25rem',
      display: 'flex',
      position: 'relative',
      marginTop: '1rem',
      [theme.breakpoints.down('sm')]: {
        height: '47rem'
      }
    },
    mainContainerAnimate: {
      height: '73vh',
      [theme.breakpoints.down('sm')]: {
        height: '73rem'
      }
    },
    innerContainer: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },
    innerContainerAnimate: {
      width: '100%',
      top: '0%',
      paddingX: '2rem',
      transform: 'translate(0%, 0%)',
      display: 'flex',
      justifyContent: 'center',
      left: '0%',
      backgroundColor: theme.palette.secondary.tabContainer,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
        paddingLeft: '1rem',
        overflowX: 'auto',
        padding: '0.4rem'
      }
    },
    tabs: {
      backgroundColor: theme.palette.type === 'dark' ? (cov_2ctujm5ngu().b[3][0]++, theme.palette.secondary.toolbarBg2) : (cov_2ctujm5ngu().b[3][1]++, theme.palette.secondary.toolbarBg1)
    },
    treeWrapper: {
      backgroundColor: theme.palette.type === 'dark' ? (cov_2ctujm5ngu().b[4][0]++, theme.palette.secondary.toolbarBg2) : (cov_2ctujm5ngu().b[4][1]++, theme.palette.secondary.toolbarBg1),
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      flexDirection: 'row',
      width: '100%',
      position: 'absolute',
      top: '3.7rem',
      opacity: '0',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse'
      }
    },
    treeWrapperAnimate: {
      opacity: '1'
    },
    cardbg: {
      backgroundColor: 'white'
    },
    cardStyle: {
      background: theme.palette.secondary.card,
      color: 'white',
      height: '10rem',
      width: '13rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0rem 0.7rem',
      flexDirection: 'column',
      cursor: 'pointer',
      [theme.breakpoints.down('md')]: {
        height: '10rem',
        width: '8.5rem'
      },
      [theme.breakpoints.down('sm')]: {
        width: '13rem',
        marginTop: '0.7rem',
        marginRight: '0.5rem'
      }
    },
    cardStyleAnimate: {
      marginTop: '0.7rem',
      margin: '0rem 0.7rem',
      height: '3rem',
      width: '15rem',
      flexDirection: 'row-reverse',
      borderRadius: '8px 8px 0px 0px',
      paddingTop: '0.2rem',
      backgroundColor: theme.palette.secondary.tabCard,
      [theme.breakpoints.down('sm')]: {
        padding: '0.1rem',
        flexDirection: 'column',
        margin: '0rem 0.2rem',
        width: '10rem'
      }
    },
    detailsContainer: {
      height: '60vh',
      width: '50%',
      backgroundColor: theme.palette.secondary.detailsContainer,
      borderRadius: '6px',
      padding: '1rem 2rem',
      overflowY: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        padding: '1rem',
        height: 'fit-content',
        maxHeight: '30rem'
      }
    },
    emptyDetailsContainer: {
      height: '60vh',
      width: '50%',
      backgroundColor: theme.palette.secondary.detailsContainer,
      borderRadius: '6px',
      padding: '2.5rem',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        padding: '0.5rem',
        height: 'fit-content',
        maxHeight: '30rem'
      }
    },
    activeTab: {
      backgroundColor: theme.palette.type === 'dark' ? (cov_2ctujm5ngu().b[5][0]++, theme.palette.secondary.toolbarBg2) : (cov_2ctujm5ngu().b[5][1]++, theme.palette.secondary.toolbarBg1),
      color: theme.palette.secondary.text
    },
    line: {
      borderLeft: `1px dashed ${theme.palette.secondary.text}`
    },
    treeContainer: {
      height: '30rem',
      width: '50%',
      margin: '1rem',
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '90%'
      }
    },
    searchContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottom: '1px solid #d2d3d4'
    },
    segment: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },
    fullWidth: {
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '70%'
      }
    } // Define other styles as needed

  };
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ })

};
;