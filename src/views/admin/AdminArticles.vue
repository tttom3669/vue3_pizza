<template>
  <div>
    <div class="text-end mt-4">
      <button
        class="btn btn-primary"
        type="button"
        @click="() => openModal('create')"
      >
        建立新的頁面
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">作者</th>
          <th>描述</th>
          <th style="width: 100px">建立時間</th>
          <th style="width: 100px">是否公開</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.description }}</td>
          <td>{{ $filters.date(article.create_at) }}</td>
          <td>
            <span v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="() => openModal('edit', article)"
              >
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" type="button"
              @click="() =>openModal('delete', article)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <AdminPagination :pages="page" @change-page="getArticles"></AdminPagination>
   <!-- 新增/修改文章  Modal -->
  <ArticleModal
    ref="articleModal"
    :is-new="isNew"
    :article="tempArticle"
    @update-article="updateArticle"
  ></ArticleModal>
   <!-- 刪除文章 Modal -->
   <DelItemModal
      ref="delArticleModal"
      :temp-item="tempArticle"
      :del-modal-type="delModalType"
      @del-item="delArticle"
    ></DelItemModal>
</template>
<script>
import ArticleModal from '@/components/admin/ArticleModal.vue';
import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';
import DelItemModal from '@/components/admin/DelItemModal.vue';
import AdminPagination from '@/components/admin/AdminPagination.vue';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      articles: [],
      tempArticle: {},
      isNew: false,
      isLoading: false,
      delModalType: '文章',
      page: {},
    };
  },
  components: { ArticleModal, DelItemModal, AdminPagination },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    // 取得文章列表
    getArticles(page = 1) {
      this.isLoading = true;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/articles/?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles;
          this.isLoading = false;
          this.page = res.data.pagination; // 取得頁數
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          this.isLoading = false;
        });
    },
    // 取得文章細節
    getArticle(id) {
      this.isLoading = true;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.tempArticle = res.data.article;
          this.isLoading = false;
          this.$refs.articleModal.openModal();
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          this.isLoading = false;
        });
    },
    // 更新文章內容
    updateArticle() {
      let apiMethod = 'post';
      let apiUrl = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article`;

      // 用 isNew 判斷 api 要怎麼運行
      if (!this.isNew) {
        apiUrl = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`;
        apiMethod = 'put';
      }
      this.isLoading = true;
      this.$refs.articleModal.closeModal(); // 關閉產品頁面
      this.$http[apiMethod](apiUrl, { data: this.tempArticle })
        .then((res) => {
          this.getArticles();
          this.swalShow(`${res.data.message}`, 'success', 'toast');
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          this.isLoading = false;
        });
    },
    // 刪除文章
    delArticle() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`;
      this.isLoading = true;
      this.$refs.delArticleModal.closeModal();
      this.$http
        .delete(url).then((res) => {
          this.getArticles();
          this.swalShow(`${res.data.message}`, 'success', 'toast');
        }).catch((err) => {
          this.isLoading = false;
          this.swalShow(`${err.response.data.message}`, 'error');
        });
    },
    // 開啟Modal
    openModal(status, article) {
      // 新增文章頁面
      if (status === 'create') {
        // 帶入初始化資料
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.isNew = true;
        this.$refs.articleModal.openModal();
      } else if (status === 'edit') {
        // 編輯產品頁面
        this.getArticle(article.id); // 取得欲編輯文章內容
        this.isNew = false;
      } else if (status === 'delete') {
        // 刪除產品頁面
        this.tempArticle = { ...article }; // 取得欲刪除文章內容
        this.$refs.delArticleModal.openModal();
      }
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style scoped></style>
