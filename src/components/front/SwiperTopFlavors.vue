<template>
  <div data-aos="fade-up">
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
            <router-link
              :to="`/product/${product.id}`"
              @click.prevent="() => getProduct(product.id)"
            >
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
                @click.prevent="() => getProduct(product.id)"
              >
                <h5 class="card-title fw-bold">{{ product.title }}</h5>
              </router-link>
              <!-- <p class="card-subtitle text-cusGray mb-1">
                    Margherita Pizza</p> 英文名-->
              <p
                class="h5 card-text text-primary fw-bold mb-3"
                v-if="product.price === product.origin_price"
              >
                NT ${{ product.price }}
              </p>
              <div
                class="d-flex flex-row justify-content-center align-items-baseline mb-3"
                v-else
              >
                <div class="h5 card-text text-primary fw-bold me-2">
                  NT${{ product.price }}
                </div>
                <del class="h6 card-text me-2 text-cusGray"
                  >NT${{ product.origin_price }}</del
                >
              </div>
              <div
                class="d-flex flex-row justify-content-center align-items-center"
              >
              <div class="me-4" v-if="collectionList?.indexOf(product.id)===-1"
                    @click="()=>updateCollection(product)">
                      <i
                        class="bi collection"
                        :class="{'bi-heart':collectionList?.indexOf(product.id)===-1,
                        'bi-suit-heart-fill':collection.hover == true
                        && collection.itemID == product.id}"
                        @mouseover="() => (collection.hover = true, collection.itemID=product.id)"
                        @mouseout="() => (collection.hover = false, collection.itemID='')"
                      ></i>
                    </div>
                    <div class="me-4" v-else  @click="()=>updateCollection(product)">
                      <i class="bi bi-suit-heart-fill" style="color: red;"></i>
                    </div>
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
import collectionStore from '@/stores/collectionStore';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: { Swiper, SwiperSlide },
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
