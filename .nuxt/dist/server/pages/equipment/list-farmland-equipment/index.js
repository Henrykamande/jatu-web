exports.ids = [38];
exports.modules = {

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/list-farmland-equipment/index.vue?vue&type=template&id=5e6cc8d7&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "max-w-screen-xl mx-auto"
  }, [_vm._ssrNode("<div class=\"py-6\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-3 max-w-screen-lg mx-3 md:mx-auto px-3 pb-8 rounded-xl shadow shadow-gray-50\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<div data-v-5e6cc8d7><h1 class=\"text-center font-bold text-3xl text-orange-500 mt-2\" data-v-5e6cc8d7>LIST YOUR EQUIPMENT</h1> <p class=\"text-center text-gray-600 text-lg leading-relaxed\" data-v-5e6cc8d7>Please fill in the following details to register\n          your equipment and tools to Jubilant Afro Farms system for renting and partnership program</p></div> <h1 class=\"font-bold text-xl text-orange-500 mt-2\" data-v-5e6cc8d7>Agri-equipment registration</h1> "), _vm._ssrNode("<div class=\"flex flex-col gap-3\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col md:flex-row justify-between gap-3\" data-v-5e6cc8d7><div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Machine Type *</label> <input type=\"text\" placeholder=\"Enter machine type\"" + _vm._ssrAttr("value", _vm.dataItem.machineType) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div> <div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Machine make / manufacture *</label> <input type=\"text\" placeholder=\"Machine make / manufacture\"" + _vm._ssrAttr("value", _vm.dataItem.make) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div> <div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Machine Model *</label> <input type=\"text\" placeholder=\"Machine model\"" + _vm._ssrAttr("value", _vm.dataItem.model) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div></div> "), _vm._ssrNode("<div class=\"flex flex-col md:flex-row justify-between gap-3 pb-8\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Machine Capacity *</label> <input type=\"text\" placeholder=\"Machine capacity\"" + _vm._ssrAttr("value", _vm.dataItem.capacity) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div> <div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Machine drive type *</label> <input type=\"text\" placeholder=\"Drive type\"" + _vm._ssrAttr("value", _vm.dataItem.driveType) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div> "), _vm._ssrNode("<div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Main use *</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataItem.mainUse,
      expression: "dataItem.mainUse"
    }],
    class: ['flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500', _vm.dataItem.mainUse === '' ? 'text-gray-400' : 'text-gray-700'],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataItem, "mainUse", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": ""
    }
  }, [_vm._v("Select Main Use")]), _vm._v(" "), _c('option', [_vm._v("Land Preparation")]), _vm._v(" "), _c('option', [_vm._v("Planting")]), _vm._v(" "), _c('option', [_vm._v("Spraying")]), _vm._v(" "), _c('option', [_vm._v("Weeding")]), _vm._v(" "), _c('option', [_vm._v("Harvesting")])])], 2)], 2), _vm._ssrNode(" <h1 class=\"font-bold text-xl text-orange-500\" data-v-5e6cc8d7>Machines current location</h1> <div class=\"flex flex-col md:flex-row justify-between gap-3\" data-v-5e6cc8d7><div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Country</label> <input type=\"text\" placeholder=\"Country\"" + _vm._ssrAttr("value", _vm.dataItem.countryAt) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div> <div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Region / County</label> <input type=\"text\" placeholder=\"Region / County\"" + _vm._ssrAttr("value", _vm.dataItem.region) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div> <div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>District</label> <input type=\"email\" placeholder=\"District\"" + _vm._ssrAttr("value", _vm.dataItem.district) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div></div> <div class=\"flex flex-col md:flex-row justify-between gap-3 pb-10\" data-v-5e6cc8d7><div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Ward</label> <input type=\"text\" placeholder=\"Ward\"" + _vm._ssrAttr("value", _vm.dataItem.ward) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div> <div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Village</label> <input type=\"text\" placeholder=\"Village\"" + _vm._ssrAttr("value", _vm.dataItem.village) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div> <div class=\"md:flex hidden flex-1 flex-col\" data-v-5e6cc8d7></div></div> <h1 class=\"font-bold text-xl mb-0 text-orange-500\" data-v-5e6cc8d7>Contract and pricing</h1> "), _vm._ssrNode("<div class=\"flex flex-col md:flex-row justify-between gap-3 pb-8\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<div class=\"relative flex flex-col flex-1\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Preferred contract</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataItem.preferredContract,
      expression: "dataItem.preferredContract"
    }],
    class: ['flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500', _vm.dataItem.preferredContract === '' ? 'text-gray-400' : 'text-gray-700'],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataItem, "preferredContract", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": ""
    }
  }, [_vm._v("Select preferred contract")]), _vm._v(" "), _c('option', [_vm._v("Partnership")]), _vm._v(" "), _c('option', [_vm._v("Renting")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Pricing</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataItem.pricing,
      expression: "dataItem.pricing"
    }],
    class: ['flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500', _vm.dataItem.pricing === '' ? 'text-gray-400' : 'text-gray-700'],
    attrs: {
      "type": "text"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataItem, "pricing", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": ""
    }
  }, [_vm._v("Select pricing")]), _vm._v(" "), _c('option', [_vm._v("Per Day (8hrs)")]), _vm._v(" "), _c('option', [_vm._v("Per Acre")]), _vm._v(" "), _c('option', [_vm._v("Per Month")]), _vm._v(" "), _c('option', [_vm._v("Per Season")]), _vm._v(" "), _c('option', [_vm._v("Per Year")])])], 2), _vm._ssrNode(" <div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Average price</label> <input type=\"number\" min=\"500\" step=\"500\" placeholder=\"Average price\"" + _vm._ssrAttr("value", _vm.dataItem.averagePrice) + " class=\"flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500\" data-v-5e6cc8d7></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col md:flex-row justify-between gap-3\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col md:flex-row justify-between gap-6\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Timeline</label> "), _c('client-only', {
    staticClass: "flex flex-col md:flex-row gap-4"
  }, [_c('div', {
    staticClass: "flex flex-1 flex-col"
  }, [_c('label', {
    staticClass: "mb-1 text-gray-600 text-sm"
  }, [_vm._v("From:")]), _vm._v(" "), _c('date-picker', {
    staticClass: "w-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition",
    attrs: {
      "type": "month",
      "format": "MM-yyyy",
      "placeholder": "Select start month"
    },
    model: {
      value: _vm.dataItem.timeLine,
      callback: function ($$v) {
        _vm.$set(_vm.dataItem, "timeLine", $$v);
      },
      expression: "dataItem.timeLine"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "flex flex-1 flex-col"
  }, [_c('label', {
    staticClass: "mb-1 text-gray-600 text-sm"
  }, [_vm._v("To:")]), _vm._v(" "), _c('date-picker', {
    staticClass: "w-full rounded-md border border-gray-300 bg-white shadow-sm px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition",
    attrs: {
      "type": "month",
      "format": "MM-yyyy",
      "placeholder": "Select end month"
    },
    model: {
      value: _vm.dataItem.endTime,
      callback: function ($$v) {
        _vm.$set(_vm.dataItem, "endTime", $$v);
      },
      expression: "dataItem.endTime"
    }
  })], 1)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7>", "</div>", [_vm._ssrNode("<label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Machine status (current condition)</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dataItem.condition,
      expression: "dataItem.condition"
    }],
    class: ['flex-1 shadow border py-3 max-h-14 px-4 rounded-md outline-none focus:border-gray-500', _vm.dataItem.condition === '' ? 'text-gray-400' : 'text-gray-700'],
    attrs: {
      "type": "text"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.dataItem, "condition", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": ""
    }
  }, [_vm._v("Select condition")]), _vm._v(" "), _c('option', [_vm._v("Brand new")]), _vm._v(" "), _c('option', [_vm._v("Slightly used")]), _vm._v(" "), _c('option', [_vm._v("Used over a season")]), _vm._v(" "), _c('option', [_vm._v("Need a small service and maintenance")]), _vm._v(" "), _c('option', [_vm._v("Needs heavy service and repair before use")])])], 2), _vm._ssrNode(" <div class=\"flex flex-1 flex-col\" data-v-5e6cc8d7><label class=\"mb-2 font-bold text-gray-700\" data-v-5e6cc8d7>Photos and videos</label> <input accept=\"image/*, video/*\" type=\"file\" class=\"w-full cursor-pointer rounded-md shadow px-4 py-3 text-gray-700 focus:outline-none focus:ring file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600\" data-v-5e6cc8d7></div>")], 2), _vm._ssrNode(" <div class=\"mt-6\"" + _vm._ssrStyle(null, null, {
    display: _vm.formError ? '' : 'none'
  }) + " data-v-5e6cc8d7><div class=\"bg-red-500 text-white font-bold rounded-t-md px-4 py-2\" data-v-5e6cc8d7>Please fill all the required fields\n          </div> <div class=\"border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700 rounded-b-md\" data-v-5e6cc8d7><p data-v-5e6cc8d7>All fields marked * are mandatory.</p></div></div> <div role=\"alert\" class=\"bg-blue-100 mt-6 border border-blue-500 text-blue-700 px-4 py-3 rounded-md\"" + _vm._ssrStyle(null, null, {
    display: _vm.successMsg ? '' : 'none'
  }) + " data-v-5e6cc8d7><p class=\"font-bold\" data-v-5e6cc8d7>Message sent</p> <p class=\"text-sm\" data-v-5e6cc8d7>Thank you for your offer, we shall get back to you soon.</p></div> <div class=\"flex items-center flex-col-reverse\" data-v-5e6cc8d7><button type=\"button\" class=\"mt-2 py-2 px-5 mr-3 bg-orange-500 hover:bg-orange-600 rounded-3xl font-bold text-white focus:outline-none\" data-v-5e6cc8d7>Submit</button></div>")], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/equipment/list-farmland-equipment/index.vue?vue&type=template&id=5e6cc8d7&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/equipment/list-farmland-equipment/index.vue?vue&type=script&lang=js


