"use strict";
(() => {
var exports = {};
exports.id = 2197;
exports.ids = [2197];
exports.modules = {

/***/ 93677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _404)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/ErrorPage.js
function cov_ti2whjj8y() {
  var path = "/workspace/meshplay/ui/components/ErrorPage.js";
  var hash = "4d149f64d7e17e29c912c84c54bc0e9beb8b9f95";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/ErrorPage.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "1": {
        start: {
          line: 4,
          column: 38
        },
        end: {
          line: 41,
          column: 1
        }
      },
      "2": {
        start: {
          line: 43,
          column: 23
        },
        end: {
          line: 51,
          column: 1
        }
      },
      "3": {
        start: {
          line: 58,
          column: 18
        },
        end: {
          line: 58,
          column: 26
        }
      },
      "4": {
        start: {
          line: 59,
          column: 44
        },
        end: {
          line: 59,
          column: 71
        }
      },
      "5": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 63,
          column: 9
        }
      },
      "6": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 88
        }
      },
      "7": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 93,
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
            column: 26
          },
          end: {
            line: 4,
            column: 27
          }
        },
        loc: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "CustomErrorMessage",
        decl: {
          start: {
            line: 57,
            column: 9
          },
          end: {
            line: 57,
            column: 27
          }
        },
        loc: {
          start: {
            line: 57,
            column: 30
          },
          end: {
            line: 94,
            column: 1
          }
        },
        line: 57
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 61,
            column: 12
          },
          end: {
            line: 61,
            column: 13
          }
        },
        loc: {
          start: {
            line: 61,
            column: 18
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 61
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 21
          },
          end: {
            line: 6,
            column: 97
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 6,
            column: 53
          },
          end: {
            line: 6,
            column: 88
          }
        }, {
          start: {
            line: 6,
            column: 91
          },
          end: {
            line: 6,
            column: 97
          }
        }],
        line: 6
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 11
          },
          end: {
            line: 27,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 27,
            column: 43
          },
          end: {
            line: 27,
            column: 52
          }
        }, {
          start: {
            line: 27,
            column: 55
          },
          end: {
            line: 27,
            column: 58
          }
        }],
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 39,
            column: 11
          },
          end: {
            line: 39,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 39,
            column: 43
          },
          end: {
            line: 39,
            column: 49
          }
        }, {
          start: {
            line: 39,
            column: 52
          },
          end: {
            line: 39,
            column: 58
          }
        }],
        line: 39
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4d149f64d7e17e29c912c84c54bc0e9beb8b9f95"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ti2whjj8y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ti2whjj8y();




const styles = (cov_ti2whjj8y().s[0]++, (0,core_.makeStyles)(theme => {
  cov_ti2whjj8y().f[0]++;
  cov_ti2whjj8y().s[1]++;
  return {
    rootClass: {
      backgroundColor: theme.palette.type === 'dark' ? (cov_ti2whjj8y().b[0][0]++, theme.palette.secondary.headerColor) : (cov_ti2whjj8y().b[0][1]++, '#fff'),
      padding: '2rem',
      textAlign: 'center',
      borderRadius: 4,
      height: '100%'
    },
    errorSection: {},
    message: {
      fontSize: '3rem',
      lineHeight: '2rem',
      marginBottom: '2rem'
    },
    errMessage: {
      fontWeight: '400',
      fontSize: '1.5rem',
      color: 'gray',
      fontStyle: 'italic',
      marginTop: '2.5rem'
    },
    discussionforumlink: {
      color: theme.palette.type === 'dark' ? (cov_ti2whjj8y().b[1][0]++, '#00B39F') : (cov_ti2whjj8y().b[1][1]++, '#')
    },
    mesh: {
      display: 'block',
      margin: 'auto',
      marginTop: '3.125rem',
      maxWidth: '50%',
      height: '45%'
    },
    helpMessage: {
      marginTop: '5rem',
      color: theme.palette.type === 'dark' ? (cov_ti2whjj8y().b[2][0]++, '#fff') : (cov_ti2whjj8y().b[2][1]++, '#222')
    }
  };
}));
const customMessages = (cov_ti2whjj8y().s[2]++, ['Oh, no. Please pardon our meshy app.', 'Oops. Please excuse the mesh.', 'Things tend to get a bit meshy around here.', 'Please pardon our mesh.', 'How did this mesh happen?', "Well, isn't this a mesh?", 'Yikes. Things are a mesh here.']);
/**
 * CustomErrorMessage component is used to display a custom error message when a page is not found.
 * @returns {JSX.Element} JSX.Element
 */

