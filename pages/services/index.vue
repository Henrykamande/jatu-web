<template>
  <div class="container mx-auto p-2 mb-6 relative">
    <div
      class="mb-2 justify-center items-center content-center grid text-2xl text-orange-600 font-bold"
    >Agri Support</div>
    <!-- div 1 -->
    <div class="grid md:grid-cols-12 gap-2">
      <div class="bg-white p-4 text-base md:col-span-8">
        <!-- sec one -->
        <div class="relative">
          <img class src="~assets/images/services/agri-tech.jpeg" alt />
          <div
            class="absolute bottom-0 text-white font-bold text-base md:text-3xl p-2"
          >We are a tech-enabled platform that makes farming easy and possible across borders in Africa</div>
        </div>
        <!-- end -->
      </div>
      <div class="bg-white p-2 md:col-span-4 p-2">
        <div>
          <!-- one sec -->
          <div class="grid md:grid-cols-12">
            <div class="col-span-12 md:col-span-3 flex md:block justify-center md:justify-start">
              <img
                src="~assets/images/services/sec-one.jpg"
                alt
                style="height: 100px; width: 100px"
                class="md:w-full rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl"
              />
            </div>
            <div class="col-span-12 md:col-span-9 px-2 items-center justify-center content-center">
              <div class="justify-center flex text-green-700 font-bold text-2xl">Partnership</div>
              <div>We Connect farm owners, investors and agricultural experts..</div>
              <div class="justify-center flex">
                <a
                  :href="`${imageUrl}/uploads/contracts/farming-contract.pdf`"
                  class="text-blue-600 inline-block flex"
                  target="_blank"
                >Read More</a>
              </div>
            </div>
          </div>
          <!-- end -->

          <!-- sec two-->
          <div class="grid md:grid-cols-12 mt-6 md:mt-12">
            <div class="col-span-12 md:col-span-3 flex md:block justify-center md:justify-start">
              <img
                src="~assets/images/services/sec-two.jpg"
                alt
                style="height: 100px; width: 100px"
                class="md:w-full rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl"
              />
            </div>
            <div class="col-span-12 md:col-span-9 px-2 items-center justify-center content-center">
              <div class="justify-center flex text-green-700 font-bold text-2xl">Project Analysis</div>
              <div>We Prepare investment analysis for agricultural projects..</div>
              <div class="justify-center flex text-blue-500">
                <nuxt-link to="/projects">Read More</nuxt-link>
              </div>
            </div>
          </div>
          <!-- end -->

          <!-- sec three -->
          <div class="grid md:grid-cols-12 mt-6 md:mt-12">
            <div class="col-span-12 md:col-span-3 flex md:block justify-center md:justify-start">
              <img
                src="~assets/images/services/e-com.jpeg"
                alt
                style="height: 100px; width: 100px"
                class="md:w-full rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl"
              />
            </div>
            <div class="col-span-12 md:col-span-9 px-2 items-center justify-center content-center">
              <div class="justify-center flex text-green-700 font-bold text-2xl">E-Commerce</div>
              <div>We link agricultural inputs, tools and products to farmers and consumers..</div>
              <div class="justify-center flex text-blue-500">Read More</div>
            </div>
          </div>
          <!-- end -->
        </div>
      </div>
    </div>
    <!-- end of div 1 -->

    <!-- who can join us -->
    <div class="grid md:grid-cols-12 gap-2">
      <div class="bg-white p-4 text-base md:col-span-8">
        <div
          class="flex justify-center text-lg md:text-3xl font-bold text-orange-500"
        >WHO CAN JOIN US?</div>
        <!-- farm owner -->
        <div class="grid md:grid-cols-12 mt-2 py-2">
          <div class="col-span-12 md:col-span-6">
            <img class src="~assets/images/services/sec-three.jpg" alt />
          </div>

          <div class="col-span-12 md:col-span-6 p-2">
            <div class="text-2xl font-bold text-green-700 flex justify-center">Farm Owner</div>

            <div class="text-green-700 md:text-lg">
              Are you a farm owner in any of the African Countries and you are looking to lease your farm
              or enter into a partnership agreement with another person for agricultural investments?
            </div>

            <div class="flex justify-center mt-2">
              <button class="py-2 px-6 bg-gray-300 rounded-3xl" @click="showfarmOwner">Get Started</button>
            </div>
          </div>
        </div>
        <!-- end -->

        <!-- farm owner form -->
        <div id="farm-owner" class="hidden">
          <div class="flex justify-center mt-2 font-bold">FARM OWNER DETAILS</div>
          <div class="flex justify-center mt-2">Personal Information</div>

          <div
            class="p-4 text-white font-bold"
            style="background: #10914e"
          >Please fill out the form below and submit it. We will get back to you within 24 hours with more details!</div>
          <div class="grid md:grid-cols-3 mx-2 my-4 bg-white gap-2">
            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Surname"
                v-model="farmOwner.sirName"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="First Name"
                v-model="farmOwner.firstName"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
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
                  v-model="farmOwner.gender"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Gender--</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Age"
                v-model="farmOwner.age"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
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
                    @change="changeCnv('owner')"
                    v-model="farmOwner.country"
                    class="mb-1 text-base font-bold rounded-2xl border-2 border-gray-300 text-gray-600 h-9 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  >
                    <option>--Select Country--</option>
                    <option v-for="country in countries" :key="country._id">{{ country.name }}</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1" v-if="farmOwner.country != '--Select Country--'">
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
                  v-model="farmOwner.zone"
                  placeholder="Select Gender"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Zone--</option>
                  <option v-for="zone in zones" :key="zone._id">{{ zone.name }}</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Location"
                v-model="farmOwner.location"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Sub Location"
                v-model="farmOwner.subLocation"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Postal Address"
                v-model="farmOwner.postalAddress"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Email Address"
                v-model="farmOwner.email"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Phone Number"
                v-model="farmOwner.phone"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->
          </div>
        </div>
        <!-- end of farm owner form -->

        <!-- farm owner form -->
        <div id="farm-details" class="hidden">
          <div class="flex justify-center mt-2 font-bold">FARM REGISTRATION DETAILS</div>
          <div class="grid md:grid-cols-3 mx-2 my-4 bg-white gap-2">
            <!-- input -->
            <div class="grid grid-cols-1" v-if="farmOwner.country != '--Select Country--'">
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
                  v-model="farmItem.zone"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Zone--</option>
                  <option v-for="zone in zones" :key="zone._id">{{ zone.name }}</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Location"
                v-model="farmItem.location"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Sub Location"
                v-model="farmItem.subLocation"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Farm Size (Acres / Hectors)"
                v-model="farmItem.farmSize"
                type="number"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
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
                  v-model="farmItem.contract"
                  placeholder="Type of contract you want to enter into"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Contract Type--</option>
                  <option>Lease</option>
                  <option>Sale</option>
                  <option>Partnership</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div
              class="grid grid-cols-1"
              v-if="(farmItem.contract == 'Lease' || farmItem.contract=='Partnership')"
            >
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
                  v-model="farmItem.tenure"
                  placeholder="Tenure"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Tenure--</option>
                  <option>One season</option>
                  <option>1 year</option>
                  <option>5 years</option>
                  <option>10 years</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Market price per acre"
                v-model="farmItem.acrePrice"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- select -->
            <div class="grid grid-cols-1">
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
                  v-model="farmItem.ownership"
                  placeholder="Ownership status"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Ownership--</option>
                  <option>individual</option>
                  <option>family</option>
                  <option>group</option>
                  <option>company</option>
                </select>
              </div>
            </div>
            <!-- end of select -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Type of crops grown there"
                v-model="farmItem.crops"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <div>Is water available for irrigation?</div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    v-model="farmItem.irrigation"
                    type="radio"
                    class="form-radio"
                    name="irrigation"
                    value="yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    v-model="farmItem.irrigation"
                    type="radio"
                    class="form-radio"
                    name="irrigation"
                    value="no"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <div>
                Is water for domestic use available in the farm?
                <label
                  class="inline-flex items-center"
                >
                  <input
                    v-model="farmItem.domesticWater"
                    type="radio"
                    class="form-radio"
                    name="domesticWater"
                    value="yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    v-model="farmItem.domesticWater"
                    type="radio"
                    class="form-radio"
                    name="domesticWater"
                    value="no"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <div>
                Is electricity available in the farm?
                <label class="inline-flex items-center">
                  <input
                    v-model="farmItem.electricity"
                    type="radio"
                    class="form-radio"
                    name="electricity"
                    value="yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    v-model="farmItem.electricity"
                    type="radio"
                    class="form-radio"
                    name="electricity"
                    value="no"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <!-- end of input -->

            <!-- select -->
            <div class="grid grid-cols-1">
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
                  v-model="farmItem.seasonStart"
                  placeholder="When does rain season start?"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Season Start--</option>
                  <option v-for="(month, index) in months" :key="index">{{ month }}</option>
                </select>
              </div>
            </div>
            <!-- end of select -->

            <!-- select -->
            <div class="grid grid-cols-1">
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
                  v-model="farmItem.seasonEnd"
                  placeholder="When does rain season End?"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Season End--</option>
                  <option v-for="(month, index) in months" :key="index">{{ month }}</option>
                </select>
              </div>
            </div>
            <!-- end of select -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Farm distance from main road (km)"
                v-model="farmItem.distance"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <div>
                Will you send a short video clip for the farm?
                <label
                  class="inline-flex items-center"
                >
                  <input
                    v-model="farmItem.video"
                    type="radio"
                    class="form-radio"
                    name="video"
                    value="yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    v-model="farmItem.video"
                    type="radio"
                    class="form-radio"
                    name="video"
                    value="no"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <!-- end of input -->

            <div class="grid grid-cols-1">
              <button class="text-green-600" @click="showfarmOwner">Hide Form</button>
            </div>

            <!-- button -->
            <div class="grid grid-cols-1">
              <div>
                <button
                  @click="registerFarmOwner"
                  type="button"
                  class="mt-2 font-bold md:mr-1 py-2 px-8 mr-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-white focus:outline-none"
                >Submit</button>
                <img
                  v-show="loader"
                  src="~assets/images/loader.gif"
                  alt
                  class="mt-4 ml-4"
                  style="width: 30px; height: 30px"
                />
              </div>
            </div>
            <!-- end of submit button -->
          </div>
        </div>
        <!-- end of farm details form -->

        <div class="border-b border-gray-300 mt-4"></div>

        <!-- agri investor -->
        <div class="grid md:grid-cols-12 mt-8">
          <div class="col-span-12 md:col-span-6 p-2">
            <div class="text-2xl font-bold text-orange-500 flex justify-center">Agri-Investor</div>

            <div class="text-orange-500 md:text-lg">
              Are you interested in agriculture and you are looking for potential arable land and expertise
              to establish a successful farming business in Africa?
            </div>

            <div class="flex justify-center mt-2">
              <button
                class="py-2 px-6 bg-gray-300 rounded-3xl"
                @click="showAgriInvestor"
              >Get Started</button>
            </div>
          </div>

          <div class="col-span-12 md:col-span-6">
            <img class src="~assets/images/services/coin.jpg" alt />
          </div>
        </div>
        <!-- end -->

        <!-- farm owner form -->
        <div id="agri-investor" class="hidden">
          <div class="flex justify-center mt-2 font-bold">Agri Investor</div>
          <div class="flex justify-center mt-2">Personal Information</div>
          <div
            class="p-4 text-white font-bold"
            style="background: #10914e"
          >Please fill out the form below and submit it. We will get back to you within 24 hours with more details!</div>
          <div class="grid md:grid-cols-3 mx-2 my-4 bg-white gap-2">
            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Surname"
                v-model="agriInvestor.sirName"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="First Name"
                v-model="agriInvestor.firstName"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
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
                  v-model="agriInvestor.gender"
                  placeholder="Select Gender"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Gender--</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Age"
                v-model="agriInvestor.age"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
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
                    @change="changeCnv('investor')"
                    v-model="agriInvestor.country"
                    class="mb-1 text-base font-bold rounded-2xl border-2 border-gray-300 text-gray-600 h-9 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  >
                    <option>--Select Country--</option>
                    <option v-for="country in countries" :key="country._id">{{ country.name }}</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1" v-if="agriInvestor.country != '--Select Country--'">
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
                  v-model="agriInvestor.zone"
                  placeholder="Select Gender"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Zone--</option>
                  <option v-for="zone in zones" :key="zone._id">{{ zone.name }}</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Location"
                v-model="agriInvestor.location"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Sub Location"
                v-model="agriInvestor.subLocation"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Postal Address"
                v-model="agriInvestor.postalAddress"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Email Address"
                v-model="agriInvestor.email"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Phone Number"
                v-model="agriInvestor.phone"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->
          </div>
        </div>
        <!-- end of farm owner form -->

        <!-- preferred farm form -->
        <div id="preferred-farm" class="hidden">
          <div class="flex justify-center mt-2 font-bold">Request the farm of your preference</div>
          <div class="flex justify-center mt-2 font-bold">FARM DETAILS</div>
          <div
            class="grid md:grid-cols-3 mx-2 my-4 bg-white gap-2"
            v-if="agriInvestor.country != '--Select Country--'"
          >
            <!-- input -->
            <div class="grid grid-cols-1" v-if="agriInvestor.country != '--Select Country--'">
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
                  v-model="preferredFarm.zone"
                  placeholder="Select Gender"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Zone--</option>
                  <option v-for="zone in zones" :key="zone._id">{{ zone.name }}</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Farm Size (Acres / Hectors)"
                v-model="preferredFarm.farmSize"
                type="number"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
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
                  v-model="preferredFarm.contract"
                  placeholder="Type of contract you want to enter into"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Contract--</option>
                  <option>Lease</option>
                  <option>Sale</option>
                  <option>Partnership</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div
              class="grid grid-cols-1"
              v-if="(preferredFarm.contract == 'Lease' || preferredFarm.contract=='Partnership')"
            >
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
                  v-model="preferredFarm.tenure"
                  placeholder="Tenure"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Tenure--</option>
                  <option>One season</option>
                  <option>1 year</option>
                  <option>5 years</option>
                  <option>10 years</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <div class="grid grid-cols-1" v-if="(preferredFarm.contract=='Partnership')">
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
                  v-model="preferredFarm.project"
                  placeholder="Tenure"
                  class="text-xs font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Preferred Project--</option>
                  <option v-for="project in projects" :key="project._id">{{ project.title }}</option>
                </select>
              </div>
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Your price per acre"
                v-model="preferredFarm.acrePrice"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <div>You want rain feed farm?</div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    v-model="preferredFarm.rainFeed"
                    type="radio"
                    class="form-radio"
                    name="rainFeed"
                    value="yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    v-model="preferredFarm.rainFeed"
                    type="radio"
                    class="form-radio"
                    name="rainFeed"
                    value="no"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <div>
                You want farm with irrigation potential?
                <label class="inline-flex items-center">
                  <input
                    v-model="preferredFarm.irrigation"
                    type="radio"
                    class="form-radio"
                    name="irrigation"
                    value="yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    v-model="preferredFarm.irrigation"
                    type="radio"
                    class="form-radio"
                    name="irrigation"
                    value="no"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <div>
                You farm with water for domestic use?
                <label class="inline-flex items-center">
                  <input
                    v-model="preferredFarm.domesticWater"
                    type="radio"
                    class="form-radio"
                    name="domesticWater"
                    value="yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    v-model="preferredFarm.domesticWater"
                    type="radio"
                    class="form-radio"
                    name="domesticWater"
                    value="no"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <div>
                Do you want electricity in the farm?
                <label class="inline-flex items-center">
                  <input
                    v-model="preferredFarm.electricity"
                    type="radio"
                    class="form-radio"
                    name="electricity"
                    value="yes"
                  />
                  <span class="ml-2">Yes</span>
                </label>

                <label class="inline-flex items-center">
                  <input
                    v-model="preferredFarm.electricity"
                    type="radio"
                    class="form-radio"
                    name="electricity"
                    value="no"
                  />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>
            <!-- end of input -->

            <div class="grid grid-cols-1">
              <button class="text-green-600" @click="showAgriInvestor">Hide Form</button>
            </div>

            <!-- button -->
            <div class="grid grid-cols-1">
              <div>
                <button
                  @click="registerInvestor"
                  type="button"
                  class="mt-2 font-bold md:mr-1 py-2 px-8 mr-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-white focus:outline-none"
                >Submit</button>
                <img
                  v-show="loader"
                  src="~assets/images/loader.gif"
                  alt
                  class="mt-4 ml-4"
                  style="width: 30px; height: 30px"
                />
              </div>
            </div>
            <!-- end of submit button -->
          </div>

          <div v-else role="alert" class="mt-2">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Country Not Selected</div>
            <div
              class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
            >
              <p>Please select country to request a farm of your preference!</p>
            </div>
          </div>
        </div>
        <!-- end of preferred form -->

        <div class="border-b border-gray-300 mt-8"></div>

        <!-- farm worker -->
        <div class="grid md:grid-cols-12 mt-8">
          <div class="col-span-12 md:col-span-6">
            <img class src="~assets/images/services/labor.png" alt />
          </div>

          <div class="col-span-12 md:col-span-6 p-2">
            <div class="text-2xl font-bold flex justify-center">Farm worker</div>

            <div
              class="md:text-lg"
            >Are you a self motivated individual looking for a job or partnership to work in farming projects?</div>

            <div class="flex justify-center mt-2">
              <button class="py-2 px-6 bg-gray-300 rounded-3xl" @click="showFarmWorker">Get Started</button>
            </div>
          </div>
        </div>
        <!-- end -->

        <!-- farm worker form -->
        <div id="farm-worker" class="hidden">
          <div class="flex justify-center mt-2 font-bold">FARM WORKER</div>
          <div class="flex justify-center mt-2">Personal Information</div>
          <div
            class="p-4 text-white font-bold"
            style="background: #10914e"
          >Please fill out the form below and submit it. We will get back to you within 24 hours with more details!</div>
          <div class="grid md:grid-cols-3 mx-2 my-4 bg-white gap-2">
            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Surname"
                v-model="farmWorker.sirName"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="First Name"
                v-model="farmWorker.firstName"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
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
                  v-model="farmWorker.gender"
                  placeholder="Select Gender"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Gender--</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Age"
                v-model="farmWorker.age"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of inputs -->

            <!-- input -->
            <div class="grid grid-cols-1">
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
                    @change="changeCnv('worker')"
                    v-model="farmWorker.country"
                    class="mb-1 text-base font-bold rounded-2xl border-2 border-gray-300 text-gray-600 h-9 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  >
                    <option>--Select Country--</option>
                    <option v-for="country in countries" :key="country._id">{{ country.name }}</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1" v-if="farmWorker.country != '--Select Country--'">
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
                  v-model="farmWorker.zone"
                  placeholder="Select Gender"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Zone--</option>
                  <option v-for="zone in zones" :key="zone._id">{{ zone.name }}</option>
                </select>
              </div>
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Location"
                v-model="farmWorker.location"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- select -->
            <div class="grid grid-cols-1">
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
                  v-model="farmWorker.education"
                  placeholder="Education Level"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Education Level--</option>
                  <option>Primary School</option>
                  <option>Secondary School</option>
                  <option>Certificate</option>
                  <option>Diploma</option>
                  <option>Degree</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
            <!-- end of select -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Profession"
                v-model="farmWorker.profession"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Crops you wish to work on"
                v-model="farmWorker.crops"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- select -->
            <div class="grid grid-cols-1">
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
                  v-model="farmWorker.workPlace"
                  class="text-base font-bold rounded border-2 border-gray-400 text-gray-600 h-10 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Preferred Work Place--</option>
                  <option>Any place within East Africa</option>
                  <option>Within my zone</option>
                  <option>within my location</option>
                </select>
              </div>
            </div>
            <!-- end of select -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Postal Address"
                v-model="farmWorker.postalAddress"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Email Address"
                v-model="farmWorker.email"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- input -->
            <div class="grid grid-cols-1">
              <input
                placeholder="Phone Number"
                v-model="farmWorker.phone"
                type="text"
                class="w-full border-2 border-gray-400 py-1 px-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <!-- end of input -->

            <!-- submit button -->
            <div class="grid grid-cols-1">
              <div>
                <button
                  @click="registerExpert"
                  type="button"
                  class="mt-2 font-bold md:mr-1 py-2 px-8 mr-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-white focus:outline-none"
                >Submit</button>
                <img
                  v-show="loader"
                  src="~assets/images/loader.gif"
                  alt
                  class="mt-4 ml-4"
                  style="width: 30px; height: 30px"
                />
              </div>
            </div>
            <!-- end of submit button -->

            <!-- submit button -->
            <div class="grid grid-cols-1">
              <div>
                <button @click="showFarmWorker" class="text-green-600">Hide Form</button>
              </div>
            </div>
            <!-- end of submit button -->
          </div>
        </div>
        <!-- end of farm worker form -->

        <div class="border-b border-gray-300 mt-8"></div>

        <!-- farming collidor -->
        <div class="mt-8">
          <div
            class="flex justify-center text-lg md:text-2xl text-green-700 font-bold"
          >FARMING CORRIDOR</div>

          <div class="text-xl">
            This corridor displays farms for partnership or lease to prospective investors.
            With us, it's simple and secure to lease or buy farming land in any country across Africa.
          </div>

          <div class="grid md:grid-cols-12 mt-2">
            <div class="col-span-8 p-4 font-bold flex justify-center">Start Here</div>
            <div class="col-span-4 p-2">
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
                  v-model="farmCountry"
                  @change="fetchFarms"
                  class="mb-1 text-base font-bold rounded-2xl border-2 border-gray-300 text-gray-600 h-9 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Country--</option>
                  <option v-for="country in countries" :key="country._id">{{ country.name }}</option>
                </select>
              </div>
            </div>
          </div>

          <!-- table -->
          <div class="mb-2" v-if="farmCountry != '--Select Country--'">
            <div class="flex justify-center text-green-700 font-bold text-2xl">AVAILABLE FARMS</div>

            <div style="background: #E5E4E2" class="p-2">
              <table class="w-full text-sm md:text-base text-left border-2 border-white">
                <thead class="opacity-80 text-xs uppercase">
                  <tr class="border-b-2 border-white">
                    <th
                      scope="col"
                      class="py-3 md:px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Serial</th>
                    <th
                      scope="col"
                      colspan="4"
                      class="py-3 md:px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Farm Details</th>
                    <th
                      scope="col"
                      class="py-3 md:px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Investor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="opacity-80 border-b font-bold dark:bg-gray-800 dark:border-gray-900">
                    <th
                      style="font-size: 14px; font-weight: bold"
                      class="py-2 md:px-2 border-r-2 border-white"
                    >Farm Code</th>
                    <th
                      style="font-size: 14px; font-weight: bold"
                      class="py-2 md:px-2 border-r-2 border-white"
                    >Acres</th>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >Zone</td>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >Status</td>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >Other Details</td>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >Action</td>
                  </tr>
                  <tr
                    :class="index % 2 != 0 ? 'bg-gray-300' : ''"
                    class="border-b dark:bg-gray-800 dark:border-gray-900"
                    v-for="(farm,index) in collidorFarms"
                    :key="farm._id"
                  >
                    <td class="py-2 px-6 border-2 border-white">{{farm.serialNo}}</td>
                    <td class="py-2 px-6 border-2 border-white">{{ farm.acres }}</td>
                    <td class="py-2 px-6 border-2 border-white">{{ farm.zone.name }}</td>
                    <td class="py-2 px-6 border-2 border-white">{{farm.status}}</td>
                    <td class="py-2 px-6 border-2 border-white">
                      <button class="bg-orange-600 px-4 py-1 text-white font-bold" @click="viewFarmDetails(farm)">View</button>
                    </td>
                    <td class="py-2 px-6 border-2 border-white">
                      <nuxt-link class="bg-green-700 px-4 py-2 text-white" :to="`/order-farm/${farm.farmRandomId}`">Order Farm</nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- end  -->

          <div>
            <img class src="~assets/images/services/cattle.png" alt />
          </div>
        </div>
        <!-- end of farming collidor -->

        <!-- farming collidor -->
        <div class="mt-8">
          <div class="flex justify-center text-lg md:text-2xl text-green-700 font-bold">EXPERT ROOM</div>

          <div class="text-xl text-orange-500">
            This is the professional section where investor meet the competent candidates specialized in different
            field relevant in management of agricultural projects.
          </div>

          <div class="grid md:grid-cols-12 mt-2">
            <div class="col-span-8 p-4 font-bold flex justify-center">Start Here</div>
            <div class="col-span-4 p-2">
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
                  v-model="expertCountry"
                  @change="fetchExperts"
                  class="mb-1 text-base font-bold rounded-2xl border-2 border-gray-300 text-gray-600 h-9 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>--Select Country--</option>
                  <option v-for="country in countries" :key="country._id">{{ country.name }}</option>
                </select>
              </div>
            </div>
          </div>

          <!-- table -->
          <div class="mb-2" v-if="expertCountry != '--Select Country--'">
            <div class="flex justify-center text-green-700 font-bold text-2xl">View</div>

            <div style="background: #E5E4E2" class="p-2">
              <table class="w-full text-sm md:text-base text-left border-2 border-white">
                <thead class="opacity-80 text-xs uppercase">
                  <tr class="border-b-2 border-white">
                    <th
                      scope="col"
                      class="py-3 md:px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Serial</th>
                    <th
                      scope="col"
                      colspan="4"
                      class="py-3 md:px-2 font-bold border-r-2 border-white content-center"
                      style="font-size: 10px; font-weight: bold"
                    >Worker's Professional Details</th>
                    <th
                      scope="col"
                      class="py-3 md:px-2 font-bold border-r-2 border-white"
                      style="font-size: 10px; font-weight: bold"
                    >Employer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="opacity-80 border-b font-bold dark:bg-gray-800 dark:border-gray-900">
                    <th
                      style="font-size: 14px; font-weight: bold"
                      class="py-2 md:px-2 border-r-2 border-white"
                    >SN</th>
                    <th
                      style="font-size: 14px; font-weight: bold"
                      class="py-2 md:px-2 border-r-2 border-white"
                    >Country</th>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >Zone</td>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >Specialization</td>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >CV Extract
                    </td>
                    <td
                      class="py-2 md:px-2 border-r-2 border-white"
                      style="font-size: 14px; font-weight: bold"
                    >Action</td>
                  </tr>
                  <tr
                    :class="index % 2 != 0 ? 'bg-gray-300' : ''"
                    class="border-b dark:bg-gray-800 dark:border-gray-900"
                    v-for="(expert,index) in expertsData"
                    :key="expert._id"
                  >
                    <td class="py-2 px-6 border-2 border-white">{{expert.serialNo}}</td>
                    <td class="py-2 px-6 border-2 border-white">{{ expert.selectedCountry }}</td>
                    <td class="py-2 px-6 border-2 border-white">{{ expert.selectedZone }}</td>
                    <td class="py-2 px-6 border-2 border-white">{{expert.profession}}</td>
                    <td class="py-2 px-6 border-2 border-white">
                    <button class="bg-orange-600 px-4 py-1 text-white font-bold" @click="viewCv(expert)">View Cv</button>
                    </td>
                    <td class="py-2 px-6 border-2 border-white">
                      <nuxt-link class="bg-green-700 px-4 py-2 text-white" :to="`/engage-expert/${expert.expertRandomId}`">Engage Expert</nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- end  -->

          <div>
            <img class src="~assets/images/services/experts.jpg" alt />
          </div>
        </div>
        <!-- end of farming collidor -->
      </div>
      <div
        class="bg-white p-2 md:col-span-4 w-full bg-image"
        :style="{ backgroundImage: `url(${bgImage})` }"
      >
        <div class="p-8 md:px-12">
          <div class="flex justify-center text-xl font-bold">WOULD YOU WISH TO HAVE A JOINT MEETING?</div>
          <div class="font-bold text-sm">(farm owner or Agri investor)</div>
          <!-- country -->
          <div class="relative w-full inline-flex self-center mt-2">
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
              v-model="meetingCountry"
              class="mb-1 text-base font-bold rounded-2xl border-2 border-gray-300 text-gray-600 h-9 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>--Select Country--</option>
              <option v-for="country in countries" :key="country._id">{{ country.name }}</option>
            </select>
          </div>
          <!-- end -->

          <!-- participant -->
          <div class="relative w-full inline-flex self-center mt-2">
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
              v-model="meetingPerson"
              class="mb-1 text-base font-bold rounded-2xl border-2 border-gray-300 text-gray-600 h-9 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>--Identify Yourself--</option>
              <option>Agri Investor</option>
              <option>Farm Owner</option>
            </select>
          </div>
          <!-- end -->

          <!-- country -->
          <div class="relative w-full inline-flex self-center mt-2">
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
              v-model="meetingChannel"
              class="mb-1 text-base font-bold rounded-2xl border-2 border-gray-300 text-gray-600 h-9 w-full pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>--Preferred Channel--</option>
              <option>Physical Meeting</option>
              <option>Zoom Meeting</option>
              <option>Google Meet</option>
            </select>
          </div>
          <!-- end -->

          <!-- country -->
          <div class="relative w-full inline-flex self-center mt-2">
            <client-only>
              <date-picker
                style="color: #000"
                class="date-pkr w-full"
                placeholder="Select Date"
                format="yyyy-MM-dd"
                v-model="meetingDate"
              />
            </client-only>
          </div>
          <!-- end -->

          <!-- full name -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <input
                placeholder="Time"
                v-model="meetingTime"
                type="text"
                class="w-full text-black border-2 border-gray-400 py-1 px-3 rounded-3xl outline-none focus:border-purple-500"
              />
            </div>
          </div>
          <!-- end -->

          <!-- contact -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <input
                placeholder="Full Name"
                v-model="meetingFullName"
                type="text"
                class="w-full text-black border-2 border-gray-400 py-1 px-3 rounded-3xl outline-none focus:border-purple-500"
              />
            </div>
          </div>
          <!-- end -->

          <!-- full name -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <input
                placeholder="Email"
                v-model="meetingEmail"
                type="text"
                class="w-full text-black border-2 border-gray-400 py-1 px-3 rounded-3xl outline-none focus:border-purple-500"
              />
            </div>
          </div>
          <!-- end -->

          <!-- phone -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <input
                placeholder="Phone No"
                v-model="meetingPhone"
                type="text"
                class="w-full text-black border-2 border-gray-400 py-1 px-3 rounded-3xl outline-none focus:border-purple-500"
              />
            </div>
          </div>
          <!-- end -->

          <!-- agenda -->
          <div class="grid grid-cols-1 mt-2">
            <div class="col-span-2">
              <textarea
              v-model="meetingAgenda"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                rows="3"
                placeholder="Agenda"
              ></textarea>
            </div>
          </div>
          <!-- end -->

          <div class="flex justify-center">
            <button
              @click="requestMeeting"
              type="button"
              class="mt-2 font-bold md:mr-1 py-2 px-8 mr-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-white focus:outline-none"
            >Submit</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end of who can join us -->
  </div>
