<template>
  <div class="mx-auto py-6 md:py-10 container">
    <HeadingTitle :title="title" />

    <div v-aos="'fade-up'" data-aos-duration="1000" class="gap-2 md:gap-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-10">
      <BoxService v-for="(item, index) in data" :key="index" :title="item.title" :description="item.desc"
        :image="item.img" />
    </div>
  </div>
</template>

<script>
import HeadingTitle from "@/components/HeadingTitle/index.vue";
import BoxService from "@/components/BoxService/index.vue";

export default {
  name: "OutstandingService",
  components: { HeadingTitle, BoxService },
  props: {
    title: {
      type: String,
      default: "CÁC DỊCH VỤ NỔI BẬT TẠI MAILISA",
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
