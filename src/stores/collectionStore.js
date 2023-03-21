import { defineStore, mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore('collectionStore', {
  state: () => ({
    collectionList: [],
    collection: {
      itemID: '',
      hover: false,
    },
    filterProducts: [],
  }),
  actions: {
    ...mapActions(swalMessage, ['swalShow']),
    // 取得產品列表
    getFilterProducts() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`;
      axios
        .get(url)
        .then((res) => {
          this.filterProducts = res.data.products
            .filter((product) => (this.collectionList.indexOf(product.id) !== -1));
        })
        .catch((err) => {
          this.swalShow(`${err.message}`, 'error');
        });
    },
    // 取出收藏清單
    getCollection() {
      if (localStorage.getItem('collectionList')) {
        // 取出資料：透過 JSON.parse 取出收藏清單 (字串型態) 去做轉型才能把資料轉成陣列來使用
        this.collectionList = JSON.parse(localStorage.getItem('collectionList'));
        this.getFilterProducts();
      } else {
        this.collectionList = [];
      }
    },
    // 更新收藏清單
    updateCollection(product) {
      const itemIndex = this.collectionList.indexOf(product.id);
      this.getCollection();
      if (itemIndex === -1) {
        // 未加入收藏清單，則加入清單
        this.addToCollection(product.id);
      } else {
        // 已加入收藏清單，則從清單中移除
        this.deleteCollectionItem(itemIndex);
      }
      // 存入資料 (JSON.stringify 將陣列資料轉成字串儲存)
      localStorage.setItem('collectionList', JSON.stringify(this.collectionList));
      this.getCollection();
    },
    // 加入收藏清單
    addToCollection(id) {
      this.collectionList.push(id);
      this.swalShow('已加入收藏', 'success', 'toast');
    },
    // 移除收藏清單
    deleteCollectionItem(index) {
      this.collectionList.splice(index, 1);
      this.swalShow('已取消收藏', 'success', 'toast');
    },
  },
});
