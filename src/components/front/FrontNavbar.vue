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
          <router-link class="nav-item nav-link me-4" to="/products"
            >美味菜單</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/login">
            <i class="bi bi-heart"></i
          ></router-link>
          <router-link class="nav-item nav-link position-relative" to="/cart"
            ><i class="bi bi-bag"></i>
            <span
              class="badge rounded-pill bg-danger
              position-absolute top-0 start-100 translate-middle"
              >{{ cart.carts?.length }}</span
            >
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <!-- 導覽列 (行動版) -->
  <NavOffcanvas></NavOffcanvas>
</template>

<script>
import NavOffcanvas from '@/components/front/NavOffcanvas.vue';
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';

export default {
  components: { NavOffcanvas },
  methods: {
    ...mapActions(cartStore, ['getCart']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  mounted() {
    this.getCart();
  },
};
</script>
