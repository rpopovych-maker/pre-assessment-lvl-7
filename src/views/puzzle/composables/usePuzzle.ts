export function usePuzzle () {
  const stopwatch = useStopwatch()
  const { addGameRecord } = useGameRecords()

  const tiles = ref<TTile[]>([])
  const moves = ref(0)
  const isWin = ref(false)
  const blockedTileIndex = ref<number | null>(null)

  let blockTimeoutId: ReturnType<typeof setTimeout> | null = null

  const emptyTileIndex = computed(() => tiles.value.indexOf(null))

  function endGame () {
    stopwatch.pause()
    addGameRecord({ time: stopwatch.elapsed.value, moves: moves.value })
    setTimeout(() => puzzleService.showWinMessage(moves.value, stopwatch.elapsed.value, startNewGame), 400)
  }

  function checkAndHandleWin () {
    isWin.value = puzzleService.checkWin(tiles.value)
    if (isWin.value) endGame()
  }

  function moveTile (tileIndex: number) {
    if (moves.value === 0) stopwatch.start()
    moves.value++
    puzzleService.swapTiles(tiles.value, emptyTileIndex.value, tileIndex)
    checkAndHandleWin()
  }

  function animateNonMovableTile (index: number) {
    blockedTileIndex.value = index
    if (blockTimeoutId !== null) clearTimeout(blockTimeoutId)
    blockTimeoutId = setTimeout(() => {
      blockedTileIndex.value = null
      blockTimeoutId = null
    }, 400)
  }

  function canMoveTile (tile: TTile, index: number) {
    if (tile === null) return false
    return puzzleService.getMovableIndices(emptyTileIndex.value).includes(index)
  }

  function onTileClick (tile: TTile, index: number) {
    if (!canMoveTile(tile, index)) {
      animateNonMovableTile(index)
      return
    }
    moveTile(index)
  }

  function startNewGame () {
    stopwatch.reset()
    isWin.value = false
    moves.value = 0
    tiles.value = puzzleService.getShuffledBoard()
  }

  return {
    tiles,
    elapsed: stopwatch.elapsed,
    moves,
    isWin,
    blockedTileIndex,
    startNewGame,
    onTileClick
  }
}
