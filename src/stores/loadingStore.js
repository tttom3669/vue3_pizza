import { defineStore } from 'pinia';

export default defineStore('loadingStore', {
  state: () => ({
    isLoading: false,
    loadingItem: '', // 存 id、種類，判斷是否讀取中
  }),
});
