import type { RouteRecordRaw } from 'vue-router'

export const puzzleNames = {
  puzzle: 'puzzle'
}

export const puzzleRoutes: RouteRecordRaw[] = [
  {
    path: '/puzzle',
    name: puzzleNames.puzzle,
    meta: {
      label: 'Puzzle'
    },
    component: () => import('@/views/puzzle/Puzzle.vue')
  }
]
