<template>
  <article class="move-back" :style="event" @click="moveBackClick"></article>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

const event = ref<CSSProperties>({ pointerEvents: "none" });

const route = useRoute();

const router = useRouter();

const moveBackClick = () => {
  router.push("/");
};

watchEffect(() => {
  let path = route.path;
  if (path === "/") {
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
