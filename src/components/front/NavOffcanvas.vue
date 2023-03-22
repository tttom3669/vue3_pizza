<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/img/logo1.png" alt="logo" />
        </router-link>
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
          :class="{ active: '全部商品' === filterCategory && currentPage === '美味菜單'}"
        >
          <router-link
            to="/products"
            class="stretched-link"
            @click="() => {changeCategory('全部商品'); changePage('美味菜單');}"
          >
          </router-link>
          <span class="accordion-header ms-1">美味菜單</span>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              商品類別
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
          >
            <div class="accordion-body">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  v-for="category in productCategory['披薩']"
                  :key="category"
                  :class="{ active: category === filterCategory }"
                >
                  <router-link
                    class="stretched-link"
                    to="/products"
                    @click="() => changeCategory(`${category}`)"
                  ></router-link>
                  {{ category }}
                </li>
                <li
                  class="list-group-item"
                  v-for="category in productCategory['副食']"
                  :key="category"
                  :class="{ active: category === filterCategory }"
                >
                  <router-link
                    class="stretched-link"
                    to="/products"
                    @click="() => changeCategory(`${category}`)"
                  ></router-link>

                  {{ category }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="list-group-item"
        :class="{active : '' === filterCategory && currentPage === '購物車'}">
          <router-link to="/cart" class="stretched-link"
          @click="() => {changeCategory(''); changePage('購物車');}"> </router-link>
          <span class="accordion-header ms-1">購物車</span>
        </div>
      </div>
      <div class="list-group mt-3">
        <!-- <router-link class="text-decoration-none list-group-item" to="/"
          >首頁</router-link
        > -->
        <!-- <router-link class="text-decoration-none list-group-item" to="/"
          >最新消息</router-link
        > -->
        <!-- <router-link class="text-decoration-none list-group-item" to="/products"
          >美味菜單</router-link
        > -->
        <!-- <router-link class="text-decoration-none list-group-item" to="/cart"
          >購物車</router-link
        > -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';

export default {
  data() {
    return {
      currentPage: '',
    };
  },
  computed: {
    ...mapState(productsStore, ['productCategory', 'filterCategory']),
  },
  methods: {
    ...mapActions(productsStore, ['changeCategory']),
    changePage(page = '') {
      this.currentPage = page;
    },
  },
};
</script>
