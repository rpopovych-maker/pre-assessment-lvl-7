import type { RouteRecordRaw } from 'vue-router'
import { homeRoutes } from '@/views/home/home.routes'
import { puzzleRoutes } from '@/views/puzzle/puzzle.routes'

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...puzzleRoutes,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export {
  routes
}
