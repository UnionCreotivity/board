<template>
  <div id="floor3D-page">
    <div class="floor3D-main">
      <Floor3DNav :mainType="mainType" @handel-main-type="handleMainType" />
      <Floor3DBuilding :mainType="mainType" />
      <div class="titleBox">{{ buildingName }} 棟 {{ mainType }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Floor3DBuilding from "@/components/floor3D/Floor3DBuilding.vue";
import Floor3DNav from "@/components/floor3D/Floor3DNav.vue";

const route = useRoute();

const mainType = ref("");

const buildingName = ref("");

const handleMainType = (type: string) => {
  mainType.value = type;
};

onMounted(() => {
  const query = route.query;
  buildingName.value = query.building as string;
});
</script>

<style scoped></style>
