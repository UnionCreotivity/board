<template>
  <div
    class="imgBox"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="box" ref="dragTarget" :style="[imgBoxStyle, boxStyle]">
      <slot></slot>
    </div>
  </div>
  <div
    class="zoom"
    v-if="maxRatio !== 1"
    :style="{ display: 'flex', pointerEvents: 'auto', padding: '0.6vw' }"
  >
    <input
      type="range"
      name="scaleImg"
      id="scaleImg"
      min="1"
      max="2"
      :step="0.01"
      v-model="scaleRatio"
    />
    <img src="../../assets/img/floor/001-plus-button.svg" @click="zoomIn" />
    <img src="../../assets/img/floor/002-minus-button.svg" @click="zoomOut" />
  </div>
</template>

<script setup lang="ts">
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
const x = ref(0);
const y = ref(0);
const flag = ref(false);
const startXY = reactive({ x: 0, y: 0 });
const deltaXY = reactive({ x: 0, y: 0 });
const press = reactive({ x: 0, y: 0 });
const mapRect = reactive({ width: 0, height: 0 });
const boxRect = reactive({ width: 0, height: 0 });

const dragTarget = ref<HTMLElement | null>(null);
const imgBox = ref<HTMLElement | null>(null);

const zoomIn = (e: MouseEvent) => {
  e.stopPropagation();
  e.preventDefault();
  if (scaleRatio.value < props.maxRatio) {
    scaleRatio.value += 0.3;
    // scaleRatio.value = Math.min(scaleRatio.value + 0.1, props.maxRatio);
  }
};

const zoomOut = (e: MouseEvent) => {
  e.stopPropagation();
  e.preventDefault();
  if (scaleRatio.value > 1) {
    scaleRatio.value -= 0.3;
  }
  if (scaleRatio.value < 1.5) {
    x.value = 0;
    y.value = 0;
  }
};

const onMouseMove = (e: MouseEvent) => {
  const maxHorizontal = (mapRect.width - boxRect.width) / 2;
  const maxVertical = (mapRect.height - boxRect.height) / 2;
  if (flag.value && scaleRatio.value >= 1.3) {
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
  e.preventDefault();
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

  if (flag.value && scaleRatio.value >= 1.3) {
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

const imgBoxStyle = computed(() => {
  return {
    transform: `scale(${scaleRatio.value})`,
    transformOrigin: "center",
  };
});

const boxStyle = computed(() => ({
  position: "relative" as const,
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

watch(scaleRatio, () => {
  scaleRatio.value = Number(scaleRatio.value);
  if (scaleRatio.value >= 2) {
    scaleRatio.value = 2;
  } else if (scaleRatio.value < 1.3) {
    x.value = 0;
    y.value = 0;
  } else if (scaleRatio.value <= 1) {
    scaleRatio.value = 1;
  }
});
</script>

<style scoped>
.imgBox {
  position: relative;
  overflow: hidden;
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
