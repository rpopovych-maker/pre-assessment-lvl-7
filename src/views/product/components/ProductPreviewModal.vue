<template>
  <el-dialog
    :model-value="isOpen.ProductPreviewModal"
    :before-close="() => closeModal('ProductPreviewModal')"
    align-center
    width="90%"
    class="max-w-[1000px] md:p-6"
    @keydown.prevent.right="navigate(activeIndex + 1)"
    @keydown.prevent.left="navigate(activeIndex - 1)"
  >
    <div class="flex flex-col items-center overflow-hidden">
      <div ref="swipeContainerRef" class="aspect-square max-h-[70vh] relative w-full mb-4">
        <Transition :name="`slide-${slideDirection}`">
          <img
            :key="activeIndex"
            :src="images[activeIndex]"
            class="absolute inset-0 size-full object-contain"
            alt="Product image"
          >
        </Transition>
      </div>

      <ProductThumbnails
        class="w-full"
        :images="images"
        :selected-index="activeIndex"
        @select="navigate"
      />
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
type TSlideDirection = 'left' | 'right'

const props = defineProps<{
  images: string[]
  initialIndex?: number
}>()

const { isOpen, closeModal } = useModals()

const activeIndex = ref(props.initialIndex ?? 0)
const slideDirection = ref<TSlideDirection>('right')

const swipeContainerRef = useTemplateRef<HTMLElement>('swipeContainerRef')

const { direction } = useSwipe(swipeContainerRef, {
  onSwipeEnd () {
    if (direction.value === 'left') navigate(activeIndex.value + 1)
    if (direction.value === 'right') navigate(activeIndex.value - 1)
  }
})

function navigate (index: number) {
  const len = props.images.length
  const next = (index + len) % len

  slideDirection.value = next > activeIndex.value ? 'right' : 'left'
  activeIndex.value = next
}
</script>
