exports.ids = [2];
exports.modules = {

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5ac7083c", content, true, context)
};

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desk_menu_copy_vue_vue_type_style_index_0_id_1f2da5e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desk_menu_copy_vue_vue_type_style_index_0_id_1f2da5e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desk_menu_copy_vue_vue_type_style_index_0_id_1f2da5e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desk_menu_copy_vue_vue_type_style_index_0_id_1f2da5e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desk_menu_copy_vue_vue_type_style_index_0_id_1f2da5e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu-li[data-v-1f2da5e2]{padding-bottom:.5rem;padding-top:.5rem;md:py-0}.search-drop-down[data-v-1f2da5e2]{margin-top:40px;position:absolute;z-index:300}.search-drop[data-v-1f2da5e2]{background:#fff;border-top:1px solid #e3e3e3;box-shadow:2px 2px 4px #bdbdbd;transform:scaleY(0);transform-origin:top;transition:all .3s ease-in-out;transition:transform .26s ease}.searching[data-v-1f2da5e2]{min-height:30px;transform:scaleY(1)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/desk-menu-copy.vue?vue&type=template&id=1f2da5e2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"flex text-white px-6 py-2 justify-between font-bold\" style=\"background: #d8713d\" data-v-1f2da5e2><div style=\"color: #fff; font-family: Caveat\" data-v-1f2da5e2>&quot;Together, We Can Feed Africa&quot;</div> <div style=\"color: #fff\" data-v-1f2da5e2>info@jubilantafrofarms.com</div></div> "), _vm._ssrNode("<div class=\"items-center bg-white justify-center grid md:grid-cols-7 p-4 border-b border-purple-500\" data-v-1f2da5e2>", "</div>", [_vm._ssrNode("<div class=\"col-span-3 flex items-center\" data-v-1f2da5e2>", "</div>", [_vm._ssrNode("<div data-v-1f2da5e2>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "h-16 md:h-16 object-contain",
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "transform": "scale(1.7)"
    },
    attrs: {
      "src": __webpack_require__(19),
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" <div class=\"flex justify-center text-xl font-bold\" data-v-1f2da5e2></div>")], 2), _vm._ssrNode(" <div class=\"col-span-2 md:justify-around relative mx-3\" data-v-1f2da5e2></div> <div class=\"col-span-2 flex pr-8 font-bold text-xl\" data-v-1f2da5e2>\n      Call: +254 752 940 909\n    </div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md:flex items-center p-3 justify-between\" style=\"background: #10914e\" data-v-1f2da5e2>", "</div>", [_vm._ssrNode("<nav class=\"ml-4\" data-v-1f2da5e2>", "</nav>", [_vm._ssrNode("<ul class=\"md:flex flex-wrap\" data-v-1f2da5e2>", "</ul>", [_vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-1f2da5e2>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-1f2da5e2>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-1f2da5e2>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/services"
    }
  }, [_vm._v("Agri Support")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-1f2da5e2>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/projects"
    }
  }, [_vm._v("Partnership Projects")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-1f2da5e2>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/location"
    }
  }, [_vm._v("Our Location")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-1f2da5e2>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-1f2da5e2>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Contact Us")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pr-56\" data-v-1f2da5e2>", "</div>", [_vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-1f2da5e2>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("E-Commerce")])], 1)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/desk-menu-copy.vue?vue&type=template&id=1f2da5e2&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/desk-menu-copy.vue?vue&type=script&lang=js


/* harmony default export */ var desk_menu_copyvue_type_script_lang_js = ({
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
      services: [],
      searchInput: null,
      searchPhrase: "",
      active: false,
      searchResults: [],
      searchSuggestions: [],
      blured: true,
      disabled: true
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
// CONCATENATED MODULE: ./components/desk-menu-copy.vue?vue&type=script&lang=js
 /* harmony default export */ var components_desk_menu_copyvue_type_script_lang_js = (desk_menu_copyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/desk-menu-copy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(193)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_desk_menu_copyvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f2da5e2",
  "0061adad"
  
)

/* harmony default export */ var desk_menu_copy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=desk-menu-copy.js.map