<template>
  <div>
    <!-- Banner -->
    <img :src="images.bannerSanPham" alt="" />

    <!-- Sản phẩm nổi bật -->
    <div class="mx-auto py-10 container">
      <HeadingTitle title="sản phẩm NỔI BẬT TẠI MAILISA" />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10"
      >
        <BoxService
          v-for="(item, index) in dataService"
          :key="index"
          :title="item.title"
          :description="item.desc"
          :image="item.img"
        />
      </div>
    </div>

    <!-- Kết quả khách hàng -->
    <div
      class="bg-cover bg-center bg-no-repeat w-full py-12"
      :style="{
        backgroundImage: `url(${images.nhomSanPham})`,
        height: 'max-content',
      }"
    >
      <div class="mt-10 py-10 container">
        <div class="flex flex-col justify-center items-center gap-3">
          <img :src="images.ketQuaKhachHang" alt="" />
          <h2 class="font-bold text-white text-2xl text-center">
            SỬ DỤNG MỸ PHẨM
          </h2>
        </div>
      </div>

      <!-- Slider khách hàng -->
      <client-only>
        <SlickCarousel v-bind="settingsIntroView">
          <div v-for="(item, index) in listIntroViews" :key="index" class="p-2">
            <div
              class="relative flex flex-col justify-between items-center bg-white rounded-xl shadow-md mx-2 p-4 min-h-[420px]"
            >
              <!-- nhóm ảnh -->
              <div class="flex w-full h-[220px]">
                <div
                  v-for="(img, i) in item.images"
                  :key="i"
                  class="relative flex-1 overflow-hidden"
                >
                  <img
                    :src="img"
                    :alt="`${item.title} - ${getLabel(item.images.length, i)}`"
                    class="w-full h-full object-cover"
                  />
                  <span
                    class="absolute top-1 left-1/2 -translate-x-1/2 bg-white/90 text-primary-dark text-[13px] font-semibold px-3 py-[2px] rounded-md shadow-sm w-max"
                  >
                    {{ getLabel(item.images.length, i) }}
                  </span>
                </div>
              </div>

              <!-- tiêu đề & mô tả -->
              <div class="mt-4 text-center">
                <h2 class="font-bold text-2xl text-primary-dark uppercase">
                  {{ item.title }}
                </h2>
                <p class="text-primary italic text-sm mt-1">{{ item.desc }}</p>
              </div>

              <!-- nút -->
              <button
                class="flex mt-5 items-center justify-center gap-2 px-10 py-3 rounded-full bg-gradient-to-r from-[#4A0024] to-[#D94B8E] text-white font-semibold tracking-wide shadow-md hover:opacity-90 transition w-full"
              >
                <span class="uppercase">Câu chuyện</span>
                <span class="italic font-starcity text-white">Khách hàng</span>
              </button>
            </div>
          </div>
        </SlickCarousel>
      </client-only>

      <!-- Video & hình -->
      <div
        class="container py-12"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <div
          class="flex rounded-2xl flex-wrap md:flex-nowrap items-stretch gap-10 py-7 px-12 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${images.backGround})` }"
        >
          <!-- Cột ảnh -->
          <div class="md:w-7/12 w-full flex items-stretch">
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
          <div class="w-full flex items-stretch">
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
    </div>

    <!-- Báo chí -->
    <div class="container px-10 py-12">
      <HeadingTitle title="BÁO CHÍ NÓI GÌ VỀ MAILISA" />
      <div class="w-full border border-pink-300 rounded-2xl p-4 mx-auto mt-5">
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
                class="h-[50px] w-auto object-contain mx-auto"
              />
            </div>
          </SlickCarousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { images } from "@/assets/imgs";
import BoxService from "@/components/BoxService";
import HeadingTitle from "@/components/HeadingTitle";

export default {
  name: "Cosmetics",
  components: {
    BoxService,
    HeadingTitle,
  },
  data() {
    return {
      images,
      dataService: [
        {
          title: "TẤT CẢ SẢN PHẨM MAILISA",
          desc: "- Tất cả Mỹ phẩm Doctor Magic đều được kiểm nghiệm cấp phép lưu hành trên toàn quốc. Mailisa Nói Không Với Hàng Trôi Nổi.",
          img: images.docterMagic,
          link: "",
        },
        {
          title: "SẢN PHẨM LÀM ĐẸP DA",
          desc: "- Mỹ phẩm Doctor Magic đều được kiểm nghiệm cấp phép lưu hành trên toàn quốc. Mailisa Nói Không Với Hàng Trôi Nổi.",
          img: images.M49,
          link: "",
        },
        {
          title: "SẢN PHẨM CHĂM SÓC DA",
          desc: "- Tất cả Mỹ phẩm Doctor Magic đều được kiểm nghiệm cấp phép lưu hành trên toàn quốc.",
          img: images.M67,
          link: "",
        },
      ],
      listIntroViews: [
        {
          title: "Chị Nhật Hoàng",
          desc: "Điều trị da",
          images: [images.img7_4, images.img8_3],
        },
        {
          title: "Chị Tô Lê Như",
          desc: "Điều trị da",
          images: [images.img4_3, images.img5_3, images.img6_3],
        },
        {
          title: "Anh Đăng",
          desc: "Điều trị da",
          images: [images.img7_3, images.img8_2],
        },

        {
          title: "Chị Nhật Hoàng",
          desc: "Điều trị da",
          images: [images.img7_4, images.img8_3],
        },
        {
          title: "Chị Tô Lê Như",
          desc: "Điều trị da",
          images: [images.img4_3, images.img5_3, images.img6_3],
        },
        {
          title: "Anh Đăng",
          desc: "Điều trị da",
          images: [images.img7_3, images.img8_2],
        },
      ],
      settingsIntroView: {
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      },
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
  methods: {
    getLabel(length, i) {
      if (length === 2) return ["Trước khi làm", "Sau khi làm"][i];
      return ["Trước khi làm", "Vừa làm xong", "Sau khi làm"][i];
    },
  },
};
</script>
