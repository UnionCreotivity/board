import { defineStore } from "pinia";

interface GlobalType {
  routeKey: number;
}

export const useViewStore = defineStore("globalView", {
  state: (): GlobalType => {
    return {
      routeKey: 0,
    };
  },
});
