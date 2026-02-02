import type { RouteRecordRaw } from 'vue-router'

export const homeNames = {
  home: 'home'
}

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: homeNames.home,
    meta: {
      label: 'Home'
    },
    component: () => import('@/views/home/Home.vue')
  }
]
