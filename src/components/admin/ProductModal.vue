<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <VForm v-slot="{ errors }" @submit="() => $emit('updateProduct')">
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-2">
                  <h3 class="mb-3">主要圖片</h3>
                  <div class="mb-3">
                    <!-- 主要圖片(單圖) -->
                    <label for="imageUrl" class="form-label">圖片網址</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      v-model="tempProduct.imageUrl"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="mainImgFile" class="form-label"
                      >或 上傳圖片</label
                    >
                    <input
                      class="form-control"
                      type="file"
                      id="mainImgFile"
                      ref="mainImgFile"
                      @change="uploadFile"
                    />
                  </div>
                  <img
                    class="img-fluid"
                    :src="tempProduct.imageUrl"
                    alt="tempProductImage"
                  />
                </div>
                <div>
                  <h3 class="mb-3">多圖新增</h3>
                  <!--多圖區，將 tempProduct 中的圖片陣列讀取出來 -->
                  <template v-if="Array.isArray(tempProduct.imagesUrl)">
                    <div
                      class="mb-2"
                      v-for="(image, key) in tempProduct.imagesUrl"
                      :key="key + 'img'"
                    >
                      <label for="imageUrl" class="form-label">圖片網址</label>
                      <input
                        type="text"
                        class="form-control mb-3"
                        placeholder="請輸入圖片連結"
                        v-model="tempProduct.imagesUrl[key]"
                      />
                      <img class="img-fluid" :src="image" :alt="key + 'img'" />
                    </div>
                    <!--根據多圖陣列長度、內容，切換顯示新增圖片、刪除圖片-->
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="$emit('createImages')"
                      v-if="
                        !tempProduct.imagesUrl.length ||
                        tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                      "
                    >
                      新增圖片
                    </button>

                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm mt-2 d-block w-100"
                      @click="tempProduct.imagesUrl.pop()"
                      v-if="tempProduct.imagesUrl.length"
                    >
                      刪除圖片
                    </button>
                  </template>
                  <!--存放多圖網址的變數若未初始化為陣列則使顯示此區塊 -->
                  <template v-else>
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="$emit('createImages', 'init')"
                    >
                      新增圖片
                    </button>
                  </template>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="row mb-3">
                  <div class="col-6">
                    <label for="title" class="form-label">標題</label>
                    <VField
                      id="title"
                      name="標題"
                      type="text"
                      class="form-control"
                      placeholder="請輸入標題"
                      v-model="tempProduct.title"
                      :class="{ 'is-invalid': errors['標題'] }"
                      rules="required"
                    />
                    <ErrorMessage name="標題" class="invalid-feedback" />
                  </div>
                  <div class="col-6">
                    <label for="enTitle" class="form-label">英文標題</label>
                    <input
                      id="enTitle"
                      type="text"
                      class="form-control"
                      v-model="tempProduct.enTitle"
                      placeholder="請輸入英文標題"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="category" class="form-label">分類</label>
                  <VField
                    id="category"
                    name="分類"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                    :class="{ 'is-invalid': errors['分類'] }"
                    rules="required"
                  />
                  <ErrorMessage name="分類" class="invalid-feedback" />
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="productCategory" class="form-label"
                      >細項分類</label
                    >
                    <select
                      id="productCategory"
                      class="form-select"
                      aria-label="Product category select"
                      v-model="tempProduct.productCategory"
                    >
                      <option selected disabled hidden>請選擇</option>
                      <template v-if="tempProduct.category === '披薩' || isNew">
                        <option value="無肉不歡">無肉不歡</option>
                        <option value="蔬食首選">蔬食首選</option>
                        <option value="海鮮至上">海鮮至上</option>
                        <option value="甜食主義">甜食主義</option>
                      </template>
                      <template v-if="tempProduct.category === '副食' || isNew">
                        <option value="炸物">炸物</option>
                        <option value="飲料">飲料</option>
                      </template>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <VField
                      id="unit"
                      name="單位"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                      :class="{ 'is-invalid': errors['單位'] }"
                      rules="required"
                    />
                    <ErrorMessage name="單位" class="invalid-feedback" />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <VField
                      id="origin_price"
                      name="原價"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入原價"
                      v-model.number="tempProduct.origin_price"
                      :class="{ 'is-invalid': errors['原價'] }"
                      rules="required|min_value:0"
                    />
                    <ErrorMessage name="原價" class="invalid-feedback" />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <VField
                      id="price"
                      name="售價"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                      v-model.number="tempProduct.price"
                      :class="{ 'is-invalid': errors['售價'] }"
                      rules="required|min_value:0"
                    />
                    <ErrorMessage name="售價" class="invalid-feedback" />
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">產品內容物</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品內容物"
                    v-model="tempProduct.content"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      v-model="tempProduct.is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="submit" class="btn btn-primary">確認</button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
    },
  },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    uploadFile() {
      const uploadedFile = this.$refs.mainImgFile.files[0];
      const formData = new FormData();
      formData.append('mainImgFile', uploadedFile);
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          this.tempProduct.imageUrl = res.data.imageUrl;
          this.$refs.mainImgFile.value = '';
          this.swalShow('圖片上傳成功', 'success', 'toast');
        })
        .catch(() => {
          this.swalShow('檔案格式不符', 'error');
        });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.productModal);
  },
};
</script>
