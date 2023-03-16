import { defineStore, mapActions } from 'pinia';
import axios from 'axios';
import swalMessage from '@/stores/swalMessage';
import loadingStore from './loadingStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
const loadingStatus = loadingStore();

export default defineStore('cart', {
  state: () => ({
    cart: {},
  }),
  actions: {
    ...mapActions(swalMessage, ['swalShow']),
    // 取得購物車
    getCart() {
      loadingStatus.isLoading = true;
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data;
          loadingStatus.isLoading = false;
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
        });
    },
    // 加入購物車
    addToCart(productId, qty = 1) {
      const data = {
        product_id: productId,
        qty,
      };
      loadingStatus.isLoading = true;
      axios
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.swalShow(`${res.data.message}`, 'success', 'toast');
          this.getCart();
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
        });
    },
  },
});
