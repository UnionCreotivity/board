<template>
  <div id="floor3D-page">
    <div class="floor3D-main">
      <Floor3DNav />
      <Floor3DBuilding />
    </div>
  </div>
</template>

<script setup lang="ts">
import Floor3DBuilding from "@/components/floor3D/Floor3DBuilding.vue";
import Floor3DNav from "@/components/floor3D/Floor3DNav.vue";

const mainType = ref("");
</script>

<style scoped></style>
