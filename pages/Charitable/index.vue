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
                    "index": 2,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/thien-nguyen-1.jpg",
                    "local": "@/assets/imgs/thien-nguyen-1_1.jpg"
                },
                {
                    "index": 3,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/thien-nguyen-2.jpg",
                    "local": "@/assets/imgs/thien-nguyen-2_2.jpg"
                },
                {
                    "index": 4,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/thien-nguyen-3.jpg",
                    "local": "@/assets/imgs/thien-nguyen-3_3.jpg"
                },
                {
                    "index": 5,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/thien-nguyen-4.jpg",
                    "local": "@/assets/imgs/thien-nguyen-4_4.jpg"
                },
                {
                    "index": 6,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/thien-nguyen-5.jpg",
                    "local": "@/assets/imgs/thien-nguyen-5_5.jpg"
                },
                {
                    "index": 7,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/thien-nguyen-6.jpg",
                    "local": "@/assets/imgs/thien-nguyen-6_6.jpg"
                },
                {
                    "index": 8,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/thien-nguyen-7.jpg",
                    "local": "@/assets/imgs/thien-nguyen-7_7.jpg"
                },
                {
                    "index": 9,
                    "src": "https://mailisa.com/wp-content/uploads/2025/07/thien-nguyen-8.jpg",
                    "local": "@/assets/imgs/thien-nguyen-8_8.jpg"
                }
            ]

        };
    }
};
</script>