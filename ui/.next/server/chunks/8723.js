"use strict";
exports.id = 8723;
exports.ids = [8723];
exports.modules = {

/***/ 48723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V6": () => (/* binding */ SelectDeploymentTarget),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SelectDeploymentTarget_ */
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17501);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72105);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68885);
/* harmony import */ var _ConnectionWizard_helpers_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24094);
/* harmony import */ var _ConnectionWizard_helpers_kubernetesHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36968);
/* harmony import */ var _utils_multi_ctx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7806);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77605);
/* harmony import */ var _material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_RemoveDone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76068);
/* harmony import */ var _mui_icons_material_RemoveDone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_RemoveDone__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57579);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _css_icons_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52518);
/* harmony import */ var _shapes_RoundedTriangle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75951);
/* harmony import */ var _themes_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(25879);
/* harmony import */ var _shapes_Octagon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(43086);
/* harmony import */ var _assets_icons_Pattern__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(76445);
/* harmony import */ var _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(93113);
/* harmony import */ var _lib_event_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(42880);
/* harmony import */ var _EmptyState_K8sContextEmptyState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(69124);
/* harmony import */ var _utils_Enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(46811);
/* harmony import */ var _utils_can__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54872);
/* harmony import */ var _utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(24018);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(66568);
/* harmony import */ var _hooks_useKubernetesHook__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(22921);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ConnectionWizard_helpers_kubernetesHelpers__WEBPACK_IMPORTED_MODULE_7__, _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_19__, _utils_can__WEBPACK_IMPORTED_MODULE_23__, _Header__WEBPACK_IMPORTED_MODULE_25__, _hooks_useKubernetesHook__WEBPACK_IMPORTED_MODULE_26__]);
([_ConnectionWizard_helpers_kubernetesHelpers__WEBPACK_IMPORTED_MODULE_7__, _utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_19__, _utils_can__WEBPACK_IMPORTED_MODULE_23__, _Header__WEBPACK_IMPORTED_MODULE_25__, _hooks_useKubernetesHook__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function cov_2pufgpf5eg() {
  var path = "/workspace/meshplay/ui/components/ConfirmationModal.js";
  var hash = "b80fac0a8936e089ed3c90505ca46b70a26949d1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/ConfirmationModal.js",
    statementMap: {
      "0": {
        start: {
          line: 44,
          column: 15
        },
        end: {
          line: 218,
          column: 2
        }
      },
      "1": {
        start: {
          line: 44,
          column: 27
        },
        end: {
          line: 218,
          column: 1
        }
      },
      "2": {
        start: {
          line: 235,
          column: 6
        },
        end: {
          line: 235,
          column: 11
        }
      },
      "3": {
        start: {
          line: 237,
          column: 30
        },
        end: {
          line: 237,
          column: 43
        }
      },
      "4": {
        start: {
          line: 238,
          column: 34
        },
        end: {
          line: 238,
          column: 48
        }
      },
      "5": {
        start: {
          line: 239,
          column: 33
        },
        end: {
          line: 239,
          column: 45
        }
      },
      "6": {
        start: {
          line: 240,
          column: 21
        },
        end: {
          line: 240,
          column: 38
        }
      },
      "7": {
        start: {
          line: 242,
          column: 4
        },
        end: {
          line: 242,
          column: 89
        }
      },
      "8": {
        start: {
          line: 244,
          column: 2
        },
        end: {
          line: 247,
          column: 13
        }
      },
      "9": {
        start: {
          line: 245,
          column: 4
        },
        end: {
          line: 245,
          column: 19
        }
      },
      "10": {
        start: {
          line: 246,
          column: 4
        },
        end: {
          line: 246,
          column: 28
        }
      },
      "11": {
        start: {
          line: 249,
          column: 2
        },
        end: {
          line: 251,
          column: 28
        }
      },
      "12": {
        start: {
          line: 250,
          column: 4
        },
        end: {
          line: 250,
          column: 28
        }
      },
      "13": {
        start: {
          line: 253,
          column: 29
        },
        end: {
          line: 255,
          column: 3
        }
      },
      "14": {
        start: {
          line: 254,
          column: 4
        },
        end: {
          line: 254,
          column: 22
        }
      },
      "15": {
        start: {
          line: 257,
          column: 32
        },
        end: {
          line: 268,
          column: 3
        }
      },
      "16": {
        start: {
          line: 258,
          column: 4
        },
        end: {
          line: 258,
          column: 43
        }
      },
      "17": {
        start: {
          line: 259,
          column: 4
        },
        end: {
          line: 267,
          column: 6
        }
      },
      "18": {
        start: {
          line: 261,
          column: 8
        },
        end: {
          line: 261,
          column: 47
        }
      },
      "19": {
        start: {
          line: 264,
          column: 8
        },
        end: {
          line: 264,
          column: 47
        }
      },
      "20": {
        start: {
          line: 270,
          column: 23
        },
        end: {
          line: 284,
          column: 3
        }
      },
      "21": {
        start: {
          line: 271,
          column: 4
        },
        end: {
          line: 276,
          column: 5
        }
      },
      "22": {
        start: {
          line: 272,
          column: 6
        },
        end: {
          line: 275,
          column: 9
        }
      },
      "23": {
        start: {
          line: 278,
          column: 4
        },
        end: {
          line: 282,
          column: 5
        }
      },
      "24": {
        start: {
          line: 279,
          column: 6
        },
        end: {
          line: 279,
          column: 22
        }
      },
      "25": {
        start: {
          line: 280,
          column: 11
        },
        end: {
          line: 282,
          column: 5
        }
      },
      "26": {
        start: {
          line: 281,
          column: 6
        },
        end: {
          line: 281,
          column: 24
        }
      },
      "27": {
        start: {
          line: 283,
          column: 4
        },
        end: {
          line: 283,
          column: 18
        }
      },
      "28": {
        start: {
          line: 286,
          column: 25
        },
        end: {
          line: 298,
          column: 3
        }
      },
      "29": {
        start: {
          line: 287,
          column: 4
        },
        end: {
          line: 290,
          column: 5
        }
      },
      "30": {
        start: {
          line: 288,
          column: 6
        },
        end: {
          line: 288,
          column: 30
        }
      },
      "31": {
        start: {
          line: 289,
          column: 6
        },
        end: {
          line: 289,
          column: 13
        }
      },
      "32": {
        start: {
          line: 291,
          column: 21
        },
        end: {
          line: 291,
          column: 23
        }
      },
      "33": {
        start: {
          line: 292,
          column: 4
        },
        end: {
          line: 296,
          column: 7
        }
      },
      "34": {
        start: {
          line: 293,
          column: 6
        },
        end: {
          line: 295,
          column: 7
        }
      },
      "35": {
        start: {
          line: 294,
          column: 8
        },
        end: {
          line: 294,
          column: 29
        }
      },
      "36": {
        start: {
          line: 297,
          column: 4
        },
        end: {
          line: 297,
          column: 28
        }
      },
      "37": {
        start: {
          line: 300,
          column: 27
        },
        end: {
          line: 324,
          column: 3
        }
      },
      "38": {
        start: {
          line: 301,
          column: 4
        },
        end: {
          line: 309,
          column: 5
        }
      },
      "39": {
        start: {
          line: 302,
          column: 6
        },
        end: {
          line: 307,
          column: 7
        }
      },
      "40": {
        start: {
          line: 304,
          column: 8
        },
        end: {
          line: 304,
          column: 52
        }
      },
      "41": {
        start: {
          line: 306,
          column: 8
        },
        end: {
          line: 306,
          column: 57
        }
      },
      "42": {
        start: {
          line: 308,
          column: 6
        },
        end: {
          line: 308,
          column: 13
        }
      },
      "43": {
        start: {
          line: 311,
          column: 4
        },
        end: {
          line: 323,
          column: 5
        }
      },
      "44": {
        start: {
          line: 312,
          column: 31
        },
        end: {
          line: 312,
          column: 78
        }
      },
      "45": {
        start: {
          line: 312,
          column: 67
        },
        end: {
          line: 312,
          column: 77
        }
      },
      "46": {
        start: {
          line: 313,
          column: 6
        },
        end: {
          line: 313,
          column: 64
        }
      },
      "47": {
        start: {
          line: 314,
          column: 11
        },
        end: {
          line: 323,
          column: 5
        }
      },
      "48": {
        start: {
          line: 315,
          column: 28
        },
        end: {
          line: 315,
          column: 68
        }
      },
      "49": {
        start: {
          line: 316,
          column: 6
        },
        end: {
          line: 316,
          column: 89
        }
      },
      "50": {
        start: {
          line: 316,
          column: 74
        },
        end: {
          line: 316,
          column: 84
        }
      },
      "51": {
        start: {
          line: 318,
          column: 6
        },
        end: {
          line: 321,
          column: 7
        }
      },
      "52": {
        start: {
          line: 319,
          column: 8
        },
        end: {
          line: 319,
          column: 57
        }
      },
      "53": {
        start: {
          line: 320,
          column: 8
        },
        end: {
          line: 320,
          column: 15
        }
      },
      "54": {
        start: {
          line: 322,
          column: 6
        },
        end: {
          line: 322,
          column: 76
        }
      },
      "55": {
        start: {
          line: 325,
          column: 2
        },
        end: {
          line: 602,
          column: 4
        }
      },
      "56": {
        start: {
          line: 367,
          column: 36
        },
        end: {
          line: 367,
          column: 64
        }
      },
      "57": {
        start: {
          line: 400,
          column: 34
        },
        end: {
          line: 400,
          column: 62
        }
      },
      "58": {
        start: {
          line: 418,
          column: 34
        },
        end: {
          line: 418,
          column: 62
        }
      },
      "59": {
        start: {
          line: 460,
          column: 45
        },
        end: {
          line: 460,
          column: 79
        }
      },
      "60": {
        start: {
          line: 475,
          column: 44
        },
        end: {
          line: 475,
          column: 67
        }
      },
      "61": {
        start: {
          line: 486,
          column: 26
        },
        end: {
          line: 519,
          column: 32
        }
      },
      "62": {
        start: {
          line: 501,
          column: 50
        },
        end: {
          line: 501,
          column: 74
        }
      },
      "63": {
        start: {
          line: 507,
          column: 49
        },
        end: {
          line: 507,
          column: 89
        }
      },
      "64": {
        start: {
          line: 605,
          column: 24
        },
        end: {
          line: 610,
          column: 1
        }
      },
      "65": {
        start: {
          line: 606,
          column: 2
        },
        end: {
          line: 609,
          column: 4
        }
      },
      "66": {
        start: {
          line: 612,
          column: 27
        },
        end: {
          line: 615,
          column: 2
        }
      },
      "67": {
        start: {
          line: 612,
          column: 42
        },
        end: {
          line: 615,
          column: 1
        }
      },
      "68": {
        start: {
          line: 619,
          column: 39
        },
        end: {
          line: 721,
          column: 1
        }
      },
      "69": {
        start: {
          line: 625,
          column: 32
        },
        end: {
          line: 627,
          column: 4
        }
      },
      "70": {
        start: {
          line: 626,
          column: 4
        },
        end: {
          line: 626,
          column: 40
        }
      },
      "71": {
        start: {
          line: 628,
          column: 50
        },
        end: {
          line: 628,
          column: 81
        }
      },
      "72": {
        start: {
          line: 629,
          column: 27
        },
        end: {
          line: 629,
          column: 46
        }
      },
      "73": {
        start: {
          line: 631,
          column: 25
        },
        end: {
          line: 643,
          column: 3
        }
      },
      "74": {
        start: {
          line: 632,
          column: 4
        },
        end: {
          line: 635,
          column: 5
        }
      },
      "75": {
        start: {
          line: 633,
          column: 6
        },
        end: {
          line: 633,
          column: 38
        }
      },
      "76": {
        start: {
          line: 634,
          column: 6
        },
        end: {
          line: 634,
          column: 13
        }
      },
      "77": {
        start: {
          line: 636,
          column: 21
        },
        end: {
          line: 636,
          column: 23
        }
      },
      "78": {
        start: {
          line: 637,
          column: 4
        },
        end: {
          line: 641,
          column: 7
        }
      },
      "79": {
        start: {
          line: 638,
          column: 6
        },
        end: {
          line: 640,
          column: 7
        }
      },
      "80": {
        start: {
          line: 639,
          column: 8
        },
        end: {
          line: 639,
          column: 29
        }
      },
      "81": {
        start: {
          line: 642,
          column: 4
        },
        end: {
          line: 642,
          column: 36
        }
      },
      "82": {
        start: {
          line: 645,
          column: 27
        },
        end: {
          line: 669,
          column: 3
        }
      },
      "83": {
        start: {
          line: 646,
          column: 4
        },
        end: {
          line: 654,
          column: 5
        }
      },
      "84": {
        start: {
          line: 647,
          column: 6
        },
        end: {
          line: 652,
          column: 7
        }
      },
      "85": {
        start: {
          line: 649,
          column: 8
        },
        end: {
          line: 649,
          column: 52
        }
      },
      "86": {
        start: {
          line: 651,
          column: 8
        },
        end: {
          line: 651,
          column: 57
        }
      },
      "87": {
        start: {
          line: 653,
          column: 6
        },
        end: {
          line: 653,
          column: 13
        }
      },
      "88": {
        start: {
          line: 656,
          column: 4
        },
        end: {
          line: 668,
          column: 5
        }
      },
      "89": {
        start: {
          line: 657,
          column: 31
        },
        end: {
          line: 657,
          column: 75
        }
      },
      "90": {
        start: {
          line: 657,
          column: 64
        },
        end: {
          line: 657,
          column: 74
        }
      },
      "91": {
        start: {
          line: 658,
          column: 6
        },
        end: {
          line: 658,
          column: 64
        }
      },
      "92": {
        start: {
          line: 659,
          column: 11
        },
        end: {
          line: 668,
          column: 5
        }
      },
      "93": {
        start: {
          line: 660,
          column: 28
        },
        end: {
          line: 660,
          column: 68
        }
      },
      "94": {
        start: {
          line: 661,
          column: 6
        },
        end: {
          line: 661,
          column: 89
        }
      },
      "95": {
        start: {
          line: 661,
          column: 74
        },
        end: {
          line: 661,
          column: 84
        }
      },
      "96": {
        start: {
          line: 663,
          column: 6
        },
        end: {
          line: 666,
          column: 7
        }
      },
      "97": {
        start: {
          line: 664,
          column: 8
        },
        end: {
          line: 664,
          column: 57
        }
      },
      "98": {
        start: {
          line: 665,
          column: 8
        },
        end: {
          line: 665,
          column: 15
        }
      },
      "99": {
        start: {
          line: 667,
          column: 6
        },
        end: {
          line: 667,
          column: 73
        }
      },
      "100": {
        start: {
          line: 671,
          column: 2
        },
        end: {
          line: 720,
          column: 4
        }
      },
      "101": {
        start: {
          line: 678,
          column: 29
        },
        end: {
          line: 678,
          column: 63
        }
      },
      "102": {
        start: {
          line: 693,
          column: 28
        },
        end: {
          line: 693,
          column: 51
        }
      },
      "103": {
        start: {
          line: 704,
          column: 10
        },
        end: {
          line: 714,
          column: 12
        }
      },
      "104": {
        start: {
          line: 713,
          column: 34
        },
        end: {
          line: 713,
          column: 58
        }
      },
      "105": {
        start: {
          line: 723,
          column: 38
        },
        end: {
          line: 725,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 44,
            column: 15
          },
          end: {
            line: 44,
            column: 16
          }
        },
        loc: {
          start: {
            line: 44,
            column: 27
          },
          end: {
            line: 218,
            column: 1
          }
        },
        line: 44
      },
      "1": {
        name: "ConfirmationMsg",
        decl: {
          start: {
            line: 220,
            column: 9
          },
          end: {
            line: 220,
            column: 24
          }
        },
        loc: {
          start: {
            line: 220,
            column: 32
          },
          end: {
            line: 603,
            column: 1
          }
        },
        line: 220
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 244,
            column: 12
          },
          end: {
            line: 244,
            column: 13
          }
        },
        loc: {
          start: {
            line: 244,
            column: 18
          },
          end: {
            line: 247,
            column: 3
          }
        },
        line: 244
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 249,
            column: 12
          },
          end: {
            line: 249,
            column: 13
          }
        },
        loc: {
          start: {
            line: 249,
            column: 18
          },
          end: {
            line: 251,
            column: 3
          }
        },
        line: 249
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 253,
            column: 29
          },
          end: {
            line: 253,
            column: 30
          }
        },
        loc: {
          start: {
            line: 253,
            column: 48
          },
          end: {
            line: 255,
            column: 3
          }
        },
        line: 253
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 257,
            column: 32
          },
          end: {
            line: 257,
            column: 33
          }
        },
        loc: {
          start: {
            line: 257,
            column: 43
          },
          end: {
            line: 268,
            column: 3
          }
        },
        line: 257
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 260,
            column: 59
          },
          end: {
            line: 260,
            column: 60
          }
        },
        loc: {
          start: {
            line: 261,
            column: 8
          },
          end: {
            line: 261,
            column: 47
          }
        },
        line: 261
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 263,
            column: 61
          },
          end: {
            line: 263,
            column: 62
          }
        },
        loc: {
          start: {
            line: 264,
            column: 8
          },
          end: {
            line: 264,
            column: 47
          }
        },
        line: 264
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 270,
            column: 23
          },
          end: {
            line: 270,
            column: 24
          }
        },
        loc: {
          start: {
            line: 270,
            column: 29
          },
          end: {
            line: 284,
            column: 3
          }
        },
        line: 270
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 286,
            column: 25
          },
          end: {
            line: 286,
            column: 26
          }
        },
        loc: {
          start: {
            line: 286,
            column: 37
          },
          end: {
            line: 298,
            column: 3
          }
        },
        line: 286
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 292,
            column: 23
          },
          end: {
            line: 292,
            column: 24
          }
        },
        loc: {
          start: {
            line: 292,
            column: 32
          },
          end: {
            line: 296,
            column: 5
          }
        },
        line: 292
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 300,
            column: 27
          },
          end: {
            line: 300,
            column: 28
          }
        },
        loc: {
          start: {
            line: 300,
            column: 35
          },
          end: {
            line: 324,
            column: 3
          }
        },
        line: 300
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 312,
            column: 58
          },
          end: {
            line: 312,
            column: 59
          }
        },
        loc: {
          start: {
            line: 312,
            column: 67
          },
          end: {
            line: 312,
            column: 77
          }
        },
        line: 312
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 316,
            column: 65
          },
          end: {
            line: 316,
            column: 66
          }
        },
        loc: {
          start: {
            line: 316,
            column: 74
          },
          end: {
            line: 316,
            column: 84
          }
        },
        line: 316
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 367,
            column: 25
          },
          end: {
            line: 367,
            column: 26
          }
        },
        loc: {
          start: {
            line: 367,
            column: 36
          },
          end: {
            line: 367,
            column: 64
          }
        },
        line: 367
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 400,
            column: 23
          },
          end: {
            line: 400,
            column: 24
          }
        },
        loc: {
          start: {
            line: 400,
            column: 34
          },
          end: {
            line: 400,
            column: 62
          }
        },
        line: 400
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 418,
            column: 23
          },
          end: {
            line: 418,
            column: 24
          }
        },
        loc: {
          start: {
            line: 418,
            column: 34
          },
          end: {
            line: 418,
            column: 62
          }
        },
        line: 418
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 460,
            column: 34
          },
          end: {
            line: 460,
            column: 35
          }
        },
        loc: {
          start: {
            line: 460,
            column: 45
          },
          end: {
            line: 460,
            column: 79
          }
        },
        line: 460
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 475,
            column: 38
          },
          end: {
            line: 475,
            column: 39
          }
        },
        loc: {
          start: {
            line: 475,
            column: 44
          },
          end: {
            line: 475,
            column: 67
          }
        },
        line: 475
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 485,
            column: 37
          },
          end: {
            line: 485,
            column: 38
          }
        },
        loc: {
          start: {
            line: 486,
            column: 26
          },
          end: {
            line: 519,
            column: 32
          }
        },
        line: 486
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 501,
            column: 44
          },
          end: {
            line: 501,
            column: 45
          }
        },
        loc: {
          start: {
            line: 501,
            column: 50
          },
          end: {
            line: 501,
            column: 74
          }
        },
        line: 501
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 507,
            column: 43
          },
          end: {
            line: 507,
            column: 44
          }
        },
        loc: {
          start: {
            line: 507,
            column: 49
          },
          end: {
            line: 507,
            column: 89
          }
        },
        line: 507
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 605,
            column: 24
          },
          end: {
            line: 605,
            column: 25
          }
        },
        loc: {
          start: {
            line: 605,
            column: 35
          },
          end: {
            line: 610,
            column: 1
          }
        },
        line: 605
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 612,
            column: 27
          },
          end: {
            line: 612,
            column: 28
          }
        },
        loc: {
          start: {
            line: 612,
            column: 42
          },
          end: {
            line: 615,
            column: 1
          }
        },
        line: 612
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 619,
            column: 39
          },
          end: {
            line: 619,
            column: 40
          }
        },
        loc: {
          start: {
            line: 624,
            column: 6
          },
          end: {
            line: 721,
            column: 1
          }
        },
        line: 624
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 625,
            column: 65
          },
          end: {
            line: 625,
            column: 66
          }
        },
        loc: {
          start: {
            line: 625,
            column: 88
          },
          end: {
            line: 627,
            column: 3
          }
        },
        line: 625
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 631,
            column: 25
          },
          end: {
            line: 631,
            column: 26
          }
        },
        loc: {
          start: {
            line: 631,
            column: 37
          },
          end: {
            line: 643,
            column: 3
          }
        },
        line: 631
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 637,
            column: 23
          },
          end: {
            line: 637,
            column: 24
          }
        },
        loc: {
          start: {
            line: 637,
            column: 32
          },
          end: {
            line: 641,
            column: 5
          }
        },
        line: 637
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 645,
            column: 27
          },
          end: {
            line: 645,
            column: 28
          }
        },
        loc: {
          start: {
            line: 645,
            column: 35
          },
          end: {
            line: 669,
            column: 3
          }
        },
        line: 645
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 657,
            column: 55
          },
          end: {
            line: 657,
            column: 56
          }
        },
        loc: {
          start: {
            line: 657,
            column: 64
          },
          end: {
            line: 657,
            column: 74
          }
        },
        line: 657
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 661,
            column: 65
          },
          end: {
            line: 661,
            column: 66
          }
        },
        loc: {
          start: {
            line: 661,
            column: 74
          },
          end: {
            line: 661,
            column: 84
          }
        },
        line: 661
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 678,
            column: 18
          },
          end: {
            line: 678,
            column: 19
          }
        },
        loc: {
          start: {
            line: 678,
            column: 29
          },
          end: {
            line: 678,
            column: 63
          }
        },
        line: 678
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 693,
            column: 22
          },
          end: {
            line: 693,
            column: 23
          }
        },
        loc: {
          start: {
            line: 693,
            column: 28
          },
          end: {
            line: 693,
            column: 51
          }
        },
        line: 693
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 703,
            column: 35
          },
          end: {
            line: 703,
            column: 36
          }
        },
        loc: {
          start: {
            line: 704,
            column: 10
          },
          end: {
            line: 714,
            column: 12
          }
        },
        line: 704
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 713,
            column: 28
          },
          end: {
            line: 713,
            column: 29
          }
        },
        loc: {
          start: {
            line: 713,
            column: 34
          },
          end: {
            line: 713,
            column: 58
          }
        },
        line: 713
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 79,
            column: 6
          },
          end: {
            line: 81,
            column: 51
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 80,
            column: 10
          },
          end: {
            line: 80,
            column: 48
          }
        }, {
          start: {
            line: 81,
            column: 10
          },
          end: {
            line: 81,
            column: 51
          }
        }],
        line: 79
      },
      "1": {
        loc: {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 140,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 139,
            column: 12
          },
          end: {
            line: 139,
            column: 45
          }
        }, {
          start: {
            line: 140,
            column: 12
          },
          end: {
            line: 140,
            column: 50
          }
        }],
        line: 138
      },
      "2": {
        loc: {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 242,
            column: 89
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 242,
            column: 53
          }
        }, {
          start: {
            line: 242,
            column: 57
          },
          end: {
            line: 242,
            column: 89
          }
        }],
        line: 242
      },
      "3": {
        loc: {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 276,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 276,
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
        line: 271
      },
      "4": {
        loc: {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 282,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 282,
            column: 5
          }
        }, {
          start: {
            line: 280,
            column: 11
          },
          end: {
            line: 282,
            column: 5
          }
        }],
        line: 278
      },
      "5": {
        loc: {
          start: {
            line: 280,
            column: 11
          },
          end: {
            line: 282,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 280,
            column: 11
          },
          end: {
            line: 282,
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
        line: 280
      },
      "6": {
        loc: {
          start: {
            line: 287,
            column: 4
          },
          end: {
            line: 290,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 287,
            column: 4
          },
          end: {
            line: 290,
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
        line: 287
      },
      "7": {
        loc: {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 295,
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
        line: 293
      },
      "8": {
        loc: {
          start: {
            line: 301,
            column: 4
          },
          end: {
            line: 309,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 301,
            column: 4
          },
          end: {
            line: 309,
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
        line: 301
      },
      "9": {
        loc: {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 307,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 307,
            column: 7
          }
        }, {
          start: {
            line: 305,
            column: 13
          },
          end: {
            line: 307,
            column: 7
          }
        }],
        line: 302
      },
      "10": {
        loc: {
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 323,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 323,
            column: 5
          }
        }, {
          start: {
            line: 314,
            column: 11
          },
          end: {
            line: 323,
            column: 5
          }
        }],
        line: 311
      },
      "11": {
        loc: {
          start: {
            line: 314,
            column: 11
          },
          end: {
            line: 323,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 314,
            column: 11
          },
          end: {
            line: 323,
            column: 5
          }
        }, {
          start: {
            line: 317,
            column: 11
          },
          end: {
            line: 323,
            column: 5
          }
        }],
        line: 314
      },
      "12": {
        loc: {
          start: {
            line: 318,
            column: 6
          },
          end: {
            line: 321,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 318,
            column: 6
          },
          end: {
            line: 321,
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
        line: 318
      },
      "13": {
        loc: {
          start: {
            line: 355,
            column: 19
          },
          end: {
            line: 355,
            column: 65
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 355,
            column: 36
          },
          end: {
            line: 355,
            column: 42
          }
        }, {
          start: {
            line: 355,
            column: 45
          },
          end: {
            line: 355,
            column: 65
          }
        }],
        line: 355
      },
      "14": {
        loc: {
          start: {
            line: 355,
            column: 45
          },
          end: {
            line: 355,
            column: 65
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 355,
            column: 60
          },
          end: {
            line: 355,
            column: 61
          }
        }, {
          start: {
            line: 355,
            column: 64
          },
          end: {
            line: 355,
            column: 65
          }
        }],
        line: 355
      },
      "15": {
        loc: {
          start: {
            line: 363,
            column: 13
          },
          end: {
            line: 392,
            column: 13
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 363,
            column: 13
          },
          end: {
            line: 363,
            column: 29
          }
        }, {
          start: {
            line: 364,
            column: 14
          },
          end: {
            line: 391,
            column: 16
          }
        }],
        line: 363
      },
      "16": {
        loc: {
          start: {
            line: 375,
            column: 21
          },
          end: {
            line: 387,
            column: 21
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 375,
            column: 21
          },
          end: {
            line: 375,
            column: 48
          }
        }, {
          start: {
            line: 376,
            column: 22
          },
          end: {
            line: 386,
            column: 28
          }
        }],
        line: 375
      },
      "17": {
        loc: {
          start: {
            line: 382,
            column: 33
          },
          end: {
            line: 382,
            column: 83
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 382,
            column: 63
          },
          end: {
            line: 382,
            column: 78
          }
        }, {
          start: {
            line: 382,
            column: 81
          },
          end: {
            line: 382,
            column: 83
          }
        }],
        line: 382
      },
      "18": {
        loc: {
          start: {
            line: 395,
            column: 16
          },
          end: {
            line: 396,
            column: 92
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 395,
            column: 16
          },
          end: {
            line: 395,
            column: 79
          }
        }, {
          start: {
            line: 396,
            column: 17
          },
          end: {
            line: 396,
            column: 79
          }
        }, {
          start: {
            line: 396,
            column: 83
          },
          end: {
            line: 396,
            column: 91
          }
        }],
        line: 395
      },
      "19": {
        loc: {
          start: {
            line: 413,
            column: 16
          },
          end: {
            line: 414,
            column: 88
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 413,
            column: 16
          },
          end: {
            line: 413,
            column: 75
          }
        }, {
          start: {
            line: 414,
            column: 17
          },
          end: {
            line: 414,
            column: 75
          }
        }, {
          start: {
            line: 414,
            column: 79
          },
          end: {
            line: 414,
            column: 87
          }
        }],
        line: 413
      },
      "20": {
        loc: {
          start: {
            line: 426,
            column: 19
          },
          end: {
            line: 431,
            column: 19
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 426,
            column: 19
          },
          end: {
            line: 426,
            column: 46
          }
        }, {
          start: {
            line: 427,
            column: 20
          },
          end: {
            line: 430,
            column: 26
          }
        }],
        line: 426
      },
      "21": {
        loc: {
          start: {
            line: 437,
            column: 11
          },
          end: {
            line: 529,
            column: 11
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 437,
            column: 12
          },
          end: {
            line: 437,
            column: 37
          }
        }, {
          start: {
            line: 437,
            column: 41
          },
          end: {
            line: 437,
            column: 68
          }
        }, {
          start: {
            line: 438,
            column: 12
          },
          end: {
            line: 528,
            column: 28
          }
        }],
        line: 437
      },
      "22": {
        loc: {
          start: {
            line: 440,
            column: 49
          },
          end: {
            line: 440,
            column: 83
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 440,
            column: 49
          },
          end: {
            line: 440,
            column: 64
          }
        }, {
          start: {
            line: 440,
            column: 68
          },
          end: {
            line: 440,
            column: 83
          }
        }],
        line: 440
      },
      "23": {
        loc: {
          start: {
            line: 444,
            column: 21
          },
          end: {
            line: 451,
            column: 21
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 445,
            column: 22
          },
          end: {
            line: 448,
            column: 25
          }
        }, {
          start: {
            line: 450,
            column: 22
          },
          end: {
            line: 450,
            column: 24
          }
        }],
        line: 444
      },
      "24": {
        loc: {
          start: {
            line: 447,
            column: 51
          },
          end: {
            line: 447,
            column: 80
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 447,
            column: 72
          },
          end: {
            line: 447,
            column: 75
          }
        }, {
          start: {
            line: 447,
            column: 78
          },
          end: {
            line: 447,
            column: 80
          }
        }],
        line: 447
      },
      "25": {
        loc: {
          start: {
            line: 453,
            column: 19
          },
          end: {
            line: 525,
            column: 19
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 454,
            column: 20
          },
          end: {
            line: 522,
            column: 33
          }
        }, {
          start: {
            line: 524,
            column: 20
          },
          end: {
            line: 524,
            column: 37
          }
        }],
        line: 453
      },
      "26": {
        loc: {
          start: {
            line: 471,
            column: 23
          },
          end: {
            line: 482,
            column: 23
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 472,
            column: 24
          },
          end: {
            line: 479,
            column: 30
          }
        }, {
          start: {
            line: 481,
            column: 24
          },
          end: {
            line: 481,
            column: 85
          }
        }],
        line: 471
      },
      "27": {
        loc: {
          start: {
            line: 497,
            column: 36
          },
          end: {
            line: 499,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 497,
            column: 36
          },
          end: {
            line: 497,
            column: 73
          }
        }, {
          start: {
            line: 498,
            column: 37
          },
          end: {
            line: 498,
            column: 68
          }
        }, {
          start: {
            line: 499,
            column: 38
          },
          end: {
            line: 499,
            column: 70
          }
        }],
        line: 497
      },
      "28": {
        loc: {
          start: {
            line: 530,
            column: 11
          },
          end: {
            line: 534,
            column: 11
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 530,
            column: 11
          },
          end: {
            line: 530,
            column: 36
          }
        }, {
          start: {
            line: 531,
            column: 12
          },
          end: {
            line: 533,
            column: 28
          }
        }],
        line: 530
      },
      "29": {
        loc: {
          start: {
            line: 538,
            column: 13
          },
          end: {
            line: 597,
            column: 13
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 539,
            column: 14
          },
          end: {
            line: 582,
            column: 17
          }
        }, {
          start: {
            line: 584,
            column: 14
          },
          end: {
            line: 596,
            column: 23
          }
        }],
        line: 538
      },
      "30": {
        loc: {
          start: {
            line: 538,
            column: 13
          },
          end: {
            line: 538,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 538,
            column: 13
          },
          end: {
            line: 538,
            column: 38
          }
        }, {
          start: {
            line: 538,
            column: 42
          },
          end: {
            line: 538,
            column: 69
          }
        }],
        line: 538
      },
      "31": {
        loc: {
          start: {
            line: 548,
            column: 29
          },
          end: {
            line: 548,
            column: 86
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 548,
            column: 59
          },
          end: {
            line: 548,
            column: 81
          }
        }, {
          start: {
            line: 548,
            column: 84
          },
          end: {
            line: 548,
            column: 86
          }
        }],
        line: 548
      },
      "32": {
        loc: {
          start: {
            line: 555,
            column: 21
          },
          end: {
            line: 555,
            column: 84
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 555,
            column: 51
          },
          end: {
            line: 555,
            column: 67
          }
        }, {
          start: {
            line: 555,
            column: 70
          },
          end: {
            line: 555,
            column: 84
          }
        }],
        line: 555
      },
      "33": {
        loc: {
          start: {
            line: 562,
            column: 20
          },
          end: {
            line: 568,
            column: 40
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 563,
            column: 24
          },
          end: {
            line: 565,
            column: 40
          }
        }, {
          start: {
            line: 566,
            column: 24
          },
          end: {
            line: 568,
            column: 40
          }
        }],
        line: 562
      },
      "34": {
        loc: {
          start: {
            line: 563,
            column: 24
          },
          end: {
            line: 565,
            column: 40
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 564,
            column: 26
          },
          end: {
            line: 564,
            column: 48
          }
        }, {
          start: {
            line: 565,
            column: 26
          },
          end: {
            line: 565,
            column: 40
          }
        }],
        line: 563
      },
      "35": {
        loc: {
          start: {
            line: 566,
            column: 24
          },
          end: {
            line: 568,
            column: 40
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 567,
            column: 26
          },
          end: {
            line: 567,
            column: 45
          }
        }, {
          start: {
            line: 568,
            column: 26
          },
          end: {
            line: 568,
            column: 40
          }
        }],
        line: 566
      },
      "36": {
        loc: {
          start: {
            line: 579,
            column: 21
          },
          end: {
            line: 579,
            column: 72
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 579,
            column: 51
          },
          end: {
            line: 579,
            column: 61
          }
        }, {
          start: {
            line: 579,
            column: 64
          },
          end: {
            line: 579,
            column: 72
          }
        }],
        line: 579
      },
      "37": {
        loc: {
          start: {
            line: 632,
            column: 4
          },
          end: {
            line: 635,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 632,
            column: 4
          },
          end: {
            line: 635,
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
        line: 632
      },
      "38": {
        loc: {
          start: {
            line: 638,
            column: 6
          },
          end: {
            line: 640,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 638,
            column: 6
          },
          end: {
            line: 640,
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
        line: 638
      },
      "39": {
        loc: {
          start: {
            line: 646,
            column: 4
          },
          end: {
            line: 654,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 646,
            column: 4
          },
          end: {
            line: 654,
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
        line: 646
      },
      "40": {
        loc: {
          start: {
            line: 647,
            column: 6
          },
          end: {
            line: 652,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 647,
            column: 6
          },
          end: {
            line: 652,
            column: 7
          }
        }, {
          start: {
            line: 650,
            column: 13
          },
          end: {
            line: 652,
            column: 7
          }
        }],
        line: 647
      },
      "41": {
        loc: {
          start: {
            line: 656,
            column: 4
          },
          end: {
            line: 668,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 656,
            column: 4
          },
          end: {
            line: 668,
            column: 5
          }
        }, {
          start: {
            line: 659,
            column: 11
          },
          end: {
            line: 668,
            column: 5
          }
        }],
        line: 656
      },
      "42": {
        loc: {
          start: {
            line: 659,
            column: 11
          },
          end: {
            line: 668,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 659,
            column: 11
          },
          end: {
            line: 668,
            column: 5
          }
        }, {
          start: {
            line: 662,
            column: 11
          },
          end: {
            line: 668,
            column: 5
          }
        }],
        line: 659
      },
      "43": {
        loc: {
          start: {
            line: 663,
            column: 6
          },
          end: {
            line: 666,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 663,
            column: 6
          },
          end: {
            line: 666,
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
        line: 663
      },
      "44": {
        loc: {
          start: {
            line: 671,
            column: 9
          },
          end: {
            line: 720,
            column: 3
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 672,
            column: 4
          },
          end: {
            line: 717,
            column: 17
          }
        }, {
          start: {
            line: 719,
            column: 4
          },
          end: {
            line: 719,
            column: 57
          }
        }],
        line: 671
      },
      "45": {
        loc: {
          start: {
            line: 689,
            column: 7
          },
          end: {
            line: 700,
            column: 7
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 690,
            column: 8
          },
          end: {
            line: 697,
            column: 14
          }
        }, {
          start: {
            line: 699,
            column: 8
          },
          end: {
            line: 699,
            column: 61
          }
        }],
        line: 689
      },
      "46": {
        loc: {
          start: {
            line: 710,
            column: 14
          },
          end: {
            line: 711,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 710,
            column: 14
          },
          end: {
            line: 710,
            column: 47
          }
        }, {
          start: {
            line: 711,
            column: 15
          },
          end: {
            line: 711,
            column: 43
          }
        }, {
          start: {
            line: 711,
            column: 47
          },
          end: {
            line: 711,
            column: 76
          }
        }],
        line: 710
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
      "105": 0
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
      "34": 0
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
      "18": [0, 0, 0],
      "19": [0, 0, 0],
      "20": [0, 0],
      "21": [0, 0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
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
      "46": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b80fac0a8936e089ed3c90505ca46b70a26949d1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pufgpf5eg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2pufgpf5eg();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































cov_2pufgpf5eg().s[0]++;

const styles = theme => {
  cov_2pufgpf5eg().f[0]++;
  cov_2pufgpf5eg().s[1]++;
  return {
    dialogBox: {},
    icon: {
      display: 'inline',
      verticalAlign: 'text-top',
      width: theme.spacing(1.75),
      marginLeft: theme.spacing(0.5)
    },
    chip: {
      height: '50px',
      fontSize: '15px',
      position: 'relative',
      top: theme.spacing(0.5),
      [theme.breakpoints.down('md')]: {
        fontSize: '12px'
      }
    },
    ctxChip: {
      cursor: 'pointer',
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(1),
      height: '100%',
      padding: theme.spacing(0.5)
    },
    ctxIcon: {
      display: 'inline',
      verticalAlign: 'text-top',
      width: theme.spacing(2.5),
      marginLeft: theme.spacing(0.5)
    },
    title: {
      textAlign: 'center',
      // minWidth : 300,
      padding: theme.spacing(1),
      color: '#fff',
      backgroundColor: theme.palette.type == 'light' ? (cov_2pufgpf5eg().b[0][0]++, theme.palette.secondary.mainBackground) : (cov_2pufgpf5eg().b[0][1]++, theme.palette.secondary.confirmationModal),
      fontSize: '1rem'
    },
    subtitle: {
      minWidth: 400,
      overflowWrap: 'anywhere',
      textAlign: 'center',
      padding: '5px'
    },
    button: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(1),
      borderRadius: 5,
      minWidth: 100,
      color: '#fff',
      '&:hover': {
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
      }
    },
    undeployBtn: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(1),
      borderRadius: 5,
      backgroundColor: '#B32700',
      '&:hover': {
        backgroundColor: '#8f1f00',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
      },
      minWidth: 100
    },
    disabledBtnDel: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(1),
      borderRadius: 5,
      '&:disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'all !important'
      },
      minWidth: 100
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    all: {
      display: 'table'
    },
    contexts: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    tabs: {
      marginLeft: 0,
      '& .MuiTab-root.Mui-selected': {
        backgroundColor: theme.palette.type == 'light' ? (cov_2pufgpf5eg().b[1][0]++, theme.palette.secondary.modalTabs) : (cov_2pufgpf5eg().b[1][1]++, theme.palette.secondary.mainBackground)
      }
    },
    tabLabel: {
      tabLabel: {
        [theme.breakpoints.up('sm')]: {
          fontSize: '1em'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
          fontSize: '0.8em'
        }
      },
      color: theme.palette.secondary.iconMain
    },
    AddIcon: {
      width: theme.spacing(2.5),
      paddingRight: theme.spacing(0.5)
    },
    statsWrapper: {
      maxWidth: '100%',
      height: 'auto',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3
    },
    paperRoot: {
      flexGrow: 1,
      maxWidth: '100%',
      marginLeft: 0,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3
    },
    text: {
      display: 'flex',
      justifyContent: 'center'
    },
    subText: {
      color: 'rgba(84, 87, 91, 1)',
      fontSize: '16px'
    },
    triangleContainer: {
      position: 'relative',
      marginLeft: 2
    },
    triangleNumberSingleDigit: {
      position: 'absolute',
      bottom: 12,
      left: '37%',
      color: '#fff',
      fontSize: '0.8rem'
    },
    octagonContainer: {
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 34,
      marginLeft: 2
    },
    octagonText: {
      position: 'absolute',
      bottom: 9.5,
      color: '#fff',
      fontSize: '0.8rem'
    },
    closeIcon: {
      transform: 'rotate(-90deg)',
      '&:hover': {
        transform: 'rotate(90deg)',
        transition: 'all .3s ease-in',
        cursor: 'pointer'
      }
    },
    closeIconButton: {
      color: 'white'
    }
  };
};

function ConfirmationMsg(props) {
  cov_2pufgpf5eg().f[1]++;
  const {
    classes,
    open,
    handleClose,
    submit,
    selectedK8sContexts,
    k8scontext,
    title,
    validationBody,
    setK8sContexts,
    componentCount,
    tab,
    errors,
    dryRunComponent
  } = (cov_2pufgpf5eg().s[2]++, props);
  const [tabVal, setTabVal] = (cov_2pufgpf5eg().s[3]++, (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(tab));
  const [disabled, setDisabled] = (cov_2pufgpf5eg().s[4]++, (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(true));
  const [context, setContexts] = (cov_2pufgpf5eg().s[5]++, (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]));
  const {
    notify
  } = (cov_2pufgpf5eg().s[6]++, (0,_utils_hooks_useNotification__WEBPACK_IMPORTED_MODULE_19__/* .useNotification */ .l)());
  let isDisabled = (cov_2pufgpf5eg().s[7]++, (cov_2pufgpf5eg().b[2][0]++, typeof selectedK8sContexts.length === 'undefined') || (cov_2pufgpf5eg().b[2][1]++, selectedK8sContexts.length === 0));
  cov_2pufgpf5eg().s[8]++;
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    cov_2pufgpf5eg().f[2]++;
    cov_2pufgpf5eg().s[9]++;
    setTabVal(tab);
    cov_2pufgpf5eg().s[10]++;
    setContexts(k8scontext);
  }, [open]);
  cov_2pufgpf5eg().s[11]++;
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    cov_2pufgpf5eg().f[3]++;
    cov_2pufgpf5eg().s[12]++;
    setDisabled(isDisabled);
  }, [selectedK8sContexts]);
  cov_2pufgpf5eg().s[13]++;

  const handleTabValChange = (event, newVal) => {
    cov_2pufgpf5eg().f[4]++;
    cov_2pufgpf5eg().s[14]++;
    setTabVal(newVal);
  };

  cov_2pufgpf5eg().s[15]++;

  const handleKubernetesClick = ctxID => {
    cov_2pufgpf5eg().f[5]++;
    cov_2pufgpf5eg().s[16]++;
    (0,_lib_store__WEBPACK_IMPORTED_MODULE_5__/* .updateProgress */ .RO)({
      showProgress: true
    });
    cov_2pufgpf5eg().s[17]++;
    (0,_ConnectionWizard_helpers_kubernetesHelpers__WEBPACK_IMPORTED_MODULE_7__/* .pingKubernetes */ .aq)((0,_ConnectionWizard_helpers_common__WEBPACK_IMPORTED_MODULE_6__/* .successHandlerGenerator */ .JL)(notify, 'Kubernetes pinged', () => {
      cov_2pufgpf5eg().f[6]++;
      cov_2pufgpf5eg().s[18]++;
      return (0,_lib_store__WEBPACK_IMPORTED_MODULE_5__/* .updateProgress */ .RO)({
        showProgress: false
      });
    }), (0,_ConnectionWizard_helpers_common__WEBPACK_IMPORTED_MODULE_6__/* .errorHandlerGenerator */ .sE)(notify, 'Kubernetes not pinged', () => {
      cov_2pufgpf5eg().f[7]++;
      cov_2pufgpf5eg().s[19]++;
      return (0,_lib_store__WEBPACK_IMPORTED_MODULE_5__/* .updateProgress */ .RO)({
        showProgress: false
      });
    }), ctxID);
  };

  cov_2pufgpf5eg().s[20]++;

  const handleSubmit = () => {
    cov_2pufgpf5eg().f[8]++;
    cov_2pufgpf5eg().s[21]++;

    if (selectedK8sContexts.length === 0) {
      cov_2pufgpf5eg().b[3][0]++;
      cov_2pufgpf5eg().s[22]++;
      notify({
        message: 'Please select Kubernetes context(s) before proceeding with the operation',
        event_type: _lib_event_types__WEBPACK_IMPORTED_MODULE_20__/* .EVENT_TYPES.INFO */ .E_.INFO
      });
    } else {
      cov_2pufgpf5eg().b[3][1]++;
    }

    cov_2pufgpf5eg().s[23]++;

    if (tabVal === 2) {
      cov_2pufgpf5eg().b[4][0]++;
      cov_2pufgpf5eg().s[24]++;
      submit.deploy();
    } else {
      cov_2pufgpf5eg().b[4][1]++;
      cov_2pufgpf5eg().s[25]++;

      if (tabVal === 1) {
        cov_2pufgpf5eg().b[5][0]++;
        cov_2pufgpf5eg().s[26]++;
        submit.unDeploy();
      } else {
        cov_2pufgpf5eg().b[5][1]++;
      }
    }

    cov_2pufgpf5eg().s[27]++;
    handleClose();
  };

  cov_2pufgpf5eg().s[28]++;

  const searchContexts = search => {
    cov_2pufgpf5eg().f[9]++;
    cov_2pufgpf5eg().s[29]++;

    if (search === '') {
      cov_2pufgpf5eg().b[6][0]++;
      cov_2pufgpf5eg().s[30]++;
      setContexts(k8scontext);
      cov_2pufgpf5eg().s[31]++;
      return;
    } else {
      cov_2pufgpf5eg().b[6][1]++;
    }

    let matchedCtx = (cov_2pufgpf5eg().s[32]++, []);
    cov_2pufgpf5eg().s[33]++;
    k8scontext.forEach(ctx => {
      cov_2pufgpf5eg().f[10]++;
      cov_2pufgpf5eg().s[34]++;

      if (ctx.name.includes(search)) {
        cov_2pufgpf5eg().b[7][0]++;
        cov_2pufgpf5eg().s[35]++;
        matchedCtx.push(ctx);
      } else {
        cov_2pufgpf5eg().b[7][1]++;
      }
    });
    cov_2pufgpf5eg().s[36]++;
    setContexts(matchedCtx);
  };

  cov_2pufgpf5eg().s[37]++;

  const setContextViewer = id => {
    cov_2pufgpf5eg().f[11]++;
    cov_2pufgpf5eg().s[38]++;

    if (id === 'all') {
      cov_2pufgpf5eg().b[8][0]++;
      cov_2pufgpf5eg().s[39]++;

      if (selectedK8sContexts?.includes('all')) {
        cov_2pufgpf5eg().b[9][0]++;
        cov_2pufgpf5eg().s[40]++;
        // updateProgress({ showProgress : true })
        setK8sContexts({
          selectedK8sContexts: []
        });
      } else {
        cov_2pufgpf5eg().b[9][1]++;
        cov_2pufgpf5eg().s[41]++;
        setK8sContexts({
          selectedK8sContexts: ['all']
        });
      }

      cov_2pufgpf5eg().s[42]++;
      return;
    } else {
      cov_2pufgpf5eg().b[8][1]++;
    }

    cov_2pufgpf5eg().s[43]++;

    if (selectedK8sContexts?.includes(id)) {
      cov_2pufgpf5eg().b[10][0]++;
      const filteredContexts = (cov_2pufgpf5eg().s[44]++, selectedK8sContexts.filter(cid => {
        cov_2pufgpf5eg().f[12]++;
        cov_2pufgpf5eg().s[45]++;
        return cid !== id;
      }));
      cov_2pufgpf5eg().s[46]++;
      setK8sContexts({
        selectedK8sContexts: filteredContexts
      });
    } else {
      cov_2pufgpf5eg().b[10][1]++;
      cov_2pufgpf5eg().s[47]++;

      if (selectedK8sContexts[0] === 'all') {
        cov_2pufgpf5eg().b[11][0]++;
        const allContextIds = (cov_2pufgpf5eg().s[48]++, (0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_8__/* .getK8sConfigIdsFromK8sConfig */ .GB)(k8scontext));
        cov_2pufgpf5eg().s[49]++;
        setK8sContexts({
          selectedK8sContexts: allContextIds.filter(cid => {
            cov_2pufgpf5eg().f[13]++;
            cov_2pufgpf5eg().s[50]++;
            return cid !== id;
          })
        });
      } else {
        cov_2pufgpf5eg().b[11][1]++;
        cov_2pufgpf5eg().s[51]++;

        if (selectedK8sContexts.length === k8scontext.length - 1) {
          cov_2pufgpf5eg().b[12][0]++;
          cov_2pufgpf5eg().s[52]++;
          setK8sContexts({
            selectedK8sContexts: ['all']
          });
          cov_2pufgpf5eg().s[53]++;
          return;
        } else {
          cov_2pufgpf5eg().b[12][1]++;
        }

        cov_2pufgpf5eg().s[54]++;
        setK8sContexts({
          selectedK8sContexts: [...selectedK8sContexts, id]
        });
      }
    }
  };

  cov_2pufgpf5eg().s[55]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Dialog, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      className: classes.dialogBox,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogTitle, {
          id: "alert-dialog-title",
          className: classes.title,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_assets_icons_Pattern__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              style: _objectSpread({}, _css_icons_styles__WEBPACK_IMPORTED_MODULE_14__/* .iconMedium */ .hv),
              fill: '#FFFFFF'
            }), title, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
              onClick: handleClose,
              disableRipple: true,
              className: classes.closeIconButton,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_1___default()), {
                fill: '#FFFFF',
                className: classes.closeIcon,
                style: _objectSpread({}, _css_icons_styles__WEBPACK_IMPORTED_MODULE_14__/* .iconMedium */ .hv)
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Tabs, {
          value: validationBody ? (cov_2pufgpf5eg().b[13][0]++, tabVal) : (cov_2pufgpf5eg().b[13][1]++, tabVal === 2 ? (cov_2pufgpf5eg().b[14][0]++, 1) : (cov_2pufgpf5eg().b[14][1]++, 0)),
          variant: "scrollable",
          scrollButtons: "auto",
          indicatorColor: "primary",
          textColor: "primary",
          className: classes.tabs,
          centered: true,
          children: [(cov_2pufgpf5eg().b[15][0]++, !!validationBody) && (cov_2pufgpf5eg().b[15][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Tab, {
            "data-cy": "validate-btn-modal",
            className: classes.tab,
            onClick: event => {
              cov_2pufgpf5eg().f[14]++;
              cov_2pufgpf5eg().s[56]++;
              return handleTabValChange(event, 0);
            },
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
              style: {
                display: 'flex'
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_13___default()), {
                style: _objectSpread({
                  margin: '2px',
                  paddingRight: '2px'
                }, _css_icons_styles__WEBPACK_IMPORTED_MODULE_14__/* .iconSmall */ .uE),
                fontSize: "small"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                className: classes.tabLabel,
                children: "Validate"
              }), (cov_2pufgpf5eg().b[16][0]++, errors?.validationError > 0) && (cov_2pufgpf5eg().b[16][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
                className: classes.triangleContainer,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_shapes_RoundedTriangle__WEBPACK_IMPORTED_MODULE_15__/* .RoundedTriangleShape */ .W, {
                  color: _themes_app__WEBPACK_IMPORTED_MODULE_16__/* .notificationColors.warning */ .kY.warning
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
                  className: classes.triangleNumberSingleDigit,
                  style: errors.validationError > 10 ? (cov_2pufgpf5eg().b[17][0]++, {
                    left: '25%'
                  }) : (cov_2pufgpf5eg().b[17][1]++, {}),
                  children: errors.validationError
                })]
              }))]
            }),
            disabled: !(0,_utils_can__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.VALIDATE_DESIGN.action */ .X.VALIDATE_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.VALIDATE_DESIGN.resource */ .X.VALIDATE_DESIGN.resource)
          })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Tab, {
            disabled: (cov_2pufgpf5eg().b[18][0]++, !(0,_utils_can__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.UNDEPLOY_DESIGN.action */ .X.UNDEPLOY_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.UNDEPLOY_DESIGN.subject */ .X.UNDEPLOY_DESIGN.subject)) || (cov_2pufgpf5eg().b[18][1]++, (0,_utils_can__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.UNDEPLOY_DESIGN.action */ .X.UNDEPLOY_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.UNDEPLOY_DESIGN.subject */ .X.UNDEPLOY_DESIGN.subject)) && (cov_2pufgpf5eg().b[18][2]++, disabled),
            "data-cy": "Undeploy-btn-modal",
            className: classes.tab,
            onClick: event => {
              cov_2pufgpf5eg().f[15]++;
              cov_2pufgpf5eg().s[57]++;
              return handleTabValChange(event, 1);
            },
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
              style: {
                display: 'flex'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
                style: {
                  margin: '2px',
                  paddingRight: '2px'
                },
                children: [' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_mui_icons_material_RemoveDone__WEBPACK_IMPORTED_MODULE_12___default()), {
                  style: _css_icons_styles__WEBPACK_IMPORTED_MODULE_14__/* .iconSmall */ .uE,
                  width: "20",
                  height: "20"
                }), ' ']
              }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                className: classes.tabLabel,
                children: "Undeploy"
              }), ' ']
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Tab, {
            disabled: (cov_2pufgpf5eg().b[19][0]++, !(0,_utils_can__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.DEPLOY_DESIGN.action */ .X.DEPLOY_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.DEPLOY_DESIGN.subject */ .X.DEPLOY_DESIGN.subject)) || (cov_2pufgpf5eg().b[19][1]++, (0,_utils_can__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(_utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.DEPLOY_DESIGN.action */ .X.DEPLOY_DESIGN.action, _utils_permission_constants__WEBPACK_IMPORTED_MODULE_24__/* .keys.DEPLOY_DESIGN.subject */ .X.DEPLOY_DESIGN.subject)) && (cov_2pufgpf5eg().b[19][2]++, disabled),
            "data-cy": "deploy-btn-modal",
            className: classes.tab,
            onClick: event => {
              cov_2pufgpf5eg().f[16]++;
              cov_2pufgpf5eg().s[58]++;
              return handleTabValChange(event, 2);
            },
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
              style: {
                display: 'flex'
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_material_ui_icons_DoneAll__WEBPACK_IMPORTED_MODULE_11___default()), {
                style: _objectSpread({
                  margin: '2px',
                  paddingRight: '2px'
                }, _css_icons_styles__WEBPACK_IMPORTED_MODULE_14__/* .iconSmall */ .uE),
                fontSize: "small"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                className: classes.tabLabel,
                children: "Deploy"
              }), (cov_2pufgpf5eg().b[20][0]++, errors?.deploymentError > 0) && (cov_2pufgpf5eg().b[20][1]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
                className: classes.octagonContainer,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_shapes_Octagon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  fill: _themes_app__WEBPACK_IMPORTED_MODULE_16__/* .notificationColors.darkRed */ .kY.darkRed
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
                  className: classes.octagonText,
                  children: errors.deploymentError
                })]
              }))]
            })
          })]
        }), ((cov_2pufgpf5eg().b[21][0]++, tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.DEPLOY */ .aO.DEPLOY) || (cov_2pufgpf5eg().b[21][1]++, tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.UNDEPLOY */ .aO.UNDEPLOY)) && (cov_2pufgpf5eg().b[21][2]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContent, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContentText, {
            id: "alert-dialog-description",
            className: classes.subtitle,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
              style: {
                height: '100%'
              },
              children: (cov_2pufgpf5eg().b[22][0]++, dryRunComponent) && (cov_2pufgpf5eg().b[22][1]++, dryRunComponent)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                variant: "subtitle1",
                style: {
                  marginBottom: '0.8rem'
                },
                children: [' ', componentCount !== undefined ? (cov_2pufgpf5eg().b[23][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
                  children: [' ', componentCount, " component", componentCount > 1 ? (cov_2pufgpf5eg().b[24][0]++, 's') : (cov_2pufgpf5eg().b[24][1]++, ''), ' ']
                })) : (cov_2pufgpf5eg().b[23][1]++, '')]
              }), k8scontext.length > 0 ? (cov_2pufgpf5eg().b[25][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                variant: "body1",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.TextField, {
                  id: "search-ctx",
                  label: "Search",
                  size: "small",
                  variant: "outlined",
                  onChange: event => {
                    cov_2pufgpf5eg().f[17]++;
                    cov_2pufgpf5eg().s[59]++;
                    return searchContexts(event.target.value);
                  },
                  style: {
                    width: '100%',
                    backgroundColor: 'rgba(102, 102, 102, 0.12)',
                    margin: '1px 1px 8px '
                  },
                  InputProps: {
                    endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.Search, {
                      style: _css_icons_styles__WEBPACK_IMPORTED_MODULE_14__/* .iconMedium */ .hv
                    })
                  } // margin="none"

                }), context.length > 0 ? (cov_2pufgpf5eg().b[26][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
                  className: classes.all,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
                    checked: selectedK8sContexts?.includes('all'),
                    onChange: () => {
                      cov_2pufgpf5eg().f[18]++;
                      cov_2pufgpf5eg().s[60]++;
                      return setContextViewer('all');
                    },
                    color: "primary"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                    style: {
                      fontWeight: 'bolder'
                    },
                    children: "select all"
                  })]
                })) : (cov_2pufgpf5eg().b[26][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                  variant: "subtitle1",
                  children: "No Context found"
                })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
                  className: classes.contexts,
                  children: context.map(ctx => {
                    cov_2pufgpf5eg().f[19]++;
                    cov_2pufgpf5eg().s[61]++;
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
                      id: ctx.id,
                      className: classes.chip,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
                        title: `Server: ${ctx.server}`,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
                          style: {
                            display: 'flex',
                            justifyContent: 'flex-wrap',
                            alignItems: 'center'
                          },
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
                            checked: (cov_2pufgpf5eg().b[27][0]++, selectedK8sContexts?.includes(ctx.id)) || (cov_2pufgpf5eg().b[27][1]++, selectedK8sContexts?.length > 0) && (cov_2pufgpf5eg().b[27][2]++, selectedK8sContexts[0] === 'all'),
                            onChange: () => {
                              cov_2pufgpf5eg().f[20]++;
                              cov_2pufgpf5eg().s[62]++;
                              return setContextViewer(ctx.id);
                            },
                            color: "primary"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Chip, {
                            label: ctx.name,
                            className: classes.ctxChip,
                            onClick: () => {
                              cov_2pufgpf5eg().f[21]++;
                              cov_2pufgpf5eg().s[63]++;
                              return handleKubernetesClick(ctx.connection_id);
                            },
                            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("img", {
                              src: "/static/img/kubernetes.svg",
                              className: classes.ctxIcon
                            }),
                            variant: "outlined",
                            "data-cy": "chipContextName"
                          })]
                        })
                      })
                    }, ctx.id);
                  })
                })]
              })) : (cov_2pufgpf5eg().b[25][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_EmptyState_K8sContextEmptyState__WEBPACK_IMPORTED_MODULE_21__/* .K8sEmptyState */ .d, {}))]
            })]
          })
        })), (cov_2pufgpf5eg().b[28][0]++, tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.VERIFY */ .aO.VERIFY) && (cov_2pufgpf5eg().b[28][1]++,
        /*#__PURE__*/
        // Validate
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContent, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContentText, {
            children: validationBody
          })
        })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogActions, {
          className: classes.actions,
          children: (cov_2pufgpf5eg().b[30][0]++, tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.DEPLOY */ .aO.DEPLOY) || (cov_2pufgpf5eg().b[30][1]++, tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.UNDEPLOY */ .aO.UNDEPLOY) ? (cov_2pufgpf5eg().b[29][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {
              onClick: handleClose,
              type: "submit",
              variant: "contained",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                variant: true,
                body2: true,
                children: [' ', "CANCEL", ' ']
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {
              disabled: true,
              className: tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.UNDEPLOY */ .aO.UNDEPLOY ? (cov_2pufgpf5eg().b[31][0]++, classes.disabledBtnDel) : (cov_2pufgpf5eg().b[31][1]++, ''),
              type: "submit",
              variant: "contained",
              color: "primary",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                variant: true,
                body2: true,
                children: [' ', tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.UNDEPLOY */ .aO.UNDEPLOY ? (cov_2pufgpf5eg().b[32][0]++, 'UNDEPLOY LATER') : (cov_2pufgpf5eg().b[32][1]++, 'DEPLOY LATER'), ' ']
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {
              onClick: handleSubmit,
              className: isDisabled ? (cov_2pufgpf5eg().b[33][0]++, tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.UNDEPLOY */ .aO.UNDEPLOY ? (cov_2pufgpf5eg().b[34][0]++, classes.disabledBtnDel) : (cov_2pufgpf5eg().b[34][1]++, classes.button)) : (cov_2pufgpf5eg().b[33][1]++, tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.UNDEPLOY */ .aO.UNDEPLOY ? (cov_2pufgpf5eg().b[35][0]++, classes.undeployBtn) : (cov_2pufgpf5eg().b[35][1]++, classes.button)),
              autoFocus: true,
              type: "submit",
              variant: "contained",
              color: "primary",
              "data-cy": "deploy-btn-confirm",
              disabled: disabled,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                variant: true,
                body2: true,
                children: [' ', tabVal === _utils_Enum__WEBPACK_IMPORTED_MODULE_22__/* .ACTIONS.UNDEPLOY */ .aO.UNDEPLOY ? (cov_2pufgpf5eg().b[36][0]++, 'UNDEPLOY') : (cov_2pufgpf5eg().b[36][1]++, 'DEPLOY'), ' ']
              })
            })]
          })) : (cov_2pufgpf5eg().b[29][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {
            onClick: handleClose,
            className: classes.button,
            autoFocus: true,
            type: "submit",
            variant: "contained",
            color: "primary",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
              variant: true,
              body2: true,
              children: [' ', "OK", ' ']
            })
          }))
        })]
      })
    })
  });
}

