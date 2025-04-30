<template>
  <div class="container mx-auto p-2 mb-6">
    <div
      class="
        mb-2
        justify-center
        items-center
        content-center
        grid
        text-2xl text-orange-600
      "
    >
      <!-- https://www.youtube.com/watch?v=6RrcYW4Z_Tc -->
      Blog Article
    </div>
    <!-- div 1 -->
    <div class="grid md:grid-cols-12 gap-2">
      <div class="bg-white p-4 text-base md:col-span-9">
        <div class="grid md:grid-cols-12">
          <div class="col-span-8">
            <h1 class="font-bold text-lg text-gray-600">{{ record.title }}</h1>
          </div>
          <div class="col-span-4">
            <div class="flex justify-end items-center align-middle">
              <span class="font-bold mr-2 text-gray-500">Share</span>
              <button @click="shareFacebook">
                <svg
                  class="
                    bi bi-facebook
                    h-4
                    w-4
                    md:h-6 md:w-6
                    mr-2
                    cursor-pointer
                    text-blue-600
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  />
                </svg>
              </button>

              <!-- instagram -->

              <button @click="shareInstagram">
                <font-awesome-icon
                  class="h-6 w-6 mt-2 cursor-pointer"
                  style="color: green"
                  :icon="['fab', 'whatsapp']"
                />
              </button>

              <!-- linked in -->
              <button @click="shareLinkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 ml-4 md:h-6 md:w-6 mr-4 text-indigo-50"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </button>
              <!-- end -->

              <!-- twitter -->
              <button @click="shareTwitter">
                <svg
                  style="color: blue"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 md:h-6 md:w-6 bi bi-twitter"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    fill="blue"
                  ></path>
                </svg>
              </button>
              <!-- end -->
            </div>
          </div>
        </div>

        <!-- docs  -->
        <div class="grid md:grid-cols-3 grid-cols-1 gap-2 py-4">
          <div
            v-for="(doc, index) in record.attachments"
            :key="index"
            class="inline-block flex"
          >
            <a
              :href="`${imageUrl}/uploads/attachments/${doc.fileName}`"
              class="text-blue-600 inline-block flex"
            >
              <img src="~assets/images/attach.svg" alt class="h-6 w-6 mr-2" />
              {{ doc.title }}</a
            >
          </div>
        </div>

        <!-- end of docs -->

        <div v-html="record.content"></div>

        <div>
          <img
            :src="`${imageUrl}/uploads/blog/${record.coverImage}`"
            alt
            class="w-full object-fill product_image"
          />
        </div>

        <!-- products loops -->
        <div class="grid md:grid-cols-3 grid-cols-2 gap-2 py-4 mt-2">
          <div
            class="card p-2"
            v-for="(image, index) in record.otherImages"
            :key="index"
          >
            <img
              :src="`${imageUrl}/uploads/blog/${image}`"
              alt
              class="w-full object-cover product_image"
            />
          </div>
        </div>
        <!-- comment section -->
        <div>
          <div class="text-gray-400 font-bold">Comment Here</div>
          <div class="mt-4">
            <label class="block mb-2 font-bold">Your Comment *</label>
            <textarea
              v-model="dataItem.message"
              class="
                border border-gray-400
                focus:border-purple-500
                outline-none
                rounded
                p-2
                m-1s
                w-full
              "
              rows="6"
              name="tt"
            ></textarea>
          </div>

          <!-- other inputs -->
          <div class="grid grid-cols-12 gap-2 mt-2">
            <div class="col-span-4">
              <label class="block mb-2 font-bold">Name *</label>
              <input
                v-model="dataItem.name"
                type="text"
                class="
                  w-full
                  border border-gray-400
                  py-1
                  px-3
                  rounded
                  outline-none
                  focus:border-purple-500
                "
              />
            </div>

            <div class="col-span-4">
              <label class="block mb-2 font-bold">Email *</label>
              <input
                v-model="dataItem.email"
                type="text"
                class="
                  w-full
                  border border-gray-400
                  py-1
                  px-3
                  rounded
                  outline-none
                  focus:border-purple-500
                "
              />
            </div>

            <div class="col-span-4">
              <label class="block mb-2 font-bold">Website</label>
              <input
                v-model="dataItem.website"
                type="text"
                class="
                  w-full
                  border border-gray-400
                  py-1
                  px-3
                  rounded
                  outline-none
                  focus:border-purple-500
                "
              />
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
              <p>Your name, email and message are mandatory</p>
            </div>
          </div>
          <!-- end -->

          <!-- submit buttom -->
          <div class="">
            <button
              @click="createComment"
              type="button"
              class="
                float-right
                mt-2
                py-2
                px-5
                bg-blue-500
                hover:bg-blue-700
                font-bold
                text-white text-sm
                focus:outline-none
              "
            >
              POST COMMENT
            </button>
          </div>
          <!-- end -->
        </div>
        <!-- end of comment section -->

        <!-- list of the comments -->
        <div class="mt-20">
          <div class="py-2">Comments</div>

          <div
            v-for="(comment, index) in record.comments"
            :key="index"
            class="border-b border-grey-200 border-t"
          >
            <div class="font-bold">{{ comment.name }}</div>
            <div class="py-2">{{ comment.message }}</div>
          </div>
        </div>

        <!-- end of the comments list -->
      </div>
      <div class="bg-white p-2 md:col-span-3 p-2">
        <div class="border-l-4 border-orange-600 px-2 mb-2 font-bold">
          The Latest News
        </div>
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-green-700"
        >
          <nuxt-link :to="`/blog/${project.url}`">
            <div class="grid md:grid-cols-12 border-b-2">
              <div class="col-span-12 text-sm p-2 text-white flex items-center">
                {{ project.title }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- end of div 1 -->
  </div>
</template>


<script>
import { http, websiteUrl } from "~/common/index.js";
import { mapGetters } from "vuex";
import Product from "@/components/product.vue";
export default {
  components: {
    Product,
  },
  computed: {
    ...mapGetters(["imageUrl"]),
  },
  data() {
    return {
      category: {},
      formError: false,
      dataItem: {},
      priceFilter: null,
      alcoholFilter: null,
      sizeFilter: null,
      filterCategory: null,
      activeCategory: null,
      isOpen: false,
    };
  },
  head() {
    const meta = this.meta || {};
    return {
      title: `${meta.metaTitle}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: meta.metaDescription,
        },
        { hid: "og:title", name: "og:title", content: `${meta.metaTitle}` },
        {
          hid: "og:description",
          name: "og:description",
          content: meta.metaDescription,
        },
        { hid: "og:type", name: "og:type", content: "website" },
      ],
    };
  },
  async asyncData({ params, error }) {
    const query = params.url;
    const url = `/api/blog/${query}`;

    const servicesUrl = `/api/blog`;

    try {
      const { data } = await http.get(url);

      const { data: servicesData } = await http.get(servicesUrl);
      const projects = servicesData.records;
      const { record, meta } = data;

      return {
        record,
        projects,
        meta,
      };
    } catch (err) {
      return {
        record: {},
        projects: [],
        meta: {},
      };
    }
  },
  methods: {
    async createComment() {
      //const details = this.dataItem;
      if (
        this.dataItem.name == undefined ||
        this.dataItem.email == undefined ||
        this.dataItem.message == undefined
      ) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/blog/comments`;
          const details = this.dataItem;
          details.blogId = this.record._id;
          const self = this;
          this.loader = true;
          await http.post(url, details).then((res) => {
            if (res.data.state) {
              self.successMsg = true;
              self.loader = false;
              location.reload();
              // self.dataItem = {};
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
    async getBlog() {
      try {
        const id = this.record._id;
        const url = `/api/blog/${id}`;
        // const self = this;
        this.loader = true;
        await http.post(url).then((res) => {
          console.log(res, "blog res");
        });
      } catch (err) {
        console.log("error occured", err);
      }
    },
    socialWindowScreen(url) {
      var left = (screen.width - 570) / 2;
      var top = (screen.height - 570) / 2;

      var params =
        "menubar=no,toolbar=no,status=no,width=570,height=570,top=" +
        top +
        ",left=" +
        left;

      window.open(url, "NewWindow", params);
    },
    shareFacebook() {
      const articleUrl = this.record.url;
      const pageUrl = `${websiteUrl}/blog/${articleUrl}`;
      //const pageUrl = "https://Jubilantafrofarmsmarket.com";
      const url = `https://www.facebook.com/sharer.php?u=${pageUrl}`;
      this.socialWindowScreen(url);
    },
    shareInstagram() {
      const articleUrl = this.record.url;
      const pageUrl = `${websiteUrl}/blog/${articleUrl}`;
      const url = "https://wa.me/?text=" + pageUrl;
      this.socialWindowScreen(url);
    },
    shareLinkedin() {
      const articleUrl = this.record.url;
      const pageUrl = `${websiteUrl}/blog/${articleUrl}`;
      const url =
        "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
      this.socialWindowScreen(url);
    },
    shareTwitter() {
      const articleUrl = this.record.url;
      const pageUrl = `${websiteUrl}/blog/${articleUrl}`;
      const url = "https://www.twitter.com/intent/tweet?url=" + pageUrl;
      this.socialWindowScreen(url);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
<style lang="scss" scoped>
</style>