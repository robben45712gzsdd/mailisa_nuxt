<template>
  <div
    :style="{ backgroundImage: `url(${images?.trangmoi})` }"
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
              class="bottom-10 left-1/2 absolute  px-4 py-3 !w-fit text-md uppercase -translate-x-1/2 transform"
              :text="item.title"
            />
          </div>
        </SlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import { images } from "~/assets/imgs";
import ButtonCustom from "../ButtonCustom/index.vue";

export default {
  name: "SlideHaTang",
  components: { ButtonCustom },
  props: {
    slidesToShow: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      images, 
      listIntroViews: [
        { image: images.noithat4, title: "Phòng phẫu thuật" },
        { image: images.quaytuvan, title: "Quầy tư vấn" },
        { image: images.bitmap2, title: "Phòng phun màu" },
        { image: images.noithat4_2, title: "Nội thất" },
        { image: images.noithat3, title: "Không gian" },
        { image: images.noithat3_2, title: "Phòng điều trị da" },
      ],
      settingsIntroView: {
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 4,
        autoplaySpeed: 2000,
        responsive: [
          { breakpoint: 1280, settings: { slidesToShow: 3 } },
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      },
    };
  },
};
</script>
<style>
.introview::before,
.introview::after,
.employee::before,
.employee::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 4.6875rem;
  left: 50%;
  transform: translateX(-50%);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;
}

.introview::before {
  top: -9%;
  transform: translateX(-50%) rotate(180deg);
  background-position-x: center;
  background-image: url("@/assets/imgs/pattern_new_1.png");;
}

.introview::after {
  bottom: -9%;
  background-position-x: center;
  background-image: url("@/assets/imgs/pattern_new_1.png");;
}
</style>
