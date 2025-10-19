<template>
  <h2
    data-aos="fade-up"
    data-aos-duration="1000"
    class="mx-auto font-bold px-4 text-2xl md:text-3xl text-center uppercase tracking-wide"
    :class="classText"
  >
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: "HeadingTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    classText: {
      type: String,
      default: "text-gradient",
    },
  },
};
</script>
