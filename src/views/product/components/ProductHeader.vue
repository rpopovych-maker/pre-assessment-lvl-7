<template>
  <header class="py-3 md:py-9 bg-white sticky top-0 z-20 md:static">
    <ProductBreadcrumbs
      :breadcrumbs="breadcrumbs"
    />
  </header>
</template>

<script setup lang="ts">
import { routeNames } from '@/router/route-names'

const breadcrumbs = [
  {
    label: 'Home',
    link: { to: routeNames.home }
  },
  {
    label: 'Unisex Shoes',
    link: { to: '#' }
  },
  {
    label: 'Unisex SportStyle Shoes'
  }
]
</script>
