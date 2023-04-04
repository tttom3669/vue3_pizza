<template>
  <footer class="footer py-5 py-md-2">
    <div class="container">
      <div
        class="row d-flex justify-content-between border-bottom border-cusBrown"
      >
        <div class="col-md-6 text-center text-md-start p-0">
          <img src="@/assets/img/logo2.png" class="float-center" alt="logo" />
        </div>
        <div class="col-md-6 p-0">
          <div class="text-white text-center text-md-end py-3">
            <h5 class="text-primary">聯絡資訊</h5>
            <p>
              <a
                href="mailto:YoPizza@mail.com"
                class="text-decoration-none linkStyle"
                >YoPizza@mail.com</a
              >
            </p>
            <p>
              <a
                href="tel:+886-2-3123-5678。"
                class="text-decoration-none linkStyle"
                >03-123-5678</a
              >
            </p>
            <p>桃園市隔壁區小陶路123號</p>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-between align-items-center flex-column flex-md-row"
      >
        <div class="col text-center text-md-start p-0">
          <div class="py-3">
            <RouterLink
              class="btn btn-sm btn-opacity text-white"
              type="button"
              to="/question"
              >常見問題</RouterLink
            >
            <!-- <RouterLink class="btn btn-sm btn-opacity text-white" type="button" to="/login">
              後台管理</RouterLink
            > -->
          </div>
        </div>
        <div class="col order-md-2 order-3">
          <p class="text-white text-center m-0">
            此專題僅供作品展示，非商業用途使用
          </p>
        </div>
        <div class="col order-2 p-0">
          <div class="text-white text-center text-md-end mb-1">
            <a href="#" class="linkStyle"
              ><i class="bi bi-facebook ms-3"></i
            ></a>
            <a href="#" class="linkStyle"
              ><i class="bi bi-instagram ms-3"></i
            ></a>
            <a
              href="https://github.com/tttom3669/vue3_pizza"
              target="_blank"
              class="linkStyle"
            >
              <i class="bi bi-github ms-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
.footer {
  background-image: url('@/assets/img/footer.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.linkStyle {
  color: white;
}
.linkStyle:hover {
  color: var(--bs-primary);
}
.btn-opacity {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
};
</script>
