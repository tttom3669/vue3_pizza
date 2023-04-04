<template>
  <div class="bg_texture3">
    <div class="container">
      <!-- 麵包屑 -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="text-decoration-none">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink
              to="/products"
              @click="() => changeCategory(`${tempProduct.productCategory}`)"
              class="text-decoration-none"
              >{{ tempProduct.productCategory }}</RouterLink
            >
          </li>
          <li class="breadcrumb-item" aria-current="page">
            {{ tempProduct.title }}
          </li>
        </ol>
      </nav>
      <!-- 產品 -->
      <div class="row mt-5">
        <div class="col-lg-4">
          <img
            :src="tempProduct.imageUrl"
            :alt="tempProduct.title"
            class="w-100 object-fit-cover img-fluid"
          />
        </div>
        <div class="col-lg-8">
          <div class="d-flex flex-row align-items-baseline">
            <h3 class="fw-bold">{{ tempProduct.title }}</h3>
            <h4 class="text-cusBrown ms-3">{{ tempProduct.enTitle }}</h4>
          </div>
          <!--商品類別-->
          <span
            class="badge bg-primary rounded-pill mb-3"
            style="font-size: 14px"
            >{{ tempProduct.category }}</span
          >
          <p class="fw-bold text-cusDarkBrown">{{ tempProduct.content }}</p>
          <p class="text-cusBrown">{{ tempProduct.description }}</p>
          <!-- 商品價格 -->
          <div class="h6 fw-bold">建議售價：</div>
          <div class="h5" v-if="tempProduct.price === tempProduct.origin_price">
            {{ tempProduct.price }} 元
          </div>
          <div class="d-flex flex-row align-items-baseline mb-2" v-else>
            <div class="h5 text-cusBrown fw-bold me-2">
              NT${{ tempProduct.price }}
            </div>
            <del class="h6 me-2 text-cusGray"
              >NT${{ tempProduct.origin_price }}</del
            >
          </div>

          <div class="w-100 w-md-50">
            <!-- 商品數量/單位 -->
            <div class="input-group mb-3">
              <button
                type="button"
                class="input-group-text"
                id="basic-addon1"
                :disabled="qty === 1"
                @click.prevent="() => (qty -= 1)"
              >
                <i class="bi bi-dash"></i>
              </button>
              <input
                type="text"
                class="form-control text-center"
                readonly
                :value="qty"
              />
              <button
                type="button"
                class="input-group-text"
                id="basic-addon2"
                :disabled="qty === 99"
                @click.prevent="() => (qty += 1)"
              >
                <i class="bi bi-plus"></i>
              </button>
            </div>
            <div class="row flex-row gy-3">
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-cusDarkBrown text-white w-100"
                  @click.prevent="() => addToCart_Check()"
                  :disabled="loadingItem === tempProduct.id"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                    v-if="loadingItem === tempProduct.id"
                  ></span>
                  加入購物車
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-primary  w-100 text-white"
                  @click.prevent="() => addToCart_Check()"
                  :disabled="loadingItem === tempProduct.id"
                >
                  <RouterLink
                    class="text-decoration-none text-white"
                    to="/cart"
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                      v-if="loadingItem === tempProduct.id"
                    ></span>
                    立刻購買
                  </RouterLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 相關商品 -->
      <div
        class="d-flex flex-column align-items-start justify-content-center mt-3"
      >
        <h3 class="fw-bold mt-1 border-3 border-start border-primary">
          <span class="text-cusDarkBrown ms-3">精選商品</span>
        </h3>
      </div>
      <SwiperTopFlavors :category="'全部商品'" />
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'" />
</template>
<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';
import swalMessage from '@/stores/swalMessage';
import SwiperTopFlavors from '@/components/front/SwiperTopFlavors.vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      qty: 1,
      productId: '',
    };
  },
  components: { SwiperTopFlavors, RouterLink },
  props: ['id'],
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(loadingStore, ['isLoading', 'loadingItem']),
    ...mapState(productsStore, ['tempProduct']),
  },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    ...mapActions(cartStore, ['addToCart', 'updateCartItem']),
    ...mapActions(productsStore, ['getProduct', 'changeCategory']),
    // 加入購物車 (檢查是否存在購物車中)
    addToCart_Check() {
      let tempProductId = [];
      tempProductId = this.cart.carts.filter((cart) => cart.product_id === this.tempProduct.id);
      // 判斷是否已經加入購物車
      if (tempProductId[0] === this.tempProduct.id) {
        // 有 => 更新購物車
        this.updateCartItem(tempProductId[0], this.qty);
      } else {
        // 沒有 => 加入購物車
        this.addToCart(this.tempProduct.id, this.qty);
      }
    },
  },
  mounted() {
    this.getProduct(this.id);
  },
};
</script>
