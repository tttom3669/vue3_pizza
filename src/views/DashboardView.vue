<template>
  <div class="container">
    <h1>這是後台首頁</h1>
    <router-link to="/admin/products">產品管理列表</router-link> |
    <router-link to="/">回前台首頁</router-link> |
    <a href="#" @click.prevent="logout">登出</a> |
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
import Swal from 'sweetalert2';

const { VITE_APP_URL } = import.meta.env;
export default {
  methods: {
    logout() {
      document.cookie = `yoToken=; expires=${new Date()}`;
      this.$router.push('/login');
    },
    // 檢查登入驗證
    checkLogin() {
      // const token = document.cookie
      //   .split('; ')
      //   .find((row) => row.startsWith('yoToken='))
      //   ?.split('=')[1];
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)yoToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      if (token) {
        this.$http
          .post(`${VITE_APP_URL}/api/user/check`)
          .then((res) => {
            if (!res.data.success) {
              this.$router.push('/login');
            }
          })
          .catch(() => {
            Swal.fire({
              icon: 'error',
              title: '沒有權限，請重新登入',
            });
            this.$router.push('/login');
          });
      } else {
        Swal.fire({
          icon: 'error',
          title: '請先登入',
        });
        this.$router.push('/login');
      }
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
