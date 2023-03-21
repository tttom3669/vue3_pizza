import { defineStore, mapActions, mapState } from 'pinia';
import swalMessage from '@/stores/swalMessage';
import productsStore from '@/stores/productsStore';

export default defineStore('collectionStore', {
  state: () => ({
    collectionList: [],
    collection: {
      itemID: '',
      hover: false,
    },
    tempProducts: [],
  }),
  computed: {
    ...mapState(productsStore, ['products']),
  },
  actions: {
    ...mapActions(swalMessage, ['swalShow']),
    ...mapActions(productsStore, ['getProducts']),
    // 取出收藏清單
    getCollection() {
      if (localStorage.getItem('collectionList')) {
        // 取出資料：透過 JSON.parse 取出收藏清單 (字串型態) 去做轉型才能把資料轉成陣列來使用
        this.collectionList = JSON.parse(localStorage.getItem('collectionList'));
      } else {
        this.collectionList = [];
      }
    },
    addToCollection(product) {
      const itemIndex = this.collectionList.indexOf(product.id);
      this.getCollection();
      if (itemIndex === -1) {
        // 未加入收藏清單，則加入清單
        this.collectionList.push(product.id);
        this.swalShow('已加入收藏', 'success', 'toast');
      } else {
        // 已加入收藏清單，則從清單中移除
        this.collectionList.splice(itemIndex, 1);
        this.swalShow('已取消收藏', 'success', 'toast');
      }
      // 存入資料 (JSON.stringify 將陣列資料轉成字串儲存)
      localStorage.setItem('collectionList', JSON.stringify(this.collectionList));
      this.getCollection();
    },
  },
  getters: {
    filterProducts: ({ products, collectionList }) => {
      const collectProducts = products.filter((product) => (collectionList.indexOf(product.id)
      !== -1));
      console.log(products, collectionList, collectProducts);
      return collectProducts;
    },
  },
});
