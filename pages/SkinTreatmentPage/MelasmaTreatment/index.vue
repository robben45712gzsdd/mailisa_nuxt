<template>
  <div>
    <img :src="images.banerBacSiGiaLieu" alt="" />

    <h2 class="font-starcity text-center text-primary text-[50px] mb-[-30px] pt-5">Phân biệt</h2>
    <!-- Dịch vụ nổi bật -->
    <OutstandingService title="CÁC LOẠI NÁM ĐINH MÀ KHÁCH THƯỜNG GẶP" :data="dataService" />


    <!-- nguyên nhân -->
    <div class="container" data-aos="fade-up" data-aos-duration="1000">
      <div class="flex justify-center items-center">
        <svg width="65" height="57" viewBox="0 0 65 57" class="w-25 h-25 hidden md:block"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_500)">
            <path
              d="M39.6014 32.131C39.3882 31.8936 39.1749 31.6778 38.9403 31.6778C36.8078 29.5199 34.6753 27.2326 32.6493 24.7726C30.6687 22.3532 28.926 19.7442 27.4459 16.9826C26.5049 15.2257 25.7883 13.3549 25.3134 11.4152C24.8467 9.35308 24.9202 7.20339 25.5266 5.17886C26.0932 3.40438 27.2451 1.88075 28.7894 0.863072C29.6921 0.283781 30.7311 -0.0415801 31.7994 -0.0795088C32.8676 -0.117437 33.9266 0.13344 34.8672 0.647286C35.946 1.29971 36.8418 2.22092 37.4689 3.32307C38.3285 4.7348 38.8472 6.33164 38.983 7.98413C39.4308 10.6599 39.6441 13.3357 39.8573 16.0115C40.0706 19.3562 40.0706 22.4852 40.0706 25.8083C40.0706 27.362 39.8573 29.1531 39.8573 30.7068C39.7043 31.1664 39.6181 31.6462 39.6014 32.131Z"
              fill="#e1006e" />
            <path
              d="M64.7867 30.1243C64.7867 30.1243 64.7867 29.887 65 29.887C64.7867 29.887 64.7867 29.887 64.7867 30.1243Z"
              fill="#e1006e" />
            <path
              d="M10.94 45.7043C12.8228 45.481 14.6753 45.0468 16.4633 44.4095H16.6552C16.6915 44.3644 16.7369 44.3275 16.7884 44.3015C16.8399 44.2754 16.8963 44.2608 16.9538 44.2585L20.046 43.1364C25.6737 40.9148 31.1151 38.2375 36.3173 35.1306C36.3173 34.8932 36.1041 34.8932 36.1041 34.6774C35.2297 33.5769 34.59 32.6706 33.7156 31.5701C31.6297 29.0747 29.3084 26.791 26.7848 24.7511C24.8913 23.3466 22.8536 22.1529 20.7071 21.1906C18.7735 20.2982 16.6691 19.8487 14.544 19.8743C12.6258 19.7439 10.7029 20.0461 8.9141 20.759C7.05486 21.4549 5.35122 22.5186 3.90261 23.888C1.59125 26.1775 0.200803 29.2529 5.42328e-05 32.5195C-0.179942 34.1662 -0.0275863 35.8327 0.447887 37.418C1.01085 39.8327 2.29978 42.0115 4.13719 43.6543C5.01599 44.5373 6.09705 45.1866 7.28402 45.5443C8.47098 45.902 9.72697 45.957 10.94 45.7043Z"
              fill="#e1006e" />
            <path
              d="M25.0574 55.4364C26.145 54.5517 27.4459 53.4295 28.5121 52.5448C31.6206 49.6886 34.8888 47.0156 38.3005 44.539C39.3668 43.8701 40.4331 43.2011 41.3287 42.5322L41.7979 42.2085C43.3832 40.9028 45.2211 39.9472 47.1932 39.4032C47.6531 39.3588 48.0975 39.2114 48.4941 38.9716C48.8093 38.7236 49.0258 38.3692 49.1041 37.973C49.1824 37.5768 49.1173 37.1654 48.9206 36.8138C48.6782 36.3427 48.2985 35.9585 47.833 35.7132C46.3983 34.8662 44.7161 34.5533 43.0774 34.8285C41.3416 35.0586 39.6951 35.7429 38.3005 36.8138C37.2315 37.727 36.2134 38.6995 35.251 39.7269L33.7369 41.2806L33.0758 42.1653C29.4049 46.5594 26.2026 51.3332 23.522 56.4074V56.6448C23.7566 56.6448 23.7566 56.4074 23.9698 56.4074C24.264 56.0129 24.6339 55.6826 25.0574 55.4364Z"
              fill="#e1006e" />
          </g>
          <defs>
            <clipPath id="clip0_1_500">
              <rect width="65" height="56.5584" fill="#e1006e" />
            </clipPath>
          </defs>
        </svg>
        <div class="flex flex-col px-10">
          <img :src='require("@/assets/imgs/Asset-3-3.png")' alt="" />
          <h2 class="text-center text-primary-dark font-bold text-[30px]">CHÍNH HÌNH THÀNH NÁM ĐINH
          </h2>
          <h2 class="text-center text-primary-dark font-bold text-[30px]">
            KHIẾN BẠN TỰ TI</h2>
        </div>
        <svg width="65" height="57" viewBox="0 0 65 57" class="[transform:rotateY(180deg)] w-25 h-25 hidden md:block"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_500)">
            <path
              d="M39.6014 32.131C39.3882 31.8936 39.1749 31.6778 38.9403 31.6778C36.8078 29.5199 34.6753 27.2326 32.6493 24.7726C30.6687 22.3532 28.926 19.7442 27.4459 16.9826C26.5049 15.2257 25.7883 13.3549 25.3134 11.4152C24.8467 9.35308 24.9202 7.20339 25.5266 5.17886C26.0932 3.40438 27.2451 1.88075 28.7894 0.863072C29.6921 0.283781 30.7311 -0.0415801 31.7994 -0.0795088C32.8676 -0.117437 33.9266 0.13344 34.8672 0.647286C35.946 1.29971 36.8418 2.22092 37.4689 3.32307C38.3285 4.7348 38.8472 6.33164 38.983 7.98413C39.4308 10.6599 39.6441 13.3357 39.8573 16.0115C40.0706 19.3562 40.0706 22.4852 40.0706 25.8083C40.0706 27.362 39.8573 29.1531 39.8573 30.7068C39.7043 31.1664 39.6181 31.6462 39.6014 32.131Z"
              fill="#e1006e" />
            <path
              d="M64.7867 30.1243C64.7867 30.1243 64.7867 29.887 65 29.887C64.7867 29.887 64.7867 29.887 64.7867 30.1243Z"
              fill="#e1006e" />
            <path
              d="M10.94 45.7043C12.8228 45.481 14.6753 45.0468 16.4633 44.4095H16.6552C16.6915 44.3644 16.7369 44.3275 16.7884 44.3015C16.8399 44.2754 16.8963 44.2608 16.9538 44.2585L20.046 43.1364C25.6737 40.9148 31.1151 38.2375 36.3173 35.1306C36.3173 34.8932 36.1041 34.8932 36.1041 34.6774C35.2297 33.5769 34.59 32.6706 33.7156 31.5701C31.6297 29.0747 29.3084 26.791 26.7848 24.7511C24.8913 23.3466 22.8536 22.1529 20.7071 21.1906C18.7735 20.2982 16.6691 19.8487 14.544 19.8743C12.6258 19.7439 10.7029 20.0461 8.9141 20.759C7.05486 21.4549 5.35122 22.5186 3.90261 23.888C1.59125 26.1775 0.200803 29.2529 5.42328e-05 32.5195C-0.179942 34.1662 -0.0275863 35.8327 0.447887 37.418C1.01085 39.8327 2.29978 42.0115 4.13719 43.6543C5.01599 44.5373 6.09705 45.1866 7.28402 45.5443C8.47098 45.902 9.72697 45.957 10.94 45.7043Z"
              fill="#e1006e" />
            <path
              d="M25.0574 55.4364C26.145 54.5517 27.4459 53.4295 28.5121 52.5448C31.6206 49.6886 34.8888 47.0156 38.3005 44.539C39.3668 43.8701 40.4331 43.2011 41.3287 42.5322L41.7979 42.2085C43.3832 40.9028 45.2211 39.9472 47.1932 39.4032C47.6531 39.3588 48.0975 39.2114 48.4941 38.9716C48.8093 38.7236 49.0258 38.3692 49.1041 37.973C49.1824 37.5768 49.1173 37.1654 48.9206 36.8138C48.6782 36.3427 48.2985 35.9585 47.833 35.7132C46.3983 34.8662 44.7161 34.5533 43.0774 34.8285C41.3416 35.0586 39.6951 35.7429 38.3005 36.8138C37.2315 37.727 36.2134 38.6995 35.251 39.7269L33.7369 41.2806L33.0758 42.1653C29.4049 46.5594 26.2026 51.3332 23.522 56.4074V56.6448C23.7566 56.6448 23.7566 56.4074 23.9698 56.4074C24.264 56.0129 24.6339 55.6826 25.0574 55.4364Z"
              fill="#e1006e" />
          </g>
          <defs>
            <clipPath id="clip0_1_500">
              <rect width="65" height="56.5584" fill="#e1006e" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>

    <div data-aos="fade-up" data-aos-duration="1000"
      class="flex justify-center gap-8 py-6 md:py-10 flex-wrap lg:flex-nowrap">
      <div v-for="(item, index) in listIntroViews" :key="index"
        class="flex flex-col items-center text-center transition-transform duration-300" :class="{
          // chỉ thêm translate khi màn hình lớn hơn md
          [`lg:translate-y-[${getTranslateY(index)}px]`]: true
        }">
        <img :src="item.img" />
      </div>
    </div>


    <div class="">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <div class="flex flex-col md:flex-row items-center justify-center">
          <div class="">
            <img :src='require("@/assets/imgs/Asset-4-2.png")' alt="">
          </div>
          <div class="">
            <ul class="space-y-3">
              <li v-for="(item, i) in reasons" :key="i" class="flex items-center gap-3 text-primary-dark text-2xl">
                <IconHeart class="w-8 h-8 shrink-0" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bác sĩ tư vấn -->
    <div class="relative" :class="'bg-[url(' + images.tuvan1 + ')] bg-no-repeat bg-center bg-cover'">
      <div class="w-full">
        <div class="container">
          <div class="flex items-center justify-center gap-6 flex-col-reverse md:flex-row py-12">
            <div class="col-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="300" data-aos-duration="700">
              <div class="img_wrap">
                <img :src="images.tuvan2" alt="" />
              </div>
            </div>

            <div class="col-6 aos-init aos-animate text-white" data-aos="fade-left" data-aos-delay="300"
              data-aos-duration="700">
              <div>
                <span class="text-2xl font-bold flex items-center">
                  <svg width="50" height="38" viewBox="0 0 65 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_500)">
                      <path
                        d="M39.6014 32.131C39.3882 31.8936 39.1749 31.6778 38.9403 31.6778C36.8078 29.5199 34.6753 27.2326 32.6493 24.7726C30.6687 22.3532 28.926 19.7442 27.4459 16.9826C26.5049 15.2257 25.7883 13.3549 25.3134 11.4152C24.8467 9.35308 24.9202 7.20339 25.5266 5.17886C26.0932 3.40438 27.2451 1.88075 28.7894 0.863072C29.6921 0.283781 30.7311 -0.0415801 31.7994 -0.0795088C32.8676 -0.117437 33.9266 0.13344 34.8672 0.647286C35.946 1.29971 36.8418 2.22092 37.4689 3.32307C38.3285 4.7348 38.8472 6.33164 38.983 7.98413C39.4308 10.6599 39.6441 13.3357 39.8573 16.0115C40.0706 19.3562 40.0706 22.4852 40.0706 25.8083C40.0706 27.362 39.8573 29.1531 39.8573 30.7068C39.7043 31.1664 39.6181 31.6462 39.6014 32.131Z"
                        fill="#FFF"></path>
                      <path
                        d="M64.7867 30.1243C64.7867 30.1243 64.7867 29.887 65 29.887C64.7867 29.887 64.7867 29.887 64.7867 30.1243Z"
                        fill="#FFF"></path>
                      <path
                        d="M10.94 45.7043C12.8228 45.481 14.6753 45.0468 16.4633 44.4095H16.6552C16.6915 44.3644 16.7369 44.3275 16.7884 44.3015C16.8399 44.2754 16.8963 44.2608 16.9538 44.2585L20.046 43.1364C25.6737 40.9148 31.1151 38.2375 36.3173 35.1306C36.3173 34.8932 36.1041 34.8932 36.1041 34.6774C35.2297 33.5769 34.59 32.6706 33.7156 31.5701C31.6297 29.0747 29.3084 26.791 26.7848 24.7511C24.8913 23.3466 22.8536 22.1529 20.7071 21.1906C18.7735 20.2982 16.6691 19.8487 14.544 19.8743C12.6258 19.7439 10.7029 20.0461 8.9141 20.759C7.05486 21.4549 5.35122 22.5186 3.90261 23.888C1.59125 26.1775 0.200803 29.2529 5.42328e-05 32.5195C-0.179942 34.1662 -0.0275863 35.8327 0.447887 37.418C1.01085 39.8327 2.29978 42.0115 4.13719 43.6543C5.01599 44.5373 6.09705 45.1866 7.28402 45.5443C8.47098 45.902 9.72697 45.957 10.94 45.7043Z"
                        fill="#FFF"></path>
                      <path
                        d="M25.0574 55.4364C26.145 54.5517 27.4459 53.4295 28.5121 52.5448C31.6206 49.6886 34.8888 47.0156 38.3005 44.539C39.3668 43.8701 40.4331 43.2011 41.3287 42.5322L41.7979 42.2085C43.3832 40.9028 45.2211 39.9472 47.1932 39.4032C47.6531 39.3588 48.0975 39.2114 48.4941 38.9716C48.8093 38.7236 49.0258 38.3692 49.1041 37.973C49.1824 37.5768 49.1173 37.1654 48.9206 36.8138C48.6782 36.3427 48.2985 35.9585 47.833 35.7132C46.3983 34.8662 44.7161 34.5533 43.0774 34.8285C41.3416 35.0586 39.6951 35.7429 38.3005 36.8138C37.2315 37.727 36.2134 38.6995 35.251 39.7269L33.7369 41.2806L33.0758 42.1653C29.4049 46.5594 26.2026 51.3332 23.522 56.4074V56.6448C23.7566 56.6448 23.7566 56.4074 23.9698 56.4074C24.264 56.0129 24.6339 55.6826 25.0574 55.4364Z"
                        fill="#FFF"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_500">
                        <rect width="65" height="56.5584" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>

                  ĐƯỢC ĐỘI NGŨ Y TÁ, BÁC SĨ THĂM KHÁM XÁC ĐỊNH TÌNH TRẠNG
                </span>
              </div>
              <div>
                Đội ngũ y tá, bác sĩ tư vấn thăm khám, soi da để xác định bệnh lý, tình trạng da hiện tại để chọn phương
                pháp, phác đồ điều trị cho phù hợp với từng khách hàng
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Bác sĩ -->
    <Docter />


    <div class="container my-12" data-aos="fade-up" data-aos-duration="1000">
      <div class="flex justify-center items-center">
        <svg width="65" height="57" viewBox="0 0 65 57" class="w-25 h-25 hidden md:block"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_500)">
            <path
              d="M39.6014 32.131C39.3882 31.8936 39.1749 31.6778 38.9403 31.6778C36.8078 29.5199 34.6753 27.2326 32.6493 24.7726C30.6687 22.3532 28.926 19.7442 27.4459 16.9826C26.5049 15.2257 25.7883 13.3549 25.3134 11.4152C24.8467 9.35308 24.9202 7.20339 25.5266 5.17886C26.0932 3.40438 27.2451 1.88075 28.7894 0.863072C29.6921 0.283781 30.7311 -0.0415801 31.7994 -0.0795088C32.8676 -0.117437 33.9266 0.13344 34.8672 0.647286C35.946 1.29971 36.8418 2.22092 37.4689 3.32307C38.3285 4.7348 38.8472 6.33164 38.983 7.98413C39.4308 10.6599 39.6441 13.3357 39.8573 16.0115C40.0706 19.3562 40.0706 22.4852 40.0706 25.8083C40.0706 27.362 39.8573 29.1531 39.8573 30.7068C39.7043 31.1664 39.6181 31.6462 39.6014 32.131Z"
              fill="#e1006e" />
            <path
              d="M64.7867 30.1243C64.7867 30.1243 64.7867 29.887 65 29.887C64.7867 29.887 64.7867 29.887 64.7867 30.1243Z"
              fill="#e1006e" />
            <path
              d="M10.94 45.7043C12.8228 45.481 14.6753 45.0468 16.4633 44.4095H16.6552C16.6915 44.3644 16.7369 44.3275 16.7884 44.3015C16.8399 44.2754 16.8963 44.2608 16.9538 44.2585L20.046 43.1364C25.6737 40.9148 31.1151 38.2375 36.3173 35.1306C36.3173 34.8932 36.1041 34.8932 36.1041 34.6774C35.2297 33.5769 34.59 32.6706 33.7156 31.5701C31.6297 29.0747 29.3084 26.791 26.7848 24.7511C24.8913 23.3466 22.8536 22.1529 20.7071 21.1906C18.7735 20.2982 16.6691 19.8487 14.544 19.8743C12.6258 19.7439 10.7029 20.0461 8.9141 20.759C7.05486 21.4549 5.35122 22.5186 3.90261 23.888C1.59125 26.1775 0.200803 29.2529 5.42328e-05 32.5195C-0.179942 34.1662 -0.0275863 35.8327 0.447887 37.418C1.01085 39.8327 2.29978 42.0115 4.13719 43.6543C5.01599 44.5373 6.09705 45.1866 7.28402 45.5443C8.47098 45.902 9.72697 45.957 10.94 45.7043Z"
              fill="#e1006e" />
            <path
              d="M25.0574 55.4364C26.145 54.5517 27.4459 53.4295 28.5121 52.5448C31.6206 49.6886 34.8888 47.0156 38.3005 44.539C39.3668 43.8701 40.4331 43.2011 41.3287 42.5322L41.7979 42.2085C43.3832 40.9028 45.2211 39.9472 47.1932 39.4032C47.6531 39.3588 48.0975 39.2114 48.4941 38.9716C48.8093 38.7236 49.0258 38.3692 49.1041 37.973C49.1824 37.5768 49.1173 37.1654 48.9206 36.8138C48.6782 36.3427 48.2985 35.9585 47.833 35.7132C46.3983 34.8662 44.7161 34.5533 43.0774 34.8285C41.3416 35.0586 39.6951 35.7429 38.3005 36.8138C37.2315 37.727 36.2134 38.6995 35.251 39.7269L33.7369 41.2806L33.0758 42.1653C29.4049 46.5594 26.2026 51.3332 23.522 56.4074V56.6448C23.7566 56.6448 23.7566 56.4074 23.9698 56.4074C24.264 56.0129 24.6339 55.6826 25.0574 55.4364Z"
              fill="#e1006e" />
          </g>
          <defs>
            <clipPath id="clip0_1_500">
              <rect width="65" height="56.5584" fill="#e1006e" />
            </clipPath>
          </defs>
        </svg>
        <div class="flex flex-row items-center px-10">
          <img class="hidden md:block" :src='require("@/assets/imgs/Asset-11.png")' alt="" />

          <div>
            <h2 class="font-starcity text-center text-primary-dark font-bold text-[30px]">Ưu điểm</h2>
            <h2 class="text-center text-primary-dark font-bold text-[30px]">ĐIỀU TRỊ NÁM ĐINH TẠI MAILISA
            </h2>
            <h2 class="text-center text-primary-dark font-bold text-[30px]">
              MÀ KHÁCH HÀNG YÊU THÍCH</h2>
          </div>
        </div>
        <svg width="65" height="57" viewBox="0 0 65 57" class="[transform:rotateY(180deg)] w-25 h-25 hidden md:block"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_500)">
            <path
              d="M39.6014 32.131C39.3882 31.8936 39.1749 31.6778 38.9403 31.6778C36.8078 29.5199 34.6753 27.2326 32.6493 24.7726C30.6687 22.3532 28.926 19.7442 27.4459 16.9826C26.5049 15.2257 25.7883 13.3549 25.3134 11.4152C24.8467 9.35308 24.9202 7.20339 25.5266 5.17886C26.0932 3.40438 27.2451 1.88075 28.7894 0.863072C29.6921 0.283781 30.7311 -0.0415801 31.7994 -0.0795088C32.8676 -0.117437 33.9266 0.13344 34.8672 0.647286C35.946 1.29971 36.8418 2.22092 37.4689 3.32307C38.3285 4.7348 38.8472 6.33164 38.983 7.98413C39.4308 10.6599 39.6441 13.3357 39.8573 16.0115C40.0706 19.3562 40.0706 22.4852 40.0706 25.8083C40.0706 27.362 39.8573 29.1531 39.8573 30.7068C39.7043 31.1664 39.6181 31.6462 39.6014 32.131Z"
              fill="#e1006e" />
            <path
              d="M64.7867 30.1243C64.7867 30.1243 64.7867 29.887 65 29.887C64.7867 29.887 64.7867 29.887 64.7867 30.1243Z"
              fill="#e1006e" />
            <path
              d="M10.94 45.7043C12.8228 45.481 14.6753 45.0468 16.4633 44.4095H16.6552C16.6915 44.3644 16.7369 44.3275 16.7884 44.3015C16.8399 44.2754 16.8963 44.2608 16.9538 44.2585L20.046 43.1364C25.6737 40.9148 31.1151 38.2375 36.3173 35.1306C36.3173 34.8932 36.1041 34.8932 36.1041 34.6774C35.2297 33.5769 34.59 32.6706 33.7156 31.5701C31.6297 29.0747 29.3084 26.791 26.7848 24.7511C24.8913 23.3466 22.8536 22.1529 20.7071 21.1906C18.7735 20.2982 16.6691 19.8487 14.544 19.8743C12.6258 19.7439 10.7029 20.0461 8.9141 20.759C7.05486 21.4549 5.35122 22.5186 3.90261 23.888C1.59125 26.1775 0.200803 29.2529 5.42328e-05 32.5195C-0.179942 34.1662 -0.0275863 35.8327 0.447887 37.418C1.01085 39.8327 2.29978 42.0115 4.13719 43.6543C5.01599 44.5373 6.09705 45.1866 7.28402 45.5443C8.47098 45.902 9.72697 45.957 10.94 45.7043Z"
              fill="#e1006e" />
            <path
              d="M25.0574 55.4364C26.145 54.5517 27.4459 53.4295 28.5121 52.5448C31.6206 49.6886 34.8888 47.0156 38.3005 44.539C39.3668 43.8701 40.4331 43.2011 41.3287 42.5322L41.7979 42.2085C43.3832 40.9028 45.2211 39.9472 47.1932 39.4032C47.6531 39.3588 48.0975 39.2114 48.4941 38.9716C48.8093 38.7236 49.0258 38.3692 49.1041 37.973C49.1824 37.5768 49.1173 37.1654 48.9206 36.8138C48.6782 36.3427 48.2985 35.9585 47.833 35.7132C46.3983 34.8662 44.7161 34.5533 43.0774 34.8285C41.3416 35.0586 39.6951 35.7429 38.3005 36.8138C37.2315 37.727 36.2134 38.6995 35.251 39.7269L33.7369 41.2806L33.0758 42.1653C29.4049 46.5594 26.2026 51.3332 23.522 56.4074V56.6448C23.7566 56.6448 23.7566 56.4074 23.9698 56.4074C24.264 56.0129 24.6339 55.6826 25.0574 55.4364Z"
              fill="#e1006e" />
          </g>
          <defs>
            <clipPath id="clip0_1_500">
              <rect width="65" height="56.5584" fill="#e1006e" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="mx-auto w-max">
        <ul class="space-y-3">
          <li v-for="(item, i) in advantage" :key="i" class="flex items-center gap-3 text-primary-dark text-2xl">
            <IconHeart class="w-8 h-8 shrink-0" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div data-aos="fade-up" data-aos-duration="1000"
      class="flex justify-center gap-8 py-6 md:py-10 flex-wrap lg:flex-nowrap">
      <div v-for="(item, index) in listImageAdvantage" :key="index"
        class="flex flex-col items-center text-center transition-transform duration-300" :class="{
          // chỉ thêm translate khi màn hình lớn hơn md
          [`lg:translate-y-[${getTranslateYAdventage(index)}px]`]: true
        }">
        <img :src="item.img" />
      </div>
    </div>
    <!-- Kết quả khách hàng -->
    <div class="bg-cover bg-center bg-no-repeat w-full py-4 md:py-6 md:py-12" :style="{
      backgroundImage: `url(${images.nhomSanPham})`,
      height: 'max-content',
    }">
      <div class="mt-10 py-6 md:py-10 container">
        <div class="flex flex-col justify-center items-center gap-3">
          <img :src='require("@/assets/imgs/FIXWEB-57-e1708074408122.png")' alt="" />
          <h2 class="font-bold text-white text-2xl text-center">
            AN TOÀN HIỆU QUẢ THỰC TẾ TẠI MAILISA
          </h2>
        </div>
      </div>

      <!-- Slider khách hàng -->
      <client-only>
        <SlickCarousel v-bind="settingsResult">
          <div v-for="(item, index) in listResult" :key="index" class="p-2">
            <div
              class="relative flex flex-col justify-between items-center bg-white rounded-xl shadow-md mx-2 p-4 min-h-[420px]">
              <!-- nhóm ảnh -->
              <div class="flex w-full h-[220px]">
                <div v-for="(img, i) in item.images" :key="i" class="relative flex-1 overflow-hidden">
                  <img :src="img" :alt="`${item.title} - ${getLabel(item.images.length, i)}`" class="w-full h-full" />
                  <span
                    class="absolute top-1 left-1/2 -translate-x-1/2 bg-white/90 text-primary-dark text-[13px] font-semibold px-3 py-[2px] rounded-md shadow-sm w-max">
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
                class="flex mt-5 items-center justify-center gap-2 px-10 py-3 rounded-full bg-gradient-to-r from-[#4A0024] to-[#D94B8E] text-white font-semibold tracking-wide shadow-md hover:opacity-90 transition w-full">
                <span class="uppercase">Câu chuyện</span>
                <span class="italic font-starcity text-white">Khách hàng</span>
              </button>
            </div>
          </div>
        </SlickCarousel>
      </client-only>
    </div>


    <CustomerSection :backgroundImage="require('@/assets/imgs/bgCustomer.png')"
      title="KHÁCH HÀNG ĐIỀU TRỊ NÁM ĐINH TẠI MAILISA THAY ĐỔI RÕ RỆT"
      videoUrl="https://www.youtube.com/embed/PneqVeU7Mr8" :items="[
        { image: require('@/assets/imgs/ab.jpg.webp'), title: 'Hướng Dẫn Vệ Sinh Và Kiêng Các Món Ăn Sau Khi Làm Đẹp Da Nám Tại Mailisa' },
        {
          image: require('@/assets/imgs/4bc.jpg.webp'), title: 'Điều trị Nám Đinh, Tàn Nhang tại Thẩm mỹ viện Mailisa ở TP.HCM'
        },
      ]" :description="`Thẩm Mỹ Viện Mailisa Điều Trị Nám Đinh Cho Khách Hàng`" />


    <div class="flex flex-col items-center gap-2 py-5 md:gap-4 w-full">
      <HeadingTitle title="MỸ PHẨM RÕ NGUỒN GỐC XUẤT XỨ ĐƯỢC BỘ Y TẾ KIỂM NGHIỆM" />
      <img data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" src="@/assets/imgs/ALL-DOCTOR-MAGIC-03.png"
        alt="Ảnh chứng nhận" />
    </div>


    <SignupForConsultation />

    <!-- Báo chí -->
    <NewsPress />
  </div>
