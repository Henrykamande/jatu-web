exports.ids = [29];
exports.modules = {

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0e53d156", content, true, context)
};

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3f7f1390_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3f7f1390_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3f7f1390_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3f7f1390_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3f7f1390_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cart_image[data-v-3f7f1390]{height:98px}.total[data-v-3f7f1390]{font-weight:600}.input-number[data-v-3f7f1390]{outline:none;padding:0 8px;text-align:center;vertical-align:top;width:55px}.input-number[data-v-3f7f1390],.input-number-decrement[data-v-3f7f1390],.input-number-increment[data-v-3f7f1390]{border:1px solid #ccc;height:40px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.input-number-decrement[data-v-3f7f1390],.input-number-increment[data-v-3f7f1390]{background:#f1f1f1;color:#444;cursor:pointer;display:inline-block;font-weight:700;line-height:38px;text-align:center;width:30px}.input-number-decrement[data-v-3f7f1390]:active,.input-number-increment[data-v-3f7f1390]:active{background:#ddd}.input-number-decrement[data-v-3f7f1390]{border-radius:4px 0 0 4px;border-right:none}.input-number-increment[data-v-3f7f1390]{border-left:none;border-radius:0 4px 4px 0}.remove[data-v-3f7f1390]{background-color:red;color:#fff;cursor:pointer;display:inline-block;padding:6px 12px;text-align:center;transition:all .5s}.remove[data-v-3f7f1390]:hover{background-color:red;box-shadow:3px 3px 3px #e0e0e0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart/index.vue?vue&type=template&id=3f7f1390&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto md:px-36 px-2 min-h-screen items-center"
  }, [_vm.cart.length <= 0 ? _vm._ssrNode("<div data-v-3f7f1390>", "</div>", [_vm._ssrNode("<div role=\"alert\" class=\"bg-red-100 mt-6 border-t border-b border-blue-500 text-blue-700 px-4 py-3\" data-v-3f7f1390><p class=\"font-bold\" data-v-3f7f1390>Empty Cart!</p> <p class=\"text-sm\" data-v-3f7f1390>Your cart is empty, welcome to shop with us.</p></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('button', {
    staticClass: "bg-black px-2 py-1 text-white rounded mt-2"
  }, [_vm._v("\n        Shop Now\n      ")])])], 2) : _vm._ssrNode("<div class=\"bg-white mt-6 p-3\" data-v-3f7f1390>", "</div>", [_vm._l(_vm.cart, function (product) {
    return _vm._ssrNode("<div class=\"grid md:grid-cols-2 items-center md:text-lg border-b border-gray-200\" data-v-3f7f1390>", "</div>", [_vm._ssrNode("<div class=\"grid grid-cols-12 md:items-center\" data-v-3f7f1390><div class=\"col-span-4\" data-v-3f7f1390><img" + _vm._ssrAttr("src", `https://backend.jubilantafrofarms.com/uploads/products/${product.cover_image}`) + " alt class=\"object-contain h-24\" data-v-3f7f1390></div> <div class=\"col-span-8\" data-v-3f7f1390>" + _vm._ssrEscape(_vm._s(product.name)) + "</div></div> "), _vm._ssrNode("<div class=\"grid md:grid-cols-12\" data-v-3f7f1390>", "</div>", [_vm._ssrNode("<div class=\"md:col-span-8\" data-v-3f7f1390><span class=\"input-number-decrement\" data-v-3f7f1390>–</span> <input type=\"text\" min=\"0\" max=\"10000\"" + _vm._ssrAttr("value", product.quantity) + " class=\"input-number\" data-v-3f7f1390> <span class=\"input-number-increment\" data-v-3f7f1390>+</span> <span data-v-3f7f1390>" + _vm._ssrEscape("  X " + _vm._s(product.unit_price) + " =") + "</span> <span class=\"total\" data-v-3f7f1390>" + _vm._ssrEscape(_vm._s((product.quantity * product.unit_price).toLocaleString())) + "</span></div> "), _vm._ssrNode("<div class=\"md:col-span-4 text-right md:text-left\" data-v-3f7f1390>", "</div>", [_vm._ssrNode("<button data-v-3f7f1390>", "</button>", [_c('font-awesome-icon', {
      staticClass: "h-6 w-6",
      staticStyle: {
        "color": "red"
      },
      attrs: {
        "icon": ['fas', 'times']
      }
    })], 1)])], 2)], 2);
  }), _vm._ssrNode(" <div class=\"mt-2 bg-gray-500 text-white\" data-v-3f7f1390><div class=\"text-right py-2 pr-8 text-lg font-bold border-b-2 border-white\" data-v-3f7f1390>" + _vm._ssrEscape("\n        Total: " + _vm._s(_vm.total.toLocaleString()) + "\n      ") + "</div></div> "), _vm._ssrNode("<div class=\"text-right\" data-v-3f7f1390>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/shop"
    }
  }, [_c('button', {
    staticClass: "bg-black px-2 py-1 text-white rounded"
  }, [_vm._v("\n          Continue Shopping\n        ")])]), _vm._ssrNode(" "), _vm.isAuthenticated ? _c('nuxt-link', {
    attrs: {
      "to": "/checkout"
    }
  }, [_c('button', {
    staticClass: "bg-orange-600 px-2 py-1 text-white rounded"
  }, [_vm._v("\n          Checkout Order\n        ")])]) : _c('nuxt-link', {
    attrs: {
      "to": "/order"
    }
  }, [_c('button', {
    staticClass: "bg-orange-600 px-2 py-1 text-white rounded"
  }, [_vm._v("\n          Checkout Order\n        ")])])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/cart/index.vue?vue&type=template&id=3f7f1390&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cart/index.vue?vue&type=script&lang=js

/* harmony default export */ var cartvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl", "isAuthenticated"]),
    ...Object(external_vuex_["mapGetters"])("product", ["cart"]),
    total() {
      const prices = this.cart.map(item => {
        return item.unit_price * item.quantity;
      });
      if (prices.length >= 1) {
        return prices.reduce((inc, val) => {
          return inc + val;
        });
      }
      return 0;
    }
  },
  methods: {
    decrement(id) {
      const item = this.cart.find(record => {
        return record._id === id;
      });
      const qty = item.quantity > 1 ? item.quantity - 1 : 1;
      this.setQuantity(id, qty);
    },
    increment(id) {
      const item = this.cart.find(record => {
        return record._id === id;
      });
      const qty = item.quantity + 1;
      this.setQuantity(id, qty);
    },
    setQuantity(id, quantity) {
      const data = {
        id,
        quantity
      };
      this.$store.commit("product/cartQuantity", data);
    },
    updateQuantity(evt, id) {
      const quantity = evt.target.value;
      this.setQuantity(id, quantity);
    },
    romoveCart(id) {
      this.$store.commit("product/removeFromCart", id);
    }
  }
});
// CONCATENATED MODULE: ./pages/cart/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_cartvue_type_script_lang_js = (cartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/cart/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(155)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3f7f1390",
  "843dddac"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map