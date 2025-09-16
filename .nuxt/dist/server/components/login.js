exports.ids = [14];
exports.modules = {

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/login.vue?vue&type=template&id=0db6c8e2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto md:px-96 px-2 lg:min-h-screen"
  }, [_vm._ssrNode("<h2 class=\"text-center text-wrap font-bold text-3xl text-green-600\" data-v-0db6c8e2>Welcome to Jubilant Afro Farms</h2> "), _vm._ssrNode("<div class=\"bg-white mt-6 px-3 pb-3\" data-v-0db6c8e2>", "</div>", [_vm._ssrNode("<div class=\"bg-gray-200 p-2\" data-v-0db6c8e2>Login</div> <div class=\"grid gap-4\" data-v-0db6c8e2><div data-v-0db6c8e2><label class=\"block mb-2 font-bold\" data-v-0db6c8e2>Email Address</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.dataItem.email) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-0db6c8e2></div> <div data-v-0db6c8e2><label class=\"block mb-2 font-bold\" data-v-0db6c8e2>Password</label> <input type=\"password\"" + _vm._ssrAttr("value", _vm.dataItem.password) + " class=\"border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500 w-full\" data-v-0db6c8e2></div></div> "), _vm._ssrNode("<div data-v-0db6c8e2>", "</div>", [_vm._ssrNode("<button class=\"bg-orange-600 text-white py-1 px-2 mt-3 rounded font-bold\" data-v-0db6c8e2>Login</button> "), _vm._ssrNode("<div class=\"flex py-2\" data-v-0db6c8e2>", "</div>", [_vm._ssrNode("<span data-v-0db6c8e2>Don't have an account?</span> "), _c('nuxt-link', {
    staticClass: "text-blue ml-2",
    attrs: {
      "to": "/register"
    }
  }, [_c('button', {
    staticClass: "text-green-700"
  }, [_vm._v("Register")])])], 2)], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/login.vue?vue&type=template&id=0db6c8e2&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/login.vue?vue&type=script&lang=js


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
          const url = `/api/users/login`;
          const details = this.dataItem;
          const self = this;
          this.loader = true;
          await common["b" /* http */].post(url, details).then(res => {
            console.log(res, "reg res");
            if (res.data.state) {
              const data = res.data;
              self.dataItem = {};
              self.$store.commit("setUser", data.user);
              self.$store.commit("setToken", data.token);
              localStorage.setItem("token", data.token);
              localStorage.setItem("user", JSON.stringify(data.user));
              // check cart and redirect
              // redirect user
              ;
              if (this.cart.length > 0) {
                setTimeout(() => {
                  this.$router.push("/");
                }, 200);
                return true;
              } else {
                setTimeout(() => {
                  this.$router.push("/");
                }, 200);
                return true;
              }
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
// CONCATENATED MODULE: ./components/login.vue?vue&type=script&lang=js
 /* harmony default export */ var components_loginvue_type_script_lang_js = (loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_loginvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0db6c8e2",
  "74d01d1b"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map