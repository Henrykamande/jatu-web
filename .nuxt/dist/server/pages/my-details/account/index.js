exports.ids = [61];
exports.modules = {

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1ab6cbba", content, true, context)
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0398578e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0398578e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0398578e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0398578e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0398578e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-0398578e]{max-width:1300px}.input[data-v-0398578e]{border-radius:.375rem;border-width:1px;width:100%;--tw-border-opacity:1;border-color:#d4d4d4;border-color:rgba(212,212,212,var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:#f5f5f5;background-color:rgba(245,245,245,var(--tw-bg-opacity,1));padding:.75rem 1rem;--tw-text-opacity:1;color:#262626;color:rgba(38,38,38,var(--tw-text-opacity,1))}.input[data-v-0398578e]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-opacity:1;--tw-ring-color:rgba(34,197,94,var(--tw-ring-opacity,1))}.info[data-v-0398578e]{border-radius:.375rem;border-width:1px;--tw-border-opacity:1;background-color:#f5f5f5;background-color:rgba(245,245,245,var(--tw-bg-opacity,1));border-color:#d4d4d4;border-color:rgba(212,212,212,var(--tw-border-opacity,1));color:#262626;color:rgba(38,38,38,var(--tw-text-opacity,1));padding:.75rem 1rem}.btn[data-v-0398578e],.info[data-v-0398578e]{--tw-bg-opacity:1;--tw-text-opacity:1}.btn[data-v-0398578e]{align-items:center;background-color:#22c55e;background-color:rgba(34,197,94,var(--tw-bg-opacity,1));border-radius:.375rem;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity,1));display:flex;font-size:1rem;gap:.75rem;justify-content:center;line-height:1.5rem;padding:.75rem 2rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.btn[data-v-0398578e]:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.05) scaleY(1.05);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:#16a34a;background-color:rgba(22,163,74,var(--tw-bg-opacity,1))}@media (min-width:640px){.btn[data-v-0398578e]{font-size:1.125rem;line-height:1.75rem;width:18rem}}.icon[data-v-0398578e]{height:1.25rem;width:1.25rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-details/account/index.vue?vue&type=template&id=0398578e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto px-6 sm:px-12 md:px-32 py-12"
  }, [_vm._ssrNode("<div class=\"bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-300 max-w-5xl mx-auto\" data-v-0398578e>", "</div>", [_vm._ssrNode("<div class=\"bg-gradient-to-r from-green-500 to-green-700 text-white py-6 px-6 sm:px-8 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center\" data-v-0398578e><div class=\"text-center sm:text-left\" data-v-0398578e><h2 class=\"text-2xl sm:text-3xl font-bold\" data-v-0398578e>Account Details</h2> <p class=\"text-sm opacity-90 mt-1\" data-v-0398578e>Manage your personal information effortlessly.</p></div></div> "), _vm._ssrNode("<div class=\"mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8\" data-v-0398578e>", "</div>", [_vm._ssrNode("<div class=\"space-y-4 sm:space-y-6\" data-v-0398578e>" + _vm._ssrList(_vm.userFields, function (field) {
    return "<div data-v-0398578e><label class=\"block text-gray-700 font-medium\" data-v-0398578e>" + _vm._ssrEscape(_vm._s(field.label)) + "</label> " + (_vm.isEditing ? "<input type=\"text\"" + _vm._ssrAttr("value", _vm.editedUser[field.key]) + " class=\"input\" data-v-0398578e>" : "<p class=\"info\" data-v-0398578e>" + _vm._ssrEscape(_vm._s(_vm.user[field.key] || "N/A")) + "</p>") + "</div>";
  }) + "</div> "), _vm._ssrNode("<div class=\"flex flex-col gap-5 sm:items-center border-t sm:border-t-0 sm:border-l border-gray-300 pt-6 sm:pl-8\" data-v-0398578e>", "</div>", [_vm.isEditing ? _vm._ssrNode("<button class=\"btn bg-green-500 hover:bg-green-600\" data-v-0398578e>", "</button>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": ['fas', 'save']
    }
  }), _vm._ssrNode(" Save Changes\n        ")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.isEditing ? _vm._ssrNode("<button class=\"btn bg-gray-400 hover:bg-gray-500\" data-v-0398578e>", "</button>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": ['fas', 'times-circle']
    }
  }), _vm._ssrNode(" Cancel\n        ")], 2) : _vm._ssrNode("<button class=\"btn\" data-v-0398578e>", "</button>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": ['fas', 'edit']
    }
  }), _vm._ssrNode(" Edit Profile\n        ")], 2), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn bg-red-500 hover:bg-red-600\" data-v-0398578e>", "</button>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": ['fas', 'sign-out-alt']
    }
  }), _vm._ssrNode(" Logout\n        ")], 2)], 2)], 2)], 2), _vm._ssrNode(" " + (_vm.showConfirmModal ? "<div class=\"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center\" data-v-0398578e><div class=\"bg-white p-6 rounded-lg shadow-lg w-96 text-center\" data-v-0398578e><h3 class=\"text-xl font-semibold text-gray-800\" data-v-0398578e>Confirm Changes</h3> <p class=\"text-gray-700 mt-2\" data-v-0398578e>Are you sure you want to update your profile details?</p> <div class=\"flex justify-center gap-4 mt-4\" data-v-0398578e><button class=\"px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition\" data-v-0398578e>Confirm</button> <button class=\"px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition\" data-v-0398578e>Cancel</button></div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/my-details/account/index.vue?vue&type=template&id=0398578e&scoped=true

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(3);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(20);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-details/account/index.vue?vue&type=script&lang=js





fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faEdit"], free_solid_svg_icons_["faSave"], free_solid_svg_icons_["faTimesCircle"], free_solid_svg_icons_["faSignOutAlt"]);
/* harmony default export */ var accountvue_type_script_lang_js = ({
  components: {
    FontAwesomeIcon: vue_fontawesome_["FontAwesomeIcon"]
  },
  data() {
    return {
      isEditing: false,
      editedUser: {},
      showConfirmModal: false,
      userFields: [{
        key: "first_name",
        label: "First Name"
      }, {
        key: "last_name",
        label: "Last Name"
      }, {
        key: "email",
        label: "Email Address"
      }, {
        key: "phone",
        label: "Phone Number"
      }, {
        key: "location",
        label: "Location"
      }, {
        key: "house",
        label: "House"
      }]
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["user"])
  },
  methods: {
    startEditing() {
      this.isEditing = true;
      this.editedUser = {
        ...this.user
      };
    },
    confirmSave() {
      this.showConfirmModal = true;
    },
    closeConfirmModal() {
      this.showConfirmModal = false;
    },
    async saveProfile() {
      this.showConfirmModal = false;
      try {
        const response = await common["b" /* http */].put(`/api/users/update/${this.user._id}`, this.editedUser);
        this.$store.commit("updateUser", response.data.user);
        this.isEditing = false;
      } catch (error) {
        alert("Error updating profile. Please try again.");
      }
    },
    cancelEdit() {
      this.isEditing = false;
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    }
  }
});
// CONCATENATED MODULE: ./pages/my-details/account/index.vue?vue&type=script&lang=js
 /* harmony default export */ var my_details_accountvue_type_script_lang_js = (accountvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/my-details/account/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  my_details_accountvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0398578e",
  "31e35178"
  
)

/* harmony default export */ var account = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map