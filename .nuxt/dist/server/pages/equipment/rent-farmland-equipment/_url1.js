exports.ids = [40];
exports.modules = {

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/rent-farmland-equipment/_url1.vue?vue&type=template&id=aca1c6f2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "max-w-screen-xl mx-auto"
  }, [_vm._ssrNode("<div class=\"py-6\" data-v-aca1c6f2>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-3 max-w-screen-lg mx-3 md:mx-auto px-3 pb-6 rounded-xl shadow shadow-gray-50\" data-v-aca1c6f2>", "</div>", [_vm._ssrNode("<h1 class=\"text-center font-bold text-3xl text-green-600 mt-2\" data-v-aca1c6f2>AGRI-MACHINE TOOLS AND EQUIPMENT</h1> "), _vm._ssrNode("<div data-v-aca1c6f2>", "</div>", [_vm._ssrNode("<p class=\"text-center text-gray-600 text-lg leading-relaxed\" data-v-aca1c6f2>Select specific machine / equipment from the following list</p> "), _vm._ssrNode("<div class=\"flex flex-col md:flex-row my-5 gap-3\" data-v-aca1c6f2>", "</div>", _vm._l(_vm.records, function (equipment) {
    return _vm._ssrNode("<div class=\"flex flex-1 max-w-xs justify-center shadow rounded-lg p-3\" data-v-aca1c6f2>", "</div>", [_vm._ssrNode("<div class=\"flex w-full flex-col gap-2\" data-v-aca1c6f2>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", `${_vm.imageUrl}/uploads/projects/${equipment.imageLink}`) + " alt=\"Rent - Equipment\" class=\"w-full h-80 rounded-md object-cover\" data-v-aca1c6f2> <div class=\"flex flex-col gap-2\" data-v-aca1c6f2><h1 class=\"font-semibold text-2xl text-center text-green-600\" data-v-aca1c6f2>Details</h1> <button class=\"text-blue-500 underline font-bold\" data-v-aca1c6f2>" + _vm._ssrEscape(_vm._s(_vm.showDetails[equipment._id] ? "Hide" : "Show")) + "</button></div> "), _vm.showDetails[equipment._id] ? _vm._ssrNode("<div class=\"flex flex-col gap-3\" data-v-aca1c6f2>", "</div>", [_vm._ssrNode("<div data-v-aca1c6f2><p class=\"font-normal text-xl text-green-600 mt-2\" data-v-aca1c6f2>Machine Specifics</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Type:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.machineType) + "\n                  ") + "</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Model:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.model) + "\n                  ") + "</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Capacity:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.capacity) + "\n                  ") + "</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Activity / Use:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.mainUse) + "\n                  ") + "</p></div> <div data-v-aca1c6f2><p class=\"font-normal text-xl text-green-600 mt-2\" data-v-aca1c6f2>Current Location</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Country:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.countryAt) + "\n                  ") + "</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Region:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.region) + "\n                  ") + "</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Ward:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.ward) + "\n                  ") + "</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Village:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.village) + "\n                  ") + "</p></div> <div data-v-aca1c6f2><p class=\"font-normal text-xl text-green-600 mt-2\" data-v-aca1c6f2>Engagement</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Engagement:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.preferredContract) + "\n                  ") + "</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Pricing:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.pricing) + "\n                  ") + "</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Price:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.averagePrice) + "\n                  ") + "</p> <p data-v-aca1c6f2><span class=\"font-semibold\" data-v-aca1c6f2>Availability:</span>" + _vm._ssrEscape("\n                    " + _vm._s(equipment.timeLine) + "\n                  ") + "</p></div> "), _c('nuxt-link', {
      staticClass: "text-blue-500 font-bold",
      attrs: {
        "to": `/equipment/apply/${equipment.serialNo}`
      }
    }, [_vm._v("APPLY TO RENT")])], 2) : _vm._e()], 2)]);
  }), 0)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/equipment/rent-farmland-equipment/_url1.vue?vue&type=template&id=aca1c6f2&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/rent-farmland-equipment/_url1.vue?vue&type=script&lang=js


/* harmony default export */ var _url1vue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl"])
  },
  data() {
    return {
      showDetails: []
    };
  },
  async asyncData({
    params
  }) {
    try {
      const url = `/api/list-equipment`;
      const {
        data
      } = await common["b" /* http */].get(url);
      const category = params.url;
      const filteredRecords = data.records.filter(equipment => equipment.mainUse.toLowerCase().replace(/\s+/g, '-') == category);
      return {
        records: filteredRecords
      };
    } catch (err) {
      return {
        records: []
      };
    }
  },
  methods: {
    toggleDetails(eqId) {
      this.$set(this.showDetails, eqId, !this.showDetails[eqId]);
    }
  }
});
// CONCATENATED MODULE: ./pages/equipment/rent-farmland-equipment/_url1.vue?vue&type=script&lang=js
 /* harmony default export */ var rent_farmland_equipment_url1vue_type_script_lang_js = (_url1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/equipment/rent-farmland-equipment/_url1.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  rent_farmland_equipment_url1vue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "aca1c6f2",
  "5ae02269"
  
)

/* harmony default export */ var _url1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_url1.js.map