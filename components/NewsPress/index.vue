<template>
  <div class="my-4 px-10 py-4 container">
    <HeadingTitle title="BÁO CHÍ NÓI GÌ VỀ MAILISA" />
    <div class="mx-auto mt-5 p-4 border border-pink-300 rounded-2xl w-full">
      <client-only>
        <SlickCarousel v-bind="settingsPress">
          <div
            v-for="(img, i) in pressLogos"
            :key="i"
            class="flex justify-center items-center px-6"
          >
            <img
              :src="img"
              :alt="`logo-${i}`"
              class="mx-auto w-auto h-[50px] object-contain"
            />
          </div>
        </SlickCarousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import HeadingTitle from "@/components/HeadingTitle";
export default {
  name: "NewsPress",
  data() {
    return {

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
    };
  },
};
</script>
