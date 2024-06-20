<template>
  <div class="building-nav-container">
    <div class="building-nav-img">
      <img
        v-for="(item, index) in buildingNavItem"
        :key="nanoid()"
        :src="item.buildingNavImg"
        :alt="item.alt"
        :class="{ 'build-nav-choose-show': index === props.nowBuilding }"
      />
    </div>
    <button @click="move(-1, 'prev-img')" style="z-index: 21">-1</button>
    <button @click="move(1, 'next-img')" style="z-index: 21">+1</button>
  </div>
</template>

<script setup lang="ts">
//房子分布圖
import { nanoid } from "nanoid";

const emits = defineEmits(["select-building"]);

const props = defineProps(["nowBuilding"]);

const buildingNavItem = reactive([
  {
    id: "ab",
    alt: "000-ab",
    buildingNavImg: new URL(
      "@/assets/img/buildings/svg/000-ab.svg",
      import.meta.url
    ).href,
  },
  {
    id: "bc",
    alt: "001-bc",
    buildingNavImg: new URL(
      "@/assets/img/buildings/svg/001-bc.svg",
      import.meta.url
    ).href,
  },
  {
    id: "ca",
    alt: "002-ca",
    buildingNavImg: new URL(
      "@/assets/img/buildings/svg/002-ca.svg",
      import.meta.url
    ).href,
  },
  {
    id: "ca-02",
    alt: "003-ca",
    buildingNavImg: new URL(
      "@/assets/img/buildings/svg/003-ca.svg",
      import.meta.url
    ).href,
  },
]);

const buildIngLength = buildingNavItem.length;

const move = (step: number, trans: string) => {
  //輪播
  let showIndex = (props.nowBuilding + step + buildIngLength) % buildIngLength;
  emits("select-building", showIndex, trans);
};
</script>

<style scoped></style>
