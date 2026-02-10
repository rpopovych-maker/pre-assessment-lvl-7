<template>
  <div class="min-h-0 w-full bg-violet-900 flex flex-col items-center text-white p-4 overflow-auto">
    <header class="mb-16">
      <h1 class="text-3xl font-bold">15 Puzzle</h1>
    </header>

    <main class="w-full flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// WORKAROUND: Set bg color for Puzzle view here instead of body because of multiple tasks with different styles
const BG_COLOR = 'bg-violet-900'

onMounted(() => {
  document.documentElement.classList.add(BG_COLOR)
})

onUnmounted(() => {
  document.documentElement.classList.remove(BG_COLOR)
})
</script>
