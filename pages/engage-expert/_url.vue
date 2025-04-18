<template>
  <div class="container mx-auto md:px-80 px-2 lg:min-h-screen">
    <div class="bg-white mt-6 p-3">
      <div>
        <div class="bg-orange-600 text-white font-bold px-6 py-2">Engage Expert</div>
        <div>
          <div style="background: #E5E4E2" class="p-2">
            <table class="w-full text-sm md:text-base text-left border-2 border-white">
              <thead class="opacity-80 uppercase">
                <tr class="border-b-2 border-white">
                  <th scope="col" class="font-bold border-r-2 border-white">Title</th>
                  <th scope="col" class="font-bold border-r-2 border-white content-center">Info</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                  <td class="border-2 border-white">Expert No</td>
                  <td class="border-2 border-white">{{ record.serialNo }}</td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                  <td class="border-2 border-white">Age</td>
                  <td class="border-2 border-white">{{ record.age }}</td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                  <td class="border-2 border-white">Gender</td>
                  <td class="border-2 border-white">{{ record.gender }}</td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                  <td class="border-2 border-white">Country</td>
                  <td class="border-2 border-white">{{ record.selectedCountry }}</td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                  <td class="border-2 border-white">Zone</td>
                  <td class="border-2 border-white">{{ record.selectedZone }}</td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                  <td class="border-2 border-white">Location</td>
                  <td class="border-2 border-white">{{ record.location }}</td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                  <td class="border-2 border-white">Profession</td>
                  <td class="border-2 border-white">{{ record.profession }}</td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-900">
                  <td class="border-2 border-white">Crops</td>
                  <td class="border-2 border-white">{{ record.crops }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="font-bold text-base p-2">
            Please fill your details to engage
          </div>

          <div class="mt-4">
            <div>
              <input
                v-model="eventRecord.fullName"
                placeholder="Full Name"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div class="mt-4">
              <input
                v-model="eventRecord.email"
                placeholder="Email"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div class="mt-4">
              <input
                v-model="eventRecord.phone"
                placeholder="Phone No"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div class="md:grid md:grid-cols-3 gap-2">
              <div class="mt-4">
              <input
                v-model="eventRecord.age"
                placeholder="Age"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div class="mt-4">
              <div class="relative w-full inline-flex self-center">
                <svg
                  class="text-white bg-gray-400 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
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
                  v-model="gender"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Gender--</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div class="mt-4">
              <input
                v-model="eventRecord.nationality"
                placeholder="Nationality"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            </div>

         

            <div v-show="formError" role="alert" class="mt-2">
              <div
                class="bg-red-500 text-white font-bold rounded-t px-4 py-2"
              >Please fill all the required fields</div>
              <div
                class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
              >
                <p>All fields are mandatory!</p>
              </div>
            </div>

            <div class="mt-4">
              <button
                @click="engageExpert"
                type="button"
                class="mt-2 font-bold md:mr-1 py-2 px-8 mr-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-white focus:outline-none"
              >Engage Now</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  

<script>
import { http } from "~/common/index.js";
export default {
  computed: {},
  data() {
    return {
      eventRecord: {},
      formError: false,
      gender: "--Select Gender--"
    };
  },
  async asyncData({ params, error }) {
    const query = params.url;
    const url = `/api/experts/query/${query}`;
    try {
      const { data } = await http.get(url);
      const { record } = data;

      return {
        record
      };
    } catch (err) {
      return {
        record: {}
      };
    }
  },
  methods: {
    async engageExpert() {
      if (
        this.eventRecord.fullName == undefined ||
        this.eventRecord.email == undefined ||
        this.eventRecord.phone == undefined ||
        this.eventRecord.age == undefined ||
        this.eventRecord.nationality == undefined
      ) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/upcoming/events/join/event`;
          let details = this.eventRecord;
          details.serialNo = this.record.serialNo;
          details.gender = this.gender;

          const self = this;
          this.loader = true;
          await http.post(url, details).then(res => {
            if (res.data.state) {
              self.successMsg = true;
              self.loader = false;
              self.eventRecord = {};
              this.$router.push("/meeting-success");
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
  created() {}
};
</script>
  
  <style lang="scss" scoped>
</style>