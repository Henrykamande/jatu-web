module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/ali-footer","2":"components/desk-menu-copy","3":"components/home-about","4":"components/home-clearance","5":"components/home-desktop-menu-copy","6":"components/home-header","7":"components/home-hotmax-slider","8":"components/home-mega-menu","9":"components/home-offers","10":"components/home-slider","11":"components/home-slider-copy","12":"components/home-slider2","13":"components/home-trending","14":"components/login","15":"components/logo","16":"components/mobile-copy","17":"components/modal","18":"components/product","19":"components/register","20":"components/whatsapp-modal","21":"pages/_category/_subcategory/index","22":"pages/about/index","23":"pages/auth/_url","24":"pages/blog/_url","25":"pages/blog/blog-copy","26":"pages/blog/index","27":"pages/blog/index-copy","28":"pages/brand/_url","29":"pages/cart/index","30":"pages/checkout/index","31":"pages/contact-us/ali-index","32":"pages/contact-us/index","33":"pages/engage-expert/_url","34":"pages/engage-expert/index","35":"pages/equipment/_id","36":"pages/equipment/apply/_url","37":"pages/equipment/index","38":"pages/equipment/list-farmland-equipment/index","39":"pages/equipment/rent-farmland-equipment/_url","40":"pages/equipment/rent-farmland-equipment/_url1","41":"pages/equipment/rent-farmland-equipment/index","42":"pages/equipments/_id","43":"pages/events/index","44":"pages/expert-success/index","45":"pages/farmlands/_url","46":"pages/farmlands/index","47":"pages/financing/index","48":"pages/gakuo/index","49":"pages/gasaya/index","50":"pages/global-auth/login/index","51":"pages/global-auth/register/index","52":"pages/index","53":"pages/investor-success/index","54":"pages/join-event/_url","55":"pages/join-event/index","56":"pages/joseph/index","57":"pages/location/index","58":"pages/management/index","59":"pages/marketing/index","60":"pages/meeting-success/index","61":"pages/my-details/account/index","62":"pages/my-details/equipments/index","63":"pages/my-details/equipments/index1","64":"pages/my-details/farms/index","65":"pages/newsletter-success/index","66":"pages/order-farm/_url","67":"pages/order-farm/index","68":"pages/order/index","69":"pages/our-services/index","70":"pages/owner-success/index","71":"pages/privacy/index","72":"pages/product/_url","73":"pages/products/index","74":"pages/projects/_url","75":"pages/projects/index","76":"pages/register/_url","77":"pages/services/index","78":"pages/services/urlcopy","79":"pages/shop/index","80":"pages/simo-index","81":"pages/success/index","82":"pages/whishlist/index","83":"pages/winnie/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return websiteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backendUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return http; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


// export const websiteUrl = "https://jubilantafrofarms.com";
// export const backendUrl = "https://portal.jubilantafrofarms.com";

