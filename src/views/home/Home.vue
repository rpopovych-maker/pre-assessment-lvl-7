<template>
  <div class="p-5">
    <nav>
      <ul class="flex items-center gap-4 justify-center">
        <li v-for="route in filteredRoutes" :key="route.name">
          <el-link>
            <router-link :to="{ name: route.name }">
              {{ route.meta?.label }}
            </router-link>
          </el-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { routes } from '@/router/routes'

const filteredRoutes = routes.filter(route => route.meta && route.meta.label)
</script>
