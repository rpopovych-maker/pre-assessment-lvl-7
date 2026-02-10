<template>
  <div class="overflow-x-auto whitespace-nowrap">
    <AppSeparatorContainer :gap="4" separator="/">
      <component
        :is="item.link ? 'router-link' : 'span'"
        v-for="item in breadcrumbs"
        :key="item.label"
        v-bind="item.link"
        class="text-slate-300 last:text-secondary last:font-semibold text-sm hover:text-secondary transition-colors"
      >
        <span
          :class="{
            'underline underline-offset-2': item.link
          }"
        >

          {{ item.label }}
        </span>
      </component>
    </AppSeparatorContainer>
  </div>
</template>

<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'

interface IBreadcrumbItem {
  label: string
  link?: RouterLinkProps
}

defineProps<{
  breadcrumbs: IBreadcrumbItem[]
}>()
</script>
