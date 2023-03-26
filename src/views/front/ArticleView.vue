<template>
  <div class="bg_texture2" style="min-height: 600px">
    <div class="container mb-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/articles">最新消息</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ article.title }}
          </li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <article class="col-8">
          <h2>{{ article.title }}</h2>
          <p>
            <small class="text-muted">{{
              $filters.date(article.create_at)
            }}</small>
            -
            <small class="text-muted">作者：{{ article.author }}</small>
          </p>
          <img :src="article.imageUrl" alt="" class="img-fluid mb-3" />
          <div v-html="article.content"></div>
        </article>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'"></VueLoading>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      article: {},
      isLoading: false,
    };
  },
  props: ['articleId'],
  methods: {
    getArticle() {
      this.isLoading = true;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${this.articleId}`;
      this.$http.get(url).then((res) => {
        this.article = res.data.article;
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
