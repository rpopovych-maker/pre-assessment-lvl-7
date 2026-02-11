<template>
  <div class="overflow-hidden">
    <div
      class="shrink-0 aspect-square overflow-hidden rounded-lg border transition-colors
      bg-neutral-100/50 border-neutral-100 relative mb-2 md:mb-4 cursor-pointer"
      @click="openPreviewModal"
    >
      <img
        :src="thumbnails[activeIndex]"
        class="size-full object-contain p-4"
        :alt="`${productName} - Image ${activeIndex}`"
      >

      <slot name="overlay" />
    </div>

    <AppScrollContainer content-class="gap-2 md:gap-4">
      <ProductThumbnail
        v-for="(image, index) in thumbnails"
        :key="index"
        :src="image"
        :alt="`${props.productName} - Image ${activeIndex + 1}`"
        :is-selected="index === activeIndex"
        @click="activeIndex = index"
      />
    </AppScrollContainer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  productName: string
  images: IProductImage[]
}>()

const { openModal } = useModals()

const thumbnails = computed(() => props.images.map(img => img.large))

const activeIndex = ref(0)

function openPreviewModal () {
  openModal('ProductPreviewModal', {
    images: thumbnails.value,
    initialIndex: activeIndex.value,
    productName: props.productName
  })
}

watch(() => props.images, () => {
  activeIndex.value = 0
})
</script>
