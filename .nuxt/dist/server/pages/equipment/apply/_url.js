exports.ids = [36];
exports.modules = {

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/apply/_url.vue?vue&type=template&id=712e9216&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "max-w-screen-xl mx-auto"
  }, [_vm._ssrNode("<div class=\"py-6\" data-v-712e9216>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-3 max-w-screen-lg mx-3 md:mx-auto px-3 pb-8 rounded-xl shadow shadow-gray-50\" data-v-712e9216>", "</div>", [_vm._ssrNode("<div data-v-712e9216><h1 class=\"text-center font-bold text-3xl text-orange-500 mt-2\" data-v-712e9216>RENT EQUIPMENT</h1> <p class=\"text-center text-gray-600 text-lg leading-relaxed\" data-v-712e9216>To rent the selected machine, please fill the following details</p></div> "), _vm._ssrNode("<div class=\"flex flex-col gap-3\" data-v-712e9216>", "</div>", [_vm._ssrNode("<h1 class=\"font-bold text-xl text-orange-500\" data-v-712e9216>Farm location</h1> <div class=\"flex flex-col md:flex-row justify-between gap-3\" data-v-712e9216><div class=\"flex flex-1 flex-col\" data-v-712e9216><label class=\"mb-2 font-bold text-gray-700\" data-v-712e9216>Country *</label> <input type=\"text\" placeholder=\"Country\"" + _vm._ssrAttr("value", _vm.eqApplications.countryAt) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-712e9216></div> <div class=\"flex flex-1 flex-col\" data-v-712e9216><label class=\"mb-2 font-bold text-gray-700\" data-v-712e9216>Region / County</label> <input type=\"text\" placeholder=\"Region / County\"" + _vm._ssrAttr("value", _vm.eqApplications.region) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-712e9216></div> <div class=\"flex flex-1 flex-col\" data-v-712e9216><label class=\"mb-2 font-bold text-gray-700\" data-v-712e9216>District</label> <input type=\"email\" placeholder=\"District\"" + _vm._ssrAttr("value", _vm.eqApplications.district) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-712e9216></div></div> <div class=\"flex flex-col md:flex-row justify-between gap-3 pb-10\" data-v-712e9216><div class=\"flex flex-1 flex-col\" data-v-712e9216><label class=\"mb-2 font-bold text-gray-700\" data-v-712e9216>Ward</label> <input type=\"text\" placeholder=\"Ward\"" + _vm._ssrAttr("value", _vm.eqApplications.ward) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-712e9216></div> <div class=\"flex flex-1 flex-col\" data-v-712e9216><label class=\"mb-2 font-bold text-gray-700\" data-v-712e9216>Village</label> <input type=\"text\" placeholder=\"Village\"" + _vm._ssrAttr("value", _vm.eqApplications.village) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-712e9216></div> <div class=\"flex flex-1 flex-col\" data-v-712e9216><label class=\"mb-2 font-bold text-gray-700\" data-v-712e9216>Farm code / name</label> <input type=\"text\" placeholder=\"Village\"" + _vm._ssrAttr("value", _vm.eqApplications.farmCode) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-712e9216></div></div> <h1 class=\"font-bold text-xl mb-0 text-orange-500\" data-v-712e9216>Additional details</h1> "), _vm._ssrNode("<div class=\"flex flex-col md:flex-row justify-between gap-3 pb-8\" data-v-712e9216>", "</div>", [_vm._ssrNode("<div class=\"flex flex-1 flex-col\" data-v-712e9216><label class=\"mb-2 font-bold text-gray-700\" data-v-712e9216>Farm size</label> <input type=\"number\" min=\"1\" placeholder=\"Farm size\"" + _vm._ssrAttr("value", _vm.eqApplications.farmSize) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-712e9216></div> <div class=\"flex flex-1 flex-col\" data-v-712e9216><label class=\"mb-2 font-bold text-gray-700\" data-v-712e9216>Project type</label> <input type=\"text\" placeholder=\"Project type\"" + _vm._ssrAttr("value", _vm.eqApplications.projectType) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-712e9216></div> "), _vm._ssrNode("<div class=\"flex flex-1 flex-col\" data-v-712e9216>", "</div>", [_vm._ssrNode("<label class=\"mb-2 font-bold text-gray-700\" data-v-712e9216>Farming schedule</label> "), _vm._ssrNode("<div class=\"relative w-full shadow border py-3 px-4 rounded-md focus-within:border-gray-500\" data-v-712e9216>", "</div>", [_c('client-only', [_c('date-picker', {
    staticClass: "h-full border-0 outline-none w-full",
    attrs: {
      "type": "date",
      "format": "dd-MM-yyyy",
      "placeholder": "Select month range"
    },
    model: {
      value: _vm.eqApplications.farmingSchedule,
      callback: function ($$v) {
        _vm.$set(_vm.eqApplications, "farmingSchedule", $$v);
      },
      expression: "eqApplications.farmingSchedule"
    }
  })], 1)], 1)], 2)], 2), _vm._ssrNode(" <div class=\"flex flex-col md:flex-row justify-between gap-3\" data-v-712e9216></div> <div class=\"mt-6\"" + _vm._ssrStyle(null, null, {
    display: _vm.formError ? '' : 'none'
  }) + " data-v-712e9216><div class=\"bg-red-500 text-white font-bold rounded-t-md px-4 py-2\" data-v-712e9216>Please fill all the required fields</div> <div class=\"border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700 rounded-b-md\" data-v-712e9216><p data-v-712e9216>All fields marked * are mandatory.</p></div></div> <div role=\"alert\" class=\"bg-blue-100 mt-6 border border-blue-500 text-blue-700 px-4 py-3 rounded-md\"" + _vm._ssrStyle(null, null, {
    display: _vm.successMsg ? '' : 'none'
  }) + " data-v-712e9216><p class=\"font-bold\" data-v-712e9216>Message sent</p> <p class=\"text-sm\" data-v-712e9216>Thank you for your offer, we shall get back to you soon.</p></div> <div class=\"flex items-center flex-col-reverse\" data-v-712e9216><button type=\"button\" class=\"mt-2 py-2 px-5 mr-3 bg-orange-500 hover:bg-orange-600 rounded-3xl font-bold text-white focus:outline-none\" data-v-712e9216>Submit</button></div>")], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/equipment/apply/_url.vue?vue&type=template&id=712e9216&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/apply/_url.vue?vue&type=script&lang=js

/* harmony default export */ var _urlvue_type_script_lang_js = ({
  data() {
    return {
      eqApplications: {},
      loader: false,
      successMsg: false,
      formError: false
    };
  },
  computed: {
    isAuthenticated() {
      return  false ? undefined : false;
    },
    currentUser() {
      if (false) {}
      return null;
    },
    selectedEquipment() {
      return this.$store.getters['equipment/selectedEquipment'];
    }
  },
  methods: {
    async sendApplicationDetails() {
      const details = this.eqApplications;
      if (this.eqApplications.countryAt == undefined) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/equipment-applications`;
          const details = this.eqApplications;
          details.user = this.currentUser;
          details.equipmentToRent = this.selectedEquipment;
          const self = this;
          this.loader = true;
          await common["b" /* http */].post(url, details).then(res => {
            if (res.data.state) {
              self.successMsg = true;
              self.loader = false;
              self.eqApplications = {};
            } else {
              self.loader = false;
            }
          });
        } catch (err) {
          console.log("Error occured", err);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/equipment/apply/_url.vue?vue&type=script&lang=js
 /* harmony default export */ var apply_urlvue_type_script_lang_js = (_urlvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/equipment/apply/_url.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  apply_urlvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "712e9216",
  "600ab180"
  
)

/* harmony default export */ var _url = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_url.js.map