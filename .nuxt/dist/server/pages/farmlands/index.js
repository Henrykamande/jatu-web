exports.ids = [46];
exports.modules = {

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/farmlands/index.vue?vue&type=template&id=cc7fe6dc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "min-h-screen"
  }, [_vm._ssrNode("<div class=\"overflow-auto max-w-screen-xl mx-auto hidden md:block\" data-v-cc7fe6dc>", "</div>", [_vm._ssrNode("<div class=\"py-6\" data-v-cc7fe6dc>", "</div>", [_vm._ssrNode("<table class=\"table-auto w-full border-collapse border border-gray-400 text-left\" data-v-cc7fe6dc>", "</table>", [_vm._ssrNode("<thead class=\"bg-gray-300 text-gray-700 font-bold\" data-v-cc7fe6dc><tr data-v-cc7fe6dc><th class=\"border border-gray-400 p-4\" data-v-cc7fe6dc>FARM CODE</th> <th class=\"border border-gray-400 p-4\" data-v-cc7fe6dc>COUNTRY</th> <th class=\"border border-gray-400 p-4\" data-v-cc7fe6dc>STATUS</th> <th class=\"border border-gray-400 p-4\" data-v-cc7fe6dc>ACTION</th></tr></thead> "), _vm._ssrNode("<tbody data-v-cc7fe6dc>", "</tbody>", _vm._l(_vm.records, function (farm) {
    return _vm._ssrNode("<tr class=\"even:bg-gray-100 hover:bg-gray-200\" data-v-cc7fe6dc>", "</tr>", [_vm._ssrNode("<td class=\"border border-gray-400 p-3\" data-v-cc7fe6dc>" + _vm._ssrEscape(_vm._s(farm.serialNo)) + "</td> <td class=\"border border-gray-400 p-3\" data-v-cc7fe6dc>" + _vm._ssrEscape(_vm._s(farm.country.name)) + "</td> <td class=\"border border-gray-400 p-3\" data-v-cc7fe6dc>" + _vm._ssrEscape(_vm._s(farm.status)) + "</td> "), _vm._ssrNode("<td class=\"border border-gray-400 p-3\" data-v-cc7fe6dc>", "</td>", [_c('nuxt-link', {
      staticClass: "text-blue-600 underline hover:text-blue-800",
      attrs: {
        "to": `/farmlands/${farm.serialNo}`
      }
    }, [_vm._v("Read more")])], 1)], 2);
  }), 0)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col space-y-6 md:hidden p-6\" data-v-cc7fe6dc>", "</div>", [_vm._ssrNode("<div data-v-cc7fe6dc>", "</div>", _vm._l(_vm.records, function (farm) {
    return _vm._ssrNode("<div class=\"border border-gray-300 rounded-sm p-4 shadow-sm\" data-v-cc7fe6dc>", "</div>", [_vm._ssrNode("<div class=\"flex justify-between items-center mb-3\" data-v-cc7fe6dc><span class=\"font-semibold\" data-v-cc7fe6dc>Farm Code:</span> <span data-v-cc7fe6dc>" + _vm._ssrEscape(_vm._s(farm.serialNo)) + "</span></div> <div class=\"flex justify-between items-center mb-3\" data-v-cc7fe6dc><span class=\"font-semibold\" data-v-cc7fe6dc>Country:</span> <span data-v-cc7fe6dc>" + _vm._ssrEscape(_vm._s(farm.country.name)) + "</span></div> <div class=\"flex justify-between items-center mb-3\" data-v-cc7fe6dc><span class=\"font-semibold\" data-v-cc7fe6dc>Status:</span> <span data-v-cc7fe6dc>" + _vm._ssrEscape(_vm._s(farm.status)) + "</span></div> "), _vm._ssrNode("<div class=\"flex justify-center\" data-v-cc7fe6dc>", "</div>", [_c('nuxt-link', {
      staticClass: "text-blue-500 font-bold underline hover:text-blue-700",
      attrs: {
        "to": `/farmlands/${farm.serialNo}`
      }
    }, [_vm._v("Read more")])], 1)], 2);
  }), 0)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/farmlands/index.vue?vue&type=template&id=cc7fe6dc&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/farmlands/index.vue?vue&type=script&lang=js


/* harmony default export */ var farmlandsvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl"])
  },
  async asyncData() {
    const url = `/api/available/farms`;
    try {
      const {
        data
      } = await common["b" /* http */].get(url);
      const {
        records,
        meta
      } = data;
      return {
        records,
        meta
      };
    } catch (err) {
      return {
        records: [],
        meta: {}
      };
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./pages/farmlands/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_farmlandsvue_type_script_lang_js = (farmlandsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/farmlands/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_farmlandsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cc7fe6dc",
  "2d6fd8f0"
  
)

/* harmony default export */ var farmlands = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map