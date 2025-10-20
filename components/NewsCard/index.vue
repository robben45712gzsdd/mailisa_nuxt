<template>
  <div
    @click="() => window.open(link, '_blank')"
    class="bg-pink-50 shadow-custom shadow-lg hover:shadow-xl rounded-2xl max-w-md overflow-hidden transition-shadow duration-300 cursor-pointer"
  >
    <!-- Image Container -->
    <div class="relative overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    <!-- Content Container -->
    <div class="p-6">
      <!-- Title -->
      <h3
        class="mb-4 min-h-[3.5rem] font-bold text-burgundy text-xl leading-tight"
      >
        {{ truncateText(title, 100) }}
      </h3>

      <!-- Date and Arrow -->
      <div class="flex justify-between items-center">
        <span class="text-gray-600 text-sm">{{ date }}</span>
        <button
          class="text-pink-400 hover:text-pink-600 transition-colors duration-300"
          @click="handleClick"
          aria-label="Xem chi tiết"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { truncateText } from '~/utils/text';

export default {
  name: "NewsCard",
  props: {
    image: {
      type: String,
      required: true,
      default: "/images/news-default.jpg",
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    date: {
      type: String,
      required: true,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
  },
  methods: {
    handleClick() {
      if (this.link && this.link !== "#") {
        this.$router.push(this.link);
      }
      this.$emit("click");
    },
    truncateText  
  },
};
</script>

<style scoped>

/* Hover effect cho image */
.overflow-hidden:hover img {
  transform: scale(1.1);
}

</style>
