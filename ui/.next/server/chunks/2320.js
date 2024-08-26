"use strict";
exports.id = 2320;
exports.ids = [2320];
exports.modules = {

/***/ 38235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RJSF_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11285);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RJSF_wrapper__WEBPACK_IMPORTED_MODULE_1__]);
_RJSF_wrapper__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_268wzs3c04() {
  var path = "/workspace/meshplay/ui/components/MeshplayMeshInterface/PatternService/index.js";
  var hash = "ccc001bba4306cb70ce747a472f7d77ec993f04c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayMeshInterface/PatternService/index.js",
    statementMap: {
      "0": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 43,
          column: 6
        }
      },
      "1": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 43,
          column: 6
        }
      },
      "2": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "PatternService",
        decl: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 23
          }
        },
        loc: {
          start: {
            line: 29,
            column: 3
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 29
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 43,
            column: 6
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 43,
            column: 6
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
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ccc001bba4306cb70ce747a472f7d77ec993f04c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_268wzs3c04 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_268wzs3c04();
// @ts-check


/**
 * PatternService returns a component for the given jsonSchema
 * @param {{
 *  jsonSchema: Record<string, any>;
 *  onChange: Function;
 *  onSubmit?: Function;
 *  onDelete?: Function;
 *  type: "trait" | "workload"
 *  formData: Record<string, any>;
 *  RJSFWrapperComponent?: any;
 *  RJSFFormChildComponent?: any;
 * }} props
 *
 * @returns
 */



function PatternService({
  formData,
  jsonSchema,
  onChange,
  type,
  onSubmit,
  onDelete,
  RJSFWrapperComponent,
  RJSFFormChildComponent
}) {
  cov_268wzs3c04().f[0]++;
  cov_268wzs3c04().s[0]++;

  if (Object.keys(jsonSchema?.properties).length > 0) {
    cov_268wzs3c04().b[0][0]++;
    cov_268wzs3c04().s[1]++;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_RJSF_wrapper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      formData: formData,
      hideSubmit: type === 'trait',
      hideTitle: type === 'workload',
      jsonSchema: jsonSchema,
      onChange: onChange,
      onSubmit: onSubmit,
      onDelete: onDelete,
      RJSFWrapperComponent: RJSFWrapperComponent,
      RJSFFormChildComponent: RJSFFormChildComponent
    });
  } else {
    cov_268wzs3c04().b[0][1]++;
  }

  cov_268wzs3c04().s[2]++;
  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternService);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92320:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72105);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19192);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_icons_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52518);
/* harmony import */ var _utils_lightenOrDarkenColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48724);
/* harmony import */ var _PatternServiceFormCore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2867);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PatternServiceFormCore__WEBPACK_IMPORTED_MODULE_6__]);
_PatternServiceFormCore__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_1fm0i6737y() {
  var path = "/workspace/meshplay/ui/components/MeshplayMeshInterface/PatternServiceForm.js";
  var hash = "3bd38204c244ba7dc3843689971af01eddb2fe44";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayMeshInterface/PatternServiceForm.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 36
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "2": {
        start: {
          line: 62,
          column: 18
        },
        end: {
          line: 62,
          column: 29
        }
      },
      "3": {
        start: {
          line: 63,
          column: 16
        },
        end: {
          line: 63,
          column: 26
        }
      },
      "4": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 93,
          column: 9
        }
      },
      "5": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 70,
          column: 6
        }
      },
      "6": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 76,
          column: 6
        }
      },
      "7": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 84,
          column: 6
        }
      },
      "8": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 92,
          column: 6
        }
      },
      "9": {
        start: {
          line: 95,
          column: 2
        },
        end: {
          line: 164,
          column: 4
        }
      },
      "10": {
        start: {
          line: 107,
          column: 8
        },
        end: {
          line: 161,
          column: 10
        }
      },
      "11": {
        start: {
          line: 150,
          column: 20
        },
        end: {
          line: 152,
          column: 23
        }
      },
      "12": {
        start: {
          line: 150,
          column: 60
        },
        end: {
          line: 152,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 29
          },
          end: {
            line: 11,
            column: 30
          }
        },
        loc: {
          start: {
            line: 11,
            column: 36
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "PatternServiceForm",
        decl: {
          start: {
            line: 51,
            column: 9
          },
          end: {
            line: 51,
            column: 27
          }
        },
        loc: {
          start: {
            line: 61,
            column: 3
          },
          end: {
            line: 165,
            column: 1
          }
        },
        line: 61
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 65,
            column: 13
          }
        },
        loc: {
          start: {
            line: 65,
            column: 18
          },
          end: {
            line: 93,
            column: 3
          }
        },
        line: 65
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 106,
            column: 7
          },
          end: {
            line: 106,
            column: 8
          }
        },
        loc: {
          start: {
            line: 106,
            column: 25
          },
          end: {
            line: 162,
            column: 7
          }
        },
        line: 106
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 148,
            column: 27
          },
          end: {
            line: 148,
            column: 28
          }
        },
        loc: {
          start: {
            line: 150,
            column: 20
          },
          end: {
            line: 152,
            column: 23
          }
        },
        line: 150
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 150,
            column: 45
          },
          end: {
            line: 150,
            column: 46
          }
        },
        loc: {
          start: {
            line: 150,
            column: 60
          },
          end: {
            line: 152,
            column: 21
          }
        },
        line: 150
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 59,
            column: 2
          },
          end: {
            line: 59,
            column: 16
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 59,
            column: 11
          },
          end: {
            line: 59,
            column: 16
          }
        }],
        line: 59
      },
      "1": {
        loc: {
          start: {
            line: 112,
            column: 31
          },
          end: {
            line: 112,
            column: 84
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 112,
            column: 63
          },
          end: {
            line: 112,
            column: 72
          }
        }, {
          start: {
            line: 112,
            column: 75
          },
          end: {
            line: 112,
            column: 84
          }
        }],
        line: 112
      },
      "2": {
        loc: {
          start: {
            line: 137,
            column: 17
          },
          end: {
            line: 145,
            column: 17
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 137,
            column: 17
          },
          end: {
            line: 137,
            column: 49
          }
        }, {
          start: {
            line: 138,
            column: 18
          },
          end: {
            line: 144,
            column: 26
          }
        }],
        line: 137
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
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3bd38204c244ba7dc3843689971af01eddb2fe44"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fm0i6737y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1fm0i6737y();
// @ts-check










