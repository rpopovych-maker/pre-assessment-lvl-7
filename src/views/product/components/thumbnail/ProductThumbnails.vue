<template>
  <AppScrollContainer content-class="gap-2 md:gap-4">
    <ProductThumbnail
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      :alt="`Product thumbnail ${index + 1}`"
      :is-selected="index === selectedIndex"
      @click="emit('select', index)"
    />
  </AppScrollContainer>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
  selectedIndex: number
}>()

const emit = defineEmits<{ select: [index: number] }>()
</script>
