import { defineStore, mapActions } from 'pinia';
import axios from 'axios';
import swalMessage from '@/stores/swalMessage';
import loadingStore from './loadingStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
const loadingStatus = loadingStore();

export default defineStore('products', {
  state: () => ({
    products: [],
    tempProduct: {},
    page: {},
    productCategory: {
      披薩: ['蔬食首選', '海鮮至上', '無肉不歡', '甜食主義'],
      副食: ['炸物', '飲料'],
    },
    filterCategory: '全部商品',
    keyWords: '',
  }),
  actions: {
    ...mapActions(swalMessage, ['swalShow']),
    // 取得產品列表
    getProducts(page = 1, category = '全部商品') {
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`;
      if (category === '全部商品') {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products/?page=${page}`;
      }
      loadingStatus.isLoading = true;
      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.page = res.data.pagination; // 取得頁數
          this.filterCategory = category;
          loadingStatus.isLoading = false;
        })
        .catch((err) => {
          this.swalShow(`${err.message}`, 'error');
          loadingStatus.isLoading = false;
        });
    },
    // 取得單一產品
    getProduct(id) {
      loadingStatus.isLoading = true;
      this.tempProduct = {};
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.tempProduct = res.data.product;
          loadingStatus.isLoading = false;
        }).catch((err) => {
          this.swalShow(`${err.message}`, 'error');
          loadingStatus.isLoading = false;
        });
    },
    changeCategory(category) {
      this.getProducts(1, category);
    },
    searchItem(keyWord) {
      this.keyWords = keyWord;
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
    searchProducts: ({ products, keyWords }) => {
      const currentProducts = products
        .filter((product) => ((product.productCategory.includes(keyWords)
          || product.title.includes(keyWords) || product.category.includes(keyWords))) && keyWords !== '');
      return currentProducts;
    },
  },
});
