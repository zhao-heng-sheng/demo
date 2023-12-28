(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dLdi1":[function(require,module,exports) {
var p = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var y = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var H = new Set(p), _ = (e)=>H.has(e), X = p.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var G = _("--dry-run"), d = ()=>_("--verbose") || y().VERBOSE === "true", Z = d();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), D = 0, c = (...e)=>d() && u(`\u{1F7E1} ${D++}`, ...e);
var s = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\project\\demo\\HTML\\all-history-extend\\content.ts",
    "bundleId": "3716c965672cac6b",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = s.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: s.verbose
    }
};
var S = module.bundle.Module;
function I(e) {
    S.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !s.host || s.host === "0.0.0.0" ? "localhost" : s.host;
}
function C() {
    return s.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${s.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let i of r.diagnostics.ansi){
            let w = i.codeframe || i.stack;
            m("[plasmo/parcel-runtime]: " + i.message + `
` + w + `

` + i.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${s.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${s.entryFilePath}`);
    }), t;
}
var n = "__plasmo-loading__", T = typeof trustedTypes < "u" ? trustedTypes.createPolicy(`trusted-html-${n}`, {
    createHTML: (e)=>e
}) : void 0;
function g() {
    return document.getElementById(n);
}
function f() {
    return !g();
}
function $() {
    let e = document.createElement("div");
    e.id = n;
    let t = `
  <style>
    #${n} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${n}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${n} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${n} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${n} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${n} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function F(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = $();
        e = F(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var N = `${E}${module.id}__`, a, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    a?.disconnect(), a = l?.runtime.connect({
        name: N
    }), a.onDisconnect.addListener(()=>{
        h();
    }), a.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function W() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
W();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === s.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? a.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"71ecL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _utils = require("./utils");
(async ()=>{
    let { href: url, hostname: domain, port } = window.location;
    let browserType = (0, _utils.getBsInfo)().bs_name;
    let title = document.title;
    let os = (0, _utils.getOS)();
    let latitude, longitude;
    let regainBrowserData = ()=>{
        ({ href: url, hostname: domain, port } = window.location);
        title = document.title;
    };
    let addHistory = ()=>{
        let notRecordDomain = [
            "localhost",
            "127.0.0.1"
        ];
        if (notRecordDomain.includes(domain)) return;
        (0, _axiosDefault.default).post("http://localhost:3000/history", {
            url,
            domain,
            port,
            title,
            browserType,
            os,
            latitude,
            longitude
        });
    // .then((res) => {
    //   console.log(res)
    // })
    };
    addHistory();
    window.addEventListener("hashchange", (e)=>{
        regainBrowserData();
        addHistory();
    });
})();

},{"axios":"htzGv","./utils":"3JIjh","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"htzGv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "getAdapter", ()=>getAdapter);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"7onk7","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"7onk7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("./adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = (0, _adaptersJsDefault.default).getAdapter;
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"bvS5m","./helpers/bind.js":"jVDDG","./core/Axios.js":"eXtxw","./core/mergeConfig.js":"jZucJ","./defaults/index.js":"h1Er0","./helpers/formDataToJSON.js":"91rGf","./cancel/CanceledError.js":"8ul1M","./cancel/CancelToken.js":"5XOxw","./cancel/isCancel.js":"7TB3O","./env/data.js":"aue56","./helpers/toFormData.js":"fxqPW","./core/AxiosError.js":"htAtn","./helpers/spread.js":"9yYa9","./helpers/isAxiosError.js":"ixEM2","./core/AxiosHeaders.js":"b8JTV","./adapters/adapters.js":"3lp7B","./helpers/HttpStatusCode.js":"o2NYY","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"bvS5m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var global = arguments[3];
"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) a[key] = (0, _bindJsDefault.default)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
};

},{"./helpers/bind.js":"jVDDG","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"jVDDG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bind);
"use strict";
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"6dfwG":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eXtxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, _utilsJsDefault.default).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        // Flatten headers
        let contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        headers && (0, _utilsJsDefault.default).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"./../utils.js":"bvS5m","../helpers/buildURL.js":"iFQD5","./InterceptorManager.js":"7n67K","./dispatchRequest.js":"e9eeI","./mergeConfig.js":"jZucJ","./buildFullPath.js":"8yWJi","../helpers/validator.js":"ivjl8","./AxiosHeaders.js":"b8JTV","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"iFQD5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildURL);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}

},{"../utils.js":"bvS5m","../helpers/AxiosURLSearchParams.js":"62Eem","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"62Eem":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"fxqPW","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"fxqPW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var Buffer = require("e6fad0a9ea1b9e57").Buffer;
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)("Blob is not supported. Use a Buffer instead.");
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, _utilsJsDefault.default).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, "[]")) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"e6fad0a9ea1b9e57":"jd6EY","../utils.js":"bvS5m","../core/AxiosError.js":"htAtn","../platform/node/classes/FormData.js":"53Gj3","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"jd6EY":[function(require,module,exports) {
var Er = Object.create;
var N = Object.defineProperty;
var dr = Object.getOwnPropertyDescriptor;
var gr = Object.getOwnPropertyNames;
var mr = Object.getPrototypeOf, Ir = Object.prototype.hasOwnProperty;
var $ = (i, r)=>()=>(r || i((r = {
            exports: {}
        }).exports, r), r.exports), Fr = (i, r)=>{
    for(var t in r)N(i, t, {
        get: r[t],
        enumerable: !0
    });
}, L = (i, r, t, n)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let e of gr(r))!Ir.call(i, e) && e !== t && N(i, e, {
        get: ()=>r[e],
        enumerable: !(n = dr(r, e)) || n.enumerable
    });
    return i;
}, S = (i, r, t)=>(L(i, r, "default"), t && L(t, r, "default")), J = (i, r, t)=>(t = i != null ? Er(mr(i)) : {}, L(r || !i || !i.__esModule ? N(t, "default", {
        value: i,
        enumerable: !0
    }) : t, i)), Ar = (i)=>L(N({}, "__esModule", {
        value: !0
    }), i);
var Q = $((M)=>{
    "use strict";
    M.byteLength = Rr;
    M.toByteArray = Cr;
    M.fromByteArray = Lr;
    var B = [], w = [], Ur = typeof Uint8Array < "u" ? Uint8Array : Array, P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(m = 0, K = P.length; m < K; ++m)B[m] = P[m], w[P.charCodeAt(m)] = m;
    var m, K;
    w["-".charCodeAt(0)] = 62;
    w["_".charCodeAt(0)] = 63;
    function Z(i) {
        var r = i.length;
        if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var t = i.indexOf("=");
        t === -1 && (t = r);
        var n = t === r ? 0 : 4 - t % 4;
        return [
            t,
            n
        ];
    }
    function Rr(i) {
        var r = Z(i), t = r[0], n = r[1];
        return (t + n) * 3 / 4 - n;
    }
    function Tr(i, r, t) {
        return (r + t) * 3 / 4 - t;
    }
    function Cr(i) {
        var r, t = Z(i), n = t[0], e = t[1], o = new Ur(Tr(i, n, e)), u = 0, f = e > 0 ? n - 4 : n, c;
        for(c = 0; c < f; c += 4)r = w[i.charCodeAt(c)] << 18 | w[i.charCodeAt(c + 1)] << 12 | w[i.charCodeAt(c + 2)] << 6 | w[i.charCodeAt(c + 3)], o[u++] = r >> 16 & 255, o[u++] = r >> 8 & 255, o[u++] = r & 255;
        return e === 2 && (r = w[i.charCodeAt(c)] << 2 | w[i.charCodeAt(c + 1)] >> 4, o[u++] = r & 255), e === 1 && (r = w[i.charCodeAt(c)] << 10 | w[i.charCodeAt(c + 1)] << 4 | w[i.charCodeAt(c + 2)] >> 2, o[u++] = r >> 8 & 255, o[u++] = r & 255), o;
    }
    function Sr(i) {
        return B[i >> 18 & 63] + B[i >> 12 & 63] + B[i >> 6 & 63] + B[i & 63];
    }
    function _r(i, r, t) {
        for(var n, e = [], o = r; o < t; o += 3)n = (i[o] << 16 & 16711680) + (i[o + 1] << 8 & 65280) + (i[o + 2] & 255), e.push(Sr(n));
        return e.join("");
    }
    function Lr(i) {
        for(var r, t = i.length, n = t % 3, e = [], o = 16383, u = 0, f = t - n; u < f; u += o)e.push(_r(i, u, u + o > f ? f : u + o));
        return n === 1 ? (r = i[t - 1], e.push(B[r >> 2] + B[r << 4 & 63] + "==")) : n === 2 && (r = (i[t - 2] << 8) + i[t - 1], e.push(B[r >> 10] + B[r >> 4 & 63] + B[r << 2 & 63] + "=")), e.join("");
    }
});
var v = $((O)=>{
    O.read = function(i, r, t, n, e) {
        var o, u, f = e * 8 - n - 1, c = (1 << f) - 1, l = c >> 1, s = -7, p = t ? e - 1 : 0, F = t ? -1 : 1, x = i[r + p];
        for(p += F, o = x & (1 << -s) - 1, x >>= -s, s += f; s > 0; o = o * 256 + i[r + p], p += F, s -= 8);
        for(u = o & (1 << -s) - 1, o >>= -s, s += n; s > 0; u = u * 256 + i[r + p], p += F, s -= 8);
        if (o === 0) o = 1 - l;
        else {
            if (o === c) return u ? NaN : (x ? -1 : 1) * (1 / 0);
            u = u + Math.pow(2, n), o = o - l;
        }
        return (x ? -1 : 1) * u * Math.pow(2, o - n);
    };
    O.write = function(i, r, t, n, e, o) {
        var u, f, c, l = o * 8 - e - 1, s = (1 << l) - 1, p = s >> 1, F = e === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x = n ? 0 : o - 1, b = n ? 1 : -1, Br = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
        for(r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (f = isNaN(r) ? 1 : 0, u = s) : (u = Math.floor(Math.log(r) / Math.LN2), r * (c = Math.pow(2, -u)) < 1 && (u--, c *= 2), u + p >= 1 ? r += F / c : r += F * Math.pow(2, 1 - p), r * c >= 2 && (u++, c /= 2), u + p >= s ? (f = 0, u = s) : u + p >= 1 ? (f = (r * c - 1) * Math.pow(2, e), u = u + p) : (f = r * Math.pow(2, p - 1) * Math.pow(2, e), u = 0)); e >= 8; i[t + x] = f & 255, x += b, f /= 256, e -= 8);
        for(u = u << e | f, l += e; l > 0; i[t + x] = u & 255, x += b, u /= 256, l -= 8);
        i[t + x - b] |= Br * 128;
    };
});
var z = $((T)=>{
    "use strict";
    var G = Q(), U = v(), rr = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    T.Buffer = h;
    T.SlowBuffer = $r;
    T.INSPECT_MAX_BYTES = 50;
    var k = 2147483647;
    T.kMaxLength = k;
    h.TYPED_ARRAY_SUPPORT = Nr();
    !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Nr() {
        try {
            let i = new Uint8Array(1), r = {
                foo: function() {
                    return 42;
                }
            };
            return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(i, r), i.foo() === 42;
        } catch (i) {
            return !1;
        }
    }
    Object.defineProperty(h.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (h.isBuffer(this)) return this.buffer;
        }
    });
    Object.defineProperty(h.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (h.isBuffer(this)) return this.byteOffset;
        }
    });
    function d(i) {
        if (i > k) throw new RangeError('The value "' + i + '" is invalid for option "size"');
        let r = new Uint8Array(i);
        return Object.setPrototypeOf(r, h.prototype), r;
    }
    function h(i, r, t) {
        if (typeof i == "number") {
            if (typeof r == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return j(i);
        }
        return er(i, r, t);
    }
    h.poolSize = 8192;
    function er(i, r, t) {
        if (typeof i == "string") return kr(i, r);
        if (ArrayBuffer.isView(i)) return Dr(i);
        if (i == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
        if (E(i, ArrayBuffer) || i && E(i.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (E(i, SharedArrayBuffer) || i && E(i.buffer, SharedArrayBuffer))) return q(i, r, t);
        if (typeof i == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = i.valueOf && i.valueOf();
        if (n != null && n !== i) return h.from(n, r, t);
        let e = br(i);
        if (e) return e;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == "function") return h.from(i[Symbol.toPrimitive]("string"), r, t);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
    }
    h.from = function(i, r, t) {
        return er(i, r, t);
    };
    Object.setPrototypeOf(h.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(h, Uint8Array);
    function or(i) {
        if (typeof i != "number") throw new TypeError('"size" argument must be of type number');
        if (i < 0) throw new RangeError('The value "' + i + '" is invalid for option "size"');
    }
    function Mr(i, r, t) {
        return or(i), i <= 0 ? d(i) : r !== void 0 ? typeof t == "string" ? d(i).fill(r, t) : d(i).fill(r) : d(i);
    }
    h.alloc = function(i, r, t) {
        return Mr(i, r, t);
    };
    function j(i) {
        return or(i), d(i < 0 ? 0 : H(i) | 0);
    }
    h.allocUnsafe = function(i) {
        return j(i);
    };
    h.allocUnsafeSlow = function(i) {
        return j(i);
    };
    function kr(i, r) {
        if ((typeof r != "string" || r === "") && (r = "utf8"), !h.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
        let t = ur(i, r) | 0, n = d(t), e = n.write(i, r);
        return e !== t && (n = n.slice(0, e)), n;
    }
    function Y(i) {
        let r = i.length < 0 ? 0 : H(i.length) | 0, t = d(r);
        for(let n = 0; n < r; n += 1)t[n] = i[n] & 255;
        return t;
    }
    function Dr(i) {
        if (E(i, Uint8Array)) {
            let r = new Uint8Array(i);
            return q(r.buffer, r.byteOffset, r.byteLength);
        }
        return Y(i);
    }
    function q(i, r, t) {
        if (r < 0 || i.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
        if (i.byteLength < r + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return r === void 0 && t === void 0 ? n = new Uint8Array(i) : t === void 0 ? n = new Uint8Array(i, r) : n = new Uint8Array(i, r, t), Object.setPrototypeOf(n, h.prototype), n;
    }
    function br(i) {
        if (h.isBuffer(i)) {
            let r = H(i.length) | 0, t = d(r);
            return t.length === 0 || i.copy(t, 0, 0, r), t;
        }
        if (i.length !== void 0) return typeof i.length != "number" || X(i.length) ? d(0) : Y(i);
        if (i.type === "Buffer" && Array.isArray(i.data)) return Y(i.data);
    }
    function H(i) {
        if (i >= k) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + k.toString(16) + " bytes");
        return i | 0;
    }
    function $r(i) {
        return +i != i && (i = 0), h.alloc(+i);
    }
    h.isBuffer = function(r) {
        return r != null && r._isBuffer === !0 && r !== h.prototype;
    };
    h.compare = function(r, t) {
        if (E(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), E(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(r) || !h.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (r === t) return 0;
        let n = r.length, e = t.length;
        for(let o = 0, u = Math.min(n, e); o < u; ++o)if (r[o] !== t[o]) {
            n = r[o], e = t[o];
            break;
        }
        return n < e ? -1 : e < n ? 1 : 0;
    };
    h.isEncoding = function(r) {
        switch(String(r).toLowerCase()){
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1;
        }
    };
    h.concat = function(r, t) {
        if (!Array.isArray(r)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (r.length === 0) return h.alloc(0);
        let n;
        if (t === void 0) for(t = 0, n = 0; n < r.length; ++n)t += r[n].length;
        let e = h.allocUnsafe(t), o = 0;
        for(n = 0; n < r.length; ++n){
            let u = r[n];
            if (E(u, Uint8Array)) o + u.length > e.length ? (h.isBuffer(u) || (u = h.from(u)), u.copy(e, o)) : Uint8Array.prototype.set.call(e, u, o);
            else if (h.isBuffer(u)) u.copy(e, o);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            o += u.length;
        }
        return e;
    };
    function ur(i, r) {
        if (h.isBuffer(i)) return i.length;
        if (ArrayBuffer.isView(i) || E(i, ArrayBuffer)) return i.byteLength;
        if (typeof i != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i);
        let t = i.length, n = arguments.length > 2 && arguments[2] === !0;
        if (!n && t === 0) return 0;
        let e = !1;
        for(;;)switch(r){
            case "ascii":
            case "latin1":
            case "binary":
                return t;
            case "utf8":
            case "utf-8":
                return W(i).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return t * 2;
            case "hex":
                return t >>> 1;
            case "base64":
                return wr(i).length;
            default:
                if (e) return n ? -1 : W(i).length;
                r = ("" + r).toLowerCase(), e = !0;
        }
    }
    h.byteLength = ur;
    function Pr(i, r, t) {
        let n = !1;
        if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r)) return "";
        for(i || (i = "utf8");;)switch(i){
            case "hex":
                return zr(this, r, t);
            case "utf8":
            case "utf-8":
                return fr(this, r, t);
            case "ascii":
                return Vr(this, r, t);
            case "latin1":
            case "binary":
                return Xr(this, r, t);
            case "base64":
                return jr(this, r, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Jr(this, r, t);
            default:
                if (n) throw new TypeError("Unknown encoding: " + i);
                i = (i + "").toLowerCase(), n = !0;
        }
    }
    h.prototype._isBuffer = !0;
    function I(i, r, t) {
        let n = i[r];
        i[r] = i[t], i[t] = n;
    }
    h.prototype.swap16 = function() {
        let r = this.length;
        if (r % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for(let t = 0; t < r; t += 2)I(this, t, t + 1);
        return this;
    };
    h.prototype.swap32 = function() {
        let r = this.length;
        if (r % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for(let t = 0; t < r; t += 4)I(this, t, t + 3), I(this, t + 1, t + 2);
        return this;
    };
    h.prototype.swap64 = function() {
        let r = this.length;
        if (r % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for(let t = 0; t < r; t += 8)I(this, t, t + 7), I(this, t + 1, t + 6), I(this, t + 2, t + 5), I(this, t + 3, t + 4);
        return this;
    };
    h.prototype.toString = function() {
        let r = this.length;
        return r === 0 ? "" : arguments.length === 0 ? fr(this, 0, r) : Pr.apply(this, arguments);
    };
    h.prototype.toLocaleString = h.prototype.toString;
    h.prototype.equals = function(r) {
        if (!h.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
        return this === r ? !0 : h.compare(this, r) === 0;
    };
    h.prototype.inspect = function() {
        let r = "", t = T.INSPECT_MAX_BYTES;
        return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
    };
    rr && (h.prototype[rr] = h.prototype.inspect);
    h.prototype.compare = function(r, t, n, e, o) {
        if (E(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), !h.isBuffer(r)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
        if (t === void 0 && (t = 0), n === void 0 && (n = r ? r.length : 0), e === void 0 && (e = 0), o === void 0 && (o = this.length), t < 0 || n > r.length || e < 0 || o > this.length) throw new RangeError("out of range index");
        if (e >= o && t >= n) return 0;
        if (e >= o) return -1;
        if (t >= n) return 1;
        if (t >>>= 0, n >>>= 0, e >>>= 0, o >>>= 0, this === r) return 0;
        let u = o - e, f = n - t, c = Math.min(u, f), l = this.slice(e, o), s = r.slice(t, n);
        for(let p = 0; p < c; ++p)if (l[p] !== s[p]) {
            u = l[p], f = s[p];
            break;
        }
        return u < f ? -1 : f < u ? 1 : 0;
    };
    function hr(i, r, t, n, e) {
        if (i.length === 0) return -1;
        if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, X(t) && (t = e ? 0 : i.length - 1), t < 0 && (t = i.length + t), t >= i.length) {
            if (e) return -1;
            t = i.length - 1;
        } else if (t < 0) {
            if (e) t = 0;
            else return -1;
        }
        if (typeof r == "string" && (r = h.from(r, n)), h.isBuffer(r)) return r.length === 0 ? -1 : tr(i, r, t, n, e);
        if (typeof r == "number") return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? e ? Uint8Array.prototype.indexOf.call(i, r, t) : Uint8Array.prototype.lastIndexOf.call(i, r, t) : tr(i, [
            r
        ], t, n, e);
        throw new TypeError("val must be string, number or Buffer");
    }
    function tr(i, r, t, n, e) {
        let o = 1, u = i.length, f = r.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (i.length < 2 || r.length < 2) return -1;
            o = 2, u /= 2, f /= 2, t /= 2;
        }
        function c(s, p) {
            return o === 1 ? s[p] : s.readUInt16BE(p * o);
        }
        let l;
        if (e) {
            let s = -1;
            for(l = t; l < u; l++)if (c(i, l) === c(r, s === -1 ? 0 : l - s)) {
                if (s === -1 && (s = l), l - s + 1 === f) return s * o;
            } else s !== -1 && (l -= l - s), s = -1;
        } else for(t + f > u && (t = u - f), l = t; l >= 0; l--){
            let s = !0;
            for(let p = 0; p < f; p++)if (c(i, l + p) !== c(r, p)) {
                s = !1;
                break;
            }
            if (s) return l;
        }
        return -1;
    }
    h.prototype.includes = function(r, t, n) {
        return this.indexOf(r, t, n) !== -1;
    };
    h.prototype.indexOf = function(r, t, n) {
        return hr(this, r, t, n, !0);
    };
    h.prototype.lastIndexOf = function(r, t, n) {
        return hr(this, r, t, n, !1);
    };
    function Or(i, r, t, n) {
        t = Number(t) || 0;
        let e = i.length - t;
        n ? (n = Number(n), n > e && (n = e)) : n = e;
        let o = r.length;
        n > o / 2 && (n = o / 2);
        let u;
        for(u = 0; u < n; ++u){
            let f = parseInt(r.substr(u * 2, 2), 16);
            if (X(f)) return u;
            i[t + u] = f;
        }
        return u;
    }
    function Gr(i, r, t, n) {
        return D(W(r, i.length - t), i, t, n);
    }
    function Yr(i, r, t, n) {
        return D(vr(r), i, t, n);
    }
    function qr(i, r, t, n) {
        return D(wr(r), i, t, n);
    }
    function Wr(i, r, t, n) {
        return D(rt(r, i.length - t), i, t, n);
    }
    h.prototype.write = function(r, t, n, e) {
        if (t === void 0) e = "utf8", n = this.length, t = 0;
        else if (n === void 0 && typeof t == "string") e = t, n = this.length, t = 0;
        else if (isFinite(t)) t = t >>> 0, isFinite(n) ? (n = n >>> 0, e === void 0 && (e = "utf8")) : (e = n, n = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let o = this.length - t;
        if ((n === void 0 || n > o) && (n = o), r.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        e || (e = "utf8");
        let u = !1;
        for(;;)switch(e){
            case "hex":
                return Or(this, r, t, n);
            case "utf8":
            case "utf-8":
                return Gr(this, r, t, n);
            case "ascii":
            case "latin1":
            case "binary":
                return Yr(this, r, t, n);
            case "base64":
                return qr(this, r, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Wr(this, r, t, n);
            default:
                if (u) throw new TypeError("Unknown encoding: " + e);
                e = ("" + e).toLowerCase(), u = !0;
        }
    };
    h.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    };
    function jr(i, r, t) {
        return r === 0 && t === i.length ? G.fromByteArray(i) : G.fromByteArray(i.slice(r, t));
    }
    function fr(i, r, t) {
        t = Math.min(i.length, t);
        let n = [], e = r;
        for(; e < t;){
            let o = i[e], u = null, f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (e + f <= t) {
                let c, l, s, p;
                switch(f){
                    case 1:
                        o < 128 && (u = o);
                        break;
                    case 2:
                        c = i[e + 1], (c & 192) === 128 && (p = (o & 31) << 6 | c & 63, p > 127 && (u = p));
                        break;
                    case 3:
                        c = i[e + 1], l = i[e + 2], (c & 192) === 128 && (l & 192) === 128 && (p = (o & 15) << 12 | (c & 63) << 6 | l & 63, p > 2047 && (p < 55296 || p > 57343) && (u = p));
                        break;
                    case 4:
                        c = i[e + 1], l = i[e + 2], s = i[e + 3], (c & 192) === 128 && (l & 192) === 128 && (s & 192) === 128 && (p = (o & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | s & 63, p > 65535 && p < 1114112 && (u = p));
                }
            }
            u === null ? (u = 65533, f = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), n.push(u), e += f;
        }
        return Hr(n);
    }
    var ir = 4096;
    function Hr(i) {
        let r = i.length;
        if (r <= ir) return String.fromCharCode.apply(String, i);
        let t = "", n = 0;
        for(; n < r;)t += String.fromCharCode.apply(String, i.slice(n, n += ir));
        return t;
    }
    function Vr(i, r, t) {
        let n = "";
        t = Math.min(i.length, t);
        for(let e = r; e < t; ++e)n += String.fromCharCode(i[e] & 127);
        return n;
    }
    function Xr(i, r, t) {
        let n = "";
        t = Math.min(i.length, t);
        for(let e = r; e < t; ++e)n += String.fromCharCode(i[e]);
        return n;
    }
    function zr(i, r, t) {
        let n = i.length;
        (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
        let e = "";
        for(let o = r; o < t; ++o)e += tt[i[o]];
        return e;
    }
    function Jr(i, r, t) {
        let n = i.slice(r, t), e = "";
        for(let o = 0; o < n.length - 1; o += 2)e += String.fromCharCode(n[o] + n[o + 1] * 256);
        return e;
    }
    h.prototype.slice = function(r, t) {
        let n = this.length;
        r = ~~r, t = t === void 0 ? n : ~~t, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < r && (t = r);
        let e = this.subarray(r, t);
        return Object.setPrototypeOf(e, h.prototype), e;
    };
    function a(i, r, t) {
        if (i % 1 !== 0 || i < 0) throw new RangeError("offset is not uint");
        if (i + r > t) throw new RangeError("Trying to access beyond buffer length");
    }
    h.prototype.readUintLE = h.prototype.readUIntLE = function(r, t, n) {
        r = r >>> 0, t = t >>> 0, n || a(r, t, this.length);
        let e = this[r], o = 1, u = 0;
        for(; ++u < t && (o *= 256);)e += this[r + u] * o;
        return e;
    };
    h.prototype.readUintBE = h.prototype.readUIntBE = function(r, t, n) {
        r = r >>> 0, t = t >>> 0, n || a(r, t, this.length);
        let e = this[r + --t], o = 1;
        for(; t > 0 && (o *= 256);)e += this[r + --t] * o;
        return e;
    };
    h.prototype.readUint8 = h.prototype.readUInt8 = function(r, t) {
        return r = r >>> 0, t || a(r, 1, this.length), this[r];
    };
    h.prototype.readUint16LE = h.prototype.readUInt16LE = function(r, t) {
        return r = r >>> 0, t || a(r, 2, this.length), this[r] | this[r + 1] << 8;
    };
    h.prototype.readUint16BE = h.prototype.readUInt16BE = function(r, t) {
        return r = r >>> 0, t || a(r, 2, this.length), this[r] << 8 | this[r + 1];
    };
    h.prototype.readUint32LE = h.prototype.readUInt32LE = function(r, t) {
        return r = r >>> 0, t || a(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
    };
    h.prototype.readUint32BE = h.prototype.readUInt32BE = function(r, t) {
        return r = r >>> 0, t || a(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    };
    h.prototype.readBigUInt64LE = g(function(r) {
        r = r >>> 0, R(r, "offset");
        let t = this[r], n = this[r + 7];
        (t === void 0 || n === void 0) && _(r, this.length - 8);
        let e = t + this[++r] * 256 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, o = this[++r] + this[++r] * 256 + this[++r] * 2 ** 16 + n * 2 ** 24;
        return BigInt(e) + (BigInt(o) << BigInt(32));
    });
    h.prototype.readBigUInt64BE = g(function(r) {
        r = r >>> 0, R(r, "offset");
        let t = this[r], n = this[r + 7];
        (t === void 0 || n === void 0) && _(r, this.length - 8);
        let e = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 256 + this[++r], o = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 256 + n;
        return (BigInt(e) << BigInt(32)) + BigInt(o);
    });
    h.prototype.readIntLE = function(r, t, n) {
        r = r >>> 0, t = t >>> 0, n || a(r, t, this.length);
        let e = this[r], o = 1, u = 0;
        for(; ++u < t && (o *= 256);)e += this[r + u] * o;
        return o *= 128, e >= o && (e -= Math.pow(2, 8 * t)), e;
    };
    h.prototype.readIntBE = function(r, t, n) {
        r = r >>> 0, t = t >>> 0, n || a(r, t, this.length);
        let e = t, o = 1, u = this[r + --e];
        for(; e > 0 && (o *= 256);)u += this[r + --e] * o;
        return o *= 128, u >= o && (u -= Math.pow(2, 8 * t)), u;
    };
    h.prototype.readInt8 = function(r, t) {
        return r = r >>> 0, t || a(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
    };
    h.prototype.readInt16LE = function(r, t) {
        r = r >>> 0, t || a(r, 2, this.length);
        let n = this[r] | this[r + 1] << 8;
        return n & 32768 ? n | 4294901760 : n;
    };
    h.prototype.readInt16BE = function(r, t) {
        r = r >>> 0, t || a(r, 2, this.length);
        let n = this[r + 1] | this[r] << 8;
        return n & 32768 ? n | 4294901760 : n;
    };
    h.prototype.readInt32LE = function(r, t) {
        return r = r >>> 0, t || a(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    };
    h.prototype.readInt32BE = function(r, t) {
        return r = r >>> 0, t || a(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    };
    h.prototype.readBigInt64LE = g(function(r) {
        r = r >>> 0, R(r, "offset");
        let t = this[r], n = this[r + 7];
        (t === void 0 || n === void 0) && _(r, this.length - 8);
        let e = this[r + 4] + this[r + 5] * 256 + this[r + 6] * 2 ** 16 + (n << 24);
        return (BigInt(e) << BigInt(32)) + BigInt(t + this[++r] * 256 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
    });
    h.prototype.readBigInt64BE = g(function(r) {
        r = r >>> 0, R(r, "offset");
        let t = this[r], n = this[r + 7];
        (t === void 0 || n === void 0) && _(r, this.length - 8);
        let e = (t << 24) + this[++r] * 2 ** 16 + this[++r] * 256 + this[++r];
        return (BigInt(e) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 256 + n);
    });
    h.prototype.readFloatLE = function(r, t) {
        return r = r >>> 0, t || a(r, 4, this.length), U.read(this, r, !0, 23, 4);
    };
    h.prototype.readFloatBE = function(r, t) {
        return r = r >>> 0, t || a(r, 4, this.length), U.read(this, r, !1, 23, 4);
    };
    h.prototype.readDoubleLE = function(r, t) {
        return r = r >>> 0, t || a(r, 8, this.length), U.read(this, r, !0, 52, 8);
    };
    h.prototype.readDoubleBE = function(r, t) {
        return r = r >>> 0, t || a(r, 8, this.length), U.read(this, r, !1, 52, 8);
    };
    function y(i, r, t, n, e, o) {
        if (!h.isBuffer(i)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (r > e || r < o) throw new RangeError('"value" argument is out of bounds');
        if (t + n > i.length) throw new RangeError("Index out of range");
    }
    h.prototype.writeUintLE = h.prototype.writeUIntLE = function(r, t, n, e) {
        if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
            let f = Math.pow(2, 8 * n) - 1;
            y(this, r, t, n, f, 0);
        }
        let o = 1, u = 0;
        for(this[t] = r & 255; ++u < n && (o *= 256);)this[t + u] = r / o & 255;
        return t + n;
    };
    h.prototype.writeUintBE = h.prototype.writeUIntBE = function(r, t, n, e) {
        if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
            let f = Math.pow(2, 8 * n) - 1;
            y(this, r, t, n, f, 0);
        }
        let o = n - 1, u = 1;
        for(this[t + o] = r & 255; --o >= 0 && (u *= 256);)this[t + o] = r / u & 255;
        return t + n;
    };
    h.prototype.writeUint8 = h.prototype.writeUInt8 = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
    };
    h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
    };
    h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    function cr(i, r, t, n, e) {
        yr(r, n, e, i, t, 7);
        let o = Number(r & BigInt(4294967295));
        i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o;
        let u = Number(r >> BigInt(32) & BigInt(4294967295));
        return i[t++] = u, u = u >> 8, i[t++] = u, u = u >> 8, i[t++] = u, u = u >> 8, i[t++] = u, t;
    }
    function pr(i, r, t, n, e) {
        yr(r, n, e, i, t, 7);
        let o = Number(r & BigInt(4294967295));
        i[t + 7] = o, o = o >> 8, i[t + 6] = o, o = o >> 8, i[t + 5] = o, o = o >> 8, i[t + 4] = o;
        let u = Number(r >> BigInt(32) & BigInt(4294967295));
        return i[t + 3] = u, u = u >> 8, i[t + 2] = u, u = u >> 8, i[t + 1] = u, u = u >> 8, i[t] = u, t + 8;
    }
    h.prototype.writeBigUInt64LE = g(function(r, t = 0) {
        return cr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h.prototype.writeBigUInt64BE = g(function(r, t = 0) {
        return pr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h.prototype.writeIntLE = function(r, t, n, e) {
        if (r = +r, t = t >>> 0, !e) {
            let c = Math.pow(2, 8 * n - 1);
            y(this, r, t, n, c - 1, -c);
        }
        let o = 0, u = 1, f = 0;
        for(this[t] = r & 255; ++o < n && (u *= 256);)r < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1), this[t + o] = (r / u >> 0) - f & 255;
        return t + n;
    };
    h.prototype.writeIntBE = function(r, t, n, e) {
        if (r = +r, t = t >>> 0, !e) {
            let c = Math.pow(2, 8 * n - 1);
            y(this, r, t, n, c - 1, -c);
        }
        let o = n - 1, u = 1, f = 0;
        for(this[t + o] = r & 255; --o >= 0 && (u *= 256);)r < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1), this[t + o] = (r / u >> 0) - f & 255;
        return t + n;
    };
    h.prototype.writeInt8 = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
    };
    h.prototype.writeInt16LE = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    h.prototype.writeInt16BE = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    h.prototype.writeInt32LE = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
    };
    h.prototype.writeInt32BE = function(r, t, n) {
        return r = +r, t = t >>> 0, n || y(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    h.prototype.writeBigInt64LE = g(function(r, t = 0) {
        return cr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    h.prototype.writeBigInt64BE = g(function(r, t = 0) {
        return pr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function sr(i, r, t, n, e, o) {
        if (t + n > i.length) throw new RangeError("Index out of range");
        if (t < 0) throw new RangeError("Index out of range");
    }
    function lr(i, r, t, n, e) {
        return r = +r, t = t >>> 0, e || sr(i, r, t, 4, 34028234663852886e22, -340282346638528860000000000000000000000), U.write(i, r, t, n, 23, 4), t + 4;
    }
    h.prototype.writeFloatLE = function(r, t, n) {
        return lr(this, r, t, !0, n);
    };
    h.prototype.writeFloatBE = function(r, t, n) {
        return lr(this, r, t, !1, n);
    };
    function ar(i, r, t, n, e) {
        return r = +r, t = t >>> 0, e || sr(i, r, t, 8, 17976931348623157e292, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), U.write(i, r, t, n, 52, 8), t + 8;
    }
    h.prototype.writeDoubleLE = function(r, t, n) {
        return ar(this, r, t, !0, n);
    };
    h.prototype.writeDoubleBE = function(r, t, n) {
        return ar(this, r, t, !1, n);
    };
    h.prototype.copy = function(r, t, n, e) {
        if (!h.isBuffer(r)) throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !e && e !== 0 && (e = this.length), t >= r.length && (t = r.length), t || (t = 0), e > 0 && e < n && (e = n), e === n || r.length === 0 || this.length === 0) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("sourceEnd out of bounds");
        e > this.length && (e = this.length), r.length - t < e - n && (e = r.length - t + n);
        let o = e - n;
        return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, e) : Uint8Array.prototype.set.call(r, this.subarray(n, e), t), o;
    };
    h.prototype.fill = function(r, t, n, e) {
        if (typeof r == "string") {
            if (typeof t == "string" ? (e = t, t = 0, n = this.length) : typeof n == "string" && (e = n, n = this.length), e !== void 0 && typeof e != "string") throw new TypeError("encoding must be a string");
            if (typeof e == "string" && !h.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
            if (r.length === 1) {
                let u = r.charCodeAt(0);
                (e === "utf8" && u < 128 || e === "latin1") && (r = u);
            }
        } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
        if (n <= t) return this;
        t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0);
        let o;
        if (typeof r == "number") for(o = t; o < n; ++o)this[o] = r;
        else {
            let u = h.isBuffer(r) ? r : h.from(r, e), f = u.length;
            if (f === 0) throw new TypeError('The value "' + r + '" is invalid for argument "value"');
            for(o = 0; o < n - t; ++o)this[o + t] = u[o % f];
        }
        return this;
    };
    var A = {};
    function V(i, r, t) {
        A[i] = class extends t {
            constructor(){
                super(), Object.defineProperty(this, "message", {
                    value: r.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${i}]`, this.stack, delete this.name;
            }
            get code() {
                return i;
            }
            set code(e) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                });
            }
            toString() {
                return `${this.name} [${i}]: ${this.message}`;
            }
        };
    }
    V("ERR_BUFFER_OUT_OF_BOUNDS", function(i) {
        return i ? `${i} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    V("ERR_INVALID_ARG_TYPE", function(i, r) {
        return `The "${i}" argument must be of type number. Received type ${typeof r}`;
    }, TypeError);
    V("ERR_OUT_OF_RANGE", function(i, r, t) {
        let n = `The value of "${i}" is out of range.`, e = t;
        return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? e = nr(String(t)) : typeof t == "bigint" && (e = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (e = nr(e)), e += "n"), n += ` It must be ${r}. Received ${e}`, n;
    }, RangeError);
    function nr(i) {
        let r = "", t = i.length, n = i[0] === "-" ? 1 : 0;
        for(; t >= n + 4; t -= 3)r = `_${i.slice(t - 3, t)}${r}`;
        return `${i.slice(0, t)}${r}`;
    }
    function Kr(i, r, t) {
        R(r, "offset"), (i[r] === void 0 || i[r + t] === void 0) && _(r, i.length - (t + 1));
    }
    function yr(i, r, t, n, e, o) {
        if (i > t || i < r) {
            let u = typeof r == "bigint" ? "n" : "", f;
            throw o > 3 ? r === 0 || r === BigInt(0) ? f = `>= 0${u} and < 2${u} ** ${(o + 1) * 8}${u}` : f = `>= -(2${u} ** ${(o + 1) * 8 - 1}${u}) and < 2 ** ${(o + 1) * 8 - 1}${u}` : f = `>= ${r}${u} and <= ${t}${u}`, new A.ERR_OUT_OF_RANGE("value", f, i);
        }
        Kr(n, e, o);
    }
    function R(i, r) {
        if (typeof i != "number") throw new A.ERR_INVALID_ARG_TYPE(r, "number", i);
    }
    function _(i, r, t) {
        throw Math.floor(i) !== i ? (R(i, t), new A.ERR_OUT_OF_RANGE(t || "offset", "an integer", i)) : r < 0 ? new A.ERR_BUFFER_OUT_OF_BOUNDS : new A.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${r}`, i);
    }
    var Zr = /[^+/0-9A-Za-z-_]/g;
    function Qr(i) {
        if (i = i.split("=")[0], i = i.trim().replace(Zr, ""), i.length < 2) return "";
        for(; i.length % 4 !== 0;)i = i + "=";
        return i;
    }
    function W(i, r) {
        r = r || 1 / 0;
        let t, n = i.length, e = null, o = [];
        for(let u = 0; u < n; ++u){
            if (t = i.charCodeAt(u), t > 55295 && t < 57344) {
                if (!e) {
                    if (t > 56319) {
                        (r -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                    } else if (u + 1 === n) {
                        (r -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                    }
                    e = t;
                    continue;
                }
                if (t < 56320) {
                    (r -= 3) > -1 && o.push(239, 191, 189), e = t;
                    continue;
                }
                t = (e - 55296 << 10 | t - 56320) + 65536;
            } else e && (r -= 3) > -1 && o.push(239, 191, 189);
            if (e = null, t < 128) {
                if ((r -= 1) < 0) break;
                o.push(t);
            } else if (t < 2048) {
                if ((r -= 2) < 0) break;
                o.push(t >> 6 | 192, t & 63 | 128);
            } else if (t < 65536) {
                if ((r -= 3) < 0) break;
                o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
            } else if (t < 1114112) {
                if ((r -= 4) < 0) break;
                o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
            } else throw new Error("Invalid code point");
        }
        return o;
    }
    function vr(i) {
        let r = [];
        for(let t = 0; t < i.length; ++t)r.push(i.charCodeAt(t) & 255);
        return r;
    }
    function rt(i, r) {
        let t, n, e, o = [];
        for(let u = 0; u < i.length && !((r -= 2) < 0); ++u)t = i.charCodeAt(u), n = t >> 8, e = t % 256, o.push(e), o.push(n);
        return o;
    }
    function wr(i) {
        return G.toByteArray(Qr(i));
    }
    function D(i, r, t, n) {
        let e;
        for(e = 0; e < n && !(e + t >= r.length || e >= i.length); ++e)r[e + t] = i[e];
        return e;
    }
    function E(i, r) {
        return i instanceof r || i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === r.name;
    }
    function X(i) {
        return i !== i;
    }
    var tt = function() {
        let i = "0123456789abcdef", r = new Array(256);
        for(let t = 0; t < 16; ++t){
            let n = t * 16;
            for(let e = 0; e < 16; ++e)r[n + e] = i[t] + i[e];
        }
        return r;
    }();
    function g(i) {
        return typeof BigInt > "u" ? it : i;
    }
    function it() {
        throw new Error("BigInt not supported");
    }
});
var C = {};
Fr(C, {
    default: ()=>nt
});
module.exports = Ar(C);
var xr = J(z());
S(C, J(z()), module.exports);
var nt = xr.default; /*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/ 

},{}],"htAtn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, _utilsJsDefault.default).inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, _utilsJsDefault.default).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    (0, _utilsJsDefault.default).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
exports.default = AxiosError;

},{"../utils.js":"bvS5m","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"53Gj3":[function(require,module,exports) {
// eslint-disable-next-line strict
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"7n67K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"./../utils.js":"bvS5m","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"e9eeI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dispatchRequest);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

},{"./transformData.js":"6Zz56","../cancel/isCancel.js":"7TB3O","../defaults/index.js":"h1Er0","../cancel/CanceledError.js":"8ul1M","../core/AxiosHeaders.js":"b8JTV","../adapters/adapters.js":"3lp7B","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"6Zz56":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transformData);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

},{"./../utils.js":"bvS5m","../defaults/index.js":"h1Er0","../core/AxiosHeaders.js":"b8JTV","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"h1Er0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
"use strict";
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            }
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": undefined
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch"
], (method)=>{
    defaults.headers[method] = {};
});
exports.default = defaults;

},{"../utils.js":"bvS5m","../core/AxiosError.js":"htAtn","./transitional.js":"cl0oi","../helpers/toFormData.js":"fxqPW","../helpers/toURLEncodedForm.js":"jvA2j","../platform/index.js":"fHXKE","../helpers/formDataToJSON.js":"91rGf","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"cl0oi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"jvA2j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toURLEncodedForm);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}

},{"../utils.js":"bvS5m","./toFormData.js":"fxqPW","../platform/index.js":"fHXKE","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"fHXKE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _utilsJs = require("./common/utils.js");
exports.default = {
    ..._utilsJs,
    ...(0, _indexJsDefault.default)
};

},{"./node/index.js":"kfLcj","./common/utils.js":"i8wBF","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"kfLcj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var _blobJs = require("./classes/Blob.js");
var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob: (0, _blobJsDefault.default)
    },
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};

},{"./classes/URLSearchParams.js":"lse4S","./classes/FormData.js":"kt3Jf","./classes/Blob.js":"97IyP","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"lse4S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
exports.default = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"62Eem","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"kt3Jf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof FormData !== "undefined" ? FormData : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"97IyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof Blob !== "undefined" ? Blob : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"i8wBF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasBrowserEnv", ()=>hasBrowserEnv);
parcelHelpers.export(exports, "hasStandardBrowserWebWorkerEnv", ()=>hasStandardBrowserWebWorkerEnv);
parcelHelpers.export(exports, "hasStandardBrowserEnv", ()=>hasStandardBrowserEnv);
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = ((product)=>{
    return hasBrowserEnv && [
        "ReactNative",
        "NativeScript",
        "NS"
    ].indexOf(product) < 0;
})(typeof navigator !== "undefined" && navigator.product);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"91rGf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"bvS5m","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"b8JTV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
"use strict";
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
// reserved names hotfix
(0, _utilsJsDefault.default).reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"bvS5m","../helpers/parseHeaders.js":"d00i6","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"d00i6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};

},{"./../utils.js":"bvS5m","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"7TB3O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isCancel);
"use strict";
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"8ul1M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, _axiosErrorJsDefault.default).call(this, message == null ? "canceled" : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, _utilsJsDefault.default).inherits(CanceledError, (0, _axiosErrorJsDefault.default), {
    __CANCEL__: true
});
exports.default = CanceledError;

},{"../core/AxiosError.js":"htAtn","../utils.js":"bvS5m","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"3lp7B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default)
};
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
const renderReason = (reason)=>`- ${reason}`;
const isResolvedHandle = (adapter)=>(0, _utilsJsDefault.default).isFunction(adapter) || adapter === null || adapter === false;
exports.default = {
    getAdapter: (adapters)=>{
        adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
                adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                if (adapter === undefined) throw new (0, _axiosErrorJsDefault.default)(`Unknown adapter '${id}'`);
            }
            if (adapter) break;
            rejectedReasons[id || "#" + i] = adapter;
        }
        if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
            let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
            throw new (0, _axiosErrorJsDefault.default)(`There is no suitable adapter to dispatch the request ` + s, "ERR_NOT_SUPPORT");
        }
        return adapter;
    },
    adapters: knownAdapters
};

},{"../utils.js":"bvS5m","./http.js":"53Gj3","./xhr.js":"8gRZB","../core/AxiosError.js":"htAtn","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"8gRZB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("./../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _cookiesJs = require("./../helpers/cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildURLJs = require("./../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _isURLSameOriginJs = require("./../helpers/isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _speedometerJs = require("../helpers/speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
"use strict";
function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(config.headers).normalize();
        let { responseType, withXSRFToken } = config;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        let contentType;
        if ((0, _utilsJsDefault.default).isFormData(requestData)) {
            if ((0, _indexJsDefault.default).hasStandardBrowserEnv || (0, _indexJsDefault.default).hasStandardBrowserWebWorkerEnv) requestHeaders.setContentType(false); // Let the browser set it
            else if ((contentType = requestHeaders.getContentType()) !== false) {
                // fix semicolon duplication issue for ReactNative FormData implementation
                const [type, ...tokens] = contentType ? contentType.split(";").map((token)=>token.trim()).filter(Boolean) : [];
                requestHeaders.setContentType([
                    type || "multipart/form-data",
                    ...tokens
                ].join("; "));
            }
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)("Request aborted", (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, _transitionalJsDefault.default);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, _indexJsDefault.default).hasStandardBrowserEnv) {
            withXSRFToken && (0, _utilsJsDefault.default).isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
            if (withXSRFToken || withXSRFToken !== false && (0, _isURLSameOriginJsDefault.default)(fullPath)) {
                // Add xsrf header
                const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && (0, _cookiesJsDefault.default).read(config.xsrfCookieName);
                if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
            }
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(fullPath);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)("Unsupported protocol " + protocol + ":", (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"./../utils.js":"bvS5m","./../core/settle.js":"iCqj6","./../helpers/cookies.js":"jA4E7","./../helpers/buildURL.js":"iFQD5","../core/buildFullPath.js":"8yWJi","./../helpers/isURLSameOrigin.js":"6oiu8","../defaults/transitional.js":"cl0oi","../core/AxiosError.js":"htAtn","../cancel/CanceledError.js":"8ul1M","../helpers/parseProtocol.js":"hnf8y","../platform/index.js":"fHXKE","../core/AxiosHeaders.js":"b8JTV","../helpers/speedometer.js":"6Bl9b","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"iCqj6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>settle);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)("Request failed with status code " + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}

},{"./AxiosError.js":"htAtn","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"jA4E7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure) {
        const cookie = [
            name + "=" + encodeURIComponent(value)
        ];
        (0, _utilsJsDefault.default).isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        (0, _utilsJsDefault.default).isString(path) && cookie.push("path=" + path);
        (0, _utilsJsDefault.default).isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
    },
    read (name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
    },
    remove (name) {
        this.write(name, "", Date.now() - 86400000);
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};

},{"./../utils.js":"bvS5m","../platform/index.js":"fHXKE","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"8yWJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFullPath);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
"use strict";
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, _isAbsoluteURLJsDefault.default)(requestedURL)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}

},{"../helpers/isAbsoluteURL.js":"2Jct9","../helpers/combineURLs.js":"jLwf7","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"2Jct9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAbsoluteURL);
"use strict";
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"jLwf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>combineURLs);
"use strict";
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"6oiu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).hasStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, _utilsJsDefault.default).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils.js":"bvS5m","../platform/index.js":"fHXKE","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"hnf8y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseProtocol);
"use strict";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"6Bl9b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"jZucJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeConfig);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

},{"../utils.js":"bvS5m","./AxiosHeaders.js":"b8JTV","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"ivjl8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
const validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, _axiosErrorJsDefault.default)("options must be an object", (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)("option " + opt + " must be " + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)("Unknown option " + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"aue56","../core/AxiosError.js":"htAtn","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"aue56":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.6.2";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"5XOxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"8ul1M","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"9yYa9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>spread);
"use strict";
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"ixEM2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAxiosError);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}

},{"./../utils.js":"bvS5m","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"o2NYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"3JIjh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBsInfo", ()=>getBsInfo);
parcelHelpers.export(exports, "getOS", ()=>getOS);
const browserList = [
    {
        bs_name: "\u706b\u72d0\u6d4f\u89c8\u5668",
        bs_tag: "firefox"
    },
    {
        bs_name: "edge\u6d4f\u89c8\u5668",
        bs_tag: "edg"
    },
    {
        bs_name: "opera",
        bs_tag: "opr"
    },
    {
        bs_name: "\u4e16\u754c\u4e4b\u7a97",
        bs_tag: "theworld"
    },
    {
        bs_name: "\u9068\u6e38",
        bs_tag: "maxthon"
    },
    {
        bs_name: "QQ\u6d4f\u89c8\u5668",
        bs_tag: "qqbrowser"
    },
    {
        bs_name: "360\u6d4f\u89c8\u5668",
        bs_tag: "360"
    },
    {
        bs_name: "\u641c\u72d7\u6d4f\u89c8\u5668",
        bs_tag: "metasr"
    },
    {
        bs_name: "uc\u6d4f\u89c8\u5668",
        bs_tag: "ubrowse"
    },
    {
        bs_name: "\u730e\u8c79",
        bs_tag: "lbbrowser"
    },
    {
        bs_name: "\u5fae\u4fe1\u6d4f\u89c8\u5668",
        bs_tag: "micromessenger"
    },
    {
        bs_name: "\u5c0f\u7c73\u6d4f\u89c8\u5668",
        bs_tag: "miuibrowser"
    },
    {
        bs_name: "\u767e\u5ea6\u6d4f\u89c8\u5668",
        bs_tag: "baidu"
    },
    {
        bs_name: "2345\u6d4f\u89c8\u5668",
        bs_tag: "2345explorer"
    },
    {
        bs_name: "IE\u6d4f\u89c8\u5668",
        bs_tag: "msie"
    },
    {
        bs_name: "IE11\u6d4f\u89c8\u5668",
        bs_tag: "rv:11.0"
    }
];
const userAgent = navigator.userAgent.toLowerCase();
const userAgentData = navigator.userAgentData || {
    brands: []
};
// \u901a\u8fc7\u6d4f\u89c8\u5668\u6807\u8bc6\u83b7\u53d6\u6d4f\u89c8\u5668\u7248\u672c\u53f7
const getBsVersion = (tag)=>{
    const browser = userAgent.split(" ").find((item)=>item.indexOf(tag) > -1).split("/");
    return browser[1] || getBsVersion("chrome");
};
// \u5224\u65ad\u662f\u5426\u662f\u9068\u6e38\u6d4f\u89c8\u5668
const isMaxthon = ()=>{
    return window.maxthon;
};
// \u5224\u65ad\u662f\u5426\u662f360\u6d4f\u89c8\u5668\uff0c\u7b80\u5355\u901a\u8fc7\u6d4f\u89c8\u5668\u4fe1\u606f\u65e0\u6cd5\u5224\u65ad
const is360 = ()=>{
    const result = false;
    for(var key in navigator.plugins){
        if (navigator.plugins[key].filename == "internal-nacl-plugin") return !result;
    }
    return result;
};
const getBsInfo = (list = [])=>{
    if (isMaxthon()) return {
        bs_name: "\u9068\u6e38\u6d4f\u89c8\u5668",
        bs_tag: "maxthon",
        bs_version: getBsVersion("chrome")
    };
    if (userAgentData.brands.some((item)=>item.brand === "Google Chrome")) return {
        bs_name: "chrome\u6d4f\u89c8\u5668",
        bs_tag: "chrome",
        bs_version: getBsVersion("chrome")
    };
    if (userAgent.indexOf("safari") > -1 && userAgent.indexOf("chrome") === -1) return {
        bs_name: "safari\u6d4f\u89c8\u5668",
        bs_tag: "safari",
        bs_version: getBsVersion("safari")
    };
    const isBrowser = browserList.concat(list).find((item)=>userAgent.indexOf(item.bs_tag) > -1);
    if (isBrowser) return {
        bs_name: isBrowser.bs_name,
        bs_tag: isBrowser.bs_tag,
        bs_version: getBsVersion(isBrowser.bs_tag)
    };
    else {
        if (is360()) return {
            bs_name: "360\u6d4f\u89c8\u5668",
            bs_tag: "360",
            bs_version: getBsVersion("chrome")
        };
        return {
            bs_name: "\u672a\u77e5\u6d4f\u89c8\u5668",
            bs_tag: "other",
            bs_version: ""
        };
    }
};
function getOS() {
    var u = navigator.userAgent;
    if (!!u.match(/compatible/i) || u.match(/Windows/i)) return "windows";
    else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) return "macOS";
    else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) return "ios";
    else if (!!u.match(/android/i)) return "android";
    else return "other";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}]},["dLdi1","71ecL"], "71ecL", "parcelRequire8640")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDLEdBQUcsS0FBRyxDQUFBLElBQUcsRUFBRSxFQUFFLENBQUMsR0FBRSxjQUFhO1FBQUMsT0FBTSxDQUFDO0lBQUMsSUFBRztBQUFHLElBQUksSUFBRSxFQUFFLENBQUE7SUFBSTtJQUFhLEVBQUUsYUFBVztJQUFHLEVBQUUsY0FBWTtJQUFHLEVBQUUsZ0JBQWM7SUFBRyxJQUFJLElBQUUsRUFBRSxFQUFDLElBQUUsRUFBRSxFQUFDLEtBQUcsT0FBTyxhQUFXLE1BQUksYUFBVyxPQUFNLElBQUU7SUFBbUUsSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBRSxHQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLEdBQUM7SUFBRSxJQUFJLEdBQUU7SUFBRSxDQUFDLENBQUMsSUFBSSxXQUFXLEdBQUcsR0FBQztJQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsR0FBRyxHQUFDO0lBQUcsU0FBUyxFQUFFLENBQUM7UUFBRSxJQUFJLElBQUUsRUFBRTtRQUFPLElBQUcsSUFBRSxJQUFFLEdBQUUsTUFBTSxJQUFJLE1BQU07UUFBa0QsSUFBSSxJQUFFLEVBQUUsUUFBUTtRQUFLLE1BQUksTUFBSyxDQUFBLElBQUUsQ0FBQTtRQUFHLElBQUksSUFBRSxNQUFJLElBQUUsSUFBRSxJQUFFLElBQUU7UUFBRSxPQUFNO1lBQUM7WUFBRTtTQUFFO0lBQUE7SUFBQyxTQUFTLEdBQUcsQ0FBQztRQUFFLElBQUksSUFBRSxFQUFFLElBQUcsSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUU7UUFBQyxPQUFNLEFBQUMsQ0FBQSxJQUFFLENBQUEsSUFBRyxJQUFFLElBQUU7SUFBQztJQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxPQUFNLEFBQUMsQ0FBQSxJQUFFLENBQUEsSUFBRyxJQUFFLElBQUU7SUFBQztJQUFDLFNBQVMsR0FBRyxDQUFDO1FBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxJQUFHLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFFLEdBQUUsS0FBSSxJQUFFLEdBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLEdBQUU7UUFBRSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBRyxFQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLElBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLElBQUUsR0FBRyxJQUFFLEtBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxJQUFFLEdBQUcsSUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFFLFdBQVcsSUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLElBQUksR0FBQyxLQUFHLEtBQUcsS0FBSSxDQUFDLENBQUMsSUFBSSxHQUFDLEtBQUcsSUFBRSxLQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUMsSUFBRTtRQUFJLE9BQU8sTUFBSSxLQUFJLENBQUEsSUFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLEdBQUcsSUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFFLFdBQVcsSUFBRSxHQUFHLElBQUUsR0FBRSxDQUFDLENBQUMsSUFBSSxHQUFDLElBQUUsR0FBRSxHQUFHLE1BQUksS0FBSSxDQUFBLElBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLElBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLElBQUUsR0FBRyxJQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxJQUFFLEdBQUcsSUFBRSxHQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUMsS0FBRyxJQUFFLEtBQUksQ0FBQyxDQUFDLElBQUksR0FBQyxJQUFFLEdBQUUsR0FBRztJQUFDO0lBQUMsU0FBUyxHQUFHLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFHLEtBQUcsR0FBRyxHQUFDLENBQUMsQ0FBQyxLQUFHLEtBQUcsR0FBRyxHQUFDLENBQUMsQ0FBQyxLQUFHLElBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxJQUFFLEdBQUc7SUFBQTtJQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFJLElBQUksR0FBRSxJQUFFLEVBQUUsRUFBQyxJQUFFLEdBQUUsSUFBRSxHQUFFLEtBQUcsRUFBRSxJQUFFLEFBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFFLEtBQUcsUUFBTyxJQUFJLENBQUEsQ0FBQyxDQUFDLElBQUUsRUFBRSxJQUFFLElBQUUsS0FBSSxJQUFJLENBQUEsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDLEdBQUUsR0FBRyxFQUFFLEtBQUssR0FBRztRQUFJLE9BQU8sRUFBRSxLQUFLO0lBQUc7SUFBQyxTQUFTLEdBQUcsQ0FBQztRQUFFLElBQUksSUFBSSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxFQUFDLElBQUUsT0FBTSxJQUFFLEdBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLEtBQUcsRUFBRSxFQUFFLEtBQUssR0FBRyxHQUFFLEdBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFO1FBQUksT0FBTyxNQUFJLElBQUcsQ0FBQSxJQUFFLENBQUMsQ0FBQyxJQUFFLEVBQUUsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUcsRUFBRSxHQUFDLENBQUMsQ0FBQyxLQUFHLElBQUUsR0FBRyxHQUFDLEtBQUksSUFBRyxNQUFJLEtBQUksQ0FBQSxJQUFFLEFBQUMsQ0FBQSxDQUFDLENBQUMsSUFBRSxFQUFFLElBQUUsQ0FBQSxJQUFHLENBQUMsQ0FBQyxJQUFFLEVBQUUsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUcsR0FBRyxHQUFDLENBQUMsQ0FBQyxLQUFHLElBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxLQUFHLElBQUUsR0FBRyxHQUFDLElBQUcsR0FBRyxFQUFFLEtBQUs7SUFBRztBQUFDO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQTtJQUFJLEVBQUUsT0FBSyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBSSxHQUFFLEdBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsQUFBQyxDQUFBLEtBQUcsQ0FBQSxJQUFHLEdBQUUsSUFBRSxLQUFHLEdBQUUsSUFBRSxJQUFHLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsS0FBRyxHQUFFLElBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRTtRQUFDLElBQUksS0FBRyxHQUFFLElBQUUsSUFBRSxBQUFDLENBQUEsS0FBRyxDQUFDLENBQUEsSUFBRyxHQUFFLE1BQUksQ0FBQyxHQUFFLEtBQUcsR0FBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLE1BQUksQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFDLEtBQUcsR0FBRSxLQUFHO1FBQUcsSUFBSSxJQUFFLElBQUUsQUFBQyxDQUFBLEtBQUcsQ0FBQyxDQUFBLElBQUcsR0FBRSxNQUFJLENBQUMsR0FBRSxLQUFHLEdBQUUsSUFBRSxHQUFFLElBQUUsSUFBRSxNQUFJLENBQUMsQ0FBQyxJQUFFLEVBQUUsRUFBQyxLQUFHLEdBQUUsS0FBRztRQUFHLElBQUcsTUFBSSxHQUFFLElBQUUsSUFBRTthQUFNO1lBQUMsSUFBRyxNQUFJLEdBQUUsT0FBTyxJQUFFLE1BQUksQUFBQyxDQUFBLElBQUUsS0FBRyxDQUFBLElBQUksQ0FBQSxJQUFFLENBQUE7WUFBRyxJQUFFLElBQUUsS0FBSyxJQUFJLEdBQUUsSUFBRyxJQUFFLElBQUU7UUFBQztRQUFDLE9BQU0sQUFBQyxDQUFBLElBQUUsS0FBRyxDQUFBLElBQUcsSUFBRSxLQUFLLElBQUksR0FBRSxJQUFFO0lBQUU7SUFBRSxFQUFFLFFBQU0sU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFJLEdBQUUsR0FBRSxHQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLEFBQUMsQ0FBQSxLQUFHLENBQUEsSUFBRyxHQUFFLElBQUUsS0FBRyxHQUFFLElBQUUsTUFBSSxLQUFHLEtBQUssSUFBSSxHQUFFLE9BQUssS0FBSyxJQUFJLEdBQUUsT0FBSyxHQUFFLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsSUFBRSxJQUFHLEtBQUcsSUFBRSxLQUFHLE1BQUksS0FBRyxJQUFFLElBQUUsSUFBRSxJQUFFO1FBQUUsSUFBSSxJQUFFLEtBQUssSUFBSSxJQUFHLE1BQU0sTUFBSSxNQUFJLElBQUUsSUFBRyxDQUFBLElBQUUsTUFBTSxLQUFHLElBQUUsR0FBRSxJQUFFLENBQUEsSUFBSSxDQUFBLElBQUUsS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFHLEtBQUssTUFBSyxJQUFHLENBQUEsSUFBRSxLQUFLLElBQUksR0FBRSxDQUFDLEVBQUMsSUFBRyxLQUFJLENBQUEsS0FBSSxLQUFHLENBQUEsR0FBRyxJQUFFLEtBQUcsSUFBRSxLQUFHLElBQUUsSUFBRSxLQUFHLElBQUUsS0FBSyxJQUFJLEdBQUUsSUFBRSxJQUFHLElBQUUsS0FBRyxLQUFJLENBQUEsS0FBSSxLQUFHLENBQUEsR0FBRyxJQUFFLEtBQUcsSUFBRyxDQUFBLElBQUUsR0FBRSxJQUFFLENBQUEsSUFBRyxJQUFFLEtBQUcsSUFBRyxDQUFBLElBQUUsQUFBQyxDQUFBLElBQUUsSUFBRSxDQUFBLElBQUcsS0FBSyxJQUFJLEdBQUUsSUFBRyxJQUFFLElBQUUsQ0FBQSxJQUFJLENBQUEsSUFBRSxJQUFFLEtBQUssSUFBSSxHQUFFLElBQUUsS0FBRyxLQUFLLElBQUksR0FBRSxJQUFHLElBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBRyxHQUFFLENBQUMsQ0FBQyxJQUFFLEVBQUUsR0FBQyxJQUFFLEtBQUksS0FBRyxHQUFFLEtBQUcsS0FBSSxLQUFHO1FBQUcsSUFBSSxJQUFFLEtBQUcsSUFBRSxHQUFFLEtBQUcsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDLElBQUUsS0FBSSxLQUFHLEdBQUUsS0FBRyxLQUFJLEtBQUc7UUFBRyxDQUFDLENBQUMsSUFBRSxJQUFFLEVBQUUsSUFBRSxLQUFHO0lBQUc7QUFBQztBQUFHLElBQUksSUFBRSxFQUFFLENBQUE7SUFBSTtJQUFhLElBQUksSUFBRSxLQUFJLElBQUUsS0FBSSxLQUFHLE9BQU8sVUFBUSxjQUFZLE9BQU8sT0FBTyxPQUFLLGFBQVcsT0FBTyxJQUFJLGdDQUE4QjtJQUFLLEVBQUUsU0FBTztJQUFFLEVBQUUsYUFBVztJQUFHLEVBQUUsb0JBQWtCO0lBQUcsSUFBSSxJQUFFO0lBQVcsRUFBRSxhQUFXO0lBQUUsRUFBRSxzQkFBb0I7SUFBSyxDQUFDLEVBQUUsdUJBQXFCLE9BQU8sVUFBUSxPQUFLLE9BQU8sUUFBUSxTQUFPLGNBQVksUUFBUSxNQUFNO0lBQWlKLFNBQVM7UUFBSyxJQUFHO1lBQUMsSUFBSSxJQUFFLElBQUksV0FBVyxJQUFHLElBQUU7Z0JBQUMsS0FBSTtvQkFBVyxPQUFPO2dCQUFFO1lBQUM7WUFBRSxPQUFPLE9BQU8sZUFBZSxHQUFFLFdBQVcsWUFBVyxPQUFPLGVBQWUsR0FBRSxJQUFHLEVBQUUsVUFBUTtRQUFFLEVBQUMsT0FBTSxHQUFFO1lBQUMsT0FBTSxDQUFDO1FBQUM7SUFBQztJQUFDLE9BQU8sZUFBZSxFQUFFLFdBQVUsVUFBUztRQUFDLFlBQVcsQ0FBQztRQUFFLEtBQUk7WUFBVyxJQUFHLEVBQUUsU0FBUyxJQUFJLEdBQUUsT0FBTyxJQUFJLENBQUM7UUFBTTtJQUFDO0lBQUcsT0FBTyxlQUFlLEVBQUUsV0FBVSxVQUFTO1FBQUMsWUFBVyxDQUFDO1FBQUUsS0FBSTtZQUFXLElBQUcsRUFBRSxTQUFTLElBQUksR0FBRSxPQUFPLElBQUksQ0FBQztRQUFVO0lBQUM7SUFBRyxTQUFTLEVBQUUsQ0FBQztRQUFFLElBQUcsSUFBRSxHQUFFLE1BQU0sSUFBSSxXQUFXLGdCQUFjLElBQUU7UUFBa0MsSUFBSSxJQUFFLElBQUksV0FBVztRQUFHLE9BQU8sT0FBTyxlQUFlLEdBQUUsRUFBRSxZQUFXO0lBQUM7SUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBRyxPQUFPLEtBQUcsVUFBUztZQUFDLElBQUcsT0FBTyxLQUFHLFVBQVMsTUFBTSxJQUFJLFVBQVU7WUFBc0UsT0FBTyxFQUFFO1FBQUU7UUFBQyxPQUFPLEdBQUcsR0FBRSxHQUFFO0lBQUU7SUFBQyxFQUFFLFdBQVM7SUFBSyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBRyxPQUFPLEtBQUcsVUFBUyxPQUFPLEdBQUcsR0FBRTtRQUFHLElBQUcsWUFBWSxPQUFPLElBQUcsT0FBTyxHQUFHO1FBQUcsSUFBRyxLQUFHLE1BQUssTUFBTSxJQUFJLFVBQVUsb0hBQWtILE9BQU87UUFBRyxJQUFHLEVBQUUsR0FBRSxnQkFBYyxLQUFHLEVBQUUsRUFBRSxRQUFPLGdCQUFjLE9BQU8sb0JBQWtCLE9BQU0sQ0FBQSxFQUFFLEdBQUUsc0JBQW9CLEtBQUcsRUFBRSxFQUFFLFFBQU8sa0JBQWlCLEdBQUcsT0FBTyxFQUFFLEdBQUUsR0FBRTtRQUFHLElBQUcsT0FBTyxLQUFHLFVBQVMsTUFBTSxJQUFJLFVBQVU7UUFBeUUsSUFBSSxJQUFFLEVBQUUsV0FBUyxFQUFFO1FBQVUsSUFBRyxLQUFHLFFBQU0sTUFBSSxHQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUUsR0FBRTtRQUFHLElBQUksSUFBRSxHQUFHO1FBQUcsSUFBRyxHQUFFLE9BQU87UUFBRSxJQUFHLE9BQU8sU0FBTyxPQUFLLE9BQU8sZUFBYSxRQUFNLE9BQU8sQ0FBQyxDQUFDLE9BQU8sWUFBWSxJQUFFLFlBQVcsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sWUFBWSxDQUFDLFdBQVUsR0FBRTtRQUFHLE1BQU0sSUFBSSxVQUFVLG9IQUFrSCxPQUFPO0lBQUU7SUFBQyxFQUFFLE9BQUssU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxPQUFPLEdBQUcsR0FBRSxHQUFFO0lBQUU7SUFBRSxPQUFPLGVBQWUsRUFBRSxXQUFVLFdBQVc7SUFBVyxPQUFPLGVBQWUsR0FBRTtJQUFZLFNBQVMsR0FBRyxDQUFDO1FBQUUsSUFBRyxPQUFPLEtBQUcsVUFBUyxNQUFNLElBQUksVUFBVTtRQUEwQyxJQUFHLElBQUUsR0FBRSxNQUFNLElBQUksV0FBVyxnQkFBYyxJQUFFO0lBQWlDO0lBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sR0FBRyxJQUFHLEtBQUcsSUFBRSxFQUFFLEtBQUcsTUFBSSxLQUFLLElBQUUsT0FBTyxLQUFHLFdBQVMsRUFBRSxHQUFHLEtBQUssR0FBRSxLQUFHLEVBQUUsR0FBRyxLQUFLLEtBQUcsRUFBRTtJQUFFO0lBQUMsRUFBRSxRQUFNLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxHQUFHLEdBQUUsR0FBRTtJQUFFO0lBQUUsU0FBUyxFQUFFLENBQUM7UUFBRSxPQUFPLEdBQUcsSUFBRyxFQUFFLElBQUUsSUFBRSxJQUFFLEVBQUUsS0FBRztJQUFFO0lBQUMsRUFBRSxjQUFZLFNBQVMsQ0FBQztRQUFFLE9BQU8sRUFBRTtJQUFFO0lBQUUsRUFBRSxrQkFBZ0IsU0FBUyxDQUFDO1FBQUUsT0FBTyxFQUFFO0lBQUU7SUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFHLEFBQUMsQ0FBQSxPQUFPLEtBQUcsWUFBVSxNQUFJLEVBQUMsS0FBSyxDQUFBLElBQUUsTUFBSyxHQUFHLENBQUMsRUFBRSxXQUFXLElBQUcsTUFBTSxJQUFJLFVBQVUsdUJBQXFCO1FBQUcsSUFBSSxJQUFFLEdBQUcsR0FBRSxLQUFHLEdBQUUsSUFBRSxFQUFFLElBQUcsSUFBRSxFQUFFLE1BQU0sR0FBRTtRQUFHLE9BQU8sTUFBSSxLQUFJLENBQUEsSUFBRSxFQUFFLE1BQU0sR0FBRSxFQUFDLEdBQUc7SUFBQztJQUFDLFNBQVMsRUFBRSxDQUFDO1FBQUUsSUFBSSxJQUFFLEVBQUUsU0FBTyxJQUFFLElBQUUsRUFBRSxFQUFFLFVBQVEsR0FBRSxJQUFFLEVBQUU7UUFBRyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDO1FBQUksT0FBTztJQUFDO0lBQUMsU0FBUyxHQUFHLENBQUM7UUFBRSxJQUFHLEVBQUUsR0FBRSxhQUFZO1lBQUMsSUFBSSxJQUFFLElBQUksV0FBVztZQUFHLE9BQU8sRUFBRSxFQUFFLFFBQU8sRUFBRSxZQUFXLEVBQUU7UUFBVztRQUFDLE9BQU8sRUFBRTtJQUFFO0lBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUcsSUFBRSxLQUFHLEVBQUUsYUFBVyxHQUFFLE1BQU0sSUFBSSxXQUFXO1FBQXdDLElBQUcsRUFBRSxhQUFXLElBQUcsQ0FBQSxLQUFHLENBQUEsR0FBRyxNQUFNLElBQUksV0FBVztRQUF3QyxJQUFJO1FBQUUsT0FBTyxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssSUFBRSxJQUFFLElBQUksV0FBVyxLQUFHLE1BQUksS0FBSyxJQUFFLElBQUUsSUFBSSxXQUFXLEdBQUUsS0FBRyxJQUFFLElBQUksV0FBVyxHQUFFLEdBQUUsSUFBRyxPQUFPLGVBQWUsR0FBRSxFQUFFLFlBQVc7SUFBQztJQUFDLFNBQVMsR0FBRyxDQUFDO1FBQUUsSUFBRyxFQUFFLFNBQVMsSUFBRztZQUFDLElBQUksSUFBRSxFQUFFLEVBQUUsVUFBUSxHQUFFLElBQUUsRUFBRTtZQUFHLE9BQU8sRUFBRSxXQUFTLEtBQUcsRUFBRSxLQUFLLEdBQUUsR0FBRSxHQUFFLElBQUc7UUFBQztRQUFDLElBQUcsRUFBRSxXQUFTLEtBQUssR0FBRSxPQUFPLE9BQU8sRUFBRSxVQUFRLFlBQVUsRUFBRSxFQUFFLFVBQVEsRUFBRSxLQUFHLEVBQUU7UUFBRyxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sUUFBUSxFQUFFLE9BQU0sT0FBTyxFQUFFLEVBQUU7SUFBSztJQUFDLFNBQVMsRUFBRSxDQUFDO1FBQUUsSUFBRyxLQUFHLEdBQUUsTUFBTSxJQUFJLFdBQVcsNERBQTBELEVBQUUsU0FBUyxNQUFJO1FBQVUsT0FBTyxJQUFFO0lBQUM7SUFBQyxTQUFTLEdBQUcsQ0FBQztRQUFFLE9BQU0sQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUEsR0FBRyxFQUFFLE1BQU0sQ0FBQztJQUFFO0lBQUMsRUFBRSxXQUFTLFNBQVMsQ0FBQztRQUFFLE9BQU8sS0FBRyxRQUFNLEVBQUUsY0FBWSxDQUFDLEtBQUcsTUFBSSxFQUFFO0lBQVM7SUFBRSxFQUFFLFVBQVEsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUcsRUFBRSxHQUFFLGVBQWMsQ0FBQSxJQUFFLEVBQUUsS0FBSyxHQUFFLEVBQUUsUUFBTyxFQUFFLFdBQVUsR0FBRyxFQUFFLEdBQUUsZUFBYyxDQUFBLElBQUUsRUFBRSxLQUFLLEdBQUUsRUFBRSxRQUFPLEVBQUUsV0FBVSxHQUFHLENBQUMsRUFBRSxTQUFTLE1BQUksQ0FBQyxFQUFFLFNBQVMsSUFBRyxNQUFNLElBQUksVUFBVTtRQUF5RSxJQUFHLE1BQUksR0FBRSxPQUFPO1FBQUUsSUFBSSxJQUFFLEVBQUUsUUFBTyxJQUFFLEVBQUU7UUFBTyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsS0FBSyxJQUFJLEdBQUUsSUFBRyxJQUFFLEdBQUUsRUFBRSxFQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDO1lBQUMsSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUU7WUFBQztRQUFLO1FBQUMsT0FBTyxJQUFFLElBQUUsS0FBRyxJQUFFLElBQUUsSUFBRTtJQUFDO0lBQUUsRUFBRSxhQUFXLFNBQVMsQ0FBQztRQUFFLE9BQU8sT0FBTyxHQUFHO1lBQWUsS0FBSTtZQUFNLEtBQUk7WUFBTyxLQUFJO1lBQVEsS0FBSTtZQUFRLEtBQUk7WUFBUyxLQUFJO1lBQVMsS0FBSTtZQUFTLEtBQUk7WUFBTyxLQUFJO1lBQVEsS0FBSTtZQUFVLEtBQUk7Z0JBQVcsT0FBTSxDQUFDO1lBQUU7Z0JBQVEsT0FBTSxDQUFDO1FBQUM7SUFBQztJQUFFLEVBQUUsU0FBTyxTQUFTLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBRyxDQUFDLE1BQU0sUUFBUSxJQUFHLE1BQU0sSUFBSSxVQUFVO1FBQStDLElBQUcsRUFBRSxXQUFTLEdBQUUsT0FBTyxFQUFFLE1BQU07UUFBRyxJQUFJO1FBQUUsSUFBRyxNQUFJLEtBQUssR0FBRSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxFQUFFLEtBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUFPLElBQUksSUFBRSxFQUFFLFlBQVksSUFBRyxJQUFFO1FBQUUsSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxFQUFFO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFO1lBQUMsSUFBRyxFQUFFLEdBQUUsYUFBWSxJQUFFLEVBQUUsU0FBTyxFQUFFLFNBQVEsQ0FBQSxFQUFFLFNBQVMsTUFBSyxDQUFBLElBQUUsRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLEtBQUssR0FBRSxFQUFDLElBQUcsV0FBVyxVQUFVLElBQUksS0FBSyxHQUFFLEdBQUU7aUJBQVEsSUFBRyxFQUFFLFNBQVMsSUFBRyxFQUFFLEtBQUssR0FBRTtpQkFBUSxNQUFNLElBQUksVUFBVTtZQUErQyxLQUFHLEVBQUU7UUFBTTtRQUFDLE9BQU87SUFBQztJQUFFLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUcsRUFBRSxTQUFTLElBQUcsT0FBTyxFQUFFO1FBQU8sSUFBRyxZQUFZLE9BQU8sTUFBSSxFQUFFLEdBQUUsY0FBYSxPQUFPLEVBQUU7UUFBVyxJQUFHLE9BQU8sS0FBRyxVQUFTLE1BQU0sSUFBSSxVQUFVLDZGQUEyRixPQUFPO1FBQUcsSUFBSSxJQUFFLEVBQUUsUUFBTyxJQUFFLFVBQVUsU0FBTyxLQUFHLFNBQVMsQ0FBQyxFQUFFLEtBQUcsQ0FBQztRQUFFLElBQUcsQ0FBQyxLQUFHLE1BQUksR0FBRSxPQUFPO1FBQUUsSUFBSSxJQUFFLENBQUM7UUFBRSxPQUFPLE9BQU87WUFBRyxLQUFJO1lBQVEsS0FBSTtZQUFTLEtBQUk7Z0JBQVMsT0FBTztZQUFFLEtBQUk7WUFBTyxLQUFJO2dCQUFRLE9BQU8sRUFBRSxHQUFHO1lBQU8sS0FBSTtZQUFPLEtBQUk7WUFBUSxLQUFJO1lBQVUsS0FBSTtnQkFBVyxPQUFPLElBQUU7WUFBRSxLQUFJO2dCQUFNLE9BQU8sTUFBSTtZQUFFLEtBQUk7Z0JBQVMsT0FBTyxHQUFHLEdBQUc7WUFBTztnQkFBUSxJQUFHLEdBQUUsT0FBTyxJQUFFLEtBQUcsRUFBRSxHQUFHO2dCQUFPLElBQUUsQUFBQyxDQUFBLEtBQUcsQ0FBQSxFQUFHLGVBQWMsSUFBRSxDQUFDO1FBQUM7SUFBQztJQUFDLEVBQUUsYUFBVztJQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFJLElBQUUsQ0FBQztRQUFFLElBQUcsQUFBQyxDQUFBLE1BQUksS0FBSyxLQUFHLElBQUUsQ0FBQSxLQUFLLENBQUEsSUFBRSxDQUFBLEdBQUcsSUFBRSxJQUFJLENBQUMsVUFBUyxDQUFBLEFBQUMsQ0FBQSxNQUFJLEtBQUssS0FBRyxJQUFFLElBQUksQ0FBQyxNQUFLLEtBQUssQ0FBQSxJQUFFLElBQUksQ0FBQyxNQUFLLEdBQUcsS0FBRyxDQUFBLEtBQUssQ0FBQSxPQUFLLEdBQUUsT0FBSyxHQUFFLEtBQUcsQ0FBQSxHQUFHLE9BQU07UUFBRyxJQUFJLEtBQUksQ0FBQSxJQUFFLE1BQUssSUFBSyxPQUFPO1lBQUcsS0FBSTtnQkFBTSxPQUFPLEdBQUcsSUFBSSxFQUFDLEdBQUU7WUFBRyxLQUFJO1lBQU8sS0FBSTtnQkFBUSxPQUFPLEdBQUcsSUFBSSxFQUFDLEdBQUU7WUFBRyxLQUFJO2dCQUFRLE9BQU8sR0FBRyxJQUFJLEVBQUMsR0FBRTtZQUFHLEtBQUk7WUFBUyxLQUFJO2dCQUFTLE9BQU8sR0FBRyxJQUFJLEVBQUMsR0FBRTtZQUFHLEtBQUk7Z0JBQVMsT0FBTyxHQUFHLElBQUksRUFBQyxHQUFFO1lBQUcsS0FBSTtZQUFPLEtBQUk7WUFBUSxLQUFJO1lBQVUsS0FBSTtnQkFBVyxPQUFPLEdBQUcsSUFBSSxFQUFDLEdBQUU7WUFBRztnQkFBUSxJQUFHLEdBQUUsTUFBTSxJQUFJLFVBQVUsdUJBQXFCO2dCQUFHLElBQUUsQUFBQyxDQUFBLElBQUUsRUFBQyxFQUFHLGVBQWMsSUFBRSxDQUFDO1FBQUM7SUFBQztJQUFDLEVBQUUsVUFBVSxZQUFVLENBQUM7SUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFO1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUM7SUFBQztJQUFDLEVBQUUsVUFBVSxTQUFPO1FBQVcsSUFBSSxJQUFFLElBQUksQ0FBQztRQUFPLElBQUcsSUFBRSxNQUFJLEdBQUUsTUFBTSxJQUFJLFdBQVc7UUFBNkMsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFDLEdBQUUsSUFBRTtRQUFHLE9BQU8sSUFBSTtJQUFBO0lBQUUsRUFBRSxVQUFVLFNBQU87UUFBVyxJQUFJLElBQUUsSUFBSSxDQUFDO1FBQU8sSUFBRyxJQUFFLE1BQUksR0FBRSxNQUFNLElBQUksV0FBVztRQUE2QyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUMsR0FBRSxJQUFFLElBQUcsRUFBRSxJQUFJLEVBQUMsSUFBRSxHQUFFLElBQUU7UUFBRyxPQUFPLElBQUk7SUFBQTtJQUFFLEVBQUUsVUFBVSxTQUFPO1FBQVcsSUFBSSxJQUFFLElBQUksQ0FBQztRQUFPLElBQUcsSUFBRSxNQUFJLEdBQUUsTUFBTSxJQUFJLFdBQVc7UUFBNkMsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFDLEdBQUUsSUFBRSxJQUFHLEVBQUUsSUFBSSxFQUFDLElBQUUsR0FBRSxJQUFFLElBQUcsRUFBRSxJQUFJLEVBQUMsSUFBRSxHQUFFLElBQUUsSUFBRyxFQUFFLElBQUksRUFBQyxJQUFFLEdBQUUsSUFBRTtRQUFHLE9BQU8sSUFBSTtJQUFBO0lBQUUsRUFBRSxVQUFVLFdBQVM7UUFBVyxJQUFJLElBQUUsSUFBSSxDQUFDO1FBQU8sT0FBTyxNQUFJLElBQUUsS0FBRyxVQUFVLFdBQVMsSUFBRSxHQUFHLElBQUksRUFBQyxHQUFFLEtBQUcsR0FBRyxNQUFNLElBQUksRUFBQztJQUFVO0lBQUUsRUFBRSxVQUFVLGlCQUFlLEVBQUUsVUFBVTtJQUFTLEVBQUUsVUFBVSxTQUFPLFNBQVMsQ0FBQztRQUFFLElBQUcsQ0FBQyxFQUFFLFNBQVMsSUFBRyxNQUFNLElBQUksVUFBVTtRQUE2QixPQUFPLElBQUksS0FBRyxJQUFFLENBQUMsSUFBRSxFQUFFLFFBQVEsSUFBSSxFQUFDLE9BQUs7SUFBQztJQUFFLEVBQUUsVUFBVSxVQUFRO1FBQVcsSUFBSSxJQUFFLElBQUcsSUFBRSxFQUFFO1FBQWtCLE9BQU8sSUFBRSxJQUFJLENBQUMsU0FBUyxPQUFNLEdBQUUsR0FBRyxRQUFRLFdBQVUsT0FBTyxRQUFPLElBQUksQ0FBQyxTQUFPLEtBQUksQ0FBQSxLQUFHLE9BQU0sR0FBRyxhQUFXLElBQUU7SUFBRztJQUFFLE1BQUssQ0FBQSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUMsRUFBRSxVQUFVLE9BQU07SUFBRyxFQUFFLFVBQVUsVUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBRyxFQUFFLEdBQUUsZUFBYyxDQUFBLElBQUUsRUFBRSxLQUFLLEdBQUUsRUFBRSxRQUFPLEVBQUUsV0FBVSxHQUFHLENBQUMsRUFBRSxTQUFTLElBQUcsTUFBTSxJQUFJLFVBQVUsbUZBQWlGLE9BQU87UUFBRyxJQUFHLE1BQUksS0FBSyxLQUFJLENBQUEsSUFBRSxDQUFBLEdBQUcsTUFBSSxLQUFLLEtBQUksQ0FBQSxJQUFFLElBQUUsRUFBRSxTQUFPLENBQUEsR0FBRyxNQUFJLEtBQUssS0FBSSxDQUFBLElBQUUsQ0FBQSxHQUFHLE1BQUksS0FBSyxLQUFJLENBQUEsSUFBRSxJQUFJLENBQUMsTUFBSyxHQUFHLElBQUUsS0FBRyxJQUFFLEVBQUUsVUFBUSxJQUFFLEtBQUcsSUFBRSxJQUFJLENBQUMsUUFBTyxNQUFNLElBQUksV0FBVztRQUFzQixJQUFHLEtBQUcsS0FBRyxLQUFHLEdBQUUsT0FBTztRQUFFLElBQUcsS0FBRyxHQUFFLE9BQU07UUFBRyxJQUFHLEtBQUcsR0FBRSxPQUFPO1FBQUUsSUFBRyxPQUFLLEdBQUUsT0FBSyxHQUFFLE9BQUssR0FBRSxPQUFLLEdBQUUsSUFBSSxLQUFHLEdBQUUsT0FBTztRQUFFLElBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxLQUFLLElBQUksR0FBRSxJQUFHLElBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRSxJQUFHLElBQUUsRUFBRSxNQUFNLEdBQUU7UUFBRyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxFQUFFLEVBQUUsSUFBRyxDQUFDLENBQUMsRUFBRSxLQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUM7WUFBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBRSxDQUFDLENBQUMsRUFBRTtZQUFDO1FBQUs7UUFBQyxPQUFPLElBQUUsSUFBRSxLQUFHLElBQUUsSUFBRSxJQUFFO0lBQUM7SUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFHLEVBQUUsV0FBUyxHQUFFLE9BQU07UUFBRyxJQUFHLE9BQU8sS0FBRyxXQUFVLENBQUEsSUFBRSxHQUFFLElBQUUsQ0FBQSxJQUFHLElBQUUsYUFBVyxJQUFFLGFBQVcsSUFBRSxlQUFjLENBQUEsSUFBRSxXQUFVLEdBQUcsSUFBRSxDQUFDLEdBQUUsRUFBRSxNQUFLLENBQUEsSUFBRSxJQUFFLElBQUUsRUFBRSxTQUFPLENBQUEsR0FBRyxJQUFFLEtBQUksQ0FBQSxJQUFFLEVBQUUsU0FBTyxDQUFBLEdBQUcsS0FBRyxFQUFFLFFBQU87WUFBQyxJQUFHLEdBQUUsT0FBTTtZQUFHLElBQUUsRUFBRSxTQUFPO1FBQUMsT0FBTSxJQUFHLElBQUU7WUFBRSxJQUFHLEdBQUUsSUFBRTtpQkFBTyxPQUFNOztRQUFHLElBQUcsT0FBTyxLQUFHLFlBQVcsQ0FBQSxJQUFFLEVBQUUsS0FBSyxHQUFFLEVBQUMsR0FBRyxFQUFFLFNBQVMsSUFBRyxPQUFPLEVBQUUsV0FBUyxJQUFFLEtBQUcsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO1FBQUcsSUFBRyxPQUFPLEtBQUcsVUFBUyxPQUFPLElBQUUsSUFBRSxLQUFJLE9BQU8sV0FBVyxVQUFVLFdBQVMsYUFBVyxJQUFFLFdBQVcsVUFBVSxRQUFRLEtBQUssR0FBRSxHQUFFLEtBQUcsV0FBVyxVQUFVLFlBQVksS0FBSyxHQUFFLEdBQUUsS0FBRyxHQUFHLEdBQUU7WUFBQztTQUFFLEVBQUMsR0FBRSxHQUFFO1FBQUcsTUFBTSxJQUFJLFVBQVU7SUFBdUM7SUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLEVBQUU7UUFBTyxJQUFHLE1BQUksS0FBSyxLQUFJLENBQUEsSUFBRSxPQUFPLEdBQUcsZUFBYyxNQUFJLFVBQVEsTUFBSSxXQUFTLE1BQUksYUFBVyxNQUFJLFVBQVMsR0FBRztZQUFDLElBQUcsRUFBRSxTQUFPLEtBQUcsRUFBRSxTQUFPLEdBQUUsT0FBTTtZQUFHLElBQUUsR0FBRSxLQUFHLEdBQUUsS0FBRyxHQUFFLEtBQUc7UUFBQztRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLE9BQU8sTUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxhQUFhLElBQUU7UUFBRTtRQUFDLElBQUk7UUFBRSxJQUFHLEdBQUU7WUFBQyxJQUFJLElBQUU7WUFBRyxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxJQUFHLEVBQUUsR0FBRSxPQUFLLEVBQUUsR0FBRSxNQUFJLEtBQUcsSUFBRSxJQUFFLElBQUc7Z0JBQUMsSUFBRyxNQUFJLE1BQUssQ0FBQSxJQUFFLENBQUEsR0FBRyxJQUFFLElBQUUsTUFBSSxHQUFFLE9BQU8sSUFBRTtZQUFDLE9BQU0sTUFBSSxNQUFLLENBQUEsS0FBRyxJQUFFLENBQUEsR0FBRyxJQUFFO1FBQUUsT0FBTSxJQUFJLElBQUUsSUFBRSxLQUFJLENBQUEsSUFBRSxJQUFFLENBQUEsR0FBRyxJQUFFLEdBQUUsS0FBRyxHQUFFLElBQUk7WUFBQyxJQUFJLElBQUUsQ0FBQztZQUFFLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksSUFBRyxFQUFFLEdBQUUsSUFBRSxPQUFLLEVBQUUsR0FBRSxJQUFHO2dCQUFDLElBQUUsQ0FBQztnQkFBRTtZQUFLO1lBQUMsSUFBRyxHQUFFLE9BQU87UUFBQztRQUFDLE9BQU07SUFBRTtJQUFDLEVBQUUsVUFBVSxXQUFTLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFFLEdBQUUsT0FBSztJQUFFO0lBQUUsRUFBRSxVQUFVLFVBQVEsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFDLEdBQUUsR0FBRSxHQUFFLENBQUM7SUFBRTtJQUFFLEVBQUUsVUFBVSxjQUFZLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksRUFBQyxHQUFFLEdBQUUsR0FBRSxDQUFDO0lBQUU7SUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUUsT0FBTyxNQUFJO1FBQUUsSUFBSSxJQUFFLEVBQUUsU0FBTztRQUFFLElBQUcsQ0FBQSxJQUFFLE9BQU8sSUFBRyxJQUFFLEtBQUksQ0FBQSxJQUFFLENBQUEsQ0FBQyxJQUFHLElBQUU7UUFBRSxJQUFJLElBQUUsRUFBRTtRQUFPLElBQUUsSUFBRSxLQUFJLENBQUEsSUFBRSxJQUFFLENBQUE7UUFBRyxJQUFJO1FBQUUsSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsRUFBRTtZQUFDLElBQUksSUFBRSxTQUFTLEVBQUUsT0FBTyxJQUFFLEdBQUUsSUFBRztZQUFJLElBQUcsRUFBRSxJQUFHLE9BQU87WUFBRSxDQUFDLENBQUMsSUFBRSxFQUFFLEdBQUM7UUFBQztRQUFDLE9BQU87SUFBQztJQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRSxFQUFFLFNBQU8sSUFBRyxHQUFFLEdBQUU7SUFBRTtJQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxFQUFFLEdBQUcsSUFBRyxHQUFFLEdBQUU7SUFBRTtJQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxFQUFFLEdBQUcsSUFBRyxHQUFFLEdBQUU7SUFBRTtJQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRSxFQUFFLFNBQU8sSUFBRyxHQUFFLEdBQUU7SUFBRTtJQUFDLEVBQUUsVUFBVSxRQUFNLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUcsTUFBSSxLQUFLLEdBQUUsSUFBRSxRQUFPLElBQUUsSUFBSSxDQUFDLFFBQU8sSUFBRTthQUFPLElBQUcsTUFBSSxLQUFLLEtBQUcsT0FBTyxLQUFHLFVBQVMsSUFBRSxHQUFFLElBQUUsSUFBSSxDQUFDLFFBQU8sSUFBRTthQUFPLElBQUcsU0FBUyxJQUFHLElBQUUsTUFBSSxHQUFFLFNBQVMsS0FBSSxDQUFBLElBQUUsTUFBSSxHQUFFLE1BQUksS0FBSyxLQUFJLENBQUEsSUFBRSxNQUFLLENBQUMsSUFBSSxDQUFBLElBQUUsR0FBRSxJQUFFLEtBQUssQ0FBQTthQUFRLE1BQU0sSUFBSSxNQUFNO1FBQTJFLElBQUksSUFBRSxJQUFJLENBQUMsU0FBTztRQUFFLElBQUcsQUFBQyxDQUFBLE1BQUksS0FBSyxLQUFHLElBQUUsQ0FBQSxLQUFLLENBQUEsSUFBRSxDQUFBLEdBQUcsRUFBRSxTQUFPLEtBQUksQ0FBQSxJQUFFLEtBQUcsSUFBRSxDQUFBLEtBQUksSUFBRSxJQUFJLENBQUMsUUFBTyxNQUFNLElBQUksV0FBVztRQUEwQyxLQUFJLENBQUEsSUFBRSxNQUFLO1FBQUcsSUFBSSxJQUFFLENBQUM7UUFBRSxPQUFPLE9BQU87WUFBRyxLQUFJO2dCQUFNLE9BQU8sR0FBRyxJQUFJLEVBQUMsR0FBRSxHQUFFO1lBQUcsS0FBSTtZQUFPLEtBQUk7Z0JBQVEsT0FBTyxHQUFHLElBQUksRUFBQyxHQUFFLEdBQUU7WUFBRyxLQUFJO1lBQVEsS0FBSTtZQUFTLEtBQUk7Z0JBQVMsT0FBTyxHQUFHLElBQUksRUFBQyxHQUFFLEdBQUU7WUFBRyxLQUFJO2dCQUFTLE9BQU8sR0FBRyxJQUFJLEVBQUMsR0FBRSxHQUFFO1lBQUcsS0FBSTtZQUFPLEtBQUk7WUFBUSxLQUFJO1lBQVUsS0FBSTtnQkFBVyxPQUFPLEdBQUcsSUFBSSxFQUFDLEdBQUUsR0FBRTtZQUFHO2dCQUFRLElBQUcsR0FBRSxNQUFNLElBQUksVUFBVSx1QkFBcUI7Z0JBQUcsSUFBRSxBQUFDLENBQUEsS0FBRyxDQUFBLEVBQUcsZUFBYyxJQUFFLENBQUM7UUFBQztJQUFDO0lBQUUsRUFBRSxVQUFVLFNBQU87UUFBVyxPQUFNO1lBQUMsTUFBSztZQUFTLE1BQUssTUFBTSxVQUFVLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBTSxJQUFJLEVBQUM7UUFBRTtJQUFDO0lBQUUsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sTUFBSSxLQUFHLE1BQUksRUFBRSxTQUFPLEVBQUUsY0FBYyxLQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sR0FBRTtJQUFHO0lBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUUsS0FBSyxJQUFJLEVBQUUsUUFBTztRQUFHLElBQUksSUFBRSxFQUFFLEVBQUMsSUFBRTtRQUFFLE1BQUssSUFBRSxHQUFHO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBRSxNQUFLLElBQUUsSUFBRSxNQUFJLElBQUUsSUFBRSxNQUFJLElBQUUsSUFBRSxNQUFJLElBQUU7WUFBRSxJQUFHLElBQUUsS0FBRyxHQUFFO2dCQUFDLElBQUksR0FBRSxHQUFFLEdBQUU7Z0JBQUUsT0FBTztvQkFBRyxLQUFLO3dCQUFFLElBQUUsT0FBTSxDQUFBLElBQUUsQ0FBQTt3QkFBRztvQkFBTSxLQUFLO3dCQUFFLElBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFDLEFBQUMsQ0FBQSxJQUFFLEdBQUUsTUFBSyxPQUFNLENBQUEsSUFBRSxBQUFDLENBQUEsSUFBRSxFQUFDLEtBQUksSUFBRSxJQUFFLElBQUcsSUFBRSxPQUFNLENBQUEsSUFBRSxDQUFBLENBQUM7d0JBQUc7b0JBQU0sS0FBSzt3QkFBRSxJQUFFLENBQUMsQ0FBQyxJQUFFLEVBQUUsRUFBQyxJQUFFLENBQUMsQ0FBQyxJQUFFLEVBQUUsRUFBQyxBQUFDLENBQUEsSUFBRSxHQUFFLE1BQUssT0FBSyxBQUFDLENBQUEsSUFBRSxHQUFFLE1BQUssT0FBTSxDQUFBLElBQUUsQUFBQyxDQUFBLElBQUUsRUFBQyxLQUFJLEtBQUcsQUFBQyxDQUFBLElBQUUsRUFBQyxLQUFJLElBQUUsSUFBRSxJQUFHLElBQUUsUUFBTyxDQUFBLElBQUUsU0FBTyxJQUFFLEtBQUksS0FBSyxDQUFBLElBQUUsQ0FBQSxDQUFDO3dCQUFHO29CQUFNLEtBQUs7d0JBQUUsSUFBRSxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUMsSUFBRSxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUMsSUFBRSxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUMsQUFBQyxDQUFBLElBQUUsR0FBRSxNQUFLLE9BQUssQUFBQyxDQUFBLElBQUUsR0FBRSxNQUFLLE9BQUssQUFBQyxDQUFBLElBQUUsR0FBRSxNQUFLLE9BQU0sQ0FBQSxJQUFFLEFBQUMsQ0FBQSxJQUFFLEVBQUMsS0FBSSxLQUFHLEFBQUMsQ0FBQSxJQUFFLEVBQUMsS0FBSSxLQUFHLEFBQUMsQ0FBQSxJQUFFLEVBQUMsS0FBSSxJQUFFLElBQUUsSUFBRyxJQUFFLFNBQU8sSUFBRSxXQUFVLENBQUEsSUFBRSxDQUFBLENBQUM7Z0JBQUU7WUFBQztZQUFDLE1BQUksT0FBTSxDQUFBLElBQUUsT0FBTSxJQUFFLENBQUEsSUFBRyxJQUFFLFNBQVEsQ0FBQSxLQUFHLE9BQU0sRUFBRSxLQUFLLE1BQUksS0FBRyxPQUFLLFFBQU8sSUFBRSxRQUFNLElBQUUsSUFBRyxHQUFHLEVBQUUsS0FBSyxJQUFHLEtBQUc7UUFBQztRQUFDLE9BQU8sR0FBRztJQUFFO0lBQUMsSUFBSSxLQUFHO0lBQUssU0FBUyxHQUFHLENBQUM7UUFBRSxJQUFJLElBQUUsRUFBRTtRQUFPLElBQUcsS0FBRyxJQUFHLE9BQU8sT0FBTyxhQUFhLE1BQU0sUUFBTztRQUFHLElBQUksSUFBRSxJQUFHLElBQUU7UUFBRSxNQUFLLElBQUUsR0FBRyxLQUFHLE9BQU8sYUFBYSxNQUFNLFFBQU8sRUFBRSxNQUFNLEdBQUUsS0FBRztRQUFLLE9BQU87SUFBQztJQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFJLElBQUU7UUFBRyxJQUFFLEtBQUssSUFBSSxFQUFFLFFBQU87UUFBRyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxFQUFFLEVBQUUsS0FBRyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsR0FBQztRQUFLLE9BQU87SUFBQztJQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFJLElBQUU7UUFBRyxJQUFFLEtBQUssSUFBSSxFQUFFLFFBQU87UUFBRyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxFQUFFLEVBQUUsS0FBRyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUU7UUFBRSxPQUFPO0lBQUM7SUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBSSxJQUFFLEVBQUU7UUFBUSxDQUFBLENBQUMsS0FBRyxJQUFFLENBQUEsS0FBSyxDQUFBLElBQUUsQ0FBQSxHQUFHLEFBQUMsQ0FBQSxDQUFDLEtBQUcsSUFBRSxLQUFHLElBQUUsQ0FBQSxLQUFLLENBQUEsSUFBRSxDQUFBO1FBQUcsSUFBSSxJQUFFO1FBQUcsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsRUFBRSxFQUFFLEtBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPO0lBQUM7SUFBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBSSxJQUFFLEVBQUUsTUFBTSxHQUFFLElBQUcsSUFBRTtRQUFHLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQU8sR0FBRSxLQUFHLEVBQUUsS0FBRyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsSUFBRSxFQUFFLEdBQUM7UUFBSyxPQUFPO0lBQUM7SUFBQyxFQUFFLFVBQVUsUUFBTSxTQUFTLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBSSxJQUFFLElBQUksQ0FBQztRQUFPLElBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxNQUFJLEtBQUssSUFBRSxJQUFFLENBQUMsQ0FBQyxHQUFFLElBQUUsSUFBRyxDQUFBLEtBQUcsR0FBRSxJQUFFLEtBQUksQ0FBQSxJQUFFLENBQUEsQ0FBQyxJQUFHLElBQUUsS0FBSSxDQUFBLElBQUUsQ0FBQSxHQUFHLElBQUUsSUFBRyxDQUFBLEtBQUcsR0FBRSxJQUFFLEtBQUksQ0FBQSxJQUFFLENBQUEsQ0FBQyxJQUFHLElBQUUsS0FBSSxDQUFBLElBQUUsQ0FBQSxHQUFHLElBQUUsS0FBSSxDQUFBLElBQUUsQ0FBQTtRQUFHLElBQUksSUFBRSxJQUFJLENBQUMsU0FBUyxHQUFFO1FBQUcsT0FBTyxPQUFPLGVBQWUsR0FBRSxFQUFFLFlBQVc7SUFBQztJQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFHLElBQUUsTUFBSSxLQUFHLElBQUUsR0FBRSxNQUFNLElBQUksV0FBVztRQUFzQixJQUFHLElBQUUsSUFBRSxHQUFFLE1BQU0sSUFBSSxXQUFXO0lBQXdDO0lBQUMsRUFBRSxVQUFVLGFBQVcsRUFBRSxVQUFVLGFBQVcsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFFLE1BQUksR0FBRSxJQUFFLE1BQUksR0FBRSxLQUFHLEVBQUUsR0FBRSxHQUFFLElBQUksQ0FBQztRQUFRLElBQUksSUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUUsR0FBRSxJQUFFO1FBQUUsTUFBSyxFQUFFLElBQUUsS0FBSSxDQUFBLEtBQUcsR0FBRSxHQUFJLEtBQUcsSUFBSSxDQUFDLElBQUUsRUFBRSxHQUFDO1FBQUUsT0FBTztJQUFDO0lBQUUsRUFBRSxVQUFVLGFBQVcsRUFBRSxVQUFVLGFBQVcsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFFLE1BQUksR0FBRSxJQUFFLE1BQUksR0FBRSxLQUFHLEVBQUUsR0FBRSxHQUFFLElBQUksQ0FBQztRQUFRLElBQUksSUFBRSxJQUFJLENBQUMsSUFBRSxFQUFFLEVBQUUsRUFBQyxJQUFFO1FBQUUsTUFBSyxJQUFFLEtBQUksQ0FBQSxLQUFHLEdBQUUsR0FBSSxLQUFHLElBQUksQ0FBQyxJQUFFLEVBQUUsRUFBRSxHQUFDO1FBQUUsT0FBTztJQUFDO0lBQUUsRUFBRSxVQUFVLFlBQVUsRUFBRSxVQUFVLFlBQVUsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLENBQUMsU0FBUSxJQUFJLENBQUMsRUFBRTtJQUFBO0lBQUUsRUFBRSxVQUFVLGVBQWEsRUFBRSxVQUFVLGVBQWEsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLENBQUMsU0FBUSxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFFLEVBQUUsSUFBRTtJQUFDO0lBQUUsRUFBRSxVQUFVLGVBQWEsRUFBRSxVQUFVLGVBQWEsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLENBQUMsU0FBUSxJQUFJLENBQUMsRUFBRSxJQUFFLElBQUUsSUFBSSxDQUFDLElBQUUsRUFBRTtJQUFBO0lBQUUsRUFBRSxVQUFVLGVBQWEsRUFBRSxVQUFVLGVBQWEsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLENBQUMsU0FBUSxBQUFDLENBQUEsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBRSxFQUFFLElBQUUsSUFBRSxJQUFJLENBQUMsSUFBRSxFQUFFLElBQUUsRUFBQyxJQUFHLElBQUksQ0FBQyxJQUFFLEVBQUUsR0FBQztJQUFRO0lBQUUsRUFBRSxVQUFVLGVBQWEsRUFBRSxVQUFVLGVBQWEsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLENBQUMsU0FBUSxJQUFJLENBQUMsRUFBRSxHQUFDLFdBQVUsQ0FBQSxJQUFJLENBQUMsSUFBRSxFQUFFLElBQUUsS0FBRyxJQUFJLENBQUMsSUFBRSxFQUFFLElBQUUsSUFBRSxJQUFJLENBQUMsSUFBRSxFQUFFLEFBQUQ7SUFBRTtJQUFFLEVBQUUsVUFBVSxrQkFBZ0IsRUFBRSxTQUFTLENBQUM7UUFBRSxJQUFFLE1BQUksR0FBRSxFQUFFLEdBQUU7UUFBVSxJQUFJLElBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFFLEVBQUU7UUFBRSxDQUFBLE1BQUksS0FBSyxLQUFHLE1BQUksS0FBSyxDQUFBLEtBQUksRUFBRSxHQUFFLElBQUksQ0FBQyxTQUFPO1FBQUcsSUFBSSxJQUFFLElBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFDLE1BQUssSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFDLEtBQUcsS0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUMsS0FBRyxJQUFHLElBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBQyxNQUFLLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBQyxLQUFHLEtBQUcsSUFBRSxLQUFHO1FBQUcsT0FBTyxPQUFPLEtBQUksQ0FBQSxPQUFPLE1BQUksT0FBTyxHQUFFO0lBQUU7SUFBRyxFQUFFLFVBQVUsa0JBQWdCLEVBQUUsU0FBUyxDQUFDO1FBQUUsSUFBRSxNQUFJLEdBQUUsRUFBRSxHQUFFO1FBQVUsSUFBSSxJQUFFLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBRSxJQUFJLENBQUMsSUFBRSxFQUFFO1FBQUUsQ0FBQSxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssQ0FBQSxLQUFJLEVBQUUsR0FBRSxJQUFJLENBQUMsU0FBTztRQUFHLElBQUksSUFBRSxJQUFFLEtBQUcsS0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUMsS0FBRyxLQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBQyxNQUFLLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBQyxJQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBQyxLQUFHLEtBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFDLEtBQUcsS0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUMsTUFBSztRQUFFLE9BQU0sQUFBQyxDQUFBLE9BQU8sTUFBSSxPQUFPLEdBQUUsSUFBRyxPQUFPO0lBQUU7SUFBRyxFQUFFLFVBQVUsWUFBVSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUUsTUFBSSxHQUFFLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxHQUFFLEdBQUUsSUFBSSxDQUFDO1FBQVEsSUFBSSxJQUFFLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBRSxHQUFFLElBQUU7UUFBRSxNQUFLLEVBQUUsSUFBRSxLQUFJLENBQUEsS0FBRyxHQUFFLEdBQUksS0FBRyxJQUFJLENBQUMsSUFBRSxFQUFFLEdBQUM7UUFBRSxPQUFPLEtBQUcsS0FBSSxLQUFHLEtBQUksQ0FBQSxLQUFHLEtBQUssSUFBSSxHQUFFLElBQUUsRUFBQyxHQUFHO0lBQUM7SUFBRSxFQUFFLFVBQVUsWUFBVSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUUsTUFBSSxHQUFFLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxHQUFFLEdBQUUsSUFBSSxDQUFDO1FBQVEsSUFBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsSUFBSSxDQUFDLElBQUUsRUFBRSxFQUFFO1FBQUMsTUFBSyxJQUFFLEtBQUksQ0FBQSxLQUFHLEdBQUUsR0FBSSxLQUFHLElBQUksQ0FBQyxJQUFFLEVBQUUsRUFBRSxHQUFDO1FBQUUsT0FBTyxLQUFHLEtBQUksS0FBRyxLQUFJLENBQUEsS0FBRyxLQUFLLElBQUksR0FBRSxJQUFFLEVBQUMsR0FBRztJQUFDO0lBQUUsRUFBRSxVQUFVLFdBQVMsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLENBQUMsU0FBUSxJQUFJLENBQUMsRUFBRSxHQUFDLE1BQUksQUFBQyxDQUFBLE1BQUksSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFBLElBQUcsS0FBRyxJQUFJLENBQUMsRUFBRTtJQUFBO0lBQUUsRUFBRSxVQUFVLGNBQVksU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxHQUFFLEdBQUUsSUFBSSxDQUFDO1FBQVEsSUFBSSxJQUFFLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUUsRUFBRSxJQUFFO1FBQUUsT0FBTyxJQUFFLFFBQU0sSUFBRSxhQUFXO0lBQUM7SUFBRSxFQUFFLFVBQVUsY0FBWSxTQUFTLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLENBQUM7UUFBUSxJQUFJLElBQUUsSUFBSSxDQUFDLElBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxFQUFFLElBQUU7UUFBRSxPQUFPLElBQUUsUUFBTSxJQUFFLGFBQVc7SUFBQztJQUFFLEVBQUUsVUFBVSxjQUFZLFNBQVMsQ0FBQyxFQUFDLENBQUM7UUFBRSxPQUFPLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxHQUFFLEdBQUUsSUFBSSxDQUFDLFNBQVEsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBRSxFQUFFLElBQUUsSUFBRSxJQUFJLENBQUMsSUFBRSxFQUFFLElBQUUsS0FBRyxJQUFJLENBQUMsSUFBRSxFQUFFLElBQUU7SUFBRTtJQUFFLEVBQUUsVUFBVSxjQUFZLFNBQVMsQ0FBQyxFQUFDLENBQUM7UUFBRSxPQUFPLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxHQUFFLEdBQUUsSUFBSSxDQUFDLFNBQVEsSUFBSSxDQUFDLEVBQUUsSUFBRSxLQUFHLElBQUksQ0FBQyxJQUFFLEVBQUUsSUFBRSxLQUFHLElBQUksQ0FBQyxJQUFFLEVBQUUsSUFBRSxJQUFFLElBQUksQ0FBQyxJQUFFLEVBQUU7SUFBQTtJQUFFLEVBQUUsVUFBVSxpQkFBZSxFQUFFLFNBQVMsQ0FBQztRQUFFLElBQUUsTUFBSSxHQUFFLEVBQUUsR0FBRTtRQUFVLElBQUksSUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUUsRUFBRTtRQUFFLENBQUEsTUFBSSxLQUFLLEtBQUcsTUFBSSxLQUFLLENBQUEsS0FBSSxFQUFFLEdBQUUsSUFBSSxDQUFDLFNBQU87UUFBRyxJQUFJLElBQUUsSUFBSSxDQUFDLElBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFFLEVBQUUsR0FBQyxNQUFLLElBQUksQ0FBQyxJQUFFLEVBQUUsR0FBQyxLQUFHLEtBQUksQ0FBQSxLQUFHLEVBQUM7UUFBRyxPQUFNLEFBQUMsQ0FBQSxPQUFPLE1BQUksT0FBTyxHQUFFLElBQUcsT0FBTyxJQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBQyxNQUFLLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBQyxLQUFHLEtBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFDLEtBQUc7SUFBRztJQUFHLEVBQUUsVUFBVSxpQkFBZSxFQUFFLFNBQVMsQ0FBQztRQUFFLElBQUUsTUFBSSxHQUFFLEVBQUUsR0FBRTtRQUFVLElBQUksSUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUUsRUFBRTtRQUFFLENBQUEsTUFBSSxLQUFLLEtBQUcsTUFBSSxLQUFLLENBQUEsS0FBSSxFQUFFLEdBQUUsSUFBSSxDQUFDLFNBQU87UUFBRyxJQUFJLElBQUUsQUFBQyxDQUFBLEtBQUcsRUFBQyxJQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBQyxLQUFHLEtBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFDLE1BQUssSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUFDLE9BQU0sQUFBQyxDQUFBLE9BQU8sTUFBSSxPQUFPLEdBQUUsSUFBRyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBQyxLQUFHLEtBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFDLEtBQUcsS0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUMsTUFBSztJQUFFO0lBQUcsRUFBRSxVQUFVLGNBQVksU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLENBQUMsU0FBUSxFQUFFLEtBQUssSUFBSSxFQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUc7SUFBRTtJQUFFLEVBQUUsVUFBVSxjQUFZLFNBQVMsQ0FBQyxFQUFDLENBQUM7UUFBRSxPQUFPLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxHQUFFLEdBQUUsSUFBSSxDQUFDLFNBQVEsRUFBRSxLQUFLLElBQUksRUFBQyxHQUFFLENBQUMsR0FBRSxJQUFHO0lBQUU7SUFBRSxFQUFFLFVBQVUsZUFBYSxTQUFTLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxJQUFFLE1BQUksR0FBRSxLQUFHLEVBQUUsR0FBRSxHQUFFLElBQUksQ0FBQyxTQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRztJQUFFO0lBQUUsRUFBRSxVQUFVLGVBQWEsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLEdBQUUsR0FBRSxJQUFJLENBQUMsU0FBUSxFQUFFLEtBQUssSUFBSSxFQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUc7SUFBRTtJQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFHLENBQUMsRUFBRSxTQUFTLElBQUcsTUFBTSxJQUFJLFVBQVU7UUFBK0MsSUFBRyxJQUFFLEtBQUcsSUFBRSxHQUFFLE1BQU0sSUFBSSxXQUFXO1FBQXFDLElBQUcsSUFBRSxJQUFFLEVBQUUsUUFBTyxNQUFNLElBQUksV0FBVztJQUFxQjtJQUFDLEVBQUUsVUFBVSxjQUFZLEVBQUUsVUFBVSxjQUFZLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUcsSUFBRSxDQUFDLEdBQUUsSUFBRSxNQUFJLEdBQUUsSUFBRSxNQUFJLEdBQUUsQ0FBQyxHQUFFO1lBQUMsSUFBSSxJQUFFLEtBQUssSUFBSSxHQUFFLElBQUUsS0FBRztZQUFFLEVBQUUsSUFBSSxFQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUU7UUFBRTtRQUFDLElBQUksSUFBRSxHQUFFLElBQUU7UUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBRSxLQUFJLEVBQUUsSUFBRSxLQUFJLENBQUEsS0FBRyxHQUFFLEdBQUksSUFBSSxDQUFDLElBQUUsRUFBRSxHQUFDLElBQUUsSUFBRTtRQUFJLE9BQU8sSUFBRTtJQUFDO0lBQUUsRUFBRSxVQUFVLGNBQVksRUFBRSxVQUFVLGNBQVksU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBRyxJQUFFLENBQUMsR0FBRSxJQUFFLE1BQUksR0FBRSxJQUFFLE1BQUksR0FBRSxDQUFDLEdBQUU7WUFBQyxJQUFJLElBQUUsS0FBSyxJQUFJLEdBQUUsSUFBRSxLQUFHO1lBQUUsRUFBRSxJQUFJLEVBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRTtRQUFFO1FBQUMsSUFBSSxJQUFFLElBQUUsR0FBRSxJQUFFO1FBQUUsSUFBSSxJQUFJLENBQUMsSUFBRSxFQUFFLEdBQUMsSUFBRSxLQUFJLEVBQUUsS0FBRyxLQUFJLENBQUEsS0FBRyxHQUFFLEdBQUksSUFBSSxDQUFDLElBQUUsRUFBRSxHQUFDLElBQUUsSUFBRTtRQUFJLE9BQU8sSUFBRTtJQUFDO0lBQUUsRUFBRSxVQUFVLGFBQVcsRUFBRSxVQUFVLGFBQVcsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxPQUFPLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxJQUFJLEVBQUMsR0FBRSxHQUFFLEdBQUUsS0FBSSxJQUFHLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBRSxLQUFJLElBQUU7SUFBQztJQUFFLEVBQUUsVUFBVSxnQkFBYyxFQUFFLFVBQVUsZ0JBQWMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxPQUFPLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxJQUFJLEVBQUMsR0FBRSxHQUFFLEdBQUUsT0FBTSxJQUFHLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBRSxLQUFJLElBQUksQ0FBQyxJQUFFLEVBQUUsR0FBQyxNQUFJLEdBQUUsSUFBRTtJQUFDO0lBQUUsRUFBRSxVQUFVLGdCQUFjLEVBQUUsVUFBVSxnQkFBYyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxDQUFDLEdBQUUsSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLElBQUksRUFBQyxHQUFFLEdBQUUsR0FBRSxPQUFNLElBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxNQUFJLEdBQUUsSUFBSSxDQUFDLElBQUUsRUFBRSxHQUFDLElBQUUsS0FBSSxJQUFFO0lBQUM7SUFBRSxFQUFFLFVBQVUsZ0JBQWMsRUFBRSxVQUFVLGdCQUFjLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxJQUFFLENBQUMsR0FBRSxJQUFFLE1BQUksR0FBRSxLQUFHLEVBQUUsSUFBSSxFQUFDLEdBQUUsR0FBRSxHQUFFLFlBQVcsSUFBRyxJQUFJLENBQUMsSUFBRSxFQUFFLEdBQUMsTUFBSSxJQUFHLElBQUksQ0FBQyxJQUFFLEVBQUUsR0FBQyxNQUFJLElBQUcsSUFBSSxDQUFDLElBQUUsRUFBRSxHQUFDLE1BQUksR0FBRSxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUUsS0FBSSxJQUFFO0lBQUM7SUFBRSxFQUFFLFVBQVUsZ0JBQWMsRUFBRSxVQUFVLGdCQUFjLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsT0FBTyxJQUFFLENBQUMsR0FBRSxJQUFFLE1BQUksR0FBRSxLQUFHLEVBQUUsSUFBSSxFQUFDLEdBQUUsR0FBRSxHQUFFLFlBQVcsSUFBRyxJQUFJLENBQUMsRUFBRSxHQUFDLE1BQUksSUFBRyxJQUFJLENBQUMsSUFBRSxFQUFFLEdBQUMsTUFBSSxJQUFHLElBQUksQ0FBQyxJQUFFLEVBQUUsR0FBQyxNQUFJLEdBQUUsSUFBSSxDQUFDLElBQUUsRUFBRSxHQUFDLElBQUUsS0FBSSxJQUFFO0lBQUM7SUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtRQUFHLElBQUksSUFBRSxPQUFPLElBQUUsT0FBTztRQUFhLENBQUMsQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFFLEtBQUcsR0FBRSxDQUFDLENBQUMsSUFBSSxHQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFFLElBQUUsS0FBRyxHQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUM7UUFBRSxJQUFJLElBQUUsT0FBTyxLQUFHLE9BQU8sTUFBSSxPQUFPO1FBQWEsT0FBTyxDQUFDLENBQUMsSUFBSSxHQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFFLElBQUUsS0FBRyxHQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFFLEtBQUcsR0FBRSxDQUFDLENBQUMsSUFBSSxHQUFDLEdBQUU7SUFBQztJQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO1FBQUcsSUFBSSxJQUFFLE9BQU8sSUFBRSxPQUFPO1FBQWEsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDO1FBQUUsSUFBSSxJQUFFLE9BQU8sS0FBRyxPQUFPLE1BQUksT0FBTztRQUFhLE9BQU8sQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxHQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLElBQUU7SUFBQztJQUFDLEVBQUUsVUFBVSxtQkFBaUIsRUFBRSxTQUFTLENBQUMsRUFBQyxJQUFFLENBQUM7UUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFDLEdBQUUsR0FBRSxPQUFPLElBQUcsT0FBTztJQUFzQjtJQUFHLEVBQUUsVUFBVSxtQkFBaUIsRUFBRSxTQUFTLENBQUMsRUFBQyxJQUFFLENBQUM7UUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFDLEdBQUUsR0FBRSxPQUFPLElBQUcsT0FBTztJQUFzQjtJQUFHLEVBQUUsVUFBVSxhQUFXLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUcsSUFBRSxDQUFDLEdBQUUsSUFBRSxNQUFJLEdBQUUsQ0FBQyxHQUFFO1lBQUMsSUFBSSxJQUFFLEtBQUssSUFBSSxHQUFFLElBQUUsSUFBRTtZQUFHLEVBQUUsSUFBSSxFQUFDLEdBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxDQUFDO1FBQUU7UUFBQyxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRTtRQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFFLEtBQUksRUFBRSxJQUFFLEtBQUksQ0FBQSxLQUFHLEdBQUUsR0FBSSxJQUFFLEtBQUcsTUFBSSxLQUFHLElBQUksQ0FBQyxJQUFFLElBQUUsRUFBRSxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUEsR0FBRyxJQUFJLENBQUMsSUFBRSxFQUFFLEdBQUMsQUFBQyxDQUFBLElBQUUsS0FBRyxDQUFBLElBQUcsSUFBRTtRQUFJLE9BQU8sSUFBRTtJQUFDO0lBQUUsRUFBRSxVQUFVLGFBQVcsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBRyxJQUFFLENBQUMsR0FBRSxJQUFFLE1BQUksR0FBRSxDQUFDLEdBQUU7WUFBQyxJQUFJLElBQUUsS0FBSyxJQUFJLEdBQUUsSUFBRSxJQUFFO1lBQUcsRUFBRSxJQUFJLEVBQUMsR0FBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLENBQUM7UUFBRTtRQUFDLElBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUU7UUFBRSxJQUFJLElBQUksQ0FBQyxJQUFFLEVBQUUsR0FBQyxJQUFFLEtBQUksRUFBRSxLQUFHLEtBQUksQ0FBQSxLQUFHLEdBQUUsR0FBSSxJQUFFLEtBQUcsTUFBSSxLQUFHLElBQUksQ0FBQyxJQUFFLElBQUUsRUFBRSxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUEsR0FBRyxJQUFJLENBQUMsSUFBRSxFQUFFLEdBQUMsQUFBQyxDQUFBLElBQUUsS0FBRyxDQUFBLElBQUcsSUFBRTtRQUFJLE9BQU8sSUFBRTtJQUFDO0lBQUUsRUFBRSxVQUFVLFlBQVUsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxPQUFPLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSSxHQUFFLEtBQUcsRUFBRSxJQUFJLEVBQUMsR0FBRSxHQUFFLEdBQUUsS0FBSSxPQUFNLElBQUUsS0FBSSxDQUFBLElBQUUsTUFBSSxJQUFFLENBQUEsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUUsS0FBSSxJQUFFO0lBQUM7SUFBRSxFQUFFLFVBQVUsZUFBYSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxDQUFDLEdBQUUsSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLElBQUksRUFBQyxHQUFFLEdBQUUsR0FBRSxPQUFNLFNBQVEsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFFLEtBQUksSUFBSSxDQUFDLElBQUUsRUFBRSxHQUFDLE1BQUksR0FBRSxJQUFFO0lBQUM7SUFBRSxFQUFFLFVBQVUsZUFBYSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sSUFBRSxDQUFDLEdBQUUsSUFBRSxNQUFJLEdBQUUsS0FBRyxFQUFFLElBQUksRUFBQyxH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LENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLE9BQU8sR0FBRyxJQUFJLEVBQUMsR0FBRSxHQUFFLENBQUMsR0FBRTtJQUFFO0lBQUUsRUFBRSxVQUFVLE9BQUssU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBRyxDQUFDLEVBQUUsU0FBUyxJQUFHLE1BQU0sSUFBSSxVQUFVO1FBQStCLElBQUcsS0FBSSxDQUFBLElBQUUsQ0FBQSxHQUFHLENBQUMsS0FBRyxNQUFJLEtBQUksQ0FBQSxJQUFFLElBQUksQ0FBQyxNQUFLLEdBQUcsS0FBRyxFQUFFLFVBQVMsQ0FBQSxJQUFFLEVBQUUsTUFBSyxHQUFHLEtBQUksQ0FBQSxJQUFFLENBQUEsR0FBRyxJQUFFLEtBQUcsSUFBRSxLQUFJLENBQUEsSUFBRSxDQUFBLEdBQUcsTUFBSSxLQUFHLEVBQUUsV0FBUyxLQUFHLElBQUksQ0FBQyxXQUFTLEdBQUUsT0FBTztRQUFFLElBQUcsSUFBRSxHQUFFLE1BQU0sSUFBSSxXQUFXO1FBQTZCLElBQUcsSUFBRSxLQUFHLEtBQUcsSUFBSSxDQUFDLFFBQU8sTUFBTSxJQUFJLFdBQVc7UUFBc0IsSUFBRyxJQUFFLEdBQUUsTUFBTSxJQUFJLFdBQVc7UUFBMkIsSUFBRSxJQUFJLENBQUMsVUFBUyxDQUFBLElBQUUsSUFBSSxDQUFDLE1BQUssR0FBRyxFQUFFLFNBQU8sSUFBRSxJQUFFLEtBQUksQ0FBQSxJQUFFLEVBQUUsU0FBTyxJQUFFLENBQUE7UUFBRyxJQUFJLElBQUUsSUFBRTtRQUFFLE9BQU8sSUFBSSxLQUFHLEtBQUcsT0FBTyxXQUFXLFVBQVUsY0FBWSxhQUFXLElBQUksQ0FBQyxXQUFXLEdBQUUsR0FBRSxLQUFHLFdBQVcsVUFBVSxJQUFJLEtBQUssR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFFLElBQUcsSUFBRztJQUFDO0lBQUUsRUFBRSxVQUFVLE9BQUssU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBRyxPQUFPLEtBQUcs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RSxFQUFFLGtCQUFrQixDQUFDLEVBQUMsSUFBRTtRQUFFLE9BQU8sT0FBTyxVQUFVLE1BQUksS0FBSyxJQUFJLEtBQUcsS0FBRyxLQUFHLElBQUUsR0FBRyxPQUFPLE1BQUksT0FBTyxLQUFHLFlBQVcsQ0FBQSxJQUFFLE9BQU8sSUFBRyxBQUFDLENBQUEsSUFBRSxPQUFPLE1BQUksT0FBTyxPQUFLLElBQUUsQ0FBRSxDQUFBLE9BQU8sTUFBSSxPQUFPLEdBQUUsQ0FBQyxLQUFLLENBQUEsSUFBRSxHQUFHLEVBQUMsR0FBRyxLQUFHLEdBQUUsR0FBRyxLQUFHLENBQUMsWUFBWSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFDO0lBQUMsR0FBRTtJQUFZLFNBQVMsR0FBRyxDQUFDO1FBQUUsSUFBSSxJQUFFLElBQUcsSUFBRSxFQUFFLFFBQU8sSUFBRSxDQUFDLENBQUMsRUFBRSxLQUFHLE1BQUksSUFBRTtRQUFFLE1BQUssS0FBRyxJQUFFLEdBQUUsS0FBRyxFQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUUsR0FBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQUMsT0FBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEdBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUFBO0lBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLEVBQUUsR0FBRSxXQUFVLEFBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxLQUFHLEtBQUssS0FBRyxDQUFDLENBQUMsSUFBRSxFQUFFLEtBQUcsS0FBSyxDQUFBLEtBQUksRUFBRSxHQUFFLEVBQUUsU0FBUSxDQUFBLElBQUUsQ0FBQTtJQUFHO0lBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUFFLElBQUcsSUFBRSxLQUFHLElBQUUsR0FBRTtZQUFDLElBQUksSUFBRSxPQUFPLEtBQUcsV0FBUyxNQUFJLElBQUc7WUFBRSxNQUFNLElBQUUsSUFBRSxN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O2dCQUFNLEVBQUUsS0FBSyxLQUFHLEtBQUcsS0FBSSxLQUFHLElBQUUsS0FBRyxLQUFJLElBQUUsS0FBRztZQUFJLE9BQU0sSUFBRyxJQUFFLFNBQVE7Z0JBQUMsSUFBRyxBQUFDLENBQUEsS0FBRyxDQUFBLElBQUcsR0FBRTtnQkFBTSxFQUFFLEtBQUssS0FBRyxLQUFHLEtBQUksS0FBRyxLQUFHLEtBQUcsS0FBSSxLQUFHLElBQUUsS0FBRyxLQUFJLElBQUUsS0FBRztZQUFJLE9BQU0sTUFBTSxJQUFJLE1BQU07UUFBcUI7UUFBQyxPQUFPO0lBQUM7SUFBQyxTQUFTLEdBQUcsQ0FBQztRQUFFLElBQUksSUFBRSxFQUFFO1FBQUMsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxLQUFHO1FBQUssT0FBTztJQUFDO0lBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxDQUFDO1FBQUUsSUFBSSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUU7UUFBQyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxVQUFRLENBQUUsQ0FBQSxBQUFDLENBQUEsS0FBRyxDQUFBLElBQUcsQ0FBQSxHQUFHLEVBQUUsRUFBRSxJQUFFLEVBQUUsV0FBVyxJQUFHLElBQUUsS0FBRyxHQUFFLElBQUUsSUFBRSxLQUFJLEVBQUUsS0FBSyxJQUFHLEVBQUUsS0FBSztRQUFHLE9BQU87SUFBQztJQUFDLFNBQVMsR0FBRyxDQUFDO1FBQUUsT0FBTyxFQUFFLFlBQVksR0FBRztJQUFHO0lBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFBRSxJQUFJO1FBQUUsSUFBSSxJQUFFLEdBQUUsSUFBRSxLQUFHLENBQUUsQ0FBQSxJQUFFLEtBQUcsRUFBRSxVQUFRLEtBQUcsRUFBRSxNQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFFLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRTtRQUFDLE9BQU87SUFBQztJQUFDLFNBQVMs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T0FBTztTQUNKLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxjQUFjLEVBQUUsTUFBTSxVQUN2QyxPQUFPO1NBQ0osSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLGFBQ2pCLE9BQU87U0FFUCxPQUFPO0FBRWIiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4yMy4wL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTJiM2ZkMmRlZjc3NTViYTEuanMiLCJjb250ZW50LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvRm9ybURhdGEuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1yZXNvbHZlckAwLjEzLjEvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvYnVmZmVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0Vycm9yLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9udWxsLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9Gb3JtRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9CbG9iLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vY29tbW9uL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NIZWFkZXJzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwZWVkb21ldGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdmFsaWRhdG9yLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZW52L2RhdGEuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS42LjIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjYuMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNi4yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsInV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwPXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIHk9KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgSD1uZXcgU2V0KHApLF89ZT0+SC5oYXMoZSksWD1wLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIEc9XyhcIi0tZHJ5LXJ1blwiKSxkPSgpPT5fKFwiLS12ZXJib3NlXCIpfHx5KCkuVkVSQk9TRT09PVwidHJ1ZVwiLFo9ZCgpO3ZhciB1PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB4PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PnUoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxtPSguLi5lKT0+dShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLEQ9MCxjPSguLi5lKT0+ZCgpJiZ1KGBcXHV7MUY3RTF9ICR7RCsrfWAsLi4uZSk7dmFyIHM9e1wiaXNDb250ZW50U2NyaXB0XCI6dHJ1ZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJzY3JpcHQtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxwcm9qZWN0XFxcXGRlbW9cXFxcSFRNTFxcXFxhbGwtaGlzdG9yeS1leHRlbmRcXFxcY29udGVudC50c1wiLFwiYnVuZGxlSWRcIjpcIjM3MTZjOTY1NjcyY2FjNmJcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9cy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOnMudmVyYm9zZX19O3ZhciBTPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEkoZSl7Uy5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1JO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIGIoKXtyZXR1cm4hcy5ob3N0fHxzLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOnMuaG9zdH1mdW5jdGlvbiBDKCl7cmV0dXJuIHMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgRT1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO2Z1bmN0aW9uIEwoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBPKGU9QygpKXtsZXQgdD1iKCk7cmV0dXJuYCR7cy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gQihlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ4KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gUChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoTygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBpIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHc9aS5jb2RlZnJhbWV8fGkuc3RhY2s7bShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitpLm1lc3NhZ2UrYFxuYCt3K2BcblxuYCtpLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQiksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke3MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PnttKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7cy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgbj1cIl9fcGxhc21vLWxvYWRpbmdfX1wiLFQ9dHlwZW9mIHRydXN0ZWRUeXBlczxcInVcIj90cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KGB0cnVzdGVkLWh0bWwtJHtufWAse2NyZWF0ZUhUTUw6ZT0+ZX0pOnZvaWQgMDtmdW5jdGlvbiBnKCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4pfWZ1bmN0aW9uIGYoKXtyZXR1cm4hZygpfWZ1bmN0aW9uICQoKXtsZXQgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaWQ9bjtsZXQgdD1gXG4gIDxzdHlsZT5cbiAgICAjJHtufSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgICAgYm94LXNoYWRvdzogIzMzMyA0LjdweCA0LjdweDtcbiAgICB9XG5cbiAgICAjJHtufTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIHtcbiAgICAgIDAlIHtcbiAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgZmlsbDogIzMzMztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAjJHtufSAuc3ZnLWVsZW0tMSB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC44cyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke259IC5zdmctZWxlbS0yIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjlzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuICAgIFxuICAgICMke259IC5zdmctZWxlbS0zIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAxcyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke259IC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgPC9zdHlsZT5cbiAgXG4gIDxzdmcgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNjQgMzU0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xMzkuMjIxIDI4Mi4yNDNDMTU0LjI1MiAyODIuMjQzIDE2Ni45MDMgMjk0Ljg0OSAxNjEuMzM4IDMwOC44MTJDMTU5LjQ4OSAzMTMuNDU0IDE1Ny4xNSAzMTcuOTEzIDE1NC4zNDcgMzIyLjEwOUMxNDYuNDY0IDMzMy45MDkgMTM1LjI2IDM0My4xMDcgMTIyLjE1MSAzNDguNTM4QzEwOS4wNDMgMzUzLjk2OSA5NC42MTgyIDM1NS4zOSA4MC43MDIyIDM1Mi42MjFDNjYuNzg2MSAzNDkuODUyIDU0LjAwMzQgMzQzLjAxOCA0My45NzA1IDMzMi45ODNDMzMuOTM3NSAzMjIuOTQ3IDI3LjEwNSAzMTAuMTYyIDI0LjMzNjkgMjk2LjI0MkMyMS41Njg5IDI4Mi4zMjMgMjIuOTg5NSAyNjcuODk1IDI4LjQxOTMgMjU0Ljc4M0MzMy44NDkxIDI0MS42NzEgNDMuMDQ0MSAyMzAuNDY0IDU0Ljg0MTYgMjIyLjU3OUM1OS4wMzUzIDIxOS43NzcgNjMuNDkwOCAyMTcuNDM4IDY4LjEyOTUgMjE1LjU4OEM4Mi4wOTE1IDIxMC4wMjEgOTQuNjk3OCAyMjIuNjcxIDk0LjY5NzggMjM3LjcwM0w5NC42OTc4IDI1NS4wMjdDOTQuNjk3OCAyNzAuMDU4IDEwNi44ODMgMjgyLjI0MyAxMjEuOTE0IDI4Mi4yNDNIMTM5LjIyMVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMVwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk0xOTIuMjYxIDE0Mi4wMjhDMTkyLjI2MSAxMjYuOTk2IDIwNC44NjcgMTE0LjM0NiAyMTguODI5IDExOS45MTNDMjIzLjQ2OCAxMjEuNzYzIDIyNy45MjMgMTI0LjEwMiAyMzIuMTE3IDEyNi45MDRDMjQzLjkxNSAxMzQuNzg5IDI1My4xMSAxNDUuOTk2IDI1OC41MzkgMTU5LjEwOEMyNjMuOTY5IDE3Mi4yMiAyNjUuMzkgMTg2LjY0OCAyNjIuNjIyIDIwMC41NjdDMjU5Ljg1NCAyMTQuNDg3IDI1My4wMjEgMjI3LjI3MiAyNDIuOTg4IDIzNy4zMDhDMjMyLjk1NSAyNDcuMzQzIDIyMC4xNzMgMjU0LjE3NyAyMDYuMjU2IDI1Ni45NDZDMTkyLjM0IDI1OS43MTUgMTc3LjkxNiAyNTguMjk0IDE2NC44MDcgMjUyLjg2M0MxNTEuNjk5IDI0Ny40MzIgMTQwLjQ5NSAyMzguMjM0IDEzMi42MTIgMjI2LjQzNEMxMjkuODA4IDIyMi4yMzggMTI3LjQ3IDIxNy43NzkgMTI1LjYyIDIxMy4xMzdDMTIwLjA1NiAxOTkuMTc0IDEzMi43MDcgMTg2LjU2OCAxNDcuNzM4IDE4Ni41NjhMMTY1LjA0NCAxODYuNTY4QzE4MC4wNzYgMTg2LjU2OCAxOTIuMjYxIDE3NC4zODMgMTkyLjI2MSAxNTkuMzUyTDE5Mi4yNjEgMTQyLjAyOFpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMlwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk05NS42NTIyIDE2NC4xMzVDOTUuNjUyMiAxNzkuMTY3IDgzLjIyNzkgMTkxLjcyNSA2OC44MDEzIDE4Ny41MDVDNTkuNTE0NSAxODQuNzg4IDUwLjY0MzIgMTgwLjY2MyA0Mi41MTA2IDE3NS4yMjdDMjYuNzgwNiAxNjQuNzE0IDE0LjUyMDYgMTQ5Ljc3MiA3LjI4MDg5IDEzMi4yODlDMC4wNDExODMgMTE0LjgwNyAtMS44NTMwNSA5NS41Njk3IDEuODM3NzIgNzcuMDEwNEM1LjUyODQ5IDU4LjQ1MTEgMTQuNjM4NSA0MS40MDMzIDI4LjAxNTcgMjguMDIyOEM0MS4zOTMgMTQuNjQyMyA1OC40MzY2IDUuNTMwMDYgNzYuOTkxNCAxLjgzODM5Qzk1LjU0NjEgLTEuODUzMjkgMTE0Ljc3OSAwLjA0MTQxNjIgMTMyLjI1NyA3LjI4MjlDMTQ5LjczNSAxNC41MjQ0IDE2NC42NzQgMjYuNzg3NCAxNzUuMTg0IDQyLjUyMTJDMTgwLjYyIDUwLjY1NzYgMTg0Ljc0NCA1OS41MzMyIDE4Ny40NiA2OC44MjQ1QzE5MS42NzggODMuMjUxOSAxNzkuMTE5IDk1LjY3NTkgMTY0LjA4OCA5NS42NzU5TDEyMi44NjkgOTUuNjc1OUMxMDcuODM3IDk1LjY3NTkgOTUuNjUyMiAxMDcuODYxIDk1LjY1MjIgMTIyLjg5Mkw5NS42NTIyIDE2NC4xMzVaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTNcIj48L3BhdGg+XG4gIDwvc3ZnPlxuICA8c3BhbiBjbGFzcz1cImhpZGRlblwiPkNvbnRleHQgSW52YWxpZGF0ZWQsIFByZXNzIHRvIFJlbG9hZDwvc3Bhbj5cbiAgYDtyZXR1cm4gZS5pbm5lckhUTUw9VD9ULmNyZWF0ZUhUTUwodCk6dCxlLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsZS5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCIsZS5zdHlsZS5ib3R0b209XCIxNC43cHhcIixlLnN0eWxlLnJpZ2h0PVwiMTQuN3B4XCIsZS5zdHlsZS5mb250RmFtaWx5PVwic2Fucy1zZXJpZlwiLGUuc3R5bGUuZGlzcGxheT1cImZsZXhcIixlLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIsZS5zdHlsZS5hbGlnbkl0ZW1zPVwiY2VudGVyXCIsZS5zdHlsZS5wYWRkaW5nPVwiMTQuN3B4XCIsZS5zdHlsZS5nYXA9XCIxNC43cHhcIixlLnN0eWxlLmJvcmRlclJhZGl1cz1cIjQuN3B4XCIsZS5zdHlsZS56SW5kZXg9XCIyMTQ3NDgzNjQ3XCIsZS5zdHlsZS5vcGFjaXR5PVwiMFwiLGUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwLjQ3cyBlYXNlLWluLW91dFwiLGV9ZnVuY3Rpb24gRihlKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e2RvY3VtZW50LmRvY3VtZW50RWxlbWVudD8oZigpJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKSksdCgpKTpnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PntmKCkmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCl9KX0pfXZhciBrPSgpPT57bGV0IGU7aWYoZigpKXtsZXQgdD0kKCk7ZT1GKHQpfXJldHVybntzaG93OmFzeW5jKHtyZWxvYWRCdXR0b246dD0hMX09e30pPT57YXdhaXQgZTtsZXQgbz1nKCk7by5zdHlsZS5vcGFjaXR5PVwiMVwiLHQmJihvLm9uY2xpY2s9cj0+e3Iuc3RvcFByb3BhZ2F0aW9uKCksZ2xvYmFsVGhpcy5sb2NhdGlvbi5yZWxvYWQoKX0sby5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpLG8uc3R5bGUuY3Vyc29yPVwicG9pbnRlclwiLG8uc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiKX0saGlkZTphc3luYygpPT57YXdhaXQgZTtsZXQgdD1nKCk7dC5zdHlsZS5vcGFjaXR5PVwiMFwifX19O3ZhciBOPWAke0V9JHttb2R1bGUuaWR9X19gLGEsQT0hMSxNPWsoKTthc3luYyBmdW5jdGlvbiBoKCl7YyhcIlNjcmlwdCBSdW50aW1lIC0gcmVsb2FkaW5nXCIpLEE/Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKTpNLnNob3coe3JlbG9hZEJ1dHRvbjohMH0pfWZ1bmN0aW9uIFIoKXthPy5kaXNjb25uZWN0KCksYT1sPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6Tn0pLGEub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57aCgpfSksYS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZT0+e2UuX19wbGFzbW9fY3NfcmVsb2FkX18mJmgoKSxlLl9fcGxhc21vX2NzX2FjdGl2ZV90YWJfXyYmKEE9ITApfSl9ZnVuY3Rpb24gVygpe2lmKGw/LnJ1bnRpbWUpdHJ5e1IoKSxzZXRJbnRlcnZhbChSLDI0ZTMpfWNhdGNoe3JldHVybn19VygpO1AoYXN5bmMgZT0+e2MoXCJTY3JpcHQgcnVudGltZSAtIG9uIHVwZGF0ZWQgYXNzZXRzXCIpLGUuZmlsdGVyKG89Pm8uZW52SGFzaD09PXMuZW52SGFzaCkuc29tZShvPT5MKG1vZHVsZS5idW5kbGUsby5pZCkpJiYoTS5zaG93KCksbD8ucnVudGltZT9hLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19jaGFuZ2VkX186ITB9KTpzZXRUaW1lb3V0KCgpPT57aCgpfSw0NzAwKSl9KTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuaW1wb3J0IHsgZ2V0QnNJbmZvLCBnZXRPUyB9IGZyb20gXCIuL3V0aWxzXCJcclxuXHJcbjsoYXN5bmMgKCkgPT4ge1xyXG4gIGxldCB7IGhyZWY6IHVybCwgaG9zdG5hbWU6IGRvbWFpbiwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXHJcbiAgbGV0IGJyb3dzZXJUeXBlID0gZ2V0QnNJbmZvKCkuYnNfbmFtZVxyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnRpdGxlXHJcbiAgbGV0IG9zID0gZ2V0T1MoKVxyXG4gIGxldCBsYXRpdHVkZSwgbG9uZ2l0dWRlXHJcbiAgbGV0IHJlZ2FpbkJyb3dzZXJEYXRhID0gKCkgPT4ge1xyXG4gICAgOyh7IGhyZWY6IHVybCwgaG9zdG5hbWU6IGRvbWFpbiwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uKVxyXG4gICAgdGl0bGUgPSBkb2N1bWVudC50aXRsZVxyXG4gIH1cclxuICBsZXQgYWRkSGlzdG9yeSA9ICgpID0+IHtcclxuICAgIGxldCBub3RSZWNvcmREb21haW4gPSBbXCJsb2NhbGhvc3RcIiwgXCIxMjcuMC4wLjFcIl1cclxuICAgIGlmIChub3RSZWNvcmREb21haW4uaW5jbHVkZXMoZG9tYWluKSkgcmV0dXJuXHJcbiAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2hpc3RvcnlcIiwge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIGRvbWFpbixcclxuICAgICAgcG9ydCxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGJyb3dzZXJUeXBlLFxyXG4gICAgICBvcyxcclxuICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgIGxvbmdpdHVkZVxyXG4gICAgfSlcclxuICAgIC8vIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgLy8gfSlcclxuICB9XHJcbiAgYWRkSGlzdG9yeSgpXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICByZWdhaW5Ccm93c2VyRGF0YSgpXHJcbiAgICBhZGRIaXN0b3J5KClcclxuICB9KVxyXG59KSgpXHJcblxyXG5leHBvcnQge31cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJy4vbGliL2F4aW9zLmpzJztcblxuLy8gVGhpcyBtb2R1bGUgaXMgaW50ZW5kZWQgdG8gdW53cmFwIEF4aW9zIGRlZmF1bHQgZXhwb3J0IGFzIG5hbWVkLlxuLy8gS2VlcCB0b3AtbGV2ZWwgZXhwb3J0IHNhbWUgd2l0aCBzdGF0aWMgcHJvcGVydGllc1xuLy8gc28gdGhhdCBpdCBjYW4ga2VlcCBzYW1lIHdpdGggZXMgbW9kdWxlIG9yIGNqc1xuY29uc3Qge1xuICBBeGlvcyxcbiAgQXhpb3NFcnJvcixcbiAgQ2FuY2VsZWRFcnJvcixcbiAgaXNDYW5jZWwsXG4gIENhbmNlbFRva2VuLFxuICBWRVJTSU9OLFxuICBhbGwsXG4gIENhbmNlbCxcbiAgaXNBeGlvc0Vycm9yLFxuICBzcHJlYWQsXG4gIHRvRm9ybURhdGEsXG4gIEF4aW9zSGVhZGVycyxcbiAgSHR0cFN0YXR1c0NvZGUsXG4gIGZvcm1Ub0pTT04sXG4gIGdldEFkYXB0ZXIsXG4gIG1lcmdlQ29uZmlnXG59ID0gYXhpb3M7XG5cbmV4cG9ydCB7XG4gIGF4aW9zIGFzIGRlZmF1bHQsXG4gIEF4aW9zLFxuICBBeGlvc0Vycm9yLFxuICBDYW5jZWxlZEVycm9yLFxuICBpc0NhbmNlbCxcbiAgQ2FuY2VsVG9rZW4sXG4gIFZFUlNJT04sXG4gIGFsbCxcbiAgQ2FuY2VsLFxuICBpc0F4aW9zRXJyb3IsXG4gIHNwcmVhZCxcbiAgdG9Gb3JtRGF0YSxcbiAgQXhpb3NIZWFkZXJzLFxuICBIdHRwU3RhdHVzQ29kZSxcbiAgZm9ybVRvSlNPTixcbiAgZ2V0QWRhcHRlcixcbiAgbWVyZ2VDb25maWdcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuaW1wb3J0IEF4aW9zIGZyb20gJy4vY29yZS9BeGlvcy5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9jb3JlL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsVG9rZW4gZnJvbSAnLi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgc3ByZWFkIGZyb20gJy4vaGVscGVycy9zcHJlYWQuanMnO1xuaW1wb3J0IGlzQXhpb3NFcnJvciBmcm9tICcuL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vY29yZS9BeGlvc0hlYWRlcnMuanNcIjtcbmltcG9ydCBhZGFwdGVycyBmcm9tICcuL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzJztcbmltcG9ydCBIdHRwU3RhdHVzQ29kZSBmcm9tICcuL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybnMge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIGNvbnN0IGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCwgbnVsbCwge2FsbE93bktleXM6IHRydWV9KTtcblxuICAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhkZWZhdWx0Q29uZmlnLCBpbnN0YW5jZUNvbmZpZykpO1xuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5jb25zdCBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbGVkRXJyb3IgPSBDYW5jZWxlZEVycm9yO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSBDYW5jZWxUb2tlbjtcbmF4aW9zLmlzQ2FuY2VsID0gaXNDYW5jZWw7XG5heGlvcy5WRVJTSU9OID0gVkVSU0lPTjtcbmF4aW9zLnRvRm9ybURhdGEgPSB0b0Zvcm1EYXRhO1xuXG4vLyBFeHBvc2UgQXhpb3NFcnJvciBjbGFzc1xuYXhpb3MuQXhpb3NFcnJvciA9IEF4aW9zRXJyb3I7XG5cbi8vIGFsaWFzIGZvciBDYW5jZWxlZEVycm9yIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5heGlvcy5DYW5jZWwgPSBheGlvcy5DYW5jZWxlZEVycm9yO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5heGlvcy5zcHJlYWQgPSBzcHJlYWQ7XG5cbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcbmF4aW9zLmlzQXhpb3NFcnJvciA9IGlzQXhpb3NFcnJvcjtcblxuLy8gRXhwb3NlIG1lcmdlQ29uZmlnXG5heGlvcy5tZXJnZUNvbmZpZyA9IG1lcmdlQ29uZmlnO1xuXG5heGlvcy5BeGlvc0hlYWRlcnMgPSBBeGlvc0hlYWRlcnM7XG5cbmF4aW9zLmZvcm1Ub0pTT04gPSB0aGluZyA9PiBmb3JtRGF0YVRvSlNPTih1dGlscy5pc0hUTUxGb3JtKHRoaW5nKSA/IG5ldyBGb3JtRGF0YSh0aGluZykgOiB0aGluZyk7XG5cbmF4aW9zLmdldEFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyO1xuXG5heGlvcy5IdHRwU3RhdHVzQ29kZSA9IEh0dHBTdGF0dXNDb2RlO1xuXG5heGlvcy5kZWZhdWx0ID0gYXhpb3M7XG5cbi8vIHRoaXMgbW9kdWxlIHNob3VsZCBvbmx5IGhhdmUgYSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgYXhpb3NcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG5jb25zdCB7dG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcbmNvbnN0IHtnZXRQcm90b3R5cGVPZn0gPSBPYmplY3Q7XG5cbmNvbnN0IGtpbmRPZiA9IChjYWNoZSA9PiB0aGluZyA9PiB7XG4gICAgY29uc3Qgc3RyID0gdG9TdHJpbmcuY2FsbCh0aGluZyk7XG4gICAgcmV0dXJuIGNhY2hlW3N0cl0gfHwgKGNhY2hlW3N0cl0gPSBzdHIuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkpO1xufSkoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG5cbmNvbnN0IGtpbmRPZlRlc3QgPSAodHlwZSkgPT4ge1xuICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKHRoaW5nKSA9PiBraW5kT2YodGhpbmcpID09PSB0eXBlXG59XG5cbmNvbnN0IHR5cGVPZlRlc3QgPSB0eXBlID0+IHRoaW5nID0+IHR5cGVvZiB0aGluZyA9PT0gdHlwZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IHtpc0FycmF5fSA9IEFycmF5O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVW5kZWZpbmVkID0gdHlwZU9mVGVzdCgndW5kZWZpbmVkJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgaXNGdW5jdGlvbih2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIpICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQXJyYXlCdWZmZXIgPSBraW5kT2ZUZXN0KCdBcnJheUJ1ZmZlcicpO1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAoaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmluZyA9IHR5cGVPZlRlc3QoJ3N0cmluZycpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlT2ZUZXN0KCdmdW5jdGlvbicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzTnVtYmVyID0gdHlwZU9mVGVzdCgnbnVtYmVyJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQm9vbGVhblxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQm9vbGVhbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQm9vbGVhbiA9IHRoaW5nID0+IHRoaW5nID09PSB0cnVlIHx8IHRoaW5nID09PSBmYWxzZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbCkgPT4ge1xuICBpZiAoa2luZE9mKHZhbCkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIChwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsKSAmJiAhKFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWwpICYmICEoU3ltYm9sLml0ZXJhdG9yIGluIHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0RhdGUgPSBraW5kT2ZUZXN0KCdEYXRlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGUgPSBraW5kT2ZUZXN0KCdGaWxlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jsb2IgPSBraW5kT2ZUZXN0KCdCbG9iJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlTGlzdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlTGlzdCA9IGtpbmRPZlRlc3QoJ0ZpbGVMaXN0Jyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJlYW0gPSAodmFsKSA9PiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Zvcm1EYXRhID0gKHRoaW5nKSA9PiB7XG4gIGxldCBraW5kO1xuICByZXR1cm4gdGhpbmcgJiYgKFxuICAgICh0eXBlb2YgRm9ybURhdGEgPT09ICdmdW5jdGlvbicgJiYgdGhpbmcgaW5zdGFuY2VvZiBGb3JtRGF0YSkgfHwgKFxuICAgICAgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIChcbiAgICAgICAgKGtpbmQgPSBraW5kT2YodGhpbmcpKSA9PT0gJ2Zvcm1kYXRhJyB8fFxuICAgICAgICAvLyBkZXRlY3QgZm9ybS1kYXRhIGluc3RhbmNlXG4gICAgICAgIChraW5kID09PSAnb2JqZWN0JyAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRvU3RyaW5nKSAmJiB0aGluZy50b1N0cmluZygpID09PSAnW29iamVjdCBGb3JtRGF0YV0nKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVUkxTZWFyY2hQYXJhbXMgPSBraW5kT2ZUZXN0KCdVUkxTZWFyY2hQYXJhbXMnKTtcblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuY29uc3QgdHJpbSA9IChzdHIpID0+IHN0ci50cmltID9cbiAgc3RyLnRyaW0oKSA6IHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5cyA9IGZhbHNlXVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuLCB7YWxsT3duS2V5cyA9IGZhbHNlfSA9IHt9KSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGk7XG4gIGxldCBsO1xuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yIChpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBjb25zdCBrZXlzID0gYWxsT3duS2V5cyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBrZXk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqLCBrZXkpIHtcbiAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICBsZXQgX2tleTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBfa2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ID09PSBfa2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiBfa2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgX2dsb2JhbCA9ICgoKSA9PiB7XG4gIC8qZXNsaW50IG5vLXVuZGVmOjAqL1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWxUaGlzO1xuICByZXR1cm4gdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKVxufSkoKTtcblxuY29uc3QgaXNDb250ZXh0RGVmaW5lZCA9IChjb250ZXh0KSA9PiAhaXNVbmRlZmluZWQoY29udGV4dCkgJiYgY29udGV4dCAhPT0gX2dsb2JhbDtcblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKlxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICBjb25zdCB7Y2FzZWxlc3N9ID0gaXNDb250ZXh0RGVmaW5lZCh0aGlzKSAmJiB0aGlzIHx8IHt9O1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3QgYXNzaWduVmFsdWUgPSAodmFsLCBrZXkpID0+IHtcbiAgICBjb25zdCB0YXJnZXRLZXkgPSBjYXNlbGVzcyAmJiBmaW5kS2V5KHJlc3VsdCwga2V5KSB8fCBrZXk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W3RhcmdldEtleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZShyZXN1bHRbdGFyZ2V0S2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgYXJndW1lbnRzW2ldICYmIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXNdXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmNvbnN0IGV4dGVuZCA9IChhLCBiLCB0aGlzQXJnLCB7YWxsT3duS2V5c309IHt9KSA9PiB7XG4gIGZvckVhY2goYiwgKHZhbCwga2V5KSA9PiB7XG4gICAgaWYgKHRoaXNBcmcgJiYgaXNGdW5jdGlvbih2YWwpKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0sIHthbGxPd25LZXlzfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5jb25zdCBzdHJpcEJPTSA9IChjb250ZW50KSA9PiB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHNdXG4gKiBAcGFyYW0ge29iamVjdH0gW2Rlc2NyaXB0b3JzXVxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBpbmhlcml0cyA9IChjb25zdHJ1Y3Rvciwgc3VwZXJDb25zdHJ1Y3RvciwgcHJvcHMsIGRlc2NyaXB0b3JzKSA9PiB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGRlc2NyaXB0b3JzKTtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgJ3N1cGVyJywge1xuICAgIHZhbHVlOiBzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICB9KTtcbiAgcHJvcHMgJiYgT2JqZWN0LmFzc2lnbihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIG9iamVjdCB3aXRoIGRlZXAgcHJvdG90eXBlIGNoYWluIHRvIGEgZmxhdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VPYmogc291cmNlIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IFtkZXN0T2JqXVxuICogQHBhcmFtIHtGdW5jdGlvbnxCb29sZWFufSBbZmlsdGVyXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BGaWx0ZXJdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3QgdG9GbGF0T2JqZWN0ID0gKHNvdXJjZU9iaiwgZGVzdE9iaiwgZmlsdGVyLCBwcm9wRmlsdGVyKSA9PiB7XG4gIGxldCBwcm9wcztcbiAgbGV0IGk7XG4gIGxldCBwcm9wO1xuICBjb25zdCBtZXJnZWQgPSB7fTtcblxuICBkZXN0T2JqID0gZGVzdE9iaiB8fCB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gIGlmIChzb3VyY2VPYmogPT0gbnVsbCkgcmV0dXJuIGRlc3RPYmo7XG5cbiAgZG8ge1xuICAgIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlT2JqKTtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICBwcm9wID0gcHJvcHNbaV07XG4gICAgICBpZiAoKCFwcm9wRmlsdGVyIHx8IHByb3BGaWx0ZXIocHJvcCwgc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgIW1lcmdlZFtwcm9wXSkge1xuICAgICAgICBkZXN0T2JqW3Byb3BdID0gc291cmNlT2JqW3Byb3BdO1xuICAgICAgICBtZXJnZWRbcHJvcF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VPYmogPSBmaWx0ZXIgIT09IGZhbHNlICYmIGdldFByb3RvdHlwZU9mKHNvdXJjZU9iaik7XG4gIH0gd2hpbGUgKHNvdXJjZU9iaiAmJiAoIWZpbHRlciB8fCBmaWx0ZXIoc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgc291cmNlT2JqICE9PSBPYmplY3QucHJvdG90eXBlKTtcblxuICByZXR1cm4gZGVzdE9iajtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBzdHJpbmcgZW5kcyB3aXRoIHRoZSBjaGFyYWN0ZXJzIG9mIGEgc3BlY2lmaWVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb249IDBdXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGVuZHNXaXRoID0gKHN0ciwgc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikgPT4ge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPiBzdHIubGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSBzdHIubGVuZ3RoO1xuICB9XG4gIHBvc2l0aW9uIC09IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHN0ci5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xuICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBuZXcgYXJyYXkgZnJvbSBhcnJheSBsaWtlIG9iamVjdCBvciBudWxsIGlmIGZhaWxlZFxuICpcbiAqIEBwYXJhbSB7Kn0gW3RoaW5nXVxuICpcbiAqIEByZXR1cm5zIHs/QXJyYXl9XG4gKi9cbmNvbnN0IHRvQXJyYXkgPSAodGhpbmcpID0+IHtcbiAgaWYgKCF0aGluZykgcmV0dXJuIG51bGw7XG4gIGlmIChpc0FycmF5KHRoaW5nKSkgcmV0dXJuIHRoaW5nO1xuICBsZXQgaSA9IHRoaW5nLmxlbmd0aDtcbiAgaWYgKCFpc051bWJlcihpKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBhcnJbaV0gPSB0aGluZ1tpXTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG4vKipcbiAqIENoZWNraW5nIGlmIHRoZSBVaW50OEFycmF5IGV4aXN0cyBhbmQgaWYgaXQgZG9lcywgaXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIHRoZVxuICogdGhpbmcgcGFzc2VkIGluIGlzIGFuIGluc3RhbmNlIG9mIFVpbnQ4QXJyYXlcbiAqXG4gKiBAcGFyYW0ge1R5cGVkQXJyYXl9XG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuY29uc3QgaXNUeXBlZEFycmF5ID0gKFR5cGVkQXJyYXkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gdGhpbmcgPT4ge1xuICAgIHJldHVybiBUeXBlZEFycmF5ICYmIHRoaW5nIGluc3RhbmNlb2YgVHlwZWRBcnJheTtcbiAgfTtcbn0pKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBnZXRQcm90b3R5cGVPZihVaW50OEFycmF5KSk7XG5cbi8qKlxuICogRm9yIGVhY2ggZW50cnkgaW4gdGhlIG9iamVjdCwgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUga2V5IGFuZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBlbnRyeS5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgZm9yRWFjaEVudHJ5ID0gKG9iaiwgZm4pID0+IHtcbiAgY29uc3QgZ2VuZXJhdG9yID0gb2JqICYmIG9ialtTeW1ib2wuaXRlcmF0b3JdO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwob2JqKTtcblxuICBsZXQgcmVzdWx0O1xuXG4gIHdoaWxlICgocmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpKSAmJiAhcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBwYWlyID0gcmVzdWx0LnZhbHVlO1xuICAgIGZuLmNhbGwob2JqLCBwYWlyWzBdLCBwYWlyWzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIGFuZCBhIHN0cmluZywgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBtYXRjaGVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZ0V4cCAtIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXk8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG1hdGNoQWxsID0gKHJlZ0V4cCwgc3RyKSA9PiB7XG4gIGxldCBtYXRjaGVzO1xuICBjb25zdCBhcnIgPSBbXTtcblxuICB3aGlsZSAoKG1hdGNoZXMgPSByZWdFeHAuZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIGFyci5wdXNoKG1hdGNoZXMpO1xuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuLyogQ2hlY2tpbmcgaWYgdGhlIGtpbmRPZlRlc3QgZnVuY3Rpb24gcmV0dXJucyB0cnVlIHdoZW4gcGFzc2VkIGFuIEhUTUxGb3JtRWxlbWVudC4gKi9cbmNvbnN0IGlzSFRNTEZvcm0gPSBraW5kT2ZUZXN0KCdIVE1MRm9ybUVsZW1lbnQnKTtcblxuY29uc3QgdG9DYW1lbENhc2UgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWy1fXFxzXShbYS16XFxkXSkoXFx3KikvZyxcbiAgICBmdW5jdGlvbiByZXBsYWNlcihtLCBwMSwgcDIpIHtcbiAgICAgIHJldHVybiBwMS50b1VwcGVyQ2FzZSgpICsgcDI7XG4gICAgfVxuICApO1xufTtcblxuLyogQ3JlYXRpbmcgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgaWYgYW4gb2JqZWN0IGhhcyBhIHByb3BlcnR5LiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSAoKHtoYXNPd25Qcm9wZXJ0eX0pID0+IChvYmosIHByb3ApID0+IGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkoT2JqZWN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1JlZ0V4cCA9IGtpbmRPZlRlc3QoJ1JlZ0V4cCcpO1xuXG5jb25zdCByZWR1Y2VEZXNjcmlwdG9ycyA9IChvYmosIHJlZHVjZXIpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopO1xuICBjb25zdCByZWR1Y2VkRGVzY3JpcHRvcnMgPSB7fTtcblxuICBmb3JFYWNoKGRlc2NyaXB0b3JzLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIGxldCByZXQ7XG4gICAgaWYgKChyZXQgPSByZWR1Y2VyKGRlc2NyaXB0b3IsIG5hbWUsIG9iaikpICE9PSBmYWxzZSkge1xuICAgICAgcmVkdWNlZERlc2NyaXB0b3JzW25hbWVdID0gcmV0IHx8IGRlc2NyaXB0b3I7XG4gICAgfVxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHJlZHVjZWREZXNjcmlwdG9ycyk7XG59XG5cbi8qKlxuICogTWFrZXMgYWxsIG1ldGhvZHMgcmVhZC1vbmx5XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuY29uc3QgZnJlZXplTWV0aG9kcyA9IChvYmopID0+IHtcbiAgcmVkdWNlRGVzY3JpcHRvcnMob2JqLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIC8vIHNraXAgcmVzdHJpY3RlZCBwcm9wcyBpbiBzdHJpY3QgbW9kZVxuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikgJiYgWydhcmd1bWVudHMnLCAnY2FsbGVyJywgJ2NhbGxlZSddLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBvYmpbbmFtZV07XG5cbiAgICBpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm47XG5cbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBmYWxzZTtcblxuICAgIGlmICgnd3JpdGFibGUnIGluIGRlc2NyaXB0b3IpIHtcbiAgICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICBkZXNjcmlwdG9yLnNldCA9ICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0NhbiBub3QgcmV3cml0ZSByZWFkLW9ubHkgbWV0aG9kIFxcJycgKyBuYW1lICsgJ1xcJycpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCB0b09iamVjdFNldCA9IChhcnJheU9yU3RyaW5nLCBkZWxpbWl0ZXIpID0+IHtcbiAgY29uc3Qgb2JqID0ge307XG5cbiAgY29uc3QgZGVmaW5lID0gKGFycikgPT4ge1xuICAgIGFyci5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIG9ialt2YWx1ZV0gPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgaXNBcnJheShhcnJheU9yU3RyaW5nKSA/IGRlZmluZShhcnJheU9yU3RyaW5nKSA6IGRlZmluZShTdHJpbmcoYXJyYXlPclN0cmluZykuc3BsaXQoZGVsaW1pdGVyKSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHRvRmluaXRlTnVtYmVyID0gKHZhbHVlLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgdmFsdWUgPSArdmFsdWU7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG5cbmNvbnN0IEFMUEhBID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J1xuXG5jb25zdCBESUdJVCA9ICcwMTIzNDU2Nzg5JztcblxuY29uc3QgQUxQSEFCRVQgPSB7XG4gIERJR0lULFxuICBBTFBIQSxcbiAgQUxQSEFfRElHSVQ6IEFMUEhBICsgQUxQSEEudG9VcHBlckNhc2UoKSArIERJR0lUXG59XG5cbmNvbnN0IGdlbmVyYXRlU3RyaW5nID0gKHNpemUgPSAxNiwgYWxwaGFiZXQgPSBBTFBIQUJFVC5BTFBIQV9ESUdJVCkgPT4ge1xuICBsZXQgc3RyID0gJyc7XG4gIGNvbnN0IHtsZW5ndGh9ID0gYWxwaGFiZXQ7XG4gIHdoaWxlIChzaXplLS0pIHtcbiAgICBzdHIgKz0gYWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIGxlbmd0aHwwXVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBJZiB0aGUgdGhpbmcgaXMgYSBGb3JtRGF0YSBvYmplY3QsIHJldHVybiB0cnVlLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bn0gdGhpbmcgLSBUaGUgdGhpbmcgdG8gY2hlY2suXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzU3BlY0NvbXBsaWFudEZvcm0odGhpbmcpIHtcbiAgcmV0dXJuICEhKHRoaW5nICYmIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiB0aGluZ1tTeW1ib2wudG9TdHJpbmdUYWddID09PSAnRm9ybURhdGEnICYmIHRoaW5nW1N5bWJvbC5pdGVyYXRvcl0pO1xufVxuXG5jb25zdCB0b0pTT05PYmplY3QgPSAob2JqKSA9PiB7XG4gIGNvbnN0IHN0YWNrID0gbmV3IEFycmF5KDEwKTtcblxuICBjb25zdCB2aXNpdCA9IChzb3VyY2UsIGkpID0+IHtcblxuICAgIGlmIChpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICBpZiAoc3RhY2suaW5kZXhPZihzb3VyY2UpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighKCd0b0pTT04nIGluIHNvdXJjZSkpIHtcbiAgICAgICAgc3RhY2tbaV0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGlzQXJyYXkoc291cmNlKSA/IFtdIDoge307XG5cbiAgICAgICAgZm9yRWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodmFsdWUsIGkgKyAxKTtcbiAgICAgICAgICAhaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSAmJiAodGFyZ2V0W2tleV0gPSByZWR1Y2VkVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGFja1tpXSA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICByZXR1cm4gdmlzaXQob2JqLCAwKTtcbn1cblxuY29uc3QgaXNBc3luY0ZuID0ga2luZE9mVGVzdCgnQXN5bmNGdW5jdGlvbicpO1xuXG5jb25zdCBpc1RoZW5hYmxlID0gKHRoaW5nKSA9PlxuICB0aGluZyAmJiAoaXNPYmplY3QodGhpbmcpIHx8IGlzRnVuY3Rpb24odGhpbmcpKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRoZW4pICYmIGlzRnVuY3Rpb24odGhpbmcuY2F0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmcsXG4gIGlzTnVtYmVyLFxuICBpc0Jvb2xlYW4sXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlLFxuICBpc0ZpbGUsXG4gIGlzQmxvYixcbiAgaXNSZWdFeHAsXG4gIGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNUeXBlZEFycmF5LFxuICBpc0ZpbGVMaXN0LFxuICBmb3JFYWNoLFxuICBtZXJnZSxcbiAgZXh0ZW5kLFxuICB0cmltLFxuICBzdHJpcEJPTSxcbiAgaW5oZXJpdHMsXG4gIHRvRmxhdE9iamVjdCxcbiAga2luZE9mLFxuICBraW5kT2ZUZXN0LFxuICBlbmRzV2l0aCxcbiAgdG9BcnJheSxcbiAgZm9yRWFjaEVudHJ5LFxuICBtYXRjaEFsbCxcbiAgaXNIVE1MRm9ybSxcbiAgaGFzT3duUHJvcGVydHksXG4gIGhhc093blByb3A6IGhhc093blByb3BlcnR5LCAvLyBhbiBhbGlhcyB0byBhdm9pZCBFU0xpbnQgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIGRldGVjdGlvblxuICByZWR1Y2VEZXNjcmlwdG9ycyxcbiAgZnJlZXplTWV0aG9kcyxcbiAgdG9PYmplY3RTZXQsXG4gIHRvQ2FtZWxDYXNlLFxuICBub29wLFxuICB0b0Zpbml0ZU51bWJlcixcbiAgZmluZEtleSxcbiAgZ2xvYmFsOiBfZ2xvYmFsLFxuICBpc0NvbnRleHREZWZpbmVkLFxuICBBTFBIQUJFVCxcbiAgZ2VuZXJhdGVTdHJpbmcsXG4gIGlzU3BlY0NvbXBsaWFudEZvcm0sXG4gIHRvSlNPTk9iamVjdCxcbiAgaXNBc3luY0ZuLFxuICBpc1RoZW5hYmxlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICB9O1xufVxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSAnLi4vaGVscGVycy9idWlsZFVSTC5qcyc7XG5pbXBvcnQgSW50ZXJjZXB0b3JNYW5hZ2VyIGZyb20gJy4vSW50ZXJjZXB0b3JNYW5hZ2VyLmpzJztcbmltcG9ydCBkaXNwYXRjaFJlcXVlc3QgZnJvbSAnLi9kaXNwYXRjaFJlcXVlc3QuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vbWVyZ2VDb25maWcuanMnO1xuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSAnLi9idWlsZEZ1bGxQYXRoLmpzJztcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAnLi4vaGVscGVycy92YWxpZGF0b3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuL0F4aW9zSGVhZGVycy5qcyc7XG5cbmNvbnN0IHZhbGlkYXRvcnMgPSB2YWxpZGF0b3IudmFsaWRhdG9ycztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuY2xhc3MgQXhpb3Mge1xuICBjb25zdHJ1Y3RvcihpbnN0YW5jZUNvbmZpZykge1xuICAgIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGNvbmZpZ09yVXJsIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAgICogQHBhcmFtIHs/T2JqZWN0fSBjb25maWdcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICAgKi9cbiAgcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICAgIGlmICh0eXBlb2YgY29uZmlnT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgICBjb25maWcudXJsID0gY29uZmlnT3JVcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZ09yVXJsIHx8IHt9O1xuICAgIH1cblxuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgICBjb25zdCB7dHJhbnNpdGlvbmFsLCBwYXJhbXNTZXJpYWxpemVyLCBoZWFkZXJzfSA9IGNvbmZpZztcblxuICAgIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICAgIHNpbGVudEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICBmb3JjZWRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKVxuICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXNTZXJpYWxpemVyICE9IG51bGwpIHtcbiAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcmFtc1NlcmlhbGl6ZXIpKSB7XG4gICAgICAgIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyID0ge1xuICAgICAgICAgIHNlcmlhbGl6ZTogcGFyYW1zU2VyaWFsaXplclxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhwYXJhbXNTZXJpYWxpemVyLCB7XG4gICAgICAgICAgZW5jb2RlOiB2YWxpZGF0b3JzLmZ1bmN0aW9uLFxuICAgICAgICAgIHNlcmlhbGl6ZTogdmFsaWRhdG9ycy5mdW5jdGlvblxuICAgICAgICB9LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICAgIGNvbmZpZy5tZXRob2QgPSAoY29uZmlnLm1ldGhvZCB8fCB0aGlzLmRlZmF1bHRzLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICAgIGxldCBjb250ZXh0SGVhZGVycyA9IGhlYWRlcnMgJiYgdXRpbHMubWVyZ2UoXG4gICAgICBoZWFkZXJzLmNvbW1vbixcbiAgICAgIGhlYWRlcnNbY29uZmlnLm1ldGhvZF1cbiAgICApO1xuXG4gICAgaGVhZGVycyAmJiB1dGlscy5mb3JFYWNoKFxuICAgICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgICAobWV0aG9kKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBoZWFkZXJzW21ldGhvZF07XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmNvbmNhdChjb250ZXh0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICBsZXQgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIGlmICh0eXBlb2YgaW50ZXJjZXB0b3IucnVuV2hlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnRlcmNlcHRvci5ydW5XaGVuKGNvbmZpZykgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzICYmIGludGVyY2VwdG9yLnN5bmNocm9ub3VzO1xuXG4gICAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb21pc2U7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBsZW47XG5cbiAgICBpZiAoIXN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycykge1xuICAgICAgY29uc3QgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LmJpbmQodGhpcyksIHVuZGVmaW5lZF07XG4gICAgICBjaGFpbi51bnNoaWZ0LmFwcGx5KGNoYWluLCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBjaGFpbi5wdXNoLmFwcGx5KGNoYWluLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgbGVuID0gY2hhaW4ubGVuZ3RoO1xuXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW5baSsrXSwgY2hhaW5baSsrXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGxlbiA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIGxldCBuZXdDb25maWcgPSBjb25maWc7XG5cbiAgICBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBjb25zdCBvbkZ1bGZpbGxlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICBjb25zdCBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBvblJlamVjdGVkLmNhbGwodGhpcywgZXJyb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcHJvbWlzZSA9IGRpc3BhdGNoUmVxdWVzdC5jYWxsKHRoaXMsIG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgaSA9IDA7XG4gICAgbGVuID0gcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBnZXRVcmkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgICBjb25zdCBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJldHVybiBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpO1xuICB9XG59XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kLFxuICAgICAgdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRUUE1ldGhvZChpc0Zvcm0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaHR0cE1ldGhvZCh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiBpc0Zvcm0gPyB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9IDoge30sXG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YVxuICAgICAgfSkpO1xuICAgIH07XG4gIH1cblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCgpO1xuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2QgKyAnRm9ybSddID0gZ2VuZXJhdGVIVFRQTWV0aG9kKHRydWUpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuXG4vKipcbiAqIEl0IHJlcGxhY2VzIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGNoYXJhY3RlcnMgYDpgLCBgJGAsIGAsYCwgYCtgLCBgW2AsIGFuZCBgXWAgd2l0aCB0aGVpclxuICogVVJJIGVuY29kZWQgY291bnRlcnBhcnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbCBUaGUgdmFsdWUgdG8gYmUgZW5jb2RlZC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEBwYXJhbSB7P29iamVjdH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBvcHRpb25zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgXG4gIGNvbnN0IF9lbmNvZGUgPSBvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RlIHx8IGVuY29kZTtcblxuICBjb25zdCBzZXJpYWxpemVGbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemU7XG5cbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHNlcmlhbGl6ZUZuKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHNlcmlhbGl6ZUZuKHBhcmFtcywgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykgP1xuICAgICAgcGFyYW1zLnRvU3RyaW5nKCkgOlxuICAgICAgbmV3IEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykudG9TdHJpbmcoX2VuY29kZSk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIGNvbnN0IGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcblxuLyoqXG4gKiBJdCBlbmNvZGVzIGEgc3RyaW5nIGJ5IHJlcGxhY2luZyBhbGwgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgaW4gdGhlIHVucmVzZXJ2ZWQgc2V0IHdpdGhcbiAqIHRoZWlyIHBlcmNlbnQtZW5jb2RlZCBlcXVpdmFsZW50c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGVuY29kZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgY29uc3QgY2hhck1hcCA9IHtcbiAgICAnISc6ICclMjEnLFxuICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAnKCc6ICclMjgnLFxuICAgICcpJzogJyUyOScsXG4gICAgJ34nOiAnJTdFJyxcbiAgICAnJTIwJzogJysnLFxuICAgICclMDAnOiAnXFx4MDAnXG4gIH07XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKX5dfCUyMHwlMDAvZywgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gpIHtcbiAgICByZXR1cm4gY2hhck1hcFttYXRjaF07XG4gIH0pO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGFyYW1zIG9iamVjdCBhbmQgY29udmVydHMgaXQgdG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIGJlIGNvbnZlcnRlZCB0byBhIEZvcm1EYXRhIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIG9iamVjdCBwYXNzZWQgdG8gdGhlIEF4aW9zIGNvbnN0cnVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBBeGlvc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMsIG9wdGlvbnMpIHtcbiAgdGhpcy5fcGFpcnMgPSBbXTtcblxuICBwYXJhbXMgJiYgdG9Gb3JtRGF0YShwYXJhbXMsIHRoaXMsIG9wdGlvbnMpO1xufVxuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc1VSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG5cbnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fcGFpcnMucHVzaChbbmFtZSwgdmFsdWVdKTtcbn07XG5cbnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKGVuY29kZXIpIHtcbiAgY29uc3QgX2VuY29kZSA9IGVuY29kZXIgPyBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBlbmNvZGVyLmNhbGwodGhpcywgdmFsdWUsIGVuY29kZSk7XG4gIH0gOiBlbmNvZGU7XG5cbiAgcmV0dXJuIHRoaXMuX3BhaXJzLm1hcChmdW5jdGlvbiBlYWNoKHBhaXIpIHtcbiAgICByZXR1cm4gX2VuY29kZShwYWlyWzBdKSArICc9JyArIF9lbmNvZGUocGFpclsxXSk7XG4gIH0sICcnKS5qb2luKCcmJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG4vLyB0ZW1wb3JhcnkgaG90Zml4IHRvIGF2b2lkIGNpcmN1bGFyIHJlZmVyZW5jZXMgdW50aWwgQXhpb3NVUkxTZWFyY2hQYXJhbXMgaXMgcmVmYWN0b3JlZFxuaW1wb3J0IFBsYXRmb3JtRm9ybURhdGEgZnJvbSAnLi4vcGxhdGZvcm0vbm9kZS9jbGFzc2VzL0Zvcm1EYXRhLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiB0aGluZyBpcyBhIGFycmF5IG9yIGpzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGhpbmcgLSBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGJlIHZpc2l0ZWQuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmlzaXRhYmxlKHRoaW5nKSB7XG4gIHJldHVybiB1dGlscy5pc1BsYWluT2JqZWN0KHRoaW5nKSB8fCB1dGlscy5pc0FycmF5KHRoaW5nKTtcbn1cblxuLyoqXG4gKiBJdCByZW1vdmVzIHRoZSBicmFja2V0cyBmcm9tIHRoZSBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgcGFyYW1ldGVyLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBrZXkgd2l0aG91dCB0aGUgYnJhY2tldHMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJyYWNrZXRzKGtleSkge1xuICByZXR1cm4gdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSA/IGtleS5zbGljZSgwLCAtMikgOiBrZXk7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBwYXRoLCBhIGtleSwgYW5kIGEgYm9vbGVhbiwgYW5kIHJldHVybnMgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBjdXJyZW50IG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGRvdHMgLSBJZiB0cnVlLCB0aGUga2V5IHdpbGwgYmUgcmVuZGVyZWQgd2l0aCBkb3RzIGluc3RlYWQgb2YgYnJhY2tldHMuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxuICovXG5mdW5jdGlvbiByZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSB7XG4gIGlmICghcGF0aCkgcmV0dXJuIGtleTtcbiAgcmV0dXJuIHBhdGguY29uY2F0KGtleSkubWFwKGZ1bmN0aW9uIGVhY2godG9rZW4sIGkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB0b2tlbiA9IHJlbW92ZUJyYWNrZXRzKHRva2VuKTtcbiAgICByZXR1cm4gIWRvdHMgJiYgaSA/ICdbJyArIHRva2VuICsgJ10nIDogdG9rZW47XG4gIH0pLmpvaW4oZG90cyA/ICcuJyA6ICcnKTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgYXJyYXkgaXMgYW4gYXJyYXkgYW5kIG5vbmUgb2YgaXRzIGVsZW1lbnRzIGFyZSB2aXNpdGFibGUsIHRoZW4gaXQncyBhIGZsYXQgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNGbGF0QXJyYXkoYXJyKSB7XG4gIHJldHVybiB1dGlscy5pc0FycmF5KGFycikgJiYgIWFyci5zb21lKGlzVmlzaXRhYmxlKTtcbn1cblxuY29uc3QgcHJlZGljYXRlcyA9IHV0aWxzLnRvRmxhdE9iamVjdCh1dGlscywge30sIG51bGwsIGZ1bmN0aW9uIGZpbHRlcihwcm9wKSB7XG4gIHJldHVybiAvXmlzW0EtWl0vLnRlc3QocHJvcCk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgZGF0YSBvYmplY3QgdG8gRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0gez9PYmplY3R9IFtmb3JtRGF0YV1cbiAqIEBwYXJhbSB7P09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy52aXNpdG9yXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tZXRhVG9rZW5zID0gdHJ1ZV1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZG90cyA9IGZhbHNlXVxuICogQHBhcmFtIHs/Qm9vbGVhbn0gW29wdGlvbnMuaW5kZXhlcyA9IGZhbHNlXVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiovXG5cbi8qKlxuICogSXQgY29udmVydHMgYW4gb2JqZWN0IGludG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gY29udmVydCB0byBmb3JtIGRhdGEuXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgLSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGFwcGVuZCB0by5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHRvRm9ybURhdGEob2JqLCBmb3JtRGF0YSwgb3B0aW9ucykge1xuICBpZiAoIXV0aWxzLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXQgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBmb3JtRGF0YSA9IGZvcm1EYXRhIHx8IG5ldyAoUGxhdGZvcm1Gb3JtRGF0YSB8fCBGb3JtRGF0YSkoKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgb3B0aW9ucyA9IHV0aWxzLnRvRmxhdE9iamVjdChvcHRpb25zLCB7XG4gICAgbWV0YVRva2VuczogdHJ1ZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBmYWxzZVxuICB9LCBmYWxzZSwgZnVuY3Rpb24gZGVmaW5lZChvcHRpb24sIHNvdXJjZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICAgIHJldHVybiAhdXRpbHMuaXNVbmRlZmluZWQoc291cmNlW29wdGlvbl0pO1xuICB9KTtcblxuICBjb25zdCBtZXRhVG9rZW5zID0gb3B0aW9ucy5tZXRhVG9rZW5zO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgY29uc3QgdmlzaXRvciA9IG9wdGlvbnMudmlzaXRvciB8fCBkZWZhdWx0VmlzaXRvcjtcbiAgY29uc3QgZG90cyA9IG9wdGlvbnMuZG90cztcbiAgY29uc3QgaW5kZXhlcyA9IG9wdGlvbnMuaW5kZXhlcztcbiAgY29uc3QgX0Jsb2IgPSBvcHRpb25zLkJsb2IgfHwgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIEJsb2I7XG4gIGNvbnN0IHVzZUJsb2IgPSBfQmxvYiAmJiB1dGlscy5pc1NwZWNDb21wbGlhbnRGb3JtKGZvcm1EYXRhKTtcblxuICBpZiAoIXV0aWxzLmlzRnVuY3Rpb24odmlzaXRvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2aXNpdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gJyc7XG5cbiAgICBpZiAodXRpbHMuaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VCbG9iICYmIHV0aWxzLmlzQmxvYih2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdCbG9iIGlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBhIEJ1ZmZlciBpbnN0ZWFkLicpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKHZhbHVlKSB8fCB1dGlscy5pc1R5cGVkQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdXNlQmxvYiAmJiB0eXBlb2YgQmxvYiA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBCbG9iKFt2YWx1ZV0pIDogQnVmZmVyLmZyb20odmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHZpc2l0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBrZXlcbiAgICogQHBhcmFtIHtBcnJheTxTdHJpbmd8TnVtYmVyPn0gcGF0aFxuICAgKiBAdGhpcyB7Rm9ybURhdGF9XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm4gdHJ1ZSB0byB2aXNpdCB0aGUgZWFjaCBwcm9wIG9mIHRoZSB2YWx1ZSByZWN1cnNpdmVseVxuICAgKi9cbiAgZnVuY3Rpb24gZGVmYXVsdFZpc2l0b3IodmFsdWUsIGtleSwgcGF0aCkge1xuICAgIGxldCBhcnIgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSAmJiAhcGF0aCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAodXRpbHMuZW5kc1dpdGgoa2V5LCAne30nKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gbWV0YVRva2VucyA/IGtleSA6IGtleS5zbGljZSgwLCAtMik7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICh1dGlscy5pc0FycmF5KHZhbHVlKSAmJiBpc0ZsYXRBcnJheSh2YWx1ZSkpIHx8XG4gICAgICAgICgodXRpbHMuaXNGaWxlTGlzdCh2YWx1ZSkgfHwgdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSkgJiYgKGFyciA9IHV0aWxzLnRvQXJyYXkodmFsdWUpKVxuICAgICAgICApKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSByZW1vdmVCcmFja2V0cyhrZXkpO1xuXG4gICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIGVhY2goZWwsIGluZGV4KSB7XG4gICAgICAgICAgISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICAgICAgaW5kZXhlcyA9PT0gdHJ1ZSA/IHJlbmRlcktleShba2V5XSwgaW5kZXgsIGRvdHMpIDogKGluZGV4ZXMgPT09IG51bGwgPyBrZXkgOiBrZXkgKyAnW10nKSxcbiAgICAgICAgICAgIGNvbnZlcnRWYWx1ZShlbClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1Zpc2l0YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvcm1EYXRhLmFwcGVuZChyZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSwgY29udmVydFZhbHVlKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBzdGFjayA9IFtdO1xuXG4gIGNvbnN0IGV4cG9zZWRIZWxwZXJzID0gT2JqZWN0LmFzc2lnbihwcmVkaWNhdGVzLCB7XG4gICAgZGVmYXVsdFZpc2l0b3IsXG4gICAgY29udmVydFZhbHVlLFxuICAgIGlzVmlzaXRhYmxlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkKHZhbHVlLCBwYXRoKSB7XG4gICAgaWYgKHV0aWxzLmlzVW5kZWZpbmVkKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgaWYgKHN0YWNrLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0NpcmN1bGFyIHJlZmVyZW5jZSBkZXRlY3RlZCBpbiAnICsgcGF0aC5qb2luKCcuJykpO1xuICAgIH1cblxuICAgIHN0YWNrLnB1c2godmFsdWUpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gZWFjaChlbCwga2V5KSB7XG4gICAgICBjb25zdCByZXN1bHQgPSAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgdmlzaXRvci5jYWxsKFxuICAgICAgICBmb3JtRGF0YSwgZWwsIHV0aWxzLmlzU3RyaW5nKGtleSkgPyBrZXkudHJpbSgpIDoga2V5LCBwYXRoLCBleHBvc2VkSGVscGVyc1xuICAgICAgKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICBidWlsZChlbCwgcGF0aCA/IHBhdGguY29uY2F0KGtleSkgOiBba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGFjay5wb3AoKTtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RhdGEgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIGJ1aWxkKG9iaik7XG5cbiAgcmV0dXJuIGZvcm1EYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0Zvcm1EYXRhO1xuIiwidmFyIEVyPU9iamVjdC5jcmVhdGU7dmFyIE49T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBkcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBncj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgbXI9T2JqZWN0LmdldFByb3RvdHlwZU9mLElyPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyICQ9KGkscik9PigpPT4ocnx8aSgocj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsciksci5leHBvcnRzKSxGcj0oaSxyKT0+e2Zvcih2YXIgdCBpbiByKU4oaSx0LHtnZXQ6clt0XSxlbnVtZXJhYmxlOiEwfSl9LEw9KGkscix0LG4pPT57aWYociYmdHlwZW9mIHI9PVwib2JqZWN0XCJ8fHR5cGVvZiByPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBlIG9mIGdyKHIpKSFJci5jYWxsKGksZSkmJmUhPT10JiZOKGksZSx7Z2V0OigpPT5yW2VdLGVudW1lcmFibGU6IShuPWRyKHIsZSkpfHxuLmVudW1lcmFibGV9KTtyZXR1cm4gaX0sUz0oaSxyLHQpPT4oTChpLHIsXCJkZWZhdWx0XCIpLHQmJkwodCxyLFwiZGVmYXVsdFwiKSksSj0oaSxyLHQpPT4odD1pIT1udWxsP0VyKG1yKGkpKTp7fSxMKHJ8fCFpfHwhaS5fX2VzTW9kdWxlP04odCxcImRlZmF1bHRcIix7dmFsdWU6aSxlbnVtZXJhYmxlOiEwfSk6dCxpKSksQXI9aT0+TChOKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGkpO3ZhciBRPSQoTT0+e1widXNlIHN0cmljdFwiO00uYnl0ZUxlbmd0aD1ScjtNLnRvQnl0ZUFycmF5PUNyO00uZnJvbUJ5dGVBcnJheT1Mcjt2YXIgQj1bXSx3PVtdLFVyPXR5cGVvZiBVaW50OEFycmF5PFwidVwiP1VpbnQ4QXJyYXk6QXJyYXksUD1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtmb3IobT0wLEs9UC5sZW5ndGg7bTxLOysrbSlCW21dPVBbbV0sd1tQLmNoYXJDb2RlQXQobSldPW07dmFyIG0sSzt3W1wiLVwiLmNoYXJDb2RlQXQoMCldPTYyO3dbXCJfXCIuY2hhckNvZGVBdCgwKV09NjM7ZnVuY3Rpb24gWihpKXt2YXIgcj1pLmxlbmd0aDtpZihyJTQ+MCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0XCIpO3ZhciB0PWkuaW5kZXhPZihcIj1cIik7dD09PS0xJiYodD1yKTt2YXIgbj10PT09cj8wOjQtdCU0O3JldHVyblt0LG5dfWZ1bmN0aW9uIFJyKGkpe3ZhciByPVooaSksdD1yWzBdLG49clsxXTtyZXR1cm4odCtuKSozLzQtbn1mdW5jdGlvbiBUcihpLHIsdCl7cmV0dXJuKHIrdCkqMy80LXR9ZnVuY3Rpb24gQ3IoaSl7dmFyIHIsdD1aKGkpLG49dFswXSxlPXRbMV0sbz1uZXcgVXIoVHIoaSxuLGUpKSx1PTAsZj1lPjA/bi00Om4sYztmb3IoYz0wO2M8ZjtjKz00KXI9d1tpLmNoYXJDb2RlQXQoYyldPDwxOHx3W2kuY2hhckNvZGVBdChjKzEpXTw8MTJ8d1tpLmNoYXJDb2RlQXQoYysyKV08PDZ8d1tpLmNoYXJDb2RlQXQoYyszKV0sb1t1KytdPXI+PjE2JjI1NSxvW3UrK109cj4+OCYyNTUsb1t1KytdPXImMjU1O3JldHVybiBlPT09MiYmKHI9d1tpLmNoYXJDb2RlQXQoYyldPDwyfHdbaS5jaGFyQ29kZUF0KGMrMSldPj40LG9bdSsrXT1yJjI1NSksZT09PTEmJihyPXdbaS5jaGFyQ29kZUF0KGMpXTw8MTB8d1tpLmNoYXJDb2RlQXQoYysxKV08PDR8d1tpLmNoYXJDb2RlQXQoYysyKV0+PjIsb1t1KytdPXI+PjgmMjU1LG9bdSsrXT1yJjI1NSksb31mdW5jdGlvbiBTcihpKXtyZXR1cm4gQltpPj4xOCY2M10rQltpPj4xMiY2M10rQltpPj42JjYzXStCW2kmNjNdfWZ1bmN0aW9uIF9yKGkscix0KXtmb3IodmFyIG4sZT1bXSxvPXI7bzx0O28rPTMpbj0oaVtvXTw8MTYmMTY3MTE2ODApKyhpW28rMV08PDgmNjUyODApKyhpW28rMl0mMjU1KSxlLnB1c2goU3IobikpO3JldHVybiBlLmpvaW4oXCJcIil9ZnVuY3Rpb24gTHIoaSl7Zm9yKHZhciByLHQ9aS5sZW5ndGgsbj10JTMsZT1bXSxvPTE2MzgzLHU9MCxmPXQtbjt1PGY7dSs9byllLnB1c2goX3IoaSx1LHUrbz5mP2Y6dStvKSk7cmV0dXJuIG49PT0xPyhyPWlbdC0xXSxlLnB1c2goQltyPj4yXStCW3I8PDQmNjNdK1wiPT1cIikpOm49PT0yJiYocj0oaVt0LTJdPDw4KStpW3QtMV0sZS5wdXNoKEJbcj4+MTBdK0Jbcj4+NCY2M10rQltyPDwyJjYzXStcIj1cIikpLGUuam9pbihcIlwiKX19KTt2YXIgdj0kKE89PntPLnJlYWQ9ZnVuY3Rpb24oaSxyLHQsbixlKXt2YXIgbyx1LGY9ZSo4LW4tMSxjPSgxPDxmKS0xLGw9Yz4+MSxzPS03LHA9dD9lLTE6MCxGPXQ/LTE6MSx4PWlbcitwXTtmb3IocCs9RixvPXgmKDE8PC1zKS0xLHg+Pj0tcyxzKz1mO3M+MDtvPW8qMjU2K2lbcitwXSxwKz1GLHMtPTgpO2Zvcih1PW8mKDE8PC1zKS0xLG8+Pj0tcyxzKz1uO3M+MDt1PXUqMjU2K2lbcitwXSxwKz1GLHMtPTgpO2lmKG89PT0wKW89MS1sO2Vsc2V7aWYobz09PWMpcmV0dXJuIHU/TmFOOih4Py0xOjEpKigxLzApO3U9dStNYXRoLnBvdygyLG4pLG89by1sfXJldHVybih4Py0xOjEpKnUqTWF0aC5wb3coMixvLW4pfTtPLndyaXRlPWZ1bmN0aW9uKGkscix0LG4sZSxvKXt2YXIgdSxmLGMsbD1vKjgtZS0xLHM9KDE8PGwpLTEscD1zPj4xLEY9ZT09PTIzP01hdGgucG93KDIsLTI0KS1NYXRoLnBvdygyLC03Nyk6MCx4PW4/MDpvLTEsYj1uPzE6LTEsQnI9cjwwfHxyPT09MCYmMS9yPDA/MTowO2ZvcihyPU1hdGguYWJzKHIpLGlzTmFOKHIpfHxyPT09MS8wPyhmPWlzTmFOKHIpPzE6MCx1PXMpOih1PU1hdGguZmxvb3IoTWF0aC5sb2cocikvTWF0aC5MTjIpLHIqKGM9TWF0aC5wb3coMiwtdSkpPDEmJih1LS0sYyo9MiksdStwPj0xP3IrPUYvYzpyKz1GKk1hdGgucG93KDIsMS1wKSxyKmM+PTImJih1KyssYy89MiksdStwPj1zPyhmPTAsdT1zKTp1K3A+PTE/KGY9KHIqYy0xKSpNYXRoLnBvdygyLGUpLHU9dStwKTooZj1yKk1hdGgucG93KDIscC0xKSpNYXRoLnBvdygyLGUpLHU9MCkpO2U+PTg7aVt0K3hdPWYmMjU1LHgrPWIsZi89MjU2LGUtPTgpO2Zvcih1PXU8PGV8ZixsKz1lO2w+MDtpW3QreF09dSYyNTUseCs9Yix1Lz0yNTYsbC09OCk7aVt0K3gtYl18PUJyKjEyOH19KTt2YXIgej0kKFQ9PntcInVzZSBzdHJpY3RcIjt2YXIgRz1RKCksVT12KCkscnI9dHlwZW9mIFN5bWJvbD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLmZvcj09XCJmdW5jdGlvblwiP1N5bWJvbC5mb3IoXCJub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbVwiKTpudWxsO1QuQnVmZmVyPWg7VC5TbG93QnVmZmVyPSRyO1QuSU5TUEVDVF9NQVhfQllURVM9NTA7dmFyIGs9MjE0NzQ4MzY0NztULmtNYXhMZW5ndGg9aztoLlRZUEVEX0FSUkFZX1NVUFBPUlQ9TnIoKTshaC5UWVBFRF9BUlJBWV9TVVBQT1JUJiZ0eXBlb2YgY29uc29sZTxcInVcIiYmdHlwZW9mIGNvbnNvbGUuZXJyb3I9PVwiZnVuY3Rpb25cIiYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBsYWNrcyB0eXBlZCBhcnJheSAoVWludDhBcnJheSkgc3VwcG9ydCB3aGljaCBpcyByZXF1aXJlZCBieSBgYnVmZmVyYCB2NS54LiBVc2UgYGJ1ZmZlcmAgdjQueCBpZiB5b3UgcmVxdWlyZSBvbGQgYnJvd3NlciBzdXBwb3J0LlwiKTtmdW5jdGlvbiBOcigpe3RyeXtsZXQgaT1uZXcgVWludDhBcnJheSgxKSxyPXtmb286ZnVuY3Rpb24oKXtyZXR1cm4gNDJ9fTtyZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKHIsVWludDhBcnJheS5wcm90b3R5cGUpLE9iamVjdC5zZXRQcm90b3R5cGVPZihpLHIpLGkuZm9vKCk9PT00Mn1jYXRjaChpKXtyZXR1cm4hMX19T2JqZWN0LmRlZmluZVByb3BlcnR5KGgucHJvdG90eXBlLFwicGFyZW50XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7aWYoaC5pc0J1ZmZlcih0aGlzKSlyZXR1cm4gdGhpcy5idWZmZXJ9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGgucHJvdG90eXBlLFwib2Zmc2V0XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7aWYoaC5pc0J1ZmZlcih0aGlzKSlyZXR1cm4gdGhpcy5ieXRlT2Zmc2V0fX0pO2Z1bmN0aW9uIGQoaSl7aWYoaT5rKXRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInK2krJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpO2xldCByPW5ldyBVaW50OEFycmF5KGkpO3JldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YocixoLnByb3RvdHlwZSkscn1mdW5jdGlvbiBoKGkscix0KXtpZih0eXBlb2YgaT09XCJudW1iZXJcIil7aWYodHlwZW9mIHI9PVwic3RyaW5nXCIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSBudW1iZXInKTtyZXR1cm4gaihpKX1yZXR1cm4gZXIoaSxyLHQpfWgucG9vbFNpemU9ODE5MjtmdW5jdGlvbiBlcihpLHIsdCl7aWYodHlwZW9mIGk9PVwic3RyaW5nXCIpcmV0dXJuIGtyKGkscik7aWYoQXJyYXlCdWZmZXIuaXNWaWV3KGkpKXJldHVybiBEcihpKTtpZihpPT1udWxsKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSBcIit0eXBlb2YgaSk7aWYoRShpLEFycmF5QnVmZmVyKXx8aSYmRShpLmJ1ZmZlcixBcnJheUJ1ZmZlcil8fHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlcjxcInVcIiYmKEUoaSxTaGFyZWRBcnJheUJ1ZmZlcil8fGkmJkUoaS5idWZmZXIsU2hhcmVkQXJyYXlCdWZmZXIpKSlyZXR1cm4gcShpLHIsdCk7aWYodHlwZW9mIGk9PVwibnVtYmVyXCIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSBudW1iZXInKTtsZXQgbj1pLnZhbHVlT2YmJmkudmFsdWVPZigpO2lmKG4hPW51bGwmJm4hPT1pKXJldHVybiBoLmZyb20obixyLHQpO2xldCBlPWJyKGkpO2lmKGUpcmV0dXJuIGU7aWYodHlwZW9mIFN5bWJvbDxcInVcIiYmU3ltYm9sLnRvUHJpbWl0aXZlIT1udWxsJiZ0eXBlb2YgaVtTeW1ib2wudG9QcmltaXRpdmVdPT1cImZ1bmN0aW9uXCIpcmV0dXJuIGguZnJvbShpW1N5bWJvbC50b1ByaW1pdGl2ZV0oXCJzdHJpbmdcIikscix0KTt0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgXCIrdHlwZW9mIGkpfWguZnJvbT1mdW5jdGlvbihpLHIsdCl7cmV0dXJuIGVyKGkscix0KX07T2JqZWN0LnNldFByb3RvdHlwZU9mKGgucHJvdG90eXBlLFVpbnQ4QXJyYXkucHJvdG90eXBlKTtPYmplY3Quc2V0UHJvdG90eXBlT2YoaCxVaW50OEFycmF5KTtmdW5jdGlvbiBvcihpKXtpZih0eXBlb2YgaSE9XCJudW1iZXJcIil0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyJyk7aWYoaTwwKXRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInK2krJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpfWZ1bmN0aW9uIE1yKGkscix0KXtyZXR1cm4gb3IoaSksaTw9MD9kKGkpOnIhPT12b2lkIDA/dHlwZW9mIHQ9PVwic3RyaW5nXCI/ZChpKS5maWxsKHIsdCk6ZChpKS5maWxsKHIpOmQoaSl9aC5hbGxvYz1mdW5jdGlvbihpLHIsdCl7cmV0dXJuIE1yKGkscix0KX07ZnVuY3Rpb24gaihpKXtyZXR1cm4gb3IoaSksZChpPDA/MDpIKGkpfDApfWguYWxsb2NVbnNhZmU9ZnVuY3Rpb24oaSl7cmV0dXJuIGooaSl9O2guYWxsb2NVbnNhZmVTbG93PWZ1bmN0aW9uKGkpe3JldHVybiBqKGkpfTtmdW5jdGlvbiBrcihpLHIpe2lmKCh0eXBlb2YgciE9XCJzdHJpbmdcInx8cj09PVwiXCIpJiYocj1cInV0ZjhcIiksIWguaXNFbmNvZGluZyhyKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5rbm93biBlbmNvZGluZzogXCIrcik7bGV0IHQ9dXIoaSxyKXwwLG49ZCh0KSxlPW4ud3JpdGUoaSxyKTtyZXR1cm4gZSE9PXQmJihuPW4uc2xpY2UoMCxlKSksbn1mdW5jdGlvbiBZKGkpe2xldCByPWkubGVuZ3RoPDA/MDpIKGkubGVuZ3RoKXwwLHQ9ZChyKTtmb3IobGV0IG49MDtuPHI7bis9MSl0W25dPWlbbl0mMjU1O3JldHVybiB0fWZ1bmN0aW9uIERyKGkpe2lmKEUoaSxVaW50OEFycmF5KSl7bGV0IHI9bmV3IFVpbnQ4QXJyYXkoaSk7cmV0dXJuIHEoci5idWZmZXIsci5ieXRlT2Zmc2V0LHIuYnl0ZUxlbmd0aCl9cmV0dXJuIFkoaSl9ZnVuY3Rpb24gcShpLHIsdCl7aWYocjwwfHxpLmJ5dGVMZW5ndGg8cil0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJvZmZzZXRcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKTtpZihpLmJ5dGVMZW5ndGg8cisodHx8MCkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wibGVuZ3RoXCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJyk7bGV0IG47cmV0dXJuIHI9PT12b2lkIDAmJnQ9PT12b2lkIDA/bj1uZXcgVWludDhBcnJheShpKTp0PT09dm9pZCAwP249bmV3IFVpbnQ4QXJyYXkoaSxyKTpuPW5ldyBVaW50OEFycmF5KGkscix0KSxPYmplY3Quc2V0UHJvdG90eXBlT2YobixoLnByb3RvdHlwZSksbn1mdW5jdGlvbiBicihpKXtpZihoLmlzQnVmZmVyKGkpKXtsZXQgcj1IKGkubGVuZ3RoKXwwLHQ9ZChyKTtyZXR1cm4gdC5sZW5ndGg9PT0wfHxpLmNvcHkodCwwLDAsciksdH1pZihpLmxlbmd0aCE9PXZvaWQgMClyZXR1cm4gdHlwZW9mIGkubGVuZ3RoIT1cIm51bWJlclwifHxYKGkubGVuZ3RoKT9kKDApOlkoaSk7aWYoaS50eXBlPT09XCJCdWZmZXJcIiYmQXJyYXkuaXNBcnJheShpLmRhdGEpKXJldHVybiBZKGkuZGF0YSl9ZnVuY3Rpb24gSChpKXtpZihpPj1rKXRocm93IG5ldyBSYW5nZUVycm9yKFwiQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSBzaXplOiAweFwiK2sudG9TdHJpbmcoMTYpK1wiIGJ5dGVzXCIpO3JldHVybiBpfDB9ZnVuY3Rpb24gJHIoaSl7cmV0dXJuK2khPWkmJihpPTApLGguYWxsb2MoK2kpfWguaXNCdWZmZXI9ZnVuY3Rpb24ocil7cmV0dXJuIHIhPW51bGwmJnIuX2lzQnVmZmVyPT09ITAmJnIhPT1oLnByb3RvdHlwZX07aC5jb21wYXJlPWZ1bmN0aW9uKHIsdCl7aWYoRShyLFVpbnQ4QXJyYXkpJiYocj1oLmZyb20ocixyLm9mZnNldCxyLmJ5dGVMZW5ndGgpKSxFKHQsVWludDhBcnJheSkmJih0PWguZnJvbSh0LHQub2Zmc2V0LHQuYnl0ZUxlbmd0aCkpLCFoLmlzQnVmZmVyKHIpfHwhaC5pc0J1ZmZlcih0KSl0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJidWYxXCIsIFwiYnVmMlwiIGFyZ3VtZW50cyBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5Jyk7aWYocj09PXQpcmV0dXJuIDA7bGV0IG49ci5sZW5ndGgsZT10Lmxlbmd0aDtmb3IobGV0IG89MCx1PU1hdGgubWluKG4sZSk7bzx1OysrbylpZihyW29dIT09dFtvXSl7bj1yW29dLGU9dFtvXTticmVha31yZXR1cm4gbjxlPy0xOmU8bj8xOjB9O2guaXNFbmNvZGluZz1mdW5jdGlvbihyKXtzd2l0Y2goU3RyaW5nKHIpLnRvTG93ZXJDYXNlKCkpe2Nhc2VcImhleFwiOmNhc2VcInV0ZjhcIjpjYXNlXCJ1dGYtOFwiOmNhc2VcImFzY2lpXCI6Y2FzZVwibGF0aW4xXCI6Y2FzZVwiYmluYXJ5XCI6Y2FzZVwiYmFzZTY0XCI6Y2FzZVwidWNzMlwiOmNhc2VcInVjcy0yXCI6Y2FzZVwidXRmMTZsZVwiOmNhc2VcInV0Zi0xNmxlXCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19O2guY29uY2F0PWZ1bmN0aW9uKHIsdCl7aWYoIUFycmF5LmlzQXJyYXkocikpdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJyk7aWYoci5sZW5ndGg9PT0wKXJldHVybiBoLmFsbG9jKDApO2xldCBuO2lmKHQ9PT12b2lkIDApZm9yKHQ9MCxuPTA7bjxyLmxlbmd0aDsrK24pdCs9cltuXS5sZW5ndGg7bGV0IGU9aC5hbGxvY1Vuc2FmZSh0KSxvPTA7Zm9yKG49MDtuPHIubGVuZ3RoOysrbil7bGV0IHU9cltuXTtpZihFKHUsVWludDhBcnJheSkpbyt1Lmxlbmd0aD5lLmxlbmd0aD8oaC5pc0J1ZmZlcih1KXx8KHU9aC5mcm9tKHUpKSx1LmNvcHkoZSxvKSk6VWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoZSx1LG8pO2Vsc2UgaWYoaC5pc0J1ZmZlcih1KSl1LmNvcHkoZSxvKTtlbHNlIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpO28rPXUubGVuZ3RofXJldHVybiBlfTtmdW5jdGlvbiB1cihpLHIpe2lmKGguaXNCdWZmZXIoaSkpcmV0dXJuIGkubGVuZ3RoO2lmKEFycmF5QnVmZmVyLmlzVmlldyhpKXx8RShpLEFycmF5QnVmZmVyKSlyZXR1cm4gaS5ieXRlTGVuZ3RoO2lmKHR5cGVvZiBpIT1cInN0cmluZ1wiKXRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIG9yIEFycmF5QnVmZmVyLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIGkpO2xldCB0PWkubGVuZ3RoLG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl09PT0hMDtpZighbiYmdD09PTApcmV0dXJuIDA7bGV0IGU9ITE7Zm9yKDs7KXN3aXRjaChyKXtjYXNlXCJhc2NpaVwiOmNhc2VcImxhdGluMVwiOmNhc2VcImJpbmFyeVwiOnJldHVybiB0O2Nhc2VcInV0ZjhcIjpjYXNlXCJ1dGYtOFwiOnJldHVybiBXKGkpLmxlbmd0aDtjYXNlXCJ1Y3MyXCI6Y2FzZVwidWNzLTJcIjpjYXNlXCJ1dGYxNmxlXCI6Y2FzZVwidXRmLTE2bGVcIjpyZXR1cm4gdCoyO2Nhc2VcImhleFwiOnJldHVybiB0Pj4+MTtjYXNlXCJiYXNlNjRcIjpyZXR1cm4gd3IoaSkubGVuZ3RoO2RlZmF1bHQ6aWYoZSlyZXR1cm4gbj8tMTpXKGkpLmxlbmd0aDtyPShcIlwiK3IpLnRvTG93ZXJDYXNlKCksZT0hMH19aC5ieXRlTGVuZ3RoPXVyO2Z1bmN0aW9uIFByKGkscix0KXtsZXQgbj0hMTtpZigocj09PXZvaWQgMHx8cjwwKSYmKHI9MCkscj50aGlzLmxlbmd0aHx8KCh0PT09dm9pZCAwfHx0PnRoaXMubGVuZ3RoKSYmKHQ9dGhpcy5sZW5ndGgpLHQ8PTApfHwodD4+Pj0wLHI+Pj49MCx0PD1yKSlyZXR1cm5cIlwiO2ZvcihpfHwoaT1cInV0ZjhcIik7Oylzd2l0Y2goaSl7Y2FzZVwiaGV4XCI6cmV0dXJuIHpyKHRoaXMscix0KTtjYXNlXCJ1dGY4XCI6Y2FzZVwidXRmLThcIjpyZXR1cm4gZnIodGhpcyxyLHQpO2Nhc2VcImFzY2lpXCI6cmV0dXJuIFZyKHRoaXMscix0KTtjYXNlXCJsYXRpbjFcIjpjYXNlXCJiaW5hcnlcIjpyZXR1cm4gWHIodGhpcyxyLHQpO2Nhc2VcImJhc2U2NFwiOnJldHVybiBqcih0aGlzLHIsdCk7Y2FzZVwidWNzMlwiOmNhc2VcInVjcy0yXCI6Y2FzZVwidXRmMTZsZVwiOmNhc2VcInV0Zi0xNmxlXCI6cmV0dXJuIEpyKHRoaXMscix0KTtkZWZhdWx0OmlmKG4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gZW5jb2Rpbmc6IFwiK2kpO2k9KGkrXCJcIikudG9Mb3dlckNhc2UoKSxuPSEwfX1oLnByb3RvdHlwZS5faXNCdWZmZXI9ITA7ZnVuY3Rpb24gSShpLHIsdCl7bGV0IG49aVtyXTtpW3JdPWlbdF0saVt0XT1ufWgucHJvdG90eXBlLnN3YXAxNj1mdW5jdGlvbigpe2xldCByPXRoaXMubGVuZ3RoO2lmKHIlMiE9PTApdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0c1wiKTtmb3IobGV0IHQ9MDt0PHI7dCs9MilJKHRoaXMsdCx0KzEpO3JldHVybiB0aGlzfTtoLnByb3RvdHlwZS5zd2FwMzI9ZnVuY3Rpb24oKXtsZXQgcj10aGlzLmxlbmd0aDtpZihyJTQhPT0wKXRocm93IG5ldyBSYW5nZUVycm9yKFwiQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHNcIik7Zm9yKGxldCB0PTA7dDxyO3QrPTQpSSh0aGlzLHQsdCszKSxJKHRoaXMsdCsxLHQrMik7cmV0dXJuIHRoaXN9O2gucHJvdG90eXBlLnN3YXA2ND1mdW5jdGlvbigpe2xldCByPXRoaXMubGVuZ3RoO2lmKHIlOCE9PTApdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0c1wiKTtmb3IobGV0IHQ9MDt0PHI7dCs9OClJKHRoaXMsdCx0KzcpLEkodGhpcyx0KzEsdCs2KSxJKHRoaXMsdCsyLHQrNSksSSh0aGlzLHQrMyx0KzQpO3JldHVybiB0aGlzfTtoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe2xldCByPXRoaXMubGVuZ3RoO3JldHVybiByPT09MD9cIlwiOmFyZ3VtZW50cy5sZW5ndGg9PT0wP2ZyKHRoaXMsMCxyKTpQci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2gucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nPWgucHJvdG90eXBlLnRvU3RyaW5nO2gucHJvdG90eXBlLmVxdWFscz1mdW5jdGlvbihyKXtpZighaC5pc0J1ZmZlcihyKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlclwiKTtyZXR1cm4gdGhpcz09PXI/ITA6aC5jb21wYXJlKHRoaXMscik9PT0wfTtoLnByb3RvdHlwZS5pbnNwZWN0PWZ1bmN0aW9uKCl7bGV0IHI9XCJcIix0PVQuSU5TUEVDVF9NQVhfQllURVM7cmV0dXJuIHI9dGhpcy50b1N0cmluZyhcImhleFwiLDAsdCkucmVwbGFjZSgvKC57Mn0pL2csXCIkMSBcIikudHJpbSgpLHRoaXMubGVuZ3RoPnQmJihyKz1cIiAuLi4gXCIpLFwiPEJ1ZmZlciBcIityK1wiPlwifTtyciYmKGgucHJvdG90eXBlW3JyXT1oLnByb3RvdHlwZS5pbnNwZWN0KTtoLnByb3RvdHlwZS5jb21wYXJlPWZ1bmN0aW9uKHIsdCxuLGUsbyl7aWYoRShyLFVpbnQ4QXJyYXkpJiYocj1oLmZyb20ocixyLm9mZnNldCxyLmJ5dGVMZW5ndGgpKSwhaC5pc0J1ZmZlcihyKSl0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ0YXJnZXRcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5LiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIHIpO2lmKHQ9PT12b2lkIDAmJih0PTApLG49PT12b2lkIDAmJihuPXI/ci5sZW5ndGg6MCksZT09PXZvaWQgMCYmKGU9MCksbz09PXZvaWQgMCYmKG89dGhpcy5sZW5ndGgpLHQ8MHx8bj5yLmxlbmd0aHx8ZTwwfHxvPnRoaXMubGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKFwib3V0IG9mIHJhbmdlIGluZGV4XCIpO2lmKGU+PW8mJnQ+PW4pcmV0dXJuIDA7aWYoZT49bylyZXR1cm4tMTtpZih0Pj1uKXJldHVybiAxO2lmKHQ+Pj49MCxuPj4+PTAsZT4+Pj0wLG8+Pj49MCx0aGlzPT09cilyZXR1cm4gMDtsZXQgdT1vLWUsZj1uLXQsYz1NYXRoLm1pbih1LGYpLGw9dGhpcy5zbGljZShlLG8pLHM9ci5zbGljZSh0LG4pO2ZvcihsZXQgcD0wO3A8YzsrK3ApaWYobFtwXSE9PXNbcF0pe3U9bFtwXSxmPXNbcF07YnJlYWt9cmV0dXJuIHU8Zj8tMTpmPHU/MTowfTtmdW5jdGlvbiBocihpLHIsdCxuLGUpe2lmKGkubGVuZ3RoPT09MClyZXR1cm4tMTtpZih0eXBlb2YgdD09XCJzdHJpbmdcIj8obj10LHQ9MCk6dD4yMTQ3NDgzNjQ3P3Q9MjE0NzQ4MzY0Nzp0PC0yMTQ3NDgzNjQ4JiYodD0tMjE0NzQ4MzY0OCksdD0rdCxYKHQpJiYodD1lPzA6aS5sZW5ndGgtMSksdDwwJiYodD1pLmxlbmd0aCt0KSx0Pj1pLmxlbmd0aCl7aWYoZSlyZXR1cm4tMTt0PWkubGVuZ3RoLTF9ZWxzZSBpZih0PDApaWYoZSl0PTA7ZWxzZSByZXR1cm4tMTtpZih0eXBlb2Ygcj09XCJzdHJpbmdcIiYmKHI9aC5mcm9tKHIsbikpLGguaXNCdWZmZXIocikpcmV0dXJuIHIubGVuZ3RoPT09MD8tMTp0cihpLHIsdCxuLGUpO2lmKHR5cGVvZiByPT1cIm51bWJlclwiKXJldHVybiByPXImMjU1LHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mPT1cImZ1bmN0aW9uXCI/ZT9VaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoaSxyLHQpOlVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoaSxyLHQpOnRyKGksW3JdLHQsbixlKTt0aHJvdyBuZXcgVHlwZUVycm9yKFwidmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyXCIpfWZ1bmN0aW9uIHRyKGkscix0LG4sZSl7bGV0IG89MSx1PWkubGVuZ3RoLGY9ci5sZW5ndGg7aWYobiE9PXZvaWQgMCYmKG49U3RyaW5nKG4pLnRvTG93ZXJDYXNlKCksbj09PVwidWNzMlwifHxuPT09XCJ1Y3MtMlwifHxuPT09XCJ1dGYxNmxlXCJ8fG49PT1cInV0Zi0xNmxlXCIpKXtpZihpLmxlbmd0aDwyfHxyLmxlbmd0aDwyKXJldHVybi0xO289Mix1Lz0yLGYvPTIsdC89Mn1mdW5jdGlvbiBjKHMscCl7cmV0dXJuIG89PT0xP3NbcF06cy5yZWFkVUludDE2QkUocCpvKX1sZXQgbDtpZihlKXtsZXQgcz0tMTtmb3IobD10O2w8dTtsKyspaWYoYyhpLGwpPT09YyhyLHM9PT0tMT8wOmwtcykpe2lmKHM9PT0tMSYmKHM9bCksbC1zKzE9PT1mKXJldHVybiBzKm99ZWxzZSBzIT09LTEmJihsLT1sLXMpLHM9LTF9ZWxzZSBmb3IodCtmPnUmJih0PXUtZiksbD10O2w+PTA7bC0tKXtsZXQgcz0hMDtmb3IobGV0IHA9MDtwPGY7cCsrKWlmKGMoaSxsK3ApIT09YyhyLHApKXtzPSExO2JyZWFrfWlmKHMpcmV0dXJuIGx9cmV0dXJuLTF9aC5wcm90b3R5cGUuaW5jbHVkZXM9ZnVuY3Rpb24ocix0LG4pe3JldHVybiB0aGlzLmluZGV4T2Yocix0LG4pIT09LTF9O2gucHJvdG90eXBlLmluZGV4T2Y9ZnVuY3Rpb24ocix0LG4pe3JldHVybiBocih0aGlzLHIsdCxuLCEwKX07aC5wcm90b3R5cGUubGFzdEluZGV4T2Y9ZnVuY3Rpb24ocix0LG4pe3JldHVybiBocih0aGlzLHIsdCxuLCExKX07ZnVuY3Rpb24gT3IoaSxyLHQsbil7dD1OdW1iZXIodCl8fDA7bGV0IGU9aS5sZW5ndGgtdDtuPyhuPU51bWJlcihuKSxuPmUmJihuPWUpKTpuPWU7bGV0IG89ci5sZW5ndGg7bj5vLzImJihuPW8vMik7bGV0IHU7Zm9yKHU9MDt1PG47Kyt1KXtsZXQgZj1wYXJzZUludChyLnN1YnN0cih1KjIsMiksMTYpO2lmKFgoZikpcmV0dXJuIHU7aVt0K3VdPWZ9cmV0dXJuIHV9ZnVuY3Rpb24gR3IoaSxyLHQsbil7cmV0dXJuIEQoVyhyLGkubGVuZ3RoLXQpLGksdCxuKX1mdW5jdGlvbiBZcihpLHIsdCxuKXtyZXR1cm4gRCh2cihyKSxpLHQsbil9ZnVuY3Rpb24gcXIoaSxyLHQsbil7cmV0dXJuIEQod3IociksaSx0LG4pfWZ1bmN0aW9uIFdyKGkscix0LG4pe3JldHVybiBEKHJ0KHIsaS5sZW5ndGgtdCksaSx0LG4pfWgucHJvdG90eXBlLndyaXRlPWZ1bmN0aW9uKHIsdCxuLGUpe2lmKHQ9PT12b2lkIDApZT1cInV0ZjhcIixuPXRoaXMubGVuZ3RoLHQ9MDtlbHNlIGlmKG49PT12b2lkIDAmJnR5cGVvZiB0PT1cInN0cmluZ1wiKWU9dCxuPXRoaXMubGVuZ3RoLHQ9MDtlbHNlIGlmKGlzRmluaXRlKHQpKXQ9dD4+PjAsaXNGaW5pdGUobik/KG49bj4+PjAsZT09PXZvaWQgMCYmKGU9XCJ1dGY4XCIpKTooZT1uLG49dm9pZCAwKTtlbHNlIHRocm93IG5ldyBFcnJvcihcIkJ1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkXCIpO2xldCBvPXRoaXMubGVuZ3RoLXQ7aWYoKG49PT12b2lkIDB8fG4+bykmJihuPW8pLHIubGVuZ3RoPjAmJihuPDB8fHQ8MCl8fHQ+dGhpcy5sZW5ndGgpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kc1wiKTtlfHwoZT1cInV0ZjhcIik7bGV0IHU9ITE7Zm9yKDs7KXN3aXRjaChlKXtjYXNlXCJoZXhcIjpyZXR1cm4gT3IodGhpcyxyLHQsbik7Y2FzZVwidXRmOFwiOmNhc2VcInV0Zi04XCI6cmV0dXJuIEdyKHRoaXMscix0LG4pO2Nhc2VcImFzY2lpXCI6Y2FzZVwibGF0aW4xXCI6Y2FzZVwiYmluYXJ5XCI6cmV0dXJuIFlyKHRoaXMscix0LG4pO2Nhc2VcImJhc2U2NFwiOnJldHVybiBxcih0aGlzLHIsdCxuKTtjYXNlXCJ1Y3MyXCI6Y2FzZVwidWNzLTJcIjpjYXNlXCJ1dGYxNmxlXCI6Y2FzZVwidXRmLTE2bGVcIjpyZXR1cm4gV3IodGhpcyxyLHQsbik7ZGVmYXVsdDppZih1KXRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGVuY29kaW5nOiBcIitlKTtlPShcIlwiK2UpLnRvTG93ZXJDYXNlKCksdT0hMH19O2gucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybnt0eXBlOlwiQnVmZmVyXCIsZGF0YTpBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnJ8fHRoaXMsMCl9fTtmdW5jdGlvbiBqcihpLHIsdCl7cmV0dXJuIHI9PT0wJiZ0PT09aS5sZW5ndGg/Ry5mcm9tQnl0ZUFycmF5KGkpOkcuZnJvbUJ5dGVBcnJheShpLnNsaWNlKHIsdCkpfWZ1bmN0aW9uIGZyKGkscix0KXt0PU1hdGgubWluKGkubGVuZ3RoLHQpO2xldCBuPVtdLGU9cjtmb3IoO2U8dDspe2xldCBvPWlbZV0sdT1udWxsLGY9bz4yMzk/NDpvPjIyMz8zOm8+MTkxPzI6MTtpZihlK2Y8PXQpe2xldCBjLGwscyxwO3N3aXRjaChmKXtjYXNlIDE6bzwxMjgmJih1PW8pO2JyZWFrO2Nhc2UgMjpjPWlbZSsxXSwoYyYxOTIpPT09MTI4JiYocD0obyYzMSk8PDZ8YyY2MyxwPjEyNyYmKHU9cCkpO2JyZWFrO2Nhc2UgMzpjPWlbZSsxXSxsPWlbZSsyXSwoYyYxOTIpPT09MTI4JiYobCYxOTIpPT09MTI4JiYocD0obyYxNSk8PDEyfChjJjYzKTw8NnxsJjYzLHA+MjA0NyYmKHA8NTUyOTZ8fHA+NTczNDMpJiYodT1wKSk7YnJlYWs7Y2FzZSA0OmM9aVtlKzFdLGw9aVtlKzJdLHM9aVtlKzNdLChjJjE5Mik9PT0xMjgmJihsJjE5Mik9PT0xMjgmJihzJjE5Mik9PT0xMjgmJihwPShvJjE1KTw8MTh8KGMmNjMpPDwxMnwobCY2Myk8PDZ8cyY2MyxwPjY1NTM1JiZwPDExMTQxMTImJih1PXApKX19dT09PW51bGw/KHU9NjU1MzMsZj0xKTp1PjY1NTM1JiYodS09NjU1MzYsbi5wdXNoKHU+Pj4xMCYxMDIzfDU1Mjk2KSx1PTU2MzIwfHUmMTAyMyksbi5wdXNoKHUpLGUrPWZ9cmV0dXJuIEhyKG4pfXZhciBpcj00MDk2O2Z1bmN0aW9uIEhyKGkpe2xldCByPWkubGVuZ3RoO2lmKHI8PWlyKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZyxpKTtsZXQgdD1cIlwiLG49MDtmb3IoO248cjspdCs9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsaS5zbGljZShuLG4rPWlyKSk7cmV0dXJuIHR9ZnVuY3Rpb24gVnIoaSxyLHQpe2xldCBuPVwiXCI7dD1NYXRoLm1pbihpLmxlbmd0aCx0KTtmb3IobGV0IGU9cjtlPHQ7KytlKW4rPVN0cmluZy5mcm9tQ2hhckNvZGUoaVtlXSYxMjcpO3JldHVybiBufWZ1bmN0aW9uIFhyKGkscix0KXtsZXQgbj1cIlwiO3Q9TWF0aC5taW4oaS5sZW5ndGgsdCk7Zm9yKGxldCBlPXI7ZTx0OysrZSluKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGlbZV0pO3JldHVybiBufWZ1bmN0aW9uIHpyKGkscix0KXtsZXQgbj1pLmxlbmd0aDsoIXJ8fHI8MCkmJihyPTApLCghdHx8dDwwfHx0Pm4pJiYodD1uKTtsZXQgZT1cIlwiO2ZvcihsZXQgbz1yO288dDsrK28pZSs9dHRbaVtvXV07cmV0dXJuIGV9ZnVuY3Rpb24gSnIoaSxyLHQpe2xldCBuPWkuc2xpY2Uocix0KSxlPVwiXCI7Zm9yKGxldCBvPTA7bzxuLmxlbmd0aC0xO28rPTIpZSs9U3RyaW5nLmZyb21DaGFyQ29kZShuW29dK25bbysxXSoyNTYpO3JldHVybiBlfWgucHJvdG90eXBlLnNsaWNlPWZ1bmN0aW9uKHIsdCl7bGV0IG49dGhpcy5sZW5ndGg7cj1+fnIsdD10PT09dm9pZCAwP246fn50LHI8MD8ocis9bixyPDAmJihyPTApKTpyPm4mJihyPW4pLHQ8MD8odCs9bix0PDAmJih0PTApKTp0Pm4mJih0PW4pLHQ8ciYmKHQ9cik7bGV0IGU9dGhpcy5zdWJhcnJheShyLHQpO3JldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YoZSxoLnByb3RvdHlwZSksZX07ZnVuY3Rpb24gYShpLHIsdCl7aWYoaSUxIT09MHx8aTwwKXRocm93IG5ldyBSYW5nZUVycm9yKFwib2Zmc2V0IGlzIG5vdCB1aW50XCIpO2lmKGkrcj50KXRocm93IG5ldyBSYW5nZUVycm9yKFwiVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aFwiKX1oLnByb3RvdHlwZS5yZWFkVWludExFPWgucHJvdG90eXBlLnJlYWRVSW50TEU9ZnVuY3Rpb24ocix0LG4pe3I9cj4+PjAsdD10Pj4+MCxufHxhKHIsdCx0aGlzLmxlbmd0aCk7bGV0IGU9dGhpc1tyXSxvPTEsdT0wO2Zvcig7Kyt1PHQmJihvKj0yNTYpOyllKz10aGlzW3IrdV0qbztyZXR1cm4gZX07aC5wcm90b3R5cGUucmVhZFVpbnRCRT1oLnByb3RvdHlwZS5yZWFkVUludEJFPWZ1bmN0aW9uKHIsdCxuKXtyPXI+Pj4wLHQ9dD4+PjAsbnx8YShyLHQsdGhpcy5sZW5ndGgpO2xldCBlPXRoaXNbcistLXRdLG89MTtmb3IoO3Q+MCYmKG8qPTI1Nik7KWUrPXRoaXNbcistLXRdKm87cmV0dXJuIGV9O2gucHJvdG90eXBlLnJlYWRVaW50OD1oLnByb3RvdHlwZS5yZWFkVUludDg9ZnVuY3Rpb24ocix0KXtyZXR1cm4gcj1yPj4+MCx0fHxhKHIsMSx0aGlzLmxlbmd0aCksdGhpc1tyXX07aC5wcm90b3R5cGUucmVhZFVpbnQxNkxFPWgucHJvdG90eXBlLnJlYWRVSW50MTZMRT1mdW5jdGlvbihyLHQpe3JldHVybiByPXI+Pj4wLHR8fGEociwyLHRoaXMubGVuZ3RoKSx0aGlzW3JdfHRoaXNbcisxXTw8OH07aC5wcm90b3R5cGUucmVhZFVpbnQxNkJFPWgucHJvdG90eXBlLnJlYWRVSW50MTZCRT1mdW5jdGlvbihyLHQpe3JldHVybiByPXI+Pj4wLHR8fGEociwyLHRoaXMubGVuZ3RoKSx0aGlzW3JdPDw4fHRoaXNbcisxXX07aC5wcm90b3R5cGUucmVhZFVpbnQzMkxFPWgucHJvdG90eXBlLnJlYWRVSW50MzJMRT1mdW5jdGlvbihyLHQpe3JldHVybiByPXI+Pj4wLHR8fGEociw0LHRoaXMubGVuZ3RoKSwodGhpc1tyXXx0aGlzW3IrMV08PDh8dGhpc1tyKzJdPDwxNikrdGhpc1tyKzNdKjE2Nzc3MjE2fTtoLnByb3RvdHlwZS5yZWFkVWludDMyQkU9aC5wcm90b3R5cGUucmVhZFVJbnQzMkJFPWZ1bmN0aW9uKHIsdCl7cmV0dXJuIHI9cj4+PjAsdHx8YShyLDQsdGhpcy5sZW5ndGgpLHRoaXNbcl0qMTY3NzcyMTYrKHRoaXNbcisxXTw8MTZ8dGhpc1tyKzJdPDw4fHRoaXNbciszXSl9O2gucHJvdG90eXBlLnJlYWRCaWdVSW50NjRMRT1nKGZ1bmN0aW9uKHIpe3I9cj4+PjAsUihyLFwib2Zmc2V0XCIpO2xldCB0PXRoaXNbcl0sbj10aGlzW3IrN107KHQ9PT12b2lkIDB8fG49PT12b2lkIDApJiZfKHIsdGhpcy5sZW5ndGgtOCk7bGV0IGU9dCt0aGlzWysrcl0qMioqOCt0aGlzWysrcl0qMioqMTYrdGhpc1srK3JdKjIqKjI0LG89dGhpc1srK3JdK3RoaXNbKytyXSoyKio4K3RoaXNbKytyXSoyKioxNituKjIqKjI0O3JldHVybiBCaWdJbnQoZSkrKEJpZ0ludChvKTw8QmlnSW50KDMyKSl9KTtoLnByb3RvdHlwZS5yZWFkQmlnVUludDY0QkU9ZyhmdW5jdGlvbihyKXtyPXI+Pj4wLFIocixcIm9mZnNldFwiKTtsZXQgdD10aGlzW3JdLG49dGhpc1tyKzddOyh0PT09dm9pZCAwfHxuPT09dm9pZCAwKSYmXyhyLHRoaXMubGVuZ3RoLTgpO2xldCBlPXQqMioqMjQrdGhpc1srK3JdKjIqKjE2K3RoaXNbKytyXSoyKio4K3RoaXNbKytyXSxvPXRoaXNbKytyXSoyKioyNCt0aGlzWysrcl0qMioqMTYrdGhpc1srK3JdKjIqKjgrbjtyZXR1cm4oQmlnSW50KGUpPDxCaWdJbnQoMzIpKStCaWdJbnQobyl9KTtoLnByb3RvdHlwZS5yZWFkSW50TEU9ZnVuY3Rpb24ocix0LG4pe3I9cj4+PjAsdD10Pj4+MCxufHxhKHIsdCx0aGlzLmxlbmd0aCk7bGV0IGU9dGhpc1tyXSxvPTEsdT0wO2Zvcig7Kyt1PHQmJihvKj0yNTYpOyllKz10aGlzW3IrdV0qbztyZXR1cm4gbyo9MTI4LGU+PW8mJihlLT1NYXRoLnBvdygyLDgqdCkpLGV9O2gucHJvdG90eXBlLnJlYWRJbnRCRT1mdW5jdGlvbihyLHQsbil7cj1yPj4+MCx0PXQ+Pj4wLG58fGEocix0LHRoaXMubGVuZ3RoKTtsZXQgZT10LG89MSx1PXRoaXNbcistLWVdO2Zvcig7ZT4wJiYobyo9MjU2KTspdSs9dGhpc1tyKy0tZV0qbztyZXR1cm4gbyo9MTI4LHU+PW8mJih1LT1NYXRoLnBvdygyLDgqdCkpLHV9O2gucHJvdG90eXBlLnJlYWRJbnQ4PWZ1bmN0aW9uKHIsdCl7cmV0dXJuIHI9cj4+PjAsdHx8YShyLDEsdGhpcy5sZW5ndGgpLHRoaXNbcl0mMTI4PygyNTUtdGhpc1tyXSsxKSotMTp0aGlzW3JdfTtoLnByb3RvdHlwZS5yZWFkSW50MTZMRT1mdW5jdGlvbihyLHQpe3I9cj4+PjAsdHx8YShyLDIsdGhpcy5sZW5ndGgpO2xldCBuPXRoaXNbcl18dGhpc1tyKzFdPDw4O3JldHVybiBuJjMyNzY4P258NDI5NDkwMTc2MDpufTtoLnByb3RvdHlwZS5yZWFkSW50MTZCRT1mdW5jdGlvbihyLHQpe3I9cj4+PjAsdHx8YShyLDIsdGhpcy5sZW5ndGgpO2xldCBuPXRoaXNbcisxXXx0aGlzW3JdPDw4O3JldHVybiBuJjMyNzY4P258NDI5NDkwMTc2MDpufTtoLnByb3RvdHlwZS5yZWFkSW50MzJMRT1mdW5jdGlvbihyLHQpe3JldHVybiByPXI+Pj4wLHR8fGEociw0LHRoaXMubGVuZ3RoKSx0aGlzW3JdfHRoaXNbcisxXTw8OHx0aGlzW3IrMl08PDE2fHRoaXNbciszXTw8MjR9O2gucHJvdG90eXBlLnJlYWRJbnQzMkJFPWZ1bmN0aW9uKHIsdCl7cmV0dXJuIHI9cj4+PjAsdHx8YShyLDQsdGhpcy5sZW5ndGgpLHRoaXNbcl08PDI0fHRoaXNbcisxXTw8MTZ8dGhpc1tyKzJdPDw4fHRoaXNbciszXX07aC5wcm90b3R5cGUucmVhZEJpZ0ludDY0TEU9ZyhmdW5jdGlvbihyKXtyPXI+Pj4wLFIocixcIm9mZnNldFwiKTtsZXQgdD10aGlzW3JdLG49dGhpc1tyKzddOyh0PT09dm9pZCAwfHxuPT09dm9pZCAwKSYmXyhyLHRoaXMubGVuZ3RoLTgpO2xldCBlPXRoaXNbcis0XSt0aGlzW3IrNV0qMioqOCt0aGlzW3IrNl0qMioqMTYrKG48PDI0KTtyZXR1cm4oQmlnSW50KGUpPDxCaWdJbnQoMzIpKStCaWdJbnQodCt0aGlzWysrcl0qMioqOCt0aGlzWysrcl0qMioqMTYrdGhpc1srK3JdKjIqKjI0KX0pO2gucHJvdG90eXBlLnJlYWRCaWdJbnQ2NEJFPWcoZnVuY3Rpb24ocil7cj1yPj4+MCxSKHIsXCJvZmZzZXRcIik7bGV0IHQ9dGhpc1tyXSxuPXRoaXNbcis3XTsodD09PXZvaWQgMHx8bj09PXZvaWQgMCkmJl8ocix0aGlzLmxlbmd0aC04KTtsZXQgZT0odDw8MjQpK3RoaXNbKytyXSoyKioxNit0aGlzWysrcl0qMioqOCt0aGlzWysrcl07cmV0dXJuKEJpZ0ludChlKTw8QmlnSW50KDMyKSkrQmlnSW50KHRoaXNbKytyXSoyKioyNCt0aGlzWysrcl0qMioqMTYrdGhpc1srK3JdKjIqKjgrbil9KTtoLnByb3RvdHlwZS5yZWFkRmxvYXRMRT1mdW5jdGlvbihyLHQpe3JldHVybiByPXI+Pj4wLHR8fGEociw0LHRoaXMubGVuZ3RoKSxVLnJlYWQodGhpcyxyLCEwLDIzLDQpfTtoLnByb3RvdHlwZS5yZWFkRmxvYXRCRT1mdW5jdGlvbihyLHQpe3JldHVybiByPXI+Pj4wLHR8fGEociw0LHRoaXMubGVuZ3RoKSxVLnJlYWQodGhpcyxyLCExLDIzLDQpfTtoLnByb3RvdHlwZS5yZWFkRG91YmxlTEU9ZnVuY3Rpb24ocix0KXtyZXR1cm4gcj1yPj4+MCx0fHxhKHIsOCx0aGlzLmxlbmd0aCksVS5yZWFkKHRoaXMsciwhMCw1Miw4KX07aC5wcm90b3R5cGUucmVhZERvdWJsZUJFPWZ1bmN0aW9uKHIsdCl7cmV0dXJuIHI9cj4+PjAsdHx8YShyLDgsdGhpcy5sZW5ndGgpLFUucmVhZCh0aGlzLHIsITEsNTIsOCl9O2Z1bmN0aW9uIHkoaSxyLHQsbixlLG8pe2lmKCFoLmlzQnVmZmVyKGkpKXRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpO2lmKHI+ZXx8cjxvKXRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpO2lmKHQrbj5pLmxlbmd0aCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKX1oLnByb3RvdHlwZS53cml0ZVVpbnRMRT1oLnByb3RvdHlwZS53cml0ZVVJbnRMRT1mdW5jdGlvbihyLHQsbixlKXtpZihyPStyLHQ9dD4+PjAsbj1uPj4+MCwhZSl7bGV0IGY9TWF0aC5wb3coMiw4Km4pLTE7eSh0aGlzLHIsdCxuLGYsMCl9bGV0IG89MSx1PTA7Zm9yKHRoaXNbdF09ciYyNTU7Kyt1PG4mJihvKj0yNTYpOyl0aGlzW3QrdV09ci9vJjI1NTtyZXR1cm4gdCtufTtoLnByb3RvdHlwZS53cml0ZVVpbnRCRT1oLnByb3RvdHlwZS53cml0ZVVJbnRCRT1mdW5jdGlvbihyLHQsbixlKXtpZihyPStyLHQ9dD4+PjAsbj1uPj4+MCwhZSl7bGV0IGY9TWF0aC5wb3coMiw4Km4pLTE7eSh0aGlzLHIsdCxuLGYsMCl9bGV0IG89bi0xLHU9MTtmb3IodGhpc1t0K29dPXImMjU1Oy0tbz49MCYmKHUqPTI1Nik7KXRoaXNbdCtvXT1yL3UmMjU1O3JldHVybiB0K259O2gucHJvdG90eXBlLndyaXRlVWludDg9aC5wcm90b3R5cGUud3JpdGVVSW50OD1mdW5jdGlvbihyLHQsbil7cmV0dXJuIHI9K3IsdD10Pj4+MCxufHx5KHRoaXMscix0LDEsMjU1LDApLHRoaXNbdF09ciYyNTUsdCsxfTtoLnByb3RvdHlwZS53cml0ZVVpbnQxNkxFPWgucHJvdG90eXBlLndyaXRlVUludDE2TEU9ZnVuY3Rpb24ocix0LG4pe3JldHVybiByPStyLHQ9dD4+PjAsbnx8eSh0aGlzLHIsdCwyLDY1NTM1LDApLHRoaXNbdF09ciYyNTUsdGhpc1t0KzFdPXI+Pj44LHQrMn07aC5wcm90b3R5cGUud3JpdGVVaW50MTZCRT1oLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFPWZ1bmN0aW9uKHIsdCxuKXtyZXR1cm4gcj0rcix0PXQ+Pj4wLG58fHkodGhpcyxyLHQsMiw2NTUzNSwwKSx0aGlzW3RdPXI+Pj44LHRoaXNbdCsxXT1yJjI1NSx0KzJ9O2gucHJvdG90eXBlLndyaXRlVWludDMyTEU9aC5wcm90b3R5cGUud3JpdGVVSW50MzJMRT1mdW5jdGlvbihyLHQsbil7cmV0dXJuIHI9K3IsdD10Pj4+MCxufHx5KHRoaXMscix0LDQsNDI5NDk2NzI5NSwwKSx0aGlzW3QrM109cj4+PjI0LHRoaXNbdCsyXT1yPj4+MTYsdGhpc1t0KzFdPXI+Pj44LHRoaXNbdF09ciYyNTUsdCs0fTtoLnByb3RvdHlwZS53cml0ZVVpbnQzMkJFPWgucHJvdG90eXBlLndyaXRlVUludDMyQkU9ZnVuY3Rpb24ocix0LG4pe3JldHVybiByPStyLHQ9dD4+PjAsbnx8eSh0aGlzLHIsdCw0LDQyOTQ5NjcyOTUsMCksdGhpc1t0XT1yPj4+MjQsdGhpc1t0KzFdPXI+Pj4xNix0aGlzW3QrMl09cj4+PjgsdGhpc1t0KzNdPXImMjU1LHQrNH07ZnVuY3Rpb24gY3IoaSxyLHQsbixlKXt5cihyLG4sZSxpLHQsNyk7bGV0IG89TnVtYmVyKHImQmlnSW50KDQyOTQ5NjcyOTUpKTtpW3QrK109byxvPW8+PjgsaVt0KytdPW8sbz1vPj44LGlbdCsrXT1vLG89bz4+OCxpW3QrK109bztsZXQgdT1OdW1iZXIocj4+QmlnSW50KDMyKSZCaWdJbnQoNDI5NDk2NzI5NSkpO3JldHVybiBpW3QrK109dSx1PXU+PjgsaVt0KytdPXUsdT11Pj44LGlbdCsrXT11LHU9dT4+OCxpW3QrK109dSx0fWZ1bmN0aW9uIHByKGkscix0LG4sZSl7eXIocixuLGUsaSx0LDcpO2xldCBvPU51bWJlcihyJkJpZ0ludCg0Mjk0OTY3Mjk1KSk7aVt0KzddPW8sbz1vPj44LGlbdCs2XT1vLG89bz4+OCxpW3QrNV09byxvPW8+PjgsaVt0KzRdPW87bGV0IHU9TnVtYmVyKHI+PkJpZ0ludCgzMikmQmlnSW50KDQyOTQ5NjcyOTUpKTtyZXR1cm4gaVt0KzNdPXUsdT11Pj44LGlbdCsyXT11LHU9dT4+OCxpW3QrMV09dSx1PXU+PjgsaVt0XT11LHQrOH1oLnByb3RvdHlwZS53cml0ZUJpZ1VJbnQ2NExFPWcoZnVuY3Rpb24ocix0PTApe3JldHVybiBjcih0aGlzLHIsdCxCaWdJbnQoMCksQmlnSW50KFwiMHhmZmZmZmZmZmZmZmZmZmZmXCIpKX0pO2gucHJvdG90eXBlLndyaXRlQmlnVUludDY0QkU9ZyhmdW5jdGlvbihyLHQ9MCl7cmV0dXJuIHByKHRoaXMscix0LEJpZ0ludCgwKSxCaWdJbnQoXCIweGZmZmZmZmZmZmZmZmZmZmZcIikpfSk7aC5wcm90b3R5cGUud3JpdGVJbnRMRT1mdW5jdGlvbihyLHQsbixlKXtpZihyPStyLHQ9dD4+PjAsIWUpe2xldCBjPU1hdGgucG93KDIsOCpuLTEpO3kodGhpcyxyLHQsbixjLTEsLWMpfWxldCBvPTAsdT0xLGY9MDtmb3IodGhpc1t0XT1yJjI1NTsrK288biYmKHUqPTI1Nik7KXI8MCYmZj09PTAmJnRoaXNbdCtvLTFdIT09MCYmKGY9MSksdGhpc1t0K29dPShyL3U+PjApLWYmMjU1O3JldHVybiB0K259O2gucHJvdG90eXBlLndyaXRlSW50QkU9ZnVuY3Rpb24ocix0LG4sZSl7aWYocj0rcix0PXQ+Pj4wLCFlKXtsZXQgYz1NYXRoLnBvdygyLDgqbi0xKTt5KHRoaXMscix0LG4sYy0xLC1jKX1sZXQgbz1uLTEsdT0xLGY9MDtmb3IodGhpc1t0K29dPXImMjU1Oy0tbz49MCYmKHUqPTI1Nik7KXI8MCYmZj09PTAmJnRoaXNbdCtvKzFdIT09MCYmKGY9MSksdGhpc1t0K29dPShyL3U+PjApLWYmMjU1O3JldHVybiB0K259O2gucHJvdG90eXBlLndyaXRlSW50OD1mdW5jdGlvbihyLHQsbil7cmV0dXJuIHI9K3IsdD10Pj4+MCxufHx5KHRoaXMscix0LDEsMTI3LC0xMjgpLHI8MCYmKHI9MjU1K3IrMSksdGhpc1t0XT1yJjI1NSx0KzF9O2gucHJvdG90eXBlLndyaXRlSW50MTZMRT1mdW5jdGlvbihyLHQsbil7cmV0dXJuIHI9K3IsdD10Pj4+MCxufHx5KHRoaXMscix0LDIsMzI3NjcsLTMyNzY4KSx0aGlzW3RdPXImMjU1LHRoaXNbdCsxXT1yPj4+OCx0KzJ9O2gucHJvdG90eXBlLndyaXRlSW50MTZCRT1mdW5jdGlvbihyLHQsbil7cmV0dXJuIHI9K3IsdD10Pj4+MCxufHx5KHRoaXMscix0LDIsMzI3NjcsLTMyNzY4KSx0aGlzW3RdPXI+Pj44LHRoaXNbdCsxXT1yJjI1NSx0KzJ9O2gucHJvdG90eXBlLndyaXRlSW50MzJMRT1mdW5jdGlvbihyLHQsbil7cmV0dXJuIHI9K3IsdD10Pj4+MCxufHx5KHRoaXMscix0LDQsMjE0NzQ4MzY0NywtMjE0NzQ4MzY0OCksdGhpc1t0XT1yJjI1NSx0aGlzW3QrMV09cj4+PjgsdGhpc1t0KzJdPXI+Pj4xNix0aGlzW3QrM109cj4+PjI0LHQrNH07aC5wcm90b3R5cGUud3JpdGVJbnQzMkJFPWZ1bmN0aW9uKHIsdCxuKXtyZXR1cm4gcj0rcix0PXQ+Pj4wLG58fHkodGhpcyxyLHQsNCwyMTQ3NDgzNjQ3LC0yMTQ3NDgzNjQ4KSxyPDAmJihyPTQyOTQ5NjcyOTUrcisxKSx0aGlzW3RdPXI+Pj4yNCx0aGlzW3QrMV09cj4+PjE2LHRoaXNbdCsyXT1yPj4+OCx0aGlzW3QrM109ciYyNTUsdCs0fTtoLnByb3RvdHlwZS53cml0ZUJpZ0ludDY0TEU9ZyhmdW5jdGlvbihyLHQ9MCl7cmV0dXJuIGNyKHRoaXMscix0LC1CaWdJbnQoXCIweDgwMDAwMDAwMDAwMDAwMDBcIiksQmlnSW50KFwiMHg3ZmZmZmZmZmZmZmZmZmZmXCIpKX0pO2gucHJvdG90eXBlLndyaXRlQmlnSW50NjRCRT1nKGZ1bmN0aW9uKHIsdD0wKXtyZXR1cm4gcHIodGhpcyxyLHQsLUJpZ0ludChcIjB4ODAwMDAwMDAwMDAwMDAwMFwiKSxCaWdJbnQoXCIweDdmZmZmZmZmZmZmZmZmZmZcIikpfSk7ZnVuY3Rpb24gc3IoaSxyLHQsbixlLG8pe2lmKHQrbj5pLmxlbmd0aCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKTtpZih0PDApdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbmRleCBvdXQgb2YgcmFuZ2VcIil9ZnVuY3Rpb24gbHIoaSxyLHQsbixlKXtyZXR1cm4gcj0rcix0PXQ+Pj4wLGV8fHNyKGkscix0LDQsMzQwMjgyMzQ2NjM4NTI4ODZlMjIsLTM0MDI4MjM0NjYzODUyODg2ZTIyKSxVLndyaXRlKGkscix0LG4sMjMsNCksdCs0fWgucHJvdG90eXBlLndyaXRlRmxvYXRMRT1mdW5jdGlvbihyLHQsbil7cmV0dXJuIGxyKHRoaXMscix0LCEwLG4pfTtoLnByb3RvdHlwZS53cml0ZUZsb2F0QkU9ZnVuY3Rpb24ocix0LG4pe3JldHVybiBscih0aGlzLHIsdCwhMSxuKX07ZnVuY3Rpb24gYXIoaSxyLHQsbixlKXtyZXR1cm4gcj0rcix0PXQ+Pj4wLGV8fHNyKGkscix0LDgsMTc5NzY5MzEzNDg2MjMxNTdlMjkyLC0xNzk3NjkzMTM0ODYyMzE1N2UyOTIpLFUud3JpdGUoaSxyLHQsbiw1Miw4KSx0Kzh9aC5wcm90b3R5cGUud3JpdGVEb3VibGVMRT1mdW5jdGlvbihyLHQsbil7cmV0dXJuIGFyKHRoaXMscix0LCEwLG4pfTtoLnByb3RvdHlwZS53cml0ZURvdWJsZUJFPWZ1bmN0aW9uKHIsdCxuKXtyZXR1cm4gYXIodGhpcyxyLHQsITEsbil9O2gucHJvdG90eXBlLmNvcHk9ZnVuY3Rpb24ocix0LG4sZSl7aWYoIWguaXNCdWZmZXIocikpdGhyb3cgbmV3IFR5cGVFcnJvcihcImFyZ3VtZW50IHNob3VsZCBiZSBhIEJ1ZmZlclwiKTtpZihufHwobj0wKSwhZSYmZSE9PTAmJihlPXRoaXMubGVuZ3RoKSx0Pj1yLmxlbmd0aCYmKHQ9ci5sZW5ndGgpLHR8fCh0PTApLGU+MCYmZTxuJiYoZT1uKSxlPT09bnx8ci5sZW5ndGg9PT0wfHx0aGlzLmxlbmd0aD09PTApcmV0dXJuIDA7aWYodDwwKXRocm93IG5ldyBSYW5nZUVycm9yKFwidGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kc1wiKTtpZihuPDB8fG4+PXRoaXMubGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKFwiSW5kZXggb3V0IG9mIHJhbmdlXCIpO2lmKGU8MCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInNvdXJjZUVuZCBvdXQgb2YgYm91bmRzXCIpO2U+dGhpcy5sZW5ndGgmJihlPXRoaXMubGVuZ3RoKSxyLmxlbmd0aC10PGUtbiYmKGU9ci5sZW5ndGgtdCtuKTtsZXQgbz1lLW47cmV0dXJuIHRoaXM9PT1yJiZ0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbj09XCJmdW5jdGlvblwiP3RoaXMuY29weVdpdGhpbih0LG4sZSk6VWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwocix0aGlzLnN1YmFycmF5KG4sZSksdCksb307aC5wcm90b3R5cGUuZmlsbD1mdW5jdGlvbihyLHQsbixlKXtpZih0eXBlb2Ygcj09XCJzdHJpbmdcIil7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCI/KGU9dCx0PTAsbj10aGlzLmxlbmd0aCk6dHlwZW9mIG49PVwic3RyaW5nXCImJihlPW4sbj10aGlzLmxlbmd0aCksZSE9PXZvaWQgMCYmdHlwZW9mIGUhPVwic3RyaW5nXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcImVuY29kaW5nIG11c3QgYmUgYSBzdHJpbmdcIik7aWYodHlwZW9mIGU9PVwic3RyaW5nXCImJiFoLmlzRW5jb2RpbmcoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gZW5jb2Rpbmc6IFwiK2UpO2lmKHIubGVuZ3RoPT09MSl7bGV0IHU9ci5jaGFyQ29kZUF0KDApOyhlPT09XCJ1dGY4XCImJnU8MTI4fHxlPT09XCJsYXRpbjFcIikmJihyPXUpfX1lbHNlIHR5cGVvZiByPT1cIm51bWJlclwiP3I9ciYyNTU6dHlwZW9mIHI9PVwiYm9vbGVhblwiJiYocj1OdW1iZXIocikpO2lmKHQ8MHx8dGhpcy5sZW5ndGg8dHx8dGhpcy5sZW5ndGg8bil0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIk91dCBvZiByYW5nZSBpbmRleFwiKTtpZihuPD10KXJldHVybiB0aGlzO3Q9dD4+PjAsbj1uPT09dm9pZCAwP3RoaXMubGVuZ3RoOm4+Pj4wLHJ8fChyPTApO2xldCBvO2lmKHR5cGVvZiByPT1cIm51bWJlclwiKWZvcihvPXQ7bzxuOysrbyl0aGlzW29dPXI7ZWxzZXtsZXQgdT1oLmlzQnVmZmVyKHIpP3I6aC5mcm9tKHIsZSksZj11Lmxlbmd0aDtpZihmPT09MCl0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgdmFsdWUgXCInK3IrJ1wiIGlzIGludmFsaWQgZm9yIGFyZ3VtZW50IFwidmFsdWVcIicpO2ZvcihvPTA7bzxuLXQ7KytvKXRoaXNbbyt0XT11W28lZl19cmV0dXJuIHRoaXN9O3ZhciBBPXt9O2Z1bmN0aW9uIFYoaSxyLHQpe0FbaV09Y2xhc3MgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKCl7c3VwZXIoKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIm1lc3NhZ2VcIix7dmFsdWU6ci5hcHBseSh0aGlzLGFyZ3VtZW50cyksd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdGhpcy5uYW1lPWAke3RoaXMubmFtZX0gWyR7aX1dYCx0aGlzLnN0YWNrLGRlbGV0ZSB0aGlzLm5hbWV9Z2V0IGNvZGUoKXtyZXR1cm4gaX1zZXQgY29kZShlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNvZGVcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsdmFsdWU6ZSx3cml0YWJsZTohMH0pfXRvU3RyaW5nKCl7cmV0dXJuYCR7dGhpcy5uYW1lfSBbJHtpfV06ICR7dGhpcy5tZXNzYWdlfWB9fX1WKFwiRVJSX0JVRkZFUl9PVVRfT0ZfQk9VTkRTXCIsZnVuY3Rpb24oaSl7cmV0dXJuIGk/YCR7aX0gaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzYDpcIkF0dGVtcHQgdG8gYWNjZXNzIG1lbW9yeSBvdXRzaWRlIGJ1ZmZlciBib3VuZHNcIn0sUmFuZ2VFcnJvcik7VihcIkVSUl9JTlZBTElEX0FSR19UWVBFXCIsZnVuY3Rpb24oaSxyKXtyZXR1cm5gVGhlIFwiJHtpfVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2Ygcn1gfSxUeXBlRXJyb3IpO1YoXCJFUlJfT1VUX09GX1JBTkdFXCIsZnVuY3Rpb24oaSxyLHQpe2xldCBuPWBUaGUgdmFsdWUgb2YgXCIke2l9XCIgaXMgb3V0IG9mIHJhbmdlLmAsZT10O3JldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHQpJiZNYXRoLmFicyh0KT4yKiozMj9lPW5yKFN0cmluZyh0KSk6dHlwZW9mIHQ9PVwiYmlnaW50XCImJihlPVN0cmluZyh0KSwodD5CaWdJbnQoMikqKkJpZ0ludCgzMil8fHQ8LShCaWdJbnQoMikqKkJpZ0ludCgzMikpKSYmKGU9bnIoZSkpLGUrPVwiblwiKSxuKz1gIEl0IG11c3QgYmUgJHtyfS4gUmVjZWl2ZWQgJHtlfWAsbn0sUmFuZ2VFcnJvcik7ZnVuY3Rpb24gbnIoaSl7bGV0IHI9XCJcIix0PWkubGVuZ3RoLG49aVswXT09PVwiLVwiPzE6MDtmb3IoO3Q+PW4rNDt0LT0zKXI9YF8ke2kuc2xpY2UodC0zLHQpfSR7cn1gO3JldHVybmAke2kuc2xpY2UoMCx0KX0ke3J9YH1mdW5jdGlvbiBLcihpLHIsdCl7UihyLFwib2Zmc2V0XCIpLChpW3JdPT09dm9pZCAwfHxpW3IrdF09PT12b2lkIDApJiZfKHIsaS5sZW5ndGgtKHQrMSkpfWZ1bmN0aW9uIHlyKGkscix0LG4sZSxvKXtpZihpPnR8fGk8cil7bGV0IHU9dHlwZW9mIHI9PVwiYmlnaW50XCI/XCJuXCI6XCJcIixmO3Rocm93IG8+Mz9yPT09MHx8cj09PUJpZ0ludCgwKT9mPWA+PSAwJHt1fSBhbmQgPCAyJHt1fSAqKiAkeyhvKzEpKjh9JHt1fWA6Zj1gPj0gLSgyJHt1fSAqKiAkeyhvKzEpKjgtMX0ke3V9KSBhbmQgPCAyICoqICR7KG8rMSkqOC0xfSR7dX1gOmY9YD49ICR7cn0ke3V9IGFuZCA8PSAke3R9JHt1fWAsbmV3IEEuRVJSX09VVF9PRl9SQU5HRShcInZhbHVlXCIsZixpKX1LcihuLGUsbyl9ZnVuY3Rpb24gUihpLHIpe2lmKHR5cGVvZiBpIT1cIm51bWJlclwiKXRocm93IG5ldyBBLkVSUl9JTlZBTElEX0FSR19UWVBFKHIsXCJudW1iZXJcIixpKX1mdW5jdGlvbiBfKGkscix0KXt0aHJvdyBNYXRoLmZsb29yKGkpIT09aT8oUihpLHQpLG5ldyBBLkVSUl9PVVRfT0ZfUkFOR0UodHx8XCJvZmZzZXRcIixcImFuIGludGVnZXJcIixpKSk6cjwwP25ldyBBLkVSUl9CVUZGRVJfT1VUX09GX0JPVU5EUzpuZXcgQS5FUlJfT1VUX09GX1JBTkdFKHR8fFwib2Zmc2V0XCIsYD49ICR7dD8xOjB9IGFuZCA8PSAke3J9YCxpKX12YXIgWnI9L1teKy8wLTlBLVphLXotX10vZztmdW5jdGlvbiBRcihpKXtpZihpPWkuc3BsaXQoXCI9XCIpWzBdLGk9aS50cmltKCkucmVwbGFjZShacixcIlwiKSxpLmxlbmd0aDwyKXJldHVyblwiXCI7Zm9yKDtpLmxlbmd0aCU0IT09MDspaT1pK1wiPVwiO3JldHVybiBpfWZ1bmN0aW9uIFcoaSxyKXtyPXJ8fDEvMDtsZXQgdCxuPWkubGVuZ3RoLGU9bnVsbCxvPVtdO2ZvcihsZXQgdT0wO3U8bjsrK3Upe2lmKHQ9aS5jaGFyQ29kZUF0KHUpLHQ+NTUyOTUmJnQ8NTczNDQpe2lmKCFlKXtpZih0PjU2MzE5KXsoci09Myk+LTEmJm8ucHVzaCgyMzksMTkxLDE4OSk7Y29udGludWV9ZWxzZSBpZih1KzE9PT1uKXsoci09Myk+LTEmJm8ucHVzaCgyMzksMTkxLDE4OSk7Y29udGludWV9ZT10O2NvbnRpbnVlfWlmKHQ8NTYzMjApeyhyLT0zKT4tMSYmby5wdXNoKDIzOSwxOTEsMTg5KSxlPXQ7Y29udGludWV9dD0oZS01NTI5Njw8MTB8dC01NjMyMCkrNjU1MzZ9ZWxzZSBlJiYoci09Myk+LTEmJm8ucHVzaCgyMzksMTkxLDE4OSk7aWYoZT1udWxsLHQ8MTI4KXtpZigoci09MSk8MClicmVhaztvLnB1c2godCl9ZWxzZSBpZih0PDIwNDgpe2lmKChyLT0yKTwwKWJyZWFrO28ucHVzaCh0Pj42fDE5Mix0JjYzfDEyOCl9ZWxzZSBpZih0PDY1NTM2KXtpZigoci09Myk8MClicmVhaztvLnB1c2godD4+MTJ8MjI0LHQ+PjYmNjN8MTI4LHQmNjN8MTI4KX1lbHNlIGlmKHQ8MTExNDExMil7aWYoKHItPTQpPDApYnJlYWs7by5wdXNoKHQ+PjE4fDI0MCx0Pj4xMiY2M3wxMjgsdD4+NiY2M3wxMjgsdCY2M3wxMjgpfWVsc2UgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2RlIHBvaW50XCIpfXJldHVybiBvfWZ1bmN0aW9uIHZyKGkpe2xldCByPVtdO2ZvcihsZXQgdD0wO3Q8aS5sZW5ndGg7Kyt0KXIucHVzaChpLmNoYXJDb2RlQXQodCkmMjU1KTtyZXR1cm4gcn1mdW5jdGlvbiBydChpLHIpe2xldCB0LG4sZSxvPVtdO2ZvcihsZXQgdT0wO3U8aS5sZW5ndGgmJiEoKHItPTIpPDApOysrdSl0PWkuY2hhckNvZGVBdCh1KSxuPXQ+PjgsZT10JTI1NixvLnB1c2goZSksby5wdXNoKG4pO3JldHVybiBvfWZ1bmN0aW9uIHdyKGkpe3JldHVybiBHLnRvQnl0ZUFycmF5KFFyKGkpKX1mdW5jdGlvbiBEKGkscix0LG4pe2xldCBlO2ZvcihlPTA7ZTxuJiYhKGUrdD49ci5sZW5ndGh8fGU+PWkubGVuZ3RoKTsrK2UpcltlK3RdPWlbZV07cmV0dXJuIGV9ZnVuY3Rpb24gRShpLHIpe3JldHVybiBpIGluc3RhbmNlb2Ygcnx8aSE9bnVsbCYmaS5jb25zdHJ1Y3RvciE9bnVsbCYmaS5jb25zdHJ1Y3Rvci5uYW1lIT1udWxsJiZpLmNvbnN0cnVjdG9yLm5hbWU9PT1yLm5hbWV9ZnVuY3Rpb24gWChpKXtyZXR1cm4gaSE9PWl9dmFyIHR0PWZ1bmN0aW9uKCl7bGV0IGk9XCIwMTIzNDU2Nzg5YWJjZGVmXCIscj1uZXcgQXJyYXkoMjU2KTtmb3IobGV0IHQ9MDt0PDE2OysrdCl7bGV0IG49dCoxNjtmb3IobGV0IGU9MDtlPDE2OysrZSlyW24rZV09aVt0XStpW2VdfXJldHVybiByfSgpO2Z1bmN0aW9uIGcoaSl7cmV0dXJuIHR5cGVvZiBCaWdJbnQ+XCJ1XCI/aXQ6aX1mdW5jdGlvbiBpdCgpe3Rocm93IG5ldyBFcnJvcihcIkJpZ0ludCBub3Qgc3VwcG9ydGVkXCIpfX0pO3ZhciBDPXt9O0ZyKEMse2RlZmF1bHQ6KCk9Pm50fSk7bW9kdWxlLmV4cG9ydHM9QXIoQyk7dmFyIHhyPUooeigpKTtTKEMsSih6KCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgbnQ9eHIuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbmllZWU3NTQvaW5kZXguanM6XG4gICgqISBpZWVlNzU0LiBCU0QtMy1DbGF1c2UgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICopXG5cbmJ1ZmZlci9pbmRleC5qczpcbiAgKCohXG4gICAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICAgKlxuICAgKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICAgKiBAbGljZW5zZSAgTUlUXG4gICAqKVxuKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIEF4aW9zRXJyb3IobWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5uYW1lID0gJ0F4aW9zRXJyb3InO1xuICBjb2RlICYmICh0aGlzLmNvZGUgPSBjb2RlKTtcbiAgY29uZmlnICYmICh0aGlzLmNvbmZpZyA9IGNvbmZpZyk7XG4gIHJlcXVlc3QgJiYgKHRoaXMucmVxdWVzdCA9IHJlcXVlc3QpO1xuICByZXNwb25zZSAmJiAodGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlKTtcbn1cblxudXRpbHMuaW5oZXJpdHMoQXhpb3NFcnJvciwgRXJyb3IsIHtcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdXRpbHMudG9KU09OT2JqZWN0KHRoaXMuY29uZmlnKSxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHN0YXR1czogdGhpcy5yZXNwb25zZSAmJiB0aGlzLnJlc3BvbnNlLnN0YXR1cyA/IHRoaXMucmVzcG9uc2Uuc3RhdHVzIDogbnVsbFxuICAgIH07XG4gIH1cbn0pO1xuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc0Vycm9yLnByb3RvdHlwZTtcbmNvbnN0IGRlc2NyaXB0b3JzID0ge307XG5cbltcbiAgJ0VSUl9CQURfT1BUSU9OX1ZBTFVFJyxcbiAgJ0VSUl9CQURfT1BUSU9OJyxcbiAgJ0VDT05OQUJPUlRFRCcsXG4gICdFVElNRURPVVQnLFxuICAnRVJSX05FVFdPUksnLFxuICAnRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUycsXG4gICdFUlJfREVQUkVDQVRFRCcsXG4gICdFUlJfQkFEX1JFU1BPTlNFJyxcbiAgJ0VSUl9CQURfUkVRVUVTVCcsXG4gICdFUlJfQ0FOQ0VMRUQnLFxuICAnRVJSX05PVF9TVVBQT1JUJyxcbiAgJ0VSUl9JTlZBTElEX1VSTCdcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5dLmZvckVhY2goY29kZSA9PiB7XG4gIGRlc2NyaXB0b3JzW2NvZGVdID0ge3ZhbHVlOiBjb2RlfTtcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBeGlvc0Vycm9yLCBkZXNjcmlwdG9ycyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCAnaXNBeGlvc0Vycm9yJywge3ZhbHVlOiB0cnVlfSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5BeGlvc0Vycm9yLmZyb20gPSAoZXJyb3IsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UsIGN1c3RvbVByb3BzKSA9PiB7XG4gIGNvbnN0IGF4aW9zRXJyb3IgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG5cbiAgdXRpbHMudG9GbGF0T2JqZWN0KGVycm9yLCBheGlvc0Vycm9yLCBmdW5jdGlvbiBmaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gRXJyb3IucHJvdG90eXBlO1xuICB9LCBwcm9wID0+IHtcbiAgICByZXR1cm4gcHJvcCAhPT0gJ2lzQXhpb3NFcnJvcic7XG4gIH0pO1xuXG4gIEF4aW9zRXJyb3IuY2FsbChheGlvc0Vycm9yLCBlcnJvci5tZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKTtcblxuICBheGlvc0Vycm9yLmNhdXNlID0gZXJyb3I7XG5cbiAgYXhpb3NFcnJvci5uYW1lID0gZXJyb3IubmFtZTtcblxuICBjdXN0b21Qcm9wcyAmJiBPYmplY3QuYXNzaWduKGF4aW9zRXJyb3IsIGN1c3RvbVByb3BzKTtcblxuICByZXR1cm4gYXhpb3NFcnJvcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zRXJyb3I7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc3RyaWN0XG5leHBvcnQgZGVmYXVsdCBudWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbmNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICAgKi9cbiAgdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgICAgZnVsZmlsbGVkLFxuICAgICAgcmVqZWN0ZWQsXG4gICAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICAgKlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBpbnRlcmNlcHRvciB3YXMgcmVtb3ZlZCwgYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIGVqZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBpbnRlcmNlcHRvcnMgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xuICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICAgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmb3JFYWNoKGZuKSB7XG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgICBmbihoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0cmFuc2Zvcm1EYXRhIGZyb20gJy4vdHJhbnNmb3JtRGF0YS5qcyc7XG5pbXBvcnQgaXNDYW5jZWwgZnJvbSAnLi4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBhZGFwdGVycyBmcm9tIFwiLi4vYWRhcHRlcnMvYWRhcHRlcnMuanNcIjtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgIGNvbmZpZyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5kZXhPZihjb25maWcubWV0aG9kKSAhPT0gLTEpIHtcbiAgICBjb25maWcuaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgYWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXIoY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcik7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICBjb25maWcsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICByZXNwb25zZVxuICAgICk7XG5cbiAgICByZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVhc29uLnJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcGFyYW0gez9PYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZm5zLCByZXNwb25zZSkge1xuICBjb25zdCBjb25maWcgPSB0aGlzIHx8IGRlZmF1bHRzO1xuICBjb25zdCBjb250ZXh0ID0gcmVzcG9uc2UgfHwgY29uZmlnO1xuICBjb25zdCBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29udGV4dC5oZWFkZXJzKTtcbiAgbGV0IGRhdGEgPSBjb250ZXh0LmRhdGE7XG5cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbi5jYWxsKGNvbmZpZywgZGF0YSwgaGVhZGVycy5ub3JtYWxpemUoKSwgcmVzcG9uc2UgPyByZXNwb25zZS5zdGF0dXMgOiB1bmRlZmluZWQpO1xuICB9KTtcblxuICBoZWFkZXJzLm5vcm1hbGl6ZSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHRvVVJMRW5jb2RlZEZvcm0gZnJvbSAnLi4vaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcsIHRyaWVzIHRvIHBhcnNlIGl0LCBhbmQgaWYgaXQgZmFpbHMsIGl0IHJldHVybnMgdGhlIHN0cmluZ2lmaWVkIHZlcnNpb25cbiAqIG9mIHRoZSBpbnB1dFxuICpcbiAqIEBwYXJhbSB7YW55fSByYXdWYWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBzdHJpbmdpZmllZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcnNlciAtIEEgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYSBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5jb2RlciAtIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgc3RyaW5nLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5naWZpZWQgdmVyc2lvbiBvZiB0aGUgcmF3VmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xufVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcblxuICB0cmFuc2l0aW9uYWw6IHRyYW5zaXRpb25hbERlZmF1bHRzLFxuXG4gIGFkYXB0ZXI6IFsneGhyJywgJ2h0dHAnXSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSBoZWFkZXJzLmdldENvbnRlbnRUeXBlKCkgfHwgJyc7XG4gICAgY29uc3QgaGFzSlNPTkNvbnRlbnRUeXBlID0gY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpID4gLTE7XG4gICAgY29uc3QgaXNPYmplY3RQYXlsb2FkID0gdXRpbHMuaXNPYmplY3QoZGF0YSk7XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkICYmIHV0aWxzLmlzSFRNTEZvcm0oZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBuZXcgRm9ybURhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGb3JtRGF0YSA9IHV0aWxzLmlzRm9ybURhdGEoZGF0YSk7XG5cbiAgICBpZiAoaXNGb3JtRGF0YSkge1xuICAgICAgaWYgKCFoYXNKU09OQ29udGVudFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzSlNPTkNvbnRlbnRUeXBlID8gSlNPTi5zdHJpbmdpZnkoZm9ybURhdGFUb0pTT04oZGF0YSkpIDogZGF0YTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04JywgZmFsc2UpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBsZXQgaXNGaWxlTGlzdDtcblxuICAgIGlmIChpc09iamVjdFBheWxvYWQpIHtcbiAgICAgIGlmIChjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIHRoaXMuZm9ybVNlcmlhbGl6ZXIpLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoaXNGaWxlTGlzdCA9IHV0aWxzLmlzRmlsZUxpc3QoZGF0YSkpIHx8IGNvbnRlbnRUeXBlLmluZGV4T2YoJ211bHRpcGFydC9mb3JtLWRhdGEnKSA+IC0xKSB7XG4gICAgICAgIGNvbnN0IF9Gb3JtRGF0YSA9IHRoaXMuZW52ICYmIHRoaXMuZW52LkZvcm1EYXRhO1xuXG4gICAgICAgIHJldHVybiB0b0Zvcm1EYXRhKFxuICAgICAgICAgIGlzRmlsZUxpc3QgPyB7J2ZpbGVzW10nOiBkYXRhfSA6IGRhdGEsXG4gICAgICAgICAgX0Zvcm1EYXRhICYmIG5ldyBfRm9ybURhdGEoKSxcbiAgICAgICAgICB0aGlzLmZvcm1TZXJpYWxpemVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCB8fCBoYXNKU09OQ29udGVudFR5cGUgKSB7XG4gICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi9qc29uJywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeVNhZmVseShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbmFsID0gdGhpcy50cmFuc2l0aW9uYWwgfHwgZGVmYXVsdHMudHJhbnNpdGlvbmFsO1xuICAgIGNvbnN0IGZvcmNlZEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5mb3JjZWRKU09OUGFyc2luZztcbiAgICBjb25zdCBKU09OUmVxdWVzdGVkID0gdGhpcy5yZXNwb25zZVR5cGUgPT09ICdqc29uJztcblxuICAgIGlmIChkYXRhICYmIHV0aWxzLmlzU3RyaW5nKGRhdGEpICYmICgoZm9yY2VkSlNPTlBhcnNpbmcgJiYgIXRoaXMucmVzcG9uc2VUeXBlKSB8fCBKU09OUmVxdWVzdGVkKSkge1xuICAgICAgY29uc3Qgc2lsZW50SlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLnNpbGVudEpTT05QYXJzaW5nO1xuICAgICAgY29uc3Qgc3RyaWN0SlNPTlBhcnNpbmcgPSAhc2lsZW50SlNPTlBhcnNpbmcgJiYgSlNPTlJlcXVlc3RlZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChzdHJpY3RKU09OUGFyc2luZykge1xuICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IEF4aW9zRXJyb3IuZnJvbShlLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIHRoaXMsIG51bGwsIHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcblxuICBlbnY6IHtcbiAgICBGb3JtRGF0YTogcGxhdGZvcm0uY2xhc3Nlcy5Gb3JtRGF0YSxcbiAgICBCbG9iOiBwbGF0Zm9ybS5jbGFzc2VzLkJsb2JcbiAgfSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9LFxuXG4gIGhlYWRlcnM6IHtcbiAgICBjb21tb246IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgKG1ldGhvZCkgPT4ge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaWxlbnRKU09OUGFyc2luZzogdHJ1ZSxcbiAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXG4gIGNsYXJpZnlUaW1lb3V0RXJyb3I6IGZhbHNlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Gb3JtRGF0YShkYXRhLCBuZXcgcGxhdGZvcm0uY2xhc3Nlcy5VUkxTZWFyY2hQYXJhbXMoKSwgT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaXRvcjogZnVuY3Rpb24odmFsdWUsIGtleSwgcGF0aCwgaGVscGVycykge1xuICAgICAgaWYgKHBsYXRmb3JtLmlzTm9kZSAmJiB1dGlscy5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZS50b1N0cmluZygnYmFzZTY0JykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWxwZXJzLmRlZmF1bHRWaXNpdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCBvcHRpb25zKSk7XG59XG4iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi9ub2RlL2luZGV4LmpzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi51dGlscyxcbiAgLi4ucGxhdGZvcm1cbn1cbiIsImltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcydcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuL2NsYXNzZXMvRm9ybURhdGEuanMnXG5pbXBvcnQgQmxvYiBmcm9tICcuL2NsYXNzZXMvQmxvYi5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0Jyb3dzZXI6IHRydWUsXG4gIGNsYXNzZXM6IHtcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgRm9ybURhdGEsXG4gICAgQmxvYlxuICB9LFxuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmaWxlJywgJ2Jsb2InLCAndXJsJywgJ2RhdGEnXVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgPyBVUkxTZWFyY2hQYXJhbXMgOiBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyA/IEZvcm1EYXRhIDogbnVsbDtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iIDogbnVsbFxuIiwiY29uc3QgaGFzQnJvd3NlckVudiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBoYXNTdGFuZGFyZEJyb3dzZXJFbnYgPSAoXG4gIChwcm9kdWN0KSA9PiB7XG4gICAgcmV0dXJuIGhhc0Jyb3dzZXJFbnYgJiYgWydSZWFjdE5hdGl2ZScsICdOYXRpdmVTY3JpcHQnLCAnTlMnXS5pbmRleE9mKHByb2R1Y3QpIDwgMFxuICB9KSh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIHdlYldvcmtlciBlbnZpcm9ubWVudFxuICpcbiAqIEFsdGhvdWdoIHRoZSBgaXNTdGFuZGFyZEJyb3dzZXJFbnZgIG1ldGhvZCBpbmRpY2F0ZXMgdGhhdFxuICogYGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyYCwgdGhlIFdlYldvcmtlciB3aWxsIHN0aWxsIGJlXG4gKiBmaWx0ZXJlZCBvdXQgZHVlIHRvIGl0cyBqdWRnbWVudCBzdGFuZGFyZFxuICogYHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdgLlxuICogVGhpcyBsZWFkcyB0byBhIHByb2JsZW0gd2hlbiBheGlvcyBwb3N0IGBGb3JtRGF0YWAgaW4gd2ViV29ya2VyXG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudiA9ICgoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSAmJlxuICAgIHR5cGVvZiBzZWxmLmltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbidcbiAgKTtcbn0pKCk7XG5cbmV4cG9ydCB7XG4gIGhhc0Jyb3dzZXJFbnYsXG4gIGhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudixcbiAgaGFzU3RhbmRhcmRCcm93c2VyRW52XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcgbGlrZSBgZm9vW3hdW3ldW3pdYCBhbmQgcmV0dXJucyBhbiBhcnJheSBsaWtlIGBbJ2ZvbycsICd4JywgJ3knLCAneiddXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICpcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUHJvcFBhdGgobmFtZSkge1xuICAvLyBmb29beF1beV1bel1cbiAgLy8gZm9vLngueS56XG4gIC8vIGZvby14LXktelxuICAvLyBmb28geCB5IHpcbiAgcmV0dXJuIHV0aWxzLm1hdGNoQWxsKC9cXHcrfFxcWyhcXHcqKV0vZywgbmFtZSkubWFwKG1hdGNoID0+IHtcbiAgICByZXR1cm4gbWF0Y2hbMF0gPT09ICdbXScgPyAnJyA6IG1hdGNoWzFdIHx8IG1hdGNoWzBdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGFycmF5IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjb252ZXJ0IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBrZXlzIGFuZCB2YWx1ZXMgYXMgdGhlIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycikge1xuICBjb25zdCBvYmogPSB7fTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFycik7XG4gIGxldCBpO1xuICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGtleTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICBvYmpba2V5XSA9IGFycltrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBGb3JtRGF0YSBvYmplY3QgYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGNvbnZlcnQgdG8gSlNPTi5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZywgYW55PiB8IG51bGx9IFRoZSBjb252ZXJ0ZWQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBmb3JtRGF0YVRvSlNPTihmb3JtRGF0YSkge1xuICBmdW5jdGlvbiBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldCwgaW5kZXgpIHtcbiAgICBsZXQgbmFtZSA9IHBhdGhbaW5kZXgrK107XG4gICAgY29uc3QgaXNOdW1lcmljS2V5ID0gTnVtYmVyLmlzRmluaXRlKCtuYW1lKTtcbiAgICBjb25zdCBpc0xhc3QgPSBpbmRleCA+PSBwYXRoLmxlbmd0aDtcbiAgICBuYW1lID0gIW5hbWUgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXQpID8gdGFyZ2V0Lmxlbmd0aCA6IG5hbWU7XG5cbiAgICBpZiAoaXNMYXN0KSB7XG4gICAgICBpZiAodXRpbHMuaGFzT3duUHJvcCh0YXJnZXQsIG5hbWUpKSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IFt0YXJnZXRbbmFtZV0sIHZhbHVlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtuYW1lXSB8fCAhdXRpbHMuaXNPYmplY3QodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXRbbmFtZV0sIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBhcnJheVRvT2JqZWN0KHRhcmdldFtuYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gIH1cblxuICBpZiAodXRpbHMuaXNGb3JtRGF0YShmb3JtRGF0YSkgJiYgdXRpbHMuaXNGdW5jdGlvbihmb3JtRGF0YS5lbnRyaWVzKSkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuXG4gICAgdXRpbHMuZm9yRWFjaEVudHJ5KGZvcm1EYXRhLCAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgIGJ1aWxkUGF0aChwYXJzZVByb3BQYXRoKG5hbWUpLCB2YWx1ZSwgb2JqLCAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybURhdGFUb0pTT047XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcGFyc2VIZWFkZXJzIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzJztcblxuY29uc3QgJGludGVybmFscyA9IFN5bWJvbCgnaW50ZXJuYWxzJyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlciAmJiBTdHJpbmcoaGVhZGVyKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKG5vcm1hbGl6ZVZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW5zKHN0cikge1xuICBjb25zdCB0b2tlbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCB0b2tlbnNSRSA9IC8oW15cXHMsOz1dKylcXHMqKD86PVxccyooW14sO10rKSk/L2c7XG4gIGxldCBtYXRjaDtcblxuICB3aGlsZSAoKG1hdGNoID0gdG9rZW5zUkUuZXhlYyhzdHIpKSkge1xuICAgIHRva2Vuc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmNvbnN0IGlzVmFsaWRIZWFkZXJOYW1lID0gKHN0cikgPT4gL15bLV9hLXpBLVowLTleYHx+LCEjJCUmJyorLl0rJC8udGVzdChzdHIudHJpbSgpKTtcblxuZnVuY3Rpb24gbWF0Y2hIZWFkZXJWYWx1ZShjb250ZXh0LCB2YWx1ZSwgaGVhZGVyLCBmaWx0ZXIsIGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICBpZiAodXRpbHMuaXNGdW5jdGlvbihmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKHRoaXMsIHZhbHVlLCBoZWFkZXIpO1xuICB9XG5cbiAgaWYgKGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICAgIHZhbHVlID0gaGVhZGVyO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHJldHVybjtcblxuICBpZiAodXRpbHMuaXNTdHJpbmcoZmlsdGVyKSkge1xuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKGZpbHRlcikgIT09IC0xO1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzUmVnRXhwKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLnRlc3QodmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlci50cmltKClcbiAgICAudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oW2EtelxcZF0pKFxcdyopL2csICh3LCBjaGFyLCBzdHIpID0+IHtcbiAgICAgIHJldHVybiBjaGFyLnRvVXBwZXJDYXNlKCkgKyBzdHI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQWNjZXNzb3JzKG9iaiwgaGVhZGVyKSB7XG4gIGNvbnN0IGFjY2Vzc29yTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKCcgJyArIGhlYWRlcik7XG5cbiAgWydnZXQnLCAnc2V0JywgJ2hhcyddLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbWV0aG9kTmFtZSArIGFjY2Vzc29yTmFtZSwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uY2FsbCh0aGlzLCBoZWFkZXIsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbn1cblxuY2xhc3MgQXhpb3NIZWFkZXJzIHtcbiAgY29uc3RydWN0b3IoaGVhZGVycykge1xuICAgIGhlYWRlcnMgJiYgdGhpcy5zZXQoaGVhZGVycyk7XG4gIH1cblxuICBzZXQoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSwgcmV3cml0ZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpIHtcbiAgICAgIGNvbnN0IGxIZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmICghbEhlYWRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hlYWRlciBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgbEhlYWRlcik7XG5cbiAgICAgIGlmKCFrZXkgfHwgc2VsZltrZXldID09PSB1bmRlZmluZWQgfHwgX3Jld3JpdGUgPT09IHRydWUgfHwgKF9yZXdyaXRlID09PSB1bmRlZmluZWQgJiYgc2VsZltrZXldICE9PSBmYWxzZSkpIHtcbiAgICAgICAgc2VsZltrZXkgfHwgX2hlYWRlcl0gPSBub3JtYWxpemVWYWx1ZShfdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEhlYWRlcnMgPSAoaGVhZGVycywgX3Jld3JpdGUpID0+XG4gICAgICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIChfdmFsdWUsIF9oZWFkZXIpID0+IHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSk7XG5cbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChoZWFkZXIpIHx8IGhlYWRlciBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IpIHtcbiAgICAgIHNldEhlYWRlcnMoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSlcbiAgICB9IGVsc2UgaWYodXRpbHMuaXNTdHJpbmcoaGVhZGVyKSAmJiAoaGVhZGVyID0gaGVhZGVyLnRyaW0oKSkgJiYgIWlzVmFsaWRIZWFkZXJOYW1lKGhlYWRlcikpIHtcbiAgICAgIHNldEhlYWRlcnMocGFyc2VIZWFkZXJzKGhlYWRlciksIHZhbHVlT3JSZXdyaXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyICE9IG51bGwgJiYgc2V0SGVhZGVyKHZhbHVlT3JSZXdyaXRlLCBoZWFkZXIsIHJld3JpdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KGhlYWRlciwgcGFyc2VyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG5cbiAgICAgICAgaWYgKCFwYXJzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VyID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5zKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmNhbGwodGhpcywgdmFsdWUsIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNSZWdFeHAocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuZXhlYyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJzZXIgbXVzdCBiZSBib29sZWFufHJlZ2V4cHxmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhcyhoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgcmV0dXJuICEhKGtleSAmJiB0aGlzW2tleV0gIT09IHVuZGVmaW5lZCAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZSh0aGlzLCB0aGlzW2tleV0sIGtleSwgbWF0Y2hlcikpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkZWxldGUoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUhlYWRlcihfaGVhZGVyKSB7XG4gICAgICBfaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoX2hlYWRlcikge1xuICAgICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIF9oZWFkZXIpO1xuXG4gICAgICAgIGlmIChrZXkgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUoc2VsZiwgc2VsZltrZXldLCBrZXksIG1hdGNoZXIpKSkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxmW2tleV07XG5cbiAgICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5KGhlYWRlcikpIHtcbiAgICAgIGhlYWRlci5mb3JFYWNoKGRlbGV0ZUhlYWRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZUhlYWRlcihoZWFkZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgY2xlYXIobWF0Y2hlcikge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZSh0aGlzLCB0aGlzW2tleV0sIGtleSwgbWF0Y2hlciwgdHJ1ZSkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cblxuICBub3JtYWxpemUoZm9ybWF0KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShoZWFkZXJzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHNlbGZba2V5XSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgZGVsZXRlIHNlbGZbaGVhZGVyXTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3JtYWxpemVkID0gZm9ybWF0ID8gZm9ybWF0SGVhZGVyKGhlYWRlcikgOiBTdHJpbmcoaGVhZGVyKS50cmltKCk7XG5cbiAgICAgIGlmIChub3JtYWxpemVkICE9PSBoZWFkZXIpIHtcbiAgICAgICAgZGVsZXRlIHNlbGZbaGVhZGVyXTtcbiAgICAgIH1cblxuICAgICAgc2VsZltub3JtYWxpemVkXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcblxuICAgICAgaGVhZGVyc1tub3JtYWxpemVkXSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbmNhdCguLi50YXJnZXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY29uY2F0KHRoaXMsIC4uLnRhcmdldHMpO1xuICB9XG5cbiAgdG9KU09OKGFzU3RyaW5ncykge1xuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSAmJiAob2JqW2hlYWRlcl0gPSBhc1N0cmluZ3MgJiYgdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSkubWFwKChbaGVhZGVyLCB2YWx1ZV0pID0+IGhlYWRlciArICc6ICcgKyB2YWx1ZSkuam9pbignXFxuJyk7XG4gIH1cblxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuICdBeGlvc0hlYWRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGZyb20odGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiB0aGlzID8gdGhpbmcgOiBuZXcgdGhpcyh0aGluZyk7XG4gIH1cblxuICBzdGF0aWMgY29uY2F0KGZpcnN0LCAuLi50YXJnZXRzKSB7XG4gICAgY29uc3QgY29tcHV0ZWQgPSBuZXcgdGhpcyhmaXJzdCk7XG5cbiAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gY29tcHV0ZWQuc2V0KHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVkO1xuICB9XG5cbiAgc3RhdGljIGFjY2Vzc29yKGhlYWRlcikge1xuICAgIGNvbnN0IGludGVybmFscyA9IHRoaXNbJGludGVybmFsc10gPSAodGhpc1skaW50ZXJuYWxzXSA9IHtcbiAgICAgIGFjY2Vzc29yczoge31cbiAgICB9KTtcblxuICAgIGNvbnN0IGFjY2Vzc29ycyA9IGludGVybmFscy5hY2Nlc3NvcnM7XG4gICAgY29uc3QgcHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG5cbiAgICBmdW5jdGlvbiBkZWZpbmVBY2Nlc3NvcihfaGVhZGVyKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWFjY2Vzc29yc1tsSGVhZGVyXSkge1xuICAgICAgICBidWlsZEFjY2Vzc29ycyhwcm90b3R5cGUsIF9oZWFkZXIpO1xuICAgICAgICBhY2Nlc3NvcnNbbEhlYWRlcl0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHV0aWxzLmlzQXJyYXkoaGVhZGVyKSA/IGhlYWRlci5mb3JFYWNoKGRlZmluZUFjY2Vzc29yKSA6IGRlZmluZUFjY2Vzc29yKGhlYWRlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5BeGlvc0hlYWRlcnMuYWNjZXNzb3IoWydDb250ZW50LVR5cGUnLCAnQ29udGVudC1MZW5ndGgnLCAnQWNjZXB0JywgJ0FjY2VwdC1FbmNvZGluZycsICdVc2VyLUFnZW50JywgJ0F1dGhvcml6YXRpb24nXSk7XG5cbi8vIHJlc2VydmVkIG5hbWVzIGhvdGZpeFxudXRpbHMucmVkdWNlRGVzY3JpcHRvcnMoQXhpb3NIZWFkZXJzLnByb3RvdHlwZSwgKHt2YWx1ZX0sIGtleSkgPT4ge1xuICBsZXQgbWFwcGVkID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7IC8vIG1hcCBgc2V0YCA9PiBgU2V0YFxuICByZXR1cm4ge1xuICAgIGdldDogKCkgPT4gdmFsdWUsXG4gICAgc2V0KGhlYWRlclZhbHVlKSB7XG4gICAgICB0aGlzW21hcHBlZF0gPSBoZWFkZXJWYWx1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG51dGlscy5mcmVlemVNZXRob2RzKEF4aW9zSGVhZGVycyk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zSGVhZGVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG4vLyBSYXdBeGlvc0hlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG5jb25zdCBpZ25vcmVEdXBsaWNhdGVPZiA9IHV0aWxzLnRvT2JqZWN0U2V0KFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dKTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhd0hlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHJhd0hlYWRlcnMgPT4ge1xuICBjb25zdCBwYXJzZWQgPSB7fTtcbiAgbGV0IGtleTtcbiAgbGV0IHZhbDtcbiAgbGV0IGk7XG5cbiAgcmF3SGVhZGVycyAmJiByYXdIZWFkZXJzLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGkpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IGxpbmUuc3Vic3RyaW5nKGkgKyAxKS50cmltKCk7XG5cbiAgICBpZiAoIWtleSB8fCAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2Zba2V5XSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSkge1xuICAgICAgICBwYXJzZWRba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IFt2YWxdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsZWRFcnJvcmAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdD19IHJlcXVlc3QgVGhlIHJlcXVlc3QuXG4gKlxuICogQHJldHVybnMge0NhbmNlbGVkRXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgQXhpb3NFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UgPT0gbnVsbCA/ICdjYW5jZWxlZCcgOiBtZXNzYWdlLCBBeGlvc0Vycm9yLkVSUl9DQU5DRUxFRCwgY29uZmlnLCByZXF1ZXN0KTtcbiAgdGhpcy5uYW1lID0gJ0NhbmNlbGVkRXJyb3InO1xufVxuXG51dGlscy5pbmhlcml0cyhDYW5jZWxlZEVycm9yLCBBeGlvc0Vycm9yLCB7XG4gIF9fQ0FOQ0VMX186IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxlZEVycm9yO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBodHRwQWRhcHRlciBmcm9tICcuL2h0dHAuanMnO1xuaW1wb3J0IHhockFkYXB0ZXIgZnJvbSAnLi94aHIuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSBcIi4uL2NvcmUvQXhpb3NFcnJvci5qc1wiO1xuXG5jb25zdCBrbm93bkFkYXB0ZXJzID0ge1xuICBodHRwOiBodHRwQWRhcHRlcixcbiAgeGhyOiB4aHJBZGFwdGVyXG59XG5cbnV0aWxzLmZvckVhY2goa25vd25BZGFwdGVycywgKGZuLCB2YWx1ZSkgPT4ge1xuICBpZiAoZm4pIHtcbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnbmFtZScsIHt2YWx1ZX0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICdhZGFwdGVyTmFtZScsIHt2YWx1ZX0pO1xuICB9XG59KTtcblxuY29uc3QgcmVuZGVyUmVhc29uID0gKHJlYXNvbikgPT4gYC0gJHtyZWFzb259YDtcblxuY29uc3QgaXNSZXNvbHZlZEhhbmRsZSA9IChhZGFwdGVyKSA9PiB1dGlscy5pc0Z1bmN0aW9uKGFkYXB0ZXIpIHx8IGFkYXB0ZXIgPT09IG51bGwgfHwgYWRhcHRlciA9PT0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0QWRhcHRlcjogKGFkYXB0ZXJzKSA9PiB7XG4gICAgYWRhcHRlcnMgPSB1dGlscy5pc0FycmF5KGFkYXB0ZXJzKSA/IGFkYXB0ZXJzIDogW2FkYXB0ZXJzXTtcblxuICAgIGNvbnN0IHtsZW5ndGh9ID0gYWRhcHRlcnM7XG4gICAgbGV0IG5hbWVPckFkYXB0ZXI7XG4gICAgbGV0IGFkYXB0ZXI7XG5cbiAgICBjb25zdCByZWplY3RlZFJlYXNvbnMgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hbWVPckFkYXB0ZXIgPSBhZGFwdGVyc1tpXTtcbiAgICAgIGxldCBpZDtcblxuICAgICAgYWRhcHRlciA9IG5hbWVPckFkYXB0ZXI7XG5cbiAgICAgIGlmICghaXNSZXNvbHZlZEhhbmRsZShuYW1lT3JBZGFwdGVyKSkge1xuICAgICAgICBhZGFwdGVyID0ga25vd25BZGFwdGVyc1soaWQgPSBTdHJpbmcobmFtZU9yQWRhcHRlcikpLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgIGlmIChhZGFwdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgVW5rbm93biBhZGFwdGVyICcke2lkfSdgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmVqZWN0ZWRSZWFzb25zW2lkIHx8ICcjJyArIGldID0gYWRhcHRlcjtcbiAgICB9XG5cbiAgICBpZiAoIWFkYXB0ZXIpIHtcblxuICAgICAgY29uc3QgcmVhc29ucyA9IE9iamVjdC5lbnRyaWVzKHJlamVjdGVkUmVhc29ucylcbiAgICAgICAgLm1hcCgoW2lkLCBzdGF0ZV0pID0+IGBhZGFwdGVyICR7aWR9IGAgK1xuICAgICAgICAgIChzdGF0ZSA9PT0gZmFsc2UgPyAnaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW52aXJvbm1lbnQnIDogJ2lzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJ1aWxkJylcbiAgICAgICAgKTtcblxuICAgICAgbGV0IHMgPSBsZW5ndGggP1xuICAgICAgICAocmVhc29ucy5sZW5ndGggPiAxID8gJ3NpbmNlIDpcXG4nICsgcmVhc29ucy5tYXAocmVuZGVyUmVhc29uKS5qb2luKCdcXG4nKSA6ICcgJyArIHJlbmRlclJlYXNvbihyZWFzb25zWzBdKSkgOlxuICAgICAgICAnYXMgbm8gYWRhcHRlciBzcGVjaWZpZWQnO1xuXG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgYFRoZXJlIGlzIG5vIHN1aXRhYmxlIGFkYXB0ZXIgdG8gZGlzcGF0Y2ggdGhlIHJlcXVlc3QgYCArIHMsXG4gICAgICAgICdFUlJfTk9UX1NVUFBPUlQnXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhZGFwdGVyO1xuICB9LFxuICBhZGFwdGVyczoga25vd25BZGFwdGVyc1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgc2V0dGxlIGZyb20gJy4vLi4vY29yZS9zZXR0bGUuanMnO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnLi8uLi9oZWxwZXJzL2Nvb2tpZXMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4vLi4vaGVscGVycy9idWlsZFVSTC5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuLi9jb3JlL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IGlzVVJMU2FtZU9yaWdpbiBmcm9tICcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBwYXJzZVByb3RvY29sIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgc3BlZWRvbWV0ZXIgZnJvbSAnLi4vaGVscGVycy9zcGVlZG9tZXRlci5qcyc7XG5cbmZ1bmN0aW9uIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGxpc3RlbmVyLCBpc0Rvd25sb2FkU3RyZWFtKSB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG5cbiAgcmV0dXJuIGUgPT4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm9ncmVzc0J5dGVzID0gbG9hZGVkIC0gYnl0ZXNOb3RpZmllZDtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBsb2FkZWQgPD0gdG90YWw7XG5cbiAgICBieXRlc05vdGlmaWVkID0gbG9hZGVkO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxvYWRlZCxcbiAgICAgIHRvdGFsLFxuICAgICAgcHJvZ3Jlc3M6IHRvdGFsID8gKGxvYWRlZCAvIHRvdGFsKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ5dGVzOiBwcm9ncmVzc0J5dGVzLFxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBlc3RpbWF0ZWQ6IHJhdGUgJiYgdG90YWwgJiYgaW5SYW5nZSA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGVcbiAgICB9O1xuXG4gICAgZGF0YVtpc0Rvd25sb2FkU3RyZWFtID8gJ2Rvd25sb2FkJyA6ICd1cGxvYWQnXSA9IHRydWU7XG5cbiAgICBsaXN0ZW5lcihkYXRhKTtcbiAgfTtcbn1cblxuY29uc3QgaXNYSFJBZGFwdGVyU3VwcG9ydGVkID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgaXNYSFJBZGFwdGVyU3VwcG9ydGVkICYmIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKS5ub3JtYWxpemUoKTtcbiAgICBsZXQge3Jlc3BvbnNlVHlwZSwgd2l0aFhTUkZUb2tlbn0gPSBjb25maWc7XG4gICAgbGV0IG9uQ2FuY2VsZWQ7XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnRUeXBlO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52IHx8IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudikge1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShmYWxzZSk7IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICAgIH0gZWxzZSBpZiAoKGNvbnRlbnRUeXBlID0gcmVxdWVzdEhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSkgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGZpeCBzZW1pY29sb24gZHVwbGljYXRpb24gaXNzdWUgZm9yIFJlYWN0TmF0aXZlIEZvcm1EYXRhIGltcGxlbWVudGF0aW9uXG4gICAgICAgIGNvbnN0IFt0eXBlLCAuLi50b2tlbnNdID0gY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpLmZpbHRlcihCb29sZWFuKSA6IFtdO1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShbdHlwZSB8fCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIC4uLnRva2Vuc10uam9pbignOyAnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oXG4gICAgICAgICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgJiYgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBBeGlvc0Vycm9yLkVSUl9ORVRXT1JLLCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dCA/ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52KSB7XG4gICAgICB3aXRoWFNSRlRva2VuICYmIHV0aWxzLmlzRnVuY3Rpb24od2l0aFhTUkZUb2tlbikgJiYgKHdpdGhYU1JGVG9rZW4gPSB3aXRoWFNSRlRva2VuKGNvbmZpZykpO1xuXG4gICAgICBpZiAod2l0aFhTUkZUb2tlbiB8fCAod2l0aFhTUkZUb2tlbiAhPT0gZmFsc2UgJiYgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkpIHtcbiAgICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IGNvbmZpZy54c3JmSGVhZGVyTmFtZSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgJiYgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSk7XG5cbiAgICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICAgIHJlcXVlc3RIZWFkZXJzLnNldChjb25maWcueHNyZkhlYWRlck5hbWUsIHhzcmZWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgcmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCAmJiByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShudWxsKTtcblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLnRvSlNPTigpLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcywgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzc0V2ZW50UmVkdWNlcihjb25maWcub25VcGxvYWRQcm9ncmVzcykpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4gfHwgY29uZmlnLnNpZ25hbCkge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIG9uQ2FuY2VsZWQgPSBjYW5jZWwgPT4ge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCFjYW5jZWwgfHwgY2FuY2VsLnR5cGUgPyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcsIHJlcXVlc3QpIDogY2FuY2VsKTtcbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbiAmJiBjb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5hYm9ydGVkID8gb25DYW5jZWxlZCgpIDogY29uZmlnLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VQcm90b2NvbChmdWxsUGF0aCk7XG5cbiAgICBpZiAocHJvdG9jb2wgJiYgcGxhdGZvcm0ucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdVbnN1cHBvcnRlZCBwcm90b2NvbCAnICsgcHJvdG9jb2wgKyAnOicsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL0F4aW9zRXJyb3IuanMnO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IFRoZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIFtBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFXVtNYXRoLmZsb29yKHJlc3BvbnNlLnN0YXR1cyAvIDEwMCkgLSA0XSxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICB7XG4gICAgd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBbbmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSldO1xuXG4gICAgICB1dGlscy5pc051bWJlcihleHBpcmVzKSAmJiBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG5cbiAgICAgIHV0aWxzLmlzU3RyaW5nKHBhdGgpICYmIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcblxuICAgICAgdXRpbHMuaXNTdHJpbmcoZG9tYWluKSAmJiBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuXG4gICAgICBzZWN1cmUgPT09IHRydWUgJiYgY29va2llLnB1c2goJ3NlY3VyZScpO1xuXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICB9LFxuXG4gICAgcmVhZChuYW1lKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgIH0sXG5cbiAgICByZW1vdmUobmFtZSkge1xuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICB9XG4gIH1cblxuICA6XG5cbiAgLy8gTm9uLXN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICB7XG4gICAgd3JpdGUoKSB7fSxcbiAgICByZWFkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmUoKSB7fVxuICB9O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XG5pbXBvcnQgY29tYmluZVVSTHMgZnJvbSAnLi4vaGVscGVycy9jb21iaW5lVVJMcy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGQrXFwtLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52ID9cblxuLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICBjb25zdCBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBjb25zdCB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdHMgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgbGV0IGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlUHJvdG9jb2wodXJsKSB7XG4gIGNvbnN0IG1hdGNoID0gL14oWy0rXFx3XXsxLDI1fSkoOj9cXC9cXC98OikvLmV4ZWModXJsKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBkYXRhIG1heFJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2FtcGxlc0NvdW50PSAxMF1cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbWluPSAxMDAwXVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBzcGVlZG9tZXRlcihzYW1wbGVzQ291bnQsIG1pbikge1xuICBzYW1wbGVzQ291bnQgPSBzYW1wbGVzQ291bnQgfHwgMTA7XG4gIGNvbnN0IGJ5dGVzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGNvbnN0IHRpbWVzdGFtcHMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgbGV0IGhlYWQgPSAwO1xuICBsZXQgdGFpbCA9IDA7XG4gIGxldCBmaXJzdFNhbXBsZVRTO1xuXG4gIG1pbiA9IG1pbiAhPT0gdW5kZWZpbmVkID8gbWluIDogMTAwMDtcblxuICByZXR1cm4gZnVuY3Rpb24gcHVzaChjaHVua0xlbmd0aCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBjb25zdCBzdGFydGVkQXQgPSB0aW1lc3RhbXBzW3RhaWxdO1xuXG4gICAgaWYgKCFmaXJzdFNhbXBsZVRTKSB7XG4gICAgICBmaXJzdFNhbXBsZVRTID0gbm93O1xuICAgIH1cblxuICAgIGJ5dGVzW2hlYWRdID0gY2h1bmtMZW5ndGg7XG4gICAgdGltZXN0YW1wc1toZWFkXSA9IG5vdztcblxuICAgIGxldCBpID0gdGFpbDtcbiAgICBsZXQgYnl0ZXNDb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoaSAhPT0gaGVhZCkge1xuICAgICAgYnl0ZXNDb3VudCArPSBieXRlc1tpKytdO1xuICAgICAgaSA9IGkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaGVhZCA9IChoZWFkICsgMSkgJSBzYW1wbGVzQ291bnQ7XG5cbiAgICBpZiAoaGVhZCA9PT0gdGFpbCkge1xuICAgICAgdGFpbCA9ICh0YWlsICsgMSkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaWYgKG5vdyAtIGZpcnN0U2FtcGxlVFMgPCBtaW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXNzZWQgPSBzdGFydGVkQXQgJiYgbm93IC0gc3RhcnRlZEF0O1xuXG4gICAgcmV0dXJuIHBhc3NlZCA/IE1hdGgucm91bmQoYnl0ZXNDb3VudCAqIDEwMDAgLyBwYXNzZWQpIDogdW5kZWZpbmVkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzcGVlZG9tZXRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vQXhpb3NIZWFkZXJzLmpzXCI7XG5cbmNvbnN0IGhlYWRlcnNUb09iamVjdCA9ICh0aGluZykgPT4gdGhpbmcgaW5zdGFuY2VvZiBBeGlvc0hlYWRlcnMgPyB0aGluZy50b0pTT04oKSA6IHRoaW5nO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICBjb25zdCBjb25maWcgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSwgY2FzZWxlc3MpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlLmNhbGwoe2Nhc2VsZXNzfSwgdGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKGEsIGIsIGNhc2VsZXNzKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGEsIGIsIGNhc2VsZXNzKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSwgY2FzZWxlc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMoYSwgYiwgcHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWVyZ2VNYXAgPSB7XG4gICAgdXJsOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIG1ldGhvZDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBkYXRhOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGJhc2VVUkw6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVxdWVzdDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXNwb25zZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBwYXJhbXNTZXJpYWxpemVyOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dE1lc3NhZ2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhYU1JGVG9rZW46IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYWRhcHRlcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZVR5cGU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkNvb2tpZU5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkhlYWRlck5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25VcGxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgZGVjb21wcmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhDb250ZW50TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heEJvZHlMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYmVmb3JlUmVkaXJlY3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNwb3J0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwc0FnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGNhbmNlbFRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHNvY2tldFBhdGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VFbmNvZGluZzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB2YWxpZGF0ZVN0YXR1czogbWVyZ2VEaXJlY3RLZXlzLFxuICAgIGhlYWRlcnM6IChhLCBiKSA9PiBtZXJnZURlZXBQcm9wZXJ0aWVzKGhlYWRlcnNUb09iamVjdChhKSwgaGVhZGVyc1RvT2JqZWN0KGIpLCB0cnVlKVxuICB9O1xuXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnMSwgY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIGNvbnN0IG1lcmdlID0gbWVyZ2VNYXBbcHJvcF0gfHwgbWVyZ2VEZWVwUHJvcGVydGllcztcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IG1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0sIHByb3ApO1xuICAgICh1dGlscy5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cykgfHwgKGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1ZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaCgodHlwZSwgaSkgPT4ge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxuY29uc3QgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG5cbi8qKlxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnZhbGlkYXRvcnMudHJhbnNpdGlvbmFsID0gZnVuY3Rpb24gdHJhbnNpdGlvbmFsKHZhbGlkYXRvciwgdmVyc2lvbiwgbWVzc2FnZSkge1xuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAnW0F4aW9zIHYnICsgVkVSU0lPTiArICddIFRyYW5zaXRpb25hbCBvcHRpb24gXFwnJyArIG9wdCArICdcXCcnICsgZGVzYyArIChtZXNzYWdlID8gJy4gJyArIG1lc3NhZ2UgOiAnJyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gKHZhbHVlLCBvcHQsIG9wdHMpID0+IHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSxcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiAhZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0pIHtcbiAgICAgIGRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdID0gdHJ1ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgb3B0LFxuICAgICAgICAgICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSB2JyArIHZlcnNpb24gKyAnIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5lYXIgZnV0dXJlJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgY29uc3Qgb3B0ID0ga2V5c1tpXTtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBzY2hlbWFbb3B0XTtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnNcbn07XG4iLCJleHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiMS42LjJcIjsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vQ2FuY2VsZWRFcnJvci5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybnMge0NhbmNlbFRva2VufVxuICovXG5jbGFzcyBDYW5jZWxUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XG4gICAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlUHJvbWlzZTtcblxuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IHRoaXM7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuKGNhbmNlbCA9PiB7XG4gICAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgICAgbGV0IGkgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgdG9rZW4uX2xpc3RlbmVyc1tpXShjYW5jZWwpO1xuICAgICAgfVxuICAgICAgdG9rZW4uX2xpc3RlbmVycyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuID0gb25mdWxmaWxsZWQgPT4ge1xuICAgICAgbGV0IF9yZXNvbHZlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdG9rZW4uc3Vic2NyaWJlKHJlc29sdmUpO1xuICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB9KS50aGVuKG9uZnVsZmlsbGVkKTtcblxuICAgICAgcHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiByZWplY3QoKSB7XG4gICAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gICAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICAgKi9cbiAgdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIHRocm93IHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICBsaXN0ZW5lcih0aGlzLnJlYXNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAgICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAgICovXG4gIHN0YXRpYyBzb3VyY2UoKSB7XG4gICAgbGV0IGNhbmNlbDtcbiAgICBjb25zdCB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgICBjYW5jZWwgPSBjO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICB0b2tlbixcbiAgICAgIGNhbmNlbFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiB1dGlscy5pc09iamVjdChwYXlsb2FkKSAmJiAocGF5bG9hZC5pc0F4aW9zRXJyb3IgPT09IHRydWUpO1xufVxuIiwiY29uc3QgSHR0cFN0YXR1c0NvZGUgPSB7XG4gIENvbnRpbnVlOiAxMDAsXG4gIFN3aXRjaGluZ1Byb3RvY29sczogMTAxLFxuICBQcm9jZXNzaW5nOiAxMDIsXG4gIEVhcmx5SGludHM6IDEwMyxcbiAgT2s6IDIwMCxcbiAgQ3JlYXRlZDogMjAxLFxuICBBY2NlcHRlZDogMjAyLFxuICBOb25BdXRob3JpdGF0aXZlSW5mb3JtYXRpb246IDIwMyxcbiAgTm9Db250ZW50OiAyMDQsXG4gIFJlc2V0Q29udGVudDogMjA1LFxuICBQYXJ0aWFsQ29udGVudDogMjA2LFxuICBNdWx0aVN0YXR1czogMjA3LFxuICBBbHJlYWR5UmVwb3J0ZWQ6IDIwOCxcbiAgSW1Vc2VkOiAyMjYsXG4gIE11bHRpcGxlQ2hvaWNlczogMzAwLFxuICBNb3ZlZFBlcm1hbmVudGx5OiAzMDEsXG4gIEZvdW5kOiAzMDIsXG4gIFNlZU90aGVyOiAzMDMsXG4gIE5vdE1vZGlmaWVkOiAzMDQsXG4gIFVzZVByb3h5OiAzMDUsXG4gIFVudXNlZDogMzA2LFxuICBUZW1wb3JhcnlSZWRpcmVjdDogMzA3LFxuICBQZXJtYW5lbnRSZWRpcmVjdDogMzA4LFxuICBCYWRSZXF1ZXN0OiA0MDAsXG4gIFVuYXV0aG9yaXplZDogNDAxLFxuICBQYXltZW50UmVxdWlyZWQ6IDQwMixcbiAgRm9yYmlkZGVuOiA0MDMsXG4gIE5vdEZvdW5kOiA0MDQsXG4gIE1ldGhvZE5vdEFsbG93ZWQ6IDQwNSxcbiAgTm90QWNjZXB0YWJsZTogNDA2LFxuICBQcm94eUF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDQwNyxcbiAgUmVxdWVzdFRpbWVvdXQ6IDQwOCxcbiAgQ29uZmxpY3Q6IDQwOSxcbiAgR29uZTogNDEwLFxuICBMZW5ndGhSZXF1aXJlZDogNDExLFxuICBQcmVjb25kaXRpb25GYWlsZWQ6IDQxMixcbiAgUGF5bG9hZFRvb0xhcmdlOiA0MTMsXG4gIFVyaVRvb0xvbmc6IDQxNCxcbiAgVW5zdXBwb3J0ZWRNZWRpYVR5cGU6IDQxNSxcbiAgUmFuZ2VOb3RTYXRpc2ZpYWJsZTogNDE2LFxuICBFeHBlY3RhdGlvbkZhaWxlZDogNDE3LFxuICBJbUFUZWFwb3Q6IDQxOCxcbiAgTWlzZGlyZWN0ZWRSZXF1ZXN0OiA0MjEsXG4gIFVucHJvY2Vzc2FibGVFbnRpdHk6IDQyMixcbiAgTG9ja2VkOiA0MjMsXG4gIEZhaWxlZERlcGVuZGVuY3k6IDQyNCxcbiAgVG9vRWFybHk6IDQyNSxcbiAgVXBncmFkZVJlcXVpcmVkOiA0MjYsXG4gIFByZWNvbmRpdGlvblJlcXVpcmVkOiA0MjgsXG4gIFRvb01hbnlSZXF1ZXN0czogNDI5LFxuICBSZXF1ZXN0SGVhZGVyRmllbGRzVG9vTGFyZ2U6IDQzMSxcbiAgVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnM6IDQ1MSxcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogNTAwLFxuICBOb3RJbXBsZW1lbnRlZDogNTAxLFxuICBCYWRHYXRld2F5OiA1MDIsXG4gIFNlcnZpY2VVbmF2YWlsYWJsZTogNTAzLFxuICBHYXRld2F5VGltZW91dDogNTA0LFxuICBIdHRwVmVyc2lvbk5vdFN1cHBvcnRlZDogNTA1LFxuICBWYXJpYW50QWxzb05lZ290aWF0ZXM6IDUwNixcbiAgSW5zdWZmaWNpZW50U3RvcmFnZTogNTA3LFxuICBMb29wRGV0ZWN0ZWQ6IDUwOCxcbiAgTm90RXh0ZW5kZWQ6IDUxMCxcbiAgTmV0d29ya0F1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDUxMSxcbn07XG5cbk9iamVjdC5lbnRyaWVzKEh0dHBTdGF0dXNDb2RlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgSHR0cFN0YXR1c0NvZGVbdmFsdWVdID0ga2V5O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBTdGF0dXNDb2RlO1xuIiwiY29uc3QgYnJvd3Nlckxpc3QgPSBbXHJcbiAge1xyXG4gICAgYnNfbmFtZTogXCLngavni5DmtY/op4jlmahcIixcclxuICAgIGJzX3RhZzogXCJmaXJlZm94XCJcclxuICB9LFxyXG4gIHtcclxuICAgIGJzX25hbWU6IFwiZWRnZea1j+iniOWZqFwiLFxyXG4gICAgYnNfdGFnOiBcImVkZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBic19uYW1lOiBcIm9wZXJhXCIsXHJcbiAgICBic190YWc6IFwib3ByXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGJzX25hbWU6IFwi5LiW55WM5LmL56qXXCIsXHJcbiAgICBic190YWc6IFwidGhld29ybGRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgYnNfbmFtZTogXCLpgajmuLhcIixcclxuICAgIGJzX3RhZzogXCJtYXh0aG9uXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGJzX25hbWU6IFwiUVHmtY/op4jlmahcIixcclxuICAgIGJzX3RhZzogXCJxcWJyb3dzZXJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgYnNfbmFtZTogXCIzNjDmtY/op4jlmahcIixcclxuICAgIGJzX3RhZzogXCIzNjBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgYnNfbmFtZTogXCLmkJzni5fmtY/op4jlmahcIixcclxuICAgIGJzX3RhZzogXCJtZXRhc3JcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgYnNfbmFtZTogXCJ1Y+a1j+iniOWZqFwiLFxyXG4gICAgYnNfdGFnOiBcInVicm93c2VcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgYnNfbmFtZTogXCLnjI7osblcIixcclxuICAgIGJzX3RhZzogXCJsYmJyb3dzZXJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgYnNfbmFtZTogXCLlvq7kv6HmtY/op4jlmahcIixcclxuICAgIGJzX3RhZzogXCJtaWNyb21lc3NlbmdlclwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBic19uYW1lOiBcIuWwj+exs+a1j+iniOWZqFwiLFxyXG4gICAgYnNfdGFnOiBcIm1pdWlicm93c2VyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGJzX25hbWU6IFwi55m+5bqm5rWP6KeI5ZmoXCIsXHJcbiAgICBic190YWc6IFwiYmFpZHVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgYnNfbmFtZTogXCIyMzQ15rWP6KeI5ZmoXCIsXHJcbiAgICBic190YWc6IFwiMjM0NWV4cGxvcmVyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGJzX25hbWU6IFwiSUXmtY/op4jlmahcIixcclxuICAgIGJzX3RhZzogXCJtc2llXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGJzX25hbWU6IFwiSUUxMea1j+iniOWZqFwiLFxyXG4gICAgYnNfdGFnOiBcInJ2OjExLjBcIlxyXG4gIH1cclxuXVxyXG5jb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcclxuY29uc3QgdXNlckFnZW50RGF0YSA9IG5hdmlnYXRvci51c2VyQWdlbnREYXRhIHx8IHsgYnJhbmRzOiBbXSB9XHJcblxyXG4vLyDpgJrov4fmtY/op4jlmajmoIfor4bojrflj5bmtY/op4jlmajniYjmnKzlj7dcclxuY29uc3QgZ2V0QnNWZXJzaW9uID0gKHRhZykgPT4ge1xyXG4gIGNvbnN0IGJyb3dzZXIgPSB1c2VyQWdlbnRcclxuICAgIC5zcGxpdChcIiBcIilcclxuICAgIC5maW5kKChpdGVtKSA9PiBpdGVtLmluZGV4T2YodGFnKSA+IC0xKVxyXG4gICAgLnNwbGl0KFwiL1wiKVxyXG4gIHJldHVybiBicm93c2VyWzFdIHx8IGdldEJzVmVyc2lvbihcImNocm9tZVwiKVxyXG59XHJcblxyXG4vLyDliKTmlq3mmK/lkKbmmK/pgajmuLjmtY/op4jlmahcclxuY29uc3QgaXNNYXh0aG9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB3aW5kb3cubWF4dGhvblxyXG59XHJcblxyXG4vLyDliKTmlq3mmK/lkKbmmK8zNjDmtY/op4jlmajvvIznroDljZXpgJrov4fmtY/op4jlmajkv6Hmga/ml6Dms5XliKTmlq1cclxuY29uc3QgaXMzNjAgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gZmFsc2VcclxuICBmb3IgKHZhciBrZXkgaW4gbmF2aWdhdG9yLnBsdWdpbnMpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IucGx1Z2luc1trZXldLmZpbGVuYW1lID09IFwiaW50ZXJuYWwtbmFjbC1wbHVnaW5cIikge1xyXG4gICAgICByZXR1cm4gIXJlc3VsdFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8vIOiOt+WPlua1j+iniOWZqOS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0QnNJbmZvID0gKGxpc3QgPSBbXSkgPT4ge1xyXG4gIGlmIChpc01heHRob24oKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYnNfbmFtZTogXCLpgajmuLjmtY/op4jlmahcIixcclxuICAgICAgYnNfdGFnOiBcIm1heHRob25cIixcclxuICAgICAgYnNfdmVyc2lvbjogZ2V0QnNWZXJzaW9uKFwiY2hyb21lXCIpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh1c2VyQWdlbnREYXRhLmJyYW5kcy5zb21lKChpdGVtKSA9PiBpdGVtLmJyYW5kID09PSBcIkdvb2dsZSBDaHJvbWVcIikpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJzX25hbWU6IFwiY2hyb21l5rWP6KeI5ZmoXCIsXHJcbiAgICAgIGJzX3RhZzogXCJjaHJvbWVcIixcclxuICAgICAgYnNfdmVyc2lvbjogZ2V0QnNWZXJzaW9uKFwiY2hyb21lXCIpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcInNhZmFyaVwiKSA+IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKFwiY2hyb21lXCIpID09PSAtMSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYnNfbmFtZTogXCJzYWZhcmnmtY/op4jlmahcIixcclxuICAgICAgYnNfdGFnOiBcInNhZmFyaVwiLFxyXG4gICAgICBic192ZXJzaW9uOiBnZXRCc1ZlcnNpb24oXCJzYWZhcmlcIilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaXNCcm93c2VyID0gYnJvd3Nlckxpc3RcclxuICAgIC5jb25jYXQobGlzdClcclxuICAgIC5maW5kKChpdGVtKSA9PiB1c2VyQWdlbnQuaW5kZXhPZihpdGVtLmJzX3RhZykgPiAtMSlcclxuICBpZiAoaXNCcm93c2VyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBic19uYW1lOiBpc0Jyb3dzZXIuYnNfbmFtZSxcclxuICAgICAgYnNfdGFnOiBpc0Jyb3dzZXIuYnNfdGFnLFxyXG4gICAgICBic192ZXJzaW9uOiBnZXRCc1ZlcnNpb24oaXNCcm93c2VyLmJzX3RhZylcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGlzMzYwKCkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBic19uYW1lOiBcIjM2MOa1j+iniOWZqFwiLFxyXG4gICAgICAgIGJzX3RhZzogXCIzNjBcIixcclxuICAgICAgICBic192ZXJzaW9uOiBnZXRCc1ZlcnNpb24oXCJjaHJvbWVcIilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYnNfbmFtZTogXCLmnKrnn6XmtY/op4jlmahcIixcclxuICAgICAgYnNfdGFnOiBcIm90aGVyXCIsXHJcbiAgICAgIGJzX3ZlcnNpb246IFwiXCJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPUygpIHtcclxuICB2YXIgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgaWYgKCEhdS5tYXRjaCgvY29tcGF0aWJsZS9pKSB8fCB1Lm1hdGNoKC9XaW5kb3dzL2kpKSB7XHJcbiAgICAgIHJldHVybiAnd2luZG93cyc7XHJcbiAgfSBlbHNlIGlmICghIXUubWF0Y2goL01hY2ludG9zaC9pKSB8fCB1Lm1hdGNoKC9NYWNJbnRlbC9pKSkge1xyXG4gICAgICByZXR1cm4gJ21hY09TJztcclxuICB9IGVsc2UgaWYgKCEhdS5tYXRjaCgvaXBob25lL2kpIHx8IHUubWF0Y2goL0lwYWQvaSkpIHtcclxuICAgICAgcmV0dXJuICdpb3MnO1xyXG4gIH0gZWxzZSBpZiAoISF1Lm1hdGNoKC9hbmRyb2lkL2kpKSB7XHJcbiAgICAgIHJldHVybiAnYW5kcm9pZCc7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdvdGhlcic7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImNvbnRlbnQuNjcyY2FjNmIuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);