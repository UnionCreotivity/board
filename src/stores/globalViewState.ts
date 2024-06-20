import { defineStore } from "pinia";

interface GlobalType {
  routeKey: number;
}

//透過vue資料驅動的特性來進行虛擬DOM的更新
export const useViewStore = defineStore("globalView", {
  state: (): GlobalType => {
    return {
      routeKey: 0,
    };
  },
});
