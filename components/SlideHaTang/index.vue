<template>
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
          class="bottom-4 left-1/2 absolute px-4 py-3 !w-fit text-lg uppercase -translate-x-1/2 transform"
          :text="item.title"
        />
      </div>
    </SlickCarousel>
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
        slidesToShow: this.slidesToShow,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
      },
    };
  },
};
</script>
