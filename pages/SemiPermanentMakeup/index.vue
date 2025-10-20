<template>
    <div>
        <img :src="require('@/assets/imgs/2.2.-Phun-May-Brow-Couture-01.jpg')" alt="" />

        <!-- Dịch vụ nổi bật -->
        <div class="mx-auto py-6 md:py-10 container">
            <HeadingTitle :title="title" />

            <div v-aos="'fade-up'" data-aos-duration="1000"
                class="gap-2 md:gap-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-10">
                <BoxService v-for="(item, index) in dataService" :key="index" :title="item.title"
                    :description="item.desc" :image="item.img" />
            </div>
        </div>
        <!-- Bác sĩ -->
        <Docter />

        <!-- Thiết kế dáng mẫu -->
        <div class="relative"
            :class="'bg-[url(' + require('@/assets/imgs/Thiet-ke-dang.png.webp') + ')] bg-no-repeat bg-center bg-cover'">
            <div class="relative w-full design-pattern-bg">
                <div class="container">
                    <div class="flex justify-center items-center gap-6">
                        <div class="col-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="300"
                            data-aos-duration="700">
                            <div class="img_wrap">
                                <img :src="require('@/assets/imgs/Artboard-8.png')" alt="" />
                            </div>
                        </div>

                        <div class="text-white col-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300"
                            data-aos-duration="700">
                            <div>
                                <span class="flex items-center font-bold text-2xl">
                                    <svg width="50" height="38" viewBox="0 0 65 57" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
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

                                    THIẾT KẾ DÁNG MẪU
                                </span>
                            </div>
                            <div>
                                Thời trang sang trọng đẹp tự nhiên để phù hợp với
                                khuôn mặt của từng khách hàng
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CustomerSection :backgroundImage="require('@/assets/imgs/bgCustomer.png')"
            title="CẬN CẢNH KHÁCH HÀNG PHUN XĂM THẨM MỸ TẠI MAILISA"
            videoUrl="https://www.youtube.com/embed/Gvq64dNyAoU" :items="[
                {
                    image: require('@/assets/imgs/9e02.jpg'),
                    title: 'Da Nám Cải Thiện Rõ Rệt Khi Đến Thẩm Mỹ Viện Mailisa',
                },
                {
                    image: require('@/assets/imgs/phun-mi.jpg'),
                    title: 'Da Nám Loại Bỏ Hết Khi Đến Thẩm Mỹ Viện Mailisa',
                },
            ]">
            <template #default>
                <div class="flex flex-col items-center gap-2 md:gap-4 w-full">
                    <HeadingTitle title="KỸ THUẬT PHA PHỐI MÀU CHUẨN TÔNG TẠO GU THẨM MỸ" />
                    <HeadingTitle title="MÀU MỰC DOCTOR MAGIC RÕ NGUỒN GỐC XUẤT XỨ, ĐƯỢC BỘ Y TẾ KIỂM NGHIỆM" />
                    <img data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
                        src="@/assets/imgs/mau-muc-chinh-hang.png.webp" alt="Ảnh chứng nhận" />
                </div>
            </template>
        </CustomerSection>

        <!-- Kết quả khách hàng -->
        <div class="bg-cover bg-no-repeat bg-center py-4 md:py-6 md:py-12 w-full" :style="{
            backgroundImage: `url(${images.nhomSanPham})`,
            height: 'max-content',
        }">
            <div class="mt-10 py-6 md:py-10 container">
                <div class="flex flex-col justify-center items-center gap-3">
                    <img :src="images.ketQuaKhachHang" alt="" />
                    <h2 class="font-bold text-white text-2xl text-center">
                        SỬ DỤNG DỊCH VỤ
                    </h2>
                </div>
            </div>

            <!-- Slider khách hàng -->
            <client-only>
                <SlickCarousel v-bind="settingsIntroView">
                    <div v-for="(item, index) in listIntroViews" :key="index" class="p-2">
                        <div
                            class="relative flex flex-col justify-between items-center bg-white shadow-md mx-2 p-4 rounded-xl min-h-[420px]">
                            <!-- nhóm ảnh -->
                            <div class="flex w-full h-[220px]">
                                <div v-for="(img, i) in item.images" :key="i" class="relative flex-1 overflow-hidden">
                                    <img :src="img" :alt="`${item.title} - ${getLabel(item.images.length, i)}`"
                                        class="w-full h-full object-cover" />
                                    <span
                                        class="top-1 left-1/2 absolute bg-white/90 shadow-sm px-3 py-[2px] rounded-md w-max font-semibold text-[13px] text-primary-dark -translate-x-1/2">
                                        {{ getLabel(item.images.length, i) }}
                                    </span>
                                </div>
                            </div>

                            <!-- tiêu đề & mô tả -->
                            <div class="mt-4 text-center">
                                <h2 class="font-bold text-primary-dark text-2xl uppercase">
                                    {{ item.title }}
                                </h2>
                                <p class="mt-1 text-primary text-sm italic">{{ item.desc }}</p>
                            </div>

                            <!-- nút -->
                            <button
                                class="flex justify-center items-center gap-2 bg-gradient-to-r from-[#4A0024] to-[#D94B8E] hover:opacity-90 shadow-md mt-5 px-10 py-3 rounded-full w-full font-semibold text-white tracking-wide transition">
                                <span class="uppercase">Câu chuyện</span>
                                <span class="font-starcity text-white italic">Khách hàng</span>
                            </button>
                        </div>
                    </div>
                </SlickCarousel>
            </client-only>
        </div>

        <!-- Video & hình -->
        <div class="py-4 md:py-6 md:py-12 container" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="700">
            <div class="flex md:flex-row flex-col items-stretch gap-6 bg-cover bg-no-repeat bg-center p-6 rounded-2xl"
                :style="{ backgroundImage: `url(${images.backGround})` }">
                <!-- Cột ảnh -->
                <div class="flex flex-1 items-stretch w-full">
                    <div class="w-full img_wrap">
                        <img src="https://mailisa.com/wp-content/uploads/2024/08/Mailisa-hang-hieu.jpg"
                            alt="Mailisa-hang-hieu" class="rounded-2xl w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>

                <!-- Cột video -->
                <div class="flex flex-1 items-stretch w-full">
                    <div class="w-full iframe_wrap">
                        <iframe src="https://www.youtube.com/embed/AviyFR-FMCY?si=SMHBdQpsvq9YFiYs"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                            class="shadow-lg rounded-2xl w-full h-full"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <SignupForConsultation />


        <div class="p-12 w-full container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <HeadingTitle class="my-4"
                title="ĐỘI NGŨ NHÂN VIÊN - CHẾ ĐỘ CHĂM SÓC HẬU MÃI TỐT CHO TỪNG KHÁCH HÀNG SAU KHI LÀM DỊCH VỤ" />

            <div class="flex md:flex-row flex-col items-stretch gap-2 md:gap-4 min-h-80 container">
                <div class="flex-1">
                    <iframe loading="lazy" :src="'https://www.youtube.com/embed/RIVNqj7szjQ?si=1FqeEMLlQXGpjgv6'"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                        class="rounded-2xl w-full h-full"></iframe>
                    <p class="mt-2 text-secondary text-sm text-center">
                        Hướng Dẫn Vệ Sinh Và Kiêng Các Món Ăn Sau Khi Phun Mày Tại Mailisa
                    </p>
                </div>
                <div class="flex-1">
                    <iframe loading="lazy" :src="'https://www.youtube.com/embed/SP1QQrKS5ew?si=_oOACRS_OWp01noy'"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                        class="rounded-2xl w-full h-full"></iframe>
                    <p class="mt-2 text-secondary text-sm text-center">
                        Tại Sao Thẩm Mỹ Viện Mailisa Tòa Nhà To Bự Nhân Viên Đông Mà Giá Lại Tốt Như Vậy
                    </p>
                </div>
            </div>
        </div>
        <div class="py-4 md:py-6 md:py-12 w-full">
            <HeadingTitle class="my-4 container" title="HÀNG NGÀY MAILISA NHẬN ĐƯỢC HÀNG TRĂM FEEDBACK KHÁCH HÀNG" />
            <client-only>
                <SlickCarousel v-bind="settingsFbCustomer">
                    <div v-for="(item, index) in listFbCustomer" :key="index"
                        class="relative flex flex-col justify-center items-center">
                        <div class="p-6 w-full h-full">
                            <img :src="item.image" :alt="'Ảnh nhân viên'"
                                class="rounded-lg w-full h-[50vh] object-cover overflow-hidden" />
                        </div>
                    </div>
                </SlickCarousel>
            </client-only>
        </div>
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
import HeadingTitle from "@/components/HeadingTitle/index.vue";
import BoxService from "@/components/BoxService/index.vue";
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
        HeadingTitle,
        BoxService,
    },
    data() {
        return {
            images,
            dataService: [
                {
                    "index": 1,
                    "title": "PHUN MÀY BROW COUTURE",
                    "desc": "Công nghệ Phun Mày BROW COUTURE tiên tiến, hiện đại mới nhất hiện nay của Mailisa.",
                    "link": "https://mailisa.com/phun-xam-tham-my/phun-may-brow-couture/",
                    "img": require("@/assets/imgs/Artboard-4-1.png"),
                    "url": "https://mailisa.com/wp-content/uploads/2023/09/Artboard-4-1.png"
                },
                {
                    "index": 2,
                    "title": "PHUN MÔI SILK LIP",
                    "desc": "Công nghệ phun môi tán mà SILK LIP lên màu tự nhiên, giữ dáng môi căng mọng, mềm mịn như lụa",
                    "link": "https://mailisa.com/phun-moi-mailisa/",
                    "img": require("@/assets/imgs/Artboard-7.png"),
                    "url": "https://mailisa.com/wp-content/uploads/2023/09/Artboard-7.png"
                },
                {
                    "index": 3,
                    "title": "PHUN MÍ MỞ TRÒNG  MẮT NAI",
                    "desc": "Công nghệ Phun Mí Mở Tròng là kỹ thuật tiên tiến hiện đại ĐỘC QUYỀN tại Mailisa. Tạo cho bạn một cặp mắt tròn, to, đen có hồn, theo phong cách tự nhiên.",
                    "link": "https://mailisa.com/phun-xam-tham-my/phun-mi-mo-trong/",
                    "img": require("@/assets/imgs/PHUN-MI-3.jpg"),
                    "url": "https://mailisa.com/wp-content/uploads/2025/06/PHUN-MI-3.jpg"
                },
                {
                    "index": 4,
                    "title": "XÓA SỬA MÀY",
                    "desc": "Mailisa xóa sửa dáng mày bị xấu, đen, đậm, trổ xanh, trổ đỏ bằng công nghệ mới để nghiền nát phá vỡ phân hủy màu mực.",
                    "link": "https://mailisa.com/phun-xam-tham-my/xoa-sua-may/",
                    "img": require("@/assets/imgs/xoa-may-01.jpg"),
                    "url": "https://mailisa.com/wp-content/uploads/2025/06/xoa-may-01.jpg"
                },
                {
                    "index": 5,
                    "title": "XÓA SỬA MÔI",
                    "desc": "Mailisa xóa những làn môi từng phun xăm bị hư, dày màu, cộm màu, dáng môi xấu bằng công nghệ mới để nghiền nát phá vỡ phân hủy màu mực .",
                    "link": "https://mailisa.com/phun-xam-tham-my/xoa-sua-moi/",
                    "img": require("@/assets/imgs/Artboard-11.png"),
                    "url": "https://mailisa.com/wp-content/uploads/2023/09/Artboard-11.png"
                },
                {
                    "index": 6,
                    "title": "XÓA SỬA MÍ",
                    "desc": "Mailisa xóa mí bị xấu, xanh đen, đậm, nhòe mực bằng công nghệ mới chiếu các tia sáng trực tiếp giúp nghiền nát phá vỡ phân hủy màu mực",
                    "link": "https://mailisa.com/phun-xam-tham-my/xoa-sua-mi/",
                    "img": require("@/assets/imgs/XOA-MI-02.jpg"),
                    "url": "https://mailisa.com/wp-content/uploads/2025/06/XOA-MI-02.jpg"
                }
            ],
            listIntroViews: [
                {
                    title: "Chị Hậu",
                    desc: "Phun môi",
                    images: [
                        require("@/assets/imgs/1-2.png"),
                        require("@/assets/imgs/2-1-e1709282469177.png"),
                    ],
                },
                {
                    title: "Chị My",
                    desc: "Phun xăm thẩm mỹ",
                    images: [
                        require("@/assets/imgs/truoc-03.jpg"),
                        require("@/assets/imgs/sau-03.jpg"),
                    ],
                },
                {
                    title: "Chị Hường",
                    desc: "Phun xăm thẩm mỹ",
                    images: [
                        require("@/assets/imgs/7-1.png"),
                        require("@/assets/imgs/8-1.png"),
                    ],
                },
                {
                    title: "Chị Phượng",
                    desc: "Phun xăm thẩm mỹ",
                    images: [
                        require("@/assets/imgs/5-1.png"),
                        require("@/assets/imgs/6-1.png"),
                    ],
                },
                {
                    title: "Chị Đức",
                    desc: "Phun xăm thẩm mỹ",
                    images: [
                        require("@/assets/imgs/3-2.png"),
                        require("@/assets/imgs/4-2.png"),
                    ],
                },
            ],

            settingsIntroView: {
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
            settingsIntroView: {
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
            settingsFbCustomer: {
                infinite: true,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    { breakpoint: 1024, settings: { slidesToShow: 3 } },
                    { breakpoint: 768, settings: { slidesToShow: 2 } },
                    { breakpoint: 480, settings: { slidesToShow: 1 } },
                ],
            },

            listFbCustomer: [
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/2-1.jpg",
                    "image": require("@/assets/imgs/2-1.jpg")
                },
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/3.jpg",
                    "image": require("@/assets/imgs/3.jpg")
                },
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/3d.jpg",
                    "image": require("@/assets/imgs/3d.jpg")
                },
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/a2.jpg",
                    "image": require("@/assets/imgs/a2.jpg")
                },
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/e.jpg",
                    "image": require("@/assets/imgs/e.jpg")
                },
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/3e.jpg",
                    "image": require("@/assets/imgs/3e.jpg")
                },
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/2-1.jpg",
                    "image": require("@/assets/imgs/2-1.jpg")
                },
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/3.jpg",
                    "image": require("@/assets/imgs/3.jpg")
                },
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/3d.jpg",
                    "image": require("@/assets/imgs/3d.jpg")
                },
                {
                    "url": "https://mailisa.com/wp-content/uploads/2024/01/a2.jpg",
                    "image": require("@/assets/imgs/a2.jpg")
                }
            ]

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
<style>
.design-pattern-bg::after
 {
  position: absolute;
  content: "";
  width: 100%;
  height: 4.6875rem;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;
  bottom: -8%;
  transform: translateX(-50%) rotate(180deg);
  background-image: url("@/assets/imgs/pattern_light.png");
}



</style>