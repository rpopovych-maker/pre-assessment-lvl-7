import type { RouteRecordRaw } from 'vue-router'

export const puzzleRouteNames = {
  puzzle: 'puzzle'
}

export const puzzleRoutes: RouteRecordRaw[] = [
  {
    path: '/puzzle',
    name: puzzleRouteNames.puzzle,
    meta: {
      label: 'Puzzle'
    },
    component: () => import('@/views/puzzle/Puzzle.vue')
  }
]
