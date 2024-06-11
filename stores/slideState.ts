import { defineStore } from "pinia";

export const useSlideStore = defineStore("slide", {
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
