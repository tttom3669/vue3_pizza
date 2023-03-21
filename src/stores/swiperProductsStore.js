import { defineStore } from 'pinia';
import axios from 'axios';
import { Autoplay, Navigation, Pagination } from 'swiper';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore('SwiperProductsStore', {
  state: () => ({
    modules: [Autoplay, Navigation, Pagination],
    swiperBreakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    products: [],
  }),
  actions: {
    getSwiperProducts(category = '全部商品') {
      this.products = [];
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`;
      if (category !== '全部商品') {
        axios.get(url).then((res) => {
          this.products = res.data.products.filter((product) => product.category === category);
        });
      } else {
        axios.get(url).then((res) => {
          this.products = res.data.products;
        });
      }
    },
  },
});
