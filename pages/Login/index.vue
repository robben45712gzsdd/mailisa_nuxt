<!-- LoginPage.vue -->
<template>
  <div class="flex justify-center items-center bg-cover bg-center min-h-screen" :style="{ backgroundImage: `url(${images.bgDoiNguBacSy})` }">
    <div class="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
      <h2 class="mb-6 font-bold text-primary-dark text-2xl text-center">Đăng Nhập</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block font-medium text-gray-700 text-sm">Email hoặc Tên đăng nhập</label>
          <input type="text" id="email" v-model="form.email" class="block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-primary-dark rounded-md focus:outline-none focus:ring-primary-dark w-full" required />
        </div>
        <div class="mb-6">
          <label for="password" class="block font-medium text-gray-700 text-sm">Mật khẩu</label>
          <input type="password" id="password" v-model="form.password" class="block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-primary-dark rounded-md focus:outline-none focus:ring-primary-dark w-full" required />
        </div>
        <button type="submit" class="bg-primary-dark hover:bg-opacity-90 focus:ring-opacity-50 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark w-full text-white">Đăng Nhập</button>
      </form>
      <p class="mt-4 text-gray-600 text-sm text-center">
        <nuxt-link to="/quen-mat-khau" class="text-primary-dark hover:underline">Quên mật khẩu?</nuxt-link>
      </p>
      <p class="mt-2 text-gray-600 text-sm text-center">
        Chưa có tài khoản? <nuxt-link to="/signup" class="text-primary-dark hover:underline">Đăng ký</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import {images} from '@/assets/imgs';
export default {
  data() {
    return {
        images,
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // Logic đăng nhập ở đây (ví dụ: gọi API)
      console.log('Đăng nhập:', this.form);
    },
  },
};
</script>

<style>
.text-primary-dark {
  color: #7f143d;
}
.bg-primary-dark {
  background-color: #7f143d;
}
.focus\:ring-primary-dark {
  --tw-ring-color: #7f143d;
}
.focus\:border-primary-dark {
  border-color: #7f143d;
}
footer{
    margin-top: 0 !important;
}
</style>