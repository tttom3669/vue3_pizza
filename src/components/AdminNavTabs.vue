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
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
</template>
