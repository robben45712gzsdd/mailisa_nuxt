<template>
  <div>
    <!-- Ảnh đào tạo -->
    <img :src="images.daoTao" alt="Đào tạo" />

    <!-- Background và lý do -->
    <div class="relative overflow-hidden">
      <img :src="images.bgdt_02_1" alt="bg đào tạo" class="w-full h-auto" />
      <img :src="images.lydo6" alt="Lý do"
        class="top-1/2 left-[7.8125rem] z-[3] absolute w-[51.5625rem] max-w-full max-h-[90%] object-contain -translate-y-1/2" />
    </div>


    <!-- Slider hướng dẫn học viên -->
    <div>
      <div class="mt-5 py-10 container">
        <HeadingTitle title="GIÁM ĐỐC MAILISA VÀ TGĐ ĐIỀU HÀNH HOÀNG KIM KHÁNH TẬN TAY HƯỚNG DẪN HỌC VIÊN" />

        <div class="mt-10">
          <SlickCarousel v-bind="settings">
            <div v-for="(item, index) in listImagesBanner" :key="index">
              <img :src="item" class="rounded-2xl" alt="banner" />
            </div>
          </SlickCarousel>
        </div>
      </div>
    </div>

    <div class="flex md:flex-row flex-col items-stretch gap-4 mb-12 pb-12 min-h-80 container">
      <div class="flex-1">
        <iframe loading="lazy" :src="'https://www.youtube.com/embed/6VI5kHwWxAY?si=d7yzrAwDpUk7Ehla'"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-2xl w-full h-full"></iframe>
        <p class="mt-2 text-secondary text-sm text-center">
          Vẽ Thiết Kế Chân Mày cho Chị Khách
        </p>
      </div>
      <div class="flex-1">
        <iframe loading="lazy" :src="'https://www.youtube.com/embed/zsnmNM0LxW8?si=a1SEVOm9Srxoec02'"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-2xl w-full h-full"></iframe>
        <p class="mt-2 text-secondary text-sm text-center">
          Phun Mày Chạm Hạt Sương Bay Mailisa
        </p>
      </div>
    </div>

    <div
      :class="`bg-[url('${require('@/assets/imgs/phau-thuat-tham-my.png.webp')}')] bg-no-repeat bg-center my-10 bg-cover w-full py-10`">
      <SignupForConsultation classText="text-white"  />
    </div>


    <!-- Báo chí -->
    <NewsPress />
  </div>
</template>

<script>
import { images } from "@/assets/imgs";
import BoxService from "@/components/BoxService";
import HeadingTitle from "@/components/HeadingTitle";
import SignupForConsultation from "@/components/SignupForConsultation";
import NewsPress from "@/components/NewsPress";
export default {
  name: "Training",
  components: {
    BoxService,
    HeadingTitle,
    SignupForConsultation,
    NewsPress,
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
      listIntroViews: [
        { image: images.noithat4, title: "Phòng phẫu thuật" },
        { image: images.quaytuvan, title: "Quầy tư vấn" },
        { image: images.bitmap2, title: "Phòng phun màu" },
        { image: images.noithat3_2, title: "Phòng điều trị da" },
      ],
      settingsIntroView: {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      },
      pressLogos: [
        require("@/assets/imgs/Bitmap-7.png"),
        require("@/assets/imgs/Bitmap-8.png"),
        require("@/assets/imgs/Bitmap-9.png"),
        require("@/assets/imgs/789.png"),
        require("@/assets/imgs/0909.png"),
        require("@/assets/imgs/1023.png"),
        require("@/assets/imgs/1122.png"),
        require("@/assets/imgs/78970.png"),
      ],

      settingsPress: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        pauseOnHover: true,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      },
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
