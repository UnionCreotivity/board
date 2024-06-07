<template>
  <div class="floor-content-box">
    <div class="title-box">
      <div class="floor-text title-left">{{ props.floor }}</div>
      <div class="title-right">
        <div class="title-zh">平面配置圖</div>
        <div class="title-en">FLOOR PLAN</div>
      </div>
    </div>
    <!-- <div class="img-box">
      <img
        class="floor-img"
        src="../../assets/img/floor/webp/1F_floor@2x.webp"
        alt="1F_floor@2x"
        srcset=""
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/floor/floor.scss";
import FloorContent from "@/components/floor/FloorContent.vue";

const props = defineProps(["floor"]);
</script>

<style lang="scss" scoped></style>
