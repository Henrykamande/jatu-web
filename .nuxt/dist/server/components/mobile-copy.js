exports.ids = [16];
exports.modules = {

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("14a9f622", content, true, context)
};

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_copy_vue_vue_type_style_index_0_id_2b87d384_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_copy_vue_vue_type_style_index_0_id_2b87d384_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_copy_vue_vue_type_style_index_0_id_2b87d384_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_copy_vue_vue_type_style_index_0_id_2b87d384_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_copy_vue_vue_type_style_index_0_id_2b87d384_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu-li[data-v-2b87d384]{padding-bottom:.5rem;padding-top:.5rem;md:py-0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mobile-copy.vue?vue&type=template&id=2b87d384&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"bg-white grid grid-cols-12 items-center relative\" data-v-2b87d384>", "</div>", [_vm._ssrNode("<div class=\"col-span-12 p-1 text-white justify-between flex text-lg font-bold\" style=\"background: #2e7d32\" data-v-2b87d384><div data-v-2b87d384>Jubilant Afro Farms</div> <div data-v-2b87d384>+254700000000</div></div> "), _vm._ssrNode("<div class=\"col-span-6\" data-v-2b87d384>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "w-3/4 h-12 md:w-full md:h-20 md:ml-2 object-contain",
    attrs: {
      "src": __webpack_require__(19),
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-span-6 flex justify-between\" data-v-2b87d384>", "</div>", [_c('nuxt-link', {
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
  })], 1), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "flex mt-3",
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
  }, [_vm._v("\n          My Cart\n          "), _c('span', {
    staticClass: "bg-black absolute text-white -top-2 text-base rounded-full h-6 w-6 animate-pulse text-center"
  }, [_vm._v(_vm._s(_vm.cart && _vm.cart.length))])])]), _vm._ssrNode(" <div class=\"p-2\" data-v-2b87d384><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-8 w-8 float-right md:hidden mobile-menu-button\" data-v-2b87d384><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\" data-v-2b87d384></path></svg></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sidebar min-h-screen md:flex z-30 bg-white w-80 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out\" data-v-2b87d384>", "</div>", [_vm._ssrNode("<div class=\"flex justify-between\" data-v-2b87d384>", "</div>", [_c('nuxt-link', {
    staticClass: "flex items-center space-x-2 px-4",
    attrs: {
      "to": "/"
    }
  }, [_c('span', {
    staticClass: "text-lg font-extrabold"
  }, [_vm._v(" Market")])]), _vm._ssrNode(" "), _vm._ssrNode("<button data-v-2b87d384>", "</button>", [_c('font-awesome-icon', {
    staticClass: "h-6 w-6",
    attrs: {
      "icon": ['fas', 'times']
    }
  })], 1)], 2), _vm._ssrNode(" <nav class=\"ml-4\" data-v-2b87d384><ul class=\"md:flex\" data-v-2b87d384>" + _vm._ssrList(_vm.categories.records, function (category) {
    return "<li class=\"bg-gray-100 border-b border-white menu-li block px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white\" data-v-2b87d384>" + _vm._ssrEscape("\n            " + _vm._s(category.name) + "\n          ") + "</li>";
  }) + "</ul></nav>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"p-2 relative\" data-v-2b87d384>", "</div>", [_vm._ssrNode("<div data-v-2b87d384><input placeholder=\"Search Here\" type=\"text\"" + _vm._ssrAttr("value", _vm.searchPhrase) + " class=\"w-full border border-gray-200 py-1 px-3 md:justify-around rounded outline-none focus:border-gray-400\" data-v-2b87d384></div> "), _vm.sResults && _vm.sResults.length > 0 ? _vm._ssrNode("<div class=\"transition duration-500 ease-in-out searchDiv bg-white shadow-md absolute mt-10 border-t border-gray-200 md:justify-around w-full h-72 top-0 z-10\" data-v-2b87d384>", "</div>", _vm._l(_vm.sResults, function (item) {
    return _c('nuxt-link', {
      key: `${item.url}-${item.name}`,
      staticClass: "w-full bg-gray-200",
      attrs: {
        "to": `/product/${item.url}`
      }
    }, [_c('div', {
      staticClass: "border-b border-white bg-gray-100 p-1"
    }, [_vm._v("\n          " + _vm._s(item.name) + "\n        ")])]);
  }), 1) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/mobile-copy.vue?vue&type=template&id=2b87d384&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/mobile-copy.vue?vue&type=script&lang=js


/* harmony default export */ var mobile_copyvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl"]),
    ...Object(external_vuex_["mapGetters"])("product", ["cart"])
  },
  data() {
    return {
      categories: [],
      searchPhrase: "",
      sResults: []
    };
  },
  async fetch() {
    const url = `api/categories`;
    const host = this.imageUrl;
    this.categories = await fetch(`${host}/${url}`).then(res => res.json());
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
    navigateMenu(url) {
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
// CONCATENATED MODULE: ./components/mobile-copy.vue?vue&type=script&lang=js
 /* harmony default export */ var components_mobile_copyvue_type_script_lang_js = (mobile_copyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/mobile-copy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mobile_copyvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2b87d384",
  "f2c6371c"
  
)

/* harmony default export */ var mobile_copy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mobile-copy.js.map