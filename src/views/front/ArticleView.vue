<template>
  <div class="bg_texture3" style="min-height: 600px">
    <div class="container mb-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/articles">最新消息</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ article.title }}
          </li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <article class="col-md-8">
          <h2>{{ article.title }}</h2>
          <p>
            <small class="text-muted">{{
              $filters.date(article.create_at)
            }}</small>
            -
            <small class="text-muted">作者：{{ article.author }}</small>
          </p>
          <img
            :src="article.imageUrl"
            :alt="article.title"
            class="img-fluid mb-3"
          />
          <div v-html="article.content" />
        </article>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'" />
</template>
<script>
import { RouterLink } from 'vue-router';
import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      article: {},
      isLoading: false,
    };
  },
  components: { RouterLink },
  props: ['articleId'],
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    getArticle() {
      this.isLoading = true;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${this.articleId}`;
      this.$http
        .get(url)
        .then((res) => {
          this.article = res.data.article;
          this.isLoading = false;
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
