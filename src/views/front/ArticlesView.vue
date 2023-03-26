<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <template v-for="article in articles" :key="article.id">
        <div class="col">
          <div class="card h-100">
            <div class="row g-0">
              <div class="col-md-5">
                <img
                  :src="article.imageUrl"
                  class="card-img-top h-100 w-100 object-fit-cover"
                />
              </div>
              <div class="col-md-7">
                <div class="card-body pb-0">
                  <h5 class="card-title text-cusDarkBrown fw-bold">
                    {{ article.title }}
                  </h5>
                  <div class="text-cusBrown" style="min-height: 60px">
                    {{ article.description }}
                  </div>
                  <div
                    class="badge bg-primary rounded-pill mb-3"
                    style="font-size: 14px"
                  >
                    {{ article.tag[0] }}
                  </div>
                </div>
                <div class="card-footer">
                  <router-link
                    :to="`/articles/${article.id}`"
                    class="btn btn-outline-primary"
                  >
                    文章頁面
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'"></VueLoading>
</template>

<script>

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      isLoading: false,
    };
  },
  methods: {
    getArticles(page = 1) {
      this.isLoading = true;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/articles/?page=${page}`;
      this.$http.get(url).then((res) => {
        this.articles = res.data.articles;
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
