<template>
  <div class="menu-contain-col">
    <div class="menu-contain-col-title">{{ props.name }}</div>
    <router-link
      v-for="item in props.content"
      :to="item.path"
      @click="toggleMenu"
    >
      <div class="menu-contain-col-link">
        {{ item.pathName }}
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["content", "name", "toggle"]);

const emits = defineEmits(["link-toggle"]);

const toggleMenu = () => {
  //MenuContent的emits,值會先傳到MenuContent,最終會回傳到Menu
  emits("link-toggle", !props.toggle);
};
</script>

<style scoped></style>
