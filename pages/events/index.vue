<template>
  <div>
    <!-- sub header -->
    <div
      :style="{ backgroundImage: `url(${headerImage})` }"
      class="hidden md:block h-64 header-img text-white text-3xl pt-20 px-20 font-bold text-center justify-items-center items-center inline-flex"
    >
      <div class="text-white">Upcoming Events</div>
    </div>
    <!-- end -->

    <div class="relative container mx-auto px-2">
      <div class="md:p-4 p-2 text-2xl font-bold border-b border-gray-300 flex justify-center">
        <div>Join An Upcoming Event</div>
      </div>

      <div class="md:px-6 min-h-screen">
        <div class="grid md:grid-cols-12">
          <div class="col-span-12">
            <!-- products loops -->
            <div class="py-4">
              <div
                class="card p-2 bg-gray-200 mb-2 font-bold mt-6"
                v-for="meetingEvent in records"
                :key="meetingEvent._id"
              >
              <!-- web design -->
                <div class="md:block sm:hidden hidden">
                  <div class="flex justify-between">
                  <div>
                    <div>
                      <span>Event Date</span>
                      : {{ meetingEvent.meetingDate }}
                    </div>
                    <div>
                      <span>Event Time</span>
                      : {{ meetingEvent.meetingTime }}
                    </div>
                    <div>
                      <span>Time Zone</span>
                      : {{ meetingEvent.timeZone }}
                    </div>
                  </div>
                  <div>
                    <div class="mt-2">
                      <nuxt-link
                        :to="`/join-event/${meetingEvent.eventRandomId}`"
                        class="bg-green-600 text-white px-6 py-2 rounded-2xl"
                      >Join Event</nuxt-link>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Channel</span>
                    : {{ meetingEvent.meetingChannel }}
                  </div>
                  <div>
                    <span>Agenda</span>
                    : {{ meetingEvent.meetingAgenda }}
                  </div>
                  <div>
                    <span>More Details</span>
                    : {{ meetingEvent.details }}
                  </div>
                </div>
                </div>
              <!-- end of web design -->
                

                <!-- mobile -->
                <div style="background: #E5E4E2" class="md:hidden sm:block block p-2 mt-4">
                  <div>
                    <table class="w-full text-sm md:text-base text-left border-2 border-white">
                    <thead class="opacity-80 uppercase">
                      <tr class="border-b-2 border-white">
                        <th scope="col" class="font-bold border-r-2 border-white">Title</th>
                        <th
                          scope="col"
                          class="font-bold border-r-2 border-white content-center"
                        >Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                        <td class="border-2 border-white">Agenda</td>
                        <td class="border-2 border-white">{{ meetingEvent.meetingAgenda }}</td>
                      </tr>
                      <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                        <td class="border-2 border-white">Date</td>
                        <td class="border-2 border-white">{{ meetingEvent.meetingDate }}</td>
                      </tr>
                      <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                        <td class="border-2 border-white">Time</td>
                        <td class="border-2 border-white">{{ meetingEvent.meetingTime }}</td>
                      </tr>
                      <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                        <td class="border-2 border-white">Time Zone</td>
                        <td class="border-2 border-white">{{ meetingEvent.timeZone }}</td>
                      </tr>
                      <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                        <td class="border-2 border-white">Channel</td>
                        <td class="border-2 border-white">{{ meetingEvent.meetingChannel }}</td>
                      </tr>
                      <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                        <td class="border-2 border-white">Venue</td>
                        <td class="border-2 border-white">{{ meetingEvent.meetingVenue }}</td>
                      </tr>
                      <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                        <td class="border-2 border-white">More Details</td>
                        <td class="border-2 border-white">{{ meetingEvent.details }}</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                
                  <div class="mt-6">
                    <nuxt-link
                        :to="`/join-event/${meetingEvent.eventRandomId}`"
                        class="bg-green-600 text-white px-6 py-2 rounded-2xl"
                      >Join Event</nuxt-link>
                  </div>
               
                </div>
                <!-- end of mobile -->
              </div>
            </div>
            <!-- end of products loop -->

            <!-- footer content -->
            <div class="bg-white p-3 mb-3"></div>
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
import headerImagePath from "~/assets/images/farming.png";
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
      headerImage: headerImagePath,
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
      title: `Projects - Shambani connect`,
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
    const url = `/api/upcoming/events`;

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
  
  <style scoped>
.header-img {
  /* background-image: url(~/assets/autumn-tree.jpg); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>