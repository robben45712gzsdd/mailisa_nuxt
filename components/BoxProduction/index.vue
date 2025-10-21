<template>
  <div
    class="relative bg-gradient-to-br from-pink-50 to-purple-50 shadow-2xl mx-auto border-secondary rounded-3xl w-full max-w-md overflow-hidden"
  >
    <!-- Image Section -->
    <div class="relative h-64 overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"
      ></div>
    </div>

    <!-- Content Section -->
    <div class="space-y-4 p-2 md:p-6">
      <h3
        class="font-bold text-gradient text-secondary text-2xl text-center uppercase tracking-wide line-clamp-2"
      >
        {{ title }}
      </h3>

      <p class="font-[500] text-[#222222] text-[12px] leading-relaxed line-clamp-4 line-clamp-4">
        {{ truncateText(description, 200) }}
      </p>

      <!-- Buttons -->
      <div class="flex flex-col justify-between items-center gap-2 pt-2">
        <ButtonCustom :link="'/services/brow-couture'">
          <div class="flex items-center justify-center gap-1 flex-wrap">
            <h4 class="uppercase hidden md:block">Giá Gốc</h4>
            <span class="text-sm line-through">{{ oldPrice?.toLocaleString() }} Đ</span>
            <i class="fa-solid fa-arrow-right ml-1 hidden md:block"></i>
            <span class="font-bold text-[#FFFF79] text-lg">
              {{ newPrice?.toLocaleString() }} Đ
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
import { truncateText } from "~/utils/text";

export default {
  name: "BoxProduction",
  components: {
    ButtonCustom,
  },
  props: {
    title: String,
    description: String,
    image: String,
    oldPrice: [String, Number],
    newPrice: [String, Number],
    link: String,
  },
  methods: {
    truncateText,
  },
};
</script>
