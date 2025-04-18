<template>
  <div class="relative container mx-auto px-2">
    <div
      class="
        md:p-4
        p-2
        text-2xl
        font-bold
        border-b border-gray-300
        flex
        justify-center
      "
    >
      <div>Blog</div>
    </div>

    <div class="md:px-6 min-h-screen">
      <div class="grid md:grid-cols-12">
        <div class="col-span-12">
          <!-- products loops -->
          <div class="grid md:grid-cols-3 grid-cols-2 gap-2 py-4">
            <div class="card p-2" v-for="article in records" :key="article._id">
              <div>
                <nuxt-link :to="`/blog/${article.url}`">
                  <img
                    v-if="article.videoStatus != true"
                    :src="`${imageUrl}/uploads/blog/${article.coverImage}`"
                    alt
                    style="width: 400px"
                    class="w-96"
                  />
                  <!-- video -->

                  <iframe
                    v-if="article.videoStatus == true"
                    width="400"
                    height="386"
                    :src="`https://www.youtube.com/embed/${article.videoUrl}`"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <!-- end of video -->

                  <div class="py-2">
                    <span class="font-bold text-xl text-orange-600">{{
                      article.title
                    }}</span>
                  </div>
                </nuxt-link>

                <div>
                  {{ article.introText }}<br />

                  <nuxt-link
                    class="text-green-600 text-lg underline"
                    :to="`/blog/${article.url}`"
                    >Read More</nuxt-link
                  >
                </div>
              </div>
              <!-- docs -->
              <div class="py-4">
                <div
                  v-for="(doc, index) in article.attachments"
                  :key="doc"
                  class="inline-block flex py-1"
                >
                  <a
                    :href="`${imageUrl}/uploads/attachments/${doc.fileName}`"
                    class="text-blue-600 inline-block flex"
                  >
                    <img
                      src="~assets/images/attach.svg"
                      alt
                      class="h-6 w-6 mr-2"
                    />
                    {{ doc.title }}</a
                  >
                </div>
              </div>
              <!-- end of docs -->
            </div>
          </div>
          <!-- end of products loop -->

          <!-- footer content -->
          <div class="bg-white p-3 mb-3">
            <section v-html="meta.footerContent"></section>
          </div>
          <!-- end of loop content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "~/common/index.js";
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
    const url = `/api/blog`;

    try {
      const { data } = await http.get(url);
      const { records, meta } = data;

      return {
        records,
        meta,
      };
    } catch (err) {
      return {
        records: [],
        meta: {},
      };
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>