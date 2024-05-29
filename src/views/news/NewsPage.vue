<template>
  <div class="test-page">換頁測試用(news)</div>
</template>

<script setup lang="ts">
import { useSlideStore } from "@/stores/slideState";

const slideStore = useSlideStore();

onMounted(() => {
  slideStore.storeSlideIndex(5);
  console.log(slideStore.slideState);
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
