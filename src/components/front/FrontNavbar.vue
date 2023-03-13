<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/img/logo1.png" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="d-none d-lg-block justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link class="nav-item nav-link me-4 active" to="/"
            >首頁</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/"
            >最新消息</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/"
            >美味菜單</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/"
            >常見問題</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/login">
            登入後台</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/login">
            <i class="bi bi-heart"></i
          ></router-link>
          <a class="nav-item nav-link position-relative" href="./cart.html"
            ><i class="bi bi-bag"></i>
            <span
              class="badge rounded-pill
              bg-danger position-absolute top-0 start-100 translate-middle"
              >11</span
            >
          </a>
        </div>
      </div>
    </div>
  </nav>
  <!-- 導覽列 (行動版) -->
  <NavOffcanvas></NavOffcanvas>
</template>

<script>
import NavOffcanvas from '@/components/front/NavOffcanvas.vue';

export default {
  components: { NavOffcanvas },
};
</script>
