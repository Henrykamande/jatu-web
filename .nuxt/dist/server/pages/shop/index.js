exports.ids = [79,17,18,20];
exports.modules = {

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/index.vue?vue&type=template&id=355ee206&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "relative container mx-auto px-2"
  }, [_vm._ssrNode("<div class=\"md:p-4 p-2 text-2xl font-bold border-b border-gray-300 flex justify-center\" data-v-355ee206><div data-v-355ee206>Shop With Us</div></div> "), _vm._ssrNode("<div class=\"md:px-6 min-h-screen\" data-v-355ee206>", "</div>", [_vm._ssrNode("<div class=\"grid md:grid-cols-12\" data-v-355ee206>", "</div>", [_vm._ssrNode("<div class=\"col-span-12\" data-v-355ee206>", "</div>", [_vm._ssrNode("<div class=\"grid md:grid-cols-4 grid-cols-2 gap-2 py-4\" data-v-355ee206>", "</div>", _vm._l(_vm.records, function (product) {
    return _vm._ssrNode("<div class=\"card p-2\" data-v-355ee206>", "</div>", [_c('product', {
      attrs: {
        "product": product
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"bg-white p-3 mb-3\" data-v-355ee206><section data-v-355ee206>" + _vm._s(_vm.meta.footerContent) + "</section></div>")], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/shop/index.vue?vue&type=template&id=355ee206&scoped=true

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/product.vue + 4 modules
var product = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/index.vue?vue&type=script&lang=js



/* harmony default export */ var shopvue_type_script_lang_js = ({
  components: {
    Product: product["default"]
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl"])
  },
  data() {
    return {
      category: {},
      priceFilter: null,
      alcoholFilter: null,
      sizeFilter: null,
      filterCategory: null,
      activeCategory: null,
      isOpen: false
    };
  },
  head() {
    const meta = this.meta || {};
    return {
      title: `${meta.metaTitle}`,
      meta: [{
        hid: "description",
        name: "description",
        content: meta.metaDescription
      }, {
        hid: "og:title",
        name: "og:title",
        content: `${meta.metaTitle}`
      }, {
        hid: "og:description",
        name: "og:description",
        content: meta.metaDescription
      }, {
        hid: "og:type",
        name: "og:type",
        content: "website"
      }]
    };
  },
  async asyncData({
    params,
    error
  }) {
    const url = `/api/products`;
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
// CONCATENATED MODULE: ./pages/shop/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_shopvue_type_script_lang_js = (shopvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/shop/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_shopvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "355ee206",
  "2f19b8fc"
  
)

/* harmony default export */ var shop = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Product: __webpack_require__(82).default})


/***/ }),

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
  "793bbc20"
  
)

/* harmony default export */ var whatsapp_modal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("81de4ffa", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product.vue?vue&type=template&id=1786cf5e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.product ? _c('div', [_c('nuxt-link', {
    attrs: {
      "to": `/product/${_vm.product.url}`
    }
  }, [_c('img', {
    staticClass: "w-full object-fill product_image",
    attrs: {
      "src": `${_vm.imageUrl}/uploads/products/${_vm.product.cover_image}`,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "font-lg"
  }, [_vm._v(_vm._s(_vm.product.name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-bold"
  }, [_vm._v("Ksh. " + _vm._s(_vm.product.currentPrice.toLocaleString()) + " ")]), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "text-sm text-orange-600 line-through"
  }, [_vm._v("Ksh. " + _vm._s(_vm.product.previousPrice.toLocaleString()) + "\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "text-sm"
  }, _vm._l(_vm.product.prices, function (price, index) {
    return _c('div', {
      key: index
    }, [_vm._v("\n        " + _vm._s(price.name) + " @ " + _vm._s(price.price) + "\n      ")]);
  }), 0)]), _vm._ssrNode(" "), _vm.product.outOfStock == true ? _vm._ssrNode("<div class=\"text-red-800 font-bold py-2 flex justify-center\" data-v-1786cf5e>", "</div>", [_vm._ssrNode("\n    Sold Out\n  ")], 2) : _vm._ssrNode("<div class=\"flex justify-between px-4 object-none object-bottom\" data-v-1786cf5e>", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 font-bold cursor-pointer object-none object-bottom\" data-v-1786cf5e><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"{2}\" d=\"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z\" data-v-1786cf5e></path></svg> "), _c('font-awesome-icon', {
    staticClass: "h-6 w-6 cursor-pointer",
    staticStyle: {
      "color": "green"
    },
    attrs: {
      "icon": ['fab', 'whatsapp']
    },
    on: {
      "click": _vm.openWhatsappModal
    }
  }), _vm._ssrNode(" "), !_vm.inFavorite(_vm.product) ? _c('font-awesome-icon', {
    staticClass: "h-6 w-6 cursor-pointer",
    staticStyle: {
      "color": "#e11d48"
    },
    attrs: {
      "icon": ['far', 'heart']
    },
    on: {
      "click": function ($event) {
        return _vm.changeFavStatus(_vm.product);
      }
    }
  }) : _c('font-awesome-icon', {
    staticClass: "h-6 w-6 cursor-pointer",
    staticStyle: {
      "color": "#e11d48"
    },
    attrs: {
      "icon": ['fas', 'heart']
    },
    on: {
      "click": function ($event) {
        return _vm.changeFavStatus(_vm.product);
      }
    }
  })], 2), _vm._ssrNode(" "), _c('modal', {
    attrs: {
      "isVisible": _vm.isVisible,
      "singleProduct": _vm.product
    },
    on: {
      "cancel": _vm.closeDialog
    }
  }), _vm._ssrNode(" "), _c('whatsapp-modal', {
    attrs: {
      "isVisible": _vm.isWtVisible,
      "singleProduct": _vm.product
    },
    on: {
      "cancel": _vm.closeWtDialog
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/product.vue?vue&type=template&id=1786cf5e&scoped=true

// EXTERNAL MODULE: ./components/modal.vue + 4 modules
var modal = __webpack_require__(79);

// EXTERNAL MODULE: ./components/whatsapp-modal.vue + 4 modules
var whatsapp_modal = __webpack_require__(80);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product.vue?vue&type=script&lang=js



const {
  toast
} = __webpack_require__(57);
/* harmony default export */ var productvue_type_script_lang_js = ({
  components: {
    Modal: modal["default"],
    WhatsappModal: whatsapp_modal["default"]
  },
  props: {
    product: {
      type: Object
    }
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl", "favorites"]),
    ...Object(external_vuex_["mapGetters"])("product", ["cart", "wishlist"])
  },
  data() {
    return {
      isVisible: false,
      isWtVisible: false
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
    },
    openWhatsappModal() {
      this.isWtVisible = true;
    },
    closeDialog() {
      this.isVisible = false;
    },
    closeWtDialog() {
      this.isWtVisible = false;
    },
    changeFavStatus(product) {
      if (this.inFavorite(product)) {
        this.$store.commit("removeFavoriteItem", product);
        // toast()
        //   .success("Success!", "Removed from favorites.")
        //   .with({
        //     shape: "square",
        //     duration: 3000,
        //     speed: 1000,
        //     positionX: "end",
        //     positionY: "bottom",
        //     color: "bg-red-500",
        //     fontColor: "black",
        //     fontTone: 200,
        //   })
        //   .show();
      } else {
        this.$store.commit("addFavoriteItem", product);
        // toast()
        //   .success("Success!", "Added to favorites")
        //   .with({
        //     shape: "square",
        //     duration: 3000,
        //     speed: 1000,
        //     positionX: "end",
        //     positionY: "bottom",
        //     color: "bg-green-500",
        //     fontColor: "black",
        //     fontTone: 200,
        //   })
        //   .show();
      }
    },
    inFavorite(item) {
      return this.favorites.indexOf(item) !== -1 ? true : false;
    }
  }
});
// CONCATENATED MODULE: ./components/product.vue?vue&type=script&lang=js
 /* harmony default export */ var components_productvue_type_script_lang_js = (productvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/product.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_productvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1786cf5e",
  "18ea4921"
  
)

/* harmony default export */ var product = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(79).default,WhatsappModal: __webpack_require__(80).default})


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


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1786cf5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1786cf5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1786cf5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1786cf5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_vue_vue_type_style_index_0_id_1786cf5e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media only screen and (max-width:600px){.product_image[data-v-1786cf5e]{height:141px;max-height:159px}}@media only screen and (min-width:600px){.product_image[data-v-1786cf5e]{height:141px;max-height:159px}}@media only screen and (min-width:768px){.product_image[data-v-1786cf5e]{height:208px;max-height:235px}}@media only screen and (min-width:992px){.product_image[data-v-1786cf5e]{height:208px;max-height:235px}}@media only screen and (min-width:1200px){.product_image[data-v-1786cf5e]{height:208px;max-height:265px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map