<template>
  <div data-aos="fade-down">
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
          <ProductCard :product="product"></ProductCard>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';
import swiperProductsStore from '@/stores/swiperProductsStore';
import productsStore from '@/stores/productsStore';
import collectionStore from '@/stores/collectionStore';
import ProductCard from '@/components/front/ProductCard.vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: { Swiper, SwiperSlide, ProductCard },
  computed: {
    ...mapState(collectionStore, ['collectionList', 'collection']),
    ...mapState(loadingStore, ['isLoading', 'loadingItem']),
    ...mapState(swiperProductsStore, [
      'swiperBreakpoints',
      'modules',
      'products',
    ]),
  },
  methods: {
    ...mapActions(collectionStore, ['updateCollection', 'getCollection']),
    ...mapActions(swiperProductsStore, ['getSwiperProducts']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(productsStore, ['getProduct']),
  },
  props: ['category'],

  mounted() {
    this.getSwiperProducts(this.category);
    this.getCollection();
  },
};
</script>
