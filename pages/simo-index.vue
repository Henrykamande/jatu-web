<template>
  <div class="container mx-auto md:px-8 px-2 z-10">
    <slider></slider>
    <!-- about section -->
    <!-- services cards -->
    <trending></trending>
    <offers></offers>
    <clearance></clearance>
  </div>
</template>

<script>
import Slider from "@/components/home/hotmax-slider.vue";
import About from "../components/home/about.vue";
import Trending from "../components/home/trending.vue";
import Offers from "../components/home/offers.vue";
import Clearance from "../components/home/clearance.vue";
export default {
  components: {
    Slider,
    About,
    Trending,
    Offers,
    Clearance,
  },
};
</script>

<style lang="scss" scoped>
</style>