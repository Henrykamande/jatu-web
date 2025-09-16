exports.ids = [35];
exports.modules = {

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("16a30cff", content, true, context)
};

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0a369a6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0a369a6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0a369a6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0a369a6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_0a369a6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-0a369a6e]{max-width:1200px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/_id.vue?vue&type=template&id=0a369a6e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto px-4 md:px-20 py-10"
  }, [_vm._ssrNode("<div class=\"bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10\" data-v-0a369a6e>" + (_vm.equipments ? "<div class=\"grid md:grid-cols-2 gap-8\" data-v-0a369a6e><div class=\"flex justify-center items-center\" data-v-0a369a6e><img" + _vm._ssrAttr("src", `${_vm.imageUrl}/uploads/projects/${_vm.equipments.imageLink}`) + _vm._ssrAttr("alt", _vm.equipments.machineType) + " class=\"rounded-lg w-full max-w-md object-cover shadow-md\" data-v-0a369a6e></div> <div data-v-0a369a6e><h1 class=\"text-3xl font-bold text-green-700 mb-4\" data-v-0a369a6e>" + _vm._ssrEscape("\n          " + _vm._s(_vm.equipments.machineType) + " - " + _vm._s(_vm.equipments.model) + "\n        ") + "</h1> <p class=\"text-gray-600 mb-2\" data-v-0a369a6e><strong data-v-0a369a6e>Serial No:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.serialNo)) + "</p> <p class=\"text-gray-600 mb-2\" data-v-0a369a6e><strong data-v-0a369a6e>Make:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.make)) + "</p> <p class=\"text-gray-600 mb-2\" data-v-0a369a6e><strong data-v-0a369a6e>Capacity:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.capacity)) + "</p> <p class=\"text-gray-600 mb-2\" data-v-0a369a6e><strong data-v-0a369a6e>Drive Type:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.driveType)) + "</p> <p class=\"text-gray-600 mb-2\" data-v-0a369a6e><strong data-v-0a369a6e>Main Use:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.mainUse)) + "</p> <p class=\"text-gray-600 mb-2\" data-v-0a369a6e><strong data-v-0a369a6e>Condition:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.condition)) + "</p> <p class=\"text-gray-600 mb-2\" data-v-0a369a6e><strong data-v-0a369a6e>Timeline Available:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formatDate(_vm.equipments.timeLine))) + "</p> <div class=\"mt-6 bg-gray-100 p-4 rounded-md\" data-v-0a369a6e><h2 class=\"text-xl font-semibold text-gray-800 mb-2\" data-v-0a369a6e>Pricing Details</h2> <p class=\"text-gray-700\" data-v-0a369a6e><strong data-v-0a369a6e>Preferred Contract:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.preferredContract)) + "</p> <p class=\"text-gray-700\" data-v-0a369a6e><strong data-v-0a369a6e>Pricing Basis:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.pricing)) + "</p> <p class=\"text-gray-700\" data-v-0a369a6e><strong data-v-0a369a6e>Average Price:</strong>" + _vm._ssrEscape(" KES " + _vm._s(parseInt(_vm.equipments.averagePrice).toLocaleString())) + "</p></div> <div class=\"mt-6 bg-gray-100 p-4 rounded-md\" data-v-0a369a6e><h2 class=\"text-xl font-semibold text-gray-800 mb-2\" data-v-0a369a6e>Location Details</h2> <p class=\"text-gray-700\" data-v-0a369a6e><strong data-v-0a369a6e>Country:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.countryAt)) + "</p> <p class=\"text-gray-700\" data-v-0a369a6e><strong data-v-0a369a6e>Region:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.region)) + "</p> <p class=\"text-gray-700\" data-v-0a369a6e><strong data-v-0a369a6e>District:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.district)) + "</p> <p class=\"text-gray-700\" data-v-0a369a6e><strong data-v-0a369a6e>Ward:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.ward)) + "</p> <p class=\"text-gray-700\" data-v-0a369a6e><strong data-v-0a369a6e>Village:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.equipments.village)) + "</p></div></div></div>" : _vm.loading ? "<div class=\"text-center text-gray-500\" data-v-0a369a6e>Loading...</div>" : _vm.error ? "<div class=\"text-center text-red-500\" data-v-0a369a6e>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</div>" : "<!---->") + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/equipment/_id.vue?vue&type=template&id=0a369a6e&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/_id.vue?vue&type=script&lang=js


/* harmony default export */ var _idvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl"])
  },
  async asyncData({
    params
  }) {
    try {
      const {
        data
      } = await common["b" /* http */].get(`/api/list-equipment/fetch-by-id/${params.id}`);
      return {
        equipments: data.record
      };
    } catch (err) {
      console.error('Failed to fetch equipment details', err);
      return {
        equipments: null,
        error: 'Failed to load equipment details'
      };
    }
  },
  data() {
    return {
      equipments: null,
      loading: false,
      error: null
    };
  },
  async mounted() {
    await this.refetchEquipment();
  },
  methods: {
    async refetchEquipment() {
      this.loading = true;
      console.log(this.$route.params.id);
      try {
        const {
          data
        } = await common["b" /* http */].get(`/api/list-equipment/fetched-by-id/${this.$route.params.id}`);
        this.equipments = data.record;
        console.log(this.equipments);
        this.error = null;
      } catch (err) {
        console.error('Failed to fetch equipment details', err);
        this.error = 'Failed to load equipment details';
      }
      this.loading = false;
    },
    formatDate(dateString) {
      const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
});
// CONCATENATED MODULE: ./pages/equipment/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var equipment_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/equipment/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(187)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  equipment_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a369a6e",
  "015cdc0c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map