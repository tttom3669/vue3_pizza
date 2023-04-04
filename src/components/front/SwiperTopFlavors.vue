<template>
  <div>
    <swiper
      :breakpoints="swiperBreakpoints"
      :modules="modules"
      :navigation="true"
      :loop="true"
      :speed="800"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <div class="mb-2 text-center">
          <ProductCard :product="product" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { mapState, mapActions } from 'pinia';
import swiperProductsStore from '@/stores/swiperProductsStore';
import ProductCard from '@/components/front/ProductCard.vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: { Swiper, SwiperSlide, ProductCard },
  computed: {
    ...mapState(swiperProductsStore, [
      'swiperBreakpoints',
      'modules',
      'products',
    ]),
  },
  methods: {
    ...mapActions(swiperProductsStore, ['getSwiperProducts']),
  },
  props: ['category'],

  mounted() {
    this.getSwiperProducts(this.category);
  },
};
</script>
