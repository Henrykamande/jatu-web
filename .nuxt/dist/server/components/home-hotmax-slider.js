exports.ids = [7];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("489d14f0", content, true, context)
};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotmax_slider_vue_vue_type_style_index_0_id_4a61988c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotmax_slider_vue_vue_type_style_index_0_id_4a61988c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotmax_slider_vue_vue_type_style_index_0_id_4a61988c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotmax_slider_vue_vue_type_style_index_0_id_4a61988c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotmax_slider_vue_vue_type_style_index_0_id_4a61988c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-fade-enter-active,.slide-fade-leave-active{transition:all .4s ease}.slide-fade-enter,.slide-fade-leave-to{opacity:.7;transform:translateX(10px)}img{width:100%}.next,.prev{cursor:pointer;position:absolute;top:40%}.next{right:0}.prev{left:0}@media only screen and (max-width:600px){.sliderImg{height:170px;max-height:250px}}@media only screen and (min-width:600px){.sliderImg{height:170px;max-height:250px}}@media only screen and (min-width:768px){.sliderImg{height:170px;max-height:300px}}@media only screen and (min-width:992px){.sliderImg{height:170px;max-height:250px}}@media only screen and (min-width:1200px){.sliderImg{height:250px;max-height:250px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/hotmax-slider.vue?vue&type=template&id=4a61988c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "relative"
  }, [_vm._ssrNode("<div class=\"overflow-hidden sliderImg\">", "</div>", [_c('transition', {
    attrs: {
      "name": "slide-fade",
      "tag": "div"
    }
  }, _vm._l([_vm.currentIndex], function (i) {
    return _c('div', {
      key: i
    }, [_vm.currentImg.coverImage ? _c('img', {
      staticClass: "object-contain w-full sliderImg",
      staticStyle: {
        "max-height": "400px"
      },
      attrs: {
        "src": `${_vm.imageUrl}/uploads/slider/${_vm.currentImg.coverImage}`,
        "alt": ""
      }
    }) : _vm._e()]);
  }), 0), _vm._ssrNode(" <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-12 w-12 ml-16 prev absolute text-yellow-400 hover:text-purple-400\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 19l-7-7 7-7m8 14l-7-7 7-7\"></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-12 w-12 mr-16 next absolute text-yellow-400 hover:text-purple-400\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 5l7 7-7 7M5 5l7 7-7 7\"></path></svg>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/hotmax-slider.vue?vue&type=template&id=4a61988c

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/hotmax-slider.vue?vue&type=script&lang=js


/* harmony default export */ var hotmax_slidervue_type_script_lang_js = ({
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
// CONCATENATED MODULE: ./components/home/hotmax-slider.vue?vue&type=script&lang=js
 /* harmony default export */ var home_hotmax_slidervue_type_script_lang_js = (hotmax_slidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/home/hotmax-slider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_hotmax_slidervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "53c24d78"
  
)

/* harmony default export */ var hotmax_slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-hotmax-slider.js.map