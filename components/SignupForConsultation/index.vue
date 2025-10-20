<template>
  <!-- Đăng ký -->
  <div
    class="flex flex-col md:flex-row items-stretch w-full container py-12 gap-6"
  >
    <div class="w-full flex flex-col flex-3 items-center text-center">
      <HeadingTitle
        title="Đăng ký nhận tư vấn ngay"
        class="font-starcity capitalize text-2xl text-primary-dark"
        :classText="classText"
      />
      <img
        :src="images.hoaHau3"
        alt="phun mày chạm hạt sương bay"
        class="w-full h-100 object-contain rounded-lg"
      />
    </div>

    <div
      class="border border-1 border-white w-full h-auto bg-cover bg-center rounded-[1.5rem] flex-2 flex flex-col justify-center text-center"
      :style="{ backgroundImage: `url(${images.doingunhanvien})` }"
    >
      <div class="p-6">
        <h2 class="text-white text-2xl font-bold mb-12 leading-tight">
          ĐĂNG KÝ <br />
          NHẬN TƯ VẤN
        </h2>
        <form class="flex flex-col items-center space-y-4 w-full">
          <input
            type="text"
            placeholder="Họ & Tên"
            class="w-full bg-white p-2 rounded-md text-[#A55976] placeholder:text-[#A55976] text-md placeholder:!text-md"
            required
          />
          <input
            type="tel"
            placeholder="Số điện thoại của bạn"
            class="w-full bg-white p-2 rounded-md text-[#A55976] placeholder:text-[#A55976] text-md placeholder:!text-md"
            required
          />
          <ButtonCustom text="ĐẶT LỊCH NGAY" class="rounded-md text-2xl" />
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
