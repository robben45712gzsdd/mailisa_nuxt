<template>
  <div>
    <!-- Slider banner -->
    <div>
      <client-only>
        <SlickCarousel v-bind="settings">
          <div v-for="(item, index) in listImagesBanner" :key="index">
            <img :src="item" alt="banner" />
          </div>
        </SlickCarousel>
      </client-only>
    </div>

    <!-- Giới thiệu -->
    <div class="flex md:flex-row flex-col justify-center items-center gap-5 my-10 container">
      <img :src="images.mailisaSeminor" alt="mailisaSeminor" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="200" />
      <div class="flex flex-col justify-center items-center" data-aos="fade-left" data-aos-duration="1000"
        data-aos-delay="200">
        <h2 class="font-bold text-gradient text-2xl">THẨM MỸ VIỆN MAILISA</h2>
        <p class="font-semibold text-primary-dark text-center">
          MAILISA – Thương hiệu thẩm mỹ hàng đầu Việt Nam
        </p>
        <p class="mb-2 font-semibold text-primary-dark text-center">
          27 năm – Mang đến cho bạn vẻ đẹp tự nhiên
        </p>
        <img :src="images.born1998" alt="mailisaSeminor" />
      </div>
    </div>

    <!-- Dịch vụ nổi bật -->
    <div :style="{ backgroundImage: `url(${images.bgService})` }" class="bg-cover bg-no-repeat bg-center">
      <div class="py-12 container">
        <div class="flex flex-col md:flex-b justify-center items-center gap-5 my-10">
          <h1 class="font-bold text-white text-2xl uppercase">
            CÁC DỊCH VỤ NỔI BẬT TẠI MAILISA
          </h1>

          <div class="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <BoxService v-for="(service, index) in listServiceFuture" :key="index" v-bind="service" />
          </div>
        </div>
      </div>
    </div>

    <!-- Đội ngũ bác sĩ -->
    <Docter />

    <!-- Cơ sở vật chất -->
    <div :style="{ backgroundImage: `url(${images.trangmoi})` }"
      class="relative bg-cover bg-no-repeat bg-center introview">
      <div class="flex flex-col justify-center items-center py-10">
        <h1 class="pt-10 font-bold text-white text-2xl text-center uppercase container" data-aos="fade-right"
          data-aos-duration="1000" delay="200">
          CƠ SỞ HẠ TẦNG KHANG TRANG SẠCH ĐẸP ĐẢM BẢO 2 TỪ “THẨM MỸ”
        </h1>
        <h1 class="font-bold text-white text-2xl text-center uppercase" data-aos="fade-right" data-aos-duration="1000"
          delay="200">
          KHÔNG GIAN NỘI THẤT SANG TRỌNG THOÁNG MÁT ĐẠT TIÊU CHUẨN 5 SAO
        </h1>

        <div class="pb-8 w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <client-only>
            <SlickCarousel v-bind="settingsIntroView">
              <div v-for="(item, index) in listIntroViews" :key="index"
                class="relative flex flex-col justify-center items-center">
                <div class="p-6 w-full max-h-90">
                  <img :src="item.image" :alt="item.title" class="rounded-lg object-cover" />
                </div>

                <ButtonCustom
                  class="bottom-4 left-1/2 absolute px-4 py-3 !w-fit text-lg uppercase -translate-x-1/2 transform"
                  :text="item.title" />
              </div>
            </SlickCarousel>
          </client-only>
        </div>
      </div>
    </div>

    <!-- Khách hàng -->
    <CustomerSection :backgroundImage="require('@/assets/imgs/bgCustomer.png')"
      title="CẬN CẢNH KHÁCH HÀNG LÀM DỊCH VỤ TẠI MAILISA"
      videoUrl="https://www.youtube.com/embed/UpnOtVd36D0?si=58bioOW3rKvX9xXg" :items="[
        { image: images.image9e02, title: 'Phun Môi Silk Lip Tại Mailisa' },
        { image: images.image9e03, title: 'Phun Mày Đẹp Tự Nhiên Mailisa' }
      ]"
      :description="`Thành lập từ năm 1998, sau hơn 27 năm đứng vững trên thị trường, thẩm mỹ viện Mailisa hiện đã trở thành một trong những thương hiệu thẩm mỹ viện chăm sóc sắc đẹp, một địa chỉ đáng tin cậy, hội tụ đủ 6 tiêu chí: Công nghệ thẩm mỹ hiện đại, quy tụ đội ngũ bác sĩ thẩm mỹ giỏi, dịch vụ thẩm mỹ hoàn hảo. Trong suốt thời gian qua, Mailisa luôn là điểm đến chăm sóc sắc đẹp đáng tin cậy của khách hàng.`">
      <template #default>
        <div class="flex flex-col items-center gap-6 mt-8 w-full">
          <HeadingTitle title="MÀU MỰC - MỸ PHẨM" />
          <HeadingTitle title="RÕ NGUỒN GỐC XUẤT XỨ ĐƯỢC BỘ Y TẾ KIỂM ĐỊNH" />
          <img data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
            src="@/assets/imgs/ALL-DOCTOR-MAGIC-03.png" alt="Ảnh chứng nhận" />
        </div>
      </template>
    </CustomerSection>

    <!-- Nhân viên  -->
    <div :style="{ backgroundImage: `url(${require('@/assets/imgs/Doi-ngu-nhan-vien-1-240x300-1.png.webp')})` }"
      class="relative bg-cover bg-no-repeat bg-center py-10 employee">
      <div class="flex flex-col justify-center items-center">
        <h1 class="pt-10 font-bold text-white text-2xl text-center uppercase container" data-aos="fade-right"
          data-aos-duration="1000" delay="200">
          ĐỘI NGŨ NHÂN VIÊN - CHẾ ĐỘ CHĂM SÓC HẬU MÃI TỐT
        </h1>
        <h1 class="font-bold text-white text-2xl text-center uppercase" data-aos="fade-right" data-aos-duration="1000"
          delay="200">
          CHO TỪNG KHÁCH HÀNG SAU KHI LÀM DỊCH VỤ
        </h1>

        <div class="pb-8 w-full container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <client-only>
            <SlickCarousel v-bind="settingsEmployees">
              <div v-for="(item, index) in listEmployees" :key="index"
                class="relative flex flex-col justify-center items-center">
                <div class="p-6 w-full h-full">
                  <img :src="item.image" :alt="'Ảnh nhân viên'"
                    class="rounded-lg w-full h-[50vh] object-cover overflow-hidden" />
                </div>
              </div>
            </SlickCarousel>
          </client-only>
          <div class="flex md:flex-row flex-col items-stretch gap-4 h-80 container">
            <div class="flex-1">
              <iframe loading="lazy" :src="'https://www.youtube.com/embed/SP1QQrKS5ew?si=fnwsRy4x_i1ks3UT'"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                class="rounded-2xl w-full h-full"></iframe>
              <p class="mt-2 text-white text-sm text-center">
                Tại Sao Thẩm Mỹ Viện Mailisa Tòa Nhà To Bự Nhân Viên Đông Mà Giá Lại Tốt Như Vậy
              </p>
            </div>
            <div class="flex-1">
              <iframe loading="lazy" :src="'https://www.youtube.com/embed/MBwfJptb7Bc?si=L0wHI5rwEhlr7cCC'"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                class="rounded-2xl w-full h-full"></iframe>
              <p class="mt-2 text-white text-sm text-center">
                Thẩm Mỹ Viện Mailisa Khách Hàng Lúc Nào Cũng Đông Như Trẩy Hội
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxService from "@/components/BoxService";
import ButtonCustom from "@/components/ButtonCustom";
import CustomerSection from "@/components/CustomerSection";
import Docter from "@/components/Docter";
import HeadingTitle from "@/components/HeadingTitle";
import { images } from "~/assets/imgs";

