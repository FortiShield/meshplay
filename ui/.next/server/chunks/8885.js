"use strict";
exports.id = 8885;
exports.ids = [8885];
exports.modules = {

/***/ 68885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AT": () => (/* binding */ setK8sContexts),
/* harmony export */   "Fb": () => (/* binding */ updatepagepath),
/* harmony export */   "Ff": () => (/* binding */ updateCapabilities),
/* harmony export */   "H_": () => (/* binding */ updateResultsSelection),
/* harmony export */   "Hp": () => (/* binding */ actionTypes),
/* harmony export */   "K": () => (/* binding */ updateLoadTestPref),
/* harmony export */   "KO": () => (/* binding */ setConnectionMetadata),
/* harmony export */   "Ms": () => (/* binding */ updatebetabadge),
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "Qv": () => (/* binding */ updateK8SConfig),
/* harmony export */   "RO": () => (/* binding */ updateProgress),
/* harmony export */   "Tz": () => (/* binding */ updatepagetitle),
/* harmony export */   "Uc": () => (/* binding */ useLegacySelector),
/* harmony export */   "W1": () => (/* binding */ updatePrometheusConfig),
/* harmony export */   "ZY": () => (/* binding */ updateLoadTestData),
/* harmony export */   "_H": () => (/* binding */ clearResultsSelection),
/* harmony export */   "bM": () => (/* binding */ setWorkspace),
/* harmony export */   "df": () => (/* binding */ updateExtensionType),
/* harmony export */   "eS": () => (/* binding */ updateStaticPrometheusBoardConfig),
/* harmony export */   "jz": () => (/* binding */ setAdapter),
/* harmony export */   "n": () => (/* binding */ makeStore),
/* harmony export */   "nD": () => (/* binding */ setOrganization),
/* harmony export */   "oR": () => (/* binding */ updateAdaptersInfo),
/* harmony export */   "ql": () => (/* binding */ updateTelemetryUrls),
/* harmony export */   "tC": () => (/* binding */ LegacyStoreContext),
/* harmony export */   "tz": () => (/* binding */ toggleCatalogContent),
/* harmony export */   "wb": () => (/* binding */ toggleDrawer),
/* harmony export */   "wo": () => (/* binding */ setKeys),
/* harmony export */   "yt": () => (/* binding */ updateGrafanaConfig)
/* harmony export */ });
/* unused harmony exports reducer, updateAnonymousUsageStats, updateAnonymousPerformanceResults, setOperatorSubscription, setMeshsyncSubscription, openEventInNotificationCenter, resultsMerge, selectSelectedK8sClusters, selectK8sContexts, useLegacyDispactch */
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56807);
/* harmony import */ var _redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8417);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45572);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
function cov_1yqtw4obra() {
  var path = "/workspace/meshplay/ui/lib/store.js";
  var hash = "8806a13f011e7bb8fe46b4d55c25eba7fb5b0926";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/lib/store.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 80,
          column: 2
        }
      },
      "1": {
        start: {
          line: 82,
          column: 27
        },
        end: {
          line: 114,
          column: 1
        }
      },
      "2": {
        start: {
          line: 117,
          column: 23
        },
        end: {
          line: 226,
          column: 1
        }
      },
      "3": {
        start: {
          line: 118,
          column: 2
        },
        end: {
          line: 225,
          column: 3
        }
      },
      "4": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 124,
          column: 9
        }
      },
      "5": {
        start: {
          line: 126,
          column: 6
        },
        end: {
          line: 130,
          column: 9
        }
      },
      "6": {
        start: {
          line: 132,
          column: 6
        },
        end: {
          line: 136,
          column: 9
        }
      },
      "7": {
        start: {
          line: 138,
          column: 6
        },
        end: {
          line: 138,
          column: 52
        }
      },
      "8": {
        start: {
          line: 140,
          column: 6
        },
        end: {
          line: 140,
          column: 58
        }
      },
      "9": {
        start: {
          line: 142,
          column: 6
        },
        end: {
          line: 142,
          column: 78
        }
      },
      "10": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 144,
          column: 76
        }
      },
      "11": {
        start: {
          line: 144,
          column: 51
        },
        end: {
          line: 144,
          column: 74
        }
      },
      "12": {
        start: {
          line: 146,
          column: 6
        },
        end: {
          line: 146,
          column: 68
        }
      },
      "13": {
        start: {
          line: 148,
          column: 6
        },
        end: {
          line: 148,
          column: 82
        }
      },
      "14": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 150,
          column: 84
        }
      },
      "15": {
        start: {
          line: 152,
          column: 6
        },
        end: {
          line: 152,
          column: 68
        }
      },
      "16": {
        start: {
          line: 152,
          column: 56
        },
        end: {
          line: 152,
          column: 66
        }
      },
      "17": {
        start: {
          line: 153,
          column: 6
        },
        end: {
          line: 153,
          column: 78
        }
      },
      "18": {
        start: {
          line: 153,
          column: 58
        },
        end: {
          line: 153,
          column: 76
        }
      },
      "19": {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 154,
          column: 68
        }
      },
      "20": {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 160,
          column: 7
        }
      },
      "21": {
        start: {
          line: 157,
          column: 8
        },
        end: {
          line: 157,
          column: 91
        }
      },
      "22": {
        start: {
          line: 157,
          column: 75
        },
        end: {
          line: 157,
          column: 89
        }
      },
      "23": {
        start: {
          line: 159,
          column: 8
        },
        end: {
          line: 159,
          column: 66
        }
      },
      "24": {
        start: {
          line: 162,
          column: 6
        },
        end: {
          line: 162,
          column: 37
        }
      },
      "25": {
        start: {
          line: 163,
          column: 6
        },
        end: {
          line: 163,
          column: 74
        }
      },
      "26": {
        start: {
          line: 163,
          column: 50
        },
        end: {
          line: 163,
          column: 72
        }
      },
      "27": {
        start: {
          line: 166,
          column: 6
        },
        end: {
          line: 166,
          column: 40
        }
      },
      "28": {
        start: {
          line: 167,
          column: 6
        },
        end: {
          line: 167,
          column: 80
        }
      },
      "29": {
        start: {
          line: 167,
          column: 53
        },
        end: {
          line: 167,
          column: 78
        }
      },
      "30": {
        start: {
          line: 170,
          column: 6
        },
        end: {
          line: 172,
          column: 8
        }
      },
      "31": {
        start: {
          line: 171,
          column: 8
        },
        end: {
          line: 171,
          column: 50
        }
      },
      "32": {
        start: {
          line: 174,
          column: 6
        },
        end: {
          line: 174,
          column: 52
        }
      },
      "33": {
        start: {
          line: 175,
          column: 6
        },
        end: {
          line: 175,
          column: 64
        }
      },
      "34": {
        start: {
          line: 178,
          column: 6
        },
        end: {
          line: 178,
          column: 68
        }
      },
      "35": {
        start: {
          line: 181,
          column: 6
        },
        end: {
          line: 181,
          column: 78
        }
      },
      "36": {
        start: {
          line: 184,
          column: 6
        },
        end: {
          line: 184,
          column: 74
        }
      },
      "37": {
        start: {
          line: 187,
          column: 6
        },
        end: {
          line: 187,
          column: 78
        }
      },
      "38": {
        start: {
          line: 190,
          column: 6
        },
        end: {
          line: 190,
          column: 66
        }
      },
      "39": {
        start: {
          line: 193,
          column: 6
        },
        end: {
          line: 193,
          column: 70
        }
      },
      "40": {
        start: {
          line: 196,
          column: 6
        },
        end: {
          line: 196,
          column: 66
        }
      },
      "41": {
        start: {
          line: 199,
          column: 6
        },
        end: {
          line: 199,
          column: 66
        }
      },
      "42": {
        start: {
          line: 202,
          column: 6
        },
        end: {
          line: 202,
          column: 80
        }
      },
      "43": {
        start: {
          line: 205,
          column: 6
        },
        end: {
          line: 205,
          column: 86
        }
      },
      "44": {
        start: {
          line: 205,
          column: 56
        },
        end: {
          line: 205,
          column: 84
        }
      },
      "45": {
        start: {
          line: 208,
          column: 6
        },
        end: {
          line: 208,
          column: 86
        }
      },
      "46": {
        start: {
          line: 211,
          column: 30
        },
        end: {
          line: 211,
          column: 68
        }
      },
      "47": {
        start: {
          line: 212,
          column: 6
        },
        end: {
          line: 212,
          column: 66
        }
      },
      "48": {
        start: {
          line: 213,
          column: 6
        },
        end: {
          line: 213,
          column: 29
        }
      },
      "49": {
        start: {
          line: 216,
          column: 30
        },
        end: {
          line: 216,
          column: 84
        }
      },
      "50": {
        start: {
          line: 217,
          column: 6
        },
        end: {
          line: 217,
          column: 80
        }
      },
      "51": {
        start: {
          line: 218,
          column: 6
        },
        end: {
          line: 218,
          column: 29
        }
      },
      "52": {
        start: {
          line: 220,
          column: 36
        },
        end: {
          line: 220,
          column: 84
        }
      },
      "53": {
        start: {
          line: 221,
          column: 6
        },
        end: {
          line: 221,
          column: 83
        }
      },
      "54": {
        start: {
          line: 222,
          column: 6
        },
        end: {
          line: 222,
          column: 35
        }
      },
      "55": {
        start: {
          line: 224,
          column: 6
        },
        end: {
          line: 224,
          column: 19
        }
      },
      "56": {
        start: {
          line: 230,
          column: 2
        },
        end: {
          line: 233,
          column: 3
        }
      },
      "57": {
        start: {
          line: 231,
          column: 2
        },
        end: {
          line: 233,
          column: 3
        }
      },
      "58": {
        start: {
          line: 232,
          column: 4
        },
        end: {
          line: 232,
          column: 61
        }
      },
      "59": {
        start: {
          line: 236,
          column: 2
        },
        end: {
          line: 239,
          column: 3
        }
      },
      "60": {
        start: {
          line: 237,
          column: 2
        },
        end: {
          line: 239,
          column: 3
        }
      },
      "61": {
        start: {
          line: 238,
          column: 4
        },
        end: {
          line: 238,
          column: 63
        }
      },
      "62": {
        start: {
          line: 242,
          column: 2
        },
        end: {
          line: 245,
          column: 3
        }
      },
      "63": {
        start: {
          line: 243,
          column: 2
        },
        end: {
          line: 245,
          column: 3
        }
      },
      "64": {
        start: {
          line: 244,
          column: 4
        },
        end: {
          line: 244,
          column: 73
        }
      },
      "65": {
        start: {
          line: 248,
          column: 2
        },
        end: {
          line: 251,
          column: 3
        }
      },
      "66": {
        start: {
          line: 249,
          column: 2
        },
        end: {
          line: 251,
          column: 3
        }
      },
      "67": {
        start: {
          line: 250,
          column: 4
        },
        end: {
          line: 250,
          column: 69
        }
      },
      "68": {
        start: {
          line: 254,
          column: 2
        },
        end: {
          line: 257,
          column: 3
        }
      },
      "69": {
        start: {
          line: 255,
          column: 2
        },
        end: {
          line: 257,
          column: 3
        }
      },
      "70": {
        start: {
          line: 256,
          column: 4
        },
        end: {
          line: 256,
          column: 61
        }
      },
      "71": {
        start: {
          line: 260,
          column: 2
        },
        end: {
          line: 263,
          column: 3
        }
      },
      "72": {
        start: {
          line: 261,
          column: 2
        },
        end: {
          line: 263,
          column: 3
        }
      },
      "73": {
        start: {
          line: 262,
          column: 4
        },
        end: {
          line: 262,
          column: 76
        }
      },
      "74": {
        start: {
          line: 266,
          column: 2
        },
        end: {
          line: 269,
          column: 3
        }
      },
      "75": {
        start: {
          line: 267,
          column: 2
        },
        end: {
          line: 269,
          column: 3
        }
      },
      "76": {
        start: {
          line: 268,
          column: 4
        },
        end: {
          line: 268,
          column: 80
        }
      },
      "77": {
        start: {
          line: 272,
          column: 2
        },
        end: {
          line: 275,
          column: 3
        }
      },
      "78": {
        start: {
          line: 273,
          column: 2
        },
        end: {
          line: 275,
          column: 3
        }
      },
      "79": {
        start: {
          line: 274,
          column: 4
        },
        end: {
          line: 274,
          column: 75
        }
      },
      "80": {
        start: {
          line: 278,
          column: 2
        },
        end: {
          line: 281,
          column: 3
        }
      },
      "81": {
        start: {
          line: 279,
          column: 2
        },
        end: {
          line: 281,
          column: 3
        }
      },
      "82": {
        start: {
          line: 280,
          column: 4
        },
        end: {
          line: 280,
          column: 80
        }
      },
      "83": {
        start: {
          line: 283,
          column: 2
        },
        end: {
          line: 286,
          column: 3
        }
      },
      "84": {
        start: {
          line: 284,
          column: 2
        },
        end: {
          line: 286,
          column: 3
        }
      },
      "85": {
        start: {
          line: 285,
          column: 4
        },
        end: {
          line: 285,
          column: 93
        }
      },
      "86": {
        start: {
          line: 288,
          column: 2
        },
        end: {
          line: 294,
          column: 3
        }
      },
      "87": {
        start: {
          line: 289,
          column: 2
        },
        end: {
          line: 294,
          column: 3
        }
      },
      "88": {
        start: {
          line: 290,
          column: 4
        },
        end: {
          line: 293,
          column: 7
        }
      },
      "89": {
        start: {
          line: 297,
          column: 2
        },
        end: {
          line: 300,
          column: 3
        }
      },
      "90": {
        start: {
          line: 298,
          column: 2
        },
        end: {
          line: 300,
          column: 3
        }
      },
      "91": {
        start: {
          line: 299,
          column: 4
        },
        end: {
          line: 299,
          column: 78
        }
      },
      "92": {
        start: {
          line: 303,
          column: 2
        },
        end: {
          line: 306,
          column: 3
        }
      },
      "93": {
        start: {
          line: 304,
          column: 2
        },
        end: {
          line: 306,
          column: 3
        }
      },
      "94": {
        start: {
          line: 305,
          column: 4
        },
        end: {
          line: 305,
          column: 83
        }
      },
      "95": {
        start: {
          line: 308,
          column: 37
        },
        end: {
          line: 310,
          column: 1
        }
      },
      "96": {
        start: {
          line: 308,
          column: 43
        },
        end: {
          line: 310,
          column: 1
        }
      },
      "97": {
        start: {
          line: 309,
          column: 2
        },
        end: {
          line: 309,
          column: 65
        }
      },
      "98": {
        start: {
          line: 312,
          column: 2
        },
        end: {
          line: 315,
          column: 3
        }
      },
      "99": {
        start: {
          line: 313,
          column: 2
        },
        end: {
          line: 315,
          column: 3
        }
      },
      "100": {
        start: {
          line: 314,
          column: 4
        },
        end: {
          line: 314,
          column: 74
        }
      },
      "101": {
        start: {
          line: 318,
          column: 2
        },
        end: {
          line: 321,
          column: 3
        }
      },
      "102": {
        start: {
          line: 319,
          column: 2
        },
        end: {
          line: 321,
          column: 3
        }
      },
      "103": {
        start: {
          line: 320,
          column: 4
        },
        end: {
          line: 320,
          column: 80
        }
      },
      "104": {
        start: {
          line: 324,
          column: 2
        },
        end: {
          line: 327,
          column: 3
        }
      },
      "105": {
        start: {
          line: 325,
          column: 2
        },
        end: {
          line: 327,
          column: 3
        }
      },
      "106": {
        start: {
          line: 326,
          column: 4
        },
        end: {
          line: 326,
          column: 99
        }
      },
      "107": {
        start: {
          line: 330,
          column: 2
        },
        end: {
          line: 333,
          column: 3
        }
      },
      "108": {
        start: {
          line: 331,
          column: 2
        },
        end: {
          line: 333,
          column: 3
        }
      },
      "109": {
        start: {
          line: 332,
          column: 4
        },
        end: {
          line: 332,
          column: 76
        }
      },
      "110": {
        start: {
          line: 336,
          column: 2
        },
        end: {
          line: 339,
          column: 3
        }
      },
      "111": {
        start: {
          line: 337,
          column: 2
        },
        end: {
          line: 339,
          column: 3
        }
      },
      "112": {
        start: {
          line: 338,
          column: 4
        },
        end: {
          line: 338,
          column: 72
        }
      },
      "113": {
        start: {
          line: 342,
          column: 2
        },
        end: {
          line: 345,
          column: 3
        }
      },
      "114": {
        start: {
          line: 343,
          column: 2
        },
        end: {
          line: 345,
          column: 3
        }
      },
      "115": {
        start: {
          line: 344,
          column: 4
        },
        end: {
          line: 344,
          column: 82
        }
      },
      "116": {
        start: {
          line: 348,
          column: 2
        },
        end: {
          line: 351,
          column: 3
        }
      },
      "117": {
        start: {
          line: 349,
          column: 2
        },
        end: {
          line: 351,
          column: 3
        }
      },
      "118": {
        start: {
          line: 350,
          column: 4
        },
        end: {
          line: 350,
          column: 84
        }
      },
      "119": {
        start: {
          line: 354,
          column: 2
        },
        end: {
          line: 357,
          column: 3
        }
      },
      "120": {
        start: {
          line: 355,
          column: 2
        },
        end: {
          line: 357,
          column: 3
        }
      },
      "121": {
        start: {
          line: 356,
          column: 4
        },
        end: {
          line: 356,
          column: 84
        }
      },
      "122": {
        start: {
          line: 360,
          column: 2
        },
        end: {
          line: 363,
          column: 3
        }
      },
      "123": {
        start: {
          line: 361,
          column: 2
        },
        end: {
          line: 363,
          column: 3
        }
      },
      "124": {
        start: {
          line: 362,
          column: 4
        },
        end: {
          line: 362,
          column: 80
        }
      },
      "125": {
        start: {
          line: 366,
          column: 2
        },
        end: {
          line: 369,
          column: 3
        }
      },
      "126": {
        start: {
          line: 367,
          column: 2
        },
        end: {
          line: 369,
          column: 3
        }
      },
      "127": {
        start: {
          line: 368,
          column: 4
        },
        end: {
          line: 368,
          column: 92
        }
      },
      "128": {
        start: {
          line: 372,
          column: 2
        },
        end: {
          line: 375,
          column: 3
        }
      },
      "129": {
        start: {
          line: 373,
          column: 2
        },
        end: {
          line: 375,
          column: 3
        }
      },
      "130": {
        start: {
          line: 374,
          column: 4
        },
        end: {
          line: 374,
          column: 80
        }
      },
      "131": {
        start: {
          line: 378,
          column: 2
        },
        end: {
          line: 384,
          column: 3
        }
      },
      "132": {
        start: {
          line: 379,
          column: 2
        },
        end: {
          line: 384,
          column: 3
        }
      },
      "133": {
        start: {
          line: 380,
          column: 4
        },
        end: {
          line: 383,
          column: 7
        }
      },
      "134": {
        start: {
          line: 387,
          column: 2
        },
        end: {
          line: 390,
          column: 3
        }
      },
      "135": {
        start: {
          line: 388,
          column: 2
        },
        end: {
          line: 390,
          column: 3
        }
      },
      "136": {
        start: {
          line: 389,
          column: 4
        },
        end: {
          line: 389,
          column: 92
        }
      },
      "137": {
        start: {
          line: 393,
          column: 2
        },
        end: {
          line: 396,
          column: 3
        }
      },
      "138": {
        start: {
          line: 394,
          column: 2
        },
        end: {
          line: 396,
          column: 3
        }
      },
      "139": {
        start: {
          line: 395,
          column: 4
        },
        end: {
          line: 395,
          column: 74
        }
      },
      "140": {
        start: {
          line: 398,
          column: 2
        },
        end: {
          line: 401,
          column: 3
        }
      },
      "141": {
        start: {
          line: 399,
          column: 2
        },
        end: {
          line: 401,
          column: 3
        }
      },
      "142": {
        start: {
          line: 400,
          column: 4
        },
        end: {
          line: 400,
          column: 68
        }
      },
      "143": {
        start: {
          line: 403,
          column: 2
        },
        end: {
          line: 406,
          column: 3
        }
      },
      "144": {
        start: {
          line: 404,
          column: 2
        },
        end: {
          line: 406,
          column: 3
        }
      },
      "145": {
        start: {
          line: 405,
          column: 4
        },
        end: {
          line: 405,
          column: 58
        }
      },
      "146": {
        start: {
          line: 408,
          column: 25
        },
        end: {
          line: 410,
          column: 1
        }
      },
      "147": {
        start: {
          line: 409,
          column: 2
        },
        end: {
          line: 409,
          column: 99
        }
      },
      "148": {
        start: {
          line: 412,
          column: 28
        },
        end: {
          line: 424,
          column: 1
        }
      },
      "149": {
        start: {
          line: 413,
          column: 15
        },
        end: {
          line: 413,
          column: 17
        }
      },
      "150": {
        start: {
          line: 414,
          column: 12
        },
        end: {
          line: 414,
          column: 14
        }
      },
      "151": {
        start: {
          line: 415,
          column: 24
        },
        end: {
          line: 420,
          column: 3
        }
      },
      "152": {
        start: {
          line: 416,
          column: 4
        },
        end: {
          line: 419,
          column: 5
        }
      },
      "153": {
        start: {
          line: 417,
          column: 6
        },
        end: {
          line: 417,
          column: 33
        }
      },
      "154": {
        start: {
          line: 418,
          column: 6
        },
        end: {
          line: 418,
          column: 24
        }
      },
      "155": {
        start: {
          line: 421,
          column: 2
        },
        end: {
          line: 421,
          column: 26
        }
      },
      "156": {
        start: {
          line: 422,
          column: 2
        },
        end: {
          line: 422,
          column: 26
        }
      },
      "157": {
        start: {
          line: 423,
          column: 2
        },
        end: {
          line: 423,
          column: 13
        }
      },
      "158": {
        start: {
          line: 426,
          column: 41
        },
        end: {
          line: 429,
          column: 1
        }
      },
      "159": {
        start: {
          line: 427,
          column: 30
        },
        end: {
          line: 427,
          column: 62
        }
      },
      "160": {
        start: {
          line: 428,
          column: 2
        },
        end: {
          line: 428,
          column: 62
        }
      },
      "161": {
        start: {
          line: 431,
          column: 33
        },
        end: {
          line: 434,
          column: 1
        }
      },
      "162": {
        start: {
          line: 432,
          column: 21
        },
        end: {
          line: 432,
          column: 43
        }
      },
      "163": {
        start: {
          line: 433,
          column: 2
        },
        end: {
          line: 433,
          column: 44
        }
      },
      "164": {
        start: {
          line: 436,
          column: 34
        },
        end: {
          line: 436,
          column: 53
        }
      },
      "165": {
        start: {
          line: 438,
          column: 33
        },
        end: {
          line: 438,
          column: 71
        }
      },
      "166": {
        start: {
          line: 439,
          column: 34
        },
        end: {
          line: 439,
          column: 72
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 117,
            column: 23
          },
          end: {
            line: 117,
            column: 24
          }
        },
        loc: {
          start: {
            line: 117,
            column: 57
          },
          end: {
            line: 226,
            column: 1
          }
        },
        line: 117
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 144,
            column: 42
          },
          end: {
            line: 144,
            column: 43
          }
        },
        loc: {
          start: {
            line: 144,
            column: 51
          },
          end: {
            line: 144,
            column: 74
          }
        },
        line: 144
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 152,
            column: 47
          },
          end: {
            line: 152,
            column: 48
          }
        },
        loc: {
          start: {
            line: 152,
            column: 56
          },
          end: {
            line: 152,
            column: 66
          }
        },
        line: 152
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 153,
            column: 49
          },
          end: {
            line: 153,
            column: 50
          }
        },
        loc: {
          start: {
            line: 153,
            column: 58
          },
          end: {
            line: 153,
            column: 76
          }
        },
        line: 153
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 157,
            column: 66
          },
          end: {
            line: 157,
            column: 67
          }
        },
        loc: {
          start: {
            line: 157,
            column: 75
          },
          end: {
            line: 157,
            column: 89
          }
        },
        line: 157
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 163,
            column: 41
          },
          end: {
            line: 163,
            column: 42
          }
        },
        loc: {
          start: {
            line: 163,
            column: 50
          },
          end: {
            line: 163,
            column: 72
          }
        },
        line: 163
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 167,
            column: 44
          },
          end: {
            line: 167,
            column: 45
          }
        },
        loc: {
          start: {
            line: 167,
            column: 53
          },
          end: {
            line: 167,
            column: 78
          }
        },
        line: 167
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 170,
            column: 61
          },
          end: {
            line: 170,
            column: 62
          }
        },
        loc: {
          start: {
            line: 171,
            column: 8
          },
          end: {
            line: 171,
            column: 50
          }
        },
        line: 171
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 205,
            column: 47
          },
          end: {
            line: 205,
            column: 48
          }
        },
        loc: {
          start: {
            line: 205,
            column: 56
          },
          end: {
            line: 205,
            column: 84
          }
        },
        line: 205
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 230,
            column: 2
          },
          end: {
            line: 230,
            column: 3
          }
        },
        loc: {
          start: {
            line: 231,
            column: 2
          },
          end: {
            line: 233,
            column: 3
          }
        },
        line: 231
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 231,
            column: 2
          },
          end: {
            line: 231,
            column: 3
          }
        },
        loc: {
          start: {
            line: 231,
            column: 16
          },
          end: {
            line: 233,
            column: 3
          }
        },
        line: 231
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 236,
            column: 2
          },
          end: {
            line: 236,
            column: 3
          }
        },
        loc: {
          start: {
            line: 237,
            column: 2
          },
          end: {
            line: 239,
            column: 3
          }
        },
        line: 237
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 237,
            column: 2
          },
          end: {
            line: 237,
            column: 3
          }
        },
        loc: {
          start: {
            line: 237,
            column: 16
          },
          end: {
            line: 239,
            column: 3
          }
        },
        line: 237
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 242,
            column: 2
          },
          end: {
            line: 242,
            column: 3
          }
        },
        loc: {
          start: {
            line: 243,
            column: 2
          },
          end: {
            line: 245,
            column: 3
          }
        },
        line: 243
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 243,
            column: 2
          },
          end: {
            line: 243,
            column: 3
          }
        },
        loc: {
          start: {
            line: 243,
            column: 16
          },
          end: {
            line: 245,
            column: 3
          }
        },
        line: 243
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 248,
            column: 2
          },
          end: {
            line: 248,
            column: 3
          }
        },
        loc: {
          start: {
            line: 249,
            column: 2
          },
          end: {
            line: 251,
            column: 3
          }
        },
        line: 249
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 249,
            column: 2
          },
          end: {
            line: 249,
            column: 3
          }
        },
        loc: {
          start: {
            line: 249,
            column: 16
          },
          end: {
            line: 251,
            column: 3
          }
        },
        line: 249
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 254,
            column: 2
          },
          end: {
            line: 254,
            column: 3
          }
        },
        loc: {
          start: {
            line: 255,
            column: 2
          },
          end: {
            line: 257,
            column: 3
          }
        },
        line: 255
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 255,
            column: 2
          },
          end: {
            line: 255,
            column: 3
          }
        },
        loc: {
          start: {
            line: 255,
            column: 16
          },
          end: {
            line: 257,
            column: 3
          }
        },
        line: 255
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 260,
            column: 2
          },
          end: {
            line: 260,
            column: 3
          }
        },
        loc: {
          start: {
            line: 261,
            column: 2
          },
          end: {
            line: 263,
            column: 3
          }
        },
        line: 261
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 261,
            column: 2
          },
          end: {
            line: 261,
            column: 3
          }
        },
        loc: {
          start: {
            line: 261,
            column: 16
          },
          end: {
            line: 263,
            column: 3
          }
        },
        line: 261
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 266,
            column: 2
          },
          end: {
            line: 266,
            column: 3
          }
        },
        loc: {
          start: {
            line: 267,
            column: 2
          },
          end: {
            line: 269,
            column: 3
          }
        },
        line: 267
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 267,
            column: 2
          },
          end: {
            line: 267,
            column: 3
          }
        },
        loc: {
          start: {
            line: 267,
            column: 16
          },
          end: {
            line: 269,
            column: 3
          }
        },
        line: 267
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 272,
            column: 2
          },
          end: {
            line: 272,
            column: 3
          }
        },
        loc: {
          start: {
            line: 273,
            column: 2
          },
          end: {
            line: 275,
            column: 3
          }
        },
        line: 273
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 273,
            column: 2
          },
          end: {
            line: 273,
            column: 3
          }
        },
        loc: {
          start: {
            line: 273,
            column: 16
          },
          end: {
            line: 275,
            column: 3
          }
        },
        line: 273
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 278,
            column: 2
          },
          end: {
            line: 278,
            column: 3
          }
        },
        loc: {
          start: {
            line: 279,
            column: 2
          },
          end: {
            line: 281,
            column: 3
          }
        },
        line: 279
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 279,
            column: 2
          },
          end: {
            line: 279,
            column: 3
          }
        },
        loc: {
          start: {
            line: 279,
            column: 16
          },
          end: {
            line: 281,
            column: 3
          }
        },
        line: 279
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 283,
            column: 2
          },
          end: {
            line: 283,
            column: 3
          }
        },
        loc: {
          start: {
            line: 284,
            column: 2
          },
          end: {
            line: 286,
            column: 3
          }
        },
        line: 284
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 284,
            column: 2
          },
          end: {
            line: 284,
            column: 3
          }
        },
        loc: {
          start: {
            line: 284,
            column: 16
          },
          end: {
            line: 286,
            column: 3
          }
        },
        line: 284
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 288,
            column: 2
          },
          end: {
            line: 288,
            column: 3
          }
        },
        loc: {
          start: {
            line: 289,
            column: 2
          },
          end: {
            line: 294,
            column: 3
          }
        },
        line: 289
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 289,
            column: 2
          },
          end: {
            line: 289,
            column: 3
          }
        },
        loc: {
          start: {
            line: 289,
            column: 16
          },
          end: {
            line: 294,
            column: 3
          }
        },
        line: 289
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 297,
            column: 2
          },
          end: {
            line: 297,
            column: 3
          }
        },
        loc: {
          start: {
            line: 298,
            column: 2
          },
          end: {
            line: 300,
            column: 3
          }
        },
        line: 298
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 298,
            column: 2
          },
          end: {
            line: 298,
            column: 3
          }
        },
        loc: {
          start: {
            line: 298,
            column: 16
          },
          end: {
            line: 300,
            column: 3
          }
        },
        line: 298
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 303,
            column: 2
          },
          end: {
            line: 303,
            column: 3
          }
        },
        loc: {
          start: {
            line: 304,
            column: 2
          },
          end: {
            line: 306,
            column: 3
          }
        },
        line: 304
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 304,
            column: 2
          },
          end: {
            line: 304,
            column: 3
          }
        },
        loc: {
          start: {
            line: 304,
            column: 16
          },
          end: {
            line: 306,
            column: 3
          }
        },
        line: 304
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 308,
            column: 37
          },
          end: {
            line: 308,
            column: 38
          }
        },
        loc: {
          start: {
            line: 308,
            column: 43
          },
          end: {
            line: 310,
            column: 1
          }
        },
        line: 308
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 308,
            column: 43
          },
          end: {
            line: 308,
            column: 44
          }
        },
        loc: {
          start: {
            line: 308,
            column: 57
          },
          end: {
            line: 310,
            column: 1
          }
        },
        line: 308
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 312,
            column: 2
          },
          end: {
            line: 312,
            column: 3
          }
        },
        loc: {
          start: {
            line: 313,
            column: 2
          },
          end: {
            line: 315,
            column: 3
          }
        },
        line: 313
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 313,
            column: 2
          },
          end: {
            line: 313,
            column: 3
          }
        },
        loc: {
          start: {
            line: 313,
            column: 16
          },
          end: {
            line: 315,
            column: 3
          }
        },
        line: 313
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 318,
            column: 2
          },
          end: {
            line: 318,
            column: 3
          }
        },
        loc: {
          start: {
            line: 319,
            column: 2
          },
          end: {
            line: 321,
            column: 3
          }
        },
        line: 319
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 319,
            column: 2
          },
          end: {
            line: 319,
            column: 3
          }
        },
        loc: {
          start: {
            line: 319,
            column: 16
          },
          end: {
            line: 321,
            column: 3
          }
        },
        line: 319
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 324,
            column: 2
          },
          end: {
            line: 324,
            column: 3
          }
        },
        loc: {
          start: {
            line: 325,
            column: 2
          },
          end: {
            line: 327,
            column: 3
          }
        },
        line: 325
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 325,
            column: 2
          },
          end: {
            line: 325,
            column: 3
          }
        },
        loc: {
          start: {
            line: 325,
            column: 16
          },
          end: {
            line: 327,
            column: 3
          }
        },
        line: 325
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 330,
            column: 2
          },
          end: {
            line: 330,
            column: 3
          }
        },
        loc: {
          start: {
            line: 331,
            column: 2
          },
          end: {
            line: 333,
            column: 3
          }
        },
        line: 331
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 331,
            column: 2
          },
          end: {
            line: 331,
            column: 3
          }
        },
        loc: {
          start: {
            line: 331,
            column: 16
          },
          end: {
            line: 333,
            column: 3
          }
        },
        line: 331
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 336,
            column: 2
          },
          end: {
            line: 336,
            column: 3
          }
        },
        loc: {
          start: {
            line: 337,
            column: 2
          },
          end: {
            line: 339,
            column: 3
          }
        },
        line: 337
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 337,
            column: 2
          },
          end: {
            line: 337,
            column: 3
          }
        },
        loc: {
          start: {
            line: 337,
            column: 16
          },
          end: {
            line: 339,
            column: 3
          }
        },
        line: 337
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 342,
            column: 2
          },
          end: {
            line: 342,
            column: 3
          }
        },
        loc: {
          start: {
            line: 343,
            column: 2
          },
          end: {
            line: 345,
            column: 3
          }
        },
        line: 343
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 343,
            column: 2
          },
          end: {
            line: 343,
            column: 3
          }
        },
        loc: {
          start: {
            line: 343,
            column: 16
          },
          end: {
            line: 345,
            column: 3
          }
        },
        line: 343
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 348,
            column: 2
          },
          end: {
            line: 348,
            column: 3
          }
        },
        loc: {
          start: {
            line: 349,
            column: 2
          },
          end: {
            line: 351,
            column: 3
          }
        },
        line: 349
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 349,
            column: 2
          },
          end: {
            line: 349,
            column: 3
          }
        },
        loc: {
          start: {
            line: 349,
            column: 16
          },
          end: {
            line: 351,
            column: 3
          }
        },
        line: 349
      },
      "51": {
        name: "(anonymous_51)",
        decl: {
          start: {
            line: 354,
            column: 2
          },
          end: {
            line: 354,
            column: 3
          }
        },
        loc: {
          start: {
            line: 355,
            column: 2
          },
          end: {
            line: 357,
            column: 3
          }
        },
        line: 355
      },
      "52": {
        name: "(anonymous_52)",
        decl: {
          start: {
            line: 355,
            column: 2
          },
          end: {
            line: 355,
            column: 3
          }
        },
        loc: {
          start: {
            line: 355,
            column: 16
          },
          end: {
            line: 357,
            column: 3
          }
        },
        line: 355
      },
      "53": {
        name: "(anonymous_53)",
        decl: {
          start: {
            line: 360,
            column: 2
          },
          end: {
            line: 360,
            column: 3
          }
        },
        loc: {
          start: {
            line: 361,
            column: 2
          },
          end: {
            line: 363,
            column: 3
          }
        },
        line: 361
      },
      "54": {
        name: "(anonymous_54)",
        decl: {
          start: {
            line: 361,
            column: 2
          },
          end: {
            line: 361,
            column: 3
          }
        },
        loc: {
          start: {
            line: 361,
            column: 16
          },
          end: {
            line: 363,
            column: 3
          }
        },
        line: 361
      },
      "55": {
        name: "(anonymous_55)",
        decl: {
          start: {
            line: 366,
            column: 2
          },
          end: {
            line: 366,
            column: 3
          }
        },
        loc: {
          start: {
            line: 367,
            column: 2
          },
          end: {
            line: 369,
            column: 3
          }
        },
        line: 367
      },
      "56": {
        name: "(anonymous_56)",
        decl: {
          start: {
            line: 367,
            column: 2
          },
          end: {
            line: 367,
            column: 3
          }
        },
        loc: {
          start: {
            line: 367,
            column: 16
          },
          end: {
            line: 369,
            column: 3
          }
        },
        line: 367
      },
      "57": {
        name: "(anonymous_57)",
        decl: {
          start: {
            line: 372,
            column: 2
          },
          end: {
            line: 372,
            column: 3
          }
        },
        loc: {
          start: {
            line: 373,
            column: 2
          },
          end: {
            line: 375,
            column: 3
          }
        },
        line: 373
      },
      "58": {
        name: "(anonymous_58)",
        decl: {
          start: {
            line: 373,
            column: 2
          },
          end: {
            line: 373,
            column: 3
          }
        },
        loc: {
          start: {
            line: 373,
            column: 16
          },
          end: {
            line: 375,
            column: 3
          }
        },
        line: 373
      },
      "59": {
        name: "(anonymous_59)",
        decl: {
          start: {
            line: 378,
            column: 2
          },
          end: {
            line: 378,
            column: 3
          }
        },
        loc: {
          start: {
            line: 379,
            column: 2
          },
          end: {
            line: 384,
            column: 3
          }
        },
        line: 379
      },
      "60": {
        name: "(anonymous_60)",
        decl: {
          start: {
            line: 379,
            column: 2
          },
          end: {
            line: 379,
            column: 3
          }
        },
        loc: {
          start: {
            line: 379,
            column: 16
          },
          end: {
            line: 384,
            column: 3
          }
        },
        line: 379
      },
      "61": {
        name: "(anonymous_61)",
        decl: {
          start: {
            line: 387,
            column: 2
          },
          end: {
            line: 387,
            column: 3
          }
        },
        loc: {
          start: {
            line: 388,
            column: 2
          },
          end: {
            line: 390,
            column: 3
          }
        },
        line: 388
      },
      "62": {
        name: "(anonymous_62)",
        decl: {
          start: {
            line: 388,
            column: 2
          },
          end: {
            line: 388,
            column: 3
          }
        },
        loc: {
          start: {
            line: 388,
            column: 16
          },
          end: {
            line: 390,
            column: 3
          }
        },
        line: 388
      },
      "63": {
        name: "(anonymous_63)",
        decl: {
          start: {
            line: 393,
            column: 2
          },
          end: {
            line: 393,
            column: 3
          }
        },
        loc: {
          start: {
            line: 394,
            column: 2
          },
          end: {
            line: 396,
            column: 3
          }
        },
        line: 394
      },
      "64": {
        name: "(anonymous_64)",
        decl: {
          start: {
            line: 394,
            column: 2
          },
          end: {
            line: 394,
            column: 3
          }
        },
        loc: {
          start: {
            line: 394,
            column: 16
          },
          end: {
            line: 396,
            column: 3
          }
        },
        line: 394
      },
      "65": {
        name: "(anonymous_65)",
        decl: {
          start: {
            line: 398,
            column: 2
          },
          end: {
            line: 398,
            column: 3
          }
        },
        loc: {
          start: {
            line: 399,
            column: 2
          },
          end: {
            line: 401,
            column: 3
          }
        },
        line: 399
      },
      "66": {
        name: "(anonymous_66)",
        decl: {
          start: {
            line: 399,
            column: 2
          },
          end: {
            line: 399,
            column: 3
          }
        },
        loc: {
          start: {
            line: 399,
            column: 16
          },
          end: {
            line: 401,
            column: 3
          }
        },
        line: 399
      },
      "67": {
        name: "(anonymous_67)",
        decl: {
          start: {
            line: 403,
            column: 2
          },
          end: {
            line: 403,
            column: 3
          }
        },
        loc: {
          start: {
            line: 404,
            column: 2
          },
          end: {
            line: 406,
            column: 3
          }
        },
        line: 404
      },
      "68": {
        name: "(anonymous_68)",
        decl: {
          start: {
            line: 404,
            column: 2
          },
          end: {
            line: 404,
            column: 3
          }
        },
        loc: {
          start: {
            line: 404,
            column: 16
          },
          end: {
            line: 406,
            column: 3
          }
        },
        line: 404
      },
      "69": {
        name: "(anonymous_69)",
        decl: {
          start: {
            line: 408,
            column: 25
          },
          end: {
            line: 408,
            column: 26
          }
        },
        loc: {
          start: {
            line: 408,
            column: 52
          },
          end: {
            line: 410,
            column: 1
          }
        },
        line: 408
      },
      "70": {
        name: "(anonymous_70)",
        decl: {
          start: {
            line: 412,
            column: 28
          },
          end: {
            line: 412,
            column: 29
          }
        },
        loc: {
          start: {
            line: 412,
            column: 44
          },
          end: {
            line: 424,
            column: 1
          }
        },
        line: 412
      },
      "71": {
        name: "(anonymous_71)",
        decl: {
          start: {
            line: 415,
            column: 24
          },
          end: {
            line: 415,
            column: 25
          }
        },
        loc: {
          start: {
            line: 415,
            column: 31
          },
          end: {
            line: 420,
            column: 3
          }
        },
        line: 415
      },
      "72": {
        name: "(anonymous_72)",
        decl: {
          start: {
            line: 426,
            column: 41
          },
          end: {
            line: 426,
            column: 42
          }
        },
        loc: {
          start: {
            line: 426,
            column: 52
          },
          end: {
            line: 429,
            column: 1
          }
        },
        line: 426
      },
      "73": {
        name: "(anonymous_73)",
        decl: {
          start: {
            line: 431,
            column: 33
          },
          end: {
            line: 431,
            column: 34
          }
        },
        loc: {
          start: {
            line: 431,
            column: 44
          },
          end: {
            line: 434,
            column: 1
          }
        },
        line: 431
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 117,
            column: 24
          },
          end: {
            line: 117,
            column: 44
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 117,
            column: 32
          },
          end: {
            line: 117,
            column: 44
          }
        }],
        line: 117
      },
      "1": {
        loc: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 225,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 124,
            column: 9
          }
        }, {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 130,
            column: 9
          }
        }, {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 136,
            column: 9
          }
        }, {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 138,
            column: 52
          }
        }, {
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 140,
            column: 58
          }
        }, {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 142,
            column: 78
          }
        }, {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 144,
            column: 76
          }
        }, {
          start: {
            line: 145,
            column: 4
          },
          end: {
            line: 146,
            column: 68
          }
        }, {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 148,
            column: 82
          }
        }, {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 150,
            column: 84
          }
        }, {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 154,
            column: 68
          }
        }, {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 160,
            column: 7
          }
        }, {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 163,
            column: 74
          }
        }, {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 167,
            column: 80
          }
        }, {
          start: {
            line: 169,
            column: 4
          },
          end: {
            line: 172,
            column: 8
          }
        }, {
          start: {
            line: 173,
            column: 4
          },
          end: {
            line: 175,
            column: 64
          }
        }, {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 178,
            column: 68
          }
        }, {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 181,
            column: 78
          }
        }, {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 184,
            column: 74
          }
        }, {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 187,
            column: 78
          }
        }, {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 190,
            column: 66
          }
        }, {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 193,
            column: 70
          }
        }, {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 196,
            column: 66
          }
        }, {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 199,
            column: 66
          }
        }, {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 202,
            column: 80
          }
        }, {
          start: {
            line: 204,
            column: 4
          },
          end: {
            line: 205,
            column: 86
          }
        }, {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 208,
            column: 86
          }
        }, {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 213,
            column: 29
          }
        }, {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 218,
            column: 29
          }
        }, {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 222,
            column: 35
          }
        }, {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 224,
            column: 19
          }
        }],
        line: 118
      },
      "2": {
        loc: {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 160,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 160,
            column: 7
          }
        }, {
          start: {
            line: 158,
            column: 13
          },
          end: {
            line: 160,
            column: 7
          }
        }],
        line: 156
      },
      "3": {
        loc: {
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 419,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 419,
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
        line: 416
      },
      "4": {
        loc: {
          start: {
            line: 428,
            column: 9
          },
          end: {
            line: 428,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 428,
            column: 9
          },
          end: {
            line: 428,
            column: 38
          }
        }, {
          start: {
            line: 428,
            column: 42
          },
          end: {
            line: 428,
            column: 61
          }
        }],
        line: 428
      },
      "5": {
        loc: {
          start: {
            line: 433,
            column: 9
          },
          end: {
            line: 433,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 433,
            column: 9
          },
          end: {
            line: 433,
            column: 29
          }
        }, {
          start: {
            line: 433,
            column: 33
          },
          end: {
            line: 433,
            column: 43
          }
        }],
        line: 433
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
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0
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
      "73": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8806a13f011e7bb8fe46b4d55c25eba7fb5b0926"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1yqtw4obra = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1yqtw4obra();






