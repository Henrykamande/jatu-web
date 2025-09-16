exports.ids = [20];
exports.modules = {

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("31189850", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp-modal.vue?vue&type=template&id=587d8e92&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "modal"
    }
  }, [_vm.isVisible ? _c('div', {
    staticClass: "m-2 w-2/3"
  }, [_c('div', {
    staticClass: "fixed inset-0 z-50 flex justify-center items-center"
  }, [_c('div', {
    staticClass: "flex flex-col max-w-6xl rounded-lg shadow-lg bg-white"
  }, [_c('div', {
    staticClass: "p-3 border-b border-gray-500"
  }, [_c('div', {
    staticClass: "flex justify-between items-start"
  }, [_c('div', [_c('h3', {
    staticClass: "font-bold text-xl text-green-800"
  }, [_vm._v("\n                Order Via Whatsapp\n              ")])]), _vm._v(" "), _c('button', {
    staticClass: "text-2xl font-semibold h-6 w-6",
    on: {
      "click": _vm.closeModal
    }
  }, [_c('div', {
    staticClass: "text-xl font-semibold h-6 w-6"
  }, [_c('span', {
    staticClass: "text-red-500"
  }, [_vm._v("X")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "p-6"
  }, [_c('div', {
    staticClass: "font-bold"
  }, [_vm._v(_vm._s(_vm.singleProduct.name))]), _vm._v(" "), _c('div', {
    staticClass: "grid md:grid-cols-12"
  }, [_c('div', {
    staticClass: "col-span-4 mr-2"
  }, [_c('img', {
    staticClass: "w-full object-cover h-40",
    attrs: {
      "src": `${_vm.imageUrl}/uploads/products/${_vm.singleProduct.cover_image}`,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-span-8"
  }, [_c('div', {
    staticClass: "mt-3"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.qty,
      expression: "qty"
    }],
    staticClass: "border-2 border-gray-500 py-1 w-full px-3 md:justify-around rounded outline-none focus:border-gray-400",
    attrs: {
      "min": "1",
      "placeholder": "Qty",
      "type": "number"
    },
    domProps: {
      "value": _vm.qty
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.qty = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "mb-3"
  }, [_c('div', {
    staticClass: "font-bold text-red"
  }, [_vm._v("\n                  " + _vm._s(_vm.singleProduct.currentPrice.toLocaleString()) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "float-right font-bold italic"
  }, [_vm._v("\n                  Total: Kshs. " + _vm._s(_vm.totalAmount.toLocaleString()) + "\n                ")])])])]), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.location,
      expression: "location"
    }],
    staticClass: "w-full mt-2 border-2 border-gray-500 py-1 px-3 md:justify-around rounded outline-none focus:border-gray-400",
    attrs: {
      "placeholder": "Delivery Location"
    },
    domProps: {
      "value": _vm.location
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.location = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "float-right"
  }, [_c('button', {
    staticClass: "mt-2 py-1 px-3 bg-green-600 hover:bg-orange-500 rounded font-bold text-white focus:outline-none",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.placeOrder();
      }
    }
  }, [_vm._v("\n              Place Order\n            ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "opacity-25 fixed inset-0 z-40 bg-black"
  })]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/whatsapp-modal.vue?vue&type=template&id=587d8e92&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp-modal.vue?vue&type=script&lang=js

const {
  toast
} = __webpack_require__(57);
/* harmony default export */ var whatsapp_modalvue_type_script_lang_js = ({
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    singleProduct: {
      type: Object,
      default: {}
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl"]),
    ...Object(external_vuex_["mapGetters"])("product", ["cart"]),
    totalAmount() {
      const qty = this.qty;
      const price = this.singleProduct.currentPrice;
      const total = qty * price;
      return total;
    }
  },
  data() {
    return {
      price: {},
      qty: 1
    };
  },
  methods: {
    closeModal() {
      this.$emit("cancel");
    },
    inCart(productId) {
      const added = this.cart.find(item => {
        return item._id === productId;
      }) || null;
      if (added) {
        return true;
      }
      return false;
    },
    placeOrder() {
      if (this.location == null) {
        toast().danger("Oops!", "Please fill in delivery location!").with({
          shape: "square",
          duration: 4000,
          speed: 1000,
          positionX: "end",
          positionY: "bottom",
          color: "bg-red-600",
          fontColor: "white",
          fontTone: 200
        }).show();
      } else {
        const orderText = `I want to order ${this.qty} - ${this.singleProduct.name} @ ${this.singleProduct.currentPrice.toLocaleString()}. Total: ${this.totalAmount}. Delivery Location: ${this.location} `;
        const url = `https://wa.me/+254748193219?text=${orderText}`;
        let win = window.open(url, "_blank");
        win.focus();
      }
    }
  },
  created() {}
});
// CONCATENATED MODULE: ./components/whatsapp-modal.vue?vue&type=script&lang=js
 /* harmony default export */ var components_whatsapp_modalvue_type_script_lang_js = (whatsapp_modalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/whatsapp-modal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_whatsapp_modalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "587d8e92",
  "d600dc28"
  
)

/* harmony default export */ var whatsapp_modal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_modal_vue_vue_type_style_index_0_id_587d8e92_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_modal_vue_vue_type_style_index_0_id_587d8e92_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_modal_vue_vue_type_style_index_0_id_587d8e92_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_modal_vue_vue_type_style_index_0_id_587d8e92_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_whatsapp_modal_vue_vue_type_style_index_0_id_587d8e92_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-enter-active[data-v-587d8e92],.modal-leave-active[data-v-587d8e92]{transition:opacity .5s ease-in}.modal-enter[data-v-587d8e92],.modal-leave-to[data-v-587d8e92]{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=whatsapp-modal.js.map