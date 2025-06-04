<template>
  <div class="container mx-auto px-6 sm:px-12 md:px-32 py-12">
    <div class="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-300 max-w-5xl mx-auto">
      <!-- Header -->
      <div class="bg-gradient-to-r from-green-500 to-green-700 text-white py-6 px-6 sm:px-8 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center">
        <div class="text-center sm:text-left">
          <h2 class="text-2xl sm:text-3xl font-bold">Account Details</h2>
          <p class="text-sm opacity-90 mt-1">Manage your personal information effortlessly.</p>
        </div>
      </div>

      <!-- User Info Section -->
      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div class="space-y-4 sm:space-y-6">
          <!-- Editable Fields -->
          <div v-for="field in userFields" :key="field.key">
            <label class="block text-gray-700 font-medium">{{ field.label }}</label>
            <input v-if="isEditing" v-model="editedUser[field.key]" type="text" class="input">
            <p v-else class="info">{{ user[field.key] || "N/A" }}</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col gap-5 sm:items-center border-t sm:border-t-0 sm:border-l border-gray-300 pt-6 sm:pl-8">
          <button v-if="isEditing" @click="confirmSave" class="btn bg-green-500 hover:bg-green-600">
            <font-awesome-icon :icon="['fas', 'save']" class="icon" /> Save Changes
          </button>
          <button v-if="isEditing" @click="cancelEdit" class="btn bg-gray-400 hover:bg-gray-500">
            <font-awesome-icon :icon="['fas', 'times-circle']" class="icon" /> Cancel
          </button>
          <button v-else @click="startEditing" class="btn">
            <font-awesome-icon :icon="['fas', 'edit']" class="icon" /> Edit Profile
          </button>
          <button @click="logout" class="btn bg-red-500 hover:bg-red-600">
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="icon" /> Logout
          </button>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h3 class="text-xl font-semibold text-gray-800">Confirm Changes</h3>
        <p class="text-gray-700 mt-2">Are you sure you want to update your profile details?</p>
        <div class="flex justify-center gap-4 mt-4">
          <button @click="saveProfile" class="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">Confirm</button>
          <button @click="closeConfirmModal" class="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { http } from "@/common/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faSave, faTimesCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEdit, faSave, faTimesCircle, faSignOutAlt);

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      isEditing: false,
      editedUser: {},
      showConfirmModal: false,
      userFields: [
        { key: "first_name", label: "First Name" },
        { key: "last_name", label: "Last Name" },
        { key: "email", label: "Email Address" },
        { key: "phone", label: "Phone Number" },
        { key: "location", label: "Location" },
        { key: "house", label: "House" }
      ]
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    startEditing() {
      this.isEditing = true;
      this.editedUser = { ...this.user };
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
        const response = await http.put(`/api/users/update/${this.user._id}`, this.editedUser);
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
};
</script>



<style scoped>
.container {
  max-width: 1300px;
}

/* Refined input fields */
.input {
  @apply bg-gray-100 px-4 py-3 rounded-md text-gray-800 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500;
}

/* Display-only fields */
.info {
  @apply bg-gray-100 px-4 py-3 rounded-md text-gray-800 border border-gray-300;
}

/* Standard button styling */
.btn {
  @apply w-full sm:w-72 px-8 py-3 text-base sm:text-lg bg-green-500 text-white rounded-md hover:bg-green-600 transition transform hover:scale-105 flex items-center gap-3 justify-center;
}

/* Icon styling */
.icon {
  @apply w-5 h-5;
}
</style>
