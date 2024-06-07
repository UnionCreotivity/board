<template>
  <MoveBack />
  <Menu />
  <router-view v-slot="{ Component, route }">
    <FadeIn> <component :is="Component" :key="route.path" /></FadeIn>
  </router-view>
</template>

<script setup lang="ts">
import FadeIn from "@/components/transition/FadeIn.vue";
import MoveBack from "./components/layout/moveback/MoveBack.vue";
import Menu from "./components/layout/menu/Menu.vue";
</script>

<style scoped></style>
