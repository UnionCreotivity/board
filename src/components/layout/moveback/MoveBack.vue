<template>
  <article class="move-back" :style="event" @click="moveBackClick"></article>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

const event = ref<CSSProperties>({ pointerEvents: "none" });

const route = useRoute();

const router = useRouter();

//選定特定路徑
const innerPage = ["/floor", "/floor3d", "/"];

const moveBackClick = () => {
  //符合就回上一頁 不符合就回首頁
  if (innerPage.includes(route.path)) {
    router.go(-1);
  } else {
    router.push("/");
  }
};

watchEffect(() => {
  //在首頁就不會有點擊事件
  let path = route.path;
  if (path === "/" || path.includes("floor3d")) {
    event.value.pointerEvents = "none";
  } else {
    event.value.pointerEvents = "auto";
  }
});
</script>

<style scoped>
.move-back {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 20;
  left: 0px;
  top: 0px;
  pointer-events: none;
}
</style>
