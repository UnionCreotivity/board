<template>
  <div class="floor-page">
    <FloorNav />
    <FloorContent />

    <div class="floor-plan-img">
      <ScaleDrag :maxRatio="2" :init="{ x: 100, y: 100 }">
        <div class="container">
          <div class="anchor-area">
            <img src="../../assets/img/floor/webp/1F@2x.webp" />
          </div>
        </div>
      </ScaleDrag>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/floor/floor.scss";
import FloorNav from "@/components/floor/FloorNav.vue";
import FloorContent from "@/components/floor/FloorContent.vue";
import ScaleDrag from "@/components/floor/ScaleDrag.vue";
</script>

<style lang="scss" scoped></style>