cov_2pufgpf5eg().s[64]++;

const mapStateToProps = state => {
  cov_2pufgpf5eg().f[22]++;
  cov_2pufgpf5eg().s[65]++;
  return {
    selectedK8sContexts: state.get('selectedK8sContexts'),
    k8scontext: state.get('k8sConfig')
  };
};

cov_2pufgpf5eg().s[66]++;

const mapDispatchToProps = dispatch => {
  cov_2pufgpf5eg().f[23]++;
  cov_2pufgpf5eg().s[67]++;
  return {
    updateProgress: (0,redux__WEBPACK_IMPORTED_MODULE_9__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_5__/* .updateProgress */ .RO, dispatch),
    setK8sContexts: (0,redux__WEBPACK_IMPORTED_MODULE_9__.bindActionCreators)(_lib_store__WEBPACK_IMPORTED_MODULE_5__/* .setK8sContexts */ .AT, dispatch)
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(ConfirmationMsg)));
cov_2pufgpf5eg().s[68]++;
const SelectDeploymentTarget_ = ({
  k8scontext,
  classes,
  setK8sContexts,
  selectedK8sContexts
}) => {
  cov_2pufgpf5eg().f[24]++;
  const deployableK8scontexts = (cov_2pufgpf5eg().s[69]++, (0,_hooks_useKubernetesHook__WEBPACK_IMPORTED_MODULE_26__/* .useFilterK8sContexts */ .dx)(k8scontext, ({
    operatorState
  }) => {
    cov_2pufgpf5eg().f[25]++;
    cov_2pufgpf5eg().s[70]++;
    return operatorState !== 'DISABLED';
  }));
  const [searchedContexts, setSearchedContexts] = (cov_2pufgpf5eg().s[71]++, (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(deployableK8scontexts));
  const selectedContexts = (cov_2pufgpf5eg().s[72]++, selectedK8sContexts);
  cov_2pufgpf5eg().s[73]++;

  const searchContexts = search => {
    cov_2pufgpf5eg().f[26]++;
    cov_2pufgpf5eg().s[74]++;

    if (search === '') {
      cov_2pufgpf5eg().b[37][0]++;
      cov_2pufgpf5eg().s[75]++;
      setSearchedContexts(k8scontext);
      cov_2pufgpf5eg().s[76]++;
      return;
    } else {
      cov_2pufgpf5eg().b[37][1]++;
    }

    let matchedCtx = (cov_2pufgpf5eg().s[77]++, []);
    cov_2pufgpf5eg().s[78]++;
    k8scontext.forEach(ctx => {
      cov_2pufgpf5eg().f[27]++;
      cov_2pufgpf5eg().s[79]++;

      if (ctx.name.includes(search)) {
        cov_2pufgpf5eg().b[38][0]++;
        cov_2pufgpf5eg().s[80]++;
        matchedCtx.push(ctx);
      } else {
        cov_2pufgpf5eg().b[38][1]++;
      }
    });
    cov_2pufgpf5eg().s[81]++;
    setSearchedContexts(matchedCtx);
  };

  cov_2pufgpf5eg().s[82]++;

  const setContextViewer = id => {
    cov_2pufgpf5eg().f[28]++;
    cov_2pufgpf5eg().s[83]++;

    if (id === 'all') {
      cov_2pufgpf5eg().b[39][0]++;
      cov_2pufgpf5eg().s[84]++;

      if (selectedContexts?.includes('all')) {
        cov_2pufgpf5eg().b[40][0]++;
        cov_2pufgpf5eg().s[85]++;
        // updateProgress({ showProgress : true })
        setK8sContexts({
          selectedK8sContexts: []
        });
      } else {
        cov_2pufgpf5eg().b[40][1]++;
        cov_2pufgpf5eg().s[86]++;
        setK8sContexts({
          selectedK8sContexts: ['all']
        });
      }

      cov_2pufgpf5eg().s[87]++;
      return;
    } else {
      cov_2pufgpf5eg().b[39][1]++;
    }

    cov_2pufgpf5eg().s[88]++;

    if (selectedContexts?.includes(id)) {
      cov_2pufgpf5eg().b[41][0]++;
      const filteredContexts = (cov_2pufgpf5eg().s[89]++, selectedContexts.filter(cid => {
        cov_2pufgpf5eg().f[29]++;
        cov_2pufgpf5eg().s[90]++;
        return cid !== id;
      }));
      cov_2pufgpf5eg().s[91]++;
      setK8sContexts({
        selectedK8sContexts: filteredContexts
      });
    } else {
      cov_2pufgpf5eg().b[41][1]++;
      cov_2pufgpf5eg().s[92]++;

      if (selectedContexts[0] === 'all') {
        cov_2pufgpf5eg().b[42][0]++;
        const allContextIds = (cov_2pufgpf5eg().s[93]++, (0,_utils_multi_ctx__WEBPACK_IMPORTED_MODULE_8__/* .getK8sConfigIdsFromK8sConfig */ .GB)(k8scontext));
        cov_2pufgpf5eg().s[94]++;
        setK8sContexts({
          selectedK8sContexts: allContextIds.filter(cid => {
            cov_2pufgpf5eg().f[30]++;
            cov_2pufgpf5eg().s[95]++;
            return cid !== id;
          })
        });
      } else {
        cov_2pufgpf5eg().b[42][1]++;
        cov_2pufgpf5eg().s[96]++;

        if (selectedContexts.length === k8scontext.length - 1) {
          cov_2pufgpf5eg().b[43][0]++;
          cov_2pufgpf5eg().s[97]++;
          setK8sContexts({
            selectedK8sContexts: ['all']
          });
          cov_2pufgpf5eg().s[98]++;
          return;
        } else {
          cov_2pufgpf5eg().b[43][1]++;
        }

        cov_2pufgpf5eg().s[99]++;
        setK8sContexts({
          selectedK8sContexts: [...selectedContexts, id]
        });
      }
    }
  };

  cov_2pufgpf5eg().s[100]++;
  return k8scontext.length > 0 ? (cov_2pufgpf5eg().b[44][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
    variant: "body1",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.TextField, {
      id: "search-ctx",
      label: "Search",
      size: "small",
      variant: "outlined",
      onChange: event => {
        cov_2pufgpf5eg().f[31]++;
        cov_2pufgpf5eg().s[101]++;
        return searchContexts(event.target.value);
      },
      style: {
        width: '100%',
        backgroundColor: 'rgba(102, 102, 102, 0.12)',
        margin: '1px 1px 8px '
      },
      InputProps: {
        endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.Search, {
          style: _css_icons_styles__WEBPACK_IMPORTED_MODULE_14__/* .iconMedium */ .hv
        })
      } // margin="none"

    }), searchedContexts.length > 0 ? (cov_2pufgpf5eg().b[45][0]++, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
      className: classes.all,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
        checked: selectedContexts?.includes('all'),
        onChange: () => {
          cov_2pufgpf5eg().f[32]++;
          cov_2pufgpf5eg().s[102]++;
          return setContextViewer('all');
        },
        color: "primary"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
        style: {
          fontWeight: 'bolder'
        },
        children: "select all"
      })]
    })) : (cov_2pufgpf5eg().b[45][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_EmptyState_K8sContextEmptyState__WEBPACK_IMPORTED_MODULE_21__/* .K8sEmptyState */ .d, {
      message: 'No active cluster found'
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
      className: classes.contexts,
      children: deployableK8scontexts.map(ctx => {
        cov_2pufgpf5eg().f[33]++;
        cov_2pufgpf5eg().s[103]++;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Header__WEBPACK_IMPORTED_MODULE_25__/* .K8sContextConnectionChip */ .I, {
          classes: classes,
          ctx: ctx,
          selectable: true,
          selected: (cov_2pufgpf5eg().b[46][0]++, selectedContexts.includes(ctx.id)) || (cov_2pufgpf5eg().b[46][1]++, selectedContexts?.length > 0) && (cov_2pufgpf5eg().b[46][2]++, selectedContexts[0] === 'all'),
          onSelectChange: () => {
            cov_2pufgpf5eg().f[34]++;
            cov_2pufgpf5eg().s[104]++;
            return setContextViewer(ctx.id);
          }
        }, ctx.id);
      })
    })]
  })) : (cov_2pufgpf5eg().b[44][1]++, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_EmptyState_K8sContextEmptyState__WEBPACK_IMPORTED_MODULE_21__/* .K8sEmptyState */ .d, {
    message: 'No active cluster found'
  }));
};
const SelectDeploymentTarget = (cov_2pufgpf5eg().s[105]++, (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(SelectDeploymentTarget_)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ K8sEmptyState)
});

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./assets/img/OperatorLight.js
function cov_2gqb28jj9w() {
  var path = "/workspace/meshplay/ui/assets/img/OperatorLight.js";
  var hash = "ddd675f9a591c0a76c4e90b6ed34f49a4a54b4c6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/img/OperatorLight.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 30,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 21
          },
          end: {
            line: 3,
            column: 22
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 30,
            column: 8
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ddd675f9a591c0a76c4e90b6ed34f49a4a54b4c6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2gqb28jj9w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2gqb28jj9w();



cov_2gqb28jj9w().s[0]++;

const OperatorLight = () => {
  cov_2gqb28jj9w().f[0]++;
  cov_2gqb28jj9w().s[1]++;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "88",
    height: "88",
    viewBox: "0 0 88 88",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      clipPath: "url(#clip0_5251_25009)",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        opacity: "0.6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          opacity: "0.6",
          d: "M59.9184 42.971C59.2974 42.971 58.7847 43.1804 58.3731 43.592C54.5605 47.3035 49.4049 49.3614 44.047 49.3614C38.6892 49.3614 33.6418 47.2963 29.7282 43.5848C29.3166 43.1732 28.6956 42.9638 28.1829 42.9638C16.9473 43.7942 8.0874 53.2751 8.0874 64.6118V74.6054C8.0874 82.0212 14.0662 88 21.482 88H66.511C73.9267 88 79.9056 82.0212 79.9056 74.6054V64.6118C80.0139 53.2751 71.1539 43.7942 59.9184 42.971Z",
          fill: "white"
        }), /*#__PURE__*/jsx_runtime_.jsx("g", {
          opacity: "0.6",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            opacity: "0.6",
            d: "M44.0542 41.9384C54.0478 41.9384 62.294 33.8006 62.294 23.6987C62.294 13.7051 54.0478 5.56 44.0542 5.56C34.0606 5.56 25.8145 13.7051 25.8145 23.7998C25.8145 33.8006 34.0534 41.9384 44.0542 41.9384ZM44.0542 9.68308C51.7805 9.68308 58.1709 15.9652 58.1709 23.7998C58.1709 31.526 51.8888 37.9164 44.0542 37.9164C36.3279 37.9164 29.9375 31.6343 29.9375 23.7998C29.9375 15.9652 36.3207 9.68308 44.0542 9.68308Z",
            fill: "white"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        opacity: "0.6",
        d: "M68.4675 17.7271H66.6045C64.7704 7.68294 55.405 0 44.0539 0C32.7028 0 23.2508 7.68294 21.4745 17.7271H19.6259C16.9398 17.7271 14.788 19.7922 14.7808 22.1534V29.6775C14.7808 32.1543 16.947 34.2122 19.6259 34.2122H22.8175C23.7418 34.2122 24.4639 33.4901 24.4639 32.6669V21.4675C24.4711 21.4241 24.4711 21.3736 24.4711 21.3303C24.4711 11.3367 33.2372 3.1916 44.0539 3.1916C54.8707 3.1916 63.6295 11.3367 63.6295 21.3303V30.5585C58.5389 33.8512 51.9824 34.7899 44.155 33.584C43.2235 33.4829 42.4004 34.1039 42.2993 34.9271C42.0899 35.7575 42.7109 36.4723 43.534 36.6817C51.6935 37.9959 58.5678 37.0066 64.2433 33.8656C64.5249 34.0822 64.886 34.2122 65.2759 34.2122H68.4747C71.1536 34.2122 73.3127 32.147 73.3127 29.7858V22.2618C73.3127 19.785 71.1464 17.7271 68.4675 17.7271ZM21.164 31.1289H19.7198C18.8966 31.1289 18.2756 30.5079 18.2756 29.7858V22.269C18.2756 21.5469 18.8966 20.9259 19.7198 20.9259H21.164V31.1289ZM69.8178 29.6703C69.8178 30.3924 69.1968 31.0134 68.3736 31.0134H66.9295V20.8104H68.3736C69.1968 20.8104 69.8178 21.4314 69.8178 22.1534V29.6703Z",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M34.7107 63.7886C36.2198 61.0086 38.9637 58.9796 42.177 58.4308L41.5415 54.777C37.173 55.528 33.4831 58.2719 31.418 62.0051L34.7107 63.7886Z",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        opacity: "0.8",
        d: "M34.8694 74.3888C33.9162 72.8002 33.3602 70.9372 33.3602 68.9082C33.3602 67.6012 33.5985 66.3665 34.0318 65.2184L30.5441 63.9475C29.9881 65.5 29.6704 67.168 29.6704 68.9154C29.6704 71.616 30.4286 74.1577 31.6995 76.3023L34.8694 74.3888Z",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M44.112 79.5588H43.9892C40.6893 79.5588 37.7577 78.0497 35.7647 75.6668L32.9053 78.0497C35.5264 81.2268 39.5412 83.292 43.982 83.292C44.0181 83.292 44.1047 83.292 44.1409 83.292L44.112 79.5588Z",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        opacity: "0.8",
        d: "M53.2464 74.1505C51.694 76.8944 48.9139 78.8802 45.7007 79.3928L46.2928 83.0827C50.6614 82.3678 54.3512 79.7033 56.4597 75.9774L53.2464 74.1505Z",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M53.167 63.5503C54.084 65.1389 54.5967 66.9297 54.5967 68.9082C54.5967 70.2584 54.3584 71.5293 53.8819 72.7207L57.3767 74.071C57.9688 72.4825 58.3299 70.735 58.3299 68.9515C58.3299 66.3303 57.615 63.8247 56.3803 61.7234L53.167 63.5503Z",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        opacity: "0.8",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          opacity: "0.8",
          d: "M50.4232 61.5718L49.6289 60.7703L51.5207 58.8784L49.6289 56.9866L50.4232 56.1851L53.1165 58.8784L50.4232 61.5718Z",
          fill: "white"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        opacity: "0.8",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          opacity: "0.8",
          d: "M45.0364 61.5718L44.2349 60.7703L46.1339 58.8784L44.2349 56.9866L45.0364 56.1851L47.7297 58.8784L45.0364 61.5718Z",
          fill: "white"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "clip0_5251_25009",
        children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
          width: "88",
          height: "88",
          fill: "white"
        })
      })
    })]
  });
};

