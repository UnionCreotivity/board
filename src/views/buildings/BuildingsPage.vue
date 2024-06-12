<template>
  <article id="building">
    <div class="building-container">
      <BuildingChoose
        :nowBuilding="nowBuildingIndex"
        :prevBuilding="prevBuildingIndex"
        :nextBuilding="nextBuildingIndex"
        :imgTransition="imgTransition"
      />
      <BuildingNav
        :nowBuilding="nowBuildingIndex"
        @select-building="chooseBuilding"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import BuildingChoose from "@/components/buildings/BuildingChoose.vue";
import BuildingNav from "@/components/buildings/BuildingNav.vue";

const nowBuildingIndex = ref(0);
const prevBuildingIndex = ref(3);
const nextBuildingIndex = ref(1);

const imgTransition = ref("");

const chooseBuilding = (val: number, trans: string) => {
  imgTransition.value = trans;
  nowBuildingIndex.value = val;
  prevBuildingIndex.value = (val - 1 + 4) % 4;
  nextBuildingIndex.value = (val + 1 + 4) % 4;
};
</script>

<style lang="scss" scoped></style>
