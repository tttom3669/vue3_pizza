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

          // 購物車數量超出數量 (20)
          this.cart.carts.forEach((cart) => {
            if (cart.qty > 20) {
              this.fixCartItem(cart);
            }
          });
          loadingStatus.isLoading = false;
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          loadingStatus.isLoading = false;
        });
    },
    // 加入購物車
    addToCart(productId, qty = 1) {
      loadingStatus.loadingItem = productId;
      const data = {
        product_id: productId,
        qty,
      };
      axios
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.swalShow(`${res.data.message}`, 'success', 'toast');
          loadingStatus.loadingItem = '';
          this.getCart();
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          loadingStatus.loadingItem = '';
        });
    },
    // 更新購物車
    updateCartItem(item, qty) {
      const data = {
        product_id: item.product.id, // 產品的 id
        qty,
      };
      loadingStatus.loadingItem = item.id; // 購物車的 id
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.swalShow(`${res.data.message}`, 'success', 'toast');
          this.getCart();
          loadingStatus.loadingItem = '';
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          loadingStatus.loadingItem = '';
        });
    },
    // 修正購物車
    fixCartItem(item) {
      const data = {
        product_id: item.product_id, // 產品的 id
        qty: 20,
      };
      loadingStatus.loadingItem = item.id; // 購物車的 id
      axios
        .put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(() => {
          this.swalShow('商品超出庫存，已自動修正數量', 'warning', 'toast');
          this.getCart();
          loadingStatus.loadingItem = '';
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          loadingStatus.loadingItem = '';
        });
    },
    // 刪除購物車單一品項
    deleteCartItem(item) {
      loadingStatus.loadingItem = item.id;
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          this.swalShow(`購物車${res.data.message}`, 'success', 'toast');
          this.getCart();
          loadingStatus.loadingItem = '';
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          loadingStatus.loadingItem = '';
        });
    },
    // 清空購物車
    deleteCart() {
      loadingStatus.loadingItem = 'deleteCart';
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/carts`)
        .then(() => {
          this.swalShow('已清空購物車', 'success', 'toast');
          this.getCart();
          loadingStatus.loadingItem = '';
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          loadingStatus.loadingItem = '';
        });
    },
  },
});
