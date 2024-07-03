<template>
  <div class="draw-board-box">
    <div class="draw-board-box-container" v-show="store.drawingToggle">
      <canvas
        ref="canvasRef"
        @mousedown="mouseDownFc"
        @mouseup="mouseUpFc"
        @touchstart="mouseDownFc"
        @touchend="mouseUpFc"
      />
      <div class="draw-board-toolbox">
        <div class="draw-board-toolbox-brush">
          <div
            class="draw-board-toolbox-brush-box brush-xs"
            :class="{ 'brush-box-active': 2 === brushWidth }"
            @click="setBrushWidth(2)"
          ></div>
          <div
            class="draw-board-toolbox-brush-box brush-s"
            :class="{ 'brush-box-active': 4.5 === brushWidth }"
            @click="setBrushWidth(4.5)"
          ></div>
          <div
            class="draw-board-toolbox-brush-box brush-m"
            :class="{ 'brush-box-active': 7 === brushWidth }"
            @click="setBrushWidth(7)"
          ></div>
          <div
            class="draw-board-toolbox-brush-box brush-l"
            :class="{ 'brush-box-active': 10 === brushWidth }"
            @click="setBrushWidth(10)"
          ></div>
          <div
            class="draw-board-toolbox-brush-box brush-xl"
            :class="{ 'brush-box-active': 13 === brushWidth }"
            @click="setBrushWidth(13)"
          ></div>
        </div>
        <div class="draw-board-toolbox-color">
          <div
            class="draw-board-toolbox-color-box red"
            :class="{ 'color-box-active': '#ff0000' === color }"
            @click="setColor('#ff0000')"
          ></div>
          <div
            class="draw-board-toolbox-color-box green"
            :class="{ 'color-box-active': '#008000' === color }"
            @click="setColor('#008000')"
          ></div>
          <div
            class="draw-board-toolbox-color-box blue"
            :class="{ 'color-box-active': '#0000FF' === color }"
            @click="setColor('#0000FF')"
          ></div>
          <div
            class="draw-board-toolbox-color-box yellow"
            :class="{ 'color-box-active': '##FFFF00' === color }"
            @click="setColor('#FFFF00')"
          ></div>
          <div
            class="draw-board-toolbox-color-box purple"
            :class="{ 'color-box-active': '#800080' === color }"
            @click="setColor('#800080')"
          ></div>
          <div
            class="draw-board-toolbox-color-box black"
            :class="{ 'color-box-active': '#000000' === color }"
            @click="setColor('#000000')"
          ></div>
        </div>
        <div class="draw-board-toolbox-clear" @click="clearBoard">清除</div>
        <div class="draw-board-toolbox-close" @click="closeBoard">關掉</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDrawingStore } from "@/stores/drawingState";

const canvasRef = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);

const store = useDrawingStore();

//上一個滑鼠位置
const mX = ref();
const mY = ref();

//現在滑鼠位置
const nX = ref();
const nY = ref();

//畫面縮放造成的偏移量
const scaleX = ref();
const scaleY = ref();

//是否開始繪圖
const mouseDown = ref(false);

//顏色
const color = ref("#000000");

//筆觸粗度
const brushWidth = ref(7);

//滑鼠按下
const mouseDownFc = (e: MouseEvent | TouchEvent) => {
  mouseDown.value = true;
  if (!mouseDown.value) return;
  getMousePosition(e);
  draw(e);
};

//滑鼠放開
const mouseUpFc = () => {
  mouseDown.value = false;
};

//設定筆觸大小
const setBrushWidth = (val: number) => {
  brushWidth.value = val;
};

//設定顏色
const setColor = (val: string) => {
  color.value = val;
};

//設定滑鼠位置
const getMousePosition = (e: MouseEvent | TouchEvent) => {
  if (!mouseDown.value || !canvasRef.value) return;
  if (e instanceof MouseEvent) {
    nX.value = e.clientX;
    nY.value = e.clientY;
  } else if (e instanceof TouchEvent) {
    nX.value = e.touches[0].clientX;
    nY.value = e.touches[0].clientY;
  }
  let canvasPosition = canvasRef.value?.getBoundingClientRect();
  scaleX.value = canvasRef.value.width / canvasPosition?.width;
  scaleY.value = canvasRef.value.height / canvasPosition?.height;
  mX.value = nX.value * scaleX.value;
  mY.value = nY.value * scaleY.value;
};

