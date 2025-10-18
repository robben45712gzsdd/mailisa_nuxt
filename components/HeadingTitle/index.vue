<template>
  <h2
    data-aos="fade-up"
    data-aos-duration="1000"
    class="mx-auto w-max font-bold text-gradient text-3xl text-center uppercase"
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
  },
};
</script>
