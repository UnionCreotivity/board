<template>
  <swiper
    id="home"
    :speed="1000"
    :slides-per-view="1"
    :space-between="0"
    :direction="'vertical'"
    :mousewheel="true"
    :modules="[Mousewheel]"
    @slide-change="onSlideChange"
  >
    <swiper-slide><FirstCut /></swiper-slide>
    <swiper-slide><SecondCut /></swiper-slide>
    <swiper-slide><ThirdCut /></swiper-slide>
    <swiper-slide><FourthCUt /></swiper-slide>
    <swiper-slide><FifthCut /></swiper-slide>
    <swiper-slide><SixthCut /></swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel } from "swiper/modules";
import "swiper/css/bundle";
import FirstCut from "@/components/home/FirstCut.vue";
import SecondCut from "@/components/home/SecondCut.vue";
import ThirdCut from "@/components/home/ThirdCut.vue";
import FourthCUt from "@/components/home/FourthCUt.vue";
import FifthCut from "@/components/home/FifthCut.vue";
import SixthCut from "@/components/home/SixthCut.vue";
import "@/assets/scss/home/home.scss";

const onSlideChange = () => {
  console.log("change");
};
</script>

<style lang="scss" scoped></style>