</template>

<script>
import { images } from "@/assets/imgs";
import HeadingTitle from "@/components/HeadingTitle";
import OutstandingService from "@/components/OutstandingService";
import Docter from "@/components/Docter";
import MauMucMyPham from "@/components/MauMucMyPham";
import NamSao from "@/components/NamSao/index.vue";
import SlideHaTang from "@/components/SlideHaTang";
import CustomerSection from "@/components/CustomerSection";
import SignupForConsultation from "@/components/SignupForConsultation";
import NewsPress from "@/components/NewsPress";
import { NamSaoIcon } from "@/assets/icons";
import IconHeart from "@/assets/icons/IconHeart.vue";
export default {
  name: "SkinTreatmentPage",
  components: {
    OutstandingService,
    Docter,
    MauMucMyPham,
    NamSaoIcon,
    NamSao,
    SlideHaTang,
    CustomerSection,
    HeadingTitle,
    SignupForConsultation,
    NewsPress,
    IconHeart, // 👈 thêm dòng này
  },

  data() {
    return {
      images,
      dataService:
        [
          {
            index: 1,
            title: "NÁM ĐINH NHẸ",
            desc: "Nám chân đinh nhẹ có màu sắc nhẹ hơn, kích thước nhỏ, xuất hiện rải rác và không đồng đều, chủ yếu ở mũi, trán và cằm.",
            link: "#",
            img: require("@/assets/imgs/Nam-dinh-nhe-100.jpg")
          },
          {
            index: 2,
            title: "NÁM ĐINH VỪA",
            desc: "Nám chân đinh vừa có màu sắc nâu hoặc nâu đen, kích thước lớn hơn và phân bố rộng hơn trên khuôn mặt, tạo thành các đốm đồng đều hơn.",
            link: "#",
            img: require("@/assets/imgs/Nam-dinh-vua-100.jpg")
          },
          {
            index: 3,
            title: "NÁM ĐINH NẶNG",
            desc: "Nám chân đinh nặng có màu sắc đậm, đen, kích thước lớn và kết hợp với nhau tạo thành vùng da đậm, có thể lan rộng ra cổ, tay và các khu vực khác trên cơ thể.",
            link: "#",
            img: require("@/assets/imgs/Nam-dinh-nang-100.jpg")
          }
        ],
      reasons: [
        "Do quá trình lão hóa tự nhiên",
        "Yếu tố di truyền",
        "Tác động của ánh nắng mặt trời",
        "Nội tiết tố thay đổi, mất cân bằng",
        "Chế độ dinh dưỡng không hợp lý",
        "Căng thẳng do kéo dài"
      ],
      advantage: [
        "Giấy phép da liễu được Bộ Y Tế cấp phép hành nghề",
        "Đội ngũ y tá bác sĩ chuyên môn cao tay nghề giỏi",
        "Cơ sở hạ tầng trang thiết bị Máy móc tiên tiến hiện đại",
        "Dịch vụ cao cấp đạt tiêu chuẩn hàng Hiệu nhưng giá lại bình dân",
        "Chế độ hậu mãi chăm sóc cho từng khách hàng",
        "Hiệu quả tốt 1-2 lần lần đầu điều trị CNC"
      ],
      listIntroViews: [
        {
          index: 1,
          alt: "điều trị nám đinh",
          img: require("@/assets/imgs/1-2 copy.png")
        },
        {
          index: 2,
          alt: "điều trị đồi mồi",
          img: require("@/assets/imgs/5.png")
        },
        {
          index: 3,
          alt: "1",
          img: require("@/assets/imgs/1-1.png")
        },
        {
          index: 4,
          alt: "tac-dung-phu-cua-thuoc",
          img: require("@/assets/imgs/4.png")
        },
        {
          index: 5,
          alt: "điều trị nám đinh",
          img: require("@/assets/imgs/5-1 copy.png")
        },
        {
          index: 6,
          alt: "điều trị nám đinh",
          img: require("@/assets/imgs/6-1 copy.png")
        }
      ],
      listImageAdvantage: [
        {
          index: 1,
          alt: "điều trị nám đinh",
          img: require("@/assets/imgs/giay-phep-da-lieu-1.png")
        },
        {
          index: 2,
          alt: "tu-van-dieu-tri-nam-dinh",
          img: require("@/assets/imgs/FIXWEB-83.png")
        },
        {
          index: 3,
          alt: "điều trị đồi mồi",
          img: require("@/assets/imgs/FIXWEB-35.png")
        },
        {
          index: 4,
          alt: "điều trị bớt sắc tố",
          img: require("@/assets/imgs/FIXWEB-52.png")
        },
        {
          index: 5,
          alt: "tu-van-dieu-tri-doi-moi",
          img: require("@/assets/imgs/FIXWEB-44.png")
        },
        {
          index: 6,
          alt: "",
          img: require("@/assets/imgs/NAM-DINH.png")
        }
      ],
      listResult: [
        {
          title: "Chị Trang",
          desc: "Điều trị da",
          images: [
            require("@/assets/imgs/Artboard-1-1.png"), // Trước khi làm
            require("@/assets/imgs/Artboard-1-copy-1.png"), // Vừa làm xong
            require("@/assets/imgs/Artboard-1-copy-2-1.png"), // Sau khi làm
          ],
        },
        {
          title: "Chị Huyền",
          desc: "Điều trị da",
          images: [
            require("@/assets/imgs/Artboard-1-copy-3.png"), // Trước khi làm
            require("@/assets/imgs/Artboard-1-copy-4.png"), // Vừa làm xong
            require("@/assets/imgs/Artboard-1-copy-5.png"), // Sau khi làm
          ],
        },
        {
          title: "Chị Thảo",
          desc: "Điều trị da",
          images: [
            require("@/assets/imgs/Artboard-1-copy-6-1.png"), // Trước khi làm
            require("@/assets/imgs/Artboard-1-copy-7-1.png"), // Vừa làm xong
            require("@/assets/imgs/Artboard-1-copy-8-1.png"), // Sau khi làm
          ],
        },
        {
          title: "Chị Hiếu",
          desc: "Điều trị da",
          images: [
            require("@/assets/imgs/Artboard-1-copy-9.png"), // Trước khi làm
            require("@/assets/imgs/Artboard-1-copy-10.png"), // Vừa làm xong
            require("@/assets/imgs/Artboard-1-copy-11.png"), // Sau khi làm
          ],
        },
      ],
      settingsResult: {
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      },


    };
  },
  methods: {
    getTranslateY(index) {
      const len = this.listIntroViews.length
      const middleLeft = Math.floor(len / 2) - 1
      const middleRight = Math.floor(len / 2)

      if (index === middleLeft || index === middleRight) return 0
      if (index === middleLeft - 1 || index === middleRight + 1) return 50
      return 100
    },
    getTranslateYAdventage(index) {
      const len = this.listIntroViews.length
      const middleLeft = Math.floor(len / 2) - 1
      const middleRight = Math.floor(len / 2)

      if (index === middleLeft || index === middleRight) return 0
      if (index === middleLeft - 1 || index === middleRight + 1) return -50
      return -100
    },
    getLabel(length, i) {
      if (length === 2) return ["Trước khi làm", "Sau khi làm"][i];
      return ["Trước khi làm", "Vừa làm xong", "Sau khi làm"][i];
    },
  },
};
</script>