function CustomErrorMessage() {
  cov_ti2whjj8y().f[1]++;
  const classes = (cov_ti2whjj8y().s[3]++, styles());
  const [customMessage, setCustomMessage] = (cov_ti2whjj8y().s[4]++, (0,external_react_.useState)(customMessages[0]));
  cov_ti2whjj8y().s[5]++;
  (0,external_react_.useEffect)(() => {
    cov_ti2whjj8y().f[2]++;
    cov_ti2whjj8y().s[6]++;
    setCustomMessage(customMessages[Math.floor(Math.random() * customMessages.length)]);
  }, []);
  cov_ti2whjj8y().s[7]++;
  return /*#__PURE__*/jsx_runtime_.jsx(core_.NoSsr, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.rootClass,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.errorSection,
        children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h1",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.message,
            children: customMessage
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
          variant: "h5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.errMessage,
            children: "Page does not exist."
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/img/service-mesh.svg",
        alt: "service meshed",
        className: classes.mesh
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "body1",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: classes.helpMessage,
          children: ["Start a conversation at KhulnaSoft community", ' ', /*#__PURE__*/jsx_runtime_.jsx(core_.Link, {
            className: classes.discussionforumlink,
            underline: "none",
            href: "http://discuss.meshplay.io/c/meshplay/5",
            target: "_blank",
            children: "discussion forum"
          }), "."]
        })
      })]
    })
  });
}

/* harmony default export */ const ErrorPage = (CustomErrorMessage);
// EXTERNAL MODULE: ./lib/store.js
var store = __webpack_require__(68885);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(86695);
// EXTERNAL MODULE: ./lib/path.js
var path = __webpack_require__(1188);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/404.js
function cov_afaoifaup() {
  var path = "/workspace/meshplay/ui/pages/404.js";
  var hash = "8e6859f53808993c4dcb320774f1a5b76529cb91";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/pages/404.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 14
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 13,
          column: 23
        }
      },
      "2": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 40
        }
      },
      "3": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 22,
          column: 4
        }
      },
      "4": {
        start: {
          line: 25,
          column: 27
        },
        end: {
          line: 27,
          column: 2
        }
      },
      "5": {
        start: {
          line: 25,
          column: 42
        },
        end: {
          line: 27,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 14
          },
          end: {
            line: 10,
            column: 15
          }
        },
        loc: {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 18
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 27
          },
          end: {
            line: 25,
            column: 28
          }
        },
        loc: {
          start: {
            line: 25,
            column: 42
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 25
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
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8e6859f53808993c4dcb320774f1a5b76529cb91"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_afaoifaup = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_afaoifaup();










cov_afaoifaup().s[0]++;

const Error = () => {
  cov_afaoifaup().f[0]++;
  cov_afaoifaup().s[1]++;
  (0,external_react_.useEffect)(() => {
    cov_afaoifaup().f[1]++;
    cov_afaoifaup().s[2]++;
    (0,store/* updatepagepath */.Fb)({
      path: (0,path/* getPath */.D)()
    });
  }, [store/* updatepagepath */.Fb]);
  cov_afaoifaup().s[3]++;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.NoSsr, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "404 - Page Not Found"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ErrorPage, {})]
  });
};

cov_afaoifaup().s[4]++;

const mapDispatchToProps = dispatch => {
  cov_afaoifaup().f[2]++;
  cov_afaoifaup().s[5]++;
  return {
    updatepagepath: (0,external_redux_.bindActionCreators)(store/* updatepagepath */.Fb, dispatch)
  };
};

/* harmony default export */ const _404 = ((0,external_react_redux_.connect)(null, mapDispatchToProps)(Error));

/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 56807:
/***/ ((module) => {

module.exports = require("@redux-devtools/extension");

/***/ }),

/***/ 45572:
/***/ ((module) => {

module.exports = require("immutable");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8885,1188], () => (__webpack_exec__(93677)));
module.exports = __webpack_exports__;

})();