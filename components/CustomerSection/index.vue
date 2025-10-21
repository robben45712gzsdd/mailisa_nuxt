<template>
  <div
    class="bg-cover bg-no-repeat bg-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="py-6 md:py-12 container">
      <HeadingTitle :title="title" />

      <!-- Nội dung chính -->
      <div class="flex gap-5 mt-10 max-h-[400px]">
        <!-- Video -->
        <div class="flex-[2] aspect-[4/3]">
          <iframe
            loading="lazy"
            width="560"
            height="315"
            :src="videoUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="rounded-2xl w-full h-full"
          ></iframe>
        </div>

        <!-- Danh sách hình nhỏ -->
        <div class="flex-1 gap-2 overflow-y-auto">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="flex flex-col items-center mb-4 w-full cursor-pointer"
          >
            <img :src="item.image" :alt="item.title" class="rounded-lg" />
            <p
              class="mt-4 font-bold text-primary-dark text-sm text-center leading-5 md:leading-6 tracking-wide"
            >
              {{ item.title }}
            </p>
            <span class="mt-4 w-20 hr"></span>
          </div>
        </div>
      </div>

      <!-- Mô tả -->
      <p
        v-if="description"
        class="mt-10 font-[500] text-md text-primary-dark leading-5 md:leading-6 tracking-wide"
      >
        {{ description }}
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import HeadingTitle from "@/components/HeadingTitle";

export default {
  name: "CustomerSection",
  components: {
    HeadingTitle,
  },
  props: {
    backgroundImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
