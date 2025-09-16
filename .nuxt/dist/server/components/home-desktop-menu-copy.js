exports.ids = [5];
exports.modules = {

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("65954692", content, true, context)
};

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_copy_vue_vue_type_style_index_0_id_28d8fa1e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_copy_vue_vue_type_style_index_0_id_28d8fa1e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_copy_vue_vue_type_style_index_0_id_28d8fa1e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_copy_vue_vue_type_style_index_0_id_28d8fa1e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktop_menu_copy_vue_vue_type_style_index_0_id_28d8fa1e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu-li[data-v-28d8fa1e]{padding-bottom:.5rem;padding-top:.5rem;md:py-0}.search-drop-down[data-v-28d8fa1e]{margin-top:40px;position:absolute;z-index:300}.search-drop[data-v-28d8fa1e]{background:#fff;border-top:1px solid #e3e3e3;box-shadow:2px 2px 4px #bdbdbd;transform:scaleY(0);transform-origin:top;transition:all .3s ease-in-out;transition:transform .26s ease}.searching[data-v-28d8fa1e]{min-height:30px;transform:scaleY(1)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/desktop-menu-copy.vue?vue&type=template&id=28d8fa1e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"items-center bg-white justify-center grid md:grid-cols-7 p-2 border-b border-purple-500\" data-v-28d8fa1e>", "</div>", [_vm._ssrNode("<div class=\"col-span-2 flex items-center\" data-v-28d8fa1e>", "</div>", [_vm._ssrNode("<div data-v-28d8fa1e>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "h-16 md:h-16 md:ml-1 object-contain",
    staticStyle: {
      "width": "142px",
      "height": "90px"
    },
    attrs: {
      "src": __webpack_require__(97),
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" <div class=\"flex justify-center text-xl font-bold\" data-v-28d8fa1e>\n        Call: +254700000000\n      </div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-span-3 md:justify-around relative mx-3\" data-v-28d8fa1e>", "</div>", [_vm._ssrNode("<div data-v-28d8fa1e></div> "), _vm.searchResults && _vm.searchResults.length > 0 ? _vm._ssrNode("<div class=\"transition duration-500 ease-in-out searchDiv bg-white shadow-md absolute mt-10 border-t border-gray-200 md:justify-around w-full h-72 top-0 z-10\" data-v-28d8fa1e>", "</div>", _vm._l(_vm.searchResults, function (item) {
    return _c('nuxt-link', {
      key: `${item.url}-${item.name}`,
      staticClass: "w-full bg-gray-200",
      attrs: {
        "to": `/product/${item.url}`
      }
    }, [_c('div', {
      staticClass: "border-b border-white bg-gray-100 p-1"
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n          ")])]);
  }), 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-span-2 flex pr-8\" data-v-28d8fa1e>", "</div>", [_c('nuxt-link', {
    staticClass: "flex items-center",
    attrs: {
      "to": "/whishlist"
    }
  }, [_c('font-awesome-icon', {
    staticClass: "h-6 w-6 md:mr-2 mt-3",
    staticStyle: {
      "color": "#e11d48"
    },
    attrs: {
      "icon": ['fas', 'heart']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mr-3 pt-2\" data-v-28d8fa1e>", "</div>", [_c('nuxt-link', {
    staticClass: "flex items-center",
    attrs: {
      "to": "/cart"
    }
  }, [_c('div', {
    staticClass: "flex"
  }, [_c('svg', {
    staticClass: "h-6 w-6 font-bold",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "{2}",
      "d": "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "relative"
  }, [_vm._v("\n            My Cart\n            "), _c('span', {
    staticClass: "bg-black absolute text-white -top-2 text-base rounded-full h-6 w-6 text-center"
  }, [_vm._v(_vm._s(_vm.cart && _vm.cart.length))])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"group inline-block relative ml-6\" data-v-28d8fa1e>", "</div>", [_vm._ssrNode("<button class=\"font-semibold py-2 px-4 rounded inline-flex items-center\" data-v-28d8fa1e>", "</button>", [_c('font-awesome-icon', {
    staticClass: "h-4 w-4 mr-1",
    attrs: {
      "icon": ['fas', 'user']
    }
  }), _vm._ssrNode(" " + (_vm.user ? "<span class=\"mr-1\" data-v-28d8fa1e>" + _vm._ssrEscape(" " + _vm._s(_vm.user.first_name) + " ") + "</span>" : "<span class=\"mr-1\" data-v-28d8fa1e>Account</span>") + " <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"fill-current h-4 w-4\" data-v-28d8fa1e><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\" data-v-28d8fa1e></path></svg>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"absolute hidden pt-1 group-hover:block\" data-v-28d8fa1e>", "</ul>", [_vm._ssrNode("<li class=\"w-36\" data-v-28d8fa1e>", "</li>", [_vm.user ? _c('nuxt-link', {
    staticClass: "bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",
    attrs: {
      "to": "/checkout"
    }
  }, [_vm._v("My Account")]) : _c('nuxt-link', {
    staticClass: "bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Register")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"w-36\" data-v-28d8fa1e>", "</li>", [_vm.user ? _vm._ssrNode("<button class=\"rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-36\" data-v-28d8fa1e>", "</button>", [_vm._ssrNode("\n              Logout\n            ")], 2) : _c('nuxt-link', {
    staticClass: "rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Login")])], 1)], 2)], 2)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md:flex items-center p-3 justify-between\" style=\"background: #4caf50\" data-v-28d8fa1e>", "</div>", [_vm._ssrNode("<nav class=\"ml-4\" data-v-28d8fa1e>", "</nav>", [_vm._ssrNode("<ul class=\"md:flex flex-wrap\" data-v-28d8fa1e>", "</ul>", _vm._l(_vm.categories.records, function (category) {
    return _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-28d8fa1e>", "</li>", [_c('nuxt-link', {
      staticClass: "font-medium text-lg text-white p-2",
      attrs: {
        "to": `/${category.url}`
      }
    }, [_vm._v(_vm._s(category.name))]), _vm._ssrNode(" "), category.subs && category.subs.length > 0 ? _vm._ssrNode("<ul class=\"w-56 bg-white shadow-xl absolute hidden group-hover:block z-40 divide-y divide-gray-300 divide-solid\" data-v-28d8fa1e>", "</ul>", _vm._l(category.subs, function (subcategory) {
      return _vm._ssrNode("<li class=\"block py-2 hover:bg-gray-100\" data-v-28d8fa1e>", "</li>", [_c('nuxt-link', {
        staticClass: "p-2 text-xs font-normal",
        attrs: {
          "to": `/${category.url}/${subcategory.url}`
        }
      }, [_vm._v(_vm._s(subcategory.name))])], 1);
    }), 0) : _vm._e()], 2);
  }), 0)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/desktop-menu-copy.vue?vue&type=template&id=28d8fa1e&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/desktop-menu-copy.vue?vue&type=script&lang=js


/* harmony default export */ var desktop_menu_copyvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl", "user"]),
    ...Object(external_vuex_["mapGetters"])("product", ["cart"])
    // user() {
    //   const token = localStorage.getItem("token");
    //   return token;
    //   // var decoded = jwt_decode(token);
    //   // return decoded;
    // },
  },
  data() {
    return {
      categories: [],
      searchInput: null,
      searchPhrase: "",
      active: false,
      searchResults: [],
      searchSuggestions: [],
      blured: true
    };
  },
  async fetch() {
    const url = `api/categories`;
    const host = this.imageUrl;
    this.categories = await fetch(`${host}/${url}`).then(res => res.json());
  },
  watch: {
    $route() {
      this.searchResults = [];
    }
  },
  methods: {
    userMenu() {
      const menuBtn = document.querySelector("#menu-btn");
      const dropdown = document.querySelector("#dropdown");
      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("block");
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
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
        this.searchResults = searchResults;
      } catch (err) {
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
// CONCATENATED MODULE: ./components/home/desktop-menu-copy.vue?vue&type=script&lang=js
 /* harmony default export */ var home_desktop_menu_copyvue_type_script_lang_js = (desktop_menu_copyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/desktop-menu-copy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(199)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_desktop_menu_copyvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "28d8fa1e",
  "c7d7dea2"
  
)

/* harmony default export */ var desktop_menu_copy = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jubilantafrofarms-logo.d9c79fe.png";

/***/ })

};;
//# sourceMappingURL=home-desktop-menu-copy.js.map