const initialState = (cov_1yqtw4obra().s[0]++, (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)({
  page: {
    path: '',
    title: '',
    isBeta: false
  },
  user: {},
  k8sConfig: [],
  // k8sconfig stores kubernetes cluster configs
  selectedK8sContexts: ['all'],
  // The selected k8s context on which the operations should be performed
  loadTest: {
    testName: '',
    meshName: '',
    url: '',
    qps: 0,
    c: 0,
    t: '30s',
    result: {}
  },
  loadTestPref: {
    qps: 0,
    t: '30s',
    c: 0,
    gen: 'fortio',
    ts: new Date()
  },
  meshAdapters: [],
  meshAdaptersts: new Date(),
  results: {
    startKey: '',
    results: []
  },
  results_selection: {},
  // format - { page: {index: content}}
  grafana: {
    grafanaURL: '',
    grafanaAPIKey: '',
    grafanaBoardSearch: '',
    grafanaBoards: [],
    selectedBoardsConfigs: [],
    ts: new Date(-8640000000000000)
  },
  prometheus: {
    prometheusURL: '',
    selectedPrometheusBoardsConfigs: [],
    ts: new Date(-8640000000000000)
  },
  staticPrometheusBoardConfig: {},
  anonymousUsageStats: true,
  anonymousPerfResults: true,
  showProgress: false,
  isDrawerCollapsed: false,
  selectedAdapter: '',
  events: [],
  notificationCenter: {
    openEventId: null,
    showFullNotificationCenter: false
  },
  catalogVisibility: true,
  extensionType: '',
  capabilitiesRegistry: null,
  telemetryURLs: {
    grafana: [],
    prometheus: []
  },
  // global gql-subscriptions
  operatorState: null,
  controllerState: null,
  meshSyncState: null,
  connectionMetadataState: null,
  // store connection definition metadata for state and connection kind management
  organization: null,
  workspace: null,
  keys: null
}));
const actionTypes = (cov_1yqtw4obra().s[1]++, {
  UPDATE_PAGE: 'UPDATE_PAGE',
  SET_WORKSPACE: 'SET_WORKSPACE',
  UPDATE_TITLE: 'UPDATE_TITLE',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_BETA_BADGE: 'UPDATE_BETA_BADGE',
  UPDATE_CLUSTER_CONFIG: 'UPDATE_CLUSTER_CONFIG',
  SET_K8S_CONTEXT: 'SET_K8S_CONTEXT',
  UPDATE_LOAD_TEST_DATA: 'UPDATE_LOAD_TEST_DATA',
  UPDATE_ADAPTERS_INFO: 'UPDATE_ADAPTERS_INFO',
  UPDATE_RESULTS_SELECTION: 'UPDATE_RESULTS_SELECTION',
  CLEAR_RESULTS_SELECTION: 'CLEAR_RESULTS_SELECTION',
  UPDATE_GRAFANA_CONFIG: 'UPDATE_GRAFANA_CONFIG',
  UPDATE_PROMETHEUS_CONFIG: 'UPDATE_PROMETHEUS_CONFIG',
  UPDATE_STATIC_BOARD_CONFIG: 'UPDATE_STATIC_BOARD_CONFIG',
  UPDATE_LOAD_GEN_CONFIG: 'UPDATE_LOAD_GEN_CONFIG',
  UPDATE_ANONYMOUS_USAGE_STATS: 'UPDATE_ANONYMOUS_USAGE_STATS',
  UPDATE_ANONYMOUS_PERFORMANCE_RESULTS: 'UPDATE_ANONYMOUS_PERFORMANCE_RESULTS',
  UPDATE_PROGRESS: 'UPDATE_PROGRESS',
  TOOGLE_DRAWER: 'TOOGLE_DRAWER',
  SET_ADAPTER: 'SET_ADAPTER',
  SET_CATALOG_CONTENT: 'SET_CATALOG_CONTENT',
  SET_OPERATOR_SUBSCRIPTION: 'SET_OPERATOR_SUBSCRIPTION',
  SET_CONTROLLER_STATE: 'SET_CONTROLLER_STATE',
  SET_MESHSYNC_SUBSCRIPTION: 'SET_MESHSYNC_SUBSCRIPTION',
  // UPDATE_SMI_RESULT: 'UPDATE_SMI_RESULT',
  UPDATE_EXTENSION_TYPE: 'UPDATE_EXTENSION_TYPE',
  UPDATE_CAPABILITY_REGISTRY: 'UPDATE_CAPABILITY_REGISTRY',
  UPDATE_TELEMETRY_URLS: 'UPDATE_TELEMETRY_URLS',
  SET_CONNECTION_METADATA: 'SET_CONNECTION_METADATA',
  SET_ORGANIZATION: 'SET_ORGANIZATION',
  SET_KEYS: 'SET_KEYS'
}); // REDUCERS

