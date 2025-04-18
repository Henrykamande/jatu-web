<template>
  <div class="relative">
    <div class="overflow-hidden sliderImg">
      <transition name="slide-fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <img
            style="max-height: 400px"
            v-if="currentImg.coverImage"
            :src="`${imageUrl}/uploads/slider/${currentImg.coverImage}`"
            alt
            class="object-contain w-full sliderImg"
          />
        </div>
      </transition>

      <svg
        @click="prev"
        class="
          h-12
          w-12
          ml-16
          prev
          absolute
          text-yellow-400
          hover:text-purple-400
        "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>

      <svg
        @click="next"
        class="
          h-12
          w-12
          mr-16
          next
          absolute
          text-yellow-400
          hover:text-purple-400
        "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { http } from "~/common/index.js";
import { mapGetters } from "vuex";
export default {
  computed: {
    currentImg: function () {
      if (this.images.length > 0) {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      } else {
        return {};
      }
    },
    ...mapGetters(["imageUrl"]),
  },
  transition: "home",
  mode: "in-out",
  data() {
    return {
      images: [],
      timer: null,
      currentIndex: 0,
    };
  },
  async fetch() {
    const url = `api/slider`;
    const host = this.imageUrl;
    const data = await fetch(`${host}/${url}`).then((res) => res.json());
    if (data.records) {
      this.images = data.records;
    }
  },
  mounted: function () {
    this.startSlide();
  },
  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 3000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },
};
</script>

<style>
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
    height: 170px;
    max-height: 250px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .sliderImg {
    height: 170px;
    max-height: 250px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .sliderImg {
    height: 170px;
    max-height: 300px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .sliderImg {
    height: 170px;
    max-height: 250px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .sliderImg {
    height: 250px;
    max-height: 250px;
  }
}
</style>