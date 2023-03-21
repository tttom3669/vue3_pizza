<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/img/logo1.png" alt="logo" />
        </router-link>
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <CategorySidebar></CategorySidebar>
      <div class="list-group mt-3">
        <!-- <router-link class="text-decoration-none list-group-item" to="/"
          >首頁</router-link
        > -->
        <!-- <router-link class="text-decoration-none list-group-item" to="/"
          >最新消息</router-link
        > -->
        <!-- <router-link class="text-decoration-none list-group-item" to="/products"
          >美味菜單</router-link
        > -->
        <router-link class="text-decoration-none list-group-item" to="/cart"
          >購物車</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import CategorySidebar from '@/components/front/CategorySidebar.vue';

export default {
  components: { CategorySidebar },
};
</script>