const websiteUrl = "http://localhost:8182";
const backendUrl = "http://localhost:7800";
const http = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: backendUrl,
  timeout: 50000
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer.vue?vue&type=template&id=6e28d479&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', [_vm._ssrNode("<div data-v-6e28d479>", "</div>", [_vm._ssrNode("<div class=\"grid md:grid-cols-4 bg-gray-600 text-gray-200 p-8\" data-v-6e28d479>", "</div>", [_vm._ssrNode("<div data-v-6e28d479><span class=\"uppercase font-bold text-lg md:text-2xl text-white\" data-v-6e28d479>Company</span> <div class=\"flex items-center\" data-v-6e28d479>\n        This Platform is managed and run by Jubilant Afro Farms Market (k) Ltd. The Company was established under the Kenyan\n        Companies Act No. 17 of 2015 to engage in Agriculture and related businesses in the entire value\n        chain of the agriculture sector in Africa.\n      </div></div> "), _vm._ssrNode("<div data-v-6e28d479>", "</div>", [_vm._ssrNode("<span class=\"uppercase font-bold text-lg md:text-2xl text-white\" data-v-6e28d479>Get In Touch</span> <div class=\"flex items-center\" data-v-6e28d479><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-4 w-4 md:h-7 md:w-7 text-white md:mt-2\" data-v-6e28d479><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\" data-v-6e28d479></path></svg> <span class=\"ml-3 font-bold\" data-v-6e28d479>+254 752 940 909</span></div> "), _vm._ssrNode("<div class=\"flex items-center\" data-v-6e28d479>", "</div>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6 cursor-pointer",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "icon": ['fab', 'whatsapp']
    }
  }), _vm._ssrNode(" <span class=\"ml-3 font-bold\" data-v-6e28d479>+254 752 940 909</span>")], 2), _vm._ssrNode(" <div class=\"flex items-center\" data-v-6e28d479><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-4 w-4 md:h-7 md:w-7 text-white md:mt-2\" data-v-6e28d479><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\" data-v-6e28d479></path></svg> <span class=\"ml-3 font-bold\" data-v-6e28d479>info@jubilantafrofarms.com</span></div> "), _vm._ssrNode("<div class=\"flex mt-4\" data-v-6e28d479>", "</div>", [_vm._ssrNode("<a href=\"https://www.instagram.com/jani_afrofarms?igsh=ZmxjNXV1cG43eWl6\" data-v-6e28d479>", "</a>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6 md:h-8 md:w-8 mx-2 cursor-pointer",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "icon": ['fab', 'instagram']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<a href=\"https://www.facebook.com/share/152Vha19RMg/GM\" data-v-6e28d479>", "</a>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6 md:h-8 md:w-8 mx-2 cursor-pointer",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "icon": ['fab', 'facebook']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<a href=\"#\" data-v-6e28d479>", "</a>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6 md:h-8 md:w-8 mx-2 cursor-pointer",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "icon": ['fab', 'twitter']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<a href=\"#\" data-v-6e28d479>", "</a>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6 md:h-8 md:w-8 cursor-pointer",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "icon": ['fab', 'youtube']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<a href=\"#\" data-v-6e28d479>", "</a>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6 md:h-8 md:w-8 mx-2 cursor-pointer",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "icon": ['fab', 'linkedin']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md:pl-12\" data-v-6e28d479>", "</div>", [_vm._ssrNode("<span class=\"uppercase font-bold text-lg md:text-2xl text-white\" data-v-6e28d479>Quick Links</span> "), _vm._ssrNode("<div class=\"text-lg\" data-v-6e28d479>", "</div>", [_vm._ssrNode("<ul data-v-6e28d479>", "</ul>", [_vm._ssrNode("<li class=\"cursor-pointer hover:text-indigo-100 hover:underline\" data-v-6e28d479>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"cursor-pointer hover:text-indigo-100 hover:underline\" data-v-6e28d479>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"cursor-pointer hover:text-indigo-100 hover:underline\" data-v-6e28d479>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Contact Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"cursor-pointer hover:text-indigo-100 hover:underline\" data-v-6e28d479>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/privacy"
    }
  }, [_vm._v("Privacy Policy")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"cursor-pointer hover:text-indigo-100 hover:underline\" data-v-6e28d479>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Terms Of Use")])], 1)], 2)])], 2), _vm._ssrNode(" <div data-v-6e28d479><span class=\"uppercase font-bold text-lg md:text-2xl text-white\" data-v-6e28d479>Newsletter</span> <div class=\"text-lg\" data-v-6e28d479><div class=\"text-sm\" data-v-6e28d479>\n          Sign-up for newsletter to get the latest news and updates\n        </div> <div data-v-6e28d479><label class=\"text-sm\" data-v-6e28d479>Email</label><br data-v-6e28d479> <input type=\"text\"" + _vm._ssrAttr("value", _vm.newsletterEmail) + " class=\"rounded-xl text-black px-4\" data-v-6e28d479><br data-v-6e28d479> " + (_vm.formError == true ? "<div class=\"text-red-500\" data-v-6e28d479>Email is required!</div>" : "<!---->") + " <button class=\"bg-orange-500 rounded-xl text-lg px-4 mt-2\" data-v-6e28d479>Subscribe</button></div></div></div>")], 2), _vm._ssrNode(" <div class=\"md:flex md:justify-between bg-green-900 p-2 text-white\" data-v-6e28d479><div data-v-6e28d479>\n      &quot;Together, We Can Feed Africa&quot;\n    </div> <div data-v-6e28d479>" + _vm._ssrEscape("\n      Copyright " + _vm._s(new Date().getFullYear()) + " ©Jubilant Afro Farms, All Rights Reserved\n    ") + "</div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footer.vue?vue&type=template&id=6e28d479&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer.vue?vue&type=script&lang=js

/* harmony default export */ var footervue_type_script_lang_js = ({
  data() {
    return {
      newsletterEmail: null,
      formError: false
    };
  },
  methods: {
    async subscribeNewsletter() {
      console.log(this.newsletterEmail, 'email');
      if (this.newsletterEmail == null) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/newsletter`;
          let details = {
            newsletterEmail: this.newsletterEmail
          };
          const self = this;
          await common["b" /* http */].post(url, details).then(res => {
            if (res.data.state) {
              self.newsletterEmail = null;
              this.$router.push("/newsletter-success");
            } else {
              self.loader = false;
            }
          });
        } catch (err) {
          console.log("error occured", err);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/footer.vue?vue&type=script&lang=js
 /* harmony default export */ var components_footervue_type_script_lang_js = (footervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_footervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e28d479",
  "0f45ea55"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(7).default})


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header.vue?vue&type=template&id=10b19386&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_c('top-bar')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header.vue?vue&type=template&id=10b19386&scoped=true

// EXTERNAL MODULE: ./components/top-bar.vue + 4 modules
var top_bar = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header.vue?vue&type=script&lang=js

/* harmony default export */ var headervue_type_script_lang_js = ({
  components: {
    TopBar: top_bar["default"]
  }
});
// CONCATENATED MODULE: ./components/header.vue?vue&type=script&lang=js
 /* harmony default export */ var components_headervue_type_script_lang_js = (headervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/header.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_headervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "10b19386",
  "30784e47"
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TopBar: __webpack_require__(14).default,Header: __webpack_require__(8).default})


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/vue-fontawesome");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/top-bar.vue?vue&type=template&id=233d2ac2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_c('desktop-menu', {
    staticClass: "md:block sm:hidden hidden"
  }), _vm._ssrNode(" "), _c('mobile-menu', {
    staticClass: "md:hidden sm:block block"
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/top-bar.vue?vue&type=template&id=233d2ac2&scoped=true

// EXTERNAL MODULE: ./components/desktop-menu.vue + 4 modules
var desktop_menu = __webpack_require__(15);

// EXTERNAL MODULE: ./components/mobile-menu.vue + 4 modules
var mobile_menu = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/top-bar.vue?vue&type=script&lang=js


/* harmony default export */ var top_barvue_type_script_lang_js = ({
  components: {
    DesktopMenu: desktop_menu["default"],
    MobileMenu: mobile_menu["default"]
  }
});
// CONCATENATED MODULE: ./components/top-bar.vue?vue&type=script&lang=js
 /* harmony default export */ var components_top_barvue_type_script_lang_js = (top_barvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/top-bar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_top_barvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "233d2ac2",
  "0ab29951"
  
)

/* harmony default export */ var top_bar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DesktopMenu: __webpack_require__(15).default,MobileMenu: __webpack_require__(16).default,Header: __webpack_require__(8).default})


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop-menu.vue?vue&type=template&id=3275463a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"flex text-white px-6 py-2 justify-between font-bold\" style=\"background: #d8713d\" data-v-3275463a><div style=\"color: #fff; font-family: Caveat\" data-v-3275463a>&quot;Together, We Can Feed Africa&quot;</div> <div style=\"color: #fff\" data-v-3275463a>info@jubilantafrofarms.com</div></div> "), _vm._ssrNode("<div class=\"items-center bg-white justify-center gap-3 grid md:grid-cols-8 p-4 border-b border-purple-500\" data-v-3275463a>", "</div>", [_vm._ssrNode("<div class=\"col-span-3 flex items-center\" data-v-3275463a>", "</div>", [_vm._ssrNode("<div data-v-3275463a>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "h-full md:h-16 md:ml-1 py-1 object-contain",
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "transform": "scale(1.7)"
    },
    attrs: {
      "src": __webpack_require__(19),
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" <div class=\"flex justify-center text-xl font-bold\" data-v-3275463a></div>")], 2), _vm._ssrNode(" <div class=\"col-span-2 md:justify-around relative mx-3\" data-v-3275463a></div> <div class=\"col-span-2 place-content-end flex font-bold text-xl\" data-v-3275463a>\n        Call: +254 752 940 909\n      </div> "), _vm._ssrNode("<div class=\"col-span-1 text-gray-600 flex justify-center\" data-v-3275463a>", "</div>", [_vm.isAuthenticated ? _vm._ssrNode("<div data-v-3275463a>", "</div>", [_vm._ssrNode("<div class=\"col-span-1 flex place-content-center relative\" data-v-3275463a>", "</div>", [_vm._ssrNode("<div data-v-3275463a>", "</div>", [_vm._ssrNode("<button class=\"group relative flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 p-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg hover:shadow-xl\" data-v-3275463a>", "</button>", [_vm._ssrNode("<div class=\"relative mb-2\" data-v-3275463a>", "</div>", [_vm._ssrNode("<div class=\"w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300\" data-v-3275463a>", "</div>", [_c('font-awesome-icon', {
    staticClass: "text-white text-xl group-hover:scale-110 transition-transform duration-300",
    attrs: {
      "icon": ['fas', 'user-circle']
    }
  })], 1), _vm._ssrNode(" <div class=\"absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-sm\" data-v-3275463a><div class=\"w-full h-full bg-green-400 rounded-full animate-pulse\" data-v-3275463a></div></div>")], 2), _vm._ssrNode(" <span class=\"font-semibold text-xs text-white/90 group-hover:text-white transition-colors duration-300 max-w-20 truncate\" data-v-3275463a>" + _vm._ssrEscape("\n      " + _vm._s(_vm.userName) + "\n    ") + "</span> <svg fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" class=\"w-3 h-3 text-white/70 group-hover:text-white mt-1 transition-all duration-300 group-hover:translate-y-0.5\" data-v-3275463a><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\" data-v-3275463a></path></svg> <div class=\"absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300\" data-v-3275463a></div>")], 2)]), _vm._ssrNode(" "), _vm.showDropdown ? _vm._ssrNode("<div class=\"absolute right-0 mt-14 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50\" data-v-3275463a>", "</div>", [_vm._ssrNode("<ul class=\"divide-y divide-gray-200\" data-v-3275463a>", "</ul>", [_vm._ssrNode("<li data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors",
    attrs: {
      "to": `/my-details/account`
    }
  }, [_vm._v("\n        Account\n      ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors",
    attrs: {
      "to": "/my-details/equipments"
    }
  }, [_vm._v("\n        Equipments\n      ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors",
    attrs: {
      "to": "/my-details/farms"
    }
  }, [_vm._v("\n        Farms\n      ")])], 1), _vm._ssrNode(" <li data-v-3275463a><button class=\"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors\" data-v-3275463a>\n        Logout\n      </button></li>")], 2)]) : _vm._e()], 2)]) : _c('nuxt-link', {
    staticClass: "text-white w-16 bg-orange-400 px-2 py-1 rounded font-bold",
    attrs: {
      "to": "/global-auth/login"
    }
  }, [_vm._v("\n          Login\n        ")])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md:flex items-center p-3 justify-between\" style=\"background: #10914e\" data-v-3275463a>", "</div>", [_vm._ssrNode("<nav class=\"ml-4\" data-v-3275463a>", "</nav>", [_vm._ssrNode("<ul class=\"md:flex flex-wrap\" data-v-3275463a>", "</ul>", [_vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/services"
    }
  }, [_vm._v("Agri\n              Support")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "#"
    }
  }, [_vm._v("Services")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"absolute left-0 top-fdivl bg-gray-50 text-gray-800 rounded-md shadow-md hidden group-hover:block\" data-v-3275463a>", "</div>", [_c('nuxt-link', {
    staticClass: "block px-4 py-2 hover:bg-gray-100",
    attrs: {
      "to": "/farmlands"
    }
  }, [_vm._v("Farmlands")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "block px-4 py-2 hover:bg-gray-100",
    attrs: {
      "to": "/equipment"
    }
  }, [_vm._v("Equipment")])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/location"
    }
  }, [_vm._v("Our\n              Location")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Contact\n              Us")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pr-56\" data-v-3275463a>", "</div>", [_vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-3275463a>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("E-Commerce")])], 1)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/desktop-menu.vue?vue&type=template&id=3275463a&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop-menu.vue?vue&type=script&lang=js


/* harmony default export */ var desktop_menuvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl", "user", "token", "isAuthenticated"]),
    ...Object(external_vuex_["mapGetters"])("product", ["cart"]),
    userName() {
      return this.user ? `${this.user.first_name || "Guest"} ${this.user.last_name || ""}`.trim() : "Guest";
    },
    userSerialNo() {
      return this.user ? this.user.serialNo : null;
    }
  },
  data() {
    return {
      categories: [],
      services: [],
      searchInput: null,
      searchPhrase: "",
      active: false,
      searchResults: [],
      searchSuggestions: [],
      blured: true,
      disabled: true,
      showDropdown: false
    };
  },
  async fetch() {
    const host = this.imageUrl;
    try {
      const [categoriesData, servicesData] = await Promise.all([fetch(`${host}/api/categories`).then(res => res.json()), fetch(`${host}/api/services`).then(res => res.json())]);
      this.categories = categoriesData.records;
      this.services = servicesData.records;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  watch: {
    $route() {
      this.searchResults = [];
    }
  },
  mounted() {
    this.$store.dispatch("initAuth"); // Initialize authentication from Vuex
  },
  methods: {
    showMenu() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      this.$store.commit("logout"); // Logout via Vuex mutation
      this.$router.push("/");
    },
    async search() {
      const keyword = this.searchPhrase.trim().toLowerCase();
      if (!keyword) return;
      try {
        const {
          data
        } = await common["b" /* http */].get(`/api/products/search/${keyword}`);
        this.searchResults = data.searchResults || [];
      } catch (error) {
        console.error("Search error:", error);
        this.searchResults = [];
      }
    },
    activateSearch() {
      this.blured = false;
    },
    enterEvent() {
      this.searchResults = [];
    }
  }
});
// CONCATENATED MODULE: ./components/desktop-menu.vue?vue&type=script&lang=js
 /* harmony default export */ var components_desktop_menuvue_type_script_lang_js = (desktop_menuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/desktop-menu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_desktop_menuvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3275463a",
  "d6c14dac"
  
)

/* harmony default export */ var desktop_menu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mobile-menu.vue?vue&type=template&id=8fcdd38a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"bg-white grid border-b border-green-400 grid-cols-12 justify-center items-center relative\" data-v-8fcdd38a>", "</div>", [_vm._ssrNode("<div class=\"col-span-12 p-2 text-white justify-between flex text-lg font-bold\" style=\"background: #2e7d32\" data-v-8fcdd38a>", "</div>", [_vm._ssrNode("<div class=\"text-xs\" data-v-8fcdd38a>Jubilant Afro Farms</div> <div class=\"text-xs\" data-v-8fcdd38a>+254 752 940 909</div> "), _vm.isAuthenticated ? _vm._ssrNode("<div data-v-8fcdd38a>", "</div>", [_vm._ssrNode("<div class=\"col-span-1 flex place-content-center relative\" data-v-8fcdd38a>", "</div>", [_vm._ssrNode("<button data-v-8fcdd38a>", "</button>", [_c('font-awesome-icon', {
    staticClass: "text-white text-xl md:text-2xl",
    attrs: {
      "icon": ['fas', 'user-circle']
    }
  })], 1), _vm._ssrNode(" "), _vm.showDropdown ? _vm._ssrNode("<div class=\"absolute flex flex-col items-center right-0 text-gray-400 font-normal mt-10 w-32 bg-white border rounded-md shadow\" data-v-8fcdd38a>", "</div>", [_vm._ssrNode("<ul data-v-8fcdd38a>", "</ul>", [_vm._ssrNode("<li data-v-8fcdd38a>", "</li>", [_c('nuxt-link', {
    staticClass: "block py-1 hover:bg-gray-100",
    attrs: {
      "to": "/my-details/account"
    }
  }, [_vm._v("Account")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-8fcdd38a>", "</li>", [_c('nuxt-link', {
    staticClass: "block py-1 hover:bg-gray-100",
    attrs: {
      "to": "/my-details/equipments"
    }
  }, [_vm._v("Equipments")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-8fcdd38a>", "</li>", [_c('nuxt-link', {
    staticClass: "block py-1 hover:bg-gray-100",
    attrs: {
      "to": "/my-details/farms"
    }
  }, [_vm._v("Farms")])], 1), _vm._ssrNode(" <li data-v-8fcdd38a><button class=\"flex py-1 text-red-600 hover:bg-gray-100 w-full text-left\" data-v-8fcdd38a><span data-v-8fcdd38a>Logout</span></button></li>")], 2)]) : _vm._e()], 2)]) : _c('nuxt-link', {
    staticClass: "text-white bg-orange-400 rounded font-bold px-2 py-0 text-sm",
    attrs: {
      "to": "/global-auth/login"
    }
  }, [_vm._v("\n        Login\n      ")])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-span-6\" data-v-8fcdd38a>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "w-1/2 h-12 md:w-full md:h-20 md:ml-2 object-contain",
    attrs: {
      "src": __webpack_require__(19),
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" <div class=\"col-span-6 flex justify-end pr-4\" data-v-8fcdd38a><div class=\"p-2\" data-v-8fcdd38a><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-8 w-8 float-right md:hidden mobile-menu-button\" data-v-8fcdd38a><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\" data-v-8fcdd38a></path></svg></div></div> "), _vm._ssrNode("<div class=\"sidebar min-h-screen md:flex z-30 bg-white w-80 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out\" data-v-8fcdd38a>", "</div>", [_vm._ssrNode("<div class=\"flex justify-between\" data-v-8fcdd38a>", "</div>", [_c('nuxt-link', {
    staticClass: "flex items-center space-x-2 px-4",
    attrs: {
      "to": "/"
    }
  }, [_c('span', {
    staticClass: "text-lg font-bold"
  }, [_vm._v("Jubilant Afro Farms Market")])]), _vm._ssrNode(" "), _vm._ssrNode("<button data-v-8fcdd38a>", "</button>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6",
    attrs: {
      "icon": ['fas', 'times']
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<nav class=\"ml-4 bg-green-600\" data-v-8fcdd38a>", "</nav>", [_vm._ssrNode("<ul class=\"md:flex\" data-v-8fcdd38a>", "</ul>", [_vm._ssrNode("<li class=\"bg-green-600 text-white border-b border-white menu-li block px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white\" data-v-8fcdd38a>\n            Home\n          </li> <li class=\"bg-green-600 text-white border-b border-white menu-li block px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white\" data-v-8fcdd38a>\n            About Us\n          </li> <li class=\"bg-green-600 text-white border-b border-white menu-li block px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white\" data-v-8fcdd38a>\n            Agri Support\n          </li> <li class=\"bg-green-600 text-white border-b border-white menu-li block px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white\" data-v-8fcdd38a>\n            Partnership Projects\n          </li> <li class=\"menu-li group inline-block relative text-white px-4 border-b border-white w-full\" data-v-8fcdd38a><a href=\"/services\" class=\"inline-flex gap-3 items-center\" data-v-8fcdd38a>Services\n              </a></li> <li class=\"bg-green-600 text-white border-b border-white menu-li block px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white\" data-v-8fcdd38a>\n            Our Location\n          </li> <li class=\"bg-green-600 text-white border-b border-white menu-li block px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white\" data-v-8fcdd38a>\n            Blog\n          </li> "), _vm._ssrNode("<li class=\"menu-li group inline-block relative text-white px-4\" data-v-8fcdd38a>", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"inline-flex items-center font-bold\" data-v-8fcdd38a>", "</a>", [_vm._ssrNode("Market Place\n              "), _c('font-awesome-icon', {
    staticClass: "h-6 w-6 cursor-pointer",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "icon": ['fas', 'caret-down']
    }
  })], 2), _vm._ssrNode(" "), _vm.categories && _vm.categories.length > 0 ? _vm._ssrNode("<ul class=\"w-56 bg-orange-600 text-white shadow-xl absolute hidden group-hover:block z-40 divide-y divide-gray-300 divide-solid\" data-v-8fcdd38a>", "</ul>", _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<li class=\"block py-2 px-4 hover:bg-gray-100\" data-v-8fcdd38a>", "</li>", [_c('nuxt-link', {
      staticClass: "p-2 text-xs font-normal",
      attrs: {
        "to": `/category/${category.url}`
      }
    }, [_vm._v(_vm._s(category.name))])], 1);
  }), 0) : _vm._e()], 2), _vm._ssrNode(" <li class=\"bg-green-600 text-white border-b border-white menu-li block px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white\" data-v-8fcdd38a>\n            Contact Us\n          </li>")], 2)])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/mobile-menu.vue?vue&type=template&id=8fcdd38a&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mobile-menu.vue?vue&type=script&lang=js


/* harmony default export */ var mobile_menuvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl", "isAuthenticated"]),
    ...Object(external_vuex_["mapGetters"])("product", ["cart"])
  },
  data() {
    return {
      categories: [],
      disabled: true,
      services: [],
      searchPhrase: "",
      sResults: [],
      showDropdown: false
    };
  },
  async fetch() {
    const url = `api/categories`;
    const servicesUrl = `api/services`;
    const host = this.imageUrl;
    const data = await fetch(`${host}/${url}`).then(res => res.json());
    // fetch services
    const servicesData = await fetch(`${host}/${servicesUrl}`).then(res => res.json());
    // end
    this.categories = data.records;
    this.services = servicesData.records;
  },
  watch: {
    $route() {
      this.sResults = [];
    }
  },
  methods: {
    handleMenu() {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("-translate-x-full");
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    showMenu() {
      this.showDropdown = !this.showDropdown;
      console.log(this.showDropdown, "Show dropdown");
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
    navigateMenu(url) {
      if (url == undefined) {
        this.$router.push(`/`);
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("-translate-x-full");
      } else {
        this.$router.push(`/services/${url}`);
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("-translate-x-full");
      }
    },
    navigateMain(url) {
      this.$router.push(`/${url}`);
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("-translate-x-full");
    },
    async search() {
      const keyword = this.searchPhrase.trim().toLowerCase();
      const url = `/api/products/search/${keyword}`;
      try {
        const {
          data
        } = await common["b" /* http */].get(url);
        const {
          searchResults
        } = data;
        if (searchResults.length > 0) {
          this.sResults = searchResults;
        } else {
          this.sResults = [];
        }
      } catch (err) {
        console.log(err);
      }
    }
    // enterEvent() {
    //   this.searchResults = [];
    // },
    // showMenu() {
    //   const menu = document.querySelector("#menu");

    //   if (menu.classList.contains("hidden")) {
    //     menu.classList.remove("hidden");
    //   } else {
    //     menu.classList.add("hidden");
    //   }
    // },
  }
});
// CONCATENATED MODULE: ./components/mobile-menu.vue?vue&type=script&lang=js
 /* harmony default export */ var components_mobile_menuvue_type_script_lang_js = (mobile_menuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/mobile-menu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mobile_menuvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8fcdd38a",
  "65159240"
  
)

/* harmony default export */ var mobile_menu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jani-logo.0c40ffb.png";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("20fe578f", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("709683a2", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("198c8de7", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("bf8fe0ee", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f292fc32", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3ad6dfea", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
module.exports = __webpack_require__(56);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  context.store.dispatch("initAuth", context.req);
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{align-items:center;background:#f7f8fb;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;padding:1rem;text-align:center;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;bottom:0;left:0;position:absolute;right:0;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("00122704", content, true)

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;transform:scale(.25);transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;transform:scale(.25);transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;transform:scale(.25);transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;transform:scale(.25);transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;transform:scale(.25);transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;line-height:inherit;position:absolute;text-align:center;width:2em}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s linear infinite}.fa-pulse{animation:fa-spin 1s steps(8) infinite}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:currentColor;fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:currentColor;fill:var(--fa-secondary-color,currentColor)}.svg-inline--fa .fa-secondary,.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("65b97e00", content, true)

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e5e5;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a3a3a3;opacity:1}input::-moz-placeholder, textarea::-moz-placeholder{color:#a3a3a3;opacity:1}input::placeholder,textarea::placeholder{color:#a3a3a3;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none!important}.visible{visibility:visible!important}.fixed{position:fixed!important}.absolute{position:absolute!important}.relative{position:relative!important}.sticky{position:sticky!important}.inset-0{left:0!important;right:0!important}.inset-0,.inset-y-0{bottom:0!important;top:0!important}.-bottom-1{bottom:-.25rem!important}.-right-1{right:-.25rem!important}.-top-2{top:-.5rem!important}.bottom-0{bottom:0!important}.left-0{left:0!important}.left-1\\/4{left:25%!important}.right-0{right:0!important}.right-4{right:1rem!important}.top-0{top:0!important}.top-4{top:1rem!important}.z-10{z-index:10!important}.z-30{z-index:30!important}.z-40{z-index:40!important}.z-50{z-index:50!important}.col-span-1{grid-column:span 1/span 1!important}.col-span-12{grid-column:span 12/span 12!important}.col-span-2{grid-column:span 2/span 2!important}.col-span-3{grid-column:span 3/span 3!important}.col-span-4{grid-column:span 4/span 4!important}.col-span-6{grid-column:span 6/span 6!important}.col-span-8{grid-column:span 8/span 8!important}.col-span-9{grid-column:span 9/span 9!important}.float-right{float:right!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-3{margin-left:.75rem!important;margin-right:.75rem!important}.mx-4{margin-left:1rem!important;margin-right:1rem!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.my-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-3{margin-bottom:.75rem!important;margin-top:.75rem!important}.my-4{margin-bottom:1rem!important;margin-top:1rem!important}.my-5{margin-bottom:1.25rem!important;margin-top:1.25rem!important}.my-6{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-16{margin-bottom:4rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:.75rem!important}.mb-4{margin-bottom:1rem!important}.mb-6{margin-bottom:1.5rem!important}.mb-8{margin-bottom:2rem!important}.ml-16{margin-left:4rem!important}.ml-2{margin-left:.5rem!important}.ml-3{margin-left:.75rem!important}.ml-4{margin-left:1rem!important}.ml-6{margin-left:1.5rem!important}.mr-1{margin-right:.25rem!important}.mr-10{margin-right:2.5rem!important}.mr-16{margin-right:4rem!important}.mr-2{margin-right:.5rem!important}.mr-3{margin-right:.75rem!important}.mr-4{margin-right:1rem!important}.mt-1{margin-top:.25rem!important}.mt-10{margin-top:2.5rem!important}.mt-14{margin-top:3.5rem!important}.mt-2{margin-top:.5rem!important}.mt-20{margin-top:5rem!important}.mt-3{margin-top:.75rem!important}.mt-36{margin-top:9rem!important}.mt-4{margin-top:1rem!important}.mt-5{margin-top:1.25rem!important}.mt-6{margin-top:1.5rem!important}.mt-8{margin-top:2rem!important}.block{display:block!important}.inline-block{display:inline-block!important}.flex{display:flex!important}.inline-flex{display:inline-flex!important}.table{display:table!important}.grid{display:grid!important}.hidden{display:none!important}.h-10{height:2.5rem!important}.h-12{height:3rem!important}.h-16{height:4rem!important}.h-2{height:.5rem!important}.h-20{height:5rem!important}.h-24{height:6rem!important}.h-3{height:.75rem!important}.h-32{height:8rem!important}.h-4{height:1rem!important}.h-40{height:10rem!important}.h-5{height:1.25rem!important}.h-6{height:1.5rem!important}.h-64{height:16rem!important}.h-72{height:18rem!important}.h-8{height:2rem!important}.h-80{height:20rem!important}.h-9{height:2.25rem!important}.h-96{height:24rem!important}.h-full{height:100%!important}.h-px{height:1px!important}.max-h-14{max-height:3.5rem!important}.max-h-screen{max-height:100vh!important}.min-h-full{min-height:100%!important}.min-h-screen{min-height:100vh!important}.w-1\\/2{width:50%!important}.w-10{width:2.5rem!important}.w-11\\/12{width:91.666667%!important}.w-12{width:3rem!important}.w-16{width:4rem!important}.w-2{width:.5rem!important}.w-2\\/3{width:66.666667%!important}.w-20{width:5rem!important}.w-24{width:6rem!important}.w-28{width:7rem!important}.w-3{width:.75rem!important}.w-3\\/4{width:75%!important}.w-3\\/5{width:60%!important}.w-32{width:8rem!important}.w-36{width:9rem!important}.w-4{width:1rem!important}.w-40{width:10rem!important}.w-5{width:1.25rem!important}.w-56{width:14rem!important}.w-6{width:1.5rem!important}.w-64{width:16rem!important}.w-8{width:2rem!important}.w-80{width:20rem!important}.w-96{width:24rem!important}.w-full{width:100%!important}.max-w-20{max-width:5rem!important}.max-w-3xl{max-width:48rem!important}.max-w-4xl{max-width:56rem!important}.max-w-5xl{max-width:64rem!important}.max-w-6xl{max-width:72rem!important}.max-w-7xl{max-width:80rem!important}.max-w-md{max-width:28rem!important}.max-w-screen-lg{max-width:1024px!important}.max-w-screen-xl{max-width:1280px!important}.max-w-xs{max-width:20rem!important}.flex-1{flex:1 1 0%!important}.table-auto{table-layout:auto!important}.border-collapse{border-collapse:collapse!important}.-translate-x-full{--tw-translate-x:-100%!important;transform:translate(-100%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.translate-x-full{--tw-translate-x:100%!important;transform:translate(100%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.-skew-x-12{--tw-skew-x:-12deg!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(-12deg) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.-skew-x-12,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite!important}.cursor-pointer{cursor:pointer!important}.appearance-none{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))!important}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.flex-col{flex-direction:column!important}.flex-col-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.place-content-center{align-content:center!important;justify-content:center!important;place-content:center!important}.place-content-end{align-content:end!important;justify-content:end!important;place-content:end!important}.content-center{align-content:center!important}.items-start{align-items:flex-start!important}.items-center{align-items:center!important}.justify-start{justify-content:flex-start!important}.justify-end{justify-content:flex-end!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.justify-items-center{justify-items:center!important}.gap-2{gap:.5rem!important}.gap-3{gap:.75rem!important}.gap-4{gap:1rem!important}.gap-5{gap:1.25rem!important}.gap-6{gap:1.5rem!important}.gap-8{gap:2rem!important}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0!important;margin-left:.25rem!important;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)))!important;margin-right:0!important;margin-right:calc(.25rem*var(--tw-space-x-reverse))!important}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0!important;margin-left:.5rem!important;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)))!important;margin-right:0!important;margin-right:calc(.5rem*var(--tw-space-x-reverse))!important}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0!important;margin-left:1rem!important;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)))!important;margin-right:0!important;margin-right:calc(1rem*var(--tw-space-x-reverse))!important}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0!important;margin-bottom:0!important;margin-bottom:calc(.75rem*var(--tw-space-y-reverse))!important;margin-top:.75rem!important;margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))!important}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0!important;margin-bottom:0!important;margin-bottom:calc(1rem*var(--tw-space-y-reverse))!important;margin-top:1rem!important;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))!important}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0!important;margin-bottom:0!important;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse))!important;margin-top:1.5rem!important;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))!important}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0!important;border-bottom-width:0!important;border-bottom-width:calc(1px*var(--tw-divide-y-reverse))!important;border-top-width:1px!important;border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))!important}.divide-solid>:not([hidden])~:not([hidden]){border-style:solid!important}.divide-gray-200>:not([hidden])~:not([hidden]){--tw-divide-opacity:1!important;border-color:#e5e5e5!important;border-color:rgba(229,229,229,var(--tw-divide-opacity,1))!important}.divide-gray-300>:not([hidden])~:not([hidden]){--tw-divide-opacity:1!important;border-color:#d4d4d4!important;border-color:rgba(212,212,212,var(--tw-divide-opacity,1))!important}.self-center{align-self:center!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-y-auto{overflow-y:auto!important}.overflow-y-scroll{overflow-y:scroll!important}.truncate{overflow:hidden!important;text-overflow:ellipsis!important}.truncate,.whitespace-nowrap{white-space:nowrap!important}.text-wrap{text-wrap:wrap!important}.rounded{border-radius:.25rem!important}.rounded-2xl{border-radius:1rem!important}.rounded-3xl{border-radius:1.5rem!important}.rounded-full{border-radius:9999px!important}.rounded-lg{border-radius:.5rem!important}.rounded-md{border-radius:.375rem!important}.rounded-sm{border-radius:.125rem!important}.rounded-xl{border-radius:.75rem!important}.rounded-b{border-bottom-left-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-b-md{border-bottom-left-radius:.375rem!important;border-bottom-right-radius:.375rem!important}.rounded-t{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-t-3xl{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important}.rounded-t-md{border-top-left-radius:.375rem!important;border-top-right-radius:.375rem!important}.rounded-bl-3xl{border-bottom-left-radius:1.5rem!important}.rounded-tl-3xl{border-top-left-radius:1.5rem!important}.rounded-tr-3xl{border-top-right-radius:1.5rem!important}.border{border-width:1px!important}.border-0{border-width:0!important}.border-2{border-width:2px!important}.border-b{border-bottom-width:1px!important}.border-b-2{border-bottom-width:2px!important}.border-l{border-left-width:1px!important}.border-l-4{border-left-width:4px!important}.border-r-0{border-right-width:0!important}.border-r-2{border-right-width:2px!important}.border-t{border-top-width:1px!important}.border-t-0{border-top-width:0!important}.border-t-2{border-top-width:2px!important}.border-solid{border-style:solid!important}.border-black{--tw-border-opacity:1!important;border-color:#000!important;border-color:rgba(0,0,0,var(--tw-border-opacity,1))!important}.border-blue-200{--tw-border-opacity:1!important;border-color:#bfdbfe!important;border-color:rgba(191,219,254,var(--tw-border-opacity,1))!important}.border-blue-500{--tw-border-opacity:1!important;border-color:#3b82f6!important;border-color:rgba(59,130,246,var(--tw-border-opacity,1))!important}.border-gray-100{--tw-border-opacity:1!important;border-color:#f5f5f5!important;border-color:rgba(245,245,245,var(--tw-border-opacity,1))!important}.border-gray-100\\/50{border-color:hsla(0,0%,96%,.5)!important}.border-gray-200{--tw-border-opacity:1!important;border-color:#e5e5e5!important;border-color:rgba(229,229,229,var(--tw-border-opacity,1))!important}.border-gray-300{--tw-border-opacity:1!important;border-color:#d4d4d4!important;border-color:rgba(212,212,212,var(--tw-border-opacity,1))!important}.border-gray-400{--tw-border-opacity:1!important;border-color:#a3a3a3!important;border-color:rgba(163,163,163,var(--tw-border-opacity,1))!important}.border-gray-500{--tw-border-opacity:1!important;border-color:#737373!important;border-color:rgba(115,115,115,var(--tw-border-opacity,1))!important}.border-green-100{--tw-border-opacity:1!important;border-color:#dcfce7!important;border-color:rgba(220,252,231,var(--tw-border-opacity,1))!important}.border-green-200{--tw-border-opacity:1!important;border-color:#bbf7d0!important;border-color:rgba(187,247,208,var(--tw-border-opacity,1))!important}.border-green-300{--tw-border-opacity:1!important;border-color:#86efac!important;border-color:rgba(134,239,172,var(--tw-border-opacity,1))!important}.border-green-400{--tw-border-opacity:1!important;border-color:#4ade80!important;border-color:rgba(74,222,128,var(--tw-border-opacity,1))!important}.border-green-500{--tw-border-opacity:1!important;border-color:#22c55e!important;border-color:rgba(34,197,94,var(--tw-border-opacity,1))!important}.border-orange-200{--tw-border-opacity:1!important;border-color:#fed7aa!important;border-color:rgba(254,215,170,var(--tw-border-opacity,1))!important}.border-orange-600{--tw-border-opacity:1!important;border-color:#ea580c!important;border-color:rgba(234,88,12,var(--tw-border-opacity,1))!important}.border-purple-200{--tw-border-opacity:1!important;border-color:#e9d5ff!important;border-color:rgba(233,213,255,var(--tw-border-opacity,1))!important}.border-purple-500{--tw-border-opacity:1!important;border-color:#a855f7!important;border-color:rgba(168,85,247,var(--tw-border-opacity,1))!important}.border-red-300{--tw-border-opacity:1!important;border-color:#fda4af!important;border-color:rgba(253,164,175,var(--tw-border-opacity,1))!important}.border-red-400{--tw-border-opacity:1!important;border-color:#fb7185!important;border-color:rgba(251,113,133,var(--tw-border-opacity,1))!important}.border-white{--tw-border-opacity:1!important;border-color:#fff!important;border-color:rgba(255,255,255,var(--tw-border-opacity,1))!important}.border-white\\/20{border-color:hsla(0,0%,100%,.2)!important}.bg-black{--tw-bg-opacity:1!important;background-color:#000!important;background-color:rgba(0,0,0,var(--tw-bg-opacity,1))!important}.bg-blue-100{--tw-bg-opacity:1!important;background-color:#dbeafe!important;background-color:rgba(219,234,254,var(--tw-bg-opacity,1))!important}.bg-blue-50{--tw-bg-opacity:1!important;background-color:#eff6ff!important;background-color:rgba(239,246,255,var(--tw-bg-opacity,1))!important}.bg-blue-500{--tw-bg-opacity:1!important;background-color:#3b82f6!important;background-color:rgba(59,130,246,var(--tw-bg-opacity,1))!important}.bg-blue-900{--tw-bg-opacity:1!important;background-color:#1e3a8a!important;background-color:rgba(30,58,138,var(--tw-bg-opacity,1))!important}.bg-gray-100{--tw-bg-opacity:1!important;background-color:#f5f5f5!important;background-color:rgba(245,245,245,var(--tw-bg-opacity,1))!important}.bg-gray-200{--tw-bg-opacity:1!important;background-color:#e5e5e5!important;background-color:rgba(229,229,229,var(--tw-bg-opacity,1))!important}.bg-gray-300{--tw-bg-opacity:1!important;background-color:#d4d4d4!important;background-color:rgba(212,212,212,var(--tw-bg-opacity,1))!important}.bg-gray-400{--tw-bg-opacity:1!important;background-color:#a3a3a3!important;background-color:rgba(163,163,163,var(--tw-bg-opacity,1))!important}.bg-gray-50{--tw-bg-opacity:1!important;background-color:#fafafa!important;background-color:rgba(250,250,250,var(--tw-bg-opacity,1))!important}.bg-gray-500{--tw-bg-opacity:1!important;background-color:#737373!important;background-color:rgba(115,115,115,var(--tw-bg-opacity,1))!important}.bg-gray-600{--tw-bg-opacity:1!important;background-color:#525252!important;background-color:rgba(82,82,82,var(--tw-bg-opacity,1))!important}.bg-gray-900{--tw-bg-opacity:1!important;background-color:#171717!important;background-color:rgba(23,23,23,var(--tw-bg-opacity,1))!important}.bg-green-100{--tw-bg-opacity:1!important;background-color:#dcfce7!important;background-color:rgba(220,252,231,var(--tw-bg-opacity,1))!important}.bg-green-400{--tw-bg-opacity:1!important;background-color:#4ade80!important;background-color:rgba(74,222,128,var(--tw-bg-opacity,1))!important}.bg-green-500{--tw-bg-opacity:1!important;background-color:#22c55e!important;background-color:rgba(34,197,94,var(--tw-bg-opacity,1))!important}.bg-green-600{--tw-bg-opacity:1!important;background-color:#16a34a!important;background-color:rgba(22,163,74,var(--tw-bg-opacity,1))!important}.bg-green-700{--tw-bg-opacity:1!important;background-color:#15803d!important;background-color:rgba(21,128,61,var(--tw-bg-opacity,1))!important}.bg-green-900{--tw-bg-opacity:1!important;background-color:#14532d!important;background-color:rgba(20,83,45,var(--tw-bg-opacity,1))!important}.bg-orange-400{--tw-bg-opacity:1!important;background-color:#fb923c!important;background-color:rgba(251,146,60,var(--tw-bg-opacity,1))!important}.bg-orange-500{--tw-bg-opacity:1!important;background-color:#f97316!important;background-color:rgba(249,115,22,var(--tw-bg-opacity,1))!important}.bg-orange-600{--tw-bg-opacity:1!important;background-color:#ea580c!important;background-color:rgba(234,88,12,var(--tw-bg-opacity,1))!important}.bg-orange-700{--tw-bg-opacity:1!important;background-color:#c2410c!important;background-color:rgba(194,65,12,var(--tw-bg-opacity,1))!important}.bg-purple-50{--tw-bg-opacity:1!important;background-color:#faf5ff!important;background-color:rgba(250,245,255,var(--tw-bg-opacity,1))!important}.bg-red-100{--tw-bg-opacity:1!important;background-color:#ffe4e6!important;background-color:rgba(255,228,230,var(--tw-bg-opacity,1))!important}.bg-red-500{--tw-bg-opacity:1!important;background-color:#f43f5e!important;background-color:rgba(244,63,94,var(--tw-bg-opacity,1))!important}.bg-red-600{--tw-bg-opacity:1!important;background-color:#e11d48!important;background-color:rgba(225,29,72,var(--tw-bg-opacity,1))!important}.bg-red-700{--tw-bg-opacity:1!important;background-color:#be123c!important;background-color:rgba(190,18,60,var(--tw-bg-opacity,1))!important}.bg-red-900{background-color:#881337!important;background-color:rgba(136,19,55,var(--tw-bg-opacity,1))!important}.bg-red-900,.bg-white{--tw-bg-opacity:1!important}.bg-white{background-color:#fff!important;background-color:rgba(255,255,255,var(--tw-bg-opacity,1))!important}.bg-white\\/10{background-color:hsla(0,0%,100%,.1)!important}.bg-white\\/90{background-color:hsla(0,0%,100%,.9)!important}.bg-opacity-50{--tw-bg-opacity:0.5!important}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))!important}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))!important}.bg-gradient-to-t{background-image:linear-gradient(to top,var(--tw-gradient-stops))!important}.from-black\\/60{--tw-gradient-from:rgba(0,0,0,.6) var(--tw-gradient-from-position)!important;--tw-gradient-to:transparent var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-blue-500{--tw-gradient-from:#3b82f6 var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(59,130,246,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-gray-100{--tw-gradient-from:#f5f5f5 var(--tw-gradient-from-position)!important;--tw-gradient-to:hsla(0,0%,96%,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-green-400{--tw-gradient-from:#4ade80 var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(74,222,128,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-green-50{--tw-gradient-from:#f0fdf4 var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(240,253,244,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-green-500{--tw-gradient-from:#22c55e var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(34,197,94,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-green-600{--tw-gradient-from:#16a34a var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(22,163,74,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-transparent{--tw-gradient-from:transparent var(--tw-gradient-from-position)!important;--tw-gradient-to:transparent var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-white\\/0{--tw-gradient-from:hsla(0,0%,100%,0) var(--tw-gradient-from-position)!important;--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.via-black\\/20{--tw-gradient-to:transparent var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),rgba(0,0,0,.2) var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.via-green-50{--tw-gradient-to:rgba(240,253,244,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),#f0fdf4 var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.via-green-500{--tw-gradient-to:rgba(34,197,94,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),#22c55e var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.via-green-600{--tw-gradient-to:rgba(22,163,74,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),#16a34a var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.via-white\\/20{--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),hsla(0,0%,100%,.2) var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.to-blue-600{--tw-gradient-to:#2563eb var(--tw-gradient-to-position)!important}.to-gray-200{--tw-gradient-to:#e5e5e5 var(--tw-gradient-to-position)!important}.to-green-600{--tw-gradient-to:#16a34a var(--tw-gradient-to-position)!important}.to-green-700{--tw-gradient-to:#15803d var(--tw-gradient-to-position)!important}.to-transparent{--tw-gradient-to:transparent var(--tw-gradient-to-position)!important}.to-white\\/0{--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position)!important}.to-white\\/10{--tw-gradient-to:hsla(0,0%,100%,.1) var(--tw-gradient-to-position)!important}.bg-clip-padding{background-clip:padding-box!important}.bg-clip-text{-webkit-background-clip:text!important;background-clip:text!important}.fill-current{fill:currentColor!important}.object-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-none{-o-object-fit:none!important;object-fit:none!important}.object-bottom{-o-object-position:bottom!important;object-position:bottom!important}.p-1{padding:.25rem!important}.p-10{padding:2.5rem!important}.p-2{padding:.5rem!important}.p-20{padding:5rem!important}.p-3{padding:.75rem!important}.p-4{padding:1rem!important}.p-6{padding:1.5rem!important}.p-8{padding:2rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-20{padding-left:5rem!important;padding-right:5rem!important}.px-3{padding-left:.75rem!important;padding-right:.75rem!important}.px-4{padding-left:1rem!important;padding-right:1rem!important}.px-5{padding-left:1.25rem!important;padding-right:1.25rem!important}.px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-8{padding-left:2rem!important;padding-right:2rem!important}.py-0{padding-bottom:0!important;padding-top:0!important}.py-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-1\\.5{padding-bottom:.375rem!important;padding-top:.375rem!important}.py-10{padding-bottom:2.5rem!important;padding-top:2.5rem!important}.py-12{padding-bottom:3rem!important;padding-top:3rem!important}.py-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-20{padding-bottom:5rem!important;padding-top:5rem!important}.py-3{padding-bottom:.75rem!important;padding-top:.75rem!important}.py-4{padding-bottom:1rem!important;padding-top:1rem!important}.py-6{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-7{padding-bottom:1.75rem!important;padding-top:1.75rem!important}.py-8{padding-bottom:2rem!important;padding-top:2rem!important}.pb-10{padding-bottom:2.5rem!important}.pb-3{padding-bottom:.75rem!important}.pb-6{padding-bottom:1.5rem!important}.pb-8{padding-bottom:2rem!important}.pl-5{padding-left:1.25rem!important}.pl-6{padding-left:1.5rem!important}.pr-10{padding-right:2.5rem!important}.pr-3{padding-right:.75rem!important}.pr-4{padding-right:1rem!important}.pr-56{padding-right:14rem!important}.pr-8{padding-right:2rem!important}.pt-1{padding-top:.25rem!important}.pt-10{padding-top:2.5rem!important}.pt-2{padding-top:.5rem!important}.pt-20{padding-top:5rem!important}.pt-6{padding-top:1.5rem!important}.text-left{text-align:left!important}.text-center{text-align:center!important}.text-right{text-align:right!important}.align-middle{vertical-align:middle!important}.text-2xl{font-size:1.5rem!important;line-height:2rem!important}.text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.text-4xl{font-size:2.25rem!important;line-height:2.5rem!important}.text-6xl{font-size:3.75rem!important;line-height:1!important}.text-base{font-size:1rem!important;line-height:1.5rem!important}.text-lg{font-size:1.125rem!important;line-height:1.75rem!important}.text-sm{font-size:.875rem!important;line-height:1.25rem!important}.text-xl{font-size:1.25rem!important;line-height:1.75rem!important}.text-xs{font-size:.75rem!important;line-height:1rem!important}.font-bold{font-weight:700!important}.font-extrabold{font-weight:800!important}.font-light{font-weight:300!important}.font-medium{font-weight:500!important}.font-normal{font-weight:400!important}.font-semibold{font-weight:600!important}.uppercase{text-transform:uppercase!important}.capitalize{text-transform:capitalize!important}.italic{font-style:italic!important}.leading-relaxed{line-height:1.625!important}.text-black{--tw-text-opacity:1!important;color:#000!important;color:rgba(0,0,0,var(--tw-text-opacity,1))!important}.text-blue-400{--tw-text-opacity:1!important;color:#60a5fa!important;color:rgba(96,165,250,var(--tw-text-opacity,1))!important}.text-blue-500{--tw-text-opacity:1!important;color:#3b82f6!important;color:rgba(59,130,246,var(--tw-text-opacity,1))!important}.text-blue-600{--tw-text-opacity:1!important;color:#2563eb!important;color:rgba(37,99,235,var(--tw-text-opacity,1))!important}.text-blue-700{--tw-text-opacity:1!important;color:#1d4ed8!important;color:rgba(29,78,216,var(--tw-text-opacity,1))!important}.text-gray-200{--tw-text-opacity:1!important;color:#e5e5e5!important;color:rgba(229,229,229,var(--tw-text-opacity,1))!important}.text-gray-300{--tw-text-opacity:1!important;color:#d4d4d4!important;color:rgba(212,212,212,var(--tw-text-opacity,1))!important}.text-gray-400{--tw-text-opacity:1!important;color:#a3a3a3!important;color:rgba(163,163,163,var(--tw-text-opacity,1))!important}.text-gray-500{--tw-text-opacity:1!important;color:#737373!important;color:rgba(115,115,115,var(--tw-text-opacity,1))!important}.text-gray-600{--tw-text-opacity:1!important;color:#525252!important;color:rgba(82,82,82,var(--tw-text-opacity,1))!important}.text-gray-700{--tw-text-opacity:1!important;color:#404040!important;color:rgba(64,64,64,var(--tw-text-opacity,1))!important}.text-gray-800{--tw-text-opacity:1!important;color:#262626!important;color:rgba(38,38,38,var(--tw-text-opacity,1))!important}.text-gray-900{--tw-text-opacity:1!important;color:#171717!important;color:rgba(23,23,23,var(--tw-text-opacity,1))!important}.text-green-400{--tw-text-opacity:1!important;color:#4ade80!important;color:rgba(74,222,128,var(--tw-text-opacity,1))!important}.text-green-600{--tw-text-opacity:1!important;color:#16a34a!important;color:rgba(22,163,74,var(--tw-text-opacity,1))!important}.text-green-700{--tw-text-opacity:1!important;color:#15803d!important;color:rgba(21,128,61,var(--tw-text-opacity,1))!important}.text-green-800{--tw-text-opacity:1!important;color:#166534!important;color:rgba(22,101,52,var(--tw-text-opacity,1))!important}.text-green-900{--tw-text-opacity:1!important;color:#14532d!important;color:rgba(20,83,45,var(--tw-text-opacity,1))!important}.text-indigo-50{--tw-text-opacity:1!important;color:#eef2ff!important;color:rgba(238,242,255,var(--tw-text-opacity,1))!important}.text-orange-400{--tw-text-opacity:1!important;color:#fb923c!important;color:rgba(251,146,60,var(--tw-text-opacity,1))!important}.text-orange-500{--tw-text-opacity:1!important;color:#f97316!important;color:rgba(249,115,22,var(--tw-text-opacity,1))!important}.text-orange-600{--tw-text-opacity:1!important;color:#ea580c!important;color:rgba(234,88,12,var(--tw-text-opacity,1))!important}.text-purple-700{--tw-text-opacity:1!important;color:#7e22ce!important;color:rgba(126,34,206,var(--tw-text-opacity,1))!important}.text-red-400{--tw-text-opacity:1!important;color:#fb7185!important;color:rgba(251,113,133,var(--tw-text-opacity,1))!important}.text-red-500{--tw-text-opacity:1!important;color:#f43f5e!important;color:rgba(244,63,94,var(--tw-text-opacity,1))!important}.text-red-600{--tw-text-opacity:1!important;color:#e11d48!important;color:rgba(225,29,72,var(--tw-text-opacity,1))!important}.text-red-700{--tw-text-opacity:1!important;color:#be123c!important;color:rgba(190,18,60,var(--tw-text-opacity,1))!important}.text-red-800{--tw-text-opacity:1!important;color:#9f1239!important;color:rgba(159,18,57,var(--tw-text-opacity,1))!important}.text-transparent{color:transparent!important}.text-white{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}.text-white\\/70{color:hsla(0,0%,100%,.7)!important}.text-white\\/90{color:hsla(0,0%,100%,.9)!important}.text-yellow-400{--tw-text-opacity:1!important;color:#fbbf24!important;color:rgba(251,191,36,var(--tw-text-opacity,1))!important}.underline{text-decoration-line:underline!important}.line-through{text-decoration-line:line-through!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-75{opacity:.75!important}.opacity-80{opacity:.8!important}.opacity-90{opacity:.9!important}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05)!important;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 1px 2px 0 rgba(0,0,0,.05)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-gray-50{--tw-shadow-color:#fafafa!important;--tw-shadow:var(--tw-shadow-colored)!important}.outline-none{outline:2px solid transparent!important;outline-offset:2px!important}.outline{outline-style:solid!important}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)!important}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px)!important;backdrop-filter:blur(4px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)!important;backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)!important}.transition{transition-duration:.15s!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-all{transition-duration:.15s!important;transition-property:all!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-colors{transition-duration:.15s!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-opacity{transition-duration:.15s!important;transition-property:opacity!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-shadow{transition-duration:.15s!important;transition-property:box-shadow!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-transform{transition-duration:.15s!important;transition-property:transform!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.duration-1000{transition-duration:1s!important}.duration-200{transition-duration:.2s!important}.duration-300{transition-duration:.3s!important}.duration-500{transition-duration:.5s!important}.duration-700{transition-duration:.7s!important}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)!important}.file\\:mr-4::file-selector-button{margin-right:1rem!important}.file\\:rounded-md::file-selector-button{border-radius:.375rem!important}.file\\:border-0::file-selector-button{border-width:0!important}.file\\:bg-orange-500::file-selector-button{--tw-bg-opacity:1!important;background-color:#f97316!important;background-color:rgba(249,115,22,var(--tw-bg-opacity,1))!important}.file\\:px-4::file-selector-button{padding-left:1rem!important;padding-right:1rem!important}.file\\:py-2::file-selector-button{padding-bottom:.5rem!important;padding-top:.5rem!important}.file\\:text-sm::file-selector-button{font-size:.875rem!important;line-height:1.25rem!important}.file\\:font-semibold::file-selector-button{font-weight:600!important}.file\\:text-white::file-selector-button{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}.even\\:bg-gray-100:nth-child(2n){--tw-bg-opacity:1!important;background-color:#f5f5f5!important;background-color:rgba(245,245,245,var(--tw-bg-opacity,1))!important}.focus-within\\:border-gray-500:focus-within{--tw-border-opacity:1!important;border-color:#737373!important;border-color:rgba(115,115,115,var(--tw-border-opacity,1))!important}.hover\\:-translate-y-3:hover{--tw-translate-y:-0.75rem!important;transform:translate(var(--tw-translate-x),-.75rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.hover\\:scale-105:hover{--tw-scale-x:1.05!important;--tw-scale-y:1.05!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.05) scaleY(1.05)!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.hover\\:scale-\\[1\\.02\\]:hover{--tw-scale-x:1.02!important;--tw-scale-y:1.02!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.02) scaleY(1.02)!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.hover\\:border-gray-400:hover{--tw-border-opacity:1!important;border-color:#a3a3a3!important;border-color:rgba(163,163,163,var(--tw-border-opacity,1))!important}.hover\\:border-white\\/40:hover{border-color:hsla(0,0%,100%,.4)!important}.hover\\:bg-blue-400:hover{--tw-bg-opacity:1!important;background-color:#60a5fa!important;background-color:rgba(96,165,250,var(--tw-bg-opacity,1))!important}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1!important;background-color:#1d4ed8!important;background-color:rgba(29,78,216,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1!important;background-color:#f5f5f5!important;background-color:rgba(245,245,245,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1!important;background-color:#e5e5e5!important;background-color:rgba(229,229,229,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1!important;background-color:#a3a3a3!important;background-color:rgba(163,163,163,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-500:hover{--tw-bg-opacity:1!important;background-color:#737373!important;background-color:rgba(115,115,115,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-600:hover{--tw-bg-opacity:1!important;background-color:#525252!important;background-color:rgba(82,82,82,var(--tw-bg-opacity,1))!important}.hover\\:bg-green-600:hover{--tw-bg-opacity:1!important;background-color:#16a34a!important;background-color:rgba(22,163,74,var(--tw-bg-opacity,1))!important}.hover\\:bg-orange-100:hover{--tw-bg-opacity:1!important;background-color:#ffedd5!important;background-color:rgba(255,237,213,var(--tw-bg-opacity,1))!important}.hover\\:bg-orange-500:hover{--tw-bg-opacity:1!important;background-color:#f97316!important;background-color:rgba(249,115,22,var(--tw-bg-opacity,1))!important}.hover\\:bg-orange-600:hover{--tw-bg-opacity:1!important;background-color:#ea580c!important;background-color:rgba(234,88,12,var(--tw-bg-opacity,1))!important}.hover\\:bg-orange-700:hover{--tw-bg-opacity:1!important;background-color:#c2410c!important;background-color:rgba(194,65,12,var(--tw-bg-opacity,1))!important}.hover\\:bg-red-50:hover{--tw-bg-opacity:1!important;background-color:#fff1f2!important;background-color:rgba(255,241,242,var(--tw-bg-opacity,1))!important}.hover\\:bg-red-600:hover{--tw-bg-opacity:1!important;background-color:#e11d48!important;background-color:rgba(225,29,72,var(--tw-bg-opacity,1))!important}.hover\\:bg-white:hover{--tw-bg-opacity:1!important;background-color:#fff!important;background-color:rgba(255,255,255,var(--tw-bg-opacity,1))!important}.hover\\:bg-white\\/20:hover{background-color:hsla(0,0%,100%,.2)!important}.hover\\:from-blue-600:hover{--tw-gradient-from:#2563eb var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(37,99,235,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.hover\\:from-green-600:hover{--tw-gradient-from:#16a34a var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(22,163,74,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.hover\\:via-green-700:hover{--tw-gradient-to:rgba(21,128,61,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),#15803d var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.hover\\:to-blue-700:hover{--tw-gradient-to:#1d4ed8 var(--tw-gradient-to-position)!important}.hover\\:text-blue-700:hover{--tw-text-opacity:1!important;color:#1d4ed8!important;color:rgba(29,78,216,var(--tw-text-opacity,1))!important}.hover\\:text-blue-800:hover{--tw-text-opacity:1!important;color:#1e40af!important;color:rgba(30,64,175,var(--tw-text-opacity,1))!important}.hover\\:text-gray-900:hover{--tw-text-opacity:1!important;color:#171717!important;color:rgba(23,23,23,var(--tw-text-opacity,1))!important}.hover\\:text-indigo-100:hover{--tw-text-opacity:1!important;color:#e0e7ff!important;color:rgba(224,231,255,var(--tw-text-opacity,1))!important}.hover\\:text-orange-500:hover{--tw-text-opacity:1!important;color:#f97316!important;color:rgba(249,115,22,var(--tw-text-opacity,1))!important}.hover\\:text-purple-400:hover{--tw-text-opacity:1!important;color:#c084fc!important;color:rgba(192,132,252,var(--tw-text-opacity,1))!important}.hover\\:text-red-700:hover{--tw-text-opacity:1!important;color:#be123c!important;color:rgba(190,18,60,var(--tw-text-opacity,1))!important}.hover\\:text-white:hover{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}.hover\\:underline:hover{text-decoration-line:underline!important}.hover\\:opacity-90:hover{opacity:.9!important}.hover\\:shadow-2xl:hover{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25)!important;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.hover\\:file\\:bg-orange-600::file-selector-button:hover{--tw-bg-opacity:1!important;background-color:#ea580c!important;background-color:rgba(234,88,12,var(--tw-bg-opacity,1))!important}.focus\\:border-blue-400:focus{--tw-border-opacity:1!important;border-color:#60a5fa!important;border-color:rgba(96,165,250,var(--tw-border-opacity,1))!important}.focus\\:border-blue-600:focus{--tw-border-opacity:1!important;border-color:#2563eb!important;border-color:rgba(37,99,235,var(--tw-border-opacity,1))!important}.focus\\:border-gray-400:focus{--tw-border-opacity:1!important;border-color:#a3a3a3!important;border-color:rgba(163,163,163,var(--tw-border-opacity,1))!important}.focus\\:border-gray-500:focus{--tw-border-opacity:1!important;border-color:#737373!important;border-color:rgba(115,115,115,var(--tw-border-opacity,1))!important}.focus\\:border-orange-500:focus{--tw-border-opacity:1!important;border-color:#f97316!important;border-color:rgba(249,115,22,var(--tw-border-opacity,1))!important}.focus\\:border-purple-500:focus{--tw-border-opacity:1!important;border-color:#a855f7!important;border-color:rgba(168,85,247,var(--tw-border-opacity,1))!important}.focus\\:bg-white:focus{--tw-bg-opacity:1!important;background-color:#fff!important;background-color:rgba(255,255,255,var(--tw-bg-opacity,1))!important}.focus\\:text-gray-700:focus{--tw-text-opacity:1!important;color:#404040!important;color:rgba(64,64,64,var(--tw-text-opacity,1))!important}.focus\\:outline-none:focus{outline:2px solid transparent!important;outline-offset:2px!important}.focus\\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)!important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)!important}.focus\\:ring-2:focus,.focus\\:ring:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent!important;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)!important}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)!important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)!important}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)!important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)!important;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent!important;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)!important}.focus\\:ring-orange-500:focus{--tw-ring-opacity:1!important;--tw-ring-color:rgba(249,115,22,var(--tw-ring-opacity,1))!important}.focus\\:ring-white\\/30:focus{--tw-ring-color:hsla(0,0%,100%,.3)!important}.group:hover .group-hover\\:block{display:block!important}.group\\/apply:hover .group-hover\\/apply\\:translate-x-1{--tw-translate-x:0.25rem!important;transform:translate(.25rem,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group\\/apply:hover .group-hover\\/apply\\:translate-x-full{--tw-translate-x:100%!important;transform:translate(100%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group:hover .group-hover\\:translate-y-0\\.5{--tw-translate-y:0.125rem!important;transform:translate(var(--tw-translate-x),.125rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group\\/apply:hover .group-hover\\/apply\\:rotate-12{--tw-rotate:12deg!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(12deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group:hover .group-hover\\:scale-110,.group\\/btn:hover .group-hover\\/btn\\:scale-110{--tw-scale-x:1.1!important;--tw-scale-y:1.1!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1)!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group:hover .group-hover\\:text-green-600{--tw-text-opacity:1!important;color:#16a34a!important;color:rgba(22,163,74,var(--tw-text-opacity,1))!important}.group:hover .group-hover\\:text-white{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}.group:hover .group-hover\\:opacity-100{opacity:1!important}.group:hover .group-hover\\:shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}@media (min-width:640px){.sm\\:block{display:block!important}.sm\\:hidden{display:none!important}.sm\\:w-72{width:18rem!important}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.sm\\:flex-row{flex-direction:row!important}.sm\\:items-center{align-items:center!important}.sm\\:gap-8{gap:2rem!important}.sm\\:space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0!important;margin-bottom:0!important;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse))!important;margin-top:1.5rem!important;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))!important}.sm\\:border-l{border-left-width:1px!important}.sm\\:border-t-0{border-top-width:0!important}.sm\\:p-8{padding:2rem!important}.sm\\:px-12{padding-left:3rem!important;padding-right:3rem!important}.sm\\:px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.sm\\:px-8{padding-right:2rem!important}.sm\\:pl-8,.sm\\:px-8{padding-left:2rem!important}.sm\\:text-left{text-align:left!important}.sm\\:text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.sm\\:text-lg{font-size:1.125rem!important;line-height:1.75rem!important}}@media (min-width:768px){.md\\:relative{position:relative!important}.md\\:col-span-3{grid-column:span 3/span 3!important}.md\\:col-span-4{grid-column:span 4/span 4!important}.md\\:col-span-6{grid-column:span 6/span 6!important}.md\\:col-span-8{grid-column:span 8/span 8!important}.md\\:col-span-9{grid-column:span 9/span 9!important}.md\\:m-6{margin:1.5rem!important}.md\\:mx-10{margin-left:2.5rem!important;margin-right:2.5rem!important}.md\\:mx-20{margin-left:5rem!important;margin-right:5rem!important}.md\\:mx-auto{margin-left:auto!important;margin-right:auto!important}.md\\:ml-1{margin-left:.25rem!important}.md\\:ml-2{margin-left:.5rem!important}.md\\:ml-6{margin-left:1.5rem!important}.md\\:mr-1{margin-right:.25rem!important}.md\\:mr-2{margin-right:.5rem!important}.md\\:mr-20{margin-right:5rem!important}.md\\:mr-4{margin-right:1rem!important}.md\\:mt-0{margin-top:0!important}.md\\:mt-1{margin-top:.25rem!important}.md\\:mt-10{margin-top:2.5rem!important}.md\\:mt-12{margin-top:3rem!important}.md\\:mt-2{margin-top:.5rem!important}.md\\:mt-4{margin-top:1rem!important}.md\\:mt-8{margin-top:2rem!important}.md\\:block{display:block!important}.md\\:flex{display:flex!important}.md\\:grid{display:grid!important}.md\\:hidden{display:none!important}.md\\:h-10{height:2.5rem!important}.md\\:h-16{height:4rem!important}.md\\:h-20{height:5rem!important}.md\\:h-48{height:12rem!important}.md\\:h-6{height:1.5rem!important}.md\\:h-7{height:1.75rem!important}.md\\:h-8{height:2rem!important}.md\\:h-96{height:24rem!important}.md\\:w-10{width:2.5rem!important}.md\\:w-24{width:6rem!important}.md\\:w-28{width:7rem!important}.md\\:w-3\\/4{width:75%!important}.md\\:w-6{width:1.5rem!important}.md\\:w-7{width:1.75rem!important}.md\\:w-8{width:2rem!important}.md\\:w-full{width:100%!important}.md\\:translate-x-0{--tw-translate-x:0px!important;transform:translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.md\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))!important}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))!important}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))!important}.md\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))!important}.md\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))!important}.md\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))!important}.md\\:flex-row{flex-direction:row!important}.md\\:items-center{align-items:center!important}.md\\:justify-start{justify-content:flex-start!important}.md\\:justify-between{justify-content:space-between!important}.md\\:justify-around{justify-content:space-around!important}.md\\:p-10{padding:2.5rem!important}.md\\:p-4{padding:1rem!important}.md\\:px-0{padding-left:0!important;padding-right:0!important}.md\\:px-12{padding-left:3rem!important;padding-right:3rem!important}.md\\:px-2{padding-left:.5rem!important;padding-right:.5rem!important}.md\\:px-20{padding-left:5rem!important;padding-right:5rem!important}.md\\:px-24{padding-left:6rem!important;padding-right:6rem!important}.md\\:px-3{padding-left:.75rem!important;padding-right:.75rem!important}.md\\:px-32{padding-left:8rem!important;padding-right:8rem!important}.md\\:px-36{padding-left:9rem!important;padding-right:9rem!important}.md\\:px-48{padding-left:12rem!important;padding-right:12rem!important}.md\\:px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.md\\:px-8{padding-left:2rem!important;padding-right:2rem!important}.md\\:px-80{padding-left:20rem!important;padding-right:20rem!important}.md\\:px-96{padding-left:24rem!important;padding-right:24rem!important}.md\\:pl-12{padding-left:3rem!important}.md\\:pr-10{padding-right:2.5rem!important}.md\\:pt-2{padding-top:.5rem!important}.md\\:text-left{text-align:left!important}.md\\:text-2xl{font-size:1.5rem!important;line-height:2rem!important}.md\\:text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.md\\:text-6xl{font-size:3.75rem!important;line-height:1!important}.md\\:text-base{font-size:1rem!important;line-height:1.5rem!important}.md\\:text-lg{font-size:1.125rem!important;line-height:1.75rem!important}.md\\:text-sm{font-size:.875rem!important;line-height:1.25rem!important}}@media (min-width:1024px){.lg\\:min-h-screen{min-height:100vh!important}.lg\\:px-8{padding-left:2rem!important;padding-right:2rem!important}}@media (min-width:1280px){.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))!important}}@media (prefers-color-scheme:dark){.dark\\:border-gray-900{--tw-border-opacity:1!important;border-color:#171717!important;border-color:rgba(23,23,23,var(--tw-border-opacity,1))!important}.dark\\:bg-gray-800{--tw-bg-opacity:1!important;background-color:#262626!important;background-color:rgba(38,38,38,var(--tw-bg-opacity,1))!important}.dark\\:text-gray-400{--tw-text-opacity:1!important;color:#a3a3a3!important;color:rgba(163,163,163,var(--tw-text-opacity,1))!important}.dark\\:text-white{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("4b70edf3", content, true)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e5e5;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a3a3a3;opacity:1}input::-moz-placeholder, textarea::-moz-placeholder{color:#a3a3a3;opacity:1}input::placeholder,textarea::placeholder{color:#a3a3a3;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none!important}.visible{visibility:visible!important}.fixed{position:fixed!important}.absolute{position:absolute!important}.relative{position:relative!important}.sticky{position:sticky!important}.inset-0{left:0!important;right:0!important}.inset-0,.inset-y-0{bottom:0!important;top:0!important}.-bottom-1{bottom:-.25rem!important}.-right-1{right:-.25rem!important}.-top-2{top:-.5rem!important}.bottom-0{bottom:0!important}.left-0{left:0!important}.left-1\\/4{left:25%!important}.right-0{right:0!important}.right-4{right:1rem!important}.top-0{top:0!important}.top-4{top:1rem!important}.z-10{z-index:10!important}.z-30{z-index:30!important}.z-40{z-index:40!important}.z-50{z-index:50!important}.col-span-1{grid-column:span 1/span 1!important}.col-span-12{grid-column:span 12/span 12!important}.col-span-2{grid-column:span 2/span 2!important}.col-span-3{grid-column:span 3/span 3!important}.col-span-4{grid-column:span 4/span 4!important}.col-span-6{grid-column:span 6/span 6!important}.col-span-8{grid-column:span 8/span 8!important}.col-span-9{grid-column:span 9/span 9!important}.float-right{float:right!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-3{margin-left:.75rem!important;margin-right:.75rem!important}.mx-4{margin-left:1rem!important;margin-right:1rem!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.my-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-3{margin-bottom:.75rem!important;margin-top:.75rem!important}.my-4{margin-bottom:1rem!important;margin-top:1rem!important}.my-5{margin-bottom:1.25rem!important;margin-top:1.25rem!important}.my-6{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-16{margin-bottom:4rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:.75rem!important}.mb-4{margin-bottom:1rem!important}.mb-6{margin-bottom:1.5rem!important}.mb-8{margin-bottom:2rem!important}.ml-16{margin-left:4rem!important}.ml-2{margin-left:.5rem!important}.ml-3{margin-left:.75rem!important}.ml-4{margin-left:1rem!important}.ml-6{margin-left:1.5rem!important}.mr-1{margin-right:.25rem!important}.mr-10{margin-right:2.5rem!important}.mr-16{margin-right:4rem!important}.mr-2{margin-right:.5rem!important}.mr-3{margin-right:.75rem!important}.mr-4{margin-right:1rem!important}.mt-1{margin-top:.25rem!important}.mt-10{margin-top:2.5rem!important}.mt-14{margin-top:3.5rem!important}.mt-2{margin-top:.5rem!important}.mt-20{margin-top:5rem!important}.mt-3{margin-top:.75rem!important}.mt-36{margin-top:9rem!important}.mt-4{margin-top:1rem!important}.mt-5{margin-top:1.25rem!important}.mt-6{margin-top:1.5rem!important}.mt-8{margin-top:2rem!important}.block{display:block!important}.inline-block{display:inline-block!important}.flex{display:flex!important}.inline-flex{display:inline-flex!important}.table{display:table!important}.grid{display:grid!important}.hidden{display:none!important}.h-10{height:2.5rem!important}.h-12{height:3rem!important}.h-16{height:4rem!important}.h-2{height:.5rem!important}.h-20{height:5rem!important}.h-24{height:6rem!important}.h-3{height:.75rem!important}.h-32{height:8rem!important}.h-4{height:1rem!important}.h-40{height:10rem!important}.h-5{height:1.25rem!important}.h-6{height:1.5rem!important}.h-64{height:16rem!important}.h-72{height:18rem!important}.h-8{height:2rem!important}.h-80{height:20rem!important}.h-9{height:2.25rem!important}.h-96{height:24rem!important}.h-full{height:100%!important}.h-px{height:1px!important}.max-h-14{max-height:3.5rem!important}.max-h-screen{max-height:100vh!important}.min-h-full{min-height:100%!important}.min-h-screen{min-height:100vh!important}.w-1\\/2{width:50%!important}.w-10{width:2.5rem!important}.w-11\\/12{width:91.666667%!important}.w-12{width:3rem!important}.w-16{width:4rem!important}.w-2{width:.5rem!important}.w-2\\/3{width:66.666667%!important}.w-20{width:5rem!important}.w-24{width:6rem!important}.w-28{width:7rem!important}.w-3{width:.75rem!important}.w-3\\/4{width:75%!important}.w-3\\/5{width:60%!important}.w-32{width:8rem!important}.w-36{width:9rem!important}.w-4{width:1rem!important}.w-40{width:10rem!important}.w-5{width:1.25rem!important}.w-56{width:14rem!important}.w-6{width:1.5rem!important}.w-64{width:16rem!important}.w-8{width:2rem!important}.w-80{width:20rem!important}.w-96{width:24rem!important}.w-full{width:100%!important}.max-w-20{max-width:5rem!important}.max-w-3xl{max-width:48rem!important}.max-w-4xl{max-width:56rem!important}.max-w-5xl{max-width:64rem!important}.max-w-6xl{max-width:72rem!important}.max-w-7xl{max-width:80rem!important}.max-w-md{max-width:28rem!important}.max-w-screen-lg{max-width:1024px!important}.max-w-screen-xl{max-width:1280px!important}.max-w-xs{max-width:20rem!important}.flex-1{flex:1 1 0%!important}.table-auto{table-layout:auto!important}.border-collapse{border-collapse:collapse!important}.-translate-x-full{--tw-translate-x:-100%!important;transform:translate(-100%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.translate-x-full{--tw-translate-x:100%!important;transform:translate(100%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.-skew-x-12{--tw-skew-x:-12deg!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(-12deg) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.-skew-x-12,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite!important}.cursor-pointer{cursor:pointer!important}.appearance-none{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))!important}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.flex-col{flex-direction:column!important}.flex-col-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.place-content-center{align-content:center!important;justify-content:center!important;place-content:center!important}.place-content-end{align-content:end!important;justify-content:end!important;place-content:end!important}.content-center{align-content:center!important}.items-start{align-items:flex-start!important}.items-center{align-items:center!important}.justify-start{justify-content:flex-start!important}.justify-end{justify-content:flex-end!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.justify-items-center{justify-items:center!important}.gap-2{gap:.5rem!important}.gap-3{gap:.75rem!important}.gap-4{gap:1rem!important}.gap-5{gap:1.25rem!important}.gap-6{gap:1.5rem!important}.gap-8{gap:2rem!important}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0!important;margin-left:.25rem!important;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)))!important;margin-right:0!important;margin-right:calc(.25rem*var(--tw-space-x-reverse))!important}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0!important;margin-left:.5rem!important;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)))!important;margin-right:0!important;margin-right:calc(.5rem*var(--tw-space-x-reverse))!important}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0!important;margin-left:1rem!important;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)))!important;margin-right:0!important;margin-right:calc(1rem*var(--tw-space-x-reverse))!important}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0!important;margin-bottom:0!important;margin-bottom:calc(.75rem*var(--tw-space-y-reverse))!important;margin-top:.75rem!important;margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))!important}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0!important;margin-bottom:0!important;margin-bottom:calc(1rem*var(--tw-space-y-reverse))!important;margin-top:1rem!important;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))!important}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0!important;margin-bottom:0!important;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse))!important;margin-top:1.5rem!important;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))!important}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0!important;border-bottom-width:0!important;border-bottom-width:calc(1px*var(--tw-divide-y-reverse))!important;border-top-width:1px!important;border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))!important}.divide-solid>:not([hidden])~:not([hidden]){border-style:solid!important}.divide-gray-200>:not([hidden])~:not([hidden]){--tw-divide-opacity:1!important;border-color:#e5e5e5!important;border-color:rgba(229,229,229,var(--tw-divide-opacity,1))!important}.divide-gray-300>:not([hidden])~:not([hidden]){--tw-divide-opacity:1!important;border-color:#d4d4d4!important;border-color:rgba(212,212,212,var(--tw-divide-opacity,1))!important}.self-center{align-self:center!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-y-auto{overflow-y:auto!important}.overflow-y-scroll{overflow-y:scroll!important}.truncate{overflow:hidden!important;text-overflow:ellipsis!important}.truncate,.whitespace-nowrap{white-space:nowrap!important}.text-wrap{text-wrap:wrap!important}.rounded{border-radius:.25rem!important}.rounded-2xl{border-radius:1rem!important}.rounded-3xl{border-radius:1.5rem!important}.rounded-full{border-radius:9999px!important}.rounded-lg{border-radius:.5rem!important}.rounded-md{border-radius:.375rem!important}.rounded-sm{border-radius:.125rem!important}.rounded-xl{border-radius:.75rem!important}.rounded-b{border-bottom-left-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-b-md{border-bottom-left-radius:.375rem!important;border-bottom-right-radius:.375rem!important}.rounded-t{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-t-3xl{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important}.rounded-t-md{border-top-left-radius:.375rem!important;border-top-right-radius:.375rem!important}.rounded-bl-3xl{border-bottom-left-radius:1.5rem!important}.rounded-tl-3xl{border-top-left-radius:1.5rem!important}.rounded-tr-3xl{border-top-right-radius:1.5rem!important}.border{border-width:1px!important}.border-0{border-width:0!important}.border-2{border-width:2px!important}.border-b{border-bottom-width:1px!important}.border-b-2{border-bottom-width:2px!important}.border-l{border-left-width:1px!important}.border-l-4{border-left-width:4px!important}.border-r-0{border-right-width:0!important}.border-r-2{border-right-width:2px!important}.border-t{border-top-width:1px!important}.border-t-0{border-top-width:0!important}.border-t-2{border-top-width:2px!important}.border-solid{border-style:solid!important}.border-black{--tw-border-opacity:1!important;border-color:#000!important;border-color:rgba(0,0,0,var(--tw-border-opacity,1))!important}.border-blue-200{--tw-border-opacity:1!important;border-color:#bfdbfe!important;border-color:rgba(191,219,254,var(--tw-border-opacity,1))!important}.border-blue-500{--tw-border-opacity:1!important;border-color:#3b82f6!important;border-color:rgba(59,130,246,var(--tw-border-opacity,1))!important}.border-gray-100{--tw-border-opacity:1!important;border-color:#f5f5f5!important;border-color:rgba(245,245,245,var(--tw-border-opacity,1))!important}.border-gray-100\\/50{border-color:hsla(0,0%,96%,.5)!important}.border-gray-200{--tw-border-opacity:1!important;border-color:#e5e5e5!important;border-color:rgba(229,229,229,var(--tw-border-opacity,1))!important}.border-gray-300{--tw-border-opacity:1!important;border-color:#d4d4d4!important;border-color:rgba(212,212,212,var(--tw-border-opacity,1))!important}.border-gray-400{--tw-border-opacity:1!important;border-color:#a3a3a3!important;border-color:rgba(163,163,163,var(--tw-border-opacity,1))!important}.border-gray-500{--tw-border-opacity:1!important;border-color:#737373!important;border-color:rgba(115,115,115,var(--tw-border-opacity,1))!important}.border-green-100{--tw-border-opacity:1!important;border-color:#dcfce7!important;border-color:rgba(220,252,231,var(--tw-border-opacity,1))!important}.border-green-200{--tw-border-opacity:1!important;border-color:#bbf7d0!important;border-color:rgba(187,247,208,var(--tw-border-opacity,1))!important}.border-green-300{--tw-border-opacity:1!important;border-color:#86efac!important;border-color:rgba(134,239,172,var(--tw-border-opacity,1))!important}.border-green-400{--tw-border-opacity:1!important;border-color:#4ade80!important;border-color:rgba(74,222,128,var(--tw-border-opacity,1))!important}.border-green-500{--tw-border-opacity:1!important;border-color:#22c55e!important;border-color:rgba(34,197,94,var(--tw-border-opacity,1))!important}.border-orange-200{--tw-border-opacity:1!important;border-color:#fed7aa!important;border-color:rgba(254,215,170,var(--tw-border-opacity,1))!important}.border-orange-600{--tw-border-opacity:1!important;border-color:#ea580c!important;border-color:rgba(234,88,12,var(--tw-border-opacity,1))!important}.border-purple-200{--tw-border-opacity:1!important;border-color:#e9d5ff!important;border-color:rgba(233,213,255,var(--tw-border-opacity,1))!important}.border-purple-500{--tw-border-opacity:1!important;border-color:#a855f7!important;border-color:rgba(168,85,247,var(--tw-border-opacity,1))!important}.border-red-300{--tw-border-opacity:1!important;border-color:#fda4af!important;border-color:rgba(253,164,175,var(--tw-border-opacity,1))!important}.border-red-400{--tw-border-opacity:1!important;border-color:#fb7185!important;border-color:rgba(251,113,133,var(--tw-border-opacity,1))!important}.border-white{--tw-border-opacity:1!important;border-color:#fff!important;border-color:rgba(255,255,255,var(--tw-border-opacity,1))!important}.border-white\\/20{border-color:hsla(0,0%,100%,.2)!important}.bg-black{--tw-bg-opacity:1!important;background-color:#000!important;background-color:rgba(0,0,0,var(--tw-bg-opacity,1))!important}.bg-blue-100{--tw-bg-opacity:1!important;background-color:#dbeafe!important;background-color:rgba(219,234,254,var(--tw-bg-opacity,1))!important}.bg-blue-50{--tw-bg-opacity:1!important;background-color:#eff6ff!important;background-color:rgba(239,246,255,var(--tw-bg-opacity,1))!important}.bg-blue-500{--tw-bg-opacity:1!important;background-color:#3b82f6!important;background-color:rgba(59,130,246,var(--tw-bg-opacity,1))!important}.bg-blue-900{--tw-bg-opacity:1!important;background-color:#1e3a8a!important;background-color:rgba(30,58,138,var(--tw-bg-opacity,1))!important}.bg-gray-100{--tw-bg-opacity:1!important;background-color:#f5f5f5!important;background-color:rgba(245,245,245,var(--tw-bg-opacity,1))!important}.bg-gray-200{--tw-bg-opacity:1!important;background-color:#e5e5e5!important;background-color:rgba(229,229,229,var(--tw-bg-opacity,1))!important}.bg-gray-300{--tw-bg-opacity:1!important;background-color:#d4d4d4!important;background-color:rgba(212,212,212,var(--tw-bg-opacity,1))!important}.bg-gray-400{--tw-bg-opacity:1!important;background-color:#a3a3a3!important;background-color:rgba(163,163,163,var(--tw-bg-opacity,1))!important}.bg-gray-50{--tw-bg-opacity:1!important;background-color:#fafafa!important;background-color:rgba(250,250,250,var(--tw-bg-opacity,1))!important}.bg-gray-500{--tw-bg-opacity:1!important;background-color:#737373!important;background-color:rgba(115,115,115,var(--tw-bg-opacity,1))!important}.bg-gray-600{--tw-bg-opacity:1!important;background-color:#525252!important;background-color:rgba(82,82,82,var(--tw-bg-opacity,1))!important}.bg-gray-900{--tw-bg-opacity:1!important;background-color:#171717!important;background-color:rgba(23,23,23,var(--tw-bg-opacity,1))!important}.bg-green-100{--tw-bg-opacity:1!important;background-color:#dcfce7!important;background-color:rgba(220,252,231,var(--tw-bg-opacity,1))!important}.bg-green-400{--tw-bg-opacity:1!important;background-color:#4ade80!important;background-color:rgba(74,222,128,var(--tw-bg-opacity,1))!important}.bg-green-500{--tw-bg-opacity:1!important;background-color:#22c55e!important;background-color:rgba(34,197,94,var(--tw-bg-opacity,1))!important}.bg-green-600{--tw-bg-opacity:1!important;background-color:#16a34a!important;background-color:rgba(22,163,74,var(--tw-bg-opacity,1))!important}.bg-green-700{--tw-bg-opacity:1!important;background-color:#15803d!important;background-color:rgba(21,128,61,var(--tw-bg-opacity,1))!important}.bg-green-900{--tw-bg-opacity:1!important;background-color:#14532d!important;background-color:rgba(20,83,45,var(--tw-bg-opacity,1))!important}.bg-orange-400{--tw-bg-opacity:1!important;background-color:#fb923c!important;background-color:rgba(251,146,60,var(--tw-bg-opacity,1))!important}.bg-orange-500{--tw-bg-opacity:1!important;background-color:#f97316!important;background-color:rgba(249,115,22,var(--tw-bg-opacity,1))!important}.bg-orange-600{--tw-bg-opacity:1!important;background-color:#ea580c!important;background-color:rgba(234,88,12,var(--tw-bg-opacity,1))!important}.bg-orange-700{--tw-bg-opacity:1!important;background-color:#c2410c!important;background-color:rgba(194,65,12,var(--tw-bg-opacity,1))!important}.bg-purple-50{--tw-bg-opacity:1!important;background-color:#faf5ff!important;background-color:rgba(250,245,255,var(--tw-bg-opacity,1))!important}.bg-red-100{--tw-bg-opacity:1!important;background-color:#ffe4e6!important;background-color:rgba(255,228,230,var(--tw-bg-opacity,1))!important}.bg-red-500{--tw-bg-opacity:1!important;background-color:#f43f5e!important;background-color:rgba(244,63,94,var(--tw-bg-opacity,1))!important}.bg-red-600{--tw-bg-opacity:1!important;background-color:#e11d48!important;background-color:rgba(225,29,72,var(--tw-bg-opacity,1))!important}.bg-red-700{--tw-bg-opacity:1!important;background-color:#be123c!important;background-color:rgba(190,18,60,var(--tw-bg-opacity,1))!important}.bg-red-900{background-color:#881337!important;background-color:rgba(136,19,55,var(--tw-bg-opacity,1))!important}.bg-red-900,.bg-white{--tw-bg-opacity:1!important}.bg-white{background-color:#fff!important;background-color:rgba(255,255,255,var(--tw-bg-opacity,1))!important}.bg-white\\/10{background-color:hsla(0,0%,100%,.1)!important}.bg-white\\/90{background-color:hsla(0,0%,100%,.9)!important}.bg-opacity-50{--tw-bg-opacity:0.5!important}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))!important}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))!important}.bg-gradient-to-t{background-image:linear-gradient(to top,var(--tw-gradient-stops))!important}.from-black\\/60{--tw-gradient-from:rgba(0,0,0,.6) var(--tw-gradient-from-position)!important;--tw-gradient-to:transparent var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-blue-500{--tw-gradient-from:#3b82f6 var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(59,130,246,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-gray-100{--tw-gradient-from:#f5f5f5 var(--tw-gradient-from-position)!important;--tw-gradient-to:hsla(0,0%,96%,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-green-400{--tw-gradient-from:#4ade80 var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(74,222,128,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-green-50{--tw-gradient-from:#f0fdf4 var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(240,253,244,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-green-500{--tw-gradient-from:#22c55e var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(34,197,94,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-green-600{--tw-gradient-from:#16a34a var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(22,163,74,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-transparent{--tw-gradient-from:transparent var(--tw-gradient-from-position)!important;--tw-gradient-to:transparent var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.from-white\\/0{--tw-gradient-from:hsla(0,0%,100%,0) var(--tw-gradient-from-position)!important;--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.via-black\\/20{--tw-gradient-to:transparent var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),rgba(0,0,0,.2) var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.via-green-50{--tw-gradient-to:rgba(240,253,244,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),#f0fdf4 var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.via-green-500{--tw-gradient-to:rgba(34,197,94,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),#22c55e var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.via-green-600{--tw-gradient-to:rgba(22,163,74,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),#16a34a var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.via-white\\/20{--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),hsla(0,0%,100%,.2) var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.to-blue-600{--tw-gradient-to:#2563eb var(--tw-gradient-to-position)!important}.to-gray-200{--tw-gradient-to:#e5e5e5 var(--tw-gradient-to-position)!important}.to-green-600{--tw-gradient-to:#16a34a var(--tw-gradient-to-position)!important}.to-green-700{--tw-gradient-to:#15803d var(--tw-gradient-to-position)!important}.to-transparent{--tw-gradient-to:transparent var(--tw-gradient-to-position)!important}.to-white\\/0{--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position)!important}.to-white\\/10{--tw-gradient-to:hsla(0,0%,100%,.1) var(--tw-gradient-to-position)!important}.bg-clip-padding{background-clip:padding-box!important}.bg-clip-text{-webkit-background-clip:text!important;background-clip:text!important}.fill-current{fill:currentColor!important}.object-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-none{-o-object-fit:none!important;object-fit:none!important}.object-bottom{-o-object-position:bottom!important;object-position:bottom!important}.p-1{padding:.25rem!important}.p-10{padding:2.5rem!important}.p-2{padding:.5rem!important}.p-20{padding:5rem!important}.p-3{padding:.75rem!important}.p-4{padding:1rem!important}.p-6{padding:1.5rem!important}.p-8{padding:2rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-20{padding-left:5rem!important;padding-right:5rem!important}.px-3{padding-left:.75rem!important;padding-right:.75rem!important}.px-4{padding-left:1rem!important;padding-right:1rem!important}.px-5{padding-left:1.25rem!important;padding-right:1.25rem!important}.px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-8{padding-left:2rem!important;padding-right:2rem!important}.py-0{padding-bottom:0!important;padding-top:0!important}.py-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-1\\.5{padding-bottom:.375rem!important;padding-top:.375rem!important}.py-10{padding-bottom:2.5rem!important;padding-top:2.5rem!important}.py-12{padding-bottom:3rem!important;padding-top:3rem!important}.py-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-20{padding-bottom:5rem!important;padding-top:5rem!important}.py-3{padding-bottom:.75rem!important;padding-top:.75rem!important}.py-4{padding-bottom:1rem!important;padding-top:1rem!important}.py-6{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-7{padding-bottom:1.75rem!important;padding-top:1.75rem!important}.py-8{padding-bottom:2rem!important;padding-top:2rem!important}.pb-10{padding-bottom:2.5rem!important}.pb-3{padding-bottom:.75rem!important}.pb-6{padding-bottom:1.5rem!important}.pb-8{padding-bottom:2rem!important}.pl-5{padding-left:1.25rem!important}.pl-6{padding-left:1.5rem!important}.pr-10{padding-right:2.5rem!important}.pr-3{padding-right:.75rem!important}.pr-4{padding-right:1rem!important}.pr-56{padding-right:14rem!important}.pr-8{padding-right:2rem!important}.pt-1{padding-top:.25rem!important}.pt-10{padding-top:2.5rem!important}.pt-2{padding-top:.5rem!important}.pt-20{padding-top:5rem!important}.pt-6{padding-top:1.5rem!important}.text-left{text-align:left!important}.text-center{text-align:center!important}.text-right{text-align:right!important}.align-middle{vertical-align:middle!important}.text-2xl{font-size:1.5rem!important;line-height:2rem!important}.text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.text-4xl{font-size:2.25rem!important;line-height:2.5rem!important}.text-6xl{font-size:3.75rem!important;line-height:1!important}.text-base{font-size:1rem!important;line-height:1.5rem!important}.text-lg{font-size:1.125rem!important;line-height:1.75rem!important}.text-sm{font-size:.875rem!important;line-height:1.25rem!important}.text-xl{font-size:1.25rem!important;line-height:1.75rem!important}.text-xs{font-size:.75rem!important;line-height:1rem!important}.font-bold{font-weight:700!important}.font-extrabold{font-weight:800!important}.font-light{font-weight:300!important}.font-medium{font-weight:500!important}.font-normal{font-weight:400!important}.font-semibold{font-weight:600!important}.uppercase{text-transform:uppercase!important}.capitalize{text-transform:capitalize!important}.italic{font-style:italic!important}.leading-relaxed{line-height:1.625!important}.text-black{--tw-text-opacity:1!important;color:#000!important;color:rgba(0,0,0,var(--tw-text-opacity,1))!important}.text-blue-400{--tw-text-opacity:1!important;color:#60a5fa!important;color:rgba(96,165,250,var(--tw-text-opacity,1))!important}.text-blue-500{--tw-text-opacity:1!important;color:#3b82f6!important;color:rgba(59,130,246,var(--tw-text-opacity,1))!important}.text-blue-600{--tw-text-opacity:1!important;color:#2563eb!important;color:rgba(37,99,235,var(--tw-text-opacity,1))!important}.text-blue-700{--tw-text-opacity:1!important;color:#1d4ed8!important;color:rgba(29,78,216,var(--tw-text-opacity,1))!important}.text-gray-200{--tw-text-opacity:1!important;color:#e5e5e5!important;color:rgba(229,229,229,var(--tw-text-opacity,1))!important}.text-gray-300{--tw-text-opacity:1!important;color:#d4d4d4!important;color:rgba(212,212,212,var(--tw-text-opacity,1))!important}.text-gray-400{--tw-text-opacity:1!important;color:#a3a3a3!important;color:rgba(163,163,163,var(--tw-text-opacity,1))!important}.text-gray-500{--tw-text-opacity:1!important;color:#737373!important;color:rgba(115,115,115,var(--tw-text-opacity,1))!important}.text-gray-600{--tw-text-opacity:1!important;color:#525252!important;color:rgba(82,82,82,var(--tw-text-opacity,1))!important}.text-gray-700{--tw-text-opacity:1!important;color:#404040!important;color:rgba(64,64,64,var(--tw-text-opacity,1))!important}.text-gray-800{--tw-text-opacity:1!important;color:#262626!important;color:rgba(38,38,38,var(--tw-text-opacity,1))!important}.text-gray-900{--tw-text-opacity:1!important;color:#171717!important;color:rgba(23,23,23,var(--tw-text-opacity,1))!important}.text-green-400{--tw-text-opacity:1!important;color:#4ade80!important;color:rgba(74,222,128,var(--tw-text-opacity,1))!important}.text-green-600{--tw-text-opacity:1!important;color:#16a34a!important;color:rgba(22,163,74,var(--tw-text-opacity,1))!important}.text-green-700{--tw-text-opacity:1!important;color:#15803d!important;color:rgba(21,128,61,var(--tw-text-opacity,1))!important}.text-green-800{--tw-text-opacity:1!important;color:#166534!important;color:rgba(22,101,52,var(--tw-text-opacity,1))!important}.text-green-900{--tw-text-opacity:1!important;color:#14532d!important;color:rgba(20,83,45,var(--tw-text-opacity,1))!important}.text-indigo-50{--tw-text-opacity:1!important;color:#eef2ff!important;color:rgba(238,242,255,var(--tw-text-opacity,1))!important}.text-orange-400{--tw-text-opacity:1!important;color:#fb923c!important;color:rgba(251,146,60,var(--tw-text-opacity,1))!important}.text-orange-500{--tw-text-opacity:1!important;color:#f97316!important;color:rgba(249,115,22,var(--tw-text-opacity,1))!important}.text-orange-600{--tw-text-opacity:1!important;color:#ea580c!important;color:rgba(234,88,12,var(--tw-text-opacity,1))!important}.text-purple-700{--tw-text-opacity:1!important;color:#7e22ce!important;color:rgba(126,34,206,var(--tw-text-opacity,1))!important}.text-red-400{--tw-text-opacity:1!important;color:#fb7185!important;color:rgba(251,113,133,var(--tw-text-opacity,1))!important}.text-red-500{--tw-text-opacity:1!important;color:#f43f5e!important;color:rgba(244,63,94,var(--tw-text-opacity,1))!important}.text-red-600{--tw-text-opacity:1!important;color:#e11d48!important;color:rgba(225,29,72,var(--tw-text-opacity,1))!important}.text-red-700{--tw-text-opacity:1!important;color:#be123c!important;color:rgba(190,18,60,var(--tw-text-opacity,1))!important}.text-red-800{--tw-text-opacity:1!important;color:#9f1239!important;color:rgba(159,18,57,var(--tw-text-opacity,1))!important}.text-transparent{color:transparent!important}.text-white{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}.text-white\\/70{color:hsla(0,0%,100%,.7)!important}.text-white\\/90{color:hsla(0,0%,100%,.9)!important}.text-yellow-400{--tw-text-opacity:1!important;color:#fbbf24!important;color:rgba(251,191,36,var(--tw-text-opacity,1))!important}.underline{text-decoration-line:underline!important}.line-through{text-decoration-line:line-through!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-75{opacity:.75!important}.opacity-80{opacity:.8!important}.opacity-90{opacity:.9!important}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05)!important;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 1px 2px 0 rgba(0,0,0,.05)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.shadow-gray-50{--tw-shadow-color:#fafafa!important;--tw-shadow:var(--tw-shadow-colored)!important}.outline-none{outline:2px solid transparent!important;outline-offset:2px!important}.outline{outline-style:solid!important}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)!important}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px)!important;backdrop-filter:blur(4px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)!important;backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)!important}.transition{transition-duration:.15s!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-all{transition-duration:.15s!important;transition-property:all!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-colors{transition-duration:.15s!important;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-opacity{transition-duration:.15s!important;transition-property:opacity!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-shadow{transition-duration:.15s!important;transition-property:box-shadow!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.transition-transform{transition-duration:.15s!important;transition-property:transform!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.duration-1000{transition-duration:1s!important}.duration-200{transition-duration:.2s!important}.duration-300{transition-duration:.3s!important}.duration-500{transition-duration:.5s!important}.duration-700{transition-duration:.7s!important}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)!important}body,html{font-family:\"Segoe UI\",Tahoma,Geneva,Verdana,sans-serif}.date-pkr input{border:2px solid #dcdcdc;border-radius:25px;color:#000;font-weight:700;margin-bottom:5px;margin-left:5px;padding-bottom:2px;padding-left:20px;padding-top:2px;width:250px}.date-pkr input:focus{border:2px solid #dcdcdc}.date-pkr input::-moz-placeholder{color:#36454f}.date-pkr input::placeholder{color:#36454f}.file\\:mr-4::file-selector-button{margin-right:1rem!important}.file\\:rounded-md::file-selector-button{border-radius:.375rem!important}.file\\:border-0::file-selector-button{border-width:0!important}.file\\:bg-orange-500::file-selector-button{--tw-bg-opacity:1!important;background-color:#f97316!important;background-color:rgba(249,115,22,var(--tw-bg-opacity,1))!important}.file\\:px-4::file-selector-button{padding-left:1rem!important;padding-right:1rem!important}.file\\:py-2::file-selector-button{padding-bottom:.5rem!important;padding-top:.5rem!important}.file\\:text-sm::file-selector-button{font-size:.875rem!important;line-height:1.25rem!important}.file\\:font-semibold::file-selector-button{font-weight:600!important}.file\\:text-white::file-selector-button{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}.even\\:bg-gray-100:nth-child(2n){--tw-bg-opacity:1!important;background-color:#f5f5f5!important;background-color:rgba(245,245,245,var(--tw-bg-opacity,1))!important}.focus-within\\:border-gray-500:focus-within{--tw-border-opacity:1!important;border-color:#737373!important;border-color:rgba(115,115,115,var(--tw-border-opacity,1))!important}.hover\\:-translate-y-3:hover{--tw-translate-y:-0.75rem!important;transform:translate(var(--tw-translate-x),-.75rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.hover\\:scale-105:hover{--tw-scale-x:1.05!important;--tw-scale-y:1.05!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.05) scaleY(1.05)!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.hover\\:scale-\\[1\\.02\\]:hover{--tw-scale-x:1.02!important;--tw-scale-y:1.02!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.02) scaleY(1.02)!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.hover\\:border-gray-400:hover{--tw-border-opacity:1!important;border-color:#a3a3a3!important;border-color:rgba(163,163,163,var(--tw-border-opacity,1))!important}.hover\\:border-white\\/40:hover{border-color:hsla(0,0%,100%,.4)!important}.hover\\:bg-blue-400:hover{--tw-bg-opacity:1!important;background-color:#60a5fa!important;background-color:rgba(96,165,250,var(--tw-bg-opacity,1))!important}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1!important;background-color:#1d4ed8!important;background-color:rgba(29,78,216,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1!important;background-color:#f5f5f5!important;background-color:rgba(245,245,245,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1!important;background-color:#e5e5e5!important;background-color:rgba(229,229,229,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1!important;background-color:#a3a3a3!important;background-color:rgba(163,163,163,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-500:hover{--tw-bg-opacity:1!important;background-color:#737373!important;background-color:rgba(115,115,115,var(--tw-bg-opacity,1))!important}.hover\\:bg-gray-600:hover{--tw-bg-opacity:1!important;background-color:#525252!important;background-color:rgba(82,82,82,var(--tw-bg-opacity,1))!important}.hover\\:bg-green-600:hover{--tw-bg-opacity:1!important;background-color:#16a34a!important;background-color:rgba(22,163,74,var(--tw-bg-opacity,1))!important}.hover\\:bg-orange-100:hover{--tw-bg-opacity:1!important;background-color:#ffedd5!important;background-color:rgba(255,237,213,var(--tw-bg-opacity,1))!important}.hover\\:bg-orange-500:hover{--tw-bg-opacity:1!important;background-color:#f97316!important;background-color:rgba(249,115,22,var(--tw-bg-opacity,1))!important}.hover\\:bg-orange-600:hover{--tw-bg-opacity:1!important;background-color:#ea580c!important;background-color:rgba(234,88,12,var(--tw-bg-opacity,1))!important}.hover\\:bg-orange-700:hover{--tw-bg-opacity:1!important;background-color:#c2410c!important;background-color:rgba(194,65,12,var(--tw-bg-opacity,1))!important}.hover\\:bg-red-50:hover{--tw-bg-opacity:1!important;background-color:#fff1f2!important;background-color:rgba(255,241,242,var(--tw-bg-opacity,1))!important}.hover\\:bg-red-600:hover{--tw-bg-opacity:1!important;background-color:#e11d48!important;background-color:rgba(225,29,72,var(--tw-bg-opacity,1))!important}.hover\\:bg-white:hover{--tw-bg-opacity:1!important;background-color:#fff!important;background-color:rgba(255,255,255,var(--tw-bg-opacity,1))!important}.hover\\:bg-white\\/20:hover{background-color:hsla(0,0%,100%,.2)!important}.hover\\:from-blue-600:hover{--tw-gradient-from:#2563eb var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(37,99,235,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.hover\\:from-green-600:hover{--tw-gradient-from:#16a34a var(--tw-gradient-from-position)!important;--tw-gradient-to:rgba(22,163,74,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}.hover\\:via-green-700:hover{--tw-gradient-to:rgba(21,128,61,0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),#15803d var(--tw-gradient-via-position),var(--tw-gradient-to)!important}.hover\\:to-blue-700:hover{--tw-gradient-to:#1d4ed8 var(--tw-gradient-to-position)!important}.hover\\:text-blue-700:hover{--tw-text-opacity:1!important;color:#1d4ed8!important;color:rgba(29,78,216,var(--tw-text-opacity,1))!important}.hover\\:text-blue-800:hover{--tw-text-opacity:1!important;color:#1e40af!important;color:rgba(30,64,175,var(--tw-text-opacity,1))!important}.hover\\:text-gray-900:hover{--tw-text-opacity:1!important;color:#171717!important;color:rgba(23,23,23,var(--tw-text-opacity,1))!important}.hover\\:text-indigo-100:hover{--tw-text-opacity:1!important;color:#e0e7ff!important;color:rgba(224,231,255,var(--tw-text-opacity,1))!important}.hover\\:text-orange-500:hover{--tw-text-opacity:1!important;color:#f97316!important;color:rgba(249,115,22,var(--tw-text-opacity,1))!important}.hover\\:text-purple-400:hover{--tw-text-opacity:1!important;color:#c084fc!important;color:rgba(192,132,252,var(--tw-text-opacity,1))!important}.hover\\:text-red-700:hover{--tw-text-opacity:1!important;color:#be123c!important;color:rgba(190,18,60,var(--tw-text-opacity,1))!important}.hover\\:text-white:hover{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}.hover\\:underline:hover{text-decoration-line:underline!important}.hover\\:opacity-90:hover{opacity:.9!important}.hover\\:shadow-2xl:hover{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25)!important;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}.hover\\:file\\:bg-orange-600::file-selector-button:hover{--tw-bg-opacity:1!important;background-color:#ea580c!important;background-color:rgba(234,88,12,var(--tw-bg-opacity,1))!important}.focus\\:border-blue-400:focus{--tw-border-opacity:1!important;border-color:#60a5fa!important;border-color:rgba(96,165,250,var(--tw-border-opacity,1))!important}.focus\\:border-blue-600:focus{--tw-border-opacity:1!important;border-color:#2563eb!important;border-color:rgba(37,99,235,var(--tw-border-opacity,1))!important}.focus\\:border-gray-400:focus{--tw-border-opacity:1!important;border-color:#a3a3a3!important;border-color:rgba(163,163,163,var(--tw-border-opacity,1))!important}.focus\\:border-gray-500:focus{--tw-border-opacity:1!important;border-color:#737373!important;border-color:rgba(115,115,115,var(--tw-border-opacity,1))!important}.focus\\:border-orange-500:focus{--tw-border-opacity:1!important;border-color:#f97316!important;border-color:rgba(249,115,22,var(--tw-border-opacity,1))!important}.focus\\:border-purple-500:focus{--tw-border-opacity:1!important;border-color:#a855f7!important;border-color:rgba(168,85,247,var(--tw-border-opacity,1))!important}.focus\\:bg-white:focus{--tw-bg-opacity:1!important;background-color:#fff!important;background-color:rgba(255,255,255,var(--tw-bg-opacity,1))!important}.focus\\:text-gray-700:focus{--tw-text-opacity:1!important;color:#404040!important;color:rgba(64,64,64,var(--tw-text-opacity,1))!important}.focus\\:outline-none:focus{outline:2px solid transparent!important;outline-offset:2px!important}.focus\\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)!important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)!important}.focus\\:ring-2:focus,.focus\\:ring:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent!important;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)!important}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)!important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)!important}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)!important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)!important;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent!important;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)!important}.focus\\:ring-orange-500:focus{--tw-ring-opacity:1!important;--tw-ring-color:rgba(249,115,22,var(--tw-ring-opacity,1))!important}.focus\\:ring-white\\/30:focus{--tw-ring-color:hsla(0,0%,100%,.3)!important}.group:hover .group-hover\\:block{display:block!important}.group\\/apply:hover .group-hover\\/apply\\:translate-x-1{--tw-translate-x:0.25rem!important;transform:translate(.25rem,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group\\/apply:hover .group-hover\\/apply\\:translate-x-full{--tw-translate-x:100%!important;transform:translate(100%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group:hover .group-hover\\:translate-y-0\\.5{--tw-translate-y:0.125rem!important;transform:translate(var(--tw-translate-x),.125rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group\\/apply:hover .group-hover\\/apply\\:rotate-12{--tw-rotate:12deg!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(12deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group:hover .group-hover\\:scale-110,.group\\/btn:hover .group-hover\\/btn\\:scale-110{--tw-scale-x:1.1!important;--tw-scale-y:1.1!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1)!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.group:hover .group-hover\\:text-green-600{--tw-text-opacity:1!important;color:#16a34a!important;color:rgba(22,163,74,var(--tw-text-opacity,1))!important}.group:hover .group-hover\\:text-white{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}.group:hover .group-hover\\:opacity-100{opacity:1!important}.group:hover .group-hover\\:shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)!important;--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)!important;box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)!important}@media (min-width:640px){.sm\\:block{display:block!important}.sm\\:hidden{display:none!important}.sm\\:w-72{width:18rem!important}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.sm\\:flex-row{flex-direction:row!important}.sm\\:items-center{align-items:center!important}.sm\\:gap-8{gap:2rem!important}.sm\\:space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0!important;margin-bottom:0!important;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse))!important;margin-top:1.5rem!important;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))!important}.sm\\:border-l{border-left-width:1px!important}.sm\\:border-t-0{border-top-width:0!important}.sm\\:p-8{padding:2rem!important}.sm\\:px-12{padding-left:3rem!important;padding-right:3rem!important}.sm\\:px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.sm\\:px-8{padding-right:2rem!important}.sm\\:pl-8,.sm\\:px-8{padding-left:2rem!important}.sm\\:text-left{text-align:left!important}.sm\\:text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.sm\\:text-lg{font-size:1.125rem!important;line-height:1.75rem!important}}@media (min-width:768px){.md\\:relative{position:relative!important}.md\\:col-span-3{grid-column:span 3/span 3!important}.md\\:col-span-4{grid-column:span 4/span 4!important}.md\\:col-span-6{grid-column:span 6/span 6!important}.md\\:col-span-8{grid-column:span 8/span 8!important}.md\\:col-span-9{grid-column:span 9/span 9!important}.md\\:m-6{margin:1.5rem!important}.md\\:mx-10{margin-left:2.5rem!important;margin-right:2.5rem!important}.md\\:mx-20{margin-left:5rem!important;margin-right:5rem!important}.md\\:mx-auto{margin-left:auto!important;margin-right:auto!important}.md\\:ml-1{margin-left:.25rem!important}.md\\:ml-2{margin-left:.5rem!important}.md\\:ml-6{margin-left:1.5rem!important}.md\\:mr-1{margin-right:.25rem!important}.md\\:mr-2{margin-right:.5rem!important}.md\\:mr-20{margin-right:5rem!important}.md\\:mr-4{margin-right:1rem!important}.md\\:mt-0{margin-top:0!important}.md\\:mt-1{margin-top:.25rem!important}.md\\:mt-10{margin-top:2.5rem!important}.md\\:mt-12{margin-top:3rem!important}.md\\:mt-2{margin-top:.5rem!important}.md\\:mt-4{margin-top:1rem!important}.md\\:mt-8{margin-top:2rem!important}.md\\:block{display:block!important}.md\\:flex{display:flex!important}.md\\:grid{display:grid!important}.md\\:hidden{display:none!important}.md\\:h-10{height:2.5rem!important}.md\\:h-16{height:4rem!important}.md\\:h-20{height:5rem!important}.md\\:h-48{height:12rem!important}.md\\:h-6{height:1.5rem!important}.md\\:h-7{height:1.75rem!important}.md\\:h-8{height:2rem!important}.md\\:h-96{height:24rem!important}.md\\:w-10{width:2.5rem!important}.md\\:w-24{width:6rem!important}.md\\:w-28{width:7rem!important}.md\\:w-3\\/4{width:75%!important}.md\\:w-6{width:1.5rem!important}.md\\:w-7{width:1.75rem!important}.md\\:w-8{width:2rem!important}.md\\:w-full{width:100%!important}.md\\:translate-x-0{--tw-translate-x:0px!important;transform:translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.md\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))!important}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))!important}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))!important}.md\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))!important}.md\\:grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))!important}.md\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))!important}.md\\:flex-row{flex-direction:row!important}.md\\:items-center{align-items:center!important}.md\\:justify-start{justify-content:flex-start!important}.md\\:justify-between{justify-content:space-between!important}.md\\:justify-around{justify-content:space-around!important}.md\\:p-10{padding:2.5rem!important}.md\\:p-4{padding:1rem!important}.md\\:px-0{padding-left:0!important;padding-right:0!important}.md\\:px-12{padding-left:3rem!important;padding-right:3rem!important}.md\\:px-2{padding-left:.5rem!important;padding-right:.5rem!important}.md\\:px-20{padding-left:5rem!important;padding-right:5rem!important}.md\\:px-24{padding-left:6rem!important;padding-right:6rem!important}.md\\:px-3{padding-left:.75rem!important;padding-right:.75rem!important}.md\\:px-32{padding-left:8rem!important;padding-right:8rem!important}.md\\:px-36{padding-left:9rem!important;padding-right:9rem!important}.md\\:px-48{padding-left:12rem!important;padding-right:12rem!important}.md\\:px-6{padding-left:1.5rem!important;padding-right:1.5rem!important}.md\\:px-8{padding-left:2rem!important;padding-right:2rem!important}.md\\:px-80{padding-left:20rem!important;padding-right:20rem!important}.md\\:px-96{padding-left:24rem!important;padding-right:24rem!important}.md\\:pl-12{padding-left:3rem!important}.md\\:pr-10{padding-right:2.5rem!important}.md\\:pt-2{padding-top:.5rem!important}.md\\:text-left{text-align:left!important}.md\\:text-2xl{font-size:1.5rem!important;line-height:2rem!important}.md\\:text-3xl{font-size:1.875rem!important;line-height:2.25rem!important}.md\\:text-6xl{font-size:3.75rem!important;line-height:1!important}.md\\:text-base{font-size:1rem!important;line-height:1.5rem!important}.md\\:text-lg{font-size:1.125rem!important;line-height:1.75rem!important}.md\\:text-sm{font-size:.875rem!important;line-height:1.25rem!important}}@media (min-width:1024px){.lg\\:min-h-screen{min-height:100vh!important}.lg\\:px-8{padding-left:2rem!important;padding-right:2rem!important}}@media (min-width:1280px){.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))!important}}@media (prefers-color-scheme:dark){.dark\\:border-gray-900{--tw-border-opacity:1!important;border-color:#171717!important;border-color:rgba(23,23,23,var(--tw-border-opacity,1))!important}.dark\\:bg-gray-800{--tw-bg-opacity:1!important;background-color:#262626!important;background-color:rgba(38,38,38,var(--tw-bg-opacity,1))!important}.dark\\:text-gray-400{--tw-text-opacity:1!important;color:#a3a3a3!important;color:rgba(163,163,163,var(--tw-text-opacity,1))!important}.dark\\:text-white{--tw-text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--tw-text-opacity,1))!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_vue_vue_type_style_index_0_id_3275463a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_vue_vue_type_style_index_0_id_3275463a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_vue_vue_type_style_index_0_id_3275463a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_vue_vue_type_style_index_0_id_3275463a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_vue_vue_type_style_index_0_id_3275463a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu-li[data-v-3275463a]{padding-bottom:.5rem;padding-top:.5rem;md:py-0}.search-drop-down[data-v-3275463a]{margin-top:40px;position:absolute;z-index:300}.search-drop[data-v-3275463a]{background:#fff;border-top:1px solid #e3e3e3;box-shadow:2px 2px 4px #bdbdbd;transform:scaleY(0);transform-origin:top;transition:all .3s ease-in-out;transition:transform .26s ease}.searching[data-v-3275463a]{min-height:30px;transform:scaleY(1)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_menu_vue_vue_type_style_index_0_id_8fcdd38a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_menu_vue_vue_type_style_index_0_id_8fcdd38a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_menu_vue_vue_type_style_index_0_id_8fcdd38a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_menu_vue_vue_type_style_index_0_id_8fcdd38a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_menu_vue_vue_type_style_index_0_id_8fcdd38a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu-li[data-v-8fcdd38a]{padding-bottom:.5rem;padding-top:.5rem;md:py-0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_05390a45_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_05390a45_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_05390a45_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_05390a45_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_05390a45_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".whatsapp_action{background-color:#50c878;border-radius:100%;bottom:40px;color:#fff;height:50px;text-align:center;width:50px}.upcoming-events,.whatsapp_action{cursor:pointer;position:fixed;right:40px}.upcoming-events{bottom:100px}.w_icon{font-size:28px;padding-top:11px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_630dba58_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_630dba58_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_630dba58_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_630dba58_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_630dba58_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".whatsapp_action{background-color:#50c878;border-radius:100%;bottom:50px;color:#fff;height:45px;text-align:center;width:45px}.upcoming-events,.whatsapp_action{cursor:pointer;position:fixed;right:40px}.upcoming-events{bottom:105px}.w_icon{font-size:28px;padding-top:11px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


const state = () => ({
  imageUrl: _common_index__WEBPACK_IMPORTED_MODULE_0__[/* backendUrl */ "a"],
  backendUrl: _common_index__WEBPACK_IMPORTED_MODULE_0__[/* backendUrl */ "a"],
  token: null,
  user: null,
  favorites: []
});
const mutations = {
  setUser(state, user) {
    state.user = user;
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("user", JSON.stringify(user));
  },
  setToken(state, token) {
    state.token = token;
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("jwt", token);
  },
  updateUser(state, updatedUser) {
    state.user = updatedUser;
  },
  logout(state, req) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    state.token = null;
    state.user = null;
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("jwt");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("user");
  },
  addFavoriteItem(state, item) {
    const favorites = [...state.favorites];
    favorites.push(item);
    state.favorites = favorites;
  },
  removeFavoriteItem(state, item) {
    const favorites = [...state.favorites];
    const _item = favorites.find(product => {
      return product._id === item._id;
    });
    const index = state.favorites.indexOf(_item);
    if (index !== -1) {
      favorites.splice(index, 1);
    }
    state.favorites = favorites;
  }
};
const getters = {
  imageUrl(state) {
    return state.backendUrl;
  },
  user(state) {
    return state.user;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    if (state.user !== null && state.token !== null) {
      return true;
    } else {
      return false;
    }
  },
  favorites(state) {
    return state.favorites;
  }
};
const actions = {
  async nuxtServerInit({
    commit,
    dispatch
  }, {
    req
  }) {},
  initAuth(context, req) {
    let user;
    let token;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const tokenCookie = req.headers.cookie.split(";").find(item => {
        return item.trim().startsWith("jwt=");
      });
      if (!tokenCookie) {
        return;
      }
      const userCookie = req.headers.cookie.split(";").find(item => {
        return item.trim().startsWith("user=");
      });
      if (!userCookie) {
        return;
      }
      user = JSON.parse(decodeURI(userCookie.split("=")[1]).replace(/%2C/g, ","));
      token = tokenCookie.split("=")[1];
    } else {
      token = localStorage.getItem("token");
      const userString = localStorage.getItem("user");
      user = JSON.parse(userString);
    }
    context.commit("setToken", token);
    context.commit("setUser", user);
  }
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
// store/equipment.js
const state = () => ({
  selectedEquipment: null
});
const mutations = {
  setSelectedEquipment(state, equipment) {
    state.selectedEquipment = equipment;
  }
};
const actions = {
  selectEquipment({
    commit
  }, equipment) {
    commit('setSelectedEquipment', equipment);
  }
};
const getters = {
  selectedEquipment: state => state.selectedEquipment
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
//  import  from 'axios'


const state = () => ({
  list: [],
  appName: '',
  cart: [],
  ordered: [],
  wishList: []
});

// mutations
const mutations = {
  resetCart(state) {
    state.ordered = [...state.cart];
    state.cart = [];
  },
  addToCart(state, item) {
    const exits = state.cart.find(record => {
      return record._id === item._id;
    });
    if (exits) {
      return;
    }
    state.cart.push(item);
  },
  removeFromCart(state, id) {
    const item = state.cart.find(record => {
      return record._id === id;
    });
    return state.cart.splice(state.cart.indexOf(item), 1);
  },
  cartQuantity(state, {
    id,
    quantity
  }) {
    const cart = [...state.cart];
    const item = state.cart.find(record => {
      return record._id === id;
    });
    const index = state.cart.indexOf(item);
    if (index === -1) {
      return false;
    }
    item.quantity = quantity;
    cart[index] = item;
    state.cart = cart;
  },
  addToWhislist(state, product) {
    state.wishList.push(item);
  }
};

//  getters
const getters = {
  app(state) {
    return state.appName || '';
  },
  cart(state) {
    return state.cart || [];
  },
  wishlist(state) {
    return state.wishList || [];
  },
  ordered(state) {
    return state.ordered || [];
  }
};

// actions
const actions = {
  getData({
    commit
  }, url) {
    return new Promise((resolve, reject) => {
      return _common_index__WEBPACK_IMPORTED_MODULE_1__[/* http */ "b"].get(url).then(res => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  },
  search({
    commit
  }, keyword) {
    return new Promise((resolve, reject) => {
      return _common_index__WEBPACK_IMPORTED_MODULE_1__[/* http */ "b"].get('/api/search/' + keyword).then(({
        data
      }) => {
        resolve(data);
      }).catch(err => {
        reject(err);
      });
    });
  },
  checkout({
    commit
  }, order) {
    return new Promise((resolve, reject) => {
      return _common_index__WEBPACK_IMPORTED_MODULE_1__[/* http */ "b"].post(`/api/order`, order).then(({
        data
      }) => {
        //  console.log(data, 'data')
        resolve(data);
        if (data.state) {
          //  resolve(data)
        }
      }).catch(err => {
        reject(err);
      });
    });
  }
};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AliFooter", function() { return AliFooter; });
__webpack_require__.d(components_namespaceObject, "DeskMenuCopy", function() { return DeskMenuCopy; });
__webpack_require__.d(components_namespaceObject, "DesktopMenu", function() { return DesktopMenu; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "Header", function() { return Header; });
__webpack_require__.d(components_namespaceObject, "HomeHeader", function() { return HomeHeader; });
__webpack_require__.d(components_namespaceObject, "Login", function() { return Login; });
__webpack_require__.d(components_namespaceObject, "Logo", function() { return Logo; });
__webpack_require__.d(components_namespaceObject, "MobileCopy", function() { return MobileCopy; });
__webpack_require__.d(components_namespaceObject, "MobileMenu", function() { return MobileMenu; });
__webpack_require__.d(components_namespaceObject, "Modal", function() { return Modal; });
__webpack_require__.d(components_namespaceObject, "Product", function() { return Product; });
__webpack_require__.d(components_namespaceObject, "Register", function() { return Register; });
__webpack_require__.d(components_namespaceObject, "TopBar", function() { return TopBar; });
__webpack_require__.d(components_namespaceObject, "WhatsappModal", function() { return WhatsappModal; });
__webpack_require__.d(components_namespaceObject, "HomeAbout", function() { return HomeAbout; });
__webpack_require__.d(components_namespaceObject, "HomeClearance", function() { return HomeClearance; });
__webpack_require__.d(components_namespaceObject, "HomeDesktopMenuCopy", function() { return HomeDesktopMenuCopy; });
__webpack_require__.d(components_namespaceObject, "HomeHotmaxSlider", function() { return HomeHotmaxSlider; });
__webpack_require__.d(components_namespaceObject, "HomeMegaMenu", function() { return HomeMegaMenu; });
__webpack_require__.d(components_namespaceObject, "HomeOffers", function() { return HomeOffers; });
__webpack_require__.d(components_namespaceObject, "HomeSliderCopy", function() { return HomeSliderCopy; });
__webpack_require__.d(components_namespaceObject, "HomeSlider", function() { return HomeSlider; });
__webpack_require__.d(components_namespaceObject, "HomeSlider2", function() { return HomeSlider2; });
__webpack_require__.d(components_namespaceObject, "HomeTrending", function() { return HomeTrending; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(28);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['check-auth'] = __webpack_require__(34);
middleware['check-auth'] = middleware['check-auth'].default || middleware['check-auth'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          try {
            const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));
            // check for previous reload time not to reload infinitely
            if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
              window.sessionStorage.setItem('nuxt-reload', timeNow);
              window.location.reload(true /* skip cache */);
            }
          } catch {
            // don't throw an error if we have issues reading sessionStorage
          }
        }
        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(29);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(17);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(12);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(18);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _461591ca = () => interopDefault(__webpack_require__.e(/* import() | pages/about/index */ 22).then(__webpack_require__.bind(null, 212)));
const _08accc6a = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/index */ 26).then(__webpack_require__.bind(null, 213)));
const _44e1f3a8 = () => interopDefault(__webpack_require__.e(/* import() | pages/cart/index */ 29).then(__webpack_require__.bind(null, 214)));
const _84f10174 = () => interopDefault(__webpack_require__.e(/* import() | pages/checkout/index */ 30).then(__webpack_require__.bind(null, 215)));
const _66fd0381 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact-us/index */ 32).then(__webpack_require__.bind(null, 216)));
const _b110821c = () => interopDefault(__webpack_require__.e(/* import() | pages/engage-expert/index */ 34).then(__webpack_require__.bind(null, 206)));
const _52f8bb7a = () => interopDefault(__webpack_require__.e(/* import() | pages/equipment/index */ 37).then(__webpack_require__.bind(null, 217)));
const _156c4a13 = () => interopDefault(__webpack_require__.e(/* import() | pages/events/index */ 43).then(__webpack_require__.bind(null, 218)));
const _52daff6c = () => interopDefault(__webpack_require__.e(/* import() | pages/expert-success/index */ 44).then(__webpack_require__.bind(null, 219)));
const _30520516 = () => interopDefault(__webpack_require__.e(/* import() | pages/farmlands/index */ 46).then(__webpack_require__.bind(null, 220)));
const _7491795e = () => interopDefault(__webpack_require__.e(/* import() | pages/financing/index */ 47).then(__webpack_require__.bind(null, 221)));
const _1e959ebd = () => interopDefault(__webpack_require__.e(/* import() | pages/gakuo/index */ 48).then(__webpack_require__.bind(null, 222)));
const _74d235c8 = () => interopDefault(__webpack_require__.e(/* import() | pages/gasaya/index */ 49).then(__webpack_require__.bind(null, 223)));
const _2238d5be = () => interopDefault(__webpack_require__.e(/* import() | pages/investor-success/index */ 53).then(__webpack_require__.bind(null, 224)));
const _1e668f35 = () => interopDefault(__webpack_require__.e(/* import() | pages/join-event/index */ 55).then(__webpack_require__.bind(null, 207)));
const _684612dd = () => interopDefault(__webpack_require__.e(/* import() | pages/joseph/index */ 56).then(__webpack_require__.bind(null, 225)));
const _0c52a177 = () => interopDefault(__webpack_require__.e(/* import() | pages/location/index */ 57).then(__webpack_require__.bind(null, 226)));
const _7fee98ae = () => interopDefault(__webpack_require__.e(/* import() | pages/management/index */ 58).then(__webpack_require__.bind(null, 227)));
const _1fa6f03c = () => interopDefault(__webpack_require__.e(/* import() | pages/marketing/index */ 59).then(__webpack_require__.bind(null, 228)));
const _3aa1a437 = () => interopDefault(__webpack_require__.e(/* import() | pages/meeting-success/index */ 60).then(__webpack_require__.bind(null, 229)));
const _b32bb106 = () => interopDefault(__webpack_require__.e(/* import() | pages/newsletter-success/index */ 65).then(__webpack_require__.bind(null, 230)));
const _248aa0ba = () => interopDefault(__webpack_require__.e(/* import() | pages/order/index */ 68).then(__webpack_require__.bind(null, 231)));
const _2891cd52 = () => interopDefault(__webpack_require__.e(/* import() | pages/order-farm/index */ 67).then(__webpack_require__.bind(null, 208)));
const _a638c7a6 = () => interopDefault(__webpack_require__.e(/* import() | pages/our-services/index */ 69).then(__webpack_require__.bind(null, 209)));
const _db900f82 = () => interopDefault(__webpack_require__.e(/* import() | pages/owner-success/index */ 70).then(__webpack_require__.bind(null, 232)));
const _7e9e0680 = () => interopDefault(__webpack_require__.e(/* import() | pages/privacy/index */ 71).then(__webpack_require__.bind(null, 233)));
const _49e44730 = () => interopDefault(__webpack_require__.e(/* import() | pages/products/index */ 73).then(__webpack_require__.bind(null, 234)));
const _f27b28dc = () => interopDefault(__webpack_require__.e(/* import() | pages/projects/index */ 75).then(__webpack_require__.bind(null, 235)));
const _322545a4 = () => interopDefault(__webpack_require__.e(/* import() | pages/services/index */ 77).then(__webpack_require__.bind(null, 236)));
const _83f2f6d4 = () => interopDefault(__webpack_require__.e(/* import() | pages/shop/index */ 79).then(__webpack_require__.bind(null, 237)));
const _31302ab3 = () => interopDefault(__webpack_require__.e(/* import() | pages/simo-index */ 80).then(__webpack_require__.bind(null, 238)));
const _4d2dd565 = () => interopDefault(__webpack_require__.e(/* import() | pages/success/index */ 81).then(__webpack_require__.bind(null, 239)));
const _1ac45ebd = () => interopDefault(__webpack_require__.e(/* import() | pages/whishlist/index */ 82).then(__webpack_require__.bind(null, 240)));
const _6b57e944 = () => interopDefault(__webpack_require__.e(/* import() | pages/winnie/index */ 83).then(__webpack_require__.bind(null, 241)));
const _64991358 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-copy */ 25).then(__webpack_require__.bind(null, 242)));
const _330d47b0 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/index-copy */ 27).then(__webpack_require__.bind(null, 243)));
const _3cb60e92 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact-us/ali-index */ 31).then(__webpack_require__.bind(null, 244)));
const _25411fc9 = () => interopDefault(__webpack_require__.e(/* import() | pages/equipment/list-farmland-equipment/index */ 38).then(__webpack_require__.bind(null, 245)));
const _18a0edb8 = () => interopDefault(__webpack_require__.e(/* import() | pages/equipment/rent-farmland-equipment/index */ 41).then(__webpack_require__.bind(null, 246)));
const _858e8956 = () => interopDefault(__webpack_require__.e(/* import() | pages/global-auth/login/index */ 50).then(__webpack_require__.bind(null, 247)));
const _4a9edf1a = () => interopDefault(__webpack_require__.e(/* import() | pages/global-auth/register/index */ 51).then(__webpack_require__.bind(null, 248)));
const _67e7981c = () => interopDefault(__webpack_require__.e(/* import() | pages/my-details/account/index */ 61).then(__webpack_require__.bind(null, 249)));
const _3d452346 = () => interopDefault(__webpack_require__.e(/* import() | pages/my-details/equipments/index */ 62).then(__webpack_require__.bind(null, 250)));
const _3e4a250c = () => interopDefault(__webpack_require__.e(/* import() | pages/my-details/farms/index */ 64).then(__webpack_require__.bind(null, 251)));
const _13dc1fc0 = () => interopDefault(__webpack_require__.e(/* import() | pages/services/urlcopy */ 78).then(__webpack_require__.bind(null, 252)));
const _6b68d75b = () => interopDefault(__webpack_require__.e(/* import() | pages/my-details/equipments/index1 */ 63).then(__webpack_require__.bind(null, 253)));
const _3231c24c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 52).then(__webpack_require__.bind(null, 254)));
const _ecd10c74 = () => interopDefault(__webpack_require__.e(/* import() | pages/equipment/apply/_url */ 36).then(__webpack_require__.bind(null, 255)));
const _74daad64 = () => interopDefault(__webpack_require__.e(/* import() | pages/equipment/rent-farmland-equipment/_url */ 39).then(__webpack_require__.bind(null, 256)));
const _2667db5a = () => interopDefault(__webpack_require__.e(/* import() | pages/equipment/rent-farmland-equipment/_url1 */ 40).then(__webpack_require__.bind(null, 257)));
const _75f743ce = () => interopDefault(__webpack_require__.e(/* import() | pages/auth/_url */ 23).then(__webpack_require__.bind(null, 258)));
const _39dce548 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/_url */ 24).then(__webpack_require__.bind(null, 259)));
const _20dad7f1 = () => interopDefault(__webpack_require__.e(/* import() | pages/brand/_url */ 28).then(__webpack_require__.bind(null, 260)));
const _37b4fc80 = () => interopDefault(__webpack_require__.e(/* import() | pages/engage-expert/_url */ 33).then(__webpack_require__.bind(null, 261)));
const _7a935462 = () => interopDefault(__webpack_require__.e(/* import() | pages/equipment/_id */ 35).then(__webpack_require__.bind(null, 262)));
const _e5a1f3a2 = () => interopDefault(__webpack_require__.e(/* import() | pages/equipments/_id */ 42).then(__webpack_require__.bind(null, 210)));
const _0997e71c = () => interopDefault(__webpack_require__.e(/* import() | pages/farmlands/_url */ 45).then(__webpack_require__.bind(null, 211)));
const _21ca1d1d = () => interopDefault(__webpack_require__.e(/* import() | pages/join-event/_url */ 54).then(__webpack_require__.bind(null, 263)));
const _85e2728a = () => interopDefault(__webpack_require__.e(/* import() | pages/order-farm/_url */ 66).then(__webpack_require__.bind(null, 264)));
const _1a57a6d9 = () => interopDefault(__webpack_require__.e(/* import() | pages/product/_url */ 72).then(__webpack_require__.bind(null, 265)));
const _defa7dc0 = () => interopDefault(__webpack_require__.e(/* import() | pages/projects/_url */ 74).then(__webpack_require__.bind(null, 266)));
const _79ba0fee = () => interopDefault(__webpack_require__.e(/* import() | pages/register/_url */ 76).then(__webpack_require__.bind(null, 267)));
const _2560832c = () => interopDefault(__webpack_require__.e(/* import() | pages/_category/_subcategory/index */ 21).then(__webpack_require__.bind(null, 268)));
const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _461591ca,
    name: "about"
  }, {
    path: "/blog",
    component: _08accc6a,
    name: "blog"
  }, {
    path: "/cart",
    component: _44e1f3a8,
    name: "cart"
  }, {
    path: "/checkout",
    component: _84f10174,
    name: "checkout"
  }, {
    path: "/contact-us",
    component: _66fd0381,
    name: "contact-us"
  }, {
    path: "/engage-expert",
    component: _b110821c,
    name: "engage-expert"
  }, {
    path: "/equipment",
    component: _52f8bb7a,
    name: "equipment"
  }, {
    path: "/events",
    component: _156c4a13,
    name: "events"
  }, {
    path: "/expert-success",
    component: _52daff6c,
    name: "expert-success"
  }, {
    path: "/farmlands",
    component: _30520516,
    name: "farmlands"
  }, {
    path: "/financing",
    component: _7491795e,
    name: "financing"
  }, {
    path: "/gakuo",
    component: _1e959ebd,
    name: "gakuo"
  }, {
    path: "/gasaya",
    component: _74d235c8,
    name: "gasaya"
  }, {
    path: "/investor-success",
    component: _2238d5be,
    name: "investor-success"
  }, {
    path: "/join-event",
    component: _1e668f35,
    name: "join-event"
  }, {
    path: "/joseph",
    component: _684612dd,
    name: "joseph"
  }, {
    path: "/location",
    component: _0c52a177,
    name: "location"
  }, {
    path: "/management",
    component: _7fee98ae,
    name: "management"
  }, {
    path: "/marketing",
    component: _1fa6f03c,
    name: "marketing"
  }, {
    path: "/meeting-success",
    component: _3aa1a437,
    name: "meeting-success"
  }, {
    path: "/newsletter-success",
    component: _b32bb106,
    name: "newsletter-success"
  }, {
    path: "/order",
    component: _248aa0ba,
    name: "order"
  }, {
    path: "/order-farm",
    component: _2891cd52,
    name: "order-farm"
  }, {
    path: "/our-services",
    component: _a638c7a6,
    name: "our-services"
  }, {
    path: "/owner-success",
    component: _db900f82,
    name: "owner-success"
  }, {
    path: "/privacy",
    component: _7e9e0680,
    name: "privacy"
  }, {
    path: "/products",
    component: _49e44730,
    name: "products"
  }, {
    path: "/projects",
    component: _f27b28dc,
    name: "projects"
  }, {
    path: "/services",
    component: _322545a4,
    name: "services"
  }, {
    path: "/shop",
    component: _83f2f6d4,
    name: "shop"
  }, {
    path: "/simo-index",
    component: _31302ab3,
    name: "simo"
  }, {
    path: "/success",
    component: _4d2dd565,
    name: "success"
  }, {
    path: "/whishlist",
    component: _1ac45ebd,
    name: "whishlist"
  }, {
    path: "/winnie",
    component: _6b57e944,
    name: "winnie"
  }, {
    path: "/blog/blog-copy",
    component: _64991358,
    name: "blog-blog-copy"
  }, {
    path: "/blog/index-copy",
    component: _330d47b0,
    name: "blog-index-copy"
  }, {
    path: "/contact-us/ali-index",
    component: _3cb60e92,
    name: "contact-us-ali"
  }, {
    path: "/equipment/list-farmland-equipment",
    component: _25411fc9,
    name: "equipment-list-farmland-equipment"
  }, {
    path: "/equipment/rent-farmland-equipment",
    component: _18a0edb8,
    name: "equipment-rent-farmland-equipment"
  }, {
    path: "/global-auth/login",
    component: _858e8956,
    name: "global-auth-login"
  }, {
    path: "/global-auth/register",
    component: _4a9edf1a,
    name: "global-auth-register"
  }, {
    path: "/my-details/account",
    component: _67e7981c,
    name: "my-details-account"
  }, {
    path: "/my-details/equipments",
    component: _3d452346,
    name: "my-details-equipments"
  }, {
    path: "/my-details/farms",
    component: _3e4a250c,
    name: "my-details-farms"
  }, {
    path: "/services/urlcopy",
    component: _13dc1fc0,
    name: "services-urlcopy"
  }, {
    path: "/my-details/equipments/index1",
    component: _6b68d75b,
    name: "my-details-equipments-index1"
  }, {
    path: "/",
    component: _3231c24c,
    name: "index"
  }, {
    path: "/equipment/apply/:url?",
    component: _ecd10c74,
    name: "equipment-apply-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url?",
    component: _74daad64,
    name: "equipment-rent-farmland-equipment-url"
  }, {
    path: "/equipment/rent-farmland-equipment/:url1?",
    component: _2667db5a,
    name: "equipment-rent-farmland-equipment-url1"
  }, {
    path: "/auth/:url?",
    component: _75f743ce,
    name: "auth-url"
  }, {
    path: "/blog/:url",
    component: _39dce548,
    name: "blog-url"
  }, {
    path: "/brand/:url?",
    component: _20dad7f1,
    name: "brand-url"
  }, {
    path: "/engage-expert/:url?",
    component: _37b4fc80,
    name: "engage-expert-url"
  }, {
    path: "/equipment/:id",
    component: _7a935462,
    name: "equipment-id"
  }, {
    path: "/equipments/:id?",
    component: _e5a1f3a2,
    name: "equipments-id"
  }, {
    path: "/farmlands/:url",
    component: _0997e71c,
    name: "farmlands-url"
  }, {
    path: "/join-event/:url?",
    component: _21ca1d1d,
    name: "join-event-url"
  }, {
    path: "/order-farm/:url",
    component: _85e2728a,
    name: "order-farm-url"
  }, {
    path: "/product/:url?",
    component: _1a57a6d9,
    name: "product-url"
  }, {
    path: "/projects/:url",
    component: _defa7dc0,
    name: "projects-url"
  }, {
    path: "/register/:url?",
    component: _79ba0fee,
    name: "register-url"
  }, {
    path: "/:category/:subcategory",
    component: _2560832c,
    name: "category-subcategory"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_errorvue_type_script_lang_js = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js = (nuxt_errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "24b9380d"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error or
    // error page has not been loaded yet on client
    if (!this.nuxt.err ||  false && false) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "51a26601"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(41);

// EXTERNAL MODULE: ./assets/styles/main.css
var main = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=05390a45
var defaultvue_type_template_id_05390a45_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Header'), _vm._ssrNode(" "), _vm._ssrNode("<main>", "</main>", [_c('Nuxt')], 1), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "upcoming-events bg-orange-700 py-1 px-2 text-base font-bold text-white rounded-2xl",
    attrs: {
      "to": "/events"
    }
  }, [_vm._v("Upcoming Events")]), _vm._ssrNode(" "), _vm._ssrNode("<a href=\"https://wa.me/254748193219\">", "</a>", [_vm._ssrNode("<div class=\"whatsapp_action flex items-center justify-center\">", "</div>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6 cursor-pointer",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "icon": ['fab', 'whatsapp']
    }
  })], 1)])], 2);
};
var defaultvue_type_template_id_05390a45_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=05390a45

// EXTERNAL MODULE: ./components/header.vue + 4 modules
var header = __webpack_require__(8);

// EXTERNAL MODULE: ./components/footer.vue + 4 modules
var footer = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js


/* harmony default export */ var defaultvue_type_script_lang_js = ({
  components: {
    Header: header["default"],
    Footer: footer["default"]
  },
  middleware: ["check-auth"]
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js = (defaultvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js,
  defaultvue_type_template_id_05390a45_render,
  defaultvue_type_template_id_05390a45_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "21b4a1a2"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Header: __webpack_require__(8).default,Footer: __webpack_require__(7).default})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/home.vue?vue&type=template&id=630dba58
var homevue_type_template_id_630dba58_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<main>", "</main>", [_c('Nuxt')], 1), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "upcoming-events bg-orange-700 py-1 px-2 font-bold text-base text-white rounded-2xl",
    attrs: {
      "to": "/events"
    }
  }, [_vm._v("Upcoming Events")]), _vm._ssrNode(" "), _vm._ssrNode("<a href=\"https://wa.me/254748193219\">", "</a>", [_vm._ssrNode("<div class=\"whatsapp_action flex items-center justify-center\">", "</div>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6 cursor-pointer",
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "icon": ['fab', 'whatsapp']
    }
  })], 1)])], 2);
};
var homevue_type_template_id_630dba58_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/home.vue?vue&type=template&id=630dba58

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/home.vue?vue&type=script&lang=js

/* harmony default export */ var homevue_type_script_lang_js = ({
  components: {
    Footer: footer["default"]
  },
  middleware: ["check-auth"]
});
// CONCATENATED MODULE: ./layouts/home.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_homevue_type_script_lang_js = (homevue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/home.vue



function home_injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var home_component = Object(componentNormalizer["a" /* default */])(
  layouts_homevue_type_script_lang_js,
  homevue_type_template_id_630dba58_render,
  homevue_type_template_id_630dba58_staticRenderFns,
  false,
  home_injectStyles,
  null,
  "6e8aa964"
  
)

/* harmony default export */ var home = (home_component.exports);

/* nuxt-component-imports */
installComponents(home_component, {Footer: __webpack_require__(7).default})

// CONCATENATED MODULE: ./.nuxt/App.js










const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_home": sanitizeComponent(home)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.nuxt.errPageReady = true;
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(53), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(54), 'equipment.js');
  resolveStoreModules(__webpack_require__(55), 'product.js');

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData;
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath);

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    });

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = moduleName === 'index';
  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }
  const storeModule = getStoreModule(store_store, namespaces);
  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }
  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}
function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }
  return normalizeModule(moduleData, filePath);
}
function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }
  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}
function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }
  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AliFooter = () => __webpack_require__.e(/* import() | components/ali-footer */ 1).then(__webpack_require__.bind(null, 269)).then(c => wrapFunctional(c.default || c));
const DeskMenuCopy = () => __webpack_require__.e(/* import() | components/desk-menu-copy */ 2).then(__webpack_require__.bind(null, 270)).then(c => wrapFunctional(c.default || c));
const DesktopMenu = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)).then(c => wrapFunctional(c.default || c));
const Footer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 7)).then(c => wrapFunctional(c.default || c));
const Header = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8)).then(c => wrapFunctional(c.default || c));
const HomeHeader = () => __webpack_require__.e(/* import() | components/home-header */ 6).then(__webpack_require__.bind(null, 98)).then(c => wrapFunctional(c.default || c));
const Login = () => __webpack_require__.e(/* import() | components/login */ 14).then(__webpack_require__.bind(null, 271)).then(c => wrapFunctional(c.default || c));
const Logo = () => __webpack_require__.e(/* import() | components/logo */ 15).then(__webpack_require__.bind(null, 277)).then(c => wrapFunctional(c.default || c));
const MobileCopy = () => __webpack_require__.e(/* import() | components/mobile-copy */ 16).then(__webpack_require__.bind(null, 272)).then(c => wrapFunctional(c.default || c));
const MobileMenu = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)).then(c => wrapFunctional(c.default || c));
const Modal = () => __webpack_require__.e(/* import() | components/modal */ 17).then(__webpack_require__.bind(null, 79)).then(c => wrapFunctional(c.default || c));
const Product = () => __webpack_require__.e(/* import() | components/product */ 18).then(__webpack_require__.bind(null, 82)).then(c => wrapFunctional(c.default || c));
const Register = () => __webpack_require__.e(/* import() | components/register */ 19).then(__webpack_require__.bind(null, 273)).then(c => wrapFunctional(c.default || c));
const TopBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 14)).then(c => wrapFunctional(c.default || c));
const WhatsappModal = () => __webpack_require__.e(/* import() | components/whatsapp-modal */ 20).then(__webpack_require__.bind(null, 80)).then(c => wrapFunctional(c.default || c));
const HomeAbout = () => __webpack_require__.e(/* import() | components/home-about */ 3).then(__webpack_require__.bind(null, 111)).then(c => wrapFunctional(c.default || c));
const HomeClearance = () => __webpack_require__.e(/* import() | components/home-clearance */ 4).then(__webpack_require__.bind(null, 114)).then(c => wrapFunctional(c.default || c));
const HomeDesktopMenuCopy = () => __webpack_require__.e(/* import() | components/home-desktop-menu-copy */ 5).then(__webpack_require__.bind(null, 274)).then(c => wrapFunctional(c.default || c));
const HomeHotmaxSlider = () => __webpack_require__.e(/* import() | components/home-hotmax-slider */ 7).then(__webpack_require__.bind(null, 144)).then(c => wrapFunctional(c.default || c));
const HomeMegaMenu = () => __webpack_require__.e(/* import() | components/home-mega-menu */ 8).then(__webpack_require__.bind(null, 145)).then(c => wrapFunctional(c.default || c));
const HomeOffers = () => __webpack_require__.e(/* import() | components/home-offers */ 9).then(__webpack_require__.bind(null, 113)).then(c => wrapFunctional(c.default || c));
const HomeSliderCopy = () => __webpack_require__.e(/* import() | components/home-slider-copy */ 11).then(__webpack_require__.bind(null, 275)).then(c => wrapFunctional(c.default || c));
const HomeSlider = () => __webpack_require__.e(/* import() | components/home-slider */ 10).then(__webpack_require__.bind(null, 146)).then(c => wrapFunctional(c.default || c));
const HomeSlider2 = () => __webpack_require__.e(/* import() | components/home-slider2 */ 12).then(__webpack_require__.bind(null, 276)).then(c => wrapFunctional(c.default || c));
const HomeTrending = () => __webpack_require__.e(/* import() | components/home-trending */ 13).then(__webpack_require__.bind(null, 112)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(11);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(20);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(30);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(31);

// CONCATENATED MODULE: ./.nuxt/templates.plugin.8eeff1d0.js



fontawesome_svg_core_["config"].autoAddCss = false;

fontawesome_svg_core_["library"].add(free_solid_svg_icons_["fas"]);

fontawesome_svg_core_["library"].add(free_brands_svg_icons_["fab"]);

fontawesome_svg_core_["library"].add(free_regular_svg_icons_["far"]);
external_vue_default.a.component('font-awesome-icon', vue_fontawesome_["FontAwesomeIcon"]);
external_vue_default.a.component('font-awesome-layers', vue_fontawesome_["FontAwesomeLayers"]);
external_vue_default.a.component('font-awesome-layers-text', vue_fontawesome_["FontAwesomeLayersText"]);
// CONCATENATED MODULE: ./plugins/capitalize.js

external_vue_default.a.filter("capitalize", function (val) {
  if (!val || val === "") return "";
  val.toString();
  return val.charAt(0).toUpperCase() + val.slice(1);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(27);

// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
 // Source: .\\templates.plugin.8eeff1d0.js (mode: 'all')
 // Source: ..\\plugins\\capitalize (mode: 'all')
 // Source: ..\\plugins\\vuex-persist (mode: 'client')
 // Source: ..\\plugins\\vue-datepicker (mode: 'client')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext);
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Jubilant Afro farms",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fpng",
        "href": "\u002Fjubilant-afrofarms-logo.png"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      errPageReady: false,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        nuxt.errPageReady = false;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./.nuxt/templates.plugin.8eeff1d0.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/templates.plugin.8eeff1d0.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/capitalize.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/capitalize.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (false) {}
  if (false) {}

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));

      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("tailwind-toast");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("jspdf");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("jspdf-autotable");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map