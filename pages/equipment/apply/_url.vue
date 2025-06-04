<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="py-6">
      <div
        class="flex flex-col gap-3 max-w-screen-lg mx-3 md:mx-auto px-3 pb-8 rounded-xl shadow shadow-gray-50"
      >
        <div class>
          <h1 class="text-center font-bold text-3xl text-orange-500 mt-2">RENT EQUIPMENT</h1>
          <p
            class="text-center text-gray-600 text-lg leading-relaxed"
          >To rent the selected machine, please fill the following details</p>
        </div>
        <!-- Start of the input fields -->
        <div class="flex flex-col gap-3">
          <!-- Input fields -->
          <h1 class="font-bold text-xl text-orange-500">Farm location</h1>
          <div class="flex flex-col md:flex-row justify-between gap-3">
            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Country *</label>
              <input
                v-model="eqApplications.countryAt"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Country"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Region / County</label>
              <input
                v-model="eqApplications.region"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Region / County"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">District</label>
              <input
                v-model="eqApplications.district"
                type="email"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="District"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between gap-3 pb-10">
            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Ward</label>
              <input
                v-model="eqApplications.ward"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Ward"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Village</label>
              <input
                v-model="eqApplications.village"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Village"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Farm code / name</label>
              <input
                v-model="eqApplications.farmCode"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Village"
              />
            </div>
          </div>

          <!-- End -->
          <h1 class="font-bold text-xl mb-0 text-orange-500">Additional details</h1>

          <div class="flex flex-col md:flex-row justify-between gap-3 pb-8">
            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Farm size</label>
              <input
                v-model="eqApplications.farmSize"
                type="number"
                min="1"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Farm size"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Project type</label>
              <input
                v-model="eqApplications.projectType"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Project type"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Farming schedule</label>
              <div
                class="relative w-full shadow border py-3 px-4 rounded-md focus-within:border-gray-500"
              >
                <client-only>
                  <date-picker
                    v-model="eqApplications.farmingSchedule"
                    type="date"
                    format="dd-MM-yyyy"
                    placeholder="Select month range"
                    class="h-full border-0 outline-none w-full"
                  />
                </client-only>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between gap-3"></div>

          <!-- Form error -->
          <div v-show="formError" class="mt-6">
            <div
              class="bg-red-500 text-white font-bold rounded-t-md px-4 py-2"
            >Please fill all the required fields</div>
            <div
              class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700 rounded-b-md"
            >
              <p>All fields marked * are mandatory.</p>
            </div>
          </div>

          <!-- Success messages -->
          <div
            v-show="successMsg"
            class="bg-blue-100 mt-6 border border-blue-500 text-blue-700 px-4 py-3 rounded-md"
            role="alert"
          >
            <p class="font-bold">Message sent</p>
            <p class="text-sm">Thank you for your offer, we shall get back to you soon.</p>
          </div>

          <!-- Error Messages -->
          <!-- <div v-show="formError" role="alert" class="mt-6">
              <div
                class="bg-red-500 text-white font-bold rounded-t-md px-4 py-2"
              >Something went Wrong!</div>
              <div
                class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700 rounded-b-md"
              >
                <p>Please check your internet connection and try again.</p>
              </div>
          </div>-->

          <!-- Submit button and loader -->
          <div class="flex items-center flex-col-reverse">
            <button
              @click="sendApplicationDetails"
              type="button"
              class="mt-2 py-2 px-5 mr-3 bg-orange-500 hover:bg-orange-600 rounded-3xl font-bold text-white focus:outline-none"
            >Submit</button>
            <!-- <img
              
              src="~assets/images/loader.gif"
              alt
              class="mt-4"
              style="width: 30px; height: 30px"
            />-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
  <script>
import { http } from "~/common/index.js";


export default {
  data() {
    return {
      eqApplications: {},
      loader: false,
      successMsg: false,
      formError: false
    };
  },
 
  computed: {
  isAuthenticated() {
    return process.client ? !!localStorage.getItem("token") : false;
  },
  currentUser() {
    if (process.client) {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : null;
    }
    return null;
  },
  selectedEquipment() {
      return this.$store.getters['equipment/selectedEquipment']
    }
},
  methods: {
    async sendApplicationDetails() {

      const details = this.eqApplications;
      if (this.eqApplications.countryAt == undefined) {
        this.formError = true;
      } else {
        this.formError = false;
        try {

          const url = `/api/equipment-applications`;
          const details = this.eqApplications;
          details.user = this.currentUser;
          details.equipmentToRent = this.selectedEquipment
          
          const self = this;
          this.loader = true;
         
          await http.post(url, details).then(res => {
            if (res.data.state) {
              self.successMsg = true;
              self.loader = false;
              self.eqApplications = {};
            } else {
              self.loader = false;
            }
          });
        } catch (err) {
          console.log("Error occured", err);
        }
      }
    }
  }
};
</script>
        
        <style lang="scss" scoped>
</style>