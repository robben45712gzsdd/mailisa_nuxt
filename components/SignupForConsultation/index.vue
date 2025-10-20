<template>
  <!-- Đăng ký -->
  <div
    class="flex md:flex-row flex-col items-stretch gap-6 py-12 w-full container"
  >
    <div class="flex flex-col flex-3 items-center w-full text-center">
      <HeadingTitle
        title="Đăng ký nhận tư vấn ngay"
        class="font-starcity text-primary-dark text-2xl capitalize"
        :classText="classText"
      />
      <img
        :src="images.hoaHau3"
        alt="phun mày chạm hạt sương bay"
        class="rounded-lg w-full h-100 object-contain"
      />
    </div>

    <div
      class="flex flex-col flex-2 justify-center bg-cover bg-center shadow-custom border border-1 border-white rounded-[1.5rem] w-full h-auto text-center"
      :style="{ backgroundImage: `url(${images.doingunhanvien})` }"
    >
      <div class="p-6">
        <h2 class="mb-12 font-bold text-white text-2xl leading-tight">
          ĐĂNG KÝ <br />
          NHẬN TƯ VẤN
        </h2>
        <form class="flex flex-col items-center space-y-4 w-full">
          <input
            type="text"
            placeholder="Họ & Tên"
            class="bg-white p-2 rounded-md w-full text-[#A55976] text-md placeholder:!text-md placeholder:text-[#A55976]"
            required
          />
          <input
            type="tel"
            placeholder="Số điện thoại của bạn"
            class="bg-white p-2 rounded-md w-full text-[#A55976] text-md placeholder:!text-md placeholder:text-[#A55976]"
            required
          />
          <ButtonCustom text="ĐẶT LỊCH NGAY" class="border-white rounded-md text-2xl" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { images } from "@/assets/imgs";
import HeadingTitle from "@/components/HeadingTitle";
import ButtonCustom from "@/components/ButtonCustom";
export default {
  name: "SignupForConsultation",
  components: { HeadingTitle, ButtonCustom },
  props: {
    title: {
      type: String,
      default: "Đăng ký nhận tư vấn ngay",
    },
    classText: {
      type: String,
      default: "font-starcity capitalize text-2xl",
    },
  },
  data() {
    return {
      images,
    };
  },
};
</script>
