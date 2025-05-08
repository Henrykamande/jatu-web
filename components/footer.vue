<template>
  <footer>
    <div>
      <div class="grid md:grid-cols-4 bg-gray-600 text-gray-200 p-8">
      <div>
        <span class="uppercase font-bold text-lg md:text-2xl text-white">Company</span>

        <div class="flex items-center">
          This Platform is managed and run by Jubilant Afro Farms Market (k) Ltd. The Company was established under the Kenyan
          Companies Act No. 17 of 2015 to engage in Agriculture and related businesses in the entire value
          chain of the agriculture sector in Africa.
        </div>
      </div>
      <div>
        <span class="uppercase font-bold text-lg md:text-2xl text-white">Get In Touch</span>

        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 md:h-7 md:w-7 text-white md:mt-2"
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

          <span class="ml-3 font-bold">+254 748 193 219</span>
        </div>

        <div class="flex items-center">
          <font-awesome-icon
            class="h-6 w-6 cursor-pointer"
            style="color: #fff"
            :icon="['fab', 'whatsapp']"
          />

          <span class="ml-3 font-bold">+254 748 193 219</span>
        </div>

        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 md:h-7 md:w-7 text-white md:mt-2"
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

          <span class="ml-3 font-bold">info@jubilantafrofarms.com</span>
        </div>

        <div class="flex mt-4">
          <a href="#">
            <font-awesome-icon
              class="h-6 w-6 md:h-8 md:w-8 mx-2 cursor-pointer"
              style="color: #fff"
              :icon="['fab', 'instagram']"
            />
          </a>

          <a href="#">
            <font-awesome-icon
              class="h-6 w-6 md:h-8 md:w-8 mx-2 cursor-pointer"
              style="color: #fff"
              :icon="['fab', 'facebook']"
            />
          </a>

          <a href="#">
            <font-awesome-icon
              class="h-6 w-6 md:h-8 md:w-8 mx-2 cursor-pointer"
              style="color: #fff"
              :icon="['fab', 'twitter']"
            />
          </a>

          <a href="#">
            <font-awesome-icon
              class="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
              style="color: #fff"
              :icon="['fab', 'youtube']"
            />
          </a>

          <!-- instagram -->
          <a href="#">
            <font-awesome-icon
              class="h-6 w-6 md:h-8 md:w-8 mx-2 cursor-pointer"
              style="color: #fff"
              :icon="['fab', 'linkedin']"
            />
          </a>
        </div>
      </div>

      <!-- div two -->
      <div class="md:pl-12">
        <span class="uppercase font-bold text-lg md:text-2xl text-white">Quick Links</span>

        <div class="text-lg">
          <ul>
            <li class="cursor-pointer hover:text-indigo-100 hover:underline">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="cursor-pointer hover:text-indigo-100 hover:underline">
              <nuxt-link to="/about">About Us</nuxt-link>
            </li>
            <li class="cursor-pointer hover:text-indigo-100 hover:underline">
              <nuxt-link to="/contact-us">Contact Us</nuxt-link>
            </li>
            <li class="cursor-pointer hover:text-indigo-100 hover:underline">
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
            </li>
            <li class="cursor-pointer hover:text-indigo-100 hover:underline">
              <nuxt-link to="/">Terms Of Use</nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- three -->

      <div>
        <span class="uppercase font-bold text-lg md:text-2xl text-white">Newsletter</span>

        <div class="text-lg">
          <div class="text-sm">
            Sign-up for newsletter to get the latest news and updates
          </div>
          <div>
            <label class="text-sm">Email</label><br>
            <input v-model="newsletterEmail" type="text" class="rounded-xl text-black px-4"><br/>
            <div class="text-red-500" v-if="formError == true">Email is required!</div>
            <button class="bg-orange-500 rounded-xl text-lg px-4 mt-2" @click="subscribeNewsletter">Subscribe</button>
          </div>
        </div>
      </div>

   
    </div>
    <!-- sub footer -->
    <div class="md:flex md:justify-between bg-green-900 p-2 text-white">
      <div>
        "Together, We feed Africa"
      </div>
      <div>
        Copyright {{ new Date().getFullYear() }} &copy;Jubilant Afro Farms, All Rights Reserved
      </div>
    </div>

    </div>
   
  </footer>
</template>

<script>
import { http } from "~/common/index.js";
export default {
  data() {
    return {
      newsletterEmail: null,
      formError: false
    }
  },
  methods: {
    async subscribeNewsletter() {
      console.log(this.newsletterEmail, 'email');
      if (
        this.newsletterEmail == null
      ) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/newsletter`;
          let details = {
            newsletterEmail: this.newsletterEmail
          };

          const self = this;
          await http.post(url, details).then(res => {
            if (res.data.state) {
              self.newsletterEmail = null;
             this.$router.push("/newsletter-success");
            } else {
              self.loader = false;
            }
          });
        } catch (err) {
          console.log("error occured", err);
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>