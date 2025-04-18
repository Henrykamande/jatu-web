<template>
  <header>
    <desktop-menu class="md:block sm:hidden hidden"></desktop-menu>
    <mobile-menu class="md:hidden sm:block block"></mobile-menu>
  </header>
</template>

<script>
import DesktopMenu from "./desktop-menu.vue";
import MobileMenu from "./mobile-menu.vue";
export default {
  components: {
    DesktopMenu,
    MobileMenu,
  },
};
</script>

<style scoped>
</style>