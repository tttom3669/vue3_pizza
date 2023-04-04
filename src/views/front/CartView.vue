<template>
  <div class="bg_texture3" style="min-height: 600px">
    <div class="container">
      <!-- 進度條 -->
      <ProgressBar :stage="1" class="mt-3"/>
      <!-- 購物車標題 -->
      <FrontHeading :title="'購物車'" class="mt-3"/>
      <!--購物車未有商品-->
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        v-if="cart.carts?.length === 0"
        style="margin-top: 100px"
      >
        <div class="text-center my-5 fw-bold text-cusBrown fs-4">
          <i class="bi bi-cart-x"></i>
          您的購物車目前是空的喔
        </div>
        <div class="w-100 text-center">
          <RouterLink class="text-decoration-none text-white" to="/products">
            <button
              type="button"
              class="btn btn-cusDarkBrown text-white w-md-25 w-50"
            >
              返回購物
            </button>
          </RouterLink>
        </div>
      </div>
      <div class="mt-4 mb-5" v-else>
        <!-- 購物車列表 -->
        <div
          class="row fw-bold text-cusDarkBrown text-center border-bottom py-2"
          style="background-color: #ffe3ce"
        >
          <div class="col-2"></div>
          <div class="col-md-4">商品明細</div>
          <div class="col d-none d-md-block">數量/單位</div>
          <div class="col d-none d-md-block">小計</div>
        </div>
        <div
          class="row justify-content-center
          bg-white border-bottom align-items-center text-cusDarkBrown text-center py-2"
          v-for="item in cart.carts"
          :key="item.id"
        >
          <!-- 刪除按鈕 -->
          <div class="col-2 col-md-1 order-3 order-md-1">
            <div
              type="button"
              class="text-center clickBtn"
              @click.prevent="deleteCartItem(item)"
              :disabled="loadingItem === item.id"
            >
              <i class="fas fa-spinner fa-pulse"></i>
              <i class="bi bi-trash3"></i>
            </div>
          </div>
          <!-- 產品圖片 -->
          <div class="col-2 col-md-1 order-1 order-md-2">
            <RouterLink :to="`/product/${item.product.id}`">
              <img
                :src="item.product.imageUrl"
                :alt="item.product.title"
                class="object-fit-cover"
                height="70"
                width="70"
              />
            </RouterLink>
          </div>
          <div class="col-8 col-md-4 order-2 order-md-3">
            <!-- 商品名稱 -->
            <div class="d-flex flex-column text-nowrap">
              <RouterLink
                :to="`/product/${item.product.id}`"
                class="text-decoration-none text-cusDarkBrown text"
              >
                {{ item.product.title }}
              </RouterLink>
              <div>NT$ {{ item.product.price }} / {{ item.product.unit }}</div>
            </div>
          </div>
          <div class="col order-4 my-3">
            <div class="input-group input-group-sm">
              <!-- 商品數量/單位 -->
              <div class="d-flex justify-content-center flex-nowrap">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  id="basic-addon1"
                  :disabled="item.qty === 1 || loadingItem === item.id"
                  @click.prevent="() => updateCartItem(item, item.qty - 1)"
                >
                  <i class="bi bi-dash"></i>
                </button>
                <input
                  type="number"
                  class="form-control text-center hide-arrows"
                  :value="item.qty"
                  readonly
                />
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  id="basic-addon2"
                  :disabled="item.qty >= 20 || loadingItem === item.id"
                  @click.prevent="() => updateCartItem(item, item.qty + 1)"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col text-end order-5">NT$ {{ item.total }}</div>
        </div>
        <div class="row bg-white py-2">
          <div class="col">
            <button
              class="btn btn-outline-danger text-nowrap"
              type="button"
              @click.prevent="() => deleteCart()"
              :disabled="
                loadingItem === 'deleteCart' || cart?.carts?.length === 0
              "
            >
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
                v-if="loadingItem === 'deleteCart'"
              ></span>
              清空購物車
            </button>
          </div>
          <div class="col-md-2 col text-end text-cusDarkBrown fw-bold fs-5">
            <div class="d-flex justify-content-between">
              <div>總計</div>
              <div>NT$ {{ cart.total }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 結帳 -->
      <div
        class="row justify-content-end flex-row gy-3 mb-3"
        v-if="cart?.carts?.length"
      >
        <div class="col-md-2 col-6">
          <RouterLink class="text-decoration-none text-white" to="/products">
            <button type="button" class="btn btn-cusDarkBrown text-white w-100">
              返回購物
            </button>
          </RouterLink>
        </div>
        <div class="col-md-2 col-6">
          <RouterLink class="text-decoration-none text-white" to="/order">
            <button type="button" class="btn btn btn-primary w-100 text-white">
              確認送出
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'" />
</template>

<style>
.clickBtn {
  color: var(--bs-cusGray);
}
.clickBtn:hover {
  color: var(--bs-primary);
}
</style>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';
import ProgressBar from '@/components/front/ProgressBar.vue';
import FrontHeading from '@/components/front/FrontHeading.vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {};
  },
  components: { ProgressBar, FrontHeading, RouterLink },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(loadingStore, ['isLoading', 'loadingItem']),
  },
  methods: {
    ...mapActions(cartStore, [
      'getCart',
      'updateCartItem',
      'deleteCartItem',
      'deleteCart',
    ]),
  },
  mounted() {
    this.getCart();
  },
};
</script>
