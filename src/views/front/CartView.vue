<template>
  <div class="container">
    <!-- 進度條 -->
    <div class="row d-flex justify-content-center mt-3">
      <div class="col-12 col-md-6">
        <div class="col">
          <div class="position-relative m-4">
            <div class="progress" style="height: 1px">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div
              class="position-absolute top-0
              start-0 text-white translate-middle btn btn-sm btn-primary rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              1
            </div>
            <div
              class="position-absolute top-0 start-50
              text-white translate-middle btn btn-sm btn-secondary rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              2
            </div>
            <div
              class="position-absolute top-0 start-100
              text-white translate-middle btn btn-sm btn-secondary rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              3
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-between text-primary fw-bold">
          <span class="ms-n1">確認購買</span>
          <span class="text-secondary">填寫資料</span>
          <span class="text-secondary me-n1">完成訂單</span>
        </div>
      </div>
    </div>
    <div class="mt-4 mb-5">
      <!-- 購物車列表 -->
      <table class="table align-middle">
        <thead class="table-primary">
          <tr>
            <th></th>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th class="text-center">單價</th>
            <th class="text-center">小計</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click.prevent="deleteCartItem(item)"
                  :disabled="loadingItem === item.id"
                >
                  <i class="fas fa-spinner fa-pulse"></i>
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
              <td>
                <router-link :to="`/product/${item.product.id}`">
                  <img
                    :src="item.product.imageUrl"
                    alt=""
                    class="object-fit-cover"
                    height="70"
                    width="70"
                  />
                </router-link>
              </td>
              <td>
                <!-- 商品名稱 -->
                <router-link
                  :to="`/product/${item.product.id}`"
                  class="text-decoration-none text-cusDarkBrown"
                >
                  {{ item.product.title }}
                </router-link>
                <!-- <div class="text-success">
                                        已套用優惠券
                                    </div> -->
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <!-- 商品數量/單位 -->
                  <div class="input-group mb-3">
                    <button
                      type="button"
                      class="input-group-text"
                      id="basic-addon1"
                      :disabled="item.qty === 1 || loadingItem === item.id"
                      @click.prevent="() => updateCartItem(item, item.qty - 1)"
                    >
                      <i class="bi bi-dash"></i>
                    </button>
                    <input
                      type="text"
                      class="form-control text-center"
                      :value="item.qty"
                      readonly
                    />
                    <button
                      type="button"
                      class="input-group-text"
                      id="basic-addon2"
                      :disabled="item.qty === 99 || loadingItem === item.id"
                      @click.prevent="() => updateCartItem(item, item.qty + 1)"
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td class="text-center">{{ item.product.price }}</td>
              <td class="text-end">
                <!-- <small class="text-success">折扣價：</small> -->
                {{ item.total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <button
                class="btn btn-outline-danger"
                type="button"
                @click.prevent="() => deleteCart()"
                :disabled="loadingItem === 'deleteCart'"
              >
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                  v-if="loadingItem === 'deleteCart'"
                ></span>
                清空購物車
              </button>
            </td>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ cart.total }}</td>
          </tr>
          <tr>
            <td colspan="5" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="row flex-column justify-content-end flex-sm-row gy-3 mb-3">
      <div class="col-2">
        <button type="button" class="btn btn-cusDarkBrown text-white w-100">
          <router-link class="text-decoration-none text-white" to="/products">
            返回購物
          </router-link>
        </button>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn btn-primary w-100 text-white"
        >
          <router-link class="text-decoration-none text-white" to="/order">
            確認送出
          </router-link>
        </button>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'"></VueLoading>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';

export default {
  data() {
    return {};
  },
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
