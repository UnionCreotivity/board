<template>
  <div>
    <div
      class="imgBox"
      ref="imgBox"
      @click.stop
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      @mouseleave="onMouseUp"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="box" ref="dragTarget">
        <slot></slot>
      </div>
    </div>
    <div
      class="zoom"
      v-if="maxRatio !== 1"
      :style="{ display: 'flex', pointerEvents: 'auto', padding: '0.6vw' }"
    >
      <img src="../../assets/img/floor/001-plus-button.svg" @click="zoomIn" />
      <img src="../../assets/img/floor/002-minus-button.svg" @click="zoomOut" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, defineProps } from "vue";

interface InitPosition {
  x: number;
  y: number;
}

interface Rect {
  width: number;
  height: number;
}

const props = defineProps<{
  maxRatio: number;
  init: InitPosition;
}>();

const scaleRatio = ref(1);
const x = ref(props.maxRatio === 1 ? props.init.x : 0);
const y = ref(props.maxRatio === 1 ? props.init.y : 0);
const flag = ref(false);
const startXY = reactive({ x: 0, y: 0 });
const deltaXY = reactive({ x: 0, y: 0 });
const press = reactive({ x: 0, y: 0 });
const mapRect = reactive<Rect>({ width: 0, height: 0 });
const boxRect = reactive<Rect>({ width: 0, height: 0 });

const dragTarget = ref<HTMLElement | null>(null);
const imgBox = ref<HTMLElement | null>(null);

const zoomIn = (e: MouseEvent) => {
  e.stopPropagation();
  e.preventDefault();
  requestAnimationFrame(() => {
    scaleRatio.value = props.maxRatio;
    x.value = props.init.x;
    y.value = props.init.y;
  });
  console.log(e);
};

const zoomOut = (e: MouseEvent) => {
  e.stopPropagation();
  e.preventDefault();
  scaleRatio.value = 1;
  x.value = 0;
  y.value = 0;
  console.log(2);
};

const onMouseMove = (e: MouseEvent) => {
  e.preventDefault();
  const maxHorizontal = (mapRect.width - boxRect.width) / 2;
  const maxVertical = (mapRect.height - boxRect.height) / 2;

  if (flag.value && scaleRatio.value === props.maxRatio) {
    requestAnimationFrame(() => {
      if (Math.abs(deltaXY.x) > Math.abs(deltaXY.y)) {
        if (deltaXY.x > 0 && x.value <= maxHorizontal) {
          x.value = e.pageX - press.x;
          y.value = e.pageY - press.y;
        } else if (deltaXY.x < 0 && x.value >= -maxHorizontal) {
          x.value = e.pageX - press.x;
          y.value = e.pageY - press.y;
        }
      } else {
        if (deltaXY.y > 0 && y.value <= maxVertical) {
          x.value = e.pageX - press.x;
          y.value = e.pageY - press.y;
        } else if (deltaXY.y < 0 && y.value >= -maxVertical) {
          x.value = e.pageX - press.x;
          y.value = e.pageY - press.y;
        }
      }
      deltaXY.x = e.clientX - startXY.x;
      deltaXY.y = e.clientY - startXY.y;
    });
  }
};

const onMouseDown = (e: MouseEvent) => {
  flag.value = true;
  press.x = e.pageX - (dragTarget.value?.offsetLeft ?? 0);
  press.y = e.pageY - (dragTarget.value?.offsetTop ?? 0);
  startXY.x = e.clientX;
  startXY.y = e.clientY;
  mapRect.width = dragTarget.value?.getBoundingClientRect().width ?? 0;
  mapRect.height = dragTarget.value?.getBoundingClientRect().height ?? 0;
  boxRect.width = imgBox.value?.getBoundingClientRect().width ?? 0;
  boxRect.height = imgBox.value?.getBoundingClientRect().height ?? 0;
};

const onMouseUp = () => {
  flag.value = false;
};

const onTouchStart = (e: TouchEvent) => {
  flag.value = true;
  press.x = e.touches[0].pageX - (dragTarget.value?.offsetLeft ?? 0);
  press.y = e.touches[0].pageY - (dragTarget.value?.offsetTop ?? 0);
  startXY.x = e.touches[0].clientX;
  startXY.y = e.touches[0].clientY;
  mapRect.width = dragTarget.value?.getBoundingClientRect().width ?? 0;
  mapRect.height = dragTarget.value?.getBoundingClientRect().height ?? 0;
  boxRect.width = imgBox.value?.getBoundingClientRect().width ?? 0;
  boxRect.height = imgBox.value?.getBoundingClientRect().height ?? 0;
};

const onTouchMove = (e: TouchEvent) => {
  const maxHorizontal = (mapRect.width - boxRect.width) / 2;
  const maxVertical = (mapRect.height - boxRect.height) / 2;

  if (flag.value && scaleRatio.value === props.maxRatio) {
    requestAnimationFrame(() => {
      if (Math.abs(deltaXY.x) > Math.abs(deltaXY.y)) {
        if (deltaXY.x > 0 && x.value <= maxHorizontal) {
          x.value = e.touches[0].pageX - press.x;
          y.value = e.touches[0].pageY - press.y;
        } else if (deltaXY.x < 0 && x.value >= -maxHorizontal) {
          x.value = e.touches[0].pageX - press.x;
          y.value = e.touches[0].pageY - press.y;
        }
      } else {
        if (deltaXY.y > 0 && y.value <= maxVertical) {
          x.value = e.touches[0].pageX - press.x;
          y.value = e.touches[0].pageY - press.y;
        } else if (deltaXY.y < 0 && y.value >= -maxVertical) {
          x.value = e.touches[0].pageX - press.x;
          y.value = e.touches[0].pageY - press.y;
        }
      }
      deltaXY.x = e.touches[0].clientX - startXY.x;
      deltaXY.y = e.touches[0].clientY - startXY.y;
    });
  }
};

const onTouchEnd = () => {
  flag.value = false;
};

const imgBoxStyle = computed(() => ({
  position: "relative",
  overflow: "hidden",
  pointerEvents: scaleRatio.value === 1 ? "none" : "auto",
}));

const boxStyle = computed(() => ({
  position: "relative",
  width: "100%",
  height: "100%",
  transform: `scale(${scaleRatio.value})`,
  left: `${x.value}px`,
  top: `${y.value}px`,
  transition: flag.value ? "0s" : "0.6s",
  touchAction: "none",
}));

const zoomImgStyle = {
  width: "3vw",
  margin: "0.25vw 0",
  cursor: "pointer",
  pointerEvents: "auto",
};
</script>

<style scoped>
.imgBox {
  position: relative;
  overflow: hidden;
}

.box {
  position: relative;
  width: 100%;
  height: 100%;
}

.zoom {
  display: flex;
  pointer-events: auto;
  padding: 0.6vw;
}

.zoom img {
  width: 3vw;
  margin: 0.25vw 0;
  cursor: pointer;
}
</style>
