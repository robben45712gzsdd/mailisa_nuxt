<template>
  <footer class="relative mt-10 px-5 py-15 text-white" :style="{
    backgroundImage:
      'linear-gradient(to right, #3c1026 0%, #c72d70 45.5307%, #b94880 100%)',
  }">
    <style>
      footer::before {
        content: '';
        position: absolute;
        top: -1.3rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 5;
        width: 100%;
        height: 4.6875rem;
        background-image: url('~@/assets/imgs/pattern_new_1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    </style>

    <div class="footer">
      <div class="mx-auto container">
        <!-- Khung chứa tiêu đề + danh sách chi nhánh -->
        <div class="p-5 border border-white rounded-[15px]">
          <!-- Tiêu đề + nút -->
          <div class="mb-8 text-center">
            <h2 class="mb-4 font-bold text-[32px] uppercase">
              Địa chỉ hệ thống thẩm mỹ viện Mailisa trên toàn quốc
            </h2>
            <button
              class="bg-white px-4 py-4 rounded-full font-bold text-[16px] text-primary-dark uppercase transition">
              Toàn bộ hệ thống Mailisa
            </button>
          </div>

          <hr class="mt-12 mb-12 border-1 border-white" />

          <!-- Danh sách chi nhánh -->
          <div class="gap-x-30 gap-y-8 grid md:grid-cols-2 p-5">
            <div v-for="(b, i) in branches" :key="i">
              <div class="flex justify-between items-center mb-5">
                <span class="font-bold text-lg uppercase">{{ b.city }}</span>
                <a :href="b.map" target="_blank" rel="noopener noreferrer" class="text-yellow-300 hover:underline">
                  Xem chỉ đường
                </a>
              </div>
              <p class="font-bold text-lg">{{ b.address }}</p>
              <p class="font-bold text-lg">{{ b.license }}</p>
              <p v-if="b.phone" class="font-bold text-lg">{{ b.phone }}</p>
              <p v-if="b.email" class="font-bold text-lg">{{ b.email }}</p>
            </div>
          </div>
        </div>

        <!-- Liên hệ + Logo + Thời gian làm việc -->
        <div class="flex md:flex-row flex-col justify-between my-3 items-center md:items-end gap-8">
          <!-- Cột liên hệ -->
          <div class="flex flex-2 items-center md:items-start py-[12px] pl-[30px] border-white border-t border-b">
            <h3 class="mr-5 font-bold text-white text-lg uppercase tracking-wide">
              Liên hệ
            </h3>
            <div class="flex gap-6 text-white text-lg">
              <a href="tel:0932699299" class="hover:text-yellow-300">
                0932 699 299
              </a>
              <a href="tel:0931699299" class="hover:text-yellow-300">
                0931 699 299
              </a>
            </div>
          </div>

          <!-- Logo trung tâm -->
          <div class="flex flex-1 justify-center w-full">
            <a href="https://mailisa.com/" class="flex justify-center text-center">
              <LogoIcon fill="#fff" class="w-[200px] h-auto" />
            </a>
          </div>

          <!-- Cột thời gian làm việc -->
          <div class="flex flex-2 items-center md:items-end py-[12px] pl-[30px] border-white border-t border-b">
            <h3 class="mr-5 font-bold text-white text-lg uppercase tracking-wide">
              Thời gian làm việc
            </h3>
            <p class="text-white text-lg">7:30 - 18:00 (Từ thứ 2 - CN)</p>
          </div>
        </div>

        <!-- Menu footer -->
        <ul
          class="relative flex flex-wrap justify-between items-center gap-x-10 gap-y-2 mt-10 font-light text-white text-xl">
          <li v-for="(item, i) in menuFooter" :key="i" class="relative flex items-center">
            <a :href="item.href" target="_blank" rel="noopener noreferrer"
              class="hover-text-primary transition-colors duration-200">
              {{ item.name }}
            </a>
            <span v-if="i < menuFooter.length - 1"
              class="top-1/2 right-[-1.25rem] absolute rounded-full w-2 h-2 -translate-y-1/2" :style="{
                backgroundImage:
                  'linear-gradient(to right, #b99455 0%, #fbf5ab 40%, #d2ab53 67%, #bc872c 85%, #a15d25 100%)',
              }"></span>
          </li>
        </ul>

        <!-- Mạng xã hội -->
        <div class="mt-10 text-center">
          <h3 class="mb-4 font-bold text-white text-lg uppercase" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.6)">
            Theo dõi Mailisa
          </h3>
          <div class="flex flex-wrap justify-center gap-2 md:gap-4">
            <a v-for="(s, i) in socials" :key="i" :href="s.link" target="_blank" rel="noopener noreferrer"
              class="hover:scale-110 transition" :title="s.name">
              <img :src="s.icon" :alt="s.name" class="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] w-[53px] h-[53px]" />
            </a>
          </div>
        </div>

        <!-- Logo bộ công thương -->
        <div class="flex justify-center mt-8">
          <a href="http://online.gov.vn/Home/WebDetails/54481" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/imgs/cong-thuong.png" alt="Bộ công thương" class="w-40" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { LogoIcon } from '~/assets/icons';