//繪製
const draw = (e: MouseEvent | TouchEvent) => {
  if (!ctx.value) return;
  if (e instanceof MouseEvent) {
    nX.value = e.clientX;
    nY.value = e.clientY;
  } else if (e instanceof TouchEvent) {
    nX.value = e.touches[0].clientX;
    nY.value = e.touches[0].clientY;
  }
  ctx.value.save();
  ctx.value.beginPath();
  ctx.value.strokeStyle = color.value;
  ctx.value.lineCap = "round";
  ctx.value.lineJoin = "round";
  ctx.value.lineWidth = brushWidth.value;
  ctx.value.moveTo(mX.value, mY.value);
  ctx.value.lineTo(nX.value * scaleX.value, nY.value * scaleY.value);
  ctx.value.stroke();
  ctx.value.restore();
};

//清除畫布
const clearBoard = () => {
  if (!canvasRef.value) return;
  ctx.value?.clearRect(0, 0, canvasRef.value?.width, canvasRef.value?.height);
  canvasRef.value.width = window.innerWidth;
  canvasRef.value.height = window.innerHeight;
};

//關掉畫布
const closeBoard = () => {
  if (!canvasRef.value) return;
  ctx.value?.clearRect(0, 0, canvasRef.value?.width, canvasRef.value?.height);
  canvasRef.value.width = window.innerWidth;
  canvasRef.value.height = window.innerHeight;
  store.toggleCanvas(false);
};

onMounted(() => {
  if (canvasRef.value) {
    ctx.value = canvasRef.value.getContext("2d");
    canvasRef.value.width = window.innerWidth;
    canvasRef.value.height = window.innerHeight;

    if (!ctx.value) return;
    window.addEventListener("mousemove", function (e) {
      if (!mouseDown.value) return;
      draw(e);
      getMousePosition(e);
    });
    window.addEventListener("touchmove", function (e) {
      if (!mouseDown.value) return;
      draw(e);
      getMousePosition(e);
    });
  }
});

// watch(drawingToggle,()=>{
//     drawingToggle.value=
// })
</script>

<style lang="scss" scoped>
.canvas {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.draw-board-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
}
.draw-board-box-container {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 50;
}
.draw-board-toolbox {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 5%;
  bottom: 5%;
  background-color: red;
  user-select: none;
  gap: 2vw;
  padding: 0.5vw 1vw;
}
.draw-board-toolbox-brush {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
}

.draw-board-toolbox-brush-box {
  position: relative;
  width: 1vw;
  height: 1vw;
  background-color: white;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 0.2vw;
    height: 0.2vw;
    border-radius: 50%;
    background-color: black;
  }
}

.brush-xs {
  &::after {
    width: 0.16vw;
    height: 0.16vw;
    border-radius: 50%;
    background-color: black;
  }
}
.brush-s {
  &::after {
    width: 0.32vw;
    height: 0.32vw;
    border-radius: 50%;
    background-color: black;
  }
}
.brush-m {
  &::after {
    width: 0.48vw;
    height: 0.48vw;
    border-radius: 50%;
    background-color: black;
  }
}
.brush-l {
  &::after {
    width: 0.64vw;
    height: 0.64vw;
    border-radius: 50%;
    background-color: black;
  }
}
.brush-xl {
  &::after {
    width: 0.8vw;
    height: 0.8vw;
    border-radius: 50%;
    background-color: black;
  }
}

.brush-box-active {
  background-color: rgba(0, 0, 0, 0.25);
}

.draw-board-toolbox-color {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
}
.draw-board-toolbox-color-box {
  position: relative;
  width: 1vw;
  height: 1vw;
  background-color: white;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 0.7vw;
    height: 0.7vw;
    background-color: black;
  }
}
.red {
  &::after {
    background-color: red;
  }
}
.green {
  &::after {
    background-color: green;
  }
}
.blue {
  &::after {
    background-color: blue;
  }
}
.yellow {
  &::after {
    background-color: yellow;
  }
}
.purple {
  &::after {
    background-color: purple;
  }
}
.black {
  &::after {
    background-color: black;
  }
}
.color-box-active {
  background-color: rgba(0, 0, 0, 0.25);
}
.draw-board-toolbox-clear {
  cursor: pointer;
  background-color: white;
  font-size: 0.8vw;
  padding: 0.25vw 1vw;
}
.draw-board-toolbox-close {
  cursor: pointer;
  background-color: white;
  font-size: 0.8vw;
  padding: 0.25vw 1vw;
}
</style>
