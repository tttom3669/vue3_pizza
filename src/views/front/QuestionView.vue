<template>
  <div class="bg_texture3" style="min-height: 600px">
    <div class="container">
      <!-- 常見問題標題 -->
      <FrontHeading :title="'常見問題'" class="mt-3"/>
       <!-- 常見問題問題集 -->
      <div class="accordion mt-3" id="accordionQuestion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span class="fw-bold text-cusBrown me-2">Q1.</span>
              門市有現貨嗎？
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionQuestion"
          >
            <div class="accordion-body">
              餐點都是現點現做，建議提前 30~60 分鐘預訂餐點，以免久候。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span class="fw-bold text-cusBrown me-2">Q2.</span
              >外送是否需要加收外送費
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionQuestion"
          >
            <div class="accordion-body">
              消費金額滿$399以上免收外送費，未滿$399需加收外送費$70。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span class="fw-bold text-cusBrown me-2">Q3.</span>有哪些付款方式?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionQuestion"
          >
            <div class="accordion-body">
              目前提供「現金付款」與「信用卡」兩種方式。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <span class="fw-bold text-cusBrown me-2">Q4.</span>有優惠折扣嗎？
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionQuestion"
          >
            <div class="accordion-body">
              關注最新消息，可以取得限時優惠折扣碼喔!
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <span class="fw-bold text-cusBrown me-2">Q5.</span>可以取消訂單嗎?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionQuestion"
          >
            <div class="accordion-body">
              在該筆訂單尚未製作之前皆可。請消費者以電話方式聯絡門市，由門市端取消訂單。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrontHeading from '@/components/front/FrontHeading.vue';

export default {
  components: { FrontHeading },
};
</script>
