<template>
  <div class="left-box">
    <div class="left-floor-nav">
      <div class="prev-arrow-box arrow-box" @click="move(-1)">
        <img
          src="../../assets/img/floor/choose/000-arrow-top.svg"
          alt=""
          srcset=""
          class="arrow"
        />
      </div>
      <ul>
        <li
          v-for="item in state.data"
          :key="item.floor"
          :class="{ selected: selectedIndex === item.floor }"
          @click="selectFloor(item.floor)"
        >
          {{ item.floor }}
        </li>
      </ul>
      <div class="next-arrow-box arrow-box" @click="move(1)">
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
import "@/assets/scss/floor/floor.scss";
interface FloorItem {
  floor: string;
  id: number;
}

const emits = defineEmits(["select-floor", "move"]);

const props = defineProps(["floor"]);

const state = reactive({
  data: [
    { floor: "RF", id: 4 },
    { floor: "3F", id: 5 },
    { floor: "2F", id: 6 },
    { floor: "1F", id: 0 },
    { floor: "B1", id: 1 },
    { floor: "B2", id: 2 },
    { floor: "B3", id: 3 },
  ] as FloorItem[],
});

const pos = ref(0);

const floorLength = state.data.length;
const selectedIndex = ref<string | null>("1F");

const selectFloor = (index: string) => {
  selectedIndex.value = index;
  emits("select-floor", index);
};

const move = (step: number) => {
  pos.value = (pos.value + step + floorLength) % floorLength;
  emits("move", pos.value);
};

watch(
  () => props.floor,
  (newValue) => {
    selectedIndex.value = newValue;
    const findId = state.data.filter((item) => item.floor === props.floor);
    pos.value = findId[0].id;
  }
);
</script>

<style lang="scss" scoped></style>
