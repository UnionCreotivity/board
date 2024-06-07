<template>
  <div id="floor-fancybox">
    <div class="floor-fancybox-main-img" :class="right">
      <img :src="props.boxContent.image" />
    </div>
    <div class="floor-fancybox-close-button" @click="show">
      <div class="floor-fancybox-close-line-1"></div>
      <div class="floor-fancybox-close-line-2"></div>
    </div>
    <div class="floor-fancybox-name" v-if="props.boxContent?.type === 'public'">
      <!-- 公設 -->
      <p>{{ props.boxContent?.imageName }}</p>
    </div>
    <div class="floor-fancybox-left" v-else>
      <!-- 家配 -->
      <div class="floor-fancybox-titlebox">
        <h2>{{ showTagName }}</h2>
        <h4>家具配置圖</h4>
        <div class="s_line"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["boxContent"]);

const emits = defineEmits(["toggle-box"]);

const tagName = ref(props.boxContent?.className);

const right = computed(() => {
  return props.boxContent?.type === "public" ? "" : "floor-fancybox-right";
});

const showTagName = computed(() => {
  let strSplit = tagName.value.split("-");
  return strSplit[0].toUpperCase();
});

const show = () => {
  emits("toggle-box");
};
</script>

<style lang="scss" scoped></style>
