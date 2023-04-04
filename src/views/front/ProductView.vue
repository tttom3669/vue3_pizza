<template>
  <div class="bg_texture3">
    <div class="container">
      <!-- 麵包屑 -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="text-decoration-none">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink
              to="/products"
              @click="() => changeCategory(`${tempProduct.productCategory}`)"
              class="text-decoration-none"
              >{{ tempProduct.productCategory }}</RouterLink
            >
          </li>
          <li class="breadcrumb-item" aria-current="page">
            {{ tempProduct.title }}
          </li>
        </ol>
      </nav>
      <!-- 產品 -->
      <div class="row mt-5">
        <div class="col-lg-4 position-relative">
          <img
            :src="tempProduct.imageUrl"
            :alt="tempProduct.title"
            class="w-100 object-fit-cover img-fluid"
          />
          <div
            class="me-4 position-absolute translate-middle"
            type="button"
            v-if="collectionList?.indexOf(tempProduct.id) === -1"
            @click="() => updateCollection(tempProduct)"
            style="top: 30px; left: 30px"
          >
            <i
              class="bi collection"
              :class="{
                'bi-heart': collectionList?.indexOf(tempProduct.id) === -1,
                'bi-suit-heart-fill':
                  collection.hover == true &&
                  collection.itemID == tempProduct.id,
              }"
              @mouseover="
                () => (
                  (collection.hover = true),
                  (collection.itemID = tempProduct.id)
                )
              "
              @mouseout="
                () => ((collection.hover = false), (collection.itemID = ''))
              "
            ></i>
          </div>
          <div
            class="me-4 position-absolute translate-middle"
            type="button"
            v-else
            @click="() => updateCollection(tempProduct)"
            style="top: 30px; left: 30px"
          >
            <i class="bi bi-suit-heart-fill" style="color: red"></i>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="d-flex flex-row align-items-baseline">
            <h3 class="fw-bold">{{ tempProduct.title }}</h3>
            <h4 class="text-cusBrown ms-3">{{ tempProduct.enTitle }}</h4>
          </div>
          <!--商品類別-->
          <span
            class="badge bg-primary rounded-pill mb-3"
            style="font-size: 14px"
            >{{ tempProduct.category }}</span
          >
          <p class="fw-bold text-cusDarkBrown">{{ tempProduct.content }}</p>
          <p class="text-cusBrown">{{ tempProduct.description }}</p>
          <!-- 商品價格 -->
          <div class="h6 fw-bold">建議售價：</div>
          <div class="h5" v-if="tempProduct.price === tempProduct.origin_price">
            {{ tempProduct.price }} 元
          </div>
          <div class="d-flex flex-row align-items-baseline mb-2" v-else>
            <div class="h5 text-cusBrown fw-bold me-2">
              NT${{ tempProduct.price }}
            </div>
            <del class="h6 me-2 text-cusGray"
              >NT${{ tempProduct.origin_price }}</del
            >
          </div>

          <div class="w-100 w-md-50">
            <!-- 商品數量/單位 -->
            <div class="input-group mb-3">
              <button
                type="button"
                class="input-group-text"
                id="basic-addon1"
                :disabled="qty === 1"
                @click.prevent="() => (qty -= 1)"
              >
                <i class="bi bi-dash"></i>
              </button>
              <input
                type="text"
                class="form-control text-center"
                readonly
                :value="qty"
              />
              <button
                type="button"
                class="input-group-text"
                id="basic-addon2"
                :disabled="qty === 99"
                @click.prevent="() => (qty += 1)"
              >
                <i class="bi bi-plus"></i>
              </button>
            </div>
            <div class="row flex-row gy-3">
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-cusDarkBrown text-white w-100"
                  @click.prevent="() => addToCart_Check()"
                  :disabled="loadingItem === tempProduct.id"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                    v-if="loadingItem === tempProduct.id"
                  ></span>
                  加入購物車
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-primary w-100 text-white"
                  @click.prevent="() => addToCart_Check()"
                  :disabled="loadingItem === tempProduct.id"
                >
                  <RouterLink
                    class="text-decoration-none text-white"
                    to="/cart"
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                      v-if="loadingItem === tempProduct.id"
                    ></span>
                    立刻購買
                  </RouterLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 注意事項-->
      <nav>
        <div class="nav nav-pills mt-5" id="nav-tab" role="tablist">
          <div class="d-flex flex-row bg-white">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              商品介紹
            </button>
            <button
              class="nav-link nav-button"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              訂購須知
            </button>
          </div>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active p-3 bg-white border"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <ul class="list-unstyled text-cusBrown">
            <li class="fw-bold text-cusDarkBrown">
              品名︰{{ tempProduct.title }}
              <span v-if="tempProduct.category === '披薩'">12吋</span>
            </li>
            <li>成分︰{{ tempProduct.content }}</li>
            <li>保存方式：請盡快食用完畢。</li>
            <li v-if="tempProduct.category === '披薩'">
              過敏原資訊︰本產品含有麩質、奶類，不適合對其過敏體質者食用。
            </li>
          </ul>
        </div>
        <div
          class="tab-pane fade p-3 bg-white border"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div class="row">
            <div class="col-md-6">
              <h6 class="fw-bold text-cusDarkBrown">運送服務：</h6>
              <ul class="list-unstyled text-cusBrown">
                <li>
                  提供外送區域為桃園市！所有品項滿 $399 免運，未滿$399，運費$70
                </li>
                <li>收到訂單及款項後，預計1小時內出貨。</li>
              </ul>
            </div>
            <div class="col-md-6">
              <h6 class="fw-bold text-cusDarkBrown">取消訂單：</h6>
              <ul class="list-unstyled text-cusBrown">
                <li>
                  在該筆訂單尚未製作之前皆可。請消費者以電話方式聯絡門市，由門市端取消訂單。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 相關商品 -->
      <FrontHeading class="mt-5" :title="'精選商品'" />
      <SwiperTopFlavors class="mb-3" :category="'全部商品'" />
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'" />
</template>

<style>
.nav-button .active {
  background-color: black;
}
</style>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';
import swalMessage from '@/stores/swalMessage';
import SwiperTopFlavors from '@/components/front/SwiperTopFlavors.vue';
import { RouterLink } from 'vue-router';
import FrontHeading from '@/components/front/FrontHeading.vue';
import collectionStore from '@/stores/collectionStore';

export default {
  data() {
    return {
      qty: 1,
      productId: '',
    };
  },
  components: { SwiperTopFlavors, RouterLink, FrontHeading },
  props: ['id'],
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(loadingStore, ['isLoading', 'loadingItem']),
    ...mapState(productsStore, ['tempProduct']),
    ...mapState(collectionStore, ['collectionList', 'collection']),
  },
  methods: {
    ...mapActions(collectionStore, ['getCollection', 'updateCollection']),
    ...mapActions(swalMessage, ['swalShow']),
    ...mapActions(cartStore, ['addToCart', 'updateCartItem']),
    ...mapActions(productsStore, ['getProduct', 'changeCategory']),
    // 加入購物車 (檢查是否存在購物車中)
    addToCart_Check() {
      let tempProductId = [];
      tempProductId = this.cart.carts.filter((cart) => cart.product_id === this.tempProduct.id);
      // 判斷是否已經加入購物車
      if (tempProductId[0] === this.tempProduct.id) {
        // 有 => 更新購物車
        this.updateCartItem(tempProductId[0], this.qty);
      } else {
        // 沒有 => 加入購物車
        this.addToCart(this.tempProduct.id, this.qty);
      }
    },
  },
  mounted() {
    this.getProduct(this.id);
    this.getCollection();
  },
};
</script>
