<template>
  <div class="container mx-auto p-2 min-h-screen mt-6">
    <div
      class="mb-2 justify-center items-center content-center grid text-2xl text-orange-600"
    >Our Location</div>
    <div class="grid md:grid-cols-2 gap-2">
      <div class="bg-white p-10">
        <div>
          <img
            src="~assets/images/office.jpeg"
            alt
            class="w-full object-fill product_image"
            style="height: 300px"
          />
        </div>
      </div>
      <div class="bg-white p-10 inline-block justify-center items-center">
        <div>
          <div class="bg-green-700 font-bold text-white p-2">OUR HEADQUARTERS ARE LOCATED IN NAIROBI, KENYA, AT;</div>
          <br />
          <p class="text-orange-600">
            <b>
              8th Floor, Crescent Business Centre:
              Crescent Road, Off Parklands Road,
              Westlands, Nairobi.
            </b>
          </p>
          <br />

          <p>And</p>
          <br />

          <p class="text-orange-600">
            <b>Nungu Lane, Off Westlands / Muthithi Roads, Westlands, Nairobi.</b>
          </p>
        </div>
        <br />

      </div>
    </div>

    <div class="grid md:grid-cols-12 gap-2 mt-2">
      <div class="md:col-span-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8463162591743!2d36.80849651475386!3d-1.2647477990775207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173d8e20d6d3%3A0xd3378a71355b6276!2sCrescent%20Business%20Centre%2C%20The%20Crescent%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1660048856847!5m2!1sen!2ske"
          class="w-full"
          height="450"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="md:col-span-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8348228523864!2d36.80994061475389!3d-1.2722035990720868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173079a82547%3A0x1ef8d185533b850c!2sNungu%20Ln%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1671174732592!5m2!1sen!2ske"
          class="w-full"
          height="450"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>