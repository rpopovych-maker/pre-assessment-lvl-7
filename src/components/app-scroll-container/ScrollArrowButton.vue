<template>
  <button
    class="hidden lg:flex absolute top-1/2 -translate-y-1/2 z-10
      size-10 items-center justify-center rounded-full
      bg-white/90 shadow-lg border border-neutral-200
      text-slate-600 hover:text-slate-900 hover:bg-white
      transition-colors"
    :class="direction === 'left' ? 'left-0' : 'right-0'"
    :aria-label="`Scroll ${direction}`"
  >
    <Icon :name="direction === 'left' ? 'chevron-left' : 'chevron-right'" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  direction: 'left' | 'right'
}>()
</script>
