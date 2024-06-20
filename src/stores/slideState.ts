import { defineStore } from "pinia";

export const useSlideStore = defineStore("slide", {
  //首頁的輪播位置
  state: () => {
    return {
      slideState: 0,
    };
  },
  actions: {
    storeSlideIndex(val: number) {
      this.slideState = val;
    },
  },
});
