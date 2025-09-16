exports.ids = [19];
exports.modules = {

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/register.vue?vue&type=template&id=bf79c622&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto md:px-48 px-2 lg:min-h-screen"
  }, [_vm._ssrNode("<h2 class=\"text-center font-bold text-3xl text-green-600\" data-v-bf79c622>Welcome to Jubilant Afro Farms</h2> "), _vm._ssrNode("<div class=\"bg-white mt-6 p-3\" data-v-bf79c622>", "</div>", [_vm._ssrNode("<div class=\"bg-gray-200 p-2\" data-v-bf79c622>Create An Account</div> <div class=\"grid md:grid-cols-2 gap-4\" data-v-bf79c622><div data-v-bf79c622><label class=\"block mb-2 font-bold\" data-v-bf79c622>First Name *</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.dataItem.first_name) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-bf79c622></div> <div data-v-bf79c622><label class=\"block mb-2 font-bold\" data-v-bf79c622>Last Name *</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.dataItem.last_name) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-bf79c622></div></div> <div class=\"grid md:grid-cols-2 gap-4\" data-v-bf79c622><div data-v-bf79c622><label class=\"block mb-2 font-bold\" data-v-bf79c622>Email *</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.dataItem.email) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-bf79c622></div> <div data-v-bf79c622><label class=\"block mb-2 font-bold\" data-v-bf79c622>Phone Number *</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.dataItem.phone) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-bf79c622></div></div> <div class=\"grid md:grid-cols-2 gap-4\" data-v-bf79c622><div data-v-bf79c622><label class=\"block mb-2 font-bold\" data-v-bf79c622>Location *</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.dataItem.location) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-bf79c622></div> <div data-v-bf79c622><label class=\"block mb-2 font-bold\" data-v-bf79c622>House No</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.dataItem.house) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-bf79c622></div></div> <div class=\"grid md:grid-cols-2 gap-4\" data-v-bf79c622><div data-v-bf79c622><label class=\"block mb-2 font-bold\" data-v-bf79c622>Password *</label> <input type=\"password\"" + _vm._ssrAttr("value", _vm.dataItem.password) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-bf79c622></div> <div data-v-bf79c622><label class=\"block mb-2 font-bold\" data-v-bf79c622>Confirm Password *</label> <input type=\"password\"" + _vm._ssrAttr("value", _vm.dataItem.confirm_password) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-bf79c622></div></div> "), _vm._ssrNode("<div data-v-bf79c622>", "</div>", [_vm._ssrNode("<button" + _vm._ssrAttr("loading", _vm.loader) + " class=\"bg-orange-600 text-white py-1 px-2 mt-3 rounded font-bold\" data-v-bf79c622>Register</button> <img" + _vm._ssrAttr("src", __webpack_require__(89)) + " alt class=\"mt-4 ml-4\"" + _vm._ssrStyle({
    "width": "30px",
    "height": "30px"
  }, null, {
    display: _vm.loader ? '' : 'none'
  }) + " data-v-bf79c622> "), _vm._ssrNode("<div class=\"flex py-2\" data-v-bf79c622>", "</div>", [_vm._ssrNode("<span data-v-bf79c622>Already have an account?</span> "), _c('nuxt-link', {
    staticClass: "text-blue ml-2",
    attrs: {
      "to": "/login"
    }
  }, [_c('button', {
    staticClass: "text-green-700"
  }, [_vm._v("Login")])])], 2)], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/register.vue?vue&type=template&id=bf79c622&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/register.vue?vue&type=script&lang=js


const {
  toast
} = __webpack_require__(57);
/* harmony default export */ var registervue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])("product", ["cart"])
  },
  data() {
    return {
      dataItem: {},
      loader: false,
      successMsg: false,
      emailError: false,
      formError: false
    };
  },
  methods: {
    async register() {
      const details = this.dataItem;
      if (this.dataItem.first_name == undefined || this.dataItem.last_name == undefined || this.dataItem.email == undefined || this.dataItem.phone == undefined) {
        toast().danger("Oops!", "Please fill all the required fields!").with({
          shape: "square",
          duration: 3000,
          speed: 1000,
          positionX: "end",
          positionY: "top",
          color: "bg-red-600",
          fontColor: "white",
          fontTone: 200
        }).show();
      } else {
        try {
          const url = `/api/users`;
          const details = this.dataItem;
          const self = this;
          this.loader = true;
          await common["b" /* http */].post(url, details).then(res => {
            console.log(res, "reg res");
            if (res.data.state) {
              const data = res.data;
              self.successMsg = true;
              self.loader = false;
              self.dataItem = {};
              self.$store.commit("setUser", data.user);
              self.$store.commit("setToken", data.token);
              localStorage.setItem("token", data.token);
              localStorage.setItem("user", JSON.stringify(data.user));
              // redirect user

              this.$router.push("/");

              //   if (this.cart.length > 0) {
              //     setTimeout(() => {
              //       this.$router.push("/");
              //     }, 200);
              //     return true;
              //   } else {
              //     setTimeout(() => {
              //       this.$router.push("/");
              //     }, 200);
              //     return true;
              //   }
              //   // end of redirection
            } else {
              self.emailError = true;
              self.loader = false;
            }
          });
        } catch (err) {
          console.log("error occured", err);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/register.vue?vue&type=script&lang=js
 /* harmony default export */ var components_registervue_type_script_lang_js = (registervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/register.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_registervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bf79c622",
  "553c3edd"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loader.3f25900.gif";

/***/ })

};;
//# sourceMappingURL=register.js.map