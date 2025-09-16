<template>
  <div>
    <!-- sub header -->
    <div :style="{ backgroundImage: `url(${headerImage})` }" class="hidden md:block h-64 header-img text-white text-3xl pt-10 px-20 font-bold text-center justify-items-center items-center  inline-flex">
      Here is a non-binding investment analysis setting forth the projected income and all costs that are reasonably estimated to be incurred to establish and run this project based on the current market conditions and anticipated escalation.
    </div>
    <!-- end -->
    <div class="container mx-auto p-2 mb-6">
    <div class="grid md:grid-cols-12" style="background: #f5f5f5">
      <div class="col-span-2">
        <div>
          <div class="relative w-full inline-flex self-center">
            <svg
              class="text-red bg-gray-500 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40px"
              height="20px"
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
                  <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
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
              @change="changeCnv"
              class="mb-1 text-base font-bold rounded-2xl border-2 border-gray-300 text-gray-600 h-9 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>Select Country</option>
              <option v-for="country in countries" :key="country._id">{{ country.name }}</option>
            </select>
          </div>
        </div>
      </div>

      <div
        style="color: #10914e"
        class="col-span-6 font-bold mb-2 justify-center items-center content-center grid text-2xl"
      >{{record.title}}</div>
      <div class="col-span-4 flex items-center">
        <client-only>
          <date-picker
            style="color: #000"
            class="date-pkr"
            placeholder="Select Date"
            format="yyyy-MM-dd"
            @input="fetchMarketWatch"
            v-model="date_today"
          />
        </client-only>
      </div>
    </div>

    <!-- section 1 -->

    <!-- end -->
    <div
      class="grid md:grid-cols-12 gap-2 bg-white p-4 bg-img opacity-75"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div
        class="p-4 text-base md:col-span-8 rounded-3xl mt-2 opacity-80"
        style="background: #EFEBE9"
      >
        <div
          class="overflow-y-scroll"
          style="max-height: 1800px; color: #000"
          v-html="record.content"
        ></div>


      </div>
      <div class="md:p-4 text-base md:col-span-4">
        <!-- international market watch -->
        <div class="mb-4">
          <div
            class="mb-2 justify-center items-center content-center grid font-bold text-xl text-orange-600"
          >INTERNATIONAL MARKET WATCH</div>
          <!-- table starts here -->
          <div class="overflow-y-scroll" style="max-height: 400px">
            <table class="w-full text-sm md:text-base text-left">
              <thead
              style="background-color: #10914e"
                class="sticky top-0 font-bold text-base uppercase text-white"
              >
                <tr>
                  <th scope="col" class="py-3 px-6 font-bold">Zone</th>
                  <th scope="col" class="py-3 px-6 font-bold">Unit</th>
                  <th scope="col" class="py-3 px-6 font-bold">Price</th>
                </tr>
              </thead>
              <tbody style="background: #abed9d">
                <tr
                  :class="index % 2 != 0 ? 'bg-gray-300' : ''"
                  class="border-b dark:bg-gray-800 dark:border-gray-900"
                  v-for="(watchrecord,index) in interWatch"
                  :key="watchrecord._id"
                >
                  <th class="py-2 px-6">{{ watchrecord.watchregion }}</th>
                  <td class="py-2 px-6">{{ watchrecord.unit }}</td>
                  <td
                    class="py-2 px-6"
                  >{{ countryCode }} {{(watchrecord.price * cnvRate).toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end of watch table -->
        </div>
        <!-- end -->

        <!-- market watch -->
        <div class="mb-4">
          <div
            class="mb-2 justify-center items-center content-center grid font-bold text-xl text-orange-600"
          >LOCAL MARKET WATCH</div>
          <!-- table starts here -->
          <div class="overflow-y-scroll" style="max-height: 400px">
            <table class="w-full text-sm md:text-base text-left">
              <thead
              style="background-color: #10914e"
                class="sticky top-0 font-bold text-white text-base uppercase text-white"
              >
                <tr>
                  <th scope="col" class="py-3 px-6 font-bold">Zone</th>
                  <th scope="col" class="py-3 px-6 font-bold">Unit</th>
                  <th scope="col" class="py-3 px-6 font-bold">Price</th>
                </tr>
              </thead>
              <tbody style="background: #abed9d">
                <tr
                  :class="index % 2 != 0 ? 'bg-gray-300' : ''"
                  class="border-b dark:bg-gray-800 dark:border-gray-900"
                  v-for="(watchrecord,index) in marketWatch"
                  :key="watchrecord._id"
                >
                  <th class="py-2 px-6">{{ watchrecord.name }}</th>
                  <td class="py-2 px-6">{{watchrecord.unit}}</td>
                  <td
                    class="py-2 px-6"
                  >{{ countryCode }} {{(watchrecord.price * cnvRate).toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end of watch table -->
        </div>
        <!-- end of market watch-->

        <!-- farming season -->
        <div>
          <div
            class="mb-2 justify-center items-center content-center grid font-bold text-xl text-orange-600"
          >LOCAL FARMING SEASON</div>
          <!-- start of seasons table -->
          <div class="overflow-y-scroll" style="max-height: 500px">
            <table class="w-full text-sm md:text-base text-left">
              <thead
              style="background-color: #10914e"
                class="border-b sticky top-0 font-bold text-base uppercase dark:text-gray-400 text-white"
              >
                <tr>
                  <th scope="col" class="py-3 px-6 font-bold">Zone</th>
                  <th scope="col" class="py-3 px-6 font-bold">Start</th>
                  <th scope="col" class="py-3 px-6 font-bold">Harvest</th>
                </tr>
              </thead>
              <tbody style="background: #abed9d">
                <tr
                  :class="index % 2 != 0 ? 'bg-gray-300' : ''"
                  class="border-b dark:bg-gray-800 dark:border-gray-900"
                  v-for="(season,index) in seasons"
                  :key="season._id"
                >
                  <th class="py-2 px-6">{{ season.name }}</th>
                  <td class="py-2 px-6">{{ season.start }}</td>
                  <td class="py-2 px-6">{{season.end }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end of seasons table -->
        </div>
        <!-- end -->
      </div>
    </div>

    <!-- div 1 -->
    <div class="grid md:grid-cols-12 gap-2 mt-4 bg-white">
      <div class="bg-white text-base md:col-span-8">
        <!-- <div v-html="record.content"></div> -->

        <div>
          <div class="mb-2 p-4" style="background: #10914e">
            <span
              class="font-bold text-base mt-1 text-white"
            >Please fill the form below and submit with the number of units / acres you want. We will get back to you with more details concerning the project!</span>
          </div>

          <!-- start of inputs section -->

          <div v-if="dataItem.country != 'Select Country'">
            <div style="background: #f7d7c2" class="p-1 mb-2">
              <div class="grid md:grid-cols-3 mx-2 my-4 gap-2">
                <!-- How can you work wit -->
                <div class="grid grid-cols-1 mt-2">
                  <div class="col-span-2">
                    <label class="block mb-2 font-bold">Zone</label>
                    <div>
                      <div class="relative w-full inline-flex self-center">
                        <svg
                          class="text-white bg-gray-500 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
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
                          v-model="dataItem.zone"
                          @change="changeZone"
                          class="text-base font-bold rounded border-2 border-gray-500 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        >
                          <option></option>
                          <option v-for="zone in zones" :key="zone._id">{{ zone.name }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end -->

                <!-- one -->
                <div class="grid grid-cols-1 mt-2">
                  <div class="col-span-2">
                    <label class="block mb-2 font-bold">Full Name</label>
                    <input
                      v-model="dataItem.fullName"
                      type="text"
                      class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                <!-- end -->

                 <!-- one -->
                 <div class="grid grid-cols-1 mt-2">
                  <div class="col-span-2">
                    <label class="block mb-2 font-bold">Phone No</label>
                    <input
                      v-model="dataItem.phoneNo"
                      type="text"
                      class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                <!-- end -->


              </div>

              <div class="grid md:grid-cols-3 mx-2 my-4 gap-2">
               
                <!-- two -->
                <div class="grid grid-cols-1 mt-2">
                  <div class="col-span-2">
                    <label class="block mb-2 font-bold">Address</label>
                    <input
                      v-model="dataItem.address"
                      type="text"
                      class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                <!-- end -->

                <!-- one -->
                <div class="grid grid-cols-1 mt-2">
                  <div class="col-span-2">
                    <label class="block mb-2 font-bold">Physical Location</label>
                    <input
                      v-model="dataItem.physicalLocation"
                      type="text"
                      class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                <!-- end -->

                 <!-- one -->
                 <div class="grid grid-cols-1 mt-2">
                  <div class="col-span-2">
                    <label class="block mb-2 font-bold">Email Address</label>

                    <input
                      v-model="dataItem.email"
                      type="text"
                      class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                <!-- end -->
              </div>

              <div class="grid md:grid-cols-3 mx-2 my-4 gap-2">
               

                <!-- two -->
                <div class="grid grid-cols-1 mt-2">
                  <div class="col-span-2">
                    <label
                      v-if="record.CattleProject == 'Y'"
                      class="block mb-2 font-bold"
                    >How many cattle?</label>

                    <label
                      v-if="record.CattleProject == 'N'"
                      class="block mb-2 font-bold"
                    >How many Acres?</label>

                    <input
                      v-model="acres"
                      @input="fetchCosts(farmingZone._id)"
                      type="number"
                      class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                <!-- end -->

                  <!-- two -->
                <div class="grid grid-cols-1 mt-2">
                  <div class="col-span-2">
                    <label class="block mb-2 font-bold">Expected Bags / Acre</label>
                    <input
                      v-model="bags"
                      :max="maxbags"
                      type="number"
                      @input="() => { if(bags > maxbags) { this.bags = maxbags }}"
                      class="w-full border-2 bags-input border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
                    />

                    <span style="color: red">Maximum number of bags is: {{maxbags}}</span>
                  </div>
                </div>
                <!-- end -->

                <!-- three -->
                <div class="grid grid-cols-1 mt-2">
                  <div class="col-span-2">
                    <label class="block mb-2 font-bold">Select Currency</label>
                    <div>
                      <div class="relative w-full object-contain inline-flex self-center">
                        <svg
                          class="text-white bg-gray-500 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
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
                          v-model="dataItem.currency"
                          @change="changeCurrency"
                          class="text-base font-bold rounded border-2 border-gray-500 text-gray-600 h-10 w-full pl-5 md:pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                        >
                          <option></option>
                          <option v-for="country in countries" :key="country._id">{{ country.code }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end -->
                <!-- end -->
              </div>
            </div>

            <div>
              <span class="text-orange-600 text-xl font-bold">ESTIMATED PRODUCTION COSTS</span>
            </div>

            <div style="background: #f7d7c2">
              <table class="w-full text-sm md:text-base text-left">
                <thead
                style="background-color: #10914e"
                  class="text-xs md:text-sm  font-bold uppercase text-white"
                >
                  <tr>
                    <th scope="col" class="py-3 md:px-6">Item</th>
                    <th scope="col" class="py-3 md:px-6">Units</th>
                    <th scope="col" class="py-3 md:px-6">
                      <span v-if="record.CattleProject == 'N'">Cost Per Acre</span>
                      <span v-if="record.CattleProject == 'Y'">Cost Per Cattle</span>
                    </th>
                    <th scope="col" class="py-3 md:px-6">Total Budget</th>
                  </tr>
                </thead>
                <tbody style="background: #f7d7c2">
                  <tr
                    :class="index % 2 != 0 ? 'bg-gray-300' : ''"
                    class="border-b dark:bg-gray-800 dark:border-gray-900"
                    v-for="(cost,index) in costs"
                    :key="cost._id"
                  >
                    <th
                      scope="row"
                      class="py-2 px-3 font-medium whitespace-nowrap dark:text-white"
                    >{{ cost.name }}</th>
                    <td class="py-2 md:px-6">{{ acres }}</td>
                    <td
                      class="py-2 md:px-6"
                    >{{ parseInt(cost.acreCost * cnvRate).toLocaleString() }}</td>
                    <td class="py-2 md:px-6">
                      {{
                      parseInt(cost.acreCost * acres * cnvRate).toLocaleString()
                      }}
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      class="py-2 md:px-3 font-medium whitespace-nowrap dark:text-white"
                    ></th>
                    <td class="py-2 md:px-6"></td>
                    <td class="py-2 md:px-6">
                      <span class="font-bold">
                        {{ countryCode }}
                        {{ totalAcresCost.toLocaleString() }}
                      </span>
                    </td>
                    <td class="py-2 md:px-6">
                      <span class="font-bold">
                        {{ countryCode }}
                        {{ totalPartnerCost.toLocaleString() }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="flex justify-end" style="margin-bottom: 30px">
              <button
                @click="printPdf"
                type="button"
                class="mt-2 md:mr-1 py-2 px-6 mr-3 text-blue-600 rounded-xl font-bold text-white focus:outline-none"
              >Print Pdf</button>

              <button
                @click="submitData"
                type="button"
                class="mt-2 md:mr-1 py-2 px-6 mr-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-white focus:outline-none"
              >Submit</button>
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
              class="bg-blue-100 mt-2 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
              role="alert"
            >
              <p class="font-bold">Message sent</p>
              <p class="text-sm">Thanks for your message</p>
            </div>
            <!-- end -->

            <!-- error message -->
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
            <!-- end -->
          </div>
          <!-- end of inputs section -->

          <div v-else role="alert" class="mt-2">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Country Not Selected</div>
            <div
              class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
            >
              <p>Please Select Country to see the expected production cost</p>
            </div>
          </div>
        </div>

        <div v-if="dataItem.zone && bags" class="grid md:grid-cols-12 gap-2">
          <div class="col-span-12 md:col-span-6">
            <span class="font-bold text-orange-500">Estimated Yield</span>
            <div style="background: #abed9d" class="p-2">
              <table class="w-full text-sm md:text-base text-left border-2 border-white">
                <thead style="background: #abed9d" class="opacity-80 font-bold text-xs uppercase">
                  <tr class="border-b-2 border-white">
                    <th
                      scope="col"
                      class="py-3 px-6 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Acre</th>
                    <th
                      scope="col"
                      class="py-3 px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Bag/Acre</th>
                    <th
                      scope="col"
                      class="py-3 px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Unit/Bag</th>
                    <th
                      scope="col"
                      class="py-3 px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Total Bags</th>
                  </tr>
                </thead>
                <tbody style="background: #abed9d">
                  <tr class="opacity-80 border-b font-bold dark:bg-gray-800 dark:border-gray-900">
                    <th
                      class="py-2 px-6 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >{{acres.toLocaleString()}}</th>
                    <td
                      class="py-2 px-6 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >{{bags.toLocaleString()}}</td>
                    <td
                      class="py-2 px-6 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >{{projectUnit}}</td>
                    <td
                      class="py-2 px-6 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >{{(bags * acres).toLocaleString()}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-span-12 md:col-span-6">
            <span class="font-bold text-orange-500">Expected Profit / Loss</span>

            <div style="background: #abed9d" class="p-2">
              <table class="w-full text-sm md:text-base text-left border-2 border-white">
                <thead style="background: #abed9d" class="opacity-80 text-xs uppercase">
                  <tr class="border-b-2 border-white">
                    <th
                      scope="col"
                      class="py-3 md:px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Operations Cost</th>
                    <th
                      scope="col"
                      class="py-3 md:px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Gross Income</th>
                    <th
                      scope="col"
                      class="py-3 md:px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Net Income</th>
                  </tr>
                </thead>
                <tbody style="background: #abed9d">
                  <tr class="opacity-80 border-b font-bold dark:bg-gray-800 dark:border-gray-900">
                    <th
                      style="font-size: 14px; font-weight: bold"
                      class="py-2 md:px-2 border-r-2 border-white"
                    >{{ totalPartnerCost.toLocaleString() }}</th>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >{{(zonalPrice * cnvRate * acres * bags).toLocaleString()}}</td>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >{{((zonalPrice * cnvRate * acres * bags) - totalPartnerCost).toLocaleString() }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-else role="alert" class="mt-2">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Zone Not Selected</div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Yield is not estimated; indicate estimated bags per acres to see the profit and loss analysis.</p>
          </div>
        </div>

        <div class="inline-block mt-2">
          <b>Disclaimer:</b> We do not guarantee the attainment of the above yield and profit. Our analysis report is based on the best practices and the current market prices.
        </div>

        <div class="mt-2">
          <img
            :src="`${imageUrl}/uploads/projects/${record.coverImage}`"
            alt
            class="w-full object-fill product_image"
          />
        </div>

        <!-- farming procedure -->
        <div class="mt-2">
          <div
            class="col-span-6 text-orange-500 font-bold mb-2 justify-center items-center content-center grid text-2xl"
          >Farming procedure</div>
          <div class="md:grid md:grid-cols-2">
            <div class="p-2">
              <div style="color: #000" v-html="record.sec_one"></div>
            </div>
            <div class="p-2">
              <div style="color: #000" v-html="record.sec_two"></div>
            </div>
          </div>
        </div>
        <!-- end of farming procedure -->

        <!-- products loops -->
        <div class="grid md:grid-cols-2  gap-2 py-4 mt-2">
          <div
            class="p-2"
            v-for="(image, index) in record.otherImages"
            :key="index"
          >
            <img
              :src="`${imageUrl}/uploads/projects/${image}`"
              alt
              class="w-full object-cover product_image"
            />
          </div>
        </div>
        <!-- end of products loop -->
      </div>


      <div
        class="p-2 md:col-span-4 p-6 rounded-3xl mt-4 mb-2 mr-4"
        style="background: #E0E0E0;"
      >
      <!-- insurance -->
      <div>
        <div
          class="mb-2 justify-center items-center content-center grid text-xl font-bold text-orange-600"
        >INSURANCE & FUNDING</div>
        <div
          class="overflow-y-scroll"
          style="max-height: 1650px; color: #000"
          v-html="record.insurance"
        ></div>
      </div>
      <!-- end -->

      <!-- related projects -->
       
      <div v-if="relatedProjects.length >= 1" class="mt-4">
        <div
          class="mb-2 justify-center items-center content-center grid text-xl font-bold text-orange-600"
        >RELATED PROJECTS</div>
        <div  style="max-height: 1000px;" class="overflow-y-scroll">
        <div
          style="background: #10914e"
          v-for="(project, index) in relatedProjects"
          :key="index"
          class="text-white"
        >
          <div v-if="project != null || project != undefined">
            <nuxt-link :to="`/projects/${project.url}`">
              <div class="grid md:grid-cols-12 border-b-2">
                <div class="col-span-4">
                  <img
                    :src="`${imageUrl}/uploads/projects/${project.coverImage}`"
                    alt
                    style="height: 100px; width: 100px"
                    class="w-full object-cover p-2"
                  />
                </div>
                <div
                  class="col-span-8 text-lg font-bold text-white flex items-center"
                >{{ project.title }}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
        </div>
      </div>
      <!-- end -->

      </div>
    </div>
    <!-- end of div 1 -->
  </div>
  </div>

</template>


<script>
import jsPDF from "jspdf";
import "jspdf-autotable";
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
import Product from "@/components/product.vue";
export default {
  components: {
    Product
  },
  computed: {
    ...mapGetters(["imageUrl"]),
    totalAcresCost() {
      let total = 0;
      let farmAcres = this.acres;
      let rate = 1;
      rate = this.cnvRate;
      if (typeof this.costs != "undefined" && this.costs.length > 0) {
        return this.costs
          .map(item => {
            const amount = item.acreCost * rate;
            total = +amount;
            return total;
          })
          .reduce((val, a) => {
            return val + a;
          });
      } else {
        return total;
      }
    },
    totalPartnerCost() {
      let total = 0;
      let farmAcres = this.acres;
      let rate = 1;
      rate = this.cnvRate;
      if (typeof this.costs != "undefined" && this.costs.length > 0) {
        return this.costs
          .map(item => {
            const amount = item.acreCost * rate * farmAcres;
            total = +amount;
            return total;
          })
          .reduce((val, a) => {
            return val + a;
          });
      } else {
        return total;
      }
    }
  },
  data() {
    return {
      date_today: new Date(),
      bgImage: require('~/assets/images/bg.jpg'),
      headerImage: require('~/assets/images/orange-bg.png'),
      zoneName: "",
      zonalPrice: 0,
      selectedZone: {},
      selectedCountry: {},
      farmingZone: {},
      marketWatch: [],
      seasons: [],
      zones: [],
      costs: [],
      cnvRate: 1,
      projectUnit: "",
      maxbags: 0,
      countryCode: "USD",
      dataItem: { country: "Select Country" },
      loader: false,
      acres: 1,
      bags: null,
      category: {},
      priceFilter: null,
      alcoholFilter: null,
      sizeFilter: null,
      filterCategory: null,
      activeCategory: null,
      isOpen: false,
      successMsg: false,
      emailError: false,
      formError: false
    };
  },
  head() {
    const meta = this.meta || {};
    return {
      title: `jubilant Afro Farms - Projects`,
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
    const query = params.url;
    const url = `/api/projects/${query}`;

    const costsUrl = `/api/project/cost/by/url/${query}`;

    const servicesUrl = `/api/projects/query/active`;

    const countriesUrl = `/api/countries`;

    let today = new Date();
    const day = `${today.getDate()}`.padStart(2, "0")
    const month = `${today.getMonth() + 1}`.padStart(2, "0")

    const year = today.getFullYear();

    const currentDate = `${year}-${month}-${day}`;
    // const currentDate = '2022-9-01';

    const watchUrl = `/api/international/market/watch/query/by/date/url/${query}/${currentDate}`;

    try {
      const { data } = await http.get(url);

      const { data: servicesData } = await http.get(servicesUrl);

      const { data: costsData } = await http.get(costsUrl);

      const { data: countriesData } = await http.get(countriesUrl);

      // const internData = await http.post()

      const { data: interData } = await http.get(watchUrl);

      const projects = servicesData.records;

      const countries = countriesData.records;

      const interWatch = interData.records;

      const { record, meta, relatedProjects } = data;

      return {
        record,
        relatedProjects,
        interWatch,
        projects,
        countries,
        meta
      };
    } catch (err) {
      return {
        record: {},
        relatedProjects: [],
        interWatch: [],
        projects: [],
        countries: [],
        meta: {}
      };
    }
  },
  methods: {
    limitBags() {
      document.getElementsByClassName('bags-input')[0].oninput = function () {
        var max = parseInt(this.maxbags);
        if(max > 0) {
          if (parseInt(this.value) > max) {
            this.value = max; 
        }
        }
       
    }
    },
    changeCnv() {
      const country = this.dataItem.country;
      const project = this.record._id;
      if (country != "Select Country") {
        const selectedCountry = this.countries.find(record => {
          return record.name == country;
        });
        this.selectedCountry = selectedCountry;
        this.cnvRate = selectedCountry.cnvRate;
        this.countryCode = selectedCountry.code;
        this.fetchMarketWatch(selectedCountry.url);
        this.fetchSeasons(selectedCountry.url);
        this.fetchZones(selectedCountry._id);
        this.fetchIntWatch();
      }
    },
    changeZone() {
      const zone = this.dataItem.zone;
      if (zone != "") {
        const selectedZone = this.zones.find(record => {
          return record.name == zone;
        });

        this.farmingZone = selectedZone;
        this.zoneName = selectedZone.name;

        const zoneId = selectedZone._id;
        this.fetchSingleZone(zoneId);
        this.fetchCosts(zoneId);
        this.fetchUnitSetup(zoneId);
        this.fetchZonalPrice(zoneId);
      }
    },
    changeCurrency() {
      const code = this.dataItem.currency;
      if (code != "") {
        const selectedCountry = this.countries.find(record => {
          return record.code == code;
        });
        this.countryCode = code;
        this.cnvRate = selectedCountry.cnvRate;
      }
    },
    async fetchSingleZone(zoneId) {
      if (zoneId) {
        try {
          const url = `/api/market/watch/zone/select/${this.record._id}/${zoneId}`;

          const self = this;
          this.loader = true;
          await http.get(url).then(res => {
            if (res.data.state) {
              if (res.data.record) {
                self.selectedZone = res.data.record;
              } else {
                self.selectedZone = {};
              }
            }
            self.loader = false;
          });
        } catch (err) {
          self.loader = false;
          console.log("error occured", err);
        }
      }
    },
    async fetchCosts(zoneId) {
      if (zoneId) {
        // find country
        let countryName = this.dataItem.country;
        const selectedCountry = this.countries.find(record => {
          return record.name == countryName;
        });
        // end
        try {
          const url = `/api/cost/definition/fetch/costs/web/${this.record._id}/${selectedCountry._id}/${zoneId}/${this.acres}`;

          const self = this;
          this.loader = true;
          await http.get(url).then(res => {
            if (res.data.state) {
              if (res.data.records) {
                self.costs = res.data.records;
              } else {
                self.costs = [];
              }
            }
            self.loader = false;
          });
        } catch (err) {
          self.loader = false;
          console.log("error occured", err);
        }
      }
    },
    async fetchUnitSetup(zoneId) {
      if (zoneId) {
        // find country
        let countryName = this.dataItem.country;
        const selectedCountry = this.countries.find(record => {
          return record.name == countryName;
        });
        // end
        try {
          const url = `/api/unit/setup/get/definition/${this.record._id}/${selectedCountry._id}/${zoneId}`;

          const self = this;
          this.loader = true;
          await http.get(url).then(res => {
            if (res.data.state) {
              if (res.data.record) {
               self.projectUnit = res.data.record.unit;
               self.maxbags = res.data.record.maxbags;
              } 
            }
            self.loader = false;
          });
        } catch (err) {
          self.loader = false;
          console.log("error occured", err);
        }
      }
    },
    async fetchSeasons(country) {
      if (country) {
        try {
          const url = `/api/seasons/query/by/${country}/${this.record.url}`;

          const self = this;
          this.loader = true;
          await http.get(url).then(res => {
            if (res.data.state) {
              if (res.data.zones.length >= 1) {
                self.seasons = res.data.zones;
              } else {
                self.seasons = [];
              }
            }
            self.loader = false;
          });
        } catch (err) {
          self.loader = false;
          console.log("error occured", err);
        }
      }
    },
    async fetchMarketWatch() {
      this.fetchLocalWatch();
      this.fetchIntWatch();
    },
    async fetchLocalWatch() {
      const country = this.dataItem.country;
      const selectedCountry = this.countries.find(record => {
        return record.name == country;
      });
      this.selectedCountry = selectedCountry;

      if (country != "Select Country") {
        try {
          const url = `/api/market/watch/find/by/date/web`;
          const self = this;
          const details = {
            country: selectedCountry._id,
            project: self.record._id,
            date: self.date_today
          };

          this.loader = true;
          await http.post(url, details).then(res => {
            if (res.data.state) {
              if (res.data.records.length >= 1) {
                self.marketWatch = res.data.records;
              } else {
                self.marketWatch = [];
              }
            }
            self.loader = false;
          });
        } catch (err) {
          self.loader = false;
          console.log("error occured", err);
        }
      }
    },
    async fetchIntWatch() {
      try {
        let today = new Date(this.date_today);
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();

        const currentDate = `${year}-${month}-${day}`;
        const url = `/api/international/market/watch/query/by/date/url/${this.record.url}/${currentDate}`;
        const self = this;
        this.loader = true;
        await http.get(url).then(res => {
          if (res.data.state) {
            if (res.data.records.length >= 1) {
              self.interWatch = res.data.records;
            } else {
              self.interWatch = [];
            }
          }
          self.loader = false;
        });
      } catch (err) {
        self.loader = false;
        console.log("error occured", err);
      }
    },
    async fetchZonalPrice(zoneId) {
      const country = this.dataItem.country;
      const selectedCountry = this.countries.find(record => {
        return record.name == country;
      });
      this.selectedCountry = selectedCountry;

      if (country != "Select Country") {
        try {
          const url = `/api/market/watch/find/selected/zonal/price`;
          const self = this;
          const details = {
            country: selectedCountry._id,
            project: self.record._id,
            zone: zoneId,
            date: self.date_today
          };

          this.loader = true;
          await http.post(url, details).then(res => {
            if (res.data.state) {
              if (res.data.record) {
                self.zonalPrice = res.data.record.price;
              } 
            }
            self.loader = false;
          });
        } catch (err) {
          self.loader = false;
          console.log("error occured", err);
        }
      }
    },
    async fetchZones(id) {
      const self = this;
      const url = `/api/project/zones/query/data/${id}/${self.record._id}`;
      await http
        .get(url)
        .then(res => {
          if (res.data.state) {
            self.zones = res.data.zones;
          } else {
            self.zones = [];
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });
    },
    async submitData() {
      const details = this.dataItem;
      if (
        this.dataItem.sirName == undefined ||
        this.dataItem.otherNames == undefined ||
        this.dataItem.country == undefined ||
        this.dataItem.phoneNo == undefined ||
        this.dataItem.address == undefined ||
        this.dataItem.physicalLocation == undefined
      ) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/project/request`;
          let details = this.dataItem;
          details.project = this.record._id;
          details.costs = this.costs;
          details.acres = this.acres;
          const self = this;
          this.loader = true;
          await http.post(url, details).then(res => {
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
    printPdf() {
      const shopName = "Jubilant Afro Farms";
      const self = this;
      var doc = new jsPDF({ compress: true });
      var totalPagesExp = "{total_pages_count_string}";
      // var pageHeight =
      //   doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
      var pageWidth =
        doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

      var img = new Image();
      img.src = require('~/assets/images/jubilantafrofarms-logo.png');
      doc.addImage(img, "png", 10, 5, 45, 40);

      doc.setFontSize(15);
      doc.setTextColor(0, 0, 0);
      doc.setFont("Georgia, serif");
      doc.text(
        "Crescent Business Park, Westland Nairobi, Kenya. 8th Floor",
        pageWidth - 10,
        20,
        "right"
      );
      doc.text("Website: www.jubilantafrofarms.com", pageWidth - 10, 25, "right");
      doc.text("Contact: +254 752 940 909", pageWidth - 10, 30, "right");
      doc.text("Email: info@jubilantafrofarms.com", pageWidth - 10, 35, "right");

      //Setting Items Title:
      doc.setFontSize(15);
      const fullName = self.dataItem.sirName + "  " + self.dataItem.otherNames;

      doc.line(5, 40, pageWidth - 5, 40); // Top Line

      doc.setFontSize(12);

      doc.text(
        "Selected Country: " + self.selectedCountry.name,
        pageWidth / 2,
        45,
        "center"
      );

      doc.setTextColor(0, 0, 0);
      doc.setFont("Georgia, serif");
      doc.text("Name : " + fullName, 15, 50);
      doc.text("Phone Number: " + self.dataItem.phoneNo, 15, 55);
      doc.text("Email Address: " + self.dataItem.email, 15, 60);
      doc.text("Address: " + self.dataItem.address, 15, 65);
      doc.text("Physical Location: " + self.dataItem.physicalLocation, 15, 70);

      doc.line(5, 75, pageWidth - 5, 75); // Top Line

      doc.setFontSize(14);
      doc.text("Project: " + self.record.title, 15, 85);
      doc.text("Acres: " + self.acres, 15, 90);
      doc.text("Zone: " + self.zoneName, 15, 95);
      doc.setFontSize(12);

      /*
-------------------------------------------------------------------------------
              BEGINNING OF ESTIMATED PRODUCTION COST TABLE
 -----------------------------------------------------------------------------
*/

      doc.text("ESTIMATED PRODUCTION COSTS", pageWidth / 2, 100, "center");

      function headRowsItemDetails() {
        return [
          {
            item: "Item",
            unit: "Units",
            cost: "Cost",
            total: "Total"
          }
        ];
      }

      const itemDetails = [];
      const estimateData = self.costs;
      for (const costItem of estimateData) {
        // const i = tableData.indexOf(note);
        const cost = costItem.acreCost * self.cnvRate;
        const totalBudget = costItem.acreCost * self.acres * self.cnvRate;
        const itemDetail = {
          item: costItem.costitem.name,
          unit: self.acres,
          cost: cost.toLocaleString(),
          total: totalBudget.toLocaleString()
        };

        itemDetails.push(itemDetail);
      }

      const totalAmount = {
        cost: self.countryCode + " " + self.totalAcresCost.toLocaleString(),
        total: self.countryCode + " " + self.totalPartnerCost.toLocaleString()
      };

      itemDetails.push(totalAmount);

      doc.autoTable({
        head: headRowsItemDetails(),
        body: itemDetails,
        theme: "grid",
        headStyles: { fillColor: "#808080" },
        bodyStyles: {
          textColor: "#000000",
          fontSize: 11
        },
        tableWidth: pageWidth - 10,
        columnStyles: {
          total_amount: {
            halign: "left",
            fontStyle: "bold"
          },
          Price: {
            fontStyle: "bold"
          },
          styles: {
            font: "Tahoma",
            fontSize: 11
          }
        },

        margin: { left: 5 },
        didDrawPage: function(data) {
          // Footer
          var str = "Page";
          var pageCount = doc.internal.getNumberOfPages();
          let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber;
          if (typeof doc.putTotalPages === "function") {
            str = "Page " + pageCurrent + " of " + pageCount;
          }
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
          // jsPDF 1.4+ uses getWidth, <1.4 uses .width
          var pageSize = doc.internal.pageSize;
          var pageHeight = pageSize.height
            ? pageSize.height
            : pageSize.getHeight();
          doc.text(str, data.settings.margin.right, pageHeight - 10);
        },

        startY: 110
      });

      /*
-------------------------------------------------------------------------------
              END OF ESTIMATED PRODUCTION COST TABLE
 -----------------------------------------------------------------------------
*/

      /*
-------------------------------------------------------------------------------
              BEGINNING OF ESTIMATED PRODUCE TABLE
 -----------------------------------------------------------------------------
*/

      doc.text(
        "ESTIMATED PRODUCE",
        pageWidth / 2,
        doc.autoTable.previous.finalY + 10,
        "center"
      );

      function produceItemDetails() {
        return [
          {
            acre: "Acre",
            bags: "Bags",
            unit: "Unit",
            totalBags: "Total Bags"
          }
        ];
      }

      const produceDetails = [];

      const produceDetail = {
        acre: self.acres,
        bags: self.selectedZone.bags,
        unit: self.selectedZone.unit,
        totalBags: self.selectedZone.bags * self.acres
      };

      produceDetails.push(produceDetail);

      doc.autoTable({
        head: produceItemDetails(),
        body: produceDetails,
        theme: "grid",
        headStyles: { fillColor: "#808080" },
        bodyStyles: {
          textColor: "#000000",
          fontSize: 11
        },
        tableWidth: pageWidth - 10,
        columnStyles: {
          total_amount: {
            halign: "left",
            fontStyle: "bold"
          },
          Price: {
            fontStyle: "bold"
          },
          styles: {
            font: "Tahoma",
            fontSize: 11
          }
        },

        margin: { left: 5 },
        didDrawPage: function(data) {
          // Footer
          var str = "Page";
          var pageCount = doc.internal.getNumberOfPages();
          let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber;
          if (typeof doc.putTotalPages === "function") {
            str = "Page " + pageCurrent + " of " + pageCount;
          }
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
          // jsPDF 1.4+ uses getWidth, <1.4 uses .width
          var pageSize = doc.internal.pageSize;
          var pageHeight = pageSize.height
            ? pageSize.height
            : pageSize.getHeight();
          doc.text(str, data.settings.margin.right, pageHeight - 10);
        },

        startY: doc.autoTable.previous.finalY + 15
      });

      /*
-------------------------------------------------------------------------------
             END  OF ESTIMATED PRODUCE TABLE
 -----------------------------------------------------------------------------
*/

      /*
-------------------------------------------------------------------------------
              BEGINNING OF EXPECTED PROFIT / LOSS TABLE
 -----------------------------------------------------------------------------
*/

      doc.text(
        "EXPECTED PROFIT / LOSS",
        pageWidth / 2,
        doc.autoTable.previous.finalY + 10,
        "center"
      );

      function profitItemDetails() {
        return [
          {
            operationsCost: "Operations Cost",
            grossIncome: "Gross Income",
            netIncome: "Net Income"
          }
        ];
      }

      const profitDetails = [];

      const grossIncome =
        self.selectedZone.price * self.acres * self.selectedZone.bags * self.cnvRate;
      const netIncome = grossIncome - self.totalPartnerCost;

      const profitDetail = {
        operationsCost: self.totalPartnerCost.toLocaleString(),
        grossIncome: grossIncome.toLocaleString(),
        netIncome: netIncome.toLocaleString()
      };

      profitDetails.push(profitDetail);

      doc.autoTable({
        head: profitItemDetails(),
        body: profitDetails,
        theme: "grid",
        headStyles: { fillColor: "#808080" },
        bodyStyles: {
          textColor: "#000000",
          fontSize: 11
        },
        tableWidth: pageWidth - 10,
        columnStyles: {
          total_amount: {
            halign: "left",
            fontStyle: "bold"
          },
          Price: {
            fontStyle: "bold"
          },
          styles: {
            font: "Tahoma",
            fontSize: 11
          }
        },

        margin: { left: 5 },
        didDrawPage: function(data) {
          // Footer
          var str = "Page";
          var pageCount = doc.internal.getNumberOfPages();
          let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber;
          if (typeof doc.putTotalPages === "function") {
            str = "Page " + pageCurrent + " of " + pageCount;
          }
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
          // jsPDF 1.4+ uses getWidth, <1.4 uses .width
          var pageSize = doc.internal.pageSize;
          var pageHeight = pageSize.height
            ? pageSize.height
            : pageSize.getHeight();
          doc.text(str, data.settings.margin.right, pageHeight - 10);
        },

        startY: doc.autoTable.previous.finalY + 15
      });

      /*
-------------------------------------------------------------------------------
             END  OF EXPECTED PROFIT / LOSS TABLE
 -----------------------------------------------------------------------------
*/

      var pageSize = doc.internal.pageSize;
      var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();

      const footerText =
        "Disclaimer:  We do not guarantee the attainment of the above yield and profit. Our analysis report is based on the best practices and the current market prices.";

      function headFooter() {
        return [
          {
            count: ""
          }
        ];
      }

      const footerArray = [];

      const footTextString = {
        count: footerText
      };
      footerArray.push(footTextString);

      doc.autoTable({
        head: headFooter(),
        body: footerArray,
        theme: "plain",
        columnStyles: {
          styles: {
            font: "Tahoma",
            fontSize: 3
          }
        },
        margin: { left: 10 },
        startY: doc.autoTable.previous.finalY + 10
      });

      // Total page number plugin only available in jspdf v1.0+
      if (typeof doc.putTotalPages === "function") {
        doc.putTotalPages(totalPagesExp);
      }
      // doc.save("Sold-products-report.pdf");
      doc.output("dataurlnewwindow");
    }
  }
};
</script>


<style scoped>
.bg-img {
  /* background-image: url(~/assets/autumn-tree.jpg); */
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}

.header-img {
  /* background-image: url(~/assets/autumn-tree.jpg); */
  background-repeat: no-repeat;
  background-size: cover;
}
</style>