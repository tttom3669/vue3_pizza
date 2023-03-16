<template>
  <div class="container">
    <div class="row d-flex flex-row my-5">
      <div class="col-md-2">
        <div class="accordion list-group sticky-top" style="top: 16px;" id="accordionFlushExample">
          <div class="list-group-item" :class="{ active: '全部商品' === filterCategory }">
            <div type="button" class="stretched-link"
                    @click="()=>changeCategory('全部商品')">
                    <p class="accordion-header ms-1">全部商品</p>
                  </div>
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
                <ul class="list-group list-group-flush ">
                  <li class="list-group-item" v-for="category in productCategory['披薩']"
                  :key="category" :class="{ active: category === filterCategory }">
                    <div type="button" class="stretched-link"
                    @click="()=>changeCategory(`${category}`)">{{category}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h5 class="accordion-header" id="flush-headingThree" >
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
                  <li class="list-group-item" v-for="category in productCategory['副食']"
                  :key="category" :class="{ active: category === filterCategory }">
                    <div type="button" class="stretched-link"
                    @click="()=>changeCategory(`${category}`)">{{category}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- <ul class="list-group accordion" id="accordionExample">
          <li class="list-group-item active  accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
            全部商品
          </li>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item"></div>
          </div>
          <li class="list-group-item">商品分類</li>
          <li class="list-group-item accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                精緻副食
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </li>
        </ul> -->
      </div>
      <div class="col-md-10">
          <div class="row d-flex justify-content-center g-4">
            <div
              class="col-md-4 mb-2 text-center"
              v-for="product in filterProducts"
              :key="product.id"
            >
              <div class="card h-100 py-2 shadow-sm overflow-hidden box1">
                <img
                  :src="product.imageUrl"
                  class="card-img-top  w-75 mx-auto object-fit-cover"
                  alt="pizza"
                  height="200"
                />
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ product.title }}</h5>
                  <!-- <p class="card-subtitle text-cusGray mb-1">Margherita Pizza</p> 英文名-->
                  <p class="h6 card-text text-primary fw-bold mb-3">
                    NT ${{ product.price }}
                  </p>
                  <div
                    class="d-flex flex-row justify-content-center align-items-center"
                  >
                    <div class="me-4"><i class="bi bi-heart"></i></div>
                    <button
                      type="button"
                      class="btn btn-cusDarkBrown border-0 text-nowrap px-3 px-md-4"
                      @click="() => addToCart(product.id)"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-md-4 col-6 mb-5">
            <div
              class="card w-100 my-5 pt-5 pb-2 position-relative"
              style="width: 18rem"
            >
              <img
                src="@/assets/img/pizza1.png"
                class="card-img-top w-75 top-0 start-50
                translate-middle position-absolute object-fit-cover"
                alt="pizza"
              />
              <div class="card-body text-center mt-5">
                <h5 class="card-title fw-bold mt-4">皇后瑪格披薩</h5>
                <p class="card-text text-cusGray mb-1">Margherita Pizza</p>
                <p class="h6 card-text text-primary fw-bold mb-3">NT $400</p>
                <div
                  class="d-flex flex-row justify-content-center align-items-center"
                >
                  <div class="me-4"><i class="bi bi-heart"></i></div>
                  <button type="button" class="btn btn-cusDarkBrown text-nowrap px-lg-5 px-auto">
                    加入訂單
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6 mb-5">
            <div
              class="card w-100 my-5 pt-5 pb-2 position-relative"
              style="width: 18rem"
            >
              <img
                src="@/assets/img/pizza1.png"
                class="card-img-top w-75 top-0 start-50
                translate-middle position-absolute object-fit-cover"
                alt="pizza"
              />
              <div class="card-body text-center mt-5">
                <h5 class="card-title fw-bold mt-4">皇后瑪格披薩</h5>
                <p class="card-text text-cusGray mb-1">Margherita Pizza</p>
                <p class="h6 card-text text-primary fw-bold mb-3">NT $400</p>
                <div
                  class="d-flex flex-row justify-content-center align-items-center"
                >
                  <div class="me-4"><i class="bi bi-heart"></i></div>
                  <button type="button" class="btn btn-cusDarkBrown text-nowrap px-3 px-md-5">
                    加入訂單
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6 mb-5">
            <div
              class="card w-100 my-5 pt-5 pb-2 position-relative"
              style="width: 18rem"
            >
              <img
                src="@/assets/img/pizza1.png"
                class="card-img-top w-75 top-0 start-50
                translate-middle position-absolute object-fit-cover"
                alt="pizza"
              />
              <div class="card-body text-center mt-5">
                <h5 class="card-title fw-bold mt-4">皇后瑪格披薩</h5>
                <p class="card-text text-cusGray mb-1">Margherita Pizza</p>
                <p class="h6 card-text text-primary fw-bold mb-3">NT $400</p>
                <div
                  class="d-flex flex-row justify-content-center align-items-center"
                >
                  <div class="me-4"><i class="bi bi-heart"></i></div>
                  <button type="button" class="btn btn-cusDarkBrown text-nowrap px-3 px-md-5">
                    加入訂單
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6 mb-5">
            <div
              class="card w-100 my-5 pt-5 pb-2 position-relative"
              style="width: 18rem"
            >
              <img
                src="@/assets/img/pizza1.png"
                class="card-img-top w-75 top-0 start-50
                translate-middle position-absolute object-fit-cover"
                alt="pizza"
              />
              <div class="card-body text-center mt-5">
                <h5 class="card-title fw-bold mt-4">皇后瑪格披薩</h5>
                <p class="card-text text-cusGray mb-1">Margherita Pizza</p>
                <p class="h6 card-text text-primary fw-bold mb-3">NT $400</p>
                <div
                  class="d-flex flex-row justify-content-center align-items-center"
                >
                  <div class="me-4"><i class="bi bi-heart"></i></div>
                  <button type="button" class="btn btn-cusDarkBrown text-nowrap px-3 px-md-5">
                    加入訂單
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6 mb-5">
            <div
              class="card w-100 my-5 pt-5 pb-2 position-relative"
              style="width: 18rem"
            >
              <img
                src="@/assets/img/pizza1.png"
                class="card-img-top w-75 top-0
                start-50 translate-middle position-absolute object-fit-cover"
                alt="pizza"
              />
              <div class="card-body text-center mt-5">
                <h5 class="card-title fw-bold mt-4">皇后瑪格披薩</h5>
                <p class="card-text text-cusGray mb-1">Margherita Pizza</p>
                <p class="h6 card-text text-primary fw-bold mb-3">NT $400</p>
                <div
                  class="d-flex flex-row justify-content-center align-items-center"
                >
                  <div class="me-4"><i class="bi bi-heart"></i></div>
                  <button type="button" class="btn btn-cusDarkBrown text-nowrap px-3 px-md-5">
                    加入訂單
                  </button>
                </div>
              </div>
            </div>
          </div> -->
          </div>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading"></VueLoading>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(productsStore, ['productCategory', 'filterProducts', 'filterCategory']),
    ...mapState(loadingStore, ['isLoading']),
  },
  methods: {
    ...mapActions(productsStore, ['getProducts', 'changeCategory']),
    ...mapActions(cartStore, ['addToCart']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
.btn-cusDarkBrown:hover {
  background-color: var(--bs-cusBrown);
}
.allProductActive {
  color: var(--bs-accordion-active-color);
  background-color: var(--bs-accordion-active-bg);
}
.box1:hover {
  transform: translate(5px, -5px);
}
</style>
