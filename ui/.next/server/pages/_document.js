"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 66495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(56859);
;// CONCATENATED MODULE: external "styled-jsx"
const external_styled_jsx_namespaceObject = require("styled-jsx");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./pages/_document.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const registry = (0,external_styled_jsx_namespaceObject.createStyleRegistry)();
const flush = registry.flush();

class MeshplayDocument extends next_document["default"] {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      lang: "en",
      dir: "ltr",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "referrer",
          content: "no-referrer"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          href: "/static/favicon.png"
        }), /*#__PURE__*/jsx_runtime_.jsx("script", {
          dangerouslySetInnerHTML: {
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            // Fetch user preferences
            fetch("/api/user/prefs", { credentials: 'include' })
              .then((res) => res.json())
              .then((res) => {
                if (res && res?.anonymousUsageStats === false) {
                  // User opted out of tracking, disable GTM
                  w[l] = []; // Clear the dataLayer array
                  w['ga-disable-'+i] = true; // Disable Google Analytics tracking
                }
              }).catch((err) => {
                console.error("error while fetching user prefs for googletagmanag",err);
              });
          })(window,document,'script','dataLayer','GTM-TFLZDSQ');`
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("style", {
          type: "text/css",
          children: '\
            .hide-scrollbar::-webkit-scrollbar {\
              width: 0 !important;\
            }\
          .reduce-scrollbar-width::-webkit-scrollbar {\
              width: 0.3em !important;\
            }\
          '
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("noscript", {
          dangerouslySetInnerHTML: {
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFLZDSQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

MeshplayDocument.getInitialProps = ctx => {
  // resolution order
  //
  // on the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // on the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // on the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, props));
    };

    return WrappedComponent;
  });
  let css; // it might be undefined, e.g. after an error.

  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return _objectSpread(_objectSpread({}, page), {}, {
    pageContext,
    // styles fragment is rendered after the app and page rendering finish.
    styles: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("style", {
        id: "jss-server-side" // eslint-disable-next-line react/no-danger
        ,
        dangerouslySetInnerHTML: {
          __html: css
        }
      }), flush || null]
    })
  });
};

/* harmony default export */ const _document = (MeshplayDocument);

/***/ }),

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,6859], () => (__webpack_exec__(66495)));
module.exports = __webpack_exports__;

})();