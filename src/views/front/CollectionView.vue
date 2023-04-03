<template>
  <div class="bg_texture3" style="min-height: 600px">
    <div class="container">
      <!-- 收藏清單標題 -->
      <div
        class="d-flex flex-column align-items-start justify-content-center mt-3"
      >
        <h3 class="fw-bold mt-1 border-3 border-start border-primary">
          <span class="text-cusDarkBrown ms-3">收藏清單</span>
        </h3>
      </div>
      <!--收藏清單未有商品-->
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        v-if="filterProducts?.length === 0"
        style="margin-top: 100px"
      >
        <div class="text-center my-5 fw-bold text-cusBrown fs-4">
            <i class="bi bi-bag-heart"></i>
          您的收藏清單目前是空的喔
        </div>
        <div class="w-100 text-center">
          <router-link class="text-decoration-none text-white" to="/products">
            <button type="button" class="btn btn-cusDarkBrown text-white w-md-25 w-50">
              返回購物
            </button>
          </router-link>
        </div>
      </div>
      <div class="mt-4 mb-5" v-if="filterProducts">
        <!--收藏清單列表 -->
        <div
          class="row py-2 border-bottom fw-bold text-cusDarkBrown text-center"
          v-if="filterProducts?.length"
        >
          <!-- 手機版 -->
          <div class="col d-lg-none d-block">商品明細</div>
          <!-- 桌面版 -->
          <div class="col d-none d-lg-block"></div>
          <div class="col d-none d-lg-block">品名</div>
          <div class="col d-none d-lg-block">分類</div>
          <div class="col">價格</div>

          <div class="col-2 col-lg-2">購買</div>
          <div class="col-2 col-lg-2">
            取消<span class="d-none d-md-inline">收藏</span>
          </div>
        </div>
        <div
          class="row align-items-center border-bottom text-center bg-white"
          v-for="product in filterProducts"
          :key="product.id"
        >
          <div class="col-md-2 col-4 py-2">
            <img
              :src="product.imageUrl"
              alt=""
              class="object-fit-cover"
              height="70"
              width="70"
            />
          </div>
          <div class="col-md-2 col-4">
            <div class="d-flex flex-column justify-content-center">
              <div class="text-nowrap mb-1">
                <router-link
                  :to="`/product/${product.id}`"
                  class="text-decoration-none fw-bold text-cusDarkBrown"
                  @click.prevent="() => getProduct(product.id)"
                >
                  {{ product.title }}
                </router-link>
              </div>
              <div class="text-nowrap mb-1 d-md-none d-block">
                NT$ {{ product.price }} / {{ product.unit }}
              </div>
            </div>
          </div>
          <div class="col-2 d-md-block d-none">
            {{ product.productCategory }}
          </div>
          <div class="col-2 d-md-block d-none ">
            <div class="text-nowrap mb-1">
              NT$ {{ product.price }} / {{ product.unit }}
            </div>
          </div>
          <div class="col-2 order-md-4">
            <div
              type="button"
              class="navBarLink"
              @click.prevent="() => addToCart(product.id)"
            >
              <i class="bi bi-bag-plus"></i>
            </div>
          </div>
          <div class="col-2 order-md-5">
            <div
              type="button"
              class="navBarLink"
              @click.prevent="() => updateCollection(product)"
            >
              <i class="bi bi-trash3"></i>
            </div>
          </div>
        </div>
        <!-- <table class="table bg-white align-middle" v-if="filterProducts">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th>分類</th>
              <th>價格</th>
              <th>購買</th>
              <th class="text-center">取消收藏</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in filterProducts"
              class="border"
              :key="product.id"
              style="width: 300px"
            >
              <td>
                <img
                  :src="product.imageUrl"
                  alt=""
                  class="object-fit-cover"
                  height="70"
                  width="70"
                />
              </td>
              <td class="p-2">
                <div class="text-nowrap mb-1">
                  <router-link
                    :to="`/product/${product.id}`"
                    class="text-decoration-none fw-bold text-cusDarkBrown"
                    @click.prevent="() => getProduct(product.id)"
                  >
                    {{ product.title }}
                  </router-link>
                </div>
              </td>
              <td class="p-2">
                {{ product.productCategory }}
              </td>
              <td>
                <div class="text-nowrap mb-1">
                  NT$ {{ product.price }} / {{ product.unit }}
                </div>
              </td>
              <td class="p-2">
                <div
                  type="button"
                  class="navBarLink"
                  @click.prevent="() => addToCart(product.id)"
                >
                  <i class="bi bi-bag-plus"></i>
                </div>
              </td>
              <td class="p-2 text-center">
                <div
                  type="button"
                  class="navBarLink"
                  @click.prevent="() => updateCollection(product)"
                >
                  <i class="bi bi-trash3"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table> -->
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'"></VueLoading>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import collectionStore from '@/stores/collectionStore';
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';

export default {
  methods: {
    ...mapActions(collectionStore, ['getCollection', 'updateCollection']),
    ...mapActions(cartStore, ['addToCart']),
  },
  computed: {
    ...mapState(collectionStore, ['filterProducts']),
    ...mapState(loadingStore, ['isLoading', 'loadingItem']),
  },
  mounted() {
    this.getCollection();
  },
};
</script>
