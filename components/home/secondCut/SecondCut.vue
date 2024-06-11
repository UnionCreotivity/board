<template>
  <article class="home-cut home-cut-2">
    <div class="home-cut-2-container">
      <div class="home-cut-2-top">
        <FadeInItem>
          <SecondCutTop
            v-for="item in contentImage"
            :key="nanoid()"
            :imgSrc="item.src"
            :name="item.name"
            :currentTag="currentTag"
        /></FadeInItem>
      </div>
      <div class="home-cut-2-bottom-thumb">
        <img
          v-for="item in contentImage"
          :src="item.src"
          :alt="item.name"
          :class="[item.name, item.active]"
          @click="thumbClick(item.name)"
        />
      </div>
    </div>
    <h1 style="color: white; text-align: center">我是slide-1</h1>
  </article>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import FadeInItem from "@/components/transition/FadeInItem.vue";
import SecondCutTop from "./SecondCutTop.vue";

const currentTag = ref("thumb1");

const contentImage = ref([
  {
    name: "thumb1",
    src: new URL(
      "@/assets/img/second-cut/006-logo-cover-bg4.webp",
      import.meta.url
    ).href,
    active: "thumb-active",
  },
  {
    name: "thumb2",
    src: new URL(
      "@/assets/img/second-cut/007-logo-cover-bg5.webp",
      import.meta.url
    ).href,
    active: "thumb-inactive",
  },
  {
    name: "thumb3",
    src: new URL(
      "@/assets/img/second-cut/008-logo-cover-bg6.webp",
      import.meta.url
    ).href,
    active: "thumb-inactive",
  },
  {
    name: "thumb4",
    src: new URL(
      "@/assets/img/second-cut/009-logo-cover-bg7.webp",
      import.meta.url
    ).href,
    active: "thumb-inactive",
  },
]);

const thumbClick = (e: string) => {
  currentTag.value = e;
};

watch(
  () => currentTag.value,
  () => {
    contentImage.value.forEach((item) => {
      item.active = "thumb-inactive";
    });
    let filterItem = contentImage.value.filter(
      (item) => item.name === currentTag.value
    );
    if (filterItem) {
      filterItem[0].active = "thumb-active";
    }
  }
);
</script>

<style lang="scss"></style>
