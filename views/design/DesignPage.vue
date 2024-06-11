<template>
  <div class="test-page">換頁測試用(design)</div>
</template>

<script setup lang="ts">
import { useSlideStore } from "@/stores/slideState";

const slideStore = useSlideStore();

onMounted(() => {
  slideStore.storeSlideIndex(3);
});
</script>

<style scoped>
.test-page {
  background-color: rgb(2, 20, 5);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
}
</style>
