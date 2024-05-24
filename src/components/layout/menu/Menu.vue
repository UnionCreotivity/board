<template>
  <div id="menu" :style="menuWidth">
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
    <MenuContent :toggle="toggle" />
  </div>
</template>

<script setup lang="ts">
import MenuSvg from "./MenuSvg.vue";
import MenuContent from "./MenuContent.vue";
import "@/assets/scss/layouts/menu.scss";

const toggle = ref(false);

const menuWidth = ref({ width: "0%" });

const showMenu = (val: boolean) => {
  toggle.value = val;
};
watch(
  () => toggle.value,
  (newValue, oldValue) => {
    if (newValue === true) {
      menuWidth.value.width = "100%";
    } else {
      menuWidth.value.width = "0%";
    }
  }
);
// watch(mousePos.value, (newValue, oldValue) => {
//   console.log(newValue);
//   console.log(oldValue);
// });
</script>

<style lang="scss" scoped></style>
