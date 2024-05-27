<template>
  <div
    class="menu-container"
    :class="props.dir"
    :style="[trans, toggleStyle]"
    @mousemove="getMousePos"
  >
    <div class="menu-inner" @click="toggleValue">
      <svg
        id="_圖層_2"
        data-name="圖層 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 44.99 431.79"
      >
        <g>
          <path
            d="M44.99,0s-.05,431.79-.05,431.79c-8.49-26.71-15.97-53.79-22.85-80.96C9.65,301.7-4.87,249.16,1.59,198.01c2.29-18.13,6.12-36.1,9.87-53.96C20.6,100.42,30.99,57.06,41.6,13.78c1.13-4.59,2.26-9.18,3.39-13.78Z"
            fill="#c3a457"
          />
        </g>
      </svg>
      <div class="hamburger"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["dir", "cssVar", "toggle"]);

const emits = defineEmits(["toggle-menu"]);

const cssLocalVar = ref(props.cssVar);

const mousePos = ref({ x: 0, y: 0 });

const toggleStyle = ref({ right: "" });

const getMousePos = (val: MouseEvent) => {
  mousePos.value.y = val.clientY;
};

const trans = computed(() => {
  return { [cssLocalVar.value]: mousePos.value.y + "px" };
});

const toggleValue = () => {
  emits("toggle-menu", !props.toggle);
};

watch(
  () => props.toggle,
  (oldValue, newValue) => {
    if (props.dir === "right-menu") {
      if (newValue === true) {
        toggleStyle.value.right = "0vw";
      } else {
        toggleStyle.value.right = "-3vw";
      }
    }
  }
);
</script>

<style scoped>
.left-menu .menu-inner {
  transform: translateY(var(--menu-left-pos));
}
.right-menu .menu-inner {
  transform: translateY(var(--menu-right-pos));
}
</style>
