<template>
  <div
    class="grid aspect-square gap-2 rounded-md bg-violet-950 p-4"
    :style="{
      gridTemplateColumns: `repeat(${puzzleService.BOARD_SIZE}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${puzzleService.BOARD_SIZE}, minmax(0, 1fr))`
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { puzzleService } from '@/views/puzzle/puzzle.service'
</script>
