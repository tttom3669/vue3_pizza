<template>
  <div>
    <div class="text-end mt-4">
      <button  type="button" class="btn btn-primary" @click="openModal('create')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th>細項分類</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <!--分類-->
          <td>{{ product.category }}</td>
          <!--產品名稱-->
          <td>{{ product.title }}</td>
          <!-- 細項分類 -->
          <td>{{ product.productCategory }}</td>
          <!--原價-->
          <td class="text-start">{{ product.origin_price }}</td>
          <!--售價-->
          <td class="text-start">{{ product.price }}</td>
          <!--是否啟用-->
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <VueLoading v-model:active="isLoading" />
    <SharedPagination :pages="page" @change-page="getProducts" />
    <!-- 新增/修改產品 Modal -->
    <ProductModal
      ref="productModal"
      :product="tempProduct"
      :is-new="isNew"
      @update-product="updateProduct"
      @create-images="createImages"
    />
    <!-- 刪除產品 Modal -->
    <DelItemModal
      ref="delProductModal"
      :temp-item="tempProduct"
      :del-modal-type="delModalType"
      @del-item="delProduct"
    />
  </div>
</template>
<script>
import SharedPagination from '@/components/shared/SharedPagination.vue';
import ProductModal from '@/components/admin/ProductModal.vue';
import DelItemModal from '@/components/admin/DelItemModal.vue';

import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: true, // 確認是編輯或新增所使用
      page: {},
      isLoading: false,
      delModalType: '商品',
    };
  },
  components: { SharedPagination, ProductModal, DelItemModal },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    // 取得產品資料
    getProducts(page = 1, category = '') {
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products/?page=${page}`;
      if (category !== '') {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products/category=${category}?&page=${page}`;
      }
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.page = res.data.pagination; // 取得頁數
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.swalShow('請先登入', 'error');
          this.$router.push('/login');
        });
    },
    // 更新產品資料
    updateProduct() {
      // 用 isNew 判斷 api 要怎麼運行
      // 新增產品
      let apiMethod = 'post';
      let apiUrl = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`;

      // 修改產品
      if (!this.isNew) {
        apiMethod = 'put';
        apiUrl = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      }
      this.isLoading = true;
      this.$http[apiMethod](apiUrl, { data: this.tempProduct })
        .then((res) => {
          this.getProducts(this.page.current_page); // 更新完，不會跳頁
          this.$refs.productModal.closeModal(); // 關閉產品頁面
          this.swalShow(`${res.data.message}`, 'success', 'toast');
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          this.isLoading = false;
        });
    },
    // 刪除產品資料
    delProduct() {
      this.$refs.delProductModal.closeModal(); // 關閉刪除頁面
      this.isLoading = true;
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`)
        .then((res) => {
          this.getProducts();
          this.swalShow(`${res.data.message}`, 'success', 'toast');
        })
        .catch((err) => {
          this.swalShow(`${err.data.message}`, 'error');
          this.isLoading = false;
        });
    },
    // 開啟Modal
    openModal(status, product) {
      // 新增產品頁面
      if (status === 'create') {
        // 帶入初始化資料
        this.tempProduct = {
          imagesUrl: [],
          productCategory: '無細項分類',
        };
        this.isNew = true;
        this.$refs.productModal.openModal();
      } else if (status === 'edit') {
        // 編輯產品頁面
        this.tempProduct = { ...product }; // 取得欲編輯產品內容
        this.isNew = false;
        this.$refs.productModal.openModal();
      } else if (status === 'delete') {
        // 刪除產品頁面
        this.tempProduct = { ...product }; // 取得欲刪除產品內容
        this.$refs.delProductModal.openModal();
      }
    },
    // 新增圖片
    createImages(type) {
      if (type === 'init') {
        this.tempProduct.imagesUrl = [];
      }
      this.tempProduct.imagesUrl.push(''); // 多圖區增加存放圖片
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
