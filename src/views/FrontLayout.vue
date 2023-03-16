<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- 導覽列 -->
    <FrontNavbar></FrontNavbar>
    <div class="flex-grow-1" style="min-height: 600px;">
      <router-view></router-view>
    </div>
    <!-- footer -->
    <FrontFooter></FrontFooter>
  </div>
</template>

<script>
import FrontNavbar from '@/components/front/FrontNavbar.vue';
import FrontFooter from '@/components/front/FrontFooter.vue';

export default {
  data() {
    return {};
  },
  components: { FrontNavbar, FrontFooter },
};
</script>

<style></style>
