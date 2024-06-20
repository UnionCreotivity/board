<template>
  <form class="cal-form" @submit.prevent="handleSubmit">
    <div class="cal-form-container">
      <div class="cal-form-item">
        <label for="cal-year">貸款年限</label>
        <div class="cal-form-input">
          <input
            type="number"
            id="cal-year"
            min="0"
            max="99"
            v-model.number="calFormVal.year"
          />年
        </div>
      </div>
      <div class="cal-form-item">
        <label for="cal-total">總價</label>
        <div class="cal-form-input">
          <input
            type="number"
            id="cal-total"
            min="0"
            max="100000"
            v-model.number="calFormVal.total"
          />萬元
        </div>
      </div>
      <div class="cal-form-item">
        <label for="cal-ratio">年利率</label>
        <div class="cal-form-input">
          <input
            type="number"
            id="cal-ratio"
            step="0.01"
            min="0"
            max="10"
            v-model.number="calFormVal.interestRatio"
          />%
        </div>
      </div>
      <div class="cal-form-item">
        <label for="cal-allow">寬限期</label>
        <div class="cal-form-input">
          <input
            type="number"
            id="cal-allow"
            min="0"
            max="99"
            v-model.number="calFormVal.allowancePeriod"
          />年
        </div>
      </div>
    </div>
    <div class="cal-form-button">
      <button>提交</button>
      <button @click.prevent="clearForm">清除</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useCalculator } from "@/stores/calState";

const store = useCalculator();

const calFormVal = ref({
  year: 0,
  total: 0,
  interestRatio: 0,
  allowancePeriod: 0,
});

const handleSubmit = () => {
  //丟去pinia計算
  store.loanCalc(calFormVal.value);
};
const clearForm = () => {
  //清空輸入的值
  calFormVal.value.year = 0;
  calFormVal.value.total = 0;
  calFormVal.value.interestRatio = 0;
  calFormVal.value.allowancePeriod = 0;
};

watch(
  calFormVal,
  () => {
    //計算機數值監控
    if (calFormVal.value.year > 99) {
      calFormVal.value.year = 99;
    }
    if (calFormVal.value.total > 100000) {
      calFormVal.value.total = 100000;
    }
    if (calFormVal.value.interestRatio > 10) {
      calFormVal.value.interestRatio = 10;
    }
    if (calFormVal.value.allowancePeriod > 99) {
      calFormVal.value.allowancePeriod = 99;
    }
  },
  { deep: true }
);
</script>

<style scoped></style>
