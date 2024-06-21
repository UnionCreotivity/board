import { defineStore } from "pinia";

export const useDrawingStore = defineStore("Drawing", {
  state: () => {
    return {
      drawingToggle: false,
    };
  },
  actions: {
    toggleCanvas(val: boolean) {
      this.drawingToggle = val;
      console.log(this.drawingToggle);
    },
  },
});
