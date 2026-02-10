import type { RouteRecordRaw } from 'vue-router'

export const productRouteNames = {
  product: 'product'
}

export const productRoutes: RouteRecordRaw[] = [
  {
    path: '/product',
    name: productRouteNames.product,
    meta: {
      label: 'Product'
    },
    component: () => import('@/views/product/Product.vue')
  }
]
