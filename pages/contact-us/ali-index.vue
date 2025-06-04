<template>
  <div class="min-h-full">
    <div class="grid md:grid-cols-2 mx-4 md:mx-20 my-4 bg-white p-10">
      <div>
        <span class="font-bold text-lg">You can contact us via:</span>
        <!-- div -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 md:h-6 md:w-6 md:mt-2 text-blue-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="block font-semibold text-gray-500"
            >Phone No: 0723212121</span
          >
        </div>
        <!-- end -->

        <!-- div  -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 md:h-7 md:w-7 md:mt-2 mr-2 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span class="font-semibold text-gray-500"
            >Email: info@hotmax.co.ke</span
          >
        </div>
        <!-- end -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 md:h-7 md:w-7 md:mt-2 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <!-- <span class="block font-semibold text-gray-500"
            >The best online liqour shop in NAirobi</span
          > -->
        </div>

        <div class="hidden md:block">
          <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.397604814752!2d36.87899835795535!3d-1.2947214846053992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13bd95a385df%3A0xf603c3e52eabaca9!2sDonholm%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1619467063531!5m2!1sen!2ske"
            class="w-full pr-3"
            height="250"
            style="border:0;"
            allowfullscreen
            loading="lazy"
          ></iframe> -->
        </div>
      </div>
      <div>
        <span class="font-bold text-lg">Or send us a message</span>

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block mb-2 font-bold">Name *</label>
            <input
              v-model="dataItem.name"
              type="text"
              class="
                border-2 border-gray-400
                py-1
                px-3
                rounded
                outline-none
                focus:border-purple-500
              "
            />
          </div>

          <div>
            <label class="block mb-2 font-bold">Phone Number *</label>
            <input
              v-model="dataItem.phone"
              type="text"
              class="
                border-2 border-gray-400
                py-1
                px-3
                rounded
                outline-none
                focus:border-purple-500
              "
            />
          </div>
        </div>

        <div class="grid grid-cols-2 mt-3">
          <div class="col-span-2">
            <label class="block mb-2 font-bold">Email</label>
            <input
              v-model="dataItem.email"
              type="text"
              class="
                w-full
                border-2 border-gray-400
                py-1
                px-3
                rounded
                outline-none
                focus:border-purple-500
              "
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-3">
          <div class="col-span-2">
            <label class="block mb-2 font-bold">Message *</label>
            <textarea
              v-model="dataItem.message"
              class="
                border-2 border-gray-400
                focus:border-blue-400
                rounded
                p-2
                m-1
                w-full
              "
              name="tt"
            ></textarea>
          </div>
        </div>

        <div class="flex">
          <button
            @click="sendEmail"
            type="button"
            class="
              mt-2
              py-2
              px-5
              mr-3
              bg-red-900
              hover:bg-red-600
              rounded-3xl
              font-bold
              text-white
              focus:outline-none
            "
          >
            Submit
          </button>
          <img
            v-show="loader"
            src="~assets/images/loader.gif"
            alt
            class="mt-4 ml-4"
            style="width: 30px; height: 30px"
          />
        </div>

        <!-- success message -->
        <div
          v-show="successMsg"
          class="
            bg-blue-100
            mt-2
            border-t border-b border-blue-500
            text-blue-700
            px-4
            py-3
          "
          role="alert"
        >
          <p class="font-bold">Message sent</p>
          <p class="text-sm">
            Thanks for your message, we shall get back to you soon.
          </p>
        </div>
        <!-- end -->

        <!-- error message -->
        <div v-show="emailError" role="alert" class="mt-2">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Something went Wrong!
          </div>
          <div
            class="
              border border-t-0 border-red-400
              rounded-b
              bg-red-100
              px-4
              py-3
              text-red-700
            "
          >
            <p>Please check your internet connection and try again.</p>
          </div>
        </div>
        <!-- end -->

        <!-- error message -->
        <div v-show="formError" role="alert" class="mt-2">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Please fill all the required fields
          </div>
          <div
            class="
              border border-t-0 border-red-400
              rounded-b
              bg-red-100
              px-4
              py-3
              text-red-700
            "
          >
            <p>Your name, phone number and message are mandatory</p>
          </div>
        </div>
        <!-- end -->
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
      emailError: false,
      formError: false,
    };
  },
  methods: {
    async sendEmail() {
      const details = this.dataItem;
      console.log(this.dataItem.name, "name");
      if (
        this.dataItem.name == undefined ||
        this.dataItem.phone == undefined ||
        this.dataItem.message == undefined
      ) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/emails`;
          const details = this.dataItem;
          const self = this;
          this.loader = true;
          await http.post(url, details).then((res) => {
            if (res.data.state) {
              self.successMsg = true;
              self.loader = false;
              self.dataItem = {};
            } else {
              self.emailError = true;
              self.loader = false;
            }
          });
        } catch (err) {
          console.log("error occured", err);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>