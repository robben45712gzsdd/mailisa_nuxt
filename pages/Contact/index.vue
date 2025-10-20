<template>
  <div class="min-h-screen bg-white container">
    <!-- Header với sidebar -->
    <div class="flex">
      <!-- Main Content -->
      <div class="flex-1 px-6 py-8 max-w-6xl mx-auto">
        <!-- Tiêu đề chính -->
        <h1 class="text-2xl font-bold text-burgundy mb-8">LIÊN HỆ</h1>

        <!-- Thông tin ngày và category -->
        <div class="flex items-center gap-6 mb-8 text-gray-600">
          <div class="flex items-center gap-2">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>27/02/2024</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span class="text-burgundy font-medium">Tin tức - Sự kiện</span>
          </div>
        </div>

        <!-- Box mục lục -->
        <div class="bg-pink-50 border-l-4 border-burgundy p-6 mb-8 rounded">
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-lg font-semibold text-gray-800">
              Nội dung bài viết
            </h2>
            <button class="text-gray-500 hover:text-gray-700">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav class="space-y-2">
            <a
              href="#dia-chi"
              class="block text-burgundy hover:underline font-medium"
            >
              ĐỊA CHỈ CÁC CHI NHÁNH THẨM MỸ VIỆN MAILISA – CÁC THÔNG TIN LIÊN HỆ
            </a>
            <div class="ml-4 space-y-2 text-sm">
              <a href="#tphcm" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở TP.HCM:</a
              >
              <a href="#hanoi" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở Hà Nội:</a
              >
              <a href="#binhduong" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở Bình Dương:</a
              >
              <a href="#baoloc" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở Bảo Lộc:</a
              >
              <a href="#vinh" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở Vinh:</a
              >
              <a href="#daklak" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở BUÔN MÊ THUỘT – Đắk Lắk:</a
              >
              <a href="#cantho" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở CẦN THƠ:</a
              >
              <a href="#nhatrang" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở Nha Trang:</a
              >
              <a href="#danang" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở Đà Nẵng</a
              >
              <a href="#phuquoc" class="block text-burgundy hover:underline"
                >Địa Chỉ Chi Nhánh Mailisa Ở Phú Quốc:</a
              >
              <a
                href="#ngoai-mailisa"
                class="block text-burgundy hover:underline"
                >NGOÀI RA MAILISA CÒN ĐỊA CHỈ SAU:</a
              >
            </div>
          </nav>
        </div>

        <!-- Tiêu đề chính của nội dung -->
        <h2 id="dia-chi" class="text-3xl font-bold text-burgundy mb-8">
          ĐỊA CHỈ CÁC CHI NHÁNH THẨM MỸ VIỆN MAILISA – CÁC THÔNG TIN LIÊN HỆ
        </h2>

        <img
          src="@/assets/imgs/BAN-DO-CHI-NHANH.jpg"
          alt="Ban do chi nhanh"
          class="w-full"
        />
        <!-- Phần thông tin liên hệ -->
        <div class="mb-12">
          <p class="text-gray-700 my-6 text-sm font-[500]">
            Nơi lựa chọn hàng đầu gửi gắm nhan sắc của sao Việt. Liên hệ ngay
            đến.
          </p>

          <!-- Hotlines -->
          <div class="space-y-3 mb-8">
            <div class="flex items-start gap-2">
              <span class="text-red-600">☎️</span>
              <div>
                <span class="font-bold text-gray-800">HOTLINE: </span>
                <span class="text-burgundy font-semibold"
                  >0931.699.299-0932.699.299-028.7106.9999</span
                >
              </div>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-600">☎️</span>
              <div>
                <span class="font-bold text-gray-800">HOTLINE MỚI: </span>
                <span class="text-burgundy font-semibold"
                  >0939.138.138-0935.138.138-0978.138.138-0981.138.138</span
                >
              </div>
            </div>
          </div>

          <!-- Các trang truyền thông -->
          <h3 class="text-xl font-bold text-burgundy mb-6">
            CÁC TRANG TRUYỀN THÔNG MAILISA
          </h3>

          <!-- Social Media Grid -->
          <div class="grid grid-cols-2 gap-4 mb-12">
            <a
              href="#"
              class="flex justify-center items-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src="@/assets/imgs/145.png"
                alt="Facebook"
                class="w-12 h-12"
              />
            </a>

            <a
              href="#"
              class="flex justify-center items-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src="@/assets/imgs/zalo-1.png"
                alt="Zalo"
                class="w-12 h-12"
              />
            </a>

            <a
              href="#"
              class="flex justify-center items-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src="@/assets/imgs/HOI-NHOM.png"
                alt="Hội nhóm"
                class="w-12 h-12"
              />
            </a>

            <a
              href="#"
              class="flex justify-center items-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src="@/assets/imgs/tiktok (1).png"
                alt="Tiktok"
                class="w-12 h-12"
              />
            </a>

            <a
              href="#"
              class="flex justify-center items-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src="@/assets/imgs/yotube.png"
                alt="Youtube"
                class="w-12 h-12"
              />
            </a>

            <a
              href="#"
              class="flex justify-center items-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src="@/assets/imgs/intar (1).png"
                alt="Instagram"
                class="w-12 h-12"
              />
            </a>
          </div>

          <!-- Đoạn văn giới thiệu -->
          <p class="text-gray-700 leading-relaxed mb-8">
            Khi <span class="font-semibold">thương hiệu Mailisa</span> nổi tiếng
            kéo theo nhiều cơ sở thẩm mỹ luôn nói là chi nhánh của Mailisa, một
            số cá nhân thì nói là nhân viên của Mailisa. Để bảo vệ quyền lợi và
            tránh rủi ro tiền mất tật mang cho khách hàng khi đi làm đẹp,
            Mailisa công bố thông tin những địa chỉ sau đây là chi nhánh chính
            thức trực thuộc hệ thống
            <span class="font-semibold">Thẩm mỹ viện Mailisa</span>.
          </p>

          <!-- Box địa chỉ TP.HCM -->
          <div
            class="w-full"
            data-aos="fade-up"
            v-for="(item, index) in listDataMap"
            :key="index"
            data-aos-duration="1000"
          >
            <div class="border-l-4 border-pink-500 bg-white p-6 mb-6 shadow-sm">
              <h3 id="tphcm" class="text-xl font-bold text-pink-600">
                {{ item.title }}
              </h3>
            </div>
            <iframe
            v-if="item?.link"
              loading="lazy"
              :src="item?.link"
              height="360"
              frameborder="0"
              scrolling="no"
              allowfullscreen="allowfullscreen"
              data-rocket-lazyload="fitvidscompatible"
              class="lazyloaded w-full"
              data-ll-status="loaded"
            ></iframe>

            <p class="text-secondary text-center py-2">
              {{ item?.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <aside class="w-80 p-6 my-8 hidden lg:block">
        <h2
          class="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-burgundy"
        >
          TIN TỨC - SỰ KIỆN
        </h2>

        <div class="space-y-6 mb-12">
          <h3
            class="font-bold text-gray-800 hover:text-burgundy cursor-pointer"
          >
            TIPS LÀM ĐẸP
          </h3>
          <h3
            class="font-bold text-gray-800 hover:text-burgundy cursor-pointer"
          >
            BẬT MÍ VỀ PHUN XĂM
          </h3>
          <h3
            class="font-bold text-gray-800 hover:text-burgundy cursor-pointer"
          >
            BẬT MÍ VỀ LÀN DA
          </h3>
          <h3
            class="font-bold text-gray-800 hover:text-burgundy cursor-pointer"
          >
            BẬT MÍ PHẪU THUẬT
          </h3>
        </div>
      </aside>
    </div>

    <h1 class="text-2xl font-bold uppercase text-burgundy mb-8">
      Tin liên quan
    </h1>
    <div class="w-full">
      <client-only>
        <SlickCarousel v-bind="settingsIntroView">
          <div v-for="(item, index) in listIntroViews" :key="index">
            <div class="p-6">
              <NewsCard
                :image="item.src"
                :title="item.title"
                :date="`Ngày ${new Date().getDate()}/${
                  new Date().getMonth() + 1
                }/${new Date().getFullYear()}`"
                :link="item.link"
              />
            </div>
          </div>
        </SlickCarousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard";
export default {
  name: "ContactPage",
  components: {
    NewsCard,
  },

  data() {
    return {
      settingsIntroView: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      listIntroViews: [
        {
          index: 1,
          title: "MAILISA HỖ TRỢ 5 TỶ ĐỒNG CỨU TRỢ CHO BÀ CON SAU BÃO SỐ 10",
          desc: null,
          link: "https://mailisa.com/mailisa-ho-tro-5-ty-dong-cuu-tro-ba-con-mien-trung-bao-so-10/",
          img: require("@/assets/imgs/68dcce92af67b_mailisa-cuu-tro-ba-con-ba.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/68dcce92af67b_mailisa-cuu-tro-ba-con-ba.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 2,
          title: "MAILISA HỖ TRỢ 5 TỶ ĐỒNG CỨU TRỢ CHO BÀ CON SAU BÃO SỐ 10",
          desc: null,
          link: "https://mailisa.com/mailisa-ho-tro-5-ty-dong-cuu-tro-ba-con-mien-trung-bao-so-10/",
          img: require("@/assets/imgs/68dcce92af67b_mailisa-cuu-tro-ba-con-ba.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/68dcce92af67b_mailisa-cuu-tro-ba-con-ba.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 3,
          title:
            "Tiêm Botox Mailisa TPHCM – Trẻ hóa da, thon gọn mặt an toàn, hiệu quả",
          desc: null,
          link: "https://mailisa.com/tiem-botox-mailisa-tphcm-an-toan-hieu-qua/",
          img: require("@/assets/imgs/tiem-botox-mailisa-tphcm.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/09/tiem-botox-mailisa-tphcm.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 4,
          title:
            "Tiêm Botox Mailisa TPHCM – Trẻ hóa da, thon gọn mặt an toàn, hiệu quả",
          desc: null,
          link: "https://mailisa.com/tiem-botox-mailisa-tphcm-an-toan-hieu-qua/",
          img: require("@/assets/imgs/tiem-botox-mailisa-tphcm.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/09/tiem-botox-mailisa-tphcm.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 5,
          title:
            "Sinh Nhật Tổng Giám Đốc Mailisa – Biến Sinh Nhật Thành Ngày Gieo Duyên Lành",
          desc: null,
          link: "https://mailisa.com/sinh-nhat-tong-giam-doc-mailisa/",
          img: require("@/assets/imgs/sinh-nhat-tong-giam-doc-mailisa.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/sinh-nhat-tong-giam-doc-mailisa.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 6,
          title:
            "Sinh Nhật Tổng Giám Đốc Mailisa – Biến Sinh Nhật Thành Ngày Gieo Duyên Lành",
          desc: null,
          link: "https://mailisa.com/sinh-nhat-tong-giam-doc-mailisa/",
          img: require("@/assets/imgs/sinh-nhat-tong-giam-doc-mailisa.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/sinh-nhat-tong-giam-doc-mailisa.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 7,
          title: "KHUYẾN MÃI MỪNG SINH NHẬT TỔNG GIÁM ĐỐC MAILISA",
          desc: null,
          link: "https://mailisa.com/khuyen-mai-mung-sinh-nhat-tgd-mailisa/",
          img: require("@/assets/imgs/CTKM-FORM-TONG-1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/CTKM-FORM-TONG-1.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 8,
          title: "KHUYẾN MÃI MỪNG SINH NHẬT TỔNG GIÁM ĐỐC MAILISA",
          desc: null,
          link: "https://mailisa.com/khuyen-mai-mung-sinh-nhat-tgd-mailisa/",
          img: require("@/assets/imgs/CTKM-FORM-TONG-1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/CTKM-FORM-TONG-1.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 9,
          title:
            "Động thổ nhà sinh hoạt cộng đồng tránh lũ Khánh Mailisa tại Quảng Trị: Công trình 4 tỷ đồng vì bà con vùng lũ",
          desc: null,
          link: "https://mailisa.com/dong-tho-nha-sinh-hoat-cong-dong-tranh-lu-khanh-mailisa/",
          img: require("@/assets/imgs/dong-tho-nha-sinh-hoat-cong-dong-tranh-lu-khanh-mailisa.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/dong-tho-nha-sinh-hoat-cong-dong-tranh-lu-khanh-mailisa.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 10,
          title:
            "Động thổ nhà sinh hoạt cộng đồng tránh lũ Khánh Mailisa tại Quảng Trị: Công trình 4 tỷ đồng vì bà con vùng lũ",
          desc: null,
          link: "https://mailisa.com/dong-tho-nha-sinh-hoat-cong-dong-tranh-lu-khanh-mailisa/",
          img: require("@/assets/imgs/dong-tho-nha-sinh-hoat-cong-dong-tranh-lu-khanh-mailisa.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/dong-tho-nha-sinh-hoat-cong-dong-tranh-lu-khanh-mailisa.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 11,
          title:
            "Mailisa Chi Hơn 1 Tỷ Đồng Ngày Đầu Ra Quân Hỗ Trợ Khẩn Cấp Miền Trung",
          desc: null,
          link: "https://mailisa.com/mailisa-chi-1-ty-dong-ngay-dau-ra-quan-ho-tro-mien-trung/",
          img: require("@/assets/imgs/mailisa-chi-1-ty-dong-ngay-dau-ra-quan-ho-tro-mien-trung.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/mailisa-chi-1-ty-dong-ngay-dau-ra-quan-ho-tro-mien-trung.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 12,
          title:
            "Mailisa Chi Hơn 1 Tỷ Đồng Ngày Đầu Ra Quân Hỗ Trợ Khẩn Cấp Miền Trung",
          desc: null,
          link: "https://mailisa.com/mailisa-chi-1-ty-dong-ngay-dau-ra-quan-ho-tro-mien-trung/",
          img: require("@/assets/imgs/mailisa-chi-1-ty-dong-ngay-dau-ra-quan-ho-tro-mien-trung.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/mailisa-chi-1-ty-dong-ngay-dau-ra-quan-ho-tro-mien-trung.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 13,
          title: "MAILISA HỖ TRỢ 5 TỶ ĐỒNG CỨU TRỢ CHO BÀ CON SAU BÃO SỐ 10",
          desc: null,
          link: "https://mailisa.com/mailisa-ho-tro-5-ty-dong-cuu-tro-ba-con-mien-trung-bao-so-10/",
          img: require("@/assets/imgs/68dcce92af67b_mailisa-cuu-tro-ba-con-ba.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/68dcce92af67b_mailisa-cuu-tro-ba-con-ba.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 14,
          title: "MAILISA HỖ TRỢ 5 TỶ ĐỒNG CỨU TRỢ CHO BÀ CON SAU BÃO SỐ 10",
          desc: null,
          link: "https://mailisa.com/mailisa-ho-tro-5-ty-dong-cuu-tro-ba-con-mien-trung-bao-so-10/",
          img: require("@/assets/imgs/68dcce92af67b_mailisa-cuu-tro-ba-con-ba.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/68dcce92af67b_mailisa-cuu-tro-ba-con-ba.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 15,
          title:
            "Tiêm Botox Mailisa TPHCM – Trẻ hóa da, thon gọn mặt an toàn, hiệu quả",
          desc: null,
          link: "https://mailisa.com/tiem-botox-mailisa-tphcm-an-toan-hieu-qua/",
          img: require("@/assets/imgs/tiem-botox-mailisa-tphcm.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/09/tiem-botox-mailisa-tphcm.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 16,
          title:
            "Tiêm Botox Mailisa TPHCM – Trẻ hóa da, thon gọn mặt an toàn, hiệu quả",
          desc: null,
          link: "https://mailisa.com/tiem-botox-mailisa-tphcm-an-toan-hieu-qua/",
          img: require("@/assets/imgs/tiem-botox-mailisa-tphcm.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/09/tiem-botox-mailisa-tphcm.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 17,
          title:
            "Sinh Nhật Tổng Giám Đốc Mailisa – Biến Sinh Nhật Thành Ngày Gieo Duyên Lành",
          desc: null,
          link: "https://mailisa.com/sinh-nhat-tong-giam-doc-mailisa/",
          img: require("@/assets/imgs/sinh-nhat-tong-giam-doc-mailisa.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/sinh-nhat-tong-giam-doc-mailisa.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 18,
          title:
            "Sinh Nhật Tổng Giám Đốc Mailisa – Biến Sinh Nhật Thành Ngày Gieo Duyên Lành",
          desc: null,
          link: "https://mailisa.com/sinh-nhat-tong-giam-doc-mailisa/",
          img: require("@/assets/imgs/sinh-nhat-tong-giam-doc-mailisa.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/sinh-nhat-tong-giam-doc-mailisa.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 19,
          title: "KHUYẾN MÃI MỪNG SINH NHẬT TỔNG GIÁM ĐỐC MAILISA",
          desc: null,
          link: "https://mailisa.com/khuyen-mai-mung-sinh-nhat-tgd-mailisa/",
          img: require("@/assets/imgs/CTKM-FORM-TONG-1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/CTKM-FORM-TONG-1.jpg",
          oldPrice: null,
          newPrice: null,
        },
        {
          index: 20,
          title: "KHUYẾN MÃI MỪNG SINH NHẬT TỔNG GIÁM ĐỐC MAILISA",
          desc: null,
          link: "https://mailisa.com/khuyen-mai-mung-sinh-nhat-tgd-mailisa/",
          img: require("@/assets/imgs/CTKM-FORM-TONG-1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/CTKM-FORM-TONG-1.jpg",
          oldPrice: null,
          newPrice: null,
        },
      ],

      listDataMap: [
        {
          id: "TPHCM",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở TP.HCM:",
          desc: "TP. Hồ Chí Minh: Số 86-88-92 Huỳnh Văn Bánh, Phường 15, Quận Phú Nhuận, TP. HCM",
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2272456473643!2d106.68051969999999!3d10.7938997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf045f7caa31085a5!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2E!5e0!3m2!1svi!2s!4v1651822915960!5m2!1svi!2s",
        },
        {
          id: "Hanoi",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở Hà Nội:",
          desc: "Hà Nội: Số 6 Đường Nguyễn Khánh Toàn, Quan Hoa, Cầu Giấy, Hà Nội",
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9343093098723!2d105.80211181533228!3d21.03531429292949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab12cc273ea3%3A0xada77208c81f2071!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2E!5e0!3m2!1svi!2s!4v1679106896206!5m2!1svi!2s",
        },
        {
          id: "BinhDuong",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở Bình Dương:",
          desc: "TP. Hồ Chí Minh: Số E3/16 Tổ 32, KP. Bình Thuận 2, P. Thuận Giao, TP. Thuận An, Bình Dương",
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5725332922334!2d106.7283212!3d10.920055699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x606fc1e77a68bf82!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2E!5e0!3m2!1svi!2s!4v1651822968328!5m2!1svi!2s",
        },
        {
          id: "BaLoc",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở Bảo Lộc:",
          desc: "99 Lê Hồng Phong, P.1, Bảo Lộc, Lâm Đồng",
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.1175442509734!2d107.80855657584442!3d11.543424944576698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173f713194f5089%3A0x11252a9be0fa3e53!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2EgKELhuqNvIEzhu5ljKQ!5e0!3m2!1svi!2sus!4v1750834259599!5m2!1svi!2sus",
        },
        {
          id: "Vinh",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở Vinh:",
          desc: "Nghệ An: Số 132 Nguyễn Văn Cừ, Khối Bình Phúc, Phường Hưng Phúc, TP. Vinh, Nghệ An",
          link: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3779.726026336372!2d105.6869135!3d18.6762864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139cf6566d90f75%3A0x9c98529286b6c2f9!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2E!5e0!3m2!1svi!2s!4v1697273171092!5m2!1svi!2s",
        },
        {
          id: "DaKlak",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở BUÔN MÊ THUỘT – Đắk Lắk:",
          desc: "69-71 Ngô Quyền, P.Tân Lợi, TP.Buôn Mê Thuột, Đăk Lăk",
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.3767413657!2d108.0532898!3d12.688815799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x809c25fdb0e37abd!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2E!5e0!3m2!1svi!2s!4v1651824270945!5m2!1svi!2s",
        },
        {
          id: "Cantho",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở CẦN THƠ:",
          desc: "67 Phan Đình Phùng, Tân An, Ninh Kiều, Cần Thơ",
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8314396252877!2d105.78665649999999!3d10.030764699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f5647b12eb45df!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2E!5e0!3m2!1svi!2s!4v1651824321365!5m2!1svi!2s",
        },
        {
          id: "Nhatrang",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở Nha Trang:",
          desc: "69/1 Tô Hiến Thành, Tân Tiến, Nha Trang, Khánh Hòa",
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15597.123300360101!2d109.1922648!3d12.239361200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067ec60e3d403%3A0xa6b6de9d57ba97a1!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2E!5e0!3m2!1svi!2s!4v1730791383626!5m2!1svi!2s",
        },
        {
          id: "Danang",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở Đà Nẵng",
          desc: "97-99 Đường Nguyễn Văn Linh, P. Phước Ninh, Quận Hải Châu, TP. Đà Nẵng",
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.093186753656!2d108.2185914!3d16.060653399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbcc0b506abcadc81!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2E!5e0!3m2!1svi!2s!4v1651824364494!5m2!1svi!2s",
        },
        {
          id: "Phuquoc",
          title: "Địa Chỉ Chi Nhánh Mailisa Ở Phú Quốc:",
          desc: "98 Đường 30 Tháng 4, Khu phố 1, Dương Đông, Phú Quốc, Kiên Giang",
          link: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31412.982822711034!2d103.9537502041382!3d10.211250885942343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78d4762177589%3A0xbba2003c5e8af672!2zVGjhuqltIE3hu7kgVmnhu4duIE1haWxpc2E!5e0!3m2!1svi!2s!4v1697256268101!5m2!1svi!2s",
        },
        {
          id: "Khac",
          title: "NGOÀI RA MAILISA CÒN ĐỊA CHỈ SAU:",
          desc: "♦ Cơ Sở Đào Tạo Nghề:  81 Trần Huy Liệu, P.12, Q.Phú Nhuận, Tp. HCM",
          link: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-burgundy {
  color: #8b1538;
}

.border-burgundy {
  border-color: #8b1538;
}

.bg-burgundy {
  background-color: #8b1538;
}
</style>
