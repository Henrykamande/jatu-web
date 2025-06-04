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
        font-bold
      "
    >
      Our Services
    </div>
    <!-- div 1 -->
    <div class="grid md:grid-cols-12 gap-2">
      <div class="bg-white p-4 text-base md:col-span-9">
        <h1 class="font-bold text-2xl">{{ record.title }}</h1>

        <div v-html="record.content"></div>

        <!-- insurance form -->

        <span class="font-bold text-lg mt-1">Start your journey here</span>

        <!-- row  -->

        <div class="grid md:grid-cols-3 mx-2 my-4 bg-white gap-2">
          <!-- one -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <label class="block mb-2 font-bold">First Name</label>
              <input
                v-model="dataItem.firstName"
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
          <!-- end -->

          <!-- two -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <label class="block mb-2 font-bold">Last Name</label>
              <input
                v-model="dataItem.lastName"
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
          <!-- end -->

          <!-- How can you work wit -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <label class="block mb-2 font-bold"
                >How would you like to work with us?</label
              >
              <div>
                <div class="relative w-full inline-flex self-center">
                  <svg
                    class="
                      text-white
                      bg-green-500
                      absolute
                      top-0
                      right-0
                      m-2
                      pointer-events-none
                      p-2
                      rounded
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="40px"
                    height="25px"
                    viewBox="0 0 38 22"
                    version="1.1"
                  >
                    <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                    <g
                      id="ZahnhelferDE—Design"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="ZahnhelferDE–Icon&amp;Asset-Download"
                        transform="translate(-539.000000, -199.000000)"
                        fill="#ffffff"
                        fill-rule="nonzero"
                      >
                        <g
                          id="Icon-/-ArrowRight-Copy-2"
                          transform="translate(538.000000, 183.521208)"
                        >
                          <polygon
                            id="Path-Copy"
                            transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                            points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <select
                    v-model="dataItem.workOption"
                    class="
                      text-base
                      font-bold
                      rounded
                      border-2 border-green-500
                      text-gray-600
                      h-10
                      w-full
                      pl-5
                      pr-10
                      bg-white
                      hover:border-gray-400
                      focus:outline-none
                      appearance-none
                    "
                  >
                    <option></option>
                    <option>- as technical partner</option>
                    <option>- as market developer</option>
                    <option>- as key supplier</option>
                    <option>- as honorary client</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- end -->
        </div>

        <!-- end of row -->

        <!-- row -->
        <div class="grid md:grid-cols-3 mx-2 my-4 bg-white gap-2">
          <!-- one -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <label class="block mb-2 font-bold"
                >Contry of your business</label
              >
              <div>
                <div class="relative w-full inline-flex self-center">
                  <svg
                    class="
                      text-white
                      bg-green-500
                      absolute
                      top-0
                      right-0
                      m-2
                      pointer-events-none
                      p-2
                      rounded
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="40px"
                    height="25px"
                    viewBox="0 0 38 22"
                    version="1.1"
                  >
                    <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                    <g
                      id="ZahnhelferDE—Design"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="ZahnhelferDE–Icon&amp;Asset-Download"
                        transform="translate(-539.000000, -199.000000)"
                        fill="#ffffff"
                        fill-rule="nonzero"
                      >
                        <g
                          id="Icon-/-ArrowRight-Copy-2"
                          transform="translate(538.000000, 183.521208)"
                        >
                          <polygon
                            id="Path-Copy"
                            transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                            points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <select
                    v-model="dataItem.country"
                    class="
                      text-base
                      font-bold
                      rounded
                      border-2 border-green-500
                      text-gray-600
                      h-10
                      w-full
                      pl-5
                      pr-10
                      bg-white
                      hover:border-gray-400
                      focus:outline-none
                      appearance-none
                    "
                  >
                    <option></option>
                    <option v-for="country in countries" :key="country._id">
                      {{ country.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- end -->

          <!-- two -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <label class="block mb-2 font-bold">Location</label>
              <input
                v-model="dataItem.location"
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
          <!-- end -->

          <!-- How can you work wit -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <label class="block mb-2 font-bold"
                >Nature of your business</label
              >
              <div>
                <div class="relative w-full inline-flex self-center">
                  <svg
                    class="
                      text-white
                      bg-green-500
                      absolute
                      top-0
                      right-0
                      m-2
                      pointer-events-none
                      p-2
                      rounded
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="40px"
                    height="25px"
                    viewBox="0 0 38 22"
                    version="1.1"
                  >
                    <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                    <g
                      id="ZahnhelferDE—Design"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="ZahnhelferDE–Icon&amp;Asset-Download"
                        transform="translate(-539.000000, -199.000000)"
                        fill="#ffffff"
                        fill-rule="nonzero"
                      >
                        <g
                          id="Icon-/-ArrowRight-Copy-2"
                          transform="translate(538.000000, 183.521208)"
                        >
                          <polygon
                            id="Path-Copy"
                            transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                            points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <select
                    v-model="dataItem.businessNature"
                    class="
                      text-base
                      font-bold
                      rounded
                      border-2 border-green-500
                      text-gray-600
                      h-10
                      w-full
                      pl-5
                      pr-10
                      bg-white
                      hover:border-gray-400
                      focus:outline-none
                      appearance-none
                    "
                  >
                    <option></option>
                    <option>Sole Proprietor</option>
                    <option>Company</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- end -->
        </div>
        <!-- end of row -->

        <!-- row -->
        <div class="grid md:grid-cols-3 mx-2 my-4 bg-white gap-2">
          <!-- one -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <label class="block mb-2 font-bold">Email </label>
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
          <!-- end -->

          <!-- two -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <label class="block mb-2 font-bold">Phone Number</label>
              <input
                v-model="dataItem.phone"
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
          <!-- end -->

          <!-- How can you work wit -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <label class="block mb-2 font-bold"
                >Would you like a call back?</label
              >
              <div>
                <div class="relative w-full inline-flex self-center">
                  <svg
                    class="
                      text-white
                      bg-green-500
                      absolute
                      top-0
                      right-0
                      m-2
                      pointer-events-none
                      p-2
                      rounded
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="40px"
                    height="25px"
                    viewBox="0 0 38 22"
                    version="1.1"
                  >
                    <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                    <g
                      id="ZahnhelferDE—Design"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="ZahnhelferDE–Icon&amp;Asset-Download"
                        transform="translate(-539.000000, -199.000000)"
                        fill="#ffffff"
                        fill-rule="nonzero"
                      >
                        <g
                          id="Icon-/-ArrowRight-Copy-2"
                          transform="translate(538.000000, 183.521208)"
                        >
                          <polygon
                            id="Path-Copy"
                            transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                            points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <select
                    v-model="dataItem.backCall"
                    class="
                      text-base
                      font-bold
                      rounded
                      border-2 border-green-500
                      text-gray-600
                      h-10
                      w-full
                      pl-5
                      pr-10
                      bg-white
                      hover:border-gray-400
                      focus:outline-none
                      appearance-none
                    "
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <!-- end -->
        </div>
        <!-- end of row -->

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
          <p class="text-sm">Thanks for your message</p>
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
            <p>All fields are mandatory!</p>
          </div>
        </div>
        <!-- end -->

        <div class="flex justify-end" style="margin-bottom: 30px">
          <button
            @click="sendMessage"
            type="button"
            class="
              mt-2
              md:mr-4
              py-2
              px-5
              mr-3
              bg-orange-500
              hover:bg-orange-600
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

        <!-- end of insurance form -->

        <div>
          <img
            :src="`${imageUrl}/uploads/services/${record.coverImage}`"
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
              :src="`${imageUrl}/uploads/services/${image}`"
              alt
              class="w-full object-cover product_image"
            />
          </div>
        </div>
        <!-- end of products loop -->
      </div>
      <div class="bg-white p-2 md:col-span-3 p-2">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-green-700 text-white"
        >
          <nuxt-link :to="`/services/${service.url}`">
            <div class="grid md:grid-cols-12 border-b-2">
              <div class="col-span-4">
                <img
                  :src="`${imageUrl}/uploads/services/${service.coverImage}`"
                  alt
                  style="height: 100px; width: 100px"
                  class="w-full object-cover p-2"
                />
              </div>
              <div class="col-span-8 text-lg text-white flex items-center">
                {{ service.title }}
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
      dataItem: {},
      loader: false,
      successMsg: false,
      emailError: false,
      formError: false,
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
    const url = `/api/services/${query}`;

    const servicesUrl = `/api/services`;

    const countriesUrl = `/api/countries`;

    try {
      const { data } = await http.get(url);

      const { data: servicesData } = await http.get(servicesUrl);
      const services = servicesData.records;
      const { record, meta } = data;

      const { data: countriesData } = await http.get(countriesUrl);
      const countries = countriesData.records;

      return {
        record,
        services,
        countries,
        meta,
      };
    } catch (err) {
      return {
        record: {},
        services: [],
        countries: [],
        meta: {},
      };
    }
  },
  methods: {
    async sendMessage() {
      const details = this.dataItem;
      if (
        this.dataItem.firstName == undefined ||
        this.dataItem.lastName == undefined ||
        this.dataItem.workOption == undefined ||
        this.dataItem.country == undefined ||
        this.dataItem.location == undefined ||
        this.dataItem.businessNature == undefined ||
        this.dataItem.email == undefined ||
        this.dataItem.phone == undefined ||
        this.dataItem.backCall == undefined
      ) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/emails/insurance`;
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
<style lang="scss" scoped>
</style>