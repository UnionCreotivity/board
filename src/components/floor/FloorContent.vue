<template>
  <div class="floor-content-box">
    <div class="title-box">
      <div class="floor-text title-left">{{ props.floor }}</div>
      <div class="title-right">
        <div class="title-zh">平面配置圖</div>
        <div class="title-en">FLOOR PLAN</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/floor/floor.scss";
const props = defineProps(["floor"]);
</script>

<style lang="scss" scoped></style>
