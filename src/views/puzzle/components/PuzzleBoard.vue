<template>
  <div>
    <div class="mb-4 flex items-center justify-between gap-2 sm:gap-6">
      <el-button
        class="puzzle"
        type="primary"
        size="large"
        @click="startNewGame"
      >
        New Game
      </el-button>

      <PuzzleGameDetails :moves :elapsed-time="elapsed" />
    </div>

    <PuzzleGrid>
      <TransitionGroup name="tile">
        <PuzzleTile
          v-for="(tile, index) in tiles"
          :key="tile ?? 'empty'"
          :index
          :tile
          :blocked="blockedTileIndex === index"
          :disabled="isWin"
          @click="onTileClick(tile, index)"
        />
      </TransitionGroup>
    </PuzzleGrid>
  </div>
</template>

<script setup lang="ts">
const {
  tiles,
  elapsed,
  moves,
  isWin,
  blockedTileIndex,
  onTileClick,
  startNewGame
} = usePuzzle()

onMounted(() => {
  startNewGame()
})
</script>

<style lang="css" scoped>
.tile-move {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
