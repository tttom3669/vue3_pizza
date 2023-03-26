<template>
  <div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="order in orders" :key="order.id">
          <tr
            v-if="orders.length"
            :class="{ 'text-secondary': !order.is_paid }"
          >
            <!--購買時間-->
            <td>{{ $filters.date(order.create_at) }}</td>
            <!--Email-->
            <td>
              <span v-if="order.user">{{ order.user.email }}</span>
            </td>
            <!--購買款項-->
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in order.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <!--應付金額-->
            <td class="text-start">{{ order.total }}</td>
            <td>
              <!--是否付款-->
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  v-model="order.is_paid"
                  :id="`paidSwitch${order.id}`"
                  @change="updatePaid(order)"
                />
                <label class="form-check-label" :for="`paidSwitch${order.id}`">
                  <span> {{ order.is_paid ? '已付款' : '未付款' }}</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('view', order)"
                >
                  檢視
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete', order)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <VueLoading v-model:active="isLoading"></VueLoading>
    <AdminPagination :pages="page" @change-page="getOrders"></AdminPagination>
    <OrderModal
      :order="tempOrder"
      ref="orderModal"
      @update-paid="updatePaid"
    ></OrderModal>
    <DelItemModal
      ref="delOrderModal"
      :temp-item="tempOrder"
      :del-modal-type="delModalType"
      @del-item="delOrder"
    ></DelItemModal>
  </div>
</template>

<script>
import OrderModal from '@/components/admin/OrderModal.vue';
import AdminPagination from '@/components/admin/AdminPagination.vue';
import DelItemModal from '@/components/admin/DelItemModal.vue';

import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      orders: {},
      tempOrder: {},
      page: {},
      isLoading: false,
      delModalType: '訂單',
    };
  },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    // 取得訂單
    getOrders(currentPage = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders/?page=${currentPage}`;
      this.$http
        .get(url)
        .then((res) => {
          this.orders = res.data.orders;
          this.page = res.data.pagination; // 取得頁數
          this.isLoading = false;
        })
        .catch((err) => {
          this.swalShow(`${err.message}`, 'error');
          this.isLoading = false;
        });
    },
    // 開啟Modal
    openModal(status, order) {
      // 檢視訂單頁面
      if (status === 'view') {
        this.tempOrder = { ...order }; // 取得欲編輯訂單內容
        this.$refs.orderModal.openModal();
      } else if (status === 'delete') {
        // 刪除訂單頁面
        this.tempOrder = { ...order }; // 取得欲刪除訂單內容
        this.$refs.delOrderModal.openModal();
      }
    },
    // 更換付款狀態
    updatePaid(order) {
      this.isLoading = true;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${order.id}`;
      const paid = {
        is_paid: order.is_paid,
      };

      this.$http
        .put(url, { data: paid })
        .then((res) => {
          this.$refs.orderModal.closeModal();
          this.getOrders();
          this.swalShow(`${res.data.message}`, 'success', 'toast');
        })
        .catch((err) => {
          this.isLoading = false;
          this.swalShow(`${err.message}`, 'error');
        });
    },
    // 刪除訂單
    delOrder() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$refs.delOrderModal.closeModal(); // 關閉刪除頁面
      this.isLoading = true;
      this.$http
        .delete(url)
        .then((res) => {
          this.getOrders();
          this.swalShow(`${res.data.message}`, 'success', 'toast');
        })
        .catch((err) => {
          this.swalShow(`${err.data.message}`, 'error');
          this.isLoading = false;
        });
    },
  },
  components: { OrderModal, AdminPagination, DelItemModal },
  mounted() {
    this.isLoading = true;
    this.getOrders();
  },
};
</script>
