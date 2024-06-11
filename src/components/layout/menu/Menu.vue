<template>
  <MenuSvg
    dir="left-menu"
    cssVar="--menu-left-pos"
    :toggle="toggle"
    @toggle-menu="showMenu"
  />
  <MenuSvg
    dir="right-menu"
    cssVar="--menu-right-pos"
    :toggle="toggle"
    @toggle-menu="showMenu"
  />
  <MenuContent :toggle="toggle" @toggle-menu="showMenu" />
</template>

<script setup lang="ts">
import MenuSvg from "./MenuSvg.vue";
import MenuContent from "./MenuContent.vue";

const toggle = ref(false);

const showMenu = () => {
  toggle.value = !toggle.value;
};
</script>

<style lang="scss" scoped></style>
