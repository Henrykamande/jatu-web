<template>
  <div class="container mx-auto p-2 mb-6 min-h-screen">
    <!-- <div
        class="
          mb-2
          justify-center
          items-center
          content-center
          grid
          text-2xl text-orange-600
        "
      >
        Blog
    </div>-->
    <!-- div 1 -->
    <div class="grid md:grid-cols-12 gap-2 mt-6">
      <div class="p-2 text-base md:col-span-9">
        <div
          class="border-b p-2 border-grey-300"
          v-for="(article, index) in records"
          :key="article._id"
        >
          <div v-if="article.coverImage || article.videoUrl" class="grid md:grid-cols-12">
            <div class="col-span-6 relative">
              <img
                v-if="index == 0"
                src="~assets/images/sticker.gif"
                class="absolute top-0 left-0 w-20 h-20 ml-2 mt-2"
                alt
              />
              <img
                v-if="article.videoStatus != true"
                :src="`${imageUrl}/uploads/blog/${article.coverImage}`"
                alt
                class="w-11/12 object-fill product_image"
                style="height: 250px"
              />
              <!-- video -->

              <iframe
                v-if="article.videoStatus == true"
                class="w-11/12"
                style="height: 250px"
                :src="`https://www.youtube.com/embed/${article.videoUrl}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div class="col-span-6">
              <nuxt-link :to="`/blog/${article.url}`">
                <div class="text-sm font-bold">ISIO-GAWANYO</div>
                <div class="text-xl font-bold">{{ article.title }}</div>
                <div class="mt-2">{{ article.introText }}</div>

                <div
                  class="mt-2 py-3 border-t border-grey-200 justify-between flex text-gray-400 text-sm font-bold"
                >
                  <div class="flex justify items-center">
                    <font-awesome-icon class="h-4 w-4 md:mr-2" :icon="['far', 'comment']" />Comments
                  </div>
                  <div>June 29, 2022</div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <!-- style 1 -->
          <div v-else class="relative">
            <img
              v-if="index == 0"
              src="~assets/images/sticker.gif"
              class="absolute top-0 right-0 w-12 h-12 ml-2 mt-2"
              alt
            />
            <nuxt-link :to="`/blog/${article.url}`">
              <div class="text-sm font-bold">ISIO-GAWANYO</div>
              <div class="text-xl font-bold">{{ article.title }}</div>
              <div class="mt-2">{{ article.introText }}</div>

              <div
                class="mt-2 py-3 border-t border-grey-200 justify-between flex text-gray-400 text-sm font-bold"
              >
                <div class="flex justify items-center">
                  <font-awesome-icon class="h-4 w-4 md:mr-2" :icon="['far', 'comment']" />Comments
                </div>
                <div>June 29, 2022</div>
              </div>
            </nuxt-link>
          </div>
          <!-- end of style 1 -->
        </div>
      </div>
      <div class="p-2 md:col-span-3 border-l border-grey-200">
        <div class="border-l-4 border-orange-600 px-2 mb-2 font-bold">The Latest News</div>
        <div v-for="(article, index) in records" :key="index" class="bg-green-700">
          <nuxt-link :to="`/blog/${article.url}`">
            <div class="grid md:grid-cols-12 border-b">
              <div class="col-span-12 p-2 text-sm flex items-center text-white">{{ article.title }}</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- end of div 1 -->
  </div>
</template>
  
  <script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
import Product from "@/components/product.vue";
export default {
  components: {
    Product
  },
  computed: {
    ...mapGetters(["imageUrl"])
  },
  data() {
    return {
      category: {},
      priceFilter: null,
      alcoholFilter: null,
      sizeFilter: null,
      filterCategory: null,
      activeCategory: null,
      isOpen: false
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
          content: meta.metaDescription
        },
        { hid: "og:title", name: "og:title", content: `${meta.metaTitle}` },
        {
          hid: "og:description",
          name: "og:description",
          content: meta.metaDescription
        },
        { hid: "og:type", name: "og:type", content: "website" }
      ]
    };
  },
  async asyncData({ params, error }) {
    const url = `/api/blog`;

    try {
      const { data } = await http.get(url);
      const { records, meta } = data;

      return {
        records,
        meta
      };
    } catch (err) {
      return {
        records: [],
        meta: {}
      };
    }
  },
  methods: {}
};
</script>
  
  <style lang="scss" scoped>
</style>