<template>
  <div>
    <!-- start of desktop section -->
    <div
    class="mx-auto bg-img md:block sm:hidden hidden"
    style="height: 700px;"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <Header />

    <div class="flex text-white justify-center mt-36 h-full">
      <div class="text-center">
        <div class="font-bold text-6xl">Jubilantafrofarms</div>
        <div class="text-3xl font-bold">"Together, we feed Africa"</div>
        <div class="mt-4">
          <nuxt-link to="/services" class="bg-white px-4 py-3 text-black text-xl rounded-3xl">Find out more</nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <!-- end of desktop section -->

  <!-- start of mobile section -->
  <div class="md:hidden sm:block block">
    <MobileHeader />

    <div
    class="mx-auto object-cover"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div class="flex text-white justify-center md:mt-2 py-20 h-full">
      <div class="text-center">
        <div class="font-bold text-4xl">Jubilantafrofarms</div>
        <div class="text-2xl font-bold mt-2">"Together, we feed Africa"</div>
        <div class="mt-8">
          <nuxt-link to="/services" class="bg-white px-4 py-3 text-black text-xl rounded-3xl">Find out more</nuxt-link>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- end of mobile section-->
  </div>

</template>

<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
import imagePath from "~/assets/images/farm.png";
import Header from "@/components/home-header.vue";
import MobileHeader from "@/components/header.vue";
export default {
  components: {
    Header,
    MobileHeader
  },
  computed: {
    currentImg: function() {
      if (this.images.length > 0) {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      } else {
        return {};
      }
    },
    ...mapGetters(["imageUrl"])
  },
  transition: "home",
  mode: "in-out",
  data() {
    return {
      bannerImage: imagePath,
      images: [],
      timer: null,
      currentIndex: 0
    };
  },
  async fetch() {
    const url = `api/slider`;
    const host = this.imageUrl;
    const data = await fetch(`${host}/${url}`).then(res => res.json());
    if (data.records) {
      this.images = data.records;
    }
  },
  mounted: function() {
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 3000);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  }
};
</script>


<style>

.bg-img {
  /* background-image: url(~/assets/autumn-tree.jpg); */
  background-repeat: no-repeat;
  background-size: cover;
}
/* .myBox {
    background-color: #000;
    color: #fff;
  }
  .c {
    @apply bg-yellow-300;
  } */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0.7;
}
/* .fade-enter-active,
  .fade-leave-active {
    transition: all 0.9s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width: 100%;
    opacity: 0.5;
  }
  .fade-enter,
  .fade-leave-to {
    visibility: hidden;
    overflow: hidden;
    width: 100%;
    opacity: 0;
  } */
img {
  width: 100%;
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  /* width: auto;
    padding: 16px;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none; */
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .sliderImg {
    height: 250px;
    max-height: 250px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .sliderImg {
    height: 250px;
    max-height: 250px;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .sliderImg {
    height: 300px;
    max-height: 300px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .sliderImg {
    height: 550px;
    max-height: 550px;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .sliderImg {
    height: 550px;
    max-height: 550px;
  }
}
</style>
