<template>
  <div
    class="accordion list-group sticky-top"
    style="top: 16px"
    id="accordionFlushExample"
  >
    <div
      class="list-group-item"
      :class="{ active: '全部商品' === filterCategory }"
    >
      <router-link
        to="/products"
        class="stretched-link"
        @click="() => changeCategory('全部商品')"
      >
    </router-link>
    <span class="accordion-header ms-1">全部商品</span>
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
          披薩口味
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample"
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
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          精緻副食
        </button>
      </h5>
      <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <ul class="list-group list-group-flush">
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';

export default {
  computed: {
    ...mapState(productsStore, ['productCategory', 'filterCategory']),
  },
  methods: {
    ...mapActions(productsStore, ['changeCategory']),
  },
};
</script>
