<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink to="/admin/products" class="navbar-brand"
        >這是後台首頁</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link">回前台首頁</RouterLink>
        </div>
        <div class="navbar-nav ms-auto">
          <button class="btn btn-warning" type="button" @click.prevent="logout">
            登出
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    logout() {
      this.swalShow('已登出', 'success');
      document.cookie = `yoToken=; expires=${new Date()}`;
      this.$router.push('/login');
    },
  },
};
</script>
