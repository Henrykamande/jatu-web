exports.ids = [30];
exports.modules = {

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout/index.vue?vue&type=template&id=15679f8a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto md:px-48 px-2 lg:min-h-screen"
  }, [_vm._ssrNode("<div class=\"bg-white mt-6 p-3\" data-v-15679f8a>", "</div>", [_vm.cart.length > 0 ? _vm._ssrNode("<div data-v-15679f8a>", "</div>", [_vm._ssrNode("<div role=\"alert\" class=\"bg-blue-100 mt-6 border-t border-b border-blue-500 text-blue-700 px-4 py-3 md:flex justify-between\" data-v-15679f8a>", "</div>", [_vm._ssrNode("<div class=\"text-sm\" data-v-15679f8a>", "</div>", [_vm._ssrNode(_vm._ssrEscape("\n          You have " + _vm._s(_vm.cart.length) + " item(s) in your Cart. You can checkout\n          ")), _c('nuxt-link', {
    staticClass: "ml-6 text-red-500",
    attrs: {
      "to": "/cart"
    }
  }, [_vm._v("Preview Cart")])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-15679f8a>", "</div>", [_c('nuxt-link', {
    staticClass: "md:ml-6 md:mt-0 mt-2 bg-blue-900 text-white py-1 px-2 rounded font-bold",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("\n            Login\n          ")])], 1)], 2)]) : _vm._e(), _vm._ssrNode(" <div class=\"grid md:grid-cols-2 gap-4\" data-v-15679f8a><div data-v-15679f8a><label class=\"block mb-2 font-bold\" data-v-15679f8a>First Name *</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.loggedUser.first_name) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-15679f8a></div> <div data-v-15679f8a><label class=\"block mb-2 font-bold\" data-v-15679f8a>Last Name *</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.loggedUser.last_name) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-15679f8a></div></div> <div class=\"grid md:grid-cols-2 gap-4\" data-v-15679f8a><div data-v-15679f8a><label class=\"block mb-2 font-bold\" data-v-15679f8a>Email</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.loggedUser.email) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-15679f8a></div> <div data-v-15679f8a><label class=\"block mb-2 font-bold\" data-v-15679f8a>Phone Number *</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.loggedUser.phone) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-15679f8a></div></div> <div class=\"grid md:grid-cols-2 gap-4\" data-v-15679f8a><div data-v-15679f8a><label class=\"block mb-2 font-bold\" data-v-15679f8a>Location *</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.loggedUser.location) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-15679f8a></div> <div data-v-15679f8a><label class=\"block mb-2 font-bold\" data-v-15679f8a>House No</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.loggedUser.house) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-15679f8a></div></div> <div class=\"grid grid-cols-2 gap-4 mt-3\" data-v-15679f8a><div class=\"col-span-2\" data-v-15679f8a><label class=\"block mb-2 font-bold\" data-v-15679f8a>Instructions</label> <textarea name=\"details\" class=\"border-2 border-gray-400 focus:border-blue-400 rounded p-2 m-1 w-full\" data-v-15679f8a>" + _vm._ssrEscape(_vm._s(_vm.loggedUser.details)) + "</textarea></div></div> <div class=\"block\" data-v-15679f8a><span class=\"text-gray-700\" data-v-15679f8a>Mode of Payment</span> <div class=\"mt-2\" data-v-15679f8a><div data-v-15679f8a><label class=\"inline-flex items-center\" data-v-15679f8a><input type=\"radio\" name=\"paymentMode\" value=\"Mpesa on Delivery\"" + _vm._ssrAttr("checked", _vm._q(_vm.paymentMode, "Mpesa on Delivery")) + " class=\"form-radio\" data-v-15679f8a> <span class=\"ml-2\" data-v-15679f8a>MPESA on Delivery</span></label></div> <div data-v-15679f8a><label class=\"inline-flex items-center\" data-v-15679f8a><input type=\"radio\" name=\"paymentMode\" value=\"3\"" + _vm._ssrAttr("checked", _vm._q(_vm.paymentMode, "3")) + " class=\"form-radio\" data-v-15679f8a> <span class=\"ml-2\" data-v-15679f8a>Swipe Card on Delivery</span></label></div></div></div> <div class=\"text-right\" data-v-15679f8a><button class=\"bg-red-600 text-white py-1 px-2 rounded font-bold\" data-v-15679f8a>\n        Place Your Order\n      </button></div> <div role=\"alert\" class=\"mt-2\"" + _vm._ssrStyle(null, null, {
    display: _vm.formError ? '' : 'none'
  }) + " data-v-15679f8a><div class=\"bg-red-500 text-white font-bold rounded-t px-4 py-2\" data-v-15679f8a>\n        Please fill all the required fields\n      </div> <div class=\"border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700\" data-v-15679f8a><p data-v-15679f8a>First Name, Last Name, Phone and Location are mandatory</p></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/checkout/index.vue?vue&type=template&id=15679f8a&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout/index.vue?vue&type=script&lang=js


/* harmony default export */ var checkoutvue_type_script_lang_js = ({
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
      loggedUser: {},
      paymentMode: null,
      formError: false
    };
  },
  methods: {
    async order() {
      const size = this.cart.length;
      const name = this.loggedUser.first_name;
      const phone = this.loggedUser.phone;
      const location = this.loggedUser.location;
      const email = this.loggedUser.email;
      const details = this.loggedUser.details;
      const paymentMode = this.paymentMode;
      const total = this.total;
      const cart = [...this.cart];
      const userId = this.loggedUser._id;
      const order = {
        name,
        phone,
        location,
        email,
        details,
        size,
        total,
        userId,
        paymentMode
      };
      order.products = cart.map(record => {
        return record;
      });
      const data = {
        order: JSON.stringify(order)
      };
      if (this.loggedUser.first_name == undefined || this.loggedUser.phone == undefined || this.loggedUser.location == undefined) {
        this.formError = true;
      } else {
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
// CONCATENATED MODULE: ./pages/checkout/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js = (checkoutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/checkout/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "15679f8a",
  "53096460"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map