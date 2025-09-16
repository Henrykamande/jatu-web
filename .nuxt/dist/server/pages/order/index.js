exports.ids = [68];
exports.modules = {

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/index.vue?vue&type=template&id=99ec3220&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto md:px-48 px-2 lg:min-h-screen"
  }, [_vm._ssrNode("<div class=\"bg-white mt-6 p-3\" data-v-99ec3220>", "</div>", [_vm.cart.length > 0 ? _vm._ssrNode("<div data-v-99ec3220>", "</div>", [_vm._ssrNode("<div role=\"alert\" class=\"bg-blue-100 mt-6 border-t border-b border-blue-500 text-blue-700 px-4 py-3\" data-v-99ec3220>", "</div>", [_vm._ssrNode("<div class=\"text-sm\" data-v-99ec3220>", "</div>", [_vm._ssrNode(_vm._ssrEscape("\n          You have " + _vm._s(_vm.cart.length) + " item(s) in your Cart. You can checkout\n          ")), _c('nuxt-link', {
    staticClass: "ml-6 text-red-500",
    attrs: {
      "to": "/cart"
    }
  }, [_vm._v("Preview Cart")])], 2)])]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"text-right mt-2 md:flex mb-3\" data-v-99ec3220>", "</div>", [_c('nuxt-link', {
    staticClass: "bg-red-600 text-white py-1 px-2 rounded font-bold",
    attrs: {
      "to": "/checkout"
    }
  }, [_vm._v("\n        Instant Checkout\n      ")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "ml-6 bg-blue-900 text-white py-1 px-2 rounded font-bold",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("\n        Login / Register\n      ")])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/order/index.vue?vue&type=template&id=99ec3220&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/index.vue?vue&type=script&lang=js


/* harmony default export */ var ordervue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl", "user"]),
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
  data() {
    return {
      dataItem: {},
      loggedUser: {}
    };
  },
  methods: {
    async order() {
      const size = this.cart.length;
      const name = this.user.first_name;
      const phone = this.user.phone;
      const location = this.user.location;
      const email = this.user.email;
      const details = this.user.details;
      const total = this.total;
      const cart = [...this.cart];
      const userId = this.user.id;
      const order = {
        name,
        phone,
        location,
        email,
        details,
        size,
        total,
        userId
      };
      order.products = cart.map(record => {
        return record;
      });
      const data = {
        order: JSON.stringify(order)
      };
      try {
        const url = `/api/order`;
        const self = this;
        //this.loader = true;
        await common["b" /* http */].post(url, data).then(res => {
          console.log(res, "res");
          if (res.data.state) {
            this.$store.commit("product/resetCart");
            this.$router.push("/success");
          }
        });
      } catch (err) {
        console.log("error occured", err);
      }
    }
  },
  created() {
    if (this.user) {
      this.loggedUser = {
        ...this.loggedUser,
        ...this.user
      };
    }
  }
});
// CONCATENATED MODULE: ./pages/order/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_ordervue_type_script_lang_js = (ordervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/order/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ordervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "99ec3220",
  "71cf9338"
  
)

/* harmony default export */ var pages_order = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map