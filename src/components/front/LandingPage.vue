<template>
  <div class="header min-vh-100 position-relative">
    <div
      class="landing position-absolute top-50 start-50 translate-middle text-white p-4"
    >
      <div class="border border-primary p-3 p-lg-5 text-center">
        <h3 class="display-3 fw-bold mb-3 text-nowrap">意猶未盡的滋味</h3>
        <h4 class="mb-5">濃郁的香料，酥脆的餅皮，滿足你的味蕾需求</h4>
        <form class="d-flex bg-white mb-3 p-2 rounded">
          <img
            src="@/assets/img/local_pizza.png"
            class="d-none d-lg-block object-fit me-1"
            alt=""
          />
          <input
            class="form-control me-2"
            type="search"
            placeholder="探索美味：披薩類別"
            aria-label="Search"
          />
          <button class="btn btn-primary text-nowrap text-light" type="submit">
            <span class="my-lg-2 mx-lg-4">搜尋</span>
          </button>
        </form>
        <div class="d-flex align-items-center">
          <span class="d-none d-lg-block">熱門口味： </span>
          <button
            type="button"
            class="btn btn-outline-primary badge rounded-pill me-2 p-2 border-white text-white"
          >
            經典芝士
          </button>
          <button
            type="button"
            class="btn btn-outline-primary badge rounded-pill me-2 p-2 border-white text-white"
          >
            香腸蘑菇
          </button>
          <button
            type="button"
            class="btn btn-outline-primary badge rounded-pill me-2 p-2 border-white text-white"
          >
            火腿蔬菜
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  background-image: url('@/assets/img/landing.png');
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
}
.landing {
  background-color: rgba(0, 0, 0, 0.32);
}
</style>
