<template>
  <div>
     <!-- sub header -->
     <div :style="{ backgroundImage: `url(${headerImage})` }" class="hidden md:block h-64 header-img text-white text-3xl pt-20 px-20 font-bold text-center justify-items-center items-center  inline-flex">
        <div class="text-white">
          Together, we are unlocking the hidden potential of the African farmlands
        </div>
    </div>
    <!-- end -->

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
      <div>OUR PROJECTS</div>
    </div>

    <div class="md:px-6 min-h-screen">
      <div class="grid md:grid-cols-12">
        <div class="col-span-12">
          <!-- products loops -->
          <div class="grid md:grid-cols-3 grid-cols-1 gap-2 py-4">
            <div class="card p-2" v-for="project in records" :key="project._id">
              <div>
                <nuxt-link :to="`/projects/${project.url}`">
                  <img
                    :src="`${imageUrl}/uploads/projects/${project.coverImage}`"
                    alt
                    class="w-full object-fill product_image"
                  />
                  <div class="py-2">
                    <span class="font-bold text-xl text-orange-600">{{
                      project.title
                    }}</span>
                  </div>
                </nuxt-link>

                <div>
                  {{ project.introText }}<br />
                  <nuxt-link
                    class="text-blue-600 text-lg underline"
                    :to="`/projects/${project.url}`"
                    >Read More</nuxt-link
                  >
                </div>
              </div>
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
  </div>

</template>

<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
import Product from "@/components/product.vue";
import headerImagePath from "~assets/images/farming.png";
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
      headerImage: headerImagePath,
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
      title: `Projects -  connect`,
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
    const url = `/api/projects/query/active`;

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

<style scoped>
.header-img {
  /* background-image: url(~/assets/autumn-tree.jpg); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>