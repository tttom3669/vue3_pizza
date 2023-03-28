<template>
  <div class="bg_texture2" style="min-height: 600px">
    <div class="container">
      <div class="row d-flex flex-row my-5">
        <div class="col-md-2 d-lg-block d-none">
          <!-- 商品分類 -->
          <CategorySidebar></CategorySidebar>
        </div>
        <div class="col-md-10">
          <div class="row d-flex justify-content-center">
            <div
              class="col-md-4 mb-2 text-center"
              v-for="product in filterProducts"
              :key="product.id"
            >
              <div
                class="card h-100 py-2 shadow-sm overflow-hidden boxTranslate"
              >
                <router-link :to="`/product/${product.id}`">
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
                  >
                    <h5 class="card-title fw-bold">{{ product.title }}</h5>
                  </router-link>
                  <!-- <p class="card-subtitle text-cusGray mb-1">Margherita Pizza</p> 英文名-->
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <SharedPagination :pages="page" @change-page="getProducts"
  v-if="filterCategory==='全部商品'"></SharedPagination>
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
import SharedPagination from '@/components/shared/SharedPagination.vue';

export default {
  data() {
    return {
      tempProduct: {},
    };
  },
  components: { CategorySidebar, SharedPagination },
  computed: {
    ...mapState(productsStore, ['filterProducts', 'page', 'filterCategory']),
    ...mapState(collectionStore, ['collectionList', 'collection']),
    ...mapState(loadingStore, ['isLoading', 'loadingItem']),
  },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    ...mapActions(collectionStore, ['updateCollection', 'getCollection']),
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
  },
  mounted() {
    this.getProducts();
    this.getCollection();
  },
};
</script>
