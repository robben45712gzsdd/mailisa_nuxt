<template>
  <div>
    <img :src="images.bannerPhauThuat" alt="" />

    <!-- Dịch vụ nổi bật -->
    <div class="py-12 w-full"
      :class="'bg-[url(' + require('@/assets/imgs/BG-1-100.jpg.webp') + ')] bg-no-repeat bg-center bg-cover'">
      <div class="container">
        <HeadingTitle title="NHỮNG KHÁCH HÀNG NÊN SỬ DỤNG DỊCH VỤ NÂNG CUNG CHÂN MÀY" />
        <div class="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-12">
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

      <div class="py-12 container">
        <HeadingTitle title="NHỮNG ƯU ĐIỂM KHI NÂNG CUNG CHÂN MÀY TẠI MAILISA MÀ KHÁCH HÀNG YÊU THÍCH" />
        <img src="@/assets/imgs/6uudiem.png" alt="NhỮng ưu điểm" />
      </div>
    </div>

    <!-- Bác sĩ tư vấn -->
    <div class="relative" :class="'bg-[url(' + images.tuvan1 + ')] bg-no-repeat bg-center bg-cover'">
      <div class="w-full doctor">
        <div class="container">
          <div class="flex justify-center items-center gap-6">
            <div class="col-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="300" data-aos-duration="700">
              <div class="py-10">
                <img src="@/assets/imgs/nang-cung-chan-may-mailisa.jpg.webp" class="shadow-md rounded-lg"
                  alt="Bác sĩ tư vấn" />
              </div>
            </div>

            <div class="text-white col-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300"
              data-aos-duration="700">
              <div>
                <img src="@/assets/imgs/Asset-16.png" alt="" class="h-30">
              </div>
              <div class="text-lg italic">
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
      <div class="py-12 container">
        <HeadingTitle title="QUY TRÌNH NÂNG CUNG CHÂN MÀY PERFECT FORM" />
        <!-- Slider slick -->
        <HeadingTitle classText="!text-sm text-gradient" title="(Mỗi ca làm thường được thực hiện trong khoảng 15-20 phút)" />
      </div>

      <div class="container">
        <SlickCarousel v-bind="settingsIntroView">
          <div class="flex justify-center items-center p-3" v-for="_ in 6">
            <div class="relative py-12 w-full max-w-md">
              <!-- Step Badge -->
              <div class="top-0 left-1/2 z-10 absolute flex justify-center -translate-x-1/2 transform">
                <div class="relative">
                  <div class="relative flex justify-center items-center w-32 h-32 step">
                    <span class="z-10 pb-1 font-bold text-white text-xl">BƯỚC 1</span>
                  </div>
                </div>
              </div>
  
              <!-- Image Card -->
              <div class="mb-2 pr-6 rounded-3xl overflow-hidden">
                <img src="https://mailisa.com/wp-content/uploads/2024/01/Cac-Buoc-Thuc-Hien-Cac-DV-Phau-Thuat-01.png.webp"
                  alt="Medical consultation" class="object-cover aspect-square" />
              </div>
  
              <!-- Description Arrow -->
              <div class="-z-1 py-6 pr-10 pl-2 rounded-2xl text-white -translate-y-12 transform"
                :class="'bg-[url(' + require('@/assets/imgs/step_arrow_d4.png') + ')]  bg-no-repeat bg-center bg-contain'">
                <p class="pt-5 text-[12px] text-center">
                  Bác sĩ, y tá thăm khám sức khỏe, kiểm tra tình trạng vùng chân mày và phân tích mí trên.
                </p>
              </div>
            </div>
          </div>
        </SlickCarousel>
      </div>
    </Docter>





    <SlideHaTang />

    <!-- Đăng ký -->
    <div class="py-12 w-full"
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
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
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
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.employee_surgery::after {
  bottom: -8%;
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.doctor::before {
  top: -8%;
  transform: translateX(-50%) rotate(180deg);
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.doctor::after {
  bottom: -8%;
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
