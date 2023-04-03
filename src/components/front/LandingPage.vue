<template>
  <div class="header position-relative">
    <div
      class="landing position-absolute rounded-3 top-50 start-50 translate-middle text-white p-4"
    >
      <div class="border border-primary p-3 p-lg-5 text-center">
        <h3 class="display-3 fw-bold mb-3 text-nowrap">意猶未盡的滋味</h3>
        <h4 class="mb-5">濃郁的香料，酥脆的餅皮，滿足你的味蕾需求</h4>
        <VForm
          v-slot="{ errors }"
          class="d-flex bg-white mb-3 p-2 rounded"
          @submit="() => getSearch()"
        >
          <img
            src="@/assets/img/local_pizza.png"
            class="d-none d-lg-block object-fit-contain me-1"
            alt=""
          />
          <VField
            class="form-control me-2"
            type="search"
            name="搜尋"
            placeholder="探索美味：披薩類別"
            aria-label="Search"
            v-model="keyword"
            :class="{ 'is-invalid': errors['搜尋'] }"
            rules="required"
          />
          <button class="btn btn-primary text-nowrap text-light" type="submit">
            <span class="my-lg-2 mx-lg-4 d-none d-md-inline">搜尋</span>
            <i class="bi bi-search d-inline d-md-none"></i>
          </button>
        </VForm>
        <div class="d-flex align-items-center">
          <span class="d-none d-lg-block">熱門口味： </span>
          <button
            type="button"
            @click="() => (this.keyword = '瑪格麗特')"
            class="btn btn-outline-primary badge rounded-pill me-2 p-2 border-white text-white"
          >
            瑪格麗特
          </button>
          <button
            type="button"
            @click="() => (this.keyword = '醬烤嫩雞')"
            class="btn btn-outline-primary badge rounded-pill me-2 p-2 border-white text-white"
          >
            醬烤嫩雞
          </button>
          <button
            type="button"
            @click="() => (this.keyword = '豪華海鮮')"
            class="btn btn-outline-primary badge rounded-pill me-2 p-2 border-white text-white"
          >
            豪華海鮮
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  background-image: url('@/assets/img/landing.png');
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  height: calc(100vh - 82px);
  width: 100%;
}
.landing {
  background-color: rgba(0, 0, 0, 0.32);
}
</style>

<script>

export default {
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    getSearch() {
      this.$router.push(`/search/${this.keyword}`);
    },
  },
};
</script>
