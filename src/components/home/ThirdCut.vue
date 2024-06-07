<template>
  <article class="home-cut home-cut-3">
    <h1 style="color: white; text-align: center">我是slide-2</h1>
    <div class="svg-test">
      <span class="svg-test-R" style="color: white"
        >R

        <svg>
          <use xlink:href="#letter--r"></use></svg
      ></span>
    </div>
    <svg
      style="
        width: 0px;
        height: 0px;
        position: absolute;
        left: -9999px;
        opacity: 0;
      "
    >
      <clipPath id="letter--r1-mask">
        <path d="M14.724 82.981h41.041v168.483H14.724z"></path>
      </clipPath>
      <clipPath id="letter--r2-mask">
        <path
          d="M54.684 158.822h26.441c15.361 0 22.561-7.92 22.561-21.12 0-12.48-7.199-20.641-22.561-20.641H54.684v-34.08h28.842c41.281 0 61.922 23.76 61.922 53.041 0 21.12-11.521 41.041-37.441 48.721 0 0-3.187.908-4.687 1.096s-6.313 1.688-13.375 1.875-35.261.163-35.261.163v-29.055z"
        ></path>
      </clipPath>
      <clipPath id="letter--r3-mask">
        <path
          d="M108.006 184.743l38.881 66.722h-46.32l-35.041-63.602 42.48-3.12z"
        ></path>
      </clipPath>
      <symbol id="letter--r" viewBox="0 0 155.98 335.958">
        <path
          class="path1 letter letter--r"
          clip-path="url(#letter--r1-mask)"
          d="M35.025 81.199v171.827"
        ></path>
        <path
          class="path2 letter letter--r"
          clip-path="url(#letter--r2-mask)"
          d="M53.688 100.315h24.47c28.348 0 45.411 15.986 45.411 37.246 0 19.116-15.911 36.916-45.411 36.916h-24.47"
        ></path>
        <path
          class="path3 letter letter--r"
          clip-path="url(#letter--r3-mask)"
          d="M81.775 176.026l49.874 89.5"
        ></path>
      </symbol>
    </svg>
  </article>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.svg-test-R {
  position: relative;
  font-size: 14.2vw;
  font-family: "Noto Sans TC", sans-serif;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.letter {
  stroke-width: 60px;
  stroke: black;
}
</style>
