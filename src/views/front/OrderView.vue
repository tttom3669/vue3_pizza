<template>
  <div class="bg_texture3">
    <div class="container mb-5">
      <!-- 進度條 -->
      <ProgressBar :stage="2" />
      <!-- 訂單 -->
      <div class="row mt-4">
        <!-- 訂單明細 -->
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">訂單明細</h5>
              <table class="table align-middle" v-if="cart.carts">
                <tbody>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <!-- 商品圖 -->
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        :alt="item.product.title"
                        class="object-fit-cover"
                        height="70"
                        width="70"
                      />
                    </td>
                    <!-- 商品名稱 -->
                    <td class="p-2">
                      <div class="d-flex flex-column">
                        <div class="text-nowrap mb-1">
                          <RouterLink
                            :to="`/product/${item.product.id}`"
                            class="text-decoration-none text-cusDarkBrown"
                            @click.prevent="() => getProduct(item.product.id)"
                          >
                            {{ item.product.title }}
                          </RouterLink>
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
                <!-- 優惠券 -->
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
                <!-- 小計 -->
                <div class="py-2 col text-cusGray fw-bold text-start">小計</div>
                <div class="py-2 col text-cusGray fw-bold text-end">
                  NT$ {{ cart.total }}
                </div>
                <!-- 運費 -->
                <div class="py-2 col text-cusGray fw-bold text-start">運費</div>
                <div class="py-2 col text-cusGray fw-bold text-end">
                  +NT$ {{ deliveryFee }}
                </div>
                <!-- 優惠折抵 -->
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
                <!-- 總計 -->
                <div class="col py-2 h5 text-cusDarkBrown fw-bold text-start">
                  總計
                </div>
                <div class="col py-2 h5 text-cusDarkBrown fw-bold text-end">
                  NT$ {{ cart.final_total + deliveryFee }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 訂單(收件人)資訊 -->
        <div class="col-md-7">
          <h4 class="h4 text-center my-3 mt-md-0">訂單資訊</h4>
          <VForm v-slot="{ errors }" @submit="createOrder">
            <div class="row d-flex flex-row mb-3">
              <div class="col-md-6">
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
                <ErrorMessage name="姓名" class="invalid-feedback" />
              </div>
              <div class="col-md-6">
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
                <ErrorMessage name="電話" class="invalid-feedback" />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
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
                <ErrorMessage name="email" class="invalid-feedback" />
              </div>
              <div class="col-md-6">
                <label for="paymentMethod" class="form-label">付款方式</label>
                <select
                  class="form-control"
                  name="paymentMethod"
                  id="paymentMethod"
                  v-model="userForm.user.paymentMethod"
                >
                  <option value="信用卡">信用卡</option>
                  <option value="現金付款">現金付款</option>
                </select>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
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
                <ErrorMessage name="地址" class="invalid-feedback" />
              </div>
              <div class="col-md-6">
                <label for="pickupMethod" class="form-label">取貨方式</label>
                <select
                  class="form-control"
                  name="pickupMethod"
                  id="pickupMethod"
                  v-model="userForm.user.pickupMethod"
                >
                  <option value="到店自取">到店自取</option>
                  <option value="外送/宅配上門">外送/宅配上門</option>
                </select>
              </div>
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
              <button
                type="submit"
                class="btn btn-primary text-white w-50 w-md-25"
              >
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
import ProgressBar from '@/components/front/ProgressBar.vue';
import { RouterLink } from 'vue-router';

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
          paymentMethod: '信用卡',
          pickupMethod: '到店自取',
          cartDeliveryFee: 0,
        },
        message: '',
      },
      coupon_code: '',
    };
  },
  components: { ProgressBar, RouterLink },
  watch: {
    deliveryFee() {
      this.userForm.user.cartDeliveryFee = this.deliveryFee;
    },
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(loadingStore, ['isLoading']),
    deliveryFee() {
      if (this.userForm.user.pickupMethod === '到店自取') {
        return 0;
      }
      return this.cart.total >= 399 ? 0 : 70;
    },
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
