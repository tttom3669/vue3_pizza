<template>
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
      <tr v-for="order in orders" :key="order.id">
        <!--購買時間-->
        <td>{{ order.create_at }}</td>
        <!--Email-->
        <td>{{ order.user.email }}</td>
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
            />
            <label class="form-check-label" :for="`paidSwitch${order.id}`">
              {{ order.is_paid ? '已付款' : '未付款' }}
            </label>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openModal('edit', product)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openModal('delete', product)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      orders: {},
    };
  },
  methods: {
    getOrders(currentPage = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders/?page=${currentPage}`;
      this.$http.get(url).then((res) => {
        this.orders = res.data.orders;
      });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