cov_1yqtw4obra().s[2]++;
const reducer = (state = (cov_1yqtw4obra().b[0][0]++, initialState), action) => {
  cov_1yqtw4obra().f[0]++;
  cov_1yqtw4obra().s[3]++;

  switch (action.type) {
    case actionTypes.UPDATE_PAGE:
      cov_1yqtw4obra().b[1][0]++;
      cov_1yqtw4obra().s[4]++;
      return state.mergeDeep({
        page: {
          path: action.path
        }
      });

    case actionTypes.UPDATE_TITLE:
      cov_1yqtw4obra().b[1][1]++;
      cov_1yqtw4obra().s[5]++;
      return state.mergeDeep({
        page: {
          title: action.title
        }
      });

    case actionTypes.UPDATE_BETA_BADGE:
      cov_1yqtw4obra().b[1][2]++;
      cov_1yqtw4obra().s[6]++;
      return state.mergeDeep({
        page: {
          isBeta: action.isBeta
        }
      });

    case actionTypes.UPDATE_USER:
      cov_1yqtw4obra().b[1][3]++;
      cov_1yqtw4obra().s[7]++;
      return state.mergeDeep({
        user: action.user
      });

    case actionTypes.UPDATE_CLUSTER_CONFIG:
      cov_1yqtw4obra().b[1][4]++;
      cov_1yqtw4obra().s[8]++;
      return state.merge({
        k8sConfig: action.k8sConfig
      });

    case actionTypes.SET_K8S_CONTEXT:
      cov_1yqtw4obra().b[1][5]++;
      cov_1yqtw4obra().s[9]++;
      return state.merge({
        selectedK8sContexts: action.selectedK8sContexts
      });

    case actionTypes.UPDATE_LOAD_TEST_DATA:
      cov_1yqtw4obra().b[1][6]++;
      cov_1yqtw4obra().s[10]++;
      return state.updateIn(['loadTest'], val => {
        cov_1yqtw4obra().f[1]++;
        cov_1yqtw4obra().s[11]++;
        return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(action.loadTest);
      });

    case actionTypes.UPDATE_LOAD_GEN_CONFIG:
      cov_1yqtw4obra().b[1][7]++;
      cov_1yqtw4obra().s[12]++;
      return state.mergeDeep({
        loadTestPref: action.loadTestPref
      });

    case actionTypes.UPDATE_ANONYMOUS_USAGE_STATS:
      cov_1yqtw4obra().b[1][8]++;
      cov_1yqtw4obra().s[13]++;
      return state.mergeDeep({
        anonymousUsageStats: action.anonymousUsageStats
      });

    case actionTypes.UPDATE_ANONYMOUS_PERFORMANCE_RESULTS:
      cov_1yqtw4obra().b[1][9]++;
      cov_1yqtw4obra().s[14]++;
      return state.mergeDeep({
        anonymousPerfResults: action.anonymousPerfResults
      });

    case actionTypes.UPDATE_ADAPTERS_INFO:
      cov_1yqtw4obra().b[1][10]++;
      cov_1yqtw4obra().s[15]++;
      state = state.updateIn(['meshAdapters'], val => {
        cov_1yqtw4obra().f[2]++;
        cov_1yqtw4obra().s[16]++;
        return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)([]);
      });
      cov_1yqtw4obra().s[17]++;
      state = state.updateIn(['meshAdaptersts'], val => {
        cov_1yqtw4obra().f[3]++;
        cov_1yqtw4obra().s[18]++;
        return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(new Date());
      });
      cov_1yqtw4obra().s[19]++;
      return state.mergeDeep({
        meshAdapters: action.meshAdapters
      });

    case actionTypes.UPDATE_RESULTS_SELECTION:
      cov_1yqtw4obra().b[1][11]++;
      cov_1yqtw4obra().s[20]++;

      if (Object.keys(action.results).length > 0) {
        cov_1yqtw4obra().b[2][0]++;
        cov_1yqtw4obra().s[21]++;
        return state.updateIn(['results_selection', action.page], val => {
          cov_1yqtw4obra().f[4]++;
          cov_1yqtw4obra().s[22]++;
          return action.results;
        });
      } else {
        cov_1yqtw4obra().b[2][1]++;
        cov_1yqtw4obra().s[23]++;
        return state.deleteIn(['results_selection', action.page]);
      }

    case actionTypes.UPDATE_GRAFANA_CONFIG:
      cov_1yqtw4obra().b[1][12]++;
      cov_1yqtw4obra().s[24]++;
      action.grafana.ts = new Date();
      cov_1yqtw4obra().s[25]++;
      return state.updateIn(['grafana'], val => {
        cov_1yqtw4obra().f[5]++;
        cov_1yqtw4obra().s[26]++;
        return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(action.grafana);
      });

    case actionTypes.UPDATE_PROMETHEUS_CONFIG:
      cov_1yqtw4obra().b[1][13]++;
      cov_1yqtw4obra().s[27]++;
      action.prometheus.ts = new Date();
      cov_1yqtw4obra().s[28]++;
      return state.updateIn(['prometheus'], val => {
        cov_1yqtw4obra().f[6]++;
        cov_1yqtw4obra().s[29]++;
        return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(action.prometheus);
      });

    case actionTypes.UPDATE_STATIC_BOARD_CONFIG:
      cov_1yqtw4obra().b[1][14]++;
      cov_1yqtw4obra().s[30]++;
      return state.updateIn(['staticPrometheusBoardConfig'], val => {
        cov_1yqtw4obra().f[7]++;
        cov_1yqtw4obra().s[31]++;
        return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(action.staticPrometheusBoardConfig);
      });

    case actionTypes.CLEAR_RESULTS_SELECTION:
      cov_1yqtw4obra().b[1][15]++;
      cov_1yqtw4obra().s[32]++;
      state = state.deleteIn(['results_selection']);
      cov_1yqtw4obra().s[33]++;
      return state.mergeDeep({
        results_selection: (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)({})
      });

    case actionTypes.UPDATE_PROGRESS:
      cov_1yqtw4obra().b[1][16]++;
      cov_1yqtw4obra().s[34]++;
      return state.mergeDeep({
        showProgress: action.showProgress
      });

    case actionTypes.TOOGLE_DRAWER:
      cov_1yqtw4obra().b[1][17]++;
      cov_1yqtw4obra().s[35]++;
      return state.mergeDeep({
        isDrawerCollapsed: action.isDrawerCollapsed
      });

    case actionTypes.SET_ADAPTER:
      cov_1yqtw4obra().b[1][18]++;
      cov_1yqtw4obra().s[36]++;
      return state.mergeDeep({
        selectedAdapter: action.selectedAdapter
      });

    case actionTypes.SET_CATALOG_CONTENT:
      cov_1yqtw4obra().b[1][19]++;
      cov_1yqtw4obra().s[37]++;
      return state.mergeDeep({
        catalogVisibility: action.catalogVisibility
      });

    case actionTypes.SET_OPERATOR_SUBSCRIPTION:
      cov_1yqtw4obra().b[1][20]++;
      cov_1yqtw4obra().s[38]++;
      return state.merge({
        operatorState: action.operatorState
      });

    case actionTypes.SET_CONTROLLER_STATE:
      cov_1yqtw4obra().b[1][21]++;
      cov_1yqtw4obra().s[39]++;
      return state.merge({
        controllerState: action.controllerState
      });

    case actionTypes.SET_MESHSYNC_SUBSCRIPTION:
      cov_1yqtw4obra().b[1][22]++;
      cov_1yqtw4obra().s[40]++;
      return state.merge({
        meshSyncState: action.meshSyncState
      });

    case actionTypes.UPDATE_EXTENSION_TYPE:
      cov_1yqtw4obra().b[1][23]++;
      cov_1yqtw4obra().s[41]++;
      return state.merge({
        extensionType: action.extensionType
      });

    case actionTypes.UPDATE_CAPABILITY_REGISTRY:
      cov_1yqtw4obra().b[1][24]++;
      cov_1yqtw4obra().s[42]++;
      return state.merge({
        capabilitiesRegistry: action.capabilitiesRegistry
      });

    case actionTypes.UPDATE_TELEMETRY_URLS:
      cov_1yqtw4obra().b[1][25]++;
      cov_1yqtw4obra().s[43]++;
      return state.updateIn(['telemetryURLs'], val => {
        cov_1yqtw4obra().f[8]++;
        cov_1yqtw4obra().s[44]++;
        return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(action.telemetryURLs);
      });

    case actionTypes.SET_CONNECTION_METADATA:
      cov_1yqtw4obra().b[1][26]++;
      cov_1yqtw4obra().s[45]++;
      return state.merge({
        connectionMetadataState: action.connectionMetadataState
      });

    case actionTypes.SET_KEYS:
      cov_1yqtw4obra().b[1][27]++;
      const updatedKeyState = (cov_1yqtw4obra().s[46]++, state.mergeDeep({
        keys: action.keys
      }));
      cov_1yqtw4obra().s[47]++;
      sessionStorage.setItem('keys', JSON.stringify(action.keys));
      cov_1yqtw4obra().s[48]++;
      return updatedKeyState;

    case actionTypes.SET_ORGANIZATION:
      cov_1yqtw4obra().b[1][28]++;
      const updatedOrgState = (cov_1yqtw4obra().s[49]++, state.mergeDeep({
        organization: action.organization
      }));
      cov_1yqtw4obra().s[50]++;
      sessionStorage.setItem('currentOrg', JSON.stringify(action.organization));
      cov_1yqtw4obra().s[51]++;
      return updatedOrgState;

    case actionTypes.SET_WORKSPACE:
      cov_1yqtw4obra().b[1][29]++;
      const updatedWorkspaceState = (cov_1yqtw4obra().s[52]++, state.mergeDeep({
        workspace: action.workspace
      }));
      cov_1yqtw4obra().s[53]++;
      sessionStorage.setItem('currentWorkspace', JSON.stringify(action.workspace));
      cov_1yqtw4obra().s[54]++;
      return updatedWorkspaceState;

    default:
      cov_1yqtw4obra().b[1][30]++;
      cov_1yqtw4obra().s[55]++;
      return state;
  }
}; // ACTION CREATOR