export default {
  name: "Footer",
  components: {
    LogoIcon,
  },
  data() {
    return {
      branches: [
        {
          city: "TP Hồ Chí Minh",
          map: "https://maps.app.goo.gl/CSANkRLfcbpeKC8t7",
          address:
            "TP. Hồ Chí Minh: Số 86-88-92 Huỳnh Văn Bánh, Phường 15, Quận Phú Nhuận, TP. Hồ Chí Minh",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0305201737-002 Cấp Ngày 12/07/2019",
        },
        {
          city: "Hà Nội",
          map: "https://maps.app.goo.gl/dvoRtg8GfXeu9TcY8",
          address:
            "Số 6 Đường Nguyễn Khánh Toàn, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0108367003 Cấp Ngày 17/07/2018",
        },
        {
          city: "Bình Dương",
          map: "https://maps.app.goo.gl/4Rie1tGXVS9RHHGU7",
          address:
            "Bình Dương: Số E3/16 Tổ 32, KP. Bình Thuận 2, P. Thuận Giao, TP. Thuận An, Bình Dương",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 3702683218 Cấp Ngày 13/07/2018",
        },
        {
          city: "Đà Nẵng",
          map: "https://maps.app.goo.gl/AXp14H8u5sXcVhTY6",
          address:
            "97-99 Đường Nguyễn Văn Linh, Phường Phước Ninh, Quận Hải Châu, TP. Đà Nẵng, Việt Nam",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0402048629 Cấp Ngày 30/06/2020",
        },
        {
          city: "Đắk Lắk",
          map: "https://maps.app.goo.gl/18BpK9jEhbEvnewT8",
          address:
            "69-71 Ngô Quyền, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 6001511110 Cấp Ngày 22/05/2017",
        },
        {
          city: "Nghệ An",
          map: "https://maps.app.goo.gl/We8ht3qyk1joTx198",
          address:
            "132 Nguyễn Văn Cừ, Khối Bình Phúc, Phường Hưng Phúc, TP. Vinh, Nghệ An, Việt Nam",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0305201737-003 Cấp Ngày 24/08/2023",
        },
        {
          city: "Cần Thơ",
          map: "https://maps.app.goo.gl/ZmqGCAt6kcuWdWhR9",
          address: "67 Phan Đình Phùng, Tân An, Ninh Kiều, Cần Thơ, Việt Nam",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 1801666555 Cấp Ngày 09/04/2020",
        },
        {
          city: "Bảo Lộc",
          map: "https://maps.app.goo.gl/5s3FmwiCuY7nzVHg7",
          address: "99 Lê Hồng Phong, Phường 1, TP. Bảo Lộc, Lâm Đồng",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 3702683218-001 Cấp Ngày 23/12/2024",
        },
        {
          city: "Nha Trang",
          map: "https://maps.app.goo.gl/1mqfN5Dqmd5A3niu8",
          address: "Số 69/1 Tô Hiến Thành, Phường Tân Tiến, Nha Trang, Khánh Hòa",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 1801666555-001 Cấp Ngày 20/09/2023",
        },
        {
          city: "Phú Quốc",
          map: "https://maps.app.goo.gl/j1mpAEJHchY582zk8",
          address:
            "Số 98 Đường 30 Tháng 4, Khu phố 1, Dương Đông, Phú Quốc, Kiên Giang",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 1702269317 Cấp Ngày 11/01/2023",
        },
        {
          city: "Trường dạy nghề",
          map: "https://g.co/kgs/Ro9Anwo",
          address: "Số 81 Trần Huy Liệu, Tp. Hồ Chí Minh",
          license:
            "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0315153345 Cấp Ngày 09/07/2018",
          phone: "Điện thoại: 02862873329",
          email: "Email: mailisacn81thl@gmail.com",
        },
      ],
      socials: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/mailisagroup",
          icon: require("@/assets/imgs/fb.png"),
        },
        {
          name: "YouTube",
          link: "https://www.youtube.com/@TMVMAILISA",
          icon: require("@/assets/imgs/youtube.png"),
        },
        {
          name: "Zalo",
          link: "https://zalo.me/737173938000002714",
          icon: require("@/assets/imgs/zalo.png"),
        },
        {
          name: "Tiktok",
          link: "https://www.tiktok.com/@mailisa_group",
          icon: require("@/assets/imgs/tiktok.png"),
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/thammyvienmailisa1/",
          icon: require("@/assets/imgs/intar.png"),
        },
      ],
      menuFooter: [
        { name: "Chính sách quy định chung", href: "#" },
        {
          name: "Chính sách bảo mật và thông tin",
          href: "https://mailisa.com/chinh-sach-bao-mat-thong-tin/",
        },
        {
          name: "Sở Y tế TP. Hồ Chí Minh",
          href: "https://medinet.hochiminhcity.gov.vn/default.aspx",
        },
        { name: "Tiếp nhận ý kiến khách hàng", href: "#" },
        {
          name: "Tuyển dụng",
          href: "https://mailisa.com/tham-my-vien-mailisa-tuyen-dung-tren-toan-quoc/",
        },
      ],
    };
  },
};
</script>

<style>
.footer::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 4.6875rem;
  left: 50%;
  transform: translateX(-50%);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;
  top: -22px;
  transform: translateX(-50%);
  background-position-x: center;
  background-image: url("@/assets/imgs/pattern_new_1.png");;
}
</style>
