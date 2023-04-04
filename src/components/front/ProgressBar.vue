<template>
  <div class="row d-flex justify-content-center mt-3">
    <div class="col-12 col-md-6">
      <div class="col">
        <div class="position-relative m-4">
          <div class="progress" style="height: 1px">
            <div
              class="progress-bar"
              role="progressbar"
              :class="{'barWidth1':stage === 1,'barWidth2':stage === 2,'barWidth3':stage === 3,}"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div
            class="position-absolute top-0 start-0
            text-white translate-middle btn btn-sm rounded-pill"
            style="width: 2rem; height: 2rem"
            :class="{ 'btn-primary': stage >= 1, 'btn-secondary': stage < 1 }"
          >
            1
          </div>
          <div
            class="position-absolute top-0 start-50
            text-white translate-middle btn btn-sm rounded-pill"
            style="width: 2rem; height: 2rem"
            :class="{ 'btn-primary': stage >= 2, 'btn-secondary': stage < 2 }"
          >
            2
          </div>
          <div
            class="position-absolute top-0 start-100
            text-white translate-middle btn btn-sm  rounded-pill"
            style="width: 2rem; height: 2rem"
            :class="{ 'btn-primary': stage >= 3, 'btn-secondary': stage < 3 }"
          >
            3
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-between fw-bold">
        <span
          class="ms-n1"
          :class="{ 'text-primary': stage >= 1, 'text-secondary': stage < 1 }"
        >
          確認購買
        </span>
        <span :class="{ 'text-primary': stage >= 2, 'text-secondary': stage < 2 }"
          >填寫資料</span
        >
        <span
          class="me-n1"
          :class="{ 'text-primary': stage >= 3, 'text-secondary': stage < 3 }"
          >完成訂單</span
        >
      </div>
    </div>
  </div>
</template>

<style>
.barWidth1{
  width: 0%
}
.barWidth2{
  width: 50%
}
.barWidth3{
  width: 100%
}

</style>

<script>
export default {
  props: ['stage'],
};
</script>
