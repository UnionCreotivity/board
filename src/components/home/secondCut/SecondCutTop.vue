<template>
  <div class="home-cut-2-top-img" v-show="showDisplay">
    <img :src="props.imgSrc" alt="" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["imgSrc", "name", "currentTag"]);

const showDisplay = computed(() => {
  return props.name === props.currentTag ? true : false;
});
</script>

<style lang="scss" scoped></style>
