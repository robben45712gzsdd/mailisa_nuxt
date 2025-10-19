<template>
  <div
    class="relative bg-gradient-to-br from-pink-50 to-purple-50 shadow-xl mx-auto border-secondary rounded-3xl w-full max-w-md overflow-hidden"
  >
    <!-- Image Section -->
    <div class="relative h-64 overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
    </div>

    <!-- Content Section -->
    <div class="space-y-4 p-6">
      <h4
        class="font-bold text-secondary text-2xl text-center uppercase tracking-wide"
      >
        {{ title }}
      </h4>

      <p v-if="description" class="text-[#222222] text-[12px] leading-relaxed">
        {{ truncatedDescription }}
      </p>

      <!-- Buttons -->
      <div class="flex gap-2 pt-2">
        <ButtonCustom
          text="Nhận tư vấn"
          link="/services/brow-couture"
          class="flex-1"
        />
        <a
          :href="link"
          class="flex flex-1 justify-center items-center bg-white hover:bg-pink-50 shadow-md hover:shadow-lg border-2 border-pink-600 rounded-full font-semibold text-pink-600 text-sm transition-all duration-300"
        >
          Tìm hiểu thêm
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonCustom from "@/components/ButtonCustom";
import { truncateText } from "@/utils/text";

const props = defineProps({
  title: String,
  description: {
    type: String,
    default: "",
  },
  image: String,
  link: String,
});

const truncatedDescription = truncateText(props?.description, 100);
</script>
