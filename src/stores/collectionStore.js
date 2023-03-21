import { defineStore } from 'pinia';

export default defineStore('collectionStore', {
  state: () => ({
    collection: {
      hover: false,
      itemID: [],
    },
  }),
  actions: {
    addToCollection(product) {
      this.collection.itemID.push(product.id);
    },
  },
});
