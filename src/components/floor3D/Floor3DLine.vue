<template>
  <canvas ref="canvasRef" width="1024" height="1024" />
</template>

<script setup lang="ts">
//canvas測試用
const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext("2d");
    canvasRef.value.width = window.innerWidth;
    canvasRef.value.height = window.innerHeight;

    if (ctx) {
      ctx.save();
      ctx.strokeStyle = "red";
      ctx.fillStyle = "red";
      ctx.lineWidth = 2.5;
      ctx.arc(10, 10, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(500, 10);
      ctx.lineTo(1000, 200);
      ctx.stroke();
      ctx.restore();
    }
  }
});
</script>

<style scoped></style>
