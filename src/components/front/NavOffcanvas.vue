<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    ref="offcanvas"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">
        <RouterLink class="navbar-brand" to="/">
          <img src="@/assets/img/logo1.png" alt="logo" />
        </RouterLink>
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div
        class="accordion list-group sticky-top"
        style="top: 16px"
        id="accordionFlushExample"
      >
        <div
          class="list-group-item"
          :class="{ active: currentPage === '最新消息'}"
        >
          <RouterLink
            to="/articles"
            class="stretched-link"
            @click="() => {changePage('最新消息'); closeOffcanvas();}"
          >
          </RouterLink>
          <span class="accordion-header ms-1">最新消息</span>
        </div>
        <div
          class="list-group-item"
          :class="{ active: '全部商品' === filterCategory && currentPage === '美味菜單'}"
        >
          <RouterLink
            to="/products"
            class="stretched-link"
            @click="() => {changeCategory('全部商品'); changePage('美味菜單'); closeOffcanvas();}"
          >
          </RouterLink>
          <span class="accordion-header ms-1">美味菜單</span>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingMenu">
            <button
              class="accordion-button collapsed"
              id="btn_flush-collapseMenu"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseMenu"
              aria-expanded="false"
              aria-controls="flush-collapseMenu"
            >
              商品類別
            </button>
          </h2>
          <div
            id="flush-collapseMenu"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingMenu"
          >
            <div class="accordion-body">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item rounded-3"
                  v-for="category in productCategory['披薩']"
                  :key="category"
                  :class="{ active: category === filterCategory }"
                >
                  <RouterLink
                    class="stretched-link"
                    to="/products"
                    @click="() => {changeCategory(`${category}`);
                    changeCollapseStyle('flush-collapseMenu'); closeOffcanvas();}"
                  ></RouterLink>
                  {{ category }}
                </li>
                <li
                  class="list-group-item rounded-3"
                  v-for="category in productCategory['副食']"
                  :key="category"
                  :class="{ active: category === filterCategory }"
                >
                  <RouterLink
                    class="stretched-link"
                    to="/products"
                    @click="() => {changeCategory(`${category}`);
                  changeCollapseStyle('flush-collapseMenu'); closeOffcanvas();}"
                  ></RouterLink>

                  {{ category }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="list-group-item"
          :class="{ active: currentPage === '常見問題'}"
        >
          <RouterLink
            to="/question"
            class="stretched-link"
            @click="() => {changePage('常見問題'); closeOffcanvas();}"
          >
          </RouterLink>
          <span class="accordion-header ms-1">常見問題</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';
import { RouterLink } from 'vue-router';
import { Offcanvas } from 'bootstrap';

export default {
  data() {
    return {
      currentPage: '',
      myOffcanvas: '',
    };
  },
  components: { RouterLink },
  computed: {
    ...mapState(productsStore, ['productCategory', 'filterCategory']),
  },
  methods: {
    ...mapActions(productsStore, ['changeCategory']),
    changePage(page = '') {
      this.currentPage = page;
    },
    closeOffcanvas() {
      this.myOffcanvas.hide();
    },
    // 類別清單折疊
    changeCollapseStyle(id) {
      // 點擊商品子類別後，關閉折疊清單
      document.getElementById(`${id}`).classList.add('collapse');
      document.getElementById(`${id}`).classList.remove('show');
      document.getElementById(`btn_${id}`).classList.add('collapsed');
    },
  },
  mounted() {
    this.myOffcanvas = new Offcanvas(this.$refs.offcanvas);
  },
};
</script>