/* harmony default export */ const img_OperatorLight = (OperatorLight);
;// CONCATENATED MODULE: ./assets/img/Operator.js
function cov_2jsgqt196v() {
  var path = "/workspace/meshplay/ui/assets/img/Operator.js";
  var hash = "cb1914a7ab09d43e9bf2f6f947a13aa0e2b503a5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/assets/img/Operator.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 17,
          column: 8
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 17
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 17,
            column: 8
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cb1914a7ab09d43e9bf2f6f947a13aa0e2b503a5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2jsgqt196v = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2jsgqt196v();



cov_2jsgqt196v().s[0]++;

const Operator = () => {
  cov_2jsgqt196v().f[0]++;
  cov_2jsgqt196v().s[1]++;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "72",
    height: "78",
    viewBox: "0 0 72 88",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M52.0019 43.1001C51.3827 43.1001 50.8715 43.3089 50.461 43.7193C46.6594 47.4202 41.5185 49.4722 36.176 49.4722C30.8335 49.4722 25.8006 47.413 21.8981 43.7121C21.4877 43.3017 20.8685 43.0929 20.3573 43.0929C9.1539 43.9209 0.319336 53.3747 0.319336 64.6789V74.6439C0.319336 82.0384 6.28104 88.0001 13.6756 88.0001H58.5756C65.9701 88.0001 71.9318 82.0384 71.9318 74.6439V64.6789C72.0398 53.3747 63.2053 43.9209 52.0019 43.1001Z",
      fill: "#3C494E"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M36.1826 42.0706C46.1476 42.0706 54.3702 33.956 54.3702 23.8831C54.3702 13.9181 46.1476 5.79633 36.1826 5.79633C26.2177 5.79633 17.9951 13.9181 17.9951 23.9839C17.9951 33.956 26.2105 42.0706 36.1826 42.0706ZM36.1826 9.9076C43.8868 9.9076 50.2589 16.1717 50.2589 23.9839C50.2589 31.688 43.9948 38.0601 36.1826 38.0601C28.4785 38.0601 22.1064 31.796 22.1064 23.9839C22.1064 16.1717 28.4713 9.9076 36.1826 9.9076Z",
      fill: "#3C494E"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M62.3194 32.2999H58.5393C58.0641 32.2999 57.6753 31.9111 57.6753 31.4358V20.7437C57.6753 20.2684 58.0641 19.8796 58.5393 19.8796H62.3194C62.7946 19.8796 63.1834 20.2684 63.1834 20.7437V31.4358C63.1834 31.9111 62.7946 32.2999 62.3194 32.2999Z",
      fill: "#647881"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.8047 32.415H10.0247C9.54945 32.415 9.16064 32.0262 9.16064 31.551V20.8588C9.16064 20.3836 9.54945 19.9948 10.0247 19.9948H13.8047C14.2799 19.9948 14.6687 20.3836 14.6687 20.8588V31.551C14.6687 32.0262 14.2799 32.415 13.8047 32.415Z",
      fill: "#647881"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M60.5261 17.9284H58.6685C56.8397 7.91301 47.5011 0.252075 36.1825 0.252075C24.8639 0.252075 15.4389 7.91301 13.6677 17.9284H11.8245C9.146 17.9284 7.00036 19.9876 6.99316 22.3421V29.8446C6.99316 32.3143 9.1532 34.3663 11.8245 34.3663H15.0069C15.9285 34.3663 16.6485 33.6463 16.6485 32.8255V21.6581C16.6557 21.6149 16.6557 21.5645 16.6557 21.5213C16.6557 11.5563 25.3967 3.43453 36.1825 3.43453C46.9683 3.43453 55.702 11.5563 55.702 21.5213V30.723C50.626 34.0063 44.0882 34.9423 36.2833 33.7399C35.3545 33.6391 34.5337 34.2583 34.4329 35.0791C34.2241 35.9071 34.8433 36.6199 35.6641 36.8287C43.8002 38.1392 50.6548 37.1527 56.3141 34.0207C56.5949 34.2367 56.9549 34.3663 57.3437 34.3663H60.5333C63.2046 34.3663 65.3574 32.3071 65.3574 29.9526V22.4501C65.3574 19.9804 63.1974 17.9284 60.5261 17.9284ZM13.3581 31.2918H11.9181C11.0972 31.2918 10.478 30.6726 10.478 29.9526V22.4573C10.478 21.7373 11.0972 21.1181 11.9181 21.1181H13.3581V31.2918ZM61.8726 29.8374C61.8726 30.5574 61.2533 31.1766 60.4325 31.1766H58.9925V21.0029H60.4325C61.2533 21.0029 61.8726 21.6221 61.8726 22.3421V29.8374Z",
      fill: "#3C494E"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M26.8658 63.858C28.3706 61.0859 31.1067 59.0627 34.3107 58.5155L33.6771 54.8722C29.321 55.621 25.6418 58.3571 23.5825 62.0795L26.8658 63.858Z",
      fill: "#00D3A9"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M27.0244 74.4277C26.074 72.8437 25.5196 70.986 25.5196 68.9628C25.5196 67.6596 25.7572 66.4283 26.1892 65.2835L22.7115 64.0163C22.1571 65.5643 21.8403 67.2276 21.8403 68.97C21.8403 71.6628 22.5963 74.1973 23.8636 76.3357L27.0244 74.4277Z",
      fill: "#00B39F"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M36.2405 79.583H36.1181C32.8277 79.583 29.9044 78.0781 27.9172 75.7021L25.0659 78.0781C27.6796 81.2462 31.6828 83.3054 36.1109 83.3054C36.1469 83.3054 36.2333 83.3054 36.2693 83.3054L36.2405 79.583Z",
      fill: "#00D3A9"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M45.3488 74.1901C43.8008 76.9262 41.0288 78.9062 37.8247 79.4174L38.4151 83.0967C42.7712 82.3839 46.4505 79.727 48.5529 76.0118L45.3488 74.1901Z",
      fill: "#00B39F"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M45.2695 63.6203C46.1839 65.2043 46.6952 66.9899 46.6952 68.9628C46.6952 70.3092 46.4576 71.5764 45.9823 72.7644L49.4672 74.1109C50.0576 72.5268 50.4176 70.7844 50.4176 69.006C50.4176 66.3923 49.7048 63.8939 48.4736 61.7986L45.2695 63.6203Z",
      fill: "#00D3A9"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M42.5327 61.6476L41.7407 60.8484L43.6272 58.962L41.7407 57.0755L42.5327 56.2763L45.2184 58.962L42.5327 61.6476Z",
      fill: "#20BDAB"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M37.1615 61.6476L36.3623 60.8484L38.2559 58.962L36.3623 57.0755L37.1615 56.2763L39.8472 58.962L37.1615 61.6476Z",
      fill: "#20BDAB"
    })]
  });
};

