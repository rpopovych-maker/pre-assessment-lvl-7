<template>
  <button
    class="shrink-0 size-16 md:size-[100px] rounded-lg md:rounded-xl border transition-colors
     bg-neutral-100/50 border-neutral-100 p-2 md:p-3"
    :class="{
      'border-secondary bg-neutral-200': isSelected,
      'cursor-not-allowed opacity-25 bg-slate-100/25': disabled
    }"
    :disabled
  >
    <img
      :src="src"
      :alt="alt"
      class="size-full object-contain"
    >
  </button>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  isSelected: boolean
  disabled?: boolean
}>()
</script>
