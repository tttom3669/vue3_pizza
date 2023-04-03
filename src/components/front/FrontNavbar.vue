<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/img/logo1.png" alt="logo" />
      </router-link>
      <div
        class="d-none d-lg-block justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <!-- <router-link class="nav-item nav-link me-4 active" to="/"
            >首頁</router-link
          > -->
          <router-link
            class="nav-item nav-link me-4 navBarLink fw-bold"
            to="/articles"
            >最新消息</router-link
          >
          <router-link
            class="nav-item nav-link me-4 navBarLink fw-bold"
            to="/products"
            >美味菜單</router-link
          >
          <!-- 收藏 -->
          <div class="dropdown me-2">
            <div
              class="nav-item nav-link navBarLink position-relative p-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-heart"></i>
              <span
                v-if="filterProducts?.length > 0"
                class="badge rounded-pill bg-danger
                position-absolute top-0 start-100 translate-middle"
                >{{ filterProducts?.length }}</span
              >
            </div>
            <div
              class="dropdown-menu dropdown-menu-end overflow-auto m-0"
              style="min-width: 220px"
              :class="{ collectionHeight: filterProducts?.length >= 4 }"
            >
              <h6 class="dropdown-header">收藏清單</h6>
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <table class="table" v-if="filterProducts">
                  <tr
                    v-for="product in filterProducts"
                    class="border"
                    :key="product.id"
                    style="width: 300px"
                  >
                    <td>
                      <img
                        :src="product.imageUrl"
                        alt=""
                        class="object-fit-cover"
                        height="70"
                        width="70"
                      />
                    </td>
                    <td class="p-2">
                      <div class="d-flex flex-column">
                        <div class="text-nowrap mb-1">
                          <router-link
                            :to="`/product/${product.id}`"
                            class="text-decoration-none text-cusDarkBrown"
                            @click.prevent="() => getProduct(product.id)"
                          >
                            {{ product.title }}
                          </router-link>
                        </div>
                        <div class="text-nowrap mb-1">
                          NT$ {{ product.price }} / {{ product.unit }}
                        </div>
                      </div>
                    </td>
                    <td class="p-2">
                      <div
                        type="button"
                        class="navBarLink"
                        @click.prevent="() => addToCart(product.id)"
                      >
                        <i class="bi bi-bag-plus"></i>
                      </div>
                    </td>
                    <td class="p-2">
                      <div
                        type="button"
                        class="navBarLink"
                        @click.prevent="() => updateCollection(product)"
                      >
                        <i class="bi bi-trash3"></i>
                      </div>
                    </td>
                  </tr>
                </table>
                <div class="d-flex justify-content-center mb-3 w-100">
                  <div class="row w-100">
                    <template v-if="filterProducts?.length === 0">
                      <div class="col">
                        <h6
                          class="fw-bold text-cusDarkBrown text-nowrap text-center"
                        >
                          還沒有喜歡的商品嗎 ?
                        </h6>
                      </div>
                      <div class="col mt-2">
                        <router-link
                          type="button"
                          class="btn btn-primary text-white w-100"
                          to="/products"
                        >
                          購物去
                        </router-link>
                      </div>
                    </template>
                    <template v-else>
                      <div class="col mt-2">
                        <router-link
                          type="button"
                          class="btn btn-primary text-white w-100"
                          to="/collection"
                        >
                          收藏清單
                        </router-link>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 購物車 -->
          <div class="dropdown">
            <div
              class="nav-item nav-link navBarLink position-relative p-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-bag"></i>
              <span
                v-if="cart.carts?.length > 0"
                class="badge rounded-pill bg-danger
                position-absolute top-0 start-100 translate-middle"
                >{{ cart.carts?.length }}</span
              >
            </div>
            <div
              class="dropdown-menu dropdown-menu-end overflow-auto m-0"
              :class="{ cartHeight: cart.carts?.length >= 4 }"
              style="min-width: 200px"
            >
              <h6 class="dropdown-header">購物車</h6>
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
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
                          <router-link
                            :to="`/product/${item.product.id}`"
                            class="text-decoration-none text-cusDarkBrown"
                            @click.prevent="() => getProduct(item.product.id)"
                          >
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
                          <template v-if="item.qty <= 20">
                            <option :value="i" v-for="i in 20" :key="i + 'num'">
                              {{ i }}
                            </option>
                          </template>
                          <template v-else>
                            <option
                              :value="i"
                              v-for="i in item.qty + 1"
                              :key="i + 'num'"
                            >
                              {{ i }}
                            </option>
                          </template>
                        </select>
                      </div>
                    </td>
                    <td class="text-nowrap p-2">NT$ {{ item.total }}</td>
                    <td class="p-2">
                      <div
                        type="button"
                        class="navBarLink"
                        @click.prevent="() => deleteCartItem(item)"
                      >
                        <i class="bi bi-trash3"></i>
                      </div>
                    </td>
                  </tr>
                </table>
                <div class="d-flex justify-content-center mb-3 w-100">
                  <div class="row w-100">
                    <template v-if="cart.carts?.length == 0">
                      <div class="col">
                        <h6
                          class="fw-bold text-darkBrown text-center text-nowrap"
                        >
                          您的購物車目前是空的喔
                        </h6>
                      </div>
                    </template>
                    <template v-else>
                      <div class="col-6">
                        <h5 class="h5 text-cusDarkBrown fw-bold text-nowrap">
                          小計
                        </h5>
                      </div>
                      <div class="col-6">
                        <h5
                          class="h5 text-cusDarkBrown fw-bold text-nowrap text-end"
                        >
                          NT$ {{ cart.total }}
                        </h5>
                      </div>
                    </template>
                    <div class="col mt-2">
                      <router-link
                        type="button"
                        class="btn btn-primary text-white w-100"
                        to="/cart"
                        v-if="cart.carts?.length !== 0"
                      >
                        結帳去
                      </router-link>
                      <router-link
                        type="button"
                        class="btn btn-primary text-white w-100"
                        to="/products"
                        v-else
                      >
                        購物去
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex flex-row justify-content-between d-block d-lg-none align-items-center"
      >
        <!-- 收藏 (手機版) -->
        <div class="position-relative navBarLink pe-3 me-4">
          <i class="bi bi-heart"></i>
          <router-link class="stretched-link" to="/collection"> </router-link>
          <span
            v-if="filterProducts?.length > 0"
            class="badge rounded-pill bg-danger position-absolute top-50 start-100 translate-middle"
            >{{ filterProducts?.length }}</span
          >
        </div>
        <!-- 購物車 (手機版) -->
        <div class="position-relative navBarLink pe-3 me-4">
          <i class="bi bi-bag"></i>
          <router-link class="stretched-link" to="/cart"> </router-link>
          <span
            v-if="cart.carts?.length > 0"
            class="badge rounded-pill bg-danger position-absolute top-50 start-100 translate-middle"
            >{{ cart.carts?.length }}</span
          >
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
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
.collectionHeight {
  height: 400px;
}
.navBarLink:hover {
  color: var(--bs-primary);
}
.navBarLink.active {
  border-bottom: 2px solid var(--bs-primary);
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
    ...mapActions(cartStore, [
      'getCart',
      'updateCartItem',
      'deleteCartItem',
      'addToCart',
    ]),
    ...mapActions(productsStore, ['getProduct', 'changeCategory']),
    ...mapActions(collectionStore, ['getCollection', 'updateCollection']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(collectionStore, ['filterProducts']),
  },
  mounted() {
    this.getCart();
    this.getCollection();
  },
};
</script>