/* harmony default export */ const img_Operator = (Operator);
// EXTERNAL MODULE: ./themes/app.js
var app = __webpack_require__(25879);
// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(3935);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
;// CONCATENATED MODULE: ./components/EmptyState/K8sContextEmptyState.js
function cov_2dxxejn7k1() {
  var path = "/workspace/meshplay/ui/components/EmptyState/K8sContextEmptyState.js";
  var hash = "c949275a3b5b78600f61baabd5da0d49dffceea2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/EmptyState/K8sContextEmptyState.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 15
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "1": {
        start: {
          line: 7,
          column: 38
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "2": {
        start: {
          line: 23,
          column: 29
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "3": {
        start: {
          line: 24,
          column: 18
        },
        end: {
          line: 24,
          column: 26
        }
      },
      "4": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 42,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 26
          },
          end: {
            line: 7,
            column: 27
          }
        },
        loc: {
          start: {
            line: 7,
            column: 38
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 29
          },
          end: {
            line: 23,
            column: 30
          }
        },
        loc: {
          start: {
            line: 23,
            column: 46
          },
          end: {
            line: 43,
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
            line: 27,
            column: 7
          },
          end: {
            line: 27,
            column: 70
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 27,
            column: 38
          },
          end: {
            line: 27,
            column: 55
          }
        }, {
          start: {
            line: 27,
            column: 58
          },
          end: {
            line: 27,
            column: 70
          }
        }],
        line: 27
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 32
          },
          end: {
            line: 28,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 32
          },
          end: {
            line: 28,
            column: 39
          }
        }, {
          start: {
            line: 28,
            column: 43
          },
          end: {
            line: 28,
            column: 69
          }
        }],
        line: 28
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c949275a3b5b78600f61baabd5da0d49dffceea2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dxxejn7k1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2dxxejn7k1();







