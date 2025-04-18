<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="py-6">
      <div
        class="flex flex-col gap-3 max-w-screen-lg mx-3 md:mx-auto px-3 pb-8 rounded-xl shadow shadow-gray-50"
      >
        <div class>
          <h1 class="text-center font-bold text-3xl text-orange-500 mt-2">LIST YOUR EQUIPMENT</h1>
          <p
            class="text-center text-gray-600 text-lg leading-relaxed"
          >Please fill in the following details to register your equipment and tools to Jatu system for renting and partnership program</p>
        </div>

        <h1 class="font-bold text-xl text-orange-500 mt-2">Agri-equipment registration</h1>
        <!-- Start of the input fields -->
        <div class="flex flex-col gap-3">
          <!-- Input fields -->
          <div class="flex flex-col md:flex-row justify-between gap-3">
            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Machine Type *</label>
              <input
                v-model="dataItem.machineType"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Enter machine type"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Machine make / manufacture *</label>
              <input
                v-model="dataItem.make"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Machine make / manufacture"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Machine Model *</label>
              <input
                v-model="dataItem.model"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Machine model"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between gap-3 pb-8">
            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Machine Capacity *</label>
              <input
                v-model="dataItem.capacity"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Machine capacity"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Machine drive type *</label>
              <input
                v-model="dataItem.driveType"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Drive type"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Main use *</label>
              <select
                v-model="dataItem.mainUse"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
              >
                <option value disabled>Select Main Use</option>
                <option>Land Preparation</option>
                <option>Planting</option>
                <option>Spraying</option>
                <option>Weeding</option>
                <option>Harvesting</option>
              </select>
            </div>
          </div>
          <!-- End -->

          <h1 class="font-bold text-xl text-orange-500">Machines current location</h1>
          <div class="flex flex-col md:flex-row justify-between gap-3">
            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Country</label>
              <input
                v-model="dataItem.countryAt"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Country"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Region / County</label>
              <input
                v-model="dataItem.region"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Region / County"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">District</label>
              <input
                v-model="dataItem.district"
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
                v-model="dataItem.ward"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Ward"
              />
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Village</label>
              <input
                v-model="dataItem.village"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Village"
              />
            </div>

            <div class="md:flex hidden flex-1 flex-col"></div>
          </div>

          <!-- End -->
          <h1 class="font-bold text-xl mb-0 text-orange-500">Contract and pricing</h1>

          <div class="flex flex-col md:flex-row justify-between gap-3 pb-8">
            <div class="relative flex flex-col flex-1">
              <label class="mb-2 font-bold text-gray-700">Preferred contract</label>
              <select
                v-model="dataItem.preferredContract"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
              >
                <option disabled value>Select preferred contract</option>
                <option>Partnership</option>
                <option>Renting</option>
              </select>
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Pricing</label>
              <select
                v-model="dataItem.pricing"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
              >
                <option disabled value>Select pricing</option>
                <option>Per Day (8hrs)</option>
                <option>Per Acre</option>
                <option>Per Month</option>
                <option>Per Season</option>
                <option>Per Year</option>
              </select>
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Average price</label>
              <input
                v-model="dataItem.averagePrice"
                type="number"
                min="500"
                step="500"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Average price"
              />
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between gap-3">
            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Timeline</label>
              <div
                class="flex"
              >
                <client-only class="flex gap-2">
                  
                  <div class="flex flex-col">
                    <label class="text-gray-700 font-semibold">From:</label>
                    <date-picker
                      v-model="dataItem.timeLine"
                      type="month"
                      format="MM-yyyy"
                      placeholder="Select start month"
                      class="outline-none"
                    />
                  </div>

                  <div class="flex flex-col">
                    <label class="text-gray-700 font-semibold">To:</label>
                    <date-picker
                      v-model="dataItem.endTime"
                      type="month"
                      format="MM-yyyy"
                      placeholder="Select end month"
                      class="outline-none"
                    />
                  </div>
                </client-only>
              </div>
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Machine status (current condition)</label>
              <select
                v-model="dataItem.condition"
                type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
              >
                <option>Brand New</option>
                <option>Slightly used</option>
                <option>Used over a season</option>
                <option>Need a small service and maintenance</option>
                <option>Need heavy service and repair before use</option>
              </select>
            </div>

            <div class="flex flex-1 flex-col">
              <label class="mb-2 font-bold text-gray-700">Photos and videos</label>
              <input
                @change="handleMediaUpload"
                accept="image/*, video*"
                type="file"
                class="bg-orange-500"
              />
            </div>
          </div>

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
              @click="sendEquimentRegDetails"
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
      dataItem: {},
      loader: false,
      successMsg: false,
      sendEquipmentRegDetails: false,
      formError: false
    };
  },
  methods: {
    generateRandomString() {
      return Math.random()
        .toString(36)
        .substring(7);
    },
    async handleMediaUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      this.dataItem.value = file;
      const fileName = "eq-" + this.generateRandomString();
      const filepath = `${fileName}.webp`;

      this.dataItem.imageLink = filepath;
      this.dataItem.imageUrls = fileName;
      this.dataItem.serialNo = "eq-" + this.generateRandomString();
    },
    async sendEquimentRegDetails() {
      const details = this.dataItem;
      const formData = new FormData();
      const dateObj = new Date(this.dataItem.timeLine);
      const dateString = dateObj.toDateString();

      if (this.dataItem.machineType == undefined) {
        this.formError = true;
      } else {
        this.formError = false;
        formData.append("serialNo", this.dataItem.serialNo);
        formData.append("machineType", this.dataItem.machineType);
        formData.append("otherImages", this.dataItem.value);
        formData.append("imageLink", this.dataItem.imageLink);
        formData.append("imageUrls", this.dataItem.imageUrls);
        formData.append("make", this.dataItem.make);
        formData.append("model", this.dataItem.model);
        formData.append("capacity", this.dataItem.capacity);
        formData.append("driveType", this.dataItem.driveType);
        formData.append("mainUse", this.dataItem.mainUse);
        formData.append("countryAt", this.dataItem.countryAt);
        formData.append("region", this.dataItem.region);
        formData.append("district", this.dataItem.district);
        formData.append("ward", this.dataItem.ward);
        formData.append("village", this.dataItem.village);
        formData.append("preferredContract", this.dataItem.preferredContract);
        formData.append("pricing", this.dataItem.pricing);
        formData.append("averagePrice", this.dataItem.averagePrice);
        formData.append("condition", this.dataItem.condition);
        formData.append("timeLine", dateString);
        try {
          const url = `/api/list-equipment`;
          const self = this;
          this.loader = true;
          console.log(formData);
          await http.post(url, formData).then(res => {
            if (res.data.state) {
              self.successMsg = true;
              self.loader = false;
              self.dataItem = {};
              document.querySelector('input[type="file"]').value = "";
            } else {
              self.sendEquipmentRegDetails = true;
              self.loader = false;
            }
          });
        } catch (err) {
          console.log("error occured", err);
        }
      }
    }
  }
};
</script>
      
      <style lang="scss" scoped>
</style>