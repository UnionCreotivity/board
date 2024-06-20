<template>
  <div class="floor3D-nav">
    <div class="floor3D-nav-container">
      <div
        class="prev-arrow-box arrow-box"
        @mousedown.prevent="handleToTop"
        @mouseup.prevent="handleStop"
        @touchstart="handleToTop"
        @touchend="handleStop"
      >
        <img
          src="../../assets/img/floor/choose/000-arrow-top.svg"
          class="arrow-top"
        />
      </div>

      <ul ref="floor3DNav">
        <li
          v-for="item in floorData"
          :key="nanoid()"
          @click="handleFloor(item.type)"
          :style="
            props.mainType == item.type
              ? 'background-color:rgba(194,164,87,0.45)'
              : ''
          "
        >
          {{ item.floor }}
        </li>
      </ul>

      <div
        class="next-arrow-box arrow-box"
        @mousedown.prevent="handleToBottom"
        @mouseup.prevent="handleStop"
        @touchstart="handleToBottom"
        @touchend="handleStop"
      >
        <img
          src="../../assets/img/floor/choose/001-arrow-bottom.svg"
          class="arrow-bottom"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Floor3DItem {
  floor: string;
  type: string;
}

import { nanoid } from "nanoid";
import { floor3D_Data } from "./data/Floor3D-Data";

const props = defineProps(["mainType"]);

const emits = defineEmits(["handel-main-type"]);

let floorData = ref<Floor3DItem[]>([]);

const floor3DNav = ref<HTMLElement | null>(null);

const scrollState = ref(false);

const route = useRoute();

// 向上滾
const handleToTop = () => {
  scrollState.value = true;

  if (!floor3DNav.value) return;
  let currentScrollTop = floor3DNav.value.scrollTop;
  let scrollHeight = floor3DNav.value.scrollHeight;
  let clientHeight = floor3DNav.value.clientHeight;

  let mainHeight = scrollHeight - clientHeight;

  const animate = () => {
    if (!floor3DNav.value) return;
    if (!scrollState.value) return;
    currentScrollTop -= 15;
    floor3DNav.value.scrollTop = currentScrollTop;
    //超過臨界點停止
    if (floor3DNav.value.scrollTop > mainHeight * -1) {
      requestAnimationFrame(animate);
    }
  };
  animate();
};

//向下滾
const handleToBottom = () => {
  scrollState.value = true;

  if (!floor3DNav.value) return;
  let currentScrollTop = floor3DNav.value.scrollTop;

  const animate = () => {
    if (!scrollState.value) return;
    if (!floor3DNav.value) return;
    currentScrollTop += 15;
    floor3DNav.value.scrollTop = currentScrollTop;
    //超過臨界點停止
    if (currentScrollTop < 0) {
      requestAnimationFrame(animate);
    }
  };
  animate();
};

const handleStop = () => {
  scrollState.value = false;
};

const handleFloor = (floor: string) => {
  //選擇樓層
  emits("handel-main-type", floor);
};

onMounted(() => {
  //透過網址的參數來決定要渲染哪棟房子
  const query = route.query;
  const buildingName = query.building;

  const filterBuilding = floor3D_Data.filter(
    (item) => item.building === buildingName
  );

  floorData.value = filterBuilding[0].content;
});
</script>

<style scoped></style>
