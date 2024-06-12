<template>
  <div class="building-choose-container">
    <TransitionGroup :name="props.imgTransition">
      <div
        class="building-choose-img"
        v-for="(item, index) in buildData"
        :key="nanoid()"
      >
        <img
          v-show="index === props.nowBuilding"
          :src="item.buildingImg"
          :alt="item.alt"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";

const props = defineProps([
  "nowBuilding",
  "prevBuilding",
  "nextBuilding",
  "imgTransition",
]);

const buildData = reactive([
  {
    id: 0,
    alt: "000-ab",
    buildingImg: new URL("@/assets/img/buildings/000-ab.webp", import.meta.url)
      .href,
  },
  {
    id: 1,
    alt: "001-bc",
    buildingImg: new URL("@/assets/img/buildings/001-bc.webp", import.meta.url)
      .href,
  },
  {
    id: 2,
    alt: "002-ca",
    buildingImg: new URL("@/assets/img/buildings/002-ca.webp", import.meta.url)
      .href,
  },
  {
    id: 3,
    alt: "003-ca",
    buildingImg: new URL("@/assets/img/buildings/003-ca.webp", import.meta.url)
      .href,
  },
]);
</script>

<style lang="scss">
.prev-img-enter-active,
.prev-img-leave-active {
  transition: opacity 0.6s, transform 0.8s;
}
.next-img-enter-active,
.next-img-leave-active {
  transition: opacity 0.6s, transform 0.8s;
}

// 輪播 1 next

.next-img-enter-from {
  opacity: 0;
  //   transform: rotateY(-75deg) translateX(90%);
  transform: scale(0.8);
}

.next-img-leave-to {
  opacity: 0;
  //   transform: rotateY(75deg) translateX(-80%);
  transform: scale(1.2);
}

// 輪播 -1 prev
.prev-img-enter-from {
  opacity: 0;
  //   transform: rotateY(-75deg) translateX(-80%);
  transform: scale(1.2);
}
.prev-img-leave-to {
  opacity: 0;
  //   transform: rotateY(75deg) translateX(90%);
  transform: scale(0.8);
}
</style>
