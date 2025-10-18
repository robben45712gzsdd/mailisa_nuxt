<template>
  <div
    class="relative bg-gradient-to-br from-pink-50 to-purple-50 shadow-2xl mx-auto border-secondary rounded-3xl w-full max-w-md overflow-hidden"
  >
    <!-- Image Section -->
    <div class="relative h-64 overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
    </div>

    <!-- Content Section -->
    <div class="space-y-4 p-6">
      <h3
        class="font-bold text-gradient text-secondary text-2xl text-center uppercase tracking-wide"
      >
        {{ title }}
      </h3>

      <p class="font-[500] text-[#222222] text-[12px] leading-relaxed">
        {{ description }}
      </p>

      <!-- Buttons -->
      <div class="flex flex-col justify-between items-center gap-2 pt-2">
        <ButtonCustom :link="'/services/brow-couture'">
          <div class="flex items-center gap-1">
            <h4 class="uppercase">Giá Gốc</h4>
            <span class="text-md line-through">{{ oldPrice }} Đ</span>
            <TrendingFlatIcon class="ml-1" />
            <span class="font-bold text-[#FFFF79] text-lg">
              {{ newPrice }} Đ
            </span>
          </div>
        </ButtonCustom>

        <a :href="link" class="mt-2 link_btn">Xem chi tiết</a>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCustom from "~/components/ButtonCustom/index.vue";
// Thay vì MUI Icon (không có trong Vue), ta dùng icon tương tự
// Có thể dùng thư viện heroicons hoặc fontawesome
import { ArrowRightIcon } from "@heroicons/vue/solid";

export default {
  name: "BoxProduction",
  components: {
    ButtonCustom,
    TrendingFlatIcon: ArrowRightIcon, // thay icon TrendingFlatIcon
  },
  props: {
    title: String,
    description: String,
    image: String,
    oldPrice: [String, Number],
    newPrice: [String, Number],
    link: String,
  },
};
</script>