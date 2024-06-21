<template>
  <article class="home-cut home-cut-1">
    <div class="home-cut-1-container">
      <img
        src="../../assets/img/home/pexels-andrea-piacquadio-974911-(1).jpg"
        alt=""
      />
      <div class="home-cut-1-abs">
        <!-- <ColorPicker :color="color" /> -->
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

const color = ref();
</script>

<style lang="scss" scoped></style>
