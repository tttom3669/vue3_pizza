<template>
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <!-- 刪除商品 / 優惠券  -->
          <template
            v-if="delModalType === 'products' || delModalType === 'coupons'"
          >
            <strong class="text-danger">{{ tempItem.title }}</strong>
            {{
              delModalType === 'products' ? '商品' : '優惠券'
            }}(刪除後將無法恢復)。
          </template>
          <template v-else-if="delModalType === 'orders'">
            <!-- 刪除訂單 -->
            <strong class="text-danger">{{ tempItem.id }}</strong>
            訂單(刪除後將無法恢復)。
          </template>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('delItem')"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['tempItem', 'delModalType'],
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.delProductModal);
  },
};
</script>
