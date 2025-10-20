<template>
  <header class="top-0 left-0 z-50 fixed bg-white shadow-md w-full">
    <div class="flex flex-col items-center mx-auto px-8 container">
      <!-- Logo -->
      <div
        class="relative flex justify-center items-center bg-contain bg-no-repeat bg-center w-full h-[4.5rem] text-center"
        :style="{ backgroundImage: `url(${logoBg})` }"
      >
        <LogoIcon fill="#fff" class="w-auto md:w-[80px] h-auto" />
        <!-- Hamburger and Actions -->
        <div
          class="top-1/2 right-0 absolute flex items-center gap-6 pr-8 -translate-y-1/2"
        >
          <div class="hidden md:flex items-center gap-4">
            <nuxt-link
              to="/login"
              class="font-bold text-primary-dark hover:text-primary uppercase transition-colors duration-200"
            >
              Đăng nhập
            </nuxt-link>
            <nuxt-link
              to="/signup"
              class="bg-primary hover:bg-primary-dark px-4 py-2 rounded font-bold text-white uppercase transition-colors duration-200"
            >
              Đăng ký
            </nuxt-link>
          </div>
          <button @click="toggleMenu" class="md:hidden block text-primary-dark">
            <i class="text-2xl fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav
        class="hidden md:block relative mx-auto border-primary-dark border-t w-max"
      >
        <ul class="flex items-center gap-6 p-2 font-bold uppercase">
          <li
            v-for="(menu, i) in menuData"
            :key="i"
            class="group relative"
            @mouseenter="openMenu = i"
            @mouseleave="closeMenus"
          >
            <div class="flex items-center gap-1 transition cursor-pointer">
              <nuxt-link
                :to="menu.href"
                class="group relative flex flex items-center gap-1 mb-1 transition-colors duration-200"
                :class="{
                  'text-primary border-b-3 py-1': $route.path === menu.href,
                  'text-primary-dark hover-text-primary':
                    $route.path !== menu.href,
                }"
              >
                <span class="mt-1 text-sm">{{ menu.label }}</span>
                <i
                  v-if="menu.children"
                  font-size="small"
                  class="w-4 h-4 transition-transform duration-700 ease-in-out fa-solid fa-angle-down transform"
                  :class="{
                    'text-primary rotate-0 translate-y-1':
                      $route.path === menu.href,
                    'text-primary-dark group-hover-text-primary group-hover:rotate-0 rotate-[-90deg] group-hover:translate-y-1':
                      $route.path !== menu.href,
                  }"
                />
              </nuxt-link>
            </div>

            <!-- Submenu -->
            <ul
              v-if="menu.children && openMenu === i"
              :style="{ backgroundImage: `url(${logoBgSubMenu})` }"
              class="top-full before:top-[-12px] left-0 before:left-0 z-50 absolute before:absolute before:bg-transparent shadow-lg mt-3 py-2 border border-gray-100 rounded-md w-64 before:w-full before:h-4 before:content-[''] -translate-y-[1px] animate-fade-in"
            >
              <li
                v-for="(submenu, j) in menu.children"
                :key="j"
                class="relative px-4 py-2"
                @mouseenter="openSubMenu = j"
                @mouseleave="openSubMenu = null"
              >
                <div class="flex justify-between items-center">
                  <nuxt-link
                    :to="submenu.href"
                    class="flex justify-between items-center w-full transition-colors duration-200"
                    :class="{
                      'text-primary': $route.path === submenu.href,
                      'text-white hover:text-yellow-400':
                        $route.path !== submenu.href,
                    }"
                  >
                    <span class="text-sm">{{ submenu.label }}</span>
                    <i
                      v-if="submenu.children"
                      font-size="small"
                      class="w-4 h-4 rotate-[-90deg] translate-y-1 fa-solid fa-angle-down"
                      :class="{
                        'text-primary': $route.path === submenu.href,
                        'text-white': $route.path !== submenu.href,
                      }"
                    />
                  </nuxt-link>
                </div>

                <!-- Sub-submenu -->
                <ul
                  v-if="submenu.children && openSubMenu === j"
                  :style="{ backgroundImage: `url(${logoBgSubMenu})` }"
                  class="top-0 left-full absolute shadow-lg px-4 py-2 border border-gray-100 rounded-md w-56 animate-fade-in"
                >
                  <li v-for="(child, k) in submenu.children" :key="k">
                    <nuxt-link
                      :to="child.href"
                      class="text-white hover:text-yellow-400 transition-colors duration-200"
                      :class="{
                        'text-primary': $route.path === child.href,
                      }"
                    >
                      {{ child.label }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- Mobile Navigation -->
      <nav v-if="isMenuOpen" class="md:hidden block bg-white shadow-md w-full">
        <ul class="flex flex-col">
          <li v-for="(menu, i) in menuData" :key="i">
            <template v-if="!menu.children">
              <nuxt-link
                :to="menu.href"
                @click="toggleMenu"
                class="block p-4 border-b font-bold text-primary-dark hover:text-primary uppercase"
              >
                {{ menu.label }}
              </nuxt-link>
            </template>
            <template v-else>
              <nuxt-link
                :to="menu.href"
                class="flex justify-between items-center p-4 border-b font-bold text-primary-dark hover:text-primary uppercase cursor-pointer"
                @click.native="toggleOpenMenu(i)"
              >
                <span>{{ menu.label }}</span>
                <i
                  class="transition-transform fa-solid fa-angle-down"
                  :class="{ 'rotate-180': openMenu === i }"
                ></i>
              </nuxt-link>
              <ul v-show="openMenu === i" class="bg-gray-50">
                <li v-for="(submenu, j) in menu.children" :key="j">
                  <template v-if="!submenu.children">
                    <nuxt-link
                      :to="submenu.href"
                      @click="toggleMenu"
                      class="block p-4 border-b text-primary-dark hover:text-primary"
                    >
                      {{ submenu.label }}
                    </nuxt-link>
                  </template>
                  <template v-else>
                    <div
                      @click="toggleOpenSubMenu(j)"
                      class="flex justify-between items-center p-4 border-b text-primary-dark hover:text-primary cursor-pointer"
                    >
                      <span>{{ submenu.label }}</span>
                      <i
                        class="transition-transform fa-solid fa-angle-down"
                        :class="{ 'rotate-180': openSubMenu === j }"
                      ></i>
                    </div>
                    <ul v-show="openSubMenu === j" class="bg-gray-100 pl-4">
                      <li v-for="(child, k) in submenu.children" :key="k">
                        <nuxt-link
                          :to="child.href"
                          @click="toggleMenu"
                          class="block p-4 border-b text-primary-dark hover:text-primary"
                        >
                          {{ child.label }}
                        </nuxt-link>
                      </li>
                    </ul>
                  </template>
                </li>
              </ul>
            </template>
          </li>
        </ul>
        <!-- Mobile Actions -->
        <div class="flex flex-col gap-2 p-4">
          <nuxt-link
            to="/login"
            @click="toggleMenu"
            class="block p-4 border-b font-bold text-primary-dark hover:text-primary text-center uppercase"
          >
            Đăng nhập
          </nuxt-link>
          <nuxt-link
            to="/signup"
            @click="toggleMenu"
            class="bg-primary hover:bg-primary-dark px-4 py-2 rounded font-bold text-white text-center uppercase"
          >
            Đăng ký
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import logoBg from "@/assets/imgs/bg_logo.png";
import logoBgSubMenu from "@/assets/imgs/bg_sub_menu.jpg";
import { LogoIcon } from "@/assets/icons";

export default {
  name: "Header",
  components: {
    LogoIcon,
  },
  data() {
    return {
      isMenuOpen: false,
      openMenu: null,
      openSubMenu: null,
      logoBg,
      logoBgSubMenu,
      menuData: [
        {
          label: "Giới thiệu",
          href: "/",
          children: [
            {
              label: "LỊCH SỬ HÌNH THÀNH PHÁT TRIỂN MAILISA",
              href: "/history",
             
            },
            {
              label: "QUÁ TRÌNH THIỆN NGUYỆN MAILISA",
              href: "/charitable/",
            },
          ],
        },
        {
          label: "Phun màu thẩm mỹ",
          href: "/SemiPermanentMakeup",
          children: [
            {
              label: "Phun Mày Brow Couture",
              href: "/SemiPermanentMakeup/BrowCouture",
            },
            {
              label: "Phun Môi SILK LIP",
              href: "/phun-moi-mailisa/",
            },
            {
              label: "Phun mí mở tròng",
              href: "/phun-xam-tham-my/phun-mi-mo-trong/",
            },
            {
              label: "Xóa sửa mày",
              href: "/phun-xam-tham-my/xoa-sua-may/",
            },
            {
              label: "Xóa sửa môi",
              href: "/phun-xam-tham-my/xoa-sua-moi/",
            },
            {
              label: "Xóa sửa mí",
              href: "/phun-xam-tham-my/xoa-sua-mi/",
            },
          ],
        },
        {
          label: "Điều trị da",
          href: "/SkinTreatmentPage",
          children: [
            {
              label: "Điều trị nám đinh",
              href: "/SkinTreatmentPage/MelasmaTreatment",
            },
            {
              label: "Điều trị nám mảng",
              href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-nam-mang/",
            },
            {
              label: "Điều trị đồi mồi",
              href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-doi-moi-cong-nghe/",
            },
            {
              label: "Điều trị bớt sắc tố",
              href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-bot-sac-to-cnc/",
            },
            {
              label: "Điều trị sẹo rỗ",
              href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-seo-ro-cong-nghe-cao/",
            },
            {
              label: "Điều trị tàn nhang",
              href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-tan-nhang/",
            },
            {
              label: "Điều trị da mụn",
              href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-da-mun-cong-nghe-cao/",
            },
            { label: "Xóa Nốt Ruồi", href: "/xoa-not-ruoi/" },
            { label: "Xóa Mụn Thịt", href: "/xoa-mun-thit/" },
          ],
        },
        {
          label: "Phẫu thuật",
          href: "/Surgery",
          children: [
            {
              label: "Nâng cung chân mày Perfect Form",
              href: "/SurgeryEyebrowLift",
            },
            {
              label: "Tạo hình mắt 2 mí Perfect Line",
              href: "/phau-thuat-tham-my/tao-hinh-mat-2-mi/",
            },
            {
              label: "Khâu tạo hình mắt 2 mí",
              href: "/phau-thuat-tham-my/khau-tao-hinh-2-mi/",
            },
            {
              label: "Phẫu thuật cắt da dư lấy bọng mỡ mi dưới",
              href: "/phau-thuat-tham-my/cat-da-du-mi-duoi/",
            },
            {
              label: "Phẫu thuật Nâng mũi",
              href: "/phau-thuat-tham-my/nang-mui/",
            },
            {
              label: "Phẫu thuật thu gọn cánh mũi",
              href: "/phau-thuat-tham-my/cuon-canh-mui/",
            },
            {
              label: "Căng Da Mặt Siết Cơ Bằng Chỉ",
              href: "/cang-da-mat-siet-co-bang-chi-mailisa/",
            },
            {
              label: "Dịch Vụ Làm Đẹp Bằng Filler",
              href: "/lam-dep-bang-filler/",
            },
            {
              label: "Dịch Vụ Làm Đẹp Bằng Botox",
              href: "/lam-dep-bang-botox/",
            },
            {
              label: "Thu gọn môi dày",
              href: "/phau-thuat-tham-my/thu-gon-moi-day/",
            },
            {
              label: "Độn cằm",
              href: "/phau-thuat-tham-my/don-cam/",
            },
          ],
        },
        {
          label: "Mỹ phẩm",
          href: "/cosmetics/",
          children: [
            {
              label: "Tất Cả Sản Phẩm Mailisa",
              href: "/allcosmetics/",
            },
          ],
        },
        {
          label: "Đào tạo",
          href: "/Training",
          children: [
            {
              label: "Chăm sóc da",
              href: "/TrainingSkinCare",
            },
            {
              label: "Phun màu thẩm mỹ",
              href: "/TrainingSemiPermanentMakeup",
            },
          ],
        },
        {
          label: "Liên hệ",
          href: "/contact/",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen) {
        this.closeMenus();
      }
    },
    toggleOpenMenu(i) {
      this.openMenu = this.openMenu === i ? null : i;
      this.openSubMenu = null;
    },
    toggleOpenSubMenu(j) {
      this.openSubMenu = this.openSubMenu === j ? null : j;
    },
    closeMenus() {
      this.openMenu = null;
      this.openSubMenu = null;
    },
  },
};
</script>
