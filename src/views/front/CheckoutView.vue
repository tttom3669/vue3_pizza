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
              class="position-absolute top-0 start-0
              text-white translate-middle btn btn-sm btn-primary rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              1
            </div>
            <div
              class="position-absolute top-0 start-50
              text-white translate-middle btn btn-sm btn-primary rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              2
            </div>
            <div
              class="position-absolute top-0 start-100
              text-white translate-middle btn btn-sm btn-primary rounded-pill"
              style="width: 2rem; height: 2rem"
            >
              3
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-between text-primary fw-bold">
          <span class="ms-n1">確認購買</span>
          <span>填寫資料</span>
          <span class="me-n1">完成訂單</span>
        </div>
      </div>
    </div>
    <div class="row mt-4  d-flex flex-column flex-lg-row">
      <div class="col-lg-5">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">訂單明細</h5>
            <table class="table align-middle">
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
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
                    <div class="text-nowrap">
                      {{ item.product.title }}
                    </div>
                  </td>
                  <!-- 商品數量 -->
                  <td class="text-nowrap">x {{ item.qty }}</td>
                  <td class="text-nowrap text-end">
                    NT$ {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row row-cols-2 d-flex justify-content-between">
              <div class="col py-2 h5 text-cusDarkBrown fw-bold text-start">
                總金額
              </div>
              <div class="col py-2 h5 text-cusDarkBrown fw-bold text-end">
                NT$ {{ order.total }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="card mt-3 mt-md-0">
          <div class="card-body">
            <h5 class="card-title">訂單資訊</h5>
            <table class="table" v-if="order">
              <tbody>
                <tr>
                  <td>訂單編號</td>
                  <td>{{ order.id }}</td>
                </tr>
                <tr>
                  <td>下單時間</td>
                  <td>{{ $filters.date(order.create_at) }}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <td>收件人姓名</td>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <td>收件人電話</td>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <td>收件人地址</td>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <td>付款狀態</td>
                  <td
                    class="fw-bold"
                    :class="{
                      'text-success': order.is_paid,
                      'text-danger': !order.is_paid,
                    }"
                  >
                    {{ order.is_paid ? '付款完成' : '尚未付款' }}
                  </td>
                </tr>
                <tr>
                  <td>備註</td>
                  <td>{{ order.message }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="d-flex justify-content-end mt-3 mb-3">
          <button type="button" class="btn btn-primary text-white"
          @click="()=>payOrder()" v-if="!order.is_paid">
            來去付款
          </button>
          <button type="button" class="btn btn-primary text-white"
          v-else>
            <router-link to="/" class="text-decoration-none text-white">
                返回首頁
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'"></VueLoading>
</template>

<script>
import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';
import cartStore from '@/stores/cartStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      order: {
        user: {},
        products: [],
      },
      isLoading: false,
    };
  },
  props: ['orderId'],
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    ...mapActions(cartStore, ['getCart']),
    getOrder() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        this.order = res.data.order;
        this.getCart();
      }).catch((err) => {
        this.isLoading = false;
        this.swalShow(`${err.response.data.message}`, 'error');
      });
    },
    payOrder() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(url).then((res) => {
        this.getOrder();
        this.getCart();
        this.swalShow(`${res.data.message}`, 'success', 'toast');
      }).catch((err) => {
        this.swalShow(`${err.response.data.message}`, 'error');
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getOrder();
    this.swalShow('已建立訂單', 'success', 'toast');
  },
};
</script>
