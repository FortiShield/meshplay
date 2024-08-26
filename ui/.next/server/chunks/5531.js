"use strict";
exports.id = 5531;
exports.ids = [5531];
exports.modules = {

/***/ 45531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ii": () => (/* binding */ verifyGrafanaConnection),
/* harmony export */   "LY": () => (/* binding */ pingPrometheusWithNotification),
/* harmony export */   "P2": () => (/* binding */ fetchPromGrafanaScanData),
/* harmony export */   "PU": () => (/* binding */ verifyPrometheusConnection),
/* harmony export */   "Rh": () => (/* binding */ pingGrafanaWithNotification),
/* harmony export */   "Sd": () => (/* binding */ extractURLFromScanData),
/* harmony export */   "TZ": () => (/* binding */ handlePrometheusConfigure),
/* harmony export */   "bZ": () => (/* binding */ handleGrafanaConfigure),
/* harmony export */   "fC": () => (/* binding */ deleteMetricsComponentConfig)
/* harmony export */ });
/* unused harmony exports pingGrafana, pingPrometheus */
/* harmony import */ var _lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47533);
/* harmony import */ var _lib_event_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42880);
/* harmony import */ var _utils_multi_ctx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__]);
_lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function cov_25j2cazoje() {
  var path = "/workspace/meshplay/ui/components/ConnectionWizard/helpers/metrics.js";
  var hash = "03188d96de9400cb04da4245c3a275bc8781feb0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/ConnectionWizard/helpers/metrics.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 39
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "2": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "3": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 12,
          column: 8
        }
      },
      "4": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 10,
          column: 46
        }
      },
      "5": {
        start: {
          line: 11,
          column: 19
        },
        end: {
          line: 11,
          column: 58
        }
      },
      "6": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 13
        }
      },
      "7": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 53
        }
      },
      "8": {
        start: {
          line: 19,
          column: 43
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "9": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 41
        }
      },
      "10": {
        start: {
          line: 21,
          column: 20
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "11": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 44
        }
      },
      "12": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "13": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 81
        }
      },
      "14": {
        start: {
          line: 28,
          column: 18
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "15": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 44
        }
      },
      "16": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 34,
          column: 7
        }
      },
      "17": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 34
        }
      },
      "18": {
        start: {
          line: 40,
          column: 27
        },
        end: {
          line: 41,
          column: 98
        }
      },
      "19": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 41,
          column: 98
        }
      },
      "20": {
        start: {
          line: 43,
          column: 42
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "21": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "22": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 51,
          column: 63
        }
      },
      "23": {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 49,
          column: 8
        }
      },
      "24": {
        start: {
          line: 47,
          column: 20
        },
        end: {
          line: 47,
          column: 49
        }
      },
      "25": {
        start: {
          line: 48,
          column: 19
        },
        end: {
          line: 48,
          column: 61
        }
      },
      "26": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 13
        }
      },
      "27": {
        start: {
          line: 51,
          column: 11
        },
        end: {
          line: 51,
          column: 63
        }
      },
      "28": {
        start: {
          line: 55,
          column: 46
        },
        end: {
          line: 75,
          column: 1
        }
      },
      "29": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 56,
          column: 41
        }
      },
      "30": {
        start: {
          line: 58,
          column: 20
        },
        end: {
          line: 63,
          column: 3
        }
      },
      "31": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 44
        }
      },
      "32": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "33": {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 84
        }
      },
      "34": {
        start: {
          line: 65,
          column: 18
        },
        end: {
          line: 72,
          column: 3
        }
      },
      "35": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 44
        }
      },
      "36": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 71,
          column: 7
        }
      },
      "37": {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 37
        }
      },
      "38": {
        start: {
          line: 77,
          column: 30
        },
        end: {
          line: 78,
          column: 90
        }
      },
      "39": {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 78,
          column: 90
        }
      },
      "40": {
        start: {
          line: 80,
          column: 40
        },
        end: {
          line: 106,
          column: 1
        }
      },
      "41": {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 105,
          column: 5
        }
      },
      "42": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 104,
          column: 6
        }
      },
      "43": {
        start: {
          line: 89,
          column: 26
        },
        end: {
          line: 89,
          column: 57
        }
      },
      "44": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 90,
          column: 38
        }
      },
      "45": {
        start: {
          line: 90,
          column: 21
        },
        end: {
          line: 90,
          column: 38
        }
      },
      "46": {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 95,
          column: 9
        }
      },
      "47": {
        start: {
          line: 93,
          column: 23
        },
        end: {
          line: 93,
          column: 64
        }
      },
      "48": {
        start: {
          line: 94,
          column: 10
        },
        end: {
          line: 94,
          column: 40
        }
      },
      "49": {
        start: {
          line: 97,
          column: 8
        },
        end: {
          line: 100,
          column: 9
        }
      },
      "50": {
        start: {
          line: 98,
          column: 23
        },
        end: {
          line: 98,
          column: 61
        }
      },
      "51": {
        start: {
          line: 99,
          column: 10
        },
        end: {
          line: 99,
          column: 37
        }
      },
      "52": {
        start: {
          line: 101,
          column: 8
        },
        end: {
          line: 101,
          column: 25
        }
      },
      "53": {
        start: {
          line: 103,
          column: 15
        },
        end: {
          line: 103,
          column: 77
        }
      },
      "54": {
        start: {
          line: 114,
          column: 38
        },
        end: {
          line: 152,
          column: 1
        }
      },
      "55": {
        start: {
          line: 115,
          column: 17
        },
        end: {
          line: 115,
          column: 19
        }
      },
      "56": {
        start: {
          line: 118,
          column: 2
        },
        end: {
          line: 135,
          column: 3
        }
      },
      "57": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 134,
          column: 7
        }
      },
      "58": {
        start: {
          line: 120,
          column: 21
        },
        end: {
          line: 120,
          column: 27
        }
      },
      "59": {
        start: {
          line: 123,
          column: 6
        },
        end: {
          line: 133,
          column: 7
        }
      },
      "60": {
        start: {
          line: 124,
          column: 8
        },
        end: {
          line: 132,
          column: 11
        }
      },
      "61": {
        start: {
          line: 125,
          column: 10
        },
        end: {
          line: 125,
          column: 47
        }
      },
      "62": {
        start: {
          line: 125,
          column: 28
        },
        end: {
          line: 125,
          column: 47
        }
      },
      "63": {
        start: {
          line: 130,
          column: 24
        },
        end: {
          line: 130,
          column: 52
        }
      },
      "64": {
        start: {
          line: 131,
          column: 10
        },
        end: {
          line: 131,
          column: 71
        }
      },
      "65": {
        start: {
          line: 131,
          column: 23
        },
        end: {
          line: 131,
          column: 71
        }
      },
      "66": {
        start: {
          line: 140,
          column: 2
        },
        end: {
          line: 148,
          column: 3
        }
      },
      "67": {
        start: {
          line: 141,
          column: 19
        },
        end: {
          line: 141,
          column: 25
        }
      },
      "68": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 147,
          column: 5
        }
      },
      "69": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 146,
          column: 9
        }
      },
      "70": {
        start: {
          line: 144,
          column: 8
        },
        end: {
          line: 144,
          column: 45
        }
      },
      "71": {
        start: {
          line: 144,
          column: 26
        },
        end: {
          line: 144,
          column: 45
        }
      },
      "72": {
        start: {
          line: 145,
          column: 8
        },
        end: {
          line: 145,
          column: 68
        }
      },
      "73": {
        start: {
          line: 151,
          column: 2
        },
        end: {
          line: 151,
          column: 16
        }
      },
      "74": {
        start: {
          line: 154,
          column: 38
        },
        end: {
          line: 198,
          column: 1
        }
      },
      "75": {
        start: {
          line: 161,
          column: 2
        },
        end: {
          line: 169,
          column: 3
        }
      },
      "76": {
        start: {
          line: 168,
          column: 4
        },
        end: {
          line: 168,
          column: 11
        }
      },
      "77": {
        start: {
          line: 170,
          column: 15
        },
        end: {
          line: 170,
          column: 44
        }
      },
      "78": {
        start: {
          line: 171,
          column: 17
        },
        end: {
          line: 173,
          column: 14
        }
      },
      "79": {
        start: {
          line: 172,
          column: 18
        },
        end: {
          line: 172,
          column: 79
        }
      },
      "80": {
        start: {
          line: 175,
          column: 2
        },
        end: {
          line: 175,
          column: 41
        }
      },
      "81": {
        start: {
          line: 176,
          column: 2
        },
        end: {
          line: 197,
          column: 4
        }
      },
      "82": {
        start: {
          line: 185,
          column: 6
        },
        end: {
          line: 185,
          column: 46
        }
      },
      "83": {
        start: {
          line: 186,
          column: 6
        },
        end: {
          line: 189,
          column: 7
        }
      },
      "84": {
        start: {
          line: 187,
          column: 8
        },
        end: {
          line: 187,
          column: 88
        }
      },
      "85": {
        start: {
          line: 188,
          column: 8
        },
        end: {
          line: 188,
          column: 72
        }
      },
      "86": {
        start: {
          line: 192,
          column: 6
        },
        end: {
          line: 192,
          column: 46
        }
      },
      "87": {
        start: {
          line: 193,
          column: 6
        },
        end: {
          line: 195,
          column: 7
        }
      },
      "88": {
        start: {
          line: 194,
          column: 8
        },
        end: {
          line: 194,
          column: 98
        }
      },
      "89": {
        start: {
          line: 200,
          column: 41
        },
        end: {
          line: 248,
          column: 1
        }
      },
      "90": {
        start: {
          line: 206,
          column: 2
        },
        end: {
          line: 214,
          column: 3
        }
      },
      "91": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 213,
          column: 11
        }
      },
      "92": {
        start: {
          line: 215,
          column: 15
        },
        end: {
          line: 215,
          column: 32
        }
      },
      "93": {
        start: {
          line: 216,
          column: 17
        },
        end: {
          line: 218,
          column: 14
        }
      },
      "94": {
        start: {
          line: 217,
          column: 18
        },
        end: {
          line: 217,
          column: 79
        }
      },
      "95": {
        start: {
          line: 220,
          column: 2
        },
        end: {
          line: 220,
          column: 41
        }
      },
      "96": {
        start: {
          line: 221,
          column: 2
        },
        end: {
          line: 247,
          column: 4
        }
      },
      "97": {
        start: {
          line: 230,
          column: 6
        },
        end: {
          line: 230,
          column: 46
        }
      },
      "98": {
        start: {
          line: 231,
          column: 6
        },
        end: {
          line: 236,
          column: 7
        }
      },
      "99": {
        start: {
          line: 232,
          column: 8
        },
        end: {
          line: 232,
          column: 91
        }
      },
      "100": {
        start: {
          line: 233,
          column: 8
        },
        end: {
          line: 235,
          column: 11
        }
      },
      "101": {
        start: {
          line: 239,
          column: 6
        },
        end: {
          line: 239,
          column: 46
        }
      },
      "102": {
        start: {
          line: 240,
          column: 6
        },
        end: {
          line: 245,
          column: 7
        }
      },
      "103": {
        start: {
          line: 241,
          column: 8
        },
        end: {
          line: 244,
          column: 11
        }
      },
      "104": {
        start: {
          line: 250,
          column: 44
        },
        end: {
          line: 259,
          column: 3
        }
      },
      "105": {
        start: {
          line: 250,
          column: 63
        },
        end: {
          line: 259,
          column: 3
        }
      },
      "106": {
        start: {
          line: 251,
          column: 2
        },
        end: {
          line: 259,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 39
          },
          end: {
            line: 6,
            column: 40
          }
        },
        loc: {
          start: {
            line: 6,
            column: 55
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 21
          },
          end: {
            line: 7,
            column: 22
          }
        },
        loc: {
          start: {
            line: 7,
            column: 35
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 10,
            column: 8
          },
          end: {
            line: 10,
            column: 9
          }
        },
        loc: {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 10,
            column: 46
          }
        },
        line: 10
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 11,
            column: 9
          }
        },
        loc: {
          start: {
            line: 11,
            column: 19
          },
          end: {
            line: 11,
            column: 58
          }
        },
        line: 11
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 19,
            column: 43
          },
          end: {
            line: 19,
            column: 44
          }
        },
        loc: {
          start: {
            line: 19,
            column: 71
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 19
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 21,
            column: 20
          },
          end: {
            line: 21,
            column: 21
          }
        },
        loc: {
          start: {
            line: 21,
            column: 32
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 21
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 28,
            column: 18
          },
          end: {
            line: 28,
            column: 19
          }
        },
        loc: {
          start: {
            line: 28,
            column: 29
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 28
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 40,
            column: 27
          },
          end: {
            line: 40,
            column: 28
          }
        },
        loc: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 98
          }
        },
        line: 41
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 43,
            column: 42
          },
          end: {
            line: 43,
            column: 43
          }
        },
        loc: {
          start: {
            line: 43,
            column: 61
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 43
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 44,
            column: 21
          },
          end: {
            line: 44,
            column: 22
          }
        },
        loc: {
          start: {
            line: 44,
            column: 35
          },
          end: {
            line: 52,
            column: 3
          }
        },
        line: 44
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 47,
            column: 9
          }
        },
        loc: {
          start: {
            line: 47,
            column: 20
          },
          end: {
            line: 47,
            column: 49
          }
        },
        line: 47
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 48,
            column: 9
          }
        },
        loc: {
          start: {
            line: 48,
            column: 19
          },
          end: {
            line: 48,
            column: 61
          }
        },
        line: 48
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 55,
            column: 46
          },
          end: {
            line: 55,
            column: 47
          }
        },
        loc: {
          start: {
            line: 55,
            column: 74
          },
          end: {
            line: 75,
            column: 1
          }
        },
        line: 55
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 58,
            column: 20
          },
          end: {
            line: 58,
            column: 21
          }
        },
        loc: {
          start: {
            line: 58,
            column: 32
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 58
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 65,
            column: 18
          },
          end: {
            line: 65,
            column: 19
          }
        },
        loc: {
          start: {
            line: 65,
            column: 29
          },
          end: {
            line: 72,
            column: 3
          }
        },
        line: 65
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 77,
            column: 30
          },
          end: {
            line: 77,
            column: 31
          }
        },
        loc: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 90
          }
        },
        line: 78
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 80,
            column: 40
          },
          end: {
            line: 80,
            column: 41
          }
        },
        loc: {
          start: {
            line: 80,
            column: 49
          },
          end: {
            line: 106,
            column: 1
          }
        },
        line: 80
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 81,
            column: 21
          },
          end: {
            line: 81,
            column: 22
          }
        },
        loc: {
          start: {
            line: 81,
            column: 35
          },
          end: {
            line: 105,
            column: 3
          }
        },
        line: 81
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 88,
            column: 7
          }
        },
        loc: {
          start: {
            line: 88,
            column: 18
          },
          end: {
            line: 102,
            column: 7
          }
        },
        line: 88
      },
      "19": {
        name: "(anonymous_19)",
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
            column: 15
          },
          end: {
            line: 103,
            column: 77
          }
        },
        line: 103
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 114,
            column: 38
          },
          end: {
            line: 114,
            column: 39
          }
        },
        loc: {
          start: {
            line: 114,
            column: 48
          },
          end: {
            line: 152,
            column: 1
          }
        },
        line: 114
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 119,
            column: 45
          },
          end: {
            line: 119,
            column: 46
          }
        },
        loc: {
          start: {
            line: 119,
            column: 57
          },
          end: {
            line: 134,
            column: 5
          }
        },
        line: 119
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 124,
            column: 32
          },
          end: {
            line: 124,
            column: 33
          }
        },
        loc: {
          start: {
            line: 124,
            column: 46
          },
          end: {
            line: 132,
            column: 9
          }
        },
        line: 124
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 143,
            column: 30
          },
          end: {
            line: 143,
            column: 31
          }
        },
        loc: {
          start: {
            line: 143,
            column: 44
          },
          end: {
            line: 146,
            column: 7
          }
        },
        line: 143
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 154,
            column: 38
          },
          end: {
            line: 154,
            column: 39
          }
        },
        loc: {
          start: {
            line: 160,
            column: 5
          },
          end: {
            line: 198,
            column: 1
          }
        },
        line: 160
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 172,
            column: 9
          },
          end: {
            line: 172,
            column: 10
          }
        },
        loc: {
          start: {
            line: 172,
            column: 18
          },
          end: {
            line: 172,
            column: 79
          }
        },
        line: 172
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        loc: {
          start: {
            line: 184,
            column: 16
          },
          end: {
            line: 190,
            column: 5
          }
        },
        line: 184
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 191,
            column: 5
          }
        },
        loc: {
          start: {
            line: 191,
            column: 13
          },
          end: {
            line: 196,
            column: 5
          }
        },
        line: 191
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 200,
            column: 41
          },
          end: {
            line: 200,
            column: 42
          }
        },
        loc: {
          start: {
            line: 205,
            column: 5
          },
          end: {
            line: 248,
            column: 1
          }
        },
        line: 205
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 217,
            column: 9
          },
          end: {
            line: 217,
            column: 10
          }
        },
        loc: {
          start: {
            line: 217,
            column: 18
          },
          end: {
            line: 217,
            column: 79
          }
        },
        line: 217
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 229,
            column: 5
          }
        },
        loc: {
          start: {
            line: 229,
            column: 16
          },
          end: {
            line: 237,
            column: 5
          }
        },
        line: 229
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 238,
            column: 5
          }
        },
        loc: {
          start: {
            line: 238,
            column: 13
          },
          end: {
            line: 246,
            column: 5
          }
        },
        line: 238
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 250,
            column: 44
          },
          end: {
            line: 250,
            column: 45
          }
        },
        loc: {
          start: {
            line: 250,
            column: 63
          },
          end: {
            line: 259,
            column: 3
          }
        },
        line: 250
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 250,
            column: 63
          },
          end: {
            line: 250,
            column: 64
          }
        },
        loc: {
          start: {
            line: 251,
            column: 2
          },
          end: {
            line: 259,
            column: 3
          }
        },
        line: 251
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 14,
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
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 25,
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
        line: 23
      },
      "2": {
        loc: {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 51,
            column: 63
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 51,
            column: 63
          }
        }, {
          start: {
            line: 51,
            column: 11
          },
          end: {
            line: 51,
            column: 63
          }
        }],
        line: 45
      },
      "3": {
        loc: {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 62,
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
        line: 60
      },
      "4": {
        loc: {
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 90,
            column: 38
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 90,
            column: 38
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
      "5": {
        loc: {
          start: {
            line: 92,
            column: 8
          },
          end: {
            line: 95,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 92,
            column: 8
          },
          end: {
            line: 95,
            column: 9
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
        line: 92
      },
      "6": {
        loc: {
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 100,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 100,
            column: 9
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
        line: 97
      },
      "7": {
        loc: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 135,
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
            line: 135,
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
      "8": {
        loc: {
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 133,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 133,
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
        line: 123
      },
      "9": {
        loc: {
          start: {
            line: 125,
            column: 10
          },
          end: {
            line: 125,
            column: 47
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 125,
            column: 10
          },
          end: {
            line: 125,
            column: 47
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
        line: 125
      },
      "10": {
        loc: {
          start: {
            line: 130,
            column: 24
          },
          end: {
            line: 130,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 130,
            column: 24
          },
          end: {
            line: 130,
            column: 33
          }
        }, {
          start: {
            line: 130,
            column: 37
          },
          end: {
            line: 130,
            column: 52
          }
        }],
        line: 130
      },
      "11": {
        loc: {
          start: {
            line: 131,
            column: 10
          },
          end: {
            line: 131,
            column: 71
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 131,
            column: 10
          },
          end: {
            line: 131,
            column: 71
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
        line: 131
      },
      "12": {
        loc: {
          start: {
            line: 140,
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
            line: 140,
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
        line: 140
      },
      "13": {
        loc: {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 147,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 147,
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
        line: 142
      },
      "14": {
        loc: {
          start: {
            line: 144,
            column: 8
          },
          end: {
            line: 144,
            column: 45
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 144,
            column: 8
          },
          end: {
            line: 144,
            column: 45
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
        line: 144
      },
      "15": {
        loc: {
          start: {
            line: 161,
            column: 2
          },
          end: {
            line: 169,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 161,
            column: 2
          },
          end: {
            line: 169,
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
        line: 161
      },
      "16": {
        loc: {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 166,
            column: 5
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 162,
            column: 21
          }
        }, {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 166,
            column: 5
          }
        }],
        line: 162
      },
      "17": {
        loc: {
          start: {
            line: 164,
            column: 6
          },
          end: {
            line: 165,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 164,
            column: 6
          },
          end: {
            line: 164,
            column: 52
          }
        }, {
          start: {
            line: 165,
            column: 6
          },
          end: {
            line: 165,
            column: 53
          }
        }],
        line: 164
      },
      "18": {
        loc: {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 189,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 189,
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
        line: 186
      },
      "19": {
        loc: {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 195,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 195,
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
        line: 193
      },
      "20": {
        loc: {
          start: {
            line: 206,
            column: 2
          },
          end: {
            line: 214,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 206,
            column: 2
          },
          end: {
            line: 214,
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
        line: 206
      },
      "21": {
        loc: {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 211,
            column: 5
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 24
          }
        }, {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 211,
            column: 5
          }
        }],
        line: 207
      },
      "22": {
        loc: {
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 210,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 209,
            column: 55
          }
        }, {
          start: {
            line: 210,
            column: 6
          },
          end: {
            line: 210,
            column: 56
          }
        }],
        line: 209
      },
      "23": {
        loc: {
          start: {
            line: 231,
            column: 6
          },
          end: {
            line: 236,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 231,
            column: 6
          },
          end: {
            line: 236,
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
        line: 231
      },
      "24": {
        loc: {
          start: {
            line: 240,
            column: 6
          },
          end: {
            line: 245,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 240,
            column: 6
          },
          end: {
            line: 245,
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
        line: 240
      },
      "25": {
        loc: {
          start: {
            line: 252,
            column: 29
          },
          end: {
            line: 252,
            column: 74
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 252,
            column: 59
          },
          end: {
            line: 252,
            column: 69
          }
        }, {
          start: {
            line: 252,
            column: 72
          },
          end: {
            line: 252,
            column: 74
          }
        }],
        line: 252
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
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0
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
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0
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
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "03188d96de9400cb04da4245c3a275bc8781feb0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25j2cazoje = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_25j2cazoje();

/* eslint-disable no-unused-vars */



cov_25j2cazoje().s[0]++;
const verifyGrafanaConnection = grafanaUrl => {
  cov_25j2cazoje().f[0]++;
  cov_25j2cazoje().s[1]++;
  return new Promise((res, rej) => {
    cov_25j2cazoje().f[1]++;
    cov_25j2cazoje().s[2]++;

    if (grafanaUrl) {
      cov_25j2cazoje().b[0][0]++;
      cov_25j2cazoje().s[3]++;
      pingGrafana(result => {
        cov_25j2cazoje().f[2]++;
        cov_25j2cazoje().s[4]++;
        return res('Grafana connected !');
      }, error => {
        cov_25j2cazoje().f[3]++;
        cov_25j2cazoje().s[5]++;
        return rej('Grafana not connected ! ' + error);
      });
      cov_25j2cazoje().s[6]++;
      return;
    } else {
      cov_25j2cazoje().b[0][1]++;
    }

    cov_25j2cazoje().s[7]++;
    rej('Grafana not connected! ' + 'Url not found');
  });
};
cov_25j2cazoje().s[8]++;
const pingGrafanaWithNotification = (notify, updateProgress) => {
  cov_25j2cazoje().f[4]++;
  cov_25j2cazoje().s[9]++;
  updateProgress({
    showProgress: true
  });
  cov_25j2cazoje().s[10]++;

  const successCb = result => {
    cov_25j2cazoje().f[5]++;
    cov_25j2cazoje().s[11]++;
    updateProgress({
      showProgress: false
    });
    cov_25j2cazoje().s[12]++;

    if (typeof result !== 'undefined') {
      cov_25j2cazoje().b[1][0]++;
      cov_25j2cazoje().s[13]++;
      notify({
        message: 'Grafana connected!',
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_1__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
      });
    } else {
      cov_25j2cazoje().b[1][1]++;
    }
  };

  cov_25j2cazoje().s[14]++;

  const errorCb = error => {
    cov_25j2cazoje().f[6]++;
    cov_25j2cazoje().s[15]++;
    updateProgress({
      showProgress: false
    });
    cov_25j2cazoje().s[16]++;
    notify({
      message: 'Grafana not connected! : ' + error,
      event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_1__/* .EVENT_TYPES.ERROR */ .E_.ERROR,
      details: error.toString()
    });
  };

  cov_25j2cazoje().s[17]++;
  pingGrafana(successCb, errorCb);
};
cov_25j2cazoje().s[18]++;
const pingGrafana = (successCb, errorCb) => {
  cov_25j2cazoje().f[7]++;
  cov_25j2cazoje().s[19]++;
  return (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('/api/telemetry/metrics/grafana/ping', {
    credentials: 'include'
  }, successCb, errorCb);
};
cov_25j2cazoje().s[20]++;
const verifyPrometheusConnection = prometheusUrl => {
  cov_25j2cazoje().f[8]++;
  cov_25j2cazoje().s[21]++;
  return new Promise((res, rej) => {
    cov_25j2cazoje().f[9]++;
    cov_25j2cazoje().s[22]++;

    if (prometheusUrl !== '') {
      cov_25j2cazoje().b[2][0]++;
      cov_25j2cazoje().s[23]++;
      pingPrometheus(result => {
        cov_25j2cazoje().f[10]++;
        cov_25j2cazoje().s[24]++;
        return res('Prometheus connected !');
      }, error => {
        cov_25j2cazoje().f[11]++;
        cov_25j2cazoje().s[25]++;
        return rej('Prometheus not connected ! ' + error);
      });
      cov_25j2cazoje().s[26]++;
      return;
    } else {
      cov_25j2cazoje().b[2][1]++;
      cov_25j2cazoje().s[27]++;
      rej('Prometheus not connected! ' + 'Url not found');
    }
  });
};
cov_25j2cazoje().s[28]++;
const pingPrometheusWithNotification = (notify, updateProgress) => {
  cov_25j2cazoje().f[12]++;
  cov_25j2cazoje().s[29]++;
  updateProgress({
    showProgress: true
  });
  cov_25j2cazoje().s[30]++;

  const successCb = result => {
    cov_25j2cazoje().f[13]++;
    cov_25j2cazoje().s[31]++;
    updateProgress({
      showProgress: false
    });
    cov_25j2cazoje().s[32]++;

    if (typeof result !== 'undefined') {
      cov_25j2cazoje().b[3][0]++;
      cov_25j2cazoje().s[33]++;
      notify({
        message: 'Prometheus connected!',
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_1__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
      });
    } else {
      cov_25j2cazoje().b[3][1]++;
    }
  };

  cov_25j2cazoje().s[34]++;

  const errorCb = error => {
    cov_25j2cazoje().f[14]++;
    cov_25j2cazoje().s[35]++;
    updateProgress({
      showProgress: false
    });
    cov_25j2cazoje().s[36]++;
    notify({
      message: 'Prometheus not connected! : ' + error,
      event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_1__/* .EVENT_TYPES.ERROR */ .E_.ERROR,
      details: error.toString()
    });
  };

  cov_25j2cazoje().s[37]++;
  pingPrometheus(successCb, errorCb);
};
cov_25j2cazoje().s[38]++;
const pingPrometheus = (successCb, errorCb) => {
  cov_25j2cazoje().f[15]++;
  cov_25j2cazoje().s[39]++;
  return (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('/api/telemetry/metrics/ping', {
    credentials: 'include'
  }, successCb, errorCb);
};
cov_25j2cazoje().s[40]++;
const fetchPromGrafanaScanData = ctx => {
  cov_25j2cazoje().f[16]++;
  cov_25j2cazoje().s[41]++;
  return new Promise((res, rej) => {
    cov_25j2cazoje().f[17]++;
    cov_25j2cazoje().s[42]++;
    (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_2__/* .ctxUrl */ .GT)('/api/system/meshsync/grafana', ctx), {
      method: 'GET',
      credentials: 'include'
    }, result => {
      cov_25j2cazoje().f[18]++;
      let metricsUrls = (cov_25j2cazoje().s[43]++, {
        grafana: [],
        prometheus: []
      });
      cov_25j2cazoje().s[44]++;

      if (!result) {
        cov_25j2cazoje().b[4][0]++;
        cov_25j2cazoje().s[45]++;
        res(metricsUrls);
      } else {
        cov_25j2cazoje().b[4][1]++;
      }

      cov_25j2cazoje().s[46]++;

      if (Array.isArray(result.prometheus)) {
        cov_25j2cazoje().b[5][0]++;
        const urls = (cov_25j2cazoje().s[47]++, extractURLFromScanData(result.prometheus));
        cov_25j2cazoje().s[48]++;
        metricsUrls.prometheus = urls;
      } else {
        cov_25j2cazoje().b[5][1]++;
      }

      cov_25j2cazoje().s[49]++;

      if (Array.isArray(result.grafana)) {
        cov_25j2cazoje().b[6][0]++;
        const urls = (cov_25j2cazoje().s[50]++, extractURLFromScanData(result.grafana));
        cov_25j2cazoje().s[51]++;
        metricsUrls.grafana = urls;
      } else {
        cov_25j2cazoje().b[6][1]++;
      }

      cov_25j2cazoje().s[52]++;
      res(metricsUrls);
    }, err => {
      cov_25j2cazoje().f[19]++;
      cov_25j2cazoje().s[53]++;
      return rej('Unable to fetch grafana and prometheus scan data:' + err);
    });
  });
};
/**
 * extractURLFromScanData scans the ingress urls from the
 * mesh scan data and returns an array of the response
 * @param {object[]} scannedData
 * @returns {string[]}
 */

cov_25j2cazoje().s[54]++;
const extractURLFromScanData = data => {
  cov_25j2cazoje().f[20]++;
  const result = (cov_25j2cazoje().s[55]++, []); // scannedData.forEach(data => {
  // Add loadbalancer based url

  cov_25j2cazoje().s[56]++;

  if (Array.isArray(data.status?.loadBalancer?.ingress)) {
    cov_25j2cazoje().b[7][0]++;
    cov_25j2cazoje().s[57]++;
    data.status.loadBalancer.ingress.forEach(lbdata => {
      cov_25j2cazoje().f[21]++;
      let protocol = (cov_25j2cazoje().s[58]++, 'http'); // Iterate over ports exposed by the service

      cov_25j2cazoje().s[59]++;

      if (Array.isArray(data.spec.ports)) {
        cov_25j2cazoje().b[8][0]++;
        cov_25j2cazoje().s[60]++;
        data.spec.ports.forEach(({
          port
        }) => {
          cov_25j2cazoje().f[22]++;
          cov_25j2cazoje().s[61]++;

          if (port === 443) {
            cov_25j2cazoje().b[9][0]++;
            cov_25j2cazoje().s[62]++;
            protocol = 'https';
          } else {
            cov_25j2cazoje().b[9][1]++;
          } // From kubernetes v1.19 docs
          // Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
          // IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)


          let address = (cov_25j2cazoje().s[63]++, (cov_25j2cazoje().b[10][0]++, lbdata.ip) || (cov_25j2cazoje().b[10][1]++, lbdata.hostname));
          cov_25j2cazoje().s[64]++;

          if (address) {
            cov_25j2cazoje().b[11][0]++;
            cov_25j2cazoje().s[65]++;
            result.push(`${protocol}://${address}:${port}`);
          } else {
            cov_25j2cazoje().b[11][1]++;
          }
        });
      } else {
        cov_25j2cazoje().b[8][1]++;
      }
    });
  } else {
    cov_25j2cazoje().b[7][1]++;
  } // Add clusterip based url
  // As per kubernetes v1.19 api, "None", "" as well as a valid ip is a valid clusterIP
  // Looking for valid ipv4 address


  cov_25j2cazoje().s[66]++;

  if (data.spec.clusterIP?.match(/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/g)?.[0]) {
    cov_25j2cazoje().b[12][0]++;
    let protocol = (cov_25j2cazoje().s[67]++, 'http');
    cov_25j2cazoje().s[68]++;

    if (Array.isArray(data.spec.ports)) {
      cov_25j2cazoje().b[13][0]++;
      cov_25j2cazoje().s[69]++;
      data.spec.ports.forEach(({
        port
      }) => {
        cov_25j2cazoje().f[23]++;
        cov_25j2cazoje().s[70]++;

        if (port === 443) {
          cov_25j2cazoje().b[14][0]++;
          cov_25j2cazoje().s[71]++;
          protocol = 'https';
        } else {
          cov_25j2cazoje().b[14][1]++;
        }

        cov_25j2cazoje().s[72]++;
        result.push(`${protocol}://${data.spec.clusterIP}:${port}`);
      });
    } else {
      cov_25j2cazoje().b[13][1]++;
    }
  } else {
    cov_25j2cazoje().b[12][1]++;
  } // })


  cov_25j2cazoje().s[73]++;
  return result;
};
cov_25j2cazoje().s[74]++;
const handleGrafanaConfigure = (notify, grafanaURL, grafanaAPIKey, updateProgress, updateGrafanaConfig) => {
  cov_25j2cazoje().f[24]++;
  cov_25j2cazoje().s[75]++;

  if ((cov_25j2cazoje().b[16][0]++, grafanaURL === '') || (cov_25j2cazoje().b[16][1]++, !((cov_25j2cazoje().b[17][0]++, grafanaURL.toLowerCase().startsWith('http://')) || (cov_25j2cazoje().b[17][1]++, grafanaURL.toLowerCase().startsWith('https://'))))) {
    cov_25j2cazoje().b[15][0]++;
    cov_25j2cazoje().s[76]++;
    return;
  } else {
    cov_25j2cazoje().b[15][1]++;
  }

  const data = (cov_25j2cazoje().s[77]++, {
    grafanaURL,
    grafanaAPIKey
  });
  const params = (cov_25j2cazoje().s[78]++, Object.keys(data).map(key => {
    cov_25j2cazoje().f[25]++;
    cov_25j2cazoje().s[79]++;
    return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
  }).join('&'));
  cov_25j2cazoje().s[80]++;
  updateProgress({
    showProgress: true
  });
  cov_25j2cazoje().s[81]++;
  (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('/api/telemetry/metrics/grafana/config', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: params
  }, result => {
    cov_25j2cazoje().f[26]++;
    cov_25j2cazoje().s[82]++;
    updateProgress({
      showProgress: false
    });
    cov_25j2cazoje().s[83]++;

    if (typeof result !== 'undefined') {
      cov_25j2cazoje().b[18][0]++;
      cov_25j2cazoje().s[84]++;
      notify({
        message: 'Grafana was configured!',
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_1__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
      });
      cov_25j2cazoje().s[85]++;
      updateGrafanaConfig({
        grafana: {
          grafanaURL,
          grafanaAPIKey
        }
      });
    } else {
      cov_25j2cazoje().b[18][1]++;
    }
  }, err => {
    cov_25j2cazoje().f[27]++;
    cov_25j2cazoje().s[86]++;
    updateProgress({
      showProgress: false
    });
    cov_25j2cazoje().s[87]++;

    if (typeof result !== 'undefined') {
      cov_25j2cazoje().b[19][0]++;
      cov_25j2cazoje().s[88]++;
      notify({
        message: 'Grafana was not configured! :' + err,
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_1__/* .EVENT_TYPES.ERROR */ .E_.ERROR
      });
    } else {
      cov_25j2cazoje().b[19][1]++;
    }
  });
};
cov_25j2cazoje().s[89]++;
const handlePrometheusConfigure = (notify, prometheusURL, updateProgress, updatePrometheusConfig) => {
  cov_25j2cazoje().f[28]++;
  cov_25j2cazoje().s[90]++;

  if ((cov_25j2cazoje().b[21][0]++, prometheusURL === '') || (cov_25j2cazoje().b[21][1]++, !((cov_25j2cazoje().b[22][0]++, prometheusURL.toLowerCase().startsWith('http://')) || (cov_25j2cazoje().b[22][1]++, prometheusURL.toLowerCase().startsWith('https://'))))) {
    cov_25j2cazoje().b[20][0]++;
    cov_25j2cazoje().s[91]++;
    return;
  } else {
    cov_25j2cazoje().b[20][1]++;
  }

  const data = (cov_25j2cazoje().s[92]++, {
    prometheusURL
  });
  const params = (cov_25j2cazoje().s[93]++, Object.keys(data).map(key => {
    cov_25j2cazoje().f[29]++;
    cov_25j2cazoje().s[94]++;
    return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
  }).join('&'));
  cov_25j2cazoje().s[95]++;
  updateProgress({
    showProgress: true
  });
  cov_25j2cazoje().s[96]++;
  (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('/api/telemetry/metrics/config', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: params
  }, result => {
    cov_25j2cazoje().f[30]++;
    cov_25j2cazoje().s[97]++;
    updateProgress({
      showProgress: false
    });
    cov_25j2cazoje().s[98]++;

    if (typeof result !== 'undefined') {
      cov_25j2cazoje().b[23][0]++;
      cov_25j2cazoje().s[99]++;
      notify({
        message: 'Prometheus was configured!',
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_1__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
      });
      cov_25j2cazoje().s[100]++;
      updatePrometheusConfig({
        prometheus: {
          prometheusURL,
          selectedPrometheusBoardsConfigs: []
        }
      });
    } else {
      cov_25j2cazoje().b[23][1]++;
    }
  }, err => {
    cov_25j2cazoje().f[31]++;
    cov_25j2cazoje().s[101]++;
    updateProgress({
      showProgress: false
    });
    cov_25j2cazoje().s[102]++;

    if (typeof result !== 'undefined') {
      cov_25j2cazoje().b[24][0]++;
      cov_25j2cazoje().s[103]++;
      notify({
        message: 'Prometheus was not configured! :' + err,
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_1__/* .EVENT_TYPES.ERROR */ .E_.ERROR
      });
    } else {
      cov_25j2cazoje().b[24][1]++;
    }
  });
};
cov_25j2cazoje().s[104]++;
const deleteMetricsComponentConfig = componentName => {
  cov_25j2cazoje().f[32]++;
  cov_25j2cazoje().s[105]++;
  return (successCb, errorCb) => {
    cov_25j2cazoje().f[33]++;
    cov_25j2cazoje().s[106]++;
    return (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(`/api/telemetry/metrics${componentName === 'Grafana' ? (cov_25j2cazoje().b[25][0]++, '/grafana') : (cov_25j2cazoje().b[25][1]++, '')}/config`, {
      method: 'DELETE',
      credentials: 'include'
    }, successCb, errorCb);
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;