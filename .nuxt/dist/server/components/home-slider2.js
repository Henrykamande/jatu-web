exports.ids = [12,6];
exports.modules = {

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/farm.7e6f595.png";

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("77615204", content, true, context)
};

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider2_vue_vue_type_style_index_0_id_7aaddd92_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider2_vue_vue_type_style_index_0_id_7aaddd92_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider2_vue_vue_type_style_index_0_id_7aaddd92_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider2_vue_vue_type_style_index_0_id_7aaddd92_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slider2_vue_vue_type_style_index_0_id_7aaddd92_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-img{background-repeat:no-repeat;background-size:cover}.slide-fade-enter-active,.slide-fade-leave-active{transition:all .4s ease}.slide-fade-enter,.slide-fade-leave-to{opacity:.7;transform:translateX(10px)}img{width:100%}.next,.prev{cursor:pointer;position:absolute;top:40%}.next{right:0}.prev{left:0}@media only screen and (max-width:600px){.sliderImg{height:250px;max-height:250px}}@media only screen and (min-width:600px){.sliderImg{height:250px;max-height:250px}}@media only screen and (min-width:768px){.sliderImg{height:300px;max-height:300px}}@media only screen and (min-width:992px){.sliderImg{height:550px;max-height:550px}}@media only screen and (min-width:1200px){.sliderImg{height:550px;max-height:550px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/slider2.vue?vue&type=template&id=7aaddd92
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"mx-auto bg-img md:block sm:hidden hidden\"" + _vm._ssrStyle({
    "height": "700px"
  }, {
    backgroundImage: `url(${_vm.bannerImage})`
  }, null) + ">", "</div>", [_c('Header'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex text-white justify-center mt-36 h-full\">", "</div>", [_vm._ssrNode("<div class=\"text-center\">", "</div>", [_vm._ssrNode("<div class=\"font-bold text-6xl\">Jubilant Afro Farms</div> <div class=\"text-3xl font-bold\">&quot;Together, we feed Africa&quot;</div> "), _vm._ssrNode("<div class=\"mt-4\">", "</div>", [_c('nuxt-link', {
    staticClass: "bg-white px-4 py-3 text-black text-xl rounded-3xl",
    attrs: {
      "to": "/services"
    }
  }, [_vm._v("Find out more")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md:hidden sm:block block\">", "</div>", [_c('MobileHeader'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container mt-1 mx-auto relative\" style=\"margin-top: -5px\">", "</div>", [_vm._ssrNode("<div class=\"overflow-hidden sliderImg\">", "</div>", [_c('transition', {
    attrs: {
      "name": "slide-fade",
      "tag": "div"
    }
  }, _vm._l([_vm.currentIndex], function (i) {
    return _c('div', {
      key: i
    }, [_vm.currentImg.coverImage ? _c('img', {
      staticClass: "object-fill w-full sliderImg",
      attrs: {
        "src": `${_vm.imageUrl}/uploads/slider/${_vm.currentImg.coverImage}`,
        "alt": ""
      }
    }) : _vm._e()]);
  }), 0), _vm._ssrNode(" <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-12 w-12 ml-4 prev absolute text-orange-400 hover:text-purple-400\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 19l-7-7 7-7m8 14l-7-7 7-7\"></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-12 w-12 mr-4 next absolute text-orange-400 hover:text-purple-400\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 5l7 7-7 7M5 5l7 7-7 7\"></path></svg>")], 2)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/slider2.vue?vue&type=template&id=7aaddd92

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./assets/images/farm.png
var farm = __webpack_require__(109);
var farm_default = /*#__PURE__*/__webpack_require__.n(farm);

// EXTERNAL MODULE: ./components/home-header.vue + 4 modules
var home_header = __webpack_require__(98);

// EXTERNAL MODULE: ./components/header.vue + 4 modules
var header = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/slider2.vue?vue&type=script&lang=js





/* harmony default export */ var slider2vue_type_script_lang_js = ({
  components: {
    Header: home_header["default"],
    MobileHeader: header["default"]
  },
  computed: {
    currentImg: function () {
      if (this.images.length > 0) {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      } else {
        return {};
      }
    },
    ...Object(external_vuex_["mapGetters"])(["imageUrl"])
  },
  transition: "home",
  mode: "in-out",
  data() {
    return {
      bannerImage: farm_default.a,
      images: [],
      timer: null,
      currentIndex: 0
    };
  },
  async fetch() {
    const url = `api/slider`;
    const host = this.imageUrl;
    const data = await fetch(`${host}/${url}`).then(res => res.json());
    if (data.records) {
      this.images = data.records;
    }
  },
  mounted: function () {
    this.startSlide();
  },
  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 3000);
    },
    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    }
  }
});
// CONCATENATED MODULE: ./components/home/slider2.vue?vue&type=script&lang=js
 /* harmony default export */ var home_slider2vue_type_script_lang_js = (slider2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/slider2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_slider2vue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bd876fa4"
  
)

/* harmony default export */ var slider2 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(8).default})


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("86b90fd0", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_header_vue_vue_type_style_index_0_id_4026e29f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_header_vue_vue_type_style_index_0_id_4026e29f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_header_vue_vue_type_style_index_0_id_4026e29f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_header_vue_vue_type_style_index_0_id_4026e29f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_header_vue_vue_type_style_index_0_id_4026e29f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".menu-li[data-v-4026e29f]{padding-bottom:.5rem;padding-top:.5rem;md:py-0}.search-drop-down[data-v-4026e29f]{margin-top:40px;position:absolute;z-index:300}.search-drop[data-v-4026e29f]{background:#fff;border-top:1px solid #e3e3e3;box-shadow:2px 2px 4px #bdbdbd;transform:scaleY(0);transform-origin:top;transition:all .3s ease-in-out;transition:transform .26s ease}.searching[data-v-4026e29f]{min-height:30px;transform:scaleY(1)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-header.vue?vue&type=template&id=4026e29f&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"flex text-white px-6 py-2 justify-between font-bold bg-orange-500\" data-v-4026e29f><div style=\"color: #fff; font-family: Caveat\" data-v-4026e29f><div class=\"flex\" data-v-4026e29f><a href=\"https://www.facebook.com/share/152Vha19RMg/GM\" target=\"_blank\" data-v-4026e29f><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-facebook h-6 w-6 md:h-6 md:w-6 mr-2 cursor-pointer text-gray-300 hover:text-white\" data-v-4026e29f><path d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\" data-v-4026e29f></path></svg></a> <a href=\"#\" target=\"_blank\" data-v-4026e29f><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" class=\"h-6 w-6 ml-4 md:h-6 md:w-6 mr-4 text-indigo-50\" data-v-4026e29f><path d=\"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z\" data-v-4026e29f></path></svg></a> <a href=\"https://www.instagram.com/jani_afrofarms?igsh=ZmxjNXV1cG43eWl6\" target=\"_blank\" data-v-4026e29f><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-instagram h-6 w-6 md:h-6 md:w-6 cursor-pointer text-gray-300 hover:text-white\" data-v-4026e29f><path d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\" data-v-4026e29f></path></svg></a></div></div> <div class=\"text-white\" data-v-4026e29f>\n        Translator\n        </div></div> "), _vm._ssrNode("<div class=\"items-center justify-center grid md:grid-cols-8 p-4\" data-v-4026e29f>", "</div>", [_vm._ssrNode("<div class=\"col-span-3 flex items-center justify-start\" data-v-4026e29f>", "</div>", [_vm._ssrNode("<div data-v-4026e29f>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "h-16 md:h-16 md:pt-2 object-contain",
    staticStyle: {
      "width": "200px",
      "height": "200px",
      "transform": "scale(1.7)"
    },
    attrs: {
      "src": __webpack_require__(19),
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" <div class=\"flex justify-center text-xl font-bold text-white\" data-v-4026e29f></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-span-2 md:justify-around relative mx-3\" data-v-4026e29f>", "</div>", [_vm._ssrNode("<div data-v-4026e29f></div> "), _vm.searchResults && _vm.searchResults.length > 0 ? _vm._ssrNode("<div class=\"transition duration-500 ease-in-out searchDiv bg-white shadow-md absolute mt-10 border-t border-gray-200 md:justify-around w-full h-72 top-0 z-10\" data-v-4026e29f>", "</div>", _vm._l(_vm.searchResults, function (item) {
    return _c('nuxt-link', {
      key: `${item.url}-${item.name}`,
      staticClass: "w-full bg-gray-200",
      attrs: {
        "to": `/product/${item.url}`
      }
    }, [_c('div', {
      staticClass: "border-b border-white bg-gray-100 p-1"
    }, [_vm._v(_vm._s(item.name))])]);
  }), 1) : _vm._e()], 2), _vm._ssrNode(" <div class=\"col-span-2 flex justify-end pr-8 font-bold text-xl\" data-v-4026e29f>\n        Call: +254 752 940 909\n      </div> "), _vm._ssrNode("<div class=\"col-span-1 text-gray-600 flex justify-center\" data-v-4026e29f>", "</div>", [_vm.isAuthenticated ? _vm._ssrNode("<div data-v-4026e29f>", "</div>", [_vm._ssrNode("<div class=\"col-span-1 flex place-content-center relative\" data-v-4026e29f>", "</div>", [_vm._ssrNode("<div data-v-4026e29f>", "</div>", [_vm._ssrNode("<button class=\"group relative flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 p-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg hover:shadow-xl\" data-v-4026e29f>", "</button>", [_vm._ssrNode("<div class=\"relative mb-2\" data-v-4026e29f>", "</div>", [_vm._ssrNode("<div class=\"w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300\" data-v-4026e29f>", "</div>", [_c('font-awesome-icon', {
    staticClass: "text-white text-xl group-hover:scale-110 transition-transform duration-300",
    attrs: {
      "icon": ['fas', 'user-circle']
    }
  })], 1), _vm._ssrNode(" <div class=\"absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-sm\" data-v-4026e29f><div class=\"w-full h-full bg-green-400 rounded-full animate-pulse\" data-v-4026e29f></div></div>")], 2), _vm._ssrNode(" <span class=\"font-semibold text-xs text-white/90 group-hover:text-white transition-colors duration-300 max-w-20 truncate\" data-v-4026e29f>" + _vm._ssrEscape("\n      " + _vm._s(_vm.userName) + "\n    ") + "</span> <svg fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" class=\"w-3 h-3 text-white/70 group-hover:text-white mt-1 transition-all duration-300 group-hover:translate-y-0.5\" data-v-4026e29f><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\" data-v-4026e29f></path></svg> <div class=\"absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300\" data-v-4026e29f></div>")], 2)]), _vm._ssrNode(" "), _vm.showDropdown ? _vm._ssrNode("<div class=\"absolute right-0 mt-14 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50\" data-v-4026e29f>", "</div>", [_vm._ssrNode("<ul class=\"divide-y divide-gray-200\" data-v-4026e29f>", "</ul>", [_vm._ssrNode("<li data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors",
    attrs: {
      "to": `/my-details/account`
    }
  }, [_vm._v("\n        Account\n      ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors",
    attrs: {
      "to": "/my-details/equipments"
    }
  }, [_vm._v("\n        Equipments\n      ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors",
    attrs: {
      "to": "/my-details/farms"
    }
  }, [_vm._v("\n        Farms\n      ")])], 1), _vm._ssrNode(" <li data-v-4026e29f><button class=\"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors\" data-v-4026e29f>\n        Logout\n      </button></li>")], 2)]) : _vm._e()], 2)]) : _vm._ssrNode("<div class=\"text-white w-16 bg-orange-400 px-2 py-1 rounded font-bold\" data-v-4026e29f>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/global-auth/login"
    }
  }, [_vm._v("\n            Login\n          ")])], 1)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md:flex items-center px-3 justify-between\" data-v-4026e29f>", "</div>", [_vm._ssrNode("<nav class=\"ml-4\" data-v-4026e29f>", "</nav>", [_vm._ssrNode("<ul class=\"md:flex flex-wrap\" data-v-4026e29f>", "</ul>", [_vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About Us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/services"
    }
  }, [_vm._v("Agri\n              Support")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "#"
    }
  }, [_vm._v("Services")]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"absolute left-0 top-fdivl bg-white text-gray-800 rounded-md shadow-lg hidden group-hover:block\" data-v-4026e29f>", "</div>", [_c('nuxt-link', {
    staticClass: "block px-4 py-2 hover:bg-gray-100",
    attrs: {
      "to": "/farmlands"
    }
  }, [_vm._v("Farmlands")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "block px-4 py-2 hover:bg-gray-100",
    attrs: {
      "to": "/equipment"
    }
  }, [_vm._v("Equipment")])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/location"
    }
  }, [_vm._v("Our\n              Location")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2 hover:text-orange-500",
    attrs: {
      "to": "/contact-us"
    }
  }, [_vm._v("Contact\n              Us")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pr-56\" data-v-4026e29f>", "</div>", [_vm._ssrNode("<li class=\"menu-li group inline-block relative\" data-v-4026e29f>", "</li>", [_c('nuxt-link', {
    staticClass: "font-medium text-lg text-white p-2",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("E-Commerce")])], 1)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home-header.vue?vue&type=template&id=4026e29f&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home-header.vue?vue&type=script&lang=js


/* harmony default export */ var home_headervue_type_script_lang_js = ({
  components: {},
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl", "user"]),
    ...Object(external_vuex_["mapGetters"])("product", ["cart"]),
    isAuthenticated() {
      return  false ? undefined : false;
    },
    userName() {
      if (false) {}
    }
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
      disabled: true,
      showDropdown: false,
      languages: [{
        code: "en|af",
        title: "Afrikaans"
      }, {
        code: "en|ar",
        title: "Arabic"
      }, {
        code: "en|ko",
        title: "Korean"
      }, {
        code: "en|lt",
        title: "Lithuanian"
      }]
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
    showMenu() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      this.$store.commit("logout");
      window.location.reload();
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
  },
  created() {}
});
// CONCATENATED MODULE: ./components/home-header.vue?vue&type=script&lang=js
 /* harmony default export */ var components_home_headervue_type_script_lang_js = (home_headervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home-header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_home_headervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4026e29f",
  "9ccd8c1e"
  
)

/* harmony default export */ var home_header = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-slider2.js.map