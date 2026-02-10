import type { RouteRecordRaw } from 'vue-router'
import { homeRoutes } from '@/views/home/home.routes'
import { puzzleRoutes } from '@/views/puzzle/puzzle.routes'
import { contactsRoutes } from '@/views/contacts/contacts.routes'
import { productRoutes } from '@/views/product/product.routes'

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...puzzleRoutes,
  ...contactsRoutes,
  ...productRoutes,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export {
  routes
}