/* harmony default export */ var list_farmland_equipmentvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["user"]),
    userSerialNo() {
      return this.user ? this.user.serialNo : null;
    }
  },
  data() {
    return {
      dataItem: {
        mainUse: "",
        preferredContract: "",
        pricing: "",
        condition: "",
        userSerialNo: null
      },
      loader: false,
      successMsg: false,
      sendEquipmentRegDetails: false,
      formError: false
    };
  },
  mounted() {
    this.dataItem.userSerialNo = this.userSerialNo;
  },
  methods: {
    generateRandomString() {
      return Math.random().toString(36).substring(7);
    },
    async handleMediaUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      this.dataItem.value = file;
      const fileName = "eq-" + this.generateRandomString();
      const filepath = `${fileName}.webp`;
      this.dataItem.imageLink = filepath;
      this.dataItem.imageUrls = fileName;
      this.dataItem.serialNo = "eq-" + this.generateRandomString();
    },
    async sendEquimentRegDetails() {
      const formData = new FormData();
      const dateObj = new Date(this.dataItem.timeLine);
      const dateString = dateObj.toDateString();
      if (!this.dataItem.machineType) {
        this.formError = true;
      } else {
        this.formError = false;
        formData.append("userSerialNo", this.dataItem.userSerialNo);
        formData.append("serialNo", this.dataItem.serialNo);
        formData.append("machineType", this.dataItem.machineType);
        formData.append("otherImages", this.dataItem.value);
        formData.append("imageLink", this.dataItem.imageLink);
        formData.append("imageUrls", this.dataItem.imageUrls);
        formData.append("make", this.dataItem.make);
        formData.append("model", this.dataItem.model);
        formData.append("capacity", this.dataItem.capacity);
        formData.append("driveType", this.dataItem.driveType);
        formData.append("mainUse", this.dataItem.mainUse);
        formData.append("countryAt", this.dataItem.countryAt);
        formData.append("region", this.dataItem.region);
        formData.append("district", this.dataItem.district);
        formData.append("ward", this.dataItem.ward);
        formData.append("village", this.dataItem.village);
        formData.append("preferredContract", this.dataItem.preferredContract);
        formData.append("pricing", this.dataItem.pricing);
        formData.append("averagePrice", this.dataItem.averagePrice);
        formData.append("condition", this.dataItem.condition);
        formData.append("timeLine", dateString);
        try {
          const url = `/api/list-equipment`;
          this.loader = true;
          await common["b" /* http */].post(url, formData).then(res => {
            if (res.data.state) {
              this.successMsg = true;
              this.loader = false;
              this.dataItem = {};
              document.querySelector('input[type="file"]').value = "";
            } else {
              this.sendEquipmentRegDetails = true;
              this.loader = false;
            }
          });
        } catch (err) {
          console.error("Error occurred:", err);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/equipment/list-farmland-equipment/index.vue?vue&type=script&lang=js
 /* harmony default export */ var equipment_list_farmland_equipmentvue_type_script_lang_js = (list_farmland_equipmentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/equipment/list-farmland-equipment/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  equipment_list_farmland_equipmentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5e6cc8d7",
  "5de07ff9"
  
)

/* harmony default export */ var list_farmland_equipment = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map