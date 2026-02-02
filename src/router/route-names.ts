import { homeRouteNames } from '@/views/home/home.routes'
import { puzzleRouteNames } from '@/views/puzzle/puzzle.routes'
import { contactsRouteNames } from '@/views/contacts/contacts.routes'

export const routeNames = {
  ...homeRouteNames,
  ...puzzleRouteNames,
  ...contactsRouteNames
}
