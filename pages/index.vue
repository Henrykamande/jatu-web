<template>
  <div class="mx-auto z-10">
    <!-- slider section -->
    <div class="grid md:grid-cols-12">
      <div class="col-span-12">
        <slider></slider>
      </div>
    </div>
    <!-- <div class="grid md:grid-cols-12" style="margin-top: -5px">
      <div class="col-span-12">
        <img
          style="height: 550px"
          src="~assets/images/slider1.jpg"
          alt
          class="md:w-full md:mt-1 object-cover"
        />
      </div>
    </div> -->
    <div class="container mx-auto">
      <div
        class="
          mt-2
          mb-2
          justify-center
          items-center
          content-center
          grid
          text-2xl text-orange-600
          font-bold
        "
      >
        SHAMBANI CONNECT
      </div>

      <div class="grid md:grid-cols-2 gap-2">
        <div class="bg-white p-4 text-base">
          <div>
            <p>
              <b>SHAMBANI CONNECT</b> is a global platform designed to unlock and provide access to the hidden potential of
             agricultural opportunities in African countries. Africa is facing a major food crisis and has the highest
              rate of hunger and food insecurity in the world. It’s estimated that by 2030 African population will 
              reach 1.7 billion people, and food will be a serious major problem for many families on the continent.
            </p>
            
            <br />

            <p>
              We believe Africa can feed itself and we dare to make this dream a reality. But still, there is stive challenge
               for many people in acquiring land in different countries across Africa, we have selected the best countries
                with enough land and we are championing food production through partnership programs...
            </p>

            <a href="/about" class="text-blue-400 underline">Read More</a>
          </div>
        </div>
        <div class="bg-white p-2">
          <h2 class="text-lg font-bold">Vision Statement</h2>

          <p>
            To be the leading platform in unlocking the hidden potential of African farmlands.
          </p>
          <br />

          <h4 class="text-lg font-bold">Mission Statement</h4>

          <p>
            To create global partnerships and establish modern farming projects in Africa.
          </p>

          <div class="mt-2">
            <h2 class="text-lg font-bold">Core Values</h2>
            <ul>
              <li>- Creativity</li>
              <li>- Innovation</li>
              <li>- Quality</li>
            </ul>
          </div>
            
          
        </div>
      </div>

      <div
        class="
          mt-2
          py-4
          grid
          md:grid-cols-3
          grid-cols-1
          gap-2
          justify-items-center
        "
      >
        <!-- div 1 -->
        <div class="card p-2 bg-white">
          <iframe
            width="400"
            height="386"
            src="https://www.youtube.com/embed/AayuowSrf-Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <!-- div 2 -->
        <div class="card p-2 bg-white">
          <img
            src="~assets/images/shambani-connect.jpg"
            alt
            class="object-cover md:h-96"
          />
        </div>
        <!-- div 3 -->
        <div class="card p-2 bg-white">
          <img src="~assets/images/home3.jpeg" alt class="object-fit md:h-96" />
        </div>
        <!-- end -->
      </div>
    </div>
  </div>
</template>

<script>
import MegaMenu from "@/components/home/mega-menu.vue";
import Slider from "@/components/home/slider.vue";
import About from "../components/home/about.vue";
import Trending from "../components/home/trending.vue";
import Offers from "../components/home/offers.vue";
import Clearance from "../components/home/clearance.vue";
export default {
  layout: 'home',
  components: {
    Slider,
    About,
    Trending,
    Offers,
    Clearance,
    MegaMenu,
  },
};
</script>

<style lang="scss" scoped>
</style>