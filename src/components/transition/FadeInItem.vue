<template>
  <TransitionGroup name="fade-item" mode="out-in">
    <slot></slot>
  </TransitionGroup>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.fade-item-enter-from,
.fade-item-leave-to {
  opacity: 0;
  transform: translateX(2vw);
}

.fade-item-enter-to,
.fade-item-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fade-item-enter-active {
  transition: all 0.75s;
  transition-delay: 0.4s;
}
.fade-item-leave-active {
  transition: all 0.75s;
}
</style>
