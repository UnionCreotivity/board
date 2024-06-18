<template>
  <div class="floor3D-building">
    <img :src="floor3D_Src" />
    <!-- <Floor3DLine /> -->
    <BuildingSVGCollection
      :buildingTag="floor3D_tag"
      :mainType="props.mainType"
    />
  </div>
</template>

<script setup lang="ts">
import BuildingSVGCollection from "./data/BuildingSVGCollection.vue";
import { floor3D_Building_Data } from "./data/Floor3D-Data";

const route = useRoute();

const props = defineProps(["mainType"]);

let floor3D_Src = ref("");

let floor3D_tag = ref("");

onMounted(() => {
  const query = route.query;
  const buildingName = query.building;

  const filterBuilding = floor3D_Building_Data.filter(
    (item) => item.building === buildingName
  );
  floor3D_Src.value = filterBuilding[0].image;
  floor3D_tag.value = filterBuilding[0].building;
});
</script>

<style lang="scss" scoped></style>
