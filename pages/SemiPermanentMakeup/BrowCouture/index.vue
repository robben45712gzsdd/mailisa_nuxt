<template>
    <div>
        <img :src="require('@/assets/imgs/2.2.-Phun-May-Brow-Couture-01.jpg')" alt="" />
        <!-- Bác sĩ -->
        <Docter />

        <!-- Thiết kế dáng mẫu -->
        <div class="relative" :class="'bg-[url(' +
            require('@/assets/imgs/trang-moi.png.webp') +
            ')] bg-no-repeat bg-center bg-cover'
            ">
            <div class="relative w-full design-pattern-bg">
                <div class="container py-12">
                    <div class="flex justify-center items-center gap-6">
                        <div class="col-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="300"
                            data-aos-duration="700">
                            <div class="img_wrap">
                                <img :src="require('@/assets/imgs/phun-may-cham-hat.jpg.webp')" alt="" />
                            </div>
                        </div>

                        <div class="text-white col-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300"
                            data-aos-duration="700">
                            <div class="img_wrap">
                                <img :src="require('@/assets/imgs/Artboard-19 (1).png')" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-6 md:py-12">
            <div class="flex flex-col items-center gap-6 mt-8 w-full">
                <HeadingTitle title="QUY TRÌNH PHUN MÀY BROW COUTURE ĐỘC QUYỀN TẠI MAILISA" />
                <img data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" src="@/assets/imgs/roadmap.png"
                    alt="Ảnh chứng nhận" class="w-full h-auto" />
            </div>
        </div>

        <CustomerSection :backgroundImage="require('@/assets/imgs/bgCustomer.png')"
            title="CẬN CẢNH KHÁCH HÀNG PHUN MÀY TẠI MAILISA" videoUrl="https://www.youtube.com/embed/Gvq64dNyAoU"
            :items="[
                {
                    image: require('@/assets/imgs/z6883331303545_4a433d4c18189f85233db7ce21836898.jpg'),
                    title: 'Phun Mày Đẹp Tự Nhiên Tại Mailisa',
                },
                {
                    image: require('@/assets/imgs/z6883331303545_4a433d4c18189f85233db7ce21836898.jpg'),
                    title: 'Phun Mày Đẹp Tự Nhiên Tại Mailisa',
                },
            ]">

        </CustomerSection>

        <SignupForConsultation />

        <div class="bg-cover bg-no-repeat bg-center py-4 md:py-12 w-full" :style="{
            backgroundImage: `url(${require('@/assets/imgs/BG-100.jpg.webp')})`,
            height: 'max-content'
        }">
            <!-- Kết quả khách hàng -->
            <div class="bg-cover bg-no-repeat bg-center py-4 md:py-12 w-full">
                <div class="mt-10 py-10 container">
                    <div class="flex flex-col justify-center items-center gap-3">
                        <img :src='require("@/assets/imgs/Hinh-anh-KH.png")' alt="" />
                        <h2 class="font-bold text-white text-2xl text-center">
                            ĐÃ PHUN MÀY TẠI MAILISA
                        </h2>
                    </div>
                </div>

                <!-- Slider khách hàng -->
                <client-only>
                    <SlickCarousel v-bind="settingsIntroView">
                        <div v-for="(item, index) in listIntroViews" :key="index" class="p-2">
                            <div
                                class="relative flex flex-col justify-between items-center bg-white shadow-md my-4 mx-2 p-4 rounded-xl min-h-[420px]">
                                <!-- nhóm ảnh -->
                                <div class="flex w-full h-[220px]">
                                    <div v-for="(img, i) in item.images" :key="i"
                                        class="relative flex-1 overflow-hidden">
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
            <div class="py-4 md:py-12 container" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="700">
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
                            <iframe src="https://www.youtube.com/embed/uhN_pJ8Ts7I" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                                class="shadow-lg rounded-2xl w-full h-full"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Đã phun mày -->
            <div class="bg-cover bg-no-repeat bg-center py-4 md:py-12 w-full">
                <div class="mt-10 py-10 container">
                    <div class="flex flex-col justify-center items-center gap-3">
                        <h2 class="font-bold text-white text-2xl text-center">
                            NHỮNG DÁNG MẪU PHUN MÀY
                        </h2>
                        <h2 class="font-bold text-white text-2xl text-center">
                            MÀ KHÁCH ĐÃ YÊU THÍCH VÀ LÀM TẠI MAILISA
                        </h2>
                    </div>
                </div>

                <!-- Slider khách hàng -->
                <client-only>
                    <SlickCarousel v-bind="settingsIntroView">
                        <div v-for="(item, index) in eyebrowTattooModel" :key="index" class="p-2">
                            <div
                                class="relative flex flex-col justify-between items-center my-4 mx-2 p-4 min-h-[420px]">
                                <div class="">
                                    <img :src="item?.images" class="" />
                                </div>
                            </div>
                        </div>
                    </SlickCarousel>
                </client-only>
            </div>
        </div>

        <div class="p-12 w-full container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <HeadingTitle class="my-4"
                title="ĐỘI NGŨ NHÂN VIÊN VÀ CHẾ ĐỘ CHĂM SÓC HẬU MÃI TỐT <br> CHO TỪNG KHÁCH HÀNG SAU KHI LÀM DỊCH VỤ" />

            <div class="flex md:flex-row flex-col items-stretch gap-4 min-h-80 container">
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
                        Tại Sao Thẩm Mỹ Viện Mailisa Tòa Nhà To Bự Nhân Viên Đông Mà Giá Lại
                        Tốt Như Vậy
                    </p>
                </div>
            </div>
        </div>

        <!-- Cơ sở vật chất -->
        <SlideHaTang :slidesToShow="3" />
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
                    index: 1,
                    title: "PHUN MÀY BROW COUTURE",
                    desc: "Công nghệ Phun Mày BROW COUTURE tiên tiến, hiện đại mới nhất hiện nay của Mailisa.",
                    link: "https://mailisa.com/phun-xam-tham-my/phun-may-brow-couture/",
                    img: require("@/assets/imgs/Artboard-4-1.png"),
                    url: "https://mailisa.com/wp-content/uploads/2023/09/Artboard-4-1.png",
                },
                {
                    index: 2,
                    title: "PHUN MÔI SILK LIP",
                    desc: "Công nghệ phun môi tán mà SILK LIP lên màu tự nhiên, giữ dáng môi căng mọng, mềm mịn như lụa",
                    link: "https://mailisa.com/phun-moi-mailisa/",
                    img: require("@/assets/imgs/Artboard-7.png"),
                    url: "https://mailisa.com/wp-content/uploads/2023/09/Artboard-7.png",
                },
                {
                    index: 3,
                    title: "PHUN MÍ MỞ TRÒNG  MẮT NAI",
                    desc: "Công nghệ Phun Mí Mở Tròng là kỹ thuật tiên tiến hiện đại ĐỘC QUYỀN tại Mailisa. Tạo cho bạn một cặp mắt tròn, to, đen có hồn, theo phong cách tự nhiên.",
                    link: "https://mailisa.com/phun-xam-tham-my/phun-mi-mo-trong/",
                    img: require("@/assets/imgs/PHUN-MI-3.jpg"),
                    url: "https://mailisa.com/wp-content/uploads/2025/06/PHUN-MI-3.jpg",
                },
                {
                    index: 4,
                    title: "XÓA SỬA MÀY",
                    desc: "Mailisa xóa sửa dáng mày bị xấu, đen, đậm, trổ xanh, trổ đỏ bằng công nghệ mới để nghiền nát phá vỡ phân hủy màu mực.",
                    link: "https://mailisa.com/phun-xam-tham-my/xoa-sua-may/",
                    img: require("@/assets/imgs/xoa-may-01.jpg"),
                    url: "https://mailisa.com/wp-content/uploads/2025/06/xoa-may-01.jpg",
                },
                {
                    index: 5,
                    title: "XÓA SỬA MÔI",
                    desc: "Mailisa xóa những làn môi từng phun xăm bị hư, dày màu, cộm màu, dáng môi xấu bằng công nghệ mới để nghiền nát phá vỡ phân hủy màu mực .",
                    link: "https://mailisa.com/phun-xam-tham-my/xoa-sua-moi/",
                    img: require("@/assets/imgs/Artboard-11.png"),
                    url: "https://mailisa.com/wp-content/uploads/2023/09/Artboard-11.png",
                },
                {
                    index: 6,
                    title: "XÓA SỬA MÍ",
                    desc: "Mailisa xóa mí bị xấu, xanh đen, đậm, nhòe mực bằng công nghệ mới chiếu các tia sáng trực tiếp giúp nghiền nát phá vỡ phân hủy màu mực",
                    link: "https://mailisa.com/phun-xam-tham-my/xoa-sua-mi/",
                    img: require("@/assets/imgs/XOA-MI-02.jpg"),
                    url: "https://mailisa.com/wp-content/uploads/2025/06/XOA-MI-02.jpg",
                },
            ],
            listIntroViews: [
                {
                    title: "Chị Nhi",
                    desc: "Phun xăm thẩm mỹ",
                    images: [
                        require("@/assets/imgs/1-e1736822693205.jpg"), // Trước khi làm
                        require("@/assets/imgs/2-e1736823132595.jpg"), // Sau khi làm
                    ],
                },
                {
                    title: "Chị Tâm",
                    desc: "Phun xăm thẩm mỹ",
                    images: [
                        require("@/assets/imgs/truoc-lam.jpg"), // Trước khi làm
                        require("@/assets/imgs/sau-lam.jpg"), // Sau khi làm
                    ],
                },
                {
                    title: "Chị Linh",
                    desc: "Phun xăm thẩm mỹ",
                    images: [
                        require("@/assets/imgs/truo-01.jpg"), // Trước khi làm
                        require("@/assets/imgs/truo-01-1.jpg"), // Sau khi làm
                    ],
                },
                {
                    title: "Chị Tâm Anh",
                    desc: "Phun xăm thẩm mỹ",
                    images: [
                        require("@/assets/imgs/truoc-e1736822464385.jpg"), // Trước khi làm
                        require("@/assets/imgs/SAU-3-e1736822194937.jpg"), // Sau khi làm
                    ],
                },
            ],

            eyebrowTattooModel: [
                {
                    index: 4,
                    title: "phun môi tán màu light touch",
                    images: require("@/assets/imgs/FIXWEB-07.png")
                },
                {
                    index: 5,
                    title: "phun-may-tai-mailisa",
                    images: require("@/assets/imgs/FIXWEB-06.png")
                },
                {
                    index: 6,
                    title: "phun-may-cham-hat-suong-bay",
                    images: require("@/assets/imgs/FIXWEB-05.png")
                }
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
                    { breakpoint: 768, settings: { slidesToShow: 1 } },
                    { breakpoint: 480, settings: { slidesToShow: 1 } },
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
            listFbCustomer: [
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/2-1.jpg",
                    image: require("@/assets/imgs/2-1.jpg"),
                },
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/3.jpg",
                    image: require("@/assets/imgs/3.jpg"),
                },
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/3d.jpg",
                    image: require("@/assets/imgs/3d.jpg"),
                },
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/a2.jpg",
                    image: require("@/assets/imgs/a2.jpg"),
                },
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/e.jpg",
                    image: require("@/assets/imgs/e.jpg"),
                },
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/3e.jpg",
                    image: require("@/assets/imgs/3e.jpg"),
                },
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/2-1.jpg",
                    image: require("@/assets/imgs/2-1.jpg"),
                },
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/3.jpg",
                    image: require("@/assets/imgs/3.jpg"),
                },
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/3d.jpg",
                    image: require("@/assets/imgs/3d.jpg"),
                },
                {
                    url: "https://mailisa.com/wp-content/uploads/2024/01/a2.jpg",
                    image: require("@/assets/imgs/a2.jpg"),
                },
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
<style>
.design-pattern-bg::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 4.6875rem;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    z-index: 10;
    bottom: -8%;
    transform: translateX(-50%) rotate(180deg);
    background-image: url("@/assets/imgs/pattern_light.png");
}
</style>
