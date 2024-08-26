"use strict";
exports.id = 6811;
exports.ids = [6811];
exports.modules = {

/***/ 46811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E_": () => (/* binding */ EVENT_TYPES),
/* harmony export */   "F5": () => (/* binding */ CONNECTION_STATE_TO_TRANSITION_MAP),
/* harmony export */   "J1": () => (/* binding */ MeshplayPatternsCatalog),
/* harmony export */   "Jf": () => (/* binding */ REGISTRY_ITEM_STATES_TO_TRANSITION_MAP),
/* harmony export */   "Jy": () => (/* binding */ MeshplayFiltersCatalog),
/* harmony export */   "KU": () => (/* binding */ CONTROLLERS),
/* harmony export */   "NJ": () => (/* binding */ CONNECTION_KINDS),
/* harmony export */   "OF": () => (/* binding */ CONNECTION_STATES),
/* harmony export */   "P3": () => (/* binding */ FILE_OPS),
/* harmony export */   "We": () => (/* binding */ MESHSYNC_STATES),
/* harmony export */   "aO": () => (/* binding */ ACTIONS),
/* harmony export */   "ac": () => (/* binding */ REGISTRY_ITEM_STATES),
/* harmony export */   "cR": () => (/* binding */ TRANSFER_COMPONENT),
/* harmony export */   "fJ": () => (/* binding */ CONNECTION_KINDS_DEF),
/* harmony export */   "gU": () => (/* binding */ FILTER),
/* harmony export */   "iK": () => (/* binding */ EXTENSIONS),
/* harmony export */   "ix": () => (/* binding */ VISIBILITY),
/* harmony export */   "tx": () => (/* binding */ PATTERN),
/* harmony export */   "yr": () => (/* binding */ CONTROLLER_STATES)
/* harmony export */ });
/* unused harmony exports CON_OPS, DEPLOYMENT_TYPE */
function cov_1pprmi5atm() {
  var path = "/workspace/meshplay/ui/utils/Enum.js";
  var hash = "c3391e1b78e6565df3697c4671fd2fc897773e62";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/workspace/meshplay/ui/utils/Enum.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 23
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "2": {
        start: {
          line: 15,
          column: 23
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "3": {
        start: {
          line: 21,
          column: 31
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "4": {
        start: {
          line: 26,
          column: 26
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "5": {
        start: {
          line: 32,
          column: 27
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "6": {
        start: {
          line: 38,
          column: 26
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "7": {
        start: {
          line: 42,
          column: 36
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "8": {
        start: {
          line: 47,
          column: 54
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "9": {
        start: {
          line: 52,
          column: 33
        },
        end: {
          line: 61,
          column: 1
        }
      },
      "10": {
        start: {
          line: 63,
          column: 27
        },
        end: {
          line: 67,
          column: 1
        }
      },
      "11": {
        start: {
          line: 70,
          column: 33
        },
        end: {
          line: 80,
          column: 1
        }
      },
      "12": {
        start: {
          line: 82,
          column: 39
        },
        end: {
          line: 82,
          column: 66
        }
      },
      "13": {
        start: {
          line: 84,
          column: 38
        },
        end: {
          line: 84,
          column: 64
        }
      },
      "14": {
        start: {
          line: 87,
          column: 36
        },
        end: {
          line: 87,
          column: 97
        }
      },
      "15": {
        start: {
          line: 89,
          column: 32
        },
        end: {
          line: 95,
          column: 1
        }
      },
      "16": {
        start: {
          line: 97,
          column: 31
        },
        end: {
          line: 100,
          column: 1
        }
      },
      "17": {
        start: {
          line: 102,
          column: 34
        },
        end: {
          line: 105,
          column: 1
        }
      },
      "18": {
        start: {
          line: 107,
          column: 50
        },
        end: {
          line: 116,
          column: 1
        }
      },
      "19": {
        start: {
          line: 118,
          column: 22
        },
        end: {
          line: 118,
          column: 30
        }
      },
      "20": {
        start: {
          line: 119,
          column: 23
        },
        end: {
          line: 119,
          column: 32
        }
      }
    },
    fnMap: {},
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
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c3391e1b78e6565df3697c4671fd2fc897773e62"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1pprmi5atm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1pprmi5atm();
const FILE_OPS = (cov_1pprmi5atm().s[0]++, {
  FILE_UPLOAD: 'upload',
  URL_UPLOAD: 'url_upload',
  UPDATE: 'update',
  DELETE: 'delete',
  DOWNLOAD: 'download',
  CLONE: 'clone'
});
const CON_OPS = (cov_1pprmi5atm().s[1]++, {
  DELETE: 'delete',
  UPDATE: 'update',
  CREATE: 'create'
});
const ACTIONS = (cov_1pprmi5atm().s[2]++, {
  DEPLOY: 2,
  UNDEPLOY: 1,
  VERIFY: 0
});
const DEPLOYMENT_TYPE = (cov_1pprmi5atm().s[3]++, {
  IN_CLUSTER: 'in_cluster',
  OUT_CLUSTER: 'out_of_cluster'
});
const VISIBILITY = (cov_1pprmi5atm().s[4]++, {
  PRIVATE: 'private',
  PUBLIC: 'public',
  PUBLISHED: 'published'
});
const EVENT_TYPES = (cov_1pprmi5atm().s[5]++, {
  ADDED: 'ADDED',
  DELETED: 'DELETED',
  MODIFIED: 'MODIFIED'
});
const EXTENSIONS = (cov_1pprmi5atm().s[6]++, {
  MESHMAP: 'meshmap'
});
const REGISTRY_ITEM_STATES = (cov_1pprmi5atm().s[7]++, {
  ENABLED: 'enabled',
  IGNORED: 'ignored'
});
const REGISTRY_ITEM_STATES_TO_TRANSITION_MAP = (cov_1pprmi5atm().s[8]++, {
  [REGISTRY_ITEM_STATES.ENABLED]: 'Enable',
  [REGISTRY_ITEM_STATES.IGNORED]: 'Ignore'
});
const CONNECTION_STATES = (cov_1pprmi5atm().s[9]++, {
  DISCOVERED: 'discovered',
  REGISTERED: 'registered',
  CONNECTED: 'connected',
  IGNORED: 'ignored',
  MAINTENANCE: 'maintenance',
  DISCONNECTED: 'disconnected',
  DELETED: 'deleted',
  NOTFOUND: 'not found'
});
const CONTROLLERS = (cov_1pprmi5atm().s[10]++, {
  BROKER: 'BROKER',
  OPERATOR: 'OPERATOR',
  MESHSYNC: 'MESHSYNC'
}); // Fetch from GraphQL/REST API remove this

const CONTROLLER_STATES = (cov_1pprmi5atm().s[11]++, {
  DEPLOYED: 'DEPLOYED',
  NOTDEPLOYED: 'NOTDEPLOYED',
  UNDEPLOYED: 'UNDEPLOYED',
  DEPLOYING: 'DEPLOYING',
  ENABLED: 'ENABLED',
  UNKOWN: 'UNKOWN',
  RUNNING: 'RUNNING',
  CONNECTED: 'CONNECTED',
  DISABLED: 'DISABLED'
});
const MeshplayPatternsCatalog = (cov_1pprmi5atm().s[12]++, 'meshplay-patterns-catalog');
const MeshplayFiltersCatalog = (cov_1pprmi5atm().s[13]++, 'meshplay-filters-catalog'); // Remove this fetch all connections initially

const CONNECTION_KINDS_DEF = (cov_1pprmi5atm().s[14]++, ['MESHPLAY', 'KUBERNETES', 'PROMETHEUS', 'GRAFANA', 'GITHUB']);
const CONNECTION_KINDS = (cov_1pprmi5atm().s[15]++, {
  MESHPLAY: 'meshplay',
  KUBERNETES: 'kubernetes',
  PROMETHEUS: 'prometheus',
  GRAFANA: 'grafana',
  GITHUB: 'github'
});
const MESHSYNC_STATES = (cov_1pprmi5atm().s[16]++, {
  DISCOVERED: 'discovered',
  REGISTER: 'register'
});
const TRANSFER_COMPONENT = (cov_1pprmi5atm().s[17]++, {
  CHIP: 'chip',
  OTHER: 'other'
});
const CONNECTION_STATE_TO_TRANSITION_MAP = (cov_1pprmi5atm().s[18]++, {
  [CONNECTION_STATES.IGNORED]: 'Ignore',
  [CONNECTION_STATES.CONNECTED]: 'Connect',
  [CONNECTION_STATES.REGISTERED]: 'Register',
  [CONNECTION_STATES.DISCOVERED]: 'Discover',
  [CONNECTION_STATES.DELETED]: 'Delete',
  [CONNECTION_STATES.MAINTENANCE]: 'Maintenance',
  [CONNECTION_STATES.DISCONNECTED]: 'Disconnect',
  [CONNECTION_STATES.NOTFOUND]: 'Not Found'
});
const FILTER = (cov_1pprmi5atm().s[19]++, 'filter');
const PATTERN = (cov_1pprmi5atm().s[20]++, 'pattern');

/***/ })

};
;