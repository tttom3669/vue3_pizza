<template>
  <footer class="footer">
    <div class="container">
      <div class="row d-flex justify-content-between border-bottom">
        <div class="col-6">
          <img src="@/assets/img/logo2.png" alt="logo" />
        </div>
        <div class="col-6">
          <div class="text-white text-end p-3">
            <h5 class="text-primary">聯絡資訊</h5>
            <p>YoPizza@mail.com</p>
            <p>03-123-5678</p>
            <p>桃園市隔壁區小陶路123號</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-between align-items-center">
        <div class="col">
          <div class="py-3">
            <button type="button" class="btn btn-sm btn-secondary me-3">
              常見問題
            </button>
            <button type="button" class="btn btn-sm btn-secondary">
              後台管理
            </button>
          </div>
        </div>
        <div class="col">
          <p class="text-white text-center m-0">
            此專題僅供作品展示，非商業用途使用
          </p>
        </div>
        <div class="col">
          <div class="text-white text-end">
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
