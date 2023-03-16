<template>
  <div class="container">
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
              text-white translate-middle btn btn-sm btn-secondary rounded-pill"
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
          <span class="text-secondary">填寫資料</span>
          <span class="text-secondary me-n1">完成訂單</span>
        </div>
      </div>
    </div>
    <div class="mt-4 mb-5">
      <!-- 購物車列表 -->
      <table class="table align-middle">
        <thead class="table-primary">
          <tr>
            <th></th>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th class="text-center">單價</th>
            <th class="text-center">小計</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm">
                  <i class="fas fa-spinner fa-pulse"></i>
                  x
                </button>
              </td>
              <td>
                <img
                  :src="item.product.imageUrl"
                  alt=""
                  class="object-fit-cover"
                  height="70"
                  width="70"
                />
              </td>
              <td>
                <!-- 商品名稱 -->
                {{ item.product.title }}
                <!-- <div class="text-success">
                                        已套用優惠券
                                    </div> -->
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <!-- 商品數量/單位 -->
                  <div class="input-group mb-3">
                    <button type="button" class="
                    input-group-text" id="basic-addon1">
                      <i class="bi bi-dash"></i>
                    </button>
                    <input type="text" class="form-control text-center"
                    v-model.number="item.qty">
                    <button type="button" class="
                     input-group-text" id="basic-addon2">
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                  <!-- <div class="d-flex justify-content-between mb-3">
                    <button type="button" class="btn btn-sm btn-primary text-white">-</button>
                    <input min="1" type="number" class="form-control text-center"
                    readonly v-model.number="item.qty">
                    <button type="button" class="btn btn-sm btn-primary text-white">+</button>
                  </div> -->
                  <!-- <div class="input-group mb-3">
                    <input min="1" type="number" class="form-control"
                    v-model.number="item.qty"
                    />
                    <span class="input-group-text" id="basic-addon2">
                      {{ item.product.unit }}
                    </span>
                  </div> -->
                </div>
              </td>
              <td class="text-center">{{ item.product.price }}</td>
              <td class="text-end">
                <!-- <small class="text-success">折扣價：</small> -->
                {{ item.total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2"><button class="btn btn-outline-danger" type="button">清空購物車</button></td>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ cart.total }}</td>
          </tr>
          <tr>
            <td colspan="5" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- <div class="my-5 row justify-content-center">
      <v-form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="onSubmit"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <v-field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="user.email"
          ></v-field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <v-field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="user.name"
          ></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <v-field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            :rules="isPhone"
            v-model="user.tel"
          ></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <v-field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="user.address"
          ></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="user.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </v-form>
    </div> -->
  </div>
  <VueLoading v-model:active="isLoading"></VueLoading>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import loadingStore from '@/stores/loadingStore';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(loadingStore, ['isLoading']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
  },
  mounted() {
    this.getCart();
  },
};
</script>
