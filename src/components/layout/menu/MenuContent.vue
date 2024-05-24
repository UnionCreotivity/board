<template>
  <div class="menu-content" :style="menuContentWidth">測試用</div>
</template>

<script setup lang="ts">
const props = defineProps(["toggle"]);

const menuContentWidth = ref({ width: "0%" });

const toggleChild = ref(props.toggle);

watch(
  () => props.toggle,
  (newValue, oldValue) => {
    if (newValue === true) {
      menuContentWidth.value.width = "100%";
    } else {
      menuContentWidth.value.width = "0%";
    }
  }
);
</script>

<style scoped></style>
