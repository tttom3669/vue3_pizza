<template>
  <AdminNavbar></AdminNavbar>
  <div class="container">
    <AdminNavTabs></AdminNavTabs>
    <router-view></router-view>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import AdminNavTabs from '../components/admin/AdminNavTabs.vue';
import AdminNavbar from '../components/admin/AdminNavbar.vue';

const { VITE_APP_URL } = import.meta.env;
export default {
  methods: {
    // 檢查登入驗證
    checkLogin() {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('yoToken='))
        ?.split('=')[1];
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
  components: { AdminNavTabs, AdminNavbar },
  created() {
    this.checkLogin();
  },
};
</script>
