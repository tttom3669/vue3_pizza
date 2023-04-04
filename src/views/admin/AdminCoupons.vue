<template>
  <div>
    <div class="text-end mt-4">
      <button
        class="btn btn-primary"
        type="button"
        @click="openModal('create')"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in coupons" :key="coupon.id">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.percent }}%</td>
          <td>{{ $filters.date(coupon.due_date) }}</td>
          <td>
            <span v-if="coupon.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', coupon)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', coupon)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <VueLoading v-model:active="isLoading" />
    <SharedPagination :pages="page" @change-page="getCoupons" />
    <CouponModal
      :coupon="tempCoupon"
      :is-new="isNew"
      ref="couponModal"
      @update-coupon="updateCoupon"
    />
    <DelItemModal
      ref="delCouponModal"
      :temp-item="tempCoupon"
      :del-modal-type="delModalType"
      @del-item="delCoupon"
    />
  </div>
</template>

<script>
// import AdminPagination from '@/components/admin/AdminPagination.vue';
import DelItemModal from '@/components/admin/DelItemModal.vue';
import CouponModal from '@/components/admin/CouponModal.vue';
import SharedPagination from '@/components/shared/SharedPagination.vue';

import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      coupons: {},
      tempCoupon: {},
      page: {},
      isLoading: false,
      isNew: true, // 確認是編輯或新增所使用
      delModalType: '優惠券',
    };
  },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    // 取得優惠券
    getCoupons(page = 1) {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupons/?page=${page}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.page = res.data.pagination; // 取得頁數
          this.isLoading = false;
        })
        .catch((err) => {
          this.swalShow(`${err.data.message}`, 'error');
          this.isLoading = false;
        });
    },
    // 開啟Modal
    openModal(status, coupon) {
      // 新增優惠券頁面
      if (status === 'create') {
        // 帶入初始化資料
        this.tempCoupon = {
          is_enabled: 0,
          due_date: new Date().getTime() / 1000,
        };
        this.isNew = true;
        this.$refs.couponModal.openModal();
      } else if (status === 'edit') {
        // 編輯優惠券頁面
        this.tempCoupon = { ...coupon }; // 取得欲編輯優惠券內容
        this.isNew = false;
        this.$refs.couponModal.openModal();
      } else if (status === 'delete') {
        // 刪除優惠券頁面
        this.tempCoupon = { ...coupon }; // 取得欲刪除優惠券內容
        this.$refs.delCouponModal.openModal();
      }
    },
    // 更新優惠券
    updateCoupon() {
      // 用 isNew 判斷 api 要怎麼運行
      // 新增優惠券
      let apiMethod = 'post';
      let apiUrl = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon`;

      // 修改優惠券
      if (!this.isNew) {
        apiMethod = 'put';
        apiUrl = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      }
      this.isLoading = true;
      this.$http[apiMethod](apiUrl, { data: this.tempCoupon })
        .then((res) => {
          this.getCoupons();
          this.$refs.couponModal.closeModal(); // 關閉產品頁面
          this.swalShow(`${res.data.message}`, 'success', 'toast');
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          this.isLoading = false;
        });
    },
    // 刪除優惠券
    delCoupon() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.$refs.delCouponModal.closeModal(); // 關閉刪除頁面
      this.isLoading = true;
      this.$http
        .delete(url)
        .then((res) => {
          this.getCoupons();
          this.swalShow(`${res.data.message}`, 'success', 'toast');
        })
        .catch((err) => {
          this.swalShow(`${err.data.message}`, 'error');
          this.isLoading = false;
        });
    },
  },

  components: { CouponModal, DelItemModal, SharedPagination },
  mounted() {
    this.getCoupons();
  },
};
</script>
