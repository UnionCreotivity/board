<template>
  <swiper
    id="home"
    :speed="1000"
    :slides-per-view="1"
    :space-between="0"
    :direction="'vertical'"
    :mousewheel="true"
    :modules="[Mousewheel]"
    @swiper="onSwiper"
    @active-index-change="onSlideChange"
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
import { useSlideStore } from "@/stores/slideState";
import FirstCut from "@/components/home/FirstCut.vue";
import SecondCut from "@/components/home/secondCut/SecondCut.vue";
import ThirdCut from "@/components/home/ThirdCut.vue";
import FourthCUt from "@/components/home/FourthCUt.vue";
import FifthCut from "@/components/home/FifthCut.vue";
import SixthCut from "@/components/home/SixthCut.vue";
import "@/assets/scss/home/home.scss";

const slideStore = useSlideStore();

const swiperInstance = ref();

const onSlideChange = (val: any) => {
  slideStore.storeSlideIndex(val.activeIndex);
};

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};
function goToSlide(position: number) {
  swiperInstance.value.slideTo(position, 0);
}
onMounted(() => {
  console.log(slideStore.slideState);
  goToSlide(slideStore.slideState);
});
</script>

<style lang="scss" scoped></style>
