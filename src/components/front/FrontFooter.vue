<template>
  <footer class="footer py-5 py-md-2">
    <div class="container">
      <div class="row d-flex justify-content-between border-bottom">
        <div class="col-md-6 text-center text-md-start">
          <img src="@/assets/img/logo2.png" class="float-center" alt="logo" />
        </div>
        <div class="col-md-6">
          <div class="text-white text-center text-md-end p-3">
            <h5 class="text-primary">聯絡資訊</h5>
            <p>YoPizza@mail.com</p>
            <p>03-123-5678</p>
            <p>桃園市隔壁區小陶路123號</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-between align-items-center flex-column flex-md-row g-1">
        <div class="col text-center text-md-start">
          <div class="py-3">
            <router-link class="btn btn-sm btn-secondary me-3" to="/"
            >常見問題</router-link>
            <router-link class="btn btn-sm btn-secondary" to="/login">
              後台管理</router-link>
          </div>
        </div>
        <div class="col order-md-2 order-3">
          <p class="text-white text-center m-0">
            此專題僅供作品展示，非商業用途使用
          </p>
        </div>
        <div class="col order-2">
          <div class="text-white text-center text-md-end mb-1">
            <i class="bi bi-facebook me-3"></i>
            <i class="bi bi-instagram me-3"></i>
            <i class="bi bi-github me-3"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
.footer{
  background-image: url('@/assets/img/footer.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
