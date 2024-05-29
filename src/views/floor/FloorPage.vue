<template>
  <div class="floor-page">
    <FloorContent />
    <div class="floor-main">
      <FloorNav />
      <div class="floor-plan-img">
        <ScaleDrag :maxRatio="2" :init="{ x: 100, y: 100 }">
          <div class="container">
            <div class="anchor-area">
              <img
                class="imgBox"
                src="../../assets/img/floor/webp/1F@2x.webp"
              />
            </div>
          </div>
        </ScaleDrag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@/assets/scss/floor/floor.scss";
import FloorNav from "@/components/floor/FloorNav.vue";
import FloorContent from "@/components/floor/FloorContent.vue";
import ScaleDrag from "@/components/floor/ScaleDrag.vue";

const imgBox = ref<HTMLImageElement | null>(null);

onMounted(() => {
  if (imgBox.value) {
    // 可以在這裡對 imgBox 進行操作，例如初始化等
  }
});
</script>
