<template>
  <div class="test-page">
    <Calculator></Calculator>
  </div>
</template>

<script setup lang="ts">
import { useSlideStore } from "@/stores/slideState";
import Calculator from "@/components/calculator/CalculatorForm.vue";

const slideStore = useSlideStore();

onMounted(() => {
  slideStore.storeSlideIndex(5);
});
</script>

<style scoped>
.test-page {
  background-color: rgb(51, 18, 10);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
}
</style>
