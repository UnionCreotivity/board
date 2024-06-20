<template>
  <div class="floor-page">
    <FloorContent :floor="floor" />
    <div class="floor-main">
      <FloorNav @select-floor="setFloor" @move="setMove" :floor="floor" />
      <div class="floor-plan-img">
        <ScaleDrag :maxRatio="3" :init="{ x: 100, y: 100 }">
          <FadeInItem>
            <div
              class="container"
              v-for="item in filteredFloor"
              :key="nanoid()"
            >
              <div class="anchor-area">
                <img class="imgBox" :src="item.src" />
                <FloorPoints
                  v-for="content in item.floorContent"
                  :key="nanoid()"
                  :className="content?.className"
                  :image="content?.image"
                  :imageName="content?.imageName"
                  :type="item.type"
                  @toggle-box="toggleBox"
                />
              </div>
            </div>
          </FadeInItem>
        </ScaleDrag>
      </div>
    </div>

    <Teleport to="body">
      <!-- 彈跳頁面 -->
      <FadeIn
        ><FloorFancyBox
          v-if="showbox"
          :boxContent="boxContent"
          @toggle-box="toggleBox"
      /></FadeIn>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import FloorNav from "@/components/floor/FloorNav.vue";
import FloorContent from "@/components/floor/FloorContent.vue";
import ScaleDrag from "@/components/floor/ScaleDrag.vue";
import FadeInItem from "@/components/transition/FadeInItem.vue";
import FadeIn from "@/components/transition/FadeIn.vue";
import FloorPoints from "@/components/floor/FloorPoints.vue";
import FloorFancyBox from "@/components/fancybox/FloorFancyBox.vue";
import { floorImg } from "@/components/floor/data/FloorData";

const imgBox = ref<HTMLImageElement | null>(null);

const floor = ref("1F");

const showbox = ref(false);

const boxContent = ref({});

const setFloor = (val: string) => {
  //選擇樓層
  floor.value = val;
};

const setMove = (val: number) => {
  //上下箭頭的輪播
  const filterId = floorImg.filter((item) => item.floorId === val);
  floor.value = filterId[0].name;
};

const toggleBox = (val?: {}) => {
  //判斷是否需要跳出fancybox
  if (val) {
    boxContent.value = val;
  } else {
    boxContent.value = {};
  }
  showbox.value = !showbox.value;
};

const filteredFloor = computed(() => {
  return floorImg.filter((item) => {
    return item.name === floor.value;
  });
});

onMounted(() => {
  if (imgBox.value) {
    // 可以在這裡對 imgBox 進行操作，例如初始化等
  }
});
</script>
