<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- 導覽列 -->
    <FrontNavbar />
    <div class="flex-grow-1" style="min-height: 600px">
      <RouterView />
    </div>
    <!-- footer -->
    <FrontFooter />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import FrontNavbar from '@/components/front/FrontNavbar.vue';
import FrontFooter from '@/components/front/FrontFooter.vue';

export default {
  components: { FrontNavbar, FrontFooter, RouterView },
};
</script>