const useStyles = (cov_1fm0i6737y().s[0]++, (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(() => {
  cov_1fm0i6737y().f[0]++;
  cov_1fm0i6737y().s[1]++;
  return {
    tabPanel: {
      padding: '0px 2px'
    },
    formWrapper: {
      width: '100%'
    },
    settingsIcon: {
      color: 'black'
    },
    appTabs: {
      width: 128,
      overflow: 'hidden',
      transition: 'width 0.5s',
      '&.Mui-disabled': {
        width: 0
      }
    },
    setIcon: {
      verticalAlign: 'middle',
      transform: 'scale(0.8)'
    }
  };
}));
/**
 * PatternServiceForm renders a form from the workloads schema
 * @param {{
 *  schemaSet: { workload: any, type: string };
 *  onSubmit: Function;
 *  onDelete: Function;
 *  namespace: string;
 *  onChange?: Function
 *  onSettingsChange?: Function;
 *  formData?: Record<String, unknown>
 *  reference?: Record<any, any>;
 *  scroll?: Boolean; // If the window should be scrolled to zero after re-rendering
 *  color ?: string;
 * }} props
 * @returns
 */

function PatternServiceForm({
  formData,
  schemaSet,
  onSubmit,
  onDelete,
  reference,
  namespace,
  onSettingsChange,
  scroll = (cov_1fm0i6737y().b[0][0]++, false),
  color
}) {
  cov_1fm0i6737y().f[1]++;
  const classes = (cov_1fm0i6737y().s[2]++, useStyles());
  const theme = (cov_1fm0i6737y().s[3]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.useTheme)());
  cov_1fm0i6737y().s[4]++;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    cov_1fm0i6737y().f[2]++;
    cov_1fm0i6737y().s[5]++;
    schemaSet.workload.properties.name = {
      description: 'A descriptive label for this component. Must be unique within this design.',
      default: '<Name of the Component>',
      type: 'string'
    };
    cov_1fm0i6737y().s[6]++;
    schemaSet.workload.properties.namespace = {
      description: 'A descriptive label for the Kubernetes namespace in which this component resides. All namespaced components must have a value in this field.',
      default: 'default',
      type: 'string'
    };
    cov_1fm0i6737y().s[7]++;
    schemaSet.workload.properties.labels = {
      description: 'Use one or more labels to annotate your component with descriptive information in the form of key-value pairs. Components with matching key-value pairs are automatically visually grouped together.',
      additionalProperties: {
        type: 'string'
      },
      type: 'object'
    };
    cov_1fm0i6737y().s[8]++;
    schemaSet.workload.properties.annotations = {
      description: 'Use one or more annotations to capture additional, extended details about this component in the form of key-value pairs. Components with matching annotations are automatically visually grouped together.',
      additionalProperties: {
        type: 'string'
      },
      type: 'object'
    };
  }, []);
  cov_1fm0i6737y().s[9]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_PatternServiceFormCore__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    formData: formData,
    schemaSet: schemaSet,
    onSubmit: onSubmit,
    onDelete: onDelete,
    reference: reference,
    namespace: namespace,
    onSettingsChange: onSettingsChange,
    scroll: scroll,
    children: SettingsForm => {
      cov_1fm0i6737y().f[3]++;
      cov_1fm0i6737y().s[10]++;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: classes.formWrapper,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.AppBar, {
          style: {
            boxShadow: `0px 2px 4px -1px "#677E88"`,
            background: `${theme.palette.type === 'dark' ? (cov_1fm0i6737y().b[1][0]++, '#202020') : (cov_1fm0i6737y().b[1][1]++, '#647881')}`,
            position: 'sticky',
            zIndex: 'auto'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Toolbar, {
            variant: "dense",
            style: {
              padding: '0 5px',
              paddingLeft: 16,
              background: `linear-gradient(115deg, ${(0,_utils_lightenOrDarkenColor__WEBPACK_IMPORTED_MODULE_5__/* .pSBCr */ .Y)(color, -20)} 0%, ${color} 100%)`,
              height: '0.7rem !important'
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_2___default()), {
              style: _css_icons_styles__WEBPACK_IMPORTED_MODULE_4__/* .iconSmall */ .uE
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
              style: {
                margin: 'auto auto auto 10px',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center'
              },
              children: "Settings"
            }), (cov_1fm0i6737y().b[2][0]++, schemaSet?.workload?.description) && (cov_1fm0i6737y().b[2][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("label", {
              htmlFor: "help-button",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                title: schemaSet?.workload?.description,
                interactive: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
                  component: "span",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.HelpOutline, {
                    width: "22px",
                    style: {
                      color: '#fff'
                    },
                    height: "22px"
                  })
                })
              })
            })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
              component: "span",
              onClick: () => {
                cov_1fm0i6737y().f[4]++;
                cov_1fm0i6737y().s[11]++;
                return (// @ts-ignore
                  reference.current.delete(settings => {
                    cov_1fm0i6737y().f[5]++;
                    cov_1fm0i6737y().s[12]++;
                    return {
                      settings
                    };
                  })
                );
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Delete, {
                width: "22px",
                height: "22px",
                style: {
                  color: '#FFF'
                }
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SettingsForm, {})]
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternServiceForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_hooks_useStateCB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17520);
/* harmony import */ var _PatternService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38235);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51104);
/* harmony import */ var _MeshplayPerformance_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50976);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PatternService__WEBPACK_IMPORTED_MODULE_1__, _utils_utils__WEBPACK_IMPORTED_MODULE_4__]);
([_PatternService__WEBPACK_IMPORTED_MODULE_1__, _utils_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_2c4jlpye8n() {
  var path = "/workspace/meshplay/ui/components/MeshplayMeshInterface/PatternServiceFormCore.js";
  var hash = "8e0bba7fe5451ad6b90e64b18524dbfd07c3f204";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayMeshInterface/PatternServiceFormCore.js",
    statementMap: {
      "0": {
        start: {
          line: 38,
          column: 55
        },
        end: {
          line: 41,
          column: 3
        }
      },
      "1": {
        start: {
          line: 42,
          column: 32
        },
        end: {
          line: 42,
          column: 43
        }
      },
      "2": {
        start: {
          line: 44,
          column: 32
        },
        end: {
          line: 44,
          column: 56
        }
      },
      "3": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 52,
          column: 18
        }
      },
      "4": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 51,
          column: 5
        }
      },
      "5": {
        start: {
          line: 48,
          column: 6
        },
        end: {
          line: 48,
          column: 56
        }
      },
      "6": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 49,
          column: 30
        }
      },
      "7": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 30
        }
      },
      "8": {
        start: {
          line: 54,
          column: 16
        },
        end: {
          line: 54,
          column: 34
        }
      },
      "9": {
        start: {
          line: 56,
          column: 24
        },
        end: {
          line: 64,
          column: 3
        }
      },
      "10": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 63,
          column: 5
        }
      },
      "11": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 60,
          column: 8
        }
      },
      "12": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 57
        }
      },
      "13": {
        start: {
          line: 66,
          column: 24
        },
        end: {
          line: 71,
          column: 3
        }
      },
      "14": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 70,
          column: 6
        }
      },
      "15": {
        start: {
          line: 73,
          column: 29
        },
        end: {
          line: 87,
          column: 3
        }
      },
      "16": {
        start: {
          line: 73,
          column: 35
        },
        end: {
          line: 87,
          column: 3
        }
      },
      "17": {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 85,
          column: 8
        }
      },
      "18": {
        start: {
          line: 81,
          column: 26
        },
        end: {
          line: 81,
          column: 76
        }
      },
      "19": {
        start: {
          line: 82,
          column: 26
        },
        end: {
          line: 82,
          column: 76
        }
      },
      "20": {
        start: {
          line: 89,
          column: 2
        },
        end: {
          line: 96,
          column: 3
        }
      },
      "21": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 51
        }
      },
      "22": {
        start: {
          line: 90,
          column: 28
        },
        end: {
          line: 90,
          column: 51
        }
      },
      "23": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 82
        }
      },
      "24": {
        start: {
          line: 92,
          column: 39
        },
        end: {
          line: 92,
          column: 81
        }
      },
      "25": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 82
        }
      },
      "26": {
        start: {
          line: 93,
          column: 39
        },
        end: {
          line: 93,
          column: 81
        }
      },
      "27": {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 94,
          column: 64
        }
      },
      "28": {
        start: {
          line: 94,
          column: 42
        },
        end: {
          line: 94,
          column: 63
        }
      },
      "29": {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 95,
          column: 50
        }
      },
      "30": {
        start: {
          line: 99,
          column: 2
        },
        end: {
          line: 99,
          column: 42
        }
      },
      "31": {
        start: {
          line: 99,
          column: 21
        },
        end: {
          line: 99,
          column: 42
        }
      },
      "32": {
        start: {
          line: 101,
          column: 2
        },
        end: {
          line: 118,
          column: 3
        }
      },
      "33": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 117,
          column: 7
        }
      },
      "34": {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 114,
          column: 10
        }
      },
      "35": {
        start: {
          line: 110,
          column: 28
        },
        end: {
          line: 110,
          column: 78
        }
      },
      "36": {
        start: {
          line: 111,
          column: 28
        },
        end: {
          line: 111,
          column: 78
        }
      },
      "37": {
        start: {
          line: 116,
          column: 12
        },
        end: {
          line: 116,
          column: 16
        }
      },
      "38": {
        start: {
          line: 120,
          column: 2
        },
        end: {
          line: 120,
          column: 23
        }
      },
      "39": {
        start: {
          line: 123,
          column: 31
        },
        end: {
          line: 129,
          column: 1
        }
      },
      "40": {
        start: {
          line: 124,
          column: 2
        },
        end: {
          line: 128,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "PatternServiceFormCore_",
        decl: {
          start: {
            line: 27,
            column: 9
          },
          end: {
            line: 27,
            column: 32
          }
        },
        loc: {
          start: {
            line: 37,
            column: 3
          },
          end: {
            line: 121,
            column: 1
          }
        },
        line: 37
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 46,
            column: 12
          },
          end: {
            line: 46,
            column: 13
          }
        },
        loc: {
          start: {
            line: 46,
            column: 18
          },
          end: {
            line: 52,
            column: 3
          }
        },
        line: 46
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 56,
            column: 24
          },
          end: {
            line: 56,
            column: 25
          }
        },
        loc: {
          start: {
            line: 56,
            column: 33
          },
          end: {
            line: 64,
            column: 3
          }
        },
        line: 56
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 66,
            column: 24
          },
          end: {
            line: 66,
            column: 25
          }
        },
        loc: {
          start: {
            line: 66,
            column: 33
          },
          end: {
            line: 71,
            column: 3
          }
        },
        line: 66
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 73,
            column: 29
          },
          end: {
            line: 73,
            column: 30
          }
        },
        loc: {
          start: {
            line: 73,
            column: 35
          },
          end: {
            line: 87,
            column: 3
          }
        },
        line: 73
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        loc: {
          start: {
            line: 74,
            column: 26
          },
          end: {
            line: 86,
            column: 5
          }
        },
        line: 74
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 81,
            column: 20
          },
          end: {
            line: 81,
            column: 21
          }
        },
        loc: {
          start: {
            line: 81,
            column: 26
          },
          end: {
            line: 81,
            column: 76
          }
        },
        line: 81
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 82,
            column: 20
          },
          end: {
            line: 82,
            column: 21
          }
        },
        loc: {
          start: {
            line: 82,
            column: 26
          },
          end: {
            line: 82,
            column: 76
          }
        },
        line: 82
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 92,
            column: 31
          },
          end: {
            line: 92,
            column: 32
          }
        },
        loc: {
          start: {
            line: 92,
            column: 39
          },
          end: {
            line: 92,
            column: 81
          }
        },
        line: 92
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 93,
            column: 31
          },
          end: {
            line: 93,
            column: 32
          }
        },
        loc: {
          start: {
            line: 93,
            column: 39
          },
          end: {
            line: 93,
            column: 81
          }
        },
        line: 93
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 94,
            column: 36
          },
          end: {
            line: 94,
            column: 37
          }
        },
        loc: {
          start: {
            line: 94,
            column: 42
          },
          end: {
            line: 94,
            column: 63
          }
        },
        line: 94
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 103,
            column: 7
          }
        },
        loc: {
          start: {
            line: 103,
            column: 28
          },
          end: {
            line: 115,
            column: 7
          }
        },
        line: 103
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 110,
            column: 22
          },
          end: {
            line: 110,
            column: 23
          }
        },
        loc: {
          start: {
            line: 110,
            column: 28
          },
          end: {
            line: 110,
            column: 78
          }
        },
        line: 110
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 111,
            column: 22
          },
          end: {
            line: 111,
            column: 23
          }
        },
        loc: {
          start: {
            line: 111,
            column: 28
          },
          end: {
            line: 111,
            column: 78
          }
        },
        line: 111
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 116,
            column: 7
          }
        },
        loc: {
          start: {
            line: 116,
            column: 12
          },
          end: {
            line: 116,
            column: 16
          }
        },
        line: 116
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 123,
            column: 31
          },
          end: {
            line: 123,
            column: 32
          }
        },
        loc: {
          start: {
            line: 123,
            column: 42
          },
          end: {
            line: 129,
            column: 1
          }
        },
        line: 123
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 16
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 36,
            column: 11
          },
          end: {
            line: 36,
            column: 16
          }
        }],
        line: 36
      },
      "1": {
        loc: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 39,
            column: 38
          },
          end: {
            line: 39,
            column: 55
          }
        }, {
          start: {
            line: 39,
            column: 58
          },
          end: {
            line: 39,
            column: 60
          }
        }],
        line: 39
      },
      "2": {
        loc: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 12
          }
        }, {
          start: {
            line: 39,
            column: 16
          },
          end: {
            line: 39,
            column: 35
          }
        }],
        line: 39
      },
      "3": {
        loc: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 51,
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
        line: 47
      },
      "4": {
        loc: {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 29
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 12
          }
        }, {
          start: {
            line: 50,
            column: 16
          },
          end: {
            line: 50,
            column: 29
          }
        }],
        line: 50
      },
      "5": {
        loc: {
          start: {
            line: 74,
            column: 14
          },
          end: {
            line: 74,
            column: 24
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 74,
            column: 22
          },
          end: {
            line: 74,
            column: 24
          }
        }],
        line: 74
      },
      "6": {
        loc: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 96,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 96,
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
        line: 89
      },
      "7": {
        loc: {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 51
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
        line: 90
      },
      "8": {
        loc: {
          start: {
            line: 99,
            column: 2
          },
          end: {
            line: 99,
            column: 42
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 99,
            column: 2
          },
          end: {
            line: 99,
            column: 42
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
        line: 99
      },
      "9": {
        loc: {
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 118,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 118,
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
        line: 101
      },
      "10": {
        loc: {
          start: {
            line: 103,
            column: 16
          },
          end: {
            line: 103,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 103,
            column: 24
          },
          end: {
            line: 103,
            column: 26
          }
        }],
        line: 103
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
      "40": 0
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
      "15": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8e0bba7fe5451ad6b90e64b18524dbfd07c3f204"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2c4jlpye8n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2c4jlpye8n();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import React from 'react';
// @ts-check







/**
 * usePatternServiceForm seperates the form logic from its UI representation
 * @param {{
 *  schemaSet: { workload: any, type: string };
 *  onSubmit: Function;
 *  onDelete: Function;
 *  namespace: string;
 *  onChange?: Function
 *  onSettingsChange?: Function;
 *  formData?: Record<String, unknown>
 *  reference?: Record<any, any>;
 * 	children?: Function;
 *  scroll?: Boolean; // If the window should be scrolled to zero after re-rendering
 * }} param0 props for the component
 */



function PatternServiceFormCore_({
  formData,
  schemaSet,
  onSubmit,
  onDelete,
  reference,
  namespace,
  onSettingsChange,
  children,
  scroll = (cov_2c4jlpye8n().b[0][0]++, false)
}) {
  cov_2c4jlpye8n().f[0]++;
  const [settings, setSettings, getSettingsRefValue] = (cov_2c4jlpye8n().s[0]++, (0,_utils_hooks_useStateCB__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((cov_2c4jlpye8n().b[2][0]++, formData) && (cov_2c4jlpye8n().b[2][1]++, !!formData.settings) ? (cov_2c4jlpye8n().b[1][0]++, formData.settings) : (cov_2c4jlpye8n().b[1][1]++, {}), onSettingsChange));
  const [update, forceUpdate] = (cov_2c4jlpye8n().s[1]++, (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0)); // eslint-disable-next-line no-unused-vars

  const [rjsfReferenceKey, _] = (cov_2c4jlpye8n().s[2]++, (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_MeshplayPerformance_helper__WEBPACK_IMPORTED_MODULE_5__/* .generateUUID */ .D)()));
  cov_2c4jlpye8n().s[3]++;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    cov_2c4jlpye8n().f[1]++;
    cov_2c4jlpye8n().s[4]++;

    if (schemaSet.type !== 'addon') {
      cov_2c4jlpye8n().b[3][0]++;
      cov_2c4jlpye8n().s[5]++;
      child.current = children(...propagatedChildren());
      cov_2c4jlpye8n().s[6]++;
      forceUpdate(update + 1); // updating the state for simulating re-rendering of changed children

      cov_2c4jlpye8n().s[7]++;
      (cov_2c4jlpye8n().b[4][0]++, scroll) && (cov_2c4jlpye8n().b[4][1]++, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .scrollToTop */ .k3)());
    } else {
      cov_2c4jlpye8n().b[3][1]++;
    }
  }, [schemaSet]);
  const child = (cov_2c4jlpye8n().s[8]++, react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null));
  cov_2c4jlpye8n().s[9]++;

  const submitHandler = val => {
    cov_2c4jlpye8n().f[2]++;
    cov_2c4jlpye8n().s[10]++;

    try {
      cov_2c4jlpye8n().s[11]++;
      onSubmit?.((0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .createPatternFromConfig */ .dN)({
        [(0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getPatternAttributeName */ .Bq)(schemaSet.workload)]: val
      }, namespace));
    } catch (e) {
      cov_2c4jlpye8n().s[12]++;
      console.log('error while submitting form-data', e);
    }
  };

  cov_2c4jlpye8n().s[13]++;

  const deleteHandler = val => {
    cov_2c4jlpye8n().f[3]++;
    cov_2c4jlpye8n().s[14]++;
    onDelete?.((0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .createPatternFromConfig */ .dN)({
      [(0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getPatternAttributeName */ .Bq)(schemaSet.workload)]: val
    }, namespace), true);
  };

  cov_2c4jlpye8n().s[15]++;

  const propagatedChildren = () => {
    cov_2c4jlpye8n().f[4]++;
    cov_2c4jlpye8n().s[16]++;
    return [function (props = (cov_2c4jlpye8n().b[5][0]++, {})) {
      cov_2c4jlpye8n().f[5]++;
      cov_2c4jlpye8n().s[17]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_PatternService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _objectSpread({
        type: "workload",
        formData: settings,
        jsonSchema: schemaSet.workload,
        onChange: setSettings,
        onSubmit: () => {
          cov_2c4jlpye8n().f[6]++;
          cov_2c4jlpye8n().s[18]++;
          return submitHandler({
            settings: getSettingsRefValue()
          });
        },
        onDelete: () => {
          cov_2c4jlpye8n().f[7]++;
          cov_2c4jlpye8n().s[19]++;
          return deleteHandler({
            settings: getSettingsRefValue()
          });
        }
      }, props));
    }];
  };

  cov_2c4jlpye8n().s[20]++;

  if (reference) {
    cov_2c4jlpye8n().b[6][0]++;
    cov_2c4jlpye8n().s[21]++;

    if (!reference.current) {
      cov_2c4jlpye8n().b[7][0]++;
      cov_2c4jlpye8n().s[22]++;
      reference.current = {};
    } else {
      cov_2c4jlpye8n().b[7][1]++;
    }

    cov_2c4jlpye8n().s[23]++;

    reference.current.submit = cb => {
      cov_2c4jlpye8n().f[8]++;
      cov_2c4jlpye8n().s[24]++;
      return submitHandler(cb?.(getSettingsRefValue()));
    };

    cov_2c4jlpye8n().s[25]++;

    reference.current.delete = cb => {
      cov_2c4jlpye8n().f[9]++;
      cov_2c4jlpye8n().s[26]++;
      return deleteHandler(cb?.(getSettingsRefValue()));
    };

    cov_2c4jlpye8n().s[27]++;

    reference.current.getSettings = () => {
      cov_2c4jlpye8n().f[10]++;
      cov_2c4jlpye8n().s[28]++;
      return getSettingsRefValue();
    };

    cov_2c4jlpye8n().s[29]++;
    reference.current.referKey = rjsfReferenceKey;
  } else {
    cov_2c4jlpye8n().b[6][1]++;
  } // Return cached child -- Prevents rerenders


  cov_2c4jlpye8n().s[30]++;

  if (child.current) {
    cov_2c4jlpye8n().b[8][0]++;
    cov_2c4jlpye8n().s[31]++;
    return child.current;
  } else {
    cov_2c4jlpye8n().b[8][1]++;
  }

  cov_2c4jlpye8n().s[32]++;

  if (schemaSet.type === 'addon') {
    cov_2c4jlpye8n().b[9][0]++;
    cov_2c4jlpye8n().s[33]++;
    return child.current = children(function (props = (cov_2c4jlpye8n().b[10][0]++, {})) {
      cov_2c4jlpye8n().f[11]++;
      cov_2c4jlpye8n().s[34]++;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_PatternService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _objectSpread({
        formData: settings,
        type: "workload",
        jsonSchema: schemaSet.workload,
        onChange: setSettings,
        onSubmit: () => {
          cov_2c4jlpye8n().f[12]++;
          cov_2c4jlpye8n().s[35]++;
          return submitHandler({
            settings: getSettingsRefValue()
          });
        },
        onDelete: () => {
          cov_2c4jlpye8n().f[13]++;
          cov_2c4jlpye8n().s[36]++;
          return deleteHandler({
            settings: getSettingsRefValue()
          });
        }
      }, props));
    }, () => {
      cov_2c4jlpye8n().f[14]++;
      cov_2c4jlpye8n().s[37]++;
      return null;
    });
  } else {
    cov_2c4jlpye8n().b[9][1]++;
  }

  cov_2c4jlpye8n().s[38]++;
  return child.current;
}

