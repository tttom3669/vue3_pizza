<template>
  <div class="mt-5">
      <ul class="nav nav-tabs">
        <li class="nav-item">
            <router-link
                to="/admin/products"
                class="nav-link"
                aria-current="page"
                href="#" >後台產品管理列表
            </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/orders" class="nav-link" href="#">後台訂單管理列表</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/coupons" class="nav-link" href="#">後台優惠券管理列表</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/articles" class="nav-link" href="#">後台文章管理列表</router-link>
        </li>
      </ul>
    </div>
</template>
