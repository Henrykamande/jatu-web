exports.ids = [50];
exports.modules = {

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/global-auth/login/index.vue?vue&type=template&id=0013c0fe&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "px-2 lg:min-h-screen my-6"
  }, [_vm._ssrNode("<h2 class=\"text-center text-wrap font-bold text-3xl text-green-600\" data-v-0013c0fe>Welcome to Jubilant Afro Farms</h2> "), _vm._ssrNode("<div class=\"bg-white p-6 md:block sm:hidden w-3/5 hidden border border-green-300 mx-auto rounded shadow-lg\" data-v-0013c0fe>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-6 py-8\" data-v-0013c0fe>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col md:flex-row gap-4 items-center\" data-v-0013c0fe><label class=\"font-semibold md:w-24 text-green-600\" data-v-0013c0fe>Email:</label> <input type=\"email\" placeholder=\"example@gmail.com\"" + _vm._ssrAttr("value", _vm.dataItem.email) + " class=\"border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600\" data-v-0013c0fe></div> <div class=\"flex flex-col md:flex-row gap-4 items-center\" data-v-0013c0fe><label class=\"font-semibold md:w-24 text-green-600\" data-v-0013c0fe>Password:</label> <input type=\"password\" placeholder=\"Enter your password\"" + _vm._ssrAttr("value", _vm.dataItem.password) + " class=\"border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600\" data-v-0013c0fe></div> "), _vm._ssrNode("<div class=\"flex flex-col w-full justify-center items-center gap-4 mt-6\" data-v-0013c0fe>", "</div>", [_vm._ssrNode("<button class=\"bg-orange-500 w-24 text-white py-2 px-4 rounded-md font-bold shadow-md hover:bg-orange-600 transition\" data-v-0013c0fe>\n          Login\n        </button> <p class=\"font-semibold text-center text-orange-500\" data-v-0013c0fe>OR</p> "), _c('nuxt-link', {
    staticClass: "text-orange-500 text-lg py-2 px-4 border border-green-400 rounded-md font-bold shadow-md hover:bg-orange-100 transition",
    attrs: {
      "to": "/global-auth/register"
    }
  }, [_vm._v("\n          Create an Account\n        ")])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bg-white mt-6 p-6 md:hidden sm:block block border border-green-300 rounded shadow-md\" data-v-0013c0fe>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-6 py-10\" data-v-0013c0fe>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col gap-3\" data-v-0013c0fe><label class=\"font-semibold text-green-600\" data-v-0013c0fe>Email:</label> <input type=\"email\"" + _vm._ssrAttr("value", _vm.dataItem.email) + " class=\"border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600\" data-v-0013c0fe></div> <div class=\"flex flex-col gap-3\" data-v-0013c0fe><label class=\"font-semibold text-green-600\" data-v-0013c0fe>Password:</label> <input type=\"password\"" + _vm._ssrAttr("value", _vm.dataItem.password) + " class=\"border border-green-400 py-2 px-4 rounded-md outline-none focus:border-purple-500 w-full text-green-600\" data-v-0013c0fe></div> "), _vm._ssrNode("<div class=\"flex flex-col w-full justify-center items-center gap-4 mt-6\" data-v-0013c0fe>", "</div>", [_vm._ssrNode("<button class=\"bg-orange-500 w-24 text-white py-2 px-4 rounded-md font-bold shadow-md hover:bg-orange-600 transition\" data-v-0013c0fe>\n          Login\n        </button> <p class=\"font-semibold text-center text-orange-500\" data-v-0013c0fe>OR</p> "), _c('nuxt-link', {
    staticClass: "text-orange-500 text-lg py-2 px-4 border border-green-400 rounded-md font-bold shadow-md hover:bg-orange-100 transition",
    attrs: {
      "to": "/global-auth/register"
    }
  }, [_vm._v("\n          Create an Account\n        ")])], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/global-auth/login/index.vue?vue&type=template&id=0013c0fe&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/global-auth/login/index.vue?vue&type=script&lang=js


const {
  toast
} = __webpack_require__(57);
/* harmony default export */ var loginvue_type_script_lang_js = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])("product", ["cart"])
  },
  data() {
    return {
      dataItem: {}
    };
  },
  methods: {
    async login() {
      const details = this.dataItem;
      if (this.dataItem.email == undefined || this.dataItem.password == undefined) {
        toast().danger("⚠️ Attention!", "Please fill all the required fields").with({
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
            if (!res.data.state) {
              // Show error toast based on the API response message
              toast().danger("⚠️ Attention!", res.data.msg).with({
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
              this.loader = false;
              return;
            }
            if (res.data.state) {
              const data = res.data;
              self.dataItem = {};
              self.$store.commit("setUser", data.user);
              self.$store.commit("setToken", data.token);
              localStorage.setItem("token", data.token);
              localStorage.setItem("user", JSON.stringify(data.user));
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

              // redirect user to the page they were trying to 

              this.$router.push("/");
              // if (this.cart.length > 0) {
              //     setTimeout(() => {
              //         
              //     }, 200);
              //     return true;
              // } else {
              //     setTimeout(() => {
              //         this.$router.push("/");
              //     }, 200);
              //     return true;
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
// CONCATENATED MODULE: ./pages/global-auth/login/index.vue?vue&type=script&lang=js
 /* harmony default export */ var global_auth_loginvue_type_script_lang_js = (loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/global-auth/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_auth_loginvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0013c0fe",
  "956d3f1e"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map