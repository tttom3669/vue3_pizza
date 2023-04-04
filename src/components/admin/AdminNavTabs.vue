<template>
  <div class="mt-5">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <RouterLink to="/admin/products" class="nav-link"
          >後台產品管理列表</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/orders" class="nav-link"
          >後台訂單管理列表</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/coupons" class="nav-link"
          >後台優惠券管理列表</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/articles" class="nav-link"
          >後台文章管理列表</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
};
</script>
