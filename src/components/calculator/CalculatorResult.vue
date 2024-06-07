<template>
  <div class="cal-result-container">
    <div class="cal-result-left">
      <div class="cal-result-item">
        <p>訂金:</p>
        <p>{{ deposit }}</p>
        <p>萬元</p>
      </div>
      <div class="cal-result-item">
        <p>簽約金:</p>
        <p>{{ sign }}</p>
        <p>萬元</p>
      </div>
      <div class="cal-result-item">
        <p>1樓底板:</p>
        <p>{{ firstFloor }}</p>
        <p>萬元</p>
      </div>
      <div class="cal-result-item">
        <p>8樓底板:</p>
        <p>{{ eighthFloor }}</p>
        <p>萬元</p>
      </div>
      <div class="cal-result-item">
        <p>16樓底板:</p>
        <p>{{ sixteenThFloor }}</p>
        <p>萬元</p>
      </div>
      <div class="cal-result-item">
        <p>結構完成:</p>
        <p>{{ construction }}</p>
        <p>萬元</p>
      </div>
      <div class="cal-result-item">
        <p>使照申請:</p>
        <p>{{ license }}</p>
        <p>萬元</p>
      </div>
      <div class="cal-result-item">
        <p>交屋款:</p>
        <p>{{ delivery }}</p>
        <p>萬元</p>
      </div>
    </div>
    <div class="cal-result-right">
      <div class="cal-result-item">
        <p>自備款:</p>
        <p>{{ ownMoney }}</p>
        <p>萬元</p>
      </div>
      <div class="cal-result-item">
        <p>貸款:</p>
        <p>{{ loanMoney }}</p>
        <p>萬元</p>
      </div>
      <div class="cal-result-item-toggle" v-if="isAllowance">
        <div class="cal-result-item">
          <p>寬限期:</p>
          <p>{{ allowancePeriodCost }}</p>
          <p>元</p>
        </div>
        <div class="cal-result-item">
          <p>寬限期之後:</p>
          <p>{{ afterAllowancePeriodCost }}</p>
          <p>元</p>
        </div>
      </div>
      <div class="cal-result-item-toggle" v-else>
        <div class="cal-result-item">
          <p>本利攤還:</p>
          <p>{{ monthlyCost }}</p>
          <p>元</p>
        </div>
        <div class="cal-result-item">
          <p>還息金額:</p>
          <p>{{ interestRepayment }}</p>
          <p>元</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCalculator } from "@/stores/calState";

const store = useCalculator();

const {
  deposit,
  sign,
  firstFloor,
  eighthFloor,
  sixteenThFloor,
  construction,
  license,
  delivery,
  ownMoney,
  loanMoney,
  monthlyCost,
  interestRepayment,
  allowancePeriodCost,
  afterAllowancePeriodCost,
} = storeToRefs(store);

const isAllowance = ref(false);

watch(allowancePeriodCost, () => {
  if (Number(allowancePeriodCost.value.replace(",", "")) > 0) {
    isAllowance.value = true;
  } else {
    isAllowance.value = false;
  }
});
</script>

<style scoped></style>
