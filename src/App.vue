<template>
  <!-- <MoveBack /> -->
  <Menu />
  <router-view v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path"
    /></Transition>
  </router-view>
</template>

<script setup lang="ts">
import MoveBack from "./components/layout/moveback/MoveBack.vue";
import Menu from "./components/layout/menu/Menu.vue";
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.75s;
}
</style>
