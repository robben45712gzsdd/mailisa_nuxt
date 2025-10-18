<template>
  <div class="container">
    <div class="flex flex-col items-center py-10">
      <img
        v-aos="'fade-up'"
        data-aos-duration="1000"
        :src="images.MauMucMyPham"
        alt=""
      />
      <h2
        v-aos="'fade-up'"
        data-aos-duration="1000"
        class="mt-2 font-bold text-primary-dark text-2xl"
      >
        RÕ NGUỒN GỐC XUẤT XỨ
      </h2>
      <img
        v-aos="'fade-up'"
        data-aos-duration="1000"
        :src="images.MauMucMyPham2"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { images } from "~/assets/imgs";
import HeadingTitle from "../HeadingTitle/index.vue";

export default {
  name: "MauMucMyPham",
  components: { HeadingTitle },
  data() {
    return {
      images,
    };
  },
};
</script>
