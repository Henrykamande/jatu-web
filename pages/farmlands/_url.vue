<template>
  <div class="min-h-screen">
    <!-- DESKTOP DESIGN -->
    <div class="px-2 md:px-0 justify-between w-full max-w-screen-lg md:mx-auto">
      <!-- <p class="">{{ record.farmCode }}</p> -->
      <div class="flex flex-col md:flex-row justify-between mt-5 border py-3 px-2 bg-gray-50">
        <p class="uppercase">
          <span class="font-bold">Farm Code:</span>
          {{ record.serialNo }}
        </p>
        <p class="uppercase">
          <span class="font-bold">COUNTRY:</span>
          {{ record.country.name }}
        </p>
        <p class="uppercase">
          <span class="font-bold">NATURE OF OWNERSHIP:</span>
          {{ record.natureOfOwnership }}
        </p>
      </div>
    </div>

    <div class="hidden md:grid grid-cols-2 mt-3 mx-auto max-w-screen-lg">
      <!-- Location -->
      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 my-3">LOCATION</div>
      <div class="p-3 border border-gray-400 my-3">
        <ul>
          <li>
            <span class="font-semibold">Country:</span>
            {{ record.country.name }}
          </li>
          <li>
            <span class="font-semibold">Region:</span>
            {{ record.region }}
          </li>
          <li>
            <span class="font-semibold">District:</span>
            {{ record.district }}
          </li>
          <li>
            <span class="font-semibold">Ward:</span>
            {{ record.ward }}
          </li>
          <li>
            <span class="font-semibold">Village:</span>
            {{ record.village }}
          </li>
        </ul>
      </div>

      <!-- Location -->
      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 mb-3">LOCATION</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Country:</span>
            {{ record.country.name }}
          </li>
          <li>
            <span class="font-semibold">Region:</span>
            {{ record.region }}
          </li>
          <li>
            <span class="font-semibold">District:</span>
            {{ record.district }}
          </li>
          <li>
            <span class="font-semibold">Ward:</span>
            {{ record.ward }}
          </li>
          <li>
            <span class="font-semibold">Village:</span>
            {{ record.village }}
          </li>
        </ul>
      </div>

      <!-- Farm Size -->
      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 mb-3">Farm Size</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Acres/Hectares:</span>
            {{ record.acres }}
          </li>
        </ul>
      </div>

      <!-- Farm Ownership -->
      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 mb-3">Farm Ownership</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Nature of ownership:</span>
            {{ record.natureOfOwnership }}
          </li>
          <li>
            <span class="font-semibold">Right of occupancy:</span>
            {{ record.rightOfOccupancy }}
          </li>
        </ul>
      </div>

      <!-- All projects -->
      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 mb-3">All Projects</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Project:</span>
            {{ "Project 1, Project 2, " }}
          </li>
        </ul>
      </div>

      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 mb-3">Water</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Water Source:</span>
            {{ record.waterSource }}
          </li>
          <li>
            <span class="font-semibold">Water Use:</span>
            {{ record.waterUse }}
          </li>
          <li>
            <span class="font-semibold">Distance from water source:</span>
            {{ record.waterDistance }}
          </li>
        </ul>
      </div>

      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 mb-3">Electricity</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Electricity Source:</span>
            {{ record.electricitySource }}
          </li>
          <li>
            <span class="font-semibold">Electricity Use:</span>
            {{ record.electricityUse }}
          </li>
          <li>
            <span class="font-semibold">Distance from Electricity source:</span>
            {{ record.electricityDistance }}
          </li>
        </ul>
      </div>

      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 mb-3">Transport</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Transport Accessibility:</span>
            {{ record.transportAccessibility }}
          </li>
          <li>
            <span class="font-semibold">Transport distance:</span>
            {{ record.transportDistance }}
          </li>
          <li>
            <span class="font-semibold">Availability of Transport:</span>
            {{ record.transportAvailability }}
          </li>
        </ul>
      </div>

      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 mb-3">COMMUNICATION</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Service provider:</span>
            {{ record.serviceProvider }}
          </li>
        </ul>
      </div>

      <div class="p-3 bg-gray-50 font-bold border border-r-0 border-gray-400 mb-3">AGRI-INPUTS</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Seeds:</span>
            {{ record.seeds }}
          </li>
          <li>
            <span class="font-semibold">Fertilizer:</span>
            {{ record.fertilizer }}
          </li>
          <li>
            <span class="font-semibold">Pesticides:</span>
            {{ record.pesticides }}
          </li>
          <li>
            <span class="font-semibold">Accessibility:</span>
            {{ record.accessibility }}
          </li>
        </ul>
      </div>

      <div class="p-3 bg-gray-50 uppercase font-bold border border-r-0 border-gray-400 mb-3">PHOTO / VIDEO</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Download:</span>
            <span class="text-blue-500">{{ "Download ⬇" }}</span>
          </li>
          <li>
            <span class="font-semibold">Youtube link:</span>
            <nuxt-link class="text-blue-500" to="#">{{ "Watch on Youtube" }}</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="p-3 bg-gray-50 font-bold border border-r-0 border-gray-400 mb-3">PRICE-MARGIN</div>
      <div class="p-3 border border-gray-400 mb-3">
        <ul>
          <li>
            <span class="font-semibold">Per acre:</span>
            {{ record.priceMarginPerAcre }}
          </li>
          <li>
            <span class="font-semibold">In local currency:</span>
            {{ record.inLocalCurrency }}
          </li>
          <li>
            <span class="font-semibold">In USD:</span>
            {{ record.inUsd }}
          </li>
        </ul>
      </div>
    </div>
    <!-- USER INPUT -->
    <div class="hidden md:flex flex-col my-6 mx-auto max-w-screen-lg">
      <div class="my-3">
        <h1 class="font-bold text-2xl text-gray-800 text-center mb-6">HOW MANY ACRES DO YOU WANT?</h1>
        <div class="flex justify-between gap-3">
          <div class="flex flex-1 flex-col">
            <label class="mb-2 font-bold text-gray-700">Your Name *</label>
            <input v-model="userContacts.name" type="text"
              class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
              placeholder="Enter your name" />
          </div>

          <div class="flex flex-1 flex-col">
            <label class="mb-2 font-bold text-gray-700">Phone Number *</label>
            <input v-model="userContacts.phoneNumber" type="text"
              class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
              placeholder="Enter your phone number" />
          </div>

          <div class="flex flex-1 flex-col">
            <label class="mb-2 font-bold text-gray-700">Email *</label>
            <input v-model="userContacts.contactEmail" type="email"
              class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
              placeholder="Enter your email" />
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="flex flex-col gap-6">
        <!-- Name Field -->
       <div class="flex justify-between gap-3">
        <div class="flex flex-1 flex-col">
          <label class="mb-2 font-bold text-gray-700">Acres *</label>
          <input v-model="userContacts.acres" type="number"
            class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
            placeholder="Number of acres" 
          />
        </div>
        <div class="flex flex-1"></div>
        <div class="flex flex-1"></div>
       </div>


        <!-- success message -->
        <div v-show="successMsg" class="bg-blue-100 mt-2 border rounded-md border-blue-500 text-blue-700 px-4 py-3"
          role="alert">
          <p class="font-bold">Message sent</p>
          <p class="text-sm">Thanks for your order, we shall get back to you soon.</p>
        </div>
        <!-- end -->

        <!-- error message -->
        <div v-show="emailError" role="alert" class="mt-2">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Something went Wrong!</div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Please check your internet connection and try again.</p>
          </div>
        </div>
        <!-- end -->

        <div v-show="formError" class="mt-6">
          <div class="bg-red-500 text-white font-bold rounded-t-md px-4 py-2">Please fill all the required fields</div>
          <div class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700 rounded-b-md">
            <p>Your name, phone number, and message are mandatory.</p>
          </div>
        </div>

        <div class="flex flex-col-reverse justify-center items-center">
          <button @click="sendContacts" type="button"
            class="mt-2 py-2 px-5 mr-3 bg-orange-500 hover:bg-orange-600 rounded-3xl font-bold text-white focus:outline-none">Submit</button>
          <img v-show="loader" src="~assets/images/loader.gif" alt class="mt-4" style="width: 30px; height: 30px" />
        </div>
      </div>
    </div>

    <!-- MOBILE -->

    <div class="flex flex-col gap-2 my-3 w-full md:hidden">
      <!-- Location -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">LOCATION</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Country:</span>
              {{ record.country.name }}
            </li>
            <li>
              <span class="font-semibold">Region:</span>
              {{ record.region }}
            </li>
            <li>
              <span class="font-semibold">District:</span>
              {{ record.district }}
            </li>
            <li>
              <span class="font-semibold">Ward:</span>
              {{ record.ward }}
            </li>
            <li>
              <span class="font-semibold">Village:</span>
              {{ record.village }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Farm Size -->
      <div class="m-2 border">
        <div class="font-bold shadow-sm bg-gray-50 p-2">FARM SIZE</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Acres/Hectares:</span>
              {{ record.acres }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Farm Ownership -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">FARM OWNERSHIP</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Nature of ownership:</span>
              {{ record.natureOfOwnership }}
            </li>
            <li>
              <span class="font-semibold">Right of occupancy:</span>
              {{ record.rightOfOccupancy }}
            </li>
          </ul>
        </div>
      </div>

      <!-- All projects -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">PROJECTS</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Projects:</span>
              {{ "Project1, Project2, " }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Water -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">WATER</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Water Source:</span>
              {{ record.waterSource }}
            </li>
            <li>
              <span class="font-semibold">Water Use:</span>
              {{ record.waterUse }}
            </li>
            <li>
              <span class="font-semibold">Distance from water source:</span>
              {{ record.waterDistance }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Electricity -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">ELECTRICITY</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Source:</span>
              {{ record.electricitySource }}
            </li>
            <li>
              <span class="font-semibold">Use:</span>
              {{ record.electricityUse }}
            </li>
            <li>
              <span class="font-semibold">Distance:</span>
              {{ record.electricityDistance }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Transport -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">TRANSPORT</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Accessibilty of transport:</span>
              {{ record.transportAccessibility }}
            </li>
            <li>
              <span class="font-semibold">Transport distance:</span>
              {{ record.transportDistance }}
            </li>
            <li>
              <span class="font-semibold">Availability of transport:</span>
              {{ record.transportAvailability }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Communication -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">COMMUNICATION</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Service provider, eg Safaricom or Vodacom:</span>
              {{ record.serviceProvider }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Agri-inputs -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">AGRI-INPUTS</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Seeds:</span>
              {{ record.seeds }}
            </li>
            <li>
              <span class="font-semibold">Fertilizer:</span>
              {{ record.fertilizer }}
            </li>
            <li>
              <span class="font-semibold">Pesticides:</span>
              {{ record.pesticides }}
            </li>
            <li>
              <span class="font-semibold">For sale:</span>
              {{ record.forSale }}
            </li>
          </ul>
        </div>
      </div>

      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">AGRI-EQUIPMENT</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">For lease:</span>
              {{ record.forLease }}
            </li>
            <li>
              <span class="font-semibold">For partnership:</span>
              {{ record.forPartnership }}
            </li>
            <li>
              <span class="font-semibold">For sale:</span>
              {{ record.forSale }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Soil report -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">SOIL TEST REPORT</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Download PDF:</span>
              <span class="text-blue-500">{{ "Download ⬇" }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Photo / video -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">Photo & Video</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Download:</span>
              <span class="text-blue-500">{{ "Download ⬇" }}</span>
            </li>
            <li>
              <span class="font-semibold">Youtube link:</span>
              <span class="text-blue-500">{{ "Watch on Youtube" }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Price margin -->
      <div class="m-2 border">
        <div class="font-bold bg-gray-50 p-2">PRICE MARGIN</div>
        <div class="p-2">
          <ul>
            <li>
              <span class="font-semibold">Price margin per acre:</span>
              {{ record.priceMarginPerAcre }}
            </li>
            <li>
              <span class="font-semibold">In local currency:</span>
              {{ record.inLocalCurrency }}
            </li>
            <li>
              <span class="font-semibold">In USD:</span>
              {{ record.inUsd }}
            </li>
          </ul>
        </div>
      </div>

      <!-- User input -->
      <div class="py-4 px-2 w-full md:mx-auto">
        <div class="my-3">
          <h1 class="font-bold text-2xl text-gray-800 text-center mb-6">HOW MANY ACRES DO YOU WANT?</h1>
          <div class="flex flex-col gap-6">
            <!-- Name Field -->
            <div class="flex flex-col">
              <label class="mb-2 font-bold text-gray-700">Name *</label>
              <input v-model="userContacts.name" type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Enter your name" />
            </div>

            <div class="flex flex-col">
              <label class="mb-2 font-bold text-gray-700">Phone Number *</label>
              <input v-model="userContacts.phoneNumber" type="text"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Enter your phone number" />
            </div>

            <div class="flex flex-col">
              <label class="mb-2 font-bold text-gray-700">Email *</label>
              <input v-model="userContacts.contactEmail" type="email"
                class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
                placeholder="Enter your email" />
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="flex flex-col">
          <label class="mb-2 font-bold text-gray-700">Acres *</label>
          <input v-model="userContacts.acres" type="number"
            class="flex-1 shadow border py-3 px-4 rounded-md outline-none focus:border-gray-500"
            placeholder="Number of acres" />
        </div>
        <!-- success message -->
        <div v-show="successMsg" class="bg-blue-100 mt-6 border border-blue-500 text-blue-700 px-4 py-3 rounded-md"
          role="alert">
          <p class="font-bold">Message sent</p>
          <p class="text-sm">Thanks for your order, we shall get back to you soon.</p>
        </div>
        <!-- end -->

        <!-- Error Messages -->
        <div v-show="emailError" role="alert" class="mt-6">
          <div class="bg-red-500 text-white font-bold rounded-t-md px-4 py-2">Something went Wrong!</div>
          <div class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700 rounded-b-md">
            <p>Please check your internet connection and try again.</p>
          </div>
        </div>

        <div v-show="formError" class="mt-6">
          <div class="bg-red-500 text-white font-bold rounded-t-md px-4 py-2">Please fill all the required fields</div>
          <div class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700 rounded-b-md">
            <p>Your name, phone number, and email are mandatory.</p>
          </div>
        </div>

        <div class="flex items-center flex-col-reverse">
          <button @click="sendContacts" type="button"
            class="mt-2 py-2 px-5 mr-3 bg-orange-500 hover:bg-orange-600 rounded-3xl font-bold text-white focus:outline-none">Submit</button>
          <img v-show="loader" src="~assets/images/loader.gif" alt class="mt-4" style="width: 30px; height: 30px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
import { handleErr } from "../../server/helpers/common";

export default {
  computed: {
    ...mapGetters(["imageUrl"])
  },
  data() {
    return {
      userContacts: {},
      loader: false,
      successMsg: false,
      emailError: false,
      formError: false
    };
  },

  async asyncData({ params, error }) {
    const serialNo = params.url;
    // console.log(serialNo, "Farm serial no.")
    const url = `/api/available/farms/serial-no/${serialNo}`;

    try {
      const { data } = await http.get(url);
      const { record, meta } = data;
      // console.log(record, "Farm record")
      return {
        record,
        meta
      };
    } catch (err) {
      return {
        record: [],
        meta: {}
      };
    }
  },
  methods: {
    async sendContacts() {
      const details = this.userContacts;
      if (
        this.userContacts.acres == undefined ||
        this.userContacts.name == undefined ||
        this.userContacts.phoneNumber == undefined ||
        this.userContacts.contactEmail == undefined
      ) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/farmlands-application`;
          const details = this.userContacts;
          details.farm = this.record._id;
          const self = this;
          this.loader = true;

          await http.post(url, details).then(res => {
            if (res.data.state) {
              self.successMsg = true;
              self.loader = false;
              self.userContacts = {};
            } else {
              self.emailError = true;
              self.loader = false;
            }
          });
        } catch (err) {
          handleErr(err)
          console.log("Error occured", err);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>