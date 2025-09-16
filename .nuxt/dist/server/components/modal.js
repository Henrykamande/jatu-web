exports.ids = [17];
exports.modules = {

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("36fe2071", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal.vue?vue&type=template&id=96b9a684&scoped=true
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
    staticClass: "font-bold text-xl"
  }, [_vm._v("Add To Cart")])]), _vm._v(" "), _c('button', {
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
    staticClass: "w-full border-2 border-gray-500 py-1 px-3 md:justify-around rounded outline-none focus:border-gray-400",
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
  }, [_vm._v("\n                  Total: Kshs. " + _vm._s(_vm.totalAmount.toLocaleString()) + "\n                ")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "mt-2 py-1 px-3 mr-3 bg-orange-600 hover:bg-orange-500 rounded font-bold text-white focus:outline-none",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.addToCart();
      }
    }
  }, [_vm._v("\n                  Add To Cart\n                ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "p-6 flex justify-end items-center"
  }, [_c('button', {
    staticClass: "btn-outine",
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("Cancel")])])])]), _vm._v(" "), _c('div', {
    staticClass: "opacity-25 fixed inset-0 z-40 bg-black"
  })]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal.vue?vue&type=template&id=96b9a684&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal.vue?vue&type=script&lang=js

const {
  toast
} = __webpack_require__(57);
/* harmony default export */ var modalvue_type_script_lang_js = ({
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
      let price = this.singleProduct.currentPrice;
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
    addToCart() {
      const product = this.singleProduct;
      if (this.inCart(product._id)) {
        toast().danger("Oops!", "Already exists!").with({
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
        let price = this.singleProduct.currentPrice;
        let data = {
          _id: product._id,
          name: product.name,
          quantity: this.qty,
          unit_price: price,
          cover_image: product.cover_image
        };
        this.$store.commit("product/addToCart", data);
        // toast()
        //   .success("Success!", "Added to cart.")
        //   .with({
        //     shape: "square",
        //     duration: 4000,
        //     speed: 1000,
        //     positionX: "end",
        //     positionY: "bottom",
        //     color: "bg-green-500",
        //     fontColor: "black",
        //     fontTone: 200,
        //   })
        //   .show();

        this.$emit("cancel");
      }
    }
  },
  created() {
    this.price = this.singleProduct.prices[0];
  }
});
// CONCATENATED MODULE: ./components/modal.vue?vue&type=script&lang=js
 /* harmony default export */ var components_modalvue_type_script_lang_js = (modalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/modal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_modalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "96b9a684",
  "5c9ee65f"
  
)

/* harmony default export */ var modal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_96b9a684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_96b9a684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_96b9a684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_96b9a684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_96b9a684_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-enter-active[data-v-96b9a684],.modal-leave-active[data-v-96b9a684]{transition:opacity .5s ease-in}.modal-enter[data-v-96b9a684],.modal-leave-to[data-v-96b9a684]{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=modal.js.map