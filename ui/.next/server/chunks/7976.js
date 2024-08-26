"use strict";
exports.id = 7976;
exports.ids = [7976];
exports.modules = {

/***/ 67976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ap": () => (/* binding */ useUpdateUserPrefWithContextMutation),
/* harmony export */   "As": () => (/* binding */ useUpdateUserPrefMutation),
/* harmony export */   "Fk": () => (/* binding */ useGetUserByIdQuery),
/* harmony export */   "Zm": () => (/* binding */ useGetUserPrefQuery),
/* harmony export */   "fK": () => (/* binding */ useLazyGetTokenQuery),
/* harmony export */   "hi": () => (/* binding */ useGetProviderCapabilitiesQuery),
/* harmony export */   "mZ": () => (/* binding */ useGetUserPrefWithContextQuery),
/* harmony export */   "yn": () => (/* binding */ useGetLoggedInUserQuery)
/* harmony export */ });
/* harmony import */ var _utils_multi_ctx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7806);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51125);
function cov_x8n31uwy() {
  var path = "/workspace/meshplay/ui/rtk-query/user.js";
  var hash = "8cb2efe5df129efa731b38f402862452fc300b5a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/rtk-query/user.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 52,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "2": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 25
        }
      },
      "3": {
        start: {
          line: 11,
          column: 21
        },
        end: {
          line: 11,
          column: 41
        }
      },
      "4": {
        start: {
          line: 15,
          column: 19
        },
        end: {
          line: 15,
          column: 26
        }
      },
      "5": {
        start: {
          line: 19,
          column: 19
        },
        end: {
          line: 19,
          column: 31
        }
      },
      "6": {
        start: {
          line: 23,
          column: 28
        },
        end: {
          line: 28,
          column: 7
        }
      },
      "7": {
        start: {
          line: 31,
          column: 39
        },
        end: {
          line: 35,
          column: 7
        }
      },
      "8": {
        start: {
          line: 38,
          column: 28
        },
        end: {
          line: 45,
          column: 7
        }
      },
      "9": {
        start: {
          line: 48,
          column: 19
        },
        end: {
          line: 48,
          column: 42
        }
      },
      "10": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 11
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 13
          },
          end: {
            line: 5,
            column: 14
          }
        },
        loc: {
          start: {
            line: 5,
            column: 27
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 13
          },
          end: {
            line: 7,
            column: 14
          }
        },
        loc: {
          start: {
            line: 7,
            column: 19
          },
          end: {
            line: 7,
            column: 25
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 13
          },
          end: {
            line: 11,
            column: 14
          }
        },
        loc: {
          start: {
            line: 11,
            column: 21
          },
          end: {
            line: 11,
            column: 41
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 13
          },
          end: {
            line: 15,
            column: 14
          }
        },
        loc: {
          start: {
            line: 15,
            column: 19
          },
          end: {
            line: 15,
            column: 26
          }
        },
        line: 15
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 19,
            column: 13
          },
          end: {
            line: 19,
            column: 14
          }
        },
        loc: {
          start: {
            line: 19,
            column: 19
          },
          end: {
            line: 19,
            column: 31
          }
        },
        line: 19
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 23,
            column: 13
          },
          end: {
            line: 23,
            column: 14
          }
        },
        loc: {
          start: {
            line: 23,
            column: 28
          },
          end: {
            line: 28,
            column: 7
          }
        },
        line: 23
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 31,
            column: 13
          },
          end: {
            line: 31,
            column: 14
          }
        },
        loc: {
          start: {
            line: 31,
            column: 39
          },
          end: {
            line: 35,
            column: 7
          }
        },
        line: 31
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 38,
            column: 13
          },
          end: {
            line: 38,
            column: 14
          }
        },
        loc: {
          start: {
            line: 38,
            column: 28
          },
          end: {
            line: 45,
            column: 7
          }
        },
        line: 38
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 48,
            column: 13
          },
          end: {
            line: 48,
            column: 14
          }
        },
        loc: {
          start: {
            line: 48,
            column: 19
          },
          end: {
            line: 48,
            column: 42
          }
        },
        line: 48
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
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
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
      "8": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8cb2efe5df129efa731b38f402862452fc300b5a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_x8n31uwy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_x8n31uwy();


const userApi = (cov_x8n31uwy().s[0]++, _index__WEBPACK_IMPORTED_MODULE_1__/* .api.injectEndpoints */ .h.injectEndpoints({
  endpoints: builder => {
    cov_x8n31uwy().f[0]++;
    cov_x8n31uwy().s[1]++;
    return {
      getLoggedInUser: builder.query({
        query: () => {
          cov_x8n31uwy().f[1]++;
          cov_x8n31uwy().s[2]++;
          return `user`;
        },
        method: 'GET'
      }),
      getUserById: builder.query({
        query: id => {
          cov_x8n31uwy().f[2]++;
          cov_x8n31uwy().s[3]++;
          return `user/profile/${id}`;
        },
        method: 'GET'
      }),
      getToken: builder.query({
        query: () => {
          cov_x8n31uwy().f[3]++;
          cov_x8n31uwy().s[4]++;
          return `token`;
        },
        method: 'GET'
      }),
      getUserPref: builder.query({
        query: () => {
          cov_x8n31uwy().f[4]++;
          cov_x8n31uwy().s[5]++;
          return 'user/prefs';
        },
        method: 'GET'
      }),
      updateUserPref: builder.mutation({
        query: queryArg => {
          cov_x8n31uwy().f[5]++;
          cov_x8n31uwy().s[6]++;
          return {
            url: 'user/prefs',
            method: 'POST',
            body: queryArg.usersExtensionPreferences,
            credentials: 'include'
          };
        }
      }),
      getUserPrefWithContext: builder.query({
        query: selectedK8sContexts => {
          cov_x8n31uwy().f[6]++;
          cov_x8n31uwy().s[7]++;
          return {
            url: (0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_0__/* .ctxUrl */ .GT)('user/prefs', selectedK8sContexts),
            method: 'GET',
            credentials: 'same-origin'
          };
        }
      }),
      updateUserPrefWithContext: builder.mutation({
        query: queryArg => {
          cov_x8n31uwy().f[7]++;
          cov_x8n31uwy().s[8]++;
          return {
            url: (0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_0__/* .ctxUrl */ .GT)('/user/prefs', queryArg.selectedK8sContexts),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            body: queryArg.body
          };
        }
      }),
      getProviderCapabilities: builder.query({
        query: () => {
          cov_x8n31uwy().f[8]++;
          cov_x8n31uwy().s[9]++;
          return 'provider/capabilities';
        },
        method: 'GET'
      })
    };
  }
}));
const {
  useGetLoggedInUserQuery,
  useGetUserByIdQuery,
  useLazyGetTokenQuery,
  useGetUserPrefQuery,
  useUpdateUserPrefMutation,
  useGetUserPrefWithContextQuery,
  useUpdateUserPrefWithContextMutation,
  useGetProviderCapabilitiesQuery
} = (cov_x8n31uwy().s[10]++, userApi);

/***/ })

};
;