cov_2c4jlpye8n().s[39]++;

const PatternServiceFormCore = props => {
  cov_2c4jlpye8n().f[15]++;
  cov_2c4jlpye8n().s[40]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundary, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(PatternServiceFormCore_, _objectSpread({}, props))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternServiceFormCore);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 17520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function cov_1svwnt38kh() {
  var path = "/workspace/meshplay/ui/utils/hooks/useStateCB.js";
  var hash = "80541383316dbb7b9f26b77b957e7e2ee8ac2055";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/utils/hooks/useStateCB.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 29
        },
        end: {
          line: 4,
          column: 54
        }
      },
      "1": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 5,
          column: 42
        }
      },
      "2": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 7,
          column: 36
        }
      },
      "3": {
        start: {
          line: 8,
          column: 27
        },
        end: {
          line: 8,
          column: 54
        }
      },
      "4": {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 9,
          column: 42
        }
      },
      "5": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 17,
          column: 14
        }
      },
      "6": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "7": {
        start: {
          line: 12,
          column: 31
        },
        end: {
          line: 12,
          column: 61
        }
      },
      "8": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 35
        }
      },
      "9": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 40
        }
      },
      "10": {
        start: {
          line: 19,
          column: 19
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "11": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 35
        }
      },
      "12": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 29
        }
      },
      "13": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 21
        }
      },
      "14": {
        start: {
          line: 26,
          column: 27
        },
        end: {
          line: 26,
          column: 49
        }
      },
      "15": {
        start: {
          line: 26,
          column: 33
        },
        end: {
          line: 26,
          column: 49
        }
      },
      "16": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "useStateCB",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 19
          }
        },
        loc: {
          start: {
            line: 3,
            column: 46
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 18
          },
          end: {
            line: 11,
            column: 19
          }
        },
        loc: {
          start: {
            line: 11,
            column: 24
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 19
          },
          end: {
            line: 19,
            column: 20
          }
        },
        loc: {
          start: {
            line: 19,
            column: 40
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 26,
            column: 27
          },
          end: {
            line: 26,
            column: 28
          }
        },
        loc: {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 26,
            column: 49
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 16,
            column: 5
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
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "80541383316dbb7b9f26b77b957e7e2ee8ac2055"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1svwnt38kh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1svwnt38kh();


function useStateCB(initState, changeTrackCB) {
  cov_1svwnt38kh().f[0]++;
  const [state, _setState] = (cov_1svwnt38kh().s[0]++, react__WEBPACK_IMPORTED_MODULE_0___default().useState(initState));
  const stateRef = (cov_1svwnt38kh().s[1]++, react__WEBPACK_IMPORTED_MODULE_0___default().useRef(initState));
  const callbackRef = (cov_1svwnt38kh().s[2]++, react__WEBPACK_IMPORTED_MODULE_0___default().useRef());
  const changeTrackCBRef = (cov_1svwnt38kh().s[3]++, react__WEBPACK_IMPORTED_MODULE_0___default().useRef(changeTrackCB));
  const isFirstCBCall = (cov_1svwnt38kh().s[4]++, react__WEBPACK_IMPORTED_MODULE_0___default().useRef(true));
  cov_1svwnt38kh().s[5]++;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    cov_1svwnt38kh().f[1]++;
    cov_1svwnt38kh().s[6]++;

    if (isFirstCBCall.current) {
      cov_1svwnt38kh().b[0][0]++;
      cov_1svwnt38kh().s[7]++;
      isFirstCBCall.current = false;
    } else {
      cov_1svwnt38kh().b[0][1]++;
      cov_1svwnt38kh().s[8]++;
      callbackRef.current?.(state);
      cov_1svwnt38kh().s[9]++;
      changeTrackCBRef.current?.(state);
    }
  }, [state]);
  cov_1svwnt38kh().s[10]++;

  const setState = (state, callback) => {
    cov_1svwnt38kh().f[2]++;
    cov_1svwnt38kh().s[11]++;
    callbackRef.current = callback;
    cov_1svwnt38kh().s[12]++;
    stateRef.current = state;
    cov_1svwnt38kh().s[13]++;

    _setState(state);
  };

  cov_1svwnt38kh().s[14]++;

  const getStateRefValue = () => {
    cov_1svwnt38kh().f[3]++;
    cov_1svwnt38kh().s[15]++;
    return stateRef.current;
  };

  cov_1svwnt38kh().s[16]++;
  return [state, setState, getStateRefValue];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStateCB);