</template>
  
  
  <script>
import jsPDF from "jspdf";
import "jspdf-autotable";
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
import Product from "@/components/product.vue";
import backgroundImagePath from "~/assets/images/services/plant-bg.png";
export default {
  components: {
    Product
  },
  computed: {
    ...mapGetters(["imageUrl"])
  },
  data() {
    return {
      bgImage: backgroundImagePath,
      selectedExpert: {},
      category: {},
      meetingItem: {},
      selectedCountry: {},
      preferredFarm: {},
      meetingCountry: "--Select Country--",
      meetingPerson: "--Identify Yourself--",
      meetingChannel: "--Preferred Channel--",
      meetingDate: null,
      meetingTime: null,
      meetingFullName: null,
      meetingEmail: null,
      meetingPhone: null,
      meetingAgenda: null,
      country: "--Select Country--",
      zone: "--Select Zone--",
      cnvRate: null,
      countryCode: null,
      farmCountry: "--Select Country--",
      expertCountry:"--Select Country--",
      collidorFarms: [],
      expertsData: [],
      farmWorker: {},
      farmOwner: {},
      farmItem: {},
      dataItem: {},
      agriInvestor: {},
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
      zones: [],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  head() {
    const meta = this.meta || {};
    return {
      title: `jublantafrofarms - Agri support`,
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

    const servicesUrl = `/api/services`;

    const countriesUrl = `/api/countries`;

    const projectUrl = `/api/projects/query/active`;

    try {
      const { data: servicesData } = await http.get(servicesUrl);
      const services = servicesData.records;

      const { data: countriesData } = await http.get(countriesUrl);
      const countries = countriesData.records;

      const { data: projectsData } = await http.get(projectUrl);
      const projects = projectsData.records;

      return {
        services,
        countries,
        projects
      };
    } catch (err) {
      return {
        record: {},
        services: [],
        countries: [],
        meta: {}
      };
    }
  },
  methods: {
    changeCnv(item) {
      let country = null;
      if (item == "owner") {
        country = this.farmOwner.country;
      }

      if (item == "investor") {
        country = this.agriInvestor.country;
      }

      if (item == "worker") {
        country = this.farmWorker.country;
      }

      if (country != "--Select Country--") {
        const selectedCountry = this.countries.find(record => {
          return record.name == country;
        });
        this.selectedCountry = selectedCountry;
        this.countryCode = selectedCountry.code;
        this.fetchZones(selectedCountry._id, item);
      }
    },
    async fetchFarms() {
      const self = this;
      const details = {
        country: self.farmCountry
      };
      const url = `/api/available/farms/fetch/farm/by/selected/country`;
      await http.post(url, details).then(res => {
        if (res.data.state) {
          self.collidorFarms = res.data.records;
        } else {
          self.loader = false;
        }
      });
    },
    async fetchExperts() {
      const self = this;
      const details = {
        country: self.expertCountry
      };
      const url = `/api/experts/fetch/expert/by/selected/country`;
      await http.post(url, details).then(res => {
        if (res.data.state) {
          self.expertsData = res.data.records;
        } else {
          self.loader = false;
        }
      });
    },
    async requestMeeting() {
      const self = this;
      const details = {
        meetingCountry: self.meetingCountry,
        participant: self.meetingPerson,
        meetingDate: self.meetingDate,
        meetingTime: self.meetingTime,
        meetingFullName: self.meetingFullName,
        meetingPhone: self.meetingPhone,
        meetingChannel: self.meetingChannel,
        meetingEmail: self.meetingEmail,
        meetingAgenda: self.meetingAgenda
      };
      const url = `/api/meetings/request`;
      await http.post(url, details).then(res => {
        if (res.data.state) {
          this.$router.push("/owner-success");
        } else {
          self.loader = false;
        }
      });
    },
    async fetchZones(id, item) {
      const self = this;
      const url = `/api/regions/by/country/${id}`;
      await http
        .get(url)
        .then(res => {
          if (res.data.state) {
            self.zones = res.data.records;
          } else {
            self.zones = [];
          }
        })
        .catch(err => {
          this.$refs.snackbar.show(err, "red");
        });

      if (item == "owner") {
        const farmOwner = document.querySelector("#farm-owner");
        farmOwner.classList.remove("hidden");

        const farmDetails = document.querySelector("#farm-details");
        farmDetails.classList.remove("hidden");

        this.farmOwner.zone = "--Select Zone--";
        this.farmItem.zone = "--Select Zone--";
      }

      if (item == "investor") {
        const investor = document.querySelector("#agri-investor");
        investor.classList.remove("hidden");

        const pfarmDetails = document.querySelector("#preferred-farm");
        pfarmDetails.classList.remove("hidden");

        this.agriInvestor.zone = "--Select Zone--";
      }

      if (item == "worker") {
        const hiddenDiv = document.querySelector("#farm-worker");
        hiddenDiv.classList.remove("hidden");

        this.farmWorker.zone = "--Select Zone--";
      }
    },
    showAgriInvestor() {
      const investor = document.querySelector("#agri-investor");
      investor.classList.toggle("hidden");

      const farmDetails = document.querySelector("#preferred-farm");
      farmDetails.classList.toggle("hidden");
    },
    showfarmOwner() {
      const farmOwner = document.querySelector("#farm-owner");
      farmOwner.classList.toggle("hidden");

      const farmDetails = document.querySelector("#farm-details");
      farmDetails.classList.toggle("hidden");
    },
    showFarmWorker() {
      const hiddenDiv = document.querySelector("#farm-worker");
      hiddenDiv.classList.toggle("hidden");
    },
    async registerFarmOwner() {
      //  this.formError = false;
      try {
        const url = `/api/farm/owners`;

        const details = { owner: this.farmOwner, farm: this.farmItem };
        const self = this;
        this.loader = true;
        await http.post(url, details).then(res => {
          if (res.data.state) {
            self.successMsg = true;
            self.loader = false;
            self.farmOwner = {};
            this.$router.push("/owner-success");
          } else {
            self.emailError = true;
            self.loader = false;
          }
        });
      } catch (err) {
        console.log("error occured", err);
      }
    },
    async registerInvestor() {
      //  this.formError = false;
      try {
        const url = `/api/agri/investors`;

        const details = {
          investor: this.agriInvestor,
          farm: this.preferredFarm
        };
        const self = this;
        this.loader = true;
        await http.post(url, details).then(res => {
          if (res.data.state) {
            self.successMsg = true;
            self.loader = false;
            self.agriInvestor = {};
            self.preferredFarm = {};
            this.$router.push("/investor-success");
          } else {
            self.emailError = true;
            self.loader = false;
          }
        });
      } catch (err) {
        console.log("error occured", err);
      }
    },
    async registerExpert() {
      try {
        const url = `/api/experts`;

        const details = this.farmWorker;
        const self = this;
        this.loader = true;
        await http.post(url, details).then(res => {
          if (res.data.state) {
            self.successMsg = true;
            self.loader = false;
            self.farmWorker = {};
            this.$router.push("/expert-success");
          } else {
            self.emailError = true;
            self.loader = false;
          }
        });
      } catch (err) {
        console.log("error occured", err);
      }
    },
    viewCv(expert) {
      const shopName = "Jubilantafrofarms";
      const self = this;
      var doc = new jsPDF({ compress: true });
      var totalPagesExp = "{total_pages_count_string}";
      // var pageHeight =
      //   doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
      var pageWidth =
        doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

      var img = new Image();
      img.src = require("@/assets/images/jubilantafrofarms-logo.png");
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
      doc.text("Contact: +254 748 193 219", pageWidth - 10, 30, "right");
      doc.text("Email: info@jubilantafrofarms.com", pageWidth - 10, 35, "right");

      //Setting Items Title:
      doc.setFontSize(15);
      

      doc.line(5, 40, pageWidth - 5, 40); // Top Line


      doc.setFontSize(14);
      /*
-------------------------------------------------------------------------------
              BEGINNING OF ESTIMATED PRODUCTION COST TABLE
 -----------------------------------------------------------------------------
*/

      doc.text("Expert CV", pageWidth / 2, 50, "center");

      function headRowsItemDetails() {
        return [
          {
            title: "Title",
            details: "Details"
          }
        ];
      }

      const itemDetails = [];
      itemDetails.push({ title: "Expert No", details: expert.serialNo });
      itemDetails.push({ title: "Age", details: expert.age });
      itemDetails.push({ title: "Gender", details: expert.gender });
      itemDetails.push({ title: "Country", details: expert.selectedCountry });
      itemDetails.push({ title: "Zone", details: expert.selectedZone });
      itemDetails.push({ title: "Education", details: expert.education });
      itemDetails.push({ title: "Profession", details: expert.profession });
      itemDetails.push({ title: "Crop(s) I can work on", details: expert.crops });
      itemDetails.push({ title: "Location", details: expert.location });
      itemDetails.push({ title: "Preferred Place of Work", details: expert.workPlace });
      itemDetails.push({ title: "Postal Address", details: expert.postalAddress });
      // itemDetails.push({ title: "Email", details: expert.email });
      // itemDetails.push({ title: "Phone", details: expert.phone });

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

        startY: 60
      });

      /*
-------------------------------------------------------------------------------
              END OF CV TABLE
 -----------------------------------------------------------------------------
*/

      var pageSize = doc.internal.pageSize;
      var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();

      const footerText =
        "";

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
    },
    viewFarmDetails(farm) {
      const shopName = "Jubilantafrofarms";
      const self = this;
      var doc = new jsPDF({ compress: true });
      var totalPagesExp = "{total_pages_count_string}";
      // var pageHeight =
      //   doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
      var pageWidth =
        doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

      var img = new Image();
      img.src = require("@/assets/images/jubilantafrofarms-logo.png");
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
      doc.text("Contact: +254 748 193 219", pageWidth - 10, 30, "right");
      doc.text("Email: info@jubilantafrofarms.com", pageWidth - 10, 35, "right");

      //Setting Items Title:
      doc.setFontSize(15);
      

      doc.line(5, 40, pageWidth - 5, 40); // Top Line


      doc.setFontSize(14);
      /*
-------------------------------------------------------------------------------
              BEGINNING OF ESTIMATED PRODUCTION COST TABLE
 -----------------------------------------------------------------------------
*/

      doc.text("Farm Details", pageWidth / 2, 50, "center");

      function headRowsItemDetails() {
        return [
          {
            title: "Title",
            details: "Details"
          }
        ];
      }

      const itemDetails = [];
      itemDetails.push({ title: "Farm code", details: farm.serialNo });
      itemDetails.push({ title: "Farm Country", details: farm.country.name });
      itemDetails.push({ title: "Farm Zone", details: farm.zone.name });
      itemDetails.push({ title: "Farm location", details: farm.location });
      itemDetails.push({ title: "Farm sub-location", details: farm.subLocation });
      itemDetails.push({ title: "Farm size( acres)", details: farm.acres });
      itemDetails.push({ title: "Soil test", details: farm.soilTest });
      itemDetails.push({ title: "Status", details: farm.status });
      itemDetails.push({ title: "Rainfall", details: farm.rainfall });
      itemDetails.push({ title: "Minimum tenure", details: farm.minimumTenure });
      itemDetails.push({ title: "Maximum tenure", details: farm.maximumTenure });
      itemDetails.push({ title: "Electricity", details: farm.electricity });
      itemDetails.push({ title: "Domestic water", details: farm.domesticWater });
      itemDetails.push({ title: "Water for irrigation", details: farm.irrigationWater });
      itemDetails.push({ title: "Distance from nearby main road", details: farm.distance });
      itemDetails.push({ title: "Type of land ownership", details: farm.ownership });
      itemDetails.push({ title: "Suggested crops", details: farm.crops });
      itemDetails.push({ title: "Market price per acre", details: farm.marketPrice });
      itemDetails.push({ title: "Price Negotiation", details: farm.priceNegotiation });
      itemDetails.push({ title: "Accessibility of labors", details: farm.labor });
      itemDetails.push({ title: "Accessibility of agricultural machinery and farming inputs", details: farm.machinery });
      itemDetails.push({ title: "Video clip for the farm", details: farm.videoClip });
      itemDetails.push({ title: "Processing fee per acre", details: farm.processingFee });

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

        startY: 60
      });

      /*
-------------------------------------------------------------------------------
              END OF CV TABLE
 -----------------------------------------------------------------------------
*/

      var pageSize = doc.internal.pageSize;
      var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();

      const footerText =
        "";

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
  },
  created() {
    // farm owner defaults
    let details = {
      country: "--Select Country--",
      zone: "--Select Zone--",
      gender: "--Select Gender--"
    };

    this.farmOwner = { ...this.farmOwner, ...details };
    // end of farm owner defaults

    // farm item defaults
    let ownerFarmDetails = {
      contract: "--Contract Type--",
      tenure: "--Select Tenure--",
      ownership: "--Select Ownership--",
      seasonStart: "--Season Start--",
      seasonEnd: "--Season End--"
    };

    this.farmItem = { ...this.farmItem, ...ownerFarmDetails };
    // end of farm owner defaults

    // investor defaults
    let investor = {
      country: "--Select Country--",
      zone: "--Select Zone--",
      gender: "--Select Gender--"
    };

    this.agriInvestor = { ...this.agriInvestor, ...investor };
    // end of investor defaults

    // investor defaults
    let farm = {
      contract: "--Select Contract--",
      tenure: "--Select Tenure--",
      crop: "--Preferred Project--"
    };

    this.preferredFarm = { ...this.preferredFarm, ...farm };
    // end of investor defaults

    // investor defaults
    let worker = {
      country: "--Select Country--",
      zone: "--Select Zone--",
      gender: "--Select Gender--",
      education: "--Education Level--",
      preferredPlace: "--Preferred Work Place--"
    };

    this.farmWorker = { ...this.farmWorker, ...worker };
    // end of investor defaults
  }
};
</script>
  
  <style scoped>
.bg-image {
  /* background-image: url(~/assets/autumn-tree.jpg); */
  background-repeat: no-repeat;
  background-size: cover;
  position: sticky !important;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  top: 0 !important;
  height: 680px;
}
</style>
 