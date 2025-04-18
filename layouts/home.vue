<template>
  <div>
    <main>
      <Nuxt />
    </main>

    <Footer />

    <nuxt-link class="upcoming-events bg-orange-700 py-1 px-2 font-bold text-base text-white rounded-2xl" to="/events">Upcoming Events</nuxt-link>
    <a href="https://wa.me/254748193219">
      <div class="whatsapp_action flex items-center justify-center">
        <font-awesome-icon
          class="h-6 w-6 cursor-pointer"
          style="color: #fff"
          :icon="['fab', 'whatsapp']"
        />
      </div>
    </a>
  </div>
</template>
  
  <script>
import Footer from "@/components/footer.vue";
export default {
  components: {
    Footer
  },
  middleware: ["check-auth"]
};
</script>
  
  
  <style>
.whatsapp_action {
  position: fixed;
  height: 45px;
  width: 45px;
  background-color: #50c878;
  color: #fff;
  bottom: 50px;
  right: 40px;
  border-radius: 100%;
  text-align: center;
  cursor: pointer;
}
.upcoming-events{
  position: fixed;
  bottom: 105px;
  right: 40px;
  cursor: pointer;
}
.w_icon {
  padding-top: 11px;
  font-size: 28px;
}
</style>
  