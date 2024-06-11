<template>
  <div class="menu-content" :style="menuContentWidth">
    <div class="menu-content-close" @click="closeMenu"></div>
    <div class="menu-content-title" @click="backHome">
      <img
        src="../../../assets/img/menu/svg/001-menu-logo.svg"
        alt="menu-logo"
      />
    </div>
    <div class="menu-content-main">
      <MenuLink
        v-for="item in linkItem"
        :key="item.id"
        :content="item.content"
        :name="item.name"
        :toggle="props.toggle"
        @link-toggle="toggleValue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import MenuLink from "./MenuLink.vue";

const linkItem = ref([
  {
    id: nanoid(),
    name: "TOP",
    content: [
      { path: "/top", pathName: "TOP1" },
      { path: "/top", pathName: "TOP2" },
    ],
  },
  {
    id: nanoid(),
    name: "MIDTOWN",
    content: [
      { path: "/mid", pathName: "MIDTOWN1" },
      { path: "/mid", pathName: "MIDTOWN2" },
    ],
  },
  {
    id: nanoid(),
    name: "DESIGN",
    content: [
      { path: "/design", pathName: "DESIGN1" },
      { path: "/design", pathName: "DESIGN2" },
    ],
  },
  {
    id: nanoid(),
    name: "LANDMARK",
    content: [
      { path: "/land", pathName: "LANDMARK1" },
      { path: "/land", pathName: "LANDMARK2" },
    ],
  },
  {
    id: nanoid(),
    name: "CALC",
    content: [
      { path: "/calc", pathName: "CALC1" },
      { path: "/calc", pathName: "CALC2" },
    ],
  },
  {
    id: nanoid(),
    name: "FLOORS",
    content: [
      { path: "/floor", pathName: "FLOORS1" },
      { path: "/floor", pathName: "FLOORS2" },
    ],
  },
]);

const props = defineProps(["toggle"]);

const emits = defineEmits(["toggle-menu"]);

const menuContentWidth = ref({ clipPath: "0%" });

const router = useRouter();

const toggleValue = (val: boolean) => {
  emits("toggle-menu", val);
};

//大icon返回首頁
const backHome = () => {
  router.push("/");
  emits("toggle-menu", false);
};

//右上關閉按鈕
const closeMenu = () => {
  emits("toggle-menu", false);
};

let timer: number | NodeJS.Timeout;
watch(
  () => props.toggle,
  (newValue) => {
    if (timer) {
      clearTimeout(timer);
    }
    //設置setTimeout是因為不先讓轉場的動畫跑一部分的話，會有閃爍，所以先跑一部分轉場，再進行menu的動畫
    timer = setTimeout(() => {
      if (newValue === true) {
        menuContentWidth.value.clipPath = "inset(0 0 0 0)";
      } else {
        menuContentWidth.value.clipPath = "inset(0 0 0 100%)";
      }
    }, 100);
  }
);
</script>

<style scoped></style>
