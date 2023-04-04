<template>
  <div class="card h-100 rounded-3 cardHover position-relative" style="margin-top: 120px">
    <RouterLink :to="`/product/${product.id}`">
      <img
        :src="product.imageUrl"
        class="card-img-top w-75 position-absolute top-0 start-50 translate-middle img-fluid"
        :alt="product.title"
      />
    </RouterLink>
    <div class="card-body" style="margin-top: 100px">
      <RouterLink
        :to="`/product/${product.id}`"
        @click.prevent="() => getProduct(product.id)"
        class="text-decoration-none text-cusDarkBrown text-nowrap"
      >
        <h5 class="card-title fw-bold">{{ product.title }}</h5>
      </RouterLink>
      <!-- 英文名 -->
      <p class="card-subtitle text-cusBrown mb-1" style="height:24px">{{product.enTitle}}</p>
      <div
        class="h5 card-text text-primary fw-bold mb-3"
        v-if="product.price === product.origin_price"
        style="height: 32px"
      >
        NT ${{ product.price }}
      </div>
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
      <div class="d-flex flex-row justify-content-center align-items-center">
        <div
          class="me-4"
          v-if="collectionList?.indexOf(product.id) === -1"
          @click="() => updateCollection(product)"
        >
          <i
            class="bi collection"
            :class="{
              'bi-heart': collectionList?.indexOf(product.id) === -1,
              'bi-suit-heart-fill':
                collection.hover == true && collection.itemID == product.id,
            }"
            @mouseover="
              () => (
                (collection.hover = true), (collection.itemID = product.id)
              )
            "
            @mouseout="
              () => ((collection.hover = false), (collection.itemID = ''))
            "
          ></i>
        </div>
        <div class="me-4" v-else @click="() => updateCollection(product)">
          <i class="bi bi-suit-heart-fill" style="color: red"></i>
        </div>
        <button
          type="button"
          class="btn btn-cusDarkBrown border-0 text-nowrap w-100"
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
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';
import collectionStore from '@/stores/collectionStore';
import productsStore from '@/stores/productsStore';
import { RouterLink } from 'vue-router';

export default {
  props: ['product'],
  components: { RouterLink },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(collectionStore, ['getCollection', 'updateCollection']),
    ...mapActions(productsStore, ['getProduct']),
  },
  computed: {
    ...mapState(collectionStore, ['collectionList', 'collection']),
    ...mapState(loadingStore, ['loadingItem']),
  },
  mounted() {
    this.getCollection();
  },
};
</script>