/***/ }),

/***/ 48724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ pSBCr)
/* harmony export */ });
function cov_1ec25gsv1z() {
  var path = "/workspace/meshplay/ui/utils/lightenOrDarkenColor.js";
  var hash = "5f0750bf75ce4d65e7f85d9965c47821a39c8161";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/utils/lightenOrDarkenColor.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 3
        }
      },
      "1": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 21
        }
      },
      "2": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "3": {
        start: {
          line: 8,
          column: 12
        },
        end: {
          line: 8,
          column: 48
        }
      },
      "4": {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 9,
          column: 48
        }
      },
      "5": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 10,
          column: 48
        }
      },
      "6": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 40
        }
      },
      "7": {
        start: {
          line: 16,
          column: 14
        },
        end: {
          line: 16,
          column: 83
        }
      },
      "8": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "9": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 55
        }
      },
      "10": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 44
        }
      },
      "11": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 44
        }
      },
      "12": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 44
        }
      },
      "13": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 24
        }
      },
      "14": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 24
        }
      },
      "15": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 24
        }
      },
      "16": {
        start: {
          line: 32,
          column: 11
        },
        end: {
          line: 32,
          column: 77
        }
      },
      "17": {
        start: {
          line: 33,
          column: 11
        },
        end: {
          line: 33,
          column: 77
        }
      },
      "18": {
        start: {
          line: 34,
          column: 11
        },
        end: {
          line: 34,
          column: 77
        }
      },
      "19": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "pSBCr",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 21
          }
        },
        loc: {
          start: {
            line: 1,
            column: 38
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "RGBBlender",
        decl: {
          start: {
            line: 23,
            column: 9
          },
          end: {
            line: 23,
            column: 19
          }
        },
        loc: {
          start: {
            line: 23,
            column: 38
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 23
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
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
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 7,
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
            line: 7,
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
        line: 7
      },
      "2": {
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 20,
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
        line: 17
      },
      "3": {
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 28,
            column: 23
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 28,
            column: 17
          }
        }, {
          start: {
            line: 28,
            column: 20
          },
          end: {
            line: 28,
            column: 23
          }
        }],
        line: 28
      },
      "4": {
        loc: {
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 29,
            column: 23
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 29,
            column: 16
          },
          end: {
            line: 29,
            column: 17
          }
        }, {
          start: {
            line: 29,
            column: 20
          },
          end: {
            line: 29,
            column: 23
          }
        }],
        line: 29
      },
      "5": {
        loc: {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 30,
            column: 23
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 17
          }
        }, {
          start: {
            line: 30,
            column: 20
          },
          end: {
            line: 30,
            column: 23
          }
        }],
        line: 30
      },
      "6": {
        loc: {
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 32,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 32,
            column: 40
          },
          end: {
            line: 32,
            column: 60
          }
        }, {
          start: {
            line: 32,
            column: 63
          },
          end: {
            line: 32,
            column: 77
          }
        }],
        line: 32
      },
      "7": {
        loc: {
          start: {
            line: 33,
            column: 11
          },
          end: {
            line: 33,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 33,
            column: 40
          },
          end: {
            line: 33,
            column: 60
          }
        }, {
          start: {
            line: 33,
            column: 63
          },
          end: {
            line: 33,
            column: 77
          }
        }],
        line: 33
      },
      "8": {
        loc: {
          start: {
            line: 34,
            column: 11
          },
          end: {
            line: 34,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 34,
            column: 40
          },
          end: {
            line: 34,
            column: 60
          }
        }, {
          start: {
            line: 34,
            column: 63
          },
          end: {
            line: 34,
            column: 77
          }
        }],
        line: 34
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
      "19": 0
    },
    f: {
      "0": 0,
      "1": 0
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
    hash: "5f0750bf75ce4d65e7f85d9965c47821a39c8161"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ec25gsv1z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ec25gsv1z();
function pSBCr(color, percent) {
  cov_1ec25gsv1z().f[0]++;
  cov_1ec25gsv1z().s[0]++;

  if (!color) {
    cov_1ec25gsv1z().b[0][0]++;
    cov_1ec25gsv1z().s[1]++;
    return '#607d8b';
  } else {
    cov_1ec25gsv1z().b[0][1]++;
  } // handle color in Hex Format


  cov_1ec25gsv1z().s[2]++;

  if (color.startsWith('#')) {
    cov_1ec25gsv1z().b[1][0]++;
    let R = (cov_1ec25gsv1z().s[3]++, parseInt(color?.substring(1, 3), 16));
    let G = (cov_1ec25gsv1z().s[4]++, parseInt(color?.substring(3, 5), 16));
    let B = (cov_1ec25gsv1z().s[5]++, parseInt(color?.substring(5, 7), 16));
    cov_1ec25gsv1z().s[6]++;
    return RGBBlender(R, G, B, percent);
  } else {
    cov_1ec25gsv1z().b[1][1]++;
  } // handle color in RGB Format


  const RGB = (cov_1ec25gsv1z().s[7]++, color.substring(3).replaceAll('(', '').replaceAll(')', '').split(','));
  cov_1ec25gsv1z().s[8]++;

  if (RGB.length >= 3) {
    cov_1ec25gsv1z().b[2][0]++;
    cov_1ec25gsv1z().s[9]++;
    // rgb with opacity may have length == 4
    return RGBBlender(RGB[0], RGB[1], RGB[2], percent);
  } else {
    cov_1ec25gsv1z().b[2][1]++;
  }
}

function RGBBlender(R, G, B, percent) {
  cov_1ec25gsv1z().f[1]++;
  cov_1ec25gsv1z().s[10]++;
  R = parseInt(R * (100 + percent) / 100);
  cov_1ec25gsv1z().s[11]++;
  G = parseInt(G * (100 + percent) / 100);
  cov_1ec25gsv1z().s[12]++;
  B = parseInt(B * (100 + percent) / 100);
  cov_1ec25gsv1z().s[13]++;
  R = R < 255 ? (cov_1ec25gsv1z().b[3][0]++, R) : (cov_1ec25gsv1z().b[3][1]++, 255);
  cov_1ec25gsv1z().s[14]++;
  G = G < 255 ? (cov_1ec25gsv1z().b[4][0]++, G) : (cov_1ec25gsv1z().b[4][1]++, 255);
  cov_1ec25gsv1z().s[15]++;
  B = B < 255 ? (cov_1ec25gsv1z().b[5][0]++, B) : (cov_1ec25gsv1z().b[5][1]++, 255);
  let RR = (cov_1ec25gsv1z().s[16]++, R.toString(16).length == 1 ? (cov_1ec25gsv1z().b[6][0]++, '0' + R.toString(16)) : (cov_1ec25gsv1z().b[6][1]++, R.toString(16)));
  let GG = (cov_1ec25gsv1z().s[17]++, G.toString(16).length == 1 ? (cov_1ec25gsv1z().b[7][0]++, '0' + G.toString(16)) : (cov_1ec25gsv1z().b[7][1]++, G.toString(16)));
  let BB = (cov_1ec25gsv1z().s[18]++, B.toString(16).length == 1 ? (cov_1ec25gsv1z().b[8][0]++, '0' + B.toString(16)) : (cov_1ec25gsv1z().b[8][1]++, B.toString(16)));
  cov_1ec25gsv1z().s[19]++;
  return '#' + RR + GG + BB;
}

/***/ })

};
;