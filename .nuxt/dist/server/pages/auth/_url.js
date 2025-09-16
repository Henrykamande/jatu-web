exports.ids = [23];
exports.modules = {

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/_url.vue?vue&type=template&id=1f35dfda&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "px-4 lg:min-h-screen mb-6"
  }, [_vm._ssrNode("<h2 class=\"text-center mt-5 font-bold text-3xl text-green-600\" data-v-1f35dfda>Welcome to Jubilant Afro Farms</h2> "), _vm._ssrNode("<div class=\"bg-white mt-8 p-8 md:block sm:hidden w-3/5 hidden border border-green-300 mx-auto rounded-lg shadow-xl\" data-v-1f35dfda>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-8 py-12\" data-v-1f35dfda>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col md:flex-row gap-5 items-center\" data-v-1f35dfda><label class=\"font-semibold md:w-28 text-green-600\" data-v-1f35dfda>Email:</label> <input type=\"email\" placeholder=\"example@gmail.com\"" + _vm._ssrAttr("value", _vm.dataItem.email) + " class=\"border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600\" data-v-1f35dfda></div> <div class=\"flex flex-col md:flex-row gap-5 items-center\" data-v-1f35dfda><label class=\"font-semibold md:w-28 text-green-600\" data-v-1f35dfda>Password:</label> <input type=\"password\" placeholder=\"Your password\"" + _vm._ssrAttr("value", _vm.dataItem.password) + " class=\"border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600\" data-v-1f35dfda></div> "), _vm._ssrNode("<div class=\"flex flex-col w-full justify-center items-center gap-5 mt-6\" data-v-1f35dfda>", "</div>", [_vm._ssrNode("<button class=\"bg-orange-500 w-28 text-white py-2 px-4 rounded-md font-bold shadow-md hover:bg-orange-600 transition\" data-v-1f35dfda>\n          Login\n        </button> <p class=\"font-semibold text-center text-orange-500\" data-v-1f35dfda>OR</p> "), _c('nuxt-link', {
    staticClass: "text-orange-500 text-lg py-2 px-4 border border-green-400 rounded-md font-bold shadow-md hover:bg-orange-100 transition",
    attrs: {
      "to": `/register/${_vm.dynamicUrl}`
    }
  }, [_vm._v("\n          Create an Account\n        ")])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bg-white mt-8 p-6 md:hidden sm:block border border-green-300 rounded-lg shadow-lg\" data-v-1f35dfda>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-6 py-10\" data-v-1f35dfda>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-4\" data-v-1f35dfda><label class=\"font-semibold text-green-600\" data-v-1f35dfda>Email:</label> <input type=\"email\" placeholder=\"example@gmail.com\"" + _vm._ssrAttr("value", _vm.dataItem.email) + " class=\"border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600\" data-v-1f35dfda></div> <div class=\"flex flex-col gap-4\" data-v-1f35dfda><label class=\"font-semibold text-green-600\" data-v-1f35dfda>Password:</label> <input type=\"password\" placeholder=\"Your password\"" + _vm._ssrAttr("value", _vm.dataItem.password) + " class=\"border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600\" data-v-1f35dfda></div> "), _vm._ssrNode("<div class=\"flex flex-col w-full justify-center items-center gap-5 mt-6\" data-v-1f35dfda>", "</div>", [_vm._ssrNode("<button class=\"bg-orange-500 w-28 text-white py-2 px-4 rounded-md font-bold shadow-md hover:bg-orange-600 transition\" data-v-1f35dfda>\n          Login\n        </button> <p class=\"font-semibold text-center text-orange-500\" data-v-1f35dfda>OR</p> "), _c('nuxt-link', {
    staticClass: "text-orange-500 text-lg py-2 px-4 border border-green-400 rounded-md font-bold shadow-md hover:bg-orange-100 transition",
    attrs: {
      "to": `/register/${_vm.dynamicUrl}`
    }
  }, [_vm._v("\n          Create an Account\n        ")])], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/auth/_url.vue?vue&type=template&id=1f35dfda&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/_url.vue?vue&type=script&lang=js


const {
  toast
} = __webpack_require__(57);
/* harmony default export */ var _urlvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])("product", ["cart"], "getUser"),
    dynamicUrl() {
      return this.$route.params.url;
    }
  },
  data() {
    return {
      dataItem: {}
    };
  },
  methods: {
    async login() {
      const details = this.dataItem;
      const currentPath = this.$route.params.url;
      if (this.dataItem.email == undefined || this.dataItem.password == undefined) {
        toast().danger("⚠️ Attention!", "All required fields must be completed.").with({
          shape: "rounded",
          duration: 4000,
          speed: 700,
          positionX: "center",
          positionY: "top",
          color: "bg-red-700",
          fontColor: "white",
          fontTone: 100,
          shadow: true,
          opacity: 90,
          icon: "warning"
        }).show();
      } else {
        try {
          const url = `/api/users/login`;
          const details = this.dataItem;
          const self = this;
          this.loader = true;
          await common["b" /* http */].post(url, details).then(res => {
            if (res.data.state) {
              const data = res.data;
              self.dataItem = {};
              self.$store.commit("setUser", data.user);
              self.$store.commit("setToken", data.token);
              localStorage.setItem("token", data.token);
              localStorage.setItem("user", JSON.stringify(data.user));
              // check cart and redirect

              toast().success("🎉 Welcome back!", "Jubilant Afro Farms").with({
                shape: "rounded",
                duration: 4000,
                speed: 800,
                positionX: "center",
                positionY: "top",
                color: "bg-green-600",
                fontColor: "white",
                fontTone: 100,
                shadow: true,
                opacity: 85,
                icon: "check-circle"
              }).show();
              this.$router.push(`/equipment/${currentPath}`);

              // if (this.cart.length > 0) {
              //   setTimeout(() => {
              //     this.$router.push(`/${currentPath}`);
              //   }, 200);
              //   return true;
              // } else {
              //   setTimeout(() => {
              //     this.$router.push(`/${currentPath}`);
              //   }, 200);
              //   return true;
              // }

              // end
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
// CONCATENATED MODULE: ./pages/auth/_url.vue?vue&type=script&lang=js
 /* harmony default export */ var auth_urlvue_type_script_lang_js = (_urlvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/auth/_url.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_urlvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f35dfda",
  "d89bf7f8"
  
)

/* harmony default export */ var _url = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_url.js.map