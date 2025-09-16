exports.ids = [64];
exports.modules = {

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5e04b21b", content, true, context)
};

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f16b48f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f16b48f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f16b48f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f16b48f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f16b48f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-f16b48f4]{max-width:1280px}.shadow-md[data-v-f16b48f4]{box-shadow:0 4px 10px rgba(0,0,0,.08)}.rounded-lg[data-v-f16b48f4]{border-radius:10px}.hover\\:shadow-md[data-v-f16b48f4]:hover{box-shadow:0 6px 12px rgba(0,0,0,.12)}.animate-pulse[data-v-f16b48f4]{animation:pulse-f16b48f4 1.5s infinite}@keyframes pulse-f16b48f4{0%{opacity:1}50%{opacity:.5}to{opacity:1}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-details/farms/index.vue?vue&type=template&id=f16b48f4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto px-4 md:px-24 py-8"
  }, [_vm._ssrNode("<div class=\"bg-white p-6 rounded-lg shadow-md border border-gray-200\" data-v-f16b48f4>", "</div>", [_vm._ssrNode("<div class=\"bg-gradient-to-r from-green-500 to-green-600 text-white py-6 px-6 rounded-md shadow-lg\" data-v-f16b48f4><h2 class=\"text-2xl font-semibold\" data-v-f16b48f4>Rented Farmlands</h2> <p class=\"text-sm opacity-90\" data-v-f16b48f4>Below are details of your rented farm.</p></div> " + (_vm.loader ? "<div class=\"text-green-600 mt-6 text-center animate-pulse\" data-v-f16b48f4>Loading your farmland details...</div>" : "<!---->") + " " + (_vm.errorMessage ? "<div class=\"text-red-600 mt-6 text-center font-semibold\" data-v-f16b48f4>" + _vm._ssrEscape(_vm._s(_vm.errorMessage)) + "</div>" : "<!---->") + " "), _vm.farms.length ? _vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mt-6\" data-v-f16b48f4>", "</div>", _vm._l(_vm.farms, function (farm, index) {
    return _vm._ssrNode("<div class=\"p-4 border rounded-lg shadow-sm hover:shadow-md transition\" data-v-f16b48f4>", "</div>", [_vm._ssrNode("<h3 class=\"text-lg font-bold text-green-700\" data-v-f16b48f4>" + _vm._ssrEscape(_vm._s(farm.farm.serialNo)) + "</h3> <p class=\"text-gray-600\" data-v-f16b48f4><strong data-v-f16b48f4>Country:</strong>" + _vm._ssrEscape(" " + _vm._s(farm.farm.countryName || "Loading...")) + "</p> <p class=\"text-gray-600\" data-v-f16b48f4><strong data-v-f16b48f4>District:</strong>" + _vm._ssrEscape(" " + _vm._s(farm.farm.district)) + "</p> <p class=\"text-gray-600\" data-v-f16b48f4><strong data-v-f16b48f4>Village:</strong>" + _vm._ssrEscape(" " + _vm._s(farm.farm.village)) + "</p> <p class=\"text-gray-600\" data-v-f16b48f4><strong data-v-f16b48f4>Acres:</strong>" + _vm._ssrEscape(" " + _vm._s(farm.acres)) + "</p> <p class=\"text-gray-600\" data-v-f16b48f4><strong data-v-f16b48f4>Contact:</strong>" + _vm._ssrEscape(" " + _vm._s(farm.phoneNumber)) + "</p> "), _vm._ssrNode("<div class=\"mt-4 flex space-x-4\" data-v-f16b48f4>", "</div>", [_vm._ssrNode("<button class=\"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center\" data-v-f16b48f4>", "</button>", [_c('font-awesome-icon', {
      staticClass: "mr-2",
      attrs: {
        "icon": ['fas', 'edit']
      }
    }), _vm._ssrNode(" Edit\n          ")], 2), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center\" data-v-f16b48f4>", "</button>", [_c('font-awesome-icon', {
      staticClass: "mr-2",
      attrs: {
        "icon": ['fas', 'trash']
      }
    }), _vm._ssrNode(" Delete\n          ")], 2)], 2)], 2);
  }), 0) : _vm._ssrNode("<div class=\"text-gray-500 mt-6 text-center\" data-v-f16b48f4>No farmlands rented yet.</div>"), _vm._ssrNode(" "), _vm.showEditModal ? _vm._ssrNode("<div class=\"fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center\" data-v-f16b48f4>", "</div>", [_vm._ssrNode("<div class=\"bg-white p-6 rounded-lg shadow-md w-96\" data-v-f16b48f4>", "</div>", [_vm._ssrNode("<h2 class=\"text-xl font-bold text-green-400 mb-4\" data-v-f16b48f4>Edit Farm Details</h2> <div class=\"flex flex-col\" data-v-f16b48f4><label for=\"acres\" class=\"font-semibold text-green-400\" data-v-f16b48f4>Acres</label> <input placeholder=\"Acres\"" + _vm._ssrAttr("value", _vm.selectedFarm.acres) + " class=\"border p-2 w-full mb-2\" data-v-f16b48f4></div> <div class=\"flex flex-col\" data-v-f16b48f4><label for=\"contact\" class=\"font-semibold text-green-400\" data-v-f16b48f4>Contact</label> <input placeholder=\"Contact\"" + _vm._ssrAttr("value", _vm.selectedFarm.phoneNumber) + " class=\"border p-2 w-full mb-2\" data-v-f16b48f4></div> "), _vm._ssrNode("<div class=\"flex gap-3\" data-v-f16b48f4>", "</div>", [_vm._ssrNode("<button class=\"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center\" data-v-f16b48f4>", "</button>", [_c('font-awesome-icon', {
    staticClass: "mr-2",
    attrs: {
      "icon": ['fas', 'check']
    }
  }), _vm._ssrNode(" Save\n          ")], 2), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 flex items-center ml-2\" data-v-f16b48f4>", "</button>", [_c('font-awesome-icon', {
    staticClass: "mr-2",
    attrs: {
      "icon": ['fas', 'times']
    }
  }), _vm._ssrNode(" Cancel\n          ")], 2)], 2)], 2)]) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/my-details/farms/index.vue?vue&type=template&id=f16b48f4&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(20);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-details/farms/index.vue?vue&type=script&lang=js





fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faEdit"], free_solid_svg_icons_["faTrash"], free_solid_svg_icons_["faTimes"], free_solid_svg_icons_["faCheck"]);
/* harmony default export */ var farmsvue_type_script_lang_js = ({
  components: {
    FontAwesomeIcon: vue_fontawesome_["FontAwesomeIcon"]
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["user"]),
    userSerialNo() {
      return this.user ? this.user.serialNo : null;
    }
  },
  data() {
    return {
      farms: [],
      loader: false,
      errorMessage: "",
      showEditModal: false,
      selectedFarm: null
    };
  },
  async mounted() {
    await this.fetchUserFarms();
  },
  methods: {
    async fetchUserFarms() {
      if (!this.userSerialNo) {
        this.errorMessage = "No user serial number found.";
        return;
      }
      this.loader = true;
      try {
        const response = await common["b" /* http */].get(`/api/farmlands-application/${this.userSerialNo}`);
        this.farms = response.data.record;

        // Fetch country names dynamically
        await Promise.all(this.farms.map(async (farm, index) => {
          const countryName = await this.fetchCountryName(farm.farm.country);
          this.$set(this.farms[index].farm, "countryName", countryName.name);
        }));
      } catch (error) {
        this.errorMessage = "Failed to fetch farms.";
      }
      this.loader = false;
    },
    async fetchCountryName(countryId) {
      try {
        const response = await common["b" /* http */].get(`/api/countries/by/id/${countryId}`);
        return response.data.record;
      } catch (error) {
        console.error("Failed to fetch country name", error);
        return "Unknown Country";
      }
    },
    editFarm(farm) {
      this.selectedFarm = {
        ...farm
      };
      this.showEditModal = true;
    },
    async saveFarmChanges() {
      try {
        await common["b" /* http */].put(`/api/farmlands-application/${this.selectedFarm._id}`, this.selectedFarm);
        this.showEditModal = false;
        await this.fetchUserFarms();
      } catch (error) {
        console.error("Failed to update farm", error);
      }
    },
    async deleteFarm(farmId, index) {
      try {
        await common["b" /* http */].delete(`/api/farmlands-application/${farmId}`);
        this.farms.splice(index, 1); // Update UI immediately
      } catch (error) {
        console.error("Failed to delete farm", error);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/my-details/farms/index.vue?vue&type=script&lang=js
 /* harmony default export */ var my_details_farmsvue_type_script_lang_js = (farmsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/my-details/farms/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(181)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  my_details_farmsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f16b48f4",
  "29404c0c"
  
)

/* harmony default export */ var farms = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map