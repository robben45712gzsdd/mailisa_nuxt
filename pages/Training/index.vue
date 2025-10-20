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
      <div class="container mt-5 py-6 md:py-10">
        <h2 class="text-white text-center text-2xl font-bold">
          CÁC KHÓA ĐÀO TẠO TẠI MAILISA
        </h2>
        <div
          class="gap-2 md:gap-4 mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center"
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
      <div class="container mt-5 py-6 md:py-10">
        <HeadingTitle
          title="GIÁM ĐỐC MAILISA VÀ TGĐ ĐIỀU HÀNH HOÀNG KIM KHÁNH TẬN TAY HƯỚNG DẪN HỌC VIÊN"
        />

        <div class="mt-10">
          <SlickCarousel v-bind="settings">
            <div v-for="(item, index) in listImagesBanner" :key="index">
              <img :src="item" class="rounded-2xl" alt="banner" />
            </div>
          </SlickCarousel>
        </div>
      </div>
    </div>

    <div class="flex md:flex-row flex-col items-stretch gap-2 md:gap-4 container min-h-80">
      <div class="flex-1">
        <iframe
          loading="lazy"
          :src="'https://www.youtube.com/embed/6VI5kHwWxAY?si=d7yzrAwDpUk7Ehla'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="rounded-2xl w-full h-full"
        ></iframe>
        <p class="mt-2 text-secondary text-sm text-center">
          Vẽ Thiết Kế Chân Mày cho Chị Khách
        </p>
      </div>
      <div class="flex-1">
        <iframe
          loading="lazy"
          :src="'https://www.youtube.com/embed/zsnmNM0LxW8?si=a1SEVOm9Srxoec02'"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="rounded-2xl w-full h-full"
        ></iframe>
        <p class="mt-2 text-secondary text-sm text-center">
          Phun Mày Chạm Hạt Sương Bay Mailisa
        </p>
      </div>
    </div>

    <Docter />

    <!-- Cơ sở vật chất -->
    <div
      :style="{ backgroundImage: `url(${images.trangmoi})` }"
      class="relative bg-cover bg-no-repeat bg-center introview"
    >
      <div class="flex flex-col justify-center items-center py-6 md:py-10">
        <h1
          class="pt-10 font-bold text-white text-lg md:text-2xl px-4 text-center uppercase container"
          data-aos="fade-right"
          data-aos-duration="1000"
          delay="200"
        >
          CƠ SỞ HẠ TẦNG KHANG TRANG SẠCH ĐẸP ĐẢM BẢO 2 TỪ “THẨM MỸ”
        </h1>
        <h1
          class="font-bold text-white text-lg md:text-2xl px-4 text-center uppercase"
          data-aos="fade-right"
          data-aos-duration="1000"
          delay="200"
        >
          KHÔNG GIAN NỘI THẤT SANG TRỌNG THOÁNG MÁT ĐẠT TIÊU CHUẨN 5 SAO
        </h1>

        <div
          class="pb-8 w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <client-only>
            <SlickCarousel v-bind="settingsIntroView">
              <div
                v-for="(item, index) in listIntroViews"
                :key="index"
                class="relative flex flex-col justify-center items-center"
              >
                <div class="p-6 w-full max-h-90">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="rounded-lg object-cover"
                  />
                </div>

                <ButtonCustom
                  class="bottom-4 left-1/2 absolute px-4 py-3 !w-fit text-lg uppercase -translate-x-1/2 transform"
                  :text="item.title"
                />
              </div>
            </SlickCarousel>
          </client-only>
        </div>
      </div>
    </div>

    <!-- Báo chí -->
     <NewsPress />
  </div>
</template>

<script>
import { images } from "@/assets/imgs";
import BoxService from "@/components/BoxService";
import HeadingTitle from "@/components/HeadingTitle";
import Docter from "@/components/Docter";
import NewsPress from "@/components/NewsPress";
export default {
  name: "Training",
  components: {
    BoxService,
    HeadingTitle,
    Docter,
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
          { breakpoint: 768, settings: { slidesToShow: 2 } },
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
