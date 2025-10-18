<template>
  <div>
    <img :src="images.bannerPhauThuat" alt="" />

    <!-- Dịch vụ nổi bật -->
    <OutstandingService :data="dataService" />

    <!-- Bác sĩ tư vấn -->
    <div class="relative">
      <img :src="images.tuvan1" alt="" />

      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <div class="container">
          <div class="flex items-center justify-center gap-6">
            <div
              class="col-6 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="700"
            >
              <div class="img_wrap">
                <img :src="images.tuvan2" alt="" />
              </div>
            </div>

            <div
              class="col-6 aos-init aos-animate text-white"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="700"
            >
              <div>
                <span class="text-2xl font-bold flex items-center">
                  <svg
                    width="50"
                    height="38"
                    viewBox="0 0 65 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_500)">
                      <path
                        d="M39.6014 32.131C39.3882 31.8936 39.1749 31.6778 38.9403 31.6778C36.8078 29.5199 34.6753 27.2326 32.6493 24.7726C30.6687 22.3532 28.926 19.7442 27.4459 16.9826C26.5049 15.2257 25.7883 13.3549 25.3134 11.4152C24.8467 9.35308 24.9202 7.20339 25.5266 5.17886C26.0932 3.40438 27.2451 1.88075 28.7894 0.863072C29.6921 0.283781 30.7311 -0.0415801 31.7994 -0.0795088C32.8676 -0.117437 33.9266 0.13344 34.8672 0.647286C35.946 1.29971 36.8418 2.22092 37.4689 3.32307C38.3285 4.7348 38.8472 6.33164 38.983 7.98413C39.4308 10.6599 39.6441 13.3357 39.8573 16.0115C40.0706 19.3562 40.0706 22.4852 40.0706 25.8083C40.0706 27.362 39.8573 29.1531 39.8573 30.7068C39.7043 31.1664 39.6181 31.6462 39.6014 32.131Z"
                        fill="#FFF"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_500">
                        <rect width="65" height="56.5584" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  BÁC SĨ TƯ VẤN THĂM KHÁM
                </span>
              </div>
              <div>
                Bác sĩ thăm khám để xác định điểm khiếm khuyết và đưa ra phương
                pháp, công nghệ phù hợp với từng khách hàng.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Docter />

    <!-- Tiêu chuẩn -->
    <div class="container">
      <HeadingTitle title="TRANG THIẾT BỊ, DỤNG CỤ TRONG PHÒNG PHẪU THUẬT" />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="flex items-center py-10 justify-center text-center"
      >
        <NamSaoIcon :fill="'#e1006e'" class="w-25 h-25" />
        <h2 class="text-primary-dark font-starcity text-6xl">
          Đạt tiêu chuẩn
        </h2>
        <img :src="images.NamSao" alt="" />
        <NamSaoIcon
          class="[transform:rotateY(180deg)] w-25 h-25"
          :fill="'#e1006e'"
        />
      </div>
    </div>

    <!-- Slider slick -->
    <HeadingTitle title="ĐƯỢC BỘ Y TẾ CẤP PHÉP" />
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
      </div>
    </SlickCarousel>

    <!-- Nhân viên & video -->
    <div
      class="bg-cover bg-center bg-no-repeat w-full h-[600px] mt-10"
      :style="{ backgroundImage: `url(${images.doingunhanvien})` }"
    >
      <div class="container py-10">
        <h2 class="text-white text-center text-2xl font-bold">
          ĐỘI NGŨ NHÂN VIÊN - CHẾ ĐỘ CHĂM SÓC HẬU MÃI TỐT <br />
          CHO TỪNG KHÁCH HÀNG SAU KHI LÀM DỊCH VỤ
        </h2>
        <div class="flex gap-4 mt-6">
          <div class="w-1/2 p-4 rounded-lg">
            <div class="iframe_wrap">
              <iframe
                loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SP1QQrKS5ew?si=oZwMyd-OBpfM_vIC"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="w-1/2 p-4 rounded-lg">
            <div class="iframe_wrap">
              <iframe
                loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lH1y3UZ1geU?si=nvnIQDmVbnxOFaDn"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Đăng ký -->
    <div
      class="flex flex-wrap md:flex-nowrap items-stretch w-full max-w-7xl mx-auto mt-10 px-6 gap-6"
    >
      <div class="md:w-7/12 w-full flex flex-col items-center text-center">
        <HeadingTitle title="Đăng ký nhận tư vấn ngay" />
        <img
          :src="images.hoaHau3"
          alt="phun mày chạm hạt sương bay"
          class="w-full h-auto object-contain rounded-lg"
        />
      </div>

      <div
        class="container w-full h-auto bg-cover bg-center rounded-[1.5rem] py-12 flex flex-col justify-center text-center"
        :style="{ backgroundImage: `url(${images.doingunhanvien})` }"
      >
        <h2 class="text-white text-2xl font-bold mb-12 leading-tight">
          ĐĂNG KÝ <br /> NHẬN TƯ VẤN
        </h2>
        <form class="flex flex-col items-center space-y-4 w-full">
          <input
            type="text"
            placeholder="Họ & Tên"
            class="w-full bg-white p-4 rounded-xl text-gray-800"
            required
          />
          <input
            type="tel"
            placeholder="Số điện thoại của bạn"
            class="w-full bg-white p-4 rounded-xl text-gray-800"
            required
          />
          <ButtonCustom>
            ĐẶT LỊCH NGAY
          </ButtonCustom>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { NamSaoIcon } from "@/assets/icons";
import { images } from "@/assets/imgs";
import Docter from "@/components/Docter";
import HeadingTitle from "@/components/HeadingTitle";
import OutstandingService from "@/components/OutstandingService";
 import ButtonCustom from "@/components/ButtonCustom";
export default {
  name: "CosmeticSurgery",
  components: {
    NamSaoIcon,
    Docter,
    HeadingTitle,
    OutstandingService,
    ButtonCustom,
  },
  data() {
    return {
      images,
      dataService: [
        {
          title: "NÂNG CUNG CHÂN MÀY TRỰC TIẾP PERFECT FORM",
          desc: "Giúp loại bỏ chính xác lượng da dư, da chùng một cách nhanh chóng và an toàn...",
          img: images.Artboard_5_5,
          link: "",
        },
        {
          title: "TẠO HÌNH MẮT 2 MÍ PERFECT LINE",
          desc: "Giúp bạn sở hữu đôi mắt 2 mí tự nhiên...",
          img: images.Artboard_16,
          link: "",
        },
        {
          title: "PHẪU THUẬT KHÂU TẠO HÌNH MẮT 2 MÍ",
          desc: "Với kỹ thuật đường mí tinh tế...",
          img: images.Artboard_17,
          link: "",
        },
        {
          title: "PHẪU THUẬT CẮT DA DƯ LẤY BỌNG MỠ MI DƯỚI",
          desc: "Loại bỏ chính xác lượng da dư, da chùng...",
          img: images.Artboard_18,
          link: "",
        },
        {
          title: "PHẪU THUẬT NÂNG MŨI SILKFORM 3D",
          desc: "Bác sĩ sẽ tạo dáng mũi vi chạm phù hợp khuôn mặt.",
          img: images.Artboard_19,
          link: "",
        },
        {
          title: "PHẪU THUẬT THU GỌN CÁNH MŨI",
          desc: "Đây là tiểu phẫu nhỏ được gây tê cục bộ nên hoàn toàn không đau.",
          img: images.Artboard_20,
          link: "",
        },
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
</style>
