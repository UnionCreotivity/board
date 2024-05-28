<template>
  <div class="left-box">
    <div class="left-floor-nav">
      <div class="prev-arrow-box arrow-box">
        <img
          src="../../assets/img/floor/choose/000-arrow-top.svg"
          alt=""
          srcset=""
          class="arrow"
        />
      </div>
      <ul>
        <li
          v-for="(item, index) in state.data"
          :key="index"
          @click="selectFloor(index)"
          :class="{ selected: selectedIndex === index }"
        >
          {{ item.floor }}
        </li>
      </ul>
      <div class="next-arrow-box arrow-box">
        <img
          src="../../assets/img/floor/choose/001-arrow-bottom.svg"
          alt=""
          srcset=""
          class="arrow"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import "@/assets/scss/floor/floor.scss";
interface FloorItem {
  floor: string;
}

const state = reactive({
  data: [
    { floor: "RF" },
    { floor: "3F" },
    { floor: "2F" },
    { floor: "1F" },
    { floor: "B1" },
    { floor: "B2" },
    { floor: "B3" },
  ] as FloorItem[],
});

const selectedIndex = ref<number | null>(null);

const selectFloor = (index: number) => {
  selectedIndex.value = index;
};
</script>

<style lang="scss" scoped></style>
