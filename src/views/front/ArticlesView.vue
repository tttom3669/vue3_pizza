<template>
  <div class="bg_texture3" style="min-height: 600px">
    <div class="container">
      <!-- 最新消息標題 -->
      <FrontHeading :title="'最新消息'" class="mt-3" />
      <!-- 文章 -->
      <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
        <template v-for="article in articles" :key="article.id">
          <div class="col">
            <div class="card h-100">
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    :src="article.imageUrl"
                    :alt="article.title"
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
                    <RouterLink
                      :to="`/article/${article.id}`"
                      class="btn btn-outline-primary"
                    >
                      文章頁面
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <SharedPagination :pages="page" @change-page="getArticles" />
  <VueLoading v-model:active="isLoading" :loader="'dots'" />
</template>

<script>
import FrontHeading from '@/components/front/FrontHeading.vue';
import { RouterLink } from 'vue-router';
import SharedPagination from '@/components/shared/SharedPagination.vue';
import { mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      isLoading: false,
      page: {},
    };
  },
  components: { FrontHeading, RouterLink, SharedPagination },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    getArticles(page = 1) {
      this.isLoading = true;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/articles/?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles;
          this.page = res.data.pagination; // 取得頁數
          this.isLoading = false;
        })
        .catch((err) => {
          this.swalShow(`${err.response.data.message}`, 'error');
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
