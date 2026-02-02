import type { Action } from 'element-plus'
import pluralize from 'pluralize'

class PuzzleService {
  BOARD_SIZE = 4
  TILES_QUANTITY = this.BOARD_SIZE ** 2
  SHUFFLE_INTENSITY = 200

  getMovableIndices (index: number) {
    const row = Math.floor(index / this.BOARD_SIZE)
    const col = index % this.BOARD_SIZE
    const neighbors: number[] = []
    if (row > 0) neighbors.push(index - this.BOARD_SIZE) // up
    if (row < this.BOARD_SIZE - 1) neighbors.push(index + this.BOARD_SIZE) // down
    if (col > 0) neighbors.push(index - 1) // left
    if (col < this.BOARD_SIZE - 1) neighbors.push(index + 1) // right
    return neighbors
  }

  getShuffledBoard () {
    const tiles: TTile[] = [...Array.from({ length: this.TILES_QUANTITY - 1 }, (_, i) => i + 1), null]

    let blankIndex = tiles.indexOf(null)

    for (let i = 0; i < this.SHUFFLE_INTENSITY; i++) {
      const movable = this.getMovableIndices(blankIndex)
      const nextIndex: number = movable[Math.floor(Math.random() * movable.length)]!
      this.swapTiles(tiles, blankIndex, nextIndex)
      blankIndex = nextIndex
    }

    return tiles
  }

  swapTiles (tiles: TTile[], index1: number, index2: number) {
    [tiles[index1], tiles[index2]] = [tiles[index2]!, tiles[index1]!]
  }

  checkWin (board: TTile[]) {
    return board
      .slice(0, this.TILES_QUANTITY - 1)
      .every((tile, i) => tile === i + 1) && board.at(-1) === null
  }

  showWinMessage (moves: number, time: number, onConfirm: () => void) {
    return ElMessageBox.alert('🎉 You solved the puzzle! 🎉<br>' +
      `It took you <b>${pluralize('move', moves, true)}</b> and <b>${pluralize('second', time, true)}</b> to complete it.<br>`,
    {
      confirmButtonText: 'Play Again!',
      title: 'Awesome!',
      buttonSize: 'large',
      showClose: false,
      dangerouslyUseHTMLString: true,
      center: true,
      callback: (action: Action) => {
        if (action === 'confirm') onConfirm()
      }
    })
  }
}

export const puzzleService = new PuzzleService()
