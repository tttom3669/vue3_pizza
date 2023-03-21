<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/img/logo1.png" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="d-none d-lg-block justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link class="nav-item nav-link me-4 active" to="/"
            >首頁</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/"
            >最新消息</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/products"
            >美味菜單</router-link
          >
          <!-- 收藏 -->
          <router-link class="nav-item nav-link me-4" to="/login">
            <i class="bi bi-heart"></i
          ></router-link>
          <!-- 購物車 -->
          <div class="dropdown">
            <div
              class="nav-item nav-link position-relative"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-bag"></i>
              <span
                class="badge rounded-pill bg-danger
                position-absolute top-0 start-100 translate-middle"
                >{{ cart.carts?.length }}</span
              >
            </div>
            <div
              class="dropdown-menu dropdown-menu-end overflow-auto m-0"
              :class="{ cartHeight: cart.carts?.length >= 4 }"
            >
              <h6 class="dropdown-header">購物車</h6>
              <div class="d-flex flex-column justify-content-center align-items-center">
                <table class="table" v-if="cart.carts">
                  <tr
                    v-for="item in cart.carts"
                    class="border"
                    :key="item.id"
                    style="width: 300px"
                  >
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        alt=""
                        class="object-fit-cover"
                        height="70"
                        width="70"
                      />
                    </td>
                    <td class="p-2">
                      <div class="d-flex flex-column">
                        <div class="text-nowrap mb-1">
                          <router-link :to="`/product/${item.product.id}`"
                          class="text-decoration-none text-cusDarkBrown"
                          @click.prevent="()=>getProduct(item.product.id)">
                          {{ item.product.title }}
                          </router-link>
                        </div>
                        <div class="text-nowrap mb-1">
                          NT$ {{ item.product.price }} / {{ item.product.unit }}
                        </div>
                        <!-- 商品數量 -->
                        <select
                          class="form-select form-select-sm"
                          v-model="item.qty"
                          @change="() => updateCartItem(item, item.qty)"
                        >
                          <option :value="i" v-for="i in 99" :key="i + 'num'">
                            {{ i }}
                          </option>
                        </select>
                      </div>
                    </td>
                    <td class="text-nowrap p-2">NT$ {{ item.total }}</td>
                    <td class="p-2">
                      <div
                        type="button"
                        @click.prevent="() => deleteCartItem(item)"
                      >
                        <i class="bi bi-trash3"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="py-2 h5 text-cusDarkBrown fw-bold text-center">小計</td>
                    <td colspan="2" class="py-2 h5 text-cusDarkBrown
                    fw-bold text-nowrap">NT$ {{ cart.total }}</td>
                  </tr>
                </table>
                <router-link type="button" class="btn btn-primary text-white w-75" to="/cart">
                    結帳去
                </router-link>
                <template v-if="cart.carts?.length == 0">
                  <p class="h6 text-nowrap p-3">您的購物車目前是空的喔</p>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- 導覽列 (行動版) -->
  <NavOffcanvas></NavOffcanvas>
</template>

<style>
.cartHeight {
  height: 400px;
}
</style>

<script>
import NavOffcanvas from '@/components/front/NavOffcanvas.vue';
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import productsStore from '@/stores/productsStore';
import collectionStore from '@/stores/collectionStore';

export default {
  components: { NavOffcanvas },
  methods: {
    ...mapActions(cartStore, ['getCart', 'updateCartItem', 'deleteCartItem']),
    ...mapActions(productsStore, ['getProduct', 'getProducts']),
    ...mapActions(collectionStore, ['getCollection']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    // ...mapState(collectionStore, ['filterProducts']),
  },
  mounted() {
    this.getCart();
    // this.getProducts();
    // this.getCollection();
  },
};
</script>
