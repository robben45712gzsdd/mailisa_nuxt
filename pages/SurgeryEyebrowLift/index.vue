<template>
  <div>
    <img :src="images.bannerPhauThuat" alt="" />

    <!-- Dịch vụ nổi bật -->
    <div class="py-6 md:py-12 w-full"
      :class="'bg-[url(' + require('@/assets/imgs/BG-1-100.jpg.webp') + ')] bg-no-repeat bg-center bg-cover'">
      <div class="container">
        <HeadingTitle title="NHỮNG KHÁCH HÀNG NÊN SỬ DỤNG DỊCH VỤ NÂNG CUNG CHÂN MÀY" />
        <div class="gap-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 my-12">
          <div v-for="(item, index) in dataService" :key="index" class="bg-white border-secondary rounded-lg">
            <div class="flex flex-col justify-between items-center">
              <div class="flex items-center gap-2">
                <img :src="item.img" alt="Khách hàng" />
              </div>
              <span class="p-6 font-bold text-md text-secondary text-center">
                {{ item.desc }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="py-6 md:py-12 container">
        <HeadingTitle title="NHỮNG ƯU ĐIỂM KHI NÂNG CUNG CHÂN MÀY TẠI MAILISA MÀ KHÁCH HÀNG YÊU THÍCH" />
        <img src="@/assets/imgs/6uudiem.png" alt="NhỮng ưu điểm" />
      </div>
    </div>

    <!-- Bác sĩ tư vấn -->
    <div class="relative" :class="'bg-[url(' + images.tuvan1 + ')] bg-no-repeat bg-center bg-cover'">
      <div class="my-12 w-full doctor">
        <div class="container">
          <div class="flex md:flex-row flex-col justify-center items-center gap-10">
            <div class="col-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="300" data-aos-duration="700">
              <div class="py-6 md:py-10">
                <img src="@/assets/imgs/nang-cung-chan-may-mailisa.jpg.webp" class="shadow-md rounded-lg"
                  alt="Bác sĩ tư vấn" />
              </div>
            </div>

            <div class="text-white col-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300"
              data-aos-duration="700">
              <div>
                <img src="@/assets/imgs/Asset-16.png" alt="" class="h-20 md:h-30 object-contain" />
              </div>
              <div class="text-2xl italic">
                Bác sĩ tư vấn, thiết kế
                xác định lượng da dư, da chùng chảy xệ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Docter>

      <!-- Tiêu chuẩn -->
      <div class="py-6 md:py-12 container">
        <HeadingTitle title="TRANG THIẾT BỊ, DỤNG CỤ TRONG PHÒNG PHẪU THUẬT" />
        <div data-aos="fade-up" data-aos-duration="1000" class="flex justify-center items-center py-2 text-center">
          <NamSaoIcon :fill="'#e1006e'" class="w-25 h-25" />
          <h2 class="font-starcity text-primary-dark text-6xl">Đạt tiêu chuẩn</h2>
          <img :src="images.NamSao" alt="" />
          <NamSaoIcon class="w-25 h-25 [transform:rotateY(180deg)]" :fill="'#e1006e'" />
        </div>

        <!-- Slider slick -->
        <HeadingTitle title="ĐƯỢC BỘ Y TẾ CẤP PHÉP" />
        <SlickCarousel v-bind="settingsIntroView">
          <div v-for="(item, index) in listIntroViews" :key="index"
            class="relative flex flex-col justify-center items-center">
            <div class="p-6 w-full max-h-90">
              <img :src="item.image" :alt="item.title" class="rounded-lg object-cover" />
            </div>
          </div>
        </SlickCarousel>
      </div>
    </Docter>


    <SlideHaTang />

    <!-- Đăng ký -->
    <div class="py-6 md:py-12 w-full"
      :class="'bg-[url(' + require('@/assets/imgs/Artboard-5.png.webp') + ')] bg-no-repeat bg-center bg-cover'">
      <SignupForConsultation classText="text-secondary" />
    </div>

    <!-- Báo chí  -->
    <NewsPress />
  </div>
</template>

<script>
import { NamSaoIcon } from "@/assets/icons";
import { images } from "@/assets/imgs";
import Docter from "@/components/Docter";
import HeadingTitle from "@/components/HeadingTitle";
import OutstandingService from "@/components/OutstandingService";
import ButtonCustom from "@/components/ButtonCustom";
import SignupForConsultation from "@/components/SignupForConsultation";
import CustomerSection from "@/components/CustomerSection";
import NewsPress from "@/components/NewsPress";
import SlideHaTang from "@/components/SlideHaTang";
export default {
  name: "CosmeticSurgery",
  components: {
    NamSaoIcon,
    SlideHaTang,
    Docter,
    HeadingTitle,
    OutstandingService,
    ButtonCustom,
    SignupForConsultation,
    CustomerSection,
    NewsPress,
  },
  data() {
    return {
      images,
      dataService: [
        {
          "index": 1,
          "img": require("@/assets/imgs/2-100-6.jpg"),
          "desc": "Da chùng, da nhão chảy xệ ở vùng mắt gần đuôi chân mày"
        },
        {
          "index": 2,
          "img": require("@/assets/imgs/3-100-7.jpg"),
          "desc": "Da chùng che đi nếp mí, hạn chế tầm nhìn của khách"
        },
        {
          "index": 3,
          "img": require("@/assets/imgs/4-100-5.jpg"),
          "desc": "Muốn trẻ hóa khuôn mặt"
        },
        {
          "index": 4,
          "img": require("@/assets/imgs/5-100-3.jpg"),
          "desc": "Người phun chân mày bị lỗi, dáng mày cao quá, thấp quá, hoặc xóa màu da"
        }
      ],
      listIntroViews: [
        { image: images.FIXWEB_81, title: "Phòng phẫu thuật" },
        { image: images.FIXWEB_82, title: "Quầy tư vấn" },
        { image: images.tieuchuansao1, title: "Phòng phun màu" },
        { image: images.tieuchuansao4, title: "Nội thất" },
      ],
      settingsIntroView: {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
        ],
      },
    };
  },
};
</script>

<style scoped>
.iframe_wrap iframe {
  width: 100%;
  height: 315px;
  border-radius: 12px;
}

.employee_surgery::before,
.employee_surgery::after,
.doctor::before,
.doctor::after {
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

.employee_surgery::before {
  top: -8%;
  transform: translateX(-50%) rotate(180deg);
  background-position-x: center;
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.employee_surgery::after {
  bottom: -8%;
  background-position-x: center;
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.doctor::before {
  top: -8%;
  transform: translateX(-50%) rotate(180deg);
  background-position-x: center;
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.doctor::after {
  bottom: -8%;
  background-position-x: center;
  background-image: url("@/assets/imgs/pattern_new_1.png");
}


.step::before {
  content: "";
  position: absolute;
  width: 150px;
  height: 120px;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  background-image: url("@/assets/imgs/bg_step_name.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
