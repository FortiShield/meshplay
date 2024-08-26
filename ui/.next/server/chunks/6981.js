"use strict";
exports.id = 6981;
exports.ids = [6981];
exports.modules = {

/***/ 96981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export generatePerformanceProfile */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12610);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54104);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74116);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13266);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_URLValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24198);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7352);
/* harmony import */ var _khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26481);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92211);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27806);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22315);
/* harmony import */ var _material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4374);
/* harmony import */ var _material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(68885);
/* harmony import */ var _lib_data_fetch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47533);
/* harmony import */ var _MeshplayChart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(37582);
/* harmony import */ var _load_test_timer_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68971);
/* harmony import */ var _telemetry_grafana_GrafanaCustomCharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(61412);
/* harmony import */ var _lib_prePopulatedOptions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14163);
/* harmony import */ var _graphql_queries_ControlPlanesQuery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(89223);
/* harmony import */ var _utils_multi_ctx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7806);
/* harmony import */ var _css_icons_styles__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(52518);
/* harmony import */ var _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(93113);
/* harmony import */ var _lib_event_types__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(42880);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(50976);
/* harmony import */ var _utils_can__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(54872);
/* harmony import */ var _utils_permission_constants__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(24018);
/* harmony import */ var _components_General_error_404_index__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(17436);
/* harmony import */ var _MeshplayMeshInterface_PatternService_CustomTextTooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(95484);
/* harmony import */ var _rtk_query_user__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(67976);
/* harmony import */ var _rtk_query_performance_profile__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(63659);
/* harmony import */ var _rtk_query_mesh__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(41372);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_data_fetch__WEBPACK_IMPORTED_MODULE_17__, _MeshplayChart__WEBPACK_IMPORTED_MODULE_18__, _telemetry_grafana_GrafanaCustomCharts__WEBPACK_IMPORTED_MODULE_20__, _graphql_queries_ControlPlanesQuery__WEBPACK_IMPORTED_MODULE_22__, _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_25__, _utils_can__WEBPACK_IMPORTED_MODULE_28__, _components_General_error_404_index__WEBPACK_IMPORTED_MODULE_30__]);
([_lib_data_fetch__WEBPACK_IMPORTED_MODULE_17__, _MeshplayChart__WEBPACK_IMPORTED_MODULE_18__, _telemetry_grafana_GrafanaCustomCharts__WEBPACK_IMPORTED_MODULE_20__, _graphql_queries_ControlPlanesQuery__WEBPACK_IMPORTED_MODULE_22__, _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_25__, _utils_can__WEBPACK_IMPORTED_MODULE_28__, _components_General_error_404_index__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_1d17zcaqaj() {
  var path = "/workspace/meshplay/ui/components/MeshplayPerformance/index.js";
  var hash = "730d6fe991447822f3a6493ce4632815754f70b6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/MeshplayPerformance/index.js",
    statementMap: {
      "0": {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 82,
          column: 10
        }
      },
      "1": {
        start: {
          line: 84,
          column: 33
        },
        end: {
          line: 84,
          column: 68
        }
      },
      "2": {
        start: {
          line: 86,
          column: 2
        },
        end: {
          line: 106,
          column: 4
        }
      },
      "3": {
        start: {
          line: 109,
          column: 15
        },
        end: {
          line: 183,
          column: 2
        }
      },
      "4": {
        start: {
          line: 109,
          column: 27
        },
        end: {
          line: 183,
          column: 1
        }
      },
      "5": {
        start: {
          line: 185,
          column: 23
        },
        end: {
          line: 185,
          column: 54
        }
      },
      "6": {
        start: {
          line: 187,
          column: 18
        },
        end: {
          line: 187,
          column: 54
        }
      },
      "7": {
        start: {
          line: 189,
          column: 28
        },
        end: {
          line: 189,
          column: 63
        }
      },
      "8": {
        start: {
          line: 192,
          column: 2
        },
        end: {
          line: 215,
          column: 5
        }
      },
      "9": {
        start: {
          line: 218,
          column: 18
        },
        end: {
          line: 218,
          column: 22
        }
      },
      "10": {
        start: {
          line: 219,
          column: 37
        },
        end: {
          line: 1297,
          column: 1
        }
      },
      "11": {
        start: {
          line: 238,
          column: 6
        },
        end: {
          line: 238,
          column: 11
        }
      },
      "12": {
        start: {
          line: 239,
          column: 23
        },
        end: {
          line: 246,
          column: 3
        }
      },
      "13": {
        start: {
          line: 240,
          column: 4
        },
        end: {
          line: 244,
          column: 5
        }
      },
      "14": {
        start: {
          line: 241,
          column: 6
        },
        end: {
          line: 241,
          column: 22
        }
      },
      "15": {
        start: {
          line: 243,
          column: 6
        },
        end: {
          line: 243,
          column: 19
        }
      },
      "16": {
        start: {
          line: 245,
          column: 4
        },
        end: {
          line: 245,
          column: 16
        }
      },
      "17": {
        start: {
          line: 248,
          column: 39
        },
        end: {
          line: 248,
          column: 57
        }
      },
      "18": {
        start: {
          line: 249,
          column: 39
        },
        end: {
          line: 249,
          column: 57
        }
      },
      "19": {
        start: {
          line: 250,
          column: 29
        },
        end: {
          line: 250,
          column: 42
        }
      },
      "20": {
        start: {
          line: 251,
          column: 29
        },
        end: {
          line: 251,
          column: 42
        }
      },
      "21": {
        start: {
          line: 252,
          column: 25
        },
        end: {
          line: 252,
          column: 36
        }
      },
      "22": {
        start: {
          line: 253,
          column: 25
        },
        end: {
          line: 253,
          column: 36
        }
      },
      "23": {
        start: {
          line: 254,
          column: 35
        },
        end: {
          line: 254,
          column: 46
        }
      },
      "24": {
        start: {
          line: 255,
          column: 49
        },
        end: {
          line: 255,
          column: 84
        }
      },
      "25": {
        start: {
          line: 256,
          column: 57
        },
        end: {
          line: 256,
          column: 91
        }
      },
      "26": {
        start: {
          line: 257,
          column: 35
        },
        end: {
          line: 257,
          column: 51
        }
      },
      "27": {
        start: {
          line: 258,
          column: 37
        },
        end: {
          line: 258,
          column: 60
        }
      },
      "28": {
        start: {
          line: 259,
          column: 37
        },
        end: {
          line: 259,
          column: 60
        }
      },
      "29": {
        start: {
          line: 260,
          column: 37
        },
        end: {
          line: 260,
          column: 60
        }
      },
      "30": {
        start: {
          line: 261,
          column: 45
        },
        end: {
          line: 261,
          column: 72
        }
      },
      "31": {
        start: {
          line: 262,
          column: 49
        },
        end: {
          line: 262,
          column: 61
        }
      },
      "32": {
        start: {
          line: 263,
          column: 45
        },
        end: {
          line: 263,
          column: 72
        }
      },
      "33": {
        start: {
          line: 264,
          column: 63
        },
        end: {
          line: 264,
          column: 99
        }
      },
      "34": {
        start: {
          line: 265,
          column: 53
        },
        end: {
          line: 265,
          column: 68
        }
      },
      "35": {
        start: {
          line: 266,
          column: 47
        },
        end: {
          line: 266,
          column: 62
        }
      },
      "36": {
        start: {
          line: 267,
          column: 39
        },
        end: {
          line: 267,
          column: 54
        }
      },
      "37": {
        start: {
          line: 268,
          column: 35
        },
        end: {
          line: 268,
          column: 47
        }
      },
      "38": {
        start: {
          line: 269,
          column: 41
        },
        end: {
          line: 269,
          column: 56
        }
      },
      "39": {
        start: {
          line: 270,
          column: 45
        },
        end: {
          line: 272,
          column: 3
        }
      },
      "40": {
        start: {
          line: 273,
          column: 39
        },
        end: {
          line: 273,
          column: 63
        }
      },
      "41": {
        start: {
          line: 274,
          column: 47
        },
        end: {
          line: 274,
          column: 59
        }
      },
      "42": {
        start: {
          line: 275,
          column: 57
        },
        end: {
          line: 275,
          column: 69
        }
      },
      "43": {
        start: {
          line: 276,
          column: 59
        },
        end: {
          line: 276,
          column: 71
        }
      },
      "44": {
        start: {
          line: 277,
          column: 39
        },
        end: {
          line: 277,
          column: 57
        }
      },
      "45": {
        start: {
          line: 278,
          column: 77
        },
        end: {
          line: 280,
          column: 3
        }
      },
      "46": {
        start: {
          line: 282,
          column: 59
        },
        end: {
          line: 284,
          column: 3
        }
      },
      "47": {
        start: {
          line: 286,
          column: 35
        },
        end: {
          line: 286,
          column: 70
        }
      },
      "48": {
        start: {
          line: 291,
          column: 6
        },
        end: {
          line: 291,
          column: 23
        }
      },
      "49": {
        start: {
          line: 293,
          column: 23
        },
        end: {
          line: 393,
          column: 3
        }
      },
      "50": {
        start: {
          line: 293,
          column: 33
        },
        end: {
          line: 393,
          column: 3
        }
      },
      "51": {
        start: {
          line: 294,
          column: 22
        },
        end: {
          line: 294,
          column: 34
        }
      },
      "52": {
        start: {
          line: 295,
          column: 4
        },
        end: {
          line: 307,
          column: 5
        }
      },
      "53": {
        start: {
          line: 296,
          column: 6
        },
        end: {
          line: 296,
          column: 46
        }
      },
      "54": {
        start: {
          line: 296,
          column: 39
        },
        end: {
          line: 296,
          column: 46
        }
      },
      "55": {
        start: {
          line: 298,
          column: 19
        },
        end: {
          line: 298,
          column: 40
        }
      },
      "56": {
        start: {
          line: 299,
          column: 21
        },
        end: {
          line: 299,
          column: 37
        }
      },
      "57": {
        start: {
          line: 300,
          column: 6
        },
        end: {
          line: 305,
          column: 9
        }
      },
      "58": {
        start: {
          line: 301,
          column: 8
        },
        end: {
          line: 304,
          column: 11
        }
      },
      "59": {
        start: {
          line: 306,
          column: 6
        },
        end: {
          line: 306,
          column: 30
        }
      },
      "60": {
        start: {
          line: 309,
          column: 4
        },
        end: {
          line: 320,
          column: 30
        }
      },
      "61": {
        start: {
          line: 310,
          column: 23
        },
        end: {
          line: 310,
          column: 28
        }
      },
      "62": {
        start: {
          line: 312,
          column: 16
        },
        end: {
          line: 312,
          column: 40
        }
      },
      "63": {
        start: {
          line: 313,
          column: 6
        },
        end: {
          line: 319,
          column: 7
        }
      },
      "64": {
        start: {
          line: 314,
          column: 8
        },
        end: {
          line: 314,
          column: 29
        }
      },
      "65": {
        start: {
          line: 315,
          column: 8
        },
        end: {
          line: 315,
          column: 26
        }
      },
      "66": {
        start: {
          line: 317,
          column: 8
        },
        end: {
          line: 317,
          column: 30
        }
      },
      "67": {
        start: {
          line: 318,
          column: 8
        },
        end: {
          line: 318,
          column: 27
        }
      },
      "68": {
        start: {
          line: 320,
          column: 11
        },
        end: {
          line: 320,
          column: 30
        }
      },
      "69": {
        start: {
          line: 322,
          column: 4
        },
        end: {
          line: 357,
          column: 5
        }
      },
      "70": {
        start: {
          line: 324,
          column: 27
        },
        end: {
          line: 324,
          column: 71
        }
      },
      "71": {
        start: {
          line: 326,
          column: 6
        },
        end: {
          line: 356,
          column: 7
        }
      },
      "72": {
        start: {
          line: 328,
          column: 21
        },
        end: {
          line: 328,
          column: 42
        }
      },
      "73": {
        start: {
          line: 329,
          column: 8
        },
        end: {
          line: 344,
          column: 9
        }
      },
      "74": {
        start: {
          line: 330,
          column: 25
        },
        end: {
          line: 330,
          column: 41
        }
      },
      "75": {
        start: {
          line: 331,
          column: 10
        },
        end: {
          line: 342,
          column: 12
        }
      },
      "76": {
        start: {
          line: 332,
          column: 12
        },
        end: {
          line: 341,
          column: 13
        }
      },
      "77": {
        start: {
          line: 333,
          column: 34
        },
        end: {
          line: 333,
          column: 53
        }
      },
      "78": {
        start: {
          line: 335,
          column: 14
        },
        end: {
          line: 335,
          column: 38
        }
      },
      "79": {
        start: {
          line: 336,
          column: 14
        },
        end: {
          line: 336,
          column: 48
        }
      },
      "80": {
        start: {
          line: 337,
          column: 14
        },
        end: {
          line: 337,
          column: 34
        }
      },
      "81": {
        start: {
          line: 339,
          column: 14
        },
        end: {
          line: 339,
          column: 56
        }
      },
      "82": {
        start: {
          line: 340,
          column: 14
        },
        end: {
          line: 340,
          column: 33
        }
      },
      "83": {
        start: {
          line: 343,
          column: 10
        },
        end: {
          line: 343,
          column: 34
        }
      },
      "84": {
        start: {
          line: 347,
          column: 8
        },
        end: {
          line: 355,
          column: 9
        }
      },
      "85": {
        start: {
          line: 349,
          column: 10
        },
        end: {
          line: 349,
          column: 46
        }
      },
      "86": {
        start: {
          line: 349,
          column: 28
        },
        end: {
          line: 349,
          column: 46
        }
      },
      "87": {
        start: {
          line: 350,
          column: 10
        },
        end: {
          line: 350,
          column: 38
        }
      },
      "88": {
        start: {
          line: 351,
          column: 10
        },
        end: {
          line: 351,
          column: 30
        }
      },
      "89": {
        start: {
          line: 353,
          column: 10
        },
        end: {
          line: 353,
          column: 38
        }
      },
      "90": {
        start: {
          line: 354,
          column: 10
        },
        end: {
          line: 354,
          column: 29
        }
      },
      "91": {
        start: {
          line: 358,
          column: 4
        },
        end: {
          line: 392,
          column: 5
        }
      },
      "92": {
        start: {
          line: 360,
          column: 8
        },
        end: {
          line: 360,
          column: 30
        }
      },
      "93": {
        start: {
          line: 361,
          column: 8
        },
        end: {
          line: 361,
          column: 14
        }
      },
      "94": {
        start: {
          line: 363,
          column: 8
        },
        end: {
          line: 363,
          column: 27
        }
      },
      "95": {
        start: {
          line: 364,
          column: 8
        },
        end: {
          line: 364,
          column: 14
        }
      },
      "96": {
        start: {
          line: 366,
          column: 8
        },
        end: {
          line: 366,
          column: 20
        }
      },
      "97": {
        start: {
          line: 367,
          column: 8
        },
        end: {
          line: 367,
          column: 14
        }
      },
      "98": {
        start: {
          line: 369,
          column: 8
        },
        end: {
          line: 369,
          column: 22
        }
      },
      "99": {
        start: {
          line: 370,
          column: 8
        },
        end: {
          line: 370,
          column: 14
        }
      },
      "100": {
        start: {
          line: 372,
          column: 8
        },
        end: {
          line: 372,
          column: 26
        }
      },
      "101": {
        start: {
          line: 373,
          column: 8
        },
        end: {
          line: 373,
          column: 14
        }
      },
      "102": {
        start: {
          line: 375,
          column: 8
        },
        end: {
          line: 375,
          column: 26
        }
      },
      "103": {
        start: {
          line: 376,
          column: 8
        },
        end: {
          line: 376,
          column: 14
        }
      },
      "104": {
        start: {
          line: 378,
          column: 8
        },
        end: {
          line: 378,
          column: 30
        }
      },
      "105": {
        start: {
          line: 379,
          column: 8
        },
        end: {
          line: 379,
          column: 14
        }
      },
      "106": {
        start: {
          line: 381,
          column: 8
        },
        end: {
          line: 381,
          column: 26
        }
      },
      "107": {
        start: {
          line: 382,
          column: 8
        },
        end: {
          line: 382,
          column: 14
        }
      },
      "108": {
        start: {
          line: 384,
          column: 8
        },
        end: {
          line: 384,
          column: 32
        }
      },
      "109": {
        start: {
          line: 385,
          column: 8
        },
        end: {
          line: 385,
          column: 14
        }
      },
      "110": {
        start: {
          line: 387,
          column: 8
        },
        end: {
          line: 387,
          column: 22
        }
      },
      "111": {
        start: {
          line: 388,
          column: 8
        },
        end: {
          line: 388,
          column: 14
        }
      },
      "112": {
        start: {
          line: 391,
          column: 8
        },
        end: {
          line: 391,
          column: 14
        }
      },
      "113": {
        start: {
          line: 395,
          column: 31
        },
        end: {
          line: 400,
          column: 3
        }
      },
      "114": {
        start: {
          line: 396,
          column: 4
        },
        end: {
          line: 396,
          column: 24
        }
      },
      "115": {
        start: {
          line: 397,
          column: 4
        },
        end: {
          line: 399,
          column: 5
        }
      },
      "116": {
        start: {
          line: 398,
          column: 6
        },
        end: {
          line: 398,
          column: 20
        }
      },
      "117": {
        start: {
          line: 402,
          column: 36
        },
        end: {
          line: 404,
          column: 3
        }
      },
      "118": {
        start: {
          line: 403,
          column: 4
        },
        end: {
          line: 403,
          column: 19
        }
      },
      "119": {
        start: {
          line: 406,
          column: 23
        },
        end: {
          line: 440,
          column: 3
        }
      },
      "120": {
        start: {
          line: 407,
          column: 4
        },
        end: {
          line: 410,
          column: 5
        }
      },
      "121": {
        start: {
          line: 408,
          column: 6
        },
        end: {
          line: 408,
          column: 24
        }
      },
      "122": {
        start: {
          line: 409,
          column: 6
        },
        end: {
          line: 409,
          column: 13
        }
      },
      "123": {
        start: {
          line: 412,
          column: 14
        },
        end: {
          line: 412,
          column: 19
        }
      },
      "124": {
        start: {
          line: 413,
          column: 15
        },
        end: {
          line: 413,
          column: 16
        }
      },
      "125": {
        start: {
          line: 414,
          column: 4
        },
        end: {
          line: 418,
          column: 5
        }
      },
      "126": {
        start: {
          line: 415,
          column: 6
        },
        end: {
          line: 415,
          column: 57
        }
      },
      "127": {
        start: {
          line: 417,
          column: 6
        },
        end: {
          line: 417,
          column: 17
        }
      },
      "128": {
        start: {
          line: 420,
          column: 4
        },
        end: {
          line: 433,
          column: 5
        }
      },
      "129": {
        start: {
          line: 431,
          column: 6
        },
        end: {
          line: 431,
          column: 44
        }
      },
      "130": {
        start: {
          line: 432,
          column: 6
        },
        end: {
          line: 432,
          column: 13
        }
      },
      "131": {
        start: {
          line: 435,
          column: 4
        },
        end: {
          line: 438,
          column: 5
        }
      },
      "132": {
        start: {
          line: 436,
          column: 6
        },
        end: {
          line: 436,
          column: 52
        }
      },
      "133": {
        start: {
          line: 436,
          column: 32
        },
        end: {
          line: 436,
          column: 50
        }
      },
      "134": {
        start: {
          line: 437,
          column: 6
        },
        end: {
          line: 437,
          column: 13
        }
      },
      "135": {
        start: {
          line: 439,
          column: 4
        },
        end: {
          line: 439,
          column: 46
        }
      },
      "136": {
        start: {
          line: 442,
          column: 24
        },
        end: {
          line: 462,
          column: 3
        }
      },
      "137": {
        start: {
          line: 443,
          column: 20
        },
        end: {
          line: 459,
          column: 6
        }
      },
      "138": {
        start: {
          line: 461,
          column: 4
        },
        end: {
          line: 461,
          column: 43
        }
      },
      "139": {
        start: {
          line: 464,
          column: 22
        },
        end: {
          line: 481,
          column: 3
        }
      },
      "140": {
        start: {
          line: 465,
          column: 4
        },
        end: {
          line: 465,
          column: 23
        }
      },
      "141": {
        start: {
          line: 466,
          column: 4
        },
        end: {
          line: 466,
          column: 25
        }
      },
      "142": {
        start: {
          line: 467,
          column: 4
        },
        end: {
          line: 467,
          column: 29
        }
      },
      "143": {
        start: {
          line: 468,
          column: 4
        },
        end: {
          line: 468,
          column: 15
        }
      },
      "144": {
        start: {
          line: 469,
          column: 4
        },
        end: {
          line: 469,
          column: 20
        }
      },
      "145": {
        start: {
          line: 470,
          column: 4
        },
        end: {
          line: 470,
          column: 12
        }
      },
      "146": {
        start: {
          line: 471,
          column: 4
        },
        end: {
          line: 471,
          column: 14
        }
      },
      "147": {
        start: {
          line: 472,
          column: 4
        },
        end: {
          line: 472,
          column: 16
        }
      },
      "148": {
        start: {
          line: 473,
          column: 4
        },
        end: {
          line: 473,
          column: 19
        }
      },
      "149": {
        start: {
          line: 474,
          column: 4
        },
        end: {
          line: 474,
          column: 19
        }
      },
      "150": {
        start: {
          line: 475,
          column: 4
        },
        end: {
          line: 475,
          column: 19
        }
      },
      "151": {
        start: {
          line: 476,
          column: 4
        },
        end: {
          line: 476,
          column: 23
        }
      },
      "152": {
        start: {
          line: 477,
          column: 4
        },
        end: {
          line: 477,
          column: 20
        }
      },
      "153": {
        start: {
          line: 478,
          column: 4
        },
        end: {
          line: 478,
          column: 32
        }
      },
      "154": {
        start: {
          line: 479,
          column: 4
        },
        end: {
          line: 479,
          column: 25
        }
      },
      "155": {
        start: {
          line: 480,
          column: 4
        },
        end: {
          line: 480,
          column: 11
        }
      },
      "156": {
        start: {
          line: 483,
          column: 30
        },
        end: {
          line: 511,
          column: 3
        }
      },
      "157": {
        start: {
          line: 484,
          column: 4
        },
        end: {
          line: 484,
          column: 68
        }
      },
      "158": {
        start: {
          line: 484,
          column: 23
        },
        end: {
          line: 484,
          column: 68
        }
      },
      "159": {
        start: {
          line: 485,
          column: 4
        },
        end: {
          line: 510,
          column: 9
        }
      },
      "160": {
        start: {
          line: 488,
          column: 8
        },
        end: {
          line: 499,
          column: 9
        }
      },
      "161": {
        start: {
          line: 489,
          column: 10
        },
        end: {
          line: 489,
          column: 56
        }
      },
      "162": {
        start: {
          line: 490,
          column: 10
        },
        end: {
          line: 490,
          column: 45
        }
      },
      "163": {
        start: {
          line: 491,
          column: 10
        },
        end: {
          line: 491,
          column: 29
        }
      },
      "164": {
        start: {
          line: 491,
          column: 18
        },
        end: {
          line: 491,
          column: 29
        }
      },
      "165": {
        start: {
          line: 492,
          column: 10
        },
        end: {
          line: 498,
          column: 11
        }
      },
      "166": {
        start: {
          line: 493,
          column: 27
        },
        end: {
          line: 493,
          column: 39
        }
      },
      "167": {
        start: {
          line: 494,
          column: 12
        },
        end: {
          line: 497,
          column: 15
        }
      },
      "168": {
        start: {
          line: 502,
          column: 8
        },
        end: {
          line: 502,
          column: 27
        }
      },
      "169": {
        start: {
          line: 503,
          column: 8
        },
        end: {
          line: 503,
          column: 54
        }
      },
      "170": {
        start: {
          line: 504,
          column: 23
        },
        end: {
          line: 504,
          column: 35
        }
      },
      "171": {
        start: {
          line: 505,
          column: 8
        },
        end: {
          line: 509,
          column: 11
        }
      },
      "172": {
        start: {
          line: 513,
          column: 25
        },
        end: {
          line: 544,
          column: 3
        }
      },
      "173": {
        start: {
          line: 514,
          column: 29
        },
        end: {
          line: 514,
          column: 75
        }
      },
      "174": {
        start: {
          line: 515,
          column: 4
        },
        end: {
          line: 515,
          column: 34
        }
      },
      "175": {
        start: {
          line: 517,
          column: 15
        },
        end: {
          line: 517,
          column: 53
        }
      },
      "176": {
        start: {
          line: 518,
          column: 16
        },
        end: {
          line: 518,
          column: 80
        }
      },
      "177": {
        start: {
          line: 520,
          column: 17
        },
        end: {
          line: 535,
          column: 5
        }
      },
      "178": {
        start: {
          line: 536,
          column: 19
        },
        end: {
          line: 538,
          column: 16
        }
      },
      "179": {
        start: {
          line: 537,
          column: 20
        },
        end: {
          line: 537,
          column: 81
        }
      },
      "180": {
        start: {
          line: 541,
          column: 6
        },
        end: {
          line: 541,
          column: 99
        }
      },
      "181": {
        start: {
          line: 542,
          column: 4
        },
        end: {
          line: 542,
          column: 96
        }
      },
      "182": {
        start: {
          line: 543,
          column: 4
        },
        end: {
          line: 543,
          column: 26
        }
      },
      "183": {
        start: {
          line: 547,
          column: 4
        },
        end: {
          line: 572,
          column: 6
        }
      },
      "184": {
        start: {
          line: 548,
          column: 6
        },
        end: {
          line: 568,
          column: 7
        }
      },
      "185": {
        start: {
          line: 549,
          column: 23
        },
        end: {
          line: 549,
          column: 35
        }
      },
      "186": {
        start: {
          line: 550,
          column: 8
        },
        end: {
          line: 553,
          column: 11
        }
      },
      "187": {
        start: {
          line: 554,
          column: 8
        },
        end: {
          line: 565,
          column: 11
        }
      },
      "188": {
        start: {
          line: 566,
          column: 8
        },
        end: {
          line: 566,
          column: 36
        }
      },
      "189": {
        start: {
          line: 567,
          column: 8
        },
        end: {
          line: 567,
          column: 26
        }
      },
      "190": {
        start: {
          line: 569,
          column: 6
        },
        end: {
          line: 569,
          column: 25
        }
      },
      "191": {
        start: {
          line: 570,
          column: 6
        },
        end: {
          line: 570,
          column: 29
        }
      },
      "192": {
        start: {
          line: 571,
          column: 6
        },
        end: {
          line: 571,
          column: 32
        }
      },
      "193": {
        start: {
          line: 575,
          column: 4
        },
        end: {
          line: 575,
          column: 23
        }
      },
      "194": {
        start: {
          line: 576,
          column: 4
        },
        end: {
          line: 576,
          column: 39
        }
      },
      "195": {
        start: {
          line: 577,
          column: 4
        },
        end: {
          line: 577,
          column: 43
        }
      },
      "196": {
        start: {
          line: 578,
          column: 4
        },
        end: {
          line: 580,
          column: 6
        }
      },
      "197": {
        start: {
          line: 581,
          column: 19
        },
        end: {
          line: 581,
          column: 31
        }
      },
      "198": {
        start: {
          line: 582,
          column: 4
        },
        end: {
          line: 585,
          column: 7
        }
      },
      "199": {
        start: {
          line: 589,
          column: 19
        },
        end: {
          line: 589,
          column: 31
        }
      },
      "200": {
        start: {
          line: 590,
          column: 16
        },
        end: {
          line: 590,
          column: 17
        }
      },
      "201": {
        start: {
          line: 591,
          column: 4
        },
        end: {
          line: 609,
          column: 6
        }
      },
      "202": {
        start: {
          line: 592,
          column: 19
        },
        end: {
          line: 592,
          column: 37
        }
      },
      "203": {
        start: {
          line: 593,
          column: 6
        },
        end: {
          line: 608,
          column: 7
        }
      },
      "204": {
        start: {
          line: 595,
          column: 10
        },
        end: {
          line: 595,
          column: 74
        }
      },
      "205": {
        start: {
          line: 596,
          column: 10
        },
        end: {
          line: 600,
          column: 11
        }
      },
      "206": {
        start: {
          line: 597,
          column: 12
        },
        end: {
          line: 597,
          column: 37
        }
      },
      "207": {
        start: {
          line: 598,
          column: 12
        },
        end: {
          line: 598,
          column: 26
        }
      },
      "208": {
        start: {
          line: 599,
          column: 12
        },
        end: {
          line: 599,
          column: 20
        }
      },
      "209": {
        start: {
          line: 601,
          column: 10
        },
        end: {
          line: 601,
          column: 16
        }
      },
      "210": {
        start: {
          line: 603,
          column: 10
        },
        end: {
          line: 603,
          column: 70
        }
      },
      "211": {
        start: {
          line: 604,
          column: 10
        },
        end: {
          line: 604,
          column: 16
        }
      },
      "212": {
        start: {
          line: 606,
          column: 10
        },
        end: {
          line: 606,
          column: 39
        }
      },
      "213": {
        start: {
          line: 607,
          column: 10
        },
        end: {
          line: 607,
          column: 16
        }
      },
      "214": {
        start: {
          line: 613,
          column: 4
        },
        end: {
          line: 616,
          column: 5
        }
      },
      "215": {
        start: {
          line: 614,
          column: 6
        },
        end: {
          line: 614,
          column: 26
        }
      },
      "216": {
        start: {
          line: 615,
          column: 6
        },
        end: {
          line: 615,
          column: 25
        }
      },
      "217": {
        start: {
          line: 618,
          column: 2
        },
        end: {
          line: 624,
          column: 47
        }
      },
      "218": {
        start: {
          line: 619,
          column: 4
        },
        end: {
          line: 619,
          column: 37
        }
      },
      "219": {
        start: {
          line: 620,
          column: 4
        },
        end: {
          line: 620,
          column: 20
        }
      },
      "220": {
        start: {
          line: 621,
          column: 4
        },
        end: {
          line: 621,
          column: 23
        }
      },
      "221": {
        start: {
          line: 622,
          column: 4
        },
        end: {
          line: 622,
          column: 19
        }
      },
      "222": {
        start: {
          line: 623,
          column: 4
        },
        end: {
          line: 623,
          column: 45
        }
      },
      "223": {
        start: {
          line: 623,
          column: 30
        },
        end: {
          line: 623,
          column: 45
        }
      },
      "224": {
        start: {
          line: 626,
          column: 27
        },
        end: {
          line: 633,
          column: 3
        }
      },
      "225": {
        start: {
          line: 627,
          column: 4
        },
        end: {
          line: 632,
          column: 5
        }
      },
      "226": {
        start: {
          line: 628,
          column: 6
        },
        end: {
          line: 628,
          column: 41
        }
      },
      "227": {
        start: {
          line: 629,
          column: 6
        },
        end: {
          line: 629,
          column: 37
        }
      },
      "228": {
        start: {
          line: 630,
          column: 6
        },
        end: {
          line: 630,
          column: 37
        }
      },
      "229": {
        start: {
          line: 631,
          column: 6
        },
        end: {
          line: 631,
          column: 51
        }
      },
      "230": {
        start: {
          line: 635,
          column: 41
        },
        end: {
          line: 667,
          column: 3
        }
      },
      "231": {
        start: {
          line: 636,
          column: 4
        },
        end: {
          line: 645,
          column: 5
        }
      },
      "232": {
        start: {
          line: 644,
          column: 6
        },
        end: {
          line: 644,
          column: 13
        }
      },
      "233": {
        start: {
          line: 646,
          column: 4
        },
        end: {
          line: 666,
          column: 6
        }
      },
      "234": {
        start: {
          line: 650,
          column: 8
        },
        end: {
          line: 663,
          column: 9
        }
      },
      "235": {
        start: {
          line: 659,
          column: 10
        },
        end: {
          line: 661,
          column: 13
        }
      },
      "236": {
        start: {
          line: 662,
          column: 10
        },
        end: {
          line: 662,
          column: 49
        }
      },
      "237": {
        start: {
          line: 669,
          column: 27
        },
        end: {
          line: 671,
          column: 3
        }
      },
      "238": {
        start: {
          line: 670,
          column: 4
        },
        end: {
          line: 670,
          column: 81
        }
      },
      "239": {
        start: {
          line: 673,
          column: 24
        },
        end: {
          line: 712,
          column: 3
        }
      },
      "240": {
        start: {
          line: 674,
          column: 4
        },
        end: {
          line: 676,
          column: 5
        }
      },
      "241": {
        start: {
          line: 675,
          column: 6
        },
        end: {
          line: 675,
          column: 13
        }
      },
      "242": {
        start: {
          line: 682,
          column: 21
        },
        end: {
          line: 685,
          column: 5
        }
      },
      "243": {
        start: {
          line: 687,
          column: 4
        },
        end: {
          line: 711,
          column: 7
        }
      },
      "244": {
        start: {
          line: 689,
          column: 21
        },
        end: {
          line: 689,
          column: 44
        }
      },
      "245": {
        start: {
          line: 690,
          column: 8
        },
        end: {
          line: 708,
          column: 9
        }
      },
      "246": {
        start: {
          line: 691,
          column: 31
        },
        end: {
          line: 691,
          column: 33
        }
      },
      "247": {
        start: {
          line: 692,
          column: 10
        },
        end: {
          line: 703,
          column: 13
        }
      },
      "248": {
        start: {
          line: 693,
          column: 12
        },
        end: {
          line: 702,
          column: 13
        }
      },
      "249": {
        start: {
          line: 694,
          column: 25
        },
        end: {
          line: 694,
          column: 35
        }
      },
      "250": {
        start: {
          line: 695,
          column: 14
        },
        end: {
          line: 701,
          column: 16
        }
      },
      "251": {
        start: {
          line: 699,
          column: 33
        },
        end: {
          line: 699,
          column: 77
        }
      },
      "252": {
        start: {
          line: 704,
          column: 10
        },
        end: {
          line: 704,
          column: 45
        }
      },
      "253": {
        start: {
          line: 705,
          column: 10
        },
        end: {
          line: 707,
          column: 13
        }
      },
      "254": {
        start: {
          line: 706,
          column: 12
        },
        end: {
          line: 706,
          column: 40
        }
      },
      "255": {
        start: {
          line: 710,
          column: 22
        },
        end: {
          line: 710,
          column: 40
        }
      },
      "256": {
        start: {
          line: 714,
          column: 23
        },
        end: {
          line: 720,
          column: 3
        }
      },
      "257": {
        start: {
          line: 715,
          column: 4
        },
        end: {
          line: 719,
          column: 5
        }
      },
      "258": {
        start: {
          line: 716,
          column: 6
        },
        end: {
          line: 716,
          column: 100
        }
      },
      "259": {
        start: {
          line: 716,
          column: 77
        },
        end: {
          line: 716,
          column: 97
        }
      },
      "260": {
        start: {
          line: 717,
          column: 11
        },
        end: {
          line: 719,
          column: 5
        }
      },
      "261": {
        start: {
          line: 718,
          column: 6
        },
        end: {
          line: 718,
          column: 48
        }
      },
      "262": {
        start: {
          line: 723,
          column: 4
        },
        end: {
          line: 737,
          column: 6
        }
      },
      "263": {
        start: {
          line: 724,
          column: 6
        },
        end: {
          line: 724,
          column: 29
        }
      },
      "264": {
        start: {
          line: 725,
          column: 6
        },
        end: {
          line: 725,
          column: 32
        }
      },
      "265": {
        start: {
          line: 726,
          column: 6
        },
        end: {
          line: 726,
          column: 25
        }
      },
      "266": {
        start: {
          line: 727,
          column: 21
        },
        end: {
          line: 727,
          column: 24
        }
      },
      "267": {
        start: {
          line: 728,
          column: 6
        },
        end: {
          line: 730,
          column: 7
        }
      },
      "268": {
        start: {
          line: 729,
          column: 8
        },
        end: {
          line: 729,
          column: 38
        }
      },
      "269": {
        start: {
          line: 731,
          column: 21
        },
        end: {
          line: 731,
          column: 33
        }
      },
      "270": {
        start: {
          line: 732,
          column: 6
        },
        end: {
          line: 736,
          column: 9
        }
      },
      "271": {
        start: {
          line: 740,
          column: 34
        },
        end: {
          line: 752,
          column: 3
        }
      },
      "272": {
        start: {
          line: 741,
          column: 17
        },
        end: {
          line: 741,
          column: 38
        }
      },
      "273": {
        start: {
          line: 742,
          column: 4
        },
        end: {
          line: 751,
          column: 5
        }
      },
      "274": {
        start: {
          line: 743,
          column: 26
        },
        end: {
          line: 749,
          column: 7
        }
      },
      "275": {
        start: {
          line: 750,
          column: 6
        },
        end: {
          line: 750,
          column: 31
        }
      },
      "276": {
        start: {
          line: 754,
          column: 33
        },
        end: {
          line: 756,
          column: 3
        }
      },
      "277": {
        start: {
          line: 755,
          column: 4
        },
        end: {
          line: 755,
          column: 30
        }
      },
      "278": {
        start: {
          line: 757,
          column: 43
        },
        end: {
          line: 757,
          column: 48
        }
      },
      "279": {
        start: {
          line: 759,
          column: 2
        },
        end: {
          line: 767,
          column: 3
        }
      },
      "280": {
        start: {
          line: 764,
          column: 4
        },
        end: {
          line: 764,
          column: 73
        }
      },
      "281": {
        start: {
          line: 766,
          column: 4
        },
        end: {
          line: 766,
          column: 72
        }
      },
      "282": {
        start: {
          line: 768,
          column: 19
        },
        end: {
          line: 768,
          column: 21
        }
      },
      "283": {
        start: {
          line: 769,
          column: 2
        },
        end: {
          line: 771,
          column: 3
        }
      },
      "284": {
        start: {
          line: 770,
          column: 4
        },
        end: {
          line: 770,
          column: 34
        }
      },
      "285": {
        start: {
          line: 772,
          column: 28
        },
        end: {
          line: 772,
          column: 32
        }
      },
      "286": {
        start: {
          line: 773,
          column: 23
        },
        end: {
          line: 773,
          column: 27
        }
      },
      "287": {
        start: {
          line: 774,
          column: 26
        },
        end: {
          line: 774,
          column: 30
        }
      },
      "288": {
        start: {
          line: 776,
          column: 2
        },
        end: {
          line: 779,
          column: 5
        }
      },
      "289": {
        start: {
          line: 777,
          column: 18
        },
        end: {
          line: 777,
          column: 55
        }
      },
      "290": {
        start: {
          line: 778,
          column: 4
        },
        end: {
          line: 778,
          column: 63
        }
      },
      "291": {
        start: {
          line: 778,
          column: 22
        },
        end: {
          line: 778,
          column: 63
        }
      },
      "292": {
        start: {
          line: 781,
          column: 2
        },
        end: {
          line: 805,
          column: 3
        }
      },
      "293": {
        start: {
          line: 788,
          column: 4
        },
        end: {
          line: 790,
          column: 5
        }
      },
      "294": {
        start: {
          line: 789,
          column: 6
        },
        end: {
          line: 789,
          column: 72
        }
      },
      "295": {
        start: {
          line: 791,
          column: 4
        },
        end: {
          line: 804,
          column: 6
        }
      },
      "296": {
        start: {
          line: 806,
          column: 2
        },
        end: {
          line: 818,
          column: 3
        }
      },
      "297": {
        start: {
          line: 807,
          column: 4
        },
        end: {
          line: 817,
          column: 6
        }
      },
      "298": {
        start: {
          line: 819,
          column: 2
        },
        end: {
          line: 832,
          column: 3
        }
      },
      "299": {
        start: {
          line: 820,
          column: 4
        },
        end: {
          line: 831,
          column: 6
        }
      },
      "300": {
        start: {
          line: 833,
          column: 2
        },
        end: {
          line: 1296,
          column: 4
        }
      },
      "301": {
        start: {
          line: 882,
          column: 24
        },
        end: {
          line: 884,
          column: 35
        }
      },
      "302": {
        start: {
          line: 892,
          column: 24
        },
        end: {
          line: 894,
          column: 35
        }
      },
      "303": {
        start: {
          line: 990,
          column: 24
        },
        end: {
          line: 990,
          column: 86
        }
      },
      "304": {
        start: {
          line: 1187,
          column: 24
        },
        end: {
          line: 1193,
          column: 26
        }
      },
      "305": {
        start: {
          line: 1210,
          column: 35
        },
        end: {
          line: 1210,
          column: 48
        }
      },
      "306": {
        start: {
          line: 1219,
          column: 35
        },
        end: {
          line: 1219,
          column: 50
        }
      },
      "307": {
        start: {
          line: 1298,
          column: 0
        },
        end: {
          line: 1300,
          column: 2
        }
      },
      "308": {
        start: {
          line: 1302,
          column: 27
        },
        end: {
          line: 1310,
          column: 2
        }
      },
      "309": {
        start: {
          line: 1302,
          column: 42
        },
        end: {
          line: 1310,
          column: 1
        }
      },
      "310": {
        start: {
          line: 1312,
          column: 24
        },
        end: {
          line: 1326,
          column: 1
        }
      },
      "311": {
        start: {
          line: 1313,
          column: 18
        },
        end: {
          line: 1313,
          column: 45
        }
      },
      "312": {
        start: {
          line: 1314,
          column: 21
        },
        end: {
          line: 1314,
          column: 51
        }
      },
      "313": {
        start: {
          line: 1315,
          column: 20
        },
        end: {
          line: 1315,
          column: 42
        }
      },
      "314": {
        start: {
          line: 1316,
          column: 38
        },
        end: {
          line: 1316,
          column: 85
        }
      },
      "315": {
        start: {
          line: 1317,
          column: 30
        },
        end: {
          line: 1317,
          column: 62
        }
      },
      "316": {
        start: {
          line: 1319,
          column: 2
        },
        end: {
          line: 1325,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "generatePerformanceProfile",
        decl: {
          start: {
            line: 66,
            column: 16
          },
          end: {
            line: 66,
            column: 42
          }
        },
        loc: {
          start: {
            line: 66,
            column: 49
          },
          end: {
            line: 107,
            column: 1
          }
        },
        line: 66
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 109,
            column: 15
          },
          end: {
            line: 109,
            column: 16
          }
        },
        loc: {
          start: {
            line: 109,
            column: 27
          },
          end: {
            line: 183,
            column: 1
          }
        },
        line: 109
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 219,
            column: 37
          },
          end: {
            line: 219,
            column: 38
          }
        },
        loc: {
          start: {
            line: 219,
            column: 48
          },
          end: {
            line: 1297,
            column: 1
          }
        },
        line: 219
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 239,
            column: 23
          },
          end: {
            line: 239,
            column: 24
          }
        },
        loc: {
          start: {
            line: 239,
            column: 32
          },
          end: {
            line: 246,
            column: 3
          }
        },
        line: 239
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 293,
            column: 23
          },
          end: {
            line: 293,
            column: 24
          }
        },
        loc: {
          start: {
            line: 293,
            column: 33
          },
          end: {
            line: 393,
            column: 3
          }
        },
        line: 293
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 293,
            column: 33
          },
          end: {
            line: 293,
            column: 34
          }
        },
        loc: {
          start: {
            line: 293,
            column: 44
          },
          end: {
            line: 393,
            column: 3
          }
        },
        line: 293
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 300,
            column: 38
          },
          end: {
            line: 300,
            column: 39
          }
        },
        loc: {
          start: {
            line: 300,
            column: 47
          },
          end: {
            line: 305,
            column: 7
          }
        },
        line: 300
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 331,
            column: 26
          },
          end: {
            line: 331,
            column: 27
          }
        },
        loc: {
          start: {
            line: 331,
            column: 37
          },
          end: {
            line: 342,
            column: 11
          }
        },
        line: 331
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 395,
            column: 31
          },
          end: {
            line: 395,
            column: 32
          }
        },
        loc: {
          start: {
            line: 395,
            column: 52
          },
          end: {
            line: 400,
            column: 3
          }
        },
        line: 395
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 402,
            column: 36
          },
          end: {
            line: 402,
            column: 37
          }
        },
        loc: {
          start: {
            line: 402,
            column: 57
          },
          end: {
            line: 404,
            column: 3
          }
        },
        line: 402
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 406,
            column: 23
          },
          end: {
            line: 406,
            column: 24
          }
        },
        loc: {
          start: {
            line: 406,
            column: 29
          },
          end: {
            line: 440,
            column: 3
          }
        },
        line: 406
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 436,
            column: 20
          },
          end: {
            line: 436,
            column: 21
          }
        },
        loc: {
          start: {
            line: 436,
            column: 32
          },
          end: {
            line: 436,
            column: 50
          }
        },
        line: 436
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 442,
            column: 24
          },
          end: {
            line: 442,
            column: 25
          }
        },
        loc: {
          start: {
            line: 442,
            column: 32
          },
          end: {
            line: 462,
            column: 3
          }
        },
        line: 442
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 464,
            column: 22
          },
          end: {
            line: 464,
            column: 23
          }
        },
        loc: {
          start: {
            line: 464,
            column: 28
          },
          end: {
            line: 481,
            column: 3
          }
        },
        line: 464
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 483,
            column: 30
          },
          end: {
            line: 483,
            column: 31
          }
        },
        loc: {
          start: {
            line: 483,
            column: 59
          },
          end: {
            line: 511,
            column: 3
          }
        },
        line: 483
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 487,
            column: 12
          },
          end: {
            line: 487,
            column: 13
          }
        },
        loc: {
          start: {
            line: 487,
            column: 24
          },
          end: {
            line: 500,
            column: 7
          }
        },
        line: 487
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 501,
            column: 13
          },
          end: {
            line: 501,
            column: 14
          }
        },
        loc: {
          start: {
            line: 501,
            column: 22
          },
          end: {
            line: 510,
            column: 7
          }
        },
        line: 501
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 513,
            column: 25
          },
          end: {
            line: 513,
            column: 26
          }
        },
        loc: {
          start: {
            line: 513,
            column: 33
          },
          end: {
            line: 544,
            column: 3
          }
        },
        line: 513
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 537,
            column: 11
          },
          end: {
            line: 537,
            column: 12
          }
        },
        loc: {
          start: {
            line: 537,
            column: 20
          },
          end: {
            line: 537,
            column: 81
          }
        },
        line: 537
      },
      "19": {
        name: "handleSuccess",
        decl: {
          start: {
            line: 546,
            column: 11
          },
          end: {
            line: 546,
            column: 24
          }
        },
        loc: {
          start: {
            line: 546,
            column: 27
          },
          end: {
            line: 573,
            column: 3
          }
        },
        line: 546
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 547,
            column: 11
          },
          end: {
            line: 547,
            column: 12
          }
        },
        loc: {
          start: {
            line: 547,
            column: 23
          },
          end: {
            line: 572,
            column: 5
          }
        },
        line: 547
      },
      "21": {
        name: "startEventStream",
        decl: {
          start: {
            line: 574,
            column: 17
          },
          end: {
            line: 574,
            column: 33
          }
        },
        loc: {
          start: {
            line: 574,
            column: 39
          },
          end: {
            line: 586,
            column: 3
          }
        },
        line: 574
      },
      "22": {
        name: "handleEvents",
        decl: {
          start: {
            line: 588,
            column: 11
          },
          end: {
            line: 588,
            column: 23
          }
        },
        loc: {
          start: {
            line: 588,
            column: 26
          },
          end: {
            line: 610,
            column: 3
          }
        },
        line: 588
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 591,
            column: 11
          },
          end: {
            line: 591,
            column: 12
          }
        },
        loc: {
          start: {
            line: 591,
            column: 18
          },
          end: {
            line: 609,
            column: 5
          }
        },
        line: 591
      },
      "24": {
        name: "closeEventStream",
        decl: {
          start: {
            line: 612,
            column: 11
          },
          end: {
            line: 612,
            column: 27
          }
        },
        loc: {
          start: {
            line: 612,
            column: 30
          },
          end: {
            line: 617,
            column: 3
          }
        },
        line: 612
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 618,
            column: 12
          },
          end: {
            line: 618,
            column: 13
          }
        },
        loc: {
          start: {
            line: 618,
            column: 18
          },
          end: {
            line: 624,
            column: 3
          }
        },
        line: 618
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 626,
            column: 27
          },
          end: {
            line: 626,
            column: 28
          }
        },
        loc: {
          start: {
            line: 626,
            column: 33
          },
          end: {
            line: 633,
            column: 3
          }
        },
        line: 626
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 635,
            column: 41
          },
          end: {
            line: 635,
            column: 42
          }
        },
        loc: {
          start: {
            line: 635,
            column: 47
          },
          end: {
            line: 667,
            column: 3
          }
        },
        line: 635
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 649,
            column: 6
          },
          end: {
            line: 649,
            column: 7
          }
        },
        loc: {
          start: {
            line: 649,
            column: 18
          },
          end: {
            line: 664,
            column: 7
          }
        },
        line: 649
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 669,
            column: 27
          },
          end: {
            line: 669,
            column: 28
          }
        },
        loc: {
          start: {
            line: 669,
            column: 33
          },
          end: {
            line: 671,
            column: 3
          }
        },
        line: 669
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 673,
            column: 24
          },
          end: {
            line: 673,
            column: 25
          }
        },
        loc: {
          start: {
            line: 673,
            column: 30
          },
          end: {
            line: 712,
            column: 3
          }
        },
        line: 673
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 688,
            column: 12
          },
          end: {
            line: 688,
            column: 13
          }
        },
        loc: {
          start: {
            line: 688,
            column: 21
          },
          end: {
            line: 709,
            column: 7
          }
        },
        line: 688
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 692,
            column: 25
          },
          end: {
            line: 692,
            column: 26
          }
        },
        loc: {
          start: {
            line: 692,
            column: 35
          },
          end: {
            line: 703,
            column: 11
          }
        },
        line: 692
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 699,
            column: 23
          },
          end: {
            line: 699,
            column: 24
          }
        },
        loc: {
          start: {
            line: 699,
            column: 33
          },
          end: {
            line: 699,
            column: 77
          }
        },
        line: 699
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 705,
            column: 25
          },
          end: {
            line: 705,
            column: 26
          }
        },
        loc: {
          start: {
            line: 705,
            column: 35
          },
          end: {
            line: 707,
            column: 11
          }
        },
        line: 705
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 710,
            column: 13
          },
          end: {
            line: 710,
            column: 14
          }
        },
        loc: {
          start: {
            line: 710,
            column: 22
          },
          end: {
            line: 710,
            column: 40
          }
        },
        line: 710
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 714,
            column: 23
          },
          end: {
            line: 714,
            column: 24
          }
        },
        loc: {
          start: {
            line: 714,
            column: 29
          },
          end: {
            line: 720,
            column: 3
          }
        },
        line: 714
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 716,
            column: 65
          },
          end: {
            line: 716,
            column: 66
          }
        },
        loc: {
          start: {
            line: 716,
            column: 77
          },
          end: {
            line: 716,
            column: 97
          }
        },
        line: 716
      },
      "38": {
        name: "handleError",
        decl: {
          start: {
            line: 722,
            column: 11
          },
          end: {
            line: 722,
            column: 22
          }
        },
        loc: {
          start: {
            line: 722,
            column: 28
          },
          end: {
            line: 738,
            column: 3
          }
        },
        line: 722
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 723,
            column: 11
          },
          end: {
            line: 723,
            column: 12
          }
        },
        loc: {
          start: {
            line: 723,
            column: 22
          },
          end: {
            line: 737,
            column: 5
          }
        },
        line: 723
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 740,
            column: 34
          },
          end: {
            line: 740,
            column: 35
          }
        },
        loc: {
          start: {
            line: 740,
            column: 45
          },
          end: {
            line: 752,
            column: 3
          }
        },
        line: 740
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 754,
            column: 33
          },
          end: {
            line: 754,
            column: 34
          }
        },
        loc: {
          start: {
            line: 754,
            column: 39
          },
          end: {
            line: 756,
            column: 3
          }
        },
        line: 754
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 776,
            column: 33
          },
          end: {
            line: 776,
            column: 34
          }
        },
        loc: {
          start: {
            line: 776,
            column: 43
          },
          end: {
            line: 779,
            column: 3
          }
        },
        line: 776
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 881,
            column: 49
          },
          end: {
            line: 881,
            column: 50
          }
        },
        loc: {
          start: {
            line: 882,
            column: 24
          },
          end: {
            line: 884,
            column: 35
          }
        },
        line: 882
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 891,
            column: 50
          },
          end: {
            line: 891,
            column: 51
          }
        },
        loc: {
          start: {
            line: 892,
            column: 24
          },
          end: {
            line: 894,
            column: 35
          }
        },
        line: 892
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 989,
            column: 35
          },
          end: {
            line: 989,
            column: 36
          }
        },
        loc: {
          start: {
            line: 990,
            column: 24
          },
          end: {
            line: 990,
            column: 86
          }
        },
        line: 990
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 1186,
            column: 42
          },
          end: {
            line: 1186,
            column: 43
          }
        },
        loc: {
          start: {
            line: 1187,
            column: 24
          },
          end: {
            line: 1193,
            column: 26
          }
        },
        line: 1187
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 1210,
            column: 29
          },
          end: {
            line: 1210,
            column: 30
          }
        },
        loc: {
          start: {
            line: 1210,
            column: 35
          },
          end: {
            line: 1210,
            column: 48
          }
        },
        line: 1210
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 1219,
            column: 29
          },
          end: {
            line: 1219,
            column: 30
          }
        },
        loc: {
          start: {
            line: 1219,
            column: 35
          },
          end: {
            line: 1219,
            column: 50
          }
        },
        line: 1219
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 1302,
            column: 27
          },
          end: {
            line: 1302,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1302,
            column: 42
          },
          end: {
            line: 1310,
            column: 1
          }
        },
        line: 1302
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 1312,
            column: 24
          },
          end: {
            line: 1312,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1312,
            column: 35
          },
          end: {
            line: 1326,
            column: 1
          }
        },
        line: 1312
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 87,
            column: 20
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 87,
            column: 10
          }
        }, {
          start: {
            line: 87,
            column: 14
          },
          end: {
            line: 87,
            column: 20
          }
        }],
        line: 87
      },
      "1": {
        loc: {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 118,
            column: 48
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 117,
            column: 10
          },
          end: {
            line: 117,
            column: 45
          }
        }, {
          start: {
            line: 118,
            column: 10
          },
          end: {
            line: 118,
            column: 48
          }
        }],
        line: 116
      },
      "2": {
        loc: {
          start: {
            line: 130,
            column: 21
          },
          end: {
            line: 130,
            column: 74
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 130,
            column: 53
          },
          end: {
            line: 130,
            column: 62
          }
        }, {
          start: {
            line: 130,
            column: 65
          },
          end: {
            line: 130,
            column: 74
          }
        }],
        line: 130
      },
      "3": {
        loc: {
          start: {
            line: 132,
            column: 23
          },
          end: {
            line: 132,
            column: 76
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 132,
            column: 55
          },
          end: {
            line: 132,
            column: 64
          }
        }, {
          start: {
            line: 132,
            column: 67
          },
          end: {
            line: 132,
            column: 76
          }
        }],
        line: 132
      },
      "4": {
        loc: {
          start: {
            line: 180,
            column: 8
          },
          end: {
            line: 180,
            column: 95
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 180,
            column: 40
          },
          end: {
            line: 180,
            column: 71
          }
        }, {
          start: {
            line: 180,
            column: 74
          },
          end: {
            line: 180,
            column: 95
          }
        }],
        line: 180
      },
      "5": {
        loc: {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 221,
            column: 17
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 221,
            column: 15
          },
          end: {
            line: 221,
            column: 17
          }
        }],
        line: 221
      },
      "6": {
        loc: {
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 222,
            column: 17
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 222,
            column: 15
          },
          end: {
            line: 222,
            column: 17
          }
        }],
        line: 222
      },
      "7": {
        loc: {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 223,
            column: 12
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 223,
            column: 10
          },
          end: {
            line: 223,
            column: 12
          }
        }],
        line: 223
      },
      "8": {
        loc: {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 13
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 224,
            column: 10
          },
          end: {
            line: 224,
            column: 13
          }
        }],
        line: 224
      },
      "9": {
        loc: {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 11
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 225,
            column: 8
          },
          end: {
            line: 225,
            column: 11
          }
        }],
        line: 225
      },
      "10": {
        loc: {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 13
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 226,
            column: 8
          },
          end: {
            line: 226,
            column: 13
          }
        }],
        line: 226
      },
      "11": {
        loc: {
          start: {
            line: 255,
            column: 58
          },
          end: {
            line: 255,
            column: 83
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 255,
            column: 58
          },
          end: {
            line: 255,
            column: 71
          }
        }, {
          start: {
            line: 255,
            column: 75
          },
          end: {
            line: 255,
            column: 83
          }
        }],
        line: 255
      },
      "12": {
        loc: {
          start: {
            line: 256,
            column: 66
          },
          end: {
            line: 256,
            column: 90
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 256,
            column: 66
          },
          end: {
            line: 256,
            column: 84
          }
        }, {
          start: {
            line: 256,
            column: 88
          },
          end: {
            line: 256,
            column: 90
          }
        }],
        line: 256
      },
      "13": {
        loc: {
          start: {
            line: 258,
            column: 46
          },
          end: {
            line: 258,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 258,
            column: 46
          },
          end: {
            line: 258,
            column: 53
          }
        }, {
          start: {
            line: 258,
            column: 57
          },
          end: {
            line: 258,
            column: 59
          }
        }],
        line: 258
      },
      "14": {
        loc: {
          start: {
            line: 259,
            column: 46
          },
          end: {
            line: 259,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 259,
            column: 46
          },
          end: {
            line: 259,
            column: 53
          }
        }, {
          start: {
            line: 259,
            column: 57
          },
          end: {
            line: 259,
            column: 59
          }
        }],
        line: 259
      },
      "15": {
        loc: {
          start: {
            line: 260,
            column: 46
          },
          end: {
            line: 260,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 260,
            column: 46
          },
          end: {
            line: 260,
            column: 53
          }
        }, {
          start: {
            line: 260,
            column: 57
          },
          end: {
            line: 260,
            column: 59
          }
        }],
        line: 260
      },
      "16": {
        loc: {
          start: {
            line: 261,
            column: 54
          },
          end: {
            line: 261,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 261,
            column: 54
          },
          end: {
            line: 261,
            column: 65
          }
        }, {
          start: {
            line: 261,
            column: 69
          },
          end: {
            line: 261,
            column: 71
          }
        }],
        line: 261
      },
      "17": {
        loc: {
          start: {
            line: 263,
            column: 54
          },
          end: {
            line: 263,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 263,
            column: 54
          },
          end: {
            line: 263,
            column: 65
          }
        }, {
          start: {
            line: 263,
            column: 69
          },
          end: {
            line: 263,
            column: 71
          }
        }],
        line: 263
      },
      "18": {
        loc: {
          start: {
            line: 264,
            column: 72
          },
          end: {
            line: 264,
            column: 98
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 264,
            column: 72
          },
          end: {
            line: 264,
            column: 92
          }
        }, {
          start: {
            line: 264,
            column: 96
          },
          end: {
            line: 264,
            column: 98
          }
        }],
        line: 264
      },
      "19": {
        loc: {
          start: {
            line: 271,
            column: 6
          },
          end: {
            line: 271,
            column: 68
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 271,
            column: 6
          },
          end: {
            line: 271,
            column: 28
          }
        }, {
          start: {
            line: 271,
            column: 32
          },
          end: {
            line: 271,
            column: 68
          }
        }],
        line: 271
      },
      "20": {
        loc: {
          start: {
            line: 295,
            column: 4
          },
          end: {
            line: 307,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 295,
            column: 4
          },
          end: {
            line: 307,
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
        line: 295
      },
      "21": {
        loc: {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 296,
            column: 46
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 296,
            column: 46
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
        line: 296
      },
      "22": {
        loc: {
          start: {
            line: 309,
            column: 4
          },
          end: {
            line: 320,
            column: 30
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 309,
            column: 4
          },
          end: {
            line: 320,
            column: 30
          }
        }, {
          start: {
            line: 320,
            column: 11
          },
          end: {
            line: 320,
            column: 30
          }
        }],
        line: 309
      },
      "23": {
        loc: {
          start: {
            line: 309,
            column: 8
          },
          end: {
            line: 309,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 309,
            column: 8
          },
          end: {
            line: 309,
            column: 22
          }
        }, {
          start: {
            line: 309,
            column: 26
          },
          end: {
            line: 309,
            column: 38
          }
        }],
        line: 309
      },
      "24": {
        loc: {
          start: {
            line: 313,
            column: 6
          },
          end: {
            line: 319,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 313,
            column: 6
          },
          end: {
            line: 319,
            column: 7
          }
        }, {
          start: {
            line: 316,
            column: 13
          },
          end: {
            line: 319,
            column: 7
          }
        }],
        line: 313
      },
      "25": {
        loc: {
          start: {
            line: 322,
            column: 4
          },
          end: {
            line: 357,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 322,
            column: 4
          },
          end: {
            line: 357,
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
        line: 322
      },
      "26": {
        loc: {
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 356,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 356,
            column: 7
          }
        }, {
          start: {
            line: 345,
            column: 13
          },
          end: {
            line: 356,
            column: 7
          }
        }],
        line: 326
      },
      "27": {
        loc: {
          start: {
            line: 329,
            column: 8
          },
          end: {
            line: 344,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 329,
            column: 8
          },
          end: {
            line: 344,
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
        line: 329
      },
      "28": {
        loc: {
          start: {
            line: 349,
            column: 10
          },
          end: {
            line: 349,
            column: 46
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 349,
            column: 10
          },
          end: {
            line: 349,
            column: 46
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
        line: 349
      },
      "29": {
        loc: {
          start: {
            line: 358,
            column: 4
          },
          end: {
            line: 392,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 359,
            column: 6
          },
          end: {
            line: 361,
            column: 14
          }
        }, {
          start: {
            line: 362,
            column: 6
          },
          end: {
            line: 364,
            column: 14
          }
        }, {
          start: {
            line: 365,
            column: 6
          },
          end: {
            line: 367,
            column: 14
          }
        }, {
          start: {
            line: 368,
            column: 6
          },
          end: {
            line: 370,
            column: 14
          }
        }, {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 373,
            column: 14
          }
        }, {
          start: {
            line: 374,
            column: 6
          },
          end: {
            line: 376,
            column: 14
          }
        }, {
          start: {
            line: 377,
            column: 6
          },
          end: {
            line: 379,
            column: 14
          }
        }, {
          start: {
            line: 380,
            column: 6
          },
          end: {
            line: 382,
            column: 14
          }
        }, {
          start: {
            line: 383,
            column: 6
          },
          end: {
            line: 385,
            column: 14
          }
        }, {
          start: {
            line: 386,
            column: 6
          },
          end: {
            line: 388,
            column: 14
          }
        }, {
          start: {
            line: 389,
            column: 6
          },
          end: {
            line: 391,
            column: 14
          }
        }],
        line: 358
      },
      "30": {
        loc: {
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 399,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 397,
            column: 4
          },
          end: {
            line: 399,
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
        line: 397
      },
      "31": {
        loc: {
          start: {
            line: 407,
            column: 4
          },
          end: {
            line: 410,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 407,
            column: 4
          },
          end: {
            line: 410,
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
        line: 407
      },
      "32": {
        loc: {
          start: {
            line: 420,
            column: 4
          },
          end: {
            line: 433,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 420,
            column: 4
          },
          end: {
            line: 433,
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
        line: 420
      },
      "33": {
        loc: {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 429,
            column: 15
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 421,
            column: 19
          }
        }, {
          start: {
            line: 422,
            column: 6
          },
          end: {
            line: 422,
            column: 21
          }
        }, {
          start: {
            line: 423,
            column: 6
          },
          end: {
            line: 427,
            column: 7
          }
        }, {
          start: {
            line: 428,
            column: 6
          },
          end: {
            line: 428,
            column: 9
          }
        }, {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 429,
            column: 15
          }
        }],
        line: 421
      },
      "34": {
        loc: {
          start: {
            line: 424,
            column: 8
          },
          end: {
            line: 426,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 424,
            column: 8
          },
          end: {
            line: 424,
            column: 42
          }
        }, {
          start: {
            line: 425,
            column: 8
          },
          end: {
            line: 425,
            column: 42
          }
        }, {
          start: {
            line: 426,
            column: 8
          },
          end: {
            line: 426,
            column: 42
          }
        }],
        line: 424
      },
      "35": {
        loc: {
          start: {
            line: 435,
            column: 4
          },
          end: {
            line: 438,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 435,
            column: 4
          },
          end: {
            line: 438,
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
        line: 435
      },
      "36": {
        loc: {
          start: {
            line: 449,
            column: 25
          },
          end: {
            line: 449,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 449,
            column: 25
          },
          end: {
            line: 449,
            column: 32
          }
        }, {
          start: {
            line: 449,
            column: 36
          },
          end: {
            line: 449,
            column: 37
          }
        }],
        line: 449
      },
      "37": {
        loc: {
          start: {
            line: 450,
            column: 11
          },
          end: {
            line: 450,
            column: 25
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 450,
            column: 11
          },
          end: {
            line: 450,
            column: 20
          }
        }, {
          start: {
            line: 450,
            column: 24
          },
          end: {
            line: 450,
            column: 25
          }
        }],
        line: 450
      },
      "38": {
        loc: {
          start: {
            line: 484,
            column: 4
          },
          end: {
            line: 484,
            column: 68
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 484,
            column: 4
          },
          end: {
            line: 484,
            column: 68
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
        line: 484
      },
      "39": {
        loc: {
          start: {
            line: 488,
            column: 8
          },
          end: {
            line: 499,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 488,
            column: 8
          },
          end: {
            line: 499,
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
        line: 488
      },
      "40": {
        loc: {
          start: {
            line: 491,
            column: 10
          },
          end: {
            line: 491,
            column: 29
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 491,
            column: 10
          },
          end: {
            line: 491,
            column: 29
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
        line: 491
      },
      "41": {
        loc: {
          start: {
            line: 492,
            column: 10
          },
          end: {
            line: 498,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 492,
            column: 10
          },
          end: {
            line: 498,
            column: 11
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
        line: 492
      },
      "42": {
        loc: {
          start: {
            line: 522,
            column: 12
          },
          end: {
            line: 522,
            column: 71
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 522,
            column: 53
          },
          end: {
            line: 522,
            column: 55
          }
        }, {
          start: {
            line: 522,
            column: 58
          },
          end: {
            line: 522,
            column: 71
          }
        }],
        line: 522
      },
      "43": {
        loc: {
          start: {
            line: 522,
            column: 12
          },
          end: {
            line: 522,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 522,
            column: 12
          },
          end: {
            line: 522,
            column: 27
          }
        }, {
          start: {
            line: 522,
            column: 31
          },
          end: {
            line: 522,
            column: 50
          }
        }],
        line: 522
      },
      "44": {
        loc: {
          start: {
            line: 542,
            column: 33
          },
          end: {
            line: 542,
            column: 83
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 542,
            column: 74
          },
          end: {
            line: 542,
            column: 77
          }
        }, {
          start: {
            line: 542,
            column: 80
          },
          end: {
            line: 542,
            column: 83
          }
        }],
        line: 542
      },
      "45": {
        loc: {
          start: {
            line: 548,
            column: 6
          },
          end: {
            line: 568,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 548,
            column: 6
          },
          end: {
            line: 568,
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
        line: 548
      },
      "46": {
        loc: {
          start: {
            line: 548,
            column: 10
          },
          end: {
            line: 548,
            column: 87
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 548,
            column: 10
          },
          end: {
            line: 548,
            column: 39
          }
        }, {
          start: {
            line: 548,
            column: 43
          },
          end: {
            line: 548,
            column: 87
          }
        }],
        line: 548
      },
      "47": {
        loc: {
          start: {
            line: 593,
            column: 6
          },
          end: {
            line: 608,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 594,
            column: 8
          },
          end: {
            line: 601,
            column: 16
          }
        }, {
          start: {
            line: 602,
            column: 8
          },
          end: {
            line: 604,
            column: 16
          }
        }, {
          start: {
            line: 605,
            column: 8
          },
          end: {
            line: 607,
            column: 16
          }
        }],
        line: 593
      },
      "48": {
        loc: {
          start: {
            line: 596,
            column: 10
          },
          end: {
            line: 600,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 596,
            column: 10
          },
          end: {
            line: 600,
            column: 11
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
        line: 596
      },
      "49": {
        loc: {
          start: {
            line: 613,
            column: 4
          },
          end: {
            line: 616,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 613,
            column: 4
          },
          end: {
            line: 616,
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
        line: 613
      },
      "50": {
        loc: {
          start: {
            line: 613,
            column: 8
          },
          end: {
            line: 613,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 613,
            column: 8
          },
          end: {
            line: 613,
            column: 19
          }
        }, {
          start: {
            line: 613,
            column: 23
          },
          end: {
            line: 613,
            column: 40
          }
        }],
        line: 613
      },
      "51": {
        loc: {
          start: {
            line: 623,
            column: 4
          },
          end: {
            line: 623,
            column: 45
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 623,
            column: 4
          },
          end: {
            line: 623,
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
        line: 623
      },
      "52": {
        loc: {
          start: {
            line: 627,
            column: 4
          },
          end: {
            line: 632,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 627,
            column: 4
          },
          end: {
            line: 632,
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
        line: 627
      },
      "53": {
        loc: {
          start: {
            line: 627,
            column: 8
          },
          end: {
            line: 627,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 627,
            column: 8
          },
          end: {
            line: 627,
            column: 25
          }
        }, {
          start: {
            line: 627,
            column: 29
          },
          end: {
            line: 627,
            column: 37
          }
        }, {
          start: {
            line: 627,
            column: 41
          },
          end: {
            line: 627,
            column: 62
          }
        }],
        line: 627
      },
      "54": {
        loc: {
          start: {
            line: 636,
            column: 4
          },
          end: {
            line: 645,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 636,
            column: 4
          },
          end: {
            line: 645,
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
        line: 636
      },
      "55": {
        loc: {
          start: {
            line: 637,
            column: 6
          },
          end: {
            line: 642,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 637,
            column: 7
          },
          end: {
            line: 637,
            column: 34
          }
        }, {
          start: {
            line: 638,
            column: 8
          },
          end: {
            line: 638,
            column: 44
          }
        }, {
          start: {
            line: 639,
            column: 8
          },
          end: {
            line: 639,
            column: 65
          }
        }, {
          start: {
            line: 640,
            column: 7
          },
          end: {
            line: 640,
            column: 39
          }
        }, {
          start: {
            line: 641,
            column: 8
          },
          end: {
            line: 641,
            column: 49
          }
        }, {
          start: {
            line: 642,
            column: 8
          },
          end: {
            line: 642,
            column: 64
          }
        }],
        line: 637
      },
      "56": {
        loc: {
          start: {
            line: 650,
            column: 8
          },
          end: {
            line: 663,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 650,
            column: 8
          },
          end: {
            line: 663,
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
        line: 650
      },
      "57": {
        loc: {
          start: {
            line: 651,
            column: 10
          },
          end: {
            line: 657,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 651,
            column: 10
          },
          end: {
            line: 651,
            column: 39
          }
        }, {
          start: {
            line: 652,
            column: 10
          },
          end: {
            line: 652,
            column: 47
          }
        }, {
          start: {
            line: 653,
            column: 10
          },
          end: {
            line: 653,
            column: 44
          }
        }, {
          start: {
            line: 654,
            column: 10
          },
          end: {
            line: 654,
            column: 54
          }
        }, {
          start: {
            line: 655,
            column: 10
          },
          end: {
            line: 655,
            column: 42
          }
        }, {
          start: {
            line: 656,
            column: 10
          },
          end: {
            line: 656,
            column: 51
          }
        }, {
          start: {
            line: 657,
            column: 10
          },
          end: {
            line: 657,
            column: 39
          }
        }],
        line: 651
      },
      "58": {
        loc: {
          start: {
            line: 674,
            column: 4
          },
          end: {
            line: 676,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 674,
            column: 4
          },
          end: {
            line: 676,
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
        line: 674
      },
      "59": {
        loc: {
          start: {
            line: 674,
            column: 8
          },
          end: {
            line: 674,
            column: 84
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 674,
            column: 8
          },
          end: {
            line: 674,
            column: 46
          }
        }, {
          start: {
            line: 674,
            column: 50
          },
          end: {
            line: 674,
            column: 84
          }
        }],
        line: 674
      },
      "60": {
        loc: {
          start: {
            line: 690,
            column: 8
          },
          end: {
            line: 708,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 690,
            column: 8
          },
          end: {
            line: 708,
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
        line: 690
      },
      "61": {
        loc: {
          start: {
            line: 690,
            column: 12
          },
          end: {
            line: 690,
            column: 75
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 690,
            column: 12
          },
          end: {
            line: 690,
            column: 41
          }
        }, {
          start: {
            line: 690,
            column: 45
          },
          end: {
            line: 690,
            column: 75
          }
        }],
        line: 690
      },
      "62": {
        loc: {
          start: {
            line: 693,
            column: 12
          },
          end: {
            line: 702,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 693,
            column: 12
          },
          end: {
            line: 702,
            column: 13
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
        line: 693
      },
      "63": {
        loc: {
          start: {
            line: 715,
            column: 4
          },
          end: {
            line: 719,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 715,
            column: 4
          },
          end: {
            line: 719,
            column: 5
          }
        }, {
          start: {
            line: 717,
            column: 11
          },
          end: {
            line: 719,
            column: 5
          }
        }],
        line: 715
      },
      "64": {
        loc: {
          start: {
            line: 715,
            column: 8
          },
          end: {
            line: 715,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 715,
            column: 8
          },
          end: {
            line: 715,
            column: 26
          }
        }, {
          start: {
            line: 715,
            column: 30
          },
          end: {
            line: 715,
            column: 39
          }
        }],
        line: 715
      },
      "65": {
        loc: {
          start: {
            line: 717,
            column: 11
          },
          end: {
            line: 719,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 717,
            column: 11
          },
          end: {
            line: 719,
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
        line: 717
      },
      "66": {
        loc: {
          start: {
            line: 728,
            column: 6
          },
          end: {
            line: 730,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 728,
            column: 6
          },
          end: {
            line: 730,
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
        line: 728
      },
      "67": {
        loc: {
          start: {
            line: 742,
            column: 4
          },
          end: {
            line: 751,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 742,
            column: 4
          },
          end: {
            line: 751,
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
        line: 742
      },
      "68": {
        loc: {
          start: {
            line: 759,
            column: 2
          },
          end: {
            line: 767,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 759,
            column: 2
          },
          end: {
            line: 767,
            column: 3
          }
        }, {
          start: {
            line: 765,
            column: 9
          },
          end: {
            line: 767,
            column: 3
          }
        }],
        line: 759
      },
      "69": {
        loc: {
          start: {
            line: 760,
            column: 4
          },
          end: {
            line: 762,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 760,
            column: 4
          },
          end: {
            line: 760,
            column: 37
          }
        }, {
          start: {
            line: 761,
            column: 4
          },
          end: {
            line: 761,
            column: 45
          }
        }, {
          start: {
            line: 762,
            column: 4
          },
          end: {
            line: 762,
            column: 61
          }
        }],
        line: 760
      },
      "70": {
        loc: {
          start: {
            line: 769,
            column: 2
          },
          end: {
            line: 771,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 769,
            column: 2
          },
          end: {
            line: 771,
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
        line: 769
      },
      "71": {
        loc: {
          start: {
            line: 778,
            column: 4
          },
          end: {
            line: 778,
            column: 63
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 778,
            column: 4
          },
          end: {
            line: 778,
            column: 63
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
        line: 778
      },
      "72": {
        loc: {
          start: {
            line: 781,
            column: 2
          },
          end: {
            line: 805,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 781,
            column: 2
          },
          end: {
            line: 805,
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
        line: 781
      },
      "73": {
        loc: {
          start: {
            line: 782,
            column: 4
          },
          end: {
            line: 785,
            column: 35
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 782,
            column: 4
          },
          end: {
            line: 782,
            column: 36
          }
        }, {
          start: {
            line: 783,
            column: 4
          },
          end: {
            line: 783,
            column: 45
          }
        }, {
          start: {
            line: 784,
            column: 4
          },
          end: {
            line: 784,
            column: 60
          }
        }, {
          start: {
            line: 785,
            column: 4
          },
          end: {
            line: 785,
            column: 35
          }
        }],
        line: 782
      },
      "74": {
        loc: {
          start: {
            line: 788,
            column: 4
          },
          end: {
            line: 790,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 788,
            column: 4
          },
          end: {
            line: 790,
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
        line: 788
      },
      "75": {
        loc: {
          start: {
            line: 806,
            column: 2
          },
          end: {
            line: 818,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 806,
            column: 2
          },
          end: {
            line: 818,
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
        line: 806
      },
      "76": {
        loc: {
          start: {
            line: 819,
            column: 2
          },
          end: {
            line: 832,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 819,
            column: 2
          },
          end: {
            line: 832,
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
        line: 819
      },
      "77": {
        loc: {
          start: {
            line: 835,
            column: 7
          },
          end: {
            line: 1294,
            column: 7
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 836,
            column: 8
          },
          end: {
            line: 1291,
            column: 11
          }
        }, {
          start: {
            line: 1293,
            column: 8
          },
          end: {
            line: 1293,
            column: 24
          }
        }],
        line: 835
      },
      "78": {
        loc: {
          start: {
            line: 872,
            column: 22
          },
          end: {
            line: 874,
            column: 39
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 873,
            column: 26
          },
          end: {
            line: 873,
            column: 43
          }
        }, {
          start: {
            line: 874,
            column: 26
          },
          end: {
            line: 874,
            column: 39
          }
        }],
        line: 872
      },
      "79": {
        loc: {
          start: {
            line: 872,
            column: 22
          },
          end: {
            line: 872,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 872,
            column: 22
          },
          end: {
            line: 872,
            column: 42
          }
        }, {
          start: {
            line: 872,
            column: 46
          },
          end: {
            line: 872,
            column: 70
          }
        }],
        line: 872
      },
      "80": {
        loc: {
          start: {
            line: 880,
            column: 21
          },
          end: {
            line: 885,
            column: 24
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 880,
            column: 21
          },
          end: {
            line: 880,
            column: 43
          }
        }, {
          start: {
            line: 881,
            column: 22
          },
          end: {
            line: 885,
            column: 24
          }
        }],
        line: 880
      },
      "81": {
        loc: {
          start: {
            line: 886,
            column: 21
          },
          end: {
            line: 886,
            column: 95
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 886,
            column: 21
          },
          end: {
            line: 886,
            column: 43
          }
        }, {
          start: {
            line: 886,
            column: 47
          },
          end: {
            line: 886,
            column: 80
          }
        }, {
          start: {
            line: 886,
            column: 84
          },
          end: {
            line: 886,
            column: 95
          }
        }],
        line: 886
      },
      "82": {
        loc: {
          start: {
            line: 890,
            column: 21
          },
          end: {
            line: 895,
            column: 24
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 890,
            column: 21
          },
          end: {
            line: 890,
            column: 44
          }
        }, {
          start: {
            line: 891,
            column: 22
          },
          end: {
            line: 895,
            column: 24
          }
        }],
        line: 890
      },
      "83": {
        loc: {
          start: {
            line: 908,
            column: 32
          },
          end: {
            line: 908,
            column: 99
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 908,
            column: 48
          },
          end: {
            line: 908,
            column: 94
          }
        }, {
          start: {
            line: 908,
            column: 97
          },
          end: {
            line: 908,
            column: 99
          }
        }],
        line: 908
      },
      "84": {
        loc: {
          start: {
            line: 1071,
            column: 42
          },
          end: {
            line: 1071,
            column: 98
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1071,
            column: 59
          },
          end: {
            line: 1071,
            column: 93
          }
        }, {
          start: {
            line: 1071,
            column: 96
          },
          end: {
            line: 1071,
            column: 98
          }
        }],
        line: 1071
      },
      "85": {
        loc: {
          start: {
            line: 1073,
            column: 32
          },
          end: {
            line: 1075,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1074,
            column: 36
          },
          end: {
            line: 1074,
            column: 83
          }
        }, {
          start: {
            line: 1075,
            column: 36
          },
          end: {
            line: 1075,
            column: 58
          }
        }],
        line: 1073
      },
      "86": {
        loc: {
          start: {
            line: 1123,
            column: 32
          },
          end: {
            line: 1123,
            column: 99
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1123,
            column: 32
          },
          end: {
            line: 1123,
            column: 56
          }
        }, {
          start: {
            line: 1123,
            column: 60
          },
          end: {
            line: 1123,
            column: 99
          }
        }],
        line: 1123
      },
      "87": {
        loc: {
          start: {
            line: 1234,
            column: 22
          },
          end: {
            line: 1236,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1234,
            column: 22
          },
          end: {
            line: 1234,
            column: 39
          }
        }, {
          start: {
            line: 1235,
            column: 22
          },
          end: {
            line: 1235,
            column: 38
          }
        }, {
          start: {
            line: 1236,
            column: 22
          },
          end: {
            line: 1236,
            column: 71
          }
        }],
        line: 1234
      },
      "88": {
        loc: {
          start: {
            line: 1239,
            column: 21
          },
          end: {
            line: 1239,
            column: 84
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1239,
            column: 41
          },
          end: {
            line: 1239,
            column: 71
          }
        }, {
          start: {
            line: 1239,
            column: 74
          },
          end: {
            line: 1239,
            column: 84
          }
        }],
        line: 1239
      },
      "89": {
        loc: {
          start: {
            line: 1245,
            column: 13
          },
          end: {
            line: 1254,
            column: 20
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1246,
            column: 14
          },
          end: {
            line: 1253,
            column: 20
          }
        }, {
          start: {
            line: 1254,
            column: 16
          },
          end: {
            line: 1254,
            column: 20
          }
        }],
        line: 1245
      },
      "90": {
        loc: {
          start: {
            line: 1256,
            column: 13
          },
          end: {
            line: 1282,
            column: 13
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1256,
            column: 13
          },
          end: {
            line: 1256,
            column: 19
          }
        }, {
          start: {
            line: 1256,
            column: 23
          },
          end: {
            line: 1256,
            column: 44
          }
        }, {
          start: {
            line: 1257,
            column: 14
          },
          end: {
            line: 1281,
            column: 20
          }
        }],
        line: 1256
      },
      "91": {
        loc: {
          start: {
            line: 1277,
            column: 30
          },
          end: {
            line: 1277,
            column: 75
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1277,
            column: 64
          },
          end: {
            line: 1277,
            column: 70
          }
        }, {
          start: {
            line: 1277,
            column: 73
          },
          end: {
            line: 1277,
            column: 75
          }
        }],
        line: 1277
      },
      "92": {
        loc: {
          start: {
            line: 1277,
            column: 30
          },
          end: {
            line: 1277,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1277,
            column: 30
          },
          end: {
            line: 1277,
            column: 36
          }
        }, {
          start: {
            line: 1277,
            column: 40
          },
          end: {
            line: 1277,
            column: 61
          }
        }],
        line: 1277
      },
      "93": {
        loc: {
          start: {
            line: 1278,
            column: 27
          },
          end: {
            line: 1278,
            column: 87
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 1278,
            column: 61
          },
          end: {
            line: 1278,
            column: 82
          }
        }, {
          start: {
            line: 1278,
            column: 85
          },
          end: {
            line: 1278,
            column: 87
          }
        }],
        line: 1278
      },
      "94": {
        loc: {
          start: {
            line: 1278,
            column: 27
          },
          end: {
            line: 1278,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1278,
            column: 27
          },
          end: {
            line: 1278,
            column: 33
          }
        }, {
          start: {
            line: 1278,
            column: 37
          },
          end: {
            line: 1278,
            column: 58
          }
        }],
        line: 1278
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
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0,
      "238": 0,
      "239": 0,
      "240": 0,
      "241": 0,
      "242": 0,
      "243": 0,
      "244": 0,
      "245": 0,
      "246": 0,
      "247": 0,
      "248": 0,
      "249": 0,
      "250": 0,
      "251": 0,
      "252": 0,
      "253": 0,
      "254": 0,
      "255": 0,
      "256": 0,
      "257": 0,
      "258": 0,
      "259": 0,
      "260": 0,
      "261": 0,
      "262": 0,
      "263": 0,
      "264": 0,
      "265": 0,
      "266": 0,
      "267": 0,
      "268": 0,
      "269": 0,
      "270": 0,
      "271": 0,
      "272": 0,
      "273": 0,
      "274": 0,
      "275": 0,
      "276": 0,
      "277": 0,
      "278": 0,
      "279": 0,
      "280": 0,
      "281": 0,
      "282": 0,
      "283": 0,
      "284": 0,
      "285": 0,
      "286": 0,
      "287": 0,
      "288": 0,
      "289": 0,
      "290": 0,
      "291": 0,
      "292": 0,
      "293": 0,
      "294": 0,
      "295": 0,
      "296": 0,
      "297": 0,
      "298": 0,
      "299": 0,
      "300": 0,
      "301": 0,
      "302": 0,
      "303": 0,
      "304": 0,
      "305": 0,
      "306": 0,
      "307": 0,
      "308": 0,
      "309": 0,
      "310": 0,
      "311": 0,
      "312": 0,
      "313": 0,
      "314": 0,
      "315": 0,
      "316": 0
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
      "50": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0],
      "6": [0],
      "7": [0],
      "8": [0],
      "9": [0],
      "10": [0],
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
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0, 0, 0, 0],
      "34": [0, 0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0, 0],
      "54": [0, 0],
      "55": [0, 0, 0, 0, 0, 0],
      "56": [0, 0],
      "57": [0, 0, 0, 0, 0, 0, 0],
      "58": [0, 0],
      "59": [0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0],
      "66": [0, 0],
      "67": [0, 0],
      "68": [0, 0],
      "69": [0, 0, 0],
      "70": [0, 0],
      "71": [0, 0],
      "72": [0, 0],
      "73": [0, 0, 0, 0],
      "74": [0, 0],
      "75": [0, 0],
      "76": [0, 0],
      "77": [0, 0],
      "78": [0, 0],
      "79": [0, 0],
      "80": [0, 0],
      "81": [0, 0, 0],
      "82": [0, 0],
      "83": [0, 0],
      "84": [0, 0],
      "85": [0, 0],
      "86": [0, 0],
      "87": [0, 0, 0],
      "88": [0, 0],
      "89": [0, 0],
      "90": [0, 0, 0],
      "91": [0, 0],
      "92": [0, 0],
      "93": [0, 0],
      "94": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "730d6fe991447822f3a6493ce4632815754f70b6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1d17zcaqaj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1d17zcaqaj();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-nocheck


































 // =============================== HELPER FUNCTIONS ===========================

/**
 * generatePerformanceProfile takes in data and generate a performance
 * profile object from it
 * @param {*} data
 */




function generatePerformanceProfile(data) {
  cov_1d17zcaqaj().f[0]++;
  const {
    id,
    name,
    loadGenerator,
    additional_options,
    endpoint,
    serviceMesh,
    concurrentRequest,
    qps,
    duration,
    requestHeaders,
    requestCookies,
    requestBody,
    contentType,
    caCertificate
  } = (cov_1d17zcaqaj().s[0]++, data);
  const performanceProfileName = (cov_1d17zcaqaj().s[1]++, (0,_helper__WEBPACK_IMPORTED_MODULE_27__/* .generateTestName */ .W)(name, serviceMesh));
  cov_1d17zcaqaj().s[2]++;
  return _objectSpread(_objectSpread({}, (cov_1d17zcaqaj().b[0][0]++, id) && (cov_1d17zcaqaj().b[0][1]++, {
    id
  })), {}, {
    name: performanceProfileName,
    load_generators: [loadGenerator],
    endpoints: [endpoint],
    service_mesh: serviceMesh,
    concurrent_request: concurrentRequest,
    qps,
    duration,
    request_headers: requestHeaders,
    request_body: requestBody,
    request_cookies: requestCookies,
    content_type: contentType,
    metadata: {
      additional_options: [additional_options],
      ca_certificate: {
        file: caCertificate.file,
        name: caCertificate.name
      }
    }
  });
}
cov_1d17zcaqaj().s[3]++;

const styles = theme => {
  cov_1d17zcaqaj().f[1]++;
  cov_1d17zcaqaj().s[4]++;
  return {
    title: {
      textAlign: 'center',
      minWidth: 400,
      padding: '10px',
      color: '#fff',
      backgroundColor: theme.palette.type === 'dark' ? (cov_1d17zcaqaj().b[1][0]++, theme.palette.secondary.headerColor) : (cov_1d17zcaqaj().b[1][1]++, theme.palette.secondary.mainBackground)
    },
    wrapperClss: {
      padding: theme.spacing(10),
      position: 'relative',
      paddingTop: theme.spacing(5)
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    spacing: {
      marginLeft: theme.spacing(1)
    },
    button: {
      backgroundColor: theme.palette.type === 'dark' ? (cov_1d17zcaqaj().b[2][0]++, '#00B39F') : (cov_1d17zcaqaj().b[2][1]++, '#607d8b'),
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? (cov_1d17zcaqaj().b[3][0]++, '#00B39F') : (cov_1d17zcaqaj().b[3][1]++, '#607d8b')
      },
      color: '#fff'
    },
    iconColor: {
      color: '#929292'
    },
    upload: {
      paddingLeft: '0.7rem',
      paddingTop: '8px'
    },
    expansionPanel: {
      boxShadow: 'none',
      border: '1px solid rgb(196,196,196)',
      background: 'none'
    },
    margin: {
      margin: theme.spacing(1)
    },
    chartTitle: {
      textAlign: 'center'
    },
    chartTitleGraf: {
      textAlign: 'center' // marginTop: theme.spacing(5),

    },
    chartContent: {// minHeight: window.innerHeight * 0.7,
    },
    centerTimer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1201,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    smallIcons: {
      width: '15px',
      height: '18px',
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(0.3)
    },
    radio: {
      '&.Mui-checked': {
        color: theme.palette.type === 'dark' ? (cov_1d17zcaqaj().b[4][0]++, theme.palette.secondary.focused) : (cov_1d17zcaqaj().b[4][1]++, theme.palette.primary)
      }
    }
  };
}; // =============================== PERFORMANCE COMPONENT =======================


const loadGenerators = (cov_1d17zcaqaj().s[5]++, ['fortio', 'wrk2', 'nighthawk']);
const infoFlags = (cov_1d17zcaqaj().s[6]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.Fragment, {
  children: "Only .json files are supported."
}));
const infoCRTCertificates = (cov_1d17zcaqaj().s[7]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.Fragment, {
  children: "Only .crt files are supported."
}));
const infoloadGenerators = (cov_1d17zcaqaj().s[8]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.Fragment, {
  children: ["Which load generators does Meshplay support?", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("ul", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("li", {
      children: ["fortio - Fortio load testing library, command line tool, advanced echo server and web UI in go (golang). Allows to specify a set query-per-second load and record latency histograms and other useful stats.", ' ']
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("li", {
      children: " wrk2 - A constant throughput, correct latency recording variant of wrk."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("li", {
      children: [' ', "nighthawk - Enables users to run distributed performance tests to better mimic real-world, distributed systems scenarios."]
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Link, {
    style: {
      textDecoration: 'underline'
    },
    color: "inherit",
    href: "https://docs.meshplay.io/functionality/performance-management",
    children: [' ', "Performance Management"]
  })]
}));
let eventStream = (cov_1d17zcaqaj().s[9]++, null);
cov_1d17zcaqaj().s[10]++;

const MeshplayPerformanceComponent = props => {
  cov_1d17zcaqaj().f[2]++;
  const {
    testName = (cov_1d17zcaqaj().b[5][0]++, ''),
    meshName = (cov_1d17zcaqaj().b[6][0]++, ''),
    url = (cov_1d17zcaqaj().b[7][0]++, ''),
    qps = (cov_1d17zcaqaj().b[8][0]++, '0'),
    c = (cov_1d17zcaqaj().b[9][0]++, '0'),
    t = (cov_1d17zcaqaj().b[10][0]++, '30s'),
    result,
    staticPrometheusBoardConfig,
    performanceProfileID,
    profileName,
    loadGenerator,
    additional_options,
    headers,
    cookies,
    reqBody,
    contentType,
    metadata
  } = (cov_1d17zcaqaj().s[11]++, props);
  cov_1d17zcaqaj().s[12]++;

  const isJsonString = str => {
    cov_1d17zcaqaj().f[3]++;
    cov_1d17zcaqaj().s[13]++;

    try {
      cov_1d17zcaqaj().s[14]++;
      JSON.parse(str);
    } catch (e) {
      cov_1d17zcaqaj().s[15]++;
      return false;
    }

    cov_1d17zcaqaj().s[16]++;
    return true;
  }; // Create individual state variables for each property


  const [testNameState, setTestName] = (cov_1d17zcaqaj().s[17]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(testName));
  const [meshNameState, setMeshName] = (cov_1d17zcaqaj().s[18]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(meshName));
  const [urlState, setUrl] = (cov_1d17zcaqaj().s[19]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(url));
  const [qpsState, setQps] = (cov_1d17zcaqaj().s[20]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(qps));
  const [cState, setC] = (cov_1d17zcaqaj().s[21]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c));
  const [tState, setT] = (cov_1d17zcaqaj().s[22]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(t));
  const [tValueState, setTValue] = (cov_1d17zcaqaj().s[23]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(t));
  const [loadGeneratorState, setLoadGenerator] = (cov_1d17zcaqaj().s[24]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((cov_1d17zcaqaj().b[11][0]++, loadGenerator) || (cov_1d17zcaqaj().b[11][1]++, 'fortio')));
  const [additionalOptionsState, setAdditionalOptions] = (cov_1d17zcaqaj().s[25]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((cov_1d17zcaqaj().b[12][0]++, additional_options) || (cov_1d17zcaqaj().b[12][1]++, '')));
  const [resultState, setResult] = (cov_1d17zcaqaj().s[26]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(result));
  const [headersState, setHeaders] = (cov_1d17zcaqaj().s[27]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((cov_1d17zcaqaj().b[13][0]++, headers) || (cov_1d17zcaqaj().b[13][1]++, '')));
  const [cookiesState, setCookies] = (cov_1d17zcaqaj().s[28]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((cov_1d17zcaqaj().b[14][0]++, cookies) || (cov_1d17zcaqaj().b[14][1]++, '')));
  const [reqBodyState, setReqBody] = (cov_1d17zcaqaj().s[29]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((cov_1d17zcaqaj().b[15][0]++, reqBody) || (cov_1d17zcaqaj().b[15][1]++, '')));
  const [contentTypeState, setContentType] = (cov_1d17zcaqaj().s[30]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((cov_1d17zcaqaj().b[16][0]++, contentType) || (cov_1d17zcaqaj().b[16][1]++, '')));
  const [caCertificateState, setCaCertificate] = (cov_1d17zcaqaj().s[31]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}));
  const [profileNameState, setProfileName] = (cov_1d17zcaqaj().s[32]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((cov_1d17zcaqaj().b[17][0]++, profileName) || (cov_1d17zcaqaj().b[17][1]++, '')));
  const [performanceProfileIDState, setPerformanceProfileID] = (cov_1d17zcaqaj().s[33]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((cov_1d17zcaqaj().b[18][0]++, performanceProfileID) || (cov_1d17zcaqaj().b[18][1]++, '')));
  const [timerDialogOpenState, setTimerDialogOpen] = (cov_1d17zcaqaj().s[34]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  const [blockRunTestState, setBlockRunTest] = (cov_1d17zcaqaj().s[35]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  const [urlErrorState, setUrlError] = (cov_1d17zcaqaj().s[36]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  const [tErrorState, setTError] = (cov_1d17zcaqaj().s[37]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''));
  const [jsonErrorState, setJsonError] = (cov_1d17zcaqaj().s[38]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false));
  const [disableTestState, setDisableTest] = (cov_1d17zcaqaj().s[39]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!((cov_1d17zcaqaj().b[19][0]++, (0,_utils_URLValidator__WEBPACK_IMPORTED_MODULE_6__/* .URLValidator */ .I)(urlState)) || (cov_1d17zcaqaj().b[19][1]++, isJsonString(additionalOptionsState)))));
  const [testUUIDState, setTestUUID] = (cov_1d17zcaqaj().s[40]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_helper__WEBPACK_IMPORTED_MODULE_27__/* .generateUUID */ .D)()));
  const [selectedMeshState, setSelectedMesh] = (cov_1d17zcaqaj().s[41]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''));
  const [availableAdaptersState, setAvailableAdapters] = (cov_1d17zcaqaj().s[42]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]));
  const [availableSMPMeshesState, setAvailableSMPMeshes] = (cov_1d17zcaqaj().s[43]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]));
  const [metadataState, setMetadata] = (cov_1d17zcaqaj().s[44]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(metadata));
  const [staticPrometheusBoardConfigState, setStaticPrometheusBoardConfig] = (cov_1d17zcaqaj().s[45]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(staticPrometheusBoardConfig));
  const {
    data: userData,
    isSuccess: isUserDataFetched
  } = (cov_1d17zcaqaj().s[46]++, (0,_rtk_query_user__WEBPACK_IMPORTED_MODULE_32__/* .useGetUserPrefWithContextQuery */ .mZ)(props?.selectedK8sContexts));
  const [savePerformanceProfile] = (cov_1d17zcaqaj().s[47]++, (0,_rtk_query_performance_profile__WEBPACK_IMPORTED_MODULE_33__/* .useSavePerformanceProfileMutation */ .pW)());
  const {
    data: smpMeshes,
    isSuccess: isSMPMeshesFetched,
    isError: isSMPMeshError
  } = (cov_1d17zcaqaj().s[48]++, (0,_rtk_query_mesh__WEBPACK_IMPORTED_MODULE_34__/* .useGetMeshQuery */ .n)());
  cov_1d17zcaqaj().s[49]++;

  const handleChange = name => {
    cov_1d17zcaqaj().f[4]++;
    cov_1d17zcaqaj().s[50]++;
    return event => {
      cov_1d17zcaqaj().f[5]++;
      const {
        value
      } = (cov_1d17zcaqaj().s[51]++, event.target);
      cov_1d17zcaqaj().s[52]++;

      if (name === 'caCertificate') {
        cov_1d17zcaqaj().b[20][0]++;
        cov_1d17zcaqaj().s[53]++;

        if (!event.target.files?.length) {
          cov_1d17zcaqaj().b[21][0]++;
          cov_1d17zcaqaj().s[54]++;
          return;
        } else {
          cov_1d17zcaqaj().b[21][1]++;
        }

        const file = (cov_1d17zcaqaj().s[55]++, event.target.files[0]);
        const reader = (cov_1d17zcaqaj().s[56]++, new FileReader());
        cov_1d17zcaqaj().s[57]++;
        reader.addEventListener('load', evt => {
          cov_1d17zcaqaj().f[6]++;
          cov_1d17zcaqaj().s[58]++;
          setCaCertificate({
            name: file.name,
            file: evt.target.result
          });
        });
        cov_1d17zcaqaj().s[59]++;
        reader.readAsText(file);
      } else {
        cov_1d17zcaqaj().b[20][1]++;
      }

      cov_1d17zcaqaj().s[60]++;

      if ((cov_1d17zcaqaj().b[23][0]++, name === 'url') && (cov_1d17zcaqaj().b[23][1]++, value !== '')) {
        cov_1d17zcaqaj().b[22][0]++;
        let urlPattern = (cov_1d17zcaqaj().s[61]++, value);
        let val = (cov_1d17zcaqaj().s[62]++, (0,_utils_URLValidator__WEBPACK_IMPORTED_MODULE_6__/* .URLValidator */ .I)(urlPattern));
        cov_1d17zcaqaj().s[63]++;

        if (!val) {
          cov_1d17zcaqaj().b[24][0]++;
          cov_1d17zcaqaj().s[64]++;
          setDisableTest(true);
          cov_1d17zcaqaj().s[65]++;
          setUrlError(true);
        } else {
          cov_1d17zcaqaj().b[24][1]++;
          cov_1d17zcaqaj().s[66]++;
          setDisableTest(false);
          cov_1d17zcaqaj().s[67]++;
          setUrlError(false);
        }
      } else {
        cov_1d17zcaqaj().b[22][1]++;
        cov_1d17zcaqaj().s[68]++;
        setUrlError(false);
      }

      cov_1d17zcaqaj().s[69]++;

      if (name === 'additional_options') {
        cov_1d17zcaqaj().b[25][0]++;
        // Check if the target event is an input element (typing) or a file input (upload)
        const isFileUpload = (cov_1d17zcaqaj().s[70]++, event.target.getAttribute('type') === 'file');
        cov_1d17zcaqaj().s[71]++;

        if (isFileUpload) {
          cov_1d17zcaqaj().b[26][0]++;
          // Handle file upload
          const file = (cov_1d17zcaqaj().s[72]++, event.target.files[0]);
          cov_1d17zcaqaj().s[73]++;

          if (file) {
            cov_1d17zcaqaj().b[27][0]++;
            const reader = (cov_1d17zcaqaj().s[74]++, new FileReader());
            cov_1d17zcaqaj().s[75]++;

            reader.onload = event => {
              cov_1d17zcaqaj().f[7]++;
              cov_1d17zcaqaj().s[76]++;

              try {
                const fileContent = (cov_1d17zcaqaj().s[77]++, event.target.result); // Validate JSON

                cov_1d17zcaqaj().s[78]++;
                JSON.parse(fileContent);
                cov_1d17zcaqaj().s[79]++;
                setAdditionalOptions(fileContent);
                cov_1d17zcaqaj().s[80]++;
                setJsonError(false);
              } catch (error) {
                cov_1d17zcaqaj().s[81]++;
                setAdditionalOptions(event.target.result);
                cov_1d17zcaqaj().s[82]++;
                setJsonError(true);
              }
            };

            cov_1d17zcaqaj().s[83]++;
            reader.readAsText(file);
          } else {
            cov_1d17zcaqaj().b[27][1]++;
          }
        } else {
          cov_1d17zcaqaj().b[26][1]++;
          cov_1d17zcaqaj().s[84]++;

          // Handle text input
          try {
            cov_1d17zcaqaj().s[85]++;

            // empty text input exception
            if (value !== '') {
              cov_1d17zcaqaj().b[28][0]++;
              cov_1d17zcaqaj().s[86]++;
              JSON.parse(value);
            } else {
              cov_1d17zcaqaj().b[28][1]++;
            }

            cov_1d17zcaqaj().s[87]++;
            setAdditionalOptions(value);
            cov_1d17zcaqaj().s[88]++;
            setJsonError(false);
          } catch (error) {
            cov_1d17zcaqaj().s[89]++;
            setAdditionalOptions(value);
            cov_1d17zcaqaj().s[90]++;
            setJsonError(true);
          }
        }
      } else {
        cov_1d17zcaqaj().b[25][1]++;
      }

      cov_1d17zcaqaj().s[91]++;

      switch (name) {
        case 'profileName':
          cov_1d17zcaqaj().b[29][0]++;
          cov_1d17zcaqaj().s[92]++;
          setProfileName(value);
          cov_1d17zcaqaj().s[93]++;
          break;

        case 'meshName':
          cov_1d17zcaqaj().b[29][1]++;
          cov_1d17zcaqaj().s[94]++;
          setMeshName(value);
          cov_1d17zcaqaj().s[95]++;
          break;

        case 'c':
          cov_1d17zcaqaj().b[29][2]++;
          cov_1d17zcaqaj().s[96]++;
          setC(value);
          cov_1d17zcaqaj().s[97]++;
          break;

        case 'qps':
          cov_1d17zcaqaj().b[29][3]++;
          cov_1d17zcaqaj().s[98]++;
          setQps(value);
          cov_1d17zcaqaj().s[99]++;
          break;

        case 'headers':
          cov_1d17zcaqaj().b[29][4]++;
          cov_1d17zcaqaj().s[100]++;
          setHeaders(value);
          cov_1d17zcaqaj().s[101]++;
          break;

        case 'cookies':
          cov_1d17zcaqaj().b[29][5]++;
          cov_1d17zcaqaj().s[102]++;
          setCookies(value);
          cov_1d17zcaqaj().s[103]++;
          break;

        case 'contentType':
          cov_1d17zcaqaj().b[29][6]++;
          cov_1d17zcaqaj().s[104]++;
          setContentType(value);
          cov_1d17zcaqaj().s[105]++;
          break;

        case 'reqBody':
          cov_1d17zcaqaj().b[29][7]++;
          cov_1d17zcaqaj().s[106]++;
          setReqBody(value);
          cov_1d17zcaqaj().s[107]++;
          break;

        case 'loadGenerator':
          cov_1d17zcaqaj().b[29][8]++;
          cov_1d17zcaqaj().s[108]++;
          setLoadGenerator(value);
          cov_1d17zcaqaj().s[109]++;
          break;

        case 'url':
          cov_1d17zcaqaj().b[29][9]++;
          cov_1d17zcaqaj().s[110]++;
          setUrl(value);
          cov_1d17zcaqaj().s[111]++;
          break;

        default:
          cov_1d17zcaqaj().b[29][10]++;
          cov_1d17zcaqaj().s[112]++;
          // Handle any other cases or do nothing if not matched
          break;
      }
    };
  };

  cov_1d17zcaqaj().s[113]++;

  const handleDurationChange = (event, newValue) => {
    cov_1d17zcaqaj().f[8]++;
    cov_1d17zcaqaj().s[114]++;
    setTValue(newValue);
    cov_1d17zcaqaj().s[115]++;

    if (newValue !== null) {
      cov_1d17zcaqaj().b[30][0]++;
      cov_1d17zcaqaj().s[116]++;
      setTError('');
    } else {
      cov_1d17zcaqaj().b[30][1]++;
    }
  };

  cov_1d17zcaqaj().s[117]++;

  const handleInputDurationChange = (event, newValue) => {
    cov_1d17zcaqaj().f[9]++;
    cov_1d17zcaqaj().s[118]++;
    setT(newValue);
  };

  cov_1d17zcaqaj().s[119]++;

  const handleSubmit = () => {
    cov_1d17zcaqaj().f[10]++;
    cov_1d17zcaqaj().s[120]++;

    if (urlState === '') {
      cov_1d17zcaqaj().b[31][0]++;
      cov_1d17zcaqaj().s[121]++;
      setUrlError(true);
      cov_1d17zcaqaj().s[122]++;
      return;
    } else {
      cov_1d17zcaqaj().b[31][1]++;
    }

    let err = (cov_1d17zcaqaj().s[123]++, false);
    let tNum = (cov_1d17zcaqaj().s[124]++, 0);
    cov_1d17zcaqaj().s[125]++;

    try {
      cov_1d17zcaqaj().s[126]++;
      tNum = parseInt(t.substring(0, tState.length - 1));
    } catch (ex) {
      cov_1d17zcaqaj().s[127]++;
      err = true;
    }

    cov_1d17zcaqaj().s[128]++;

    if ((cov_1d17zcaqaj().b[33][0]++, tState === '') || (cov_1d17zcaqaj().b[33][1]++, tState === null) || (cov_1d17zcaqaj().b[33][2]++, !((cov_1d17zcaqaj().b[34][0]++, tState.toLowerCase().endsWith('h')) || (cov_1d17zcaqaj().b[34][1]++, tState.toLowerCase().endsWith('m')) || (cov_1d17zcaqaj().b[34][2]++, tState.toLowerCase().endsWith('s')))) || (cov_1d17zcaqaj().b[33][3]++, err) || (cov_1d17zcaqaj().b[33][4]++, tNum <= 0)) {
      cov_1d17zcaqaj().b[32][0]++;
      cov_1d17zcaqaj().s[129]++;
      setTError('error-autocomplete-value');
      cov_1d17zcaqaj().s[130]++;
      return;
    } else {
      cov_1d17zcaqaj().b[32][1]++;
    }

    cov_1d17zcaqaj().s[131]++;

    if (!performanceProfileIDState) {
      cov_1d17zcaqaj().b[35][0]++;
      cov_1d17zcaqaj().s[132]++;
      submitProfile(({
        id
      }) => {
        cov_1d17zcaqaj().f[11]++;
        cov_1d17zcaqaj().s[133]++;
        return submitLoadTest(id);
      });
      cov_1d17zcaqaj().s[134]++;
      return;
    } else {
      cov_1d17zcaqaj().b[35][1]++;
    }

    cov_1d17zcaqaj().s[135]++;
    submitLoadTest(performanceProfileIDState);
  };

  cov_1d17zcaqaj().s[136]++;

  const submitProfile = cb => {
    cov_1d17zcaqaj().f[12]++;
    const profile = (cov_1d17zcaqaj().s[137]++, generatePerformanceProfile({
      name: profileNameState,
      loadGenerator: loadGeneratorState,
      additional_options: additionalOptionsState,
      endpoint: urlState,
      serviceMesh: meshNameState,
      concurrentRequest: (cov_1d17zcaqaj().b[36][0]++, +cState) || (cov_1d17zcaqaj().b[36][1]++, 0),
      qps: (cov_1d17zcaqaj().b[37][0]++, +qpsState) || (cov_1d17zcaqaj().b[37][1]++, 0),
      duration: tState,
      requestHeaders: headersState,
      requestCookies: cookiesState,
      requestBody: reqBodyState,
      contentType: contentTypeState,
      caCertificate: caCertificateState,
      testName: testNameState,
      id: performanceProfileIDState
    }));
    cov_1d17zcaqaj().s[138]++;
    handleProfileUpload(profile, true, cb);
  };

  cov_1d17zcaqaj().s[139]++;

  const handleAbort = () => {
    cov_1d17zcaqaj().f[13]++;
    cov_1d17zcaqaj().s[140]++;
    setProfileName('');
    cov_1d17zcaqaj().s[141]++;
    setLoadGenerator('');
    cov_1d17zcaqaj().s[142]++;
    setAdditionalOptions('');
    cov_1d17zcaqaj().s[143]++;
    setUrl('');
    cov_1d17zcaqaj().s[144]++;
    setMeshName('');
    cov_1d17zcaqaj().s[145]++;
    setC(0);
    cov_1d17zcaqaj().s[146]++;
    setQps(0);
    cov_1d17zcaqaj().s[147]++;
    setT('30s');
    cov_1d17zcaqaj().s[148]++;
    setHeaders('');
    cov_1d17zcaqaj().s[149]++;
    setCookies('');
    cov_1d17zcaqaj().s[150]++;
    setReqBody('');
    cov_1d17zcaqaj().s[151]++;
    setContentType('');
    cov_1d17zcaqaj().s[152]++;
    setTestName('');
    cov_1d17zcaqaj().s[153]++;
    setPerformanceProfileID('');
    cov_1d17zcaqaj().s[154]++;
    setDisableTest(true);
    cov_1d17zcaqaj().s[155]++;
    return;
  };

  cov_1d17zcaqaj().s[156]++;

  const handleProfileUpload = (body, generateNotif, cb) => {
    cov_1d17zcaqaj().f[14]++;
    cov_1d17zcaqaj().s[157]++;

    if (generateNotif) {
      cov_1d17zcaqaj().b[38][0]++;
      cov_1d17zcaqaj().s[158]++;
      props.updateProgress({
        showProgress: true
      });
    } else {
      cov_1d17zcaqaj().b[38][1]++;
    }

    cov_1d17zcaqaj().s[159]++;
    savePerformanceProfile({
      body: body
    }).unwrap().then(result => {
      cov_1d17zcaqaj().f[15]++;
      cov_1d17zcaqaj().s[160]++;

      if (result) {
        cov_1d17zcaqaj().b[39][0]++;
        cov_1d17zcaqaj().s[161]++;
        props.updateProgress({
          showProgress: false
        });
        cov_1d17zcaqaj().s[162]++;
        setPerformanceProfileID(result.id);
        cov_1d17zcaqaj().s[163]++;

        if (cb) {
          cov_1d17zcaqaj().b[40][0]++;
          cov_1d17zcaqaj().s[164]++;
          cb(result);
        } else {
          cov_1d17zcaqaj().b[40][1]++;
        }

        cov_1d17zcaqaj().s[165]++;

        if (generateNotif) {
          cov_1d17zcaqaj().b[41][0]++;
          const notify = (cov_1d17zcaqaj().s[166]++, props.notify);
          cov_1d17zcaqaj().s[167]++;
          notify({
            message: 'Performance Profile Created!',
            event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_26__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
          });
        } else {
          cov_1d17zcaqaj().b[41][1]++;
        }
      } else {
        cov_1d17zcaqaj().b[39][1]++;
      }
    }).catch(err => {
      cov_1d17zcaqaj().f[16]++;
      cov_1d17zcaqaj().s[168]++;
      console.error(err);
      cov_1d17zcaqaj().s[169]++;
      props.updateProgress({
        showProgress: false
      });
      const notify = (cov_1d17zcaqaj().s[170]++, props.notify);
      cov_1d17zcaqaj().s[171]++;
      notify({
        message: 'Failed to create performance profile',
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_26__/* .EVENT_TYPES.ERROR */ .E_.ERROR,
        details: err.toString()
      });
    });
  };

  cov_1d17zcaqaj().s[172]++;

  const submitLoadTest = id => {
    cov_1d17zcaqaj().f[17]++;
    const computedTestName = (cov_1d17zcaqaj().s[173]++, (0,_helper__WEBPACK_IMPORTED_MODULE_27__/* .generateTestName */ .W)(testNameState, meshNameState));
    cov_1d17zcaqaj().s[174]++;
    setTestName(computedTestName);
    const t1 = (cov_1d17zcaqaj().s[175]++, tState.substring(0, tState.length - 1));
    const dur = (cov_1d17zcaqaj().s[176]++, tState.substring(tState.length - 1, tState.length).toLowerCase());
    const data = (cov_1d17zcaqaj().s[177]++, {
      name: computedTestName,
      mesh: (cov_1d17zcaqaj().b[43][0]++, meshName === '') || (cov_1d17zcaqaj().b[43][1]++, meshName === 'None') ? (cov_1d17zcaqaj().b[42][0]++, '') : (cov_1d17zcaqaj().b[42][1]++, meshNameState),
      // to prevent None from getting to the DB
      url: urlState,
      qps: qpsState,
      c: cState,
      t: t1,
      dur,
      uuid: testUUIDState,
      loadGenerator: loadGeneratorState,
      additional_options: additionalOptionsState,
      headers: headersState,
      cookies: cookiesState,
      reqBody: reqBodyState,
      contentType: contentTypeState
    });
    const params = (cov_1d17zcaqaj().s[178]++, Object.keys(data).map(key => {
      cov_1d17zcaqaj().f[18]++;
      cov_1d17zcaqaj().s[179]++;
      return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
    }).join('&'));
    const runURL = (cov_1d17zcaqaj().s[180]++, (0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_23__/* .ctxUrl */ .GT)(`/api/user/performance/profiles/${id}/run`, props?.selectedK8sContexts) + '&cert=true');
    cov_1d17zcaqaj().s[181]++;
    startEventStream(`${runURL}${props?.selectedK8sContexts?.length > 0 ? (cov_1d17zcaqaj().b[44][0]++, '&') : (cov_1d17zcaqaj().b[44][1]++, '?')}${params}`);
    cov_1d17zcaqaj().s[182]++;
    setBlockRunTest(true); // to block the button
  };

  function handleSuccess() {
    cov_1d17zcaqaj().f[19]++;
    cov_1d17zcaqaj().s[183]++;
    return result => {
      cov_1d17zcaqaj().f[20]++;
      cov_1d17zcaqaj().s[184]++;

      if ((cov_1d17zcaqaj().b[46][0]++, typeof result !== 'undefined') && (cov_1d17zcaqaj().b[46][1]++, typeof result.runner_results !== 'undefined')) {
        cov_1d17zcaqaj().b[45][0]++;
        const notify = (cov_1d17zcaqaj().s[185]++, props.notify);
        cov_1d17zcaqaj().s[186]++;
        notify({
          message: 'fetched the data.',
          event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_26__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
        });
        cov_1d17zcaqaj().s[187]++;
        props.updateLoadTestData({
          loadTest: {
            testName: testNameState,
            meshName: meshNameState,
            url: urlState,
            qps: qpsState,
            c: cState,
            t: tState,
            loadGenerator: loadGeneratorState,
            result: resultState
          }
        });
        cov_1d17zcaqaj().s[188]++;
        setTestUUID((0,_helper__WEBPACK_IMPORTED_MODULE_27__/* .generateUUID */ .D)());
        cov_1d17zcaqaj().s[189]++;
        setResult(result);
      } else {
        cov_1d17zcaqaj().b[45][1]++;
      }

      cov_1d17zcaqaj().s[190]++;
      closeEventStream();
      cov_1d17zcaqaj().s[191]++;
      setBlockRunTest(false);
      cov_1d17zcaqaj().s[192]++;
      setTimerDialogOpen(false);
    };
  }

  async function startEventStream(url) {
    cov_1d17zcaqaj().f[21]++;
    cov_1d17zcaqaj().s[193]++;
    closeEventStream();
    cov_1d17zcaqaj().s[194]++;
    eventStream = new EventSource(url);
    cov_1d17zcaqaj().s[195]++;
    eventStream.onmessage = handleEvents();
    cov_1d17zcaqaj().s[196]++;
    eventStream.onerror = handleError('Connection to the server got disconnected. Load test might be running in the background. Please check the results page in a few.');
    const notify = (cov_1d17zcaqaj().s[197]++, props.notify);
    cov_1d17zcaqaj().s[198]++;
    notify({
      message: 'Load test has been submitted',
      event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_26__/* .EVENT_TYPES.SUCCESS */ .E_.SUCCESS
    });
  }

  function handleEvents() {
    cov_1d17zcaqaj().f[22]++;
    const notify = (cov_1d17zcaqaj().s[199]++, props.notify);
    let track = (cov_1d17zcaqaj().s[200]++, 0);
    cov_1d17zcaqaj().s[201]++;
    return e => {
      cov_1d17zcaqaj().f[23]++;
      const data = (cov_1d17zcaqaj().s[202]++, JSON.parse(e.data));
      cov_1d17zcaqaj().s[203]++;

      switch (data.status) {
        case 'info':
          cov_1d17zcaqaj().b[47][0]++;
          cov_1d17zcaqaj().s[204]++;
          notify({
            message: data.message,
            event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_26__/* .EVENT_TYPES.INFO */ .E_.INFO
          });
          cov_1d17zcaqaj().s[205]++;

          if (track === 0) {
            cov_1d17zcaqaj().b[48][0]++;
            cov_1d17zcaqaj().s[206]++;
            setTimerDialogOpen(true);
            cov_1d17zcaqaj().s[207]++;
            setResult({});
            cov_1d17zcaqaj().s[208]++;
            track++;
          } else {
            cov_1d17zcaqaj().b[48][1]++;
          }

          cov_1d17zcaqaj().s[209]++;
          break;

        case 'error':
          cov_1d17zcaqaj().b[47][1]++;
          cov_1d17zcaqaj().s[210]++;
          handleError('Load test did not run with msg')(data.message);
          cov_1d17zcaqaj().s[211]++;
          break;

        case 'success':
          cov_1d17zcaqaj().b[47][2]++;
          cov_1d17zcaqaj().s[212]++;
          handleSuccess()(data.result);
          cov_1d17zcaqaj().s[213]++;
          break;
      }
    };
  }

  function closeEventStream() {
    cov_1d17zcaqaj().f[24]++;
    cov_1d17zcaqaj().s[214]++;

    if ((cov_1d17zcaqaj().b[50][0]++, eventStream) && (cov_1d17zcaqaj().b[50][1]++, eventStream.close)) {
      cov_1d17zcaqaj().b[49][0]++;
      cov_1d17zcaqaj().s[215]++;
      eventStream.close();
      cov_1d17zcaqaj().s[216]++;
      eventStream = null;
    } else {
      cov_1d17zcaqaj().b[49][1]++;
    }
  }

  cov_1d17zcaqaj().s[217]++;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    cov_1d17zcaqaj().f[25]++;
    cov_1d17zcaqaj().s[218]++;
    getStaticPrometheusBoardConfig();
    cov_1d17zcaqaj().s[219]++;
    scanForMeshes();
    cov_1d17zcaqaj().s[220]++;
    getLoadTestPrefs();
    cov_1d17zcaqaj().s[221]++;
    getSMPMeshes();
    cov_1d17zcaqaj().s[222]++;

    if (props.runTestOnMount) {
      cov_1d17zcaqaj().b[51][0]++;
      cov_1d17zcaqaj().s[223]++;
      handleSubmit();
    } else {
      cov_1d17zcaqaj().b[51][1]++;
    }
  }, [userData, isUserDataFetched, smpMeshes]);
  cov_1d17zcaqaj().s[224]++;

  const getLoadTestPrefs = () => {
    cov_1d17zcaqaj().f[26]++;
    cov_1d17zcaqaj().s[225]++;

    if ((cov_1d17zcaqaj().b[53][0]++, isUserDataFetched) && (cov_1d17zcaqaj().b[53][1]++, userData) && (cov_1d17zcaqaj().b[53][2]++, userData.loadTestPref)) {
      cov_1d17zcaqaj().b[52][0]++;
      cov_1d17zcaqaj().s[226]++;
      setQps(userData.loadTestPrefs.qps);
      cov_1d17zcaqaj().s[227]++;
      setC(userData.loadTestPrefs.c);
      cov_1d17zcaqaj().s[228]++;
      setT(userData.loadTestPrefs.t);
      cov_1d17zcaqaj().s[229]++;
      setLoadGenerator(userData.loadTestPrefs.gen);
    } else {
      cov_1d17zcaqaj().b[52][1]++;
    }
  };

  cov_1d17zcaqaj().s[230]++;

  const getStaticPrometheusBoardConfig = () => {
    cov_1d17zcaqaj().f[27]++;
    cov_1d17zcaqaj().s[231]++;

    if ((cov_1d17zcaqaj().b[55][0]++, staticPrometheusBoardConfig) && (cov_1d17zcaqaj().b[55][1]++, staticPrometheusBoardConfig !== null) && (cov_1d17zcaqaj().b[55][2]++, Object.keys(props.staticPrometheusBoardConfig).length > 0) || (cov_1d17zcaqaj().b[55][3]++, staticPrometheusBoardConfigState) && (cov_1d17zcaqaj().b[55][4]++, staticPrometheusBoardConfigState !== null) && (cov_1d17zcaqaj().b[55][5]++, Object.keys(staticPrometheusBoardConfigState).length > 0)) {
      cov_1d17zcaqaj().b[54][0]++;
      cov_1d17zcaqaj().s[232]++;
      return;
    } else {
      cov_1d17zcaqaj().b[54][1]++;
    }

    cov_1d17zcaqaj().s[233]++;
    (0,_lib_data_fetch__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)('/api/telemetry/metrics/static-board', {
      credentials: 'include'
    }, result => {
      cov_1d17zcaqaj().f[28]++;
      cov_1d17zcaqaj().s[234]++;

      if ((cov_1d17zcaqaj().b[57][0]++, typeof result !== 'undefined') && (cov_1d17zcaqaj().b[57][1]++, typeof result.cluster !== 'undefined') && (cov_1d17zcaqaj().b[57][2]++, typeof result.node !== 'undefined') && (cov_1d17zcaqaj().b[57][3]++, typeof result.cluster.panels !== 'undefined') && (cov_1d17zcaqaj().b[57][4]++, result.cluster.panels.length > 0) && (cov_1d17zcaqaj().b[57][5]++, typeof result.node.panels !== 'undefined') && (cov_1d17zcaqaj().b[57][6]++, result.node.panels.length > 0)) {
        cov_1d17zcaqaj().b[56][0]++;
        cov_1d17zcaqaj().s[235]++;
        props.updateStaticPrometheusBoardConfig({
          staticPrometheusBoardConfig: result // will contain both the cluster and node keys for the respective boards

        });
        cov_1d17zcaqaj().s[236]++;
        setStaticPrometheusBoardConfig(result);
      } else {
        cov_1d17zcaqaj().b[56][1]++;
      }
    }, handleError('unable to fetch pre-configured boards'));
  };

  cov_1d17zcaqaj().s[237]++;

  const getK8sClusterIds = () => {
    cov_1d17zcaqaj().f[29]++;
    cov_1d17zcaqaj().s[238]++;
    return (0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_23__/* .getK8sClusterIdsFromCtxId */ .F3)(props.selectedK8sContexts, props.k8sconfig);
  };

  cov_1d17zcaqaj().s[239]++;

  const scanForMeshes = () => {
    cov_1d17zcaqaj().f[30]++;
    cov_1d17zcaqaj().s[240]++;

    if ((cov_1d17zcaqaj().b[59][0]++, typeof props.k8sConfig === 'undefined') || (cov_1d17zcaqaj().b[59][1]++, !props.k8sConfig.clusterConfigured)) {
      cov_1d17zcaqaj().b[58][0]++;
      cov_1d17zcaqaj().s[241]++;
      return;
    } else {
      cov_1d17zcaqaj().b[58][1]++;
    }
    /**
     * ALL_MESH indicates that we are interested in control plane
     * component of all of the service meshes supported by meshsync v2
     */


    const ALL_MESH = (cov_1d17zcaqaj().s[242]++, {
      type: 'ALL_MESH',
      k8sClusterIDs: getK8sClusterIds()
    });
    cov_1d17zcaqaj().s[243]++;
    (0,_graphql_queries_ControlPlanesQuery__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(ALL_MESH).subscribe({
      next: res => {
        cov_1d17zcaqaj().f[31]++;
        let result = (cov_1d17zcaqaj().s[244]++, res?.controlPlanesState);
        cov_1d17zcaqaj().s[245]++;

        if ((cov_1d17zcaqaj().b[61][0]++, typeof result !== 'undefined') && (cov_1d17zcaqaj().b[61][1]++, Object.keys(result).length > 0)) {
          cov_1d17zcaqaj().b[60][0]++;
          const adaptersList = (cov_1d17zcaqaj().s[246]++, []);
          cov_1d17zcaqaj().s[247]++;
          result.forEach(mesh => {
            cov_1d17zcaqaj().f[32]++;
            cov_1d17zcaqaj().s[248]++;

            if (mesh?.members.length > 0) {
              cov_1d17zcaqaj().b[62][0]++;
              let name = (cov_1d17zcaqaj().s[249]++, mesh?.name);
              cov_1d17zcaqaj().s[250]++;
              adaptersList.push( // Capatilize First Letter and replace undersocres
              name.split(/ |_/i).map(word => {
                cov_1d17zcaqaj().f[33]++;
                cov_1d17zcaqaj().s[251]++;
                return word.charAt(0).toUpperCase() + word.slice(1);
              }).join(' '));
            } else {
              cov_1d17zcaqaj().b[62][1]++;
            }
          });
          cov_1d17zcaqaj().s[252]++;
          setAvailableAdapters(adaptersList);
          cov_1d17zcaqaj().s[253]++;
          result.forEach(mesh => {
            cov_1d17zcaqaj().f[34]++;
            cov_1d17zcaqaj().s[254]++;
            setSelectedMesh(mesh?.name);
          });
        } else {
          cov_1d17zcaqaj().b[60][1]++;
        }
      },
      error: err => {
        cov_1d17zcaqaj().f[35]++;
        cov_1d17zcaqaj().s[255]++;
        return console.error(err);
      }
    });
  };

  cov_1d17zcaqaj().s[256]++;

  const getSMPMeshes = () => {
    cov_1d17zcaqaj().f[36]++;
    cov_1d17zcaqaj().s[257]++;

    if ((cov_1d17zcaqaj().b[64][0]++, isSMPMeshesFetched) && (cov_1d17zcaqaj().b[64][1]++, smpMeshes)) {
      cov_1d17zcaqaj().b[63][0]++;
      cov_1d17zcaqaj().s[258]++;
      setAvailableSMPMeshes([...smpMeshes.available_meshes].sort((m1, m2) => {
        cov_1d17zcaqaj().f[37]++;
        cov_1d17zcaqaj().s[259]++;
        return m1.localeCompare(m2);
      })); // shallow copy of the array to sort it
    } else {
      cov_1d17zcaqaj().b[63][1]++;
      cov_1d17zcaqaj().s[260]++;

      if (isSMPMeshError) {
        cov_1d17zcaqaj().b[65][0]++;
        cov_1d17zcaqaj().s[261]++;
        handleError('unable to fetch SMP meshes');
      } else {
        cov_1d17zcaqaj().b[65][1]++;
      }
    }
  };

  function handleError(msg) {
    cov_1d17zcaqaj().f[38]++;
    cov_1d17zcaqaj().s[262]++;
    return error => {
      cov_1d17zcaqaj().f[39]++;
      cov_1d17zcaqaj().s[263]++;
      setBlockRunTest(false);
      cov_1d17zcaqaj().s[264]++;
      setTimerDialogOpen(false);
      cov_1d17zcaqaj().s[265]++;
      closeEventStream();
      let finalMsg = (cov_1d17zcaqaj().s[266]++, msg);
      cov_1d17zcaqaj().s[267]++;

      if (typeof error === 'string') {
        cov_1d17zcaqaj().b[66][0]++;
        cov_1d17zcaqaj().s[268]++;
        finalMsg = `${msg}: ${error}`;
      } else {
        cov_1d17zcaqaj().b[66][1]++;
      }

      const notify = (cov_1d17zcaqaj().s[269]++, props.notify);
      cov_1d17zcaqaj().s[270]++;
      notify({
        message: finalMsg,
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_26__/* .EVENT_TYPES.ERROR */ .E_.ERROR,
        details: error.toString()
      });
    };
  }

  cov_1d17zcaqaj().s[271]++;

  const handleCertificateUpload = event => {
    cov_1d17zcaqaj().f[40]++;
    const file = (cov_1d17zcaqaj().s[272]++, event.target.files[0]);
    cov_1d17zcaqaj().s[273]++;

    if (file) {
      cov_1d17zcaqaj().b[67][0]++;
      const newMetadata = (cov_1d17zcaqaj().s[274]++, _objectSpread(_objectSpread({}, metadataState), {}, {
        ca_certificate: _objectSpread(_objectSpread({}, metadataState.ca_certificate), {}, {
          name: file.name
        })
      }));
      cov_1d17zcaqaj().s[275]++;
      setMetadata(newMetadata);
    } else {
      cov_1d17zcaqaj().b[67][1]++;
    }
  };

  cov_1d17zcaqaj().s[276]++;

  const handleTimerDialogClose = () => {
    cov_1d17zcaqaj().f[41]++;
    cov_1d17zcaqaj().s[277]++;
    setTimerDialogOpen(false);
  };

  const {
    classes,
    grafana,
    prometheus
  } = (cov_1d17zcaqaj().s[278]++, props);
  let localStaticPrometheusBoardConfig;
  cov_1d17zcaqaj().s[279]++;

  if ((cov_1d17zcaqaj().b[69][0]++, props.staticPrometheusBoardConfig) && (cov_1d17zcaqaj().b[69][1]++, props.staticPrometheusBoardConfig != null) && (cov_1d17zcaqaj().b[69][2]++, Object.keys(props.staticPrometheusBoardConfig).length > 0)) {
    cov_1d17zcaqaj().b[68][0]++;
    cov_1d17zcaqaj().s[280]++;
    localStaticPrometheusBoardConfig = props.staticPrometheusBoardConfig;
  } else {
    cov_1d17zcaqaj().b[68][1]++;
    cov_1d17zcaqaj().s[281]++;
    localStaticPrometheusBoardConfig = staticPrometheusBoardConfigState;
  }

  let chartStyle = (cov_1d17zcaqaj().s[282]++, {});
  cov_1d17zcaqaj().s[283]++;

  if (timerDialogOpenState) {
    cov_1d17zcaqaj().b[70][0]++;
    cov_1d17zcaqaj().s[284]++;
    chartStyle = {
      opacity: 0.3
    };
  } else {
    cov_1d17zcaqaj().b[70][1]++;
  }

  let displayStaticCharts = (cov_1d17zcaqaj().s[285]++, null);
  let displayGCharts = (cov_1d17zcaqaj().s[286]++, null);
  let displayPromCharts = (cov_1d17zcaqaj().s[287]++, null);
  cov_1d17zcaqaj().s[288]++;
  availableAdaptersState.forEach(item => {
    cov_1d17zcaqaj().f[42]++;
    const index = (cov_1d17zcaqaj().s[289]++, availableSMPMeshesState.indexOf(item));
    cov_1d17zcaqaj().s[290]++;

    if (index !== -1) {
      cov_1d17zcaqaj().b[71][0]++;
      cov_1d17zcaqaj().s[291]++;
      availableSMPMeshesState.splice(index, 1);
    } else {
      cov_1d17zcaqaj().b[71][1]++;
    }
  });
  cov_1d17zcaqaj().s[292]++;

  if ((cov_1d17zcaqaj().b[73][0]++, localStaticPrometheusBoardConfig) && (cov_1d17zcaqaj().b[73][1]++, localStaticPrometheusBoardConfig !== null) && (cov_1d17zcaqaj().b[73][2]++, Object.keys(localStaticPrometheusBoardConfig).length > 0) && (cov_1d17zcaqaj().b[73][3]++, prometheus.prometheusURL !== '')) {
    cov_1d17zcaqaj().b[72][0]++;
    cov_1d17zcaqaj().s[293]++;

    // only add testUUID to the board that should be persisted
    if (localStaticPrometheusBoardConfig.cluster) {
      cov_1d17zcaqaj().b[74][0]++;
      cov_1d17zcaqaj().s[294]++;
      localStaticPrometheusBoardConfig.cluster.testUUID = testUUIDState;
    } else {
      cov_1d17zcaqaj().b[74][1]++;
    }

    cov_1d17zcaqaj().s[295]++;
    displayStaticCharts = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
        variant: "h6",
        gutterBottom: true,
        className: classes.chartTitle,
        children: "Node Metrics"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_telemetry_grafana_GrafanaCustomCharts__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        boardPanelConfigs: [localStaticPrometheusBoardConfig.cluster, localStaticPrometheusBoardConfig.node],
        prometheusURL: prometheus.prometheusURL
      })]
    });
  } else {
    cov_1d17zcaqaj().b[72][1]++;
  }

  cov_1d17zcaqaj().s[296]++;

  if (prometheus.selectedPrometheusBoardsConfigs.length > 0) {
    cov_1d17zcaqaj().b[75][0]++;
    cov_1d17zcaqaj().s[297]++;
    displayPromCharts = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
        variant: "h6",
        gutterBottom: true,
        className: classes.chartTitleGraf,
        children: "Prometheus charts"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_telemetry_grafana_GrafanaCustomCharts__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        boardPanelConfigs: prometheus.selectedPrometheusBoardsConfigs,
        prometheusURL: prometheus.prometheusURL
      })]
    });
  } else {
    cov_1d17zcaqaj().b[75][1]++;
  }

  cov_1d17zcaqaj().s[298]++;

  if (grafana.selectedBoardsConfigs.length > 0) {
    cov_1d17zcaqaj().b[76][0]++;
    cov_1d17zcaqaj().s[299]++;
    displayGCharts = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
        variant: "h6",
        gutterBottom: true,
        className: classes.chartTitleGraf,
        children: "Grafana charts"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_telemetry_grafana_GrafanaCustomCharts__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        boardPanelConfigs: grafana.selectedBoardsConfigs,
        grafanaURL: grafana.grafanaURL,
        grafanaAPIKey: grafana.grafanaAPIKey
      })]
    });
  } else {
    cov_1d17zcaqaj().b[76][1]++;
  }

  cov_1d17zcaqaj().s[300]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.NoSsr, {
    children: (0,_utils_can__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_29__/* .keys.VIEW_PERFORMANCE_PROFILES.action */ .X.VIEW_PERFORMANCE_PROFILES.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_29__/* .keys.VIEW_PERFORMANCE_PROFILES.subject */ .X.VIEW_PERFORMANCE_PROFILES.subject) ? (cov_1d17zcaqaj().b[77][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.ModalBody, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
            container: true,
            spacing: 1,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              md: 6,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                id: "profileName",
                name: "profileName",
                label: "Profile Name",
                fullWidth: true,
                value: profileNameState,
                margin: "normal",
                variant: "outlined",
                onChange: handleChange('profileName'),
                inputProps: {
                  maxLength: 300
                },
                InputProps: {
                  endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.CustomTooltip, {
                    title: "Create a profile providing a name, if a profile name is not provided, a random one will be generated for you.",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                      className: classes.iconColor
                    })
                  })
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              md: 6,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                select: true,
                id: "meshName",
                name: "meshName",
                label: "Service Mesh",
                fullWidth: true,
                value: (cov_1d17zcaqaj().b[79][0]++, meshNameState === '') && (cov_1d17zcaqaj().b[79][1]++, selectedMeshState !== '') ? (cov_1d17zcaqaj().b[78][0]++, selectedMeshState) : (cov_1d17zcaqaj().b[78][1]++, meshNameState),
                margin: "normal",
                variant: "outlined",
                onChange: handleChange('meshName'),
                children: [(cov_1d17zcaqaj().b[80][0]++, availableAdaptersState) && (cov_1d17zcaqaj().b[80][1]++, availableAdaptersState.map(mesh => {
                  cov_1d17zcaqaj().f[43]++;
                  cov_1d17zcaqaj().s[301]++;
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
                    value: mesh.toLowerCase(),
                    children: mesh
                  }, `mh_-_${mesh}`);
                })), (cov_1d17zcaqaj().b[81][0]++, availableAdaptersState) && (cov_1d17zcaqaj().b[81][1]++, availableAdaptersState.length > 0) && (cov_1d17zcaqaj().b[81][2]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Divider, {})), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
                  value: "None",
                  children: "None"
                }, "mh_-_none"), (cov_1d17zcaqaj().b[82][0]++, availableSMPMeshesState) && (cov_1d17zcaqaj().b[82][1]++, availableSMPMeshesState.map(mesh => {
                  cov_1d17zcaqaj().f[44]++;
                  cov_1d17zcaqaj().s[302]++;
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
                    value: mesh.toLowerCase(),
                    children: mesh
                  }, `mh_-_${mesh}`);
                }))]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                required: true,
                id: "url",
                name: "url",
                label: "URL to test",
                type: "url",
                fullWidth: true,
                value: urlState,
                error: urlErrorState,
                helperText: urlErrorState ? (cov_1d17zcaqaj().b[83][0]++, 'Please enter a valid URL along with protocol') : (cov_1d17zcaqaj().b[83][1]++, ''),
                margin: "normal",
                variant: "outlined",
                onChange: handleChange('url'),
                InputProps: {
                  endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.CustomTooltip, {
                    title: "The Endpoint where the load will be generated and the perfromance test will run against.",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                      className: classes.iconColor
                    })
                  })
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              md: 4,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                required: true,
                id: "c",
                name: "c",
                label: "Concurrent requests",
                type: "number",
                fullWidth: true,
                value: cState,
                inputProps: {
                  min: '0',
                  step: '1'
                },
                margin: "normal",
                variant: "outlined",
                onChange: handleChange('c'),
                InputLabelProps: {
                  shrink: true
                },
                InputProps: {
                  endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.CustomTooltip, {
                    title: "Load Testing tool will create this many concurrent request against the endpoint.",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                      className: classes.iconColor
                    })
                  })
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              md: 4,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                required: true,
                id: "qps",
                name: "qps",
                label: "Queries per second",
                type: "number",
                fullWidth: true,
                value: qpsState,
                inputProps: {
                  min: '0',
                  step: '1'
                },
                margin: "normal",
                variant: "outlined",
                onChange: handleChange('qps'),
                InputLabelProps: {
                  shrink: true
                },
                InputProps: {
                  endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.CustomTooltip, {
                    title: "The Number of queries/second. If not provided then the MAX number of queries/second will be requested",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                      className: classes.iconColor
                    })
                  })
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              md: 4,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.CustomTooltip, {
                title: "Please use 'h', 'm' or 's' suffix for hour, minute or second respectively.",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__.Autocomplete, {
                  required: true,
                  id: "t",
                  name: "t",
                  freeSolo: true,
                  label: "Duration*",
                  fullWidth: true,
                  variant: "outlined",
                  className: classes.errorValue,
                  classes: {
                    root: tErrorState
                  },
                  value: tValueState,
                  inputValue: tState,
                  onChange: handleDurationChange,
                  onInputChange: handleInputDurationChange,
                  options: _lib_prePopulatedOptions__WEBPACK_IMPORTED_MODULE_21__/* .durationOptions */ .S,
                  style: {
                    marginTop: '16px',
                    marginBottom: '8px'
                  },
                  renderInput: params => {
                    cov_1d17zcaqaj().f[45]++;
                    cov_1d17zcaqaj().s[303]++;
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), _objectSpread(_objectSpread({}, params), {}, {
                      label: "Duration*",
                      variant: "outlined"
                    }));
                  },
                  InputProps: {
                    endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.CustomTooltip, {
                      title: "Default duration is 30 seconds",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                        className: classes.iconColor
                      })
                    })
                  }
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              md: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ExpansionPanel, {
                className: classes.expansionPanel,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ExpansionPanelSummary, {
                  expanded: true,
                  expandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                    align: "center",
                    color: "textSecondary",
                    variant: "h6",
                    children: "Advanced Options"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ExpansionPanelDetails, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                    container: true,
                    spacing: 1,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                      item: true,
                      xs: 12,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                        id: "headers",
                        name: "headers",
                        label: "Request Headers e.g. {\"host\":\"bookinfo.meshplay.io\"}",
                        fullWidth: true,
                        value: headersState,
                        multiline: true,
                        margin: "normal",
                        variant: "outlined",
                        onChange: handleChange('headers')
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                      item: true,
                      xs: 12,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                        id: "cookies",
                        name: "cookies",
                        label: "Request Cookies e.g. {\"yummy_cookie\":\"choco_chip\"}",
                        fullWidth: true,
                        value: cookiesState,
                        multiline: true,
                        margin: "normal",
                        variant: "outlined",
                        onChange: handleChange('cookies')
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                      item: true,
                      xs: 12,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                        id: "contentType",
                        name: "contentType",
                        label: "Content Type e.g. application/json",
                        fullWidth: true,
                        value: contentTypeState,
                        multiline: true,
                        margin: "normal",
                        variant: "outlined",
                        onChange: handleChange('contentType')
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                      item: true,
                      xs: 12,
                      md: 12,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                        id: "cookies",
                        name: "cookies",
                        label: "Request Body e.g. {\"method\":\"post\",\"url\":\"http://bookinfo.meshplay.io/test\"}",
                        fullWidth: true,
                        value: reqBodyState,
                        multiline: true,
                        margin: "normal",
                        variant: "outlined",
                        onChange: handleChange('reqBody')
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                      container: true,
                      xs: 12,
                      md: 12,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                          id: "additional_options",
                          name: "additional_options",
                          label: "Additional Options e.g. { `requestPerSecond`: 20 }",
                          fullWidth: true,
                          error: jsonErrorState,
                          helperText: jsonErrorState ? (cov_1d17zcaqaj().b[84][0]++, 'Please enter a valid JSON string') : (cov_1d17zcaqaj().b[84][1]++, ''),
                          value: additionalOptionsState.length > 150 ? (cov_1d17zcaqaj().b[85][0]++, `${additionalOptionsState.slice(0, 150)} .....`) : (cov_1d17zcaqaj().b[85][1]++, additionalOptionsState),
                          multiline: true,
                          margin: "normal",
                          variant: "outlined",
                          size: "small",
                          onChange: handleChange('additional_options')
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("label", {
                          htmlFor: "upload-additional-options",
                          style: {
                            paddingLeft: '0'
                          },
                          className: classes.upload,
                          fullWidth: true,
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
                            variant: "outlined",
                            onChange: handleChange('additional_options'),
                            "aria-label": "Upload Button",
                            component: "span",
                            className: classes.button,
                            style: {
                              margin: '0.5rem',
                              marginTop: '1.15rem'
                            },
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("input", {
                              id: "upload-additional-options",
                              type: "file",
                              accept: '.json',
                              name: "upload-button",
                              hidden: true,
                              "data-cy": "additional-options-upload-button"
                            }), "Browse"]
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.CustomTooltip, {
                            title: infoFlags,
                            interactive: true,
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                              className: classes.smallIcons
                            })
                          })]
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                      container: true,
                      xs: 12,
                      md: 12,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                          size: "small",
                          variant: "outlined",
                          margin: "mormal",
                          fullWidth: true,
                          label: (cov_1d17zcaqaj().b[86][0]++, caCertificateState?.name) || (cov_1d17zcaqaj().b[86][1]++, 'Upload SSL Certificate e.g. .crt file'),
                          style: {
                            width: '100%',
                            margin: '0.5rem 0'
                          },
                          value: metadataState?.ca_certificate.name
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("label", {
                          htmlFor: "upload-cacertificate",
                          className: classes.upload,
                          style: {
                            paddingLeft: '0'
                          },
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
                            variant: "outlined",
                            "aria-label": "Upload Button",
                            onChange: handleChange('caCertificate'),
                            component: "span",
                            className: classes.button,
                            style: {
                              margin: '0.5rem'
                            },
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("input", {
                              id: "upload-cacertificate",
                              type: "file",
                              accept: '.crt',
                              name: "upload-button",
                              hidden: true,
                              "data-cy": "cacertificate-upload-button",
                              onChange: handleCertificateUpload
                            }), "Browse"]
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.CustomTooltip, {
                            title: infoCRTCertificates,
                            interactive: true,
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                              className: classes.smallIcons
                            })
                          })]
                        })
                      })]
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
              item: true,
              xs: 12,
              md: 4,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
                component: "loadGenerator",
                className: classes.margin,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
                  component: "loadGenerator",
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  },
                  children: ["Load generator", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_MeshplayMeshInterface_PatternService_CustomTextTooltip__WEBPACK_IMPORTED_MODULE_31__/* .CustomTextTooltip */ .y, {
                    title: infoloadGenerators,
                    interactive: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_HelpOutlineOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
                      className: classes.smallIcons
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.RadioGroup, {
                  "aria-label": "loadGenerator",
                  name: "loadGenerator",
                  value: loadGeneratorState,
                  onChange: handleChange('loadGenerator'),
                  row: true,
                  children: loadGenerators.map((lg, index) => {
                    cov_1d17zcaqaj().f[46]++;
                    cov_1d17zcaqaj().s[304]++;
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControlLabel, {
                      value: lg,
                      disabled: lg === 'wrk2',
                      control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Radio, {
                        color: "primary",
                        className: classes.radio
                      }),
                      label: lg
                    }, index);
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_khulnasoft_sistent__WEBPACK_IMPORTED_MODULE_8__.ModalFooter, {
          variant: "filled",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("div", {
              className: classes.buttons,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
                type: "submit",
                variant: "contained",
                color: "primary",
                size: "large",
                className: classes.spacing,
                disabled: disableTestState,
                onClick: () => {
                  cov_1d17zcaqaj().f[47]++;
                  cov_1d17zcaqaj().s[305]++;
                  return handleAbort();
                },
                children: "Clear"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
                type: "submit",
                variant: "contained",
                color: "primary",
                size: "large",
                onClick: () => {
                  cov_1d17zcaqaj().f[48]++;
                  cov_1d17zcaqaj().s[306]++;
                  return submitProfile();
                },
                className: classes.spacing,
                disabled: disableTestState,
                startIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_15___default()), {}),
                children: "Save Profile"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
                type: "submit",
                variant: "contained",
                color: "primary",
                size: "large",
                onClick: handleSubmit,
                className: classes.spacing,
                disabled: (cov_1d17zcaqaj().b[87][0]++, blockRunTestState) || (cov_1d17zcaqaj().b[87][1]++, disableTestState) || (cov_1d17zcaqaj().b[87][2]++, !(0,_utils_can__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_29__/* .keys.RUN_TEST.action */ .X.RUN_TEST.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_29__/* .keys.RUN_TEST.subject */ .X.RUN_TEST.subject)),
                children: blockRunTestState ? (cov_1d17zcaqaj().b[88][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.CircularProgress, {
                  size: 30
                })) : (cov_1d17zcaqaj().b[88][1]++, 'Run Test')
              })]
            })
          })
        }), timerDialogOpenState ? (cov_1d17zcaqaj().b[89][0]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("div", {
          className: classes.centerTimer,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_load_test_timer_dialog__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            open: timerDialogOpenState,
            t: tState,
            onClose: handleTimerDialogClose,
            countDownComplete: handleTimerDialogClose
          })
        })) : (cov_1d17zcaqaj().b[89][1]++, null), (cov_1d17zcaqaj().b[90][0]++, result) && (cov_1d17zcaqaj().b[90][1]++, result.runner_results) && (cov_1d17zcaqaj().b[90][2]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
            variant: "h6",
            gutterBottom: true,
            className: classes.chartTitle,
            id: "timerAnchor",
            children: ["Test Results", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
              "aria-label": "download",
              color: "inherit" // onClick={() => self.props.closeSnackbar(key) }
              ,
              href: `/api/perf/profile/result/${encodeURIComponent(result.meshplay_id)}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx((_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_12___default()), {
                style: _css_icons_styles__WEBPACK_IMPORTED_MODULE_24__/* .iconMedium */ .hv
              })
            }, "download")]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("div", {
            className: classes.chartContent,
            style: chartStyle,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_MeshplayChart__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              rawdata: [(cov_1d17zcaqaj().b[92][0]++, result) && (cov_1d17zcaqaj().b[92][1]++, result.runner_results) ? (cov_1d17zcaqaj().b[91][0]++, result) : (cov_1d17zcaqaj().b[91][1]++, {})],
              data: [(cov_1d17zcaqaj().b[94][0]++, result) && (cov_1d17zcaqaj().b[94][1]++, result.runner_results) ? (cov_1d17zcaqaj().b[93][0]++, result.runner_results) : (cov_1d17zcaqaj().b[93][1]++, {})]
            })
          })]
        }))]
      }), displayStaticCharts, displayPromCharts, displayGCharts]
    })) : (cov_1d17zcaqaj().b[77][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_General_error_404_index__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {}))
  });
};

cov_1d17zcaqaj().s[307]++;
cov_1d17zcaqaj().s[308]++;

const mapDispatchToProps = dispatch => {
  cov_1d17zcaqaj().f[49]++;
  cov_1d17zcaqaj().s[309]++;
  return {
    updateLoadTestData: (0,redux__WEBPACK_IMPORTED_MODULE_11__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_16__/* .updateLoadTestData */ .ZY, dispatch),
    updateStaticPrometheusBoardConfig: (0,redux__WEBPACK_IMPORTED_MODULE_11__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_16__/* .updateStaticPrometheusBoardConfig */ .eS, dispatch),
    updateLoadTestPref: (0,redux__WEBPACK_IMPORTED_MODULE_11__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_16__/* .updateLoadTestPref */ .K, dispatch),
    updateProgress: (0,redux__WEBPACK_IMPORTED_MODULE_11__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_16__/* .updateProgress */ .RO, dispatch)
  };
};

cov_1d17zcaqaj().s[310]++;

const mapStateToProps = state => {
  cov_1d17zcaqaj().f[50]++;
  const grafana = (cov_1d17zcaqaj().s[311]++, state.get('grafana').toJS());
  const prometheus = (cov_1d17zcaqaj().s[312]++, state.get('prometheus').toJS());
  const k8sConfig = (cov_1d17zcaqaj().s[313]++, state.get('k8sConfig'));
  const staticPrometheusBoardConfig = (cov_1d17zcaqaj().s[314]++, state.get('staticPrometheusBoardConfig').toJS());
  const selectedK8sContexts = (cov_1d17zcaqaj().s[315]++, state.get('selectedK8sContexts'));
  cov_1d17zcaqaj().s[316]++;
  return {
    grafana,
    prometheus,
    staticPrometheusBoardConfig,
    k8sConfig,
    selectedK8sContexts
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)((0,react_redux__WEBPACK_IMPORTED_MODULE_10__.connect)(mapStateToProps, mapDispatchToProps)((0,_utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_25__/* .withNotify */ .n)(MeshplayPerformanceComponent))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ fetchControlPlanes)
/* harmony export */ });
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66516);
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__]);
_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _ControlPlanesQuery;

function cov_wmud0xemh() {
  var path = "/workspace/meshplay/ui/components/graphql/queries/ControlPlanesQuery.js";
  var hash = "6c9f81fdbb9751f626312ef15024e850685b1bd5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/queries/ControlPlanesQuery.js",
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
          column: 36
        }
      },
      "2": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 63
        }
      }
    },
    fnMap: {
      "0": {
        name: "fetchControlPlanes",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 42
          }
        },
        loc: {
          start: {
            line: 4,
            column: 54
          },
          end: {
            line: 23,
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
    hash: "6c9f81fdbb9751f626312ef15024e850685b1bd5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wmud0xemh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_wmud0xemh();


function fetchControlPlanes(variables) {
  cov_wmud0xemh().f[0]++;
  const environment = (cov_wmud0xemh().s[0]++, (0,_lib_relayEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .createRelayEnvironment */ .eM)({}));
  const vars = (cov_wmud0xemh().s[1]++, {
    filter: variables
  });
  const ControlPlanesQueryNode = _ControlPlanesQuery !== void 0 ? _ControlPlanesQuery : _ControlPlanesQuery = __webpack_require__(55622);
  cov_wmud0xemh().s[2]++;
  return (0,react_relay__WEBPACK_IMPORTED_MODULE_0__.fetchQuery)(environment, ControlPlanesQueryNode, vars);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55622:
/***/ ((module) => {

/**
 * @generated SignedSource<<c7d21a27e2d8edf0e2cc11470bd35a50>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */


function cov_brlec4gec() {
  var path = "/workspace/meshplay/ui/components/graphql/queries/__generated__/ControlPlanesQuery.graphql.js";
  var hash = "e563b7c176dcf7cf15e8b3e5185b307aba1ff593";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/graphql/queries/__generated__/ControlPlanesQuery.graphql.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 11
        },
        end: {
          line: 105,
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
          line: 25,
          column: 1
        }
      },
      "3": {
        start: {
          line: 26,
          column: 5
        },
        end: {
          line: 78,
          column: 1
        }
      },
      "4": {
        start: {
          line: 79,
          column: 0
        },
        end: {
          line: 104,
          column: 2
        }
      },
      "5": {
        start: {
          line: 107,
          column: 0
        },
        end: {
          line: 107,
          column: 47
        }
      },
      "6": {
        start: {
          line: 109,
          column: 0
        },
        end: {
          line: 109,
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
            line: 105,
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
    hash: "e563b7c176dcf7cf15e8b3e5185b307aba1ff593"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_brlec4gec = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_brlec4gec();
var node = (cov_brlec4gec().s[0]++, function () {
  cov_brlec4gec().f[0]++;
  var v0 = (cov_brlec4gec().s[1]++, [{
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }]),
      v1 = (cov_brlec4gec().s[2]++, {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }),
      v2 = (cov_brlec4gec().s[3]++, [{
    "alias": "controlPlanesState",
    "args": [{
      "kind": "Variable",
      "name": "filter",
      "variableName": "filter"
    }],
    "concreteType": "ControlPlane",
    "kind": "LinkedField",
    "name": "getControlPlanes",
    "plural": true,
    "selections": [v1
    /*: any*/
    , {
      "alias": null,
      "args": null,
      "concreteType": "ControlPlaneMember",
      "kind": "LinkedField",
      "name": "members",
      "plural": true,
      "selections": [v1
      /*: any*/
      , {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "version",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "component",
        "storageKey": null
      }, {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "namespace",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "storageKey": null
  }]);
  cov_brlec4gec().s[4]++;
  return {
    "fragment": {
      "argumentDefinitions": v0
      /*: any*/
      ,
      "kind": "Fragment",
      "metadata": null,
      "name": "ControlPlanesQuery",
      "selections": v2
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
      "name": "ControlPlanesQuery",
      "selections": v2
      /*: any*/

    },
    "params": {
      "cacheID": "2a087a7971334b86b29d478c175cd336",
      "id": null,
      "metadata": {},
      "name": "ControlPlanesQuery",
      "operationKind": "query",
      "text": "query ControlPlanesQuery(\n  $filter: ServiceMeshFilter\n) {\n  controlPlanesState: getControlPlanes(filter: $filter) {\n    name\n    members {\n      name\n      version\n      component\n      namespace\n    }\n  }\n}\n"
    }
  };
}());
cov_brlec4gec().s[5]++;
node.hash = "82f1d5dbf1eec9d253f34bc6b6a7e6f4";
cov_brlec4gec().s[6]++;
module.exports = node;

/***/ }),

/***/ 68971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function cov_21xr9cyzlf() {
  var path = "/workspace/meshplay/ui/components/load-test-timer-dialog.js";
  var hash = "353aa60a445b7cfb4c47be221a131a54fcf90e41";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/load-test-timer-dialog.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 57
        }
      },
      "2": {
        start: {
          line: 9,
          column: 28
        },
        end: {
          line: 57,
          column: 1
        }
      },
      "3": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 10,
          column: 35
        }
      },
      "4": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 30,
          column: 10
        }
      },
      "5": {
        start: {
          line: 13,
          column: 15
        },
        end: {
          line: 13,
          column: 16
        }
      },
      "6": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "7": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 52
        }
      },
      "8": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 40
        }
      },
      "9": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "10": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 31
        }
      },
      "11": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 14
        }
      },
      "12": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 26
        }
      },
      "13": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 14
        }
      },
      "14": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 21
        }
      },
      "15": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "16": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 16
        }
      },
      "17": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 56,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 9,
            column: 29
          }
        },
        loc: {
          start: {
            line: 9,
            column: 64
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 12
          },
          end: {
            line: 12,
            column: 13
          }
        },
        loc: {
          start: {
            line: 12,
            column: 18
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 0
          },
          end: {
            line: 7,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 0
          },
          end: {
            line: 7,
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
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 21,
            column: 6
          },
          end: {
            line: 23,
            column: 14
          }
        }, {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 26,
            column: 14
          }
        }, {
          start: {
            line: 27,
            column: 6
          },
          end: {
            line: 28,
            column: 21
          }
        }],
        line: 20
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 34,
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
        line: 32
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
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "353aa60a445b7cfb4c47be221a131a54fcf90e41"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_21xr9cyzlf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_21xr9cyzlf();



let ReactCountdownClock;
cov_21xr9cyzlf().s[0]++;

if (false) {} else {
  cov_21xr9cyzlf().b[0][1]++;
}

cov_21xr9cyzlf().s[2]++;

const LoadTestTimerDialog = ({
  countDownComplete,
  t,
  open
}) => {
  cov_21xr9cyzlf().f[0]++;
  const [dur, setDur] = (cov_21xr9cyzlf().s[3]++, (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0));
  cov_21xr9cyzlf().s[4]++;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    cov_21xr9cyzlf().f[1]++;
    let tNum = (cov_21xr9cyzlf().s[5]++, 0);
    cov_21xr9cyzlf().s[6]++;

    try {
      cov_21xr9cyzlf().s[7]++;
      tNum = parseInt(t.substring(0, t.length - 1));
    } catch (ex) {
      cov_21xr9cyzlf().s[8]++;
      console.error('Unexpected Error');
    }

    cov_21xr9cyzlf().s[9]++;

    switch (t.substring(t.length - 1, t.length).toLowerCase()) {
      case 'h':
        cov_21xr9cyzlf().b[1][0]++;
        cov_21xr9cyzlf().s[10]++;
        setDur(tNum * 60 * 60);
        cov_21xr9cyzlf().s[11]++;
        break;

      case 'm':
        cov_21xr9cyzlf().b[1][1]++;
        cov_21xr9cyzlf().s[12]++;
        setDur(tNum * 60);
        cov_21xr9cyzlf().s[13]++;
        break;

      default:
        cov_21xr9cyzlf().b[1][2]++;
        cov_21xr9cyzlf().s[14]++;
        setDur(tNum);
    }
  }, [t]);
  cov_21xr9cyzlf().s[15]++;

  if (!open) {
    cov_21xr9cyzlf().b[2][0]++;
    cov_21xr9cyzlf().s[16]++;
    return null;
  } else {
    cov_21xr9cyzlf().b[2][1]++;
  }

  cov_21xr9cyzlf().s[17]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.NoSsr, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      style: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '400px',
        position: 'relative',
        zIndex: '0'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ReactCountdownClock, {
        seconds: dur,
        color: "#667C89",
        alpha: 0.9,
        size: 400,
        onComplete: countDownComplete
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadTestTimerDialog);

/***/ }),

/***/ 14163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ durationOptions)
/* harmony export */ });
function cov_4426mztos() {
  var path = "/workspace/meshplay/ui/lib/prePopulatedOptions.js";
  var hash = "d62883bdf6aa97d6d2a790e71e556e33e7f89ca3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/lib/prePopulatedOptions.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 31
        },
        end: {
          line: 14,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d62883bdf6aa97d6d2a790e71e556e33e7f89ca3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_4426mztos = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_4426mztos();
const durationOptions = (cov_4426mztos().s[0]++, ['15s', '30s', '1m', '3m', '5m', '10m', '30m', '1h', '2h', '5h', '10h', '1d']);

/***/ }),

/***/ 41372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useGetMeshQuery)
/* harmony export */ });
/* unused harmony export meshApi */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51125);
function cov_26g0qfno47() {
  var path = "/workspace/meshplay/ui/rtk-query/mesh.js";
  var hash = "e689d16bfba2360469ca9fb6808b277395c84075";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/rtk-query/mesh.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 23
        },
        end: {
          line: 9,
          column: 2
        }
      },
      "1": {
        start: {
          line: 4,
          column: 27
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "2": {
        start: {
          line: 6,
          column: 19
        },
        end: {
          line: 6,
          column: 25
        }
      },
      "3": {
        start: {
          line: 11,
          column: 35
        },
        end: {
          line: 11,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 13
          },
          end: {
            line: 4,
            column: 14
          }
        },
        loc: {
          start: {
            line: 4,
            column: 27
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 13
          },
          end: {
            line: 6,
            column: 14
          }
        },
        loc: {
          start: {
            line: 6,
            column: 19
          },
          end: {
            line: 6,
            column: 25
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e689d16bfba2360469ca9fb6808b277395c84075"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_26g0qfno47 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_26g0qfno47();

const meshApi = (cov_26g0qfno47().s[0]++, _index__WEBPACK_IMPORTED_MODULE_0__/* .api.injectEndpoints */ .h.injectEndpoints({
  endpoints: builder => {
    cov_26g0qfno47().f[0]++;
    cov_26g0qfno47().s[1]++;
    return {
      getMesh: builder.query({
        query: () => {
          cov_26g0qfno47().f[1]++;
          cov_26g0qfno47().s[2]++;
          return 'mesh';
        }
      })
    };
  }
}));
const {
  useGetMeshQuery
} = (cov_26g0qfno47().s[3]++, meshApi);

/***/ }),

/***/ 63659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ci": () => (/* binding */ useDeletePerformanceProfileMutation),
/* harmony export */   "pW": () => (/* binding */ useSavePerformanceProfileMutation)
/* harmony export */ });
/* unused harmony exports useGetPerformanceProfilesQuery, useGetProfileResultsQuery, useGetPerformanceProfileByIdQuery, useGetProfileResultsByIdQuery */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51125);
function cov_10zvsl6a16() {
  var path = "/workspace/meshplay/ui/rtk-query/performance-profile.js";
  var hash = "6acd1ff77151f7453b75ff797c88065a40aa7c90";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/rtk-query/performance-profile.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 27
        },
        end: {
          line: 77,
          column: 4
        }
      },
      "2": {
        start: {
          line: 12,
          column: 29
        },
        end: {
          line: 76,
          column: 5
        }
      },
      "3": {
        start: {
          line: 14,
          column: 30
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "4": {
        start: {
          line: 24,
          column: 28
        },
        end: {
          line: 24,
          column: 64
        }
      },
      "5": {
        start: {
          line: 27,
          column: 30
        },
        end: {
          line: 31,
          column: 9
        }
      },
      "6": {
        start: {
          line: 35,
          column: 30
        },
        end: {
          line: 46,
          column: 9
        }
      },
      "7": {
        start: {
          line: 47,
          column: 28
        },
        end: {
          line: 47,
          column: 64
        }
      },
      "8": {
        start: {
          line: 50,
          column: 30
        },
        end: {
          line: 53,
          column: 9
        }
      },
      "9": {
        start: {
          line: 54,
          column: 28
        },
        end: {
          line: 54,
          column: 64
        }
      },
      "10": {
        start: {
          line: 57,
          column: 30
        },
        end: {
          line: 60,
          column: 9
        }
      },
      "11": {
        start: {
          line: 64,
          column: 30
        },
        end: {
          line: 73,
          column: 9
        }
      },
      "12": {
        start: {
          line: 74,
          column: 28
        },
        end: {
          line: 74,
          column: 64
        }
      },
      "13": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 15
          },
          end: {
            line: 12,
            column: 16
          }
        },
        loc: {
          start: {
            line: 12,
            column: 29
          },
          end: {
            line: 76,
            column: 5
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 15
          },
          end: {
            line: 14,
            column: 16
          }
        },
        loc: {
          start: {
            line: 14,
            column: 30
          },
          end: {
            line: 23,
            column: 9
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 22
          },
          end: {
            line: 24,
            column: 23
          }
        },
        loc: {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 24,
            column: 64
          }
        },
        line: 24
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 15
          },
          end: {
            line: 27,
            column: 16
          }
        },
        loc: {
          start: {
            line: 27,
            column: 30
          },
          end: {
            line: 31,
            column: 9
          }
        },
        line: 27
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 35,
            column: 15
          },
          end: {
            line: 35,
            column: 16
          }
        },
        loc: {
          start: {
            line: 35,
            column: 30
          },
          end: {
            line: 46,
            column: 9
          }
        },
        line: 35
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 47,
            column: 22
          },
          end: {
            line: 47,
            column: 23
          }
        },
        loc: {
          start: {
            line: 47,
            column: 28
          },
          end: {
            line: 47,
            column: 64
          }
        },
        line: 47
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 50,
            column: 15
          },
          end: {
            line: 50,
            column: 16
          }
        },
        loc: {
          start: {
            line: 50,
            column: 30
          },
          end: {
            line: 53,
            column: 9
          }
        },
        line: 50
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 54,
            column: 22
          },
          end: {
            line: 54,
            column: 23
          }
        },
        loc: {
          start: {
            line: 54,
            column: 28
          },
          end: {
            line: 54,
            column: 64
          }
        },
        line: 54
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 57,
            column: 15
          },
          end: {
            line: 57,
            column: 16
          }
        },
        loc: {
          start: {
            line: 57,
            column: 30
          },
          end: {
            line: 60,
            column: 9
          }
        },
        line: 57
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 64,
            column: 15
          },
          end: {
            line: 64,
            column: 16
          }
        },
        loc: {
          start: {
            line: 64,
            column: 30
          },
          end: {
            line: 73,
            column: 9
          }
        },
        line: 64
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 74,
            column: 22
          },
          end: {
            line: 74,
            column: 23
          }
        },
        loc: {
          start: {
            line: 74,
            column: 28
          },
          end: {
            line: 74,
            column: 64
          }
        },
        line: 74
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
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
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
      "10": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6acd1ff77151f7453b75ff797c88065a40aa7c90"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10zvsl6a16 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_10zvsl6a16();

const TAGS = (cov_10zvsl6a16().s[0]++, {
  PERFORMANCE_PROFILE: 'performance-profile'
});
const performanceProfile = (cov_10zvsl6a16().s[1]++, _index__WEBPACK_IMPORTED_MODULE_0__/* .api.enhanceEndpoints */ .h.enhanceEndpoints({
  addTagTypes: [TAGS.PERFORMANCE_PROFILE]
}).injectEndpoints({
  endpoints: builder => {
    cov_10zvsl6a16().f[0]++;
    cov_10zvsl6a16().s[2]++;
    return {
      getPerformanceProfiles: builder.query({
        query: queryArg => {
          cov_10zvsl6a16().f[1]++;
          cov_10zvsl6a16().s[3]++;
          return {
            url: `user/performance/profiles`,
            params: {
              page: queryArg.page,
              pagesize: queryArg.pagesize,
              search: queryArg.search,
              order: queryArg.order
            },
            method: 'GET'
          };
        },
        providesTags: () => {
          cov_10zvsl6a16().f[2]++;
          cov_10zvsl6a16().s[4]++;
          return [{
            type: TAGS.PERFORMANCE_PROFILE
          }];
        }
      }),
      savePerformanceProfile: builder.mutation({
        query: queryArg => {
          cov_10zvsl6a16().f[3]++;
          cov_10zvsl6a16().s[5]++;
          return {
            url: `user/performance/profiles`,
            method: 'POST',
            body: queryArg.body
          };
        },
        invalidatesTags: [{
          type: TAGS.PERFORMANCE_PROFILE
        }]
      }),
      getProfileResults: builder.query({
        query: queryArg => {
          cov_10zvsl6a16().f[4]++;
          cov_10zvsl6a16().s[6]++;
          return {
            url: `user/performance/profiles/results`,
            params: {
              page: queryArg.page,
              pagesize: queryArg.pagesize,
              search: queryArg.search,
              order: queryArg.order,
              from: queryArg.from,
              to: queryArg.to
            },
            method: 'GET'
          };
        },
        providesTags: () => {
          cov_10zvsl6a16().f[5]++;
          cov_10zvsl6a16().s[7]++;
          return [{
            type: TAGS.PERFORMANCE_PROFILE
          }];
        }
      }),
      getPerformanceProfileById: builder.query({
        query: queryArg => {
          cov_10zvsl6a16().f[6]++;
          cov_10zvsl6a16().s[8]++;
          return {
            url: `user/performance/profiles/${queryArg.id}`,
            method: 'GET'
          };
        },
        providesTags: () => {
          cov_10zvsl6a16().f[7]++;
          cov_10zvsl6a16().s[9]++;
          return [{
            type: TAGS.PERFORMANCE_PROFILE
          }];
        }
      }),
      deletePerformanceProfile: builder.mutation({
        query: queryArg => {
          cov_10zvsl6a16().f[8]++;
          cov_10zvsl6a16().s[10]++;
          return {
            url: `user/performance/profiles/${queryArg.id}`,
            method: 'DELETE'
          };
        },
        invalidatesTags: [{
          type: TAGS.PERFORMANCE_PROFILE
        }]
      }),
      getProfileResultsById: builder.query({
        query: queryArg => {
          cov_10zvsl6a16().f[9]++;
          cov_10zvsl6a16().s[11]++;
          return {
            url: `user/performance/profiles/${queryArg.id}/results`,
            params: {
              page: queryArg.page,
              pagesize: queryArg.pagesize,
              search: queryArg.search,
              order: queryArg.order
            },
            method: 'GET'
          };
        },
        providesTags: () => {
          cov_10zvsl6a16().f[10]++;
          cov_10zvsl6a16().s[12]++;
          return [{
            type: TAGS.PERFORMANCE_PROFILE
          }];
        }
      })
    };
  }
}));
const {
  useGetPerformanceProfilesQuery,
  useSavePerformanceProfileMutation,
  useGetProfileResultsQuery,
  useGetPerformanceProfileByIdQuery,
  useDeletePerformanceProfileMutation,
  useGetProfileResultsByIdQuery
} = (cov_10zvsl6a16().s[13]++, performanceProfile);

/***/ }),

/***/ 24198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ URLValidator)
/* harmony export */ });
function cov_tyhehgfol() {
  var path = "/workspace/meshplay/ui/utils/URLValidator.js";
  var hash = "3a338bbba3c03b35660eefd169c6c91f7958dd64";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/utils/URLValidator.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 28
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 44
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "2": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 28
          },
          end: {
            line: 1,
            column: 29
          }
        },
        loc: {
          start: {
            line: 1,
            column: 37
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 1
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
    hash: "3a338bbba3c03b35660eefd169c6c91f7958dd64"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_tyhehgfol = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_tyhehgfol();
cov_tyhehgfol().s[0]++;
const URLValidator = url => {
  cov_tyhehgfol().f[0]++;
  const compulsoryProtocolValidUrlPattern = (cov_tyhehgfol().s[1]++, new RegExp('(^(http|https|nats|tcp):\\/\\/)' + // compulsory protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.{0,})+[a-z]{0,}|' + // domain name
  'localhost|' + '((\\d{1,3}.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i')); // fragment locator

  cov_tyhehgfol().s[2]++;
  return url?.match(compulsoryProtocolValidUrlPattern);
};

/***/ })

};
;