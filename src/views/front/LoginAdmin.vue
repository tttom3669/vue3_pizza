<template>
  <div class="container text-center mt-5">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              v-model="user.username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="user.password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';

const { VITE_APP_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    // 使用者登入驗證
    login() {
      this.$http
        .post(`${VITE_APP_URL}/admin/signin`, this.user)
        .then((res) => {
          this.swalShow(`${res.data.message}`, 'success');
          const { token, expired } = res.data;
          // 把token和時效存在cookie中
          document.cookie = `yoToken=${token}; expires=${new Date(expired)};`;
          this.$router.push('/admin/products');
        })
        .catch(() => {
          this.swalShow('帳號密碼錯誤，請重新輸入', 'error');
        });
    },
  },
};
</script>
