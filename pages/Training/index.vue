<template>
  <div>
    <!-- Ảnh đào tạo -->
    <img :src="images.daoTao" alt="Đào tạo" />

    <!-- Background và lý do -->
    <div class="relative overflow-hidden">
      <img :src="images.bgdt_02_1" alt="bg đào tạo" class="w-full h-auto" />
      <img
        :src="images.lydo6"
        alt="Lý do"
        class="absolute top-1/2 left-[7.8125rem] -translate-y-1/2 z-[3] w-[51.5625rem] max-h-[90%] max-w-full object-contain"
      />
    </div>

    <!-- Các khóa đào tạo -->
    <div
      class="bg-cover bg-center"
      :style="{ backgroundImage: `url(${images.itemTrain3})`, height: '600px' }"
    >
      <div class="container mt-5 py-10">
        <h2 class="text-white text-center text-2xl font-bold">
          CÁC KHÓA ĐÀO TẠO TẠI MAILISA
        </h2>
        <div
          class="gap-4 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center"
        >
          <div
            v-for="(service, index) in listServiceFuture"
            :key="index"
            class="mb-6 w-full md:w-auto"
          >
            <BoxService
              :title="service.title"
              :description="service.description"
              :image="service.image"
              :link="service.link"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Slider hướng dẫn học viên -->
    <div>
      <div class="container mt-5 py-10">
        <HeadingTitle>
          <template #title>
            TỔNG GIÁM ĐỐC MAILISA VÀ TGĐ ĐIỀU HÀNH HOÀNG KIM KHÁNH <br />
            TẬN TAY HƯỚNG DẪN HỌC VIÊN
          </template>
        </HeadingTitle>

        <div class="mt-10">
          <SlickCarousel v-bind="settings">
            <div v-for="(item, index) in listImagesBanner" :key="index">
              <img :src="item" class="rounded-2xl" alt="banner" />
            </div>
          </SlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { images } from "@/assets/imgs";
import BoxService from "@/components/BoxService";
import HeadingTitle from "@/components/HeadingTitle";

export default {
  name: "Training",
  components: {
    BoxService,
    HeadingTitle,
  },
  data() {
    return {
      images,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
      listImagesBanner: [
        images.trangdaotao,
        images.trangdaotao,
        images.trangdaotao,
      ],
      listServiceFuture: [
        {
          title: "CHĂM SÓC DA",
          description: "Lớp chăm sóc da: 13.000.000đ",
          image: images.itemTrain1,
          link: "#",
        },
        {
          title: "PHUN MÀU THẨM MỸ",
          description: "Lớp phun xăm: 10.000.000đ",
          image: images.itemTrain2,
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
