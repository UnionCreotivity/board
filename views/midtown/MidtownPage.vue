<template>
  <div class="test-page">換頁測試用(mid)</div>
</template>

<script setup lang="ts">
import { useSlideStore } from "@/stores/slideState";

const slideStore = useSlideStore();

onMounted(() => {
  slideStore.storeSlideIndex(2);
});
</script>

<style scoped>
.test-page {
  background-color: rgb(42, 61, 165);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
}
</style>
