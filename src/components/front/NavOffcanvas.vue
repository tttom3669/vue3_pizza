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
    </div>
  </div>
</template>

<script>
import CategorySidebar from '@/components/front/CategorySidebar.vue';

export default {
  components: { CategorySidebar },
};
</script>
