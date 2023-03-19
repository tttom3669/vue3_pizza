<template>
  <!-- Landing 網站到達頁 -->
  <LandingPage></LandingPage>
  <!--關於我們-->
  <div class="bg_texture1 py-5">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-center my-5"
      >
        <p class="fw-bold mb-n1 text-cusGray">ABOUT US</p>
        <h3 class="h1 fw-bold mt-1">
          <span class="text-primary me-5">—</span>關於我們<span
            class="text-primary ms-5"
            >—</span
          >
        </h3>
      </div>
      <div
        class="row d-flex flex-column flex-md-row flex-md-row-reverse align-items-center g-0"
        data-aos="fade-left"
      >
        <div class="col-md-6">
          <img
            src="@/assets/img/about_img_1.png"
            class="w-100 object-fit-cover rounded"
            alt="aboutUs_1"
          />
        </div>
        <div class="col-md-6">
          <div class="px-4 py-5 bg-white rounded">
            <h5 class="text-primary fw-bold">職人堅持</h5>
            <p class="text-cusBrown">
              移植義大利的傳統職人精神，從選料、拍製餅皮、到對烤爐的要求毫不馬虎。
            </p>
            <p class="text-cusBrown">
              運用優質新鮮食材及多元烹調手法，研發出一份份口味創意、連比薩邊也讓人意猶未盡的比薩，滿足餐桌上每一個挑剔的味蕾。
            </p>
          </div>
        </div>
      </div>
      <div
        class="row flex-column flex-md-row align-items-center g-0 mt-5"
        data-aos="fade-right"
      >
        <div class="col-md-6">
          <img
            src="@/assets/img/about_img_2.png"
            class="w-100 object-fit-cover rounded"
            alt="aboutUs_2"
          />
        </div>
        <div class="col-md-6">
          <div class="px-4 py-5 bg-white rounded">
            <h5 class="text-primary fw-bold">歡聚時刻</h5>
            <p class="text-cusBrown">
              獨樂樂不如眾樂樂！我們不只提供美食，更打造好友小聚、家族聚餐、慶生、過節都適合的舒適用餐環境。
            </p>
            <p class="text-cusBrown">
              在這裡，您可以自在放鬆的做自己，只需享受美食、用美食開啟話題吧！
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--商品分類-->
  <div class="bg_texture2">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-center my-5"
      >
        <p class="fw-bold mb-n1 text-cusGray">CATEGORIES</p>
        <h3 class="h1 fw-bold mt-1">
          <span class="text-primary me-5">—</span>商品分類<span
            class="text-primary ms-5"
            >—</span
          >
        </h3>
      </div>
      <div class="row d-flex flex-md-row flex-column g-4" data-aos="fade-left">
        <div class="col-md-4">
          <div class="row d-flex flex-row flex-md-column g-3">
            <div class="col">
              <div
                class="text-white border-5 h-100 position-relative overflow-hidden imgHover"
              >
                <router-link
                  class="nav-item nav-link me-4 stretched-link"
                  to="/products"
                  @click="() => changeCategory('蔬食首選')"
                ></router-link>
                <img
                  src="@/assets/img/vege.png"
                  class="w-100 h-100 object-fit-cover bg-dark-gradient"
                  alt="vegePizza"
                />
                <div
                  class="position-absolute top-0 start-10 w-100 bg-dark-gradient p-2"
                >
                  <h5>蔬食首選</h5>
                  <p>VEGE</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="text-white border-5 h-100 position-relative overflow-hidden imgHover"
              >
                <router-link
                  class="nav-item nav-link me-4 stretched-link"
                  to="/products"
                  @click="() => changeCategory('海鮮至上')"
                ></router-link>
                <img
                  src="@/assets/img/seafood.png"
                  class="w-100 h-100 object-fit-cover"
                  alt="seafood"
                />
                <div
                  class="position-absolute top-0 start-10 w-100 bg-dark-gradient p-2"
                >
                  <h5>海鮮至上</h5>
                  <p>SEA FOOD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="text-white border-5 h-100 position-relative overflow-hidden imgHover"
          >
            <router-link
              class="nav-item nav-link me-4 stretched-link"
              to="/products"
              @click="() => changeCategory('無肉不歡')"
            ></router-link>
            <img
              src="@/assets/img/meet.png"
              class="w-100 object-fit-cover d-md-block d-none"
              alt="meet"
            />
            <img
              src="@/assets/img/meet.png"
              class="w-100 object-fit-cover d-block d-md-none"
              height="200"
              alt="meet"
            />
            <div
              class="position-absolute top-0 start-10 w-100 bg-dark-gradient p-2"
            >
              <h5>無肉不歡</h5>
              <p>MEAT</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row d-flex lex-row flex-md-column g-3">
            <div class="col">
              <div
                class="text-white border-5 h-100 position-relative overflow-hidden imgHover"
              >
                <router-link
                  class="nav-item nav-link me-4 stretched-link"
                  to="/products"
                  @click="() => changeCategory('炸物')"
                ></router-link>
                <img
                  src="@/assets/img/sidemeal.png"
                  class="w-100 object-fit-cover"
                  alt="sidemeal"
                />
                <div
                  class="position-absolute top-0 start-10 w-100 bg-dark-gradient p-2"
                >
                  <h5>精緻副食</h5>
                  <p>SIDE MEAL</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="text-white border-5 h-100 position-relative overflow-hidden imgHover"
              >
                <img
                  src="@/assets/img/dessert.png"
                  class="w-100 h-100 object-fit-cover"
                  alt="dessertPizza"
                  to="/products"
                />
                <router-link
                  class="stretched-link"
                  to="/products"
                  @click="() => changeCategory('甜食主義')"
                ></router-link>
                <div
                  class="position-absolute top-0 start-10 w-100 bg-dark-gradient p-2"
                >
                  <h5>甜食主義</h5>
                  <p>DESSERT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 精選口味 -->
  <div class="container">
    <div
      class="d-flex flex-column align-items-center justify-content-center my-5"
    >
      <p class="fw-bold mb-n1 text-cusGray">TOP FLAVORS</p>
      <h3 class="h1 fw-bold mt-1">
        <span class="text-primary me-5">—</span>精選口味<span
          class="text-primary ms-5"
          >—</span
        >
      </h3>
    </div>
    <SwiperTopFlavors :category="'披薩'"></SwiperTopFlavors>
  </div>
</template>

<style>
.bg-dark-gradient {
  /*線性漸層 (方向性,起始色彩, 結束色彩)*/
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 20%,
    rgb(0, 0, 0, 0) 80%
  );
}

</style>

<script>
import { mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';
import LandingPage from '@/components/front/LandingPage.vue';
import SwiperTopFlavors from '@/components/front/SwiperTopFlavors.vue';

export default {
  components: { LandingPage, SwiperTopFlavors },
  methods: {
    ...mapActions(productsStore, ['changeCategory']),
  },
};
</script>
