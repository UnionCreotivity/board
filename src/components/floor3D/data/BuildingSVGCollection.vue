<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 271.16 927.44"
    class="building-svg building-a"
    v-show="props.buildingTag === 'A' || props.buildingTag === 'B'"
  >
    <g id="_圖層_6" data-name="圖層 6">
      <g>
        <rect
          class="building-cls"
          x="0"
          y="895.25"
          width="269.55"
          height="32.2"
          style="fill: transparent"
          :style="props.mainType === '1F' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />

        <rect
          class="building-cls"
          x=".54"
          y="858.9"
          width="269.55"
          height="36.35"
          style="fill: transparent"
          :style="
            props.mainType === '1F夾層' ? 'fill:rgba(194,164,87,0.45)' : ''
          "
        />
        <rect
          class="building-cls"
          x="1.07"
          y="826.7"
          width="269.55"
          height="32.2"
          style="fill: transparent"
          :style="props.mainType === '2F' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />
        <rect
          class="building-cls"
          x="1.61"
          y="790.17"
          width="269.55"
          height="36.53"
          style="fill: transparent"
          :style="props.mainType === '3F' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />
        <rect
          class="building-cls"
          x="1.61"
          y="754.35"
          width="269.55"
          height="35.82"
          style="fill: transparent"
          :style="props.mainType === '4F' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />
        <rect
          class="building-cls"
          x="1.61"
          y="606.52"
          width="269.55"
          height="147.65"
          style="fill: transparent"
          :style="props.mainType === '5~8F' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />
        <rect
          class="building-cls"
          x="1.61"
          y="314.69"
          width="269.55"
          height="291.84"
          style="fill: transparent"
          :style="
            props.mainType === '9~16F' ? 'fill:rgba(194,164,87,0.45)' : ''
          "
        />
        <rect
          class="building-cls"
          x="1"
          y="278.34"
          width="270.16"
          height="36.35"
          style="fill: transparent"
          :style="props.mainType === '17F' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />
        <rect
          class="building-cls"
          x="2.68"
          y="132.94"
          width="268.48"
          height="145.4"
          style="fill: transparent"
          :style="
            props.mainType === '18~21F' ? 'fill:rgba(194,164,87,0.45)' : ''
          "
        />
        <rect
          class="building-cls"
          x="1.61"
          y="95.55"
          width="268.48"
          height="37.39"
          style="fill: transparent"
          :style="props.mainType === '22F' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />
        <rect
          class="building-cls"
          x="2.68"
          y="66.47"
          width="268.48"
          height="29.08"
          style="fill: transparent"
          :style="props.mainType === 'R1' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />
        <rect
          class="building-cls"
          x="43.49"
          y="29.08"
          width="185.79"
          height="36.35"
          style="fill: transparent"
          :style="props.mainType === 'R2' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />
        <rect
          class="building-cls"
          x="44.57"
          width="184.71"
          height="29.08"
          style="fill: transparent"
          :style="props.mainType === 'R3' ? 'fill:rgba(194,164,87,0.45)' : ''"
        />
      </g>
    </g>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 356 931.27"
    class="building-svg building-c"
    v-show="props.buildingTag === 'C'"
  >
    <g id="_圖層_8" data-name="圖層 8">
      <g>
        <rect
          style="fill: transparent"
          :style="props.mainType === '1F' ? 'fill:rgba(194,164,87,0.45)' : ''"
          y="899.08"
          width="355.29"
          height="32.2"
        />
        <rect
          style="fill: transparent"
          :style="
            props.mainType === '1F夾層' ? 'fill:rgba(194,164,87,0.45)' : ''
          "
          x=".71"
          y="862.73"
          width="355.29"
          height="36.35"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === '2F' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="1.25"
          y="830.53"
          width="313.13"
          height="32.2"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === '3F' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="1.87"
          y="794.18"
          width="313.13"
          height="36.35"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === '4F' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="2.87"
          y="764.18"
          width="313.13"
          height="29.82"
        />

        <rect
          style="fill: transparent"
          :style="props.mainType === '5~8F' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="1.87"
          y="629"
          width="313.13"
          height="135"
        />
        <rect
          style="fill: transparent"
          :style="
            props.mainType === '9~16F' ? 'fill:rgba(194,164,87,0.45)' : ''
          "
          x="2.33"
          y="364"
          width="313.13"
          height="264"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === '17F' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="1.87"
          y="325"
          width="313.13"
          height="39"
        />
        <rect
          style="fill: transparent"
          :style="
            props.mainType === '18~21F' ? 'fill:rgba(194,164,87,0.45)' : ''
          "
          x="3.12"
          y="190"
          width="311.88"
          height="135"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === '22F' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="2.87"
          y="155"
          width="311.88"
          height="34.77"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === '23F' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="2.87"
          y="123"
          width="311.88"
          height="32.77"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === '24F' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="2.87"
          y="98"
          width="311.88"
          height="25.77"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === 'R1' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="2.12"
          y="69.3"
          width="311.88"
          height="29.08"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === 'R2' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="86"
          y="32.91"
          width="162"
          height="36.35"
        />
        <rect
          style="fill: transparent"
          :style="props.mainType === 'R3' ? 'fill:rgba(194,164,87,0.45)' : ''"
          x="86.94"
          width="161.06"
          height="32.91"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps(["buildingTag", "mainType"]);
</script>

<style scoped></style>
