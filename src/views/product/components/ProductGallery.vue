<template>
  <div class="overflow-hidden">
    <div
      class="shrink-0 aspect-square overflow-hidden rounded-lg border transition-colors
      bg-neutral-100/50 border-neutral-100 relative mb-2 md:mb-4 cursor-pointer"
      @click="openModal('ProductPreviewModal', { images: galleryImages, initialIndex: activeIndex })"
    >
      <img
        :src="galleryImages[activeIndex]"
        class="size-full object-contain p-4"
        :alt="`${productName} - Image ${activeIndex}`"
      >

      <slot name="overlay" />
    </div>

    <ProductThumbnails
      :images="galleryImages"
      :selected-index="activeIndex"
      @select="activeIndex = $event"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  productName: string
  images: IProductImage[]
}>()

const { openModal } = useModals()

const galleryImages = computed(() => props.images
  .filter((img): img is IProductImage & { large: string } => !!img.large)
  .map(img => img.large)
)

const activeIndex = ref(0)

watch(() => props.images, () => {
  activeIndex.value = 0
})
</script>
