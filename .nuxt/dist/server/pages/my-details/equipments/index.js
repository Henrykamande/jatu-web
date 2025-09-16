exports.ids = [62];
exports.modules = {

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7a10e3d5", content, true, context)
};

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_307ce04a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_307ce04a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_307ce04a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_307ce04a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_307ce04a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-307ce04a]{max-width:1200px}.input[data-v-307ce04a]{background-color:#f3f4f6;border:1px solid #d1d5db;border-radius:.375rem;color:#1f2937;padding:.5rem 1rem;transition:all .2s ease-in-out;width:100%}.input[data-v-307ce04a]:focus{border-color:#10b981;box-shadow:0 0 0 2px #10b981;outline:none}.btn[data-v-307ce04a]{align-items:center;border:none;border-radius:.375rem;cursor:pointer;display:flex;font-weight:600;justify-content:center;padding:.75rem 1.5rem;transition:all .2s ease-in-out}.btn[data-v-307ce04a]:disabled{cursor:not-allowed;opacity:.6}.btn-primary[data-v-307ce04a]{background-color:#10b981;color:#fff}.btn-primary[data-v-307ce04a]:hover:not(:disabled){background-color:#059669}.btn-secondary[data-v-307ce04a]{background-color:#6b7280;color:#fff}.btn-secondary[data-v-307ce04a]:hover{background-color:#4b5563}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-details/equipments/index.vue?vue&type=template&id=307ce04a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto px-4 md:px-20 py-8"
  }, [_vm._ssrNode("<div class=\"bg-white p-8 rounded-xl shadow-lg border border-gray-200\" data-v-307ce04a>", "</div>", [_vm._ssrNode("<div class=\"bg-gradient-to-r from-green-500 to-green-700 text-white py-6 px-6 rounded-md shadow-lg flex justify-between items-center\" data-v-307ce04a><div data-v-307ce04a><h2 class=\"text-3xl font-bold\" data-v-307ce04a>Listed Equipment</h2> <p class=\"text-sm opacity-90\" data-v-307ce04a>Manage, edit, or remove your registered equipment.</p></div></div> " + (_vm.notification.show ? "<div" + _vm._ssrClass("mt-4 p-4 rounded-md", _vm.notificationClass) + " data-v-307ce04a>" + _vm._ssrEscape("\n      " + _vm._s(_vm.notification.message) + "\n    ") + "</div>" : "<!---->") + " " + (_vm.loader ? "<div class=\"text-green-600 mt-6 text-center\" data-v-307ce04a>Loading your equipment...</div>" : "<!---->") + " " + (_vm.errorMessage ? "<div class=\"text-red-600 mt-6 text-center\" data-v-307ce04a>" + _vm._ssrEscape(_vm._s(_vm.errorMessage)) + "</div>" : "<!---->") + " "), _vm.equipments.length ? _vm._ssrNode("<div class=\"mt-8\" data-v-307ce04a>", "</div>", [_vm._ssrNode("<h3 class=\"text-2xl font-semibold text-gray-800 mb-4\" data-v-307ce04a>Owned Equipment</h3> "), _vm._ssrNode("<div class=\"grid md:grid-cols-2 gap-6\" data-v-307ce04a>", "</div>", _vm._l(_vm.equipments, function (equipment) {
    return _vm._ssrNode("<div class=\"p-6 bg-gray-50 rounded-lg shadow-md border transition-transform transform hover:scale-105\" data-v-307ce04a>", "</div>", [_c('NuxtLink', {
      staticClass: "block",
      attrs: {
        "to": `/equipment/${equipment._id}`
      }
    }, [_c('img', {
      staticClass: "rounded-lg w-full max-w-md object-cover shadow-md cursor-pointer hover:opacity-90 transition-opacity",
      attrs: {
        "src": `${_vm.imageUrl}/uploads/projects/${equipment.imageLink}`,
        "alt": equipment.machineType
      }
    })]), _vm._ssrNode(" <h3 class=\"text-xl font-bold text-gray-900\" data-v-307ce04a>" + _vm._ssrEscape(_vm._s(equipment.machineType) + " - " + _vm._s(equipment.model)) + "</h3> <p class=\"text-sm text-gray-700 mt-2\" data-v-307ce04a><strong data-v-307ce04a>Condition:</strong>" + _vm._ssrEscape(" " + _vm._s(equipment.condition || 'N/A')) + "</p> <p class=\"text-sm text-gray-700 mt-2\" data-v-307ce04a><strong data-v-307ce04a>Pricing:</strong>" + _vm._ssrEscape(" " + _vm._s(equipment.pricing || 'N/A')) + "</p> <p class=\"text-sm text-gray-700 mt-2\" data-v-307ce04a><strong data-v-307ce04a>Main Use:</strong>" + _vm._ssrEscape(" " + _vm._s(equipment.mainUse || 'N/A')) + "</p> "), _vm._ssrNode("<div class=\"flex gap-4 mt-4\" data-v-307ce04a>", "</div>", [_vm._ssrNode("<button class=\"px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition flex items-center gap-2\" data-v-307ce04a>", "</button>", [_c('font-awesome-icon', {
      staticClass: "w-5 h-5",
      attrs: {
        "icon": ['fas', 'pen']
      }
    }), _vm._ssrNode(" <span data-v-307ce04a>Edit</span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition flex items-center gap-2\" data-v-307ce04a>", "</button>", [_c('font-awesome-icon', {
      staticClass: "w-5 h-5",
      attrs: {
        "icon": ['fas', 'trash']
      }
    }), _vm._ssrNode(" <span data-v-307ce04a>Delete</span>")], 2)], 2)], 2);
  }), 0)], 2) : !_vm.loader ? _vm._ssrNode("<div class=\"text-gray-600 mt-6 text-center\" data-v-307ce04a>No equipment listed yet.</div>") : _vm._e()], 2), _vm._ssrNode(" "), _vm.showEditModal ? _vm._ssrNode("<div class=\"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50\" data-v-307ce04a>", "</div>", [_vm._ssrNode("<div class=\"bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-screen overflow-y-auto mx-4\" data-v-307ce04a>", "</div>", [_vm._ssrNode("<h3 class=\"text-2xl font-bold text-gray-800 mb-6\" data-v-307ce04a>Edit Equipment</h3> "), _vm._ssrNode("<form data-v-307ce04a>", "</form>", [_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\" data-v-307ce04a>", "</div>", [_vm._ssrNode("<div class=\"flex flex-col\" data-v-307ce04a><label class=\"mb-2 font-bold text-gray-700\" data-v-307ce04a>Machine Type</label> <input type=\"text\" required=\"required\"" + _vm._ssrAttr("value", _vm.editedEquipment.machineType) + " class=\"input\" data-v-307ce04a></div> <div class=\"flex flex-col\" data-v-307ce04a><label class=\"mb-2 font-bold text-gray-700\" data-v-307ce04a>Model</label> <input type=\"text\" required=\"required\"" + _vm._ssrAttr("value", _vm.editedEquipment.model) + " class=\"input\" data-v-307ce04a></div> "), _vm._ssrNode("<div class=\"flex flex-col\" data-v-307ce04a>", "</div>", [_vm._ssrNode("<label class=\"mb-2 font-bold text-gray-700\" data-v-307ce04a>Machine status (current condition)</label> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editedEquipment.condition,
      expression: "editedEquipment.condition"
    }],
    staticClass: "input",
    attrs: {
      "required": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.editedEquipment, "condition", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": ""
    }
  }, [_vm._v("Select condition")]), _vm._v(" "), _c('option', [_vm._v("Brand new")]), _vm._v(" "), _c('option', [_vm._v("Slightly used")]), _vm._v(" "), _c('option', [_vm._v("Used over a season")]), _vm._v(" "), _c('option', [_vm._v("Need a small service and maintenance")]), _vm._v(" "), _c('option', [_vm._v("Needs heavy service and repair before use")])])], 2), _vm._ssrNode(" <div class=\"flex flex-col\" data-v-307ce04a><label class=\"mb-2 font-bold text-gray-700\" data-v-307ce04a>Pricing</label> <input type=\"text\" required=\"required\"" + _vm._ssrAttr("value", _vm.editedEquipment.pricing) + " class=\"input\" data-v-307ce04a></div> <div class=\"flex flex-col col-span-2\" data-v-307ce04a><label class=\"mb-2 font-bold text-gray-700\" data-v-307ce04a>Main Use</label> <input type=\"text\" required=\"required\"" + _vm._ssrAttr("value", _vm.editedEquipment.mainUse) + " class=\"input\" data-v-307ce04a></div> <div class=\"flex flex-col col-span-2\" data-v-307ce04a><label class=\"mb-2 font-bold text-gray-700\" data-v-307ce04a>Equipment Image</label> <input accept=\"image/*\" type=\"file\" class=\"w-full cursor-pointer rounded-md shadow px-4 py-3 text-gray-700 focus:outline-none focus:ring border border-gray-300\" data-v-307ce04a> " + (_vm.editedEquipment.imageLink ? "<div class=\"mt-4\" data-v-307ce04a><img" + _vm._ssrAttr("src", `${_vm.imageUrl}/uploads/projects/${_vm.editedEquipment.imageLink}`) + _vm._ssrAttr("alt", _vm.editedEquipment.machineType) + " class=\"w-32 h-32 object-cover rounded-md shadow-md\" data-v-307ce04a></div>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" <div class=\"mt-6\"" + _vm._ssrStyle(null, null, {
    display: _vm.formError ? '' : 'none'
  }) + " data-v-307ce04a><div class=\"bg-red-500 text-white font-bold rounded px-4 py-2\" data-v-307ce04a>\n            Please fill all the required fields\n          </div></div> "), _vm._ssrNode("<div class=\"flex gap-4 mt-8\" data-v-307ce04a>", "</div>", [_vm._ssrNode("<button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.isLoading) + " class=\"btn btn-primary\" data-v-307ce04a>", "</button>", [_c('font-awesome-icon', {
    staticClass: "w-4 h-4 mr-2",
    attrs: {
      "icon": ['fas', 'save']
    }
  }), _vm._ssrNode(_vm._ssrEscape("\n            " + _vm._s(_vm.isLoading ? 'Saving...' : 'Save Changes') + "\n          "))], 2), _vm._ssrNode(" "), _vm._ssrNode("<button type=\"button\" class=\"btn btn-secondary\" data-v-307ce04a>", "</button>", [_c('font-awesome-icon', {
    staticClass: "w-4 h-4 mr-2",
    attrs: {
      "icon": ['fas', 'times-circle']
    }
  }), _vm._ssrNode("\n            Cancel\n          ")], 2)], 2)], 2)], 2)]) : _vm._e(), _vm._ssrNode(" " + (_vm.showConfirmModal ? "<div class=\"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50\" data-v-307ce04a><div class=\"bg-white p-6 rounded-lg shadow-lg w-96 text-center\" data-v-307ce04a><h3 class=\"text-xl font-semibold text-gray-800\" data-v-307ce04a>Confirm Changes</h3> <p class=\"text-gray-700 mt-2\" data-v-307ce04a>Are you sure you want to update this equipment?</p> <div class=\"flex gap-4 mt-6 justify-center\" data-v-307ce04a><button" + _vm._ssrAttr("disabled", _vm.isLoading) + " class=\"px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600\" data-v-307ce04a>" + _vm._ssrEscape("\n          " + _vm._s(_vm.isLoading ? 'Updating...' : 'Yes, Update') + "\n        ") + "</button> <button class=\"px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500\" data-v-307ce04a>\n          Cancel\n        </button></div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/my-details/equipments/index.vue?vue&type=template&id=307ce04a&scoped=true

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-details/equipments/index.vue?vue&type=script&lang=js





fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faPen"], free_solid_svg_icons_["faTrash"], free_solid_svg_icons_["faSave"], free_solid_svg_icons_["faTimesCircle"]);
/* harmony default export */ var equipmentsvue_type_script_lang_js = ({
  components: {
    FontAwesomeIcon: vue_fontawesome_["FontAwesomeIcon"]
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(["imageUrl", "user"]),
    userSerialNo() {
      return this.user ? this.user.serialNo : null;
    },
    notificationClass() {
      return {
        'bg-green-100 text-green-800 border border-green-300': this.notification.type === 'success',
        'bg-red-100 text-red-800 border border-red-300': this.notification.type === 'error'
      };
    }
  },
  data() {
    return {
      equipments: [],
      loader: false,
      errorMessage: "",
      showEditModal: false,
      showConfirmModal: false,
      editedEquipment: {},
      originalEquipment: {},
      formError: false,
      isLoading: false,
      notification: {
        show: false,
        message: '',
        type: 'success'
      }
    };
  },
  async mounted() {
    await this.fetchUserEquipments();
  },
  methods: {
    async fetchUserEquipments() {
      if (!this.userSerialNo) {
        this.errorMessage = "No user serial number found.";
        return;
      }
      this.loader = true;
      this.errorMessage = "";
      try {
        const {
          data
        } = await common["b" /* http */].get(`/api/list-equipment/fetched-by-userSerialNo/${this.userSerialNo}`);
        this.equipments = data.record || [];
      } catch (error) {
        console.error("Failed to fetch equipment:", error);
        this.errorMessage = "Failed to fetch equipment.";
      } finally {
        this.loader = false;
      }
    },
    editEquipment(equipment) {
      this.originalEquipment = {
        ...equipment
      };
      this.editedEquipment = {
        ...equipment
      };
      this.showEditModal = true;
      this.formError = false;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.editedEquipment.imageFile = file;
      }
    },
    validateForm() {
      const required = ['machineType', 'model', 'condition', 'pricing', 'mainUse'];
      return required.every(field => this.editedEquipment[field] && this.editedEquipment[field].toString().trim() !== '');
    },
    confirmSave() {
      if (!this.validateForm()) {
        this.formError = true;
        return;
      }
      this.formError = false;
      this.showConfirmModal = true;
    },
    closeConfirmModal() {
      this.showConfirmModal = false;
    },
    cancelEdit() {
      this.showEditModal = false;
      this.showConfirmModal = false;
      this.formError = false;
      this.editedEquipment = {};
    },
    async saveEquipment() {
      this.showConfirmModal = false;
      this.isLoading = true;
      try {
        const formData = new FormData();

        // Add all equipment data to FormData
        Object.keys(this.editedEquipment).forEach(key => {
          if (key !== 'imageFile' && this.editedEquipment[key] !== null && this.editedEquipment[key] !== undefined) {
            formData.append(key, this.editedEquipment[key]);
          }
        });

        // Add image file if selected
        if (this.editedEquipment.imageFile) {
          formData.append('image', this.editedEquipment.imageFile);
        }

        // Use the correct API endpoint for your equipment
        const response = await common["b" /* http */].put(`/api/list-equipment/update/${this.editedEquipment._id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // Update the equipment in the local array
        const updatedEquipment = response.data.equipment || this.editedEquipment;
        this.equipments = this.equipments.map(e => e._id === this.editedEquipment._id ? updatedEquipment : e);

        // Show success notification
        this.showNotification('Equipment updated successfully!', 'success');

        // Close modal
        this.showEditModal = false;
      } catch (error) {
        console.error('Error updating equipment:', error);
        this.showNotification('Error updating equipment. Please try again.', 'error');
      } finally {
        this.isLoading = false;
      }
    },
    confirmDelete(equipment) {
      if (confirm(`Are you sure you want to delete ${equipment.machineType} - ${equipment.model}?`)) {
        this.deleteEquipment(equipment._id);
      }
    },
    async deleteEquipment(equipmentId) {
      try {
        await common["b" /* http */].delete(`/api/list-equipment/delete/${equipmentId}`);
        this.equipments = this.equipments.filter(e => e._id !== equipmentId);
        this.showNotification('Equipment deleted successfully!', 'success');
      } catch (error) {
        console.error('Error deleting equipment:', error);
        this.showNotification('Error deleting equipment. Please try again.', 'error');
      }
    },
    showNotification(message, type = 'success') {
      this.notification = {
        show: true,
        message,
        type
      };

      // Auto-hide after 3 seconds
      setTimeout(() => {
        this.notification.show = false;
      }, 3000);
    }
  }
});
// CONCATENATED MODULE: ./pages/my-details/equipments/index.vue?vue&type=script&lang=js
 /* harmony default export */ var my_details_equipmentsvue_type_script_lang_js = (equipmentsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/my-details/equipments/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(179)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  my_details_equipmentsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "307ce04a",
  "009d1cd6"
  
)

/* harmony default export */ var equipments = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map