export default {
  components: {
    BoxService,
    ButtonCustom,
    Docter,
    CustomerSection,
    HeadingTitle,
  },
  data() {
    return {
      images,
      listImagesBanner: [
        images.bannerDoctor,
        images.bannerWeb,
        images.bannerDoctor2,
      ],
      listServiceFuture: [
        {
          title: "PHUN MÀU THẨM MỸ",
          description:
            "Phun xăm thẩm mỹ gồm các dịch vụ chính: Phun chân mày, Phun môi, Phun mí, Xóa sửa mày môi mí làm ở chỗ khác bị hư",
          image: images.phummauthammyservice,
          link: "/phun-mau-tham-my/",
        },
        {
          title: "LÀM ĐẸP BẰNG BOTOX",
          description:
            "Làm đẹp bằng botox gồm các dịch vụ : Botox loại bỏ nếp nhăn mắt, Botox loại bỏ nếp nhăn mày, Botox loại bỏ nếp nhăn trán, Botox nâng cơ thái dương, Botox nâng cung mày, Botox loại bỏ nếp nhăn cổ, Botox điều chỉnh cười hở lợi, Botox khóe cười, Botox làm thon gọn nguyên mặt, Botox thon gọn bắp tay, Botox thon gọn bắp chân, Botox loại bỏ tăng tiết mồ hôi nách, Botox làm thon gọn hàm cơ nhai",
          image: images.lamdepbangbotox,
          link: "/lam-dep-bang-botox/",
        },
        {
          title: "PHẪU THUẬT THẨM MỸ",
          description:
            "Phẫu thuật thẩm mỹ gồm các dịch vụ chính: Nâng cung chân mày trực tiếp Perfect Form, nâng mũi siêu tạo hình Nano Form...",
          image: images.phauthuat,
          link: "/phau-thuat-tham-my/",
        },
        {
          title: "ĐIỀU TRỊ DA",
          description:
            "Điều trị da gồm các dịch vụ chính : Điều trị mụn, Điều trị tàn nhang, Điều trị nám, Điều trị bớt sắc tố, Điều trị đồi mồi, chăm sóc căng bóng trẻ hóa da ...",
          image: images.dieutrida,
          link: "/dieu-tri-da/",
        },
        {
          title: "LÀM ĐẸP BẰNG FILLER",
          description:
            "Tạo cằm Vline, Làm đầy thái dương, Làm đầy rãnh cười, Làm đầy má hóp, Làm đầy nếp nhăn tĩnh, Làm đầy tạo hình tai tài lộc, Làm đầy trũng mắt, Tạo đường line viền hàm",
          image: images.lamdepbangfilter,
          link: "/lam-dep-bang-filler/",
        },
        {
          title: "MỸ PHẨM CHÍNH HÃNG",
          description:
            "Mỹ phẩm Doctor Magic được bộ y tế cấp phép lưu hành trên toàn quốc, chiết xuất từ thiên nhiên phù hợp với mọi làn da.",
          image: images.mypham,
          link: "/my-pham-chinh-hang/",
        },
      ],
      listCertificates: [
        {
          images: images.assets6,
          title: "LÀM ĐẸP THÀNH CÔNG CHO HÀNG TRIỆU KHÁCH HÀNG",
        },
        {
          images: images.kyniem27nawm,
          title: "27 NĂM KINH NGHIỆM TRONG NGÀNH THẨM MỸ",
        },
      ],
      listIntroViews: [
        { image: images.noithat4, title: "Phòng phẫu thuật" },
        { image: images.quaytuvan, title: "Quầy tư vấn" },
        { image: images.bitmap2, title: "Phòng phun màu" },
        { image: images.noithat3_2, title: "Phòng điều trị da" },
      ],
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
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
      listEmployees: [
        {
          image: require("@/assets/imgs/nhanvien1.webp"),
        },
        {
          image: require("@/assets/imgs/nhanvien2.jpg"),
        },
      ],
      settingsEmployees: {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },

    };
  },
};
</script>

<style scoped>
.introview::before,
.introview::after, 
.employee::before,
.employee::after
{
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
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.introview::after {
  bottom: -9%;
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.employee::before {
  top: -5%;
  transform: translateX(-50%) rotate(180deg);
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.employee::after {
  bottom: -5%;
  background-image: url("@/assets/imgs/pattern_new_1.png");
}
</style>
