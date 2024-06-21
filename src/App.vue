<template>
  <MoveBack />
  <Menu />
  <DrawingBoard />
  <button class="canvasClose" @click="closeCanvas">開啟畫布</button>
  <router-view v-slot="{ Component, route }">
    <FadeIn> <component :is="Component" :key="route.path" /></FadeIn>
  </router-view>
</template>

<script setup lang="ts">
import { useDrawingStore } from "./stores/drawingState";
import FadeIn from "@/components/transition/FadeIn.vue";
import MoveBack from "./components/layout/moveback/MoveBack.vue";
import Menu from "./components/layout/menu/Menu.vue";
import DrawingBoard from "./components/drawingBoard/DrawingBoard.vue";

const store = useDrawingStore();

const closeCanvas = () => {
  store.toggleCanvas(true);
};
</script>

<style lang="scss" scoped>
.canvasClose {
  position: absolute;
  width: 3vw;
  height: 3vw;
  z-index: 51;
}
</style>
