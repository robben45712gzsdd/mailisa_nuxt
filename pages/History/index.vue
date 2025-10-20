<template>
    <div class="w-full">
        <section v-for="value in listImages" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <img :src="value.src" alt="" class="w-full h-full object-cover">
        </section>
    </div>
</template>
<script>
export default {
    name: "History",
    data() {
        return {
            listImages: [
                {
                    "index": 1,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/1-2-e1752114706211.jpg",
                    "local": "@/assets/imgs/1-2-e1752114706211_0.jpg"
                },
                {
                    "index": 2,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/6-3-e1752114769631.jpg",
                    "local": "@/assets/imgs/6-3-e1752114769631_1.jpg"
                },
                {
                    "index": 3,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/7-3.jpg",
                    "local": "@/assets/imgs/7-3_2.jpg"
                },
                {
                    "index": 4,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-4.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-4_3.jpg"
                },
                {
                    "index": 5,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-5.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-5_4.jpg"
                },
                {
                    "index": 6,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-6.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-6_5.jpg"
                },
                {
                    "index": 7,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-7.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-7_6.jpg"
                },
                {
                    "index": 8,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-14.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-14_7.jpg"
                },
                {
                    "index": 9,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-15.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-15_8.jpg"
                },
                {
                    "index": 10,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-16.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-16_9.jpg"
                },
                {
                    "index": 11,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-9.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-9_10.jpg"
                },
                {
                    "index": 12,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-10.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-10_11.jpg"
                },
                {
                    "index": 13,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-11.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-11_12.jpg"
                },
                {
                    "index": 14,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/lich-su-phat-trien-12.jpg",
                    "local": "@/assets/imgs/lich-su-phat-trien-12_13.jpg"
                }
            ]

        };
    }
};
</script>