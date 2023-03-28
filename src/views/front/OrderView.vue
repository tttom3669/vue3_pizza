<template>
  <div class="bg_texture2">
    <div class="container mb-4">
      <!-- 進度條 -->
      <div class="row d-flex justify-content-center mt-3">
        <div class="col-12 col-md-6">
          <div class="col">
            <div class="position-relative m-4">
              <div class="progress" style="height: 1px">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div
                class="position-absolute top-0 start-0
                text-white translate-middle btn btn-sm btn-primary rounded-pill"
                style="width: 2rem; height: 2rem"
              >
                1
              </div>
              <div
                class="position-absolute top-0 start-50
                text-white translate-middle btn btn-sm btn-primary rounded-pill"
                style="width: 2rem; height: 2rem"
              >
                2
              </div>
              <div
                class="position-absolute top-0 start-100
                text-white translate-middle btn btn-sm btn-secondary rounded-pill"
                style="width: 2rem; height: 2rem"
              >
                3
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-between text-primary fw-bold">
            <span class="ms-n1">確認購買</span>
            <span>填寫資料</span>
            <span class="text-secondary me-n1">完成訂單</span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">訂單明細</h5>

              <table class="table align-middle" v-if="cart.carts">
                <tbody>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        alt=""
                        class="object-fit-cover"
                        height="70"
                        width="70"
                      />
                    </td>
                    <td class="p-2">
                      <div class="d-flex flex-column">
                        <div class="text-nowrap mb-1">
                          <router-link
                            :to="`/product/${item.product.id}`"
                            class="text-decoration-none text-cusDarkBrown"
                            @click.prevent="() => getProduct(item.product.id)"
                          >
                            {{ item.product.title }}
                          </router-link>
                        </div>
                        <div class="text-nowrap mb-1">
                          NT$ {{ item.product.price }} / {{ item.product.unit }}
                        </div>
                      </div>
                    </td>
                    <!-- 商品數量 -->
                    <td class="text-nowrap p-2">x {{ item.qty }}</td>
                    <td class="text-nowrap p-2">
                      <div v-if="cart.final_total !== cart.total">
                        <small class="text-success">折扣價：</small>
                        <span></span>
                        NT$ {{ $filters.currency(item.final_total) }}
                      </div>
                      <div v-else>NT$ {{ item.total }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="row row-cols-2 d-flex justify-content-between">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入優惠券代碼"
                    aria-label="Recipient's coupon"
                    aria-describedby="couponInput"
                    v-model="coupon_code"
                  />
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    id="couponInput"
                    @click.prevent="() => addCouponCode()"
                    :disabled="coupon_code === ''"
                  >
                    套用優惠券碼
                  </button>
                </div>
                <div class="py-2 col text-cusGray fw-bold text-start">小計</div>
                <div class="py-2 col text-cusGray fw-bold text-end">
                  NT$ {{ cart.total }}
                </div>
                <div
                  class="py-2 col text-success fw-bold text-start border-bottom"
                >
                  優惠折抵
                </div>
                <div
                  class="py-2 col text-success fw-bold text-end border-bottom"
                >
                  -NT$ {{ cart.final_total - cart.total }}
                </div>
                <div class="col py-2 h5 text-cusDarkBrown fw-bold text-start">
                  總計
                </div>
                <div class="col py-2 h5 text-cusDarkBrown fw-bold text-end">
                  NT$ {{ cart.final_total }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <h4 class="h4 text-center mt-3 mt-md-0">訂單資訊</h4>
          <VForm v-slot="{ errors }" @submit="createOrder">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <VField
                type="email"
                name="email"
                class="form-control"
                id="email"
                :class="{ 'is-invalid': errors['email'] }"
                rules="email|required"
                aria-describedby="emailHelp"
                placeholder="請輸入 Email"
                v-model="userForm.user.email"
              />
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="InputUserName" class="form-label">收件人姓名</label>
              <VField
                type="text"
                name="姓名"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                rules="required"
                id="InputUserName"
                placeholder="請輸入姓名"
                v-model="userForm.user.name"
              />
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="InputUserTel" class="form-label">收件人電話</label>
              <VField
                type="tel"
                name="電話"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                rules="required|min:8|max:10"
                id="InputUserTel"
                placeholder="請輸入電話"
                v-model="userForm.user.tel"
              />
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="InputUserAddress" class="form-label"
                >收件人地址</label
              >
              <VField
                type="text"
                name="地址"
                :class="{ 'is-invalid': errors['地址'] }"
                rules="required"
                class="form-control"
                id="InputUserAddress"
                placeholder="請輸入地址"
                v-model="userForm.user.address"
              />
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3">
              <label for="FormControlTextarea" class="form-label">備註</label>
              <textarea
                class="form-control"
                id="FormControlTextarea"
                placeholder="歡迎留下想對我們說的話!"
                rows="3"
                v-model="userForm.message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary text-white">
                下一步
              </button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" :loader="'dots'"></VueLoading>
</template>

<script>
import cartStore from '@/stores/cartStore';
import { mapState, mapActions } from 'pinia';
import swalMessage from '@/stores/swalMessage';
import loadingStore from '@/stores/loadingStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
const loadingStatus = loadingStore();

export default {
  data() {
    return {
      userForm: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      coupon_code: '',
    };
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(loadingStore, ['isLoading']),
  },
  methods: {
    ...mapActions(swalMessage, ['swalShow']),
    ...mapActions(cartStore, ['getCart']),
    createOrder() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/order`;
      const order = this.userForm;
      loadingStatus.isLoading = true;
      this.$http
        .post(url, { data: order })
        .then((res) => {
          const { message, orderId } = res.data;
          loadingStatus.isLoading = false;
          this.swalShow(`${message}`, 'success', 'toast');
          // 傳送到建立訂單頁面
          this.$router.push(`/checkout/${orderId}`);
        })
        .catch((err) => {
          loadingStatus.isLoading = false;
          this.swalShow(`${err.response.data.message}`, 'error');
        });
    },
    addCouponCode() {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      loadingStatus.isLoading = true;
      this.$http
        .post(url, { data: coupon })
        .then((res) => {
          loadingStatus.isLoading = false;
          // 重新取得購物車
          this.getCart();
          this.swalShow(`${res.data.message}`, 'success', 'toast');
        })
        .catch((err) => {
          loadingStatus.isLoading = false;
          this.swalShow(`${err.response.data.message}`, 'error');
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
