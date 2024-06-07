<template>
  <article id="calculator">
    <h1 class="cal-title">計算算算算</h1>
    <CalculatorForm />
    <CalculatorResult />
  </article>
</template>

<script setup lang="ts">
import CalculatorForm from "@/components/calculator/CalculatorForm.vue";
import CalculatorResult from "@/components/calculator/CalculatorResult.vue";
</script>

<style scoped></style>
