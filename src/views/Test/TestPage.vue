<template>
  <div class="drawing-board-page">
    <DrawingBoard />
  </div>
</template>

<script setup lang="ts">
import DrawingBoard from "@/components/drawingBoard/DrawingBoard.vue";
</script>

<style lang="scss" scoped>
.drawing-board-page {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 50;
}
</style>
