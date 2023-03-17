<template>
  <div class="container py-3">
    <div
      class="d-flex flex-column align-items-center justify-content-center my-5"
    >
      <p class="fw-bold mb-n1 text-cusGray">TOP FLAVORS</p>
      <h3 class="h1 fw-bold mt-1">
        <span class="text-primary me-5">—</span>精選口味<span
          class="text-primary ms-5"
          >—</span
        >
      </h3>
    </div>
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
                <div class="card h-100 py-2 shadow-sm overflow-hidden boxTranslate">
                <img
                    :src="product.imageUrl"
                    class="card-img-top w-75 mx-auto object-fit-cover"
                    alt="pizza"
                    height="200"
                />
                <div class="card-body">
                    <h5 class="card-title fw-bold">{{ product.title }}</h5>
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
                    >
                        加入購物車
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  height: 420px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper';

import { mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      modules: [Autoplay, Navigation, Pagination],
      swiperBreakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
      products: [],
    };
  },
  components: { Swiper, SwiperSlide },
  methods: {
    getProducts() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products.filter((product) => product.category === '披薩');
      });
    },
    ...mapActions(cartStore, ['addToCart']),
  },

  mounted() {
    this.getProducts();
  },
};
</script>
