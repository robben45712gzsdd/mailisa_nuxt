<!-- RegisterPage.vue -->
<template>
    <div class="flex justify-center items-center bg-cover bg-center min-h-screen"
        :style="{ backgroundImage: `url(${images.bgDoiNguBacSy})` }">
        <div class="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
            <h2 class="mb-6 font-bold text-primary-dark text-2xl text-center">Đăng Ký</h2>
            <form @submit.prevent="register">
                <div class="mb-4">
                    <label for="username" class="block font-medium text-gray-700 text-sm">Tên đăng nhập</label>
                    <input type="text" id="username" v-model="form.username"
                        class="block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-primary-dark rounded-md focus:outline-none focus:ring-primary-dark w-full"
                        required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block font-medium text-gray-700 text-sm">Email</label>
                    <input type="email" id="email" v-model="form.email"
                        class="block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-primary-dark rounded-md focus:outline-none focus:ring-primary-dark w-full"
                        required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block font-medium text-gray-700 text-sm">Mật khẩu</label>
                    <input type="password" id="password" v-model="form.password"
                        class="block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-primary-dark rounded-md focus:outline-none focus:ring-primary-dark w-full"
                        required />
                </div>
                <div class="mb-6">
                    <label for="confirmPassword" class="block font-medium text-gray-700 text-sm">Xác nhận mật
                        khẩu</label>
                    <input type="password" id="confirmPassword" v-model="form.confirmPassword"
                        class="block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-primary-dark rounded-md focus:outline-none focus:ring-primary-dark w-full"
                        required />
                </div>
                <button type="submit"
                    class="bg-primary-dark hover:bg-opacity-90 focus:ring-opacity-50 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark w-full text-white">Đăng
                    Ký</button>
            </form>
            <p class="mt-4 text-gray-600 text-sm text-center">
                Đã có tài khoản? <nuxt-link to="/login" class="text-primary-dark hover:underline">Đăng
                    nhập</nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
import { images } from '@/assets/imgs';

export default {
    data() {
        return {
            images,
            form: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
        };
    },
    methods: {
        register() {
            // Logic đăng ký ở đây (ví dụ: gọi API)
            console.log('Đăng ký:', this.form);
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
</style>