const styles = (cov_2dxxejn7k1().s[0]++, (0,core_.makeStyles)(theme => {
  cov_2dxxejn7k1().f[0]++;
  cov_2dxxejn7k1().s[1]++;
  return {
    textContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1rem',
      padding: '10px',
      borderRadius: '10px'
    },
    AddIcon: {
      width: theme.spacing(2.5),
      paddingRight: theme.spacing(0.5)
    }
  };
}));
cov_2dxxejn7k1().s[2]++;
const K8sEmptyState = ({
  message
}) => {
  cov_2dxxejn7k1().f[1]++;
  const classes = (cov_2dxxejn7k1().s[3]++, styles());
  cov_2dxxejn7k1().s[4]++;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.textContent,
    children: [app/* default.palette.type */.ZP.palette.type == 'dark' ? (cov_2dxxejn7k1().b[0][0]++, /*#__PURE__*/jsx_runtime_.jsx(img_OperatorLight, {})) : (cov_2dxxejn7k1().b[0][1]++, /*#__PURE__*/jsx_runtime_.jsx(img_Operator, {})), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "h5",
      children: (cov_2dxxejn7k1().b[1][0]++, message) || (cov_2dxxejn7k1().b[1][1]++, 'No cluster connected yet')
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Link, {
      href: "/management/connections",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Button, {
        type: "submit",
        variant: "contained",
        color: "primary",
        style: {
          margin: '0.6rem 0.6rem',
          whiteSpace: 'nowrap'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx((Add_default()), {
          className: classes.AddIcon
        }), "Connect Clusters"]
      })
    })]
  });
};