cov_1yqtw4obra().s[56]++;
const updatepagepath = ({
  path
}) => {
  cov_1yqtw4obra().f[9]++;
  cov_1yqtw4obra().s[57]++;
  return dispatch => {
    cov_1yqtw4obra().f[10]++;
    cov_1yqtw4obra().s[58]++;
    return dispatch({
      type: actionTypes.UPDATE_PAGE,
      path
    });
  };
};
cov_1yqtw4obra().s[59]++;
const updatepagetitle = ({
  path,
  title
}) => {
  cov_1yqtw4obra().f[11]++;
  cov_1yqtw4obra().s[60]++;
  return dispatch => {
    cov_1yqtw4obra().f[12]++;
    cov_1yqtw4obra().s[61]++;
    return dispatch({
      type: actionTypes.UPDATE_TITLE,
      title
    });
  };
};
cov_1yqtw4obra().s[62]++;
const updateProgress = ({
  showProgress
}) => {
  cov_1yqtw4obra().f[13]++;
  cov_1yqtw4obra().s[63]++;
  return dispatch => {
    cov_1yqtw4obra().f[14]++;
    cov_1yqtw4obra().s[64]++;
    return dispatch({
      type: actionTypes.UPDATE_PROGRESS,
      showProgress
    });
  };
};
cov_1yqtw4obra().s[65]++;
const updatebetabadge = ({
  isBeta
}) => {
  cov_1yqtw4obra().f[15]++;
  cov_1yqtw4obra().s[66]++;
  return dispatch => {
    cov_1yqtw4obra().f[16]++;
    cov_1yqtw4obra().s[67]++;
    return dispatch({
      type: actionTypes.UPDATE_BETA_BADGE,
      isBeta
    });
  };
};
cov_1yqtw4obra().s[68]++;
const updateUser = ({
  user
}) => {
  cov_1yqtw4obra().f[17]++;
  cov_1yqtw4obra().s[69]++;
  return dispatch => {
    cov_1yqtw4obra().f[18]++;
    cov_1yqtw4obra().s[70]++;
    return dispatch({
      type: actionTypes.UPDATE_USER,
      user
    });
  };
};
cov_1yqtw4obra().s[71]++;
const updateK8SConfig = ({
  k8sConfig
}) => {
  cov_1yqtw4obra().f[19]++;
  cov_1yqtw4obra().s[72]++;
  return dispatch => {
    cov_1yqtw4obra().f[20]++;
    cov_1yqtw4obra().s[73]++;
    return dispatch({
      type: actionTypes.UPDATE_CLUSTER_CONFIG,
      k8sConfig
    });
  };
};
cov_1yqtw4obra().s[74]++;
const setK8sContexts = ({
  selectedK8sContexts
}) => {
  cov_1yqtw4obra().f[21]++;
  cov_1yqtw4obra().s[75]++;
  return dispatch => {
    cov_1yqtw4obra().f[22]++;
    cov_1yqtw4obra().s[76]++;
    return dispatch({
      type: actionTypes.SET_K8S_CONTEXT,
      selectedK8sContexts
    });
  };
};
cov_1yqtw4obra().s[77]++;
const updateLoadTestData = ({
  loadTest
}) => {
  cov_1yqtw4obra().f[23]++;
  cov_1yqtw4obra().s[78]++;
  return dispatch => {
    cov_1yqtw4obra().f[24]++;
    cov_1yqtw4obra().s[79]++;
    return dispatch({
      type: actionTypes.UPDATE_LOAD_TEST_DATA,
      loadTest
    });
  };
};
cov_1yqtw4obra().s[80]++;
const updateLoadTestPref = ({
  loadTestPref
}) => {
  cov_1yqtw4obra().f[25]++;
  cov_1yqtw4obra().s[81]++;
  return dispatch => {
    cov_1yqtw4obra().f[26]++;
    cov_1yqtw4obra().s[82]++;
    return dispatch({
      type: actionTypes.UPDATE_LOAD_GEN_CONFIG,
      loadTestPref
    });
  };
};
cov_1yqtw4obra().s[83]++;
const updateAnonymousUsageStats = ({
  anonymousUsageStats
}) => {
  cov_1yqtw4obra().f[27]++;
  cov_1yqtw4obra().s[84]++;
  return dispatch => {
    cov_1yqtw4obra().f[28]++;
    cov_1yqtw4obra().s[85]++;
    return dispatch({
      type: actionTypes.UPDATE_ANONYMOUS_USAGE_STATS,
      anonymousUsageStats
    });
  };
};
cov_1yqtw4obra().s[86]++;
const updateAnonymousPerformanceResults = ({
  anonymousPerfResults
}) => {
  cov_1yqtw4obra().f[29]++;
  cov_1yqtw4obra().s[87]++;
  return dispatch => {
    cov_1yqtw4obra().f[30]++;
    cov_1yqtw4obra().s[88]++;
    return dispatch({
      type: actionTypes.UPDATE_ANONYMOUS_PERFORMANCE_RESULTS,
      anonymousPerfResults
    });
  };
};
cov_1yqtw4obra().s[89]++;
const updateAdaptersInfo = ({
  meshAdapters
}) => {
  cov_1yqtw4obra().f[31]++;
  cov_1yqtw4obra().s[90]++;
  return dispatch => {
    cov_1yqtw4obra().f[32]++;
    cov_1yqtw4obra().s[91]++;
    return dispatch({
      type: actionTypes.UPDATE_ADAPTERS_INFO,
      meshAdapters
    });
  };
};
cov_1yqtw4obra().s[92]++;
const updateResultsSelection = ({
  page,
  results
}) => {
  cov_1yqtw4obra().f[33]++;
  cov_1yqtw4obra().s[93]++;
  return dispatch => {
    cov_1yqtw4obra().f[34]++;
    cov_1yqtw4obra().s[94]++;
    return dispatch({
      type: actionTypes.UPDATE_RESULTS_SELECTION,
      page,
      results
    });
  };
};
cov_1yqtw4obra().s[95]++;
const clearResultsSelection = () => {
  cov_1yqtw4obra().f[35]++;
  cov_1yqtw4obra().s[96]++;
  return dispatch => {
    cov_1yqtw4obra().f[36]++;
    cov_1yqtw4obra().s[97]++;
    return dispatch({
      type: actionTypes.CLEAR_RESULTS_SELECTION
    });
  };
};
cov_1yqtw4obra().s[98]++;
const updateGrafanaConfig = ({
  grafana
}) => {
  cov_1yqtw4obra().f[37]++;
  cov_1yqtw4obra().s[99]++;
  return dispatch => {
    cov_1yqtw4obra().f[38]++;
    cov_1yqtw4obra().s[100]++;
    return dispatch({
      type: actionTypes.UPDATE_GRAFANA_CONFIG,
      grafana
    });
  };
};
cov_1yqtw4obra().s[101]++;
const updatePrometheusConfig = ({
  prometheus
}) => {
  cov_1yqtw4obra().f[39]++;
  cov_1yqtw4obra().s[102]++;
  return dispatch => {
    cov_1yqtw4obra().f[40]++;
    cov_1yqtw4obra().s[103]++;
    return dispatch({
      type: actionTypes.UPDATE_PROMETHEUS_CONFIG,
      prometheus
    });
  };
};
cov_1yqtw4obra().s[104]++;
const updateStaticPrometheusBoardConfig = ({
  staticPrometheusBoardConfig
}) => {
  cov_1yqtw4obra().f[41]++;
  cov_1yqtw4obra().s[105]++;
  return dispatch => {
    cov_1yqtw4obra().f[42]++;
    cov_1yqtw4obra().s[106]++;
    return dispatch({
      type: actionTypes.UPDATE_STATIC_BOARD_CONFIG,
      staticPrometheusBoardConfig
    });
  };
};
cov_1yqtw4obra().s[107]++;
const toggleDrawer = ({
  isDrawerCollapsed
}) => {
  cov_1yqtw4obra().f[43]++;
  cov_1yqtw4obra().s[108]++;
  return dispatch => {
    cov_1yqtw4obra().f[44]++;
    cov_1yqtw4obra().s[109]++;
    return dispatch({
      type: actionTypes.TOOGLE_DRAWER,
      isDrawerCollapsed
    });
  };
};
cov_1yqtw4obra().s[110]++;
const setAdapter = ({
  selectedAdapter
}) => {
  cov_1yqtw4obra().f[45]++;
  cov_1yqtw4obra().s[111]++;
  return dispatch => {
    cov_1yqtw4obra().f[46]++;
    cov_1yqtw4obra().s[112]++;
    return dispatch({
      type: actionTypes.SET_ADAPTER,
      selectedAdapter
    });
  };
};
cov_1yqtw4obra().s[113]++;
const toggleCatalogContent = ({
  catalogVisibility
}) => {
  cov_1yqtw4obra().f[47]++;
  cov_1yqtw4obra().s[114]++;
  return dispatch => {
    cov_1yqtw4obra().f[48]++;
    cov_1yqtw4obra().s[115]++;
    return dispatch({
      type: actionTypes.SET_CATALOG_CONTENT,
      catalogVisibility
    });
  };
};
cov_1yqtw4obra().s[116]++;
const setOperatorSubscription = ({
  operatorState
}) => {
  cov_1yqtw4obra().f[49]++;
  cov_1yqtw4obra().s[117]++;
  return dispatch => {
    cov_1yqtw4obra().f[50]++;
    cov_1yqtw4obra().s[118]++;
    return dispatch({
      type: actionTypes.SET_OPERATOR_SUBSCRIPTION,
      operatorState
    });
  };
};
cov_1yqtw4obra().s[119]++;
const setMeshsyncSubscription = ({
  meshSyncState
}) => {
  cov_1yqtw4obra().f[51]++;
  cov_1yqtw4obra().s[120]++;
  return dispatch => {
    cov_1yqtw4obra().f[52]++;
    cov_1yqtw4obra().s[121]++;
    return dispatch({
      type: actionTypes.SET_MESHSYNC_SUBSCRIPTION,
      meshSyncState
    });
  };
};
cov_1yqtw4obra().s[122]++;
const updateExtensionType = ({
  extensionType
}) => {
  cov_1yqtw4obra().f[53]++;
  cov_1yqtw4obra().s[123]++;
  return dispatch => {
    cov_1yqtw4obra().f[54]++;
    cov_1yqtw4obra().s[124]++;
    return dispatch({
      type: actionTypes.UPDATE_EXTENSION_TYPE,
      extensionType
    });
  };
};
cov_1yqtw4obra().s[125]++;
const updateCapabilities = ({
  capabilitiesRegistry
}) => {
  cov_1yqtw4obra().f[55]++;
  cov_1yqtw4obra().s[126]++;
  return dispatch => {
    cov_1yqtw4obra().f[56]++;
    cov_1yqtw4obra().s[127]++;
    return dispatch({
      type: actionTypes.UPDATE_CAPABILITY_REGISTRY,
      capabilitiesRegistry
    });
  };
};
cov_1yqtw4obra().s[128]++;
const updateTelemetryUrls = ({
  telemetryURLs
}) => {
  cov_1yqtw4obra().f[57]++;
  cov_1yqtw4obra().s[129]++;
  return dispatch => {
    cov_1yqtw4obra().f[58]++;
    cov_1yqtw4obra().s[130]++;
    return dispatch({
      type: actionTypes.UPDATE_TELEMETRY_URLS,
      telemetryURLs
    });
  };
};
cov_1yqtw4obra().s[131]++;
const openEventInNotificationCenter = ({
  eventId
}) => {
  cov_1yqtw4obra().f[59]++;
  cov_1yqtw4obra().s[132]++;
  return dispatch => {
    cov_1yqtw4obra().f[60]++;
    cov_1yqtw4obra().s[133]++;
    return dispatch({
      type: actionTypes.OPEN_EVENT_IN_NOTIFICATION_CENTER,
      eventId
    });
  };
};
cov_1yqtw4obra().s[134]++;
const setConnectionMetadata = ({
  connectionMetadataState
}) => {
  cov_1yqtw4obra().f[61]++;
  cov_1yqtw4obra().s[135]++;
  return dispatch => {
    cov_1yqtw4obra().f[62]++;
    cov_1yqtw4obra().s[136]++;
    return dispatch({
      type: actionTypes.SET_CONNECTION_METADATA,
      connectionMetadataState
    });
  };
};
cov_1yqtw4obra().s[137]++;
const setOrganization = ({
  organization
}) => {
  cov_1yqtw4obra().f[63]++;
  cov_1yqtw4obra().s[138]++;
  return dispatch => {
    cov_1yqtw4obra().f[64]++;
    cov_1yqtw4obra().s[139]++;
    return dispatch({
      type: actionTypes.SET_ORGANIZATION,
      organization
    });
  };
};
cov_1yqtw4obra().s[140]++;
const setWorkspace = ({
  workspace
}) => {
  cov_1yqtw4obra().f[65]++;
  cov_1yqtw4obra().s[141]++;
  return dispatch => {
    cov_1yqtw4obra().f[66]++;
    cov_1yqtw4obra().s[142]++;
    return dispatch({
      type: actionTypes.SET_WORKSPACE,
      workspace
    });
  };
};
cov_1yqtw4obra().s[143]++;
const setKeys = ({
  keys
}) => {
  cov_1yqtw4obra().f[67]++;
  cov_1yqtw4obra().s[144]++;
  return dispatch => {
    cov_1yqtw4obra().f[68]++;
    cov_1yqtw4obra().s[145]++;
    return dispatch({
      type: actionTypes.SET_KEYS,
      keys
    });
  };
};
cov_1yqtw4obra().s[146]++;
const makeStore = (initialState, options) => {
  cov_1yqtw4obra().f[69]++;
  cov_1yqtw4obra().s[147]++;
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, initialState, (0,_redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_2___default()))));
};
cov_1yqtw4obra().s[148]++;
const resultsMerge = (arr1, arr2) => {
  cov_1yqtw4obra().f[70]++;
  const keys = (cov_1yqtw4obra().s[149]++, {});
  var arr = (cov_1yqtw4obra().s[150]++, []);
  cov_1yqtw4obra().s[151]++;

  const compareAndAdd = a => {
    cov_1yqtw4obra().f[71]++;
    cov_1yqtw4obra().s[152]++;

    if (typeof keys[a.meshplay_id] === 'undefined') {
      cov_1yqtw4obra().b[3][0]++;
      cov_1yqtw4obra().s[153]++;
      keys[a.meshplay_id] = true;
      cov_1yqtw4obra().s[154]++;
      arr = arr.push(a);
    } else {
      cov_1yqtw4obra().b[3][1]++;
    }
  };

  cov_1yqtw4obra().s[155]++;
  arr1.map(compareAndAdd);
  cov_1yqtw4obra().s[156]++;
  arr2.map(compareAndAdd);
  cov_1yqtw4obra().s[157]++;
  return arr;
};
cov_1yqtw4obra().s[158]++;
const selectSelectedK8sClusters = state => {
  cov_1yqtw4obra().f[72]++;
  const selectedK8sContexts = (cov_1yqtw4obra().s[159]++, state.get('selectedK8sContexts'));
  cov_1yqtw4obra().s[160]++;
  return (cov_1yqtw4obra().b[4][0]++, selectedK8sContexts?.toJS?.()) || (cov_1yqtw4obra().b[4][1]++, selectedK8sContexts);
};
cov_1yqtw4obra().s[161]++;
const selectK8sContexts = state => {
  cov_1yqtw4obra().f[73]++;
  const k8scontext = (cov_1yqtw4obra().s[162]++, state.get('k8sConfig'));
  cov_1yqtw4obra().s[163]++;
  return (cov_1yqtw4obra().b[5][0]++, k8scontext?.toJS?.()) || (cov_1yqtw4obra().b[5][1]++, k8scontext);
};
const LegacyStoreContext = (cov_1yqtw4obra().s[164]++, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)(null));
const useLegacySelector = (cov_1yqtw4obra().s[165]++, (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.createSelectorHook)(LegacyStoreContext));
const useLegacyDispactch = (cov_1yqtw4obra().s[166]++, (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.createDispatchHook)(LegacyStoreContext));

/***/ })

};
;