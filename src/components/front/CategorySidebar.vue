<template>
  <div
    class="accordion list-group sticky-top"
    style="top: 130px"
    id="accordionFlushExample"
  >
    <div
      class="list-group-item"
      :class="{ active: '全部商品' === filterCategory }"
    >
      <RouterLink
        to="/products"
        class="stretched-link"
        @click="() => changeCategory('全部商品')"
      />
      <span class="accordion-header ms-1">全部商品</span>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingPizza">
        <button
          class="accordion-button collapsed"
          id="btn_flush-collapsePizza"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapsePizza"
          aria-expanded="false"
          aria-controls="flush-collapsePizza"
        >
          披薩口味
        </button>
      </h5>
      <div
        id="flush-collapsePizza"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingPizza"
        data-bs-parent="#accordionFlushExample"
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
                @click="
                  () => {
                    changeCategory(`${category}`);
                    changeCollapseStyle('flush-collapsePizza');
                  }
                "
              />

              {{ category }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h5 class="accordion-header" id="flush-headingSideMeal">
        <button
          class="accordion-button collapsed"
          id="btn_flush-collapseSideMeal"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseSideMeal"
          aria-expanded="false"
          aria-controls="flush-collapseSideMeal"
        >
          精緻副食
        </button>
      </h5>
      <div
        id="flush-collapseSideMeal"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingSideMeal"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item rounded-3"
              v-for="category in productCategory['副食']"
              :key="category"
              :class="{ active: category === filterCategory }"
            >
              <RouterLink
                class="stretched-link"
                to="/products"
                @click="
                  () => {
                    changeCategory(`${category}`);
                    changeCollapseStyle('flush-collapseSideMeal');
                  }
                "
              />
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
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  components: { RouterLink },
  computed: {
    ...mapState(productsStore, ['productCategory', 'filterCategory']),
  },
  methods: {
    ...mapActions(productsStore, ['changeCategory']),
    // 類別清單折疊
    changeCollapseStyle(target) {
      let id = '';
      // 保留當下開啟折疊清單，關閉其餘折疊清單
      if (target === 'flush-collapseSideMeal') {
        id = 'flush-collapsePizza';
      } else {
        id = 'flush-collapseSideMeal';
      }
      // 點擊商品子類別後，關閉折疊清單
      document.getElementById(`${id}`).classList.add('collapse');
      document.getElementById(`${id}`).classList.remove('show');
      document.getElementById(`btn_${id}`).classList.add('collapsed');
    },
  },
};
</script>
