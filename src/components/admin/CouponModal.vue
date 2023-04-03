<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
    ref="couponModal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="couponModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <VForm v-slot="{ errors }" @submit="() => $emit('update-coupon')">
          <div class="modal-body">
            <div class="mb-3">
              <label for="title">標題</label>
              <VField
                type="text"
                name="標題"
                class="form-control"
                id="title"
                v-model="tempCoupon.title"
                placeholder="請輸入標題"
                :class="{ 'is-invalid': errors['標題'] }"
                rules="required"
              />
              <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <VField
                type="text"
                class="form-control"
                id="coupon_code"
                name="優惠碼"
                v-model="tempCoupon.code"
                placeholder="請輸入優惠碼"
                :class="{ 'is-invalid': errors['優惠碼'] }"
                rules="required"
              />
              <ErrorMessage
                name="優惠碼"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="due_date">到期日</label>
              <VField
                type="date"
                class="form-control"
                id="due_date"
                name="到期日"
                v-model="due_date"
                :class="{ 'is-invalid': errors['到期日'] }"
                :rules="dateConfirm"
              />
              <ErrorMessage
                name="到期日"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="price">折扣百分比</label>
              <VField
                type="number"
                class="form-control"
                id="price"
                name="折扣百分比"
                min="0"
                max="99"
                v-model.number="tempCoupon.percent"
                placeholder="請輸入折扣百分比"
                :class="{ 'is-invalid': errors['折扣百分比'] }"
                rules="required|min_value:0|max_value:99"
              />
              <ErrorMessage
                name="折扣百分比"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="submit" class="btn btn-primary">
              {{ isNew ? '新增優惠卷' : '更新優惠券' }}
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    };
  },
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString()
        .split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    dateConfirm(date) {
      const curDate = new Date();
      const preDate = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
      const beginDate = new Date(date);
      if (preDate < beginDate) {
        return true;
      }
      return '到期日已過期';
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.couponModal);
  },
};
</script>
