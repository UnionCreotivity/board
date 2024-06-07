<template>
  <div :class="props.className" class="floor-points" @click="show">
    <div class="thumbBox">
      <img
        src="../../assets/img/floor/point_icon_new.svg"
        alt="point_icon_new"
      />
    </div>
    <div className="radiation">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["className", "image", "imageName", "type"]);

const emits = defineEmits(["toggle-box"]);

const show = () => {
  emits("toggle-box", {
    image: props.image,
    imageName: props.imageName,
    type: props.type,
    className: props.className,
  });
};
</script>

<style lang="scss" scoped></style>
