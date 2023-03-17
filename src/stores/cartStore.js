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
    // 更新購物車
    updateCartItem(item, qty) {
      const data = {
        product_id: item.product.id, // 產品的 id
        qty,
      };
      // this.loadingStatus.loadingItem = item.id; // 購物車的 id
      // console.log(item, this.loadingStatus);
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.swalShow(`${res.data.message}`, 'success', 'toast');
          this.getCart();
          // this.loadingStatus.loadingItem = '';
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
        });
    },
    // 刪除購物車單一品項
    deleteCartItem(item) {
      // this.loadingStatus = {
      //   loadingItem: item.id,
      //   loadingType: 'deleteItem',
      // };
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          this.swalShow(`購物車${res.data.message}`, 'success', 'toast');
          // alert(res.data.message);
          this.getCart();
          // this.loadingStatus.loadingItem = '';
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          // alert(err.response.data.message);
        });
    },
    // 清空購物車
    deleteCart() {
      // this.loadingStatus.loadingType = 'deleteCarts';
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
        .then(() => {
          this.swalShow('已清空購物車', 'success', 'toast');
          this.getCart();
          // this.loadingStatus.loadingType = '';
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          // alert(err.response.data.message);
        });
    },
  },
});
