import { homeRouteNames } from '@/views/home/home.routes'
import { puzzleRouteNames } from '@/views/puzzle/puzzle.routes'
import { contactsRouteNames } from '@/views/contacts/contacts.routes'
import { productRouteNames } from '@/views/product/product.routes'

export const routeNames = {
  ...homeRouteNames,
  ...puzzleRouteNames,
  ...contactsRouteNames,
  ...productRouteNames
}
