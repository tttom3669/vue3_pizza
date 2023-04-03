<template>
  <AdminNavbar />
  <div class="container">
    <AdminNavTabs />
    <RouterView />
  </div>
</template>
<script>
import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';
import { RouterView } from 'vue-router';
import AdminNavTabs from '../components/admin/AdminNavTabs.vue';
import AdminNavbar from '../components/admin/AdminNavbar.vue';

const { VITE_APP_URL } = import.meta.env;
export default {
  components: { AdminNavTabs, AdminNavbar, RouterView },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
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
            this.swalShow('沒有權限，請重新登入', 'error');
            this.$router.push('/login');
          });
      } else {
        this.swalShow('請先登入', 'error');
        this.$router.push('/login');
      }
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
