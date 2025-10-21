<template>
  <div>
    <img :src="images.banerBacSiGiaLieu" alt="" />

    <!-- Dịch vụ nổi bật -->
    <OutstandingService :data="dataService" />

    <!-- Bác sĩ -->
    <Docter />

    <CustomerSection
      :backgroundImage="require('@/assets/imgs/bgCustomer.png')"
      title="CẬN CẢNH KHÁCH HÀNG ĐIỀU TRỊ DA BẰNG CNC TẠI MAILISA"
      videoUrl="https://www.youtube.com/embed/WA_baX_-4YU?si=GhAM6snq66urR_iv"
      :items="[
        {
          image: require('@/assets/imgs/da-nam-cai-thien.jpg'),
          title: 'Da Nám Cải Thiện Rõ Rệt Khi Đến Thẩm Mỹ Viện Mailisa',
        },
        {
          image: require('@/assets/imgs/da-nam-2.jpg'),
          title: 'Da Nám Loại Bỏ Hết Khi Đến Thẩm Mỹ Viện Mailisa',
        },
      ]"
    >
      <template #default>
        <div class="flex flex-col items-center gap-2 md:gap-4 w-full">
          <HeadingTitle title="MÀU MỰC - MỸ PHẨM" />
          <HeadingTitle title="RÕ NGUỒN GỐC XUẤT XỨ ĐƯỢC BỘ Y TẾ KIỂM ĐỊNH" />
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            src="@/assets/imgs/ALL-DOCTOR-MAGIC-03.png"
            alt="Ảnh chứng nhận"
          />
        </div>
      </template>
    </CustomerSection>

    <!-- Mẫu mỹ phẩm -->
    <MauMucMyPham />

    <!-- Năm sao -->
    <NamSao />

    <!-- Slide hạ tầng -->
    <SlideHaTang :slidesToShow="3" />

    <!-- Video & hình -->
    <div
      class="container py-6 md:py-12"
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-duration="700"
    >
      <div
        class="flex rounded-2xl flex-col md:flex-row items-stretch gap-6 p-6 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${images.backGround})` }"
      >
        <!-- Cột ảnh -->
        <div class="flex-1 w-full flex items-stretch">
          <div class="img_wrap w-full">
            <img
              src="https://mailisa.com/wp-content/uploads/2024/08/Mailisa-hang-hieu.jpg"
              alt="Mailisa-hang-hieu"
              class="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Cột video -->
        <div class="flex-1 w-full flex items-stretch">
          <div class="iframe_wrap w-full">
            <iframe
              src="https://www.youtube.com/embed/AviyFR-FMCY?si=SMHBdQpsvq9YFiYs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              class="w-full h-full rounded-2xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <SignupForConsultation />

    <!-- Báo chí -->
    <NewsPress />
  </div>
</template>

<script>
import { images } from "@/assets/imgs";
import OutstandingService from "@/components/OutstandingService";
import Docter from "@/components/Docter";
import MauMucMyPham from "@/components/MauMucMyPham";
import NamSao from "@/components/NamSao/index.vue";
import SlideHaTang from "@/components/SlideHaTang";
import CustomerSection from "@/components/CustomerSection";
import SignupForConsultation from "@/components/SignupForConsultation";
import NewsPress from "@/components/NewsPress";
export default {
  name: "SkinTreatmentPage",
  components: {
    OutstandingService,
    Docter,
    MauMucMyPham,
    NamSao,
    SlideHaTang,
    CustomerSection,
    SignupForConsultation,
    NewsPress,
  },
  data() {
    return {
      images,
      dataService: [
        {
          index: 1,
          title: "ĐIỀU TRỊ NÁM ĐINH",
          desc: "Điều trị da nám đinh bằng công nghệ cao White Skin Spectra kết hợp Pixel CO2 tiên tiến, hiện đại, độc quyền cùng với sản phẩm Doctor Magic.",
          link: "",
          img: images.Artboard_5_4,
        },
        {
          index: 2,
          title: "ĐIỀU TRỊ NÁM MẢNG",
          desc: "Liệu trình điều trị nám mảng sử dụng công nghệ White Skin Spectra giúp làm mờ các mảng nám lan rộng, phục hồi làn da đều màu, sáng khỏe tự nhiên.",
          link: "",
          img: images.Artboard_7_1,
        },
        {
          index: 3,
          title: "ĐIỀU TRỊ TÀN NHANG",
          desc: "Công nghệ Laser YAG tiên tiến giúp loại bỏ các đốm tàn nhang tận gốc, tái tạo bề mặt da mịn màng, trắng sáng và đều màu hơn sau liệu trình.",
          link: "",
          img: images.Artboard_8_2,
        },
        {
          index: 4,
          title: "ĐIỀU TRỊ DA ĐỒI MỒI",
          desc: "Phương pháp điều trị đồi mồi công nghệ cao giúp loại bỏ các đốm sắc tố trên da, trẻ hóa làn da và làm chậm quá trình lão hóa tự nhiên.",
          link: "",
          img: images.Artboard_11_1,
        },
        {
          index: 5,
          title: "ĐIỀU TRỊ SẸO RỖ",
          desc: "Điều trị sẹo rỗ Mailisa ứng dụng công nghệ Fractional Laser và PRP giúp tái tạo da, làm đầy sẹo rỗ hiệu quả và khôi phục cấu trúc da săn chắc.",
          link: "",
          img: images.Artboard_10_1,
        },
        {
          index: 6,
          title: "ĐIỀU TRỊ DA BỚT SẮC TỐ",
          desc: "Công nghệ Laser Q-Switched giúp xử lý hiệu quả tình trạng bớt sắc tố, làm sáng đều màu da và tăng sự tự tin cho khách hàng.",
          link: "",
          img: images.Artboard_7_1,
        },
      ],
    };
  },
};
</script>
