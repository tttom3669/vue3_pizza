<template>
  <div class="bg_texture3" style="min-height: 600px">
    <div class="container">
      <div class="row d-flex flex-row justify-content-between my-5">
        <div class="col-md-2 d-lg-block d-none">
          <!-- 商品分類 -->
          <CategorySidebar></CategorySidebar>
        </div>
        <div class="col-lg-9">
          <!-- 最新消息標題 -->
      <div
        class="d-flex flex-column align-items-start justify-content-center"
      >
        <h3 class="fw-bold mt-1 border-3 border-start border-primary">
          <span class="text-cusDarkBrown ms-3">{{ filterCategory === '全部商品'
          ? '全部商品': filterCategory }}</span>
        </h3>
      </div>
          <div
            class="row d-flex justify-content-center justify-content-md-start"
          >
            <div
              class="col-lg-4 col-md-6 mb-2 text-center"
              v-for="product in filterProducts"
              :key="product.id"
            >
              <div class="mx-5 mx-sm-4 my-2">
                <ProductCard :product="product"></ProductCard>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <SharedPagination
                :pages="page"
                @change-page="getProducts"
                v-if="filterCategory === '全部商品'"
              ></SharedPagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'"></VueLoading>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';
import loadingStore from '@/stores/loadingStore';
import CategorySidebar from '@/components/front/CategorySidebar.vue';
import swalMessage from '@/stores/swalMessage';
import SharedPagination from '@/components/shared/SharedPagination.vue';
import ProductCard from '@/components/front/ProductCard.vue';

export default {
  data() {
    return {
      tempProduct: {},
    };
  },
  components: { CategorySidebar, SharedPagination, ProductCard },
  computed: {
    ...mapState(productsStore, ['filterProducts', 'page', 'filterCategory']),
    ...mapState(loadingStore, ['isLoading']),
  },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    ...mapActions(productsStore, ['getProducts', 'getAllProducts']),
  },
  mounted() {
    this.getProducts();
    this.getAllProducts();
  },
};
</script>
