<template>
  <div class="bg_texture2" style="min-height: 600px">
    <div class="container">
      <div class="row d-flex flex-row justify-content-between my-5">
        <div class="col-md-2 d-lg-block d-none">
          <!-- 商品分類 -->
          <CategorySidebar></CategorySidebar>
        </div>
        <div class="col-lg-9">
          <div
            class="alert alert-primary"
            role="alert"
            v-if="searchProducts?.length"
          >
            搜尋 <span class="fw-bold">{{ keywords }}</span> ，總共有
            <span class="fw-bold">{{ searchProducts?.length }}</span> 項搜尋結果
          </div>
          <div class="alert alert-primary" role="alert" v-else>
            搜尋<span class="fw-bold">{{ keywords }}</span
            >，找不到任何東西。請使用其他的關鍵字再試一次。
          </div>
          <div class="row d-flex justify-content-center justify-content-md-start gx-5">
            <div
              class="col-lg-4 col-md-6 mb-2 text-center"
              v-for="product in searchProducts"
              :key="product.id"
            >
              <div class="mx-5 mx-sm-4 my-2">
                <ProductCard :product="product"></ProductCard>
              </div>
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
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';
import collectionStore from '@/stores/collectionStore';
import CategorySidebar from '@/components/front/CategorySidebar.vue';
import swalMessage from '@/stores/swalMessage';
import ProductCard from '@/components/front/ProductCard.vue';

export default {
  data() {
    return {
      tempProduct: {},
    };
  },
  props: ['keywords'],
  components: { CategorySidebar, ProductCard },
  computed: {
    ...mapState(productsStore, ['searchProducts']),
    ...mapState(collectionStore, ['collectionList', 'collection']),
    ...mapState(loadingStore, ['isLoading', 'loadingItem']),
  },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    ...mapActions(collectionStore, ['updateCollection', 'getCollection']),
    ...mapActions(productsStore, ['getAllProducts', 'searchItem']),
    ...mapActions(cartStore, ['addToCart']),
  },
  mounted() {
    this.getAllProducts();
    this.getCollection();
    this.searchItem(this.keywords);
  },
};
</script>

<style></style>