/***/ }),

/***/ 43086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RedOctagonSvg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["fill"];

function cov_1du313hsf2() {
  var path = "/workspace/meshplay/ui/components/shapes/Octagon.js";
  var hash = "cbbc12c17c5c28dbfb55c22e80d45650563b261c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/shapes/Octagon.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "RedOctagonSvg",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 37
          }
        },
        loc: {
          start: {
            line: 1,
            column: 63
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 1
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
    hash: "cbbc12c17c5c28dbfb55c22e80d45650563b261c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1du313hsf2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1du313hsf2();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RedOctagonSvg(_ref) {
  let {
    fill
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  cov_1du313hsf2().f[0]++;
  cov_1du313hsf2().s[0]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    style: {
      rotate: '-23.75deg',
      top: '-6px',
      paddingLeft: 1
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({
      width: "29.768",
      height: "40.001",
      viewBox: "0 0 40.001 40.001",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, otherProps), {}, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M7.065 7.065L20.165 1.639L33.268 7.065L38.695 20.167L33.268 33.268L20.165 38.696L7.065 33.268L1.639 20.167L7.065 7.065Z",
        fill: fill,
        stroke: "white",
        "stroke-width": "1.8604999999999998"
      })
    }))
  });
}

/***/ }),

/***/ 75951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ RoundedTriangleShape)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
function cov_1e4scrk417() {
  var path = "/workspace/meshplay/ui/components/shapes/RoundedTriangle.js";
  var hash = "b5bd420b58b4421446f6398535bf3674b05a73ba";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/components/shapes/RoundedTriangle.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 11,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "RoundedTriangleShape",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 36
          }
        },
        loc: {
          start: {
            line: 1,
            column: 48
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 1
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
    hash: "b5bd420b58b4421446f6398535bf3674b05a73ba"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1e4scrk417 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1e4scrk417();

function RoundedTriangleShape({
  color
}) {
  cov_1e4scrk417().f[0]++;
  cov_1e4scrk417().s[0]++;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M19.547 2.625c-2.021-3.5-7.073-3.5-9.094 0L.797 19.351c-2.021 3.5.505 7.875 4.546 7.875h19.314c4.041 0 6.567-4.375 4.546-7.875L19.547 2.625Z",
      fill: color,
      stroke: "white",
      "stroke-width": "1.5"
    })
  });
}

/***/ })

};
;