import { defineStore, mapActions } from 'pinia';
import axios from 'axios';
import swalMessage from '@/stores/swalMessage';

import loadingStore from './loadingStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
const loadingStatus = loadingStore();

export default defineStore('products', {
  state: () => ({
    products: [],
    page: {},
    productCategory: {
      披薩: ['蔬食首選', '海鮮至上', '無肉不歡', '甜食主義'],
      副食: ['炸物', '飲料'],
    },
    filterCategory: '全部商品',
  }),
  actions: {
    ...mapActions(swalMessage, ['swalShow']),
    // 取得產品列表
    getProducts() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`;
      loadingStatus.isLoading = true;
      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.page = res.data.pagination; // 取得頁數
          loadingStatus.isLoading = false;
        })
        .catch((err) => {
          this.swalShow(`${err.message}`, 'error');
        });
    },
    changeCategory(category) {
      this.filterCategory = category;
    },
  },
  getters: {
    filterProducts: ({ products, filterCategory }) => {
      const currentCategory = products.filter((product) => (filterCategory
      === '全部商品'
        ? products
        : product.productCategory === filterCategory));
      return currentCategory;
    },
  },
});
