<template>
  <dl class="grid grid-cols-[minmax(120px,1fr)_4fr] gap-y-3 gap-x-3 md:gap-x-6">
    <template v-for="item in items" :key="item.label">
      <dt class="font-bold break-words min-w-0">{{ item.label }}</dt>
      <dd class="break-words min-w-0">{{ item.value }}</dd>
    </template>
  </dl>
</template>

<script setup lang="ts">
defineProps<{
  items: ILabelValue[]
}>()
</script>
