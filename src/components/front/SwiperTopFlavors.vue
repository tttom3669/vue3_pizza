<template>
  <div data-aos="fade-left">
    <swiper
      :breakpoints="swiperBreakpoints"
      :modules="modules"
      :navigation="true"
      :loop="true"
      :speed="800"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <div class="mt-2 mb-2 text-center">
          <div class="card h-100 py-2 shadow-sm overflow-hidden">
            <router-link :to="`/product/${product.id}`"
            @click.prevent="()=>getProduct(product.id)">
              <img
                :src="product.imageUrl"
                class="card-img-top w-75 mx-auto object-fit-cover"
                alt="pizza"
                height="200"
              />
            </router-link>
            <div class="card-body">
              <router-link
                :to="`/product/${product.id}`"
                class="text-decoration-none text-cusDarkBrown"
                @click.prevent="()=>getProduct(product.id)"
              >
                <h5 class="card-title fw-bold">{{ product.title }}</h5>
              </router-link>
              <!-- <p class="card-subtitle text-cusGray mb-1">
                    Margherita Pizza</p> 英文名-->
              <p class="h6 card-text text-primary fw-bold mb-3">
                NT $ {{ product.price }}
              </p>
              <div
                class="d-flex flex-row justify-content-center align-items-center"
              >
                <div class="me-4"><i class="bi bi-heart"></i></div>
                <button
                  type="button"
                  class="btn btn-cusDarkBrown border-0 text-nowrap px-3 px-md-4"
                  @click="() => addToCart(product.id)"
                  :disabled="loadingItem === product.id"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                    v-if="loadingItem === product.id"
                  ></span>
                  加入購物車
                </button>
              </div>
            </div>
          </div>
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
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: { Swiper, SwiperSlide },
  computed: {
    ...mapState(loadingStore, ['isLoading', 'loadingItem']),
    ...mapState(swiperProductsStore, [
      'swiperBreakpoints',
      'modules',
      'products',
    ]),
  },
  methods: {
    ...mapActions(swiperProductsStore, ['getSwiperProducts']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(productsStore, ['getProduct']),
  },
  props: ['category'],

  mounted() {
    this.getSwiperProducts(this.category);
  },
};
</script>
