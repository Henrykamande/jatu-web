exports.ids = [41];
exports.modules = {

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/rent-farmland-equipment/index.vue?vue&type=template&id=5a929f85&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "max-w-screen-xl mx-auto"
  }, [_vm._ssrNode("<div class=\"py-6\" data-v-5a929f85>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-3 max-w-screen-lg mx-3 md:mx-auto px-3 pb-6 rounded-xl shadow shadow-gray-50\" data-v-5a929f85>", "</div>", [_vm._ssrNode("<h1 class=\"text-center font-bold text-3xl text-green-600 mt-2\" data-v-5a929f85>RENT EQUIPMENT</h1> <p class=\"text-center text-gray-600 text-lg leading-relaxed\" data-v-5a929f85>Choose the machine category by use from the following</p> "), _vm._ssrNode("<div class=\"md:m-6\" data-v-5a929f85>", "</div>", [_vm._ssrNode("<table class=\"table-auto w-full border-collapse border border-gray-300 rounded text-left\" data-v-5a929f85>", "</table>", [_vm._ssrNode("<thead class=\"bg-gray-200 text-gray-800\" data-v-5a929f85><tr data-v-5a929f85><th class=\"border border-gray-400 p-3\" data-v-5a929f85>Farming Activity (use)</th> <th class=\"border border-gray-400 p-3\" data-v-5a929f85>Machine</th></tr></thead> "), _vm._ssrNode("<tbody data-v-5a929f85>", "</tbody>", _vm._l(_vm.uniqueCategories, function (category) {
    return _vm._ssrNode("<tr data-v-5a929f85>", "</tr>", [_vm._ssrNode("<td class=\"border border-gray-400 p-3 capitalize\" data-v-5a929f85>" + _vm._ssrEscape(_vm._s(category)) + "</td> "), _vm._ssrNode("<td class=\"border border-gray-400 p-3\" data-v-5a929f85>", "</td>", [_c('nuxt-link', {
      staticClass: "text-blue-500 underline hover:text-blue-700",
      attrs: {
        "to": `/equipment/rent-farmland-equipment/${_vm.formatCategoryForURL(category)}`
      }
    }, [_vm._v("View")])], 1)], 2);
  }), 0)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/equipment/rent-farmland-equipment/index.vue?vue&type=template&id=5a929f85&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(60);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(61);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(62);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(63);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(64);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(65);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(66);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(67);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(68);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(69);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(70);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(71);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(72);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(73);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(74);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(75);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/rent-farmland-equipment/index.vue?vue&type=script&lang=js


















/* harmony default export */ var rent_farmland_equipmentvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl"])
  },
  async asyncData() {
    const url = `/api/list-equipment`;
    try {
      const {
        data
      } = await common["b" /* http */].get(url);
      const {
        records,
        meta
      } = data;
      const categories = [...new Set(data.records.map(item => item.mainUse.toLowerCase()))];
      return {
        records,
        meta,
        uniqueCategories: categories
      };
    } catch (err) {
      return {
        records: [],
        meta: {}
      };
    }
  },
  methods: {
    formatCategoryForURL(category) {
      return category.toLowerCase().replace(/\s+/g, '-');
    }
  }
});
// CONCATENATED MODULE: ./pages/equipment/rent-farmland-equipment/index.vue?vue&type=script&lang=js
 /* harmony default export */ var equipment_rent_farmland_equipmentvue_type_script_lang_js = (rent_farmland_equipmentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/equipment/rent-farmland-equipment/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  equipment_rent_farmland_equipmentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a929f85",
  "70bc0184"
  
)

/* harmony default export */ var rent_farmland_equipment = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map